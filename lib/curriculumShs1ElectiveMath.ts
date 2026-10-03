// Ghanaian SHS 1 Elective Mathematics — Terms 1, 2 and 3
// WAEC / WASSCE and GES Senior High School Elective Mathematics syllabus
// Textbook-grade notes, worked examples with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS1_ELECTIVE_MATH_TOPICS: CurriculumTopic[] = [
  // =========================================================================
  // TERM 1
  // =========================================================================
{
    id: 'shs1-em-t1-number-bases',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Number Bases: Conversion and Operations in Base n',
    description: 'Place value in base n, conversion to and from base ten, addition, subtraction, multiplication and division carried out inside the base, chains between two non-decimal bases, and the reason computers count in base two.',
    isFreeTrial: true,
    isVip: false,
    keyNotes: `• A base tells you how many units make one step to the left; in base n only the digits 0 to n minus 1 may appear, and the place values are ..., n^3, n^2, n, 1.
• To leave a base, expand by place value: "314 (base 5) = 3(25) + 1(5) + 4(1) = 84 (base 10)".
• To enter a base, divide the base ten number by the base repeatedly and read the remainders from the last division to the first.
• Worked example: 1447 divided by 8 leaves remainders 7, 4, 6, 2, so 1447 (base 10) = 2647 (base 8).
• Between two non-decimal bases, base ten is the compulsory bridge: "2413 (base 5) = 358 (base 10) = 111021 (base 3)", and "534 (base 8) = 348 (base 10) = 11130 (base 4)".
• Adding in base n: add each column, and when a column reaches n or more, write the remainder and carry 1, because one carry is worth n units in the column on the right.
• Worked sum: "254 (base 6) + 143 (base 6) = 441 (base 6)", since 106 + 63 = 169 = 441 (base 6).
• Subtracting in base n: one borrow adds n units to the column, never 10.
• Worked difference: "5124 (base 6) - 2345 (base 6) = 2335 (base 6)", since 1132 - 569 = 563.
• Multiplying in base n: write one partial product for each digit of the multiplier, each shifted one place further left, then add them in the base.
• Worked product: "1101 (base 2) times 101 (base 2) = 1000001 (base 2)", because 13 times 5 = 65 = 1000001 in binary.
• Dividing in base n uses the ordinary short-division layout: "3152 (base 6) divided by 4 (base 6) = 455 (base 6)", since 716 divided by 4 is 179.
• Base two (binary) is the counting system of computers: one bit holds 0 or 1, eight bits make one byte, and one byte holds the values 0 to 255.
• Octal groups binary digits in threes and hexadecimal groups them in fours, so a nine-bit pattern is readable as three octal digits.
• Test validity before working: 6 and 7 cannot appear inside a base-six numeral, and 9 cannot appear in a base-nine numeral.
• Always state the base in brackets after a numeral, because 2413 on its own has no value until the base is fixed.`,
    detailedNotes: {
      overview: 'Every numeral is a shorthand for a sum of powers, and the base decides which powers are used. WASSCE Elective Mathematics tests this topic twice: an objective item on conversion in Paper 1, and a theory item on the column layouts for addition, subtraction, multiplication or division in Paper 2. The same idea runs through both, so a candidate who can expand a numeral and can also divide repeatedly by the base owns the whole question. The vocabulary fixed here, place value, expansion, remainder and carry, is reused in binary operations, matrices and computing topics later in the course.',
      introduction: 'Practise every conversion in two directions: work in the base itself, then check in base ten, and insist that the two results agree. Read a numeral aloud with its base before touching a pencil, because the commonest lost mark is a correct method applied to a base the question never set. Keep a margin table of the powers of 2, 3, 4, 5, 6, 7 and 8 in your exercise book until they can be recited, since expansion and division both slow down without them.',
      realWorldContext: 'An estate developer in Achimota lays out identical housing blocks: the plan book gives each block as 4135 in base seven, and the district assembly requires the total in base ten before it will compare the figure with the 1447 units already built in the ward. A trotro station master in Kumasi keeps trip tallies in base six so that 254 trips plus 143 trips are booked as 441 (base 6), which the district office reads as 169 trips, and a data bundle card in Tamale prints a binary pattern that must be converted to base ten before a customer understands the allowance in gigabytes.',
      objectives: [
        'Expand a numeral in base n by place value and state its base ten equivalent',
        'Convert a base ten number into any base from two to ten using repeated division and remainders',
        'Add, subtract, multiply and divide numerals in bases other than ten with correct carries and borrows',
        'Convert between two non-decimal bases by passing through base ten',
        'Explain why binary, octal and hexadecimal are used in computing and state how many values a given number of bits can hold'
      ],
      sections: [
        {
          title: 'Place Value in Base n',
          content: 'A base is the number of units needed before one step to the left is taken. In base ten, ten units make one ten, so the place values are 1, 10, 100, 1000; in base n, n units make one group, so the place values run 1, n, n^2, n^3, and the numeral 3024 (base 5) means 3(125) + 0(25) + 2(5) + 4(1), which is 389 in base ten. Two conditions always hold: only the digits 0 to n minus 1 may appear, so a 6 can never sit inside a base-six numeral, and the leftmost digit is never zero unless the number itself is zero. Zero inside a numeral is still doing a job, because it holds the empty column exactly as the zero in 205 holds the tens column.',
          bulletPoints: [
            'Base two, called binary, uses only 0 and 1 because a switch is either off or on.',
            'Base five uses 0 to 4, base eight uses 0 to 7, and base twelve would need two extra symbols for ten and eleven.',
            'Place values of base seven, read from the right: 1, 7, 49, 343, 2401.',
            'Expansion in reverse: 4(343) + 1(49) + 3(7) + 5(1) changes 4135 (base 7) into 1447 in base ten.',
            'The digit on the far right is the units digit and always contributes its face value.'
          ],
          keyTakeaway: 'Name the base, write the powers of the base above the digits, then multiply straight across.',
          realWorldExample: 'A cocoa buying clerk who keeps tallies in base five writes 3024 on the tally sheet, and the audit sheet converts it to 389 pods counted.'
        },
        {
          title: 'Converting to and from Base Ten',
          content: 'To leave a base, expand: 314 (base 5) = 3(25) + 1(5) + 4(1) = 84 in base ten. To enter a base, divide the base ten number by the base repeatedly and keep the remainders: 84 divided by 5 gives 16 remainder 4, 16 divided by 5 gives 3 remainder 1, and 3 divided by 5 gives 0 remainder 3, so reading the last remainder first gives 314 (base 5). Stop only when the quotient is zero, and never reorder the remainders, because that single slip rewrites the value. Between two non-decimal bases, base ten is the mandatory bridge: 534 (base 8) is 348 in base ten, and 348 in base ten is 11130 (base 4).',
          bulletPoints: [
            'The final remainder, the one obtained when the quotient reaches zero, is the leftmost and most significant digit.',
            'Check every conversion by expanding the answer back into base ten; the two values must be identical.',
            'Powers worth memorising: 2, 4, 8, 16, 32, 64, 128, 256; 3, 9, 27, 81, 243; 5, 25, 125, 625.',
            'Mixed practice: 96 in base ten becomes 240 (base 6), because 96 = 2(36) + 4(6) + 0.',
            'A remainder of zero in the middle of the chain becomes the digit 0, not a missing column.'
          ],
          keyTakeaway: 'Expansion carries you out of a base; repeated division carries you into a base, with remainders read backwards.',
          realWorldExample: 'A school exam officer reads a script number written 2413 (base 5) and converts it to 358 before matching it to the chemistry register.'
        },
        {
          title: 'Operations Carried Out Inside the Base',
          content: 'Column working keeps the familiar layout with one change: a complete group of n is carried, so one carry is worth n units in the column to the right. Add 254 (base 6) and 143 (base 6): the units column gives 4 + 3 = 7, which is one group of six and 1 over, so write 1 and carry 1; the sixes column gives 5 + 4 + 1 = 10, which is one group of six and 4 over, so write 4 and carry 1; the thirty-sixes column gives 2 + 1 + 1 = 4. The sum is 441 (base 6), and the base ten check agrees because 106 + 63 = 169 = 441 (base 6). Subtraction borrows one group of n, so a borrow in base six adds 6 units to the column. Long multiplication writes one shifted partial product per multiplier digit, and division uses short division with each divisor taken in the same base.',
          bulletPoints: [
            'In base two the only addition facts are 0 + 0 = 0, 1 + 0 = 1 and 1 + 1 = 10 (base 2).',
            'In base six a column total of 10 is written 14, because 10 is one six and 4 units.',
            'Worked difference: 5124 (base 6) - 2345 (base 6) = 2335 (base 6), checked as 1132 - 569 = 563.',
            'Worked quotient: 3152 (base 6) divided by 4 (base 6) = 455 (base 6), since 716 divided by 4 is 179.',
            'Never leave the working in base ten when the answer is demanded in the given base.'
          ],
          keyTakeaway: 'Carry and borrow in groups of the base, then prove the finished numeral in base ten.',
          realWorldExample: 'A Tema terminal gate counter adds 254 (base 6) containers to 143 (base 6) and displays 441 (base 6), which the clerk reports as 169 containers.'
        },
        {
          title: 'Bases in Computer Counting',
          content: 'Computers store patterns of two states, so base two is the native notation and a single binary digit is called a bit. Eight bits form one byte, and one byte can label 2^8, that is 256, different patterns, conventionally numbered from 0 up to 255; the largest pattern 11111111 (base 2) expands to 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1. Because long strings of ones and zeros tire the eye, octal groups binary digits in threes and hexadecimal groups them in fours, so a nine-bit pattern is easier to read in base eight. The link back to ordinary arithmetic is exact rather than approximate: 2413 (base 5) equals 358 (base 10) equals 101100110 (base 2), and the same quantity can be re-stated in any other base by passing through base ten.',
          bulletPoints: [
            'Powers of two to know cold: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.',
            'With k bits a machine can label 2^k different values, running from 0 to 2^k minus 1.',
            'One octal digit stands for exactly three binary digits, so 7 (base 8) is the pattern 111 (base 2).',
            'Multiplying by 101 (base 2) is the same as multiplying by 5, performed by shifting and adding.',
            'Binary addition of 1101 and 110100 gives 1000001, the product 1101 (base 2) times 101 (base 2).'
          ],
          keyTakeaway: 'Binary is the language of storage; octal and hexadecimal are only its readable short forms.',
          realWorldExample: 'A Ghanaian data allowance shown as 101100110 megabytes on an engineering panel appears as 358 megabytes on the customer invoice.'
        }
      ],
      commonMistakes: [
        'Carrying ten instead of one group of the base: in base six a column total of 7 must be written 11 (base 6), not 17, because the carry is worth only 6 units in the next column.',
        'Using a digit the base does not own: 4426 (base 6) cannot be a base-six numeral because 6 is not among its digits, and 2419 (base 9) fails for the same reason.',
        'Reading the remainders in the wrong order, so 2413 (base 5) = 358 (base 10) is written as 011001101 in base two instead of 101100110.',
        'Treating the numeral as a base ten number: writing 2413 as the answer when the question fixes it in base five, where its base ten value is 358.',
        'Stopping the repeated division while the quotient is still greater than zero, which drops the most significant digit and leaves 647 (base 8) for 1447 instead of the correct 2647 (base 8).'
      ],
      wassceExamTips: [
        'Paper 1 normally carries one objective item on bases, for example changing 2413 (base 5) to base ten; a single clean expansion line is enough to secure the mark.',
        'In Paper 2 the bases item is worth roughly 6 to 8 marks, with method marks M1 given for the expansion line, for each correct carry or borrow column and for the list of remainders, so a correct final numeral alone does not fetch every mark.',
        'Expect two parts, one conversion and one column operation, and attempt part (b) even when part (a) went wrong, because a carry-through error (afr) still earns the method marks in part (b).',
        'Write the base in brackets after every numeral in your working and give the final answer in the base the question asked for, not in base ten.',
        'Budget about 8 to 10 minutes on a theory bases item, then spend 30 seconds expanding the answer back into base ten; that check recovers many otherwise lost answer marks A1.'
      ],
      summaryChecklist: [
        'Can I state which digits a base allows and reject an invalid numeral?',
        'Can I expand a numeral in base n to find its base ten value?',
        'Can I convert a base ten number into any base up to ten by repeated division?',
        'Can I add, subtract, multiply and divide numerals in a base other than ten with correct carries and borrows?',
        'Can I convert between two non-decimal bases through base ten and check the result both ways?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-bases-1',
        title: 'From Base Seven to Base Eight',
        problem: 'Express 4135 (base 7) in base ten, and then express the same quantity in base eight.',
        stepByStepSolution: [
          'Step 1 (M1): Write the place values of base seven above the digits, reading from the right: 1, 7, 49, 343.',
          'Step 2 (M1): Expand by place value: 4(343) + 1(49) + 3(7) + 5(1) = 1372 + 49 + 21 + 5.',
          'Step 3 (A1): Add the four parts: 4135 (base 7) = 1447 in base ten.',
          'Step 4 (M1): Divide 1447 repeatedly by 8: 1447 divided by 8 is 180 remainder 7; 180 divided by 8 is 22 remainder 4; 22 divided by 8 is 2 remainder 6; 2 divided by 8 is 0 remainder 2.',
          'Step 5 (M1): Read the remainders from the last division to the first, giving the digits 2, 6, 4, 7 in that order.',
          'Step 6 (M1): Check by expanding: 2(512) + 6(64) + 4(8) + 7(1) = 1024 + 384 + 32 + 7 = 1447, the same base ten value.',
          'Step 7 (A1): Final answer: 4135 (base 7) = 1447 (base 10) = 2647 (base 8).'
        ],
        keyTakeaway: 'Expand to leave a base, divide repeatedly to enter a base, then expand the answer back to prove it.'
      },
      {
        id: 'ex-shs1-em-bases-2',
        title: 'Binary Multiplication Checked in Base Ten',
        problem: 'Evaluate 1101 (base 2) multiplied by 101 (base 2). Give the product in base two and check it in base ten.',
        stepByStepSolution: [
          'Step 1 (M1): Form one partial product for each digit of the multiplier: 1101 times 1 gives 1101, 1101 times 0 shifted one place gives 00000, and 1101 times 1 shifted two places gives 110100.',
          'Step 2 (M1): Add the first two partial products in base two: 1101 + 00000 = 1101.',
          'Step 3 (M1): Add 1101 and 110100 column by column, carrying 1 whenever a column reaches two, which gives 1000001.',
          'Step 4 (M1): Convert the two factors into base ten: 1101 (base 2) = 8 + 4 + 0 + 1 = 13 and 101 (base 2) = 4 + 1 = 5.',
          'Step 5 (M1): Multiply in base ten: 13 times 5 = 65.',
          'Step 6 (M1): Change 65 back to base two: 65 = 64 + 1, so the binary pattern is 1000001.',
          'Step 7 (A1): Final answer: 1101 (base 2) times 101 (base 2) = 1000001 (base 2), which is 65 in base ten.'
        ],
        keyTakeaway: 'Do the multiplication inside the base, then confirm it against the base ten product.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t1-number-bases',
      topicId: 'shs1-em-t1-number-bases',
      title: 'Number Bases Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-number-bases-1',
          quizId: 'quiz-shs1-em-t1-number-bases',
          questionText: 'Convert 245 (base 6) into a base ten numeral.',
          optionA: '96',
          optionB: '131',
          optionC: '101',
          optionD: '165',
          correctOption: 'C',
          subConcept: 'Conversion to Base Ten',
          explanation: 'Expanding by place value gives 2(36) + 4(6) + 5(1) = 72 + 24 + 5 = 101. Option A, 96, comes from stopping at 72 + 24 and leaving out the units digit; option B, 131, uses base seven place values 2(49) + 4(7) + 5; option D, 165, uses base eight place values 2(64) + 4(8) + 5, so both read the wrong base.',
          remediationTip: 'Write the place values 1, 6, 36 above the digits before multiplying anything, and label each with its base.'
        },
        {
          id: 'q-em-number-bases-2',
          quizId: 'quiz-shs1-em-t1-number-bases',
          questionText: 'Evaluate 11011 (base 2) and give the value in base ten.',
          optionA: '27',
          optionB: '25',
          optionC: '19',
          optionD: '17',
          correctOption: 'A',
          subConcept: 'Binary to Base Ten',
          explanation: 'The place values of a five-bit pattern are 16, 8, 4, 2, 1, so 16 + 8 + 0 + 2 + 1 = 27. Option B, 25, skips the 2 column; option C, 19, skips the 8 column; option D, 17, keeps only the two end digits, so every distractor is a missed place value.',
          remediationTip: 'Cross out each 1 as you add its place value, so no column is skipped and none is counted twice.'
        },
        {
          id: 'q-em-number-bases-3',
          quizId: 'quiz-shs1-em-t1-number-bases',
          questionText: 'Evaluate 254 (base 6) + 143 (base 6), leaving the answer in base 6.',
          optionA: '341',
          optionB: '451',
          optionC: '441',
          optionD: '541',
          correctOption: 'C',
          subConcept: 'Addition in Base Six',
          explanation: 'Units: 4 + 3 = 7, which is 1 six and 1 over, so write 1 and carry 1. Sixes: 5 + 4 + 1 = 10, which is 1 six and 4 over, so write 4 and carry 1. Thirty-sixes: 2 + 1 + 1 = 4. The sum is 441 (base 6), and the base ten check gives 106 + 63 = 169, which expands from 441 (base 6) exactly. Options A, B and D stand for 133, 175 and 205 in base ten, none of which equals 169, and option A in particular forgets the carry into the thirty-sixes column.',
          remediationTip: 'Circle every carry and add it into the next column, then convert the finished numeral to base ten as a check.'
        },
        {
          id: 'q-em-number-bases-4',
          quizId: 'quiz-shs1-em-t1-number-bases',
          questionText: 'Express 322 (base 5) in base ten.',
          optionA: '82',
          optionB: '122',
          optionC: '163',
          optionD: '87',
          correctOption: 'D',
          subConcept: 'Place Value Expansion',
          explanation: 'The place values of base five are 25, 5, 1, so 3(25) + 2(5) + 2(1) = 75 + 10 + 2 = 87. Option A, 82, replaces 2(5) by 5 in the middle column; option B, 122, reads the numeral in base six and option C, 163, reads it in base seven, so both use the wrong powers.',
          remediationTip: 'Say each digit with its own power out loud: three twenty-fives, two fives, two units.'
        },
        {
          id: 'q-em-number-bases-5',
          quizId: 'quiz-shs1-em-t1-number-bases',
          questionText: 'A school server log shows 163 bytes of free space. Write this quantity in base eight.',
          optionA: '214',
          optionB: '241',
          optionC: '243',
          optionD: '324',
          correctOption: 'C',
          subConcept: 'Conversion to Base Eight',
          explanation: 'Divide by 8 repeatedly: 163 gives quotient 20 remainder 3, 20 gives quotient 2 remainder 4, and 2 gives quotient 0 remainder 2. Reading the remainders from the last division gives 243 (base 8), and the check 2(64) + 4(8) + 3 = 163 confirms it. Option A, 214, stands for 140 and option B, 241, for 161, so both use wrong remainders; option D, 324, reverses the digits and stands for 212.',
          remediationTip: 'Set the divisions out in a column with the remainders at the side, then read upwards and expand the answer back.'
        }
      ]
    }
  },
  {
    id: 'shs1-em-t1-indices-logarithms',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Indices and Logarithms: Laws and Evaluation',
    description: 'The index laws for negative, fractional and zero powers, simplification of products and quotients, logarithm read as an index, the product, quotient and power laws, common logs and antilogs to base ten, and evaluation with four-figure log tables.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• An index is a count of repeated factors: in x^n, x is the base and n is the index, so 2^5 means 2 multiplied by itself five times, giving 32.
• Multiplication law: a^m times a^n = a^(m+n), so "2^5 times 2^-3 = 2^2 = 4".
• Division law: a^m divided by a^n = a^(m-n), so "x^6 divided by x^2 = x^4".
• Power law: (a^m)^n = a^(mn), so "(y^-2)^-3 = y^6" and "(x^2)^3 = x^6".
• Product to a power: (ab)^n = a^n b^n, so "(2a)^4 = 16a^4".
• Negative index: a^-n = 1 divided by a^n, so "3^-2 = 1/9" while "3^2 = 9", and the two multiply to 1.
• Zero index: a^0 = 1 for any non-zero a, so "(15a^2b^3)^0 = 1"; the expression 0^-2 has no value at all.
• Fractional index: a^(1/n) is the nth root of a, so "4^(1/2) = 2" and "64^(1/3) = 4".
• a^(m/n) means the nth root raised to the power m, so "27^(2/3) = 3^2 = 9".
• Logarithm as index: log_a N = x means a^x = N, so "log_2 32 = 5" because 2^5 = 32, and log_a 1 = 0 always.
• The three laws of logarithms: "log_a (MN) = log_a M + log_a N", "log_a (M divided by N) = log_a M - log_a N", "log_a M^n = n log_a M".
• Common logs are base ten: "log 1000 = 3", "log 1 = 0", "log 0.1 = -1".
• Given log 2 = 0.3010 and log 3 = 0.4771: "log 12 = 2 log 2 + log 3 = 0.6020 + 0.4771 = 1.0791".
• Four-figure tables give the mantissa only, so "log 42000 = 4.6232" because 42000 = 4.2 times 10^4 and the table entry for 4.2 is 0.6232.
• Antilog reverses the log: "antilog 1.6532 = 45" because 10^1.6532 = 45, and the characteristic decides where the decimal point falls.
• In bar notation, a number written with characteristic -4 and mantissa 0.3010 is 0.0002, which is positive but small, not negative.`,
    detailedNotes: {
      overview: 'Indices compress repeated multiplication into one symbol and logarithms undo it, so the two notations are the same statement read in opposite directions. WASSCE tests the laws rather than the arithmetic: simplifying a product of powers, solving an exponential equation by matching bases, and evaluating an awkward numerical expression with four-figure tables. Strength here is repaid later in progressions, logarithmic scales and differentiation, which is why examiners set indices and logs in every Paper 1.',
      introduction: 'Learn each law as one sentence and one worked example, then practise switching between index form and log form until it is instant. Four slips cost the most marks: multiplying the powers instead of adding them, dropping a negative sign, reading a fractional index as an ordinary fraction, and treating a negative characteristic as making the whole number negative. Keep a small card of the index laws in your pocket and recite it before each practice session.',
      realWorldContext: 'A susu saver in Ho who doubles GH¢800 of capital every quarter needs 2^4, that is 16, before asking how many cedis arrive after four quarters, which is GH¢12800. A telecommunications mast outside Tamale is described in decibels on a base ten scale, so an engineer reads 10^3.5 as roughly 3162 milliwatts, and in the examination hall at Kumasi candidates use printed four-figure log tables to find (42.6)^3 divided by 0.0175 in three lookups instead of eight minutes of long multiplication.',
      objectives: [
        'Apply the multiplication, division, power, zero and negative index laws to simplify algebraic products',
        'Rewrite an index statement such as 2^5 = 32 in logarithmic form and return it',
        'Use the product, quotient and power laws of logarithms to condense or expand a logarithmic expression',
        'Read common logs and antilogs from four-figure tables, handling characteristic and mantissa correctly',
        'Solve a simple exponential equation by reducing both sides to the same base'
      ],
      sections: [
        {
          title: 'The Laws of Indices',
          content: 'An index counts how many times a factor is used. Because 2 times 2 times 2 is 2^3, the multiplication of two powers of the same base simply adds the counts, so a^m times a^n = a^(m+n); the division removes counts, so a^m divided by a^n = a^(m-n); and raising a power to a power multiplies the counts, so (a^m)^n = a^(mn). A product inside a bracket takes the power on each part, so (ab)^n = a^n b^n and (2a)^4 = 16a^4 rather than 8a^4. The single most common error in WASSCE scripts is writing x^2 times x^3 as x^6: the two laws are distinct, and only (x^2)^3 equals x^6. Collecting still obeys the algebra rule that only like terms combine, so 5x^2 minus 3x^2 is 2x^2 while x^2 plus x^3 must be left as it is.',
          bulletPoints: [
            'Same base multiplied: add the indices, so x^4 times x^2 = x^6.',
            'Same base divided: subtract the indices, so x^6 divided by x^2 = x^4.',
            'Power of a power: multiply the indices, so (x^3)^5 = x^15.',
            'Power of a product: (xy^-4)^2 = x^2 y^-8.',
            'Like terms collect but powers never merge by addition: 2x^3 plus 5x^3 = 7x^3.'
          ],
          keyTakeaway: 'Adding indices serves multiplication, subtracting serves division, and multiplying serves a power of a power.',
          realWorldExample: 'A store in Makola stacks crates in layers of 10 boxes, so 10^3 layers of 10^2 boxes each hold 10^5 boxes, one hundred thousand in all.'
        },
        {
          title: 'Negative, Zero and Fractional Indices',
          content: 'A negative index records a reciprocal: a^-n = 1 divided by a^n, so 3^-2 = 1/9 and multiplying 3^-2 by 3^2 gives 1, which is exactly what the addition law promises. A zero index arises from dividing a power by itself, so a^0 = 1 for every non-zero base; the expression 0^-2 is undefined because it asks for the reciprocal of zero. A fractional index is a root dressed as an index: the denominator is the root and the numerator is the power, so 4^(1/2) = 2, 64^(1/3) = 4, and 27^(2/3) = (cube root of 27)^2 = 3^2 = 9. Reading the fraction as a multiplier instead gives 27 times 2/3 = 18, which is wrong, because a fractional index is an instruction about roots and powers rather than a number to be multiplied.',
          bulletPoints: [
            'x^-3 = 1 divided by x^3, so a negative index moves the factor across the fraction bar.',
            '125^(-1/3) = 1 divided by 5, because the cube root of 125 is 5.',
            'a^0 = 1 for a not equal to zero, so (15a^2b^3)^0 = 1.',
            '64^(2/3) = 4^2 = 16, worked as root first then power.',
            '4^(-1/2) = 1 divided by 2 = 0.5, not minus 0.5: the sign controls the reciprocal, not the value.'
          ],
          keyTakeaway: 'Root first, then power; sign of the index decides reciprocal, not sign of the answer.',
          realWorldExample: 'A land agency in Sunyani sells half of a plot each year, so after three years the family holds (1/2)^3 = 1/8 of the original plot.'
        },
        {
          title: 'Logarithm as an Index and the Three Laws',
          content: 'A logarithm is a question about the index: log_a N = x means a^x = N. Thus log_2 32 = 5 because 2^5 = 32, and log_a 1 = 0 because any base raised to the power zero is 1. Every law of indices has a matching log law, which is why the three standard laws are so easy to prove: the log of a product is the sum of the logs, because the product of a^m and a^n is a^(m+n); the log of a quotient is the difference of the logs; and the log of a power is the index times the log. Candidates lose marks by inventing a fourth law, since log(M + N) has no expansion, and by treating log^2 x, meaning (log x)^2, as though it were log(x^2) = 2 log x.',
          bulletPoints: [
            'Index to log: 5^3 = 125 becomes log_5 125 = 3; log form always names the base and asks for the index.',
            'log_a (MN) = log_a M + log_a N, so log 2 plus log 5 = log 10 = 1.',
            'log_a (M divided by N) = log_a M - log_a N, so log 8 - log 2 = log 4.',
            'log_a M^n = n log_a M, so log 4 = 2 log 2 = 0.6021.',
            'Change of base: log_a N = log N divided by log a, which is what a calculator button really computes.'
          ],
          keyTakeaway: 'Read a logarithm as the answer to the question which power makes this number.',
          realWorldExample: 'An ecologist counting bacterial doubling in a lab at Achimota says the population reached 10^8 cells, and the log form simply reports the exponent 8.'
        },
        {
          title: 'Common Logs, Antilogs and Four-Figure Tables',
          content: 'A common log has base ten, so the base is never written. Any positive number can be written as the product of a mantissa between 1 and 10 and a power of ten, which splits the log into two pieces: the characteristic, the integer part that comes from the power of ten, and the mantissa, the decimal part that is read from the four-figure table. For 42000 = 4.2 times 10^4, the mantissa of 4.2 is 0.6232 and the characteristic is 4, so log 42000 = 4.6232. The table can only ever return a mantissa, so a candidate must place the decimal point from the characteristic. For a small number such as 0.0002 = 2 times 10^-4, the log is written with bar notation as characteristic -4 with mantissa 0.3010; the mantissa stays positive while the characteristic locates the point, and the number itself remains positive.',
          bulletPoints: [
            'To take a log: write the number in standard form, look up the mantissa of the leading digits in the table, then attach the power of ten as the characteristic.',
            'To take an antilog: split the log into integer and decimal parts, read the table on the decimal part only, then multiply by ten raised to the integer part.',
            'With log 2 = 0.3010 and log 3 = 0.4771, log 45 = 2 log 3 + log 5 = 0.9542 + 0.6990 = 1.6532, whose antilog is 45.',
            'Antilog of 1.0791 = 10^1 times 10^0.0791 = 10 times 1.200 = 12.',
            'Antilog of 4.6021 = 10^4 times 10^0.6021 = 10000 times 4 = 40000, because log 4 = 2 log 2 = 0.6021.'
          ],
          keyTakeaway: 'The mantissa is looked up, the characteristic is decided, and only together they give the number.',
          realWorldExample: 'A radio engineer near Tema reads a signal ratio of 42000 on a log scale by entering the table at 4.2 and writing 4.6232, then checks the antilog back to 4.2 times 10^4.'
        }
      ],
      commonMistakes: [
        'Multiplying instead of adding indices on a product: writing x^2 times x^3 as x^6; the correct line is x^(2+3) = x^5, while only (x^2)^3 equals x^6.',
        'Dropping the negative sign on a negative index: writing 4^-1 as -4, when 4^-1 = 1/4 = 0.25, and repeating the slip as 4^(-1/2) = -0.5 instead of 4^(-1/2) = 0.5.',
        'Reading a fractional index as a multiplier: writing 27^(2/3) as 18 instead of taking the cube root first, which gives 3^2 = 9.',
        'Inventing a log law for a sum or misreading a squared log: log(2 + 3) is log 5, not log 2 + log 3 = log 6, and (log x)^2 is not 2 log x, since with x = 10 the two are 1 and 2.',
        'Treating a negative characteristic as making the whole number negative: reading the log with characteristic -4 and mantissa 0.3010 as -0.0002 instead of 0.0002.'
      ],
      wassceExamTips: [
        'In Paper 1 the indices item is usually a single simplification worth about 2 marks; show the one line where the indices are added or subtracted, because that line carries the method mark M1.',
        'Paper 2 sets logs as a multi-part computation: expect to state the characteristic, read the mantissa, and then take the antilog, each earning its own M1 or A1, so a bare final number earns little.',
        'When both sides of an equation can be written on one base, do that instead of taking logs, because matching indices is shorter and safer; 4^(x+1) = 32^(x-1) becomes 2x + 2 = 5x - 5 in two lines.',
        'Use the printed four-figure table exactly as laid out, entering on the left row and reading across to the small column, and note the mean difference only when the question gives four digits.',
        'If part (a) of a logs question fails, carry the printed value forward into part (b): a carry-through error (afr) keeps the method marks provided the later working is correct.'
      ],
      summaryChecklist: [
        'Can I simplify a product and a quotient of powers using the addition and subtraction laws?',
        'Can I rewrite negative, zero and fractional indices as surds, reciprocals or roots and evaluate them?',
        'Can I move between index form and logarithmic form for any base?',
        'Can I condense or expand a logarithmic expression with the product, quotient and power laws?',
        'Can I read a common log and its antilog from four-figure tables and place the decimal point correctly?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-indices-1',
        title: 'Simplifying a Product of Fractional Indices',
        problem: 'Simplify (16 x^4 y^-6)^(1/2) times (8 x^-3 y^9)^(1/3), leaving the answer in its simplest form.',
        stepByStepSolution: [
          'Step 1 (M1): Apply the power of a product to the first bracket: (16 x^4 y^-6)^(1/2) = 16^(1/2) times x^(4 times 1/2) times y^(-6 times 1/2).',
          'Step 2 (A1): Evaluate each part: 16^(1/2) = 4, x^(4 times 1/2) = x^2 and y^(-6 times 1/2) = y^-3, so the first factor is 4 x^2 y^-3.',
          'Step 3 (M1): Treat the second bracket the same way: (8 x^-3 y^9)^(1/3) = 8^(1/3) times x^(-3 times 1/3) times y^(9 times 1/3).',
          'Step 4 (A1): 8^(1/3) = 2, x^(-3 times 1/3) = x^-1 and y^(9 times 1/3) = y^3, so the second factor is 2 x^-1 y^3.',
          'Step 5 (M1): Multiply the factors: coefficients 4 times 2 = 8; for x add the indices 2 plus (-1) = 1; for y add -3 plus 3 = 0.',
          'Step 6 (M1): Write x^1 as x and use the zero index law to replace y^0 by 1, since y is not zero.',
          'Step 7 (A1): Final answer: 8x. Check with x = 2 and y = 3: the expression becomes (256/729)^(1/2) times 19683^(1/3) = 16/27 times 27 = 16, and 8x = 8 times 2 = 16.'
        ],
        keyTakeaway: 'Distribute the fractional index to every part of the bracket, then add the indices of matching bases.'
      },
      {
        id: 'ex-shs1-em-indices-2',
        title: 'Solving an Exponential Equation by Matching Bases',
        problem: 'Solve for x: 4^(x+1) = 32^(x-1).',
        stepByStepSolution: [
          'Step 1 (M1): Write every number on base 2: 4 = 2^2 and 32 = 2^5.',
          'Step 2 (M1): Substitute and use the power of a power law: (2^2)^(x+1) = (2^5)^(x-1), which gives 2^(2x+2) = 2^(5x-5).',
          'Step 3 (M1): The base is now the same on both sides, so the indices must be equal: 2x + 2 = 5x - 5.',
          'Step 4 (M1): Collect terms: 2 + 5 = 5x - 2x, so 7 = 3x.',
          'Step 5 (A1): Divide by 3: x = 7/3, which is 2 1/3.',
          'Step 6 (M1): Check by substitution: the left side is 4^(7/3 + 1) = 4^(10/3) = (2^2)^(10/3) = 2^(20/3), and the right side is 32^(7/3 - 1) = 32^(4/3) = (2^5)^(4/3) = 2^(20/3), the same quantity.',
          'Step 7 (A1): Final answer: x = 7/3, approximately 2.33 to 3 significant figures, and each side equals 2^(20/3), about 102 to 3 significant figures.'
        ],
        keyTakeaway: 'Reduce both sides to one base, then equate the indices and check by substituting back.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t1-indices-logarithms',
      topicId: 'shs1-em-t1-indices-logarithms',
      title: 'Indices and Logarithms Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-indices-logarithms-1',
          quizId: 'quiz-shs1-em-t1-indices-logarithms',
          questionText: 'Simplify a^5 times a^-2 divided by a^3.',
          optionA: 'a',
          optionB: '1',
          optionC: 'a^6',
          optionD: 'a^10',
          correctOption: 'B',
          subConcept: 'Index Laws',
          explanation: 'The indices combine as 5 + (-2) - 3 = 0, so the expression is a^0, and any non-zero base raised to the power zero equals 1. Option A, a, is that same working reported as a^1; option C, a^6, comes from adding the divisor index instead of subtracting it, which gives 5 - 2 + 3 = 6; option D, a^10, multiplies 5 by 2 instead of adding the indices.',
          remediationTip: 'Write one line with all the indices together: a^(5 - 2 - 3), before you evaluate the index arithmetic.'
        },
        {
          id: 'q-em-indices-logarithms-2',
          quizId: 'quiz-shs1-em-t1-indices-logarithms',
          questionText: 'Evaluate 27^(2/3).',
          optionA: '9',
          optionB: '3',
          optionC: '18',
          optionD: '81',
          correctOption: 'A',
          subConcept: 'Fractional Indices',
          explanation: 'The denominator of the fractional index is the root and the numerator is the power, so 27^(2/3) = (cube root of 27)^2 = 3^2 = 9. Option B, 3, takes only the root; option C, 18, wrongly multiplies 27 by the fraction; option D, 81, raises 3 to the fourth power instead of the second.',
          remediationTip: 'Say it out loud: root first, then power. Circle the root you have just taken before you raise it.'
        },
        {
          id: 'q-em-indices-logarithms-3',
          quizId: 'quiz-shs1-em-t1-indices-logarithms',
          questionText: 'Given that log 2 = 0.3010, evaluate 2 log 5 + log 8.',
          optionA: '1.3010',
          optionB: '1.6990',
          optionC: '3.3010',
          optionD: '2.3010',
          correctOption: 'D',
          subConcept: 'Laws of Logarithms',
          explanation: 'Use log 5 = log(10 divided by 2) = 1 - log 2 = 0.6990, so 2 log 5 = log 25, and log 8 = 3 log 2 = 0.9030. Then log 25 + log 8 = log(25 times 8) = log 200 = 2 + log 2 = 2.3010. Option A, 1.3010, is log 20, option B, 1.6990, is log 50 and option C, 3.3010, is log 2000, so each keeps only part of the combination.',
          remediationTip: 'Convert 5 into 10 divided by 2 at once, then check the answer by asking which power of ten is being described.'
        },
        {
          id: 'q-em-indices-logarithms-4',
          quizId: 'quiz-shs1-em-t1-indices-logarithms',
          questionText: 'Given log 2 = 0.3010 and log 3 = 0.4771, find log 12.',
          optionA: '0.7781',
          optionB: '0.9542',
          optionC: '1.0791',
          optionD: '1.2552',
          correctOption: 'C',
          subConcept: 'Logs of Composite Numbers',
          explanation: 'Factorise 12 as 4 times 3, so log 12 = log 4 + log 3 = 2 log 2 + log 3 = 0.6020 + 0.4771 = 1.0791. Option A, 0.7781, is log 6, obtained by taking only one factor of 2; option B, 0.9542, is 2 log 3, the log of 9; option D, 1.2552, is log 2 plus 2 log 3, the log of 18, so each distractor matches a different factorisation.',
          remediationTip: 'Break the number into primes and write one log term per prime factor, counting repeated factors separately.'
        },
        {
          id: 'q-em-indices-logarithms-5',
          quizId: 'quiz-shs1-em-t1-indices-logarithms',
          questionText: 'Evaluate 4^(-3/2) times 8^(4/3).',
          optionA: '1/2',
          optionB: '8',
          optionC: '32',
          optionD: '2',
          correctOption: 'D',
          subConcept: 'Negative and Fractional Indices',
          explanation: 'Evaluate each factor alone: 4^(-3/2) = 1 divided by (square root of 4) cubed = 1 divided by 2^3 = 1/8, while 8^(4/3) = (cube root of 8)^4 = 2^4 = 16, so the product is 16 divided by 8 = 2. Option A, 1/2, keeps 1/8 but reads 8^(4/3) as 4; option B, 8, reads it as 64, which is 8^2; option C, 32, drops the negative index so that 4^(-3/2) becomes 8 and is then multiplied by 4.',
          remediationTip: 'Evaluate each factor separately and write the two numbers under the expression before multiplying.'
        }
      ]
    }
  },
  {
    id: 'shs1-em-t1-sets-venn-diagrams',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 1,
    orderIndex: 3,
    title: 'Sets, Subsets and Venn Diagrams',
    description: 'Set notation, subsets and proper subsets, the universal set and complement, union and intersection, disjoint sets, the cardinality formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B), and two- and three-set Venn diagram word problems.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A set is a well-defined collection: every member either belongs or does not belong, so "the tall students of KNUST" is not a set but "the students in SHS 1 Green, 40 in number" is.
• Roster form lists members inside braces: A = {3, 6, 9}; set-builder form states the rule: A = {x : x is a multiple of 3 in U}.
• Membership is written with the symbol ∈, and a set with no members is the empty set ∅, which is a subset of every set.
• A subset of B contains nothing outside B, written A ⊆ B; if A is a subset of B but A is not equal to B, then A ⊂ B and A is a proper subset.
• A set with k elements has 2^k subsets in total and 2^k - 1 proper subsets, so {a, b, c, d, e} has 32 subsets and 31 proper subsets.
• The universal set U contains every element under discussion, and the complement of A is all of U that is not in A.
• The union A ∪ B holds every element that is in A or in B or in both; the intersection A ∩ B holds only the elements shared by both.
• Disjoint sets share nothing, so A ∩ B = ∅ and n(A ∪ B) = n(A) + n(B).
• Counting law for two sets: "n(A ∪ B) = n(A) + n(B) - n(A ∩ B)", for example 20 + 15 - 7 = 28.
• Counting law for three sets: add the three single counts, subtract the three pair overlaps, then add the triple overlap.
• Venn working must fill the innermost region first, the region where every circle overlaps, then work outwards.
• Neither-region problems use n(U) minus the union: with 40 students, 25 offering Mathematics, 18 offering Physics and 5 offering neither, the union is 35 and the overlap is 25 + 18 - 35 = 8.
• The difference A - B keeps the part of A that lies outside B, so with n(A) = 30 and 8 students in the overlap, A - B counts 22.
• Shade conventions: union is shaded over both circles including the middle, intersection is the middle only, complement is everything outside the circle.
• Elements and subsets are different objects, so 3 ∈ {1, 2, 3} and {1, 2} ⊂ {1, 2, 3}, but {3} is never an element of a set that lists bare numbers.`,
    detailedNotes: {
      overview: 'Set language is the grammar of the whole WASSCE Elective Mathematics syllabus: probability writes its events as sets, functions compare domain with range, and linear programming speaks of feasible regions as solution sets. SHS 1 builds the vocabulary, the subset and complement ideas, and the two counting laws that turn word problems into one clean line of arithmetic. Marks in this topic are rarely lost to hard algebra; they are lost to double counting, which is exactly what the formula n(A ∪ B) = n(A) + n(B) - n(A ∩ B) repairs.',
      introduction: 'Draw before you compute. Every word problem on sets becomes a two- or three-circle diagram whose regions are filled one at a time, starting with the innermost overlap. Keep the three notations apart while you revise: braces enclose a set, the symbol ∈ links an element to a set, and the symbol ⊂ links a set to a larger set.',
      realWorldContext: 'In a SHS class at Koforidua of 60 students, 40 offer Mathematics and 30 offer Physics, and the register must report how many offer at least one science, which the counting law answers as 60. A canteen study in Tamale polls 100 students on jollof rice, banku and fufu to plan Saturday stock, and a market survey at Madina records 90 traders, each of whom sells at least one of two crops, 62 selling tomatoes and 48 selling onions, so the wholesaler works out that 20 sell both.',
      objectives: [
        'Write a set in roster and in set-builder form and state membership with the symbol ∈',
        'Determine subsets and proper subsets of a given set and count them using 2^k',
        'Use the universal set to state complements and differences of sets',
        'Find and interpret n(A ∪ B) using the formula n(A) + n(B) - n(A ∩ B)',
        'Solve two- and three-set Venn diagram word problems by filling regions from the innermost outward'
      ],
      sections: [
        {
          title: 'Sets, Subsets and Proper Subsets',
          content: 'A set is a collection about which membership is never vague. Two standard notations carry it: roster form lists the members, as in A = {2, 4, 6}, and set-builder form states the rule, as in A = {x : x is an even number in U}. The empty set, written ∅ or { }, has no members and is a subset of every set. A set X is a subset of Y when nothing in X lies outside Y, written X ⊆ Y; it is a proper subset, written X ⊂ Y, when Y contains at least one element that X does not. The count of subsets comes from the doubling principle: each element is either in or out, so a set of k elements has 2^k subsets, one of which is the set itself, leaving 2^k - 1 proper subsets.',
          bulletPoints: [
            'Membership versus containment: 2 ∈ {2, 4, 6} but {2, 4} ⊆ {2, 4, 6}.',
            'The set {2, 4, 6} has 2^3 = 8 subsets, of which 7 are proper subsets.',
            'Two sets are equal when they contain exactly the same members, whatever the order of listing.',
            'The empty set is a subset of every set but is never an element of a set of numbers.',
            'Repetition changes nothing: {1, 1, 2} and {1, 2} name the same set.'
          ],
          keyTakeaway: 'Elements sit inside a set; subsets are themselves sets, and the notation must not mix the two ideas.',
          realWorldExample: 'From a list of the six SHS 1 prefects, the executive is a subset of the prefect body, and the empty list of unexamined candidates is also a subset.'
        },
        {
          title: 'Universal Set, Complements and Set Difference',
          content: 'A complement cannot be named until the universal set U is fixed, because it means everything in U that is not in A. Change U and the answer changes: the complement of {2, 4, 6} inside the universal set of even numbers from 2 to 10 is {8, 10}, while the same set complemented inside all the whole numbers from 1 to 10 becomes {1, 3, 5, 7, 8, 9, 10}. The difference A - B, which is the same set as the intersection of A with the complement of B, keeps the part of A that avoids B. De Morgan found the two rules that connect these ideas, and they are worth verifying with one diagram: the complement of a union is the intersection of the two complements, and the complement of an intersection is the union of the two complements.',
          bulletPoints: [
            'Always write U explicitly, for instance U = {x : x is a whole number from 1 to 20}.',
            'The union of A with its complement is U, and A intersected with its complement is the empty set.',
            'The count of a complement is n(U) - n(A), which is the form used in word problems.',
            'De Morgan: the complement of A union B equals the intersection of the complements, and the complement of A intersect B equals the union of the complements.',
            'A - B is not the same as B - A unless the two sets are equal.'
          ],
          keyTakeaway: 'Fix the universal set before asking what lies outside a set.',
          realWorldExample: 'In a survey at Ho of 20 households where 12 use prepaid electricity, the complement is the 8 households still on post-paid connection.'
        },
        {
          title: 'Union, Intersection and Disjoint Sets',
          content: 'The union A ∪ B collects everything belonging to at least one of the sets, while the intersection A ∩ B keeps only what is shared. The word OR in mathematics is inclusive, which is why union counts students in A, students in B, and students in both. When two sets have no element at all in common, they are disjoint, the intersection is the empty set, and the union simply adds. Where the intersection is not empty, adding n(A) and n(B) counts the overlap twice, so the intersection is subtracted once to repair the double count. That single formula, n(A ∪ B) = n(A) + n(B) - n(A ∩ B), converts most WASSCE word problems into one line of arithmetic.',
          bulletPoints: [
            'n(A ∪ B) = n(A) + n(B) - n(A ∩ B) is the repair of the double count.',
            'n(A ∩ B) can never exceed the smaller of n(A) and n(B).',
            'n(A ∪ B) never exceeds n(U); if the arithmetic gives a larger figure, the data was misread.',
            'n(A - B) = n(A) - n(A ∩ B).',
            'A class of 60 with n(Maths) = 40, n(Physics) = 30 and overlap 10 gives a union of exactly 60, so nobody is outside both.'
          ],
          keyTakeaway: 'Add the two counts once and subtract the overlap once.',
          realWorldExample: 'At the Madina market every one of 90 traders sells at least one of tomatoes and onions; 62 sell tomatoes and 48 sell onions, so 62 + 48 - 90 = 20 sell both crops.'
        },
        {
          title: 'Venn Diagrams and Cardinality Word Problems',
          content: 'Draw the rectangle as U and the circles inside it, then place numbers in regions rather than in circles, because a circle contains several regions. Always begin with the innermost overlap and work outwards: fill every circle with the triple intersection first, then the double overlap regions, then the one-set-only regions. The union is the sum of all regions inside the circles, and the answer to a neither question is n(U) minus that union. For three sets the union is n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C): the three pair overlaps were each counted once too often, and the triple region, subtracted three times after being added three times, must be returned.',
          bulletPoints: [
            'Region working, not circle working, prevents double counting.',
            'Every statement in the question must land in exactly one region of the diagram.',
            'For three sets, the count of exactly two members is the sum of the three pairwise regions after removing the triple overlap.',
            'The check is total consistency: the sum of all regions plus the outside region equals n(U).',
            'A rectangle label of U without any value written beside it is a lost mark in Paper 2.'
          ],
          keyTakeaway: 'Fill the centre first, then move outward, and verify that every region sums to the total polled.',
          realWorldExample: 'A hostel warden in Cape Coast records which of 100 students use the reading room, the ICT lab or the clinic, and the diagram shows the 4 who used none as the region outside all three circles.'
        }
      ],
      commonMistakes: [
        'Adding the two circle counts and forgetting the overlap, so n(A ∪ B) is written 20 + 15 = 35 when n(A ∩ B) = 7 and the correct union is 28.',
        'Placing a number in a whole circle instead of the correct region: writing 55 inside the jollof circle when only the jollof-only region is 23.',
        'Confusing union with intersection, so the inclusive word OR is read as AND and the middle region alone is reported.',
        'Naming the intersection wrongly: A ∩ B means the elements common to both sets, so with A = {1, 2, 3} and B = {3, 4, 5} the answer is {3}, never {1, 2, 4, 5}.',
        'Treating the empty set as an element rather than a subset, and then reporting the complement with the union count instead of n(U) minus n(A ∪ B), which turns the neither-region count of 5 into the class total of 40.'
      ],
      wassceExamTips: [
        'Paper 1 sets a quick cardinality item such as finding n(A ∪ B) from three given numbers; write the formula, substitute in one line, and answer in about 40 seconds.',
        'In Paper 2 the Venn word problem is worth roughly 6 marks, with method marks M1 given for a correctly labelled diagram, for the innermost region and for the subtraction from n(U), so the diagram alone can earn most of the credit even if the arithmetic slips.',
        'Read every number into the diagram before calculating anything, and mark the outside region with the neither value, since examiners look for it explicitly.',
        'When a question asks for students who offer Mathematics but not Physics, answer the region of A that lies outside the overlap, not the whole of A; reporting 30 instead of 22 forfeits the answer mark A1.',
        'Check the totals at the end: the sum of all regions plus the outside region must equal the stated universal total, and this verification costs only seconds.'
      ],
      summaryChecklist: [
        'Can I write a set in roster and in set-builder form and state whether an element or a subset belongs to it?',
        'Can I list and count all subsets and proper subsets of a small set using 2^k and 2^k - 1?',
        'Can I name the universal set and find a complement or a difference from it?',
        'Can I use n(A ∪ B) = n(A) + n(B) - n(A ∩ B) and the three-set version to find a union?',
        'Can I solve a two- or three-set word problem on a Venn diagram and check it against the total?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-sets-1',
        title: 'Union, Intersection and Complement by Listing',
        problem: 'Let U = {x : x is a whole number from 1 to 20}, A = {x : x is a multiple of 3} and B = {x : x is a multiple of 5}. Find n(A ∪ B), list A ∩ B, and find the number of elements in the complement of A ∪ B.',
        stepByStepSolution: [
          'Step 1 (M1): List the members of A, the multiples of 3 in U: A = {3, 6, 9, 12, 15, 18}, so n(A) = 6.',
          'Step 2 (M1): List the members of B, the multiples of 5 in U: B = {5, 10, 15, 20}, so n(B) = 4.',
          'Step 3 (M1): Read off the shared elements: only 15 is a multiple of both 3 and 5, so A ∩ B = {15} and n(A ∩ B) = 1.',
          'Step 4 (M1): Apply the counting law: n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 6 + 4 - 1.',
          'Step 5 (A1): Hence n(A ∪ B) = 9.',
          'Step 6 (M1): Confirm by listing the union: A ∪ B = {3, 5, 6, 9, 10, 12, 15, 18, 20}, which indeed has 9 members.',
          'Step 7 (A1): Final answers: n(A ∪ B) = 9, A ∩ B = {15}, and the complement of A ∪ B is {1, 2, 4, 7, 8, 11, 13, 14, 16, 17, 19}, so its count is 20 - 9 = 11.'
        ],
        keyTakeaway: 'List first, count second, and let the formula and the list agree before writing the answer.'
      },
      {
        id: 'ex-shs1-em-sets-2',
        title: 'Three-Set Canteen Survey',
        problem: 'In a survey of 100 students at a school in Obuasi, 55 chose jollof rice, 48 chose banku, 40 chose fufu, 22 chose jollof and banku, 18 chose jollof and fufu, 15 chose banku and fufu, and 8 chose all three. How many chose none of the three?',
        stepByStepSolution: [
          'Step 1 (M1): State the three-set law: n(J ∪ B ∪ F) = n(J) + n(B) + n(F) - n(J ∩ B) - n(J ∩ F) - n(B ∩ F) + n(J ∩ B ∩ F).',
          'Step 2 (M1): Substitute the given values: 55 + 48 + 40 - 22 - 18 - 15 + 8.',
          'Step 3 (A1): Evaluate: 55 + 48 + 40 = 143 and 22 + 18 + 15 = 55, so 143 - 55 + 8 = 96 students chose at least one of the three dishes.',
          'Step 4 (M1): Fill the innermost region first on the diagram: 8 students chose all three, so the exactly-two regions are 22 - 8 = 14 for jollof and banku, 18 - 8 = 10 for jollof and fufu, and 15 - 8 = 7 for banku and fufu.',
          'Step 5 (M1): Subtract around each circle to get the one-dish-only regions: jollof 55 - 14 - 10 - 8 = 23, banku 48 - 14 - 7 - 8 = 19, fufu 40 - 10 - 7 - 8 = 15.',
          'Step 6 (M1): Check the seven regions sum to 96: 23 + 19 + 15 + 14 + 10 + 7 + 8 = 96.',
          'Step 7 (A1): Final answer: 100 - 96 = 4 students chose none of the three dishes.'
        ],
        keyTakeaway: 'Begin at the triple overlap, then let every region be a subtraction from a circle total.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t1-sets-venn-diagrams',
      topicId: 'shs1-em-t1-sets-venn-diagrams',
      title: 'Sets and Venn Diagrams Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-sets-venn-diagrams-1',
          quizId: 'quiz-shs1-em-t1-sets-venn-diagrams',
          questionText: 'If A = {1, 2, 3} and B = {3, 4, 5}, what is n(A ∪ B)?',
          optionA: '3',
          optionB: '6',
          optionC: '5',
          optionD: '8',
          correctOption: 'C',
          subConcept: 'Union and Cardinality',
          explanation: 'The union is {1, 2, 3, 4, 5}, which has 5 members, and the formula agrees: 3 + 3 - 1 = 5. Option B, 6, adds the two counts and double counts the shared element 3; option A, 3, is the number of elements in one set, and option D, 8, counts as though no element were repeated.',
          remediationTip: 'Write the union out as a list first, crossing out the second copy of any element already listed.'
        },
        {
          id: 'q-em-sets-venn-diagrams-2',
          quizId: 'quiz-shs1-em-t1-sets-venn-diagrams',
          questionText: 'How many subsets, including the empty set and the set itself, has P = {a, b, c, d, e}?',
          optionA: '10',
          optionB: '16',
          optionC: '31',
          optionD: '32',
          correctOption: 'D',
          subConcept: 'Counting Subsets',
          explanation: 'Each of the 5 elements is either inside or outside a subset, so the count is 2^5 = 32. Option C, 31, is the number of proper subsets, which excludes P itself; option B, 16, is 2^4, the count for a four-element set, and option A, 10, counts only the two-element selections.',
          remediationTip: 'Decide whether the question wants all subsets or only proper subsets, then write 2^k or 2^k - 1 accordingly.'
        },
        {
          id: 'q-em-sets-venn-diagrams-3',
          quizId: 'quiz-shs1-em-t1-sets-venn-diagrams',
          questionText: 'If n(A) = 20, n(B) = 15 and n(A ∩ B) = 7, find n(A ∪ B).',
          optionA: '28',
          optionB: '27',
          optionC: '35',
          optionD: '42',
          correctOption: 'A',
          subConcept: 'The Two-Set Counting Law',
          explanation: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B) = 20 + 15 - 7 = 28. Option C, 35, is the sum without the repair of the double count; option D, 42, adds the intersection instead of removing it; option B, 27, keeps the right law but subtracts 8 rather than 7.',
          remediationTip: 'Say the formula aloud before substituting, and underline the intersection number in the question to avoid a misread.'
        },
        {
          id: 'q-em-sets-venn-diagrams-4',
          quizId: 'quiz-shs1-em-t1-sets-venn-diagrams',
          questionText: 'The universal set is U = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} and A = {x : x is even}. Which set is the complement of A?',
          optionA: '{2, 4, 6, 8, 10}',
          optionB: '{1, 3, 5, 7, 9}',
          optionC: '{1, 2, 3, 4, 5}',
          optionD: '{0, 2, 4, 6, 8, 10}',
          correctOption: 'B',
          subConcept: 'Complement relative to U',
          explanation: 'The complement is everything in U that is not in A, so it is the odd numbers {1, 3, 5, 7, 9}. Option A is A itself, option C is the lower half of U with no rule behind it, and option D includes 0, which is not a member of the stated universal set.',
          remediationTip: 'Circle U first and cross out the members of A from it; what remains is the complement.'
        },
        {
          id: 'q-em-sets-venn-diagrams-5',
          quizId: 'quiz-shs1-em-t1-sets-venn-diagrams',
          questionText: 'In a class of 40 students, 25 offered Mathematics, 18 offered Physics and 5 offered neither subject. How many offered both subjects?',
          optionA: '3',
          optionB: '8',
          optionC: '10',
          optionD: '13',
          correctOption: 'B',
          subConcept: 'Venn Word Problem with Neither',
          explanation: 'Students offering at least one subject number 40 - 5 = 35, so the overlap is 25 + 18 - 35 = 8. Option A, 3, forgets the 5 students who offered neither and computes 25 + 18 - 40; option C, 10, subtracts the Mathematics total from 35, and option D, 13, subtracts the 5 from the Physics total.',
          remediationTip: 'Reduce the universal total by the neither count first, then find the overlap from the two circle totals.'
        }
      ]
    }
  },
  {
    id: 'shs1-em-t1-surds',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 1,
    orderIndex: 4,
    title: 'Surds: Simplification and Rationalisation',
    description: 'Simplifying surds by removing square factors, adding and subtracting like surds, multiplying and dividing surds, rationalising a denominator with a single term or a binomial conjugate, simulating numerically, and comparing the sizes of two surds.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A surd is a root that cannot be written as an exact rational number, so √7 and ∛25 are surds while √36 = 6 is not.
• The product law of surds is √(ab) = √a times √b for non-negative a and b, and it is the engine of every simplification.
• To simplify, remove the largest square factor: √108 = √(36 times 3) = 6√3, √44 = 2√11 and √24 = 2√6.
• Like surds collect exactly like algebraic terms: 2√7 + 3√7 = 5√7, but √2 plus √3 is already in its simplest form.
• Never add the numbers under the root: √20 + √27 is 2√5 + 3√3, not √47.
• Multiplying surds: √2 times √8 = √16 = 4, and 3√2 times 2√5 = 6√10, multiplying coefficients first and radicands second.
• Rationalising a single-term denominator: √5 divided by √2 is multiplied top and bottom by √2 to give √10 divided by 2.
• Rationalising a binomial denominator uses the conjugate: (3 - √5) has conjugate (3 + √5), because (a - b)(a + b) = a^2 - b^2.
• Worked case: 20 divided by (3 - √5) equals 20(3 + √5) divided by (9 - 5) = 5(3 + √5) = 15 + 5√5.
• Compare two surds by squaring both, since both are positive: 5√2 against 7 gives 50 against 49, so 5√2 is the greater.
• Keep the exact surd form in working and give the 3-significant-figure value only when a numerical answer is asked for.
• Numerical check: √48 + √75 - √12 = 4√3 + 5√3 - 2√3 = 7√3, and 7√3 is about 12.1 correct to 3 significant figures.
• Surds carry through Pythagoras: the hypotenuse of a right triangle with shorter sides 4 and 3√2 is √(16 + 18) = √34, about 5.83.
• Never apply the square root to each part of a sum: √(9 + 16) is 5, whereas √9 + √16 is 7.`,
    detailedNotes: {
      overview: 'Surds are exact forms for numbers that decimals can only approximate, and WASSCE demands both the exact form and, when asked, its decimal value. The topic runs on three rules, the product law of radicals, the collection of like surds, and the difference of two squares used for rationalising, and a candidate who applies them in order rarely loses a mark. Examiners set a surd item in nearly every Paper 1 and a rationalisation in Paper 2 because the working is short, the marks are cheap and the slips are unmistakable.',
      introduction: 'Simplify every surd before any arithmetic begins, since a mixture of √48 and 3√12 in one line hides the fact that both are multiples of √3. Write the exact surd answer first and only then the approximate decimal, marking which is which. Rationalise as the last step of any fraction, because a root left under the denominator is treated as an unfinished answer.',
      realWorldContext: 'A surveyor who stakes a rectangular cocoa plot near Sefwi Wiawso with sides 3√5 metres and √20 metres must report the diagonal exactly as √65 metres, about 8.06 metres, before the district works department signs the plan. At a building site in Tamale a quantity surveyor needs the diagonal of a square panel of side 4 metres, which is 4√2 metres or about 5.66 m, and a carpenter at Kaneshie cutting a brace from a 5 metre length will accept 4√3 metres of material as an exact order rather than a rounded figure.',
      objectives: [
        'Identify which radicals are surds and simplify each by removing square factors',
        'Add, subtract, multiply and divide surds and state which sums are already simplest',
        'Rationalise a denominator containing one surd term',
        'Rationalise a binomial denominator using its conjugate and the difference of two squares',
        'Compare the sizes of two surds and give a 3-significant-figure approximation of an exact surd'
      ],
      sections: [
        {
          title: 'What a Surd Is and How to Simplify It',
          content: 'A surd is an irrational root, a number such as √7 that has no exact decimal or fraction form. The rule that makes simplification possible is the product law, √(ab) = √a times √b, valid when a and b are not negative. To simplify, search the number under the root for the largest square factor and lift its root outside: √48 = √(16 times 3) = 4√3, √75 = √(25 times 3) = 5√3 and √108 = 6√3. Once every surd in an expression has been reduced, like surds collect just as like algebraic terms do, so √48 + √75 - √12 becomes 4√3 + 5√3 - 2√3 = 7√3. The danger is a sum under a root: √(9 + 16) equals 5 while √9 + √16 equals 7, so the product law never extends to addition.',
          bulletPoints: [
            'Lift the largest square factor, not merely a small one: √150 = √(25 times 6) = 5√6, while √150 = √(2 times 75) leaves the work unfinished.',
            'A surd is simplest when no square factor except 1 remains under the root and no fraction sits under it.',
            'Like surds share the same radicand after simplification, so √44 and 3√11 are like, since √44 = 2√11.',
            'Unlike surds never merge: 2√7 plus 3√2 stays as it is.',
            'Cube-root surds obey the same idea: ∛(8 times 5) = 2∛5.'
          ],
          keyTakeaway: 'Remove the largest square factor first, then collect only surds with the same number under the root.',
          realWorldExample: 'A tailor at Kejetia cutting a diagonal hem on a 2 m by 2 m panel measures the diagonal as 2√2 metres, about 2.83 m, and never 4 metres.'
        },
        {
          title: 'Adding, Subtracting, Multiplying and Dividing Surds',
          content: 'Collection works on coefficients, the numbers in front of the roots: 2√7 + 3√7 = 5√7, because √7 behaves exactly like the letter x. Surds with different radicands must be simplified before the collector can see a hidden pair: √50 - √32 = 5√2 - 4√2 = √2. Multiplication combines coefficients and radicands separately, so 3√2 times 2√5 = 6√10 and √2 times √8 = √16 = 4, a surd product that turns rational. Division cancels the same way: √44 divided by √11 = √4 = 2, and a fraction such as √50 divided by √2 reduces to √25 = 5. Numerical simulation is the safety check, since √50 minus √32 must evaluate to about 1.41 because 7.071 - 5.657 = 1.414, so a calculator or a 3-significant-figure estimate settles any doubt about a collection.',
          bulletPoints: [
            'Collect only after simplifying: √50 - √32 = 5√2 - 4√2 = √2.',
            'Multiplication rule: a√p times b√q = ab√(pq), so 3√2 times 2√5 = 6√10.',
            'Division rule: a√p divided by b√q = (a divided by b) times √(p divided by q).',
            'Products may be rational: √2 times √8 = 4, and (2 + √3)(2 - √3) = 1.',
            'A sum of unlike surds such as 2√3 + √2 cannot be shortened; its value is about 4.88 to 3 significant figures.'
          ],
          keyTakeaway: 'Add and subtract only like surds; multiply and divide both the coefficients and the radicands.',
          realWorldExample: 'A farmer fencing a rectangular kitchen garden at Abetifi with sides 4 m and 4√6 m buys 2(4 + 4√6) = 8 + 8√6 metres of wire, about 27.6 m.'
        },
        {
          title: 'Rationalising a Single-Term Denominator',
          content: 'An answer with a root under the fraction bar is not finished, because a root in the denominator hides the size of the quantity and frustrates further combination. The repair is to multiply the numerator and the denominator by the same surd, which multiplies the denominator by itself and removes the root. Thus √5 divided by √2 becomes √5 times √2 divided by √2 times √2, which is √10 divided by 2, and 4 divided by √6 becomes 4√6 divided by 6, which reduces to 2√6 divided by 3. Because the multiplier is the fraction √2 divided by √2, equal to 1, the value of the quantity never changes, only its appearance. Simplify the resulting fraction as well, since 4√6 divided by 6 that is left unreduced loses the final mark in most marking schemes.',
          bulletPoints: [
            'Multiply top and bottom by the root that appears in the denominator.',
            'A coefficient in the denominator is handled with the same multiplier, as in 3 divided by 2√5.',
            'Always reduce the resulting fraction: 4√6 divided by 6 becomes 2√6 divided by 3.',
            'Check numerically: 4 divided by √6 is about 1.63, and 2√6 divided by 3 gives the same 1.63.',
            'Never rationalise by changing only the denominator, since that alters the value.'
          ],
          keyTakeaway: 'Multiply by a well-chosen form of one so the denominator becomes a whole number.',
          realWorldExample: 'An engineer in Takoradi who measures a slope ratio as 5 divided by √3 records 5√3 divided by 3 on the drawing so the foreman can subdivide it exactly.'
        },
        {
          title: 'Rationalising with a Binomial Conjugate and Comparing Surds',
          content: 'When the denominator is a sum or difference of two terms with at least one surd, a single multiplier is not enough; instead use the conjugate, the same two terms with the middle sign reversed, because (a - b)(a + b) = a^2 - b^2 removes the root. For 20 divided by (3 - √5), multiply by (3 + √5) over itself: the denominator becomes 9 - 5 = 4 and the fraction becomes 5(3 + √5) = 15 + 5√5, which is about 26.2 to 3 significant figures. Two surds are compared by squaring, which is safe because both quantities are positive: 5√2 against 7 gives 50 against 49, so 5√2 is greater, and 4√3 against 3√5 gives 48 against 45, so 4√3 is greater. Estimating each value to three significant figures afterwards, for example 8√17 as √1088 which is about 33.0, confirms any ordering.',
          bulletPoints: [
            'The conjugate of 3 - √5 is 3 + √5, and their product is 9 - 5 = 4.',
            'Apply the conjugate multiplier to the numerator as well as the denominator.',
            'To compare two positive surds, square both and compare the squares.',
            'The simplest form still needs the fraction reduced and the brackets expanded, giving 15 + 5√5.',
            'State clearly which value is exact and which is a 3-significant-figure approximation.'
          ],
          keyTakeaway: 'Use the conjugate to turn a binomial denominator into a whole number, and compare surds by squaring.',
          realWorldExample: 'A trader in Ashaiman who compares two shelf spans, 3√5 metres and 4√3 metres, squares them to get 45 and 48 and orders the longer 4√3 span.'
        }
      ],
      commonMistakes: [
        'Adding the numbers under the roots: writing √20 + √27 as √47, when simplification gives 2√5 + 3√3 and the two surds are unlike and cannot be combined.',
        'Applying the root to each part of a sum: writing √(9 + 16) as 3 + 4 = 7, while the correct value is √25 = 5.',
        'Forgetting to collect after simplifying: leaving √50 - √32 as an answer of √18, which is 3√2, when the difference is √2.',
        'Rationalising only the denominator: turning 2 divided by (√3 + 1) into 2(√3 - 1) while forgetting the denominator becomes 2, so the answer must reduce to √3 - 1.',
        'Adding unlike surds into one radical: writing 2√3 + 3√2 as 5√5 or 5√6, neither of which equals the sum, whose value is about 7.71 to 3 significant figures, and treating 5√2 and 2√5 as equal when their squares are 50 and 20.'
      ],
      wassceExamTips: [
        'Paper 1 usually carries one objective surd item, for example simplifying √108; reduce it on the question paper and mark the answer, spending under a minute.',
        'In Paper 2 a rationalisation is worth roughly 4 marks, with a method mark M1 for stating the conjugate, a mark for the expanded denominator, and an answer mark A1 for the reduced simplest form, so write the multiplier explicitly.',
        'Leave answers in exact surd form unless the question says correct to so many significant figures, and when it does, give the decimal on a separate line and label it as the approximation.',
        'Compare surds by squaring rather than by a hasty decimal estimate; the squaring line is short and earns the method mark even when the conclusion is later revised.',
        'A surd that appears in an intermediate part is carried into the next part: if the simplification was wrong, the carry-through rule (afr) still awards method marks for correct working on your own value.'
      ],
      summaryChecklist: [
        'Can I tell a surd from a rational root and simplify it by removing the largest square factor?',
        'Can I add and subtract like surds after simplifying each one?',
        'Can I multiply and divide surds and reduce products such as √2 times √8 to a whole number?',
        'Can I rationalise a single-term denominator and a binomial denominator using the conjugate?',
        'Can I order two surds by squaring and give an exact value with its 3-significant-figure approximation?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-surds-1',
        title: 'Collecting Like Surds and Estimating',
        problem: 'Express √48 + √75 - √12 as a single surd in its simplest form, and give its value correct to 3 significant figures.',
        stepByStepSolution: [
          'Step 1 (M1): Simplify the first surd by lifting the largest square factor: √48 = √(16 times 3) = 4√3.',
          'Step 2 (M1): Simplify the second surd: √75 = √(25 times 3) = 5√3.',
          'Step 3 (M1): Simplify the third surd: √12 = √(4 times 3) = 2√3.',
          'Step 4 (M1): Substitute the three simplified surds into the expression: 4√3 + 5√3 - 2√3.',
          'Step 5 (A1): Collect the like surds by adding and subtracting the coefficients: 4 + 5 - 2 = 7, so the expression is 7√3.',
          'Step 6 (M1): Evaluate numerically with √3 taken as 1.732: 7 times 1.732 = 12.124, and the original roots check as 6.928 + 8.660 - 3.464 = 12.124.',
          'Step 7 (A1): Final answer: 7√3 exactly, which is about 12.1 correct to 3 significant figures.'
        ],
        keyTakeaway: 'Simplify every surd first, then the like ones collect; confirm the exact form with a decimal evaluation.'
      },
      {
        id: 'ex-shs1-em-surds-2',
        title: 'Rationalising a Binomial Denominator',
        problem: 'Rationalise the denominator and simplify 20 divided by (3 - √5), giving the exact result and its value to 3 significant figures.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the conjugate of the denominator: for 3 - √5 the conjugate is 3 + √5.',
          'Step 2 (M1): Multiply numerator and denominator by that conjugate: 20(3 + √5) divided by (3 - √5)(3 + √5).',
          'Step 3 (M1): Expand the denominator as a difference of two squares: (3 - √5)(3 + √5) = 9 - 5 = 4.',
          'Step 4 (M1): The fraction is now 20(3 + √5) divided by 4, so cancel the common factor 4 to get 5(3 + √5).',
          'Step 5 (A1): Expand the bracket: 5(3 + √5) = 15 + 5√5.',
          'Step 6 (M1): Decimal check: √5 is about 2.236, so 15 + 5 times 2.236 = 26.18, and the original fraction gives 20 divided by 0.764 = 26.18, the same value.',
          'Step 7 (A1): Final answer: 15 + 5√5 exactly, which is about 26.2 correct to 3 significant figures.'
        ],
        keyTakeaway: 'Multiply by the conjugate so the denominator becomes a whole number, then reduce and check numerically.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t1-surds',
      topicId: 'shs1-em-t1-surds',
      title: 'Surds Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-surds-1',
          quizId: 'quiz-shs1-em-t1-surds',
          questionText: 'Express √108 in its simplest surd form.',
          optionA: '6√3',
          optionB: '12√3',
          optionC: '18√3',
          optionD: '36√3',
          correctOption: 'A',
          subConcept: 'Simplifying Surds',
          explanation: 'The largest square factor of 108 is 36, so √108 = √36 times √3 = 6√3. Option B, 12√3, squares to 432, option C, 18√3, squares to 972 and option D, 36√3, squares to 3888, so none of them returns to 108; each comes from lifting only part of the square factor.',
          remediationTip: 'After simplifying, square your answer and multiply out to confirm you land back on the original number.'
        },
        {
          id: 'q-em-surds-2',
          quizId: 'quiz-shs1-em-t1-surds',
          questionText: 'Simplify √50 - √32.',
          optionA: '√18',
          optionB: '√2',
          optionC: '9√2',
          optionD: '2',
          correctOption: 'B',
          subConcept: 'Collecting Like Surds',
          explanation: 'Both surds are multiples of √2, since √50 = 5√2 and √32 = 4√2, so the difference is 5√2 - 4√2 = √2. Option A, √18, comes from subtracting the numbers under the roots and equals 3√2; option C, 9√2, adds instead of subtracts; option D, 2, mistakes the surd √2 for the whole number 2.',
          remediationTip: 'Simplify each surd fully before touching the signs, then collect only surds sharing the same radicand.'
        },
        {
          id: 'q-em-surds-3',
          quizId: 'quiz-shs1-em-t1-surds',
          questionText: 'Rationalise the denominator of 4 divided by √6 and give the simplest form.',
          optionA: '4√6 divided by 3',
          optionB: '2√6 divided by 3',
          optionC: '2√3 divided by 3',
          optionD: '4 divided by 3',
          correctOption: 'B',
          subConcept: 'Rationalising a Single Surd Denominator',
          explanation: 'Multiplying top and bottom by √6 gives 4√6 divided by 6, and the fraction reduces by 2 to 2√6 divided by 3, which is about 1.63. Option A, 4√6 divided by 3, is double the value because the reduction was skipped; option C replaces √6 by √3, and option D drops the surd altogether.',
          remediationTip: 'Rationalise first, then hunt for a common factor between the numerator coefficient and the new denominator.'
        },
        {
          id: 'q-em-surds-4',
          quizId: 'quiz-shs1-em-t1-surds',
          questionText: 'Which is the greater, 5√2 or 7?',
          optionA: '7, because it has no surd',
          optionB: 'They are equal',
          optionC: '7, by about 0.07',
          optionD: '5√2, by about 0.07',
          correctOption: 'D',
          subConcept: 'Comparing Surds',
          explanation: 'Both numbers are positive, so squaring is safe: (5√2)^2 = 25 times 2 = 50 while 7^2 = 49, and 50 is the larger. In decimals, 5√2 is about 7.07 and 7 is exactly 7.00, so 5√2 is greater by about 0.07. Options A and C wrongly assume a surd must be the smaller quantity, and option B mistakes 50 and 49 for equal values.',
          remediationTip: 'Square both quantities, compare the squares, and then confirm with a quick decimal estimate.'
        },
        {
          id: 'q-em-surds-5',
          quizId: 'quiz-shs1-em-t1-surds',
          questionText: 'Express 2 divided by (√3 + 1) in its simplest form.',
          optionA: '√3 - 1',
          optionB: '√3 + 1',
          optionC: '2(√3 - 1)',
          optionD: '(√3 - 1) divided by 2',
          correctOption: 'A',
          subConcept: 'Rationalising with a Conjugate',
          explanation: 'Multiply numerator and denominator by the conjugate √3 - 1: the denominator becomes (√3 + 1)(√3 - 1) = 3 - 1 = 2, so the fraction is 2(√3 - 1) divided by 2 = √3 - 1, which is about 0.732. Option C is exactly twice the answer because the 2 was never cancelled, option D divides twice, and option B leaves the denominator un-rationalised.',
          remediationTip: 'Write the conjugate multiplier on both the top and the bottom, then cancel any common factor before expanding.'
        }
      ]
    }
  },
  // =========================================================================
  // TERM 2
  // =========================================================================
// =========================================================================
  // SHS 1 TERM 2 — ELECTIVE MATHEMATICS — BATCH EM-1B (topics 5-8)
  // =========================================================================
  {
    id: 'shs1-em-t2-algebraic-manipulation',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 2,
    orderIndex: 5,
    title: 'Algebraic Expressions: Expansion, Factorisation, HCF and LCM',
    description: 'The four standard identities, complete factorisation by common factor, difference of two squares, trinomial and grouping methods, the HCF and LCM of monomials and polynomials, and correct cancelling in algebraic fractions.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Standard identity one: "(a + b)^2 = a^2 + 2ab + b^2", so "(x + 5)^2 = x^2 + 10x + 25"; the middle term 2ab is never skipped.
  • Standard identity two: "(a - b)^2 = a^2 - 2ab + b^2", so "(2x - 3)^2 = 4x^2 - 12x + 9".
  • Difference of two squares: "(a + b)(a - b) = a^2 - b^2", so "(3x + 2)(3x - 2) = 9x^2 - 4".
  • Expanded form of the general bracket product: "(x + a)(x + b) = x^2 + (a + b)x + ab", e.g. "(x + 4)(x - 1) = x^2 + 3x - 4".
  • Factorise means the reverse of expand. Take out the highest common factor FIRST: "2x^2 + 8x = 2x(x + 4)".
  • Difference of two squares works on brackets too: "(2x - 3)^2 - (x + 1)^2 = (3x - 2)(x - 4)".
  • Trinomial ax^2 + bx + c with a not 1: two numbers that multiply to ac and add to b. "2x^2 + 7x + 3 = (2x + 1)(x + 3)".
  • Grouping for four terms: "mx + my + 2x + 2y = m(x + y) + 2(x + y) = (x + y)(m + 2)".
  • Factorisation must be COMPLETE: "x^3 - 4x = x(x - 2)(x + 2)", never left as "x(x^2 - 4)".
  • HCF of polynomials: factorise each, keep only COMMON factors at their LOWEST power. "x^2 + 5x + 6 = (x + 2)(x + 3)" and "x^2 + x - 6 = (x - 2)(x + 3)" have HCF "(x + 3)".
  • LCM of polynomials: every factor at its HIGHEST power. For the pair above, "LCM = (x + 2)(x + 3)(x - 2)".
  • Monomials: "HCF(6x^2y, 4xy^3) = 2xy" and "LCM(6x^2y, 4xy^3) = 12x^2y^3" because LCM(6, 4) = 12 with each letter at its greatest index.
  • Algebraic fractions: factorise numerator and denominator, then cancel only COMMON FACTORS: "(x^2 - 1)/(x^2 + x) = (x - 1)/x".
  • Check every factorisation by multiplying back out; expansion and factorisation are inverse operations.`,
    detailedNotes: {
      overview: 'Algebraic manipulation is the engine room of Elective Mathematics: almost every WASSCE Paper 2 question hides at least one expansion or factorisation step inside it. This topic assembles the four standard identities, the four factorisation routes, and the HCF and LCM machinery that later reappears in partial fractions, quadratic solving, simultaneous equations and indices. A candidate who can factorise completely and without hesitation earns method marks in nearly every topic that follows.',
      introduction: 'Read an expression the way a trader reads a load: first look for what can be taken out (common factor), then for what can be split (two squares, a trinomial, four terms in pairs), and stop only when every bracket is prime. Expansion runs the film backwards, and it is also the cheapest way to prove your factorisation is right.',
      realWorldContext: 'A contractor in Ho lays a rectangular concrete walkway whose length is "(2x + 3)" m and width "(x - 1)" m, so the area expands to "(2x^2 + x - 3)" m^2; given the area instead, factorisation recovers the side lengths. Two traffic signals at a junction in Kumasi change every 18 seconds and every 24 seconds, and they next change together after the LCM, 72 seconds; the same number machinery applied to letters is the HCF and LCM of polynomials.',
      objectives: [
        'Expand products correctly using (a plus or minus b)^2, (a + b)(a - b) and (x + a)(x + b)',
        'Factorise expressions completely using common factor, difference of two squares, trinomials and grouping',
        'Determine the HCF and LCM of monomials and of quadratic polynomials by factorisation',
        'Simplify algebraic fractions by cancelling common factors only, never common terms',
        'Verify any expansion or factorisation by substituting values or multiplying back out'
      ],
      sections: [
        {
          title: 'The Standard Identities',
          content: 'Four expansions occur so often in WASSCE that they are memorised as identities. First, (a + b)^2 = a^2 + 2ab + b^2 and (a - b)^2 = a^2 - 2ab + b^2: the square of a binomial always has three terms, and the middle term 2ab is the one candidates drop under exam pressure. Second, (a + b)(a - b) = a^2 - b^2, the difference of two squares, which collapses to only two terms because the cross products cancel. Third, (x + a)(x + b) = x^2 + (a + b)x + ab, where the coefficient of x is the SUM of the constants and the last term is their PRODUCT. Using the third identity, (3x - 2)(x - 4) is obtained with care about the leading coefficient: it expands to 3x^2 - 12x - 2x + 8, that is 3x^2 - 14x + 8.',
          bulletPoints: [
            'A squared binomial gives three terms; a difference-of-squares product gives two terms.',
            '(a - b)^2 keeps a^2 and b^2 positive but the middle term is negative: -2ab.',
            'In (x + a)(x + b), check the sum and product of a and b before writing the answer.',
            'Substitute a small value such as x = 1 to sanity-check any expansion in 10 seconds.'
          ],
          keyTakeaway: 'Know the four identities cold, and never drop the middle term 2ab when squaring a binomial.',
          realWorldExample: 'A square cocoa nursery at Newwinco with side (x + 4) m has area (x + 4)^2 = x^2 + 8x + 16 m^2; enlarging one side by 4 and shrinking the other by 4 gives (x + 4)(x - 4) = x^2 - 16 m^2.'
        },
        {
          title: 'Factorisation: Four Routes to a Complete Answer',
          content: 'Factorisation is expansion run backwards, and the instructions ask for the answer to be taken completely, not half-way. The routes are applied in a fixed order. Route one, common factor: take out the HCF of all terms, as in 3x^3 - 12x = 3x(x^2 - 4). Route two, difference of two squares: anything shaped like A^2 - B^2 becomes (A + B)(A - B), so x^2 - 4 becomes (x + 2)(x - 2) and 9a^2 - 16b^2 becomes (3a + 4b)(3a - 4b). Route three, trinomials: for 2x^2 + 7x + 3, find two numbers multiplying to ac = 6 and adding to b = 7, split the middle and finish. Route four, grouping: mx + my + 2x + 2y pairs into m(x + y) + 2(x + y) = (x + y)(m + 2). After any route, inspect every bracket: if a bracket still has a common factor or a difference of squares inside it, you are not finished.',
          bulletPoints: [
            'Always try the common factor first; missing it costs the method mark later.',
            'x^3 - 4x needs two moves: common factor x, then difference of two squares, giving x(x - 2)(x + 2).',
            'For ax^2 + bx + c with a not 1, use the ac-and-b number pair before grouping.',
            'A prime bracket such as (x + 2) cannot be factorised further; stop there.'
          ],
          keyTakeaway: 'Factorise in the order common factor, two squares, trinomial, grouping, and re-inspect every bracket.',
          realWorldExample: 'A market woman at Makola packs (2x^2 + 6x) oranges; factorising as 2x(x + 3) shows the supervisor that each crate layer holds 2x oranges over (x + 3) rows.'
        },
        {
          title: 'HCF and LCM of Algebraic Expressions',
          content: 'The highest common factor and lowest common multiple of algebraic expressions follow the same law as numbers: factorise everything into irreducible parts first. For monomials, take the numbers by prime factorisation and the letters at the lowest power for the HCF and at the highest power for the LCM: from 6x^2y = 2 . 3 . x^2 . y and 4xy^3 = 2^2 . x . y^3, the HCF is 2xy and the LCM is 12x^2y^3. For polynomials, x^2 + 5x + 6 factorises to (x + 2)(x + 3) while x^2 + x - 6 factorises to (x - 2)(x + 3); the only shared factor is (x + 3), so that is the HCF, and the LCM collects all factors at their highest power, (x + 2)(x + 3)(x - 2), which equals (x + 3)(x^2 - 4) or x^3 + 3x^2 - 4x - 12. The product rule HCF times LCM equals the product of the two expressions holds for these too and can check your work.',
          bulletPoints: [
            'HCF takes COMMON factors at LOWEST powers; LCM takes ALL factors at HIGHEST powers.',
            'Numbers and letters are handled the same way: HCF(6, 4) = 2, LCM(6, 4) = 12.',
            'Check with the product rule: HCF times LCM should equal the product of the originals.',
            'Two polynomials with no shared factor, such as (x + 1) and (x + 2), have HCF 1.'
          ],
          keyTakeaway: 'Never write an HCF or LCM of polynomials until every expression is factorised completely.',
          realWorldExample: 'Two street lights at a circle in Accra flash every 18 s and every 24 s; factorising 18 = 2 . 3^2 and 24 = 2^3 . 3 gives LCM 2^3 . 3^2 = 72 s, the same method used on letters.'
        },
        {
          title: 'Algebraic Fractions: Cancel Factors, Not Terms',
          content: 'An algebraic fraction is simplified exactly the way a numeric fraction is: factorise the numerator and the denominator completely and cancel only what appears as a MULTIPLIER in both. Thus (x^2 - 1)/(x^2 + x) becomes (x - 1)(x + 1) over x(x + 1), and cancelling the common factor (x + 1) leaves (x - 1)/x. The fatal opposite is cancelling single terms: (x + 1)/x is already in its simplest form, yet many candidates erase the x in both parts and write 1, which fails the substitution check x = 2, where (2 + 1)/2 = 1.5 and not 1. When multiplying algebraic fractions, factorise every part first and cross-cancel before multiplying across, keeping denominators nonzero throughout, since a fraction is undefined at any x that empties its denominator.',
          bulletPoints: [
            'Factorise first, then cancel common FACTORS that multiply the whole top and whole bottom.',
            'Cancel nothing that merely appears as an added term in a sum.',
            'State excluded values: (x - 1)/x requires x not equal to 0, and the original also required x not equal to -1.',
            'Test a value after simplifying; the original and reduced fraction must agree.'
          ],
          keyTakeaway: 'In algebraic fractions, factorisation unlocks cancellation; cancelling terms instead of factors is the classic trap.',
          realWorldExample: 'A trotro fare sharing formula GH¢(2x + 4)/x reduced by factorising to 2(x + 2)/x shows each of x passengers how the total cost of GH¢(2x + 4) is split.'
        }
      ],
      commonMistakes: [
        'Expanding (a + b)^2 as a^2 + b^2 drops the middle term 2ab; (x + 5)^2 must be x^2 + 10x + 25.',
        'Writing (2x - 3)^2 as 4x^2 - 6x + 9: the middle term doubles 2 times 3 to give -12x, not -6x.',
        'Leaving x^3 - 4x as x(x^2 - 4) instead of finishing with x(x - 2)(x + 2); incomplete factorisation loses the answer mark even when the method was right.',
        'Cancelling terms in a fraction: reducing (x + 1)/x to 1 erases a term, not a common factor.',
        'Confusing HCF and LCM powers: taking letters at the highest power for the HCF, or multiplying the two expressions and calling it the LCM.'
      ],
      wassceExamTips: [
        'In Paper 1 (objective) the fastest check is substitution: if the question asks which factorisation of 2x^2 + 7x + 3 is correct, put x = 1; the true bracket product returns 12.',
        'In Paper 2 theory, a factorisation question typically awards M1 for the correct first move (taking out the common factor or writing the two-square form) and A1 for the fully factorised result; stop one step early and only the method mark is collected.',
        'For HCF and LCM of polynomials, write the factorised forms of BOTH expressions on separate lines before circling anything; examiners give method marks for that line even if the final choice is wrong.',
        'Carry-through error rule: if your wrong factorisation in part (a) is used correctly in part (b), part (b) usually still earns its method and accuracy marks as a follow-through, so never abandon a question after one slip.',
        'Budget roughly one minute per objective question on expansion and factorisation; questions ending in the words simplify or factorise completely demand the LAST possible factor before you put pen down.'
      ],
      summaryChecklist: [
        'Can I expand the four standard identities without dropping a middle term?',
        'Can I choose the right factorisation route when I see a common factor, two squares, a trinomial or four terms?',
        'Can I find the HCF and LCM of any pair of polynomials by factorising first?',
        'Can I simplify an algebraic fraction by cancelling factors and state the excluded values?',
        'Can I prove any expansion or factorisation correct by multiplying back out or substituting?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-alg-1',
        title: 'Factorising Completely by Two Routes',
        problem: 'Factorise completely: (a) 3x^3 - 12x  (b) (2x - 3)^2 - (x + 1)^2',
        stepByStepSolution: [
          'Step 1 (M1): In part (a) take out the common factor 3x: 3x^3 - 12x = 3x(x^2 - 4).',
          'Step 2 (M1): Recognise x^2 - 4 as a difference of two squares: x^2 - 4 = (x - 2)(x + 2).',
          'Step 3 (A1): Hence 3x^3 - 12x = 3x(x - 2)(x + 2); multiplying back gives 3x(x^2 - 4) = 3x^3 - 12x, confirming the answer.',
          'Step 4 (M1): In part (b) use A^2 - B^2 = (A + B)(A - B) with A = 2x - 3 and B = x + 1.',
          'Step 5 (M1): Compute each bracket: A + B = (2x - 3) + (x + 1) = 3x - 2, and A - B = (2x - 3) - (x + 1) = x - 4.',
          'Step 6 (A1): Therefore (2x - 3)^2 - (x + 1)^2 = (3x - 2)(x - 4), the final answer.'
        ],
        keyTakeaway: 'Two moves finish most hard factorisations: strip the common factor first, then attack the difference of two squares left behind.'
      },
      {
        id: 'ex-shs1-em-alg-2',
        title: 'HCF and LCM of Two Quadratic Polynomials',
        problem: 'Find the HCF and the LCM of x^2 + 5x + 6 and x^2 + x - 6.',
        stepByStepSolution: [
          'Step 1 (M1): Factorise the first polynomial: x^2 + 5x + 6 = (x + 2)(x + 3), since 2 times 3 gives 6 and 2 plus 3 gives 5.',
          'Step 2 (M1): Factorise the second polynomial: x^2 + x - 6 = (x - 2)(x + 3), since -2 times 3 gives -6 and -2 plus 3 gives 1.',
          'Step 3 (M1): The only factor common to both lines is (x + 3), so the HCF is (x + 3).',
          'Step 4 (M1): Collect every factor at its highest power for the LCM: (x + 2)(x + 3)(x - 2).',
          'Step 5 (A1): Final answer: HCF = (x + 3) and LCM = (x + 3)(x^2 - 4) = x^3 + 3x^2 - 4x - 12; the check (x + 3) times (x + 2)(x + 3)(x - 2) equals the product of the two originals confirms it.'
        ],
        keyTakeaway: 'Factorise first, then read the HCF from the shared factors and build the LCM from all factors at top power.'
      }
    ],
    quiz: {
      id: 'quiz-alg',
      topicId: 'shs1-em-t2-algebraic-manipulation',
      title: 'Algebraic Manipulation Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-alg-1',
          quizId: 'quiz-alg',
          questionText: 'Expand and simplify (2a + 3b)^2 - (2a - 3b)^2.',
          optionA: '12ab',
          optionB: '24ab',
          optionC: '0',
          optionD: '48ab',
          correctOption: 'B',
          subConcept: 'Standard Identities',
          explanation: '(2a + 3b)^2 = 4a^2 + 12ab + 9b^2 and (2a - 3b)^2 = 4a^2 - 12ab + 9b^2; subtracting leaves 12ab - (-12ab) = 24ab. Option A comes from cancelling one 12ab instead of doubling it, and option C from believing the squares are equal.',
          remediationTip: 'Use the shortcut (A + B)^2 - (A - B)^2 = 4AB; here 4 times 2a times 3b gives 24ab directly.'
        },
        {
          id: 'q-em-alg-2',
          quizId: 'quiz-alg',
          questionText: 'Factorise completely: 2x^2 + 7x + 3.',
          optionA: '(2x + 1)(x + 3)',
          optionB: '(2x + 3)(x + 1)',
          optionC: '(2x - 1)(x - 3)',
          optionD: '(2x + 3)(x - 1)',
          correctOption: 'A',
          subConcept: 'Trinomials with a Leading Coefficient',
          explanation: '(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3. Option B expands to 2x^2 + 5x + 3, the common slip of assigning the factor pair 2 and 3 to the wrong bracket.',
          remediationTip: 'The two numbers must multiply to ac = 6 and add to b = 7, namely 6 and 1; split as 2x^2 + 6x + x + 3 and group.'
        },
        {
          id: 'q-em-alg-3',
          quizId: 'quiz-alg',
          questionText: 'Find the HCF of x^2 - 4 and x^2 + x - 2.',
          optionA: 'x - 2',
          optionB: 'x - 1',
          optionC: 'x + 2',
          optionD: 'x + 1',
          correctOption: 'C',
          subConcept: 'HCF of Polynomials',
          explanation: 'x^2 - 4 = (x - 2)(x + 2) and x^2 + x - 2 = (x + 2)(x - 1); the shared factor is (x + 2). Option A, x - 2, is the distractor from matching factors by look instead of by value.',
          remediationTip: 'Write both factorisations on separate lines and circle identical brackets before answering.'
        },
        {
          id: 'q-em-alg-4',
          quizId: 'quiz-alg',
          questionText: 'Find the LCM of 6x^2y and 4xy^3.',
          optionA: '12x^3y^4',
          optionB: '24x^2y^3',
          optionC: '2xy',
          optionD: '12x^2y^3',
          correctOption: 'D',
          subConcept: 'LCM of Monomials',
          explanation: 'LCM(6, 4) = 12, then each letter at its highest power: x^2 and y^3, giving 12x^2y^3. Option B uses 24, the plain product of 6 and 4, instead of their lowest common multiple.',
          remediationTip: 'Prime-factorise the numbers: 6 = 2 . 3, 4 = 2^2; the LCM takes 2^2 . 3 = 12, not 24.'
        },
        {
          id: 'q-em-alg-5',
          quizId: 'quiz-alg',
          questionText: 'Simplify the algebraic fraction (x^2 - 1)/(x^2 + x), where x is not 0 and not -1.',
          optionA: '(x + 1)/x',
          optionB: '(x - 1)/(x + 1)',
          optionC: 'x/(x + 1)',
          optionD: '(x - 1)/x',
          correctOption: 'D',
          subConcept: 'Algebraic Fractions',
          explanation: 'Factorising gives (x - 1)(x + 1) over x(x + 1); cancelling the common factor (x + 1) leaves (x - 1)/x. Option B is the trap of cancelling the x in each denominator term as if they were factors.',
          remediationTip: 'Never cancel until BOTH parts are factorised; only whole brackets that match may be removed.'
        }
      ]
    }
  },
  {
    id: 'shs1-em-t2-linear-quadratic-equations',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 2,
    orderIndex: 6,
    title: 'Linear and Quadratic Equations with Word Problems',
    description: 'Solving linear equations with fractional coefficients, solving quadratics by factorisation, completing the square and the formula, the discriminant and nature of roots, forming equations from roots, and WASSCE word problems on age, numbers, geometry and fares.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Linear equations with fractions: multiply EVERY term by the LCM of the denominators to clear them. "(2x - 1)/3 + (x + 2)/4 = 2" times 12 gives "4(2x - 1) + 3(x + 2) = 24", so "11x + 2 = 24" and "x = 2".
  • Check a solution by substituting in the ORIGINAL equation: at x = 2, "(2(2) - 1)/3 + (2 + 2)/4 = 1 + 1 = 2".
  • A quadratic must be written as "ax^2 + bx + c = 0" before any method is used.
  • Factorisation route: "x^2 - 7x + 12 = (x - 3)(x - 4) = 0", roots 3 and 4; the zero-product law says one bracket must be 0.
  • Completing the square: "x^2 + 6x - 2 = 0" becomes "(x + 3)^2 = 11", so "x = -3 + or - sqrt(11)", about 0.317 or -6.32 to 3 s.f.
  • The formula: "x = (-b + or - sqrt(b^2 - 4ac)) / (2a)"; for "2x^2 - 3x - 2 = 0", "x = (3 + or - 5)/4", giving 2 or -1/2.
  • Discriminant "D = b^2 - 4ac": D greater than 0 gives two distinct real roots, D = 0 equal roots, D less than 0 no real roots.
  • Equal roots: "x^2 + 4x + k = 0" has equal roots when "16 - 4k = 0", that is k = 4.
  • Forming a quadratic from roots p and q: "x^2 - (p + q)x + pq = 0"; roots 2 and -5 give "x^2 + 3x - 10 = 0".
  • Word problems: name the unknown, translate sentence by sentence, solve, then reject any root that the STORY forbids.
  • Geometry example: a plot 5 m longer than wide with area 84 m^2: "w(w + 5) = 84" gives w = 7 and rejects w = -12.
  • Age example: father three times the son; in 10 years their ages total 60: "s + 3s + 20 = 60", son is 10.
  • Fare example: a trotro fare deal of GH¢(2x + 25) shared by x passengers at GH¢7 each gives "2x + 25 = 7x", so 5 passengers.
  • Rejecting a root must carry a REASON in Paper 2, e.g. a length or age cannot be negative.`,
    detailedNotes: {
      overview: 'Equations are the backbone of WASSCE Elective Mathematics, and Paper 1 is thick with items that reduce to one of these two shapes. This topic moves from linear equations whose coefficients are fractions, through the three solution routes for a quadratic and the discriminant that predicts the roots before you compute them, to the word problems on age, numbers, geometry and transport fares that examiners love for Section B theory marks.',
      introduction: 'Treat solving as an accountancy task: whatever you do to one side of the scale you do to the other, and every final value is checked by paying it back into the original equation. For quadratics, learn to decide the method on sight: neat factorisation first, formula when factorisation fails, completing the square when the question demands the vertex form.',
      realWorldContext: 'A trotro driver on the Accra to Nsawam road agrees a group deal: the total collection is GH¢(2x + 25) while each passenger pays GH¢7; equating gives 2x + 25 = 7x, so x = 5 passengers. A farmer at Ejisu fences a rectangular yam plot whose length exceeds its width by 5 m and whose area is 84 m^2; solving w(w + 5) = 84 recovers the 7 m by 12 m plot he actually fenced.',
      objectives: [
        'Solve linear equations involving algebraic fractions by clearing denominators correctly',
        'Solve quadratic equations by factorisation, completing the square and the formula',
        'Use the discriminant to state the nature of the roots without fully solving',
        'Form a quadratic equation when its roots are given and verify by solving back',
        'Translate age, number, geometry and fare word problems into equations and reject inadmissible roots with reasons'
      ],
      sections: [
        {
          title: 'Linear Equations with Fractional Coefficients',
          content: 'Fractions make a linear equation look harder than it is; the first move is always to clear denominators by multiplying every term by the LCM of the denominators. For (2x - 1)/3 + (x + 2)/4 = 2 the LCM is 12, and every term is multiplied: 4(2x - 1) + 3(x + 2) = 24. The most common error is forgetting to multiply the plain number on the right, writing 2 instead of 24. Expanding gives 8x - 4 + 3x + 6 = 24, so 11x + 2 = 24 and x = 2. Substituting x = 2 into the original recovers 3/3 + 4/4 = 2, confirming the answer. When a fraction sits over a whole expression, such as (x + 1)/2 - (x - 1)/3 = 1, treat each numerator as bracketed before expanding: 3(x + 1) - 2(x - 1) = 6 gives x + 5 = 6, hence x = 1.',
          bulletPoints: [
            'Multiply EVERY term, including constants, by the LCM of the denominators.',
            'Bracket numerators before removing denominators; a minus sign spreads through the whole numerator.',
            'Check by substituting into the original equation, not the cleared one.',
            'If x appears in a denominator, note excluded values before solving.'
          ],
          keyTakeaway: 'Clear the fractions first and every linear equation becomes a two-step exercise.',
          realWorldExample: 'A shared taxi costs a passenger GH¢(t/2) for the first stage and GH¢(t/4) for the second stage, GH¢12 in total: multiplying every term by 4 gives 2t + t = 48, so 3t = 48, t = 16, and the two stages cost GH¢8 and GH¢4.'
        },
        {
          title: 'Three Routes to the Roots of a Quadratic',
          content: 'Route one is factorisation with the zero-product law: x^2 - 7x + 12 = (x - 3)(x - 4), so x = 3 or x = 4. Route two is completing the square: x^2 + 6x - 2 = 0 moves the constant out, x^2 + 6x = 2, then half the x-coefficient, 3, is squared and added to both sides: (x + 3)^2 = 11, hence x = -3 + or - sqrt(11), approximately 0.317 or -6.32 to 3 significant figures. Route three is the formula x = (-b + or - sqrt(b^2 - 4ac))/(2a), which works on every quadratic; on 2x^2 - 3x - 2 = 0 it gives x = (3 + or - sqrt(9 + 16))/4 = (3 + or - 5)/4, so x = 2 or x = -1/2. Factorisation is fastest when the numbers cooperate, but the formula is the reliable fallback and the only route when the roots are irrational.',
          bulletPoints: [
            'Write the equation as ax^2 + bx + c = 0 with a positive before choosing a method.',
            'Completing the square uses (b/2)^2 added to BOTH sides.',
            'In the formula, -b with b = -3 is +3, and b^2 - 4ac with c negative becomes a plus: 9 + 16 = 25.',
            'Two roots must be reported; a quadratic answer with only one value is usually incomplete.'
          ],
          keyTakeaway: 'Factorise if you can, use the formula if you cannot, and complete the square when the question orders it.',
          realWorldExample: 'A ball thrown upward near Kumasi has height h = 12t - 2t^2 metres after t seconds; setting h = 10 gives t^2 - 6t + 5 = 0, roots t = 1 and t = 5, the two instants it passes 10 m.'
        },
        {
          title: 'The Discriminant and Nature of Roots',
          content: 'The quantity D = b^2 - 4ac under the root sign decides the shape of the solution before any root is computed. When D is positive the square root is a real number and two distinct roots come out; when D = 0 the plus or minus adds nothing and the roots are equal (one repeated root); when D is negative there is no real square root, so the equation has no real roots. For x^2 + 4x + k = 0, equal roots require 16 - 4k = 0, hence k = 4. The same D reads the graph: D greater than 0 means the parabola cuts the x-axis twice, D = 0 means it touches, D less than 0 means it never reaches. Examiners ask this as a standalone objective item almost every year.',
          bulletPoints: [
            'D greater than 0: two distinct real roots; D = 0: two equal real roots; D less than 0: no real roots.',
            'For 3x^2 - 2x + 4 = 0, D = 4 - 48 = -44, so there are no real roots.',
            'Find unknown constants by SETTING D equal to 0, not by guessing.',
            'The discriminant also tests whether a line meets a curve after substitution.'
          ],
          keyTakeaway: 'Compute b^2 - 4ac first: it tells you how many answers exist and what kind.',
          realWorldExample: 'A designer in Achimota plans a rectangular banner of area 20 m^2 with perimeter fixed by x^2 - 9x + 20 = 0; D = 81 - 80 = 1 shows two distinct side-length designs, 4 by 5 and 5 by 4.'
        },
        {
          title: 'Forming Equations and Solving Word Problems',
          content: 'Given roots p and q, the quadratic is x^2 - (p + q)x + pq = 0, because expanding (x - p)(x - q) produces exactly those coefficients; roots 2 and -5 give x^2 - (-3)x + (-10), that is x^2 + 3x - 10 = 0. For word problems the discipline is translation: name the unknown with a sentence, write each fact as algebra, solve, then interpret. Age: a father is three times as old as his son, and in 10 years their ages total 60, so (s + 10) + (3s + 10) = 60 gives 4s = 40, son 10 years old. Geometry: the Ejisu plot w(w + 5) = 84 yields w = 7 after rejecting -12 because a length cannot be negative. Fare: a group deal of GH¢(2x + 25) at GH¢7 per head gives 2x + 25 = 7x, so x = 5 passengers.',
          bulletPoints: [
            'Sum of roots appears with a MINUS sign: x^2 - (sum)x + product = 0.',
            'Reject negative lengths, ages and counts with a written reason for the mark.',
            'In age problems shift BOTH people by the same number of years.',
            'Check word-problem answers against the story, not only the equation.'
          ],
          keyTakeaway: 'Form quadratics from the rule x^2 - (sum of roots)x + (product of roots) = 0, and let the story veto impossible roots.',
          realWorldExample: 'Two consecutive even integers have product 48: n(n + 2) = 48 gives n = 6 after rejecting -8, so the integers are 6 and 8, exactly the check the story demands.'
        }
      ],
      commonMistakes: [
        'Clearing fractions wrongly: multiplying only the fraction terms and leaving the constant, so 4(2x - 1) + 3(x + 2) = 2 instead of = 24.',
        'Applying the zero-product law to a sum: from x^2 - 7x + 12 = 0 writing x = -3 or x = -4, forgetting the signs come from (x - 3)(x - 4).',
        'Completing the square with (b/2)^2 added to only one side: x^2 + 6x = 2 must become (x + 3)^2 = 11, not (x + 3)^2 = 2.',
        'Substituting b = -3 into the formula as +3 in the numerator sign slot, giving roots of 2x^2 - 3x - 2 = 0 as -2 and 1/2 instead of 2 and -1/2.',
        'Reporting only one root of a quadratic, or keeping a negative length or age as an answer to a word problem without rejecting it.'
      ],
      wassceExamTips: [
        'Paper 1 fare and age items are usually solvable in under a minute once you clear the fractions; if your working shows fractions all the way to the end, you delayed the clearing step.',
        'In Paper 2, a quadratic question typically pays M1 for a correct method line (factorisation, formula substitution with a, b, c named, or the completed-square form) and A1 for both roots stated; one root only can halve the score.',
        'When asked for the nature of roots, quote D = b^2 - 4ac with its numeric value before concluding; the value itself earns the method mark even if the wording after it is thin.',
        'A rejected root needs its reason on paper: write a short phrase such as length cannot be negative; examiners award a merit mark for that justification in theory questions.',
        'Carry-through is forgiving here: an early sign slip that is handled consistently into the formula still attracts method marks, so leave your complete line rather than erasing and panicking.'
      ],
      summaryChecklist: [
        'Can I clear denominators from a linear equation without forgetting any term?',
        'Can I choose and execute factorisation, completing the square and the formula on any quadratic?',
        'Can I state the nature of the roots from b^2 - 4ac without solving?',
        'Can I form a quadratic equation when two roots are given?',
        'Can I solve an age, number, geometry or fare problem and reject the inadmissible root with a reason?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-lq-1',
        title: 'A Linear Equation with Fractional Coefficients',
        problem: 'Solve the equation (2x - 1)/3 + (x + 2)/4 = 2.',
        stepByStepSolution: [
          'Step 1 (M1): Identify the denominators 3 and 4; their LCM is 12, so multiply every term by 12.',
          'Step 2 (M1): Clearing gives 4(2x - 1) + 3(x + 2) = 24, remembering to multiply the right-hand side as well.',
          'Step 3 (M1): Expand: 8x - 4 + 3x + 6 = 24, hence 11x + 2 = 24.',
          'Step 4 (M1): Subtract 2 and divide by 11: 11x = 22, so x = 2.',
          'Step 5 (A1): Check in the original: (2(2) - 1)/3 + (2 + 2)/4 = 3/3 + 4/4 = 1 + 1 = 2, which matches.',
          'Step 6 (A1): Final answer: x = 2.'
        ],
        keyTakeaway: 'Multiply every term by the LCM of the denominators first, then the equation is an ordinary two-step linear one.'
      },
      {
        id: 'ex-shs1-em-lq-2',
        title: 'A Rectangular Plot Word Problem',
        problem: 'The length of a rectangular yam plot at Ejisu is 5 m more than its width. If the area is 84 m^2, find the dimensions of the plot.',
        stepByStepSolution: [
          'Step 1 (M1): Let the width be w metres; then the length is (w + 5) metres and the area equation is w(w + 5) = 84.',
          'Step 2 (M1): Expand and rearrange to standard form: w^2 + 5w - 84 = 0.',
          'Step 3 (M1): Factorise using two numbers multiplying to -84 and adding to 5, namely 12 and -7: (w + 12)(w - 7) = 0.',
          'Step 4 (M1): Solve each bracket: w = -12 or w = 7.',
          'Step 5 (M1): Reject w = -12 because a length cannot be negative; hence w = 7 and the length is 7 + 5 = 12.',
          'Step 6 (A1): Final answer: the plot is 7 m wide and 12 m long; check: 7 times 12 = 84 m^2.'
        ],
        keyTakeaway: 'Geometry word problems become quadratics the moment width and length are linked; reject the negative root with a stated reason.'
      }
    ],
    quiz: {
      id: 'quiz-lq',
      topicId: 'shs1-em-t2-linear-quadratic-equations',
      title: 'Linear and Quadratic Equations Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-lq-1',
          quizId: 'quiz-lq',
          questionText: 'Solve for x: (x - 2)/4 = (x + 1)/6.',
          optionA: '-4',
          optionB: '8',
          optionC: '2',
          optionD: '5',
          correctOption: 'B',
          subConcept: 'Linear Equations with Fractions',
          explanation: 'Cross-multiplying (or multiplying by LCM 12) gives 6(x - 2) = 4(x + 1), so 6x - 12 = 4x + 4, hence 2x = 16 and x = 8. Check: 6/4 = 1.5 = 9/6. Option A, -4, comes from the sign slip 2x = 4 - 12 when -12 is carried wrongly.',
          remediationTip: 'When moving -12 across the equals sign it becomes +12: 6x - 4x = 4 + 12, giving 2x = 16.'
        },
        {
          id: 'q-em-lq-2',
          quizId: 'quiz-lq',
          questionText: 'Which of the following are the roots of x^2 - 7x + 12 = 0?',
          optionA: '-3 and -4',
          optionB: '2 and 6',
          optionC: '3 and 4',
          optionD: '1 and 12',
          correctOption: 'C',
          subConcept: 'Quadratic by Factorisation',
          explanation: 'x^2 - 7x + 12 = (x - 3)(x - 4), so x = 3 or x = 4: the product is 12 and the SUM is 7, matching -(-7). Option B, 2 and 6, multiplies to 12 but adds to 8, the classic factor-pair slip.',
          remediationTip: 'Test each pair against both conditions: multiply to c and add to -b, before shading.'
        },
        {
          id: 'q-em-lq-3',
          quizId: 'quiz-lq',
          questionText: 'Find the value of k for which x^2 + 4x + k = 0 has equal roots.',
          optionA: '2',
          optionB: '-4',
          optionC: '8',
          optionD: '4',
          correctOption: 'D',
          subConcept: 'Discriminant',
          explanation: 'Equal roots need b^2 - 4ac = 0: 16 - 4k = 0, so k = 4. Option A, 2, comes from solving 16 - 8k = 0 after doubling 4 twice; option B ignores the sign of the middle term.',
          remediationTip: 'Write a, b, c down first (a = 1, b = 4, c = k), then compute b^2 - 4ac mechanically.'
        },
        {
          id: 'q-em-lq-4',
          quizId: 'quiz-lq',
          questionText: 'Expressing x^2 - 6x + 5 = 0 in the form (x - p)^2 = q, where p and q are constants, gives which equation?',
          optionA: '(x - 3)^2 = 4',
          optionB: '(x + 3)^2 = 4',
          optionC: '(x - 3)^2 = 14',
          optionD: '(x - 6)^2 = 31',
          correctOption: 'A',
          subConcept: 'Completing the Square',
          explanation: 'Half of -6 is -3, and (x - 3)^2 = x^2 - 6x + 9, so x^2 - 6x + 5 = 0 becomes (x - 3)^2 - 9 + 5 = 0, i.e. (x - 3)^2 = 4. Option C adds 9 + 5 = 14 instead of moving the constant with the correct sign.',
          remediationTip: 'Always finish with (x - p)^2 = p^2 - c form: here 9 - 5 = 4, and expand back to verify.'
        },
        {
          id: 'q-em-lq-5',
          quizId: 'quiz-lq',
          questionText: 'A father is three times as old as his son. In 10 years the sum of their ages will be 60 years. How old is the son now?',
          optionA: '15',
          optionB: '8',
          optionC: '10',
          optionD: '12',
          correctOption: 'C',
          subConcept: 'Age Word Problem',
          explanation: 'With son s and father 3s, in 10 years: (s + 10) + (3s + 10) = 60, so 4s + 20 = 60 and s = 10. Check: ages 10 and 30 become 20 and 40, summing to 60. Option A, 15, drops the two +10 shifts and solves 4s = 60.',
          remediationTip: 'Advance BOTH people by the stated years before summing; the +20 belongs on the left.'
        }
      ]
    }
  },
  {
    id: 'shs1-em-t2-simultaneous-equations',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 2,
    orderIndex: 7,
    title: 'Simultaneous Equations: Linear and Non-Linear Pairs',
    description: 'Elimination and substitution for two unknowns, reducing three-unknown systems to two, pairing a linear with a quadratic as line and curve, graphical meaning of the solutions, and detecting no-solution or infinite-solution pairs.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Two linear equations: pick elimination when one variable already matches. "Solve 2x + y = 4 and x - y = 5: adding gives 3x = 9, x = 3, then y = -2".
  • Substitution is compulsory when one equation is non-linear: from "y = x + 1" and "x^2 + y^2 = 13", get "x^2 + (x + 1)^2 = 13".
  • The line-circle work expands to "2x^2 + 2x - 12 = 0", divides to "x^2 + x - 6 = 0", factorises to "(x + 3)(x - 2) = 0", meeting points (2, 3) and (-3, -2).
  • Three unknowns: eliminate the SAME letter twice to get two equations in two unknowns. "x + y + z = 12, x - y + z = 6, x + y = 8 give y = 3, x = 5, z = 4".
  • Subtracting the first two of that triple immediately kills x and z: "2y = 6".
  • Graphically, a solution is where the lines MEET; equal gradients with different intercepts means parallel lines and NO solution.
  • "x + y = 3 with 2x + 2y = 5" has no solution (same ratio of x and y coefficients, different constant ratio).
  • "x + y = 3 with 2x + 2y = 6" has infinitely many solutions (one equation is a multiple of the other).
  • Ratio test: a1/a2 = b1/b2 but not equal to c1/c2 means none; all three ratios equal means infinite; otherwise a unique pair exists.
  • A line and a circle meet at two points, one point (tangent) or none; the discriminant of the substituted quadratic decides which.
  • Prices problem: "3 notebooks and 2 pens cost GH¢16; 1 notebook and 4 pens cost GH¢12; solving gives notebook GH¢4, pen GH¢2".
  • Always substitute your values back into BOTH original equations before leaving the answer.
  • Watch signs when subtracting equations: subtracting "(2x - y)" from "(3x + 2y)" gives "x + 3y", not "x + y".`,
    detailedNotes: {
      overview: 'Simultaneous equations ask when two statements about the same unknowns are true at once. At WASSCE standard this covers the elimination and substitution techniques for two linear equations, a deliberate first sight of three unknowns, and the non-linear pair where a line meets a circle, whose solutions are read as intersection points. Part A papers test the special no-solution and infinite-solution pairs, which need only one comparison of coefficients.',
      introduction: 'Choose the method the way a fitter chooses a tool: elimination when coefficients of one unknown already match or are easy to equalise, substitution whenever the other equation is not linear. For three unknowns the whole game is to eliminate one letter twice and fall back onto the two-unknown system you already command.',
      realWorldContext: 'At a school shop in Achimota, three notebooks and two pens cost GH¢16 while one notebook and four pens cost GH¢12; solving the pair gives GH¢4 a notebook and GH¢2 a pen, the exact elimination pattern WAEC dresses up as a shopping trip. Two trotro conductors at Kaneshie count one-two-seater fares the same way, and the no-solution case appears when a signboard doubles a price list but not the total: x + y = 3 against 2x + 2y = 5 can never both be true.',
      objectives: [
        'Solve two linear equations in two unknowns by elimination and by substitution',
        'Solve a pair where one equation is linear and the other quadratic, interpreting the answers as intersection points',
        'Reduce three linear equations in three unknowns to a two-unknown system and solve it',
        'Detect inconsistent and dependent pairs (no solution, infinitely many solutions) from coefficient ratios',
        'Verify any solution set by substitution into every original equation'
      ],
      sections: [
        {
          title: 'Elimination for Two Linear Equations',
          content: 'Elimination works because adding or subtracting two true equations produces another true equation. Given 2x + y = 4 and x - y = 5, the coefficients of y are +1 and -1, so adding collapses them: 3x = 9, hence x = 3, and substituting into the second equation gives 3 - y = 5, so y = -2. When coefficients do not match, multiply one or both equations first: to solve 2x + 3y = 7 together with 4x - y = 7, treble the second equation to 12x - 3y = 21, add it to the first so the y terms cancel, giving 14x = 28, hence x = 2 and then y = 1. The signature error is the sign handling when SUBTRACTING equations: subtracting (2x - y) from (3x + 2y) yields x + 3y because the minus spreads through the whole bracket.',
          bulletPoints: [
            'Adding suits opposite coefficients; subtracting suits equal coefficients.',
            'Multiply whole equations, including the right-hand side, before aligning coefficients.',
            'After finding one unknown, substitute into the SIMPLER original equation for the second.',
            'Check both originals: 2(3) + (-2) = 4 and 3 - (-2) = 5 both hold.'
          ],
          keyTakeaway: 'Make one coefficient pair identical (up to sign), then add or subtract to remove that unknown.',
          realWorldExample: 'A form-two student at Tamale buys 2 oranges and 1 mango for GH¢8, and finds an orange costs GH¢1 more than a mango; 2x + y = 8 with x - y = 1 solves to orange GH¢3 and mango GH¢2, the same elimination pattern as 2x + y = 4 and x - y = 5.'
        },
        {
          title: 'One Linear and One Quadratic: Substitution',
          content: 'When one equation is non-linear, elimination can no longer preserve the quadratic terms, so substitution carries the linear equation into the curve. Take y = x + 1 and x^2 + y^2 = 13 (a circle centred at the origin with radius sqrt(13) approximately 3.61): replacing y gives x^2 + (x + 1)^2 = 13, expand to 2x^2 + 2x + 1 = 13, then 2x^2 + 2x - 12 = 0, divide by 2 to get x^2 + x - 6 = 0, factorise as (x + 3)(x - 2) = 0, so x = 2 with y = 3, or x = -3 with y = -2. Both pairs satisfy the circle: 4 + 9 = 13 and 9 + 4 = 13. The two solutions are the intersection points of line and circle; the number of intersections is forecast by the discriminant of the substituted quadratic.',
          bulletPoints: [
            'Substitute the LINEAR expression into the non-linear equation, never the reverse.',
            'Expand (x + 1)^2 fully to x^2 + 2x + 1 before collecting terms.',
            'Divide out common numerical factors before factorising the quadratic.',
            'Report solutions as paired (x, y) values: (2, 3) and (-3, -2).'
          ],
          keyTakeaway: 'A line with a curve always goes by substitution and ends in a quadratic whose roots are the meeting points.',
          realWorldExample: 'A drone flying the path y = x + 1 over a circular fenced field x^2 + y^2 = 13 around a Kumasi school compound crosses the fence line at exactly the two points (2, 3) and (-3, -2).'
        },
        {
          title: 'Three Unknowns Reduced to Two',
          content: 'For x + y + z = 12, x - y + z = 6 and x + y = 8, the strategy is to eliminate ONE letter twice. Subtracting the second equation from the first removes x and z at once: (x + y + z) - (x - y + z) = 12 - 6 gives 2y = 6, so y = 3. Substituting y = 3 into x + y = 8 gives x = 5, and into the first gives 5 + 3 + z = 12, so z = 4. Verification: 5 - 3 + 4 = 6 matches the second equation, and all three originals hold. If a system is not so cooperative, choose the letter missing from one equation and eliminate it from the other two, creating a familiar pair.',
          bulletPoints: [
            'Eliminate the same letter from two different PAIRS, not random letters.',
            'A letter already absent from one equation is your best first target.',
            'Solve the resulting two-unknown system by any method, then back-substitute for the third.',
            'Check all three originals; two matching does not guarantee the third.'
          ],
          keyTakeaway: 'Three unknowns is just two unknowns wearing an extra hat: remove one letter twice and proceed.',
          realWorldExample: 'A district assembly in Ho budgets three projects costing x, y and z with totals GH¢12, GH¢6 and GH¢8 million in the combination above, recovering project costs GH¢5m, GH¢3m and GH¢4m.'
        },
        {
          title: 'Reading the Pair Graphically: None, One or Infinitely Many',
          content: 'Each linear equation in x and y is a straight line, so the solution set is the intersection. Distinct gradients give exactly one meeting point and a unique solution. Equal gradients with different intercepts mean parallel lines that never meet, so the system has no solution: x + y = 3 and 2x + 2y = 5 have coefficient ratios 1/2 = 1/2 but constant ratio 3/5, and 3/5 differs, flagging inconsistency. Equal ratios across coefficients AND constant mean the lines coincide, giving infinitely many solutions: x + y = 3 with 2x + 2y = 6 is one line written twice. The compact test is a1/a2, b1/b2, c1/c2: none equal means unique, first two equal but not the third means none, all three equal means infinite.',
          bulletPoints: [
            'No solution: a1/a2 = b1/b2 but not equal to c1/c2 (parallel distinct lines).',
            'Infinitely many solutions: a1/a2 = b1/b2 = c1/c2 (coincident lines).',
            'Unique solution: a1/a2 not equal to b1/b2 (lines of different gradient).',
            'A line and circle use the discriminant instead: positive two points, zero tangent, none no intersection.'
          ],
          keyTakeaway: 'Compare the three ratios a1/a2, b1/b2, c1/c2 and the pair announces its own number of solutions.',
          realWorldExample: 'Two roadwork notices near Cape Coast state that crews cover x + y = 3 km and 2x + 2y = 5 km the same day; doubling the first notice gives 2x + 2y = 6, contradicting 5, so the pair is the no-solution case dressed as a word problem.'
        }
      ],
      commonMistakes: [
        'Subtracting equations term by term with the wrong distributed sign: (3x + 2y) - (2x - y) is x + 3y, but students write x + y and lose both marks downstream.',
        'Eliminating from a linear-quadratic pair instead of substituting, mixing up the x^2 terms and abandoning the question.',
        'Solving the substituted quadratic and reporting x = 2 or x = -3 only, without computing the matching y values from the linear equation.',
        'For a pair like x + y = 3 and 2x + 2y = 6 writing no solution: the equations are the same LINE, so there are infinitely many solutions, not none.',
        'In three-unknown systems eliminating DIFFERENT letters in the two steps, producing a jumbled pair that no longer has two unknowns in common.'
      ],
      wassceExamTips: [
        'Paper 1 often asks the number of solutions of a pair; compare the three ratios a1/a2, b1/b2, c1/c2 and answer in under 30 seconds without solving anything.',
        'In Paper 2 a linear-quadratic pair typically pays M1 for a correct substitution line, M1 for the resulting quadratic in one unknown, A1 for each matching (x, y) pair; leaving y values out halves the score.',
        'Show the doubling or tripling of a whole equation on its own line before adding; examiners award the method mark for that prepared line even if the final arithmetic slips.',
        'Carry-through (afr) treatment: if your first unknown is wrong but consistently used, later parts earn follow-through method marks, so write every substitution clearly rather than silently.',
        'Finish verification in 40 seconds by paying your values into BOTH originals; a failing check tells you to fix a sign before the bell instead of shipping a wrong pair.'
      ],
      summaryChecklist: [
        'Can I solve two linear equations by choosing elimination or substitution wisely?',
        'Can I pair a line with a circle and report both intersection points as (x, y)?',
        'Can I reduce three equations in three unknowns to two and solve completely?',
        'Can I classify a pair as unique, no solution or infinite solutions using coefficient ratios?',
        'Can I verify any simultaneous solution by substituting into every original equation?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-sim-1',
        title: 'Two Linear Equations by Elimination',
        problem: 'Solve the simultaneous equations 2x + y = 4 and x - y = 5.',
        stepByStepSolution: [
          'Step 1 (M1): The y-coefficients are +1 and -1, which are opposites, so ADD the two equations to eliminate y.',
          'Step 2 (M1): Adding gives (2x + y) + (x - y) = 4 + 5, that is 3x = 9, so x = 3.',
          'Step 3 (M1): Substitute x = 3 into the simpler equation x - y = 5: 3 - y = 5, hence y = -2.',
          'Step 4 (M1): Check in the first equation: 2(3) + (-2) = 6 - 2 = 4, which matches.',
          'Step 5 (A1): Final answer: x = 3 and y = -2.'
        ],
        keyTakeaway: 'Add equations whose opposite coefficients cancel one unknown, then back-substitute into the simpler line.'
      },
      {
        id: 'ex-shs1-em-sim-2',
        title: 'A Line Meeting a Circle',
        problem: 'The line y = x + 1 meets the circle x^2 + y^2 = 13 at two points. Find the coordinates of the points of intersection.',
        stepByStepSolution: [
          'Step 1 (M1): Substitute the linear expression y = x + 1 into the circle: x^2 + (x + 1)^2 = 13.',
          'Step 2 (M1): Expand fully: x^2 + x^2 + 2x + 1 = 13, hence 2x^2 + 2x - 12 = 0.',
          'Step 3 (M1): Divide every term by 2: x^2 + x - 6 = 0.',
          'Step 4 (M1): Factorise: (x + 3)(x - 2) = 0, so x = -3 or x = 2.',
          'Step 5 (M1): Recover y from the line: at x = 2, y = 3; at x = -3, y = -2.',
          'Step 6 (A1): Final answer: the intersection points are (2, 3) and (-3, -2); check: 2^2 + 3^2 = 13 and (-3)^2 + (-2)^2 = 13.'
        ],
        keyTakeaway: 'Substitute the line into the curve, solve the resulting quadratic, and pay each x back into the line for its y.'
      }
    ],
    quiz: {
      id: 'quiz-sim',
      topicId: 'shs1-em-t2-simultaneous-equations',
      title: 'Simultaneous Equations Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-sim-1',
          quizId: 'quiz-sim',
          questionText: 'Solve the simultaneous equations x - y = 5 and x + 2y = -4.',
          optionA: 'x = -2, y = 3',
          optionB: 'x = 2, y = -3',
          optionC: 'x = 5, y = 0',
          optionD: 'x = 3, y = -2',
          correctOption: 'B',
          subConcept: 'Elimination',
          explanation: 'Subtracting the first from the second gives 3y = -9, so y = -3, then x - (-3) = 5 gives x = 2. Check: 2 + 2(-3) = -4. Option C is the slip of assuming y = 0 because 5 appears in the first equation.',
          remediationTip: 'Subtracting (x - y) from (x + 2y): the x terms cancel and -y becomes +y, leaving 3y; write the sign spread on one line.'
        },
        {
          id: 'q-em-sim-2',
          quizId: 'quiz-sim',
          questionText: 'The line y = x + 2 meets the circle x^2 + y^2 = 10 at two points. What are the x-coordinates of the points of intersection?',
          optionA: '-2 and 5',
          optionB: '3 and -1',
          optionC: '-1 and 3',
          optionD: '1 and -3',
          correctOption: 'D',
          subConcept: 'Line and Circle',
          explanation: 'Substituting: x^2 + (x + 2)^2 = 10 gives 2x^2 + 4x - 6 = 0, divide by 2: x^2 + 2x - 3 = 0, factorise (x + 3)(x - 1) = 0, so x = 1 or x = -3. Option B lists the y-values 3 and -1 instead of the x-values requested.',
          remediationTip: 'After factoring, label which root belongs to x and compute y separately; the question names the coordinate it wants.'
        },
        {
          id: 'q-em-sim-3',
          quizId: 'quiz-sim',
          questionText: 'Which of the following pairs of equations has NO solution?',
          optionA: 'x + y = 3 and 2x + 2y = 6',
          optionB: 'x - y = 3 and x + y = 5',
          optionC: 'x + y = 3 and 2x + 2y = 5',
          optionD: 'x + 2y = 4 and 2x + y = 7',
          correctOption: 'C',
          subConcept: 'Inconsistent Pairs',
          explanation: 'In C the left side of 2x + 2y = 5 is twice the left side of x + y = 3, so doubling gives 2x + 2y = 6, contradicting 5; the parallel lines never meet. Option A is the trap: there 2x + 2y = 6 IS double x + y = 3, so it has infinitely many solutions, not none.',
          remediationTip: 'Compare ratios: a1/a2 = b1/b2 with c1/c2 different means no solution; all three equal means infinite solutions.'
        },
        {
          id: 'q-em-sim-4',
          quizId: 'quiz-sim',
          questionText: 'Given x + y + z = 12, x - y + z = 6 and x + y = 8, find the value of y.',
          optionA: '6',
          optionB: '3',
          optionC: '4',
          optionD: '5',
          correctOption: 'B',
          subConcept: 'Three Unknowns',
          explanation: 'Subtracting the second equation from the first removes x and z at once: 2y = 6, so y = 3. Then x = 5 and z = 4, and options C and D are precisely those other unknowns planted as traps.',
          remediationTip: 'Eliminate the letter that appears in only two equations first; here z and x both cancel between equations one and two.'
        },
        {
          id: 'q-em-sim-5',
          quizId: 'quiz-sim',
          questionText: 'Three notebooks and two pens cost GH¢16; one notebook and four pens cost GH¢12. Find the cost of one pen.',
          optionA: 'GH¢2',
          optionB: 'GH¢4',
          optionC: 'GH¢3',
          optionD: 'GH¢1',
          correctOption: 'A',
          subConcept: 'Pricing Word Problem',
          explanation: 'With notebook n and pen p: 3n + 2p = 16 and n + 4p = 12. From the second, n = 12 - 4p; substituting: 36 - 12p + 2p = 16, so -10p = -20 and p = 2, with n = 4. Option B is the notebook price offered to catch candidates who stop at the wrong unknown.',
          remediationTip: 'Underline which item the question asks for before solving, and answer that one.'
        }
      ]
    }
  },
  {
    id: 'shs1-em-t2-inequalities',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 2,
    orderIndex: 8,
    title: 'Linear and Quadratic Inequalities',
    description: 'The laws of inequality, the sign-reversal rule when multiplying or dividing by a negative, number-line and interval notation, quadratic inequalities by sign charts, integer solutions in a range, and simultaneous inequalities.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Inequalities behave like equations except ONE law: multiplying or dividing by a NEGATIVE reverses the sign. "Solve 5 - 2x > 11: -2x > 6, so x < -3".
  • Open circle on the number line for strict signs < and >; a filled (solid) dot for <= and >=.
  • "x <= 4" includes 4; "x < 4" excludes 4; the integer solutions of x <= 4 up to 4 count 4 itself.
  • Double inequality: "-2 < 2x < 6 means -1 < x < 3", dividing all three parts by 2.
  • Quadratic inequality recipe: move everything to one side, factorise, find boundary roots, test the regions. "x^2 - x - 6 < 0 becomes (x - 3)(x + 2) < 0, so -2 < x < 3".
  • For "x^2 - 5x + 6 > 0", (x - 2)(x - 3) > 0 gives the OUTSIDE regions x < 2 or x > 3.
  • For "x^2 > 16", never write x > 4 only: the answer is "x < -4 or x > 4" because (-5)^2 = 25 also works.
  • Sign chart rows: test one value per region; (x - 3)(x + 2) is negative between its roots 3 and -2 and positive outside.
  • Integer solutions: "3 < x <= 5 holds exactly the integers 4 and 5", two values.
  • Simultaneous inequalities: solve each, then take the OVERLAP. "2x - 1 > 5 gives x > 3; x - 3 <= 2 gives x <= 5; combined: 3 < x <= 5".
  • Comparison law: "if a > b and c < 0, then ac < bc"; adding the same number never reverses anything, so a + c > b + c stays true.
  • Never divide both sides by x (or an expression containing x) unless its sign is known.
  • Verify a boundary by feeding it into the related equation: x = -3 makes 5 - 2x exactly 11, so it is excluded by the strict sign.`,
    detailedNotes: {
      overview: 'Inequalities describe ranges instead of single values, and WASSCE harvests easy marks from students who treat the sign like an equals sign. This topic secures the one dramatic exception, reversal when multiplying or dividing by a negative, then extends to quadratic inequalities solved by boundary roots and sign charts, to integer counting inside ranges, and to simultaneous inequalities whose answer is the overlap of two sets.',
      introduction: 'Think of an inequality as a rule for a crowd of numbers rather than one number. Your job is to describe the crowd exactly: where it starts, where it stops, and whether the endpoints belong. The boundary-first habit, feed the boundary into the equation version and then test a point in each region, makes every reversal trap impossible.',
      realWorldContext: 'A speed-limit sign on the Tema-Motorway requires a driver to keep at least 60 km/h and at most 100 km/h, the double inequality 60 <= v <= 100. A hawker in the Osu-Oxford street market in Accra plans to make between GH¢20 and GH¢35 profit on a day of sales, so her price p per basket must solve a pair of inequalities such as 4p - 100 >= 20 and 4p - 100 <= 35, giving 30 <= p <= 33.75; the reversal rule enters the moment she works with a cost that SHRINKS her profit.',
      objectives: [
        'Apply the reversal law correctly when multiplying or dividing an inequality by a negative number',
        'Represent linear inequality solutions on a number line and in interval notation with correct endpoint inclusion',
        'Solve quadratic inequalities by factorising, locating boundary roots and reading a sign chart',
        'Count and list integer solutions satisfying one inequality or a simultaneous pair within a range',
        'Combine two inequalities by overlap and state the complete solution set'
      ],
      sections: [
        {
          title: 'The Laws of Inequality and the Reversal Trap',
          content: 'Adding or subtracting the same quantity on both sides never disturbs the direction of an inequality, and multiplying both sides by a POSITIVE number never reverses it either. The single danger is a negative multiplier: from 5 - 2x > 11, subtracting 5 gives -2x > 6, and dividing by -2 REVERSES the sign, so x < -3, not x > -3. The reason is order itself: 2 < 3 is true, yet negating both numbers gives -2 > -3, so multiplying by -1 must flip the sign for the statement to stay true. The same care protects division by an unknown: you may not divide both sides of x^2 < 4x by x without knowing whether x is positive, negative or zero, because the sign of the answer depends on it. Move everything to one side and factorise instead.',
          bulletPoints: [
            'Adding or subtracting any number: sign unchanged.',
            'Multiplying or dividing by a positive: sign unchanged.',
            'Multiplying or dividing by a NEGATIVE: sign REVERSED, this is the one trap.',
            'Never divide by an unknown expression whose sign is not established.'
          ],
          keyTakeaway: 'One rule separates an A from a C: divide by a negative, flip the sign.',
          realWorldExample: 'A shop in Takoradi sells a GH¢20 item after a discount of x cedis; requiring the selling price to exceed GH¢12 gives 20 - x > 12, hence -x > -8 and x < 8, so any discount below GH¢8 is allowed, the reversal law seen plainly.'
        },
        {
          title: 'Number Lines, Endpoints and Integer Solutions',
          content: 'A solution set is drawn on a number line with an open circle when the boundary is excluded (strict signs, less than or greater than) and a solid dot when it is included (less-or-equal, greater-or-equal). For 5 - 2x > 11, solved as x < -3, the line is shaded leftward from an open circle at -3, and the greatest integer solution is -4; the boundary -3 itself fails because 5 - 2(-3) = 11 is not strictly greater than 11. Counting integers inside a range asks the same attention: 3 < x <= 5 contains exactly 4 and 5, so two values, since 3 is excluded and 5 is included. Double inequalities compress two conditions: -2 < 2x < 6 divides through by 2 to -1 < x < 3, whose integers are 0, 1 and 2.',
          bulletPoints: [
            'Open circle for strict inequality, solid dot for inclusive inequality.',
            'Shading direction: x < a shades LEFT of a; x >= a shades RIGHT of a.',
            'List boundary values first, then decide include or exclude for each.',
            'The number of integers in 3 < x <= 5 is 2, not 3; careless counts include the excluded 3.'
          ],
          keyTakeaway: 'Read an inequality from its number line by asking two questions: where is the circle and is it filled?',
          realWorldExample: 'A Ho secondary school requires form-one ages A to satisfy 10 <= A <= 13; on the number line both endpoints are solid, and the admissible integer ages are 10, 11, 12, 13.'
        },
        {
          title: 'Quadratic Inequalities by Boundary Roots and Sign Charts',
          content: 'To solve x^2 - x - 6 < 0, first solve the boundary equation x^2 - x - 6 = 0, which factorises as (x - 3)(x + 2) = 0 giving roots x = -2 and x = 3. These split the line into three regions, and the product (x - 3)(x + 2) keeps a constant sign inside each region, so one test value per region is enough: at x = -3 the product is (-6)(-1) = 6, positive; at x = 0 it is (-3)(2) = -6, negative; at x = 4 it is (1)(6) = 6, positive. A strictly-less-than-zero reading keeps the middle: -2 < x < 3. Flip the demand to x^2 - 5x + 6 > 0, roots 2 and 3, and the positive regions are the OUTSIDE: x < 2 or x > 3. The shortcut for a positive-leading quadratic: less-than picks the inside strip, greater-than picks the two outside arms.',
          bulletPoints: [
            'Always rearrange to zero on one side before touching a sign chart.',
            'Boundary roots are EXCLUDED for strict signs and INCLUDED for <= or >=.',
            'Test one convenient value per region, usually 0 when it lies in the middle region.',
            'x^2 > 16 gives x < -4 or x > 4; taking square roots requires BOTH arms.'
          ],
          keyTakeaway: 'Solve the boundary equation, then let one test value per region read out the signs.',
          realWorldExample: 'A drainage channel cut near Tamale is stable only where the ground-profile value x^2 - x - 6 is negative; the sign chart fixes the safe working window as -2 < x < 3.'
        },
        {
          title: 'Simultaneous Inequalities: Solve Each, Then Overlap',
          content: 'A pair of inequalities in the same unknown is solved one at a time and the answers are intersected. For 2x - 1 > 5 and x - 3 <= 2: the first gives 2x > 6 hence x > 3; the second gives x <= 5; both hold precisely when 3 < x <= 5, so the integer solutions are 4 and 5, two values. With quadratic partners, sketch both solution sets on one number line and shade the common part. When the sets do not meet, such as x < 1 and x >= 4, the system has NO solution and that must be stated plainly. Examination questions love the count of integers in the overlap, and each endpoint is worth a deliberate decision: open circle excluded, solid dot included.',
          bulletPoints: [
            'Solve every inequality separately first; never manipulate them as one chain unless the unknowns already match.',
            'Combine with the words and, meaning the intersection of the two sets.',
            'An empty intersection is a legitimate answer: state no solution.',
            'For an integer count, list candidates at the endpoints and test inclusion individually.'
          ],
          keyTakeaway: 'Simultaneous inequalities ask for the overlap of two drawn sets, endpoints argued one at a time.',
          realWorldExample: 'A trotro on the Kumasi-Akanlu route must carry at least 4 and at most 9 passengers per trip for profit, and a fuel-sharing scheme demands more than 3; the combined admissible counts are 4, 5, 6, 7, 8, 9.'
        }
      ],
      commonMistakes: [
        'Solving 5 - 2x > 11 as x > -3: after -2x > 6 the division by -2 must reverse the sign, giving x < -3.',
        'Solving x^2 > 16 as x > 4 only and losing the second arm x < -4; squaring a negative such as -5 also exceeds 16.',
        'Taking the wrong region for a quadratic inequality: writing x < -2 or x > 3 for x^2 - x - 6 < 0, which is the region where the product is POSITIVE.',
        'Counting endpoints twice or not at all: for 3 < x <= 5 the integers are 4 and 5 only, but students list 3, 4, 5.',
        'Dividing both sides of an inequality by an unknown x, silently losing the negative arm and possibly the truth of the statement.'
      ],
      wassceExamTips: [
        'Paper 1 objective items on inequality reversal are decided in one line: circle any answer whose arrow points the opposite way from your raw division, e.g. answers claiming x > -3 for 5 - 2x > 11.',
        'In Paper 2 theory a quadratic inequality typically pays M1 for obtaining the boundary roots, M1 for a valid test or sign argument, and A1 for the final interval written with the correct open or closed signs.',
        'Write solution sets in the notation the question uses; if it speaks of number lines, draw the open or solid circle explicitly; if it asks for integers, LIST them before counting.',
        'When simultaneous inequalities are asked, put both sets on ONE number line and shade the overlap; the picture itself earns the method mark even when the wording after it wobbles.',
        'Carry-through marks survive sign slips: if you forget one reversal but handle your (wrong) set consistently in every later part, the follow-through award usually preserves your method marks, so complete the whole question.'
      ],
      summaryChecklist: [
        'Can I state which inequality operations reverse the sign and which never do?',
        'Can I solve a linear inequality, draw it on a number line and name its greatest or least integer solution?',
        'Can I solve a quadratic inequality with boundary roots, one test value per region and the correct interval?',
        'Can I count the integers satisfying one inequality or a double inequality within a range?',
        'Can I combine two inequalities into their overlap and declare no solution when the sets never meet?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-ineq-1',
        title: 'A Linear Inequality Requiring Sign Reversal',
        problem: 'Solve the inequality 5 - 2x > 11, represent the solution on a number line, and state the greatest integer satisfying it.',
        stepByStepSolution: [
          'Step 1 (M1): Subtract 5 from both sides: -2x > 11 - 5, so -2x > 6.',
          'Step 2 (M1): Divide both sides by -2 and REVERSE the sign: x < -3.',
          'Step 3 (M1): Boundary test: at x = -3 the left side is 5 - 2(-3) = 11, which equals 11 and does not satisfy the strict >, so -3 is excluded (open circle).',
          'Step 4 (M1): Direction test: at x = -4, 5 - 2(-4) = 13 > 11 works, while at x = 0, 5 is not greater than 11, confirming the shading runs LEFT of -3.',
          'Step 5 (A1): Final answer: the solution set is x < -3, drawn with an open circle at -3 shaded leftward, and the greatest integer solution is x = -4.'
        ],
        keyTakeaway: 'Dividing by the negative coefficient flips > to <; verify the direction by testing one value on each side of the boundary.'
      },
      {
        id: 'ex-shs1-em-ineq-2',
        title: 'A Quadratic Inequality by the Sign Chart',
        problem: 'Solve the inequality x^2 - x - 6 < 0 and list the integer solutions.',
        stepByStepSolution: [
          'Step 1 (M1): Factorise the quadratic expression: x^2 - x - 6 = (x - 3)(x + 2).',
          'Step 2 (M1): Find the boundary roots by solving (x - 3)(x + 2) = 0: x = 3 and x = -2.',
          'Step 3 (M1): Test one value in each region: at x = -3 the product is (-6)(-1) = 6 > 0; at x = 0 it is (-3)(2) = -6 < 0; at x = 4 it is (1)(6) = 6 > 0.',
          'Step 4 (M1): The inequality demands NEGATIVE values, so the solution is the middle region, -2 < x < 3, with both boundaries excluded because the sign is strict.',
          'Step 5 (A1): Final answer: -2 < x < 3, and the integer solutions are -1, 0, 1, 2 (four integers).'
        ],
        keyTakeaway: 'Boundary roots divide the line into regions; the inequality sign is decided by one test value per region.'
      }
    ],
    quiz: {
      id: 'quiz-ineq',
      topicId: 'shs1-em-t2-inequalities',
      title: 'Inequalities Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-ineq-1',
          quizId: 'quiz-ineq',
          questionText: 'Solve the inequality 3 - 2x <= 9.',
          optionA: 'x >= -3',
          optionB: 'x <= -3',
          optionC: 'x >= 3',
          optionD: 'x <= 6',
          correctOption: 'A',
          subConcept: 'Reversal Law',
          explanation: 'Subtracting 3 gives -2x <= 6; dividing by -2 reverses the sign, so x >= -3. Option B is the classic slip of dividing without turning the inequality around.',
          remediationTip: 'Circle the negative coefficient before dividing; the circle is your reminder that the sign flips.'
        },
        {
          id: 'q-em-ineq-2',
          quizId: 'quiz-ineq',
          questionText: 'Which interval is the solution set of x^2 - 4x - 5 < 0?',
          optionA: 'x < -1 or x > 5',
          optionB: '-5 < x < -1',
          optionC: '1 < x < 5',
          optionD: '-1 < x < 5',
          correctOption: 'D',
          subConcept: 'Quadratic Inequalities',
          explanation: 'Boundary roots from (x - 5)(x + 1) = 0 are x = -1 and x = 5; at x = 0 the expression is -5, negative, so the INSIDE strip -1 < x < 5 satisfies the strict less-than. Option A is the outside region, which solves the opposite inequality x^2 - 4x - 5 > 0.',
          remediationTip: 'For a positive-leading quadratic, less-than keeps the middle region between the roots; test x = 0 to confirm.'
        },
        {
          id: 'q-em-ineq-3',
          quizId: 'quiz-ineq',
          questionText: 'How many integer values of x satisfy both 2x - 1 > 5 and x - 3 <= 2?',
          optionA: '1',
          optionB: '2',
          optionC: '3',
          optionD: '5',
          correctOption: 'B',
          subConcept: 'Simultaneous Inequalities',
          explanation: 'The first gives x > 3; the second gives x <= 5; together 3 < x <= 5, whose integers are 4 and 5 only, so 2 values. Option C counts the excluded boundary 3 as well.',
          remediationTip: 'Draw both sets on one number line and mark each endpoint open or solid before counting.'
        },
        {
          id: 'q-em-ineq-4',
          quizId: 'quiz-ineq',
          questionText: 'Solve the inequality x^2 > 16.',
          optionA: 'x > 4 only',
          optionB: '-4 < x < 4',
          optionC: 'x < -4 or x > 4',
          optionD: 'x > -4',
          correctOption: 'C',
          subConcept: 'Two-Arm Solutions',
          explanation: 'Taking roots of x^2 - 16 > 0 gives boundaries x = -4 and x = 4 with positive regions outside, so x < -4 or x > 4; check x = -5: 25 > 16 holds. Option A forgets the negative arm, the most common single error here.',
          remediationTip: 'Whenever you square-root an inequality, ask explicitly: do negatives with large size also work?'
        },
        {
          id: 'q-em-ineq-5',
          quizId: 'quiz-ineq',
          questionText: 'If a > b and c is a negative number, which statement must be true?',
          optionA: 'ac > bc',
          optionB: 'a + c < b + c',
          optionC: 'ac < bc',
          optionD: '-a > -b',
          correctOption: 'C',
          subConcept: 'Inequality Laws',
          explanation: 'Multiplying the true order a > b by the negative c reverses it, so ac < bc. Option B wrongly reverses what addition preserves: adding the same c to both sides keeps a + c > b + c, and option D reverses too little, since -a < -b.',
          remediationTip: 'Test with real numbers: a = 4, b = 1, c = -2; then ac = -8 and bc = -2, confirming ac < bc.'
        }
      ]
    }
  },
  // =========================================================================
  // TERM 3
  // =========================================================================
// =========================================================================
  // SHS 1 TERM 3 — TOPIC 9: VARIATION
  // =========================================================================
  {
    id: 'shs1-em-t3-variation',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 3,
    orderIndex: 9,
    title: 'Variation: Direct, Inverse, Joint and Partial',
    description: 'The constant-of-proportionality method applied to direct, inverse, joint, combined and partial variation, with hidden constants in geometry and cost problems in cedis.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Direct variation: "y varies directly as x" translates to y = kx, where k is the constant of proportionality and k = y/x.
  - "If y = 45 when x = 3" then k = 45/3 = 15, so y = 15x.
• Inverse variation: "y varies inversely as x" means y = k/x, so the PRODUCT xy stays constant; k = xy.
  - x = 6, y = 8 gives k = 48; when x = 12, y = 48/12 = 4. Doubling x halves y.
• Joint variation combines two directs at once: y varies jointly as x and z means y = kxz.
• Combined variation mixes direct and inverse: "y varies directly as x and inversely as z squared" is y = kx/z^2.
  - y = 12 when x = 3, z = 2: 12 = 3k/4, so k = 16; then x = 9, z = 3 gives y = 16(9)/9 = 16.
• Partial variation: "partly constant and partly varies as" means u = a + bx; a is the fixed part, b the varying rate.
  - Two data pairs give two simultaneous equations in a and b: cost GH¢180 for 20 students and GH¢260 for 30 students yields b = 8, a = 20.
• Hidden constants: formulae are variation statements. A = pi r^2 is area varying directly as the square of the radius with k = pi; C = 2 pi r is direct with k = 2 pi.
• The four-step method never changes: (1) write the equation with k, (2) substitute the given pair to find k, (3) rewrite the law, (4) answer the question asked.
• Inverse square law appears in physics links: intensity varies inversely as the square of distance, I = k/d^2.
• Graphs: direct variation is a straight line through the origin; inverse variation is a curve (hyperbola) never touching the axes.
• In word problems, decide FIRST which type of variation is described; the key words are "directly as", "inversely as", "jointly as", "varies as the square of", "partly constant".
• For a fixed distance, time varies inversely as speed: 120 km at 60 km/h takes 2 h, at 40 km/h it takes 3 h; product speed x time = 120 stays fixed.
• Never cancel across an addition when rearranging partial variation; subtract the two equations to remove the constant a.`,
    detailedNotes: {
      overview: 'Variation is the mathematical language for "this quantity changes with that one". In WASSCE Elective Mathematics it is a guaranteed earner: one clean part-question of two or three marks appears in most years, either as a pure statement like "y varies directly as x^2" or hidden inside a cost or physics problem. The whole topic rests on one habit: convert the English sentence into an equation with a constant k, find k from a data pair, then answer the question. SHS 1 extends the direct and inverse cases you met in JHS to joint, combined and partial variation, and to spotting the hidden constants inside standard formulae.',
      introduction: 'Read every variation sentence as a building instruction. "Varies directly as" says multiply; "varies inversely as" says divide; "as the square of" says the power is 2; "partly constant" says add a fixed term. The constant k is the number the examiners hide from you until you substitute the data pair they supply. Get k, and the rest of the question is ordinary substitution.',
      realWorldContext: 'A school in Kumasi prints Open Day programmes: the printer charges GH¢30 for 200 copies, and because the cost varies directly as the number printed the rate is GH¢30/200 = GH¢0.15 per copy, so 500 copies cost GH¢75. Meanwhile a trotro covering a fixed Ho to Accra trip at an average speed of 60 km/h takes 3 hours; time varies inversely as speed, so at 45 km/h the same trip takes (60 x 3)/45 = 4 hours.',
      objectives: [
        'Translate variation statements into equations involving a constant k',
        'Calculate the constant of proportionality from a given pair of values for direct, inverse and joint variation',
        'Solve combined variation problems of the type y = kx/z^2',
        'Model partial variation situations with u = a + bx and determine a and b from two data pairs',
        'Identify direct, inverse and square variation hidden inside geometry and physics formulae'
      ],
      sections: [
        {
          title: 'Direct Variation: y = kx',
          content: 'We say y varies directly as x when y = kx for some non-zero constant k called the constant of proportionality. Equivalent statements: y is proportional to x; y/x is constant; when x doubles, y doubles. The standard method is four steps: write y = kx, substitute the given pair to get k, rewrite the specific law, then use it. For example, if y = 45 when x = 3, then 45 = 3k gives k = 15, so y = 15x and y = 105 when x = 7. The graph of y = kx is a straight line passing through the origin with gradient k, which is why examiners sometimes hand you a graph and ask for the law behind it.',
          bulletPoints: [
            'k = y/x; if the statement is "y varies directly as the square of x", then y = kx^2 and k = y/x^2.',
            'Proportional reasoning is a special case: two quantities are in direct variation when their ratio never changes.',
            'On a graph, direct variation is a line through the origin; gradient of that line is k.',
            'If y varies directly as x, then x also varies directly as y; the two constants are reciprocals of each other.'
          ],
          keyTakeaway: 'Write y = kx first, hunt for k with the given pair, and every direct-variation question collapses into substitution.',
          realWorldExample: 'At a Makola stall, 5 identical exercise books cost GH¢12.50; cost varies directly as number, so 12 books cost (12.50/5) x 12 = GH¢30.00.'
        },
        {
          title: 'Inverse Variation: y = k/x',
          content: 'We say y varies inversely as x when y = k/x, which is the same as xy = k: the product of the two quantities is always the same number. Here growth works in reverse — doubling x halves y. If x = 6 when y = 8, then k = 6 x 8 = 48, so when x = 12, y = 48/12 = 4. Watch for the inverse-square wording: "y varies inversely as the square of x" is y = k/x^2, a pattern that recurs in physics links such as light intensity falling with distance. The graph of y = k/x is a curve in the first and third quadrants that never touches either axis, and SHS 1 students are expected to sketch its general shape and read values off it.',
          bulletPoints: [
            'k = xy is found by multiplying the given pair, not dividing; the most common slip is writing k = x/y.',
            'Tripling x reduces y to a third; halving x doubles y.',
            '"Time for a fixed journey varies inversely as speed" is the classic word-problem form.',
            'Number of workers varies inversely as days needed to finish a job of fixed size.'
          ],
          keyTakeaway: 'For inverse variation the product is constant: find k by multiplying the pair, then divide by the new value.',
          realWorldExample: 'A cocoa farm weeding crew: 8 labourers clear a plot in 12 days; for the same plot, 6 labourers need (8 x 12)/6 = 16 days.'
        },
        {
          title: 'Joint and Combined Variation',
          content: 'Joint variation involves two or more direct relationships at once: y varies jointly as x and z means y = kxz. Combined variation welds direct and inverse pieces together: "y varies directly as x and inversely as the square of z" is y = kx/z^2. The method is unchanged. Take y = 12 when x = 3 and z = 2: substitute into y = kx/z^2 to get 12 = 3k/4, hence k = 16; then when x = 9 and z = 3, y = 16 x 9/9 = 16. Square the correct quantity: z = 2 gives z^2 = 4 in the denominator. A familiar science law is a combined-variation statement: simple interest I = P x R x T is interest varying jointly as principal, rate and time.',
          bulletPoints: [
            'One data set with all quantities given supplies the single constant k, however many variables appear.',
            'Read "as the square of" carefully: only the quantity named gets the exponent 2.',
            'y varies directly as x and inversely as z means y = kx/z, so k = yz/x.',
            'Recompute each power before cancelling; a z^2 of 4 is not 2.'
          ],
          keyTakeaway: 'Build the formula exactly as the sentence reads, use the complete data set once to fix k, then substitute.',
          realWorldExample: 'The value of a rectangular land parcel near Tamale varies jointly as its frontage and depth: a plot 20 m by 15 m valued at GH¢90,000 shares the price per square metre GH¢300 with a 30 m by 15 m plot worth GH¢135,000.'
        },
        {
          title: 'Partial Variation and Hidden Constants',
          content: 'Partial variation has the form u = a + bx, read as "u is partly constant and partly varies as x": a is the fixed charge and b the rate. Two data pairs produce two simultaneous equations. For a school trip costing GH¢180 for 20 students and GH¢260 for 30 students, subtracting 180 = a + 20b from 260 = a + 30b gives 80 = 10b, so b = 8 and a = 20; the cost for 45 students is 20 + 8 x 45 = GH¢380. Examiners also hide variation inside formulae: the circumference C = 2 pi r shows C varying directly as r with constant 2 pi; area A = pi r^2 shows A varying directly as r^2. Being able to name the type of variation and the constant from a bare formula is a pure Section A skill.',
          bulletPoints: [
            'Subtracting the two equations eliminates the constant a, because a appears in both with coefficient 1.',
            'A graph of partial variation is a straight line that does NOT pass through the origin; the intercept is a.',
            'Checking: for u = a + bx the difference between u-values for consecutive x-values is always b times the step.',
            'A quantity can vary with more than one variable at once: "varies partly as" questions often blend partial and joint patterns.'
          ],
          keyTakeaway: 'Partly constant means a + bx; two complete data pairs fix both a and b by subtraction.',
          realWorldExample: 'An ICT lab charges a fixed GH¢20 registration plus GH¢8 per student for an excursion; the bill for a form with 30 pupils is 20 + 8 x 30 = GH¢260.'
        }
      ],
      commonMistakes: [
        'Writing k = x/y for inverse variation: "y varies inversely as x" means xy = k, so with x = 6, y = 8 the constant is k = 48, not k = 0.75.',
        'Squaring the wrong quantity in combined variation: for "inversely as the square of z" with z = 2 the denominator is z^2 = 4; students who write 2 inflate the answer by a factor of 2.',
        'Treating a partial-variation bill as direct proportion: with a fixed GH¢20 plus GH¢8 per student, 45 students cost GH¢380, not (180/20) x 45 = GH¢405.',
        'Dividing instead of subtracting when removing the constant: from 260 = a + 30b and 180 = a + 20b, subtracting gives 80 = 10b; the quotient 260/180 is meaningless.',
        'Forgetting to state the law: leaving the answer as k = 0.15 without writing C = 0.15n loses the method mark that the substitution needs.'
      ],
      wassceExamTips: [
        'On Paper 1 the variation item is a quick scorer: spend under 90 seconds, decide the type from the keywords, and never open the book of four-figure tables for what is pure algebra.',
        'On Paper 2 the first two marks are method: writing the correct equation y = kx/z^2 earns M1 and the substitution that produces k earns the next M1, so put both lines down even if you later doubt the arithmetic.',
        'If your k is wrong but every later line follows from it, WAEC awards afr (follow through correctly) on the remaining work, so complete the method neatly rather than leaving the part blank.',
        'A typical combined-variation question is worth 4 marks: 1 for the statement with k, 1 for finding k, 1 for substituting the new values, 1 for the answer with units.',
        'Underline the final answer and keep the units the question used, such as GH¢ or km/h; a bare number in a cost question invites an A1 penalty even when the working is right.'
      ],
      summaryChecklist: [
        'Can I turn any variation sentence into an equation with a constant k?',
        'Can I find k from a data pair for direct, inverse and joint variation?',
        'Can I handle "as the square of" wording in combined variation such as y = kx/z^2?',
        'Can I form and solve the two simultaneous equations behind a partial-variation cost?',
        'Can I name the type of variation and its constant hidden in formulae like C = 2 pi r?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-variation-1',
        title: 'Direct Variation in a Printing Cost',
        problem: 'The cost C, in cedis, of printing Open Day programmes varies directly as the number n of programmes printed. When n = 200, C = 30. (a) Express C in terms of n. (b) Find the cost of printing 500 programmes.',
        stepByStepSolution: [
          'Step 1 (M1): Translate the statement: C varies directly as n means C = kn for a constant k.',
          'Step 2 (M1): Substitute the given pair: 30 = k x 200.',
          'Step 3 (A1): Solve for the constant: k = 30/200 = 0.15.',
          'Step 4 (A1): The law is C = 0.15n.',
          'Step 5 (M1): For n = 500, substitute: C = 0.15 x 500.',
          'Step 6 (A1): C = GH¢75; the cost of printing 500 programmes is GH¢75.'
        ],
        keyTakeaway: 'Direct variation is one equation C = kn: the data pair hands you k, and every later cost is one substitution away.'
      },
      {
        id: 'ex-shs1-em-variation-2',
        title: 'Combined Variation with a Square',
        problem: 'It is given that y varies directly as x and inversely as the square of z. When x = 3 and z = 2, y = 12. Find y when x = 9 and z = 3.',
        stepByStepSolution: [
          'Step 1 (M1): Write the law: y = kx/z^2.',
          'Step 2 (M1): Substitute the known values: 12 = k x 3 / 2^2 = 3k/4.',
          'Step 3 (A1): Solve for k: k = 12 x 4/3 = 16, so y = 16x/z^2.',
          'Step 4 (M1): Substitute the new values: y = 16 x 9 / 3^2 = 144/9.',
          'Step 5 (A1): y = 16.'
        ],
        keyTakeaway: 'Square the quantity named by the sentence, not the one you wish it named; z = 2 contributes 4 to the denominator.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t3-variation',
      topicId: 'shs1-em-t3-variation',
      title: 'Variation Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-variation-1',
          quizId: 'quiz-shs1-em-t3-variation',
          questionText: 'P varies directly as q, and P = 20 when q = 5. Express P in terms of q.',
          optionA: 'P = 4q',
          optionB: 'P = q/4',
          optionC: 'P = 25q',
          optionD: 'P = 100q',
          correctOption: 'A',
          subConcept: 'Direct variation',
          explanation: 'Direct variation gives P = kq with k = P/q = 20/5 = 4, so P = 4q. The distractor P = q/4 comes from computing k = q/P = 1/4, i.e. dividing the wrong way round.',
          remediationTip: 'The constant for direct variation is (dependent)/(independent): k = P/q, always in that order.'
        },
        {
          id: 'q-em-variation-2',
          quizId: 'quiz-shs1-em-t3-variation',
          questionText: 'y varies inversely as x, and y = 8 when x = 6. Find y when x = 12.',
          optionA: '16',
          optionB: '8',
          optionC: '4',
          optionD: '14',
          correctOption: 'C',
          subConcept: 'Inverse variation',
          explanation: 'Inverse variation means xy = k, so k = 6 x 8 = 48 and y = 48/12 = 4. The option 16 is the direct-variation answer (doubling x doubles y), which is exactly the trap set here since x doubled.',
          remediationTip: 'Doubling signals the direction: if x doubles and the variation is inverse, y must halve from 8 to 4.'
        },
        {
          id: 'q-em-variation-3',
          quizId: 'quiz-shs1-em-t3-variation',
          questionText: 'V varies directly as T and inversely as P. When T = 4 and P = 2, V = 10. Find V when T = 6 and P = 3.',
          optionA: '5',
          optionB: '10',
          optionC: '15',
          optionD: '20',
          correctOption: 'B',
          subConcept: 'Combined variation',
          explanation: 'V = kT/P gives 10 = 4k/2, so k = 5. Then V = 5 x 6/3 = 10. The option 15 ignores the inverse piece and only scales by 6/4, forgetting that P also changed.',
          remediationTip: 'Change nothing except the values inside your own formula V = kT/P; both new numbers must be substituted.'
        },
        {
          id: 'q-em-variation-4',
          quizId: 'quiz-shs1-em-t3-variation',
          questionText: 'The cost of a school field trip is partly constant and partly varies as the number of students. It costs GH¢180 for 20 students and GH¢260 for 30 students. Find the cost for 45 students.',
          optionA: 'GH¢360',
          optionB: 'GH¢390',
          optionC: 'GH¢405',
          optionD: 'GH¢380',
          correctOption: 'D',
          subConcept: 'Partial variation',
          explanation: 'Cost = a + bn. Subtracting gives 80 = 10b, so b = 8 and a = 180 - 160 = 20; for 45 students, cost = 20 + 8 x 45 = GH¢380. GH¢360 drops the fixed GH¢20; GH¢405 treats the trip as direct variation from the first pair.',
          remediationTip: 'Write both equations before touching anything, then subtract to kill the constant a.'
        },
        {
          id: 'q-em-variation-5',
          quizId: 'quiz-shs1-em-t3-variation',
          questionText: 'Which of the following pairs shows inverse variation?',
          optionA: 'The circumference of a circle and its radius',
          optionB: 'The time taken for a fixed journey and the average speed',
          optionC: 'The cost of identical exercise books and the number bought',
          optionD: 'The area of a square and the square of its side',
          correctOption: 'B',
          subConcept: 'Recognising variation types',
          explanation: 'For a fixed distance, speed x time = distance, a constant product, so time varies inversely as speed. The other three keep a constant ratio, which is direct variation: circumference = 2 pi r and cost = (price) x number.',
          remediationTip: 'Test the pair: if the PRODUCT stays fixed, variation is inverse; if the RATIO stays fixed, it is direct.'
        }
      ]
    }
  },

  // =========================================================================
  // SHS 1 TERM 3 — TOPIC 10: MATRICES AND DETERMINANTS
  // =========================================================================
  {
    id: 'shs1-em-t3-matrices-determinants',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 3,
    orderIndex: 10,
    title: 'Matrices and Determinants: Order, Operations and Inverse',
    description: 'Matrix order and notation, addition, scalar and matrix multiplication, 2x2 and 3x3 determinants, singular matrices, and the inverse of a 2x2 matrix used to solve simultaneous equations.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A matrix is a rectangular array of numbers enclosed in brackets; rows go across, columns go down.
• Order is (rows x columns): [2 5 1; 4 0 3] has order 2 x 3 because it has 2 rows and 3 columns.
• Two matrices are equal only if they have the same order AND matching entries are equal; this gives solvable equations for unknown entries.
• Add or subtract only matrices of the same order, entry by entry: [1 2; 3 4] + [5 6; 7 8] = [6 8; 10 12].
• Scalar multiplication multiplies EVERY entry: 3 x [1 2; 3 4] = [3 6; 9 12].
• Matrix multiplication uses row by column: [1 2; 3 4][5; 6] = [1x5 + 2x6; 3x5 + 4x6] = [17; 39].
• The product is defined only when columns of the first = rows of the second; (2x2)(2x1) gives (2x1).
• Matrix multiplication is not commutative: in general AB is not BA, and one of them may fail to exist.
• Determinant of a 2x2: ad - bc for [a b; c d]. For [3 -2; 4 1] it is 3(1) - (-2)(4) = 3 + 8 = 11.
• A 3x3 determinant is expanded along a row or column with alternating signs: det [1 2 1; 0 3 1; 2 1 1] = 1(3-1) - 2(0-2) + 1(0-6) = 2 + 4 - 6 = 0.
• A square matrix is singular exactly when its determinant is zero; singular matrices have no inverse.
• To find k so that [k 2; 3 6] is singular: 6k - 6 = 0, hence k = 1.
• Inverse of a 2x2: A^-1 = (1/(ad - bc)) x [d -b; -c a]: swap a and d, negate b and c, divide by the determinant.
• For A = [2 1; 5 3], det = 6 - 5 = 1 and A^-1 = [3 -1; -5 2]; checking gives AA^-1 = [1 0; 0 1] = I.
• Simultaneous equations become AX = B, so X = A^-1 B; solving 2x + y = 5, 5x + 3y = 13 gives [x; y] = [3 -1; -5 2][5; 13] = [2; 1].`,
    detailedNotes: {
      overview: 'Matrices turn long lists of numbers into single objects you can add, multiply and invert, and they are the tool WASSCE expects for tidy solutions of simultaneous equations. This topic covers the vocabulary of order and notation, the three operations, the determinant as a single number attached to a square matrix, the singular case where the determinant vanishes, and the 2x2 inverse with its signature swap-and-change-signs recipe. Every skill here feeds one staple exam question: solve a pair of linear equations by the matrix method, worth full marks in about four lines of working.',
      introduction: 'Picture a matrix as a filing cabinet: rows are shelves, columns are the compartments across each shelf, and the order is shelves-times-compartments. Operations only make sense when the cabinets match (addition) or when the compartments of one align with the shelves of the other (multiplication). The determinant measures whether a square cabinet can be reversed, and the inverse is that reversal.',
      realWorldContext: 'A school canteen in Kumasi sells loaves and drinks. On Monday 2 loaves and 1 drink cost GH¢5; on Tuesday 5 loaves and 3 drinks cost GH¢13. Writing [2 1; 5 3][x; y] = [5; 13] and inverting the price matrix recovers the individual prices x = 2 and y = 1 cedis in one line of matrix working. Market women at Tamale use the same arithmetic mentally every morning when they combine two-trolley loads.',
      objectives: [
        'State the order of a matrix and use equality of matrices to find unknown entries',
        'Add, subtract and multiply matrices by scalars and by each other where the product is defined',
        'Evaluate determinants of 2x2 and 3x3 matrices',
        'Determine when a matrix is singular and find unknown constants that make a matrix singular',
        'Compute the inverse of a non-singular 2x2 matrix and use it to solve a system of two linear equations'
      ],
      sections: [
        {
          title: 'Order, Notation, Equality and Addition',
          content: 'A matrix is described by its order, written rows first then columns: [2 5 1; 4 0 3] has 2 rows and 3 columns, so its order is 2 x 3. Rows run horizontally and columns vertically; the entry in row i and column j is often labelled a_ij. Two matrices are equal when they share an order and every corresponding entry matches, which is how examiners hide simple equations: from [x + 1; 5] = [4; 5] you must solve x = 3. Addition and subtraction work entry by entry and demand identical orders; attempting [1 2; 3 4] + [5 6] is meaningless because a 2 x 2 cannot be joined with a 2 x 1. Scalar multiplication, such as 3[1 2; 3 4] = [3 6; 9 12], touches every entry without exception, and it is the one operation students most often apply to only some of the entries.',
          bulletPoints: [
            'Rows across, columns down; order is always (rows) x (columns), never the reverse.',
            'Equality of matrices converts to a system of small linear equations, one per entry.',
            'Addition needs matching order; the negative of a matrix negates every entry.',
            'A square matrix has equal rows and columns; the main diagonal runs from top left to bottom right.',
            'The zero matrix has all entries 0 and leaves any matrix unchanged under addition.'
          ],
          keyTakeaway: 'Say the order before you compute: rows x columns decides what can be equal, added or scaled.',
          realWorldExample: 'Two days of canteen takings, GH¢[30 20; 40 25] and GH¢[15 10; 20 15], can be added entry by entry to GH¢[45 30; 60 40] because both are 2 x 2 records of loaves and drinks sold on two mornings.'
        },
        {
          title: 'Matrix Multiplication: Row by Column',
          content: 'To multiply two matrices, take the first row down the columns: entry (1,1) of the product is (row 1 of the first) dotted with (column 1 of the second). For [1 2; 3 4][5; 6] the top entry is 1 x 5 + 2 x 6 = 17 and the bottom entry is 3 x 5 + 4 x 6 = 39, giving [17; 39]. The product is defined only when the inner numbers agree: (m x n)(n x p) = (m x p). A (2 x 2) times a (2 x 1) yields a (2 x 1), which is exactly the shape used for simultaneous equations. Multiplication is not commutative — for many pairs AB differs from BA or one side does not even exist — and it is not true that AB = 0 forces A or B to be zero. The identity matrix I = [1 0; 0 1] plays the role of the number 1, since AI = IA = A for any 2 x 2 matrix A.',
          bulletPoints: [
            'Match inner dimensions first: (2x2)(2x1) works, but (2x2)(1x2) does not.',
            'Each entry of the product needs one multiply and one add; write both products before summing to protect the sign.',
            'AB is generally different from BA; test commutativity by computing both when asked.',
            'Powers of a matrix repeat multiplication: A^2 = A A.',
            'Any matrix multiplied by the identity returns itself.'
          ],
          keyTakeaway: 'Row meets column, inner orders must agree, and the answer order is outer, outer.',
          realWorldExample: 'Unit prices [x; y] of two canteen items combine with the day quantities [2 1] as the conformable product [2 1][x; y] = 2x + y: Monday sells 2 loaves and 1 drink for GH¢5, exactly the row-by-column rule in miniature.'
        },
        {
          title: 'Determinants of 2x2 and 3x3 Matrices',
          content: 'The determinant attaches a single number to every square matrix. For A = [a b; c d] it is det A = ad - bc, the difference of the two diagonal products. With [3 -2; 4 1] this gives 3 x 1 - (-2) x 4 = 3 + 8 = 11; note how the double negative becomes addition, the line examiners watch most closely. The 3 x 3 determinant is found by expansion along a row or column using 2 x 2 minors and alternating signs +, -, + along the first row: det [1 2 1; 0 3 1; 2 1 1] = 1(3 x 1 - 1 x 1) - 2(0 x 1 - 1 x 2) + 1(0 x 1 - 3 x 2) = 2 + 4 - 6 = 0. A determinant of zero flags a singular matrix, and singularity can be engineered: [k 2; 3 6] is singular when 6k - 6 = 0, i.e. k = 1.',
          bulletPoints: [
            'ad - bc keeps the order of subtraction; reversing it flips every sign.',
            'Sarrus rule is an alternative 3x3 recipe: copy the first two columns and add the three down-diagonals, subtract the three up-diagonals.',
            'Row or column with the most zeros makes 3x3 expansion shortest.',
            'det A = 0 characterises a singular matrix, one with no inverse and no unique simultaneous-equation solution.',
            'det(AB) = det A x det B, a useful check when verifying by hand.'
          ],
          keyTakeaway: 'The determinant is the yes/no test for invertibility: nonzero means an inverse exists.',
          realWorldExample: 'A district assembly planner records two land parcels with side-matrix [k 2; 3 6]; if k = 1 the determinant vanishes and the survey data cannot be uniquely decoded, which is the geometric meaning of singularity.'
        },
        {
          title: 'The 2x2 Inverse and Simultaneous Equations',
          content: 'For A = [a b; c d] with det A not zero, the inverse is A^-1 = (1/det A)[d -b; -c a]: swap the diagonal entries, negate the off-diagonal entries, then divide everything by the determinant. For A = [2 1; 5 3], det A = 6 - 5 = 1, so A^-1 = [3 -1; -5 2], and the check AA^-1 = [1 0; 0 1] confirms it. This pays off on simultaneous equations: 2x + y = 5 and 5x + 3y = 13 become AX = B with B = [5; 13], hence X = A^-1 B = [3 -1; -5 2][5; 13] = [15 - 13; -25 + 26] = [2; 1]. Write the equations in standard order first, align x, y and the constant, and keep the matrix column of unknowns upright. Substitution of x = 2, y = 1 back into both original equations is the free final mark.',
          bulletPoints: [
            'Only the two diagonal entries swap; the off-diagonal entries merely change sign.',
            'The factor 1/det multiplies every entry of the rearranged matrix.',
            'The system must be in the form AX = B with all variables on the left before inverting.',
            'X = A^-1 B multiplies on the LEFT by A^-1; writing BA^-1 is the classic dimension error.',
            'Always verify with the original equations; one line of substitution protects the whole answer.'
          ],
          keyTakeaway: 'Swap, sign-change, divide by the determinant, then multiply the inverse into the constant column.',
          realWorldExample: 'Recovering canteen prices from two combined bills: [2 1; 5 3] is inverted once and reused whenever Monday and Tuesday totals change, giving new prices in a single multiplication.'
        }
      ],
      commonMistakes: [
        'Evaluating the determinant of [3 -2; 4 1] as 3 - 8 = -5: the formula is ad - bc = 3(1) - (-2)(4) = 11, and the subtracted negative must become addition.',
        'Forgetting to divide by the determinant when inverting: the inverse of [2 1; 5 3] needs 1/(6-5) in front of [3 -1; -5 2]; when det is 2 or 3 the whole matrix must be scaled.',
        'Adding matrices of different orders, such as a 2 x 2 to a 2 x 1; the operation is undefined and scores no method mark.',
        'Computing elementwise products instead of row-by-column: [1 2; 3 4][5; 6] is [17; 39], not [5; 12] obtained by pairing entries side by side.',
        'Quoting the determinant of a 3x3 without the alternating signs: expanding [1 2 1; 0 3 1; 2 1 1] as 2 + 4 + 6 = 12 forgets the third minor is -6, and the true value is 0.'
      ],
      wassceExamTips: [
        'On Paper 2 a matrix-method simultaneous-equation question typically carries 5 marks: 1 for writing AX = B, 1 for the determinant, 1 for the inverse, 1 for the multiplication, 1 for the answer; each early line is an M1 you can bank even if arithmetic later fails.',
        'Write the rearranged matrix explicitly, [d -b; -c a], before inserting numbers; examiners award the method mark for the swap-and-negate pattern.',
        'If your determinant is wrong, WAEC marks follow-through correctly on your own numbers, so never abandon a part after a bad det.',
        'On Paper 1 order and singularity items are solvable in under a minute; for a singular matrix set ad - bc = 0 and solve for the letter immediately instead of testing all four options.',
        'Keep a small check habit: multiply A by your A^-1 and glance for the identity [1 0; 0 1]; catching a sign error costs 20 seconds and saves an A1.'
      ],
      summaryChecklist: [
        'Can I state the order of any matrix and say which products are defined?',
        'Can I multiply a 2x2 matrix by a 2x1 column correctly, entry by entry?',
        'Can I evaluate 2x2 and 3x3 determinants including negative entries?',
        'Can I find the value of k that makes a matrix singular?',
        'Can I invert a 2x2 matrix and use the inverse to solve a pair of linear equations?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-matrices-1',
        title: 'Inverse of a 2x2 Matrix',
        problem: 'Given A = [2 1; 5 3], find A^-1.',
        stepByStepSolution: [
          'Step 1 (M1): Compute the determinant: det A = 2 x 3 - 1 x 5 = 6 - 5 = 1.',
          'Step 2 (M1): Since det A = 1, not 0, the inverse exists and A^-1 = (1/det A)[d -b; -c a].',
          'Step 3 (M1): Swap the diagonal entries and negate the off-diagonal entries of [2 1; 5 3] to get [3 -1; -5 2].',
          'Step 4 (A1): A^-1 = (1/1)[3 -1; -5 2] = [3 -1; -5 2].',
          'Step 5 (M1): Check: [2 1; 5 3][3 -1; -5 2] gives top-left 2(3) + 1(-5) = 1 and top-right 2(-1) + 1(2) = 0, bottom-left 5(3) + 3(-5) = 0, bottom-right 5(-1) + 3(2) = 1.',
          'Step 6 (A1): The product is the identity [1 0; 0 1], so A^-1 = [3 -1; -5 2].'
        ],
        keyTakeaway: 'Swap, negate, divide by the determinant, then verify by multiplying back to the identity.'
      },
      {
        id: 'ex-shs1-em-matrices-2',
        title: 'Solving Simultaneous Equations by Matrices',
        problem: 'Use the matrix method to solve 2x + y = 5 and 5x + 3y = 13.',
        stepByStepSolution: [
          'Step 1 (M1): Write the system as AX = B with A = [2 1; 5 3], X = [x; y] and B = [5; 13].',
          'Step 2 (M1): det A = 2 x 3 - 1 x 5 = 1, so X = A^-1 B is defined.',
          'Step 3 (M1): From the swap-and-negate rule, A^-1 = [3 -1; -5 2].',
          'Step 4 (M1): Compute x from the first row: x = 3 x 5 + (-1) x 13 = 15 - 13.',
          'Step 5 (A1): x = 2.',
          'Step 6 (M1): Compute y from the second row: y = (-5) x 5 + 2 x 13 = -25 + 26.',
          'Step 7 (A1): y = 1, and checking: 2(2) + 1 = 5 and 5(2) + 3(1) = 13, so the solution is x = 2, y = 1.'
        ],
        keyTakeaway: 'Simultaneous equations are one matrix product once the inverse is ready: X = A^-1 B, then substitute back to verify.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t3-matrices',
      topicId: 'shs1-em-t3-matrices-determinants',
      title: 'Matrices and Determinants Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-matrices-1',
          quizId: 'quiz-shs1-em-t3-matrices',
          questionText: 'What is the order of the matrix M = [2 5 1; 4 0 3]?',
          optionA: '3 x 2',
          optionB: '2 x 3',
          optionC: '2 x 2',
          optionD: '6 x 1',
          correctOption: 'B',
          subConcept: 'Order of a matrix',
          explanation: 'Order is rows x columns: M has 2 rows and 3 columns, so 2 x 3. The option 3 x 2 reverses the rule, and 6 x 1 counts all six entries in a single column.',
          remediationTip: 'Say it aloud: rows first, columns second, always.'
        },
        {
          id: 'q-em-matrices-2',
          quizId: 'quiz-shs1-em-t3-matrices',
          questionText: 'Evaluate the determinant of the matrix [3 -2; 4 1].',
          optionA: '-5',
          optionB: '5',
          optionC: '-11',
          optionD: '11',
          correctOption: 'D',
          subConcept: '2x2 determinant',
          explanation: 'det = ad - bc = 3(1) - (-2)(4) = 3 + 8 = 11. The option -5 comes from writing 3 - 8, i.e. dropping the minus sign on the product (-2)(4) and computing ad - |bc| wrongly.',
          remediationTip: 'Circle b before you substitute: when b is negative, ad - bc becomes ad plus a positive number.'
        },
        {
          id: 'q-em-matrices-3',
          quizId: 'quiz-shs1-em-t3-matrices',
          questionText: 'The matrix [k 2; 3 6] is singular. Find the value of k.',
          optionA: '1',
          optionB: '2',
          optionC: '3',
          optionD: '4',
          correctOption: 'A',
          subConcept: 'Singular matrices',
          explanation: 'Singular means det = 0: 6k - 2 x 3 = 0 gives 6k = 6 and k = 1. Testing each option in the determinant works, but forming the equation directly is faster and always exact.',
          remediationTip: 'The word singular is a command: set ad - bc = 0 and solve.'
        },
        {
          id: 'q-em-matrices-4',
          quizId: 'quiz-shs1-em-t3-matrices',
          questionText: 'Simplify the product [1 2; 3 4][5; 6].',
          optionA: '[5; 12]',
          optionB: '[39; 17]',
          optionC: '[17; 39]',
          optionD: '[17; 33]',
          correctOption: 'C',
          subConcept: 'Matrix multiplication',
          explanation: 'Row by column: top entry 1 x 5 + 2 x 6 = 17, bottom entry 3 x 5 + 4 x 6 = 39. The option [5; 12] pairs entries side by side instead of crossing row with column, the classic elementwise slip.',
          remediationTip: 'Write the two products of each row before adding them: 1(5) + 2(6) and 3(5) + 4(6).'
        },
        {
          id: 'q-em-matrices-5',
          quizId: 'quiz-shs1-em-t3-matrices',
          questionText: 'Find the value of the determinant |1 2 1; 0 3 1; 2 1 1|.',
          optionA: '0',
          optionB: '6',
          optionC: '-6',
          optionD: '2',
          correctOption: 'A',
          subConcept: '3x3 determinant',
          explanation: 'Expanding along row 1: 1(3 - 1) - 2(0 - 2) + 1(0 - 6) = 2 + 4 - 6 = 0. The option 6 comes from adding the third minor as +6, missing the minus sign on the last term, which also erases the singular-matrix conclusion.',
          remediationTip: 'Write the signs +, -, + across the first row before you touch any minor.'
        }
      ]
    }
  },

  // =========================================================================
  // SHS 1 TERM 3 — TOPIC 11: RELATIONS AND FUNCTIONS
  // =========================================================================
  {
    id: 'shs1-em-t3-relations-functions',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 3,
    orderIndex: 11,
    title: 'Relations and Functions: Domain, Range, Composite and Inverse',
    description: 'Mapping notation, domain, codomain and range, the function test, composite functions fg and gf, and inverse functions including recovering an unknown function from a given composite.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• A relation from set X to set Y is any selection of ordered pairs (x, y) with x in X and y in Y.
• Domain = set of first coordinates; codomain = the full set the second coordinates are drawn from; range = set of second coordinates actually used.
  - For R = {(1, 2), (2, 4), (3, 6), (4, 8)}: domain {1, 2, 3, 4}, range {2, 4, 6, 8}.
• A relation is a FUNCTION if every element of the domain maps to exactly one element of the codomain; one input, one output.
• Mapping notation f: x maps to 2x + 1 reads as "f sends x to 2x + 1"; function notation f(x) = 2x + 1 sends x to the image f(x).
• Image of 4 under f(x) = 2x + 1 is f(4) = 9; the object that maps to 9 is the solution of 2x + 1 = 9, namely x = 4.
• Composite function gf means apply f FIRST, then g: gf(x) = g(f(x)).
  - f(x) = 2x + 3, g(x) = x^2 gives gf(x) = (2x + 3)^2 = 4x^2 + 12x + 9.
• Order matters: with f(x) = x + 2 and g(x) = 3x, gf(x) = 3x + 6 but fg(x) = 3x + 2; the two differ.
• To recover g from gf, substitute the inner output: f(x) = x + 4, gf(x) = 3x + 5. Put u = x + 4, so x = u - 4 and g(u) = 3(u - 4) + 5 = 3u - 7, hence g(x) = 3x - 7.
• A function has an inverse only if it is one-to-one: different inputs must give different outputs.
• To find f^-1, write y = f(x), solve for x in terms of y, then rewrite in x.
  - f(x) = (2x + 1)/(x - 3) gives x = (3y + 1)/(y - 2), so f^-1(x) = (3x + 1)/(x - 2).
• Check an inverse both ways: f(f^-1(x)) = x and f^-1(f(x)) = x; for f(x) = 2x + 1, f^-1(7) = 3 because 2(3) + 1 = 7.
• The graphs of f and f^-1 are reflections of each other in the line y = x.`,
    detailedNotes: {
      overview: 'Relations and functions are the grammar of senior high algebra: every later topic from quadratics to calculus speaks in f(x), domain and range. WASSCE rewards three precise skills at SHS 1 level — naming domain, codomain and range from a list of ordered pairs or a rule; composing two functions in the stated order; and undoing a function with its inverse. The favourite exam shape is a two-part question: given f(x) = 2x + 3 and g(x) = x^2, find gf(x), then solve gf(x) = 25. Students who apply f first and keep the plus-minus branch when a square is undone collect full marks while others lose half.',
      introduction: 'Think of a function as a machine: an object enters, one image leaves. Composition wires two machines in series and the notation gf tells you which one the input enters first — the right-hand letter acts first, so f runs before g. An inverse machine rewinds, which exists only when nothing was merged on the way out.',
      realWorldContext: 'A form master at a school in Achimota records each student index number against a test score; the index-to-score list is a relation, and its range is the set of scores actually obtained. Mobile money in Ghana encodes the same idea: the transfer charge is a function of the amount sent, and a customer who paid a known charge can run the rule backwards to recover the amount sent, exactly like an inverse function.',
      objectives: [
        'List the domain, codomain and range of a given relation from ordered pairs or a rule',
        'Decide whether a relation is a function and justify with the exactly-one-image test',
        'Compute composite functions gf(x) and fg(x) and explain why order matters',
        'Find an unknown function g or f when a composite and the other function are given',
        'Determine the inverse function f^-1 of a linear or linear-fractional function and verify it'
      ],
      sections: [
        {
          title: 'Relations, Ordered Pairs, Domain and Range',
          content: 'A relation from set X to set Y is a chosen collection of ordered pairs (x, y). The domain is the set of all first coordinates, the codomain is the whole of Y, and the range is the set of second coordinates that the relation actually uses. For R = {(1, 2), (2, 4), (3, 6), (4, 8)} the domain is {1, 2, 3, 4} and the range is {2, 4, 6, 8}; the two must never be interchanged, and mixing them up is a common Paper 1 trap. Relations can be given as a rule, for example y = 2x with x in {1, 2, 3}: generate the pairs first, then read off domain and range. An arrow diagram from set A to set B shows the same information graphically, and examiners ask you to extract the set of ordered pairs from the arrows.',
          bulletPoints: [
            'Domain is first coordinates, range is second coordinates; the codomain can be bigger than the range.',
            'From a rule with a stated domain, list every pair before answering.',
            'The graph of a relation is the set of its ordered pairs plotted as points.',
            'A relation may leave some elements unmapped; only functions must map every domain element.'
          ],
          keyTakeaway: 'Generate the pairs, then read: domain on the left, range on the right, codomain is the declared target set.',
          realWorldExample: 'A Kintampo tutorial register pairs index numbers {8, 14, 21} with scores {60, 75, 60}; the range of scores is {60, 75} even though three students appear on the left.'
        },
        {
          title: 'Functions as Rules: Images and Objects',
          content: 'A function is a relation in which every element of the domain maps to EXACTLY ONE element of the codomain. One input may share its output with another input (many-to-one is allowed), but an input with two outputs disqualifies the relation. The rule x maps to x^2 with domain {-2, -1, 0, 1, 2} is a function because 2 and -2 both image to 4 without conflict. Written f(x) = 3x - 2, the number f(4) = 10 is the image of 4; conversely the object whose image is 10 solves 3x - 2 = 10, giving x = 4. Image questions are forward substitutions; object questions run the equation backwards, and WASSCE loves the phrase "find the object whose image is 7".',
          bulletPoints: [
            'Exactly one image per domain element is the function test; draw two arrows from one number and it fails.',
            'Image of a = f(a); object for b = solve f(x) = b.',
            'A linear function ax + b is one-to-one when a is not zero; x^2 is not one-to-one on the full real line.',
            'Restricting the domain can turn a many-output rule into a function, e.g. x^2 on positive numbers only.'
          ],
          keyTakeaway: 'Forward for images, solve backwards for objects; a function never offers a choice of output.',
          realWorldExample: 'Mobile money fee: charge = 0.05 x amount sent plus GH¢2. Sending GH¢200 images GH¢12; given a GH¢12 fee, the object (amount sent) recovers as (12 - 2)/0.05 = GH¢200.'
        },
        {
          title: 'Composite Functions: gf means f First',
          content: 'The composite gf(x) means g(f(x)): feed x into f, then feed the result into g. With f(x) = 2x + 3 and g(x) = x^2, gf(x) = (2x + 3)^2, which expands to 4x^2 + 12x + 9. The reverse order gives fg(x) = 2x^2 + 3, a different function — composition is not commutative and the exam question always specifies the order. The higher-skill version recovers an unknown function: if f(x) = x + 4 and gf(x) = 3x + 5, set u = x + 4 so x = u - 4; then g(u) = 3(u - 4) + 5 = 3u - 7, hence g(x) = 3x - 7. Substitute a test number through both machines: f(1) = 5, g(5) = 8, and 3(1) + 5 = 8 confirms the chain.',
          bulletPoints: [
            'Read gf right to left for the ORDER of action: f acts first even though g is written first.',
            'Bracket carefully when squaring or negating a whole linear expression.',
            'Equating coefficients solves unknown-function questions: if gf(x) = ax + b for found a, b, read g directly.',
            'Composite with a number: gf(2) = g(f(2)) = g(7) = 49 for f(x) = 2x + 3, g(x) = x^2.'
          ],
          keyTakeaway: 'Two machines in series: inner letter acts first, and the order changes the answer.',
          realWorldExample: 'A cloth price at Makola passes through two stages: wholesale rule f(x) = x + 4 and retail markup g(x) = 3x - 7 compose to gf(x) = 3x + 5, so a GH¢10 wholesale cost reaches customers at GH¢35.'
        },
        {
          title: 'Inverse Functions: Rewinding the Machine',
          content: 'A function has an inverse f^-1 only when it is one-to-one, because rewinding must land on a single original. The algebraic recipe is: write y = f(x), solve for x in terms of y, then rename y as x. For f(x) = (2x + 1)/(x - 3): y(x - 3) = 2x + 1, so xy - 3y = 2x + 1, hence x(y - 2) = 3y + 1 and x = (3y + 1)/(y - 2); therefore f^-1(x) = (3x + 1)/(x - 2). Verify by composition: f^-1(5) = 16/3 and f(16/3) = (35/3) divided by (7/3) returns 5. On a simple rule, f^-1(7) for f(x) = 2x + 1 just solves 2x + 1 = 7, giving 3. Graphically, f and f^-1 mirror each other across the line y = x, and the domain of f becomes the range of f^-1.',
          bulletPoints: [
            'One-to-one is the licence for an inverse; x^2 on all reals has none without a restricted domain.',
            'Collect x-terms on one side and factor before dividing.',
            'The restrictions travel: if f excludes x = 3, then f^-1 excludes the matching value x = 2 here.',
            'Check both directions once: f(f^-1(x)) = x and f^-1(f(x)) = x.',
            'f^-1 means the inverse function, never the reciprocal 1/f.'
          ],
          keyTakeaway: 'Solve y = f(x) for x, swap the letter, and verify by feeding the answer back through the original machine.',
          realWorldExample: 'A coded score in Ho uses f(x) = 2x + 3; a decoded mark of 15 came from 2x + 3 = 15, i.e. the original x = 6, recovered with f^-1(x) = (x - 3)/2.'
        }
      ],
      commonMistakes: [
        'Reading gf as g-then-f: with f(x) = x + 2 and g(x) = 3x, gf(x) = 3(x + 2) = 3x + 6; the answer 3x + 2 belongs to fg, the wrong order.',
        'Expanding (2x + 3)^2 as 4x^2 + 9: the middle term 2 x 2x x 3 = 12x is dropped and the square is wrong.',
        'Solving (2x + 3)^2 = 25 as 2x + 3 = 5 only: the negative root 2x + 3 = -5 also works, giving x = -4, so a single solution loses an A1.',
        'Treating f^-1 as 1/f: for f(x) = 2x + 1 the reciprocal is 1/(2x + 1), but the inverse function is f^-1(x) = (x - 1)/2.',
        'Confusing domain and range of a relation: for {(1, 2), (2, 4), (3, 6), (4, 8)} the range is {2, 4, 6, 8}; reporting {1, 2, 3, 4} answers the domain question instead.'
      ],
      wassceExamTips: [
        'On Paper 2 a composite-function part worth 3 marks pays M1 for writing g(f(x)) with f substituted inside g, so show the substitution line even when the expansion looks obvious.',
        'When solving gf(x) = 25, write both branches 2x + 3 = 5 and 2x + 3 = -5 on separate lines; examiners look for the second branch as a distinct A1.',
        'On Paper 1 a domain-and-range item is answered in seconds by listing the pairs; do not sketch, just read coordinates.',
        'For an inverse of (ax + b)/(cx + d), if the options are given, test one number through f and back through each candidate inverse instead of doing full algebra under time pressure.',
        'Carry-through is treated kindly: if your expansion of gf is wrong but your later equation is solved correctly from your own expression, marks are awarded afr for the second part.'
      ],
      summaryChecklist: [
        'Can I list domain, codomain and range of a relation from pairs or from a rule?',
        'Can I decide whether a relation is a function using the exactly-one-image test?',
        'Can I compute gf(x) and fg(x) and state why they differ?',
        'Can I recover an unknown function from a given composite such as gf(x) = 3x + 5?',
        'Can I find and verify the inverse of a linear or linear-fractional function?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-relations-1',
        title: 'Composite Function and an Equation Built from It',
        problem: 'Given f(x) = 2x + 3 and g(x) = x^2, (a) find gf(x) in its simplest form; (b) solve gf(x) = 25.',
        stepByStepSolution: [
          'Step 1 (M1): Interpret gf(x) as g(f(x)): the function f acts first, then g squares the result.',
          'Step 2 (M1): Substitute: g(f(x)) = g(2x + 3) = (2x + 3)^2.',
          'Step 3 (A1): Expand: (2x + 3)^2 = 4x^2 + 12x + 9.',
          'Step 4 (M1): Set (2x + 3)^2 = 25, so 2x + 3 = 5 or 2x + 3 = -5.',
          'Step 5 (M1): First branch: 2x = 2, hence x = 1.',
          'Step 6 (M1): Second branch: 2x = -8, hence x = -4.',
          'Step 7 (A1): x = 1 or x = -4; check: f(1) = 5 and g(5) = 25; f(-4) = -5 and g(-5) = 25.'
        ],
        keyTakeaway: 'Composite first, then solve: squaring means two branches, and both must be checked in the machines.'
      },
      {
        id: 'ex-shs1-em-relations-2',
        title: 'Inverse of a Linear-Fractional Function',
        problem: 'Given f(x) = (2x + 1)/(x - 3), x not equal to 3, find f^-1(x).',
        stepByStepSolution: [
          'Step 1 (M1): Write y = (2x + 1)/(x - 3).',
          'Step 2 (M1): Multiply both sides by (x - 3): y(x - 3) = 2x + 1.',
          'Step 3 (M1): Expand and collect x-terms: xy - 3y = 2x + 1 gives xy - 2x = 3y + 1.',
          'Step 4 (M1): Factor: x(y - 2) = 3y + 1, so x = (3y + 1)/(y - 2).',
          'Step 5 (A1): Rename y as x: f^-1(x) = (3x + 1)/(x - 2), x not equal to 2.',
          'Step 6 (M1): Verify with x = 5: f^-1(5) = 16/3, and f(16/3) = (32/3 + 1)/(16/3 - 3) = (35/3)/(7/3).',
          'Step 7 (A1): (35/3) divided by (7/3) = 5, which returns the input, so f^-1(x) = (3x + 1)/(x - 2).'
        ],
        keyTakeaway: 'Solve for x, rename, then feed one number both ways through the pair of machines to prove the inverse.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t3-relations',
      topicId: 'shs1-em-t3-relations-functions',
      title: 'Relations and Functions Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-relations-1',
          quizId: 'quiz-shs1-em-t3-relations',
          questionText: 'The relation R = {(1, 2), (2, 4), (3, 6), (4, 8)} is defined on the natural numbers. Which of the following is the range of R?',
          optionA: '{1, 2, 3, 4}',
          optionB: '{1, 2, 4, 8}',
          optionC: '{2, 4, 6, 8}',
          optionD: '{2, 4, 8}',
          correctOption: 'C',
          subConcept: 'Domain and range of a relation',
          explanation: 'The range is the set of second coordinates of the ordered pairs: {2, 4, 6, 8}. Option A is the domain, the first coordinates, the standard swap-up trap.',
          remediationTip: 'Range rhymes with arrange: it is the right-hand side of every pair.'
        },
        {
          id: 'q-em-relations-2',
          quizId: 'quiz-shs1-em-t3-relations',
          questionText: 'Given f(x) = x + 2 and g(x) = 3x, find gf(x).',
          optionA: '3x + 6',
          optionB: '3x + 2',
          optionC: 'x + 6',
          optionD: '3x^2 + 6x',
          correctOption: 'A',
          subConcept: 'Composite functions',
          explanation: 'gf(x) = g(f(x)) = g(x + 2) = 3(x + 2) = 3x + 6. Option B, 3x + 2, is fg(x) = f(g(x)), the composite in the wrong order.',
          remediationTip: 'The inner letter f acts first; write g(box) before you put anything in the box.'
        },
        {
          id: 'q-em-relations-3',
          quizId: 'quiz-shs1-em-t3-relations',
          questionText: 'Given f(x) = 2x + 1, find the value of f^-1(7).',
          optionA: '4',
          optionB: '7',
          optionC: '13',
          optionD: '3',
          correctOption: 'D',
          subConcept: 'Inverse function values',
          explanation: 'f^-1(7) is the object that images to 7: solve 2x + 1 = 7, so 2x = 6 and x = 3. Option A computes (7 + 1)/2, undoing the addition but forgetting the sign order when rearranging.',
          remediationTip: 'Set f(x) equal to the target number and solve; that solution IS f^-1 of the target.'
        },
        {
          id: 'q-em-relations-4',
          quizId: 'quiz-shs1-em-t3-relations',
          questionText: 'Given f(x) = x + 4 and gf(x) = 3x + 5, find g(x).',
          optionA: '3x + 17',
          optionB: '3x - 7',
          optionC: '3x - 1',
          optionD: '3x + 1',
          correctOption: 'B',
          subConcept: 'Unknown function from a composite',
          explanation: 'Put u = x + 4, so x = u - 4 and g(u) = 3(u - 4) + 5 = 3u - 7; hence g(x) = 3x - 7. Check: g(f(x)) = 3(x + 4) - 7 = 3x + 5. Option A replaces x by x + 4 in the wrong direction, adding 12.',
          remediationTip: 'To recover the outer function, subtract the inner shift from the composite instead of adding it.'
        },
        {
          id: 'q-em-relations-5',
          quizId: 'quiz-shs1-em-t3-relations',
          questionText: 'A mapping is defined by x maps to x^2 - 1 on the domain {-2, 0, 3}. Which of the following is the range?',
          optionA: '{-1, 3, 8}',
          optionB: '{-5, -1, 8}',
          optionC: '{-2, 0, 3}',
          optionD: '{3, 8}',
          correctOption: 'A',
          subConcept: 'Images under a rule',
          explanation: 'Computing each image: (-2)^2 - 1 = 3, 0^2 - 1 = -1, 3^2 - 1 = 8, so the range is {-1, 3, 8}. Option B squares -2 as -4, the sign slip that yields -5; option C lists the domain.',
          remediationTip: 'Always bracket before squaring: (-2)^2 is 4, never -4.'
        }
      ]
    }
  },

  // =========================================================================
  // SHS 1 TERM 3 — TOPIC 12: TRIGONOMETRY OF ANY ANGLE
  // =========================================================================
  {
    id: 'shs1-em-t3-trigonometry-any-angle',
    subjectId: 'elective-maths',
    level: 'SHS 1',
    term: 3,
    orderIndex: 12,
    title: 'Trigonometry of Any Angle',
    description: 'Extending sine, cosine and tangent beyond 90 degrees with the ASTC sign rule, related acute angles, exact values for 30-45-60 and their multiples, one cycle of each curve, and degree-radian working.',
    isFreeTrial: false,
    isVip: false,
    keyNotes: `• Place the angle in standard position: vertex at the origin, initial arm along the positive x-axis; the terminal arm decides the quadrant.
• Quadrants: 0 to 90 is I, 90 to 180 is II, 180 to 270 is III, 270 to 360 is IV, all in degrees.
• Sign rule (ASTC): in quadrant I ALL ratios are positive, in II only SINE (and its reciprocal) is positive, in III only TANGENT is positive, in IV only COSINE is positive.
• Related (reference) acute angle: in II it is 180 - theta; in III it is theta - 180; in IV it is 360 - theta. The magnitude of the ratio equals the ratio of the reference angle; the quadrant fixes the sign.
  - sin 150 = sin(180 - 150) = sin 30 = 1/2 (positive in II); cos 210 = -cos 30 = -(sqrt 3)/2 (negative in III); tan 250 = +tan 70, positive in III.
• Exact values to memorise (degrees): sin 30 = 1/2, cos 60 = 1/2, sin 45 = cos 45 = (sqrt 2)/2, tan 45 = 1, tan 60 = sqrt 3, tan 30 = (sqrt 3)/3.
• One cycle of y = sin x from 0 to 360: starts 0, peaks 1 at 90, returns 0 at 180, trough -1 at 270, back to 0 at 360; period 360 degrees.
• Cosine is the same wave shifted left by 90 degrees: it starts at 1; tangent has period 180 degrees with asymptotes at 90 and 270.
• Given sin theta = 3/5 with theta obtuse (90 < theta < 180): cos^2 theta = 1 - 9/25 = 16/25 and cosine is negative in II, so cos theta = -4/5 and tan theta = -3/4.
• Solving in a range: tan theta = -1 for 0 <= theta <= 360 has reference angle 45; tangent is negative in II and IV, so theta = 135 or 315 degrees.
• Radians: pi radians = 180 degrees, so 120 degrees = 120 x pi/180 = 2 pi/3 radians; state the unit in every line of working.
• Angles beyond one turn: 400 degrees is coterminal with 40 degrees (400 - 360), so all ratios repeat every 360 degrees.
• sin 240 = -(sqrt 3)/2 and cos 240 = -1/2: reference angle 60 in quadrant III where only tangent is positive.`,
    detailedNotes: {
      overview: 'Right-triangle trigonometry stops at 90 degrees; WASSCE does not. Trigonometry of any angle puts the angle on a coordinate plane, defines sine and cosine from the coordinates of a point on the terminal arm, and installs the ASTC sign rule as the traffic light of the topic. SHS 1 questions test three moves: locate the quadrant, reduce to the related acute angle, and attach the correct sign — often on exact values for 30, 45 and 60 degrees. The same ideas then power solving simple angle equations in a stated range and reading one full cycle of each curve, both steady Paper 1 earners.',
      introduction: 'Imagine a fan blade pivoted at the origin, starting flat along the positive x-axis and sweeping anticlockwise. Wherever it stops, its angle, even 250 degrees, is an angle of the plane, and the ratio definitions survive because they are built from the coordinates of a point on the blade. Everything in this topic follows one promise: magnitudes come from the reference angle, signs come from the quadrant.',
      realWorldContext: 'A clock hand at Accra Central railway station sweeps from the 12 position through 250 degrees, landing in the third quadrant where a student can still read off the tangent as positive. Surveyors setting out a school compound boundary in Tamale record bearings as angles beyond 90 degrees, and engineers on the Tema harbour works measure wheel rotations of 400 degrees that behave exactly like 40 degrees, because the trigonometry repeats every full turn.',
      objectives: [
        'Locate any angle between 0 and 360 degrees in its quadrant and state which ratios are positive there',
        'Find the related acute angle for angles in any quadrant and use it to evaluate sine, cosine and tangent',
        'Recall and apply the exact values for 30, 45 and 60 degrees and their quadrant multiples',
        'Describe one complete cycle of y = sin x, y = cos x and y = tan x, including maxima, minima and zeros',
        'Solve simple equations such as tan theta = -1 in the range 0 to 360 degrees and convert between degrees and radians'
      ],
      sections: [
        {
          title: 'Standard Position and the ASTC Sign Rule',
          content: 'An angle is in standard position when its vertex sits at the origin and its initial arm runs along the positive x-axis; the terminal arm, reached by anticlockwise sweeping, names the quadrant: between 0 and 90 degrees quadrant I, 90 to 180 quadrant II, 180 to 270 quadrant III, 270 to 360 quadrant IV. For a point (x, y) at distance r from the origin on the terminal arm, sin theta = y/r, cos theta = x/r and tan theta = y/x, so sine and cosine inherit the signs of the coordinates and tangent the sign of their quotient. That is the whole ASTC rule: ALL positive in I, Sine only in II, Tangent only in III, Cosine only in IV. The rule is not a mnemonic to recite blindly — it is a conclusion from coordinates, and explaining it with a point such as (-3, 4) earns method credit in theory papers.',
          bulletPoints: [
            'x is negative in quadrants II and III; y is negative in III and IV; r is always positive.',
            'tan theta = sin theta / cos theta, so it is positive exactly where sine and cosine share a sign: I and III.',
            'Coterminal angles differ by 360 degrees and share every ratio: 400 degrees behaves like 40 degrees.',
            'On the axes themselves the ratios take the boundary values sin 90 = 1, cos 90 = 0, tan 0 = 0.'
          ],
          keyTakeaway: 'Coordinates decide signs: ASTC is just the sign pattern of (x, y) across the four quadrants.',
          realWorldExample: 'A ceiling fan blade in a classroom in Ho rests at 250 degrees: the point at the blade tip has negative x and negative y, so both coordinates are negative while tangent, their ratio, is positive.'
        },
        {
          title: 'Related Acute Angles and Evaluating Ratios Beyond 90 Degrees',
          content: 'Every non-axis angle has a related (reference) acute angle made with the x-axis: in quadrant II it is 180 - theta, in III it is theta - 180, and in IV it is 360 - theta. The rule has two steps — magnitude from the reference angle, sign from the quadrant. For sin 150: reference angle 180 - 150 = 30 and quadrant II accepts sine, so sin 150 = sin 30 = 1/2. For cos 210: reference 210 - 180 = 30 and cosine is negative in III, so cos 210 = -(sqrt 3)/2. For tan 250: reference 250 - 180 = 70 and tangent is positive in III, so tan 250 = tan 70, approximately 2.747. Combining evaluations is the classic single-mark Paper 1 item: sin 150 + tan 225 = 1/2 + 1 = 3/2, because 225 sits in III where tangent is positive with reference 45.',
          bulletPoints: [
            'Always sketch the terminal arm and mark the reference angle beside the x-axis before choosing the sign.',
            'The reference angle of 130 degrees is 50 degrees, of 250 degrees is 70 degrees, of 300 degrees is 60 degrees.',
            'A missing minus sign in quadrant II or IV is the single most common wrong answer examiners record.',
            'Use cos(180 - theta) = -cos theta, sin(180 + theta) = -sin theta, tan(360 - theta) = -tan theta as tested identities.'
          ],
          keyTakeaway: 'Two steps never to merge: reference angle for the value, quadrant for the sign.',
          realWorldExample: 'A fisherman leaving Elmina casts his net line at 130 degrees to the shore road; the acute angle the line makes with the road is its reference angle, 50 degrees, which is what his measuring tape actually compares.'
        },
        {
          title: 'Exact Values and One Cycle of Each Curve',
          content: 'Flawless exact values anchor the topic: sin 30 = 1/2, sin 45 = (sqrt 2)/2, sin 60 = (sqrt 3)/2, with cosine reading the same list backwards because cos theta = sin(90 - theta), plus tan 45 = 1 and tan 60 = sqrt 3. Every multiple of these angles in quadrants II, III and IV is evaluated by sign and reference, so sin 120 = (sqrt 3)/2 and sin 240 = -(sqrt 3)/2. The graphs complete the picture. Over one cycle from 0 to 360 degrees, y = sin x starts at 0, rises to its maximum 1 at 90, crosses 0 at 180, falls to -1 at 270 and closes at 0: its period is 360 degrees and its range is -1 to 1. Cosine is the same wave opening at 1 instead, and y = tan x repeats every 180 degrees with vertical asymptotes at 90 and 270 where cosine vanishes. Examiners ask for the key points, not artistic sketching: mark the zeros, the maximum, the minimum.',
          bulletPoints: [
            'Surd forms are exact: (sqrt 3)/2 is the exact value and 0.866 its 3-significant-figure approximation; name which is which.',
            'Sine and cosine oscillate between -1 and 1; tangent takes every real value once per 180 degrees.',
            'Zeros of sin x in one cycle: 0, 180, 360 degrees; zeros of cos x: 90, 270 degrees.',
            'A negative sign before the function flips the curve in the x-axis, so y = -sin x dips first.'
          ],
          keyTakeaway: 'Memorise the six exact values, then let the quadrant do the rest; sketch one cycle to settle any sign argument.',
          realWorldExample: 'The height of a point on a ferris wheel at a festival near Kumasi traces one sine cycle per revolution, peaking after a quarter turn, which is exactly why sine reads 1 at 90 degrees.'
        },
        {
          title: 'Degrees, Radians and Simple Angle Equations',
          content: 'The radian ties the circle to its radius: pi radians = 180 degrees, so to convert degrees to radians multiply by pi/180 and to convert back multiply by 180/pi. Thus 120 degrees = 120 x pi/180 = 2 pi/3 radians, and 2 pi/5 radians = 72 degrees. Keep the unit explicit in every line; a solution that drifts between degrees and radians is marked wrong even when the digits match. Solving simple equations uses the same quadrant symmetry: for tan theta = -1 with 0 <= theta <= 360, the reference angle is 45 degrees and tangent is negative in II and IV, giving theta = 180 - 45 = 135 degrees and theta = 360 - 45 = 315 degrees — both check because tan 135 = tan 315 = -1. Similarly sin theta = 1/2 gives 30 and 150 degrees. Listing every solution inside the stated range is where most A1 marks hide.',
          bulletPoints: [
            'Multiply by pi/180 for radians; never mix units inside one equation.',
            'For sin theta = a with a positive, expect two solutions in 0 to 360: the reference angle and its supplement.',
            'For cos theta = a with a negative, both the quadrant II and III answers must satisfy the range.',
            'General angles add 360n only when the question asks for all solutions, e.g. theta = 135 + 360n.'
          ],
          keyTakeaway: 'Ranges decide the count of answers: hunt for the mirror solution in the second valid quadrant before closing.',
          realWorldExample: 'A ride operator at a park in Achimota sets a mechanical arm to 2 pi/3 radians, which is 120 degrees; the instrument manual quotes both units side by side, and so should you.'
        }
      ],
      commonMistakes: [
        'Writing sin 150 = -(1/2): the magnitude came from the right reference angle 30, but sine is positive in quadrant II; the sign came from forgetting that S is the standing letter in II.',
        'Using the wrong reference angle for 300 degrees: the related acute angle is 360 - 300 = 60, not 90 - ... 30; sin 300 = -(sqrt 3)/2, while -(1/2) belongs to cos 240.',
        'Answering tan theta = -1 with theta = 135 degrees only: tangent is negative in quadrant IV as well, so 315 degrees is the missing A1.',
        'Treating 400 degrees as unmeasurable: subtract one full turn, 400 - 360 = 40 degrees, and every ratio of 400 degrees equals that of 40 degrees.',
        'Converting 120 degrees to radians as 3 pi/2: the correct factor is pi/180, giving 2 pi/3; 3 pi/2 is 270 degrees, the result of multiplying by 180/pi instead of pi/180.'
      ],
      wassceExamTips: [
        'On Paper 1 an any-angle item is a 60-second question: draw the quadrant arrow on your rough page, name the reference angle, then choose the sign; do not reach for four-figure tables when 150 degrees is a disguised 30.',
        'On Paper 2 the method marks split as M1 for stating the reference angle, M1 for the sign decision from the quadrant, and A1 for the final exact value — so write the sentence "sine positive in II" down; it is worth a mark.',
        'When a question says 90 <= theta <= 180, that interval is a command about the sign; state the quadrant in your solution line to keep examiner follow-through in your favour.',
        'For equations on a closed range like 0 <= theta <= 360, list solutions in ascending order and count them; tangent questions expect two answers per cycle, sine and cosine likewise.',
        'If the paper gives radians, answer in radians; a correct 120 degrees where 2 pi/3 was demanded is typically marked as a unit error with the method credited afr.'
      ],
      summaryChecklist: [
        'Can I place any angle from 0 to 360 degrees in its quadrant and quote the ASTC signs?',
        'Can I reduce a ratio such as cos 210 degrees to its related acute angle with the right sign?',
        'Can I state the exact values for 30, 45 and 60 degrees and use them in every quadrant?',
        'Can I sketch one cycle of sine, cosine and tangent marking zeros, maxima and minima?',
        'Can I solve an equation like tan theta = -1 over 0 to 360 degrees and convert between degrees and radians?'
      ]
    },
    examples: [
      {
        id: 'ex-shs1-em-trig-1',
        title: 'Evaluating sin 150 degrees + tan 225 degrees',
        problem: 'Evaluate sin 150 degrees + tan 225 degrees without tables or a calculator, leaving the answer as an exact fraction. (All angles are in degrees.)',
        stepByStepSolution: [
          'Step 1 (M1): Locate 150 degrees in quadrant II with reference angle 180 - 150 = 30 degrees; sine is positive in II, so sin 150 = sin 30.',
          'Step 2 (M1): Locate 225 degrees in quadrant III with reference angle 225 - 180 = 45 degrees; tangent is positive in III, so tan 225 = tan 45.',
          'Step 3 (M1): Recall the exact values sin 30 = 1/2 and tan 45 = 1.',
          'Step 4 (A1): Add: sin 150 + tan 225 = 1/2 + 1 = 3/2.',
          'Step 5 (A1): Final answer: 3/2, that is 1.5, both angles measured in degrees.'
        ],
        keyTakeaway: 'Reduce each term to its reference angle separately, sign it with ASTC, then add the exact values.'
      },
      {
        id: 'ex-shs1-em-trig-2',
        title: 'Finding cos and tan from sin in an Obtuse Range',
        problem: 'Given sin theta = 3/5 where theta is obtuse, that is 90 degrees < theta < 180 degrees, find cos theta and tan theta.',
        stepByStepSolution: [
          'Step 1 (M1): Use the identity sin^2 theta + cos^2 theta = 1, so cos^2 theta = 1 - (3/5)^2 = 1 - 9/25 = 16/25.',
          'Step 2 (M1): Take the square root: cos theta = 4/5 or -4/5.',
          'Step 3 (M1): Since theta lies in quadrant II (90 degrees to 180 degrees), cosine is negative by ASTC.',
          'Step 4 (A1): cos theta = -4/5.',
          'Step 5 (M1): Divide: tan theta = sin theta / cos theta = (3/5) / (-4/5) = -3/4.',
          'Step 6 (A1): tan theta = -3/4; tangent is negative in II, consistent with the sign rule.',
          'Step 7 (A1): Final answer: cos theta = -4/5 and tan theta = -3/4; numerically theta is about 143.13 degrees, where sin is 0.6, cos is -0.8 and tan is -0.75 (degrees).'
        ],
        keyTakeaway: 'The identity gives the magnitude; only the stated range chooses the sign.'
      }
    ],
    quiz: {
      id: 'quiz-shs1-em-t3-trig',
      topicId: 'shs1-em-t3-trigonometry-any-angle',
      title: 'Trigonometry of Any Angle Quiz',
      timeLimitMinutes: 10,
      passScorePercentage: 70,
      questions: [
        {
          id: 'q-em-trig-1',
          quizId: 'quiz-shs1-em-t3-trig',
          questionText: 'In which quadrant does the angle 250 degrees lie, and what is the sign of tan 250 degrees?',
          optionA: 'second quadrant, negative',
          optionB: 'third quadrant, negative',
          optionC: 'fourth quadrant, positive',
          optionD: 'third quadrant, positive',
          correctOption: 'D',
          subConcept: 'ASTC sign rule',
          explanation: '250 degrees lies between 180 and 270, so it is in quadrant III, where only tangent is positive; indeed tan 250 = tan 70, about 2.747. Option B pairs the correct quadrant with the sign for sine or cosine instead.',
          remediationTip: 'Write T for tangent at the bottom of quadrant III on your sketch; ASTC puts Tangent there every time.'
        },
        {
          id: 'q-em-trig-2',
          quizId: 'quiz-shs1-em-t3-trig',
          questionText: 'Find the related (reference) acute angle for 130 degrees.',
          optionA: '40 degrees',
          optionB: '50 degrees',
          optionC: '130 degrees',
          optionD: '230 degrees',
          correctOption: 'B',
          subConcept: 'Related acute angles',
          explanation: 'In quadrant II the reference angle is 180 - 130 = 50 degrees. Option A gives the complement 90 - 50 instead, which measures the angle to the y-axis, not to the x-axis as required.',
          remediationTip: 'The reference angle is always measured to the nearer x-axis; pick the formula by quadrant.'
        },
        {
          id: 'q-em-trig-3',
          quizId: 'quiz-shs1-em-t3-trig',
          questionText: 'Find the exact value of sin 300 degrees.',
          optionA: '(sqrt 3)/2',
          optionB: '1/2',
          optionC: '-(sqrt 3)/2',
          optionD: '-1/2',
          correctOption: 'C',
          subConcept: 'Exact values beyond 90 degrees',
          explanation: '300 degrees is in quadrant IV with reference angle 360 - 300 = 60 degrees; sine is negative in IV, so sin 300 = -sin 60 = -(sqrt 3)/2. Option A keeps the magnitude but forgets the quadrant sign, the most-marked slip on this item.',
          remediationTip: 'Say the two-step aloud: reference angle first, sign from the quadrant second.'
        },
        {
          id: 'q-em-trig-4',
          quizId: 'quiz-shs1-em-t3-trig',
          questionText: 'Solve tan theta = -1 for 0 degrees <= theta <= 360 degrees.',
          optionA: 'theta = 135 degrees or 315 degrees',
          optionB: 'theta = 45 degrees or 225 degrees',
          optionC: 'theta = 135 degrees only',
          optionD: 'theta = 315 degrees only',
          correctOption: 'A',
          subConcept: 'Solving angle equations',
          explanation: 'The reference angle for |tan theta| = 1 is 45 degrees; tangent is negative in quadrants II and IV, so theta = 180 - 45 = 135 degrees and theta = 360 - 45 = 315 degrees, and both satisfy the range. Option B solves tan theta = +1, the sign error the question is built to catch.',
          remediationTip: 'Draw the two arms where tangent dips negative before writing numbers; the picture guarantees both answers appear.'
        },
        {
          id: 'q-em-trig-5',
          quizId: 'quiz-shs1-em-t3-trig',
          questionText: 'Express 120 degrees in radians.',
          optionA: 'pi/3 radians',
          optionB: '2 pi/3 radians',
          optionC: '5 pi/6 radians',
          optionD: '3 pi/2 radians',
          correctOption: 'B',
          subConcept: 'Degree-radian conversion',
          explanation: 'Radians = degrees x pi/180, so 120 x pi/180 = 2 pi/3. Option D results from multiplying by 180/pi (the reverse conversion factor), which turns 120 degrees into the unrelated 3 pi/2, i.e. 270 degrees.',
          remediationTip: 'Test your factor: 180 degrees must output pi; only pi/180 does that.'
        }
      ]
    }
  }
];
