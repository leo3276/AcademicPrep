// Ghanaian JHS 2 English Language Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// Complete Notes for all 15 Topics across Terms 1, 2, and 3

import { DetailedNotes } from './types';

export const JHS2_ENGLISH_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs2-eng-t1-phrases-clauses": {
    "topicId": "jhs2-eng-t1-phrases-clauses",
    "title": "Phrases and Clauses: Identification and Functions",
    "overview": "A comprehensive grammatical guide to identifying phrase types (noun, adjectival, adverbial, prepositional) and clause types (independent vs dependent; noun, relative, adverbial clauses), along with their syntactic functions in English sentences.",
    "realWorldContext": "Whether drafting a news report for the school notice board, interpreting questions in a BECE comprehension paper, or analyzing an editorial in the Daily Graphic, understanding how phrases and clauses construct meaning is the bedrock of English mastery.",
    "objectives": [
      "Distinguish fundamentally between a phrase and a clause based on the presence or absence of a finite verb.",
      "Identify noun phrases, adjectival phrases, and adverbial phrases in diverse sentence contexts.",
      "Identify independent and subordinate clauses, including noun clauses, relative (adjectival) clauses, and adverbial clauses.",
      "State accurately the grammatical functions of identified phrases and clauses in BECE-style examination formats."
    ],
    "sections": [
      {
        "title": "1. The Fundamental Distinction: Phrases versus Clauses",
        "content": "Every English sentence is assembled from words grouped into structural units known as phrases and clauses. A phrase is a sequence of related words that lacks a subject-finite verb combination and operates as a unified part of speech. For instance, 'in the scorching afternoon sun' provides adverbial information but contains no finite verb. In contrast, a clause is a syntactic unit containing both a subject and a finite predicate verb.",
        "bulletPoints": [
          "Phrase: Group of related words WITHOUT a subject-finite verb pair ('at the top of the mountain', 'the brilliant young doctor').",
          "Finite Verb: A verb that shows tense (present/past), number (singular/plural), and person (e.g., 'runs', 'walked', 'was studying'). Non-finite forms like infinitives ('to go') or participles without auxiliaries ('walking') do not form clauses on their own.",
          "Clause: Group of words WITH both a subject and a finite verb ('Kwame won the national essay contest', 'because the teacher explained the concept clearly').",
          "Main Test: If you can identify who/what performs the action and the verb carries tense, it is a clause. If it lacks a finite verb, it is a phrase."
        ],
        "keyTakeaway": "A clause contains a subject and a finite verb; a phrase does not.",
        "realWorldExample": "'Across the Volta River' is a phrase; 'When the ferry crossed the Volta River' is a clause because it has a subject ('the ferry') and a finite verb ('crossed')."
      },
      {
        "title": "2. Types and Functions of Grammatical Phrases",
        "content": "Phrases are classified by their headword and grammatical behavior into noun phrases, adjectival phrases, adverbial phrases, and prepositional phrases. In BECE exams, questions frequently underline a phrase and demand: (a) What is the grammatical name? (b) What is its grammatical function?",
        "bulletPoints": [
          "Noun Phrase (NP): Centered on a noun or pronoun. Functions: Subject of a verb ('The hardworking cassava farmer harvested ten bags'), Direct Object ('We met the new science master'), or Subject Complement ('Mrs. Mensah is our school principal').",
          "Adjectival Phrase (AdjP): Modifies a noun or pronoun, describing its qualities ('The lady in the red kente dress smiled warmly' modifies 'The lady').",
          "Adverbial Phrase (AdvP): Modifies a verb, adjective, or adverb, indicating time ('early this morning'), place ('under the baobab tree'), manner ('with fearless determination'), or frequency ('three times a week').",
          "Prepositional Phrase: Formed by a preposition + noun phrase object. Functions adjectivally when describing nouns, or adverbially when describing actions."
        ],
        "keyTakeaway": "To determine a phrase's function, ask what other word in the sentence it describes or relates to.",
        "realWorldExample": "In 'The students listened with rapt attention', 'with rapt attention' is an adverbial phrase of manner modifying the verb 'listened'."
      },
      {
        "title": "3. Classification of Clauses: Independent vs Subordinate",
        "content": "Clauses are either independent (main) or dependent (subordinate). An independent clause expresses a complete, standalone thought and can stand alone as a simple sentence. A subordinate clause begins with a subordinating conjunction (because, although, if, unless, while, since) or a relative pronoun (who, whom, whose, which, that) and cannot stand alone without an accompanying main clause.",
        "bulletPoints": [
          "Independent Clause: Complete predication ('The football team celebrated their victory').",
          "Subordinate (Dependent) Clause: Incomplete without the main clause ('after they defeated their archrivals').",
          "Noun Clause: Functions like a noun — as subject ('What the doctor recommended must be followed'), direct object ('I discovered that the door was locked'), or subject complement ('The truth is that we arrived late').",
          "Adjectival (Relative) Clause: Modifies an antecedent noun or pronoun ('The boy whose father is a police commander won the prize' modifies 'The boy').",
          "Adverbial Clause: Modifies a verb, answering when (time), where (place), how (manner), why (reason), on what condition (condition), or despite what (concession)."
        ],
        "keyTakeaway": "Subordinate clauses are dependent and always perform noun, adjectival, or adverbial roles within the larger sentence.",
        "realWorldExample": "In 'Although the road was muddy, the trotro reached Cape Coast safely', 'Although the road was muddy' is a subordinate adverbial clause of concession modifying 'reached'."
      },
      {
        "title": "4. Answering BECE Grammatical Name and Function Questions",
        "content": "In BECE English Section B (Comprehension), question (h) or (i) almost invariably asks candidates to state the grammatical name and function of an underlined expression from the passage. Standard precision is mandatory to earn full marks.",
        "bulletPoints": [
          "Step 1: Check if the underlined expression has a finite verb. If YES -> it is a CLAUSE. If NO -> it is a PHRASE.",
          "Step 2: Determine its specific type (e.g., 'Noun clause', 'Adjectival clause', 'Adverbial clause of time', 'Adverbial phrase of manner').",
          "Step 3: State the exact function using standard grammatical formula: 'Subject of the verb [verb]', 'Object of the verb [verb]', 'Modifies the noun [noun]', or 'Modifies the verb [verb]'.",
          "Common Pitfall: Never write 'It qualifies the verb' (verbs are modified, not qualified) and never omit the specific target word being modified!"
        ],
        "keyTakeaway": "Adjectives/Adjectival clauses MODIFY nouns; Adverbs/Adverbial clauses MODIFY verbs.",
        "realWorldExample": "Expression: 'where the gold was discovered'. Grammatical Name: Adverbial Clause of Place. Function: Modifies the verb 'settled'."
      }
    ],
    "commonMistakes": [
      "Confusing a phrase with a clause by assuming any long group of words is automatically a clause.",
      "Stating that a relative clause modifies a verb instead of its antecedent noun.",
      "Failing to write both the grammatical name and grammatical function as two distinct parts in BECE Section A questions.",
      "Treating prepositional phrases as clauses even though they lack a finite verb."
    ],
    "beceExamTips": [
      "Always write both the specific name and the precise function in separate, clearly labeled lines.",
      "Remember that relative clauses introduced by 'who', 'which', and 'that' are adjectival clauses that modify the preceding noun.",
      "Clauses starting with 'that' after verbs of thinking/saying (e.g. said, knew, thought) are Noun Clauses functioning as object of the verb."
    ],
    "summaryChecklist": [
      "Can you differentiate between a phrase and a clause?",
      "Can you identify noun, adjectival, and adverbial phrases?",
      "Can you identify independent, noun, relative, and adverbial clauses?",
      "Can you state the grammatical function of any underlined clause or phrase with 100% precision?"
    ],
    "introduction": "A comprehensive grammatical guide to identifying phrase types (noun, adjectival, adverbial, prepositional) and clause types (independent vs dependent; noun, relative, adverbial clauses), along with their syntactic functions in English sentences."
  },
  "jhs2-eng-t2-complex-sentences": {
    "topicId": "jhs2-eng-t2-complex-sentences",
    "title": "Sentence Types & Structure: Simple, Compound & Complex",
    "overview": "Master the structural taxonomy of English sentences: simple sentences with single independent clauses, compound sentences with coordinating conjunctions (FANBOYS), complex sentences with subordinating conjunctions, and compound-complex sentences.",
    "realWorldContext": "Writing varied and sophisticated sentences transforms a student's BECE composition from monotonous and repetitive into an engaging, high-scoring essay. Skilled writers blend simple punchy statements with elegant complex sentences.",
    "objectives": [
      "Identify and construct simple sentences with single subjects and predicates.",
      "Construct compound sentences using coordinating conjunctions and appropriate punctuation.",
      "Formulate complex sentences with independent and subordinate clauses using diverse subordinating conjunctions.",
      "Identify compound-complex sentences and vary sentence structures across narrative and argumentative essays."
    ],
    "sections": [
      {
        "title": "1. The Anatomy of a Simple Sentence",
        "content": "A simple sentence consists of exactly one independent clause. It contains a subject (the person, place, or thing performing or receiving the action) and a predicate (which contains the finite verb stating what the subject does, feels, or is). A simple sentence may have compound subjects ('Kofi and Ama') or compound verbs ('sang and danced'), but as long as it has only one independent clause structure, it remains a simple sentence.",
        "bulletPoints": [
          "Definition: One independent clause expressing a complete idea.",
          "Single Subject + Single Verb: 'The bell rang.'",
          "Compound Subject + Single Verb: 'The teachers and the headmaster attended the workshop.'",
          "Single Subject + Compound Verb: 'The mechanic inspected the engine and changed the oil.'",
          "Punctuation: Concludes with a full stop, question mark, or exclamation mark; contains no conjunction joining two separate clauses."
        ],
        "keyTakeaway": "A simple sentence contains only ONE independent clause, regardless of how many descriptive phrases or modifiers it holds.",
        "realWorldExample": "'The dedicated community health nurse in our rural clinic vaccinated fifty children today' is a simple sentence."
      },
      {
        "title": "2. Compound Sentences and Coordinating Conjunctions (FANBOYS)",
        "content": "A compound sentence contains two or more independent clauses joined together as equals. Because both clauses could stand alone as complete sentences, they are connected using a comma followed by a coordinating conjunction, or linked directly by a semicolon.",
        "bulletPoints": [
          "The FANBOYS Conjunctions: For (reason), And (addition), Nor (negative alternative), But (contrast), Or (choice), Yet (unexpected contrast), So (result).",
          "Formula: Independent Clause + Comma + Coordinating Conjunction + Independent Clause.",
          "Example: 'The rain poured continuously for hours, but the soccer match was not postponed.'",
          "Semicolon Usage: Two closely related independent clauses can be joined without a conjunction using a semicolon: 'The library was completely silent; everyone was focused on their books.'",
          "Common Error: The 'Comma Splice' — joining two independent clauses with only a comma and no conjunction ('The sun rose, we went to the farm' is WRONG; use 'The sun rose, and we went to the farm')."
        ],
        "keyTakeaway": "Join independent clauses with a comma and a FANBOYS conjunction, or use a semicolon. Never use a comma alone.",
        "realWorldExample": "'Kofi saved his weekly allowance, so he was able to purchase a scientific calculator for the BECE.'"
      },
      {
        "title": "3. Complex Sentences and Subordinating Conjunctions",
        "content": "A complex sentence combines one independent clause with one or more dependent (subordinate) clauses. The dependent clause begins with a subordinating conjunction or relative pronoun and depends on the main clause for complete meaning. Complex sentences allow writers to show nuanced relationships such as cause-and-effect, time sequence, condition, and concession.",
        "bulletPoints": [
          "Subordinating Conjunctions of Time: when, while, before, after, as soon as, until ('As soon as the siren sounded, the miners evacuated').",
          "Subordinating Conjunctions of Cause/Reason: because, since, as ('Since you have completed your chores, you may watch television').",
          "Subordinating Conjunctions of Concession/Contrast: although, even though, while, whereas ('Although she was exhausted, she finished the project').",
          "Subordinating Conjunctions of Condition: if, unless, provided that ('Unless you study diligently, you will not achieve a distinction').",
          "Punctuation Rule: If the dependent clause comes FIRST, place a comma after it. If the independent clause comes first, NO comma is required."
        ],
        "keyTakeaway": "Dependent clause first = comma after it; Independent clause first = usually no comma.",
        "realWorldExample": "'Although the harmattan was dry and dusty, the market women continued their trading.'"
      },
      {
        "title": "4. Compound-Complex Sentences and Sentence Variety",
        "content": "A compound-complex sentence features at least two independent clauses joined by a coordinating conjunction, plus at least one dependent clause. Mastering this structure allows students to synthesize complex thoughts smoothly in their essays.",
        "bulletPoints": [
          "Structure: Independent Clause + Independent Clause + Dependent Clause (in any logical order).",
          "Example: 'While the teacher was writing on the chalkboard [dependent], Kwame dropped his ruler [independent], and the entire class burst into laughter [independent].'",
          "Stylistic Value: Avoid writing entire essays using only short simple sentences (which sounds childish) or only long rambling complex sentences (which causes grammatical confusion).",
          "BECE Essay Strategy: Deliberately vary your sentence lengths. Open paragraphs with medium complex sentences, explain points with compound structures, and emphasize key arguments with short, punchy simple sentences."
        ],
        "keyTakeaway": "A balanced essay artfully mixes simple, compound, and complex sentences to maintain rhythm and reader interest.",
        "realWorldExample": "'Because Akosua worked diligently, she passed the BECE with nine ones, and her proud parents bought her a computer.'"
      }
    ],
    "commonMistakes": [
      "Using a coordinating conjunction ('and', 'but') to introduce a subordinate clause in a complex sentence.",
      "Omitting the comma when a complex sentence begins with a subordinate adverbial clause.",
      "Confusing compound sentences (joined by FANBOYS) with complex sentences (joined by subordinators like 'although', 'because').",
      "Writing sentence fragments by leaving a subordinate clause stranded alone without a main clause."
    ],
    "beceExamTips": [
      "Never start a sentence with 'Although' and put 'but' in the middle. Choose either 'Although' OR 'but', never both.",
      "Check your essay for sentence variety: ensure you have compound and complex sentences rather than just simple sentences.",
      "Remember FANBOYS: For, And, Nor, But, Or, Yet, So are the only true coordinating conjunctions."
    ],
    "summaryChecklist": [
      "Can you identify a simple sentence with compound subjects or verbs?",
      "Can you punctuate compound sentences correctly with commas and FANBOYS?",
      "Can you formulate complex sentences with correct comma placement?",
      "Can you construct compound-complex sentences for essay writing?"
    ],
    "introduction": "Master the structural taxonomy of English sentences: simple sentences with single independent clauses, compound sentences with coordinating conjunctions (FANBOYS), complex sentences with subordinating conjunctions, and compound-complex sentences."
  },
  "jhs2-eng-t3-informal-letters": {
    "topicId": "jhs2-eng-t3-informal-letters",
    "title": "Composition: Informal and Semi-Formal Letters",
    "overview": "Master the conventions, layout, conversational tone, paragraph structuring, and subscriptions for informal letters written to relatives and peers, and semi-formal letters to acquaintances in the BECE format.",
    "realWorldContext": "Writing letters remains an essential personal and social skill. In the BECE English Language Paper 2, Section A regularly features an informal letter carrying 30 marks out of 50, where correct format and engaging tone earn top scores.",
    "objectives": [
      "Set out the correct layout of an informal letter (single address, date, informal salutation, body paragraphs, and informal subscription).",
      "Adopt a lively, friendly, conversational tone with appropriate contractions and idiomatic expressions.",
      "Organize ideas coherently into introduction, well-developed body paragraphs, and a warm conclusion.",
      "Distinguish between informal and semi-formal letter conventions in vocabulary and formality."
    ],
    "sections": [
      {
        "title": "1. The Structural Layout of an Informal Letter",
        "content": "An informal letter follows a clear, traditional structural template. Unlike formal letters, an informal letter requires only ONE address — the writer's address, located at the top right-hand corner of the page, followed immediately by the date.",
        "bulletPoints": [
          "Writer's Address: Positioned at the top right corner. Written in block or indented style (e.g., 'Methodist Basic School, / P.O. Box 45, / Koforidua, / Eastern Region.').",
          "Date: Placed directly below the address (e.g., '24th September, 2026.'). Avoid slang or abbreviated formats like '24/9/26'.",
          "Salutation: Placed on the left margin, one line below the date level. Use the recipient's first name or familiar relation: 'Dear Kwame,', 'Dear Auntie Akua,', 'Dear Mother,'. Always end the salutation with a comma.",
          "Punctuation Consistency: If you punctuate the address lines with commas and end with a full stop, maintain this throughout. If you use unpunctuated block style, be consistent."
        ],
        "keyTakeaway": "An informal letter has only one address at the top right, followed by the date, and an informal salutation on the left.",
        "realWorldExample": "Address: 'Presby Junior High School, / P.O. Box 112, / Akropong-Akuapem. / 24th September, 2026.'"
      },
      {
        "title": "2. Crafting the Opening and Concluding Paragraphs",
        "content": "The opening paragraph sets the emotional atmosphere. It should begin with genuine inquiries about the recipient's health and wellbeing, acknowledge recent events or previous letters, and smoothly transition to the primary purpose of writing.",
        "bulletPoints": [
          "Opening Strategies: Greet warmly ('How are you and everyone at home? I hope this letter finds you in good health and high spirits').",
          "Acknowledge Correspondence: Reference recent interactions ('Thank you so much for the wonderful birthday present you sent me through Uncle Kofi').",
          "State Purpose Naturally: 'The reason I am writing to you today is to share some exciting news about our school's regional cultural competition.'",
          "Avoid Stale Clichés: Avoid dull openings like 'I am writing this letter with pen in hand and paper on table'!",
          "Conclusion: Bring the letter to a warm, natural close ('Please extend my warmest regards to Grandma and little Esi. I look forward to hearing from you soon')."
        ],
        "keyTakeaway": "Start with warm personal greetings and a clear purpose; conclude with affectionate regards and an expectation of a reply.",
        "realWorldExample": "Opening: 'It was such a delight receiving your letter last Tuesday. I was thrilled to hear that you were selected for the regional athletics festival!'"
      },
      {
        "title": "3. Body Paragraphs and Conversational Register",
        "content": "The body of an informal letter typically spans two to three well-structured paragraphs. Each paragraph should address a specific aspect of the topic prompt. The language should reflect a warm, natural spoken tone while adhering to grammatical correctness.",
        "bulletPoints": [
          "Conversational Tone: Write as if speaking directly to a close friend over a cup of cocoa.",
          "Permitted Informal Features: Contractions (I'm, can't, wouldn't, we've), rhetorical questions ('Can you believe it?'), exclamations, and friendly banter are encouraged.",
          "Paragraph Unity: Every paragraph must have a clear central topic sentence, supported by vivid personal details and descriptions.",
          "Transitional Connectors: Use casual, conversational transitions: 'By the way,', 'You won't believe what happened next,', 'On another note,', 'As for our holiday plans,'."
        ],
        "keyTakeaway": "Use lively, natural language with contractions and personal details, but maintain correct grammar and punctuation.",
        "realWorldExample": "'You know how much I love playing football, but when Coach Mensah appointed me captain, my heart skipped a beat with excitement!'"
      },
      {
        "title": "4. Subscription (Valediction) and Semi-Formal Variations",
        "content": "The sign-off in an informal letter must match the close relationship shared with the recipient. It is positioned at the right-hand side (or left margin in modern block formats) below the conclusion.",
        "bulletPoints": [
          "Informal Subscriptions: 'Yours sincerely,', 'Yours affectionately,', 'Your loving cousin,', 'Your best friend,'.",
          "Capitalization & Punctuation: Capitalize only the first word ('Yours', not 'sincerely'), and end with a comma ('Yours sincerely,').",
          "First Name Only: Sign off with your first name ONLY (e.g., 'Kwame' or 'Ama'). Never include your surname, signature, or title!",
          "Semi-Formal Letters: Written to respected adults (e.g., an older family friend, a former teacher, a landlord). Salutation: 'Dear Mr. Addo,'. Tone is polite, respectful, and restrained. Subscription: 'Yours sincerely,' followed by first name and surname ('Kwame Mensah')."
        ],
        "keyTakeaway": "Informal letters end with 'Yours sincerely,' or 'Your loving friend,' followed by your first name only.",
        "realWorldExample": "Sign-off:\nYours affectionately,\nKofi"
      }
    ],
    "commonMistakes": [
      "Including the recipient's address in an informal letter (informal letters must have only ONE address — the writer's).",
      "Signing off with 'Yours faithfully' instead of 'Yours affectionately', 'Yours ever', or 'Your friend'.",
      "Writing full surname signatures; in informal letters, only first name or nickname should be used.",
      "Using excessively official and stiff jargon when writing to a close classmate or sibling."
    ],
    "beceExamTips": [
      "Make sure you answer all aspects of the BECE question prompt (e.g. if asked to give three reasons, devote a full paragraph to each reason).",
      "Use contractions (I'll, didn't, couldn't) to demonstrate natural informal register.",
      "Check that your date contains the day, month, and year written out in full (e.g., 24th September, 2026)."
    ],
    "summaryChecklist": [
      "Did you write one address at the top right followed by the full date?",
      "Did you write an informal salutation with a comma ('Dear Kwame,')?",
      "Does the letter have a warm introduction, 2-3 body paragraphs, and a friendly conclusion?",
      "Did you sign off with 'Yours sincerely,' and your first name only?"
    ],
    "introduction": "Master the conventions, layout, conversational tone, paragraph structuring, and subscriptions for informal letters written to relatives and peers, and semi-formal letters to acquaintances in the BECE format."
  },
  "jhs2-eng-t4-reading-comprehension": {
    "topicId": "jhs2-eng-t4-reading-comprehension",
    "title": "Reading Comprehension: Skimming, Scanning & Inference",
    "overview": "Develop advanced reading strategies: rapid skimming for central themes, precision scanning for specific factual evidence, contextual vocabulary decoding, and drawing valid deductive inferences from unseen passages.",
    "realWorldContext": "Comprehension constitutes Section B of BECE English Paper 2 (carrying 30 marks) and appears in Paper 1 objective questions. Strong comprehension skills are also crucial for reading textbooks, legal documents, news reports, and instructional manuals in adult life.",
    "objectives": [
      "Apply skimming techniques to determine the main theme, author's purpose, and general outline of an unseen text.",
      "Utilize scanning strategies to locate dates, names, figures, and specific factual details quickly.",
      "Make valid logical inferences from subtle contextual clues and figurative descriptions.",
      "Infer the contextual meanings of unfamiliar words and replace them with grammatically equivalent synonyms."
    ],
    "sections": [
      {
        "title": "1. The Three Reading Speeds: Skimming, Scanning, and Deep Reading",
        "content": "Proficient readers adjust their reading velocity depending on the objective. Reading every single word at the same slow pace causes mental exhaustion and poor time management in examinations. Mastering the three tiers of reading speed is indispensable.",
        "bulletPoints": [
          "Skimming (Rapid Overview): Reading at 400–600 words per minute. Read the title, the entire first paragraph, the first and last sentences of body paragraphs, and the concluding paragraph to identify the main idea.",
          "Scanning (Targeted Search): Looking for a specific piece of information (e.g., 'What year was the castle built?'). Sweep your eyes across the page searching specifically for capital letters, numbers, or key phrases without reading entire sentences.",
          "Deep (Close) Reading: Used when analyzing complex arguments, inferring author's attitude or tone, and examining specific sentences targeted by difficult comprehension questions.",
          "Exam Strategy: First, read the passage questions. Next, skim the passage to get the gist. Finally, read the target paragraphs closely to formulate accurate answers."
        ],
        "keyTakeaway": "Read the comprehension questions first, skim the passage for overall context, then scan to locate exact answers.",
        "realWorldExample": "Looking up a phone number in a directory is scanning; browsing newspaper headlines is skimming; studying a recipe is deep reading."
      },
      {
        "title": "2. Answering Factual vs Inferential Comprehension Questions",
        "content": "Comprehension questions in the BECE fall into two major categories: factual questions and inferential questions. Discerning which type you are answering determines whether you look for directly stated facts or deduce implied meaning.",
        "bulletPoints": [
          "Factual (Direct) Questions: The answer is explicitly stated in the passage text ('According to the passage, what did Kofi eat?'). Always answer in your own words — never lift complete sentences directly from the text verbatim!",
          "Inferential (Indirect) Questions: The answer is NOT explicitly stated; you must read between the lines. Keywords in the prompt include 'What suggests that...', 'Why do you think...', 'What was the author's attitude towards...'.",
          "Evidence-Based Deduction: Support your inference by citing clues from the text without making wild, unsupported guesses.",
          "Sentence Structure in Answers: Write grammatically complete, concise sentences starting with a capital letter and ending with a full stop."
        ],
        "keyTakeaway": "Factual questions require rephrasing explicit text; inferential questions require logical deduction from textual evidence.",
        "realWorldExample": "If a text states 'Kofi shuddered and pulled his blanket up to his chin as shadows danced on the wall', we infer that Kofi was frightened, even though the word 'frightened' does not appear."
      },
      {
        "title": "3. Contextual Vocabulary Replacement",
        "content": "In BECE comprehension, question (g) usually gives five or six words underlined in the passage and instructs: 'For each of the following words, give another word or phrase that means the same and can replace it in the passage.' This tests contextual synonymy, not mere dictionary definitions.",
        "bulletPoints": [
          "Context is Supreme: A word can have multiple meanings; you must choose the meaning that fits the exact sentence in the passage.",
          "Grammatical Class Consistency: Your replacement MUST be the exact same part of speech:\n  - Noun replaced by Noun ('prosperity' -> 'wealth').\n  - Verb replaced by Verb in the SAME TENSE ('retreated' [past] -> 'withdrew' [past], not 'withdraw').\n  - Adjective replaced by Adjective ('gigantic' -> 'enormous').\n  - Adverb replaced by Adverb ('swiftly' -> 'rapidly').\n  - Singular replaced by Singular; Plural replaced by Plural.",
          "Substitution Check: Always substitute your chosen synonym into the original sentence to verify that the sentence flows smoothly and retains its original meaning."
        ],
        "keyTakeaway": "A replacement word must match the target word in meaning, part of speech, number, and grammatical tense.",
        "realWorldExample": "If 'novel' in the text describes 'a novel approach to cassava farming', replacing it with 'story book' is wrong; the correct replacement is 'new', 'innovative', or 'original'."
      },
      {
        "title": "4. Avoiding Verbatim Lifting and Scoring Full Marks",
        "content": "The chief examiner's report for BECE English repeatedly notes that thousands of candidates lose easy marks by copying whole sentences verbatim from the passage. WAEC penalizes mindless copying because it shows a failure of comprehension.",
        "bulletPoints": [
          "The Trap of Verbatim Copying: Copying an entire 3-line sentence often includes extraneous, irrelevant details that dilute or contradict the actual answer, leading to zero marks.",
          "Paraphrasing Technique: Read the relevant sentence, look away from the text, ask yourself 'What does this mean in plain language?', and write down the core fact in your own words.",
          "Direct Precision: Do not write unnecessary introductory padding like 'The answer to number two is that...'. State the answer directly.",
          "Spelling & Punctuation: Ensure proper nouns from the passage are capitalized and words are spelled correctly. Misspelled words that change meaning lose marks."
        ],
        "keyTakeaway": "Paraphrase answers concisely in your own words; verbatim lifting is heavily penalized by BECE examiners.",
        "realWorldExample": "Passage: 'Due to severe pecuniary embarrassment, the trader was unable to restock.' Answer: 'The trader could not buy more goods because he lacked money.'"
      }
    ],
    "commonMistakes": [
      "Copying verbatim full sentences from the passage instead of answering concisely in candidate's own words.",
      "Confusing literal factual recall with inferential reasoning.",
      "Replacing vocabulary words with synonyms that do not match the grammatical part of speech and tense in the passage.",
      "Failing to read questions carefully before scouring the passage for keywords."
    ],
    "beceExamTips": [
      "Give only ONE clear, definitive replacement word for each vocabulary item.",
      "Always read the comprehension questions BEFORE reading the passage so your brain knows what to search for.",
      "Check your answers to ensure each is written as a complete, grammatically correct sentence."
    ],
    "summaryChecklist": [
      "Do you know when to skim, when to scan, and when to read deeply?",
      "Can you answer factual questions without verbatim lifting?",
      "Can you make valid inferences supported by contextual clues?",
      "Can you provide contextual synonyms that match the target word's exact part of speech and tense?"
    ],
    "introduction": "Develop advanced reading strategies: rapid skimming for central themes, precision scanning for specific factual evidence, contextual vocabulary decoding, and drawing valid deductive inferences from unseen passages."
  },
  "jhs2-eng-t5-figures-of-speech": {
    "topicId": "jhs2-eng-t5-figures-of-speech",
    "title": "Literature: Figures of Speech & Literary Devices",
    "overview": "Understand figurative language and literary devices: similes, metaphors, personification, hyperbole, situational and verbal irony, alliteration, onomatopoeia, and symbolism in poetry, drama, and African prose.",
    "realWorldContext": "Figurative language gives life and color to storytelling, public speaking, poetry, and everyday proverbs in Ghanaian culture. Recognizing these devices helps students unlock deeper layers of meaning in literary texts and BECE questions.",
    "objectives": [
      "Identify and analyze similes and metaphors in written texts, explaining the basis of comparison.",
      "Identify personification and explain how human attributes bring inanimate objects to life.",
      "Recognize hyperbole, irony, alliteration, and onomatopoeia, articulating their literary effects.",
      "Interpret symbolic and figurative language in African poetry and prose passages."
    ],
    "sections": [
      {
        "title": "1. Comparisons: Simile versus Metaphor",
        "content": "Writers use comparison to explain the unfamiliar by relating it to something familiar. The two primary comparative figures of speech are the simile and the metaphor. While both draw comparisons between two fundamentally dissimilar entities, they do so through different linguistic mechanisms.",
        "bulletPoints": [
          "Simile: An explicit, direct comparison between two unlike things using comparative linking words such as 'like' or 'as'.\n  - Examples: 'The warrior fought like a wounded leopard', 'Her laughter was as refreshing as morning dew', 'He ran like the wind'.",
          "Metaphor: An implicit, direct equation between two unlike things WITHOUT using 'like' or 'as'. One entity is spoken of as if it literally WERE the other.\n  - Examples: 'Kwame is a rock in times of trouble', 'The classroom was a boiling cauldron of noise', 'Life is a journey'.",
          "Analyzing the Comparison: In examinations, always identify what is being compared to what, and what shared characteristic links them (e.g., in 'He is a lion', a man is compared to a lion for his courage or ferocity)."
        ],
        "keyTakeaway": "A simile uses 'like' or 'as' for comparison; a metaphor makes a direct equation without comparison words.",
        "realWorldExample": "'Her words were soothing balm to his troubled mind' is a metaphor comparing comforting words to healing ointment."
      },
      {
        "title": "2. Personification: Giving Life to the Inanimate",
        "content": "Personification is a literary device in which human characteristics, emotions, intentions, or bodily actions are attributed to non-human things, animals, inanimate objects, or abstract concepts. It allows writers to evoke powerful emotional resonance and vivid imagery.",
        "bulletPoints": [
          "Attributing Human Actions: 'The fierce waves swallowed the fishing boat', 'The angry sun glared down on the parched fields'.",
          "Attributing Human Emotions: 'The cruel harmattan wind showed no mercy to our dry skin', 'The flowers danced joyfully in the morning breeze'.",
          "Attributing Speech: 'Death knocked quietly at his door', 'Opportunity whispered in his ear'.",
          "Effect on the Reader: Personification creates relatable imagery by allowing human readers to empathize with nature, environments, and abstract forces."
        ],
        "keyTakeaway": "Personification endows non-human entities, objects, or ideas with human feelings, gestures, or actions.",
        "realWorldExample": "'The old truck coughed and groaned as it struggled up the steep Aburi hill' personifies the motor vehicle with human vocal sounds of distress."
      },
      {
        "title": "3. Hyperbole and Irony: Exaggeration and Incongruity",
        "content": "Writers employ hyperbole and irony to provoke thought, evoke humor, or deliver biting social critique. Both devices play with the divergence between literal words and intended meaning.",
        "bulletPoints": [
          "Hyperbole: Deliberate, conscious, and extreme exaggeration not intended to be taken literally, used for dramatic emphasis or comic effect.\n  - Examples: 'I have waited for you for an eternity!', 'The sack of cassava weighed a million tons', 'He wept a river of tears'.",
          "Verbal Irony: When a speaker says one thing but means the exact opposite, often with a sarcastic undertone (e.g., stepping into a messy, dirty room and saying 'What a spotless palace!').",
          "Situational Irony: An unexpected paradox where the actual result of an action is the direct antithesis of what was logically intended or anticipated (e.g., an armed policeman being robbed by unarmed pickpockets).",
          "Dramatic Irony: In drama, when the audience knows a crucial secret that the character on stage is completely unaware of."
        ],
        "keyTakeaway": "Hyperbole magnifies through extreme exaggeration; Irony creates a striking contrast between expectation and reality.",
        "realWorldExample": "'The marriage counselor filed for divorce on his wedding anniversary' is a classic example of situational irony."
      },
      {
        "title": "4. Sound Devices: Alliteration and Onomatopoeia",
        "content": "Poets and dramatists carefully select words not only for their semantic meaning, but for their acoustic texture. Sound devices contribute musicality, rhythm, and auditory sensory vividness to literature.",
        "bulletPoints": [
          "Alliteration: The repetition of identical consonant sounds at the beginning of closely placed words or stressed syllables.\n  - Examples: 'Peter Piper picked a peck of pickled peppers', 'The silver snake slithered smoothly through the swamp' (repetition of /s/ sound creates a hissing effect).",
          "Assonance: The repetition of identical vowel sounds within nearby words ('The rain in Spain falls mainly on the plain').",
          "Onomatopoeia: Words that imitate or phonetically mimic the natural acoustic sound they describe.\n  - Animal sounds: 'buzz', 'chirp', 'bleat', 'roar', 'croak'.\n  - Action/impact sounds: 'bang', 'crash', 'thud', 'splash', 'drizzle', 'screech'.",
          "Function in Poetry: Enhances musical rhythm and allows readers to 'hear' the scene taking place."
        ],
        "keyTakeaway": "Alliteration repeats initial consonant sounds; Onomatopoeia uses words that sound like what they mean.",
        "realWorldExample": "'The dry leaves rustled and crackled underfoot as the heavy raindrops splashed onto the tin roof' uses onomatopoeia ('rustled', 'crackled', 'splashed')."
      }
    ],
    "commonMistakes": [
      "Confusing metaphors with similes (similes explicitly use 'like' or 'as'; metaphors make direct comparisons without 'like/as').",
      "Misidentifying personification when non-human things are given human physical or emotional traits.",
      "Confusing hyperbole (intentional exaggeration for effect) with factual truth.",
      "Calling an oxymoron an alliteration."
    ],
    "beceExamTips": [
      "When an exam question asks 'What figure of speech is used in line 3?', name the device clearly (e.g., 'Personification').",
      "If the question asks 'What does it mean?', explain the literal meaning (e.g., 'It means the wind was blowing very forcefully').",
      "Watch out for onomatopoeic words like 'buzz', 'bang', 'hiss', 'clatter' — they frequently appear in BECE poetry questions."
    ],
    "summaryChecklist": [
      "Can you distinguish between a simile and a metaphor with confidence?",
      "Can you identify examples of personification in poetry and prose?",
      "Do you understand the difference between hyperbole and irony?",
      "Can you spot alliteration and onomatopoeia in a stanza of poetry?"
    ],
    "introduction": "Understand figurative language and literary devices: similes, metaphors, personification, hyperbole, situational and verbal irony, alliteration, onomatopoeia, and symbolism in poetry, drama, and African prose."
  },
  "jhs2-eng-t6-modal-auxiliaries": {
    "topicId": "jhs2-eng-t6-modal-auxiliaries",
    "title": "Auxiliary Verbs & Modals: Functions and Usage",
    "overview": "A thorough examination of English auxiliary verbs: primary auxiliaries (be, do, have) and modal auxiliaries (can, could, may, might, shall, should, will, would, must, ought to), exploring their roles in expressing ability, permission, obligation, possibility, and condition.",
    "realWorldContext": "Modals govern the subtlety of human interaction — deciding whether an instruction is a friendly suggestion ('You should revise') or an imperative rule ('You must wear a helmet'). Using modals correctly ensures clarity in formal communication and exam writing.",
    "objectives": [
      "Differentiate between primary auxiliary verbs and modal auxiliary verbs.",
      "Select and use appropriate modals to express ability, permission, probability, and certainty.",
      "Express varying degrees of obligation, necessity, and advice using 'must', 'have to', 'should', and 'ought to'.",
      "Apply the bare infinitive rule following modal verbs in sentence construction."
    ],
    "sections": [
      {
        "title": "1. Primary Auxiliaries versus Modal Auxiliaries",
        "content": "Auxiliary verbs are helping verbs that precede main verbs in verb phrases. Primary auxiliaries ('be', 'do', 'have') can also serve as independent main verbs in sentences. In contrast, modal auxiliaries are defective verbs: they never change their form for third-person singular (no -s ending), have no participle forms (-ing or -ed), and must always be followed by the base form of another verb.",
        "bulletPoints": [
          "Primary Auxiliaries:\n  - 'be' (am, is, are, was, were, been, being): Forms continuous tenses ('He is writing') and passive voice ('The car was repaired').\n  - 'do' (do, does, did): Forms questions ('Do you understand?'), negatives ('I do not know'), and emphatic statements ('I did study!').\n  - 'have' (have, has, had): Forms perfect tenses ('They have completed their project').",
          "Modal Auxiliaries: can, could, may, might, shall, should, will, would, must, ought to.",
          "Core Modal Property: Never add '-s' for he/she/it! We say 'He can run', NEVER 'He cans run'.",
          "Bare Infinitive Rule: Modals take the base infinitive without 'to' ('She must leave', not 'She must to leave'). Exception: 'ought to'."
        ],
        "keyTakeaway": "Primary auxiliaries form tenses and voices; modal auxiliaries express attitudes like permission, ability, and obligation.",
        "realWorldExample": "'Kwame HAS a bicycle' ('has' is a main verb); 'Kwame HAS washed his bicycle' ('has' is a primary auxiliary)."
      },
      {
        "title": "2. Modals of Ability and Permission: Can, Could, May",
        "content": "Expressing what someone is capable of doing or seeking authorization requires careful selection between 'can', 'could', and 'may'. The choice conveys both grammatical time and social degree of politeness.",
        "bulletPoints": [
          "Ability:\n  - 'Can' expresses present or general ability: 'Kofi can speak three Ghanaian languages fluently.'\n  - 'Could' expresses past general ability: 'My grandfather could walk ten miles a day when he was young.'\n  - 'Be able to' is used when forming future ability: 'After this course, you will be able to code.'",
          "Permission:\n  - 'May' is formal and polite: 'May I submit my assignment tomorrow, sir?'\n  - 'Can' is informal: 'Can I borrow your pen, Kwame?'\n  - 'Could' is polite and tentative: 'Could I use your phone for a brief moment?'",
          "Granting/Refusing Permission: 'Yes, you may' or 'No, you may not' (formal); 'Yes, you can' or 'No, you can't' (informal)."
        ],
        "keyTakeaway": "'Can' expresses ability and informal permission; 'May' expresses formal, polite permission.",
        "realWorldExample": "A student asks a headmaster: 'May I enter the office, sir?' (Correct polite register using 'may')."
      },
      {
        "title": "3. Modals of Obligation and Necessity: Must, Have to, Should, Ought to",
        "content": "Commands, rules, moral duties, and advisory recommendations are expressed with varying degrees of force using modals of obligation.",
        "bulletPoints": [
          "Must (Absolute Necessity / Legal Obligation): Represents a strong internal conviction or statutory rule from an authority ('Candidates must write their index numbers clearly', 'You must not enter without a visitor's pass').",
          "Have to (External Requirement): Expresses obligation imposed by external circumstances ('I have to wear glasses for reading').",
          "Mustn't vs Don't have to:\n  - 'Must not' expresses PROHIBITION (it is forbidden: 'You must not cheat in the exam').\n  - 'Do not have to' expresses ABSENCE OF OBLIGATION (it is optional: 'Tomorrow is a public holiday, so we don't have to go to school').",
          "Should & Ought to (Advice / Moral Duty): Suggests what is wise, desirable, or morally right, but not strictly compulsory ('You should brush your teeth twice daily', 'Citizens ought to keep their surroundings clean')."
        ],
        "keyTakeaway": "'Must' means compulsory; 'Must not' means forbidden; 'Should'/'Ought to' means advised/moral duty.",
        "realWorldExample": "'Drivers must stop at a red traffic light' (compulsory law); 'Drivers should check their tire pressure regularly' (good advice)."
      },
      {
        "title": "4. Modals of Possibility and Probability: May, Might, Will, Would",
        "content": "Modals allow speakers to state how certain they are that an event will happen, ranging from absolute certainty to distant speculation.",
        "bulletPoints": [
          "High Certainty / Prediction (Will): 'The sun will rise at 6:00 a.m. tomorrow.'",
          "Moderate Probability (May): 50% chance ('Take an umbrella; it may rain later this afternoon').",
          "Distant / Weak Possibility (Might): Less than 30% chance ('If we leave early, we might catch the first bus, but traffic is heavy').",
          "Deduction / Logical Certainty (Must vs Can't):\n  - Positive Deduction: 'The lights are on and music is playing; they must be at home.'\n  - Negative Deduction: 'Kofi was in Kumasi this morning; that can't be him across the street!'"
        ],
        "keyTakeaway": "Use 'will' for certainty, 'may' for reasonable probability, and 'might' for weak possibility.",
        "realWorldExample": "'The meteorologist announced that dark clouds are gathering, so it may rain during the soccer match.'"
      }
    ],
    "commonMistakes": [
      "Using 'to' after modal verbs (e.g. saying 'He can to dance' instead of 'He can dance').",
      "Adding '-s' or '-ed' inflections to modal auxiliaries (e.g. 'cans', 'musted').",
      "Confusing 'may' (permission/possibility) with 'can' (innate ability).",
      "Using double modals together such as 'might can' or 'should ought to'."
    ],
    "beceExamTips": [
      "In BECE Section A multiple choice, always check if the following verb has 'to'. If it does, the only valid modal is 'ought' ('You ought to go').",
      "Remember that 'must' has no past tense form; use 'had to' for past obligation ('Yesterday, I had to walk to school').",
      "Negative of 'must' for deduction is 'cannot / can't', NOT 'must not' ('He can't be sixty; he looks so young!')."
    ],
    "summaryChecklist": [
      "Can you distinguish between primary auxiliaries and modal verbs?",
      "Do you know the difference between 'can' and 'may' for permission?",
      "Can you differentiate 'must not' (prohibition) from 'don't have to' (no necessity)?",
      "Do you always use the bare infinitive after modals?"
    ],
    "introduction": "A thorough examination of English auxiliary verbs: primary auxiliaries (be, do, have) and modal auxiliaries (can, could, may, might, shall, should, will, would, must, ought to), exploring their roles in expressing ability, permission, obligation, possibility, and condition."
  },
  "jhs2-eng-t7-direct-indirect-speech": {
    "topicId": "jhs2-eng-t7-direct-indirect-speech",
    "title": "Direct and Reported (Indirect) Speech",
    "overview": "A comprehensive guide to reporting spoken language: transforming direct quotations into reported statements, commands, requests, and questions with systematic tense backshifting, pronoun adjustments, and temporal/spatial adverbial shifts.",
    "realWorldContext": "Journalists reporting parliamentary proceedings, witnesses giving statements in court, and students summarizing interviews all rely heavily on reported speech. Mastery of these rules is frequently tested in BECE English Paper 1 and 2.",
    "objectives": [
      "Distinguish between direct speech and reported (indirect) speech conventions.",
      "Apply systematic tense backshifting when the reporting verb is in the past tense.",
      "Transform personal pronouns, possessives, demonstratives, and adverbs of time and place accurately.",
      "Convert direct questions, commands, and requests into reported speech using appropriate reporting verbs."
    ],
    "sections": [
      {
        "title": "1. Conventions of Direct Speech",
        "content": "Direct speech quotes the exact, verbatim words uttered by the speaker. These words are enclosed within inverted commas (quotation marks), and specific punctuation conventions must be scrupulously observed.",
        "bulletPoints": [
          "Quotation Marks: Single ('...') or double (\"...\") quotation marks enclose the spoken words.",
          "Capitalization: The first word inside the quotation marks always begins with a capital letter: He said, 'We must leave now.'",
          "Comma Placement: A comma separates the reporting clause from the quoted speech: Ama whispered, 'The teacher is coming.'",
          "Punctuation Marks Inside: Full stops, question marks, and exclamation marks belonging to the quote are placed INSIDE the closing quotation mark: 'Where are you going?' asked Kofi.",
          "Split Quotes: If the quotation is broken by a reporting clause: 'I am ready,' said Kwame, 'to take the examination.'"
        ],
        "keyTakeaway": "Direct speech preserves exact spoken words inside quotation marks with proper internal punctuation.",
        "realWorldExample": "The coach shouted, 'Pass the ball to Mensah!'"
      },
      {
        "title": "2. The Rules of Tense Backshifting in Reported Speech",
        "content": "When a reporting verb in the past tense (said, told, stated, replied) introduces the sentence, the tenses of verbs in the reported clause shift backwards into the past.",
        "bulletPoints": [
          "Simple Present -> Simple Past: 'I write poems' -> He said that he wrote poems.",
          "Present Continuous -> Past Continuous: 'I am reading' -> She said that she was reading.",
          "Present Perfect -> Past Perfect: 'I have eaten' -> He said that he had eaten.",
          "Simple Past -> Past Perfect: 'I bought a pen' -> She said that she had bought a pen.",
          "Past Continuous -> Past Perfect Continuous: 'I was sleeping' -> He said that he had been sleeping.",
          "Future 'will' -> 'would'; 'can' -> 'could'; 'may' -> 'might'; 'shall' -> 'should'.",
          "Important Exception — Universal Truths: If the reported statement expresses a scientific fact, universal truth, or permanent law, the present tense is PRESERVED: 'The science teacher said that water boils at 100°C.'"
        ],
        "keyTakeaway": "Shift present tenses to past, and simple past to past perfect, unless reporting a universal truth.",
        "realWorldExample": "Direct: 'I am studying for the BECE,' said Ama. Reported: Ama said that she was studying for the BECE."
      },
      {
        "title": "3. Pronoun, Demonstrative, and Adverbial Shifts",
        "content": "Because reported speech is recounted from a different speaker's perspective, at a different time, and often in a different location, pronouns and temporal/spatial indicators must shift logically.",
        "bulletPoints": [
          "Pronouns & Possessives:\n  - 1st Person: I -> he/she; me -> him/her; my -> his/her; mine -> his/hers; we -> they; us -> them; our -> their.\n  - 2nd Person (You): Depends on who was addressed (e.g. 'I said to you' -> 'I told him/her/them').",
          "Demonstratives:\n  - this -> that\n  - these -> those",
          "Adverbs of Time and Place:\n  - now -> then\n  - today -> that day\n  - tonight -> that night\n  - yesterday -> the previous day / the day before\n  - tomorrow -> the next day / the following day\n  - last week -> the previous week\n  - next year -> the following year\n  - here -> there\n  - ago -> before"
        ],
        "keyTakeaway": "Adjust pronouns, demonstratives, and adverbs of time and place to reflect the new reporting context.",
        "realWorldExample": "Direct: 'I will see you here tomorrow,' said Kofi. Reported: Kofi said that he would see me there the next day."
      },
      {
        "title": "4. Reporting Questions, Commands, and Requests",
        "content": "Reporting interrogative sentences and imperative commands requires specific structural reordering and the selection of precise reporting verbs beyond 'said'.",
        "bulletPoints": [
          "Reporting Wh-Questions: Retain the Wh-question word (who, where, when, why, how). Invert the question word order back into standard statement order (Subject before Verb), and drop the question mark!\n  - Direct: 'Where do you live?' asked the officer.\n  - Reported: The officer asked where I lived. (NOT 'where did I live').",
          "Reporting Yes/No Questions: Introduce the reported clause with 'if' or 'whether':\n  - Direct: 'Have you finished your homework?' asked Mother.\n  - Reported: Mother asked if I had finished my homework.",
          "Reporting Commands and Requests: Use an infinitive construction ('to + base verb') or negative infinitive ('not to + base verb') with reporting verbs like 'ordered', 'commanded', 'requested', 'urged', 'advised':\n  - Direct: 'Sit down and be quiet!' commanded the master.\n  - Reported: The master ordered us to sit down and be quiet.\n  - Direct: 'Do not play near the open pit,' warned the elder.\n  - Reported: The elder warned us not to play near the open pit."
        ],
        "keyTakeaway": "Reported questions take statement word order without question marks; reported commands use 'to/not to' infinitives.",
        "realWorldExample": "Direct: 'Please lend me your ruler,' said Esi. Reported: Esi politely requested me to lend her my ruler."
      }
    ],
    "commonMistakes": [
      "Retaining quotation marks in reported (indirect) speech.",
      "Forgetting to backshift verb tenses (e.g. failing to change 'is' to 'was' or 'have done' to 'had done').",
      "Failing to shift time and place adverbials (e.g. 'tomorrow' -> 'the following day', 'here' -> 'there').",
      "Failing to change personal pronouns to match the new perspective of the reporter."
    ],
    "beceExamTips": [
      "Remember: In reported questions, the subject ALWAYS comes before the verb, and there is NEVER a question mark at the end.",
      "'Said to' must change to 'told' when followed by an object (e.g., 'He told me', NOT 'He said me' or 'He told to me').",
      "Double check that 'yesterday' became 'the previous day' and 'tomorrow' became 'the next day'."
    ],
    "summaryChecklist": [
      "Can you backshift all basic tenses accurately?",
      "Do you know the adverb and demonstrative shifts (now -> then, here -> there, today -> that day)?",
      "Can you convert Wh-questions and Yes/No questions into statement word order?",
      "Can you report commands using 'to' and 'not to'?"
    ],
    "introduction": "A comprehensive guide to reporting spoken language: transforming direct quotations into reported statements, commands, requests, and questions with systematic tense backshifting, pronoun adjustments, and temporal/spatial adverbial shifts."
  },
  "jhs2-eng-t8-formal-letters": {
    "topicId": "jhs2-eng-t8-formal-letters",
    "title": "Composition: Formal and Official Letters",
    "overview": "Master the structure, two-address layout, formal heading, professional tone, paragraph development, and valediction of formal business and official letters for BECE examinations.",
    "realWorldContext": "Formal letters are essential tools of civic and professional life in Ghana — used to apply for senior high school admissions, petition local assembly members, write letters to newspaper editors, or apply for employment.",
    "objectives": [
      "Set out the correct two-address layout, formal date, and designated recipient title.",
      "Formulate clear, concise, capitalized or underlined letter headings.",
      "Maintain a formal, polite, and objective register without slang or contractions.",
      "Sign off correctly with 'Yours faithfully,', signature, and full name."
    ],
    "sections": [
      {
        "title": "1. The Two-Address Layout and Formal Heading",
        "content": "A formal letter requires two complete addresses: the sender's address and the recipient's official designation and address. Precision in formatting establishes the document's official credibility.",
        "bulletPoints": [
          "Writer's Address: Placed at the top right corner. Include postal box, institution or town, region, and conclude with the date written out in full ('24th September, 2026.').",
          "Recipient's Official Title and Address: Placed on the left margin, starting one line below the date level. Always address the OFFICE/DESIGNATION first, not an individual's personal name:\n  - The Headmaster, / Presby Junior High School, / P.O. Box 50, / Kukurantumi.\n  - The District Chief Executive, / Ga East Municipal Assembly, / Abokobi.",
          "Salutation: On the left margin below recipient's address: 'Dear Sir,' or 'Dear Madam,'. If gender is unknown, 'Dear Sir,' is standard convention.",
          "Heading / Title: Written in bold capital letters or title case (underlined if handwritten), centered or left-aligned: 'APPLICATION FOR ADMISSION AS A BOARDING STUDENT' or 'APPEAL FOR REPAIR OF COMMUNITY ROADS'."
        ],
        "keyTakeaway": "Formal letters require the sender's address at top right, recipient's official title and address on the left, followed by 'Dear Sir,' and a capitalized heading.",
        "realWorldExample": "Heading: 'COMPLAINT REGARDING PERSISTENT WATER SHORTAGES IN OBUASI'."
      },
      {
        "title": "2. The Tone, Style, and Language of Formal Letters",
        "content": "The language of a formal letter must be dignified, respectful, objective, and concise. Unlike informal letters, personal pleasantries and colloquial banter have no place in official correspondence.",
        "bulletPoints": [
          "No Contractions: Never write 'don't', 'can't', 'won't', 'I'm'. Always write out full forms: 'do not', 'cannot', 'will not', 'I am'.",
          "No Slang or Idiomatic Banter: Avoid informal expressions like 'What's up', 'by the way', or emotional outbursts.",
          "Courteous Register: Use polite auxiliary phrases: 'I write to respectfully apply for...', 'I would be exceedingly grateful if...', 'Kindly grant me permission to...'.",
          "Direct Statement of Purpose: Paragraph 1 must state the exact reason for writing immediately without beating around the bush ('I am writing this letter to formally apply for the position of Senior School Prefect in our school')."
        ],
        "keyTakeaway": "Use formal, courteous language with zero contractions and a direct statement of purpose in paragraph one.",
        "realWorldExample": "Opening: 'I write to respectfully draw your attention to the deplorable condition of the school science laboratory.'"
      },
      {
        "title": "3. Structuring Body Paragraphs and Logical Justification",
        "content": "The body of a formal letter should be organized into 2 to 3 well-reasoned paragraphs, each dedicated to a distinct argument, justification, or factual explanation.",
        "bulletPoints": [
          "Paragraph Unity: Begin each body paragraph with a clear, assertive topic sentence.",
          "Providing Evidence: Support claims with logical justifications, dates, or factual details rather than emotional complaints.",
          "Transitional Markers: Use formal linking words: 'Furthermore,', 'In addition,', 'Consequently,', 'Moreover,', 'For these reasons,'.",
          "Proposed Solutions: If writing a letter of complaint or petition, always include practical, constructive suggestions for resolving the issue.",
          "Concluding Paragraph: A brief, polite summary of expectations: 'I look forward to your favorable response', 'Thank you in anticipation of your urgent intervention'."
        ],
        "keyTakeaway": "Organize arguments into distinct, evidence-backed paragraphs and end with a polite closing statement.",
        "realWorldExample": "Concluding paragraph: 'I hope my humble request meets with your kind approval and prompt action. Thank you.'"
      },
      {
        "title": "4. The Formal Subscription and Valediction",
        "content": "Concluding a formal letter requires strict adherence to standardized protocol. Errors in the sign-off are immediately penalized in BECE scoring.",
        "bulletPoints": [
          "Standard Subscription: When the salutation was 'Dear Sir,' or 'Dear Madam,', the only correct subscription is 'Yours faithfully,'.",
          "Capitalization and Comma: Capitalize ONLY 'Yours'. Write 'faithfully' in lowercase, and follow with a comma: 'Yours faithfully,'.",
          "Signature: Place your handwritten signature directly beneath 'Yours faithfully,'.",
          "Full Name: Print your full official name (First Name + Surname) in block capital letters directly under the signature: 'KWAME MENSAH'.",
          "Official Designation (if applicable): Add your title or role below your name (e.g., 'Class Prefect, JHS 2B').",
          "Forbidden Sign-offs: Never use 'Yours sincerely,', 'Yours truly,', or 'Warm regards,' when addressing an official by title!"
        ],
        "keyTakeaway": "Sign off with 'Yours faithfully,', followed by your signature, full printed name, and designation.",
        "realWorldExample": "Sign-off:\nYours faithfully,\n[Signature]\nKWABENA OSEI\nLibrary Prefect"
      }
    ],
    "commonMistakes": [
      "Omitting the recipient's official designation and address.",
      "Writing an informal salutation like 'Dear Uncle' instead of 'Dear Sir' or 'Dear Madam'.",
      "Forgetting to underline or capitalize the heading/title of the formal letter.",
      "Signing off with 'Yours affectionately' instead of 'Yours faithfully' followed by full signature and name."
    ],
    "beceExamTips": [
      "Underline your heading if handwritten, or write it in BLOCK CAPITALS.",
      "Ensure the date appears under your address at the top right, written in full (e.g. 24th September, 2026).",
      "State the purpose of your letter in the very first sentence of the opening paragraph."
    ],
    "summaryChecklist": [
      "Did you write two addresses (sender's top right, recipient's top left)?",
      "Did you include a date and formal salutation ('Dear Sir,')?",
      "Is there a clear, capitalized or underlined heading?",
      "Are there zero contractions in your text?",
      "Did you sign off with 'Yours faithfully,', signature, and full name?"
    ],
    "introduction": "Master the structure, two-address layout, formal heading, professional tone, paragraph development, and valediction of formal business and official letters for BECE examinations."
  },
  "jhs2-eng-t9-narrative-descriptive": {
    "topicId": "jhs2-eng-t9-narrative-descriptive",
    "title": "Composition: Narrative and Descriptive Essays",
    "overview": "Craft compelling narrative essays with well-paced plot structures (exposition, conflict, climax, resolution) and sensory-rich descriptive essays utilizing evocative adjectives, adverbs, and spatial organization.",
    "realWorldContext": "Narrative and descriptive writing forms the backbone of African literature, creative writing, and journalism. In BECE English Paper 2, Section A frequently offers candidates options to write a story illustrating a moral proverb or describing a memorable event.",
    "objectives": [
      "Structure a narrative essay with a captivating exposition, rising action, dramatic climax, and logical resolution.",
      "Incorporate natural dialogue and chronological transitions in storytelling.",
      "Write vivid descriptive paragraphs using sensory imagery appeal to sight, sound, smell, taste, and touch.",
      "Organize descriptive essays logically using spatial and order-of-importance sequencing."
    ],
    "sections": [
      {
        "title": "1. The Narrative Arc: Structuring an Unforgettable Story",
        "content": "A compelling story is not merely a random list of events; it follows a well-designed narrative structure that builds dramatic tension and delivers emotional or moral satisfaction.",
        "bulletPoints": [
          "Exposition (Introduction): Sets the physical setting (time and place), introduces the main characters, and establishes the normal state of affairs.",
          "Inciting Incident & Rising Action: An unexpected event or conflict disrupts normalcy. Tension escalates through obstacles, misunderstandings, or physical danger.",
          "Climax: The emotional or dramatic pinnacle of the story where the conflict reaches boiling point and the protagonist must make a decisive choice or face the crisis.",
          "Falling Action: The immediate aftermath of the climax; tension subsides as consequences unfold.",
          "Resolution & Moral Lesson: The problem is resolved, lessons are learned, and a new normalcy is established."
        ],
        "keyTakeaway": "Every strong narrative follows a five-part arc: Exposition -> Rising Action -> Climax -> Falling Action -> Resolution.",
        "realWorldExample": "In a story titled 'A Narrow Escape', the climax occurs when the protagonist narrowly grabs an overhanging tree branch as the floodwaters sweep away the footbridge."
      },
      {
        "title": "2. Techniques for Dynamic Storytelling",
        "content": "To captivate examiners, writers employ specific literary techniques that make the story unfold before the reader's eyes rather than merely reporting dry facts.",
        "bulletPoints": [
          "'Show, Don't Tell': Instead of telling the reader 'Kofi was terrified', SHOW his fear: 'Kofi's hands trembled violently, his throat went dry, and beads of cold sweat trickled down his forehead.'",
          "Effective Dialogue: Use short, authentic exchanges between characters to reveal personality, quicken pace, and heighten tension. Remember to punctuate dialogue correctly with quotation marks and new lines for each new speaker.",
          "Chronological Transitions: Anchor your timeline with dynamic time transitions: 'Without warning,', 'Just as dawn broke,', 'Moments later,', 'In the blink of an eye,'.",
          "Consistent Point of View: Maintain either first-person ('I watched in horror') or third-person ('Kwame sprinted across the field') throughout the narrative."
        ],
        "keyTakeaway": "'Show, don't tell' using physical reactions, realistic dialogue, and dynamic time markers.",
        "realWorldExample": "'Show': 'Her eyes widened in horror as the brakes screeched' vs 'Tell': 'She was very scared.'"
      },
      {
        "title": "3. Descriptive Writing: Appealing to the Five Senses",
        "content": "Descriptive writing seeks to paint an indelible picture in the reader's mind. The most powerful technique is sensory imagery — deliberately crafting language that stimulates the reader's physical senses.",
        "bulletPoints": [
          "Visual Imagery (Sight): Shapes, sizes, colors, light, and movement ('The neon billboards cast an eerie crimson glow across the wet asphalt').",
          "Auditory Imagery (Sound): Pitches, volumes, and sound quality ('The deafening roar of the stadium crowd drowned out the referee's shrill whistle').",
          "Olfactory Imagery (Smell): Pleasant fragrances and foul odors ('The rich, warm aroma of freshly baked bread mingled with the scent of roasted coffee beans').",
          "Gustatory Imagery (Taste): Flavors ('The spicy, tangy jollof rice left a fiery tingle on the tip of my tongue').",
          "Tactile Imagery (Touch): Textures, temperatures, and physical sensations ('The coarse, abrasive bark scratched against his blistered palms')."
        ],
        "keyTakeaway": "Incorporate sensory details that appeal to sight, sound, smell, taste, and touch to create vivid descriptions.",
        "realWorldExample": "Describing a thunderstorm: 'Jagged bolts of lightning illuminated the ink-black sky, followed by a deafening clap of thunder that rattled the windowpanes.'"
      },
      {
        "title": "4. Spatial Organization and Figurative Language in Descriptions",
        "content": "Without a logical organizational framework, descriptive essays become disjointed lists of adjectives. Arranging details systematically guides the reader through the scene smoothly.",
        "bulletPoints": [
          "Spatial Arrangement: Guide the reader's 'mental camera' systematically:\n  - Top to bottom (describing a person's hair down to their polished boots).\n  - Inside to outside (describing a classroom, then the courtyard, then the surrounding hills).\n  - Panoramic wide shot to close-up zoom (the entire bustling market square down to a single trader's weathered hands).",
          "Figurative Enhancements: Weave similes, metaphors, and personification naturally into descriptions ('The abandoned classroom stood like a forgotten ghost').",
          "Adjective Discipline: Avoid piling up four or five weak adjectives. Choose one or two precise, evocative modifiers (not 'a big, old, tall, strong tree', but 'a towering ancient mahogany')."
        ],
        "keyTakeaway": "Organize descriptions in spatial order (top-to-bottom, near-to-far) and enhance with selective figurative comparisons.",
        "realWorldExample": "Describing the village chief: starting from his ornate golden crown, moving down to his rich handwoven kente cloth, and concluding with his gold-studded royal sandals."
      }
    ],
    "commonMistakes": [
      "Inconsistently shifting between past and present tense in narrative essays.",
      "Telling rather than showing in descriptive essays, omitting sensory details (sight, sound, smell).",
      "Writing one giant unparagraphed block of text instead of logical paragraphing.",
      "Failing to establish a clear chronological storyline or descriptive focal point."
    ],
    "beceExamTips": [
      "In BECE story writing, ensure your story illustrates the required moral or proverb clearly by the final paragraph.",
      "Spend the first 5 minutes outlining your plot arc (exposition, conflict, climax, resolution) before writing.",
      "Use strong action verbs (sprinted, seized, muttered) rather than weak verb + adverb combinations (ran quickly, took suddenly, spoke quietly)."
    ],
    "summaryChecklist": [
      "Does your narrative follow a clear arc with a distinct climax?",
      "Did you use sensory details appealing to multiple senses?",
      "Are your verb tenses consistent throughout the story?",
      "Did you punctuate dialogue correctly with a new paragraph for each speaker?"
    ],
    "introduction": "Craft compelling narrative essays with well-paced plot structures (exposition, conflict, climax, resolution) and sensory-rich descriptive essays utilizing evocative adjectives, adverbs, and spatial organization."
  },
  "jhs2-eng-t10-poetry-drama": {
    "topicId": "jhs2-eng-t10-poetry-drama",
    "title": "Literature: Appreciation of Poetry and Drama",
    "overview": "Develop literary appreciation skills for poetry and drama: understanding structural elements (stanzas, meter, rhyme, rhythm), poetic voices (speaker/persona), dramatic conventions (playwright, acts, scenes, dialogue, stage directions), and dramatic conflict in prescribed African texts.",
    "realWorldContext": "Literature reflects society, examines cultural values, and sharpens analytical thinking. In the BECE English examination, Paper 2 Section C tests candidates' appreciation of prescribed poems, plays, and prose works.",
    "objectives": [
      "Analyze the structural elements of a poem (stanzas, line breaks, rhyme schemes, and meter).",
      "Differentiate between the poet and the persona/speaker in a poem, analyzing tone and mood.",
      "Identify dramatic features: acts, scenes, stage directions, dialogue, monologues, and soliloquies.",
      "Explain dramatic conflict, character motivations, and themes in prescribed African plays."
    ],
    "sections": [
      {
        "title": "1. The Anatomy and Mechanics of Poetry",
        "content": "Poetry is an art form that expresses intense feelings, ideas, and imagery through rhythm, condensed language, and musicality. Analyzing poetry requires an understanding of its specific anatomical terms.",
        "bulletPoints": [
          "Line and Stanza: Lines are the basic units of poetry; a group of lines forming a division is a stanza.",
          "Stanza Classifications: Couplet (2 lines), Tercet (3 lines), Quatrain (4 lines — most common in ballads and hymns), Sestet (6 lines), Octave (8 lines).",
          "Rhyme and Rhyme Scheme: Rhyme is the acoustic correspondence of terminal sounds between lines. The rhyme scheme is charted using lowercase letters (e.g., abab, aabb, abba).\n  - Free Verse: Poetry that does not conform to a regular meter or rhyme scheme.",
          "Rhythm and Meter: The rhythmic pattern created by the arrangement of stressed and unstressed syllables, providing a heartbeat to the verse."
        ],
        "keyTakeaway": "Poems are structured into stanzas with distinct line arrangements, rhythms, and rhyme schemes.",
        "realWorldExample": "A four-line stanza where lines 1 and 3 rhyme, and lines 2 and 4 rhyme, has an 'abab' rhyme scheme."
      },
      {
        "title": "2. The Poetic Voice: Persona, Tone, and Mood",
        "content": "One of the most frequent errors in literary analysis is confusing the biological author of a poem with the poetic speaker.",
        "bulletPoints": [
          "Persona (Speaker): The voice or imaginary character created by the poet to narrate the poem. If a poem is written from the perspective of an old tree, a soldier dying in battle, or an infant, that voice is the persona, NOT the poet!",
          "Tone: The poet or persona's attitude toward the subject matter or audience (e.g., joyful, melancholic, satirical, indignant, sarcastic, reverent). Tone is revealed through word choice (diction).",
          "Mood: The emotional atmosphere or psychological feeling evoked inside the READER as they experience the poem (e.g., gloomy, serene, anxious, triumphant).",
          "Theme: The central underlying idea, philosophical message, or universal truth explored by the poem (e.g., the inevitability of death, the dignity of labor, the pain of cultural erosion)."
        ],
        "keyTakeaway": "The persona is the speaker in the poem; tone is the speaker's attitude; mood is the feeling created in the reader.",
        "realWorldExample": "In an anti-war poem, the tone of the speaker may be angry and bitter, while the mood evoked in the reader is sorrowful and horrified."
      },
      {
        "title": "3. Conventions of Drama: The World of the Theatre",
        "content": "Drama is literature written to be performed by actors on a stage before an audience. It relies almost entirely on dialogue and physical action rather than a narrator's exposition.",
        "bulletPoints": [
          "Playwright: The person who writes the dramatic text (note the spelling: 'playwright', NOT 'playwrite'!).",
          "Structural Units: Plays are divided into major sections called Acts, which are further divided into Scenes representing changes in time or setting.",
          "Dialogue: Spoken verbal exchange between two or more characters on stage.",
          "Monologue: An extended, uninterrupted speech delivered by one character to other characters present on stage.",
          "Soliloquy: A convention where a character stands alone on stage and speaks their innermost thoughts, motivations, and secrets aloud directly to the audience.",
          "Aside: A brief remark spoken by a character intended to be heard by the audience but unheard by other characters on stage."
        ],
        "keyTakeaway": "Drama is structured into acts and scenes, communicating plot and character through dialogue, monologues, and soliloquies.",
        "realWorldExample": "When Shakespeare's Hamlet speaks 'To be or not to be' while alone on stage, he is delivering a soliloquy."
      },
      {
        "title": "4. Stage Directions, Dramatic Conflict, and Characterization",
        "content": "Dramatic performance is guided by non-spoken instructions and driven forward by irreconcilable conflict between characters.",
        "bulletPoints": [
          "Stage Directions: Instructions written by the playwright (usually in italics or brackets) indicating actor movements, gestures, facial expressions, tone of voice, lighting, sound effects, and stage settings.\n  - Example: '[Pacing back and forth anxiously, clutching a letter]'.",
          "Dramatic Conflict: The engine of plot development. It can be:\n  - External Conflict: Between characters (Protagonist vs Antagonist), or between a character and society/tradition.\n  - Internal Conflict: Within a character's own conscience (e.g., duty versus personal desire).",
          "Characterization: How the playwright reveals character traits through their dialogue, physical actions, reactions of other characters, and stage directions.",
          "Protagonist vs Antagonist: The protagonist is the central character whose journey we follow; the antagonist is the opposing force that creates obstacles."
        ],
        "keyTakeaway": "Stage directions guide actors and staging; dramatic conflict between opposing forces drives the entire theatrical plot.",
        "realWorldExample": "In an African play, dramatic conflict often pits an educated youth advocating modern reforms against traditional elders defending ancient customs."
      }
    ],
    "commonMistakes": [
      "Confusing the poet (author) with the speaker / persona of a poem.",
      "Misidentifying rhyming scheme notation (e.g. mixing up ABAB and AABB).",
      "Failing to distinguish between dialogue, monologues, and stage directions in drama scripts.",
      "Calling a paragraph in a poem a 'paragraph' instead of a 'stanza'."
    ],
    "beceExamTips": [
      "In BECE literature questions, when asked 'Who is speaking in the poem?', identify the persona (e.g., 'An enslaved African', 'A disappointed lover').",
      "Always quote short textual phrases to support your explanation of tone or theme.",
      "Check the rhyme scheme carefully: write down the last word of each line and assign matching letters systematically."
    ],
    "summaryChecklist": [
      "Can you calculate the rhyme scheme of a stanza (e.g. abab, aabb)?",
      "Can you differentiate between the poet and the persona?",
      "Do you know the difference between dialogue, monologue, and soliloquy?",
      "Can you identify stage directions and explain their purpose?"
    ],
    "introduction": "Develop literary appreciation skills for poetry and drama: understanding structural elements (stanzas, meter, rhyme, rhythm), poetic voices (speaker/persona), dramatic conventions (playwright, acts, scenes, dialogue, stage directions), and dramatic conflict in prescribed African texts."
  },
  "jhs2-eng-t11-active-passive-voice": {
    "topicId": "jhs2-eng-t11-active-passive-voice",
    "title": "Active and Passive Voice: Transformations & Applications",
    "overview": "Master the active and passive voices: understanding syntactic shifts, auxiliary verb 'to be' insertion, past participle forms, agent 'by-phrase' management, and appropriate contextual usage in scientific and formal writing.",
    "realWorldContext": "Passive voice is the standard voice of scientific experiment reports, police investigations, newspaper headlines, and formal notices ('Mobile phones must be switched off'). Mastering voice transformation is a high-yield skill in BECE grammar.",
    "objectives": [
      "Distinguish between active voice (agent focus) and passive voice (action/receiver focus).",
      "Transform active sentences to passive voice across all major English tenses.",
      "Handle prepositional 'by-phrases' and recognize when the agent should be omitted.",
      "Apply the passive voice appropriately in laboratory reports and objective formal writing."
    ],
    "sections": [
      {
        "title": "1. The Concept of Voice: Active versus Passive",
        "content": "Voice refers to the grammatical relationship between the action expressed by the verb and the participants identified by its arguments (subject and object).",
        "bulletPoints": [
          "Active Voice: The grammatical subject is the 'doer' or agent of the action. It highlights WHO performed the deed.\n  - Example: 'The hunter shot the antelope.' (Subject: The hunter; Action: shot; Object: the antelope).",
          "Passive Voice: The grammatical subject is the 'receiver' or patient of the action. It highlights WHAT was done, or WHO was affected.\n  - Example: 'The antelope was shot by the hunter.' (Subject: The antelope; Passive Verb: was shot; Agent: by the hunter).",
          "Transitivity Requirement: ONLY transitive verbs (verbs that take a direct object) can be transformed into the passive voice. Intransitive verbs like 'sleep', 'arrive', 'die', 'fall' cannot be passive (you cannot say 'He was slept')."
        ],
        "keyTakeaway": "Active voice emphasizes the doer; passive voice emphasizes the receiver or the action itself.",
        "realWorldExample": "Active: 'Kwame Nkrumah declared Ghana's independence in 1957.' Passive: 'Ghana's independence was declared by Kwame Nkrumah in 1957.'"
      },
      {
        "title": "2. The Transformation Algorithm: Active to Passive",
        "content": "Converting an active sentence to passive voice follows a strict, step-by-step grammatical procedure.",
        "bulletPoints": [
          "Step 1: Identify the direct object of the active sentence and move it to the front as the new grammatical subject.",
          "Step 2: Determine the tense of the active verb.",
          "Step 3: Insert the auxiliary verb 'to be' in the SAME tense, ensuring it agrees in number (singular/plural) with the new subject.",
          "Step 4: Convert the active main verb into its Past Participle (V3) form (e.g. written, broken, eaten, driven).",
          "Step 5: Place the original active subject at the end of the sentence preceded by the preposition 'by' (the agent phrase), or omit it if unnecessary."
        ],
        "keyTakeaway": "Formula: New Subject + [Appropriate Form of 'BE'] + Past Participle + ['by' Agent].",
        "realWorldExample": "Active: 'The students cleaned the compound.' -> Passive: 'The compound [new subject] was [past of BE] cleaned [past participle] by the students [agent].'"
      },
      {
        "title": "3. Tense-by-Tense Voice Transformations",
        "content": "Every tense has its own distinct passive auxiliary pattern. Candidates must master each transformation formula.",
        "bulletPoints": [
          "Simple Present: 'writes' -> 'is/are written' ('The secretary types the letters' -> 'The letters are typed by the secretary').",
          "Present Continuous: 'is writing' -> 'is/are BEING written' ('The chef is cooking the meal' -> 'The meal is being cooked by the chef').",
          "Simple Past: 'wrote' -> 'was/were written' ('The boy broke the glass' -> 'The glass was broken by the boy').",
          "Past Continuous: 'was writing' -> 'was/were BEING written' ('They were repairing the bridge' -> 'The bridge was being repaired').",
          "Present Perfect: 'has written' -> 'has/have BEEN written' ('The police have captured the robber' -> 'The robber has been captured').",
          "Past Perfect: 'had written' -> 'had BEEN written' ('She had finished the dress' -> 'The dress had been finished').",
          "Simple Future: 'will write' -> 'will BE written' ('The council will build a clinic' -> 'A clinic will be built by the council').",
          "Modals: 'can/must write' -> 'can/must BE written' ('You must obey the law' -> 'The law must be obeyed')."
        ],
        "keyTakeaway": "Continuous tenses require 'BEING'; perfect tenses require 'BEEN'; simple future/modals require 'BE'.",
        "realWorldExample": "Active: 'The teacher has marked the scripts.' Passive: 'The scripts have been marked by the teacher.' (Note: 'have' agrees with plural 'scripts')."
      },
      {
        "title": "4. When to Omit the Agent and Practical Applications",
        "content": "In good English writing, the prepositional agent ('by someone') is frequently omitted when it adds no meaningful information.",
        "bulletPoints": [
          "When the Agent is Unknown: 'Someone stole my bicycle' -> 'My bicycle was stolen.' (Adding 'by someone' is redundant and clumsy).",
          "When the Agent is Obvious: 'The police arrested the thief' -> 'The thief was arrested.' (It is obvious that police make arrests).",
          "When the Agent is Unimportant: 'They manufacture cocoa butter in Takoradi' -> 'Cocoa butter is manufactured in Takoradi.'",
          "Scientific and Technical Writing: Science experiments prioritize the procedure and observation, not the student performing it: 'Ten milliliters of acid was added to the flask' (preferred over 'I added ten milliliters of acid')."
        ],
        "keyTakeaway": "Omit the 'by-phrase' when the doer is unknown, obvious, or unimportant, especially in scientific writing.",
        "realWorldExample": "Passive: 'English is spoken throughout Ghana' (no need to say 'by people')."
      }
    ],
    "commonMistakes": [
      "Omitting the appropriate form of auxiliary verb 'be' when transforming into passive voice.",
      "Changing the original sentence tense during active-passive transformation (e.g. turning present into past).",
      "Confusing the subject with the object in passive constructions.",
      "Using past participle forms incorrectly (e.g. writing 'was ate' instead of 'was eaten')."
    ],
    "beceExamTips": [
      "Always check the tense of the original active verb before choosing the form of 'to be'.",
      "Remember the golden distinction: 'BEING' is for continuous tenses (-ing), while 'BEEN' is for perfect tenses (has/have/had).",
      "In BECE sentence transformation questions, preserve the exact meaning and tense of the original sentence."
    ],
    "summaryChecklist": [
      "Can you identify whether a sentence is in the active or passive voice?",
      "Do you know the 5-step algorithm for transforming active to passive?",
      "Can you transform present continuous, past continuous, and present perfect verbs?",
      "Do you know when it is appropriate to drop the 'by-agent' phrase?"
    ],
    "introduction": "Master the active and passive voices: understanding syntactic shifts, auxiliary verb 'to be' insertion, past participle forms, agent 'by-phrase' management, and appropriate contextual usage in scientific and formal writing."
  },
  "jhs2-eng-t12-question-tags": {
    "topicId": "jhs2-eng-t12-question-tags",
    "title": "Question Tags & Short Responses",
    "overview": "Master the construction of English question tags: positive-negative contrast, auxiliary verb matching, personal pronoun rules, special irregular tags ('I am', imperatives, 'let's'), and negative adverbs.",
    "realWorldContext": "Question tags are ubiquitous in spoken English and dialogue. In BECE English Paper 1, question tag items appear every single year as quick, high-precision multiple choice questions.",
    "objectives": [
      "Apply the polarity rule: positive statement takes negative tag; negative statement takes positive tag.",
      "Match auxiliary verbs and operator 'do/does/did' correctly based on statement tenses.",
      "Select correct subject pronouns and avoid using common or proper nouns in tags.",
      "Construct irregular question tags for 'I am', imperative requests, suggestions with 'let's', and sentences containing negative adverbs."
    ],
    "sections": [
      {
        "title": "1. The Fundamental Polarity Rule",
        "content": "A question tag is a mini-question tagged onto the end of a statement. Its primary function in spoken discourse is to seek confirmation or invite the listener's agreement. The overarching law governing question tags is the Polarity Rule.",
        "bulletPoints": [
          "The Golden Rule: Opposites attract in question tags!\n  - Positive (+) Statement -> Negative (-) Tag: 'Kofi is a doctor, isn't he?'\n  - Negative (-) Statement -> Positive (+) Tag: 'Ama is not coming, is she?'",
          "Contracted Negatives: The negative tag must ALWAYS be contracted: use 'isn't', 'aren't', 'don't', 'can't', 'won't'. Never write the uncontracted form like 'is not he?'!",
          "Punctuation: Place a comma at the end of the statement, write the tag in lowercase, and end with a question mark: 'Statement, tag?'"
        ],
        "keyTakeaway": "Positive statement requires a contracted negative tag; negative statement requires a positive tag.",
        "realWorldExample": "Positive: 'You like kenkey, don't you?' Negative: 'You don't like kenkey, do you?'"
      },
      {
        "title": "2. Matching Auxiliaries and Using Dummy 'DO'",
        "content": "The verb in the question tag must strictly mirror the auxiliary verb found in the main statement. When no auxiliary is visible, standard English employs the auxiliary 'do'.",
        "bulletPoints": [
          "Statements with Auxiliaries: Repeat the same auxiliary in the tag:\n  - 'They have arrived, haven't they?'\n  - 'She can swim, can't she?'\n  - 'You will assist me, won't you?'\n  - 'We should study, shouldn't we?'",
          "Statements WITHOUT Auxiliaries (Lexical Main Verbs): Supply the dummy operator 'do / does / did' based on tense and number:\n  - Simple Present (Plural): 'They play well, don't they?'\n  - Simple Present (Singular): 'Kwame plays football, doesn't he?'\n  - Simple Past: 'Mother baked bread, didn't she?'",
          "Beware of 'Have': In modern English, when 'have' indicates possession without an auxiliary ('He has a car'), the tag usually takes 'doesn't he?' ('He has a car, doesn't he?')."
        ],
        "keyTakeaway": "Reuse the auxiliary verb in the statement; if no auxiliary exists, use 'do', 'does', or 'did'.",
        "realWorldExample": "'Esi cooked banku yesterday, didn't she?' (Simple past verb 'cooked' requires 'didn't')."
      },
      {
        "title": "3. Subject Pronoun Agreement in Tags",
        "content": "The subject of a question tag is strictly restricted to personal pronouns. Proper names, common nouns, and noun phrases must never appear in the tag.",
        "bulletPoints": [
          "Pronoun Conversion: Convert all subjects into personal pronouns (he, she, it, they, we, you, I):\n  - 'The headmaster is busy, isn't he?' (NOT 'isn't the headmaster?').\n  - 'The girls danced gracefully, didn't they?' (NOT 'didn't the girls?').\n  - 'The weather is humid, isn't it?'",
          "Indefinite Pronouns of Persons (everyone, someone, nobody, everybody, anyone): Take the plural pronoun 'THEY' in the tag:\n  - 'Everyone was happy, weren't they?' (Note: auxiliary shifts to plural 'weren't' to agree with 'they'!).\n  - 'Nobody called, did they?'",
          "Indefinite Pronouns of Things (everything, something, nothing): Take the singular pronoun 'IT':\n  - 'Nothing went wrong, did it?'\n  - 'Everything is ready, isn't it?'"
        ],
        "keyTakeaway": "Tags only accept personal pronouns; indefinite pronouns like 'everyone' take 'they', while 'everything' takes 'it'.",
        "realWorldExample": "'Everybody enjoyed the concert, didn't they?'"
      },
      {
        "title": "4. Special and Irregular Question Tags",
        "content": "Several unique grammatical structures follow irregular question tag conventions that frequently appear in BECE examinations.",
        "bulletPoints": [
          "The 'I am' Rule: The standard tag for 'I am' is 'aren't I?': 'I am your captain, aren't I?' (Negative 'I am not' takes standard positive: 'I am not late, am I?').",
          "Negative Adverbs (hardly, scarcely, barely, seldom, rarely, neither, never): These words make the statement semantically NEGATIVE, so they require a POSITIVE tag!\n  - 'He seldom visits his village, does he?' (NOT 'doesn't he?').\n  - 'She could scarcely breathe, could she?'",
          "Imperatives (Commands & Polite Requests): Take 'will you?' or 'won't you?':\n  - 'Shut the gate, will you?'\n  - 'Please help me carry this bucket, will you?'",
          "Suggestions with 'Let's': 'Let's' (short for 'let us') takes 'shall we?':\n  - 'Let's revise for the science test, shall we?'",
          "Obligation with 'Used to': Takes 'didn't':\n  - 'He used to live in Tamale, didn't he?'"
        ],
        "keyTakeaway": "'I am' takes 'aren't I?'; negative adverbs (seldom, barely) take positive tags; 'Let's' takes 'shall we?'.",
        "realWorldExample": "'Let's visit Kakum National Park this weekend, shall we?'"
      }
    ],
    "commonMistakes": [
      "Using a positive tag with a positive statement (positive statements REQUIRE negative tags and vice versa).",
      "Using a full noun instead of a personal pronoun in the tag (e.g. 'isn't Kwame?' instead of 'isn't he?').",
      "Using incorrect auxiliary verbs (e.g. using 'doesn't he?' when the main verb is 'is').",
      "Using 'isn't it?' as a universal tag for all sentences."
    ],
    "beceExamTips": [
      "Remember the golden pair: 'Let's...' ALWAYS ends with 'shall we?'.",
      "Whenever you see 'hardly', 'barely', 'scarcely', 'seldom', or 'never', immediately pick the POSITIVE tag.",
      "Check that your tag has an apostrophe in contractions: 'isn't', 'haven't', 'didn't'."
    ],
    "summaryChecklist": [
      "Do you know the polarity rule (+ statement -> - tag, and vice versa)?",
      "Can you choose between 'don't', 'doesn't', and 'didn't' when there is no auxiliary?",
      "Do you know the irregular tag for 'I am' ('aren't I?')?",
      "Can you tag imperative commands ('will you?') and suggestions ('shall we?')?"
    ],
    "introduction": "Master the construction of English question tags: positive-negative contrast, auxiliary verb matching, personal pronoun rules, special irregular tags ('I am', imperatives, 'let's'), and negative adverbs."
  },
  "jhs2-eng-t13-summary-writing": {
    "topicId": "jhs2-eng-t13-summary-writing",
    "title": "Summary Writing: Finding Main Ideas & Paraphrasing",
    "overview": "Master summary writing: extracting core topic sentences, filtering out digressions, illustrations, and redundant examples, paraphrasing ideas into candidate's own words, and adhering to strict BECE sentence constraints.",
    "realWorldContext": "In an information-dense world, the ability to read a lengthy report or document and distill its core essence into three or four crisp sentences is an indispensable academic and professional skill.",
    "objectives": [
      "Identify topic sentences and distinguish essential main points from supporting illustrations.",
      "Discard non-essential details, analogies, figurative expressions, and redundant lists.",
      "Paraphrase authorial points into fresh grammatical constructions without altering meaning.",
      "Format summary responses to comply with strict WAEC/BECE sentence-count requirements."
    ],
    "sections": [
      {
        "title": "1. The Essence of Summary Writing",
        "content": "Summary writing is the extraction and synthesis of the essential arguments of a text, presented in a condensed, clear, and objective format. It is neither a creative rewriting nor a personal critique; it is a test of reading comprehension and concise written expression.",
        "bulletPoints": [
          "Core Goal: Present the maximum amount of essential information using the minimum number of words.",
          "Objectivity: Report only what the passage states. Never inject personal opinions, moral judgments, or external facts not contained in the text.",
          "The BECE Format: In BECE English Paper 2, summary questions typically instruct: 'In three sentences, one for each, state three reasons why...'. Following this instruction to the letter is mandatory.",
          "Zero Fluff: Strip away rhetorical embellishments, emotional adjectives, and authorial digressions."
        ],
        "keyTakeaway": "A summary presents only the passage's core arguments concisely, objectively, and without personal commentary.",
        "realWorldExample": "Summarizing a 500-word article on galamsey into three sentences stating causes, effects, and solutions."
      },
      {
        "title": "2. Locating Main Ideas and Stripping Away Minor Details",
        "content": "To write an effective summary, a student must act like a miner separating gold from gravel. You must learn to ruthlessly discard everything that is not a core main idea.",
        "bulletPoints": [
          "Topic Sentences: Look for the topic sentence of each paragraph — often the very first sentence, occasionally the final concluding sentence.",
          "What to DISCARD:\n  - Examples and Lists: Phrases beginning with 'such as', 'for example', 'for instance' should be replaced by a single umbrella term.\n  - Anecdotes and Stories: Personal stories used by the author to illustrate a point must be discarded.\n  - Repetitions for Emphasis: Authors repeat points in different words; summarize the point once.\n  - Figurative Language: Metaphors, similes, and poetic idioms must be converted into plain literal statements.\n  - Statistical Details and Quotes: Numerical tables, percentages, and direct quotations should be omitted."
        ],
        "keyTakeaway": "Keep topic sentences and core arguments; discard all examples, stories, statistics, and figurative language.",
        "realWorldExample": "If the passage mentions 'apples, oranges, mangoes, pineapples, and pawpaws', summarize them simply as 'fruits'."
      },
      {
        "title": "3. The Art of Paraphrasing: Using Your Own Words",
        "content": "Copying the author's words verbatim is known as 'lifting' and is severely penalized in summary marking. Paraphrasing means expressing the original meaning using your own vocabulary and sentence structures.",
        "bulletPoints": [
          "Synonym Substitution: Replace key words with accurate synonyms (e.g. 'curtailed' -> 'reduced'; 'fatalities' -> 'deaths').",
          "Word Class Transformation: Change verbs into nouns, or adjectives into adverbs ('He acted courageously' -> 'His courage was evident').",
          "Active-Passive Inversion: Change the grammatical voice of the sentence ('The government constructed the highway' -> 'The highway was constructed by the government').",
          "Combining Clauses: Merge two separate points into a single compact sentence using coordination or subordination.",
          "Preserve Core Meaning: Ensure your paraphrase does not distort, exaggerate, or weaken the author's original point."
        ],
        "keyTakeaway": "Paraphrase by substituting synonyms, altering word classes, and restructuring sentences while keeping meaning intact.",
        "realWorldExample": "Original: 'The disease wreaked unprecedented havoc on the rural populace.' Paraphrase: 'The epidemic severely affected villagers.'"
      },
      {
        "title": "4. Meeting Strict BECE Summary Examination Requirements",
        "content": "BECE summary marking schemes penalize candidates heavily for structural disobedience. Knowing the examination rules guarantees high marks.",
        "bulletPoints": [
          "Sentence Requirement: If the question specifies 'In three sentences, one for each...', you MUST write exactly three sentences, numbered (a), (b), (c) or (1), (2), (3).",
          "Incomplete Sentences (Fragments): Each point must be a grammatically COMPLETE sentence containing a subject and a finite verb. Writing phrases or starting with 'Because...' without a main clause earns ZERO marks!",
          "Two Points in One Sentence: If you cram two answers into sentence (a) and leave sentence (b) blank, examiners will only mark the first point and ignore the second.",
          "Preamble Pitfall: Avoid long introductory preambles like 'The first reason why students fail their exams according to the author is that...'. State the point directly: 'Poor study habits cause examination failure.'"
        ],
        "keyTakeaway": "Write complete grammatical sentences, adhere strictly to the specified sentence count, and avoid unnecessary preambles.",
        "realWorldExample": "Correct format:\n(a) Deforestation reduces soil fertility.\n(b) Chemical runoff contaminates drinking water.\n(c) Mining pits create breeding grounds for mosquitoes."
      }
    ],
    "commonMistakes": [
      "Including verbatim examples, illustrations, and figures of speech in summary sentences.",
      "Writing incomplete, ungrammatical fragments instead of complete, coherent declarative sentences.",
      "Exceeding the requested number of sentences or incorporating personal opinions not stated in the passage.",
      "Failing to capture the author's central argument concisely."
    ],
    "beceExamTips": [
      "Always number your summary sentences clearly: (a), (b), (c).",
      "Read each written summary sentence independently to verify that it makes complete sense on its own.",
      "Ensure each sentence begins with a capital letter and concludes with a full stop."
    ],
    "summaryChecklist": [
      "Did you write the exact number of sentences demanded by the question?",
      "Is every single point a grammatically complete sentence?",
      "Did you remove all examples, statistics, and figurative language?",
      "Did you express the author's points in your own words?"
    ],
    "introduction": "Master summary writing: extracting core topic sentences, filtering out digressions, illustrations, and redundant examples, paraphrasing ideas into candidate's own words, and adhering to strict BECE sentence constraints."
  },
  "jhs2-eng-t14-expository-articles": {
    "topicId": "jhs2-eng-t14-expository-articles",
    "title": "Composition: Expository Writing & Articles for Publication",
    "overview": "Master expository writing and articles for publication: crafting catchy titles, informative introductory hooks, topical body paragraphs with logical evidence, and powerful concluding recommendations addressing contemporary Ghanaian social issues.",
    "realWorldContext": "Whether writing an article for the Junior Graphic on road safety or explaining the causes of bushfires in a school magazine, expository writing develops a student's ability to inform, analyze, and persuade public audiences.",
    "objectives": [
      "Understand the purpose and features of expository essays and articles for publication.",
      "Create bold, relevant headings and appropriate authorial bylines.",
      "Develop well-organized body paragraphs using topic sentences, evidence, and logical transitions.",
      "Formulate actionable recommendations and strong conclusions for societal problems."
    ],
    "sections": [
      {
        "title": "1. The Nature and Conventions of Articles for Publication",
        "content": "An article for publication is a non-fiction composition written for a broad public audience — published in newspapers (like the Daily Graphic, Ghanaian Times), magazines, or school newsletters. It combines factual explanation (exposition) with reasoned argumentation and civic advocacy.",
        "bulletPoints": [
          "Target Audience: Public readership, community leaders, educators, and peers.",
          "Title / Heading: Must be eye-catching, informative, and relevant. Centered or left-aligned, written in BLOCK CAPITALS or title case (e.g., 'THE MENACE OF PLASTIC POLLUTION IN ACCRA', 'TACKLING ROAD CRASHES ON GHANAIAN HIGHWAYS').",
          "Byline: Indicates authorship. Placed immediately beneath the title or at the bottom of the article: 'By: Kwame Mensah, JHS 2B, Presby Basic School, Kumasi'.",
          "Register and Tone: Formal, objective, persuasive, and dignified. Slang, offensive language, and excessive contractions are strictly avoided."
        ],
        "keyTakeaway": "Articles for publication feature a bold, informative title, a clear byline, and a formal, persuasive tone.",
        "realWorldExample": "Title: 'IMPROVING SANITATION IN OUR BASIC SCHOOLS' / By: Ama Serwaa, Form 2, Methodist JHS, Cape Coast."
      },
      {
        "title": "2. The Introductory Hook and Thesis Statement",
        "content": "The introduction of an article must seize the reader's attention, define the scope of the problem, and present a clear thesis statement outlining the direction of discussion.",
        "bulletPoints": [
          "The Hook: Open with a compelling statistic, a thought-provoking rhetorical question, or a vivid real-world scenario:\n  - 'Can our beloved nation attain sustainable development when thousands of fertile cocoa lands are ruined daily by illegal mining?'",
          "Contextual Background: Provide brief background information explaining why this topic is urgent and relevant right now.",
          "Thesis Statement: A sentence outlining the main aspects to be examined ('This article explores the root causes of road accidents in Ghana and proposes practical solutions to protect lives').",
          "Brevity: Keep the introduction concise (one well-crafted paragraph of 4–5 sentences)."
        ],
        "keyTakeaway": "Hook the reader with a striking question or fact, establish the context, and state your thesis clearly.",
        "realWorldExample": "Opening hook: 'Every single day, precious lives are prematurely lost on our national highways due to preventable driver negligence.'"
      },
      {
        "title": "3. Developing Topic-Centered Body Paragraphs",
        "content": "The body of an expository article should comprise three to four robust paragraphs. Each paragraph must be dedicated to exploring a single cause, effect, or dimension of the topic.",
        "bulletPoints": [
          "Topic Sentence: The first sentence must assert the main idea of that paragraph clearly ('First and foremost, the lack of enforcement of traffic regulations contributes heavily to road carnage').",
          "Supporting Evidence & Explanation: Elaborate with concrete reasons, logical cause-and-effect explanations, and realistic examples:\n  - 'Many commercial drivers operate without valid licenses, overspeed on poorly lit highways, and overtake recklessly at sharp curves.'",
          "Logical Transitions: Connect ideas smoothly using transitional markers: 'Furthermore,', 'In addition to this,', 'Consequently,', 'On the other hand,', 'A major contributing factor is...'.",
          "Paragraph Unity: Never mix two unrelated problems in the same paragraph (e.g., discuss indiscipline in one paragraph, and poor road engineering in the next)."
        ],
        "keyTakeaway": "Dedicate each body paragraph to one key factor, starting with a strong topic sentence supported by logical evidence.",
        "realWorldExample": "Body Paragraph Topic Sentence: 'Another major factor fueling teenage pregnancy in rural communities is the lack of comprehensive adolescent reproductive health education.'"
      },
      {
        "title": "4. Practical Recommendations and the Conclusion",
        "content": "A successful expository article does not merely complain about problems; it advocates constructive, actionable solutions and leaves the reader with a memorable call to action.",
        "bulletPoints": [
          "Realistic Solutions: Offer specific, practical interventions directed at relevant stakeholders (government, community leaders, schools, parents, youth):\n  - Government & Police: Strict enforcement of road safety laws and penalties.\n  - Community & Schools: Public education campaigns and awareness seminars.\n  - Individuals: Personal discipline, sobriety, and responsible citizenship.",
          "Concluding Paragraph: Reiterate the central theme without repeating identical words.",
          "Memorable Call to Action: End with a powerful, inspiring closing statement: 'The time to act is now. Together, we can build a safer, cleaner, and more prosperous Ghana for generations to come.'"
        ],
        "keyTakeaway": "Conclude by proposing actionable multi-stakeholder solutions and ending with an inspiring call to action.",
        "realWorldExample": "Conclusion: 'In conclusion, safeguarding our water bodies requires decisive collective action. Government must enforce environmental laws, while citizens report illegal mining activities.'"
      }
    ],
    "commonMistakes": [
      "Omitting an appropriate title and the writer's byline ('By: [Candidate Name]').",
      "Writing biased emotional rants instead of factual, logical explanations supported by evidence.",
      "Failing to address the target readership (e.g. general public or school magazine audience).",
      "Omitting an introductory thesis statement explaining the topic to be explored."
    ],
    "beceExamTips": [
      "Center your title and write it in BLOCK CAPITALS.",
      "Include your byline directly below the title (e.g. 'By: Kofi Mensah').",
      "Ensure your essay has a balanced structure: 1 introductory paragraph, 3 well-developed body paragraphs, and 1 concluding recommendation paragraph."
    ],
    "summaryChecklist": [
      "Did you write a bold, centered heading for your article?",
      "Did you include your byline (name, class, school)?",
      "Does each body paragraph focus on one specific point with supporting details?",
      "Did you provide realistic solutions and a strong conclusion?"
    ],
    "introduction": "Master expository writing and articles for publication: crafting catchy titles, informative introductory hooks, topical body paragraphs with logical evidence, and powerful concluding recommendations addressing contemporary Ghanaian social issues."
  },
  "jhs2-eng-t15-oral-english": {
    "topicId": "jhs2-eng-t15-oral-english",
    "title": "Oral English: Vowels, Consonants, Diphthongs & Word Stress",
    "overview": "Master oral English phonetics: distinguishing 12 pure monophthong vowels, 8 diphthongs, 24 consonant sounds, consonant clusters, and applying rules of primary syllable stress in multisyllabic words and noun-verb homographs.",
    "realWorldContext": "Clear spoken English is essential for effective communication, public speaking, radio broadcasting, and job interviews. In BECE English Paper 1, the final section tests phonetic discrimination and syllable stress placement.",
    "objectives": [
      "Differentiate between short vowels and long vowels using minimal pairs (/ɪ/ vs /iː/, /æ/ vs /ɑː/, /ɒ/ vs /ɔː/, /ʊ/ vs /uː/).",
      "Identify the 8 English diphthongs and their spelling variations.",
      "Distinguish voiced and voiceless consonant sounds and consonant clusters.",
      "Identify primary syllable stress in two-syllable noun-verb homographs and words with standard suffixes."
    ],
    "sections": [
      {
        "title": "1. The 12 Pure Vowels (Monophthongs): Short vs Long",
        "content": "A pure vowel (monophthong) is produced with an open vocal tract without audible friction. English possesses 12 monophthongs, categorized by duration into 7 short vowels and 5 long vowels (indicated phonetically by a length mark /ː/).",
        "bulletPoints": [
          "Short Vowels:\n  - /ɪ/ as in sit, pin, busy, build.\n  - /e/ as in bed, head, said, many.\n  - /æ/ as in cat, man, black, pack.\n  - /ɒ/ as in hot, pot, rock, watch.\n  - /ʌ/ as in cup, bus, love, blood.\n  - /ʊ/ as in put, book, foot, could.\n  - /ə/ (Schwa — most common vowel in English): unstressed vowel as in about, teacher, doctor.",
          "Long Vowels:\n  - /iː/ as in seat, sheep, machine, receive.\n  - /ɑː/ as in car, father, calm, palm.\n  - /ɔː/ as in port, caught, saw, floor.\n  - /uː/ as in pool, cool, rude, blue.\n  - /ɜː/ as in bird, turn, learn, word.",
          "Minimal Pairs Mastery:\n  - /ɪ/ vs /iː/: ship / sheep; fit / feet; live / leave.\n  - /æ/ vs /ɑː/: hat / heart; pack / park; cat / cart.\n  - /ɒ/ vs /ɔː/: spot / sport; cot / court; fox / forks."
        ],
        "keyTakeaway": "Master minimal pairs contrasting short vowels with long vowels (e.g. sit / seat, spot / sport).",
        "realWorldExample": "Mispronouncing 'sheep' as 'ship' changes the meaning completely: 'The farmer sold his sheep' vs 'The farmer sold his ship'."
      },
      {
        "title": "2. The 8 Diphthongs (Gliding Vowels)",
        "content": "A diphthong is a glide from one vowel quality to another within a single syllable. The vocal organs initiate on one sound and transition smoothly toward a second vowel target.",
        "bulletPoints": [
          "Centering Diphthongs (gliding toward Schwa /ə/):\n  - /ɪə/ as in ear, hear, dear, beer, cheer.\n  - /eə/ as in air, hair, care, bear, pear.\n  - /ʊə/ as in poor, tour, cure, sure.",
          "Closing Diphthongs gliding toward /ɪ/:\n  - /eɪ/ as in say, face, rain, make, day.\n  - /aɪ/ as in buy, time, high, sky, my.\n  - /ɔɪ/ as in boy, oil, coin, voice, toy.",
          "Closing Diphthongs gliding toward /ʊ/:\n  - /aʊ/ as in now, cow, loud, out, house.\n  - /əʊ/ as in go, home, boat, slow, road.",
          "Common Error: Ghanaian speakers often substitute pure vowels for diphthongs (e.g. pronouncing 'go' /gəʊ/ as pure /go/, or 'face' /feɪs/ as /fes/). Practice gliding the sound!"
        ],
        "keyTakeaway": "A diphthong glides from one vowel sound to another within the same syllable (e.g., /eɪ/ in 'day', /aʊ/ in 'now').",
        "realWorldExample": "'Fair' (/feə/) vs 'Fear' (/fɪə/); 'Bay' (/beɪ/) vs 'Buy' (/aɪ/)."
      },
      {
        "title": "3. Consonant Sounds and Consonant Clusters",
        "content": "Consonants are speech sounds produced with an obstruction of the airstream. They are classified by whether the vocal cords vibrate (voiced) or remain still (voiceless).",
        "bulletPoints": [
          "Voiced vs Voiceless Pairs:\n  - /p/ (voiceless: pin) vs /b/ (voiced: bin)\n  - /t/ (voiceless: tin) vs /d/ (voiced: din)\n  - /k/ (voiceless: coat) vs /g/ (voiced: goat)\n  - /f/ (voiceless: fan) vs /v/ (voiced: van)\n  - /θ/ (voiceless 'th': think, thin, bath) vs /ð/ (voiced 'th': this, that, breathe)\n  - /s/ (voiceless: sue) vs /z/ (voiced: zoo)\n  - /ʃ/ (voiceless 'sh': ship) vs /ʒ/ (voiced: measure, vision)\n  - /tʃ/ (voiceless 'ch': church) vs /dʒ/ (voiced: judge, jump).",
          "Consonant Clusters: Two or more consonants pronounced together without an intervening vowel:\n  - Initial clusters: split, street, scream, climb (/kl/), price (/pr/).\n  - Final clusters: desks (/sks/), passed (/st/), helped (/lpt/), tasks (/sks/).",
          "Cluster Pitfall: Do not insert an intrusive vowel sound (e.g. pronouncing 'school' as 'is-kool' or 'desk' as 'des-ki')."
        ],
        "keyTakeaway": "Distinguish voiced from voiceless consonants, and pronounce consonant clusters cleanly without adding vowel sounds.",
        "realWorldExample": "'Think' (/θɪŋk/) begins with a voiceless dental fricative; 'This' (/ðɪs/) begins with a voiced dental fricative."
      },
      {
        "title": "4. Syllable Stress and Noun-Verb Stress Shifts",
        "content": "Stress is the extra acoustic emphasis placed on a particular syllable within a multisyllabic word. In BECE Oral English, capitalized letters indicate which syllable carries the primary stress.",
        "bulletPoints": [
          "Two-Syllable Noun vs Verb Shift Rule:\n  - When a two-syllable word functions as a NOUN, stress is on the FIRST syllable: EX-port, CON-duct, PRO-duce, RE-cord, PRE-sent, OB-ject, RE-bel.\n  - When the identical word functions as a VERB, stress shifts to the SECOND syllable: ex-PORT, con-DUCT, pro-DUCE, re-CORD, pre-SENT, ob-JECT, re-BEL.",
          "Suffix Stress Rules:\n  - Words ending in '-tion', '-sion', '-ic', '-cian' are stressed on the PENULTIMATE (second to last) syllable:\n    * edu-CA-tion, pre-PA-ration, de-CI-sion, fan-TAS-tic, ma-gi-CIAN.\n  - Words ending in '-ity', '-ical', '-phy', '-gy' are stressed on the ANTEPENULTIMATE (third from last) syllable:\n    * a-BI-li-ty, his-TO-ri-cal, pho-TO-gra-phy, bi-O-lo-gy.",
          "Prefix Rule: Negative prefixes (un-, in-, dis-, im-) are rarely stressed (e.g., un-HAP-py, in-COM-plete, dis-HON-est)."
        ],
        "keyTakeaway": "Two-syllable nouns stress the 1st syllable; verbs stress the 2nd syllable. Words ending in '-tion' stress the syllable right before.",
        "realWorldExample": "Sentence: 'I received a birthday PRE-sent [noun], but I must pre-SENT [verb] my project today.'"
      }
    ],
    "commonMistakes": [
      "Confusing phonetic letter spelling with phonemic sound pronunciation (e.g. thinking 'ough' always sounds the same).",
      "Misplacing primary word stress on two-syllable nouns vs verbs (e.g. 'RE-cord' noun vs 're-CORD' verb).",
      "Failing to identify silent letters in English words (e.g. silent 'b' in 'doubt' and 'comb', silent 'k' in 'knight').",
      "Treating diphthongs as single monophthong vowel sounds."
    ],
    "beceExamTips": [
      "In BECE word stress questions, look at the capitalized syllable (e.g. edu-CA-tion). That syllable is the stressed one.",
      "Check the grammatical category in noun-verb pairs: if it follows 'the/a/my', it is a noun (stress 1st syllable); if it follows 'to' or takes past tense, it is a verb (stress 2nd syllable).",
      "Remember that English words ending in '-tion' are ALWAYS stressed on the syllable immediately preceding '-tion'."
    ],
    "summaryChecklist": [
      "Can you differentiate minimal pairs like ship/sheep and pot/port?",
      "Can you recognize the 8 English diphthongs?",
      "Do you know the difference between voiced and voiceless consonants (/θ/ vs /ð/)?",
      "Can you apply the noun-verb stress shift rule (EX-port vs ex-PORT)?"
    ],
    "introduction": "Master oral English phonetics: distinguishing 12 pure monophthong vowels, 8 diphthongs, 24 consonant sounds, consonant clusters, and applying rules of primary syllable stress in multisyllabic words and noun-verb homographs."
  }
};
