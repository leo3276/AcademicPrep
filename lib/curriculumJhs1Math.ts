import { CurriculumTopic } from './types';

export const JHS1_MATH_TOPICS: CurriculumTopic[] = [
  // ==========================================
  // TERM 1
  // ==========================================
  {
    id: 'jhs1-math-t1-sets',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Sets and Operations on Sets',
    description: 'Master set notation, types of sets, union, intersection, and two-set Venn diagrams.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=ceQmwJ0xGrQ',
    youtubeId: 'ceQmwJ0xGrQ',
    keyNotes: `A set is a well-defined collection of distinct objects or elements.
• Empty / Null Set: A set with no elements, denoted by ∅ or {}.
• Finite Set: Elements can be counted (e.g. factors of 12).
• Infinite Set: Elements continue endlessly (e.g. counting numbers).
• Union of Sets (A ∪ B): The set of all elements in A, B, or both.
• Intersection of Sets (A ∩ B): The set of elements common to both A and B.
• Subset (A ⊆ B): Every element in A is present in B. Total subsets = 2^n.`,
      detailedNotes: {
          "overview": "Sets are the language used to group and talk about numbers and objects in the whole of mathematics. Every topic after this one — number systems, algebra, probability, even statistics — is really a statement about sets. This lesson teaches you to name a set correctly, compare two sets, and combine them with union and intersection.",
          "introduction": "A set is a well-defined collection of distinct objects. Well-defined means there is no argument about whether something belongs: 'the tall students in your class' is NOT a set because tall is a matter of opinion, but 'students in JHS 1 who are at least 150 cm tall' is a set because it can be tested. The objects inside are called elements or members, written inside curly braces and separated by commas.",
          "realWorldContext": "In Ghana, sets decide who gets what. The Electoral Commission of Ghana groups registered voters by constituency; NHIS registers households by scheme; a market woman at Makola sorts tomatoes into quality sets before setting prices. Class lists, house groups (Adansi, Ansa, Bantuma, Nkyinim) and sports team selections are all set operations in daily life.",
          "objectives": [
            "Write a set in listing (roster) form and in set-builder form using correct notation.",
            "Identify a set as finite, infinite, empty, universal, singleton or equal to another set.",
            "Determine the number of subsets of a finite set and list them without omission.",
            "Compute and interpret the union and intersection of two or three sets.",
            "Shade two-set Venn diagrams and solve BECE word problems using them."
          ],
          "sections": [
            {
              "title": "Naming a Set: Roster Form and Rule (Set-Builder) Form",
              "content": "Roster (listing) form writes every element once inside braces, for example A = {2, 3, 5, 7, 11}. Rule form, also called set-builder form, describes the test instead: A = {x : x is a prime number and 1 < x < 12}. Read the colon as 'such that'. The two forms name exactly the same set.",
              "bulletPoints": [
                "Order does not matter: {1, 2, 3} = {3, 1, 2}.",
                "Repetition does not add an element: {1, 1, 2} is simply {1, 2}.",
                "Never write braces inside braces when listing numbers; {1, 2, 3} is one set, not three.",
                "The symbol ∈ means 'is an element of' and ∉ means 'is not an element of'. So 7 ∈ A but 9 ∉ A for the set above."
              ],
              "keyTakeaway": "Two sets are equal only when they contain exactly the same elements, no matter how each was described.",
              "realWorldExample": "Listing form is a class attendance sheet; rule form is the instruction 'call out anyone whose score is 80 and above'. Same people, two ways of naming them."
            },
            {
              "title": "Types of Sets You Must Be Able to Name",
              "content": "Examiners test vocabulary before they test calculation. The empty (null) set ∅ or {} has no elements at all — the set of students in JHS 1 who are older than 100 is empty. A singleton set has exactly one element, such as {x : x is an even prime number} = {2}. A finite set can be counted; an infinite set goes on for ever, like the counting numbers N = {1, 2, 3, ...}. The universal set U contains every element under discussion for one question, and everything else is measured against it.",
              "bulletPoints": [
                "Counting numbers (natural numbers) N = {1, 2, 3, ...}",
                "Whole numbers W = {0, 1, 2, 3, ...} — zero is a whole number but not a counting number.",
                "Integers Z = {..., -3, -2, -1, 0, 1, 2, 3, ...}",
                "The set {0} is NOT empty; it has one element, the number 0.",
                "The set {∅} is a singleton containing the empty set — it is not itself empty."
              ],
              "keyTakeaway": "The number of elements of set A is written n(A) or |A|; for A = {f, o, r, c, e} the letters repeat so n(A) = 5, not 6.",
              "realWorldExample": "If U = {all 40 students in your JHS 1 class}, A = {those who eat tuo zaafi}, then the students outside both circles are the complement of A."
            },
            {
              "title": "Subsets and the Formula 2^n",
              "content": "A is a subset of B (written A ⊆ B) when every element of A is also in B. Every set is a subset of itself, and the empty set is a subset of every set. If a set has n elements, the total number of subsets is 2^n, and the number of proper subsets (all of them except the set itself) is 2^n − 1.",
              "bulletPoints": [
                "For P = {x, y, z}, n = 3, so subsets = 2³ = 8: ∅, {x}, {y}, {z}, {x, y}, {x, z}, {y, z}, {x, y, z}.",
                "List shortest first so nothing is missed — that is how full marks are kept.",
                "A ⊆ B and B ⊆ A together force A = B.",
                "If A ⊆ B then n(A) ≤ n(B); a subset can never have more elements than the set containing it."
              ],
              "keyTakeaway": "Subsets count groups that could be formed; the answer 2^n comes from each element independently choosing in or out.",
              "realWorldExample": "Choosing any group of prefects from three candidates gives 2³ = 8 possible committees, including nobody and everybody."
            },
            {
              "title": "Union and Intersection",
              "content": "The union A ∪ B contains everything in A, in B, or in both. The intersection A ∩ B contains only what they share. Union therefore grows the set and intersection shrinks it. Both results are sets, so braces must appear in the final answer.",
              "bulletPoints": [
                "A ∪ B = {x : x ∈ A or x ∈ B}; write duplicates only once.",
                "A ∩ B = {x : x ∈ A and x ∈ B}; if nothing is shared, A ∩ B = ∅.",
                "For three sets, A ∩ B ∩ C is the single region common to all three circles.",
                "n(A ∪ B) = n(A) + n(B) − n(A ∩ B). The subtraction removes the double-counted middle.",
                "The complement A′ (or Aᶜ) = elements of U that are not in A."
              ],
              "keyTakeaway": "The word AND points to intersection, the word OR points to union.",
              "realWorldExample": "If A = students who play football and B = students who play basketball, A ∩ B is the squad that plays both and A ∪ B is everyone who plays at least one."
            },
            {
              "title": "Reading and Filling a Two-Set Venn Diagram",
              "content": "Draw a rectangle for U and two overlapping circles. The overlap is filled first, then each circle's 'only' region, then the outside. Doing it in that order prevents the classic double-count.",
              "bulletPoints": [
                "Step 1 — write n(A ∩ B) in the overlap.",
                "Step 2 — A only = n(A) − n(A ∩ B); B only = n(B) − n(A ∩ B).",
                "Step 3 — add the three inside regions to get n(A ∪ B).",
                "Step 4 — neither = n(U) − n(A ∪ B). Put it outside both circles but inside the rectangle.",
                "Always check: the four regions must add back to n(U)."
              ],
              "keyTakeaway": "Take the intersection out of each given total before you write anything in a circle.",
              "realWorldExample": "30 students: 18 do French, 14 do Twi, 6 do both — French only 12, Twi only 8, both 6, so 26 do at least one and 4 do neither."
            }
          ],
          "commonMistakes": [
            "Writing {∅} or {0} when the empty set ∅ is required.",
            "Counting repeated letters twice, so {a, p, p, l, e} is given as 5 elements instead of 4.",
            "Putting 18 straight into the French circle in a Venn diagram without removing the 6 who do both.",
            "Answering a union or intersection as a bare number instead of a set in braces.",
            "Confusing ⊆ (subset) with ∈ (element of).",
            "Forgetting that the students who do neither subject still belong inside the rectangle U."
          ],
          "beceExamTips": [
            "Draw the Venn diagram even when the question only asks for a number — method marks are awarded for correct shading and placement.",
            "State the rule form before listing, e.g. \"P = {x : x is a factor of 12} = {1, 2, 3, 4, 6, 12}\". Both halves earn marks.",
            "When asked for all subsets, write them in order of size and count them at the end to confirm 2^n.",
            "If the question says \"each student studies at least one subject\", the outside region must be zero — use that to build your equation.",
            "The phrase \"n(A only)\" never includes the intersection; read carefully before you write a figure down.",
            "Cross-check with n(A ∪ B) = n(A) + n(B) − n(A ∩ B); if your diagram disagrees with the formula, one of them is wrong."
          ],
          "summaryChecklist": [
            "Can I state a set in both roster and rule form?",
            "Can I classify a set as empty, singleton, finite, infinite or universal?",
            "Can I list all 2^n subsets of a small set without missing any?",
            "Can I find A ∪ B, A ∩ B and A′ from two given sets?",
            "Can I complete a two-set Venn diagram and find the number who do neither?"
          ]
        },
    examples: [
      {
        id: 'ex-sets-1',
        title: 'Finding Union and Intersection of Two Sets',
        problem: 'Given U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, A = {2, 4, 6, 8, 10}, and B = {4, 5, 6, 7, 8}. Find: (i) A ∩ B (ii) A ∪ B',
        stepByStepSolution: [
          'Step 1: Identify common elements for Intersection (A ∩ B): The numbers 4, 6, and 8 appear in both sets. So, A ∩ B = {4, 6, 8}.',
          'Step 2: Combine all elements without repeating duplicates for Union (A ∪ B): {2, 4, 5, 6, 7, 8, 10}.',
        ],
        keyTakeaway: 'Intersection means "common to both". Union means "combine all distinct elements".',
      },
      {
        id: 'ex-sets-2',
        title: 'Two-Set Venn Diagram Problem',
        problem: 'In a class of 30 students, 18 study French (F), 14 study Twi (T), and 6 study both subjects. How many students study neither subject?',
        stepByStepSolution: [
          'Step 1: Total n(U) = 30. Both subjects n(F ∩ T) = 6.',
          'Step 2: French ONLY = 18 - 6 = 12.',
          'Step 3: Twi ONLY = 14 - 6 = 8.',
          'Step 4: At least one subject = 12 + 6 + 8 = 26.',
          'Step 5: Neither = 30 - 26 = 4 students.',
        ],
        keyTakeaway: 'Always subtract the intersection (both) from each circle to find the "only" region first.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-sets',
      topicId: 'jhs1-math-t1-sets',
      title: 'Sets & Operations Mastery Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-sets-1',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'If set P = {x, y, z}, how many total subsets does P have?',
          optionA: '3',
          optionB: '6',
          optionC: '8',
          optionD: '9',
          correctOption: 'C',
          explanation: 'The number of subsets of a set with n elements is 2^n. For n = 3, 2³ = 8.',
        },
        {
          id: 'q-sets-2',
          quizId: 'quiz-jhs1-math-sets',
          questionText: 'Which symbol correctly represents an empty or null set?',
          optionA: '{0}',
          optionB: '{∅}',
          optionC: '∅ or {}',
          optionD: '{null}',
          correctOption: 'C',
          explanation: 'An empty set has no members and is represented by ∅ or {}. Writing {∅} is a singleton set.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t2-realnumbers',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Real Number System and Place Value',
    description: 'Understand the hierarchy of real numbers, place values up to billions, and prime factorization.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=zsNPjAps0Qk',
    youtubeId: 'zsNPjAps0Qk',
    keyNotes: `Real numbers include counting numbers, whole numbers, integers, and rational numbers.
• Value = Digit × Place Value.
• Prime numbers have exactly two factors: 1 and itself (2, 3, 5, 7, 11...).
• HCF: Product of lowest powers of common prime factors.
• LCM: Product of highest powers of all prime factors.`,
      detailedNotes: {
          "overview": "Numbers are organised into families, and every family has rules about what you can do with it. This lesson places counting numbers, whole numbers, integers, fractions and decimals inside one system, then builds the arithmetic of digits — place value up to billions — and the factor machinery of HCF and LCM that BECE uses again and again.",
          "introduction": "A real number is any number that can be shown on a number line. The real number system grows outward from counting: you need 1, 2, 3 for tallying; 0 for 'none'; negative numbers for debt; fractions for shared portions; and decimals for measurement. Each extension keeps the older numbers inside it, so N ⊂ W ⊂ Z ⊂ Q ⊂ R.",
          "realWorldContext": "Ghana's cedi is a decimal place-value system to two places, so a market price of GHS 2,450.75 is read as two thousand four hundred and fifty cedis, seventy-five pesewas. The Ghana Statistical Service population figures run into the tens of millions, and the Bank of Ghana reports national debt in billions — all of these are read, written and compared using place value.",
          "objectives": [
            "Classify a given number as a natural, whole, integer, rational or irrational number.",
            "State the place value and the actual value of any digit in a number up to billions.",
            "Read, write and round large numbers to a stated accuracy.",
            "Express a number as a product of prime factors in index form.",
            "Calculate the HCF and LCM of two or three numbers using prime factorisation."
          ],
          "sections": [
            {
              "title": "The Number Families and How They Contain One Another",
              "content": "Counting (natural) numbers N = {1, 2, 3, ...} are used for counting. Whole numbers W add zero. Integers Z add the negatives. Rational numbers Q are anything writable as a/b with a and b integers and b ≠ 0 — this includes every terminating decimal such as 0.25 and every recurring decimal such as 0.333... Irrational numbers cannot be written as a fraction; √2 and π belong here. Together, rationals and irrationals make the real numbers R.",
              "bulletPoints": [
                "Every natural number is whole; not every whole number is natural (0 is not).",
                "Every integer is rational, because 5 = 5/1 and −3 = −3/1.",
                "A number can be in more than one family; name the most specific one the question asks for.",
                "Decimals with digits that repeat for ever, like 0.121212..., ARE rational."
              ],
              "keyTakeaway": "The families nest: N inside W inside Z inside Q inside R.",
              "realWorldExample": "A temperature of −4 °C on Mt Afadzato, a debt of GHS 30, a half share of yam and a measured circumference π are four different families in one day."
            },
            {
              "title": "Place Value, Digit Value and Value of a Digit",
              "content": "Place value is the NAME of the position; the value (actual value) of a digit is the digit multiplied by that position. In 6,482,915 the digit 8 sits in the ten-thousands position, so its place value is ten thousands and its actual value is 80,000. Moving one place to the left multiplies by 10; moving right divides by 10.",
              "bulletPoints": [
                "Ghana reads from the right in threes: units, tens, hundreds | thousands, ten thousands, hundred thousands | millions ... | billions.",
                "Value of digit = digit × place value.",
                "Two digits in the same number have different values even if they are the same face value: in 7,777 each 7 is worth 7000, 700, 70 and 7.",
                "Compare numbers by total digits first, then digit by digit from the left."
              ],
              "keyTakeaway": "Say \"ten thousands\" for the place and \"80,000\" for the value; BECE asks for one of the two and marks the difference.",
              "realWorldExample": "In a school enrolment of 1,348,205 the digit 4 contributes 40,000 learners, while the 5 at the end contributes five individual learners."
            },
            {
              "title": "Rounding and Significant Figures",
              "content": "Rounding gives an acceptable approximation. Look only at the digit immediately after the place you are rounding to: 5 or more rounds up, 4 or less stays. Never change a digit you were not asked about.",
              "bulletPoints": [
                "Round 2,47,856 to the nearest thousand → look at 8 (the hundreds) → 2,48,000. Written Ghana-style: 248,000.",
                "Round to 2 significant figures: keep the first two non-zero digits, then fill with zeros: 248,000 → 250,000.",
                "Decimal rounding keeps the decimal point in place: 3.14159 to 3 decimal places is 3.142.",
                "Exact values must not be rounded in a money answer unless the question asks."
              ],
              "keyTakeaway": "State the degree of accuracy asked for and never round in the middle of a multi-step calculation.",
              "realWorldExample": "A trotro fare of GHS 7.85 is quoted as about GHS 8 when planning a budget."
            },
            {
              "title": "Prime Factorisation in Index Form",
              "content": "A prime number has exactly two factors: 1 and itself. The smallest prime is 2 and it is the only even prime. 1 is not prime because it has only one factor. To factorise, divide repeatedly by the smallest prime that goes in until the answer is 1, collecting primes as you go, then write repeated primes with indices: 24 = 2 × 2 × 2 × 3 = 2³ × 3.",
              "bulletPoints": [
                "Primes below 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.",
                "Test divisibility: by 2 if even, by 3 if digit sum is a multiple of 3, by 5 if it ends in 0 or 5.",
                "A factor tree and repeated division give the same answer; show which one you used.",
                "Index form must be complete: 360 = 2³ × 3² × 5, not 2 × 2 × 90."
              ],
              "keyTakeaway": "Prime factorisation is the foundation of HCF, LCM, simplifying fractions and indices later in SHS.",
              "realWorldExample": "Packaging 240 bottles of water into equal crates uses the factor list of 240 = 2⁴ × 3 × 5."
            },
            {
              "title": "HCF and LCM by Prime Factors",
              "content": "Write each number in prime index form. The HIGHEST COMMON FACTOR takes every COMMON prime at its LOWEST power; the LEAST COMMON MULTIPLE takes every prime that appears at its HIGHEST power. One sentence to remember: HCF is low and common, LCM is high and all.",
              "bulletPoints": [
                "24 = 2³ × 3¹ and 36 = 2² × 3² → HCF = 2² × 3¹ = 12; LCM = 2³ × 3² = 72.",
                "Check: HCF must divide every number given, and every number given must divide the LCM.",
                "For three numbers, common means present in all three for HCF.",
                "For any two numbers, HCF × LCM = product of the two numbers (12 × 72 = 24 × 36 = 864).",
                "Two numbers whose HCF is 1 are said to be co-prime (e.g. 8 and 15)."
              ],
              "keyTakeaway": "HCF answers \"biggest equal size\", LCM answers \"next time they coincide\".",
              "realWorldExample": "Bells ringing every 12, 15 and 20 seconds next ring together after LCM = 60 seconds; cutting two ropes of 24 m and 36 m into equal longest pieces gives HCF = 12 m."
            }
          ],
          "commonMistakes": [
            "Calling 1 a prime number, or 2 an odd prime.",
            "Writing place value as the digit value, e.g. answering \"8\" instead of \"80,000\".",
            "Rounding twice in one question and losing accuracy.",
            "Using the LCM rule when the question asks for the HCF — the words look similar, read twice.",
            "Stopping a factor tree at a composite such as 9 instead of continuing to 3 × 3.",
            "Writing recurring decimals as irrational — 0.333... equals 1/3 and is rational."
          ],
          "beceExamTips": [
            "When a question gives a large number, rewrite it in words and in expanded form; both are separately marked.",
            "\"Correct to 2 significant figures\" and \"correct to 2 decimal places\" give different answers — circle the wording in the paper.",
            "In HCF word problems the answer is a divisor; in LCM problems it is a multiple. Deciding which one before calculating is worth method marks.",
            "Show the prime factorisation as a line of working even if you know the answer; a bare correct number often scores less.",
            "Estimate first: if the LCM of 24 and 36 comes out smaller than 36, an error has been made.",
            "Memorise the primes below 50; every factorisation question depends on them."
          ],
          "summaryChecklist": [
            "Can I place a number in every family it belongs to?",
            "Can I give the place value and the actual value of a digit in a seven-figure number?",
            "Can I round to a stated number of decimal places or significant figures?",
            "Can I write any number up to 1000 as prime factors in index form?",
            "Can I find HCF and LCM of two or three numbers and check them?"
          ]
        },
    examples: [
      {
        id: 'ex-real-1',
        title: 'Finding Place Value and Digit Value',
        problem: 'In the number 6,482,915, state: (i) the place value of 8 (ii) the actual value of 8.',
        stepByStepSolution: [
          'Step 1: Identify the position of 8 from the right: Units(5), Tens(1), Hundreds(9), Thousands(2), Ten Thousands(8).',
          'Step 2: Place value is Ten Thousands.',
          'Step 3: Actual value = 8 × 10,000 = 80,000.',
        ],
        keyTakeaway: 'Place value is the position name; actual value is the number multiplied by its place value.',
      },
      {
        id: 'ex-real-2',
        title: 'HCF and LCM by Prime Factorization',
        problem: 'Find the HCF and LCM of 24 and 36 using prime factors in index form.',
        stepByStepSolution: [
          'Step 1: Express 24 in prime index form: 24 = 2³ × 3¹.',
          'Step 2: Express 36 in prime index form: 36 = 2² × 3².',
          'Step 3: HCF = lowest powers of common factors: 2² × 3¹ = 4 × 3 = 12.',
          'Step 4: LCM = highest powers of all factors: 2³ × 3² = 8 × 9 = 72.',
        ],
        keyTakeaway: 'HCF uses lowest common powers; LCM uses highest powers of all prime factors.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-realnumbers',
      topicId: 'jhs1-math-t2-realnumbers',
      title: 'Real Numbers & Place Value Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-real-1',
          quizId: 'quiz-jhs1-math-realnumbers',
          questionText: 'Which of the following numbers is the ONLY even prime number?',
          optionA: '0',
          optionB: '2',
          optionC: '4',
          optionD: '6',
          correctOption: 'B',
          explanation: '2 is the only even prime number because all other even numbers are divisible by 2.',
        },
        {
          id: 'q-real-2',
          quizId: 'quiz-jhs1-math-realnumbers',
          questionText: 'What is the HCF of 18 and 30?',
          optionA: '3',
          optionB: '6',
          optionC: '9',
          optionD: '90',
          correctOption: 'B',
          explanation: '18 = 2 × 3² and 30 = 2 × 3 × 5. Common prime factors are 2 × 3 = 6.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t3-integers',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 3,
    title: 'Integers and Operations on Integers',
    description: 'Directed numbers on the number line, addition, subtraction, multiplication, and sign rules.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=x0E4vxLydNY',
    youtubeId: 'x0E4vxLydNY',
    keyNotes: `Integers include positive numbers, zero, and negative numbers.
• Adding same signs: add numbers and keep sign: (-4) + (-5) = -9.
• Adding different signs: subtract smaller from larger and take larger sign: (-8) + 3 = -5.
• Double negative: a - (-b) = a + b.
• Multiplication/Division: (-) × (-) = (+); (-) × (+) = (-).`,
      detailedNotes: {
          "overview": "Negative numbers are not a punishment; they are a way to describe opposites — below zero, below sea level, debt, loss. This lesson fixes the direction rules for adding, subtracting, multiplying and dividing integers, and introduces the order of operations that keeps a long expression unambiguous.",
          "introduction": "Integers are the whole numbers together with their negatives and zero: ..., −3, −2, −1, 0, 1, 2, 3, ... On a number line, positive means move right and negative means move left. Every integer has an opposite (additive inverse) which is the same distance from zero: the opposite of −7 is +7, and 0 is its own opposite.",
          "realWorldContext": "A Kumasi trader who sells GHS 40 of goods but owes GHS 65 for stock is at −25. Temperatures at the Mole National Park in harmattan mornings fall close to the teens while noon heat climbs past 35 °C. Elevation, bank statements, scores in a quiz with negative marking and elevator floors below ground all need signed numbers.",
          "objectives": [
            "Represent integers on a number line and state the additive inverse of an integer.",
            "Add and subtract integers, including a double negative, using the number line.",
            "Multiply and divide integers and state the sign rule correctly.",
            "Apply the order of operations (BODMAS) to integer expressions.",
            "Translate everyday situations such as debt, loss and temperature fall into integer statements."
          ],
          "sections": [
            {
              "title": "Reading the Signs: Opposites and the Number Line",
              "content": "Zero is the boundary, not 'nothing'. To the right of 0 lie the positives, to the left the negatives. A larger numeral on the negative side is a SMALLER number: −9 < −2, because −9 lies further left. Compare two integers by asking which one is warmer, richer or higher.",
              "bulletPoints": [
                "The additive inverse of a is −a; a + (−a) = 0.",
                "The distance of a number from zero is its absolute value, |−6| = 6.",
                "Arranging integers in ascending order means smallest (most negative) first.",
                "There is no largest negative integer and no smallest positive integer."
              ],
              "keyTakeaway": "With negatives, the bigger-looking number is the smaller number.",
              "realWorldExample": "Owing GHS 9 is worse than owing GHS 2, so −9 < −2."
            },
            {
              "title": "Adding Integers",
              "content": "Same signs: add the numerals and keep the common sign. Different signs: find the difference of the numerals and give the answer the sign of the number that is further from zero. Think of a walk: −4 then −5 means walk 4 steps left then 5 more left, ending at −9. Think of +7 then −3 means 7 right then 3 back, ending at +4.",
              "bulletPoints": [
                "(-4) + (-5) = -9.",
                "(-8) + 3 = -5, because 8 − 3 = 5 and the −8 wins the direction.",
                "9 + (-2) = 7.",
                "Addition of integers is commutative: a + b = b + a, and associative: (a + b) + c = a + (b + c).",
                "Zero is the identity: a + 0 = a."
              ],
              "keyTakeaway": "Decide the SIGN first, then do the ordinary arithmetic.",
              "realWorldExample": "Monday profit GHS 30, Tuesday loss GHS 45 → 30 + (−45) = −15, a net loss of GHS 15 for the two days."
            },
            {
              "title": "Subtracting Integers — Keep-Change-Change",
              "content": "Subtracting a number is the same as adding its opposite. Keep the first number, change subtraction to addition, change the second number to its opposite. This turns every subtraction into an addition you already know, and it is the rule that makes the double negative work.",
              "bulletPoints": [
                "7 − (-3) = 7 + 3 = 10.",
                "(-6) − 4 = (-6) + (-4) = -10.",
                "(-6) − (-4) = (-6) + 4 = -2.",
                "Subtraction is NOT commutative: 3 − 8 is not the same as 8 − 3.",
                "Temperature dropped from 4 °C to −3 °C means a fall of 4 − (−3) = 7 °C."
              ],
              "keyTakeaway": "Two minus signs running together become a plus: a − (−b) = a + b.",
              "realWorldExample": "Removing a debt of GHS 20 from your account is a gain of GHS 20."
            },
            {
              "title": "Multiplying and Dividing Integers",
              "content": "For multiplication and division only, count the negative signs. An even number of negatives gives a positive answer; an odd number gives a negative answer. The numerals are multiplied or divided normally.",
              "bulletPoints": [
                "(-) × (-) = (+), so (-3) × (-4) = 12.",
                "(-) × (+) = (-), so (-3) × 4 = -12.",
                "(+) ÷ (-) = (-), so 20 ÷ (-5) = -4.",
                "(-18) ÷ (-3) = 6 because two negatives cancel.",
                "(-2) × (-3) × (-5) = -30: three negatives is an odd count, so the product is negative.",
                "Any integer multiplied by 0 gives 0; division by zero is undefined and must never be attempted."
              ],
              "keyTakeaway": "Same signs give positive, different signs give negative — for multiplication and division only.",
              "realWorldExample": "Losing 4 cedis a day for 6 days is 4 × 6 = 24 cedis lost, i.e. −24."
            },
            {
              "title": "Order of Operations with Integers",
              "content": "Evaluate in this order: brackets first, then of/indices, then division and multiplication left to right, then addition and subtraction left to right. BODMAS is the memory aid. Multiplication and division are equal partners — neither one comes first simply because a teacher said so; you go left to right.",
              "bulletPoints": [
                "(-2) + 3 × (-4): multiply first → 3 × (−4) = −12, then −2 + (−12) = −14.",
                "((-2) + 3) × (-4): bracket first → 1 × (−4) = −4. Notice a different answer from the same digits.",
                "12 ÷ (-3) × 2: left to right → (−4) × 2 = −8, not 12 ÷ (−6).",
                "−3² means −(3 × 3) = −9, while (−3)² = 9. Brackets change the meaning of a square."
              ],
              "keyTakeaway": "Rewrite the expression one operation at a time, copying unchanged parts exactly, to keep marks for method.",
              "realWorldExample": "A quiz scoring 5 for a correct answer and −2 for a wrong one: 8 correct and 3 wrong gives 8(5) + 3(−2) = 40 − 6 = 34 marks."
            }
          ],
          "commonMistakes": [
            "Answering −8 + 3 as −11 by adding the numerals and keeping the first sign.",
            "Reading a − as \"take away\" instead of \"negative\" when it is attached to a number.",
            "Turning a − (−b) into −b rather than +b.",
            "Squaring a negative without brackets and losing the sign.",
            "Doing addition before multiplication because it appears on the left.",
            "Believing that −20 is greater than −5 because 20 is greater than 5."
          ],
          "beceExamTips": [
            "Put every negative number you substitute into brackets; this single habit prevents most sign errors.",
            "Where a question asks for the difference between two temperatures, subtract the smaller from the larger and quote a positive answer unless direction is requested.",
            "If a statement asks \"which is the smallest\", look for the number furthest left on the line, not the biggest digit.",
            "Show each simplification step; a correct final answer from a wrong line of working can lose carried-out marks.",
            "A table of daily profits and losses is an integer question — total them by adding, not by ignoring the losses.",
            "Remember that an odd count of negative factors makes a product negative; count the signs before you multiply anything."
          ],
          "summaryChecklist": [
            "Can I place and order integers on a number line?",
            "Can I add and subtract integers including a double negative?",
            "Can I state the sign of a product or quotient before working it out?",
            "Can I simplify a mixed integer expression using BODMAS?",
            "Can I write a debt, loss or temperature situation as an integer statement and solve it?"
          ]
        },
    examples: [
      {
        id: 'ex-int-1',
        title: 'Subtracting Negative Integers',
        problem: 'Evaluate: (i) 8 - (-6) (ii) -15 - (-9)',
        stepByStepSolution: [
          'Step 1: For 8 - (-6), double negative becomes positive: 8 + 6 = 14.',
          'Step 2: For -15 - (-9), rewrite as: -15 + 9.',
          'Step 3: Since signs differ, subtract 9 from 15 (gives 6) and keep the negative sign: -6.',
        ],
        keyTakeaway: 'Subtracting a negative number is equivalent to adding its positive counterpart.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-integers',
      topicId: 'jhs1-math-t3-integers',
      title: 'Integers Mastery Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-int-1',
          quizId: 'quiz-jhs1-math-integers',
          questionText: 'Evaluate: (-7) × (-6)',
          optionA: '-42',
          optionB: '42',
          optionC: '-13',
          optionD: '13',
          correctOption: 'B',
          explanation: 'The product of two negative integers is always positive: (-7) × (-6) = +42.',
        },
        {
          id: 'q-int-2',
          quizId: 'quiz-jhs1-math-integers',
          questionText: 'Calculate: -12 + (-8) - (-5)',
          optionA: '-25',
          optionB: '-15',
          optionC: '15',
          optionD: '-9',
          correctOption: 'B',
          explanation: '-12 + (-8) = -20. Then -20 - (-5) = -20 + 5 = -15.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t4-bases',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 4,
    title: 'Number Bases and Binary System (Base 2)',
    description: 'Place values in base two, conversion between base ten and base two, and binary arithmetic.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=rsxT4FfRBaM',
    youtubeId: 'rsxT4FfRBaM',
    keyNotes: `Base 10 uses digits 0-9; Base 2 (Binary) uses only 0 and 1.
• Base 2 place values: 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32.
• Base 10 to Base 2: Successive division by 2, read remainders bottom to top.
• Base 2 addition: 1 + 1 = 10_two (write 0, carry 1); 1 + 1 + 1 = 11_two.`,
      detailedNotes: {
          "overview": "Base 10 is not special — it is simply what ten fingers produced. Computers use base 2, and timekeeping still uses base 60 and base 12. This lesson explains what a base is, converts numbers between bases, and does arithmetic inside bases other than ten.",
          "introduction": "A base tells you how many digits are available and what each column is worth. In base b the digits run from 0 to b − 1, and each column to the left is worth b times the column before it. The subscript (the small figure) names the base: 101₂ is read 'one-oh-one, base two'.",
          "realWorldContext": "Every phone, radio and computer chip in Ghana stores information in base 2 — one bit is on or off, exactly the two digits 1 and 0. The Ghana Card and exam numbers are coded strings whose reliability comes from binary representation. Meanwhile the older Ghanaian weight and time habits (12 eggs in a crate, 60 minutes in an hour) are living examples of non-decimal bases.",
          "objectives": [
            "Name the digits allowed in a given base and explain why a digit can never equal or exceed the base.",
            "Convert a base-10 number to base 2, 5 or 8 by repeated division.",
            "Convert from base 2, 5 or 8 to base 10 by expanding place values.",
            "Move between two non-decimal bases through base 10.",
            "Add, subtract and multiply simple numbers in base 2 and base 5 with correct carrying and borrowing."
          ],
          "sections": [
            {
              "title": "What a Base Actually Means",
              "content": "The numeral 245 in base ten really means 2 × 10² + 4 × 10¹ + 5 × 10⁰. Replace the ten with any base b and the reading pattern is identical: 245_b = 2b² + 4b + 5. The columns are always powers of the base, starting at b⁰ = 1 on the right.",
              "bulletPoints": [
                "Base 2 (binary) digits: 0, 1.",
                "Base 5 (quinary) digits: 0, 1, 2, 3, 4.",
                "Base 8 (octal) digits: 0 to 7.",
                "Base 10 (denary) digits: 0 to 9.",
                "A numeral containing the digit 7 cannot be base 5 or base 2 — that is an instant validity test."
              ],
              "keyTakeaway": "Base = number of digits available; place = power of the base.",
              "realWorldExample": "Counting in fives on the fingers of one hand gives base 5, the same logic a shopkeeper uses when selling eggs in dozens is base 12."
            },
            {
              "title": "Base 10 to Another Base: Repeated Division",
              "content": "Divide the denary number by the new base, write down the remainder, and keep dividing the quotients until you reach 0. Read the remainders from the LAST one written down to the FIRST — bottom to top.",
              "bulletPoints": [
                "25 ÷ 2 = 12 remainder 1; 12 ÷ 2 = 6 r 0; 6 ÷ 2 = 3 r 0; 3 ÷ 2 = 1 r 1; 1 ÷ 2 = 0 r 1.",
                "Reading remainders upward gives 11001, so 25₁₀ = 11001₂.",
                "The same method works for base 5 and 8: 25₁₀ = 100₅, and 25₁₀ = 31₈.",
                "Check by converting the answer back to base 10 — the two must match."
              ],
              "keyTakeaway": "Divide and record; the answer is the remainders read backwards.",
              "realWorldExample": "Writing the number of students in a class (say 34) as a binary ID tag uses repeated halving."
            },
            {
              "title": "Any Base to Base 10: Expansion",
              "content": "Write each digit times its power of the base and add. For 11001₂: 1 × 2⁴ + 1 × 2³ + 0 × 2² + 0 × 2¹ + 1 × 2⁰ = 16 + 8 + 0 + 0 + 1 = 25.",
              "bulletPoints": [
                "List the powers 2⁰, 2¹, 2², 2³, 2⁴, 2⁵ above the digits before substituting — this prevents positional errors.",
                "Binary place values are 1, 2, 4, 8, 16, 32, 64, 128.",
                "For base 5, places are 1, 5, 25, 125; 213₅ = 2(25) + 1(5) + 3(1) = 58.",
                "Letters A to F used in base 16 stand for 10 to 15."
              ],
              "keyTakeaway": "Expansion is the safest direction to test any conversion.",
              "realWorldExample": "A colour code like #FF0000 is hexadecimal; F means 15, so FF is 255 in base 10."
            },
            {
              "title": "Converting Between Two Non-Decimal Bases",
              "content": "There is no direct bridge, so go through base 10. First expand the given numeral to denary, then repeat-divide that denary value by the target base. If the two bases are powers of one another, such as base 2 and base 8 (since 8 = 2³), a shortcut by grouping three binary digits exists — but JHS 1 only requires the two-step route.",
              "bulletPoints": [
                "Example: change 1101₂ to base 5 → 1101₂ = 13₁₀ → 13 ÷ 5 = 2 r 3, 2 ÷ 5 = 0 r 2 → 23₅.",
                "Never carry a subscript into an answer without stating it; 13 and 13₁₀ are the same value but the working should show the base.",
                "Always write the final numeral with its base subscript."
              ],
              "keyTakeaway": "Two hops: base b to ten, then ten to base c.",
              "realWorldExample": "Turning a binary sensor reading into a decimal temperature on a phone display is exactly this double conversion."
            },
            {
              "title": "Arithmetic in Base 2 and Base 5",
              "content": "Column arithmetic works unchanged as long as you respect the base. In base 2, 1 + 1 = 10₂: write 0 and carry 1. In base 5, 3 + 4 = 12₅ because 7 in denary is one group of five and two left over. Borrowing is the reverse: in base 2 a borrowed 1 is worth 2 units in the next column down; in base 5 it is worth 5.",
              "bulletPoints": [
                "Addition facts in base 2: 0+0=0, 0+1=1, 1+1=10, 1+1+1=11.",
                "1101₂ + 1011₂ = 11000₂.",
                "In base 5 subtraction, 10₅ − 2₅ = 3₅ because 10₅ is 5 in denary.",
                "Multiplication table in base 2: 1 × 1 = 1 only; everything else involves carrying.",
                "Cross-check every base calculation by converting to denary, working there, and converting back."
              ],
              "keyTakeaway": "Carry when the column total reaches the base, borrow the base itself.",
              "realWorldExample": "Grouping eggs in fives: 13₅ + 12₅ = 30₅, which is 8 + 7 = 15 in ordinary counting."
            }
          ],
          "commonMistakes": [
            "Writing a digit equal to or bigger than the base, such as 2 in base 2.",
            "Reading the remainders top-to-bottom instead of bottom-to-top.",
            "Treating 10₂ as ten instead of two.",
            "Carrying 10 instead of 1 when adding in base 2, or carrying 1 for every 10 in base 5.",
            "Forgetting to start the powers at 2⁰ = 1 for the right-hand digit.",
            "Leaving out the base subscript in the final answer, which makes it ambiguous."
          ],
          "beceExamTips": [
            "A question that says \"find the value of x in base 2\" wants a numeral, not a decimal number — keep the answer in base 2.",
            "Show the repeated-division table as a column of quotients and remainders; markers award method for the layout.",
            "For \"which digit can never appear in base 5\", answer 5, 6, 7, 8, or 9 — the safest statement is \"digits from 5 upwards\".",
            "Verify by converting back. One minute of checking usually saves the whole question.",
            "If a sum is given in base 8 or 12, write the digits allowed at the top of your answer before doing anything else.",
            "Remember 2⁰ = 1; writing 2⁰ = 0 destroys an otherwise correct expansion."
          ],
          "summaryChecklist": [
            "Can I say which digits are legal in a given base?",
            "Can I change a denary number into base 2, 5 or 8 by repeated division?",
            "Can I expand a numeral to find its denary value?",
            "Can I convert between two non-decimal bases using base 10 as the bridge?",
            "Can I add and subtract in base 2 and base 5 with correct carrying and borrowing?"
          ]
        },
    examples: [
      {
        id: 'ex-bases-1',
        title: 'Converting Decimal to Binary',
        problem: 'Convert 25_ten to Base 2.',
        stepByStepSolution: [
          'Step 1: 25 ÷ 2 = 12 remainder 1.',
          'Step 2: 12 ÷ 2 = 6 remainder 0.',
          'Step 3: 6 ÷ 2 = 3 remainder 0.',
          'Step 4: 3 ÷ 2 = 1 remainder 1.',
          'Step 5: 1 ÷ 2 = 0 remainder 1.',
          'Step 6: Reading remainders from bottom to top: 11001_two.',
        ],
        keyTakeaway: 'Always read remainders from the last division upwards to the first.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-bases',
      topicId: 'jhs1-math-t4-bases',
      title: 'Number Bases Diagnostics',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-base-1',
          quizId: 'quiz-jhs1-math-bases',
          questionText: 'What is 13_ten expressed in base two?',
          optionA: '1101_two',
          optionB: '1011_two',
          optionC: '1110_two',
          optionD: '1001_two',
          correctOption: 'A',
          explanation: '13 ÷ 2 = 6 R 1; 6 ÷ 2 = 3 R 0; 3 ÷ 2 = 1 R 1; 1 ÷ 2 = 0 R 1. Bottom to top gives 1101_two.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t5-fractions',
    subjectId: 'math',
    level: 'JHS 1',
    term: 1,
    orderIndex: 5,
    title: 'Fractions, Decimals and Percentages',
    description: 'Proper, improper, mixed fractions, operations using LCM, BODMAS, and percentage conversions.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=uPc2m5Khffo',
    youtubeId: 'uPc2m5Khffo',
    keyNotes: `Fractions represent equal parts of a whole quantity.
• Addition/Subtraction: Convert to equivalent fractions with LCM denominator.
• Multiplication: Multiply numerators and denominators (cancel common factors).
• Division: Multiply by reciprocal of second fraction: (a/b) ÷ (c/d) = (a/b) × (d/c).
• Percentage to fraction: divide by 100; Fraction to percentage: multiply by 100%.`,
      detailedNotes: {
          "overview": "Fractions, decimals and percentages are three costumes for the same idea — a part of a whole. A Ghanaian market transaction says half a kilo, 0.5 kg and 50 % with equal ease. This lesson builds fluency in changing between the three forms and operating on each of them.",
          "introduction": "A fraction a/b names b equal parts of which a are taken; b must never be zero. A proper fraction has a numerator smaller than the denominator (3/4); an improper fraction has a numerator at least as large (7/4); a mixed number combines a whole and a proper fraction (1¾). Equivalent fractions describe the same amount with different numbers because both parts were multiplied or divided by the same value.",
          "realWorldContext": "A cup of rice at a jollof stand, 2/3 of a length of kente cloth, 5 pesewas as GHS 0.05 of a cedi, and a 30 % discount on a dress at Makola are one quantity in three notations. BECE data-analysis questions often give a pie chart in percentages that must be compared as fractions.",
          "objectives": [
            "Identify proper, improper, mixed and equivalent fractions and convert between them.",
            "Reduce a fraction to its lowest terms using common factors.",
            "Add and subtract fractions and mixed numbers using the least common denominator.",
            "Multiply and divide fractions, cancelling before multiplying.",
            "Convert between fractions, decimals and percentages and apply them to everyday quantities.",
            "Find a fraction or percentage of a quantity and solve BECE word problems."
          ],
          "sections": [
            {
              "title": "Equivalent Fractions and Lowest Terms",
              "content": "Multiply or divide BOTH the numerator and the denominator by the same non-zero number and the value is unchanged: 3/4 = 6/8 = 12/16. To reduce to lowest terms, divide by the HCF of the two numbers: 18/24 → divide both by 6 → 3/4. A fraction is in lowest terms when the only common factor left is 1.",
              "bulletPoints": [
                "3/4, 6/8 and 0.75 all name the same portion.",
                "To test equivalence by cross-multiplication: a/b = c/d only when ad = bc.",
                "Never cancel by adding or subtracting — only by multiplying or dividing.",
                "Mixed to improper: multiply the whole by the denominator, then add the numerator: 2⅗ = (2×5+3)/5 = 13/5.",
                "Improper to mixed: divide; the quotient is the whole and the remainder is the numerator: 17/5 = 3⅖."
              ],
              "keyTakeaway": "Whatever you do to the top you must do to the bottom.",
              "realWorldExample": "Asking for 2/4 of a loaf or 1/2 of a loaf gets you the same bread."
            },
            {
              "title": "Adding and Subtracting",
              "content": "Different denominators mean different-sized parts, so they must be made alike first. Find the LCM of the denominators — the least common denominator — rewrite each fraction as an equivalent one, then add or subtract the NUMERATORS only and keep the denominator.",
              "bulletPoints": [
                "1/3 + 1/4: LCD 12 → 4/12 + 3/12 = 7/12.",
                "Denominators are never added: 1/3 + 1/4 is not 2/7.",
                "5/6 − 1/4 → 10/12 − 3/12 = 7/12.",
                "With mixed numbers, either convert to improper fractions or work the whole numbers and fractions separately.",
                "Always reduce the final answer and convert an improper result back to a mixed number when the question uses mixed numbers."
              ],
              "keyTakeaway": "Common denominator first, then operate on top only.",
              "realWorldExample": "Using 1/2 m of fabric on Monday and 1/3 m on Tuesday uses 5/6 m of the 1 m piece."
            },
            {
              "title": "Multiplying and Dividing",
              "content": "Multiplication needs no common denominator: multiply straight across, cancelling any common factor between a numerator and a denominator anywhere in the expression first. Division requires turning the second fraction upside down (its reciprocal) and changing ÷ to ×.",
              "bulletPoints": [
                "2/3 × 9/10: cancel 3 into 9 → 2/1 × 3/10 = 6/10 = 3/5.",
                "A whole number is a fraction over 1: 4 × 2/3 = 8/3 = 2⅔.",
                "Of means multiply: 3/4 of 24 = 3/4 × 24 = 18.",
                "(2/5) ÷ (3/4) = (2/5) × (4/3) = 8/15.",
                "Dividing by a fraction smaller than 1 gives a LARGER answer — sensible when asking how many quarter-kilos make three kilos."
              ],
              "keyTakeaway": "Multiply straight across; divide by flipping the second fraction.",
              "realWorldExample": "Selling 3/4 of 24 oranges means 18 oranges sold."
            },
            {
              "title": "Decimals: Place Value After the Point",
              "content": "The first place after the decimal point is tenths, then hundredths, then thousandths. So 0.372 is 3 tenths, 7 hundredths, 2 thousandths. Fraction to decimal: divide the numerator by the denominator. Decimal to fraction: write the digits over 10, 100 or 1000 according to how many decimal places there are, then reduce.",
              "bulletPoints": [
                "3/4 = 0.75; 1/8 = 0.125; 1/3 = 0.333... (recurring).",
                "0.85 = 85/100 = 17/20.",
                "When adding or subtracting decimals, line up the POINTS, not the last digits.",
                "In multiplication, count total decimal places in the factors and place that many in the answer.",
                "Dividing by 10, 100 or 1000 moves the point left; multiplying moves it right."
              ],
              "keyTakeaway": "Zeros added to the right of a decimal do not change the value; zeros inserted after the point do.",
              "realWorldExample": "GHS 12.50 plus GHS 7.25 is GHS 19.75, not GHS 19.55 — point alignment is what makes money sums safe."
            },
            {
              "title": "Percentages: The Special Denominator 100",
              "content": "Per cent means 'out of one hundred'. To write a percentage as a fraction, place it over 100 and reduce; as a decimal, divide by 100. To change a fraction to a percentage, multiply by 100 %; to change a decimal, move the point two places right and add the sign.",
              "bulletPoints": [
                "45 % = 45/100 = 9/20 = 0.45.",
                "3/5 = 3/5 × 100 % = 60 %.",
                "Percentage of a quantity: 30 % of GHS 250 = 0.30 × 250 = GHS 75.",
                "Percentage increase: new = original × (1 + r); decrease: new = original × (1 − r).",
                "To find what per cent one number is of another: (part / whole) × 100 %."
              ],
              "keyTakeaway": "Fraction, decimal and percentage are interchangeable at any point in a calculation — choose the form that makes the arithmetic easiest.",
              "realWorldExample": "A GHS 200 shirt reduced by 25 % costs GHS 150; the shopkeeper's 25 % is 1/4 of the price."
            }
          ],
          "commonMistakes": [
            "Adding numerators and denominators together: 1/2 + 1/3 given as 2/5.",
            "Forgetting to convert a mixed number before multiplying, so 1½ × 2 is answered as 1⅓.",
            "Dividing without flipping the second fraction.",
            "Cancelling digits that merely look alike, such as crossing the 6 in 16/26.",
            "Misplacing the decimal point when converting, so 5 % is written as 0.5 instead of 0.05.",
            "Answering \"30 % of 250\" by computing 30 × 250.",
            "Reducing an improper fraction to a whole number and dropping the remainder."
          ],
          "beceExamTips": [
            "Circle the word \"of\" in a question — it always signals multiplication.",
            "Give the answer in the FORM the question asks: a percentage question needs a % sign, a fraction question needs lowest terms.",
            "When a word problem gives fractions of a total spent on different items, find the total fraction used first, then subtract from 1 to find what remains.",
            "Estimate as a sanity check: 3/4 of 96 must be near 72, not 24.",
            "For recurring decimals, know that 1/3, 1/6 and 1/9 never terminate — round only at the last step and state the accuracy.",
            "In a percentage change question, always divide by the ORIGINAL amount, not the new one.",
            "Show the LCD line explicitly; a correct sum with no common-denominator working can lose method marks."
          ],
          "summaryChecklist": [
            "Can I write equivalent fractions and reduce any fraction to lowest terms?",
            "Can I convert between mixed numbers and improper fractions?",
            "Can I add, subtract, multiply and divide fractions confidently?",
            "Can I move between fractions, decimals and percentages?",
            "Can I find a percentage of a quantity and reverse the operation?"
          ]
        },
    examples: [
      {
        id: 'ex-frac-1',
        title: 'Addition of Mixed Fractions',
        problem: 'Simplify: 2 ⅓ + 1 ½',
        stepByStepSolution: [
          'Step 1: Convert to improper fractions: 2 ⅓ = 7/3, 1 ½ = 3/2.',
          'Step 2: Find LCM of 3 and 2: LCM = 6.',
          'Step 3: Convert: 7/3 = 14/6 and 3/2 = 9/6.',
          'Step 4: Add numerators: 14/6 + 9/6 = 23/6 = 3 ⅚.',
        ],
        keyTakeaway: 'Always find the LCM of denominators before adding or subtracting fractions.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-fractions',
      topicId: 'jhs1-math-t5-fractions',
      title: 'Fractions & Percentages Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-frac-1',
          quizId: 'quiz-jhs1-math-fractions',
          questionText: 'Express 45% as a fraction in its simplest form:',
          optionA: '9/20',
          optionB: '4/5',
          optionC: '9/10',
          optionD: '45/10',
          correctOption: 'A',
          explanation: '45% = 45/100. Dividing numerator and denominator by 5 gives 9/20.',
        },
      ],
    },
  },

  // ==========================================
  // TERM 2
  // ==========================================
  {
    id: 'jhs1-math-t6-algebra',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 6,
    title: 'Algebraic Expressions and Substitution',
    description: 'Terms, coefficients, collecting like terms, expanding single brackets, and numerical substitution.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=vDqOoI-4Z6M',
    youtubeId: 'vDqOoI-4Z6M',
    keyNotes: `Algebra uses letters to represent unknown quantities.
• Like terms share identical variables and powers (e.g. 4x and 7x).
• Distributive Law: a(b + c) = ab + ac; -a(b - c) = -ab + ac.
• Substitution: Replace letters with numbers (put negative numbers in brackets).`,
      detailedNotes: {
          "overview": "Algebra is arithmetic with the answer hidden. Instead of computing 5 × 7, you write 5 × n and manipulate it as though you already knew n. This lesson teaches the vocabulary of algebra, how to collect like terms, how to expand brackets with the distributive law, and how to substitute numbers for letters without losing a sign.",
          "introduction": "A letter that stands for an unknown or changing number is called a variable. An algebraic expression is a collection of terms joined by + or −; each term is a product of a number (the coefficient) and one or more variables. In 7x, 7 is the coefficient and x is the variable. A single number such as 12 is a constant term because its value never changes.",
          "realWorldContext": "A trotro driver charging GHS 6 per passenger writes 6n for the day's take, where n is the number of fare payers. A kente weaver paid GHS 20 a day plus GHS 3 per metre earns 20 + 3m. In both cases the letter lets one formula describe every possible day, which is exactly what a shopkeeper, a mason counting blocks or a farmer counting baskets needs.",
          "objectives": [
            "Identify variables, constants, coefficients and terms in an algebraic expression.",
            "Recognise like and unlike terms and explain why only like terms can be combined.",
            "Simplify expressions by collecting like terms.",
            "Expand brackets using the distributive law, including a negative factor.",
            "Substitute given values, including negatives, into an expression and evaluate it.",
            "Write an algebraic expression from a real-life statement."
          ],
          "sections": [
            {
              "title": "The Vocabulary: Term, Coefficient, Variable, Constant",
              "content": "In 4x + 9y − 7, the terms are 4x, 9y and −7. The coefficients are 4 and 9, the variables are x and y, and −7 is the constant term. Note that a term carries its own sign: subtracting 7 means the term is −7, not 7.",
              "bulletPoints": [
                "A standalone variable such as m has an understood coefficient of 1.",
                "The coefficient of −5p is −5, sign included.",
                "x² means x × x, and its coefficient is 1; 3x² means 3 × x × x.",
                "An expression with one term is a monomial, two terms a binomial, three a trinomial."
              ],
              "keyTakeaway": "Always state the sign with the term; the sign in front of a term belongs to that term.",
              "realWorldExample": "If a bag of rice costs GHS 45 and sugar GHS s, then 45 + 2s is a binomial in which 45 is the constant and 2 is the coefficient of s."
            },
            {
              "title": "Like Terms — What Can Be Added",
              "content": "Like terms have exactly the same variables raised to exactly the same powers. 4x and 7x are alike; 4x and 4x² are not; 3ab and −5ba are alike, because the order of multiplication does not matter. To collect like terms, add or subtract only the coefficients and copy the variable part unchanged.",
              "bulletPoints": [
                "4x + 7x = 11x.",
                "9y − 2y = 7y, not 97y — the variable part is copied, never altered.",
                "4x + 3y stays as 4x + 3y; nothing can be combined.",
                "3ab + 5ba = 8ab.",
                "x + x = 2x, and x × x = x² — the two operations give different results."
              ],
              "keyTakeaway": "Same letters, same powers, or they cannot be merged.",
              "realWorldExample": "3 oranges plus 5 oranges is 8 oranges; 3 oranges plus 5 mangoes stays a mixed basket."
            },
            {
              "title": "The Distributive Law and Expansion",
              "content": "A factor outside a bracket multiplies EVERY term inside: a(b + c) = ab + ac. With a negative factor the sign of each inner term flips: −a(b − c) = −ab + ac. This is the rule used again and again in SHS factorisation and indices.",
              "bulletPoints": [
                "3(2x + 5) = 6x + 15.",
                "4(3a − 2b) = 12a − 8b.",
                "−2(x − 7) = −2x + 14 — the −2 multiplies the −7 as well.",
                "Common error: −2(x − 7) written as −2x − 14. Every term must be multiplied.",
                "Expansion works backwards, which is how 6x + 15 becomes 3(2x + 5) when you take out the HCF."
              ],
              "keyTakeaway": "Multiply the outside term by each inside term one at a time, carrying its sign.",
              "realWorldExample": "Packing 3 boxes each holding x pens and 5 erasers gives 3x + 15 items in total."
            },
            {
              "title": "Substitution: Putting Numbers in Place of Letters",
              "content": "To evaluate an expression, replace each letter with its given value and work out the result using the order of operations. Whenever the value being substituted is negative, wrap it in brackets before you do anything else.",
              "bulletPoints": [
                "If x = 4 and y = −3, then 2x + 5y = 2(4) + 5(−3) = 8 − 15 = −7.",
                "If a = −2, then a² = (−2)(−2) = 4 but −a² = −(2 × 2) = −4.",
                "3x − 2y with x = 5, y = −1 gives 15 − (−2) = 17.",
                "Fractions substituted into expressions: put brackets around the fraction too, then apply BODMAS.",
                "Never multiply a letter by the number you substituted; 5x with x = 4 is 5 × 4 = 20, not 54."
              ],
              "keyTakeaway": "Substitute, bracket, then operate — the brackets are what protect the sign.",
              "realWorldExample": "For a hire purchase item costing 200 + 30m, where m is the number of months, m = 6 gives GHS 380."
            },
            {
              "title": "Turning Words into Algebra",
              "content": "Mathematical English has fixed signals. 'Sum of', 'increased by' and 'more than' mean add; 'difference', 'less than' and 'decreased by' mean subtract; 'product', 'times' and 'of' mean multiply; 'quotient', 'shared equally' and 'divided by' mean divide; 'is' or 'was' means equals.",
              "bulletPoints": [
                "'Five more than twice a number' → 2n + 5.",
                "'The difference between a number and seven' → n − 7.",
                "'Three times the sum of a number and four' → 3(n + 4), brackets are essential.",
                "'Half of a number, increased by six' → n/2 + 6.",
                "'The square of a number added to five' → n² + 5, while 'five squared' is 25."
              ],
              "keyTakeaway": "Read for the LAST operation mentioned — it usually sits outermost in the expression.",
              "realWorldExample": "'Twice the price of a loaf plus GHS 3 for groundnut' becomes 2p + 3."
            }
          ],
          "commonMistakes": [
            "Combining unlike terms, e.g. 4x + 3y = 7xy.",
            "Writing x + x as x² or x × x as 2x.",
            "Distributing to only the first term inside a bracket.",
            "Losing the sign change when a negative factor is distributed.",
            "Substituting 5 for m in 3m and writing 35 instead of 15.",
            "Squaring a negative number without brackets and reporting the wrong sign.",
            "Treating a standalone variable as though its coefficient were 0 rather than 1."
          ],
          "beceExamTips": [
            "Rewrite the expression with like terms grouped and colour-bracketed before you simplify; markers follow the grouping.",
            "When a question says \"simplify\", the answer must contain no brackets and no like terms left together.",
            "In substitution questions, write the expression once with the brackets in place — that line earns method marks even if arithmetic fails later.",
            "a − (b − c) equals a − b + c. Watch the sign before the bracket; it is the most frequently lost mark in this topic.",
            "If two expressions are said to be equal for all values, match coefficients to find the unknown letters.",
            "Read \"twice the sum of\" as 2(x + y), not 2x + y; brackets come from the word \"sum\" being taken first."
          ],
          "summaryChecklist": [
            "Can I name the terms, coefficients and constants in an expression?",
            "Can I tell like terms from unlike terms and justify it?",
            "Can I simplify an expression by collecting like terms?",
            "Can I expand a bracket with a positive and a negative factor?",
            "Can I substitute negative values correctly?",
            "Can I convert a sentence into an algebraic expression?"
          ]
        },
    examples: [
      {
        id: 'ex-alg-1',
        title: 'Collecting Like Terms',
        problem: 'Simplify: 5x + 3y - 2x + 7y',
        stepByStepSolution: [
          'Step 1: Group like terms: (5x - 2x) + (3y + 7y).',
          'Step 2: Combine coefficients: 3x + 10y.',
        ],
        keyTakeaway: 'Never combine unlike terms: 3x + 10y cannot be written as 13xy!',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-algebra',
      topicId: 'jhs1-math-t6-algebra',
      title: 'Algebraic Expressions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-alg-1',
          quizId: 'quiz-jhs1-math-algebra',
          questionText: 'If x = -3, what is the value of x² + 2x?',
          optionA: '-15',
          optionB: '3',
          optionC: '15',
          optionD: '-3',
          correctOption: 'B',
          explanation: '(-3)² + 2(-3) = 9 - 6 = 3.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t7-linearequations',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 7,
    title: 'Linear Equations in One Variable',
    description: 'Solve first-degree equations, equations with brackets, clearing fractions, and word problems.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=B3ysZqiJozM',
    youtubeId: 'B3ysZqiJozM',
    keyNotes: `A linear equation contains an unknown variable with power 1 and an equals sign (=).
• Golden Rule: Whatever you do to LHS, you must do to RHS.
• Transposition: moving across = flips operation (+ becomes -, × becomes ÷).
• Eliminate fractions by multiplying every term by the LCM of denominators.`,
      detailedNotes: {
          "overview": "A linear equation is a balance. The variable has power one, and the task is to discover the single value that keeps both sides equal. This lesson covers transposition, handling brackets and fractions, and converting a word problem into an equation that can actually be solved.",
          "introduction": "An equation states that two expressions are equal. It is linear in one variable when it can be written as ax + b = c with a ≠ 0. The solution is the value of the variable that makes the statement true, and it is checked by substituting back. Solving means undoing operations in the reverse order they were applied, while keeping the balance intact.",
          "realWorldContext": "A market woman selling GHS 8 bars of soap per carton works out how many cartons she moved when takings are GHS 184: 8n = 184. A family splitting a GHS 300 electricity bill among adults and children with children paying half an adult share writes a small linear equation. Every hire purchase, transport budget and share of farm produce in Ghana reduces to one of these.",
          "objectives": [
            "Identify a linear equation in one variable and distinguish it from a non-linear one.",
            "Solve one-step and two-step equations by inverse operations.",
            "Solve equations containing brackets by expanding first.",
            "Solve equations with fractional coefficients by clearing denominators.",
            "Form and solve an equation from a word problem, then verify the root."
          ],
          "sections": [
            {
              "title": "The Balance Principle",
              "content": "Whatever is done to the left-hand side must be done to the right-hand side. Adding, subtracting, multiplying or dividing both sides by the same non-zero number produces an equivalent equation with the same solution. That single rule generates every technique in this lesson.",
              "bulletPoints": [
                "x + 5 = 12 → subtract 5 from both sides → x = 7.",
                "3x = 21 → divide both sides by 3 → x = 7.",
                "x/4 = 6 → multiply both sides by 4 → x = 24.",
                "−2x = 9 → divide by −2 → x = −4.5.",
                "An equation with the variable on both sides is solved by collecting variables on one side and numbers on the other."
              ],
              "keyTakeaway": "Do not \"move and flip\" by magic — you are adding or subtracting the same amount from both sides.",
              "realWorldExample": "Two identical bags and a 5 kg weight balance 17 kg. Removing the 5 kg leaves 2 bags at 12 kg, so one bag is 6 kg."
            },
            {
              "title": "Transposition and Multi-Step Equations",
              "content": "To isolate the variable, undo operations in the order: addition/subtraction first, then multiplication/division. When the variable appears on both sides, gather it on the side that keeps the coefficient positive — it reduces sign errors.",
              "bulletPoints": [
                "5x − 3 = 2x + 9 → 5x − 2x = 9 + 3 → 3x = 12 → x = 4.",
                "Check: LHS = 5(4) − 3 = 17, RHS = 2(4) + 9 = 17. Equal, so x = 4 is correct.",
                "2(x + 3) = 14 → expand → 2x + 6 = 14 → 2x = 8 → x = 4.",
                "A −(x − 4) = 9 becomes −x + 4 = 9, so −x = 5 and x = −5.",
                "If all the variables cancel and a false statement remains (such as 3 = 7), there is no solution; a true statement such as 5 = 5 means every value works."
              ],
              "keyTakeaway": "Simplify, collect, isolate, then substitute back to verify.",
              "realWorldExample": "If adding 3 to double my age gives 33, then 2a + 3 = 33 gives a = 15."
            },
            {
              "title": "Clearing Fractions",
              "content": "Multiply EVERY term on both sides by the LCM of the denominators. This is the fastest and safest route when fractions appear, and it removes the risk of mis-adding fractional parts.",
              "bulletPoints": [
                "x/2 + x/3 = 10: LCM 6 → 3x + 2x = 60 → 5x = 60 → x = 12.",
                "(x + 1)/4 = 3 → multiply by 4 → x + 1 = 12 → x = 11.",
                "When a fraction has an expression on top, treat the numerator as bracketed: x/3 + 2 means (x/3) + 2, while (x + 2)/3 is different.",
                "Decimal coefficients: multiply by 10, 100 or 1000 to clear the point first."
              ],
              "keyTakeaway": "Clear the denominators at the very first step and the rest is ordinary algebra.",
              "realWorldExample": "Splitting GHS x into halves and thirds that total GHS 10 is exactly x/2 + x/3 = 10."
            },
            {
              "title": "Equations from Words",
              "content": "Name the unknown with a letter and write down what is done to it, in order. Then reverse those steps. Choose a letter that reminds you of the quantity, say l for length, and state the unit in the final answer.",
              "bulletPoints": [
                "'The sum of three consecutive even numbers is 48': let them be n, n + 2, n + 4 → 3n + 6 = 48 → n = 14, so 14, 16, 18.",
                "'Five years ago my father was three times as old as I am': F − 5 = 3S.",
                "Perimeter problems: 2(l + w) = P, with w given in terms of l.",
                "Money problems: total = price × quantity, so a mixture of GHS 2 and GHS 5 items gives 2a + 5b = total.",
                "Always answer the question actually asked — if it wants the largest number, do not stop at n."
              ],
              "keyTakeaway": "Define the unknown in a sentence before writing any algebra; that sentence is what earns the method mark.",
              "realWorldExample": "If 3 exercise books and a GHS 2 pen cost GHS 17, then 3b + 2 = 17 and one book costs GHS 5."
            },
            {
              "title": "Checking a Solution",
              "content": "Substitution back into the ORIGINAL equation is the accepted check. Both sides must reduce to the same number. Do this on every BECE equation because a single sign error makes the whole answer wrong, and the check takes ten seconds.",
              "bulletPoints": [
                "Substitute into the question as printed, not into a simplified version of it.",
                "Evaluate LHS and RHS separately and write both values.",
                "If they differ, re-check distribution and sign changes first — those are the usual causes.",
                "A root that makes a denominator zero must be rejected."
              ],
              "keyTakeaway": "A verified answer is a protected answer.",
              "realWorldExample": "For 2x + 3 = 11, x = 4 gives LHS = 2(4) + 3 = 11 = RHS."
            }
          ],
          "commonMistakes": [
            "Dividing only part of one side of the equation.",
            "Forgetting to multiply a constant term when clearing fractions.",
            "Writing (x + 2)/3 as x/3 + 2.",
            "Dropping the negative when a bracket preceded a subtraction.",
            "Reporting n when the question asked for the greatest of three consecutive numbers.",
            "Assuming x = 0 means \"no solution\"; the correct statement is that the solution set is empty.",
            "Changing 3 − x into x − 3 during transposition."
          ],
          "beceExamTips": [
            "Line up each equation step vertically so the marker can follow the balance being kept.",
            "Where the question gives a geometric figure, use the formula first to create the equation — method marks sit in the formula line.",
            "For word problems, write \"Let the number be x\" explicitly; that statement alone is often marked.",
            "If the answer must be a whole number (people, books, bags), reject a fractional root and say why.",
            "When both sides are equal after cancelling the variable, state 'no solution' or 'infinite solutions' as appropriate rather than writing 0.",
            "Always finish with the units the question introduced, e.g. x = 4 cm."
          ],
          "summaryChecklist": [
            "Can I recognise a linear equation in one variable?",
            "Can I solve two-step equations and equations with the variable on both sides?",
            "Can I expand brackets and then isolate the variable?",
            "Can I clear fractions by multiplying by the LCM?",
            "Can I form an equation from a word problem and check the root?"
          ]
        },
    examples: [
      {
        id: 'ex-leq-1',
        title: 'Solving an Equation with Brackets',
        problem: 'Solve for x: 3(2x - 4) = 18',
        stepByStepSolution: [
          'Step 1: Expand brackets: 6x - 12 = 18.',
          'Step 2: Add 12 to both sides: 6x = 18 + 12 => 6x = 30.',
          'Step 3: Divide by 6: x = 5.',
        ],
        keyTakeaway: 'Always substitute your answer back into original equation to check correctness.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-linearequations',
      topicId: 'jhs1-math-t7-linearequations',
      title: 'Linear Equations Mastery Test',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-leq-1',
          quizId: 'quiz-jhs1-math-linearequations',
          questionText: 'Solve for y: 5y + 8 = 33',
          optionA: 'y = 4',
          optionB: 'y = 5',
          optionC: 'y = 6',
          optionD: 'y = 7',
          correctOption: 'B',
          explanation: '5y = 33 - 8 => 5y = 25 => y = 5.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t8-ratios',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 8,
    title: 'Ratio, Proportion and Sharing',
    description: 'Simplifying ratios, dividing quantities in given ratios, direct proportion, and inverse proportion.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=djFApaAFIDY',
    youtubeId: 'djFApaAFIDY',
    keyNotes: `A ratio compares quantities of the same kind by division.
• Ratios have no units; quantities must have the same unit before comparing.
• Sharing in ratio: 1 part = Total Amount / Total Parts.
• Direct proportion: Unitary method (find 1, then multiply).
• Inverse proportion: Product is constant (Workers × Days = Constant).`,
      detailedNotes: {
          "overview": "A ratio compares quantities of the same kind, and a proportion states that two ratios are equal. Together they handle sharing, scaling recipes, map distances and speed — the most heavily used arithmetic in commerce. This lesson builds the three forms of ratio, the sharing method, and the difference between direct and inverse proportion.",
          "introduction": "The ratio of a to b is written a : b and behaves like the fraction a/b. Its terms must be in the same unit before it is simplified, and a simplified ratio still uses whole numbers. A rate compares different units, such as GHS per kg or km per hour; a proportion is a statement that two ratios match, and it is solved by the unitary method or by cross-multiplication.",
          "realWorldContext": "A jollof recipe scaled from 4 plates to 30 is ratio work. Land survey plans for a plot in Tarkwa use a scale such as 1 : 500. A farmer mixing fertiliser at 2 : 3 with topsoil and trotro fares quoted per mile are all proportions. Sharing inheritance among children in specified ratio is a standard Ghanaian consumer-maths situation.",
          "objectives": [
            "Write, simplify and compare ratios in three terms.",
            "Convert a ratio to fractions of a whole and share a quantity in a given ratio.",
            "Scale a quantity up or down using a ratio.",
            "Solve a proportion using the unitary method and by cross-multiplication.",
            "Distinguish direct from inverse proportion and set up the correct equation."
          ],
          "sections": [
            {
              "title": "Writing and Simplifying Ratios",
              "content": "Simplify a ratio by dividing every term by their common HCF, exactly as a fraction is reduced but without producing a fraction. Ratios have no units; the quantities being compared must first be given in one unit.",
              "bulletPoints": [
                "12 : 18 divides by 6 to give 2 : 3.",
                "1/2 : 1/3 — multiply both terms by 6 to clear fractions → 3 : 2.",
                "0.4 : 1.6 — multiply by 10 → 4 : 16 → 1 : 4.",
                "250 g to 1 kg must be read as 250 g : 1000 g = 1 : 4, not 250 : 1.",
                "A three-term ratio such as 2 : 3 : 5 is handled by the same rules; total parts = 10."
              ],
              "keyTakeaway": "Same units first, then divide through by the HCF until the terms share no factor.",
              "realWorldExample": "If a class has 18 girls and 12 boys, the girl-to-boy ratio is 3 : 2 and boys-to-class is 12 : 30 = 2 : 5."
            },
            {
              "title": "Sharing in a Given Ratio",
              "content": "Add the parts of the ratio to find the number of equal shares. One share (one part) equals the total amount divided by the total number of parts. Multiply the value of one part by each figure in the ratio, and check the pieces add back to the total.",
              "bulletPoints": [
                "Share GHS 450 in the ratio 2 : 3 → total parts 5 → one part = 90 → shares are GHS 180 and GHS 270.",
                "Check: 180 + 270 = 450 and 180 : 270 = 2 : 3.",
                "For three people, 3 : 4 : 5 of 60 bags → one part 4 → 12, 16 and 20 bags.",
                "A fraction of a whole comes from the same idea: the second person receives 3/5 of the money.",
                "Where the total is unknown but one share is known, work out one part first, then rebuild the total."
              ],
              "keyTakeaway": "Total parts is the number you divide by — this is the step candidates most often skip.",
              "realWorldExample": "Two traders contribute GHS 4000 and GHS 6000 to stock, so profit is split 2 : 3; on a GHS 1500 profit one takes GHS 600 and the other GHS 900."
            },
            {
              "title": "Direct Proportion and the Unitary Method",
              "content": "Two quantities are in direct proportion when an increase in one produces the same fractional increase in the other; their ratio stays constant. Find the value of one unit, then multiply by the required number of units.",
              "bulletPoints": [
                "If 5 notebooks cost GHS 12.50, one costs GHS 2.50 and 9 cost GHS 22.50.",
                "Equivalent form: cost/number is constant, so 12.50/5 = x/9 → x = 22.50.",
                "Cross-multiplication: a/b = c/d gives ad = bc.",
                "Map scales: 1 : 500000 means 1 cm on the map is 5 km on the ground.",
                "Recipes, fuel consumption and earnings per hour are direct proportion."
              ],
              "keyTakeaway": "More of one means more of the other — divide to find one, then multiply.",
              "realWorldExample": "A trotro uses 4 litres for 60 km; for 150 km it needs 150/60 × 4 = 10 litres."
            },
            {
              "title": "Inverse Proportion",
              "content": "Two quantities are in inverse proportion when an increase in one forces a matching decrease in the other, so their PRODUCT stays constant. This is the case for workers and days, speed and time, or length and width of a fixed-area rectangle.",
              "bulletPoints": [
                "If 6 workers finish a job in 12 days, then workers × days = 72, so 9 workers need 72/9 = 8 days.",
                "A car at 60 km/h takes 3 hours; at 90 km/h it takes 60 × 3 / 90 = 2 hours.",
                "Compare with direct: in inverse proportion you multiply the original pair, then divide.",
                "More workers can never mean more days; if your answer rises while the worker count rises, the setting is wrong.",
                "A fixed volume or area problem, such as 2 m by 3 m becoming 1 m wide, is inverse: length must double."
              ],
              "keyTakeaway": "Direct keeps a ratio constant; inverse keeps a product constant.",
              "realWorldExample": "Provisions for 20 students last 15 days; with 25 students the same stock lasts 20 × 15 / 25 = 12 days."
            },
            {
              "title": "Rates, Scales and Unit Comparisons",
              "content": "A rate carries two different units. Rate problems are solved by converting one or both quantities until the required unit appears. Speed, price per kilogram and heartbeats per minute are rates.",
              "bulletPoints": [
                "Speed = distance ÷ time; 180 km in 2.5 hours is 72 km/h.",
                "Convert km/h to m/s by multiplying by 1000/3600, i.e. divide by 3.6.",
                "Best-buy questions compare unit prices: GHS 12 for 4 kg is GHS 3 per kg and beats GHS 10 for 4 kg at GHS 2.50 per kg.",
                "Density = mass ÷ volume, and is a rate used in integrated science.",
                "Exchange-style questions (cedi to dollars) are direct proportion in rate clothing."
              ],
              "keyTakeaway": "Reduce to ONE unit, then scale — that single habit answers almost every rate question.",
              "realWorldExample": "Comparing GHS 7.50 for 250 g of powdered milk with GHS 26.00 for 1 kg means finding the price per kilogram for both."
            }
          ],
          "commonMistakes": [
            "Comparing 250 g with 1 kg as 250 : 1 instead of 1 : 4.",
            "Dividing the total by the wrong figure — the number of parts, not the number of items.",
            "Adding the ratio terms and forgetting them in the answer.",
            "Using cross-multiplication on an inverse proportion question and getting an answer that moves the wrong way.",
            "Simplifying a ratio into a fraction and losing the colon form the question asked for.",
            "Confusing a rate (different units) with a ratio (same units).",
            "Reporting the smaller share when the question asks for the larger."
          ],
          "beceExamTips": [
            "State the total number of parts in the working; it is a separately marked step.",
            "If the question says 'in the ratio 2 : 3', your two answers must simplify back to 2 : 3 — test it before moving on.",
            "For scaling questions, decide first whether the quantity should increase or decrease and let that prediction judge your answer.",
            "When a scale is given as 1 : n, write the units of n immediately, since 1 cm to n cm is the true meaning.",
            "Speed questions require matching time units — convert minutes to hours before dividing.",
            "A table of values with a constant ratio is direct proportion; a constant product is inverse. Say which you found."
          ],
          "summaryChecklist": [
            "Can I simplify a ratio of whole numbers, fractions and decimals?",
            "Can I share an amount in a given ratio and check it?",
            "Can I solve a direct proportion by the unitary method and by cross-multiplication?",
            "Can I recognise and solve an inverse proportion situation?",
            "Can I compare unit prices, speeds and scales?"
          ]
        },
    examples: [
      {
        id: 'ex-rat-1',
        title: 'Dividing Money in a Ratio',
        problem: 'Share GHS 600 between Kwame and Ama in the ratio 3 : 2.',
        stepByStepSolution: [
          'Step 1: Total parts = 3 + 2 = 5 parts.',
          'Step 2: Value of 1 part = 600 / 5 = GHS 120.',
          'Step 3: Kwame (3 parts) = 3 × 120 = GHS 360.',
          'Step 4: Ama (2 parts) = 2 × 120 = GHS 240.',
          'Step 5: Check: 360 + 240 = 600.',
        ],
        keyTakeaway: 'Always verify that individual shares sum up to the total original quantity.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-ratios',
      topicId: 'jhs1-math-t8-ratios',
      title: 'Ratio & Proportion Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-rat-1',
          quizId: 'quiz-jhs1-math-ratios',
          questionText: 'Express 50 pesewas to 2 Cedis as a simplified ratio:',
          optionA: '25 : 1',
          optionB: '1 : 4',
          optionC: '1 : 25',
          optionD: '50 : 2',
          correctOption: 'B',
          explanation: 'Convert 2 Cedis to 200 pesewas. Ratio is 50 : 200 = 1 : 4.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t9-linesangles',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 9,
    title: 'Lines and Angles',
    description: 'Classify angles, complementary, supplementary, vertically opposite, and parallel lines with transversals.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=P3AOoLbA3us',
    youtubeId: 'P3AOoLbA3us',
    keyNotes: `Fundamental angle theorems:
• Angles on a straight line = 180°; Angles at a point = 360°.
• Vertically opposite angles are equal.
• Parallel lines: Alternate (Z) angles are equal; Corresponding (F) angles are equal; Co-interior (C) angles sum to 180°.`,
      detailedNotes: {
          "overview": "Angle facts about straight lines, intersecting lines and parallel lines are the tools that let you find an unknown angle without measuring. This lesson builds theorems in the order BECE uses them, names each angle pair correctly, and trains the habit of writing a reason beside every number.",
          "introduction": "An angle is the turn between two rays meeting at a vertex, measured in degrees. Angles are classified as acute (less than 90°), right (exactly 90°), obtuse (between 90° and 180°), straight (180°) and reflex (between 180° and 360°). Complementary angles total 90°, supplementary angles total 180°, and a full turn about a point is 360°.",
          "realWorldContext": "Carpenters cut rafters at matching angles so roof pitches meet cleanly; a mason checks a corner is square with the 3-4-5 rule which depends on a right angle. Road junctions in Kumasi, the hand of a clock at 3 o'clock, and the angle of a ladder against a wall are the same geometry in the street.",
          "objectives": [
            "Classify angles as acute, right, obtuse, straight or reflex.",
            "Identify complementary, supplementary and adjacent angles.",
            "Use the angle sum facts for a straight line and for a point.",
            "Apply the vertically opposite angles theorem in intersecting-line diagrams.",
            "Name and use alternate, corresponding and co-interior angles formed by a transversal on parallel lines.",
            "Work an unknown-angle problem writing a reason for each step."
          ],
          "sections": [
            {
              "title": "Types of Angle and How to Say Them",
              "content": "Angles are read from the smaller turn unless the diagram marks a reflex arc. Naming uses three letters with the vertex in the middle: angle ABC, written ∠ABC, has its vertex at B.",
              "bulletPoints": [
                "Acute: 0° < angle < 90°.",
                "Right: exactly 90°, marked with a small square in diagrams.",
                "Obtuse: 90° < angle < 180°.",
                "Straight: 180°, the angle of a straight line.",
                "Reflex: 180° < angle < 360° — the answer when the arc is drawn the long way round.",
                "The clock at 4 o'clock makes 120° because each hour gap is 360° ÷ 12 = 30°."
              ],
              "keyTakeaway": "Each hour mark on a clock is 30°, each minute mark is 6°.",
              "realWorldExample": "A ladder leaning against a wall at 60° leaves a 30° angle with the ground because the wall angle is 90°."
            },
            {
              "title": "Angles on a Straight Line and at a Point",
              "content": "Angles that stand on one side of a straight line add to 180°. Angles all the way round a point add to 360°. Adjacent angles share a vertex and one arm; angles on a straight line are always adjacent supplementary pairs.",
              "bulletPoints": [
                "If a straight line is split into 70° and x, then x = 110°.",
                "Three angles 3x, x and 60° on one side of a line give 4x + 60 = 180, so x = 30.",
                "Round a point: 100°, 130° and x give x = 360 − 230 = 130°.",
                "Linear pair: two adjacent angles whose outer arms form a straight line, so they sum to 180°.",
                "Complementary pair: two angles summing to 90°, common when a right angle is divided."
              ],
              "keyTakeaway": "Line means 180°, point means 360° — decide which one the unknown sits on before writing an equation.",
              "realWorldExample": "A corner of a room is 90°; if a shelf divides it into 35° and x, then x = 55°."
            },
            {
              "title": "Vertically Opposite Angles",
              "content": "When two straight lines cross, the angles facing each other across the intersection are equal. This follows because each pair is supplementary to the same angle, so they must match one another.",
              "bulletPoints": [
                "If one angle at a crossroads is 65°, the angle opposite it is also 65°.",
                "The other two angles are each 180° − 65° = 115°.",
                "The four angles about the intersection always total 360°.",
                "Never assume an angle is vertically opposite unless two straight lines actually cross at that point."
              ],
              "keyTakeaway": "Crossing straight lines produce two equal pairs: a = c and b = d.",
              "realWorldExample": "Two roads crossing in Madina form four angles; if one is 65° the diagonally opposite one is 65°."
            },
            {
              "title": "A Transversal Across Parallel Lines",
              "content": "When a transversal cuts two parallel lines, eight angles appear and they fall into named families. Knowing the shape each family traces is the surest way to recall the rule: Z for alternate, F for corresponding, C for co-interior.",
              "bulletPoints": [
                "Alternate angles (Z-shape) are equal — they lie between the parallels on opposite sides of the transversal.",
                "Corresponding angles (F-shape) are equal — they sit in the same relative position at each crossing.",
                "Co-interior (allied) angles (C-shape) sum to 180° — inside the parallels, same side of the transversal.",
                "These equalities hold ONLY for parallel lines; a diagram must mark them with matching arrows.",
                "If one angle in the eight is known, all seven others can be found using these three facts plus vertically opposite angles."
              ],
              "keyTakeaway": "Alternate and corresponding angles are equal; co-interior angles are supplementary.",
              "realWorldExample": "The two rails of a railway line crossed by a road give equal corresponding angles at each rail."
            },
            {
              "title": "Writing a Proof-Style Angle Calculation",
              "content": "BECE awards marks for stated reasons, not bare numbers. Each line takes this shape: 'x = 115° (co-interior angles, AB ∥ CD)'. Trace the line or arc in pencil to make sure you have used the right family.",
              "bulletPoints": [
                "Step 1 — mark the given angle and its vertically opposite twin.",
                "Step 2 — transfer it along the transversal using alternate or corresponding angles.",
                "Step 3 — close the job with a straight line (180°) or a point (360°).",
                "Step 4 — add up everything you found and confirm consistency with the diagram.",
                "Never round an angle unless the question asks; angle answers are exact."
              ],
              "keyTakeaway": "Every figure needs a reason in brackets beside it.",
              "realWorldExample": "Finding the cut for the second roof slope from the first uses corresponding angles on parallel rafters."
            }
          ],
          "commonMistakes": [
            "Adding angles to 360° when they lie on a straight line.",
            "Calling angles vertically opposite when the lines are not both straight.",
            "Applying the parallel-line rules to lines that are not marked parallel.",
            "Confusing alternate angles with corresponding angles and reporting the supplement instead.",
            "Naming angle BAC when the vertex is A but writing the middle letter wrongly.",
            "Measuring with a protractor when an exact calculation from a theorem is required.",
            "Reporting the reflex angle when the question wants the obtuse one, or the reverse."
          ],
          "beceExamTips": [
            "Write the theorem name in brackets after each answer; a number with no reason usually scores half.",
            "Mark unknown angles with x, y, z on the diagram as you find them — it stops you re-deriving the same angle.",
            "If a diagram says AB ∥ CD, underline it; that statement is permission to use the Z, F and C rules.",
            "Where a question says 'find x in terms of', leave the answer as an expression, not a number.",
            "An angle between two hands of a clock is a standard BECE case: hour hand 30° per hour, minute hand 6° per minute.",
            "Check that all angles you wrote around a point total 360° before turning the page."
          ],
          "summaryChecklist": [
            "Can I classify any angle as acute, right, obtuse, straight or reflex?",
            "Can I use the 180° line sum and the 360° point sum to form equations?",
            "Can I state and apply the vertically opposite angles theorem?",
            "Can I identify alternate, corresponding and co-interior angles in a transversal diagram?",
            "Can I present a full angle calculation with a reason for every step?"
          ]
        },
    examples: [
      {
        id: 'ex-la-1',
        title: 'Angles on a Straight Line',
        problem: 'Three angles on a straight line are 2x, 3x, and 40°. Find the value of x.',
        stepByStepSolution: [
          'Step 1: Angles on a straight line sum to 180°: 2x + 3x + 40° = 180°.',
          'Step 2: 5x + 40° = 180° => 5x = 140°.',
          'Step 3: x = 140 / 5 = 28°.',
        ],
        keyTakeaway: 'Always state your reason: "angles on a straight line sum to 180°".',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-linesangles',
      topicId: 'jhs1-math-t9-linesangles',
      title: 'Lines & Angles Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-la-1',
          quizId: 'quiz-jhs1-math-linesangles',
          questionText: 'Two angles are complementary. If one angle is 38°, what is the other angle?',
          optionA: '52°',
          optionB: '142°',
          optionC: '62°',
          optionD: '72°',
          correctOption: 'A',
          explanation: 'Complementary angles sum to 90°. Other angle = 90° - 38° = 52°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t10-polygons',
    subjectId: 'math',
    level: 'JHS 1',
    term: 2,
    orderIndex: 10,
    title: 'Plane Shapes and Polygons',
    description: 'Properties of triangles, quadrilaterals, exterior angle theorem, and polygon interior angle sum formula.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=NJb7zDOAupE',
    youtubeId: 'NJb7zDOAupE',
    keyNotes: `A polygon is a closed 2D shape with straight sides.
• Triangle angles sum = 180°. Exterior angle = sum of opposite interior angles.
• Polygon Interior Angle Sum: S = (n - 2) × 180°.
• Sum of exterior angles of any polygon = 360°.
• Regular polygon: each exterior = 360° / n; each interior = 180° - (360° / n).`,
      detailedNotes: {
          "overview": "Polygons are closed shapes with straight sides, and their angles obey two formulas that solve an enormous range of exam questions. This lesson organises shapes by sides and symmetry, proves the interior sum (n − 2) × 180°, and uses the constant 360° exterior sum to find the number of sides of a regular polygon.",
          "introduction": "A polygon is closed, has straight sides, and no side crosses another. Triangles, quadrilaterals, pentagons, hexagons and octagons are named by side count. A regular polygon has all sides equal and all angles equal; an irregular one does not. Convex polygons have every interior angle less than 180°, so a line extended along any side leaves the whole shape on one side.",
          "realWorldContext": "The tiles on a modern building facade in Accra are rectangles and hexagons; a stop sign is a regular octagon, which is why each exterior angle is 45°. Kente patterns repeat triangles, squares and diamonds, and a farmer laying out a plot uses the quadrilateral names — trapezium, parallelogram, rhombus — to describe it precisely.",
          "objectives": [
            "Name and classify polygons by number of sides, and identify regular from irregular.",
            "State the angle properties of the standard quadrilaterals.",
            "Derive and apply the interior angle sum S = (n − 2) × 180°.",
            "Use the exterior angle sum of 360° for any convex polygon.",
            "Calculate each interior and exterior angle of a regular polygon and find n from an angle.",
            "Find a missing angle in a polygon or quadrilateral diagram."
          ],
          "sections": [
            {
              "title": "Naming Shapes and Counting Sides",
              "content": "The Greek prefixes carry the count: tri-3, quad-4, penta-5, hexa-6, hepta-7, octa-8, nona-9, deca-10. A polygon with n sides also has n vertices and n interior angles. An n-gon can be split into (n − 2) triangles by drawing diagonals from one vertex, and that fact is where the angle-sum formula comes from.",
              "bulletPoints": [
                "Triangle 180°, quadrilateral 360°, pentagon 540°, hexagon 720°.",
                "Diagonals from one vertex of an n-gon: (n − 3); total diagonals: n(n − 3)/2.",
                "A regular hexagon splits neatly into 6 equilateral triangles around its centre.",
                "Shapes with curved boundaries, such as a circle, are not polygons."
              ],
              "keyTakeaway": "Every extra side adds 180° to the interior sum, because it adds one more triangle.",
              "realWorldExample": "A beehive cell is a regular hexagon: interior 120°, so three fit exactly at a point and pack without gaps."
            },
            {
              "title": "Triangles and Their Angle Rules",
              "content": "The angles of any triangle total 180°. The exterior angle of a triangle equals the sum of the two interior angles not adjacent to it. An equilateral triangle has 60° at every vertex; in an isosceles triangle the angles opposite the equal sides are equal.",
              "bulletPoints": [
                "Two angles 47° and 63° leave 180 − 110 = 70° for the third.",
                "Isosceles with vertex angle 40° gives base angles (180 − 40)/2 = 70° each.",
                "Exterior angle = sum of the two opposite interior angles.",
                "Longest side lies opposite the largest angle; a useful sanity check.",
                "A triangle cannot have two right or two obtuse angles."
              ],
              "keyTakeaway": "Use 180° for the interior, and remember the exterior-angle theorem answers many questions in one step.",
              "realWorldExample": "A gable roof with a 100° apex has base angles of 40° on each side."
            },
            {
              "title": "Quadrilaterals: Four Sides, Four Families",
              "content": "Every quadrilateral has interior angles summing to 360°, since it splits into two triangles. The families differ by side and angle properties, and each has its own theorem about diagonals.",
              "bulletPoints": [
                "Trapezium: one pair of parallel sides.",
                "Parallelogram: both pairs of opposite sides parallel, opposite sides and angles equal, diagonals bisect each other.",
                "Rhombus: parallelogram with all sides equal; diagonals bisect each other at right angles.",
                "Rectangle: parallelogram with four right angles; diagonals are equal and bisect each other.",
                "Square: both a rhombus and a rectangle — the most special case.",
                "Kite: two pairs of equal adjacent sides; one pair of opposite angles equal, diagonals meet at 90°."
              ],
              "keyTakeaway": "Properties run downward: a square inherits everything from rectangle and rhombus.",
              "realWorldExample": "A mason squares a door frame by checking the two diagonals are equal — the rectangle test."
            },
            {
              "title": "The Interior Angle Sum Formula",
              "content": "For a polygon with n sides, S = (n − 2) × 180°. It works because diagonals from one vertex cut the shape into (n − 2) triangles, each contributing 180°. To find one missing angle in an irregular polygon, subtract the sum of the known angles from S.",
              "bulletPoints": [
                "Octagon: (8 − 2) × 180 = 1080°.",
                "If five angles of a hexagon are 100°, 110°, 120°, 130°, 90°, the sixth = 720 − 550 = 170°.",
                "Working backwards: S = 1800 → (n − 2) = 10 → n = 12 sides.",
                "A polygon cannot have an interior sum that is not a multiple of 180°.",
                "The formula applies only to simple (non-crossing) polygons."
              ],
              "keyTakeaway": "n sides give (n − 2) triangles give (n − 2) × 180°.",
              "realWorldExample": "Tiles are chosen so angles fit round a point; 1080° for an octagon explains why regular octagons alone cannot tile a floor."
            },
            {
              "title": "Exterior Angles and Regular Polygons",
              "content": "Walking once around any convex polygon turns you through 360°, so the exterior angles always sum to 360°. In a regular polygon every exterior angle is the same, so each exterior = 360°/n and each interior = 180° − 360°/n. Interior and exterior at the same vertex are supplementary.",
              "bulletPoints": [
                "Regular pentagon: exterior 360/5 = 72°, interior 108°.",
                "Regular decagon: exterior 36°, interior 144°.",
                "Given exterior 24°: n = 360/24 = 15 sides.",
                "Given interior 150°: exterior 30°, so n = 12.",
                "Given interior 175°: exterior 5°, so n = 360 ÷ 5 = 72 sides. Dividing 360 by the exterior angle must give a whole number, otherwise no regular polygon has that angle."
              ],
              "keyTakeaway": "When a question mentions a REGULAR polygon and one angle, go through the exterior angle 360°/n — it is faster and safer.",
              "realWorldExample": "A stop sign is a regular octagon: each exterior 45°, each interior 135°."
            }
          ],
          "commonMistakes": [
            "Using n × 180° instead of (n − 2) × 180°.",
            "Dividing 360° by the interior angle instead of the exterior angle.",
            "Forgetting that a quadrilateral sum is 360°, not 180°.",
            "Assuming base angles are equal in a scalene triangle.",
            "Treating a kite as a parallelogram.",
            "Calling a circle a polygon because it is closed.",
            "Reporting the exterior angle when the question asks for the interior, and vice versa."
          ],
          "beceExamTips": [
            "Write S = (n − 2) × 180° before substituting; the formula line is marked separately.",
            "In a diagram with a missing angle, first work out S for the shape, then subtract the known angles in one line.",
            "For regular-polygon questions, find the exterior angle first: 360°/n. Almost every route opens from there.",
            "Where angles are given as algebra like (2x + 10)°, build the equation from the angle sum and solve for x, then compute the angle the question asked for.",
            "Confirm any answer for n is a whole number; a fractional side count means a set-up error.",
            "Remember two straight lines give 180° at a vertex: interior + exterior = 180° is often the link the question needs."
          ],
          "summaryChecklist": [
            "Can I name polygons by sides and classify regular from irregular?",
            "Can I state the angle and diagonal properties of each quadrilateral?",
            "Can I compute the interior sum for any polygon and find a missing angle?",
            "Can I use the 360° exterior sum to find n of a regular polygon?",
            "Can I convert between interior and exterior angles of a regular polygon?"
          ]
        },
    examples: [
      {
        id: 'ex-poly-1',
        title: 'Interior Angle Sum of a Polygon',
        problem: 'Calculate the sum of interior angles of a hexagon (6-sided polygon).',
        stepByStepSolution: [
          'Step 1: Formula: S = (n - 2) × 180° where n = 6.',
          'Step 2: S = (6 - 2) × 180° = 4 × 180° = 720°.',
        ],
        keyTakeaway: 'The sum of interior angles increases by 180° for each additional side.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-polygons',
      topicId: 'jhs1-math-t10-polygons',
      title: 'Polygons & Plane Shapes Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-poly-1',
          quizId: 'quiz-jhs1-math-polygons',
          questionText: 'What is the size of each exterior angle of a regular octagon (8 sides)?',
          optionA: '36°',
          optionB: '45°',
          optionC: '60°',
          optionD: '135°',
          correctOption: 'B',
          explanation: 'Exterior angle of a regular polygon = 360° / n = 360° / 8 = 45°.',
        },
      ],
    },
  },

  // ==========================================
  // TERM 3
  // ==========================================
  {
    id: 'jhs1-math-t11-construction',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 11,
    title: 'Geometric Construction',
    description: 'Use ruler and compass to construct perpendicular bisectors, angle bisectors, 60°, 90°, 45°, 30°, and triangles.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=jnXKJfezHVU',
    youtubeId: 'jnXKJfezHVU',
    keyNotes: `Geometric construction uses only a straight edge and compasses.
• Never erase construction arcs! Examiners look for intersecting arcs.
• Bisect line segment: arcs of same radius above and below.
• Construct 60°: intersection of radius equal to base arc.
• Bisect 60° gives 30°; bisect 90° gives 45°.`,
      detailedNotes: {
          "overview": "Construction is geometry done with only two tools: a ruler used as a straight edge and a pair of compasses. It proves facts by drawing, which is why examiners mark the arcs and not just the final line. This lesson covers the standard constructions of JHS 1 — bisecting a line and an angle, building the special angles, dropping perpendiculars, and constructing triangles and quadrilaterals from given measurements.",
          "introduction": "A construction is a drawing made to exact specification using a straight edge and compasses only; measuring angles with a protractor or lengths with a graduated ruler for the purpose of drawing is not construction. Compasses transfer a fixed distance, which is what makes an angle bisector or an equilateral triangle exact. Construction arcs are the evidence that the figure was built correctly.",
          "realWorldContext": "A carpenter marking the centre line of a door frame without a tape, a tailor folding and creasing to find the middle of a hem, and a surveyor laying out a right angle on overgrown land with a rope and pegs all use construction ideas. The 3 : 4 : 5 rope method for a right angle is still used on Ghanaian building sites.",
          "objectives": [
            "Use a straight edge and compasses correctly and keep the compass width fixed where required.",
            "Bisect a given line segment and construct its perpendicular bisector.",
            "Bisect a given angle and construct angles of 60°, 90°, 120°, 30°, 45° and 75°.",
            "Drop a perpendicular from a point to a line, on or off the line.",
            "Construct triangles from SSS, SAS and ASA data and quadrilaterals from given sides and diagonals.",
            "Locate the locus of points equidistant from two fixed points or at a fixed distance from one point."
          ],
          "sections": [
            {
              "title": "Tools, Setting Out and the Rules of the Room",
              "content": "Sharpen your pencil, open the compasses to the stated radius and lock it, and use the unmarked edge of the ruler for lines. Soft pencils smear; a hard 2H or HB line stays thin and readable. Keep all arcs light but visible.",
              "bulletPoints": [
                "Straight edge: for joining points, not for measuring.",
                "Compasses: for transferring lengths and drawing arcs.",
                "A protractor is allowed only when the question says \"measure\", never when it says \"construct\".",
                "Label every point with capital letters as you draw.",
                "Write a short note of the steps used; construction questions are marked on method."
              ],
              "keyTakeaway": "Read the verb in the question: construct, bisect, drop, or measure each demands a different technique.",
              "realWorldExample": "A mason finding the middle of a wall with a string and two equal loops is doing a perpendicular bisector."
            },
            {
              "title": "Bisecting a Line Segment and Its Perpendicular Bisector",
              "content": "To divide AB into two equal parts with compasses only: open the compasses to more than half of AB. With the point on A, draw arcs above and below the line. Keeping exactly the same radius, repeat from B so the arcs cross. Join the two crossing points; that line cuts AB at its midpoint and meets it at 90°.",
              "bulletPoints": [
                "The radius must be greater than half AB, or the arcs will not meet.",
                "The radius must not change between the A arcs and the B arcs.",
                "The joining line is the perpendicular bisector: every point on it is equidistant from A and B.",
                "The midpoint is where the arc-joining line crosses AB; verify AM = MB."
              ],
              "keyTakeaway": "Equal radii from both ends give two crossing arcs; the line through the crossings is both a bisector and a perpendicular.",
              "realWorldExample": "Marking the exact centre of a 6 m board for a shelf bracket uses this construction."
            },
            {
              "title": "Bisecting an Angle and Building the Standard Angles",
              "content": "To bisect angle BAC: from A draw an arc cutting both arms at D and E. From D and E, with the same radius, draw two arcs meeting at F. AF bisects the angle. Constructing 60° starts from an equilateral triangle; 90° comes from bisecting 180°; further bisections give 30° and 45°, and 60° plus 15° gives 75°.",
              "bulletPoints": [
                "60°: draw a base, mark the vertex with equal radii to form an equilateral triangle.",
                "120°: extend one arm of a 60° construction, or copy 60° twice from the same vertex.",
                "90°: bisect the straight angle at a point on a line.",
                "45°: bisect 90°. 30°: bisect 60°. 75°: bisect 150°, or place 60° and 15° together.",
                "Bisecting an angle gives a line on which every point is equidistant from the two arms."
              ],
              "keyTakeaway": "Only 60° and 90° are built directly; every other required angle is a bisection or a sum of them.",
              "realWorldExample": "A carpenter cutting two matching mitres from a 90° corner makes a 45° bisection."
            },
            {
              "title": "Perpendiculars from a Point and Angle Bisectors",
              "content": "To drop a perpendicular from point P to line l: with centre P draw an arc cutting l at two points X and Y. From X and Y with equal radii, draw arcs on the far side of l and join P to their crossing. If P lies outside the segment, the same construction still works; extend the line first if needed.",
              "bulletPoints": [
                "From a point ON the line: mark two equal distances along the line, then arcs below, then join.",
                "The shortest distance from a point to a line is the perpendicular distance.",
                "The locus of points equidistant from two fixed points A and B is the perpendicular bisector of AB.",
                "The locus of points equidistant from two intersecting lines is the angle bisector of those lines.",
                "The locus of points at a fixed distance r from a point O is the circle of radius r centred at O."
              ],
              "keyTakeaway": "Loci questions are construction questions in disguise — decide which bisector or circle you need.",
              "realWorldExample": "Placing a water tank equally far from two village wells means siting it on the perpendicular bisector between them."
            },
            {
              "title": "Constructing Triangles and Quadrilaterals",
              "content": "Every construction starts by drawing the one side you know completely, then building from its ends. For SSS, draw the base, then arcs of the other two lengths from each end. For SAS, draw the given side, construct the given angle at one end, and cut off the second side. For ASA, draw the side between the two given angles and construct both angles.",
              "bulletPoints": [
                "SSS: base AB, arc of radius AC from A, arc of radius BC from B; their crossing is C.",
                "SAS: base AB, angle at A, then mark the second length along the new arm.",
                "ASA: draw the included side, construct both angles, extend the arms to meet.",
                "RHS: draw the right angle at one end of the shorter side, then swing the hypotenuse arc to fix the third vertex.",
                "Quadrilaterals: split along a diagonal, construct the first triangle, then the second from the diagonal.",
                "A triangle is impossible if the two shorter sides do not exceed the third — check before drawing."
              ],
              "keyTakeaway": "Draw the fully known side first; everything else is an arc or angle swung from its ends.",
              "realWorldExample": "Laying out a triangular flower bed with sides 4 m, 5 m and 6 m is a scale SSS construction."
            }
          ],
          "commonMistakes": [
            "Changing the compass radius between the two sets of arcs, so the crossing is off-centre.",
            "Opening the compasses less than half the segment, so the arcs never meet.",
            "Erasing construction arcs — the marks are the evidence being marked.",
            "Using a protractor when the instruction says construct.",
            "Measuring a constructed angle to confirm it and reporting that as the construction.",
            "Drawing only one arc instead of a pair when bisecting.",
            "Forgetting to state the unit or scale when a construction is drawn to scale, such as 1 cm to 1 m."
          ],
          "beceExamTips": [
            "Leave every arc visible and never overwrite them with dark lines; the marker looks for intersecting arcs.",
            "State the scale used when the question gives measurements in metres, e.g. \"scale 1 cm : 1 m\", and write it on the diagram.",
            "Label all vertices with capital letters; unlabelled points lose accuracy marks even when the drawing is correct.",
            "Where the question asks for the length of a constructed segment, MEASURE it with a ruler at the end — construction and measurement are two separate instructions.",
            "For locus questions, draw the full figure and write the locus name beside it, for example \"perpendicular bisector of PQ\".",
            "Construct the required angle in the smallest steps: 60° first, then bisect or add, and keep each arc.",
            "If two answers are possible, as in SSA data, draw both triangles and say so."
          ],
          "summaryChecklist": [
            "Can I bisect a segment and draw its perpendicular bisector with compasses?",
            "Can I bisect an angle and construct 60°, 90°, 30°, 45°, 120° and 75°?",
            "Can I drop a perpendicular from a point to a line, on or off the line?",
            "Can I construct triangles from SSS, SAS, ASA and RHS data?",
            "Can I describe and draw the standard loci and link them to bisectors and circles?"
          ]
        },
    examples: [
      {
        id: 'ex-const-1',
        title: 'Bisection of an Angle',
        problem: 'Describe the key steps to bisect a given angle ABC.',
        stepByStepSolution: [
          'Step 1: With vertex B as center, draw an arc cutting arms BA and BC at points P and Q.',
          'Step 2: With center P, draw an arc inside the angle space.',
          'Step 3: With center Q and the SAME radius, draw an arc intersecting the first arc at point R.',
          'Step 4: Draw a straight ray from vertex B through point R. Ray BR bisects angle ABC.',
        ],
        keyTakeaway: 'Always keep compass radius constant when drawing intersecting arcs from P and Q.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-construction',
      topicId: 'jhs1-math-t11-construction',
      title: 'Geometric Construction Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-const-1',
          quizId: 'quiz-jhs1-math-construction',
          questionText: 'Which angle is obtained by bisecting a 90° angle?',
          optionA: '30°',
          optionB: '45°',
          optionC: '60°',
          optionD: '75°',
          correctOption: 'B',
          explanation: 'Bisecting means dividing into two equal halves: 90° ÷ 2 = 45°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t12-perimeterarea',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 12,
    title: 'Perimeter and Area of Plane Figures',
    description: 'Calculate boundary perimeter and flat area of rectangles, squares, triangles, parallelograms, and circles.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=rSVMrPu0__U',
    youtubeId: 'rSVMrPu0__U',
    keyNotes: `• Perimeter is the distance around the boundary (units: cm, m).
• Rectangle: P = 2(l + w), Area = l × w.
• Triangle: Area = ½ × base × perpendicular height.
• Circle: Circumference C = 2πr = πd; Area A = πr².`,
      detailedNotes: {
          "overview": "Perimeter measures the boundary; area measures the covering. Getting these two apart, and knowing which formula belongs to which shape, is the difference between a correct answer and a lost mark. This lesson builds the standard formulas, the unit rules that go with them, and composite figures made from rectangles and circles.",
          "introduction": "Perimeter is the total length around a closed figure, found by adding sides, so it is measured in units such as cm or m. Area is the amount of surface enclosed, measured in square units such as cm² or m². A figure can have the same perimeter and very different areas, which is why a farmer fencing 200 m of wire can still enclose more land by choosing the right shape.",
          "realWorldContext": "Buying tiles for a floor is an area problem; putting skirting round the wall is a perimeter problem. A plot survey in Kasoa is quoted in square metres, while the wall around it is quoted in metres. A cylindrical water tank holds a volume that depends on the base area times the height, which joins this topic to mensuration in SHS.",
          "objectives": [
            "Distinguish perimeter from area and state the correct unit for each.",
            "Calculate the perimeter and area of rectangles, triangles and parallelograms.",
            "Calculate the circumference and area of a circle using π, and take π as 22/7 or 3.14 as required.",
            "Find the area of trapezia, rhombi, kites and composite figures.",
            "Solve practical problems involving cost of fencing, tiling, carpeting and painting."
          ],
          "sections": [
            {
              "title": "Perimeter Against Area: Two Different Questions",
              "content": "Perimeter is a length; add the boundary and the answer carries one unit. Area is a surface; multiply two lengths and the answer carries a squared unit. A rectangle 8 cm by 5 cm has perimeter 2(8 + 5) = 26 cm and area 8 × 5 = 40 cm². Changing the shape without changing the perimeter changes the area.",
              "bulletPoints": [
                "Perimeter units: mm, cm, m, km.",
                "Area units: mm², cm², m², hectares; 1 hectare = 10,000 m².",
                "Conversion for area goes by 100, not 10: 1 m² = 10,000 cm².",
                "Among rectangles with a fixed perimeter, the square has the greatest area.",
                "Add all sides for perimeter, including hidden ones you must first deduce."
              ],
              "keyTakeaway": "Fence questions are perimeter; carpet, tile and paint questions are area.",
              "realWorldExample": "A 20 m by 15 m compound needs 70 m of fence but 300 m² of gravel."
            },
            {
              "title": "Rectangles, Triangles and Parallelograms",
              "content": "Rectangle: P = 2(l + w), A = l × w. Square: P = 4s, A = s². Triangle: A = ½ × base × PERPENDICULAR height — the height must meet the base at 90°, not run down a slanting side. Parallelogram: A = base × perpendicular height; the slant side is used only for perimeter, which is 2(a + b).",
              "bulletPoints": [
                "A triangle is half the parallelogram or rectangle on the same base and between the same parallels.",
                "Right-angled triangle: the two sides forming the right angle serve as base and height.",
                "Equilateral triangle of side s: A = (√3/4)s², or find the height first by Pythagoras.",
                "The diagonals of a parallelogram divide it into four equal-area triangles.",
                "Trapezium: A = ½(a + b)h, the average of the parallel sides times the height."
              ],
              "keyTakeaway": "For every area formula, ask whether the height given is perpendicular to the base.",
              "realWorldExample": "A gable end wall 6 m wide rising 2 m to its peak has triangle area ½ × 6 × 2 = 6 m² to paint."
            },
            {
              "title": "Circles: Circumference and Area",
              "content": "The circumference is the perimeter of a circle: C = 2πr = πd. The area is A = πr². The number π is the constant ratio of circumference to diameter, about 3.14159; use 22/7 when the radius is a multiple of 7, and 3.14 otherwise, or as the question directs.",
              "bulletPoints": [
                "Given diameter 14 cm: r = 7, C = 2 × 22/7 × 7 = 44 cm, A = 22/7 × 7² = 154 cm².",
                "Semicircle perimeter = πr + d, because the straight edge closes the shape.",
                "Semicircle area = ½πr².",
                "Quadrant area = ¼πr² and quadrant perimeter = ¼(2πr) + 2r.",
                "Area of a circular ring = π(R² − r²)."
              ],
              "keyTakeaway": "Square the radius, not the diameter; and add the diameter when a semicircle must be closed.",
              "realWorldExample": "A circular cistern of radius 1.4 m has base area 3.14 × 1.96 ≈ 6.16 m²."
            },
            {
              "title": "Rhombus, Kite and the Diagonal Method",
              "content": "Where the diagonals meet at right angles, the area is half the product of the diagonals: A = ½ d₁ d₂. This covers both the rhombus and the kite, and it is the standard route when side lengths and heights are not given.",
              "bulletPoints": [
                "Rhombus diagonals bisect each other at 90°, so four right-angled triangles result.",
                "Kite: one diagonal is bisected by the other at 90°; A = ½ d₁ d₂ still applies.",
                "Any quadrilateral whose diagonals are perpendicular can use the diagonal formula.",
                "Alternative rhombus area: base × perpendicular height."
              ],
              "keyTakeaway": "Two perpendicular diagonals give area = half their product.",
              "realWorldExample": "A diamond-shaped garden bed with diagonals 8 m and 6 m covers 24 m²."
            },
            {
              "title": "Composite Figures and Cost Problems",
              "content": "Complex shapes are handled by cutting them into rectangles, triangles and half-circles, finding each area, then adding or subtracting. A path round a lawn is the outer rectangle area minus the lawn area. Cost questions multiply the final area or length by a rate, so the unit must match the rate first.",
              "bulletPoints": [
                "Subtract cut-outs: a door or window allowance is removed from a painted wall area.",
                "Tiles needed = floor area ÷ area of one tile; round up, since partial tiles are bought whole.",
                "Fencing cost = perimeter × cost per metre; carpeting cost = area × cost per m².",
                "Keep every measurement in the same unit before the first multiplication.",
                "State the answer with the correct unit and, for money, two decimal places."
              ],
              "keyTakeaway": "Break, compute, then add or subtract — and only bring in the price at the very last step.",
              "realWorldExample": "Tiling a 3 m by 2.5 m floor with 25 cm square tiles needs 120 tiles, because 7.5 ÷ 0.0625 = 120."
            }
          ],
          "commonMistakes": [
            "Quoting an area in linear units or a perimeter in square units.",
            "Using the slant height as the height of a triangle or parallelogram.",
            "Squaring the diameter instead of the radius.",
            "Forgetting to halve the product in the triangle and trapezium formulas.",
            "Semicircle perimeter reported as πr with the diameter left out.",
            "Converting m² to cm² by multiplying by 100 instead of 10,000.",
            "Adding areas of overlapping parts of a composite figure twice.",
            "Multiplying a cost per metre by an area, or a cost per m² by a perimeter."
          ],
          "beceExamTips": [
            "Write the formula before substituting; marks are given for the correct formula even when arithmetic fails.",
            "When a question says \"take π = 22/7\", using 3.14 changes the answer and loses accuracy marks.",
            "Draw the composite figure divided into its parts and number them; the marker follows your partition.",
            "Check the reasonableness of the answer: an area of 15 for a 3 m by 5 m floor is right, but 8 for a perimeter is not.",
            "If a shape is described as 'a rectangle with a semicircle on one side', decide whether the joining side is included in the perimeter — usually it is not.",
            "In cost questions, carry the units through: m² × GHS per m² leaves GHS. Write that line."
          ],
          "summaryChecklist": [
            "Can I state perimeter and area with their correct units?",
            "Can I find the perimeter and area of rectangles, triangles, parallelograms and trapezia?",
            "Can I compute circumference and area of circles, semicircles and quadrants?",
            "Can I use the diagonal method for rhombi and kites?",
            "Can I solve composite-figure and cost problems end to end?"
          ]
        },
    examples: [
      {
        id: 'ex-pa-1',
        title: 'Area and Circumference of a Circle',
        problem: 'A circular garden has a diameter of 14 m. Taking π = 22/7, find its: (i) circumference (ii) area.',
        stepByStepSolution: [
          'Step 1: Radius r = diameter / 2 = 14 / 2 = 7 m.',
          'Step 2: Circumference C = 2πr = 2 × (22/7) × 7 = 44 m.',
          'Step 3: Area A = πr² = (22/7) × 7 × 7 = 154 m².',
        ],
        keyTakeaway: 'Always find the radius first by halving the diameter before calculating area.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-perimeterarea',
      topicId: 'jhs1-math-t12-perimeterarea',
      title: 'Perimeter & Area Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-pa-1',
          quizId: 'quiz-jhs1-math-perimeterarea',
          questionText: 'A triangle has a base of 12 cm and a perpendicular height of 8 cm. What is its area?',
          optionA: '96 cm²',
          optionB: '48 cm²',
          optionC: '40 cm²',
          optionD: '20 cm²',
          correctOption: 'B',
          explanation: 'Area = ½ × base × height = ½ × 12 × 8 = 48 cm².',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t13-datacollection',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 13,
    title: 'Data Collection and Frequency Tables',
    description: 'Tally charts, frequency distribution tables, vertical/horizontal bar charts, and pie chart sector angles.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=JC7DG8Qko9I',
    youtubeId: 'JC7DG8Qko9I',
    keyNotes: `Statistics starts with organizing raw numerical data:
• Tally marks are bundled in groups of 5.
• Frequency (f) is the count of occurrences.
• Bar charts have equal bar widths and equal spaces between bars.
• Pie chart sector angle = (f / Σf) × 360°.`,
      detailedNotes: {
          "overview": "Statistics begins with raw numbers and turns them into a table you can read at a glance. This lesson covers collecting data, sorting it into a tally and frequency table, choosing and drawing the right chart, and reading values back out of a bar chart or pie chart.",
          "introduction": "Data are pieces of information collected for a purpose. Raw data, called primary data, are collected first-hand for the question in hand; secondary data already exist, published by someone else such as the Ghana Statistical Service. Quantitative data are counted or measured; categorical data fall into named groups such as house or favourite food.",
          "realWorldContext": "A class monitor recording which students walk to school is collecting data. The Ghana Statistical Service census counts households every ten years; a school computes enrolment per house; a clinic records daily attendance. Each of these starts as a list of numbers and becomes a frequency table and a chart before anyone can act on it.",
          "objectives": [
            "Distinguish primary from secondary data and quantitative from categorical data.",
            "Arrange raw data in ascending or descending order and build a frequency table.",
            "Record and read tally marks in bundles of five.",
            "Choose an appropriate chart for a given set of data and draw it to scale.",
            "Read frequencies, differences and totals from bar charts and pie charts.",
            "Compute sector angles for a pie chart from a frequency table."
          ],
          "sections": [
            {
              "title": "Collecting and Sorting Data",
              "content": "Before drawing anything, order the raw data. Ordering exposes the lowest and highest values, reveals repeated scores, and makes tallying safe. The difference between the highest and lowest value is the range, which is the first fact a set of data tells you.",
              "bulletPoints": [
                "Raw data: 12, 9, 12, 7, 9, 12 → ordered: 7, 9, 9, 12, 12, 12.",
                "Frequency is how often a value occurs; here 12 occurs three times.",
                "The sum of all frequencies equals the number of data items, written Σf = n.",
                "Group data into class intervals when values are spread widely, e.g. 0–9, 10–19, 20–29.",
                "Class intervals must be equal in width and must not overlap."
              ],
              "keyTakeaway": "Order first, then tally — never tally straight from a messy list.",
              "realWorldExample": "Sorting 30 quiz scores from lowest to highest before reporting them to the class teacher."
            },
            {
              "title": "Tally Marks and Frequency Tables",
              "content": "Tally marks are counted in bundles of five: four vertical strokes with the fifth struck across them. A frequency table has three or four columns — the item or class, the tally, the frequency, and sometimes the total check at the bottom.",
              "bulletPoints": [
                "A bundle of five is drawn as |||| with a cross stroke.",
                "Count the bundles first, then the loose marks: three bundles and two marks is 17.",
                "A well-made table ends with a total row where Σf must equal the number of pupils or items.",
                "If data are scores, list every score even when its frequency is zero.",
                "Tally columns are optional in the final answer but useful for checking."
              ],
              "keyTakeaway": "The totals must add up: Σf = n is the check that nothing was missed.",
              "realWorldExample": "Counting the favourite foods of 40 students as banku 12, waakye 15, kenkey 8, rice 5."
            },
            {
              "title": "Drawing Bar Charts and Pictograms",
              "content": "A bar chart carries frequency on the vertical axis and categories on the horizontal axis. Bars have equal width, equal gaps, and heights exactly proportional to frequency. A pictogram uses symbols, each standing for a stated number, with a key that must be written.",
              "bulletPoints": [
                "Choose a vertical scale that uses the full grid — commonly 1 square = 2 or 5 units.",
                "Bars must start at zero; a truncated axis is a misrepresentation.",
                "Label both axes and give the chart a title.",
                "In a pictogram a part-symbol is allowed for part of the stated value.",
                "Bar charts suit categorical data; a histogram, which has touching bars, suits continuous grouped data."
              ],
              "keyTakeaway": "Equal widths, equal gaps, zero baseline, everything labelled.",
              "realWorldExample": "Comparing enrolment in Adansi, Ansa, Bantuma and Nkyinim houses as four separated bars."
            },
            {
              "title": "Pie Charts: Turning Frequencies into Angles",
              "content": "A pie chart shows each part as a sector of one circle, so all sectors together make 360°. The angle for a category is its fraction of the total multiplied by 360°: sector angle = (f / Σf) × 360°. Draw with a protractor from a fixed radius line, going clockwise, and label each sector.",
              "bulletPoints": [
                "Total 40 students, waakye 15 → (15/40) × 360° = 135°.",
                "Compute every angle before drawing, then check they add to exactly 360°.",
                "If the angles total 359° or 361° because of rounding, adjust the largest sector.",
                "Percentages convert directly: 25 % of 360° = 90°.",
                "A pie chart suits parts of a whole; it is a poor choice when the categories are close in size."
              ],
              "keyTakeaway": "Sector angle = fraction of total × 360°, and the angles must sum to 360°.",
              "realWorldExample": "Showing how a family budget of GHS 600 splits among food, rent, school fees and transport."
            },
            {
              "title": "Reading Graphs Backwards",
              "content": "Questions often ask what a chart says rather than to draw it. Read straight across from the vertical axis to the top of a bar; find the difference between two bars by subtracting their heights; find a total by adding. In a pie chart, the angle tells you the fraction, so a 90° sector is a quarter.",
              "bulletPoints": [
                "\"How many more\" means read both values and subtract.",
                "\"What fraction prefers X\" means frequency of X over Σf.",
                "A sector of 60° out of 360° is 1/6, or about 16.7 %.",
                "Always answer with the units named on the axis, e.g. 8 more students.",
                "Compare two charts by scale first; identical-looking bars can mean different totals if the axes differ."
              ],
              "keyTakeaway": "Charts are read from the axis, never estimated by eye.",
              "realWorldExample": "From a bar chart of daily absence, identifying which day had the most and by how much."
            }
          ],
          "commonMistakes": [
            "Tallying in bundles of four and forgetting the cross stroke makes five.",
            "Frequencies that do not add up to the number of students or items.",
            "Drawing bars of unequal width or leaving no gaps between them.",
            "Starting the frequency axis above zero so a small difference looks large.",
            "Computing a pie-chart angle as (f / Σf) × 180° or × 100.",
            "Leaving a pictogram without a key stating what one symbol represents.",
            "Overlapping class intervals such as 0–10 and 10–20, which puts one value in two classes."
          ],
          "beceExamTips": [
            "Write Σf = n as a completed check line at the bottom of a frequency table; it is separately marked.",
            "Use a ruler for axes and bars; a freehand chart loses accuracy marks even when the values are right.",
            "In a pie chart question, show the (f/Σf) × 360° substitution for at least one sector so the method is visible.",
            "Round each sector angle once only, then force the total to 360° by adjusting the largest sector.",
            "Label axes with both the quantity and the unit, for example \"Number of students\".",
            "When asked to choose a suitable representation, justify it in words — bar chart because the data are categorical, pie chart because the parts must show a share of the whole."
          ],
          "summaryChecklist": [
            "Can I classify data as primary or secondary, quantitative or categorical?",
            "Can I order raw data and build a correct tally and frequency table?",
            "Can I draw a bar chart or pictogram to scale with labels?",
            "Can I calculate and draw the sectors of a pie chart?",
            "Can I read totals, differences and fractions from charts?"
          ]
        },
    examples: [
      {
        id: 'ex-dc-1',
        title: 'Sector Angle for Pie Chart',
        problem: 'In a class of 40 students, 10 prefer Football. What is the sector angle for Football in a pie chart?',
        stepByStepSolution: [
          'Step 1: Formula: Angle = (Frequency / Total) × 360°.',
          'Step 2: Angle = (10 / 40) × 360° = ¼ × 360° = 90°.',
        ],
        keyTakeaway: 'All sector angles in a pie chart must sum to 360°.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-datacollection',
      topicId: 'jhs1-math-t13-datacollection',
      title: 'Data Collection & Charts Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-dc-1',
          quizId: 'quiz-jhs1-math-datacollection',
          questionText: 'What is the sum of all sector angles in any complete pie chart?',
          optionA: '180°',
          optionB: '270°',
          optionC: '360°',
          optionD: '100°',
          correctOption: 'C',
          explanation: 'A pie chart represents a full circle, and angles at a point always sum to 360°.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t14-centraltendency',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 14,
    title: 'Measures of Central Tendency (Mean, Median, Mode)',
    description: 'Calculate and interpret the Mode, Median, Mean, and Range from raw lists and frequency distribution tables.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=B1HEzNTGeZ4',
    youtubeId: 'B1HEzNTGeZ4',
    keyNotes: `Statistical averages:
• Mode: Score that occurs most frequently.
• Median: Middle score after sorting in ascending order.
• Mean: (Sum of all values) / (Total count) = Σx / n.
• Range: Highest value - Lowest value.`,
      detailedNotes: {
          "overview": "An average is one number that stands in for a whole set. Mean, median and mode each answer a different question, and BECE tests whether you know which one to use. This lesson computes all three from unsorted lists, frequency tables and grouped data, and adds the range as the measure of spread.",
          "introduction": "The mode is the most common value, the median is the middle value after sorting, and the mean is the total divided by the count. The mean is sometimes called the arithmetic average; the general word average in everyday Ghanaian English usually means the mean, so read carefully which one a question demands.",
          "realWorldContext": "A class reporting its average BECE mock score quotes the mean. A market association reporting the typical daily takings prefers the median because one very large sale would distort the mean. A shoe seller restocking the size that sold most often is using the mode. Choosing the right average is a real decision, not a textbook formality.",
          "objectives": [
            "Calculate the mode, median, mean and range of an ungrouped set of data.",
            "Find the median of an even number of values by averaging the two middle scores.",
            "Compute the mean from a frequency table using Σfx / Σf.",
            "Estimate the median and modal class for grouped data.",
            "Choose the most suitable average for a given situation and justify the choice."
          ],
          "sections": [
            {
              "title": "Mode: The Most Frequent Value",
              "content": "The mode is the value with the greatest frequency. A set may have one mode, more than one (bimodal), or none at all if no value repeats. For grouped data the class with the highest frequency is the modal class.",
              "bulletPoints": [
                "In 4, 7, 7, 9, 12 the mode is 7.",
                "In 2, 2, 5, 8, 8 the modes are 2 and 8 — both appear twice.",
                "In 1, 3, 4, 6 there is no mode.",
                "The mode works for categorical data, so favourite subject can have a mode but not a mean.",
                "The mode is the only average unaffected by extreme values."
              ],
              "keyTakeaway": "Mode answers \"which is most common\", and it is the only average usable for non-numerical data.",
              "realWorldExample": "A shop finding size 42 sandals sell most often restocks size 42."
            },
            {
              "title": "Median: The Middle of Sorted Data",
              "content": "Sort the data first, ascending or descending. With an odd count, the median is the single middle value. With an even count, it is the mean of the two middle values. Its position for n values is (n + 1)/2 counted from either end.",
              "bulletPoints": [
                "5 values 3, 6, 8, 9, 20: middle position 3, so median 8.",
                "6 values 2, 4, 7, 9, 11, 13: positions 3 and 4 give (7 + 9)/2 = 8.",
                "The median ignores the size of extreme values, only their position matters.",
                "For grouped data, the median class contains the (n + 1)/2 nd observation when frequencies are accumulated.",
                "A cumulative frequency column is the practical way to locate the median from a table."
              ],
              "keyTakeaway": "Sort or lose the mark — the median is undefined for unsorted data.",
              "realWorldExample": "Half the class scored at or below the median, so it divides the class into two equal groups."
            },
            {
              "title": "Mean: The Balance Point",
              "content": "The mean is Σx / n — the sum of all values divided by how many there are. For a frequency table, multiply each value by its frequency, add those products, then divide by the total frequency: x̄ = Σfx / Σf.",
              "bulletPoints": [
                "Mean of 8, 11, 9, 12, 10 = 50/5 = 10.",
                "Frequencies: scores 1, 2, 3 with frequencies 2, 5, 3 → Σfx = 2 + 10 + 9 = 21, Σf = 10 → mean 2.1.",
                "The mean uses every value, so one very large or very small score pulls it along.",
                "To combine two groups, use total sum over total count, never average the two averages.",
                "Missing value problems: if the mean of 4 numbers is 9 and three are 7, 10, 12, the fourth is 36 − 29 = 7."
              ],
              "keyTakeaway": "Total divided by count, and the total of a frequency table comes from the fx column.",
              "realWorldExample": "A family averaging GHS 45 a day on food spends GHS 45 × 30 = GHS 1,350 in a month."
            },
            {
              "title": "Range and Comparing Sets",
              "content": "The range is highest minus lowest, the simplest measure of spread. Two classes can share a mean and still differ greatly, so mean and range must be reported together. A small range means the data are consistent.",
              "bulletPoints": [
                "For 12, 5, 18, 7, 9 the range is 18 − 5 = 13.",
                "Class A mean 60 range 8 and Class B mean 60 range 24 have the same average but very different spreads.",
                "The interquartile range, the middle half of the data, is a sturdier measure once quartiles are known in SHS.",
                "Comparing consistency means comparing range, not comparing means."
              ],
              "keyTakeaway": "The average tells the typical level; the range tells how dependable it is.",
              "realWorldExample": "Two traders with equal weekly averages: the one with the smaller range has steadier income."
            },
            {
              "title": "Choosing the Right Average",
              "content": "Each average has a situation it suits. The mean suits well-behaved numerical data because it uses everything. The median suits data with an outlier, such as incomes where one person earns far more. The mode suits categorical data and decisions about what to stock or repeat.",
              "bulletPoints": [
                "Outlier present, such as 3, 4, 4, 5, 100 → the median 4 is the honest typical value; the mean 23 misleads.",
                "Choosing an average for shoe size, colour or subject → the mode.",
                "Reporting a class average mark → the mean, since all scores contribute.",
                "The mean is defined only for numerical data.",
                "Justification is marked: say WHY, usually about extreme values or the type of data."
              ],
              "keyTakeaway": "Extreme values push the mean but never the median.",
              "realWorldExample": "A school reporting the typical number of people per household among its pupils would use the median if two very large families are present."
            }
          ],
          "commonMistakes": [
            "Finding the median without sorting the data first.",
            "With an even count, reporting one middle value instead of the mean of the two.",
            "Dividing Σfx by the number of distinct values instead of by Σf.",
            "Averaging two group means to get a combined mean.",
            "Reporting a mean for categorical data such as favourite food.",
            "Confusing the modal class with the median class in grouped data.",
            "Rounding too early, so the reported mean fails the total check."
          ],
          "beceExamTips": [
            "Show the sum and the count as separate numbers before dividing; that substitution line is marked.",
            "Build an fx column explicitly in a frequency table and total it; a direct answer without the column usually loses method marks.",
            "When a question adds a new member to a group, work with totals: new total = old mean × old count + new value.",
            "State the median position formula (n + 1)/2 to justify the value you picked.",
            "Where the answer must be a whole number of items, remember that a mean can still be a decimal and that is acceptable.",
            "If asked which average best represents the data, name it and give the reason in the same sentence.",
            "Check: the median must lie between the lowest and highest values, and the mean must lie strictly between the extremes."
          ],
          "summaryChecklist": [
            "Can I find the mode, including bimodal and no-mode cases?",
            "Can I find the median of odd and even counts after sorting?",
            "Can I compute the mean from a list and from a frequency table?",
            "Can I calculate the range and use it to compare two sets?",
            "Can I choose and justify the most suitable average for a situation?"
          ]
        },
    examples: [
      {
        id: 'ex-ct-1',
        title: 'Calculating Mean, Median, and Mode',
        problem: 'Given the test marks: 4, 7, 5, 9, 7, 6, 4, 7. Find: (i) Mode (ii) Median (iii) Mean.',
        stepByStepSolution: [
          'Step 1: Arrange in ascending order: 4, 4, 5, 6, 7, 7, 7, 9 (n = 8).',
          'Step 2: Mode = 7 (appears three times, most frequent).',
          'Step 3: Median: middle two scores are 6 and 7. Median = (6 + 7)/2 = 6.5.',
          'Step 4: Mean = (4 + 4 + 5 + 6 + 7 + 7 + 7 + 9) / 8 = 49 / 8 = 6.125.',
        ],
        keyTakeaway: 'Always arrange scores in order of magnitude before finding the median!',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-centraltendency',
      topicId: 'jhs1-math-t14-centraltendency',
      title: 'Averages & Central Tendency Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-ct-1',
          quizId: 'quiz-jhs1-math-centraltendency',
          questionText: 'What is the median of the numbers: 12, 5, 8, 14, 9?',
          optionA: '8',
          optionB: '9',
          optionC: '12',
          optionD: '9.6',
          correctOption: 'B',
          explanation: 'First sort in ascending order: 5, 8, 9, 12, 14. The middle score is 9.',
        },
      ],
    },
  },
  {
    id: 'jhs1-math-t15-probability',
    subjectId: 'math',
    level: 'JHS 1',
    term: 3,
    orderIndex: 15,
    title: 'Introduction to Probability',
    description: 'The probability scale from 0 to 1, sample spaces, theoretical probability, coins, dice, and cards.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=KzfWUEJjG18',
    youtubeId: 'KzfWUEJjG18',
    keyNotes: `Probability measures how likely an event is to happen:
• Probability scale: 0 (impossible) to 1 (certain).
• Formula: P(Event) = (Number of favorable outcomes) / (Total possible outcomes).
• P(not Event) = 1 - P(Event).
• Probability can never be negative and never greater than 1.`,
      detailedNotes: {
          "overview": "Probability puts a number on how likely something is. This lesson builds the scale from 0 to 1, the formula of favourable outcomes over total outcomes, the complement rule, and the tree or list method for combined events — all with dice, cards, coloured balls and coin tosses as the working models.",
          "introduction": "The probability of an event E is P(E) = number of favourable outcomes ÷ number of equally likely outcomes. It is a number between 0 and 1 inclusive; 0 means impossible, 1 means certain, and the two together with every value between them form the probability scale. Equally likely is the crucial condition — you may only divide counts when every outcome has the same chance of occurring.",
          "realWorldContext": "Weather forecasts state the chance of rain over Accra as a percentage. A draw for the FA Cup third round in Ghana fixes each pairing as an outcome. Gamers and market testers sample without bias by giving every item an equal chance of selection, which is the same principle as drawing a ball from a bag after shaking it.",
          "objectives": [
            "Place events on a probability scale from impossible to certain.",
            "Calculate the probability of a single event with equally likely outcomes.",
            "Use the complement rule P(not E) = 1 − P(E).",
            "Express probability as a fraction, decimal or percentage and convert between them.",
            "List the sample space for combined events with a table or tree diagram.",
            "Find probabilities of two events happening together and of at least one of two events."
          ],
          "sections": [
            {
              "title": "Outcomes, Sample Space and the Scale",
              "content": "An outcome is one possible result. The set of all outcomes is the sample space, written S. An event is a subset of the sample space. Counting carefully inside S is what makes probability answers exact.",
              "bulletPoints": [
                "One fair die: S = {1, 2, 3, 4, 5, 6}, so n(S) = 6.",
                "Two coins: S = {HH, HT, TH, TT}, n(S) = 4 — HT and TH are different outcomes.",
                "Two dice: n(S) = 36, since each die outcome pairs with all six of the other.",
                "A bag with 3 red and 5 blue balls has n(S) = 8 draws.",
                "Impossible events have probability 0; certain events have probability 1."
              ],
              "keyTakeaway": "Write the sample space before you compute anything.",
              "realWorldExample": "Choosing one pupil at random from 20 boys and 15 girls gives a sample space of 35 pupils."
            },
            {
              "title": "Calculating Probability of a Single Event",
              "content": "For equally likely outcomes, P(E) = n(E) / n(S). State both numbers in the working and keep the answer as an unsimplified-then-simplified fraction unless a decimal or percentage is asked for.",
              "bulletPoints": [
                "P(getting a 4 on a die) = 1/6.",
                "P(rolling an even number) = 3/6 = 1/2.",
                "P(rolling a number greater than 4) = 2/6 = 1/3.",
                "P(drawing a red ball from 3 red and 5 blue) = 3/8.",
                "Probability is never negative and never exceeds 1."
              ],
              "keyTakeaway": "Count what you want, count everything, divide.",
              "realWorldExample": "One winning ticket among 500 sold gives a chance of 1/500, or 0.2 %."
            },
            {
              "title": "The Complement: Probability of Not Happening",
              "content": "An event and its complement together cover every outcome, so their probabilities add to 1. This makes the impossible or the tedious calculation easy: when a question asks for at least one, consider subtracting the probability of none.",
              "bulletPoints": [
                "If P(E) = 3/8 then P(not E) = 5/8.",
                "Given P(rain) = 0.3, P(no rain) = 0.7 = 70 %.",
                "If P(not E) = 0.25, then P(E) = 0.75.",
                "P(at least one six in two throws) = 1 − P(no six) = 1 − (5/6)² = 11/36.",
                "The complement of an event lists exactly the outcomes not in it, with no overlap."
              ],
              "keyTakeaway": "\"Not\" means subtract from 1; \"at least one\" almost always means use the complement.",
              "realWorldExample": "If 12 % of a shipment is damaged, the chance a randomly picked carton is sound is 88 %."
            },
            {
              "title": "Combined Events: Tables and Tree Diagrams",
              "content": "When two actions happen together, list every pair. A 6 by 6 grid handles two dice; a tree with branches labelled by probability handles any sequence. The outcomes must still be equally likely before counts are divided.",
              "bulletPoints": [
                "Two dice: 36 equally likely pairs; a total of 7 arises in 6 ways, so P(7) = 6/36 = 1/6.",
                "Two coins: P(at least one head) = 3/4; P(exactly one head) = 2/4 = 1/2.",
                "A tree multiplies along branches and adds down the possibilities that satisfy the event.",
                "Independent events: P(A and B) = P(A) × P(B).",
                "Dependent events without replacement: the second probability changes because the bag is smaller."
              ],
              "keyTakeaway": "Draw the sample space; guessing pairs is where marks are lost.",
              "realWorldExample": "Drawing two balls from 3 red and 5 blue without replacement: P(both red) = 3/8 × 2/7 = 3/28."
            },
            {
              "title": "Frequencies, Odds and Expected Outcomes",
              "content": "Probability predicts the long run, not the next single trial. If an experiment is repeated n times, the expected frequency of an event is n × P(E). Relative frequency from an experiment estimates probability when outcomes are not equally likely.",
              "bulletPoints": [
                "Spinning a fair four-coloured wheel 80 times expects 20 landings on each colour.",
                "A die thrown 60 times expects the face 6 about 10 times.",
                "Experimental (relative) probability = successes ÷ trials, and it approaches the theoretical value as trials grow.",
                "A result of 4 sixes in 60 throws does not disprove probability; it reports one experiment.",
                "Odds compare favourable to unfavourable outcomes; probability compares favourable to all outcomes."
              ],
              "keyTakeaway": "Expected frequency = number of trials × probability.",
              "realWorldExample": "If the chance a customer buys is 0.15, then 200 visitors are expected to bring about 30 sales."
            }
          ],
          "commonMistakes": [
            "Dividing counts when the outcomes are not equally likely.",
            "Treating two coins as three outcomes — head-head, one-head, no-head — instead of four.",
            "Reporting a probability as 6, 60 %, 6/1 or a percentage above 100.",
            "Adding probabilities of events that can both happen at once, then double-counting.",
            "Forgetting to reduce the bag size on the second draw without replacement.",
            "Reading 'at least one' as 'exactly one'.",
            "Expecting a single trial to match the probability, and concluding a die is unfair after two throws."
          ],
          "beceExamTips": [
            "State n(S) and n(E) as separate numbers before the fraction; the two counts are marked independently.",
            "Leave the answer as a fraction in lowest terms unless the question asks for a decimal or a percentage.",
            "For \"not\" questions, subtracting from 1 is faster than counting every remaining outcome — say so in one line.",
            "For two dice, draw the grid even when you know the answer; wrong counts are visible and correctable there.",
            "With 'at least one', always compute the complement of none happening.",
            "When a question gives probabilities as percentages, convert to fractions once and work in one form throughout.",
            "A probability answer must be between 0 and 1; if it is not, the counts were swapped."
          ],
          "summaryChecklist": [
            "Can I define the sample space and count its outcomes?",
            "Can I compute the probability of a simple event and simplify it?",
            "Can I use P(not E) = 1 − P(E) and handle at least one questions?",
            "Can I list combined outcomes with a table or tree and find their probabilities?",
            "Can I calculate an expected frequency from a probability and a number of trials?"
          ]
        },
    examples: [
      {
        id: 'ex-prob-1',
        title: 'Probability with a 6-Sided Die',
        problem: 'A fair 6-sided die is rolled once. Find the probability of getting: (i) an even number (ii) a prime number.',
        stepByStepSolution: [
          'Step 1: Sample space S = {1, 2, 3, 4, 5, 6}, total n(S) = 6.',
          'Step 2: Even numbers E = {2, 4, 6}, n(E) = 3. P(Even) = 3/6 = 1/2.',
          'Step 3: Prime numbers P = {2, 3, 5}, n(P) = 3 (1 is not prime!). P(Prime) = 3/6 = 1/2.',
        ],
        keyTakeaway: 'Remember that 1 is neither prime nor composite.',
      },
    ],
    quiz: {
      id: 'quiz-jhs1-math-probability',
      topicId: 'jhs1-math-t15-probability',
      title: 'Probability Assessment',
      timeLimitMinutes: 10,
      passScorePercentage: 60,
      questions: [
        {
          id: 'q-prob-1',
          quizId: 'quiz-jhs1-math-probability',
          questionText: 'A bag contains 5 red balls, 3 blue balls, and 2 green balls. What is the probability of picking a blue ball at random?',
          optionA: '3/10',
          optionB: '1/3',
          optionC: '3/7',
          optionD: '1/2',
          correctOption: 'A',
          explanation: 'Total balls = 5 + 3 + 2 = 10. Blue balls = 3. P(Blue) = 3/10.',
        },
      ],
    },
  },
];
