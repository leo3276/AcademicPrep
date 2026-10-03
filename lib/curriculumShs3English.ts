// Ghanaian SHS 3 English Language Curriculum — Terms 1, 2 and 3
// Based on the WAEC / WASSCE Ghana Senior High School English Language syllabus
// Textbook-grade notes, worked examples with method marks, and WAEC-standard quizzes

import { CurriculumTopic } from './types';

export const SHS3_ENGLISH_TOPICS: CurriculumTopic[] = [
  // =========================================================================
  // TERM 1
  // =========================================================================
// =========================================================================
  // TERM 1
  // =========================================================================
  {
    id: 'shs3-eng-t1-oral-stress-intonation',
    subjectId: 'english',
    level: 'SHS 3',
    term: 1,
    orderIndex: 1,
    title: 'Word Stress, Sentence Stress and Intonation Patterns',
    description: 'Consolidation of oral English for the final revision year: stressed and unstressed syllables, the schwa, stress-timed rhythm, the four intonation patterns and the meanings they carry, question and tag intonation, and contrastive stress.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=WUBo_J9hQRA',
    youtubeId: 'WUBo_J9hQRA',
    keyNotes: `• Every multi-syllable English word carries ONE primary stress, shown /' before the stressed syllable: re'cord (verb) versus 'record (noun).
• Unstressed syllables reduce to the neutral schwa, the commonest sound in English, so a'bout is really /a'baʊt/.
• Two-syllable nouns and adjectives usually stress the FIRST beat: 'table, 'happy; two-syllable verbs and prepositions stress the SECOND: be'gin, re'lax.
• Words ending in -tion, -sion, -ic and -ity carry the stress on the syllable before the ending: edu'cation, deci'sion, ro'Mantic, uni'versity.
• English is stress-timed: "the CAT sat on the MAT", strong beats fall at regular intervals while weak syllables are squeezed in between.
• Content words (nouns, main verbs, adjectives, adverbs, numerals) take sentence stress; function words (articles, prepositions, auxiliaries) hide in weak forms.
• Falling tone \u2198 marks certainty and finality: "I am going home.\u2198" and every wh-question: "Where do you live?\u2198"
• Rising tone \u2197 marks unfinished meaning, a yes-no question or doubt: "Are you ready?\u2197" plus the first items of a list.
• Fall-rise \u2198\u2197 carries hesitation, reservation or a silent "but": "Yes, it is fine.\u2198\u2197" said guardedly.
• Level tone \u2192 stays flat and uncommitted, typical of a dull list read without feeling.
• Tag questions split by intent: a falling tag "It is cold, is it not?\u2198" seeks agreement, a rising tag "You came, did you not?\u2197" asks genuinely.
• Contrastive stress rewrites the message: "I BOUGHT it" denies selling, "I bought IT" denies borrowing.
• The long mark /ː/ shows vowel length: "ship" /ʃɪp/ versus "sheep" /ʃiːp/ differ by length as well as quality.
• In Paper 1 orals hear the stressed syllable first; the objective item asks which word breaks the pattern.`,
    detailedNotes: {
      overview: 'This module consolidates oral English for the final revision year: word stress, sentence stress and the four intonation patterns that carry meaning in WASSCE Paper 1. It treats sound as a system of marks to be read and reproduced, not as vague advice to speak clearly.',
      introduction: 'Approach every spoken sentence with the ear of an examiner. Hear where the pitch and the force fall, name the pattern, then reproduce it deliberately; correct pronunciation is a set of learnable signals rather than a natural gift.',
      realWorldContext: 'During morning assembly a prefect reads a notice and the whole hall cannot tell when she has finished a sentence, because her flat word-by-word delivery hides the stress and rhythm that would make her clear. Ghanaian mother tongues are tonal and syllable-timed, so English word stress, the schwa and sentence intonation come unnaturally and must be trained. A WASSCE oral candidate who masters stress and tone is understood on the first hearing, and that ease is worth real marks.',
      objectives: [
        'Identify and mark the primary stressed syllable in a multi-syllable English word',
        'Reduce unstressed vowels to the schwa to produce natural word shapes',
        'Apply sentence stress and stress-timed rhythm to a spoken line',
        'Name the four intonation patterns and the meaning each one conveys',
        'Choose correct intonation for statements, questions and tags and use contrastive stress'
      ],
      sections: [
        {
          title: 'Word Stress and the Schwa',
          content: 'Word stress is the spine of an intelligible English word, not decoration. When you say a multi-syllable word, one syllable is louder, higher, longer and keeps its full vowel quality, while the others are crushed toward the neutral schwa. Move the stress and you change the word class or the meaning: the noun record falls on the first beat while the verb record rises to the second. Ghanaian candidates often stress the wrong syllable because their first language carries tone instead of stress, so drilling the dictionary mark is the fastest cure and is exactly what Paper 1 tests when it asks which word has a different stress pattern.',
          bulletPoints: [
            'A noun such as "present" stresses the first syllable, while the verb "present" stresses the second.',
            'Every vowel around the strong beat weakens, most often drifting toward the schwa sound.',
            'Words ending in -tion, -sion, -ic and -ity place the stress on the syllable just before the ending.',
            'Two-syllable verbs and prepositions usually rise, as in "begin", "obey", "about", while many nouns and adjectives fall on the first beat.',
            'Compound nouns stress the first element, as in "blackboard", while compound verbs and adjectives stress the second, as in "understand" and "well-known".'
          ],
          keyTakeaway: 'Say the word slowly, feel which syllable pushes hardest, and relax every other vowel toward the schwa.',
          realWorldExample: 'A Kumasi pupil reads phoTOgraphy with the beat on the second syllable while a classmate says PHOtoGraphy; only the first matches the dictionary and scores the stress item.'
        },
        {
          title: 'Sentence Stress, Weak Forms and Rhythm',
          content: 'Sentences do not stress every word equally. Content words that carry meaning, such as nouns, main verbs, adjectives, adverbs and numerals, receive the beat, while grammar words such as articles, prepositions, auxiliaries, pronouns and conjunctions slide into weak forms built on the schwa. Because English is stress-timed, the strong beats tend to arrive at regular intervals, so a speaker squeezes extra weak syllables between two beats rather than stretching each word. This is why a conductor can fire the rapid function words and still keep the place names audible; a learner who weights every word alike sounds staccato and hard to follow.',
          bulletPoints: [
            'In "the BOYS gave TWO old MANGOES" the bold words are the stressed content words.',
            'The auxiliary hides in a weak form, so "I can go" pronounces can as /kən/ and not /kæn/.',
            'Prepositions reduce: "for" becomes /fə/, "to" becomes /tə/, "at" becomes /ət/.',
            'A contrastive idea can steal the beat from the usual pattern when the speaker singles one word out.',
            'Meaning words keep full vowels; only grammar words are allowed to lose their vowel to the schwa.'
          ],
          keyTakeaway: 'Stress the words that carry the message and glide over the words that merely hold the grammar together.',
          realWorldExample: 'On a Joy FM morning newsbeat an announcer stresses "Kumasi", "market" and "flooded" while "the road through" melts into a quick weak rhythm.'
        },
        {
          title: 'The Four Intonation Patterns',
          content: 'Intonation is the rise and fall of pitch across a tone unit, and WASSCE expects you to name four patterns. The falling tone, shown with a down arrow, closes a statement, a command or a wh-question and signals certainty and finality. The rising tone leaves the door open: it turns a phrase into a yes-no question, marks an unfinished list, or betrays surprise and doubt. The fall-rise is the tone of hesitation, polite reservation or a silent but hanging after a guarded reply. The level tone stays flat, common when someone reads a dull catalogue or holds back feeling, and can even sound disinterested.',
          bulletPoints: [
            'Falling tone is normal on a plain statement of fact: "Ama lives in Ho."',
            'Rising tone turns a sentence into a yes-no question: "Ama lives in Ho?"',
            'The first items of a list rise and only the last falls: "rice, beans, gari and stew."',
            'A fall-rise on "quite good" implies but not excellent.',
            'A flat level tone can make a speaker sound bored or deliberately neutral.'
          ],
          keyTakeaway: 'The same words can mean four different things; let the pitch contour carry the attitude.',
          realWorldExample: 'A Makola market woman says "Twenty cedis" with a fall to close a price, but "Twenty cedis?" with a rise when she thinks the buyer is joking.'
        },
        {
          title: 'Questions, Tags and Contrastive Stress',
          content: 'Question intonation has two systems that students mix up. Special wh-questions take the falling tone because the listener is expected to supply the missing fact: "Where are you going?". General yes-no questions take the rising tone because the speaker does not know the answer: "Are you going?". Tag questions are subtler: a falling tag shows the speaker is almost certain and merely wants agreement, while a rising tag shows genuine uncertainty and demands information. Finally, contrastive stress overrides the ordinary rhythm to rewrite the message: stressing I denies that someone else did it, stressing Monday denies that it happened on another day.',
          bulletPoints: [
            '"What is your name?" falls; "Is your name Ama?" rises.',
            '"Water, please." rises because it is unfinished; "Water." falls because it is complete.',
            'A falling tag "The bell rang, did it not?" expects the reply yes.',
            'A rising tag "You will come, will you not?" truly asks.',
            'Contrastive stress sets "MY book, not yours" against "my BOOK, not my pen".'
          ],
          keyTakeaway: 'Before choosing a tone, decide whether this is a wh- or a yes-no question and whether the speaker is certain or genuinely asking.',
          realWorldExample: 'In a district assembly session the chair says "The decision stands, does it not?" with a fall, expecting silence, while a delegate repeats "It stands?" with a rise to challenge the vote.'
        }
      ],
      commonMistakes: [
        'Reading a wh-question such as "Where do you live?" with a rising tone; a wh-question must fall.',
        'Using a flat level tone on a statement so the listener cannot tell whether you have finished; drop the pitch at the close.',
        'Pronouncing weak forms as strong, saying /kæn/ for can inside "I can swim" instead of the reduced form.',
        'Making every item of a list fall; only the last item falls while the earlier items rise.',
        'Giving a noun and its matching verb the same stress, saying the verb form on "record" when the noun record needs the first beat.'
      ],
      wassceExamTips: [
        'In Paper 1 Orals the objective items test stress and intonation: tap the beat of each option before choosing, and you bank the answer mark.',
        'Paper 1 comprehension and summary reward clear reading in the right tone; a falling statement read with a rising tone misleads the listener and loses method marks on delivery.',
        'Paper 3 Objectives carries the lexis and structure choices, including word-stress and vowel-pattern items; know your two-syllable noun and verb stress pairs cold.',
        'Paper 2 Essays and Language does not test sound directly, yet punctuation mirrors intonation, so a falling tone maps to a full stop and a rising tone to a question mark.',
        'Time plan: give each Paper 1 oral objective item no more than thirty seconds; if torn between two tones, choose finality for statements and uncertainty for questions.'
      ],
      summaryChecklist: [
        'Can I place the primary stress on the correct syllable of a multi-syllable word?',
        'Can I reduce the unstressed syllables to the schwa so the word sounds natural?',
        'Can I name the four intonation patterns and the meaning each one carries?',
        'Can I choose a falling or rising tag to show whether the speaker is certain or asking?',
        'Can I use contrastive stress to change the meaning of a whole sentence?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-osi-1',
        title: 'Finding the Odd Stress Pattern',
        problem: 'In a Paper 1 objective item, choose the word whose main stress sits in a different place from the others: "polite", "obese", "honest", "sincere".',
        stepByStepSolution: [
          'Step 1 (M1): Say each word aloud and feel which syllable pushes hardest.',
          'Step 2 (M1): "polite" stresses the second syllable.',
          'Step 3 (M1): "obese" stresses the second syllable, and "sincere" the second as well.',
          'Step 4 (M1): "honest" stresses the FIRST syllable, so it breaks the pattern.',
          'Step 5 (A1): Answer: "honest" is the odd word; the other three place the stress on the second syllable.'
        ],
        keyTakeaway: 'Say each option aloud, locate the strong beat, and the odd stress pattern reveals itself.'
      },
      {
        id: 'ex-shs3-eng-osi-2',
        title: 'Choosing the Right Tone for a Question and its Tag',
        problem: 'Label the intonation on two lines: "Are you travelling to Tamale?" and, where the speaker is almost certain, "You are travelling to Tamale, are you not?". Give the tone for each.',
        stepByStepSolution: [
          'Step 1 (M1): Classify the first sentence: it opens with the auxiliary "are", so it is a yes-no question.',
          'Step 2 (M1): A yes-no question whose answer the speaker does not know takes a rising tone.',
          'Step 3 (M1): The second line is a tag question, and the note says the speaker is almost certain.',
          'Step 4 (M1): A certain speaker uses a falling tag, because agreement rather than information is wanted.',
          'Step 5 (A1): Answer: the first sentence rises, and the confident tag falls.'
        ],
        keyTakeaway: 'Yes-no questions rise; a tag that only expects agreement falls.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t1-osi',
      topicId: 'shs3-eng-t1-oral-stress-intonation',
      title: 'Word Stress and Intonation Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-osi-1',
          quizId: 'quiz-shs3-eng-t1-osi',
          questionText: 'Which word has its main stress on a different syllable from the others?',
          optionA: 'happy',
          optionB: 'begin',
          optionC: 'obey',
          optionD: 'decide',
          correctOption: 'A',
          subConcept: 'Word Stress',
          explanation: '"happy" stresses the first syllable, while the verbs "begin", "obey" and "decide" all stress the second syllable.',
          remediationTip: 'Say each word slowly and feel which syllable is loudest before comparing.'
        },
        {
          id: 'q-shs3-osi-2',
          quizId: 'quiz-shs3-eng-t1-osi',
          questionText: 'In the word "about", what happens to the vowel of the unstressed first syllable?',
          optionA: 'It becomes the long vowel heard in "sheep".',
          optionB: 'It keeps its full, strong quality.',
          optionC: 'It reduces to the neutral schwa sound.',
          optionD: 'It is replaced by the sound of a doubled letter.',
          correctOption: 'C',
          subConcept: 'The Schwa',
          explanation: 'The unstressed syllable weakens to the schwa, so "about" is heard as a reduced first syllable followed by a strong one.',
          remediationTip: 'Only the stressed syllable keeps a full vowel in English; the rest reduce.'
        },
        {
          id: 'q-shs3-osi-3',
          quizId: 'quiz-shs3-eng-t1-osi',
          questionText: 'Which intonation pattern usually carries doubt, hesitation or a silent but?',
          optionA: 'The falling tone',
          optionB: 'The level tone',
          optionC: 'The rising tone',
          optionD: 'The fall-rise tone',
          correctOption: 'D',
          subConcept: 'Intonation Patterns',
          explanation: 'The fall-rise signals reservation or hesitation, hinting that more is left unsaid after the guarded reply.',
          remediationTip: 'Match each contour to an attitude: finality, uncertainty, doubt, or neutrality.'
        },
        {
          id: 'q-shs3-osi-4',
          quizId: 'quiz-shs3-eng-t1-osi',
          questionText: 'What intonation does the question "Where did the delegation arrive?" normally take?',
          optionA: 'Rising, because every question rises.',
          optionB: 'Falling, because it is a wh-question.',
          optionC: 'Level, because it only lists a fact.',
          optionD: 'Fall-rise, because it shows doubt.',
          correctOption: 'B',
          subConcept: 'Question Intonation',
          explanation: 'Wh-questions fall because the speaker expects a specific piece of information to complete the message.',
          remediationTip: 'Falling for wh-questions, rising for yes-no questions.'
        },
        {
          id: 'q-shs3-osi-5',
          quizId: 'quiz-shs3-eng-t1-osi',
          questionText: 'The speaker is almost certain and only wants agreement. Which tone fits the tag in "The bell has rung, has it not?"?',
          optionA: 'A falling tone, to seek agreement.',
          optionB: 'A rising tone, to ask genuinely.',
          optionC: 'A level tone, to show boredom.',
          optionD: 'A rise-fall tone, to correct the listener.',
          correctOption: 'A',
          subConcept: 'Tag Questions',
          explanation: 'A confident tag that merely invites agreement takes the falling tone; a rising tag would make it a real question.',
          remediationTip: 'Certain plus a tag means falling; uncertain plus a tag means rising.'
        }
      ]
    }
  },
  {
    id: 'shs3-eng-t1-consonant-clusters-linking',
    subjectId: 'english',
    level: 'SHS 3',
    term: 1,
    orderIndex: 2,
    title: 'Consonant Clusters, Linking and Assimilation in Connected Speech',
    description: 'Connected-speech revision for WASSCE orals: initial and final consonant clusters, the simplification and epenthesis Ghanaian speakers fall into, linking across word boundaries, and elision and assimilation in fluent running speech.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=P73dwwm14fo',
    youtubeId: 'P73dwwm14fo',
    keyNotes: `• A consonant cluster is two or more consonants run together with no vowel between them: "spray" opens /spr/, "film" closes /lm/.
• Initial clusters of three usually begin with s: "street" /str/, "scream" /skr/, "splash" /spl/.
• Final clusters pile up after the vowel: "tests" /sts/, "lapse" /lps/, "months" /nθs/, "adults" /lts/.
• Ghanaian speakers often simplify a cluster by dropping a consonant: "friend" said as "fren", "texts" said as "text".
• Others add a supporting vowel to break it up (epenthesis): "school" becomes "sikol", "street" becomes "sitret".
• Linking lets a final consonant glide onto a following vowel: "an apple" sounds like "a-napple".
• Consonant-to-vowel linking also crosses several words: "not at all" runs together as "no-ta-tall".
• Elision deletes a sound for ease of speech: "next day" loses the /t/ and sounds "nex day".
• Elision of a medial /t/ or /d/ is regular: "handbag" becomes "hanbag" and "exactly" loses its /t/.
• Nasal assimilation: /n/ becomes /ŋ/ before /k/ or /g/, so "bank" /bæŋk/, "think" /θɪŋk/, "uncle" /ʌŋkl/.
• Place assimilation: "ten boys" can sound like "tem boys" as /n/ copies the lip position of /b/.
• Coalescence fuses /d/ plus /j/ into /d\u0292/: "would you" is heard as "wudju", "did you" as "didju".
• Paper 1 orals test clusters by asking you to count consonants or pick the word that has one.
• Clear connected speech needs neither over-careful nor slovenly articulation; aim for smooth linking with every cluster whole.`,
    detailedNotes: {
      overview: 'This module finishes connected-speech revision: consonant clusters at the start and end of words, the linking that joins words, and the elision and assimilation that reshape sounds in fluent speech. It names the specific ways Ghanaian interference attacks clusters and gives the fixes an examiner rewards.',
      introduction: 'Fluent English does not place each word in a sealed box with a pause between; sounds join, drop and bend toward their neighbours. Study these movements and you can both produce natural speech and answer the Paper 1 items that test it.',
      realWorldContext: 'At Makola market a trader taking a repeated order hears buyers cut words in half, so "friend" becomes "fren" and "school" becomes "si-kol". The same clusters and joins that confuse her customers also appear in Paper 1 pronunciation items across Kumasi, Tamale and Ho. A candidate who keeps clusters whole and links words smoothly both sounds English and secures the sound marks the examiner is listening for.',
      objectives: [
        'Define consonant clusters and give onset and coda examples',
        'Explain simplification and epenthesis as Ghanaian cluster errors and correct them',
        'Demonstrate linking of a final consonant onto a following vowel',
        'Identify elided sounds in common connected-speech phrases',
        'Describe nasal and place assimilation across word boundaries'
      ],
      sections: [
        {
          title: 'Consonant Clusters at the Start and the End',
          content: 'A cluster is any group of consonants that meet without a vowel between them, and it can sit at the start or the end of a syllable. Onsets of two are routine, but three-consonant onsets almost always begin with s, giving the families str, spr, scr and spl, as in "street", "spring", "scowl" and "splash". Coda clusters are harder for learners because Ghanaian languages rarely stack consonants at all, while English happily closes syllables with three or four sounds, as in "texts" and "sixths". Knowing the shape of a cluster is the first step to saying it fully, because Paper 1 rewards the candidate who neither drops a consonant nor invents one.',
          bulletPoints: [
            'Two-consonant onsets are everywhere: "play", "track", "glass".',
            'The s plus voiceless stop groups in "spy", "sky", "sty" keep the stop voiceless after the s.',
            'Three-part onsets are limited to families like str, spr, scr and spl, plus a few such as "twist".',
            'Final clusters hide grammar inside them: the past in "changed" and the plural in "helps".',
            'A word such as "strength" stacks str at the start and a tricky nasal-plus-fricative at the end.'
          ],
          keyTakeaway: 'A cluster is consonants with no vowel between, and both the onset and the coda can hold three or four of them.',
          realWorldExample: 'A warning board near a Takoradi worksite reads "STRENGTH TEST"; its two clusters are exactly the joins a candidate must not simplify.'
        },
        {
          title: 'Cluster Simplification and Epenthesis in Ghanaian Speech',
          content: 'Ghanaian interference reshapes clusters in two predictable ways. Simplification deletes a member of a hard cluster, so "friend" collapses to "fren", "acts" to "ax", and "scripture" to "scipure". Epenthesis does the opposite and inserts a supporting vowel, so "school" is pronounced "sikol" and "street" becomes "sitret"; the speaker opens the jaw to force two consonants apart. Both habits break English rhythm and cost marks in Paper 1 pronunciation items, so the remedy is deliberate drilling: hold the first consonant fully and glide straight to the second without adding a vowel.',
          bulletPoints: [
            'Simplification drops a consonant, as when "texts" is read as "text".',
            'Epenthesis adds a vowel, as when "class" becomes "kalas".',
            'A final cluster often loses the plural s, so "desks" sounds like "desk".',
            'The cure is slow two-step practice: say the two consonants back to back before joining the word.',
            'Teachers should model the whole cluster first and only then raise the speaking speed.'
          ],
          keyTakeaway: 'Do not drop a consonant and do not invent a vowel; bridge the cluster with one smooth movement.',
          realWorldExample: 'An Achimota candidate says "sikol" for school in an oral test and forfeits the mark awarded for holding the initial cluster intact.'
        },
        {
          title: 'Linking Sounds in Connected Speech',
          content: 'Connected speech is not a string of isolated words; the end of one word flows into the start of the next, a process called linking or catenation. When a word ends in a consonant and the next begins with a vowel, that consonant moves across the boundary to join the new syllable: "an apple" becomes "a-napple", "read it" becomes "rea-dit", and "far away" becomes "fa-raway". This is why fluent speech sounds faster than careful dictation; a learner who keeps each word sealed with a pause sounds foreign even when every sound is correct. Paper 1 listening passages rely on this linking, so students must train the ear to hear words that have traded their boundaries.',
          bulletPoints: [
            'Consonant-to-vowel linking: "not at all" is heard as one long "no-ta-tall".',
            'The h of a weak function word often drops after a link, so "tell him" becomes "tellim".',
            'The phrase "turn it over" chains three joins into one smooth run.',
            'Linking also crosses auxiliary verbs, as in "give it to her".',
            'Train the ear by reading a line, covering it, then reproducing the joins exactly.'
          ],
          keyTakeaway: 'Let a final consonant leap onto the next vowel; that join is what makes speech sound fluent.',
          realWorldExample: 'A trotro conductor calling "passengers for Kumasi, all for Kumasi" links the joins so the cry runs as one rhythmic block.'
        },
        {
          title: 'Elision and Assimilation',
          content: 'Beyond linking, native speech deletes and changes sounds. Elision removes a segment entirely: the /t/ vanishes in "next week", in "exactly", and in "Wednesday". Assimilation reshapes a sound to match a neighbour. Nasal assimilation turns /n/ into the back nasal /ŋ/ before the velar stops /k/ and /g/, which is why "bank", "think" and "uncle" carry a nasal made at the back of the mouth. Place assimilation pulls "ten boys" toward "tem boys", and coalescence fuses /d/ plus /j/ into /d\u0292/ in "would you" and "did you". These processes are systematic, not careless, and a Paper 1 candidate who understands them can explain why one written phrase is heard in two ways.',
          bulletPoints: [
            'Elision of /t/ or /d/ before another consonant: "mostly" and "friendship" each lose a stop.',
            'Nasal assimilation puts a back nasal in "ink", "monkey" and "finger".',
            'The contrast between "singer" and "finger" shows whether the /g/ survives.',
            'Coalescence of /d/ plus /j/ gives /d\u0292/, so "did you" sounds like "didju".',
            'A nasal before /p/ or /m/ can assimilate, nudging "input" toward "imput".'
          ],
          keyTakeaway: 'Speech deletes and matches sounds on purpose; elision and assimilation are rules, not laziness.',
          realWorldExample: 'A Ho student reads "next day" as "nex day" in a speech, dropping the /t/, a textbook case of elision the examiner will reward explaining.'
        }
      ],
      commonMistakes: [
        'Simplifying a final cluster and saying "bes" for "best"; the fix is to sound every closing consonant fully.',
        'Inserting a vowel where none belongs, turning "school" into "sikol"; close the gap between the consonants instead.',
        'Pausing between "an" and "apple" and breaking the link; let the /n/ carry onto the following vowel.',
        'Pronouncing the /t/ of "next day" as a hard stop when fluent speech elides it; drop it for a smooth "nex day".',
        'Saying a front /n/ in "think" instead of the back nasal that assimilation demands before the /k/.'
      ],
      wassceExamTips: [
        'Paper 1 Orals objective items ask you to find the word with a cluster or to count consonants; tap each sound and you secure the answer mark.',
        'In the Paper 1 pronunciation task, keep three-part clusters intact; a simplified "streen" for "street" forfeits the method mark for the full onset.',
        'Paper 3 Objectives tests connected speech through minimal-pair and sound-count choices; rehearse elision pairs such as a full "next" against a form without the /t/.',
        'Paper 2 Essays and Language is silent on sound, yet the phonetic awareness you build here sharpens spelling of clustered words like "asked" and "width".',
        'Time plan: spend under thirty seconds on each Paper 1 objective item; when unsure of a cluster, say the word slowly and listen for every closing consonant.'
      ],
      summaryChecklist: [
        'Can I define a consonant cluster and give an onset and a coda example?',
        'Can I name the two Ghanaian habits, simplification and epenthesis, that damage clusters?',
        'Can I explain linking and demonstrate it on a short phrase?',
        'Can I identify an elided sound such as the /t/ in "next day"?',
        'Can I describe nasal assimilation of /n/ before /k/ and /g/?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-ccl-1',
        title: 'Spotting the Odd Cluster Treatment',
        problem: 'A Paper 1 item lists four spoken forms. Which one shows epenthesis rather than standard articulation: "street", "splendid", "sikol", "spring"?',
        stepByStepSolution: [
          'Step 1 (M1): Recall that epenthesis inserts an extra vowel to break a cluster.',
          'Step 2 (M1): "street", "splendid" and "spring" each keep their initial cluster with no added vowel.',
          'Step 3 (M1): "sikol" has split the /sk/ cluster with a supporting vowel where the target word "school" has none.',
          'Step 4 (M1): The form that carries the inserted vowel is therefore the epenthetic one.',
          'Step 5 (A1): Answer: "sikol" shows epenthesis; the correct target word is "school".'
        ],
        keyTakeaway: 'Epenthesis adds a vowel where the standard word has a cluster, while simplification instead removes a consonant.'
      },
      {
        id: 'ex-shs3-eng-ccl-2',
        title: 'Naming Elision and Assimilation in a Phrase',
        problem: 'In connected speech a candidate says "nex day" for "next day" and gives "bank" a back nasal. Name the two processes at work and justify each.',
        stepByStepSolution: [
          'Step 1 (M1): Study "nex day": the written /t/ of "next" has disappeared before the /d/ of "day".',
          'Step 2 (M1): The loss of a sound for ease of articulation is elision, so the /t/ is elided.',
          'Step 3 (M1): Now study "bank": the written /n/ is pronounced with the tongue pulled back, matching the coming /k/.',
          'Step 4 (M1): A sound changing to match a neighbour is assimilation; here the nasal assimilates to the velar /k/.',
          'Step 5 (A1): Answer: "nex day" shows elision of /t/, and "bank" shows nasal assimilation of /n/ to /ŋ/ before /k/.'
        ],
        keyTakeaway: 'Elision deletes a sound, while assimilation changes a sound to copy a neighbour.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t1-ccl',
      topicId: 'shs3-eng-t1-consonant-clusters-linking',
      title: 'Consonant Clusters and Connected Speech Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-ccl-1',
          quizId: 'quiz-shs3-eng-t1-ccl',
          questionText: 'Which word shows a consonant cluster at the START?',
          optionA: 'milk',
          optionB: 'street',
          optionC: 'asks',
          optionD: 'helped',
          correctOption: 'B',
          subConcept: 'Initial Clusters',
          explanation: '"street" opens with the /str/ cluster, while "milk", "asks" and "helped" all carry their clusters at the end of the word.',
          remediationTip: 'Clusters sit at the start or the end; read the position the question asks for.'
        },
        {
          id: 'q-shs3-ccl-2',
          quizId: 'quiz-shs3-eng-t1-ccl',
          questionText: 'A learner says "kalas" for "class". Which process has occurred?',
          optionA: 'Elision',
          optionB: 'Linking',
          optionC: 'Simplification',
          optionD: 'Epenthesis',
          correctOption: 'D',
          subConcept: 'Epenthesis',
          explanation: 'A vowel has been inserted to split the opening cluster, which is the definition of epenthesis.',
          remediationTip: 'Adding a vowel is epenthesis; removing a consonant is simplification.'
        },
        {
          id: 'q-shs3-ccl-3',
          quizId: 'quiz-shs3-eng-t1-ccl',
          questionText: 'The phrase "an apple" spoken fluently shows which feature of connected speech?',
          optionA: 'Assimilation',
          optionB: 'Linking',
          optionC: 'Elision',
          optionD: 'Epenthesis',
          correctOption: 'B',
          subConcept: 'Linking',
          explanation: 'The final /n/ of "an" joins onto the opening vowel of "apple", which is catenation, or linking.',
          remediationTip: 'A final consonant running onto a following vowel is linking.'
        },
        {
          id: 'q-shs3-ccl-4',
          quizId: 'quiz-shs3-eng-t1-ccl',
          questionText: 'Saying "nex day" for "next day" is an example of which process?',
          optionA: 'Elision',
          optionB: 'Nasal assimilation',
          optionC: 'Coalescence',
          optionD: 'Epenthesis',
          correctOption: 'A',
          subConcept: 'Elision',
          explanation: 'The /t/ of "next" is dropped before the /d/ of "day", and that deletion is elision.',
          remediationTip: 'Elision removes a sound; here the /t/ disappears entirely.'
        },
        {
          id: 'q-shs3-ccl-5',
          quizId: 'quiz-shs3-eng-t1-ccl',
          questionText: 'In the word "think", the /n/ becomes a back nasal before the /k/. What is this called?',
          optionA: 'Linking',
          optionB: 'Coalescence',
          optionC: 'Nasal assimilation',
          optionD: 'Simplification',
          correctOption: 'C',
          subConcept: 'Assimilation',
          explanation: 'Assimilation makes the nasal copy the place of the following velar /k/, producing a back nasal.',
          remediationTip: 'When a nasal copies the place of a following stop, it is assimilation.'
        }
      ]
    }
  },
  {
    id: 'shs3-eng-t1-concord-mastery',
    subjectId: 'english',
    level: 'SHS 3',
    term: 1,
    orderIndex: 3,
    title: 'Concord Mastery: The Full Agreement System for WASSCE',
    description: 'A revision workout that binds the whole agreement system into exam reflexes: the proximity rule, correlative pairs, one of those who, collective nouns, a number of versus the number of, quantity units, each and every, indefinite pronouns, subject complements, there plus be, and concord inside relative clauses.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=EbS7B9NVE2U',
    youtubeId: 'EbS7B9NVE2U',
    keyNotes: `• The golden rule: the verb agrees with its own subject, never with a noun tucked inside a phrase between them: "The price of books IS high."
• Proximity rule after or, nor, either...or, neither...nor: the verb copies the nearer subject, "Neither the boys nor the girl WAS called."
• "Either the driver or the passengers ARE to blame" because the nearer subject is plural.
• one of those who takes a plural verb: "She is one of those who ALWAYS ARRIVE early."
• the only one of those who takes a singular verb: "He is the only one of those who HAS spoken."
• A collective noun is singular as a unit and plural as individuals: "The team IS strong" but "The team ARE arguing among themselves."
• a number of takes a plural verb while the number of takes a singular verb: "A number of candidates FAILED", "The number of candidates WAS high."
• Money, time, distance and weight read as one lump take a singular verb: "Ten cedis IS enough", "Five years IS a long time."
• Each and every force a singular verb: "Each boy HAS a bag", "Every effort WAS made."
• The indefinite pronouns each, everyone, anybody, no one and nothing take a singular verb: "Nobody WAS at home."
• Both and the plural indefinite forms take a plural verb: "Both of them ARE guilty."
• With there plus be, the verb agrees with the noun that follows: "There ARE two problems", "There WAS a pen and two books."
• A linking verb agrees with the subject, not the complement: "The cause of the crash WAS the rains."
• In a relative clause the verb agrees with the antecedent: "the boy who RUNS", "the boys who RUN", "I who AM your friend."`,
    detailedNotes: {
      overview: 'SHS 3 tightens concord into one complete agreement system for WASSCE, moving past the basic rule to the ten traps that decide the objective and language marks. Each section is a workout in the exam pattern: state the rule, drill it on sample sentences, then correct the common Ghanaian slip.',
      introduction: 'Think like a marker holding a red pen. Read each sentence, name the true subject, and test the verb against it; the examiners award the mark only when head noun, proximity and unit sense all line up.',
      realWorldContext: 'A headmaster writes in a visitors book, "The list of candidates who sat the mock were displayed yesterday", hiding two concord errors in one sentence, the kind WAEC examiners and GES moderators both pounce on. At a Ho school a prefect reports "Everyone have come", carrying a plural habit from a first language into English. Every WASSCE objective, essay and language item on agreement is built from the exact rules drilled here.',
      objectives: [
        'Apply the proximity rule to or, nor and either or neither pairs',
        'Choose singular or plural verbs for collective nouns and number phrases',
        'Make money, time, distance and weight units take a singular verb',
        'Use correct concord with each, every and the indefinite pronouns',
        'Fix subject-complement, there plus be and relative-clause agreement in exam sentences'
      ],
      sections: [
        {
          title: 'The Proximity Rule and Correlative Conjunctions',
          content: 'The base rule still governs everything: the verb agrees with the true subject. Two traps test it in WASSCE. First, an intervening phrase can park a plural noun right before the verb while the real subject stays singular; ignore the interrupter and match the head noun, so "the price of the books is rising" keeps is. Second, structures joined by or, nor, either...or and neither...nor follow the proximity rule, where the verb agrees with the nearer of the two subjects. Drill both until the reflex is instant, because a single careless agreement in a Paper 2 language correction loses the mark even when the rest of the sentence is sound.',
          bulletPoints: [
            'After or and nor, the nearest subject on the left of the verb decides the number.',
            '"Neither the teachers nor the headmaster was convinced."',
            '"Either the headmaster or the teachers were convinced."',
            'A prepositional phrase between subject and verb never changes the number of the verb.',
            'Test the rule by deleting the interrupting phrase before choosing the verb.'
          ],
          keyTakeaway: 'Agree with the true subject, and with correlative pairs agree with the subject nearest the verb.',
          realWorldExample: 'A Tamale school notice reads "Neither the prefect nor the boys were late"; the nearer subject boys makes were correct, so the notice is right and a doubting pupil learns to trust proximity.'
        },
        {
          title: 'Collective Nouns and Number Phrases',
          content: 'A collective noun names a group: team, committee, jury, family, government, class, panel. When the group acts as one unit, use a singular verb: "The committee meets on Friday." When the members act separately or are visibly divided, a plural verb is accepted: "The committee argued among themselves until late." Two number phrases trip candidates: "a number of" means several and takes a plural verb, while "the number of" names a single figure and takes a singular verb. Fix the pair in memory, a number of goes with are and the number of goes with is, and the objective item becomes safe.',
          bulletPoints: [
            'Unit sense takes the singular: "The team is winning."',
            'Individual or divided sense takes the plural: "The team are changing their boots."',
            '"A number of students were absent."',
            '"The number of students was recorded."',
            'Nouns such as scissors, trousers and cattle always take a plural verb.'
          ],
          keyTakeaway: 'A group acting as one is singular, a group visibly split can take a plural, and a number naming a figure stays singular.',
          realWorldExample: 'At a district assembly in Ho the clerk writes "The council has decided" when members agree, but "The council have disagreed" when they split, exactly the unit-versus-member choice WAEC tests.'
        },
        {
          title: 'Quantity Units, Each, Every and Indefinite Pronouns',
          content: 'Quantities that form one lump take the singular even though they look plural. Money, periods, distances and weights are counted as totals: "Ten cedis is too much for one bag of rice", "Five years is a long time to forget", "Sixty kilometres is not far from Kumasi to Ejisu." The distributives each and every force a singular verb: "Each of the girls has a tablet", "Every candidate was warned." So do the indefinite pronouns each, everyone, anybody, nobody, something and nothing, while both and the plural indefinite forms take the plural. Memorise the singular list, because it is the source of most agreement errors carried in from a first language.',
          bulletPoints: [
            '"Ten cedis is the price." one sum of money.',
            '"Two hours is enough for the paper." one stretch of time.',
            '"Each of the answers is checked." each is singular.',
            '"Everybody in the class has a book." everybody is singular.',
            '"Both of the answers are correct." both is plural.'
          ],
          keyTakeaway: 'Treat money, time, distance and weight as a single total, and let each, every and the singular indefinites take a singular verb.',
          realWorldExample: 'A Makola trader says "Fifty cedis are too much" for a single item, but the correct unit reading is "Fifty cedis is too much", the very sentence a Paper 3 objective item may ask you to repair.'
        },
        {
          title: 'Subject Complements, There plus be and Relative Clauses',
          content: 'Three final zones produce the last errors. A linking verb takes its number from the subject, not the complement, so "The real problem is the delays" keeps is with problem, and the reverse "The delays are the real problem" keeps are with delays. With there plus be, the verb agrees with the noun that follows it, and in a list the nearest noun often decides: "There is a pen and two exercise books on the desk." In a relative clause the verb must agree with the antecedent, giving "the boy who runs", "the boys who run", and the tricky first person "I who am always here for you." Master these three and the whole agreement system closes.',
          bulletPoints: [
            '"The cause of the accident was the rain." was matches cause.',
            '"There are three reasons for the decision."',
            '"There was a book and two pens on the table."',
            '"She is one of those who speak the truth." the relative verb matches those.',
            '"He is the only one of those who speaks the truth." the phrase only one pulls the singular.'
          ],
          keyTakeaway: 'Agree with the subject before a complement, with the noun after there be, and with the antecedent inside a relative clause.',
          realWorldExample: 'A radio announcer in Achimota reads "There is two learners and their tutor outside", and a trained ear corrects it to "There are two learners", because the first noun after be is plural.'
        }
      ],
      commonMistakes: [
        'Writing "The list of candidates were long"; the head noun list is singular, so the fix is "The list was long."',
        'Saying "Every student have a book"; each and every demand the singular, so "Every student has a book."',
        'Answering "The number of shops are rising"; a figure is singular, so "The number of shops is rising."',
        'Matching the verb to the complement in "The winners was the girls"; the plural subject winners takes were: "The winners were the girls."',
        'Using plural with neither or nor on the far subject; apply proximity: "Neither the girls nor the boy was punished."'
      ],
      wassceExamTips: [
        'Paper 3 Objectives throws several pure concord items; read each sentence to the blank, name the true subject, then choose the verb that matches it.',
        'Paper 2 Language has correction-of-errors items; write the wrong word and its fix, because method is credited for spotting the error and the answer for the right form.',
        'In Paper 2 essays, run a quick subject-verb audit on every complex sentence before moving on; agreement slips cost the language marks.',
        'Paper 1 comprehension is rarely a concord test, but the passage sentences model correct agreement, so read them aloud to train your ear.',
        'Time plan: spend about forty seconds on a Paper 3 concord item; if stuck, strip the prepositional phrase and the answer usually shows itself.'
      ],
      summaryChecklist: [
        'Can I apply the proximity rule to or, nor and either or neither pairs?',
        'Can I choose the right verb for a collective noun and for a number of versus the number of?',
        'Can I make money, time, distance and weight units take a singular verb?',
        'Can I match the verb to the subject and not the complement in a linking sentence?',
        'Can I fix there plus be and relative-clause agreement in an exam sentence?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-conc-1',
        title: 'Correcting a Hidden Concord Error',
        problem: 'A WASSCE language item reads: "The box of old exercise books, together with the desks, were thrown away." Repair the error and name the rule you used.',
        stepByStepSolution: [
          'Step 1 (M1): Find the true subject by ignoring the interrupters "of old exercise books" and "together with the desks".',
          'Step 2 (M1): The head noun is "box", which is singular.',
          'Step 3 (M1): A phrase set between the subject and the verb cannot change the number of the verb.',
          'Step 4 (M1): Therefore the verb must be the singular "was", not "were".',
          'Step 5 (A1): Answer: "The box ... was thrown away"; the rule is subject-verb agreement across an intervening phrase.'
        ],
        keyTakeaway: 'Delete the interrupting phrases, name the head noun, and match the verb to it.'
      },
      {
        id: 'ex-shs3-eng-conc-2',
        title: 'Applying Proximity with Neither nor',
        problem: 'Choose the correct form: "Neither the two prefects nor the headmaster (was or were) at the meeting." Justify with the proximity rule.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the correlative pair joined by neither and nor.',
          'Step 2 (M1): The rule says the verb agrees with the subject nearest to it.',
          'Step 3 (M1): The nearer subject, sitting between "nor" and the verb, is "the headmaster", which is singular.',
          'Step 4 (M1): A singular nearer subject needs the singular verb.',
          'Step 5 (A1): Answer: "was", giving "Neither the two prefects nor the headmaster was at the meeting."'
        ],
        keyTakeaway: 'With neither and nor, agree with the subject closest to the verb, not the one farther away.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t1-conc',
      topicId: 'shs3-eng-t1-concord-mastery',
      title: 'Concord Mastery Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-conc-1',
          quizId: 'quiz-shs3-eng-t1-conc',
          questionText: 'Choose the correct verb: "Neither the pupils nor the teacher ___ present."',
          optionA: 'have been',
          optionB: 'were',
          optionC: 'are',
          optionD: 'was',
          correctOption: 'D',
          subConcept: 'Proximity Rule',
          explanation: 'Under the proximity rule the verb agrees with the nearer subject "teacher", which is singular, so "was" is correct.',
          remediationTip: 'With neither and nor, match the verb to the subject nearest the verb.'
        },
        {
          id: 'q-shs3-conc-2',
          quizId: 'quiz-shs3-eng-t1-conc',
          questionText: 'Which sentence is correct?',
          optionA: 'The number of applicants were high.',
          optionB: 'A number of applicants is rising.',
          optionC: 'A number of the applicants were late.',
          optionD: 'The number of applicants are falling.',
          correctOption: 'C',
          subConcept: 'A Number of versus The Number of',
          explanation: 'A number of means several and takes the plural "were", while the number of names a single figure and takes the singular "was"; only option C is correct.',
          remediationTip: 'a number of takes a plural verb; the number of takes a singular verb.'
        },
        {
          id: 'q-shs3-conc-3',
          quizId: 'quiz-shs3-eng-t1-conc',
          questionText: 'Choose the correct verb: "Twenty cedis ___ too much for a single pencil."',
          optionA: 'is',
          optionB: 'are',
          optionC: 'have been',
          optionD: 'were',
          correctOption: 'A',
          subConcept: 'Money as a Unit',
          explanation: 'An amount of money read as one total takes a singular verb, so "is" is correct.',
          remediationTip: 'Treat a sum of money as one thing and the verb stays singular.'
        },
        {
          id: 'q-shs3-conc-4',
          quizId: 'quiz-shs3-eng-t1-conc',
          questionText: 'Choose the correct form: "Ama is one of those girls who always ___ the truth."',
          optionA: 'telling',
          optionB: 'tell',
          optionC: 'tells',
          optionD: 'to tell',
          correctOption: 'B',
          subConcept: 'Concord in Relative Clauses',
          explanation: 'The relative pronoun "who" refers to the plural "those girls", so the verb is plural: "one of those girls who always tell the truth".',
          remediationTip: 'Match the relative verb to its antecedent, and one of those who takes the plural.'
        },
        {
          id: 'q-shs3-conc-5',
          quizId: 'quiz-shs3-eng-t1-conc',
          questionText: 'Choose the correct verb: "Each of the candidates ___ given a card."',
          optionA: 'were',
          optionB: 'have been',
          optionC: 'are',
          optionD: 'was',
          correctOption: 'D',
          subConcept: 'Each and Every',
          explanation: 'Each is singular, so the verb is singular: "Each of the candidates was given a card."',
          remediationTip: 'Each of plus a plural noun still takes a singular verb.'
        }
      ]
    }
  },
  {
    id: 'shs3-eng-t1-tenses-aspect',
    subjectId: 'english',
    level: 'SHS 3',
    term: 1,
    orderIndex: 4,
    title: 'The Tense and Aspect System: Perfect, Continuous and Conditional Usage',
    description: 'Final-year mastery of tense and aspect for WASSCE: signal words for the perfect, present perfect versus past simple under Ghanaian interference, past perfect sequencing, future in the past, the three conditional types, and wish, if only and as if.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=IaslvsYxFVU',
    youtubeId: 'IaslvsYxFVU',
    keyNotes: `• The present perfect links the past to now, so pair it with since, for, already, yet, just, ever, never and so far: "I have lived in Ho since 2019."
• Since marks a point in time and for marks a stretch of time: "since Monday", "for two years".
• Use the past simple with finished-time words like ago, yesterday and last year: "We met two days ago", never "have met two days ago."
• Ghanaian interference drops the perfect: "I stay here since 2010" must become "I have stayed here since 2010."
• The past perfect shows the earlier of two past events: "By the time the bus came, we had walked home."
• by the time plus a past simple usually triggers a past perfect in the main clause.
• Future in the past uses would or was going to from a past viewpoint: "He promised he would return."
• Type one, real condition: if plus present, then will or a modal: "If it rains, the match will stop."
• Type two, unreal present: if plus past simple, then would plus base, with were for all persons: "If I were prefect, I would act."
• Type three, unreal past: if plus past perfect, then would have plus participle: "If she had read, she would have passed."
• wish plus past perfect regrets a past fact: "I wish I had studied the letter."
• wish plus past simple, with were, longs against a present fact: "I wish I were tall."
• If only repeats the wish pattern with stronger feeling: "If only he had come."
• as if and as though use the past to flag unreality: "He talks as if he were the owner."
• already, just and yet are perfect signals: "She has already left", "they have not finished yet."`,
    detailedNotes: {
      overview: 'This module rebuilds the tense and aspect system for the final revision year, moving from naming tenses to choosing the right one under exam pressure. It targets the perfect, the sequencing past perfect, future in the past and the conditional forms that decide Paper 2 and Paper 3 marks.',
      introduction: 'Every verb carries a time signal; your task is to read the signal words first and let them force the form. Treat tense as a decision tree rather than a list to memorise, and the objective items resolve in seconds.',
      realWorldContext: 'At a Cape Coast school a prefect announces "We are preparing for WASSCE since January", and the teacher quietly repairs the tense before the assembly; that single habit, using a continuous form where the perfect is demanded, is the commonest Ghanaian interference an examiner marks. A trader in Kumasi says "I have sold the goods yesterday", mixing the perfect with a finished-time word. Paper 2 language items and Paper 3 objectives are built on exactly these tense and aspect choices.',
      objectives: [
        'Choose present perfect or past simple from the signal words in a sentence',
        'Correct the Ghanaian interference patterns that remove or add the perfect',
        'Use the past perfect to sequence two past events',
        'Form future in the past and report a will accurately',
        'Build the three conditional types and use wish, if only and as if correctly'
      ],
      sections: [
        {
          title: 'Signal Words and the Present Perfect',
          content: 'The present perfect, formed with has or have plus the past participle, exists to tie an earlier action to the present moment, so its meaning is unlocked by signal words. SINCE names the starting point, as in "since 2018", while FOR names the length, as in "for eight years", and both demand the perfect rather than the past simple. ALREADY shows completion before now, YET asks for it in negatives and questions, and JUST marks an event a moment ago. EVER and NEVER speak of a lifetime up to now, and phrases like so far, up to now and this week keep the door open to the present. When you see any of these markers, reach instinctively for has or have plus the participle.',
          bulletPoints: [
            'since points to a start; for measures a length.',
            '"She has worked here for three years", never "since three years".',
            '"Have you finished yet?" places yet in a question or a negative.',
            '"They have already eaten before the bell."',
            '"I have just arrived", so my breath is still uneven.'
          ],
          keyTakeaway: 'Spot a since, for, already, yet or just marker and the verb is almost always the present perfect.',
          realWorldExample: 'A radio newsbeat says "Government has built three clinics this year", keeping the year open with the perfect because the period has not yet ended.'
        },
        {
          title: 'Past Simple versus Present Perfect under Ghanaian Interference',
          content: 'The two tenses are separated by one clean line: a finished-time word forces the past simple, while an open or connecting idea takes the present perfect. "I saw the dean yesterday" is right and "I have seen the dean yesterday" is wrong, because yesterday is a closed slot. Ghanaian interference attacks this line in three ways. First, learners say "I live in Tamale since 2015" where English needs the perfect: "I have lived in Tamale since 2015." Second, they replace "We have been working since morning" with the continuous "We are working since morning". Third, they double-mark the past as in "I did not went", when the auxiliary already carries the tense and the main verb should stay as go.',
          bulletPoints: [
            'ago, yesterday, last year, in 2010 and when belong with the past simple.',
            'Never place have beside ago or yesterday.',
            'The Ghanaian "we are working since Monday" must become "we have been working since Monday".',
            'did not plus the base verb: "I did not go", never "did not went".',
            'A past participle after has or have is not the same as a past-tense verb.'
          ],
          keyTakeaway: 'A definite past-time word bans the present perfect, while since and for command it.',
          realWorldExample: 'A Ho candidate writes "WASSCE has started two weeks ago", but two weeks ago is finished time, so the examiners expect the simple past "started".'
        },
        {
          title: 'Past Perfect Sequencing and Future in the Past',
          content: 'To place two past events in order, English uses the past perfect, had plus the participle, for the earlier action and the past simple for the later one. The signal "by the time" almost always calls for the past perfect in the main clause: "By the time the midwife arrived, the labour had begun." Words like after, before and when can clarify the order even without the perfect, but the perfect removes all doubt. Future in the past does a similar job in time-shifting narratives and reported speech: a speaker at a past moment looks forward with would or was going to, so "She said she would travel" reports the earlier "I will travel". The form was to also frames a future from a past point of view.',
          bulletPoints: [
            'Earlier past uses had plus participle; later past uses the simple past.',
            '"By the time we reached the hall, the show had started."',
            '"After he had spoken, the crowd left."',
            'Future in the past: "I knew you would help."',
            '"Was going to" marks an intention that a past view records.'
          ],
          keyTakeaway: 'Sequence two past events with the past perfect on the older one, and shift a future to would or was going to from a past viewpoint.',
          realWorldExample: 'A letter from an old student reads "By last term the school had built the block we had planned", stacking two past perfects over the finished time phrase "last term".'
        },
        {
          title: 'The Conditional Types, wish, if only and as if',
          content: 'Conditional sentences come in graded types, each with a fixed formula. Type one is a real future possibility: if plus present, then will or a modal, as in "If it rains, we will cancel." Type two imagines an unreal present: if plus past simple, then would plus base, and careful writing uses were for all persons, as in "If I were the minister, I would fund the school." Type three imagines a different past: if plus past perfect, then would have plus participle, as in "If you had revised, you would have passed." The subjunctive were also runs through wish, if only and as if: "I wish I had sat the mock", "If only he were here", "She spoke as if she knew everything." Keep each formula intact and the language items score.',
          bulletPoints: [
            'Type one, real: if plus present, will plus base, as in "If the bus comes, we will leave."',
            'Type two, unreal now: if plus past, would plus base, as in "If I had a car, I would drive."',
            'Type three, unreal past: if plus past perfect, would have plus participle, as in "If she had tried, she would have won."',
            'wish plus past perfect regrets the past; wish plus past simple longs against the present.',
            'as if and as though take a past form to flag that the picture is unreal.'
          ],
          keyTakeaway: 'Match each conditional to its formula, and let were and had signal the unreal.',
          realWorldExample: 'A student at Achimota says "If I was the house captain I will fix the water", but the examiner wants the one clean type-two sentence "If I were the house captain, I would fix the water".'
        }
      ],
      commonMistakes: [
        'Saying "I have seen him yesterday"; finished time bans the perfect, so the fix is "I saw him yesterday."',
        'Writing "We live here since 2016"; since demands the perfect, so "We have lived here since 2016."',
        'Doubling the past in "She did not wrote"; the auxiliary carries the tense, so "She did not write."',
        'Using will after if in a real condition, "If it will rain"; the if-clause takes the present, so "If it rains."',
        'Saying "I wish I can go"; wish takes a past form, so "I wish I could go."'
      ],
      wassceExamTips: [
        'Paper 3 Objectives tests tense through signal words: underline since, for, ago or yet first, and the right form follows from the marker.',
        'Paper 2 Language asks you to correct verb forms; write the wrong form and its repair, since the examiner splits the mark between spotting the error and fixing it.',
        'In Paper 2 essays, keep the narrative tense steady; do not drift between past and present inside one recount.',
        'For Paper 1 comprehension, the questions often paraphrase a passage verb, so match the tense the passage used to keep the same time relationship.',
        'Time plan: about forty-five seconds per tense objective item; if unsure between perfect and simple, look for a finished-time word, which forces the simple past.'
      ],
      summaryChecklist: [
        'Can I pick present perfect or past simple from the signal words in a sentence?',
        'Can I correct the Ghanaian interference errors that break the perfect?',
        'Can I sequence two past events with the past perfect and by the time?',
        'Can I form future in the past and report a will as would?',
        'Can I build the three conditional types and use wish, if only and as if?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-ten-1',
        title: 'Choosing Perfect or Simple Past',
        problem: 'Decide and correct: "The candidates have submitted their scripts three days ago."',
        stepByStepSolution: [
          'Step 1 (M1): Look for the time marker in the sentence.',
          'Step 2 (M1): The phrase "three days ago" names a finished point in the past.',
          'Step 3 (M1): A definite past-time word such as ago rules out the present perfect.',
          'Step 4 (M1): Replace "have submitted" with the simple past "submitted".',
          'Step 5 (A1): Answer: "The candidates submitted their scripts three days ago."'
        ],
        keyTakeaway: 'Ago, yesterday and last week are finished time; they take the simple past, never the perfect.'
      },
      {
        id: 'ex-shs3-eng-ten-2',
        title: 'Setting the Type Three Conditional',
        problem: 'Rebuild the sentence: "If she had revised seriously, she ___ (pass) the oral paper."',
        stepByStepSolution: [
          'Step 1 (M1): Identify the conditional type from the if-clause.',
          'Step 2 (M1): The if-clause uses the past perfect "had revised", so it imagines a different past.',
          'Step 3 (M1): An unreal past needs type three: if plus past perfect, then would have plus the participle.',
          'Step 4 (M1): Apply the rule to the verb "pass", giving "would have passed".',
          'Step 5 (A1): Answer: "If she had revised seriously, she would have passed the oral paper."'
        ],
        keyTakeaway: 'A past perfect in the if-clause locks the result clause into would have plus a participle.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t1-ten',
      topicId: 'shs3-eng-t1-tenses-aspect',
      title: 'Tenses and Aspect Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-ten-1',
          quizId: 'quiz-shs3-eng-t1-ten',
          questionText: 'Choose the correct form: "Kwame ___ in Sunyani since he finished school."',
          optionA: 'has lived',
          optionB: 'lives',
          optionC: 'lived',
          optionD: 'was living',
          correctOption: 'A',
          subConcept: 'Present Perfect with Since',
          explanation: 'Since marks a period running up to now, which requires the present perfect, so "has lived in Sunyani since he finished school" is correct.',
          remediationTip: 'since and for usually call for the present perfect.'
        },
        {
          id: 'q-shs3-ten-2',
          quizId: 'quiz-shs3-eng-t1-ten',
          questionText: 'Which sentence is grammatically correct?',
          optionA: 'I have met the minister last Monday.',
          optionB: 'I met the minister last Monday.',
          optionC: 'I meet the minister last Monday.',
          optionD: 'I have meet the minister last Monday.',
          correctOption: 'B',
          subConcept: 'Finished Time',
          explanation: 'The phrase "last Monday" is finished time, so the simple past "met" is correct; the perfect cannot sit beside a definite past-time word.',
          remediationTip: 'Never use the present perfect with a definite past-time expression.'
        },
        {
          id: 'q-shs3-ten-3',
          quizId: 'quiz-shs3-eng-t1-ten',
          questionText: 'Complete the sequence: "By the time the ambulance came, the victim ___ to the hospital."',
          optionA: 'has gone',
          optionB: 'goes',
          optionC: 'had gone',
          optionD: 'is going',
          correctOption: 'C',
          subConcept: 'Past Perfect Sequencing',
          explanation: 'The earlier of two past events takes the past perfect, so "had gone" precedes the simple past "came".',
          remediationTip: 'by the time plus a past simple pairs with a past perfect in the main clause.'
        },
        {
          id: 'q-shs3-ten-4',
          quizId: 'quiz-shs3-eng-t1-ten',
          questionText: 'Choose the correct unreal-present conditional: "If I ___ the headmaster, I would repair the library."',
          optionA: 'am',
          optionB: 'will be',
          optionC: 'was being',
          optionD: 'were',
          correctOption: 'D',
          subConcept: 'Unreal Conditional',
          explanation: 'An unreal present condition uses the past simple with were for all persons: "If I were the headmaster, I would repair the library."',
          remediationTip: 'For present-unreal if-clauses, prefer were to am or will be.'
        },
        {
          id: 'q-shs3-ten-5',
          quizId: 'quiz-shs3-eng-t1-ten',
          questionText: 'Choose the verb that shows regret about the past: "I wish the learners ___ the letter earlier."',
          optionA: 'study',
          optionB: 'have studied',
          optionC: 'would study',
          optionD: 'had studied',
          correctOption: 'D',
          subConcept: 'Wish and Regret',
          explanation: 'Regret about a finished past uses wish plus the past perfect, so "had studied" is correct.',
          remediationTip: 'wish plus past perfect looks back at the past; wish plus past simple concerns the present.'
        }
      ]
    }
  },
  {
    id: 'shs3-eng-t1-determiners-pronouns',
    subjectId: 'english',
    level: 'SHS 3',
    term: 1,
    orderIndex: 5,
    title: 'Determiners, Pronouns and Reference in Writing',
    description: 'Final-year consolidation of the words that point and measure: a and an chosen by sound, the zero article, quantifiers and fewer versus less, both, neither, all and each, reflexive and reciprocal pronouns, the relative, interrogative and demonstrative families, and clean reference and cohesion in essays.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=dVbWW1PpHw4',
    youtubeId: 'dVbWW1PpHw4',
    keyNotes: `• Choose a or an by the SOUND that follows, not the letter: "an hour", "a university", "an honest boy".
• Abbreviations follow the sound too: "an MBA", "a BBC", "an FA cup".
• Zero article marks general statements and names: "Dogs bark", "Kumasi is busy", "She reads Physics".
• Go to school, church and prison take no article when the place serves its purpose: "The boy went to school", but "We visited the school".
• much and little serve uncountable nouns; many and few serve countable plurals: "much water", "many cups".
• fewer counts countable things, less weighs uncountable ones: "fewer students", "less sugar".
• a few and a little mean some; few and little mean hardly any, so the article flips the sense.
• both takes a plural verb while neither and each take a singular verb: "Both are true", "Neither answer is right".
• Reflexive pronouns turn the action back on the same subject: "The cook burned himself".
• Never use a reflexive as an ordinary subject: say "Ama and I went", not "Ama and myself went".
• each other and one another show reciprocity: "The two girls helped each other".
• who, which and that join a relative clause; who, which and what ask a question; this, that and those point.
• Ambiguous reference lets a pronoun point at two people; name the person to repair the sentence.
• Cohesion uses this or these to gather a whole earlier idea: "Fees rose by half; this decision angered parents."
• one and ones replace a countable noun already named: "Which bag? The blue one", "the fresh ones".`,
    detailedNotes: {
      overview: 'This module gathers the pointing and measuring words of English into one exam-focused system: the article set, the quantifiers, the shared-reference pronouns and the habits that make a paragraph cohere. Each section is a rule-then-drill-then-correction set built around the way WASSCE tests these forms.',
      introduction: 'Determiners and pronouns are the small words that decide whether a script looks polished or careless. Learn the handful of rules behind a and an, less and fewer, this and that, and you can settle most objective items by instinct.',
      realWorldContext: 'In a Tamale essay a girl writes "The traders of Makola market sell much goods and less time was given to them", stacking article and quantifier errors WAEC loves to mark. A prefect reads "Me and myself collected the forms" at assembly, misusing a reflexive pronoun as a subject. A Kumasi radio host says "fewer money in the market" where the ear expects less. Determiners and pronouns stay invisible until they go wrong, and then a whole script looks careless.',
      objectives: [
        'Select a or an from the sound that follows and use the zero article correctly',
        'Choose much, many, few, little, less and fewer for the noun type',
        'Use both, neither, all and each with the right verb number',
        'Apply reflexive and reciprocal pronouns and separate relative, interrogative and demonstrative types',
        'Remove ambiguous and dangling reference and build cohesion with this, these and one or ones'
      ],
      sections: [
        {
          title: 'The Article System: a, an and Zero',
          content: 'The indefinite article is chosen by the first SOUND of the following word, not by its spelling, which is why an hour, an honest man and an MBA take an while a university, a one-egg omelette and a European house take a. The definite article the points to something already known or uniquely identified: "Close the door" refers to a shared door, and "The river Volta floods" names one river. The zero article, where no word appears, does real work: it marks general statements with plurals and uncountables, proper names, school subjects and languages, meals and games, and institutions used for their purpose. Choosing wrongly between a, an, the and nothing is one of the highest-frequency WASSCE errors.',
          bulletPoints: [
            'an before a vowel sound: "an ant", "an umbrella", "an SSI".',
            'a before a consonant sound even when a vowel is written: "a useful tool", "a union".',
            'the with shared knowledge: "Open the window" means a window both people know.',
            'zero article for general plurals and uncountables: "Books cost money".',
            'no article before an abstract used generally: "Honesty is rare", never "the honesty is rare".'
          ],
          keyTakeaway: 'Let the ear decide a or an by sound, and drop the article for general statements, names, subjects and purpose institutions.',
          realWorldExample: 'A Sunyani shop sign reads "a honest price", and the fix is "an honest price", because the h is silent and the next sound is a vowel.'
        },
        {
          title: 'Quantifiers: much, many, few, little, less and fewer',
          content: 'Quantifiers split by whether the noun can be counted. With uncountable nouns use much, little and a little: "there is much rice", "we have little time". With countable plurals use many, few and a few: "there are many stalls", "few students came". The trap words are few against a few and little against a little: the version with a means some, while the version without a means hardly any, so "few pupils passed" is gloomy but "a few pupils passed" is hopeful. The comparative pair follows the same divide: fewer counts countable things, as in "fewer errors", while less weighs uncountable ones, as in "less water". Ghanaian speech often says less people, but standard English requires fewer people.',
          bulletPoints: [
            'much and little pair with uncountables: "much sugar", "little water".',
            'many and few pair with countable plurals: "many pens", "few desks".',
            'a few and a little add a positive sense of some.',
            'fewer governs countable nouns; less governs uncountable nouns.',
            'the opposite of many is few, and the opposite of much is little.'
          ],
          keyTakeaway: 'Ask whether the noun counts or measures, then put much and less with what you measure and many, fewer and few with what you count.',
          realWorldExample: 'A Ho market broadcast warns that "less traders will come this week", but traders are counted, so the correct line is "fewer traders will come this week".'
        },
        {
          title: 'Both, Neither, All, Each and the Pronoun Families',
          content: 'Words like both, neither, all and each decide the verb. Both always looks plural and takes a plural verb: "Both of the answers are right." Neither and each are singular and take a singular verb: "Neither answer is correct", "Each girl has a book." All is plural with countables and singular with uncountables: "all the boys are here", "all the milk is gone." Pronouns form three families students mix: relative pronouns (who, whom, whose, which, that) link a clause to a noun, interrogative pronouns (who, whom, whose, which, what) ask questions, and demonstrative pronouns (this, that, these, those) point. Reflexive pronouns turn the action back on the subject, "he blamed himself", and reciprocal forms share an action, "the two boys helped each other"; never use a reflexive in place of an ordinary subject pronoun.',
          bulletPoints: [
            'Both takes a plural verb; neither and each take a singular verb.',
            'A reflexive is used only when subject and object are the same person: "she hurt herself."',
            'Say "Ama and I left", never "Ama and myself left".',
            'Relative who refers back to a person; interrogative who opens a question.',
            'each other suits two, one another suits more than two.'
          ],
          keyTakeaway: 'Match both, neither, all and each to the right verb number, and reserve reflexives for when subject and object coincide.',
          realWorldExample: 'At a Cape Coast prize-giving the master writes "Both winners were proud, and each of them collected a cup", and a careful reader sees were follow both while collected follows the singular each.'
        },
        {
          title: 'Reference, Cohesion and one or ones',
          content: 'Reference is the way a pronoun reaches back to the thing it stands for, and weak reference wrecks an essay. Ambiguous reference appears when a pronoun could point to two people: "When Efua met Abena she laughed" leaves the reader unsure who laughed, and the fix names the person. Dangling reference is worse, where a pronoun has no antecedent at all, as in "They say the school will close", with no who behind they; repair it with "People say" or "Pupils say". Cohesion, the mark of a strong script, uses this, these and such to gather a whole earlier idea into the next sentence: "Fees rose by half; this decision angered parents." Finally, one and ones replace a countable noun already named, so "Which shirt?" is answered "The red one", and "Which oranges?" by "The sweet ones"; they follow the, this, that and an adjective, but not a possessive adjective like my or your.',
          bulletPoints: [
            'Fix ambiguous reference by naming the person or thing intended.',
            'Replace a vague "they say" with a real subject.',
            'Use this or these to back-reference a whole prior idea for cohesion.',
            'one replaces a singular countable noun; ones replaces the plural.',
            'never use ones after my, your or his; keep the noun itself.'
          ],
          keyTakeaway: 'Every pronoun must reach one clear antecedent, and this, these and one or ones bind sentences together.',
          realWorldExample: 'An Achimota candidate writes "When Kofi scolded Musa, he was angry", and the examiner cannot tell who was angry; naming Kofi or Musa removes the ambiguity and rescues the language mark.'
        }
      ],
      commonMistakes: [
        'Writing "a honest" for "an honest"; the h is silent, so the sound after it is a vowel and the article must be an.',
        'Saying "much people" or "many water"; the fix matches much with uncountables and many with countable plurals.',
        'Using "less students" when students are counted; the fix is "fewer students".',
        'Placing a reflexive as the subject, "Myself and Ada came"; the fix is "Ada and I came".',
        'Leaving ambiguous reference in "Ama told Efua that her sister failed"; the fix names whose sister failed.'
      ],
      wassceExamTips: [
        'Paper 3 Objectives tests a or an by sound; hum the next word first, and the answer is decided before you look at the letters.',
        'Paper 2 Language correction often hides an article or quantifier slip, so write the wrong word and its fix to claim the method mark and the answer mark separately.',
        'In Paper 2 essays, read back for pronoun reference at every paragraph turn; one ambiguous he or they can cost the cohesion points.',
        'Paper 1 comprehension may ask who a pronoun in a passage refers to, so track each antecedent as you read.',
        'Time plan: give each Paper 3 determiner item about thirty seconds; when torn between much and many, check whether the noun can be counted.'
      ],
      summaryChecklist: [
        'Can I choose a or an by the sound that follows the article?',
        'Can I match much, many, few, little, less and fewer to the right noun type?',
        'Can I give both, neither, all and each the correct verb number?',
        'Can I tell relative, interrogative and demonstrative pronouns apart?',
        'Can I repair ambiguous and dangling reference and link sentences with one or ones?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-det-1',
        title: 'Choosing the Right Quantifier',
        problem: 'A Paper 3 item reads: "The mock brought ___ complaints than the last exam." Decide between less and fewer and justify the choice.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the noun the comparative word governs: "complaints".',
          'Step 2 (M1): Complaints are countable, since you can say one complaint or two complaints.',
          'Step 3 (M1): Countable plurals take the comparative fewer, while less governs uncountable nouns.',
          'Step 4 (M1): Therefore the blank must be filled by fewer, not less.',
          'Step 5 (A1): Answer: "The mock brought fewer complaints than the last exam."'
        ],
        keyTakeaway: 'Countable plurals take fewer, while less is reserved for what you measure rather than count.'
      },
      {
        id: 'ex-shs3-eng-det-2',
        title: 'Repairing Ambiguous Reference and a Reflexive',
        problem: 'A candidate writes: "When Gifty met Abena, she waved at herself." Rewrite the sentence so the referent is clear and the pronoun is correct.',
        stepByStepSolution: [
          'Step 1 (M1): Spot the ambiguous pronoun: "she" could be Gifty or Abena.',
          'Step 2 (M1): Choose one reading, say that Abena was the one who waved, and name that person in the rewrite.',
          'Step 3 (M1): Check the reflexive "herself": it wrongly points at a different person, so it cannot stand, since a reflexive must refer back to the subject.',
          'Step 4 (M1): Replace the reflexive with an ordinary object pronoun naming the other girl: if the subject is Abena, the person waved at is Gifty, so the object is "her".',
          'Step 5 (A1): Answer: "When Gifty met Abena, Abena waved at her."'
        ],
        keyTakeaway: 'Name the antecedent to end ambiguity, and keep reflexives only for when subject and object match.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t1-det',
      topicId: 'shs3-eng-t1-determiners-pronouns',
      title: 'Determiners and Pronouns Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-det-1',
          quizId: 'quiz-shs3-eng-t1-det',
          questionText: 'Choose the correct article: "We stood for ___ hour outside the office."',
          optionA: 'an',
          optionB: 'a',
          optionC: 'the',
          optionD: 'no article',
          correctOption: 'A',
          subConcept: 'Article Choice by Sound',
          explanation: 'The h in "hour" is silent, so the word opens with a vowel sound and takes "an": "an hour".',
          remediationTip: 'Let the ear choose a or an from the sound, not the spelling.'
        },
        {
          id: 'q-shs3-det-2',
          quizId: 'quiz-shs3-eng-t1-det',
          questionText: 'Choose the correct word: "The new hall has ___ seats than the old one."',
          optionA: 'less',
          optionB: 'much',
          optionC: 'fewer',
          optionD: 'little',
          correctOption: 'C',
          subConcept: 'Fewer versus Less',
          explanation: 'Seats are countable, so the comparative "fewer" is correct; "less" belongs with uncountable nouns.',
          remediationTip: 'Count the noun; if it counts, use fewer.'
        },
        {
          id: 'q-shs3-det-3',
          quizId: 'quiz-shs3-eng-t1-det',
          questionText: 'Which sentence uses the article correctly for a general statement?',
          optionA: 'The dogs bark at every stranger.',
          optionB: 'Dogs bark at strangers.',
          optionC: 'A dogs bark at strangers.',
          optionD: 'An dog barks at a stranger.',
          correctOption: 'B',
          subConcept: 'Zero Article',
          explanation: 'A general statement about a whole class uses the plural with no article, so "Dogs bark at strangers." is correct.',
          remediationTip: 'For a whole class in general, use the bare plural with no article.'
        },
        {
          id: 'q-shs3-det-4',
          quizId: 'quiz-shs3-eng-t1-det',
          questionText: 'Choose the correct sentence.',
          optionA: 'Myself and Kwame carried the box.',
          optionB: 'Kwame and me carried the box.',
          optionC: 'I and Kwame carried the box on myself.',
          optionD: 'Kwame and I carried the box.',
          correctOption: 'D',
          subConcept: 'Reflexive Pronouns',
          explanation: 'A subject needs the subject pronoun, and polite order places you second: "Kwame and I carried the box." A reflexive cannot stand as the subject.',
          remediationTip: 'Remove the other person to test it: "I carried" is right, "myself carried" is not.'
        },
        {
          id: 'q-shs3-det-5',
          quizId: 'quiz-shs3-eng-t1-det',
          questionText: 'Complete with the correct substitution: "These oranges are sour; give me the sweet ___."',
          optionA: 'one',
          optionB: 'it',
          optionC: 'ones',
          optionD: 'of one',
          correctOption: 'C',
          subConcept: 'One and Ones',
          explanation: 'A plural countable noun is replaced by "ones", so the request is for "the sweet ones".',
          remediationTip: 'A singular countable noun uses one; the plural uses ones.'
        }
      ]
    }
  },
{
    id: 'shs3-eng-t2-idioms-phrasal-verbs',
    subjectId: 'english',
    level: 'SHS 3',
    term: 2,
    orderIndex: 6,
    title: 'Idioms, Proverbs and Phrasal Verbs in WASSCE English',
    description: 'Consolidation of thematic idioms, Ghanaian proverbs and the six phrasal verb families that dominate WASSCE lexis, with separability rules, calques to avoid and register control.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=X1svJwUhUOA',
    youtubeId: 'X1svJwUhUOA',
    keyNotes: `• Money family: "foot the bill" (pay), "make ends meet" (earn enough to live), "tighten your belt" (spend less), "cost an arm and a leg" (very expensive), "a rip-off" (grossly overpriced), "money does not grow on trees" (it is not limitless).
• Trouble family: "in hot water" (in trouble with authority), "out of the frying pan into the fire" (worse than the situation escaped), "between the devil and the deep blue sea" (two equally bad choices), "a tough nut to crack" (a difficult problem or person), "the last straw" (the final irritation), "a storm in a teacup" (needless fuss), "on the spot" (in trouble, or at once).
• Speech family: "beat about the bush" (avoid the main point), "let the cat out of the bag" or "spill the beans" (reveal a secret), "take it with a pinch of salt" (not fully believe it), "hear it on the grapevine" (learn by rumour), "mince no words" (speak bluntly), "have the last word", "pull somebody\u2019s leg" (joke with somebody).
• Give: "give up" (abandon a habit), "give in to" (yield after resistance), "give away" (reveal a secret or hand over free), "give out" (be distributed; also emit, as the hall gave out a smell).
• Get: "get over" (recover from illness or loss), "get by" (manage with little), "get across" (make a message understood), "get down to" (begin serious work), "get away with" (escape punishment for), "get on with" (continue; also keep friendly relations).
• Put: "put off" (postpone), "put up with" (tolerate), "put forward" (propose for discussion), "put down" (humiliate or record in writing), "put through" (connect a telephone call), "put on" (wear or pretend).
• Look: "look into" (investigate), "look after" (take care of), "look forward to" followed by an -ing form or a noun, "look down on" (despise), "look up to" (admire), "look up" (search for information), "look through" (read hurriedly or examine).
• Run: "run out of" (use up a supply), "run into" (meet by chance or face a difficulty), "run over" (hit with a vehicle; also review), "run down" (criticise; also lose battery power), "run through" (rehearse or spend rapidly).
• Set: "set up" (establish or arrange), "set out" (start a journey; also state clearly), "set about" followed by an -ing form (begin doing), "set in" (begin and promise to last, used of rain or harmattan dust), "set aside" (disregard or reserve), "set off" (start a journey or trigger an alarm).
• Particle test: ask a question of the particle alone. In "He looked the matter up", "up" answers no question and is an adverb that can move; in "She left without him", "without whom" is answered, so "without" is a preposition that never moves.
• Separable rule: verb plus adverb particle takes the object in either position, "turn the light off" or "turn off the light", but a pronoun must stand between them: "turn it off", never "turn off it".
• Inseparable rule: verb plus preposition and every three-part verb keep the particle before the object: "look into the rumour", "put up with the noise", "look forward to it", "look down on them".
• Ghanaian calques to convert: "cool water" becomes cold water, "my body is hot" becomes I have a fever, "cut my hair" becomes have my hair cut, "emboss a seat" becomes book a seat, "knock somebody" becomes hit somebody, and "return back" or "repeat again" drops the second word.
• Proverbs are complete sentences quoted whole, as in "Wisdom is like a baobab tree; no one person can embrace it", "One head does not go into a cap" and "However high the palm tree grows, its roots remain in the ground"; in an essay state the proverb, interpret it in one sentence, attach it to your point in the next, never stack two together and never open a formal report with one.
• Register discipline: an idiom is informal, so it belongs in a letter to a friend, a speech, an article or a story, and never in a formal letter, an official report, minutes or a job application.
• In Paper 3, when two options are near synonyms, the deciding factor is usually the particle or the preposition that follows the idiom, not the general meaning.`,
    detailedNotes: {
      overview: 'Idioms, proverbs and phrasal verbs carry a steady share of marks in WASSCE Paper 3 objectives and they decide the quality of the informal essays and the letter-writing tasks on Paper 2. This topic consolidates the lexical families studied in SHS 2 into one exam-ready system: thematic idioms grouped by money, trouble and speech; the six high-frequency phrasal verb families built on give, get, put, look, run and set; the separability rules that determine where a particle sits; and the register control that keeps informal language out of formal writing. Because SHS 3 is a revision year, the emphasis is on accuracy under time pressure rather than on collecting new expressions.',
      introduction: 'Most candidates can recognise an idiom when they meet it in a passage but lose marks when asked to use one correctly. The gap is grammatical rather than lexical: a phrasal verb behaves like a transitive verb, so its object position matters, and an idiom behaves like a fixed phrase, so its wording cannot be altered. This lesson treats every expression as a sentence pattern you can test. You will learn the particle question test, the pronoun rule that no candidate should ever lose a mark on, and the discipline of matching an expression to the register of the task. The final section deals with Ghanaian calques, the friendly local forms that objective tests mark as incorrect.',
      realWorldContext: 'On the morning newsbeat of a station in Accra, a presenter reporting on a toll-booth scandal will say the contract was a rip-off and that the auditor is looking into it; the same presenter, reading the ministry statement, will write that the matter is under investigation. At Makola Market, a tray keeper who has sold out by noon and still cannot make ends meet will tell a customer that rice has cost her an arm and a leg this rainy season, and she may add the Akan-flavoured proverb that one head does not go into a cap when she advises the market queen to consult the assembly. A District Assembly member writing the minute of that meeting, however, must strip all of that away and record only that the assembly resolved to engage an auditor. WASSCE rewards candidates who can move between those two registers on command, which is exactly what a GES circular demands of an education secretary writing to a headmaster.',
      objectives: [
        'Apply thematic idioms of money, trouble and speech accurately in both objective items and composed writing.',
        'Distinguish separable from inseparable phrasal verbs and place noun and pronoun objects in the correct position.',
        'Classify the particle in a phrasal verb as an adverb or a preposition by using the question test.',
        'Correct Ghanaian idiom calques into standard WASSCE English without losing the intended meaning.',
        'Judge the register of a writing task and place or withhold idioms and proverbs accordingly.',
      ],
      sections: [
        {
          title: 'Idioms Grouped by Theme: Money, Trouble and Speech',
          content: 'Learn idioms in semantic families, not in alphabetical lists, because Paper 3 always tests recognition inside a situation. The money family clusters around paying, saving and shortage: "foot the bill", "make ends meet", "tighten your belt", "cost an arm and a leg", "in the red", "a rip-off" and "penny wise and pound foolish". The trouble family clusters around difficulty, escape and escalation: "in hot water", "out of the frying pan into the fire", "between the devil and the deep blue sea", "a tough nut to crack", "bite off more than you can chew", "a storm in a teacup", "the last straw" and "on the spot". The speech family clusters around secrecy, bluntness and belief: "let the cat out of the bag", "spill the beans", "beat about the bush", "mince no words", "take it with a pinch of salt", "hear it on the grapevine", "pull somebody\u2019s leg" and "have the last word". Revision should fix each idiom in a full sentence of your own, because an idiom listed alone gives the objective test nothing to check. Note that the internal wording is fixed: it is "a pinch of salt" in British and Ghanaian usage, and it is "the last straw", never "the last stick". Idioms are also locked as to form: you may change tense and person, but you may not change the noun to a plural or insert an adjective for emphasis.',
          bulletPoints: [
            'Money: "make ends meet", "foot the bill", "tighten your belt", "cost an arm and a leg", "a rip-off".',
            'Trouble: "in hot water", "a tough nut to crack", "the last straw", "a storm in a teacup", "on the spot".',
            'Speech: "let the cat out of the bag", "beat about the bush", "take it with a pinch of salt", "mince no words".',
            'Wording is fixed: change only tense and person, never the noun inside the idiom.',
            'Always revise an idiom inside a sentence, since the objective test supplies the sentence, not the phrase.',
          ],
          keyTakeaway: 'Group idioms by situation, memorise each inside a sentence, and never alter the fixed wording inside it.',
          realWorldExample: 'A candidate writing an article for the school magazine about a feeding-hall debt might say the proprietress had tightened her belt and that some pupils who skipped meals had been left in the lurch; the same candidate writing a report to the headmaster on the same issue would simply record that fees remained unpaid and that supplies had run low.',
        },
        {
          title: 'The Six Phrasal Verb Families: give, get, put, look, run, set',
          content: 'WASSCE concentrates its phrasal verb items on a small number of all-purpose verbs, so mastering six verbs covers a large share of the lexis. Give: "give up" (abandon or quit), "give in" (yield after resisting), "give away" (reveal a secret or hand over free of charge), "give out" (be distributed, or emit, as in the hall gave out a terrible smell). Get: "get over" (recover from illness or loss), "get by" (manage with inadequate resources), "get across" (make an idea understood), "get down to" (start serious work, as in get down to your revision), "get away with" (escape punishment for an act), "get on with" (continue, or keep friendly relations). Put: "put off" (postpone), "put up with" (tolerate), "put forward" (propose for discussion), "put down" (humiliate or criticise, also record in writing), "put through" (connect by telephone), "put on" (wear, or pretend, as in she put on a brave face). Look: "look into" (investigate), "look after" (take care of), "look forward to" (expect with pleasure), "look down on" (despise), "look up to" (admire), "look up" (find information), "look through" (read hurriedly or examine). Run: "run out of" (exhaust a supply), "run into" (meet by chance, or encounter a difficulty), "run over" (hit with a vehicle, or revise briefly), "run down" (criticise, or lose power), "run through" (rehearse, or spend quickly). Set: "set up" (establish or arrange), "set out" (begin a journey, or state clearly), "set about" (begin doing something, taking an -ing form), "set in" (begin and appear permanent, used of rain or harmattan dust), "set aside" (disregard or reserve), "set off" (start a journey, or trigger an alarm). Each pattern must be learned with its complement: "look forward to" and "set about" take an -ing form, so "I look forward to hearing from you" is correct while "I look forward to hear from you" is a common Paper 2 error.',
          bulletPoints: [
            'give up (quit), give in (yield), give away (reveal), give out (be distributed or emit).',
            'get over (recover), get across (communicate), get down to (start working), get away with (escape blame).',
            'put off (postpone), put up with (tolerate), put forward (propose), put down (humiliate or record).',
            'look into (investigate), look forward to (+ -ing), look down on (despise), look up to (admire).',
            'run out of (exhaust), run into (meet by chance), run down (criticise); set up (found), set about (+ -ing), set in (of weather).',
          ],
          keyTakeaway: 'Six verbs generate most WASSCE phrasal verb items; learn each member with the pattern that follows it.',
          realWorldExample: 'A student leader addressing the Debating Union at a school in Kumasi might say the executive refused to give in over the sanitation strike, resolved to get down to the backlog of complaints, and warned that any member who tried to put the matter off would find it looked into by the house committee.',
        },
        {
          title: 'Separable and Inseparable: Adverb Particle or Preposition?',
          content: 'The single most tested feature of a phrasal verb is where the object goes, and the answer depends on whether the second element is an adverb particle or a preposition. Apply the question test. First, ask a question of the particle on its own: in "He looked the matter up", ask "up to what?" The question is meaningless, so "up" is an adverb particle; it modifies the verb and the verb phrase is separable. In "She left without him", ask "without whom?" The question is answered by the words present, so "without" is a preposition governing an object; the verb phrase is inseparable. Second, apply the pronoun rule, which is absolute: with a separable verb, a pronoun object must sit between the verb and the particle, so "turn it off", "pick them up", "send me off" are correct and "turn off it", "pick up them" are wrong. With an inseparable verb the pronoun stays after the particle: "look into it", "put up with them", "look forward to it". Three-part verbs are always inseparable: "put up with", "look down on", "get along with", "stand up for", so the object follows the whole string, "They look down on us". Inseparable combinations are numerous, so the safest examination habit is to treat any verb whose second element answers a question about its object as fixed. The same distinction matters in Paper 2, because a wrongly separated particle reads as a broken sentence to a chief examiner and costs expression marks even when the meaning is clear.',
          bulletPoints: [
            'Question test: ask a question of the particle alone; if it cannot be answered, the particle is an adverb.',
            'Separable (verb plus adverb): "turn the light off" or "turn off the light" are both correct.',
            'Pronoun rule (absolute): "turn it off", never "turn off it"; "pick them up", never "pick up them".',
            'Inseparable (verb plus preposition): "look into the rumour", "look into it"; the particle never moves.',
            'Three-part verbs are always inseparable: "put up with us", "look down on them", "stand up for it".',
          ],
          keyTakeaway: 'Adverb particles move and pull pronouns in front of them; prepositions never move and always keep the object behind them.',
          realWorldExample: 'A lecturer at a polytechnic in Ho returning scripts can say she marked them all, but with the phrasal verb "hand back" she must say she handed them back and never handed back them; with "get over" in the sense of recovering from malaria, she says she got over it, not got it over.',
        },
        {
          title: 'Ghanaian Calques, Proverb Handling and Register Control',
          content: 'Ghanaian English is rich and legitimate in conversation, but WASSCE objective items measure standard British English, so calques must be recognised and converted. "Cool water" is standardly cold water; "my body is hot" is standardly I have a fever or I am running a temperature; "cut my hair" is standardly have my hair cut or get my hair cut, since the student is not the agent; "emboss a seat" is standardly book or reserve a seat; "knock somebody" for hit somebody is non-standard in formal writing; "return back", "repeat again" and "go back again" are redundant; and the discourse marker "to at least" should be dropped entirely. Proverbs are handled differently: they are complete sentences and should be quoted whole. "Wisdom is like a baobab tree; no one person can embrace it", "One head does not go into a cap", "However high the palm tree grows, its roots remain in the ground" and the Adinkra principle Sankofa, go back and fetch what you have forgotten, all carry a full clause and lose their point when shortened. In an essay, quote the proverb, interpret it in one sentence and attach it to your argument in the next; do not paste two proverbs side by side, and do not build a paragraph out of proverbs alone. Register finally decides everything. An idiom is informal by nature, so it belongs in a letter to a friend, a speech, an article or a story, and it is out of place in a formal letter, a report, minutes, a job application or an official circular. A single idiom inside a report to a district education director can make the whole document read as unserious, which is why the safest examination habit is to write formal tasks in plain standard English and to spend the idioms in the informal tasks, where they earn credit for richness instead of costing marks for tone.',
          bulletPoints: [
            'Calque conversions: cool water to cold water, my body is hot to I have a fever, emboss a seat to book a seat.',
            'Causative fix: say have your hair cut, not cut your hair, when someone else does the cutting.',
            'Remove redundancy: return back, repeat again and go back again each repeat themselves.',
            'Quote a proverb whole, then interpret it, then attach it to the point in one further sentence.',
            'Idioms are informal: welcome in letters to friends, speeches and stories; excluded from reports, applications and minutes.',
          ],
          keyTakeaway: 'Convert local calques to standard English, quote proverbs as complete sentences, and keep every idiom out of formal writing.',
          realWorldExample: 'A candidate applying to a bank branch in Adenta for vacation employment writes "I should be grateful if my application receives favourable consideration", and keeps expressions such as "the job will help me make ends meet" out of the letter; the same candidate writing to a friend about the same interview may happily say the panel looked him over and that he was in hot water when he could not answer one question.',
        },
      ],
      summaryChecklist: [
        'Can I place at least three idioms each from the money, trouble and speech families in correct sentences?',
        'Can I classify a particle as an adverb or a preposition using the question test?',
        'Can I position noun and pronoun objects correctly with separable and inseparable phrasal verbs?',
        'Can I convert five common Ghanaian calques into standard WASSCE English?',
        'Can I decide whether an idiom or a proverb suits the register of a given writing task?',
      ],
      commonMistakes: [
        'Writing "turn off it" or "pick up them": a pronoun object must go between a separable verb and its particle, so write "turn it off" and "pick them up".',
        'Writing "look forward to hear from you": the word "to" here is a preposition, so it takes a noun or an -ing form; the correct line is "look forward to hearing from you".',
        'Writing "put with the noise up": "put up with" is a three-part inseparable verb, so the object follows the whole string, "put up with the noise".',
        'Altering fixed wording inside an idiom, such as "the last stick" for "the last straw" or "a grain of salt" for "a pinch of salt"; the wording is locked and only tense and person may change.',
        'Forcing an idiom such as "a storm in a teacup" into a formal report or a job application letter; the idiom is informal and must be replaced by a plain statement such as "a minor issue that was exaggerated".',
      ],
      wassceExamTips: [
        'In Paper 3 objectives on idioms, read the whole sentence before looking at the options; the missing element is usually a preposition or a particle, and half the distractors fail that pattern rather than the meaning.',
        'When two options in Paper 3 are near synonyms, decide between them on collocation: "give in" takes "to" (they gave in to the demand), while "give up" takes the activity directly (he gave up smoking).',
        'Paper 2 writing tasks award content and presentation marks separately; an idiom in a formal task costs presentation marks for tone, so reserve idioms for the informal letter, the speech and the article.',
        'In comprehension on Paper 1, if a question asks what an expression implies, answer in your own words and never paraphrase the idiom by repeating its literal words; the answer mark goes to the sensed meaning, not to a restatement of the idiom.',
        'Allocate about three minutes to a set of five idiom and phrasal verb objectives, one minute per item with a ten-second check of the particle pattern, and mark any doubtful item for review rather than reasoning in circles.',
      ],
    },
    examples: [
      {
        id: 'ex-shs3-eng-ip-1',
        title: 'Replacing plain phrases with idioms and phrasal verbs',
        problem: 'Rewrite the following sentences, replacing the words in brackets with ONE idiom or phrasal verb from the families studied, so that the meaning is kept. (a) Aunty Abena (used up all her money) and could not pay the school fees. (b) The complaint about the feeding shed (was being investigated) by the management. (c) Kofi (agreed to the demand) after arguing for an hour. (d) The passengers (tolerated) the long delay at Kejetia without complaining. (e) The speaker (revealed the secret) during the district farmers day programme. (f) The prefect insisted that the house (start dealing seriously with) the sanitation backlog.',
        stepByStepSolution: [
          'Step 1 (M1): Fix the meaning and the grammatical pattern of each gap first. Ask what the bracket expresses, then ask whether the replacement is transitive, inseparable, or followed by an -ing form; the replacement must satisfy both tests.',
          'Step 2 (A1): (a) expresses exhausting a supply, so the natural choice is the phrasal verb "ran out of": Aunty Abena ran out of money and could not pay the school fees. The idiom "made ends meet" would also show the hardship but it does not replace "used up all her money".',
          'Step 3 (A1): (b) expresses investigation of a matter, so "was being looked into" fits; "looked in" or "looked on" change the meaning. The sentence becomes: The complaint about the feeding shed was being looked into by the management.',
          'Step 4 (A1): (c) yields after resistance, so "gave in" is exact; "gave up" would mean he abandoned the argument without conceding. (d) tolerates, so "put up with" is exact, and the object must stand after the whole three-part particle string.',
          'Step 5 (A1): (e) reveals a secret by accident, so "let the cat out of the bag" or "spilled the beans" both serve. (f) begins serious work on something, so "get down to" is required, and because the pattern takes a noun it is "get down to the sanitation backlog".',
          'Step 6 (A1): Full answer: (a) ran out of money; (b) was being looked into; (c) gave in; (d) put up with; (e) let the cat out of the bag (or spilled the beans); (f) get down to the sanitation backlog. Any replacement that breaks the particle pattern or the tense loses the mark.',
        ],
        keyTakeaway: 'Choose the replacement that matches both the situation and the verb pattern, then read the whole sentence aloud to confirm the particle is where the grammar puts it.',
      },
      {
        id: 'ex-shs3-eng-ip-2',
        title: 'Correcting calques, particle order and register in a paragraph',
        problem: 'The following paragraph was written by an SHS 3 candidate. Rewrite it in standard English, correcting every error of particle order, every Ghanaian calque and the register problem: "When the minister arrived, the crowd jostled to greet him. A woman shouted that she had stood there since early morning and that the minister should cool water for the children since their bodies were hot. The head boy told her to look the matter into later. He added that he would not put with such behaviour up in his school. A reporter wrote that the woman had made a scene, and the whole account was later published in a formal letter to the district education director with the words, she was in hot water that morning."',
        stepByStepSolution: [
          'Step 1 (M1): Underline every candidate expression and label it: particle-order error, calque, or register breach. Labelling prevents the common fault of rewriting the paragraph without touching the actual errors.',
          'Step 2 (A1): Particle order: "look the matter into" is wrong because "look into" is inseparable; write "look into the matter later". "Put with such behaviour up" is wrong because "put up with" is a three-part inseparable verb; write "put up with such behaviour".',
          'Step 3 (A1): Calques: "cool water" becomes "cold water"; "their bodies were hot" becomes "they were running fevers" or "they had fever"; both are standard and neither changes the meaning of the woman\u2019s complaint.',
          'Step 4 (M1): Register: the last sentence places the informal idiom "in hot water" inside a formal letter to a district education director, so the idiom must be replaced by a neutral statement of the same fact.',
          'Step 5 (A1): Replace "she was in hot water that morning" with "the woman had been reprimanded that morning" or "the matter caused her embarrassment". The idiom would be acceptable in a letter to a friend describing the same event.',
          'Step 6 (A1): Full corrected version: "When the minister arrived, the crowd pressed forward to greet him. A woman shouted that she had stood there since early morning and that the minister should provide cold water for the children because they were running fevers. The head boy told her to look into the matter later. He added that he would not put up with such behaviour in his school. A reporter wrote that the woman had caused a disturbance, and the matter was later recorded in a formal letter to the district education director, which stated that the woman had been reprimanded that morning."',
        ],
        keyTakeaway: 'Separate the three kinds of fault before rewriting: particle order is grammar, cool water and hot body are calques, and an idiom in a formal letter is a register breach.',
      },
    ],
    quiz: {
      id: 'quiz-shs3-eng-t2-idioms-phrasal-verbs',
      topicId: 'shs3-eng-t2-idioms-phrasal-verbs',
      title: 'Idioms, Proverbs and Phrasal Verbs Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-ip-1',
          quizId: 'quiz-shs3-eng-t2-idioms-phrasal-verbs',
          questionText: 'Choose the option that best completes the sentence: The executive planning committee decided to ___ the hearing until Monday because the district officer was unavailable.',
          optionA: 'put off',
          optionB: 'put down',
          optionC: 'put out',
          optionD: 'put across',
          correctOption: 'A',
          subConcept: 'Phrasal verb put family',
          explanation: '"Put off" means postpone, which is exactly what moving a hearing to Monday requires. "Put down" means humiliate or record in writing, and "put across" means communicate an idea, so both change the sense of the sentence; "put out" means extinguish or publish.',
          remediationTip: 'Revise the put family as a table of meanings: put off (postpone), put up with (tolerate), put forward (propose), put down (humiliate or record).',
        },
        {
          id: 'q-shs3-ip-2',
          quizId: 'quiz-shs3-eng-t2-idioms-phrasal-verbs',
          questionText: 'The nearest in meaning to the underlined idiomatic expression is: The new uniforms <u>cost her an arm and a leg</u>, so Ama had to tighten her belt.',
          optionA: 'were sold at a discount',
          optionB: 'caused her a serious injury',
          optionC: 'were extremely expensive',
          optionD: 'were of poor quality',
          correctOption: 'C',
          subConcept: 'Idiom of money',
          explanation: '"Cost somebody an arm and a leg" means cost a great deal of money, and the second idiom "tighten her belt" confirms the shortage. Option B gives the literal body parts, which is the trap in idiom items; options A and D introduce ideas the sentence never carries.',
          remediationTip: 'Never read an idiom word by word; ask what situation the sentence describes, here spending, then choose the option that matches that situation.',
        },
        {
          id: 'q-shs3-ip-3',
          quizId: 'quiz-shs3-eng-t2-idioms-phrasal-verbs',
          questionText: 'Which of the following sentences places the particle correctly?',
          optionA: 'The auditor looked the rumour into.',
          optionB: 'The auditor looked into the rumour.',
          optionC: 'The auditor looked the rumour.',
          optionD: 'The auditor into looked the rumour.',
          correctOption: 'B',
          subConcept: 'Inseparable particle order',
          explanation: '"Look into" is verb plus preposition, so it is inseparable and the object must follow the particle: "looked into the rumour". Option A separates the particle from its prepositional object, which only separable adverb particles allow; option C drops the particle and changes the verb entirely.',
          remediationTip: 'Use the question test: ask "into what?"; since the particle answers a question about an object, it is a preposition and must stay before the object.',
        },
        {
          id: 'q-shs3-ip-4',
          quizId: 'quiz-shs3-eng-t2-idioms-phrasal-verbs',
          questionText: 'Choose the option that best completes the sentence: The committee refused to ___ to the demand for a second round of fees, although the parents threatened to withdraw their children.',
          optionA: 'give in',
          optionB: 'give up',
          optionC: 'give out',
          optionD: 'give away',
          correctOption: 'A',
          subConcept: 'Collocation with give',
          explanation: 'The pattern is yield plus the preposition TO, which belongs to "give in": refuse to give in to the demand. "Give up" takes the activity without a preposition, so "give up to the demand" is ungrammatical here; "give out" means distribute and "give away" means reveal.',
          remediationTip: 'Learn each member of the give family with the preposition it governs, not with the meaning alone.',
        },
        {
          id: 'q-shs3-ip-5',
          quizId: 'quiz-shs3-eng-t2-idioms-phrasal-verbs',
          questionText: 'In which of the following WASSCE writing tasks is the use of an idiom most appropriate?',
          optionA: 'A report to the district director of education on the damaged classroom block.',
          optionB: 'A job application letter to a bank for vacation employment.',
          optionC: 'A letter to your friend describing a day at the Homowo festival.',
          optionD: 'The minutes of the last general meeting of the Students\u2019 Representative Council.',
          correctOption: 'C',
          subConcept: 'Register and idiom use',
          explanation: 'An idiom is informal, so it belongs in a personal letter, where richness of expression earns credit. Reports, job application letters and minutes are formal documents written in impersonal plain English, and an idiom in any of them reads as unserious and costs presentation marks.',
          remediationTip: 'Before writing, label the task formal or informal; only then decide whether idioms and proverbs are allowed in.',
        },
      ],
    },
  },
  {
    id: 'shs3-eng-t2-voice-speech-transformation',
    subjectId: 'english',
    level: 'SHS 3',
    term: 2,
    orderIndex: 7,
    title: 'Active and Passive Voice, Direct and Indirect Transformation',
    description: 'Full revision of passive formation across every tense, the by-agent and agentless passive, indirect and impersonal reporting, and transformation drills that bind voice to reported speech.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=GYor7pxsyD0',
    youtubeId: 'GYor7pxsyD0',
    keyNotes: `• Passive formula: a form of BE plus the past participle; BE alone carries the tense, the participle never changes, and BEEN or BEING is never dropped.
• Simple and continuous ladder: types to are typed; is plastering to is being plastered; sold to was sold; was singing to was being sung.
• Perfect and future ladder: has approved to has been approved; had buried to had been buried; shall complete to will be completed; will have finished to will have been finished.
• Modals: "must obey" becomes must be obeyed, "can carry" becomes can be carried, "should have punished" becomes should have been punished, "might have taken" becomes might have been taken.
• Omitting BEEN in a perfect passive, as in "The report has completed", is the single most common error here; the correct form is "The report has been completed".
• No passive exists for intransitive and link verbs: arrive, come, go, die, happen, fall, sleep, seem, exist, laugh and weep carry no object, so "The delegation arrived" and "She became a doctor" cannot be recast.
• Retain every preposition that belongs to the verb: "They looked after the orphans" becomes "The orphans were looked after"; "People speak well of him" becomes "He is spoken well of".
• Keep the by-agent when the doer is specific and informative, "The report was compiled by a committee of three teachers"; drop it when the doer is unknown, obvious or withheld, and always after someone, people, they, nobody and everybody.
• A verb with two objects has two passives: "She gave me a pen" becomes "I was given a pen" with the person promoted, the natural choice, or "A pen was given to me by her" with the preposition restored.
• The personal or indirect passive is the exam favourite: "They offered Yaw a scholarship" becomes "Yaw was offered a scholarship"; "The teachers promised us relief" becomes "We were promised relief"; "He bought his mother a wrapper" becomes "His mother was bought a wrapper".
• Impersonal reporting of a present clause: "People say that he is ill" becomes "It is said that he is ill" or "He is said to be ill".
• Impersonal reporting of an earlier clause: "People say that the cashier absconded" becomes "The cashier is said to have absconded", with a perfect infinitive, never "to abscond".
• A past reporting verb shifts the frame: "People said that he had fled" becomes "It was said that he had fled" or "He was said to have fled"; the pattern accepts say, think, believe, consider, expect, report, claim, know, allege and rumour.
• Imperatives and causatives: "Shut the gate" becomes "Let the gate be shut" or "The gate must be shut"; MAKE drops to in the active and recovers it in the passive, so "They made him confess" becomes "He was made to confess", while let and have become was allowed to or was permitted to.
• Indirect speech mechanics: said to becomes told only with an object; backshift present to past, past or present perfect to past perfect, will to would, can to could, may to might; shift today to that day, yesterday to the previous day, tomorrow to the following day, here to there, this to that and ago to before.
• Reported questions keep statement order and lose the question mark, "He asked me where I lived", yes-no questions take if or whether, imperatives become an object plus a to-infinitive, and universal truths keep the present tense: "The teacher said that water boils at 100 degrees Celsius".`,
    detailedNotes: {
      overview: 'Voice and reported speech are the two transformation systems that WASSCE uses to test grammatical control, and they are usually set together in Paper 2 composition and in Paper 3 objective items. This topic consolidates passive formation across every tense and modal, the choice between keeping and dropping the by-agent, the personal or indirect passive produced by two-object verbs, and the impersonal reporting patterns that dominate the news items candidates read in comprehension. It ends with transformation drills that move a single sentence through voice and through direct and indirect speech in one pass, because that is how the questions are framed in the examination.',
      introduction: 'By SHS 3 you already know what a passive is; the marks are lost on precision. Candidates write "The report has completed" instead of "has been completed", promote the wrong object in a two-object verb, and use a simple infinitive where a perfect infinitive is required. Each of those errors is a pattern failure, not a knowledge failure, so this lesson works with patterns: BE plus past participle carried through the whole tense ladder, the preposition that must be stranded with phrasal verbs, and the two-frame reporting structure with IT and with the person as subject. You will also revise indirect speech, because a reported statement whose reporting verb is past cannot be transformed into an impersonal passive without shifting the reporting verb too.',
      realWorldContext: 'Listen to the midday newsbeat on a station in Accra and almost every item is passive: the cocoa bags were offloaded at the New Juaben market, the contract was awarded without tender, two officials are said to have fled, and the roads have been left untarred for three years. A District Assembly common-gound report uses the agentless passive deliberately, because the secretary must record that funds were misused without naming a person before the assembly resolves. The same candidate who writes that report for the assembly also writes a formal complaint to a bank in Adenta, and both documents demand the passive; yet the same candidate telling a friend at the dormitory in Kumasi what happened will use the active voice throughout. WAEC rewards that flexibility, and it punishes the candidate who cannot tell which voice a task demands.',
      objectives: [
        'Apply the passive formula accurately across all tenses, aspects and modal auxiliaries.',
        'Distinguish verbs that admit a passive from intransitive and link verbs that do not.',
        'Apply the by-agent rule, promoting the appropriate object in two-object and prepositional verbs.',
        'Construct impersonal and personal reporting passives with correct infinitive forms.',
        'Transform direct statements, questions, imperatives and exclamations into indirect speech and combine the change with a voice shift.',
      ],
      sections: [
        {
          title: 'Passive Formation Across the Tenses',
          content: 'Every passive is built from one formula, a correct form of BE plus the past participle of the main verb, and the whole burden of the tense falls on BE. Work through the paradigm until the pattern is automatic. Simple present: "The secretary types the letters" becomes "The letters are typed". Present continuous: "The masons are plastering the wall" becomes "The wall is being plastered". Simple past: "Kwame sold the cocoa" becomes "The cocoa was sold". Past continuous: "She was singing the anthem" becomes "The anthem was being sung". Present perfect: "The board has approved the report" becomes "The report has been approved". Past perfect: "They had buried the body" becomes "The body had been buried". Future with will or shall: "We shall complete the project" becomes "The project will be completed". Future perfect: "He will have finished the course" becomes "The course will have been finished". Modals: "You must obey the rule" becomes "The rule must be obeyed"; "The manager should have punished him" becomes "He should have been punished by the manager"; "She can carry the basket" becomes "The basket can be carried". Notice that after any perfect aspect the word "been" is always present, and after any progressive aspect the word "being" is always present. Keep the number agreement of the new subject in view, because the object that becomes the subject may change the verb: "The boy breaks the windows" becomes "The windows are broken by the boy", and the auxiliary shifts from IS to ARE. Finally, remember that not every verb admits a passive. Intransitive verbs such as arrive, come, go, die, happen, sleep, seem, exist, weep and fall have no object to promote, so "The delegation arrived at Tamale" has no passive counterpart. The same is true of link verbs: "She became a doctor" cannot be recast. Examiners love to set one such sentence inside a group of passivisable ones and award no mark to a candidate who manufactures a passive for it.',
          bulletPoints: [
            'Formula: BE plus past participle; BE alone carries tense and aspect.',
            'Perfect passive always contains "been"; progressive passive always contains "being".',
            'Modals: must be done, can be done, should have been done, might have been done.',
            'Intransitive and link verbs have no passive: arrived, died, happened, became, seems.',
            'The new subject controls the number of BE: "The windows are broken", not "is broken".',
          ],
          keyTakeaway: 'Set the tense on BE, keep the participle fixed, and refuse to build a passive for a verb that has no object.',
          realWorldExample: 'A prefect writing the sanitation report for a hostel at a school in Achimota records that the buckets had been emptied, that the bins were being burned behind the block, and that water had not been supplied since Tuesday; each clause preserves the aspect of the original observation while removing the name of the cleaner.',
        },
        {
          title: 'The By-Agent Phrase, Agentless Passive and Two-Object Verbs',
          content: 'The by-agent is optional information and its choice is graded. Retain it when the doer is specific, unexpected or legally important: "The minutes were signed by the district director" tells the reader something the active sentence also told. Drop it when the doer is unknown, obvious, unimportant or deliberately withheld: "The shop was robbed last night" says nothing useful about a robber, "He was arrested" implies the police, and an assembly report that states that money was misused withholds a name until the panel of inquiry reports. Drop it too when the active subject was someone, people, they, everybody or a general WE: "People vandalise the borehole" becomes "The borehole is vandalised", not "by people". Two further mechanical rules carry marks. First, prepositions that belong to the verb must be stranded, never dropped: "They looked after the orphans" becomes "The orphans were looked after"; "People speak well of the manager" becomes "The manager is spoken well of"; "They laughed at the boy" becomes "The boy was laughed at". Second, a verb with two objects has two possible passives, and the exam expects the indirect object to be promoted because it produces the more natural sentence. "She gave me a pen" becomes either "I was given a pen" or "A pen was given to me by her"; the second must restore the preposition TO before the person. "The company offered Yaw a post" becomes "Yaw was offered a post" or "A post was offered to Yaw". Similarly "They promised the pupils relief", "The teacher owed him an apology", "He bought his mother a wrapper" all yield a personal passive in which the person stands as subject: "The pupils were promised relief", "He was owed an apology", "His mother was bought a wrapper". A candidate who promotes the direct object of BUY without adding FOR writes "A wrapper was bought his mother", which is defective; the correct second form is "A wrapper was bought for his mother".',
          bulletPoints: [
            'Keep the agent when it is specific and informative; drop it when it is unknown, obvious, unimportant or withheld.',
            'Never keep "by someone", "by people", "by them", "by everybody" as the agent.',
            'Strand the verb\u2019s own preposition: "The orphans were looked after", "He is spoken well of".',
            'Two objects give two passives; promote the person for the natural personal passive.',
            'If the thing is promoted, restore to or for: "A pen was given to me", "A wrapper was bought for his mother".',
          ],
          keyTakeaway: 'Choose the agent on grounds of information, keep the verb\u2019s preposition, and promote the person in two-object verbs.',
          realWorldExample: 'A market woman at Makola who is asked to describe a disputed sale will say her goods were seized, a figure was paid to an unknown person and a receipt was given to her; the District Assembly secretary minuting the same events will write that goods were seized and that a receipt was issued, dropping every agent because the assembly has no proof of identity yet.',
        },
        {
          title: 'Impersonal Reporting: It is said that and He is said to have',
          content: 'Reporting passives let a writer state an allegation without accepting it, which is why they dominate newspaper and official language. Two frames exist. Frame one begins with the formal subject IT: "People say that he is corrupt" becomes "It is said that he is corrupt". Frame two makes the person of the subordinate clause the subject and converts the verb into an infinitive: "He is said to be corrupt". The infinitive choice is the marked point. If the reported clause is present or states a general fact, use the simple infinitive: "It is reported that she works in Takoradi" becomes "She is reported to work in Takoradi". If the reported clause is past or perfect, use the perfect infinitive with HAVE: "People say that the trader absconded" becomes "The trader is said to have absconded", and "They believe that the minister has taken the funds" becomes "The minister is believed to have taken the funds". If the reported clause is progressive, use the continuous infinitive: "They say that the chief is recovering" becomes "The chief is said to be recovering". Shift the reporting verb itself when the active reporting was past: "People said that the trader had fled" becomes "It was said that the trader had fled" or "The trader was said to have fled". The verbs that accept this treatment are say, think, believe, consider, expect, report, claim, know, allege, understand and rumour: "The missing boy was thought to have drowned", "The contract is alleged to have been inflated". One trap must be avoided: KNOW in the perfect gives "He has been known to cheat candidates", not "to cheats". With EXPECT and CLAIM the passive usually takes the perfect infinitive because the event lies before the reporting, while a forward-looking verb keeps the simple infinitive, as in "The two sides are expected to meet on Friday".',
          bulletPoints: [
            'Frame one: "It is said that the boy is missing"; frame two: "The boy is said to be missing".',
            'Reported present takes the simple infinitive; reported past or perfect takes the perfect infinitive with HAVE.',
            'Reported progressive takes the continuous infinitive: "The chief is said to be recovering".',
            'Past reporting shifts the frame: "He was said to have fled", "It was reported that they had left".',
            'Verbs that fit: say, think, believe, consider, expect, report, claim, know, allege, rumour.',
          ],
          keyTakeaway: 'Match the infinitive to the time of the reported event: simple for present, perfect for what happened earlier.',
          realWorldExample: 'A presenter in Tamale reading a headline on the school fees waiver says that families are said to have been enrolled twice and that the headmaster is believed to hold the register; the printed newspaper version writes the same two sentences as impersonal passives, because the station has not yet proved either claim.',
        },
        {
          title: 'Linking Voice with Reported Speech in Transformation Drills',
          content: 'SHS 3 transformation drills combine the two systems in one item, so the order of operations must be settled. Change the reporting structure first, then the voice inside the clause, and check the tense only at the end. In direct speech the words are quoted and the reporting verb stands before them; in indirect speech the quotation becomes a that-clause, the pronouns shift with the speaker, and the verb backshifts when the reporting verb is past: present simple to past simple, past simple or present perfect to past perfect, will to would, shall to should, can to could, may to might, must to had to. Time and place words travel with the tense: today becomes that day, yesterday becomes the previous day, tomorrow becomes the following day, now becomes then, here becomes there, this becomes that, and two weeks ago becomes two weeks before. Questions become statements, so the auxiliary order is repaired and the question mark removed: "Where do you live?" becomes "He asked me where I lived", and a yes-no question takes if or whether: "Have you finished?" becomes "She asked whether I had finished". Imperatives become an object plus a to-infinitive: "Sit down" becomes "He told me to sit down", and a prohibition becomes "He ordered me not to leave the bag there". Exclamations are explained rather than quoted: "Alas! My brother is dead" becomes "She exclaimed sorrowfully that her brother was dead". Now overlay the passive. "The headmaster said, \u2018The boys destroyed the desks\u2019" becomes, in indirect speech, "The headmaster said that the boys had destroyed the desks", and with the passive inside the clause, "The headmaster said that the desks had been destroyed by the boys". Likewise "Someone said to me, \u2018They will promote you\u2019" becomes "I was told that I would be promoted", a single sentence carrying both the indirect reporting and the future-in-the-past passive. Watch the verbs that refuse a person object: "He suggested me to come" is wrong; it is "He suggested that I should come". SAY and TELL also differ: TELL requires a personal object, so "She said to me" becomes "She told me".',
          bulletPoints: [
            'Order of work: reporting structure, then voice inside the clause, then a final tense check.',
            'Backshift only when the reporting verb is past; universal truths keep the present tense.',
            'Reported questions use statement word order, no auxiliary DO and no question mark.',
            'Imperatives become object plus to-infinitive; prohibitions become object plus not to-infinitive.',
            'Tell needs a person object, say takes to before a person; suggest and announce take no person object.',
          ],
          keyTakeaway: 'Fix the reporting frame first, then passivise inside the clause, and let one verb of telling agree with its object.',
          realWorldExample: 'A pupil representative reporting the assembly to parents writes: the chair told us that the fee balance would be settled in the third week and that the broken desks had been repaired by a fund-raising committee; both clauses are indirect and the second is passive, exactly as a Paper 2 item requires.',
        },
      ],
      summaryChecklist: [
        'Can I form the passive of every tense and modal, including the perfect forms that need been?',
        'Can I identify verbs that have no passive and refuse to invent one for them?',
        'Can I decide when to keep the by-agent and when to drop it without losing meaning?',
        'Can I produce both passives of a two-object verb and choose the more natural one?',
        'Can I change a sentence from direct speech to indirect speech and passivise the reported clause in one step?',
      ],
      commonMistakes: [
        'Writing "The report has completed" for "The report has been completed": a perfect passive needs BEEN between the auxiliary and the participle, and omitting it makes the sentence active.',
        'Attempting a passive of an intransitive verb, such as "The meeting was taken place" or "He was died": take place, arrive, happen, die and come have no object, so no passive exists.',
        'Dropping the preposition of a phrasal or prepositional verb: "The children were looked" is wrong; the correct sentence is "The children were looked after".',
        'Using a simple infinitive after a reporting passive for a past event: "The cashier is said to abscond" is wrong; it must be "is said to have absconded".',
        'Keeping question order in reported speech, as in "He asked me where did I live", and retaining the question mark; the correct form is "He asked me where I lived".',
      ],
      wassceExamTips: [
        'In Paper 2 transformation items, rewrite the whole sentence on the answer line; examiners award marks for the corrected structure, and a partly written answer that leaves the old word order loses the method mark.',
        'Check the tense of the reporting verb before backshifting in indirect speech; present reporting verbs such as "says" and "has said" keep the original tense of the quoted clause.',
        'In Paper 3 objectives on voice, eliminate options that change the aspect: a past simple active must yield a past simple passive, so "was written" never answers "has been written".',
        'For comprehension summary tasks on Paper 1, use the agentless passive when the passage does not name a doer, and never insert an invented agent such as "by the government" to fill the pattern.',
        'Spend about ninety seconds per transformation item and, before moving on, read only the new subject and the verb together to confirm number agreement, which is where most easy marks are lost.',
      ],
    },
    examples: [
      {
        id: 'ex-shs3-eng-vs-1',
        title: 'Passive transformation across tenses and structures',
        problem: 'Change the following sentences into the passive voice, retaining the tense or aspect of each. (a) The secretary types the correspondence. (b) The masons are plastering the block. (c) The board has approved the report. (d) They had buried the body before dawn. (e) We shall complete the project next term. (f) People speak well of the headmaster. (g) The delegation arrived at Tamale before noon. (h) They made the boys sweep the courtyard.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the object of each active sentence; whatever occupies that position becomes the new subject, and a sentence with no object cannot be transformed at all.',
          'Step 2 (A1): (a) "The correspondence is typed by the secretary" (simple present passive, IS plus TYPED). (b) "The block is being plastered by the masons" (present continuous passive, with BEING retained).',
          'Step 3 (A1): (c) "The report has been approved by the board" (present perfect passive, with BEEN retained). (d) "The body had been buried before dawn" (past perfect passive; the agent BY THEM is dropped because it is general).',
          'Step 4 (A1): (e) "The project will be completed next term" (future passive; the agent BY US is dropped). (f) "The headmaster is spoken well of" (personal passive with the preposition OF stranded; the agent BY PEOPLE is dropped).',
          'Step 5 (M1): (g) has no passive: ARRIVED is intransitive and "at Tamale before noon" is an adverbial, not an object, so the correct answer is that the sentence cannot be changed.',
          'Step 6 (A1): (h) "The boys were made to sweep the courtyard" (MAKE drops TO in the active and recovers it in the passive). Full answer set: (a) is typed, (b) is being plastered, (c) has been approved, (d) had been buried, (e) will be completed, (f) is spoken well of, (g) no passive possible, (h) were made to sweep.',
        ],
        keyTakeaway: 'Promote the true object, keep the aspect on BE, and state plainly that intransitive verbs have no passive.',
      },
      {
        id: 'ex-shs3-eng-vs-2',
        title: 'Combining indirect speech with impersonal and personal reporting',
        problem: 'Rewrite the following in indirect speech, and where a passive reporting form is possible use it. (a) The lecturer said to us, "The council will publish the statistics next week." (b) Someone asked Yaw, "Have you finished the summary?" (c) The mother said, "Alas! My son is sick." (d) People say that the trader has left the country. (e) The boys said, "We were given the tools yesterday."',
        stepByStepSolution: [
          'Step 1 (M1): Work in a fixed order for every item: repair the reporting frame, shift pronouns and time words, backshift the tense, then apply a passive if the item asks for one.',
          'Step 2 (A1): (a) "The lecturer told us that the council would publish the statistics the following week", and with the clause passivised, "The lecturer told us that the statistics would be published by the council the following week". Note that SAID TO US becomes TOLD US, and the time word shifts.',
          'Step 3 (A1): (b) "Someone asked Yaw whether he had finished the summary", with statement word order, no auxiliary DO and no question mark; the yes-no question takes WHETHER or IF.',
          'Step 4 (A1): (c) "The mother exclaimed sorrowfully that her son was sick", or "The mother lamented that her son was sick"; the exclamation ALAS is converted into a reporting verb that carries the feeling.',
          'Step 5 (A1): (d) "It is said that the trader has left the country", and in the personal frame, "The trader is said to have left the country". The perfect infinitive is required because the leaving precedes the saying.',
          'Step 6 (A1): (e) "The boys said that they had been given the tools the previous day", combining the backshift of a past passive with the shift of YESTERDAY to THE PREVIOUS DAY; the reporting verb stays active because the boys are the known speakers. Full answer set: (a) The lecturer told us that the statistics would be published by the council the following week; (b) Someone asked Yaw whether he had finished the summary; (c) The mother exclaimed sorrowfully that her son was sick; (d) The trader is said to have left the country; (e) The boys said that they had been given the tools the previous day.',
        ],
        keyTakeaway: 'Settle the reporting frame first, then the tense, then the voice; a passive reporting form needs a perfect infinitive whenever the event is earlier.',
      },
    ],
    quiz: {
      id: 'quiz-shs3-eng-t2-voice-speech-transformation',
      topicId: 'shs3-eng-t2-voice-speech-transformation',
      title: 'Voice and Reported Speech Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-vs-1',
          quizId: 'quiz-shs3-eng-t2-voice-speech-transformation',
          questionText: 'Choose the option that best completes the sentence: The results of the mock examination ___ by the chief examiner two weeks ago.',
          optionA: 'had been released',
          optionB: 'were released',
          optionC: 'have been released',
          optionD: 'are released',
          correctOption: 'B',
          subConcept: 'Past simple passive',
          explanation: 'The definite finished time marker "two weeks ago" requires the past simple, so "were released" is correct. Option A, the past perfect, would need an earlier past event to relate to, and option C, the present perfect, cannot stand with a stated past time.',
          remediationTip: 'Let the time expression choose the tense: ago and last year take the past simple, and only unfinished periods such as this week take the present perfect.',
        },
        {
          id: 'q-shs3-vs-2',
          quizId: 'quiz-shs3-eng-t2-voice-speech-transformation',
          questionText: 'Which of the following sentences CANNOT be changed into the passive voice?',
          optionA: 'The committee approved the budget.',
          optionB: 'The boys damaged the classroom door.',
          optionC: 'The delegates arrived at Kumasi in the evening.',
          optionD: 'The nurse cleaned the wound.',
          correctOption: 'C',
          subConcept: 'Intransitive verbs in passive',
          explanation: 'The verb ARRIVE is intransitive; "at Kumasi in the evening" is an adverbial, not an object, so there is nothing to promote into subject position. Options A, B and D each contain a direct object that can become the passive subject.',
          remediationTip: 'Before passivising, locate the direct object; if the verb cannot answer "what" or "whom" after the action, the sentence has no passive.',
        },
        {
          id: 'q-shs3-vs-3',
          quizId: 'quiz-shs3-eng-t2-voice-speech-transformation',
          questionText: 'Choose the option that best completes the sentence: The pupils were ___ a new chemistry textbook by the headmaster.',
          optionA: 'given',
          optionB: 'gave',
          optionC: 'giving',
          optionD: 'to give',
          correctOption: 'A',
          subConcept: 'Personal passive of two-object verb',
          explanation: 'The pattern WAS or WERE plus a past participle forms the passive, and GIVE can take the indirect object as subject here: the pupils were GIVEN a textbook. Option B is a finite past form and cannot follow "were"; options C and D create active or infinitive patterns.',
          remediationTip: 'Read the passive frame as BE plus past participle and say the participle aloud; if it sounds like a bare verb, it is the wrong form.',
        },
        {
          id: 'q-shs3-vs-4',
          quizId: 'quiz-shs3-eng-t2-voice-speech-transformation',
          questionText: 'The statement "People say that the cashier absconded with the money" is correctly transformed into a passive reporting form as:',
          optionA: 'The cashier is said to abscond with the money.',
          optionB: 'The cashier was said absconding with the money.',
          optionC: 'The cashier is said to have absconded with the money.',
          optionD: 'It is said absconding with the money by the cashier.',
          correctOption: 'C',
          subConcept: 'Impersonal passive with perfect infinitive',
          explanation: 'Because the absconding precedes the saying, the reported clause takes a perfect infinitive: IS SAID TO HAVE ABSCONDED. Option A uses a simple infinitive, which would report a present or habitual fact, and options B and D break the required frame.',
          remediationTip: 'Ask whether the reported event is earlier than the reporting; if yes, always use TO HAVE plus the past participle.',
        },
        {
          id: 'q-shs3-vs-5',
          quizId: 'quiz-shs3-eng-t2-voice-speech-transformation',
          questionText: 'Choose the correct indirect form of the question: Ama asked me, "Where did you buy this wrapper?"',
          optionA: 'Ama asked me where did I buy this wrapper.',
          optionB: 'Ama asked me where I had bought that wrapper.',
          optionC: 'Ama asked me that where I bought this wrapper.',
          optionD: 'Ama asked where did she buy that wrapper.',
          correctOption: 'B',
          subConcept: 'Reported wh-question',
          explanation: 'A reported question takes statement word order, backshifts the past simple to the past perfect and shifts THIS to THAT: where I had bought that wrapper. Option A keeps the interrogative order and the auxiliary DID, which is the classic error; option C inserts THAT before the wh-word, and option D changes the person wrongly.',
          remediationTip: 'After ASKED, write the wh-word and then the subject before the verb, and remove did, do or does entirely.',
        },
      ],
    },
  },
  {
    id: 'shs3-eng-t2-formal-writing-report',
    subjectId: 'english',
    level: 'SHS 3',
    term: 2,
    orderIndex: 8,
    title: 'Formal Letters, Reports and Job Applications',
    description: 'WASSCE-standard format for the formal report, the formal letter, the job application with CV and the short note, with tone control, impersonal construction and the format penalties examiners apply.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=Z06idoc0m3c',
    youtubeId: 'Z06idoc0m3c',
    keyNotes: `• A WASSCE report carries its parts in this order: TITLE, PREAMBLE or TERMS OF REFERENCE, PROCEDURE or METHOD, FINDINGS, RECOMMENDATIONS, CONCLUSION, then the signed NAME and DESIGNATION of the writer.
• The title states the subject and the body: "REPORT ON THE DISTRICT INTER-SCHOOL SPELLING BEE HELD AT HO ON 14TH MARCH 2025"; it is written in block capitals or underlined, never in quotation marks.
• The preamble answers four questions in two sentences, who appointed the committee, when, for what purpose and over what period, as in "The Headmaster appointed a three-member committee on 3rd March 2025 to investigate the shortage of classroom furniture in the second block"; the procedure paragraph then lists how the information was obtained, interviews with the bursar, inspection of the store, perusal of the register and two sittings.
• Findings are numbered, factual and impersonal, one paragraph or one sub-item each, and recommendations answer them in the same order as suggestions rather than orders: "The committee recommends that two additional desks be purchased before the end of the term."
• Reports use the past tense for what was observed and the present tense for what still holds, keep the third person and the agentless passive throughout, and close with the signature, the name and the designation, as in "Kwabena Mensah (President, Students\u2019 Representative Council)"; an unsigned report or one without a designation loses format marks.
• A formal letter runs in this order: sender\u2019s address, date, receiver\u2019s address including designation, salutation, SUBJECT or HEADING in capitals, body in three to five single paragraphs, complimentary close, signature, full name and designation or number.
• Salutation and close must pair: "Dear Sir or Madam" takes "Yours faithfully"; "Dear Mr Asare" takes "Yours sincerely"; the unknown-name case never takes sincerely.
• Write "Yours faithfully" with no apostrophe, since "Your\u2019s faithfully" is a spelling error examiners mark in every copy it appears in, and give the date once in British order, "12th June 2025", never the American "June 12, 2025".
• Never open a formal letter with "Respected Sir" or "I most humbly beg to state"; the modern standard opening is "I write to bring to your attention" or "I am writing to enquire whether".
• The final paragraph of a formal letter states the action expected and who will take it: "I shall appreciate a reply before the end of the month."
• A job application letter names the source and date of the advertisement, the exact post applied for, the qualifications held, the experience relevant to the duties and the qualities matched to the post.
• The application letter closes with enclosures, "Enclosures: Curriculum Vitae; copies of certificates; evidence of National Service", and never states a salary demand or a tribal or religious affiliation.
• A Ghanaian CV or bio-data sheet carries personal data of name, date of birth, nationality, marital status and contact, a one-line career objective, educational qualifications and work experience in reverse chronological order with institution, dates and certificate named, languages and ICT skills, interests, and two or three referees with designation and contact.
• Reverse chronological order means the newest entry stands first, so listing Primary School before Senior High School is a format error rather than a style choice, and the sheet is signed and dated at the end.
• A note is a letter stripped to five lines: date, salutation, purpose in the first sentence, one supporting detail, complimentary close and signature; a note to a teacher or a superior is formal in tone however short it is.
• The tone of formal writing is calm, specific and impersonal, with no idioms, no contractions such as "I\u2019m" or "don\u2019t", no exclamation marks, no rhetorical questions and no emotional adjectives such as "terrible" or "useless", because format is scored apart from content and a well-argued report that lacks a preamble or a signature still loses marks.`,
    detailedNotes: {
      overview: 'Formal writing is the section of WASSCE Paper 2 in which candidates most often lose marks they have already earned in argument, because the examiners award a format component as well as a content component. This topic consolidates the four formal genres the council sets: the report of an event, an inquiry or a meeting; the formal letter of complaint, request or enquiry; the job application letter with its curriculum vitae; and the short note to a superior or an official. Each genre has a fixed skeleton, a fixed order of parts and a fixed tone, and the SHS 3 candidate is expected to reproduce all three without prompting. Register control is treated as part of the format, since a single idiom or contraction inside a report tells the examiner that the candidate does not know who is reading the document.',
      introduction: 'In SHS 2 you learned the shape of a formal letter and the parts of a report. At WASSCE standard the demand is precision: the preamble must state who commissioned the inquiry and over what period, the recommendations must answer the findings in the same order, the salutation must pair with the correct complimentary close, and the whole document must be impersonal. This lesson also treats the errors that cost marks mechanically, such as the apostrophe in Yours faithfully, the American date order, the missing designation under the signature and the emotional tone in a report. The job application is given full weight because it is the genre that most often appears in directed writing tasks and because the curriculum vitae has its own ordering rules.',
      realWorldContext: 'These are the documents that run public life in Ghana. A District Assembly in the Volta Region receives a committee report on the state of the markets before it votes on a levy, and the secretary reads terms of reference, findings and recommendations in that order because a GES circular requires the format for school-based committees. A final-year student who applies for vacation employment at a bank branch in Adenta must produce an application letter naming the post, a curriculum vitae in reverse chronological order and referees with designations, exactly as vacancy notices in the Daily Graphic request. The Students\u2019 Representative Council at Kumasi or Tamale writes to the provost after a hostel outage, and a parent writes a short note to a class teacher at Ho to excuse an absence caused by malaria. Every one of those documents is marked on format before it is marked on eloquence.',
      objectives: [
        'Apply the full WASSCE report skeleton from title through preamble and findings to signed designation.',
        'Distinguish the pairing of salutation and complimentary close in formal letters and correct mismatched endings.',
        'Compose a job application letter that names the source of the vacancy and matches qualifications to duties.',
        'Construct a curriculum vitae or bio-data sheet with entries arranged in reverse chronological order.',
        'Apply impersonal tone and number control to reports and notes while eliminating informal markers.',
      ],
      sections: [
        {
          title: 'The WASSCE Report: Title, Preamble, Findings and Recommendations',
          content: 'A report is a record of what a committee found and what it advises, so its skeleton is fixed and its paragraphs are numbered. Begin with the TITLE, which names the subject and often the body, the place and the date: "REPORT OF THE COMMITTEE APPOINTED TO INVESTIGATE THE SHORTAGE OF CLASSROOM FURNITURE IN THE SECOND BLOCK". Follow with the PREAMBLE or TERMS OF REFERENCE, two sentences that answer four questions: who set the committee up, on what date, for what purpose and covering what period. A model preamble reads: "The Headmaster constituted a three-member Disciplinary Committee on 3rd March 2025 to investigate the wave of vandalism in the science block and to submit its findings within two weeks." Next comes the PROCEDURE or METHOD, which lists how the information was gathered: interviews with the laboratory assistant, an inspection of the damaged benches on 6th March, perusal of the store register and two sittings of the committee. FINDINGS form the longest section and are presented as numbered items, each stating one fact without argument: the committee found that three bench tops had been broken, that the padlock on the store had been forced, and that no key had been issued to the assistant since September. RECOMMENDATIONS mirror the findings in the same order, and are worded as suggestions carrying a time line: "The committee recommends that the broken benches be replaced before the end of the second term." A short CONCLUSION may state the general position or express confidence that the advice will be accepted. The document closes with the DATE if not given at the top, then the SIGNATURE, the full NAME and the DESIGNATION of the writer, for example "Ama Sermah Boateng, President, Students\u2019 Representative Council". Never sign a report with a first name alone and never leave the designation out, because the designation is what gives the writer the standing to report.',
          bulletPoints: [
            'Skeleton: Title, Preamble or Terms of Reference, Procedure, Findings, Recommendations, Conclusion, signature with name and designation.',
            'The preamble answers who, when, why and over what period in two sentences.',
            'Findings are numbered, factual and argued nowhere; each item states one observation.',
            'Recommendations follow the order of the findings and carry a deadline and a subjunctive or passive verb.',
            'The report is signed with a designation; a name with no title costs format marks.',
          ],
          keyTakeaway: 'Write the report as a numbered record with a preamble that names the authority and recommendations that answer the findings in order.',
          realWorldExample: 'After a water outage at a hostel in Tamale, the hall master submits to the matron a report titled "REPORT ON THE WATER SUPPLY DISRUPTION IN BLOCK C"; the preamble states that the hall committee met on 9th October 2025 at the request of the matron, the findings record that the borehole pump had failed twice and that stored water had run out by Wednesday, and the recommendations advise that a spare pump be procured before the rains.',
        },
        {
          title: 'The Formal Letter at WASSCE Standard',
          content: 'The formal letter keeps a blocked layout and a plain style. At the top of the page goes the sender\u2019s address with the postal designation and the region; the date follows on the next line in British order, "12th June 2025". Then the receiver\u2019s address, which must include the designation, because letters are addressed to offices rather than to persons: "The District Director of Education, Ghana Education Service, Kpong". The salutation is "Dear Sir or Madam" when the name is unknown and "Dear Mr Asare" or "Dear Madam" when it is known. The SUBJECT line in block capitals or underlined states the matter in five to eight words: "COMPLAINT ABOUT THE STATE OF THE MARKET ACCESS ROAD AT KPONG". The body runs in three to five single paragraphs, each with one function: the first declares the purpose and the capacity in which the writer speaks, the middle two give the specific facts with dates and places, and the last states the action expected and the time within which it is expected. The complimentary close must pair with the salutation: "Dear Sir or Madam" takes "Yours faithfully", while a named salutation takes "Yours sincerely". The close is followed by a signature, the full name and the designation or member number where the task supplies one. Three conventions cost marks when ignored. First, "Yours faithfully" carries no apostrophe, and examiners mark the form "Your\u2019s" as a spelling error wherever it occurs. Second, contractions are prohibited, so write "I am" and "do not", never "I\u2019m" or "don\u2019t". Third, the archaic and obsequious openings that circulate in some Ghanaian exercise books, such as "Respected Sir" or "I most humbly beg to state that", are not standard English; use "I write to bring to your attention" or "I am writing to enquire whether". The tone stays courteous and specific, and the letter closes without a threat or an exclamation.',
          bulletPoints: [
            'Layout order: sender\u2019s address, date, receiver\u2019s address with designation, salutation, SUBJECT line, body, close, signature, name, designation.',
            'Pair the close with the salutation: Dear Sir or Madam with Yours faithfully; Dear Mr Asare with Yours sincerely.',
            'Date in British order: 12th June 2025, written once under the sender\u2019s address.',
            'No contractions, no exclamation marks, no idioms and no rhetorical questions in the body.',
            'Replace archaic openings with "I write to" or "I am writing to enquire whether".',
          ],
          keyTakeaway: 'Keep the blocked layout, pair salutation and close correctly, and state the expected action with a date.',
          realWorldExample: 'A final-year student at a senior high school in Ho writes to the manager of a rural bank about an account that was debited twice: the subject reads "DOUBLE DEBIT ON ACCOUNT NUMBER 0193 2245 6671", the second paragraph gives the date and amount of each transaction, and the closing paragraph asks for a credit note within fourteen days.',
        },
        {
          title: 'The Job Application Letter and the Curriculum Vitae',
          content: 'An application letter is a formal letter with one extra duty: it must sell suitability without exaggeration. The address goes to the person who appoints, usually "The Human Resources Manager" for a private firm, "The District Director of Education" for the Ghana Education Service, or "The Administrator" for a hospital. The SUBJECT line names the post exactly as advertised, "APPLICATION FOR THE POST OF A TELLER", and the opening paragraph states the source and date of the advertisement, "I wish to apply for the post of Teller advertised in the Daily Graphic of 20th June 2025", or the reason for an unsolicited approach. The next paragraph presents academic qualifications in descending order, the WASSCE certificate with the relevant electives, then the National Service placement or diploma, and any professional certificate such as an ICT or a Ghana Education Service elective training certificate. The third paragraph supplies experience and personal qualities tied to the duties: cash handling during service at a branch in Kumasi, accuracy, and a clean record. The closing paragraph states availability for interview, gives a contact address and lists the enclosures, "Enclosures: Curriculum Vitae; four passport photographs; certified copies of certificates". Never mention salary, tribal origin or religion, and never beg; the letter claims nothing the CV cannot support. The curriculum vitae or bio-data sheet is a factual document in labelled sections. Personal data lists surname and other names, date of birth, nationality, region of origin, marital status and contact telephone and postal address. The career objective is one sentence naming the post sought. Educational qualifications and work experience are set out in reverse chronological order, giving the institution, the dates and the certificate: National Service post first, then Senior High School, then Junior High School, never the other way round. Then follow professional skills and ICT competence, languages spoken, a short list of interests, and two or three referees with full name, designation, institution and contact, one of whom should be a former headmaster or a National Service supervisor. The sheet closes with the date and the applicant\u2019s signature, and it is written in the same blocked style as the letter.',
          bulletPoints: [
            'Opening paragraph names the post exactly as advertised, plus the source and the date of the advertisement.',
            'Qualifications in descending order: WASSCE certificate with electives, then service or diploma, then professional certificates.',
            'Duties of the post must be answered by evidence, not by adjectives; show accuracy with an instance.',
            'CV entries run in reverse chronological order, newest first, with institution, dates and certificate named.',
            'Referees are two or three living persons with designation and contact, and enclosures are listed last.',
          ],
          keyTakeaway: 'Let the advertisement name the post, let the CV prove the claim, and keep both documents in reverse chronological order.',
          realWorldExample: 'A graduate applying to a bank branch in Adenta lists as her newest entry "National Service Personnel, Cash Office, 2024 to 2025", then "BSc Administration, University of Ghana, Legon, 2020 to 2024", then "Achimota School, 2016 to 2019", and names as referees her service supervisor and her former hall master at Kumasi.',
        },
        {
          title: 'Notes, Impersonal Construction and the Marks Examiners Deduct',
          content: 'A note is a compressed letter used when the writer and the reader know one another but the occasion is still official: a leave note to a lecturer, a note excusing an absence, a message to a class teacher or a note handing over duty. It keeps the date, a short salutation, the purpose in the first sentence, one or two supporting details and a close with the name and designation. The whole text rarely exceeds one hundred words, so the writer must delete every decoration: "14th October 2025. Dear Mr Ofori, I am unable to attend the third period today because I have been asked to accompany my mother to the Ho Teaching Hospital. I shall submit the laboratory report on Monday. Yours sincerely, Adjoa Amankwah, Class 3B." Notice that even in a note of five lines the tone stays formal, since the reader is a teacher. Tone control in reports depends on the impersonal construction you mastered in the voice topic. Findings are written in the past tense with the agentless passive or with the committee as subject: "the benches were found broken", "the committee observed that the register had not been updated since September". Opinions appear only in recommendations and are hedged: "the committee is of the opinion that", "it is recommended that". The list of format penalties is short and mechanical. Missing date, missing subject line, missing designation under the signature, a salutation that does not pair with the close, an American date, contractions, an apostrophe in Yours faithfully, a first-person emotional paragraph, an idiom in a report, a report with no recommendations, a CV in ascending order, and a note that runs to two pages and reads like a letter. Each of these is worth one mark in the format component, and most candidates lose three or four of them without a single error in grammar.',
          bulletPoints: [
            'Note skeleton: date, salutation, purpose in the first sentence, one detail, close, name and designation.',
            'Keep a note under one hundred words even when the recipient is a friend\u2019s parent.',
            'Use the agentless passive or the committee as subject for findings; keep opinions in recommendations only.',
            'Hedge advice with "it is recommended that" rather than ordering with "must".',
            'Checklist before handing in: date, subject line, designation, paired close, no contractions, no idioms.',
          ],
          keyTakeaway: 'A note is short but still formal, and the deductions that hurt most are the mechanical ones you can check in one minute.',
          realWorldExample: 'A pupil at a school in Kumasi writes to the class teacher to excuse two days of absence, giving the date, the reason in the first line and a promise to submit the missing assignment; the same pupil later files a report to the headmaster on the sanitation exercise, and neither document contains a single contraction or exclamation mark.',
        },
      ],
      summaryChecklist: [
        'Can I write the labelled parts of a WASSCE report in the correct order and sign it with a designation?',
        'Can I lay out a formal letter with a blocked address, a subject line and a correctly paired complimentary close?',
        'Can I draft a job application letter that names the source of the vacancy and matches evidence to duties?',
        'Can I arrange the entries of a curriculum vitae in reverse chronological order with referees stated?',
        'Can I compress a message into a formal note of fewer than one hundred words without losing the date or the close?',
      ],
      commonMistakes: [
        'Pairing "Dear Sir or Madam" with "Yours sincerely": the unknown-name salutation requires "Yours faithfully", while "Yours sincerely" belongs to a letter addressed to a named person such as "Dear Mr Asare".',
        'Writing "Your\u2019s faithfully": the possessive form takes no apostrophe, and the error is marked as a spelling mistake wherever it appears.',
        'Signing a report with the name only: the writer must add the designation, for example "President, Students\u2019 Representative Council", or the report loses its authority and the format mark.',
        'Listing educational qualifications from the oldest to the newest in a CV: employers expect reverse chronological order, so the National Service post or the diploma stands before Senior High School.',
        'Using idioms, contractions or emotional adjectives in a report, for example "the toilets were a total disaster"; the correct form is the impersonal finding, "the committee observed that the toilets had not been cleaned for three days".',
      ],
      wassceExamTips: [
        'On Paper 2 the formal writing component carries a format or presentation mark as well as content and expression, so write every labelled part of a report and never omit the date, the subject line or the designation.',
        'In the report task, spend two minutes planning the findings before the recommendations, because a recommendation that answers no finding reads as invention and loses content marks.',
        'Keep a formal document impersonal by using the agentless passive; the same judgement is tested in Paper 3 objectives on formal and informal expression, where the item asks which sentence is appropriate in an official document and answer marks go to the candidate who rules out the emotional or idiomatic option.',
        'In Paper 1, directed writing or note-completion tasks are marked on accuracy of detail, so copy names, dates and figures exactly as the passage gives them and add nothing.',
        'Reserve about forty minutes for a formal writing task on Paper 2: eight minutes planning, twenty-eight minutes writing and four minutes checking only the format checklist and the paired close.',
      ],
    },
    examples: [
      {
        id: 'ex-shs3-eng-fw-1',
        title: 'Drafting a complete WASSCE committee report',
        problem: 'You are the president of the Students\u2019 Representative Council. As directed by the Headmaster, your committee investigated the repeated shortage of classroom furniture in the second block and reported the findings and recommendations to him on 20th May 2025. Write the report.',
        stepByStepSolution: [
          'Step 1 (M1): Build the skeleton before writing a sentence, and label the parts in order: Title, Preamble or Terms of Reference, Procedure, Findings, Recommendations, Conclusion, then signature with name and designation. Plan one finding for each recommendation so that the two sections answer each other.',
          'Step 2 (A1): Title and preamble: "REPORT OF THE COMMITTEE APPOINTED TO INVESTIGATE THE SHORTAGE OF CLASSROOM FURNITURE IN THE SECOND BLOCK". The preamble then states who, when, why and for what period: "The Headmaster appointed a three-member committee on 5th May 2025 to investigate the shortage of furniture in the second block and to submit its findings within two weeks."',
          'Step 3 (A1): Procedure: "The committee held two sittings, interviewed the bursar and the store keeper, inspected the benches in all six classrooms on 7th and 9th May, and perused the furniture register covering the period 2021 to 2025."',
          'Step 4 (A1): Findings, numbered and impersonal: one, that forty of the ninety benches in the block were cracked and unusable; two, that the register had not been updated since September 2023; three, that damaged benches had been carried into an unlocked store open to all pupils; four, that three benches had been removed to the staff common room without a requisition note.',
          'Step 5 (A1): Recommendations in the same order, each hedged and dated: that the unusable benches be condemned and replaced before the end of the third term; that the furniture register be updated and audited annually; that the store be locked and placed in the custody of the store keeper; that all removals of furniture be authorised by a requisition note signed by the bursar.',
          'Step 6 (A1): Conclusion and signature: "The committee is confident that the above measures will end the shortage within the academic year." Then the date, the signature line, the full name and the designation: "20th May 2025. (Signed) Ama Sermah Boateng, President, Students\u2019 Representative Council."',
        ],
        keyTakeaway: 'A report earns its marks by shape: four questions answered in the preamble, numbered impersonal findings, matching recommendations and a signature carrying a designation.',
      },
      {
        id: 'ex-shs3-eng-fw-2',
        title: 'Correcting the format of an application letter and CV',
        problem: 'An applicant wrote the following for a vacancy as a bank officer: "Respected Sir, I most humbly beg to state that I am in want of a job. I finished school in Tamale in 2019 before I went to Legon in 2020 to do my degree. My father knows the branch manager so please give me the job. I expect a salary of GH\u00A24,000. Do you not think I deserve it? Yours sincerely, Yaw." His CV listed Primary School first, then Junior High School, then Senior High School, then the university, and ended with the word "References" with no names. Identify and correct the format and register errors in both documents.',
        stepByStepSolution: [
          'Step 1 (M1): Separate the faults into three classes before correcting anything: layout and format omissions, register and tone breaches, and ordering errors. Marks are deducted class by class, so an unclassified list wastes time.',
          'Step 2 (A1): Layout: the letter lacks the sender\u2019s address, the date, the address of the Human Resources Manager, a subject line and the sender\u2019s full name with a designation or number. Supply them, with the subject "APPLICATION FOR THE POST OF A BANK OFFICER" and the date in British order.',
          'Step 3 (A1): Register: remove the archaic opening "Respected Sir, I most humbly beg to state", the appeal to a personal connection, the rhetorical question about desert and the contraction in the closing sentence. Replace with the standard opening: "I wish to apply for the post of Bank Officer advertised in the Daily Graphic of 10th June 2025."',
          'Step 4 (A1): Content that must be struck out: the stated salary demand, since a first application does not name a figure, and the claim of a family connection with the branch manager, which reads as an attempt to influence the appointment. Content that must be added: qualifications with dates and certificates, relevant experience, personal qualities supported by evidence, availability for interview and a list of enclosures.',
          'Step 5 (A1): Ordering: the CV must be rewritten in reverse chronological order, university first with institution, dates and degree, then Senior High School, then Junior High School, with Primary School omitted or reduced to one line; the closing section must be headed "Referees" and give two or three named persons with designation, institution and telephone contact.',
          'Step 6 (A1): Final shape of the corrected documents: a blocked letter with address, date, subject, three body paragraphs and a close that pairs with the salutation, followed by an enclosure list; and a six-part CV in which the newest entry always stands above the older one.',
        ],
        keyTakeaway: 'Formal applications fail on layout, tone and order rather than on grammar, so classify every fault before rewriting.',
      },
    ],
    quiz: {
      id: 'quiz-shs3-eng-t2-formal-writing-report',
      topicId: 'shs3-eng-t2-formal-writing-report',
      title: 'Formal Writing and Reports Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-fr-1',
          quizId: 'quiz-shs3-eng-t2-formal-writing-report',
          questionText: 'Choose the option that best completes the sentence: A formal letter that opens with the salutation "Dear Sir or Madam" should close with ___.',
          optionA: 'Yours sincerely',
          optionB: 'Yours faithfully',
          optionC: 'Your\u2019s sincerely',
          optionD: 'Respected yours dear Sir',
          correctOption: 'B',
          subConcept: 'Formal letter close pairing',
          explanation: 'British convention pairs an unknown-name salutation with "Yours faithfully"; "Yours sincerely" is reserved for a salutation that names the person, as in "Dear Mr Asare". Option C also carries the apostrophe error that examiners mark as a spelling mistake.',
          remediationTip: 'Memorise the pair: a name in the salutation takes sincerely, no name takes faithfully.',
        },
        {
          id: 'q-shs3-fr-2',
          quizId: 'quiz-shs3-eng-t2-formal-writing-report',
          questionText: 'In a WASSCE report, the section that states who appointed the committee, when it was appointed and for what purpose is the ___.',
          optionA: 'findings',
          optionB: 'conclusion',
          optionC: 'preamble or terms of reference',
          optionD: 'recommendations',
          correctOption: 'C',
          subConcept: 'Report sections',
          explanation: 'The preamble, also called the terms of reference, establishes the authority, the date of appointment, the purpose and the period covered. The findings record what was discovered, the recommendations advise action, and the conclusion rounds off the report, so none of them can carry that opening information.',
          remediationTip: 'Read the preamble aloud and test it for four answers: who, when, why and how long.',
        },
        {
          id: 'q-shs3-fr-3',
          quizId: 'quiz-shs3-eng-t2-formal-writing-report',
          questionText: 'Choose the sentence that is most appropriate in the findings section of a formal report.',
          optionA: 'I was really angry when I saw the dirty washrooms and I think the cleaners are lazy.',
          optionB: 'It is high time somebody did something about the toilets, is it not?',
          optionC: 'The washroom was a total disaster and nobody can stand it.',
          optionD: 'The committee observed that the washrooms had not been cleaned for three days.',
          correctOption: 'D',
          subConcept: 'Impersonal tone in reports',
          explanation: 'Findings must be factual, impersonal and in the past tense with a stated period, which option D supplies. The others carry first-person emotion, a rhetorical question or a generalised complaint, all of which breach formal register.',
          remediationTip: 'Write findings with the committee as subject or with the agentless passive, and delete every feeling word.',
        },
        {
          id: 'q-shs3-fr-4',
          quizId: 'quiz-shs3-eng-t2-formal-writing-report',
          questionText: 'Choose the option that correctly completes the statement: In a Ghanaian curriculum vitae, educational qualifications and work experience are normally arranged ___.',
          optionA: 'in reverse chronological order, with the newest entry first',
          optionB: 'in chronological order, beginning with the Primary School',
          optionC: 'in alphabetical order of the institutions attended',
          optionD: 'in order of the length of each programme',
          correctOption: 'A',
          subConcept: 'CV ordering convention',
          explanation: 'Employers read the most recent qualification or post first, so the university or the National Service entry stands above the Senior High School entry and the Junior High School entry below it. Options B, C and D each hide the newest achievement, which is the purpose of the section.',
          remediationTip: 'Write CV entries from the newest date backwards, and check that no older institution appears above a newer one.',
        },
        {
          id: 'q-shs3-fr-5',
          quizId: 'quiz-shs3-eng-t2-formal-writing-report',
          questionText: 'The opening paragraph of a job application letter written in reply to an advertisement should state ___.',
          optionA: 'the salary the applicant expects to be paid',
          optionB: 'the names of relatives working in the organisation',
          optionC: 'the post applied for, the source and the date of the advertisement',
          optionD: 'the reasons why the applicant needs the job urgently',
          correctOption: 'C',
          subConcept: 'Application letter opening',
          explanation: 'The employer must know at once which vacancy is being answered, so the first paragraph names the post exactly as advertised and cites the newspaper or website and its date. A salary demand, a claim of connection and a plea of personal need all breach the tone of a first application.',
          remediationTip: 'Draft a memorised opening: "I wish to apply for the post of ___ advertised in ___ on ___."',
        },
      ],
    },
  },
  {
    id: 'shs3-eng-t2-argumentative-discursive',
    subjectId: 'english',
    level: 'SHS 3',
    term: 2,
    orderIndex: 9,
    title: 'Argumentative, Discursive and Debate Writing for WASSCE',
    description: 'The two essay contracts, the WAEC award categories, a forty-five minute plan for a 450 to 500 word essay, cohesive argumentation with rebuttal, debate conventions, fallacies and disciplined conclusions.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=7UhSBHO3-Xo',
    youtubeId: '7UhSBHO3-Xo',
    keyNotes: `• The argumentative essay defends ONE side: the thesis is declared in the introduction, every paragraph supports it, and the opposing view appears only to be answered.
• The discursive essay examines BOTH sides: it weighs the case for and the case against in turn, then delivers a verdict in the final paragraph, and the verdict must follow the weight of the discussion rather than contradict it.
• Task words decide the genre: "convince", "why is this necessary", "give your reasons" point to argumentative writing; "discuss", "to what extent", "bring out both sides" point to discursive writing.
• WAEC awards an essay in three categories: CONTENT, the relevance and fullness of the argument; ORGANISATION, the structure, paragraphing and cohesion; EXPRESSION, the accuracy, vocabulary and register. Faultless grammar cannot rescue an off-task essay.
• A forty-five minute plan: five minutes reading the task twice and underlining its topic, task and limit words; five minutes fixing a side and listing three arguments with one instance each.
• The plan continues: two minutes drafting the thesis sentence and the order of the arguments, twenty-eight minutes writing at about sixteen words a minute to reach four hundred and fifty to five hundred words, five minutes revising.
• The engine of the essay is five paragraphs: introduction carrying the thesis, two or three supporting paragraphs, one paragraph of concession and rebuttal, and a conclusion restating the position.
• Paragraph architecture is topic sentence, explanation, instance or evidence, link back to the thesis; a paragraph with no instance is bare assertion, and examiners discount assertion.
• Cohesive signposts: "first and foremost", "secondly", "more importantly", "finally" for sequence; "moreover", "in addition", "furthermore" for addition; "however", "nevertheless", "on the other hand" for contrast; "consequently", "as a result", "this means that" for consequence.
• Tie paragraphs with referencing: "this practice", "such a decision", "these measures" gather up the previous paragraph and pull the reader forward without repeating the whole idea.
• Rebuttal moves in four steps: state the opponent\u2019s view fairly, concede whatever is true in it, refute it with reason and an instance, then return to your own line of argument.
• The ad hominem fallacy attacks the person instead of the argument, as in "my opponent comes from a broken home, so his view on discipline is worthless"; answer the argument, never the family or the school.
• Sweeping generalisation states a rule with no exception or invents a figure: "all boys are undisciplined", "ninety percent of Ghanaians agree"; the fix is a hedged, provable claim such as "many pupils in large classes".
• Other fallacies to avoid: false cause, "since the new uniform came results have fallen, so the uniform caused it"; straw man, attacking a distorted version of the opposing case; slippery slope; the false dilemma "either ban phones or lose standards"; and circular reasoning.
• The conclusion introduces no new point, no new example, no apology and no rhetorical question; it restates the thesis in fresh words, sums the reasons in one clause and closes with a judgement or a call to action.
• Debate speech adds a further contract: open by addressing the chair, the judges, the timekeepers, the co-debaters and the audience, define the motion, identify the clash, use the rule of three, and let the winding-up speech sum up without bringing a fresh argument.`,
    detailedNotes: {
      overview: 'Argumentative and discursive writing are the two highest-demand essay modes on WASSCE English Language Paper 2, and the debate speech is their spoken twin, set both as an essay task and as the co-curricular activity that fills school speaking days. This topic separates the two contracts precisely, because the single commonest reason a strong candidate is capped in the content category is that an argumentative task was answered as a discussion. It then fixes the three award categories on which WAEC places an essay, a forty-five minute procedure for a four hundred and fifty to five hundred word response, the paragraph architecture that makes an argument cohere, the fallacies that cheapen it, and the debate conventions of address, clash and summary.',
      introduction: 'You have written both modes since SHS 1; in SHS 3 the work is control. Control means choosing a mode from the task words in eight seconds, holding one position from the first sentence to the last, and letting the opposing view appear only where you can answer it. It also means knowing what the examiner is paid to look for: relevance, organisation and expression, in that order. The final section turns to debate, where the same argument must survive an audience, a clock and an opponent who speaks before you sit down.',
      realWorldContext: 'The arguments candidates write about are the ones they hear in assembly and on the station. A Ghana Education Service circular on the removal of canes from schools produced sermons in chapel, statements in assembly and a full house meeting at a school in Kumasi, and a WASSCE task on that subject is a discursive one, because the council knows the country is divided. A Parent Teachers Association meeting at Ho that debates whether mobile phones should be permitted on campus is a debate in form, with a chair, timekeepers and a floor that must be addressed. When a radio host in Tamale says that results fell because the fees were waived, that is a false cause of the kind Paper 2 rewards candidates for exposing. The pupil who writes the letter to the Daily Graphic on either subject is doing the same work as the essay, only with a signature.',
      objectives: [
        'Apply the argumentative and discursive contracts to WASSCE essay tasks chosen from their task words.',
        'Distinguish the three WAEC award categories and write to satisfy content before elegance.',
        'Execute a forty-five minute plan that yields a four hundred and fifty to five hundred word essay.',
        'Construct cohesive paragraphs with topic sentence, explanation, instance and link, including rebuttal.',
        'Avoid the named fallacies and deliver conclusions and debate wind-ups that introduce no new material.',
      ],
      sections: [
        {
          title: 'Two Contracts: Argumentative and Discursive',
          content: 'Read the task words before you read your memory of the topic, because the instruction verb decides the contract. An argumentative task says "write an essay to convince", "why is this necessary", "give reasons for your position" or "do you agree that"; here you take one side, declare it in the introduction in a single thesis sentence, and spend the whole essay proving it. The opposing view is not ignored, since a candid writer states it and then demolishes it in one paragraph, and that concession strengthens rather than weakens the case. A discursive task says "discuss", "to what extent", "bring out the merits and the demerits", "there is a saying that"; here the examiner expects balance, so you examine the case for the proposal and the case against it in separate paragraphs, weigh them honestly, and only then declare your own verdict. Two failures follow from confusing the contracts. First, a candidate who answers an argumentative task with a balanced discussion never commits a position and is placed low in the content category, however accurate the sentences are. Second, a candidate who answers a discursive task with one-sided propaganda has ignored the instruction and loses the same marks for a different reason. The verdict of a discursive essay may still be firm; what matters is that it be earned by the discussion that precedes it, so the paragraph that carries the heaviest evidence should be the one the verdict agrees with. Register, finally, is the same in both: standard English, no idioms in the formal varieties, no address to the reader, no exclamation, and a clear first-person position only where the task asks for your opinion.',
          bulletPoints: [
            'Argumentative: one side, thesis declared at once, opposing view answered in a rebuttal paragraph.',
            'Discursive: both sides weighed in turn, personal verdict reserved for the closing part.',
            'Task words to trust: convince, why it is necessary, give reasons against discuss, to what extent, merits and demerits.',
            'A discursive verdict must agree with the evidence already laid out, not arrive from nowhere.',
            'Both modes use standard English, measured claim words and no direct appeal to the reader.',
          ],
          keyTakeaway: 'Let the instruction verb fix the contract: prove one side or weigh both, then commit only when the weighing is done.',
          realWorldExample: 'On the same subject, the task "Convince your school meeting that the ban on overnight study is unwise" demands a one-sided attack, while "Discuss whether the ban on overnight study has improved results" demands an honest paragraph for the ban, a paragraph against it, and only then a personal judgement.',
        },
        {
          title: 'The WAEC Award Categories and the Forty-Five Minute Plan',
          content: 'An examiner places an essay by three headings, and knowing them changes how you should spend your time. CONTENT asks whether the essay answers the task actually set and whether the ideas are full enough, relevant and developed; an essay that is short on development, or that drifts into narration, is capped here first. ORGANISATION asks whether the writing has a beginning, middle and end, whether each paragraph carries one main idea, and whether the ideas are linked so that the reader never has to work out the connection. EXPRESSION asks whether the sentences are accurate in grammar, concord, tense and punctuation, whether the vocabulary is varied and exact, and whether the register suits the task. The order matters: a beautifully phrased essay that answers a different question cannot score high in content, and content marks are the largest block on most rubrics. Now the plan, timed for forty-five minutes. Minutes one to five: read the task twice, underline the topic words that fix the subject, the task words that fix the mode and any limit words such as a stated audience or role, then write one sentence saying what the essay must do. Minutes six to ten: fix your side, list three arguments, and attach one concrete instance to each, since an argument with no instance is the reason essays are called thin. Minutes eleven to twelve: draft the thesis sentence and decide the order, saving the strongest argument for last unless the task asks for a build-up. Minutes thirteen to forty: write, aiming at about sixteen words a minute, which yields four hundred and fifty to five hundred words with room to breathe. Minutes forty-one to forty-five: revise with three specific checks, every paragraph for one main idea, every verb for tense and concord, and the conclusion for any new point that must be struck out.',
          bulletPoints: [
            'Content: answer the task set and develop it; Organisation: structure, one-idea paragraphs, cohesion; Expression: accuracy, vocabulary, register.',
            'Five minutes reading and underlining topic, task and limit words before any drafting.',
            'Five minutes listing three arguments, each with one concrete instance already chosen.',
            'Twenty-eight minutes of writing at roughly sixteen words a minute reaches the four hundred and fifty word target.',
            'Five minutes of revision limited to paragraphing, verb forms and the removal of any new point in the conclusion.',
          ],
          keyTakeaway: 'Write to the three headings in order, and let the clock be divided five, five, two, twenty-eight and five.',
          realWorldExample: 'A candidate at a school in Achimota who is set "Write an essay for your school magazine on why the reading club deserves more support" spends the first five minutes noting that the audience is pupils and that the mode is argumentative, then spends four hundred and eighty words on three claims about literacy, examination results and careers guidance.',
        },
        {
          title: 'Cohesion, Paragraph Architecture and the Rebuttal Paragraph',
          content: 'An argument is a chain, and examiners look for the links. Build every body paragraph on four moves. The topic sentence states the claim in one clause and names the ground of the paragraph. The explanation develops it, answering the question "why is that so". The instance supplies the evidence, and the instance should be concrete: a named school, a survey quoted by the headmaster, an incident in the dormitory, a line from a GES circular, a figure stated honestly as an estimate rather than as fact. The link returns to the thesis and says what the paragraph has proved, in phrases such as "this shows that", "such a measure therefore" or "the point remains that". Join the paragraphs with signposts that match their logical relation: sequence with "first and foremost", "secondly", "more importantly", "finally"; addition with "moreover", "in addition", "furthermore"; contrast with "however", "nevertheless", "on the other hand", "even so"; consequence with "consequently", "as a result", "this means that". Then use referencing to avoid mechanical repetition, because "this practice", "such a decision" and "these measures" gather up the previous paragraph in two words. The rebuttal paragraph deserves its own plan, and it is where argumentative essays are won. State the opposing view fairly and at its strongest, never as a caricature; concede whatever is genuinely true in it, since candour buys credibility; refute it with reason and an instance, showing either that the fact is not true, that it is not important, or that it does not follow from the principle; and then return to your own line with a linking sentence. Do not repeat the rebuttal in the conclusion, and never let the concession be the last word the reader hears.',
          bulletPoints: [
            'Four moves inside every paragraph: claim, explanation, concrete instance, link back to the thesis.',
            'Choose the instance before you write, because a paragraph written in search of an example turns to narration.',
            'Match the linker to the relation: addition, contrast, consequence, sequence, emphasis.',
            'Refer back with this practice, such a decision, these measures instead of repeating a whole idea.',
            'Rebuttal order: state the opposing view fairly, concede what is true, refute with reason, return to your case.',
          ],
          keyTakeaway: 'Cohesion is not decoration: a paragraph that ends by naming what it has proved, joined to the next by the right linker, is what the organisation heading rewards.',
          realWorldExample: 'A pupil arguing that boarding is preferable may concede that boarding separates a child from the family, then refute the point by observing that the house system and weekly telephone calls replace much of that contact, and finally link back: "the danger of homesickness, therefore, is real but manageable."',
        },
        {
          title: 'Debate Speeches, Fallacies and Conclusions That Stay in Bounds',
          content: 'A debate speech is an argumentative essay spoken under a clock, and it carries extra conventions. Open by addressing the room in order: the chair, the judges, the timekeepers, the co-debaters and the audience, then state the motion and your stance on it, defining any term that the motion turns on, for example that mobile phones mean personal devices in class hours rather than all devices in the library. Announce your plan, since an audience needs signposts more than a reader does. Identify the clash, the single point on which the two sides truly differ, and keep returning to it, because judges mark matter, manner and method: the strength of the argument, the delivery and eye contact, and the structure. Use the rule of three, direct questions to the floor and courtesy forms such as "my friend opposite" or "the honourable member opposite", and reserve the winding-up speech for summary and refutation, since a fresh argument introduced at that stage is a recognised fault. In school practice the opposition speakers reply to the case already made before advancing their own, and the first speaker for the proposition carries the burden of proving the motion. Now the fallacies, which cost marks because they let an examiner dismiss a whole paragraph. The ad hominem attacks the person: "my opponent has failed his mock, so nothing he says about the curriculum is worth hearing." Sweeping generalisation applies a rule without exception or invents a statistic: "all boys are undisciplined", "ninety percent of Ghanaians support the policy". Hasty generalisation draws a conclusion from one instance, and false cause asserts that because B followed A, A caused B, as when a candidate says results fell because fees were waived. The straw man distorts the opposing view to knock it down, the slippery slope promises catastrophe without evidence for each step, the false dilemma allows only two options, and circular reasoning assumes the very point it must prove. Finally the conclusion, which must stay in bounds: no new argument, no new example, no apology for the quality of the writing, no question thrown at the reader, and in a formal essay no idiom; restate the thesis in fresh words, compress the reasons into one clause and end with a judgement, a wish or a call to action.',
          bulletPoints: [
            'Opening address runs chair, judges, timekeepers, co-debaters, audience; then the motion, the definition and the plan.',
            'Judges mark matter, manner and method; speakers address the floor and refer courteously to the member opposite.',
            'The winding-up speech refutes and sums up; introducing a fresh argument there is a scoring fault.',
            'Name and repair the fallacies: ad hominem, sweeping generalisation, hasty generalisation, false cause, straw man, slippery slope, false dilemma, circular reasoning.',
            'The conclusion restates and judges: no new point, no new instance, no apology, no question at the reader.',
          ],
          keyTakeaway: 'Debate adds audience discipline to essay discipline, and every cheap trick, from the personal attack to the invented statistic, is visible to both judges and examiners.',
          realWorldExample: 'At a District Assembly common-gound meeting in Keta, a pupil speaking against the motion that traders should pay a daily levy begins by addressing the chair and the assembly, defines the levy as a charge collected at the shed gate, answers the case already made, and closes by summing up rather than by introducing the question of market toilets for the first time.',
        },
      ],
      summaryChecklist: [
        'Can I tell an argumentative task from a discursive task by its instruction verb alone?',
        'Can I name the three WAEC award categories and say which one an off-task essay loses first?',
        'Can I plan and write a five-hundred word essay inside forty-five minutes using the timed plan?',
        'Can I build a paragraph with claim, explanation, instance and link, and connect it to the next with the right linker?',
        'Can I identify and repair an ad hominem or sweeping generalisation, and write a conclusion that adds no new point?',
      ],
      commonMistakes: [
        'Answering a discursive task such as "Discuss whether boarding is better than day school" with a one-sided attack: the instruction demands both sides weighed before a verdict, so a one-sided essay is capped in content.',
        'Answering an argumentative task with a balanced discussion that refuses to choose: "convince the meeting" requires a declared thesis in the first paragraph and a consistent position throughout.',
        'Using the ad hominem, for example "my opponent comes from a broken home, so his view is worthless"; the fix is to attack the argument, as in "the evidence he offers concerns only one school".',
        'Writing sweeping generalisations such as "all pupils cheat" or inventing a statistic like "ninety percent of Ghanaians agree"; replace them with hedged, supportable claims such as "a large number of candidates in coastal districts".',
        'Letting the conclusion carry a fresh point, an apology such as "I know this essay is short", or a rhetorical question such as "who does not want a better school?"; strike the new material and close with a restatement and a judgement.',
      ],
      wassceExamTips: [
        'On Paper 2 read the chosen task twice and underline the topic, task and limit words before planning; a candidate who misses the stated audience, such as "for your school magazine", loses register marks under expression.',
        'Examiners place an essay by content first, so a four-hundred word essay that answers the task squarely outperforms a longer one that drifts into storytelling.',
        'Keep one main idea to a paragraph and mark the shift plainly; in the organisation category, a wall of unbroken text is read as a lack of structure even when the sentences are correct.',
        'In Paper 1, summary and comprehension questions on argumentative passages ask for the writer\u2019s point and the support given for it; answer with the claim and the instance, not with your own opinion of the topic.',
        'For objective items on Paper 3 that test connectives and sentence ordering, decide the logical relation before reading the options, since addition, contrast and consequence each admit only one class of linker.',
      ],
    },
    examples: [
      {
        id: 'ex-shs3-eng-ad-1',
        title: 'Planning and drafting an argumentative essay in forty-five minutes',
        problem: 'WASSCE task: "Write an essay for your school magazine to convince your school meeting that the ban on mobile phones in the hostels should be reviewed." Plan the essay and draft the introduction, the rebuttal paragraph and the conclusion, showing how the forty-five minutes would be spent.',
        stepByStepSolution: [
          'Step 1 (M1): Read the task twice and underline: topic words "ban on mobile phones in the hostels"; task words "convince", so the mode is argumentative; limit words "for your school magazine" and "your school meeting", which fix the audience as pupils and teachers and the register as semi-formal standard English.',
          'Step 2 (M1): Fix the position in one thesis sentence and three claims: the review is justified because pupils need a controlled means of contacting guardians, because the ban has shifted phone use into classrooms where teaching is disturbed, and because a supervised policy teaches responsibility better than prohibition. Reserve the strongest claim, the classroom disturbance, for last.',
          'Step 3 (A1): Introduction, roughly sixty words, ending on the thesis: "Our school has long kept mobile phones out of the hostels, and the rule was reasonable when few pupils owned one. Three years later it is a rule that is broken daily, quietly and by good pupils as well as bad. This meeting should review the ban, because a supervised policy protects study hours better than a prohibition no one enforces."',
          'Step 4 (A1): Rebuttal paragraph in four moves: state the opposing view fairly, that any phone in a hostel invites cheating and late-night gossip; concede that unregulated use has cost pupils sleep and one candidate her place in the mock; refute with reason and instance, since the examinations that matter are conducted without devices in the hall and the reported cases were of pupils who smuggled the phone in defiance of an unenforceable rule; link back: "the abuse, therefore, comes from secrecy, and secrecy is the child of the ban, not of the phone."',
          'Step 5 (A1): Conclusion with no new point: "A review is not a surrender. If the school permits devices in the hall during the evening hour, collects them before lights out and punishes use in class, it will gain order it now lacks and give pupils a lesson in handling what they already own. The ban should be reviewed, and this meeting should begin the review before the next term."',
          'Step 6 (A1): Full answer: the essay consists of the introduction above, three body paragraphs on a controlled means of contacting guardians, the shift of phone use into classrooms where teaching is disturbed, and the responsibility a supervised policy teaches, then the rebuttal paragraph and the conclusion above. The audited time was five minutes on task and limit words, five on the three claims and their instances, two on the thesis and the order, twenty-eight writing about four hundred and eighty words, and five revising paragraph unity, verb tense and the conclusion for stray new material.',
        ],
        keyTakeaway: 'A winning argumentative essay is decided before the first sentence: mode from the task words, three claims with instances, one honest rebuttal, and a conclusion that only gathers what has been sown.',
      },
      {
        id: 'ex-shs3-eng-ad-2',
        title: 'Detecting and repairing fallacies in a debate speech',
        problem: 'Read this extract from a school debate on the motion "This House would abolish the payment of boarding fees by the Parent Teachers Association": "My opponent has failed his mock examination twice, so nothing he says about school finance is worth hearing. Everyone in this room knows that all parents are willing to pay. Last term the association did not collect any money, and that is why the hostel roof collapsed. If we stop these collections today, next the assembly will close the market, and then the town itself will fall. Either we accept the collections or our children will not be educated. I am sorry I cannot say more. Thank you."',
        stepByStepSolution: [
          'Step 1 (M1): Label each sentence with the name of its fault before attempting any repair, and keep the labels in the order the speech delivers them; unlabelled correction turns into paraphrase.',
          'Step 2 (A1): Sentence one is an ad hominem, since it answers the man rather than the argument. Repair: "my opponent speaks of waste, but the accounts he questions were audited by the district office, and the audit shows a balance of three thousand cedis." The same doubt is now carried by evidence.',
          'Step 3 (A1): Sentence two is a sweeping generalisation and an unproved universal claim: "everyone knows all parents are willing". Sentence three is a false cause, since a collapsed roof follows many failures and not merely one uncollected levy. Repairs: "many parents in this room have paid without being asked twice, and the records of last year show sixty of ninety on the list" for the generalisation, and "the roof had been reported defective in the last two maintenance surveys, so the collapse is a maintenance failure which the lost collection made harder to remedy" for the cause.',
          'Step 4 (A1): Sentence four is a slippery slope, and sentence five is a false dilemma. Repairs: "a review of collections does not oblige the assembly to touch the market levy; the two decisions stand separately" and "the choice is not between this exact levy and no education; the alternatives include a phased contribution, a scholarship pool and a district subvention."',
          'Step 5 (A1): Sentence six is an apology that undercuts the speaker, and the whole passage is missing the clash. Repair: strike the apology and end on the point in dispute, for example "the question before this House is not whether the school needs money but whether families who cannot pay should be charged the same as those who can."',
          'Step 6 (A1): Full repaired answer: "The accounts my opponent questions were audited by the district office, and the audit shows a balance of three thousand cedis. Many parents in this room have paid twice without being asked, and the list for last year shows sixty of ninety who paid in full. The roof had been reported defective in two maintenance surveys, so its collapse is a maintenance failure which the lost collection made harder to remedy. A review of collections does not oblige the assembly to touch the market levy, and the choice is not between this levy and no education, since a phased contribution, a scholarship pool and a district subvention all remain open. The question before this House is whether families who cannot pay should be charged the same as those who can." The habit that prevents all six faults is to write each claim on one line and ask who proves it, whether it holds for everyone, whether the cause truly preceded the effect and what the claim leaves unexamined.',
        ],
        keyTakeaway: 'Every fallacy is a claim asked no question, so the repair is always the same: name the fault, then supply the evidence, the exception or the missing alternative.',
      },
    ],
    quiz: {
      id: 'quiz-shs3-eng-t2-argumentative-discursive',
      topicId: 'shs3-eng-t2-argumentative-discursive',
      title: 'Argumentative and Discursive Writing Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-ad-1',
          quizId: 'quiz-shs3-eng-t2-argumentative-discursive',
          questionText: 'Which of the following WASSCE essay tasks requires a balanced examination of both sides before a personal verdict?',
          optionA: 'Write an essay to convince the school meeting that the reading club deserves more support.',
          optionB: 'Discuss whether the free senior high school policy has improved access to education in Ghana.',
          optionC: 'Narrate an incident which taught you a lesson you have never forgotten.',
          optionD: 'Describe the scene at the Makola Market on a Saturday morning.',
          correctOption: 'B',
          subConcept: 'Discursive task words',
          explanation: 'The verb DISCUSS with the words WHETHER signal the discursive contract, so both sides must be weighed before the verdict. Option A is argumentative because CONVINCE commits the writer to one side; option C is narrative and option D is descriptive.',
          remediationTip: 'Sort every essay task by its instruction verb before planning: convince and give reasons for one side, discuss and weigh both.',
        },
        {
          id: 'q-shs3-ad-2',
          quizId: 'quiz-shs3-eng-t2-argumentative-discursive',
          questionText: 'The three categories on which an examiner awards marks for a WASSCE essay are ___.',
          optionA: 'length, handwriting and neatness',
          optionB: 'introduction, body and conclusion',
          optionC: 'content, organisation and expression',
          optionD: 'grammar, spelling and punctuation',
          correctOption: 'C',
          subConcept: 'WAEC award categories',
          explanation: 'Examiners place the essay under content, which is relevance and development, organisation, which is structure and cohesion, and expression, which is accuracy, vocabulary and register. Option B names paragraph parts rather than award headings, and options A and D list features that fall inside the three real categories.',
          remediationTip: 'Revise your essay against those three headings only, and remember that content is judged first.',
        },
        {
          id: 'q-shs3-ad-3',
          quizId: 'quiz-shs3-eng-t2-argumentative-discursive',
          questionText: 'The reasoning in the sentence "My opponent has failed his mock examination twice, so nothing he says about school fees can be true" is faulty because it is a case of ___.',
          optionA: 'sweeping generalisation',
          optionB: 'false cause',
          optionC: 'circular reasoning',
          optionD: 'argument against the person',
          correctOption: 'D',
          subConcept: 'Ad hominem fallacy',
          explanation: 'The speaker attacks the character and record of the opponent instead of the argument about fees, which is the ad hominem fallacy, described here as an argument against the person. No general rule is being over-extended, so option A does not fit, and no causal claim is made, so option B fails.',
          remediationTip: 'Test every rebuttal by asking whether it answers the claim or the speaker; if it answers the speaker, replace it with evidence.',
        },
        {
          id: 'q-shs3-ad-4',
          quizId: 'quiz-shs3-eng-t2-argumentative-discursive',
          questionText: 'In a school debate, the winding-up or reply speech is expected to ___.',
          optionA: 'introduce a fresh argument the side has not yet raised',
          optionB: 'refute the opposing case and sum up the arguments already advanced',
          optionC: 'define the motion for the benefit of the timekeepers',
          optionD: 'invite the audience to vote on the motion at once',
          correctOption: 'B',
          subConcept: 'Debate speech structure',
          explanation: 'The winding-up speaker answers the clash and gathers the case already made; bringing a new argument at that stage is a recognised scoring fault, so option A is wrong. Definition belongs to the first speaker, and the audience does not vote in a judged debate.',
          remediationTip: 'Plan the wind-up as two movements only: answer the strongest point of the other side, then restate your own three points.',
        },
        {
          id: 'q-shs3-ad-5',
          quizId: 'quiz-shs3-eng-t2-argumentative-discursive',
          questionText: 'Which of the following is the most acceptable concluding sentence for an argumentative essay that has defended school uniforms?',
          optionA: 'Another matter which ought to be considered is the cost of the fabric.',
          optionB: 'I am sorry that I have not been able to say very much on this subject.',
          optionC: 'For these reasons, uniforms support discipline and equality in our schools, and every school meeting should resolve to retain them.',
          optionD: 'Who among us does not wish to see our children well dressed?',
          correctOption: 'C',
          subConcept: 'Conclusion discipline',
          explanation: 'A conclusion restates the thesis and the reasons and ends on a judgement, which option C does without new material. Option A introduces a fresh point that belongs in the body, option B is an apology, and option D throws a question at the reader instead of concluding.',
          remediationTip: 'Before handing in, read only the last paragraph and cut any example, argument or question that has not appeared earlier.',
        },
      ],
    },
  },
  {
    id: 'shs3-eng-t2-comprehension-inference-summary',
    subjectId: 'english',
    level: 'SHS 3',
    term: 2,
    orderIndex: 10,
    title: 'Comprehension: Inference, Tone, Vocabulary and Summary Integration',
    description: 'An exam-execution revision of Paper 1 reading: literal against inferential answering, tone and attitude vocabulary, sense-based word meaning, reference and title questions, and word-controlled summary.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=pjrESLdHU9M',
    youtubeId: 'pjrESLdHU9M',
    keyNotes: `• Comprehension divides into LITERAL items, whose answer is stated in the passage, and INFERENTIAL items, whose answer is implied and must be reasoned out of the words on the page.
• Literal method: scan for the name, place, date or phrase quoted in the question, find the sentence that carries the fact, then rewrite it in your own words unless the question tells you to use the words of the passage.
• Inferential method: fix the two or three lines that support the inference, state the inference plainly, then name the words that prove it; an inference with no textual support is invention and earns nothing.
• Signal wording: "what does the writer suggest", "what does this tell us about", "bring out the implied meaning" mark an inferential item; "state", "name", "list" and "find words or phrases meaning" mark a literal or vocabulary item.
• Tone vocabulary for WASSCE: sarcastic, ironic, critical, condemnatory, indignant, amused, humorous, satirical, sympathetic, nostalgic, pessimistic, optimistic, cautious, hopeful, neutral, contemptuous, admonitory and melancholic.
• Determine tone from the diction, not from the subject: a passage about a disaster may be written sympathetically or coldly, and the giveaways are words such as "graciously promised", "so-called", "miraculously" and "unfortunately".
• Marks of an ironic or sarcastic writer: praise words applied to failures, quotation marks round a familiar term, deliberate exaggeration, understatement, and a concession in one clause that the next clause contradicts.
• Tone can shift inside one passage, so answer with respect to the paragraph the question names, never call a whole passage bitter because one paragraph is, and do not confuse the tone of the writer with the mood of the scene he describes.
• Nearest in meaning: substitute each option into the sentence and keep the same part of speech; the correct option fits the grammar of the line as well as its sense.
• Watch the multiple-sense trap: "sharp" may mean keen, pointed, abrupt or clever, and the answer is the sense the passage uses, not the commonest sense in a dictionary.
• Degree and connotation separate the strongest distractor from the answer: "angry" and "furious" differ in force, "thrifty" and "stingy" differ in approval, and only the sentence can decide which is nearest.
• Reference questions look backwards: "they" points to the nearest plural noun phrase that agrees in number and in logic, and every answer must be tested by substituting it into the sentence.
• "This", "that" and "such" may refer to a whole idea in the preceding sentence rather than to one noun, so answer by paraphrasing the idea, for example that "they" refers to the traders who were moved off their space.
• Title justification: name the thread the title picks up, then support it with two or three references spread across the passage, and state why the central idea or the recurring image makes the title appropriate.
• Summary selection: take only the content the rubric names, strip illustrations, examples, figures, quoted speech and repetitions, and give one clause per point with no introduction and no conclusion.
• Word-limit control: join the points by subordination rather than coordination, count as you write, never exceed the stated limit, and do not fall well below it, because a short summary has usually dropped a required point.`,
    detailedNotes: {
      overview: 'Paper 1 asks a candidate to read once and then do four different intellectual jobs: recover stated fact, reason from what is implied, decide what a word means in this particular sentence, and compress a passage inside a word limit. This topic integrates all four, because in the examination hall they are answered from the same passage in the same hour and the habits that win one win the others. The emphasis in SHS 3 is on execution: the locating routine that prevents wasted reading, the evidence sentence that turns a guess into an inference, the substitution tests for vocabulary and reference, the three-part answer for a title question, and the counting discipline that keeps a summary inside its limit.',
      introduction: 'Most candidates read a comprehension passage twice and answer in the order the questions are set. That is not a method; it is a habit. A method decides, for each question, what kind of answer is demanded and where in the passage it can be proved. Questions on tone ask what the writer is doing with his words, not what he is writing about. Questions on meaning ask which sense the passage carries, not which sense you know best. Questions on reference are puzzles of agreement and substitution. Summary is the hardest because it forbids the very material a good reader enjoys, the illustration and the quotation. Work the four sections below in order and the passage stops being a wall and becomes a filing system.',
      realWorldContext: 'The passages candidates meet are written in this register. An editorial in a Ghanaian newspaper on the state of the markets will describe how a tray keeper at Makola is moved off her space three times before noon and will call the officials ever ready to oblige, which is irony the comprehension question will ask you to name. A GES circular read in assembly is a model of the impersonal factual writing that supplies literal items, while a feature in a magazine on a fishing community at Keta, written hopefully about the harbour and warily about the rains, supplies tone items. The summary task is the same skill a pupil uses when asked to report a guest lecture to a headmaster who has forty seconds, and a title such as The Woman Who Moved Twice is justified by the recurring act of moving, exactly as a radio newsbeat headline is justified by the story it caps.',
      objectives: [
        'Apply a locating routine that answers literal items in one pass of the passage.',
        'Distinguish inferential from literal items and support every inference with named words from the text.',
        'Judge the writer\u2019s tone or attitude and defend the judgement with evidence of diction.',
        'Select the sense of a word that the context carries and resolve reference questions by substitution.',
        'Justify a title from the passage and compress selected points into a summary inside the stated limit.',
      ],
      sections: [
        {
          title: 'Literal and Inferential Questions: Two Different Searches',
          content: 'A literal question is answered by finding; the passage says the thing, and your task is to locate it and restate it. Typical stems are "State two duties mentioned in the passage", "Why did the trader move her basket?", "In what year was the market rebuilt?" and "Find words or phrases in the passage which mean the following". The routine is to take a distinctive element from the question, usually a name, a place, a number or a phrase in quotation marks, scan down the passage for it, read the sentence before and the sentence after, and then write the answer in your own words unless the rubric requires the words of the passage. An inferential question is answered by reasoning; the passage implies the thing, and the answer must be built. Typical stems are "What does the writer suggest about the attitude of the youth?", "What can be inferred from the statement in paragraph three?", "Why, in your opinion, did the official hesitate?" and "Does the writer approve of the policy? Give one reason for your answer". Three rules make inferences score. First, anchor: name the lines you are reasoning from, because a marker can only award what you point to. Second, stay inside the passage: an inference that requires knowledge the passage does not supply is speculation, however clever. Third, answer in the grain of the question, so a question about a character\u2019s attitude is answered with an attitude noun and a proof phrase, not with a summary of the events. When a question carries the instruction "in your own words", lifting the sentence whole costs the mark; paraphrase the sense and keep the technical term if there is one.',
          bulletPoints: [
            'Literal stems: state, name, list, find words meaning; the answer exists in the passage already.',
            'Inferential stems: suggest, imply, what does this tell us, what can be inferred; the answer must be built.',
            'Anchor every inference to named lines so the marker can see the support.',
            'Paraphrase when the rubric says "in your own words"; use the passage words only when asked to.',
            'Answer attitude questions with an attitude noun plus proof, not with a retelling of the incident.',
          ],
          keyTakeaway: 'Decide first whether the answer is stated or implied, because finding and reasoning are different skills and each is marked differently.',
          realWorldExample: 'From a passage describing a Kumasi trader moved off her space three times before noon, the literal question asks how many times she was moved, while the inferential question asks what the passage suggests about the relationship between the traders and the officials, which is answered by pointing to the three removals and to the officials\u2019 readiness to oblige.',
        },
        {
          title: 'Tone, Attitude and the Vocabulary of Judgement',
          content: 'Tone is the writer\u2019s feeling toward his subject, and the examiner tests whether you can name it and prove it. Build a working vocabulary of the attitudes WASSCE actually sets: sarcastic and ironic when praise words are used to blame; critical and condemnatory when the fault is named; indignant when the fault provokes anger; amused and humorous when the writer is entertained; satirical when the aim is to ridicule a public failing; sympathetic when the writer sides with the sufferer; nostalgic when the past is mourned; optimistic and hopeful when the future is expected well of; cautious and tentative when the writer hedges; pessimistic when he expects the worst; neutral or objective when he reports without judging; contemptuous when he despises; admonitory when he warns; melancholic when he is quietly sad. Derive the tone from the diction, never from the subject matter, because a passage about a flood may be written clinically by an engineer and mournfully by a survivor. Ask four questions of the words: does the writer use praise language for failure, as in "graciously promised" about an official who never acts; does he hedge, with "perhaps", "seems", "it is said"; does he exaggerate or understate; and does he concede a point in one clause and contradict it in the next? Note also that tone can shift paragraph by paragraph, so answer for the part the question names. Guard against two confusions: the tone of the writer is not the mood of the scene, so a funeral scene described by a detached reporter is not a melancholy passage; and the tone is not your own feeling about the subject, which is why answers beginning "I felt sad" receive nothing.',
          bulletPoints: [
            'Name the attitude with one of the set terms: sarcastic, critical, indignant, sympathetic, cautious, optimistic, neutral.',
            'Derive tone from diction, hedging words, exaggeration, understatement and concession, not from the topic.',
            'Praise language applied to failure signals irony or sarcasm; quotation marks round a familiar term do the same.',
            'Tone may shift within a passage, so answer for the paragraph the question identifies.',
            'Never report your own feeling: the question asks what the WRITER feels about his subject.',
          ],
          keyTakeaway: 'Tone is proved by words, so name the attitude and quote the diction that carries it.',
          realWorldExample: 'A feature in an Accra magazine on a road contractor writes that the firm has "graciously promised, as it has graciously promised for four seasons, to complete by the rains"; the tone is sarcastic, and the proof is the praise word "graciously" applied to a promise repeated four times without effect.',
        },
        {
          title: 'Words in Context and Reference Questions',
          content: 'The vocabulary item is misread by candidates who know too many senses of a word. The stem is usually "The nearest in meaning to the underlined word is" or "In the passage, the word X means". Apply the substitution test: put each option into the sentence and keep the grammar intact. If the underlined word is an adjective, a noun option is wrong even when the sense is close; if it is a verb in the past tense, the option must match the form. Then ask which sense the passage uses, since the strongest distractor is always the correct word in the wrong sense: "sharp" may mean keen, pointed, abrupt or clever, and only the line decides. Degree and connotation separate the rest: "furious" is stronger than "angry", "stingy" disapproves where "thrifty" praises, and a passage that admires a saver wants "thrifty". Reference questions, typically "What does the word THEY in line twelve refer to?" or "To whom does the writer refer when he says HIS OWN?", are solved by looking backwards. The pronoun must agree in number and person with its antecedent, and the answer is the nearest noun phrase that both agrees and makes sense, tested by substitution into the sentence. Beware the idea-reference, where "this", "that", "such" or "it" points to a whole clause rather than a noun, as in "The assembly resolved to close the market on Sundays; THIS was not welcome to the traders", where "this" refers to the resolution, not to the assembly or the market. For the compound answer, give the antecedent in full and not as a single word, since a marker looking for the traders will not credit the word "they".',
          bulletPoints: [
            'Substitute every option into the line and keep the same part of speech and the same form.',
            'Choose the sense the passage carries, not the sense you meet most often.',
            'Separate options by degree, angry against furious, and by approval, thrifty against stingy.',
            'Reference answers come from the lines before, and must agree in number and person.',
            'Test the answer by substitution, and give the antecedent as a full phrase, not as a pronoun.',
          ],
          keyTakeaway: 'Context decides meaning and number decides reference, so test every answer by putting it back into the line.',
          realWorldExample: 'In a passage on the Ho market, the line reads that the traders were "harassed" by daily levies; among the options assisted, troubled, persecuted and encouraged, the sense carried by the passage, repeated demands that disturb business, makes "troubled" the nearest, while "persecuted" overshoots the degree.',
        },
        {
          title: 'Justifying a Title, Controlling the Summary and Budgeting Forty-Five Minutes',
          content: 'A title question asks you to argue that the label fits the text, and the answer has three moves. Name the thread the title picks up, whether the central idea, the recurring image or the writer\u2019s attitude. Support it with two or three references spread across the passage, since a title proved from one paragraph looks accidental. Then say why no competing title would do as well, or, if the question asks for an alternative, supply one and justify it on the same grounds. For the passage on the trader who is moved three times, the title The Woman Who Moved Twice is justified because the act of moving recurs in each paragraph, because it names the subject rather than an incidental detail, and because it carries the writer\u2019s quiet criticism of the officials. The summary is the opposite discipline: it forbids material. Read the rubric and underline the content required, for example "state the difficulties the traders face", and read only for those points. Strike everything that illustrates rather than states: the instance, the figure, the quotation, the description, the repetition and the writer\u2019s comment. Convert each remaining point into one clause, join clauses by subordination, and prefer a participle or a relative clause to a new sentence, because coordination wastes words. Then count, and if the limit is one hundred words, settle between ninety and one hundred and never above. A summary that falls far short has usually dropped a required point rather than been clever. Now integrate the whole paper on a forty-five minute budget. Spend three minutes reading the passage through for the argument and labelling the paragraphs. Spend twelve minutes on the comprehension items, working them in this order, literal, then vocabulary and reference, then inference and tone, because the literal pass installs the locations that the harder items need. Spend five minutes rereading the questions to check that each answer matches the rubric wording, and that any instruction to use your own words has been obeyed. Spend the final twenty-five minutes on the summary, with six minutes of selection, ten of writing and nine of counting and cutting. Remember that the sections feed one another: the sense you fixed while answering a vocabulary item is the same sense the summary depends on, so never work the two in isolation.',
          bulletPoints: [
            'Title answer in three moves: name the thread, cite two or three references, rule out or offer an alternative.',
            'Summary selection takes only what the rubric names, and deletes illustration, figure, quotation and repetition.',
            'One clause per point, joined by subordination, and a final count between ninety and the stated limit.',
            'Question order inside forty-five minutes: three reading, twelve comprehension, five checking, twenty-five summary.',
            'Answer literal items first, since their locations carry the vocabulary, reference, inference and tone items after them.',
          ],
          keyTakeaway: 'Justify a title from the whole passage, cut a summary down to stated points, and let the clock decide the order in which you answer.',
          realWorldExample: 'A candidate facing the rubric "Summarise, in not more than one hundred words, the problems facing traders at the Agbogbloshie market" keeps the levy, the absence of sheds, the flooding of the walkways, the shortage of storage and the refusal of credit, and drops the story of Aunty Adjoa\u2019s spilled tomatoes, which is illustration rather than point.',
        },
      ],
      summaryChecklist: [
        'Can I tell a literal item from an inferential item by the wording of the question?',
        'Can I name the tone of a paragraph and quote the diction that proves my choice?',
        'Can I choose the nearest synonym by substituting it into the line and keeping its part of speech?',
        'Can I resolve a reference question by looking backwards and testing the antecedent in the sentence?',
        'Can I write a summary of five points inside a hundred-word limit without an introduction or a conclusion?',
      ],
      commonMistakes: [
        'Answering an inferential question with a personal opinion such as "I think the government should help the traders"; the answer must be an inference from named words in the passage.',
        'Choosing the dictionary\u2019s commonest sense in a nearest-in-meaning item, for example taking "sharp" to mean pointed when the passage means keen; the line decides the sense.',
        'Answering a reference question with another pronoun, as in "they refers to them"; give the full antecedent, "the traders who were moved off their space", and test it in the sentence.',
        'Calling the mood of the scene the tone of the writer, so answering "melancholy" for a flood report written in neutral, factual language.',
        'Writing a summary that exceeds the limit by keeping examples and figures, or falling far below it by silently dropping one of the points the rubric required.',
      ],
      wassceExamTips: [
        'On Paper 1, answer the comprehension items in the order literal, then vocabulary and reference, then inference and tone; the literal pass installs the locations that every harder item then needs, and it saves a second reading.',
        'For an inferential or tone item, write the answer and one proof phrase from the passage; markers award the method for identifying the evidence and the answer for the correct judgement, so the proof phrase alone still earns a mark.',
        'In the summary, obey the rubric rather than your own sense of importance: a point the question did not ask for scores nothing and consumes words you are limited to.',
        'On Paper 2, the directed writing and essay tasks draw on the same reading habits, so a candidate who can state an implied point in one clause also writes a clearer thesis sentence.',
        'In Paper 3 objectives on meaning and reference, read the whole line before the options, eliminate every option that changes the part of speech, and be decisive on the first reasonable choice instead of returning to the weakest distractor.',
      ],
    },
    examples: [
      {
        id: 'ex-shs3-eng-cs-1',
        title: 'Working literal, inferential, tone, vocabulary and reference items on one passage',
        problem: 'Passage: "Each Saturday Aunty Adjoa spreads her tomatoes on the same square of ground at the market, and each Saturday an official arrives to tell her that the space is required for a vehicle. She has learned to move, and to move again before the dust has settled on her baskets. The officers, she says, are ever ready to oblige, provided the obligation costs them nothing. By noon the stalls along the walkway have been cleared, and the traders stand in the shade of the lorry park with their wares unopened." Answer: (a) State what the officials tell Adjoa each Saturday. (b) What does the passage suggest about the treatment of the traders? (c) What is the tone of the words "ever ready to oblige"? (d) To whom does the word SHE in line four refer? (e) Find the word in the passage which means "goods offered for sale".',
        stepByStepSolution: [
          'Step 1 (M1): Classify each item before answering, because the method differs: (a) literal, (b) inferential, (c) tone, (d) reference, (e) vocabulary or sense retrieval. Fix the order literal, reference, vocabulary, inference, tone.',
          'Step 2 (A1): (a) is located in the second sentence: the officials tell her that the space is needed for a vehicle. Restated in your own words, an officer arrives each Saturday to inform Adjoa that the ground she has occupied is required for a vehicle.',
          'Step 3 (M1): For (b), name the lines you are reasoning from before you state the inference, since an unsupported inference is speculation and a supported one is evidence.',
          'Step 4 (A1): (b) The passage suggests that the traders are treated as an obstruction rather than as customers of the market authority. Support: the official arrives every Saturday, Adjoa must move twice before noon, and the stalls are cleared by noon so that the traders end the day with their wares unopened.',
          'Step 5 (A1): (c) The tone is sarcastic, and the proof is the application of a praise expression, readiness to oblige, to officials whose obligation costs them nothing, that is, who agree to nothing. An answer naming only the tone without the praise-for-failure evidence would lose the method mark.',
          'Step 6 (A1): Full answer set: (a) an official arrives each Saturday to tell Adjoa that the ground she has taken is required for a vehicle; (b) the passage suggests that the traders are treated as an obstruction rather than as customers of the market authority, proved by the weekly removals and the cleared walkway; (c) sarcastic, because a praise expression is attached to officials whose obligation costs them nothing; (d) SHE refers to Aunty Adjoa; (e) "wares", the goods offered for sale in the last line, while "baskets" and "stalls" are containers and places.',
        ],
        keyTakeaway: 'Label the question type first, then give the answer and the words that prove it; in tone items the proof phrase is half the mark.',
      },
      {
        id: 'ex-shs3-eng-cs-2',
        title: 'Compressing a passage into a hundred-word summary',
        problem: 'Passage: "The traders at the market face several difficulties. They must pay a daily levy, which the association collects at the gate, and many of them complain that they pay twice on a market day when the quantity of their goods changes the rate. Last Friday, one tomato seller said she had paid four cedis before nine in the morning. The stalls are open to the weather, so when the rains come the tomatoes float away and the yams soak up water and rot; in June the walkways were under water for three days, and the traders lost stock worth thousands of cedis. There is no store, so perishable goods must be sold on the day or given away. Credit is hard to obtain, since the money lenders demand payment within a week at rates the traders call cruel. The traders also complain that the lorry park has been moved to the far side of the road, so customers must cross traffic to reach them, and that the assembly has promised a shed for four seasons without building it." Summarise, in not more than one hundred words, the difficulties facing the traders at the market.',
        stepByStepSolution: [
          'Step 1 (M1): Underline the content the rubric demands, that is difficulties only, and read the passage for that and nothing else; the promises, the day of the week and the amount paid are not difficulties in themselves.',
          'Step 2 (M1): Extract the candidate points and then cut the illustration from each: the double levy and the rate that changes with quantity; open stalls ruined by rain and flooded walkways; no storage for perishable goods; dear and hasty credit; the relocated lorry park that drives customers across traffic; an unfinished shed. Strike the tomato seller, the four cedis, last Friday, June, the three days and the thousands of cedis, since all are instances.',
          'Step 3 (A1): Draft one clause per point in your own words: "The traders pay a daily levy that some are charged twice when the rate varies with the quantity of their goods. Their stalls are uncovered, so rain floods the walkways and ruins perishable stock. They have no store, so goods that do not sell must be given away. Credit is scarce and costly, since lenders demand repayment within a week. The lorry park has been moved across the road, and the promised shed is still unbuilt."',
          'Step 4 (M1): Check the grammar of the summary as a whole: no introduction, no conclusion, no first person, no quotation, one paragraph, every point tied to the rubric word "difficulties".',
          'Step 5 (A1): Count and check coverage. The draft stands at seventy-six words, comfortably inside a hundred-word limit, so the remaining duty is completeness: confirm that every difficulty the passage states has a clause. Two are still thin, the harshness of the lending rate and the traffic customers must cross, and both can be added by subordination rather than by a new sentence.',
          'Step 6 (A1): Final answer, ninety-one words: "The traders pay a daily levy which some are charged twice when the rate varies with the quantity of their goods. Their uncovered stalls let rain flood the walkways and ruin perishable stock, and with no store available, goods that do not sell must be given away. Credit is scarce and costly, since lenders demand repayment within a week at rates the traders call cruel. The lorry park has been moved across the road, so customers must cross traffic to reach them, and the shed promised for four seasons remains unbuilt."',
        ],
        keyTakeaway: 'Select only what the rubric names, cut every instance, join the points by subordination and count, because a summary is marked for coverage inside a limit.',
      },
    ],
    quiz: {
      id: 'quiz-shs3-eng-t2-comprehension-inference-summary',
      topicId: 'shs3-eng-t2-comprehension-inference-summary',
      title: 'Comprehension and Summary Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-cs-1',
          quizId: 'quiz-shs3-eng-t2-comprehension-inference-summary',
          questionText: 'The nearest in meaning to the underlined word is: The traders <u>harassed</u> by daily levies moved their baskets to the shade of the lorry park.',
          optionA: 'encouraged',
          optionB: 'troubled',
          optionC: 'instructed',
          optionD: 'acquainted',
          correctOption: 'B',
          subConcept: 'Word meaning in context',
          explanation: 'The passage carries the sense of being repeatedly disturbed and wearied by demands, which "troubled" matches. The other options keep the grammar but change the sense: encouragement, teaching and introducing someone to a place all belong to different situations.',
          remediationTip: 'Substitute each option into the line and ask whether the passage\u2019s feeling is kept or replaced.',
        },
        {
          id: 'q-shs3-cs-2',
          quizId: 'quiz-shs3-eng-t2-comprehension-inference-summary',
          questionText: 'Read the lines: "The officials <u>graciously promised</u>, as they have graciously promised for four seasons, to complete the shed before the rains." The tone of the underlined expression is best described as ___.',
          optionA: 'ironic',
          optionB: 'grateful',
          optionC: 'fearful',
          optionD: 'neutral',
          correctOption: 'A',
          subConcept: 'Tone of the writer',
          explanation: 'Praise language applied to a promise repeated four times without effect is irony, so the tone is ironic rather than admiring. Grateful would be correct if the promises had been kept, neutral would require no judgement at all, and fearful reads an emotion the diction does not carry.',
          remediationTip: 'When a good word is attached to a bad record, test for irony before choosing any positive attitude.',
        },
        {
          id: 'q-shs3-cs-3',
          quizId: 'quiz-shs3-eng-t2-comprehension-inference-summary',
          questionText: 'Read the lines: "The farmers cleared the bush beside the stream, and the soil soon washed away. When <u>they</u> were warned by the assembly, the work stopped." In the passage, the underlined word refers to ___.',
          optionA: 'the streams',
          optionB: 'the warnings',
          optionC: 'the farmers',
          optionD: 'the assembly',
          correctOption: 'C',
          subConcept: 'Reference question',
          explanation: 'The pronoun is plural and looks backwards to the nearest plural noun phrase that can be warned, which is the farmers. The assembly is singular and is the giver of the warning, while warnings and streams cannot be warned, so substitution settles the answer.',
          remediationTip: 'Put the candidate antecedent back into the sentence and check number and sense before writing.',
        },
        {
          id: 'q-shs3-cs-4',
          quizId: 'quiz-shs3-eng-t2-comprehension-inference-summary',
          questionText: 'Which of the following comprehension questions demands an INFERENTIAL answer?',
          optionA: 'What does the passage suggest about the attitude of the traders toward the officials?',
          optionB: 'State two duties of the market officer as given in the passage.',
          optionC: 'In what year was the market shed rebuilt?',
          optionD: 'Find words in the passage which mean covered storage.',
          correctOption: 'A',
          subConcept: 'Inferential question type',
          explanation: 'The verb SUGGEST asks for a judgement the passage implies rather than states, so the answer must be built from evidence. Options B, C and D all ask for material that is stated in the text and can be located and restated.',
          remediationTip: 'Treat suggest, imply and what does this tell us as signals that you must quote the supporting words.',
        },
        {
          id: 'q-shs3-cs-5',
          quizId: 'quiz-shs3-eng-t2-comprehension-inference-summary',
          questionText: 'In a summary task set with a word limit, a candidate should normally leave out ___.',
          optionA: 'the points named in the rubric',
          optionB: 'the illustrations, the figures and the repeated statements',
          optionC: 'the topic that the rubric requires',
          optionD: 'the instruction on length',
          correctOption: 'B',
          subConcept: 'Summary selection',
          explanation: 'Summary compresses stated points, so examples, statistics and repetitions are cut while the required points are kept. Options A and C name exactly what must stay, and the length instruction governs the writing rather than being material inside it.',
          remediationTip: 'Underline the required points first, then cross out every sentence that illustrates rather than states.',
        },
      ],
    },
  },
  // NEXT_TOPIC_SENTINEL
