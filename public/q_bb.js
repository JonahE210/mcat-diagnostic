// Biological and Biochemical Foundations of Living Systems (half-length: 5 passages + 8 discretes = 30 questions, 48 min)
window.MCAT_SECTIONS = window.MCAT_SECTIONS || [];
window.MCAT_SECTIONS.push({
  id: "bb",
  short: "Bio/Biochem",
  name: "Biological and Biochemical Foundations of Living Systems",
  minutes: 48,
  periodicTable: true,
  blocks: [
    {
      type: "passage",
      html: `
<p>Kinase K phosphorylates a serine residue on a transcriptional regulator and is overactive in several tumor types. Researchers screened small molecules for their ability to inhibit Kinase K and identified two candidates, Inhibitor A and Inhibitor B. To characterize them, initial reaction velocities were measured across a range of substrate concentrations with each inhibitor present at a fixed concentration. Kinetic parameters obtained by fitting the data to the Michaelis–Menten equation are shown in Table 1.</p>
<p class="eq"><i>v</i><sub>0</sub> = <i>V</i><sub>max</sub>[S] / (<i>K</i><sub>m</sub> + [S])</p>
<table class="data"><caption>Table 1 Kinetic parameters of Kinase K</caption>
<tr><th>Condition</th><th><i>K</i><sub>m</sub> (µ<i>M</i>)</th><th><i>V</i><sub>max</sub> (nmol/min)</th></tr>
<tr><td>No inhibitor</td><td>2.0</td><td>100</td></tr>
<tr><td>+ Inhibitor A</td><td>6.0</td><td>100</td></tr>
<tr><td>+ Inhibitor B</td><td>2.0</td><td>40</td></tr></table>
<p>In a separate experiment, enzyme activity in the absence of inhibitors was measured from pH 4 to pH 9. Activity was maximal between pH 6.5 and 8 and dropped sharply below pH 6. Site-directed mutagenesis showed that a single active-site residue, which accepts a proton from the substrate's serine hydroxyl during catalysis, is required for activity.</p>`,
      questions: [
        {
          stem: "Based on Table 1, Inhibitor A is most likely a(n):",
          choices: ["noncompetitive inhibitor that binds an allosteric site.", "uncompetitive inhibitor that binds only the enzyme–substrate complex.", "competitive inhibitor that binds the active site.", "irreversible inhibitor that covalently modifies the enzyme."],
          answer: 2,
          explanation: "Inhibitor A raises the apparent Km (lower apparent affinity) without changing Vmax, the signature of competitive inhibition: high [S] can outcompete the inhibitor. An irreversible inhibitor would lower Vmax.",
          subject: "Biochemistry", category: "1A", plan: ["Enzyme kinetics"]
        },
        {
          stem: "Compared with the Lineweaver–Burk plot for the uninhibited enzyme, the plot in the presence of Inhibitor B would have:",
          choices: ["the same y-intercept and a less negative x-intercept.", "the same x-intercept and a larger y-intercept.", "a larger y-intercept and a more negative x-intercept.", "the same slope and a smaller y-intercept."],
          answer: 1,
          explanation: "On a double-reciprocal plot the y-intercept is 1/Vmax and the x-intercept is −1/Km. Inhibitor B lowers Vmax (larger y-intercept) but leaves Km unchanged (same x-intercept). This is pure noncompetitive inhibition.",
          subject: "Biochemistry", category: "1A", plan: ["Enzyme kinetics"]
        },
        {
          stem: "At a substrate concentration of 2.0 µ<i>M</i>, what is the initial velocity in the presence of Inhibitor B?",
          choices: ["20 nmol/min", "40 nmol/min", "50 nmol/min", "80 nmol/min"],
          answer: 0,
          explanation: "When [S] = Km, v₀ = Vmax/2. With Inhibitor B, Km = 2.0 µM and Vmax = 40, so v₀ = 20 nmol/min.",
          subject: "Biochemistry", category: "1A", plan: ["Enzyme kinetics"]
        },
        {
          stem: "Which of the following statements about Inhibitor B is/are supported by the data?<br>I. It decreases the maximum rate the enzyme can achieve.<br>II. It binds free enzyme and the enzyme–substrate complex with similar affinity.<br>III. Its effect can be overcome by increasing the substrate concentration.",
          choices: ["I only", "III only", "I and II only", "I, II, and III"],
          answer: 2,
          explanation: "Vmax decreases (I is true). An unchanged Km means the inhibitor binds E and ES equally (pure noncompetitive), so II is true. Raising [S] cannot restore Vmax for a noncompetitive inhibitor, so III is false.",
          subject: "Biochemistry", category: "1A", plan: ["Enzyme kinetics", "Enzymes"]
        },
        {
          stem: "Which amino acid is most likely the catalytic residue described in the last paragraph?",
          choices: ["Arginine", "Lysine", "Aspartate", "Histidine"],
          answer: 3,
          explanation: "The residue acts as a general base (accepts a proton), so it must be deprotonated to work. Activity drops below pH ~6, which matches histidine's side-chain pKa (~6.0): below it His is protonated and cannot accept a proton. Arg and Lys (pKa > 10) would stay protonated across the range tested.",
          subject: "Biochemistry", category: "1A", plan: ["Amino acids and proteins", "Enzyme structure and function"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>A 58-year-old man with chronic hypertension was started on lisinopril, an angiotensin-converting enzyme (ACE) inhibitor. The renin–angiotensin–aldosterone system (RAAS) normally helps maintain blood pressure when renal perfusion falls. Renin, secreted by juxtaglomerular cells of the afferent arteriole, cleaves angiotensinogen to angiotensin I. ACE, found largely on pulmonary endothelium, converts angiotensin I to angiotensin II.</p>
<p>Angiotensin II is a potent vasoconstrictor. It also stimulates the adrenal cortex to secrete aldosterone and stimulates release of antidiuretic hormone (ADH) from the posterior pituitary. Aldosterone acts on principal cells of the distal nephron to increase expression of epithelial Na<sup>+</sup> channels and Na<sup>+</sup>/K<sup>+</sup>-ATPase.</p>
<p>At a follow-up visit four weeks later, the patient's blood pressure had decreased from 156/98 mmHg to 134/84 mmHg. Routine blood work showed a mild change in one serum electrolyte, and his physician recommended he avoid potassium-based salt substitutes.</p>`,
      questions: [
        {
          stem: "Lisinopril most directly lowers blood pressure by:",
          choices: ["increasing renin secretion, which promotes natriuresis.", "reducing angiotensin II levels, which decreases vasoconstriction and aldosterone secretion.", "blocking aldosterone receptors in the collecting duct.", "inhibiting ADH binding to V<sub>2</sub> receptors."],
          answer: 1,
          explanation: "ACE inhibitors block conversion of angiotensin I to angiotensin II. Less angiotensin II means less vasoconstriction and less aldosterone, so less Na⁺/water retention. Renin actually rises from loss of feedback, but that is not how BP falls.",
          subject: "Biology", category: "3B", plan: ["Renal regulation of blood pressure"]
        },
        {
          stem: "The electrolyte change referred to in the passage is most likely:",
          choices: ["hyperkalemia.", "hypokalemia.", "hypernatremia.", "hypercalcemia."],
          answer: 0,
          explanation: "Aldosterone promotes K⁺ secretion. Lower aldosterone causes K⁺ retention (hyperkalemia), which is why the physician advises avoiding KCl salt substitutes.",
          subject: "Biology", category: "3B", plan: ["Renal system", "Endocrine system and hormonal regulation"]
        },
        {
          stem: "ADH increases water reabsorption in the collecting duct by:",
          choices: ["increasing the activity of the Na<sup>+</sup>/K<sup>+</sup>-ATPase in the ascending limb.", "decreasing the osmolarity of the medullary interstitium.", "binding an intracellular receptor that directly activates aquaporin gene transcription.", "activating a G protein–coupled receptor that triggers insertion of aquaporin-2 channels into the apical membrane."],
          answer: 3,
          explanation: "ADH is a peptide hormone. It binds V₂ receptors (GPCRs) on principal cells, raising cAMP and PKA activity, which sends vesicles carrying aquaporin-2 to the apical membrane. Peptide hormones do not use intracellular receptors.",
          subject: "Biology", category: "3B", plan: ["Renal system", "Endocrine system and hormonal regulation"]
        },
        {
          stem: "Which of the following would most likely increase renin secretion?",
          choices: ["An increase in mean arterial pressure", "Increased NaCl delivery to the macula densa", "Decreased pressure in the afferent arteriole", "Decreased sympathetic stimulation of the kidney"],
          answer: 2,
          explanation: "JG cells release renin in response to decreased afferent arteriolar pressure, decreased NaCl at the macula densa, and increased sympathetic (β₁) stimulation. Each of the other options would suppress renin release.",
          subject: "Biology", category: "3B", plan: ["Renal regulation of blood pressure"]
        }
      ]
    },
    {
      type: "discrete",
      questions: [
        {
          stem: "Two parents are both heterozygous carriers of an autosomal recessive disorder. What is the probability that their first two children will both be affected?",
          choices: ["1/16", "1/8", "1/4", "1/2"],
          answer: 0,
          explanation: "Each child has a 1/4 chance of being aa. The two births are independent: 1/4 × 1/4 = 1/16.",
          subject: "Biology", category: "1C", plan: ["Mendelian genetics"]
        },
        {
          stem: "In a population in Hardy–Weinberg equilibrium, 9% of individuals express a recessive phenotype. What proportion of the population are heterozygous carriers?",
          choices: ["0.21", "0.42", "0.49", "0.91"],
          answer: 1,
          explanation: "q² = 0.09 → q = 0.3, p = 0.7. Heterozygotes = 2pq = 2(0.7)(0.3) = 0.42.",
          subject: "Biology", category: "1C", plan: ["Evolution and population dynamics"]
        },
        {
          stem: "The rapid depolarization phase of a neuronal action potential is caused primarily by:",
          choices: ["efflux of K<sup>+</sup> through voltage-gated channels.", "activity of the Na<sup>+</sup>/K<sup>+</sup>-ATPase.", "influx of Na<sup>+</sup> through voltage-gated channels.", "influx of Cl<sup>–</sup> through ligand-gated channels."],
          answer: 2,
          explanation: "When threshold is reached, voltage-gated Na⁺ channels open and Na⁺ rushes in, driving the membrane potential toward E(Na). K⁺ efflux causes repolarization, and the pump restores gradients over time.",
          subject: "Biology", category: "3A", plan: ["Neuron membrane potentials"]
        },
        {
          stem: "During skeletal muscle contraction, Ca<sup>2+</sup> released from the sarcoplasmic reticulum initiates cross-bridge cycling by:",
          choices: ["binding myosin heads and activating their ATPase activity.", "binding tropomyosin and directly detaching it from actin.", "depolarizing the T-tubule membrane.", "binding troponin C, causing tropomyosin to shift and expose myosin-binding sites on actin."],
          answer: 3,
          explanation: "Ca²⁺ binds troponin C, which changes conformation and pulls tropomyosin off the myosin-binding sites on actin so cross-bridges can form.",
          subject: "Biology", category: "3B", plan: ["Muscular system"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>A rare inherited disorder is associated with mutations in the gene <i>TFX1</i>, which encodes a transcription factor. Researchers sequenced <i>TFX1</i> in an affected individual and an unaffected sibling. A portion of the coding (sense) strand near the start of exon 2 is shown below, with codons separated for clarity:</p>
<p class="eq">Unaffected: 5′-…GCT TGG AAA CTG…-3′<br>Affected: &nbsp;&nbsp;&nbsp;5′-…GCT TGA AAA CTG…-3′</p>
<p>To confirm the mutation in other family members, the researchers amplified exon 2 using the polymerase chain reaction (PCR). Each PCR cycle consists of denaturation at 95&nbsp;°C, primer annealing at 55&nbsp;°C, and extension at 72&nbsp;°C. The PCR products were then digested with a restriction enzyme whose recognition site is destroyed by the mutation and separated by agarose gel electrophoresis.</p>
<p>Western blotting with an antibody against the C-terminus of the TFX1 protein detected no protein in cells from the affected individual.</p>`,
      questions: [
        {
          stem: "The mutation in the affected individual is best classified as a:",
          choices: ["silent mutation.", "missense mutation.", "nonsense mutation.", "frameshift mutation."],
          answer: 2,
          explanation: "TGG (Trp) → TGA, which becomes the stop codon UGA in mRNA. A single base substitution creating a premature stop is a nonsense mutation, consistent with the lack of full-length protein.",
          subject: "Biology", category: "1B", plan: ["Genetic mutations"]
        },
        {
          stem: "What is the anticodon (written 5′→3′) of the tRNA that recognizes the codon corresponding to TGG in the unaffected mRNA?",
          choices: ["5′-ACC-3′", "5′-CCA-3′", "5′-UGG-3′", "5′-GGU-3′"],
          answer: 1,
          explanation: "The mRNA codon is 5′-UGG-3′. The anticodon pairs antiparallel: 3′-ACC-5′, which written 5′→3′ is 5′-CCA-3′.",
          subject: "Biology", category: "1B", plan: ["DNA"]
        },
        {
          stem: "PCR requires a heat-stable DNA polymerase primarily because:",
          choices: ["the enzyme must survive the repeated high-temperature denaturation steps.", "DNA polymerases from most organisms cannot recognize primers.", "the extension step requires temperatures above the melting point of DNA.", "heat-stable polymerases do not require a free 3′-OH group."],
          answer: 0,
          explanation: "Each cycle heats the reaction to ~95 °C to separate strands, which would denature most polymerases. Thermostable polymerases (e.g., Taq) survive those cycles. All DNA polymerases still need a primer with a free 3′-OH.",
          subject: "Biology", category: "1B", plan: ["DNA technology"]
        },
        {
          stem: "During agarose gel electrophoresis of the digested PCR products, DNA fragments:",
          choices: ["migrate toward the cathode, with larger fragments moving farther.", "migrate toward the cathode, with smaller fragments moving farther.", "migrate toward the anode, with larger fragments moving farther.", "migrate toward the anode, with smaller fragments moving farther."],
          answer: 3,
          explanation: "The phosphate backbone makes DNA negatively charged, so it moves toward the positive electrode (anode). The gel matrix slows larger fragments more, so smaller fragments travel farther.",
          subject: "Biology", category: "1B", plan: ["DNA technology"]
        },
        {
          stem: "Which change to the unaffected sequence would produce a frameshift mutation?",
          choices: ["Substitution of one base", "Deletion of two bases", "Deletion of three consecutive bases", "Duplication of an entire codon"],
          answer: 1,
          explanation: "A frameshift happens when the number of inserted or deleted bases is not a multiple of three. Deleting 2 bases shifts the reading frame. Deleting or duplicating 3 bases removes or adds one amino acid but keeps the frame.",
          subject: "Biology", category: "1B", plan: ["Genetic mutations"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>In the 1930s, 2,4-dinitrophenol (DNP) was briefly marketed as a weight-loss drug before being withdrawn after numerous deaths from hyperthermia. DNP is a lipophilic weak acid that can carry protons across the inner mitochondrial membrane, dissipating the electrochemical gradient generated by the electron transport chain (ETC).</p>
<p>A similar process occurs physiologically in brown adipose tissue, where uncoupling protein 1 (UCP1) allows protons to re-enter the mitochondrial matrix without passing through ATP synthase. This non-shivering thermogenesis is especially important in newborns.</p>
<p>Researchers isolated mitochondria from rat liver and measured O<sub>2</sub> consumption and ATP production in the presence of excess succinate and ADP, before and after adding a low dose of DNP. Separately, cultured hepatocytes treated with DNP showed elevated rates of glucose uptake and lactate production within 30 minutes.</p>`,
      questions: [
        {
          stem: "Compared with untreated mitochondria, mitochondria treated with DNP would most likely show:",
          choices: ["increased O<sub>2</sub> consumption and decreased ATP synthesis.", "decreased O<sub>2</sub> consumption and decreased ATP synthesis.", "increased O<sub>2</sub> consumption and increased ATP synthesis.", "decreased O<sub>2</sub> consumption and increased ATP synthesis."],
          answer: 0,
          explanation: "Uncouplers let protons bypass ATP synthase, so the ETC runs faster to try to rebuild the gradient (more O₂ used) while ATP synthesis falls. The lost energy is released as heat.",
          subject: "Biochemistry", category: "1D", plan: ["Krebs (citric acid) cycle and oxidative phosphorylation"]
        },
        {
          stem: "In functioning mitochondria, the proton gradient generated by the ETC results in:",
          choices: ["a higher pH in the intermembrane space than in the matrix.", "a higher [H<sup>+</sup>] in the matrix than in the cytosol.", "a lower pH in the intermembrane space than in the matrix.", "equal pH on both sides of the inner membrane, with a gradient only in membrane potential."],
          answer: 2,
          explanation: "ETC complexes pump H⁺ from the matrix into the intermembrane space, so the intermembrane space has more H⁺ (lower pH) and the matrix is more alkaline.",
          subject: "Biochemistry", category: "1D", plan: ["Krebs (citric acid) cycle and oxidative phosphorylation"]
        },
        {
          stem: "The increase in lactate production by DNP-treated hepatocytes most likely reflects increased activity of phosphofructokinase-1 (PFK-1). Which change would most directly stimulate PFK-1?",
          choices: ["An increase in cytosolic ATP", "An increase in cytosolic citrate", "A decrease in fructose-2,6-bisphosphate", "An increase in cytosolic AMP"],
          answer: 3,
          explanation: "PFK-1 is allosterically activated by AMP (a low-energy signal) and fructose-2,6-bisphosphate, and inhibited by ATP and citrate. When DNP lowers ATP output, AMP rises and glycolysis speeds up.",
          subject: "Biochemistry", category: "1D", plan: ["Carbohydrate Metabolism"]
        },
        {
          stem: "For each molecule of acetyl-CoA oxidized in the citric acid cycle, the cycle directly produces:",
          choices: ["2 NADH, 2 FADH<sub>2</sub>, and 2 ATP.", "3 NADH, 1 FADH<sub>2</sub>, and 1 GTP.", "3 NADH, 1 FADH<sub>2</sub>, and 3 GTP.", "4 NADH, 1 FADH<sub>2</sub>, and 1 GTP."],
          answer: 1,
          explanation: "One turn of the cycle yields 3 NADH (isocitrate DH, α-KG DH, malate DH), 1 FADH₂ (succinate DH), 1 GTP (succinyl-CoA synthetase), and 2 CO₂.",
          subject: "Biochemistry", category: "1D", plan: ["Krebs (citric acid) cycle and oxidative phosphorylation", "Bioenergetics"]
        }
      ]
    },
    {
      type: "discrete",
      questions: [
        {
          stem: "Nondisjunction of a homologous pair during meiosis I, followed by normal meiosis II, would produce:",
          choices: ["four aneuploid gametes: two with an extra chromosome and two missing that chromosome.", "two normal gametes, one with an extra chromosome, and one missing that chromosome.", "four normal gametes, because meiosis II corrects the error.", "two diploid gametes and two gametes with no chromosomes."],
          answer: 0,
          explanation: "If homologs fail to separate in meiosis I, one daughter cell gets both homologs and the other gets none. After meiosis II, all four gametes are abnormal (two n+1, two n−1). Choice B describes nondisjunction in meiosis II.",
          subject: "Biology", category: "2C", plan: ["Meiosis & Embryology"]
        },
        {
          stem: "Colchicine arrests dividing cells in metaphase. Which cytoskeletal component does colchicine most likely target?",
          choices: ["Actin microfilaments", "Microtubules", "Intermediate filaments", "Keratin fibers"],
          answer: 1,
          explanation: "The mitotic spindle is built from microtubules (tubulin polymers). Blocking their polymerization stops chromosome separation at metaphase. Actin drives cytokinesis instead.",
          subject: "Biology", category: "2A", plan: ["Cytoskeleton"]
        },
        {
          stem: "The arrival of fatty chyme in the duodenum triggers release of a hormone that stimulates gallbladder contraction and pancreatic enzyme secretion. This hormone is:",
          choices: ["gastrin.", "secretin.", "cholecystokinin.", "ghrelin."],
          answer: 2,
          explanation: "CCK is released by I-cells of the duodenum in response to fats and proteins. It triggers bile release and pancreatic enzyme secretion. Secretin mainly stimulates bicarbonate secretion in response to acid.",
          subject: "Biology", category: "3B", plan: ["Gastrointestinal system"]
        },
        {
          stem: "Which of the following would shift the oxygen–hemoglobin dissociation curve to the left?",
          choices: ["Increased P<sub>CO<sub>2</sub></sub>", "Decreased blood pH", "Increased 2,3-bisphosphoglycerate", "Decreased body temperature"],
          answer: 3,
          explanation: "A left shift means higher O₂ affinity. Lower temperature, higher pH, lower CO₂, and lower 2,3-BPG all shift the curve left. The other three options shift it right (Bohr effect).",
          subject: "Biology", category: "3B", plan: ["Hematologic system", "Respiratory system"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Virus V is an enveloped, positive-sense single-stranded RNA virus that infects respiratory epithelial cells. Its envelope contains a spike glycoprotein (S) that binds a host receptor and mediates membrane fusion. To develop a vaccine, researchers injected mice with lipid nanoparticles containing mRNA encoding the S protein. Muscle and dendritic cells took up the nanoparticles and translated the mRNA.</p>
<p>Serum IgM and IgG specific to S protein were measured after a first injection on day 0 and a booster on day 28 (Figure 1, summarized below).</p>
<table class="data"><caption>Figure 1 (summary) Anti-S antibody titers (arbitrary units)</caption>
<tr><th>Day</th><th>IgM</th><th>IgG</th></tr>
<tr><td>7</td><td>40</td><td>5</td></tr><tr><td>14</td><td>25</td><td>60</td></tr>
<tr><td>28</td><td>5</td><td>45</td></tr><tr><td>35</td><td>10</td><td>900</td></tr></table>
<p>Vaccinated mice also developed S-specific CD8<sup>+</sup> T cells. When vaccinated mice were later challenged with live Virus V, viral titers in the lung were reduced by more than 99% compared with unvaccinated controls.</p>`,
      questions: [
        {
          stem: "Helper (CD4<sup>+</sup>) T cells are activated in this vaccination model when they recognize S-protein peptides presented on:",
          choices: ["MHC class I molecules on all nucleated cells.", "MHC class II molecules on antigen-presenting cells such as dendritic cells.", "free antibodies circulating in the serum.", "the surface of red blood cells."],
          answer: 1,
          explanation: "CD4⁺ T cells recognize peptide–MHC II, which professional APCs (dendritic cells, macrophages, B cells) display. CD8⁺ T cells recognize MHC I.",
          subject: "Biology", category: "3B", plan: ["Immune system"]
        },
        {
          stem: "The CD8<sup>+</sup> T cells described in the passage protect against infection mainly by:",
          choices: ["secreting antibodies that neutralize the S protein.", "phagocytosing free virus particles in the airway.", "activating the complement cascade on the viral envelope.", "inducing apoptosis in infected host cells that display viral peptides on MHC class I."],
          answer: 3,
          explanation: "Cytotoxic T cells recognize viral peptides on MHC I of infected cells and kill them (perforin and granzymes), removing sites of viral replication. Plasma cells, not T cells, secrete antibodies.",
          subject: "Biology", category: "3B", plan: ["Immune system"]
        },
        {
          stem: "Because Virus V has a positive-sense RNA genome, upon entering a host cell its genome can:",
          choices: ["be translated directly by host ribosomes.", "be transcribed into DNA by host RNA polymerase II.", "integrate into the host chromosome before expression.", "be copied into mRNA only by a polymerase carried in the virion."],
          answer: 0,
          explanation: "Positive-sense RNA works as mRNA and can be translated immediately by host ribosomes, which produce the viral RNA-dependent RNA polymerase. Negative-sense viruses must package their own polymerase, and integration is a retrovirus feature.",
          subject: "Biology", category: "2B", plan: ["Viruses"]
        },
        {
          stem: "The difference in antibody response after the booster (day 35) compared with the first injection is best explained by:",
          choices: ["the booster dose containing a higher concentration of mRNA.", "IgM molecules converting directly into IgG molecules in the blood.", "memory B cells generated during the primary response rapidly differentiating into IgG-secreting plasma cells.", "innate immune cells producing antigen-specific antibodies."],
          answer: 2,
          explanation: "The secondary (anamnestic) response is faster, larger, and mostly IgG because memory B cells that already class-switched were made during the primary response. Antibody molecules do not convert into one another, and innate cells do not make antibodies.",
          subject: "Biology", category: "3B", plan: ["Immune system", "Lymphatic system"]
        }
      ]
    }
  ]
});
