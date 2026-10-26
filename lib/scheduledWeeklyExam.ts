// Scheduled Weekly Examination System for AcademicPrep
// Week 2 Official Examination: English Language (Reading Comprehension & Summary Rules)
// Features: 1-Hour Total Paper (20 mins Objectives + 40 mins Comprehension & Summary),
// Strict Tab-Switch Anti-Cheating Expiration, Minimalist Aesthetic, and Full WAEC Marking Schemes.

import { EducationLevel, QuizQuestion } from './types';
import { WeeklyTheoryQuestion } from './weeklyTheoryQuestionBank';

export interface ScheduledExamConfig {
  id: string;
  title: string;
  level: EducationLevel;
  subjectId: string;
  subjectName: string;
  topicId: string;
  topicTitle: string;
  scheduledStartUtc: string; // ISO 8601 string, e.g. "2026-10-25T18:00:00.000Z"
  windowDurationHours: number; // 6 hours (6:00 PM to 12:00 AM GMT Midnight)
  paper1DurationMinutes: number; // 20 minutes
  paper2DurationMinutes: number; // 40 minutes
  paper1MaxMarks: number; // 40 marks
  paper2MaxMarks: number; // 60 marks
  totalMarks: number; // 100 marks
  antiCheatStrict: boolean; // If true, leaving the tab immediately triggers penalty lockout / expiration
  paper1Questions: QuizQuestion[];
  paper2Questions: WeeklyTheoryQuestion[];
}

export interface ScheduledExamAttemptRecord {
  id: string;
  examId: string;
  studentId: string;
  studentName?: string;
  studentPhone?: string;
  startedAt: string;
  completedAt: string;
  status: 'completed' | 'expired';
  terminationReason?: 'normal_submission' | 'time_expired' | 'tab_switched_expired';
  timeSpentSeconds: number;
  
  // Paper 1 (20 mins Objs)
  paper1Answers: Record<string, 'A' | 'B' | 'C' | 'D'>;
  paper1CorrectCount: number;
  paper1TotalQuestions: number;
  paper1Percentage: number;
  paper1ScoreMarks: number; // Out of 40

  // Paper 2 (40 mins Comprehension & Summary)
  paper2Answers: Record<string, string>; // subQuestionId -> student typed text
  paper2SelfMarks: Record<string, number>; // subQuestionId -> mark awarded
  paper2TotalMarks: number; // Out of 60
  paper2ScoreMarks: number;
  paper2Percentage: number;

  // Composite Score
  compositePercentage: number; // (P1 * 0.4) + (P2 * 0.6)
  stanineGrade: number; // 1 to 9
  gradeRemark: string;
}

