// Ghanaian JHS 3 Mathematics Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) BECE Candidate Syllabus
// 14 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS3_MATH_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs3-math-t1-real-numbers-surds",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Real Number System, Standard Form, Indices & Surds",
    "description": "Master rational and irrational numbers, scientific notation (standard form A × 10^n), laws of indices (product, quotient, power, negative, fractional), and basic operations with surds.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=kIT7r3b_i68",
    "youtubeId": "kIT7r3b_i68",
    "keyNotes": "• The Real Number System (ℝ):\n  - Natural Numbers (ℕ) = {1, 2, 3, ...}\n  - Whole Numbers (𝕎) = {0, 1, 2, 3, ...}\n  - Integers (ℤ) = {..., -3, -2, -1, 0, 1, 2, 3, ...}\n  - Rational Numbers (ℚ): Any number that can be expressed as a/b where a, b ∈ ℤ and b ≠ 0 (terminating or recurring decimals).\n  - Irrational Numbers (ℚ'): Numbers that cannot be written as a/b; non-terminating, non-recurring decimals (e.g. √2, √3, π).\n• Standard Form (Scientific Notation):\n  - Form: A × 10^n where 1 ≤ A < 10 and n is an integer.\n  - Large numbers (n > 0): 450,000 = 4.5 × 10^5 (decimal moved 5 places left).\n  - Small numbers (n < 0): 0.00032 = 3.2 × 10^-4 (decimal moved 4 places right).\n• Laws of Indices:\n  1. Multiplication Law: a^m × a^n = a^(m + n)\n  2. Division Law: a^m ÷ a^n = a^(m - n)\n  3. Power Law: (a^m)^n = a^(m × n)\n  4. Zero Index: a^0 = 1 (a ≠ 0)\n  5. Negative Index: a^(-n) = 1 / a^n\n  6. Fractional Index: a^(1/n) = ⁿ√a and a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m)\n• Introduction to Surds:\n  - A surd is an irrational root of a rational number (e.g. √2, √5, √12).\n  - Simplification: √(a × b) = √a × √b (e.g. √75 = √(25 × 3) = 5√3).\n  - Addition/Subtraction: Only like surds can be combined: 3√2 + 5√2 = 8√2; 4√3 - √3 = 3√3.\n  - Multiplication: √a × √a = a; √a × √b = √(ab).",
    "examples": [
      {
        "id": "ex-jhs3math-t1-1",
        "title": "Evaluating Operations in Standard Form (BECE Section B)",
        "problem": "Evaluate (3.6 × 10^5) × (4.0 × 10^-2) ÷ (1.2 × 10^2), leaving your final answer in standard form.",
        "stepByStepSolution": [
          "Step 1: Group numerical coefficients and powers of 10 separately: [(3.6 × 4.0) / 1.2] × [10^(5 + (-2) - 2)] [M1 - Method mark for grouping].",
          "Step 2: Simplify numerical coefficients: 3.6 / 1.2 = 3. Then 3 × 4.0 = 12 [M1 - Arithmetic operation].",
          "Step 3: Combine exponents using index laws: 10^(5 - 2 - 2) = 10^1.",
          "Step 4: Combine parts: 12 × 10^1.",
          "Step 5: Convert into standard form (1 ≤ A < 10): 12 = 1.2 × 10^1. Thus (1.2 × 10^1) × 10^1 = 1.2 × 10^2 [A1 - Accuracy mark]."
        ],
        "keyTakeaway": "In standard form, the leading number A must strictly satisfy 1 ≤ A < 10. 12 × 10^1 is mathematically correct but violates standard form syntax."
      },
      {
        "id": "ex-jhs3math-t1-2",
        "title": "Simplifying Expressions with Indices and Surds",
        "problem": "Simplify: (a) (81/16)^(-3/4)  and  (b) √48 + √12 - √75.",
        "stepByStepSolution": [
          "Step 1 (Part a): Apply negative exponent rule: (81/16)^(-3/4) = (16/81)^(3/4) [B1 - Inverting fraction].",
          "Step 2: Take 4th root first: ⁴√(16/81) = 2/3 [M1 - Evaluating root].",
          "Step 3: Cube the result: (2/3)³ = 8/27 [A1 - Final fraction].",
          "Step 4 (Part b): Break surds into square factors: √48 = √(16 × 3) = 4√3; √12 = √(4 × 3) = 2√3; √75 = √(25 × 3) = 5√3 [M1 - Simplifying each surd].",
          "Step 5: Collect like terms: 4√3 + 2√3 - 5√3 = (4 + 2 - 5)√3 = 1√3 = √3 [A1 - Final exact surd]."
        ],
        "keyTakeaway": "Always factor out the largest perfect square factor when simplifying surds before combining like terms."
      }
    ]
  },
  {
    "id": "jhs3-math-t2-algebra-expansion-factorization",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Algebraic Expressions: Expansion, Factorization & Quadratic Grouping",
    "description": "Expand binomial products (FOIL method), factorize by grouping four terms, factorize the difference of two squares (a² - b²), and factorize quadratic expressions of the form ax² + bx + c.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=b4O6N4tB3rM",
    "youtubeId": "b4O6N4tB3rM",
    "keyNotes": "• Binomial Expansion:\n  - (a + b)(c + d) = a(c + d) + b(c + d) = ac + ad + bc + bd (FOIL: First, Outside, Inside, Last).\n  - Perfect Squares:\n    * (a + b)² = a² + 2ab + b²\n    * (a - b)² = a² - 2ab + b²\n    * Common mistake: (a + b)² ≠ a² + b²!\n• Factorization by Grouping (Four Terms):\n  - Group into pairs that share common factors: ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b).\n  - Note negative signs carefully: ax - ay - bx + by = a(x - y) - b(x - y) = (x - y)(a - b).\n• Difference of Two Squares (DOTS):\n  - Formula: a² - b² = (a - b)(a + b).\n  - Examples:\n    * x² - 49 = x² - 7² = (x - 7)(x + 7)\n    * 4x² - 25y² = (2x)² - (5y)² = (2x - 5y)(2x + 5y)\n    * Numerical evaluation: 85² - 15² = (85 - 15)(85 + 15) = 70 × 100 = 7,000.\n• Factorizing Quadratic Expressions ax² + bx + c:\n  - When a = 1 (x² + bx + c): Find two factors of c whose sum is b.\n    * E.g. x² + 7x + 12: Factors of 12 that add to 7 are +3 and +4 -> (x + 3)(x + 4).\n  - When a ≠ 1 (ax² + bx + c):\n    1. Multiply a × c to get the product (ac).\n    2. Find two factors of (ac) whose sum is b.\n    3. Split the middle term bx into these two terms.\n    4. Factorize the four-term expression by grouping in pairs.",
    "examples": [
      {
        "id": "ex-jhs3math-t2-1",
        "title": "Factorizing Quadratic Expression where a ≠ 1",
        "problem": "Factorize completely: 6x² - 7x - 5.",
        "stepByStepSolution": [
          "Step 1: Identify coefficients: a = 6, b = -7, c = -5. Find product ac = 6 × (-5) = -30 [B1].",
          "Step 2: Find two numbers whose product is -30 and whose sum is -7: The factors are -10 and +3 because (-10) × (+3) = -30 and (-10) + (+3) = -7 [M1].",
          "Step 3: Split the middle term -7x: 6x² - 10x + 3x - 5 [M1].",
          "Step 4: Group into pairs: (6x² - 10x) + (3x - 5) = 2x(3x - 5) + 1(3x - 5) [M1].",
          "Step 5: Factor out common binomial (3x - 5): (3x - 5)(2x + 1) [A1 - Full accuracy]."
        ],
        "keyTakeaway": "Always check your factorization by expanding brackets: (3x - 5)(2x + 1) = 6x² + 3x - 10x - 5 = 6x² - 7x - 5."
      },
      {
        "id": "ex-jhs3math-t2-2",
        "title": "Simplifying Algebraic Fractions using Factorization",
        "problem": "Simplify completely: (2x² - 8) / (x² + 3x + 2).",
        "stepByStepSolution": [
          "Step 1: Factorize the numerator: 2x² - 8 = 2(x² - 4). Recognize x² - 4 as difference of two squares: 2(x - 2)(x + 2) [M1].",
          "Step 2: Factorize the denominator x² + 3x + 2: Factors of 2 that add to 3 are +1 and +2: (x + 1)(x + 2) [M1].",
          "Step 3: Write as single fraction: [2(x - 2)(x + 2)] / [(x + 1)(x + 2)].",
          "Step 4: Cancel common factor (x + 2): 2(x - 2) / (x + 1) [A1].",
          "Step 5: Expand numerator (optional): (2x - 4) / (x + 1)."
        ],
        "keyTakeaway": "Never cancel individual terms across addition signs (e.g. canceling x²)! Factorize completely first, then cancel identical binomial factors."
      }
    ]
  },
  {
    "id": "jhs3-math-t3-linear-equations-inequalities",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Linear Equations, Fractional Equations & Inequalities on Number Lines",
    "description": "Solve multi-step linear equations, equations containing algebraic fractions, word problems involving linear equations, and linear inequalities in one variable with number line graphing.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0X-b4v2C4tE",
    "youtubeId": "0X-b4v2C4tE",
    "keyNotes": "• Solving Linear Equations with Brackets:\n  - Clear brackets using the distributive property: a(bx + c) = abx + ac.\n  - Group variable terms on one side (usually LHS) and constant terms on the other (RHS).\n  - Combine like terms and divide by the coefficient of x.\n• Equations with Algebraic Fractions:\n  - Find the Least Common Multiple (LCM) of all denominators.\n  - Multiply EVERY term on BOTH sides of the equation by the LCM to clear fractions completely.\n  - Watch for negative signs in front of fractions: - (x - 3) becomes -x + 3!\n• Linear Inequalities in One Variable:\n  - Symbols: < (less than), > (greater than), ≤ (less than or equal to), ≥ (greater than or equal to).\n  - CRITICAL WAEC RULE: When multiplying or dividing both sides of an inequality by a NEGATIVE number, the inequality sign MUST BE REVERSED!\n    * E.g. -2x < 6 -> Divide by -2 -> x > -3.\n• Number Line Representation:\n  - Open circle (○): Used for strict inequalities (< or >) indicating the boundary number is NOT included.\n  - Solid circle (●): Used for inclusive inequalities (≤ or ≥) indicating the boundary number IS included.\n  - Arrow points right for > or ≥; arrow points left for < or ≤.\n• Truth Sets:\n  - Written in set builder notation: {x : x > -3} or for integers: {x : x ∈ ℤ, x ≥ 2} = {2, 3, 4, ...}.",
    "examples": [
      {
        "id": "ex-jhs3math-t3-1",
        "title": "Solving a Fractional Linear Equation (BECE Section B)",
        "problem": "Solve for x: (2x - 1) / 3 - (x + 2) / 4 = 1/2.",
        "stepByStepSolution": [
          "Step 1: Determine the LCM of denominators 3, 4, and 2: LCM = 12 [B1].",
          "Step 2: Multiply every term by 12: 12 × [(2x - 1)/3] - 12 × [(x + 2)/4] = 12 × (1/2) [M1 - Clearing fractions].",
          "Step 3: Simplify coefficients: 4(2x - 1) - 3(x + 2) = 6.",
          "Step 4: Expand brackets (caution with negative sign): 8x - 4 - 3x - 6 = 6 [M1 - Expansion].",
          "Step 5: Collect like terms: (8x - 3x) + (-4 - 6) = 6 -> 5x - 10 = 6.",
          "Step 6: Isolate x: 5x = 6 + 10 -> 5x = 16 -> x = 16/5 = 3 1/5 = 3.2 [A1 - Accuracy mark]."
        ],
        "keyTakeaway": "Be extremely careful when clearing fractions preceded by a minus sign: -3(x + 2) expands to -3x - 6, NOT -3x + 6."
      },
      {
        "id": "ex-jhs3math-t3-2",
        "title": "Solving and Graphing an Inequality",
        "problem": "Find the truth set of the inequality: (3x - 2) / 2 ≥ (5x + 4) / 3. Illustrate your answer on a number line.",
        "stepByStepSolution": [
          "Step 1: Multiply both sides by the LCM of 2 and 3, which is 6: 6 × [(3x - 2)/2] ≥ 6 × [(5x + 4)/3] [M1].",
          "Step 2: Simplify: 3(3x - 2) ≥ 2(5x + 4).",
          "Step 3: Expand: 9x - 6 ≥ 10x + 8 [M1].",
          "Step 4: Collect terms: 9x - 10x ≥ 8 + 6 -> -x ≥ 14.",
          "Step 5: Divide by -1 and REVERSE inequality sign: x ≤ -14 [A1].",
          "Step 6: State truth set: {x : x ≤ -14} [B1].",
          "Step 7: Graph on number line: Place a SOLID circle (●) at -14 with an arrow pointing to the LEFT [A1]."
        ],
        "keyTakeaway": "Dividing by -1 reverses ≥ to ≤; solid circle indicates that -14 is included in the solution set."
      }
    ]
  },
  {
    "id": "jhs3-math-t4-simultaneous-equations",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Simultaneous Linear Equations: Substitution, Elimination & Graphical Methods",
    "description": "Solve systems of two linear equations in two variables using algebraic substitution, elimination, and graphical plotting of intersecting straight lines, with real-world applications.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=nok99JOhc30",
    "youtubeId": "nok99JOhc30",
    "keyNotes": "• Nature of Simultaneous Equations:\n  - A pair of equations containing two unknowns (usually x and y) that must be satisfied simultaneously:\n    * a₁x + b₁y = c₁\n    * a₂x + b₂y = c₂\n• Elimination Method:\n  1. Make the coefficients of one variable (x or y) equal in magnitude by multiplying one or both equations by suitable integers.\n  2. If the signs of the matching coefficients are the SAME, SUBTRACT the two equations.\n  3. If the signs are OPPOSITE, ADD the two equations.\n  4. Solve the resulting single-variable equation.\n  5. Substitute the obtained value back into either original equation to find the second variable.\n• Substitution Method:\n  1. Make one variable the subject from the simpler equation (e.g. x = 5 - 2y).\n  2. Substitute this expression into the OTHER equation in place of that variable.\n  3. Solve the resulting linear equation for the remaining variable.\n  4. Back-substitute to find the first variable.\n• Graphical Method:\n  - Generate a table of values (minimum 3 coordinates) for each straight line.\n  - Plot both linear graphs on the same Cartesian coordinate axes with given scale.\n  - The coordinates (x, y) of the POINT OF INTERSECTION give the simultaneous solution.\n  - If lines are parallel, there is no solution; if coincident, infinitely many solutions.\n• Real-World Problem Solving:\n  - Translate word problems into equations:\n    * E.g. 'The cost of 3 exercise books and 2 pens is GH₵ 29': 3b + 2p = 29.\n    * 'The perimeter of a rectangle is 36 cm and the length is 4 cm more than the width': 2(l + w) = 36 and l = w + 4.",
    "examples": [
      {
        "id": "ex-jhs3math-t4-1",
        "title": "Solving Simultaneous Equations by Elimination",
        "problem": "Solve simultaneously for x and y: 3x + 2y = 12  and  5x - 3y = 1.",
        "stepByStepSolution": [
          "Step 1: Label equations: (1) 3x + 2y = 12; (2) 5x - 3y = 1.",
          "Step 2: Eliminate y by matching coefficients: Multiply (1) by 3 and (2) by 2: (1) × 3: 9x + 6y = 36 (3); (2) × 2: 10x - 6y = 2 (4) [M1 - Matching coefficients].",
          "Step 3: Add equation (3) and equation (4) (opposite signs): (9x + 10x) + (6y - 6y) = 36 + 2 -> 19x = 38 [M1 - Elimination by addition].",
          "Step 4: Solve for x: x = 38 / 19 = 2 [A1 - Value of x].",
          "Step 5: Substitute x = 2 into equation (1): 3(2) + 2y = 12 -> 6 + 2y = 12 [M1 - Substitution].",
          "Step 6: Solve for y: 2y = 12 - 6 = 6 -> y = 3 [A1 - Value of y].",
          "Step 7: Conclude: x = 2, y = 3 (or coordinate pair (2, 3))."
        ],
        "keyTakeaway": "Check your answer in equation (2): 5(2) - 3(3) = 10 - 9 = 1. Both equations balance perfectly."
      },
      {
        "id": "ex-jhs3math-t4-2",
        "title": "Word Problem Involving Simultaneous Equations",
        "problem": "At an educational supply shop in Kumasi, 4 textbooks and 3 geometry sets cost GH₵ 190. At the same shop, 2 textbooks and 5 geometry sets cost GH₵ 165. Calculate the cost of: (a) one textbook, (b) one geometry set.",
        "stepByStepSolution": [
          "Step 1: Assign variables: Let cost of 1 textbook = t, cost of 1 geometry set = g [B1].",
          "Step 2: Formulate equations from problem statements: (1) 4t + 3g = 190; (2) 2t + 5g = 165 [M1 - Model formulation].",
          "Step 3: Eliminate t: Multiply equation (2) by 2: 4t + 10g = 330 (3) [M1].",
          "Step 4: Subtract equation (1) from (3): (4t - 4t) + (10g - 3g) = 330 - 190 -> 7g = 140.",
          "Step 5: Solve for g: g = 140 / 7 = GH₵ 20 [A1 - Cost of geometry set].",
          "Step 6: Substitute g = 20 into equation (1): 4t + 3(20) = 190 -> 4t + 60 = 190 -> 4t = 130 -> t = 130 / 4 = GH₵ 32.50 [A1 - Cost of textbook].",
          "Step 7: State final answers clearly with currency units: (a) 1 textbook costs GH₵ 32.50; (b) 1 geometry set costs GH₵ 20.00."
        ],
        "keyTakeaway": "Always include currency units (GH₵) in final answers to word problems; WAEC deducts 1 mark for missing units."
      }
    ]
  },
  {
    "id": "jhs3-math-t5-quadratic-equations",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 5,
    "title": "Quadratic Equations: Solution by Factorization & Parabolic Graphs",
    "description": "Solve quadratic equations ax² + bx + c = 0 by factorization (zero product principle), construct quadratic tables of values, plot parabolic curves, and read roots, lines of symmetry, and turning points.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=SDe-1lGeS0U",
    "youtubeId": "SDe-1lGeS0U",
    "keyNotes": "• Standard Form of a Quadratic Equation:\n  - ax² + bx + c = 0, where a, b, c ∈ ℝ and a ≠ 0.\n  - The equation must ALWAYS be rearranged to equal zero before factorizing!\n• Solving by Factorization:\n  - Zero Product Property: If A × B = 0, then either A = 0 or B = 0 (or both).\n  - Steps:\n    1. Rearrange into ax² + bx + c = 0.\n    2. Factorize the quadratic into two linear factors (px + q)(rx + s) = 0.\n    3. Set each factor to zero: px + q = 0 or rx + s = 0.\n    4. Solve for the two roots: x₁ = -q/p, x₂ = -s/r.\n• Graph of a Quadratic Function y = ax² + bx + c:\n  - The graph is a smooth curve called a Parabola.\n  - Shape:\n    * If a > 0: U-shaped parabola opening upwards (has a Minimum point).\n    * If a < 0: ∩-shaped parabola opening downwards (has a Maximum point).\n  - Roots of the Equation: The x-coordinates where the curve intersects the x-axis (where y = 0).\n  - Axis of Symmetry: The vertical line passing through the turning point: x = -b / (2a).\n  - Turning Point (Vertex): The minimum or maximum point of the parabola.\n  - Scale and Plotting: Use given WAEC scales (e.g. 2 cm to 1 unit on x-axis; 2 cm to 5 units on y-axis). Always plot points with small crosses (x) and join with a smooth, continuous freehand curve (never a ruler!).",
    "examples": [
      {
        "id": "ex-jhs3math-t5-1",
        "title": "Solving a Quadratic Equation by Factorization",
        "problem": "Solve the quadratic equation: 2x² - 5x = 3.",
        "stepByStepSolution": [
          "Step 1: Rearrange into standard form ax² + bx + c = 0: 2x² - 5x - 3 = 0 [B1].",
          "Step 2: Find product ac: 2 × (-3) = -6. Find two factors of -6 whose sum is -5: Factors are -6 and +1 [M1].",
          "Step 3: Split the middle term: 2x² - 6x + x - 3 = 0.",
          "Step 4: Factorize by grouping: 2x(x - 3) + 1(x - 3) = 0 -> (x - 3)(2x + 1) = 0 [M1].",
          "Step 5: Apply zero product property: Either x - 3 = 0  => x = 3 [A1 - First root]; or 2x + 1 = 0  => 2x = -1  => x = -1/2 = -0.5 [A1 - Second root].",
          "Step 6: Solution: The roots are x = 3 and x = -1/2."
        ],
        "keyTakeaway": "Never divide by x when solving equations like x² = 5x; dividing by x eliminates the root x = 0! Rearrange to x² - 5x = 0 -> x(x - 5) = 0."
      },
      {
        "id": "ex-jhs3math-t5-2",
        "title": "Reading Roots and Turning Point from a Quadratic Graph",
        "problem": "A student plots the graph of y = x² - 2x - 3 for -2 ≤ x ≤ 4. Use the curve properties to determine: (a) the roots of x² - 2x - 3 = 0, (b) the coordinates of the minimum turning point, and (c) the equation of the line of symmetry.",
        "stepByStepSolution": [
          "Step 1 (Part a): Locate the points where the parabola crosses the x-axis (where y = 0): The curve intersects at x = -1 and x = 3 [B1, B1 - Roots].",
          "Step 2 (Part c): Find the axis of symmetry: It lies midway between the roots: x = (-1 + 3) / 2 = 2 / 2 = 1. Formula check: x = -b/(2a) = -(-2)/(2×1) = 2/2 = 1. Equation: x = 1 [B1 - Line of symmetry].",
          "Step 3 (Part b): Find the minimum turning point: When x = 1, y = (1)² - 2(1) - 3 = 1 - 2 - 3 = -4 [M1].",
          "Step 4: Minimum turning point coordinates: (1, -4) [A1 - Turning point]."
        ],
        "keyTakeaway": "The axis of symmetry is a vertical line; always state it as an equation 'x = 1', not simply the number '1'."
      }
    ]
  },
  {
    "id": "jhs3-math-t6-change-of-subject",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Change of Subject of Formulae (Radicals, Fractions & Powers)",
    "description": "Rearrange mathematical, scientific, and engineering formulae to make any specified variable the subject, including terms involving roots, squares, and algebraic fractions.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0k1L2m8vT3s",
    "youtubeId": "0k1L2m8vT3s",
    "keyNotes": "• Definition:\n  - Making a variable the 'subject' of a formula means isolating that variable alone on the Left-Hand Side (LHS) with a coefficient of positive 1 and power of 1.\n• Systematic Algorithm for Rearranging Formulae:\n  1. Clear fractions: Multiply every term by the LCM of all denominators.\n  2. Clear brackets: Use distributive multiplication.\n  3. Clear radical signs (square roots): Isolate the radical term on one side, then square both sides: (√x)² = x.\n  4. Clear powers (squares): Isolate the squared term on one side, then take the square root of both sides: √(x²) = ±√k.\n  5. Group all terms containing the target variable on the LHS.\n  6. Move all terms NOT containing the target variable to the RHS.\n  7. Factor out the target variable if it appears in multiple terms: ax + bx = x(a + b).\n  8. Divide both sides by the cofactor of the target variable.",
    "examples": [
      {
        "id": "ex-jhs3math-t6-1",
        "title": "Making a Variable the Subject from a Formula with Fractions and Roots",
        "problem": "Make 'g' the subject of the pendulum formula: T = 2π√(L / g).",
        "stepByStepSolution": [
          "Step 1: Isolate the square root term by dividing both sides by 2π: T / (2π) = √(L / g) [M1].",
          "Step 2: Eliminate the radical by squaring both sides: [T / (2π)]² = L / g  =>  T² / (4π²) = L / g [M1 - Squaring both sides].",
          "Step 3: Cross-multiply to clear denominators: g × T² = L × 4π² [M1].",
          "Step 4: Isolate g by dividing both sides by T²: g = (4π²L) / T² [A1 - Final formula]."
        ],
        "keyTakeaway": "Always isolate the square root expression before squaring both sides; never square individual terms while other terms share the side."
      },
      {
        "id": "ex-jhs3math-t6-2",
        "title": "Factoring to Isolate a Variable that Appears Twice",
        "problem": "Given that y = (3x + 2) / (x - 5), make 'x' the subject of the relation.",
        "stepByStepSolution": [
          "Step 1: Clear the fraction by multiplying both sides by denominator (x - 5): y(x - 5) = 3x + 2 [M1].",
          "Step 2: Expand the bracket: yx - 5y = 3x + 2 [M1].",
          "Step 3: Group all terms with 'x' on LHS and others on RHS: yx - 3x = 5y + 2 [M1 - Grouping x terms].",
          "Step 4: Factor out x: x(y - 3) = 5y + 2 [M1 - Factoring].",
          "Step 5: Divide by (y - 3): x = (5y + 2) / (y - 3) [A1 - Subject isolated]."
        ],
        "keyTakeaway": "When the target variable appears on both sides of the equation, group them on one side and factor out the variable."
      }
    ]
  },
  {
    "id": "jhs3-math-t7-business-math",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "Business Mathematics: Profit/Loss, Discount, VAT, Interest & Depreciation",
    "description": "Solve commercial problems involving cost price, selling price, percentage profit/loss, trade/cash discounts, Value Added Tax (VAT), Simple Interest (I = PRT/100), Compound Interest, and asset depreciation.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=R3n0m5WkP1w",
    "youtubeId": "R3n0m5WkP1w",
    "keyNotes": "• Profit and Loss:\n  - Profit = Selling Price (SP) - Cost Price (CP) [when SP > CP]\n  - Loss = Cost Price (CP) - Selling Price (SP) [when CP > SP]\n  - Percentage Profit = (Profit / CP) × 100%\n  - Percentage Loss = (Loss / CP) × 100%\n  - Note: Percentage profit/loss is ALWAYS calculated on the COST PRICE (CP), never on the selling price!\n  - SP = CP × [(100 + % Profit) / 100]\n  - CP = [SP × 100] / [100 + % Profit]\n• Discounts & Taxation:\n  - Discount = Marked Price - Cash Selling Price\n  - % Discount = (Discount / Marked Price) × 100%\n  - Value Added Tax (VAT): Consumption tax added to marked price. In Ghana, VAT is levied on the taxable value.\n• Simple Interest (I):\n  - Formula: I = (P × R × T) / 100\n    * P = Principal (amount borrowed or invested)\n    * R = Rate of interest per annum (%)\n    * T = Time in years (if given in months, divide by 12!)\n  - Total Amount (A) = Principal (P) + Interest (I) = P(1 + RT/100).\n• Compound Interest & Depreciation:\n  - Compound Interest: Interest is added to principal at the end of each period to earn further interest.\n    * A = P(1 + R/100)^n; Compound Interest (CI) = A - P.\n  - Depreciation: Loss in value of physical assets over time due to wear and tear.\n    * Depreciated Value = P(1 - R/100)^n.",
    "examples": [
      {
        "id": "ex-jhs3math-t7-1",
        "title": "Calculating Cost Price from Selling Price and Percentage Profit",
        "problem": "A trader in Makola Market sold a refrigerator for GH₵ 3,450, making a profit of 15%. (a) Calculate the cost price of the refrigerator. (b) Find the actual profit made in Ghana Cedis.",
        "stepByStepSolution": [
          "Step 1: Understand relationship: SP represents 100% + 15% = 115% of the Cost Price (CP) [B1].",
          "Step 2: Set up proportion: 115% of CP = GH₵ 3,450 -> (115/100) × CP = 3,450 [M1].",
          "Step 3: Solve for CP: CP = (3,450 × 100) / 115 [M1].",
          "Step 4: Calculate: 3,450 / 115 = 30 -> CP = 30 × 100 = GH₵ 3,000.00 [A1 - Cost price].",
          "Step 5 (Part b): Profit = SP - CP = GH₵ 3,450 - GH₵ 3,000 = GH₵ 450.00 [A1 - Actual profit]."
        ],
        "keyTakeaway": "Never calculate 15% of the selling price to find profit! Profit is 15% of the unknown cost price."
      },
      {
        "id": "ex-jhs3math-t7-2",
        "title": "Computing Simple Interest and Total Amount Repayable",
        "problem": "Mr. Mensah borrowed GH₵ 8,000 from a commercial bank at an interest rate of 12.5% per annum for 2 years and 6 months. Calculate: (a) the simple interest charged, (b) the total amount repayable to the bank.",
        "stepByStepSolution": [
          "Step 1: Extract data and convert time to years: P = GH₵ 8,000; R = 12.5% = 25/2%; Time T = 2 years 6 months = 2.5 years = 5/2 years [B1 - Time conversion].",
          "Step 2: State formula: I = (P × R × T) / 100 [M1].",
          "Step 3: Substitute values: I = (8,000 × 12.5 × 2.5) / 100 = 80 × 12.5 × 2.5 [M1].",
          "Step 4: Calculate: 80 × 12.5 = 1,000; 1,000 × 2.5 = GH₵ 2,500.00 [A1 - Simple interest].",
          "Step 5 (Part b): Total Amount A = P + I = GH₵ 8,000 + GH₵ 2,500 = GH₵ 10,500.00 [A1 - Total amount]."
        ],
        "keyTakeaway": "Always express time T strictly in years in the simple interest formula; 6 months = 0.5 years."
      }
    ]
  },
  {
    "id": "jhs3-math-t8-ratios-proportions-rates",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Ratio, Direct/Inverse Proportion, Proportional Division & Rates",
    "description": "Solve problems involving sharing quantities in given ratios, direct variation (y = kx), inverse variation (y = k/x), map scales, and rates of work and average speed.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=F3q2A1bO4cI",
    "youtubeId": "F3q2A1bO4cI",
    "keyNotes": "• Ratios & Proportional Sharing:\n  - A ratio compares quantities of the same kind; expressed in simplest form without units: a : b = a/b.\n  - Sharing Quantity Q in ratio a : b : c:\n    1. Sum of ratio parts = a + b + c.\n    2. First share = (a / Total Parts) × Q.\n    3. Second share = (b / Total Parts) × Q.\n    4. Third share = (c / Total Parts) × Q.\n• Direct Proportion (Variation):\n  - When two quantities x and y increase or decrease together in the same ratio: y ∝ x  =>  y = kx (where k is the constant of proportionality).\n  - Formula: y₁ / x₁ = y₂ / x₂.\n• Inverse Proportion (Variation):\n  - When an increase in one quantity causes a corresponding decrease in the other: y ∝ 1/x  =>  y = k/x  =>  xy = k.\n  - Formula: x₁ × y₁ = x₂ × y₂.\n  - Classic example: More workers take fewer days to complete a task.\n• Rates: Speed, Distance & Time:\n  - Speed = Distance / Time (units: km/h or m/s).\n  - Conversion: 1 km/h = (1000 m) / (3600 s) = 5/18 m/s. (Multiply by 5/18 to go from km/h to m/s; multiply by 18/5 to go from m/s to km/h).\n  - Average Speed = Total Distance Travelled / Total Time Taken (NEVER the average of two speeds!).",
    "examples": [
      {
        "id": "ex-jhs3math-t8-1",
        "title": "Solving an Inverse Proportion Worker-Time Problem",
        "problem": "Twelve workers can weed a cocoa plantation in 15 days. How many days will it take 20 workers working at the same rate to weed the same plantation?",
        "stepByStepSolution": [
          "Step 1: Identify relationship: Number of workers (w) and time in days (d) are inversely proportional: w × d = k (constant work done) [B1].",
          "Step 2: Calculate total worker-days needed: k = 12 workers × 15 days = 180 worker-days [M1].",
          "Step 3: Set up equation for 20 workers: 20 × d = 180 [M1].",
          "Step 4: Solve for d: d = 180 / 20 = 9 days [A1].",
          "Step 5: Check logic: More workers (20 > 12) must take fewer days (9 < 15)."
        ],
        "keyTakeaway": "Worker-time problems are inverse proportions: Workers₁ × Days₁ = Workers₂ × Days₂."
      },
      {
        "id": "ex-jhs3math-t8-2",
        "title": "Proportional Sharing with Difference between Shares",
        "problem": "Three siblings, Kofi, Ama, and Yaw, shared a sum of money in the ratio 3 : 5 : 7. If Yaw received GH₵ 180 more than Kofi, calculate: (a) the total sum of money shared, (b) Ama's share.",
        "stepByStepSolution": [
          "Step 1: Assign ratio parts: Kofi = 3 parts, Ama = 5 parts, Yaw = 7 parts. Total parts = 3 + 5 + 7 = 15 parts [B1].",
          "Step 2: Difference between Yaw and Kofi in ratio parts: 7 - 3 = 4 parts [M1].",
          "Step 3: Relate difference to cash: 4 parts = GH₵ 180 -> 1 part = 180 / 4 = GH₵ 45 [M1].",
          "Step 4 (Part a): Calculate Total Sum = 15 parts × GH₵ 45 = GH₵ 675.00 [A1 - Total money].",
          "Step 5 (Part b): Calculate Ama's share = 5 parts × GH₵ 45 = GH₵ 225.00 [A1 - Ama's share]."
        ],
        "keyTakeaway": "Find the cash value of one ratio unit first; this makes finding any individual share or the total straightforward."
      }
    ]
  },
  {
    "id": "jhs3-math-t9-vectors-bearings",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Vectors & Bearings (Column Vectors, Modulus & 3-Figure Bearings)",
    "description": "Operate on 2D column vectors (addition, subtraction, scalar multiplication), calculate magnitude |u| = √(x² + y²), and solve navigator journeys using 3-figure bearings (000° to 360°).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0hW7V2kP3mI",
    "youtubeId": "0hW7V2kP3mI",
    "keyNotes": "• Vectors in Two Dimensions:\n  - A vector is a quantity having both magnitude (length) and direction.\n  - Column vector notation: u = [x, y], where x is horizontal displacement (right +ve, left -ve) and y is vertical displacement (up +ve, down -ve).\n• Vector Algebra:\n  - Addition: [x₁, y₁] + [x₂, y₂] = [x₁ + x₂, y₁ + y₂]\n  - Subtraction: [x₁, y₁] - [x₂, y₂] = [x₁ - x₂, y₁ - y₂]\n  - Scalar Multiplication: k[x, y] = [kx, ky]\n  - Position Vectors: If point A is (x, y), its position vector relative to origin O is OA = [x, y].\n  - Displacement vector: AB = OB - OA.\n• Magnitude / Modulus of a Vector:\n  - If vector u = [x, y], magnitude |u| = √(x² + y²) (from Pythagoras' Theorem).\n  - Distance between two points A(x₁, y₁) and B(x₂, y₂): |AB| = √[(x₂ - x₁)² + (y₂ - y₁)²].\n• Three-Figure Bearings:\n  - Three cardinal rules of bearings:\n    1. Measured CLOCKWISE from True North (000°).\n    2. Always written with THREE digits (e.g. 045°, 090°, 270°).\n    3. Measured from the reference starting point ('from A' means place compass rose at A!).\n  - Cardinal Points: North = 000° / 360°, East = 090°, South = 180°, West = 270°.\n  - Back Bearing: The reverse bearing from B back to A.\n    * If forward bearing θ < 180°: Back Bearing = θ + 180°.\n    * If forward bearing θ ≥ 180°: Back Bearing = θ - 180°.",
    "examples": [
      {
        "id": "ex-jhs3math-t9-1",
        "title": "Vector Arithmetic and Magnitude (BECE Section B)",
        "problem": "Given vectors a = [4, -3] and b = [-2, 5], find: (a) vector c = 2a + 3b, (b) the magnitude |c|.",
        "stepByStepSolution": [
          "Step 1: Compute 2a: 2[4, -3] = [2(4), 2(-3)] = [8, -6] [M1].",
          "Step 2: Compute 3b: 3[-2, 5] = [3(-2), 3(5)] = [-6, 15] [M1].",
          "Step 3: Add vectors: c = [8 + (-6), -6 + 15] = [2, 9] [A1 - Vector c].",
          "Step 4 (Part b): State magnitude formula: |c| = √(x² + y²) [M1].",
          "Step 5: Substitute coordinates: |c| = √(2² + 9²) = √(4 + 81) = √85 [M1].",
          "Step 6: Evaluate: √85 ≈ 9.22 units [A1 - Magnitude]."
        ],
        "keyTakeaway": "Scalar multiplication distributes to both components; magnitude is always a positive scalar length."
      },
      {
        "id": "ex-jhs3math-t9-2",
        "title": "Calculating Forward and Back Bearings",
        "problem": "Point B is on a bearing of 065° from point A. (a) Sketch the relative positions of A and B. (b) Calculate the bearing of A from B.",
        "stepByStepSolution": [
          "Step 1: Draw North line at reference point A. Rotate clockwise 65° from North to draw line segment AB [B1 - Accurate sketch].",
          "Step 2: Draw a North line at point B parallel to the North line at A [B1].",
          "Step 3: Identify geometric angles: By alternate interior angles, the angle between the South line at B and line BA is 65°.",
          "Step 4: Apply back bearing rule: Since the bearing of B from A is 065° (< 180°), Back Bearing = 065° + 180° [M1].",
          "Step 5: Calculate: 065° + 180° = 245° [A1 - Bearing of A from B]."
        ],
        "keyTakeaway": "'Bearing of A from B' means you must position the North reference arrow at point B and measure clockwise to line BA."
      }
    ]
  },
  {
    "id": "jhs3-math-t10-trigonometry-right-angled",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 10,
    "title": "Trigonometry: SOHCAHTOA & Angles of Elevation and Depression",
    "description": "Apply right-angled triangle trigonometry ratios (Sine, Cosine, Tangent), solve practical problems on heights and distances using angles of elevation and depression, and use trigonometric tables.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=5tp74g4N8EY",
    "youtubeId": "5tp74g4N8EY",
    "keyNotes": "• Right-Angled Triangle Terminology:\n  - Hypotenuse: The longest side opposite the 90° right angle.\n  - Opposite: The side directly opposite the reference angle θ.\n  - Adjacent: The side next to the reference angle θ (between θ and 90°).\n• The Trigonometric Ratios (SOH CAH TOA):\n  - Sin θ = Opposite / Hypotenuse  (SOH)\n  - Cos θ = Adjacent / Hypotenuse  (CAH)\n  - Tan θ = Opposite / Adjacent    (TOA)\n• Pythagorean Theorem:\n  - (Hypotenuse)² = (Opposite)² + (Adjacent)²  =>  c² = a² + b².\n• Angle of Elevation vs Angle of Depression:\n  - Angle of Elevation: The angle measured UPWARDS from the horizontal eye line to an object above.\n  - Angle of Depression: The angle measured DOWNWARDS from the horizontal eye line to an object below.\n  - GEOMETRIC THEOREM: Angle of Depression from top of tower to observer = Angle of Elevation from observer to top of tower (Alternate Interior Angles).\n  - Common Pitfall: Never measure the angle of depression from the vertical wall/tower! Always measure from the HORIZONTAL line of sight.",
    "examples": [
      {
        "id": "ex-jhs3math-t10-1",
        "title": "Finding the Height of a Flagpole using Angle of Elevation",
        "problem": "A student stands on level ground 24 m away from the base of a vertical school flagpole. The angle of elevation from the ground to the top of the flagpole is 35°. Calculate the height of the flagpole to 2 decimal places. (Take tan 35° = 0.7002).",
        "stepByStepSolution": [
          "Step 1: Sketch right-angled triangle: Base = 24 m (adjacent side), Height of pole = h (opposite side), Angle θ = 35° [B1 - Diagram].",
          "Step 2: Choose suitable ratio connecting Opposite and Adjacent: tan θ = Opposite / Adjacent [M1].",
          "Step 3: Substitute known values: tan 35° = h / 24 [M1].",
          "Step 4: Rearrange for h: h = 24 × tan 35° = 24 × 0.7002 [M1].",
          "Step 5: Calculate: h = 16.8048 m -> h = 16.80 m (to 2 decimal places) [A1]."
        ],
        "keyTakeaway": "Use tangent (tan) whenever the problem connects the height (opposite) with the ground distance (adjacent)."
      },
      {
        "id": "ex-jhs3math-t10-2",
        "title": "Angle of Depression Problem with Observer Height",
        "problem": "From the top of a cliff 60 m above sea level, the angle of depression of a fishing boat at sea is 28°. Calculate the horizontal distance of the boat from the foot of the cliff. (Take tan 28° = 0.5317).",
        "stepByStepSolution": [
          "Step 1: Sketch diagram: Horizontal line of sight from cliff top, angle of depression 28° below horizontal, vertical cliff height = 60 m, horizontal ground distance = d [B1].",
          "Step 2: Apply alternate interior angle rule: The angle of elevation from the boat to the cliff top is also 28° [B1].",
          "Step 3: In the right-angled triangle: tan 28° = Opposite / Adjacent = 60 / d [M1].",
          "Step 4: Solve for d: d = 60 / tan 28° = 60 / 0.5317 [M1].",
          "Step 5: Compute: d = 112.845... m ≈ 112.85 m [A1]."
        ],
        "keyTakeaway": "Always construct a horizontal reference line before measuring an angle of depression."
      }
    ]
  },
  {
    "id": "jhs3-math-t11-plane-geometry-circles",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Plane Geometry: Circle Theorems, Cyclic Quadrilaterals & Tangent Properties",
    "description": "Explore fundamental circle theorems: angles subtended at center vs circumference, angles in a semi-circle, angles in the same segment, opposite angles of cyclic quadrilaterals, and tangent-radius perpendicularity.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=9_6H4hE4b2E",
    "youtubeId": "9_6H4hE4b2E",
    "keyNotes": "• Essential Circle Theorems for BECE:\n  1. Angle at Center: The angle subtended by an arc at the center of a circle is twice the angle subtended by the same arc at any point on the circumference: ∠AOB = 2 × ∠APB.\n  2. Angle in a Semi-Circle: An angle subtended by a diameter at the circumference is always a right angle (90°).\n  3. Angles in the Same Segment: Angles subtended by the same chord/arc in the same segment are equal: ∠APB = ∠AQB.\n  4. Cyclic Quadrilateral Theorem: A quadrilateral whose four vertices lie on the circumference of a circle is a cyclic quadrilateral.\n     * Rule: Opposite angles of a cyclic quadrilateral are supplementary (sum to 180°): ∠A + ∠C = 180° and ∠B + ∠D = 180°.\n     * Exterior Angle Rule: The exterior angle of a cyclic quadrilateral is equal to the interior opposite angle.\n  5. Tangent & Radius Theorem: A tangent to a circle is perpendicular to the radius drawn to the point of contact: ∠OPT = 90°.\n  6. Tangents from an External Point: Two tangents drawn to a circle from the same external point are equal in length: TP = TQ.\n• Angle Properties of Polygons:\n  - Sum of interior angles of an n-sided polygon = (n - 2) × 180°.\n  - Each interior angle of a regular polygon = [(n - 2) × 180°] / n.\n  - Sum of exterior angles of ANY convex polygon = 360°.\n  - Each exterior angle of a regular polygon = 360° / n.",
    "examples": [
      {
        "id": "ex-jhs3math-t11-1",
        "title": "Applying Cyclic Quadrilateral and Center Angle Theorems",
        "problem": "In a circle with center O, points A, B, C, and D lie on the circumference. Arc AB subtends an angle of 110° at the center O. Find: (a) angle ∠ACB, (b) angle ∠ADB if ABCD forms a cyclic quadrilateral with chord AB.",
        "stepByStepSolution": [
          "Step 1 (Part a): Angle at center is twice angle at circumference: ∠AOB = 2 × ∠ACB [B1 - Theorem statement].",
          "Step 2: Calculate: ∠ACB = ∠AOB / 2 = 110° / 2 = 55° [A1].",
          "Step 3: Angles in the same segment subtended by chord AB are equal, so any other point on the major arc also subtends 55°.",
          "Step 4 (Part b): If point D lies on the minor arc opposite C, ABCD is a cyclic quadrilateral: Opposite angles sum to 180°: ∠ACB + ∠ADB = 180° [M1].",
          "Step 5: Solve for ∠ADB: ∠ADB = 180° - 55° = 125° [A1]."
        ],
        "keyTakeaway": "Check whether a point lies on the same arc or the opposite arc to know whether to use 'angles in same segment' or 'cyclic quadrilateral supplementary angles'."
      },
      {
        "id": "ex-jhs3math-t11-2",
        "title": "Finding Unknown Angles in a Tangent-Radius Configuration",
        "problem": "In a circle with center O, PT is a tangent touching the circle at point P. Line OT passes through the center. If angle ∠POT = 64°, calculate the size of angle ∠PTO.",
        "stepByStepSolution": [
          "Step 1: State theorem: The tangent PT is perpendicular to radius OP at the point of contact P: ∠OPT = 90° [B1].",
          "Step 2: Triangle OPT is a right-angled triangle. Sum of interior angles in ΔOPT = 180° [M1].",
          "Step 3: Set up equation: ∠OPT + ∠POT + ∠PTO = 180°  =>  90° + 64° + ∠PTO = 180°.",
          "Step 4: Solve: 154° + ∠PTO = 180°  =>  ∠PTO = 180° - 154° = 26° [A1]."
        ],
        "keyTakeaway": "Any radius meeting a tangent line at the point of contact creates an immediate 90° right angle."
      }
    ]
  },
  {
    "id": "jhs3-math-t12-mensuration-perimeter-area-volume",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Mensuration: Arcs, Sectors, Surface Area & Volume of Solid Shapes",
    "description": "Calculate arc lengths and sector areas, and determine total surface area and volume of three-dimensional geometric solids: cylinders, cones, pyramids, spheres, and composite containers.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=W3a4F2uQ1_o",
    "youtubeId": "W3a4F2uQ1_o",
    "keyNotes": "• Circles, Arcs & Sectors:\n  - Circumference of circle = 2πr; Area = πr².\n  - Arc Length (L) = (θ / 360°) × 2πr.\n  - Perimeter of a Sector = Arc Length + 2r = [(θ / 360°) × 2πr] + 2r.\n  - Area of a Sector = (θ / 360°) × πr².\n• Solid Cylinders (Radius r, Height h):\n  - Curved Surface Area (CSA) = 2πrh.\n  - Total Surface Area (TSA, closed) = 2πrh + 2πr² = 2πr(h + r).\n  - Open cylinder (one end open, e.g. bucket): TSA = 2πrh + πr².\n  - Volume (V) = πr²h.\n• Solid Cones (Base radius r, Vertical height h, Slant height l):\n  - Slant height relation: l² = r² + h²  =>  l = √(r² + h²).\n  - Curved Surface Area (CSA) = πrl.\n  - Total Surface Area (TSA) = πrl + πr² = πr(l + r).\n  - Volume (V) = (1/3)πr²h.\n• Spheres & Hemispheres (Radius r):\n  - Surface Area of Sphere = 4πr²; Volume of Sphere = (4/3)πr³.\n  - Solid Hemisphere: Curved area = 2πr²; Flat circular base = πr²; Total Surface Area = 3πr²; Volume = (2/3)πr³.\n• Pyramids (Base area A, Height h):\n  - Volume of Pyramid = (1/3) × Base Area × Height = (1/3)Ah.",
    "examples": [
      {
        "id": "ex-jhs3math-t12-1",
        "title": "Calculating Volume and Surface Area of a Cylindrical Water Tank",
        "problem": "A cylindrical metal water reservoir in Tamale has an internal diameter of 1.4 m and a height of 3 m. Taking π = 22/7, calculate: (a) the volume of the tank in cubic meters (m³), (b) the capacity of the tank in litres (1 m³ = 1,000 litres), (c) the total exterior surface area of the closed cylinder.",
        "stepByStepSolution": [
          "Step 1: Calculate radius r: r = diameter / 2 = 1.4 / 2 = 0.7 m = 7/10 m [B1].",
          "Step 2: State volume formula: V = πr²h [M1].",
          "Step 3: Substitute values: V = (22/7) × (0.7)² × 3 = (22/7) × 0.49 × 3 = 22 × 0.07 × 3 [M1].",
          "Step 4: Compute: V = 1.54 × 3 = 4.62 m³ [A1 - Volume].",
          "Step 5 (Part b): Capacity in litres = 4.62 × 1,000 = 4,620 litres [A1 - Capacity].",
          "Step 6 (Part c): State TSA formula: TSA = 2πr(h + r) = 2 × (22/7) × 0.7 × (3 + 0.7) [M1].",
          "Step 7: Compute: 2 × 2.2 × 3.7 = 4.4 × 3.7 = 16.28 m² [A1 - Total surface area]."
        ],
        "keyTakeaway": "Always check whether dimensions are given as diameter or radius; diameter must be divided by 2 before substituting into formulas."
      },
      {
        "id": "ex-jhs3math-t12-2",
        "title": "Finding Arc Length and Sector Perimeter",
        "problem": "A sector of a circle of radius 14 cm subtends an angle of 60° at the center. Taking π = 22/7, find: (a) the length of the arc, (b) the perimeter of the sector, (c) the area of the sector.",
        "stepByStepSolution": [
          "Step 1 (Part a): Arc length L = (θ / 360°) × 2πr = (60 / 360) × 2 × (22/7) × 14 [M1].",
          "Step 2: Simplify: (1/6) × 2 × 22 × 2 = (1/6) × 88 = 88 / 6 = 14.67 cm (or 14 2/3 cm) [A1 - Arc length].",
          "Step 3 (Part b): Perimeter of sector = Arc Length + 2r = 14.67 + 2(14) = 14.67 + 28 = 42.67 cm [M1, A1 - Perimeter].",
          "Step 4 (Part c): Area of sector = (θ / 360°) × πr² = (60 / 360) × (22/7) × 14 × 14 [M1].",
          "Step 5: Simplify: (1/6) × 22 × 2 × 14 = (1/6) × 616 = 616 / 6 = 102.67 cm² [A1 - Sector area]."
        ],
        "keyTakeaway": "The perimeter of a sector includes the curved arc length PLUS the two straight bounding radii (L + 2r)."
      }
    ]
  },
  {
    "id": "jhs3-math-t13-geometric-transformations",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 13,
    "title": "Transformations: Reflection, Rotation, Translation & Enlargement",
    "description": "Map coordinates under geometric transformations: reflection in the axes and lines y = ±x, rotation about the origin (90°, 180°, 270°), translation by vector [a, b], and enlargement by scale factor k.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=3iXjV1_vM8g",
    "youtubeId": "3iXjV1_vM8g",
    "keyNotes": "• Coordinate Mapping Rules for Reflection:\n  - Reflection in the x-axis (y = 0): (x, y) -> (x, -y)\n  - Reflection in the y-axis (x = 0): (x, y) -> (-x, y)\n  - Reflection in the line y = x: (x, y) -> (y, x) (swap coordinates)\n  - Reflection in the line y = -x: (x, y) -> (-y, -x) (swap and negate)\n• Coordinate Mapping Rules for Rotation about Origin (0, 0):\n  - 90° Anti-clockwise (or 270° Clockwise): (x, y) -> (-y, x)\n  - 180° Rotation (Half turn): (x, y) -> (-x, -y)\n  - 270° Anti-clockwise (or 90° Clockwise): (x, y) -> (y, -x)\n• Translation by Vector [a, b]:\n  - Every point shifts by the vector: Image = Object + Translation Vector.\n  - Coordinate rule: (x, y) -> (x + a, y + b).\n• Enlargement with Center (0, 0) and Scale Factor k:\n  - Coordinate rule: (x, y) -> (kx, ky).\n  - Properties of Scale Factor k:\n    * If k > 1: Shape is enlarged (magnified).\n    * If 0 < k < 1: Shape is diminished (reduced).\n    * If k is negative: Image is inverted on the opposite side of the center.\n  - Relationship between Lengths, Areas, and Volumes:\n    * Image Length = |k| × Object Length.\n    * Image Area = k² × Object Area.\n    * Image Volume = |k|³ × Object Volume.",
    "examples": [
      {
        "id": "ex-jhs3math-t13-1",
        "title": "Mapping Triangle Vertices under Combined Transformations",
        "problem": "Triangle ABC has vertices A(2, 1), B(4, 1), and C(3, 4). (a) Find the coordinates of image A₁B₁C₁ under a 90° anti-clockwise rotation about the origin. (b) A₁B₁C₁ is then translated by vector v = [-2, 3] to give A₂B₂C₂. Find the coordinates of A₂B₂C₂.",
        "stepByStepSolution": [
          "Step 1: State rotation rule for 90° anti-clockwise about origin: (x, y) -> (-y, x) [B1].",
          "Step 2: Apply to each vertex of ABC: A(2, 1) -> A₁(-1, 2); B(4, 1) -> B₁(-1, 4); C(3, 4) -> C₁(-4, 3) [M1, A1 - Vertices A₁B₁C₁].",
          "Step 3 (Part b): State translation rule: (x, y) -> (x + a, y + b) where a = -2, b = 3: Image = (x - 2, y + 3) [B1].",
          "Step 4: Apply to A₁B₁C₁: A₁(-1, 2) -> A₂(-1 - 2, 2 + 3) = A₂(-3, 5); B₁(-1, 4) -> B₂(-1 - 2, 4 + 3) = B₂(-3, 7); C₁(-4, 3) -> C₂(-4 - 2, 3 + 3) = C₂(-6, 6) [M1, A1 - Vertices A₂B₂C₂]."
        ],
        "keyTakeaway": "Apply successive transformations step-by-step to intermediate coordinates rather than attempting to jump directly to the final image."
      },
      {
        "id": "ex-jhs3math-t13-2",
        "title": "Calculating Scale Factor and Area of Enlargement",
        "problem": "A rectangular garden of length 8 m and width 5 m is enlarged by a scale factor of k = 3 with the origin as center. Calculate: (a) the dimensions of the enlarged garden, (b) the area of the original garden, (c) the area of the enlarged garden using the k² area scale factor property.",
        "stepByStepSolution": [
          "Step 1 (Part a): Enlarged dimensions: Length = 8 m × 3 = 24 m; Width = 5 m × 3 = 15 m [B1, B1].",
          "Step 2 (Part b): Original Area = Length × Width = 8 m × 5 m = 40 m² [B1].",
          "Step 3 (Part c): State Area scale factor relation: Area of Image = k² × Area of Object [M1].",
          "Step 4: Substitute k = 3: Area of Image = 3² × 40 m² = 9 × 40 m² = 360 m² [A1].",
          "Step 5: Verify using direct dimensions: 24 m × 15 m = 360 m²."
        ],
        "keyTakeaway": "Remember that area increases by k² (the square of the linear scale factor), NOT by k!"
      }
    ]
  },
  {
    "id": "jhs3-math-t14-data-handling-probability",
    "subjectId": "math",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 14,
    "title": "Handling Data: Grouped Frequency, Cumulative Frequency & Probability",
    "description": "Construct grouped frequency tables, compute mean using assumed mean or class midpoints, construct cumulative frequency curves (ogive), determine median and quartiles, and calculate theoretical probability.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0k5Xo_L7s0Y",
    "youtubeId": "0k5Xo_L7s0Y",
    "keyNotes": "• Grouped Frequency Distributions:\n  - Class Interval (e.g. 10 - 19): Lower limit = 10, Upper limit = 19.\n  - Class Boundaries: Lower boundary = 9.5, Upper boundary = 19.5.\n  - Class Width / Size: Upper boundary - Lower boundary = 19.5 - 9.5 = 10.\n  - Class Midpoint / Mark (x): (Lower limit + Upper limit) / 2 = (10 + 19) / 2 = 14.5.\n• Measures of Central Tendency for Grouped Data:\n  - Mean (x̄) = Σ(fx) / Σf, where f = frequency of each class and x = class midpoint.\n  - Modal Class: The class interval with the highest frequency.\n• Cumulative Frequency & The Ogive Curve:\n  - Cumulative Frequency (cf): The running total of frequencies up to the upper boundary of each class.\n  - Plotting the Ogive: Plot Cumulative Frequency (y-axis) against Upper Class Boundaries (x-axis); join points with a smooth S-shaped curve starting from zero on the lowest boundary.\n  - Reading from Ogive:\n    * Median (Q₂): Value corresponding to cf = N / 2 (where N = Σf).\n    * Lower Quartile (Q₁): Value corresponding to cf = N / 4.\n    * Upper Quartile (Q₃): Value corresponding to cf = 3N / 4.\n    * Interquartile Range (IQR) = Q₃ - Q₁.\n• Theoretical Probability:\n  - Definition: P(Event E) = (Number of favorable outcomes n(E)) / (Total number of possible outcomes n(S)).\n  - Probability Scale: 0 ≤ P(E) ≤ 1. If P(E) = 0, event is impossible; if P(E) = 1, event is certain.\n  - Complementary Events: P(not E) = 1 - P(E).",
    "examples": [
      {
        "id": "ex-jhs3math-t14-1",
        "title": "Calculating Mean from a Grouped Frequency Table (BECE Section B)",
        "problem": "The marks scored by 40 candidates in a BECE mock examination are grouped as follows: 1-10 (4), 11-20 (6), 21-30 (12), 31-40 (10), 41-50 (8). Calculate the mean mark of the distribution.",
        "stepByStepSolution": [
          "Step 1: Calculate midpoints (x) for each class: 1-10: x = 5.5; 11-20: x = 15.5; 21-30: x = 25.5; 31-40: x = 35.5; 41-50: x = 45.5 [M1 - Midpoints].",
          "Step 2: Multiply each midpoint by its frequency (fx): 4 × 5.5 = 22; 6 × 15.5 = 93; 12 × 25.5 = 306; 10 × 35.5 = 355; 8 × 45.5 = 364 [M1 - fx products].",
          "Step 3: Sum the fx column: Σ(fx) = 22 + 93 + 306 + 355 + 364 = 1,140 [M1 - Summation].",
          "Step 4: Sum the frequencies: Σf = 4 + 6 + 12 + 10 + 8 = 40 [B1].",
          "Step 5: Apply formula: Mean x̄ = Σ(fx) / Σf = 1,140 / 40 = 28.5 marks [A1 - Final mean]."
        ],
        "keyTakeaway": "In grouped data, always calculate class midpoints x accurately before computing products fx."
      },
      {
        "id": "ex-jhs3math-t14-2",
        "title": "Calculating Probability of Combined Mutually Exclusive Outcomes",
        "problem": "A box contains 5 red pens, 8 blue pens, and 7 black pens. A pen is picked at random. Find the probability that the pen is: (a) blue, (b) not red, (c) green.",
        "stepByStepSolution": [
          "Step 1: Calculate total possible outcomes n(S): n(S) = 5 (red) + 8 (blue) + 7 (black) = 20 pens [B1].",
          "Step 2 (Part a): Number of blue pens n(B) = 8. P(Blue) = 8 / 20 = 2/5 = 0.4 [M1, A1].",
          "Step 3 (Part b): Pens that are NOT red = Blue + Black = 8 + 7 = 15 pens. P(Not Red) = 15 / 20 = 3/4 = 0.75 (or 1 - 5/20 = 15/20) [M1, A1].",
          "Step 4 (Part c): There are 0 green pens in the box. P(Green) = 0 / 20 = 0 (an impossible event) [B1]."
        ],
        "keyTakeaway": "Always reduce probability fractions to simplest form; probabilities can never exceed 1 or be negative."
      }
    ]
  }
];
