/* MCAT Half-Length Diagnostic: single-page app.
   Screens: home → (section intro → exam ⇄ review screen → break) × 4 → results.
   Progress lives in localStorage so a refresh never loses work; finished attempts are also
   saved to the local Python server (data/attempts.json) when it is running. */
(function () {
  "use strict";

  // ---------------------------------------------------------------- data prep
  const ORDER = ["cp", "cars", "bb", "ps"];
  const BREAK_AFTER = { cp: 5 * 60, cars: 15 * 60, bb: 5 * 60 }; // half of the real 10 / 30 / 10 min
  const SECTIONS = ORDER.map((id) => window.MCAT_SECTIONS.find((s) => s.id === id));

  const CATEGORY_NAMES = {
    "1A": "Proteins, amino acids & enzymes", "1B": "Transmission of genetic information",
    "1C": "Heredity & evolution", "1D": "Bioenergetics & metabolism",
    "2A": "Cells & tissues", "2B": "Prokaryotes & viruses", "2C": "Cell division & development",
    "3A": "Nervous & endocrine systems", "3B": "Organ systems",
    "4A": "Motion, forces, work & energy", "4B": "Fluids & gases", "4C": "Electrochemistry & circuits",
    "4D": "Light, sound & spectroscopy", "4E": "Atoms, nuclear decay & stoichiometry",
    "5A": "Water, solutions, acids & bases", "5B": "Molecular structure & stereochemistry",
    "5C": "Separation & purification", "5D": "Biomolecule structure & reactivity",
    "5E": "Thermodynamics & kinetics",
    "6A": "Sensing the environment", "6B": "Cognition, memory, sleep & language", "6C": "Emotion, motivation & stress",
    "7A": "Individual influences on behavior", "7B": "Social processes & behavior", "7C": "Learning & attitude change",
    "8A": "Self-identity & development", "8B": "Social thinking & attribution", "8C": "Social interactions & discrimination",
    "9A": "Social structure & theory", "9B": "Demographics",
    "10A": "Social inequality",
    Skill: "Research design (Scientific Inquiry & Reasoning)"
  };

  const PLAN = window.STUDY_PLAN;
  const PLAN_BY_TOPIC = {};
  PLAN.topics.forEach((t) => { if (!PLAN_BY_TOPIC[t.topic]) PLAN_BY_TOPIC[t.topic] = t; });

  const ALL_QUESTIONS = [];
  SECTIONS.forEach((sec) => {
    sec.questions = [];
    let passageNo = 0;
    sec.blocks.forEach((block, bi) => {
      const first = sec.questions.length + 1;
      block.questions.forEach((q) => {
        const num = sec.questions.length + 1;
        const full = Object.assign({}, q, { id: sec.id + "-" + num, num, sec, blockIdx: bi });
        sec.questions.push(full);
        ALL_QUESTIONS.push(full);
      });
      const last = sec.questions.length;
      block.key = sec.id + "-b" + bi;
      if (block.type === "passage") {
        passageNo++;
        block.label = `Passage ${passageNo} (Questions ${first}–${last})`;
      } else {
        block.label = `Questions ${first}–${last} do not refer to a passage and are independent of each other.`;
      }
    });
  });
  const Q_BY_ID = Object.fromEntries(ALL_QUESTIONS.map((q) => [q.id, q]));

  // ---------------------------------------------------------------- storage
  const PROGRESS_KEY = "mcatDx.progress";
  const ATTEMPTS_KEY = "mcatDx.attempts";

  function lsGet(key, fallback) {
    try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; }
  }
  function lsSet(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable */ }
  }

  const api = {
    online: false,
    async list() {
      try {
        const r = await fetch("/api/attempts");
        if (!r.ok) throw new Error();
        const data = await r.json();
        this.online = true;
        // Merge in anything saved only locally (e.g., taken while the server was down).
        const local = lsGet(ATTEMPTS_KEY, []);
        const ids = new Set(data.map((a) => a.id));
        for (const a of local) if (!ids.has(a.id)) { data.push(a); this.save(a); }
        lsSet(ATTEMPTS_KEY, data);
        return data;
      } catch (e) {
        this.online = false;
        return lsGet(ATTEMPTS_KEY, []);
      }
    },
    async save(attempt) {
      const local = lsGet(ATTEMPTS_KEY, []).filter((a) => a.id !== attempt.id);
      local.push(attempt);
      lsSet(ATTEMPTS_KEY, local);
      try { await fetch("/api/attempts", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(attempt) }); } catch (e) { /* offline */ }
    },
    async update(id, patch) {
      const local = lsGet(ATTEMPTS_KEY, []);
      const a = local.find((x) => x.id === id);
      if (a) { Object.assign(a, patch); lsSet(ATTEMPTS_KEY, local); }
      try { await fetch("/api/attempts/" + encodeURIComponent(id), { method: "PUT", headers: { "Content-Type": "application/json" }, body: JSON.stringify(patch) }); } catch (e) { /* offline */ }
    },
    async remove(id) {
      lsSet(ATTEMPTS_KEY, lsGet(ATTEMPTS_KEY, []).filter((a) => a.id !== id));
      try { await fetch("/api/attempts/" + encodeURIComponent(id), { method: "DELETE" }); } catch (e) { /* offline */ }
    }
  };

  // ---------------------------------------------------------------- state
  let S = lsGet(PROGRESS_KEY, null); // in-progress exam (null when none)
  let view = { screen: "home", attempt: null, filter: "wrong" };
  let attempts = [];
  const scrollMemory = {};

  function newExam() {
    const timeLeft = {};
    SECTIONS.forEach((s) => { timeLeft[s.id] = s.minutes * 60; });
    return {
      id: "dx-" + Date.now(), startedAt: new Date().toISOString(),
      phase: "intro", secIdx: 0, qIdx: 0, breakLeft: 0,
      answers: {}, flags: {}, strikes: {}, highlights: {}, visited: {}, timeOnQ: {}, timeLeft
    };
  }
  function persist() { if (S) lsSet(PROGRESS_KEY, S); else { try { localStorage.removeItem(PROGRESS_KEY); } catch (e) {} } }
  const sec = () => SECTIONS[S.secIdx];
  const curQ = () => sec().questions[S.qIdx];

  // ---------------------------------------------------------------- helpers
  const $app = document.getElementById("app");
  const $modal = document.getElementById("modal-root");
  const LETTERS = ["A", "B", "C", "D"];

  function fmtClock(sec) {
    sec = Math.max(0, Math.round(sec));
    const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
    const mm = String(m).padStart(h ? 2 : 1, "0"), ss = String(s).padStart(2, "0");
    return h ? `${h}:${mm}:${ss}` : `${mm}:${ss}`;
  }
  function parseDate(ymd) { const [y, m, d] = ymd.split("-").map(Number); return new Date(y, m - 1, d); }
  function fmtDate(ymd) { return parseDate(ymd).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" }); }
  function daysFromToday(ymd) {
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return Math.round((parseDate(ymd) - t) / 86400000);
  }
  function relDays(ymd) {
    const d = daysFromToday(ymd);
    if (d === 0) return "today";
    if (d > 0) return `in ${d} day${d === 1 ? "" : "s"}`;
    return `${-d} day${d === -1 ? "" : "s"} ago`;
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function stripTags(html) { const d = document.createElement("div"); d.innerHTML = html; return d.textContent; }

  // Rough raw→scaled conversion modeled on typical AAMC practice-exam curves. Directional only.
  const CURVE = [[0, 118], [0.25, 118], [0.4, 121], [0.5, 123], [0.6, 125], [0.7, 127], [0.8, 129], [0.88, 130], [0.94, 131], [1, 132]];
  function scaled(pct) {
    for (let i = 1; i < CURVE.length; i++) {
      const [x1, y1] = CURVE[i - 1], [x2, y2] = CURVE[i];
      if (pct <= x2) return Math.round(y1 + ((pct - x1) / (x2 - x1)) * (y2 - y1));
    }
    return 132;
  }

  // ---------------------------------------------------------------- modals
  function openModal(title, bodyHtml, { wide = false, onClose } = {}) {
    $modal.innerHTML = `<div class="modal-backdrop" data-act="modal-close-bg"><div class="modal" style="${wide ? "" : "max-width:560px"}" role="dialog" aria-label="${esc(title)}">
      <header><span>${title}</span><button data-act="modal-close" aria-label="Close">×</button></header>
      <div class="body">${bodyHtml}</div></div></div>`;
    $modal._onClose = onClose;
  }
  function closeModal() { $modal.innerHTML = ""; if ($modal._onClose) { const f = $modal._onClose; $modal._onClose = null; f(); } }
  function confirmModal(title, text, okLabel, onOk) {
    openModal(title, `<p style="line-height:1.5">${text}</p><div class="row" style="justify-content:flex-end;margin-top:16px">
      <button class="btn secondary" data-act="modal-close">Cancel</button><button class="btn" data-act="modal-ok">${okLabel}</button></div>`);
    $modal._onOk = onOk;
  }

  function periodicTableHtml() {
    const cells = window.PERIODIC.map((e) => {
      const row = e.row >= 9 ? e.row + 1 : e.row; // leave a gap row before the f-block
      return `<div class="el" style="grid-row:${row};grid-column:${e.col}"><span>${e.z}</span><b>${e.sym}</b><span>${e.mass}</span></div>`;
    }).join("");
    return `<div class="ptable">${cells}<div class="gap" style="grid-row:9"></div></div>`;
  }

  // ---------------------------------------------------------------- timer
  let tickHandle = null;
  function startTicking() {
    if (tickHandle) return;
    tickHandle = setInterval(tick, 1000);
  }
  function stopTicking() { clearInterval(tickHandle); tickHandle = null; }
  function tick() {
    if (!S || view.screen !== "exam") return;
    if (S.phase === "exam" || S.phase === "review") {
      const id = sec().id;
      S.timeLeft[id] -= 1;
      if (S.phase === "exam") { const q = curQ(); S.timeOnQ[q.id] = (S.timeOnQ[q.id] || 0) + 1; }
      const el = document.querySelector(".timer");
      if (el) { el.textContent = "Time Remaining: " + fmtClock(S.timeLeft[id]); el.classList.toggle("low", S.timeLeft[id] <= 300); }
      if (S.timeLeft[id] <= 0) {
        S.timeLeft[id] = 0;
        persist();
        openModal("Time Expired", `<p>Time for the ${esc(sec().name)} section has expired. Your answers have been saved.</p>
          <div class="row" style="justify-content:flex-end"><button class="btn" data-act="modal-close">Continue</button></div>`, { onClose: endSection });
        stopTicking();
        return;
      }
    } else if (S.phase === "break") {
      S.breakLeft -= 1;
      const el = document.querySelector(".break-clock");
      if (el) el.textContent = fmtClock(S.breakLeft);
      if (S.breakLeft <= 0) { S.secIdx++; S.phase = "intro"; persist(); render(); return; }
    }
    persist();
  }

  // ---------------------------------------------------------------- exam flow
  function startSection() { S.phase = "exam"; S.qIdx = 0; persist(); render(); }
  function goTo(idx) {
    S.qIdx = Math.max(0, Math.min(sec().questions.length - 1, idx));
    S.phase = "exam"; persist(); render();
  }
  function next() {
    if (S.qIdx === sec().questions.length - 1) { S.phase = "review"; persist(); render(); }
    else goTo(S.qIdx + 1);
  }
  function endSection() {
    closeModalSilently();
    if (S.secIdx === SECTIONS.length - 1) return finishExam();
    const id = sec().id;
    if (BREAK_AFTER[id]) { S.phase = "break"; S.breakLeft = BREAK_AFTER[id]; }
    else { S.secIdx++; S.phase = "intro"; }
    persist(); render();
  }
  function closeModalSilently() { $modal._onClose = null; $modal.innerHTML = ""; }

  async function finishExam() {
    stopTicking();
    const timeUsed = {};
    SECTIONS.forEach((s) => { timeUsed[s.id] = s.minutes * 60 - S.timeLeft[s.id]; });
    const attempt = {
      id: S.id, startedAt: S.startedAt, finishedAt: new Date().toISOString(),
      answers: S.answers, flags: S.flags, timeOnQ: S.timeOnQ, timeUsed, reflections: {}
    };
    attempt.summary = summarize(attempt);
    S = null; persist();
    await api.save(attempt);
    attempts = await api.list();
    view = { screen: "results", attempt, filter: "wrong" };
    render();
    window.scrollTo(0, 0);
  }

  // ---------------------------------------------------------------- scoring & analysis
  function summarize(attempt) {
    const bySection = {};
    let total = 0;
    SECTIONS.forEach((s) => {
      const correct = s.questions.filter((q) => attempt.answers[q.id] === q.answer).length;
      const pct = correct / s.questions.length;
      const sc = scaled(pct);
      bySection[s.id] = { correct, total: s.questions.length, pct, scaled: sc };
      total += sc;
    });
    return { bySection, total };
  }
  const isCorrect = (attempt, q) => attempt.answers[q.id] === q.answer;

  function analyze(attempt) {
    const missed = ALL_QUESTIONS.filter((q) => !isCorrect(attempt, q));
    // Science topics, keyed by study-plan topic.
    const topics = {};
    missed.filter((q) => q.plan && q.plan.length).forEach((q) => {
      q.plan.forEach((t) => {
        const entry = topics[t] || (topics[t] = { topic: t, plan: PLAN_BY_TOPIC[t], qs: [], subjects: new Set(), cats: new Set(), sec: q.sec });
        entry.qs.push(q);
        entry.subjects.add(q.subject);
        entry.cats.add(q.category);
      });
    });
    const topicList = Object.values(topics).sort((a, b) =>
      b.qs.length - a.qs.length || ((a.plan && a.plan.date) || "9").localeCompare((b.plan && b.plan.date) || "9"));

    // Content categories (science) and CARS skills.
    const cats = {};
    const skills = {};
    ALL_QUESTIONS.forEach((q) => {
      const ok = isCorrect(attempt, q);
      if (q.skill) {
        const s = skills[q.skill] || (skills[q.skill] = { name: q.skill, correct: 0, total: 0 });
        s.total++; if (ok) s.correct++;
      } else {
        const key = q.category;
        const c = cats[key] || (cats[key] = { code: key, name: CATEGORY_NAMES[key] || key, sec: q.sec, subject: q.subject, correct: 0, total: 0 });
        c.total++; if (ok) c.correct++;
      }
    });
    const subjects = {};
    ALL_QUESTIONS.filter((q) => q.subject).forEach((q) => {
      const s = subjects[q.subject] || (subjects[q.subject] = { name: q.subject, correct: 0, total: 0 });
      s.total++; if (isCorrect(attempt, q)) s.correct++;
    });
    return {
      missed, topicList,
      cats: Object.values(cats).sort((a, b) => a.correct / a.total - b.correct / b.total),
      skills: Object.values(skills),
      subjects: Object.values(subjects).sort((a, b) => a.correct / a.total - b.correct / b.total)
    };
  }

  // ---------------------------------------------------------------- render: home
  function renderHome() {
    const dDiag = daysFromToday(PLAN.diagnosticDate), dTest = daysFromToday(PLAN.testDate);
    const totalQ = ALL_QUESTIONS.length;
    const totalMin = SECTIONS.reduce((a, s) => a + s.minutes, 0);
    const inProgress = S && S.phase !== "results";
    const past = attempts.slice().sort((a, b) => b.finishedAt.localeCompare(a.finishedAt));

    $app.innerHTML = `<div class="page">
      <h1>MCAT Half-Length Diagnostic</h1>
      <p class="lede">A timed, half-length practice exam built like the real MCAT: four sections in official order, passage-based and discrete questions, highlight and strikethrough tools, flag-for-review, a navigation and review screen, and the periodic table in the science sections. Every missed question is mapped to the subject and the exact topic in your 6-month study schedule.</p>

      <div class="card">
        <div class="row" style="justify-content:space-between">
          <div>
            <div><b>Study plan:</b> the diagnostic is scheduled for <b>${fmtDate(PLAN.diagnosticDate)}</b> (${relDays(PLAN.diagnosticDate)}).</div>
            <div class="small" style="margin-top:4px">Test day: ${fmtDate(PLAN.testDate)}, ${dTest} days away. The next two days of the plan: review why each question was right or wrong, then review the major topics you missed.</div>
          </div>
          <div class="row">
            ${inProgress ? `<button class="btn" data-act="resume">Resume exam</button><button class="btn secondary" data-act="discard">Discard</button>`
                         : `<button class="btn" data-act="start">Start diagnostic</button>`}
          </div>
        </div>
        ${inProgress ? `<p class="small" style="margin:10px 0 0">In progress: ${esc(sec().short)}, ${Object.keys(S.answers).length} of ${totalQ} answered. Started ${new Date(S.startedAt).toLocaleString()}.</p>` : ""}
      </div>

      <h2>Exam format</h2>
      <div class="card">
        <table class="plain">
          <tr><th>Section</th><th>Questions</th><th>Passages</th><th>Discretes</th><th>Time</th></tr>
          ${SECTIONS.map((s) => {
            const p = s.blocks.filter((b) => b.type === "passage").length;
            const d = s.blocks.filter((b) => b.type === "discrete").reduce((a, b) => a + b.questions.length, 0);
            const brk = BREAK_AFTER[s.id] ? `<tr><td colspan="5" class="small">Optional break, ${BREAK_AFTER[s.id] / 60} min</td></tr>` : "";
            return `<tr><td>${esc(s.name)}</td><td>${s.questions.length}</td><td>${p}</td><td>${d || "—"}</td><td>${s.minutes} min</td></tr>${brk}`;
          }).join("")}
          <tr><th>Total</th><th>${totalQ}</th><th></th><th></th><th>${Math.floor(totalMin / 60)} h ${totalMin % 60} min + breaks</th></tr>
        </table>
        <p class="small" style="margin-bottom:0">The real MCAT has 59 questions in 95 min for each science section (10 passages + 15 discretes) and 53 questions in 90 min for CARS (9 passages). This diagnostic keeps the same ratios at half length. No calculator is allowed.</p>
      </div>

      <h2>Exam tools</h2>
      <div class="card small" style="line-height:1.7">
        <b>Highlight</b> (Alt+H): select passage or question text, then click Highlight. <b>Remove Highlight</b> clears it from the selected text.<br>
        <b>Strikethrough</b> (Alt+S): select text in an answer choice and click Strikethrough, or right-click a choice.<br>
        <b>Flag for Review</b> (Alt+F) · <b>Previous</b> (Alt+P) · <b>Next</b> (Alt+N) · <b>Navigation</b> (Alt+V) · <b>Periodic Table</b> (Alt+T, science sections)<br>
        After the last question you'll see the <b>Review Screen</b>, which lists incomplete and flagged questions. The section ends when you click <b>End Section</b> or time runs out.
        Progress saves automatically. <b>Save &amp; Exit</b> pauses the clock (not allowed on the real exam).
      </div>

      ${past.length ? `<h2>Past attempts</h2><div class="card"><table class="plain">
        <tr><th>Date</th>${SECTIONS.map((s) => `<th>${s.short}</th>`).join("")}<th>Total (est.)</th><th></th></tr>
        ${past.map((a) => `<tr><td>${new Date(a.finishedAt).toLocaleString()}</td>
          ${SECTIONS.map((s) => `<td>${a.summary.bySection[s.id].scaled} <span class="small">(${a.summary.bySection[s.id].correct}/${a.summary.bySection[s.id].total})</span></td>`).join("")}
          <td><b>${a.summary.total}</b></td><td><button class="btn secondary" data-act="view-attempt" data-id="${a.id}">View results</button></td></tr>`).join("")}
      </table><p class="small">${api.online ? "Saved on this computer in data/attempts.json." : "Server not running, so results are saved in this browser only. Run <code>python3 server.py</code> to keep them in a file."}</p></div>` : ""}
    </div>`;
  }

  // ---------------------------------------------------------------- render: section intro & break
  function renderIntro() {
    const s = sec();
    const p = s.blocks.filter((b) => b.type === "passage").length;
    $app.innerHTML = `<div class="exam" style="grid-template-rows:auto 1fr auto">
      <div class="titlebar"><span class="name">MCAT Half-Length Diagnostic: Section ${S.secIdx + 1} of ${SECTIONS.length}</span></div>
      <div class="page" style="overflow:auto">
        <h1>${esc(s.name)}</h1>
        <div class="card" style="line-height:1.6">
          <p>This section has <b>${s.questions.length} questions</b> and you have <b>${s.minutes} minutes</b> to finish it.</p>
          ${s.id === "cars"
            ? `<p>There are ${p} passages. Everything you need to answer the questions is in the passages. <b>No outside knowledge is required.</b> Some passages may express opinions you disagree with. Answer on the basis of what the passage says.</p>`
            : `<p>Most questions are in groups that follow a descriptive passage (${p} passages). The rest are independent of any passage and of each other. ${s.periodicTable ? "A periodic table is available from the toolbar." : ""} Calculators are not permitted.</p>`}
          <p>Choose the <b>one best answer</b>. There is no penalty for guessing, so answer every question.</p>
          <p class="small">Pacing target: about ${(s.minutes * 60 / s.questions.length / 60).toFixed(1)} minutes per question.</p>
        </div>
      </div>
      <div class="navbar"><span class="spacer"></span><button data-act="save-exit">Save &amp; Exit</button><button data-act="begin-section"><u>N</u>ext ▸ Begin Section</button></div>
    </div>`;
  }

  function renderBreak() {
    const nextSec = SECTIONS[S.secIdx + 1];
    $app.innerHTML = `<div class="exam" style="grid-template-rows:auto 1fr auto">
      <div class="titlebar"><span class="name">Optional Break</span></div>
      <div class="page" style="text-align:center">
        <h1>Take a break</h1>
        <p class="lede">You've finished ${esc(sec().name)}. The real MCAT gives ${sec().id === "cars" ? "a 30-minute lunch break" : "a 10-minute break"} here. Stand up, drink some water, and have a snack.</p>
        <div class="score-box" style="display:inline-block;min-width:240px"><div class="small">Break time remaining</div><div class="big break-clock">${fmtClock(S.breakLeft)}</div></div>
        <p class="small" style="margin-top:20px">Next: ${esc(nextSec.name)} (${nextSec.questions.length} questions, ${nextSec.minutes} min)</p>
      </div>
      <div class="navbar"><span class="spacer"></span><button data-act="save-exit">Save &amp; Exit</button><button data-act="end-break">End Break ▸</button></div>
    </div>`;
  }

  // ---------------------------------------------------------------- render: exam
  function titlebar(extra) {
    const s = sec();
    const t = S.timeLeft[s.id];
    return `<div class="titlebar"><span class="name">MCAT Diagnostic: ${esc(s.name)}</span>
      <div class="meta"><span class="timer${t <= 300 ? " low" : ""}">Time Remaining: ${fmtClock(t)}</span>${extra || ""}
      <button class="btn secondary" style="padding:3px 10px;font-size:12px" data-act="save-exit">Save &amp; Exit</button></div></div>`;
  }

  function renderExam() {
    const s = sec(), q = curQ(), block = s.blocks[q.blockIdx];
    S.visited[q.id] = true;
    const prevScroll = { p: scrollMemory[block.key] || 0 };
    const strikes = S.strikes[q.id] || [];
    const passageHtml = S.highlights[block.key] || `<div class="plabel">${block.label}</div>${block.html || ""}`;
    const stemKey = q.id + "-stem";
    const stemHtml = S.highlights[stemKey] || q.stem;
    const choices = q.choices.map((c, i) => `
      <li class="choice${strikes.includes(i) ? " struck" : ""}" data-choice="${i}">
        <input type="radio" name="ans" id="c${i}" ${S.answers[q.id] === i ? "checked" : ""}>
        <label for="c${i}" class="letter">${LETTERS[i]}.</label><span class="ctext">${c}</span></li>`).join("");

    const questionPane = `<div class="pane question" data-pane="q">
        ${block.type === "discrete" ? `<div class="plabel small">${block.label}</div>` : ""}
        <div class="stem"><b>Question ${q.num}</b><div data-hl="${stemKey}">${stemHtml}</div></div>
        <ul class="choices">${choices}</ul></div>`;

    $app.innerHTML = `<div class="exam">
      ${titlebar(`<span>${q.num} of ${s.questions.length}</span>`)}
      <div class="toolbar" data-keep-selection>
        <button data-act="hl"><u>H</u>ighlight</button><button data-act="unhl">Remove Highlight</button>
        <button data-act="strike"><u>S</u>trikethrough</button>
        ${s.periodicTable ? `<button data-act="ptable">Periodic <u>T</u>able</button>` : ""}
        <span class="spacer"></span>
        <button data-act="flag" class="${S.flags[q.id] ? "flagged" : ""}">⚑ <u>F</u>lag for Review${S.flags[q.id] ? " (flagged)" : ""}</button>
      </div>
      <div class="panes${block.type === "discrete" ? " single" : ""}">
        ${block.type === "passage" ? `<div class="pane passage" data-pane="p" data-hl="${block.key}">${passageHtml}</div>` : ""}
        ${questionPane}
      </div>
      <div class="navbar">
        <button data-act="to-review">Review Screen</button><span class="spacer"></span>
        <button data-act="prev" ${S.qIdx === 0 ? "disabled" : ""}>◂ <u>P</u>revious</button>
        <button data-act="nav">Na<u>v</u>igation</button>
        <button data-act="next"><u>N</u>ext ▸</button>
      </div>
    </div>`;
    const pp = $app.querySelector('[data-pane="p"]');
    if (pp) { pp.scrollTop = prevScroll.p; pp.addEventListener("scroll", () => { scrollMemory[block.key] = pp.scrollTop; }); }
    persist();
  }

  function statusOf(q) {
    if (S.answers[q.id] !== undefined) return "Complete";
    return S.visited[q.id] ? "Incomplete" : "Unseen";
  }

  function renderReviewScreen() {
    const s = sec();
    const incomplete = s.questions.filter((q) => S.answers[q.id] === undefined).length;
    const flagged = s.questions.filter((q) => S.flags[q.id]).length;
    $app.innerHTML = `<div class="exam" style="grid-template-rows:auto auto 1fr auto">
      ${titlebar("")}
      <div class="toolbar"><span>Section Review</span></div>
      <div class="page" style="overflow:auto;max-width:1100px">
        <p class="lede">The table below lists the questions in this section. Click a question to go to it, or use the buttons below to review all, incomplete, or flagged questions. When you are finished, click <b>End Section</b>.</p>
        <p><span class="pill ${incomplete ? "bad" : "good"}">${incomplete} incomplete</span><span class="pill">${flagged} flagged</span></p>
        <div class="review-grid">${s.questions.map((q, i) => {
          const st = statusOf(q);
          return `<button class="review-item" data-act="goto" data-idx="${i}"><span>Question ${q.num} ${S.flags[q.id] ? '<span class="flag-icon">⚑</span>' : ""}</span>
            <span class="status ${st !== "Complete" ? "incomplete" : ""}">${st}</span></button>`;
        }).join("")}</div>
      </div>
      <div class="navbar">
        <button data-act="end-section-confirm">End Section</button><span class="spacer"></span>
        <button data-act="review-all">Review <u>A</u>ll</button>
        <button data-act="review-incomplete" ${incomplete ? "" : "disabled"}>Review <u>I</u>ncomplete</button>
        <button data-act="review-flagged" ${flagged ? "" : "disabled"}>Review <u>F</u>lagged</button>
      </div>
    </div>`;
  }

  function showNavigation() {
    const s = sec();
    openModal("Navigation: select a question to go to it", `<table class="plain">
      <tr><th>Question</th><th>Status</th><th>Flagged</th></tr>
      ${s.questions.map((q, i) => `<tr style="cursor:pointer" data-act="goto" data-idx="${i}">
        <td><a href="#" data-act="goto" data-idx="${i}">Question ${q.num}</a></td><td>${statusOf(q)}</td><td>${S.flags[q.id] ? '<span class="flag-icon">⚑ Flagged</span>' : ""}</td></tr>`).join("")}
    </table>`);
  }

  // ---------------------------------------------------------------- highlight / strikethrough
  function selectionContainer(attr) {
    const sel = window.getSelection();
    if (!sel.rangeCount || sel.isCollapsed) return null;
    let node = sel.getRangeAt(0).commonAncestorContainer;
    if (node.nodeType === 3) node = node.parentNode;
    return node.closest ? node.closest(attr) : null;
  }
  function highlight(remove) {
    const box = selectionContainer("[data-hl]");
    if (!box) return flash("Select text in the passage or question first.");
    box.contentEditable = "true";
    document.execCommand("styleWithCSS", false, true);
    document.execCommand("hiliteColor", false, remove ? "transparent" : "#fff176");
    box.contentEditable = "false";
    window.getSelection().removeAllRanges();
    S.highlights[box.dataset.hl] = box.innerHTML;
    persist();
  }
  function toggleStrike(i) {
    const q = curQ();
    const arr = S.strikes[q.id] || (S.strikes[q.id] = []);
    const at = arr.indexOf(i);
    if (at >= 0) arr.splice(at, 1); else arr.push(i);
    persist(); renderExam();
  }
  function strikeSelection() {
    const li = selectionContainer(".choice");
    if (!li) return flash("Select text in an answer choice first (or right-click the choice).");
    window.getSelection().removeAllRanges();
    toggleStrike(Number(li.dataset.choice));
  }
  function flash(msg) {
    let el = document.getElementById("flash");
    if (!el) { el = document.createElement("div"); el.id = "flash"; document.body.appendChild(el); }
    el.textContent = msg;
    el.style.cssText = "position:fixed;bottom:60px;left:50%;transform:translateX(-50%);background:#222;color:#fff;padding:8px 14px;border-radius:4px;font-size:13px;z-index:60";
    clearTimeout(el._t); el._t = setTimeout(() => el.remove(), 2200);
  }

  // ---------------------------------------------------------------- render: results
  function renderResults() {
    const a = view.attempt;
    const sum = a.summary || summarize(a);
    const an = analyze(a);
    const nWrong = an.missed.length;
    const fr = parseDate(PLAN.diagnosticDate); fr.setDate(fr.getDate() + 2);
    const firstDayReview = `${fr.getFullYear()}-${String(fr.getMonth() + 1).padStart(2, "0")}-${String(fr.getDate()).padStart(2, "0")}`;

    const topicRows = an.topicList.map((t) => {
      const p = t.plan;
      return `<tr>
        <td><b>${esc(t.topic)}</b><div class="small">${[...t.subjects].join(", ")} · ${[...t.cats].map((c) => `${c} ${esc(CATEGORY_NAMES[c] || "")}`).join("; ")}</div></td>
        <td>${t.qs.map((q) => `<a href="#q-${q.id}" class="pill bad" data-act="jump" data-id="${q.id}">${q.sec.short} Q${q.num}</a>`).join("")}</td>
        <td>${p ? `${fmtDate(p.date)}<div class="small">${relDays(p.date)}</div>` : "—"}</td>
        <td>${p ? `<a href="${p.url}" target="_blank" rel="noopener">Khan Academy ↗</a>` : ""}</td></tr>`;
    }).join("");

    const carsMissed = an.missed.filter((q) => q.skill);
    const filters = [["wrong", `Incorrect (${nWrong})`], ["all", "All"], ["flagged", "Flagged"], ...SECTIONS.map((s) => [s.id, s.short])];
    const list = ALL_QUESTIONS.filter((q) => {
      if (view.filter === "wrong") return !isCorrect(a, q);
      if (view.filter === "flagged") return a.flags[q.id];
      if (view.filter === "all") return true;
      return q.sec.id === view.filter;
    });

    $app.innerHTML = `<div class="page">
      <div class="row no-print" style="justify-content:space-between;margin-bottom:10px">
        <button class="btn secondary" data-act="home">◂ Home</button>
        <div class="row"><button class="btn secondary" data-act="print">Print / Save PDF</button><button class="btn secondary" data-act="delete-attempt">Delete attempt</button></div>
      </div>
      <h1>Diagnostic Results</h1>
      <p class="lede">Taken ${new Date(a.finishedAt).toLocaleString()} · ${ALL_QUESTIONS.length - nWrong} of ${ALL_QUESTIONS.length} correct</p>

      <div class="score-hero">
        ${SECTIONS.map((s) => {
          const r = sum.bySection[s.id];
          return `<div class="score-box"><div class="small">${s.short}</div><div class="big">${r.scaled}</div>
            <div class="small">${r.correct}/${r.total} correct · ${Math.round(r.pct * 100)}%</div>
            <div class="small">time used ${fmtClock(a.timeUsed[s.id])} of ${s.minutes}:00</div>
            <div class="bar"><span style="width:${Math.round(r.pct * 100)}%"></span></div></div>`;
        }).join("")}
        <div class="score-box total"><div class="small">Total (estimated)</div><div class="big">${sum.total}</div><div class="small">scale 472–528</div></div>
      </div>
      <p class="small">Scaled scores are a rough estimate from a raw-score curve like the AAMC practice exams'. With only 26–30 questions per section, treat them as ±2 points per section. They're a baseline, not a prediction.</p>

      <h2>Subjects that need reinforcement</h2>
      ${an.topicList.length ? `<div class="card">
        <p style="margin-top:0;line-height:1.5">Each missed science question is mapped to a topic in your 6-month schedule, sorted by number of misses. Your plan sets <b>${fmtDate(firstDayReview)}</b> for "Review Major Topics Missed from Diagnostic," so start at the top of this list. When a topic comes up in Phase 1, give it extra time and do every Khan Academy quiz question.</p>
        <table class="plain"><tr><th>Topic in your study plan</th><th>Missed</th><th>Scheduled</th><th>Resource</th></tr>${topicRows}</table></div>`
        : `<div class="card">No missed science questions. Nice work.</div>`}

      <h3>Weakest subjects</h3>
      <div class="card"><table class="plain"><tr><th>Subject</th><th>Score</th><th style="width:40%"></th></tr>
        ${an.subjects.map((s) => `<tr><td>${esc(s.name)}</td><td>${s.correct}/${s.total}</td><td><div class="bar"><span style="width:${Math.round(100 * s.correct / s.total)}%"></span></div></td></tr>`).join("")}
        <tr><td>CARS (reading &amp; reasoning)</td><td>${sum.bySection.cars.correct}/${sum.bySection.cars.total}</td><td><div class="bar"><span style="width:${Math.round(100 * sum.bySection.cars.pct)}%"></span></div></td></tr>
      </table></div>

      <h3>By AAMC content category</h3>
      <div class="card"><table class="plain"><tr><th>Category</th><th>Section</th><th>Score</th><th style="width:30%"></th></tr>
        ${an.cats.map((c) => `<tr><td><b>${c.code}</b> ${esc(c.name)}</td><td>${c.sec.short}</td><td>${c.correct}/${c.total}</td><td><div class="bar"><span style="width:${Math.round(100 * c.correct / c.total)}%"></span></div></td></tr>`).join("")}
      </table></div>

      <h3>CARS by reasoning skill</h3>
      <div class="card"><table class="plain"><tr><th>Skill</th><th>Score</th><th style="width:40%"></th></tr>
        ${an.skills.map((s) => `<tr><td>${esc(s.name)}</td><td>${s.correct}/${s.total}</td><td><div class="bar"><span style="width:${Math.round(100 * s.correct / s.total)}%"></span></div></td></tr>`).join("")}
      </table>
      <p class="small" style="margin-bottom:0">${carsMissed.length ? `You missed ${carsMissed.length} CARS question${carsMissed.length === 1 ? "" : "s"}. ` : ""}Your plan covers CARS with daily passages instead of content topics: 1–2 passages a day in Phase 1 (free on <a href="https://jackwestin.com/daily-cars-practice" target="_blank" rel="noopener">Jack Westin</a> or <a href="https://www.khanacademy.org/test-prep/mcat/critical-analysis-and-reasoning-skills" target="_blank" rel="noopener">Khan Academy</a>), 2–3 a day in Phase 2, and 3–4 AAMC passages a day in Phase 3. Focus on whichever skill above is lowest.</p></div>

      <h2>Question review</h2>
      <p class="small">Your plan's next step after the diagnostic is "Review Diagnostic: why did I get the question right or wrong?" Tag each missed question below. Your tags are saved with this attempt.</p>
      <div class="filters no-print">${filters.map(([k, label]) => `<button class="${view.filter === k ? "on" : ""}" data-act="filter" data-f="${k}">${label}</button>`).join("")}</div>
      ${list.length ? list.map((q) => questionReview(a, q)).join("") : `<div class="card small">Nothing to show for this filter.</div>`}

      <h2>Where to get more questions like these</h2>
      <div class="card" style="line-height:1.6">
        <ul style="margin:0;padding-left:20px">
          <li><a href="https://students-residents.aamc.org/prepare-mcat-exam/prepare-mcat-exam" target="_blank" rel="noopener">AAMC Official MCAT Prep</a>: the gold standard. Free unscored Sample Test plus the paid bundle of full-lengths, Question Packs, Section Banks, and the CARS Diagnostic Tool. Phase 3 of your plan uses these.</li>
          <li><a href="https://www.khanacademy.org/test-prep/mcat" target="_blank" rel="noopener">Khan Academy MCAT</a>: free passage-based questions made with the AAMC. Every topic link above goes to the matching quiz.</li>
          <li><a href="https://jackwestin.com/" target="_blank" rel="noopener">Jack Westin</a>: free daily CARS passages and a large free question bank.</li>
          <li><a href="https://blueprintprep.com/mcat/free-resources" target="_blank" rel="noopener">Blueprint free half-length diagnostic</a> and <a href="https://medschoolcoach.com/mcat-practice-exam/" target="_blank" rel="noopener">MedSchoolCoach free half-length</a>: a second baseline from a commercial prep company.</li>
          <li>Paid: UWorld or another third-party QBank (your plan's Phase 2).</li>
        </ul>
      </div>
    </div>`;
  }

  const REFLECTIONS = ["", "Content gap (didn't know it)", "Misread the question or passage", "Knew content, couldn't apply it", "Careless error", "Ran out of time / guessed", "Got it right but guessed"];

  function questionReview(a, q) {
    const picked = a.answers[q.id];
    const ok = picked === q.answer;
    const skipped = picked === undefined;
    const block = q.sec.blocks[q.blockIdx];
    const refl = (a.reflections || {})[q.id] || "";
    const reinforce = !ok ? (q.skill
      ? `<div class="reinforce"><b>Reinforce:</b> CARS: ${esc(q.skill)}. <span class="small">Practice with your plan's daily CARS passages. When you review, find the line in the passage that supports the right answer and name the reason each wrong answer fails.</span></div>`
      : `<div class="reinforce"><b>Reinforce:</b> ${esc(q.subject)} · ${q.category} ${esc(CATEGORY_NAMES[q.category] || "")}<br>
          <span class="small">Study-plan topic${q.plan.length > 1 ? "s" : ""}: </span>${q.plan.map((t) => {
            const p = PLAN_BY_TOPIC[t];
            return p ? `<span class="pill">${esc(t)}: ${fmtDate(p.date)}</span> <a class="small" href="${p.url}" target="_blank" rel="noopener">Khan ↗</a>` : `<span class="pill">${esc(t)}</span>`;
          }).join(" ")}</div>`) : "";
    return `<div class="qreview ${ok ? "" : skipped ? "skipped wrong" : "wrong"}" id="q-${q.id}">
      <div class="row" style="justify-content:space-between">
        <b>${esc(q.sec.short)}: Question ${q.num}</b>
        <span>${ok ? '<span class="pill good">Correct</span>' : skipped ? '<span class="pill bad">Not answered</span>' : '<span class="pill bad">Incorrect</span>'}
          ${a.flags[q.id] ? '<span class="pill">⚑ Flagged</span>' : ""}<span class="small">${fmtClock(a.timeOnQ[q.id] || 0)} spent</span></span>
      </div>
      ${block.type === "passage" ? `<details><summary class="small">Show ${esc(block.label)}</summary><div>${block.html}</div></details>` : ""}
      <div class="stem" style="margin:8px 0">${q.stem}</div>
      <ul class="choices">${q.choices.map((c, i) => `<li class="choice ${i === q.answer ? "correct" : ""} ${i === picked && !ok ? "picked-wrong" : ""}">
        <span class="letter">${LETTERS[i]}.</span><span>${c} ${i === q.answer ? "<b>✓ correct</b>" : ""}${i === picked && !ok ? " <b>✗ your answer</b>" : ""}</span></li>`).join("")}</ul>
      <div class="explain"><b>Explanation:</b> ${q.explanation}</div>
      ${reinforce}
      <div class="row small no-print" style="margin-top:10px">Why did I ${ok ? "get it right" : "miss it"}?
        <select data-act="reflect" data-id="${q.id}">${REFLECTIONS.map((r) => `<option ${r === refl ? "selected" : ""}>${esc(r)}</option>`).join("")}</select></div>
    </div>`;
  }

  // ---------------------------------------------------------------- render dispatch
  function render() {
    if (view.screen === "home") { stopTicking(); return renderHome(); }
    if (view.screen === "results") { stopTicking(); return renderResults(); }
    // exam screens
    if (S.phase === "intro") { stopTicking(); return renderIntro(); }
    startTicking();
    if (S.phase === "break") return renderBreak();
    if (S.phase === "review") return renderReviewScreen();
    return renderExam();
  }

  // ---------------------------------------------------------------- events
  document.addEventListener("mousedown", (e) => {
    // Keep the text selection alive when clicking toolbar buttons (needed for highlight/strike).
    if (e.target.closest("[data-keep-selection] button")) e.preventDefault();
  });

  document.addEventListener("click", async (e) => {
    const t = e.target.closest("[data-act]");
    const choice = e.target.closest(".exam .choice[data-choice]");
    if (choice && !t) {
      const i = Number(choice.dataset.choice);
      S.answers[curQ().id] = i;
      persist();
      choice.parentNode.querySelectorAll("input").forEach((inp, j) => { inp.checked = j === i; });
      return;
    }
    if (!t) return;
    const act = t.dataset.act;
    if (t.tagName === "A") e.preventDefault();
    switch (act) {
      case "modal-close": return closeModal();
      case "modal-close-bg": if (e.target === t) closeModal(); return;
      case "modal-ok": { const f = $modal._onOk; $modal._onOk = null; closeModalSilently(); if (f) f(); return; }
      case "start": S = newExam(); view.screen = "exam"; persist(); return render();
      case "resume": view.screen = "exam"; return render();
      case "discard": return confirmModal("Discard exam?", "This deletes your in-progress answers. You can't undo this.", "Discard", () => { S = null; persist(); render(); });
      case "save-exit": persist(); stopTicking(); view.screen = "home"; return render();
      case "begin-section": return startSection();
      case "end-break": S.secIdx++; S.phase = "intro"; persist(); return render();
      case "prev": return goTo(S.qIdx - 1);
      case "next": return next();
      case "nav": return showNavigation();
      case "goto": closeModalSilently(); return goTo(Number(t.dataset.idx));
      case "to-review": S.phase = "review"; persist(); return render();
      case "review-all": return goTo(0);
      case "review-incomplete": { const i = sec().questions.findIndex((q) => S.answers[q.id] === undefined); return goTo(i); }
      case "review-flagged": { const i = sec().questions.findIndex((q) => S.flags[q.id]); return goTo(i); }
      case "end-section-confirm": {
        const inc = sec().questions.filter((q) => S.answers[q.id] === undefined).length;
        return confirmModal("End Section", `${inc ? `<b>You have ${inc} incomplete question${inc === 1 ? "" : "s"}.</b> ` : ""}Are you sure you want to end this section? You can't come back to it.`, "Yes, end section", endSection);
      }
      case "flag": { const id = curQ().id; S.flags[id] = !S.flags[id]; if (!S.flags[id]) delete S.flags[id]; persist(); return renderExam(); }
      case "hl": return highlight(false);
      case "unhl": return highlight(true);
      case "strike": return strikeSelection();
      case "ptable": return openModal("Periodic Table of the Elements", periodicTableHtml(), { wide: true });
      case "home": view = { screen: "home" }; attempts = await api.list(); return render();
      case "view-attempt": view = { screen: "results", attempt: attempts.find((a) => a.id === t.dataset.id), filter: "wrong" }; render(); return window.scrollTo(0, 0);
      case "filter": view.filter = t.dataset.f; return render();
      case "jump": { view.filter = "wrong"; render(); const el = document.getElementById("q-" + t.dataset.id); if (el) el.scrollIntoView({ behavior: "smooth" }); return; }
      case "print": return window.print();
      case "delete-attempt": return confirmModal("Delete attempt?", "This permanently removes these results.", "Delete", async () => {
        await api.remove(view.attempt.id); attempts = await api.list(); view = { screen: "home" }; render();
      });
    }
  });

  document.addEventListener("change", (e) => {
    const t = e.target;
    if (t.dataset.act === "reflect") {
      const a = view.attempt;
      a.reflections = a.reflections || {};
      a.reflections[t.dataset.id] = t.value;
      api.update(a.id, { reflections: a.reflections });
    }
  });

  document.addEventListener("contextmenu", (e) => {
    const choice = e.target.closest(".exam .choice[data-choice]");
    if (choice) { e.preventDefault(); toggleStrike(Number(choice.dataset.choice)); }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && $modal.innerHTML) return closeModal();
    if (!e.altKey || view.screen !== "exam" || !S) return;
    const k = e.code;
    const inExam = S.phase === "exam";
    const map = {
      KeyN: () => (S.phase === "intro" ? startSection() : inExam ? next() : null),
      KeyP: () => inExam && goTo(S.qIdx - 1),
      KeyV: () => inExam && showNavigation(),
      KeyF: () => {
        if (inExam) { const id = curQ().id; S.flags[id] = !S.flags[id]; if (!S.flags[id]) delete S.flags[id]; persist(); renderExam(); }
        else if (S.phase === "review") { const i = sec().questions.findIndex((q) => S.flags[q.id]); if (i >= 0) goTo(i); }
      },
      KeyH: () => inExam && highlight(false),
      KeyS: () => inExam && strikeSelection(),
      KeyT: () => inExam && sec().periodicTable && openModal("Periodic Table of the Elements", periodicTableHtml(), { wide: true }),
      KeyA: () => S.phase === "review" && goTo(0),
      KeyI: () => { if (S.phase === "review") { const i = sec().questions.findIndex((q) => S.answers[q.id] === undefined); if (i >= 0) goTo(i); } }
    };
    if (map[k]) { e.preventDefault(); map[k](); }
  });

  // ---------------------------------------------------------------- boot
  (async function boot() {
    attempts = await api.list();
    render();
  })();
})();