// ============================================================================
// OFFICIAL SCHEDULED EXAM: WEEK 2 - ENGLISH LANGUAGE
// Reading Comprehension & Summary Rules
// ============================================================================
export const OFFICIAL_SCHEDULED_EXAM: ScheduledExamConfig = {
  id: 'jhs3-weekly-exam-2026-10-25-english',
  title: 'Weekly Examination: Reading Comprehension & Summary Rules',
  level: 'JHS 3',
  subjectId: 'english',
  subjectName: 'English Language',
  topicId: 'jhs3-eng-t7-t8-comprehension-summary',
  topicTitle: 'Reading Comprehension & Summary Rules',
  scheduledStartUtc: '2026-10-25T19:30:00.000Z', // Sunday 7:30 PM GMT
  windowDurationHours: 6, // Available until 12:00 AM GMT (Midnight)
  paper1DurationMinutes: 20, // 20 Minutes Objectives
  paper2DurationMinutes: 40, // 40 Minutes Comprehension & Summary
  paper1MaxMarks: 40,
  paper2MaxMarks: 60,
  totalMarks: 100,
  antiCheatStrict: true,
  paper1Questions: [
    {
      id: 'se-eng-p1-01',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Which of the following best defines the "main idea" of an expository paragraph?',
      optionA: 'The longest sentence located in the middle of the paragraph',
      optionB: 'The central thought or overarching point that all supporting sentences explain',
      optionC: 'The first statistical figure or quotation cited by the author',
      optionD: 'A concluding piece of evidence introduced to shock the reader',
      correctOption: 'B',
      subConcept: 'Identifying Main Ideas in Expository Texts',
      explanation: 'The main idea is the core thesis of a paragraph. Every other sentence (examples, statistics, anecdotes) serves solely to substantiate, elaborate, or clarify this central thought.',
      remediationTip: 'Ask yourself: "What single point is the author trying to prove throughout this paragraph?"'
    },
    {
      id: 'se-eng-p1-02',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'What distinguishes an "inferential comprehension question" from a "literal comprehension question"?',
      optionA: 'Inferential answers are directly copied word-for-word from the text',
      optionB: 'Literal answers require outside scientific research beyond the passage',
      optionC: 'Inferential answers require reading between the lines to deduce unstated conclusions',
      optionD: 'Literal questions only test the candidate\'s spelling and punctuation skills',
      correctOption: 'C',
      subConcept: 'Literal vs. Inferential Comprehension',
      explanation: 'Literal questions test direct facts stated explicitly on the page. Inferential questions demand deductive reasoning from contextual clues left by the author.',
      remediationTip: 'Literal = What the text says directly; Inferential = What the text implies or suggests.'
    },
    {
      id: 'se-eng-p1-03',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Read the sentence: "Despite their initial skepticism, the villagers were captivated by the novel technology." What does "novel" mean in this specific context?',
      optionA: 'A long printed story with fictional characters',
      optionB: 'New, unusual, and unfamiliar',
      optionC: 'Expensive and unaffordable',
      optionD: 'Ancient and historically proven',
      correctOption: 'B',
      subConcept: 'Contextual Vocabulary Deciphering',
      explanation: 'In context, the adjective "novel" means new, fresh, or previously unseen. It does not refer to a book of fiction.',
      remediationTip: 'Always check the part of speech and surrounding context clues to determine the exact intended meaning.'
    },
    {
      id: 'se-eng-p1-04',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Identify the grammatical name of the bracketed expression: "The ancient baobab tree [which stood in the center of the town square] was felled during the storm."',
      optionA: 'Noun phrase',
      optionB: 'Adjectival (Relative) clause',
      optionC: 'Adverbial clause of manner',
      optionD: 'Prepositional phrase',
      correctOption: 'B',
      subConcept: 'Grammatical Names: Clauses',
      explanation: 'It is an adjectival (relative) clause introduced by the relative pronoun "which". It qualifies or modifies the preceding noun "baobab tree".',
      remediationTip: 'A clause introduced by who, which, or that immediately describing a noun is an adjectival clause.'
    },
    {
      id: 'se-eng-p1-05',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'What is the grammatical function of the adjectival clause in the sentence: "The students admired the headmistress [who championed strict academic discipline]"?',
      optionA: 'It serves as the grammatical subject of the verb "admired"',
      optionB: 'It modifies the noun "headmistress"',
      optionC: 'It functions as an adverb of reason to "champed"',
      optionD: 'It acts as the direct object of the verb "championed"',
      correctOption: 'B',
      subConcept: 'Syntactic Functions of Adjectival Clauses',
      explanation: 'Adjectival clauses perform one primary syntactic function: modifying, describing, or qualifying a noun or pronoun. Here it qualifies "headmistress".',
      remediationTip: 'State the function clearly: "It modifies the noun [Noun Name]".'
    },
    {
      id: 'se-eng-p1-06',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'What is the grammatical name of the italicized expression: "Although the rain fell in torrents, the farmers continued their harvest"?',
      optionA: 'Adverbial clause of concession',
      optionB: 'Noun clause functioning as complement',
      optionC: 'Adjectival clause qualifying rain',
      optionD: 'Independent coordinating clause',
      correctOption: 'A',
      subConcept: 'Adverbial Clauses of Concession',
      explanation: '"Although the rain fell in torrents" is an adverbial clause of concession. It modifies the verb phrase "continued" in the main clause.',
      remediationTip: 'Clauses introduced by although, though, even though, or whereas express concession.'
    },
    {
      id: 'se-eng-p1-07',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Read the sentence: "The library is an ocean of boundless human knowledge." Which figure of speech is employed?',
      optionA: 'Simile',
      optionB: 'Metaphor',
      optionC: 'Hyperbole',
      optionD: 'Oxymoron',
      correctOption: 'B',
      subConcept: 'Literary Devices: Metaphor',
      explanation: 'The sentence directly equates the library to an "ocean" without using comparative conjunctions such as "like" or "as", making it a metaphor.',
      remediationTip: 'Comparison with like/as = Simile; Direct identification without like/as = Metaphor.'
    },
    {
      id: 'se-eng-p1-08',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Which figure of speech is demonstrated in: "The furious gale screamed through the keyhole and rattled the locked shutters throughout the night"?',
      optionA: 'Personification',
      optionB: 'Euphemism',
      optionC: 'Alliteration',
      optionD: 'Irony',
      correctOption: 'A',
      subConcept: 'Literary Devices: Personification',
      explanation: 'Inanimate wind ("gale") is invested with human traits ("screamed", "rattled"), which is the defining quality of personification.',
      remediationTip: 'Attributing human actions or emotions to non-human objects or forces is personification.'
    },
    {
      id: 'se-eng-p1-09',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'A fire station burns down completely while all the firemen are away attending a lecture on fire prevention. This situation is a clear example of:',
      optionA: 'Dramatic metaphor',
      optionB: 'Situational irony',
      optionC: 'Hyperbolic understatement',
      optionD: 'Poetic justice',
      correctOption: 'B',
      subConcept: 'Literary Devices: Situational Irony',
      explanation: 'Situational irony occurs when the actual outcome of an event is strikingly contrary to what was logically expected.',
      remediationTip: 'Irony involves an incongruity between what is expected and what actually occurs.'
    },
    {
      id: 'se-eng-p1-10',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Read the excerpt: "When heavy industrial effluents were dumped into the Densu River, it poisoned thousands of freshwater tilapia. This alarmed environmental inspectors." What does the pronoun "This" refer back to?',
      optionA: 'The Densu River',
      optionB: 'Freshwater tilapia',
      optionC: 'The poisoning of thousands of tilapia by industrial effluents',
      optionD: 'The environmental inspectors',
      correctOption: 'C',
      subConcept: 'Pronoun Antecedent Reference',
      explanation: 'The demonstrative pronoun "This" functions as a cohesive device referring to the entire preceding factual occurrence: the poisoning of fish caused by dumped effluents.',
      remediationTip: 'Trace demonstrative pronouns (this, that, these) back to the exact action or noun phrase they replace.'
    },
    {
      id: 'se-eng-p1-11',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'According to official WAEC / BECE marking regulations, what penalty is applied to a summary answer that exhibits "mindless lifting"?',
      optionA: 'The candidate is awarded full marks if the lifted sentence contains the correct fact',
      optionB: 'The candidate loses marks or is awarded zero because summary demands expression in one\'s own words',
      optionC: 'The candidate is given extra bonus marks for quote accuracy',
      optionD: 'The candidate is only penalized if spelling mistakes are present in the copied text',
      correctOption: 'B',
      subConcept: 'Summary Rules: The Mindless Lifting Penalty',
      explanation: 'WAEC examiners strictly penalize "mindless lifting" (verbatim copying from the passage). Summary evaluates the candidate\'s ability to condense and restate points in their own words.',
      remediationTip: 'Never copy word-for-word from the passage. Always paraphrase the core idea.'
    },
    {
      id: 'se-eng-p1-12',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Which of the following items MUST be ruthlessly eliminated when writing an effective summary of a passage paragraph?',
      optionA: 'The central topic statement',
      optionB: 'Key causative verbs',
      optionC: 'Illustrations, statistical figures, repetitions, and personal anecdotes',
      optionD: 'The main noun phrases identifying the subjects',
      correctOption: 'C',
      subConcept: 'Summary Rules: Elimination of Extraneous Fluff',
      explanation: 'Summary is the art of condensation. Examples, statistical data, rhetorical questions, and decorative adjectives must be pruned away to leave only the core fact.',
      remediationTip: 'Delete the fluff: if a sentence provides an example or statistic ("e.g.", "for instance", "such as"), cut it out.'
    },
    {
      id: 'se-eng-p1-13',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Why do candidate summary responses written as incomplete bullet fragments (e.g. "- Lack of good drinking water.") score poorly in BECE English Section B?',
      optionA: 'Examiners require every summary point to be a grammatically complete, independent sentence',
      optionB: 'Bullets are not recognized by typewriter printing presses',
      optionC: 'Candidates must write in rhyming poetic couplets',
      optionD: 'Bullet points are exclusively reserved for Mathematics and Science examinations',
      correctOption: 'A',
      subConcept: 'Summary Rules: Grammatically Complete Sentences',
      explanation: 'WAEC summary rules mandate that each summary point must be a complete, grammatically sound sentence with a subject and finite verb. Sentence fragments are heavily penalized.',
      remediationTip: 'Always construct a complete sentence: Subject + Verb + Object/Complement.'
    },
    {
      id: 'se-eng-p1-14',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'What happens if a candidate introduces true outside scientific facts or personal moral opinions into their BECE summary answer?',
      optionA: 'Examiners award bonus points for showing broad general knowledge',
      optionB: 'Examiners award zero for that point because summary answers must be drawn strictly from the passage',
      optionC: 'The candidate\'s score is multiplied by two',
      optionD: 'The answer is forwarded to the Ministry of Education for publication',
      correctOption: 'B',
      subConcept: 'Summary Rules: Exclusion of Extraneous Knowledge',
      explanation: 'A summary is strictly confined to what the passage states. Incorporating outside knowledge, personal opinions, or extraneous theories invalidates the answer under WAEC rules.',
      remediationTip: 'Rely ONLY on facts explicitly written in the passage. Never add personal reflections.'
    },
    {
      id: 'se-eng-p1-15',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Which of the following represents the most concise and accurate summary of the sentence: "Owing to the undeniable circumstance that torrential downpours saturated the unpaved roadway with water, automotive vehicles could not traverse the route"?',
      optionA: 'Torrential downpours saturated the unpaved roadway with water and automotive vehicles failed to traverse.',
      optionB: 'Heavy rain made the road impassable for vehicles.',
      optionC: 'Because vehicles could not move, downpours saturated unpaved roadways completely.',
      optionD: 'Cars were hindered by the undeniable circumstance of water.',
      correctOption: 'B',
      subConcept: 'Summary Rules: Economy of Words and Paraphrasing',
      explanation: '"Heavy rain made the road impassable for vehicles" condenses a wordy 23-word sentence down to 8 words while maintaining full grammatical accuracy and meaning.',
      remediationTip: 'Economy of words: replace long verbose phrases with concise, powerful nouns and verbs.'
    },
    {
      id: 'se-eng-p1-16',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'An author repeatedly uses words like "deplorable", "unscrupulous", "betrayal", and "catastrophe" when describing a government project. The author\'s tone is best described as:',
      optionA: 'Enthusiastic and complimentary',
      optionB: 'Objective and detached',
      optionC: 'Critical and indignant',
      optionD: 'Playful and humorous',
      correctOption: 'C',
      subConcept: 'Identifying Authorial Tone in Passages',
      explanation: 'Diction (word choice) reveals the writer\'s attitude. Words conveying condemnation and outrage denote a critical, indignant, or censorious tone.',
      remediationTip: 'Look at the emotional charge of the author\'s adjectives and verbs to identify tone.'
    },
    {
      id: 'se-eng-p1-17',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'Which of the following statements represents an empirical fact rather than a subjective opinion?',
      optionA: 'English is the most melodious and delightful language ever spoken.',
      optionB: 'Ghana gained sovereign political independence on March 6, 1957.',
      optionC: 'Modern teenagers are universally lazier than their industrious ancestors.',
      optionD: 'Living in coastal towns is infinitely more enjoyable than residing inland.',
      correctOption: 'B',
      subConcept: 'Distinguishing Fact from Opinion',
      explanation: 'A fact is objective and verifiable with verifiable historical or empirical evidence. Statements reflecting personal taste, aesthetic judgment, or sweeping value judgments are opinions.',
      remediationTip: 'Facts can be proven true or false objectively; opinions express personal beliefs.'
    },
    {
      id: 'se-eng-p1-18',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'When a summary question instructs: "In three sentences, one for each, state...", how should the candidate format their answer sheet?',
      optionA: 'Write a single unbroken paragraph containing all three points separated by commas',
      optionB: 'List three clearly numbered, separate sentences marked (a), (b), and (c)',
      optionC: 'Write one short phrase and leave two blank lines',
      optionD: 'Copy the opening sentence of three consecutive paragraphs in the passage',
      correctOption: 'B',
      subConcept: 'Summary Rules: Formatting and Point Presentation',
      explanation: 'WAEC examiners expect a point-by-point presentation corresponding directly to the question prompt (e.g. (a), (b), (c)), with each point written as a standalone grammatical sentence.',
      remediationTip: 'Always obey the number of sentences specified: "In two sentences" = exactly 2 sentences.'
    },
    {
      id: 'se-eng-p1-19',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'In a BECE contextual vocabulary question, a candidate is asked to replace the past participle verb "commenced". Which of the following replacements is grammatically acceptable?',
      optionA: 'begin',
      optionB: 'beginning',
      optionC: 'started',
      optionD: 'to start',
      correctOption: 'C',
      subConcept: 'Contextual Vocabulary: Grammatical Concord',
      explanation: 'A replacing word must strictly match the part of speech, tense, number, and voice of the original word. "Commenced" is past tense, so only the past tense "started" maintains grammatical concord.',
      remediationTip: 'Always match the exact grammatical form: past tense replaces past tense; plural replaces plural.'
    },
    {
      id: 'se-eng-p1-20',
      quizId: 'jhs3-weekly-exam-2026-10-25-english',
      questionText: 'What is a "dangling preamble" in WAEC summary writing, and why is it penalized?',
      optionA: 'An introductory phrase that fails to connect grammatically to the subsequent listed points',
      optionB: 'A decorative border drawn around the examination answer booklet',
      optionC: 'A signature placed at the end of the summary section',
      optionD: 'A quote written in Latin at the top of the script',
      correctOption: 'A',
      subConcept: 'Summary Rules: The Preamble Rule',
      explanation: 'When a candidate writes an introductory lead-in (e.g. "The reasons why the school failed include:"), but the sub-points that follow do not form grammatically correct complete sentences when read with the lead-in, marks are penalized.',
      remediationTip: 'Avoid preambles altogether! Write each point as a standalone, complete sentence starting with a capital letter.'
    }
  ],
  paper2Questions: [
    {
      id: 'se-eng-p2-q1',
      subjectId: 'english',
      subjectName: 'English Language',
      topicId: 'jhs3-eng-t7-t8-comprehension-summary',
      topicTitle: 'Reading Comprehension & Summary Rules',
      level: 'JHS 3',
      questionNumber: 1,
      totalMarks: 20,
      scenario: 'A Junior High School English teacher evaluates the practice summary scripts of two candidates, Kwesi and Ama, who both answered the question: "In two sentences, one for each, state two consequences of drug abuse mentioned in the passage."\n\n• Candidate Kwesi wrote:\n  (a) For example, young boys in our communities who smoke marijuana end up suffering from acute mental illness, as seen in the psychiatric hospitals in Accra.\n  (b) The text says: "Drug abuse leads to the breakdown of promising academic careers among vibrant students who drop out of school."\n\n• Candidate Ama wrote:\n  (a) Drug abuse causes severe mental disorders among users.\n  (b) It leads to the collapse of students\' educational ambitions.',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'State the three cardinal rules of summary writing recognized by WAEC / BECE chief examiners, and explain the significance of each.',
          modelAnswer: 'The three cardinal rules of summary writing are:\n1. Economy of Words (Brevity): Stripping away all illustrative fluff, examples, repetitions, figures of speech, and statistical data to state the core fact with maximum word efficiency.\n2. Paraphrasing in Candidate\'s Own Words: Avoiding verbatim copying from the passage by rewording ideas using original vocabulary and syntactic constructions.\n3. Grammatical Sentence Completeness: Constructing each required point as a fully formed, independent grammatical sentence with a clear subject and finite verb, avoiding incomplete fragments.',
          markingSchemeRubric: '[B2] Stating and explaining Economy of Words / Brevity\n[B2] Stating and explaining Paraphrasing in candidate\'s own words\n[B2] Stating and explaining Grammatical Sentence Completeness',
          maxMarks: 6
        },
        {
          part: '(b)',
          prompt: 'Critique Candidate Kwesi\'s answers. Identify two major errors committed in Kwesi\'s response according to official examination criteria.',
          modelAnswer: '1. Inclusion of Extraneous Illustrations: In point (a), Kwesi included unnecessary illustrative examples ("For example, young boys in our communities...", "as seen in the psychiatric hospitals in Accra"), which violates the rule of brevity.\n2. Mindless Lifting: In point (b), Kwesi committed mindless lifting by copying a full sentence verbatim within quotation marks ("The text says: \'Drug abuse leads to...\'"), for which examiners award zero or impose severe lifting deductions.',
          markingSchemeRubric: '[B2] Identifying inclusion of extraneous illustrations / examples in point (a)\n[B2] Identifying verbatim quotation / mindless lifting in point (b)',
          maxMarks: 4
        },
        {
          part: '(c)',
          prompt: 'Explain why Candidate Ama\'s response scored full marks, highlighting two specific merits of her answers.',
          modelAnswer: '1. Strict Paraphrasing: Ama expressed the passage\'s thoughts concisely in her own words without copying phrases verbatim.\n2. Structural Completeness & Brevity: Both points are independent, complete grammatical sentences that contain zero filler, examples, or preambles, directly targeting the prompt.',
          markingSchemeRubric: '[B2] Pointing out original phrasing / avoidance of lifting\n[B2] Pointing out concise, complete sentence structure without filler',
          maxMarks: 4
        },
        {
          part: '(d)',
          prompt: 'Distinguish clearly between a Literal Comprehension question and an Inferential Comprehension question. Provide one sample question of each type.',
          modelAnswer: '• Literal Comprehension: Questions whose answers are directly and explicitly stated in the words of the text. Example: "How old was Kofi when he left the village?"\n\n• Inferential Comprehension: Questions whose answers are not directly stated, requiring the reader to deduce meaning from contextual evidence, character actions, or authorial hints. Example: "Why did Kofi hesitate before knocking on his father\'s door?"',
          markingSchemeRubric: '[B1.5] Clear definition + valid example for Literal Comprehension\n[B1.5] Clear definition + valid example for Inferential Comprehension',
          maxMarks: 3
        },
        {
          part: '(e)',
          prompt: 'Condense the following 38-word sentence into a single, grammatically sound summary sentence of NOT MORE than 10 words:\n"Because heavy monsoon floods completely inundated and destroyed the single bridge connecting the rural settlement to the city, commercial transport vehicles were entirely incapable of delivering essential food provisions to the stranded villagers."',
          modelAnswer: 'Floods destroyed the bridge, cutting off food supplies to villagers. (9 words)\n[Alternative: The damaged bridge prevented food delivery to the flooded village. (9 words)]',
          markingSchemeRubric: '[B2] Accurate reduction of core idea to <= 10 words\n[B1] Complete grammatical sentence with subject and finite verb',
          maxMarks: 3
        }
      ]
    },
    {
      id: 'se-eng-p2-q2',
      subjectId: 'english',
      subjectName: 'English Language',
      topicId: 'jhs3-eng-t7-t8-comprehension-summary',
      topicTitle: 'Reading Comprehension & Summary Rules',
      level: 'JHS 3',
      questionNumber: 2,
      totalMarks: 20,
      scenario: 'Read the following passage carefully and answer all the questions that follow:\n\nFor more than two centuries, the sacred grove of Bosome stood as an unblemished natural sanctuary in the heart of the forest belt. Revered by ancestors, the grove was strictly governed by traditional customs. Felling timber was deemed a sacrilege, and cultivating farmlands within its perimeter was forbidden. As a consequence of these ancient taboos, the dense canopy became a flourishing refuge for diverse wildlife and harbored rare medicinal herbs which had sustained the community\'s healers for generations.\n\nCrucially, the grove acted as an indispensable water catchment. Deep beneath its spongy loam, perennial aquifers fed the crystalline Bosome stream, whose cool waters flowed unceasingly to provide clean drinking water for five neighboring agrarian settlements. Even during harsh Harmattan droughts, when surrounding rivers shrunk to dusty troughs, the Bosome stream bubbled faithfully.\n\nHowever, the tranquility of the ancient forest was shattered when commercial prospectors discovered rich alluvial gold deposits and high-grade mahogany along its fringes. Eager for swift wealth, corporate recruiters offered lavish promises of modern roads and cash compensation. Many local youths, dazzled by the prospect of instant affluence, began to deride the sacred taboos as primitive superstitions. Despite desperate appeals from the council of elders, the gates were thrown open to commercial timber contractors and surface mining excavators.\n\nThe destruction that followed was devastatingly swift. Within eighteen months, roaring mechanical excavators ripped through centuries-old trees like hungry beasts ravenous for prey. The thick canopy was stripped bare. Left defenseless under torrential tropical downpours, the rich topsoil was washed violently into the Bosome stream, suffocating fish populations and turning the once-sparkling watercourse into a sluggish ribbon of toxic, yellowish mud. When the rains ceased, the sponge-like loam—now compacted by heavy machinery—could no longer recharge the aquifers. The stream died, leaving thousands of farmers without drinking water.',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'According to the first paragraph of the passage, state two ancient customs that preserved the sacred grove of Bosome from human destruction.',
          modelAnswer: '1. Felling timber or cutting down trees within the grove was strictly forbidden / regarded as a sacrilege.\n2. Cultivating farmlands or farming within the boundaries of the grove was prohibited.',
          markingSchemeRubric: '[B1.5] First custom stated clearly\n[B1.5] Second custom stated clearly',
          maxMarks: 3
        },
        {
          part: '(b)',
          prompt: 'Why did the local youth dismiss the ancestral taboos as "primitive superstitions"? What motivated their sudden change of attitude?',
          modelAnswer: 'The youth were motivated by the lure of rapid wealth and material greed. They were dazzled by the promises of cash compensation and modern infrastructure made by commercial gold and timber prospectors, leading them to abandon traditional reverence for the forest.',
          markingSchemeRubric: '[B2] Mentioning desire for swift wealth / greed / cash promises\n[B1] Mentioning modern infrastructure / corporate promises',
          maxMarks: 3
        },
        {
          part: '(c)',
          prompt: 'For each of the following words as used in the passage, provide another word or phrase that means the same and can replace it in the sentence without altering meaning:\n(i) sanctuary\n(ii) unceasingly\n(iii) deride\n(iv) swift\n(v) defenseless',
          modelAnswer: '(i) sanctuary: haven / refuge / shelter / protected reserve\n(ii) unceasingly: continuously / constantly / perpetually / without stopping\n(iii) deride: mock / ridicule / scoff at / disparage\n(iv) swift: rapid / fast / quick / speedy\n(v) defenseless: unprotected / vulnerable / exposed',
          markingSchemeRubric: '[B1] Correct replacement for sanctuary\n[B1] Correct replacement for unceasingly\n[B1] Correct replacement for deride\n[B1] Correct replacement for swift\n[B1] Correct replacement for defenseless\nNote: Deduct full mark if replacement violates grammatical tense or part of speech.',
          maxMarks: 5
        },
        {
          part: '(d)',
          prompt: 'Identify the grammatical name and state the syntactic function of each of the following expressions from the passage:\n(i) "which had sustained the community\'s healers for generations"\n(ii) "When the rains ceased"',
          modelAnswer: '(i) "which had sustained the community\'s healers for generations":\n  • Grammatical Name: Adjectival (Relative) clause.\n  • Function: It modifies the noun phrase "medicinal herbs".\n\n(ii) "When the rains ceased":\n  • Grammatical Name: Adverbial clause of time.\n  • Function: It modifies the main verb phrase "could (no longer) recharge".',
          markingSchemeRubric: '[B1.5] Adjectival / Relative clause + modifies noun "herbs"\n[B1.5] Adverbial clause of time + modifies verb "recharge"',
          maxMarks: 6
        },
        {
          part: '(e)',
          prompt: 'Read the sentence from paragraph 4: "Within eighteen months, roaring mechanical excavators ripped through centuries-old trees like hungry beasts ravenous for prey." (i) What figure of speech is used in this sentence? (ii) What does this comparison illustrate about the machines?',
          modelAnswer: '(i) Figure of Speech: Simile (the comparison is introduced by the word "like").\n(ii) Significance: It illustrates the ferocious, unrestrained violence, ruthlessness, and destructive hunger with which the excavators tore down the ancient forest trees.',
          markingSchemeRubric: '[B1] Correctly identifying Simile\n[B2] Explaining the ferocious ruthlessness / destructive violence of the excavators',
          maxMarks: 3
        }
      ]
    },
    {
      id: 'se-eng-p2-q3',
      subjectId: 'english',
      subjectName: 'English Language',
      topicId: 'jhs3-eng-t7-t8-comprehension-summary',
      topicTitle: 'Reading Comprehension & Summary Rules',
      level: 'JHS 3',
      questionNumber: 3,
      totalMarks: 20,
      scenario: 'Based strictly on the passage "The Guarded Sanctuary of Bosome" in Question 2, answer the following summary questions in accordance with official WAEC / BECE summary regulations.',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'In TWO sentences, one for each, summarize the two economic promises used by the commercial recruiters to persuade the youth to open up the sacred forest.',
          modelAnswer: '(a) The recruiters offered the community lavish cash compensation.\n(b) They promised the construction of modern roads.',
          markingSchemeRubric: '[B4] Sentence 1: Concise statement of cash compensation / money in candidate\'s own words.\n[B4] Sentence 2: Concise statement of promised modern roads / infrastructure in candidate\'s own words.\n\nExaminer Penalties:\n- Deduct 1 mark for mindless lifting (copying verbatim from the passage).\n- Award 0 marks for incomplete sentence fragments lacking a finite verb.\n- Deduct 1/2 mark for each grammatical, spelling, or punctuation error.',
          maxMarks: 8
        },
        {
          part: '(b)',
          prompt: 'In THREE sentences, one for each, summarize three catastrophic consequences of destroying the sacred grove described in the passage.',
          modelAnswer: '(a) Heavy downpours washed away the protective topsoil, turning the clean river into a contaminated, muddy channel.\n(b) The pollution of the water killed off the aquatic fish life.\n(c) The compacted soil could no longer replenish the underground water sources, completely drying up the community\'s drinking stream.\n[Alternative: Deforestation destroyed the natural habitat and scarce medicinal plants upon which traditional healers depended.]',
          markingSchemeRubric: '[B4] Point 1: Severe soil erosion / river siltation and chemical pollution stated in a complete sentence.\n[B4] Point 2: Massive destruction / death of aquatic fish life stated in a complete sentence.\n[B4] Point 3: Permanent depletion of aquifers causing the total death of the drinking stream stated in a complete sentence.\n\nExaminer Penalties:\n- Deduct 1 mark per point for verbatim copying without paraphrasing.\n- Award 0 marks for incomplete bullet fragments.\n- Deduct 1/2 mark per mechanical/grammatical fault.',
          maxMarks: 12
        }
      ]
    }
  ]
};

