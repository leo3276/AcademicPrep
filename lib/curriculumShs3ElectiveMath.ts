// Ghanaian SHS 3 Elective Mathematics — Terms 1, 2 and 3
// WAEC / WASSCE and GES Senior High School Elective Mathematics syllabus
// Textbook-grade notes, worked examples with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS3_ELECTIVE_MATH_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs3-em-t1-indices-logs-revision",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Indices, Logarithms and Surds at WASSCE Standard",
    "description": "Mixed index and logarithm equations, change of base, solving a^x = b with logs, simultaneous indices and harder surd work, all revised to the standard expected in the WASSCE elective paper.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Index laws hold for all real powers: a^m x a^n = a^(m+n), (a^m)^n = a^(mn), a^-n = 1/a^n and a^0 = 1 (a not zero); keep (a^m)^n and a^m x a^n apart, since the first multiplies the indices and the second adds them.\n• Fractional indices mix roots and powers: 27^(2/3) = (cube root of 27)^2 = 9, and 16^(-3/4) = 1/(2^3) = 1/8; work from the inside out and say so on the mark scheme line.\n• Match bases to solve: 3^(2x-1) = 27 gives 2x - 1 = 3, so x = 2; likewise 4^x = 8 gives 2x = 3, x = 3/2.\n• When the bases cannot be matched, take logs: 5^x = 12 gives x = log 12 / log 5 = 1.544 (correct to 3 significant figures).\n• An equation in a^x and a^(2x) is a quadratic in disguise: 4^x - 6(2^x) - 16 = 0 becomes u^2 - 6u - 16 = 0 with u = 2^x, so u = 8 and x = 3; the root u = -2 is rejected because 2^x is positive for every real x.\n• Simultaneous indices: 2^(x+y) = 32 and 2^(x-y) = 8 give x + y = 5 and x - y = 3, hence x = 4 and y = 1; check both original equations afterwards.\n• Log form means index form: y = log_a x if and only if a^y = x, valid only for x > 0, a > 0 and a not equal to 1; state these conditions whenever you solve a log equation.\n• The three log laws: log xy = log x + log y, log(x/y) = log x - log y, log x^n = n log x; log(a + b) is NOT log a + log b.\n• Change of base: log_a b = (log b)/(log a); so log_8 32 = log 32 / log 8 = 5/3 and log_9 27 = 3/2, because 8^(5/3) = 2^5 = 32.\n• Given log 2 = 0.3010 and log 3 = 0.4771: log 45 = log(9 x 5) = 2 log 3 + 1 - log 2 = 0.9542 + 0.6990 = 1.6532; use log 5 = log(10/2) = 1 - log 2, never 1 + log 2.\n• Log equations produce rejected roots: log_2(x+1) + log_2(x-1) = 3 leads to x^2 - 1 = 8, so x = 3, and x = -3 is rejected because it places negative numbers inside the logarithms.\n• Surd simplification first, surd arithmetic second: sqrt(75) - sqrt(27) = 5 sqrt(3) - 3 sqrt(3) = 2 sqrt(3) approximately 3.46 (3 s.f.), while combining under one root as sqrt(75 - 27) = 4 sqrt(3) is the classic error.\n• Rationalise with the conjugate: 4/(sqrt(7) - sqrt(3)) = 4(sqrt(7) + sqrt(3))/(7 - 3) = sqrt(7) + sqrt(3).\n• Denest a surd by finding the square: sqrt(7 + 4 sqrt(3)) = 2 + sqrt(3), since (2 + sqrt(3))^2 = 7 + 4 sqrt(3).\n• Compare unusual surds at a common index: cube root of 3 versus sqrt(2) — raise both to the sixth power: 3^2 = 27 and 2^3 = 8, so the cube root of 3 is larger.",
    "detailedNotes": {
      "overview": "This topic welds the SHS 1 index and logarithm laws into the equation-solving skills the WASSCE elective paper actually tests. At this level a question rarely asks you to state a law; it hides a quadratic inside 4^x, puts a base-8 logarithm in front of you, or demands that you reject a root which places a negative number inside a logarithm. Every sub-skill is examinable in both Paper 1 objectives and Paper 2 theory, and the method lines earn M1 even when a final simplification slips.",
      "introduction": "Work in a fixed order: write every term on one base before equating indices, state the conditions for a logarithm before combining terms, and test the final root by substitution back into the original equation. A solution that survives substitution is worth more than a fast answer that does not, and one line of validity condition can decide whether a rejected root is credited or lost.",
      "realWorldContext": "A trotro operator travelling daily between Kejetia and Ejisu notices that his running cost of GH¢ 400.00 a week has been rising steadily by 6 percent a year. To plan his budget he needs 400 x 1.06^t = 800, so 1.06^t = 2 and t = log 2 / log 1.06 = 0.3010 / 0.0253 = 11.9 years (3 s.f.); that doubling estimate is pure index-and-log work. A surveyor measuring a square cocoa plot of area 75 m^2 also needs the surd side 5 sqrt(3) m and diagonal 5 sqrt(6) m approximately 12.25 m before fixing a fence line.",
      "objectives": [
        "Apply all index laws, including negative and fractional powers, to simplify expressions and solve equations of the form a^x = b",
        "Reduce equations such as 4^x - 6(2^x) - 16 = 0 to quadratics by substitution and reject inadmissible roots",
        "Use the definition of a logarithm, the three log laws and change of base to evaluate and simplify logarithmic expressions",
        "Solve logarithmic equations in which one algebraic root must be rejected on validity grounds",
        "Simplify, rationalise and compare surds, including nested surds such as sqrt(7 + 4 sqrt(3))"
      ],
      "sections": [
        {
          "title": "Index Laws in Equation Work",
          "content": "The laws a^m x a^n = a^(m+n), (a^m)^n = a^(mn), a^-n = 1/a^n and a^0 = 1 are learned early, but WASSCE tests them inside equations. The standard move is to write every term on one base: 4^x becomes (2^x)^2, 8 becomes 2^3, and the equation 4^x = 2^(3x-2) reduces to the linear step 2x = 3x - 2. When the unknown sits in an index whose base cannot be matched, as in 5^x = 12, take logarithms of both sides and use the power law to bring x down, giving x log 5 = log 12 and x = log 12 / log 5 approximately 1.544. Always keep (a^m)^n apart from a^m x a^n in your head: the first multiplies indices, the second adds them.",
          "bulletPoints": [
            "Match bases first: 3^(2x-1) = 27 gives 2x - 1 = 3, hence x = 2.",
            "Fractional indices: 27^(2/3) = 9 and 16^(-3/4) = 1/8; root and power, inside out.",
            "Unmatched bases need logs: 5^x = 12 gives x = log 12 / log 5 = 1.544 (3 s.f.).",
            "Anything in a^x and a^(2x) is a quadratic in u = a^x; reject a negative value of u.",
            "Check a solved index equation by substituting back: 4^3 - 6(2^3) - 16 = 64 - 48 - 16 = 0."
          ],
          "keyTakeaway": "One base, equate indices; no match, take logs; a^(2x) always means substitute u = a^x first.",
          "realWorldExample": "The trotro fare from Kumasi to Ejisu doubles roughly every 11.9 years at 6 percent annual increase because 1.06^t = 2 gives t = log 2 / log 1.06; a driver planning five years ahead uses exactly this index equation."
        },
        {
          "title": "Logarithms: Definition, Laws and Change of Base",
          "content": "A logarithm is an index written the other way round: y = log_a x means a^y = x, so log_8 32 asks for the power of 8 that gives 32. Both sides must be positive, which is why every log equation ends with a validity test. The three laws handle products, quotients and powers, and change of base, log_a b = (log b)/(log a), moves any base onto the calculator base. For instance log_8 32 = log 32 / log 8 = 1.5051 / 0.9031 = 5/3 exactly, because 32 = 2^5 and 8 = 2^3. With the common data log 2 = 0.3010 and log 3 = 0.4771, learn to build any requested number from 2s, 3s, 5s and 10s, using log 5 = 1 - log 2.",
          "bulletPoints": [
            "y = log_a x if and only if a^y = x, with x > 0, a > 0 and a not equal to 1.",
            "The three laws combine into single logarithms; log(a + b) is never log a + log b.",
            "Change of base: log_8 32 = 5/3 and log_9 27 = 3/2, both from writing numbers on base 2 or 3.",
            "Build from given data: log 45 = 2 log 3 + 1 - log 2 = 1.6532 with log 2 = 0.3010, log 3 = 0.4771.",
            "Keep the mantissa positive when using four-figure tables; a negative logarithm such as log 0.045 is written with bar notation."
          ],
          "keyTakeaway": "Read every log as a question about an index, and evaluate any base by changing to common logs.",
          "realWorldExample": "A sound technician at an event centre in Takoradi measures loudness on the decibel scale, which is logarithmic: a gain of 20 dB means a hundredfold rise in intensity, exactly the meaning of 10^2 behind log 100 = 2."
        },
        {
          "title": "Simultaneous Indices and Logarithmic Equations",
          "content": "Simultaneous index equations reward the student who converts first. If 2^(x+y) = 32 and 2^(x-y) = 8, both right sides are powers of 2, so the indices must satisfy x + y = 5 and x - y = 3, and the linear system yields x = 4, y = 1; substituting back confirms both statements at once. Logarithmic equations such as log_2(x+1) + log_2(x-1) = 3 are the mirror image: combine the left side into a single logarithm of a product, drop the logs to get (x+1)(x-1) = 8, and solve x^2 = 9. The quadratic gives two algebraic values, but x = -3 destroys both original logarithms, and only x = 3 survives. The existence condition, every argument strictly positive, must appear as a working line, because that line is where many method marks are parked.",
          "bulletPoints": [
            "Write all right sides as powers of one base, then equate indices to form linear equations.",
            "Example: 2^(x+y) = 32 and 2^(x-y) = 8 give x = 4, y = 1 after adding the index equations.",
            "Combine sums of logs into a single log of a product before removing the logarithm sign.",
            "State the validity condition first: here x > 1 makes both x + 1 and x - 1 positive.",
            "Substitute every final root back into the original equation; a rejected root still earns credit when the rejection is explained."
          ],
          "keyTakeaway": "Indices pair with simultaneous linear equations, logs pair with quadratics, and the validity check decides the final answer.",
          "realWorldExample": "A harvest announcement spreads through farming communities near Nalerigu and doubles the number of informed households each week, so the model N = 2^t is stated in class; finding the week at which N = 512 means matching bases, 2^t = 2^9, hence week 9."
        },
        {
          "title": "Surds at WASSCE Standard",
          "content": "Surd work at this level is arithmetic with sqrt written in, and three techniques carry it. Simplify first: sqrt(75) - sqrt(27) is 5 sqrt(3) - 3 sqrt(3) = 2 sqrt(3), while the tempting but wrong route sqrt(75 - 27) gives 4 sqrt(3) and is a known zero-marker. Rationalise by multiplying top and bottom by the conjugate: 4/(sqrt(7) - sqrt(3)) = sqrt(7) + sqrt(3), because the denominator becomes a difference of two squares. Denest a nested surd by hunting a perfect square: sqrt(7 + 4 sqrt(3)) = 2 + sqrt(3), since squaring 2 + sqrt(3) returns 7 + 4 sqrt(3). To compare unusual surds such as the cube root of 3 and sqrt(2), raise both to the sixth power, the least common multiple of 2 and 3, and compare 27 with 8. State the exact surd form and the three-significant-figure approximation separately and label each.",
          "bulletPoints": [
            "Simplify to multiples of one surd before adding: 5 sqrt(3) - 3 sqrt(3) = 2 sqrt(3) approximately 3.46.",
            "Rationalise with the conjugate: 4/(sqrt(7) - sqrt(3)) = sqrt(7) + sqrt(3).",
            "Denest by squaring the guess: sqrt(7 + 4 sqrt(3)) = 2 + sqrt(3).",
            "Compare surds at a common index: the cube root of 3 exceeds sqrt(2) because 27 > 8 at the sixth power.",
            "An exact value such as 2 sqrt(3) and its approximation 3.46 are different answers; write whichever the question demands."
          ],
          "keyTakeaway": "Simplify, rationalise with the conjugate, denest by finding the square, and never add roots that are not like.",
          "realWorldExample": "A square cocoa plot of area 75 m^2 has side sqrt(75) = 5 sqrt(3) m approximately 8.66 m, and the fence along its diagonal runs 5 sqrt(3) x sqrt(2) = 5 sqrt(6) m approximately 12.25 m across the plot."
        }
      ],
      "commonMistakes": [
        "Writing (2^3)^4 = 2^7: powers multiply inside a bracket, so the correct value is 2^12; adding the indices belongs to 2^3 x 2^4.",
        "Solving sqrt(75) - sqrt(27) as sqrt(75 - 27) = 4 sqrt(3); surds must first be simplified to like forms, giving 5 sqrt(3) - 3 sqrt(3) = 2 sqrt(3).",
        "Reading log 45 as log 40 + log 5 or treating log(a + b) as log a + log b; the law covers multiplication only, so 45 = 9 x 5 must be used instead.",
        "Using log 5 = 1 + log 2: since 5 = 10/2, the correct value is log 5 = log 10 - log 2 = 1 - 0.3010 = 0.6990.",
        "Accepting both roots of x^2 = 9 in the equation log_2(x+1) + log_2(x-1) = 3: x = -3 makes x + 1 = -2 and the logarithm is undefined, so only x = 3 stands."
      ],
      "wassceExamTips": [
        "Paper 1 objectives lean on evaluation: expect one item each on fractional or negative indices, one change-of-base value such as log_8 32, and one surd rationalisation; each should take under a minute with no long working.",
        "Paper 2 theory awards M1 for the substitution line u = 2^x or the validity condition x > 1 even before the algebra is finished, so write those lines down deliberately.",
        "When a question says evaluate correct to three significant figures, the exact surd form earns the method credit and the decimal earns the accuracy credit; quote both and label them.",
        "Four-figure log tables: a number between 0 and 1 has a negative logarithm handled with bar notation, e.g. log 0.045 = -1.3468, written bar 2 point 6532 in table style because 0.045 = 4.5 x 10^-2; check sign conventions against the paper you sit.",
        "A rejected root shown with a reason is marked as correct completion; a carried-through arithmetic slip in a later part can still collect method marks, so keep working after a poor first line."
      ],
      "summaryChecklist": [
        "Can I solve any equation of the form a^x = b by matching bases or by taking logs and quote the answer to three significant figures?",
        "Can I reduce 4^x - 6(2^x) - 16 = 0 to a quadratic in u = 2^x and explain why u = -2 is rejected?",
        "Can I evaluate expressions such as log_8 32 with change of base and build log 45 from given values of log 2 and log 3?",
        "Can I solve a logarithmic equation, state its validity conditions and reject the inadmissible root with a reason?",
        "Can I simplify, rationalise and compare surds, including denesting sqrt(7 + 4 sqrt(3))?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-idxlog-1",
        "title": "An Exponential Equation Solved by Substitution",
        "problem": "Solve the equation 4^x - 6(2^x) - 16 = 0, giving each valid root and rejecting any that fails.",
        "stepByStepSolution": [
          "Step 1 (M1): Write 4^x on base 2: 4^x = (2^2)^x = (2^x)^2, so the equation contains only one kind of power, 2^x.",
          "Step 2 (M1): Substitute u = 2^x, which turns the equation into the quadratic u^2 - 6u - 16 = 0.",
          "Step 3 (M1): Factorise: u^2 - 6u - 16 = (u - 8)(u + 2) = 0.",
          "Step 4 (A1): So u = 8 or u = -2; reject u = -2 because 2^x is positive for every real value of x.",
          "Step 5 (M1): Solve 2^x = 8 by writing 8 = 2^3, so the bases match and the indices may be equated.",
          "Step 6 (A1): Hence x = 3; the check gives 4^3 - 6(2^3) - 16 = 64 - 48 - 16 = 0, so x = 3 is the only root."
        ],
        "keyTakeaway": "Recognise a^x and a^(2x) together as a disguised quadratic, substitute, and reject any value that makes a^x non-positive."
      },
      {
        "id": "ex-shs3-em-idxlog-2",
        "title": "A Logarithmic Equation with a Root to Reject",
        "problem": "Solve the equation log base 2 of (x + 1) plus log base 2 of (x - 1) equals 3, stating clearly any value of x that must be rejected.",
        "stepByStepSolution": [
          "Step 1 (M1): State the conditions for existence: x + 1 > 0 and x - 1 > 0, so any valid answer must satisfy x > 1.",
          "Step 2 (M1): Combine the left side with the product law: log base 2 of [(x + 1)(x - 1)] = 3.",
          "Step 3 (A1): Remove the logarithm by writing the index form: (x + 1)(x - 1) = 2^3 = 8.",
          "Step 4 (M1): Expand the difference of two squares: x^2 - 1 = 8, so x^2 = 9 and x = 3 or x = -3.",
          "Step 5 (A1): Reject x = -3 because it gives x - 1 = -4 and x + 1 = -2, which are outside the domain; x = 3 is the answer, and the check log base 2 of 4 plus log base 2 of 2 = 2 + 1 = 3 confirms it."
        ],
        "keyTakeaway": "Combine first, convert to index form next, then test every algebraic root against the conditions stated in line one."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-indices-logs-rev",
      "topicId": "shs3-em-t1-indices-logs-revision",
      "title": "Indices, Logs and Surds Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-idxlog-1",
          "quizId": "quiz-shs3-em-indices-logs-rev",
          "questionText": "Simplify (27/8)^(-2/3), leaving the answer as a fraction.",
          "optionA": "9/4",
          "optionB": "3/2",
          "optionC": "4/9",
          "optionD": "-9/4",
          "correctOption": "C",
          "subConcept": "Fractional and negative indices",
          "explanation": "The cube root of 27/8 is 3/2, squaring gives 9/4, and the negative index flips the fraction, so the answer is 4/9. Option A forgets the negative index, B keeps only the cube root, and D wrongly reads a negative index as a negative number.",
          "remediationTip": "Evaluate a fractional index in two moves: root first, then power, and let a minus sign only mean reciprocal."
        },
        {
          "id": "q-em-idxlog-2",
          "quizId": "quiz-shs3-em-indices-logs-rev",
          "questionText": "Solve the equation 9^x - 4(3^x) + 3 = 0.",
          "optionA": "x = 0 or x = 1",
          "optionB": "x = 1 only",
          "optionC": "x = 0 or x = 3",
          "optionD": "x = 3 or x = 1",
          "correctOption": "A",
          "subConcept": "Exponential equations reducible to quadratics",
          "explanation": "With u = 3^x the equation is u^2 - 4u + 3 = 0, giving (u - 1)(u - 3) = 0, so u = 1 or u = 3 and hence x = 0 or x = 1. Option C misreads 3^x = 3 as x = 3 instead of x = 1, and B drops the valid factor u = 1.",
          "remediationTip": "After substituting u = 3^x, translate every u-value back through indices: u = 1 means x = 0 because a^0 = 1."
        },
        {
          "id": "q-em-idxlog-3",
          "quizId": "quiz-shs3-em-indices-logs-rev",
          "questionText": "Evaluate log base 8 of 32.",
          "optionA": "3/5",
          "optionB": "5/2",
          "optionC": "4",
          "optionD": "5/3",
          "correctOption": "D",
          "subConcept": "Change of base and index form",
          "explanation": "Writing 8 = 2^3 and 32 = 2^5, the value asked is the power p with (2^3)^p = 2^5, so 3p = 5 and p = 5/3. Option A inverts the fraction, the classic change-of-base slip, and B confuses the exponent of 2 in 32 with the base 8 exponent.",
          "remediationTip": "Put both numbers on the same prime base and divide the index of the number by the index of the base."
        },
        {
          "id": "q-em-idxlog-4",
          "quizId": "quiz-shs3-em-indices-logs-rev",
          "questionText": "Given that log 2 = 0.3010 and log 3 = 0.4771, evaluate log 45 without using tables.",
          "optionA": "2.2552",
          "optionB": "1.6532",
          "optionC": "4.2765",
          "optionD": "0.9542",
          "correctOption": "B",
          "subConcept": "Logarithm laws with given data",
          "explanation": "45 = 9 x 5, so log 45 = 2 log 3 + log(10/2) = 0.9542 + 1 - 0.3010 = 1.6532. Option A uses log 5 = 1 + log 2, a sign error; C divides log 10 by log 2 somewhere; D stops at log 9 and forgets the factor 5.",
          "remediationTip": "Factor any target number into 2s, 3s, 5 and 10, and always build log 5 as 1 - log 2."
        },
        {
          "id": "q-em-idxlog-5",
          "quizId": "quiz-shs3-em-indices-logs-rev",
          "questionText": "Express sqrt(75) - sqrt(27) in its simplest surd form.",
          "optionA": "2 sqrt(3)",
          "optionB": "4 sqrt(3)",
          "optionC": "8 sqrt(3)",
          "optionD": "45",
          "correctOption": "A",
          "subConcept": "Surd simplification",
          "explanation": "sqrt(75) = 5 sqrt(3) and sqrt(27) = 3 sqrt(3), so the difference is 2 sqrt(3), approximately 3.46 to three significant figures. B comes from taking sqrt(75 - 27) = 4 sqrt(3), which is invalid; C adds instead of subtracting; D multiplies the two surds.",
          "remediationTip": "Pull out the largest square factor from each root first, then add or subtract only like surds."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t1-polynomial-roots",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Polynomial Equations and Roots",
    "description": "Sum and product of roots for quadratics and cubics, forming equations from given roots, roots in a given ratio, transformations of roots, and a single sweep through the remainder and factor theorems.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• For the quadratic ax^2 + bx + c = 0 with roots p and q: p + q = -b/a and pq = c/a; for 3x^2 - 5x - 2 = 0 the sum is 5/3 and the product is -2/3.\n• A quadratic with roots p and q is x^2 - (p + q)x + pq = 0; with roots 2/3 and -3 this is x^2 + (7/3)x - 2 = 0, that is 3x^2 + 7x - 6 = 0.\n• Symmetric combinations come from sum and product only: p^2 + q^2 = (p + q)^2 - 2pq, and for 3x^2 - 7x + 1 = 0 this gives 49/9 - 2/3 = 43/9.\n• Also standard: 1/p + 1/q = (p + q)/pq and p^2 q + p q^2 = pq(p + q); never solve the equation when these two lines will serve.\n• The difference of roots: (p - q)^2 = (p + q)^2 - 4pq, which also equals (b^2 - 4ac)/a^2; for x^2 - 6x + 5 = 0 it gives (p - q)^2 = 16.\n• For the cubic ax^3 + bx^2 + cx + d = 0 with roots p, q, r: p + q + r = -b/a, pq + qr + rp = c/a, pqr = -d/a; watch the minus sign on the product.\n• For 2x^3 - 3x^2 - 3x + 2 = 0 the three sums are 3/2, -3/2 and -1, and indeed the roots 2, -1, 1/2 satisfy them.\n• p^2 + q^2 + r^2 = (p + q + r)^2 - 2(pq + qr + rp) = 9/4 + 3 = 21/4 for the cubic above.\n• 1/p + 1/q + 1/r = (pq + qr + rp)/pqr, so the cubic gives (-3/2)/(-1) = 3/2; write the combined fraction before substituting.\n• Roots in a given ratio m:n: let them be mp and np, use sum and product and eliminate; for 2x^2 - 5x + m = 0 with roots in ratio 2:3, r = 1/2 and m = 3.\n• Transforming roots: new roots p + 1 and q + 1 have sum (p + q) + 2 and product pq + (p + q) + 1; for 3x^2 - 5x - 2 = 0 the new equation is 3x^2 - 11x + 6 = 0.\n• Remainder theorem: dividing f(x) by (x - k) leaves f(k); for f(x) = x^3 + 2x^2 - kx + 5 a remainder of 1 on division by (x - 2) gives 21 - 2k = 1, hence k = 10.\n• Factor theorem: (x - k) is a factor exactly when f(k) = 0, so a cubic with f(2) = 0 is split as (x - 2) times a quadratic and finished by factorisation.\n• A cubic with no x^2 term has roots summing to zero; a reciprocal-looking equation such as 2x^3 - 3x^2 - 3x + 2 = 0 invites grouping because its coefficients read the same forwards and backwards.\n• Always recheck a formed equation by solving it and comparing with the stated roots; a sign error in x^2 - Sx + P is the most common single failure.",
    "detailedNotes": {
      "overview": "WASSCE treats the roots of a polynomial as objects to be reasoned about, not only as answers to be solved for. The five moves are: read the sum and product from the coefficients, form an equation from given roots, evaluate symmetric expressions such as p^2 + q^2 without ever finding p and q, transform roots (add a constant, square, take reciprocals), and use remainder and factor results in the same working. Cubics appear in both the roots-as-objects and the solve-by-factorising styles, so a candidate who is fluent with the three cubic symmetric sums can finish a Paper 2 question in under ten minutes.",
      "introduction": "Name the roots, write the three coefficient formulas once, and the whole question opens. Resist solving for the roots explicitly whenever the question asks for a symmetric quantity, because the solving route is slower and introduces surds where none are needed.",
      "realWorldContext": "A district assembly in the Ashanti Region plans two rectangular trial plots whose side-length differences are the roots of a quadratic drawn from a fencing budget; the engineer needs the sum and the product of those roots, not the roots themselves, to size a shared boundary. A cocoa warehouse design with cubic volume expression V(x) = 2x^3 - 3x^2 - 3x + 2 in cubic metres is checked for its usable integer spans by testing x = 2 and x = -1 before factorising, exactly the factor-theorem sweep this topic completes.",
      "objectives": [
        "Read the sum, product and pairwise sums of roots from the coefficients of quadratics and cubics",
        "Form quadratic and cubic equations from given roots or from transformed roots",
        "Evaluate symmetric expressions such as p^2 + q^2, 1/p + 1/q and p^2 + q^2 + r^2 without solving the equation",
        "Determine an unknown coefficient when roots are in a given ratio",
        "Apply the remainder and factor theorems to cubics to find constants and solve completely"
      ],
      "sections": [
        {
          "title": "Sum and Product for the Quadratic",
          "content": "Every quadratic ax^2 + bx + c = 0 has roots whose sum is -b/a and whose product is c/a; these are read off, not solved for. For 3x^2 - 5x - 2 = 0 the sum is 5/3 and the product is -2/3, and a quick check by factorising, (3x + 1)(x - 2) = 0, gives roots 2 and -1/3 whose sum and product match. Because the formulas are symmetric in the roots, any expression symmetric in p and q can be rewritten using only these two numbers: p^2 + q^2 becomes (p + q)^2 - 2pq, while 1/p + 1/q becomes (p + q)/pq. The one-sided caution is the minus sign on -b/a: when b itself is negative the sum is positive, and many scripts lose the mark on that single sign.",
          "bulletPoints": [
            "Sum p + q = -b/a, product pq = c/a; quote a, b, c explicitly before substituting.",
            "p^2 + q^2 = (p + q)^2 - 2pq; for 3x^2 - 7x + 1 = 0 this is 49/9 - 6/9 = 43/9.",
            "1/p + 1/q = (p + q)/pq; for 3x^2 - 7x + 1 = 0 this is (7/3)/(1/3) = 7.",
            "p^2 q + p q^2 = pq(p + q); factor before substituting values.",
            "(p - q)^2 = (p + q)^2 - 4pq, which is the discriminant divided by a^2."
          ],
          "keyTakeaway": "If an expression is symmetric in the roots, rewrite it with sum and product and never solve.",
          "realWorldExample": "A farmer fencing a rectangle against a river uses side sums fixed by a budget; knowing the sum of the two side roots is 5/3 and their product -2/3 in a scaled model lets the assembly technician check feasibility without computing either side."
        },
        {
          "title": "Forming Equations from Given or Transformed Roots",
          "content": "A quadratic with roots p and q is x^2 - (sum)x + (product) = 0, and clearing fractions makes the coefficients whole numbers. With roots 2/3 and -3, the sum is -7/3 and the product is -2, so the equation is x^2 + (7/3)x - 2 = 0, that is 3x^2 + 7x - 6 = 0; solving it back must return the original roots. Transformed roots follow the same law: for new roots p + 1 and q + 1 build the new sum (p + q) + 2 and the new product pq + (p + q) + 1 first. Applied to 3x^2 - 5x - 2 = 0 the sums become 11/3 and 2, and the transformed equation is 3x^2 - 11x + 6 = 0, whose roots 3 and 2/3 are indeed the old roots 2 and -1/3 shifted by one.",
          "bulletPoints": [
            "Template: x^2 - Sx + P = 0 where S is the root sum and P the root product.",
            "Clear denominators at the end so all coefficients are integers.",
            "For roots p + k and q + k: new S = S + 2k, new P = P + kS + k^2.",
            "For roots 1/p and 1/q: new S = S/P and new P = 1/P, with P not zero.",
            "Always solve the formed equation as a check; the roots must be the stated ones."
          ],
          "keyTakeaway": "Form from S and P, clear fractions, and verify by solving the finished equation.",
          "realWorldExample": "A school in Ho enlarges two assembly-hall support spans by one metre each; the new spans are the shifted roots, and the civil-service teacher writes the new quadratic by adjusting S and P rather than solving the old one twice."
        },
        {
          "title": "Cubic Roots: Three Symmetric Sums",
          "content": "For the cubic ax^3 + bx^2 + cx + d = 0 with roots p, q, r the three laws are: p + q + r = -b/a, pq + qr + rp = c/a, pqr = -d/a. Note the alternating signs: only the total sum and the triple product wear a minus. For 2x^3 - 3x^2 - 3x + 2 = 0 the sums are 3/2, -3/2 and -1, and the roots 2, -1, 1/2 confirm all three. Symmetric targets then reduce to these numbers: p^2 + q^2 + r^2 = (p + q + r)^2 - 2(pq + qr + rp) = 9/4 + 3 = 21/4, while the reciprocal sum is (pq + qr + rp)/pqr = 3/2. The verification culture matters here because a sign slip in one of the three laws contaminates every later part.",
          "bulletPoints": [
            "Cubic laws with alternating signs: sum -b/a, pairwise c/a, product -d/a.",
            "p^2 + q^2 + r^2 = (sum)^2 - 2(pairwise); here 9/4 - 2(-3/2) = 21/4.",
            "1/p + 1/q + 1/r = pairwise sum divided by the product; here (-3/2)/(-1) = 3/2.",
            "A missing term means a zero coefficient: for x^3 + px + q = 0 the roots sum to zero.",
            "Check any claimed root by substitution before using the factor theorem to divide."
          ],
          "keyTakeaway": "Three signed sums describe all the roots at once; every cubic symmetric question is built from them.",
          "realWorldExample": "A warehouse volume model V(x) = 2x^3 - 3x^2 - 3x + 2 gives three design values of x where storage equals the target; the technician sums and multiplies them through the cubic laws to sanity-check the model before listing feasible spans."
        },
        {
          "title": "Ratio Conditions, Remainder and Factor in One Sweep",
          "content": "A ratio condition on roots is handled by setting the roots to mp and np and eliminating. If 2x^2 - 5x + m = 0 has roots in the ratio 2:3, then 5p = 5/2 gives p = 1/2, the roots are 1 and 3/2, and the product condition m/2 = 3/4 yields m = 3, confirmed by factorising 2x^2 - 5x + 3 = (2x - 3)(x - 1). The remainder theorem then links the same polynomial world to division: f(k) is the remainder when f(x) is divided by (x - k), so a remainder of 1 for f(x) = x^3 + 2x^2 - kx + 5 on division by (x - 2) forces 21 - 2k = 1 and k = 10. The factor theorem is the special case f(k) = 0, which converts a known root into a linear factor and reduces a cubic to a quadratic that can be solved by factorisation.",
          "bulletPoints": [
            "Ratio 2:3 roots: write 2r and 3r, use the sum to find r, then the product to find the constant.",
            "Remainder: f(k) when dividing by (x - k); a stated remainder gives an equation for the unknown coefficient.",
            "Factor: f(k) = 0 exactly when (x - k) divides f(x).",
            "After one factor is known, divide and solve the quadratic to finish the cubic completely.",
            "A repeated factor shows up when the remainder and the gradient both vanish at k, i.e. f(k) = 0 and f prime (k) = 0."
          ],
          "keyTakeaway": "Set the ratio, use sum and product to eliminate; then let f(k) do the division work in one line.",
          "realWorldExample": "A bridge truss design in Sunyani tests the load polynomial at the stated working load k; if f(k) leaves no remainder the member clears exactly, so the engineer applies the factor theorem before approving the span."
        }
      ],
      "commonMistakes": [
        "Quoting the sum of roots of 3x^2 - 5x - 2 = 0 as -5/3: the law is -b/a, and with b = -5 the sum is +5/3.",
        "Using c instead of c/a for the product when a is not 1: for 5x^2 - 3x - 2 = 0 the product is -2/5, not -2.",
        "Writing p^2 + q^2 as (p + q)^2 and reporting 49/9 for the roots of 3x^2 - 7x + 1 = 0; the correction is (p + q)^2 - 2pq = 49/9 - 6/9 = 43/9.",
        "Stating the product of cubic roots as d/a instead of -d/a: for x^3 - 4x^2 + x + 6 = 0 with roots -1, 2, 3 the product is -6 = -d/a, and the reciprocal sum is 1/(-6) = -1/6.",
        "Forming an equation with roots 2/3 and -3 as 3x^2 - 7x - 6 = 0: that equation has roots 3 and -2/3, the reciprocal-sign mix-up; the correct form is 3x^2 + 7x - 6 = 0."
      ],
      "wassceExamTips": [
        "Paper 2 theory: the roots-of-a-quadratic question opens with a method mark for writing p + q = -b/a and pq = c/a before any substitution; quote the formula with a, b, c identified, since a bare decimal answer can score zero method.",
        "When an unknown constant must be found from a root condition such as p = 2q, the marker expects the elimination line; solving the equation fully first still earns accuracy marks but wastes time worth two other questions.",
        "Remainder and factor theorems are usually a two-part question: part a finds a constant from a stated remainder, part b solves the resulting cubic. An error carried through from part a (afr) can keep part b method marks alive if your division is correct.",
        "For cubics, verify each claimed root by substitution in under a minute; a single wrong check line can turn a full-scheme answer into zero for that part.",
        "Timing: a complete roots-and-remainders question should take 8 to 12 minutes. If the algebra has not unblocked by minute ten, write the symmetric-sum formulae and substitute: even a truncated answer collects M1 lines."
      ],
      "summaryChecklist": [
        "Can I state sum, product and pairwise sums of roots for any quadratic or cubic with the correct signs?",
        "Can I evaluate p^2 + q^2, 1/p + 1/q and p^2 + q^2 + r^2 without solving the equation?",
        "Can I form a quadratic or cubic whose roots are shifted, squared or reciprocated versions of given roots?",
        "Can I find an unknown coefficient when the roots are in a stated ratio?",
        "Can I use the remainder and factor theorems to find a constant and then solve a cubic completely?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-proot-1",
        "title": "Transforming the Roots of a Quadratic",
        "problem": "The numbers p and q are the roots of 3x^2 - 5x - 2 = 0. Without solving this equation, form the quadratic whose roots are p + 1 and q + 1, and give your answer with integer coefficients.",
        "stepByStepSolution": [
          "Step 1 (M1): Read the sums from the coefficients: p + q = -(-5)/3 = 5/3 and pq = -2/3.",
          "Step 2 (M1): Build the new sum: (p + 1) + (q + 1) = p + q + 2 = 5/3 + 2 = 11/3.",
          "Step 3 (M1): Build the new product: (p + 1)(q + 1) = pq + (p + q) + 1 = -2/3 + 5/3 + 1 = 2.",
          "Step 4 (M1): Write the template with the new sums: x^2 - (11/3)x + 2 = 0.",
          "Step 5 (A1): Multiply through by 3 to clear the fraction: 3x^2 - 11x + 6 = 0.",
          "Step 6 (A1): Check by solving: 3x^2 - 11x + 6 = (3x - 2)(x - 3) gives roots 2/3 and 3, which are indeed -1/3 + 1 and 2 + 1, the shifted roots of the original equation."
        ],
        "keyTakeaway": "Shifted roots mean shifted sums: adjust S and P by the shift, then let x^2 - Sx + P do the rest."
      },
      {
        "id": "ex-shs3-em-proot-2",
        "title": "Symmetric Sums of the Roots of a Cubic",
        "problem": "The numbers p, q and r are the roots of 2x^3 - 3x^2 - 3x + 2 = 0. Find, without solving the equation, (a) p^2 + q^2 + r^2 and (b) 1/p + 1/q + 1/r.",
        "stepByStepSolution": [
          "Step 1 (M1): State the cubic laws: p + q + r = -b/a, pq + qr + rp = c/a, pqr = -d/a.",
          "Step 2 (M1): Substitute a = 2, b = -3, c = -3, d = 2: the sums are 3/2, -3/2 and -1.",
          "Step 3 (M1): Rewrite the first target with the identities: p^2 + q^2 + r^2 = (p + q + r)^2 - 2(pq + qr + rp).",
          "Step 4 (A1): Hence p^2 + q^2 + r^2 = (3/2)^2 - 2(-3/2) = 9/4 + 3 = 21/4.",
          "Step 5 (M1): Combine the reciprocals over the common denominator pqr: 1/p + 1/q + 1/r = (qr + rp + pq)/pqr.",
          "Step 6 (A1): Hence the reciprocal sum is (-3/2)/(-1) = 3/2.",
          "Step 7 (A1): Verification with the actual roots 2, -1, 1/2: 4 + 1 + 1/4 = 21/4 and 1/2 - 1 + 2 = 3/2, so both parts agree."
        ],
        "keyTakeaway": "The three cubic sums plus two identities answer every symmetric question without finding a single root."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-poly-roots",
      "topicId": "shs3-em-t1-polynomial-roots",
      "title": "Polynomial Roots Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-proot-1",
          "quizId": "quiz-shs3-em-poly-roots",
          "questionText": "Find the sum and the product of the roots of 5x^2 - 3x - 2 = 0.",
          "optionA": "sum -3/5, product -2/5",
          "optionB": "sum 3/5, product -2/5",
          "optionC": "sum 3, product -2",
          "optionD": "sum 3/5, product 2/5",
          "correctOption": "B",
          "subConcept": "Quadratic sum and product of roots",
          "explanation": "Sum = -b/a = 3/5 and product = c/a = -2/5. Option A keeps the wrong sign on -b/a, C forgets to divide by the leading coefficient, and D flips the sign of c.",
          "remediationTip": "Identify a, b, c with their signs in a margin table, then substitute once: sum = -b/a, product = c/a."
        },
        {
          "id": "q-em-proot-2",
          "quizId": "quiz-shs3-em-poly-roots",
          "questionText": "Which of the following is the equation whose roots are 2/3 and -3, with integer coefficients?",
          "optionA": "x^2 - (7/3)x + 2 = 0",
          "optionB": "3x^2 - 7x - 6 = 0",
          "optionC": "3x^2 + 7x + 6 = 0",
          "optionD": "3x^2 + 7x - 6 = 0",
          "correctOption": "D",
          "subConcept": "Forming quadratics from roots",
          "explanation": "Sum = -7/3 and product = -2, so x^2 + (7/3)x - 2 = 0 and, clearing fractions, 3x^2 + 7x - 6 = 0, whose roots by the formula are 2/3 and -3. Option B is the same working with a sign slip on the sum, and A still contains a fraction and the wrong sum sign.",
          "remediationTip": "Form x^2 - Sx + P = 0 first, then multiply to whole-number coefficients and solve the result back as a check."
        },
        {
          "id": "q-em-proot-3",
          "quizId": "quiz-shs3-em-poly-roots",
          "questionText": "The numbers p, q and r are the roots of x^3 - 4x^2 + x + 6 = 0. Evaluate 1/p + 1/q + 1/r.",
          "optionA": "-1/6",
          "optionB": "1/6",
          "optionC": "-6",
          "optionD": "6",
          "correctOption": "A",
          "subConcept": "Cubic reciprocal sum",
          "explanation": "1/p + 1/q + 1/r = (pq + qr + rp)/pqr = (c/a)/(-d/a) = 1/(-6) = -1/6. The roots are -1, 2, 3 and indeed -1 + 1/2 + 1/3 = -1/6. Options C and D use the product itself instead of the quotient, and B loses the minus on pqr = -d/a.",
          "remediationTip": "Combine the reciprocals over the common denominator before substituting, and remember pqr = -d/a for a cubic."
        },
        {
          "id": "q-em-proot-4",
          "quizId": "quiz-shs3-em-poly-roots",
          "questionText": "When f(x) = x^3 + 2x^2 - kx + 5 is divided by (x - 2) the remainder is 1. Find the value of k.",
          "optionA": "-2",
          "optionB": "-10",
          "optionC": "10",
          "optionD": "11",
          "correctOption": "C",
          "subConcept": "Remainder theorem",
          "explanation": "The remainder theorem gives f(2) = 8 + 8 - 2k + 5 = 21 - 2k = 1, so k = 10. Option A substitutes x = -2 instead of x = 2; D comes from setting the remainder to -1; B keeps the equation 2k + 21 = 1 with a sign slip.",
          "remediationTip": "For division by (x - k), evaluate f(k) with the same sign as the factor zero, then solve the short linear equation."
        },
        {
          "id": "q-em-proot-5",
          "quizId": "quiz-shs3-em-poly-roots",
          "questionText": "The roots of 3x^2 - 7x + 1 = 0 are p and q. Find p^2 + q^2.",
          "optionA": "49/9",
          "optionB": "43/9",
          "optionC": "55/9",
          "optionD": "31/9",
          "correctOption": "B",
          "subConcept": "Symmetric expressions in roots",
          "explanation": "p + q = 7/3 and pq = 1/3, so p^2 + q^2 = (7/3)^2 - 2(1/3) = 49/9 - 6/9 = 43/9. Option A omits the -2pq term, C adds it instead of subtracting, and D doubles the product without dividing by a.",
          "remediationTip": "Never square the sum alone; write the identity with the -2pq term visible before substituting."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t1-partial-fractions-hard",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Partial Fractions: Repeated and Quadratic Factors",
    "description": "Splitting rational expressions whose denominators contain repeated linear factors or irreducible quadratic factors, handling improper fractions by division first, and using the results in series and integration previews.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A rational expression is proper when the degree of the numerator is below the degree of the denominator; partial fractions apply to proper fractions, so an improper one must be divided first.\n• Distinct linear factors: (2x + 11)/((x + 1)(x + 4)) = 3/(x + 1) - 1/(x + 4); the cover-up rule gets each constant by blocking the factor and setting its zero.\n• A repeated linear factor (x - c)^2 demands BOTH A/(x - c) and B/(x - c)^2; omitting the first term is the most common structural error in this topic.\n• Cover-up still finds the top power of a repeated factor: for (3x^2 - 6x - 6)/((x + 2)(x - 1)^2), blocking (x - 1)^2 and setting x = 1 gives the constant -3 of the squared term.\n• The remaining constants of a repeated factor come from substituting other x-values or comparing coefficients of like powers.\n• Full decomposition: (3x^2 - 6x - 6)/((x + 2)(x - 1)^2) = 2/(x + 2) + 1/(x - 1) - 3/(x - 1)^2; recombining the right side returns 3x^2 - 6x - 6 exactly.\n• An irreducible quadratic factor x^2 + k, meaning one with discriminant negative, takes a linear numerator: (Bx + C)/(x^2 + k), not a constant.\n• x^2 + 1 is irreducible because b^2 - 4ac = -4 is negative; x^2 + x + 1 is irreducible because 1 - 4 = -3 is negative; factor over the reals no further.\n• Mixed denominator: (x^2 + 2x + 5)/((x + 1)(x^2 + 1)) = 2/(x + 1) + (3 - x)/(x^2 + 1); cover-up at x = -1 combined with x = 0 and coefficient comparison gives A = 2, B = -1, C = 3.\n• The number of unknown constants must equal the degree of the denominator: 3 unknowns for a cubic denominator such as (x + 2)(x - 1)^2 or (x + 1)(x^2 + 1).\n• Improper fraction first division: (x^2 + 2x - 1)/(x - 1) = x + 3 + 2/(x - 1), because x^2 + 2x - 1 = (x - 1)(x + 3) + 2.\n• Verify every decomposition by recombining to a single fraction; equal numerators at x = 0, x = 1 and in the leading power prove the split with no algebra left to chance.\n• Partial fractions feed series: 1/(r(r + 1)) = 1/r - 1/(r + 1), so the sum from r = 1 to n telescopes to n/(n + 1); for n = 5 the sum is 5/6.\n• They also feed integration: an expression split into 2/(x + 1) + (3 - x)/(x^2 + 1) integrates term by term into logarithms and arctangents, which is why WASSCE sets the split early.",
    "detailedNotes": {
      "overview": "SHS 2 covered partial fractions with distinct linear factors; SHS 3 raises the denominator to the harder shapes WASSCE prefers: a squared linear factor, an irreducible quadratic, a mixture of the two, and an improper fraction that must be divided before anything splits. The structural decision, which form to write, carries as many marks as the arithmetic, because a wrong skeleton can never be rescued by correct substitutions. Two habits complete the topic: choosing x-values that kill as many unknowns as possible, and recombining the finished split as a verification line that protects the accuracy mark.",
      "introduction": "Factorise the denominator fully over the reals first, then let its shape dictate the skeleton: one term per factor power and a linear numerator for every quadratic. Solve the resulting identity by cover-up where possible and coefficient comparison elsewhere, and close by rebuilding the fraction from your answer.",
      "realWorldContext": "A microfinance officer in Kumasi explains that a single GH¢ 1.00 payment can be split into cedis and pesewas in many ways but reconstructed exactly once the denominations are fixed; partial fractions behave the same way with polynomials. In a water-works model for a scheme near Vala, the flow expression (3x^2 - 6x - 6)/((x + 2)(x - 1)^2) must be split into simple channels before each component flow can be tabulated, so the engineer writes the decomposition as 2/(x + 2) + 1/(x - 1) - 3/(x - 1)^2 and studies the three pieces separately.",
      "objectives": [
        "Identify the correct decomposition skeleton for denominators with repeated linear and irreducible quadratic factors",
        "Determine all constants by cover-up, strategic substitution and comparison of coefficients",
        "Divide an improper fraction before applying partial fractions",
        "Verify a decomposition by recombining it into a single fraction",
        "Use partial fractions to sum a telescoping series and to prepare expressions for integration"
      ],
      "sections": [
        {
          "title": "The Skeleton: What Shape the Split Must Take",
          "content": "The first mark in any partial fraction question is earned by writing the right skeleton, so learn to read the denominator as a builder reads a plan. A linear factor (x - c) contributes one term A/(x - c); a repeated factor (x - c)^2 contributes two terms, A/(x - c) plus B/(x - c)^2, because a single term would offer only one constant where the cubic denominator demands three; and an irreducible quadratic x^2 + k contributes (Bx + C)/(x^2 + k), a linear numerator, because a constant numerator cannot represent every remainder of degree below two. Whether a quadratic is irreducible is settled by its discriminant: x^2 + 1 has b^2 - 4ac = -4 and x^2 + x + 1 has -3, both negative, so neither factorises over the reals. The count rule catches every design error: the number of unknown constants must equal the degree of the denominator.",
          "bulletPoints": [
            "Linear factor (x - c): one constant; squared factor (x - c)^2: two constants A/(x - c) + B/(x - c)^2.",
            "Irreducible quadratic x^2 + k: linear numerator Bx + C.",
            "Discriminant negative means irreducible over the reals: x^2 + 1 and x^2 + x + 1 both qualify.",
            "Count rule: unknowns and denominator degree must be equal, so a cubic denominator needs three constants.",
            "A skeleton with a wrong shape cannot be repaired later; mark schemes award M1 for the form itself."
          ],
          "keyTakeaway": "Read the denominator, write one term per factor power and a matching numerator degree, and the arithmetic is finished halfway.",
          "realWorldExample": "A tailoring workshop in Techiman bills a job as fabric plus lining plus trim; just as a single constant cannot describe three cost channels, a single term cannot describe a squared factor, so the invoice, like the skeleton, lists every channel the job actually has."
        },
        {
          "title": "Repeated Linear Factors: Cover-up Plus Coefficients",
          "content": "Take the worked case (3x^2 - 6x - 6)/((x + 2)(x - 1)^2) = A/(x + 2) + B/(x - 1) + C/(x - 1)^2. Clearing the denominator gives 3x^2 - 6x - 6 = A(x - 1)^2 + B(x + 2)(x - 1) + C(x + 2). The cover-up rule still finds the top power of the repeated factor instantly: put x = 1 and the first two terms die, leaving -9 = 3C, hence C = -3; put x = -2 and the last two die, giving 18 = 9A, hence A = 2. The stubborn middle constant B needs one more device, and comparing the coefficients of x^2 is cheapest: 3 = A + B, so B = 1. The finished split is 2/(x + 2) + 1/(x - 1) - 3/(x - 1)^2, and recombining it reproduces 3x^2 - 6x - 6, which is the verification line the marker likes to see.",
          "bulletPoints": [
            "Cover-up x = 1 gives the constant of the squared term directly: C = (3 - 6 - 6)/(1 + 2) = -3.",
            "Cover-up x = -2 gives A = (12 + 12 - 6)/9 = 2.",
            "Cover-up cannot reach the lower power B; compare coefficients of x^2 instead: A + B = 3, so B = 1.",
            "Alternative device: substitute one safe x-value such as x = 0 and solve the resulting linear equation for the unknown constant.",
            "Recombine the three fractions as the closing check before moving on."
          ],
          "keyTakeaway": "Cover-up kills the obvious constants; the leading-coefficient comparison catches the one it cannot reach.",
          "realWorldExample": "A district health team in Bawku routes one drug supply through a cold chain with a duplicated checkpoint; the repeated factor models that checkpoint, and the two coefficients B and C separate the storage delay from the handling delay exactly as the split separates the two terms."
        },
        {
          "title": "Irreducible Quadratic Factors and Mixed Denominators",
          "content": "When the denominator mixes a linear factor with a quadratic, as in (x^2 + 2x + 5)/((x + 1)(x^2 + 1)), the skeleton is A/(x + 1) + (Bx + C)/(x^2 + 1) and clearing brackets yields x^2 + 2x + 5 = A(x^2 + 1) + (Bx + C)(x + 1). The only real zero of the denominator is x = -1, so cover-up there gives 1 - 2 + 5 = 2A, hence A = 2. Two more constants remain and two devices serve: the x = 0 substitution gives 5 = A + C, so C = 3, and comparing x^2 coefficients gives 1 = A + B, so B = -1. The answer is 2/(x + 1) + (3 - x)/(x^2 + 1). Check at a fresh value: at x = 1 the original fraction is 8/4 = 2, and the split returns 2/2 + 2/2 = 2, so the identity holds.",
          "bulletPoints": [
            "A quadratic factor needs a linear numerator Bx + C; a constant numerator is structurally too thin.",
            "Cover-up still works at the real zero of the linear factor: x = -1 gives A = 2.",
            "Use x = 0 and the leading-power comparison to finish: C = 3 and B = -1.",
            "Never let the quadratic split further over the reals; x^2 + 1 has no real roots.",
            "Verify at one un-used x-value, such as x = 1, to catch sign slips in the quadratic numerator."
          ],
          "keyTakeaway": "Quadratic factor, linear numerator; solve the three constants with one cover-up, one safe substitution and one comparison.",
          "realWorldExample": "An agricultural extension officer near Ejisu models one harvested cocoa load as a blend sold in two grades, a bulk channel and a premium channel; the blend, like (3 - x)/(x^2 + 1), keeps two pieces of information in one numerator and can only be separated once the grading rule is written down."
        },
        {
          "title": "Improper Fractions and What the Split Is For",
          "content": "If the numerator degree reaches the denominator degree, partial fractions are not yet legal: divide first. For (x^2 + 2x - 1)/(x - 1), long division or the remainder theorem gives x^2 + 2x - 1 = (x - 1)(x + 3) + 2, so the expression equals x + 3 + 2/(x - 1); the polynomial part sits outside and only the genuine fraction is split. Why bother splitting at all? Two futures explain it. In series work, 1/(r(r + 1)) = 1/r - 1/(r + 1) collapses the sum from r = 1 to n into n/(n + 1), because every intermediate term cancels; for n = 5 the sum is 5/6. In calculus, a split such as 2/(x + 1) + (3 - x)/(x^2 + 1) is exactly the shape that integrates into logarithms and arctangent terms, so WASSCE sets the algebraic decomposition now to protect the integration work later.",
          "bulletPoints": [
            "Improper means divide first: (x^2 + 2x - 1)/(x - 1) = x + 3 + 2/(x - 1).",
            "The remainder theorem finishes the division in one line: remainder at x = 1 is 1 + 2 - 1 = 2.",
            "Telescoping use: sum of 1/(r(r + 1)) from r = 1 to n equals n/(n + 1), so n = 5 gives 5/6.",
            "Integration preview: the split terms integrate into ln and arctan forms one at a time.",
            "Keep the polynomial part visible in the final answer; a bare fraction split is an incomplete answer."
          ],
          "keyTakeaway": "Divide before you split, and remember the split exists to serve series and integration.",
          "realWorldExample": "A savings club in Ho pays one member the fixed share plus a fraction that shrinks with each round; the ledger uses the telescoping identity 1/r - 1/(r + 1) to prove that after n rounds the club has released exactly n/(n + 1) of the fund."
        }
      ],
      "commonMistakes": [
        "Writing (x + 1)/(x - 2)^2 as A/(x - 2)^2 + B/(x + 1): the squared factor owns two terms, so the correct form is A/(x - 2) + B/(x - 2)^2.",
        "Giving a constant numerator to a quadratic factor: (B)/(x^2 + 1) cannot match a remainder of degree one; the form is (Bx + C)/(x^2 + 1).",
        "Trying cover-up on the middle constant B of a repeated factor: cover-up at x = 1 returns only C, the coefficient of the highest power; B needs a coefficient comparison.",
        "Splitting (x^2 + 1)/(x + 1) directly: the fraction is improper; dividing first gives x - 1 + 2/(x + 1), since x^2 + 1 = (x + 1)(x - 1) + 2.",
        "Expanding the cleared equation wrongly, for example writing (x - 1)^2 = x^2 - 1 and losing the -2x term, which corrupts every constant found afterwards."
      ],
      "wassceExamTips": [
        "Paper 2 theory: M1 is banked by writing the correct skeleton with undetermined constants, even before any value is found; never start the solution with an answer-only line and no form.",
        "State the cover-up substitution explicitly, for example putting x = 1 to eliminate two constants at once; examiners award method marks for the elimination idea, not for silent mental arithmetic.",
        "For a quadratic-factor numerator Bx + C, the comparison-of-coefficients lines are separately markable; write the identity in x and match x^2, x and constant terms visibly.",
        "An error carried through from a wrong A can still earn method marks in the later coefficient work (afr treatment), so complete the whole decomposition with your first value rather than restarting.",
        "Timing and order: choose x-values that zero factors first, then use one coefficient comparison to collect the leftovers; a three-constant decomposition should take well under six minutes of Paper 2 time."
      ],
      "summaryChecklist": [
        "Can I write the correct skeleton for any denominator with repeated linear or irreducible quadratic factors?",
        "Can I find all constants using cover-up, a safe substitution and comparison of coefficients?",
        "Can I handle an improper fraction by dividing first and quoting the polynomial part in the answer?",
        "Can I verify any decomposition by recombining it into the original single fraction?",
        "Can I use partial fractions to telescope a series sum such as the sum of 1/(r(r + 1))?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-pf-1",
        "title": "A Denominator with a Repeated Linear Factor",
        "problem": "Express (3x^2 - 6x - 6)/((x + 2)(x - 1)^2) in partial fractions.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the skeleton demanded by the repeated factor: A/(x + 2) + B/(x - 1) + C/(x - 1)^2.",
          "Step 2 (M1): Clear denominators: 3x^2 - 6x - 6 = A(x - 1)^2 + B(x + 2)(x - 1) + C(x + 2).",
          "Step 3 (A1): Put x = 1: -9 = 3C, so C = -3; put x = -2: 18 = 9A, so A = 2.",
          "Step 4 (M1): Compare coefficients of x^2 on both sides: 3 = A + B, hence B = 3 - 2 = 1.",
          "Step 5 (A1): The decomposition is 2/(x + 2) + 1/(x - 1) - 3/(x - 1)^2.",
          "Step 6 (A1): Check by recombining: 2(x - 1)^2 + (x + 2)(x - 1) - 3(x + 2) = (2x^2 - 4x + 2) + (x^2 + x - 2) + (-3x - 6) = 3x^2 - 6x - 6, the original numerator."
        ],
        "keyTakeaway": "Two cover-ups and one coefficient comparison fully determine a three-constant repeated-factor split."
      },
      {
        "id": "ex-shs3-em-pf-2",
        "title": "A Denominator with an Irreducible Quadratic Factor",
        "problem": "Express (x^2 + 2x + 5)/((x + 1)(x^2 + 1)) in partial fractions, noting that x^2 + 1 cannot factorise over the real numbers.",
        "stepByStepSolution": [
          "Step 1 (M1): State the skeleton with a linear numerator for the quadratic factor: A/(x + 1) + (Bx + C)/(x^2 + 1).",
          "Step 2 (M1): Clear denominators: x^2 + 2x + 5 = A(x^2 + 1) + (Bx + C)(x + 1).",
          "Step 3 (A1): Put x = -1: 1 - 2 + 5 = 2A, so A = 2.",
          "Step 4 (M1): Put x = 0: 5 = A + C, so C = 5 - 2 = 3.",
          "Step 5 (M1): Compare coefficients of x^2: 1 = A + B, so B = 1 - 2 = -1.",
          "Step 6 (A1): Hence the split is 2/(x + 1) + (3 - x)/(x^2 + 1).",
          "Step 7 (A1): Check at x = 1, a value not yet used: the fraction is 8/((2)(2)) = 2 and the split gives 2/2 + 2/2 = 2, so the identity holds."
        ],
        "keyTakeaway": "One real zero feeds cover-up, and x = 0 plus the x^2 comparison finish the two constants of the quadratic numerator."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-partfrac-hard",
      "topicId": "shs3-em-t1-partial-fractions-hard",
      "title": "Partial Fractions Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-pf-1",
          "quizId": "quiz-shs3-em-partfrac-hard",
          "questionText": "The expression (2x + 11)/((x + 1)(x + 4)) is written as A/(x + 1) + B/(x + 4), where A and B are constants. Find the values of A and B.",
          "optionA": "A = 3, B = -1",
          "optionB": "A = -1, B = 3",
          "optionC": "A = 3, B = 1",
          "optionD": "A = 2, B = 11",
          "correctOption": "A",
          "subConcept": "Distinct linear factors, cover-up",
          "explanation": "Cover-up at x = -1 gives A = (2(-1) + 11)/(-1 + 4) = 9/3 = 3, and at x = -4 gives B = (-8 + 11)/(-4 + 1) = 3/(-3) = -1. Option B swaps the constants, and C misses the negative denominator when cover-up is done at x = -4.",
          "remediationTip": "Block one factor at a time, evaluate the rest at its zero, and keep every sign of the substitution."
        },
        {
          "id": "q-em-pf-2",
          "quizId": "quiz-shs3-em-partfrac-hard",
          "questionText": "Which of the following is the correct form for the partial fraction decomposition of (3x^2 - 1)/((x - 2)^2(x + 1))?",
          "optionA": "A/(x - 2) + B/(x + 1)",
          "optionB": "A/(x - 2)^2 + B/(x + 1)",
          "optionC": "A/(x - 2) + B/(x - 2)^2 + C/(x + 1)",
          "optionD": "(Ax + B)/(x - 2) + C/(x + 1)",
          "correctOption": "C",
          "subConcept": "Repeated linear factor structure",
          "explanation": "A squared linear factor contributes one term for each power up to the square, so the form must carry A/(x - 2) and B/(x - 2)^2 plus C/(x + 1), three constants for a cubic denominator. B undercounts with two constants, A ignores the square entirely, and D reserves a linear numerator for a linear factor.",
          "remediationTip": "Count the denominator degree and match it with the number of constants before solving anything."
        },
        {
          "id": "q-em-pf-3",
          "quizId": "quiz-shs3-em-partfrac-hard",
          "questionText": "When (x^2 + 2x + 5)/((x + 1)(x^2 + 1)) = A/(x + 1) + (Bx + C)/(x^2 + 1), find A + B + C.",
          "optionA": "2",
          "optionB": "4",
          "optionC": "6",
          "optionD": "8",
          "correctOption": "B",
          "subConcept": "Quadratic factor coefficients",
          "explanation": "Clearing denominators and solving gives A = 2 from x = -1, C = 3 from x = 0, and B = -1 from the x^2 comparison, so A + B + C = 2 - 1 + 3 = 4. Option C uses B = +1, the sign slip in the comparison; D adds the numerator coefficients 1 + 2 + 5 instead.",
          "remediationTip": "Solve each constant with a named substitution, then list A, B, C with signs before combining."
        },
        {
          "id": "q-em-pf-4",
          "quizId": "quiz-shs3-em-partfrac-hard",
          "questionText": "Express (x^2 + 2x - 1)/(x - 1) in partial fractions.",
          "optionA": "x + 3 - 2/(x - 1)",
          "optionB": "x - 3 + 2/(x - 1)",
          "optionC": "x + 3 + 2/(x + 1)",
          "optionD": "x + 3 + 2/(x - 1)",
          "correctOption": "D",
          "subConcept": "Improper fractions",
          "explanation": "Division gives x^2 + 2x - 1 = (x - 1)(x + 3) + 2, so the expression is x + 3 + 2/(x - 1). Option A flips the sign of the remainder, B comes from writing the quotient as x - 3, and C keeps the wrong divisor sign in the denominator.",
          "remediationTip": "For improper fractions, perform the division first and check the remainder with f(k) at the factor zero."
        },
        {
          "id": "q-em-pf-5",
          "quizId": "quiz-shs3-em-partfrac-hard",
          "questionText": "Given that 1/(r(r + 1)) = 1/r - 1/(r + 1), find the sum for r = 1 to 5 of 1/(r(r + 1)).",
          "optionA": "5/6",
          "optionB": "1/6",
          "optionC": "5",
          "optionD": "6/5",
          "correctOption": "A",
          "subConcept": "Telescoping series from partial fractions",
          "explanation": "The sum collapses to 1 - 1/6 = 5/6 because every middle term cancels its successor; the general form is n/(n + 1) at n = 5. Option B reports only the last surviving fraction, and D inverts the result.",
          "remediationTip": "Write the first three and last three terms of the expansion and cross out the pairs that cancel before quoting the sum."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t1-counting-applications",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Permutations and Combinations: Restricted Arrangements",
    "description": "Counting with conditions: items together or apart, circular arrangements, committees with at least or at most clauses, distinguishable arrangements with repeated letters, and links to probability.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The counting principle multiplies stages: k slots with independent choices give a x b x c outcomes; use nPr = n!/(n - r)! when order matters and nCr = n!/(r!(n - r)!) when it does not.\n• Order test: if swapping two chosen objects changes the outcome, count with permutation; if not, count with combination.\n• Items together: glue the group into one block; 5 boys and 3 girls in a row with the girls together gives 6! x 3! = 720 x 6 = 4320 arrangements.\n• Items apart: seat the unrestricted group first, then place the restricted ones in the gaps; the same class with no two girls adjacent gives 5! x 6P3 = 120 x 120 = 14400.\n• The gap count uses permutation 6P3, not combination, because which gap each girl takes matters; 6P3 = 6 x 5 x 4 = 120.\n• Circular arrangements: n distinct objects around a round table give (n - 1)! because only relative position counts; 7 people give 6! = 720.\n• Circular with a pair together: treat the pair as a block; for 7 people the block plus 5 singles is 6 entities, so (6 - 1)! x 2! = 120 x 2 = 240.\n• Circular with a pair apart: subtract, 720 - 240 = 480; the complement is far quicker than gap-counting on a circle.\n• Repeated letters: divide the factorial of the total by the factorials of the repetitions; MISSISSIPPI has 11!/(4!4!2!) = 34650 distinguishable arrangements.\n• The word KUMASI has a repeated A, so its arrangements number 6!/2! = 360; forgetting the division returns the wrong 720.\n• Committee with at least: split into disjoint cases; choosing 5 from 6 men and 4 women with at least 2 women gives C(4,2)C(6,3) + C(4,3)C(6,2) + C(4,4)C(6,1) = 120 + 60 + 6 = 186.\n• At least one: the complement is fastest; committees of 4 from 5 men and 3 women with at least one woman number C(8,4) - C(5,4) = 70 - 5 = 65.\n• Selecting without order from pairs: handshakes among 9 people number C(9,2) = 36, one pair per outcome.\n• Numbers from digits: three-digit numbers from the digits 1 to 6 without repetition number 6 x 5 x 4 = 120; with repetition allowed the count rises to 6 x 6 x 6 = 216.\n• Probability links: favourable outcomes divided by total arrangements, for instance the probability that the 3 girls sit together among 8 in a row is 4320/40320 = 3/28.",
    "detailedNotes": {
      "overview": "WASSCE elevates permutations and combinations from formula substitution to conditional counting: arrangements where particular items must sit together or stay apart, round tables where rotations coincide, committees guarded by at least and at most clauses, and words whose repeated letters deflate the raw factorial. Each restriction has a standard device, block for together, gaps for apart, complement for at-least, division for repetition, and the marker awards method credit for choosing the device correctly even if a factorial is then evaluated badly. The topic also feeds the probability questions of the same paper, because restricted counts supply both numerator and denominator.",
      "introduction": "Classify each question in one sentence before touching a factorial: arrangement or selection, restricted or free, linear or circular. The classification picks the formula, and the restriction picks the device; the arithmetic is then only factorials, and every slip becomes checkable against a small list of standard values.",
      "realWorldContext": "The prefects of a senior high school in Sunyani line up for speech day under the rules of the parade master: three visiting prefects must stand together, and the rest keep gaps between groups; the prefect computing the number of parades uses the block method. At a durbash in Kumasi, elders seated around a round stool care only about who sits beside whom, which is circular counting, and the market association at Makola electing a four-person executive with at least one woman needs the case-split committee count before the ballots are printed.",
      "objectives": [
        "Choose correctly between permutation and combination for a stated counting situation",
        "Count linear arrangements with together and apart conditions using the block and gap devices",
        "Count circular arrangements and apply the complement to apart conditions",
        "Compute distinguishable arrangements of words with repeated letters",
        "Form case-split and complement counts for committees with at least or at most restrictions"
      ],
      "sections": [
        {
          "title": "Together and Apart in a Line: Block and Gap",
          "content": "The block device converts a together condition into a smaller arrangement: tie the three girls into one unit, arrange the six resulting entities in 6! = 720 ways, then untie and permute the girls internally in 3! = 6 ways, so 4320 line-ups keep the girls shoulder to shoulder. The gap device answers apart conditions: place the five boys first in 5! ways; they open six gaps, including the two ends, and the three girls must occupy three different gaps with order respected, in 6P3 = 120 ways; the product is 14400. The gap count is a permutation because girl A in gap 2 with girl B in gap 4 differs from the reverse. A quick sense-check: 4320 plus 14400 is 18720, comfortably below the unrestricted total 8! = 40320, and the balance corresponds to mixed adjacency patterns.",
          "bulletPoints": [
            "Block: arrange the bundled entities, then multiply by the internal arrangements of the block.",
            "Gap: unrestricted group first, then the restricted members into distinct gaps in order.",
            "Six gaps from five boys; choose and seat three girls in 6P3 = 120 ways.",
            "Internal order inside a block is never free: 3 girls tie in 3! = 6 ways.",
            "Check totals against the unrestricted count, such as 8! = 40320 for eight people."
          ],
          "keyTakeaway": "Together means glue and multiply; apart means seat the crowd first and drop the rest into gaps.",
          "realWorldExample": "A choir of five singers and three drummers lines up at a funeral in Cape Coast; the drummer families require the drummers to stand side by side, so the procession planner counts 6! x 3! = 4320 permissible orders."
        },
        {
          "title": "Circular Arrangements and the Complement",
          "content": "Around a round table a rotation of the same seating is the same arrangement, so n distinct people seat themselves in (n - 1)! ways: seven people give 6! = 720, not 5040. Two specials who must sit together return to the block device in circular dress: the pair plus the other five form six entities around the stool in (6 - 1)! = 120 ways, and the pair swap internally in 2 ways, so 240 seatings keep them adjacent. For the apart condition the complement wins outright: 720 - 240 = 480, a one-line subtraction, whereas direct gap counting on a circle is a trap for double-counting. Some WASSCE variants mention necklaces or keys rings where flips coincide, and then the count halves again to (n - 1)!/2; read the object before choosing.",
          "bulletPoints": [
            "Round table: fix one person and arrange the rest, giving (n - 1)!.",
            "Pair together at a circle: (entities - 1)! times the internal swap; for 7 people this is (6 - 1)! x 2! = 120 x 2 = 240.",
            "Pair apart: subtract the together count from the free circular count, 720 - 240 = 480.",
            "Flips identical (key ring, necklace): divide the circular count by 2.",
            "Never mix circular and linear values in one question; state which world you are counting in."
          ],
          "keyTakeaway": "Circular counting divides the line by n; for restrictions, block or complement, whichever finishes first.",
          "realWorldExample": "A chief and six divisional elders take seats on round stools for a durbar in Salaga; only adjacency matters to protocol, so the clerk of stools records (7 - 1)! = 720 formal seatings and 240 of those that keep two feuding elders side by side."
        },
        {
          "title": "Repeated Letters and Distinguishable Arrangements",
          "content": "Factorial counts assume every object is recognisable, and repeated letters break that assumption silently: swapping the two A of KUMASI produces no new arrangement, so the 6! line-up collapses to 6!/2! = 360 distinguishable ones. With several repetitions, divide by each repeated count separately: MISSISSIPPI has eleven letters with four I, four S and two P, giving 11!/(4!4!2!) = 34650. The division rule follows from a two-way count: label the repeated letters temporarily, arrange the 11 distinct symbols, then erase labels, which identifies exactly 4!4!2! copies of each real arrangement. Words in WASSCE questions are short, so writing the multiset, its total and its repetition counts before dividing is the whole method.",
          "bulletPoints": [
            "Identical objects: divide the factorial of the total by factorials of the repetition counts.",
            "KUMASI: 6!/2! = 360; the factor 2! comes from the two A.",
            "MISSISSIPPI: 11!/(4!4!2!) = 34650, one factorial per repeated letter group.",
            "Vowels-together and repeated-letter conditions combine: block first, then divide for repetitions.",
            "A raw 6! = 720 answer on a word with a repeated letter is a guaranteed accuracy loss."
          ],
          "keyTakeaway": "Count as if all distinct, then divide by the factorials of every repeated family.",
          "realWorldExample": "A publicity unit in Tamale prints banners spelling ADINKRA; the seven letters contain a repeated A, so the designer counts layouts as 7!/2! = 2520 by the divide-for-repetition rule before approving the print run."
        },
        {
          "title": "Committees: Cases, Complements and Probability Links",
          "content": "Committee questions select without order, so combinations rule, and the restriction decides the structure. At least two women in a five-person committee drawn from six men and four women needs three disjoint cases: two women with three men, C(4,2)C(6,3) = 6 x 20 = 120; three women with two men, C(4,3)C(6,2) = 4 x 15 = 60; and all four women with one man, C(4,4)C(6,1) = 6, for 186 committees in total. At-least-one conditions beg the complement instead: committees of four from five men and three women with at least one woman number C(8,4) - C(5,4) = 70 - 5 = 65. Finally the same counts become probabilities: the chance that three girls chosen among eight in a random row sit together is 4320/40320 = 3/28, because every arrangement is equally likely.",
          "bulletPoints": [
            "Selection has no order: write C values, never P, for committees.",
            "At least k: split into disjoint exact cases and add; do not pick k first and fill the rest freely, which double-counts.",
            "At least one: total minus the none case, 70 - 5 = 65.",
            "Key values to memorise: C(6,2) = 15, C(6,3) = 20, C(8,4) = 70, C(10,5) = 252.",
            "Probability = restricted count divided by unrestricted count, both evaluated with the same device."
          ],
          "keyTakeaway": "Disjoint cases add, complements subtract, and every committee count can be reused as a probability.",
          "realWorldExample": "A cooperative society in Koforidua with six men and four women members elects a five-person executive requiring at least two women; the returning officer computes 186 valid slates and checks the count against the unrestricted C(10,5) = 252."
        }
      ],
      "commonMistakes": [
        "Using 6! = 720 for six people around a round table: rotations coincide, so the count is (6 - 1)! = 120.",
        "Forgetting the internal arrangement of a block: seating 3 girls together among 8 people gives 6! x 3!, and quoting only 6! = 720 drops a factor of 6.",
        "Gap method with combination instead of permutation: placing three distinct girls into three of six gaps is 6P3 = 120, not C(6,3) = 20, because which girl takes which gap changes the line-up.",
        "Counting at least two women by choosing 2 of 4 women first and filling the remaining three slots freely: the same committee is then generated several times; the fix is disjoint exact cases.",
        "Dividing by 2! twice for one repeated letter, or missing one repetition group entirely: MISSISSIPPI needs 11!/(4!4!2!) = 34650; 11!/(4!4!) silently over-counts by a factor of 2."
      ],
      "wassceExamTips": [
        "Paper 1 objectives test the device recognition: together, apart, circular, repeated; spend ten seconds naming the device in the margin, then compute, because the devices produce nearby-looking numbers such as 240 and 480 that punish a mixed choice.",
        "In Paper 2 the method mark for a block calculation is on the structure line, such as 6! x 3!, so write the product of factorials before evaluating it; a lone number 4320 can score accuracy only.",
        "Committee questions pair with probability parts: the restricted count is the numerator, the unrestricted count the denominator; quoting both as factorials earns M1 even if the simplification fails.",
        "If a factorial is mis-evaluated, later parts computed from your own figure can keep method credit under carry-through treatment, so never restart a question for one arithmetic slip.",
        "Timing: restricted-arrangement questions are arithmetic-heavy but thinking-light once classified; aim for under eight minutes and use the standard values 5! = 120, 6! = 720, C(8,4) = 70 without re-deriving them."
      ],
      "summaryChecklist": [
        "Can I decide between permutation and combination from a one-sentence test on order?",
        "Can I count linear arrangements with together and apart conditions by the block and gap devices?",
        "Can I seat people at a round table and use the complement for apart conditions?",
        "Can I compute distinguishable arrangements of words with repeated letters?",
        "Can I split committee counts into disjoint cases or a complement and convert them into probabilities?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-count-1",
        "title": "Five Boys and Three Girls in a Row",
        "problem": "In how many ways can 5 boys and 3 girls be seated in a row of 8 seats so that (a) the 3 girls sit together, (b) no two girls sit together?",
        "stepByStepSolution": [
          "Step 1 (M1): Part (a): bundle the 3 girls into one block; the block plus the 5 boys form 6 entities to arrange.",
          "Step 2 (A1): The 6 entities can be ordered in 6! = 720 ways.",
          "Step 3 (M1): Within the block the 3 girls can be permuted in 3! = 6 ways, and each entity order pairs with each internal order.",
          "Step 4 (A1): Hence part (a) gives 720 x 6 = 4320 seatings.",
          "Step 5 (M1): Part (b): seat the 5 boys first in 5! = 120 ways; they create 6 gaps, one before each end included, and girls must take distinct gaps.",
          "Step 6 (M1): Arrange the 3 girls in 3 of the 6 gaps in order: 6P3 = 6 x 5 x 4 = 120.",
          "Step 7 (A1): Hence part (b) gives 120 x 120 = 14400 seatings; as a sense-check both answers lie below the unrestricted 8! = 40320."
        ],
        "keyTakeaway": "Glue for together and multiply by the internal order; gaps in order for apart."
      },
      {
        "id": "ex-shs3-em-count-2",
        "title": "A Committee with an At-Least Condition",
        "problem": "A committee of 5 is to be chosen from 6 men and 4 women. In how many ways can this be done if the committee must contain at least 2 women? Leave no case out.",
        "stepByStepSolution": [
          "Step 1 (M1): Split the at-least condition into disjoint cases by the number of women: 2, 3 or 4 women, with the men filling the remaining seats.",
          "Step 2 (M1): Case 2 women and 3 men: C(4,2) x C(6,3) = 6 x 20.",
          "Step 3 (A1): Case 3 women and 2 men: C(4,3) x C(6,2) = 4 x 15 = 60.",
          "Step 4 (A1): Case 4 women and 1 man: C(4,4) x C(6,1) = 1 x 6 = 6; collecting the cases gives 120 + 60 + 6 = 186.",
          "Step 5 (M1): Complement cross-check: total committees C(10,5) = 252; subtract 0 women, C(4,0)C(6,5) = 6, and 1 woman, C(4,1)C(6,4) = 4 x 15 = 60.",
          "Step 6 (A1): 252 - 66 = 186, agreeing with the case count, so the committee can be chosen in 186 ways."
        ],
        "keyTakeaway": "At least k splits into exact disjoint cases; a complement recount is the cheapest insurance against a missing case."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-counting-apps",
      "topicId": "shs3-em-t1-counting-applications",
      "title": "Restricted Counting Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-count-1",
          "quizId": "quiz-shs3-em-counting-apps",
          "questionText": "In how many ways can 6 people be seated around a circular table?",
          "optionA": "720",
          "optionB": "360",
          "optionC": "60",
          "optionD": "120",
          "correctOption": "D",
          "subConcept": "Circular permutations",
          "explanation": "Rotations of one another count as the same seating, so the number is (6 - 1)! = 120. Option A is the straight-line count 6!, which forgets the rotation, and B halves it as if flips also coincided, which applies to necklaces rather than tables.",
          "remediationTip": "Fix one person to stop the rotation and permute the remaining n - 1."
        },
        {
          "id": "q-em-count-2",
          "quizId": "quiz-shs3-em-counting-apps",
          "questionText": "Find the number of distinguishable arrangements of the letters of the word KUMASI.",
          "optionA": "720",
          "optionB": "360",
          "optionC": "180",
          "optionD": "40",
          "correctOption": "B",
          "subConcept": "Repeated letters",
          "explanation": "The word has six letters with the two A identical, so the count is 6!/2! = 360. Option A ignores the repetition, C divides by 2! for the wrong reason twice over, and D selects letters instead of arranging all of them.",
          "remediationTip": "List the repeated letter groups, then divide the total factorial by each group factorial once."
        },
        {
          "id": "q-em-count-3",
          "quizId": "quiz-shs3-em-counting-apps",
          "questionText": "Four boys and 2 girls are to be seated in a row of 6 seats so that the 2 girls sit together. Find the number of permissible arrangements.",
          "optionA": "120",
          "optionB": "480",
          "optionC": "240",
          "optionD": "720",
          "correctOption": "C",
          "subConcept": "Block method in a line",
          "explanation": "Treat the girls as one block: 5 entities arrange in 5! = 120 ways, and the girls swap internally in 2! = 2 ways, giving 240. Option A drops the internal swap, D is the unrestricted 6!, and B is the apart count, not the together count.",
          "remediationTip": "After bundling, multiply the entity arrangements by the internal arrangements of every bundle."
        },
        {
          "id": "q-em-count-4",
          "quizId": "quiz-shs3-em-counting-apps",
          "questionText": "A committee of 4 is chosen from 5 men and 3 women so that it must contain at least one woman. Evaluate the number of possible committees.",
          "optionA": "65",
          "optionB": "70",
          "optionC": "35",
          "optionD": "15",
          "correctOption": "A",
          "subConcept": "Complement counting for at least one",
          "explanation": "Total committees C(8,4) = 70 minus all-men committees C(5,4) = 5 give 65. Option B forgets to exclude the all-men case, C is half the total with no justification, and D counts only the one-woman selections C(5,3)C(3,1) = 30 misapplied.",
          "remediationTip": "For at-least-one conditions, compute the unrestricted total and subtract the none case."
        },
        {
          "id": "q-em-count-5",
          "quizId": "quiz-shs3-em-counting-apps",
          "questionText": "How many three-digit numbers can be formed from the digits 1 to 6 if no digit is repeated?",
          "optionA": "20",
          "optionB": "60",
          "optionC": "216",
          "optionD": "120",
          "correctOption": "D",
          "subConcept": "Permutation in slot form",
          "explanation": "The hundreds slot has 6 choices, the tens slot 5 and the units slot 4, so 6 x 5 x 4 = 120, which is 6P3. Option A uses C(6,3) = 20 and ignores order, B halves the correct count by an unnecessary division, and C allows repetition with 6^3 = 216.",
          "remediationTip": "Fill the slots one at a time and reduce the choices after each occupied slot."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t1-binomial-theorem",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 5,
    "title": "Binomial Theorem for Positive Integral Index",
    "description": "Pascal coefficients and the general term T(r+1), specific terms and coefficients, terms independent of x, middle terms, coefficients inside products, and first-terms approximation of (1+x)^n for small x.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The small expansions must be automatic: (a + b)^2 = a^2 + 2ab + b^2, (a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3, and (a - b)^2 = a^2 - 2ab + b^2 with the middle term, never a^2 + b^2.\n• Pascal triangle builds by adding the two numbers above: rows for n = 0 to 7 run 1 | 1 1 | 1 2 1 | 1 3 3 1 | 1 4 6 4 1 | 1 5 10 10 5 1 | 1 6 15 20 15 6 1 | 1 7 21 35 35 21 7 1, and each row sums to 2^n.\n• The general term of (a + b)^n is T(r+1) = C(n,r) a^(n-r) b^r, r = 0, 1, ..., n; the (r+1)th term, so the 4th term uses r = 3, not r = 4.\n• Counting identities worth keeping: C(n,r) = C(n, n-r), so C(7,3) = C(7,4) = 35, and C(8,2) = 28, C(6,4) = 15, C(8,4) = 70.\n• Coefficient hunting: in (2 + x)^7 the term in x^5 comes from r = 5, giving C(7,5) 2^2 = 21 x 4 = 84 as the coefficient of x^5.\n• Fourth term of (3 - x/2)^7: T4 = C(7,3)(3)^4(-x/2)^3 = 35 x 81 x (-x^3/8) = -2835x^3/8, that is -354.375x^3 in exact decimal form.\n• Signs alternate in (a - b)^n: odd powers of the negative second term turn those coefficients negative, so the x^3 coefficient of (2 - x)^5 is C(5,3) 2^2 (-1)^3 = -40.\n• Term independent of x: for (x^2 - 2/x)^6 the general term carries x^(12-3r) with coefficient C(6,r)(-2)^r; setting 12 - 3r = 0 gives r = 4 and the constant term C(6,4)(-2)^4 = 15 x 16 = 240.\n• Middle term: when n is even there is one middle term, T(n/2 + 1); for (1 + x)^8 it is T5 = C(8,4)x^4 = 70x^4. When n is odd there are two middle terms, T((n+1)/2) and T((n+3)/2); for (1 + x)^7 they are 35x^3 and 35x^4.\n• Sum of coefficients: substitute x = 1; for (1 + x)^n the sum is 2^n, and for (1 + 2x)^5 it is 3^5 = 243, while the constant term alone comes from x = 0.\n• Coefficients in products come from convolutions: the x^2 coefficient of (1 + x)^6 (1 - x)^4 is 1 x 6 + 6 x (-4) + 15 x 1 = -3, pairing each power from the first expansion with the matching power from the second.\n• First-terms approximation: for small x, (1 + x)^n = 1 + nx + n(n-1)x^2/2 + ...; keeping 1 + nx is the tangent-line estimate and adding the x^2 term sharpens it.\n• With x = 0.02 and n = 5: 1 + 5(0.02) + 10(0.0004) = 1.104, against the true (1.02)^5 = 1.10408 (5 d.p.), an error below one in ten thousand.\n• With x = 0.03 and n = 4: up to the x^2 term, (1.03)^4 = 1 + 0.12 + 0.0054 = 1.1254, while the full value is 1.12550881.\n• The approximation degrades as x grows: (1.5)^4 would be estimated as 1 + 4(0.5) = 3 against a true 5.0625, so the method is reserved for small x.",
    "detailedNotes": {
      "overview": "The binomial theorem for positive integral index converts a power of a two-term bracket into an ordered sum whose coefficients come from Pascal triangle or from C(n,r). WASSCE rarely asks for a full seventh-power expansion; it asks for one named term, one coefficient, one constant term, or a short approximation, all of which flow from the general term T(r+1) = C(n,r) a^(n-r) b^r. Students who internalise that single formula answer specific-term questions in three lines, and the mark scheme pays M1 for stating it with correct identification of a, b and r before any arithmetic.",
      "introduction": "Decide first which of four jobs the question sets: expand to stated powers, extract a named term, hunt a coefficient or constant, or approximate a decimal power. Each job starts from the same general term but ends differently, and writing T(r+1) explicitly is the line that unlocks all four.",
      "realWorldContext": "A kente weaver at Bonwire varies a seven-strip pattern in which each strip takes one of two colourways; the count of designs with exactly five of the second colour is C(7,5) = 21, the same number the binomial expansion of (a + b)^7 carries in its third coefficient, and the coefficient of x^5 in (2 + x)^7, namely C(7,5) x 2^2 = 84, weights those designs by two finishing options per remaining strip. A market woman at Makola who raises her GH¢ 500.00 stock value by 2 percent a month uses (1.02)^5 approximately 1 + 5(0.02) + 10(0.0004) = 1.104, so the stock is worth about GH¢ 552 after five months.",
      "objectives": [
        "Build Pascal rows and apply the general term T(r+1) = C(n,r) a^(n-r) b^r of a binomial expansion",
        "Extract a named term or the coefficient of a stated power in expansions such as (2 + x)^7 and (3 - x/2)^7",
        "Find the term independent of x in expansions with negative powers such as (x^2 - 2/x)^6",
        "Identify middle terms for even and odd indices and coefficient sums by substituting x = 1",
        "Approximate powers such as (1.02)^5 with the first three binomial terms and justify the accuracy"
      ],
      "sections": [
        {
          "title": "Pascal Triangle, C(n,r) and the General Term",
          "content": "Pascal triangle generates the coefficients of (a + b)^n: row n lists C(n,0) through C(n,n), each entry the sum of the two above it, with the useful checks that a row sums to 2^n and that the row reads the same forwards and backwards. For n = 7 the row is 1, 7, 21, 35, 35, 21, 7, 1, and the full expansion is a^7 + 7a^6b + 21a^5b^2 + 35a^4b^3 + 35a^3b^4 + 21a^2b^5 + 7ab^6 + b^7. Behind the triangle sits the general term T(r+1) = C(n,r) a^(n-r) b^r, which is the whole theorem in one line: the 4th term uses r = 3 because the indexing of terms begins at 1 while r begins at 0. Writing this line with a, b, n, r identified is what the mark scheme reads as method, and it makes a full expansion unnecessary in every question that names a single term.",
          "bulletPoints": [
            "Row n of Pascal triangle is C(n,0), C(n,1), ..., C(n,n); row 7 is 1 7 21 35 35 21 7 1.",
            "A row sums to 2^n and reads symmetrically: C(7,3) = C(7,4) = 35.",
            "General term: T(r+1) = C(n,r) a^(n-r) b^r, with r from 0 to n.",
            "The kth term corresponds to r = k - 1; the off-by-one slip is the most-quoted binomial error.",
            "State the formula before substituting; M1 is attached to the general-term line, not the final number."
          ],
          "keyTakeaway": "One line, T(r+1) = C(n,r) a^(n-r) b^r, generates every term the examiner can ask for.",
          "realWorldExample": "A Bonwire weaver planning a seven-strip cloth with exactly five indigo strips counts the designs as C(7,5) = 21, reading the number straight from the sixth entry of Pascal row 7."
        },
        {
          "title": "Specific Terms and Coefficients",
          "content": "Named-term questions are pure substitution into the general term. The 4th term of (3 - x/2)^7 has a = 3, b = -x/2, n = 7, r = 3, so T4 = C(7,3) 3^4 (-x/2)^3 = 35 x 81 x (-x^3/8) = -2835x^3/8 = -354.375x^3, exact as a fraction and terminating as a decimal. Coefficient questions shift the eye to the power: in (2 + x)^7 the x^5 term needs r = 5, giving C(7,5) 2^2 x^5 with coefficient 21 x 4 = 84. Watch the negative second term: in (2 - x)^5 the x^3 coefficient is C(5,3) 2^2 (-1)^3 = -40, and the minus sign is part of the coefficient, not decoration. Whenever a binomial carries numerical bases, raise both the number and the letter to the index; the forgotten factor 2^2 or 2^3 explains most wrong coefficients.",
          "bulletPoints": [
            "4th term of (3 - x/2)^7: r = 3 gives 35 x 81 x (-1/8) x^3 = -2835x^3/8.",
            "Coefficient of x^5 in (2 + x)^7: C(7,5) 2^2 = 84.",
            "Coefficient of x^3 in (2 - x)^5: C(5,3) 2^2 (-1)^3 = -40, sign included.",
            "Raise every factor of b to r: (-x/2)^3 is -x^3/8, since 2^3 = 8 sits in the denominator.",
            "If the paper demands ascending powers of x, order the terms by x-index before quoting any coefficient."
          ],
          "keyTakeaway": "Match the power, read off r, and let the general term deliver the coefficient with its sign attached.",
          "realWorldExample": "A cost model for a school compound in Kumasi writes the seven-year price factor as (2 + x)^7; the bursar extracting the x^5 coefficient finds 84 and uses it to price the two material lines that scale with x^5."
        },
        {
          "title": "Terms Independent of x, Middle Terms and Coefficient Sums",
          "content": "A constant term is found by tracking the power of x, not by expanding. For (x^2 - 2/x)^6 the general term is C(6,r) (x^2)^(6-r) (-2/x)^r, whose x-index is 2(6-r) - r = 12 - 3r; setting 12 - 3r = 0 gives r = 4 and the constant C(6,4)(-2)^4 = 15 x 16 = 240, and the neighbouring terms carry x^3 and x^-3, confirming uniqueness. Middle terms follow the parity of n: an even index has one middle term, T(n/2 + 1), so (1 + x)^8 has middle term C(8,4)x^4 = 70x^4, while an odd index has two, and for (1 + x)^7 they are T4 = 35x^3 and T5 = 35x^4. Coefficient sums need no expansion at all: substituting x = 1 turns every power into one, so (1 + x)^n has coefficient sum 2^n and (1 + 2x)^5 has 3^5 = 243, while x = 0 isolates the constant term.",
          "bulletPoints": [
            "Independent of x: write the general power of x as a function of r and set it to zero.",
            "For (x^2 - 2/x)^6 the power is x^(12-3r); r = 4 yields the constant 240.",
            "One middle term when n is even: (1 + x)^8 gives C(8,4)x^4 = 70x^4.",
            "Two middle terms when n is odd: (1 + x)^7 gives 35x^3 and 35x^4.",
            "Sum of coefficients: put x = 1; constant term: put x = 0; both are single-line answers."
          ],
          "keyTakeaway": "Track the exponent of x for constants, halve n for middle terms, and substitute 1 for coefficient sums.",
          "realWorldExample": "A physics class at Achimota expands (x^2 - 2/x)^6 while studying a potential model; the constant 240 is the only r-independent offset, and the students verify it by computing the r = 4 line alone."
        },
        {
          "title": "First-Terms Approximation for Small x",
          "content": "When x is small, the higher powers of x collapse, so (1 + x)^n is well approximated by its first two or three terms. With small steps: (1.02)^5 = 1 + 5(0.02) + 10(0.0004) + ... = 1.104 from three terms, against the true 1.10408, an error below one in ten thousand; two terms alone give 1.10. Likewise (1.03)^4 up to the x^2 term is 1 + 0.12 + 0.0054 = 1.1254, while the exact value is 1.12550881. The accuracy of the method rests on smallness: (1.5)^4 would be badly served by 1 + 4(0.5) = 3, since the true value is 5.0625, so always check the size of x before trusting the truncation. State how many terms you kept, because the mark scheme distinguishes the linear estimate 1 + nx from the three-term result.",
          "bulletPoints": [
            "Truncation logic: for |x| small, x^3 and beyond shrink fast and may be dropped.",
            "(1.02)^5 = 1 + 5(0.02) + 10(0.02)^2 + ... = 1.104; true value 1.10408.",
            "(1.03)^4 to the x^2 term: 1 + 0.12 + 0.0054 = 1.1254; true 1.12550881.",
            "The estimate is only the sum of the named number of leading terms; quote the term count.",
            "Large x breaks the method: 1 + 4(0.5) = 3 versus the true (1.5)^4 = 5.0625."
          ],
          "keyTakeaway": "Small x makes the first three Pascal terms a trustworthy calculator substitute; state the truncation and check the size of x.",
          "realWorldExample": "A Makola trader grows a GH¢ 500.00 stock float by 2 percent a month and budgets with (1.02)^5 approximately 1.104, giving about GH¢ 552.00 after five months without touching a calculator beyond the multiplication."
        }
      ],
      "commonMistakes": [
        "Taking the 3rd term of (a + b)^8 with C(8,3) = 56: the 3rd term corresponds to r = 2, so the coefficient is C(8,2) = 28, and T3 = 28 a^6 b^2.",
        "Writing (a + 2b)^2-style coefficients inside terms: the 3rd term of (a + 2b)^8 is C(8,2) a^6 (2b)^2 = 112 a^6 b^2, and 28a^6b^2 forgets to square the 2.",
        "Dropping the sign in alternating expansions: the x^3 coefficient of (2 - x)^5 is -40, not 40, because (-x)^3 is negative.",
        "Naming the wrong middle term: (1 + x)^8 has nine terms and middle term T5 = 70x^4; reporting T4 = 56x^3 shifts every index by one.",
        "Approximating a large base: estimating (1.5)^4 as 1 + 4(0.5) = 3 misuses the small-x method, the true value being 5.0625; the truncation only serves small x."
      ],
      "wassceExamTips": [
        "Paper 1 objectives love the coefficient of a named power, such as the coefficient of x^5 in (2 + x)^7; identify n, a, b and the required r in the margin and compute C(n,r) times the leftover powers, a full solution in under two minutes.",
        "Paper 2 theory: the general-term line T(r+1) = C(n,r) a^(n-r) b^r carries the method mark; even in an approximation question, write the first three terms symbolically before feeding in the decimal value of x.",
        "For a term independent of x, examiners expect the power-of-x equation in r shown explicitly, such as 12 - 3r = 0; a bare number 240 without that line loses the M1.",
        "If you misread the term number and stay consistent with your own r, the accuracy mark fails but method marks on the substitution lines can still be granted; keep the working legible rather than restarting.",
        "In product questions such as the x^2 coefficient of (1 + x)^6 (1 - x)^4, list the two mini-expansions up to x^2 first, then convolve: 1 x 6 + 6 x (-4) + 15 x 1 = -3; the structured list is both the method and the check."
      ],
      "summaryChecklist": [
        "Can I build Pascal rows and state the general term T(r+1) with a, b, n and r correctly identified?",
        "Can I extract a named term such as the 4th term of (3 - x/2)^7 in ascending powers of x?",
        "Can I find the coefficient of a stated power, and the term independent of x, without a full expansion?",
        "Can I state the middle term or middle terms for even and odd indices?",
        "Can I approximate a decimal power such as (1.02)^5 with three binomial terms and justify the accuracy?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-binom-1",
        "title": "A Named Term in Ascending Powers of x",
        "problem": "Find the 4th term in the expansion of (3 - x/2)^7 in ascending powers of x, giving the coefficient exactly and as a terminating decimal.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify the parts of the general term: a = 3, b = -x/2, n = 7, and the 4th term means r = 3.",
          "Step 2 (M1): Write the general term: T(r+1) = C(n,r) a^(n-r) b^r, so T4 = C(7,3) (3)^4 (-x/2)^3.",
          "Step 3 (M1): Read Pascal row 7 at entry r = 3: C(7,3) = 35; also (3)^4 = 81.",
          "Step 4 (M1): Cube the second term carefully: (-x/2)^3 = -x^3/8, since an odd power keeps the minus sign.",
          "Step 5 (A1): Multiply: T4 = 35 x 81 x (-x^3/8) = -2835x^3/8.",
          "Step 6 (A1): Hence the 4th term is -(2835/8)x^3 = -354.375x^3, exact as the fraction and terminating as the decimal."
        ],
        "keyTakeaway": "Term number minus one is the value of r, and every numerical factor inside b must be raised to that power."
      },
      {
        "id": "ex-shs3-em-binom-2",
        "title": "The Term Independent of x",
        "problem": "Find the term independent of x in the expansion of (x^2 - 2/x)^6.",
        "stepByStepSolution": [
          "Step 1 (M1): State the general term: T(r+1) = C(6,r) (x^2)^(6-r) (-2/x)^r.",
          "Step 2 (M1): Collect the powers of x: (x^2)^(6-r) gives x^(12-2r) and (-2/x)^r gives (-2)^r x^-r, so the term carries x^(12-3r) with coefficient C(6,r)(-2)^r.",
          "Step 3 (M1): For a constant term set the exponent to zero: 12 - 3r = 0, hence r = 4.",
          "Step 4 (M1): Evaluate the coefficient at r = 4: C(6,4)(-2)^4 = 15 x 16.",
          "Step 5 (A1): The term independent of x is 240.",
          "Step 6 (A1): Sanity check: r = 3 carries x^3 and r = 5 carries x^-3, so r = 4 is the only constant-producing index."
        ],
        "keyTakeaway": "Write the exponent of x as a function of r, force it to zero, and only then touch the coefficients."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-binomial",
      "topicId": "shs3-em-t1-binomial-theorem",
      "title": "Binomial Theorem Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-binom-1",
          "quizId": "quiz-shs3-em-binomial",
          "questionText": "Find the coefficient of x^3 in the expansion of (2 - x)^5.",
          "optionA": "80",
          "optionB": "40",
          "optionC": "-40",
          "optionD": "-80",
          "correctOption": "C",
          "subConcept": "Specific coefficients with a negative term",
          "explanation": "The x^3 term comes from r = 3: C(5,3) 2^2 (-1)^3 = 10 x 4 x (-1) = -40. Option B drops the minus from the odd power of (-x); A and D misplace the power of 2, using 2^3 = 8 in place of 2^2 = 4.",
          "remediationTip": "List the three factors separately: the binomial coefficient, the power of the first term, the signed power of the second."
        },
        {
          "id": "q-em-binom-2",
          "quizId": "quiz-shs3-em-binomial",
          "questionText": "Find the 3rd term in the expansion of (a + 2b)^8.",
          "optionA": "112 a^6 b^2",
          "optionB": "28 a^6 b^2",
          "optionC": "56 a^6 b^2",
          "optionD": "448 a^5 b^3",
          "correctOption": "A",
          "subConcept": "Named terms with coefficients inside",
          "explanation": "The 3rd term uses r = 2: T3 = C(8,2) a^6 (2b)^2 = 28 x 4 a^6 b^2 = 112 a^6 b^2. B forgets to square the 2 inside (2b)^2, C squares only halfway, and D is the 4th term, taken with r = 3.",
          "remediationTip": "Raise the entire second bracket, number and letter, to the power r before multiplying the coefficient."
        },
        {
          "id": "q-em-binom-3",
          "quizId": "quiz-shs3-em-binomial",
          "questionText": "Find the term independent of x in the expansion of (x + 1/x^2)^6.",
          "optionA": "6",
          "optionB": "20",
          "optionC": "1",
          "optionD": "15",
          "correctOption": "D",
          "subConcept": "Constant terms",
          "explanation": "The general term carries x^(6-r) x^(-2r) = x^(6-3r); setting 6 - 3r = 0 gives r = 2, and C(6,2) = 15. Option C mistakes the constant of the whole expansion for 1, and B reads the index line as r = 3, which yields x^-3.",
          "remediationTip": "Solve the exponent equation for r first; only r = 2 annihilates the x in this expansion."
        },
        {
          "id": "q-em-binom-4",
          "quizId": "quiz-shs3-em-binomial",
          "questionText": "Using the binomial expansion of (1 + x)^4 up to and including the term in x^2, evaluate (1.03)^4.",
          "optionA": "1.12",
          "optionB": "1.1254",
          "optionC": "1.13",
          "optionD": "1.1255",
          "correctOption": "B",
          "subConcept": "First-terms approximation",
          "explanation": "At x = 0.03: 1 + 4(0.03) + 6(0.0009) = 1 + 0.12 + 0.0054 = 1.1254. Option A keeps only the linear term, C rounds the two-term figure without justification, and D is the exact power 1.12550881 to four decimal places, which belongs to the expansion carried past x^2.",
          "remediationTip": "Quote the required number of terms with the coefficients 1, n, n(n-1)/2 visible before substituting the decimal."
        },
        {
          "id": "q-em-binom-5",
          "quizId": "quiz-shs3-em-binomial",
          "questionText": "Find the sum of the coefficients in the expansion of (1 + 2x)^5.",
          "optionA": "1",
          "optionB": "32",
          "optionC": "243",
          "optionD": "486",
          "correctOption": "C",
          "subConcept": "Coefficient sums by substitution",
          "explanation": "Setting x = 1 turns every power of x into 1, leaving the coefficient sum (1 + 2)^5 = 3^5 = 243. Option A comes from substituting x = 0, which isolates the constant term only, B evaluates 2^5 while ignoring the leading 1, and D doubles the result without cause.",
          "remediationTip": "For a coefficient sum substitute x = 1; for the constant term substitute x = 0; never average or adjust afterwards."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t2-trig-formulae",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Addition Formulae, Double and Compound Angles",
    "description": "The sum and difference formulae for sin, cos and tan, the double and half-angle results, and the harmonic form a sin x + b cos x = R sin(x plus or minus alpha) that delivers maximum and minimum values in one line.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The four addition formulae: sin(A + B) = sin A cos B + cos A sin B, sin(A - B) = sin A cos B - cos A sin B, cos(A + B) = cos A cos B - sin A sin B, cos(A - B) = cos A cos B + sin A sin B.\n  - Sine keeps the sign of the angle combination; cosine reverses it. That one rule prevents most lost marks.\n• tan(A + B) = (tan A + tan B)/(1 - tan A tan B) and tan(A - B) = (tan A - tan B)/(1 + tan A tan B); the formula fails when tan A tan B = 1 because the denominator becomes zero.\n• Recognise the pattern running backwards: \"sin 70° cos 25° - cos 70° sin 25° = sin(70° - 25°) = sin 45° = √2/2 ≈ 0.7071\".\n• Double angle comes from putting B = A: sin 2A = 2 sin A cos A; cos 2A = cos²A - sin²A = 1 - 2sin²A = 2cos²A - 1; tan 2A = 2tan A/(1 - tan²A).\n  - \"If tan θ = 3/4 then sin 2θ = 2(3/4)/(1 + 9/16) = 24/25 and cos 2θ = (1 - 9/16)/(1 + 9/16) = 7/25.\"\n• Pick the form of cos 2θ that uses the ratio you already have; with sin θ known, 1 - 2sin²θ avoids computing cos θ and avoids a quadrant argument.\n• Power and half-angle forms: sin²θ = (1 - cos 2θ)/2, cos²θ = (1 + cos 2θ)/2, sin²(θ/2) = (1 - cos θ)/2.\n• Exact values of odd angles come from compound angles: \"sin 15° = sin(45° - 30°) = (√6 - √2)/4 ≈ 0.2588\", \"cos 15° = (√6 + √2)/4\", \"tan 15° = 2 - √3\".\n• Harmonic form by matching coefficients: a sin x + b cos x = R sin(x + α) gives R cos α = a, R sin α = b, so R = √(a² + b²) and tan α = b/a.\n  - \"3 sin θ + 4 cos θ = 5 sin(θ + 53.1°)\" because R = √(9 + 16) = 5 and α = arctan(4/3) = 53.13°.\n• The sign of b decides the form: a sin x - b cos x = R sin(x - α) with the same R = √(a² + b²).\n  - \"5 sin θ - 12 cos θ = 13 sin(θ - 67.4°)\" since R = √(25 + 144) = 13 and α = arctan(12/5) = 67.38°.\n• Maximum of a sin x + b cos x is R and the minimum is -R; the maximum sits where x ± α = 90°.\n  - \"f(θ) = 3 sin θ + 4 cos θ reaches 5 at θ = 36.9° and -5 at θ = 216.9° on 0° ≤ θ ≤ 360°.\"\n• Solve equations by reducing, never by dividing: \"sin 2θ = cos θ ⇒ 2 sin θ cos θ - cos θ = 0 ⇒ cos θ(2 sin θ - 1) = 0 ⇒ θ = 30°, 90°, 150°, 270°\".\n• Periods: sin and cos repeat every 360° or 2π, tan repeats every 180° or π; list only the roots inside the stated interval.\n• Never mix units: a line such as \"sin 2θ = 1 ⇒ θ = 90° + π/2\" is wrong because degrees and radians have met inside one expression.\n• Check any formula you used by substituting one convenient angle into both sides of the result; a mismatch means a sign was flipped.",
    "detailedNotes": {
      "overview": "SHS 2 gave identities for one angle; SHS 3 asks you to combine angles, double them and then compress a sum of sine and cosine into a single wave. Every formula here is an expansion you can regenerate from the four addition formulae, so that small set of lines carries the whole topic. WASSCE uses the work in three guises: evaluate an expression without tables, prove an identity, or state the greatest value of something like 3 sin x + 4 cos x. Recognition of the pattern is rewarded, so writing the formula before the arithmetic earns M1 even when a later slip occurs.",
      "introduction": "Read the shape before you compute. An expression such as sin 70° cos 25° - cos 70° sin 25° is not a calculation, it is sin(70° - 25°) wearing a disguise. Train the eye to collapse compound angles first and expand double angles second, and only then reach for a calculator, because most method marks sit in those two first steps.",
      "realWorldContext": "In a physics laboratory at Achimota Senior High School an audio generator feeds two signals into one channel and the trace reads v = 3 sin ωt + 4 cos ωt volts. Before the student can set the amplitude scale the wave must be compressed into one sine term, and that is exactly the harmonic form: v = 5 sin(ωt + 53.1°), so the peak voltage is 5 V rather than 7 V. A supply technician in Tema who writes the same wave on a notice board uses the amplitude 5 V to choose the safety margin on the board.",
      "objectives": [
        "Expand or collapse sin(A ± B), cos(A ± B) and tan(A ± B) with the correct sign in every term",
        "Derive and apply sin 2A, the three forms of cos 2A and tan 2A",
        "Use power and half-angle forms to rewrite sin²θ and cos²θ",
        "Express a sin θ + b cos θ as R sin(θ ± α), giving R exactly and α to a stated accuracy",
        "Obtain maximum and minimum values from the harmonic form and solve trigonometric equations in a given interval in degrees or in radians"
      ],
      "sections": [
        {
          "title": "The Addition Formulae and the Sign Rule",
          "content": "Write the four formulae once and use them all year: sin(A + B) = sin A cos B + cos A sin B, sin(A - B) = sin A cos B - cos A sin B, cos(A + B) = cos A cos B - sin A sin B, cos(A - B) = cos A cos B + sin A sin B. The sine pair keeps the sign that appears between A and B, while the cosine pair flips it, and that swap is why cos(A + B) is the odd one out in so many scripts. The tangent formulae come from dividing the sine result by the cosine result, which puts the opposite sign in the denominator: tan(A + B) = (tan A + tan B)/(1 - tan A tan B). A reliable habit is to test any expansion with A = B = 45°, because sin 90° = 1 and cos 90° = 0 expose a wrong sign at once.",
          "bulletPoints": [
            "Sine keeps the sign of the combination; cosine reverses it.",
            "The tangent formula is undefined when tan A tan B = 1, which is the case A + B = 90°.",
            "Reading backwards earns a mark: sin 70° cos 25° - cos 70° sin 25° = sin 45°.",
            "Test any expansion with A = B = 45° when you are unsure of a sign.",
            "Never expand sin(A + B) as sin A + sin B; the formula is a sum of products, not a sum of ratios."
          ],
          "keyTakeaway": "Four lines of memory and one sign rule turn every compound-angle question into a collapse rather than a calculation.",
          "realWorldExample": "A carpenter at Kejetia cuts two boards that make 70° and 25° with a common edge; the angle between the boards is 70° - 25° = 45°, so the ratio needed for the offcut is sin 45° = √2/2 ≈ 0.7071."
        },
        {
          "title": "Double Angle Results and the Three Faces of cos 2A",
          "content": "Put B = A in the addition formulae and the double angle results appear: sin 2A = 2 sin A cos A and cos 2A = cos²A - sin²A. Replacing cos²A by 1 - sin²A, or sin²A by 1 - cos²A, produces the two further faces cos 2A = 1 - 2sin²A and cos 2A = 2cos²A - 1. The three faces state the same fact but are not equally convenient: when a question hands you sin θ = 5/13 and asks for cos 2θ, the form 1 - 2sin²θ gives 1 - 50/169 = 119/169 in one line, while the first face forces you to find cos θ and invites a quadrant error. Dividing sin 2A by cos 2A gives tan 2A = 2tan A/(1 - tan²A), and with tan θ = 3/4 the three results are sin 2θ = 24/25, cos 2θ = 7/25 and tan 2θ = 24/7.",
          "bulletPoints": [
            "sin 2A = 2 sin A cos A; it is neither 2 sin A nor sin A added to itself as a ratio.",
            "Three faces of cos 2A: cos²A - sin²A, 1 - 2sin²A and 2cos²A - 1.",
            "tan 2A = 2tan A/(1 - tan²A), which fails when tan A = 1 because then 2A = 90°.",
            "From tan θ = 3/4: sin 2θ = 2tan θ/(1 + tan²θ) = 24/25 and cos 2θ = (1 - tan²θ)/(1 + tan²θ) = 7/25.",
            "With sin θ = 5/13 and θ acute, cos 2θ = 119/169 while sin 2θ = 120/169; report the one asked for."
          ],
          "keyTakeaway": "Choose the form of cos 2A that uses the ratio you were given; that choice is where the method mark lives.",
          "realWorldExample": "A seat on a swing at a park for children in Tamale rises through a height modelled by 1 - cos 2A, so the double-angle form turns a two-triangle measurement into one cosine of the rope angle."
        },
        {
          "title": "Half Angles, Powers and Exact Values of Unusual Angles",
          "content": "Rearranging cos 2θ = 1 - 2sin²θ gives the power form sin²θ = (1 - cos 2θ)/2, and cos 2θ = 2cos²θ - 1 gives cos²θ = (1 + cos 2θ)/2; these rewrite a squared ratio as a first-power cosine, which is exactly what integration later demands. Halving the angle instead gives sin²(θ/2) = (1 - cos θ)/2. Exact values of angles off the standard table come from compound angles: sin 15° = sin(45° - 30°) = (√2/2)(√3/2) - (√2/2)(1/2) = (√6 - √2)/4 ≈ 0.2588, while cos 15° = (√6 + √2)/4 and tan 15° = 2 - √3. The same collapse serves 75°, and the half-angle form serves 22.5°. Keep the surd as the exact answer and label the decimal as the approximation, because an instruction such as \"in exact form\" is marked against the surd.",
          "bulletPoints": [
            "Power forms lower the degree: sin²θ = (1 - cos 2θ)/2 and cos²θ = (1 + cos 2θ)/2.",
            "Half-angle forms: sin²(θ/2) = (1 - cos θ)/2 and cos²(θ/2) = (1 + cos θ)/2.",
            "The sign taken in a half-angle result follows the quadrant of θ/2, not of θ.",
            "Worth memorising: sin 15° = (√6 - √2)/4, cos 15° = (√6 + √2)/4, tan 15° = 2 - √3.",
            "Say which value is exact and which is the three significant figure approximation when both appear."
          ],
          "keyTakeaway": "A squared ratio is a double angle in disguise, and an awkward angle is a difference of two standard angles.",
          "realWorldExample": "A form-three class in Ho tilts a solar panel by 15° from the roof slope; the effective area uses cos 15° = (√6 + √2)/4 ≈ 0.9659, so about 96.6 percent of the panel faces the sun."
        },
        {
          "title": "The Harmonic Form R sin(x ± alpha) and Greatest Values",
          "content": "To write a sin θ + b cos θ as one sine wave, expand R sin(θ + α) as R sin θ cos α + R cos θ sin α and match coefficients, giving R cos α = a and R sin α = b. Squaring and adding yields R² = a² + b², so R = √(a² + b²); dividing yields tan α = b/a. For 3 sin θ + 4 cos θ this gives R = 5 and α = 53.13°, so the expression is 5 sin(θ + 53.1°). The sign of b decides the form, because 5 sin θ - 12 cos θ = 13 sin(θ - 67.4°) with the same construction. Since a sine factor lies between -1 and 1, the greatest value is R and the least is -R; the maximum occurs when θ + α = 90°, hence θ = 90° - 53.13° = 36.87°, and the minimum half a cycle later at θ = 216.9°. State α to the accuracy demanded and keep it in degrees whenever θ is in degrees.",
          "bulletPoints": [
            "Expand first and match coefficients; that line is the method examiners are marking.",
            "R = √(a² + b²) is taken positive; a negative R reads as an unfinished answer.",
            "tan α = b/a for the form R sin(θ + α), and the sign of b selects plus or minus.",
            "Greatest value is R, least value is -R; the maximum sits where θ ± α = 90°.",
            "For 3 sin θ + 4 cos θ the maximum 5 occurs at θ = 36.9° and the minimum -5 at θ = 216.9° on 0° ≤ θ ≤ 360°."
          ],
          "keyTakeaway": "One amplitude and one phase shift: R gives the greatest value and α gives where it happens.",
          "realWorldExample": "A mains practical in Kumasi models the supply as v = 240 sin(100πt) volts; when two such waves are added the class compresses the sum into R sin(100πt ± α) so that the peak value R can be read straight off the trace."
        }
      ],
      "commonMistakes": [
        "Expanding sin(A + B) as sin A + sin B: the correct line is sin A cos B + cos A sin B, so sin 75° is not sin 45° + sin 30°.",
        "Writing cos(A + B) = cos A cos B + sin A sin B: the cosine of a sum subtracts the product term, and cos(30° + 30°) = 3/4 - 1/4 = 1/2, not 1.",
        "Reporting sin 2θ = 120/169 when cos 2θ = 119/169 was required for sin θ = 5/13; the ratio chosen must match the ratio asked for.",
        "Dividing both sides of sin 2θ = cos θ by cos θ, which silently discards the roots θ = 90° and θ = 270°; factor the equation instead.",
        "Quoting R = 13 but α = 22.6° for 5 sin θ - 12 cos θ: tan α = 12/5 gives α = 67.4°, and 22.6° is the complementary angle belonging to the cosine form."
      ],
      "wassceExamTips": [
        "Paper 2 theory: the harmonic form usually arrives as a two-part question, part a for R and α and part b for the greatest value. Part a carries the method mark for expanding and matching coefficients, so write the expansion even when the answer is obvious to you.",
        "When a question says \"without using tables, find the value of\", the marker expects a collapsed compound angle; state the collapse such as sin 45° before the surd value, since recognition earns a mark on its own.",
        "For equations in a given interval, list every root inside the interval and no root outside it; an extra root costs the accuracy mark while a missing root costs the answer mark for that branch.",
        "If an early R or α is wrong but used consistently, later parts can still collect method marks under carry-through error treatment, so never abandon a question because part a went badly.",
        "Timing: an addition-formulae question rarely deserves more than 8 to 10 minutes of Paper 2. Write the formula, substitute, simplify, and move on instead of hunting a cleverer route."
      ],
      "summaryChecklist": [
        "Can I expand sin(A ± B), cos(A ± B) and tan(A ± B) with the correct sign in every term?",
        "Can I choose the right form of cos 2θ when I am given sin θ, cos θ or tan θ?",
        "Can I find exact values of 15° and 75° by collapsing a compound angle and leave the answer in surd form?",
        "Can I express a sin θ + b cos θ as R sin(θ ± α), stating R exactly and α to one decimal place?",
        "Can I give the greatest and least values of such an expression and the angles at which they occur in a stated interval?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-trig-1",
        "title": "Using the Addition and Double Formulae Together",
        "problem": "Given that sin A = 3/5 and cos B = 12/13, where A and B are acute angles, find (a) sin(A + B), (b) cos(A + B) and (c) cos 2A, leaving each answer as a fraction.",
        "stepByStepSolution": [
          "Step 1 (M1): Recover the hidden ratios from the same right triangles: cos A = √(1 - sin²A) = √(1 - 9/25) = 4/5 and sin B = √(1 - cos²B) = √(1 - 144/169) = 5/13; both are positive because A and B are acute.",
          "Step 2 (M1): Apply the sine addition formula: sin(A + B) = sin A cos B + cos A sin B.",
          "Step 3 (A1): Substitute: (3/5)(12/13) + (4/5)(5/13) = 36/65 + 20/65 = 56/65.",
          "Step 4 (M1): Apply the cosine addition formula, remembering that the cosine of a sum subtracts: cos(A + B) = cos A cos B - sin A sin B.",
          "Step 5 (A1): Substitute: (4/5)(12/13) - (3/5)(5/13) = 48/65 - 15/65 = 33/65.",
          "Step 6 (M1): For the double angle choose the form that uses sin A directly: cos 2A = 1 - 2sin²A.",
          "Step 7 (A1): Hence cos 2A = 1 - 2(9/25) = 1 - 18/25 = 7/25, so the answers are sin(A + B) = 56/65, cos(A + B) = 33/65 and cos 2A = 7/25."
        ],
        "keyTakeaway": "Find the two hidden ratios first, then let the formulae work; using cos 2A = 1 - 2sin²A avoids a second triangle."
      },
      {
        "id": "ex-shs3-em-trig-2",
        "title": "Harmonic Form, Greatest and Least Values",
        "problem": "Express 3 sin θ + 4 cos θ in the form R sin(θ + α), where R is positive and 0° < α < 90°, giving α correct to one decimal place. Hence state the greatest value of the expression and the value of θ between 0° and 360° at which it occurs.",
        "stepByStepSolution": [
          "Step 1 (M1): Expand the required form: R sin(θ + α) = R sin θ cos α + R cos θ sin α.",
          "Step 2 (M1): Match coefficients with 3 sin θ + 4 cos θ, giving R cos α = 3 and R sin α = 4.",
          "Step 3 (M1): Square and add: R² = 3² + 4² = 25, so R = 5 because R is taken positive.",
          "Step 4 (A1): Divide the two equations: tan α = 4/3, so α = 53.1301 degrees, that is α = 53.1° correct to one decimal place.",
          "Step 5 (A1): Therefore 3 sin θ + 4 cos θ = 5 sin(θ + 53.1°).",
          "Step 6 (M1): The sine factor is at most 1, so the greatest value is R = 5 and it occurs when θ + 53.13° = 90°.",
          "Step 7 (A1): Hence θ = 90° - 53.13° = 36.87°, that is θ = 36.9°, and the least value -5 occurs at θ = 36.87° + 180° = 216.9°. Check: 3 sin 36.87° + 4 cos 36.87° = 1.800 + 3.200 = 5."
        ],
        "keyTakeaway": "Matching coefficients gives R = 5 and α = 53.1°, so the maximum 5 falls at θ = 36.9° with no further calculation."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-t2-trig-formulae",
      "topicId": "shs3-em-t2-trig-formulae",
      "title": "Compound and Double Angles Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-trig-formulae-1",
          "quizId": "quiz-shs3-em-t2-trig-formulae",
          "questionText": "Simplify sin 70° cos 25° - cos 70° sin 25°, leaving the answer in exact form.",
          "optionA": "√3/2",
          "optionB": "√2/2",
          "optionC": "1/2",
          "optionD": "1",
          "correctOption": "B",
          "subConcept": "Addition Formulae Used Backwards",
          "explanation": "The expression has the shape sin A cos B - cos A sin B, which equals sin(A - B), so it collapses to sin 45° = √2/2 ≈ 0.7071. The distractor √3/2 is sin 60°, reached by subtracting the angles wrongly as 70° - 25° = 60° or by quoting cos 30° instead.",
          "remediationTip": "Compare the given expression with the four addition formulae before using a calculator; a product of sine and cosine minus the reverse product is always a sine of a difference."
        },
        {
          "id": "q-em-trig-formulae-2",
          "quizId": "quiz-shs3-em-t2-trig-formulae",
          "questionText": "If sin θ = 5/13 and θ is acute, find the value of cos 2θ.",
          "optionA": "119/169",
          "optionB": "120/169",
          "optionC": "25/169",
          "optionD": "-119/169",
          "correctOption": "A",
          "subConcept": "Double Angle for Cosine",
          "explanation": "Using cos 2θ = 1 - 2sin²θ gives 1 - 2(25/169) = 1 - 50/169 = 119/169. The distractor 120/169 is sin 2θ = 2 sin θ cos θ = 2(5/13)(12/13), the other double ratio, so it answers a different question.",
          "remediationTip": "Read which double ratio is required, then pick the form of cos 2θ that uses the ratio already given to you."
        },
        {
          "id": "q-em-trig-formulae-3",
          "quizId": "quiz-shs3-em-t2-trig-formulae",
          "questionText": "If tan A = 1/2 and tan B = 1/3, where A and B are acute, what is the value of A + B?",
          "optionA": "30°",
          "optionB": "60°",
          "optionC": "45°",
          "optionD": "90°",
          "correctOption": "C",
          "subConcept": "Tangent Addition Formula",
          "explanation": "tan(A + B) = (1/2 + 1/3)/(1 - (1/2)(1/3)) = (5/6)/(5/6) = 1, and since A + B is acute the angle is 45°. The distractor 90° comes from treating the denominator as though it vanished, which happens only when tan A tan B equals 1.",
          "remediationTip": "Find tan(A + B) first and take the angle only afterwards; a tangent of 1 means 45°, not 90°."
        },
        {
          "id": "q-em-trig-formulae-4",
          "quizId": "quiz-shs3-em-t2-trig-formulae",
          "questionText": "Express 5 sin θ - 12 cos θ in the form R sin(θ - α), where R is positive and 0° < α < 90°, with α correct to one decimal place.",
          "optionA": "R = 13, α = 22.6°",
          "optionB": "R = 169, α = 67.4°",
          "optionC": "R = 13, α = 112.6°",
          "optionD": "R = 13, α = 67.4°",
          "correctOption": "D",
          "subConcept": "Harmonic Form",
          "explanation": "R = √(25 + 144) = 13, and matching coefficients gives tan α = 12/5, so α = 67.38°, which is 67.4° to one decimal place. The distractor 22.6° is the complementary angle 90° - 67.4°, which belongs to a cosine form rather than to R sin(θ - α), and 169 is R² left unsquared.",
          "remediationTip": "Write the expansion, match the coefficients, then divide so that tan α = 12/5 and not 5/12."
        },
        {
          "id": "q-em-trig-formulae-5",
          "quizId": "quiz-shs3-em-t2-trig-formulae",
          "questionText": "If tan θ = 3/4 and θ is acute, evaluate sin 2θ.",
          "optionA": "7/25",
          "optionB": "24/25",
          "optionC": "12/25",
          "optionD": "24/49",
          "correctOption": "B",
          "subConcept": "Double Angle from Tangent",
          "explanation": "With tan θ = 3/4 the triangle is 3, 4, 5, so sin θ = 3/5 and cos θ = 4/5, giving sin 2θ = 2(3/5)(4/5) = 24/25. The distractor 7/25 is cos 2θ = (1 - tan²θ)/(1 + tan²θ), the other double ratio, so it does not answer the question set.",
          "remediationTip": "Rebuild the triangle from tan θ, read off sin θ and cos θ, then apply sin 2θ = 2 sin θ cos θ."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t2-heights-distances",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "Angles of Elevation, Depression and Three-Dimensional Problems",
    "description": "Line-of-sight diagrams in two and three dimensions: towers, cliffs, ladders and room diagonals solved with right-angled trigonometry, including the two-station problems where the observer moves.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The angle of elevation is measured upward from the horizontal at the observer; the angle of depression is measured downward from that horizontal.\n  - Because the observer horizontal and level ground are parallel, an angle of depression at the top equals the angle of elevation from the object: both read 35° in the same diagram.\n• Standard layout: vertical object of height h, horizontal ground distance d, line of sight as the hypotenuse. Then tan x = h/d, so h = d tan x and d = h/tan x.\n  - \"A cliff 60 m above calm sea shows a boat at an angle of depression of 35°, so the boat is 60/tan 35° ≈ 85.7 m from the foot.\"\n• Use sine or cosine only when the line of sight, that is the hypotenuse, takes part; two legs mean the tangent ratio.\n• Two-station problems: the observer walks. With elevations 42° and 27° and 30 m walked, height h and nearer distance d satisfy h = d tan 42° and h = (d + 30) tan 27°.\n  - \"Eliminating h: d = 30 tan 27°/(tan 42° - tan 27°) = 15.2858/0.390879 = 39.11 m, so h = 39.11 tan 42° ≈ 35.2 m, correct to 3 significant figures.\"\n• The walked distance must appear inside the second equation; guessing a single triangle is the reason such questions are failed.\n• Three-dimensional diagonals are built twice: floor diagonal = √(length² + width²), then space diagonal = √(length² + width² + height²).\n  - \"A room 12 m by 9 m with an 8 m wall has floor diagonal √(144 + 81) = 15 m and space diagonal √(144 + 81 + 64) = √289 = 17 m.\"\n• The angle a space diagonal makes with the floor uses the floor diagonal as adjacent side: tan θ = height/floor diagonal, so θ = arctan(8/15) = 28.1°.\n• A ladder of length L leaning at angle x to the ground reaches L sin x up the wall and stands L cos x from it.\n  - \"10 m at 60° reaches 10 sin 60° ≈ 8.66 m and its foot is 10 cos 60° = 5 m from the wall.\"\n• Angles stay in degrees throughout these problems; a decimal-degree value such as 28.072° may be rounded to 28.1° when one decimal place is demanded.\n• Sensible accuracy: lengths to 3 significant figures or 1 decimal place, angles to 1 decimal place, unless the question states otherwise; round only on the final line.\n• Where no right angle exists in the figure, drop a perpendicular to create one and solve the two triangles in turn, exactly as in the SHS 2 sine and cosine rule work.\n• Check the answer for sense: the line of sight is the longest length, a height can never exceed the slant distance, and a larger angle of elevation means a shorter ground distance.",
    "detailedNotes": {
      "overview": "This topic is right-angled trigonometry wearing a word problem. The skill is turning words into a labelled diagram, deciding which two sides of the triangle are involved, and then selecting tangent, sine or cosine without hesitation. WASSCE sets it three ways: a single triangle with a tower or cliff, a two-station problem in which the observer moves, and a three-dimensional question on the diagonal of a room, tank or pyramid. Method marks are given for the diagram and for the trigonometric statement, so a candidate who writes the correct ratio but slips on arithmetic still collects most of the score.",
      "introduction": "Treat the angle of elevation as a slope and the height as the rise. Once the rise, the run and the line of sight are drawn, the problem stops being about words and becomes one triangle with one ratio. Sketch first, label the given angle and the given length on the sketch, and calculate afterwards.",
      "realWorldContext": "A final-year pupil at Sunyani measures the angle of elevation of the flagstaff on the classroom block as 42° from a point on the assembly ground, then walks 30 m straight away from the base and finds the angle has fallen to 27°. Her report to the district education office quotes a staff height of about 35.2 m, and the same two-station method is what a surveyor uses to fix the height of a water tower serving a community near Tamale.",
      "objectives": [
        "Draw and label a line-of-sight diagram showing the angle of elevation or depression and the right angle",
        "Select and apply tan, sin or cos to find an unknown height or horizontal distance",
        "Solve two-station problems in which the observer moves a stated distance along the same line",
        "Compute floor and space diagonals of a cuboid and the angle a space diagonal makes with the floor",
        "Round lengths and angles to a sensible degree of accuracy and state which quantity was rounded"
      ],
      "sections": [
        {
          "title": "Elevation, Depression and the Parallel Horizontals",
          "content": "Stand at the observation point and imagine a horizontal line at eye level. If the object lies above that line, the angle between the line and your line of sight is the angle of elevation; if the object lies below it, the angle is the angle of depression. Because the horizontal at the observer and the level ground are parallel lines cut by one transversal, an angle of depression downwards equals the angle of elevation upwards from the object, and that equality is the first method mark in most lighthouse and cliff questions. The trap is the vertical leg: the height of a cliff is opposite the angle measured at the ground but adjacent to the angle measured at the top, so which angle you use decides which ratio is correct.",
          "bulletPoints": [
            "Elevation opens upward from the observer horizontal; depression opens downward from it.",
            "Depression at the top equals elevation from the object, as alternate angles on parallel horizontals.",
            "The tangent of the angle is the vertical rise divided by the horizontal run.",
            "The complementary angle 90° - x appears when a measurement is taken from the vertical.",
            "Drawing the horizontal at eye level prevents the most common wrong-ratio error."
          ],
          "keyTakeaway": "Draw the horizontal at the observer, mark the given angle there, and the triangle will name the ratio for you.",
          "realWorldExample": "A lighthouse keeper near Elmina sights a fishing canoe at an angle of depression of 35° from the lamp, which stands 60 m above the sea, so the canoe lies 60/tan 35° ≈ 85.7 m from the foot of the lighthouse."
        },
        {
          "title": "Two-Station Problems: the Observer Moves",
          "content": "The classic WASSCE shape gives two angles of elevation taken from two points on the same straight line through the foot of the object, with the distance between the stations stated. Let the nearer station be d metres from the foot and let the height be h. Then h = d tan 42° from the first station and h = (d + 30) tan 27° from the second, because walking 30 m away adds 30 m to the run. Equating the two expressions gives d(tan 42° - tan 27°) = 30 tan 27°, so d = 15.2858/0.390879 = 39.11 m and h = 39.106 × 0.900404 = 35.211 m, reported as 35.2 m to three significant figures. The elimination step earns a mark on its own: writing the two tangent equations is real method, while inventing a single triangle is not.",
          "bulletPoints": [
            "Introduce two unknowns: the height h and the nearer distance d.",
            "Write one tangent equation for each observation station.",
            "Equate the two expressions for h, then solve for d before substituting back.",
            "Use the unrounded value of d when computing h, and round only the final answer.",
            "If the observer walks toward the object, the second run becomes d minus the distance walked."
          ],
          "keyTakeaway": "Two stations give two equations; eliminate the height, find the nearer distance, then recover the height.",
          "realWorldExample": "Pupils at Ho measure a communication mast whose elevation is 58° at the fence and 31° after walking 40 m along flat ground; the same elimination gives the mast height without anyone climbing it."
        },
        {
          "title": "Three Dimensions: Diagonals Across a Floor and Through Space",
          "content": "A cuboid of length l, width w and height h contains two right-angled triangles at once. First the floor: the diagonal across the base is √(l² + w²), so a room 12 m by 9 m has a base diagonal of √(144 + 81) = √225 = 15 m. Then the vertical triangle whose legs are that base diagonal and the height gives the space diagonal √(15² + 8²) = √289 = 17 m, which is also √(l² + w² + h²) in one line. The angle of elevation of the far ceiling corner from the near floor corner uses the base diagonal as the adjacent side and the height as the opposite side, so tan θ = 8/15 and θ = 28.072°, that is 28.1° to one decimal place. Naming the length you are using matters, because base diagonal, vertical edge and space diagonal are three different quantities and a marker awards method credit only for the correct one.",
          "bulletPoints": [
            "Base diagonal: √(l² + w²); space diagonal: √(l² + w² + h²).",
            "The angle a space diagonal makes with the floor satisfies tan θ = h/√(l² + w²).",
            "For 12 m by 9 m by 8 m: base diagonal 15 m, space diagonal 17 m, elevation angle 28.1°.",
            "The space diagonal is always the longest of the three lengths appearing in the diagram.",
            "For a pyramid, use the slant edge with the distance from the centre of the base to a corner."
          ],
          "keyTakeaway": "Apply Pythagoras twice: base diagonal first, then the vertical triangle that carries the angle of elevation.",
          "realWorldExample": "A technician in a workshop at Abossey Okai runs a cable from a floor corner of a store 12 m long, 9 m wide and 8 m high to the opposite ceiling corner, so 17 m of cable is required before waste is added."
        },
        {
          "title": "Choosing the Ratio and Rounding Sensibly",
          "content": "After the diagram ask one question: which two sides do I know or need? When the two legs are involved use tangent; when the hypotenuse appears with a leg use sine or cosine; when both legs are known but the angle is not, use the inverse tangent. A ladder 10 m long leaning at 60° to the ground reaches 10 sin 60° ≈ 8.66 m up the wall and its foot stands 10 cos 60° = 5 m out, because the ladder itself is the hypotenuse. On accuracy, WASSCE usually expects lengths to three significant figures and angles to one decimal place: writing 85.688 m where 85.7 m was demanded costs the accuracy mark, while rounding a tangent to 0.7 at the start gives an answer the examiner cannot trace to your method.",
          "bulletPoints": [
            "Leg with leg: use tan. Leg with hypotenuse: use sin or cos. Both legs known: use arctan.",
            "Line of sight, ladder length and kite string are hypotenuses; height and ground distance are legs.",
            "Keep four extra digits or the calculator memory until the last line.",
            "Lengths to 3 significant figures, angles to 1 decimal place unless the paper says otherwise.",
            "State units: metres for distances and degrees for angles; never put a degree sign on a length."
          ],
          "keyTakeaway": "Identify the two sides first, pick the ratio second, and round only on the final line.",
          "realWorldExample": "A teacher in Kumasi pays out 65 m of kite string at a sports festival and reads an angle of elevation of 52°, so the kite sits 65 sin 52° ≈ 51.2 m above hand level and 65 cos 52° ≈ 40.0 m out horizontally."
        }
      ],
      "commonMistakes": [
        "Using the tangent backwards: writing distance = 60 tan 35° = 42.0 m when the height 60 m and the angle 35° are known, so the distance should be 60/tan 35° ≈ 85.7 m.",
        "Measuring the angle of depression from the vertical instead of the horizontal, which turns a 35° depression into 55° and produces the wrong ratio.",
        "Solving only one triangle in a two-station question and inventing the walked distance; the 30 m must appear inside the second equation as d + 30.",
        "Quoting √(12² + 9²) = 15 m as the space diagonal of a room 12 m by 9 m by 8 m; the height belongs under the root, giving √289 = 17 m.",
        "Reaching for the sine rule where a right-angled triangle needs a single ratio, losing time and sometimes a mark for an unnecessary method."
      ],
      "wassceExamTips": [
        "Paper 2 theory: the diagram is part of the answer. A labelled sketch earns method credit and keeps the rest of the script consistent, so draw it even when the question prints a figure.",
        "Write the trigonometric statement in symbols before the arithmetic, for example \"tan 35° = 60/d\"; that line typically carries M1 while the final 85.7 m carries A1.",
        "Two-station tower questions are usually worth 6 to 8 marks, allocated to the two tangent equations, the elimination, the value of the nearer distance and the final height, so never stop once the distance is found.",
        "Where the paper demands three significant figures the rounding is marked: 35.211 m written as 35.21 m loses the accuracy mark even though the method was faultless.",
        "Use the final minute to check magnitude: the hypotenuse must be the longest length, so a line of sight shorter than the tower height signals an arithmetic slip worth catching."
      ],
      "summaryChecklist": [
        "Can I draw a line-of-sight diagram and mark the angle of elevation or depression at the correct horizontal?",
        "Can I decide whether to use sine, cosine or tangent from the two sides involved?",
        "Can I form and solve the pair of equations in a two-station problem to find a height?",
        "Can I find the base diagonal, the space diagonal and the angle of elevation of a space diagonal in a cuboid?",
        "Can I round my final lengths and angles to the accuracy the question demands?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-heights-1",
        "title": "Height of a Tower from Two Stations",
        "problem": "The angle of elevation of the top of a vertical tower standing on horizontal ground is 42° from a point P and 27° from a point Q, which is 30 m further from the tower along the same straight line through the foot of the tower. Find the height of the tower, correct to three significant figures.",
        "stepByStepSolution": [
          "Step 1 (M1): Let d be the distance from P to the foot of the tower and h the height; then the distance from Q to the foot is d + 30.",
          "Step 2 (M1): Write one tangent equation per station: h = d tan 42° and h = (d + 30) tan 27°.",
          "Step 3 (M1): Equate and expand: d tan 42° = d tan 27° + 30 tan 27°, so d(tan 42° - tan 27°) = 30 tan 27°.",
          "Step 4 (A1): Hence d = 30 tan 27°/(tan 42° - tan 27°) = 30(0.509525)/(0.900404 - 0.509525) = 15.2858/0.390879 = 39.106 m.",
          "Step 5 (M1): Substitute the unrounded value of d back into h = d tan 42°.",
          "Step 6 (A1): h = 39.106 × 0.900404 = 35.211 m, so the tower is 35.2 m tall, correct to three significant figures.",
          "Step 7 (A1): Check with the second station: 35.211/(39.106 + 30) = 0.509525, whose angle is 27.0°, exactly the given data."
        ],
        "keyTakeaway": "Eliminate the height, find the nearer distance 39.1 m, then recover 35.2 m; both stations must agree at the end."
      },
      {
        "id": "ex-shs3-em-heights-2",
        "title": "Space Diagonal and Its Angle of Elevation in a Cuboid",
        "problem": "A rectangular tank ABCD.EFGH measures 12 m by 9 m on the base and 8 m high. Calculate (a) the diagonal AC of the base, (b) the space diagonal AG from a base corner A to the opposite top corner G, and (c) the angle of elevation of G from A, correct to one decimal place.",
        "stepByStepSolution": [
          "Step 1 (M1): The base is a rectangle, so triangle ABC is right-angled at B and AC = √(AB² + BC²).",
          "Step 2 (A1): AC = √(12² + 9²) = √(144 + 81) = √225 = 15 m exactly.",
          "Step 3 (M1): The edge CG is vertical, so triangle ACG is right-angled at C with legs AC = 15 m and CG = 8 m; therefore AG = √(15² + 8²).",
          "Step 4 (A1): AG = √(225 + 64) = √289 = 17 m exactly, the same as √(12² + 9² + 8²).",
          "Step 5 (M1): In triangle ACG the angle at A has opposite side CG = 8 m and adjacent side AC = 15 m, so tan θ = 8/15.",
          "Step 6 (A1): θ = arctan(0.533333) = 28.072°, hence the angle of elevation is 28.1° correct to one decimal place.",
          "Step 7 (A1): Answers: AC = 15 m, AG = 17 m and the angle of elevation of G from A is 28.1°; note that AG is the longest length, which checks the ordering."
        ],
        "keyTakeaway": "Two Pythagoras steps give 15 m and 17 m, and the elevation angle uses the base diagonal 15 m as the adjacent side."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-t2-heights-distances",
      "topicId": "shs3-em-t2-heights-distances",
      "title": "Heights and Distances Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-heights-1",
          "quizId": "quiz-shs3-em-t2-heights-distances",
          "questionText": "From the top of a vertical cliff 60 m above a calm sea, the angle of depression of a boat is 35°. How far is the boat from the foot of the cliff, correct to one decimal place?",
          "optionA": "42.0 m",
          "optionB": "49.1 m",
          "optionC": "85.7 m",
          "optionD": "104.6 m",
          "correctOption": "C",
          "subConcept": "Angle of Depression to Horizontal Distance",
          "explanation": "The horizontal distance d satisfies tan 35° = 60/d, so d = 60/tan 35° = 85.7 m. The distractor 42.0 m comes from multiplying instead of dividing, that is computing 60 tan 35°, which would be the height of an object sitting 60 m away at an elevation of 35°.",
          "remediationTip": "Sketch the cliff, the sea and the line of sight, then check that the boat must lie beyond 60 m because 35° is smaller than 45°."
        },
        {
          "id": "q-em-heights-2",
          "quizId": "quiz-shs3-em-t2-heights-distances",
          "questionText": "A ladder 10 m long leans against a vertical wall and makes an angle of 60° with the horizontal ground. How far up the wall does it reach, correct to two decimal places?",
          "optionA": "8.66 m",
          "optionB": "5.00 m",
          "optionC": "10.00 m",
          "optionD": "5.77 m",
          "correctOption": "A",
          "subConcept": "Ladder as Hypotenuse",
          "explanation": "The ladder is the hypotenuse and the wall height lies opposite the 60° angle, so height = 10 sin 60° = 8.66 m. The distractor 5.00 m is 10 cos 60°, which is the distance of the foot of the ladder from the wall, so it answers a different question.",
          "remediationTip": "Label opposite, adjacent and hypotenuse on the ladder triangle before choosing sine or cosine; the wall height faces the ground angle."
        },
        {
          "id": "q-em-heights-3",
          "quizId": "quiz-shs3-em-t2-heights-distances",
          "questionText": "From the top of a building 45 m high, the angle of depression of a car parked on level ground is 20°. What is the horizontal distance of the car from the base of the building, correct to one decimal place?",
          "optionA": "16.4 m",
          "optionB": "42.3 m",
          "optionC": "131.6 m",
          "optionD": "123.6 m",
          "correctOption": "D",
          "subConcept": "Depression and the Tangent Ratio",
          "explanation": "The distance is 45/tan 20° = 45/0.363970 = 123.6 m. The distractor 131.6 m is 45/sin 20°, which gives the length of the line of sight rather than the ground distance, and 16.4 m is 45 tan 20°, the product error.",
          "remediationTip": "Decide whether the unknown is a leg or the hypotenuse: a ground distance is a leg, so the tangent ratio is the one to use."
        },
        {
          "id": "q-em-heights-4",
          "quizId": "quiz-shs3-em-t2-heights-distances",
          "questionText": "A store is 12 m long, 9 m wide and 8 m high. A cable runs from one floor corner to the opposite ceiling corner. How long is the cable?",
          "optionA": "15 m",
          "optionB": "14.4 m",
          "optionC": "21 m",
          "optionD": "17 m",
          "correctOption": "D",
          "subConcept": "Space Diagonal of a Cuboid",
          "explanation": "The space diagonal is √(12² + 9² + 8²) = √289 = 17 m. The distractor 15 m is the base diagonal √(144 + 81) only, which ignores the height, and 14.4 m is the side-face diagonal √(144 + 64).",
          "remediationTip": "Work in two stages, base diagonal first and then the vertical triangle, and remember the space diagonal is the longest length in the figure."
        },
        {
          "id": "q-em-heights-5",
          "quizId": "quiz-shs3-em-t2-heights-distances",
          "questionText": "A kite string is 65 m long and makes an angle of elevation of 52° with the horizontal. What is the vertical height of the kite above the level of the hand holding the string, correct to one decimal place?",
          "optionA": "40.0 m",
          "optionB": "51.2 m",
          "optionC": "65.0 m",
          "optionD": "83.2 m",
          "correctOption": "B",
          "subConcept": "Vertical Height from a Slant Length",
          "explanation": "Height = 65 sin 52° = 51.2 m, because the string is the hypotenuse and the height is opposite the angle of elevation. The distractor 40.0 m is 65 cos 52°, the horizontal distance, and 83.2 m comes from 65 tan 52°, which treats the string as though it were the horizontal distance.",
          "remediationTip": "Say which side the string is: a slant string is the hypotenuse, so the vertical height must be shorter than 65 m."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t2-vectors-three-d",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Vectors in Three Dimensions and the Scalar Product",
    "description": "Position vectors in i, j, k form, magnitudes, unit vectors and direction cosines, and the scalar (dot) product used to find the angle between two vectors and to test for perpendicularity.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A 3D vector is written a = a1i + a2j + a3k or as the column (a1, a2, a3), where i, j, k are unit vectors along the x, y and z axes.\n  - \"A crate moved 12i + 9j + 8k metres goes 12 m east, 9 m north and 8 m upward.\"\n• Magnitude generalises Pythagoras: |a| = √(a1² + a2² + a3²).\n  - \"|2i + 3j - 6k| = √(4 + 9 + 36) = √49 = 7\" and \"|3i - 12j + 4k| = √(9 + 144 + 16) = √169 = 13\".\n• The unit vector in the direction of a is a divided by |a|, so its magnitude is exactly 1.\n  - \"Unit vector along 6i - 3j + 2k is (6/7)i - (3/7)j + (2/7)k, since |6i - 3j + 2k| = √(36 + 9 + 4) = 7.\"\n• Direction cosines are the components of that unit vector: cos α = a1/|a|, cos β = a2/|a|, cos γ = a3/|a|, where α, β, γ are the angles with the three axes.\n  - \"For a = 2i + 3j - 6k: cos α = 2/7, cos β = 3/7, cos γ = -6/7, giving α = 73.4°, β = 64.6°, γ = 149.0°.\"\n• The direction cosines always satisfy cos²α + cos²β + cos²γ = 1; use that identity to recover a third angle from two given ones.\n  - \"Angles of 60° and 60° with the x and y axes force cos²γ = 1 - 1/4 - 1/4 = 1/2, so γ = 45°.\"\n• Scalar product: a · b = a1b1 + a2b2 + a3b3 = |a||b| cos θ, with θ the angle between the vectors placed tail to tail.\n  - \"(2i + 3j - 6k) · (-i + 4j + 2k) = -2 + 12 - 12 = -2.\"\n• To find the angle use cos θ = (a · b)/(|a||b|): evaluate the product and the two magnitudes separately, then divide on the last line.\n  - \"Angle between 2i + 2j + k and 2i - j + 2k: product 4, magnitudes 3 and 3, cos θ = 4/9, θ = 63.6°.\"\n• A zero product means the vectors are perpendicular; a negative product means the angle is obtuse and a positive product means it is acute.\n  - \"(3i + 2j - k) · (i - 2j - k) = 3 - 4 + 1 = 0, so the two vectors are at right angles.\"\n• The scalar projection of a on b is a · b/|b|, the length of the shadow of a cast on the line of b.\n  - \"Projection of 2i + 3j - 6k on i - 2j - 2k is 8/3 ≈ 2.67, since |i - 2j - 2k| = 3.\"\n• Addition, subtraction and scalar multiplication are done component by component, and the position vector of a midpoint is the average of the two position vectors.\n• Parallel vectors satisfy a = kb for some scalar k, so their components share one ratio; the magnitude of ka is |k| times |a|.\n• Angles are quoted in degrees when the question speaks in degrees, and the dot product itself is a number, never a vector.",
    "detailedNotes": {
      "overview": "Vectors leave the plane in SHS 3 by gaining one more perpendicular direction, and everything you knew about column vectors still works with a third component. The new tools are the direction cosines, which describe how a vector tilts against each axis, and the scalar product, which converts geometry into arithmetic. WASSCE asks for magnitudes, unit vectors, dot products and angles between vectors, and it favours the perpendicular test because that needs no diagram at all. Method marks are given for component working, so keep the arithmetic tidy and make sure the final answer is a number or a degree measure, never a mixture of the two.",
      "introduction": "Think of the three components as three separate answers: how far along x, how far along y, how far along z. Magnitudes combine them by Pythagoras, dot products multiply them pairwise, and angles compare two directions. Once the components are written down the geometry is already finished, and what remains is arithmetic that can be checked line by line.",
      "realWorldContext": "A porter at Makola market carries a crate from a stall to a lorry: he walks 12 m east along the row, 9 m north to the lane, and the crate is lifted 8 m onto the truck bed, so the displacement from stall to load is 12i + 9j + 8k metres with magnitude √(144 + 81 + 64) = 17 m. A turner in a workshop at Abossey Okai checks that a support rod is square to a bracket by computing a dot product of zero instead of carrying a set square up a ladder.",
      "objectives": [
        "Represent a three-dimensional displacement in i, j, k form and in column form, and add or scale such vectors",
        "Calculate the magnitude of a 3D vector and the unit vector in its direction",
        "Find the direction cosines and the angles a vector makes with the three coordinate axes",
        "Evaluate the scalar product of two vectors and use it to find the angle between them",
        "Apply the perpendicular test a · b = 0 and compute the scalar projection of one vector on another"
      ],
      "sections": [
        {
          "title": "i, j, k and Column Form in Space",
          "content": "Space has three mutually perpendicular axes, so a vector needs three numbers. The symbols i, j, k denote unit vectors along the positive x, y and z axes, and a = 2i + 3j - 6k means two units in x, three in y and minus six in z, exactly the information carried by the column form (2, 3, -6). Addition and scalar multiplication are componentwise: (2i + 3j - 6k) + (-i + 4j + 2k) = i + 7j - 4k, and 3(2i + 3j - 6k) = 6i + 9j - 18k. A position vector is measured from a chosen origin, so the displacement from A to B is the position vector of B minus the position vector of A. The midpoint rule carries over unchanged, because the position vector of the midpoint of AB is (a + b)/2 computed component by component.",
          "bulletPoints": [
            "i, j, k are unit vectors on the x, y and z axes and are mutually perpendicular.",
            "a = a1i + a2j + a3k names the same object as the column vector (a1, a2, a3).",
            "Displacement AB equals the position vector of B minus the position vector of A.",
            "Add and scale component by component; never mix a z component with a y component.",
            "The midpoint of AB has position vector (a + b)/2."
          ],
          "keyTakeaway": "Three components answer three questions: how far along x, how far along y, how far along z.",
          "realWorldExample": "A training drone released above a cocoa warehouse in Sunyani reports its position as (30, 45, 12) metres from the loading bay, meaning 30 m east, 45 m north and 12 m above the ground."
        },
        {
          "title": "Magnitude, Unit Vectors and Direction Cosines",
          "content": "The magnitude is the length of the arrow and comes from applying Pythagoras twice: |a| = √(a1² + a2² + a3²). Thus |2i + 3j - 6k| = √(4 + 9 + 36) = 7 and |3i - 12j + 4k| = √(9 + 144 + 16) = √169 = 13. Dividing a vector by its own magnitude produces the unit vector in the same direction, so the unit vector along 6i - 3j + 2k is (6/7)i - (3/7)j + (2/7)k because that vector has magnitude 7. The three components of a unit vector are called its direction cosines: cos α = a1/|a|, cos β = a2/|a|, cos γ = a3/|a|, where α, β, γ are the angles the vector makes with the positive x, y and z axes. Because a unit vector has length 1, these satisfy cos²α + cos²β + cos²γ = 1, the identity that answers the standard question about a third angle when two are given.",
          "bulletPoints": [
            "Square, add, then take the root: |a| = √(a1² + a2² + a3²), so √169 = 13 rather than 169.",
            "A unit vector has magnitude exactly 1 and keeps the direction of the original vector.",
            "Direction cosines of 2i + 3j - 6k are 2/7, 3/7 and -6/7, whose squares sum to 1.",
            "A negative direction cosine means the angle with that axis is obtuse, as γ = 149.0° here.",
            "Given 60° and 60° with two axes, cos²γ = 1 - 1/4 - 1/4 = 1/2, so the acute third angle is 45°."
          ],
          "keyTakeaway": "Find the magnitude first, divide to get the unit vector, and the components of that unit vector are the direction cosines.",
          "realWorldExample": "A guy rope from the top of a flagstaff in a school compound at Ho has direction cosines 0.60, 0.48 and 0.64, and a technician reads those numbers as the rope tilting most strongly along the x direction."
        },
        {
          "title": "The Scalar Product and the Angle Between Two Vectors",
          "content": "The scalar product multiplies two vectors and returns a single number. Algebraically a · b = a1b1 + a2b2 + a3b3, while geometrically a · b = |a||b| cos θ. Equating the two statements gives cos θ = (a · b)/(|a||b|), the standard route to the angle between two directions in space. For a = 2i + 3j - 6k and b = -i + 4j + 2k the product is -2 + 12 - 12 = -2 while |a| = 7 and |b| = √21, so cos θ = -2/(7√21) = -0.0623 and θ = 93.6°, an obtuse angle exactly as the negative product predicted. The work splits neatly into marks: one for the product, one for each magnitude and one for the inverse cosine, so keep them on separate lines and carry the surd √21 instead of a rounded decimal until the final division.",
          "bulletPoints": [
            "Multiply matching components and add: the result is a scalar, never a vector.",
            "cos θ = (a · b)/(|a||b|), with both vectors drawn tail to tail.",
            "A positive product gives an acute angle, zero gives 90°, a negative product gives an obtuse angle.",
            "Keep magnitudes in surd form such as √21 until the last step.",
            "The product is commutative, a · b = b · a, and a · a = |a|²."
          ],
          "keyTakeaway": "Three products, two magnitudes, one division: the dot formula turns an angle into arithmetic.",
          "realWorldExample": "An engineer in Tamale joining two struts modelled by (2, 2, 1) and (2, -1, 2) needs the angle between them; the product 4 and magnitudes 3 and 3 give cos θ = 4/9, so the joint is cut at 63.6°."
        },
        {
          "title": "Perpendicularity and Projection",
          "content": "Since cos 90° = 0, two non-zero vectors are perpendicular exactly when a · b = 0. Testing (3, 2, -1) against (1, -2, -1) gives 3 - 4 + 1 = 0, so the pair stands at right angles, and this algebraic test is far quicker than any drawing. The same computation exposes a hidden right angle inside solid geometry, for instance a face diagonal against an edge of a tank. Projection answers a softer question: how much of a acts along b? The scalar projection is a · b/|b|, and for a = 2i + 3j - 6k on b = i - 2j - 2k it equals 8/3 ≈ 2.67, meaning only 2.67 of the 7 units of a lie in the direction of b. The projection is zero precisely when the vectors are perpendicular, which is the same geometry expressed differently.",
          "bulletPoints": [
            "Perpendicular test: a · b = 0 for non-zero vectors, and the converse also holds.",
            "Parallel test: a = kb for some scalar k, so the components are in proportion.",
            "The scalar projection of a on b is a · b/|b|; it is a signed length, not a vector.",
            "A zero projection is the same statement as perpendicularity.",
            "The vector projection is (a · b/|b|²) b, a vector along b with the projected length."
          ],
          "keyTakeaway": "A zero dot product is a right angle, and a dot product divided by a magnitude is a shadow length.",
          "realWorldExample": "A ladder in a workshop at Abossey Okai runs along (1, -2, -1) while the bracket fixings run along (3, 2, -1); the zero product confirms the bracket is square to the ladder before any drilling starts."
        }
      ],
      "commonMistakes": [
        "Adding the squares and forgetting the root, or stopping at 169: |3i - 12j + 4k| = √169 = 13.",
        "Adding the absolute components instead of squaring them, which produces the false magnitude 3 + 12 + 4 = 19.",
        "Reporting the scalar product as a vector: (2i + 3j - 6k) · (-i + 4j + 2k) = -2, a plain number with no direction attached.",
        "Dividing by the sum of the magnitudes rather than by their product: cos θ = 4/(3 + 3) = 2/3 gives 48.2°, while the correct cos θ = 4/9 gives 63.6°.",
        "Quoting the acute angle when the dot product is negative: cos θ = -0.0623 gives θ = 93.6°, not 86.4°."
      ],
      "wassceExamTips": [
        "Paper 2 theory: vector questions are short and mechanical, commonly worth 4 to 6 marks; write |a|² = a1² + a2² + a3² as an explicit line because the substitution itself earns M1.",
        "For an angle between two vectors expect separate marks for the dot product, for each magnitude and for the final inverse cosine, so never compress the whole calculation into one untraceable line.",
        "When a question asks you to show that two vectors are perpendicular, end with the sentence \"hence a · b = 0, so the vectors are perpendicular\"; that conclusion carries a mark of its own.",
        "Give unit-vector components as exact fractions such as 6/7, 3/7 and 2/7 rather than decimals, because rounded components are treated as an accuracy loss.",
        "Carry-through applies here: an early magnitude error used consistently still earns method marks in later parts, so press on instead of restarting the question."
      ],
      "summaryChecklist": [
        "Can I write a displacement in three dimensions as i, j, k form and as a column vector?",
        "Can I compute the magnitude of a three-dimensional vector and the unit vector in its direction?",
        "Can I find the direction cosines and the angles a vector makes with each coordinate axis?",
        "Can I evaluate a scalar product and use it to find the angle between two vectors?",
        "Can I prove two vectors are perpendicular and find the scalar projection of one on the other?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-vectors3d-1",
        "title": "Magnitude, Unit Vector and Direction Cosines",
        "problem": "Given a = 2i + 3j - 6k, find (a) the magnitude of a, (b) the unit vector in the direction of a, and (c) the angles a makes with the positive x, y and z axes, correct to one decimal place.",
        "stepByStepSolution": [
          "Step 1 (M1): Square each component and add: 2² + 3² + (-6)² = 4 + 9 + 36 = 49.",
          "Step 2 (A1): |a| = √49 = 7 units.",
          "Step 3 (M1): Divide the vector by its magnitude: unit vector = a/|a| = (1/7)(2i + 3j - 6k).",
          "Step 4 (A1): The unit vector is (2/7)i + (3/7)j - (6/7)k, and checking gives (2/7)² + (3/7)² + (6/7)² = 49/49 = 1.",
          "Step 5 (M1): Read off the direction cosines: cos α = 2/7, cos β = 3/7 and cos γ = -6/7.",
          "Step 6 (A1): Taking inverse cosines gives α = 73.398°, β = 64.623° and γ = 148.997°, so α = 73.4°, β = 64.6° and γ = 149.0° to one decimal place.",
          "Step 7 (A1): Final answers: |a| = 7, the unit vector is (2/7)i + (3/7)j - (6/7)k, and the axis angles are 73.4°, 64.6° and 149.0°; the obtuse γ is expected because the k component is negative."
        ],
        "keyTakeaway": "The magnitude 7 turns the vector into exact fractional components, and those fractions are the direction cosines 73.4°, 64.6° and 149.0°."
      },
      {
        "id": "ex-shs3-em-vectors3d-2",
        "title": "Angle Between Two Vectors and a Perpendicular Test",
        "problem": "Given a = i + j + k and b = i - j + k, find (a) the angle between a and b, correct to one decimal place, and (b) test whether c = 3i + 2j - k and d = i - 2j - k are perpendicular.",
        "stepByStepSolution": [
          "Step 1 (M1): Multiply matching components and add: a · b = (1)(1) + (1)(-1) + (1)(1) = 1 - 1 + 1 = 1.",
          "Step 2 (M1): Find the magnitudes: |a| = √(1 + 1 + 1) = √3 and |b| = √(1 + 1 + 1) = √3, so |a||b| = 3.",
          "Step 3 (M1): Apply cos θ = (a · b)/(|a||b|) = 1/3.",
          "Step 4 (A1): θ = arccos(0.333333) = 70.529°, so the angle between a and b is 70.5° correct to one decimal place.",
          "Step 5 (M1): For part b form the product c · d = (3)(1) + (2)(-2) + (-1)(-1).",
          "Step 6 (A1): c · d = 3 - 4 + 1 = 0.",
          "Step 7 (A1): Because c · d = 0 and neither vector is the zero vector, c and d are perpendicular; the answers are θ = 70.5° and yes, the two vectors meet at a right angle."
        ],
        "keyTakeaway": "One product divided by the product of the two magnitudes gives 70.5°, and a product of zero proves perpendicularity without any diagram."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-t2-vectors-three-d",
      "topicId": "shs3-em-t2-vectors-three-d",
      "title": "Three-Dimensional Vectors Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-vectors3d-1",
          "quizId": "quiz-shs3-em-t2-vectors-three-d",
          "questionText": "Find the magnitude of the vector 3i - 12j + 4k.",
          "optionA": "13",
          "optionB": "169",
          "optionC": "19",
          "optionD": "12.4",
          "correctOption": "A",
          "subConcept": "Magnitude in Three Dimensions",
          "explanation": "The magnitude is √(3² + (-12)² + 4²) = √(9 + 144 + 16) = √169 = 13. The distractor 169 stops before taking the square root and 19 adds the absolute components instead of squaring them, while 12.4 comes from using only the first two components, √(9 + 144).",
          "remediationTip": "Write the three squares on one line, add them, and take the root once at the end."
        },
        {
          "id": "q-em-vectors3d-2",
          "quizId": "quiz-shs3-em-t2-vectors-three-d",
          "questionText": "Evaluate the scalar product of 4i - 2j + 5k and 3i + j - 2k and state what the result shows about the angle between them.",
          "optionA": "24, so the vectors point in the same direction",
          "optionB": "0, so the vectors are perpendicular",
          "optionC": "20, so the angle between them is acute",
          "optionD": "4, so the vectors have equal magnitude",
          "correctOption": "B",
          "subConcept": "Perpendicular Test",
          "explanation": "Multiplying matching components gives (4)(3) + (-2)(1) + (5)(-2) = 12 - 2 - 10 = 0, and a zero scalar product between non-zero vectors means the angle is 90°. The distractor 24 turns every product positive, and 20 changes only one sign, both of which are careless sign slips.",
          "remediationTip": "Do each product on its own line with its sign attached, then add the three results."
        },
        {
          "id": "q-em-vectors3d-3",
          "quizId": "quiz-shs3-em-t2-vectors-three-d",
          "questionText": "Calculate the angle between the vectors 2i + 2j + k and 2i - j + 2k, correct to one decimal place.",
          "optionA": "63.6°",
          "optionB": "26.4°",
          "optionC": "48.2°",
          "optionD": "116.4°",
          "correctOption": "A",
          "subConcept": "Angle Between Vectors",
          "explanation": "The dot product is 4 - 2 + 2 = 4 and each magnitude is √(4 + 4 + 1) = 3, so cos θ = 4/(3 × 3) = 4/9 and θ = 63.61°, which is 63.6°. The distractor 48.2° divides by the sum 3 + 3 instead of the product 3 × 3, and 26.4° uses the inverse sine rather than the inverse cosine.",
          "remediationTip": "Remember that the denominator is the product of the two magnitudes, and use arccos because the formula produces a cosine."
        },
        {
          "id": "q-em-vectors3d-4",
          "quizId": "quiz-shs3-em-t2-vectors-three-d",
          "questionText": "Which of the following is a unit vector in the direction of 6i - 3j + 2k?",
          "optionA": "(6/13)i - (3/13)j + (2/13)k",
          "optionB": "(6/7)i + (3/7)j + (2/7)k",
          "optionC": "(6/7)i - (3/7)j + (2/7)k",
          "optionD": "(6/19)i - (3/19)j + (2/19)k",
          "correctOption": "C",
          "subConcept": "Unit Vectors",
          "explanation": "The magnitude is √(36 + 9 + 4) = 7, and dividing each component by 7 gives (6/7)i - (3/7)j + (2/7)k, whose magnitude is exactly 1. Option B drops the negative sign on the j component so it points elsewhere, while options A and D divide by 13 and 19, neither of which is the magnitude.",
          "remediationTip": "Find the magnitude first, then divide every component by that same number and keep each original sign."
        },
        {
          "id": "q-em-vectors3d-5",
          "quizId": "quiz-shs3-em-t2-vectors-three-d",
          "questionText": "A vector makes angles of 60° with the positive x-axis and 60° with the positive y-axis. What acute angle does it make with the positive z-axis?",
          "optionA": "30°",
          "optionB": "60°",
          "optionC": "90°",
          "optionD": "45°",
          "correctOption": "D",
          "subConcept": "Direction Cosines",
          "explanation": "The direction cosines satisfy cos²α + cos²β + cos²γ = 1, so 1/4 + 1/4 + cos²γ = 1 gives cos²γ = 1/2 and cos γ = 1/√2, hence γ = 45°. The distractor 90° would follow only if the first two squares already summed to 1, which they do not.",
          "remediationTip": "Square cos 60° = 1/2 to get 1/4, add the two known squares, subtract the total from 1 and take the positive root for an acute angle."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t2-differentiation-rules",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Differentiation: First Principles and the Standard Rules",
    "description": "Gradient as the limit of an average rate, differentiation of x^2 from first principles, the power, constant multiple, sum, product, quotient and chain rules, and the second derivative.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• The difference quotient between x and x + h is [f(x + h) - f(x)]/h; letting h shrink to zero gives the derivative, the instantaneous rate of change.\n  - \"From first principles on f(x) = x^2: [(x + h)^2 - x^2]/h = (2xh + h^2)/h = 2x + h, which tends to 2x.\"\n• Three habits make first-principles work safe: expand the square fully, cancel the unfixed terms, divide every remaining term by h, and only then set h = 0.\n• Power rule: d/dx (x^n) = n x^(n-1) for any constant n; a constant factor stays out front and a sum or difference differentiates term by term.\n  - \"d/dx (4x^3 - 3x^2 + 5x - 7) = 12x^2 - 6x + 5\", and the constant -7 contributes 0.\n• A constant differentiates to zero while x differentiates to 1; writing d/dx (5) = 5 is the classic lost mark.\n  - \"d/dx (1/x) = d/dx x^-1 = -x^-2 = -1/x^2\" and \"d/dx √x = d/dx x^(1/2) = 1/(2√x)\".\n• Product rule: d/dx (uv) = u dv/dx + v du/dx.\n  - \"d/dx [(2x + 1)(x^2 - 3)] = 2(x^2 - 3) + (2x + 1)(2x) = 6x^2 + 2x - 6\", matching the expanded form y = 2x^3 + x^2 - 6x - 3.\n• Quotient rule: d/dx (u/v) = (v du/dx - u dv/dx)/v^2, with the derivative of the numerator written first.\n  - \"d/dx [(5x - 1)/(2x + 3)] = [5(2x + 3) - 2(5x - 1)]/(2x + 3)^2 = 17/(2x + 3)^2\", which is 17/9 ≈ 1.889 at x = 0.\n• Chain rule on a power of a linear expression: bring the power down, keep the base and reduce the index by one, then multiply by the derivative of the base.\n  - \"d/dx (3x - 2)^4 = 4(3x - 2)^3 × 3 = 12(3x - 2)^3\", which gives 12 at x = 1 and 768 at x = 2.\n• Forgetting that final inner factor is the top chain-rule slip: writing 3(2x - 5)^2 instead of 6(2x - 5)^2 leaves the answer exactly half of the truth.\n• The second derivative comes from differentiating the gradient function again, written d²y/dx².\n  - \"y = 2x^3 - 5x^2 + 4x gives dy/dx = 6x^2 - 10x + 4 and d²y/dx² = 12x - 10; at x = 3 the values are 28 and 26.\"\n• Numerical check: a derivative at a point is the slope of a very short chord, so [f(x + h) - f(x - h)]/(2h) with h = 0.001 must agree with your rule to a few decimal places.\n• Notation must stay straight: dy/dx is a function of x, d/dx is an operator that needs something after it, and the value of dy/dx at x = 2 is a single number.\n• Every rule here rests on the limit definition, so quoting the difference quotient in a theory answer is safe method writing that earns marks even when the algebra afterwards is hurried.",
    "detailedNotes": {
      "overview": "Differentiation starts with a question about speed: how fast is a quantity changing at one instant rather than over an interval. The answer is a limit of average rates, and from that limit a small family of rules grows, each handling a whole class of functions instantly. WASSCE asks for first-principles work on a quadratic, then standard rules on polynomials, products, quotients and simple composite powers, and finally the second derivative. Method marks sit in the statement of the rule and in the algebra that follows it, so writing the formula before simplifying protects your score when a sign slips.",
      "introduction": "Read a derivative as a slope that changes with x. Every rule in this topic is a shortcut for measuring that slope, and the shortcuts only make sense once you have watched one slope emerge from the difference quotient. Begin each problem by naming the structure in front of you: a sum of powers, a product, a quotient, or a power of a linear expression.",
      "realWorldContext": "A tutor at a private school in Cape Coast records the volume of water in a storage tank as V = 4t^3 - 3t^2 + 5t - 7 litres after t seconds. The filling rate at the instant t = 2 is not an average over the previous minute but the derivative 12t^2 - 6t + 5 evaluated at 2, which gives 41 litres per second; a plumber reading that figure decides whether the pump can keep up at all.",
      "objectives": [
        "Form the difference quotient and obtain the derivative of x^2 from first principles",
        "Apply the power, constant multiple and sum or difference rules to any polynomial",
        "Differentiate products of two functions using the product rule and verify by expanding first",
        "Differentiate quotients of two functions using the quotient rule with the correct order",
        "Apply the chain rule to powers of linear expressions and compute a second derivative at a point"
      ],
      "sections": [
        {
          "title": "From Average Gradient to the Difference Quotient",
          "content": "The gradient of the chord joining (x, f(x)) to (x + h, f(x + h)) is [f(x + h) - f(x)]/h, an average rate of change over a window of width h. Shrinking the window turns the chord into the tangent, which is why the derivative is defined as the limit of that quotient as h tends to zero. Working with f(x) = x^2 gives [(x + h)^2 - x^2]/h = [x^2 + 2xh + h^2 - x^2]/h = (2xh + h^2)/h = 2x + h, and setting h = 0 leaves 2x. Three habits matter: expand the square completely, cancel the x^2 terms before dividing by h, and only then let h go to zero. Attempting to divide by h before cancelling leaves h in the denominator and produces an apparent infinity that is pure algebra error.",
          "bulletPoints": [
            "The difference quotient is the change in y divided by the change in x over a window of width h.",
            "Expand (x + h)^2 as x^2 + 2xh + h^2; the middle term is the whole point of the exercise.",
            "Cancel the copies of the original function first, then divide every remaining term by h.",
            "Set h = 0 last; the expression that survives is the derivative.",
            "A derivative at a number is a slope: for y = x^2 the value at x = 3 is 6."
          ],
          "keyTakeaway": "The derivative is what remains of the chord gradient when the window width goes to zero.",
          "realWorldExample": "A runner on the Independence Avenue inter-school track covers s = t^2 metres in t seconds; the difference quotient over 0.1 s near t = 5 reads 10.1 m/s while the exact derivative 2t gives 10 m/s as the window shrinks."
        },
        {
          "title": "Power, Constant Multiple and Sum Rules",
          "content": "Differentiating x^n from first principles yields the power rule n x^(n-1), and two companion rules make polynomials routine: a constant times a function differentiates to the constant times the derivative, and a sum or difference differentiates term by term. Therefore d/dx (4x^3 - 3x^2 + 5x - 7) = 12x^2 - 6x + 5, the constant term vanishing because a horizontal line has no slope. The same rules cover the indices met in SHS 1: x^-1 differentiates to -x^-2, so d/dx (1/x) = -1/x^2, and √x = x^(1/2) differentiates to (1/2)x^(-1/2), that is 1/(2√x). To check any of this, evaluate the derivative at a number and compare with a short chord; for the cubic above the value 41 at x = 2 agrees with a central difference quotient of width 0.001.",
          "bulletPoints": [
            "Bring the index down as a coefficient and reduce the index by one: d/dx x^n = n x^(n-1).",
            "The derivative of a constant is 0 and the derivative of x is 1.",
            "Differentiate each term of a polynomial separately; sums and differences are termwise.",
            "Rewrite 1/x as x^-1 and √x as x^(1/2) before applying the power rule.",
            "Leave the answer simplified, factorised where a common factor exists."
          ],
          "keyTakeaway": "Three short rules, applied term by term, handle every polynomial in the syllabus.",
          "realWorldExample": "A cost clerk in Tamale models the printing cost of exercise books as C = 200 + 3x^2 cedis for x books, so dC/dx = 6x cedis per extra book and the marginal cost of the tenth book is about 60 cedis."
        },
        {
          "title": "Product and Quotient Rules",
          "content": "When two functions are multiplied, the slope of the product depends on both slopes, and the rule is d/dx (uv) = u dv/dx + v du/dx. For y = (2x + 1)(x^2 - 3) this gives 2(x^2 - 3) + (2x + 1)(2x) = 6x^2 + 2x - 6, and expanding the product first to 2x^3 + x^2 - 6x - 3 and differentiating confirms the same result, a check worth making in an examination. The quotient rule, d/dx (u/v) = (v du/dx - u dv/dx)/v^2, places the derivative of the numerator first, and reversing that order flips the sign of the whole answer. With u = 5x - 1 and v = 2x + 3 the numerator becomes 5(2x + 3) - 2(5x - 1) = 10x + 15 - 10x + 2 = 17, so dy/dx = 17/(2x + 3)^2; at x = 0 the value is 17/9 ≈ 1.889 and the constant positive numerator shows the function rises for every permissible x.",
          "bulletPoints": [
            "Product rule: first times derivative of the second plus second times derivative of the first.",
            "Quotient rule: the base times the derivative of the top, minus the top times the derivative of the base, over the base squared.",
            "Keep the squared denominator in the final answer; dropping the square is a common slip.",
            "Simplify the numerator fully, since many products collapse to a constant such as 17.",
            "Expand first as a checking route when both factors are polynomials."
          ],
          "keyTakeaway": "Products need two terms; quotients need the correct order and a squared denominator.",
          "realWorldExample": "A market woman in Kumasi sells (x + 2) packets at (x^2 - 3) cedis each, so her takings are (x + 2)(x^2 - 3) cedis and the rate of change of takings is 3x^2 + 4x - 1 cedis per extra unit of scale."
        },
        {
          "title": "Chain Rule for Linear Inner Functions and the Second Derivative",
          "content": "When a function with x still inside it is raised to a power, differentiate in two layers: bring the power down, keep the base unchanged with the reduced index, then multiply by the derivative of the base. Thus d/dx (3x - 2)^4 = 4(3x - 2)^3 × 3 = 12(3x - 2)^3, which equals 12 at x = 1 and 768 at x = 2. Skipping that final multiplication by 3 is the single most common error in this topic and it costs the accuracy mark even when the method looks sound. Differentiating the slope function a second time produces the second derivative: for y = 2x^3 - 5x^2 + 4x we get dy/dx = 6x^2 - 10x + 4 and d²y/dx² = 12x - 10, whose value at x = 3 is 26 while the first derivative there is 28. The two numbers mean different things: the first is the slope of the curve, the second is how fast that slope is changing.",
          "bulletPoints": [
            "Chain rule for (ax + b)^n: the answer carries the extra factor a, so it is an(ax + b)^(n-1).",
            "The inner derivative of 3x - 2 is 3, and of 2x - 5 is 2; multiply by it at the end.",
            "The second derivative is written d²y/dx² and comes from differentiating dy/dx again.",
            "At x = 3 for y = 2x^3 - 5x^2 + 4x the first derivative is 28 and the second is 26.",
            "Verify by a short chord: a central difference quotient with h = 0.001 must match your dy/dx value."
          ],
          "keyTakeaway": "Peel the power, keep the base, multiply by the inner derivative, then differentiate once more for the second derivative.",
          "realWorldExample": "A ball dropped beside a building at Achimota has height h = 100 - 5t^2 metres, so dh/dt = -10t gives the velocity and d²h/dt² = -10 gives a constant downward acceleration of 10 metres per second squared."
        }
      ],
      "commonMistakes": [
        "Writing d/dx (5) = 5 instead of 0: a constant has no slope, so the derivative of any constant term is zero.",
        "Leaving the index unchanged when applying the power rule: d/dx x^3 = 3x^2, not 3x^3.",
        "Forgetting the inner factor in the chain rule: d/dx (3x - 2)^4 = 12(3x - 2)^3, not 4(3x - 2)^3, and d/dx (2x - 5)^3 = 6(2x - 5)^2, not 3(2x - 5)^2.",
        "Reversing the numerator of the quotient rule: writing 2(5x - 1) - 5(2x + 3) gives -17/(2x + 3)^2 instead of the correct 17/(2x + 3)^2.",
        "Confusing the two derivative values: for y = 2x^3 - 5x^2 + 4x at x = 3 the first derivative is 28 and the second derivative is 26, so quoting 28 in a second-derivative part is wrong."
      ],
      "wassceExamTips": [
        "Paper 2 theory: a first-principles question is worth about 5 marks, allocated to stating the limit definition, expanding the square, cancelling, dividing by h and finally setting h = 0; write all five lines even when they feel obvious.",
        "When the instruction says differentiate, do not integrate or solve; turning the task around wastes the whole time allowance and earns no credit.",
        "If part a asks for dy/dx and part b for its value at x = 2, carry the exact expression from part a; a wrong part a used consistently still earns method credit in part b through carry-through treatment.",
        "The product and quotient rules appear more often in Section C theory than in the objective paper, so practise writing u, v and the two derivatives as four labelled lines before combining them.",
        "Use the last minute of a differentiation question to check a value numerically: the slope of a chord of width 0.001 should agree with your dy/dx to two or three decimal places."
      ],
      "summaryChecklist": [
        "Can I derive the derivative of x^2 from first principles by expanding, cancelling and letting h tend to zero?",
        "Can I differentiate any polynomial with the power, constant multiple and sum rules?",
        "Can I apply the product rule and confirm the result by expanding first?",
        "Can I apply the quotient rule with the correct order in the numerator?",
        "Can I use the chain rule on (ax + b)^n and find a second derivative at a point?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-diff-1",
        "title": "First Principles on x^2 and a Polynomial Rule",
        "problem": "(a) Use first principles to differentiate f(x) = x^2. (b) Hence, or otherwise, find the gradient of the curve y = 3x^2 - 4x + 1 at the point where x = 2.",
        "stepByStepSolution": [
          "Step 1 (M1): State the definition: the derivative is the limit, as h tends to zero, of [f(x + h) - f(x)]/h.",
          "Step 2 (M1): Substitute f(x) = x^2 to obtain [(x + h)^2 - x^2]/h.",
          "Step 3 (M1): Expand the square: [x^2 + 2xh + h^2 - x^2]/h = [2xh + h^2]/h.",
          "Step 4 (A1): Divide every term by h to get 2x + h, then let h tend to zero, giving the derivative as 2x.",
          "Step 5 (M1): Differentiate the quadratic term by term with the power and sum rules: dy/dx = 6x - 4 + 0.",
          "Step 6 (A1): Substitute x = 2: dy/dx = 6(2) - 4 = 12 - 4 = 8, so the gradient at that point is 8.",
          "Step 7 (A1): Check numerically: with h = 0.001 the central difference quotient gives 8.000, and the point on the curve is (2, 3(4) - 8 + 1) = (2, 5)."
        ],
        "keyTakeaway": "First principles on x^2 give 2x, and the same structure applied by rule gives a gradient of 8 at x = 2 for 3x^2 - 4x + 1."
      },
      {
        "id": "ex-shs3-em-diff-2",
        "title": "Quotient Rule with a Numerical Check",
        "problem": "Differentiate y = (5x - 1)/(2x + 3) with respect to x, and find the value of dy/dx at x = 0, giving the decimal value correct to three decimal places.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify u = 5x - 1 and v = 2x + 3, then differentiate each: du/dx = 5 and dv/dx = 2.",
          "Step 2 (M1): Quote the quotient rule: dy/dx = (v du/dx - u dv/dx)/v^2.",
          "Step 3 (M1): Substitute: dy/dx = [(2x + 3)(5) - (5x - 1)(2)]/(2x + 3)^2.",
          "Step 4 (A1): Expand the numerator carefully: (10x + 15) - (10x - 2) = 10x + 15 - 10x + 2 = 17.",
          "Step 5 (A1): Hence dy/dx = 17/(2x + 3)^2, and because the numerator is a positive constant the curve rises for every x except x = -3/2.",
          "Step 6 (M1): Put x = 0 in the derivative: dy/dx = 17/3^2 = 17/9.",
          "Step 7 (A1): 17/9 = 1.888..., that is 1.889 correct to three decimal places, and the chord check [y(0.001) - y(-0.001)]/0.002 = 1.889 agrees, so the answers are dy/dx = 17/(2x + 3)^2 with value 17/9 at x = 0."
        ],
        "keyTakeaway": "The quotient numerator collapses to the constant 17, giving dy/dx = 17/(2x + 3)^2 and the value 17/9 ≈ 1.889 at x = 0."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-t2-differentiation-rules",
      "topicId": "shs3-em-t2-differentiation-rules",
      "title": "Differentiation Rules Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-diff-rules-1",
          "quizId": "quiz-shs3-em-t2-differentiation-rules",
          "questionText": "Differentiate y = x^4 - 3x^3 + 2x - 5 with respect to x.",
          "optionA": "4x^3 - 9x^2 + 2",
          "optionB": "4x^3 - 3x^2 + 2",
          "optionC": "4x^3 - 9x^2 + 2x",
          "optionD": "x^5/5 - 3x^4/4 + x^2 - 5x",
          "correctOption": "A",
          "subConcept": "Power and Sum Rules",
          "explanation": "Term by term: 4x^3 from x^4, -9x^2 from -3x^3, 2 from 2x and 0 from the constant -5, giving 4x^3 - 9x^2 + 2. Option B differentiates -3x^3 as though the coefficient stayed, option C fails to reduce the index on the 2x term, and option D integrates instead of differentiating.",
          "remediationTip": "Work one term at a time: multiply by the index, then reduce the index by one, and drop constants entirely."
        },
        {
          "id": "q-em-diff-rules-2",
          "quizId": "quiz-shs3-em-t2-differentiation-rules",
          "questionText": "Find dy/dx for y = x(x + 3)^2.",
          "optionA": "3x^2 + 12x + 9",
          "optionB": "x^2 + 6x + 9",
          "optionC": "3x^2 + 6x + 9",
          "optionD": "(x + 3)^2",
          "correctOption": "A",
          "subConcept": "Product Rule or Expansion First",
          "explanation": "Expanding gives y = x^3 + 6x^2 + 9x, so dy/dx = 3x^2 + 12x + 9; the product rule yields the identical line (x + 3)^2 + 2x(x + 3) = 3x^2 + 12x + 9. Option B is merely the expansion of (x + 3)^2 with no differentiation, and option C omits the 6x produced by differentiating the factor x.",
          "remediationTip": "Where both factors are polynomials, expand first and use the power rule; it is faster and safer than the product rule."
        },
        {
          "id": "q-em-diff-rules-3",
          "quizId": "quiz-shs3-em-t2-differentiation-rules",
          "questionText": "Differentiate y = (2x - 5)^3 with respect to x.",
          "optionA": "3(2x - 5)^2",
          "optionB": "(2x - 5)^2",
          "optionC": "6(2x - 5)^2",
          "optionD": "6(2x - 5)",
          "correctOption": "C",
          "subConcept": "Chain Rule with a Linear Inner Function",
          "explanation": "The chain rule gives dy/dx = 3(2x - 5)^2 × 2 = 6(2x - 5)^2, the extra factor 2 being the derivative of the inner expression 2x - 5. Option A is the outer differentiation only, which is the standard slip, and option D reduces the index by two.",
          "remediationTip": "Say the rule in words: power down, index minus one, then multiply by the derivative of the inside."
        },
        {
          "id": "q-em-diff-rules-4",
          "quizId": "quiz-shs3-em-t2-differentiation-rules",
          "questionText": "Evaluate d/dx of 3x/(x + 1).",
          "optionA": "3x/(x + 1)^2",
          "optionB": "3",
          "optionC": "(6x + 3)/(x + 1)^2",
          "optionD": "3/(x + 1)^2",
          "correctOption": "D",
          "subConcept": "Quotient Rule",
          "explanation": "With u = 3x and v = x + 1 the rule gives [(x + 1)(3) - 3x(1)]/(x + 1)^2 = (3x + 3 - 3x)/(x + 1)^2 = 3/(x + 1)^2. Option C adds the two products instead of subtracting them, which is the reversed-sign slip, and option B cancels across the fraction as though the denominator divided away.",
          "remediationTip": "List u, v, du/dx and dv/dx first, then substitute into (v du/dx - u dv/dx)/v^2 in that fixed order."
        },
        {
          "id": "q-em-diff-rules-5",
          "quizId": "quiz-shs3-em-t2-differentiation-rules",
          "questionText": "Given y = 2x^3 - 5x^2 + 4x, find the value of the second derivative d²y/dx² when x = 3.",
          "optionA": "28",
          "optionB": "26",
          "optionC": "46",
          "optionD": "12",
          "correctOption": "B",
          "subConcept": "Second Derivative at a Point",
          "explanation": "The first derivative is 6x^2 - 10x + 4 and the second is 12x - 10, so at x = 3 the second derivative is 36 - 10 = 26. The distractor 28 is the value of the first derivative at x = 3, so it answers a different question, and 46 comes from the sign error 36 + 10.",
          "remediationTip": "In a second-derivative part, differentiate twice on separate labelled lines, giving dy/dx first and d²y/dx² second, before you substitute."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t2-differentiation-application",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 10,
    "title": "Applications of Differentiation: Tangents, Normals and Rates",
    "description": "The derivative as the slope of a tangent at a point, the equation of the normal, differentials for small changes and approximate errors, and related rates for volume, area and motion.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The value of dy/dx at x = a is the slope of the tangent to the curve at the point (a, y) there; tangent questions are slope questions with a line equation attached.\n  - \"For y = x^3 - 4x + 1 at x = 2: the point is (2, 1), dy/dx = 3x^2 - 4 = 8, so y - 1 = 8(x - 2).\"\n• Tangent equation: y - y1 = m(x - x1) with m equal to dy/dx at the point; expand into y = mx + c or ax + by + c = 0 as the question demands.\n  - \"The tangent to y = x^3 - 4x + 1 at x = 2 is y = 8x - 15, that is 8x - y - 15 = 0.\"\n• The normal is perpendicular to the tangent at the same point, so its slope is -1/m while the point stays unchanged.\n  - \"Normal slope -1/8 gives y - 1 = -(1/8)(x - 2), that is x + 8y - 10 = 0.\"\n• Always compute the y-coordinate of the point of contact from the original curve, never from the derivative; using dy/dx to find the point is a frequent error.\n• A tangent that is horizontal has dy/dx = 0, and a tangent parallel to y = 3x + 1 has dy/dx = 3; set the derivative equal to the required slope to locate the point of contact.\n• Differentials: dy = (dy/dx)dx estimates the change in y produced by a small change dx in x; the exact change differs from dy only by terms in dx^2.\n  - \"For y = x^2 with x moving from 4 to 4.01: dy = 2(4)(0.01) = 0.08, while the exact change is 4.01^2 - 16 = 0.0801.\"\n• Approximate values come from the same idea: the value at a + h is roughly the value at a plus h times the derivative at a.\n  - \"√25.4 ≈ 5 + (0.4)(1/(2 × 5)) = 5.04, against the true value 5.0398.\"\n• Errors travel along the same road: a radius r read with error dr gives an area error of about 2πr dr, so the percentage error in area is about 2(dr/r) percent.\n  - \"r = 10 cm measured with a possible error of 0.1 cm gives about 2(0.1/10) = 2 percent error in area, the exact figure being 2.01 percent.\"\n• Related rates: connect the quantities by a formula, differentiate with respect to time, then substitute the values holding at that instant.\n  - \"V = s^3 for a cube gives dV/dt = 3s^2 ds/dt; at s = 5 cm with ds/dt = 0.2 cm/s the volume grows at 15 cm^3 per second.\"\n• Over the next 0.5 s the edge gains 0.1 cm, so the differential estimate is 3(25)(0.1) = 7.5 cm^3 while the exact increase is 5.1^3 - 125 = 7.651 cm^3.\n• For a circle dA/dt = 2πr dr/dt, so r = 5 cm growing at 2 cm/s gives 20π ≈ 62.8 cm^2 per second.\n• Stationary points need dy/dx = 0, and the sign of d²y/dx² decides the nature: positive for a minimum, negative for a maximum.\n  - \"y = x^3 - 3x^2 + 2: dy/dx = 3x(x - 2) vanishes at x = 0 and x = 2; d²y/dx² = 6x - 6 shows a maximum at (0, 2) and a minimum at (2, -2).\"\n• Keep units on every rate, such as cm per second or litres per second, and check a line answer by substituting the point of contact into it.",
    "detailedNotes": {
      "overview": "This topic is where differentiation earns its living. A derivative is a slope, so it delivers the equation of a tangent and, through the perpendicular rule, the normal. A derivative is also a rate, so it turns a formula about volume, area or motion into a statement about how fast that quantity is changing right now. WASSCE sets these questions in a fixed pattern: find the point, find the slope, write the line; or connect the variables, differentiate with respect to time, substitute. Marks are allocated to the substitution into the original curve and to the final line equation, so reporting only a number leaves marks behind.",
      "introduction": "Every question here has three moves. Move one: fix the point by substituting into the equation of the curve. Move two: fix the slope by substituting into dy/dx. Move three: assemble the answer, whether that is a line, an approximate value or a rate. Naming those moves in your script keeps the working legible and the marks traceable.",
      "realWorldContext": "A form-three project at a school in Achimota watches a cubic concrete block cure on a slab in the compound while its edges lengthen at 0.2 cm per second. When each edge is 5 cm the volume is rising at dV/dt = 3s^2 ds/dt = 15 cm^3 per second, and the class uses that figure to decide whether a 20-minute rainstorm can fill the mould. A technician in Tema applies the identical reasoning when a spherical tank expands with the heat of the afternoon.",
      "objectives": [
        "Find the slope of the tangent to a curve at a given point and write the equation of that tangent",
        "Write the equation of the normal using the negative reciprocal of the tangent slope",
        "Use the differential dy = (dy/dx)dx to estimate a small change and an approximate value",
        "Estimate the error carried into an area or volume by a small measurement error",
        "Solve related-rate problems for cubes and circles and locate the stationary points of a cubic"
      ],
      "sections": [
        {
          "title": "The Tangent Line at a Point",
          "content": "The tangent to a curve at a point is the straight line whose slope equals the derivative there, so the procedure never varies: substitute the x-value into the original equation to fix the point, substitute it into dy/dx to fix the slope, then write y - y1 = m(x - x1). For y = x^3 - 4x + 1 at x = 2 the point is (2, 1) because 8 - 8 + 1 = 1, and the slope is 8 because 3(4) - 4 = 8, so the tangent is y - 1 = 8(x - 2), that is y = 8x - 15. A common alternative phrasing asks for the tangent parallel to a given line; there you set dy/dx equal to the required slope, solve for x, and only then find the point of contact. Finish by substituting the point of contact into your own line: a tangent that misses its own point of contact cannot be correct.",
          "bulletPoints": [
            "The point comes from the curve and the slope from the derivative; the two substitutions differ.",
            "Line formula: y - y1 = m(x - x1) with m equal to dy/dx at x = x1.",
            "For a horizontal tangent set dy/dx = 0; for a tangent parallel to y = 3x + 1 set dy/dx = 3.",
            "Rearrange into the form the question demands, y = mx + c or ax + by + c = 0.",
            "Verify that the line and the curve agree at the point of contact."
          ],
          "keyTakeaway": "One point, one slope, one line: the derivative is only the middle step of a tangent question.",
          "realWorldExample": "A water trough in a farm shed at Ejisu follows the curve y = x^3 - 4x + 1 metres; a straight plank laid against it at x = 2 runs along y = 8x - 15, so the cutter marks that slope on the plank before sawing."
        },
        {
          "title": "The Normal and Perpendicular Slopes",
          "content": "The normal is the line perpendicular to the tangent at the same point of contact, and perpendicular lines have slopes whose product is -1. When the tangent slope is m the normal slope is -1/m, so a slope of 8 becomes -1/8 and a slope of 5 becomes -1/5. Applying this to y = x^3 - 4x + 1 at x = 2 the normal is y - 1 = -(1/8)(x - 2), which clears fractions to x + 8y - 10 = 0; substituting the point gives 2 + 8 - 10 = 0, confirming the line really passes through the contact point. For y = x^3 + 2x - 1 at x = 1 the point is (1, 2) and the tangent slope is 3(1) + 2 = 5, so the tangent is 5x - y - 3 = 0 and the normal is x + 5y - 11 = 0. Note what must not happen: writing the normal with slope 1/5 or with the original slope 5 gives a line through the point that cuts the curve instead of standing square to the tangent.",
          "bulletPoints": [
            "The product of perpendicular slopes is -1, so the normal slope is the negative reciprocal.",
            "Tangent and normal share the same point of contact; only the slope changes.",
            "Clearing fractions is expected when the answer is required as ax + by + c = 0.",
            "A tangent slope of 5 forces a normal slope of -1/5, never 1/5 and never 5.",
            "Where the tangent is horizontal the normal is vertical, so the reciprocal is handled by inspection."
          ],
          "keyTakeaway": "Same point, slope flipped and sign changed: that is the whole of a normal question.",
          "realWorldExample": "A mason at Wa sets a plaster bead square to a curved arch; the bead follows the normal direction, so at a point where the arch slope is 5 the bead is fixed with slope -1/5."
        },
        {
          "title": "Small Changes, Differentials and Approximate Errors",
          "content": "When x changes by a small amount dx, the change in y is estimated by dy = (dy/dx)dx, and the estimate is good precisely because the terms left out involve the square of dx. For y = x^2 as x moves from 4 to 4.01, dy = 2(4)(0.01) = 0.08 while the exact change is 4.01^2 - 16 = 0.0801, a difference of one ten-thousandth. The same idea produces approximate values: the value of a function just beyond a known point is the known value plus the step times the derivative there, so √25.4 is taken as 5 + (0.4)(1/10) = 5.04 against the calculator figure 5.0398. Measurement errors travel the same road: a radius r read with error dr changes a circumference by 2π dr and an area by 2πr dr, so the percentage error in the area is about twice the percentage error in the radius. With r = 10 cm and dr = 0.1 cm that is 2(0.1/10) = 2 percent, the exact value being 2.01 percent.",
          "bulletPoints": [
            "dy = (dy/dx)dx is the linear estimate of the change; the exact change is f(x + dx) - f(x).",
            "Approximating near a known point: new value is the old value plus the small step times the derivative there.",
            "Relative error doubles for a squared quantity and triples for a cubed quantity.",
            "A differential is small but not zero, so writing dy = 0 for a non-zero dx is wrong.",
            "State units for dy and dx and label any result that is an approximation."
          ],
          "keyTakeaway": "Multiply the derivative by the small change and you hold both an estimate and an error bound.",
          "realWorldExample": "A tailor in Kumasi measures a circular table cover radius as 10 cm with a tape that may be out by 0.1 cm; the area carries about 2 percent error, which decides whether the cloth allowance is enough."
        },
        {
          "title": "Related Rates and a First Look at Stationary Points",
          "content": "Related-rate questions give the rate of one quantity and ask for the rate of another at a single instant. The recipe is to write the formula connecting the quantities, differentiate both sides with respect to time, then substitute the values holding at that instant. A cube with edge s has volume V = s^3, so dV/dt = 3s^2 ds/dt; with s = 5 cm and ds/dt = 0.2 cm/s the volume increases at 15 cm^3 per second. Over the following half second the edge grows by 0.1 cm, so the differential estimate of the volume change is 3(25)(0.1) = 7.5 cm^3 while the exact change is 5.1^3 - 5^3 = 132.651 - 125 = 7.651 cm^3, a difference of only 0.151 cm^3. For a circle the area formula gives dA/dt = 2πr dr/dt, so a radius growing at 2 cm/s when r = 5 cm produces 20π ≈ 62.8 cm^2 per second. Finally, where dy/dx = 0 the curve is momentarily flat: y = x^3 - 3x^2 + 2 has dy/dx = 3x(x - 2), so the turning points sit at (0, 2) and (2, -2), and the second derivative 6x - 6 is negative at x = 0 and positive at x = 2, identifying a maximum and then a minimum.",
          "bulletPoints": [
            "Connect the variables first, differentiate with respect to time second, substitute last.",
            "Rates are instantaneous: use the dimensions at that moment, not average dimensions.",
            "dV/dt = 3s^2 ds/dt for a cube and dA/dt = 2πr dr/dt for a circle.",
            "Stationary points require dy/dx = 0, and d²y/dx² decides whether the point is a maximum or a minimum.",
            "Compare the differential estimate with the exact change to see how sharp the approximation is."
          ],
          "keyTakeaway": "Related rates are the chain rule in work clothes: differentiate the formula with respect to time and substitute the instant.",
          "realWorldExample": "A cubic mould at a hostel in Legon has edges lengthening at 0.2 cm/s; when an edge is 5 cm the volume rises at 15 cm^3 per second, and the class records 7.651 cm^3 exact against 7.5 cm^3 estimated over the next half second."
        }
      ],
      "commonMistakes": [
        "Using the derivative to find the point: for y = x^3 - 4x + 1 at x = 2 the point comes from the curve, y = 8 - 8 + 1 = 1, not from dy/dx = 3x^2 - 4 = 8.",
        "Writing the normal with slope 1/8 instead of -1/8, which gives x - 8y + 6 = 0, a line through the contact point that is not perpendicular to the tangent.",
        "Reporting the slope as the whole answer: for y = 2x^2 - 3x at x = 1 the derivative gives 4x - 3 = 1, but the tangent required is y = x - 2 through the point (1, -1).",
        "Losing the factor 2 in a related rate: dA/dt = 2πr dr/dt = 2π(5)(2) = 20π ≈ 62.8 cm^2 per second, whereas writing πr dr/dt gives the wrong 31.4.",
        "Presenting an approximation as exact: √25.4 ≈ 5.04 comes from differentials while the calculator value is 5.0398, and the working must say which is which."
      ],
      "wassceExamTips": [
        "Paper 2 theory: a tangent-and-normal part is marked as point, slope, tangent equation, normal equation, four traceable lines, so never merge them into one compressed statement.",
        "If the paper demands the form ax + by + c = 0, leave y = 8x - 15 rearranged as 8x - y - 15 = 0 with integer coefficients, or the accuracy mark is forfeited.",
        "In rate questions the substitution of the given dimensions belongs on its own line, because a marker can award method credit there even when the final arithmetic fails.",
        "Where approximate change and percentage error are both asked, keep extra digits in the intermediate value and round only the percentage, typically to two or three significant figures.",
        "Watch units on rates: centimetres per second against metres per second is the commonest reason a correct method loses the answer mark, so convert before you substitute."
      ],
      "summaryChecklist": [
        "Can I find the point of contact on a curve and the slope there before writing any line?",
        "Can I write the equation of the tangent in the form the question requires?",
        "Can I write the equation of the normal using the negative reciprocal slope?",
        "Can I use dy = (dy/dx)dx to estimate a small change, an approximate value and a percentage error?",
        "Can I solve a related-rate problem for a cube or a circle and locate the stationary points of a cubic?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-diffapp-1",
        "title": "Tangent and Normal to a Cubic at a Point",
        "problem": "Find the equations of the tangent and the normal to the curve y = x^3 - 4x + 1 at the point where x = 2, giving each answer in the form ax + by + c = 0.",
        "stepByStepSolution": [
          "Step 1 (M1): Find the point of contact from the curve: y = 2^3 - 4(2) + 1 = 8 - 8 + 1 = 1, so the point is (2, 1).",
          "Step 2 (M1): Differentiate the curve: dy/dx = 3x^2 - 4.",
          "Step 3 (A1): The slope at x = 2 is 3(4) - 4 = 12 - 4 = 8.",
          "Step 4 (M1): Use the point-slope form for the tangent: y - 1 = 8(x - 2).",
          "Step 5 (A1): Rearrange the tangent: y = 8x - 15, that is 8x - y - 15 = 0, and checking at x = 2 gives y = 16 - 15 = 1, the point of contact.",
          "Step 6 (M1): The normal is perpendicular, so its slope is -1/8 and y - 1 = -(1/8)(x - 2); multiply through by 8 to clear the fraction.",
          "Step 7 (A1): The normal is x + 8y - 10 = 0, and substituting (2, 1) gives 2 + 8 - 10 = 0, which confirms it. Final answers: tangent 8x - y - 15 = 0 and normal x + 8y - 10 = 0."
        ],
        "keyTakeaway": "Point (2, 1), slope 8, tangent 8x - y - 15 = 0 and normal x + 8y - 10 = 0, each verified by substituting the point of contact."
      },
      {
        "id": "ex-shs3-em-diffapp-2",
        "title": "Rate of Increase of the Volume of a Cube",
        "problem": "The edges of a cubic concrete block lengthen at 0.2 cm per second. Find the rate at which the volume is increasing when each edge is 5 cm, and estimate the change in volume during the next 0.5 seconds, comparing the estimate with the exact change.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the formula connecting the quantities: for a cube of edge s, the volume is V = s^3.",
          "Step 2 (M1): Differentiate with respect to time using the chain rule: dV/dt = 3s^2 ds/dt.",
          "Step 3 (A1): Substitute s = 5 cm and ds/dt = 0.2 cm/s: dV/dt = 3(25)(0.2) = 15 cm^3 per second.",
          "Step 4 (M1): In the next 0.5 s the edge grows by ds = 0.2 × 0.5 = 0.1 cm, so the estimated change is dV = 3s^2 ds.",
          "Step 5 (A1): dV = 3(25)(0.1) = 7.5 cm^3, the differential estimate of the volume added.",
          "Step 6 (M1): Compare with the exact change 5.1^3 - 5^3 = 132.651 - 125 = 7.651 cm^3.",
          "Step 7 (A1): The volume is increasing at 15 cm^3 per second, and over the half second the exact increase 7.651 cm^3 exceeds the estimate 7.5 cm^3 by 0.151 cm^3, so the differential under-reads by about 2 percent."
        ],
        "keyTakeaway": "dV/dt = 15 cm^3 per second at s = 5 cm, and the estimate 7.5 cm^3 sits just below the exact 7.651 cm^3 for the next half second."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-t2-differentiation-application",
      "topicId": "shs3-em-t2-differentiation-application",
      "title": "Tangents, Normals and Rates Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-diffapp-1",
          "quizId": "quiz-shs3-em-t2-differentiation-application",
          "questionText": "Find the equation of the tangent to the curve y = 2x^2 - 3x at the point where x = 1.",
          "optionA": "y = x - 2",
          "optionB": "y = 4x - 3",
          "optionC": "y = -x",
          "optionD": "y = x + 2",
          "correctOption": "A",
          "subConcept": "Equation of a Tangent",
          "explanation": "The point is (1, 2 - 3) = (1, -1) and dy/dx = 4x - 3 gives a slope of 1 there, so y + 1 = 1(x - 1) and y = x - 2. The distractor y = 4x - 3 is the derivative written as though it were the line, and y = -x is the normal at the same point, so both come from stopping one step early.",
          "remediationTip": "Find the point from the curve, the slope from dy/dx, then assemble y - y1 = m(x - x1); the derivative alone is never the answer."
        },
        {
          "id": "q-em-diffapp-2",
          "quizId": "quiz-shs3-em-t2-differentiation-application",
          "questionText": "Find the equation of the normal to the curve y = x^3 + 2x - 1 at the point where x = 1.",
          "optionA": "5x - y - 3 = 0",
          "optionB": "x - 5y + 9 = 0",
          "optionC": "x + 5y - 11 = 0",
          "optionD": "x + 5y + 11 = 0",
          "correctOption": "C",
          "subConcept": "Equation of a Normal",
          "explanation": "The point is (1, 1 + 2 - 1) = (1, 2) and dy/dx = 3x^2 + 2 gives a tangent slope of 5, so the normal slope is -1/5 and y - 2 = -(1/5)(x - 1), which clears to x + 5y - 11 = 0. Option A is the tangent, 5x - y - 3 = 0, and option B uses the reciprocal without the change of sign, giving slope 1/5 instead of -1/5.",
          "remediationTip": "The normal slope is the negative reciprocal: flip 5 to 1/5 and change the sign as well."
        },
        {
          "id": "q-em-diffapp-3",
          "quizId": "quiz-shs3-em-t2-differentiation-application",
          "questionText": "The radius of a circular oil patch increases at 2 cm per second. How fast is the area increasing, in square centimetres per second, when the radius is 5 cm?",
          "optionA": "31.4",
          "optionB": "15.7",
          "optionC": "62.8",
          "optionD": "157",
          "correctOption": "C",
          "subConcept": "Related Rates for a Circle",
          "explanation": "A = πr^2 gives dA/dt = 2πr dr/dt = 2π(5)(2) = 20π ≈ 62.8 cm^2 per second. The distractor 31.4 is 2πr with the factor dr/dt = 2 left out, and 157 comes from squaring wrongly by using 2πr^2.",
          "remediationTip": "Differentiate the area formula first and substitute afterwards; every rate in the answer must carry the given rate of the radius."
        },
        {
          "id": "q-em-diffapp-4",
          "quizId": "quiz-shs3-em-t2-differentiation-application",
          "questionText": "Use differentials to approximate the value of √25.4, correct to two decimal places.",
          "optionA": "5.40",
          "optionB": "5.02",
          "optionC": "4.96",
          "optionD": "5.04",
          "correctOption": "D",
          "subConcept": "Differentials and Approximate Values",
          "explanation": "For y = √x at x = 25 the derivative is 1/(2√25) = 1/10, so dy = (1/10)(0.4) = 0.04 and √25.4 ≈ 5 + 0.04 = 5.04, against the true value 5.0398. The distractor 5.02 comes from using 1/(2x) instead of 1/(2√x), and 4.96 subtracts the differential instead of adding it.",
          "remediationTip": "Take the square root of the near value first, then add the small step divided by twice that root."
        },
        {
          "id": "q-em-diffapp-5",
          "quizId": "quiz-shs3-em-t2-differentiation-application",
          "questionText": "The curve y = x^3 - 3x^2 + 2 has a maximum turning point at which of the following points?",
          "optionA": "(2, -2)",
          "optionB": "(0, 2)",
          "optionC": "(3, 2)",
          "optionD": "(1, 0)",
          "correctOption": "B",
          "subConcept": "Stationary Points and Their Nature",
          "explanation": "dy/dx = 3x^2 - 6x = 3x(x - 2) vanishes at x = 0 and x = 2, and d²y/dx² = 6x - 6 equals -6 at x = 0, so (0, 2) is the maximum while (2, -2) is the minimum. The distractor (3, 2) lies on the curve but is not stationary, since dy/dx there is 9.",
          "remediationTip": "Solve dy/dx = 0 for the x-values, then use the sign of d²y/dx² to label each point before quoting coordinates."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t3-maxima-minima",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Maxima, Minima and Curve Sketching",
    "description": "First and second derivative tests, turning points and points of inflexion, absolute extrema on a closed interval, optimisation word problems and the full cubic curve sketch.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A stationary point is where dy/dx = 0. For \"y = x^3 - 3x^2 - 9x + 2\", dy/dx = 3x^2 - 6x - 9 = 3(x + 1)(x - 3), so the stationary points are at x = -1 and x = 3.\n  - Solve dy/dx = 0 by factorisation first; use the formula only when factorising fails.\n• Second derivative test: d2y/dx2 = 6x - 6 on the same curve. At x = -1 it is -12 (negative), so (-1, 7) is a MAXIMUM; at x = 3 it is +12 (positive), so (3, -25) is a MINIMUM.\n  - y(-1) = -1 - 3 + 9 + 2 = 7 and y(3) = 27 - 27 - 27 + 2 = -25: always substitute back for the coordinates.\n• d2y/dx2 > 0 at a stationary point means the curve is concave open upwards there (a valley): minimum. d2y/dx2 < 0 means a hill-top: maximum.\n• If d2y/dx2 = 0 at a stationary point the test FAILS: y = x^4 has a minimum at x = 0 even though y''(0) = 0. Fall back on the first-derivative sign test.\n• First derivative test: dy/dx changing + to - through a stationary point gives a maximum; - to + gives a minimum.\n• Point of inflexion: d2y/dx2 = 0 AND changes sign. On the cubic above, 6x - 6 = 0 gives x = 1, y(1) = 1 - 3 - 9 + 2 = -9, so (1, -9) is the point of inflexion and the centre of symmetry of the curve.\n• Absolute maximum and minimum on a closed interval: compare the function at every critical point AND at both endpoints. For g(x) = x^3 - 3x on [-2, 3]: g(-2) = -2, g(-1) = 2, g(1) = -2, g(3) = 18, so the absolute maximum is 18 and the absolute minimum is -2.\n• Optimisation recipe: write the target quantity in one variable using the constraint, state the feasible range, differentiate, solve dy/dx = 0, justify the nature, then answer with units.\n• Open tank from a 24 cm square tin: V = x(24 - 2x)^2, so dV/dx = 12x^2 - 192x + 576 = 12(x - 4)(x - 12). The maximum volume is V(4) = 4 x 16^2 = 1024 cm^3 at x = 4 cm; x = 12 gives zero volume and is rejected.\n• Fence problem: perimeter 36 m means sides x and 18 - x, so A = x(18 - x) = 18x - x^2; dA/dx = 18 - 2x = 0 gives x = 9 and the maximum area is 9 x 9 = 81 m^2, a square.\n• Curve sketching checklist for a cubic: intercepts (put x = 0, then solve y = 0), turning points with nature, point of inflexion, and end behaviour driven by the sign of the leading coefficient.\n• A positive-leading-coefficient cubic rises overall left to right: it goes up to its maximum, down through the inflexion to its minimum, then up again.",
    "detailedNotes": {
      "overview": "Differentiation told you how to measure a gradient; this topic turns that tool inward on the curve itself to find its hills, valleys and bends. WASSCE Elective Mathematics Paper 2 rewards a complete routine: solve dy/dx = 0, classify with d2y/dx2, then substitute back for coordinates. Candidates who stop at the x-values lose most of the available accuracy marks, because the question almost always asks for the points, not just their abscissae.",
      "introduction": "Read a curve like a landscape traveller. Where the road is flat you are at a summit or in a valley bottom — those are the stationary points. Where the road stops doming and starts dipping you cross an inflexion. The first derivative finds the flat places, the second derivative says which kind of flat place each one is, and a sketch records the whole journey for the examiner.",
      "realWorldContext": "A fabricator at Suame Magazine in Kumasi cuts identical squares from the corners of a 24 cm square metal sheet and folds the sides to make an open water tank for a chop bar. Which cut size x holds the most water? The volume is V = x(24 - 2x)^2, and only the calculus shows that x = 4 cm gives the greatest capacity, 1024 cm^3 — trial-and-error measurements around the workshop rarely hit it exactly.",
      "objectives": [
        "Find the stationary points of a polynomial curve by solving dy/dx = 0",
        "Determine the nature of each stationary point using the second derivative test",
        "Locate a point of inflexion by solving d2y/dx2 = 0 and confirming the change of concavity",
        "Compute the absolute maximum and minimum of a continuous function on a closed interval",
        "Formulate and solve single-variable optimisation problems on box, fence and cost shapes"
      ],
      "sections": [
        {
          "title": "The Stationary Point and the Second Derivative Test",
          "content": "A stationary point on y = f(x) occurs where the gradient vanishes, so you differentiate and solve f'(x) = 0 as an equation, factorising where possible. Every root is only a candidate; the classification comes from f''(x). If f''(x) is positive at the candidate the curve is concave upwards there, like the bottom of a valley, so the point is a minimum; if negative, the point is a maximum. On y = x^3 - 3x^2 - 9x + 2 the gradient 3x^2 - 6x - 9 = 3(x + 1)(x - 3) vanishes at x = -1 and x = 3, and the second derivative 6x - 6 takes the values -12 and +12 there, so (-1, 7) is a maximum and (3, -25) is a minimum. When f''(x) = 0 at a stationary point the test is inconclusive, and y = x^4 at the origin is the standard counterexample.",
          "bulletPoints": [
            "Solve f'(x) = 0 completely: a cubic gradient is quadratic, so expect up to two stationary points.",
            "Substitute each x back into the ORIGINAL function to report full coordinates.",
            "f''(x) > 0 at a stationary point: minimum; f''(x) < 0: maximum.",
            "f''(x) = 0: inconclusive — use the first-derivative sign change instead.",
            "The nature must be justified in words, not asserted from the shape of a rough sketch."
          ],
          "keyTakeaway": "Solve f'(x) = 0 to find candidates, read the sign of f''(x) to name them, and substitute back to give the points their coordinates.",
          "realWorldExample": "A cost curve for a trotro run between Accra and Kasoa, C(x) = x^3/12 - 3x^2 + 60x + 500 in pesewas, has its cheapest running speed where C'(x) = 0 and C''(x) > 0 — the transport union effectively drives near that minimum."
        },
        {
          "title": "Points of Inflexion and the Complete Curve Sketch",
          "content": "A point of inflexion is where the curve switches from concave downwards to concave upwards, or back; the working signature is f''(x) = 0 together with a genuine sign change of f''(x). For the cubic above, 6x - 6 = 0 gives x = 1, and f''(x) runs from negative to positive through it, so (1, -9) is the inflexion and the centre of symmetry of the whole curve. A full sketch reports, in order: the y-intercept (put x = 0, here y = 2), the x-intercepts if they are obtainable (solve x^3 - 3x^2 - 9x + 2 = 0, numerically about x = -2.1, 0.21 and 4.9), the turning points with their nature, the inflexion, and the end behaviour, which for a positive-leading-coefficient cubic means falling from the lower left and rising to the upper right.",
          "bulletPoints": [
            "f''(x) = 0 alone does NOT prove an inflexion: check the sign change either side.",
            "At an inflexion the tangent still touches the curve — it does not cross it there.",
            "A cubic has at most two turning points and exactly one inflexion.",
            "End behaviour follows the leading term: positive cubic rises left-to-right overall; negative quartic opens downwards at both ends.",
            "Label every feature on the sketch: intercepts, maxima, minima, inflexion."
          ],
          "keyTakeaway": "A sketch earns marks when intercepts, turning points, inflexion and end behaviour are all shown and labelled.",
          "realWorldExample": "The arch of a footbridge over the Aburi road takes its lowest valley and highest hill from a cubic profile; the engineer sketches exactly these features before any loading calculation."
        },
        {
          "title": "Absolute Maximum and Minimum on a Closed Interval",
          "content": "On a closed interval [a, b] the extreme value of a continuous function lives either at an interior critical point or at an endpoint, so the method is a candidate shortlist: solve f'(x) = 0 inside the interval, add a and b, evaluate f at every candidate, and simply compare. For g(x) = x^3 - 3x on [-2, 3] the critical points are x = -1 and x = 1, and the four values are g(-2) = -2, g(-1) = 2, g(1) = -2 and g(3) = 18. The absolute maximum is therefore 18, attained at the endpoint x = 3, while the absolute minimum value -2 is attained twice, at x = -2 and x = 1. Students who only report the local maximum 2 lose both accuracy marks because 18 sits at an endpoint.",
          "bulletPoints": [
            "Never drop the endpoints from the candidate list — the extreme value often lives there.",
            "Reject any critical point that falls outside the given interval before evaluating.",
            "Compare VALUES, not positions: the largest output wins, wherever it occurs.",
            "State the x at which each extreme occurs as well as the extreme value itself.",
            "A local maximum need not be the absolute maximum on the interval."
          ],
          "keyTakeaway": "Shortlist the critical points and both endpoints, evaluate, and compare — the biggest output is the absolute maximum.",
          "realWorldExample": "A cocoa trader in Sunyani stores a fixed quantity where the warehouse rent model R(t) = t^3 - 12t^2 + 36t over the working week 0 <= t <= 8 has its worst (largest) cost at t = 8, an endpoint, not at the local maximum t = 2."
        },
        {
          "title": "Optimisation Word Problems: Box, Fence and Cost",
          "content": "Every optimisation problem is a three-act play. Act one: name one variable and use the constraint to write the quantity to be optimised as a function of that single variable, stating the feasible range — for the open tank cut from a 24 cm square sheet, V = x(24 - 2x)^2 with 0 < x < 12. Act two: differentiate, set the derivative to zero and solve; expanding first gives V = 4x^3 - 96x^2 + 576x, so dV/dx = 12x^2 - 192x + 576 = 12(x - 4)(x - 12), leaving x = 4 as the only interior critical point. Act three: justify the nature with d2V/dx2 = 24x - 192, which is -96 at x = 4 (a maximum), then answer in context: the tank of greatest capacity has cut size 4 cm and volume 4 x 16^2 = 1024 cm^3.",
          "bulletPoints": [
            "Draw the diagram, mark x on it, and express every other length through x before differentiating.",
            "The feasible range rejects absurd roots: x = 12 would leave no sheet at all.",
            "Maximum area for a fixed perimeter rectangle is always the square: perimeter 36 m gives 9 m by 9 m and 81 m^2.",
            "End the answer in the words of the problem — centimetres and cubic centimetres, not x — with units attached.",
            "If the second derivative test is messy at the endpoint of a domain, argue by sign of the first derivative either side."
          ],
          "keyTakeaway": "One variable, one derivative, one justification, one answer with units: that is the full mark scheme of an optimisation.",
          "realWorldExample": "A farmer near Ejisu has 36 m of guinea-fence to enclose a rectangular kitchen garden against free-range chickens; the calculus proves the square of side 9 m, area 81 m^2, beats every other shape she could fence."
        }
      ],
      "commonMistakes": [
        "Reporting \"x = -1 and x = 3\" as the answer when the question asks for the turning points: the coordinates (-1, 7) and (3, -25) come only after substituting back into the ORIGINAL cubic.",
        "Applying the second derivative test to non-stationary points: classify only where dy/dx = 0, otherwise f''(x) = 0 is an inflexion, not a turning point.",
        "Writing \"d2y/dx2 = 0, therefore point of inflexion\" without checking the sign change — y = x^4 has f''(0) = 0 yet is a minimum, not an inflexion.",
        "Forgetting the endpoints when hunting the absolute maximum on [-2, 3]: g(3) = 18 beats the local maximum g(-1) = 2, and omitting it costs both marks.",
        "Leaving the tank problem as dV/dx = 0 without a nature test: examiners award the method mark only when the maximum is justified by the second derivative or a sign table, and units (cm^3) are often a separate mark."
      ],
      "wassceExamTips": [
        "In Paper 2 a turning-point question is typically built as M1 for differentiating correctly, M1 for solving f'(x) = 0, M1 for the second-derivative working, and A1 for each stated point — so write all four stages even when you can see the answer.",
        "When a sketch is demanded, draw it to a light scale and label the intercepts and turning points: unlabelled curves score the method marks for features but forfeit the A1 for accuracy of position.",
        "If your gradient equation will not factorise, switch to the quadratic formula and quote surd answers exactly, then the 3 significant figure values — WAEC accepts either but not a blurred mixture.",
        "On an absolute-extrema part, present a small table of candidate x-values and f(x)-values; markers award method on sight of the comparison, and a carry-through error in one entry is treated as afr for the rest of the part.",
        "Budget theory marks by writing the decision line early: for optimisation, one sentence such as \"since d2V/dx2 = -96 < 0, x = 4 gives the maximum\" converts your method into the final A1."
      ],
      "summaryChecklist": [
        "Can I find and classify every stationary point of a cubic using dy/dx and d2y/dx2?",
        "Can I locate a point of inflexion and prove the concavity actually changes there?",
        "Can I compute the absolute maximum and minimum of a function on a closed interval including the endpoints?",
        "Can I turn a box, fence or cost situation into a one-variable function with a stated feasible range?",
        "Can I sketch a cubic completely: intercepts, turning points, inflexion and end behaviour?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-maxmin-1",
        "title": "Stationary Points, Their Nature and the Inflexion of a Cubic",
        "problem": "For the curve y = x^3 - 3x^2 - 9x + 2, find the coordinates of the maximum and minimum points, stating the nature of each, and the point of inflexion. Hence describe the sketch of the curve.",
        "stepByStepSolution": [
          "Step 1 (M1): Differentiate: dy/dx = 3x^2 - 6x - 9.",
          "Step 2 (M1): Set the gradient to zero and factorise: 3(x^2 - 2x - 3) = 3(x + 1)(x - 3) = 0, so x = -1 or x = 3.",
          "Step 3 (M1): Differentiate again: d2y/dx2 = 6x - 6. At x = -1 this is -12 < 0, so x = -1 gives a MAXIMUM; at x = 3 this is +12 > 0, so x = 3 gives a MINIMUM.",
          "Step 4 (M1): Substitute back: y(-1) = -1 - 3 + 9 + 2 = 7 and y(3) = 27 - 27 - 27 + 2 = -25.",
          "Step 5 (M1): Inflexion: 6x - 6 = 0 gives x = 1, and d2y/dx2 changes from negative to positive through x = 1; y(1) = 1 - 3 - 9 + 2 = -9.",
          "Step 6 (A1): Final answer: maximum (-1, 7), minimum (3, -25), point of inflexion (1, -9); the curve rises from the lower left to the maximum, falls through the inflexion to the minimum, then rises to the upper right, crossing the y-axis at (0, 2)."
        ],
        "keyTakeaway": "Gradient zero finds the candidates, the second derivative names them, and substitution back gives the coordinates the examiner asks for."
      },
      {
        "id": "ex-shs3-em-maxmin-2",
        "title": "Greatest Capacity of an Open Tank",
        "problem": "An artisan cuts squares of side x cm from the corners of a 24 cm square metal sheet and folds up the sides to form an open tank. Find the value of x that maximises the volume and state that maximum volume.",
        "stepByStepSolution": [
          "Step 1 (M1): Base after folding is (24 - 2x) cm square with height x, so V = x(24 - 2x)^2 with feasible range 0 < x < 12.",
          "Step 2 (M1): Expand for easy differentiation: V = 4x^3 - 96x^2 + 576x.",
          "Step 3 (M1): dV/dx = 12x^2 - 192x + 576 = 12(x - 4)(x - 12).",
          "Step 4 (M1): Solve dV/dx = 0: x = 4 or x = 12; reject x = 12 since it leaves no sheet (volume zero and it is outside the range).",
          "Step 5 (M1): Justify the nature: d2V/dx2 = 24x - 192, and at x = 4 this is -96 < 0, so x = 4 gives a maximum.",
          "Step 6 (A1): Final answer: x = 4 cm gives the greatest capacity, V = 4 x (24 - 8)^2 = 4 x 256 = 1024 cm^3."
        ],
        "keyTakeaway": "Constraint to one variable, derivative to zero, second derivative to justify, then the answer in context with units."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-maxmin",
      "topicId": "shs3-em-t3-maxima-minima",
      "title": "Maxima and Minima Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-shs3-maxmin-1",
          "quizId": "quiz-shs3-em-maxmin",
          "questionText": "Which of the following states the nature of the stationary points of f(x) = x^3 - 6x^2 + 9x + 1?",
          "optionA": "Maximum at x = 1 and minimum at x = 3",
          "optionB": "Minimum at x = 1 and maximum at x = 3",
          "optionC": "Maxima at both x = 1 and x = 3",
          "optionD": "Point of inflexion at x = 1 and minimum at x = 3",
          "correctOption": "A",
          "subConcept": "Second Derivative Test",
          "explanation": "f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3), and f''(x) = 6x - 12 gives f''(1) = -6 < 0 (maximum) and f''(3) = 6 > 0 (minimum). Option B reverses the signs of the second derivative; option C forgets that a cubic turns once each way.",
          "remediationTip": "Evaluate f''(x) at each stationary x separately: negative means hill-top, positive means valley."
        },
        {
          "id": "q-em-shs3-maxmin-2",
          "quizId": "quiz-shs3-em-maxmin",
          "questionText": "Find the x-coordinate of the point of inflexion of the curve y = 2x^3 - 3x^2 + 1.",
          "optionA": "x = 0",
          "optionB": "x = 1/2",
          "optionC": "x = 1",
          "optionD": "x = 3/2",
          "correctOption": "B",
          "subConcept": "Points of Inflexion",
          "explanation": "y'' = 12x - 6, and 12x - 6 = 0 gives x = 1/2 with the second derivative changing sign there. Option A comes from wrongly halving the coefficient of x^3 instead of solving 12x = 6; option C is where the FIRST derivative changes sign at a different candidate.",
          "remediationTip": "For an inflexion differentiate TWICE and solve f''(x) = 0, then check concavity changes."
        },
        {
          "id": "q-em-shs3-maxmin-3",
          "quizId": "quiz-shs3-em-maxmin",
          "questionText": "Find the maximum value of g(x) = x^3 - 3x on the interval [-2, 3].",
          "optionA": "2",
          "optionB": "9",
          "optionC": "18",
          "optionD": "-2",
          "correctOption": "C",
          "subConcept": "Absolute Extrema on a Closed Interval",
          "explanation": "The candidates are x = -1, x = 1 (from g'(x) = 3x^2 - 3 = 0) and the endpoints: g(-1) = 2, g(1) = -2, g(-2) = -2, g(3) = 27 - 9 = 18. The largest is 18 at the endpoint x = 3. Option A is the classic trap: reporting the LOCAL maximum 2 while ignoring the endpoints.",
          "remediationTip": "Always extend the candidate list with both endpoints before comparing outputs."
        },
        {
          "id": "q-em-shs3-maxmin-4",
          "quizId": "quiz-shs3-em-maxmin",
          "questionText": "A rectangular garden is fenced with 36 m of netting. Find the greatest possible area of the garden.",
          "optionA": "36 m^2",
          "optionB": "72 m^2",
          "optionC": "90 m^2",
          "optionD": "81 m^2",
          "correctOption": "D",
          "subConcept": "Optimisation Word Problems",
          "explanation": "Sides are x and 18 - x, so A = 18x - x^2 with A' = 18 - 2x = 0 at x = 9; then A'' = -2 < 0 confirms a maximum and A(9) = 81 m^2. Option B is the product 4 x 18 from misreading the perimeter, while option A is the perimeter number repeated.",
          "remediationTip": "Half the perimeter first: with P fixed, the rectangle of maximum area is the square of side P/4."
        },
        {
          "id": "q-em-shs3-maxmin-5",
          "quizId": "quiz-shs3-em-maxmin",
          "questionText": "Squares of side x are cut from the corners of a 24 cm square sheet to form an open tank of volume V = x(24 - 2x)^2. Find the cut size that maximises V.",
          "optionA": "3 cm",
          "optionB": "4 cm",
          "optionC": "6 cm",
          "optionD": "8 cm",
          "correctOption": "B",
          "subConcept": "Optimisation Word Problems",
          "explanation": "Expanding and differentiating: V = 4x^3 - 96x^2 + 576x, so V' = 12(x - 4)(x - 12). The only admissible root is x = 4 (x = 12 destroys the sheet), and V''(4) = -96 < 0 confirms a maximum with V(4) = 1024 cm^3. Option C, x = 6, is the careless choice at which dV/dx is far from zero.",
          "remediationTip": "Reject roots outside the feasible range 0 < x < 12 before testing the nature."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t3-integration",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Integration: Areas and Volumes of Revolution",
    "description": "Anti-derivatives and definite integrals, areas under curves and between two curves, and volumes of revolution about the x-axis, with the sign discipline that keeps them correct.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Integration reverses differentiation: the anti-derivative of x^n is x^(n+1)/(n+1) + C for any n not equal to -1.\n  - Check any anti-derivative by differentiating back — it takes five seconds and saves an A1.\n• The constant C is essential for a general anti-derivative (\"integral of 3x^2 is x^3 + C\"), but in a definite integral the C cancels, so a number remains.\n• Definite integral arithmetic: the integral from 1 to 2 of (3x^2 + 2) dx = [x^3 + 2x] from 1 to 2 = (8 + 4) - (1 + 2) = 12 - 3 = 9.\n  - Always evaluate (upper limit) minus (lower limit); reversing them flips the sign.\n• Area between curve and axis where the curve dips below the axis must be computed piece by piece with signs corrected: the line y = x - 2 from x = 0 to x = 4 has net integral [x^2/2 - 2x] = (8 - 8) - 0 = 0, but the geometric AREA is two triangles of 2 square units each, i.e. 4 square units.\n• Area between two curves: integrate (upper - lower) between the intersection points. The parabola y = x^2 and the line y = 2x + 3 meet where x^2 - 2x - 3 = 0, i.e. x = -1 and x = 3, and the area between them is the integral from -1 to 3 of (2x + 3 - x^2) dx = [x^2 + 3x - x^3/3] = 9 - (-5/3) = 32/3 = 10 2/3 square units.\n• Volume of revolution about the x-axis uses discs: V = pi times the integral of y^2 dx between the limits.\n• Sanity check with a cone: revolving y = x from x = 0 to x = 3 gives V = pi times the integral of x^2 dx = 9pi, matching (1/3)pi r^2 h with r = h = 3.\n• Worked example: revolving y = 2x - x^2 (from its roots x = 0 to x = 2) about the x-axis gives V = pi times the integral of (2x - x^2)^2 dx = pi[4x^3/3 - x^4 + x^5/5] from 0 to 2 = pi(32/3 - 16 + 32/5) = 16pi/15, about 3.35 cubic units.\n• Squaring the function BEFORE integrating is the whole method: (2x - x^2)^2 = 4x^2 - 4x^3 + x^4 expands first, then each term is integrated.\n• Intersections supply limits: if the region is bounded by two curves, solve them equal; if by the axis, solve f(x) = 0.\n• Average value of f on [a, b] is (1/(b - a)) times the integral: for f(x) = x^2 on [0, 3] the average is (1/3)(9) = 3.\n• Displacement from velocity: s = integral of v dt; work done is the integral of force over distance — both appear as Section B settings.",
    "detailedNotes": {
      "overview": "Integration is the second half of the calculus WASSCE examines on equal terms with differentiation: definite integrals, areas of curved regions and solids spun out of plane figures. The topic rewards sign discipline more than cleverness — knowing when an integral is negative, when to split a region, and when to square before integrating decides almost every mark. This lesson consolidates those habits with exact fractions and one verified decimal each.",
      "introduction": "Think of a definite integral as a signed odometer for area: strips above the axis add, strips below subtract. Area questions ask for the odometer of absolute distance, so you must flip the strips that sit below the axis before adding. Volumes then take the same integral machinery and apply it to y^2 instead of y, because each disc of a spun region has area pi y^2.",
      "realWorldContext": "A surveyor in Prampram must value a plot bounded on one side by the straight new feeder road (modelled as y = 2x + 3) and on the other by an old boundary curve (modelled as y = x^2), distances in hectometres. The rateable area is exactly the integral between two curves: 32/3 = 10 2/3 square hectometres, which the assembly then prices per square metre in cedis.",
      "objectives": [
        "Compute definite integrals of polynomials using upper-minus-lower evaluation",
        "Find the area bounded by a curve and the coordinate axes, correcting signs where the curve is below the axis",
        "Find the area enclosed between a line and a curve by integrating (upper - lower) between intersections",
        "Calculate volumes of revolution about the x-axis using V = pi times the integral of y^2 dx",
        "Determine integration limits from intersection points stated algebraically"
      ],
      "sections": [
        {
          "title": "Anti-derivatives and the Definite Integral",
          "content": "An anti-derivative of f(x) is any function whose derivative is f(x), and the family of them differs by the constant C. The power rule runs backwards: the anti-derivative of x^n is x^(n+1)/(n+1) for n not equal to -1, so the integral of 3x^2 is x^3 + C. A definite integral fixes two limits and the C cancels in the subtraction: the integral from 1 to 2 of (3x^2 + 2) dx is [x^3 + 2x] evaluated at 2 minus at 1, which is 12 - 3 = 9. Write the square-bracket notation and both substituted lines even when the arithmetic is trivial, because WAEC awards method marks for the substitution stage; a lone answer with no bracket line cannot carry the M1 for using the limits.",
          "bulletPoints": [
            "Reverse the power rule term by term; constants integrate to (constant) x.",
            "A missing + C in an indefinite integral is a standard one-mark loss.",
            "Definite integrals: evaluate (upper) - (lower); reversing them flips every sign.",
            "Verify your value numerically at home by Simpson or a fine sum, but in the exam verify by differentiating back.",
            "Fractions like x^3/3 stay exact; only quote decimals as approximations."
          ],
          "keyTakeaway": "Integrate term by term, bracket, substitute upper then lower, subtract — and let the C cancel itself out.",
          "realWorldExample": "A trotro accelerating smoothly from rest fills its distance log exactly as the integral of velocity: a v-t graph from 0 to 60 seconds is read as distance, the same signed-area machinery."
        },
        {
          "title": "Signed Area: Region Between a Curve and the Axis",
          "content": "The definite integral measures SIGNED area: strips below the x-axis contribute negatively. The line y = x - 2 between x = 0 and x = 4 illustrates the trap perfectly. The net integral is [x^2/2 - 2x] from 0 to 4 = (8 - 8) - (0 - 0) = 0, yet the region actually covers two triangles — one below the axis from 0 to 2 of area 2 square units, one above from 2 to 4 of area 2 — so the true geometric area is 4 square units. The rule is mechanical: find where the curve meets the axis, split the interval there, integrate each piece, and take each result as positive before adding.",
          "bulletPoints": [
            "Solve f(x) = 0 to locate the split points before integrating for area.",
            "Below-axis pieces come out negative from the integral; take the modulus.",
            "A zero answer for a symmetric signed integral does not mean zero area.",
            "For y = 4 - x^2 the whole parabola sits above the axis between its roots -2 and 2, so the area is a single integral: 32/3 square units.",
            "Sketch first; the picture shows instantly which strips need flipping."
          ],
          "keyTakeaway": "Area is the integral of the modulus: split at the axis, correct the signs, then add.",
          "realWorldExample": "A fisherman on Lake Volta plots the water surface above and below the jetty level as a curve; the dock engineers integrate |depth| to order exactly enough timber planks."
        },
        {
          "title": "Area Between Two Curves",
          "content": "The area trapped between an upper curve and a lower curve is the integral of (upper - lower) between their intersection points, because each vertical strip has length (y_upper - y_lower). Take the region between y = x^2 and y = 2x + 3. Setting x^2 = 2x + 3 gives x^2 - 2x - 3 = (x - 3)(x + 1) = 0, so the curves meet at x = -1 and x = 3; testing x = 0 shows the line (value 3) lies above the parabola (value 0). The area is the integral from -1 to 3 of (2x + 3 - x^2) dx = [x^2 + 3x - x^3/3]; at x = 3 the bracket is 9 and at x = -1 it is -5/3, so the area is 9 + 5/3 = 32/3 = 10 2/3 square units. If the upper curve changes within the interval, split and integrate twice.",
          "bulletPoints": [
            "Solve the equations simultaneously to get the limits; never read them off a rough sketch.",
            "Identify the upper curve by testing one x-value strictly between the intersections.",
            "Integrate upper minus lower as one combined polynomial, term by term.",
            "A negative final number means the two curves were subtracted the wrong way round.",
            "Quote 32/3 exactly, then \"10 2/3\" — do not blur into 10.67 unless the question asks for decimals."
          ],
          "keyTakeaway": "Intersections give the limits, a test point picks the upper curve, and one integral of (upper - lower) gives the area.",
          "realWorldExample": "The plot between the curved market fence y = x^2 and the straight lorry track y = 2x + 3 in hectares is valued by the assembly exactly as 32/3 square units."
        },
        {
          "title": "Volumes of Revolution About the x-axis",
          "content": "Spin a region under y = f(x) from x = a to x = b about the x-axis and it sweeps a solid whose cross-sections are discs of area pi y^2, so V = pi times the integral of y^2 dx. Revolve the arch of y = 2x - x^2 between its roots x = 0 and x = 2: first square, (2x - x^2)^2 = 4x^2 - 4x^3 + x^4, then integrate to get pi[4x^3/3 - x^4 + x^5/5] from 0 to 2 = pi(32/3 - 16 + 32/5) = pi x 16/15 = 16pi/15, approximately 3.35 cubic units. Keep pi as a factor — an exact answer in terms of pi beats a rounded one. Guard against the classic slips: forgetting the pi, integrating y instead of y^2, and squaring after integrating instead of before.",
          "bulletPoints": [
            "Disc method about the x-axis: V = pi times the integral of y^2 dx with the region limits.",
            "Square the function ALGEBRAICALLY first, expand, then integrate term by term.",
            "Check with a cone: revolving y = x from 0 to 3 must return 9pi, matching (1/3)pi r^2 h.",
            "Revolution about the y-axis uses horizontal discs: integrate pi x^2 dy instead.",
            "Units cube themselves: areas in cm give volumes in cm^3."
          ],
          "keyTakeaway": "Square, then integrate, then multiply by pi: the disc formula is unforgiving about the order.",
          "realWorldExample": "A potter at Ahwiaa shapes a vase whose profile is y = 2x - x^2 revolved about its central axis; the clay volume she must weigh out is 16pi/15 cubic decimetres."
        }
      ],
      "commonMistakes": [
        "Evaluating a definite integral as (lower) minus (upper): the integral from 1 to 2 of (3x^2 + 2) dx becomes 3 - 12 = -9 instead of 9, and every later area inherits the wrong sign.",
        "Reporting the integral itself as the area when the curve dips below the axis: the integral of x - 2 from 0 to 4 is 0, but the shaded area is 4 square units — the two triangles must be taken positive and added.",
        "Integrating upper minus lower with the curves swapped and then \"fixing\" the negative by ignoring it mid-working: write the swap, re-do the subtraction, and quote +32/3 for the area between y = x^2 and y = 2x + 3.",
        "For volumes, using V = pi times the integral of y dx instead of y^2 dx, or expanding (2x - x^2)^2 as 4x^2 - x^4 and dropping the middle term -4x^3, which destroys the answer.",
        "Leaving limits as unread intersection values: the region bounded by y = x^2 and y = 2x + 3 runs from x = -1 to x = 3 only after solving x^2 - 2x - 3 = 0; guessing 0 and 3 loses both M1 lines."
      ],
      "wassceExamTips": [
        "In Paper 2 the area-between-curves question typically pays M1 for solving the intersections, M1 for setting up the correct integrand (upper minus lower), M1 for integrating, and A1 for the final fraction — write all four stages even if you can see 32/3.",
        "Keep answers as improper fractions (32/3) or multiples of pi (16pi/15); WAEC marks schemes treat 10.67 or 3.35 as accuracy-acceptable only when the question asks for a decimal, and never as good as the exact form.",
        "When the region lies partly below the axis, the marker expects to SEE the split: one bracketed integral per piece. A single integral over the whole span scores method for that integral but loses the area marks.",
        "A carry-through error from your own wrong intersection values is annotated afr, and the rest of the volume or area working stays markable — so keep clean lines rather than erasing and retrying against the clock.",
        "For a revolution about the x-axis, if time allows, re-check the order of magnitude with a solid you know: a spun straight line must behave like a cone, (1/3)pi r^2 h."
      ],
      "summaryChecklist": [
        "Can I evaluate a definite integral by bracketing the anti-derivative and subtracting lower from upper?",
        "Can I split an integral at the axis and correct the signs to report a true geometric area?",
        "Can I find the intersections of a line and a curve and use them as the limits of the region between?",
        "Can I compute a volume of revolution about the x-axis with V = pi times the integral of y^2 dx?",
        "Can I state an exact answer as a fraction or a multiple of pi and give its 3 significant figure value?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-integration-1",
        "title": "Area Bounded by a Line and a Parabola",
        "problem": "Find the area of the region enclosed between the curve y = x^2 and the line y = 2x + 3, giving the answer exactly.",
        "stepByStepSolution": [
          "Step 1 (M1): Equate the two y-values: x^2 = 2x + 3, so x^2 - 2x - 3 = 0 and (x - 3)(x + 1) = 0; the curves meet at x = -1 and x = 3.",
          "Step 2 (M1): Choose the upper curve on (-1, 3) by testing x = 0: the line gives 3 while the parabola gives 0, so the line is above.",
          "Step 3 (M1): Set up the area as the integral from -1 to 3 of (2x + 3 - x^2) dx.",
          "Step 4 (M1): Integrate term by term: [x^2 + 3x - x^3/3] between -1 and 3.",
          "Step 5 (M1): Substitute: at x = 3 the bracket is 9 + 9 - 9 = 9; at x = -1 it is 1 - 3 + 1/3 = -5/3.",
          "Step 6 (A1): Final answer: area = 9 - (-5/3) = 32/3 = 10 2/3 square units (about 10.7 square units)."
        ],
        "keyTakeaway": "Intersections give the limits, a test point chooses the upper curve, and upper-minus-lower integrates to the exact fraction."
      },
      {
        "id": "ex-shs3-em-integration-2",
        "title": "Volume of Revolution About the x-axis",
        "problem": "The region under the curve y = 2x - x^2, between its roots x = 0 and x = 2, is revolved through 360 degrees about the x-axis. Find the volume of the solid generated, leaving the answer in terms of pi.",
        "stepByStepSolution": [
          "Step 1 (M1): Disc formula about the x-axis: V = pi times the integral from 0 to 2 of (2x - x^2)^2 dx.",
          "Step 2 (M1): Square the function first: (2x - x^2)^2 = 4x^2 - 4x^3 + x^4.",
          "Step 3 (M1): Integrate term by term: pi[4x^3/3 - x^4 + x^5/5] between 0 and 2.",
          "Step 4 (M1): Substitute x = 2 (the lower limit gives 0): 32/3 - 16 + 32/5.",
          "Step 5 (M1): Common denominator 15: (160 - 240 + 96)/15 = 16/15.",
          "Step 6 (A1): Final answer: V = 16pi/15 cubic units, approximately 3.35 cubic units."
        ],
        "keyTakeaway": "Expand the square, integrate each term, keep pi outside until the end, and the exact solid volume is 16pi/15."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-integration",
      "topicId": "shs3-em-t3-integration",
      "title": "Integration and Areas Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-shs3-integration-1",
          "quizId": "quiz-shs3-em-integration",
          "questionText": "Evaluate the definite integral of (2x + 1) dx from x = 1 to x = 3.",
          "optionA": "8",
          "optionB": "10",
          "optionC": "12",
          "optionD": "14",
          "correctOption": "B",
          "subConcept": "Definite Integrals",
          "explanation": "The anti-derivative is x^2 + x; at x = 3 it is 12 and at x = 1 it is 2, so the integral is 12 - 2 = 10. Option C forgets to subtract the lower value; option A subtracts the wrong pair.",
          "remediationTip": "Bracket, substitute BOTH limits, then subtract: (upper) - (lower), in that order."
        },
        {
          "id": "q-em-shs3-integration-2",
          "quizId": "quiz-shs3-em-integration",
          "questionText": "Find the area bounded by y = x^2, the x-axis and the lines x = 0 and x = 3.",
          "optionA": "3 square units",
          "optionB": "18 square units",
          "optionC": "9 square units",
          "optionD": "27 square units",
          "correctOption": "C",
          "subConcept": "Area Under a Curve",
          "explanation": "The area is the integral from 0 to 3 of x^2 dx = [x^3/3] = 27/3 - 0 = 9 square units. Option D, 27, comes from forgetting to divide by the new exponent 3 — the single commonest slip on this rule.",
          "remediationTip": "After applying the power rule, re-read the divisor: x^3/3, not x^3."
        },
        {
          "id": "q-em-shs3-integration-3",
          "quizId": "quiz-shs3-em-integration",
          "questionText": "The region under y = x from x = 0 to x = 4 is revolved about the x-axis. Find the volume generated, in terms of pi.",
          "optionA": "16pi cubic units",
          "optionB": "8pi cubic units",
          "optionC": "64pi cubic units",
          "optionD": "64pi/3 cubic units",
          "correctOption": "D",
          "subConcept": "Volumes of Revolution",
          "explanation": "V = pi times the integral from 0 to 4 of x^2 dx = pi[x^3/3] = 64pi/3 cubic units — a cone of radius and height 4, matching (1/3)pi r^2 h. Option C drops the division by 3; option B wrongly integrates x rather than x^2.",
          "remediationTip": "Discs: square the height of the strip first, then integrate, then multiply by pi."
        },
        {
          "id": "q-em-shs3-integration-4",
          "quizId": "quiz-shs3-em-integration",
          "questionText": "Evaluate the integral of (x^3 + 2x) dx from x = -1 to x = 1.",
          "optionA": "0",
          "optionB": "5/2",
          "optionC": "1/2",
          "optionD": "5/4",
          "correctOption": "A",
          "subConcept": "Definite Integrals and Symmetry",
          "explanation": "The anti-derivative is x^4/4 + x^2, which equals 5/4 at BOTH x = 1 and x = -1, so upper minus lower is 0. Option B, 5/2, treats the integrand as even and doubles the 0-to-1 value; both x^3 and x are odd, so their integral over a symmetric interval vanishes.",
          "remediationTip": "On a symmetric interval [-a, a], test odd/even first: odd parts integrate to zero."
        },
        {
          "id": "q-em-shs3-integration-5",
          "quizId": "quiz-shs3-em-integration",
          "questionText": "Find the area bounded by the curve y = 4 - x^2 and the x-axis.",
          "optionA": "8/3 square units",
          "optionB": "16/3 square units",
          "optionC": "32/3 square units",
          "optionD": "64/3 square units",
          "correctOption": "C",
          "subConcept": "Area Between Curve and Axis",
          "explanation": "The roots are x = -2 and x = 2 and the arc lies above the axis, so the area is the integral from -2 to 2 of (4 - x^2) dx = [4x - x^3/3] = 16/3 - (-16/3) = 32/3 square units. Option B is half the area, from stopping at x = 0 and forgetting to double by symmetry.",
          "remediationTip": "Parabolas about the axis are symmetric: integrate from 0 to the positive root and double, or evaluate both ends."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t3-statistics-probability-revision",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 13,
    "title": "Statistics and Probability Revision for Section C",
    "description": "Combined mean and variance, coded and grouped data, quartiles from ogives, and probability trees with conditional and \"at least one\" events, revised to WASSCE Section C standard.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Combined mean: weight by sizes. Twenty candidates averaging 58 and thirty averaging 64 give (20 x 58 + 30 x 64)/50 = 3080/50 = 61.6 — never the mean of means, 61.\n• Combined variance: total within-group spread PLUS the spread BETWEEN group means: [n1(s1^2 + d1^2) + n2(s2^2 + d2^2)]/(n1 + n2), where d is each group mean minus the combined mean.\n  - With s1 = 4 and s2 = 3 the variance is [20(16 + 12.96) + 30(9 + 5.76)]/50 = 1022/50 = 20.44, so the standard deviation is about 4.52.\n  - The wrong answer 12.5 = (4^2 + 3^2)/2 comes from averaging the variances and ignoring d1^2 and d2^2 entirely.\n• Coding: if u = (x - a)/c then mean of x = a + c x (mean of u) and variance of x = c^2 x (variance of u). For u = (x - 40)/10 with mean 2.5 and variance 0.64: mean x = 40 + 10(2.5) = 65, variance x = 100(0.64) = 64, SD x = 8.\n• Linear transformation laws: mean(a + bx) = a + b(mean x); variance(a + bx) = b^2(variance x); SD(a + bx) = |b| x SD x. Adding a constant shifts the centre but never the spread.\n• Grouped mean: use class midpoints x-bar = (sum of fx)/(sum of f); median position is the N/2-th value and the median class is where the cumulative frequency passes it.\n• Class boundaries: a class written 10 - 19 really spans 9.5 to 19.5; use boundaries for histograms and ogives or the curve will start late.\n• Quartiles sit at cumulative frequencies N/4 (Q1), N/2 (Q2, the median) and 3N/4 (Q3); for 80 students an ogive is read across at cf 20, 40 and 60. Interquartile range = Q3 - Q1.\n• Conditional probability: P(A|B) = P(A and B)/P(B). If P(pass both Maths and Science) = 0.3 and P(pass Science) = 0.5, then P(pass Maths | passed Science) = 0.3/0.5 = 0.6.\n• Without replacement the denominators shrink: from 7 boys and 5 girls, P(two boys) = (7/12)(6/11) = 42/132 = 7/22.\n• With replacement events are independent and denominators stay: P(two boys) = (7/12)^2 = 49/144.\n• \"At least one\" questions go fastest through the complement: P(at least one girl) = 1 - P(no girls) = 1 - 7/22 = 15/22.\n• Tree check: all end-branch products must sum to 1 — here 7/22 + 35/66 + 5/33 = 21/66 + 35/66 + 10/66 = 66/66.\n• Semi-interquartile range is (Q3 - Q1)/2; it is quoted in WAEC answers more than candidates expect.\n• Interpretation wording: \"on average the marks differ by 61.6\", \"the spread is about 4.52 marks\", \"half the school scored below the median read from the ogive\".",
    "detailedNotes": {
      "overview": "Section C of the Elective Mathematics paper asks statistics and probability as routine but heavily signposted questions: a combined mean, a coded variance, an ogive reading, a two-stage tree. Marks are lost to habits, not to mystery: averaging the two means, forgetting that variance scales by the square, mixing with-replacement and without-replacement denominators. This lesson rehearses the four standard items until the routines are automatic.",
      "introduction": "Statistics at this level runs on two centres (mean, median) and three spreads (variance, standard deviation, interquartile range), and probability runs on the sum rule for \"or\", the product rule for \"and\", the complement for \"at least one\", and the division P(A and B)/P(B) for \"given that\". Every worked question in this lesson uses one of these moves, verified numerically.",
      "realWorldContext": "Two SHS 3 classes sat the same Mathematics mock at Achimota School: the stream of 20 averaged 58 with standard deviation 4, the stream of 30 averaged 64 with standard deviation 3. The vice-principal wants ONE mean and ONE standard deviation for the whole year to report at the parents' meeting in cedis-printed results booklets — a combined-mean and combined-variance calculation to the mark.",
      "objectives": [
        "Compute the combined mean of two groups from their sizes and means",
        "Compute the combined variance and standard deviation using the within-plus-between formula",
        "Decode a coded variable u = (x - a)/c back to the mean, variance and standard deviation of x",
        "Read quartiles and the median from a cumulative frequency (ogive) curve using correct positions",
        "Solve two-stage probability problems with and without replacement, including conditional and \"at least one\" events"
      ],
      "sections": [
        {
          "title": "Combined Mean and Combined Variance",
          "content": "When two groups merge, the new mean is total score over total headcount, not the average of the two means: with 20 candidates averaging 58 and 30 averaging 64, the combined mean is (20 x 58 + 30 x 64)/50 = 61.6. The combined variance has two sources: the spread INSIDE each group and the spread BETWEEN each group mean and the grand mean. With variances 16 and 9 and deviations d1 = 58 - 61.6 = -3.6 and d2 = 64 - 61.6 = 2.4, the formula gives [20(16 + 12.96) + 30(9 + 5.76)]/50 = (579.2 + 442.8)/50 = 20.44, so the standard deviation is the square root of 20.44, about 4.52 marks. Note how much larger 20.44 is than either 16 or 9: separating the two means by 6 marks contributes more spread than the within-class scatter itself.",
          "bulletPoints": [
            "Grand mean = (n1 x m1 + n2 x m2)/(n1 + n2); weight by sizes.",
            "Combined variance = [n1(s1^2 + d1^2) + n2(s2^2 + d2^2)]/(n1 + n2), d = group mean minus grand mean.",
            "Averaging variances, (16 + 9)/2 = 12.5, is the standard wrong answer and loses both marks.",
            "Standard deviation is the square root of the combined variance, quoted to 3 significant figures: 4.52.",
            "The method extends to three groups by adding a third bracket in the numerator."
          ],
          "keyTakeaway": "Mean weights by frequency; variance adds the within-group spread to the between-group spread before dividing by the total.",
          "realWorldExample": "A cocoa quality officer blending two lots of beans — 20 sacks averaging 58 grade points and 30 sacks averaging 64 — reports the blended lot at 61.6 with standard deviation 4.52."
        },
        {
          "title": "Coded Data and the Transformation Laws",
          "content": "Grouped data with large class midpoints is tamed by coding, u = (x - a)/c, where a is a convenient midpoint and c the class width. Decoding obeys two laws only: the mean decodes linearly, mean of x = a + c times mean of u, while the variance decodes quadratically, variance of x = c^2 times variance of u, because every deviation has been multiplied by c. For u = (x - 40)/10 with mean 2.5 and variance 0.64, the original scores have mean 40 + 10(2.5) = 65, variance 100(0.64) = 64, and standard deviation 8. The same logic handles any linear change: the standard deviation of 3x + 2, given the variance of x is 4, is |3| times the square root of 4, i.e. 6 — the + 2 moves the centre only.",
          "bulletPoints": [
            "Choose a as the middle midpoint and c as the class width for small u-values.",
            "mean(x) = a + c mean(u); variance(x) = c^2 variance(u); SD(x) = |c| SD(u).",
            "Adding a constant shifts the mean but leaves variance untouched.",
            "Multiplying by k scales the mean by k but the variance by k^2.",
            "Always decode at the END, after computing with the easy numbers."
          ],
          "keyTakeaway": "Code forward with subtraction and division; decode means once but decode variances twice — the square of c.",
          "realWorldExample": "A market trader at Makola records daily trotro-fare income GHc amounts in tens; coding by 10 turns big marks into small u-values, and the report decodes variance back by 100."
        },
        {
          "title": "Quartiles, Percentiles and the Ogive",
          "content": "The cumulative frequency curve, the ogive, converts \"how many below x\" into a reading machine for positions. For N = 80 students, Q1 corresponds to cumulative frequency 20, the median to 40, and Q3 to 60: run across from the cf-axis, down to the score-axis, and quote the scores. The interquartile range is Q3 minus Q1 and the semi-interquartile range halves it. Percentiles share the rule: the p-th percentile sits at cumulative frequency pN/100, so the 90th percentile of 80 students is read at cf 72. Because ogives interpolate visually, WAEC accepts readings within about one class interval, but the POSITION arithmetic must be exact.",
          "bulletPoints": [
            "Positions: Q1 at N/4, median at N/2, Q3 at 3N/4, percentile p at pN/100.",
            "Class boundaries (9.5 not 10) drive the plotted points of both histogram and ogive.",
            "Read horizontally from cf, then vertically down — the reverse order reports nonsense.",
            "IQR = Q3 - Q1 is a spread measure immune to outliers, unlike the range.",
            "The modal class is the one with the tallest bar, not the largest boundary."
          ],
          "keyTakeaway": "Convert the named fraction of N into a cumulative frequency first; the ogive only does geometry, you do the arithmetic.",
          "realWorldExample": "The district director of education at Ho reads the WASSCE mock ogive for 80 candidates at cf 20, 40 and 60 to announce the lower quartile, median and upper quartile scores at the intervention meeting."
        },
        {
          "title": "Probability Trees, Replacement and \"At Least One\"",
          "content": "Two-stage draws split into two models. With replacement, the branches repeat the same probabilities and independence gives P(both) as a product of identical fractions: P(two boys) from 7 boys and 5 girls equals (7/12)^2 = 49/144. Without replacement, the second draw shrinks both numerator and denominator: P(two boys) = (7/12)(6/11) = 42/132 = 7/22. The complement route handles \"at least one\": P(at least one girl) = 1 - P(both boys) = 15/22. Conditional probability reuses the same tree: P(A|B) = P(A and B)/P(B), so if 0.3 of a cohort pass both Maths and Science and 0.5 pass Science, then P(Maths | Science pass) = 0.6. The universal self-check is that all terminal branches sum to 1.",
          "bulletPoints": [
            "Draw the tree with BOTH stages labelled with their reduced fractions when there is no replacement.",
            "Multiply along branches for \"and\", add up matching branches for \"or\".",
            "\"At least one\" is faster as 1 - P(none).",
            "P(A|B) divides the joint probability by the condition, never by the other marginal.",
            "End-branch sum test: if your terminal probabilities do not total 1, the tree is wrong."
          ],
          "keyTakeaway": "Replacement keeps denominators, no replacement shrinks them, and complements turn \"at least one\" into one subtraction.",
          "realWorldExample": "A prefect at Tamale draws two house-tokens from a bag of 7 green and 5 blue without replacement to pick quiz contestants; the chance both are green is 7/22."
        }
      ],
      "commonMistakes": [
        "Writing the combined mean as (58 + 64)/2 = 61 when the groups hold 20 and 30 students: the mean of means ignores weights; the answer is (20 x 58 + 30 x 64)/50 = 61.6.",
        "Averaging the two variances, (16 + 9)/2 = 12.5, and taking its square root: the between-group terms d1^2 = 12.96 and d2^2 = 5.76 must be added inside the brackets to give 20.44.",
        "Decoding a coded variance with c instead of c^2: variance of x for u = (x - 40)/10 and variance(u) = 0.64 is 100 x 0.64 = 64, not 10 x 0.64 = 6.4.",
        "Keeping the denominator 12 on the second draw of a without-replacement tree: (7/12)(7/12) = 49/144 answers a WITH-replacement question; without replacement it is (7/12)(6/11) = 7/22.",
        "Computing P(at least one girl) as P(one girl and one boy) = 35/66 and stopping: \"at least one\" also includes two girls (5/33), which together with 35/66 and 7/22 must sum to 1, and the clean route is 1 - 7/22 = 15/22."
      ],
      "wassceExamTips": [
        "Section C statistics is usually an 8-to-12 mark block split into (a) mean, (b) variance or SD, (c) interpretation; lay your answer in (a)(b)(c) order so each part can be marked independently — a wrong (a) becomes the afr baseline for (b) instead of poisoning the block.",
        "Show the summation line with numbers in it, e.g. \"combined mean = 3080/50\", because M1 is awarded for the weighted sum and A1 only for 61.6 — one line each, cheap marks.",
        "When an ogive is supplied, draw your reading lines on the figure itself and write the position arithmetic beside them (\"N/4 = 20\"): examiners look for the position before they credit the read value.",
        "For trees, quote fractions, not decimals: 7/22 is exact and safe, while 0.318 invites rounding disputes; if a decimal is requested, round only at the final step.",
        "Interpretation wording carries marks too: \"the middle half of candidates scored between Q1 and Q3\" earns the method credit that \"Q3 - Q1 = 12\" alone does not."
      ],
      "summaryChecklist": [
        "Can I compute the combined mean and combined variance of two groups using weights and the d-squared terms?",
        "Can I decode a coded variable into the true mean, variance and standard deviation with the c and c^2 laws?",
        "Can I state the correct cumulative-frequency positions for quartiles and percentiles and read them off an ogive?",
        "Can I build a two-stage probability tree with and without replacement and check the branches total 1?",
        "Can I compute a conditional probability P(A|B) and use complements for \"at least one\" questions?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-statprob-1",
        "title": "Combined Mean and Standard Deviation of Two Classes",
        "problem": "In a mock examination, a stream of 20 students had mean score 58 with standard deviation 4, and a stream of 30 students had mean score 64 with standard deviation 3. Find the mean and the standard deviation, to 3 significant figures, of the 50 students together.",
        "stepByStepSolution": [
          "Step 1 (M1): Combined mean = (20 x 58 + 30 x 64)/(20 + 30) = (1160 + 1920)/50 = 3080/50 = 61.6.",
          "Step 2 (M1): Deviations of the group means from the grand mean: d1 = 58 - 61.6 = -3.6 and d2 = 64 - 61.6 = 2.4, so d1^2 = 12.96 and d2^2 = 5.76.",
          "Step 3 (M1): Apply the combined-variance formula: [n1(s1^2 + d1^2) + n2(s2^2 + d2^2)]/(n1 + n2).",
          "Step 4 (M1): Substitute: [20(16 + 12.96) + 30(9 + 5.76)]/50 = [20(28.96) + 30(14.76)]/50 = (579.2 + 442.8)/50.",
          "Step 5 (A1): Combined variance = 1022/50 = 20.44.",
          "Step 6 (A1): Final answer: mean 61.6 and standard deviation = square root of 20.44, about 4.52 marks (3 significant figures)."
        ],
        "keyTakeaway": "Weight the means by sizes; build the variance from within-group spread PLUS between-group spread, then square root once at the end."
      },
      {
        "id": "ex-shs3-em-statprob-2",
        "title": "Committee Draw Without Replacement",
        "problem": "A committee has 7 boys and 5 girls. Two members are chosen at random, one after the other, without replacement. Find (a) P(both boys), (b) P(one boy and one girl), (c) P(at least one girl).",
        "stepByStepSolution": [
          "Step 1 (M1): Tree, first draw 7/12 boy, 5/12 girl; second draw shrinks: 6/11 boy after boy, 7/11 girl after boy, 5/11 girl after girl, 6/11 boy after girl.",
          "Step 2 (A1): (a) P(both boys) = (7/12)(6/11) = 42/132 = 7/22.",
          "Step 3 (M1): (b) P(one of each) = (7/12)(5/11) + (5/12)(7/11) = 35/132 + 35/132 = 70/132 = 35/66.",
          "Step 4 (M1): (c) use the complement: P(at least one girl) = 1 - P(both boys) = 1 - 7/22.",
          "Step 5 (M1): Check the tree: P(both girls) = (5/12)(4/11) = 20/132 = 5/33, and 7/22 + 35/66 + 5/33 = 21/66 + 35/66 + 10/66 = 66/66 = 1.",
          "Step 6 (A1): Final answers: 7/22, 35/66 and 15/22."
        ],
        "keyTakeaway": "Without replacement the denominators shrink; \"at least one\" rides on the complement, and the end-branch sum must be 1."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-statprob",
      "topicId": "shs3-em-t3-statistics-probability-revision",
      "title": "Statistics and Probability Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-shs3-statprob-1",
          "quizId": "quiz-shs3-em-statprob",
          "questionText": "Ten form-two students averaged 45 marks and fifteen averaged 60 marks. Find the mean mark of all twenty-five students.",
          "optionA": "52.5",
          "optionB": "54",
          "optionC": "55",
          "optionD": "56",
          "correctOption": "B",
          "subConcept": "Combined Mean",
          "explanation": "Total marks = 10 x 45 + 15 x 60 = 1350, so the mean is 1350/25 = 54. Option A, 52.5, is the unweighted mean of the two means — the standard trap when group sizes differ.",
          "remediationTip": "Never average averages: rebuild the totals first, then divide by the total headcount."
        },
        {
          "id": "q-em-shs3-statprob-2",
          "quizId": "quiz-shs3-em-statprob",
          "questionText": "A coded variable y = (x - 20)/5 has mean 3. Find the mean of the original scores x.",
          "optionA": "35",
          "optionB": "23",
          "optionC": "15",
          "optionD": "55",
          "correctOption": "A",
          "subConcept": "Coding",
          "explanation": "Decoding reverses y = (x - 20)/5: x = 20 + 5y, so mean x = 20 + 5(3) = 35. Option B adds the coding constant but forgets to multiply by the class width; option D inverts the operations.",
          "remediationTip": "Write the decoding formula x = a + cy before substituting anything."
        },
        {
          "id": "q-em-shs3-statprob-3",
          "quizId": "quiz-shs3-em-statprob",
          "questionText": "The variance of a set of scores x is 4. Find the standard deviation of the transformed scores 3x + 2.",
          "optionA": "2",
          "optionB": "4",
          "optionC": "12",
          "optionD": "6",
          "correctOption": "D",
          "subConcept": "Transformation of Spread",
          "explanation": "SD(3x + 2) = |3| x SD(x) = 3 x 2 = 6. Option C, 12, applies the factor 3 to the variance 4 instead of to the standard deviation 2; option B ignores the scaling entirely.",
          "remediationTip": "Additions move the centre, multiplications stretch the spread — and variance stretches by the SQUARE."
        },
        {
          "id": "q-em-shs3-statprob-4",
          "quizId": "quiz-shs3-em-statprob",
          "questionText": "A bag holds 6 boys' and 4 girls' house tokens. Two tokens are drawn without replacement. Evaluate P(both are girls').",
          "optionA": "4/25",
          "optionB": "2/5",
          "optionC": "2/15",
          "optionD": "3/25",
          "correctOption": "C",
          "subConcept": "Probability Without Replacement",
          "explanation": "P(both girls) = (4/10)(3/9) = 12/90 = 2/15. Option A, 4/25, keeps 10 in the second denominator — a with-replacement slip; option D uses 10 twice and 3, the mixed error (4/10)(3/10).",
          "remediationTip": "After each draw WITHOUT replacement, remove the token from BOTH numerator and denominator."
        },
        {
          "id": "q-em-shs3-statprob-5",
          "quizId": "quiz-shs3-em-statprob",
          "questionText": "An ogive is drawn for the marks of 80 candidates. At which cumulative frequency should the lower quartile be read off the curve?",
          "optionA": "40",
          "optionB": "20",
          "optionC": "60",
          "optionD": "80",
          "correctOption": "B",
          "subConcept": "Quartiles from the Ogive",
          "explanation": "Q1 corresponds to cumulative frequency N/4 = 80/4 = 20. Option A, 40, is the position of the median (N/2) and option C, 60, is Q3 (3N/4) — all valid positions, but not the lower quartile.",
          "remediationTip": "Quartile means quarter: read across at N/4, N/2 and 3N/4 and name each line you draw."
        }
      ]
    }
  },
  {
    "id": "shs3-em-t3-wassce-strategy",
    "subjectId": "elective-maths",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 14,
    "title": "WASSCE Elective Mathematics Paper Strategy",
    "description": "How the Elective Mathematics papers are structured and paced, how to bank method marks M1 with every line of working, how carry-through (afr) is treated, and a disciplined six-week revision plan.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Elective Mathematics is assessed in two papers — an objective paper and a structured theory paper of long questions; confirm the exact duration of yours from the current WAEC timetable, not a friend's phone.\n• Paper 1 strategy: answer the easy majority FIRST, circle doubts, and return in the residual time; every objective question earns the same mark, so no question deserves your last minute before a first sweep.\n• Theory marks are awarded per working line: M1 for a correct method step, A1 for an accurate result; a lone correct answer with no lines can score 0 of 4.\n• The method-mark layout for \"solve 2x^2 - 7x + 3 = 0 by the formula\": (i) write a = 2, b = -7, c = 3 and the formula line, (ii) substitute: x = (7 plus-or-minus square root of (49 - 24))/4, (iii) simplify the discriminant: x = (7 plus-or-minus 5)/4, (iv) take both branches x = 12/4 and x = 2/4, (v) state x = 3 and x = 1/2.\n• Carry-through: WAEC annotates afr (follow-through) — a wrong earlier answer used correctly in later working still earns the method marks of the later stages, so NEVER stop working mid-question because \"the answer already looks wrong\".\n• Erasing is the enemy: cross out once, keep the substitute working visible, and the marker can still follow the afr chain.\n• Check answers by substitution where it is cheap: x = 3 in 2x^2 - 7x + 3 gives 18 - 21 + 3 = 0 and x = 1/2 gives 1/2 - 7/2 + 3 = 0 — two verified roots, zero extra algebra.\n• Sanity checks that cost seconds: a probability between 0 and 1; an area or volume positive; a hypotenuse the longest side; a log of a number above 1 positive; degrees marked with the small circle.\n• Four-figure tables and the formula list are provided: practise with the SAME tables you will sit with; learn to interpolate and to read the characteristic (integer part) of a logarithm from the decimal count, not the mantissa.\n• Pacing model for a 40-question objective paper in 2 hours: that is 3 minutes a question — a working target nearer 90 seconds per question reserves the final 15 minutes for flagged doubts and shading checks.\n• In the theory paper, allocate time by marks: about 1.5 to 2 minutes per mark, and if a question has consumed twice its share with no clean method, bank any M1 lines already written, make a defensible choice, and move on.\n• Objective guessing discipline: eliminate two absurd options first, then commit — never leave a blank; a blank cannot catch an afr-style award or a lucky index.\n• Six-week plan: weeks 6-5 re-teach weak topics from your own mark-sheet log; weeks 4-3 complete timed past papers by year; weeks 2-1 redo ONLY your errors and drill tables, formulae and standard results.\n• Presentation is marks: line up equals signs, write units (GHc, cm^3, degrees), quote surds and fractions exactly, then the decimal the question asks for.",
    "detailedNotes": {
      "overview": "Candidates rarely lose Elective Mathematics from ignorance; they lose it from pacing, blank method lines and unclaimed checks. This lesson converts the examiner's mark scheme into habit: what earns M1, what afr forgives, where substitution saves an A1, and how six weeks of work should be ordered. Treat strategy as a topic with its own mark band — because on results day it behaves like one.",
      "introduction": "Picture the marking centre: a marker with a scheme of M1 and A1 ticks per working line, working through hundreds of scripts. Your script succeeds when its method lines are visible even where arithmetic failed. Every rule in this lesson exists to feed that machine: one line per mark, one check per answer, one decision per minute lost.",
      "realWorldContext": "Abaateng sits her school mock at Achimota: 2 hours for the objective paper, and she burns 7 minutes on a variation question before the bell forces her to leave twelve questions unshaded. The same candidate in the theory paper writes only answers, collecting 6 of a possible 20 method marks. Both are strategy repairs, not content repairs — and strategy is the part that improves in six weeks.",
      "objectives": [
        "Describe the structure of the two Elective Mathematics papers and the timing plan for each",
        "Lay out a theory answer so that each method line is available for an M1 award",
        "Apply the carry-through (afr) rule to keep earning marks after an early slip",
        "Choose checking methods — substitution and sanity bounds — that protect accuracy marks",
        "Plan a six-week revision schedule weighted to weak topics and timed past papers"
      ],
      "sections": [
        {
          "title": "Paper Structure and the Time Budget",
          "content": "The objective paper is a speed test with the same mark per question, so its economics are brutal and simple: a question you cannot crack in about a minute is worth exactly what a one-line question is worth, and less than the three you will rush to reach later. Convert your set duration into a per-question allowance — a 40-question paper in 2 hours allows 3 minutes each, but a working pace nearer 90 seconds reserves the final quarter-hour for flagged doubts, shading verification and transfer errors. The theory paper is paid by marks, not questions: about 1.5 to 2 minutes per mark, spent against the question's mark value, with a hard exit rule — when a question has eaten twice its share with no clean method, bank the M1 lines already written, commit to your best choice, and move on.",
          "bulletPoints": [
            "Sweep the objective paper in passes: certain, probable, guess-and-flag — in that order.",
            "Equal marks per objective question: none deserves your last minute before the first sweep ends.",
            "Theory pacing: minutes spent should track marks on the question.",
            "The exit rule protects the paper: one lost question costs 10 marks, a lost section costs 30.",
            "Confirm your exact paper durations from the timetable; do not import a friend's schedule."
          ],
          "keyTakeaway": "Objective paper: buy every cheap mark first. Theory paper: spend time in proportion to marks and exit ruthlessly past double the share.",
          "realWorldExample": "Like a trotro driver on the Kumasi-Tamale road who fills every seat before chasing one straggler at a village stop, you bank the certain marks across the whole paper before paying premium time for one doubt."
        },
        {
          "title": "Writing for Method Marks: The M1 Line by Line",
          "content": "A WAEC mark scheme is a list of moments: state the formula (M1), substitute correctly (M1), reduce (M1), present the exact answer (A1), quote units or both roots (A1). Your job on every theory question is to deposit one visible line per moment. Solving 2x^2 - 7x + 3 = 0 by the formula is worth four or five deposits: the identification line a = 2, b = -7, c = 3; the formula line with x isolated; the substitution x = (7 plus-or-minus sqrt(49 - 24))/4; the simplification to x = (7 plus-or-minus 5)/4; and the two roots x = 3 and x = 1/2 as separate statements. A candidate who writes only \"x = 3, 1/2\" has produced no moment the marker can tick if the answer is challenged — and if a sign slips, the bare answer is simply wrong while the stacked lines keep their M1s.",
          "bulletPoints": [
            "One line per markable moment: formula, substitution, reduction, result, units.",
            "Line up equals signs and write \"for x = ...\"-style labels so the marker scans in seconds.",
            "Never solve only by calculator display: the screen earns no M1.",
            "Quote surds or fractions exactly first, then the decimal if the question asks for one.",
            "Both roots of a quadratic are an A1 pair: \"x = 3\" alone loses the accuracy mark."
          ],
          "keyTakeaway": "Write the scheme, not just the sum: every method line is an M1 the marker can tick even if the final answer fails.",
          "realWorldExample": "The way a cocoa buying clerk at a district union keeps a ledger — weight, moisture deduction, price per kg, total — so the auditor can verify any line, lay your working line by line for the examiner."
        },
        {
          "title": "Carry-Through Errors: What afr Forgives and What It Does Not",
          "content": "The annotation afr — follow-through — is one of the most valuable and most unknown rules in West African marking: once your own wrong value is fixed, using it CORRECTLY keeps earning method marks for every later stage, so an error propagates in arithmetic but not in methodology. The operational consequences: never erase a suspect line (cross it out once and continue, because the marker may follow either chain); never abandon a question at the first wrong number, since the later A1s are still alive as long as the method is; and keep later statements honest — an \"answer\" of probability 1.4 or volume -16pi/15 is not a follow-through, it is a rejected result, because schemes award accuracy marks only for values that can be correct. afr forgives arithmetic; it never forgives implausibility.",
          "bulletPoints": [
            "afr means later METHOD marks survive your earlier wrong ANSWER.",
            "Cross out, never erase: two chains of working can both be markable.",
            "A wrong quadratic root used in a follow-up area is still M1 markable — write the area working.",
            "But no A1 for a negative area, a probability above 1, or a hypotenuse shorter than a leg.",
            "When the answer looks wrong mid-question, state the doubt in words and proceed — \"using x = 4, ...\"."
          ],
          "keyTakeaway": "Keep going: your mistake may have become the question's new data, and the marks for handling it correctly are still on the table.",
          "realWorldExample": "Just as a market accountant at Makola who books a wrong figure still gets paid for correct addition of it thereafter, the marker pays you for every correct method that follows your own wrong answer."
        },
        {
          "title": "Checking by Substitution and the Last-Six-Weeks Plan",
          "content": "Cheap checks convert luck into method. A solved equation should be fed back: x = 3 gives 2(9) - 21 + 3 = 0 and x = 1/2 gives 1/2 - 7/2 + 3 = 0, both true, both defensible. Bounds check magnitudes: a probability lands in [0, 1], an area and a volume are positive, the log of a number greater than 1 is positive, and an angle tagged with degrees must match the picture. For the final six weeks, run three gears: weeks 6 to 5, re-teach only the weak topics named by your own mock mark-sheet log (typically the integration block or conditional probability); weeks 4 to 3, sit full past papers under strict time in the order of your own exam days, marking with the scheme's M1/A1 deposits rather than the final number alone; weeks 2 to 1, redo ONLY your recorded errors, drill four-figure-table lookups and interpolation, memorise standard results (discriminant, sine rule, volume of revolution), and stop learning anything new — consolidate, do not extend.",
          "bulletPoints": [
            "Substitute solved values back into the ORIGINAL equation, not your rearrangement.",
            "Bound every probability, area, volume and angle for plausibility before turning the page.",
            "Log every error by topic; your log IS the syllabus for weeks 6-5.",
            "Practise with the exact tables and formula list allowed in the hall.",
            "Final week: no new topics — timed error-redo and sleep; the paper tests habits, not heroics."
          ],
          "keyTakeaway": "A root checked is an A1 secured, and a revision plan built on your own error log beats a full-syllabus re-read every time.",
          "realWorldExample": "A mason at Ho lays a string line and checks each course with a plumb bob before the next — seconds of checking that save days of rebuilding; substitution is your plumb bob."
        }
      ],
      "commonMistakes": [
        "Writing only the final answer, e.g. \"x = 3, 1/2\", for a 4-mark quadratic: no line carries the formula or the substitution, so nothing is tickable as M1 and an unravelling error zeroes the whole answer.",
        "Erasing a suspect working entirely when it could have been followed through: cross out instead and keep a second chain visible, because afr method marks only attach to writing the marker can see.",
        "Spending nine minutes on one objective question because \"I almost have it\": equal-value questions mean the sunk time buys nothing; flag, best-guess, move on.",
        "Reporting impossible values with confidence: probability 1.4, a volume of -16pi/15 or a hypotenuse shorter than its leg — sanity bounds are free marks insurance no afr can rescue.",
        "Revising by reading worked solutions in the last six weeks: recognition is not production; without timed pen-on-paper past papers, the six-week plan produces an audience, not a candidate."
      ],
      "wassceExamTips": [
        "At the top of every theory answer, write the ONE line the scheme pays first (formula or stated relation, e.g. x = (-b plus-or-minus sqrt(b^2 - 4ac))/2a with a, b, c identified): M1 banked in five seconds before any arithmetic risk.",
        "Treat part (a) as collateral: even if it fails, part (b) usually opens \"hence\", so state your (a) result explicitly (\"taking x = 4 from (a)\") and the (b) marks stay live through afr.",
        "Allocate about 1.5 to 2 minutes per theory mark and check the clock at every quarter of the paper; a 20-mark section at the 60-minute mark of a 120-minute paper is a signal to shift gears, not to pray.",
        "Practise four-figure tables until lookups take under 15 seconds: know that the mantissa comes from the table, the characteristic from the decimal shift, and that interpolation between table entries is expected, not cheating.",
        "In the last 15 minutes of the objective paper, verify the SHADING (one bubble per line, no doubles), then revisit flagged questions and substitute the options into the equation — reverse-checking often solves in 30 seconds what forward algebra could not in three minutes."
      ],
      "summaryChecklist": [
        "Can I state the two-paper structure of Elective Mathematics and my per-question and per-mark time budget?",
        "Can I lay a theory answer out so each method line is available for an M1 award?",
        "Can I keep earning marks after an early slip using the afr (follow-through) rule instead of erasing?",
        "Can I check a solved equation by substitution and screen answers against probability, area and angle bounds?",
        "Can I describe and run a six-week revision plan of weak-topic re-teaching, timed past papers and error redoing?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-em-strategy-1",
        "title": "A Method-Mark Layout for a Solved Quadratic",
        "problem": "A candidate knows the roots of 2x^2 - 7x + 3 = 0 are 3 and 1/2. Show the exam write-up, step by step, that lets a marker award every available method mark (M1) and accuracy mark (A1) even if the final stage were misread.",
        "stepByStepSolution": [
          "Step 1 (M1): Identification line: \"for 2x^2 - 7x + 3 = 0, a = 2, b = -7, c = 3\" — the scheme pays the moment the coefficients are correct.",
          "Step 2 (M1): Formula line: x = (-b plus-or-minus sqrt(b^2 - 4ac))/(2a) — quoting the formula earns its own M1 regardless of later slips.",
          "Step 3 (M1): Substitution line: x = (7 plus-or-minus sqrt(49 - 24))/4 — one markable deposit; check 49 - 4(2)(3) = 49 - 24 = 25.",
          "Step 4 (M1): Reduction line: sqrt(25) = 5, so x = (7 plus-or-minus 5)/4.",
          "Step 5 (A1): Accuracy: the two branches x = 12/4 = 3 and x = 2/4 = 1/2 are both exact and both stated.",
          "Step 6 (A1): Checking line (protects the A1s): substitute back — 2(9) - 21 + 3 = 18 - 21 + 3 = 0, and 2(1/4) - 7(1/2) + 3 = 1/2 - 7/2 + 3 = 0; both hold, so the answer is verified, not hoped."
        ],
        "keyTakeaway": "One line per markable moment — identify, formula, substitute, reduce, state, check — turns a known answer into banked marks."
      },
      {
        "id": "ex-shs3-em-strategy-2",
        "title": "A Timing and Checking Decision Under Exam Pressure",
        "problem": "In a 2-hour objective paper of 40 questions, a candidate has spent 60 seconds on a variation question at the 34-minute mark with no clean method and 12 questions unattempted. Decide, with justification, what she should do now and how she should use the residual time at the end of the paper.",
        "stepByStepSolution": [
          "Step 1 (M1): Budget read-out: 40 questions in 120 minutes is 3 minutes each, but a first sweep targets about 90 seconds per question so the last 15 minutes belong to flagged doubts; 60 seconds without a method is inside the sweep, not past the exit.",
          "Step 2 (M1): Apply the exit rule: she has earned nothing from minutes already spent on a question, and 12 unattempted questions of EQUAL value remain — the marginal minute buys more elsewhere.",
          "Step 3 (M1): Bank something now: eliminate any options that are dimensionally or sign absurd (a negative constant of variation for this setting, a probability above 1), then commit to a best guess and circle the number; a blank can never be marked right.",
          "Step 4 (A1): Residual-time decision at the 105-minute mark: return ONLY to circled questions, and attack them backwards — substitute the four options into the equation or relation until one fits, which typically costs 30 seconds against three minutes of stranded algebra.",
          "Step 5 (A1): Final check list before handing in: shading audit (one bubble per line, no doubles, no eraser smudges that a scanner reads as two marks), bounds scan (every probability between 0 and 1, every area and volume positive), and accept that a substituted-verified option is a decision, not a guess."
        ],
        "keyTakeaway": "Time is spent where marks are cheapest: sweep equal-value questions, guess with eliminated odds, verify by substitution with the reserved quarter."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-em-strategy",
      "topicId": "shs3-em-t3-wassce-strategy",
      "title": "Exam Strategy Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-em-shs3-strategy-1",
          "quizId": "quiz-shs3-em-strategy",
          "questionText": "Why is it worth writing every method line in a theory answer even when you already know the answer?",
          "optionA": "Because longer scripts are marked more generously overall",
          "optionB": "Because the marker needs the working to guess your intent",
          "optionC": "Because presentation alone carries most of the marks",
          "optionD": "Because method marks M1 are awarded for correct working lines even if the final answer is wrong",
          "correctOption": "D",
          "subConcept": "Method Marks",
          "explanation": "Schemes pay M1 per genuine method step, so the lines remain markable whatever the final A1 does; option C inverts the truth — presentation without working scores nothing, since a bare answer shows no M1 deposits.",
          "remediationTip": "Before an exam, take one solved question and count the lines: formula, substitution, reduction, result — each should look like a separate tick."
        },
        {
          "id": "q-em-shs3-strategy-2",
          "quizId": "quiz-shs3-em-strategy",
          "questionText": "In WAEC marking, the annotation \"afr\" (follow-through) means which of the following?",
          "optionA": "The answer is wrong because the table was read incorrectly",
          "optionB": "Later working that is method-correct on your own wrong earlier answer still earns method marks",
          "optionC": "All accuracy marks in the question are withdrawn once one slip appears",
          "optionD": "The candidate must copy the question data again in the answer",
          "correctOption": "B",
          "subConcept": "Carry-Through",
          "explanation": "afr freezes your earlier result as the question's working data: correct method applied to it stays markable, which is why candidates should cross out, never erase, and always continue. Option C describes the opposite — the dead-end reading of the rule that makes students abandon good questions.",
          "remediationTip": "Remember: arithmetic propagates, methodology still pays. Keep the chain visible and keep going."
        },
        {
          "id": "q-em-shs3-strategy-3",
          "quizId": "quiz-shs3-em-strategy",
          "questionText": "Which statement correctly checks that x = 2 is a root of x^2 - 5x + 6 = 0?",
          "optionA": "Substituting gives 2^2 - 5(2) + 6 = 4 - 10 + 6 = 0, so x = 2 is verified",
          "optionB": "Substituting gives 2^2 + 5(2) + 6 = 20, so x = 2 is verified",
          "optionC": "The roots multiply to 6, so any factor of 6 is a root",
          "optionD": "The graph crosses the axis somewhere near 2, so x = 2 is verified",
          "correctOption": "A",
          "subConcept": "Checking by Substitution",
          "explanation": "A check must feed the value into the ORIGINAL equation: 4 - 10 + 6 = 0 exactly. Option B flips the sign of the middle term and calls 20 a confirmation; option C confuses a factor of the constant with a root (the product property only helps when paired with the sum).",
          "remediationTip": "Verification means substitute-then-compute-then-equals-zero; a near-miss graph never earns an A1."
        },
        {
          "id": "q-em-shs3-strategy-4",
          "quizId": "quiz-shs3-em-strategy",
          "questionText": "Half-way through an equal-marks objective paper, a question has consumed about a minute and still has no clean method. Which decision best protects the total score?",
          "optionA": "Keep trying different methods until the bell, since persistence earns method respect",
          "optionB": "Skip it entirely and leave the sheet blank there",
          "optionC": "Eliminate the absurd options, mark a best guess, circle the number and move on to return in the checked residual time",
          "optionD": "Copy the answer from the option that looks most complicated",
          "correctOption": "C",
          "subConcept": "Timing and Choice Strategy",
          "explanation": "Objective questions carry equal marks, so a stranded minute buys less than the same minute spent on three reachable questions; an eliminated-then-guessed option can score and can be reversed by substitution later, while option B concedes a mark that costs only a pencil stroke to attempt.",
          "remediationTip": "Set a real personal stopwatch in practice: one minute per first-pass objective question, circle, next."
        },
        {
          "id": "q-em-shs3-strategy-5",
          "quizId": "quiz-shs3-em-strategy",
          "questionText": "Which six-week revision plan is most effective for a WASSCE candidate?",
          "optionA": "Re-teach weak topics from your own error log, then sit timed past papers, then spend the final weeks redoing only recorded errors and drilling tables and formulae",
          "optionB": "Read through the textbook from cover to cover three times without writing",
          "optionC": "Attempt one full past paper every day for six weeks without ever reviewing the markscheme",
          "optionD": "Concentrate only on the two favourite topics until they are fluent",
          "correctOption": "A",
          "subConcept": "Revision Planning",
          "explanation": "The error-log, timed-past-paper, error-redo sequence targets weaknesses under real conditions and consolidates before the exam, which is the plan schemes of work recommend; option C generates activity without repair — a paper never marked against M1/A1 lines teaches the candidate nothing new.",
          "remediationTip": "After every practice paper, write each lost mark next to its topic; that list, not the table of contents, is your revision syllabus."
        }
      ]
    }
  }
];