// =========================================================================
  // TOPIC 11 — OBJECTIVE TESTS AND CLOZE TECHNIQUE (PAPER 3)
  // =========================================================================
  {
    id: 'shs3-eng-t3-objective-cloze-technique',
    subjectId: 'english',
    level: 'SHS 3',
    term: 3,
    orderIndex: 11,
    title: 'Objective Tests and Cloze Technique for Paper 3',
    description: 'The anatomy of the WASSCE objective paper, the grammar and collocation cues that decide a gap, the elimination ladder, timing per item and answer-sheet discipline.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=Uu5G7HvNC_w',
    youtubeId: 'Uu5G7HvNC_w',
    keyNotes: `• Paper 3 is the objective paper: lexis and structure, closest in meaning, opposite in meaning, the objective cloze passage, error identification and dialogue completion. Each item is one mark and each is answerable from the printed page alone.
• Read the instruction line above every block; it names the task. "Choose the option nearest in meaning" and "Choose the option that best completes the passage" demand opposite habits, and mixing them is the commonest self-inflicted loss.
• Grammar cues around a gap decide the word class before meaning is even considered.
  - Article + gap + noun needs an adjective: "took a ___ decision".
  - Auxiliary + gap needs a past participle or an -ing form: "has never ___ the truth".
  - Preposition + gap needs a noun or an -ing form: "before ___ the compound".
  - A gap after a noun with no conjunction needs a relative pronoun: "the officer ___ we met".
• Collocation and fixed prepositions decide items no grammar rule can settle: accuse OF, blame FOR, charged WITH, interested IN, absent FROM, good AT, married TO, depend ON, prefer to, in charge OF, on credit.
• The elimination ladder has four rungs: read the whole sentence, cross out options that break grammar, cross out options that break meaning, then choose between the survivors in twenty seconds.
• In an objective cloze passage the opening sentence normally carries no gap; use it to fix the topic, the tense and the point of view before touching gap one.
• Always look one clause to the LEFT and one clause to the RIGHT of a gap; the controlling word is often a preposition or a verb several words away.
• Do not translate from Twi, Ewe, Dagbani or Ga into the options. A phrase that sounds perfect in a first-language equivalent can be wrong English collocation.
• Time budget: forty to sixty seconds per objective item. Circle hard items on the question paper and return in a second pass; never stall on a single mark.
• Do not leave a blank. Objective marking rewards correct responses and normally imposes no separate penalty for a wrong one, so a blank is the only guaranteed zero on the paper.
• Trust the first instinct unless the passage later supplies new evidence; second-guessing without evidence is where marks leak.
• Answer-sheet discipline: match the item number on the card with the number on the paper every five items, shade the box completely, and erase any stray mark cleanly.
• Closest-in-meaning and opposite-in-meaning options are tested IN CONTEXT; the dictionary sense of an option may be right while its contextual sense is wrong.`,
    detailedNotes: {
      overview: 'The objective paper is the one section of WASSCE English where a candidate can bank marks by method rather than by talent. It rewards a repeatable routine: read the rubric, name the word class the gap demands, test collocation, eliminate, then transfer the answer without shifting numbers. Candidates who treat it as a vocabulary contest lose marks they were handed for free; candidates who treat it as a grammar-and-discipline exercise routinely clear the pass band on Paper 3 alone.',
      introduction: 'Treat every item as a three-question interrogation before you shade anything. What part of speech does the gap require? Which options survive that requirement? Which surviving option also fits the meaning of the whole passage? Answering in that order converts guesswork into educated choice, and educated choice converts a fifty percent chance into a reliable score.',
      realWorldContext: 'At an examination hall in Kumasi on the morning of the English objective paper, the invigilator collects answer scripts at a fixed hour and every candidate is still shading when the bell sounds. A boy at Achimota had thirteen correct answers stranded on the question paper because his card had drifted one line from item 27; a girl at Ho finished early, saw three blank boxes, filled each with her best elimination and converted two of them. The paper is the same; the discipline differs.',
      objectives: [
        'Name the item types that make up the WASSCE objective paper and state the task each rubric sets',
        'Determine the required word class of a gap from the grammar cues on either side of it',
        'Apply collocation and fixed-preposition knowledge to settle items that grammar alone cannot decide',
        'Use a timed elimination routine and a two-pass order to complete the paper within the clock',
        'Transfer answers to the objective sheet without numbering drift and without leaving blanks'
      ],
      sections: [
        {
          title: 'Anatomy of the Objective Paper: The Six Item Blocks',
          content: 'The objective paper is built from recognisable blocks, and each block has its own instruction line. LEXIS AND STRUCTURE sets isolated sentences with a gap and four options that are usually one word apart in form. CLOSEST IN MEANING underlines a word inside a sentence and asks for the option that carries the same sense in that particular context. OPPOSITE IN MEANING reverses the demand and asks for the sense that contradicts the underlined word. The OBJECTIVE CLOZE gives a continuous passage with numbered gaps, each with four options, and the passage itself supplies every clue. ERROR IDENTIFICATION asks which underlined part of a sentence is incorrect, so the candidate hunts grammar rather than meaning. DIALOGUE COMPLETION prints a conversation with missing turns and asks for the response that fits the situation, the speaker and the register. Knowing the block before reading the item tells the brain which question to ask, and that single habit removes most misread rubrics.',
          bulletPoints: [
            'Lexis and structure: options are usually four forms of one root word, so test word class first.',
            'Closest and opposite in meaning: the underlined word has a context sense, not a dictionary sense.',
            'Objective cloze: the passage controls the answer; grammar and cohesion beat personal preference.',
            'Error identification: exactly one underlined part is wrong, so three parts are correct and must be left alone.',
            'Dialogue completion: the reply must match the situation and the formality of the speakers.'
          ],
          keyTakeaway: 'Read the rubric first, because each item block asks a different question about the same sentence.',
          realWorldExample: 'A revision radio programme broadcast for candidates in Tamale puts one block a week on air: lexis on Monday, closest in meaning on Wednesday, and the cloze passage on Friday, because the presenter knows candidates lose marks by answering the wrong instruction.'
        },
        {
          title: 'Grammar Cues Around the Gap: Naming the Word Class',
          content: 'Before weighing meaning, read the words immediately around the gap and name the part of speech the slot requires. An article, a possessive or a demonstrative before the gap, with a noun after it, demands an adjective: "a difficult decision". A gap between an auxiliary and nothing else demands a participle: "has completed". A gap after a linking verb demands an adjective, not an adverb: "looks tired". A gap before a full clause with no conjunction demands a relative or subordinating word: "the farmer who won the award". A gap after a preposition demands a noun or an -ing form: "insisted on leaving". This one step usually removes two of the four options instantly, because WAEC almost always plants at least one option of the wrong word class. Work from the outside in: the controller of a gap is rarely the word touching it; it is the verb, preposition or noun governing the whole phrase.',
          bulletPoints: [
            'Linking verbs (be, seem, look, appear, become, taste, prove) take adjectives, never -ly adverbs.',
            'A superlative or comparative already contains its own marker, so "more better" fails grammar twice.',
            'After to in an infinitive use the base form; after to as a preposition use a noun or -ing form: "objected to leaving".',
            'A gap that follows an auxiliary and precedes an object needs a past participle, not a bare infinitive.',
            'Subject-verb concord cues survive distance: "the box of mangoes" takes a singular verb because BOX is the head.'
          ],
          keyTakeaway: 'Name the required word class from the surrounding words; wrong-class options vanish before meaning is discussed.',
          realWorldExample: 'A market notice read in class at Winneba: "We are not responsible for goods left ___" — the gap sits after the participle "left", so it needs an adjective complement, and "unattended" fits where the invented noun "unattendance" cannot.'
        },
        {
          title: 'Collocation and Fixed Prepositions as Deciders',
          content: 'Some objective items have no grammatical solution because all four options belong to the same word class; only established partnership decides them. These partnerships are collocations, and the prepositional ones are fixed: accuse a person OF a crime but blame a person FOR a fault; charge a suspect WITH theft; be interested IN, absent FROM, good AT, angry WITH a person, angry AT a remark, married TO, depend ON, prefer coffee TO tea, in charge OF the store but in the charge OF somebody. Verb-noun pairs behave the same way: pay attention, make a decision, take an exam in Ghanaian usage, do homework, keep a promise. Adjective-noun and adverb-adjective pairs close the remaining items: fast runner but heavy traffic, deeply moved but widely known. The exam-grade habit is to log such pairs in a notebook as whole chunks, because a candidate who memorises isolated words keeps failing items that were never about word meaning at all.',
          bulletPoints: [
            'Accuse OF, blame FOR, charge WITH — three near-synonyms, three different prepositions.',
            'Married TO and not married with; divorced FROM; engaged TO.',
            'Prefer takes TO before the second noun, not than: "prefers maize TO rice".',
            'Say something TO somebody but tell somebody directly; discuss takes no about.',
            'Chunks beat words: revise "make a contribution", never "make" alone.'
          ],
          keyTakeaway: 'When grammar leaves two options alive, collocation is the tie-break; learn partnerships as whole chunks.',
          realWorldExample: 'A parent at a PTA meeting in Cape Coast says the ward teacher "is good at arithmetic" and not "good in arithmetic"; the objective paper tests exactly that small preposition.'
        },
        {
          title: 'Cloze Strategy, Timing and the Objective Answer Sheet',
          content: 'Treat a cloze passage as a reading task with holes, not as forty separate items. Read the whole passage once at normal speed, letting the ungapped opening sentence fix the tense, the subject and the writer\u2019s attitude. Then return gap by gap: supply your own word before looking at the options, because a candidate who predicts the sense recognises the option that carries it. Look for cohesive chains — however signals a turn that reverses the previous clause, therefore signals a consequence, in addition signals same-direction, nevertheless concedes. Watch reference words: it, they, this and such point back, so the antecedent decides number and gender. Keep the clock honest at about forty-five seconds an item, circle anything unresolved, and finish with a second pass. On the answer sheet, work in blocks of five, matching item numbers aloud in your head, shading the box fully and leaving no mark outside the printed frames; a smudged card or a one-line drift can erase a whole column of correct work.',
          bulletPoints: [
            'Predict the sense in your own words before reading the four options.',
            'Connector gaps are logic tests: however, therefore, besides, otherwise each points a different way.',
            'Do not choose an option merely because it repeats a word used elsewhere in the passage.',
            'Budget: leave five minutes at the end for numbering checks and unfinished items.',
            'Never leave a blank: a filled box carries a chance, an empty box carries a certain zero.'
          ],
          keyTakeaway: 'Read once for sense, predict each gap, then verify the card number by number with no blanks left.',
          realWorldExample: 'In a mock exercise at a Ho school, the marker reported that more marks were lost through shading column 12 for item 21 than through wrong answers; the pupils had worked in silence and never cross-checked the card.'
        }
      ],
      commonMistakes: [
        'Answering the previous block\u2019s instruction: choosing a synonym for an antonym item, or choosing a grammatical form for a closest-in-meaning item. Fix: read the rubric aloud for every new block and say the demand in one word — SAME, OPPOSITE or COMPLETE.',
        'Weighing meaning before word class, then selecting an option that is the wrong part of speech. Fix: name the required class from the surrounding words and cross out every option that does not belong to it.',
        'Translating a first-language phrase into English and choosing the option that mirrors Twi, Ewe or Dagbani idiom. Fix: test the option in an English frame — does the preposition match the verb in English, not in the mother tongue?',
        'Spending three minutes on one item early and then blanking the last ten for lack of time. Fix: hold forty-five to sixty seconds per item, circle the hard ones, and complete a second pass with the time saved.',
        'Drifting one row on the objective card and destroying a whole column. Fix: transfer in blocks of five, read the printed number on the card before shading, and check the last item before handing in.'
      ],
      wassceExamTips: [
        'Paper 3 carries one mark per objective item, so it is the cheapest paper to score on; bank the easy blocks first and leave the cloze passage that resists you until the second pass.',
        'On Paper 1 comprehension and summary, an early run through the objective-style vocabulary blocks feeds straight into closest-in-meaning answers; revise word families once and use them on two papers.',
        'On Paper 2, a candidate who is strong on lexis and structure writes cleaner concord and tense; the same grammar cue that wins an objective item prevents an essay penalty.',
        'Transfer as you go in blocks, never item by item and never everything at the end; the final five minutes of a Paper 3 sitting belong to numbering checks, not to reading.',
        'Where an item is worth a method mark in a structured objective task, show the working in the margin: the marker can see the elimination even when the shaded letter is wrong, and that margin note has saved marks in Ghanaian centres.'
      ],
      summaryChecklist: [
        'Can I name the six item blocks of the objective paper and state what each rubric demands?',
        'Can I decide the required word class of a gap from the grammar cues beside it?',
        'Can I give ten fixed preposition partnerships that settle items grammar cannot decide?',
        'Can I work a cloze passage by predicting each gap before reading the options?',
        'Can I transfer answers to the objective sheet in blocks without numbering drift or blanks?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-oc-1',
        title: 'Closing Three Gaps in an Objective Cloze Passage',
        problem: 'Read the passage and answer the three gaps. "When the rains fail in Tamale, the price of maize ___(1) sharply, and many families manage on only one full meal a day. Extension officers, ___(2) visited the district last month, advised the farmers to form a cooperative so that they could buy fertiliser ___(3) credit." Gap 1: A rise B rises C risen D rising. Gap 2: A who B which C whose D where. Gap 3: A on B in C by D with.',
        stepByStepSolution: [
          'Step 1 (M1): Read the ungapped opening clause to fix the frame — the passage states a general truth in the present tense, so the verb at gap 1 must be a present-tense finite form, not a participle.',
          'Step 2 (M1): Find the subject controlling gap 1. The head noun is PRICE, singular, since "of maize" is only a post-modifier, so the verb must be third person singular present.',
          'Step 3 (A1): Gap 1 = B, rises. Cross-check: risen and rising have no auxiliary to carry them, and rise disagrees with a singular head.',
          'Step 4 (M1): At gap 2, the gap follows a noun referring to people (OFFICERS) and the word needed is the subject of the verb visited inside a comma-set relative clause, so a relative pronoun for persons is required.',
          'Step 5 (A1): Gap 2 = A, who. Which cannot refer to people, whose would need a following noun, and where refers to place.',
          'Step 6 (A1): Gap 3 is governed by a fixed phrase: goods bought on credit. Answer: A, on — the full answer key is 1 B, 2 A, 3 A.'
        ],
        keyTakeaway: 'Tense frame from the opening sentence, head noun for concord, fixed phrase for the preposition: three gaps, three different deciders.'
      },
      {
        id: 'ex-shs3-eng-oc-2',
        title: 'Error Identification Plus a Closest-in-Meaning Item',
        problem: '(a) Which underlined part contains the error? "No one, except the two prefects, <u>have</u> answered the questionnaire <u>sent</u> to the hall last <u>Wednesday</u>, and every reply <u>has</u> been logged." (b) Choose the option nearest in meaning to the underlined word: "The district officer gave a <u>TERSE</u> reply to the parents." A abrupt and very long B brief and sharp C polite and warm D written and secret.',
        stepByStepSolution: [
          'Step 1 (M1): For (a), ignore the interrupting phrase "except the two prefects" and locate the head of the subject; the head is the singular pronoun NO ONE, so the verb must be singular.',
          'Step 2 (M1): Test the remaining underlined parts one by one: a past participle after a passive-style link works, a proper noun can carry a capital, and a present perfect with a plural subject "replies" is sound, so three parts are correct and must be left alone.',
          'Step 3 (A1): The error is at the first underlined word, HAVE, which should read HAS: "No one ... has answered".',
          'Step 4 (M1): For (b), establish the context sense: a reply the parents remember as terse was short and blunt, so the answer must carry brevity plus sharpness, never length.',
          'Step 5 (M1): Eliminate by sense: option A contradicts brevity, C supplies the opposite manner, and D invents a medium and a motive the sentence never mentions.',
          'Step 6 (A1): Answers: (a) have; (b) B, brief and sharp.'
        ],
        keyTakeaway: 'In error items strip the sentence to its head before judging; in closest-in-meaning items substitute the option and keep the sentence true.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t3-objective-cloze',
      topicId: 'shs3-eng-t3-objective-cloze-technique',
      title: 'Objective Tests and Cloze Technique Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-oc-1',
          quizId: 'quiz-shs3-eng-t3-objective-cloze',
          questionText: 'Which word class must fill the gap in "The committee reached an ___ decision at midnight"?',
          optionA: 'a noun',
          optionB: 'an adjective',
          optionC: 'an adverb',
          optionD: 'a verb',
          correctOption: 'B',
          subConcept: 'Grammar Cues at a Gap',
          explanation: 'The article "an" stands before the gap and the noun "decision" stands after it, so the slot needs an adjective beginning with a vowel sound. A noun would leave "decision" without a head relationship, an adverb cannot modify a noun, and a verb cannot sit in this position without an auxiliary.',
          remediationTip: 'Read the two words touching the gap: article before plus noun after always equals an adjective slot.'
        },
        {
          id: 'q-shs3-oc-2',
          quizId: 'quiz-shs3-eng-t3-objective-cloze',
          questionText: 'Choose the option that completes the sentence correctly: "The police accused the youth ___ inciting the crowd."',
          optionA: 'for',
          optionB: 'with',
          optionC: 'of',
          optionD: 'on',
          correctOption: 'C',
          subConcept: 'Fixed Preposition Collocation',
          explanation: 'The verb ACCUSE takes the preposition OF: accuse a person of something. "For" belongs with BLAME (blame somebody for something) and "with" belongs with CHARGE (charge a suspect with an offence), so both are true English but wrong in this frame.',
          remediationTip: 'Learn the trio as one card: accuse OF, blame FOR, charge WITH.'
        },
        {
          id: 'q-shs3-oc-3',
          quizId: 'quiz-shs3-eng-t3-objective-cloze',
          questionText: 'After eliminating two options on an objective item, a candidate is still unsure of the answer. What is the best use of the remaining seconds?',
          optionA: 'Leave the box blank so that no wrong mark appears',
          optionB: 'Make a final choice, shade it fully and move on',
          optionC: 'Copy whichever answer the neighbour has shaded',
          optionD: 'Re-read the entire paper from the first item',
          correctOption: 'B',
          subConcept: 'No Blanks, Keep the Clock',
          explanation: 'Objective marking rewards correct responses and does not normally subtract for a wrong one, so a shaded guess still carries a chance while a blank carries a certain zero. Leaving the box empty cannot protect a mark, copying is malpractice, and re-reading the whole paper wastes the time needed for other items.',
          remediationTip: 'A blank is the only answer that can never score; choose and go.'
        },
        {
          id: 'q-shs3-oc-4',
          quizId: 'quiz-shs3-eng-t3-objective-cloze',
          questionText: 'Choose the option NEAREST in meaning to the underlined word: "The board reached a <u>UNANIMOUS</u> decision."',
          optionA: 'agreed by every member',
          optionB: 'decided by the chairperson alone',
          optionC: 'carried by a simple majority',
          optionD: 'postponed without a vote',
          correctOption: 'A',
          subConcept: 'Closest in Meaning',
          explanation: 'Unanimous means that all members agree, so option A carries the context sense. A majority vote still leaves dissenters, which is precisely what "unanimous" denies; a decision by one person is unilateral, and postponement is a different action altogether.',
          remediationTip: 'Substitute the option back into the sentence and ask whether the sentence still says the same thing.'
        },
        {
          id: 'q-shs3-oc-5',
          quizId: 'quiz-shs3-eng-t3-objective-cloze',
          questionText: 'Which underlined part contains the error? "Each of the candidates <u>were</u> asked to submit <u>their</u> script <u>before</u> the bell <u>rang</u>."',
          optionA: 'were',
          optionB: 'their',
          optionC: 'before',
          optionD: 'rang',
          correctOption: 'A',
          subConcept: 'Error Identification and Concord',
          explanation: 'The head of the subject is the singular pronoun EACH, so the verb should read "was". "Their" is acceptable here as the singular they used for a person of unknown sex, "before" correctly joins the two clauses, and "rang" is the right past form of RING.',
          remediationTip: 'In error items, strip the phrase to the head noun first; distance is what hides a concord break.'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 12 — SUMMARY WRITING AT WASSCE STANDARD
  // =========================================================================
  {
    id: 'shs3-eng-t3-summary-mastery',
    subjectId: 'english',
    level: 'SHS 3',
    term: 3,
    orderIndex: 12,
    title: 'Summary Writing at WASSCE Standard',
    description: 'Reading the prompt as a marking scheme, hunting and ranking the required points, paraphrasing without distortion, fusing sentences, and surviving a strict word ceiling.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=edlPRuVNJPI',
    youtubeId: 'edlPRuVNJPI',
    keyNotes: `• The summary instruction contains three orders: the QUANTUM of points (three effects, four causes), the LIMIT of words, and the TOPIC you must stay inside. Underline all three before reading the passage.
• "In not more than 50 words" is a ceiling, not a target. Anything written beyond the ceiling normally earns nothing, so a candidate who oversubscribes loses the extra points rather than gaining them.
• The marker counts points, not prose. Content marks are given for each distinct idea that the passage actually states; a beautiful paragraph carrying two ideas scores two.
• Ranking rule: take the points the passage states plainly and in its own emphasis first; drop illustrations, statistics, proverbs, dialogue and repeated restatements of one idea.
• Paraphrase by changing the word class or the structure, never the sense: "The inhabitants were compelled to evacuate" becomes "The residents had to leave".
• Keep what must not be paraphrased: personal names, place names, institutions, technical terms and dates. Tamale, Volta River Authority and galamsey stay as printed.
• Quotation is the safest way to lose a content mark; a lifted phrase tells the marker nothing was understood. Paraphrase even the shortest point.
• Sentence fusion is how word limits are met. Two short sentences become one: a reason clause, a participle, a relative clause or a shared verb does the work of twenty words.
  - "Fuel rose. Fares doubled." becomes "As fuel rose, fares doubled."
  - "Farmers cannot store maize. It rots in storehouses." becomes "Farmers cannot store maize, so it rots in storehouses."
• Connectives carry marks because they fuse and signpost at once: and, so, because, as well as, in addition, consequently, owing to.
• Never import inference. If the passage says only that cocoa prices are low, a summary cannot claim that farmers are poor, indebted or unhappy; that idea is yours, not the writer\u2019s, and it scores nothing.
• Do not add an introduction, a conclusion, a title or a moral lesson. The instruction asks for points, so begin with the first point.
• Write the points in the order the passage gives them unless the instruction asks otherwise; reordering wastes thinking time and risks a dropped point.
• Count words as the marker counts them: a hyphenated unit such as "pipe-borne" is one word, a numeral is one word, and every small word is counted.
• Typical mark killers: answering the wrong quantum, writing 78 words under a 50-word ceiling, copying a whole sentence, and adding personal opinion about the issue.`,
    detailedNotes: {
      overview: 'Summary is the one Paper 1 task with a countable right answer and a hard length limit, and it is where SHS 3 candidates still lose marks in the final week. Marks are awarded point by point for ideas the passage states, expressed in the candidate\u2019s own words and squeezed inside a word ceiling. Candidates who write flowing commentary, or who copy the sentences they like, are answering a question nobody asked.',
      introduction: 'Work summary in five fixed moves: decode the instruction, read the passage once for the topic, underline every sentence that carries a required point, fuse and paraphrase the best ones, then count words and cut. Nothing in that routine depends on talent, and every stage is worth marks on its own.',
      realWorldContext: 'In a mock exercise set for candidates at a school in Kumasi, the passage printed a district assembly report on the collapse of the road to a farming community near Techiman, and the instruction read: "In not more than 60 words, state three consequences of the collapsed road." Most scripts named the cause of the collapse instead, a point the passage supplied but the instruction never requested. The markers recorded that fewer than half the scripts obeyed the word ceiling, and a GES-style circular later reminded centres that the same instruction wording would appear in the main examination.',
      objectives: [
        'Decode a summary instruction into quantum, topic and word limit before touching the passage',
        'Select and rank only the points the passage states under the requested heading',
        'Paraphrase each selected point in the candidate\u2019s own words without changing the sense',
        'Fuse related points with connectives and reduced clauses to satisfy a strict word ceiling',
        'Check the finished summary against the instruction for topic drift, inference and word count'
      ],
      sections: [
        {
          title: 'The Instruction Is the Marking Scheme',
          content: 'Before reading a single word of the passage, dissect the instruction. The verb tells you the mode: STATE means bare points with no argument, EXPLAIN means a point plus the passage reason, DESCRIBE means features rather than causes. The quantum tells you how many marks are on the table: three effects means three content marks, and a fourth point costs you words and gains nothing. The topic phrase bounds the content: consequences of the collapsed road is not the same request as causes of the collapse, even though both appear in the passage. The word ceiling decides your compression budget: fifty words for three points forces roughly sixteen words a point. Write the quantum and the ceiling in the margin of your answer booklet and keep them in view while you draft.',
          bulletPoints: [
            'Underline the operative noun in the instruction: effects, causes, problems, advantages, reasons.',
            'Circle the number required, and count the points you draft against that number.',
            'Rewrite the instruction in your own words as a question before you hunt for answers.',
            'Anything outside the topic phrase, however true, is not a point in this answer.',
            'Ignore the title of the passage; the instruction, not the title, states the demand.'
          ],
          keyTakeaway: 'The instruction tells you how many marks exist and what they are for; read it before the passage.',
          realWorldExample: 'A revision programme on Ghanaian radio sets one instruction a day for candidates to decode aloud: "In not more than forty words, give three reasons why traders in Makola prefer daytime deliveries." Listeners who only listen for answers miss the exercise, which is about the instruction.'
        },
        {
          title: 'Hunting, Ranking and Dropping Points',
          content: 'Read the passage once at normal speed to know what it is about, then read again with a pencil and mark every sentence that carries a point under the requested heading. Next to each mark note the paragraph so you can find it again. Now rank: a point stated as a direct consequence or cause in its own clause outranks a point smuggled inside an example, a quotation or a statistic. Merge duplicates before you count; two sentences that express one idea in different words are one point, and treating them as two inflates your list and wrecks your word count. Only after ranking should you decide which three or four points to write, and the safest choice is the points the writer spent most words on.',
          bulletPoints: [
            'A point is a clause with a subject and a verb, not a keyword you noticed.',
            'Repeat ideas count once: two sentences restating one effect is one point.',
            'Illustrations, proverbs and dialogue carry no marks; they decorate the points you already have.',
            'Numbers and dates usually belong to a point rather than forming one themselves.',
            'Prefer points in the passage\u2019s own emphasis; the writer gives most weight to the ideas repeated.'
          ],
          keyTakeaway: 'Mark candidate points first, then rank and merge; the summary is written only after the list is honest.',
          realWorldExample: 'A past-style passage on the galamsey menace devotes two paragraphs to silted rivers and one sentence to a chief\u2019s complaint; candidates who list the chief\u2019s complaint as one of three effects have ranked decoration above substance.'
        },
        {
          title: 'Paraphrase Without Distortion',
          content: 'Paraphrase means keeping the sense and changing the language. Four safe devices do the work. Change the word class: "they decided quickly" becomes "their quick decision". Change the voice: "the assembly repaired the bridge" becomes "the bridge was repaired". Swap in a near-synonym that the context supports: "compelled" becomes "forced", "dwellings" becomes "homes". Turn a relative clause into a shorter phrase: "farmers who have no storage" becomes "farmers without storage", and "pupils who were late" becomes "late pupils". Two things must never change: the factual content and the named detail. Proper nouns, place names, institutions, technical terms and figures stay exactly as printed, because paraphrasing Tamale into a city of the north looks clever and reads as vague.',
          bulletPoints: [
            'Never copy four consecutive words from the passage; that is the practical test of lifting.',
            'Keep the tense and the certainty of the original; a may that becomes a will is a distortion.',
            'Retain proper nouns and technical terms: Volta River Authority, cocoa, galamsey, court.',
            'Do not shorten by dropping the qualifier: "a slight increase" is not "an increase".',
            'Own words plus exact sense is what the content mark rewards; fancy vocabulary earns nothing extra.'
          ],
          keyTakeaway: 'Change the clothing, keep the body: new words, identical sense, untouched proper nouns.',
          realWorldExample: 'A passage sentence reads: "Traders at Agbogoloshie were compelled to vacate their stalls precipitately." A candidate writes: "The Agbogoloshie traders had to leave their stalls suddenly." Two paraphrases, one retained place name, full mark.'
        },
        {
          title: 'Fusion, Connectives and the Word Ceiling',
          content: 'Compression is won at the sentence level. Join a cause to its effect with so or because and save a whole subject. Reduce an adverbial clause to a participle: "Because the lorry broke down, the goods spoiled" becomes "The broken-down lorry spoiled the goods". Share one verb between two objects instead of repeating a clause. Use a colon or a semicolon only if your handwriting is clear; most markers prefer simple coordination. Then count. Words with a hyphen, numerals and small function words are all counted, so count twice, and if you are over the ceiling, cut adjectives and repeated nouns before you cut a point. Leave no blank line and add no opening sentence about the passage; start with point one and stop the moment the last point is complete.',
          bulletPoints: [
            'One connective can replace one whole sentence: use as, since, so that, owing to, besides.',
            'Nominalisation compresses: "because the price rose sharply" becomes "the sharp price rise".',
            'Cut examples first, then adjectives, then adverbs; never cut a point to save three words.',
            'A summary of 58 words under a 60-word ceiling beats a summary of 90 words with five points.',
            'Draft, count, then rewrite neatly; the marker reads the final copy and awards what is legible.'
          ],
          keyTakeaway: 'Meet the ceiling by fusing sentences, never by deleting a required point.',
          realWorldExample: 'Four separate points on a Ho market report fuse into: "As fares doubled, pupils left private schools and parents shopped less, while traders sold on credit and were still owed their money." Twenty-two words, four content points.'
        }
      ],
      commonMistakes: [
        'Answering a different demand from the one printed: listing causes when the instruction asked for effects. Fix: write the operative word of the instruction at the top of the draft and check every point against it.',
        'Copying sentences from the passage as a shortcut. Fix: put the passage face down after marking the points and write the summary from your own margin notes.',
        'Exceeding the word ceiling with extra detail. Fix: count words in the draft, then delete examples and modifiers until you sit inside the limit with all required points intact.',
        'Adding inference, sympathy or a moral: claiming that farmers are poor, or that the government should act, when the passage states no such thing. Fix: for each point ask where in the passage it is stated, and erase it if you cannot point to a line.',
        'Wrapping the summary in an introduction and conclusion. Fix: begin with the first point and end with the last; nothing else is marked and everything else costs words.'
      ],
      wassceExamTips: [
        'Summary sits on Paper 1 with comprehension; do it after the comprehension questions, because the earlier reading has already made the passage familiar and content points cheap.',
        'Marks on Paper 1 summary are content marks plus a language mark: the number of points requested equals the number of content marks available, so a two-point answer to a three-point question caps your score before expression is judged.',
        'On Paper 2, an article or a speech has no word ceiling so severe, but the same fusion skill keeps your paragraphs tight; practise compression on Paper 1 and reap it on Paper 2.',
        'Objective-style vocabulary work on Paper 3 feeds summary directly: a candidate who can paraphrase under time pressure in the cloze passage can paraphrase a content point here.',
        'Budget on a 100-minute Paper 1: five minutes on the instruction and first reading, ten minutes marking and ranking points, fifteen minutes drafting, five minutes counting and rewriting. Method marks are hidden in that plan, because the marker can only award what appears in the final copy.'
      ],
      summaryChecklist: [
        'Can I state the quantum, the topic and the word ceiling of any summary instruction in one breath?',
        'Can I mark every candidate point in a passage and then merge the duplicates?',
        'Can I paraphrase a passage sentence without lifting four words in a row?',
        'Can I fuse two or three points into one sentence using a connective or a participle?',
        'Can I produce a final summary that sits inside the ceiling with every required point intact?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-sm-1',
        title: 'Three Effects of Illegal Mining in Sixty Words',
        problem: 'Passage extract: "Along the Pra, the streams have been so heavily silted by illegal mining that the water treatment plant has twice shut down, and the communities on the bank now fetch water from the same dug-outs the machines use. Fertile land has been dug up and abandoned in pits, so cocoa and cassava growers have lost their harvests and many have moved to the cities in search of work. Tests have also shown mercury in the water, and the hospital at Tarkwa reports a rise in skin complaints among people who bathe there, while boys who once sat the basic school certificate now spend their days at the pits." In not more than 60 words, state three effects of illegal mining on these communities.',
        stepByStepSolution: [
          'Step 1 (M1): Decode the instruction. Quantum: three points. Topic: EFFECTS on the communities, not causes of mining and not the methods used. Ceiling: 60 words, so roughly 20 words a point.',
          'Step 2 (M1): Mark every effect stated: silted streams, plant shut down, no pipe-borne water, land dug into pits, lost harvests, migration to cities, mercury in water, skin complaints, boys leaving school.',
          'Step 3 (M1): Merge and rank into three points. Water: silt plus closed plant plus dug-out water is one effect. Livelihood: destroyed farmland, lost harvests and migration is one effect. Health and education: mercury, skin complaints and school-leaving, which the passage stresses twice, form the third.',
          'Step 4 (M1): Paraphrase and fuse with the ceiling in view, keeping the names Pra and Tarkwa as printed and dropping the detail about the certificate examination.',
          'Step 5 (M1): Count the draft: 58 words, inside 60, with exactly three distinct effects and no opinion added.',
          'Step 6 (A1): Model answer (58 words): "Illegal mining has silted the Pra and forced treatment plants to close, so towns lack pipe-borne water. It has covered fertile land with pits, causing cocoa and cassava farmers to lose income and migrate to the cities. Mercury in the water has produced skin complaints at the Tarkwa hospital, and boys have left school to work the pits."'
        ],
        keyTakeaway: 'Merge the water detail into one point, keep the named places, and count before you copy.'
      },
      {
        id: 'ex-shs3-eng-sm-2',
        title: 'Fusing Four Points into a Thirty-Word Summary',
        problem: 'Four points extracted from a report on transport in Ho: (1) The price of fuel rose sharply. (2) Trotro operators doubled their fares. (3) Many parents withdrew their children from private schools. (4) Market women now sell on credit and are owed money. In not more than 30 words, summarise these points as one continuous statement.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the logical shape of the four points: (1) and (2) are cause and effect, (3) is the consequence on households, (4) is a separate but related commercial consequence.',
          'Step 2 (M1): Fuse the cause pair with a subordinating connective instead of repeating two subjects: "As fuel prices rose, trotro fares doubled" costs eight words and keeps both points.',
          'Step 3 (M1): Attach the household consequence with SO, which carries the causal chain without a new sentence: "so parents withdrew pupils from private schools".',
          'Step 4 (M1): Add the fourth point with WHILE to keep the two unlike consequences apart in one sentence, then trim modifiers such as "in Ho" and "sharply" if the count is tight.',
          'Step 5 (M1): Count: every small word included.',
          'Step 6 (A1): Model answer (29 words): "As fuel prices rose, trotro fares doubled, so parents in Ho withdrew pupils from private schools. Market women now sell on credit, and much of their money remains unpaid."'
        ],
        keyTakeaway: 'Cause, effect and side effect fit in one sentence when as, so and while do the joining.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t3-summary',
      topicId: 'shs3-eng-t3-summary-mastery',
      title: 'Summary Writing Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-sm-1',
          quizId: 'quiz-shs3-eng-t3-summary',
          questionText: 'The instruction reads: "In not more than 100 words, state FOUR causes of rural youth unemployment." What does it oblige the candidate to do?',
          optionA: 'Summarise the whole passage in about 100 words',
          optionB: 'State four causes and stay within 100 words',
          optionC: 'Give causes and effects with a short conclusion',
          optionD: 'Write at least 100 words on youth unemployment',
          correctOption: 'B',
          subConcept: 'Reading the Instruction',
          explanation: 'The instruction sets a quantum of four causes and a ceiling of 100 words, and nothing else. Option A ignores the requested angle, C adds effects and a conclusion that were never asked for, and D turns a maximum into a minimum.',
          remediationTip: 'Extract three facts from every instruction: how many points, which heading, what word ceiling.'
        },
        {
          id: 'q-shs3-sm-2',
          quizId: 'quiz-shs3-eng-t3-summary',
          questionText: 'In WASSCE summary marking, a content point normally scores when it is',
          optionA: 'lifted word for word from the passage',
          optionB: 'expressed in the candidate\u2019s own words and stated by the passage',
          optionC: 'an inference the passage hints at but never states',
          optionD: 'written in the same order as the paragraphs appear',
          correctOption: 'B',
          subConcept: 'Point Scoring',
          explanation: 'A point earns a mark when the idea is genuinely in the passage and the language is the candidate\u2019s own. Lifting shows no command of expression, inference is not the writer\u2019s stated point, and order affects readability but never the award of a content mark.',
          remediationTip: 'Two tests per point: can I point to the line, and is the wording mine?'
        },
        {
          id: 'q-shs3-sm-3',
          quizId: 'quiz-shs3-eng-t3-summary',
          questionText: 'An instruction sets a ceiling of 50 words and a candidate writes 68 words. What is the usual consequence?',
          optionA: 'No consequence, because only content is marked',
          optionB: 'The script is disqualified for breaking the instruction',
          optionC: 'Material beyond the ceiling is normally not credited, so the extra words waste time',
          optionD: 'Extra detail attracts additional marks for range',
          correctOption: 'C',
          subConcept: 'Word Limit Enforcement',
          explanation: 'A ceiling is a ceiling: markers typically decline to award points that fall beyond the stated word limit, so over-writing costs marks and time without disqualifying the script. Content is still marked, but only inside the allowed length, and detail beyond the demand earns nothing extra.',
          remediationTip: 'Draft, count, then trim modifiers and examples until you are inside the limit.'
        },
        {
          id: 'q-shs3-sm-4',
          quizId: 'quiz-shs3-eng-t3-summary',
          questionText: 'Which option best fuses the two points "Smallholders cannot store their maize" and "The maize rots before reaching the market" without changing the sense?',
          optionA: 'Smallholders cannot store their maize, so it rots before reaching the market',
          optionB: 'Smallholders cannot store their maize, although it rots before reaching the market',
          optionC: 'Smallholders store their maize well, and it rots after reaching the market',
          optionD: 'Smallholders may store their maize if the market is near',
          correctOption: 'A',
          subConcept: 'Sentence Fusion',
          explanation: 'SO records the result relationship the two points carry, in a single sentence. Although reverses the logic into concession, C contradicts both points, and D invents a condition the passage never mentions.',
          remediationTip: 'Name the relationship first, reason, result, contrast or condition, then pick the connective that matches it.'
        },
        {
          id: 'q-shs3-sm-5',
          quizId: 'quiz-shs3-eng-t3-summary',
          questionText: 'A candidate writes "Cocoa farmers in the Western Region are trapped in debt" when the passage only states that farm-gate prices are low. Why is the point likely to fail?',
          optionA: 'It is too short to count as a point',
          optionB: 'It names a region the passage did not mention',
          optionC: 'It adds an inference the passage never states',
          optionD: 'It paraphrases instead of quoting the passage',
          correctOption: 'C',
          subConcept: 'Avoiding Inference',
          explanation: 'Low prices do not by themselves establish debt; the claim is the candidate\u2019s reasoning, and summary marks go to points the writer actually states. Length is not the problem, the region detail is plausible and irrelevant to the failure, and paraphrasing is required, not penalised.',
          remediationTip: 'Ask of every point: which line of the passage says this? If no line does, strike it out.'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 13 — ORALS REVISION: MINIMAL PAIRS, HOMOPHONES, IPA
  // =========================================================================
  {
    id: 'shs3-eng-t3-orals-revision',
    subjectId: 'english',
    level: 'SHS 3',
    term: 3,
    orderIndex: 13,
    title: 'Orals Revision: Minimal Pairs, Homophones and IPA Symbols',
    description: 'The vowel and consonant set WASSCE actually tests, minimal-pair drilling, homophone and homograph sets, the schwa and its positions, syllable division, stress, intonation and the Ghanaian sounds that slip.',
    isFreeTrial: false,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=CyFiZEtagyk',
    youtubeId: 'CyFiZEtagyk',
    keyNotes: `• The British English inventory WASSCE draws from has 12 pure vowels (monophthongs), 8 diphthongs and 24 consonants. Letters are not sounds: "enough" has six letters but four sounds.
• Long and short vowel pairs that return every year: /i:/ seat against /ɪ/ sit; /u:/ food against /ʊ/ good; /ɔ:/ lord against /ɒ/ lodgings; /ɑ:/ class against /ʌ/ pass; /e/ bed against /æ/ bad.
• The remaining pure vowels are /ɜ:/ bird, work, learn and /ə/ about, teacher. Only /ə/ never carries a full stress, and it is the commonest sound in English speech.
• The eight diphthongs: /eɪ/ face, break; /aɪ/ five, height; /ɔɪ/ boy, oil; /əʊ/ boat, sew; /aʊ/ now, plough; /ɪə/ near, here; /eə/ hair, where; /ʊə/ tour, poor.
• Consonant pairs to keep straight: voiceless and voiced twins /p b/, /t d/, /k ɡ/, /f v/, /θ ð/, /s z/, /ʃ ʒ/; plus the affricates /tʃ/ church and /dʒ/ judge, and the nasals /m n ŋ/ sing, bank.
• A MINIMAL PAIR differs in exactly one sound and changes meaning: pin - bin, cap - cab, think - sink, full - fool, light - right, wet - vet.
• Homophones sound identical, differ in spelling and meaning: pair - pare - pear, wood - would, sea - see, fair - fare, tale - tail, waste - waist, knew - new, four - for.
• Homographs are spelled identically but pronounced differently: READ present /ri:d/ and READ past /rɛd/; LEAD the metal /lɛd/ and LEAD to guide /li:d/; TEAR of the eye /tɪə/ and TEAR to rip /tɛə/; LIVE /lɪv/ and LIVE /laɪv/.
• Where the schwa sits: the unstressed syllable before the beat, as in the first letter a of "about" and of "support"; the syllable after the beat, as in the last letter of "teacher" and of "sofa"; and every weak form of a structure word (of /əv/, for /fə/, at /ət/, and /ə/, can /kən/).
• Syllable counting rule: one syllable per vowel SOUND, not per vowel letter. "Farm" has one syllable, "farmer" has two, "queue" has one though it has five letters, "beautiful" has three.
• Word stress recall: most two-syllable nouns and adjectives stress the first syllable (PREsent, CHILdhood), most two-syllable verbs stress the second (preSENT, forGET). Suffixes such as -tion, -sion, -ic, -ian and -ity pull the stress onto the syllable immediately before them: inFORmation, deCIsion, ecoNOMic, muSIcian, uniVERsity.
• Intonation recall: falling tone for statements, commands and WH-questions; rising tone for yes-or-no questions, non-final items in a list and genuine tag questions; fall-rise for polite doubt or reservation.
• Sounds Ghanaian candidates typically confuse: /l/ and /r/ interchanged, /θ/ replaced by /s/ or /t/, /ð/ by /z/ or /d/, /z/ by /s/ so that "zoo" becomes "soo", final consonants and clusters dropped so "cold" becomes "co" and "tests" becomes "tes", and the long-short vowel contrast lost so "ship" is heard as "sheep".
• On Paper 1 the orals items are phrased as: choose the word whose underlined part is pronounced differently; give the sound represented by the underlined letters; choose the word with the same stress pattern; state the number of syllables; to which question is this sentence the appropriate answer; choose the best response to complete the conversation.`,
    detailedNotes: {
      overview: 'Orals is the section where well-prepared candidates collect marks that strong writers throw away, because every item has one correct answer and no marker exercises judgement. SHS 3 revision is not about learning new sounds; it is about drilling the twelve vowels, eight diphthongs and twenty-four consonants that WASSCE keeps returning to, and about fixing the handful of substitutions Ghanaian first languages push into English. The candidate who can hear the difference can always write the difference.',
      introduction: 'Revise with your mouth and your ear, not only your eyes. Say each set of pairs aloud, record it on a phone, and play it back the same evening. Then practise the printed formats, because the paper tests whether you can identify a sound in writing, and identification is a separate skill from production.',
      realWorldContext: 'At a school in Tamale the English teacher runs a five-minute orals drill before assembly, and the head of the English section reports that the odd-one-out pronunciation items are the ones pupils lose most often, not because the ear fails but because the eye is trusted: candidates read the spelling instead of hearing the sound. A girl from Ho wrote down /ʃ/ for the underlined letters in "session" and lost the mark, although she had pronounced the word correctly that very morning.',
      objectives: [
        'Transcribe English words with the vowel, diphthong and consonant symbols WASSCE tests',
        'Construct and discriminate minimal pairs for the long-short vowel and consonant contrasts',
        'Separate homophones from homographs and place each in the correct written context',
        'Locate the schwa in unstressed syllables and weak forms, and count syllables by vowel sound',
        'Identify Ghanaian first-language substitutions and correct them in reading aloud and response items'
      ],
      sections: [
        {
          title: 'The Sound Inventory WASSCE Actually Tests',
          content: 'Learn the chart by families rather than by alphabet. The twelve pure vowels divide into long pairs and short partners: /i:/ against /ɪ/, /u:/ against /ʊ/, /ɔ:/ against /ɒ/, /ɑ:/ against /ʌ/, with /e/, /æ/, /ɜ:/ and /ə/ standing outside those pairs. The eight diphthongs are glides written as two symbols run together: /eɪ aɪ ɔɪ əʊ aʊ ɪə eə ʊə/. The twenty-four consonants include the three voiceless and voiced pairs that Ghanaian speakers merge, the two affricates, and the velar nasal /ŋ/, which never begins a word in English although it appears in the middle of "singer" and at the end of "sing". Anchor every symbol to one or two witness words you know perfectly: for /æ/ use "cat" and "have"; for /ɜ:/ use "bird" and "work"; for /ə/ use "about" and "teacher". A symbol with no witness word is a symbol you will misapply in an exam.',
          bulletPoints: [
            'Spelling is not sound: the letters OO carry /u:/ in "food", /ʊ/ in "book" and /ʌ/ in "blood", while -ough is read three different ways in "through", "tough" and "thought", so trust the ear.',
            'Silent letters never enter a sound count: "enough" has six letters but only four sounds, and "know" has four letters but two sounds.',
            'The symbol /ɡ/ in transcription is the script g, not the letter g you type, and /ʃ/, /ʒ/, /ŋ/, /θ/, /ð/, /æ/ and /ə/ are the ones markers expect to see written correctly.',
            'Voiceless consonants use no vocal cords: /p t k f s θ/; their voiced twins /b d ɡ v z ð/ do. Hold a hand to the throat to check.',
            'The symbols /ɪ/, /ʊ/, /æ/, /ə/, /ɒ/, /ɑ:/ and /ʌ/ settle most WASSCE vowel items, so learn them as reflexes.'
          ],
          keyTakeaway: 'Anchor every IPA symbol to two witness words and always transcribe from sound, never from spelling.',
          realWorldExample: 'A pupil at Achimota writes "chair" as /tʃɛə/: the affricate /tʃ/ from "church" plus the diphthong /ɛə/ from "hair", two sounds that the four letters hide completely.'
        },
        {
          title: 'Minimal Pairs and the Odd-One-Out Item',
          content: 'A minimal pair holds everything constant except one sound: "pin" and "bin" differ only in the initial consonant, "cap" and "cab" only in the final one, "ship" and "sheep" only in the vowel quality. Drill them in sets of the same frame, and drill in all three positions, because an item may test the contrast initially, medially or finally. The printed item then asks you to find the word whose underlined part is pronounced differently from the other three, and the reliable method is: read all four options, say each silently in your head, transcribe only the underlined part, then group the three that match. WAEC nearly always hides the odd sound inside an unhelpful spelling, as with "blood" carrying /ʌ/ among words spelled with OO, or "sweat" carrying /e/ among words spelled with EA.',
          bulletPoints: [
            'Vowel sets to drill: sheep-ship, fool-full, lord-lodging, cart-cut, pet-pat.',
            'Consonant sets to drill: pin-bin, tie-die, cap-cab, fan-van, think-sink, then-den, ship-chip, measure-pleasure.',
            'Read all four options before choosing; the fourth word often changes what the first three mean.',
            'If two options seem odd, one of your transcriptions is wrong, so re-say the words aloud rather than re-read them.',
            'Keep a written log of the pairs you miss; the same five contrasts return every sitting.'
          ],
          keyTakeaway: 'Drill one sound at a time in a fixed frame, and answer odd-one-out items from the mouth, not the eye.',
          realWorldExample: 'In a Koforidua mock the item paired "great", "sweat", "break" and "steak"; three carried /eɪ/ and only "sweat" carried /e/, which most candidates read as an EA spelling rather than heard as a sound.'
        },
        {
          title: 'Homophones, Homographs, the Schwa and Syllable Counting',
          content: 'Homophones are a spelling problem wearing a sound mask: pair, pare and pear all carry /pɛə/, so the sentence slot, not the ear, must decide which to write. Homographs are the reverse: read present and read past are spelled alike and sound unlike, and the tense of the sentence tells you which pronunciation is correct. Beneath both sits the schwa /ə/, the neutral vowel that appears in every unstressed syllable: the first letter a of "about", the ending of "teacher", the second syllable of "photography", and in the weak forms of structure words such as of, for, at, and, can, was. This is why syllable counting must be done by vowel sound: "farm" has one syllable although it carries two vowel letters, "queue" has one although it is spelled with five, and "beautiful" has three because it has three vowel sounds. Write the word, dot each vowel sound you actually pronounce, and the dot count is the syllable count.',
          bulletPoints: [
            'Work the standard homophone sets: pair-pare-pear, wood-would, sea-see, fair-fare, some-sum, past-passed, than-then, mail-male, night-knight, waste-waist.',
            'Homographs to pronounce correctly: read, lead, tear, bow, live, wind, desert, refuse; the meaning decides the sound.',
            'The schwa never carries the main stress, and a word can hold two of them, as in "banana" and "separate" as an adjective.',
            'Weak forms are not sloppy speech: "a cup of tea" is heard as /ə ˈkʌp əv ˈti:/, with three stressed beats only.',
            'Syllable test: hum the word and count the jaw openings; each opening is one syllable.'
          ],
          keyTakeaway: 'Sound-alike words are settled by the sentence slot; syllable counts are settled by vowel sounds.',
          realWorldExample: 'A sentence correction in a Ho classroom: "The tail of the dog chased its tale" is nonsense, yet both words are /teɪl/; only the grammar of the sentence can put them back.'
        },
        {
          title: 'Ghanaian Interference, Stress and the Orals Question Formats',
          content: 'First-language habits push specific substitutions into Ghanaian English, and WASSCE orals is built around them. /l/ and /r/ are interchanged, so "free" surfaces as "flee". The dental fricatives are replaced, /θ/ by /s/ or /t/ and /ð/ by /z/, /d/ or /v/, so "think" becomes "sink" and "this" becomes "dis". The voiced sibilant /z/ is often devoiced, making "zoo" sound like "soo". Final consonants and clusters are dropped, so "cold" loses its ending and "cards" becomes "ca". Vowel length stops distinguishing words, which collapses sheep into ship. Counter all of these in reading-aloud tasks by exaggerating the final consonant and holding the long vowels. Then learn the formats: an item may ask for the odd pronunciation out of four, the sound represented by underlined letters, the word with the same stress pattern as a given word, the number of syllables, the question to which a sentence with a capitalised word is the appropriate answer, or the best response in a short conversation. Each format has one mechanical trick, and each trick can be drilled in a week.',
          bulletPoints: [
            'The emphatic-stress item is answered by contradicting only the capitalised word; every other element must remain true.',
            'Conversation-completion items test register: a greeting, a refusal, an apology or a request, not grammar.',
            'Stress-pattern items: match the beat count, so "machine" pairs with "hotel", not with "payment".',
            'Rising intonation marks a yes-or-no question; falling intonation marks a WH-question, however untrue the option sounds.',
            'In transcription items write only symbols you are certain of; a wrong symbol is marked as an error, a missing one can still earn method credit.'
          ],
          keyTakeaway: 'Name the substitution your language makes, drill the pairs that expose it, then answer the printed format with its fixed trick.',
          realWorldExample: 'A radio revision programme for candidates at Makola sets one orals format a day: on Monday the odd-one-out, on Wednesday the stress pattern, on Friday the emphatic-stress question, so that no candidate meets a format cold in the hall.'
        }
      ],
      commonMistakes: [
        'Reading the spelling instead of hearing the sound, so "blood" is filed with "food" and "roof". Fix: say each option in your head and transcribe the underlined part before looking at the letters again.',
        'Confusing homophones in writing because the sound is shared: writing "pare" where "pair" is needed. Fix: identify the slot the sentence requires, noun, verb or modifier, then choose the matching spelling.',
        'Pronouncing every vowel at full strength, which destroys the rhythm of a passage and hides word boundaries in a reading-aloud task. Fix: reduce unstressed syllables to schwa and keep the stressed beats.',
        'Dropping final consonants and clusters when nervous, especially the plural -s and the past -ed, which changes meaning and costs the mark in a repetition task. Fix: exaggerate the ending during rehearsal.',
        'Writing a phonetic symbol that is guessed, or using the typed letter g instead of the transcription symbol /ɡ/. Fix: rehearse the handful of special shapes /ʃ ʒ ŋ θ ð æ ə ɒ ɑ:/ until they are automatic.'
      ],
      wassceExamTips: [
        'The orals items are on Paper 1, and they are the fastest marks on the paper: read all four options first, and never spend more than forty seconds on a single pronunciation item.',
        'In the odd-one-out format the odd sound is nearly always a vowel, so transcribe the vowel of each option before considering the consonants.',
        'For comprehension and summary later on the same Paper 1, the same words recur; a candidate who has drilled the sound of "through", "tough" and "thought" also reads them faster in a passage.',
        'On Paper 2, orals work pays indirectly: candidates who hear the difference between "advice" and "advise" stop misspelling them, and expression marks follow the spelling.',
        'On Paper 3 the lexis items include word pairs that orals teaches as homophones; revise the sets once and use them on three papers, and keep the stress rules ready for the syllable and stress-format items.'
      ],
      summaryChecklist: [
        'Can I transcribe a simple word using the twelve vowel symbols, eight diphthongs and the twenty-four consonants?',
        'Can I build a minimal pair for each long-short vowel contrast and name the single differing sound?',
        'Can I separate homophones from homographs and place each correctly in a sentence?',
        'Can I locate the schwa in a word and count its syllables by vowel sound?',
        'Can I state which Ghanaian substitution is being tested and answer the printed format correctly?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-or-1',
        title: 'Odd-One-Out and the Letters Behind the Sound',
        problem: '(a) Choose the word whose underlined vowel sound is different from the other three: A m<u>oo</u>n  B sch<u>oo</u>l  C bl<u>oo</u>d  D f<u>oo</u>d. (b) Give the sound represented by the underlined letters in "ses<u>s</u>ion" and in "mea<u>s</u>ure".',
        stepByStepSolution: [
          'Step 1 (M1): Ignore the spelling and say each word of (a) silently, noting only the vowel: moon carries the long /u:/ of "goose", school the same /u:/, food the same /u:/ again, while blood is /bʌd/.',
          'Step 2 (M1): Group the three that match: moon, school and food all hold the long /u:/, so the odd member must be blood, whose OO has been reduced to the short /ʌ/ of "cup".',
          'Step 3 (M1): Re-check the survivor against the long-short pair /u:/ and /ʊ/: blood carries neither, since it is pronounced with /ʌ/ and ends in /d/, so it is genuinely the outlier.',
          'Step 4 (A1): Answer to (a): C, blood.',
          'Step 5 (M1): For (b), pronounce the words and name the sounds behind the letter groups: the double s in "session" stands for /ʃ/, the sound of "sh", while the s between vowels in "measure" stands for /ʒ/, the sound at the end of "vision".',
          'Step 6 (A1): Answers: (a) C blood; (b) session = /ʃ/, measure = /ʒ/.'
        ],
        keyTakeaway: 'Say the words first, spell them last; the same letter group can stand for two different sounds.'
      },
      {
        id: 'ex-shs3-eng-or-2',
        title: 'Stress Shift and Syllable Count in a Word Family',
        problem: 'The word family PHOTOGRAPH, PHOTOGRAPHY, PHOTOGRAPHIC is printed in capitals. (a) Mark the stressed syllable in each word. (b) State the number of syllables in each. (c) Which of the three carries its main stress on the same syllable NUMBER as "machine"?',
        stepByStepSolution: [
          'Step 1 (M1): Say each word and feel which syllable is longer, louder and higher; that syllable is the stressed one, and the rest reduce toward schwa.',
          'Step 2 (M1): Apply the suffix rule as a check: -tion, -sion, -ic, -ian and -ity pull the stress to the syllable immediately before them, so phoTOgraphy and photoGRAPHic follow the rule, while the simple noun keeps the first-syllable noun pattern.',
          'Step 3 (A1): Stress placement: PHOtograph on the first syllable, phoTOgraphy on the second, photoGRAPHic on the third.',
          'Step 4 (M1): Count vowel sounds to get syllables, dotting each jaw opening: pho-to-graph has three; the -graphy and -ic forms add a syllable each.',
          'Step 5 (A1): Syllable totals: photograph three, photography four, photographic four.',
          'Step 6 (A1): "Machine" carries its beat on its second syllable, so the matching word is phoTOgraphy, whose stress also falls on the second syllable when counted from the start; PHOtograph (first) and photoGRAPHic (third) do not match. Full answer: stress on syllables one, two and three, counts of three, four and four, and the match is photography.'
        ],
        keyTakeaway: 'One root, three stresses: the suffix decides the beat, and vowel sounds decide the syllable count.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t3-orals',
      topicId: 'shs3-eng-t3-orals-revision',
      title: 'Orals Revision Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-or-1',
          quizId: 'quiz-shs3-eng-t3-orals',
          questionText: 'How many SOUNDS are there in the word "enough"?',
          optionA: 'three',
          optionB: 'four',
          optionC: 'five',
          optionD: 'six',
          correctOption: 'B',
          subConcept: 'Sounds Versus Letters',
          explanation: '"Enough" is spelled with six letters but pronounced with four sounds: a schwa, /n/, /ʌ/ and /f/, the last coming from the letter pair gh. Counting letters gives six, and counting the two letter groups as two sounds each gives five; neither survives a slow pronunciation.',
          remediationTip: 'Say the word slowly and raise one finger per sound; the fingers, not the letters, are the count.'
        },
        {
          id: 'q-shs3-or-2',
          quizId: 'quiz-shs3-eng-t3-orals',
          questionText: 'Which pair is a TRUE minimal pair, differing in exactly one sound?',
          optionA: 'pair - pear',
          optionB: 'ship - sheep',
          optionC: 'grown - brown',
          optionD: 'write - right',
          correctOption: 'B',
          subConcept: 'Minimal Pair Definition',
          explanation: 'Ship /ʃɪp/ and sheep /ʃi:p/ share the consonants and differ only in the vowel, one sound in all. Pair and pear, and write and right, are homophones with no sound difference at all, while grown and brown differ in the initial consonant cluster as well as in the vowel.',
          remediationTip: 'Sound out both words and count the differences: exactly one, and it must change the meaning.'
        },
        {
          id: 'q-shs3-or-3',
          quizId: 'quiz-shs3-eng-t3-orals',
          questionText: 'Which word begins with a schwa sound?',
          optionA: 'about',
          optionB: 'apple',
          optionC: 'orange',
          optionD: 'under',
          correctOption: 'A',
          subConcept: 'Schwa in Initial Position',
          explanation: '"About" opens with an unstressed /ə/ before its main stress, which is why the first letter a is so weakly heard. "Apple" begins with /æ/, "orange" with /ɒ/, and "under" with /ʌ/, each of which carries full stress on the first syllable.',
          remediationTip: 'The schwa only appears where there is no stress; find the stressed syllable first and everything else is reduced.'
        },
        {
          id: 'q-shs3-or-4',
          quizId: 'quiz-shs3-eng-t3-orals',
          questionText: 'A candidate says "sink" for the word "think". Which sound is being replaced?',
          optionA: 'the voiceless palatal fricative written /ʃ/',
          optionB: 'the voiceless alveolar affricate written /tʃ/',
          optionC: 'the voiceless dental fricative written /θ/',
          optionD: 'the voiced dental fricative written /ð/',
          correctOption: 'C',
          subConcept: 'Ghanaian Consonant Substitution',
          explanation: 'The initial sound of "think" is the voiceless dental fricative /θ/, the th of "thin", and substituting /s/ for it is the classic Ghanaian replacement. /ʃ/ is the sound of "ship", /tʃ/ that of "church", and /ð/ is the VOICED th of "this", which is a different substitution error.',
          remediationTip: 'Put the tongue between the teeth and blow without voicing; that friction is /θ/, and no English word begins with /s/ where /θ/ belongs.'
        },
        {
          id: 'q-shs3-or-5',
          quizId: 'quiz-shs3-eng-t3-orals',
          questionText: 'Which of these words carries its main stress on the FIRST syllable?',
          optionA: 'machine',
          optionB: 'payment',
          optionC: 'hotel',
          optionD: 'police',
          correctOption: 'B',
          subConcept: 'Word Stress Patterns',
          explanation: '"Payment" follows the noun pattern with the beat on the first syllable, /ˈpeɪmənt/. "Machine", "hotel" and "police" are all stressed on the second syllable, which is why they share a pattern with one another and not with "payment".',
          remediationTip: 'Say the words and clap the loudest beat; two-syllable nouns and adjectives usually take the first beat, many verbs and borrowed words the second.'
        }
      ]
    }
  },
  // =========================================================================
  // TOPIC 14 — FULL WASSCE ENGLISH PAPER STRATEGY AND PAST-PAPER WALKTHROUGH
  // =========================================================================
  {
    id: 'shs3-eng-t3-wassce-strategy',
    subjectId: 'english',
    level: 'SHS 3',
    term: 3,
    orderIndex: 14,
    title: 'Full WASSCE English Paper Strategy and Past-Paper Walkthrough',
    description: 'The three papers and their clocks, a minute-by-minute sitting plan, the order that banks marks, essay choice under pressure, how marks are awarded and a six-week countdown.',
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=ZXgAiUvhsJ0',
    youtubeId: 'ZXgAiUvhsJ0',
    keyNotes: `• English arrives as three papers. PAPER 1 carries the oral English items together with comprehension and summary. PAPER 2 carries the composition tasks and the language exercises. PAPER 3 is the objective paper: lexis and structure, closest and opposite in meaning, the objective cloze, error identification and dialogue completion.
• Read the cover page of every paper for the true duration and the number of questions; the timing on the front sheet, not the classroom rumour, governs the sitting, and the invigilator announces the start and the end.
• Convert the clock into a plan before writing. On an illustrative 100-minute paper: 5 minutes scanning the whole paper, 20 minutes on the first section, 35 on the heaviest section, 25 on the next, 10 minutes left for checking and transfer.
• On a shorter paper the same proportions hold: keep the last ten percent of the time for the answer sheet and for re-reading the rubrics.
• Order of attack: begin with what you know best, because early marks buy calm. Do not begin with the hardest task to look brave; begin where the answer is already in your head.
• The two-pass rule: first pass collects every easy mark in the paper, second pass returns to circled items with the remaining minutes. Never spend the first pass fighting a single question.
• Mark and move is a discipline, not a defeat: two minutes without progress on a six-mark task means circle it and go, since the same two minutes answer three one-mark objective items.
• Essay choice under pressure: read all the tasks in silence for five minutes, rank them by GENRE strength rather than by topic interest, then choose the first-rank task. A familiar genre with an unfamiliar topic beats the reverse.
• Before committing to an essay task, tick four things on the rubric: the form (letter, article, speech, report), the audience and register, the instruction word (narrate, argue, describe, explain), and the word limit.
• Marks are awarded for content, structure and expression on the essay papers, and in objective and structured work for method as well as answer: a correct final answer with no visible method can lose the process marks, and a right method with a slipped answer keeps some.
• On the objective sheet, shade one box per item and shade it fully; two shaded options for one item normally score nothing, and a drifted row can wipe out a column.
• Typical last-minute losses: handwriting the marker cannot read, an option filled in the wrong number, no heading and date in a formal letter, no salutation, no title on an article, and an essay written below the stated length.
• Six-week countdown: weeks 6 and 5 rebuild the three weak grammar topics and drill orals sets; week 4 completes three full past papers under timing; week 3 reviews every wrong answer into an error log; week 2 writes one timed essay a day and re-reads formats; week 1 sleeps, revises the error log only, and stops new content.
• In a past-paper walkthrough the questions are recognisable families: main-idea and detail items on the passage, reference and vocabulary items, inference items that demand evidence, a name-and-function grammar item, a cloze block, a summary with a ceiling, and an essay choice. Prepare the family, not the year.`,
    detailedNotes: {
      overview: 'This is the closing lesson of the whole course: not new grammar but the operating system that turns grammar into marks on the three WASSCE English papers. Candidates rarely fail English for want of knowledge; they fail because they ran out of clock, chose the wrong essay task, drifted a row on the objective card, or wrote too untidily to be read. Every one of those losses is preventable in the final six weeks by a plan that treats the paper as a sequence of timed decisions.',
      introduction: 'Think of an examination as three separate games sharing one clock. Paper 1 is a reading game with a word ceiling. Paper 2 is a construction game with a format checklist. Paper 3 is a speed-and-accuracy game with an answer card. Practise each with the timer running, then walk through past papers until the formats stop surprising you.',
      realWorldContext: 'In the last WASSCE sitting at a Kumasi centre, the timetable placed the three English papers in one week, and a GES circular reminded schools that candidates must be in their seats before the reading time allowed on the cover page. At a school in Tamale the head of the English section rebuilt the final six weeks around timed past-paper work: Wednesday afternoons for a full Paper 3, Friday for one essay written inside forty minutes, and a Saturday morning radio revision programme for orals drilling. Candidates from a Ho centre who had instead read model essays all term reported the same complaint in the corridor afterwards: they knew the content and lost the clock.',
      objectives: [
        'Describe what each of the three WASSCE English papers contains and how its time is distributed',
        'Build and follow a minute-by-minute plan for a sitting using the duration printed on the paper',
        'Sequence questions to bank the easy marks first and apply a disciplined second pass',
        'Select the essay task under pressure using genre strength and a four-point rubric check',
        'Explain how content, structure, expression, method and answer marks are awarded and stop the usual avoidable losses'
      ],
      sections: [
        {
          title: 'The Three Papers and the Clock They Carry',
          content: 'Paper 1 opens with the oral English items and continues into comprehension and summary, so it is a reading paper with a listening flavour: the passages must be read more than once, and the summary carries a word ceiling that must be obeyed. Paper 2 is the composition and language paper, where a candidate chooses between competing tasks and writes at length, and where the format of a letter or a speech carries marks of its own. Paper 3 is the objective paper, dense with one-mark items and unforgiving of card errors. Durations differ from year to year and are printed on the front sheet of each paper, so the habit is to read the number of minutes and the number of questions first, then divide. Convert the total into thirds: a reading third, a writing third and a checking third, and never give the checking third away.',
          bulletPoints: [
            'Paper 1: orals items, comprehension, summary; the summary ceiling is part of the question, not a suggestion.',
            'Paper 2: composition tasks plus language exercises; the chosen task is worked once and must be complete.',
            'Paper 3: objective blocks; the answer card, not the question paper, carries the marks.',
            'Read the rubric count: how many questions must be answered out of how many are offered.',
            'Always reserve the final ten percent of the clock for transfer and checking, whatever the paper.'
          ],
          keyTakeaway: 'Read the printed duration and question count first, then divide the clock into reading, writing and checking thirds.',
          realWorldExample: 'A candidate at an examination hall near Makola spent the first four minutes of Paper 3 reading the cover instructions and counting the items; that pause let him budget sixty seconds an item and still hand in a fully checked card.'
        },
        {
          title: 'A Minute-by-Minute Plan and the Order That Banks Marks',
          content: 'Suppose the paper in front of you carries one hundred minutes. Use minutes zero to five to scan the whole paper: read every essay task, glance at the comprehension passage, note where the cloze block sits, and decide your order. Use the next twenty minutes on the section you command best, because the first secure marks steady the hand for everything after. Spend the following thirty-five minutes on the heaviest section, the one carrying the most marks, and work it with a visible method where method earns credit. Give the next twenty-five minutes to what remains, then hold the last ten minutes back for checking numbering, re-reading two rubrics you answered quickly, and adding anything missing. Within any section the rule never changes: attempt what you know first. Two minutes without progress means circle and move; the mark you did not win in those two minutes is the mark you will win elsewhere.',
          bulletPoints: [
            'Scanning time is not wasted time; it prevents a wrong essay choice that no amount of writing repairs.',
            'Answer in the order of your strength, not the order of printing, but keep every label clear on the script.',
            'Two-pass working: first pass for certain marks, second pass for circled items and for the guessable ones.',
            'Watch the clock three times, at the quarter, the half and the three-quarter mark, and adjust by name.',
            'Reserve ten minutes: untransferred answers and uncounted words are the two commonest self-inflicted losses.'
          ],
          keyTakeaway: 'Scan for five minutes, bank your strongest marks first, and always hold the last ten minutes back.',
          realWorldExample: 'In a mock at an Achimota classroom the timer was projected on the wall; candidates who wrote the word "summary" and a start time at the top of that section finished it inside eighteen minutes, while those who drifted reached the ceiling with three points unwritten.'
        },
        {
          title: 'Choosing the Essay Task Under Pressure',
          content: 'Paper 2 usually offers competing tasks, and the choice can decide two grades. Read all of them in silence and rank by genre strength: the form you can write fastest and cleanest, not the subject that interests you most. A candidate who writes excellent formal letters should take the letter even when the topic is unfamiliar, because format, register and paragraphing are already automatic and only the content must be invented. Then run the four-point check on the chosen task. What FORM is demanded? Who is the AUDIENCE, and therefore what register? What is the INSTRUCTION WORD, and does the plan actually narrate, argue or explain as ordered? What is the LENGTH, and is there a stated word ceiling? Jot a five-line plan on the question paper itself: opening, three body points, closing. That plan is worth more than the two minutes it costs, because it prevents the mid-essay panic that produces an unfinished script.',
          bulletPoints: [
            'Choose on form mastery: letter, article, speech, report, story or argument, whichever is most automatic.',
            'Match register to audience: a district chief is addressed formally, schoolmates are not.',
            'Underline the instruction word and the word limit before planning anything.',
            'Never begin an essay without a plan for the closing paragraph; an unfinished essay is capped.',
            'If two tasks look equal, take the one whose first paragraph you can already hear in your head.'
          ],
          keyTakeaway: 'Rank the tasks by genre strength, verify form, audience, instruction word and length, then plan in five lines.',
          realWorldExample: 'A candidate in a Sunyani mock faced a letter to the district assembly about a broken culvert and a speech on discipline; she chose the letter although the speech topic seemed livelier, and the format marks were already hers before the first sentence.'
        },
        {
          title: 'How Marks Are Awarded, the Six-Week Countdown and the Walkthrough',
          content: 'On the essay papers, marks typically flow from three judgement strands: CONTENT, whether the task has been fulfilled with enough relevant substance; STRUCTURE, whether the writing is organised and paragraphed and whether the format is observed; and EXPRESSION, whether the sentences are accurate, varied and in the right register. In objective and structured items, credit is split between METHOD, the visible working that shows the reader how the answer was reached, and ANSWER, the final correct item; so a slipped answer with sound working can still collect, and a bare answer may not. Work the last six weeks in that knowledge. Weeks six and five repair the three grammar topics that cost you most and drill orals sets weekly. Week four writes three whole past papers to the clock. Week three returns to every wrong answer and builds one error log. Week two writes one timed essay daily and re-reads every format checklist. Week one stops new content, reviews the error log, and sleeps. In the walkthrough of a past paper, sort each question into its family: main idea, detail, reference, vocabulary in context, inference needing evidence, name and function, cloze, summary with a ceiling, and essay choice. Ten families cover most of a decade of papers, and a candidate who names the family knows which routine to run.',
          bulletPoints: [
            'Content, structure and expression are judged separately; a strong idea badly organised still loses.',
            'Show method where method exists: label answers, keep numbering clean, and never erase a working line that proves the approach.',
            'Format marks are free marks: addresses and date for a formal letter, title for an article, greeting and close for a speech.',
            'Past papers are practised to the clock, not read as stories; reading a mark scheme is not writing an answer.',
            'The error log is the only new material worth revising in the final week.'
          ],
          keyTakeaway: 'Score is content plus structure plus expression, plus visible method; the final six weeks must rehearse all of it under time.',
          realWorldExample: 'A revision class in Cape Coast pinned the decade of past questions to the wall and sorted every question into the ten families; by the third week the candidates could name the family of a question before reading its options.'
        }
      ],
      commonMistakes: [
        'Starting with the hardest task to feel productive, then running out of clock on two easy ones. Fix: five minutes of scanning, then begin with the section you command and leave the hard item circled for the second pass.',
        'Choosing an essay task by topic interest rather than by mastery of the form. Fix: rank the tasks by genre first, since format, register and paragraphing are automatic only in a form you have written a dozen times.',
        'Writing in a hand the marker cannot read, especially in the last ten minutes. Fix: slow down for the conclusion, keep letters open, and rewrite any line that has become a smear.',
        'Answering on the question paper when the marks live on the card or in the booklet. Fix: transfer in blocks with the item numbers read aloud in the head, and check the last item before the paper leaves your desk.',
        'Omitting format furniture such as the heading, the date, the salutation in a formal letter or the title of an article. Fix: memorise one checklist per form and run it against the script in the reserved checking time.'
      ],
      wassceExamTips: [
        'On Paper 1, answer the orals and vocabulary items with the same routine you drilled for Paper 3, then read the comprehension passage twice, once for the argument and once for the questions; the summary is written last and counted twice.',
        'On Paper 2, write the chosen task number at the top of the answer booklet and keep the format furniture visible; a marker awards structure marks for an obvious opening, marked paragraphs and a real closing.',
        'On Paper 3, one mark per item means no item deserves more than a minute; the cheap marks in closest in meaning and dialogue completion are lost only to hurry and to card drift.',
        'Where a structured item carries method and answer marks, put the method on paper: an underlined head noun, a labelled word class or a crossed-out option in the margin can be the difference between zero and a carried mark.',
        'In the last six weeks, one timed past paper a week beats six untimed readings; mark it yourself against the instruction words, then write the fault into the error log and revise nothing but the log in the final week.'
      ],
      summaryChecklist: [
        'Can I say what each of the three English papers contains and how I will divide its printed time?',
        'Can I run a five-minute scan and then bank my strongest marks before touching a hard item?',
        'Can I choose an essay task on genre strength and check its form, audience, instruction word and length?',
        'Can I explain how content, structure, expression, method and answer marks are awarded?',
        'Can I follow a six-week countdown that ends on an error log instead of on new material?'
      ]
    },
    examples: [
      {
        id: 'ex-shs3-eng-ws-1',
        title: 'Planning a Sitting From the Printed Duration',
        problem: 'A candidate opens a Paper 1 whose cover page states a duration of one hundred minutes and lists three sections: oral English items, a comprehension passage with questions, and a summary with a word ceiling. Write the sitting plan and explain the reasoning that decides it.',
        stepByStepSolution: [
          'Step 1 (M1): Take the duration from the printed cover page rather than from memory, and convert it into minutes: 100 minutes total, of which the last 10 are ring-fenced for checking and counting.',
          'Step 2 (M1): Spend minutes 0 to 5 scanning: count the orals items, read the comprehension questions first, then read the summary instruction to fix the quantum and the ceiling, because knowing the ceiling decides how much time the summary will need.',
          'Step 3 (M1): Order the sections by certainty rather than by printing. The orals items are quick, one-mark answers, so 15 minutes on them banks early marks and steadies the hand; the comprehension takes 40 minutes as the heaviest section; the summary takes 30 minutes, since it needs a marked list, a draft, and two word counts.',
          'Step 4 (M1): Insert checkpoints by name: at 25 minutes the orals must be finished, at 65 the comprehension, at 90 the summary draft, leaving 10 minutes to check numbering, complete unfinished sentences and re-count the summary.',
          'Step 5 (M1): Protect the plan against the classic leak: if the comprehension overruns, trim the second reading of the passage, never the checking time, because untransferred and uncaptured work is the larger loss.',
          'Step 6 (A1): Final plan: scan 0 to 5; orals 5 to 20; comprehension 20 to 60; summary 60 to 90; checking and counting 90 to 100, with the summary written last and counted twice.'
        ],
        keyTakeaway: 'Take the clock from the cover page, ring-fence the last ten minutes, and order sections by certainty.'
      },
      {
        id: 'ex-shs3-eng-ws-2',
        title: 'Choosing an Essay Task in Four Minutes on Paper 2',
        problem: 'Paper 2 offers three tasks: (i) a formal letter to the district chief complaining about the state of a feeder road; (ii) an article for a national newspaper on whether parents or teachers are responsible for punctuality; (iii) a story that ends with a given sentence. A candidate writes strong letters, competently argued articles and weak narratives. Choose the task and justify the choice in the four-minute scan.',
        stepByStepSolution: [
          'Step 1 (M1): Read all three tasks in silence and rank them by mastery of FORM, not by how interesting the subject sounds: letter first, article second, story third for this candidate.',
          'Step 2 (M1): Run the four-point check on the leading candidate: form is a formal letter; audience is an office holder, so the register is impersonal and courteous; instruction is to complain, which requires statement of the problem, its effects and the action requested; length is read from the rubric and respected.',
          'Step 3 (M1): Reject the story on method grounds, not on taste: a narrative whose ending is supplied must be built backwards from that sentence, and a weak narrator loses content and structure marks at once.',
          'Step 4 (M1): Keep the article as the reserve choice in case the letter plan collapses, and note that an argumentative article would demand two balanced sides before a position.',
          'Step 5 (M1): Plan in five lines on the question paper: opening paragraph identifying the road and its condition; second paragraph on the effects on traders and pupils; third paragraph on the action requested and the period allowed; formal closing.',
          'Step 6 (A1): Decision: task (i), the formal letter, chosen for genre strength, with the format furniture of address, date, salutation, subject line, complimentary close and signature written in before the argument begins.'
        ],
        keyTakeaway: 'Rank tasks by mastery of form, verify the rubric in four checks, then plan the paragraphs before the first sentence.'
      }
    ],
    quiz: {
      id: 'quiz-shs3-eng-t3-wassce-strategy',
      topicId: 'shs3-eng-t3-wassce-strategy',
      title: 'WASSCE Strategy and Past-Paper Walkthrough Quiz',
      timeLimitMinutes: 8,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-shs3-ws-1',
          quizId: 'quiz-shs3-eng-t3-wassce-strategy',
          questionText: 'At the start of Paper 2 a candidate finds that the first printed essay task looks unfamiliar. What is the best use of the first minutes?',
          optionA: 'Begin it at once so that no time is lost',
          optionB: 'Read every task silently, then choose the one matching the strongest genre',
          optionC: 'Ask the invigilator for another version of the paper',
          optionD: 'Write a general essay on any subject the candidate knows',
          correctOption: 'B',
          subConcept: 'Order of Attack',
          explanation: 'A five-minute scan costs nothing and prevents the one decision no writing can repair, namely a wrong task choice. Beginning an unfamiliar task wastes the clock, the paper cannot be exchanged, and answering a subject the rubric never set forfeits the content marks.',
          remediationTip: 'Rank the tasks by mastery of form, not by interest, before writing a single word.'
        },
        {
          id: 'q-shs3-ws-2',
          quizId: 'quiz-shs3-eng-t3-wassce-strategy',
          questionText: 'In the marking of a WASSCE composition, marks are typically awarded for which combination?',
          optionA: 'content, structure and expression',
          optionB: 'length of the script and neatness of the margin',
          optionC: 'quotation of proverbs in every paragraph',
          optionD: 'use of as many difficult words as possible',
          correctOption: 'A',
          subConcept: 'Essay Marking Strands',
          explanation: 'Examiners judge whether the task is fulfilled, whether the writing is organised with the format observed, and whether the language is accurate and appropriate. Length, margins, proverbs and rare vocabulary may help only inside those three strands; on their own they earn nothing.',
          remediationTip: 'Before handing in, ask three questions in order: did I answer the task, is it organised, is it plainly written?'
        },
        {
          id: 'q-shs3-ws-3',
          quizId: 'quiz-shs3-eng-t3-wassce-strategy',
          questionText: 'Two minutes remain on Paper 3 and six objective items are unanswered. What should the candidate do?',
          optionA: 'Leave them blank rather than risk wrong answers',
          optionB: 'Shade the same letter for all six without reading them',
          optionC: 'Work each briefly, eliminate where possible, and shade a choice for all six',
          optionD: 'Spend the two minutes re-checking the answers already given',
          correctOption: 'C',
          subConcept: 'Objective Timing',
          explanation: 'Objective marking rewards correct responses and normally imposes no separate deduction for a wrong one, so all six should be filled; even a hurried elimination usually removes one or two options and raises the chance. Blanks cannot score, shading one letter for six items ignores any item that is answerable, and re-checking done work leaves marks on the table.',
          remediationTip: 'Hold ten percent of the clock back so that no item is ever left blank at the bell.'
        },
        {
          id: 'q-shs3-ws-4',
          quizId: 'quiz-shs3-eng-t3-wassce-strategy',
          questionText: 'Which of the following is a standard feature of a formal letter whose omission costs marks even when the language is excellent?',
          optionA: 'A closing signed by the writer only',
          optionB: 'The salutation, the addresses and the date',
          optionC: 'At least three rhetorical questions',
          optionD: 'A quotation from a set text',
          correctOption: 'B',
          subConcept: 'Format Furniture',
          explanation: 'Structure marks in a formal letter attach to its recognised furniture: the writer\u2019s address with the date, the recipient\u2019s address, the salutation, a subject line and the formal close. A signature alone is only the last stroke, rhetorical questions belong to speech or article style, and a set-text quotation is not part of the format at all.',
          remediationTip: 'Learn one checklist per letter type and run it against the script during the reserved checking time.'
        },
        {
          id: 'q-shs3-ws-5',
          quizId: 'quiz-shs3-eng-t3-wassce-strategy',
          questionText: 'In the final six weeks before WASSCE, which routine best prepares a candidate for the English papers?',
          optionA: 'Reading model essays without writing any under time',
          optionB: 'Memorising a list of uncommon words each day',
          optionC: 'Timed past-paper practice with a weekly review of every wrong answer',
          optionD: 'Revising only the topics the candidate enjoys most',
          correctOption: 'C',
          subConcept: 'Six-Week Countdown',
          explanation: 'Marks are lost to clock management and to repeated personal errors, so practising whole papers to time and logging the mistakes attacks both, and the log becomes the only revision material in the final week. Reading essays builds no timing skill, rare words do not buy marks without accuracy, and enjoyable topics ignore the weak areas that cost grades.',
          remediationTip: 'One timed paper a week, corrected at once, beats a week of untimed reading.'
        }
      ]
    }
  },
];