// ============================================================================
// ARCHIVED WEEKLY EXAMINATIONS (PAST PAPERS ARCHIVE)
// ============================================================================
export interface ArchivedWeeklyExam extends ScheduledExamConfig {
  sessionDate: string; // e.g. "Sunday, October 18, 2026"
  isConcluded: boolean;
  termWeekLabel: string; // e.g. "Term 1 • Week 1 Official Exam"
}

// Week 1 Official Science Exam (Preserved in full for past practice)
export const WEEK_1_SCIENCE_EXAM: ArchivedWeeklyExam = {
  id: 'jhs3-weekly-exam-2026-10-18-atomic',
  title: 'Weekly Examination: Atomic Structure, Periodic Table & Chemical Bonding',
  level: 'JHS 3',
  subjectId: 'science',
  subjectName: 'Integrated Science',
  topicId: 'jhs3-sci-t1-atomic-structure-bonding',
  topicTitle: 'Atomic Structure, Periodic Table & Chemical Bonding',
  scheduledStartUtc: '2026-10-18T18:00:00.000Z',
  sessionDate: 'Sunday, October 18, 2026',
  isConcluded: true,
  termWeekLabel: 'Term 1 • Week 1 Official Exam',
  windowDurationHours: 6,
  paper1DurationMinutes: 30,
  paper2DurationMinutes: 60,
  paper1MaxMarks: 40,
  paper2MaxMarks: 60,
  totalMarks: 100,
  antiCheatStrict: true,
  paper1Questions: [
    {
      id: 'se-sci-p1-01',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'An atom of an element has 11 protons, 12 neutrons, and 11 electrons. What is the mass number of this atom?',
      optionA: '11',
      optionB: '12',
      optionC: '23',
      optionD: '34',
      correctOption: 'C',
      subConcept: 'Atomic Number and Mass Number',
      explanation: 'Mass number (A) = number of protons (Z) + number of neutrons (n) = 11 + 12 = 23 (Sodium, ²³₁₁Na).',
      remediationTip: 'Remember that mass number counts nuclear particles (protons + neutrons), while atomic number counts protons alone.'
    },
    {
      id: 'se-sci-p1-02',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which subatomic particle has a relative mass of approximately 1/1840 amu and carries a unit negative electrical charge?',
      optionA: 'Proton',
      optionB: 'Neutron',
      optionC: 'Electron',
      optionD: 'Positron',
      correctOption: 'C',
      subConcept: 'Properties of Subatomic Particles',
      explanation: 'Electrons have negligible relative mass (1/1840) compared to protons and neutrons (mass = 1) and possess a -1 charge.',
      remediationTip: 'Proton = +1 charge (mass 1); Neutron = 0 charge (mass 1); Electron = -1 charge (mass 1/1840).'
    },
    {
      id: 'se-sci-p1-03',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'What is the maximum number of electrons that can occupy the third electron shell (M-shell) of an atom?',
      optionA: '2',
      optionB: '8',
      optionC: '18',
      optionD: '32',
      correctOption: 'C',
      subConcept: 'Maximum Electron Capacity of Shells (2n²)',
      explanation: 'According to the formula 2n², for the third shell (n = 3), maximum capacity = 2(3)² = 2(9) = 18 electrons.',
      remediationTip: 'Formula: 2n². K shell (n=1) holds 2; L shell (n=2) holds 8; M shell (n=3) holds 18.'
    },
    {
      id: 'se-sci-p1-04',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'An element X has an atomic number of 15. What is the ground state electron configuration of atom X?',
      optionA: '2, 8, 5',
      optionB: '2, 5, 8',
      optionC: '2, 8, 3, 2',
      optionD: '2, 7, 6',
      correctOption: 'A',
      subConcept: 'Electron Configuration (First 20 Elements)',
      explanation: 'With 15 electrons: K shell takes 2, L shell takes 8, and the remaining 5 electrons enter the M shell: 2, 8, 5 (Phosphorus).',
      remediationTip: 'Fill inner shells to maximum capacity before placing remaining electrons in outer shells.'
    },
    {
      id: 'se-sci-p1-05',
      quizId: 'jhs3-weekly-exam-2026-10-18-atomic',
      questionText: 'Which element is an alkaline earth metal located in Group II and Period 3 of the Periodic Table?',
      optionA: 'Beryllium (Be)',
      optionB: 'Magnesium (Mg)',
      optionC: 'Calcium (Ca)',
      optionD: 'Sodium (Na)',
      correctOption: 'B',
      subConcept: 'Groups and Periods of the Periodic Table',
      explanation: 'Magnesium (atomic number 12, configuration 2, 8, 2) has 3 electron shells (Period 3) and 2 valence electrons (Group II, Alkaline Earth Metals).',
      remediationTip: 'Number of electron shells = Period; Number of valence electrons = Group.'
    }
  ],
  paper2Questions: [
    {
      id: 'se-sci-p2-q1',
      subjectId: 'science',
      subjectName: 'Integrated Science',
      topicId: 'jhs3-sci-t1-atomic-structure-bonding',
      topicTitle: 'Atomic Structure, Periodic Table & Chemical Bonding',
      level: 'JHS 3',
      questionNumber: 1,
      totalMarks: 20,
      scenario: 'The table below provides experimental nuclear and electronic data for five neutral atoms represented by letters P, Q, R, S, and T.\n\n• Atom P: 6 protons, 6 neutrons, 6 electrons\n• Atom Q: 11 protons, 12 neutrons, 11 electrons\n• Atom R: 6 protons, 8 neutrons, 6 electrons\n• Atom S: 12 protons, 12 neutrons, 12 electrons\n• Atom T: 17 protons, 18 neutrons, 17 electrons',
      subQuestions: [
        {
          part: '(a)',
          prompt: 'Calculate the mass number of atom Q and atom T, stating clearly the formula used.',
          modelAnswer: 'Formula: Mass number (A) = Number of protons (Z) + Number of neutrons (n).\n\n• For Atom Q: Mass number = 11 + 12 = 23 (Sodium, ²³₁₁Na).\n• For Atom T: Mass number = 17 + 18 = 35 (Chlorine, ³⁵₁₇Cl).',
          markingSchemeRubric: '[B1] Stating correct formula: Mass number = protons + neutrons\n[A1] Accurate calculation for Atom Q: 23\n[A1] Accurate calculation for Atom T: 35',
          maxMarks: 3
        },
        {
          part: '(b)',
          prompt: 'From the table, identify two atoms that are isotopes of each other. Give a concise scientific explanation for your choice.',
          modelAnswer: 'Atoms P and R are isotopes of each other.\n\nExplanation: Both atom P and atom R have the same atomic number (6 protons), but different numbers of neutrons (P has 6 neutrons while R has 8 neutrons), resulting in different mass numbers (12 and 14 respectively). They represent Carbon-12 and Carbon-14.',
          markingSchemeRubric: '[B1] Correctly identifying atoms P and R\n[B2] Stating that both have same number of protons (6) but different numbers of neutrons (6 vs 8) / different mass numbers',
          maxMarks: 3
        }
      ]
    }
  ]
};

