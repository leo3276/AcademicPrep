// Ghanaian JHS 2 English Language Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 15 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS2_ENGLISH_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs2-eng-t1-phrases-clauses",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Phrases and Clauses: Identification and Functions",
    "description": "Distinguish between phrases and clauses, identify noun, adjectival, and adverbial structures and their grammatical functions in sentences.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0kFj7f8v-7U",
    "youtubeId": "0kFj7f8v-7U",
    "keyNotes": "• Phrase: A group of related words without a finite verb that acts as a single part of speech (e.g., 'in the morning', 'the tall smart boy', 'very slowly').\n• Types of Phrases:\n  - Noun Phrase (NP): Functions as subject, object, or complement (e.g., 'The brilliant girl in JHS 2 won the quiz').\n  - Adjectival Phrase (AdjP): Modifies a noun or pronoun (e.g., 'a woman of noble character').\n  - Adverbial Phrase (AdvP): Modifies a verb, adjective, or adverb telling how, when, where, or why (e.g., 'with extreme care', 'at dawn').\n  - Prepositional Phrase: Begins with a preposition and ends with a noun object ('across the Volta River').\n• Clause: A group of words containing a subject and a finite predicate verb:\n  - Independent (Main) Clause: Expresses a complete thought and can stand alone as a sentence ('Ama passed her exam').\n  - Dependent (Subordinate) Clause: Cannot stand alone; begins with a subordinating conjunction or relative pronoun ('because she studied diligently').\n• Subordinate Clause Functions:\n  - Noun Clause: Acts as subject, direct object, or subject complement ('What you said surprised everyone').\n  - Adjectival (Relative) Clause: Modifies an antecedent noun ('The school which was built in 1952 has been renovated').\n  - Adverbial Clause: Modifies a verb indicating time, place, manner, reason, condition, concession, or result.",
    "examples": [
      {
        "id": "ex-jhs2eng-t1-1",
        "title": "Identifying a Grammatical Structure and Its Function",
        "problem": "In the sentence: 'The boy who stole the mangoes has confessed', identify the underlined clause 'who stole the mangoes' and state its grammatical function.",
        "stepByStepSolution": [
          "Step 1: Notice that 'who stole the mangoes' has a subject ('who') and a finite verb ('stole'), so it is a clause.",
          "Step 2: It is introduced by the relative pronoun 'who' and describes the noun 'The boy'.",
          "Step 3: Grammatical Name: Adjectival (Relative) Clause.",
          "Step 4: Grammatical Function: Modifies the noun 'The boy'."
        ],
        "keyTakeaway": "An adjectival clause always follows and modifies a noun or pronoun (its antecedent)."
      },
      {
        "id": "ex-jhs2eng-t1-2",
        "title": "Distinguishing an Adverbial Clause of Time from Reason",
        "problem": "Analyze: 'When the bell rang, the students trooped into the assembly hall.' State the grammatical name and function of 'When the bell rang'.",
        "stepByStepSolution": [
          "Step 1: The clause contains a subject ('the bell') and verb ('rang') introduced by the subordinator 'When'.",
          "Step 2: It specifies the exact time the action of trooping occurred.",
          "Step 3: Grammatical Name: Adverbial Clause of Time.",
          "Step 4: Grammatical Function: Modifies the verb 'trooped'."
        ],
        "keyTakeaway": "Adverbial clauses of time answer 'When?' and modify the main verb in the independent clause."
      }
    ]
  },
  {
    "id": "jhs2-eng-t2-complex-sentences",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Sentence Types & Structure: Simple, Compound & Complex",
    "description": "Master sentence classifications by syntactic structure: simple, compound, complex, and compound-complex sentences.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=6-O9v7rKqhs",
    "youtubeId": "6-O9v7rKqhs",
    "keyNotes": "• Structural Classification of Sentences:\n  1. Simple Sentence: Contains exactly one independent clause with a single subject-predicate focus ('Kofi completed his homework on time').\n  2. Compound Sentence: Contains two or more independent clauses joined by coordinating conjunctions (FANBOYS: For, And, Nor, But, Or, Yet, So) or a semicolon ('Kofi worked hard, yet he failed the trial test').\n  3. Complex Sentence: Contains one independent clause and at least one dependent (subordinate) clause joined by subordinating conjunctions (although, because, since, while, if, unless, when) or relative pronouns ('Although it rained heavily, the farmers went to their cocoa farms').\n  4. Compound-Complex Sentence: Contains at least two independent clauses and one or more dependent clauses ('When the headmaster arrived, the teachers stood up, and the students clapped enthusiastically').\n• Punctuation Rules: Use a comma after an introductory subordinate clause ('Although he was ill, he took the exam'). When the main clause comes first, usually no comma is needed ('He took the exam although he was ill').",
    "examples": [
      {
        "id": "ex-jhs2eng-t2-1",
        "title": "Classifying a Compound Sentence",
        "problem": "Classify this sentence: 'Yaw washed the car, and his sister prepared lunch for the family.'",
        "stepByStepSolution": [
          "Step 1: Identify clause 1: 'Yaw washed the car' (complete independent clause).",
          "Step 2: Identify clause 2: 'his sister prepared lunch for the family' (complete independent clause).",
          "Step 3: Both clauses are joined by the coordinating conjunction 'and'.",
          "Step 4: Conclusion: It is a Compound Sentence."
        ],
        "keyTakeaway": "Two independent clauses joined by FANBOYS form a compound sentence."
      },
      {
        "id": "ex-jhs2eng-t2-2",
        "title": "Converting Simple Sentences into a Complex Sentence",
        "problem": "Combine: 'Kojo woke up late. He missed the morning school bus.' into a single complex sentence using 'Because'.",
        "stepByStepSolution": [
          "Step 1: Determine the cause ('Kojo woke up late') and the effect ('He missed the morning school bus').",
          "Step 2: Subordinate the cause using 'Because': 'Because Kojo woke up late'.",
          "Step 3: Combine with main clause: 'Because Kojo woke up late, he missed the morning school bus.' (or: 'Kojo missed the morning school bus because he woke up late.')."
        ],
        "keyTakeaway": "Use subordinating conjunctions like 'because' to show logical cause-and-effect in complex sentences."
      }
    ]
  },
  {
    "id": "jhs2-eng-t3-informal-letters",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 3,
    "title": "Composition: Informal and Semi-Formal Letters",
    "description": "Learn structural conventions, layout, conversational register, and effective paragraphing for informal and semi-formal letters in the BECE format.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=L9AWrJnhsRI",
    "youtubeId": "L9AWrJnhsRI",
    "keyNotes": "• Purpose of Informal Letters: Written to close relatives, friends, and peers to share personal news, give advice, congratulate, or apologize.\n• Essential Structural Elements:\n  1. Writer's Address & Date: Located at the top right-hand corner (e.g., 'Achimota Basic School, P.O. Box 12, Accra. 24th September, 2026.'). Punctuation can be block or indented.\n  2. Salutation: Informal, on the left margin (e.g., 'Dear Kwame,', 'Dear Auntie Akua,').\n  3. Opening Paragraph: Warm greetings, inquiring about welfare, acknowledging previous correspondence, and stating the purpose of the letter in a friendly tone.\n  4. Body Paragraphs (2–3 paragraphs): Developing ideas logically with lively, conversational language, personal anecdotes, and contractions (I'm, can't, won't).\n  5. Concluding Paragraph: Warm closing remarks, convey regards to family members, expectation of a reply.\n  6. Subscription (Valediction): On the right-hand side ('Yours sincerely,', 'Yours affectionately,', 'Your best friend,') followed by first name only (e.g., 'Kofi'). No surname!\n• Semi-Formal Letters: Written to older acquaintances or respected family friends; tone is polite yet cordial, avoiding extreme slang.",
    "examples": [
      {
        "id": "ex-jhs2eng-t3-1",
        "title": "Drafting an Informal Letter Address and Salutation",
        "problem": "Set out the proper address and salutation for an informal letter written from Kumasi to a cousin.",
        "stepByStepSolution": [
          "Top Right Corner:\nOpoku Ware JHS,\nP.O. Box 244,\nKumasi, Ashanti Region.\n24th September, 2026.",
          "Left Margin:\nDear Kwadwo,",
          "Rule: Street/School name, Box number, City/Region, Date with proper capitalization and commas."
        ],
        "keyTakeaway": "Only one address (writer's) is required in an informal letter, placed at the top right."
      },
      {
        "id": "ex-jhs2eng-t3-2",
        "title": "Evaluating Informal Subscriptions",
        "problem": "Which subscription is correct for a letter to your childhood friend? (a) Yours faithfully, Kwame Mensah (b) Yours sincerely, Kwame (c) Yours truly, Mr. Mensah.",
        "stepByStepSolution": [
          "Step 1: 'Yours faithfully' is used strictly in formal letters when the recipient's name is unknown.",
          "Step 2: Titles and surnames (Mr. Mensah, Kwame Mensah) are never used in informal sign-offs.",
          "Step 3: Correct choice is (b): 'Yours sincerely,' followed by first name 'Kwame'."
        ],
        "keyTakeaway": "In informal letters, sign off with your first name only without a surname or official title."
      }
    ]
  },
  {
    "id": "jhs2-eng-t4-reading-comprehension",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 4,
    "title": "Reading Comprehension: Skimming, Scanning & Inference",
    "description": "Master techniques to read actively, extract key ideas, scan for specific facts, make valid inferences, and decode contextual vocabulary.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=4Ym5B5I2PqA",
    "youtubeId": "4Ym5B5I2PqA",
    "keyNotes": "• Core Reading Strategies:\n  - Skimming: Rapid reading across headings, topic sentences, and concluding paragraphs to grasp the overall gist or central message.\n  - Scanning: Searching rapidly through the text for specific details (dates, names, statistics, numbers, keywords) without reading every word.\n  - Detailed Reading: Reading critically for deep understanding, identifying author's purpose, tone, and rhetorical structure.\n• Types of Comprehension Questions in BECE:\n  1. Direct (Factual) Questions: Answers stated explicitly in the passage (rephrase in your own words; avoid verbatim lifting!).\n  2. Inferential Questions: Answers implied rather than directly stated; deduce logical conclusions using contextual clues.\n  3. Vocabulary Replacement: Finding words or phrases that mean the same and can replace target words without altering grammatical tense or meaning.\n  4. Grammatical Function Questions: Identifying clauses/phrases and naming their grammatical functions.\n  5. Figures of Speech: Identifying similes, metaphors, or personification used by the author.",
    "examples": [
      {
        "id": "ex-jhs2eng-t4-1",
        "title": "Deducing Meaning from Context Clues",
        "problem": "Read: 'During the severe harmattan, the lake dwindled into a shallow puddle.' What does 'dwindled' mean in this context?",
        "stepByStepSolution": [
          "Step 1: Context clues: 'severe harmattan' (dry weather) and 'shallow puddle' (from a former lake).",
          "Step 2: The water level was drastically shrinking or decreasing in size.",
          "Step 3: 'Dwindled' means decreased, shrunk, diminished, or reduced in volume.",
          "Step 4: Check replacement: 'During the severe harmattan, the lake shrunk into a shallow puddle.' (Preserves meaning and past tense)."
        ],
        "keyTakeaway": "Use surrounding context clues to find a replacement word that matches the original in meaning and tense."
      },
      {
        "id": "ex-jhs2eng-t4-2",
        "title": "Answering Factual Questions without Verbatim Lifting",
        "problem": "Passage: 'Owing to rapid deforestation in the district, erratic rainfall severely ruined the farmers' cocoa yield.' Question: Why did the farmers suffer poor harvest?",
        "stepByStepSolution": [
          "Step 1: Locate the reason: 'rapid deforestation' caused 'erratic rainfall'.",
          "Step 2: Avoid direct copy-pasting.",
          "Step 3: Rephrase: The farmers suffered poor harvest because unpredictable rainfall caused by the destruction of local forests damaged their cocoa crops."
        ],
        "keyTakeaway": "Paraphrase answers in your own words to score maximum marks in BECE comprehension."
      }
    ]
  },
  {
    "id": "jhs2-eng-t5-figures-of-speech",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 5,
    "title": "Literature: Figures of Speech & Literary Devices",
    "description": "Identify and interpret similes, metaphors, personification, hyperbole, irony, alliteration, and onomatopoeia in prose, drama, and poetry.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0kFj7f8v-7U",
    "youtubeId": "0kFj7f8v-7U",
    "keyNotes": "• A Figure of Speech is figurative language that departs from literal meaning to create vivid imagery, emotional emphasis, or artistic effect.\n• Key Literary Devices:\n  - Simile: Direct comparison between two unlike things using 'as' or 'like' ('He fought like a lion in the battle', 'Her teeth are as white as snow').\n  - Metaphor: Implicit comparison where one thing is stated directly to be another without using 'like' or 'as' ('The classroom was a zoo', 'Kwame is a pillar of strength').\n  - Personification: Giving human qualities, feelings, or actions to inanimate objects or abstract ideas ('The wind whispered secrets through the trees').\n  - Hyperbole: Deliberate, obvious exaggeration for dramatic effect or humor ('I have told you this a million times!', 'He drank an ocean of water').\n  - Irony: When the actual outcome or meaning is the exact opposite of what is expected or said ('The fire station burned down to the ground').\n  - Alliteration: Repetition of identical consonant sounds at the beginning of adjacent words ('Peter Piper picked a peck of pickled peppers').\n  - Onomatopoeia: Words that imitate the natural sound associated with what they name ('The door slammed', 'bees buzzed', 'hiss', 'splash').",
    "examples": [
      {
        "id": "ex-jhs2eng-t5-1",
        "title": "Distinguishing Simile from Metaphor",
        "problem": "Identify the figures of speech in: (a) 'The moon played hide and seek behind the clouds' (b) 'Ghana is an oasis of peace'.",
        "stepByStepSolution": [
          "Sentence (a): 'The moon' (inanimate celestial body) is given the human action of 'playing hide and seek'. This is PERSONIFICATION.",
          "Sentence (b): 'Ghana' is directly equated to 'an oasis of peace' without 'like' or 'as'. This is a METAPHOR."
        ],
        "keyTakeaway": "Personification animates objects; Metaphors make direct symbolic identifications without comparison words."
      },
      {
        "id": "ex-jhs2eng-t5-2",
        "title": "Recognizing Situational Irony",
        "problem": "Explain the irony in: 'The national swimming coach drowned in his bathtub.'",
        "stepByStepSolution": [
          "Step 1: Expected situation: An expert swimming coach is highly skilled in aquatic survival and least expected to drown.",
          "Step 2: Actual situation: He dies from drowning in a shallow domestic bath.",
          "Step 3: Because the reality contradicts the logical expectation, it is Situational Irony."
        ],
        "keyTakeaway": "Irony highlights a striking incongruity between what is expected to happen and what actually occurs."
      }
    ]
  },
  {
    "id": "jhs2-eng-t6-modal-auxiliaries",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 6,
    "title": "Auxiliary Verbs & Modals: Functions and Usage",
    "description": "Understand primary auxiliary verbs (be, do, have) and modal verbs (can, could, may, might, shall, should, will, would, must, ought to) expressing ability, permission, necessity, and probability.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=6-O9v7rKqhs",
    "youtubeId": "6-O9v7rKqhs",
    "keyNotes": "• Auxiliary (Helping) Verbs accompany main verbs to form tenses, aspects, voices, and questions.\n• Primary Auxiliaries: 'be' (is, am, are, was, were, been), 'do' (do, does, did), 'have' (have, has, had). They can also function as main verbs ('I have a pen').\n• Modal Auxiliary Verbs express the speaker's attitude or modality toward the action:\n  - Ability: 'can' (present ability: 'She can solve equations'), 'could' (past ability: 'He could run fast in primary school').\n  - Permission: 'may' (formal permission: 'May I leave the room?'), 'can' (informal permission: 'Can I borrow your pen?').\n  - Obligation / Necessity: 'must' (strong compulsory obligation: 'Candidates must bring their admission letters'), 'ought to' / 'should' (moral duty or strong advice: 'You ought to respect your elders').\n  - Possibility / Probability: 'might' / 'may' ('It might rain this evening').\n  - Willingness / Future Determination: 'will', 'shall'.\n• Key Grammatical Rule: Modal auxiliaries are followed directly by the bare infinitive (base form without 'to'), except 'ought to' and 'used to'. Never say 'He can to dance' or 'He must studies'!",
    "examples": [
      {
        "id": "ex-jhs2eng-t6-1",
        "title": "Selecting the Correct Modal for Obligation",
        "problem": "Choose the correct modal verb: 'Every citizen (must / may / might) pay taxes to support national development.'",
        "stepByStepSolution": [
          "Step 1: Paying taxes is a statutory legal requirement and civic obligation, not a matter of casual permission or weak possibility.",
          "Step 2: 'May' expresses permission, 'might' expresses distant possibility, whereas 'must' expresses binding legal duty/obligation.",
          "Step 3: Correct answer: 'Every citizen MUST pay taxes to support national development.'"
        ],
        "keyTakeaway": "'Must' indicates imperative obligation or necessity; 'should' indicates advisory moral duty."
      },
      {
        "id": "ex-jhs2eng-t6-2",
        "title": "Correcting Modal Errors with Bare Infinitives",
        "problem": "Identify and correct the grammatical error in: 'You should to apologize immediately.'",
        "stepByStepSolution": [
          "Step 1: 'Should' is a modal auxiliary verb.",
          "Step 2: Modals (except ought) must be followed by the base infinitive verb without 'to'.",
          "Step 3: Correction: 'You should apologize immediately.'"
        ],
        "keyTakeaway": "Never place the particle 'to' after modal verbs like can, could, may, might, shall, should, must, will, and would."
      }
    ]
  },
  {
    "id": "jhs2-eng-t7-direct-indirect-speech",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 7,
    "title": "Direct and Reported (Indirect) Speech",
    "description": "Transform statements, commands, and questions from direct speech to reported speech applying tense backshifting, pronoun changes, and time/place adverb shifts.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=L9AWrJnhsRI",
    "youtubeId": "L9AWrJnhsRI",
    "keyNotes": "• Direct Speech reproduces the exact spoken words within quotation marks (\"I am revising for the BECE,\" said Kofi).\n• Reported (Indirect) Speech conveys what someone said without exact quoting, removing quotation marks ('Kofi said that he was revising for the BECE').\n• Transformation Rules when the reporting verb is in the past tense (e.g., 'said', 'told'):\n  1. Tense Backshift:\n     - Simple Present -> Simple Past (am/is -> was, write -> wrote).\n     - Present Continuous -> Past Continuous (is singing -> was singing).\n     - Simple Past -> Past Perfect (wrote -> had written).\n     - Present Perfect -> Past Perfect (has finished -> had finished).\n     - Future 'will/can' -> 'would/could'.\n  2. Pronoun & Possessive Shifts:\n     - 'I' becomes 'he/she'; 'we' becomes 'they'; 'my' becomes 'his/her'.\n  3. Time and Place Adverb Shifts:\n     - now -> then; today -> that day; yesterday -> the previous day / the day before; tomorrow -> the next day / following day; here -> there; this -> that.\n• Universal Truths Exception: Scientific facts and general truths do NOT backshift ('The teacher said that the sun rises in the east').",
    "examples": [
      {
        "id": "ex-jhs2eng-t7-1",
        "title": "Transforming a Direct Statement into Reported Speech",
        "problem": "Change into reported speech: Ama said, \"I bought a new dictionary yesterday.\"",
        "stepByStepSolution": [
          "Step 1: Identify pronoun change: 'I' -> 'she'.",
          "Step 2: Identify tense backshift: 'bought' (simple past) -> 'had bought' (past perfect).",
          "Step 3: Identify adverb shift: 'yesterday' -> 'the previous day' or 'the day before'.",
          "Step 4: Combine: Ama said that she had bought a new dictionary the previous day."
        ],
        "keyTakeaway": "Simple past changes to past perfect, and 'yesterday' shifts to 'the previous day'."
      },
      {
        "id": "ex-jhs2eng-t7-2",
        "title": "Transforming a Direct Question into Reported Speech",
        "problem": "Change into reported speech: The officer asked, \"Where do you live?\"",
        "stepByStepSolution": [
          "Step 1: For Wh-questions, retain the question word ('where').",
          "Step 2: Invert the question structure into a statement word order (Subject + Verb), eliminating auxiliary 'do'.",
          "Step 3: Change 'you' to 'I' or 'he/she', and tense 'live' to 'lived'.",
          "Step 4: Combine: The officer asked where I lived."
        ],
        "keyTakeaway": "Reported questions take affirmative statement word order (subject before verb) without question marks."
      }
    ]
  },
  {
    "id": "jhs2-eng-t8-formal-letters",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 8,
    "title": "Composition: Formal and Official Letters",
    "description": "Master the structure, two-address layout, formal heading, polite professional register, and valediction of formal business and official letters.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=4Ym5B5I2PqA",
    "youtubeId": "4Ym5B5I2PqA",
    "keyNotes": "• Purpose of Formal Letters: Written to authorities, organizations, school heads, editors, or business managers for official purposes (applications, complaints, requests, permissions).\n• Structural Layout:\n  1. Writer's Address: Top right corner, with date below it.\n  2. Recipient's Designation & Address: Left margin below writer's address level (e.g., 'The Headmaster, Ridge Basic School, P.O. Box 45, Sunyani.').\n  3. Salutation: Formal on the left margin ('Dear Sir,' or 'Dear Madam,').\n  4. Heading / Title: Centered or left-aligned, capitalized or underlined (e.g., 'APPLICATION FOR THE POST OF LIBRARY PREFECT' or 'APPLICATION FOR LEAVE OF ABSENCE').\n  5. Body: Formal, courteous, precise paragraphs:\n     - Paragraph 1: State the explicit purpose directly without informal pleasantries.\n     - Body Paragraphs: Present justifications, relevant details, or evidence objectively.\n     - Concluding Paragraph: State expected action courteously ('I hope my application will be granted favorable consideration').\n  6. Subscription: 'Yours faithfully,' on the left or right margin, followed by the writer's handwritten signature, and full name in block letters below.\n• Critical Rule: Never use informal contractions (don't, can't, I'm) or slang in formal letters!",
    "examples": [
      {
        "id": "ex-jhs2eng-t8-1",
        "title": "Formatting the Two Addresses and Salutation in a Formal Letter",
        "problem": "Illustrate the proper heading and recipient address for an application to the District Education Director.",
        "stepByStepSolution": [
          "Top Right:\nP.O. Box 78,\nKasoa, Central Region.\n24th September, 2026.\n",
          "Left Margin:\nThe District Director,\nGhana Education Service,\nAwutu Senya District,\nKasoa.\n\nDear Sir,\n\nAPPLICATION FOR PERMISSION TO ORGANIZE A SCIENCE EXHIBITION"
        ],
        "keyTakeaway": "Formal letters require two complete addresses: the sender's top right and the recipient's official title and address on the left."
      },
      {
        "id": "ex-jhs2eng-t8-2",
        "title": "Selecting the Correct Formal Subscription",
        "problem": "Why is 'Yours sincerely, John' incorrect for a formal letter addressed to 'The Editor, Daily Graphic'?",
        "stepByStepSolution": [
          "Step 1: In letters addressed to an official designated title ('The Editor', 'Dear Sir'), the only acceptable subscription is 'Yours faithfully,'.",
          "Step 2: Formal letters must include a signature and the writer's full name (first name and surname), not just a first name.",
          "Step 3: Correct sign-off:\nYours faithfully,\n[Signature]\nJohn Mensah"
        ],
        "keyTakeaway": "'Dear Sir/Madam' always pairs with 'Yours faithfully,' followed by signature and full name."
      }
    ]
  },
  {
    "id": "jhs2-eng-t9-narrative-descriptive",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Composition: Narrative and Descriptive Essays",
    "description": "Develop captivating narrative essays with engaging plots, characterization, and dialogue; craft descriptive essays with sensory details and figurative language.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0kFj7f8v-7U",
    "youtubeId": "0kFj7f8v-7U",
    "keyNotes": "• Narrative Essay (Telling a Story):\n  - Plot Structure: Orientation/Introduction (setting the scene, characters), Rising Action (developing conflict/problem), Climax (highest point of drama/tension), Falling Action, and Resolution (conclusion/moral lesson).\n  - Chronological Sequencing: Use transitional time expressions ('Suddenly', 'Meanwhile', 'A few moments later', 'Eventually').\n  - Past Tense: Stories are recounted predominantly in the past tense.\n  - Dialogue: Realistic dialogue enlivens characters and breaks monologue.\n• Descriptive Essay (Painting a Word Picture):\n  - Sensory Imagery: Appeal to all 5 human senses — Sight (vivid colors, shapes), Sound (clang, squeak, rustle), Smell (fragrance, pungent aroma), Taste (bitter, savory), Touch (rough, silky, scorching).\n  - Adjectives and Adverbs: Use precise, evocative modifiers (not just 'good' or 'bad', but 'breathtaking', 'dilapidated', 'monumental').\n  - Spatial Order: Organize descriptions logically (top-to-bottom, near-to-far, inside-to-outside).",
    "examples": [
      {
        "id": "ex-jhs2eng-t9-1",
        "title": "Enhancing Narrative Prose with Sensory Imagery",
        "problem": "Improve this plain sentence for a descriptive essay: 'The market was crowded and noisy.'",
        "stepByStepSolution": [
          "Step 1: Identify senses to engage: Sight (mass of colorful headpans and wares) and Sound (cacophony of market women shouting).",
          "Step 2: Add dynamic verbs and sensory adjectives: 'brimming', 'deafening', 'hawking', 'pungent aroma of smoked fish'.",
          "Step 3: Improved version: 'The Makola market was a sea of jostling bodies, where traders shouted competitive prices above a deafening din of honking trotros, permeated by the pungent aroma of smoked herrings and dried spices.'"
        ],
        "keyTakeaway": "Transform bland statements by incorporating evocative sensory adjectives and active verbs."
      },
      {
        "id": "ex-jhs2eng-t9-2",
        "title": "Structuring the Climax of a Narrative",
        "problem": "What is the function of the climax in a narrative essay entitled 'An Unforgettable Experience'?",
        "stepByStepSolution": [
          "Step 1: The climax is the peak turning point of maximum tension or suspense in the plot.",
          "Step 2: In 'An Unforgettable Experience', it is the exact moment the protagonist confronts the central crisis (e.g., escaping a capsizing canoe on the Volta River).",
          "Step 3: It resolves the main dramatic question before the story transitions into falling action and resolution."
        ],
        "keyTakeaway": "Every successful narrative builds tension towards a decisive climactic moment."
      }
    ]
  },
  {
    "id": "jhs2-eng-t10-poetry-drama",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Literature: Appreciation of Poetry and Drama",
    "description": "Analyze poetry elements (stanzas, rhythm, rhyme schemes, themes) and drama conventions (playwright, acts, scenes, dialogue, stage directions, dramatic conflict).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=6-O9v7rKqhs",
    "youtubeId": "6-O9v7rKqhs",
    "keyNotes": "• Appreciation of Poetry:\n  - Stanza: A grouped set of lines in a poem (couplet = 2 lines, tercet = 3, quatrain = 4, sestet = 6, octave = 8).\n  - Rhyme Scheme: The pattern of end rhymes denoted by letters (e.g., ABAB, AABB).\n  - Rhythm & Meter: The musical beat and stressed/unstressed syllable flow.\n  - Speaker (Persona): The imaginary voice or character who tells the poem (not necessarily the poet in real life!).\n  - Tone and Mood: The poet's attitude toward the subject (humorous, solemn, sarcastic) and the emotional atmosphere evoked in the reader.\n• Appreciation of Drama:\n  - Playwright: The author who writes the play.\n  - Structural Division: Plays are divided into major Acts, which are subdivided into smaller Scenes.\n  - Dialogue vs Monologue vs Soliloquy: Dialogue is spoken exchange between two or more characters; Monologue is a long speech by one character; Soliloquy is a character speaking their private thoughts aloud while alone on stage.\n  - Stage Directions: Italicized or bracketed instructions telling actors how to move, speak, or react, and describing stage lighting and props.\n  - Conflict: The struggle between opposing forces (Protagonist vs Antagonist).",
    "examples": [
      {
        "id": "ex-jhs2eng-t10-1",
        "title": "Determining the Rhyme Scheme of a Stanza",
        "problem": "Determine the rhyme scheme of: \n'The sun descends in golden light, (line 1)\nThe shadows lengthen on the wall; (line 2)\nThe peaceful stars illuminate the night, (line 3)\nAs silent dewdrops start to fall.' (line 4)",
        "stepByStepSolution": [
          "Step 1: Line 1 ends with 'light' -> assign letter 'a'.",
          "Step 2: Line 2 ends with 'wall' -> does not rhyme with 'light', assign letter 'b'.",
          "Step 3: Line 3 ends with 'night' -> rhymes with 'light' (line 1), assign letter 'a'.",
          "Step 4: Line 4 ends with 'fall' -> rhymes with 'wall' (line 2), assign letter 'b'.",
          "Step 5: The rhyme scheme is abab."
        ],
        "keyTakeaway": "Track the terminal word sounds of each line sequentially using lowercase letters to discover the rhyme scheme."
      },
      {
        "id": "ex-jhs2eng-t10-2",
        "title": "Identifying Stage Directions in Drama",
        "problem": "In a play: KOFI: (Stomping angrily across the stage, slamming the door) I will never agree to this! Identify the stage directions and state their purpose.",
        "stepByStepSolution": [
          "Step 1: The stage direction is: '(Stomping angrily across the stage, slamming the door)'.",
          "Step 2: Purpose: It instructs the actor playing Kofi on physical movements and emotional delivery, and directs stage sound effects."
        ],
        "keyTakeaway": "Stage directions are non-spoken theatrical instructions written by the playwright for actors and directors."
      }
    ]
  },
  {
    "id": "jhs2-eng-t11-active-passive-voice",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Active and Passive Voice: Transformations & Applications",
    "description": "Transform sentences accurately between active and passive voices across various tenses, and understand when to use the passive voice in objective and scientific writing.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=L9AWrJnhsRI",
    "youtubeId": "L9AWrJnhsRI",
    "keyNotes": "• Active Voice: The grammatical subject of the sentence actively performs the action ('The mechanic repaired the bus'). Focus is on the doer (agent).\n• Passive Voice: The grammatical subject receives the action ('The bus was repaired by the mechanic'). Focus is on the action or the receiver.\n• Transformation Steps (Active -> Passive):\n  1. The active direct object becomes the passive subject ('the bus').\n  2. Insert an appropriate form of auxiliary 'to be' matching the active tense (simple past -> 'was/were').\n  3. Change the main verb into its Past Participle form ('repaired').\n  4. The active subject becomes the agent in a prepositional 'by-phrase' ('by the mechanic') or is omitted if obvious or unknown.\n• Tense Transformations Table:\n  - Simple Present: eats -> is/are eaten.\n  - Present Continuous: is eating -> is being eaten.\n  - Simple Past: ate -> was/were eaten.\n  - Past Continuous: was eating -> was being eaten.\n  - Present Perfect: has eaten -> has been eaten.\n  - Simple Future: will eat -> will be eaten.\n  - Modals: can solve -> can be solved.\n• When to Use Passive Voice: In formal reports, laboratory experiments ('The test tube was heated'), and when the actor is unknown or irrelevant ('My wallet was stolen').",
    "examples": [
      {
        "id": "ex-jhs2eng-t11-1",
        "title": "Converting Present Continuous Active to Passive",
        "problem": "Change into passive voice: 'The mason is building a new library.'",
        "stepByStepSolution": [
          "Step 1: Direct object 'a new library' becomes the new subject.",
          "Step 2: Active verb is present continuous ('is building'); passive auxiliary requires 'is being' + past participle 'built'.",
          "Step 3: Add agent: 'by the mason'.",
          "Step 4: Result: 'A new library is being built by the mason.'"
        ],
        "keyTakeaway": "Continuous tenses in the passive always incorporate the progressive auxiliary 'being' (is/are/was/were being + past participle)."
      },
      {
        "id": "ex-jhs2eng-t11-2",
        "title": "Converting Present Perfect Active to Passive",
        "problem": "Change into passive voice: 'The police have arrested the suspects.'",
        "stepByStepSolution": [
          "Step 1: 'The suspects' (plural) becomes the subject.",
          "Step 2: Present perfect passive requires 'have been' + past participle 'arrested'.",
          "Step 3: Add agent: 'by the police'.",
          "Step 4: Result: 'The suspects have been arrested by the police.'"
        ],
        "keyTakeaway": "Ensure the auxiliary agrees in number with the new passive subject ('the suspects have been', not 'has been')."
      }
    ]
  },
  {
    "id": "jhs2-eng-t12-question-tags",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Question Tags & Short Responses",
    "description": "Master question tag rules: affirmative-negative contrast, auxiliary matching, subject pronoun agreement, and intonation patterns.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=4Ym5B5I2PqA",
    "youtubeId": "4Ym5B5I2PqA",
    "keyNotes": "• A Question Tag is a short question appended to the end of a statement, used to seek confirmation, agreement, or clarification.\n• The Golden Rule of Question Tags:\n  - Positive (Affirmative) Statement -> Negative Tag ('You are a student, aren't you?').\n  - Negative Statement -> Positive Tag ('Kofi did not attend the meeting, did he?').\n• Key Rules for Constructing Tags:\n  1. Match the Auxiliary Verb: If the statement contains an auxiliary (is, are, was, were, has, have, can, will, must), reuse it in the tag ('She can swim, can't she?').\n  2. Sentences with Main Verbs (No Auxiliary): Use the appropriate form of 'do / does / did' ('Kwame plays football, doesn't he?', 'They went home, didn't they?').\n  3. Subject Pronoun Agreement: The subject of the tag must always be a personal pronoun (he, she, it, they, we, you), never a proper or common noun ('Ama is kind, isn't she?' NOT 'isn't Ama?').\n  4. Special Irregular Tags:\n     - 'I am right, aren't I?' (Never say 'amn't I').\n     - Imperatives (Commands/Requests): 'Close the door, will you?' / 'Kindly assist me, won't you?'.\n     - Suggestions with 'Let's': 'Let us study, shall we?'.\n     - Statements with Negative Adverbs (barely, scarcely, hardly, seldom, never) take a POSITIVE tag ('He seldom comes late, does he?').",
    "examples": [
      {
        "id": "ex-jhs2eng-t12-1",
        "title": "Forming Tags for Sentences with Negative Adverbs",
        "problem": "Supply the correct question tag: 'Ama hardly complains about food, _______?'",
        "stepByStepSolution": [
          "Step 1: The adverb 'hardly' makes the statement grammatically negative.",
          "Step 2: Negative statements require a POSITIVE tag.",
          "Step 3: The verb 'complains' is simple present singular, requiring the auxiliary 'does'.",
          "Step 4: Pronoun for Ama is 'she'.",
          "Step 5: Tag: 'does she?'"
        ],
        "keyTakeaway": "Words like hardly, seldom, scarcely, and never make a sentence negative, requiring a positive tag."
      },
      {
        "id": "ex-jhs2eng-t12-2",
        "title": "Tagging the Irregular 'I am' Structure",
        "problem": "Supply the correct question tag: 'I am your class prefect, _______?'",
        "stepByStepSolution": [
          "Step 1: The statement is positive ('I am').",
          "Step 2: Standard English convention uses the contracted tag 'aren't I?'.",
          "Step 3: Result: 'I am your class prefect, aren't I?'"
        ],
        "keyTakeaway": "The standard negative question tag for 'I am' is always 'aren't I?'."
      }
    ]
  },
  {
    "id": "jhs2-eng-t13-summary-writing",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 13,
    "title": "Summary Writing: Finding Main Ideas & Paraphrasing",
    "description": "Extract central themes and topic sentences, eliminate redundant examples and illustrations, and express core ideas concisely in candidate's own words.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0kFj7f8v-7U",
    "youtubeId": "0kFj7f8v-7U",
    "keyNotes": "• Definition of Summary: Presenting the essential main ideas of a text in a condensed, clear, and coherent form, stripped of non-essential details.\n• Cardinal Rules of Summary Writing in BECE:\n  1. Read the Question First: Understand precisely what specific points or aspects you are asked to summarize.\n  2. Identify Topic Sentences: Locate the core argument in each paragraph (often found at the beginning or end of paragraphs).\n  3. Discard Irrelevant Elements: Eliminate all figurative language, analogies, long anecdotes, rhetorical questions, and extensive lists of examples introduced by 'for instance' or 'such as'.\n  4. Paraphrase (Use Your Own Words): Express the selected points in fresh vocabulary and sentence structures without distorting the author's original meaning.\n  5. Adhere to Word Count & Sentence Requirements: If asked for 'three sentences, one for each factor', provide exactly three grammatically complete sentences. Writing phrases or fragments loses marks.\n  6. Maintain Objectivity: Do not inject your personal opinions or external knowledge not found in the passage.",
    "examples": [
      {
        "id": "ex-jhs2eng-t13-1",
        "title": "Condensing a Wordy Paragraph into a Single Summary Sentence",
        "problem": "Original: 'Indiscriminate disposal of plastic water sachets, dumping of domestic refuse into open storm drains, and throwing garbage into streams have blocked water channels, leading to destructive seasonal floods.' Summarize in one sentence the cause of seasonal floods.",
        "stepByStepSolution": [
          "Step 1: Identify redundant examples: plastic water sachets, domestic refuse, garbage in streams.",
          "Step 2: Synthesize them into a concise umbrella term: 'improper waste disposal'.",
          "Step 3: Connect to effect: 'blocks drainage channels causing floods'.",
          "Step 4: Summary Sentence: Improper disposal of waste blocks drainage systems and triggers seasonal flooding."
        ],
        "keyTakeaway": "Replace lists of specific examples with broader collective terms to make summary sentences concise."
      },
      {
        "id": "ex-jhs2eng-t13-2",
        "title": "Eliminating Irrelevant Illustrations from Summary",
        "problem": "In an essay about study habits with an anecdote about a girl named Akosua who studied all night with coffee, what should be done with Akosua's story in the summary?",
        "stepByStepSolution": [
          "Step 1: Recognize that Akosua's personal story is an illustrative anecdote.",
          "Step 2: Summary demands abstracting the general principle ('consistent nightly study improves academic retention').",
          "Step 3: Discard names, coffee details, and personal narrative entirely."
        ],
        "keyTakeaway": "Never include personal names, specific anecdotes, or statistical illustrations in your summary."
      }
    ]
  },
  {
    "id": "jhs2-eng-t14-expository-articles",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 14,
    "title": "Composition: Expository Writing & Articles for Publication",
    "description": "Write well-structured expository essays and articles for publication in school magazines or national newspapers (e.g. Junior Graphic) addressing national issues.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=6-O9v7rKqhs",
    "youtubeId": "6-O9v7rKqhs",
    "keyNotes": "• Expository Writing: Writing that explains, informs, clarifies, or analyzes a topic logically and objectively with supporting facts and evidence.\n• Articles for Publication (e.g., in The Junior Graphic or School Magazine):\n  - Heading / Title: A catchy, relevant title written in bold capital letters or title case (e.g., 'THE MENACE OF TEENAGE PREGNANCY IN OUR COMMUNITY', 'HOW ROAD ACCIDENTS CAN BE CURBED').\n  - Introduction: Hooks the reader's attention, defines the topic or problem, and outlines the scope of discussion.\n  - Body Paragraphs (3–4 paragraphs): Each paragraph must have a clear topic sentence, followed by supporting explanations, factual statistics, and logical reasoning.\n  - Recommendations / Solutions: Suggest practical, actionable interventions by government, schools, parents, or youth.\n  - Conclusion: Summarizes the central thesis with a strong, memorable call to action.\n  - Byline: Writer's name and designation at the bottom or beneath the heading (e.g., 'By: Ama Serwaa, JHS 2 Prefect, Presby Basic School, Koforidua').\n• Tone & Style: Formal, persuasive, coherent, using rhetorical questions and cause-and-effect transitional devices ('Consequently', 'Furthermore', 'Moreover', 'In contrast').",
    "examples": [
      {
        "id": "ex-jhs2eng-t14-1",
        "title": "Drafting an Article Title and Byline",
        "problem": "Set out the proper title and byline for an article written for the Junior Graphic on 'Preventing Malaria in Schools'.",
        "stepByStepSolution": [
          "Title (Centered, Bold / Capitalized):\nPREVENTING THE SPREAD OF MALARIA IN BASIC SCHOOLS\n\nByline (Right-aligned or below title):\nBy: Kwabena Asare\nForm 2A, Methodist JHS, Tema",
          "Rules: Clear informative title, byline indicating author's name, class, school, and town."
        ],
        "keyTakeaway": "Articles for publication must have a bold title and a writer's byline including school and location."
      },
      {
        "id": "ex-jhs2eng-t14-2",
        "title": "Developing a Topical Paragraph in an Expository Essay",
        "problem": "Write a topic sentence and two supporting sentences on 'The Danger of Open Drains in Urban Areas'.",
        "stepByStepSolution": [
          "Topic Sentence: First and foremost, uncovered storm drains in our towns pose severe physical and environmental hazards to residents.",
          "Supporting Sentence 1: During torrential downpours, these gaping gutters overflow with rapid torrents, creating fatal drowning hazards for unsuspecting schoolchildren.",
          "Supporting Sentence 2: In addition, stagnant pools of sewage trapped within choked gutters serve as fertile breeding habitats for disease vectors like malaria mosquitoes and cholera-causing bacteria."
        ],
        "keyTakeaway": "Begin body paragraphs with a strong topic sentence and support it with vivid, logical evidence."
      }
    ]
  },
  {
    "id": "jhs2-eng-t15-oral-english",
    "subjectId": "english",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 15,
    "title": "Oral English: Vowels, Consonants, Diphthongs & Word Stress",
    "description": "Master English phonetics: monophthongs (short/long vowels), diphthongs, consonant clusters, and syllable stress placement in nouns vs verbs.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=L9AWrJnhsRI",
    "youtubeId": "L9AWrJnhsRI",
    "keyNotes": "• Speech Sounds in English:\n  - Pure Vowels (Monophthongs): 12 pure vowel sounds divided into short vowels (/ɪ/ sit, /e/ bed, /æ/ cat, /ɒ/ hot, /ʌ/ cup, /ʊ/ put, /ə/ about) and long vowels marked with colons (/iː/ seat, /ɑː/ cart, /ɔː/ port, /uː/ pool, /ɜː/ bird).\n  - Diphthongs (Gliding Vowels): 8 vowels where sound glides from one vowel quality to another within the same syllable (/eɪ/ say, /aɪ/ buy, /ɔɪ/ boy, /aʊ/ now, /əʊ/ go, /ɪə/ hear, /eə/ hair, /ʊə/ poor).\n  - Consonant Sounds: 24 consonant sounds including voiced (vocal cords vibrate: /b/, /d/, /g/, /v/, /z/) and voiceless (no vibration: /p/, /t/, /k/, /f/, /s/).\n  - Consonant Clusters: Sequences of consonants without intervening vowels ('str-' in street, '-sks' in desks, '-lpt' in helped).\n• Syllable Stress Rules:\n  - Stress is the relative emphasis given to a certain syllable in a word (higher pitch, longer duration, louder volume).\n  - Two-syllable noun vs verb stress shift:\n    * Nouns take FIRST syllable stress: PRO-ject, CON-duct, RE-cord, PRE-sent, EX-port.\n    * Verbs take SECOND syllable stress: pro-JECT, con-DUCT, re-CORD, pre-SENT, ex-PORT.\n  - Words ending in '-tion', '-sion', '-ic' are stressed on the PENULTIMATE (second to last) syllable: edu-CA-tion, pro-TEC-tion, de-CI-sion, scien-TIF-ic.",
    "examples": [
      {
        "id": "ex-jhs2eng-t15-1",
        "title": "Distinguishing Minimal Pairs (/iː/ vs /ɪ/)",
        "problem": "Identify which word contains the long vowel /iː/: (a) ship (b) fit (c) sheep (d) hit.",
        "stepByStepSolution": [
          "Step 1: 'ship', 'fit', and 'hit' contain the short vowel /ɪ/.",
          "Step 2: 'sheep' contains the long vowel /iː/ (/ʃiːp/).",
          "Step 3: Correct answer: (c) sheep."
        ],
        "keyTakeaway": "Minimal pairs like ship/sheep, sit/seat, and live/leave contrast short /ɪ/ with long /iː/."
      },
      {
        "id": "ex-jhs2eng-t15-2",
        "title": "Determining Primary Syllable Stress in Noun-Verb Pairs",
        "problem": "In the sentence: 'The manager decided to exPORT the cocoa products', which syllable in 'export' carries the primary stress?",
        "stepByStepSolution": [
          "Step 1: Determine the grammatical category of 'export' in the context: following 'to', it functions as a VERB.",
          "Step 2: Two-syllable verbs typically place primary stress on the SECOND syllable.",
          "Step 3: Correct pronunciation: ex-PORT (/ɪkˈspɔːt/). (If it were a noun, it would be EX-port)."
        ],
        "keyTakeaway": "Two-syllable words functioning as verbs are stressed on the second syllable; as nouns, on the first."
      }
    ]
  }
];
