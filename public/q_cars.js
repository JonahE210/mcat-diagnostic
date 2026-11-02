// Critical Analysis and Reasoning Skills (half-length: 4 passages, 26 questions, 45 min). No outside knowledge required.
// skill = AAMC CARS skill tested: "Foundations of Comprehension", "Reasoning Within the Text", "Reasoning Beyond the Text".
window.MCAT_SECTIONS = window.MCAT_SECTIONS || [];
window.MCAT_SECTIONS.push({
  id: "cars",
  short: "CARS",
  name: "Critical Analysis and Reasoning Skills",
  minutes: 45,
  periodicTable: false,
  blocks: [
    {
      type: "passage",
      html: `
<p>Few professions are as quietly contested as the restoration of paintings. To the museum visitor, a freshly cleaned canvas appears self-evidently improved: colors that had sunk into a brownish murk return with startling clarity, and figures that seemed to dissolve into shadow regain their edges. The restorer, on this view, is a kind of archaeologist who removes the accretions of time to recover what the artist actually made. Yet this flattering picture rests on an assumption that will not bear much weight—namely, that there exists a single "original" state of the work to which we might return.</p>
<p>Consider what a painting is materially. Pigments are suspended in binding media that continue to change chemically for decades, even centuries, after the artist sets down the brush. Some colors fade; others darken; varnishes, whether applied by the artist or by later hands, yellow and craze. Even on the day a work left the studio, it was not a fixed object but the first moment in a long chemical biography. To speak of restoring the painting "as the artist intended" is therefore to claim knowledge of an intention that was itself bound up with materials the artist knew would age. Many Renaissance painters, after all, expected their glazes to mellow and composed with that mellowing in mind.</p>
<p>The removal of varnish is the most dramatic and most disputed intervention. Defenders of aggressive cleaning point out that discolored varnish falsifies tonal relationships, flattening a carefully modulated space into a uniform amber. They are not wrong. But critics observe that once a varnish layer is removed, any final glazes the artist may have mixed into or laid upon it go with it, and these cannot be recovered. What is lost in such cases is not grime but evidence. The cleaned surface may look more "authentic" precisely because it conforms to our modern taste for brightness and legibility—a taste that would have puzzled many of the painters whose works are subjected to it.</p>
<p>None of this means that restorers should do nothing. Flaking paint must be consolidated; tears must be mended; a picture left to its fate would eventually cease to be a picture at all. The relevant distinction is between conservation, which stabilizes a work in its present condition, and restoration in the strong sense, which aspires to reverse its history. The former is a duty; the latter is a temptation. The most defensible practice is one guided by two principles that have become standard in the field only in recent decades: that every intervention should be minimal, and that every intervention should be reversible, so that future restorers—who will doubtless judge our choices as harshly as we judge those of our predecessors—are left with options we did not foreclose.</p>
<p>A painting's age is not a disfigurement to be corrected but part of what we encounter when we stand before it. To erase that age entirely is not to see the work as its maker saw it, which is impossible, but to see it as we wish it had been.</p>`,
      questions: [
        {
          stem: "The central thesis of the passage is that:",
          choices: ["restorers should not intervene in the physical condition of old paintings.", "the goal of returning a painting to its \"original\" state is conceptually flawed, so intervention should be limited and reversible.", "modern cleaning techniques have made varnish removal safe and reliable.", "Renaissance painters were indifferent to how their works would age."],
          answer: 1,
          explanation: "The author argues that no single original state exists (paragraphs 1–2) and recommends minimal, reversible conservation (paragraph 4). A is too extreme, since the author says restorers should not \"do nothing.\" D contradicts paragraph 2.",
          skill: "Foundations of Comprehension"
        },
        {
          stem: "The author mentions that many Renaissance painters \"expected their glazes to mellow\" primarily in order to:",
          choices: ["show that the artist's intention may have included the effects of aging.", "argue that Renaissance paintings should be cleaned more aggressively than modern ones.", "demonstrate that Renaissance glazes were chemically unstable.", "criticize Renaissance painters for using inferior materials."],
          answer: 0,
          explanation: "The point supports the claim that \"as the artist intended\" is problematic: if painters anticipated aging, then removing its effects could go against their intentions.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "Based on the passage, the author would most likely agree with which statement about defenders of aggressive cleaning?",
          choices: ["Their arguments are entirely without merit.", "They are primarily motivated by commercial interests.", "They correctly identify a real problem but underestimate what may be lost in solving it.", "They have been vindicated by recent advances in chemistry."],
          answer: 2,
          explanation: "The author concedes \"They are not wrong\" about discolored varnish, then argues that removal can destroy irreplaceable glazes. That is partial agreement with a significant reservation.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "As used in the passage, the distinction between \"conservation\" and \"restoration in the strong sense\" depends mainly on whether an intervention:",
          choices: ["is performed by a trained professional.", "uses modern chemical solvents.", "is visible to museum visitors.", "aims to stabilize the present condition or to undo the work's history."],
          answer: 3,
          explanation: "Paragraph 4 defines conservation as stabilizing a work \"in its present condition\" and strong restoration as aspiring \"to reverse its history.\"",
          skill: "Foundations of Comprehension"
        },
        {
          stem: "Which new finding would most weaken the author's argument against aggressive varnish removal?",
          choices: ["A survey shows that most museum visitors prefer cleaned paintings.", "A new imaging technique reliably detects artists' glazes so restorers can remove varnish while leaving glazes intact.", "Several old varnishes are found to have been applied by the original artists.", "Restorers in the nineteenth century often repainted damaged areas."],
          answer: 1,
          explanation: "The author's key objection is that removing varnish irreversibly destroys glazes (\"evidence\"). If glazes could be reliably preserved, that objection loses most of its force. A would not move the author, who treats visitor taste as a modern bias. C actually strengthens the concern.",
          skill: "Reasoning Beyond the Text"
        },
        {
          stem: "Suppose a conservator fills a small area of paint loss on a seventeenth-century portrait using a modern pigment in a binder that can be dissolved later without affecting the original paint. Based on the passage, the author would most likely regard this intervention as:",
          choices: ["acceptable, because it is minimal and reversible.", "unacceptable, because any addition falsifies the work's history.", "unacceptable, because modern pigments differ from historical ones.", "acceptable only if the artist's original intentions are documented."],
          answer: 0,
          explanation: "The intervention meets both principles the author endorses: it is minimal (a small loss) and reversible (a dissolvable binder). Nothing in the passage requires documented intentions, which the author says are largely unknowable.",
          skill: "Reasoning Beyond the Text"
        },
        {
          stem: "The author's attitude toward the museum visitor's perception of a freshly cleaned painting (paragraph 1) is best described as:",
          choices: ["admiring.", "indifferent.", "skeptical.", "hostile."],
          answer: 2,
          explanation: "The author presents the visitor's view as \"flattering\" but resting on an assumption that \"will not bear much weight,\" then spends the passage questioning it. That is skepticism, not hostility.",
          skill: "Foundations of Comprehension"
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>For much of the twentieth century, economists and anthropologists regarded each other's accounts of gift-giving with mutual suspicion. To the economist, a gift was a puzzle: why would a rational agent transfer resources without compensation? The most common answer was that gifts were simply delayed exchanges, investments in reputation or future reciprocity dressed up in the language of generosity. To the anthropologist, this answer seemed to miss the point entirely. In the societies that ethnographers studied, gifts were not disguised transactions; they were the very means by which social relationships were created and sustained.</p>
<p>The anthropological insight, most famously articulated in studies of ceremonial exchange in the Pacific Northwest and Melanesia, is that a gift creates an obligation that cannot be discharged by a mere return of equivalent value. To repay a gift immediately and exactly is, in many settings, an insult: it signals a desire to end the relationship, to be "quits." The appropriate response is a return gift given after an interval and differing in kind, so that the balance between the parties is never quite settled. The debt, in other words, is the bond.</p>
<p>This is not to say that gift systems are free of calculation or self-interest. Participants in competitive feasting were acutely aware of status and of who owed what to whom; gifts could humiliate as easily as honor. Here the economists' skepticism has some purchase. But to reduce such systems to self-interest is to mistake one of their features for their essence. A person who gives in order to be recognized as generous is still participating in a moral order in which generosity, rather than accumulation, is what confers recognition—and that order is precisely what requires explanation.</p>
<p>The danger on the other side is romanticism. It has been tempting for critics of market societies to hold up "gift economies" as models of a lost solidarity, warmer and more humane than the impersonal exchanges of the marketplace. Such portraits typically neglect the coercive dimension of obligation. A gift that cannot be refused, and that binds the recipient to an open-ended debt, can be a powerful instrument of hierarchy. The chief whose largesse no one can match is not thereby the community's servant.</p>
<p>What emerges from the more careful ethnographies is neither the economist's calculating individual nor the romantic's selfless communard, but something more interesting: a form of social life in which the line between interest and obligation, between giving and binding, is drawn differently than in our own.</p>`,
      questions: [
        {
          stem: "The passage suggests that, in many of the societies anthropologists studied, an immediate and exactly equivalent return of a gift would be interpreted as:",
          choices: ["an expression of gratitude.", "an attempt to end the relationship.", "a sign of economic sophistication.", "a demand for a larger gift."],
          answer: 1,
          explanation: "Paragraph 2: exact, immediate repayment \"signals a desire to end the relationship, to be 'quits.'\"",
          skill: "Foundations of Comprehension"
        },
        {
          stem: "The statement \"The debt, in other words, is the bond\" most nearly means that:",
          choices: ["social relationships are maintained by the ongoing imbalance between parties.", "gift systems are fundamentally a form of lending at interest.", "members of gift economies were frequently in financial distress.", "legal contracts originated in ceremonial exchange."],
          answer: 0,
          explanation: "The previous sentences explain that returns are deliberately unequal so that \"the balance between the parties is never quite settled.\" The ongoing obligation is what keeps the relationship going.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "The author's treatment of the economists' view of gifts can best be described as:",
          choices: ["complete endorsement.", "complete rejection.", "acceptance that gifts involve self-interest, combined with a denial that self-interest explains them fully.", "indifference, since the author considers the question unanswerable."],
          answer: 2,
          explanation: "Paragraph 3 grants that \"the economists' skepticism has some purchase\" but says reducing gift systems to self-interest \"mistake[s] one of their features for their essence.\"",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "The example of \"the chief whose largesse no one can match\" is used to support the claim that:",
          choices: ["leaders in gift economies were generally selfless.", "competitive feasting eventually gave way to market exchange.", "anthropologists exaggerated the importance of chiefs.", "obligations created by gifts can reinforce hierarchy."],
          answer: 3,
          explanation: "It illustrates the \"coercive dimension of obligation\" from paragraph 4: unmatched generosity puts others permanently in debt, which strengthens the chief's dominance.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "Which situation in contemporary society would the author most likely view as analogous to the anthropological account of gift-giving?",
          choices: ["Neighbors who take turns hosting dinners, deliberately varying what they serve and never keeping an exact tally", "A customer who pays the listed price for groceries at a supermarket", "A company that offers a discount in exchange for a customer's email address", "Two friends who split a restaurant bill evenly to the cent"],
          answer: 0,
          explanation: "The neighbors exchange returns that differ in kind, after an interval, without settling accounts, which keeps the relationship going. Choices B–D are exact, settled exchanges the author contrasts with gift relations.",
          skill: "Reasoning Beyond the Text"
        },
        {
          stem: "Which of the following, if true, would most challenge the author's characterization of the romantic view of gift economies?",
          choices: ["Some market societies also have strong traditions of charitable giving.", "Ethnographic evidence shows that in some gift economies, recipients could freely decline gifts without social penalty and that no lasting status differences resulted.", "Economists have recently developed models incorporating reputation effects.", "Competitive feasting was practiced only by a small number of societies."],
          answer: 1,
          explanation: "The author faults romantics for neglecting coercion and hierarchy. Evidence that gifts could be refused freely and produced no hierarchy would suggest the romantic view is more accurate than the author allows.",
          skill: "Reasoning Beyond the Text"
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Boredom has long suffered from a poor reputation among philosophers—when it has been noticed at all. It is usually treated as a trivial discomfort, the mental equivalent of an itch, to be relieved by whatever distraction lies at hand. The modern entertainment industry, which promises that no one need ever be bored again, is the logical culmination of this view. If boredom is merely the absence of stimulation, then more stimulation is the obvious cure, and a world of infinite streams is a world in which the problem has been solved.</p>
<p>But the problem has not been solved; by most accounts it has grown worse. Surveys of adolescents and adults alike report rising levels of boredom in precisely the decades in which available stimulation has multiplied. This apparent paradox dissolves once we recognize that boredom is not the absence of stimulation but the absence of meaning. A person can be bored in the midst of noise and spectacle, and absorbed in the stillest of tasks. What distinguishes the two conditions is not the quantity of input but whether the activity engages something the person cares about.</p>
<p>On this account, boredom is less a defect than a signal. Like pain, it tells us that something is wrong—not with our surroundings necessarily, but with our relation to them. The person who is bored at work may be telling herself, before she is ready to admit it, that the work no longer expresses anything she values. The student bored in class may be registering, however inarticulately, that he has not been shown why the material matters. To silence such signals with distraction is to treat the symptom while ignoring the disease, much as one might take painkillers for a broken bone and continue walking on it.</p>
<p>Some will object that this account dignifies what is often simple restlessness. Not every bored child waiting in a doctor's office is experiencing an existential crisis. This is fair. Boredom comes in degrees, and its milder forms may indeed call for nothing more than a book or a game. But even the waiting child's boredom has a structure: it arises because the situation demands her presence while offering her nothing to do with it. The milder and deeper forms differ in scale, not in kind.</p>
<p>If boredom is a signal of meaning-deficit, the appropriate response is not to flee it but to attend to it—to ask what it reveals about what we want and lack. This is uncomfortable, which is precisely why distraction is so appealing. But a culture that has made boredom intolerable may also have made itself unable to hear one of the few reliable messages it receives about how it ought to live.</p>`,
      questions: [
        {
          stem: "The main purpose of the passage is to:",
          choices: ["argue that boredom should be understood as a meaningful signal rather than a trivial discomfort.", "describe the history of philosophical writing on boredom.", "criticize the entertainment industry for its business practices.", "present survey data on rising rates of boredom among adolescents."],
          answer: 0,
          explanation: "The passage replaces the \"absence of stimulation\" view with the claim that boredom is a signal of meaning-deficit that deserves attention. The entertainment industry and the survey data serve as supporting points.",
          skill: "Foundations of Comprehension"
        },
        {
          stem: "According to the author, the \"apparent paradox\" mentioned in the second paragraph is that:",
          choices: ["philosophers have neglected boredom despite its importance.", "boredom has increased even as available stimulation has increased.", "adolescents report more boredom than adults.", "people are often absorbed in still, quiet tasks."],
          answer: 1,
          explanation: "The paradox is rising boredom \"in precisely the decades in which available stimulation has multiplied,\" which the stimulation view cannot explain.",
          skill: "Foundations of Comprehension"
        },
        {
          stem: "The author's comparison of distraction to \"painkillers for a broken bone\" is intended to suggest that distraction:",
          choices: ["is medically harmful.", "is the most effective available remedy for boredom.", "relieves discomfort while leaving its underlying cause unaddressed and possibly worsening.", "should be used only under professional supervision."],
          answer: 2,
          explanation: "The analogy is about treating \"the symptom while ignoring the disease.\" Painkillers mask the warning that would otherwise stop someone from continuing to walk on a broken bone.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "How does the author respond to the objection that the account \"dignifies what is often simple restlessness\"?",
          choices: ["By rejecting the objection as irrelevant", "By conceding that the objection proves the account wrong", "By arguing that children do not experience genuine boredom", "By granting that boredom varies in intensity while maintaining that all forms share the same structure"],
          answer: 3,
          explanation: "The author says \"This is fair\" and that mild boredom may need only a book, but holds that the forms \"differ in scale, not in kind,\" since even the waiting child faces a situation that offers nothing meaningful to do.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "Which of the following findings would most strengthen the author's central claim?",
          choices: ["Employees who report high boredom at work show reduced boredom after moving to roles they describe as personally meaningful, even when the new roles involve less variety.", "People who own more entertainment devices report slightly lower boredom.", "Boredom is associated with increased activity in brain regions linked to attention.", "Boredom is reported more frequently in urban areas than in rural ones."],
          answer: 0,
          explanation: "The author claims boredom tracks meaning, not stimulation. A drop in boredom with more meaning but less variety separates the two explanations in the author's favor. Choice B would support the stimulation view instead.",
          skill: "Reasoning Beyond the Text"
        },
        {
          stem: "Based on the passage, the author would most likely recommend that a student who is persistently bored in a required course:",
          choices: ["use a phone during lectures to make the time pass more quickly.", "reflect on why the material seems not to matter and seek out how it connects to things the student values.", "withdraw from the course immediately.", "accept boredom as an unavoidable part of education that carries no information."],
          answer: 1,
          explanation: "The author argues that \"the appropriate response is not to flee it but to attend to it—to ask what it reveals.\" A is the distraction strategy the author criticizes, and D contradicts the signal view.",
          skill: "Reasoning Beyond the Text"
        },
        {
          stem: "The author's attitude toward \"a culture that has made boredom intolerable\" is best described as:",
          choices: ["celebratory.", "neutral.", "concerned.", "contemptuous."],
          answer: 2,
          explanation: "The final sentence warns that such a culture may be unable to hear an important message about how to live. That is concern, not neutrality, and the measured tone falls short of contempt.",
          skill: "Foundations of Comprehension"
        }
      ]
    },
    {
      type: "passage",
      html: `
<p>Every translator of poetry eventually confronts the same dilemma, usually framed as a choice between fidelity and freedom. The faithful translator reproduces as closely as possible the literal sense of each line; the free translator sacrifices literal sense in order to recreate the poem's music, its rhythm and rhyme, its tone. Each accuses the other of betrayal. The literalist charges that the free translator has substituted her own poem for the original; the free translator replies that the literalist has delivered a corpse.</p>
<p>I want to suggest that this framing is itself the source of much confusion, because it assumes that the "sense" of a poem can be separated from its sound and form, as though the meaning were a passenger that could be moved from one vehicle to another. In prose this assumption is roughly serviceable. A legal contract or a chemistry textbook can be translated with tolerable completeness because its meaning is largely detachable from its phrasing. But a poem is precisely the kind of text in which phrasing <i>is</i> meaning. The weight a line gives to a word by placing it at the end, the echo that binds two distant images through a shared vowel, the hesitation produced by a line break—these are not ornaments draped over a paraphrasable content. They are how the poem thinks.</p>
<p>If this is right, then the so-called faithful translation is faithful only to a part of the poem, and arguably to the least poetic part. A word-for-word rendering that preserves every image but abandons every rhythm has not kept the poem's meaning while losing its music; it has lost a substantial portion of its meaning. The literalist's fidelity is, in this sense, a kind of infidelity that does not recognize itself.</p>
<p>This does not license the free translator to do as she likes. A translation that discards the original's images in pursuit of a pleasing rhyme has made the opposite mistake, treating sound as if it were the whole of sense. The better conception of translation is as an act of interpretation—a reading so attentive that it can identify which of the poem's many interlocking effects matter most, and then a writing resourceful enough to reproduce those effects by whatever means the target language allows. Different translators will make different judgments, and that is as it should be. We do not expect two performances of a sonata to be identical, and we do not think that a pianist who varies the tempo has thereby failed to play the piece.</p>
<p>The measure of a translation, then, is not how closely it matches the original word for word, but whether a reader encounters in it something of what a reader of the original encounters: not the same words, which is impossible, but a comparable experience.</p>`,
      questions: [
        {
          stem: "The author's primary claim about the fidelity–freedom debate is that:",
          choices: ["free translation is always superior to literal translation.", "the debate rests on the mistaken assumption that a poem's meaning can be separated from its form.", "poetry cannot be translated in any meaningful sense.", "literal translation is appropriate for poetry but not for prose."],
          answer: 1,
          explanation: "Paragraph 2: \"this framing is itself the source of much confusion, because it assumes that the 'sense' of a poem can be separated from its sound and form.\" Paragraph 4 rejects A, and C goes too far, since the author thinks good translation is possible.",
          skill: "Foundations of Comprehension"
        },
        {
          stem: "The author mentions legal contracts and chemistry textbooks primarily to:",
          choices: ["argue that technical texts are harder to translate than poems.", "show that all texts lose meaning in translation equally.", "contrast texts whose meaning is largely detachable from phrasing with poems, whose meaning is not.", "suggest that poetry translators should receive technical training."],
          answer: 2,
          explanation: "Prose is the case where the meaning-as-passenger assumption is \"roughly serviceable,\" which sets up the contrast with poetry, \"in which phrasing is meaning.\"",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "The phrase \"a kind of infidelity that does not recognize itself\" (paragraph 3) refers to the:",
          choices: ["free translator's habit of inventing new images.", "original poet's departure from conventional forms.", "reader's failure to appreciate a translation.", "literal translator's loss of the meaning carried by the poem's sound and form."],
          answer: 3,
          explanation: "The literalist thinks she is being faithful, but by giving up rhythm and form she loses part of the poem's meaning without realizing it.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "The analogy to performances of a sonata is used to support the idea that:",
          choices: ["legitimate translations of the same poem can differ because they reflect different interpretive judgments.", "translators should strive to make all versions of a poem identical.", "music is more difficult to interpret than poetry.", "translations are inferior to original works in the way that recordings are inferior to live performance."],
          answer: 0,
          explanation: "The sentence before it says \"Different translators will make different judgments, and that is as it should be,\" and the sonata analogy illustrates that varied interpretations can all be faithful.",
          skill: "Reasoning Within the Text"
        },
        {
          stem: "Based on the passage, which translation of a short lyric poem would the author most likely praise?",
          choices: ["One that renders each word with its closest dictionary equivalent, with footnotes explaining the original rhymes", "One that replaces the poem's central image of a river with an image of a highway to make it more contemporary", "One that alters some literal details in order to recreate the original's insistent rhythm and its key echo between the first and last lines, while preserving its central images", "One that adds a new stanza explaining the poem's meaning for modern readers"],
          answer: 2,
          explanation: "The author values translation that finds \"which of the poem's many interlocking effects matter most\" and reproduces them by whatever means are available. C keeps the central images and recreates rhythm and echo. B discards central images, a mistake the author names. A is the literalist approach.",
          skill: "Reasoning Beyond the Text"
        },
        {
          stem: "Which of the following claims, if true, would most undermine the author's argument?",
          choices: ["Many readers prefer translations that rhyme.", "Some poets write in free verse without regular rhyme or meter.", "Translators frequently disagree about how to render the same line.", "Readers given literal and form-preserving translations of the same poems consistently report identical interpretations and emotional responses."],
          answer: 3,
          explanation: "The author's argument depends on sound and form carrying meaning, so losing them changes the reader's experience. If literal and form-preserving versions produced identical experiences, form would not carry meaning in the way the author claims.",
          skill: "Reasoning Beyond the Text"
        }
      ]
    }
  ]
});