export const PAST_WEEKLY_EXAMS: ArchivedWeeklyExam[] = [
  WEEK_1_SCIENCE_EXAM,
];

export function getPastWeeklyExams(level?: EducationLevel): ArchivedWeeklyExam[] {
  if (!level) return PAST_WEEKLY_EXAMS;
  return PAST_WEEKLY_EXAMS.filter((e) => e.level === level);
}

export function getPastWeeklyExamById(id: string): ArchivedWeeklyExam | undefined {
  return PAST_WEEKLY_EXAMS.find((e) => e.id === id);
}

// ============================================================================
// Storage Keys and State Helpers
// ============================================================================
export const SCHEDULED_EXAM_STORAGE_KEYS = {
  ATTEMPT: 'academicprep_scheduled_exam_attempt_v1',
  PREVIEW_OVERRIDE: 'academicprep_scheduled_exam_preview_active',
  PENALTY_LOCKOUT_UNTIL: 'academicprep_scheduled_penalty_lockout_until',
  ACTIVE_EXAM_END_TIME: 'academicprep_scheduled_exam_end_time',
  ACTIVE_EXAM_CURRENT_PAPER: 'academicprep_scheduled_exam_current_paper',
};

/**
 * Sets a 5-minute penalty lockout timestamp
 */
export function setPenaltyLockout(durationSeconds: number = 300): number {
  if (typeof window === 'undefined') return 0;
  const lockoutUntil = Date.now() + durationSeconds * 1000;
  try {
    localStorage.setItem(SCHEDULED_EXAM_STORAGE_KEYS.PENALTY_LOCKOUT_UNTIL, String(lockoutUntil));
  } catch {}
  return lockoutUntil;
}

