// Ghanaian SHS 2 English Language Curriculum — Terms 1, 2 and 3
// Based on the WAEC / WASSCE Ghana Senior High School English Language syllabus
// Textbook-grade notes, worked examples with method marks, and WAEC-standard quizzes

import { CurriculumTopic } from './types';

export const SHS2_ENGLISH_TOPICS: CurriculumTopic[] = [
  // =========================================================================
  // TERM 1
  // =========================================================================
  {
    id: 'shs2-eng-t1-clauses-phrases-functions',
    subjectId: 'english',
    level: 'SHS 2',
    term: 1,
    orderIndex: 1,
    title: 'Phrases and Clauses: Grammatical Name and Function',
    description: 'The five phrase types by headword, the three clause families (noun, adjectival, adverbial), and the exact two-part answer WAEC demands: grammatical NAME plus grammatical FUNCTION.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=k22bbGbEyHI',
    youtubeId: 'k22bbGbEyHI',
    keyNotes: `• The one test that separates them: a CLAUSE contains a finite verb (a verb that shows tense and agrees with a subject); a PHRASE has no finite verb.
  - "in the crowded market" = prepositional PHRASE (no verb).
  - "because the market was crowded" = adverbial CLAUSE (was = finite verb).
• Phrase types named by their HEAD word:
  - Noun phrase (head = noun): "the three experienced timber traders".
  - Verb phrase (head = main verb + auxiliaries): "has been selling".
  - Adjectival phrase (head = adjective): "extremely proud of her results".
  - Adverbial phrase (head = adverb): "very quickly indeed".
  - Prepositional phrase (head = preposition): "under the old mango tree".
• Clause families tested in WASSCE comprehension (the "name and function" question):
  1. NOUN clause — does the job of a noun: subject, object, complement, object of a preposition, or appositive.
  2. ADJECTIVAL / RELATIVE clause — modifies a noun or pronoun; introduced by who, whom, whose, which, that, where.
  3. ADVERBIAL clause — modifies the verb; labelled by its conjunction: time, reason, condition, concession, purpose, result, manner, place, comparison.
• Answering the exam question in two halves:
  - Name: "Adverbial clause" (never just "clause").
  - Function: "it modifies the verb 'left' by expressing time" (never just "it is an adverbial").
• Intervening expressions and concord traps carry into this topic: the head noun of a noun phrase, not the noun in a modifying phrase, controls the verb.`,
    detailedNotes: {
      overview: 'SHS 1 named the parts of speech; SHS 2 escalates to groups of words that behave as one unit. This is the grammar WAEC actually asks in comprehension — "State the grammatical name of the underlined expression and what function it serves" — and it appears in every past question set from 2016 onward. A candidate who can name the unit and its job in one clean sentence collects two marks that careless students throw away.',
      introduction: 'Treat every sentence as a construction site. Words build phrases; phrases with a finite verb build clauses; clauses join to build sentences. Your task in an exam is to identify the unit, name the material it is made of, and say which part of the structure it supports.',
      realWorldContext: 'A GES circular read in assembly: "The headmaster announced that the mock examination would begin in the first week of November, and students who had not cleared their library fees should report to the librarian before then." In one announcement there is a noun clause after "announced", a relative clause qualifying "students", and a prepositional phrase of time — exactly the structures WAEC lifts comprehension questions from.',
      objectives: [
        'Distinguish phrases from clauses by applying the finite-verb test',
        'Name the five phrase types according to their headword',
        'Identify noun, adjectival and adverbial clauses inside an unseen passage',
        'State the grammatical function of a clause with the specific word it modifies or replaces',
        'Classify adverbial clauses by conjunction families (time, reason, condition, concession, purpose, result, manner, place, comparison)'
      ],
      sections: [
        {
          title: 'The Finite-Verb Test: Phrase or Clause',
          content: 'A group of words is a clause only if it contains a FINITE verb — a verb that carries tense and agrees with a subject (was, has gone, will open, sells). Infinitives (to eat) and -ing forms without an auxiliary (eating) are NON-FINITE, so "to finish the work" and "carrying two basins" remain phrases. Apply the test twice: first find the verb, then ask whether it shows tense. "After the long journey" = prepositional phrase (no verb at all). "After we completed the long journey" = adverbial clause (completed is past-tense finite).',
          bulletPoints: [
            'Present participles alone never make a clause: "the girl selling groundnut" — selling is non-finite, so this is a participial phrase.',
            'A clause can hide its subject in the understood sense, but in WASSCE sentences every clause you must name has an overt subject.',
            'One finite verb = one clause; two finite verbs joined properly = two clauses in one sentence.',
            'Subordinating conjunctions (because, although, if, when) always signal that a clause follows, never a bare phrase.'
          ],
          keyTakeaway: 'Find the verb, then check for tense: a finite verb makes a clause, anything else stays a phrase.',
          realWorldExample: 'Two signboards at Kejetia: "INSIDE THE SHOP" (prepositional phrase — no verb) and "BECAUSE THE SHOP WAS FULL" (adverbial clause of reason — was is finite).'
        },
        {
          title: 'Naming Phrases by Their Headword',
          content: 'A phrase is named after its head — the word the whole group is built around. Remove the modifiers and the head survives: "the three experienced timber traders from Techiman" shrinks to "traders", so it is a NOUN PHRASE. "has been selling silently all morning" shrinks to "selling" with its auxiliaries, so it is a VERB PHRASE. "very proud of her pupils" shrinks to "proud" (adjective head) — an ADJECTIVAL PHRASE, even though it ends with a prepositional phrase inside it. The nesting matters: an adjectival phrase can contain a prepositional phrase, but the outer name follows the outer head.',
          bulletPoints: [
            'Noun phrases expand left with determiners and adjectives, and right with prepositional or relative post-modifiers.',
            'Verb phrases include every auxiliary stacked before the main verb: "might have been repaired" is one verb phrase of four words.',
            'Adjectival phrases take degree modifiers: extremely, rather, quite, very + adjective.',
            'Adverbial phrases are headed by adverbs: "rather too noisily", "almost every day" (nominal adverbial phrase of time).',
            'Prepositional phrases always need a preposition plus its noun-equivalent object: through, across, during, but for, except.'
          ],
          keyTakeaway: 'Strip the modifiers; whatever word class survives as the head gives the phrase its name.',
          realWorldExample: 'A radio advert: "Our extremely affordable soap, imported from Tema, cleans faster" — adjectival phrase (extremely affordable), prepositional phrase (from Tema), adverbial phrase (faster) all in one line.'
        },
        {
          title: 'Noun Clauses: The Five Slots They Can Fill',
          content: 'A noun clause replaces a noun, so test it by substituting a single noun: if "it" fits the slot, the clause is functioning as a noun. The five slots are SUBJECT ("What the traders demanded was reasonable"), OBJECT OF A VERB ("The headmaster said that the gate would close at ten"), COMPLEMENT after a linking verb ("The problem is that nobody keeps records"), OBJECT OF A PREPOSITION ("We talked about how the project failed"), and APPOSE / same-reference ("Ama had one wish, that her sister would study medicine"). Introductory words are that, whether, if, what, whoever, how, why, when, and wh- + clause forms.',
          bulletPoints: [
            'A noun clause in the subject position usually begins with WHAT, WHOEVER, THAT or WHY: "Why he left remains unclear."',
            'After say, announce, explain, report, the that-clause is the object — the person is optional.',
            'After tell, ask, warn, advise, a person must appear before the clause: "told US that".',
            'Appose noun clauses repeat an abstract noun: news, fact, wish, hope, idea, belief, promise.',
            'Never call a noun clause "the object" without naming which verb it objects.'
          ],
          keyTakeaway: 'Substitute "it": if the sentence still works, the underlined group is a noun clause, then read the slot it occupies.',
          realWorldExample: 'A parent-teacher remark: "What matters is that your ward reads daily" — subject noun clause and complement noun clause in a single sentence.'
        },
        {
          title: 'Adverbial Clauses: Sorting by Conjunction Family',
          content: 'Label an adverbial clause by the meaning of its conjunction, not by guessing. TIME: when, while, before, after, since, until, as soon as, once. REASON: because, since, as, seeing that. CONDITION: if, unless, provided that, as long as, in case. CONCESSION: although, though, even though, whereas, no matter how. PURPOSE: so that, in order that, lest. RESULT: so...that, such...that, so much so that. MANNER: as, as if, as though. PLACE: where, wherever. COMPARISON: than, as...as. Function wording is fixed: "It modifies the verb ___ by expressing ___."',
          bulletPoints: [
            'SINCE and AS are reason conjunctions when they mean "because"; SINCE is a time conjunction when it answers "from when?".',
            'LEST carries a negative purpose and is followed by should + verb or the subjunctive: "He spoke softly lest he should wake the baby."',
            'UNLESS already means "if not"; writing "unless...not" is a double negative WAEC penalises.',
            'SO THAT (purpose) answers "why?"; SUCH...THAT (result) shows a consequence — test by rephrasing with "in order to".',
            'A concession clause can open the sentence, and a comma then separates it from the main clause.'
          ],
          keyTakeaway: 'The conjunction decides the label: identify it first, then write "modifies the verb ___ by expressing ___".',
          realWorldExample: 'A warning at a stream crossing in the rainy season: "Even when the water looks shallow, do not cross after heavy rain, so that no life will be lost" — concession, time and purpose clauses stacked in one notice.'
        }
      ],
      commonMistakes: [
        'Answering only half the question: writing "noun clause" with no function, or writing "it is the object" with no name — each half carries its own mark.',
        'Calling every group that begins with a preposition a clause: "during the long vacation" has no verb, so it can never be a clause.',
        'Naming an adjectival clause as adverbial because it contains the word "when" or "where": "the day when we arrived" modifies a NOUN, so it is adjectival.',
        'Missing the finite verb inside a long phrase and therefore miscounting the clauses in a sentence.',
        'Adding a resumptive pronoun when the relative pronoun is already the subject: "The trader who sold the cocoa, he has gone" — the "he" is a duplication error.'
      ],
      wassceExamTips: [
        'In Paper 2 comprehension the name-and-function item is worth 2 marks: 1 for the exact name, 1 for the function. Never leave out the verb or noun the unit relates to.',
        'Write the function in the examiner\'s formula: "It functions as the object of the verb \'praised\'." That wording earns the mark even when the passage wording differs.',
        'For Paper 1 lexis and structure, spot the conjunction first; most "choose the correct option" items on although/because/unless/no sooner are clause-label tests in disguise.',
        'Timing guide: spend no more than 45 seconds on a name-and-function item; if stuck, decide whether the underlined group has a finite verb — that alone tells you phrase or clause.',
        'Do not underline the punctuation; the comma before a non-defining clause is not part of the clause\'s name.'
      ],
      summaryChecklist: [
        'Can I prove whether a group of words is a phrase or a clause using the finite-verb test?',
        'Can I name a phrase by stripping its modifiers to the headword?',
        'Can I slot a noun clause as subject, object, complement, object of a preposition, or appositive?',
        'Can I label an adverbial clause by its conjunction family and name the verb it modifies?',
        'Can I write a two-part answer (name + function) that would score both marks in WASSCE?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-pc-1',
        title: 'Name and Function in a Comprehension Sentence',
        problem: 'State the grammatical name and function of the underlined expression: "The assembly member congratulated <u>what the volunteer firefighters had achieved</u> during the flood response."',
        stepByStepSolution: [
          'Step 1 (M1): Locate the finite verb inside the underlined group: "had achieved" is past perfect and agrees with the subject "the volunteer firefighters" — therefore the group is a CLAUSE, not a phrase.',
          'Step 2 (M1): Test substitution with a single noun: "congratulated IT" is grammatical, so the clause behaves as a noun.',
          'Step 3 (M1): Find the slot: it follows the transitive verb "congratulated" and receives the action, so it occupies the direct-object position.',
          'Step 4 (A1): Grammatical name: NOUN clause.',
          'Step 5 (A1): Grammatical function: it is the object of the verb "congratulated".'
        ],
        keyTakeaway: 'Finite verb proves clause; the "it" substitution proves noun function; the verb before it names the slot.'
      },
      {
        id: 'ex-shs2-eng-pc-2',
        title: 'Sorting Three Lookalike Modifiers',
        problem: 'Identify each underlined unit as a phrase or a clause, and name its type: (a) "The pupils <u>who won the science quiz</u> received hampers." (b) "<u>Inside the crowded hall</u>, nobody clapped." (c) "We danced <u>because our team had qualified</u>."',
        stepByStepSolution: [
          'Step 1 (M1): (a) contains the finite verb "won", so it is a clause; it qualifies the noun "pupils", so it is an ADJECTIVAL (relative) clause functioning as the post-modifier of "pupils".',
          'Step 2 (M1): (b) has no verb at all and opens with the preposition "inside", so it is a PREPOSITIONAL phrase functioning as an adverbial of place.',
          'Step 3 (M1): (c) contains the finite verb phrase "had qualified" and opens with the reason conjunction "because", so it is an ADVERBIAL clause of reason.',
          'Step 4 (A1): Its function is to modify the verb "danced" by expressing reason.',
          'Step 5 (A1): Summary of answers: (a) adjectival clause — modifies "pupils"; (b) prepositional phrase — adverbial of place; (c) adverbial clause of reason — modifies "danced".'
        ],
        keyTakeaway: 'One unit modifies a noun, one modifies a place slot, one modifies a verb — the headword they attach to decides the name.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t1-clauses',
      topicId: 'shs2-eng-t1-clauses-phrases-functions',
      title: 'Phrases and Clauses Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-pc-1',
          quizId: 'quiz-shs2-eng-t1-clauses',
          questionText: 'Which group of words is a clause rather than a phrase?',
          optionA: 'under the broken bridge',
          optionB: 'while the elders were speaking',
          optionC: 'carrying two heavy basins',
          optionD: 'extremely proud of her pupils',
          correctOption: 'B',
          subConcept: 'Finite-Verb Test',
          explanation: '"While the elders were speaking" contains the finite verb "were speaking", which shows past tense and agrees with the subject "the elders". The others have no finite verb: (a) is prepositional, (c) is participial, (d) is adjectival.',
          remediationTip: 'Ask two questions in order: is there a verb, and does it show tense? Only a tense-showing verb makes a clause.'
        },
        {
          id: 'q-shs2-pc-2',
          quizId: 'quiz-shs2-eng-t1-clauses',
          questionText: 'Name the function of the underlined expression: "Everyone knows <u>that the road to Agbogoloshie will be repaired</u>."',
          optionA: 'It is an adverbial clause of reason.',
          optionB: 'It is the subject of the sentence.',
          optionC: 'It is the object of the verb "knows".',
          optionD: 'It is an appositive noun clause.',
          correctOption: 'C',
          subConcept: 'Noun Clause Slots',
          explanation: 'The that-clause follows the transitive verb "knows" and answers "knows what?", so it is the object of the verb. It is not the subject because "everyone" already fills that slot.',
          remediationTip: 'Replace the clause with "it": "Everyone knows it." The word "it" lands in the object slot.'
        },
        {
          id: 'q-shs2-pc-3',
          quizId: 'quiz-shs2-eng-t1-clauses',
          questionText: 'The underlined expression is an adverbial clause of what? "The traders closed their stalls <u>before the rain began to fall</u>."',
          optionA: 'Reason',
          optionB: 'Time',
          optionC: 'Condition',
          optionD: 'Concession',
          correctOption: 'B',
          subConcept: 'Adverbial Clause Families',
          explanation: '"Before" answers the question "when?", so the clause is adverbial of time. Reason would answer "why?", condition would answer "under what circumstance?", and concession would mean "even though".',
          remediationTip: 'Match the conjunction to its question word: before/when = when?; because = why?; if = what condition?; although = despite what?'
        },
        {
          id: 'q-shs2-pc-4',
          quizId: 'quiz-shs2-eng-t1-clauses',
          questionText: 'Which sentence contains a noun clause used as the SUBJECT?',
          optionA: 'The teacher explained that the exam was postponed.',
          optionB: 'What the pupils need is more practice.',
          optionC: 'We are worried about how the project is going.',
          optionD: 'The truth is that nobody kept a record.',
          correctOption: 'B',
          subConcept: 'Subject Noun Clauses',
          explanation: 'In (b) the clause "What the pupils need" stands before the verb "is" and names the thing being talked about, so it is the subject. (a) is an object clause, (c) an object-of-preposition clause, (d) a complement clause.',
          remediationTip: 'Find the verb first, then look left: whatever stands in front of it as the doer or topic is the subject.'
        },
        {
          id: 'q-shs2-pc-5',
          quizId: 'quiz-shs2-eng-t1-clauses',
          questionText: 'Choose the one correct expression: "No matter how hard the team worked, <u>___</u>."',
          optionA: 'they did not win the match',
          optionB: 'unless they win the match',
          optionC: 'because they lost the match',
          optionD: 'so that they may win the match',
          correctOption: 'A',
          subConcept: 'Concession and the Main Clause',
          explanation: '"No matter how hard..." is a concession clause, so it needs a plain main clause stating the unexpected result: "they did not win the match". The other options add a second subordinate clause and leave the sentence without a main clause.',
          remediationTip: 'A subordinate clause can never stand alone; always attach one independent main clause to it.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t1-relative-clauses',
    subjectId: 'english',
    level: 'SHS 2',
    term: 1,
    orderIndex: 2,
    title: 'Relative Clauses: Choice of Pronoun, Defining vs Non-Defining',
    description: 'Who, whom, whose, which, that, where and when; the comma and meaning difference between defining and non-defining clauses; when the relative pronoun may be omitted; and the resumptive-pronoun and "who/which" errors WAEC tests.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=eFmfoeTkhH0',
    youtubeId: 'eFmfoeTkhH0',
    keyNotes: `• The relative pronoun copies the ANTECEDENT (the noun it qualifies):
  - who / that — people: "the nurse who treated him".
  - which / that — things and animals: "the bus which broke down".
  - whose — possession: "the girl whose results impressed everybody".
  - whom — people as OBJECT: "the man whom we invited".
  - where — places: "the town where she was posted".
  - when — times: "the year when the school was founded".
• Defining (restrictive) relative clause: tells WHICH one; no commas; "that" is allowed.
  - "The pupils who passed the mock exam will plant trees." (a selected group)
• Non-defining (descriptive) relative clause: adds extra information about an already-identified noun; commas are compulsory; "that" is FORBIDDEN.
  - "Kofi Atta, who passed the mock exam, will plant trees."
• Omission rule: the relative pronoun may be left out ONLY when it is the object of the clause: "the book (which) I bought"; never when it is the subject: "the boy *who fell*" must keep "who".
• Preposition placement: formal writing puts the preposition before whom/which ("the teacher to whom I spoke"); informal English may strand it ("the teacher who I spoke to"). Never use "that" after a preposition.
• One idea per clause: avoid stacking several "which" clauses; break long sentences into two for marks under Expression.`,
    detailedNotes: {
      overview: 'Relative clauses are the engine of mature writing and a favourite WAEC target. Paper 1 sets objective items on who/which/whose and on comma use; Paper 2 asks you to name the clause and say what it modifies; the essay marker silently rewards candidates who can compress two short sentences into one accurate complex sentence. This topic fixes the pronoun choice, the comma rule and the four errors Ghanaian scripts repeat.',
      introduction: 'A relative clause is an adjective that grew into a sentence. It hangs off a noun — its antecedent — and tells us either which one (defining) or something extra about it (non-defining). Get the pronoun right, get the comma right, and the clause earns its marks.',
      realWorldContext: 'A community radio feature in Wa: "The farmer whose shea trees were cut down last season, and who now leads the women\'s group, has asked the assembly for a replacement seedling bank." The two relative clauses identify the woman and add fresh information about her, exactly the defining and non-defining pattern a WASSCE passage would test.',
      objectives: [
        'Select the correct relative pronoun by matching it to the antecedent and its role in the clause',
        'Distinguish defining from non-defining relative clauses by meaning and punctuation',
        'Decide correctly whether a relative pronoun may be omitted',
        'Place the preposition before whom/which or strand it appropriately',
        'Detect and repair resumptive-pronoun, that-after-preposition, and stacked-clause errors'
      ],
      sections: [
        {
          title: 'Choosing the Pronoun: Antecedent Plus Role',
          content: 'Two facts decide the pronoun. First, the ANTECEDENT: people take who/that/whom, things take which/that, places take where, times take when, possession takes whose. Second, the ROLE inside the relative clause: subject takes who/which, object takes whom/which/that (or nothing), and possession takes whose. Analyse "The lender ___ vehicle broke down was late": the gap word stands for "the lender" (person) and owns "vehicle", so possession forces WHOSE — "whose" already carries the person, so no apostrophe or extra noun is needed.',
          bulletPoints: [
            'Whom is falling out of everyday use, but WASSCE still tests it in formal-object items: "the candidate whom the panel praised".',
            'That can replace who or which in defining clauses, but never after a comma and never after a preposition.',
            'Which in a sentential relative clause refers to the whole previous idea: "She arrived late, which annoyed the panel."',
            'Whoever / whatever = anyone who / anything that: "Whoever submits last will lose marks."',
            'Whose can also refer to things in formal style: "the town whose mayor resigned" — acceptable, but "of which" is the stricter form.'
          ],
          keyTakeaway: 'Name the antecedent, then find the gap word\'s job inside the clause — those two facts give one answer.',
          realWorldExample: 'A notice board at a Tema hospital: "Patients whose appointments were cancelled should contact the desk to which this notice refers."'
        },
        {
          title: 'Defining or Non-Defining: The Comma Changes the Meaning',
          content: 'A defining clause narrows the reference: "The teachers who attended the workshop received certificates" means only the attending subset. A non-defining clause adds information about a noun already unique: "The teachers, who attended the workshop, received certificates" says all the teachers attended. Punctuation follows the logic — no commas for defining, paired commas for non-defining, and "that" is impossible in a non-defining clause. Test by deleting the clause: if the sentence no longer identifies who is meant, the clause was defining.',
          bulletPoints: [
            'Proper names and unique nouns (my mother, the President, Accra) take non-defining clauses, since they cannot be narrowed.',
            'Possessives before the noun often make a clause non-defining: "Ama\'s brother, who lives in Kumasi, ...".',
            'A superlative or only/all structure invites a defining clause: "the best player who ever wore the shirt".',
            'Commas in speech show as short pauses; if you pause twice, you are probably using a non-defining clause.',
            'WAEC objective items reward the pair of commas: a single comma or none at all is marked wrong.'
          ],
          keyTakeaway: 'Ask whether the clause narrows the noun (defining, no commas) or merely adds to it (non-defining, commas).',
          realWorldExample: 'Two election headlines: "Candidates who submitted forms were screened" (a subset) versus "The candidates, who submitted forms last week, were screened" (all of them).'
        },
        {
          title: 'Omitting the Relative Pronoun and Compressing',
          content: 'Object relative pronouns disappear in natural English: "the kenkey that Ama sold" becomes "the kenkey Ama sold". Subject pronouns never disappear: "the trader who sold the cocoa" keeps "who", because dropping it would leave two verbs fighting ("the trader sold the cocoa" reads as a main clause). Beyond omission, SHS 2 expects reduction: a passive relative clause can shrink to a participle ("the books which were donated by the NGO" to "the books donated by the NGO"), and an active one can take -ing ("pupils who sit quietly" to "pupils sitting quietly").',
          bulletPoints: [
            'Reduction test: if the clause has a form of BE, delete BE and the pronoun together: "the girl who is standing there" to "the girl standing there".',
            'Never delete a pronoun that is the subject of a finite verb.',
            'Prepositional objects can go with the pronoun: "the office (which) I came from" — the preposition stays.',
            'Reduced clauses are participial phrases, so the finite-verb test from Topic 1 now calls them phrases.',
            'In formal letters, avoid heavy reduction; WAEC rewards clarity over cleverness.'
          ],
          keyTakeaway: 'Only object pronouns may drop, and only BE-deletion produces a safe reduced clause.',
          realWorldExample: 'A market list: "the tomatoes Mama bought", "the fishmonger selling tilapia" — one omitted object pronoun and one reduced active clause.'
        },
        {
          title: 'The Four Errors Ghanaian Scripts Repeat',
          content: '(1) Resumptive pronoun: "The boy who broke the window, he has run away" — the clause already has its subject, so the second pronoun duplicates; correct version is "The boy who broke the window has run away." (2) Wrong pronoun for things: students use "who" for institutions — "the school who was founded in 1972" must be "which". (3) Missing comma before non-defining "which" that refers to a whole clause: "He failed, which surprised many" needs that comma. (4) Stacking: four "which" clauses in one sentence produces a run-on; split it. Each error costs marks under Mechanical Accuracy and Expression, and all four are fixable by reading the sentence aloud and listening for a lost subject.',
          bulletPoints: [
            'Find the verb, then find its subject: a duplicated subject means a resumptive-pronoun error.',
            'Institutions, animals and abstract ideas take which/that, not who.',
            'Sentential "which" must follow a comma, never a full stop.',
            'Keep the relative clause next to the noun it modifies: "She sold the bicycle to her cousin that was red" is a misplaced modifier — write "the red bicycle".',
            'Do not end a formal letter with a preposition-stranded clause when a cleaner version exists: "the officer to whom I wrote".'
          ],
          keyTakeaway: 'Read for a lost subject, a wrong pronoun, a missing comma and a misplaced clause — those four catch most relative-clause errors.',
          realWorldExample: 'A corrected school magazine line: "Kwame, whose essay won the prize and who reads SHS 2 Science at Suntori, will represent the region."'
        }
      ],
      commonMistakes: [
        'Using "that" in a non-defining clause: "Ama, that won the prize, ..." — after commas only who, which, whose, whom, where, when are allowed.',
        'Deleting a subject pronoun: writing "the pupil won the quiz" when the intended meaning is "the pupil who won the quiz".',
        'Producing a resumptive pronoun: "The trader who sold the cocoa, he has gone" — the subject is stated twice.',
        'Assigning "who" to a thing or school: "the company who employed him" should read "which" or "that".',
        'Placing the relative clause away from its antecedent, creating a misplaced modifier: "He gave his sister the book that was interesting" leaves "that" ambiguous.'
      ],
      wassceExamTips: [
        'In lexis and structure, cover the four options and read only the sentence with the gap filled; a wrong pronoun usually "sounds" wrong once you trust the ear trained by reading.',
        'For a name-and-function item on a relative clause, name it "adjectival / relative clause" and function "it modifies the noun ___"; both halves are marked.',
        'Where the paper asks you to combine sentences, use one relative clause and keep total length under 25 words — long combined sentences invite concord errors.',
        'In an article or formal letter, place at least two accurate non-defining clauses; markers cite sentence variety under Expression.',
        'Check comma pairs: a non-defining clause needs a comma before AND after it; a lone comma is a mechanical-accuracy deduction.'
      ],
      summaryChecklist: [
        'Can I pick who, whom, whose, which, that, where or from two clues: antecedent and role?',
        'Can I tell a defining clause from a non-defining one by deleting it?',
        'Can I decide when a relative pronoun may be safely omitted?',
        'Can I reduce a relative clause to a participle without breaking the grammar?',
        'Can I spot and correct a resumptive pronoun and a misplaced relative clause?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-rc-1',
        title: 'Inserting the Correct Relative Pronoun',
        problem: 'Fill the gaps with who, whom, whose, which, where or that: "The mason ___ built our store was paid, but the tools ___ he borrowed have not returned to the neighbour ___ son still works with him."',
        stepByStepSolution: [
          'Step 1 (M1): Gap 1 — antecedent "the mason" (person) and the gap is the SUBJECT of "built": use WHO (THAT also acceptable in a defining clause).',
          'Step 2 (M1): Gap 2 — antecedent "the tools" (things) and the gap is the OBJECT of "borrowed": use WHICH or THAT, and note it may be omitted because it is an object.',
          'Step 3 (M1): Gap 3 — the gap expresses possession before "son": use WHOSE.',
          'Step 4 (A1): Answers: who ... which/that (or no pronoun) ... whose.',
          'Step 5 (A1): Read-back check: "The mason who built our store was paid, but the tools he borrowed have not returned to the neighbour whose son still works with him." Every clause now has exactly one subject.'
        ],
        keyTakeaway: 'Antecedent decides the family of pronouns; subject or object decides whether it may drop out.'
      },
      {
        id: 'ex-shs2-eng-rc-2',
        title: 'Combining Two Sentences and Punctuating Correctly',
        problem: 'Combine into one sentence using a relative clause, and punctuate it: "The school was founded in 1964. Abena studies at the school."',
        stepByStepSolution: [
          'Step 1 (M1): Identify the repeated idea ("the school") and choose the pronoun for a thing used as the object of "studies at": WHICH.',
          'Step 2 (M1): Decide defining or non-defining. "The school" is already identified as a particular one in context, and the added fact about its founding is extra information, so the clause is non-defining and needs commas.',
          'Step 3 (M1): Place the clause beside its antecedent: "The school, which was founded in 1964, ..."',
          'Step 4 (A1): Combined sentence: "Abena studies at the school, which was founded in 1964."',
          'Step 5 (A1): Verify the mark scheme conditions: correct pronoun, correct comma placement, one main clause, no duplicated subject, and the original two facts preserved.'
        ],
        keyTakeaway: 'Combine by attaching the extra information to its noun, then decide commas before choosing the pronoun.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t1-relative-clauses',
      topicId: 'shs2-eng-t1-relative-clauses',
      title: 'Relative Clauses Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-rc-1',
          quizId: 'quiz-shs2-eng-t1-relative-clauses',
          questionText: 'Choose the correct option to complete the sentence: "The learner ___ parents sell roasted plantain near the lorry station came second in the mock."',
          optionA: 'who',
          optionB: 'whose',
          optionC: 'which',
          optionD: 'whom',
          correctOption: 'B',
          subConcept: 'Possessive Relative Pronoun',
          explanation: 'The gap word owns "parents", so possession requires WHOSE. "Who" would have to be the subject of "sell", which is already governed by "parents".',
          remediationTip: 'If the word after the gap is a noun belonging to the antecedent, use whose: the learner + the learner\'s parents = whose parents.'
        },
        {
          id: 'q-shs2-rc-2',
          quizId: 'quiz-shs2-eng-t1-relative-clauses',
          questionText: 'In which sentence can the relative pronoun correctly be left out?',
          optionA: 'The nurse who attended the accident victim was praised.',
          optionB: 'The pupils who sit closest to the window should clean it.',
          optionC: 'The essay that Abena wrote won the regional prize.',
          optionD: 'The man who owns the bus station has died.',
          correctOption: 'C',
          subConcept: 'Omission of Object Pronouns',
          explanation: 'In (c) "that" is the object of "wrote", so it may be dropped: "The essay Abena wrote won the regional prize." In (a), (b) and (d) the pronoun is the subject and must remain.',
          remediationTip: 'After the gap, look for a new subject. If a subject follows immediately, the pronoun is an object and can go.'
        },
        {
          id: 'q-shs2-rc-3',
          quizId: 'quiz-shs2-eng-t1-relative-clauses',
          questionText: 'Which sentence is punctuated and worded correctly?',
          optionA: 'Kwame, that lives in Ashaiman, joined the club.',
          optionB: 'Kwame who lives in Ashaiman, joined the club.',
          optionC: 'Kwame, who lives in Ashaiman, joined the club.',
          optionD: 'Kwame which lives in Ashaiman joined the club.',
          correctOption: 'C',
          subConcept: 'Non-Defining Clause Punctuation',
          explanation: '"Kwame" is already identified, so the clause is non-defining: paired commas are compulsory and "that" is not permitted after a comma. (d) uses "which" for a person.',
          remediationTip: 'Names and unique nouns take commas plus who/which, never that.'
        },
        {
          id: 'q-shs2-rc-4',
          quizId: 'quiz-shs2-eng-t1-relative-clauses',
          questionText: 'Choose the correctly revised sentence: "The trader who sold us the bags, he has closed his shop."',
          optionA: 'The trader who sold us the bags, he has closed his shop.',
          optionB: 'The trader who sold us the bags has closed his shop.',
          optionC: 'The trader, he sold us the bags has closed his shop.',
          optionD: 'The trader which sold us the bags has closed his shop.',
          correctOption: 'B',
          subConcept: 'Resumptive Pronoun Error',
          explanation: 'The relative clause already supplies the subject through "who", so the extra "he" duplicates it. Deleting the resumptive pronoun and the comma produces the correct sentence.',
          remediationTip: 'Count the subjects of the main verb. Two subjects for one verb means a resumptive pronoun.'
        },
        {
          id: 'q-shs2-rc-5',
          quizId: 'quiz-shs2-eng-t1-relative-clauses',
          questionText: 'Complete formally: "The officer ___ I reported the missing carton refused to issue a statement."',
          optionA: 'who',
          optionB: 'that',
          optionC: 'to whom',
          optionD: 'which',
          correctOption: 'C',
          subConcept: 'Preposition Plus Relative Pronoun',
          explanation: 'The verb frame is "report TO someone". In formal style the preposition moves in front of the pronoun, and only WHOM may follow a preposition when the antecedent is a person. "That" can never follow a preposition.',
          remediationTip: 'Say the clause in full order: "I reported the missing carton TO the officer" — the preposition is what the gap needs.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t1-oral-minimal-pairs',
    subjectId: 'english',
    level: 'SHS 2',
    term: 1,
    orderIndex: 3,
    title: 'Oral English: Minimal Pairs, Vowel Contrasts and Weak Forms',
    description: 'Contrastive pairs /i:/-/ɪ/, /u:/-/ʊ/, /ɔ:/-/ɒ/, /ɑ:/-/ʌ/, /e/-/æ/; homophones and homographs; schwa and weak forms in connected speech; using contrastive stress to change meaning.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=h-oM9fD7rOk',
    youtubeId: 'h-oM9fD7rOk',
    keyNotes: `• A MINIMAL PAIR is two words that differ in exactly ONE sound and therefore change meaning: seat /si:t/ — sit /sɪt/; full /fʊl/ — fool /fu:l/; cart /kɑ:t/ — cut /kʌt/.
• The five long/short vowel pairs WAEC returns to every year:
  - /i:/ (leave, chief, key) vs /ɪ/ (live, belief, kick).
  - /u:/ (group, route, cruel) vs /ʊ/ (foot, good, would).
  - /ɔ:/ (lord, born, walk) vs /ɒ/ (lodging, not, was).
  - /ɑ:/ (class, half, father) vs /ʌ/ (pass, but, other) — note Ghanaian learners often shorten /ɑ:/ wrongly.
  - /e/ (bed, many, friend) vs /æ/ (bad, man, have) — /æ/ barely exists in Ghanaian English; train it by widening the jaw.
• Homophones sound identical but differ in spelling and meaning: pear/pare, seen/scene, weak/week, sea/see, fair/fare.
• Homographs are spelled alike but pronounced differently: LEAD /li:d/ (to guide) and LEAD /lɛd/ (the metal); LIVE /lɪv/ (verb) and LIVE /laɪv/ (adjective); READ /ri:d/ (present) and READ /rɛd/ (past); TEAR /tɪə/ (rip) and TEAR /tɛə/ (of the eye).
• WEAK FORMS: function words reduce to schwa in fast speech — to /tə/, for /fə/, of /əv/, at /ət/, and /ə/, can /kən/, was /wəz/. The citation (strong) form appears only when the word is stressed or final.
• Connected speech adds LINKING (/r/ reappears: "far away" /fɑ:r əweɪ/) and ELISION (sounds drop: "next day" to /nɛks.deɪ/).`,
    detailedNotes: {
      overview: 'Paper 3 tests the ear, not the eye. SHS 2 moves from naming sounds (SHS 1) to contrasting them: the examiner says a word and you must place it in the right member of a pair, or explain a difference that changes a whole meaning. Weak forms then explain why fluent English "sounds swallowed", which is the most common cause of lost marks in the sentence-repetition and dialogue sections.',
      introduction: 'Build a pair, then break it. Take two words that differ by one sound, say them ten times, and record yourself. When your ear can hear the difference, your mouth can make it — and Paper 3 becomes a listening exercise instead of a guessing game.',
      realWorldContext: 'A customs officer at Tema Harbour says "Please bring the CHEQUE" while a trader hears "Please bring the CHEEK of the manifest" — because /i:/ and /e/ were collapsed. One sound, one cleared shipment, or one delayed truck at the port: exactly why WAEC weights oral English.',
      objectives: [
        'Produce and distinguish the five long/short vowel contrasts in minimal pairs',
        'Identify homophones and homographs from sound alone',
        'Explain and reproduce weak forms of common function words in connected speech',
        'Apply contrastive stress to change the focus of a sentence',
        'Transcribe simple words and identify the number of sounds versus letters'
      ],
      sections: [
        {
          title: 'Building the Contrast: How to Drill Minimal Pairs',
          content: 'Isolate one sound and hold everything else fixed: beat /bi:t/ — bit /bɪt/ shares /b/ and /t/. Then practise the three-paper method: the examiner says one member of the pair and you must state which. Length is not the only clue — the quality differs: /i:/ is tense and near the front, /ɪ/ is lax and slightly lower and further back. Train in ordered sets: /i:-ɪ/ (sheep-ship, leave-living), /u:-ʊ/ (pool-pull, boot-button), /ɔ:-ɒ/ (core-cork, lord-lodging), /ɑ:-ʌ/ (cart-cut, half-huff), /e/-/æ/ (pet-pat, men-man).',
          bulletPoints: [
            'Practise in triples: same vowel in initial, medial and final position (eat, age, tea).',
            'Ghanaian L1 often lengthens short vowels, so mark only LENGTH when grading yourself is misleading — check TONGUE POSITION.',
            'Silent letters are irrelevant to the sound test: "meet" and "meat" share /i:/ despite different spelling.',
            'Use words you already know: WAEC never invents vocabulary in the orals paper.',
            'Record and replay: the delay between saying and hearing is what trains discrimination.'
          ],
          keyTakeaway: 'Change one sound, keep the rest fixed, and drill until the pair feels obvious.',
          realWorldExample: 'A classroom exchange: "The BOARD is dirty" versus "The BORED pupil sleeps" — /ɔ:/ against /ɒ/ in a phrase teachers use daily.'
        },
        {
          title: 'Homophones: Same Sound, Different Word',
          content: 'Homophones are identical in pronunciation but different in spelling and meaning: fair (just) / fare (money for transport), piece (part) / peace (calm), sea / see, week / weak, counsel / council, accent / except, right / write, some / sum, past / passed. WAEC Paper 1 uses them in lexis and structure ("Choose the word nearest in meaning"), and Paper 3 uses them to test whether you hear the difference you must spell. The safe strategy is to check the SLOT in the sentence: an article signals a noun, a subject slot signals a verb.',
          bulletPoints: [
            'Learn pairs in sentence frames, not lists: "PAY the fare" / "BE fair to us".',
            'The WAEC worklist of eight: fair/fare, piece/peace, sea/see, week/weak, some/sum, past/passed, then/than, mail/male.',
            'Silent letters create false pairs in the learner\'s head: "hour" and "our" are both /aʊə/, so the difference is spelling only.',
            'Verb-noun twins shift stress as well as spelling: PRACTICE (noun) / practise (verb, BrE), adVICE (noun) / adVISE (verb).',
            'When in doubt, replace the word with a synonym you can pronounce; spelling follows meaning.'
          ],
          keyTakeaway: 'Homophones are a spelling problem disguised as a sound problem; the sentence slot decides the spelling.',
          realWorldExample: 'A trotro mate shouting "Change!" for small change and a passenger hearing "Exchange?" — one /tʃeɪndʒ/ sound, two different business meanings.'
        },
        {
          title: 'Weak Forms and the Schwa in Real Speech',
          content: 'Native speakers stress content words (nouns, main verbs, adjectives, adverbs) and reduce structure words (articles, prepositions, auxiliaries, conjunctions, pronouns) to a schwa. So "for" becomes /fə/ in "a gift for you" but stays /fɔ:/ when asked alone or emphasised; "can" is /kən/ in "I can come"; "of" is /əv/; "that" as a conjunction is /ðət/. This is why a WASSCE dialogue sounds faster than the printed text. To decode it, locate the two or three stressed beats in the sentence and let everything else blur.',
          bulletPoints: [
            'Only the stressed syllable of a word uses a strong vowel; every other syllable tends to schwa: "banana" is /bəˈnɑ:nə/ — the A in the middle is the only full vowel.',
            'Weak forms never appear at the end of an utterance: there "to" is strong /tu:/.',
            'Auxiliaries drop their consonants too: "could have" to /kʊdə/, "must have" to /mʌstə/ — this explains the written error "could of".',
            'Contractions are the written trace of weak forms: I\'m, she\'s, they\'ve, we\'d.',
            'Never weaken the negation: "cannot" is /ˈkæn ˈnɒt/ with stress on NOT.'
          ],
          keyTakeaway: 'Rhythm decides vowel quality: unstressed means reduced, and reduced usually means schwa.',
          realWorldExample: 'A welcome speech: "We are grateful for the invitation" is heard as /wi ər ˈɡreɪtf fə ði ˌɪnvɪˈteɪʃən/ — three beats, the rest swallowed.'
        },
        {
          title: 'Contrastive Stress: Moving the Meaning',
          content: 'Sentence stress is normally on the last content word, but a speaker may move the beat to signal contrast, and Paper 3 Section on emphatic stress asks exactly this. In "AMA borrowed my torch", stress on AMA answers "Who borrowed your torch?"; stress on BORROWED answers "Did Ama steal your torch?"; stress on TORCH answers "Did Ama borrow your radio?". The rule for candidates: the correct question is the one that contradicts ONLY the stressed word while leaving the rest of the sentence intact.',
          bulletPoints: [
            'Emphatic stress is shown in print by CAPITALS or underlining; the capitals word is the focus of contrast.',
            'The distractor options usually change two elements at once; the right answer changes one.',
            'Questions beginning with DID are the usual format, so listen for the single contradicted element.',
            'Rising tone marks uncertainty or polite requests; falling tone marks statements, commands and WH-questions.',
            'Tag questions rise when genuinely asking and fall when confirming: "It\'s closed, isn\'t it?" (rising = real question).'
          ],
          keyTakeaway: 'One moved beat changes what the sentence denies — that is the whole emphatic-stress test.',
          realWorldExample: 'Two market reactions to the same words: "KOFI bought a goat" (not someone else) versus "Kofi bought a GOAT" (not a sheep).'
        }
      ],
      commonMistakes: [
        'Treating vowel length as the only difference and ignoring tongue position, so "ship" is pronounced as "sheep" in a reading-aloud passage.',
        'Pronouncing every vowel at full strength, which makes speech sound staccato and hides the real word boundaries in the orals dialogue.',
        'Writing "could of" and "should of" because the weak form /ə/ was heard as the preposition OF.',
        'Choosing the emphatic-stress answer that contradicts more than the capitalised word.',
        'Confusing homophones in spelling questions: writing "peace" for "piece" because the sound is identical.',
        'Inserting an /e/ before final consonant clusters or dropping final consonants, which changes a minimal pair: "card" for "cartridge".'
      ],
      wassceExamTips: [
        'Paper 3 is heard once or twice only; before the recording starts, read the printed options and predict which contrast is being tested.',
        'In the "choose the word whose underlined part is pronounced differently" items, transcribe all four silently before choosing — the odd one out is nearly always a vowel.',
        'Practise the five long/short pairs aloud weekly with a phone recording; markers award the vowel-quality distinction, not the duration.',
        'For the sentence-repetition task, keep the rhythm and the number of stressed beats even if you must shorten the sentence; losing beats loses marks.',
        'Never write a phonetic symbol you are unsure of in a transcription item; a wrong symbol is marked as an error, a missing one may still earn method credit.'
      ],
      summaryChecklist: [
        'Can I produce the five long/short vowel minimal pairs and identify which member I heard?',
        'Can I explain how homophones differ in spelling and meaning but not in sound?',
        'Can I hear and reproduce weak forms of to, for, of, at, can, was, that?',
        'Can I state which word carries emphasis and which element of meaning it contradicts?',
        'Can I count sounds and letters in a word without confusing the two?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-mp-1',
        title: 'Odd-One-Out Vowel Identification',
        problem: 'Choose the word whose underlined vowel sound is different from the other three: A. food  B. blood  C. roof  D. troop.',
        stepByStepSolution: [
          'Step 1 (M1): Transcribe the vowel in each word: food /fu:d/, roof /ru:f/? careful — spellings hide the sound, so mark what the ear knows: food /u:/, roof /u:/, troop /u:/.',
          'Step 2 (M1): Test the exception: "blood" is pronounced /blʌd/ — its "oo" carries the short /ʌ/, not /u:/.',
          'Step 3 (A1): The odd vowel is therefore in B, blood.',
          'Step 4 (A1): Cross-check by grouping: three /u:/ words versus one /ʌ/ word confirms B.',
          'Step 5 (A1): Final answer: B.'
        ],
        keyTakeaway: 'Ignore spelling; transcribe each vowel from pronunciation, then find the odd quality.'
      },
      {
        id: 'ex-shs2-eng-mp-2',
        title: 'Emphatic Stress: Choosing the Right Question',
        problem: 'To which question is the sentence "MAAME AKUA lent her neighbour a tent" the appropriate answer? A. Did Maame Akua buy a tent? B. Did her neighbour lend her a tent? C. Did Maame Akua lend her cousin a tent? D. Did Maame Akua lend her neighbour a torch?',
        stepByStepSolution: [
          'Step 1 (M1): Locate the emphasised word: "MAAME AKUA" (capitalised), so the contrast is about the PERSON who lent.',
          'Step 2 (M1): Recall the rule: the correct question must be contradicted by the stressed word alone, keeping every other element true.',
          'Step 3 (M1): Eliminate: A changes the verb and keeps the wrong action; D changes the object; C changes the recipient as well as answering to a different person.',
          'Step 4 (A1): B keeps lending, a tent and the neighbour while making the neighbour the lender instead of Maame Akua — exactly what the stress denies.',
          'Step 5 (A1): Answer: B.'
        ],
        keyTakeaway: 'The stressed word names the single false assumption inside the right question.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t1-minimal-pairs',
      topicId: 'shs2-eng-t1-oral-minimal-pairs',
      title: 'Minimal Pairs and Weak Forms Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-mp-1',
          quizId: 'quiz-shs2-eng-t1-minimal-pairs',
          questionText: 'Which pair is a TRUE minimal pair — two words differing in exactly one sound?',
          optionA: 'seat — sit',
          optionB: 'sea — see',
          optionC: 'read — bread',
          optionD: 'grown — brown',
          correctOption: 'A',
          subConcept: 'Minimal Pair Definition',
          explanation: 'Seat /si:t/ and sit /sɪt/ share /s/ and /t/ and differ only in the vowel, which is the definition of a minimal pair. Sea and see are homophones (identical in sound), read /ri:d/ and bread /brɛd/ differ in onset and vowel, and grown /ɡrəʊn/ and brown /braʊn/ differ in the vowel as well as the consonants.',
          remediationTip: 'Sound out both words and count the differences; exactly one difference, and that difference must change the meaning.'
        },
        {
          id: 'q-shs2-mp-2',
          quizId: 'quiz-shs2-eng-t1-minimal-pairs',
          questionText: 'In which sentence does the word FOR keep its strong form /fɔ:/ rather than reducing to /fə/?',
          optionA: 'a book for you',
          optionB: 'What are you looking for?',
          optionC: 'for the poor',
          optionD: 'He can swim.',
          correctOption: 'B',
          subConcept: 'Weak Forms at the End',
          explanation: 'In (b) "for" is the final element of the question, and function words keep their strong form /fɔ:/ at the end of an utterance. Elsewhere in the sentence they reduce to /fə/ or /kən/.',
          remediationTip: 'Remember: nothing weakens at the end of a tone group; end position forces the strong form.'
        },
        {
          id: 'q-shs2-mp-3',
          quizId: 'quiz-shs2-eng-t1-minimal-pairs',
          questionText: 'Choose the correct word: "The ___ of elders rejected the proposal to sell the land."',
          optionA: 'counsel',
          optionB: 'consul',
          optionC: 'council',
          optionD: 'cancelled',
          correctOption: 'C',
          subConcept: 'Homophones in Context',
          explanation: 'A body of elders that deliberates is a COUNCIL. "Counsel" means legal advice or to advise, "consul" is a trade officer abroad, and "cancelled" is a verb form — none can be a group of elders.',
          remediationTip: 'Homophone items are solved by the slot: name the class the gap needs (here, a collective noun of people), then choose the spelling carrying that meaning.'
        },
        {
          id: 'q-shs2-mp-4',
          quizId: 'quiz-shs2-eng-t1-minimal-pairs',
          questionText: 'Which transcription shows the weak form correctly?',
          optionA: 'I can come /aɪ kæn kəm/',
          optionB: 'I can come /aɪ kən kʌm/',
          optionC: 'I can come /aɪ keɪ ɛn si: əm/',
          optionD: 'I can come /aɪ kæŋ kɑ:m/',
          correctOption: 'B',
          subConcept: 'Schwa in Modals',
          explanation: '"Can" reduces to /kən/ and the main verb "come" reduces to /kəm/ because it is not the focus of the sentence; the strong form /kæn/ appears only in the negative or when emphasised.',
          remediationTip: 'Say the sentence quickly and mark which syllables you blur; the blurred vowels are schwas.'
        },
        {
          id: 'q-shs2-mp-5',
          quizId: 'quiz-shs2-eng-t1-minimal-pairs',
          questionText: 'The three words "pair", "pear" and "pare" are best described as:',
          optionA: 'homographs',
          optionB: 'synonyms',
          optionC: 'homophones',
          optionD: 'antonyms',
          correctOption: 'C',
          subConcept: 'Homophone Terminology',
          explanation: 'They share one pronunciation /pɛə/ but differ in spelling and meaning, which is the definition of homophones. Homographs share SPELLING but differ in sound.',
          remediationTip: 'Break the words: homo-phone = same sound; homo-graph = same writing.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t1-sentence-types',
    subjectId: 'english',
    level: 'SHS 2',
    term: 1,
    orderIndex: 4,
    title: 'Sentence Patterns and Types: Simple, Compound, Complex, Compound-Complex',
    description: 'The five basic SV/SVO/SVC/SVOO/SVOC patterns, sentence types by structure, coordination versus subordination, and how to vary patterns for marks under Organisation and Expression.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=smgyeUomfyA',
    youtubeId: 'smgyeUomfyA',
    keyNotes: `• Five core patterns (SHS 1 verbs decide which):
  - SV: The bell rang.
  - SVO: Ama bought kenkey.
  - SVC: The pupil seems tired. (linking verb + complement)
  - SVOO: The tutor gave us notes. (two objects: indirect + direct)
  - SVOC: They elected Adjoa president. (object + object complement)
• TYPES BY STRUCTURE:
  - SIMPLE: one clause, one finite verb set: "Kwame cooked banku and fried plantain." (compound subject/verb still simple)
  - COMPOUND: two or more independent clauses joined by FANBOYS (for, and, nor, but, or, yet, so) with a comma, or by a semicolon with a conjunctive adverb: "The bus had left, so we walked."
  - COMPLEX: one independent clause + at least one dependent clause: "Because the bus had left, we walked."
  - COMPOUND-COMPLEX: at least two independent clauses plus one dependent clause: "Because the bus had left, we walked, and we arrived late."
• COMMA RULE: no comma between two verbs sharing one subject ("He opened the door and walked in"); comma required before a coordinating conjunction joining two full clauses.
• RUN-ONS come in two shapes: fused ("I waited the bus never came") and comma splice ("I waited, the bus never came"). Fix with a conjunction, a semicolon, or a full stop.`,
    detailedNotes: {
      overview: 'Composition marks move on sentence control. WAEC rewards candidates who can vary sentence length and structure without producing run-ons, and Paper 1 asks for transformations that keep the same meaning in a different pattern. SHS 2 therefore reuses the five SHS 1 verb patterns as building blocks and stacks them into four structural types, then practises the punctuation that holds them together.',
      introduction: 'Every sentence is one of five shapes, and every sentence of English is a combination of those shapes. Learn the five, then join them three ways — and you can write any sentence the examination asks for.',
      realWorldContext: 'A student\'s WhatsApp voice note after a missed exam: "The trotro broke down at Oyibi, so I ran, but the gate had already closed, and the invigilator who was on duty refused to open it." Four clauses, two coordinating joins and one relative clause — a compound-complex sentence a WAEC marker would grade as good Expression.',
      objectives: [
        'Assign any sentence to one of the five basic patterns by identifying the verb type',
        'Classify sentences as simple, compound, complex or compound-complex by clause count',
        'Join clauses correctly with coordinating and subordinating conjunctions and punctuate them',
        'Repair fused sentences and comma splices',
        'Vary sentence types deliberately in an essay to gain Organisation marks'
      ],
      sections: [
        {
          title: 'From Verb Type to Sentence Pattern',
          content: 'The verb decides the shape. An action verb may need nothing (SV: "The crowd cheered"), one object (SVO: "The crowd cheered the finalists"), or two (SVOO: "The organisers gave the finalists medals"). A linking verb demands a complement that restates the subject (SVC: "The finalists were elated"). Certain verbs take an object plus a complement describing it (SVOC: "We judged the match a draw"). Test: add a second noun and see whether it names a different thing (SVOO: medals differ from finalists) or the same thing (SVOC: a draw is the match).',
          bulletPoints: [
            'Linking verb list to memorise: be, become, seem, appear, look, smell, taste, sound, feel, grow, turn, prove.',
            'In SVC the complement is an adjective or a noun equivalent: "She looks calm" / "He became a teacher."',
            'SVOO alternates with a preposition: "gave medals to the finalists" — same meaning, different pattern.',
            'SVOC cannot take "to": "judged the match to be a draw" keeps the complement but changes form.',
            'Passive sentences keep the pattern but reshuffle it: "Ama was given a book" is the passive of an SVOO verb, with the indirect object promoted to subject.'
          ],
          keyTakeaway: 'Identify the verb first: linking verbs want complements, action verbs want objects.',
          realWorldExample: 'A school notice in four patterns: "Registration closed" (SV); "The secretary recorded the numbers" (SVO); "The exercise felt endless" (SVC); "The panel gave the winners certificates" (SVOO).'
        },
        {
          title: 'Coordination: Building Compound Sentences',
          content: 'Coordination joins equals. Two independent clauses may be joined by a comma plus FANBOYS, by a semicolon alone, or by a semicolon plus a conjunctive adverb (however, therefore, moreover, nevertheless, consequently) and a comma. Each method signals a different relationship: AND adds, BUT contrasts, SO concludes, OR offers alternatives, YET concedes, FOR reasons, NOR negates after a negative. A compound sentence must be able to stand on both sides of the join — test each half alone.',
          bulletPoints: [
            'Use one comma before the coordinator, never two; the comma belongs to the conjunction.',
            'Semicolons join clauses that are already balanced; if the ideas are unequal, subordinate instead.',
            'Conjunctive adverbs are not conjunctions: "It rained, however we started" is a splice — write "It rained; however, we started."',
            'Repeat the subject only when it changes: "Ama cooked and served" needs no second subject.',
            'For emphasis in essays, start a short sentence with AND or BUT — accepted in modern formal writing but use sparingly.'
          ],
          keyTakeaway: 'Both halves must survive alone; the comma or semicolon marks the seam.',
          realWorldExample: 'An election poster: "Vote for clean water, and vote for paved roads" — two commands, one comma, one coordinator.'
        },
        {
          title: 'Subordination: Building Complex Sentences',
          content: 'Subordination makes one clause depend on another, showing logical relationships rather than mere sequence. The dependent clause may open the sentence (then a comma follows it) or sit after the main clause (usually no comma). Because, although, if, when, unless, since, so that and relative pronouns all subordinate. Choosing the right subordinator is a meaning decision: "Although the road was muddy, we reached home" concedes; "Because the road was muddy, we reached home late" reasons.',
          bulletPoints: [
            'Fronted adverbial clause: always a comma. Mid-position reason clause: usually no comma.',
            'A sentence with three or more subordinate clauses reads heavy; split at the second.',
            'Relative clauses pack information without starting new sentences, which is how good articles compress.',
            'Noun clauses let an idea become a subject: "That the road is muddy surprises nobody."',
            'Never join a dependent clause to a main clause with only "and"; that is coordination, not subordination.'
          ],
          keyTakeaway: 'Subordination shows cause, concession, condition or time; coordination only joins.',
          realWorldExample: 'A weather bulletin line: "When the winds from the Harmattan strengthen, farmers in the Upper East Region should irrigate at dawn." Subordinate time clause, comma, main clause.'
        },
        {
          title: 'Run-Ons, Comma Splices and Sentence Variety',
          content: 'Two independent clauses with no seam make a fused sentence; with only a comma they make a comma splice — both are marked as mechanical errors. Four repairs: add a coordinator, use a semicolon, use a subordinating conjunction, or start a new sentence. Then the craft point: a good essay mixes types. Two or three compounds, one or two complex sentences with fronted clauses, an occasional short simple sentence for punch, and a compound-complex sentence for a full idea — that variety reads as control.',
          bulletPoints: [
            'Diagnosis: find every finite verb; if two clauses and no conjunction sits between them, you have a run-on.',
            'Comma splices are the single most common Mechanical Accuracy loss in Ghanaian scripts.',
            'A dash may replace a semicolon for emphasis in informal writing only.',
            'Vary openings: an -ing clause, a fronted adverbial, a short subject, a question in speeches.',
            'Keep average length under 22 words in formal letters; long clauses invite concord slips.'
          ],
          keyTakeaway: 'Every two clauses need a seam; once safe, vary the pattern for marks.',
          realWorldExample: 'A corrected diary line: "The generator failed. We studied by torchlight, and although the lamp died at midnight, we did not stop." — full stop repair, then compound-complex variety.'
        }
      ],
      commonMistakes: [
        'Writing a comma splice: "We reached the station, the bus had already gone."',
        'Calling a sentence with a compound verb complex: "Kofi cooked and ate" is still simple — one subject, two verbs, one clause.',
        'Using "because" with "so" in the same sentence (double subordination of one relationship): "Because it rained, so we stayed home."',
        'Placing a comma before a coordinating conjunction when the second group of words has no subject of its own.',
        'Overloading one sentence with three relative clauses and losing the main verb entirely.',
        'Treating a conjunctive adverb (however, therefore) as a conjunction and joining two clauses with a comma.'
      ],
      wassceExamTips: [
        'When a Paper 1 item asks you to combine sentences, state the logical link first (reason, time, concession), then choose the subordinator; markers award one mark for the connector and one for accurate punctuation.',
        'In summary writing, one point per complete sentence keeps you safe from fused-sentence deductions.',
        'For essays, plan your sentence types in the first paragraph: examiners cite variety in the first four lines when setting the Expression band.',
        'Proofread specifically for commas before and, but, so: at the level of the whole script, this single check recovers two or three marks.',
        'In the objective paper, count finite verbs to decide clause numbers; that method answers most "identify the type of sentence" items in under twenty seconds.'
      ],
      summaryChecklist: [
        'Can I place any sentence in one of the five verb-driven patterns?',
        'Can I distinguish SVOO from SVOC with a substitution test?',
        'Can I join two clauses three different ways and punctuate each correctly?',
        'Can I find and repair a comma splice in a paragraph of my own writing?',
        'Can I plan a paragraph that mixes simple, compound and complex sentences on purpose?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-st-1',
        title: 'Classifying Sentence Type by Clause Count',
        problem: 'Classify each sentence as simple, compound, complex or compound-complex: (a) "The chemistry tutor and her assistants prepared the laboratory." (b) "The power failed, so we worked under the corridor lamps." (c) "Although the power failed, we finished the practical, and the tutor signed our notebooks."',
        stepByStepSolution: [
          'Step 1 (M1): Count finite verbs in (a): "prepared" — one finite verb, one clause; the compound subject and object do not add clauses. (a) is SIMPLE.',
          'Step 2 (M1): Count in (b): "failed" and "worked" — two independent clauses joined by the coordinator "so" with a comma. (b) is COMPOUND.',
          'Step 3 (M1): Count in (c): "failed" (dependent, introduced by "although"), "finished" and "signed" (both independent, joined by "and") — two independent plus one dependent clause. (c) is COMPOUND-COMPLEX.',
          'Step 4 (A1): Answers: (a) simple, (b) compound, (c) compound-complex.',
          'Step 5 (A1): Re-check by covering the subordinating clause in (c): the remainder is still two complete sentences, confirming the classification.'
        ],
        keyTakeaway: 'Count finite verbs, then ask whether each clause can stand alone; the totals decide the type.'
      },
      {
        id: 'ex-shs2-eng-st-2',
        title: 'Repairing a Comma Splice and Keeping the Meaning',
        problem: 'Correct without changing the meaning: "The maize was stored in the old shed, the weevils destroyed half of it."',
        stepByStepSolution: [
          'Step 1 (M1): Identify the fault: two independent clauses, each with its own subject and finite verb, joined by a comma alone — a comma splice.',
          'Step 2 (M1): Choose the true relationship between the ideas: the second clause states a consequence of storing maize in an old shed, so a result or cause connector fits.',
          'Step 3 (M1): Apply one of the four repairs. Coordination: "... shed, and the weevils destroyed half of it." Subordination: "Because the maize was stored in the old shed, the weevils destroyed half of it."',
          'Step 4 (A1): Model answer: "Because the maize was stored in the old shed, the weevils destroyed half of it."',
          'Step 5 (A1): Verify punctuation: the fronted dependent clause is followed by a comma, and no splice remains.'
        ],
        keyTakeaway: 'Diagnose the splice, name the logic between the ideas, then choose the connector that states that logic.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t1-sentence-types',
      topicId: 'shs2-eng-t1-sentence-types',
      title: 'Sentence Patterns and Types Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-st-1',
          quizId: 'quiz-shs2-eng-t1-sentence-types',
          questionText: 'Which sentence follows the SVOO pattern?',
          optionA: 'The parents elected their son class captain.',
          optionB: 'The prefect gave the pupils extra reading time.',
          optionC: 'The headmaster seemed pleased with the assembly.',
          optionD: 'The cleaners swept the corridor neatly.',
          correctOption: 'B',
          subConcept: 'SVOO versus SVOC',
          explanation: '"The pupils" (indirect object) and "extra reading time" (direct object) are two different things, so the verb takes two objects. In (a) "class captain" restates "their son", which makes it SVOC.',
          remediationTip: 'Ask whether the two nouns name the same thing. Same thing = SVOC; different things = SVOO.'
        },
        {
          id: 'q-shs2-st-2',
          quizId: 'quiz-shs2-eng-t1-sentence-types',
          questionText: 'Identify the type: "When the harmattan winds arrived, the farmers irrigated their beds, and the women winnowed the groundnuts."',
          optionA: 'Simple',
          optionB: 'Compound',
          optionC: 'Complex',
          optionD: 'Compound-complex',
          correctOption: 'D',
          subConcept: 'Clause Counting',
          explanation: 'There are three finite verb groups: "arrived" inside the dependent time clause, and "irrigated" plus "winnowed" in two independent clauses joined by "and". Two independent clauses plus one dependent clause give compound-complex.',
          remediationTip: 'Cover the "when..." part: if two complete sentences remain, the type is compound-complex.'
        },
        {
          id: 'q-shs2-st-3',
          quizId: 'quiz-shs2-eng-t1-sentence-types',
          questionText: 'Which sentence is punctuated correctly?',
          optionA: 'The tailor measured the cloth he cut it the same evening.',
          optionB: 'The tailor measured the cloth, and he cut it the same evening.',
          optionC: 'The tailor measured the cloth and, he cut it the same evening.',
          optionD: 'The tailor measured the cloth, he cut it the same evening.',
          correctOption: 'B',
          subConcept: 'Coordinating Join Punctuation',
          explanation: 'Two independent clauses joined by a coordinator need a comma before "and", exactly as in (b). (a) is a fused sentence, (d) is a comma splice, and (c) places the comma on the wrong side of the conjunction.',
          remediationTip: 'Comma goes immediately BEFORE the and, never after it.'
        },
        {
          id: 'q-shs2-st-4',
          quizId: 'quiz-shs2-eng-t1-sentence-types',
          questionText: 'The pattern of "The spice smells wonderful" is:',
          optionA: 'SV',
          optionB: 'SVO',
          optionC: 'SVC',
          optionD: 'SVOC',
          correctOption: 'C',
          subConcept: 'Linking Verb Complements',
          explanation: '"Smells" here links the subject to the adjective "wonderful", which describes the subject rather than receiving action, so the pattern is SVC. It would be SVO only in "The dog smelled the spice."',
          remediationTip: 'Replace the verb with "is": if the sentence still works, the verb is linking and the pattern is SVC.'
        },
        {
          id: 'q-shs2-st-5',
          quizId: 'quiz-shs2-eng-t1-sentence-types',
          questionText: 'Combine best, keeping the meaning of cause: "The clinic ran out of gloves. The nurses postponed the minor operations."',
          optionA: 'The nurses postponed the minor operations, so the clinic ran out of gloves.',
          optionB: 'The clinic ran out of gloves, so the nurses postponed the minor operations.',
          optionC: 'The clinic ran out of gloves although the nurses postponed the minor operations.',
          optionD: 'The clinic ran out of gloves, the nurses postponed the minor operations.',
          correctOption: 'B',
          subConcept: 'Logical Connectors',
          explanation: 'The cause is the shortage of gloves and the result is the postponement, so the sequence "cause, so result" in (b) preserves the meaning. (a) reverses the logic, (c) expresses concession, and (d) splices.',
          remediationTip: 'Label the two ideas cause and effect first, then pick the connector that points the same way.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t1-comprehension-vocabulary',
    subjectId: 'english',
    level: 'SHS 2',
    term: 1,
    orderIndex: 5,
    title: 'Comprehension: Vocabulary in Context, Reference and Interpretation',
    description: 'Answering "what does the underlined word mean", identifying reference words, reading tone and purpose, and the WAEC answer discipline that converts understanding into marks.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=MWMOMfsf2RM',
    youtubeId: 'MWMOMfsf2RM',
    keyNotes: `• The four question types in a WASSCE comprehension:
  1. LITERAL — answer is stated; lift and reshape, never copy whole lines.
  2. INFERENCE — answer is implied; justify with a phrase from the text.
  3. VOCABULARY IN CONTEXT — "Find a word which means ___" or "What does the underlined word mean?"
  4. REFERENCE / STRUCTURE — "What does the underlined pronoun refer to?", plus grammatical name and function.
• Method for vocabulary items: read the sentence, cover the word, guess the sense, then check by substitution. The part of speech must match your answer.
• Reference words: pronouns, "this/that/these/those", "the former/the latter", "such", "the same" — always look BACKWARD to the nearest matching noun or clause, and test agreement in number.
• Tone words examiners accept: critical, sympathetic, sarcastic, humorous, pessimistic, optimistic, cautious, indignant, nostalgic, objective.
• Answer discipline: a complete sentence, own words where allowed, no examples, no borrowed phrases longer than five words, and never more than the number of points asked.`,
    detailedNotes: {
      overview: 'Comprehension is the paper every candidate must pass, and it is where strong candidates still lose marks: they answer in fragments, lift whole sentences, or explain a word with a word of the wrong class. SHS 2 trains the four question types as separate skills with fixed response formats, so that understanding reliably converts into awarded marks.',
      introduction: 'Read the passage twice: once for the story, once for the questions. Then treat each question as a small argument — your answer plus one short quotation that proves it. That habit alone moves a script from average to good.',
      realWorldContext: 'A mock-paper passage on cocoa-belt practices: "The farmers pruned the trees cautiously, aware that an over-aggressive cut in the dry season could cost a whole season\'s pods." A question asking the meaning of "pruned" is answered by substitution — "cut back the branches" — and a question on "that" points back to "an over-aggressive cut in the dry season". Science and Social Studies texts behave the same way, which is why this paper rewards wide reading.',
      objectives: [
        'Explain the meaning of a word or phrase as it is used in a specific passage',
        'Identify the referent of pronouns, demonstratives and comparative reference expressions',
        'Answer inference questions with a text-supported justification',
        'Recognise the writer\'s tone and purpose and cite the language that signals them',
        'Format answers as complete sentences that avoid mindless lifting'
      ],
      sections: [
        {
          title: 'Lifting Versus Paraphrasing',
          content: 'WAEC penalises "mindless lifting" — copying a whole line without processing it. The safe technique is SHAPE: Select the phrase that carries the point, Halve it to the essential words, Adjust pronouns and tense to your own sentence, Put it in a complete answer, and End with the exact required element. Lifted fragments of five words or fewer are acceptable when they are the technical term the question demands; a twenty-word copied clause is not.',
          bulletPoints: [
            'Begin literal answers with the subject the question supplies: "The two reasons are..."',
            'Never copy a whole sentence to answer a whole-sentence question; change at least the subject and one verb.',
            'If the passage gives an example and the question asks a reason, answer with the reason, not the example.',
            'Keep to the number of points asked: a third unasked point adds no marks and risks contradiction.',
            'Where the instruction says "in your own words", substitution of synonyms alone still counts as lifting.'
          ],
          keyTakeaway: 'Select the key phrase, reshape it into a complete sentence, and never copy a whole line.',
          realWorldExample: 'Passage: "Traders along the Kumasi road network complained that repeated checkpoints delayed their perishable goods." Question: Why did traders complain? Answer: "They complained because the checkpoints made their perishable goods arrive late."'
        },
        {
          title: 'Vocabulary in Context: The Substitution Method',
          content: 'For "Find a word or phrase which means ___", search the passage for the sense, not the letter: the answer must be a single word from the text and must match the part of speech given in the question. For "What does the underlined word mean?", cover the word, read the sentence, state the sense in your own words, then test your answer by putting it back into the gap. Many candidates lose marks by answering an adjective when the underlined word is a verb.',
          bulletPoints: [
            'Distinguish the two frames: "Find a word" = take it FROM the passage; "mean in this passage" = put your own synonym IN.',
            'Use the surrounding clause: "the old bridge was condemned" — condemned here means declared unsafe, not criticised.',
            'Watch the tense in your answer: if the word is past, your synonym must be past.',
            'Idiomatic phrases are usually tested for their non-literal sense: "turned a deaf ear" = ignored deliberately.',
            'For suffix clues, name the class first: -ment/-tion signals a noun, -ly an adverb, -ful an adjective.'
          ],
          keyTakeaway: 'Match both the sense and the word class, then prove it by putting your synonym back in the gap.',
          realWorldExample: 'Exam item: "the council RECEDED after protests" — meaning "changed its decision", from the frame "recede from a resolution".'
        },
        {
          title: 'Reference and Cohesion: Where the Pronoun Points',
          content: 'Reference questions test whether you track the thread of a passage. Personal and demonstrative pronouns refer backward to the nearest grammatically compatible noun or clause: number and gender must agree. "This" and "that" sometimes refer to a whole preceding idea, in which case answer with a short noun phrase naming the idea. "The former/the latter" pick the first and second of two mentioned items, and "such" points to a quality just stated.',
          bulletPoints: [
            'Answer a reference item with a noun phrase, not a sentence: "the damaged road" or "the decision to close the market".',
            'Check number first: "they" cannot refer to a singular noun.',
            'If two candidate nouns fit, choose the one in the same clause or the immediately preceding sentence.',
            'Comparative reference ("the same", "such", "likewise") usually points to an action, not a thing.',
            'Ellipsis is the opposite problem: the writer omits words a reader must restore — "Some pupils came early; others [came] late."'
          ],
          keyTakeaway: 'Reference is backward-looking: agree in number, then name the nearest compatible item.',
          realWorldExample: 'Passage: "The committee reviewed the permit, and it was renewed." — "it" refers to the permit, not the committee, because a permit can be renewed.'
        },
        {
          title: 'Tone, Purpose and the Evidence Sentence',
          content: 'Tone is the writer\'s attitude, shown by word choice. Strong adjectives and irony signal sarcasm; measured hedges signal caution; statistics and neutral verbs signal objectivity; exclamations and warm adjectives signal enthusiasm. Purpose is what the writer wants to do: inform, persuade, warn, complain, entertain, urge reform. For both, the answer format is: label, then quote the language that proves it — one mark each.',
          bulletPoints: [
            'Collect three signal words from the passage before naming the tone.',
            'Do not confuse tone with mood: tone belongs to the writer, atmosphere/mood to the scene.',
            'In speeches and advertisements, the purpose is usually to persuade; in reports and textbooks, to inform.',
            'A rhetorical question signals emphasis or complaint, not a request for information.',
            'Words like "alas", "unfortunately", "shockingly" mark the writer\'s stance and are the fastest tone evidence.'
          ],
          keyTakeaway: 'Name the attitude, then quote the exact words that carry it.',
          realWorldExample: 'Passage line: "Once again the contractor has vanished, leaving yet another half-built block." The repetition of "again" and "yet another" shows an indignant, critical tone.'
        }
      ],
      commonMistakes: [
        'Answering in a fragment: "Because the road was muddy" as a full response to a "why" question.',
        'Copying two whole sentences when a single reshaped clause was required.',
        'Giving a synonym of the wrong word class in a vocabulary item.',
        'Choosing a word that is NOT from the passage when the instruction says "find a word in the passage".',
        'Naming a tone with no supporting quotation, or repeating the question as the answer.',
        'Answering three points when only two were asked and thereby contradicting one of the required two.'
      ],
      wassceExamTips: [
        'Budget Paper 2 time as: Section A/B comprehension 25 minutes, summary 20 minutes, composition 65 minutes; answer the comprehension questions in the order set, since later items reuse earlier vocabulary.',
        'Read the questions BEFORE the second reading of the passage; that second reading becomes a hunt for answers rather than another story.',
        'For "In your own words, explain the following clause", paraphrase the WHOLE clause including the comparison or condition — half-paraphrase earns zero.',
        'Where the marker asks for the grammatical name and function, write both halves on one line; leaving function blank forfeits the second mark.',
        'Underline the passage words you intend to quote once and only once; double underlining invites a lifting penalty.'
      ],
      summaryChecklist: [
        'Can I reshape a lifted phrase into a complete answer sentence?',
        'Can I explain an underlined word by substitution and match its word class?',
        'Can I trace any pronoun or demonstrative to its referent and check number agreement?',
        'Can I name a tone and quote the exact words that prove it?',
        'Can I keep my answer to the number of points the question demands?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-co-1',
        title: 'Vocabulary in Context with Word-Class Control',
        problem: 'The underlined word is used in the sentence: "The assembly decided to WATER down the proposal after the traders\' protest." Explain what "water down" means in this sentence, and state the word class of "proposal".',
        stepByStepSolution: [
          'Step 1 (M1): Identify the class of the underlined expression: "to water down" follows "to" and takes an object ("the proposal"), so it is a PHRASAL VERB.',
          'Step 2 (M1): Cover the expression and read for sense: a proposal changed after protests, so the phrase must mean weakening or reducing the strength of something.',
          'Step 3 (M1): Check the image: water added to a drink dilutes it, so the figurative meaning is to make something less effective or acceptable.',
          'Step 4 (A1): Meaning: to make the proposal weaker or less strict, especially by removing its strongest parts.',
          'Step 5 (A1): "proposal" is a NOUN (the direct object of "water down", preceded by the article "the").'
        ],
        keyTakeaway: 'Establish the word class first, then paraphrase the sense in that same class.'
      },
      {
        id: 'ex-shs2-eng-co-2',
        title: 'Reference plus Inference in One Passage Extract',
        problem: 'Extract: "The borehole had served the village for eleven years before it finally failed. The women walked two kilometres to the stream, and the children left school early to join them." (a) What does "it" refer to? (b) What can be inferred about the effect of the failure on education?',
        stepByStepSolution: [
          'Step 1 (M1): Locate the nearest compatible antecedent for "it" in the previous sentence: "The borehole" (singular, inanimate) — number and gender agree, so (a) the borehole.',
          'Step 2 (M1): For (b), identify what the passage states: children left school early to fetch water.',
          'Step 3 (M1): Move one step beyond the statement, as inference requires: schooling was interrupted because water collection took over the school hours.',
          'Step 4 (A1): (a) "it" refers to the borehole.',
          'Step 5 (A1): (b) It can be inferred that the failure reduced learning time for children, since they left school early to fetch water from the stream.'
        ],
        keyTakeaway: 'Reference answers take the nearest agreeing noun; inference answers take one logical step past the text and no further.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t1-comprehension',
      topicId: 'shs2-eng-t1-comprehension-vocabulary',
      title: 'Comprehension Skills Quiz',
      timeLimitMinutes: 12,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-co-1',
          quizId: 'quiz-shs2-eng-t1-comprehension',
          questionText: 'Which response best avoids mindless lifting for: "Why did the cocoa farmers cut down some of their trees?" (passage: "Because the swollen shoot disease was spreading rapidly from tree to tree, the farmers were advised to cut down some of the affected trees.")',
          optionA: 'Because the swollen shoot disease was spreading rapidly from tree to tree.',
          optionB: 'The disease was spreading.',
          optionC: 'The farmers were advised to cut down some of the affected trees.',
          optionD: 'Trees were cut down.',
          correctOption: 'B',
          subConcept: 'Paraphrase versus Lifting',
          explanation: 'Option (b) restates the cause in the candidate\'s own words as a complete sentence. (a) and (c) copy whole passage clauses, and (d) answers in a fragment that gives no reason.',
          remediationTip: 'Rebuild the reason as your own short sentence: subject + verb + cause, with no unbroken phrase longer than four words from the text.'
        },
        {
          id: 'q-shs2-co-2',
          quizId: 'quiz-shs2-eng-t1-comprehension',
          questionText: 'In the sentence "The new policy was condemned by the union", the word "condemned" means:',
          optionA: 'sentenced to death',
          optionB: 'declared unfit for use',
          optionC: 'strongly disapproved of',
          optionD: 'praised publicly',
          correctOption: 'C',
          subConcept: 'Contextual Meaning',
          explanation: 'A policy cannot be declared structurally unfit and is not a criminal, so the union\'s action is strong disapproval. The sense is fixed by the subject ("policy") and the agent ("union").',
          remediationTip: 'Ask what the subject can actually receive: unions condemn decisions, engineers condemn buildings, courts condemn people.'
        },
        {
          id: 'q-shs2-co-3',
          quizId: 'quiz-shs2-eng-t1-comprehension',
          questionText: '"Some traders paid their levies and others did not. The latter were barred from the stalls." To whom does "the latter" refer?',
          optionA: 'the traders who paid their levies',
          optionB: 'the traders who did not pay their levies',
          optionC: 'all the traders',
          optionD: 'the stall owners',
          correctOption: 'B',
          subConcept: 'Former and Latter',
          explanation: '"The former" picks the first of two mentioned groups and "the latter" the second; the second group is those who did not pay, so they were barred.',
          remediationTip: 'Number the two groups 1 and 2 as you read; former = 1, latter = 2.'
        },
        {
          id: 'q-shs2-co-4',
          quizId: 'quiz-shs2-eng-t1-comprehension',
          questionText: 'A passage reads: "Once again the contractor has disappeared, leaving yet another unfinished block." The tone of the writer is best described as:',
          optionA: 'objective and neutral',
          optionB: 'humorous',
          optionC: 'indignant and critical',
          optionD: 'nostalgic',
          correctOption: 'C',
          subConcept: 'Tone Identification',
          explanation: 'The repeated "again"/"yet another" and the verb "disappeared" carry the writer\'s irritation and blame, which is indignation. An objective report would state the facts without those loaded words.',
          remediationTip: 'Circle the emotionally loaded words first; the tone is the feeling they express.'
        },
        {
          id: 'q-shs2-co-5',
          quizId: 'quiz-shs2-eng-t1-comprehension',
          questionText: 'The instruction says: "Find one word in the passage which means to make something weaker." Which answer format is correct?',
          optionA: 'The word means dilute.',
          optionB: 'dilute',
          optionC: 'to dilute',
          optionD: 'Dilution',
          correctOption: 'B',
          subConcept: 'Find-a-Word Format',
          explanation: 'A "find a word" item is answered by a single word taken exactly as it appears in the passage, so the bare verb "dilute" scores. Explanatory sentences and changed forms (dilution) do not match the instruction.',
          remediationTip: 'For find-a-word items write ONE word only, in the same form the passage uses.'
        }
      ]
    }
  },
  // =========================================================================
  // TERM 2
  // =========================================================================
  {
    id: 'shs2-eng-t2-formal-letters-articles',
    subjectId: 'english',
    level: 'SHS 2',
    term: 2,
    orderIndex: 6,
    title: 'Composition: The Formal Letter — Complaint, Request and Application',
    description: 'Two addresses and a heading, the three-paragraph argument structure, formal diction with no contractions, "Yours faithfully" with signature and full name, plus the email variant WAEC now sets.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=Dg3dMyZ2AU0',
    youtubeId: 'Dg3dMyZ2AU0',
    keyNotes: `• Layout (top to bottom, each block separated by one blank line):
  1. Writer's address, right side, two or three lines, NO country unless foreign, with the date beneath it.
  2. Receiver's address (title + institution + location, or a P.O. Box), flush left.
  3. Salutation: "Dear Sir," / "Dear Madam," / "Dear Headmaster," — never "Dear Sir/Madam," and never a first name.
  4. Heading: CAPITAL LETTERS, underlined, no full stop, and it must mirror the question ("A COMPLAINT ABOUT IRREGULAR BILLING").
  5. Body: three or four paragraphs.
  6. Subscription: "Yours faithfully," (unknown name) or "Yours sincerely," (named receiver), then signature, then full name in print, then position if relevant.
  7. NO postcode-only address, no first-name sign-off, no P.S. in a formal letter.
• Paragraph plan that earns Content marks:
  - Opening: identify yourself and state the purpose in one sentence.
  - Middle: the facts — dates, places, names, what happened, what you have already done.
  - Closing: the specific action you want and a courteous expectation of a reply.
• Register: no contractions, no slang, no exclamations, no rhetorical questions; use "I wish to bring to your notice", "I shall be obliged if", "Please treat this matter as urgent".
• The email variant keeps the addresses but replaces them with To/From/Subject lines and drops the handwritten signature.`,
    detailedNotes: {
      overview: 'Formal letters are the highest-scoring composition in WASSCE because the format is fixed and the argument is planned for you by the question. SHS 2 raises the demand: not only correct format, but a persuasive body that answers every part of the task in a logical order. Marks are lost on three things — a missing signature line, an emotional tone, and one giant paragraph.',
      introduction: 'Write as a person with a grievance or a request who still intends to keep the relationship. Firm facts, courteous wording, and a clear ask: that is the whole art of the formal letter.',
      realWorldContext: 'A SHS 2 pupil in Axim writing to the district director of education about a collapsed latrine: the letter must carry the school\'s name, the date the latrine failed, how many pupils are affected, what the headmaster has already done, and the exact request — a contractor before the next term. Every one of those details is a Content mark, and the tone must stay polite enough to be filed and acted upon.',
      objectives: [
        'Lay out a formal letter with correct address blocks, date, salutation, heading and subscription',
        'Organise the body into purpose, facts and requested action with paragraphing that scores',
        'Sustain formal register by removing contractions, slang and emotional exaggeration',
        'Answer every element of the question so that no content mark is forfeited',
        'Adapt the same letter to the email format WAEC now sometimes sets'
      ],
      sections: [
        {
          title: 'The Address Blocks and the Date',
          content: 'The writer\'s address sits on the right, written from smallest to largest unit without a country unless the letter crosses a border: "St. Louis Senior High School, P.O. Box 39, Kumasi." The date goes on the line below it in full: "12th November, 2026." The receiver\'s address, flush left, begins with a title and job, not a name: "The District Director of Education, Ghana Education Service, Axim." Never write the receiver\'s address at the top right, and never place your own name in it.',
          bulletPoints: [
            'The right-hand block may be punctuated or unpunctuated, but the choice must be consistent throughout.',
            'Write the school or institution as the locality when the receiver is inside it: a pupil writes to "The Headmaster" of that school.',
            'The date never carries a comma after the year: "12th November, 2026." is the accepted Ghanaian form.',
            'Do not add phone numbers or e-mail addresses unless the question demands contact details.',
            'One blank line between every block; markers count spacing under Organisation.'
          ],
          keyTakeaway: 'Writer right, receiver left, date under the writer\'s address, and titles before names.',
          realWorldExample: 'A correctly blocked opening: "Ghana College of Education, P.O. Box 43, Winneba" on the right, then "The Manager, Community Water Supply, Winneba" on the left.'
        },
        {
          title: 'Salutation, Heading and the Faithful/Sincere Choice',
          content: 'Open with "Dear Sir," or "Dear Madam," when the receiver is unnamed, and close "Yours faithfully,". When you address a named official by title — "Dear Headmaster," — modern style prefers "Yours sincerely,", and WAEC accepts either as long as the pair is consistent. The heading is compulsory in Ghanaian practice: a noun phrase in capitals, underlined, with no full stop, taken straight from the question. Keep it short: "A COMPLAINT ABOUT DELAYED SALARY" rather than a whole sentence.',
          bulletPoints: [
            'Never write "Dear Sir/Madam,"; examiners treat it as a formatting error.',
            'Do not begin with the person\'s first name; familiarity belongs to informal letters.',
            'The heading states the subject, never the demand: "REQUEST FOR CLASSROOM BLOCKS", not "GIVE US CLASSROOMS".',
            'A heading must not repeat the whole question; three to six words is the safe range.',
            'Consistency rule: if you write "Dear Sir,", the subscription is "Yours faithfully," — matching pairs are marked together.'
          ],
          keyTakeaway: 'Match salutation to subscription, and let the heading name the matter in four words.',
          realWorldExample: 'A parent\'s letter to a clinic: heading "COMPLAINT ABOUT NURSES\' ATTITUDE TO YOUNG MOTHERS", salutation "Dear Madam,", subscription "Yours faithfully,".'
        },
        {
          title: 'Body Architecture: Purpose, Facts, Action',
          content: 'Paragraph one announces who you are and why you write, in two sentences at most. Paragraphs two and three carry the evidence: dates, numbers, names, places, the sequence of events, and what you have already done about it. Paragraph four states the requested action, the deadline if the question gives one, and a courteous close: "I trust the matter will receive your urgent attention." Never introduce new facts in the last paragraph, and never split a single idea across two paragraphs.',
          bulletPoints: [
            'One idea per paragraph, each opening with a topic sentence that answers part of the question.',
            'Give at least three concrete details per body paragraph — vague letters lose Content marks.',
            'State the desired action in a full sentence with a modal: "I should be grateful if you would inspect the building before the rainy season."',
            'Avoid threats and insults; firmness comes from facts, not adjectives.',
            'If the question supplies three points, write three body paragraphs so the marker can tick each.'
          ],
          keyTakeaway: 'Announce, evidence, request — and let the number of question points set the number of paragraphs.',
          realWorldExample: 'A complaint to a bus company: "On 4th August three of our pupils were left at the Winneba station because the second bus departed without checking the platform. Passengers were not informed. Please instruct drivers to verify the student manifest before leaving."'
        },
        {
          title: 'Register Control and the Email Variant',
          content: 'Formal diction means noun-heavy sentences, no contractions (write "do not", not "don\'t"), no exclamations, and no colloquial intensifiers ("very very", "so much"). Use accepted frames: "I write to bring to your notice", "I wish to draw your attention to", "Kindly do the needful"? avoid that Ghanaian-English cliché; write "Your prompt action in this regard will be appreciated." When WAEC sets an e-mail, keep the writer\'s address and date, replace the receiver block with a "To:" line, put the heading after "Subject:", drop the handwritten signature, and close with the full name and class.',
          bulletPoints: [
            'Delete "I beg to state that" — it is padding and wastes a line.',
            'Do not open with pleasantries ("How is your family?"); that belongs to informal letters.',
            'Rhetorical questions and direct address of feelings ("Are you not ashamed?") cost Expression marks.',
            'In an e-mail, "Subject:" replaces the underlined heading but the wording stays the same.',
            'Never add a P.S.; the point must sit inside the body where it is argued.'
          ],
          keyTakeaway: 'The formal letter is facts in courteous frames: no contractions, no clichés, no postscripts.',
          realWorldExample: 'A submitted e-mail line: "Subject: REQUEST FOR PERMISSION TO USE THE SCHOOL HALL — Dear Madam, I write on behalf of the Debating Society to request...".'
        }
      ],
      commonMistakes: [
        'Signing with a first name only, or omitting the signature line entirely in a formal letter.',
        'Writing the receiver\'s address on the right-hand side, or writing the writer\'s name inside the receiver\'s block.',
        'Mixing registers: "Dear Sir, how is your family? I am very very sorry but your staff is rude."',
        'Producing one long body paragraph with no topic sentences, which collapses the Organisation score.',
        'Using "Dear Sir/Madam," as the salutation, or pairing "Dear Sir," with "Yours sincere".',
        'Ending with a threat or an insult instead of a stated, courteous request for action.'
      ],
      wassceExamTips: [
        'Plan for five minutes before writing: list the three body points from the question and number the paragraphs, so the marker can find every content point.',
        'Reserve four marks of Mechanical Accuracy by scanning for contractions and apostrophes in the last three minutes; formal letters lose these marks quietly.',
        'Write about 250 words. Under 200 words forfeits content development; over 320 words multiplies errors.',
        'Always copy the receiver\'s designation from the question; a wrong designation costs a Content mark even when the letter is otherwise excellent.',
        'Time guide: 45 minutes on the best letter of Section B, leaving 20 minutes for planning and 5 for proofreading.'
      ],
      summaryChecklist: [
        'Can I place the two address blocks, the date and the heading without a formatting error?',
        'Can I pair the salutation with the correct subscription every time?',
        'Can I build a body that moves from purpose to facts to requested action?',
        'Can I strip contractions, slang and clichés from my own draft?',
        'Can I convert the letter into a correct e-mail layout when the question demands it?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-fl-1',
        title: 'Diagnosing a Faulty Formal Letter Opening',
        problem: 'Identify and correct the errors in this opening: "Dear Sir/Madam, I am writing to you because the water tanker man did not come and we are suffering. 12/11/26."',
        stepByStepSolution: [
          'Step 1 (M1): Check the salutation: "Dear Sir/Madam," is unacceptable; the receiver is unknown, so it must be "Dear Sir," with "Yours faithfully," later.',
          'Step 2 (M1): Check the date: a numeric short form is informal and out of position; the full date belongs beneath the writer\'s address.',
          'Step 3 (M1): Check register: "the water tanker man" and "we are suffering" are colloquial and emotional; replace with the officer\'s title and a factual statement of effect.',
          'Step 4 (M1): Check structure: no heading and no stated purpose; a heading in capitals and a one-sentence statement of purpose must be added.',
          'Step 5 (A1): Revised model: "12th November, 2026. THE WATER SUPPLY MANAGER, TARKWA MUNICIPAL ASSEMBLY. WATER SUPPLY TO NSEINUM ANGO. Dear Sir, I write to complain that no tanker has delivered water to our neighbourhood since 2nd November, and residents now walk one kilometre to the well."'
        ],
        keyTakeaway: 'Fix the pair (salutation-subscription), the date, the heading, then the tone — in that order.'
      },
      {
        id: 'ex-shs2-eng-fl-2',
        title: 'Turning a Question into a Paragraph Plan',
        problem: 'Question: "Write a letter to your Municipal Chief Executive complaining about the state of roads in your community and suggesting two remedies." Plan the letter.',
        stepByStepSolution: [
          'Step 1 (M1): Extract the demands: (i) complaint about road condition, (ii) two suggestions, (iii) formal tone to a named-in-office receiver.',
          'Step 2 (M1): Choose the format markers: address block, date, "The Municipal Chief Executive" address, salutation "Dear Sir," with "Yours faithfully,", heading "A COMPLAINT ABOUT THE STATE OF OUR ROADS".',
          'Step 3 (M1): Allocate paragraphs: purpose (who you are, why you write); evidence (potholes, dust, an accident, market-day congestion); remedy one (graded gravel and drains); remedy two (a monthly community-maintenance roster); closing action and thanks.',
          'Step 4 (A1): Insert concrete detail into each body paragraph: name two streets, give one date, and quantify one loss — "on 3rd August a motorbike overturned at the junction near the clinic".',
          'Step 5 (A1): Verify against the question: both remedies appear, the complaint is evidenced, and no personal grievance is left unargued; the plan is ready to write in 45 minutes.'
        ],
        keyTakeaway: 'The question\'s verbs build your paragraph list before you write a single sentence.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t2-formal-letters',
      topicId: 'shs2-eng-t2-formal-letters-articles',
      title: 'Formal Letter Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-fl-1',
          quizId: 'quiz-shs2-eng-t2-formal-letters',
          questionText: 'Which subscription correctly matches the salutation "Dear Sir,"?',
          optionA: 'Your friend,',
          optionB: 'Yours sincerely,',
          optionC: 'Yours faithfully,',
          optionD: 'Respectfully yours, Ama',
          correctOption: 'C',
          subConcept: 'Salutation Subscription Pairing',
          explanation: 'An unnamed receiver addressed as "Dear Sir," takes "Yours faithfully,". "Yours sincerely," pairs with a named receiver, and "Your friend," belongs to informal letters.',
          remediationTip: 'Faithful goes with the unknown; sincere goes with the name you used.'
        },
        {
          id: 'q-shs2-fl-2',
          quizId: 'quiz-shs2-eng-t2-formal-letters',
          questionText: 'Choose the sentence whose register is acceptable in a formal letter.',
          optionA: 'I beg to state that we are suffering very badly, sir.',
          optionB: 'Don\'t you think it is time the assembly acted?',
          optionC: 'I should be grateful if your office would inspect the drain before the rainy season.',
          optionD: 'Your workers are rude and useless, that\'s all.',
          correctOption: 'C',
          subConcept: 'Formal Register',
          explanation: 'Only (c) states a courteous, specific request with a formal frame ("I should be grateful if"). (a) uses padding and exaggeration, (b) uses a contraction and a rhetorical question, and (d) insults the reader.',
          remediationTip: 'Formal letters use request frames, not feelings: "I should be grateful if...", "Your office is kindly requested to..."'
        },
        {
          id: 'q-shs2-fl-3',
          quizId: 'quiz-shs2-eng-t2-formal-letters',
          questionText: 'Where does the writer\'s date belong in a Ghanaian formal letter?',
          optionA: 'Above the receiver\'s address on the left',
          optionB: 'Immediately below the writer\'s address on the right',
          optionC: 'Under the heading, centred',
          optionD: 'After the subscription, in brackets',
          correctOption: 'B',
          subConcept: 'Letter Layout',
          explanation: 'The date follows the writer\'s address in the right-hand block, before the receiver\'s address. Placing it elsewhere is a mechanical-accuracy fault.',
          remediationTip: 'Remember the order: your address, your date, their address, greeting, heading.'
        },
        {
          id: 'q-shs2-fl-4',
          quizId: 'quiz-shs2-eng-t2-formal-letters',
          questionText: 'A letter is addressed to "The Headmaster, Sunyani Senior High School". Which salutation and subscription pair is best?',
          optionA: 'Dear Sir, / Yours faithfully,',
          optionB: 'Dear Headmaster, / Yours sincerely,',
          optionC: 'Dear Mr Baffour, / Yours faithfully,',
          optionD: 'Hi Headmaster, / Your friend,',
          correctOption: 'B',
          subConcept: 'Named Receiver',
          explanation: 'The receiver is identified by title, so the greeting uses that title and the subscription takes "Yours sincerely,". (a) is acceptable in older style but weaker; (c) invents a name the question never gave; (d) is informal.',
          remediationTip: 'If the greeting contains a name or title you can point to, use "sincerely".'
        },
        {
          id: 'q-shs2-fl-5',
          quizId: 'quiz-shs2-eng-t2-formal-letters',
          questionText: 'Which heading follows WAEC convention?',
          optionA: 'Complaint about bad roads.',
          optionB: 'REQUEST FOR THE REPAIR OF OUR ROADS',
          optionC: 'My Complaint About the Road Which is Very Bad',
          optionD: 'roads in our area are dangerous',
          correctOption: 'B',
          subConcept: 'Heading Convention',
          explanation: 'The heading is a concise noun phrase in capital letters with no final full stop. (a) carries a full stop and sentence case, (c) is a rambling sentence, and (d) is lower case and states a grievance rather than the subject.',
          remediationTip: 'Build the heading as REQUEST FOR... / COMPLAINT ABOUT... / APPRECIATION FOR... in capitals, then stop without punctuation.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t2-articles-speeches',
    subjectId: 'english',
    level: 'SHS 2',
    term: 2,
    orderIndex: 7,
    title: 'Articles for Publication and Speech Writing',
    description: 'Title, byline and reader hook for magazine articles; vocatives, motion stance, rhetorical devices and a proper vote of thanks for speeches and debates.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=TMluIcOZIx8',
    youtubeId: 'TMluIcOZIx8',
    keyNotes: `• ARTICLE FORMAT:
  1. Title (catchy, centred or bold, no full stop).
  2. Byline: "By Ama Serwaa, SHS 2" beneath the title.
  3. Introduction that hooks: a question, a startling fact, or a short scene.
  4. Body paragraphs — one controlling idea each, developed with reason, example and effect.
  5. Conclusion: judgement, appeal or forecast; never introduce a new point.
  - No address, no date block, no salutation, no signature; articles are written to a public readership, not a person.
• SPEECH / DEBATE FORMAT:
  1. Vocatives in order: "The Chairperson, the panel of judges, the timekeeper, my co-debaters, and you my audience — good morning."
  2. State your position: "I stand before you to propose/oppose the motion that ...".
  3. Point one, with illustration; point two; point three — signposted with "Firstly", "Secondly", "Finally".
  4. Rebuttal slot in debate: name the opponent's argument, then dismantle it.
  5. Close: "Thank you for listening" / "I so move."
• Language for both: direct address, rhetorical questions, triads (rule of three), repetition for emphasis, concrete local examples, and controlled formal diction.`,
    detailedNotes: {
      overview: 'Articles and speeches are the two compositions that reward personality: WAEC markers look for a voice that holds a stranger\'s attention. Both are expository or argumentative, both avoid the letter apparatus, and both lose marks when the candidate writes one long rambling block. SHS 2 trains the formats, then the three rhetorical devices that lift an answer from average to good.',
      introduction: 'An article is a conversation with a reader who can walk away; a speech is a conversation with a room that must be won. In both cases, the first sentence does the work of five, and every paragraph carries exactly one idea.',
      realWorldContext: 'The school magazine carries a SHS 2 piece on galamsey: "The river that gave my grandmother fish now gives her typhoid." At Speech and Prize Day the same pupil, debating, opens: "The Chairperson, the panel of judges, my co-debaters and you, the audience — I stand to oppose the motion that our rivers can be cleaned by waiting." One idea, two formats: the article persuades by scene and evidence, the speech by stance and rhythm.',
      objectives: [
        'Produce the article format of title, byline, hook, developed paragraphs and closing judgement',
        'Open a speech with correct vocatives and a clear statement of position on the motion',
        'Develop each paragraph with a reason, a local illustration and a stated effect',
        'Deploy rhetorical questions, triads and repetition without overworking them',
        'End a composition with a conclusion that judges rather than repeats'
      ],
      sections: [
        {
          title: 'The Article: Title, Byline and the Four-Paragraph Body',
          content: 'Write the title last so it names the argument, not just the topic: "Why Our Classrooms Empty Every December" beats "School". The byline sits under the title. The introduction must place the reader inside the problem within two sentences — a scene, a figure, or a question. Each body paragraph follows the pattern claim, reason, illustration, effect. Keep the tone public: address the reader as "we" and "us", never "Dear reader". End with a judgement that looks forward: a recommendation, a warning or a challenge.',
          bulletPoints: [
            'Titles are short, specific and unpunctuated; a colon is allowed for a subtitle.',
            'No personal address, no signature at the bottom, no date block: the byline carries the identification.',
            'Use the passive sparingly; articles in the school magazine earn marks for active, concrete verbs.',
            'Aim for 250-300 words; four or five paragraphs of 50-60 words each.',
            'If the question says "for publication in your school magazine", write for pupils and teachers, so avoid official jargon.'
          ],
          keyTakeaway: 'Title that argues, hook that places the reader, paragraphs that develop one claim each.',
          realWorldExample: 'Article opening: "At 5.30 every morning, before the bells, the market women of Adukoe already know which buses will come. That knowledge is why our pupils are late.".'
        },
        {
          title: 'The Speech: Vocatives, Stance and Signposting',
          content: 'Salute the room in descending order of office, then state the motion and your position in one sentence: "I stand before you to support the motion that street hawking should be banned in our communities." Number your points and signpost them: "My first reason is economic." Signposting is what the marker quotes when awarding Organisation marks. Between points, address the audience directly ("Consider your own experience") to hold attention.',
          bulletPoints: [
            'Vocatives are followed by a dash or comma, then the greeting: "the timekeeper — good morning."',
            'Never read the motion twice; state it once and stay on your side of it.',
            'Use "propose" for the government side and "oppose" for the other side in formal debate wording.',
            'Signposting words: firstly, in the second place, above all, finally — each begins a paragraph.',
            'Close with a return to the stance: "For these reasons, I urge this house to support the motion. Thank you."'
          ],
          keyTakeaway: 'Acknowledge the room, declare the stance, number the reasons, and repeat the stance at the close.',
          realWorldExample: 'A house captains\' debate line: "The Chairperson, the judges, my co-debaters and you, fellow students — I oppose the motion, and I will give you three reasons drawn from this very campus."'
        },
        {
          title: 'Rebuttal and the Rhetorical Toolkit',
          content: 'In debate, one paragraph must face the opponent: name their argument, then answer it with fact, consequence or a better principle. "My friend tells us that banning hawking will throw girls out of work. The evidence from Kumasi says otherwise..." Beyond rebuttal, three devices earn Expression marks: the rhetorical question (asks without needing an answer), the triad (three parallel items: "no water, no desks, no teacher"), and purposeful repetition ("We asked. We waited. We were ignored."). Deploy each at most twice in a short composition.',
          bulletPoints: [
            'Quote the opposing argument accurately before attacking it; a straw man loses persuading power.',
            'Rhetorical questions work best at paragraph openings, never as a whole paragraph.',
            'Triads must be parallel in structure: three nouns, three verbs or three clauses.',
            'Repetition gains force by shortening: three sentences, then one word.',
            'Avoid proverbs used as substitutes for argument; WAEC marks reasoning, not ornament.'
          ],
          keyTakeaway: 'Answer the other side by name, and use question, triad and repetition as measured seasoning.',
          realWorldExample: 'Rebuttal model: "The opposition claims fees will rise. In fact, the assembly budget of 2025 already provides for the stalls, and no cedi of the market levy touches the girl who sells groundnut."'
        },
        {
          title: 'Common Marks Lost in Both Formats',
          content: 'Candidates write articles as letters ("Dear Editor") when the question did not ask for a letter to the editor, forget the byline, or open a speech without vocatives. Another frequent loss is a conclusion that merely repeats the introduction; a conclusion must judge, recommend or warn. Length control matters: 150 words looks underdeveloped, 450 words multiplies concord errors.',
          bulletPoints: [
            'Write "Dear Editor" only when the task specifies a LETTER to the editor — that task is a formal letter, not an article.',
            'Place the byline immediately under the title; markers look for it first.',
            'Vocatives are compulsory in a speech; a speech without them loses the format mark.',
            'A conclusion should answer "so what?": recommend, warn, appeal.',
            'Proofread for the repeated-subject error in signposted sentences ("Firstly, we must that..." is a fragment).'
          ],
          keyTakeaway: 'Know which format the question names, and give the conclusion a job to do.',
          realWorldExample: 'A fixed ending: "If the assembly paves one kilometre of road each year, the buses will come back to Abokobi on time, and no child will sell peanuts before sixth period."'
        }
      ],
      commonMistakes: [
        'Adding an address block and "Yours faithfully," to an article — the format is a letter, not a magazine piece.',
        'Omitting vocatives or the statement of position in a speech.',
        'Writing one undivided body instead of one paragraph per point.',
        'Using slang and contractions in a debate speech intended as formal.',
        'Ending with "Thank you for listening" in an article, where there is no listener.',
        'Rehearsing the opponent\'s argument at length and leaving no space for your own reasons.'
      ],
      wassceExamTips: [
        'Choose the composition you can illustrate with two real local examples; content marks depend on specifics, not vocabulary.',
        'Spend four minutes listing paragraph points with their illustrations before writing; the list becomes your Organisation score.',
        'In a speech, write the vocatives and stance first so that the reader knows your side within the opening thirty words.',
        'Keep one clear device per paragraph: a question, a triad or a repetition — markers reward controlled variety.',
        'Time allocation: 45 minutes on your chosen Section B essay, including a five-minute read-through for apostrophes and concords.'
      ],
      summaryChecklist: [
        'Can I write an article with title, byline, hook and four developed paragraphs?',
        'Can I open a speech with correct vocatives and a one-sentence stance?',
        'Can I build a paragraph as claim, reason, illustration, effect?',
        'Can I rebut an opposing argument fairly and briefly?',
        'Can I use a rhetorical question, a triad and repetition without overdoing them?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-as-1',
        title: 'Choosing the Right Format for the Task',
        problem: 'WAEC sets: "Write an article for your school magazine on the danger of drug abuse in Ghana." A candidate begins: "P.O. Box 12, Cape Coast. 9th May, 2026. Dear Editor,". Assess the opening and repair it.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the demanded format: an ARTICLE for publication, not a letter; the article carries a title and byline instead of address blocks.',
          'Step 2 (M1): Name the three faults in the opening: unnecessary writer\'s address and date, an unwarranted salutation "Dear Editor", and the missing title and byline.',
          'Step 3 (M1): Decide the replacement opening: a strong title, then "By ___ , SHS 2", then a hook that places pupils inside the problem.',
          'Step 4 (A1): Repaired opening: "TRAMADOL ON OUR BOOKSHELVES — By Abena Owusu, SHS 2. When the class monitor collapsed during morning assembly last term, nobody in our school could name the drug he had taken."',
          'Step 5 (A1): Confirm the register: no contractions, no slang, and the scene does the work a salutation would have done in a letter.'
        ],
        keyTakeaway: 'Read the demanded genre first: article means title plus byline plus hook, and no letter apparatus.'
      },
      {
        id: 'ex-shs2-eng-as-2',
        title: 'Drafting a Debate Paragraph with Rebuttal',
        problem: 'Motion: "School pupils should not sell goods before classes." Write one supporting paragraph that includes a rebuttal, in under ninety words.',
        stepByStepSolution: [
          'Step 1 (M1): State the claim in one sentence: trading before school costs lessons, not just time.',
          'Step 2 (M1): Supply a reason and a local illustration: pupils who trade at dawn are asleep by the second period at the Asonyasu circuit.',
          'Step 3 (M1): Insert the rebuttal fairly: acknowledge the income argument, then answer it with the effect on learning.',
          'Step 4 (M1): Add a device: a triad of consequences — missed lessons, suspended books, stalled promotion.',
          'Step 5 (A1): Drafted paragraph: "Trading before dawn robs the classroom. Many of my mates at the Asonyasu circuit sleep through second period, and a missed lesson cannot be bought back at break time. My friends on the other side say the money feeds families; we answer that a girl who fails her mocks will feed no one next year. The cost is missed lessons, suspended books and stalled promotion."'
        ],
        keyTakeaway: 'Claim, evidence, fair rebuttal, device, conclusion — five moves inside one paragraph.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t2-articles-speeches',
      topicId: 'shs2-eng-t2-articles-speeches',
      title: 'Articles and Speeches Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-as-1',
          quizId: 'quiz-shs2-eng-t2-articles-speeches',
          questionText: 'Which element belongs to a speech but not to an article?',
          optionA: 'A title',
          optionB: 'Vocatives addressed to the chairperson and judges',
          optionC: 'A byline',
          optionD: 'A concluding recommendation',
          correctOption: 'B',
          subConcept: 'Format Differences',
          explanation: 'Only a spoken address greets the room. Articles carry titles and bylines, and both formats may end with a recommendation.',
          remediationTip: 'Ask who receives the writing: a room of people needs greeting; a page of readers needs a title.'
        },
        {
          id: 'q-shs2-as-2',
          quizId: 'quiz-shs2-eng-t2-articles-speeches',
          questionText: 'Choose the best article title for a piece on sanitation.',
          optionA: 'Sanitation',
          optionB: 'My School\'s Toilets',
          optionC: 'Six Latrines for Nine Hundred Pupils',
          optionD: 'A Very Bad Problem We Have',
          correctOption: 'C',
          subConcept: 'Effective Titles',
          explanation: 'The specific figure states the argument and provokes a question, which is what a title must do. (a) names a topic only; (b) is private rather than public; (d) is vague and emotive.',
          remediationTip: 'A good title can be argued with; if it names a feeling or a general topic, sharpen it with a number or a claim.'
        },
        {
          id: 'q-shs2-as-3',
          quizId: 'quiz-shs2-eng-t2-articles-speeches',
          questionText: 'Identify the rhetorical device: "We asked for a fence, we asked for water, we asked for a clerk."',
          optionA: 'Rhetorical question',
          optionB: 'Repetition within a parallel structure',
          optionC: 'Understatement',
          optionD: 'Irony',
          correctOption: 'B',
          subConcept: 'Rhetorical Devices',
          explanation: 'The clause "we asked for" repeats three times in identical structure, building emphasis; the triad of objects adds the rhythm of the rule of three.',
          remediationTip: 'Look for the repeated frame (repetition) and the three items (triad); both operate together here.'
        },
        {
          id: 'q-shs2-as-4',
          quizId: 'quiz-shs2-eng-t2-articles-speeches',
          questionText: 'Which closing sentence suits a debate speech opposing a motion?',
          optionA: 'In conclusion, this is a serious issue.',
          optionB: 'Thank you for reading my article.',
          optionC: 'For these reasons, I urge this house to reject the motion. Thank you.',
          optionD: 'Yours faithfully, the case is closed.',
          correctOption: 'C',
          subConcept: 'Speech Conclusions',
          explanation: 'A debate close restates the stance, addresses the house, and thanks the room. (a) only labels itself, (b) confuses formats, and (d) imports a letter subscription.',
          remediationTip: 'Close a speech the way you opened it: stance, audience, thanks.'
        },
        {
          id: 'q-shs2-as-5',
          quizId: 'quiz-shs2-eng-t2-articles-speeches',
          questionText: 'A candidate writes an article on teen pregnancy and begins, "Dear friends, how are you?" Why is this weak?',
          optionA: 'Articles must open with a quotation.',
          optionB: 'The greeting is a letter convention and wastes the hook.',
          optionC: 'Articles cannot mention people.',
          optionD: 'The greeting should be "Dear Sir,".',
          correctOption: 'B',
          subConcept: 'Hooks and Register',
          explanation: 'The reader of a magazine article is a public, not a correspondent, so pleasantries replace the hook that should place the reader inside the issue. A better opening states a scene or a figure.',
          remediationTip: 'In an article, spend the first two lines on the problem, never on greetings.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t2-conditionals',
    subjectId: 'english',
    level: 'SHS 2',
    term: 2,
    orderIndex: 8,
    title: 'Conditional Sentences: The Four Types, Inversion and Wish',
    description: 'Zero to third conditionals and mixed forms, unless/provided that/as long as, the inverted forms (Had I known, Were I you, Should it rain), and wish plus past for unreal present.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=4H3-2smRJJY',
    youtubeId: '4H3-2smRJJY',
    keyNotes: `• TYPE 0 (general truth): If + present simple, present simple. "If the rains come, the farms green."
• TYPE 1 (real future): If + present simple, will/can/may + infinitive. "If the bus leaves at six, I shall reach Tamale before noon."
• TYPE 2 (unreal present): If + past simple, would/could + infinitive. "If I owned a borehole, I would water the nursery at dawn." (BE is "were" for every person in formal style: "If I were the chief...")
• TYPE 3 (unreal past): If + past perfect, would/could + have + past participle. "If the farmer had sprayed early, the pods would not have fallen."
• MIXED: past condition with present result: "If she had studied medicine, she would be a doctor now."
• ALTERNATIVE CONJUNCTIONS: unless = if...not; provided/providing that, as long as, on condition that = restrictive if; in case = precaution.
• INVERSION (formal, no "if"): Had I known... / Were she the chairperson... / Should it rain... — note the auxiliary moves first and the word "if" disappears.
• WISH: wish + past simple for a present regret ("I wish I knew the answer"); wish + past perfect for a past regret ("I wish I had asked"); "wish ... would" for an annoying habit; "If only" intensifies both.`,
    detailedNotes: {
      overview: 'Conditionals carry marks in three places on the WASSCE paper: objective lexis items on unless and inversion, transformation items that require shifting a sentence into an unreal past, and composition sentences that show judgement. SHS 2 makes the four types explicit, then adds the formal inversions that candidates fear and examiners reward.',
      introduction: 'A conditional sentence is a scale model of reality. Some models describe what happens every rainy season; others describe what would have happened if one decision had changed. Match the model to the time and the likelihood, and the verb forms follow automatically.',
      realWorldContext: 'A farmer\'s reflection at Wenchi after a poor harvest: "If the rains had come in April, the rice would have headed before the dry spell." His wife adds a live warning: "If we borrow at sixty per cent interest again, we will lose the second plot." Type 3 for the past that cannot move, type 1 for the season that still can.',
      objectives: [
        'Assign a conditional to the correct type by testing time and likelihood',
        'Form the four types accurately including the subjunctive "were" in type 2',
        'Rewrite sentences with unless, provided that, as long as and in case',
        'Produce inverted conditionals with Had, Were and Should',
        'Express present and past regret with wish and if only'
      ],
      sections: [
        {
          title: 'Time and Likelihood: Choosing the Type',
          content: 'Ask two questions. When is the condition — every time, future, present-unreal, or past-unreal? And is it real or imagined? A habit of nature is type 0. A genuine future possibility is type 1. A contrary-to-fact present is type 2, and a contrary-to-fact past is type 3. The verb pair is fixed once the answers are known: type 1 never takes "would" in the if-clause, and type 3 never takes "would have" in the if-clause. That one rule removes most Ghanaian script errors such as "If I will come, I would meet you."',
          bulletPoints: [
            'The if-clause takes the tense the marker expects: present for type 1, past for type 2, past perfect for type 3.',
            'Modals other than will are allowed in the main clause: may, can, must, might, should.',
            'A comma separates the clauses only when the if-clause comes first.',
            'Type 0 uses present in both halves: "If you heat palm oil too long, it smokes."',
            'Never write "would" inside the condition clause; that error is penalised in objective items.'
          ],
          keyTakeaway: 'Fix the time and the reality, and the verb pair is decided for you.',
          realWorldExample: 'Same verb, different worlds: "If the pump works, we irrigate today" (type 0/1, real) versus "If the pump worked, we would irrigate tonight" (type 2, it does not work).'
        },
        {
          title: 'Unless, Provided That and the Negative Condition',
          content: 'UNLESS already means "if not", so it never sits with a second negative: "Unless you submit the form, you will not be considered" is correct, while "Unless you do not submit" is a double negative. PROVIDED (THAT), AS LONG AS and ON CONDITION THAT introduce a restrictive requirement and are common in formal letters: "The club will fund the trip provided that each member contributes ten cedis." IN CASE expresses a precaution taken before the event: "Take an umbrella in case it rains."',
          bulletPoints: [
            'Rewriting drill: "If you do not work hard, you will fail" = "Unless you work hard, you will fail."',
            'After unless, use the present for a future meaning: "Unless he apologises, ..." never "Unless he will apologise".',
            'Provided that may drop "that" without change of meaning.',
            'In case (precaution) differs from if (condition): "I saved money in case of illness" is precaution, not condition.',
            'In formal letters, "on the condition that" and "subject to" carry the same restrictive force.'
          ],
          keyTakeaway: 'Unless carries its own not; provided that sets a price; in case prepares for a risk.',
          realWorldExample: 'A parents\' association notice: "The hall will be rented for the play provided that the PTA treasurer signs the form, and the committee will cancel in case the rains flood the forecourt."'
        },
        {
          title: 'Inverted Conditionals: Had, Were, Should',
          content: 'Formal English removes "if" by moving the auxiliary to the front: "Had I known about the fee, I would have paid it." "Were she the chief executive, she would fix the road." "Should you need assistance, contact the prefect." Note three traps: the inverted form keeps the tense of the original type, "Had" is never followed by a base verb, and the comma still separates the two clauses. Inversion reads as controlled formal style, which is why markers cite it under Expression.',
          bulletPoints: [
            'Type 3 inverts with HAD plus the past participle; never "Had I knew".',
            'Type 2 inverts with WERE, including for singular subjects: "Were I the head, ...".',
            'A tentative type 1 inverts with SHOULD: "Should the plan fail, we shall revise it."',
            'Negative inversion uses "Had ... not" or "Were ... not": "Had the driver not slowed, the pupils would have been hurt."',
            'Do not invert with ordinary verbs; "Knew I that..." is archaic and not examinable.'
          ],
          keyTakeaway: 'Drop "if", move Had/Were/Should to the front, and keep the original type\'s tense.',
          realWorldExample: 'An official memo line: "Should the contractor fail to resume work by 30th November, the assembly will invoke the performance clause."'
        },
        {
          title: 'Wish, If Only and Unreal Desire',
          content: 'WISH takes a backshift exactly like reported speech. For a present regret, use the past: "I wish the clinic were open on Sundays." For a past regret, use the past perfect: "I wish I had registered for the mock." For an annoying habit or a desired change forced by someone else, use WOULD: "I wish the mate would close the door." IF ONLY intensifies the same patterns. "It is time" also takes the past form for a present obligation: "It is high time the assembly repaired the bridge."',
          bulletPoints: [
            'Never use "wish + would" about your own behaviour; you cannot force yourself on someone else\'s model.',
            'Wish about the past never takes "would have": "I wish I would have gone" is wrong.',
            'In formal style, "I wish I were" is preferred over "I wish I was".',
            'It is (high) time + past simple: "It is time we started", meaning now or sooner.',
            'Transformations: "I did not study, so I failed" becomes "If only I had studied" or "I wish I had studied".'
          ],
          keyTakeaway: 'Wish steps the tense back one level: past for now, past perfect for then.',
          realWorldExample: 'A student\'s two regrets: "I wish I had read the question twice" (past) and "I wish our library opened late" (present).'
        }
      ],
      commonMistakes: [
        'Putting "will" or "would" inside the if-clause: "If I will pass, ..." or "If he would have come, ...".',
        'Writing a double negative with unless: "Unless you do not pay, you cannot enter."',
        'Using "was" where the exam expects the subjunctive: "If I was the president..." in formal writing.',
        'Dropping the comma after a fronted conditional clause, or adding one when the if-clause follows the main clause.',
        'Forming the inverted type 3 wrongly: "Had I knew" instead of "Had I known".',
        'Mixing a past condition with a present result without intending a mixed conditional: "If she had trained, she will teach now."'
      ],
      wassceExamTips: [
        'In transformation items, identify the type from the time reference first: a past-dated failure demands type 3 with "would have + past participle".',
        'For lexis and structure, memorise the four conjunction frames tested most: unless, provided that, in case, as long as.',
        'When in doubt about the verb in the if-clause, remove the main clause and ask what tense the situation truly is in; the past of type 2 does not mean past time.',
        'Use one inverted conditional in a formal letter or report to signal control, but never two in the same paragraph.',
        'Check the negative forms: "not ... unless", "would not have" and "had not" are the three places candidates misplace the "not".'
      ],
      summaryChecklist: [
        'Can I name the type of any conditional by asking when and how real it is?',
        'Can I rewrite an "if...not" sentence with unless correctly?',
        'Can I form Had I known / Were I / Should you inversions without "if"?',
        'Can I express present and past regret with wish and if only?',
        'Can I keep "would" out of every condition clause?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-cd-1',
        title: 'Rewriting into a Type 3 Conditional',
        problem: 'Rewrite beginning with the words given, keeping the meaning: "The driver did not slow down, so the pupils were injured."',
        stepByStepSolution: [
          'Step 1 (M1): Establish the time and reality: both facts are past and contrary to what actually happened, so the sentence needs a type 3 conditional.',
          'Step 2 (M1): Build the condition clause in the past perfect: "If the driver had slowed down,".',
          'Step 3 (M1): Build the result clause with would have plus a past participle, reversing the polarity: "the pupils would not have been injured."',
          'Step 4 (A1): Answer: "If the driver had slowed down, the pupils would not have been injured."',
          'Step 5 (A1): Alternative accepted form using inversion: "Had the driver slowed down, the pupils would not have been injured."'
        ],
        keyTakeaway: 'Past and unreal means past perfect in the condition and would have in the result.'
      },
      {
        id: 'ex-shs2-eng-cd-2',
        title: 'Choosing the Correct Connector',
        problem: 'Complete with if, unless, provided that or in case: "___ the PTA contributes funds, the roof will not be replaced this year; take your own buckets to the farm ___ the pipe bursts again."',
        stepByStepSolution: [
          'Step 1 (M1): Test the first gap against "if not": the sentence means the roof fails to be replaced IF the PTA does not contribute, so the negative-condition word UNLESS fits.',
          'Step 2 (M1): "If" alone would reverse the meaning, and "provided that" would make the contribution a requirement for failure, which is illogical.',
          'Step 3 (M1): The second gap describes a precaution taken before a possible event, so it takes IN CASE.',
          'Step 4 (A1): Answers: Unless ... in case.',
          'Step 5 (A1): Full sentence: "Unless the PTA contributes funds, the roof will not be replaced this year; take your own buckets to the farm in case the pipe bursts again."'
        ],
        keyTakeaway: 'Unless carries the negative condition; in case marks a precaution taken before the risk.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t2-conditionals',
      topicId: 'shs2-eng-t2-conditionals',
      title: 'Conditional Sentences Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-cd-1',
          quizId: 'quiz-shs2-eng-t2-conditionals',
          questionText: 'Choose the correct form: "If the rains ___ early, the maize will lodge before harvest."',
          optionA: 'would fail',
          optionB: 'fail',
          optionC: 'had failed',
          optionD: 'will fail',
          correctOption: 'B',
          subConcept: 'Type 1 Condition',
          explanation: 'A real future condition takes the present simple in the if-clause and "will" in the result clause. "Will" and "would" never belong inside the condition clause, and the past perfect would force a type 3 reading that the result clause cannot follow.',
          remediationTip: 'Split the sentence and look at the half with "will": the other half takes the plain present tense.'
        },
        {
          id: 'q-shs2-cd-2',
          quizId: 'quiz-shs2-eng-t2-conditionals',
          questionText: 'Rewrite "If you do not submit the form, you cannot compete" using a single connector.',
          optionA: 'If you unless submit the form, you cannot compete.',
          optionB: 'Unless you submit the form, you cannot compete.',
          optionC: 'Unless you do not submit the form, you cannot compete.',
          optionD: 'In case you submit the form, you cannot compete.',
          correctOption: 'B',
          subConcept: 'Unless Equals If Not',
          explanation: 'UNLESS already contains the negative, so the verb that follows it must be affirmative. (c) double-negates and reverses the meaning, and (d) expresses a precaution instead of a condition.',
          remediationTip: 'Replace unless with "if...not" in your head; if the sentence still works, the negatives have balanced.'
        },
        {
          id: 'q-shs2-cd-3',
          quizId: 'quiz-shs2-eng-t2-conditionals',
          questionText: 'Which sentence is a correct inverted conditional?',
          optionA: 'Had I knew about the closed gate, I would have come earlier.',
          optionB: 'Had I known about the closed gate, I would have come earlier.',
          optionC: 'Have I known about the closed gate, I would come earlier.',
          optionD: 'If had I known about the closed gate, I would have come earlier.',
          correctOption: 'B',
          subConcept: 'Type 3 Inversion',
          explanation: 'Inversion of a type 3 keeps HAD plus the past participle and removes "if". (a) uses a base verb, (c) changes the auxiliary, and (d) keeps both "if" and inversion, which is not permitted.',
          remediationTip: 'Inversion formula: Had + subject + past participle, comma, then would have plus participle.'
        },
        {
          id: 'q-shs2-cd-4',
          quizId: 'quiz-shs2-eng-t2-conditionals',
          questionText: 'Complete formally: "Were the headmistress to visit us, we ___ the new laboratory."',
          optionA: 'will show',
          optionB: 'would show',
          optionC: 'showed',
          optionD: 'had shown',
          correctOption: 'B',
          subConcept: 'Type 2 with Were to',
          explanation: '"Were ... to" is a formal type 2 pattern describing an unlikely present or future condition, so the result clause takes would plus the infinitive.',
          remediationTip: 'Treat "were X to" as the polite cousin of "if X did" and answer with would.'
        },
        {
          id: 'q-shs2-cd-5',
          quizId: 'quiz-shs2-eng-t2-conditionals',
          questionText: 'Which expresses a past regret correctly?',
          optionA: 'I wish I would have read the question twice.',
          optionB: 'I wish I read the question twice.',
          optionC: 'I wish I had read the question twice.',
          optionD: 'I wish I have read the question twice.',
          correctOption: 'C',
          subConcept: 'Wish plus Past Perfect',
          explanation: 'A regret about a completed past action takes wish plus the past perfect. "Wish ... would have" is not a permitted form, and the simple past in (b) would refer to a present habit.',
          remediationTip: 'Ask when the regret sits: now takes past simple, then takes past perfect.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t2-concord-advanced',
    subjectId: 'english',
    level: 'SHS 2',
    term: 2,
    orderIndex: 9,
    title: 'Advanced Concord: Twelve Tricky Subjects and Their Verbs',
    description: 'Proximity with either/or and neither/nor, one of the who/that patterns, collective nouns, many a, indefinite pronouns, the number of versus a number of, and subjects joined by with.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=zfbUzWqsH74',
    youtubeId: 'zfbUzWqsH74',
    keyNotes: `• RULE OF PROXIMITY: with or, either...or, neither...or (neither...nor), not only...but also, the verb agrees with the subject NEAREST to it. "Neither the tutors nor the headmistress was present."
• ONE OF THE + PLURAL + verb: the head of the subject is "One", so singular: "One of the pupils is sick." BUT "one of those who" and "the only one of those who" differ: "She is one of those who ALWAYS COME early" (plural, verb follows "those"), yet "She is the only one of those who COMES early" (singular, verb follows "one").
• INDEFINITE PRONOUNS are singular: each, every, anyone, everyone, someone, no one, nobody, either, neither, another: "Each of the traders HAS a permit."
• MANY A + singular noun + singular verb: "Many a farmer lost his crop." (note the singular pronoun HIS.)
• COLLECTIVE NOUNS take singular when acting as one unit, plural when members act separately: "The committee has decided" / "The committee have argued among themselves."
• A NUMBER OF = many (plural verb); THE NUMBER OF = the figure (singular verb).
• SUBJECTS JOINED BY with, as well as, together with, along with, besides, in addition to: the verb agrees with the FIRST noun. "The minister, with his advisers, IS visiting."
• PHRASES as subjects: "To forgive the debt was wise"; "What the traders demanded WAS reasonable" — a noun clause as subject takes a singular verb unless the complement forces plural.
• DISTANCE, MONEY, TIME, WEIGHT as a unit take singular: "Ten years IS too long"; "Five cedis IS not enough."
• ELLIPTICAL and compound subjects sharing one article are singular: "The bread and butter IS served"; "The poet and the novelist ARE guests."
• SUBJECT COMPLEMENT CAN OVERRULE: "His greatest worry was the debts" — verb follows "worry"; "The victims were children."
• THERE / IT constructions agree with the NOTIONAL subject: "There ARE many reasons"; "It IS the pupils who ARE responsible" (formal: cleft subject agreement follows the antecedent).`,
    detailedNotes: {
      overview: 'SHS 1 taught the basic agreement rules; SHS 2 confronts the exceptions WAEC actually examines. Every WASSCE paper contains two or three concord items that hinge on proximity, on "one of the", or on a collective noun, and the same decisions arise inside essays, where markers deduct for agreement slips. This topic assembles twelve tricky subject shapes with the verb each one demands.',
      introduction: 'Concord is a search for the head noun. Strip modifiers, ignore prepositional phrases, name the word the sentence is truly about, and ask one question about it: singular or plural? Exceptions are not chaos; they are the same search done twice.',
      realWorldContext: 'A district announcement: "Neither the assembly members nor the district officer was informed, although a number of traders were already at the gate." Read it in slow motion: proximity puts a singular verb beside "officer"; "a number of" is plural because it means many. The sentence is grammatical — which is exactly how the same construction appears in a lexis paper.',
      objectives: [
        'Apply the rule of proximity to coordinated and disjunctive subjects',
        'Choose the verb after one of the, each of, many a, and indefinite pronouns',
        'Decide collective-noun agreement from the sense of unity or separation',
        'Distinguish a number of from the number of and treat quantities as units',
        'Find the head noun through prepositional phrases, relative clauses and noun-clause subjects'
      ],
      sections: [
        {
          title: 'Proximity: The Nearest Subject Wins',
          content: 'When subjects are joined by or, nor, either...or, neither...nor, or not only...but also, the verb agrees with the subject closest to it. "Neither the pupils nor the teacher was available." Reverse it: "Neither the teacher nor the pupils were available." In "not only... but also", the same rule applies: "Not only the drivers but also the mate was questioned." Test by deleting the first subject; if the sentence still reads correctly with the verb, the agreement is right.',
          bulletPoints: [
            'Proximity also governs "or" in questions: "Is it the nurses or the doctor who is coming?" (formal proximity).',
            'Neither of the + plural noun + singular verb: "Neither of the candidates has returned."',
            'Either of the + plural noun + singular verb: "Either of the roads is passable."',
            'In speech, plural verbs with neither/nor are tolerated, but the objective paper expects the singular.',
            'The complement in "it is I who..." is formal; WAEC prefers "It is I" but the verb follows "who\'s" antecedent: "It is the pupils who are late."'
          ],
          keyTakeaway: 'With divided subjects, the verb listens to the nearest noun.',
          realWorldExample: 'Two notices: "Neither the prefect nor the masters were on duty" (nearest plural) versus "Neither the masters nor the prefect was on duty" (nearest singular).'
        },
        {
          title: 'One Of, Each Of, Many A and the Indefinites',
          content: 'In "One of the pupils is absent", the subject is "One", so the verb is singular even though "pupils" is plural. The exception that decides marks: in "one of those/those who" patterns, the relative pronoun "who" refers to the plural noun, so the verb in that clause is plural — "Kofi is one of those pupils who ALWAYS COME early." Add "the only" and the sense narrows to one: "Kofi is the only one of those pupils who COMES early." EACH and EVERY before a series keep singular verbs: "Each boy and girl was given a uniform." MANY A takes a singular noun and verb and a singular pronoun: "Many a trader lost his stock."',
          bulletPoints: [
            'Each of the + plural noun + singular verb: "Each of the essays was read."',
            'With "each" after the verb, the verb still follows the subject: "The essays were each read." (not "was each").',
            'Everybody, everyone, someone, nobody, anybody: always singular: "Nobody but two guards KNOWS the code."',
            'Both of the + plural verb; "both...and" always plural.',
            'The pronoun after "each/many a" stays singular: "Many a pupil forgot his book", not "their books", in formal style.'
          ],
          keyTakeaway: 'Find the true head: one, each and many a are singular even in a crowd of plural nouns.',
          realWorldExample: 'A roll-call remark: "Each of the form-two students has a number; many a boy forgot his.".'
        },
        {
          title: 'Collective Nouns, Quantities and Number Phrases',
          content: 'A collective noun is singular when the group acts as one body ("The team has won the inter-house quiz") and plural when the members are visibly separate ("The team are arguing about the choreography"). In Ghanaian formal writing the singular is safer unless the sentence clearly names internal disagreement. A NUMBER OF means "several" and takes a plural verb; THE NUMBER OF names the statistic and takes singular. Quantities treated as one unit are singular: "Fifty cedis is the fee", "Two weeks is not enough", "The distance from Tamale to Wa is 480 kilometres."',
          bulletPoints: [
            'Common collectives: committee, team, family, class, public, government, staff, jury, crew, audience.',
            'Crew, staff and faculty can also take a plural in British style when the individuals act; choose the sense and stay consistent.',
            'Partitive phrases follow the OF-object: "a piece of the cakes was stale" (singular), "two pieces of the cakes were stale".',
            'Quantities of uncountable nouns stay singular: "Much of the rice WAS lost"; but a plural noun of the same shape takes plural: "Some of the pupils WERE late."',
            'The fraction/percentage rule: agree with the noun of which it is a fraction: "Half the class has failed", "Half the pupils have failed".'
          ],
          keyTakeaway: 'One body takes one verb; separate members take a plural; measured units are singular.',
          realWorldExample: 'A report line: "A number of parents complained, but the number of complaints filed formally was only three."'
        },
        {
          title: 'Subjects Made of Clauses, Infinitives and Intervening Phrases',
          content: 'When the subject is a noun clause or an infinitive, treat it as a single idea and use a singular verb: "To cheat in the mock is shameful"; "What the traders demanded was a lighter levy." Prepositional phrases between subject and verb never change agreement: "The quality of the roads determines the cost of transport" — "determines" belongs to "quality". With THERE and IT clefts, the verb agrees with the notional subject that follows: "There are three reasons"; "It is the roads that need repair."',
          bulletPoints: [
            'A compound subject joined by AND is plural: "Reading and writing are taught daily" — unless it names one activity: "Early rising and exercise is my habit"? treat as one routine.',
            'Gerund subjects are singular: "Swimming in the reservoir has become dangerous."',
            'Quoted or named subjects keep singular: "\'The Ghanaian Times\' is published daily."',
            'Titles of books and institutions ending in -s are singular: "The New York Times reports..." — apply the same to "The Graphic".',
            'With as...as constructions the verb follows the first subject: "The teachers, as much as the head, are responsible."'
          ],
          keyTakeaway: 'Clause or infinitive as subject means singular; ignore every prepositional phrase in between.',
          realWorldExample: 'A class remark: "That the pupils were tired was obvious" — the clause is the subject, singular verb "was".'
        }
      ],
      commonMistakes: [
        'Matching the verb to the nearest noun in a prepositional phrase instead of the head: "The list of names are long" should be "is long".',
        'Using a plural verb after each of, one of, many a, nobody or everybody.',
        'Writing "Unless...not" or double negatives in condition clauses and then agreeing the verb to the wrong idea.',
        'Choosing a plural verb for the number of or a singular verb for a number of.',
        'Treating every collective noun as plural because the members are people.',
        'Forgetting that a noun-clause subject is singular: "What the farmers need are seeds" is only acceptable when the complement is plural and the meaning demands it; in the objective paper "is" is the safer form.'
      ],
      wassceExamTips: [
        'In Paper 1, cover every phrase between subject and verb with your pencil; that single habit converts most concord items.',
        'Where two subjects fight, ask which is nearer the verb — proximity answers half of all concord errors in WASSCE scripts.',
        'In essays, check the concords in sentences that begin There is/There are and One of the...; these are the two lines markers underline for deduction.',
        'Memorise the four singular-by-law words: each, every, many a, and the indefinite -one/-body words.',
        'For a collective noun in a report, write the singular unless the sentence names disagreement among members.'
      ],
      summaryChecklist: [
        'Can I apply the proximity rule to either...or and neither...nor sentences?',
        'Can I choose the right verb after one of those who and the only one of those who?',
        'Can I decide collective-noun agreement from whether the group acts as one?',
        'Can I tell a number of from the number of and treat money, time and distance as units?',
        'Can I find the head of a subject hidden behind three prepositional phrases?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-ca-1',
        title: 'Solving a Two-Trap Concord Item',
        problem: 'Choose the correct verb: "Neither the two prefects nor the class teacher ___ present when the visitors, together with the officials, ___ the classroom."',
        stepByStepSolution: [
          'Step 1 (M1): Handle the first gap with the proximity rule: the subject nearest the verb is "the class teacher", singular, so the verb is WAS.',
          'Step 2 (M1): For the second gap, remove the intervening phrase "together with the officials"; the head subject is "the visitors", plural.',
          'Step 3 (M1): Both clauses are past narration, so the plural past form is required: the visitors INSPECTED.',
          'Step 4 (A1): Answers: was ... inspected.',
          'Step 5 (A1): Full sentence: "Neither the two prefects nor the class teacher was present when the visitors, together with the officials, inspected the classroom."'
        ],
        keyTakeaway: 'One gap is a proximity problem, the other an intervening-phrase problem; solve them separately.'
      },
      {
        id: 'ex-shs2-eng-ca-2',
        title: 'Correcting a Paragraph of Concord Errors',
        problem: 'Correct the verb errors: "Each of the girls have a booklet. The number of pupils who attend the club are forty. Many a farmer lose the harvest to the armyworm. Neither the drivers nor the conductor were fined."',
        stepByStepSolution: [
          'Step 1 (M1): "Each of the girls" — head word "Each" is singular, so HAS a booklet.',
          'Step 2 (M1): "The number of pupils" names a figure, so the verb is singular: IS forty.',
          'Step 3 (M1): "Many a farmer" is singular in form and sense: LOSES the harvest; keep the singular pronoun his if one is added.',
          'Step 4 (M1): Proximity applies to neither...nor: the nearest subject "the conductor" is singular, so WAS fined.',
          'Step 5 (A1): Corrected text: "Each of the girls has a booklet. The number of pupils who attend the club is forty. Many a farmer loses the harvest to the armyworm. Neither the drivers nor the conductor was fined."'
        ],
        keyTakeaway: 'Four errors, four different rules: indefinites, the number of, many a, and proximity.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t2-concord-advanced',
      topicId: 'shs2-eng-t2-concord-advanced',
      title: 'Advanced Concord Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-ca-1',
          quizId: 'quiz-shs2-eng-t2-concord-advanced',
          questionText: 'Choose the correct option: "The only one of the players who ___ injured was taken to the clinic."',
          optionA: 'were',
          optionB: 'was',
          optionC: 'have been',
          optionD: 'are',
          correctOption: 'B',
          subConcept: 'The Only One Of Those Who',
          explanation: 'With "the only one of the... who", the relative clause refers back to "one", so the verb is singular. Without "the only", the clause would refer to "players" and take the plural.',
          remediationTip: 'Look for "the only". Present means singular; absent means the plural noun before who controls the verb.'
        },
        {
          id: 'q-shs2-ca-2',
          quizId: 'quiz-shs2-eng-t2-concord-advanced',
          questionText: 'Choose the correct option: "A number of specimens ___ missing, but the number of missing ones ___ small."',
          optionA: 'was / were',
          optionB: 'were / was',
          optionC: 'were / were',
          optionD: 'is / are',
          correctOption: 'B',
          subConcept: 'A Number Of versus The Number Of',
          explanation: '"A number of" means several and takes a plural verb; "the number of" names the figure and takes a singular verb.',
          remediationTip: 'Add the article in your head: a number = many (plural); the number = the count (singular).'
        },
        {
          id: 'q-shs2-ca-3',
          quizId: 'quiz-shs2-eng-t2-concord-advanced',
          questionText: 'Choose the sentence that is fully correct.',
          optionA: 'Many a farmer lose their tools each season.',
          optionB: 'Many a farmer loses his tools each season.',
          optionC: 'Many farmers loses his tools each season.',
          optionD: 'Many a farmers lose a tool each season.',
          correctOption: 'B',
          subConcept: 'Many A Construction',
          explanation: 'MANY A takes a singular noun, a singular verb and, in formal style, a singular pronoun: many a farmer loses his tools.',
          remediationTip: 'Hear the article: "a" inside many a forces everything after it to be singular.'
        },
        {
          id: 'q-shs2-ca-4',
          quizId: 'quiz-shs2-eng-t2-concord-advanced',
          questionText: 'Choose the correct verb: "The committee ___ divided; some members walked out before the vote."',
          optionA: 'was',
          optionB: 'were',
          optionC: 'have',
          optionD: 'has',
          correctOption: 'A',
          subConcept: 'Collective Noun Agreement',
          explanation: 'The committee is described as a single body in a state of division, so WAS divided is correct. A plural verb is used when the members act separately, as in "The committee have argued among themselves".',
          remediationTip: 'Ask whether the noun is one unit acting or named members acting; state and unit take the singular.'
        },
        {
          id: 'q-shs2-ca-5',
          quizId: 'quiz-shs2-eng-t2-concord-advanced',
          questionText: 'Choose the correct option: "Ten years ___ too long to wait for a road that the officers promised."',
          optionA: 'are',
          optionB: 'is',
          optionC: 'have been',
          optionD: 'were',
          correctOption: 'B',
          subConcept: 'Measure as a Unit',
          explanation: 'A period, sum or distance treated as one unit takes a singular verb: ten years is too long. The plural appears only when the individual years are being counted.',
          remediationTip: 'If you can replace the phrase with "this period / this sum / this distance", use the singular verb.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t2-collocations-register',
    subjectId: 'english',
    level: 'SHS 2',
    term: 2,
    orderIndex: 10,
    title: 'Lexis and Structure: Collocations, Word Choice and Register',
    description: 'Verb-noun and adjective-noun partnerships (make/do/take), prepositional collocations, formal versus informal pairs, connotation, and the Ghanaian-English expressions WAEC marks as errors.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=YIzQUnI3eMw',
    youtubeId: 'YIzQUnI3eMw',
    keyNotes: `• A COLLOCATION is a partnership native speakers use habitually: MAKE a decision, DO research, TAKE precautions, PAY attention, RAISE funds, LIFT a ban. The verb is not free; the noun chooses it.
• The three workhorse verbs:
  - MAKE (creating something): make a plan, make progress, make a mistake, make a suggestion.
  - DO (work performed): do homework, do business, do a favour, do the needful (avoid — cliché).
  - TAKE (action on something): take a break, take note, take offence, take steps, take an exam.
• Adjective-noun pairs WAEC loves: torrential rain (not heavy rain in formal reports), heavy traffic, deep sleep, loud noise, high price (cheap for goods, dear in Ghanaian usage — standard English uses expensive), sharp pain, firm decision.
• Verb-preposition frames: accuse OF, blame FOR, differ FROM, depend ON, insist ON, congratulate ON, complain ABOUT, apologize FOR, succeed IN, warn AGAINST, remind SOMEONE OF something (never "remind me the matter").
• REGISTER PAIRS (informal to formal): buy to purchase, ask about to enquire into, start to commence, put off to postpone, help to assist, get to obtain, in case to in the event that, tell us to inform us.
• CONNOTATION: thin/slender/skinny; firm/stubborn/obstinate; cheap/inexpensive/economical. Choose by attitude, not dictionary sense.
• Ghanaian expressions to avoid in formal writing: "I beg to state", "most times", "anyhow" as a connector, "usefulness of it", "to cash in money" (say deposit), "congratulate one for" (say congratulate on), "discuss about" (discuss takes no preposition), "return back", "repeat again", "come first in position" (come first).`,
    detailedNotes: {
      overview: 'WASSCE lexis and structure is less about rare words than about right partnerships: which verb owns this noun, which preposition follows this adjective, which word suits this audience. Marks also fall to candidates who import spoken Ghanaian English into a formal report. This topic organises vocabulary into collocation families and register levels so that word choice becomes a decision instead of a guess.',
      introduction: 'Words travel in pairs and groups. Learn the pairs and the paper answers itself: the right verb for the noun, the right preposition for the adjective, and the right level of formality for the reader.',
      realWorldContext: 'A report to an assembly: "The committee decided to MAKE representations, not to DO a petition; the director promised to TAKE the matter up, and residents congratulated the officer ON the outcome, though some complained ABOUT the delay." Every underlined partnership is fixed — a wrong choice reads instantly as foreign.',
      objectives: [
        'Select the correct verb in make/do/take/give/put collocations',
        'Complete adjective-noun and noun-preposition frames tested in WASSCE',
        'Shift a message between informal and formal registers without changing meaning',
        'Judge connotation and choose words by attitude as well as sense',
        'Replace Ghanaian-English habits with standard formal equivalents'
      ],
      sections: [
        {
          title: 'The Verb That Owns the Noun',
          content: 'Collocations are arbitrary but stable: you MAKE a decision but DO homework, TAKE an examination but SIT for it in formal style, PAY attention, RAISE capital, and RAISE a child but LIFT a restriction. Learn in blocks of ten. Also note the light-verb trap: "give" pairs with abstract nouns — give an example, give permission, give rise to, give a speech. When two options look interchangeable, the difference is usually the noun: "hold a meeting" but "convene a meeting" for formal openings.',
          bulletPoints: [
            'MAKE builds something new; DO performs a task; TAKE moves you toward action.',
            'Answer the question "does the noun come into existence?" — if yes, make (make arrangements, make a profit).',
            'Common noun-preposition frames: attention TO, suspicion OF, opportunity FOR, solution TO, reason FOR, cause OF.',
            'Distinguish cause (brings about) from cause of (reason for): "Floods caused the collapse" versus "The cause of the collapse was neglect".',
            'Never "discuss about", "return back", "repeat again" or "meet together" — the preposition or the second verb is redundant.'
          ],
          keyTakeaway: 'Store nouns with their verbs; the noun, not the meaning, decides the collocation.',
          realWorldExample: 'A head teacher\'s instruction: "Make the arrangements, do the publicity, take the register, and give the parents two clear reasons."'
        },
        {
          title: 'Adjective-Noun Partnerships and Precision',
          content: 'Precision earns marks in comprehension and reports: "torrential rains" for storms, "heavy traffic" for vehicles, "deep sleeper" for a person, "loud noise" for sound, "acute pain" for medical writing, "pronounced difference" in analysis, "prevalent practice" in social reporting. Cheap describes goods; people are not cheap. In Ghana, DEAR is used for expensive, but standard written English expects expensive; WAEC marks the local usage as informal.',
          bulletPoints: [
            'Grade adjective pairs to test: strong coffee, strong wind, but powerful engine, potent drink.',
            'Big/large are not free swaps: the fixed forms are "a large number", "a large sum", but "a big mistake", "a big decision".',
            'Use "further" for additional steps and "farther" only for physical distance.',
            '"Fewer" for things you count, "less" for what you measure — the pair that decides many Paper 1 items.',
            'Little versus a little, few versus a few: without the article the sense is negative (hardly any).'
          ],
          keyTakeaway: 'Match the adjective to the noun class, and count what you are quantifying before choosing fewer or less.',
          realWorldExample: 'A weather alert: "Torrential rains have cut off three villages; traffic on the Achimota road remains heavy."'
        },
        {
          title: 'Register: Changing the Level, Keeping the Message',
          content: 'Formal writing prefers single-word Latinate verbs (postpone, assist, obtain, enquire, inform) and nominal style ("The completion of the block was delayed"), while informal English prefers phrasal verbs and directness ("put off", "help out", "get"). Contractions, exclamations and direct address belong to the informal side; hedges and passive constructions belong to the formal side. Practise rewriting one message at both levels — the WAEC composition tasks do exactly that.',
          bulletPoints: [
            'Safe formal openers: "I write to enquire about", "I wish to bring to your notice", "May I request permission to".',
            'Formal connectors: moreover, nevertheless, consequently, in addition, accordingly — one per paragraph.',
            'Informal connectors to avoid in reports: "so", "and then", "anyway", "besides that".',
            'Phrasal-to-formal drills: put off to postpone, look into to investigate, set up to establish, give up to abandon, bring up to raise.',
            'Never mix levels inside one sentence: "The panel convened and we chatted about it" breaks register.'
          ],
          keyTakeaway: 'Choose words by the reader you are addressing: officials get Latinate verbs, friends get phrasal ones.',
          realWorldExample: 'Same news, two registers: "We shelved the plan because it rained" versus "The committee postponed implementation owing to inclement weather."'
        },
        {
          title: 'Connotation and the Ghanaian-English Watchlist',
          content: 'Near-synonyms carry attitudes. SLIM is complimentary, SKINNY is not; DETERMINED praises, STUBBORN blames; ECONOMICAL commends thrift, CHEAP insults. A writer\'s stance appears in these choices, which is why comprehension asks for tone. Then the repair list for formal scripts: "most times" to often; "I beg to state" to I wish to state; "usefulness of it" to its usefulness; "cash in money" to deposit money; "congratulate for" to congratulate on; "patience and tolerance to you"? write "your patience with us"; "he is not well" for he is ill is acceptable in speech but write unwell or ill in reports.',
          bulletPoints: [
            'Test connotation by swapping for a neutral word and asking whether praise or blame has been lost.',
            'Adverbs of frequency before the main verb, but after BE: "She is always late", "She always arrives early".',
            'Avoid gender defaults: "the nurse ... she" is a stereotype in formal writing; name or use they.',
            'Do not use "was due to" for "because of" in formal cause statements.',
            'Ghanaian intensifiers "very well", "much more better"? write "much better" — double comparison is an error.'
          ],
          keyTakeaway: 'Choose by the attitude you want the reader to hear, and clear the local habits before submitting a formal text.',
          realWorldExample: 'Two descriptions of one pupil: "She is thrifty with the club fund" (praise) versus "She is stingy with the club fund" (blame).'
        }
      ],
      commonMistakes: [
        'Choosing the verb by translation rather than collocation: "do a decision" or "make homework".',
        'Adding a preposition that the verb already carries: discuss about, mention about, approach to somebody.',
        'Using informal connectors — so, anyway, besides that — in a report or formal letter.',
        'Writing "congratulate him for his success" instead of congratulate him on.',
        'Confusing fewer/less and amount/number with countable and uncountable nouns.',
        'Importing spoken Ghanaian idioms such as "most times" or "I beg to state" into formal essays.'
      ],
      wassceExamTips: [
        'For lexis items, read all four options back into the gap and listen for the frame: prepositions and verbs announce themselves instantly once you have memorised the pairs.',
        'In a cloze passage, choose the option that fits the WHOLE sentence, not the word next to the gap — most distractors are correct locally and wrong globally.',
        'Vary two or three formal connectors in an essay but never more than one per paragraph; over-connecting reads as mechanical.',
        'Where a passage asks for a word "which means the same as the underlined word", check the class first and eliminate options of a different part of speech.',
        'Proofread specifically for double comparisons and redundancies (more better, return back, repeat again); each one is a certain Mechanical Accuracy deduction.'
      ],
      summaryChecklist: [
        'Can I supply the correct verb for twenty common nouns: decision, research, permission, notice, attention, steps?',
        'Can I state the preposition that follows accuse, blame, differ, depend, congratulate and succeed?',
        'Can I rewrite an informal message at formal level without losing content?',
        'Can I rank near-synonyms by the attitude they express?',
        'Can I replace the five Ghanaian habits most often penalised in formal writing?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-cr-1',
        title: 'Choosing Between Make, Do and Take',
        problem: 'Fill the gaps: "Before the meeting we ___ arrangements, ___ the secretary a favour by typing the minutes, and ___ note of every complaint."',
        stepByStepSolution: [
          'Step 1 (M1): Test the first noun: "arrangements" comes into existence through the action, so MAKE is required: MADE arrangements.',
          'Step 2 (M1): "A favour" is a task performed for someone, and the fixed idiom is DO someone a favour: DID the secretary a favour.',
          'Step 3 (M1): "Note" partners with TAKE in the fixed phrase take note of: TOOK note of every complaint.',
          'Step 4 (A1): Answers: made ... did ... took.',
          'Step 5 (A1): Alternative accepted for the third gap in formal style: "took note" or "made a note"; "did note" is incorrect because the noun belongs to take.'
        ],
        keyTakeaway: 'Creation takes make, performed tasks take do, and attention-type nouns belong to take.'
      },
      {
        id: 'ex-shs2-eng-cr-2',
        title: 'Raising the Register of a Report Sentence',
        problem: 'Rewrite at formal register: "The chief talked about the land issue with the officers and told us to bring down the price of the permits because most times traders can\'t pay the fees."',
        stepByStepSolution: [
          'Step 1 (M1): Replace informal verbs with Latinate equivalents: talked about to discussed, told to instructed/requested, bring down to reduce.',
          'Step 2 (M1): Remove the spoken frequency phrase "most times" and use OFTEN, and expand the contraction "can\'t" to ARE UNABLE TO or CANNOT.',
          'Step 3 (M1): Check prepositions: discuss takes NO preposition; request that the assembly reduce is the formal frame.',
          'Step 4 (M1): Tighten the cause clause with a formal connector: since/as or owing to the fact that.',
          'Step 5 (A1): Formal version: "The chief discussed the land issue with the officers and requested that the fee for permits be reduced, since traders often cannot pay the current charges."'
        ],
        keyTakeaway: 'Formal register is a word-choice decision plus a redundancy sweep, not a longer sentence.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t2-collocations',
      topicId: 'shs2-eng-t2-collocations-register',
      title: 'Collocations and Register Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-cr-1',
          quizId: 'quiz-shs2-eng-t2-collocations',
          questionText: 'Choose the correct collocation: "The assembly ___ steps to drain the market."',
          optionA: 'did',
          optionB: 'made',
          optionC: 'took',
          optionD: 'gave',
          correctOption: 'C',
          subConcept: 'Verb-Noun Collocation',
          explanation: 'The fixed partnership is TAKE STEPS. "Make" pairs with arrangements and plans; "do" pairs with work and favours; "give" does not partner with steps.',
          remediationTip: 'Learn steps with take, plans with make, and chores with do; say each pair aloud ten times.'
        },
        {
          id: 'q-shs2-cr-2',
          quizId: 'quiz-shs2-eng-t2-collocations',
          questionText: 'Which sentence is grammatically and idiomatically correct?',
          optionA: 'The panel discussed about the new curriculum.',
          optionB: 'The panel discussed the new curriculum.',
          optionC: 'The panel discuss on the new curriculum.',
          optionD: 'The panel were discussed the new curriculum.',
          correctOption: 'B',
          subConcept: 'Verb without Preposition',
          explanation: 'DISCUSS is transitive and takes a direct object with no preposition. Adding about is a common Ghanaian error, and the passive in (d) changes the meaning entirely.',
          remediationTip: 'Substitute "talk about"; if you need the word about for talk, discuss already contains it.'
        },
        {
          id: 'q-shs2-cr-3',
          quizId: 'quiz-shs2-eng-t2-collocations',
          questionText: 'Choose the formal equivalent of "put off the launch".',
          optionA: 'postpone the launch',
          optionB: 'delaying the launch',
          optionC: 'shelve the launch for long',
          optionD: 'push the launch back',
          correctOption: 'A',
          subConcept: 'Register Conversion',
          explanation: 'POSTPONE is the single-word Latinate verb that corresponds to the phrasal "put off" and keeps the meaning neutral. (b) changes the structure, (c) adds an unjustified nuance, and (d) remains informal.',
          remediationTip: 'Match phrasal verbs to one-word formal pairs: put off to postpone, look into to investigate, set up to establish.'
        },
        {
          id: 'q-shs2-cr-4',
          quizId: 'quiz-shs2-eng-t2-collocations',
          questionText: 'Choose the correct preposition frame: "The traders accused the officer ___ favouring one association and blamed him ___ the delay."',
          optionA: 'for / of',
          optionB: 'of / for',
          optionC: 'with / on',
          optionD: 'on / with',
          correctOption: 'B',
          subConcept: 'Prepositional Collocation',
          explanation: 'The fixed frames are ACCUSE someone OF something and BLAME someone FOR something; the two prepositions must not be swapped.',
          remediationTip: 'Say the pair as one word: accuse-of, blame-for, differ-from, depend-on.'
        },
        {
          id: 'q-shs2-cr-5',
          quizId: 'quiz-shs2-eng-t2-collocations',
          questionText: 'Which word carries a approving attitude toward careful spending?',
          optionA: 'stingy',
          optionB: 'miserly',
          optionC: 'economical',
          optionD: 'cheap',
          correctOption: 'C',
          subConcept: 'Connotation',
          explanation: 'ECONOMICAL praises wise use of resources, while stingy and miserly condemn unwillingness to spend, and cheap insults quality or character.',
          remediationTip: 'Sort synonyms into praise and blame columns; the exam tests attitude as often as meaning.'
        }
      ]
    }
  },
  // =========================================================================
  // TERM 3
  // =========================================================================
  {
    id: 'shs2-eng-t3-summary-writing',
    subjectId: 'english',
    level: 'SHS 2',
    term: 3,
    orderIndex: 11,
    title: 'Summary Writing: Selection, Conciseness and Length Control',
    description: 'How to pick only the points that answer the question, paraphrase without changing meaning, fuse related points, and keep the answer inside the word limit set on the paper.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=kmnsmSwCxYo',
    youtubeId: 'kmnsmSwCxYo',
    keyNotes: `• A summary answer is a list of POINTS that answer the QUESTION, not a shorter version of the passage.
  - If the prompt asks for challenges, only a challenge can score; a price figure, a proverb or a speaker remark cannot.
• One point per sentence. Two points in one sentence must be split; two sentences carrying one point must be fused.
• Paraphrase: keep the meaning, change the wording. Cover the sentence with your hand, write it as you would tell a classmate, then compare.
• Reject these as marking points: illustrations, specific examples, quotations, proverbs, statistics used only as support, greetings, and restatements of the topic.
  - Keep "The roads to the farms are in a bad state"; reject "For instance, the Sunyani road has eleven potholes".
• A full-mark answer normally carries three or four distinct points, and the scheme awards roughly one mark per sound point.
• A point that is half-stated is no point: "Poor roads" alone earns nothing; "Bad feeder roads hinder the transport of produce" earns the mark.
• Word-count discipline: draft, count, write the number used below the answer, and stay one or two words under the limit.
• Fusing saves words and reads as maturity: "Manual labour is costly and young people refuse to work on farms."
• Keep the points in the order in which they appear in the passage; the marking scheme is arranged that way.
• Use the affirmative: "Farmers cannot hire labour" is safer than "Farmers can hire no labour".
• Write in simple tenses and the active voice, with no introduction, no title, no date and no conclusion.
• Count words the WAEC way: "cannot" is one word, "well-paid" is one word, "input costs" is two, and "the" or "of" counts too.
• Before you stop, read the question once more, tick each point against it, and delete any point that answers a different question.`,
    detailedNotes: {
      overview: 'Summary writing is the most teachable question in the whole WASSCE English Language paper because the marker counts points rather than admiring style. This topic moves beyond the vague instruction "shorten the passage" to the three skills that separate a good script from a fair one: selecting only what the question asks for, paraphrasing without changing meaning, and holding the finished answer inside the stated word limit. A candidate who masters the method can score heavily on an unseen passage about any subject at all.',
      introduction: 'Treat the passage as a heap of ore and the question as a sieve. Your task is not to describe the heap but to shake the sieve and collect what falls through. Every sentence you write must be a point an examiner can tick against a scheme; everything else is ore left behind on the sieve and it earns nothing.',
      realWorldContext: 'A regional editor at a Kumasi radio station once returned a news bulletin written by a young correspondent the day the Ashanti Regional Coordinating Council revised market tolls. The two-page official statement had been condensed into eighty words, but the bulletin carried the quotations of the minister instead of the changes themselves, and the editor wrote one note on it: "Give me the points, not the speech." That note is exactly what a chief examiner does to a summary script, and the same discipline is what makes a market association notice at Kejetia readable in ten seconds.',
      objectives: [
        'Select from an unseen passage only those statements that answer the exact summary question set',
        'Reject illustrations, quotations, proverbs and restatements before drafting the answer',
        'Paraphrase each marking point without narrowing or widening its meaning',
        'Fuse two closely related points into one grammatical sentence to save words',
        'Produce an answer within the stated word limit and record the number of words used'
      ],
      sections: [
        {
          title: 'The Point System: What the Marker Is Paid to Count',
          content: 'A summary marking scheme is a list of acceptable points, usually four or five for a full-mark question, and the marks a candidate collects depend on how many of those points appear in the answer. Nothing else earns credit: an eloquent opening, a conclusion, a restatement of the question and a neat introduction all score zero. This one fact should govern every decision you make while drafting. Read the question first, then read the passage hunting only for sentences that express a point the question demands. Three clear points in flat English will beat six elegant sentences that carry two ideas, because the scheme ticks ideas and not adjectives. The mark is also withheld when the idea is incomplete: "Poor road networks" is a fragment, while "Bad road networks make it hard to move produce to market" is a point a marker can verify against the scheme.',
          bulletPoints: [
            'A point must be a complete idea; a phrase lifted out of context is not a point.',
            'Three or four sound points are usually enough for full marks, so a fifth crowded point is rarely worth the risk.',
            'A point worded differently from the scheme still scores as long as the meaning matches.',
            'The same idea expressed twice in different words counts once, never twice.',
            'A perfect sentence taken from the wrong paragraph or answering a different part of the passage scores nothing.'
          ],
          keyTakeaway: 'Count points, not words: the mark follows the number of distinct ideas that answer the question.',
          realWorldExample: 'After a long address to the parents association at Achimota, one parent told the guest of honour that only three items were worth recording: the fees review, the new boarding policy and the date of sports day. That is a summary scheme in ordinary life.'
        },
        {
          title: 'Selecting Points: The Question Is the Filter',
          content: 'The question decides what to include and, more importantly, what to reject. A prompt asking for "the challenges facing small-scale manufacturers" excludes the history of the association, the names of the speakers, the figures used to illustrate a challenge and the closing vote of thanks. Convert the question into a rejection checklist before you read the passage a second time: illustrations, examples, quotations, proverbs, comparisons, statistics that merely support a general statement, and any restatement of the topic sentence. As you read, number the candidate points lightly in the margin and keep them in the order in which they appear, because that is normally the order the scheme uses. The habit of marking the general statement and refusing to mark the sentence that begins "For example" is worth more marks than any vocabulary the passage can contain.',
          bulletPoints: [
            'Underline the general statement only, never the illustration that follows it.',
            'Signal words of rejection: "For example", "Such as", "To illustrate", "As he put it", "According to".',
            'Where two sentences express one idea, count them as a single point and choose the clearer wording.',
            'A true statement from the passage that answers a different question scores zero.',
            'Preserving passage order makes the answer easy to tick and stops you repeating yourself.'
          ],
          keyTakeaway: 'Read the question before the passage and let it act as a sieve that catches illustrations and lets points through.',
          realWorldExample: 'A newspaper report on trotro fares in Accra carried one relevant point, the fare increase, plus a driver remark that even fuel had become a luxury. The remark is colour; the fare increase is the point, and a bulletin that kept the remark failed the editor.'
        },
        {
          title: 'Paraphrasing and Fusing Without Changing Meaning',
          content: 'Paraphrasing keeps the meaning and changes the wording, usually by replacing a word with a close synonym, turning a negative into an affirmative, or promoting a specific example into the general statement it supports. The safe classroom method is simple: read the sentence, cover it, and write what you would say to a friend who has not read the passage. Compare afterwards, and repair anything you have added or lost. Fusing goes a step further by joining two short points with "and", "as well as", "because" or "so that", which cuts words and reads as mature composition. "Manual labour is expensive" plus "Young people refuse farm work" becomes "Hiring farm labour is costly and difficult because young people avoid manual work", one sentence that carries two marks. Keep technical terms and proper nouns untouched; you are not required to paraphrase "cocoa" or "Tamale".',
          bulletPoints: [
            'Change the wording, never the content; a paraphrase that says more than the original is not a paraphrase.',
            'Do not substitute a narrower word: "crops" becomes "maize", the meaning shrinks and the mark is at risk.',
            'Fuse a cause with its effect in one sentence when both of them are points.',
            'Convert reported speech into the underlying statement: "Members protested that the stalls were too small" becomes "Traders objected that the stalls were too small".',
            'Copy at most a short phrase when no safe paraphrase exists, and never copy a whole sentence.'
          ],
          keyTakeaway: 'Cover the sentence, say it in your own words, then check that nothing has been added or lost.',
          realWorldExample: 'A minute of the Tamale traders association read: "Members protested that the stalls allocated at the new market were too narrow for their goods." A prefect condensing it for the notice board wrote "Traders rejected the new stalls as too small for their goods", a clean paraphrase of the same point.'
        },
        {
          title: 'Length Control: Word Counts, Condensation and Presentation',
          content: 'Length control is the mark candidates throw away most often. Write the draft, count the words, and record the number beneath the answer so the examiner sees that you know your own length. Count by the standard convention: a contraction such as "cannot" is one word, a hyphenated form such as "well-paid" is one word, "input costs" is two words, and every small word including "the" and "of" counts. To cut words without cutting points, delete adjectives that carry no idea, compress relative clauses into -ing or compound modifiers ("farmers who operate small holdings" becomes "smallholder farmers"), and remove framing phrases such as "The writer states that". Numbered points and a single paragraph are both acceptable unless the paper specifies a format; what the paper insists on is that every line earns its place, and that the total stays inside the limit printed on the question.',
          bulletPoints: [
            'Aim one or two words below the limit; exactly at the limit is safe only if your counting matches the examiner.',
            'Framing openings such as "In the passage the author explains that" waste five words and score nothing.',
            'Number each point if you use that style, but never number one fused point twice.',
            'No title, no date, no salutation and no conclusion belong in a summary.',
            'Re-read the question at the end and strike out any point that does not answer it, even if that leaves you far under the limit.'
          ],
          keyTakeaway: 'Count the words, write the number down, and cut everything that does not carry a point.',
          realWorldExample: 'A district assembly notice at Ho that ran to eighty-eight words was cut to fifty-two by replacing "officials who are in charge of the sanitation department" with "sanitation officials" and deleting "It is important to note that".'
        }
      ],
      commonMistakes: [
        'Copying whole sentences instead of paraphrasing loses the mark for conciseness and usually breaks the word limit.',
        'Treating an illustration as a point: "The road from Ho to Kpando has thirty potholes" is an example; the point is "Feeder roads are in a poor state".',
        'Repeating one idea in two sentences and counting it twice, when the marker awards one mark however often the idea appears.',
        'Answering a wider question than the one set, so the summary carries causes, effects and solutions when only challenges were required.',
        'Omitting the word count or exceeding the limit, both of which tell the examiner that length control was ignored.'
      ],
      wassceExamTips: [
        'In the summary section of Paper 3, marks are awarded point by point, so secure the count of four clear points before polishing any sentence.',
        'Examiners reward method as well as answer: filtering with the question, striking out illustrations, and fusing related points are techniques the scheme recognises and credits.',
        'Budget roughly thirty minutes for the summary after the comprehension passages on Paper 3, and reserve the last three minutes to count words and write the number.',
        'A point copied word for word from the passage reads as unparaphrased; where the passage wording is technical, keep only the technical term and rebuild the rest of the sentence yourself.',
        'The same filtering skill answers the lexis and structure items on Paper 1 that test passage meaning, and the condensation skill feeds the directed-writing task on Paper 2, so practise by rewriting one paragraph in half the words.'
      ],
      summaryChecklist: [
        'Can I separate the points from the illustrations in a passage for a given summary question?',
        'Can I paraphrase a point without narrowing or widening its meaning?',
        'Can I fuse two related points into one grammatically correct sentence?',
        'Can I write four points inside a stated word limit and record the number of words used?',
        'Can I arrange my points in the order in which they appear in the passage?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-sw-1',
        title: 'Selecting, Fusing and Counting Four Points',
        problem: 'Read the extract and answer the question in not more than 45 words: "Youth unemployment in the coastal towns of the Central Region has risen because the fishing companies no longer recruit boys who leave school at twenty. The companies explain that their boats now carry expensive foreign equipment that only trained mechanics operate, and one manager at Elmina remarked that even his own sons refused to go to sea. Apprenticeship programmes, which many parents had hoped would absorb the school leavers, are concentrated in Kumasi and Takoradi, and a trainee in Cape Coast said that the transport fare alone consumed his weekly stipend. As a result, many young people sit at the landing beach from dawn to dusk without work." Question: State the reasons why young people in the coastal towns remain unemployed.',
        stepByStepSolution: [
          'Step 1 (M1): Convert the question into a filter: only REASONS for youth unemployment in the coastal towns can score; remarks, hopes and narrative colour are rejected.',
          'Step 2 (M1): Mark the candidate points in the passage: (i) fishing firms no longer recruit school leavers, (ii) the boats now need trained mechanics, (iii) apprenticeship schemes are sited in the big cities, (iv) the transport cost consumes a trainee stipend. Reject the Elmina manager remark and the trainee quotation as illustrations.',
          'Step 3 (M1): Fuse (i) and (ii) into one cause-and-effect sentence, and fuse (iii) and (iv) into a second sentence; this keeps the answer inside the limit.',
          'Step 4 (M1): Draft without any framing opening: "Fishing firms no longer employ school leavers because their boats now carry specialised equipment that only trained mechanics can handle. Apprenticeship schemes are located mainly in large cities, and trainees in the coastal towns spend their stipend on transport."',
          'Step 5 (A1): Count the draft: thirty-nine words, which is inside the forty-five word limit; write "39 words" beneath the final copy.',
          'Step 6 (A1): Full answer: the four scheme points arranged in passage order in the two sentences above, with the word count recorded.'
        ],
        keyTakeaway: 'Filter with the question, reject quotations and remarks, fuse cause with effect, and always record the word count.'
      },
      {
        id: 'ex-shs2-eng-sw-2',
        title: 'Cutting an Overlength Draft to the Limit',
        problem: 'A candidate wrote the following sixty-two word answer against a limit of forty-five: "In the passage, the author explains that the market women at Suame were angry because the new stalls were not convenient for their goods. The writer also states that the association secretary said the fee had doubled without notice. Many of the women complained that they had been operating in the same place for more than twenty years and did not like change." Summarise the complaints of the market women in not more than 45 words.',
        stepByStepSolution: [
          'Step 1 (M1): Delete the framing phrases "In the passage, the author explains that" and "The writer also states that"; they carry no point and remove about thirteen words at once.',
          'Step 2 (M1): Delete the restatement "they had been operating in the same place for more than twenty years and did not like change"; that is feeling and background, not a fresh complaint.',
          'Step 3 (M1): Convert the reported quotation into the underlying point: "the association secretary said the fee had doubled without notice" becomes "the stall fee was doubled without notice".',
          'Step 4 (M1): Condense the wording: "not convenient for their goods" becomes "too small for their goods", and "Many of the women" becomes "traders".',
          'Step 5 (A1): Assemble the answer: "Suame market traders objected that the new stalls were too small for their goods and that the stall fee had been doubled without prior notice."',
          'Step 6 (A1): Count: twenty-five words, well inside the limit, and both scheme points are present; write "25 words" below the answer.'
        ],
        keyTakeaway: 'Framing sentences and restatements are the first to go; cutting them is what creates room for the points.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t3-summary',
      topicId: 'shs2-eng-t3-summary-writing',
      title: 'Summary Writing Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-sw-1',
          quizId: 'quiz-shs2-eng-t3-summary',
          questionText: 'Which of the following should be included as a marking point in a summary?',
          optionA: 'An illustration that supports a statement in the passage',
          optionB: 'A general statement that answers the summary question',
          optionC: 'A quotation from one of the speakers in the passage',
          optionD: 'The description of the setting given in the opening paragraph',
          correctOption: 'B',
          subConcept: 'Selecting Points',
          explanation: 'Only a complete statement that answers the question asked can be ticked against the scheme. Illustrations and quotations support points but are rejected, and setting description answers no question at all.',
          remediationTip: 'Before you draft, write the question in your own words at the top of your rough work and reject every sentence that does not fit it.'
        },
        {
          id: 'q-shs2-sw-2',
          quizId: 'quiz-shs2-eng-t3-summary',
          questionText: 'Choose the best paraphrase of this sentence: "Feeder roads in poor condition make the movement of produce to the main market difficult."',
          optionA: 'The roads are very bad indeed this rainy season.',
          optionB: 'There are too few feeder roads, so farmers cannot reach any market.',
          optionC: 'Bad feeder roads hinder the transport of farm produce to market.',
          optionD: 'Farm produce has become too expensive in the main market.',
          correctOption: 'C',
          subConcept: 'Paraphrasing Meaning',
          explanation: 'Option C keeps both halves of the idea, the poor state of the roads and the difficulty of moving produce, in new wording. Option B changes the fault from condition to number, option D states an effect not in the sentence, and option A adds a season that was never mentioned.',
          remediationTip: 'After paraphrasing, ask whether you have added anything and whether you have lost anything; both errors lose the mark.'
        },
        {
          id: 'q-shs2-sw-3',
          quizId: 'quiz-shs2-eng-t3-summary',
          questionText: 'Which option fuses two marking points correctly without adding new material?',
          optionA: 'Manual labour is expensive and young people refuse to work on farms.',
          optionB: 'Manual labour is expensive, so young people refuse farm work and farm yields keep falling.',
          optionC: 'Manual labour is expensive.',
          optionD: 'Young people refuse to work on farms.',
          correctOption: 'A',
          subConcept: 'Fusing Points',
          explanation: 'Option A joins the two required points in one grammatical sentence and adds nothing. Option B introduces falling yields, which is a further consequence the question did not ask for, while options C and D each carry only one of the two points, so they are not fusion at all.',
          remediationTip: 'Fuse only what the question asks for; if a connector drags in a new idea, cut that idea out.'
        },
        {
          id: 'q-shs2-sw-4',
          quizId: 'quiz-shs2-eng-t3-summary',
          questionText: 'A summary question sets a limit of forty-five words. Which action is correct?',
          optionA: 'Write as many points as possible and leave the counting to the examiner.',
          optionB: 'Stop at fifty-two words because the extra points may still earn marks.',
          optionC: 'Draft, count the words, and reduce the answer to about forty-three words before copying it out.',
          optionD: 'Use one word for each point so that the answer is certain to be short.',
          correctOption: 'C',
          subConcept: 'Length Control',
          explanation: 'Counting and trimming before the final copy shows length control and keeps the answer safely inside the limit. Exceeding the limit risks a penalty, and single-word answers are not complete points, so they earn no marks.',
          remediationTip: 'Write the number of words you used underneath the answer; the habit forces you to check the limit.'
        },
        {
          id: 'q-shs2-sw-5',
          quizId: 'quiz-shs2-eng-t3-summary',
          questionText: 'Which of the following must be REJECTED as a marking point?',
          optionA: 'The association has no office of its own.',
          optionB: 'The stall fee is collected twice every month.',
          optionC: 'As the chairman put it, "we are being squeezed from both ends".',
          optionD: 'Many members do not hold a bank account.',
          correctOption: 'C',
          subConcept: 'Rejecting Quotations',
          explanation: 'Option C is a quoted remark that restates a feeling rather than reporting a distinct fact, and quotations are rejected in summary work. The other three each state a verifiable fact that could answer a question.',
          remediationTip: 'Treat "As someone put it" and "For instance" as warning signs that a rejection, not a point, is coming.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t3-word-stress-polysyllabic',
    subjectId: 'english',
    level: 'SHS 2',
    term: 3,
    orderIndex: 12,
    title: 'Word Stress in Long Words and Syllable Counting',
    description: 'Where the strong syllable falls in words of three to five syllables, how the schwa behaves in unstressed syllables, which suffix families shift stress, and how to count syllables by vowel sounds.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=GkMRHfhTLs8',
    youtubeId: 'GkMRHfhTLs8',
    keyNotes: `• A syllable is built around one vowel SOUND that you hear, not one vowel letter you see.
  - "book" one, "elephant" three (el-e-phant), "photography" four (pho-tog-ra-phy), "unforgettable" five (un-for-get-ta-ble).
• Silent letters and doubled vowels add no syllable: "time" is one, "rated" is two, "washed" is one because the -ed is not sounded, and "boat", "read" and "chief" each hold a single vowel sound.
• Every English word of two or more syllables has ONE primary stress: a longer, higher, louder syllable with a clearer vowel.
• Stress position must be learned with the word; it is not fixed to the first or last syllable as in several Ghanaian languages.
• Suffix families that carry the weight onto the syllable before them: -ic, -ical, -tion, -sion, -ity, -ial.
  - eduCATION, deCISSION, inDUStrial, u-ni-VER-si-ty, e-lec-TRI-ci-ty, pho-to-GRA-phic.
• Stress-changing triple: PHO-to-graph, fo-TOG-ra-phy, pho-to-GRA-phic; the stress moves one step right and the vowels change with it.
• "nation" keeps its early stress in "national" and "nationalise", but the vowel of that syllable changes from the "ay" of "nation" to the short "a" of "national".
• Adding -ity pushes the beat onto the syllable before it: "nationality" is stressed on the third, na-tion-AL-i-ty.
• Suffixes that leave the stress of the base word alone: -ness, -ment, -hood, -ship, -ful, -less, -ing, -ed.
  - HAPPY becomes HAP-pi-ness; aGREE becomes a-GREE-ment; PLAY gets PLAY-ing.
• Two-syllable noun and verb pairs often shift stress, and the endings -ee and -eer take the stress: reCORD the verb but RECord the noun, inCREASE but INcrease, employEE, enginEER.
• Unstressed syllables usually reduce to the schwa, the neutral sound in the middle of "about" and at the end of "sofa".
• Ghanaian interference patterns tested in orals: "MAchine" for maCHINE, "JUly" for juLY, "interVUE" for INterview, "DEvelop" for deVElop.
• Syllable counting and stress placement are two separate questions; never answer a stress item by counting letters.`,
    detailedNotes: {
      overview: 'The oral paper rarely asks a candidate to define stress; it asks the ear to hear one strong syllable in a long word and to place it correctly. This topic therefore builds two separate habits that WASSCE testing depends on: counting syllables accurately by vowel sounds, and knowing which syllable carries primary stress in words of three, four and five syllables. It also treats the schwa, because misplacing the stress ruins two or three vowels at once, and the stress-changing suffix families that examiners love: photograph, photography, photographic.',
      introduction: 'Think of a long word as a row of boxes with one ball inside that is heavier than the rest. Your mouth finds the heavy box automatically when you have heard the word enough times, and your ear can be trained to hear it in a classroom drill. Never try to work out stress from spelling alone; listen, tap the strong beat, and then count the taps to find which syllable has it.',
      realWorldContext: 'An English teacher at a co-educational school in Ho ran a fifteen-minute oral drill before the mock examination and wrote on the board: "Say maCHINE, not MAchine. Say juLY, not JUly. Say deVElop, not DEvelop." Those three corrections had come from the speech and drama period on the school radio programme that the district education office circulates to basic and secondary schools in the Volta Region, and the same list of shifted stresses appears every year in Paper 1 oral items.',
      objectives: [
        'Count the syllables in an English word by identifying its vowel sounds',
        'Place primary stress correctly in words of three, four and five syllables',
        'Explain the reduction of unstressed vowels to the schwa in polysyllabic words',
        'Apply the stress behaviour of the suffix families -ic, -tion, -sion, -ity, -ial and the stress-neutral suffixes',
        'Correct habitual stress shifts produced by Ghanaian first-language interference'
      ],
      sections: [
        {
          title: 'Counting Syllables by Vowel Sounds',
          content: 'A syllable is organised around one vowel sound, so the count is made with the ear and not with the eye. Say the word slowly and tap each vowel sound you hear: "elephant" gives three taps, "geography" four, "unforgettable" five, "beautiful" three. Silent letters add nothing, which is why "time" is one syllable while "rated" is two, and why the -ed ending of "washed" is not sounded at all. Two vowel letters written side by side may represent a single gliding sound, so "boat", "read", "chief" and "noise" each contain one syllable only. A word can also end on a syllabic consonant instead of a vowel, as in "button" (two) and "rhythm" (two). The count matters because stress is described by position: you cannot say that the third syllable is strong unless you have established that there are five syllables to begin with.',
          bulletPoints: [
            'Tap the vowel sounds you hear; one sound equals one syllable.',
            'Silent -e adds no syllable: "rate" one, "rated" two, "hate" one, "hated" two.',
            'A diphthong counts as a single syllable: "fire", "boy", "noise", "loud".',
            'WASSCE-safe counts: dangerous three, mathematics four, photography four, geography four, important three.',
            'A syllabic consonant carries a syllable without a vowel: "button", "rhythm", "cotton".'
          ],
          keyTakeaway: 'Count the vowel sounds you hear, never the vowel letters you see.',
          realWorldExample: 'In a spelling and syllable bee at Cape Coast, the winner clapped five times for "unforgettable": un-for-get-ta-ble, while a rival clapped six for "photography" and lost the round.'
        },
        {
          title: 'Where Primary Stress Falls in Long Words',
          content: 'In a word of three or more syllables exactly one syllable carries primary stress. It is longer, higher in pitch and noticeably stronger, and only its vowel is pronounced in full. English does not attach stress to a fixed position the way some Ghanaian languages tend to, so the position has to be learned as part of the word, with useful tendencies as guides. Words ending in -ic, -ical, -tion, -sion, -ial and -ity usually place the stress on the syllable immediately before that ending: "educational", "decision", "industrial", "university", "electricity", "photographic". Combining forms such as tele- keep the stress early: "telephone", "television", "telescope". Two-syllable pairs of verb and noun often differ only by stress, and the endings -ee and -eer pull the stress to the final syllable. Examiners test exactly these items because they are the places where a wrong stress changes the meaning or simply sounds wrong to a trained ear.',
          bulletPoints: [
            'Stress position is part of the word; learn it with the spelling, never separately.',
            'Verb and noun pairs move the stress: reCORD but RECord, preSENT but PREsent, exPORT but EXPORT.',
            'Tele- words keep early stress: TELEphone, TELEvision, TELEscope.',
            'Endings -ee and -eer take the stress: employEE, enginEER, referEE.',
            'A long word may also carry a weaker secondary stress, but the oral paper asks only for the primary one.'
          ],
          keyTakeaway: 'Learn the strong syllable together with the word, and treat the suffix families as reliable guides rather than iron laws.',
          realWorldExample: 'A Kumasi station announcer reading a programme schedule said "teleVISION news at nine", and the news reader on the same frequency said "TELEvision news at nine"; the second version is the one a WASSCE oral marker accepts.'
        },
        {
          title: 'Stress-Changing Suffix Families and the Schwa',
          content: 'When a suffix moves the stress, the vowels in the syllables that lose stress change their quality, and these two facts are tested together. Take "photograph", "photography" and "photographic". In "photograph" the first syllable is strong and the second is reduced. In "photography" the primary stress has moved onto the second syllable, so the first syllable collapses into a schwa while the stressed syllable takes a full vowel. In "photographic" the stress sits on the third syllable, with a weaker secondary stress left on the first. The family of "nation" behaves the same way: "nation" has one vowel sound in its first syllable, "national" and "nationalise" keep the stress there but change that vowel, and "nationality" shifts it forward again. Because English has seven vowel letters but far fewer fully distinct vowel sounds in unstressed positions, the syllable that is not stressed is usually pronounced with the neutral schwa, which is the sound at the start of "about", in the middle of "support" and at the end of "sofa".',
          bulletPoints: [
            'PHO-to-graph, fo-TOG-ra-phy, pho-to-GRA-phic: the stress walks one step right and the vowels change as it goes.',
            'A syllable that loses stress usually loses its full vowel and becomes a schwa.',
            'nation, national, nationalise keep early stress but change the vowel of the first syllable.',
            'Adding -ic, -ity or -tion to a base word normally shifts the stress rather than leaving it alone.',
            'Adding -ness, -ment, -hood, -ful, -less or -ing leaves the stress exactly where the base word had it.'
          ],
          keyTakeaway: 'Shift the stress and you shift the vowels with it: unstressed syllables in English almost always reduce to the schwa.',
          realWorldExample: 'A form-four pupil in Tamale read "pho-TOG-ra-FI" aloud and the teacher asked the class to say "fo-TOG-ra-phy" three times, pointing out that the first syllable becomes a mere grunt once the stress leaves it.'
        },
        {
          title: 'Ghanaian Interference, Minimal Pairs and the Oral Paper',
          content: 'Akan, Ewe, Dagbani, Ga and Guan languages distribute stress and tone differently from English, and three habits carry into English speech. First, some learners give every syllable equal weight, producing a syllable-timed rhythm that hides the strong beat of "geography" or "banana". Second, learners often refuse to reduce unstressed vowels, so they pronounce every written vowel in full and turn "photography" into five clear syllables instead of four reduced ones. Third, learners transfer stress to the first syllable of familiar loanwords, giving "MAchine" for maCHINE, "JUly" for juLY, "interVUE" for INterview and "DEvelop" for deVElop. Paper 1 oral items on stress are built from these very words, and the fastest cure is a minimal-pair drill: say the word with the wrong stress, hear how strange it sounds, then say it correctly with a hand tap on the strong syllable.',
          bulletPoints: [
            'Equal stress on every syllable is the most common Ghanaian feature and it hides the primary beat.',
            'Resisting the schwa makes English sound over-clear and foreign; reduce what is not stressed.',
            'Frequently tested shifts: machine, July, magazine, television, telephone, development, interview, efficient.',
            'Word stress is not sentence stress: a content word such as "photograph" may still be weakened inside a running sentence.',
            'The rhythm of English is stressed-syllable timed, so the count of strong beats in a line matters more than the count of syllables.'
          ],
          keyTakeaway: 'Practise the known trouble words in minimal pairs and tap the strong syllable until the ear takes over.',
          realWorldExample: 'At an MCE campaign gathering, a speaker announced that the price of "petROL" would fall; the market women corrected him to "PEtroll", and the news desk in Takoradi used the corrected form in the bulletin that evening.'
        }
      ],
      commonMistakes: [
        'Counting vowel letters instead of vowel sounds, so "boat" is called two syllables and "time" is called two.',
        'Answering a stress question by pointing at the longest syllable; length is not the test, the strong beat is.',
        'Pronouncing every written vowel in full, which destroys the schwa and makes "photography" sound like five syllables.',
        'Carrying the stress of a two-syllable verb into the related noun, saying "reCORD" when the record of results is meant.',
        'Reading the stress pattern of a Ghanaian language onto an English loanword, giving "MAchine", "JUly" and "DEvelop" instead of maCHINE, juLY and deVElop.'
      ],
      wassceExamTips: [
        'On the oral section of Paper 1, the instruction "Mark the word whose stress differs from that of the others" is answered by saying all four words aloud and tapping the beat; do not try to reason it from spelling.',
        'Examiners award the mark only for the primary stress; if a word also carries secondary stress, as in "photographic", ignore the weaker beat when answering.',
        'Keep a written list of the ten stress words you get wrong in class drills, because the same words reappear in different papers year after year.',
        'For a question that asks how many syllables a word has, clap the word slowly and write the count; a careless count turns the whole item wrong.',
        'In Paper 2 and Paper 3 the sound of your English is not marked, but in the oral paper a shifted stress in a common word is penalised, so practise those words before the examination and not after it.'
      ],
      summaryChecklist: [
        'Can I count the syllables in a five-syllable word by its vowel sounds?',
        'Can I place the primary stress correctly in words ending in -ic, -tion, -sion, -ity and -ial?',
        'Can I explain what happens to the unstressed vowels in "photography" and "photographic"?',
        'Can I name suffixes that shift stress and suffixes that leave the base stress untouched?',
        'Can I correct the common Ghanaian stress shifts in words such as machine, July, television and development?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-ws-1',
        title: 'Stress and Vowel Change in a Word Family',
        problem: 'The word family is "photograph", "photography" and "photographic". (a) Count the syllables in each word. (b) Mark the primary stress in each. (c) Explain what happens to the vowel of the first syllable when the stress moves.',
        stepByStepSolution: [
          'Step 1 (M1): Count by vowel sounds, saying each word slowly: "photograph" has three syllables, "photography" has four, "photographic" has four.',
          'Step 2 (M1): Locate the strong beat by tapping: PHO-to-graph falls on the first syllable, fo-TOG-ra-phy on the second, pho-to-GRA-phic on the third.',
          'Step 3 (M1): Compare the first syllable in the three forms: it is a full vowel in "photograph" where the stress sits, but it is reduced to a neutral sound in "photography" where the stress has moved away.',
          'Step 4 (M1): Note that the stressed syllable always keeps its full vowel, so the middle syllable is weak in "photograph" and full in "photography".',
          'Step 5 (A1): Answers: three, four and four syllables; stress on syllable 1, syllable 2 and syllable 3 respectively.',
          'Step 6 (A1): Full answer: PHO-to-graph, fo-TOG-ra-phy, pho-to-GRA-phic. Each step to the right pushes the previous syllable into an unstressed, reduced vowel, which is why a wrong stress also gives wrong vowels.'
        ],
        keyTakeaway: 'In a word family the stress walks, and every syllable the stress leaves behind reduces to a schwa.'
      },
      {
        id: 'ex-shs2-eng-ws-2',
        title: 'Correcting Stress Errors in an Oral Reading',
        problem: 'A candidate read this sentence in the oral examination, marking the stressed syllable in capital letters: "The MAchine in the deVELOpment office will arRIVE on the first of JUly." (a) Identify every wrongly stressed word. (b) Give the accepted stress pattern of each. (c) Name the habit that produced the errors.',
        stepByStepSolution: [
          'Step 1 (M1): Say each content word on its own and tap the beat: the candidate placed stress on the first syllable of "machine", on the first syllable of "development", and on the first syllable of "July".',
          'Step 2 (M1): Count the syllables of each before naming a position: ma-chine (two), de-vel-op-ment (four), ju-ly (two), ar-rive (two).',
          'Step 3 (M1): Compare with the accepted patterns: maCHINE, deVELopment and juLY all carry the primary stress on the second syllable, while "arRIVE" was already correct.',
          'Step 4 (M1): Diagnose the cause: every error shifts the beat forward onto the first syllable, the classic interference habit in these frequently tested words.',
          'Step 5 (A1): Wrongly stressed words: machine, development, July.',
          'Step 6 (A1): Full answer: "The maCHINE in the deVELopment office will arRIVE on the first of juLY." Each corrected beat is a longer, higher syllable, and every syllable the stress leaves behind is reduced.'
        ],
        keyTakeaway: 'Count the syllables first, then move the single strong beat to its accepted position; a wrong beat is a pronunciation error, not a spelling one.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t3-word-stress',
      topicId: 'shs2-eng-t3-word-stress-polysyllabic',
      title: 'Word Stress and Syllable Counting Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-ws-1',
          quizId: 'quiz-shs2-eng-t3-word-stress',
          questionText: 'In which of the following words does the primary stress fall on the FIRST syllable?',
          optionA: 'machine',
          optionB: 'July',
          optionC: 'television',
          optionD: 'magazine',
          correctOption: 'C',
          subConcept: 'Primary Stress Position',
          explanation: 'TElevision is stressed on the first syllable, like telephone and telescope. Machine, July and magazine all carry the stress on the final syllable, which is why Ghanaian speakers often shift them forward.',
          remediationTip: 'Say the word and tap your desk on the beat you hear as longest and loudest; the tap tells you the position.'
        },
        {
          id: 'q-shs2-ws-2',
          quizId: 'quiz-shs2-eng-t3-word-stress',
          questionText: 'How many syllables does the word "unforgettable" have?',
          optionA: 'Three',
          optionB: 'Four',
          optionC: 'Five',
          optionD: 'Six',
          correctOption: 'C',
          subConcept: 'Syllable Counting',
          explanation: 'There are five vowel sounds: un-for-get-ta-ble. Six would count a sound that is not pronounced, and three or four would merge separate vowel sounds into one.',
          remediationTip: 'Clap once for every vowel sound you hear, never for a vowel letter you see.'
        },
        {
          id: 'q-shs2-ws-3',
          quizId: 'quiz-shs2-eng-t3-word-stress',
          questionText: 'Which of the following suffixes leaves the stress of the base word UNCHANGED?',
          optionA: '-ic',
          optionB: '-ness',
          optionC: '-tion',
          optionD: '-ity',
          correctOption: 'B',
          subConcept: 'Stress-Neutral Suffixes',
          explanation: 'Adding -ness keeps the base stress exactly where it was: HAP-py becomes HAP-pi-ness. The other three endings carry the weight onto the syllable before them, so "photograph" gives "pho-to-GRA-phic", "educate" gives "ed-u-CA-tion" and "curious" gives "cu-ri-OS-i-ty".',
          remediationTip: 'Group suffixes into two lists in your notebook: the ones that push the stress and the ones that do not touch it.'
        },
        {
          id: 'q-shs2-ws-4',
          quizId: 'quiz-shs2-eng-t3-word-stress',
          questionText: 'The first syllable of "photography" is pronounced with which vowel sound?',
          optionA: 'The reduced neutral sound /ə/',
          optionB: 'The long sound /əʊ/ as in "photo"',
          optionC: 'The sound /ɒ/ as in "lot"',
          optionD: 'The sound /iː/ as in "see"',
          correctOption: 'A',
          subConcept: 'Schwa in Unstressed Syllables',
          explanation: 'Because the primary stress has moved to the second syllable, the first syllable reduces to a schwa: fə-TOG-rə-fi. The full /əʊ/ sound survives only in words where that syllable is stressed, as in "photograph" and "photographic".',
          remediationTip: 'Whenever the stress leaves a syllable, expect its vowel to weaken; never pronounce every written vowel in full.'
        },
        {
          id: 'q-shs2-ws-5',
          quizId: 'quiz-shs2-eng-t3-word-stress',
          questionText: 'Which word has the same stress pattern as "geography"?',
          optionA: 'dictionary',
          optionB: 'mathematics',
          optionC: 'telephone',
          optionD: 'photography',
          correctOption: 'D',
          subConcept: 'Matching Stress Patterns',
          explanation: 'Geography has four syllables with the stress on the second, and photography matches it exactly. Dictionary and telephone take first-syllable stress, while mathematics takes stress on the third syllable.',
          remediationTip: 'Write the pattern as a row of numbers for each option, for example 1-2-3-4 with the strong beat marked, then compare the rows.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t3-reported-speech-advanced',
    subjectId: 'english',
    level: 'SHS 2',
    term: 3,
    orderIndex: 13,
    title: 'Reported Speech: Backshift, Time and Place Shifts',
    description: 'The full conversion machine: tense backshift and modal shifts, pronoun and possessive changes, adverb of time and place transfers, the patterns of reporting verbs, and the reporting of questions, commands and exclamations.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=k7KjxyZ9W2I',
    youtubeId: 'k7KjxyZ9W2I',
    keyNotes: `• Reported speech turns the words of a speaker into your own sentence: remove the quotation marks and the colon, then change person, tense and time or place markers.
  - Direct: Kwame said, "I am leaving Accra today." Reported: Kwame said that he was leaving Accra that day.
• Backshift moves one step into the past: simple present becomes simple past, present continuous becomes past continuous, present perfect becomes past perfect.
• Modal shifts: will becomes would, shall becomes should, can becomes could, may becomes might and must becomes had to for obligation, while a modal already past in shape, such as could, would, should, might or ought to, stays unchanged.
• Simple past usually becomes past perfect; it may stay simple past when the time reference is still clear, but the past perfect is the safer answer in the examination.
• There is no backshift for universal truths, proverbs and permanent facts: The teacher said that water boils at one hundred degrees.
• Change every person marker to fit the reporter: my becomes his or her, we becomes they, our becomes their, yourself becomes myself.
• Time and place words travel with the reporter: today becomes that day, tonight becomes that night, now becomes then, here becomes there, this becomes that, come becomes go.
• Yesterday becomes the day before, tomorrow becomes the next day or the following day, last term becomes the previous term, two days ago becomes two days before.
• next week becomes the following week, and a phrase such as "on Friday last" becomes "on the previous Friday".
• say and tell are not interchangeable: tell requires a person object, so told me is right and said me is wrong; say may use said to me.
• ask takes a person then the clause or the infinitive, while enquire takes about or whether and never a person plus that.
• Commands, requests and advice are reported with a person plus the to-infinitive: He ordered them to leave; She advised me to study harder.
• A reported question never keeps question word order: He asked where I lived, never He asked where did I live.
• Yes and no questions are reported with if or whether: She asked if I had read the letter.
• Exclamations lose the mark and gain an emotion verb: Alas becomes He lamented that; Hurrah becomes He shouted with joy that.`,
    detailedNotes: {
      overview: 'Reported speech is the part of the syllabus where SHS 2 grammar becomes a machine with six moving parts: tense, modal, person, time word, place word and the choice of reporting verb. WASSCE rewards the whole machine, and a candidate who backshifts the verb but forgets to change "today" into "that day" loses the mark. This topic collects the shifts into tables, then adds the advanced items that separate a pass from a distinction: universal truths, the behaviour of must, and the patterns of verbs such as enquire, admonish and suggest.',
      introduction: 'Direct speech carries the words of the original speaker; reported speech carries them inside your own sentence, and your sentence is spoken later and usually elsewhere. Everything that pointed to the original moment must be re-aimed at yours. Ask three questions in order when you convert: how far back is the reporting verb, who is speaking to whom, and where and when were the words said.',
      realWorldContext: 'A parent at a mothers and fathers association meeting in Kumasi stood up and said, "I will bring my daughter here next week, and the headmaster must tell us what happened today." The minute secretary who wrote that entry reported it three lines later as: the parent stated that she would bring her daughter there the following week and that the headmaster had to tell them what had happened that day. Every change the secretary made is exactly what the examination asks of you.',
      objectives: [
        'Apply the tense backshift table to statements reported by a past-tense reporting verb',
        'Shift the modals will, shall, can, may and must into their reported forms',
        'Change pronouns and possessives so that they refer correctly to the reporter',
        'Convert adverbs of time and place such as today, here, next week and ago into reported forms',
        'Select the correct reporting verb pattern for statements, questions, commands, requests and exclamations'
      ],
      sections: [
        {
          title: 'The Backshift Engine: Which Tenses Move and How Far',
          content: 'When the reporting verb is in the past, the verb inside the reported clause normally moves one stage further into the past. Simple present becomes simple past, so "I work at Ho" becomes "he said that he worked at Ho". Present continuous becomes past continuous, and present perfect becomes past perfect. Simple past becomes past perfect, which is why "we arrived on Sunday" becomes "they said they had arrived on Sunday". There is no further step for a verb already in the past perfect, so "I had finished" stays "he said that he had finished". Two conditions allow the present to survive: the reporting verb may itself be in the present, as in "he says that he is ill", and the reported matter may be a permanent truth or a still-true habit. Examiners expect the full backshift in ordinary sentences and reward the present-tense retention only where the fact is genuinely permanent.',
          bulletPoints: [
            'Simple present to simple past: "I like fish" becomes "she said she liked fish".',
            'Present continuous to past continuous: "we are eating" becomes "she said they were eating".',
            'Present perfect to past perfect: "I have read it" becomes "he said he had read it".',
            'Simple past to past perfect: "she sold the cocoa" becomes "he said she had sold the cocoa".',
            'Past perfect and would-could-should-might clauses do not shift a second time.'
          ],
          keyTakeaway: 'A past reporting verb pulls the reported verb one stage back, and nothing pulls a past perfect further back.',
          realWorldExample: 'A cocoa buyer at a depot near Sunyani told a reporter, "I paid the farmers last month." The newspaper line read: the buyer stated that he had paid the farmers the previous month, which shows the past simple moving to the past perfect and the time phrase moving with it.'
        },
        {
          title: 'Modals, Pronouns and Possessives in the Reporting Shift',
          content: 'Modals behave in three groups. The first group has a past form and takes it: will becomes would, can becomes could, shall becomes should in traditional reporting, and may becomes might. The second group is already past in shape and therefore stops: could, would, should, might and ought to are written again unchanged. The third group is special. Must becomes had to when it expresses obligation or necessity, because "had to" is the past of that idea, but must is normally kept when the speaker is drawing a conclusion rather than giving an order. Pronouns and possessives must be re-aimed at the reporter, and this is where most marks are lost in Scripts: "my sister" becomes "his sister" or "her sister" according to the sex of the original speaker, "we" becomes "they", and "your own room" becomes "my own room" when the person addressed reports the words. Nothing is mechanical here; each change depends on who said the words and to whom.',
          bulletPoints: [
            'Obligation must becomes had to: "You must go" becomes "he told me that I had to go".',
            'Prohibition and deduction may keep must: "You must not touch the specimens" reports cleanly as must not.',
            'There is no past form of could, would, should, might or ought to, so those modals are repeated as they stand.',
            'Decide the sex and number of every participant before changing he, she, they, his, her and their.',
            'Reflexive and possessive pronouns shift with the person: "I blamed myself" becomes "she said she had blamed herself".'
          ],
          keyTakeaway: 'Shift the modal only where a past form exists, and re-aim every pronoun at the person doing the reporting.',
          realWorldExample: 'A school prefect at Achimota said, "We cannot postpone our own project." On report day the headmaster wrote that the prefect had said they could not postpone their own project, changing three person markers and one modal in a single sentence.'
        },
        {
          title: 'Time and Place Words: The Transformation Table',
          content: 'Words such as now, today, tomorrow, here, this and come point at the moment and place of the original speaker. When you report those words later or elsewhere, the pointing must be re-aimed, and this is the shift candidates forget most often. The table is short: now becomes then; today becomes that day; tonight becomes that night; yesterday becomes the day before or the previous day; tomorrow becomes the next day or the following day; last week becomes the week before or the previous week; next month becomes the following month; three days ago becomes three days before; here becomes there; this and these become that and those; come becomes go. A date or a stated time that remains true needs no change, so "the examination begins on the fourth of June" may keep its date when it is reported before that day. Where the reporting happens on the same day and in the same place, some of these shifts are optional, but the safe examination habit is to shift everything the table covers.',
          bulletPoints: [
            'ago becomes before: "two years ago" becomes "two years before".',
            'next and last both move to following and previous: next term becomes the following term.',
            'this, these, here and now become that, those, there and then.',
            'come becomes go when the report is made away from the place spoken of.',
            'Clock times and still-unreached dates may stay as they are because they remain true.'
          ],
          keyTakeaway: 'Change the verb and change the pointing words with it: a backshift without a time shift leaves a half-correct answer.',
          realWorldExample: 'A district assembly notice at Cape Coast quoted a speaker: "We will open the gate here tomorrow." A reporter filing from Takoradi wrote that the speaker had promised to open the gate there the following day, moving the verb, the place and the time in one line.'
        },
        {
          title: 'Reporting Verbs, Questions, Commands and Exclamations',
          content: 'The verb you choose fixes the grammar of the whole sentence. Say introduces a clause and never takes a person object directly, so "he said me" is wrong; tell requires the person, as in "he told me". Ask takes a person and then either a clause or an infinitive. Enquire, inquire, wonder and want to know introduce a question with whether, if or a wh-word and cannot be followed by a person plus that. Order, command, instruct, advise, warn, remind and urge all take a person plus the to-infinitive, which is how commands and requests are reported. Questions lose the question mark and the inverted order: a wh-question keeps its wh-word in statement order, and a yes or no question is introduced by if or whether. Exclamations are reported by naming the feeling: exclaimed with joy, lamented, exclaimed with surprise, cried out, and the exclamation itself becomes an ordinary that-clause. Admonish carries a stern warning and is reported as admonished someone to do something or for doing something.',
          bulletPoints: [
            'say plus clause, tell plus person plus clause: she said that she came, she told me that she came.',
            'A reported wh-question uses statement order: he asked what my name was, never what was my name.',
            'A reported yes or no question uses if or whether: she asked whether I had eaten.',
            'Commands and warnings take a person plus the infinitive, and a negative command puts not before it: ordered us to move back, told the boys not to make noise.',
            'suggest takes a that-clause or a gerund, never a person plus the infinitive.'
          ],
          keyTakeaway: 'Choose the reporting verb first, because its pattern decides whether what follows is a clause, a person plus infinitive, or an if-clause.',
          realWorldExample: 'A police inspector at a road check near Kpeve said, "Why did you cross this line? Show me your licence." The report read: the inspector asked the driver why he had crossed that line and ordered him to show his licence.'
        }
      ],
      commonMistakes: [
        'Backshifting the verb and leaving the time word alone, so "he said that he was coming tomorrow" is written instead of the following day.',
        'Writing "he said me" or "she told that", confusing the pattern of say with the pattern of tell.',
        'Keeping question order inside a reported question, adding that after a wh-word, or placing if where a wh-word already stands: "She asked where did I study" must be "she asked where I studied".',
        'Reporting "You must see a doctor" with must unchanged; the obligation becomes had to in reported speech.',
        'Carrying the first person of the original speaker into the report, so the sentence reads "Kofi said that I was tired".'
      ],
      wassceExamTips: [
        'On Paper 1 the objective items on reported speech test one shift at a time; decide which part is being tested, then check that the other three parts have not been spoiled by the correct option.',
        'Where a Paper 1 item offers both a backshifted and an unshifted verb, choose the backshift unless the sentence states a universal truth or the reporting verb is in the present tense.',
        'For the directed-writing and composition tasks on Paper 2, reported speech earns credit when it is used to carry on the story, so practise reporting a conversation in your own narrative rather than in isolated drills.',
        'In the oral paper, a reported passage read aloud must keep the falling tone on the reporting clause; do not raise the pitch as though a question were still direct.',
        'Aim for method marks in a conversion question by working in the fixed order of tense, modal, person, time and place; examiners see that a candidate who leaves one column out of the table loses that mark and no other.'
      ],
      summaryChecklist: [
        'Can I complete a backshift table for all six past-related tense forms without hesitation?',
        'Can I state which modals change in reported speech and which stay as they are?',
        'Can I convert every adverb of time and place into its reported form?',
        'Can I choose the correct pattern for say, tell, ask, enquire, order and advise?',
        'Can I report a question, a command and an exclamation in the same passage?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-rs-1',
        title: 'Converting a Four-Sentence Statement with a Universal Truth',
        problem: 'Report the following: The district director said, "I am opening the new block here tomorrow, and the pupils must use it every day. Science proves that a body at rest stays at rest, so our laboratory will be useful."',
        stepByStepSolution: [
          'Step 1 (M1): Fix the reporting frame: the reporting verb "said" is past, so every verb inside the quotation must be pulled one stage back and the quotation marks and colon are removed.',
          'Step 2 (M1): Work the columns in order. Tense: "am opening" becomes "was opening"; "must use" becomes "had to use". Person: "I" becomes "he"; "our" becomes "their". Time and place: "here" becomes "there"; "tomorrow" becomes "the following day".',
          'Step 3 (M1): Test the middle sentence for a universal truth. "A body at rest stays at rest" is a permanent scientific law, so both verbs stay in the simple present and no backshift is applied.',
          'Step 4 (M1): Rebuild the connectives: keep "and", keep "so", and place "that" after the reporting verb for clarity.',
          'Step 5 (M1): Read the answer back to check that no direct-speech trace remains: no quotation marks, no first person, no tomorrow, no here.',
          'Step 6 (A1): Full answer: The district director said that he was opening the new block there the following day and that the pupils had to use it every day. He added that science proves that a body at rest stays at rest, so their laboratory would be useful.'
        ],
        keyTakeaway: 'Run the four columns of the table in a fixed order, then stop only for permanent truths.'
      },
      {
        id: 'ex-shs2-eng-rs-2',
        title: 'Correcting a Failed Reported Passage',
        problem: 'A candidate reported: "Ama told me that she had seen the accident last Monday and asked me where did I come from. She said that she will take me to the clinic tomorrow. The nurse ordered us to not stand there and said me that Ama must rest."',
        stepByStepSolution: [
          'Step 1 (M1): Locate the time-word error: "last Monday" and "tomorrow" were never shifted; they become "the previous Monday" and "the following day".',
          'Step 2 (M1): Locate the word-order error: "asked me where did I come from" keeps question order and auxiliary did, so it must be "asked me where I had come from".',
          'Step 3 (M1): Locate the modal error: "she will take" was not backshifted after a past reporting verb, so it becomes "she would take".',
          'Step 4 (M1): Locate the verb-pattern errors: "said me" is impossible because say takes no person object, so it becomes "told me"; "ordered us to not stand" places not before the infinitive, giving "ordered us not to stand".',
          'Step 5 (M1): Decide the treatment of "Ama must rest": it is an obligation reported by the nurse, so it becomes "had to rest".',
          'Step 6 (A1): Full answer: Ama told me that she had seen the accident the previous Monday and asked me where I had come from. She said that she would take me to the clinic the following day. The nurse ordered us not to stand there and told me that Ama had to rest.'
        ],
        keyTakeaway: 'Error-correction on reported speech is a counting exercise: five columns, and one error usually sits in each.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t3-reported-speech',
      topicId: 'shs2-eng-t3-reported-speech-advanced',
      title: 'Reported Speech Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-rs-1',
          quizId: 'quiz-shs2-eng-t3-reported-speech',
          questionText: 'Fill in the gap with the correct option: "The headmaster said that he ___ the visitors to the new block that morning."',
          optionA: 'takes',
          optionB: 'is taking',
          optionC: 'had taken',
          optionD: 'will take',
          correctOption: 'C',
          subConcept: 'Tense Backshift',
          explanation: 'The original words were "I took the visitors to the new block today", so the simple past moves one stage back to the past perfect and the time phrase shifts to that morning. A present or future form cannot stand after a past reporting verb, which rules out options A, B and D.',
          remediationTip: 'Whenever you see the previous day or the week before in a reported sentence, expect a perfect tense inside the clause.'
        },
        {
          id: 'q-shs2-rs-2',
          quizId: 'quiz-shs2-eng-t3-reported-speech',
          questionText: 'Choose the correct reported form of: The teacher said, "Water boils at one hundred degrees Celsius."',
          optionA: 'The teacher said that water boiled at one hundred degrees Celsius.',
          optionB: 'The teacher said that water had boiled at one hundred degrees Celsius.',
          optionC: 'The teacher said that water boils at one hundred degrees Celsius.',
          optionD: 'The teacher said that water would boil at one hundred degrees Celsius.',
          correctOption: 'C',
          subConcept: 'Universal Truth Rule',
          explanation: 'A permanent scientific truth keeps the simple present in reported speech, so the backshift is suspended. Option C is the only answer that states the law as still true; options A and B push a permanent fact into the past, and option D makes it a future event.',
          remediationTip: 'Ask whether the fact is still true today; if it is a law of nature or a proverb, leave the tense alone.'
        },
        {
          id: 'q-shs2-rs-3',
          quizId: 'quiz-shs2-eng-t3-reported-speech',
          questionText: 'Report this question: The examiner asked me, "Where do you live?" The examiner asked me ___.',
          optionA: 'where did I live',
          optionB: 'where I lived',
          optionC: 'that where I lived',
          optionD: 'where do I live',
          correctOption: 'B',
          subConcept: 'Reported Question Word Order',
          explanation: 'A reported wh-question keeps the wh-word and then uses ordinary statement order with the verb backshifted. Options A and D keep inverted question order, and option C wrongly adds that after the wh-word.',
          remediationTip: 'Write the reported clause as a statement, not a question: subject before verb, no auxiliary do, no question mark.'
        },
        {
          id: 'q-shs2-rs-4',
          quizId: 'quiz-shs2-eng-t3-reported-speech',
          questionText: 'Choose the correct option: "The midwife ___ me that I had to take the mixture twice a day."',
          optionA: 'said',
          optionB: 'told',
          optionC: 'spoken',
          optionD: 'talked',
          correctOption: 'B',
          subConcept: 'Say versus Tell',
          explanation: 'Tell takes a person object directly, so told me is the right pattern. Say cannot be followed by a person object without to, which makes said me impossible, and spoken and talked both need a preposition before the person.',
          remediationTip: 'Test the verb with a person after it: if the person must follow at once, use tell, not say.'
        },
        {
          id: 'q-shs2-rs-5',
          quizId: 'quiz-shs2-eng-t3-reported-speech',
          questionText: 'Which sentence contains a correctly reported command?',
          optionA: 'The sergeant ordered the recruits for standing at attention.',
          optionB: 'The sergeant ordered the recruits that they stand at attention.',
          optionC: 'The sergeant ordered the recruits to stand at attention.',
          optionD: 'The sergeant ordered to the recruits to stand at attention.',
          correctOption: 'C',
          subConcept: 'Command Reporting Pattern',
          explanation: 'Order takes a person object plus the to-infinitive, which gives ordered the recruits to stand. Option A puts a gerund after for, option B uses a that-clause where the infinitive is required, and option D wrongly places to before the person object.',
          remediationTip: 'Learn the pattern list, not the meaning: verb plus person plus to-infinitive covers order, tell, ask, advise, warn and remind.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t3-argumentative-essay',
    subjectId: 'english',
    level: 'SHS 2',
    term: 3,
    orderIndex: 14,
    title: 'Argumentative and Expository Writing: Thesis, Support, Rebuttal',
    description: 'The point-proof-explanation-link paragraph, counter-argument and rebuttal, hedging instead of absolute claims, a five-minute plan, and the marking categories an examiner applies to a Paper 2 essay.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=pfn5W4R_3Bo',
    youtubeId: 'pfn5W4R_3Bo',
    keyNotes: `• A thesis is one sentence that states the position you will defend, and it must be arguable rather than a fact.
  - "Day schools build better family discipline" can be argued; "Schools in Ghana run on a term system" cannot.
• Every body paragraph runs four moves: POINT, PROOF, EXPLANATION, LINK back to the thesis.
• Proof may be an observation from your environment, a reported finding, a historical fact or a stated authority, but never an invented figure.
• Explanation is the move most candidates skip: state how the proof supports the point and why that point matters for the thesis.
• A counter-argument names the strongest objection to your position; a rebuttal answers it and shows that the thesis still stands.
• Rebuttal pattern: Admittedly + the opposing point, yet + your reply, therefore + return to the thesis.
• Hedge what you cannot prove absolutely with tends to, in most cases, many, often and appears to; a hedged claim is harder to defeat than an absolute one.
• An absolute claim collapses under a single counter-example, so "Boys are lazy" is weaker argument than "Some boys lose interest when lessons begin too early".
• Plan for five minutes before writing: thesis, three points in the order you will argue them, one objection with its reply, and the closing line.
• One paragraph per point; a paragraph of one sentence reads as an undeveloped idea and costs the structure mark.
• Cohesion devices signal your moves: firstly, in addition, moreover, however, on the contrary, as a result, consequently, admittedly, in conclusion.
• A conclusion restates the position in fresh words and adds a recommendation or a prediction; it never carries a new argument.
• Expository writing shares the paragraph shape but drops the rebuttal, because its task is to explain a subject rather than to win a dispute.
• Cut slang, text abbreviations and informal contractions from the script; a formal essay has no place for words such as chale, gonna, cos and wanna.
• Typical WASSCE awards for an essay fall under content, structure, expression and mechanical accuracy, with content usually carrying the largest share, so check the allocation printed on your paper.`,
    detailedNotes: {
      overview: 'An argument is not a loud opinion; it is a structure. The examiner reads for four things: whether you have a position that can be defended, whether each paragraph proves that position, whether you anticipated the person who disagrees with you, and whether your sentences hold together. This topic builds the paragraph machinery, then the rebuttal move that lifts a script into the higher award band, and finally the five-minute plan that keeps a two-hour paper from collapsing into an uncontrolled essay.',
      introduction: 'Picture a debate at a students affairs bureau in Cape Coast. The speaker who wins is not the loudest but the one who states a clear motion, gives evidence, explains why the evidence supports the motion, and answers the objections before the other side raises them. That is an argumentative essay in ordinary life, and the same four moves are what a marker is looking for on Paper 2.',
      realWorldContext: 'When a regional radio programme asked whether SHS pupils should return to full boarding, the two best contributions came from students who used the same method. A listener from Kumasi said that full boarding removed the long walk to class, that late-night study became possible, and that although feeding costs were real, a day pupil spent more on transport and snacks than a boarder cost the state. A teacher from Cape Coast who merely repeated that boarding was old-fashioned lost the exchange, and the difference between them was structure, not feeling.',
      objectives: [
        'State a defensible thesis that takes a position on the essay title',
        'Build body paragraphs that move through point, proof, explanation and link',
        'Present a counter-argument and answer it with a clear rebuttal',
        'Replace absolute claims with measured language where the evidence is limited',
        'Plan and draft a timed essay using cohesive devices and formal diction'
      ],
      sections: [
        {
          title: 'Thesis First: Staking a Position that Can Be Defended',
          content: 'A thesis is a claim someone could reasonably dispute. Titles that begin "Give your views on", "To what extent do you agree" and "Write an essay to persuade" all demand a position, and the position must appear as a statement, not as a promise to discuss. "This essay will look at both sides" announces intention and argues nothing, so it earns no content mark. The strongest thesis names the issue, takes a side, and hints at the reasons in the order they will be argued: "Boarding schools prepare pupils for national service better than day schools do, because they build self-reliance, remove the commute that wastes study time, and place learning under daily supervision." A reader can attack that sentence, which is exactly the sign that it is a thesis. Write it before the introduction is polished, keep it in view at the top of your rough work, and let every paragraph report back to it.',
          bulletPoints: [
            'Convert the title into one declarative sentence that takes a side.',
            'Avoid a thesis that is a fact, a definition or a question.',
            'Number the reasons inside the thesis when the title invites three points.',
            'In an expository essay, the equivalent is a controlling idea that names what will be explained.',
            'Never change your position halfway through the essay unless the title asks for a balanced discussion.'
          ],
          keyTakeaway: 'Write a sentence a reasonable person could argue with, and you have a thesis.',
          realWorldExample: 'A motion at a debate club in Tamale read: "This house would ban mobile phones in classrooms." The opening speaker restated it as a thesis: phones in class steal the fifteen minutes that a teacher needs to correct written work.'
        },
        {
          title: 'The P-E-E-L Paragraph: Point, Proof, Explanation, Link',
          content: 'A body paragraph is a small argument with four labelled parts. The POINT is a topic sentence that states one reason for the thesis. The PROOF supplies something outside the writer, an observation, a documented finding, a fact of public life or an authority. The EXPLANATION is the longest part and the one most often missing; it shows the reader the connection between the proof and the point, and it answers the silent question "so what". The LINK returns explicitly to the thesis, often with a clause that begins "this shows that" or "for this reason". The paragraph should be a solid block of eight to fourteen sentences in an exam essay, never a single line. Where the title asks for three reasons, three fully built paragraphs of this shape will outperform six thin ones, because the marker cannot tick a reason that has no explanation attached to it.',
          bulletPoints: [
            'Put the point in the first sentence so the examiner never hunts for it.',
            'Proof must be verifiable or observable; an invented statistic is a serious weakness in an essay.',
            'Explanation usually needs at least three sentences: how, why and what follows.',
            'A link sentence should use the key words of the thesis without copying the whole sentence.',
            'If a paragraph cannot be labelled in four moves, it is two paragraphs or none.'
          ],
          keyTakeaway: 'Point, then proof, then explain the proof, then link to the thesis; four labelled moves in one block.',
          realWorldExample: 'A member of a parents association in Ho argued: "Pupils who walk long distances arrive tired; on the road from Kpeve many of them cover six kilometres before the first bell; that lost energy is exactly what a morning lesson requires; therefore distance from school affects classroom performance." Point, proof, explanation, link.'
        },
        {
          title: 'Counter-Argument, Rebuttal and Measured Language',
          content: 'The highest band of an argumentative script contains the objection. Concede the strongest point of the other side honestly, then answer it: "Admittedly, full boarding raises feeding costs for the state; yet a day pupil pays daily transport and buys snacks that a boarding canteen serves as part of one meal, so the saving is real for the family even where the cost looks larger on paper." The rebuttal must be a genuine reply, not a dismissal, and it must leave the thesis standing. Measured language supports this move. Claims loaded with all, every, never and certainly are defeated by one counter-example, whereas claims hedged with tends to, in most cases, often and many survivors of contradiction read as judgement rather than weakness. Precision is strength in argument: "in several schools in the Ashanti Region" is far more convincing than "everywhere in Ghana".',
          bulletPoints: [
            'Name the strongest objection, not the silliest one, and answer it fully.',
            'Use the frame: admittedly, yet, nevertheless, even so, in reply to this argument.',
            'Reserve a whole paragraph for the counter-argument in a longer essay; in a short one, place it before the conclusion.',
            'Hedge with degree words: many, most, several, tends to, appears to, in many cases.',
            'Never hedge a claim that is actually a proven fact; vague language where precision is due loses expression marks.'
          ],
          keyTakeaway: 'Concede honestly, reply decisively, and keep every claim only as wide as the evidence.',
          realWorldExample: 'A candidate writing on school fees argued: "Admittedly, free senior high school has not removed every cost, since parents still buy uniforms and exercise books; nevertheless, the removal of tuition has kept thousands of pupils in class who would otherwise have returned to the market."'
        },
        {
          title: 'The Five-Minute Plan and the Marks Examiners Award',
          content: 'Examiners typically assess an essay under a small number of headings: content or relevance, structure or organisation, expression, and mechanical accuracy in spelling, punctuation and neatness; the exact figures vary with the scheme in force, so treat any allocation as typical and read the marks shown on the question paper. Those headings are also a plan. Spend five minutes writing the thesis, three points in order, one objection with its reply, and a closing line; then draft in the same order, checking that each paragraph carries a label. Cohesion devices do the signposting work: firstly and secondly order the argument, moreover and in addition add force, however and on the contrary turn it, as a result and consequently show consequence, and in conclusion closes it. Leave one line between paragraphs, keep the register formal by removing slang, contractions and rhetorical questions, and reserve eight minutes at the end to read the essay as an examiner would, hunting for the paragraph that has no explanation and the sentence that has no subject.',
          bulletPoints: [
            'Write the plan on the question paper; it is not part of the script and costs nothing.',
            'Allocate time by marks, giving the longest block to the paper with the heaviest weight.',
            'Delete every one-sentence paragraph by either building it out or absorbing it into a neighbour.',
            'Replace slang and informal contractions with formal equivalents before the final read.',
            'Neatness is a marking category: a legible hand, clean paragraphs and rubbings-out that leave no doubt earn their share.'
          ],
          keyTakeaway: 'Plan the argument before you write it, because content, structure, expression and mechanical accuracy are awarded separately and only a plan secures all four.',
          realWorldExample: 'A prefect preparing the speech for Speech and Prize Day at a school in Kumasi wrote five lines of plan on the programme: thanks, one problem, two proofs, one objection answered, one promise. The speech ran four minutes and needed no notes afterwards.'
        }
      ],
      commonMistakes: [
        'Writing "In this essay I will discuss" instead of stating a position, which leaves the script without a thesis and forfeits the content mark.',
        'Giving a point and an example with no explanation and no link back to the thesis, so the essay reads as a list of unsupported opinions.',
        'Making absolute claims such as "All pupils in day schools are undisciplined", which one counter-example destroys.',
        'Using slang, text abbreviations or a rhetorical question to open a formal paragraph, weakening the register.',
        'Introducing a fresh argument in the conclusion, so the essay ends on an undeveloped point.'
      ],
      wassceExamTips: [
        'On Paper 2 the content award goes to relevance: tick each paragraph against the question before you write it, and cut any paragraph that fits the title but not the specific instruction.',
        'Examiners give structure marks for visible organisation, so one line between paragraphs, a clear opening sentence per paragraph and a conclusion of two or three sentences will all be noticed.',
        'A hedge is not a weakness: examiners reward "in many cases" over "always" because the measured claim cannot be contradicted, and it reads as mature expression.',
        'On Paper 1 and Paper 3 the same cohesion logic appears in the objective items on connectors and in the summary task, so practise signalling words in short paragraphs as well as in essays.',
        'Attempt the question you know best and never leave an essay blank on Paper 2, because even a short structured answer collects marks in the lower bands; keep eight minutes to read back, since three well-built paragraphs outscore six half-built ones.'
      ],
      summaryChecklist: [
        'Can I turn any essay title into a single arguable thesis sentence?',
        'Can I build a paragraph with a labelled point, proof, explanation and link?',
        'Can I state a counter-argument and rebut it in one paragraph?',
        'Can I replace absolute claims with measured, hedgeable language?',
        'Can I plan a timed essay in five minutes and finish with eight minutes for revision?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-ar-1',
        title: 'Building One Full P-E-E-L Paragraph',
        problem: 'Thesis: "Senior high schools in Ghana should keep a full boarding programme." List of rough notes: long walk to school, pupils arrive tired, some families worry about feeding costs, study hours in the evening, teachers on the compound. Write one body paragraph of about eight sentences from these notes and label the four moves.',
        stepByStepSolution: [
          'Step 1 (M1): Choose the single reason this paragraph will carry, which is the loss of study time caused by distance, and put it in a topic sentence: "A day pupil loses daily learning time that a boarder keeps."',
          'Step 2 (M1): Supply the proof from the notes and the environment: pupils who walk from settlements several kilometres away reach the classroom already tired, and evening preparation is impossible for a pupil who must fetch water and cook.',
          'Step 3 (M1): Build the explanation in at least three sentences: fatigue reduces attention in the first periods, tired pupils copy rather than think, and a boarding house places the evening hours under supervision where the same hours at home are spent on chores.',
          'Step 4 (M1): Insert the concession and rebuttal that the notes carried, so the paragraph answers the objection before an opponent does: the feeding cost is real, but a boarder saves the daily transport fare and the snack money a day pupil spends.',
          'Step 5 (M1): Link the paragraph to the thesis in its own words, using the key phrase of the thesis so the marker sees the return.',
          'Step 6 (A1): Full answer: "A day pupil loses daily learning time that a boarder keeps. In several schools in the Volta Region, pupils walk several kilometres before the first lesson and arrive already tired, and the same pupil who cooks and fetches water at home has no evening hours left for preparation. Fatigue shortens attention in the early periods, so the tired pupil copies notes without following them, while a boarder studies in a supervised prep room when the day pupil is still on the road. Admittedly, feeding a boarder costs the state, yet the family saves the daily fare and the snack money that a day pupil spends, so the wider cost is smaller than it looks. For these reasons, boarding time is teaching time, and the full boarding programme deserves to be kept."'
        ],
        keyTakeaway: 'One paragraph, one reason, four labelled moves; the concession belongs inside the paragraph that can carry it.'
      },
      {
        id: 'ex-shs2-eng-ar-2',
        title: 'Repairing a Weak Argument and Planning in Five Minutes',
        problem: 'A candidate wrote: "Everyone knows that market women are the backbone of Ghana. All traders are honest and never cheat anybody. Chale, we must support them because they are our mothers. Also, the government should do something." (a) Identify four weaknesses. (b) Rewrite the passage as one defensible paragraph. (c) Show the five-minute plan that would have produced it.',
        stepByStepSolution: [
          'Step 1 (M1): Diagnose the argument: there is no thesis, only a greeting to the reader, so the position of the paragraph cannot be identified.',
          'Step 2 (M1): Diagnose the claims: "All traders are honest and never cheat anybody" is absolute and is defeated by a single counter-example; it must be narrowed and evidenced.',
          'Step 3 (M1): Diagnose the register: "Chale" and "do something" are informal and vague, so the paragraph has neither a formal tone nor a specific recommendation.',
          'Step 4 (M1): Diagnose the structure: no proof, no explanation and no link are present, so nothing supports the claim that traders deserve support.',
          'Step 5 (A1): Rewritten paragraph: "Market traders deserve a steadier trading environment because they move most of the food that reaches our tables. A trader at Kejetia opens before six and handles goods that forty households depend on, yet the stall rent, the transport cost and the irregular water supply all fall on her alone. When a trader loses a week of trade to a flooded stall, the price of tomatoes in the neighbourhood rises within days, which shows how closely household costs follow the conditions of the market. Admittedly, some traders overcharge visitors, but a licensed association with fixed published tolls reduces that abuse far more effectively than an unregulated space. Local government should therefore improve drainage and publish a single toll schedule, because a stable market protects the household budget."',
          'Step 6 (A1): Five-minute plan on the question paper: thesis, traders need a stable environment; point one, traders supply household food; proof, daily routine at Kejetia and the effect of a flooded stall; concession, overcharging exists; rebuttal, published tolls and licensing; recommendation, drainage and one published schedule.'
        ],
        keyTakeaway: 'A plan written in five minutes removes the four faults an examiner strikes out first: no thesis, absolute claims, informal register and no support.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t3-argumentative',
      topicId: 'shs2-eng-t3-argumentative-essay',
      title: 'Argumentative and Expository Writing Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-ar-1',
          quizId: 'quiz-shs2-eng-t3-argumentative',
          questionText: 'Which of the following is the best thesis statement for an argumentative essay?',
          optionA: 'This essay will look at both sides of the question of uniforms.',
          optionB: 'Secondary schools should keep a uniform policy because it reduces rivalry and simplifies discipline.',
          optionC: 'Uniforms are worn in many secondary schools in Ghana.',
          optionD: 'Parents buy uniforms at the beginning of every term.',
          correctOption: 'B',
          subConcept: 'Thesis Statement',
          explanation: 'Option B takes a disputable position and lists the reasons in the order they will be argued. Option A promises discussion without a position, and options C and D state facts that nobody could argue with, so none of them can function as a thesis.',
          remediationTip: 'Test your thesis by asking whether a reasonable person could disagree; if not, it is a fact and not an argument.'
        },
        {
          id: 'q-shs2-ar-2',
          quizId: 'quiz-shs2-eng-t3-argumentative',
          questionText: 'A paragraph states a point and gives an example, but the reader cannot see how the example supports the point. Which move is missing?',
          optionA: 'The proof',
          optionB: 'The counter-argument',
          optionC: 'The explanation',
          optionD: 'The thesis',
          correctOption: 'C',
          subConcept: 'P-E-E-L Moves',
          explanation: 'The example is already the proof, so what is absent is the explanation that connects the proof to the point and shows why it matters. A counter-argument is optional in a paragraph, and the thesis belongs at the start of the essay rather than inside one paragraph.',
          remediationTip: 'After every example, write the sentence that begins "this matters because" and then check that it names your point.'
        },
        {
          id: 'q-shs2-ar-3',
          quizId: 'quiz-shs2-eng-t3-argumentative',
          questionText: 'Which of the following statements needs to be hedged before it can be defended in an essay?',
          optionA: 'Some pupils concentrate better when they eat before school.',
          optionB: 'All teenagers are indifferent to hard work.',
          optionC: 'Discipline tends to improve in well-supervised boarding houses.',
          optionD: 'In several districts, parents prefer day schools for younger pupils.',
          correctOption: 'B',
          subConcept: 'Hedging Claims',
          explanation: 'Option B makes an absolute claim about every teenager, so a single hard-working teenager destroys it; it must be narrowed to many or most. The other three are already limited by some, tends to and several, which makes them arguable.',
          remediationTip: 'Circle the words all, every, never and always in your draft and replace each one with a measured quantifier.'
        },
        {
          id: 'q-shs2-ar-4',
          quizId: 'quiz-shs2-eng-t3-argumentative',
          questionText: 'Choose the option that best completes the rebuttal: "___ that market tolls have risen, the traders in the district still earn enough to keep their stalls open."',
          optionA: 'Although',
          optionB: 'In spite of',
          optionC: 'Granted',
          optionD: 'Therefore',
          correctOption: 'C',
          subConcept: 'Concession Connector',
          explanation: 'Granted that introduces a concession and leaves the main clause to answer it, which is the shape of a rebuttal. Although cannot be followed by that, in spite of requires a noun or a gerund rather than a full clause, and therefore shows result instead of concession.',
          remediationTip: 'Keep a concession list in your notebook: admittedly, it is true that, granted that, while it may be said that.'
        },
        {
          id: 'q-shs2-ar-5',
          quizId: 'quiz-shs2-eng-t3-argumentative',
          questionText: 'Which of the following should NEVER appear in the conclusion of an argumentative essay?',
          optionA: 'A restatement of the position in fresh words',
          optionB: 'A recommendation arising from the argument',
          optionC: 'A prediction about the outcome of the policy',
          optionD: 'A new argument that was not developed in the body',
          correctOption: 'D',
          subConcept: 'Conclusion Discipline',
          explanation: 'A conclusion closes what has already been argued, so a fresh point there is undeveloped and weakens the script. Restatement, recommendation and prediction are all legitimate closing moves.',
          remediationTip: 'Read your conclusion and ask whether every idea in it already appeared in a body paragraph; if not, move it out.'
        }
      ]
    }
  },
  {
    id: 'shs2-eng-t3-cloze-objective-technique',
    subjectId: 'english',
    level: 'SHS 2',
    term: 3,
    orderIndex: 15,
    title: 'Cloze Tests and Objective Strategy: Lexis and Structure Under Time Pressure',
    description: 'Open and word-list cloze, grammar and collocation cues on either side of the gap, tense consistency across a passage, distractor elimination, transfer and error-correction items, and timing discipline on the objective paper.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=h0rF8sO7bJE',
    youtubeId: 'h0rF8sO7bJE',
    keyNotes: `• An open cloze offers no options; the gaps are almost always function words, so expect a preposition, article, auxiliary, pronoun, conjunction or comparative form.
  - "Ama is good ___ drawing" takes "at" and no other word.
• A word-list cloze supplies a box of options, sometimes with more words than gaps, and each option is normally used once only.
• Read the whole passage before writing anything: the opening sentence is never a gap, and it fixes the topic and the tense.
• Grammar cue from the left: after an auxiliary use the base form, after a preposition use a noun or an -ing form, before a singular countable noun you need a determiner.
• Collocation cue: many gaps test partnerships rather than rules, such as make a decision, pay attention to, depend on, accused of, in charge of and as a result of.
• Dependency rule: the answer is decided by the words on either side of the gap, so read one word to the left and one word to the right before choosing.
• Keep the tense of the passage: a narrative told in the past stays in the past unless a time marker moves it forward.
• In a multiple-choice gap, eliminate first the options that cannot stand in that grammar at all, then decide between the survivors on meaning.
• Near-synonyms are the strongest distractors; the wording of the passage, not the dictionary, decides which of them fits.
• A transfer item asks you to begin a sentence in a different way while keeping the meaning, so the fact and the tense must survive the rewrite.
• Error-correction items test concord most often, then the tense sequence, the preposition after a verb and the pronoun for a plural noun; where no part contains a fault, choose the no-error option.
• Timing for roughly forty objective items in about forty-five minutes to one hour means under ninety seconds per item; check the time printed on your paper.
• Two-pass method: answer everything you know in the first pass, note the numbers left, then return with the passage read in full.
• Never leave a blank, because a wrong objective choice costs nothing extra while a blank cannot earn anything.
• Transfer to the answer sheet in blocks of ten, checking each question number as you copy; a single misread line at the end can spoil a whole column.`,
    detailedNotes: {
      overview: 'The objective paper is won by technique as much as by knowledge. A cloze gap is not a puzzle with no clue; it is a slot whose shape is fixed by the words around it, and a candidate who reads those words can rule out two options before considering meaning. This topic covers the two cloze formats, the grammar and collocation cues that decide a gap, the tense and cohesion habits that run through a whole passage, and the answer-sheet and timing discipline that protects the marks you have already earned.',
      introduction: 'Approach an objective section the way a market cashier approaches a stack of receipts: one at a time, in order, with nothing skipped and nothing copied twice. Your first job on any passage is to read through it and let the story settle; your second job is to look at each gap and ask what kind of word the sentence demands before you look at the options at all.',
      realWorldContext: 'A district exams officer in the Volta Region circulated a memo to senior high schools after a mock examination, warning candidates that a whole block of answers had been lost because one pupil copied from item eleven to item twelve without checking the number, and every answer after that landed on the wrong line. The same memo reminded teachers that most of the losses on the lexis and structure paper came from two habits: choosing an option by sound rather than by grammar, and leaving gaps blank because a candidate was afraid of being wrong.',
      objectives: [
        'Distinguish an open cloze from a word-list cloze and predict the word class each gap demands',
        'Use the grammar of the words on either side of a gap to eliminate impossible options',
        'Apply collocation knowledge to gaps that test partnerships rather than rules',
        'Maintain tense consistency and cohesion across a whole cloze passage',
        'Manage distractors, timing and answer-sheet transfer on an objective paper'
      ],
      sections: [
        {
          title: 'Two Cloze Formats: Open Gap and Word-List Gap',
          content: 'In an open cloze the passage carries numbered gaps and no list of words; the candidate supplies each one. Because content words could be almost anything, examiners design these gaps for function words: a preposition, an article, an auxiliary, a conjunction, a relative pronoun, a comparative or a possessive. The number of words that can fit is usually one or two, which is why an open cloze is the most reliable place to score. A word-list cloze reverses the burden: a box of options is given, sometimes with two or three extra words, and each option may normally be used once. Here the traps are meaning pairs, a word of the same class that fits the grammar but not the sense, and a word that belongs to a different gap. The disciplined order of work is the same for both formats: read the whole passage first, predict the class of the missing word from the sentence around the gap, and only then look at what to write or which option to choose.',
          bulletPoints: [
            'Open cloze gaps ask for small words, so revise prepositions, articles, auxiliaries and conjunctions first.',
            'A given first sentence tells you the tense and the subject; never treat it as decoration.',
            'In a word-list cloze, cross out each option as you use it so the leftovers are visible.',
            'Where two extra words are supplied, expect one pair of near-synonyms to be the trap.',
            'One word per gap: writing two words into an open gap usually scores nothing even if both are correct.'
          ],
          keyTakeaway: 'Identify the format, predict the word class from the sentence, and only then look at the options.',
          realWorldExample: 'A passage in a mock paper at a school in Ho began "When the rainy season ends, the farmers in the valley begin ___ new planting." The word before the gap is a verb of beginning and the word after it is a noun, so the gap needs either a determiner or an adjective, and no adverb can stand there.'
        },
        {
          title: 'Grammar Cues and Collocation Cues on Either Side of the Gap',
          content: 'A gap is surrounded by information, and the two words nearest to it usually decide the answer. Read left: an auxiliary before the gap demands a base form or a participle, a preposition demands a noun or a gerund, and a possessive demands a noun. Read right: a singular countable noun with no article demands that the gap supply the article or a determiner, a that-clause after the gap points to a conjunction, and a comparative structure signals than. Grammar alone is not sufficient, because English partnerships are arbitrary: a candidate makes a decision rather than does a decision, pays attention to a remark, is accused of an offence, is in charge of a department, depends on a neighbour, and suffers from an illness. These collocations are learned as whole phrases, and the fastest way to build the bank is to copy phrases rather than single words from the passages you read in comprehension.',
          bulletPoints: [
            'Left of the gap: auxiliary, preposition, article, possessive and noun each force a different class into the slot.',
            'Right of the gap: a bare singular countable noun is a loud signal that a determiner is missing.',
            'Verb plus preposition pairs tested often: depend on, listen to, complain about, accuse of, agree with, refer to.',
            'Noun and adjective partnerships: reason for, solution to, difference between, need for; good at, afraid of, different from, grateful to, responsible for.',
            'Do not choose a word because it sounds pleasant; choose it because the sentence permits that class.'
          ],
          keyTakeaway: 'Read one word left and one word right of the gap; the neighbours tell you the class and the partnership.',
          realWorldExample: 'On a Radio Gold phone-in, a listener said he was "angry for the assembly member". The presenter corrected him to angry with the assembly member, which is exactly the adjective plus preposition partnership a cloze gap would test.'
        },
        {
          title: 'Tense, Sequence and Cohesion Across a Passage',
          content: 'A cloze passage is a running text, so one gap can be answered from a sentence three lines earlier. Narratives are usually told in the simple past, and a gap inside that narrative will take a past form unless a time marker moves it. Where the passage refers to an event earlier than its main past time, the past perfect is required, and markers such as already, before, by the time and after point to it. Direct speech inside a passage keeps its own tense, so do not drag a present-tense quotation into the narrative past. Cohesion words also occupy gaps: however and nevertheless turn the argument, therefore and consequently show result, moreover and in addition add, and finally and at last close. A candidate who reads for the logical relationship between two sentences can often answer a connector gap without looking at the options, and that reading also protects the pronoun gaps, because a pronoun must agree with the noun it actually replaces in the passage.',
          bulletPoints: [
            'Establish the base tense of the passage in the first reading and hold to it.',
            'By the time, already, before and after are signals of the past perfect inside a past narrative.',
            'A quotation inside a passage keeps the tense spoken by the speaker.',
            'Connector gaps test the logical relationship, not the meaning of a single word.',
            'Reference gaps demand that the pronoun match the number and gender of its noun in the previous lines.'
          ],
          keyTakeaway: 'Answer a gap from the passage, not from the sentence: tense, logic and reference all come from the surrounding lines.',
          realWorldExample: 'A mock passage at a school in Cape Coast read: "By the time the bus arrived at the lorry station, the traders ___ their goods under the shed." The base narrative is past and the arrival is later, so the earlier action needs the past perfect had placed or had stored.'
        },
        {
          title: 'Distractors, Timing and the Answer Sheet',
          content: 'Every objective option set contains one correct answer and three distractors built to catch a specific error. A distractor may be grammatically impossible, in which case it should be removed at once; it may be a near-synonym that fits the grammar but not the sense; or it may repeat a word heard elsewhere in the passage, which is the loudest and least reliable clue a candidate can follow. Work in two passes. On the first pass answer everything you know at once and write the number of anything uncertain in the margin; ninety seconds is the ceiling for a single item on a paper of roughly forty items in an hour. On the second pass return with the passage read in full and decide the leftovers. Then transfer in blocks of ten, reading the question number as you copy each block, and finish with two minutes to check that no item is double-marked and that the last answer on the sheet matches the last answer in the booklet. A blank scores nothing while a reasoned guess scores occasionally, so no gap should remain empty.',
          bulletPoints: [
            'Strike out the grammatically impossible options before weighing meaning.',
            'Be suspicious of an option that is simply a word copied from elsewhere in the passage.',
            'Carry a mental clock: under ninety seconds per item, with uncertain items flagged for the second pass.',
            'Transfer in blocks of ten and check the numbering at every block; never attempt one blind transfer of sixty answers.',
            'Mark one oval only and rub out completely; a double-marked item or an unfinished smudge is read as no answer at all.'
          ],
          keyTakeaway: 'Eliminate, decide, transfer in blocks and check the numbers: technique protects the marks that knowledge earns.',
          realWorldExample: 'An invigilator in a Kumasi examination hall reported after the mock that a block of objective answers had to be voided, because one candidate began copying at item thirty-four and carried every later answer one row down the sheet.'
        }
      ],
      commonMistakes: [
        'Reading only the sentence with the gap and ignoring the passage tense, so a present form is chosen inside a past narrative.',
        'Choosing a word because it sounds right rather than because the grammar of the slot allows that word class, and then crowding two words into a gap that admits only one.',
        'Selecting a near-synonym that fits the grammar but reverses the sense, such as "affect" where "effect" is required.',
        'Leaving blanks on the objective paper out of fear of being wrong, when a reasoned guess costs nothing.',
        'Transferring all answers in one block at the end of the paper and losing a whole column to a single misread number.'
      ],
      wassceExamTips: [
        'On Paper 1 the lexis and structure section carries the most marks per minute, and an objective item awards the answer with no method credit, so finish that paper on the answer sheet before turning to the longer tasks and spend your effort on elimination, which turns a guess into a fifty-fifty choice.',
        'For a transfer item, check that the rewritten sentence keeps the tense and the fact of the original; a change of meaning, not a change of wording, is what makes an option wrong.',
        'In an error-correction item, test concord first, then the tense sequence, then the preposition after the verb; those three causes account for most of the faults set each year.',
        'Read the whole cloze passage twice; chief examiners report that most wrong answers in a passage come from candidates who answered gap by gap without ever seeing the story.',
        'Leave two minutes at the end of the objective paper to confirm that the number of answers on the sheet equals the number of items in the booklet and that no item carries two marks.'
      ],
      summaryChecklist: [
        'Can I tell an open cloze from a word-list cloze and predict the word class each gap needs?',
        'Can I use the words on either side of a gap to eliminate impossible options?',
        'Can I keep the tense of a cloze passage consistent from the first sentence to the last?',
        'Can I choose between near-synonym distractors on the sense of the passage?',
        'Can I complete a forty-item objective section in time and transfer my answers safely in blocks?'
      ]
    },
    examples: [
      {
        id: 'ex-shs2-eng-cl-1',
        title: 'Solving a Six-Gap Open Cloze',
        problem: 'Fill each gap with ONE suitable word: "Last Tuesday the pupils of Ahiafoe SHS set out (1) ___ the market at Kpeve. Their teacher had warned them (2) ___ stay in groups, and every pupil was responsible (3) ___ his own notebook. (4) ___ the rain began early, the pupils completed their interviews before noon. Ama, (5) ___ notebook was the neatest, later read her report to the class. The trip was the most useful lesson the form had received (6) ___ a long time."',
        stepByStepSolution: [
          'Step 1 (M1): Establish the base tense in the first reading: the passage is a past narrative, so every verb form must fit that frame, and gap six is governed by a perfect construction inside it.',
          'Step 2 (M1): Gap one sits after a verb of movement and before a place, so it needs a preposition of direction: "for".',
          'Step 3 (M1): Gap two follows warned them and precedes the base verb stay, which fixes the pattern warn plus a person plus to-infinitive, giving "to".',
          'Step 4 (M1): Gap three depends on the adjective responsible, whose partner preposition for a thing is "for".',
          'Step 5 (M1): Gap four opens a clause that contrasts with the result in the main clause, so a concessive conjunction is required: "Although" or "Though".',
          'Step 6 (A1): Gap five stands before a noun belonging to Ama, so the possessive relative pronoun "whose" is needed, and gap six follows a past perfect idea of duration, which takes "for". Full answer: (1) for, (2) to, (3) for, (4) Although, (5) whose, (6) for. Re-read the passage with the words inserted; every sentence stays inside the past narrative and no gap carries two words.'
        ],
        keyTakeaway: 'Each open-cloze gap has a grammatical address: name the class the neighbours demand, then supply the one small word that fits.'
      },
      {
        id: 'ex-shs2-eng-cl-2',
        title: 'Eliminating Distractors and Transferring Safely',
        problem: 'Objective items from a mock Paper 1. (a) "The headmaster asked the boys ___ noise in the corridor." A not to make B to not make C not making D did not make. (b) Choose the option nearest in meaning to "The trader refused to reduce the price." A The trader agreed to lower the price. B The trader would not lower the price. C The trader reduced the price twice. D The trader price was refused by buyers. (c) A candidate reaches item twenty-two with ninety seconds used on it and still undecided. What should be done?',
        stepByStepSolution: [
          'Step 1 (M1): For item (a), remove the impossible structures first: not making cannot follow asked the boys, and did not make introduces a finite clause with no conjunction, so C and D are gone.',
          'Step 2 (M1): Apply the negative infinitive rule: not is placed before to, which eliminates B and leaves A.',
          'Step 3 (M1): For item (b), read the sense of refused, which is a refusal to act, and match it against each option rather than against isolated words; option B carries the same refusal, while A reverses it, C reverses the outcome and D changes who acts on whom.',
          'Step 4 (M1): Note the distractor design: D repeats the words price and refused from the stem, which is the loudest clue and the least reliable one.',
          'Step 5 (M1): For item (c), apply the timing rule: mark the best choice at once, note the number in the margin, continue the first pass, and return after the passage has been read in full; a blank is the only answer that cannot score.',
          'Step 6 (A1): Full answer: (a) A, not to make; (b) B, the trader would not lower the price; (c) choose the best available option, flag it and move on, then transfer in blocks of ten and check that item twenty-two appears once on the sheet and nowhere twice.'
        ],
        keyTakeaway: 'Kill the grammatically impossible options first, judge the survivors on sense, and never leave a gap empty or double-marked.'
      }
    ],
    quiz: {
      id: 'quiz-shs2-eng-t3-cloze',
      topicId: 'shs2-eng-t3-cloze-objective-technique',
      title: 'Cloze Tests and Objective Strategy Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs2-cl-1',
          quizId: 'quiz-shs2-eng-t3-cloze',
          questionText: 'Fill in the gap with the correct word: "Yaw is very good ___ drawing, and his teacher depends on ___ for the class posters."',
          optionA: 'at; him',
          optionB: 'in; he',
          optionC: 'on; his',
          optionD: 'with; himself',
          correctOption: 'A',
          subConcept: 'Collocation and Object Pronoun',
          explanation: 'Good takes the preposition at, and after the preposition depends on a noun phrase, so the object form him is required. In and he, on and his, and with and himself each break either the partnership or the pronoun case.',
          remediationTip: 'Learn adjective plus preposition partnerships as whole phrases, and check the pronoun case against the word immediately before it.'
        },
        {
          id: 'q-shs2-cl-2',
          quizId: 'quiz-shs2-eng-t3-cloze',
          questionText: 'Choose the option that best completes the gap: "The traders complained ___ the secretary about the new toll."',
          optionA: 'to',
          optionB: 'for',
          optionC: 'at',
          optionD: 'on',
          correctOption: 'A',
          subConcept: 'Verb Plus Preposition',
          explanation: 'The pattern is complain plus to a person plus about a matter, so to is the only preposition that fits the person object. For would mark a purpose, at and on do not partner with complain before a person.',
          remediationTip: 'When a gap sits before a person, list the prepositions your verb allows with a person and eliminate the rest.'
        },
        {
          id: 'q-shs2-cl-3',
          quizId: 'quiz-shs2-eng-t3-cloze',
          questionText: 'Fill in the gap with the correct tense form: "By the time the health team reached the village, the volunteers ___ the register for two hours."',
          optionA: 'completed',
          optionB: 'have completed',
          optionC: 'had completed',
          optionD: 'were completing',
          correctOption: 'C',
          subConcept: 'Past Perfect in Sequence',
          explanation: 'The narrative is in the simple past and the completing of the register happened before the later past event, so the earlier action takes the past perfect. The simple past leaves the sequence unclear, the present perfect cannot reach back from a past point, and the continuous form does not carry a finished duration.',
          remediationTip: 'Mark the two past events in the sentence; the earlier of the two normally takes had plus a past participle.'
        },
        {
          id: 'q-shs2-cl-4',
          quizId: 'quiz-shs2-eng-t3-cloze',
          questionText: 'Choose the option nearest in meaning to: "The match was postponed because of the heavy rain."',
          optionA: 'The match began in the heavy rain.',
          optionB: 'The match was delayed until a later time because of the heavy rain.',
          optionC: 'The match was cancelled and never played.',
          optionD: 'The players themselves caused the heavy rain.',
          correctOption: 'B',
          subConcept: 'Transfer and Nearest Meaning',
          explanation: 'Postponed means moved to a later time, which option B states exactly. Option C confuses postponement with cancellation, option A reverses the outcome, and option D changes the sense altogether.',
          remediationTip: 'In a nearest-meaning item, keep the fact and the tense of the stem and change only the wording; reject any option that shifts when something happened.'
        },
        {
          id: 'q-shs2-cl-5',
          quizId: 'quiz-shs2-eng-t3-cloze',
          questionText: 'A candidate has spent nearly two minutes on one objective item and still cannot decide. Which action is best?',
          optionA: 'Leave the item blank and hope the marker ignores it.',
          optionB: 'Stop the paper and work the item out fully before going further.',
          optionC: 'Mark the best available choice, note the number, and return to it on the second pass.',
          optionD: 'Copy the answer given by a neighbour who finishes early.',
          correctOption: 'C',
          subConcept: 'Two-Pass Timing Method',
          explanation: 'Flagging the item keeps the timing intact, and a reasoned guess still has a chance of the mark, which a blank never has. Stopping the paper wastes the time of the whole section, and an unanswered item cannot score.',
          remediationTip: 'Set a ninety-second internal limit per item and keep a short list of flagged numbers in the margin for the second pass.'
        }
      ]
    }
  }
];
