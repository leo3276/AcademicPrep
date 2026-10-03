// Ghanaian SHS 1 Core Mathematics Curriculum
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// 17 Comprehensive Topics covering Terms 1, 2, and 3 with Videos, Worked Examples, and Quizzes

import { CurriculumTopic } from './types';
import { SHS1_MATH_QUIZZES } from './curriculumShs1MathQuizzes';

export const SHS1_MATH_TOPICS: CurriculumTopic[] = [
  {
    id: 'shs1-math-t1-sets-venn',
    subjectId: 'math',
    level: 'SHS 1',
    term: 1,
    orderIndex: 1,
    title: "Sets, Set Operations & 3-Set Venn Diagrams",
    description: "Universal sets, subsets, complements, De Morgan’s laws, and solving real-world word problems using three-set Venn diagrams.",
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=tyDN4pXkYCY',
    youtubeId: 'tyDN4pXkYCY',
    keyNotes: `• Definition & Notation:
  - Universal set (U or ξ), empty set (∅ or {}).
  - Subset (A ⊆ B), proper subset (A ⊂ B). Number of subsets = 2ⁿ.
• Set Operations:
  - Union (A ∪ B): Elements in A or B or both.
  - Intersection (A ∩ B): Elements common to both A and B.
  - Complement (A'): Elements in ξ not in A.
  - De Morgan's Laws: (A ∪ B)' = A' ∩ B' and (A ∩ B)' = A' ∪ B'.
• Three-Set Venn Diagrams (WASSCE Core Requirement):
  - n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C).
  - Always populate the triple intersection n(A ∩ B ∩ C) first when solving with unknown variables.`,
    detailedNotes: {
      "introduction": "Set theory is the universal language of modern mathematics and computational logic. At the SHS level, students transition from simple two-set listings to formal proofs involving De Morgan laws and 3-set Venn diagram surveys.",
      "realWorldContext": "Market surveys at Makola and Kejetia use 3-set models to categorize traders selling foodstuffs, textiles, or electronics, identifying overlapping businesses and independent vendors.",
      "objectives": [
            "Apply set notation and De Morgan laws to simplify set expressions",
            "Model practical survey scenarios into three-set Venn diagrams",
            "Solve for unknown variables using the three-set inclusion-exclusion formula",
            "Identify disjoint, intersecting, and complement regions accurately"
      ],
      "sections": [
            {
                  "title": "Three-Set Venn Diagram Formulation",
                  "content": "In WAEC examinations, 3-set problems involve surveys of students, markets, or communities. Define unknown regions from the innermost intersection outwards: let x = n(A ∩ B ∩ C). Then find regions containing only two sets by subtracting x.",
                  "bulletPoints": [
                        "Draw a large, clear rectangle for the Universal set ξ.",
                        "Intersect 3 circles labeled A, B, and C.",
                        "Label the triple intersection x immediately.",
                        "Subtract x from pairwise intersections before writing in dual regions."
                  ],
                  "keyTakeaway": "Never add raw set numbers without subtracting overlapping intersections.",
                  "realWorldExample": "A survey of 100 Kumasi drivers reveals 50 carry fire extinguishers, 40 carry spare tyres, and 30 carry first aid kits. Knowing overlaps ensures legal road safety compliance."
            }
      ],
      "wassceExamTips": [
            "Always draw the Venn diagram with a ruler and compass or neat freehand circles; WAEC awards B1 marks for diagram accuracy.",
            "State the formula n(A ∪ B ∪ C) clearly before substituting numbers to secure method (M1) marks.",
            "Never write {∅} for empty set; write either ∅ or {} alone."
      ],
      "commonMistakes": [
            "Writing elements directly into dual intersections without subtracting the triple intersection x.",
            "Confusing the symbol ⊂ (proper subset) with ⊆ (subset).",
            "Forgetting to account for the complement region (elements outside all three circles)."
      ],
      "summaryChecklist": [
            "Can I calculate the total number of subsets using 2ⁿ?",
            "Can I verify De Morgan’s laws using Venn diagrams?",
            "Can I set up an algebraic equation for a 3-set survey and solve for x?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t1-sets-venn-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "In a class of 50 SHS 1 students, 30 study Biology (B), 25 study Chemistry (C), and 22 study Physics (P). 14 study B and C, 12 study B and P, and 11 study C and P. If 5 students study all three subjects, find: (i) the number of students who study none of the subjects; (ii) the number who study Biology only.",
            "stepByStepSolution": [
                  "Step 1: Identify given parameters:\nξ = 50, n(B) = 30, n(C) = 25, n(P) = 22.\nn(B ∩ C) = 14, n(B ∩ P) = 12, n(C ∩ P) = 11, n(B ∩ C ∩ P) = 5.",
                  "Step 2: Calculate two-subject exclusive regions:\nOnly B & C = 14 - 5 = 9\nOnly B & P = 12 - 5 = 7\nOnly C & P = 11 - 5 = 6 [M1 for subtraction]",
                  "Step 3: Calculate single-subject exclusive regions:\nOnly B = 30 - (9 + 7 + 5) = 30 - 21 = 9 [A1]\nOnly C = 25 - (9 + 6 + 5) = 25 - 20 = 5\nOnly P = 22 - (7 + 6 + 5) = 22 - 18 = 4",
                  "Step 4: Sum all regions to find those taking at least one subject:\nn(B ∪ C ∪ P) = 9 + 5 + 4 + 9 + 7 + 6 + 5 = 45 [M1]",
                  "Step 5: Number who study none:\nn(B ∪ C ∪ P)' = 50 - 45 = 5 students [A1]"
            ],
            "keyTakeaway": "Always construct the full Venn diagram to cross-check arithmetic before submitting your answer."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t1-sets-venn']
  },

  {
    id: 'shs1-math-t1-real-numbers-surds',
    subjectId: 'math',
    level: 'SHS 1',
    term: 1,
    orderIndex: 2,
    title: "Real Number System, Surds & Standard Form",
    description: "Rational vs irrational numbers, simplifying surds, rationalizing binomial surds, and scientific notation calculations.",
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=0k3P4U_0Jj0',
    youtubeId: '0k3P4U_0Jj0',
    keyNotes: `• Real Numbers (ℝ):
  - Natural (ℕ) ⊂ Integers (ℤ) ⊂ Rational (ℚ) ⊂ Real (ℝ).
  - Rational numbers can be written as a/b (b ≠ 0). Irrational numbers (like √2, π, √7) cannot.
• Surds:
  - Definition: Roots of rational numbers whose values are irrational.
  - Rules: √(ab) = √a × √b ; √(a/b) = √a / √b.
  - Addition/Subtraction: Only like surds can be combined: 3√2 + 5√2 = 8√2.
• Rationalization of Surds:
  - Monomial denominator: a/√b × (√b/√b) = a√b / b.
  - Binomial conjugate denominator: 1 / (√a + √b) × (√a - √b) / (√a - √b) = (√a - √b) / (a - b).
• Standard Form:
  - Form A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.`,
    detailedNotes: {
      "introduction": "Surds arise whenever roots cannot be simplified to terminating or repeating decimals. Engineering and survey designs in Ghana rely on exact surd expressions rather than rounded approximations.",
      "realWorldContext": "Civil engineers constructing the Pokuase Interchange calculate hypotenuses of ramps using exact surd values to prevent cumulative rounding errors across spans.",
      "objectives": [
            "Distinguish clearly between rational and irrational numbers",
            "Simplify radicals by extracting perfect square factors",
            "Rationalize monomial and binomial denominators using conjugates",
            "Perform scientific notation computations with significant figures"
      ],
      "sections": [
            {
                  "title": "Conjugate Binomial Surds",
                  "content": "The conjugate of (a + √b) is (a - √b). Using the algebraic identity (x + y)(x - y) = x² - y², multiplying a surd by its conjugate eliminates all square roots from the denominator.",
                  "bulletPoints": [
                        "Conjugate of (3 + √5) is (3 - √5).",
                        "Conjugate of (2√3 - 5) is (2√3 + 5).",
                        "Always multiply both numerator and denominator by the conjugate."
                  ],
                  "keyTakeaway": "Multiplying by the conjugate creates the difference of two squares, clearing all radicals from the denominator."
            }
      ],
      "wassceExamTips": [
            "Express your final answer in the exact form requested (e.g. a + b√c where a and b are rational).",
            "Show all factorization steps under the radical; do not jump straight to the decimal on your calculator.",
            "For standard form, ensure 1 ≤ A < 10 (e.g. write 4.5 × 10³, not 45 × 10²)."
      ],
      "commonMistakes": [
            "Writing √(a + b) = √a + √b (this is completely false!).",
            "Leaving a radical in the denominator of a final answer.",
            "Errors in signs when multiplying binomial surds."
      ],
      "summaryChecklist": [
            "Can I reduce √72 into 6√2?",
            "Can I find the conjugate of (4 - 3√2)?",
            "Can I rationalize (2 + √3) / (2 - √3)?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t1-real-numbers-surds-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Simplify (3 + √2) / (3 - √2), giving your answer in the form a + b√2 where a and b are rational numbers.",
            "stepByStepSolution": [
                  "Step 1: Identify the conjugate of the denominator (3 - √2), which is (3 + √2).",
                  "Step 2: Multiply numerator and denominator by the conjugate:\n[(3 + √2)(3 + √2)] / [(3 - √2)(3 + √2)] [M1]",
                  "Step 3: Expand the numerator:\n(3 + √2)² = 3² + 2(3)(√2) + (√2)² = 9 + 6√2 + 2 = 11 + 6√2 [M1]",
                  "Step 4: Expand the denominator using difference of squares:\n3² - (√2)² = 9 - 2 = 7 [A1]",
                  "Step 5: Write in required form a + b√2:\n(11 + 6√2) / 7 = 11/7 + (6/7)√2 [A1]"
            ],
            "keyTakeaway": "Ensure a and b are written separately as fractions if asked in the form a + b√c."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t1-real-numbers-surds']
  },

  {
    id: 'shs1-math-t1-indices-logarithms',
    subjectId: 'math',
    level: 'SHS 1',
    term: 1,
    orderIndex: 3,
    title: "Indices & Logarithms",
    description: "Laws of indices, fractional and negative exponents, exponential equations, and fundamental properties of logarithms.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=ZZGIpA_4aVs',
    youtubeId: 'ZZGIpA_4aVs',
    keyNotes: `• Laws of Indices:
  - aᵐ × aⁿ = aᵐ⁺ⁿ
  - aᵐ ÷ aⁿ = aᵐ⁻ⁿ
  - (aᵐ)ⁿ = aᵐⁿ
  - a⁰ = 1 (a ≠ 0)
  - a⁻ⁿ = 1 / aⁿ
  - a^(m/n) = ⁿ√(aᵐ)
• Exponential Equations:
  - If aˣ = aʸ, then x = y (for a > 0, a ≠ 1).
  - If bases are unequal, express both sides in terms of a common prime base (2, 3, 5, etc.) or take logs.
• Laws of Logarithms (Base b):
  - log_b(xy) = log_b(x) + log_b(y)
  - log_b(x/y) = log_b(x) - log_b(y)
  - log_b(xᵏ) = k · log_b(x)
  - log_b(b) = 1 ; log_b(1) = 0
  - Change of Base: log_b(a) = log_c(a) / log_c(b).`,
    detailedNotes: {
      "introduction": "Indices and logarithms are inverse mathematical operations essential for dealing with exponential growth, radioactive decay, and compound interest models.",
      "realWorldContext": "The Bank of Ghana and commercial banks use logarithmic formulas to determine the doubling time of mutual funds and Treasury bills under compound interest.",
      "objectives": [
            "Apply the six core laws of indices to simplify complex algebraic fractions",
            "Solve exponential equations by equating bases or substitution",
            "Manipulate logarithmic expressions using product, quotient, and power rules",
            "Solve logarithmic equations and reject invalid extraneous roots"
      ],
      "sections": [
            {
                  "title": "Solving Indicial Equations by Substitution",
                  "content": "Equations of the form a^(2x) + b · aˣ + c = 0 can be converted into quadratic equations by substituting y = aˣ, ensuring y > 0.",
                  "bulletPoints": [
                        "Recognize that 2^(2x) = (2ˣ)².",
                        "Let y = 2ˣ, rewriting equation as y² + by + c = 0.",
                        "Solve for y, then back-substitute to find x.",
                        "Discard any negative values of y since aˣ cannot be negative for positive base a."
                  ],
                  "keyTakeaway": "Always remember to back-substitute to solve for the original variable x, not just y."
            }
      ],
      "wassceExamTips": [
            "When evaluating log expressions without tables, express numbers in terms of prime factors whose logs are given.",
            "Remember that the argument of a logarithm must be strictly positive (log(x) is undefined for x ≤ 0).",
            "Write out index laws explicitly to gain method marks."
      ],
      "commonMistakes": [
            "Assuming log(x + y) = log(x) + log(y) (which is completely invalid!).",
            "Forgetting that a^(1/2) means √a, not a / 2.",
            "Accepting negative roots for exponential terms like 3ˣ = -9."
      ],
      "summaryChecklist": [
            "Can I convert 27^(2/3) to 9 without a calculator?",
            "Can I solve 2^(2x+1) - 9(2ˣ) + 4 = 0?",
            "Can I expand log(a²b/c³) using logarithmic laws?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t1-indices-logarithms-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Solve for x: 9ˣ - 4(3ˣ) + 3 = 0.",
            "stepByStepSolution": [
                  "Step 1: Rewrite 9ˣ in base 3:\n9ˣ = (3²)ˣ = (3ˣ)² [M1]",
                  "Step 2: Let y = 3ˣ. Then equation becomes:\ny² - 4y + 3 = 0 [M1]",
                  "Step 3: Factorize the quadratic equation:\n(y - 1)(y - 3) = 0 => y = 1 or y = 3 [A1]",
                  "Step 4: Back-substitute y = 3ˣ:\nCase 1: 3ˣ = 1 => 3ˣ = 3⁰ => x = 0\nCase 2: 3ˣ = 3 => 3ˣ = 3¹ => x = 1 [M1]",
                  "Step 5: State the solution set:\nx = 0 or x = 1 [A1]"
            ],
            "keyTakeaway": "Do not stop at y = 1, 3. The question asked for x!"
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t1-indices-logarithms']
  },

  {
    id: 'shs1-math-t1-algebra-factorization',
    subjectId: 'math',
    level: 'SHS 1',
    term: 1,
    orderIndex: 4,
    title: "Algebraic Expressions, Expansion & Factorization",
    description: "Expanding binomials and trinomials, factorization by grouping, difference of two squares, and quadratic trinomial factorization.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=N6J0WbO63eU',
    youtubeId: 'N6J0WbO63eU',
    keyNotes: `• Algebraic Expansion:
  - Distributive law: a(b + c) = ab + ac.
  - Binomial expansion: (a + b)(c + d) = ac + ad + bc + bd.
  - Perfect squares: (a + b)² = a² + 2ab + b² ; (a - b)² = a² - 2ab + b².
• Factorization Techniques:
  - Common factor: 6x²y - 9xy² = 3xy(2x - 3y).
  - Grouping (4 terms): ax + ay + bx + by = a(x + y) + b(x + y) = (a + b)(x + y).
  - Difference of two squares: a² - b² = (a + b)(a - b).
  - Quadratic trinomials ax² + bx + c: Find two factors of ac that sum to b.`,
    detailedNotes: {
      "introduction": "Algebraic manipulation is the foundational building block of all senior high mathematics. Mastery of expansion and factoring allows students to solve equations, analyze functions, and simplify complex fractions effortlessly.",
      "realWorldContext": "Quantity surveyors in Accra estimating paving blocks use algebraic expressions to express total border area and tile requirements as a function of room dimensions.",
      "objectives": [
            "Expand products of binomials and trinomials systematically",
            "Factorize four-term algebraic expressions by grouping terms",
            "Recognize and factor difference of two squares and perfect squares",
            "Factorize quadratic expressions ax² + bx + c where a ≠ 1"
      ],
      "sections": [
            {
                  "title": "Factoring Quadratic Trinomials ax² + bx + c",
                  "content": "To factorize when a ≠ 1: multiply a and c to find the product ac. Identify two integers p and q whose product is ac and whose sum is b. Split the middle term bx into px + qx, then factorize by grouping.",
                  "bulletPoints": [
                        "Compute product = a × c and sum = b.",
                        "List factor pairs of ac and find the pair summing to b.",
                        "Replace bx with the two terms.",
                        "Factor by grouping the first two and last two terms."
                  ],
                  "keyTakeaway": "Never guess factors; use the product-sum method methodically."
            }
      ],
      "wassceExamTips": [
            "Watch negative signs carefully when expanding (a - b)². The middle term is always -2ab, but the last term is +b².",
            "In difference of two squares questions, check if terms can be factored further (e.g. x⁴ - y⁴ = (x² + y²)(x + y)(x - y)).",
            "WAEC awards M1 for correctly splitting the middle term."
      ],
      "commonMistakes": [
            "Writing (a + b)² = a² + b² (omitting the 2ab middle term).",
            "Missing negative sign distribution when factoring by grouping: e.g. -2(x - 3) = -2x + 6.",
            "Leaving common numerical factors unfactored in the final expression."
      ],
      "summaryChecklist": [
            "Can I expand (2x - 5)(3x + 4)?",
            "Can I factorize 4a² - 25b²?",
            "Can I factorize 6x² - 11x - 10?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t1-algebra-factorization-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Factorize completely: 6x² - 7x - 3.",
            "stepByStepSolution": [
                  "Step 1: Identify coefficients: a = 6, b = -7, c = -3.",
                  "Step 2: Find product ac = 6 × (-3) = -18, and sum b = -7.",
                  "Step 3: Two numbers that multiply to -18 and add to -7 are -9 and +2. [M1]",
                  "Step 4: Rewrite the middle term:\n6x² - 9x + 2x - 3 [M1]",
                  "Step 5: Factor by grouping:\n3x(2x - 3) + 1(2x - 3) [M1]",
                  "Step 6: Factor out the common binomial:\n(2x - 3)(3x + 1) [A1]"
            ],
            "keyTakeaway": "Check your answer by expanding (2x - 3)(3x + 1) to ensure you get back 6x² - 7x - 3."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t1-algebra-factorization']
  },

  {
    id: 'shs1-math-t1-algebraic-fractions',
    subjectId: 'math',
    level: 'SHS 1',
    term: 1,
    orderIndex: 5,
    title: "Algebraic Fractions & Undefined Fractions",
    description: "Simplifying algebraic fractions, condition for undefined fractions, and operations (+, -, ×, ÷) on rational expressions.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=q6g4rN9r4F8',
    youtubeId: 'q6g4rN9r4F8',
    keyNotes: `• Condition for Undefined Fractions:
  - An algebraic fraction P(x) / Q(x) is undefined when its denominator equals zero: Q(x) = 0.
• Simplification:
  - Factorize numerator and denominator completely.
  - Cancel only common factors (never individual terms!).
• Addition & Subtraction:
  - Find the Lowest Common Denominator (LCD).
  - Express each fraction with the LCD, combine numerators, and simplify.
• Multiplication & Division:
  - Factorize all polynomials first.
  - For division, invert the divisor fraction and multiply.
  - Cancel common factors across numerators and denominators.`,
    detailedNotes: {
      "introduction": "Algebraic fractions (rational expressions) extend basic arithmetic of fractions to polynomials. Finding values for which a fraction is undefined is a regular WASSCE Section A question.",
      "realWorldContext": "Chemical batch mixing models in Ghanaian pharmaceutical companies use rational expressions to determine reactant concentrations; zero in the denominator represents an impossible, dangerous saturation state.",
      "objectives": [
            "Determine the values of variables for which a fraction is undefined",
            "Simplify rational expressions by factoring and cancelling common binomial terms",
            "Add and subtract algebraic fractions with binomial denominators",
            "Multiply and divide complex rational expressions"
      ],
      "sections": [
            {
                  "title": "Undefined Fractions & Zero Denominators",
                  "content": "A fraction has no mathematical meaning when dividing by zero. To find the values of x for which P(x)/Q(x) is undefined or not defined, set the denominator Q(x) = 0 and solve for x.",
                  "bulletPoints": [
                        "Ignore the numerator completely when finding undefined values.",
                        "Set Q(x) = 0.",
                        "If Q(x) is quadratic, factorize it to find both values.",
                        "Clearly state both roots as the values for which the fraction is undefined."
                  ],
                  "keyTakeaway": "Division by zero is undefined in mathematics; set denominator to 0."
            }
      ],
      "wassceExamTips": [
            "Never cancel across plus or minus signs (e.g. (x + 2)/(x + 3) does NOT equal 2/3!). Factorize first.",
            "When finding undefined values, do not simplify the fraction beforehand as cancelled factors still cause division by zero in the original expression.",
            "Use brackets carefully when subtracting numerators: -(x - 4) becomes -x + 4."
      ],
      "commonMistakes": [
            "Cancelling individual x terms while connected to additions or subtractions.",
            "Setting the numerator to zero instead of the denominator when finding undefined values.",
            "Sign errors when distributing minus signs across numerators during LCD subtraction."
      ],
      "summaryChecklist": [
            "Can I find the values of x for which (2x + 1)/(x² - 9) is undefined?",
            "Can I simplify (x² - 4)/(x² + 5x + 6)?",
            "Can I subtract 3/(x + 1) - 2/(x - 2)?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t1-algebraic-fractions-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Find the values of x for which the fraction (3x - 1) / (2x² - 5x - 3) is undefined.",
            "stepByStepSolution": [
                  "Step 1: Set the denominator equal to 0:\n2x² - 5x - 3 = 0 [M1]",
                  "Step 2: Factorize the quadratic denominator:\nProduct ac = 2 × (-3) = -6; Sum b = -5.\nFactors: -6 and +1.\n2x² - 6x + x - 3 = 0\n2x(x - 3) + 1(x - 3) = 0 [M1]",
                  "Step 3: Group factors:\n(2x + 1)(x - 3) = 0 [A1]",
                  "Step 4: Solve for x:\n2x + 1 = 0 => x = -1/2\nx - 3 = 0 => x = 3 [A1]",
                  "Step 5: Conclusion: The fraction is undefined when x = -1/2 or x = 3."
            ],
            "keyTakeaway": "Notice the numerator (3x - 1) plays zero role in determining undefined values."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t1-algebraic-fractions']
  },

  {
    id: 'shs1-math-t1-linear-equations-fractions',
    subjectId: 'math',
    level: 'SHS 1',
    term: 1,
    orderIndex: 6,
    title: "Linear Equations in One Variable (Fractional Equations)",
    description: "Techniques for solving multi-step linear equations, clearing algebraic fractions using LCM, and solving word problems.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=bAerID24QJ8',
    youtubeId: 'bAerID24QJ8',
    keyNotes: `• Linear Equations Strategy:
  - Step 1: Find the LCM of all denominators across the entire equation.
  - Step 2: Multiply every single term on both sides by this LCM to eliminate all fractions.
  - Step 3: Expand brackets carefully, watching out for negative signs before parentheses.
  - Step 4: Collect all terms containing the variable on one side and constant terms on the other side.
  - Step 5: Divide by the coefficient to isolate the variable.
• Word Problems Formulation:
  - Define the unknown variable explicitly: "Let x be the age of Kwaku".
  - Translate statements into an algebraic equation.
  - Solve and state the final answer with appropriate real-world units (GH₵, kg, years).`,
    detailedNotes: {
      "introduction": "Linear equations represent relationships where the highest power of the variable is 1. They form the basis of mathematical modeling across commerce, science, and everyday life.",
      "realWorldContext": "Susu collection managers and mobile money merchants calculate expected returns and commissions across multiple transactions using linear equation models.",
      "objectives": [
            "Clear fractional coefficients by multiplying equations by the lowest common multiple",
            "Solve multi-bracket linear equations without algebraic sign errors",
            "Translate practical Ghanaian real-world word problems into linear equations",
            "Verify the validity of solutions by direct substitution"
      ],
      "sections": [
            {
                  "title": "Clearing Denominators Using LCM",
                  "content": "The most reliable method to solve fractional equations is to multiply every term—both fractions and whole numbers—by the LCM of all denominators. This instantly converts the problem into an integer linear equation.",
                  "bulletPoints": [
                        "Identify all denominators.",
                        "Calculate their LCM.",
                        "Multiply every term on left and right sides by LCM.",
                        "Simplify each term before expanding brackets."
                  ],
                  "keyTakeaway": "Every term must be multiplied by the LCM, not just the fractions."
            }
      ],
      "wassceExamTips": [
            "Do not forget to multiply solitary integer constants by the LCM (e.g. if the equation has + 2, multiply 2 by LCM as well).",
            "Place brackets around numerators when clearing fractions: e.g. 12 × (2x - 1)/3 = 4(2x - 1).",
            "Check your final answer by substituting back into the original equation."
      ],
      "commonMistakes": [
            "Multiplying only the fractions by the LCM while forgetting whole number terms.",
            "Sign errors when expanding negative brackets: -3(x - 2) is -3x + 6, not -3x - 6.",
            "In word problems, failing to state units in the final conclusion."
      ],
      "summaryChecklist": [
            "Can I find the LCM of denominators 3, 4, and 6?",
            "Can I solve (x - 2)/3 - (x + 1)/4 = 1?",
            "Can I formulate and solve an age problem in algebra?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t1-linear-equations-fractions-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Solve the equation: (2x - 1) / 3 - (x + 2) / 4 = 1/2.",
            "stepByStepSolution": [
                  "Step 1: Find the LCM of denominators 3, 4, and 2, which is 12.",
                  "Step 2: Multiply every term by 12:\n12 × [(2x - 1) / 3] - 12 × [(x + 2) / 4] = 12 × [1/2] [M1]",
                  "Step 3: Simplify each fraction:\n4(2x - 1) - 3(x + 2) = 6 [M1]",
                  "Step 4: Expand the brackets:\n8x - 4 - 3x - 6 = 6 [A1]",
                  "Step 5: Collect like terms:\n5x - 10 = 6\n5x = 16 [M1]",
                  "Step 6: Solve for x:\nx = 16/5 or 3.2 [A1]"
            ],
            "keyTakeaway": "Take care with the minus sign in front of the second fraction: -3(x + 2) produces -6."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t1-linear-equations-fractions']
  },

  {
    id: 'shs1-math-t2-linear-inequalities',
    subjectId: 'math',
    level: 'SHS 1',
    term: 2,
    orderIndex: 7,
    title: "Linear Inequalities in One Variable & Number Line",
    description: "Solving linear inequalities, the sign reversal rule, combined inequalities, and graphing solution sets on the real number line.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=3M5N-3N9rZk',
    youtubeId: '3M5N-3N9rZk',
    keyNotes: `• Inequality Symbols:
  - < (strictly less than), ≤ (less than or equal to).
  - > (strictly greater than), ≥ (greater than or equal to).
• Fundamental Reversal Rule:
  - When multiplying or dividing both sides by a NEGATIVE number, the inequality sign MUST reverse direction!
  - Example: -4x ≥ 12 => x ≤ -3.
• Compound Inequalities:
  - Form: a < bx + c ≤ d.
  - Split into two simultaneous inequalities: a < bx + c AND bx + c ≤ d, or solve simultaneously by performing operations on all three parts.
• Number Line Representation:
  - Open circle (○) for strict inequalities (< or >).
  - Solid closed circle (●) for inclusive inequalities (≤ or ≥).
  - Arrow indicates direction of values.`,
    detailedNotes: {
      "introduction": "Inequalities specify constraints, thresholds, and tolerance limits rather than exact values. They are vital for budgeting, engineering tolerances, and statistical quality control.",
      "realWorldContext": "Ghana National Petroleum Authority sets fuel price ceiling bands using compound inequalities to ensure fair retail pricing while preventing consumer exploitation.",
      "objectives": [
            "Solve single-step and multi-step linear inequalities",
            "Apply the sign reversal rule correctly when dividing by negative numbers",
            "Solve compound inequalities and express solution sets in interval and set-builder notation",
            "Graph inequality solution sets on a real number line with proper circle conventions"
      ],
      "sections": [
            {
                  "title": "The Sign Reversal Principle",
                  "content": "Consider 4 > 2. If we multiply both sides by -1, we get -4 and -2. Clearly, -4 is LESS than -2 (-4 < -2). Hence, multiplying or dividing by a negative number inverts the order relation.",
                  "bulletPoints": [
                        "Check the coefficient of x before dividing.",
                        "If negative, flip the symbol immediately (< becomes >, ≥ becomes ≤).",
                        "If positive, the inequality symbol stays identical."
                  ],
                  "keyTakeaway": "Always reverse the inequality symbol when dividing or multiplying by a negative number."
            }
      ],
      "wassceExamTips": [
            "When graphing on a number line, ensure circles are clearly open (○) or shaded (●). WAEC deducts B1 marks for ambiguous circles.",
            "If asked for \"the smallest integer satisfying...\", list values to find the exact boundary integer.",
            "Use a ruler to draw neat number lines with evenly spaced tick marks."
      ],
      "commonMistakes": [
            "Forgetting to reverse the inequality sign when dividing by a negative number.",
            "Using solid dots for strict inequalities (<, >).",
            "Confusing the directions of < and > on negative coordinates."
      ],
      "summaryChecklist": [
            "Can I solve -3x + 5 ≤ 14?",
            "Can I solve -2 < 3x + 1 ≤ 10?",
            "Can I draw the solution set on a number line accurately?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t2-linear-inequalities-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Find the truth set of the inequality: (3x - 1) / 4 - (2x + 3) / 3 ≥ 1/6, and illustrate your answer on a number line.",
            "stepByStepSolution": [
                  "Step 1: Multiply through by the LCM of 4, 3, and 6, which is 12:\n12 × [(3x - 1)/4] - 12 × [(2x + 3)/3] ≥ 12 × [1/6] [M1]",
                  "Step 2: Simplify:\n3(3x - 1) - 4(2x + 3) ≥ 2 [M1]",
                  "Step 3: Expand:\n9x - 3 - 8x - 12 ≥ 2\nx - 15 ≥ 2 [A1]",
                  "Step 4: Solve for x:\nx ≥ 17 [A1]",
                  "Step 5: Write the truth set:\n{x : x ≥ 17, x ∈ ℝ}\nNumber line: Draw a real line, place a solid circle (●) at 17, with an arrow pointing right."
            ],
            "keyTakeaway": "Always express the truth set in formal notation if asked: {x : condition}."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t2-linear-inequalities']
  },

  {
    id: 'shs1-math-t2-simultaneous-equations',
    subjectId: 'math',
    level: 'SHS 1',
    term: 2,
    orderIndex: 8,
    title: "Simultaneous Linear Equations",
    description: "Elimination method, substitution method, graphical intersection method, and practical commercial word problems.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=bokGYeXG_lY',
    youtubeId: 'bokGYeXG_lY',
    keyNotes: `• Methods of Solution:
  - Elimination Method: Multiply equations by constants so coefficients of one variable match (or are opposites), then add or subtract equations.
  - Substitution Method: Make one variable the subject from one equation and substitute into the second equation.
  - Graphical Method: Plot both straight lines; the point of intersection (x, y) gives the unique solution.
• Word Problems:
  - Define two variables: Let x = price of item 1, y = price of item 2.
  - Form two independent linear equations from the question.
  - Solve simultaneously and verify in both original conditions.`,
    detailedNotes: {
      "introduction": "Simultaneous linear equations involve finding the common values that satisfy two or more independent linear constraints at the same time.",
      "realWorldContext": "A bakery in Takoradi producing loaves of bread and meat pies determines individual ingredient costs by tracking daily flour and butter purchases across two distinct batch days.",
      "objectives": [
            "Solve 2×2 systems of linear equations using the elimination method",
            "Solve systems using the substitution method efficiently",
            "Interpret simultaneous solutions graphically as intersection points of lines",
            "Formulate and solve real-world commercial word problems"
      ],
      "sections": [
            {
                  "title": "The Elimination Strategy",
                  "content": "Align equations in the standard form ax + by = c. Decide which variable to eliminate. If coefficients have the same sign, subtract the equations. If coefficients have opposite signs, add them.",
                  "bulletPoints": [
                        "Arrange equations: a₁x + b₁y = c₁ and a₂x + b₂y = c₂.",
                        "Multiply to balance coefficients.",
                        "Same sign -> Subtract; Opposite sign -> Add.",
                        "Substitute the found variable back into any original equation."
                  ],
                  "keyTakeaway": "Check both solutions in BOTH original equations to ensure accuracy."
            }
      ],
      "wassceExamTips": [
            "Clearly label your equations as (1) and (2) and write down the operation performed (e.g. \"Subtract (2) from (1)\").",
            "Do not forget to find the second variable; many candidates find x and forget y, losing half the marks.",
            "In word problems, translate prices or quantities into words before concluding."
      ],
      "commonMistakes": [
            "Subtracting equations incorrectly when negative signs are involved.",
            "Substituting the expression back into the same equation it was derived from when using substitution.",
            "Finding only one variable instead of both."
      ],
      "summaryChecklist": [
            "Can I balance coefficients to eliminate x or y?",
            "Can I use substitution when one variable has a coefficient of 1?",
            "Can I translate a two-item shopping problem into simultaneous equations?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t2-simultaneous-equations-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Solve simultaneously: 3x + 2y = 12 and 5x - 3y = 1.",
            "stepByStepSolution": [
                  "Step 1: Label equations:\n(1) 3x + 2y = 12\n(2) 5x - 3y = 1",
                  "Step 2: Multiply (1) by 3 and (2) by 2 to equate coefficients of y:\n(3) 9x + 6y = 36\n(4) 10x - 6y = 2 [M1]",
                  "Step 3: Add equation (3) and (4) since signs of y are opposite:\n19x = 38 [M1]",
                  "Step 4: Solve for x:\nx = 38 / 19 = 2 [A1]",
                  "Step 5: Substitute x = 2 into equation (1):\n3(2) + 2y = 12 => 6 + 2y = 12\n2y = 6 => y = 3 [M1, A1]",
                  "Step 6: Solution: x = 2, y = 3."
            ],
            "keyTakeaway": "Substitute x = 2 and y = 3 into equation (2): 5(2) - 3(3) = 10 - 9 = 1. Correct!"
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t2-simultaneous-equations']
  },

  {
    id: 'shs1-math-t2-ratio-rates-percentages',
    subjectId: 'math',
    level: 'SHS 1',
    term: 2,
    orderIndex: 9,
    title: "Ratio, Proportion, Rates of Work & Commercial Percentages",
    description: "Sharing in ratios, direct and inverse proportion, rates of work (man-hours, water pipes), profit/loss, and discount.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=34l-d21j38A',
    youtubeId: '34l-d21j38A',
    keyNotes: `• Ratios & Sharing:
  - Ratio a : b compares two quantities in the same units.
  - To share quantity Q in ratio a : b : c, total parts = a + b + c. Each share = (part / total) × Q.
• Rates of Work:
  - If a worker completes a job in T hours, the rate of work per hour is 1/T.
  - Combined rate for multiple workers = 1/T₁ + 1/T₂ + ...
• Commercial Percentages:
  - Percentage Profit = (Profit / Cost Price) × 100%.
  - Percentage Loss = (Loss / Cost Price) × 100%.
  - Selling Price = Cost Price × (100 ± %)/100.
  - Marked Price and Discount: Discount = Discount % × Marked Price.`,
    detailedNotes: {
      "introduction": "Ratios, rates, and commercial percentages govern everyday financial decisions, business partnerships, project staffing, and industrial production schedules.",
      "realWorldContext": "Cocoa farming cooperatives in Sefwi Wiawso distribute end-of-year bonuses to member farmers proportionally based on the ratio of bags delivered.",
      "objectives": [
            "Divide quantities into two or three-part ratios",
            "Solve rates of work and combined pipe filling problems",
            "Calculate percentage profit, loss, discount, and mark-up based on cost price",
            "Solve inverse proportion problems involving labor and completion time"
      ],
      "sections": [
            {
                  "title": "Rates of Work Formula",
                  "content": "Work problems rely on rate = work done / time. If Pipe A fills a tank in 4 hours and Pipe B fills it in 6 hours, their combined 1-hour rate is 1/4 + 1/6 = 5/12 of the tank. The tank fills in 12/5 = 2.4 hours.",
                  "bulletPoints": [
                        "Find work done per single unit of time (1/t).",
                        "Add rates for working together.",
                        "Subtract rates if one empties while another fills.",
                        "Invert the combined rate to find total time needed."
                  ],
                  "keyTakeaway": "Combined time is the reciprocal of the sum of individual hourly rates."
            }
      ],
      "wassceExamTips": [
            "Profit and loss percentage is ALWAYS calculated on the Cost Price unless the question specifically states otherwise.",
            "Ensure all quantities in a ratio are converted to the same unit before simplifying.",
            "State currency clearly in Ghana Cedis (GH₵)."
      ],
      "commonMistakes": [
            "Calculating percentage profit using Selling Price as the denominator.",
            "Adding times directly in work problems instead of adding work rates.",
            "Confusing marked price with cost price."
      ],
      "summaryChecklist": [
            "Can I divide GH₵ 24,000 in the ratio 3 : 5 : 4?",
            "Can I calculate the selling price of an item marked up by 25%?",
            "Can I calculate the time taken for two workers to complete a job together?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t2-ratio-rates-percentages-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Kofi can paint a school hall in 6 hours, while Ama can paint the same hall in 4 hours. How long will it take them to paint the hall if they work together at their respective constant rates?",
            "stepByStepSolution": [
                  "Step 1: Determine Kofi's rate of work per hour:\nRate_Kofi = 1/6 of the hall per hour [M1]",
                  "Step 2: Determine Ama's rate of work per hour:\nRate_Ama = 1/4 of the hall per hour [M1]",
                  "Step 3: Combine their work rates:\nCombined Rate = 1/6 + 1/4 = 2/12 + 3/12 = 5/12 of the hall per hour [M1]",
                  "Step 4: Calculate total time needed by taking the reciprocal:\nTotal Time = 1 / (5/12) = 12/5 hours = 2.4 hours [A1]",
                  "Step 5: Convert decimal hours to hours and minutes:\n0.4 × 60 minutes = 24 minutes.\nTotal time = 2 hours 24 minutes. [A1]"
            ],
            "keyTakeaway": "WAEC examiners expect decimal hours to be converted into hours and minutes where appropriate."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t2-ratio-rates-percentages']
  },

  {
    id: 'shs1-math-t2-change-of-subject',
    subjectId: 'math',
    level: 'SHS 1',
    term: 2,
    orderIndex: 10,
    title: "Change of Subject of Formula",
    description: "Transforming algebraic formulas, dealing with brackets, roots, powers, and variables appearing in multiple terms.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=e_Z_gD5h60w',
    youtubeId: 'e_Z_gD5h60w',
    keyNotes: `• Change of Subject Strategy:
  - Step 1: Clear all fractions by multiplying by the LCM of denominators.
  - Step 2: Clear square roots by squaring both sides (or cube roots by cubing).
  - Step 3: Expand all brackets containing the target variable.
  - Step 4: Collect all terms containing the target variable on one side of the equation.
  - Step 5: Factor out the target variable as a common factor.
  - Step 6: Divide by the bracketed coefficient to isolate the target variable completely.`,
    detailedNotes: {
      "introduction": "A formula is an algebraic rule connecting two or more quantities. Changing the subject involves rearranging the formula to express a specific variable in terms of all other quantities.",
      "realWorldContext": "Electricians working with ECG power equations P = V²/R frequently rearrange the formula to find resistance R = V²/P or voltage V = √(PR) for safety checks.",
      "objectives": [
            "Isolate target variables from linear, fractional, and radical formulas",
            "Handle formulas where the target variable appears on both sides of the equation",
            "Apply factoring techniques to isolate variables appearing in multiple terms",
            "Substitute numerical values into rearranged formulas accurately"
      ],
      "sections": [
            {
                  "title": "Target Variable in Multiple Terms",
                  "content": "When the target variable appears more than once, expand all brackets, collect all terms containing that variable on the left side, and move all other terms to the right side. Then factor out the target variable.",
                  "bulletPoints": [
                        "Group all terms with the target variable on one side.",
                        "Factor out the target variable: x(a + b) = c.",
                        "Divide both sides by the cofactor: x = c / (a + b)."
                  ],
                  "keyTakeaway": "Factoring is the key step whenever the target variable appears more than once."
            }
      ],
      "wassceExamTips": [
            "When squaring both sides to remove a root, square the ENTIRE side (e.g. if y = a + √x, you must first isolate √x = y - a before squaring!).",
            "Ensure the target variable is completely isolated on one side and does not appear on the other side.",
            "Never leave fractions within fractions in your final answer."
      ],
      "commonMistakes": [
            "Squaring individual terms instead of isolating the radical first: squaring a + √b is (a + √b)², not a² + b.",
            "Leaving the target variable on both sides of the equation.",
            "Sign errors when moving terms across the equals sign."
      ],
      "summaryChecklist": [
            "Can I make r the subject in V = πr²h?",
            "Can I make x the subject in y = (2x + 1)/(x - 3)?",
            "Can I isolate t in T = 2π√(l/g)?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t2-change-of-subject-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Make x the subject of the formula: y = (3x + 2) / (x - 4).",
            "stepByStepSolution": [
                  "Step 1: Multiply both sides by the denominator (x - 4):\ny(x - 4) = 3x + 2 [M1]",
                  "Step 2: Expand the left-hand side:\nxy - 4y = 3x + 2 [M1]",
                  "Step 3: Collect all terms involving x on the left side and others on the right:\nxy - 3x = 4y + 2 [M1]",
                  "Step 4: Factor out x as the common factor:\nx(y - 3) = 4y + 2 [M1]",
                  "Step 5: Divide by (y - 3) to isolate x:\nx = (4y + 2) / (y - 3) [A1]"
            ],
            "keyTakeaway": "Writing x = (-4y - 2)/(3 - y) is also mathematically equivalent and receives full marks."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t2-change-of-subject']
  },

  {
    id: 'shs1-math-t2-relations-functions',
    subjectId: 'math',
    level: 'SHS 1',
    term: 2,
    orderIndex: 11,
    title: "Relations, Functions & Graphs",
    description: "Types of relations, domain, codomain, range, function notation f(x), composite functions, and drawing linear graphs from tables.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=kvGsIo1TmsM',
    youtubeId: 'kvGsIo1TmsM',
    keyNotes: `• Relations:
  - A relation links elements of a domain to a codomain.
  - Types: One-to-One, One-to-Many, Many-to-One, Many-to-Many.
• Functions:
  - A function is a special relation where every element in the domain maps to EXACTLY ONE element in the codomain.
  - One-to-one and many-to-one relations are functions.
  - One-to-many and many-to-many are NOT functions.
• Function Notation:
  - f: x ↦ 2x + 3 or f(x) = 2x + 3.
  - Domain: Set of input values. Range: Set of actual output values.
• Linear Graphs:
  - Table of values: Substitute domain values of x to find corresponding y values.
  - Plot points (x, y) on Cartesian axes with chosen scale and join with a straight line.`,
    detailedNotes: {
      "introduction": "Functions model cause-and-effect relationships throughout mathematics and computer science. Every input produces a predictable, single output.",
      "realWorldContext": "Ghana Water Company calculates monthly customer water bills as a function of cubic meters consumed using a linear billing tariff formula.",
      "objectives": [
            "Distinguish between relations and functions using arrow diagrams and vertical line tests",
            "Identify domain, codomain, and range from given mappings",
            "Evaluate functions and composite functions f(g(x))",
            "Construct a table of values and plot straight-line graphs on Cartesian axes"
      ],
      "sections": [
            {
                  "title": "Vertical Line Test",
                  "content": "A graph represents a function if and only if no vertical line intersects the curve at more than one point. If a vertical line touches the graph twice, the same input has multiple outputs, so it is not a function.",
                  "bulletPoints": [
                        "Straight lines (non-vertical) are functions.",
                        "Parabolas y = ax² + bx + c are functions.",
                        "Circles x² + y² = r² are NOT functions."
                  ],
                  "keyTakeaway": "Each domain element must map to one and only one codomain element."
            }
      ],
      "wassceExamTips": [
            "Always label your Cartesian axes clearly with variable names (x and y) and origin (0, 0).",
            "Use the exact scale stated in the examination question (e.g. 2 cm to 1 unit on both axes).",
            "Plot points with a sharp pencil using small crosses (×) or circled dots (⊙)."
      ],
      "commonMistakes": [
            "Confusing codomain (all possible target elements) with range (actual mapped elements).",
            "Using an incorrect scale on axes, leading to immediate deduction of scale marks.",
            "Connecting plotted points with freehand curves instead of a straight ruler for linear functions."
      ],
      "summaryChecklist": [
            "Can I determine if a relation is a function?",
            "Can I calculate f(-3) for f(x) = 2x² - 5x + 1?",
            "Can I find the range of f(x) given domain {0, 1, 2, 3}?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t2-relations-functions-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "A function is defined by f(x) = 3x - 5 on the domain D = {-2, -1, 0, 1, 2, 3}. Find: (i) the range of f; (ii) the element whose image is 16.",
            "stepByStepSolution": [
                  "Step 1: Substitute each element of D into f(x):\nf(-2) = 3(-2) - 5 = -11\nf(-1) = 3(-1) - 5 = -8\nf(0) = 3(0) - 5 = -5\nf(1) = 3(1) - 5 = -2\nf(2) = 3(2) - 5 = 1\nf(3) = 3(3) - 5 = 4 [M1 for substitution]",
                  "Step 2: List the range as a set:\nRange = {-11, -8, -5, -2, 1, 4} [A1]",
                  "Step 3: To find the element whose image is 16, set f(x) = 16:\n3x - 5 = 16 [M1]",
                  "Step 4: Solve for x:\n3x = 21 => x = 7 [A1]"
            ],
            "keyTakeaway": "State the range in set curly brackets { }."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t2-relations-functions']
  },

  {
    id: 'shs1-math-t2-variation',
    subjectId: 'math',
    level: 'SHS 1',
    term: 2,
    orderIndex: 12,
    title: "Variation (Direct, Inverse, Joint & Partial)",
    description: "Constant of proportionality, modeling direct, inverse, joint, and partial variation, and solving real-world word problems.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0kH8m9qQpBs',
    youtubeId: '0kH8m9qQpBs',
    keyNotes: `• Types of Variation:
  - Direct Variation: y ∝ x => y = kx (k is the constant of variation).
  - Inverse Variation: y ∝ 1/x => y = k/x or xy = k.
  - Joint Variation: y varies directly as x and inversely as z => y = kx/z.
  - Partial Variation: y is partly constant and partly varies as x => y = a + bx; or partly varies as x and partly as z => y = kx + cz.
• Solution Strategy:
  - Step 1: Write down the mathematical variation statement using ∝.
  - Step 2: Replace ∝ with = k to introduce constant(s).
  - Step 3: Substitute the first set of given values to determine the numerical value of k.
  - Step 4: Write down the complete law connecting the variables.
  - Step 5: Use this law to find unknown values.`,
    detailedNotes: {
      "introduction": "Variation describes how changes in one physical or economic quantity drive proportional changes in another.",
      "realWorldContext": "Electricity tariffs in Ghana often involve partial variation: a fixed monthly standing charge plus a variable charge proportional to kilowatt-hours consumed.",
      "objectives": [
            "Formulate mathematical equations from direct, inverse, and joint variation statements",
            "Calculate the constant of proportionality k from given boundary values",
            "Set up and solve simultaneous equations for partial variation problems",
            "Determine percentage changes in dependent variables when independent variables change"
      ],
      "sections": [
            {
                  "title": "Partial Variation and Simultaneous Equations",
                  "content": "In partial variation, the formula has two parts: y = a + bx. Candidates are given two pairs of values for (x, y), which produce two simultaneous equations to solve for constants a and b.",
                  "bulletPoints": [
                        "Write: y = c + kx.",
                        "Substitute (x₁, y₁) to get Equation (1).",
                        "Substitute (x₂, y₂) to get Equation (2).",
                        "Eliminate c by subtraction to find k, then find c."
                  ],
                  "keyTakeaway": "Partial variation always yields two simultaneous linear equations."
            }
      ],
      "wassceExamTips": [
            "Always state the constant of proportionality clearly (e.g. \"where k is a constant\").",
            "State the formula connecting the variables as a standalone answer before calculating further values.",
            "In inverse variation, remember that if x doubles, y is halved."
      ],
      "commonMistakes": [
            "Writing direct variation as y = k/x or inverse variation as y = kx.",
            "In partial variation, omitting the constant term and treating it as direct variation.",
            "Failing to square or cube terms when a problem says \"varies inversely as the square of x\"."
      ],
      "summaryChecklist": [
            "Can I set up y = k/x² for an inverse-square variation?",
            "Can I solve a partial variation problem y = a + bx?",
            "Can I find the percentage change in y when x increases by 20%?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t2-variation-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "The cost C of catering for an event is partly constant and partly varies as the number of guests N. The cost for 50 guests is GH₵ 1,200 and the cost for 80 guests is GH₵ 1,650. Find: (i) the formula connecting C and N; (ii) the cost of catering for 120 guests.",
            "stepByStepSolution": [
                  "Step 1: Set up the partial variation equation:\nC = a + bN (where a is fixed cost and b is variable cost per guest) [M1]",
                  "Step 2: Substitute given conditions to form two equations:\n(1) 1200 = a + 50b\n(2) 1650 = a + 80b [M1]",
                  "Step 3: Subtract equation (1) from equation (2):\n450 = 30b => b = 450 / 30 = 15 [A1]",
                  "Step 4: Substitute b = 15 into equation (1):\n1200 = a + 50(15) => 1200 = a + 750\na = 1200 - 750 = 450 [A1]",
                  "Step 5: Write the formula connecting C and N:\nC = 450 + 15N [B1]",
                  "Step 6: Calculate cost for N = 120 guests:\nC = 450 + 15(120) = 450 + 1800 = GH₵ 2,250 [A1]"
            ],
            "keyTakeaway": "Ensure currency unit (GH₵) is clearly indicated in your final answer."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t2-variation']
  },

  {
    id: 'shs1-math-t3-plane-geometry-angles',
    subjectId: 'math',
    level: 'SHS 1',
    term: 3,
    orderIndex: 13,
    title: "Plane Geometry I: Angles & Parallel Lines",
    description: "Types of angles, complementary and supplementary angles, vertically opposite angles, and angles on parallel lines (alternate, corresponding, interior).",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Fundamental Angle Theorems:
  - Angles on a straight line add up to 180°.
  - Angles around a point add up to 360°.
  - Vertically opposite angles are equal.
  - Complementary angles add to 90°; Supplementary angles add to 180°.
• Angles on Parallel Lines (cut by a transversal):
  - Corresponding angles are equal (F-shape).
  - Alternate interior angles are equal (Z-shape).
  - Co-interior (consecutive interior) angles are supplementary (add up to 180°, C-shape).
• Auxiliary Lines Strategy:
  - When parallel lines contain bends or vertices, draw an auxiliary parallel line through the vertex to split complex angles into standard alternate/interior angles.`,
    detailedNotes: {
      "introduction": "Euclidean geometry provides the axiomatic framework for understanding physical space, structural balance, and navigation.",
      "realWorldContext": "Architects and roof truss fabricators in Kumasi use parallel line angle properties to calculate timber pitch angles and support rafters for storm resistance.",
      "objectives": [
            "Identify and calculate complementary, supplementary, and adjacent angles",
            "Apply alternate, corresponding, and co-interior angle theorems to parallel line figures",
            "Construct auxiliary parallel lines to solve complex angle puzzles",
            "Provide formal geometric reasons for every step in an angle deduction"
      ],
      "sections": [
            {
                  "title": "The Auxiliary Parallel Line Construction",
                  "content": "When two parallel lines AB and CD are connected by a zigzag line meeting at vertex P, draw a third line through P parallel to AB. This splits the angle at P into two separate angles matching alternate angles above and below.",
                  "bulletPoints": [
                        "Identify the vertex where lines bend.",
                        "Draw a dashed line through this point parallel to the given parallel lines.",
                        "Apply alternate angles theorem independently on top and bottom.",
                        "Sum the two parts to find the total angle."
                  ],
                  "keyTakeaway": "Auxiliary lines turn impossible angle puzzles into simple pairs of alternate angles."
            }
      ],
      "wassceExamTips": [
            "WAEC marking schemes ALWAYS award marks for stating reasons in brackets (e.g. \"[alt. ∠s, AB || CD]\" or \"[adj. ∠s on straight line = 180°]\"). Never write raw numbers without reasons!",
            "Show all working clearly on the examination booklet; do not just write answers on the question paper.",
            "Use the degree symbol (°) on every angle calculation."
      ],
      "commonMistakes": [
            "Assuming lines are parallel just because they look parallel—only use parallel theorems if arrows or statements explicitly state they are parallel.",
            "Confusing alternate angles (which are equal) with co-interior angles (which sum to 180°).",
            "Omitting geometric reasons, losing 50% of the question marks."
      ],
      "summaryChecklist": [
            "Can I state the three parallel line angle rules and their conditions?",
            "Can I draw an auxiliary line to find reflex angles between parallel lines?",
            "Do I consistently write geometric reasons in brackets for WAEC marks?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t3-plane-geometry-angles-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "In a figure, line AB is parallel to line CD. A transversal EF intersects AB at G and CD at H. If angle AGH = (3x + 10)° and angle GHD = (5x - 30)°, find the value of x and the size of angle BGH.",
            "stepByStepSolution": [
                  "Step 1: Identify the relationship between angle AGH and angle GHD.\nSince AB || CD, angle AGH and angle GHD are alternate interior angles. Therefore, they are equal. [M1]",
                  "Step 2: Equate the two expressions:\n3x + 10 = 5x - 30 [M1]",
                  "Step 3: Solve for x:\n10 + 30 = 5x - 3x\n40 = 2x => x = 20° [A1]",
                  "Step 4: Calculate the size of angle AGH:\nangle AGH = 3(20) + 10 = 70°",
                  "Step 5: Find angle BGH:\nAngle AGH and angle BGH lie on a straight line AB, so they are supplementary (sum = 180°).\nangle BGH = 180° - 70° = 110° [M1, A1]"
            ],
            "keyTakeaway": "Always write the reason \"[alt. ∠s, AB || CD]\" and \"[adj. ∠s on straight line]\" to secure both method marks."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t3-plane-geometry-angles']
  },

  {
    id: 'shs1-math-t3-polygons',
    subjectId: 'math',
    level: 'SHS 1',
    term: 3,
    orderIndex: 14,
    title: "Polygons (Interior & Exterior Angles)",
    description: "Properties of convex polygons, sum of interior angles (2n - 4) × 90°, sum of exterior angles = 360°, regular polygons, and angle calculations.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Polygon Definitions & Angle Formulas:
  - Polygon: A closed plane figure bounded by straight line segments.
  - Number of sides = n.
  - Sum of Interior Angles = (n - 2) × 180° or (2n - 4) × 90°.
  - Sum of Exterior Angles = 360° (for ANY convex polygon regardless of number of sides).
• Regular Polygons (all sides and angles equal):
  - Each Exterior Angle = 360° / n.
  - Each Interior Angle = 180° - (Each Exterior Angle) = [(n - 2) × 180°] / n.
  - Interior Angle + Exterior Angle = 180° (at each vertex).
• Common Polygons:
  - Triangle (n=3), Quadrilateral (n=4), Pentagon (n=5), Hexagon (n=6), Octagon (n=8), Decagon (n=10).`,
    detailedNotes: {
      "introduction": "Polygons are two-dimensional geometric figures formed by joining line segments. Understanding their interior and exterior angle relationships is a core requirement of WASSCE Core Mathematics.",
      "realWorldContext": "Kente cloth weavers in Bonwire create intricate geometric patterns utilizing regular hexagonal and octagonal symmetries.",
      "objectives": [
            "Calculate the sum of interior angles for any n-sided polygon",
            "Determine the number of sides of a regular polygon from its interior or exterior angle",
            "Solve for unknown angles in irregular polygons using angle sum theorems",
            "Apply the exterior angle property (sum = 360°) to simplify complex polygon problems"
      ],
      "sections": [
            {
                  "title": "The Exterior Angle Shortcut",
                  "content": "When working with regular polygons, finding the exterior angle first is almost always faster than using the interior angle formula. Since each exterior angle is 360°/n and interior + exterior = 180°, one can quickly find n = 360° / (180° - interior angle).",
                  "bulletPoints": [
                        "Exterior angle = 180° - Interior angle.",
                        "Number of sides n = 360° / Exterior angle.",
                        "Avoids dealing with large fractions in (n - 2) × 180°."
                  ],
                  "keyTakeaway": "Always convert interior angle questions of regular polygons to exterior angles first."
            }
      ],
      "wassceExamTips": [
            "Always check that your calculated number of sides n is a positive integer greater than or equal to 3. If n is a fraction or negative, check your algebra immediately!",
            "In irregular polygons, write the sum of all given angles equal to (n - 2) × 180° before collecting terms.",
            "Remember that an exterior angle is formed by extending ONE side of the polygon."
      ],
      "commonMistakes": [
            "Confusing (n - 2) × 180° with 360° / n.",
            "Assuming sum of exterior angles depends on n (it is ALWAYS 360° for every convex polygon).",
            "Forgetting that interior and exterior angles at a vertex are on a straight line and sum to 180°."
      ],
      "summaryChecklist": [
            "Can I calculate the sum of interior angles of a nonagon (n=9)?",
            "Can I find the number of sides of a regular polygon whose interior angle is 144°?",
            "Can I find unknown angles in a pentagon with angles x, 2x, x+30, 2x-10, and 100°?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t3-polygons-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Each interior angle of a regular polygon is 156°. Find: (i) the size of each exterior angle; (ii) the number of sides of the polygon; (iii) the sum of all interior angles.",
            "stepByStepSolution": [
                  "Step 1: Calculate exterior angle:\nInterior angle + Exterior angle = 180°\nExterior angle = 180° - 156° = 24° [M1, A1]",
                  "Step 2: Calculate number of sides n using sum of exterior angles = 360°:\nn = 360° / Exterior angle = 360° / 24° = 15 sides [M1, A1]",
                  "Step 3: Calculate sum of all interior angles:\nSum = (n - 2) × 180° = (15 - 2) × 180° = 13 × 180° = 2,340° [M1, A1]"
            ],
            "keyTakeaway": "Using the exterior angle shortcut n = 360° / 24° = 15 takes 2 lines, whereas equating 156 = (n-2)×180/n is much longer and prone to algebra errors."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t3-polygons']
  },

  {
    id: 'shs1-math-t3-coordinate-geometry-1',
    subjectId: 'math',
    level: 'SHS 1',
    term: 3,
    orderIndex: 15,
    title: "Coordinate Geometry I: Straight Lines",
    description: "Length of line segment (distance formula), midpoint of two points, gradient (slope) of a straight line, and equation of a straight line (y = mx + c).",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=2TzT3k8V-kE',
    youtubeId: '2TzT3k8V-kE',
    keyNotes: `• Core Formulas for Points A(x₁, y₁) and B(x₂, y₂):
  - Distance Formula: d = √[(x₂ - x₁)² + (y₂ - y₁)²].
  - Midpoint Formula: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).
  - Gradient (Slope) m: m = (y₂ - y₁) / (x₂ - x₁) = Δy / Δx.
• Equation of a Straight Line:
  - Slope-Intercept Form: y = mx + c (where m is gradient, c is y-intercept).
  - Point-Slope Form: y - y₁ = m(x - x₁).
  - General Form: ax + by + c = 0.
• Intercepts:
  - x-intercept: set y = 0 and solve for x.
  - y-intercept: set x = 0 and solve for y.`,
    detailedNotes: {
      "introduction": "Coordinate geometry (analytic geometry) bridges algebra and geometry by representing geometric figures on the Cartesian coordinate plane.",
      "realWorldContext": "Land surveyors in Accra and Kumasi use GPS coordinate geometry (UTM coordinates) to calculate boundary distances and plot registered land cadastral plans.",
      "objectives": [
            "Calculate the distance between two points in exact surd form and to 3 significant figures",
            "Find the coordinates of the midpoint of a line segment",
            "Calculate the gradient of a line and interpret its physical sign (positive, negative, zero, undefined)",
            "Determine the equation of a straight line given two points or a point and gradient"
      ],
      "sections": [
            {
                  "title": "The Point-Slope Equation Form",
                  "content": "The most reliable way to find the equation of a line passing through (x₁, y₁) with gradient m is using y - y₁ = m(x - x₁). This prevents algebraic mistakes when solving for the intercept c.",
                  "bulletPoints": [
                        "Calculate gradient m = (y₂ - y₁) / (x₂ - x₁).",
                        "Pick either given point as (x₁, y₁).",
                        "Substitute into y - y₁ = m(x - x₁).",
                        "Rearrange into the required form (y = mx + c or ax + by + c = 0)."
                  ],
                  "keyTakeaway": "Use y - y₁ = m(x - x₁) directly to find line equations."
            }
      ],
      "wassceExamTips": [
            "Pay meticulous attention to signs when subtracting negative coordinates: e.g. x₂ - x₁ = 3 - (-2) = 5.",
            "Keep gradient in fractional form (e.g. m = -3/4) rather than converting to decimal (-0.75) for easier manipulation.",
            "If the question asks for the equation in the form ax + by + c = 0, ensure all terms are on one side and a, b, c are integers."
      ],
      "commonMistakes": [
            "Flipping the gradient formula to Δx / Δy instead of Δy / Δx.",
            "Sign errors when subtracting negative coordinates in the distance formula.",
            "Mixing coordinates: using (y₂ - y₁) / (x₁ - x₂) with inconsistent ordering."
      ],
      "summaryChecklist": [
            "Can I calculate the distance between (-2, 5) and (4, -3)?",
            "Can I find the midpoint of (6, -8) and (-2, 4)?",
            "Can I find the equation of the line passing through (1, 2) and (3, 8)?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t3-coordinate-geometry-1-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "Find the equation of the line passing through the points P(-2, 3) and Q(4, -1), expressing your answer in the form ax + by + c = 0, where a, b, and c are integers.",
            "stepByStepSolution": [
                  "Step 1: Calculate the gradient m:\nm = (y₂ - y₁) / (x₂ - x₁) = (-1 - 3) / (4 - (-2)) = -4 / (4 + 2) = -4 / 6 = -2/3 [M1, A1]",
                  "Step 2: Use point-slope form with point P(-2, 3):\ny - y₁ = m(x - x₁)\ny - 3 = -2/3 [x - (-2)]\ny - 3 = -2/3 (x + 2) [M1]",
                  "Step 3: Multiply both sides by 3 to clear fractions:\n3(y - 3) = -2(x + 2)\n3y - 9 = -2x - 4 [M1]",
                  "Step 4: Rearrange into general form ax + by + c = 0:\n2x + 3y - 9 + 4 = 0\n2x + 3y - 5 = 0 [A1]"
            ],
            "keyTakeaway": "Ensure a > 0 in ax + by + c = 0, and that all coefficients are integers as requested."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t3-coordinate-geometry-1']
  },

  {
    id: 'shs1-math-t3-mensuration-plane-shapes',
    subjectId: 'math',
    level: 'SHS 1',
    term: 3,
    orderIndex: 16,
    title: "Mensuration I: Perimeter & Area of Plane Shapes",
    description: "Perimeter and area of triangles, parallelograms, trapeziums, circles, sectors, segments, and composite plane figures.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Area Formulas:
  - Triangle: A = ½ × base × height, or A = ½ab sin C, or Hero's formula A = √[s(s - a)(s - b)(s - c)] where s = (a + b + c)/2.
  - Parallelogram: A = base × perpendicular height.
  - Trapezium: A = ½(a + b)h (where a, b are parallel sides and h is perpendicular distance).
  - Rhombus / Kite: A = ½ × d₁ × d₂ (where d₁, d₂ are diagonals).
• Circle Properties:
  - Circumference C = 2πr = πd.
  - Area A = πr².
  - Length of Arc = (θ / 360°) × 2πr.
  - Area of Sector = (θ / 360°) × πr².
  - Area of Segment = Area of Sector - Area of Triangle = (θ / 360°)πr² - ½r² sin θ.
  - Perimeter of a Sector = Arc Length + 2r = [(θ / 360°) × 2πr] + 2r.`,
    detailedNotes: {
      "introduction": "Mensuration deals with the measurement of lengths, perimeters, areas, and volumes of geometric figures.",
      "realWorldContext": "Building contractors in Tema calculating roofing sheets and floor screeding require precise mensuration of trapezoidal and composite floor plans.",
      "objectives": [
            "Calculate areas of standard and composite polygons including trapeziums and rhombuses",
            "Determine arc lengths and sector areas of circles given central angles in degrees",
            "Calculate the area of shaded circular segments",
            "Compute the perimeter of composite figures including circular boundaries"
      ],
      "sections": [
            {
                  "title": "Perimeter of a Sector Caution",
                  "content": "Candidates frequently lose marks on perimeter of sector questions by finding only the curved arc length and forgetting to add the two straight radial boundaries (2r).",
                  "bulletPoints": [
                        "Arc length = (θ/360) × 2πr.",
                        "Total perimeter of sector = Arc length + radius + radius = Arc + 2r.",
                        "For a semicircle, Perimeter = πr + 2r."
                  ],
                  "keyTakeaway": "Always add 2r when asked for the perimeter of any sector."
            }
      ],
      "wassceExamTips": [
            "Use the exact value of π specified in the examination paper (e.g. \"Take π = 22/7\" or \"π = 3.142\"). Do not use your calculator’s internal π button if a specific value is given.",
            "Always include square units (cm², m²) for area and linear units (cm, m) for perimeter.",
            "Split composite figures into distinct simple shapes and sum their areas."
      ],
      "commonMistakes": [
            "Forgetting to add 2r to arc length when asked for the perimeter of a sector or semicircle.",
            "Using slant height instead of perpendicular height in the area of a trapezium or parallelogram.",
            "Confusing diameter with radius when substituting into πr²."
      ],
      "summaryChecklist": [
            "Can I calculate the area of a trapezium with parallel sides 12 cm and 18 cm, and height 8 cm?",
            "Can I find the perimeter of a sector of radius 7 cm subtending 60° at the center?",
            "Can I find the area of a circular segment?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t3-mensuration-plane-shapes-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "A sector of a circle of radius 14 cm subtends an angle of 120° at the centre. Taking π = 22/7, calculate: (i) the length of the arc; (ii) the perimeter of the sector; (iii) the area of the sector.",
            "stepByStepSolution": [
                  "Step 1: Calculate arc length L:\nL = (θ / 360°) × 2πr = (120° / 360°) × 2 × (22/7) × 14\nL = (1/3) × 2 × 22 × 2 = 88/3 = 29.33 cm [M1, A1]",
                  "Step 2: Calculate perimeter of the sector:\nPerimeter = Arc Length + 2r = 29.33 + 2(14) = 29.33 + 28 = 57.33 cm [M1, A1]",
                  "Step 3: Calculate area of the sector:\nArea = (θ / 360°) × πr² = (120° / 360°) × (22/7) × 14 × 14\nArea = (1/3) × 22 × 2 × 14 = (1/3) × 616 = 205.33 cm² [M1, A1]"
            ],
            "keyTakeaway": "Notice Step 2 adds the two radii (28 cm); omitting this is the number one error in WASSCE mensuration."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t3-mensuration-plane-shapes']
  },

  {
    id: 'shs1-math-t3-statistics-frequency-tables',
    subjectId: 'math',
    level: 'SHS 1',
    term: 3,
    orderIndex: 17,
    title: "Statistics I: Data Collection, Presentation & Frequency Tables",
    description: "Discrete and continuous data, tally charts, frequency distribution tables, bar charts, pie charts, and mean, median, mode of ungrouped data.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hYqZ4wLqFk',
    youtubeId: '0hYqZ4wLqFk',
    keyNotes: `• Types of Data:
  - Qualitative (categorical) vs Quantitative (numerical).
  - Discrete (countable values, e.g. number of students) vs Continuous (measurable, e.g. mass, time, height).
• Ungrouped Frequency Distribution:
  - Raw data organized using tally marks into frequencies (f).
• Measures of Central Tendency (Ungrouped):
  - Mean: x̄ = (∑ fx) / (∑ f).
  - Median: The middle value when data is arranged in ascending order. Position = (N + 1)/2.
  - Mode: The value with the highest frequency.
• Statistical Charts:
  - Pie Chart: Sector Angle = (Frequency / Total Frequency) × 360°. Angles must sum to 360°.
  - Bar Chart: Rectangular bars with equal widths and equal spaces between bars.`,
    detailedNotes: {
      "introduction": "Statistics involves collecting, organizing, analyzing, and interpreting numerical data to make informed predictions and evidence-based decisions.",
      "realWorldContext": "Ghana Statistical Service (GSS) compiles national census and consumer price index (CPI) figures using frequency distribution and statistical visualization methods.",
      "objectives": [
            "Distinguish between discrete and continuous variables",
            "Construct tally charts and frequency distribution tables from raw data",
            "Calculate sector angles and construct accurate pie charts using protractor",
            "Calculate mean, median, and mode from ungrouped frequency tables"
      ],
      "sections": [
            {
                  "title": "Pie Chart Construction Protocol",
                  "content": "In WAEC examinations, drawing a pie chart requires: (1) calculating each sector angle to the nearest whole degree; (2) verifying angles sum to exactly 360°; (3) drawing a neat circle with a compass; (4) measuring angles carefully with a protractor; (5) labeling each sector clearly.",
                  "bulletPoints": [
                        "Sector angle = (f / ∑f) × 360°.",
                        "Table of angles must be shown clearly before drawing.",
                        "Label sectors with category names and angles/percentages.",
                        "Use compass and protractor (never freehand!)."
                  ],
                  "keyTakeaway": "Always show the sector angle calculation table before drawing the circle."
            }
      ],
      "wassceExamTips": [
            "Always draw pie charts with a compass and measure angles accurately with a protractor (WAEC allows ±1° tolerance).",
            "In bar charts, leave equal gaps between bars (unlike histograms where bars touch).",
            "Show the ∑fx and ∑f column totals clearly at the foot of your frequency table."
      ],
      "commonMistakes": [
            "Drawing touching bars for discrete bar charts (which confuses bar charts with histograms).",
            "Angle calculations not summing to 360° due to premature rounding.",
            "Confusing the frequency column with the data values when finding the median."
      ],
      "summaryChecklist": [
            "Can I construct a frequency distribution table with an fx column?",
            "Can I calculate sector angles for a pie chart?",
            "Can I find the median from a cumulative frequency column?"
      ]
},
    examples: [
      {
            "id": "shs1-math-t3-statistics-frequency-tables-ex1",
            "title": "WASSCE Core Example 1",
            "problem": "The table below shows the distribution of marks scored by 30 students in a mathematics test:\nMark (x): 2, 3, 4, 5, 6\nFrequency (f): 4, 6, 10, 7, 3\nCalculate: (i) the mode; (ii) the mean mark; (iii) the median mark.",
            "stepByStepSolution": [
                  "Step 1: Identify the mode:\nThe highest frequency is 10, which corresponds to the mark 4.\nMode = 4 marks [B1]",
                  "Step 2: Construct the fx column to calculate the mean:\nMark (x) | Freq (f) | fx\n2        | 4        | 8\n3        | 6        | 18\n4        | 10       | 40\n5        | 7        | 35\n6        | 3        | 18\nTotal: ∑f = 30; ∑fx = 8 + 18 + 40 + 35 + 18 = 119 [M1]",
                  "Step 3: Calculate the mean:\nMean x̄ = (∑fx) / (∑f) = 119 / 30 = 3.97 marks (or 4.0 to 1 d.p.) [A1]",
                  "Step 4: Find the median position:\nMedian position = (N + 1) / 2 = (30 + 1) / 2 = 15.5th position [M1]",
                  "Step 5: Cumulative frequencies: 4, 10, 20, 27, 30.\nThe 15th and 16th values both fall in mark 4.\nMedian = 4 marks [A1]"
            ],
            "keyTakeaway": "Remember mode is the data value (mark = 4), NOT the frequency (10)."
      }
],
    quiz: SHS1_MATH_QUIZZES['shs1-math-t3-statistics-frequency-tables']
  }
];