/**
 * Returns remaining lockout seconds (0 if none or expired)
 */
export function getRemainingPenaltyLockoutSeconds(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.PENALTY_LOCKOUT_UNTIL);
    if (!raw) return 0;
    const until = parseInt(raw, 10);
    if (isNaN(until)) return 0;
    const diff = Math.max(0, Math.ceil((until - Date.now()) / 1000));
    return diff;
  } catch {
    return 0;
  }
}

/**
 * Clears the penalty lockout once served
 */
export function clearPenaltyLockout(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SCHEDULED_EXAM_STORAGE_KEYS.PENALTY_LOCKOUT_UNTIL);
  } catch {}
}

/**
 * Returns the status of the scheduled examination relative to current time.
 */
export function getScheduledExamStatus(customExam?: ScheduledExamConfig) {
  const exam = customExam || OFFICIAL_SCHEDULED_EXAM;
  const now = new Date().getTime();
  const startTime = new Date(exam.scheduledStartUtc).getTime();
  const endTime = startTime + exam.windowDurationHours * 60 * 60 * 1000;

  // Check preview override for administrative testing
  let isPreview = false;
  if (typeof window !== 'undefined') {
    try {
      const urlParams = new URLSearchParams(window.location.search);
      isPreview = urlParams.get('preview') === 'true' || 
                  urlParams.get('admin') === 'true' ||
                  localStorage.getItem(SCHEDULED_EXAM_STORAGE_KEYS.PREVIEW_OVERRIDE) === 'true';
    } catch {}
  }

  const isLive = isPreview || (now >= startTime && now <= endTime);
  const isEnded = !isPreview && now > endTime;
  const isUpcoming = !isPreview && now < startTime;
  const is5MinWarning = !isPreview && now >= (startTime - 5 * 60 * 1000) && now < startTime;

  const msUntilStart = Math.max(0, startTime - now);
  const msUntilEnd = Math.max(0, endTime - now);

  return {
    isLive,
    isEnded,
    isUpcoming,
    isPreview,
    is5MinWarning,
    startTime: new Date(startTime),
    endTime: new Date(endTime),
    msUntilStart,
    msUntilEnd,
    hoursUntilStart: Math.floor(msUntilStart / (1000 * 60 * 60)),
    minutesUntilStart: Math.floor((msUntilStart % (1000 * 60 * 60)) / (1000 * 60)),
    secondsUntilStart: Math.floor((msUntilStart % (1000 * 60)) / 1000),
  };
}

/**
 * Retrieves past attempt from localStorage
 */
export function getScheduledExamAttempt(examId: string = OFFICIAL_SCHEDULED_EXAM.id): ScheduledExamAttemptRecord | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`${SCHEDULED_EXAM_STORAGE_KEYS.ATTEMPT}_${examId}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Saves a completed or expired attempt to localStorage
 */
export function saveScheduledExamAttempt(attempt: ScheduledExamAttemptRecord): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(
      `${SCHEDULED_EXAM_STORAGE_KEYS.ATTEMPT}_${attempt.examId}`,
      JSON.stringify(attempt)
    );
  } catch (err) {
    console.error('Failed to save scheduled exam attempt:', err);
  }
}

/**
 * Checks whether the current student has already been disqualified / expired
 */
export function isStudentDisqualified(examId: string = OFFICIAL_SCHEDULED_EXAM.id): boolean {
  const attempt = getScheduledExamAttempt(examId);
  return attempt !== null && attempt.status === 'expired';
}
