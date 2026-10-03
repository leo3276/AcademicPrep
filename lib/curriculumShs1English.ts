// Ghanaian SHS 1 English Language Curriculum
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus for English Language
// 12 Comprehensive Topics covering Terms 1, 2 and 3 with Videos, Detailed Notes,
// Worked Examples and Quizzes (textbook-grade, WASSCE-standard)

import { CurriculumTopic } from './types';

export const SHS1_ENGLISH_TOPICS: CurriculumTopic[] = [
  // =========================================================================
  // TERM 1
  // =========================================================================
  {
    id: 'shs1-eng-t1-word-classes',
    subjectId: 'english',
    level: 'SHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Word Classes (Parts of Speech) and Their Functions',
    description: 'The eight parts of speech, open versus closed word classes, and how to identify a word class by its function in context rather than by position or guesswork.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=chjmnCSPnbw',
    youtubeId: 'chjmnCSPnbw',
    keyNotes: `• The Eight Word Classes:
  1. Noun – names a person, place, thing or idea (Kofi, Kumasi, knife, honesty).
  2. Pronoun – replaces a noun (he, she, it, they, who, someone).
  3. Verb – shows action or state (run, is, think, has been selling).
  4. Adjective – modifies a noun (ripe, three, beautiful, cheaper).
  5. Adverb – modifies a verb, adjective or other adverb (quickly, very, well).
  6. Preposition – shows relation, takes a noun object (in, at, from, during).
  7. Conjunction – joins words/clauses (and, but, because, although).
  8. Interjection – expresses feeling (Wow!, Alas!, Hey!).
• Open classes (nouns, verbs, adjectives, adverbs) keep accepting new words; closed classes (pronouns, prepositions, conjunctions) rarely change.
• FUNCTION OVER FORM: the same word can belong to different classes: "water" in "The water is cheap" (noun) vs "She waters the tomatoes" (verb).`,
    detailedNotes: {
      overview: 'Every English word belongs to a class determined by the job it does in a sentence. WASSCE Paper 1 Section A (Lexis and Structure) and Paper 2 comprehension both test your ability to name word classes and explain their functions, so classification by function — not by a memorised word list — is the mastery target for this topic.',
      introduction: 'At SHS 1 you move beyond simply "naming parts of speech" to classifying words by the evidence of their behaviour in a sentence: what they modify, what they replace, and what position they can occupy. This functional approach is exactly what WAEC examiners reward.',
      realWorldContext: 'Stand at a Makola Market fruit stall and listen: "Maa! These ripe plantains are very sweet — buy two bunches and add peanuts!" Every word is doing a job: "ripe" qualifies plantains (adjective), "buy" instructs (verb), "and" joins (conjunction), "Maa!" expresses feeling (interjection). Grammar is alive in everyday Ghanaian speech.',
      objectives: [
        'Name the eight parts of speech and give correct examples of each',
        'Distinguish open-class from closed-class word categories',
        'Identify the word class of an underlined word from its function in a sentence',
        'Explain how one word form can belong to different classes in different sentences',
        'Apply substitution and modification tests to verify a word class in WASSCE objectives'
      ],
      sections: [
        {
          title: 'The Eight Word Classes at a Glance',
          content: 'A word class (part of speech) is a group of words that share the same grammatical behaviour. Nouns typically follow determiners and can be subjects; verbs change form for tense (walk/walked/walking); adjectives grade with -er/more (cheap/cheaper); adverbs of manner answer "how?" after a verb. Learning the classes as families with typical members is the foundation for all grammar questions on WASSCE Paper 1.',
          bulletPoints: [
            'Noun: names person, place, thing, or abstract idea — common (river, teacher), proper (Volta, Ghana), collective (parliament), abstract (honesty).',
            'Pronoun: stands in place of a noun — personal (I, him), reflexive (herself), relative (who, which), demonstrative (this, those).',
            'Verb: action or state — main verbs (sell, study), auxiliary/helping verbs (is, has, will), linking verbs (be, seem, become).',
            'Adjective: qualifies a noun or pronoun — descriptive (tall), quantitative (five), demonstrative (that), comparative (better).',
            'Adverb: qualifies a verb, adjective or adverb — manner (carefully), time (yesterday), place (everywhere), degree (extremely).',
            'Preposition: governs a noun/pronoun to form a prepositional phrase — in, on, at, into, during, despite.',
            'Conjunction: coordinates (and, but, or) or subordinates (because, although, unless).',
            'Interjection: standalone emotional utterances — Eh!, Hurra!, Tsk tsk!'
          ],
          keyTakeaway: 'Classify by function: what job does the word perform in this particular sentence?',
          realWorldExample: 'A Tema Harbour cargo manifest reads: "Container 45B was carefully unloaded at dawn." — was unloaded (verb), carefully (adverb), at dawn (preposition + noun).'
        },
        {
          title: 'Open Class versus Closed Class',
          content: 'Nouns, verbs, adjectives and adverbs are OPEN classes: Ghanaian English keeps absorbing new members — "galamsey", "tro-tro", "zoning" all entered common use as nouns. Pronouns, prepositions, conjunctions and interjections are CLOSED classes: their membership is fixed and learned as whole sets. WAEC likes to ask which class is "likely to admit new words" — answer open class, always the big four (noun, verb, adjective, adverb).',
          bulletPoints: [
            'Open classes carry most of the vocabulary load and can be counted in the thousands.',
            'Closed classes are small, fixed sets that stitch sentences together — you cannot invent a new preposition.',
            'New slang like "chop money" or "shege" joins the open classes (noun/verb), never the closed ones.',
            'Determiners (a, the, this, every, my) are now treated as a separate closed class by modern grammars — WAEC may still label them adjectives, so follow the question\'s terminology.'
          ],
          keyTakeaway: 'If a class keeps growing with culture and technology, it is open; if the list never changes, it is closed.',
          realWorldExample: 'Mobile money created new verbs and nouns every year — "momoped", "e-levy", "zongo lane" — but no new conjunction was ever needed to join clauses.'
        },
        {
          title: 'Function Shift: One Word, Several Classes',
          content: 'The same spelling can belong to different classes depending on its position and job. Test by substitution: replace the word with a prototypical member of each class and see which substitution keeps the sentence grammatical. "Round" in "a round orange" (adjective), "round the pole" (preposition), "the ball round" (verb), "a round of drinks" (noun/adj). WAEC uses these shift words to trap students who memorise word lists by appearance.',
          bulletPoints: [
            'Noun/verb shift: water, book, hammer, phone ("She books a ticket" vs "The book is thick").',
            'Adjective/adverb shift: early, daily, fast, hard ("He drives fast" — adverb; "a fast car" — adjective).',
            'The -ing trap: gerunds (Reading is fun — noun function) vs present participles (Ama is reading — verb; the reading lamp — adjective).',
            'After linking verbs use adjectives, not adverbs: "The banknote smells genuine" (adj), not "genuinely".'
          ],
          keyTakeaway: 'Never name a word class from the word alone; the sentence decides.',
          realWorldExample: 'At a Kotoka airport forex bureau: "They changed my cedis" (verb) / "The change was small" (noun) — one form, two classes.'
        },
        {
          title: 'Verbs: The Engine of the Sentence',
          content: 'Verbs deserve special attention because WASSCE tests them in several ways: main vs auxiliary vs linking; finite vs non-finite (to-infinitives, gerunds, participles); and transitive vs intransitive (does it demand an object?). "Has been selling" is one verb (present perfect continuous) made of three words — never count words, count the verb phrase. Recognising linking verbs (is, seems, looks, became, tastes) matters for concord and for adjective complements later in the term.',
          bulletPoints: [
            'Main verb carries the meaning; auxiliaries add tense, aspect, mood: "will have finished".',
            'Linking verbs connect the subject to a complement: "The cocoa smells rich." (smells = linking, rich = adjective complement).',
            'Transitive verbs need an object: "Ama bought salt." Intransitive verbs do not: "The bell rang."',
            'Do-support in questions and negatives is auxiliary "do" doing no meaning work: "Did he come?"'
          ],
          keyTakeaway: 'Find the verb first; the rest of the sentence organises itself around it.',
          realWorldExample: 'A tro-tro conductor shouts: "Change o! Going to Ashaiman!" — "Going" is a non-finite verb used like an announcement; the full sentence hides "This bus is going to Ashaiman."'
        }
      ],
      commonMistakes: [
        'Naming the class from the word alone ("well" is always an adverb) instead of from its role in the sentence — "well" is a noun in "a deep well".',
        'Calling every word before a noun an adjective: "the three boys" — "three" is a determiner/numeral, and examiners accept both but expect you to follow WAEC convention.',
        'Confusing adjectives with adverbs after linking verbs: writing "She looked angry" as "She looked angrily" changes the meaning from her expression to the manner of her looking.',
        'Missing multi-word verb phrases: counting "is" and "reading" as two separate verbs rather than one present continuous verb.',
        'Treating interjections as part of the sentence structure — they stand outside the grammar; "Alas, the boy died" still has one subject and one verb.'
      ],
      wassceExamTips: [
        'In Paper 1 Section A, if asked to identify the underlined word class, substitute a typical member of each class into the gap; the class whose substitute still makes sense is your answer.',
        'Memorise the linking verb list (be, become, seem, appear, look, smell, taste, sound, feel) — WAEC reuses these in both word-class and concord items.',
        'Timing guide: Section A objectives should take about 1 minute per question; flag word-class questions you are stuck on and return, since the function test takes 5 seconds once you spot it.',
        'In comprehension Section B/C "grammatical name and function" items, the phrase answer follows the same logic: name the class of the whole group of words (e.g., prepositional phrase), then its job (adverbial — modifies the verb).',
        'When in doubt about -ing words, ask: is it taking an article/adjective ("the singing") → verbal noun; forming a tense with be ("is singing") → verb; qualifying a noun ("singing bird") → adjective.'
      ],
      summaryChecklist: [
        'Can I name all eight word classes and give two Ghanaian-context examples of each?',
        'Can I separate open-class from closed-class words and explain why?',
        'Can I classify an underlined word by applying a substitution test?',
        'Can I explain how "water" changes word class in two different sentences?',
        'Can I identify the single verb phrase inside a multi-word verb like "has been selling"?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-wc-1',
        title: 'Classifying Every Word in a Makola Sentence',
        problem: 'Name the word class of each word: "The two experienced traders proudly displayed fresh mangoes at noon."',
        stepByStepSolution: [
          'Step 1 (M1): Locate the verb first — "displayed" is the action done by the subject, so it is a verb (past tense).',
          'Step 2 (M1): What is being talked about? "traders" — a noun naming people; it is the head of the subject.',
          'Step 3 (M1): Words qualifying "traders": "The" (definite article/determiner), "two" (numeral adjective/determiner), "experienced" (adjective from a participle).',
          'Step 4 (M1): "proudly" answers HOW they displayed — it modifies the verb, so it is an adverb of manner.',
          'Step 5 (A1): "mangoes" receives the action (object) — a noun.',
          'Step 6 (A1): "at" introduces a relation of time and "noon" is its noun object — preposition and noun respectively.',
          'Step 7 (A1): Answer: The (det) two (adj/det) experienced (adj) traders (noun) proudly (adv) displayed (verb) fresh (adj) mangoes (noun) at (prep) noon (noun).'
        ],
        keyTakeaway: 'Work outward from the verb: subject and object are nouns, modifiers around nouns are adjectives, modifiers around the verb are adverbs.'
      },
      {
        id: 'ex-shs1-eng-wc-2',
        title: 'Function Shift: Same Word, Different Classes (WASSCE-style pair)',
        problem: 'State the word class of "hard" in each sentence and justify: (a) "The exam was hard." (b) "Kofi worked hard."',
        stepByStepSolution: [
          'Step 1 (M1): Sentence (a): "hard" follows the linking verb "was" and qualifies the noun "exam" (via the subject) — it names a quality, so it is an ADJECTIVE (subject complement).',
          'Step 2 (M1): Sentence (b): "hard" answers HOW Kofi worked — it modifies the action verb "worked", so it is an ADVERB of manner.',
          'Step 3 (M1): Verification by substitution test: in (b) you can use "carefully" (typical adverb) — "worked carefully" works; in (a) "was carefully" fails, "was difficult" (typical adjective) works.',
          'Step 4 (A1): Answer: (a) adjective; (b) adverb. The form is identical; only the function differs.'
        ],
        keyTakeaway: 'Adjective vs adverb is decided by what the word modifies — a noun takes an adjective; a verb takes an adverb (except after linking verbs).'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t1-word-classes',
      topicId: 'shs1-eng-t1-word-classes',
      title: 'Word Classes Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-wc-1',
          quizId: 'quiz-shs1-eng-t1-word-classes',
          questionText: 'Identify the word class of the underlined word: "The headmistress spoke <u>firmly</u> to the learners."',
          optionA: 'Adjective',
          optionB: 'Adverb',
          optionC: 'Preposition',
          optionD: 'Conjunction',
          correctOption: 'B',
          subConcept: 'Adverbs of manner',
          explanation: '"firmly" tells HOW she spoke, modifying the action verb "spoke", so it is an adverb of manner.',
          remediationTip: 'Ask: does the word describe a noun (adjective) or a verb (adverb)? "Spoke firmly" = how she spoke, so adverb.'
        },
        {
          id: 'q-shs1-eng-wc-2',
          quizId: 'quiz-shs1-eng-t1-word-classes',
          questionText: 'Which pair of word classes are both OPEN classes?',
          optionA: 'Nouns and prepositions',
          optionB: 'Pronouns and conjunctions',
          optionC: 'Nouns and verbs',
          optionD: 'Adverbs and prepositions',
          correctOption: 'C',
          subConcept: 'Open vs closed classes',
          explanation: 'The four open classes are nouns, verbs, adjectives and adverbs; prepositions, pronouns and conjunctions are closed. Only option C contains two open classes.',
          remediationTip: 'Remember: things and actions keep appearing in the culture (new nouns/verbs), but nobody invents a new preposition.'
        },
        {
          id: 'q-shs1-eng-wc-3',
          quizId: 'quiz-shs1-eng-t1-word-classes',
          questionText: 'In which sentence is "light" functioning as a VERB?',
          optionA: 'The light is too bright.',
          optionB: 'She lighted the kerosene lamp.',
          optionC: 'This bag is very light.',
          optionD: 'He travelled light.',
          correctOption: 'B',
          subConcept: 'Function shift',
          explanation: 'In B, "lighted" expresses an action performed on the lamp — a verb. In A it is a noun, in C and D an adjective/adverb.',
          remediationTip: 'A verb must be something someone DOES. Can you put "will" before it? "will light the lamp" works — verb confirmed.'
        },
        {
          id: 'q-shs1-eng-wc-4',
          quizId: 'quiz-shs1-eng-t1-word-classes',
          questionText: 'Choose the correct word to complete the sentence: "The roasted groundnut <u>&nbsp;&nbsp;&nbsp;</u> salty."',
          optionA: 'tastes',
          optionB: 'tastes like',
          optionC: 'tastes deliciously',
          optionD: 'is tasting',
          correctOption: 'A',
          subConcept: 'Linking verbs + adjective complements',
          explanation: '"Taste" is a linking verb here and must be followed by an adjective complement ("salty"). "Tastes deliciously" wrongly makes taste an action verb modified by an adverb.',
          remediationTip: 'If you can replace the verb with "is/are" and the sentence still makes sense ("The groundnut is salty"), the verb is linking and takes an adjective.'
        },
        {
          id: 'q-shs1-eng-wc-5',
          quizId: 'quiz-shs1-eng-t1-word-classes',
          questionText: '"Although it rained heavily, the football match continued." The underlined word "Although" is a:',
          optionA: 'Preposition',
          optionB: 'Coordinating conjunction',
          optionC: 'Subordinating conjunction',
          optionD: 'Adverb of concession',
          correctOption: 'C',
          subConcept: 'Conjunctions',
          explanation: '"Although" joins a dependent clause to the main clause and introduces a condition of contrast — a subordinating conjunction. Coordinating conjunctions (FANBOYS: for, and, nor, but, or, yet, so) join equals.',
          remediationTip: 'If the joined group of words has its own subject and verb and cannot stand alone, the joiner is a SUBORDINATING conjunction (although, because, since, unless, while).'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t1-concord-rules',
    subjectId: 'english',
    level: 'SHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Concord: Subject-Verb Agreement Rules for WASSCE',
    description: 'The complete set of concord rules — compound subjects, intervening expressions, proximity with either/or and neither/nor, indefinite pronouns, collective nouns, and singular-plural noun forms — drilled with WAEC objective traps.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=NNw22I842Rg',
    youtubeId: 'NNw22I842Rg',
    keyNotes: `• Core principle: the verb agrees with its TRUE subject in number and person.
• Ten tested rules:
  1. Compound subject joined by AND → plural ("Kofi and Ama ARE here"), but a single idea → singular ("Bread and butter IS my snack").
  2. Intervening phrases (as well as, together with, along with, in addition to, besides) are ignored: agree with the first noun ("The driver, together with his mates, IS fine").
  3. EITHER...OR / NEITHER...NOR → Rule of Proximity: agree with the NEARER subject.
  4. EACH, EVERY, EVERYONE, EACH OF → singular verb ("Each of the girls HAS a bag").
  5. Collective nouns (team, government, committee, class) → singular when acting as one unit; plural when members act individually.
  6. Plural-form singulars: news, politics, measles, the billiards → singular ("The news IS on at 7").
  7. Singular-form plurals: data, criteria, phenomena → plural in formal WASSCE usage.
  8. Money/distance/time as a unit → singular ("Five hundred cedis IS not much").
  9. ONE OF THOSE WHO / THE NUMBER vs A NUMBER: "The number of students IS rising" but "A number of students ARE absent."
  10. Subjects joined by AND sharing one article refer to one person: "The poet and novelist IS visiting" (one person) vs "The poet and the novelist ARE visiting" (two people).`,
    detailedNotes: {
      overview: 'Concord (subject-verb agreement) is the single most frequently tested grammar area in WASSCE English Paper 1 Section B. This topic consolidates the ten rules WAEC recycles, each paired with the exact distractor strategy examiners use.',
      introduction: 'Students lose marks not because they lack the basic rule ("plural subject, plural verb") but because WAEC hides the true subject behind intervening phrases, inverted word order, and tricky noun forms. Mastery means being able to strip a sentence to subject + verb before choosing the answer.',
      realWorldContext: 'Heads of state issue joint statements, but Ghanaian media still argue over sentences like "The President, together with his ministers, HAS/HAVE arrived." Every radio talk-show on Accra stations like Citi FM quietly applies concord rules — and WAEC uses exactly these press-release style sentences in its objectives.',
      objectives: [
        'Apply the rule of proximity with either/or and neither/nor constructions',
        'Isolate the true subject when intervening prepositional phrases come between subject and verb',
        'Choose the correct verb for indefinite pronouns such as each, every, nobody, either',
        'Distinguish collective nouns used as a unit versus as individual members',
        'Solve the ten high-frequency concord traps that appear in WASSCE Paper 1'
      ],
      sections: [
        {
          title: 'Compound Subjects and the Single-Idea Exception',
          content: 'Subjects joined by "and" normally take a plural verb: "Ama and Kojo ARE trading." But when two nouns name one idea, one dish, or one person, the verb is singular: "Bread and butter IS my favourite breakie"; "War and peace IS the novel\'s theme." The rarer article test settles identity questions: "The poet and novelist" (one person — one "the") takes a singular verb, while "The poet and the novelist" (two people) takes plural.',
          bulletPoints: [
            'X and Y = plural: "Rice and beans ARE served here."',
            'X and Y as one named thing/idea = singular: "Early to bed and early to rise IS a healthy habit."',
            'One "the" before two nouns = one person (singular verb); two "the"s = two people (plural verb).',
            'Each/every before compound subjects forces singular: "Every boy and girl HAS received the book."'
          ],
          keyTakeaway: 'Decide whether "and" joins two things or names one thing; that choice sets the number.',
          realWorldExample: 'A school canteen board: "Waakye and fish IS available daily" — the combo is sold as one dish, so singular.'
        },
        {
          title: 'Intervening Expressions: Find the True Subject',
          content: 'WAEC\'s favourite trap is to bury a plural noun inside a phrase that sits between subject and verb, tempting you to match the verb to the wrong noun. Ignore everything between the subject and the verb when it is introduced by: as well as, together with, along with, in addition to, besides, including, with, except. "The headmaster, as well as the teachers, IS attending." Also beware inverted openings — "There IS many a student..." — where the delayed subject still controls the verb.',
          bulletPoints: [
            'Cross out the intervening phrase mentally, then set the verb to match what remains.',
            'These phrases are PREPOSITIONS, not conjunctions — they cannot create a compound subject.',
            '"One of the + plural noun" takes a SINGULAR verb: "One of the boys IS sick."',
            '"Only one of those who + plural verb... HE WHO/THAT clause" — watch both layers: "One of the students who PASSSED the exam IS from Tamale."'
          ],
          keyTakeaway: 'The verb agrees with the head noun before the comma, never with the noun inside the inserted phrase.',
          realWorldExample: 'A news ticker reads: "The delegation, including three ministers, ARRIVES in Tema tonight" — arrives, because "the delegation" is the subject.'
        },
        {
          title: 'Proximity Rules: Either/Or, Neither/Nor, and "or"',
          content: 'With paired connectors (either...or, neither...nor, not only...but also, or, nor), the verb agrees with the subject CLOSEST to it. "Neither the minister nor the officers ARE present"; "Neither the officers nor the minister IS present." If both choices are singular, the verb is singular; if both plural, plural; if mixed, obey proximity.',
          bulletPoints: [
            'Rule of Proximity: match the verb to the NEARER subject.',
            '"not only... but also" follows the same proximity behaviour.',
            'Simple "or"/"nor" also use proximity: "Your mother or your brothers ARE paying the fees."',
            'In WAEC objectives, when both subjects are given, place the plural one nearest the verb if you are writing — but in MCQs just read and apply proximity.'
          ],
          keyTakeaway: 'With either/or and neither/nor, the closest subject wins — always check which noun touches the verb.',
          realWorldExample: 'A notice at a community durbar: "Neither the chief nor the opinion leaders WERE satisfied with the draft budget."'
        },
        {
          title: 'Indefinite Pronouns, Collectives, and Tricky Noun Forms',
          content: 'each, every, anyone, everybody, nobody, somebody, nothing, either (alone) are grammatically SINGULAR: "Each of the candidates HAS a number." Collective nouns (team, committee, government, jury, class, staff) are singular when acting as one unit but plural when the sentence stresses individual members acting separately: "The committee SUBMITS its report" vs "The committee ARGUE among themselves." Then the look-alikes: news, politics, measles, athletics = singular; data, criteria, phenomena, media = plural in formal usage; sums of money, distances, periods = singular units: "Ten years IS a long contract."',
          bulletPoints: [
            'Plural-in-form, singular-in-meaning nouns (news, the billiards, Olympics as an event) → singular verb.',
            'Foreign plurals WAEC loves: data/criteria/phenomena + plural verb; but "the data IS" is accepted only when data is treated as one body of figures — for WASSCE, prefer plural.',
            '"A number of" = many → plural; "The number of" = the figure itself → singular.',
            'Titles of books/newspapers are singular even if the title looks plural: "\'The Times\' IS a British newspaper."'
          ],
          keyTakeaway: 'Meaning decides number: unit = singular; separate members or true plurals = plural.',
          realWorldExample: 'The Ghana Anatomic exam bulletin: "The data on candidate performances ARE now published" (plural), yet "Every candidate WHO failed WAS asked to re-register" (singular each/every logic).'
        }
      ],
      commonMistakes: [
        'Matching the verb to a plural noun inside an intervening phrase: choosing "have" in "The manager, with his assistants, ___" instead of "has".',
        'Applying proximity backwards: in "Neither the players nor the coach ___", answering with a plural verb although "the coach" is nearer.',
        'Treating "each of/every one of" as plural because of the following plural noun — the head word is EACH, so singular verb.',
        'Writing "The team are winning 2-0" as one unit action; WAEC prefers singular when the team acts collectively ("The team IS defending deep").',
        'Forgetting that distances, money and time take singular verbs as units: "Five kilometres IS not too far", not "are".'
      ],
      wassceExamTips: [
        'Before choosing an option, physically cross out phrases beginning with as well as, together with, along with, in addition to on your paper — you will then see the true subject naked.',
        'Method marks in Paper 1 Section B (error correction) require the CORRECTED form, not an explanation: rewrite exactly the underlined verb, never the whole sentence, to avoid introducing a new error.',
        'If two options both look plausible, test the sentence with a singular-only pronoun replacement ("it" vs "they"): the verb form that still agrees with the pronoun reveals the number WAEC expects.',
        'Time plan: concord/error-identification items should take under 45 seconds each; the proximity rule and "each of + singular" alone settle roughly half of all concord questions.',
        'For summary and essay (Paper 2), one concord error costs a mechanical-accuracy half-mark each time; proofread specifically for subject-verb pairs separated by commas before submitting.'
      ],
      summaryChecklist: [
        'Can I identify the true subject by removing all intervening expressions?',
        'Can I apply the rule of proximity correctly for either/or and neither/nor?',
        'Can I state whether "the committee" in a given sentence needs singular or plural, and why?',
        'Can I explain why "Each of the girls HAS..." is singular despite "girls"?',
        'Can I handle "the number/a number", news, data, and money/distance/time traps without hesitation?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-concord-1',
        title: 'Beating the Intervening-Phrase Trap (WASSCE Objective)',
        problem: 'Choose the correct option: "The chief, together with his elders, ______ to the durbar grounds every April." A. walk  B. walks  C. have walked  D. are walking',
        stepByStepSolution: [
          'Step 1 (M1): Remove the intervening phrase: "together with his elders" is a prepositional phrase, not a second subject.',
          'Step 2 (M1): Identify the true subject: "The chief" — third person singular.',
          'Step 3 (M1): "every April" signals habitual present tense, so the verb must be simple present.',
          'Step 4 (A1): Singular subject + simple present → "walks" (option B).',
          'Step 5 (A1): Confirm: "The chief walks to the durbar grounds every April." Sentence stands; B is correct.'
        ],
        keyTakeaway: 'Prepositional insertions never create compound subjects; the head noun before the comma controls the verb.'
      },
      {
        id: 'ex-shs1-eng-concord-2',
        title: 'Proximity + Collective Noun Combined',
        problem: 'Complete correctly: (a) "Neither the players nor the captain ______ satisfied." (b) "The jury ______ divided among themselves after long deliberation."',
        stepByStepSolution: [
          'Step 1 (M1): (a) With neither/nor, use the Rule of Proximity: the subject nearest the verb is "the captain" (singular).',
          'Step 2 (A1): (a) Answer: "was satisfied" (singular past).',
          'Step 3 (M1): (b) The collective "jury" here acts as separate individuals ("divided among themselves"), so the plural sense is required.',
          'Step 4 (A1): (b) Answer: "were divided".',
          'Step 5 (A1): Note the contrast: the same noun ("jury") would take singular if it acted as one unit ("The jury gives a unanimous verdict").'
        ],
        keyTakeaway: 'Proximity decides paired subjects; unit-versus-members meaning decides collective nouns.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t1-concord',
      topicId: 'shs1-eng-t1-concord-rules',
      title: 'Concord Mastery Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-cn-1',
          quizId: 'quiz-shs1-eng-t1-concord',
          questionText: 'Each of the Form One students ______ a new dictionary.',
          optionA: 'have',
          optionB: 'are having',
          optionC: 'has',
          optionD: 'were having',
          correctOption: 'C',
          subConcept: 'Indefinite pronouns',
          explanation: '"Each" is the singular subject; "of the Form One students" merely tells us the group. Singular subject → "has".',
          remediationTip: 'Cover "of the ... students" with your pencil. The visible subject "Each" is singular.'
        },
        {
          id: 'q-shs1-eng-cn-2',
          quizId: 'quiz-shs1-eng-t1-concord',
          questionText: 'Neither the prefects nor the house master ______ present at the inspection.',
          optionA: 'was',
          optionB: 'were',
          optionC: 'are been',
          optionD: 'have',
          correctOption: 'A',
          subConcept: 'Rule of proximity',
          explanation: 'With neither/nor the verb agrees with the nearer subject — "the house master" (singular) — so "was".',
          remediationTip: 'Read only from the verb backwards to the FIRST subject you meet: "___ the house master" → singular.'
        },
        {
          id: 'q-shs1-eng-cn-3',
          quizId: 'quiz-shs1-eng-t1-concord',
          questionText: 'The news about the exam timetable ______ on radio yesterday.',
          optionA: 'were announced',
          optionB: 'has announce',
          optionC: 'was announced',
          optionD: 'are announced',
          correctOption: 'C',
          subConcept: 'Plural-form singular nouns',
          explanation: '"News" ends in -s but is singular in meaning, and yesterday requires simple past passive: "was announced".',
          remediationTip: 'Say it to yourself: "The news is on at 7." If "is" fits, the past is "was".'
        },
        {
          id: 'q-shs1-eng-cn-4',
          quizId: 'quiz-shs1-eng-t1-concord',
          questionText: 'A number of traders at Makola ______ complaining about the road conditions.',
          optionA: 'is',
          optionB: 'was',
          optionC: 'are',
          optionD: 'has been',
          correctOption: 'C',
          subConcept: 'a number vs the number',
          explanation: '"A number of" means "many" and takes a plural verb ("are"). Contrast: "The number of traders IS small."',
          remediationTip: 'A = All = plural ("A number of students are..."). THE = the figure = singular ("The number is 50").'
        },
        {
          id: 'q-shs1-eng-cn-5',
          quizId: 'quiz-shs1-eng-t1-concord',
          questionText: 'Ten kilometres ______ too far to walk before dawn.',
          optionA: 'are',
          optionB: 'is',
          optionC: 'have been',
          optionD: 'were',
          correctOption: 'B',
          subConcept: 'Measure as a unit',
          explanation: 'Distances, sums of money and periods of time are treated as a single unit, so they take a singular verb: "Ten kilometres is..."',
          remediationTip: 'Replace with one number phrase: "That distance IS far" — singular confirmed.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t1-oral-vowels',
    subjectId: 'english',
    level: 'SHS 1',
    term: 1,
    orderIndex: 3,
    title: 'Oral English: Monophthongs, Diphthongs and the IPA',
    description: 'The 12 pure vowels and 8 diphthongs of English, long/short contrasts that trip Ghanaian speakers (seat/sit, fool/full), minimal pairs, and reading phonemic transcriptions in WASSCE Oral Paper 3.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=JxfWESnf7EI',
    youtubeId: 'JxfWESnf7EI',
    keyNotes: `• Speech sounds ≠ letters: English has 44 sounds but 26 letters; the IPA (International Phonetic Alphabet) writes sounds, one symbol per sound.
• The 12 MONOPHTHONGS (pure vowels — no glide):
  Long: /i:/ seat  /u:/ fool  /ɔ:/ law  /ɑ:/ cart  /ɜ:/ bird
  Short: /ɪ/ sit  /ʊ/ foot  /ɒ/ pot  /ʌ/ cut  /æ/ cat  /e/ bed  /ə/ (schwa) about
• The 8 DIPHTHONGS (glides between two vowel positions):
  Closing: /eɪ/ pay, /aɪ/ time, /ɔɪ/ boy, /əʊ/ go, /aʊ/ now
  Centring: /ɪə/ ear, /eə/ hair, /ʊə/ tour
• Ghanaian danger pairs: seat/sit (/i:/ vs /ɪ/), fool/full (/u:/ vs /ʊ/), cart/cut, port/pot.
• Schwa /ə/ is the most common vowel in English — it hides in unstressed syllables (teach-er, a-bout, par-li-men-tar-y → schwa four times!).`,
    detailedNotes: {
      overview: 'Oral English (WASSCE Paper 3) tests whether you can hear and represent sounds, not spellings. This topic builds the vowel system: the 12 monophthongs, the 8 diphthongs, and the sound contrasts that Ghanaian interference typically distorts.',
      introduction: 'The golden rule of phonetics: listen to the sound, ignore the letters. "Sea", "see", "CSIE" and "beige" share /i:/; "said" and "chair" hide /e/ and /eə/. Every WAEC vowel question is built on this spelling–sound gap.',
      realWorldContext: 'A guide at Mole National Park announcing "Please board the vehicle to observe the animals" must keep /i:/ in "vehicle" distinct from /ɪ/ in a short sound, or the whole phrase blurs. Radio newsreaders at Joy FM train precisely on these contrasts so that "ship" and "sheep" never collapse in a market report from Makola.',
      objectives: [
        'Produce and identify the 12 monophthongs using IPA symbols',
        'Produce and identify the 8 diphthongs and classify them as closing or centring',
        'Distinguish long/short vowel pairs that Ghanaian speakers commonly merge',
        'Match IPA transcriptions to spoken words and vice versa in exam items',
        'Explain the behaviour of the schwa in unstressed syllables'
      ],
      sections: [
        {
          title: 'Why Sounds, Not Spelling: The IPA System',
          content: 'The International Phonetic Alphabet assigns one symbol to one sound. English vowel spelling is chaotic because one sound can be spelled many ways (/i:/ appears as ea, ee, ie, ei, igh, e, and even the name-letter "CSIE") and one spelling can represent many sounds (the "ow" in "low" /əʊ/ vs "cow" /aʊ/). WAEC Section A oral questions always ask about the SOUND represented by underlined letters — so translate to your mouth first, then to the symbol.',
          bulletPoints: [
            'One bracket = one sound: /eɪ/ contains two sounds; "boat" contains three sounds /bəʊt/.',
            'Long vowels carry the /ː/ mark; the mark signals length plus tenser quality.',
            'Counting exercise: "boat" /bəʊt/ has 3 sounds (/b/, /əʊ/, /t/) although it has 4 letters — count what you HEAR.',
            'Never trust "magic e" silently — "mate" /meɪt/, but "said" /sed/ breaks the pattern.'
          ],
          keyTakeaway: 'Say the word aloud; your ears, not the spelling, give the phonemic answer.',
          realWorldExample: 'Ghana place names defy English spelling habits: "Ho" is /hoʊ/, "Kpando" begins /kp/, "Tema" ends /ma/ — which is exactly why WAEC accepts only sound-based answers.'
        },
        {
          title: 'The Twelve Monophthongs with Long/Short Contrasts',
          content: 'Five pairs contrast a long tense vowel with a short lax one, and five single short vowels complete the set of twelve. Master the pairs that Ghanaian languages do not distinguish: seat /si:t/ vs sit /sɪt/; full /fʊl/ vs fool /fu:l/; cart /kɑ:t/ vs cut /kʌt/; port /pɔ:t/ vs pot /pɒt/; birth /bɜ:t/ vs bird... (both /ɜ:/ — instead pair bird vs a short schwa word like "better").',
          bulletPoints: [
            '/i:/ (sheep, field, CI) vs /ɪ/ (ship, fish, busy) — length AND tongue position differ.',
            '/u:/ (food, blue, through) vs /ʊ/ (wood, could, put) — "could" and "good" are /ʊ/ even though spelled oo.',
            '/ɔ:/ (door, all, caught) vs /ɒ/ (dog, hot, want) — /ɒ/ is barely heard in many Ghanaian accents; practise a short, open back sound.',
            '/ɑ:/ (father, class, dance) vs /ʌ/ (but, love, blood) — "blood" is /blʌd/, a notorious spelling betrayal.',
            '/ɜ:/ (nurse, work, early) vs /ə/ (the unstressed vowel in teacher, problem, second) — /ə/ NEVER appears in a stressed syllable.',
            'Remaining short vowels: /æ/ (cat, hand) and /e/ (bed, said, many).'
          ],
          keyTakeaway: 'Long/short pairs change word meaning — merging them changes what you say.',
          realWorldExample: 'A student telling a story: "I sat on the seat and felt full" produced laughs because /ɪ/ and /i:/, /ʊ/ and /u:/ were swapped — the minimal-pair contrast did real communicative work.'
        },
        {
          title: 'The Eight Diphthongs: Closing and Centring',
          content: 'A diphthong glides from one vowel quality to another within one syllable. The five CLOSING diphthongs end on a more central/lax position: /eɪ/ (day, weight, 8), /aɪ/ (five, sky, dye), /ɔɪ/ (boy, coin, voice), /əʊ/ (go, boat, toe), /aʊ/ (now, cow, ounce). The three CENTRING diphthongs glide toward schwa and link to a following vowel: /ɪə/ (near, here, CI-beer), /eə/ (hair, there, chair), /ʊə/ (tour, sure-ish cures, pure).',
          bulletPoints: [
            'Ghanaian trap 1: /eɪ/ pronounced /aɪ/ ("say" = /saɪ/) — the first element of /eɪ/ starts mid-front, keep it flat.',
            'Ghanaian trap 2: /əʊ/ pronounced /ɔ/ (monophthong) — "go" must glide: g-əʊ.',
            'Diphthongs count as ONE sound per symbol pair, and one syllable — "hour" = /aʊə/, two diphthong-like elements but one syllable.',
            'Spelling clues: igh/ye = /aɪ/ (high, dye); oe/oa/ow = /əʊ/ (shoe-type check: toe, boat, show); ou/ow = /aʊ/ (out, cow).'
          ],
          keyTakeaway: 'Hear the glide: a diphthong moves; a monophthong holds steady.',
          realWorldExample: 'Ghanaian English often says "no problem" with a flat /ɔ/: WASSCE expects /nəʊ ˈprɒbləm/ with the /əʊ/ glide intact.'
        },
        {
          title: 'Minimal Pairs and the Ear Test',
          content: 'A minimal pair differs in exactly ONE sound and changes meaning: ship/sheep, full/fool, pan/pen, coo/cow, late/light. WAEC Oral Paper 3 Section A items: "choose the word whose underlined part is pronounced differently" — solve by pronouncing all four options aloud in your head, converting to sounds, and finding the odd vowel. Section B asks you to stress; Section C deals with rhythm and intonation (covered in SHS 3, but vowel control is prerequisite).',
          bulletPoints: [
            'Drill set 1 (/i:/ vs /ɪ/): eat/it, leave/live, seed/sid, key/ki (avoid: all short).',
            'Drill set 2 (/ʊ/ vs /u:/): book/bake not pair; book/took/look/full/pull are the /ʊ/ club WAEC loves.',
            'Drill set 3 (/e/): dead/head/bread/said/again(any-)/friend — six spellings, one /e/.',
            'Odd-one-out tactic: say each option twice; if your mouth makes the same vowel twice, it is not the answer.'
          ],
          keyTakeaway: 'Train your ear on minimal pairs; objective vowel questions become automatic.',
          realWorldExample: 'A teacher writes on the board: "The cheap sheep sleeps." Four /i:/ sounds in one sentence, zero /ɪ/ — a perfect Tongue-twister style drill used in SHS oral classes nationwide.'
        }
      ],
      commonMistakes: [
        'Answering by spelling instead of sound: choosing "meat" as containing /e/ because of "ea" — it is actually /i:/ like "meet".',
        'Merger errors in production: saying /ʊ/ for /u:/ ("good" and "food" rhyming) — WAEC oral expects the contrast.',
        'Treating /əʊ/ as the pure vowel /ɔ/ when reading aloud, losing the glide that marks standard pronunciation.',
        'Confusing the two sounds inside a diphthong as two syllables — "time" is ONE syllable /taɪm/ with two vowel elements.',
        'Pronouncing the final -ed of regular past tense as a full extra syllable everywhere; after /t/ or /d/ it is /ɪd/ ("wanted"), after voiceless sounds it is /t/ ("walked"), otherwise /d/ ("played").'
      ],
      wassceExamTips: [
        'In Oral Paper 3 Section A, always convert the underlined letters into sound BEFORE looking at the options; the trap option usually matches the spelling, not the sound.',
        'Practise the classic WAEC "ea" set: ea = /i:/ (teach, clean), /e/ (dead, head, bread, said, weather), /ɪə/ (easy, idea) — three groups cover almost every past question on this letter pair.',
        'For transcription items, write symbols inside slashes / / and a single diphthong inside one pair — examiners deduct for brackets and spacing mistakes, not just wrong sounds.',
        'Long-vowel words WAEC repeats: seat, field, moon, through, door, cart, nurse, bird; short-vowel rivals: sit, fish, full, foot, pot, cut, about (schwa). Memorise them as a paired deck.',
        'During the oral recording/passage-reading sections, the vowel quality carries half your "pronunciation" score; over-articulate long vowels and do not flatten diphthongs — clarity beats speed.'
      ],
      summaryChecklist: [
        'Can I recite all 12 monophthongs with one example word each?',
        'Can I classify the 8 diphthongs into closing and centring groups?',
        'Can I produce and hear the minimal pairs ship/sheep, full/fool, cart/cut?',
        'Can I transcribe common "ea" words into the right vowel symbol?',
        'Can I explain why the schwa /ə/ never appears in a stressed syllable?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-vowel-1',
        title: 'Odd-Vowel-Out Question (WASSCE Oral Section A)',
        problem: 'Choose the word whose underlined letter(s) contain a different vowel sound from the others: A. m<u>ea</u>t  B. l<u>ea</u>f  C. br<u>ea</u>d  D. t<u>ea</u>',
        stepByStepSolution: [
          'Step 1 (M1): Convert each "ea" to a phoneme — never trust the spelling: meat /i:/, leaf /i:/, bread /e/, tea /i:/.',
          'Step 2 (M1): Compare the four sounds: three carry the long /i:/, one carries the short /e/.',
          'Step 3 (A1): The odd one out is C (bread) /bred/.',
          'Step 4 (A1): Verification set: "dead, head, bread, said, weather, instead, friend" — the famous /e/ club WAEC uses to punish spelling readers.',
          'Step 5 (B1): Also remember the third "ea" group: easy, idea, area and recent carry the centring diphthong /ɪə/.'
        ],
        keyTakeaway: 'The "ea" digraph is the single most abused spelling in oral exams: /i:/ in most words, /e/ in the dead-head-bread-said club, /ɪə/ in easy/idea.'
      },
      {
        id: 'ex-shs1-eng-vowel-2',
        title: 'Counting Sounds and Identifying Diphthongs',
        problem: 'How many vowel SOUND(S) and how many SYLLABLES are in the word "boy"? Give its IPA transcription.',
        stepByStepSolution: [
          'Step 1 (M1): Say the word slowly: b - oy. The tongue GLIDES from an /ɔ/ position toward /ɪ/ — that single glide is the diphthong /ɔɪ/.',
          'Step 2 (M1): A diphthong is one continuous vowel movement, so it counts as ONE vowel sound and carries the syllable.',
          'Step 3 (A1): Transcribe: boy = /bɔɪ/ — one consonant phoneme /b/ + the diphthong /ɔɪ/; school counting gives 3 sounds: /b/, /ɔ/, /ɪ/, but ONE of them is a vowel nucleus.',
          'Step 4 (A1): Syllables = 1, because there is exactly one vowel beat.',
          'Step 5 (B1): Contrast: "boil" /bɔɪl/ is still one syllable — the added /l/ is a consonant, not a new vowel beat.'
        ],
        keyTakeaway: 'A diphthong = one glide = one vowel sound = one syllable, even though the ear hears two positions.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t1-vowels',
      topicId: 'shs1-eng-t1-oral-vowels',
      title: 'Vowel Sounds Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-vw-1',
          quizId: 'quiz-shs1-eng-t1-vowels',
          questionText: 'Which pair of words are a MINIMAL set differing only in the vowel /i:/ versus /ɪ/?',
          optionA: 'pool / pull',
          optionB: 'feet / fit',
          optionC: 'call / col',
          optionD: 'paid / pet',
          correctOption: 'B',
          subConcept: 'Minimal pairs /i:/ vs /ɪ/',
          explanation: 'feet /fi:t/ vs fit /fɪt/ differ only in the first vowel sound. Option A tests /u:/ vs /ʊ/; option D /eɪ/ vs /e/.',
          remediationTip: 'Say both words aloud holding the first one long and tense (feet) versus short and relaxed (fit) — minimal pairs always differ in exactly one place.'
        },
        {
          id: 'q-shs1-eng-vw-2',
          quizId: 'quiz-shs1-eng-t1-vowels',
          questionText: 'The underlined letters in which word contain the diphthong /aʊ/?',
          optionA: 'low',
          optionB: 'know',
          optionC: 'ounce',
          optionD: 'course',
          correctOption: 'C',
          subConcept: 'Diphthong identification',
          explanation: 'ounce = /aʊns/. "low" and "know" carry /əʊ/, "course" carries /ɔ:/.',
          remediationTip: 'ou and ow before a consonant/silence usually give /aʊ/ (out, cow, brown) — but test your mouth, not the rule.'
        },
        {
          id: 'q-shs1-eng-vw-3',
          quizId: 'quiz-shs1-eng-t1-vowels',
          questionText: 'Which word\'s vowel is the SCHWA /ə/?',
          optionA: 'bird',
          optionB: 'teacher (unstressed second syllable)',
          optionC: 'bed',
          optionD: 'far',
          correctOption: 'B',
          subConcept: 'Schwa distribution',
          explanation: 'tea-CHER ends /ə/ because it is unstressed. "bird" holds /ɜ:/ (stressed), "bed" /e/, "far" /ɑ:/.',
          remediationTip: 'Schwa lives ONLY in unstressed syllables — clap the word; the soft unstressed clap is /ə/.'
        },
        {
          id: 'q-shs1-eng-vw-4',
          quizId: 'quiz-shs1-eng-t1-vowels',
          questionText: 'Choose the word whose underlined part sounds different: A. food  B. good  C. moon  D. through',
          optionA: 'food',
          optionB: 'good',
          optionC: 'moon',
          optionD: 'through',
          correctOption: 'B',
          subConcept: 'oo split /u:/ vs /ʊ/',
          explanation: '"good" is /gʊd/ (short), while food /fu:d/, moon /mu:n/, through /θru:/ carry long /u:/.',
          remediationTip: 'The /ʊ/ club to memorise: good, could, should, would, book, look, took, foot, wood, bull.'
        },
        {
          id: 'q-shs1-eng-vw-5',
          quizId: 'quiz-shs1-eng-t1-vowels',
          questionText: 'How many vowel sounds does the word "idea" /aɪˈdɪə/ contain?',
          optionA: 'Two',
          optionB: 'Three',
          optionC: 'Four',
          optionD: 'One',
          correctOption: 'B',
          subConcept: 'Counting vowel sounds',
          explanation: 'i-de-a gives /aɪ/ + /ɪ/ + /ə/ — three vowel sounds across two syllables, the last a centring diphthong-like sequence in careful speech.',
          remediationTip: 'Say it slowly, tapping each vowel beat you HEAR (not each letter): ɪ - ə, plus the first glide aɪ = 3.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t1-sentence-elements',
    subjectId: 'english',
    level: 'SHS 1',
    term: 1,
    orderIndex: 4,
    title: 'Sentence Elements and Phrases: SV, SVO, SVC, SVOO, SVOC',
    description: 'The five basic sentence patterns built from Subject, Verb, Object, Complement and Adverbial; recognising noun, verb, prepositional, adjectival and adverbial phrases, and using phrase substitution tests.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=-a80_xFsh9w',
    youtubeId: '-a80_xFsh9w',
    keyNotes: `• The five elements:
  S (Subject) – who/what the sentence is about.
  V (Verb) – the verb group.
  O (Object) – receiver of the action (direct O) or beneficiary (indirect O).
  C (Complement) – completes a linking verb (SVC) or object (SVOC).
  A (Adverbial) – optional time/place/manner info.
• The five basic patterns:
  1. SV: The baby cried.
  2. SVO: Ama bought salt.
  3. SVC: The mangoes are sweet.
  4. SVOO: Kofi gave me money. (IO before DO)
  5. SVOC: The class elected Kwame monitor. / We found the exam easy.
• Phrase = word group WITHOUT its own verb; Clause = word group WITH subject + verb.
• Phrase types by head: NP (the tall headmaster), VP (has been teaching), PP (in the classroom), AdjP (very proud), AdvP (quite slowly).`,
    detailedNotes: {
      overview: 'Sentences are not random strings; they follow five basic patterns built around the verb. Being able to label Subject, Verb, Object, Complement and Adverbial — and to expand them into phrases — is the grammatical spine that WASSCE comprehension questions ("grammatical name and function") assume you own.',
      introduction: 'Start every analysis by finding the verb group, then ask of it: does it need a something/someone (object), a completion (complement), or can it stand alone? The answers reveal the pattern.',
      realWorldContext: 'A community announcement at a Kumasi durbar square: "The chief (S) has declared (V) this Saturday a public holiday (O + C)." Everyone instantly understands because the sentence follows a pattern the listeners already know instinctively — pattern analysis simply makes that instinct visible.',
      objectives: [
        'Identify the five basic sentence patterns (SV, SVO, SVC, SVOO, SVOC) in extended text',
        'Distinguish direct from indirect objects and objects from complements',
        'Label subject, verb, object, complement and adverbial in any given sentence',
        'Identify the five main phrase types by their head word',
        'Apply substitution and movement tests to prove phrase boundaries in objective questions'
      ],
      sections: [
        {
          title: 'The Five Elements Around the Verb',
          content: 'The verb dictates which elements must appear. Intransitive verbs stand alone (SV). Transitive verbs demand a direct object (SVO). Ditransitive verbs like give, send, offer, teach, buy allow two objects — indirect before direct: "Ama sent KOJO (IO) a LETTER (DO)" — or can switch with a preposition: "sent a letter TO Kojo." Linking verbs take complements that refer back to the subject (SVC) or object (SVOC): "We call him BABU" (him = babu). Adverbials are the only freely optional element.',
          bulletPoints: [
            'Test an OBJECT: it can become the subject of a passive ("Salt was bought by Ama").',
            'Test a COMPLEMENT after a linking verb: replace it with "it/they" referring to the SAME thing ("The mangoes are sweet → they are sweet" keeps identity).',
            'Test an ADVERBIAL: it can move to the front or be deleted ("Yesterday, we left. / We left.").',
            'Two objects order: person first, thing second (IO + DO) with no preposition.'
          ],
          keyTakeaway: 'Find the verb, ask what it requires: object (receiver), complement (completion), adverbial (optional circumstance).',
          realWorldExample: 'A mobile money notice: "You (S) sent (V) 200 cedis (DO) to Esi (AO/PP-adverbial)." The amount can be passived ("200 cedis were sent"), proving object status.'
        },
        {
          title: 'Object versus Complement: The Identity Test',
          content: 'WAEC loves to underline a word at the end of a sentence and ask its function. If the final element RESTATES or DESCRIBES the subject, it is a subject complement: "Ama is the captain" (Ama = captain). If it is a DIFFERENT thing receiving the action, it is an object: "Ama bought a captain\'s armband." In SVOC the complement restates the OBJECT: "They elected Ama captain" (Ama = captain, but Ama is object — hence object complement). Note "They made Ama a captain" vs "They made a captain for Ama": only the first is SVOC.',
          bulletPoints: [
            'Linking verbs taking SVC: be, become, seem, look, smell, taste, sound, feel, appear, get (become sense).',
            'Verbs taking SVOC: elect, appoint, make, call, name, consider, find, think, keep ("The rain kept us inside").',
            'Identity check: insert "=" between the relevant nouns/adjectives — if true, it is a complement.',
            '"This made him happy": him = object, happy = object complement (him = happy).'
          ],
          keyTakeaway: 'Complement = re-describes; object = receives. Two roles can sit side by side in SVOC.',
          realWorldExample: 'School speech day: "The principal declared the girls BESTES" — declared (linking-use verb), the girls (O), bestes (OC: the girls = bestes).'
        },
        {
          title: 'Phrases: Head Word Determines the Name',
          content: 'A phrase is a word group built around one head word and behaving as a single unit — it never contains its own finite verb. Name a phrase by its head: "the very tall headmaster from Ejisu" is a NOUN PHRASE because its head is the noun "headmaster"; "has been reading" is a VERB PHRASE; "with great care" is a PREPOSITIONAL PHRASE; "extremely proud" an ADJECTIVAL PHRASE; "very quietly indeed" an ADVERBIAL PHRASE. Whole phrases then plug into sentence patterns as a single slot: the noun phrase can fill S or O wherever a bare noun could.',
          bulletPoints: [
            'Noun Phrase (NP): (Det) + (Adj) + NOUN(head) + (post-modifiers: PP or relative clause reduced) — "three ripe pineapples from Ejisu".',
            'Verb Phrase (VP): all auxiliaries + main verb as ONE unit — "will have been marking".',
            'Prepositional Phrase (PP): preposition + NP — functions as adjective ("the girl IN BLUE smiled") or adverbial ("she ran TO CHAPE)".',
            'AdjP/AdvP: degree words + head adjective/adverb — "quite beautiful", "almost never".',
            'Substitution test: replace the whole group with a single pronoun/noun ("The tall boy from Ejisu" → "he"); if one word can replace it, it is one phrase.'
          ],
          keyTakeaway: 'The head word names the phrase; the whole phrase fills one sentence slot.',
          realWorldExample: 'A textbook list: "the old wooden desk near the window" — one NP despite five words, head = "desk"; it answers "WHAT?" as a single unit.'
        },
        {
          title: 'Sentence, Phrase, Clause: The Three-Way Test',
          content: 'Before SHS 2 clause analysis, seal the three-way boundary. Phrase: no verb of its own ("after lunch"). Clause: has subject + verb ("after lunch finished") — but it may be unable to stand alone. Sentence: a complete thought ending in full stop/?/! — can be one word ("Stop!"). WAEC comprehension asks: "What is the grammatical name of the underlined expression?" Answer format: [type of clause/phrase] of the [pattern], and "What is its function?" — the SLOT it fills (subject, direct object, adverbial of time, etc.).',
          bulletPoints: [
            'One clause = one verb group. Count verb groups to count clauses.',
            'Non-finite verb groups (to-infinitives, -ing forms without auxiliaries) still belong to phrases: "To study hard is wise" — the whole infinitive phrase is the SUBJECT.',
            '"I know a man who can drive" — two clauses (know, can drive) plus the NP "a man who..."; the who-part is a clause inside a phrase.',
            'Function answers must quote a specific word: "It modifies the verb \'ran\'" beats "It is an adverbial."'
          ],
          keyTakeaway: 'Finite verb = clause; verb-less unit = phrase; complete message = sentence.',
          realWorldExample: 'A warning sign on the Accra-Cape Coast road: "Drive carefully, for accidents happen at dawn." — two clauses joined by "for", each with its own finite verb group.'
        }
      ],
      commonMistakes: [
        'Labelling "Ama is clever" as SVO — clever is a complement (Ama = clever), not an object; objects never restate the subject.',
        'Calling a prepositional phrase an adverb just because it has adverbial meaning; the grammatical NAME is prepositional phrase, the FUNCTION is adverbial — give the examiner both, correctly separated.',
        'Splitting a verb phrase: marking "is" as the verb and "reading" as something else; the VP "is reading" is one V slot.',
        'Placing the indirect object after the direct: "gave the book the boy" is wrong; persons go first in the bare SVOO pattern.',
        'Counting a non-finite "-ing/to" verb as its own clause — "After finishing the exam" is a phrase; "After they finished the exam" is a clause.'
      ],
      wassceExamTips: [
        'For "grammatical name and function" items, answer in two moves: NAME the unit (noun phrase / adverbial clause), then FUNCTION (object of verb X / modifies verb Y) — examiners award separate marks for each half.',
        'Delete-then-compare trick: if removing the underlined unit leaves a grammatically complete core, it is an adverbial; if the sentence collapses ("The principal declared the girls ___"), the unit is an object/complement.',
        'In error-correction objectives, check IO/DO order and preposition presence: "He gifted a pen to me" is fine, but "He gifted a pen me" is not — such patterns are deliberate distractors.',
        'When asked to identify the SIMPLE predicate, give the whole verb group (V + O/C/A that belong to the verb core); when asked the COMPLETE predicate, give everything after the subject.',
        'Practise with one sentence per day from your other subjects\' textbooks — comprehension passages are mined from science and social texts, and the verb groups inside them are long (e.g., "has not been improved"); train on them.'
      ],
      summaryChecklist: [
        'Can I label S, V, O, IO, DO, C and A in any five given sentences?',
        'Can I tell an object from a complement using the identity ("=") test?',
        'Can I name the five phrase types by their head word?',
        'Can I prove a word group is one phrase by substituting a single pronoun for it?',
        'Can I state the grammatical name AND function of an underlined expression in WAEC format?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-se-1',
        title: 'Pattern Identification: SVOO versus SVOC',
        problem: 'State the pattern of each sentence: (a) "The teacher gave the class a task." (b) "The teacher called the class diligent."',
        stepByStepSolution: [
          'Step 1 (M1): (a) Verb "gave" takes two different things: the class (recipient) + a task (thing given). Test: class ≠ task.',
          'Step 2 (A1): (a) Two objects with recipient first = SVOO (S=The teacher, V=gave, IO=the class, DO=a task).',
          'Step 3 (M1): (b) "called" + the class + diligent: test "the class = diligent"? The adjective describes the class, so diligent completes the object rather than receiving the action.',
          'Step 4 (A1): (b) = SVOC (O = the class, OC = diligent).',
          'Step 5 (B1): Rewrite check: (a) "The teacher gave a task TO the class" keeps meaning (preposition swap works only for SVOO verbs); (b) cannot be swapped — you cannot say "called diligent to the class".'
        ],
        keyTakeaway: 'SVOO has two replaceable, unequal objects; SVOC ends with a re-description of its object.'
      },
      {
        id: 'ex-shs1-eng-se-2',
        title: 'Naming and Function: WAEC Comprehension Format',
        problem: 'Give the grammatical name and function of the underlined expression: "The students <u>who won the science quiz</u> received awards in Kumasi."',
        stepByStepSolution: [
          'Step 1 (M1): Count verbs inside the underlined unit: "won" is finite and has a subject "who" — so the unit is a CLAUSE, not a phrase.',
          'Step 2 (M1): It is introduced by the relative pronoun "who" and describes the noun "students".',
          'Step 3 (A1): Grammatical NAME: relative clause (adjectival clause).',
          'Step 4 (A1): FUNCTION: it modifies/qualifies the noun "the students" (specifically the head noun "students").',
          'Step 5 (B1): Trap check: "in Kumasi" is NOT the underlined item — a careless student analyses the adverbial instead; underline only what WAEC underlines.'
        ],
        keyTakeaway: 'Relative clause = name; modifies the noun immediately before it = function — write both in the answer.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t1-sentence-elements',
      topicId: 'shs1-eng-t1-sentence-elements',
      title: 'Sentence Elements & Phrases Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-se-1',
          quizId: 'quiz-shs1-eng-t1-sentence-elements',
          questionText: 'What is the pattern of: "The cocoa smells rich."',
          optionA: 'SVO',
          optionB: 'SVC',
          optionC: 'SV',
          optionD: 'SVOC',
          correctOption: 'B',
          subConcept: 'Linking verb + complement',
          explanation: '"smells" is a linking verb and "rich" describes the subject cocoa (cocoa = rich) — subject complement, so SVC.',
          remediationTip: 'Replace "smells" with "is": "The cocoa is rich" still true → linking verb → complement, never object.'
        },
        {
          id: 'q-shs1-eng-se-2',
          quizId: 'quiz-shs1-eng-t1-sentence-elements',
          questionText: 'In "Ama bought her mother a gift", the underlined "her mother" is the:',
          optionA: 'Direct object',
          optionB: 'Indirect object',
          optionC: 'Object complement',
          optionD: 'Adverbial',
          correctOption: 'B',
          subConcept: 'Two-object order',
          explanation: '"a gift" is what was bought (DO); "her mother" is the beneficiary placed before it — the indirect object (bought a gift FOR her mother).',
          remediationTip: 'The THING bought/sent/made is always the direct object; the PERSON before it is indirect.'
        },
        {
          id: 'q-shs1-eng-se-3',
          quizId: 'quiz-shs1-eng-t1-sentence-elements',
          questionText: 'The underlined expression is what PHRASE type? "The girl <u>with the red headtie</u> waved."',
          optionA: 'Noun phrase',
          optionB: 'Adverbial phrase',
          optionC: 'Adjectival prepositional phrase',
          optionD: 'Verb phrase',
          correctOption: 'C',
          subConcept: 'Phrase naming by head + function',
          explanation: 'Its head structure is preposition + NP = prepositional phrase; its function is to qualify "girl", so it acts adjectivally — "adjectival prepositional phrase" earns both marks.',
          remediationTip: 'A PP sitting right after a noun usually modifies that noun (adjectival); after a verb it usually modifies the verb (adverbial).'
        },
        {
          id: 'q-shs1-eng-se-4',
          quizId: 'quiz-shs1-eng-t1-sentence-elements',
          questionText: 'Which sentence is SVOC?',
          optionA: 'The rain made the roads slippery.',
          optionB: 'The rain damaged the roads.',
          optionC: 'The rain fell heavily.',
          optionD: 'The rain made a loud sound on the tin roof.',
          correctOption: 'A',
          subConcept: 'Object complement',
          explanation: 'roads = slippery (identity) → complement of the object. B is SVO, C is SV+A, D is SVO with a different "made" (created).',
          remediationTip: 'Put "=" between the two final elements; if roads = slippery, the last word is a complement.'
        },
        {
          id: 'q-shs1-eng-se-5',
          quizId: 'quiz-shs1-eng-t1-sentence-elements',
          questionText: 'The expression "after finishing the exam" is a phrase, NOT a clause, because:',
          optionA: 'It begins with a preposition',
          optionB: 'It has no finite verb with its own subject',
          optionC: 'It is too short',
          optionD: 'It gives time information',
          correctOption: 'B',
          subConcept: 'Phrase vs clause test',
          explanation: 'A clause needs a finite verb and subject. "finishing" is non-finite (-ing participle), so no clause — despite carrying time meaning.',
          remediationTip: 'Compare: "after they finished the exam" = clause (they + finite finished). The -ing version is its phrase twin.'
        }
      ]
    }
  },

  {
    id: 'shs1-eng-t1-nouns-articles-quantifiers',
    subjectId: 'english',
    level: 'SHS 1',
    term: 1,
    orderIndex: 5,
    title: 'Nouns: Countability, Plurals, Articles and Quantifiers',
    description: 'Countable versus uncountable nouns, regular and irregular plural forms, the rules for a/an/the and the zero article, and quantifiers such as much/many, few/a few, little/a little.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=xiju4GLSH3U',
    youtubeId: 'xiju4GLSH3U',
    keyNotes: `• Countability test: can you put a number before it? "three rice" fails — rice is uncountable; "three grains of rice" works (unitising phrase needed).
• Typical WAEC uncountables: luggage, furniture, equipment, information, advice, knowledge, money, water, blood, furniture, traffic, machinery.
• Plural traps:
  - Irregular: man→men, tooth→teeth, child→children, foot→feet, mouse→mice, ox→oxen.
  - Unchanged: sheep, deer, fish, series, species.
  - Foreign: crisis→crises, analysis→analyses, phenomenon→phenomena, datum→data.
• A vs AN depends on SOUND, not spelling: an hour, an honest man, a university, a one-learner class, an X-ray.
• Quantifier pairs: many/much; few/a few (people), little/a little (uncountable); "The little water left" = hardly any (negative); "A little water left" = some (positive).`,
    detailedNotes: {
      overview: 'Nouns control what follows them: the article before them, the quantifier used with them, and the verb they take. WAEC error-correction and cloze items concentrate on exactly these three handshake points between nouns and their modifiers.',
      introduction: 'Ghanaian speakers often treat English mass nouns as countable because the local-language equivalents behave differently — hence exam-killer errors like "many informations" and "furnitures". The fix is a mental unit test: try placing "one/two" in front of the noun.',
      realWorldContext: 'Read any ECOWAS trade document or Ghana Export Promotion Authority leaflet: "over 500 tonnes of cocoa beans", "three varieties of shea butter", "a range of equipment" — professional writing always unitises uncountables (tonnes, varieties, items of) instead of counting them directly.',
      objectives: [
        'Sort common nouns into countable and uncountable groups without hesitation',
        'Form regular, irregular, unchanged and foreign plurals correctly',
        'Choose a/an/the or zero article using the sound test and the familiarity rule',
        'Select the correct quantifier (much/many/few/little/some/any) for a given noun',
        'Rewrite uncountable expressions with unit words (a piece of, a grain of, an item of)'
      ],
      sections: [
        {
          title: 'Countable and Uncountable Nouns',
          content: 'Countable nouns name items separable into ones: chair/chairs, idea/ideas. Uncountable (mass) nouns name substances, abstractions and aggregates you cannot count: rice, sand, information, luggage, money, advice, furniture, equipment, traffic, knowledge. Uncountables take no indefinite article, have no plural form, and take singular verbs: "The furniture IS new." To count them, borrow a unit: a grain of rice, a loaf of bread, a piece of advice, an item of furniture, a sum of money.',
          bulletPoints: [
            'Never write *informations, *advices, *furnitures, *equipments, *luggages — WAEC lists these exact plurals as error items.',
            'Some nouns are countable in one sense, uncountable in another: "two coffees" (two cups) vs "coffee is expensive" (the substance).',
            'Ghanaian interference zone: "rubber/money/chalk" are mass; "chalks" is wrong unless referring to sticks (then "pieces of chalk").',
            'Unit words must themselves be counted: "three glasses of water", NOT *three waters of glass.'
          ],
          keyTakeaway: 'If "one ___ / two ___s" sounds wrong, it is uncountable — unitise it or leave it alone.',
          realWorldExample: 'A MoMo agent advertises: "10 transactions per day" (countable) but "heavy traffic on the network" (uncountable) — both appear in one sentence without error.'
        },
        {
          title: 'Building Plurals: Regular, Irregular, Unchanged and Foreign',
          content: 'Regular plurals add -s, or -es after sibilants (boxes, dishes); consonant + y changes to -ies (babies), vowel + y just adds -s (toys); f/fe often become -ves (wife→wives, knife→knives, but roof→roofs, belief→beliefs). Irregular internal-vowel plurals (men, teeth, geese), unchanged plurals (sheep, deer, fish, aircraft, species, series), and foreign plurals (-us→-i: cactus→cacti/fungus→fungi; -is→-es: crisis→crises; -um→-a: datum→data) are the WAEC shortlist.',
          bulletPoints: [
            'Two fish usually = fish; two different species = fishes (science register).',
            'Compound nouns pluralise the head word: mothers-in-law, passers-by, editors-in-chief.',
            'Letters, numbers and quoted words take apostrophe-less plurals in modern style: three Cs, the 1990s — follow the question\'s style if older.',
            'Nouns like scissors, trousers, pants, spectacles, pliers, goods are ALWAYS plural: "These scissors ARE blunt."'
          ],
          keyTakeaway: 'Know the head word in compounds and memorise the WAEC foreign-plural club (crises, data, criteria, phenomena).',
          realWorldExample: 'A hospital lab report from Korle Bu: "The blood TESTS (plural) showed... The DATA obtained WERE conclusive." — headline WAEC plurals at work.'
        },
        {
          title: 'Articles: a, an, the and Zero',
          content: 'A before consonant SOUNDS, AN before vowel sounds: a book, an egg, an hour (h silent), a university (y sound), a European, an MLA (starts "em"). THE marks something known to reader and writer: second mention ("A girl and a boy entered. THE girl sat down."), unique things (the sun, the North), superlatives and ordinals (the tallest, the first). Zero article for plural/generic countables and all uncountables used generally ("Dogs bark. Water is life."), proper names of single items (Kumasi, not the Kumasi), meals, languages, and subjects ("She studies French"). But geography takes the: rivers (the Volta), mountain RANGES (the Atsimas), deserts, groups of islands, and countries with plural/common-noun names (the Gambia, the Philippines) — vs Ghana alone, no article.',
          bulletPoints: [
            '"Man is mortal" (generic singular) vs "The man is waiting" (specific).',
            '"I play the piano" (instrument with the) but "I play football" (sports: zero).',
            '"He went to school" (as a student) vs "He went to the school" (the building) — school/church/prison/hospital/hospital convention.',
            'Occupational/institutional the: "the President", "the Ghana Education Service"; names take no article: "Kwame, not the Kwame".'
          ],
          keyTakeaway: 'Sound decides a vs an; shared knowledge decides the; genericness decides zero.',
          realWorldExample: 'A travel brochure: "Fly from Accra to Tamale over the Akwapim hills, then visit the Volta Lake and Mole National Park." — three article patterns in one sentence.'
        },
        {
          title: 'Quantifiers and the Few/Little Precision',
          content: 'MANY + plural countables; MUCH + uncountables; a lot of/much-many switch informally. FEW (= hardly any, negative) vs A FEW (= some, positive) with countables; LITTLE vs A LITTLE with uncountables: "Few traders came" (empty hall) vs "A few traders came" (some business). SOME in positive statements and offers/requests; ANY in negatives and questions. Enough/plenty; both/either/neither for two; all/none for three-plus. No/any + noun replaces not any: "There is no time" = "There isn\'t any time."',
          bulletPoints: [
            'WAEC favourite: "I have (little/a little) time" — pick little to mean nearly none, a little to mean some.',
            '"Much water, many bottles"; "less sugar, fewer bottles" (fewer with countables — a classic error item).',
            'Each/every are singular heads: "Each of the rooms HAS a window."',
            '"The number of students is large" vs "A number of students are absent" — quantifier + concord crossover.'
          ],
          keyTakeaway: 'Quantifiers expose countability: if the noun accepts many/few, it is countable; much/little mark the uncountable.',
          realWorldExample: 'A trotro mate calls out: "Few seats left! Some space for two passengers!" — few (countable seats), some (uncountable space).'
        }
      ],
      commonMistakes: [
        'Pluralising uncountables: writing "informations", "luggages", "equipments" or "sheeps", "deers".',
        'Choosing article by spelling instead of sound: "a hour", "an university".',
        'Using "much" with plural countables or "many" with uncountables: "much cars", "many money".',
        'Confusing few/a few and little/a little, changing the intended meaning from "some" to "almost none".',
        'Adding "the" before single names, meals, languages and general subjects: "the Ghana", "I ate the breakfast", "she loves the English".'
      ],
      wassceExamTips: [
        'In article cloze items, first say the word aloud: only the first SOUND matters — silent h takes "an" (an honour), u pronounced /ju:/ takes "a" (a union).',
        'Error-correction: when you see a plural -s on a mass noun (advices, machineries), the fix is usually to delete the -s or add "pieces of" — never both.',
        'For "fewer vs less", ask: can I count it (1, 2, 3)? Countable = fewer, uncountable = less: "fewer errors, less ink".',
        'Memorise WAEC\'s ten most-tested uncountables: information, advice, luggage, furniture, equipment, knowledge, money, water, traffic, news — all singular, no plural form.',
        'Compare structure: "Kumasi is bigger than ACCRA" — no article before city names; but "The Accra of 1960 was smaller than the one today" — the particularises a common-noun-like usage.'
      ],
      summaryChecklist: [
        'Can I sort thirty mixed nouns into countable/uncountable by the number test?',
        'Can I form the plurals of sheep, child, crisis, datum, species and mother-in-law instantly?',
        'Can I choose a/an by sound and explain an hour vs a house?',
        'Can I explain why "He is at hospital" and "He is at the hospital" differ in meaning?',
        'Can I rewrite "many luggages" as a correct phrase with a unit word?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-noun-1',
        title: 'Error Correction: Uncountable Noun Pluralised (Paper 1 Section B)',
        problem: 'Find and correct the error: "The traveller displayed his luggages at the checkpoint, and the officers gave him many advices about the road."',
        stepByStepSolution: [
          'Step 1 (M1): Apply the number test: "one luggage / two luggages" fails — luggage is uncountable.',
          'Step 2 (M1): Fix 1: delete the plural -s → "his luggage" (or better, "his pieces of luggage").',
          'Step 3 (M1): Same test on "advices" — advice is uncountable; "many advices" fails on two counts (quantifier + plural).',
          'Step 4 (A1): Fix 2: "much advice" or "a great deal of advice".',
          'Step 5 (A1): Final corrected sentence: "The traveller displayed his luggage at the checkpoint, and the officers gave him much advice about the road."'
        ],
        keyTakeaway: 'One deletion (-s) fixes the noun; the quantifier above it must also flip from many to much.'
      },
      {
        id: 'ex-shs1-eng-noun-2',
        title: 'Choosing the Article by Sound',
        problem: 'Fill each gap with a, an, the or nothing (Ø): "___ honest minister addressed ___ gathering in ___ Kumasi; her speech was ___ hour long."',
        stepByStepSolution: [
          'Step 1 (M1): "honest" begins with a silent h → vowel sound /ɒ/ → AN honest minister.',
          'Step 2 (M1): The gathering is being introduced for the first time and is indefinite → A gathering (a gathering of people).',
          'Step 3 (A1): Town names take ZERO article → Ø in Kumasi.',
          'Step 4 (A1): "hour" /aʊə/ begins with a vowel sound → AN hour long.',
          'Step 5 (B1): Answers: An / a / Ø / an. Say the SOUND, not the letter, every time.'
        ],
        keyTakeaway: 'Silent-h words (hour, honest, honour) always take an; y-sound u words (university, unit, European) take a.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t1-nouns',
      topicId: 'shs1-eng-t1-nouns-articles-quantifiers',
      title: 'Nouns, Articles & Quantifiers Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-nu-1',
          quizId: 'quiz-shs1-eng-t1-nouns',
          questionText: 'Choose the correct option: "We received ______ about our project from the panel."',
          optionA: 'many advices',
          optionB: 'much advice',
          optionC: 'an advice',
          optionD: 'few advices',
          correctOption: 'B',
          subConcept: 'Uncountable nouns + quantifiers',
          explanation: 'Advice is uncountable: no plural, no "a". Only "much advice" is grammatical.',
          remediationTip: 'Try counting it: one advice? No → uncountable → use much/little/some.'
        },
        {
          id: 'q-shs1-eng-nu-2',
          quizId: 'quiz-shs1-eng-t1-nouns',
          questionText: 'Which word is filled with the wrong article?',
          optionA: 'an umbrella',
          optionB: 'a university',
          optionC: 'a honest man',
          optionD: 'an MBA graduate',
          correctOption: 'C',
          subConcept: 'Sound-based a/an',
          explanation: '"Honest" starts with a vowel sound (h is silent), so it must be "an honest man". The others follow the sound rule correctly.',
          remediationTip: 'Pronounce first, spell second: if the first sound is a vowel, use an.'
        },
        {
          id: 'q-shs1-eng-nu-3',
          quizId: 'quiz-shs1-eng-t1-nouns',
          questionText: 'The plural of "crisis" is:',
          optionA: 'crisises',
          optionB: 'crises',
          optionC: 'crize',
          optionD: 'crices',
          correctOption: 'B',
          subConcept: 'Foreign plurals',
          explanation: 'Greek -is nouns become -es (pronounced /i:z/): crisis→crises, thesis→theses, analysis→analyses.',
          remediationTip: 'Link it to "basis → bases"; the -es plural is the WAEC club.'
        },
        {
          id: 'q-shs1-eng-nu-4',
          quizId: 'quiz-shs1-eng-t1-nouns',
          questionText: '"Only ______ passengers boarded before departure," the report said (almost none). Choose the exact form:',
          optionA: 'a few',
          optionB: 'few',
          optionC: 'little',
          optionD: 'much',
          correctOption: 'B',
          subConcept: 'few vs a few',
          explanation: 'The sense is negative (almost none), so "few" without the article. "A few" would mean "some, and that is good".',
          remediationTip: 'Few (no article) ≈ hardly any; a few ≈ some. Decide if the sentence is complaining (few) or content (a few).'
        },
        {
          id: 'q-shs1-eng-nu-5',
          quizId: 'quiz-shs1-eng-t1-nouns',
          questionText: 'Which sentence uses the zero article correctly?',
          optionA: 'He goes to the school every day as a student.',
          optionB: 'She loves the music of Ghana.',
          optionC: 'Rice is a staple food in Ghana.',
          optionD: 'The Ghana gained independence in 1957.',
          correctOption: 'C',
          subConcept: 'Zero article rules',
          explanation: 'Generic uncountable subjects take no article: "Rice is...". As a student, he goes to SCHOOL (not the school); Ghana (country name) takes no "the"; "the music of Ghana" needs the because of the of-phrase.',
          remediationTip: 'General statement about a substance = zero article; specific "of" phrase = the.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t1-adjectives-adverbs-comparison',
    subjectId: 'english',
    level: 'SHS 1',
    term: 1,
    orderIndex: 6,
    title: 'Adjectives and Adverbs: Order, Use and Degrees of Comparison',
    description: 'Attributive vs predicative adjectives, adjective order, regular and irregular comparatives and superlatives, the "any other + singular" pattern, and correct positioning of adverbs.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=mY7mkNr43DA',
    youtubeId: 'mY7mkNr43DA',
    keyNotes: `• Three degrees: POSITIVE (cheap), COMPARATIVE (cheaper / more expensive), SUPERLATIVE (cheapest / most expensive).
• Formation rules:
  - 1 syllable: + -er/-est (tall, taller, tallest); double final consonant for CVC (big→bigger).
  - 2 syllables ending y: change y to -ier/-iest (happy→happier→happiest).
  - 2+ syllables: more/most (careful→more careful→most careful).
  - Irregular: good/well→better→best; bad→worse→worst; many/much→more→most; little→less→least.
• Never double-mark: *more taller, *most biggest, *more better.
• COMPARATIVE patterns: "X is taller THAN Y"; "X is THE taller of the two"; "no other + singular + comparative": "Kumasi is larger than ANY OTHER CITY in Ghana."
• SUPERLATIVE: always "THE + -est/most": "Ama is the tallest girl in the class."
• Adverb position: manner after verb/object; frequency before main verb but after be; degree before the word modified.`,
    detailedNotes: {
      overview: 'WAEC tests adjectives mainly in three formats: choosing between adjective and adverb forms, correcting double comparatives, and completing the "than/any other/the...of the three" patterns. Adverbs are tested through their types and mid-position placement.',
      introduction: 'Comparison logic is not just form — it is set-logic. When you compare Kumasi with all other Ghanaian cities, the city itself belongs to that set, so "any other" protects against nonsense; drop "other" and you claim Kumasi is larger than Kumasi.',
      realWorldContext: 'Market price calls in Ashaiman work entirely on comparison: "cheaper than Makola!" "the freshest tilapia on the market!" Every Hawker and hawker boy is doing grammar: comparative + than + the rival market, superlative + the + on/in + scope.',
      objectives: [
        'Form comparative and superlative degrees under all spelling and syllable rules',
        'Recite the irregular comparison set (good, bad, many, little, far)',
        'Choose between adjective and adverb forms after linking verbs and action verbs',
        'Use the than / any other / the...of the two and of the three comparison frames',
        'Place adverbs of manner, frequency and degree in their correct positions'
      ],
      sections: [
        {
          title: 'Degrees and Their Spelling Mechanics',
          content: 'One- and two-syllable adjectives take -er/-est: sweet→sweeter→sweetest, with CVC doubling (big→bigger→biggest, hot→hotter→hottest) and y-shifting (easy→easier→easiest). Adjectives of three or more syllables take more/most: beautiful→more beautiful→most beautiful. Some two-syllable adjectives allow both (clever, quiet, polite, simple). Farther/further and older/elder carry meaning differences: elder/elder brother (family seniority, never "than"); farther = physical distance; further = additional.',
          bulletPoints: [
            'Irregular set WAEC repeats: good/better/best, bad/worse/worst, many-much/more/most, little/less/least.',
            'Double-marking is always wrong: *more better, *most worst — one marker only.',
            '"as...as" is the equal frame ("Ama is as tall as Kojo") — negative: "not so/as tall as".',
            'Comparative + and + comparative expresses trend: "Prices keep rising higher and higher."'
          ],
          keyTakeaway: 'Count syllables first, check the irregular list, then add exactly ONE degree marker.',
          realWorldExample: 'A fuel-price notice reads: "Petrol is dearer than diesel" and "the most expensive month in three years" — mixed short and long forms in public writing.'
        },
        {
          title: 'The Comparison Frames That Carry Marks',
          content: 'Three exact frames appear in every WASSCE series: (1) "X is -er than ANY OTHER + singular noun + scope": "Kumasi is larger than any other city in Ghana." (2) "X is the -est + plural noun + scope": "Kumasi is the largest city in Ghana." (3) "X is the -er of the two": "Of the two girls, Ama is the taller." The definite article appears in frames 2 and 3 but never in frame 1, and "any other" keeps the compared noun singular because the set excludes the item.',
          bulletPoints: [
            'Wrong but tempting: "Kumasi is larger than any city in Ghana" (includes itself — logical error WAEC punishes).',
            'Conversion skill: superlative → comparative: "Timi is the best runner" → "Timi is better than any other runner."',
            'No other / nothing else + comparative: "No other student scored as highly as Efua."',
            'Double comparatives in MCQ options: "more taller" is always the distractor to delete.'
          ],
          keyTakeaway: 'than + any other + singular (comparative); the + superlative + plural noun; the + comparative + of the two.',
          realWorldExample: 'Sports reporting: "Asante Kotoko are stronger than any other club in the league" — the frame every Ghanaian radio commentator uses.'
        },
        {
          title: 'Adjectives vs Adverbs: Choosing the Right Tool',
          content: 'Adjectives modify nouns (and serve as complements after linking verbs); adverbs modify verbs, adjectives, and other adverbs. The danger words: after be, seem, look, smell, taste, sound, feel, become, keep use adjectives (SVC): "The soup tastes salty" (salty describes soup). With action verbs use adverbs: "He stirred the soup carefully." Some words are identical in form — fast, hard, late, high, near, deep, wide: "She sang beautifully" vs "She sings well"; "I worked hard" vs *hardly (hardly = scarcely!).',
          bulletPoints: [
            'Well is an adverb (He sings well) but an adjective when it means healthy (I feel well).',
            'A word ending -ly is usually an adverb, BUT friendly, costly, lively, lonely, early are adjectives — WAEC loves "friendly" as a distractor.',
            'Degree adverbs sit before what they modify: "almost midnight", "extremely hot weather".',
            'Manner-adverb slots: after the verb or after the object — never between verb and object (*He looked angrily the letter).'
          ],
          keyTakeaway: 'After linking verbs, quality words are adjectives; how you do an action is an adverb.',
          realWorldExample: 'A doctor\'s bedside note at Komfo Anokye: "The patient feels better today" — better (adjective complement after feels), never "feels more rightly".'
        },
        {
          title: 'Adverb Types and Their Position Rules',
          content: 'Adverbs of frequency (always, often, never, rarely) go BEFORE the main verb but AFTER be: "Kwame always studies after dinner" / "Kwame is never late." Time adverbs sit at the end (or front for emphasis): "We met at dusk / At dusk we met." Place adverbs follow the verb: "she looked outside." Manner ends the clause: "He drove slowly." Sentence adverbs (however, therefore, fortunately, unfortunately, moreover) open the sentence with a comma: "Fortunately, the bus reached Sunyani."',
          bulletPoints: [
            '"Almost never" and "very much" stack degree + frequency without conflict.',
            'Mid-position errors: *He goes always is wrong — the frequency adverb sits BEFORE the main verb: "He always goes."',
            'So vs such: so + adjective ("so hot"), such + (a) + adjective + noun ("such a hot day").',
            'Enough follows the word it grades: "old enough to vote", not *enough old.'
          ],
          keyTakeaway: 'Frequency = mid-position; manner/time/place = end position; sentence adverbs = front with comma.',
          realWorldExample: 'A tro-tro station sign: "Drivers usually depart full; unfortunately, passengers sometimes wait hours." — mid-frequency and sentence adverbs working together.'
        }
      ],
      commonMistakes: [
        'Double comparison: "more stronger", "most easiest" — choose either -er or more, never both.',
        'Dropping "other": "Accra is bigger than any city in Ghana" — Accra is a city in Ghana, so the sentence compares it with itself.',
        'Using adverbs after linking verbs: "The food tasted badly" — tasted is linking, so "tasted bad".',
        'Confusing hard/hardly, late/lately, near/nearly: "He hardly works" means he almost does NOT work.',
        'Forgetting "the" in "the taller of the two" and adding it wrongly in "than any other" sentences.'
      ],
      wassceExamTips: [
        'In sentence-transformation items, count the set: "of the two" forces comparative, "of the three/of all" forces superlative — examiners plant this number clue on purpose.',
        'For "any other + singular" items, check the noun stays singular ("than any other CITY") — the plural is the usual wrong option.',
        'Error correction for *more better: delete the -er ending option, keep more + base, OR convert to -er and delete more — write only one correct form.',
        'Objective speed tip: when two options differ only in -er vs more, count syllables; when they differ in adjective vs adverb, ask what the word modifies — under 30 seconds per item.',
        'In essays, examiners reward correct irregular forms; writing "gooder/most best" costs mechanical-accuracy marks on top of expression marks.'
      ],
      summaryChecklist: [
        'Can I spell bigger, happier, more careful and their -est partners with the doubling rules?',
        'Can I recite the irregular comparison table including far and late?',
        'Can I rewrite a superlative into the comparative with "any other + singular"?',
        'Can I decide whether a gap needs good/well, hard/hardly, late/lately?',
        'Can I place always/never before main verbs but after be?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-comp-1',
        title: 'Superlative to Comparative Conversion (WAEC Format)',
        problem: 'Rewrite the sentence beginning with the words given without changing the meaning: "Kumasi is the largest city in Ghana." → "Kumasi is larger than ______"',
        stepByStepSolution: [
          'Step 1 (M1): Identify the logic: Kumasi belongs to the set "cities in Ghana", so it must EXCLUDE itself from comparison.',
          'Step 2 (M1): Insert the frame: any other + SINGULAR noun + scope.',
          'Step 3 (A1): Answer: "Kumasi is larger than ANY OTHER CITY in Ghana."',
          'Step 4 (B1): Reject the two classic wrong options: *larger than any city in Ghana (self-comparison) and *larger than any other cities in Ghana (plural after other is wrong here).',
          'Answer: Kumasi is larger than any other city in Ghana.'
        ],
        keyTakeaway: 'The set-comparison rule: when the subject belongs to the group, "any other + singular" is mandatory.'
      },
      {
        id: 'ex-shs1-eng-comp-2',
        title: 'Linking Verb or Action Verb? Choosing Adjective/Adverb',
        problem: 'Choose correctly and justify: (a) "The old chief looked (angry / angrily) at the strangers." (b) "The new hall looked (spacious / spaciously)."',
        stepByStepSolution: [
          'Step 1 (M1): (a) "looked AT the strangers" describes an ACTION of the eyes — manner adverb needed: angrily.',
          'Step 2 (A1): (a) Answer: looked ANGRILY at the strangers.',
          'Step 3 (M1): (b) "looked" here means "appeared" — a linking verb; the word describes the hall (noun), so an adjective is required.',
          'Step 4 (A1): (b) Answer: looked SPACIOUS.',
          'Step 5 (B1): Substitution check: swap "looked" with "appeared/seemed" — if the sentence still works, use the adjective (spacious passes, spaciously fails).'
        ],
        keyTakeaway: 'The "seem/appear" swap test proves linking verbs take adjectives, not adverbs.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t1-comparison',
      topicId: 'shs1-eng-t1-adjectives-adverbs-comparison',
      title: 'Comparison & Adverbs Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-cp-1',
          quizId: 'quiz-shs1-eng-t1-comparison',
          questionText: 'Choose the correct form: "Of the two sisters, Abena is ______."',
          optionA: 'the most intelligent',
          optionB: 'the more intelligent',
          optionC: 'more intelligent than',
          optionD: 'most intelligent',
          correctOption: 'B',
          subConcept: 'Comparative of the two',
          explanation: 'Only two items are compared, so the comparative is used with "the": "the more intelligent of the two."',
          remediationTip: 'Count the set: 2 items = the -er/more... of the two; 3+ = the -est/most... of all.'
        },
        {
          id: 'q-shs1-eng-cp-2',
          quizId: 'quiz-shs1-eng-t1-comparison',
          questionText: 'Which sentence is FREE of comparison errors?',
          optionA: 'Ela is more tall than her brother.',
          optionB: 'Today\'s weather is worse than yesterday.',
          optionC: 'This is the most easiest question.',
          optionD: 'He runs more faster than anyone.',
          correctOption: 'B',
          subConcept: 'Double marking and irregulars',
          explanation: 'A should use "taller" (short adjective); C uses double superlative; D uses double comparative. B applies the irregular "worse" correctly (formally "worse than yesterday\'s" is accepted and tested as correct).',
          remediationTip: 'Scan every option for two markers (more+er, most+est); a single irregular comparative (worse/better) is usually the correct one.'
        },
        {
          id: 'q-shs1-eng-cp-3',
          quizId: 'quiz-shs1-eng-t1-comparison',
          questionText: '"The medicinal herb smells ______." Choose the right word.',
          optionA: 'strongly',
          optionB: 'strong',
          optionC: 'more strong',
          optionD: 'strongest',
          correctOption: 'B',
          subConcept: 'Linking verb + adjective',
          explanation: '"Smells" links the herb to a quality; the complement is the adjective "strong". "Smells strongly" would describe how vigorously the herb sniffs!',
          remediationTip: 'Replace smells with "is": "The herb is strong" works → adjective needed.'
        },
        {
          id: 'q-shs1-eng-cp-4',
          quizId: 'quiz-shs1-eng-t1-comparison',
          questionText: 'Choose the correct sentence.',
          optionA: 'He always is late for assembly.',
          optionB: 'He is always late for assembly.',
          optionC: 'Always he late is for assembly.',
          optionD: 'He is late always for assembly.',
          correctOption: 'B',
          subConcept: 'Adverb of frequency position',
          explanation: 'Frequency adverbs go AFTER the verb "be": "is always late". Before main verbs: "always arrives early".',
          remediationTip: 'Rule: frequency adverb sits in the MIDDLE — after be, before doing-verbs.'
        },
        {
          id: 'q-shs1-eng-cp-5',
          quizId: 'quiz-shs1-eng-t1-comparison',
          questionText: '"Tamale is hotter than ______ city in the south." Complete with the correct form.',
          optionA: 'any',
          optionB: 'any other',
          optionC: 'no other',
          optionD: 'none',
          correctOption: 'A',
          subConcept: 'Any vs any other (different sets)',
          explanation: 'Tamale is NOT a southern city, so the set "city in the south" excludes it — plain "any city in the south" is correct; "any other" would wrongly imply Tamale is in the south.',
          remediationTip: 'Ask: is the subject inside the comparison set? Yes → any other + singular. No → plain any.'
        }
      ]
    }
  },

  // =========================================================================
  // TERM 2
  // =========================================================================
  {
    id: 'shs1-eng-t2-prepositions',
    subjectId: 'english',
    level: 'SHS 1',
    term: 2,
    orderIndex: 7,
    title: 'Prepositions: Time, Place, Movement and Fixed Prepositions',
    description: 'The in/on/at system for time and place, prepositions of movement, agent vs instrument (by/with), since/for, between/among, and the fixed-preposition lists WAEC tests repeatedly.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=92XBCRYZ1S8',
    youtubeId: '92XBCRYZ1S8',
    keyNotes: `• TIME triangle: AT precise time (at 6 a.m., at noon, at night, at the weekend-BrE); ON days/dates (on Monday, on 6th October, on my birthday); IN months/years/long periods (in December, in 2026, in the rainy season, in ten minutes).
• PLACE triangle: AT a point/address (at the bus stop, at No. 12 Oduka Lane); ON a surface/line (on the table, on the coast road, on the wall); IN an enclosed area (in the box, in Kumasi, in Ghana).
• Movement: to (destination), into (entering), onto, towards, through, across, along, past, round, up/down.
• In/on the vehicle rule: IN a car/taxi; ON a bus/tro-tro/train/ship/plane (you can stand and walk on them).
• Fixed prepositions WAEC recycles: listen TO, depend ON, arrive AT (place) / IN (city/country), married TO, fond OF, accustomed TO, differ FROM, agree WITH (person) / ON (matter), die OF (disease) / FROM (cause), pay FOR, laugh AT, listen TO, confide IN.
• since = starting point (since 2019); for = duration (for six years). between = two; among = three or more.`,
    detailedNotes: {
      overview: 'Prepositions are a closed class, which means every exam question has a single defensible answer that must be learned, not reasoned from vocabulary. This topic gives the geometric in/on/at system, the movement set, and the fixed-preposition lists that carry most WAEC marks.',
      introduction: 'Ghanaian interference adds extra prepositions ("discuss about", "return back to") or swaps small ones ("married with"). The cure is to treat each verb/adjective/noun as owning its preposition like a property.',
      realWorldContext: 'A wayfinding exchange in Accra: "Turn left at the junction, go along Spintex Road, past the Kanon bus stop, and meet me in the forecourt of the filling station — I\'ll be the one leaning on the fence." The whole navigation runs on prepositions of place and movement.',
      objectives: [
        'Apply the at/on/in system for time expressions from clock-hours to centuries',
        'Apply the at/on/in system for place including streets, cities and surfaces',
        'Choose correct movement prepositions (into/onto/towards/through/across)',
        'Recite the fixed prepositions of high-frequency verbs and adjectives',
        'Distinguish since/for, between/among, below/under, above/on'
      ],
      sections: [
        {
          title: 'Prepositions of Time: The At–On–In Funnel',
          content: 'Think of a funnel narrowing from long to short. IN takes long containers: centuries, years, seasons, months, parts of the day (in 1957, in the dry season, in October, in the morning — but AT night). ON takes days and dated events (on Friday, on Independence Day, on the 30th of June, on Christmas Eve — but AT Christmas = the festival period). AT takes the pin-point: at 8 o\'clock, at midday, at midnight, at sunset, at the moment, at present. Exception cluster: no preposition before this/that/next/last/every + time (see you next Friday, not *on next Friday) and no "in" before "morning of 6th October" — when a date is specified, ON wins: "on the morning of 6th October".',
          bulletPoints: [
            'in ten minutes = after ten minutes from now (future); after is also acceptable.',
            'during + noun (during the holiday); for + duration (for three weeks); by + deadline (by Friday = not later than).',
            'since + starting point (since Monday) vs for + stretch (for six days) — a standing WAEC cloze pair.',
            '"at the weekend" (BrE, WAEC standard) vs "on weekends" (general habit).'
          ],
          keyTakeaway: 'Short clock-time = at; day/date = on; month/year/season/century = in.',
          realWorldExample: 'A church programme: "Rehearsals in October, on Sundays, at 5 p.m.; the concert on the evening of 24th October" — all three funnel levels in one poster.'
        },
        {
          title: 'Prepositions of Place and the Vehicle Rule',
          content: 'AT = a point or address without inside emphasis (at the crossroads, at the bus stop, at 14 Ring Road); also events and institutions as points (at school, at church, at a durbar). ON = contact with a surface (on the desk, on the wall, on the second floor, on the coast road) and lines/borders (on the Volta River, on the Ghana-Togo border). IN = enclosed space (in the classroom, in the cup, in Accra, in Greater Accra Region, in West Africa). Vehicles you can stand and walk in take ON: on a tro-tro, on a bus, on a train, on a ship, on a plane — but IN a car, in a taxi (you crouch inside). Streets: on/in BrE variance, WAEC accepts "on Ring Road" and "in 14 Ring Road" for the number.',
          bulletPoints: [
            'Arrive AT a small place (at the station), arrive IN a city/country (in Tamale), arrive ON an island (on Bioko) — never *arrive to.',
            'Reach and enter take NO preposition: "He reached home", not *reached to home.',
            'under vs below: under = directly beneath with contact logic (under the table); below = lower level (below sea level).',
            'over vs above: above = higher than; over = across/above with coverage or movement (the bridge over the river).'
          ],
          keyTakeaway: 'Point = at, surface = on, container = in; walkable vehicle = on, crouch vehicle = in.',
          realWorldExample: 'A ferry announcement at the Akosombo landing: "Passengers on the boat, meet below the upper deck, at the gangway, in Ten minutes." — three registers of place in one sentence.'
        },
        {
          title: 'Movement and Direction',
          content: 'TO marks destination (walk to school); INTO marks entry crossing the boundary (walk into the hall — Ghanaian English often drops it wrongly: *come inside the room without "into"); ONTO for surfaces; TOWARDS = in the direction of without arrival; THROUGH = entering and exiting the other side (through the traffic); ACROSS = crossing a surface (across the courtyard); ALONG = beside/parallel to a line (along the beach); PAST = beyond (past the pharmacy); ROUND/AROUND (round the roundabout); UP/DOWN; FROM...TO the start-end frame (from Kumasi to Accra); TOWARD(S), ONTO, ONTO vs ON.',
          bulletPoints: [
            'Return and enter carry the destination inside the verb — no "to/into" after return (*return back to home is doubly wrong; back is also redundant).',
            '"reach to" is a popular Ghanaian error: reach is transitive — "We reached Sunyani at noon."',
            'fall DOWN / climb UP reinforce direction; "The plane flew over the Afadzato mountains" (over = above and across).',
            'throw AT (aimed) vs throw TO (handed): WAEC tests the contrast in cloze.'
          ],
          keyTakeaway: 'Destination = to; boundary-crossing = into; across-surface = across; line-parallel = along.',
          realWorldExample: 'A road sign near the Wli falls: "Turn left towards Gbodome, follow the path through the forest, and walk across the suspension bridge." — three movement prepositions in one instruction.'
        },
        {
          title: 'Fixed Prepositions and Agent/Instrument',
          content: 'Certain verbs, adjectives and nouns simply own a preposition, and WAEC recycles the same list: listen TO, laugh AT, depend ON/UPON, insist ON, persist IN, succeed IN, apologize FOR, pay FOR, thank FOR, accuse OF, blame FOR, confide IN, agree WITH a person, agree ON a plan, differ FROM, compare WITH (similarity) / compare TO (likeness: "Shall I compare thee TO a summer\'s day"), married TO (never with), senior/junior/superior/inferior TO, fond OF, accustomed TO, afraid OF, die OF a disease, die FROM wounds/exhaustion, die IN battle, die FOR one\'s country. Agent vs instrument: passive sentences name doer with BY and tool with WITH: "The note was written BY Ama WITH a pen."',
          bulletPoints: [
            'Age expressions use IN: "a boy OF twelve" vs the possessive "at the age OF".',
            '"discuss about" and "explain about" are always wrong — discuss and explain take a direct object.',
            'preposition before relative clauses: "the man FROM whom I borrowed" / "the man (who/that) I borrowed FROM" — both legal, the stranded preposition is preferred in ordinary style.',
            'compound prepositions: because OF, owing TO, in spite OF, according TO, instead OF — WAEC objective favourites.'
          ],
          keyTakeaway: 'Learn verb + preposition as one vocabulary item; never translate it from the local language.',
          realWorldExample: 'A police report from a Kumasi station: "The suspect was charged WITH theft; the officer insisted ON a written statement despite threats FROM the accomplices."'
        }
      ],
      commonMistakes: [
        '"discuss about the issue", "return back to school", "reached to the station" — redundant prepositions or adverbs carried over from local-language patterns.',
        'Using "married with" instead of "married to".',
        'Using "since" for a duration ("since six years") or "for" for a starting point ("for 2019").',
        '"on the car" for a private car (should be "in the car") and "in the tro-tro" is tolerated for being inside, but WAEC expects "on" for public walkable transport.',
        'Confusing "between the three ministers" (correct: among) and "among the two schools" (correct: between).',
        'Using "at" before large areas: "live at Accra" instead of "live in Accra".'
      ],
      wassceExamTips: [
        'In cloze passages with an empty preposition, first classify the next word: a time word? place word? verb complement? The three systems in this topic cover nearly every item.',
        'Memorise the "adjectives ending in -IOR take TO" rule: senior, junior, prior, superior, inferior TO — WAEC asks this at least once every series.',
        'Error correction with "arrive to/in at": city/country → in, small place → at, island → on; anything else at the verb is the error to delete.',
        'For "by/with" items, ask: is it the DOER (by) or the TOOL (with)? "The road was built WITH labourers" fails — WITH demands an instrument.',
        'Do not overthink British vs American variants in objectives: choose the option that matches WAEC-accepted BrE (at the weekend, different FROM), not "on the weekend".'
      ],
      summaryChecklist: [
        'Can I place at/on/in correctly for hours, days, months and parts of the day?',
        'Can I explain why "on a bus" but "in a taxi"?',
        'Can I choose between since and for without pausing?',
        'Can I list fifteen fixed-preposition pairs (verb/adjective + preposition) from memory?',
        'Can I tell between from among, below from under, over from above in a given sentence?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-prep-1',
        title: 'Cloze Preposition Decision Chain (Time + Place + Fixed)',
        problem: 'Fill the gaps: "The delegation will arrive ___ Kumasi ___ Friday, meet officials ___ the Civic Centre, and discuss the project ___ two hours."',
        stepByStepSolution: [
          'Step 1 (M1): Classify each gap: city name (place), day of week (time), building (point place), duration (time stretch).',
          'Step 2 (M1): City = enclosed large area → IN Kumasi. Day → ON Friday.',
          'Step 3 (A1): Building treated as meeting point → AT the Civic Centre.',
          'Step 4 (A1): Duration stretch → FOR two hours.',
          'Step 5 (B1): Full answer: in / on / at / for. Note discuss takes NO preposition before "the project".'
        ],
        keyTakeaway: 'Classify each gap (person/place/time/complement) before choosing; the systems never mix.'
      },
      {
        id: 'ex-shs1-eng-prep-2',
        title: 'Correcting Ghanaian-Interference Prepositions',
        problem: 'Correct every prepositional error: "We discussed about the plan since one hour, then my husband who is senior than me returned back to the house in company with my mother."',
        stepByStepSolution: [
          'Step 1 (M1): "discussed about" → delete about (discuss is transitive): "discussed the plan".',
          'Step 2 (M1): "since one hour" → duration = FOR one hour.',
          'Step 3 (M1): "senior than" → -ior adjectives take TO: "senior to me".',
          'Step 4 (M1): "returned back to" → delete back and to: "returned to the house" (or "came back to").',
          'Step 5 (A1): "in company with" is an acceptable fixed phrase; better modern choice: "accompanied by".',
          'Answer: "We discussed the plan for one hour, then my husband, who is senior to me, returned to the house accompanied by my mother."'
        ],
        keyTakeaway: 'One sentence can hide four preposition traps; scan verbs and adjectives for their owned complements first.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t2-prepositions',
      topicId: 'shs1-eng-t2-prepositions',
      title: 'Prepositions Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-pr-1',
          quizId: 'quiz-shs1-eng-t2-prepositions',
          questionText: 'The lecture begins ______ 7 p.m. ______ the evening of Friday.',
          optionA: 'in, on',
          optionB: 'at, on',
          optionC: 'at, in',
          optionD: 'on, at',
          correctOption: 'B',
          subConcept: 'Time at/on/in',
          explanation: 'Clock time takes AT; a specified part of a particular day takes ON ("on the evening of Friday"). "in the evening" only without a day attached.',
          remediationTip: 'Pinpoint = at; dated part-of-day = on; undated general evening = in.'
        },
        {
          id: 'q-shs1-eng-pr-2',
          quizId: 'quiz-shs1-eng-t2-prepositions',
          questionText: 'Choose the correct sentence.',
          optionA: 'She is married to a doctor.',
          optionB: 'She is married with a doctor.',
          optionC: 'She married by a doctor.',
          optionD: 'She is marry to a doctor.',
          correctOption: 'A',
          subConcept: 'Fixed prepositions',
          explanation: 'Married takes TO. "married with" is a Ghanaian/common translation error; WAEC punishes it.',
          remediationTip: 'Link in your head: "to have and to hold... married TO" — the wedding vow itself fixes the preposition.'
        },
        {
          id: 'q-shs1-eng-pr-3',
          quizId: 'quiz-shs1-eng-t2-prepositions',
          questionText: 'He has lived in Ho ______ 2015, so he has been there ______ eleven years.',
          optionA: 'for, since',
          optionB: 'since, for',
          optionC: 'since, since',
          optionD: 'from, since',
          correctOption: 'B',
          subConcept: 'since vs for',
          explanation: '2015 is a starting point → since; eleven years is a duration → for.',
          remediationTip: 'Since + ONE date; for + a SPAN. Point vs length.'
        },
        {
          id: 'q-shs1-eng-pr-4',
          quizId: 'quiz-shs1-eng-t2-prepositions',
          questionText: 'The thief was caught ______ a police officer using a rope thrown ______ him.',
          optionA: 'with, by',
          optionB: 'by, at',
          optionC: 'by, with',
          optionD: 'at, by',
          correctOption: 'C',
          subConcept: 'agent by vs instrument with',
          explanation: 'The doer of catching is the officer → BY (agent); the rope is the tool → WITH (instrument). Agent = by, instrument = with.',
          remediationTip: 'Ask of each noun: DID it act (by) or WAS it used (with)? Officers act; ropes are used.'
        },
        {
          id: 'q-shs1-eng-pr-5',
          quizId: 'quiz-shs1-eng-t2-prepositions',
          questionText: 'Correct the error: "We discussed about the summary for two hours."',
          optionA: 'No error',
          optionB: 'delete "about"',
          optionC: 'change "for" to "since"',
          optionD: 'change "discussed" to "discussion"',
          correctOption: 'B',
          subConcept: 'Transitive verbs that forbid about',
          explanation: 'Discuss already contains the idea of "about" — it takes a bare object: "discussed the summary".',
          remediationTip: 'Collect the no-about club: discuss, explain, describe, reach, enter, return, order (someone), ask (no of before the person).'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t2-tenses-aspect',
    subjectId: 'english',
    level: 'SHS 1',
    term: 2,
    orderIndex: 8,
    title: 'Verb Tenses and Aspect: The Twelve-Tense System',
    description: 'Simple, continuous and perfect aspects across past, present, future and future-in-the-past; the present-perfect versus past-simple choice; time markers that force a tense; and the sequence-of-tenses habit for reported and complex sentences.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=HWjRVkTNoNM',
    youtubeId: 'HWjRVkTNoNM',
    keyNotes: `• Three times × four aspects:
  PAST: simple (walked), continuous (was walking), perfect (had walked), perfect continuous (had been walking).
  PRESENT: simple (walk/walks), continuous (is walking), perfect (has walked), perfect continuous (has been walking).
  FUTURE: simple (will walk), continuous (will be walking), perfect (will have walked), perfect continuous (will have been walking).
  FUTURE-IN-THE-PAST: would walk / would be walking / would have walked.
• Time markers that decide the answer:
  - yesterday, ago, last week, in 2010, when I was young → PAST SIMPLE.
  - since 2019, for six years, already, yet, just, ever, never, recently, so far, this week → PRESENT PERFECT.
  - now, at the moment, currently, still → CONTINUOUS.
  - tomorrow, next term, by 2030, by the time + present → FUTURE forms.
• Present perfect connects past to present ("I have lost my key" = still lost); past simple cuts it off ("I lost my key yesterday" = may be found).
• Sequence of tenses: main verb past → subordinate past/perfect: "She said she WAS coming."`,
    detailedNotes: {
      overview: 'Tense is the verb\'s clock and camera: it tells when the action happens AND whether it is complete, ongoing, or repeated. This topic drills the twelve-tense grid, the signal words WAEC uses to force each tense, and the two confusions that cost the most marks: present perfect vs past simple, and the continuous of non-continuous (stative) verbs.',
      introduction: 'Master the grid by columns rather than by name: every verb form is built from the past participle (have + V3) and the -ing form (be + V-ing), plus will/would. If you can build those two parts, all twelve tenses are combinations, not new animals.',
      realWorldContext: 'A Joy FM newsreader moves through tenses minute by minute: "Parliament PASSED (past) the bill last night; the unions HAVE WARNED (present perfect) that they WILL STRIKE (future) if the government DOES NOT REVIEW (present simple) the rates." One broadcast, four tenses, each with a time reason.',
      objectives: [
        'Build all twelve active tense forms for regular and irregular verbs',
        'Select tense from time markers (ago/for/since/already/now/next/by the time)',
        'Explain the present perfect versus past simple difference in context',
        'Recognise stative verbs that resist the continuous form',
        'Apply sequence of tenses in complex sentences with past reporting'
      ],
      sections: [
        {
          title: 'The Construction Grid: Two Bricks, Four Mortars',
          content: 'Brick 1 = the -ing form (be + V-ing marks CONTINUOUS/progressive). Brick 2 = the past participle V3 (have + V3 marks PERFECT). The four time mortars: present (have/is have), past (had/was), future (will), future-in-the-past (would). Simple tenses use V1/V2 alone. Thus "will have been studying" = future mortar + perfect brick + continuous brick + base. Every WASSCE fill-in is solved by rebuilding the formula, not by guessing from translation.',
          bulletPoints: [
            'Irregular V2/V3 set WAEC prefers: go-went-gone, see-saw-seen, do-did-done, write-wrote-written, take-took-taken, come-came-come, run-ran-run.',
            'The auxiliary chain never skips: will (modal) + be + been — modals take the BARE form after them: *will goes is wrong.',
            'Past simple of be: was/were; subjunctive "were" survives in "If I were you" even for singular subjects.',
            'Aspect = completeness camera: simple = fact/habit, continuous = in progress, perfect = before-and-relevant.'
          ],
          keyTakeaway: 'Continuous = BE + -ing; perfect = HAVE + V3; tense = only the form of BE/HAVE/modal.',
          realWorldExample: 'A project poster at a Tamale NGO: "By 2030 we WILL HAVE BUILT forty boreholes" — future perfect: an action completed before a future deadline stated with BY.'
        },
        {
          title: 'Present Perfect vs Past Simple: The Connection Test',
          content: 'Past simple snaps the event into finished time: a definite time word (yesterday, in 2019, last term, when she was young) or a dead person\'s achievements force it ("Kwame Nkrumah LED independence in 1957"). Present perfect keeps the bridge to now: result visible now ("I HAVE broken my glasses" = wearing another pair), unfinished time space ("SHE HAS written three letters today" — today not over), life experience ("Have you ever eaten kenkey?"), and since/for durations ("WE have studied English FOR two years").',
          bulletPoints: [
            'already (affirmative, before V) vs yet (negative/question, at end): "I have already eaten. Have you eaten yet?"',
            'just = very recent: "The headmaster has just left."',
            '"I have been to Kumasi" (visited, returned) vs "I have gone to Kumasi" (still there) — the gone/been pair is a WAEC classic.',
            'American simple-past with already ("I already ate") exists, but WAEC follows British convention: perfect.'
          ],
          keyTakeaway: 'Definite past time = past simple; unfinished time or present result = present perfect.',
          realWorldExample: 'A result-checking exchange at school: "Have you seen my WAEC slip?" (result now) — "I saw it on the table yesterday" (time specified, so past simple).'
        },
        {
          title: 'Continuous, Habitual and Stative Verbs',
          content: 'Continuous tenses paint actions IN PROGRESS ("they were debating"). But a class of verbs describes states, not activities, and normally rejects -ing: know, believe, understand, remember, forget, love, hate, like, want, wish, prefer, own, possess, belong, contain, consist, mean, seem, matter. WAEC punishes *I am knowing. Note the sense-shifters that DO allow continuous with an activity meaning: think (believe → state; consider → "I am thinking about the offer"), have (possess → state; eat/experience → "having lunch"), see (perceive → state: "I see the point"; meet/visit → activity: "she is seeing the doctor"), taste/smell as actions when someone deliberately tests.',
          bulletPoints: [
            'Habitual present simple: "The sun RISES in the east"; "Ama CATCHES the 6 a.m. tro-tro."',
            'Continuous for irritating habits with "always": "He is ALWAYS forgetting his ID card" (complaining tone).',
            'Future with present-continuous arrangement: "I am visiting my uncle on Saturday" (planned).',
            'Time clauses take present, not future: "When the bell RINGS (not will ring), leave." Same after as soon as, until, before, after, if.'
          ],
          keyTakeaway: 'State verbs stay out of -ing; time/condition clauses refuse will.',
          realWorldExample: 'A teacher\'s remark: "Kofi is always chatting, but he doesn\'t understand a word — is he knowing the answers to today\'s questions?" Both halves test stative verbs (know) and habit continuous.'
        },
        {
          title: 'Past Perfect, Narrative Time and Sequence',
          content: 'The past perfect (had + V3) is the "earlier past" used to move backwards from a past reference point: "When we arrived at the stadium, the match HAD STARTED." Two past events, one earlier → the earlier takes had. Narrative sequencing: past simple advances the story ("She opened the door, switched on the light and saw..."), past perfect fills in what happened before the story time. In reported and time-linked complex sentences after past reporting, shift: present→past, past→past perfect ("She said she WAS busy"; "He said he HAD finished").',
          bulletPoints: [
            'after / before / by the time + past event often trigger perfect: "By the time the ambulance came, the crowd had dispersed."',
            'no past perfect needed for automatic sequence with before/after ("After she ate, she left" is already clear) — WAEC rewards the had form when order is not signaled.',
            'the second continuous of the past: "had been waiting" emphasises duration before another past event: "They had been waiting 2 hours when the bus finally came."',
            'future-in-the-past (would) for old plans that unfolded or failed: "He promised he WOULD return."'
          ],
          keyTakeaway: 'Two pasts, one earlier: give "had" to the earlier one.',
          realWorldExample: 'A witness statement at a police station: "The shop had closed before the light went off; I was returning home when the alarm rang."'
        }
      ],
      commonMistakes: [
        'Putting a time word with present perfect: *"I have seen him yesterday" — yesterday is finished time, so past simple.',
        'Using "for" with a point date ("for 2020") or "since" with a span ("since five years").',
        'Continuous of stative verbs: "I am agreeing", "she is possessing a farm".',
        'Double future in time clauses: *"When I will arrive, call me" — the clause after when/until/if takes a present or past tense.',
        'Wrong past participle: "I have wrote", "he has drinked" — memorise V3 of the irregular high-frequency list.',
        'Sequence break: "The boy said he is tired" is fine for simultaneous truth, but WAEC expected backshift when the report itself is past and the feeling has ended: "he WAS tired."'
      ],
      wassceExamTips: [
        'Scan for the SIGNAL WORD before choosing: ago/last/yesterday/in + past year = past simple; since/for/already/yet/ever/never/recently/so far/today(this week if unfinished) = present perfect.',
        'In objective items with two blanks describing past events, the EARLIER event almost always carries had + V3 — draw a tiny timeline on your paper.',
        'Future-in-the-past appears in essays as "would": "I would never forget that day" — use it for past habits/plans to lift expression marks.',
        'When asked to change a sentence to a given tense, keep everything else identical: examiners deduct for accidental verb changes beyond the required one.',
        'Stative verb list of 15 (know, believe, love, hate, want, need, own, possess, belong, contain, understand, remember, forget, seem, mean) covers nearly every continuous-error option in the objective paper.'
      ],
      summaryChecklist: [
        'Can I build all twelve forms with "walk" and "go" without a table?',
        'Can I state the time-marker that forces each tense family?',
        'Can I choose have been to vs have gone to correctly?',
        'Can I list ten verbs that refuse the continuous form?',
        'Can I place past perfect in a two-event narrative sentence?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-tense-1',
        title: 'Timeline Method: Simple Past vs Past Perfect',
        problem: 'Complete with the correct forms: "By the time we ______ (reach) the lorry station, the tro-tro ______ (leave)."',
        stepByStepSolution: [
          'Step 1 (M1): Draw a mental timeline: two past events — (a) tro-tro leaves, (b) we reach.',
          'Step 2 (M1): "By the time" marks the DEADLINE: the leaving happened BEFORE the reaching, so it takes the earlier past.',
          'Step 3 (A1): The later event takes past simple: "we REACHED".',
          'Step 4 (A1): The earlier event takes past perfect: "the tro-tro HAD LEFT".',
          'Step 5 (B1): Check reading order: "By the time we reached the lorry station, the tro-tro had left." Sentence matches the real sequence; done.'
        ],
        keyTakeaway: 'Timeline first, form second: whichever event sits earlier in a past story takes had + V3.'
      },
      {
        id: 'ex-shs1-eng-tense-2',
        title: 'Choosing Present Perfect over Past Simple (Signal-Word Hunt)',
        problem: 'Choose and justify: (a) "Ama ______ (won/has won) the spelling bee last term." (b) "Ama ______ (won/has won) three spelling bees this year — and the competitions are not over."',
        stepByStepSolution: [
          'Step 1 (M1): (a) contains a finished-time marker "last term" → the connection bridge is cut → past simple: WON.',
          'Step 2 (M1): (b) the time space "this year" is UNFINISHED (competitions remain) → the bridge to now stands → present perfect: HAS WON.',
          'Step 3 (A1): (a) Ama won the spelling bee last term. (b) Ama has won three spelling bees this year.',
          'Step 4 (B1): Extra check: (b) also implies she may win more — the perfect keeps the set open, exactly why WAEC pairs perfect with "this year/today/so far".'
        ],
        keyTakeaway: 'Finished time window = past simple; open time window = present perfect.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t2-tenses',
      topicId: 'shs1-eng-t2-tenses-aspect',
      title: 'Tenses & Aspect Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-tn-1',
          quizId: 'quiz-shs1-eng-t2-tenses',
          questionText: '"I ______ Kwame since we were in JHS."',
          optionA: 'know',
          optionB: 'have known',
          optionC: 'knew',
          optionD: 'am knowing',
          correctOption: 'B',
          subConcept: 'Stative + since with perfect',
          explanation: 'Since marks an unfinished duration up to now → present perfect; "know" is stative so the -ing form is wrong.',
          remediationTip: 'since + state verb = have/has + past participle of the stative verb (have known, have liked).'
        },
        {
          id: 'q-shs1-eng-tn-2',
          quizId: 'quiz-shs1-eng-t2-tenses',
          questionText: 'Choose the correct sentence:',
          optionA: 'I have seen the doctor yesterday.',
          optionB: 'I saw the doctor since yesterday.',
          optionC: 'I saw the doctor yesterday.',
          optionD: 'I was seeing the doctor yesterday for two hours.',
          correctOption: 'C',
          subConcept: 'yesterday forces past simple',
          explanation: '"Yesterday" is finished time, so only past simple fits. A mixes perfect with past marker; B misuses since.',
          remediationTip: 'Any definite past time word (yesterday, last week, in 2020, ago) bans the present perfect.'
        },
        {
          id: 'q-shs1-eng-tn-3',
          quizId: 'quiz-shs1-eng-t2-tenses',
          questionText: '"By the time the midwife arrived, the baby ______."',
          optionA: 'is born',
          optionB: 'was born',
          optionC: 'had been born',
          optionD: 'has been born',
          correctOption: 'C',
          subConcept: 'earlier past with by the time',
          explanation: 'The birth preceded the arrival; with a past reference point (arrived), the earlier event takes past perfect: had been born.',
          remediationTip: 'by the time + past simple in one clause → past perfect in the other clause.'
        },
        {
          id: 'q-shs1-eng-tn-4',
          quizId: 'quiz-shs1-eng-t2-tenses',
          questionText: 'Which sentence is grammatically wrong?',
          optionA: 'She is having a bath right now.',
          optionB: 'She is having two farms.',
          optionC: 'She has two farms.',
          optionD: 'She had two farms last year.',
          correctOption: 'B',
          subConcept: 'stative have (possess) bans -ing',
          explanation: 'HAVE meaning "possess" is a state; it cannot take the continuous. "Is having a bath" is an activity and is fine.',
          remediationTip: 'Ask: can I do it as an activity? have lunch/have a bath = activity OK; have a car = possession NG.*'
        },
        {
          id: 'q-shs1-eng-tn-5',
          quizId: 'quiz-shs1-eng-t2-tenses',
          questionText: '"Call me when you ______ at the station."',
          optionA: 'will arrive',
          optionB: 'arrived',
          optionC: 'arrive',
          optionD: 'will have arrived',
          correctOption: 'C',
          subConcept: 'present in future time clause',
          explanation: 'Time clauses after when/as soon as/until take present simple for future meaning: "when you arrive".',
          remediationTip: 'Never put will inside the when/until/if clause — will lives only in the main clause.'
        }
      ]
    }
  },

  {
    id: 'shs1-eng-t2-passive-voice',
    subjectId: 'english',
    level: 'SHS 1',
    term: 2,
    orderIndex: 9,
    title: 'Active and Passive Voice: Transformation Rules',
    description: 'Converting between voices across all tenses, handling two-object and phrasal verbs, the by/with agent-instrument distinction, and when passive voice is the better choice in WAEC writing.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=t3LaKJilF-E',
    youtubeId: 't3LaKJilF-E',
    keyNotes: `• The passive recipe: BE (in the active tense) + PAST PARTICIPLE (V3); the active object becomes subject; the active subject goes to "by + agent" (or disappears).
• Tense-preserving table (object "the mangoes"):
  - eats → is eaten | ate → was eaten | will eat → will be eaten
  - has eaten → has been eaten | had eaten → had been eaten
  - is eating → is being eaten | was eating → was being eaten
  - eat (habit plural) → are eaten
• Two-object verbs give two passives: "Ama gave Kofi a gift" → "A gift was given to Kofi" / "Kofi was given a gift" (person-subject preferred in English).
• Phrasal verbs keep their particle: "They looked after the orphans" → "The orphans were looked after."
• Agent BY vs instrument WITH: "killed BY a hunter (doer) WITH a knife (tool)."
• No passive for intransitive verbs: die, happen, arrive, sleep, go (except prepositional verbs: "laughed at → was laughed at").`,
    detailedNotes: {
      overview: 'Voice is a camera angle on the same event. WASSCE Paper 1 Section B rewards flawless transformation (correct BE-form + V3 + retained elements), while essays reward choosing passive when the doer is unknown, obvious, or unimportant.',
      introduction: 'Most failed passive answers contain one of three mechanical slips: wrong BE-form (tense drift), a base verb instead of the participle, or a dropped particle/preposition from the original verb. Fix those three habits and transformation marks are automatic.',
      realWorldContext: 'Police and hospital media bulletins are passive factories precisely because responsibility is uncertain: "Two phones WERE STOLEN at the Kanon market; the victim WAS TREATED at the regional hospital; an investigation HAS BEEN OPENED." No one can legally name a suspect — the passive is the honest voice of the unfinished story.',
      objectives: [
        'Convert active to passive sentences in every tense without changing time meaning',
        'Produce the two passive forms of two-object verbs',
        'Retain particles and prepositions of phrasal verbs in the passive',
        'Explain why intransitive verbs have no passive',
        'Choose the agent (by) versus instrument (with) phrase correctly'
      ],
      sections: [
        {
          title: 'The Conversion Algorithm',
          content: 'Five steps, always in order: (1) move the object to subject position and set its pronoun case (him→he); (2) copy the active TENSE onto the auxiliary BE; (3) change the main verb to its past participle; (4) place the old subject after "by" in object case (I→me, she→her); (5) keep every other element — time, place, manner — exactly where the sentence flows best. "The boys kicked the ball hard yesterday" → "The ball was kicked hard by the boys yesterday."',
          bulletPoints: [
            'Pronoun map used in transformation: I→me, we→us, he→him, she→her, they→them, you→you (and back).',
            'Modals keep their own passive frame: can→can be eaten, must→must be done, should have → should have been done.',
            'The only verb that changes form is the MAIN verb (to V3); auxiliaries multiply but never swap tense.',
            'Questions transform too: "Did the rain spoil the crops?" → "Were the crops spoiled by the rain?"'
          ],
          keyTakeaway: 'Same tense, new angle: BE takes the old tense, V3 takes the old meaning.',
          realWorldExample: 'An ECGB exam instruction: "Candidates are warned that scripts WILL BE SEIZED if phones are seen" — future perfect-style "will be seized" with the agent (invigilators) omitted because it is obvious.'
        },
        {
          title: 'Passives Across the Tense Grid',
          content: 'The passive BE mirrors the active exactly: present simple is/am/are + V3 ("People sell kenkey daily" → "Kenkey IS SOLD daily"); present continuous is/am/are BEING + V3; present perfect has/have BEEN + V3; past continuous was/were BEING + V3 ("They were repairing the road" → "The road WAS BEING REPARIED"); past perfect had been + V3; future will be + V3; future-in-the-past would be + V3. The rare be going to passive: "is going to be built".',
          bulletPoints: [
            'Continuous forms insert BEING; perfect forms insert BEEN; both stack: "had been being repaired" is grammatical but clumsy — avoid in essays.',
            'Habitual present with plural subject/object keeps ARE: "Farmers pick the pods" → "The pods ARE PICKED."',
            'Checklist for objective items: count the auxiliaries — a correct passive has exactly ONE more "be-family" word than the active had.',
            'The agent usually vanishes when the subject was vague: "Someone stole my bag" → "My bag was STOLEN" (by someone adds nothing).'
          ],
          keyTakeaway: 'Learn the eight regular passive frames plus modal passive; that covers every exam transformation.',
          realWorldExample: 'A Akosombo Dam bulletin: "Water HAS BEEN RELEASED; turbines ARE BEING INSPECTED; the spill WILL BE MONITORED until dusk." — three different passive aspects in one official statement.'
        },
        {
          title: 'Two Objects, Phrasals, and the By-Phrase Family',
          content: 'Ditransitive verbs (give, send, show, offer, pay, promise, teach, tell, bring, lend, award) allow two passives — promote the PERSON ("Kofi was given a gift") or the THING ("A gift was given to Kofi"); person-promotion is more natural English. Prepositions that belong to the verb never drop: "She laughed at the idea" → "The idea was laughed AT." Phrasal verbs keep particles whole: "looked after", "put off", "called off". In the by-phrase family, BY marks the doer; WITH marks the tool; and "by means of" marks method.',
          bulletPoints: [
            'Causative have/get something done is a passive cousin: "Ama had her braids done in Kumasi."',
            '"People say that..." → "It is said that..." and "He is said to be..." — a WAEC favourite transformation.',
            '"They make us work" → passive of bare infinitive restores TO: "We are made TO work."',
            'Let-imperative passive: "Wash the hands" → "Let the hands BE WASHED."'
          ],
          keyTakeaway: 'Promote a person first, keep verb particles, and restore "to" after made/seen/heard in the passive.',
          realWorldExample: 'A wedding report: "The bride was presented WITH gifts by the elders; the couple were showered WITH blessings." — instrument-with even in figurative use, by for real doers.'
        },
        {
          title: 'When Passive Wins, When Active Wins',
          content: 'Use passive when: the doer is unknown, obvious, or unimportant; you want the receiver in focus or to link sentences (topic continuity); formal/scientific/official register demands impersonality. Use active when: the doer matters ("The headmistress announced the results"), in narrative momentum, or when passive would hide responsibility — WAEC composition examiners deduct from EXPRESSION for passives used to dodge clarity ("Mistakes were made in the report" when "I made a mistake" is honest).',
          bulletPoints: [
            'Science reports love passive: "The solution was heated" — the heater is irrelevant.',
            'News headlines mix: active for attributed blame, passive for casualties ("three people were injured").',
            'Over-use test: if you count more than one passive in three consecutive essay sentences, rewrite one actively.',
            'Intransitive verbs (happen, die, arrive, occur, appear, sleep) refuse the passive: *the accident was happened — a top-ten WAEC error.'
          ],
          keyTakeaway: 'Passive = focus on the affected; active = focus on the actor; choose deliberately.',
          realWorldExample: 'A district assembly report: "A new block of classrooms WAS CONSTRUCTED at Sefwi Wiawso (doer unknown/irrelevant); the contractor DELIVERED it in June (doer now matters for praise/blame)."'
        }
      ],
      commonMistakes: [
        'Wrong participle: *"The fish was EAT by the cat" — always V3 (eaten), never the base or past simple form.',
        'Tense drift during transformation: converting "has collected" to "was collected" instead of "has been collected".',
        'Dropping the verb particle: *"The meeting was looked" for "looked into" — the particle must survive.',
        'Passiving an intransitive verb: *"a stolen was happened", "the baby was died".',
        'Losing the "to" after perception/causative verbs in the passive: "He was seen ENTER" instead of "seen to enter".',
        'Forgetting "by" with a pronoun in object form: "The letter was written by I" — by ME.'
      ],
      wassceExamTips: [
        'In transformation questions, write the tense name above your draft first ("present perfect →") so the BE-form is chosen deliberately: has/have been + V3.',
        'If the instruction says "begin with the words given", the given opening forces which object to promote — follow it exactly and drop the other version.',
        'The "It is said that / He is said to" pattern appears almost every series; practise four verbs: say, think, believe, report.',
        'For agent choice: WHO did it = by; WHAT was used = with; the exam loves "cut WITH a knife BY the robber" order — instrument then agent.',
        'In Paper 2 reports and formal letters, use passive 2-3 times for impersonal authority ("the item was recovered"), but keep narrative points active for Organisation marks.'
      ],
      summaryChecklist: [
        'Can I produce the passive of any of the twelve tense frames on demand?',
        'Can I give both passive versions of "The teacher rewarded Ama a prize"?',
        'Can I keep the particle in "They did away with the rule → The rule was done away WITH"?',
        'Can I restore "to" in "We heard them sing → They were heard TO sing"?',
        'Can I explain when a news headline should choose passive over active?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-pass-1',
        title: 'Full Transformation with Time Phrase and Modal',
        problem: 'Change into passive voice: "Someone will have damaged your phone before the repair shop opens."',
        stepByStepSolution: [
          'Step 1 (M1): Object to subject: "your phone" (singular — watch the auxiliary number later).',
          'Step 2 (M1): Identify active tense: "will have damaged" = future perfect → passive frame: WILL HAVE BEEN + V3.',
          'Step 3 (A1): Main verb to participle: damaged (already V3 form) → "will have been damaged".',
          'Step 4 (A1): Agent "someone" is vague: delete it (optionally "by someone" but deletion is better style).',
          'Step 5 (A1): Attach the time clause unchanged: "Your phone will have been damaged before the repair shop opens."'
        ],
        keyTakeaway: 'Preserve the tense skeleton exactly — future perfect passive = will + have + been + V3.'
      },
      {
        id: 'ex-shs1-eng-pass-2',
        title: 'Two-Object Passive with Perception Verb',
        problem: 'Convert both sentences to passive: (a) "The panel awarded the girl a scholarship." (b) "We saw the boys enter the hall."',
        stepByStepSolution: [
          'Step 1 (M1): (a) two objects: "the girl" (person) and "a scholarship" (thing); two passives possible.',
          'Step 2 (A1): Person-promoted: "The girl WAS AWARDED a scholarship (by the panel)." Thing-promoted: "A scholarship WAS AWARDED TO the girl."',
          'Step 3 (M1): (b) see + object + bare infinitive ("enter") — in the passive the infinitive regains TO.',
          'Step 4 (A1): "The boys WERE SEEN TO ENTER the hall (by us)."',
          'Step 5 (B1): Retention checks: article shift (the/a unchanged), agent "by us" optional and usually deleted.'
        ],
        keyTakeaway: 'Person-first passive reads better; seen/made/heard + bare infinitive becomes seen-to/made-to/heard-to in the passive.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t2-passive',
      topicId: 'shs1-eng-t2-passive-voice',
      title: 'Voice Transformation Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-pv-1',
          quizId: 'quiz-shs1-eng-t2-passive',
          questionText: 'The passive of "The mechanic is repairing the bus" is:',
          optionA: 'The bus is repaired by the mechanic.',
          optionB: 'The bus is being repaired by the mechanic.',
          optionC: 'The bus was being repaired by the mechanic.',
          optionD: 'The bus has been repaired by the mechanic.',
          correctOption: 'B',
          subConcept: 'Present continuous passive',
          explanation: 'Active is present continuous → passive keeps it with IS BEING + V3: "is being repairing" → "is being repaired".',
          remediationTip: 'Continuous? insert BEING. Perfect? insert BEEN. Do not shift the time.'
        },
        {
          id: 'q-shs1-eng-pv-2',
          quizId: 'quiz-shs1-eng-t2-passive',
          questionText: 'Choose the correct passive of "They have cancelled the match."',
          optionA: 'The match has been cancelled.',
          optionB: 'The match was cancelled.',
          optionC: 'The match is cancelled.',
          optionD: 'The match had been cancelled.',
          correctOption: 'A',
          subConcept: 'Present perfect passive',
          explanation: 'have cancelled → has been cancelled (subject now singular "The match", so HAVE → HAS).',
          remediationTip: 'Re-choose have/has AFTER moving the object — number must match the NEW subject.'
        },
        {
          id: 'q-shs1-eng-pv-3',
          quizId: 'quiz-shs1-eng-t2-passive',
          questionText: 'Which sentence CANNOT be made passive?',
          optionA: 'The nurse comforted the child.',
          optionB: 'The accident happened at dawn.',
          optionC: 'Someone stole my umbrella.',
          optionD: 'They laughed at the suggestion.',
          correctOption: 'B',
          subConcept: 'intransitive verbs have no passive',
          explanation: '"Happen" is intransitive — no object to promote. A, C and D (prepositional verb) all passivise.',
          remediationTip: 'Find the object first. No object = no passive.'
        },
        {
          id: 'q-shs1-eng-pv-4',
          quizId: 'quiz-shs1-eng-t2-passive',
          questionText: '"The thief was arrested ______ the police ______ a baton."',
          optionA: 'with, by',
          optionB: 'by, with',
          optionC: 'by, by',
          optionD: 'with, with',
          correctOption: 'B',
          subConcept: 'agent and instrument',
          explanation: 'Police = agent (by); baton = instrument (with): "arrested BY the police WITH a baton."',
          remediationTip: 'Who acted = by; what tool = with.'
        },
        {
          id: 'q-shs1-eng-pv-5',
          quizId: 'quiz-shs1-eng-t2-passive',
          questionText: 'The passive of "People say that the chief owns thirty houses" using "It" is:',
          optionA: 'It is said that the chief owns thirty houses.',
          optionB: 'It was said that the chief owns thirty houses.',
          optionC: 'It said that the chief owns thirty houses.',
          optionD: 'The chief is said that he owns thirty houses.',
          correctOption: 'A',
          subConcept: 'impersonal reporting passive',
          explanation: 'Present reporting "people say" → "It IS SAID that..."; the alternative raising form would be "The chief IS SAID TO OWN..." (D wrongly keeps that-clause after the chief).',
          remediationTip: 'Two templates only: It is said THAT + clause / He is said TO + infinitive. Never both.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t2-reported-speech',
    subjectId: 'english',
    level: 'SHS 1',
    term: 2,
    orderIndex: 10,
    title: 'Direct and Indirect (Reported) Speech',
    description: 'Reporting statements, questions, commands and exclamations: backshift of tenses, pronoun and time-word changes, universal-truth exception, and the question-word/word-order trap.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=HnHYkIS-Eds',
    youtubeId: 'HnHYkIS-Eds',
    keyNotes: `• Four moving parts in every report: REPORTING VERB, PRONOUNS, TENSE (backshift), TIME/PLACE words.
• Backshift ladder (when reporting verb is past):
  present simple → past simple; present/past continuous → past continuous; past simple → past perfect; present perfect → past perfect; will → would; can → could; may → might; must → must/had to.
  NO backshift: past perfect, would/could/might/should (already past modals).
• Time & place shifts: now→then; today→that day; yesterday→the day before/previous day; tomorrow→the next/following day; here→there; this→that; these→those; ago→before; last week→the week before.
• Reports by sentence type:
  - Statement: that-clause ("said that...").
  - Yes/No question: IF / WHETHER + normal statement order.
  - WH question: keep the WH word, use STATEMENT order (no do-support, no inversion).
  - Command/request: told/asked/ordered + person + TO + infinitive; negative: NOT TO.
  - Exclamation: exclaimed with joy/sorrow that... / begged / prayed.
• Universal truths and habitual facts keep the tense: "The teacher said the earth revolves round the sun."`,
    detailedNotes: {
      overview: 'Reported speech is a four-gear machine: every item must be shifted together or the sentence grinds. WAEC Paper 1 Section B tests it as sentence transformation, and comprehension summary items quietly reuse it when learners report a speaker\'s words — mastering the gears here earns marks in two papers.',
      introduction: 'Think of the reporting clause as a camera moved back in time: once the report verb is past ("said"), everything inside the picture also recedes one step into the past. When the camera never moves (present reporting: "he says"), nothing shifts.',
      realWorldContext: 'A market gossip chain in Kejetia is pure reported-speech practice: "Ama said that Kojo had sold the tomatoes the day before and would return on the following Monday" — every item of that sentence (tense, time word, modal) is exactly what WAEC demands students produce mechanically.',
      objectives: [
        'Convert statements, questions, commands and exclamations between direct and indirect speech',
        'Apply the full tense-backshift table including modals and no-backshift cases',
        'Change pronouns and possessives accurately from the reported viewpoint',
        'Shift time and place words (now→then, yesterday→the day before, here→there)',
        'Apply the universal-truth and still-true exception to backshift'
      ],
      sections: [
        {
          title: 'Statements: The Four-Gear Conversion',
          content: 'Change (1) reporting verb and remove quotation marks and commas; (2) pronouns to the reporter\'s view (I→he/she, my→his/her, we→they); (3) tense one step back per the ladder; (4) time/place words. "Ama said, \'I am cooking kenkey today\'" → "Ama said that she was cooking kenkey that day." For statements reported with a PRESENT verb ("Ama says..."), the tense stays: "she is cooking kenkey today" remains.',
          bulletPoints: [
            'say vs tell: tell needs a person (told ME); say takes that-clause without a person (said THAT).',
            'add/remark/reply/explain are accepted reporting verbs for variety in transformation items.',
            'the word "that" is optional but WAEC mark-schemes always accept it; keep it while learning.',
            'never change the number of the verb\'s subject accidentally: "He said he WERE" is a concord slip — was.'
          ],
          keyTakeaway: 'Four gears move together: verb, pronoun, tense, time/place.',
          realWorldExample: 'A radio jingle report: "The presenter said the show would return the following week" — from "We will return next week!" — all four gears shifted.'
        },
        {
          title: 'Questions: Order, Not Question-Marks',
          content: 'A reported question is an embedded STATEMENT: subject before verb, no auxiliary DO, no inversion, no question mark. Yes/No questions use IF/WHETHER: "He asked, \'Are you tired?\'" → "He asked (me) IF I was tired." WH questions keep the question word and then straighten the order: "Where do you live?" → "He asked where I lived." "Who HAS finished?" keeps its present perfect if the moment of asking is still relevant, but standard transformation backshifts to had.',
          bulletPoints: [
            'The reporting verb becomes ASKED / ENQUIRED / WANTED TO KNOW (never "asked that").',
            'Removal of the question mark is a required punctuation change in written answers.',
            'If the answer\'s tense matters: "When did you buy it?" → "He asked when I HAD bought it" (past simple in the question → past perfect).',
            '"Do you think that..." style double questions: "What does she want?" asked by a man → "The man asked what she wanted."'
          ],
          keyTakeaway: 'Reported questions are statements wearing question clothing — flatten the word order.',
          realWorldExample: 'A parent at reporting time: "The visitor asked whether the boy had completed the assignment" — from \'Has he completed the assignment?\'.'
        },
        {
          title: 'Commands, Requests, Advice and Exclamations',
          content: 'Imperatives collapse to infinitives with the addressee as object: tell/order/command/advice + person + (not) + to-infinitive. \'Close the door\' → "He told me TO close the door." \'Don\'t run\' → "He warned us NOT to run." Requests with please shift to asked...to. Exclamations lose the interjection and gain an emotion phrase: "Alas! My brother has died!" → "He exclaimed with sorrow that his brother had died." "Hurra! We have won" → "They shouted with joy that they had won."',
          bulletPoints: [
            'Reporting verb upgrades: tell → order (military/strict), advise (helpful), beg/pray (pleading), warn (danger), urge.',
            '"Let\'s go" → suggested GOING / suggested that they should go.',
            '"Please help me" → asked me TO help him/her.',
            'Proverbs/commands in questions: WAEC sometimes mixes — trust the punctuation: ? ends mean question gears, ! means exclamation gears.'
          ],
          keyTakeaway: 'Commands = to-infinitive report; exclamations = emotion + that-clause.',
          realWorldExample: 'A coach\'s sideline line later quoted: "The coach had told the players not to crowd the penalty box" — from \'Don\'t crowd the box!\'.'
        },
        {
          title: 'Exceptions and Frozen Forms',
          content: 'No backshift for: universal truths and scientific facts ("The teacher said that water BOILS at 100°C"); habitual statements still true now ("He said he RIDES to school daily" — acceptable); past perfect and modal-only forms (would, could, might, should) which cannot go further back; unreal conditionals ("If I were rich, I would travel" reported unchanged except pronouns). Deixis note: if the reporting moment is still inside the original time ("today" when said today, reported today), WAEC accepts keeping it, but the safe exam habit is to shift.',
          bulletPoints: [
            '"said" + no "that": optional; "enquired" cannot take a that-clause — only if/wh-questions.',
            'Time clause order: "would" reports: \'I will come tomorrow\' → "he said he WOULD come the following day."',
            'must → must (obligation still standing) or had to (shifted); WAEC accepts either with explanation.',
            'Quotation marks, comma before them, and capitals all disappear in the report — losing any of these is a mechanical-accuracy cut.'
          ],
          keyTakeaway: 'Backshift everything EXCEPT what already sits at the past limit (past perfect, would/could) and timeless truth.',
          realWorldExample: 'A geography teacher\'s line quoted in an exam: "The lesson stated that the sun rises in the east" — no backshift, and no marks.'
        }
      ],
      commonMistakes: [
        'Keeping question order in reported questions: *"He asked where did I live" — must be "where I lived".',
        'Forgetting time-word shifts: reporting "yesterday" as "yesterday" instead of "the day before".',
        'Using "asked that" instead of "asked if/whether".',
        'Mixing say/tell: *"He said me" — told me / said to me.',
        'Backshifting past perfect ("had gone") to a double-pluperfect (*"had had gone").',
        'Changing a command to a that-clause with should when the simple infinitive is required: "He ordered me to leave" preferred over "that I should leave."'
      ],
      wassceExamTips: [
        'Solve with a checklist written beside your answer: VERB | PRONOUN | TENSE | TIME | PUNCTUATION — five ticks, full marks.',
        'For exclamation transformations, learn the emotion nouns: joy (hurra), sorrow (alas), surprise (wow/wonderful), anger (shame), disgust — "exclaimed with ___".',
        'A reporting verb in present tense ("says", "tells") is the examiner\'s signal: DO NOT backshift; only pronouns and time-words may shift.',
        'In objectives, the wrong option usually breaks exactly one gear (e.g., correct tense but unshifted "tomorrow") — hunt the unshifted element.',
        'For summary questions that ask you to report a speaker, indirect speech saves words: convert quoted dialogue into "said that..." clauses to respect word limits.'
      ],
      summaryChecklist: [
        'Can I state the backshift for each of the eight active tense frames and five modals?',
        'Can I report a yes/no question using if and statement order?',
        'Can I convert \'Don\'t be late\' into "He warned us not to be late"?',
        'Can I list the nine time/place shifts (now/then, here/there, this/that...)?',
        'Can I explain why "The teacher said the earth revolved/revolves round the sun" both pass?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-rs-1',
        title: 'Statement with Time Words and Modal',
        problem: 'Report: Ama said, "I will meet you here tomorrow."',
        stepByStepSolution: [
          'Step 1 (M1): Reporting verb "said" is past → backshift gear ON; drop quotes and comma.',
          'Step 2 (M1): Pronouns: I → she; you → me (the reporter is addressed); here → there; tomorrow → the next/following day.',
          'Step 3 (A1): Tense: will → would.',
          'Step 4 (A1): Assemble: "Ama said that she would meet me there the following day."',
          'Step 5 (B1): Audit all five gears: verb (said) / pronoun (she-me) / tense (would) / time (following day) / place (there). All shifted.'
        ],
        keyTakeaway: 'Five gears: verb, pronoun, tense, time-place words, punctuation — tick each one before moving on.'
      },
      {
        id: 'ex-shs1-eng-rs-2',
        title: 'Question + Command Combo',
        problem: 'Transform: The trainer asked, "Why are you tired?" and said, "Do not give up."',
        stepByStepSolution: [
          'Step 1 (M1): Question gear: keep the WH word "why", drop the inversion and the question mark, and straighten to statement order with the addressee as subject.',
          'Step 2 (A1): "The trainer asked why I/we were tired" — past continuous in reported statement order: were tired.',
          'Step 3 (M1): Command gear: said + addressee + negative infinitive: Do not give up → told us NOT TO give up.',
          'Step 4 (A1): Combined report: "The trainer asked why we were tired and told us not to give up."',
          'Step 5 (B1): Punctuation audit: question mark removed (now a statement), "that" not used after asked + wh-word.'
        ],
        keyTakeaway: 'WH questions become embedded statements; imperatives become told + to-infinitive — and the question mark dies.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t2-reported',
      topicId: 'shs1-eng-t2-reported-speech',
      title: 'Reported Speech Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-rs-1',
          quizId: 'quiz-shs1-eng-t2-reported',
          questionText: 'Kofi said, "I visited Cape Coast last week." → Kofi said that he ______ Cape Coast ______.',
          optionA: 'visited, last week',
          optionB: 'had visited, the week before',
          optionC: 'has visited, the week before',
          optionD: 'had visited, last week',
          correctOption: 'B',
          subConcept: 'past simple backshift + time shift',
          explanation: 'Past simple → past perfect (had visited); "last week" → "the week before".',
          remediationTip: 'One step back in time, and the calendar word moves with it — tense and time-word always pair up.'
        },
        {
          id: 'q-shs1-eng-rs-2',
          quizId: 'quiz-shs1-eng-t2-reported',
          questionText: 'Report the question: "Where do you keep your tools?"',
          optionA: 'He asked where do you keep your tools.',
          optionB: 'He asked where did you keep your tools?',
          optionC: 'He asked me where I kept my tools.',
          optionD: 'He asked that where I kept my tools.',
          correctOption: 'C',
          subConcept: 'WH question statement order',
          explanation: 'Reported WH questions keep the question word but adopt statement order and backshift: "where I kept...". A keeps question order; D wrongly adds "that".',
          remediationTip: 'After the WH word, write the subject FIRST: where + I + kept.'
        },
        {
          id: 'q-shs1-eng-rs-3',
          quizId: 'quiz-shs1-eng-t2-reported',
          questionText: '"Please wait outside," she said to us.',
          optionA: 'She said us to wait outside.',
          optionB: 'She asked us to wait outside.',
          optionC: 'She asked that we wait outside.',
          optionD: 'She told for us to wait outside.',
          correctOption: 'B',
          subConcept: 'request as ask + to-infinitive',
          explanation: 'A polite command becomes "asked + person + to-infinitive". "Said us" is illegal — say takes no indirect object.',
          remediationTip: 'Tell/ask/order/warn + PERSON + to...; say never takes a bare person after it.'
        },
        {
          id: 'q-shs1-eng-rs-4',
          quizId: 'quiz-shs1-eng-t2-reported',
          questionText: 'Which sentence needs NO tense change in reporting?',
          optionA: 'He said, "I have finished."',
          optionB: 'The teacher said, "Two and two make four."',
          optionC: 'She said, "I was sleeping."',
          optionD: 'They said, "We will come."',
          correctOption: 'B',
          subConcept: 'universal truth exception',
          explanation: 'Universal truths keep the present tense ("make"), not backshifted to made.',
          remediationTip: 'Science and proverbs refuse the backshift ladder: "The teacher said honesty is the best policy" is accepted.'
        },
        {
          id: 'q-shs1-eng-rs-5',
          quizId: 'quiz-shs1-eng-t2-reported',
          questionText: 'The monitor said, "Would you kindly close the door?" → The monitor ______',
          optionA: 'said me to close the door',
          optionB: 'requested me to close the door',
          optionC: 'asked that did I close the door',
          optionD: 'told to close the door',
          correctOption: 'B',
          subConcept: 'polite request reporting',
          explanation: '"Would you kindly..." is a request: "requested me to close the door." A uses the illegal "said me"; D lacks the person.',
          remediationTip: 'Match the reporting verb to the social act: order (authority), request/ask (polite), advise (help), warn (danger).'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t2-informal-letters',
    subjectId: 'english',
    level: 'SHS 1',
    term: 2,
    orderIndex: 11,
    title: 'Composition: Writing the Informal Letter',
    description: 'Full WAEC-format informal letter — address, date, greeting, conversational body, closing — with tone control, the marking scheme (content, organisation, expression, mechanical accuracy), and paragraph planning.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=P3k148sIiSk',
    youtubeId: 'P3k148sIiSk',
    keyNotes: `• Format (top to bottom):
  1. Sender's address, top RIGHT corner (two-three lines, no recipient name).
  2. Date on the line below the address, right side ("14th October, 2026").
  3. Salutation flush LEFT: "Dear Kwame," / "Dear Aunt Esi," (comma required).
  4. Opening paragraph: greeting + why you are writing.
  5. Body paragraphs — ONE point per paragraph; develop each with details and examples.
  6. Closing paragraph: warm wrap-up, hope, regards.
  7. Subscription: "Yours sincerely," or "Your friend," (first word capital only, comma).
  8. Signature: FIRST NAME (or first + pet name) ONLY — no surname, no (Miss/Mr).
• WAEC composition marking (50 marks): Content 10, Organisation 10, Expression 20, Mechanical Accuracy 10.
• Tone: contractions allowed (I\'m, can\'t), questions to the friend, exclamations, slang only lightly, direct address ("you will not believe...").
• NEVER: recipient\'s address, subject line, "Dear Sir", full name sign-off in an informal letter.`,
    detailedNotes: {
      overview: 'The informal letter is WAEC\'s most accessible composition — the format is short, the tone is yours — yet students still lose whole marks on subscription errors, missed content points, and formal stiffness. This topic converts the letter into a repeatable checklist.',
      introduction: 'Write it as a real letter to a real friend. The moment you "answer" your friend inside the letter (asking about him, reacting to his news), your tone, paragraphing, and length all become natural.',
      realWorldContext: 'Ghana is a letter-writing culture where WhatsApp meets postage: a SHS 1 girl in Sunyani writing to her cousin in Takoradi about her new school blends exactly the voice WAEC rewards — warmth, shared jokes ("remember the mango tree you claimed?"), news, requests — the kind of message families still post during long vacations.',
      objectives: [
        'Produce the correct informal letter format from address to signature',
        'Match content points to the question and develop each with details',
        'Sustain a friendly, conversational register with appropriate contractions and direct address',
        'Organise the letter into opening/body/closing paragraphs with linking',
        'Protect mechanical-accuracy marks by self-checking spelling, punctuation and concord'
      ],
      sections: [
        {
          title: 'Format Mechanics: Where Every Line Lives',
          content: 'The address block (your address, top right) uses two to three short lines with logical commas, no full stops at line-ends. Directly below, the date (day-month-year with ordinal: 3rd, 4th, 21st, 22nd, 23rd — never "22th"). Salutation on the left margin ("Dear Esi,") — a comma after it is mandatory. The letter ends with the subscription at the left margin, capitalising ONLY the first word ("Yours sincerely,"), then the signature on the next line: your first name alone, or first name plus a familiar second name the recipient actually calls you by.',
          bulletPoints: [
            'No recipient address, no designation, no subject heading — those belong to formal letters only.',
            'Date styles accepted: 5th May, 2026 / 5 May 2026 / May 5, 2026 — choose ONE and stay consistent.',
            'Address may be punctuated (commas each line) or blocked (no commas) — consistency earns accuracy marks.',
            'The signature line: "Abena" or "Abena Yaa" — never "Abena Mensah (Miss)" and never your full legal name.'
          ],
          keyTakeaway: 'Right-side address + date, left-side greeting, left-side first-name signature.',
          realWorldExample: 'A WAEC model letter header: "B12 Amasato Line / Kumasi / Ashanti Region" then "23rd June, 2026" — three-line local address, correct ordinal date.'
        },
        {
          title: 'Content: Answering the Question Fully',
          content: 'Informal letter questions list three or four tasks (describe your new school, thank him for a gift, advise him on JHS entry, invite him for vacation). Content marks demand you cover EVERY point, with the DEEPEST treatment of the point the question flags first or spends most words on. Plan before writing: number the task points 1-3-4 in the margin, one body paragraph per point, each paragraph developed with a topic sentence plus two supporting details, an example, or a question back to the friend.',
          bulletPoints: [
            'A 4-line question = usually 4 content points; missing the last one caps you at roughly 6-7/10 for Content.',
            'Develop, do not list: instead of "The school is big. It has a library.", fuse + expand: "My school is huge — the library alone has three reading halls."',
            'Invent small specifics (names of teachers, the football field, hostel food) — details read as real content.',
            'End every point with a hook to the friend: "You would love the library; do you still have your old one?"'
          ],
          keyTakeaway: 'One point = one paragraph = one topic sentence plus development.',
          realWorldExample: 'Task: "tell your cousin about the harvest at your uncle\'s farm in Techiman" — the content-rich letter reports tomatoes piled in crates, a broken pump, and wages paid weekly — specifics over general statements.'
        },
        {
          title: 'Tone: The Conversational Register',
          content: 'Informal voice = the language of living rooms: contractions (I\'m, haven\'t, you\'ll), exclamations ("What a surprise!"), direct address ("Guess what!"), rhetorical questions ("Can you believe it?"), friendly hyperbole ("a million mosquitoes"), phrasal verbs, and short vivid sentences. The danger is swinging into letterless stiffness: "I am writing to apprise you of the development" belongs in a formal letter. Also keep the friendship real: no abusive slang, no crude jokes — WAEC wants warmth with school discipline.',
          bulletPoints: [
            'Openings that work: "How are you? I am fine." / "You will never guess what happened!" / "Thanks for your last letter — sorry I took two months to reply."',
            'Avoid archaic filler ("Respect is due to whom it is due") — examiners now treat it as padding that kills Expression.',
            'Mix sentence lengths: one 25-word flowing sentence per paragraph shows range; keep 6-8 word punches for excitement.',
            'Use linking that sounds spoken: "Anyway,", "By the way,", "Another thing —", "Before I forget,".'
          ],
          keyTakeaway: 'Write as you talk to a friend, then tidy the punctuation.',
          realWorldExample: 'A real SHS girl\'s opening: "Akwaaba! I know you thought the zongo boys had forgotten you — well, YOUR favourite cousin has finally picked up a pen."'
        },
        {
          title: 'Closing and Self-Editing for Accuracy',
          content: 'The closing paragraph wraps: signal the end ("I must stop for now"), a final thought, regards to named family ("Give my love to Aunt Esi and the kids"), a promise or request ("write soon / I will call on Friday"), then subscription + signature. Before submission, run the mechanical pass: capital letters at sentence starts and proper nouns, the comma after salutation and subscription, apostrophes in contractions, singular-plural concord, verb tense of reported events, and no full stops in the address/date blocks.',
          bulletPoints: [
            'Each mechanical error costs a half-mark; ten tiny slips can wipe 4-5 full marks.',
            'Length discipline: aim 350-450 words for WAEC informal letters — too short loses Expression, too long breeds errors.',
            'A sign-off with a first name only also proves you understand informality — full names there also cost format credit.',
            'Read the letter ONCE mentally as if the friend will read it: anything confusing or cold gets rewritten.'
          ],
          keyTakeaway: 'Warm wrap-up + a disciplined accuracy sweep protect both halves of the score.',
          realWorldExample: 'Closing model: "Write soon and tell me about the new shop. Give my regards to Papa and Mama. Your friend, / Esi."'
        }
      ],
      commonMistakes: [
        'Adding the recipient\'s address or a subject line (copying the formal letter format).',
        'Signing with a full name plus title: "Kwame Asare (Mr)" — informal letters take the first name only.',
        'Writing "Yours Sincerely" with both capitals or with an apostrophe ("Your\'s").',
        'Missing the date, or placing it at the left, or writing "The date is 14th October" instead of the bare date.',
        'Formal tone throughout ("I hereby inform you...") which caps Expression marks.',
        'Ignoring one of the listed content points — the most common single reason for a mediocre grade.'
      ],
      wassceExamTips: [
        'Spend 5 minutes planning with the task points numbered; examiners award Content 10 only when every point is visible in order.',
        'Write the address block exactly in 3 short right-aligned lines; a sprawling address eats Organisation marks and time.',
        'Insert one idiom or proverb naturally ("as you sow...") for Expression credit, but never force it — misused proverbs backfire.',
        'Mechanical accuracy is deducted per error (half-mark): after writing, proofread ONLY for the five big killers — concord, apostrophe, capitals, date comma, and run-on sentences.',
        'If the question says "to your brother" or "to your cousin", mention that relationship at least twice (opening + closing) — it reassures the examiner you hold the correct addressee throughout.'
      ],
      summaryChecklist: [
        'Can I lay out the address, date, salutation, body, subscription and signature without looking at a model?',
        'Can I list the four WAEC marking components and their weights (10/10/20/10)?',
        'Can I rewrite a stiff sentence into conversational English in three ways?',
        'Can I build one body paragraph per task point with development?',
        'Can I run the mechanical-accuracy proofread on my own letter?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-il-1',
        title: 'Format Diagnosis: Fix the Broken Letter Frame',
        problem: 'A candidate wrote: "Dear Sir, / P. O. Box 44, Takoradi / 14 October 2026 / SUB: VISIT / Dear Kojo, ... Yours faithfully, / Ama Serwaa (Miss)." List every format error.',
        stepByStepSolution: [
          'Step 1 (M1): "Dear Sir," — formal salutation in an informal letter; also duplicated greeting later. Delete the first one.',
          'Step 2 (M1): Recipient address "P. O. Box 44, Takoradi" — informal letters carry ONLY the sender\'s address, on the RIGHT. Move and re-label.',
          'Step 3 (M1): Subject heading "SUB: VISIT" — formal-letter feature; delete.',
          'Step 4 (A1): Subscription "Yours faithfully," — wrong family; informal takes "Yours sincerely," or "Your friend,".',
          'Step 5 (A1): Signature "Ama Serwaa (Miss)" — full name + title forbidden; keep "Ama" or "Ama Serwaa" only if Serwaa is the family-used name; safest: "Ama".'
        ],
        keyTakeaway: 'Five banned formal features in informal letters: recipient address, subject, Sir/Madam salutation, faithful subscription, titled signature.'
      },
      {
        id: 'ex-shs1-eng-il-2',
        title: 'Developing a Thin Content Point',
        problem: 'Task point: "tell your friend about your new school." A weak paragraph reads: "My school is nice. It is big. I like it." Rewrite it to earn full marks.',
        stepByStepSolution: [
          'Step 1 (M1): Add a topic sentence with a hook and the friend in view: "You asked about my school — well, hold on to your chair!"',
          'Step 2 (M1): Invent concrete specifics (numbers, names, one sensory detail): "Kintampo Senior High sits on a hill; our block has eighteen classrooms and the library smells of fresh paper."',
          'Step 3 (M1): Add one event or anecdote: "On my first day the prefect mistook me for a thief because I carried my bag into the staff corridor!"',
          'Step 4 (A1): Close the paragraph by returning to the friend: "You would laugh; remember how we feared our JHS compound master?"',
          'Step 5 (A1): Final check: one paragraph, one point, conversational tone, contractions, and a question addressed to the reader.'
        ],
        keyTakeaway: 'Development = hook + specifics + anecdote + friend-connection — four sentences per point is the safe pattern.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t2-informal',
      topicId: 'shs1-eng-t2-informal-letters',
      title: 'Informal Letter Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-il-1',
          quizId: 'quiz-shs1-eng-t2-informal',
          questionText: 'Where does the sender\'s address appear in an informal letter?',
          optionA: 'Left side, under the salutation',
          optionB: 'Top right corner, above the date',
          optionC: 'Bottom left, after the subscription',
          optionD: 'Nowhere — only formal letters have addresses',
          correctOption: 'B',
          subConcept: 'Format positions',
          explanation: 'Sender\'s address top right; date beneath it; salutation flush left.',
          remediationTip: 'Draw a mental box: your details on the right (yours), greeting on the left (theirs).'
        },
        {
          id: 'q-shs1-eng-il-2',
          quizId: 'quiz-shs1-eng-t2-informal',
          questionText: 'Which subscription + signature pair is correct for an informal letter?',
          optionA: 'Yours faithfully, / Kwame Mensah (Mr)',
          optionB: 'Yours Sincerely, / Kwame',
          optionC: 'Your friend, / Kwame',
          optionD: 'Ours sincerely, / Kwame Mensah',
          correctOption: 'C',
          subConcept: 'Closing lines',
          explanation: 'Only the first word of the subscription is capitalised, and the signature is the first name. B wrongly capitalises "Sincerely".',
          remediationTip: '"Yours sincerely," — capital Y only, comma at end; then first name beneath.'
        },
        {
          id: 'q-shs1-eng-il-3',
          quizId: 'quiz-shs1-eng-t2-informal',
          questionText: 'The WAEC composition award for Expression carries how many marks out of 50?',
          optionA: '10',
          optionB: '20',
          optionC: '30',
          optionD: '15',
          correctOption: 'B',
          subConcept: 'Marking scheme',
          explanation: 'Content 10, Organisation 10, Expression 20, Mechanical Accuracy 10.',
          remediationTip: '10 + 10 + 20 + 10 = 50 — Expression is the biggest slice, so vocabulary and sentence variety pay.'
        },
        {
          id: 'q-shs1-eng-il-4',
          quizId: 'quiz-shs1-eng-t2-informal',
          questionText: 'Which opening suits an informal letter best?',
          optionA: 'I write to apprise you of my welfare.',
          optionB: 'Respect is due to whom it is due. I beg to state...',
          optionC: 'How are you? I am fine — but you won\'t believe the news I have!',
          optionD: 'Referring to your letter dated...',
          correctOption: 'C',
          subConcept: 'Register',
          explanation: 'A, B and D are formal or archaic padding; C is conversational and warm.',
          remediationTip: 'If your opening could head a letter to the district chief, it is too stiff for a friend.'
        }
      ]
    }
  },

  // =========================================================================
  // TERM 3
  // =========================================================================
  {
    id: 'shs1-eng-t3-oral-consonants',
    subjectId: 'english',
    level: 'SHS 1',
    term: 3,
    orderIndex: 12,
    title: 'Oral English: Consonant Sounds and Sound Clusters',
    description: 'The 24 consonant phonemes organised by voiced/voiceless pairs and manner of articulation, Ghanaian substitution errors (θ/f, l/r, final cluster cutting), homophones, and the pronunciation of -s and -ed endings.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=sG2njaSKlV0',
    youtubeId: 'sG2njaSKlV0',
    keyNotes: `• 24 consonants, many in voiced/voiceless PAIRS distinguished only by vocal-cord vibration:
  PLOSIVES: p-b, t-d, k-g
  FRICATIVES: f-v, θ (thin) - ð (this), s-z, ʃ (ship) - ʒ (vision), h
  AFFRICATES: tʃ (church) - dʒ (judge)
  NASALS: m, n, ŋ (sing)  |  LATERAL: l  |  APPROXIMANTS: r, w, j (yes)
• Voicing test: hand on throat — vibration = voiced (/b/, /z/, /ð/); no buzz = voiceless (/p/, /s/, /θ/).
• Ghanaian danger sounds:
  - θ/ð replaced by f/s or t/d: "think" = "fink/sink", "this" = "dis" — WAEC oral penalises.
  - Final cluster cutting: "texts" → "tek", "friends" → "frene" — keep the last consonant audible.
  - l/r merging and h dropping ("able" for "table", "appy" for "happy").
• Homophones: same sound, different spelling/meaning — knight/night, write/right, sea/see, pair/pear/pare, hear/here, one/won, four/for/fore.
• -s endings: /s/ after voiceless (cups), /z/ after voiced (bags, dogs), /ɪz/ after sibilants (buses, judges).
• -ed endings: /t/ after voiceless (walked), /d/ after voiced (played), /ɪd/ after t/d (wanted, needed).`,
    detailedNotes: {
      overview: 'Paper 3 of WASSCE English (Oral) examines consonant perception and production: identify the odd sound, spot substitution errors, read aloud with clean final clusters. Consonants are easier than vowels to master because the pairs follow a physical rule — vibration of the vocal cords.',
      introduction: 'Every consonant is defined by three coordinates: WHAT blocks the air (manner), WHERE the tongue/lips act (place), and WHETHER the throat buzzes (voicing). Learn the grid once and any "odd one out" question becomes arithmetic.',
      realWorldContext: 'A security phrase at Kotoka check-in — "six thick textbooks" — detonates every Ghanaian weak spot at once: /s/ vs /θ/, cluster /ks/, /kt/, final clusters -ft, -ks, -cts. Announcers train on exactly such tongue-twisters to stay intelligible to international pilots.',
      objectives: [
        'Group the 24 consonants into plosives, fricatives, affricates, nasals, lateral and approximants',
        'Produce and hear every voiced/voiceless pair on command',
        'Identify the phonetic reason for common Ghanaian substitutions (θ→f/s, final-cluster cutting)',
        'Apply the three pronunciation rules for plural/noun -s and regular -ed endings',
        'Pick out homophones and the odd-sound consonant in WAEC oral objective items'
      ],
      sections: [
        {
          title: 'The Consonant Grid: Manner, Place, Voicing',
          content: 'Manner families: PLOSIVES stop the air completely then release (p t k b d g); FRICATIVES squeeze air through a narrow gap (f v θ ð s z ʃ ʒ h); AFFRICATES fuse a stop + fricative into one sound (tʃ dʒ); NASALS send air through the nose (m n ŋ); the LATERAL /l/ flows around the tongue sides; APPROXIMANTS /r w j/ glide without friction. Place runs front to back: lips (p b f v m w), tongue-tip at ridge (t d l n θ ð r s z), front tongue (ʃ ʒ j tʃ dʒ), back of tongue (k g ŋ), and /h/ at the open throat.',
          bulletPoints: [
            'Voicing pairs to drill as minimal pairs: sip/zip, fan/van, cap/gab, and think/this, which shows θ and ð as a voiceless/voiced pair.',
            'ŋ (sing) never begins an English word — that is why "ng" at the start of Ghanaian names surprises foreign ears.',
            '/h/ is the ONLY glottal fricative; dropping it ("eart" for "heart") is a perceptible oral error.',
            'The approximants w (round lips) and j (the "yes" sound) are consonants — "y" and "w" as vowel letters mislead spellers.'
          ],
          keyTakeaway: 'Name any consonant by its three coordinates: manner + place + voiced/voiceless.',
          realWorldExample: 'A drama class drill at a Kumasi SHS: "The three brothers threw thirty threads" — tongue-twister attacking θ/ð clusters, exactly the sounds Ewe/Twi-influenced mouths flatten.'
        },
        {
          title: 'Ghanaian Substitution Errors and Their Fixes',
          content: 'The three most examiner-noted interferences: (1) θ and ð replaced by f/s or t/d: "think" → "fink/sink", "brother" → "broda". The fix: tongue tip lightly BETWEEN the teeth, air for θ (voiceless), buzz for ð. (2) Final cluster cutting: "texts", "asks", "friends", "greatest" shed their last consonant; the drill is to over-articulate the tail (/ts/, /ks/, /dz/, /st/) then relax to normal clarity. (3) /l/-/r/ confusion and /l/ for /r/ or total drop: "fly" for "fly" fine, but "fwem" for "freedom" shows both cutting and substitution.',
          bulletPoints: [
            'Minimal-pair drills: thin/sin, thought/sought, borrow/narrow, light/right, floor/flew.',
            'Word-final /v/ → /f/ is common and WAEC-TOLERATED but still marked in careful speech: "of" pronounced /ɒv/, never /ɒf/, before vowels.',
            'Aspirate /h/ at word starts: house, heart, behind — a silent-h language learner should exaggerate the puff of air.',
            'No final devoicing: "bed" must not sound like "bet"; "cabs" keeps /z/.'
          ],
          keyTakeaway: 'Every accent error is a missing sound the mother tongue does not keep — train the sound, then the word.',
          realWorldExample: 'A prefect reading the assembly notice: "The NEAREST SHOPS close at FIVE" — the r/l flip turns nearest into "nearest" but shops into "shobs"; oral examiners log exactly these swaps.'
        },
        {
          title: 'Homophones: One Sound, Two Spellings',
          content: 'Homophones test both oral perception and written control: see/sea, weak/week, tale/tail, mail/male, night/knight, idle/idyll, corn/kernel, grown/groan, he\'ll/hill-type contrasts, and WAEC\'s perennial sets: to/two/too, there/their/they\'re, your/you\'re, its/is, than/then, hear/here. Oral Section questions may ask: "which word has the same pronunciation as X" — spelling must be ignored; written objectives test the meaning pairing.',
          bulletPoints: [
            'Pronounce-both-aloud discipline: if your two pronunciations match, they are homophones; if not, you have found a local variant (aunt /ɑ:nt/ vs /ænt/ — both standard, not homophones).',
            "'flour/flower', 'soul/sole' and 'piece/peace' belong in a personal list of ten pairs built each term.",
            'Some pairs vary by accent: "horse/hoarse" differ in careful BrE but merge in fast speech; WAEC follows the careful distinction.',
            'In essays the cost is a wrong word, not a wrong sound: "their/there" slips strike Mechanical Accuracy.'
          ],
          keyTakeaway: 'Oral exam: ears decide; written exam: meaning decides which spelling earns the mark.',
          realWorldExample: 'A market sign "FRESH FISH FOR SALE / SEE PRICE INSIDE" — a child reading it aloud produces the sea/see homophone live.'
        },
        {
          title: 'The -s and -ed Ending Rules',
          content: 'Regular plurals, third-person -s and possessive \'s share three sounds: /s/ after voiceless consonants (cats /kæts/, cups, books), /z/ after voiced sounds and vowels (dogs, bags, pens, girls), /ɪz/ after sibilants (buses, judges, boxes, faces). Regular past -ed mirrors this: /t/ after voiceless (walked, missed, laughed), /d/ after voiced (played, loved, carried), /ɪd/ only after t or d (wanted, needed, decided). Syllable test: "wanted" = 2 syllables, "walked" = 1.',
          bulletPoints: [
            'Method: say the base word\'s LAST sound, then add the matching tail — never look at the spelling.',
            'Adverbs from -ed adjectives are NOT past tenses: "a gifted boy" — the /ɪd/ or /t/ still follows the same sound logic.',
            '"He asked" = /ɑ:skt/ in fast speech is one syllable — cluster, not extra vowel.',
            'Third-person singular of verbs obeys the noun-plural rules: reaches /ɪz/, sleeps /s/, learns /z/.'
          ],
          keyTakeaway: 'Voice decides the ending: voiceless base → /s//t/; voiced base → /z//d/; sibilant/t/d base → /ɪz//ɪd/.',
          realWorldExample: 'A dictation drill: "The bosses passed the messages and wished the matches back" — every -s/-ed lands in the /ɪz//t/ clubs, one after another.'
        }
      ],
      commonMistakes: [
        'Substituting /s/ or /f/ for /θ/: "I go to church on Sunday" arriving as "I go to cars on Sundi" — practice the tongue-between-teeth position.',
        'Deleting the last consonant of clusters: "and" → "an", "texts" → "tek", "best" → "bes".',
        'Pronouncing every -ed as a separate syllable: "walked" as "walk-ed" (two syllables) instead of /wɔ:kt/.',
        'Voicing voiceless pairs and vice versa: "zebra" as "sebra", "very" as "fery", "peace" as "beast-p", so peace/beast-p confuses the pair.',
        'Confusing nasal ŋ with n before k: "sink" /sɪŋk/ needs the back nasal — tongue at the soft palate.',
        'Saying /wɪtʃ/ as "wich" for which/witch — the distinction is tested in minimal-pair items.'
      ],
      wassceExamTips: [
        'Oral Paper 3 Section A "same sound" items: compare the underlined CONSONANT only; words like "chemical" /k/ vs "cheese" /tʃ/ teach that "ch" splits into two sounds by word origin.',
        'For the passage-reading section, slow down on cluster endings (-sts, -nths, -lvd): final-cluster clarity is worth more points than speed.',
        'Memorise the "th" pairs WAEC recycles: think/thing/three/mother/breathe/both — voiceless in the first three, voiced in mother/breathe, both forms acceptable for "both" in connected speech.',
        'Odd-consonant-out questions: transform each option to phonemes mentally, circle the consonant, and compare ONE feature — place or voicing, not both.',
        'In the "number of syllables" items, the -ed /ɪd/ and -s /ɪz/ endings ADD a syllable ("needed" 2, "buses" 2) while /t/ and /z/ do not ("walked" 1, "dogs" 1).'
      ],
      summaryChecklist: [
        'Can I recite the 24 consonants grouped by manner of articulation?',
        'Can I produce all nine voiced/voiceless pairs and feel the throat buzz?',
        'Can I correct "dis ting" to "this thing" and explain the tongue position?',
        'Can I pronounce cups/dogs/buses and walked/played/wanted with the right tails?',
        'Can I list ten homophone pairs and use each spelling correctly in a sentence?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-cons-1',
        title: 'Odd-Consonant-Sound-Out (Oral Paper 3 Style)',
        problem: 'From A-D choose the word whose underlined consonant sound differs: A. <u>s</u>ure  B. <u>s</u>ugar  C. <u>sh</u>ip  D. <u>s</u>ea.',
        stepByStepSolution: [
          'Step 1 (M1): Convert each underlined letter to its phoneme: sure /ʃ/, sugar /ʃ/, ship /ʃ/, sea /s/.',
          'Step 2 (M1): Three words carry the palatal fricative /ʃ/; one carries the alveolar /s/.',
          'Step 3 (A1): The odd one out is D (sea).',
          'Step 4 (A1): Rule learned: letter "s" before u/re often gives /ʃ/ (sure, sugar, issue, mission), while plain initial s = /s/.',
          'Step 5 (B1): Ear-check: "ship/sea" is a recognised minimal pair in Ghanaian classrooms for exactly this contrast.'
        ],
        keyTakeaway: 'Letter "s" hides two sounds: /s/ (sea) and /ʃ/ (sure, sugar, mission) — pronounce before choosing.'
      },
      {
        id: 'ex-shs1-eng-cons-2',
        title: '-ed Ending Pronunciation Sort',
        problem: 'Sort these past forms by their ending sound: watched, played, wanted, laughed, followed, decided, carried, missed.',
        stepByStepSolution: [
          'Step 1 (M1): State the base\'s LAST sound for each: watch /tʃ/ (voiceless), play /eɪ/ (voiced vowel), want /t/, laugh /f/ (voiceless), follow /əʊ/ (voiced), decide /d/, carry /i/ (voiced), miss /s/ (voiceless).',
          'Step 2 (M1): Apply the three rules: voiceless → /t/; voiced → /d/; t/d base → /ɪd/.',
          'Step 3 (A1): /t/ club: watched, laughed, missed. /d/ club: played, followed, carried. /ɪd/ club: wanted, decided.',
          'Step 4 (A1): Syllable count check: all stay one-syllable bases except wanted/decided which GAIN a syllable ("WONT-id", "dee-SY-did").',
          'Step 5 (B1): Oral self-test: read the /t/ list then the /d/ list; your throat should buzz only on the /d/ list.'
        ],
        keyTakeaway: 'The last sound of the BASE decides the ending; only t/d bases add an extra syllable.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t3-consonants',
      topicId: 'shs1-eng-t3-oral-consonants',
      title: 'Consonants & Endings Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-cs-1',
          quizId: 'quiz-shs1-eng-t3-consonants',
          questionText: 'The pair of consonants that differ ONLY in voicing is:',
          optionA: 'p and t',
          optionB: 'f and v',
          optionC: 's and sh',
          optionD: 'm and n',
          correctOption: 'B',
          subConcept: 'voiced-voiceless pairs',
          explanation: 'f and v share the same place and manner of articulation; only voicing differs. In the other pairs the members differ in PLACE: p/t are both voiceless, s/sh are both voiceless, m/n are both voiced.',
          remediationTip: 'Hand-on-throat test: buzz on v, silence on f; the two lips-and-teeth partners are the true pair.'
        },
        {
          id: 'q-shs1-eng-cs-2',
          quizId: 'quiz-shs1-eng-t3-consonants',
          questionText: 'The final -s of "requests" is pronounced:',
          optionA: '/s/',
          optionB: '/z/',
          optionC: '/ɪz/',
          optionD: '/tsɪz/',
          correctOption: 'A',
          subConcept: '-s after voiceless sound',
          explanation: 'The base "request" ends in voiceless /t/, so the -s surfaces as voiceless /s/: "requests" /rɪˈkweɪsts/.',
          remediationTip: 'Say the base\'s last sound first: voiceless tail → /s/, voiced tail → /z/, sibilant or t/d tail → /ɪz/.'
        },
        {
          id: 'q-shs1-eng-cs-3',
          quizId: 'quiz-shs1-eng-t3-consonants',
          questionText: 'A word with the sound /ð/ is:',
          optionA: 'thin',
          optionB: 'thick',
          optionC: 'mother',
          optionD: 'birth',
          correctOption: 'C',
          subConcept: 'voiced th',
          explanation: 'mother has voiced /ð/; thin, thick and birth all carry voiceless /θ/.',
          remediationTip: 'The "little words" (the, this, that, they) and middle-of-word positions (mother, brother, weather) buzz; most starts and ends of descriptive words hiss: /θ/.'
        },
        {
          id: 'q-shs1-eng-cs-4',
          quizId: 'quiz-shs1-eng-t3-consonants',
          questionText: 'Which pair are homophones (identical pronunciation, different spelling and meaning)?',
          optionA: 'tough / cough',
          optionB: 'hear / here',
          optionC: 'beast / best',
          optionD: 'bound / found',
          correctOption: 'B',
          subConcept: 'homophones',
          explanation: 'hear and here are pronounced identically /hɪə/ — same sound, different spelling and meaning. The other pairs share spellings or rhymes but are not identical words in sound-and-meaning terms.',
          remediationTip: 'Say both aloud: identical sound + different meaning = homophone.'
        },
        {
          id: 'q-shs1-eng-cs-5',
          quizId: 'quiz-shs1-eng-t3-consonants',
          questionText: '"Wanted" and "walked" — how many syllables does each have?',
          optionA: 'both one',
          optionB: 'wanted two, walked one',
          optionC: 'wanted one, walked two',
          optionD: 'both two',
          correctOption: 'B',
          subConcept: '-ed syllable rule',
          explanation: 'Base ends in /t/ → /ɪd/ adds a syllable: WANT-ed. "Walked" ends voiceless /k/ → /t/ tail, still one syllable.',
          remediationTip: 'Only t/d bases gain a syllable in the past: wanted, needed, decided — clap it out.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t3-word-formation',
    subjectId: 'english',
    level: 'SHS 1',
    term: 3,
    orderIndex: 13,
    title: 'Word Formation: Prefixes, Suffixes and Vocabulary Growth',
    description: 'Building nouns, verbs, adjectives and adverbs with derivational prefixes and suffixes, negative prefixes, stress shifts in derived words, and using formation knowledge in comprehension and cloze.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=sYvyp87Btk8',
    youtubeId: 'sYvyp87Btk8',
    keyNotes: `• Root vs affix: "unbreakable" = un- (prefix) + break (root) + -able (suffix). Prefixes change MEANING; suffixes usually change CLASS (and often stress).
• Negative prefixes: un- (happy→unhappy), in- (able→unable), im- before p/m/b (polite→impolite, possible→impossible), il- before l (legal→illegal), ir- before r (regular→irregular), dis- (agree→disagree, honest→dishonest), mis- = wrong(ly) (spell→misspell,understand→misunderstand), non- (sense→nonsense).
• Common suffix families:
  - NOUNS: -tion/-sion (educate→education), -ment (pay→payment), -ness (kind→kindness), -ity (pure→purity), -er/-or/-ant/-ee (teach→teacher, employ→employee), -ship (friend→friendship), -hood (child→childhood).
  - ADJECTIVES: -ful (care→careful), -less (care→careless), -able/-ible (wash→washable), -ive (act→active), -ous (danger→dangerous), -al (nature→natural), -ic (hero→heroic).
  - VERBS: -ize/-ise (modern→modernize), -ify (pure→purify), -en (wide→widen, dark→darken).
  - ADVERBS: -ly (slow→slowly); spelling: happy→happily, entire→entirely, true→truly.
• Stress shift: electRICity, phoTOGraphy, eduCAtion, COMfortable — suffixes drag the stress; test word class by where the stress falls.`,
    detailedNotes: {
      overview: 'Word formation turns a limited vocabulary into an enormous one: knowing that "decide" can wear five outfits — decision, decisive, decisively, indecisive, undecided — doubles your exam vocabulary instantly. WAEC tests formation in Paper 1 cloze tasks, comprehension "find a word which means" items, and — indirectly — every essay through vocabulary range.',
      introduction: 'Treat affixes as legal identities: every prefix and suffix has a list of words it may marry. The marriage list is small and highly repeated in exams, so memorising fifteen suffix families is worth more than memorising a hundred random words.',
      realWorldContext: 'A Ghana Foods Bulletin headline — "COCOA PRODUCTION: UNPREDICTABLE RAINS DELAY SELLING, RAISE CONCERN IN THE SUIKO DISTRICT" — stacks production, unpredictable, delay, selling, concern: five derived words that a cocoa-farm family meets in one market morning.',
      objectives: [
        'Form nouns, adjectives, verbs and adverbs from a given root using correct suffixes',
        'Apply the negative prefix selection rules un-/in-/im-/il-/ir-/dis-/mis-/non-',
        'Adjust spelling when suffixes attach (y→i, drop silent e, double consonants)',
        'Shift word stress correctly in common derived families',
        'Use formation clues to guess the meaning of unfamiliar words in comprehension passages'
      ],
      sections: [
        {
          title: 'Suffix Families: Changing the Word Class',
          content: 'Suffixes are the class-changers. Noun-makers: -tion/-ation/-sion (educate→education), -ment (agree→agreement), -ness (aware→awareness), -ity/-ty (responsible→responsibility), -ance/-ence (attend→attendance), -er/-or/-ar/-ant/-ee (one who/one acted upon: employer vs employee). Adjective-makers: -ful, -less, -ous, -al, -ic, -able/-ible, -y (sun→sunny), -ish (child→childish). Verb-makers: -ize/-ise, -ify, -en (short→shorten). Adverb-maker: -ly, built on the adjective (quick→quickly).',
          bulletPoints: [
            'The SAME root supports different families: decide → decision (n), decisive (adj), decisively (adv), decide (v), indecisive (neg adj).',
            '-ee = receiver, -er/-or = doer: employee/employer, trainee/trainer, examinee/examiner.',
            '-able survives from verbs whose object can "be -ed": readable, washable; impossible/visible come from Latin -ible.',
            'Double-suffix chains: friend → friendly → unfriendliness — every English noun can grow into two or three steps.'
          ],
          keyTakeaway: 'Spot the suffix, predict the class: -ment/-tion nouns, -ful/-able adjectives, -ize/-en verbs, -ly adverbs.',
          realWorldExample: 'A spelling-be list: "careless, carelessness, careful, carefully" — one root, one family, four class shifts in four marks.'
        },
        {
          title: 'Negative Prefixes: Choosing the Right No',
          content: 'un- negates adjectives (unfair, unhappy) and reverses verbs (lock/unlock, do/undo). in- and its assimilated twins handle Latinate adjectives and their nouns: im- before p/m/b (polite→impolite, possible→impossible), il- before l (legal→illegal), ir- before r (regular→irregular, responsible→irresponsible); ability→inability. dis- opposes verbs and some adjectives (appear→disappear, honest→dishonest, agree→disagree). mis- means wrongly (judge→misjudge, spell→misspell, lead→misleading). non- is the neutral not-a prefix (non-violent, non-member, nonsense).',
          bulletPoints: [
            'Assimilation rule of thumb: match the first LETTER of the root (possible→im-, legal→il-, regular→ir-).',
            'Some words take ONLY one form: "unforgettable" (never *inforgettable); memorise the odd ones.',
            'A double negative is not a negation: "not unhappy" = rather happy (litotes).',
            'The WAEC meaning-trap pair: "uninterested" (bored) versus "disinterested" (impartial) — same root, different senses, a classic objective item.'
          ],
          keyTakeaway: 'The root\'s first sound picks the negative prefix: p/m/b → im-, l → il-, r → ir-, else in-/un-/dis-/mis-/non-.',
          realWorldExample: 'A voter card note: "IRRESPONSIBLE choices bring ILLEGAL consequences" — the r and l assimilation shown live.'
        },
        {
          title: 'Spelling Adjustments When Affixes Land',
          content: 'Four habits cover most errors: (1) Final y changes to i before most suffixes — merry→merrier, happy→happiest, study→studies, beauty→beautiful — BUT y is kept before -ing (studying, carrying) and in the -ness family (happiness, kindness). (2) Silent e drops before a vowel suffix: move→moving, hate→hateful, lone→loneliness; e is KEPT to protect a soft c/g (changeable, noticeable) and in the small set surely, lately, rudely. (3) Double the final consonant in a one-syllable or finally-stressed CVC word: big→bigger, begin→beginning, occur→occurrence, prefer→preferred; do NOT double when the stress is not final: visit→visiting, benefit→beneficial (BrE still doubles an unstressed -l: traveller, labelled — a favourite WAEC spelling item). (4) -able versus -ible must simply be learned: washable, readable, but visible, possible, terrible.',
          bulletPoints: [
            'advice/advise: the noun keeps c, the verb takes s; practice/practise (BrE verb with s) follow the same pattern.',
            '-ful drops one l when it attaches: wonder→wonderful, care→careful (but full-of: handful keeps the hyphen-less l pair in "full" as a separate word).',
            'The silent e survives before -ment: arrangement, acknowledgement, enrichment — never *arrangment.',
            'Double consonants after short stressed vowel: regret→regrettable, plan→planning; but NOT when stress is elsewhere: travel→traveller (BrE keeps two l, a common WAEC spelling item).'
          ],
          keyTakeaway: 'Learn the four spelling habits (y→i, e-dropping, consonant doubling, l-twins) and derived words stop being misspelt.',
          realWorldExample: 'A notice board: "IMPORTANT: attendance REGISTER will be maintained — latecomers will be marked ABSENT" — three -ance/-ent/-ant formations in one line.'
        },
        {
          title: 'Stress Shifts and Meaning in Reading',
          content: 'Derivation drags the stress like a magnet: PHO-tograph → pho-TOG-ra-phy → pho-to-GRAPH-ic; ED-u-cate → ed-u-CA-tion. The suffix is the clue: -tion, -sion, -ic, -ity and -ian take no stress themselves but pull it to the syllable IMMEDIATELY BEFORE them — naTION, demoCRAtion, eLECtric, puRITY, muSICian. Prefixes and adjective suffixes such as -less and -ful leave the root stress untouched: UNHAPPY, CARELESS, WONderful. In fast speech some long words shrink (COMF-ta-ble), but in the oral exam give every written syllable its full value unless the dictionary marks it silent.',
          bulletPoints: [
            'The penultimate law: with -tion/-ic/-ian the beat lands one syllable before the suffix — eduCAtion, acaDEMic, muSICian.',
            'Noun/verb stress pairs (RE-cord vs re-CORD, PRO-duce vs pro-DUCE) extend into SHS 2 word-stress items — start collecting them now.',
            'Correct stress is worth marks in oral reading aloud: deVELopment, not DEvelopment; PREFERable keeps the stress of the root PREFER.',
            'When guessing an unknown word\'s class inside a passage, the suffix plus stress pattern usually identifies it even before meaning.'
          ],
          keyTakeaway: 'Suffix location predicts stress location — -tion, -ic, -ity all stress the syllable in front.',
          realWorldExample: 'School prefect announcements must stress "preSENtation" and "eXTRAcurricular" — a wrong beat makes a hall of students miss the word.'
        }
      ],
      commonMistakes: [
        'Wrong negative prefix: "unlegal", "inregular", "dispossible" — apply the p/m/b→im, l→il, r→ir rule.',
        'Class confusion: writing "his behaviour is very influence" (verb/noun into adjective slot) — formation tells you which slot each word fits.',
        'Spelling collapse when adding suffixes: *happyness, *carefuly, *planing, *suceeding.',
        'Keeping silent e wrongly: *moveing, *hatefull.',
        'Doubling where stress is not final: *prefered (preferred doubles: preFER — yes it IS final stress; contrast *referred? also doubles) — check stress before doubling.',
        'Over-generalising -ly: "friendly" looks like an adverb but is an adjective — form does not always equal function.'
      ],
      wassceExamTips: [
        'Cloze strategy: the missing word\'s suffix is chosen by its SLOT (after a determiner = noun; before a noun = adjective; after verb = adverb) — then match meaning with the correct prefix.',
        'Word-formation objectives: if the root is "SUCCESS", expect the four-slot family successive/succession/succeed/successful+ly — WAEC builds options from these.',
        'In "use a word from the passage to mean...", the passage word usually carries a prefix/suffix you can parse: INABILITY = in + able + ity = cannot-do-ness.',
        'Keep an error log of misspelt derivatives: the exam punishes the same ten words — environment, government, necessary, separate, definite, beginning, occurrence, possibility, independence, attendance.',
        'For essays, one well-placed derived adjective ("unpredictable rains") buys Expression marks; range, not rarity, is what is rewarded.'
      ],
      summaryChecklist: [
        'Can I build a four-word family (n/v/adj/adv) from roots like decide, care, employ, educate?',
        'Can I pick the right negative prefix for illegal, impossible, irregular, unable, dishonest, misleading?',
        'Can I spell happiness, carefully, moving, bigger, preferred, traveller under time pressure?',
        'Can I place the stress in educational, photographer, decision, comfortable?',
        'Can I parse an unseen word like "incomprehensibility" into parts and guess its meaning?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-wf-1',
        title: 'Cloze Slot Analysis: Choosing the Right Derivative',
        problem: 'Fill the gap with the correct form of the word given: "The villagers\' ______ (ABLE) to reach the health post worried the district officer."',
        stepByStepSolution: [
          'Step 1 (M1): Analyse the slot: "The villagers\' ___ to reach..." — after a possessive (\u2019s) a NOUN is required.',
          'Step 2 (M1): The sentence\'s sense is negative (worried the officer) — so the noun must mean "cannot": build ability → negative noun.',
          'Step 3 (A1): Form the chain: able → ability (noun) → in- prefix (before a vowel-initial root "ability", the in- form) → INABILITY.',
          'Step 4 (A1): Answer: "The villagers\u2019 inability to reach the health post worried the district officer."',
          'Step 5 (B1): Check alternatives: *unability (no such word), *disabled (adjective slot mismatch) — the suffix slot rules excluded them.'
        ],
        keyTakeaway: 'Read the slot first (class), read the sense second (positive/negative), then build the word.'
      },
      {
        id: 'ex-shs1-eng-wf-2',
        title: 'Parsing an Unseen Word in Comprehension',
        problem: 'In a passage: "The chief\u2019s decision was IRREVOCABLE." Break the word down and define it.',
        stepByStepSolution: [
          'Step 1 (M1): Segment: ir- + revoc(e) + -able.',
          'Step 2 (M1): Identify each part: ir- = not (negative before r); revoke = take back/cancel; -able = can be.',
          'Step 3 (A1): Reassemble: "that cannot be taken back" = final, unchangeable.',
          'Step 4 (A1): Context check: a chief\u2019s decision that cannot be taken back matches the passage\u2019s tone of authority.',
          'Step 5 (B1): Related family spotted for future items: revoke → revocation, irrevokeability? standard form is irrevocable /ɪˈrɒvəkəbl/ with stress on ROV.'
        ],
        keyTakeaway: 'Any three-part word can be dissected: prefix gives no, root gives core sense, suffix gives class.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t3-word-formation',
      topicId: 'shs1-eng-t3-word-formation',
      title: 'Word Formation Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-wf-1',
          quizId: 'quiz-shs1-eng-t3-word-formation',
          questionText: 'The correct negative of "possible" is:',
          optionA: 'unpossible',
          optionB: 'dispossible',
          optionC: 'impossible',
          optionD: 'inpossible',
          correctOption: 'C',
          subConcept: 'im- before p',
          explanation: 'Before p (and m, b) the in- prefix assimilates to im-: impossible, impatient, imbalance.',
          remediationTip: 'Lips together for p and m — the prefix copies the lips: im-possible.'
        },
        {
          id: 'q-shs1-eng-wf-2',
          quizId: 'quiz-shs1-eng-t3-word-formation',
          questionText: '"She explained the rule ______." Choose the correct form.',
          optionA: 'clear',
          optionB: 'clearly',
          optionC: 'clearen',
          optionD: 'clearness',
          correctOption: 'B',
          subConcept: 'adverb from adjective',
          explanation: 'The slot modifies the verb "explained", so the -ly adverb is needed: clearly.',
          remediationTip: 'How was it done? = adverb. Add -ly to the adjective when the verb needs a "how".'
        },
        {
          id: 'q-shs1-eng-wf-3',
          quizId: 'quiz-shs1-eng-t3-word-formation',
          questionText: 'The noun of "employ" meaning "the person hired" is:',
          optionA: 'employer',
          optionB: 'employment',
          optionC: 'employee',
          optionD: 'employable',
          correctOption: 'C',
          subConcept: '-ee vs -er',
          explanation: '-ee marks the receiver (employee = hired), -er the doer (employer = hirer), -ment the act.',
          remediationTip: 'The person who PAYS = employER; the person who receives the job = employEE.'
        },
        {
          id: 'q-shs1-eng-wf-4',
          quizId: 'quiz-shs1-eng-t3-word-formation',
          questionText: 'Which spelling is correct when the suffix is added?',
          optionA: 'hateing',
          optionB: 'hating',
          optionC: 'hate-ing',
          optionD: 'hitting? hateing',
          correctOption: 'B',
          subConcept: 'silent e dropping',
          explanation: 'Silent e drops before a vowel suffix: hate→hating, move→moving, dine→dining.',
          remediationTip: 'Two e\u2019s in a row look silly in English — the silent one leaves when a vowel arrives.'
        },
        {
          id: 'q-shs1-eng-wf-5',
          quizId: 'quiz-shs1-eng-t3-word-formation',
          questionText: 'In "unpredictable", the parts are:',
          optionA: 'un (no) + pre (before) + dict (say) + able (can be)',
          optionB: 'un + predict (foretell) + able (able to be)',
          optionC: 'unpre + dict + able',
          optionD: 'un + predic + table',
          correctOption: 'B',
          subConcept: 'segmentation',
          explanation: 'Root = predict (foretell); un- negates; -able = capable of being: "that cannot be foretold."',
          remediationTip: 'Find the standalone root first (predict); the wrappers are always before and after it.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t3-reading-comprehension',
    subjectId: 'english',
    level: 'SHS 1',
    term: 3,
    orderIndex: 14,
    title: 'Reading Comprehension: Locating, Inference and Meaning in Context',
    description: 'A complete method for WAEC prose comprehension: surveying the passage, literal location skills, inference questions, reference words, tone and purpose, and the vocabulary-in-context formats.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=sWZ9LNXZSvA',
    youtubeId: 'sWZ9LNXZSvA',
    keyNotes: `• The exam expects FOUR skills, each with its own question stamp:
  1. LITERAL: answer sits verbatim or near-verbatim in one paragraph — "According to paragraph 3..."
  2. INFERENCE: answer is NOT written — build it from two or more clues.
  3. VOCABULARY/MEANING IN CONTEXT: "In paragraph 2, the word X means..." (choose the sense the passage uses, not the first dictionary sense).
  4. REFERENCE: "What does the underlined pronoun/phrase refer to?" — usually find the nearest suitable noun BEFORE it.
• Method sequence: (1) read title + first sentence of each paragraph; (2) read questions; (3) hunt each answer with a pencil, marking the source line; (4) answer in complete sentences for Paper 2.
• Evidence discipline: every answer must be traceable to a line — never use outside knowledge.
• Long passages: the "hard" questions cluster in the LAST third (the examiner\u2019s inference zone).`,
    detailedNotes: {
      overview: 'Comprehension is 30+ marks of every WASSCE English Paper 1 (Section C) and a full section of Paper 2 alternate papers. The skill tested is not "reading" but controlled information retrieval: locate, transform, infer, and paraphrase within the passage\'s own four walls.',
      introduction: 'Treat the passage as a court of law: every answer must cite evidence "from paragraph ___". Students who answer from memory or general knowledge contradict the record and lose marks that location-skill students collect.',
      realWorldContext: 'Reading a real Ghana Examinations Council instruction sheet — "Candidates must NOT open this booklet until announced. Any candidate found writing before the announcement WILL be penalised" — the modal verbs (must, will) and the condition (any candidate found...) are exactly the structures comprehension inference items are built from.',
      objectives: [
        'Survey a passage and predict where information lives',
        'Answer literal questions by locating and lightly paraphrasing the source line',
        'Build inference answers from two or more textual clues',
        'Explain words in context including figurative senses',
        'Resolve reference words (it, they, this, such, the former) accurately'
      ],
      sections: [
        {
          title: 'The Survey-Hunt-Answer Method',
          content: 'Step 1 SURVEY (90 seconds): title, first line of each paragraph, and any sub-headings; ask "what kind of text is this — narrative, argument, report, letter?" Step 2 READ THE QUESTIONS: convert each into a search tag ("WHY the boy cried?" → tag = reason/causation, paragraph?). Step 3 HUNT with pencil: underline evidence lines, note paragraph numbers. Step 4 ANSWER in your own words for Paper 2, or tick-and-transfer for objectives. Never skim-read the whole passage twice — targeted second reading beats re-reading.',
          bulletPoints: [
            'Objective strategy: eliminate two options with a quote; between the last two, choose the one whose words appear in the passage\u2019s sense, not merely its letters.',
            'Paper 2 rule: lift-and-drop answers ("copying") earn 0 for that point; paraphrase at least one clause.',
            'If a question\u2019s wording contains "in the passage", outside facts are BANNED even when they are true.',
            'Numbers, names and places are the passage\u2019s signposts: questions about them are literal — locate and answer directly.'
          ],
          keyTakeaway: 'Survey the map, read the questions first, hunt with a pencil, answer in your own words.',
          realWorldExample: 'A district education report\u2019s summary paragraph — question: "Give TWO reasons for the drop in enrolment." The two reasons sit as separate sentences in paragraph 4; hunting finds them in 60 seconds.'
        },
        {
          title: 'Literal Questions: Locate and Lightly Rephrase',
          content: 'Literal stems use: "According to...", "What did X do/say...", "State two...", "When/Where/Who...". The answer exists in one visible place. Skill = accurate paraphrase: change the verb form, drop an adjective, flip the sentence order, keep the facts. "The market was overflowing with traders" → answer: "so many traders filled the market" — same truth, different clothes.',
          bulletPoints: [
            'For "state two/three" items, write the points as separate numbered answers — examiners hunt per point.',
            'Never answer a two-part question with one combined sentence — Organisation of the answer matters.',
            'Quote boundaries: when paraphrasing is risky, quote with the paragraph: the mark scheme accepts a correct quotation for literal items (but NOT for summary).',
            'Time markers decide past/present tense of your answer: the passage narrated yesterday, so answer in past tense.'
          ],
          keyTakeaway: 'Literal answers are the passage\u2019s facts wearing new clothes.',
          realWorldExample: 'Passage: "Ama\u2019s stall lost thirty rupees worth of tomatoes to a stray goat." Q: "What happened to Ama\u2019s tomatoes?" A: "A loose goat destroyed part of her stock." — located, rephrased, in ten seconds.'
        },
        {
          title: 'Inference: Building From Clues',
          content: 'Inference questions ("What does the passage suggest...?", "Why did the writer probably...?", "What can we conclude about X?") hide the answer in tone words, contradictions and cause-effect gaps. Recipe: pick TWO clues, join them with "so", and write the conclusion the passage never states. Clue bank: emotional vocabulary (reluctantly, eagerly), physical details describing mood (her hands trembled), repeated ideas, and the contrast between what a character says and does.',
          bulletPoints: [
            '"suggests/implies" items keep the answer INSIDE the text\u2019s reach — extreme options (always/never/all) are usually wrong.',
            'Character inference: feelings are shown through actions, not labels; "he shuffled coins slowly" → he was reluctant or ashamed.',
            'Writer\u2019s purpose questions: distinguish entertain / inform / persuade / warn — check the title and the closing sentence.',
            'Answer stem discipline: "The writer implies that..." answers must complete the given stem, not restart.'
          ],
          keyTakeaway: 'Two textual clues + one link word = the unstated answer.',
          realWorldExample: '"Ama\u2019s smile froze when the customer walked away." Inference: the customer said or did something upsetting — the sudden stop (froze) plus the smile (was happy) clash, and the clash is the clue.'
        },
        {
          title: 'Words in Context and Reference Words',
          content: 'Vocabulary-in-context items: "In paragraph 3, the word \'bank\' means..." — decide the sense the passage needs (river bank? a money bank? a bank of clouds?). Strategy: replace the word in the passage sentence with each option; the one that keeps the sentence logical is correct. Reference items: pronouns (it/they/these), "the former/the latter", "such/this + noun" — point BACKWARD to the nearest suitable noun phrase; plural pronouns demand plural or compound antecedents ("cake and tea" = they).',
          bulletPoints: [
            'Never give the FIRST meaning of a word you know; give the meaning THIS passage uses.',
            'Figurative sense flag: if the literal meaning is nonsense in context ("the town was swallowing the forest"), the exam expects the figurative gloss ("expanding into, consuming").',
            'Ambiguous reference check: "When the bell rang the boys jumped; it was loud." — "it" should refer to the bell; a passage that breaks reference is itself an error-correction test item.',
            'For "find a word which means X" items, scan by paragraph order and match exact sense — the distractor is usually a near-synonym in a different paragraph.'
          ],
          keyTakeaway: 'Context is the jury: it chooses the sense and the antecedent.',
          realWorldExample: 'A text about the Tema port: "the crane lifted another container" — here "crane" is machinery, not the bird; the whole paragraph (steel, harbour) votes for the machine sense.'
        }
      ],
      commonMistakes: [
        'Answering with outside knowledge the passage never gave ("Ghana gained independence in 1957" when the question demands what the passage says).',
        'Verbatim lifting of whole sentences in Paper 2 answers — the mark scheme calls it "mindless copying" and scores 0 for that point.',
        'Choosing the extreme option (always/never/most) on inference items where the passage hedged (often/some).',
        'Reference errors: pointing "they" at the nearest noun when the nearest noun is singular or illogical.',
        'Half-answering two-part questions ("give two reasons" then listing only one).',
        'Ignoring the question stem and writing a free essay instead of completing the given opening words.'
      ],
      wassceExamTips: [
        'Allocate 35-40 minutes to a full comprehension section: 5 survey, 8 reading the questions and hunting, the rest answering with two minutes left for a sense-check read.',
        'Write paragraph numbers beside every evidence line you underline; when you revise at the end, evidence with a paragraph tag gets verified in seconds.',
        'For "the word X suggests" items, name the FEELING or ATTITUDE word (fear, eagerness, contempt) the passage loads onto X — examiners expect the connotative label, not the dictionary sense.',
        'In Paper 2, complete answers take a subject and verb; "Because he was afraid" scores 0 as a fragment — convert every point into a sentence.',
        'If two answers seem identical, the passage intends ONE; choose the one that survives when you read the NEXT paragraph — context continues beyond the line you found.'
      ],
      summaryChecklist: [
        'Can I run the Survey-Hunt-Answer method on any unseen passage?',
        'Can I paraphrase a literal answer without changing its facts?',
        'Can I name two clues that jointly support an inference?',
        'Can I choose the passage sense of a multiple-meaning word?',
        'Can I resolve every pronoun reference in a paragraph correctly?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-rc-1',
        title: 'Inference Build: From Two Clues to One Conclusion',
        problem: 'Passage: "Ama counted the coins twice. She had promised her mother not to buy sweets before paying the school fees. Her fingers trembled as she placed the last coin on the counter." What does the passage suggest about Ama\u2019s feelings?',
        stepByStepSolution: [
          'Step 1 (M1): Clue 1: "counted the coins twice" — she is anxious about the amount.',
          'Step 2 (M1): Clue 2: "fingers trembled" — physical sign of fear/worry; plus the promise context: the money matters more than sweets.',
          'Step 3 (A1): Link: repeated counting + trembling while paying fees shows she is frightened the money may not be enough.',
          'Step 4 (A1): Conclusion (never stated outright): "The passage suggests Ama is anxious and fearful that her money will not cover the fees."',
          'Step 5 (B1): Reject the over-reach: *she was greedy / *she hated her mother — no clue supports emotions about the promise itself.'
        ],
        keyTakeaway: 'Clue (repetition) + clue (body language) + the promise = anxiety; inference is addition, not imagination.'
      },
      {
        id: 'ex-shs1-eng-rc-2',
        title: 'Word-in-Context: Choosing the Passage Sense',
        problem: 'Passage (a mining report): "The company will open a new pit next season." Q: In the passage, the word "pit" means — A. a fruit seed B. a deep hole for mining C. a race track D. a cooking pot.',
        stepByStepSolution: [
          'Step 1 (M1): Set the context frame: "company", "open", "next season" — business of extraction.',
          'Step 2 (M1): Test each option in the sentence: "open a new [hole] for mining" fits; a seed/track/pot cannot be "opened" by a company "next season" as an operation.',
          'Step 3 (A1): Answer B. The passage sense overrides the first dictionary sense (fruit seed).',
          'Step 4 (A1): Transfer skill: the replacement test — put each option back into the passage sentence; only the right sense leaves the paragraph coherent.',
          'Step 5 (B1): Note: if a later paragraph says "littered with oranges", the sense flips to A — context, not the word itself, decides.'
        ],
        keyTakeaway: 'Run the replacement test in the passage sentence; the jury is the surrounding words.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t3-comprehension',
      topicId: 'shs1-eng-t3-reading-comprehension',
      title: 'Comprehension Method Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-rc-1',
          quizId: 'quiz-shs1-eng-t3-comprehension',
          questionText: '"The manager\u2019s smile did not reach his eyes." The passage suggests the manager is:',
          optionA: 'genuinely delighted',
          optionB: 'pleased but tired',
          optionC: 'not sincerely happy',
          optionD: 'angry openly',
          correctOption: 'C',
          subConcept: 'Inference from gesture',
          explanation: 'The contradiction (smiling face, cold eyes) signals a fake or reluctant politeness — inferred, never stated.',
          remediationTip: 'When a body signal contradicts the face, the CONTRADICTION is the answer clue.'
        },
        {
          id: 'q-shs1-eng-rc-2',
          quizId: 'quiz-shs1-eng-t3-comprehension',
          questionText: 'Best response to a "state two reasons" question is:',
          optionA: 'One combined sentence covering both',
          optionB: 'Two numbered separate answers',
          optionC: 'Quoting the whole paragraph',
          optionD: 'Writing one reason and a note',
          correctOption: 'B',
          subConcept: 'Answer format',
          explanation: 'Examiners award per point; two distinct numbered answers make both visible.',
          remediationTip: 'Counted points = counted sentences.'
        },
        {
          id: 'q-shs1-eng-rc-3',
          quizId: 'quiz-shs1-eng-t3-comprehension',
          questionText: '"The boys kept talking until the teacher silenced THEM." THEM refers to:',
          optionA: 'the silence',
          optionB: 'the boys',
          optionC: 'talking',
          optionD: 'the classroom',
          correctOption: 'B',
          subConcept: 'Pronoun reference',
          explanation: 'Plural pronoun with a plural antecedent earlier in the sentence — "the boys".',
          remediationTip: 'Plug the candidate noun into the pronoun slot: "silenced the boys" works; "silenced the talking" changes the sense.'
        },
        {
          id: 'q-shs1-eng-rc-4',
          quizId: 'quiz-shs1-eng-t3-comprehension',
          questionText: 'In a fishing report, "The net sank because its mesh was heavy with water." Here "sank" is closest in meaning to:',
          optionA: 'failed',
          optionB: 'dropped below the surface',
          optionC: 'became expensive',
          optionD: 'was lost forever',
          correctOption: 'B',
          subConcept: 'Word in context',
          explanation: 'The physical context (net, water, heavy mesh) picks the literal water sense, not the figurative "failed".',
          remediationTip: 'Water words + net = real sinking; only in business talk does "the deal sank" mean failure.'
        },
        {
          id: 'q-shs1-eng-rc-5',
          quizId: 'quiz-shs1-eng-t3-comprehension',
          questionText: 'Which answer would score 0 in Paper 2 comprehension?',
          optionA: 'A paraphrase of the source line',
          optionB: 'A verbatim whole-sentence lift from the passage',
          optionC: 'A quote with paragraph citation',
          optionD: 'An inference drawn from two clues',
          correctOption: 'B',
          subConcept: 'Mindless copying penalty',
          explanation: 'Whole-sentence lifting ("mindless copying") is disallowed; paraphrase or short precise quoting is required.',
          remediationTip: 'Change at least the verb form or word order of every lifted clause.'
        }
      ]
    }
  },

  {
    id: 'shs1-eng-t3-summary-writing',
    subjectId: 'english',
    level: 'SHS 1',
    term: 3,
    orderIndex: 15,
    title: 'Summary Writing: Finding Points and Packing Them',
    description: 'The SHS 1 foundation for WAEC summary: identifying task-relevant points, excluding examples and repetition, paraphrasing without distortion, sentence-combining, and word-limit discipline.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=4hbMrU4UWPM',
    youtubeId: '4hbMrU4UWPM',
    keyNotes: `• A summary = the task-relevant POINTS only, in YOUR sentences, shorter than the source.
• The four-step drill:
  1. Underline the TASK (what exactly is demanded: causes? problems? qualities?).
  2. Read the assigned paragraph(s); tick every sentence that carries a point; cross out illustrations, quotations, examples, repetitions, descriptions added for colour.
  3. Merge related ticks; paraphrase each point.
  4. Write in complete sentences, one point per sentence, using connectors only where asked.
• Exclusion list (never a point): examples ("for instance..."), proverbs and quotes used decoratively, repeated restatements, minor details (names, colours, weather) that do not answer the task.
• Inclusion test: does the sentence ANSWER the task verb (cause, effect, reason, quality)? If not, drop it.
• Word limits: keep to the set number; a 100-word limit honoured shows control — overshooting adds zero marks and multiplies accuracy errors.
• Summary marks are awarded PER POINT, but only for sentences that are complete and grammatical.`,
    detailedNotes: {
      overview: 'SHS 1 builds the summary habit WAEC will examine heavily in SHS 2 and 3: point-extraction under strict task control. The whole craft reduces to two questions — does my sentence carry a real point, and is that point needed by the task? — plus the discipline to compress.',
      introduction: 'Think like a broadcaster given sixty seconds of airtime for a farming report: you keep the causes, the effects and the numbers that decide the story, and you drop the poet\'s description of the sunset over the field.',
      realWorldContext: 'A farmer from Sefwi being reported on radio after a cocoa-blast: his hour of talk — the dew on his leaves, his grandfather\'s farm, three proverbs — compresses to two sentences for the news bulletin: "Dry weather and spraying failure reduced his crop; he wants seedlings from the district office." That compression, nothing more, is summary.',
      objectives: [
        'Isolate the summary task and the exact category of points demanded',
        'Separate main points from illustrations, quotations and repetition in a paragraph',
        'Paraphrase points without changing or narrowing their factual sense',
        'Combine related points into single clean sentences where appropriate',
        'Respect a word limit while keeping every answer sentence complete and grammatical'
      ],
      sections: [
        {
          title: 'Reading the Task Before Reading the Text',
          content: 'Summary questions state a task verb and a scope: "Summarise the causes of flooding in paragraph 2" — the category is CAUSES, the boundary is one paragraph. Points about effects, history of drainage or the writer\'s feelings are irrelevant however true. Convert the task into a checklist header ("CAUSES ONLY:") and hold every candidate sentence against it.',
          bulletPoints: [
            'Task verbs that change the point-type: causes (why it happens), effects (what results), problems (obstacles), reasons (justifications given by the writer), qualities (traits of a person), measures/solutions (what should be done).',
            '"In paragraph 3" means points exist ONLY in that paragraph — no fishing in others.',
            'If two categories are asked ("the problems and the measures suggested"), number your answers so the marker sees both.',
            'Preview the passage length: the mark total tells you how many points to expect — 10 marks ≈ 5 well-made points.'
          ],
          keyTakeaway: 'The task word (cause/effect/quality...) is a filter: only points of that class pass.',
          realWorldExample: 'District exam question: "Summarise why the trading centre was crowded" — a candidate lists how the market looked; every description point scores 0 because the task demanded REASONS.'
        },
        {
          title: 'Excluding What Is Not a Point',
          content: 'Writers pad; summarisers strip. Cross out: (1) illustrations — "many crops, maize for example, failed"; the example itself is not a point. (2) Quotations and proverbs used to decorate ("As the elders say, rain does not fall on one leaf") unless the question asks about them. (3) Repetition — the third restatement of a tired idea adds no new mark. (4) Minor detail: colours, small names, weather that does not answer the task. What REMAINS after the four strikethroughs are the candidate points.',
          bulletPoints: [
            'One point, once: if two sentences say the same thing in different clothes, keep one and paraphrase.',
            'A general statement + its example = ONE point (the statement), not two.',
            'A string of examples may collectively reveal ONE general point: "maize, beans and groundnuts failed" compresses to "several food crops failed".',
            'Dialogue or quoted speech inside a narrative passage is usually evidence of a quality, not the quality itself — convert "I will never give up!" to "she was determined."'
          ],
          keyTakeaway: 'The pen strokes that cross out examples and padding are worth more marks than the strokes that write the answer.',
          realWorldExample: 'A minister\'s two-page congratulation reduces to "the new block was funded by the assembly and completed before the exam season" — the adjectives about pride are decoration, not points.'
        },
        {
          title: 'Paraphrase: New Clothes, Same Facts',
          content: 'Mark schemes reward your wording, not the author\'s. Change the verb form ("was destroyed by flood" → "flood damage"), pick a near-synonym ("plentiful" → "abundant"), collapse a clause ("because the rains failed, the harvest was small" → "poor rains reduced the harvest"), and turn description into statement ("his hands shook as he spoke" → "he was nervous"). NEVER change facts: numbers, names of places, and causal direction must survive intact.',
          bulletPoints: [
            'Keep the register: a summary of a report should sound like a report, not a chat.',
            'Preserve hedges: "some traders" must not become "all traders" — quantifier swaps are factual distortions.',
            'If a word has no safe synonym, KEEP it — a correctly retained technical term (dysentery, cocoa swollen shoot) beats a wrong paraphrase.',
            'Sentence-compression: two short points can share one verb ("The roads were bad. The bridges were broken" → "Roads and bridges were in a state of disrepair") only when both remain countable as marks.'
          ],
          keyTakeaway: 'Swap the wording, guard the facts: paraphrase is re-dressing, not re-writing history.',
          realWorldExample: 'Source: "Traders could not move their goods because the lorry park was flooded." Summary: "Flooding of the lorry park halted the movement of goods."'
        },
        {
          title: 'Packing: Sentences, Limits, and the Check',
          content: 'Write each point as one complete sentence; no bullets, no fragments, no page-long compound sentence. Use connectors sparingly and only to group points the task treats together. Count words against the limit (a typical SHS 1 exercise sets 50-90 words for 10 marks). Final check pass: every sentence answers the task verb; every sentence stands grammatically; no two sentences repeat one point; word count respected.',
          bulletPoints: [
            'A fragment scores 0 even when the fact is right: "Because of the heavy rains" must become "Heavy rains caused the outbreak."',
            'Order points as they appear in the passage — mark schemes follow the text, and so should you.',
            'Leave out your own opinion entirely; a summary reports, it does not review.',
            'If your draft is over the limit, do not delete points — delete padding words and compress clauses.'
          ],
          keyTakeaway: 'Complete sentences, passage order, no repetition, inside the word limit — the four walls of a full-marks summary.',
          realWorldExample: 'Model 60-word answer on cholera from an unseen report: "The outbreak spread because the borehole was contaminated; vendors carried untreated water; the clinic ran short of reagents. Cases multiplied when families shared one latrine." — four points, four sentences, task-compliant.'
        }
      ],
      commonMistakes: [
        'Lifting whole sentences from the passage ("mindless copying") — scored 0 even when the sentence contains a point.',
        'Including examples as points: "for instance, mangoes" is never a cause.',
        'Answering a causes task with effects — the category error that halves the score.',
        'Writing notes or fragments instead of full sentences: "Dirty water. Too many people." scores nothing.',
        'Adding personal opinion or outside facts the passage never stated.',
        'Blowing the word limit by keeping every detail the passage offered.'
      ],
      wassceExamTips: [
        'Annotate the passage freely: ticks, crosses and page-margin numbers are allowed and save minutes; the answer script must stay clean.',
        'Count the marks against likely points: a 10-mark summary almost never wants 25 sentences; it wants 5 clean points done thoroughly.',
        'Begin your answer with the required numbering exactly as asked (a, b, i, ii): misnumbering can make a correct point unmarkable.',
        'Never write an introduction that restates the question ("The passage below summarises...") — it wastes word-limit and time for zero marks.',
        'Leave one minute to read YOUR sentences back: one subject-verb slip can erase a point\'s mark even if the content is right; proofread for concord and tense first.'
      ],
      summaryChecklist: [
        'Can I restate a summary task as a one-line filter ("causes only, paragraph 3")?',
        'Can I strip a 120-word paragraph to its two real points in two minutes?',
        'Can I paraphrase a point without altering any fact or quantity?',
        'Can I write five points as five complete, connector-light sentences?',
        'Can I hit a 90-word limit without dropping a single markable point?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-sum-1',
        title: 'Turning a Paragraph into Markable Points',
        problem: 'Passage extract: "Every harmattan morning, the farmers of the Sefwi belt wake to a thin grey haze. Their cocoa leaves curl and their seedlings dry at the root. Last season, according to one old grower, \'the sun burnt even the shadows.\' Because the haze blocks the morning dew and the winds carry dust onto the wet soil, yields fall and the price of beans rises in the nearby towns." Task: Summarise TWO effects of the harmattan haze on farming.',
        stepByStepSolution: [
          'Step 1 (M1): Filter the task: EFFECTS on farming, category = results, not causes, not atmosphere.',
          'Step 2 (M1): Strike non-points: "thin grey haze" (description), the quote about shadows (illustration), "wake to" (routine detail).',
          'Step 3 (M1): Candidate effects: leaves curl; seedlings dry at root; yields fall; prices rise. Keep the two farming ones the text stresses.',
          'Step 4 (A1): Paraphrase and pack: "The haze curls cocoa leaves and dries seedlings at the root, so the harvest falls." And: "Lower harvests push up the price of beans in nearby towns."',
          'Step 5 (A1): Check: two complete sentences, no quote, no lifting, farming-focused — the markable points are exactly two.'
        ],
        keyTakeaway: 'Cross out the atmosphere; harvest the results — an effects task pays only for results.'
      },
      {
        id: 'ex-shs1-eng-sum-2',
        title: 'Word-Limit Compression Without Point Loss',
        problem: 'Draft answer (98 words) exceeds the 60-word limit. Compress without losing points: "The reason the dispensary could not function properly was that the electricity had gone off for three whole days and this made the refrigerator stop working, so all the vaccines that had been stored inside it became completely useless and were thrown away. Another reason was that the only nurse who was trained to handle emergencies had taken leave to attend a funeral in her village."',
        stepByStepSolution: [
          'Step 1 (M1): Count the real points: (a) power failure spoiled the vaccine cold chain; (b) the trained emergency nurse was absent on leave.',
          'Step 2 (M1): Cut padding: "for three whole days", "completely", "that had been stored inside it", funeral detail (explanation, not a point).',
          'Step 3 (A1): Compress point (a): "A three-day power failure stopped the refrigerator, ruining the stored vaccines."',
          'Step 4 (A1): Compress point (b): "The only nurse trained for emergencies was away on leave."',
          'Step 5 (B1): Combined 24-word answer — both points intact, limit honoured, no lifting: "The dispensary failed because a three-day power outage ruined the vaccines, and the only emergency-trained nurse was away on leave."'
        ],
        keyTakeaway: 'When the draft is long, delete decoration, never data: each point survives as its shortest grammatical sentence.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t3-summary',
      topicId: 'shs1-eng-t3-summary-writing',
      title: 'Summary Basics Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-sm-1',
          quizId: 'quiz-shs1-eng-t3-summary',
          questionText: 'A passage says: "Many diseases spread after floods — cholera, typhoid and even skin rashes appear." For a task asking for EFFECTS of floods, how many points are here?',
          optionA: 'Three (each disease)',
          optionB: 'One (diseases spread)',
          optionC: 'Two (cholera, typhoid)',
          optionD: 'Zero (it is an example)',
          correctOption: 'B',
          subConcept: 'General statement + examples',
          explanation: 'The statement "many diseases spread" is the point; the named diseases are illustrations of it — one markable point.',
          remediationTip: 'Examples after "such as/for instance/many... X, Y and Z" collapse into their general statement.'
        },
        {
          id: 'q-shs1-eng-sm-2',
          quizId: 'quiz-shs1-eng-t3-summary',
          questionText: 'Which answer line would score 0 even though its fact is correct?',
          optionA: 'The market fire started from an unattended stove.',
          optionB: 'Because of an unattended stove.',
          optionC: 'An unattended stove caused the market fire.',
          optionD: 'The market fire was caused by an unattended stove.',
          correctOption: 'B',
          subConcept: 'Complete-sentence rule',
          explanation: 'B is a fragment, not a sentence; summary mark schemes award points only for complete sentences.',
          remediationTip: 'Every summary sentence needs a subject and a finite verb — read each line aloud and listen for both.'
        },
        {
          id: 'q-shs1-eng-sm-3',
          quizId: 'quiz-shs1-eng-t3-summary',
          questionText: 'The safest paraphrase of "Traders complained that the road made their goods spoil before reaching customers" is:',
          optionA: 'The traders were angry about customers.',
          optionB: 'Bad road conditions caused goods to spoil before delivery, traders said.',
          optionC: 'The road made people spoil.',
          optionD: 'Goods always spoil on rough roads.',
          correctOption: 'B',
          subConcept: 'Paraphrase without distortion',
          explanation: 'B keeps the facts (road → spoilage, the traders\' voice) and changes wording. D generalises beyond the passage (always); A drops the causal link; C swaps the actors.',
          remediationTip: 'Check every paraphrase against the original for: who, what, when, how many — and hedges like "some" or "before".'
        },
        {
          id: 'q-shs1-eng-sm-4',
          quizId: 'quiz-shs1-eng-t3-summary',
          questionText: 'For a 10-mark summary demanding "the measures taken by the assembly", which sentence should be dropped?',
          optionA: 'The assembly drilled new boreholes.',
          optionB: 'The chairman stated that the project was near completion.',
          optionC: 'Officials fenced the spring catchment.',
          optionD: 'Households were taught to boil drinking water.',
          correctOption: 'B',
          subConcept: 'Task-category filter',
          explanation: 'A status announcement is not a measure taken to solve the problem; the other three are concrete actions.',
          remediationTip: 'A "measures" task pays for DEEDS — verbs of doing, not verbs of saying.'
        },
        {
          id: 'q-shs1-eng-sm-5',
          quizId: 'quiz-shs1-eng-t3-summary',
          questionText: 'Your draft is 20 words over the limit. The correct repair is to:',
          optionA: 'Delete the last point entirely',
          optionB: 'Remove adjectives, adverbs and repeated clauses while keeping every point',
          optionC: 'Write smaller handwriting',
          optionD: 'Add a shorter introduction',
          correctOption: 'B',
          subConcept: 'Compression strategy',
          explanation: 'Word counts are earned by points, lost by decoration — trim decoration first, never a markable point.',
          remediationTip: 'Circle every "very/really/completely/in order to"; most become deletable or shrinkable.'
        }
      ]
    }
  },
  {
    id: 'shs1-eng-t3-confused-words-register',
    subjectId: 'english',
    level: 'SHS 1',
    term: 3,
    orderIndex: 16,
    title: 'Confused Words, Homophones and Register in Writing',
    description: 'The WAEC hot-list of look-alike and sound-alike word pairs (effect/affect, less/fewer, principal/principle, may/can), plus formal versus informal register choices for compositions and letters.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=PGI95jwIHTo',
    youtubeId: 'PGI95jwIHTo',
    keyNotes: `• The WAEC confusion hot-list:
  - accept (receive) vs except (exclude); effect (n, result) vs affect (v, influence); principle (rule) vs principal (chief/most important);
  - then (time) vs than (comparison); stationary (not moving) vs stationery (writing paper);
  - moral (ethics) vs morale (spirit); historical/historic; economic/economical;
  - may (permission/possibility) vs can (ability); shall (offer/future, I-we) vs will;
  - less (uncountable) vs fewer (countable); amount (uncountable) vs number (countable);
  - continual (repeated) vs continuous (unbroken); sensible (reasonable) vs sensitive;
  - borrow (take temporarily) vs lend (give temporarily); bring (toward speaker) vs take (away).
• Register = the formality dial. INFORMAL (family letters): contractions, phrasal verbs, exclamations. FORMAL (official letters, reports, articles): no contractions, precise connectives (moreover, consequently), nominal style, no slang.
• Words and phrases Ghanaian students write that WAEC marks as errors in formal writing: "how come", "I beg to state" (padding), "most times", "usefulness of...", over-long proverbs.`,
    detailedNotes: {
      overview: 'Pairs like affect/effect and may/can are the objective test\'s endless material, and register errors sink composition marks quietly. This topic memorises the hot-list in meaning-frames and fixes one rule: choose the word by the slot and the audience, never by the sound.',
      introduction: 'Each confused pair has a discriminator: effect follows an article (an effect), affect precedes an object (affect someone); fewer counts what you can point at, less weighs what you cannot. Learn the discriminator, not the definition.',
      realWorldContext: 'A district assembly poster once printed "PRINCIPAL officers must respect the CODE OF MORALE" where PRINCIPAL and MORALE were the wrong twins — the educated reading public noticed instantly, exactly as WAEC examiners notice these swaps in scripts.',
      objectives: [
        'Choose correctly between the fifteen most-tested confused pairs in objective items',
        'Apply the article/object discriminator for effect/affect and noun tests for principle/principal',
        'Match may/can, less/fewer, amount/number to the grammatical slot available',
        'Adjust diction to register: formal vocabulary for official writing, informal for personal letters',
        'Detect and repair register errors in edited passages'
      ],
      sections: [
        {
          title: 'Verb-Sense Pairs: may/can, borrow/lend, bring/take, do/make',
          content: 'MAY asks or grants permission ("May I leave?"), CAN states ability ("I can swim") — WAEC keeps the line strict. Borrow = receive temporarily ("borrow from"); lend = supply temporarily ("lend to") — the direction of the money is the test. Bring moves toward the speaker, take moves away ("bring the script here; take it to the office"). DO handles actions, MAKE handles producing/causing ("make a mistake", "make her study", "make a plan" — never *do a mistake).',
          bulletPoints: [
            '"May/Might I suggest..." formal request; "Can I...?" casual — in formal letters choose may.',
            'Borrow/lend slots: Ama borrowed a chair FROM Kojo; Kojo lent a chair TO Ama.',
            'Bring/take shift with the speaker\'s position: "The headmaster brought (to him) the report; the messenger took it away."',
            'make + object + bare infinitive (cause): "It made me think"; do cannot appear there.'
          ],
          keyTakeaway: 'Direction decides bring/take and borrow/lend; permission vs ability decides may/can.',
          realWorldExample: 'A friend texts: "Can you lend me your notes? I must return them before Monday; my brother brought mine to his hostel and took them to Tamale." — four direction/ability words in one real exchange.'
        },
        {
          title: 'Quantity and Comparison Pairs: less/fewer, amount/number, than/then',
          content: 'FEWER + plural countables; LESS + uncountables: "fewer errors, less ink". AMOUNT + mass; NUMBER + count: "a large amount of rice, a large number of schools". THAN compares; THEN is time/sequence ("then we left"). The WAEC extension: "less" with a plural noun is the error ("less schools" → "fewer schools"); "fewer money" fails the other way. The superlative frame "the most" vs the comparative "any other" was trained earlier — than belongs only to comparatives.',
          bulletPoints: [
            'Test with the number test: can you say "three ___s"? yes = fewer/number; no = less/amount.',
            '"No sooner... than" (not then); "hardly/scarcely... when"; these fixed frames recur in objectives.',
            '"lessen" is a verb (to reduce); "less" is the quantifier — do not swap classes.',
            '"more" works with both: "more schools, more rice" — the pair only splits when counting down.'
          ],
          keyTakeaway: 'Plural-countable sense calls fewer/number; mass sense calls less/amount; comparison alone calls than.',
          realWorldExample: 'A shop sign: "Fewer items, lower prices — less than the corner store." The sign itself pairs the three discriminators.'
        },
        {
          title: 'Noun-Lookalikes: effect/affect, principle/principal, moral/morale, stationery/stationary',
          content: 'EFFECT is normally the noun (the effect of rain); AFFECT the verb (rain affects crops) — the test: article slot takes effect, "a ___ me" slot takes affect. PRINCIPAL = head (the principal\'s office) or chief (principal reason); PRINCIPLE = rule/belief (a man of principle, the principle of Archimedes). MORAL concerns right/wrong; MORALE is team spirit. STATIONERY (paper, pens) vs STATIONARY (motionless) — the letter E in stationery stands for envelopes. Add: historic (famous in history) vs historical (from the past), economic (of an economy) vs economical (thrifty), respectful (showing respect) vs respective (separate).',
          bulletPoints: [
            '"AFFECT" is almost always a verb before a noun ("the policy affects traders"); "EFFECT" almost always after a/an/the ("an effect on trade").',
            'The school HEAD is the principal; the rule you live by is a principle.',
            'Respective = each in its own place ("they went to their respective dormitories") — never confused with respectful.',
            '"in principle" (by the rule) vs "on principle" (because of principle) — fixed preposition frames.'
          ],
          keyTakeaway: 'Assign the article or the object: nouns settle in article slots, verbs settle before objects.',
          realWorldExample: 'A school notice: "The PRINCIPAL reminds us that punctuality is a PRINCIPLE; latecoming has an EFFECT on results and cannot AFFECT the exam timetable unfairly."'
        },
        {
          title: 'Register: Choosing Words for the Audience',
          content: 'Formal register (official letters, reports, articles): no contractions, no rhetorical questions aimed at a friend, connectives like moreover/consequently/nevertheless, precise verbs (commence, inform, request), polite modals (would, could, may). Informal register (letters to kin, speeches to peers): contractions, phrasal verbs (sort out, put off), direct address, exclamations, questions to the reader. Slang and abusive words belong to neither in WAEC writing. The exam punishes MIXING: a formal letter that opens "Dear Sir" and then writes "What\'s up?" loses Expression marks.',
          bulletPoints: [
            'Formal swaps WAEC rewards: buy→purchase, get→obtain, ask for→request, tell→inform, fix→repair/rectify, kids→children/pupils.',
            'Never contract in formal writing: cannot (not can\'t), will not (not won\'t), do not (not don\'t).',
            'Keep cliché padding out of both registers: "Respect is due...", "As you are aware of..." — examiners read them as zero-content filler.',
            'In speeches, the register is semi-formal: respectful salutations, then energetic but clean language.'
          ],
          keyTakeaway: 'Same facts, two wardrobes: dress the letter for its reader, and never mix outfits.',
          realWorldExample: 'One truth, two registers: informal — "Mum, the tap\'s broken, we can\'t fetch water." formal — "Madam, the water pump is faulty; residents are unable to obtain water for household use."'
        }
      ],
      commonMistakes: [
        '"The new law will EFFECT the traders" — verb slot demands AFFECT.',
        '"Less students sat the mock exam this year" — students count, so FEWER.',
        '"He is the PRINCIPLE of the school" — the head is the principal.',
        '"Can I borrow you your pen?" — borrow takes FROM; the sentence means LEND.',
        'Writing "than" for "then" in narration: "First we voted, THAN we sang."',
        'Using contractions and "guys/dudes" in a formal letter to the District Chief.'
      ],
      wassceExamTips: [
        'Objective strategy for effect/affect: look LEFT of the blank — a, an, the, this, that means the noun (effect); a noun or pronoun right after the blank means the verb (affect).',
        'For less/fewer and amount/number items, underline the noun after the gap and run the "one, two, three" test before choosing.',
        'In the essay, a register mismatch is more damaging than a spelling slip: examiners mark Expression holistically — decide the audience in the first planning minute and hold it.',
        'Learn pair-frames with their prepositions as one item: differ FROM, marry TO, consist OF, accustom TO, abstain FROM, adhere TO, depend ON. A verb memorised without its preposition is only half learned.',
        'Proofread for the three homophone spellers that essays repeat: their/there/they\'re, its/is, than/then — one targeted pass fixes them all.'
      ],
      summaryChecklist: [
        'Can I state the discriminator for each of the fifteen hot-list pairs?',
        'Can I choose may vs can by permission-vs-ability in five sample requests?',
        'Can I repair "less roads and more amount of dust" correctly?',
        'Can I rewrite a friendly paragraph as a formal report in four moves?',
        'Can I spot the wrong twin in a printed public notice?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-eng-cw-1',
        title: 'Slot Analysis in a Confused-Word Objective',
        problem: 'Choose: "The heavy rains had a serious ______ on the maize harvest, and this will ______ the price of kenkey this year." A. effect / affect  B. affect / effect  C. effect / effect  D. affect / affect',
        stepByStepSolution: [
          'Step 1 (M1): Gap 1 sits after "a serious" — an article slot needs a NOUN: EFFECT.',
          'Step 2 (M1): Gap 2 follows "will" and takes a direct object ("the price") — a VERB slot: AFFECT.',
          'Step 3 (A1): Answer A: "had a serious effect on... will affect the price."',
          'Step 4 (A1): Double-check meanings: effect = result (noun); affect = influence (verb).',
          'Step 5 (B1): Trap avoided: B swaps the classes — the classic distractor in every WASSCE series.'
        ],
        keyTakeaway: 'Read left of the blank for a noun marker; read right of the blank for a verb object — the slot picks the word.'
      },
      {
        id: 'ex-shs1-eng-cw-2',
        title: 'Rewriting a Formal Paragraph from Mixed Register',
        problem: 'Rewrite for a formal letter to the District Assembly: "Hey, we gotta tell you guys that the tap near the market is busted, so people can\'t fetch water. What\'s up with that? Fix it fast o!"',
        stepByStepSolution: [
          'Step 1 (M1): Remove direct-address slang: "Hey... you guys" → "We write to bring to the Assembly\'s attention..."',
          'Step 2 (M1): Expand contractions and replace colloquial verbs: "gotta" → must; "busted" → is non-functional; "can\'t" → cannot; "fix" → repair/rectify.',
          'Step 3 (A1): Delete the rhetorical question and the exclamative "o" — formal style states, it does not chide.',
          'Step 4 (A1): Draft: "We wish to bring to your attention that the borehole near the market is non-functional; consequently, residents cannot obtain water for household use. We respectfully request that the defect be rectified urgently."',
          'Step 5 (B1): Register audit: no contractions, formal connective (consequently), polite modal (request... be rectified), no slang — four markers of formal style present.'
        ],
        keyTakeaway: 'Formal rewriting has four moves: strip slang, expand contractions, remove rhetorical questions, add formal connectives and polite modals.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-eng-t3-confused-words',
      topicId: 'shs1-eng-t3-confused-words-register',
      title: 'Confused Words & Register Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs1-eng-cw-1',
          quizId: 'quiz-shs1-eng-t3-confused-words',
          questionText: '"______ permission, may I leave the hall now?" — choose the correct modal for formal request.',
          optionA: 'Can',
          optionB: 'May',
          optionC: 'Might have',
          optionD: 'Would',
          correctOption: 'B',
          subConcept: 'may vs can',
          explanation: 'Permission takes may; can states ability. In formal requests WAEC expects "May I...".',
          remediationTip: 'Ask: am I seeking a YES (may) or declaring a SKILL (can)?'
        },
        {
          id: 'q-shs1-eng-cw-2',
          quizId: 'quiz-shs1-eng-t3-confused-words',
          questionText: 'Choose the correct sentence.',
          optionA: 'There are less pupils in the class this year.',
          optionB: 'There is a smaller number of pupils this year.',
          optionC: 'There are fewer pupils in the class this year.',
          optionD: 'There are few-less pupils this year.',
          correctOption: 'C',
          subConcept: 'fewer with countables',
          explanation: 'Pupils are countable, so fewer is required; less/amount belongs to uncountables.',
          remediationTip: 'One, two, three pupils — you counted them, so fewer wins.'
        },
        {
          id: 'q-shs1-eng-cw-3',
          quizId: 'quiz-shs1-eng-t3-confused-words',
          questionText: 'The gap needs the VERB: "The scandal did not ______ the minister\'s popularity." (affect / effect)',
          optionA: 'effect',
          optionB: 'affect',
          optionC: 'either is correct',
          optionD: 'neither fits',
          correctOption: 'B',
          subConcept: 'affect vs effect',
          explanation: 'After "did not" a base verb is needed: AFFECT = influence. EFFECT as a verb is rare and formal (to bring about) and does not fit this slot.',
          remediationTip: 'Slot map: a/the/an ___ = noun effect; will/did/not ___ + object = verb affect.'
        },
        {
          id: 'q-shs1-eng-cw-4',
          quizId: 'quiz-shs1-eng-t3-confused-words',
          questionText: 'Which expression is acceptable in a FORMAL letter?',
          optionA: "I'm writing to apprise you...",
          optionB: 'What\'s up with the new policy?',
          optionC: 'I write to draw your attention to...',
          optionD: 'Guys, the market road is bad.',
          correctOption: 'C',
          subConcept: 'formal register markers',
          explanation: 'A and B use contractions and colloquialism; D is slang; C is the conventional formal opening.',
          remediationTip: 'Count contractions and slang: any of them disqualifies a formal piece.'
        },
        {
          id: 'q-shs1-eng-cw-5',
          quizId: 'quiz-shs1-eng-t3-confused-words',
          questionText: '"The two boys went to their ______ dormitories." Complete correctly.',
          optionA: 'respectful',
          optionB: 'respective',
          optionC: 'respecting',
          optionD: 'respects',
          correctOption: 'B',
          subConcept: 'respective vs respectful',
          explanation: 'Respective = each to his own; respectful = showing respect. Each boy going to his own dormitory is a respective matter.',
          remediationTip: 'Two subjects + separate things = respective; attitude of courtesy = respectful.'
        }
      ]
    }
  }
];
