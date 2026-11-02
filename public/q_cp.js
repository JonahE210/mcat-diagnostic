// Chemical and Physical Foundations of Biological Systems (half-length: 5 passages + 8 discretes = 30 questions, 48 min)
// All questions are original, written to mirror AAMC style and the AAMC content outline.
// answer = index of the correct choice (0 = A). plan = exact topic names from the 6-month study schedule.
window.MCAT_SECTIONS = window.MCAT_SECTIONS || [];
window.MCAT_SECTIONS.push({
  id: "cp",
  short: "Chem/Phys",
  name: "Chemical and Physical Foundations of Biological Systems",
  minutes: 48,
  periodicTable: true,
  blocks: [
    {
      type: "passage",
      html: `
<p>Many orally administered drugs are weak acids. Because only the neutral (protonated) form of a weak acid readily diffuses across the lipid bilayers of the gastrointestinal epithelium, the pH of each region of the digestive tract influences how much of the drug is absorbed there.</p>
<p>Compound X (HX) is a monoprotic carboxylic acid with a p<i>K</i><sub>a</sub> of 4.5. To characterize it, a student titrated 25.0 mL of a 0.100 <i>M</i> aqueous solution of HX with 0.100 <i>M</i> NaOH at 25&nbsp;°C while monitoring pH with a calibrated electrode. Selected data are shown in Table 1.</p>
<table class="data"><caption>Table 1 Titration of 25.0 mL of 0.100 <i>M</i> HX with 0.100 <i>M</i> NaOH</caption>
<tr><th>Volume NaOH added (mL)</th><th>pH</th></tr>
<tr><td>0.0</td><td>2.75</td></tr><tr><td>5.0</td><td>3.90</td></tr><tr><td>12.5</td><td>?</td></tr>
<tr><td>20.0</td><td>5.10</td></tr><tr><td>25.0</td><td>?</td></tr><tr><td>30.0</td><td>11.96</td></tr></table>
<p>The student then estimated the fraction of Compound X that would be ionized in the stomach (pH ≈ 2.0) and in the small intestine (pH ≈ 7.0), using the Henderson–Hasselbalch relationship:</p>
<p class="eq">pH = p<i>K</i><sub>a</sub> + log([X<sup>–</sup>]/[HX])</p>`,
      questions: [
        {
          stem: "What is the pH of the solution after 12.5 mL of NaOH has been added?",
          choices: ["2.9", "4.5", "7.0", "8.6"],
          answer: 1,
          explanation: "12.5 mL is half of the 25.0 mL needed to reach equivalence. At the half-equivalence point [HX] = [X⁻], so log(1) = 0 and pH = pKa = 4.5.",
          subject: "General Chemistry", category: "5A", plan: ["Titrations", "Acid/base equilibria"]
        },
        {
          stem: "Which value is closest to the pH at the equivalence point of the titration?",
          choices: ["4.5", "7.0", "8.6", "12.7"],
          answer: 2,
          explanation: "At equivalence, all HX is converted to X⁻: 2.50 mmol in 50.0 mL = 0.0500 M. Kb = Kw/Ka = 10⁻¹⁴/10⁻⁴·⁵ = 10⁻⁹·⁵. [OH⁻] = √(0.05 × 3.2×10⁻¹⁰) ≈ 4×10⁻⁶ M, so pOH ≈ 5.4 and pH ≈ 8.6. The titration of a weak acid with a strong base always has an equivalence pH above 7.",
          subject: "General Chemistry", category: "5A", plan: ["Titrations", "Acid/base equilibria"]
        },
        {
          stem: "Approximately what percentage of Compound X is in its ionized form in the stomach?",
          choices: ["0.3%", "3%", "50%", "99.7%"],
          answer: 0,
          explanation: "pH − pKa = 2.0 − 4.5 = −2.5, so [X⁻]/[HX] = 10⁻²·⁵ ≈ 1/316. Ionized fraction ≈ 1/317 ≈ 0.3%. Because almost all of the drug is neutral at gastric pH, it can diffuse across membranes there.",
          subject: "General Chemistry", category: "5A", plan: ["Acid/base equilibria"]
        },
        {
          stem: "Which indicator would be most appropriate for detecting the endpoint of this titration?",
          choices: ["Methyl orange (transition range pH 3.1–4.4)", "Methyl red (transition range pH 4.4–6.2)", "Bromothymol blue (transition range pH 6.0–7.6)", "Phenolphthalein (transition range pH 8.2–10.0)"],
          answer: 3,
          explanation: "An indicator should change color near the equivalence-point pH (~8.6). Only phenolphthalein's range brackets that value. The other indicators would change color well before equivalence.",
          subject: "General Chemistry", category: "5A", plan: ["Titrations"]
        },
        {
          stem: "If the student had instead titrated the same HX sample with 0.100 <i>M</i> Ba(OH)<sub>2</sub>, what volume of base would be needed to reach the equivalence point?",
          choices: ["6.25 mL", "12.5 mL", "25.0 mL", "50.0 mL"],
          answer: 1,
          explanation: "Each Ba(OH)₂ provides 2 OH⁻, so 0.100 M Ba(OH)₂ is 0.200 M in OH⁻. Moles HX = 2.50 mmol → volume = 2.50 mmol / 0.200 M = 12.5 mL.",
          subject: "General Chemistry", category: "4E", plan: ["Stoichiometry", "Titrations"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Atherosclerotic plaques can narrow (stenose) an artery, altering local blood flow. Physicians often model blood as an incompressible fluid of density 1060 kg/m<sup>3</sup>. For steady flow, the continuity equation requires that the volumetric flow rate <i>Q</i> = <i>Av</i> be the same at every cross section, where <i>A</i> is the cross-sectional area and <i>v</i> is the mean flow speed.</p>
<p>If viscous losses are neglected over a short segment, Bernoulli's equation relates pressure <i>P</i>, speed, and height <i>h</i> along a streamline:</p>
<p class="eq"><i>P</i> + ½ρ<i>v</i><sup>2</sup> + ρ<i>gh</i> = constant</p>
<p>Over longer distances in small vessels, viscosity dominates and flow is better described by Poiseuille's law:</p>
<p class="eq"><i>Q</i> = π<i>r</i><sup>4</sup>Δ<i>P</i> / (8η<i>L</i>)</p>
<p>where <i>r</i> is the vessel radius, Δ<i>P</i> is the pressure difference across a vessel of length <i>L</i>, and η is the viscosity of blood (approximately 3 × 10<sup>–3</sup> Pa·s). Clinicians have observed that small changes in arteriolar radius produce disproportionately large changes in flow, which is why vasoconstriction and vasodilation are effective at regulating regional perfusion.</p>`,
      questions: [
        {
          stem: "A plaque reduces the radius of an artery to one-half of its normal value over a short segment. Compared with the speed of blood upstream of the plaque, the speed within the narrowed segment is greater by a factor of:",
          choices: ["2.", "4.", "8.", "16."],
          answer: 1,
          explanation: "By continuity A₁v₁ = A₂v₂. Area scales with r², so halving r reduces A to ¼ and the speed must increase 4-fold.",
          subject: "Physics", category: "4B", plan: ["Fluids in motion"]
        },
        {
          stem: "Compared with the pressure upstream, the pressure exerted by blood on the arterial wall within the narrowed segment (at the same height) is:",
          choices: ["higher, because the same volume of blood is forced through a smaller area.", "the same, because the flow rate is constant throughout the artery.", "lower, because the increase in kinetic energy per unit volume must be offset by a decrease in static pressure.", "lower, because viscous losses are greatest where the vessel is widest."],
          answer: 2,
          explanation: "With h constant, Bernoulli's equation says P + ½ρv² is constant. Speed rises in the stenosis, so static pressure must fall (the Venturi effect). Choice A confuses force concentration with pressure, and D is incorrect physics.",
          subject: "Physics", category: "4B", plan: ["Fluids in motion"]
        },
        {
          stem: "If an arteriole's radius decreases by 10% while the pressure difference across it is unchanged, blood flow through the arteriole decreases by approximately:",
          choices: ["10%.", "19%.", "34%.", "66%."],
          answer: 2,
          explanation: "Q ∝ r⁴. (0.9)⁴ ≈ 0.66, so flow falls to ~66% of its original value, a decrease of ~34%. Choice D is the remaining flow, not the decrease.",
          subject: "Physics", category: "4B", plan: ["Fluids in motion"]
        },
        {
          stem: "For a standing adult, the vertical distance between the heart and the feet is about 1.5 m. Ignoring flow, the additional hydrostatic pressure in the arteries of the feet compared with the aorta is closest to:",
          choices: ["1.6 kPa", "16 kPa", "160 kPa", "1.6 MPa"],
          answer: 1,
          explanation: "ΔP = ρgh = (1060 kg/m³)(9.8 m/s²)(1.5 m) ≈ 1.6 × 10⁴ Pa = 16 kPa (about 120 mmHg).",
          subject: "Physics", category: "4B", plan: ["Fluids at rest"]
        }
      ]
    },
    {
      type: "discrete",
      questions: [
        {
          stem: "Technetium-99m, a common medical imaging isotope, has a half-life of 6.0 hours. What percentage of an initial sample remains after 24 hours?",
          choices: ["25%", "12.5%", "6.25%", "3.13%"],
          answer: 2,
          explanation: "24 h is four half-lives: (½)⁴ = 1/16 = 6.25%.",
          subject: "Physics", category: "4E", plan: ["Atomic nucleus"]
        },
        {
          stem: "Which ordering correctly ranks the first ionization energies of these third-period elements?",
          choices: ["Na &lt; Mg &lt; Al &lt; Si", "Na &lt; Al &lt; Mg &lt; Si", "Si &lt; Al &lt; Mg &lt; Na", "Al &lt; Na &lt; Mg &lt; Si"],
          answer: 1,
          explanation: "Ionization energy generally increases across a period, but Al is lower than Mg because Al's outermost electron is in a higher-energy 3p orbital that is shielded by the filled 3s subshell. Na (496) < Al (578) < Mg (738) < Si (787) kJ/mol.",
          subject: "General Chemistry", category: "4E", plan: ["Periodic table", "Electronic structure"]
        },
        {
          stem: "A 12-V battery is connected to a 4-Ω resistor in series with a parallel combination of a 6-Ω resistor and a 3-Ω resistor. What current flows through the battery?",
          choices: ["1.0 A", "1.5 A", "2.0 A", "3.0 A"],
          answer: 2,
          explanation: "Parallel: (6·3)/(6+3) = 2 Ω. Total resistance = 4 + 2 = 6 Ω. I = V/R = 12/6 = 2.0 A.",
          subject: "Physics", category: "4C", plan: ["Current and resistance"]
        },
        {
          stem: "A 2.0-kg box is released from rest at the top of a frictionless ramp 5.0 m high. What is its speed at the bottom of the ramp? (Use <i>g</i> = 10 m/s<sup>2</sup>.)",
          choices: ["10 m/s", "14 m/s", "20 m/s", "50 m/s"],
          answer: 0,
          explanation: "mgh = ½mv² → v = √(2gh) = √(2·10·5) = √100 = 10 m/s. Mass cancels.",
          subject: "Physics", category: "4A", plan: ["Work and energy"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>A galvanic (voltaic) cell converts the free energy of a spontaneous redox reaction into electrical work. In one classroom demonstration, a zinc electrode was placed in 1.0 <i>M</i> ZnSO<sub>4</sub> and a copper electrode was placed in 1.0 <i>M</i> CuSO<sub>4</sub>. The two half-cells were connected by an external wire through a voltmeter and by a salt bridge containing saturated KNO<sub>3</sub>. Standard reduction potentials at 25&nbsp;°C are given in Table 1.</p>
<table class="data"><caption>Table 1 Standard reduction potentials</caption>
<tr><th>Half-reaction</th><th><i>E</i>° (V)</th></tr>
<tr><td>Ag<sup>+</sup> + e<sup>–</sup> → Ag</td><td>+0.80</td></tr>
<tr><td>Cu<sup>2+</sup> + 2e<sup>–</sup> → Cu</td><td>+0.34</td></tr>
<tr><td>2H<sup>+</sup> + 2e<sup>–</sup> → H<sub>2</sub></td><td>0.00</td></tr>
<tr><td>Zn<sup>2+</sup> + 2e<sup>–</sup> → Zn</td><td>–0.76</td></tr></table>
<p>The cell potential under nonstandard conditions is given by the Nernst equation:</p>
<p class="eq"><i>E</i> = <i>E</i>° – (0.0592/<i>n</i>) log <i>Q</i></p>
<p>where <i>n</i> is the number of moles of electrons transferred and <i>Q</i> is the reaction quotient. The relationship between the standard cell potential and the standard free-energy change is Δ<i>G</i>° = –<i>nFE</i>°, where <i>F</i> ≈ 96,500 C/mol e<sup>–</sup>.</p>`,
      questions: [
        {
          stem: "What is the standard cell potential of the Zn/Cu cell?",
          choices: ["+1.10 V", "+0.42 V", "–0.42 V", "–1.10 V"],
          answer: 0,
          explanation: "E°cell = E°cathode − E°anode = (+0.34) − (−0.76) = +1.10 V. A galvanic cell has a positive E°.",
          subject: "General Chemistry", category: "4C", plan: ["Electrochemistry"]
        },
        {
          stem: "Which statement correctly describes the cell during operation?",
          choices: ["Copper is the anode, and electrons flow through the wire from copper to zinc.", "Copper is the anode, and electrons flow through the wire from zinc to copper.", "Zinc is the cathode, and cations in the salt bridge migrate toward the zinc half-cell.", "Zinc is the anode, and electrons flow through the wire from zinc to copper."],
          answer: 3,
          explanation: "Zn (lower E°) is oxidized, so it is the anode. Electrons leave the anode through the external wire to the copper cathode, where Cu²⁺ is reduced. (\"An Ox, Red Cat.\")",
          subject: "General Chemistry", category: "4C", plan: ["Electrochemistry"]
        },
        {
          stem: "The standard free-energy change for the cell reaction is closest to:",
          choices: ["–106 kJ/mol", "–212 kJ/mol", "+212 kJ/mol", "–424 kJ/mol"],
          answer: 1,
          explanation: "ΔG° = −nFE° = −(2)(96,500)(1.10) ≈ −212,000 J/mol = −212 kJ/mol. Two electrons are transferred per Zn oxidized.",
          subject: "General Chemistry", category: "5E", plan: ["Electrochemistry", "Thermodynamics"]
        },
        {
          stem: "If the Zn<sup>2+</sup> concentration in the anode compartment were increased to 2.0 <i>M</i> while all else was held constant, the measured cell potential would:",
          choices: ["increase, because more Zn<sup>2+</sup> ions are available to carry charge.", "remain at 1.10 V, because <i>E</i>° does not depend on concentration.", "decrease, because the reaction quotient increases.", "decrease to zero, because the cell would reach equilibrium."],
          answer: 2,
          explanation: "For Zn + Cu²⁺ → Zn²⁺ + Cu, Q = [Zn²⁺]/[Cu²⁺]. Raising [Zn²⁺] increases Q, and by the Nernst equation E decreases (only slightly, not to zero). E° is constant, but the measured E is not.",
          subject: "General Chemistry", category: "4C", plan: ["Electrochemistry"]
        },
        {
          stem: "Based on Table 1, which species is the strongest reducing agent?",
          choices: ["Ag<sup>+</sup>", "Cu<sup>2+</sup>", "H<sub>2</sub>", "Zn"],
          answer: 3,
          explanation: "The strongest reducing agent is the species most easily oxidized: the product side of the half-reaction with the most negative E°. That is Zn. Ag⁺ is the strongest oxidizing agent.",
          subject: "General Chemistry", category: "4C", plan: ["Redox reactions"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>The human eye focuses light primarily through refraction at the cornea (index of refraction <i>n</i> ≈ 1.38), with fine adjustment provided by the crystalline lens. In a simplified model, the eye is treated as a single converging thin lens that forms a real image on the retina. The thin-lens equation relates object distance <i>d</i><sub>o</sub>, image distance <i>d</i><sub>i</sub>, and focal length <i>f</i>:</p>
<p class="eq">1/<i>f</i> = 1/<i>d</i><sub>o</sub> + 1/<i>d</i><sub>i</sub></p>
<p>The lateral magnification is <i>m</i> = –<i>d</i><sub>i</sub>/<i>d</i><sub>o</sub>. Optometrists describe lenses in terms of refractive power <i>P</i> = 1/<i>f</i>, measured in diopters (D) when <i>f</i> is in meters. Converging lenses have positive power; diverging lenses have negative power.</p>
<p>In myopia (nearsightedness), the eye focuses light from distant objects in front of the retina. The farthest distance at which a myopic person can see clearly is the <i>far point</i>. A corrective lens worn close to the eye must form a virtual image, at the far point, of objects located at infinity. In hyperopia, the converse occurs, and the near point is farther from the eye than normal.</p>`,
      questions: [
        {
          stem: "A myopic patient has a far point of 2.0 m. Neglecting the distance between lens and eye, what is the power of the corrective lens?",
          choices: ["–2.0 D", "–0.5 D", "+0.5 D", "+2.0 D"],
          answer: 1,
          explanation: "Objects at infinity (1/dₒ = 0) must form a virtual image at the far point: dᵢ = −2.0 m. So 1/f = 0 + 1/(−2.0) → P = −0.5 D, a diverging lens.",
          subject: "Physics", category: "4D", plan: ["Thin lenses"]
        },
        {
          stem: "An object is placed 30 cm from a converging lens with a focal length of 10 cm. The image formed is:",
          choices: ["virtual, upright, and enlarged.", "virtual, upright, and reduced.", "real, inverted, and reduced.", "real, inverted, and enlarged."],
          answer: 2,
          explanation: "1/dᵢ = 1/10 − 1/30 = 2/30 → dᵢ = +15 cm (real). m = −15/30 = −0.5, so the image is inverted and half the object's size.",
          subject: "Physics", category: "4D", plan: ["Thin lenses"]
        },
        {
          stem: "As light passes from air into the cornea, which of the following occurs?",
          choices: ["Its wavelength decreases while its frequency is unchanged.", "Its frequency decreases while its wavelength is unchanged.", "Its speed increases and its wavelength increases.", "Its speed, wavelength, and frequency all decrease."],
          answer: 0,
          explanation: "In a medium with higher n, v = c/n decreases. Frequency is set by the source and does not change at a boundary, so λ = v/f must decrease.",
          subject: "Physics", category: "4D", plan: ["Reflection and refraction", "Light and electromagnetic radiation"]
        },
        {
          stem: "Retinal photoreceptors respond maximally to green light of wavelength 500 nm. What is the approximate energy of one such photon? (<i>h</i> = 6.6 × 10<sup>–34</sup> J·s; <i>c</i> = 3.0 × 10<sup>8</sup> m/s; 1 eV = 1.6 × 10<sup>–19</sup> J)",
          choices: ["0.25 eV", "0.80 eV", "1.2 eV", "2.5 eV"],
          answer: 3,
          explanation: "E = hc/λ = (6.6×10⁻³⁴)(3.0×10⁸)/(5.0×10⁻⁷) ≈ 4.0×10⁻¹⁹ J ÷ 1.6×10⁻¹⁹ J/eV ≈ 2.5 eV. (Shortcut: E(eV) ≈ 1240/λ(nm).)",
          subject: "Physics", category: "4D", plan: ["Light and electromagnetic radiation"]
        }
      ]
    },
    {
      type: "discrete",
      questions: [
        {
          stem: "A compound shows a strong, broad IR absorption between 3200 and 3550 cm<sup>–1</sup> and no significant absorption between 1680 and 1750 cm<sup>–1</sup>. The compound is most likely a(n):",
          choices: ["ketone.", "alcohol.", "carboxylic acid.", "aldehyde."],
          answer: 1,
          explanation: "A broad peak at ~3200–3550 cm⁻¹ is an O–H stretch. No C=O stretch (~1700 cm⁻¹) rules out ketones, aldehydes, and carboxylic acids, so the compound is an alcohol.",
          subject: "Organic Chemistry", category: "4D", plan: ["Infrared and Ultraviolet/Visible spectroscopy"]
        },
        {
          stem: "For the reaction A + B → C, doubling [A] while holding [B] constant quadruples the initial rate, and doubling [B] while holding [A] constant leaves the rate unchanged. What is the rate law?",
          choices: ["rate = <i>k</i>[A][B]", "rate = <i>k</i>[A]<sup>2</sup>", "rate = <i>k</i>[A]<sup>2</sup>[B]", "rate = <i>k</i>[B]<sup>2</sup>"],
          answer: 1,
          explanation: "2ˣ = 4 → second order in A. 2ʸ = 1 → zero order in B. Rate = k[A]².",
          subject: "General Chemistry", category: "5E", plan: ["Kinetics"]
        },
        {
          stem: "How many stereoisomers exist for 2,3-dibromobutane?",
          choices: ["1", "2", "3", "4"],
          answer: 2,
          explanation: "Two chiral centers allow at most 2² = 4, but because the molecule is symmetric, the (2R,3S) and (2S,3R) forms are the same achiral meso compound. That leaves (R,R), (S,S), and meso: 3 stereoisomers.",
          subject: "Organic Chemistry", category: "5B", plan: ["Stereochemistry"]
        },
        {
          stem: "A researcher needs to separate a mixture of ethanol (bp 78&nbsp;°C) and water (bp 100&nbsp;°C). Which technique is most appropriate?",
          choices: ["Fractional distillation", "Simple distillation", "Liquid–liquid extraction with diethyl ether", "Size-exclusion chromatography"],
          answer: 0,
          explanation: "When boiling points differ by less than ~25 °C, fractional distillation (with many vaporization–condensation cycles) is needed. Simple distillation works for larger differences. Extraction and size exclusion do not suit two small, miscible polar liquids.",
          subject: "Organic Chemistry", category: "5C", plan: ["Separations and purifications"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Hyperbaric oxygen therapy (HBOT) is used to treat carbon monoxide poisoning, decompression sickness, and poorly healing wounds. The patient rests in a sealed, rigid chamber that is pressurized with 100% O<sub>2</sub> to a total pressure of 3.0 atm. Under normal conditions at sea level, air (21% O<sub>2</sub>, 79% N<sub>2</sub>) is breathed at a total pressure of 1.0 atm.</p>
<p>Most O<sub>2</sub> in blood is carried bound to hemoglobin, which is nearly saturated under normal conditions. HBOT therefore works mainly by increasing the amount of O<sub>2</sub> dissolved in plasma. Henry's law states that the concentration of a dissolved gas is proportional to that gas's partial pressure above the liquid:</p>
<p class="eq"><i>C</i> = <i>k</i><sub>H</sub> · <i>P</i><sub>gas</sub></p>
<p>Chamber operators note that the gas inside the chamber warms noticeably during rapid pressurization and cools during depressurization, so pressurization is performed gradually. The chamber gas can be treated as ideal.</p>`,
      questions: [
        {
          stem: "Assuming the Henry's law constant is unchanged, the concentration of O<sub>2</sub> dissolved in plasma during HBOT is greater than during normal breathing at sea level by a factor of approximately:",
          choices: ["3", "5", "14", "21"],
          answer: 2,
          explanation: "Normal P(O₂) = 0.21 × 1.0 atm = 0.21 atm. HBOT P(O₂) = 1.00 × 3.0 atm = 3.0 atm. Ratio = 3.0/0.21 ≈ 14.",
          subject: "General Chemistry", category: "4B", plan: ["Gas phase"]
        },
        {
          stem: "After pressurization, the sealed chamber is at 3.0 atm and 300 K. If the gas then cools to 290 K with no gas added or removed, the pressure becomes approximately:",
          choices: ["2.7 atm", "2.9 atm", "3.1 atm", "3.3 atm"],
          answer: 1,
          explanation: "With fixed volume and moles, P/T is constant: P₂ = 3.0 × (290/300) = 2.9 atm.",
          subject: "General Chemistry", category: "4B", plan: ["Gas phase"]
        },
        {
          stem: "Compared with N<sub>2</sub> molecules at the same temperature, O<sub>2</sub> molecules have:",
          choices: ["the same average kinetic energy and a lower root-mean-square speed.", "the same average kinetic energy and a higher root-mean-square speed.", "a greater average kinetic energy and the same root-mean-square speed.", "a lower average kinetic energy and a lower root-mean-square speed."],
          answer: 0,
          explanation: "Average KE = (3/2)k_BT depends only on temperature. Because O₂ (32 g/mol) is heavier than N₂ (28 g/mol), and v_rms = √(3RT/M), O₂ moves more slowly on average.",
          subject: "General Chemistry", category: "4B", plan: ["Kinetic molecular theory of gases"]
        },
        {
          stem: "Which statement best explains why the chamber gas warms during rapid pressurization?",
          choices: ["Heat flows into the gas from the warmer chamber walls.", "Compression lowers the heat capacity of the gas.", "Pressurization is an exothermic chemical reaction.", "Work is done on the gas faster than heat can escape, so its internal energy increases."],
          answer: 3,
          explanation: "Rapid compression is nearly adiabatic (q ≈ 0), so by the first law ΔU = q + W, the work done on the gas raises its internal energy and therefore its temperature.",
          subject: "General Chemistry", category: "5E", plan: ["Thermochemistry", "Thermodynamics"]
        }
      ]
    }
  ]
});
