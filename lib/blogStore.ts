// Blog & Articles Management Store for AcademicPrep
// Handles client & server retrieval, caching, and mutations for educational articles and updates.

export type BlogCategory = 'Study Tips' | 'BECE Updates' | 'Exam Strategy' | 'Announcements';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'Study Tips',
  'BECE Updates',
  'Exam Strategy',
  'Announcements',
];

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: BlogCategory;
  readTimeMinutes: number;
  publishedAt: string;
  featured?: boolean;
  mediaType?: 'image' | 'video' | null;
  mediaUrl?: string | null;
  mediaCaption?: string | null;
}

export interface BlogDraft {
  title: string;
  excerpt: string;
  content: string;
  author: string;
  category: BlogCategory;
  readTimeMinutes: number;
  featured?: boolean;
  mediaType?: 'image' | 'video' | null;
  mediaUrl?: string | null;
  mediaCaption?: string | null;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  {
    "id": "post-1792240429347",
    "title": "7 Psychology Hacks to Study Faster and Remember More",
    "excerpt": "Discover 7 psychology-based study hacks that can help you improve concentration, remember what you learn, and prepare more effectively for examinations. Whether you are preparing for BECE, WASSCE, or school mocks, these practical techniques will help you study smarter, not just harder.",
    "content": "Are you studying for hours but still forgetting what you learned when you enter the examination hall? The problem may not be how much you study, but how you study.\n\nWhether you are preparing for BECE, WASSCE, or your school’s mock examinations, these 7 psychology-based study hacks can help you improve your revision habits and make learning more effective.\n\n1. Use the Pomodoro Technique\n\nStudying for long hours without a break can make you tired and reduce your concentration.\n\nTry this simple method:\n• Study for 25 minutes.\n• Take a 5-minute break.\n• Repeat the process four times.\n• Take a longer break after completing the four sessions.\n\nAdjust the timing to suit your concentration and the subject you are studying.\n\n2. Test Yourself Instead of Only Reading\n\nOne of the most effective ways to learn is to retrieve information from memory.\n\nAfter reading a topic, close your book and answer questions without looking at your notes.\n\nYou can practise using:\n• Past examination questions.\n• Online quizzes.\n• Flashcards.\n• Questions you create yourself.\n\nThe more you practise recalling information, the better you can identify what you know and what needs more revision.\n\n3. Teach Someone What You Have Learned\n\nImagine that you are the teacher and your friend is the student.\n\nExplain the topic using simple language without reading directly from your textbook. If you struggle to explain a particular part, return to your notes and study it again.\n\nThis method helps you identify gaps in your understanding.\n\n4. Connect New Information to What You Already Know\n\nYour brain can find new information easier to understand when you connect it to familiar ideas.\n\nFor example, when studying percentages in Mathematics, think about discounts when shopping. When learning Biology, connect the topic to familiar plants, animals, or activities in everyday life.\n\nLook for examples that make difficult concepts easier to understand.\n\n5. Revise at Different Intervals\n\nDo not wait until the night before an examination to revise everything.\n\nTry this revision schedule:\n• Day 1: Learn the topic.\n• Day 2: Review what you learned.\n• Day 4: Test yourself again.\n• Day 7: Practise related questions.\n• Day 14: Review the topic once more.\n\nYou can adjust this schedule depending on your examination date. Spaced revision helps strengthen long-term memory.\n\n6. Practise Past Questions Under Examination Conditions\n\nReading your notes is important, but you must also know how to apply what you have learned.\n\nChoose a set of past questions, set a timer, and answer them without checking your notes.\n\nAfterwards:\n• Mark your answers honestly.\n• Identify your mistakes.\n• Study the topics you performed poorly in.\n• Attempt similar questions again.\n\nThis helps you improve your accuracy, speed, and confidence before the examination.\n\n7. Use Mind Maps, Diagrams, and Short Notes\n\nDo not make every revision session about reading long paragraphs.\n\nTry using:\n• Mind maps to connect related ideas.\n• Diagrams to understand scientific processes.\n• Tables to compare concepts.\n• Flashcards to remember definitions and formulas.\n• Short summaries to review important points quickly.\n\nChoose the method that best suits the topic. For subjects that require calculations, spend enough time solving problems instead of only making notes.\n\nBONUS: Create a Personal Study Timetable\n\nA good study timetable helps you organise your time and avoid last-minute preparation.\n\nMake sure your timetable includes:\n• The subjects you find difficult.\n• Time for practising examination questions.\n• Short breaks.\n• Regular revision of previous topics.\n• Enough time for sleep and rest.\n\nBe realistic and follow your timetable consistently.\n\nPrepare for BECE and WASSCE With AcademicPrep\n\nYou do not have to prepare for your examinations without support.\n\nVisit https://www.acadmicprep.com to access learning materials, quizzes, mock examinations, past questions, questions and answers, and marking schemes.\n\nWhether you are a JHS or SHS student, make every study session count by combining effective revision with regular practice.\n\nRemember: Success does not come from reading your books all day without a plan. It comes from understanding what you learn, practising consistently, correcting your mistakes, and preparing ahead of time.\n\nCHALLENGE FOR STUDENTS\n\nChoose any two of these study hacks and use them consistently for the next seven days.\n\nAt the end of the week, ask yourself:\n\n1. Am I remembering more of what I study?\n2. Am I answering questions more confidently?\n3. Which technique works best for me?\n\nShare this article with your classmates and study partners. Someone you help today may perform better in their next examination.\n\nAcademicPrep , Prepare Better. Perform Better.",
    "author": "Dollar Power (Examiner)",
    "category": "Study Tips",
    "readTimeMinutes": 10,
    "publishedAt": "2026-10-17T12:33:49.347Z",
    "featured": true,
    "mediaType": "video",
    "mediaUrl": "https://youtube.com/shorts/n2EY5jTxsPE?si=XQ_TKbgDUgTfB5UO",
    "mediaCaption": "7 Psychology Hacks to Study Faster and Remember More"
  },
  {
    "id": "post-1791920041571",
    "title": "Create Your Own Personal Time Table",
    "excerpt": "A feature that allows students to create a timetable based on your decisions.",
    "content": "Academic Prep has now built a function to help students with personal times table in the profile section, this feature targets your weakness in topics and also your strength, it also gives you study patterns to learn efficiently and is very flexible based on your desired time of study, it is also included in the free trial pass. Please test it out and leave comments in the student lounge for further improvements.\n\nTHANK YOU",
    "author": "AcademicPrep Editorial",
    "category": "Announcements",
    "readTimeMinutes": 1,
    "publishedAt": "2026-10-13T19:34:01.571Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://ynqlfjoybxzrgczktrht.supabase.co/storage/v1/object/public/documents/1791920024395_Screenshot_2026-10-13_193308.png",
    "mediaCaption": null
  },
  {
    "id": "post-1791900521583",
    "title": "Speed, Time and Distance: Easy Formulas for BECE & WASSCE Mathematics",
    "excerpt": "Learn how to calculate speed, time and distance using simple formulas and the triangle method. This guide includes worked examples to help BECE and WASSCE candidates solve examination questions confidently.",
    "content": "Speed, Time and Distance: Easy Formulas for BECE & WASSCE Mathematics\n\nAre you preparing for the BECE or WASSCE? Understanding speed, time and distance can help you solve many Mathematics questions more easily.\n\nIn this lesson, we will explain the formulas, show you how to use them, and work through examples.\n\n1. The Three Important Formulas\n\nRemember these formulas:\n\n* Distance = Speed × Time\n* Speed = Distance ÷ Time\n* Time = Distance ÷ Speed\n\nYou can also use the speed, time and distance triangle to remember which operation to perform.\n\n2. Worked Examples\n\nExample 1: Calculate Distance\n\nA car travels at 60 km/h for 3 hours. Find the distance covered.\n\nSolution:\n\nDistance = Speed × Time\n\nDistance = 60 × 3\n\nAnswer: 180 km\n\nExample 2: Calculate Speed\n\nA bus covers 150 km in 3 hours. Calculate its average speed.\n\nSolution:\n\nSpeed = Distance ÷ Time\n\nSpeed = 150 ÷ 3\n\nAnswer: 50 km/h\n\nExample 3: Calculate Time\n\nA cyclist covers 40 km at an average speed of 20 km/h. Calculate the time taken.\n\nSolution:\n\nTime = Distance ÷ Speed\n\nTime = 40 ÷ 20\n\nAnswer: 2 hours\n\n3. Important Examination Tips\n\n* Always identify what the question requires you to calculate.\n* Write down the correct formula before substituting the values.\n* Pay attention to units such as kilometres, metres, hours and seconds.\n* Convert units where necessary before calculating.\n* Show your working clearly to make your solution easy to follow.\n\n4. Test Yourself\n\nTry these questions without looking at the examples.\n\n1. A vehicle travels at 80 km/h for 2.5 hours. Calculate the distance covered.\n2. A runner covers 400 metres in 50 seconds. Calculate the average speed in metres per second.\n3. A bus travels 240 km at an average speed of 60 km/h. Calculate the time taken.\n\nAnswers:\n\n1. 200 km\n2. 8 m/s\n3. 4 hours\n\nPrepare for BECE and WASSCE with AcademicPrep\n\nLearning a formula is only the beginning. Regular practice helps you apply it correctly under examination conditions.\n\nVisit https://www.acadmicprep.com/shs for SHS learning materials, mock examinations, quizzes, past questions, questions and answers, and marking schemes.\n\nFor your BECE and WASSCE preparation, explore the relevant JHS and SHS learning resources on AcademicPrep as well.\n\nAcademicPrep , Study smart. Practise consistently. Prepare to excel!",
    "author": "AcademicPrep Editorial",
    "category": "Exam Strategy",
    "readTimeMinutes": 10,
    "publishedAt": "2026-10-13T14:08:41.583Z",
    "featured": false,
    "mediaType": "video",
    "mediaUrl": "https://youtube.com/shorts/mR5lbYPHjzM?si=jIDObutzMhC9btNN",
    "mediaCaption": "Speed, Time and Distance: BECE & WASSCE Mathematics."
  },
  {
    "id": "post-1791803787108",
    "title": "Introducing the BECE Aggregate & SHS Placement Predictor",
    "excerpt": "Know Where You Stand Before WAEC Results Drop! Stop guessing your grade! Predict your BECE raw aggregate (06 to 15+), find out which Category A, B, and C Senior High Schools you qualify for, and see exactly where to boost your marks.",
    "content": "For most JHS 3 candidates, calculating an aggregate feels difficult. And when it comes to choosing Senior High Schools figuring out whether you actually stand a realistic chance at schools like Presec Legon, Wesley Girls, Achimota, Prempeh, or Adisco, etc. the confusion only gets worse.\n\nTo put an end to the guesswork, we have built a free, simple tool directly into Academic Prep: The BECE Aggregate & School Predictor.\n\nBefore you go and test your scores, let’s talk honestly about how the BECE aggregate really works, the common traps students fall into, and how you can use this tool to take control of your results before the real WAEC exams.\n\nTHANK YOU",
    "author": "Admin",
    "category": "Announcements",
    "readTimeMinutes": 4,
    "publishedAt": "2026-10-12T11:16:27.108Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://ynqlfjoybxzrgczktrht.supabase.co/storage/v1/object/public/documents/1791803747425_Screenshot_2026-10-12_111520.png",
    "mediaCaption": null
  },
  {
    "id": "post-1791640361533",
    "title": "Strike Suspended: Schools to Resume on Monday, October 12, 2026",
    "excerpt": "School resumption update 🇬🇭🙏🏽 The strike has reportedly been suspended, with schools expected to resume on Monday, October 12, 2026. Students and parents should stay alert for official updates.",
    "content": "Strike Suspended: Schools to Resume on Monday\n \nThere is encouraging news for students, parents, and teachers across Ghana following reports that the ongoing strike has been suspended.\n \nSchool is expected to resume on Monday, October 12, 2026.\n \nStudents are encouraged to prepare for the return to the classroom, organize their learning materials, and get ready to continue their academic work.\n \nParents and guardians are also encouraged to follow official announcements for any further updates regarding school resumption.\n \n🙏🏽 We wish all students a smooth return to school and a successful academic term.\n \nStay connected with Academic Prep for education news, study materials, quizzes, past questions, and examination updates.\n \n🌐 https://www.acadmicprep.com/\n \nAcademic Prep — Learn, Practice, Succeed.",
    "author": "AcademicPrep Editorial",
    "category": "Announcements",
    "readTimeMinutes": 4,
    "publishedAt": "2026-10-10T13:52:41.533Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://ynqlfjoybxzrgczktrht.supabase.co/storage/v1/object/public/documents/1791640226371_1750034.jpg",
    "mediaCaption": "#GES , #STRIKE SUSPENSION,#TEACHERS #SHS, #JHS, #Universities"
  },
  {
    "id": "post-1791482389920",
    "title": "New Student Engagement Lounge",
    "excerpt": "A new comment section made for students to share view points, educational tips and many more.",
    "content": "Academic Prep has built a new function to help students engage socially and discuss educational topics and also make new learning partners in the process of consuming educational knowledge. Only sound and educational comments will be accepted, any vile or offensive comment made by a user will be penalized, we gladly seek for your full co-operation.\n\n\n\nTHANK YOU,\nLeo Kofi Derksen.",
    "author": "Admin",
    "category": "Announcements",
    "readTimeMinutes": 2,
    "publishedAt": "2026-10-08T17:59:49.920Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://ynqlfjoybxzrgczktrht.supabase.co/storage/v1/object/public/documents/1791482371948_Screenshot_2026-10-08_175914.png",
    "mediaCaption": null
  },
  {
    "id": "post-1791324509414",
    "title": "Support And Enquiries",
    "excerpt": "Questions, Request and many more concerning the software",
    "content": "Please feel free to contact +233-598680053 or email: leokofiderksen@gmail.com for any questions or enquires concerning this website and also payment issues\n\nTHANK YOU!",
    "author": "Admin",
    "category": "Announcements",
    "readTimeMinutes": 1,
    "publishedAt": "2026-10-06T22:08:29.414Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://ynqlfjoybxzrgczktrht.supabase.co/storage/v1/object/public/documents/1791324503603_Screenshot_2026-10-06_220804.png",
    "mediaCaption": null
  },
  {
    "id": "post-1791322169323",
    "title": "Academic Prep 30 Day VIP Pass For Free Users",
    "excerpt": "Already VIP users will receive additional 30 days making it a 60 days VIP pass",
    "content": "Huge progressions have been gained, surpassing our aimed goals, so Academic prep has decided to grant a free 30 day pass to free trial users, and grant additional 30 days to already paid users.\nWe gladly appreciate your loyalty in your educational progress,\n\nTHANKS",
    "author": "Admin",
    "category": "Announcements",
    "readTimeMinutes": 1,
    "publishedAt": "2026-10-06T21:29:29.323Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://ynqlfjoybxzrgczktrht.supabase.co/storage/v1/object/public/documents/1791324531409_Screenshot_2026-10-06_215821.png",
    "mediaCaption": null
  },
  {
    "id": "post-1791205863174",
    "title": "Wassce English Oral",
    "excerpt": "WASSCE ORAL ENGLISH TECHNIQUES",
    "content": "WASSCE ORAL ENGLISH TECHNIGUES\n\nFINAL UPDATE ON ORALS:\n\nThe oral English for WASSCE has 60 items (questions). Candidates taking the WASSCE are to answer them all. The 60 items are divided into categories numbered test 1 to test 8. Test 1, 2, 3, 4,& 5 has to do with the three basic sounds. (initial, medial & final sounds) \n \n*1.     INITIAL SOUND:*  \nEx \nIs the first sound produced when pronouncing a word. E.g., sheep, the first sound is sh, in cheat, the first sound is ch and in beat, the first sound is b. \n \n*2.    MEDIAL SOUND:* \n \n Is the sound produced in the middle of the word. E.g., in sheep, the meddle sound is ee, in cheat, the meddle sound is ea., and in beat, the meddle sound is ea. \n \n*3.      FINAL SOUND:*  \n \nThis is the sound produced at the end of a word. E.g., in seed, d is the final sound, and in beat, t is the final sound. \n \n*TEST 1, 2, & 3 CONTENT AND TECHNIQUES.* \n \nTest 1 has 15 items (1-15), lettered A to C, test 2 has 15 items (15-30), test 3 has 10 items (31-40). No sooner the play button is pressed to play, your attention should be on every word in the test. One of the speakers will start giving instructions followed by two examples. After the examples, one of the speakers will say: \"listen carefully. In this test there are three words to a line\". You will begin to shade on your answer sheet when you hear one of the speakers saying: \"now get ready to answer the rest of test one on your answer sheet start at number 1\". Examples: a. Teach b. Cheat c. Eat. \nThere are differences among the words in terms of initial, medial, and final. \nTest 1, 2, & 3 has the same explanation and techniques. \n \n      *TEST FOUR (4):* \n \nIn test four, there are three sentential options. You should also listen to any instructions or examples given by one of the speakers. Among the three optional sentences, the speaker will read one of them and you should be smart enough to detect the actual word pronounced by the speaker. These are words with almost the same sound but different in spelling and meaning. Eg:  \n1.a. \"The war was caused by his (tribe)\".   \nb. \"The war was caused by his (bribe)\". \nC. \"The war was cause by his (pride)\". \nE.g.: 2. a. \"He's just (found) his father\". \nb. \"He's just (fanned) his father\". \nC. \"He's just (phoned) his father\". \n \n       *TEST FIVE (5):* \n \nThis test is about rhyming scheme. The medial and the final are combined to pronounce the word. Eg, The speaker may pronounce the word 'sing' while in the options you will see: \n \na. Singe \nb. Wing \nC. Sink \nd. Snick \nIn the above options, b is the correct one because it has the same medial and final sound with the speaker's word. It is hard to see in the options the very word pronounced by the speaker. \n \n       *TEST SIX (6)* \n \nThis test is focusing on questions and answers. The responses that will be made by one of the speakers on the numbered items referred to as the answers. To make it simple the following rules must be considered: \n \n             *RULE 1:* \n \nThe responses/answers that will be provided by one of the speakers is what is referred to as stressed word. The stressed word is pronounced with some amount of breath forced to differentiate it from the other words. The unstressed word in the options carries the correct answer. Example, one of the speakers will say: ' He borrowed my phone'. \n \na. \"Who borrowed your phone?\" \n \nb. \"Did he steal your phone?\" \n \nC. \"Did Patrick Moiwai borrowed you phone?\" \n \nIn this case, b is the correct option because it does not contain the stressed word 'borrowed'. \n \n              *RULE 2:* \n \n At times the stressed word is not present in the three options. The candidate should consider one of the following; what, whose, which, where, who, when, that corresponds with the statement of the speaker. Example: Patrick Maada Moiwai has gone to the park (said one of the speakers). \n \na. Where has Patrick Maada Moiwai gone? \n \nb. Is Patrick Maada Moiwai gone to school? \n \nC. What has Patrick Maada Moiwai done? \n \n The correct option is a. It has the appropriate word\n\nORAL TECHNIQUES \n*CONTINUE* 👇👇👇👇👇\n\n\nd .where that corresponds with the speaker's statement. \n \n             *RULE 3:* \n \n It States that the auxiliary verb that is found in the sentence should be taken to the beginning of the correct option that will corresponds with the speaker's statement. In forming the appropriate question, the stressed word of the speaker must not be found in the question (the correct option). Example: Maada is driving a car. \n \na. Is Maada driving a car? \n \nb. Which car is Masada driving? \n \nc. Is Maada driving a truck?  \n \nThe correct answer is c because the auxiliary verb 'is' is at the beginning of the sentence, and c doesn't has the stressed word car. \n \n           *RULE 4:* \n \nThis rule states that the 'tense' used in the statement of the speaker must reflect in the correct option, but without the stressed word. Example: Patrick drove a car yesterday. \n \na. What did Patrick do yesterday? \n \nb. Did Patrick drive a car today? \n \nc. Who drove a car yesterday?  \n \nThe correct option is 'b' because it reflects the tense in the speaker's statement, and doesn't has the stressed word. \n \n     *TEST SEVEN (7):* \n \nIn this test you will hear short conversation between a man and a woman. The candidate must be able to detect which of the speakers in the conversation is rude or polite, sure of what is being said or not, angry or not, admiring or not admiring, surprise or not, agrees or disagrees. The candidate must be able to determine the attitudes of the speakers. Observe the following rules: \n \n             *RULE 1:* \n \n When one of the speakers or both use the words \"not sure\" or \"said\" shows that he/she is not sure/certain. Among the options it may state which of them is sure or not, agrees or not, and the like. \n \n            *RULE 2:* \n \nIt explains intonation. This simply means the rise and fall of someone's voice in making a speech. When the voice of anyone of the speakers fall, shows that he or she is sure of what is being said, but when the voice rises suddenly as if one is asking a question, clearly shows that the speaker is not sure. Of course, when a speaker asks question shows he/she is not sure. \n \n            *RULE 3:* \n \nWhen one or both of the speakers voices are rough, it clearly shows that he/she or both of them are angry/rude/impolite. \n \n*RULE 4:* \n \nWhen the speaker/speakers use any confirmation words like is true or obvious and the voice falls, shows that he/she is certain. \n \n       *TEST EIGHT 8:* \n \nThis is the final test. It contains conversation and narrative. In this test, the speaker will narrate a story, and questions will be asked from this story. As such, the candidate is required to listen attentively to the speaker as it will enable the candidate to answer the correct option. Examples: it was in march when Mr. Moiwai got an appointment from one of the local NGOs to work in Freetown. He decided to settle in Freetown with his family. He was very curious to let his two children go to school and to pay his younger sister's university fees. \n1. What kind of family Mr. Moiwai lives in? (extended family) ans. \n2. At what season Mr. Moiwai leaves for Freetown? (dry season) ans. \nHere the logical faculty of the candidate is tested, as how best he/she can be able to answer question which its answer is not apparent in the passage read. \n \n*apply the above explanations for your wassce oral English solutions*",
    "author": "AcademicPrep Editorial",
    "category": "Exam Strategy",
    "readTimeMinutes": 4,
    "publishedAt": "2026-10-05T13:11:03.174Z",
    "featured": true,
    "mediaType": "video",
    "mediaUrl": "https://youtu.be/5cAq1eliG1M?si=p1olt0OUtE-AE0tF",
    "mediaCaption": "Wassce English Oral  techniques"
  },
  {
    "id": "post-1",
    "title": "How to Score Raw 1s in Core Mathematics & Integrated Science for BECE 2026",
    "excerpt": "Step-by-step revision strategy focusing on high-frequency WAEC topics, formula recall, and chief examiner report pointers.",
    "author": "AcademicPrep Editorial",
    "category": "Exam Strategy",
    "readTimeMinutes": 4,
    "publishedAt": "2026-09-28T09:00:00Z",
    "featured": false,
    "mediaType": "image",
    "mediaUrl": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    "mediaCaption": "Examiner-recommended study blueprint for scoring Grade 1 in Core Subjects.",
    "content": "Achieving a Grade 1 in Core Mathematics and Integrated Science is not about studying 12 hours a day; it is about targeting the exact areas where WAEC examiners award the most marks.\n\n1. Master the Top Recurring Science Topics\nEvery BECE Integrated Science Paper 2 (Theory) features compulsory questions on:\n• Soil Science and Plant Nutrition\n• Photosynthesis and Respiration\n• Simple Machines, Work, and Energy\n• Acids, Bases, and Salts\n• Electric Circuits and Magnetism\n\nMake sure you know the exact diagrams for standard laboratory apparatus (e.g., separating funnel, distillation setup, and seed germination).\n\n2. Mathematics: The Method Mark Rule\nWAEC examiners use \"M-Marks\" (Method marks) and \"A-Marks\" (Accuracy marks). Even if your final calculation is wrong, showing every single step guarantees up to 80% of the question's total score.\n• Always state the formula first.\n• Substitute values into the formula clearly.\n• Write down all intermediate calculations.\n• Remember to specify units (cm², kg, GHS, etc.) in your final answer.\n\n3. Complete at Least 5 Past Papers Under Timed Conditions\nSpeed is the number one obstacle for most JHS candidates. Use the \"Past Questions\" and \"Curriculum Quizzes\" on AcademicPrep to simulate real 60-minute objective papers so you never run out of time in the exam hall."
  },
  {
    "id": "post-2",
    "title": "5 Costly Mistakes JHS Candidates Make in English Language Comprehension",
    "excerpt": "Learn how to answer summary questions, identify figures of speech, and avoid grammatical blunders that deduct marks.",
    "author": "Leo Derksen (English Specialist)",
    "category": "Study Tips",
    "readTimeMinutes": 5,
    "publishedAt": "2026-09-25T14:30:00Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1000&q=80",
    "mediaCaption": "Effective reading and summary techniques for BECE English Section B.",
    "content": "Chief Examiner Reports consistently highlight that students lose the easiest marks in English Section B (Comprehension and Summary). Here are the five mistakes you must eliminate:\n\n1. Lifting Directly from the Passage\nWhen a question asks you to \"explain in your own words\", copying sentences word-for-word results in zero marks. Practice summarizing sentences using synonyms.\n\n2. Misidentifying Grammatical Functions\nKnow the difference between a Noun Clause and an Adverbial Clause of Time. Whenever WAEC asks \"What grammatical name is given to this expression and what is its function?\", follow this standard answer formula:\n• Name: Noun Clause\n• Function: It serves as the subject/object of the verb \"...\"\n\n3. Neglecting Punctuation in Summary Writing\nIn summary questions, every sentence must start with a capital letter and end with a full stop. Incomplete sentences receive severe penalties.\n\n4. Writing Too Much in Summary Questions\nIf the question says \"In three sentences, summarize...\", writing four sentences means the fourth sentence will simply not be marked. Stick strictly to the instructed number of points.\n\n5. Leaving Vocabulary Questions Blank\nAlways make an educated guess using context clues from the surrounding sentences. Never leave any question unanswered!"
  },
  {
    "id": "post-3",
    "title": "Official 2026 BECE Timetable & Registration Updates Announced by WAEC",
    "excerpt": "Key dates, candidate registration verification details, and rules for school and private candidates across all regions.",
    "author": "AcademicPrep News Desk",
    "category": "BECE Updates",
    "readTimeMinutes": 3,
    "publishedAt": "2026-09-20T11:00:00Z",
    "featured": true,
    "mediaType": "image",
    "mediaUrl": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80",
    "mediaCaption": "Official WAEC exam registration timelines and centre accreditation details.",
    "content": "The West African Examinations Council (WAEC) has released the preliminary schedule and guidelines for the upcoming Basic Education Certificate Examination (BECE).\n\nKey Examination Information:\n• Examination Sitting Date: Scheduled to commence in July 2026.\n• Candidate Biodata Verification: All heads of basic schools must finalize biometric capturing and spelling of names by the end of November.\n• Index Number Allocation: Confirmation slips will be distributed two months prior to the first paper.\n\nImportant Advice for Candidates:\n1. Double-check the spelling of your full name on your school's registration slip. Correcting a name after certificate issuance involves a lengthy process.\n2. Ensure your subject selections correctly reflect whether you are sitting for French, Ghanaian Language, or ICT.\n3. Stay updated by checking AcademicPrep announcements regularly."
  },
  {
    "id": "post-4",
    "title": "Active Recall & The 20-Minute Study Rule: Boost Your Memory",
    "excerpt": "How to retain complicated definitions in Social Studies and RME without cramming the night before.",
    "author": "Leo Kofi Derksen",
    "category": "Study Tips",
    "readTimeMinutes": 4,
    "publishedAt": "2026-09-15T16:00:00Z",
    "featured": false,
    "mediaType": "video",
    "mediaUrl": "https://www.youtube.com/watch?v=ukLnPbI9ngo",
    "mediaCaption": "Video masterclass: How to retain difficult definitions and science diagrams with active recall.",
    "content": "Passive reading (just staring at notes or re-reading a textbook) gives you the illusion of learning. Within 48 hours, over 70% of that information vanishes from your memory.\n\nWhat is Active Recall?\nActive recall means closing your notebook and actively forcing your brain to retrieve the information.\n\nHow to use it today on AcademicPrep:\n1. Read a lesson topic for 15 minutes in the JHS Curriculum section.\n2. Close the browser tab or look away and write down the key definitions on a rough sheet of paper.\n3. Immediately take the topic's interactive quiz. The instant feedback reinforces your neural pathways.\n4. Repeat this 3 days later.\n\nBy replacing passive reading with active testing, you will remember facts effortlessly when sitting for your BECE."
  }
];

