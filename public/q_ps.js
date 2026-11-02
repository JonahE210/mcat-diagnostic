// Psychological, Social, and Biological Foundations of Behavior (half-length: 5 passages + 8 discretes = 30 questions, 48 min)
window.MCAT_SECTIONS = window.MCAT_SECTIONS || [];
window.MCAT_SECTIONS.push({
  id: "ps",
  short: "Psych/Soc",
  name: "Psychological, Social, and Biological Foundations of Behavior",
  minutes: 48,
  periodicTable: false,
  blocks: [
    {
      type: "passage",
      html: `
<p>Researchers examined whether awareness of a negative group stereotype affects test performance. Female undergraduates who reported strong math backgrounds were randomly assigned to one of two conditions. In the <i>diagnostic</i> condition, participants were told that the 20-item math test they were about to take "has shown gender differences in the past." In the <i>nondiagnostic</i> condition, participants were told the test "has shown no gender differences." All participants took the same test under identical time limits.</p>
<p>Heart rate was recorded throughout. After the test, participants completed a questionnaire asking them to explain their performance. Results are summarized in Table 1.</p>
<table class="data"><caption>Table 1 Mean performance and arousal by condition</caption>
<tr><th>Condition</th><th>Items correct (of 20)</th><th>Mean heart rate (bpm)</th></tr>
<tr><td>Diagnostic</td><td>9.8</td><td>91</td></tr>
<tr><td>Nondiagnostic</td><td>14.1</td><td>78</td></tr></table>
<p>Performance differences between conditions were largest on the most difficult items and negligible on the easiest items. In a follow-up study, the gap between conditions was substantially reduced when participants in the diagnostic condition were told beforehand that feeling anxious during difficult tests is common and does not predict poor performance.</p>`,
      questions: [
        {
          stem: "The independent variable in the first study was the:",
          choices: ["number of items answered correctly.", "description of the test given to participants.", "participants' heart rate during the test.", "participants' prior math background."],
          answer: 1,
          explanation: "The researchers manipulated the test description (diagnostic vs. nondiagnostic) and randomly assigned participants to it. Score and heart rate were measured outcomes (dependent variables). Math background was held roughly constant through selection.",
          subject: "Research Methods", category: "Skill", plan: ["Social psychology"]
        },
        {
          stem: "The results of the first study are best explained by which concept?",
          choices: ["Self-fulfilling prophecy", "In-group favoritism", "Fundamental attribution error", "Stereotype threat"],
          answer: 3,
          explanation: "Stereotype threat is the anxiety about confirming a negative stereotype about one's group, which hurts performance. Here the identical test lowered women's scores only when gender differences were made salient. A self-fulfilling prophecy needs someone else's expectations to change their behavior toward the target.",
          subject: "Psychology", category: "8B", plan: ["Perception, prejudice, and bias"]
        },
        {
          stem: "A participant in the diagnostic condition wrote that she did poorly because \"the questions were unfairly worded,\" but in a previous semester she had credited a high exam score to her own intelligence. This pattern best illustrates:",
          choices: ["the actor–observer bias.", "the false consensus effect.", "the self-serving bias.", "the just-world hypothesis."],
          answer: 2,
          explanation: "Self-serving bias means crediting successes to internal causes (intelligence) and blaming failures on external ones (unfair questions). The actor–observer bias compares how people explain their own behavior with how they explain others'.",
          subject: "Psychology", category: "8B", plan: ["Attributing behavior to persons or situations"]
        },
        {
          stem: "The finding that heightened arousal impaired performance mostly on difficult items is most consistent with:",
          choices: ["the Yerkes–Dodson law.", "the James–Lange theory.", "drive-reduction theory.", "Maslow's hierarchy of needs."],
          answer: 0,
          explanation: "The Yerkes–Dodson law says performance peaks at moderate arousal, and the best arousal level is lower for complex tasks. High arousal therefore hurts hard items more than easy ones.",
          subject: "Psychology", category: "6C", plan: ["Motivation and attitudes"]
        },
        {
          stem: "A tutor who believes that women are generally worse at mathematics than men, but who treats all students identically, is displaying:",
          choices: ["discrimination.", "prejudice.", "a stereotype.", "ethnocentrism."],
          answer: 2,
          explanation: "A stereotype is a cognitive generalization about a group. Prejudice is the affective attitude (feelings), and discrimination is behavior. The tutor holds a belief but does not act on it.",
          subject: "Sociology", category: "8B", plan: ["Perception, prejudice, and bias", "Discrimination"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>To study the role of sleep in memory consolidation, researchers had 60 adults learn a list of 40 word pairs (List A) at 9 p.m. Participants were then assigned to either a full night of sleep in the laboratory or a night of supervised wakefulness. Polysomnography was recorded for the sleep group. The next day, all participants were allowed recovery sleep and were tested 36 hours after learning, so that fatigue at test would not differ between groups.</p>
<p>The sleep group recalled 82% of the pairs, and the wake group recalled 64%. Within the sleep group, recall correlated positively with the amount of time spent in stage N3 (slow-wave) sleep during the first half of the night, but not with time spent in REM sleep.</p>
<p>In a second experiment, all participants slept normally. Immediately after learning List A, half of the participants learned a second list (List B) in which the same cue words were paired with new response words. When tested on List A the next morning, these participants recalled significantly fewer List A pairs than participants who did not learn List B.</p>`,
      questions: [
        {
          stem: "The correlation reported for the sleep group suggests that consolidation of declarative word-pair memories depends most strongly on:",
          choices: ["stage N1 sleep.", "REM sleep.", "slow-wave (N3) sleep.", "the hypnagogic state."],
          answer: 2,
          explanation: "Recall tracked time in N3 (slow-wave) sleep, not REM. That fits the view that slow-wave sleep supports declarative (explicit) memory consolidation.",
          subject: "Psychology", category: "6B", plan: ["Sleep and consciousness", "Memory"]
        },
        {
          stem: "Which brain structure is most involved in transferring the newly learned word pairs into long-term declarative memory?",
          choices: ["Cerebellum", "Hippocampus", "Basal ganglia", "Amygdala"],
          answer: 1,
          explanation: "The hippocampus is key to consolidating new explicit memories. The cerebellum and basal ganglia support procedural memory, and the amygdala handles emotional memory.",
          subject: "Psychology", category: "6B", plan: ["Memory", "Biological basis of behavior: The nervous system"]
        },
        {
          stem: "The reduced recall of List A among participants who learned List B is an example of:",
          choices: ["proactive interference.", "the serial position effect.", "source-monitoring error.", "retroactive interference."],
          answer: 3,
          explanation: "Retroactive interference happens when newer learning (List B) disrupts recall of older material (List A). Proactive interference is the reverse: old learning disrupts new.",
          subject: "Psychology", category: "6B", plan: ["Memory"]
        },
        {
          stem: "Compared with slow-wave sleep, REM sleep is characterized by:",
          choices: ["low-amplitude, high-frequency EEG activity and skeletal muscle atonia.", "high-amplitude delta waves and sleepwalking episodes.", "sleep spindles and K-complexes.", "the lowest arousal threshold of any sleep stage and increased muscle tone."],
          answer: 0,
          explanation: "REM (\"paradoxical\") sleep has wake-like, low-amplitude, high-frequency EEG along with near-total skeletal muscle paralysis. Delta waves and sleepwalking belong to N3, and spindles/K-complexes to N2.",
          subject: "Psychology", category: "6B", plan: ["Sleep and consciousness"]
        }
      ]
    },
    {
      type: "discrete",
      questions: [
        {
          stem: "A participant can just detect the difference between a 100-g weight and a 102-g weight. According to Weber's law, the smallest detectable difference from a 500-g weight is approximately:",
          choices: ["2 g", "5 g", "10 g", "20 g"],
          answer: 2,
          explanation: "Weber's law: the JND is a constant fraction of the stimulus (here 2/100 = 2%). 2% of 500 g = 10 g.",
          subject: "Psychology", category: "6A", plan: ["Sensory perception"]
        },
        {
          stem: "A pituitary tumor compressing the optic chiasm would most likely cause:",
          choices: ["complete blindness in one eye.", "loss of the temporal (peripheral) visual fields of both eyes.", "loss of the right visual field of both eyes.", "loss of color vision without loss of visual fields."],
          answer: 1,
          explanation: "Fibers from the nasal hemiretinas, which carry the temporal visual fields, cross at the optic chiasm. Compression there causes bitemporal hemianopia (\"tunnel vision\").",
          subject: "Psychology", category: "6A", plan: ["Sight (vision)"]
        },
        {
          stem: "A student's heart races before an exam. She interprets the sensation as excitement rather than fear because she is surrounded by cheerful classmates. This interpretation is best explained by:",
          choices: ["the Schachter–Singer two-factor theory.", "the Cannon–Bard theory.", "the James–Lange theory.", "the opponent-process theory."],
          answer: 0,
          explanation: "Schachter–Singer holds that emotion comes from physiological arousal plus a cognitive label drawn from context. Same arousal with a different situational cue gives a different emotion.",
          subject: "Psychology", category: "6C", plan: ["Emotion"]
        },
        {
          stem: "After watching a driver run a red light, an observer concludes that the driver is reckless, without considering that the driver may have been rushing to a hospital. This illustrates:",
          choices: ["the halo effect.", "confirmation bias.", "the self-serving bias.", "the fundamental attribution error."],
          answer: 3,
          explanation: "The fundamental attribution error is overweighting dispositional (personality) explanations and underweighting situational ones when judging other people's behavior.",
          subject: "Psychology", category: "8B", plan: ["Attributing behavior to persons or situations"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Life expectancy in the United States differs by more than 20 years between the healthiest and least healthy census tracts, which are sometimes only a few miles apart. Public health sociologists argue that these gaps are driven less by individual choices than by the social conditions in which people are born, live, and work.</p>
<p>Historical housing policies, including mid-twentieth-century lending practices that rated predominantly Black neighborhoods as high-risk for mortgage investment, contributed to persistent residential segregation. Neighborhoods affected by these policies today tend to have fewer full-service grocery stores, fewer primary-care clinics, and higher exposure to environmental pollutants. Researchers have found that these neighborhood characteristics predict rates of hypertension and asthma even after controlling for individual income.</p>
<p>Some scholars emphasize that strong community networks can partially buffer these effects. In one longitudinal study, residents of disadvantaged neighborhoods who reported high participation in religious and civic organizations had better access to job referrals, childcare, and transportation, and they reported better self-rated health than residents with low participation.</p>
<p>Others caution that such networks cannot substitute for structural change. They note that the same neighborhoods have experienced population aging as younger residents with the means to leave have moved away, which concentrates chronic disease burden among those who remain.</p>`,
      questions: [
        {
          stem: "The lending practices described in the second paragraph are best characterized as an example of:",
          choices: ["institutional discrimination.", "individual prejudice.", "symbolic interactionism.", "anomie."],
          answer: 0,
          explanation: "Institutional discrimination is unequal treatment built into the policies and practices of organizations such as banks and governments, whether or not any individual holds prejudice.",
          subject: "Sociology", category: "8C", plan: ["Discrimination", "Social inequality"]
        },
        {
          stem: "A child raised in one of the neighborhoods described who becomes a physician with a substantially higher income than her parents has experienced:",
          choices: ["intragenerational horizontal mobility.", "intergenerational upward mobility.", "intragenerational downward mobility.", "meritocratic reproduction."],
          answer: 1,
          explanation: "Comparing a child's social position with her parents' is intergenerational mobility. Moving to a higher socioeconomic position is upward (vertical) mobility.",
          subject: "Sociology", category: "10A", plan: ["Social inequality"]
        },
        {
          stem: "Which sociological perspective would most likely interpret the passage's findings as evidence that powerful groups shape institutions to preserve their advantages?",
          choices: ["Functionalism", "Symbolic interactionism", "Conflict theory", "Social exchange theory"],
          answer: 2,
          explanation: "Conflict theory sees society as a competition for scarce resources, with dominant groups using institutions to keep their power. Functionalism stresses how social structures contribute to stability.",
          subject: "Sociology", category: "9A", plan: ["Social structures"]
        },
        {
          stem: "The resources gained through participation in religious and civic organizations described in the third paragraph are best described as:",
          choices: ["cultural capital.", "social capital.", "material culture.", "human capital."],
          answer: 1,
          explanation: "Social capital is the resources available through social networks and relationships, such as job referrals and shared childcare. Cultural capital is non-financial assets such as education, tastes, and credentials.",
          subject: "Sociology", category: "10A", plan: ["Social inequality", "Social structures"]
        },
        {
          stem: "The pattern described in the final paragraph, in which younger residents leave and the remaining population ages, would most directly affect which demographic measure of the neighborhood?",
          choices: ["Total fertility rate of residents who moved away", "Sex ratio at birth", "Rate of immigration from abroad", "Median age and the dependency ratio"],
          answer: 3,
          explanation: "When working-age adults move out and older residents stay, the neighborhood's median age and its ratio of dependents (e.g., elderly) to working-age people both rise.",
          subject: "Sociology", category: "9B", plan: ["Demographics"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Animal models of addiction often use self-administration paradigms. In one study, rats were trained to press a lever to receive an intravenous infusion of cocaine. Group 1 received an infusion after every lever press. Group 2 received an infusion after an unpredictable number of presses, averaging one infusion per five presses.</p>
<p>After two weeks of training, the drug was replaced with saline for both groups. Group 2 continued pressing the lever at high rates for substantially longer than Group 1 before responding declined.</p>
<p>The researchers also observed that rats repeatedly given the drug in a distinctive striped cage showed a smaller physiological response to a fixed dose in that cage than when the same dose was given in an unfamiliar cage. In humans, a similar phenomenon is thought to contribute to accidental overdose when users take their usual dose in an unfamiliar setting.</p>
<p>In later stages of dependence, rats continued to self-administer the drug even when its rewarding effects were diminished, apparently to relieve aversive withdrawal symptoms.</p>`,
      questions: [
        {
          stem: "The persistent lever pressing by Group 2 after saline replacement is best explained by the fact that variable-ratio schedules:",
          choices: ["produce high response rates that are highly resistant to extinction.", "produce a scalloped response pattern with pauses after each reinforcer.", "are the most effective schedule for the initial acquisition of a behavior.", "require a fixed amount of time to pass before reinforcement."],
          answer: 0,
          explanation: "Group 2 was on a variable-ratio (VR-5) schedule, which yields high, steady responding and strong resistance to extinction (as with slot machines). Continuous reinforcement (Group 1) is best for acquisition but extinguishes quickly. Scalloping is typical of fixed-interval schedules.",
          subject: "Psychology", category: "7C", plan: ["Learning"]
        },
        {
          stem: "Continued drug use to relieve withdrawal symptoms, as described in the final paragraph, is an example of:",
          choices: ["positive reinforcement.", "positive punishment.", "negative reinforcement.", "negative punishment."],
          answer: 2,
          explanation: "Removing an aversive stimulus (withdrawal) increases the behavior (drug use), which is negative reinforcement. Punishment always decreases a behavior.",
          subject: "Psychology", category: "7C", plan: ["Learning", "Drug dependence"]
        },
        {
          stem: "The reinforcing effects of cocaine are primarily mediated by increased dopamine signaling in which neural pathway?",
          choices: ["Nigrostriatal pathway", "Tuberoinfundibular pathway", "Corticospinal tract", "Mesolimbic pathway, including the nucleus accumbens"],
          answer: 3,
          explanation: "Drugs of abuse raise dopamine in the mesolimbic reward pathway, from the ventral tegmental area to the nucleus accumbens. The nigrostriatal pathway is mainly involved in motor control (Parkinson's disease).",
          subject: "Psychology", category: "6B", plan: ["Drug dependence", "Biological basis of behavior: The nervous system"]
        },
        {
          stem: "In the context-specific tolerance described in the third paragraph, the striped cage functions as a(n):",
          choices: ["unconditioned stimulus.", "conditioned stimulus.", "unconditioned response.", "discriminative stimulus for operant responding."],
          answer: 1,
          explanation: "Through classical conditioning, the striped cage (originally neutral) becomes a conditioned stimulus that triggers compensatory physiological responses that blunt the drug's effect. Without that cue, the same dose hits harder, which raises overdose risk.",
          subject: "Psychology", category: "7C", plan: ["Learning", "Drug dependence"]
        }
      ]
    },
    {
      type: "discrete",
      questions: [
        {
          stem: "A patient with schizophrenia reports hearing voices commenting on her actions and believes that neighbors are broadcasting her thoughts. These experiences are classified as:",
          choices: ["negative symptoms.", "cognitive symptoms.", "positive symptoms.", "dissociative symptoms."],
          answer: 2,
          explanation: "Positive symptoms are experiences added to normal function: hallucinations, delusions, and disorganized speech. Negative symptoms are losses, such as flat affect, avolition, and alogia.",
          subject: "Psychology", category: "7A", plan: ["Psychological disorders"]
        },
        {
          stem: "After seeing several news stories about shark attacks, a person estimates that shark attacks are a leading cause of death at beaches. This judgment reflects:",
          choices: ["the representativeness heuristic.", "the availability heuristic.", "belief perseverance.", "functional fixedness."],
          answer: 1,
          explanation: "The availability heuristic is judging how frequent or likely something is by how easily examples come to mind. Vivid, heavily covered events feel more common than they are.",
          subject: "Psychology", category: "6B", plan: ["Cognition"]
        },
        {
          stem: "Following a stroke, a patient understands spoken questions but speaks slowly and effortfully, omitting function words. The damage most likely affected:",
          choices: ["Broca's area in the frontal lobe.", "Wernicke's area in the temporal lobe.", "the arcuate fasciculus.", "the primary visual cortex."],
          answer: 0,
          explanation: "Broca's (expressive) aphasia causes non-fluent, effortful speech with comprehension largely intact. Wernicke's aphasia causes fluent but meaningless speech with poor comprehension.",
          subject: "Psychology", category: "6B", plan: ["Language"]
        },
        {
          stem: "An experienced pianist performs better in front of an audience than when practicing alone, whereas a beginner performs worse in front of an audience. This pattern is best explained by:",
          choices: ["deindividuation.", "groupthink.", "social loafing.", "social facilitation."],
          answer: 3,
          explanation: "Social facilitation: the presence of others raises arousal, which improves performance on simple or well-practiced tasks and hurts it on difficult or new ones.",
          subject: "Psychology", category: "7B", plan: ["Social behavior"]
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>A longitudinal study followed 200 participants from infancy through early adulthood to examine how early relationships relate to later identity development. At 12 months, infants were observed in a laboratory procedure in which a caregiver briefly left the room and later returned while a stranger was present. Infants were classified according to their responses to separation and reunion.</p>
<p>At age 4, children were shown two identical rows of coins. After one row was spread out, they were asked whether the rows still had the same number of coins. Most children said the longer row had more.</p>
<p>At ages 16 and 22, participants completed interviews about their occupational, religious, and political commitments and about whether they had actively explored alternatives before making those commitments. Participants who had been classified as securely attached in infancy were more likely at age 22 to have explored several alternatives before committing to an occupational path.</p>`,
      questions: [
        {
          stem: "The 4-year-olds' responses to the coin task indicate that they were in Piaget's:",
          choices: ["preoperational stage.", "sensorimotor stage.", "concrete operational stage.", "formal operational stage."],
          answer: 0,
          explanation: "Failing conservation tasks (believing the quantity changes when appearance changes) is typical of the preoperational stage (~2–7 years). Conservation is mastered in the concrete operational stage.",
          subject: "Psychology", category: "6B", plan: ["Human development"]
        },
        {
          stem: "An infant who explores the room while the caregiver is present, becomes distressed when the caregiver leaves, and is quickly comforted on the caregiver's return would be classified as having:",
          choices: ["avoidant attachment.", "ambivalent (resistant) attachment.", "disorganized attachment.", "secure attachment."],
          answer: 3,
          explanation: "In Ainsworth's Strange Situation, securely attached infants use the caregiver as a secure base, show distress at separation, and are readily soothed at reunion.",
          subject: "Psychology", category: "7A", plan: ["Human development"]
        },
        {
          stem: "According to Erikson, the developmental crisis most relevant to the interviews conducted at age 16 is:",
          choices: ["intimacy versus isolation.", "industry versus inferiority.", "identity versus role confusion.", "generativity versus stagnation."],
          answer: 2,
          explanation: "Erikson's adolescent stage (~12–18) is identity vs. role confusion, in which teenagers explore and form a coherent sense of self. Intimacy vs. isolation is young adulthood.",
          subject: "Psychology", category: "8A", plan: ["Self-identity", "Human development"]
        },
        {
          stem: "A participant who at age 22 had committed firmly to the career her parents chose for her, without ever considering alternatives, would be classified in Marcia's framework as being in identity:",
          choices: ["achievement.", "foreclosure.", "moratorium.", "diffusion."],
          answer: 1,
          explanation: "Marcia's statuses cross exploration with commitment. Commitment without exploration is foreclosure, and exploration followed by commitment is achievement. Moratorium is exploring without commitment, and diffusion is neither.",
          subject: "Psychology", category: "8A", plan: ["Self-identity"]
        }
      ]
    }
  ]
});