const BLOG_LOCAL_STORAGE_KEY = 'academicprep_blog_posts_v1';

let inMemoryBlogCache: BlogPost[] | null = null;
let activeBlogFetchPromise: Promise<BlogPost[]> | null = null;

/**
 * Client-side fetcher: grabs all blog posts with immediate local cache return & background revalidation
 */
export async function fetchBlogPosts(category?: string): Promise<BlogPost[]> {
  // 1. If in-memory cache exists and no category filter, return immediately (0ms)
  if (inMemoryBlogCache && (!category || category === 'ALL')) {
    return inMemoryBlogCache;
  }

  // 2. Read local storage cache first to return instantly
  if (typeof window !== 'undefined' && !inMemoryBlogCache) {
    try {
      const cached = localStorage.getItem(BLOG_LOCAL_STORAGE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        if (Array.isArray(parsed) && parsed.length > 0) {
          inMemoryBlogCache = parsed;
          if (!category || category === 'ALL') {
            // Trigger background fetch to stay fresh, but return instantly
            refreshBlogInBackground();
            return parsed;
          }
          return parsed.filter((p) => p.category === category);
        }
      }
    } catch {
      // Ignore
    }
  }

  // 3. Deduplicate active network fetch across components
  if (!activeBlogFetchPromise) {
    activeBlogFetchPromise = (async () => {
      try {
        const res = await fetch('/api/blog', { cache: 'default' });
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            inMemoryBlogCache = data;
            if (typeof window !== 'undefined') {
              try {
                localStorage.setItem(BLOG_LOCAL_STORAGE_KEY, JSON.stringify(data));
              } catch {}
            }
            return data;
          }
        }
      } catch (err) {
        console.warn('Network blog fetch note:', err);
      } finally {
        activeBlogFetchPromise = null;
      }
      return inMemoryBlogCache || INITIAL_BLOG_POSTS;
    })();
  }

  const posts = await activeBlogFetchPromise;
  return category && category !== 'ALL'
    ? posts.filter((p) => p.category === category)
    : posts;
}

function refreshBlogInBackground() {
  if (activeBlogFetchPromise) return;
  activeBlogFetchPromise = fetch('/api/blog', { cache: 'default' })
    .then((r) => r.ok ? r.json() : null)
    .then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        inMemoryBlogCache = data;
        try {
          localStorage.setItem(BLOG_LOCAL_STORAGE_KEY, JSON.stringify(data));
        } catch {}
      }
      return inMemoryBlogCache || INITIAL_BLOG_POSTS;
    })
    .catch(() => inMemoryBlogCache || INITIAL_BLOG_POSTS)
    .finally(() => {
      activeBlogFetchPromise = null;
    });
}

/**
 * Fetch a single blog post by its ID
 */
export async function fetchBlogPostById(id: string): Promise<BlogPost | undefined> {
  try {
    const res = await fetch(`/api/blog?id=${encodeURIComponent(id)}`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (data && data.id) {
        return data as BlogPost;
      }
    }
  } catch (err) {
    console.warn(`Failed to fetch article ${id} from API:`, err);
  }

  const all = await fetchBlogPosts();
  return all.find((p) => p.id === id);
}

/**
 * Admin action: Create a new blog post
 */
export async function createBlogPost(draft: BlogDraft): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    const res = await fetch('/api/blog', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(draft),
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to publish post.' };
    }
    return { success: true, post: data?.post };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error while publishing post.' };
  }
}

/**
 * Admin action: Update a blog post
 */
export async function updateBlogPost(id: string, updates: Partial<BlogDraft>): Promise<{ success: boolean; post?: BlogPost; error?: string }> {
  try {
    const res = await fetch('/api/blog', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, ...updates }),
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to update post.' };
    }
    return { success: true, post: data?.post };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error while updating post.' };
  }
}

/**
 * Admin action: Delete a blog post
 */
export async function deleteBlogPost(id: string): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch(`/api/blog?id=${encodeURIComponent(id)}`, {
      method: 'DELETE',
    });
    const data = await res.json();
    if (!res.ok) {
      return { success: false, error: data?.error || 'Failed to delete post.' };
    }
    return { success: true };
  } catch (err: any) {
    return { success: false, error: err?.message || 'Network error while deleting post.' };
  }
}
