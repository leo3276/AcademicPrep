// Ghanaian JHS 3 Mathematics Detailed Study Notes
// Based on NaCCA / GES Common Core Programme (CCP) BECE Candidate Syllabus
// 14 Topics with in-depth sections, learning objectives, Chief Examiner pitfalls, BECE tips, and checklists

import { DetailedNotes } from './types';

export const JHS3_MATH_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs3-math-t1-real-numbers-surds": {
    "topicId": "jhs3-math-t1-real-numbers-surds",
    "title": "Real Number System, Standard Form, Indices & Surds",
    "overview": "Comprehensive mastery of the real number system, scientific standard notation, algebraic index laws, and irrational surd manipulations for the BECE examination.",
    "introduction": "In JHS 3 Mathematics, numbers are no longer just counting tools; they form an abstract algebraic structure. Candidates must confidently classify numbers into rational and irrational sets, express microscopic and astronomical quantities in scientific standard form (A × 10^n), evaluate expressions with integral and fractional indices, and simplify radical surd expressions.",
    "realWorldContext": "Standard form and indices are used daily by Ghanaian scientists at the Ghana Atomic Energy Commission (GAEC) and telecommunication engineers at MTN and Telecel to calculate microsecond network latencies and radio signal frequencies in gigahertz.",
    "objectives": [
      "Distinguish between rational numbers (terminating/recurring decimals) and irrational numbers (surds and non-recurring decimals).",
      "Express numbers in standard form A × 10^n where 1 ≤ A < 10 and n is an integer, and perform four operations in scientific notation.",
      "Apply the 6 fundamental laws of indices to simplify complex algebraic and numerical expressions.",
      "Simplify surds into basic form √(a²b) = a√b, and add, subtract, and multiply like and unlike surds."
    ],
    "sections": [
      {
        "title": "1. The Real Number System & Classification",
        "content": "The set of Real Numbers (ℝ) encompasses all numbers that can be represented on a continuous number line. It divides into two mutually exclusive subsets: Rational Numbers (ℚ) and Irrational Numbers (ℚ').",
        "bulletPoints": [
          "Natural Numbers (ℕ): Positive counting integers {1, 2, 3, 4, ...}.",
          "Whole Numbers (𝕎): Natural numbers including zero {0, 1, 2, 3, ...}.",
          "Integers (ℤ): Positive and negative whole numbers and zero {..., -3, -2, -1, 0, 1, 2, 3, ...}.",
          "Rational Numbers (ℚ): Numbers written as a/b where a, b ∈ ℤ and b ≠ 0. They include all terminating decimals (e.g. 0.75 = 3/4) and recurring decimals (e.g. 0.333... = 1/3, 0.1818... = 2/11).",
          "Irrational Numbers (ℚ'): Numbers that cannot be expressed as a ratio of two integers. Their decimal expansions are non-terminating and non-recurring (e.g. √2 = 1.4142..., √3, √5, π = 3.14159...)."
        ],
        "keyTakeaway": "Rational numbers terminate or recur in decimal form; irrational numbers never terminate and never repeat a regular pattern.",
        "realWorldExample": "While 22/7 is rational (repeats every 6 digits), true π is irrational. 22/7 is merely an ancient rational approximation used for calculation."
      },
      {
        "title": "2. Standard Form (Scientific Notation)",
        "content": "Standard form expresses very large or very small numbers in the uniform mathematical structure A × 10^n, where 1 ≤ A < 10 and n is an integer exponent.",
        "bulletPoints": [
          "Numbers Greater than 10 (n > 0): Shift the decimal point to the left until one non-zero digit remains on the left. The number of shifts is positive n. E.g. 845,000 = 8.45 × 10^5.",
          "Numbers Between 0 and 1 (n < 0): Shift the decimal point to the right until one non-zero digit is to the left. The number of shifts is negative n. E.g. 0.000072 = 7.2 × 10^-5.",
          "Multiplication & Division in Standard Form: Multiply or divide the significant figures (A-values) normally, then apply index laws to the powers of 10. Always re-adjust the final answer to satisfy 1 ≤ A < 10.",
          "Addition & Subtraction: Adjust both terms so they share the same power of 10 before adding or subtracting their coefficients."
        ],
        "keyTakeaway": "The leading coefficient A must strictly satisfy 1 ≤ A < 10; 45 × 10^3 is mathematically true but rejected by WAEC as standard form.",
        "realWorldExample": "Ghana's national population of approximately 34,000,000 people is written in statistical economic reports as 3.4 × 10^7."
      },
      {
        "title": "3. The Laws of Indices",
        "content": "Indices (exponents or powers) indicate how many times a base number is multiplied by itself. Candidates must master all six algebraic laws for algebraic and arithmetic simplification.",
        "bulletPoints": [
          "Law 1 (Multiplication): a^m × a^n = a^(m + n). Bases must be identical before powers can be added.",
          "Law 2 (Division): a^m ÷ a^n = a^(m - n). Subtract the denominator index from the numerator index.",
          "Law 3 (Power of a Power): (a^m)^n = a^(m × n). Powers multiply directly.",
          "Law 4 (Zero Index): a^0 = 1 for any non-zero real number a.",
          "Law 5 (Negative Index): a^(-n) = 1 / (a^n) and (a/b)^(-n) = (b/a)^n. A negative power inverts the base fraction.",
          "Law 6 (Fractional Index): a^(1/n) = ⁿ√a and a^(m/n) = (ⁿ√a)^m = ⁿ√(a^m). The denominator of the fraction is the root, and the numerator is the power."
        ],
        "keyTakeaway": "Always compute roots before powers with fractional indices: (81/16)^(3/4) = [⁴√(81/16)]³ = (3/2)³ = 27/8.",
        "realWorldExample": "Computer storage scaling operates on powers of 2: 2^10 bytes = 1,024 bytes (1 Kilobyte), 2^20 bytes = 1 Megabyte, 2^30 bytes = 1 Gigabyte."
      },
      {
        "title": "4. Operations with Surds",
        "content": "A surd is an irrational root of a rational number whose value cannot be expressed exactly as a terminating fraction. In the BECE, candidates are tested on simplifying radicals and combining like surd terms.",
        "bulletPoints": [
          "Simplifying a Surd: Factorize the radicand into a product containing the largest possible perfect square (4, 9, 16, 25, 36, 49, 64, 81, 100). √(a × b) = √a × √b. E.g. √72 = √(36 × 2) = 6√2.",
          "Addition and Subtraction: Only LIKE surds (surds having identical radicands) can be added or subtracted: 5√3 + 2√3 = 7√3; 8√5 - 3√5 = 5√5. Unlike surds like √2 + √3 CANNOT be combined into √5!",
          "Multiplication: √a × √a = a; √a × √b = √(ab). E.g. 2√3 × 4√5 = (2 × 4)√(3 × 5) = 8√15.",
          "Conjugate Surds: (√a + √b)(√a - √b) = (√a)² - (√b)² = a - b. This property eliminates square roots from denominators."
        ],
        "keyTakeaway": "√a + √b NEVER equals √(a + b); √9 + √16 = 3 + 4 = 7, whereas √(9 + 16) = √25 = 5.",
        "realWorldExample": "Architects calculating diagonal rafter lengths using Pythagoras' Theorem c = √(a² + b²) express dimensions as exact surds (e.g. 4√2 m) before rounding."
      }
    ],
    "commonMistakes": [
      "Leaving standard form answers as 24 × 10^4 instead of normalizing to 2.4 × 10^5 (losing the final accuracy mark).",
      "Writing (a + b)^2 as a^2 + b^2 or confusing √a + √b with √(a + b).",
      "Dividing powers instead of subtracting during division: 2^8 ÷ 2^2 written incorrectly as 2^4 instead of 2^(8-2) = 2^6."
    ],
    "beceExamTips": [
      "In BECE Section B, always write out the substitution step explicitly before applying index laws to earn the method mark (M1).",
      "When inverting a fraction with a negative index, show (a/b)^(-n) = (b/a)^n on its own line of working.",
      "Double-check that surd answers are left in their simplest radical form a√b and never as unsimplified roots like √48."
    ],
    "summaryChecklist": [
      "I can classify any given real number as rational or irrational.",
      "I can convert decimals and large integers to standard form A × 10^n (1 ≤ A < 10).",
      "I know all 6 laws of indices and can evaluate fractional powers without a calculator.",
      "I can simplify surds like √50, √72, √108 into basic surd form a√b."
    ]
  },
  "jhs3-math-t2-algebra-expansion-factorization": {
    "topicId": "jhs3-math-t2-algebra-expansion-factorization",
    "title": "Algebraic Expressions: Expansion, Factorization & Quadratic Grouping",
    "overview": "Master binomial expansion, perfect square identities, four-term grouping, difference of two squares, and general quadratic factorization ax² + bx + c.",
    "introduction": "Algebraic factorization is the reverse process of bracket expansion. In JHS 3, algebra transitions from basic single-variable manipulation into quadratic polynomials. WAEC BECE examinations consistently allocate between 10 to 15 marks across Section A and Section B to factorization, algebraic fraction simplification, and binomial expansions.",
    "realWorldContext": "Engineers and economists use quadratic factorization to find breakeven production quantities where revenue equals cost and profit is zero.",
    "objectives": [
      "Expand binomial products of the form (ax + b)(cx + d) and recognize perfect square expansions (a ± b)².",
      "Factorize four-term algebraic expressions by systematic grouping in pairs.",
      "Apply the Difference of Two Squares identity a² - b² = (a - b)(a + b) to algebraic and numerical expressions.",
      "Factorize quadratic trinomials ax² + bx + c where a = 1 and a ≠ 1."
    ],
    "sections": [
      {
        "title": "1. Binomial Expansion & Perfect Squares",
        "content": "Expanding an algebraic expression means removing brackets by multiplying every term in the first bracket by every term in the second bracket using the distributive property.",
        "bulletPoints": [
          "The FOIL Method: (a + b)(c + d) = ac (First) + ad (Outside) + bc (Inside) + bd (Last).",
          "Distributive Rule: (2x + 3)(3x - 5) = 2x(3x - 5) + 3(3x - 5) = 6x² - 10x + 9x - 15 = 6x² - x - 15.",
          "Perfect Square Identities: (a + b)² = a² + 2ab + b² and (a - b)² = a² - 2ab + b².",
          "WAEC Chief Examiner Warning: Many candidates mistakenly write (x + 4)² = x² + 16, completely omitting the middle cross-product term 2(x)(4) = 8x! Always expand fully: (x + 4)² = x² + 8x + 16."
        ],
        "keyTakeaway": "(a + b)² has THREE terms: square first, twice the product, square last: a² + 2ab + b².",
        "realWorldExample": "A square plot of land of side x whose dimensions are expanded by 3 meters on each side has total area (x + 3)² = x² + 6x + 9 square meters."
      },
      {
        "title": "2. Factorization by Grouping in Pairs",
        "content": "When an algebraic expression contains four terms with no single factor common to all four, terms must be paired into two groups that each share a common factor.",
        "bulletPoints": [
          "General Structure: ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b).",
          "Handling Negative Signs: In 2ax - 3ay - 2bx + 3by, group as: a(2x - 3y) - b(2x - 3y). Factoring out -b reverses the internal sign from +3by to -3y! Result: (2x - 3y)(a - b).",
          "Rearranging Terms: If the first two terms share no obvious factor, rearrange terms first: e.g. 6ab - 2c + 3bc - 4a -> 6ab - 4a + 3bc - 2c = 2a(3b - 2) + c(3b - 2) = (3b - 2)(2a + c)."
        ],
        "keyTakeaway": "Ensure the two bracketed binomial expressions are identical before factoring out the common binomial.",
        "realWorldExample": "Surveyors calculating partitioned regional land parcels group composite rectangular areas into factorized product dimensions."
      },
      {
        "title": "3. Difference of Two Squares (DOTS)",
        "content": "Whenever an expression consists of the difference between two perfect squares, it factors into the product of their sum and their difference.",
        "bulletPoints": [
          "Fundamental Identity: a² - b² = (a - b)(a + b).",
          "Recognizing Coefficients: 4x² - 9y² = (2x)² - (3y)² = (2x - 3y)(2x + 3y).",
          "Two-Step Factorization (Removing Common Factors First): 2x² - 50 = 2(x² - 25) = 2(x - 5)(x + 5). Always factor out the HCF first!",
          "Rapid Mental Arithmetic with DOTS: Evaluate 95² - 5² without a calculator: (95 - 5)(95 + 5) = 90 × 100 = 9,000."
        ],
        "keyTakeaway": "Always check for a common numerical factor before applying the difference of two squares identity.",
        "realWorldExample": "The cross-sectional area of a hollow circular drainage pipe is πR² - πr² = π(R² - r²) = π(R - r)(R + r)."
      },
      {
        "title": "4. Factoring Quadratic Trinomials ax² + bx + c",
        "content": "Quadratic expressions are second-degree polynomials. Factorization decomposes them into two linear binomial factors.",
        "bulletPoints": [
          "Case 1: Leading Coefficient a = 1 (x² + bx + c): Find two integers p and q such that p × q = c and p + q = b. Then x² + bx + c = (x + p)(x + q). E.g. x² - 5x + 6: Factors of +6 that add to -5 are -2 and -3 -> (x - 2)(x - 3).",
          "Case 2: Leading Coefficient a ≠ 1 (ax² + bx + c):",
          "  1. Multiply a × c to find the target product (ac).",
          "  2. Find two factors whose product is (ac) and whose sum is the middle coefficient b.",
          "  3. Split the middle term bx into two terms using these factors.",
          "  4. Factorize the resulting four-term expression by grouping in pairs.",
          "Example: 3x² + 11x + 6. Product ac = 3 × 6 = 18. Factors of 18 adding to 11 are +9 and +2. Split: 3x² + 9x + 2x + 6 = 3x(x + 3) + 2(x + 3) = (x + 3)(3x + 2)."
        ],
        "keyTakeaway": "Splitting the middle term turns any quadratic trinomial into a four-term grouping problem.",
        "realWorldExample": "Rocket altitude trajectory equations h = -5t² + 20t + 25 factorize to find exact landing times when height h = 0."
      }
    ],
    "commonMistakes": [
      "Canceling terms across plus/minus signs in algebraic fractions: in (x + 3)/(x + 5), canceling x is mathematically illegal.",
      "Sign error when factoring out negative terms: in -4x - 8, writing -4(x - 2) instead of -4(x + 2).",
      "Failing to factor out a common monomial before applying DOTS, e.g., missing the common 3 in 3x² - 27."
    ],
    "beceExamTips": [
      "In BECE Section B questions requiring you to 'Factorize completely', verify your final factors by mentally expanding them back.",
      "When simplifying algebraic fractions, factorize BOTH the numerator and denominator completely on separate lines before crossing out common factors.",
      "Verify your factored quadratic by mentally expanding the factors using FOIL to ensure you get back the original expression."
    ],
    "summaryChecklist": [
      "I can expand binomial products using FOIL and remember that (a + b)² = a² + 2ab + b².",
      "I can factorize four-term expressions by grouping in pairs with correct signs.",
      "I can identify and factorize difference of two squares expressions like 16x² - 49.",
      "I can factorize quadratic trinomials where a = 1 and where a ≠ 1."
    ]
  },
  "jhs3-math-t3-linear-equations-inequalities": {
    "topicId": "jhs3-math-t3-linear-equations-inequalities",
    "title": "Linear Equations, Fractional Equations & Inequalities on Number Lines",
    "overview": "Master multi-step linear equations, equations containing algebraic fractions, real-world word modeling, and linear inequalities with number line graphs.",
    "introduction": "Linear equations and inequalities are core tools for mathematical modeling. In JHS 3, students move beyond simple one-step equations to complex relations involving brackets, fractions with numerical and variable denominators, and inequalities that require reverse direction when dividing by negative quantities.",
    "realWorldContext": "Budgeting school fees, mobile data packages, and calculating utility consumption at the Electricity Company of Ghana (ECG) rely on linear equations and inequalities.",
    "objectives": [
      "Solve linear equations with parentheses and algebraic fractions by clearing denominators with the LCM.",
      "Translate English word problems into mathematical linear equations and solve them with correct units.",
      "Solve linear inequalities in one variable and state their truth sets in set notation.",
      "Graph solution sets of linear inequalities accurately on the real number line using open and closed circles."
    ],
    "sections": [
      {
        "title": "1. Solving Multi-Step Linear Equations",
        "content": "A linear equation is an equation of the first degree (the highest power of the unknown variable is 1). Solving means finding the numerical value of the variable that makes the statement true.",
        "bulletPoints": [
          "Balancing Principle: Whatever operation is performed on one side of the equals sign must be performed identically on the other side.",
          "Clearing Brackets: Use the distributive property: a(bx + c) = abx + ac.",
          "Grouping Like Terms: Collect all terms containing the variable on one side (conventionally the LHS) and all constant numbers on the opposite side.",
          "Isolating the Variable: Divide both sides by the numerical coefficient of the variable."
        ],
        "keyTakeaway": "Always check your solution by substituting the value back into the original equation.",
        "realWorldExample": "A carpenter cutting a 120 cm timber plank into two pieces such that one is 20 cm longer than the other solves x + (x + 20) = 120."
      },
      {
        "title": "2. Equations with Algebraic Fractions",
        "content": "When linear equations involve fractions, attempting to add or subtract them with common denominators on each side is error-prone. The fastest, cleanest method is clearing all fractions at once.",
        "bulletPoints": [
          "Find the LCM of all denominators across BOTH sides of the equation.",
          "Multiply EVERY term on both sides by the LCM. This eliminates all denominators in a single step.",
          "Beware of the Minus Sign Preceding Fractions: In (3x - 1)/4 - (x - 2)/3 = 2, multiplying by 12 gives: 3(3x - 1) - 4(x - 2) = 24. The term -4(x - 2) expands to -4x + 8! A major WAEC failure point is writing -4x - 8.",
          "Equations with Variables in Denominator: (5/x) + 2 = 7 -> Multiply by x: 5 + 2x = 7x -> 5x = 5 -> x = 1 (x ≠ 0)."
        ],
        "keyTakeaway": "Multiply every single term on both sides by the LCM of all denominators; place brackets around multi-term numerators preceded by a minus sign.",
        "realWorldExample": "Pharmacists calculating dosage proportions use fractional linear relations to dilute concentrated medical solutions."
      },
      {
        "title": "3. Linear Inequalities in One Variable",
        "content": "An inequality compares two mathematical expressions using inequality symbols (<, >, ≤, ≥) rather than an equals sign.",
        "bulletPoints": [
          "Inequality Symbols: < (strictly less than), > (strictly greater than), ≤ (less than or equal to), ≥ (greater than or equal to).",
          "Properties of Inequalities: Adding or subtracting any real number preserves the inequality direction. Multiplying or dividing by a positive number preserves direction.",
          "CRITICAL WAEC THEOREM: Multiplying or dividing both sides by a NEGATIVE number REVERSES the inequality sign!",
          "Example: -3x ≤ 12 -> Divide by -3 -> x ≥ -4 (≤ flips to ≥).",
          "Writing Truth Sets: Formal set notation: {x : x ≥ -4}."
        ],
        "keyTakeaway": "Whenever you multiply or divide an inequality by a negative number, immediately flip the inequality symbol.",
        "realWorldExample": "Speed limits on Ghanaian highways state speed s ≤ 100 km/h; vehicle loads must satisfy weight w ≤ 30 tonnes."
      },
      {
        "title": "4. Number Line Representation of Inequalities",
        "content": "The solution to a linear inequality is an infinite set of real numbers that is visualized graphically along a standard horizontal coordinate axis.",
        "bulletPoints": [
          "Open Circle (○): Placed at boundary point a for strict inequalities x > a or x < a. Indicates that the boundary number a is EXCLUDED from the solution.",
          "Closed / Solid Circle (●): Placed at boundary point a for inclusive inequalities x ≥ a or x ≤ a. Indicates that the boundary number a is INCLUDED in the solution.",
          "Directional Arrow: Thick line and arrowhead extending to the right indicates > or ≥; arrow extending to the left indicates < or ≤.",
          "Combined / Double Inequalities: For -2 < x ≤ 5, draw an open circle at -2, a solid circle at 5, and connect them with a thick horizontal bar."
        ],
        "keyTakeaway": "Solid circle for ≤ and ≥ (points included); open circle for < and > (points excluded).",
        "realWorldExample": "Thermostats regulating cocoa drying warehouses maintain temperature in the interval 35°C ≤ T ≤ 45°C."
      }
    ],
    "commonMistakes": [
      "Forgetting to reverse the inequality sign when dividing or multiplying by a negative number (e.g. -2x < 8 -> x < -4 instead of x > -4).",
      "Sign error when expanding brackets preceded by a minus sign: -(x - 5) expanding to -x - 5 instead of -x + 5.",
      "Drawing a solid dot instead of an open circle on a number line for strict inequalities (< or >)."
    ],
    "beceExamTips": [
      "Always state the truth set formally as {x : x > 3} or {x : x ∈ ℝ, x ≤ -2} to secure the final independent B1 mark.",
      "Draw your number line with a sharp pencil and straight ruler, with equal spacing between integer graduations.",
      "When drawing inequality number lines, use an open hollow circle for strict inequalities (< or >) and a solid closed circle for inclusive inequalities (≤ or ≥)."
    ],
    "summaryChecklist": [
      "I can solve multi-step linear equations with brackets.",
      "I know how to clear fractional denominators using the LCM.",
      "I remember to flip the inequality sign when dividing by a negative number.",
      "I can accurately graph open and solid circles on a number line."
    ]
  },
  "jhs3-math-t4-simultaneous-equations": {
    "topicId": "jhs3-math-t4-simultaneous-equations",
    "title": "Simultaneous Linear Equations: Substitution, Elimination & Graphical Methods",
    "overview": "Master systems of two linear equations with two unknowns using elimination, substitution, and graphical intersection methods, including commercial word problems.",
    "introduction": "In real-life scenarios, decisions often involve two or more constraints acting at the same time. Simultaneous linear equations require candidates to find values of two unknowns that satisfy two conditions concurrently. In the BECE, simultaneous equations appear in both Section A (rapid algebraic solutions) and Section B (graph plotting and contextual word problems).",
    "realWorldContext": "Market women and wholesale distributors in Kejetia Market set prices and determine purchase combinations of commodities (e.g. bags of rice and gallons of cooking oil) through simultaneous constraints.",
    "objectives": [
      "Solve simultaneous linear equations in two variables using the elimination method.",
      "Solve simultaneous linear equations in two variables using the substitution method.",
      "Construct coordinate tables and solve simultaneous linear equations graphically on Cartesian graph paper.",
      "Formulate and solve real-world word problems using systems of simultaneous equations."
    ],
    "sections": [
      {
        "title": "1. The Elimination Method",
        "content": "The elimination method eliminates one variable by adding or subtracting the two equations after equalizing the absolute value of the variable's coefficients.",
        "bulletPoints": [
          "Step 1: Choose which variable (x or y) is easiest to eliminate.",
          "Step 2: Multiply one or both equations by suitable non-zero constants so the chosen variable has equal coefficients.",
          "Step 3: If the signs of the matching coefficients are the SAME, SUBTRACT the equations. If the signs are OPPOSITE, ADD the equations.",
          "Step 4: Solve the resulting single-variable equation.",
          "Step 5: Substitute the obtained value back into either original equation to find the second variable.",
          "Step 6: Verify by substituting both values into the OTHER original equation."
        ],
        "keyTakeaway": "Same signs -> Subtract (SSS); Opposite signs -> Add (OSA).",
        "realWorldExample": "If 2 shirts and 3 ties cost GH₵ 190, and 4 shirts and 3 ties cost GH₵ 310, subtracting directly eliminates ties, revealing 2 shirts = GH₵ 120."
      },
      {
        "title": "2. The Substitution Method",
        "content": "The substitution method isolates one variable in one equation and substitutes its equivalent algebraic expression into the other equation.",
        "bulletPoints": [
          "When to Use: Most efficient when one variable already has a coefficient of 1 or -1 (e.g. x + 3y = 7 or 2x - y = 5).",
          "Step 1: Make that variable the subject of the formula (e.g. x = 7 - 3y).",
          "Step 2: Substitute (7 - 3y) in place of x in the SECOND equation. Never substitute back into the same equation you just rearranged!",
          "Step 3: Solve the resulting linear equation for y.",
          "Step 4: Substitute the value of y into your rearranged formula to find x."
        ],
        "keyTakeaway": "Always substitute into the OTHER equation to prevent circular identities like 7 = 7.",
        "realWorldExample": "A taxi driver calculating earnings where one component is a fixed daily booking fee plus a variable rate per kilometer."
      },
      {
        "title": "3. The Graphical Method on Cartesian Axes",
        "content": "Every linear equation ax + by = c represents a straight line on the Cartesian plane. The simultaneous solution corresponds to the point of intersection of the two straight lines.",
        "bulletPoints": [
          "Step 1: For each equation, generate a table of values with at least 3 points (2 points to draw line, 1 point to check alignment).",
          "Step 2: Choose suitable intercepts: when x = 0 (find y-intercept) and when y = 0 (find x-intercept).",
          "Step 3: Draw x and y axes on graph paper using the specified WAEC scale (e.g. 2 cm to 1 unit on both axes).",
          "Step 4: Plot points with sharp small crosses (+) or circled dots (⊙) and rule straight lines through them extending across the grid.",
          "Step 5: Label each line with its equation.",
          "Step 6: Locate the intersection point (x₀, y₀). Read coordinates and state: 'The solution is x = x₀, y = y₀'."
        ],
        "keyTakeaway": "The coordinates of the intersection point (x, y) represent the unique simultaneous solution.",
        "realWorldExample": "In business economics, plotting the Cost Line and Revenue Line shows the exact breakeven sales volume at their intersection."
      },
      {
        "title": "4. Modeling Word Problems with Simultaneous Equations",
        "content": "Many BECE Section B questions present word problems requiring students to create their own simultaneous equations before solving.",
        "bulletPoints": [
          "Assign Clear Variables: State 'Let x = cost of one book in GH₵' and 'Let y = cost of one pen in GH₵'.",
          "Translate Statements Line by Line:",
          "  * 'The sum of two numbers is 45': x + y = 45.",
          "  * 'Their difference is 11': x - y = 11.",
          "  * 'Kofi is twice as old as Ama': K = 2A.",
          "  * 'In 5 years time, Kofi will be...': (K + 5) = ...",
          "Solve algebraically and always state final answers in plain English with appropriate units (e.g. 'One book costs GH₵ 15.00')."
        ],
        "keyTakeaway": "Always write variable declarations first and attach units (GH₵, kg, years) to final answers.",
        "realWorldExample": "A cocoa farmer mixing two grades of fertilizer to achieve a target nitrogen-phosphorus percentage."
      }
    ],
    "commonMistakes": [
      "Substituting the isolated variable expression back into the same equation it was derived from, resulting in 0 = 0.",
      "Sign errors when subtracting simultaneous equations: e.g. (2y) - (-3y) evaluated as -y instead of +5y.",
      "Plotting only 2 points for a line on graph paper; if one point is miscalculated, the line is drawn with an incorrect slope."
    ],
    "beceExamTips": [
      "In BECE Section B, state both values explicitly at the end: 'x = 3, y = -2'. Never leave answers buried in your working.",
      "When drawing graphs, always write the scale at the top-right corner of the graph sheet (e.g. 'Scale: 2 cm to 1 unit on both axes').",
      "Substitute your solved values of x and y into BOTH original equations during the exam to verify correctness before moving to the next question."
    ],
    "summaryChecklist": [
      "I can solve simultaneous equations using elimination (adding or subtracting).",
      "I can solve simultaneous equations using algebraic substitution.",
      "I can plot two linear equations on Cartesian axes and read their intersection coordinates.",
      "I can translate practical word problems into simultaneous equation models."
    ]
  },
  "jhs3-math-t5-quadratic-equations": {
    "topicId": "jhs3-math-t5-quadratic-equations",
    "title": "Quadratic Equations: Solution by Factorization & Parabolic Graphs",
    "overview": "Master solving quadratic equations ax² + bx + c = 0 by factorization (zero product principle), constructing quadratic tables of values, and reading roots and turning points from parabolas.",
    "introduction": "Quadratic equations are second-degree polynomial equations where the highest power of the variable is 2. In JHS 3, candidates must master two complementary methods of solution: algebraic factorization using the zero-product rule and graphical solution on Cartesian graph sheets where the resulting parabola intersects the x-axis.",
    "realWorldContext": "The trajectory of a kicked football in a football match, the arch of Adomi Bridge across the Volta River, and satellite dish curvatures follow parabolic quadratic curves.",
    "objectives": [
      "Rearrange quadratic equations into standard form ax² + bx + c = 0.",
      "Solve quadratic equations using the method of factorization and the zero product principle.",
      "Generate tables of values for quadratic functions y = ax² + bx + c over specified domains.",
      "Plot smooth parabolic curves on graph paper and read the roots, turning point, and axis of symmetry."
    ],
    "sections": [
      {
        "title": "1. Standard Form & The Zero Product Principle",
        "content": "A quadratic equation must always be rearranged into standard form ax² + bx + c = 0 before attempting factorization.",
        "bulletPoints": [
          "Standard Form: ax² + bx + c = 0 where a ≠ 0.",
          "The Zero Product Principle: If the product of two real numbers is zero (A × B = 0), then at least one of the factors must be zero: A = 0 or B = 0.",
          "FATAL ERROR TO AVOID: If x² = 6x, NEVER divide both sides by x! Dividing by x loses the root x = 0. Instead: x² - 6x = 0 -> x(x - 6) = 0 -> x = 0 or x = 6.",
          "If an equation is written as (x - 2)(x + 3) = 14, you CANNOT set x - 2 = 14! The RHS must be zero. First expand: x² + x - 6 = 14 -> x² + x - 20 = 0 -> (x + 5)(x - 4) = 0 -> x = -5, 4."
        ],
        "keyTakeaway": "The zero-product rule works ONLY when the product equals zero; clear all terms to one side first.",
        "realWorldExample": "A projectile fired into the air with height h = 40t - 5t² lands when height h = 0: 5t(8 - t) = 0, giving launch t = 0s and landing t = 8s."
      },
      {
        "title": "2. Solving ax² + bx + c = 0 by Factorization",
        "content": "Factorization converts the quadratic trinomial on the LHS into two linear factors.",
        "bulletPoints": [
          "Step 1: Rearrange equation so RHS = 0.",
          "Step 2: Find two numbers whose product is (a × c) and whose sum is b.",
          "Step 3: Split the middle term bx into two terms using these numbers.",
          "Step 4: Factorize by grouping in pairs into (px + q)(rx + s) = 0.",
          "Step 5: Set each factor equal to zero: px + q = 0  => x = -q/p; rx + s = 0  => x = -s/r.",
          "Step 6: State both roots clearly. (Quadratic equations always have two roots, which may be distinct, equal, or complex)."
        ],
        "keyTakeaway": "Every quadratic equation produces two roots; state both roots clearly in your final answer line.",
        "realWorldExample": "A rectangular garden whose length is 3 m longer than its width has area 40 m²: w(w + 3) = 40 -> w² + 3w - 40 = 0 -> (w + 8)(w - 5) = 0 -> width = 5 m (rejecting -8 m)."
      },
      {
        "title": "3. Generating Tables of Values for Quadratic Functions",
        "content": "When plotting quadratic graphs in BECE Section B, examiners provide a specified domain (e.g. -3 ≤ x ≤ 4) and require candidates to complete a table of values.",
        "bulletPoints": [
          "Computing Terms Systematically: For y = 2x² - 3x - 5, create separate working rows for 2x², -3x, and -5.",
          "Watch Negative Squares: (-3)² = +9, NOT -9! A common pitfall is calculating -3² = -9.",
          "Symmetry in Values: A quadratic table displays symmetry about its vertex. If values fail to show a turning point, re-check arithmetic calculations.",
          "Table Layout: Always present the table neatly with columns for each integer x in the domain."
        ],
        "keyTakeaway": "(-x)² is always POSITIVE; calculate (-3)² as +9 when evaluating 2x²."
      },
      {
        "title": "4. Plotting Parabolas & Reading Graphical Features",
        "content": "A quadratic graph is a smooth symmetrical U-shaped or ∩-shaped curve called a parabola.",
        "bulletPoints": [
          "Parabola Orientation: If a > 0, curve opens UPWARD (U-shape) with a Minimum turning point. If a < 0, curve opens DOWNWARD (∩-shape) with a Maximum turning point.",
          "Plotting Curve: Plot points using sharp small crosses (x). Connect points with a single, smooth, continuous curve drawn FREEHAND. NEVER use a ruler to connect parabola points!",
          "Reading Roots: The roots of ax² + bx + c = 0 are the x-intercepts where the curve crosses the x-axis (where y = 0).",
          "Line of Symmetry: The vertical line passing through the apex: equation x = -b / (2a).",
          "Turning Point (Vertex): The point of minimum or maximum value: coordinates (x_v, y_v)."
        ],
        "keyTakeaway": "Never join parabola points with straight ruler lines; WAEC penalizes ruler-drawn segments heavily.",
        "realWorldExample": "Automobile headlight reflectors are parabolic mirrors that direct bulb light rays into a parallel beam forward."
      }
    ],
    "commonMistakes": [
      "Dividing both sides by the variable x in equations like 3x² = 12x, eliminating the root x = 0.",
      "Connecting points on a quadratic graph with straight ruler lines instead of a smooth curve.",
      "Miscalculating negative numbers squared in tables of values: (-2)² written as -4 instead of +4."
    ],
    "beceExamTips": [
      "In BECE Section B graph questions, use a sharp pencil and draw the curve in one confident, unbroken freehand stroke.",
      "When asked for the equation of the line of symmetry, write 'x = 2' (an equation), not just the number '2'.",
      "On graph papers, read roots from the x-axis where the parabola cuts y = 0, and state coordinates clearly as ordered pairs (x, y)."
    ],
    "summaryChecklist": [
      "I know that ax² + bx + c = 0 must equal zero before applying the zero product rule.",
      "I can solve quadratic equations by splitting the middle term and factoring.",
      "I can accurately complete a table of values without squaring errors.",
      "I can plot a smooth parabola and read the roots, turning point, and axis of symmetry."
    ]
  },
  "jhs3-math-t6-change-of-subject": {
    "topicId": "jhs3-math-t6-change-of-subject",
    "title": "Change of Subject of Formulae (Radicals, Fractions & Powers)",
    "overview": "Master isolating target variables in complex mathematical and physical formulae involving fractions, radicals, powers, and factored expressions.",
    "introduction": "In science and technical subjects, formulas are rarely used in just one standard form. A physicist calculating acceleration from v = u + at or a technician determining resistance from Ohm's Law must rearrange formulas quickly. In the BECE, change of subject questions test inverse operations, factorization, and algebraic manipulation.",
    "realWorldContext": "Engineers rearrange Ohm's Law V = IR to calculate current I = V/R, and GPS satellites rearrange spherical distance relations to triangulate user coordinates.",
    "objectives": [
      "Apply inverse operations systematically to isolate any specified variable.",
      "Rearrange formulae involving algebraic fractions by clearing denominators.",
      "Eliminate square roots by squaring and eliminate squares by taking square roots.",
      "Group and factor out the target variable when it appears in multiple terms."
    ],
    "sections": [
      {
        "title": "1. The Concept of Subject of a Formula",
        "content": "A formula is an algebraic equation connecting two or more real-world quantities. The subject is the variable that stands alone on the LHS with coefficient +1 and power 1.",
        "bulletPoints": [
          "Criteria for Subject: (1) Appears on the LHS alone, (2) Has a coefficient of positive 1, (3) Does not appear anywhere on the RHS.",
          "Inverse Operations Principle: Undo additions with subtraction, undo multiplications with division, undo squares with square roots, and undo square roots with squaring.",
          "Reverse Order of Operations (SADMEP): When isolating a variable, peel away outer operations first: Subtraction/Addition -> Division/Multiplication -> Exponents -> Parentheses."
        ],
        "keyTakeaway": "Change of subject is the systematic application of inverse operations in reverse BIDMAS order.",
        "realWorldExample": "Area of a circle A = πr² rearranged to find radius required for a circular reservoir: r = √(A / π)."
      },
      {
        "title": "2. Formulae Containing Algebraic Fractions",
        "content": "Fractions in formulae are cleared by multiplying every term by the common denominator or through cross-multiplication when two single fractions are equal.",
        "bulletPoints": [
          "Cross-Multiplication: If a/b = c/d, then a × d = b × c.",
          "Clearing Complex Denominators: If 1/f = 1/u + 1/v (Lens Formula), multiply all terms by the LCM (uvf): uv = vf + uf.",
          "Isolating Target: To make f the subject: uv = f(v + u) -> f = uv / (u + v).",
          "Avoid Splitting Inverted Denominators: 1/(a + b) does NOT equal 1/a + 1/b!"
        ],
        "keyTakeaway": "Multiply by the LCM of all denominators to turn fractional relations into linear equations.",
        "realWorldExample": "In electrical circuits, the parallel resistor formula 1/R_t = 1/R₁ + 1/R₂ is rearranged to R_t = (R₁R₂) / (R₁ + R₂)."
      },
      {
        "title": "3. Formulae with Square Roots and Powers",
        "content": "Radicals and powers require squaring both sides or taking roots after the radical expression has been completely isolated on one side.",
        "bulletPoints": [
          "Isolating the Radical First: In T = 2π√(L/g), do NOT square immediately. First divide by 2π: T/(2π) = √(L/g).",
          "Squaring Both Sides: [T/(2π)]² = L/g -> T²/(4π²) = L/g.",
          "Cross-Multiply and Solve for g: gT² = 4π²L -> g = (4π²L) / T².",
          "Common Error: In y = √(x) + 3, squaring both sides does NOT give y² = x + 9! You must isolate √(x) first: y - 3 = √(x) -> x = (y - 3)²."
        ],
        "keyTakeaway": "Always isolate the square root expression on one side before squaring both sides.",
        "realWorldExample": "Kinetic energy E = (1/2)mv² rearranged to find collision speed: v = √(2E / m)."
      },
      {
        "title": "4. Factoring when Target Variable Appears Twice",
        "content": "A common high-yield BECE question features the target variable appearing in both the numerator and denominator.",
        "bulletPoints": [
          "Example: Make x the subject of y = (2x + 1) / (x - 3).",
          "Step 1: Cross-multiply: y(x - 3) = 2x + 1.",
          "Step 2: Expand bracket: yx - 3y = 2x + 1.",
          "Step 3: Group terms with target variable x on LHS: yx - 2x = 3y + 1.",
          "Step 4: Factor out x: x(y - 2) = 3y + 1.",
          "Step 5: Divide by the bracketed cofactor: x = (3y + 1) / (y - 2)."
        ],
        "keyTakeaway": "Group all terms containing the target variable on one side and factor out the common variable.",
        "realWorldExample": "Economists solving for market equilibrium price P where supply and demand functions share rational terms."
      }
    ],
    "commonMistakes": [
      "Squaring both sides of an equation without isolating the square root first (e.g. squaring a = b + √c as a² = b² + c).",
      "Leaving the target variable on both sides of the final formula (e.g. x = 2x + 5y / 3).",
      "Forgetting to square coefficients outside the radical: [2π]² becoming 2π² instead of 4π²."
    ],
    "beceExamTips": [
      "Ensure the final subject is written on the Left-Hand Side (LHS) with a positive coefficient of 1.",
      "Check your algebraic rearrangement by substituting simple test numbers into both the original and rearranged formula.",
      "When removing square roots by squaring both sides, ensure the entire side is enclosed in brackets before applying the power."
    ],
    "summaryChecklist": [
      "I can rearrange linear formulae using inverse operations.",
      "I know how to clear fractions by cross-multiplying or using the LCM.",
      "I always isolate a radical term before squaring both sides.",
      "I can factor out the target variable when it appears in multiple terms."
    ]
  },
  "jhs3-math-t7-business-math": {
    "topicId": "jhs3-math-t7-business-math",
    "title": "Business Mathematics: Profit/Loss, Discount, VAT, Interest & Depreciation",
    "overview": "Master commercial mathematics: percentage profit and loss, trade and cash discount, Value Added Tax (VAT), Simple and Compound Interest, and asset depreciation.",
    "introduction": "Business mathematics connects classroom calculations with commercial reality. In JHS 3, students master the financial principles that govern banking, commerce, and retail in Ghana. BECE examiners regularly test multi-step financial calculations involving profit margins on cost price, compound investments, and Ghana Revenue Authority (GRA) tax models.",
    "realWorldContext": "Ghanaian business owners calculate VAT returns for the GRA, evaluate bank loan terms from GCB Bank, and compute annual asset depreciation on delivery trucks.",
    "objectives": [
      "Calculate cost price, selling price, profit, loss, and percentage profit/loss on cost price.",
      "Compute trade discount, cash discount, and final selling prices with Value Added Tax (VAT).",
      "Calculate Simple Interest (I = PRT / 100) and Total Amount repayable for diverse time units.",
      "Compute Compound Interest period-by-period and calculate asset depreciation over time."
    ],
    "sections": [
      {
        "title": "1. Profit, Loss & Percentage Margins",
        "content": "Commercial transactions depend on the relationship between the Cost Price (CP)—what the merchant pays—and the Selling Price (SP)—what the consumer pays.",
        "bulletPoints": [
          "Profit = Selling Price - Cost Price (when SP > CP).",
          "Loss = Cost Price - Selling Price (when CP > SP).",
          "CRITICAL RULE: Percentage profit or loss is ALWAYS calculated relative to the COST PRICE (CP), never the selling price: % Profit = (Profit / CP) × 100%; % Loss = (Loss / CP) × 100%.",
          "Finding SP from CP: SP = CP × [(100 + % Profit) / 100].",
          "Finding CP from SP: CP = [SP × 100] / [100 + % Profit]. E.g. If an item is sold for GH₵ 230 at 15% profit, CP = (230 × 100) / 115 = GH₵ 200."
        ],
        "keyTakeaway": "Cost Price is always the 100% baseline when calculating commercial profit or loss percentages.",
        "realWorldExample": "A trader buying a bag of sugar for GH₵ 800 and selling it for GH₵ 960 makes a profit of GH₵ 160, which is (160/800) × 100% = 20% profit."
      },
      {
        "title": "2. Discounts & Value Added Tax (VAT)",
        "content": "Retailers use discounts to stimulate sales, while governments levy consumption taxes on transactions.",
        "bulletPoints": [
          "Marked Price: The catalogue or sticker price displayed on an item.",
          "Trade Discount: A percentage deduction granted by wholesalers to retailers.",
          "Cash Discount: An immediate price reduction given for prompt cash payment: Discount = Marked Price × (% Discount / 100).",
          "Net Price = Marked Price - Discount.",
          "Value Added Tax (VAT): An ad valorem consumption tax collected by businesses on behalf of the Ghana Revenue Authority (GRA): VAT Amount = Taxable Value × (VAT Rate / 100).",
          "Final Consumer Price = Net Price + VAT Amount."
        ],
        "keyTakeaway": "Discounts are subtracted from marked price; VAT is added to net price to determine the total cash payable.",
        "realWorldExample": "A laptop marked GH₵ 5,000 with a 10% student discount costs GH₵ 4,500. Adding 15% VAT (GH₵ 675) yields a final price of GH₵ 5,175."
      },
      {
        "title": "3. Simple Interest (I = PRT / 100)",
        "content": "Simple interest is the fixed fee paid for borrowing money or earned on deposited savings, calculated strictly on the initial principal throughout the loan duration.",
        "bulletPoints": [
          "Formula: I = (P × R × T) / 100.",
          "Principal (P): Initial sum of money invested or borrowed (in Ghana Cedis).",
          "Rate (R): Percentage interest rate charged per annum (per year).",
          "Time (T): Duration strictly in YEARS. If time is given in months, divide by 12 (e.g. 9 months = 9/12 = 0.75 years). If given in days, divide by 365.",
          "Total Amount (A): The complete sum accumulated or repaid: A = P + I = P(1 + RT/100)."
        ],
        "keyTakeaway": "Always convert time T into years before substituting values into the simple interest formula.",
        "realWorldExample": "A farmer borrowing GH₵ 4,000 for 18 months (1.5 years) at 10% per annum pays interest I = (4000 × 10 × 1.5)/100 = GH₵ 600."
      },
      {
        "title": "4. Compound Interest & Asset Depreciation",
        "content": "In compound interest, interest earned at the end of each compounding period is added to the principal, so subsequent interest earns interest.",
        "bulletPoints": [
          "Step-by-Step Method: Year 1: I₁ = (P × R × 1)/100 -> A₁ = P + I₁. Year 2: I₂ = (A₁ × R × 1)/100 -> A₂ = A₁ + I₂. Compound Interest = A₂ - P.",
          "Compound Interest Formula: A = P(1 + R/100)^n; CI = A - P.",
          "Depreciation: The decline in monetary value of physical machinery, motor vehicles, or electronics over time: Depreciated Value = P(1 - R/100)^n.",
          "Difference between CI and Depreciation: CI adds value (+) each year; Depreciation subtracts value (-) each year."
        ],
        "keyTakeaway": "Compound interest grows exponentially (plus sign); depreciation decays exponentially (minus sign).",
        "realWorldExample": "A commercial delivery motorcycle purchased for GH₵ 12,000 that depreciates at 15% per annum is worth GH₵ 12,000 × (0.85)² = GH₵ 8,670 after 2 years."
      }
    ],
    "commonMistakes": [
      "Calculating percentage profit using the selling price as the denominator instead of the cost price.",
      "Substituting time in months directly into the interest formula without dividing by 12.",
      "Confusing Simple Interest (I) with the Total Amount (A = P + I)."
    ],
    "beceExamTips": [
      "Always state currency units (GH₵ or GHS) alongside every intermediate financial step to avoid losing accuracy marks.",
      "When calculating compound interest step-by-step, clearly label Year 1 Interest, Year 1 Amount, Year 2 Interest, Year 2 Amount.",
      "Always convert time given in months into years by dividing by 12 (e.g. 9 months = 9/12 = 0.75 years) before substituting into I = PRT / 100."
    ],
    "summaryChecklist": [
      "I know that % profit and % loss are always calculated on the Cost Price.",
      "I can calculate cash discounts and VAT on retail purchases.",
      "I can calculate Simple Interest and remember to convert months to years.",
      "I can calculate Compound Interest and asset depreciation step-by-step."
    ]
  },
  "jhs3-math-t8-ratios-proportions-rates": {
    "topicId": "jhs3-math-t8-ratios-proportions-rates",
    "title": "Ratio, Direct/Inverse Proportion, Proportional Division & Rates",
    "overview": "Master sharing quantities in given ratios, direct variation, inverse variation, map scale representations, and rates of work and average speed.",
    "introduction": "Ratios compare quantities of the same dimension, while rates compare quantities of different dimensions (such as distance over time). In JHS 3, students apply proportional reasoning to divide estate inheritances, solve multi-worker construction tasks, read architectural map scales, and calculate non-uniform journey speeds.",
    "realWorldContext": "Cocoa farmers blend pesticides in strict water ratios, civil engineers mix cement, sand, and gravel in 1:2:4 ratios for concrete, and navigators calculate driving times across Ghana.",
    "objectives": [
      "Divide quantities into proportional shares given two-part and three-part ratios.",
      "Solve direct proportion problems where y = kx and inverse proportion problems where xy = k.",
      "Calculate real distances and map measurements using representative fraction scales (1 : n).",
      "Calculate rates of work and determine average speed over multi-stage journeys."
    ],
    "sections": [
      {
        "title": "1. Ratio & Proportional Division",
        "content": "A ratio is a comparison of two or more quantities of the same kind measured in identical units, expressed in simplest form without units.",
        "bulletPoints": [
          "Simplifying Ratios: Convert all quantities to the same unit first: 50 cm to 2 m = 50 cm : 200 cm = 1 : 4.",
          "Algorithm for Proportional Division:",
          "  1. Sum all ratio parts: Total Parts = a + b + c.",
          "  2. Find the value of one part: Unit Value = Total Quantity / Total Parts.",
          "  3. Multiply unit value by each respective ratio part.",
          "Difference Between Shares: If the difference between two shares is given, divide the cash difference by the difference in ratio parts to find the unit value."
        ],
        "keyTakeaway": "Always check that the sum of the individual calculated shares equals the total original quantity.",
        "realWorldExample": "An inheritance of GH₵ 60,000 shared among three children in ratio 2 : 3 : 5 gives 10 parts, so 1 part = GH₵ 6,000. Shares are GH₵ 12,000, GH₵ 18,000, and GH₵ 30,000."
      },
      {
        "title": "2. Direct vs Inverse Proportion",
        "content": "Proportion describes the functional relationship between two changing quantities.",
        "bulletPoints": [
          "Direct Proportion (y ∝ x): As x increases, y increases at a constant rate: y = kx  =>  k = y/x.",
          "Direct Proportion Rule: y₁ / x₁ = y₂ / x₂. Examples: Cost of fuel vs liters purchased; distance travelled vs time at constant speed.",
          "Inverse Proportion (y ∝ 1/x): As x increases, y decreases proportionally: y = k/x  =>  x × y = k.",
          "Inverse Proportion Rule: x₁ × y₁ = x₂ × y₂. Examples: Number of laborers vs days to weed a farm; speed of vehicle vs time taken for a fixed trip."
        ],
        "keyTakeaway": "Direct proportion: ratios are equal (y₁/x₁ = y₂/x₂); Inverse proportion: products are equal (x₁y₁ = x₂y₂).",
        "realWorldExample": "If 8 masons take 12 days to build a classroom wall (8 × 12 = 96 mason-days), then 16 masons will take 96 / 16 = 6 days."
      },
      {
        "title": "3. Scale Drawings & Representative Fractions",
        "content": "Map scales express the proportional reduction of real geographic distances onto flat drawing paper.",
        "bulletPoints": [
          "Representative Fraction (RF): Scale = Map Distance / Ground Distance.",
          "Scale 1 : 50,000 means 1 cm on the map represents 50,000 cm on the ground.",
          "Converting Ground Distances: 50,000 cm = 500 m = 0.5 km. Thus, 1 cm on the map represents 0.5 km in reality.",
          "Area Scale Factor: If linear scale is 1 : n, the area scale is 1 : n². E.g. If 1 cm represents 2 km, 1 cm² on the map represents 2² = 4 km² on the ground."
        ],
        "keyTakeaway": "Linear scale = 1 : n; Area scale = 1 : n²; convert units carefully (1 km = 100,000 cm).",
        "realWorldExample": "On a 1 : 25,000 survey map of Accra, a 4 cm road length represents 4 × 25,000 cm = 100,000 cm = 1 km."
      },
      {
        "title": "4. Rates of Work & Average Speed",
        "content": "Rates express the speed at which work is performed or distance is covered over time.",
        "bulletPoints": [
          "Rate of Work: If Pipe A fills a tank in 4 hours, its rate is 1/4 tank per hour. If Pipe B fills it in 6 hours, combined rate is 1/4 + 1/6 = 5/12 tank per hour. Time together = 12/5 = 2.4 hours.",
          "Speed Formula: Speed = Distance / Time.",
          "Unit Conversion: km/h to m/s: Multiply by 5/18 (e.g. 72 km/h = 72 × 5/18 = 20 m/s). m/s to km/h: Multiply by 18/5.",
          "Average Speed Rule: Average Speed = (Total Distance Covered) / (Total Time Elapsed).",
          "CRITICAL WAEC WARNING: Never average two speeds! If a car travels to Cape Coast at 60 km/h and returns at 40 km/h, the average speed is NOT 50 km/h; it is 48 km/h!"
        ],
        "keyTakeaway": "Average speed is strictly Total Distance divided by Total Time; never average speed numbers directly.",
        "realWorldExample": "A bus traveling 120 km in 2 hours and then 180 km in 3 hours covers 300 km in 5 hours: Average Speed = 300 / 5 = 60 km/h."
      }
    ],
    "commonMistakes": [
      "Averaging speeds directly: (60 + 40)/2 = 50 km/h instead of using Total Distance / Total Time.",
      "Treating inverse worker-time problems as direct proportion (e.g. thinking more workers take more days).",
      "Using linear scale directly for area conversions instead of squaring the scale factor."
    ],
    "beceExamTips": [
      "In ratio sharing, show the 'Sum of parts' calculation explicitly to secure the method mark (M1).",
      "When converting km/h to m/s, show the multiplication by 1,000/3,600 or 5/18.",
      "Check that parts in ratio problems sum up to the total original quantity to avoid losing accuracy marks."
    ],
    "summaryChecklist": [
      "I can divide a quantity into shares given any ratio.",
      "I can solve direct (y₁/x₁ = y₂/x₂) and inverse (x₁y₁ = x₂y₂) proportion problems.",
      "I can interpret map scales and square the scale factor for area calculations.",
      "I know how to calculate average speed by dividing total distance by total time."
    ]
  },
  "jhs3-math-t9-vectors-bearings": {
    "topicId": "jhs3-math-t9-vectors-bearings",
    "title": "Vectors & Bearings (Column Vectors, Modulus & 3-Figure Bearings)",
    "overview": "Master 2D column vector operations, magnitude calculations using Pythagoras, position vectors, and navigating journeys with 3-figure bearings.",
    "introduction": "Vectors and bearings represent direction and distance in two dimensions. In JHS 3, students integrate Pythagoras' Theorem and geometric angle properties to analyze displacement vectors and plot multi-stage navigation bearings. This topic is guaranteed to appear in BECE Section B as a major structured question.",
    "realWorldContext": "Aviation pilots flying into Kotoka International Airport and naval captains docking at Tema Harbour navigate using exact 3-figure radar bearings and vector heading adjustments.",
    "objectives": [
      "Represent vectors as column vectors [x, y] and perform addition, subtraction, and scalar multiplication.",
      "Calculate the magnitude (modulus) of a vector using |u| = √(x² + y²).",
      "Interpret and measure 3-figure bearings from True North in a clockwise direction (000° to 360°).",
      "Calculate forward and back bearings and solve multi-leg vector journey problems."
    ],
    "sections": [
      {
        "title": "1. Column Vectors & Algebraic Operations",
        "content": "A vector is a mathematical quantity possessing both magnitude (size) and direction. In 2D coordinate geometry, vectors are written in column form.",
        "bulletPoints": [
          "Column Vector Form: u = [x, y], where x is the horizontal component (+ve right, -ve left) and y is the vertical component (+ve up, -ve down).",
          "Vector Addition: [x₁, y₁] + [x₂, y₂] = [x₁ + x₂, y₁ + y₂].",
          "Vector Subtraction: [x₁, y₁] - [x₂, y₂] = [x₁ - x₂, y₁ - y₂].",
          "Scalar Multiplication: k[x, y] = [kx, ky]. The scalar k scales the length without altering the line of action (if k < 0, direction reverses).",
          "Zero Vector: 0 = [0, 0]."
        ],
        "keyTakeaway": "Vector addition and scalar multiplication operate independently on horizontal and vertical components.",
        "realWorldExample": "A drone flying 4 km East and 3 km North has displacement vector [4, 3]."
      },
      {
        "title": "2. Position Vectors & Displacement",
        "content": "A position vector defines the location of a point in space relative to the fixed origin O(0, 0).",
        "bulletPoints": [
          "Position Vector: If point A has coordinates (x, y), its position vector is OA = a = [x, y].",
          "Displacement Vector AB: To move from point A to point B: AB = OB - OA = b - a = [x₂ - x₁, y₂ - y₁].",
          "Vector Triangle Rule: OA + AB = OB  =>  AB = OB - OA.",
          "Parallel Vectors: Vector u is parallel to vector v if u = kv for some non-zero scalar k. If two parallel vectors share a common point, the points are collinear."
        ],
        "keyTakeaway": "Vector AB always equals Terminal position vector OB minus Initial position vector OA: AB = b - a.",
        "realWorldExample": "If Accra is at (2, 3) and Kumasi is at (-1, 8), the travel displacement vector is [-1 - 2, 8 - 3] = [-3, 5]."
      },
      {
        "title": "3. Magnitude (Modulus) of a Vector",
        "content": "The magnitude or length of a vector represents the straight-line distance from its tail to its head, calculated using Pythagoras' Theorem.",
        "bulletPoints": [
          "Magnitude Formula: For vector u = [x, y], |u| = √(x² + y²).",
          "Distance Between Two Points: For A(x₁, y₁) and B(x₂, y₂), |AB| = √[(x₂ - x₁)² + (y₂ - y₁)²].",
          "Always Positive: The magnitude of a vector is a scalar length and is always greater than or equal to zero (|u| ≥ 0).",
          "Unit Vector: A vector with magnitude equal to exactly 1 unit."
        ],
        "keyTakeaway": "Magnitude |u| = √(x² + y²); squaring negative components always yields positive numbers: (-4)² = +16.",
        "realWorldExample": "A displacement vector [6, 8] km has direct straight-line magnitude √(6² + 8²) = √(36 + 64) = √100 = 10 km."
      },
      {
        "title": "4. Three-Figure Bearings & Navigation Journeys",
        "content": "A bearing is an angular direction used in navigation to describe the position of one point relative to another.",
        "bulletPoints": [
          "Three Cardinal Rules of Bearings:",
          "  1. Measured from TRUE NORTH (000°).",
          "  2. Measured CLOCKWISE.",
          "  3. Written strictly with THREE DIGITS (e.g. 035°, 090°, 225°).",
          "Reference Point Rule: The phrase 'Bearing of B FROM A' means you must position the compass rose at point A!",
          "Back Bearing: The reverse bearing from B back to A. When the forward bearing θ is < 180°, Back Bearing = θ + 180°. When θ ≥ 180°, Back Bearing = θ - 180°.",
          "Sketching Bearings: Always draw a vertical North line at each station and use alternate interior angles to transfer directions."
        ],
        "keyTakeaway": "Place the North reference arrow at the point that follows the word 'FROM'; back bearings differ by 180°.",
        "realWorldExample": "A ship sailing from Takoradi Harbour on bearing 120° sails on back bearing 120° + 180° = 300° to return home."
      }
    ],
    "commonMistakes": [
      "Measuring bearings counter-clockwise or from the East-West horizontal line instead of True North.",
      "Writing a bearing as two digits (e.g. 45° instead of 045°).",
      "Squaring negative vector components into negative numbers: writing |[-3, 4]| = √(-9 + 16) instead of √(9 + 16) = √25 = 5."
    ],
    "beceExamTips": [
      "In bearing sketch questions, draw clear North lines at every point and use parallel line angle properties (alternate/interior angles) to find internal triangle angles.",
      "State vector answers strictly in vertical bracket form [x, y] rather than horizontal coordinate form (x, y) unless coordinates are requested.",
      "Always write three-figure bearings with three digits, including leading zeros (e.g. write 065°, never 65°)."
    ],
    "summaryChecklist": [
      "I can perform addition, subtraction, and scalar multiplication on column vectors.",
      "I can calculate the magnitude of a vector using |u| = √(x² + y²).",
      "I can express bearings in three digits measured clockwise from True North.",
      "I can calculate back bearings using the ±180° rule."
    ]
  },
  "jhs3-math-t10-trigonometry-right-angled": {
    "topicId": "jhs3-math-t10-trigonometry-right-angled",
    "title": "Trigonometry: SOHCAHTOA & Angles of Elevation and Depression",
    "overview": "Master right-angled triangle trigonometry ratios (Sine, Cosine, Tangent), angle of elevation and depression, and solving practical height and distance problems.",
    "introduction": "Trigonometry connects angular measure with linear distance. In JHS 3, trigonometry is grounded in right-angled triangles using the mnemonic SOH CAH TOA. Candidates learn to measure inaccessible heights (such as trees, telecom masts, and buildings) and wide distances across rivers without direct physical tape measurement.",
    "realWorldContext": "Surveyors at the Lands Commission use theodolites to measure angles of elevation and calculate plot boundaries and mountain heights across Ghana.",
    "objectives": [
      "Identify the Hypotenuse, Opposite, and Adjacent sides of a right-angled triangle relative to a reference angle.",
      "Define and apply the trigonometric ratios Sine, Cosine, and Tangent (SOH CAH TOA).",
      "Distinguish between angle of elevation and angle of depression and establish their alternate geometric equivalence.",
      "Solve practical two-dimensional word problems involving heights, shadows, and distances."
    ],
    "sections": [
      {
        "title": "1. Right-Angled Triangle Anatomy & SOH CAH TOA",
        "content": "In any right-angled triangle, the three sides are named relative to the acute angle θ under consideration.",
        "bulletPoints": [
          "Hypotenuse: The longest side; always opposite the 90° right angle.",
          "Opposite: The side facing directly across from the reference angle θ.",
          "Adjacent: The side lying between the reference angle θ and the 90° right angle.",
          "The Three Ratios:",
          "  * Sin θ = Opposite / Hypotenuse (SOH)",
          "  * Cos θ = Adjacent / Hypotenuse (CAH)",
          "  * Tan θ = Opposite / Adjacent (TOA)",
          "Pythagorean Relation: (Hypotenuse)² = (Opposite)² + (Adjacent)²."
        ],
        "keyTakeaway": "The names 'Opposite' and 'Adjacent' swap if you change your reference angle to the other acute corner.",
        "realWorldExample": "A 10 m ladder leaning against a vertical wall at an angle of 60° to the ground touches the wall at height h = 10 × sin 60° = 8.66 m."
      },
      {
        "title": "2. Selecting the Correct Trigonometric Ratio",
        "content": "Solving a triangle requires selecting the single trigonometric ratio that connects the known side with the unknown side.",
        "bulletPoints": [
          "If Hypotenuse and Opposite are involved -> Use SINE: sin θ = Opp / Hyp.",
          "If Hypotenuse and Adjacent are involved -> Use COSINE: cos θ = Adj / Hyp.",
          "If Opposite and Adjacent are involved (no hypotenuse) -> Use TANGENT: tan θ = Opp / Adj.",
          "Finding an Unknown Angle: If tan θ = 0.75, take the inverse tangent: θ = tan⁻¹(0.75) = 36.87°."
        ],
        "keyTakeaway": "Identify what is given and what is required to select Sine, Cosine, or Tangent.",
        "realWorldExample": "To find the width of a river, a surveyor measures a baseline along the bank and sights a tree on the opposite bank using tan θ."
      },
      {
        "title": "3. Angle of Elevation vs Angle of Depression",
        "content": "Angles of elevation and depression are always measured relative to a HORIZONTAL line of sight.",
        "bulletPoints": [
          "Angle of Elevation: The acute angle measured UPWARD from the horizontal line of sight to an elevated target.",
          "Angle of Depression: The acute angle measured DOWNWARD from the horizontal line of sight to an object below.",
          "THE ALTERNATE ANGLE THEOREM: Because all horizontal lines are parallel, the angle of depression from an observer at the top of a tower to an object on the ground EQUALS the angle of elevation from the object to the top of the tower!",
          "FATAL CHIEF EXAMINER WARNING: Candidates frequently measure the angle of depression from the vertical wall or tower. An angle of depression measured from the vertical is WRONG and results in zero marks for the entire question."
        ],
        "keyTakeaway": "Always draw a horizontal reference line before measuring an angle of elevation or depression.",
        "realWorldExample": "A lighthouse keeper 50 m high observes a ship with angle of depression 20°; the angle of elevation from the ship to the lighthouse top is also 20°."
      },
      {
        "title": "4. Solving Multi-Step Trigonometric Problems",
        "content": "BECE Section B questions often involve observer height or compound right-angled triangles.",
        "bulletPoints": [
          "Observer Height Adjustment: If an observer 1.6 m tall looks up at a tower, the height calculated using tan θ gives the height ABOVE EYE LEVEL (h₁). Total tower height = h₁ + 1.6 m!",
          "Two Observers / Moving Observer: A car approaching a tower has angle of elevation changing from 30° to 45°. Set up two separate right-angled triangles sharing the same vertical height h.",
          "Diagram Construction: Draw clear right-angled triangles, label 90° corners, indicate angles and side lengths with units (meters)."
        ],
        "keyTakeaway": "Remember to add the observer's eye height to find the total height of a structure from ground level.",
        "realWorldExample": "A student of height 1.5 m standing 20 m from a church steeple adds 1.5 m to the calculated triangle height to find the true steeple cross height."
      }
    ],
    "commonMistakes": [
      "Measuring the angle of depression from the vertical wall/pole instead of from the horizontal line of sight.",
      "Forgetting to add the observer's eye height to the calculated height in practical word problems.",
      "Confusing Sine (Opp/Hyp) with Tangent (Opp/Adj) when the hypotenuse is not involved."
    ],
    "beceExamTips": [
      "Always sketch a neat, labeled right-angled triangle showing the horizontal ground, vertical height, right angle symbol, and angle θ.",
      "State the trigonometric ratio formula (e.g. tan θ = Opp / Adj) before substituting numerical values to secure the M1 mark.",
      "Remember that the angle of depression from a high point equals the angle of elevation from the ground point by alternate interior angles."
    ],
    "summaryChecklist": [
      "I can correctly identify the Hypotenuse, Opposite, and Adjacent sides relative to θ.",
      "I know the SOH CAH TOA definitions and when to apply each ratio.",
      "I understand that angle of elevation = angle of depression by alternate angles.",
      "I remember to add observer height to find total height from the ground."
    ]
  },
  "jhs3-math-t11-plane-geometry-circles": {
    "topicId": "jhs3-math-t11-plane-geometry-circles",
    "title": "Plane Geometry: Circle Theorems, Cyclic Quadrilaterals & Tangent Properties",
    "overview": "Master fundamental circle geometry theorems: center angle vs circumference angle, angles in semi-circles, angles in same segment, cyclic quadrilaterals, and tangent-radius properties.",
    "introduction": "Circle geometry is one of the most elegant branches of deductive mathematics. In JHS 3, students learn to prove and apply classical circle theorems to determine unknown angles without measuring tools. WAEC BECE examinations consistently test circle theorems as a compulsory or major optional question in Section B.",
    "realWorldContext": "Mechanical gear design, bicycle wheel spoke layouts, and civil highway circular curve transitions rely directly on circle theorems.",
    "objectives": [
      "State and apply the theorem: Angle subtended at the center is twice the angle subtended at the circumference.",
      "Apply the semi-circle theorem: Angle in a semi-circle is a right angle (90°).",
      "Apply the theorem: Angles in the same segment of a circle are equal.",
      "Solve problems using cyclic quadrilateral angle properties and tangent-radius perpendicularity."
    ],
    "sections": [
      {
        "title": "1. The Angle at Center Theorem & Semi-Circle Rule",
        "content": "Arcs subtend angles at both the center of a circle and at points along its outer circumference.",
        "bulletPoints": [
          "Angle at Center Theorem: The angle subtended by an arc at the center of a circle is twice the angle subtended by the same arc at any point on the circumference: ∠AOB = 2 × ∠APB.",
          "Reflex Angle at Center: The theorem holds true even when the angle at the center is reflex (> 180°).",
          "Angle in a Semi-Circle Theorem: Any angle subtended at the circumference by a diameter is exactly a right angle (90°).",
          "Identification Tip: Look for a straight line passing through center O (a diameter). Any triangle inscribed in the semi-circle with the diameter as base has a 90° angle opposite the diameter."
        ],
        "keyTakeaway": "Center angle is double the circumference angle; diameter always subtends a 90° angle at the circumference.",
        "realWorldExample": "A circular clock face where the arc from 12 to 4 subtends 120° at the center subtends 60° at any point on the remaining circumference."
      },
      {
        "title": "2. Angles in the Same Segment",
        "content": "A chord divides a circle into two regions: a major segment and a minor segment.",
        "bulletPoints": [
          "Theorem: Angles in the same segment of a circle are equal: If points P and Q lie on the circumference on the same side of chord AB, then ∠APB = ∠AQB.",
          "Visual Butterfly / Bow-Tie Pattern: The theorem often creates a bow-tie shape inside the circle where angles subtended by the same base chord at the circumference are equal.",
          "Angles Subtended by Equal Chords: Equal chords subtend equal angles at the center and equal angles at the circumference."
        ],
        "keyTakeaway": "Angles with feet on the same chord and vertices on the same circumference arc are equal.",
        "realWorldExample": "Spectators seated anywhere along a circular stadium gallery arc subtend the exact same visual angle to the goal posts."
      },
      {
        "title": "3. Cyclic Quadrilaterals",
        "content": "A cyclic quadrilateral is a four-sided polygon whose four vertices all touch the circumference of a single circle.",
        "bulletPoints": [
          "Opposite Angles are Supplementary: The opposite interior angles of a cyclic quadrilateral sum to 180°: ∠A + ∠C = 180° and ∠B + ∠D = 180°.",
          "Exterior Angle Rule: The exterior angle of a cyclic quadrilateral is equal to the interior opposite angle: Ext ∠ = Int Opp ∠.",
          "Non-Cyclic Traps: If even one vertex does not lie on the circumference (e.g. one vertex is at the center O), the figure is NOT a cyclic quadrilateral! Do not apply the 180° opposite angle rule."
        ],
        "keyTakeaway": "Opposite angles of a cyclic quadrilateral sum to 180°; exterior angle equals the interior opposite angle.",
        "realWorldExample": "Structural four-pin suspension linkages inscribed inside circular cylindrical housings maintain rotational stability using cyclic angle properties."
      },
      {
        "title": "4. Tangents to a Circle",
        "content": "A tangent is a straight line that touches the circumference of a circle at exactly one point without cutting through it.",
        "bulletPoints": [
          "Tangent-Radius Perpendicularity: A tangent to a circle is perpendicular to the radius drawn through the point of contact: ∠OPT = 90°.",
          "Tangents from an External Point: Two tangents drawn to a circle from the same external point are equal in length: TP = TQ.",
          "Symmetry of Tangents: The line joining the external point T to the center O bisects the angle between the tangents (∠PTO = ∠QTO) and bisects the angle between the radii (∠POT = ∠QOT).",
          "Triangle Formation: Radius OP, tangent PT, and line OT form a right-angled triangle OPT, allowing application of Pythagoras' Theorem and SOH CAH TOA."
        ],
        "keyTakeaway": "A tangent is always perpendicular to the radius at the point of contact (90°).",
        "realWorldExample": "A bicycle chain running tangentially off a circular sprocket wheel forms a 90° angle with the wheel radius at the contact point."
      }
    ],
    "commonMistakes": [
      "Applying the cyclic quadrilateral rule to a quadrilateral with one vertex at the center of the circle.",
      "Assuming the angle at the center is half the angle at the circumference instead of twice.",
      "Failing to state the geometric reason (theorem name) in bracketed notes during geometric proofs."
    ],
    "beceExamTips": [
      "In BECE Section B, always write the geometric reason in parentheses after stating an angle: e.g. '∠ACB = 90° (angle in a semi-circle)' to earn the reason mark (B1).",
      "Look for isosceles triangles formed by two radii (OA = OB), where base angles are equal.",
      "State the geometric reason in brackets after each angle statement (e.g. '[opp. angles of cyclic quad sum to 180°]') to earn method marks."
    ],
    "summaryChecklist": [
      "I know that the angle at the center is twice the angle at the circumference.",
      "I know that the angle in a semi-circle is 90°.",
      "I know that opposite angles of a cyclic quadrilateral sum to 180°.",
      "I know that a tangent meets the radius at 90° at the point of contact."
    ]
  },
  "jhs3-math-t12-mensuration-perimeter-area-volume": {
    "topicId": "jhs3-math-t12-mensuration-perimeter-area-volume",
    "title": "Mensuration: Arcs, Sectors, Surface Area & Volume of Solid Shapes",
    "overview": "Master perimeter, arc length, sector area, and 3D surface area and volume of cylinders, cones, pyramids, spheres, and composite containers.",
    "introduction": "Mensuration is the branch of geometry dealing with measurement of lengths, surface areas, and volumes. In JHS 3, students advance from two-dimensional plane figures to circular arcs, sectors, and three-dimensional curved solids (cylinders, cones, spheres, and pyramids). In BECE Section B, mensuration carries substantial marks.",
    "realWorldContext": "Calculating the volume of grain silos in the Northern Region, fuel tank capacities at petroleum stations, and packaging tin sheet requirements for Geisha canned fish rely on mensuration formulas.",
    "objectives": [
      "Calculate the arc length, perimeter, and area of a circular sector.",
      "Calculate the curved surface area, total surface area, and volume of closed and open cylinders.",
      "Calculate the slant height, curved surface area, total surface area, and volume of cones.",
      "Calculate the surface area and volume of spheres, hemispheres, and square-based pyramids."
    ],
    "sections": [
      {
        "title": "1. Circular Arcs & Sectors",
        "content": "A sector is a pie-shaped portion of a circle enclosed by two radii and an arc.",
        "bulletPoints": [
          "Arc Length (L): A fraction of the total circumference: L = (θ / 360°) × 2πr.",
          "Perimeter of a Sector: The complete boundary length: Perimeter = Arc Length + 2r = [(θ / 360°) × 2πr] + 2r. (Never forget the two radii!).",
          "Area of a Sector: A fraction of the total circular area: Area = (θ / 360°) × πr².",
          "Alternative Sector Area Formula: Area = (1/2) × L × r (where L is arc length)."
        ],
        "keyTakeaway": "Sector perimeter is L + 2r; candidates frequently forget to add the two bounding radii 2r.",
        "realWorldExample": "A slice of pizza cut from a 28 cm diameter pie at an angle of 45° has arc length (45/360) × π × 28 = 11 cm."
      },
      {
        "title": "2. Solid Cylinders: Open vs Closed",
        "content": "A cylinder consists of a rectangular curved surface wrapped around two identical circular bases.",
        "bulletPoints": [
          "Curved Surface Area (CSA): Unrolls into a rectangle of length 2πr and height h: CSA = 2πrh.",
          "Total Surface Area of Closed Cylinder: CSA + 2 Circular Bases = 2πrh + 2πr² = 2πr(h + r).",
          "Open Cylinder (One End Open, e.g. metal bucket / cup): CSA + 1 Base = 2πrh + πr².",
          "Hollow Pipe (Both Ends Open): CSA only = 2πrh.",
          "Volume of Cylinder: Base Area × Height = πr²h.",
          "Capacity Conversion: 1 m³ = 1,000 litres; 1 litre = 1,000 cm³."
        ],
        "keyTakeaway": "Read exam questions carefully: check whether a cylinder is closed (2 bases), open at one end (1 base), or a pipe (no bases).",
        "realWorldExample": "A standard Polytank water reservoir of diameter 2 m and height 3 m has volume π(1)²(3) ≈ 9.42 m³ = 9,420 litres of water."
      },
      {
        "title": "3. Cones & The Slant Height Relation",
        "content": "A right circular cone has a flat circular base tapering to a single vertex (apex).",
        "bulletPoints": [
          "Pythagorean Slant Height Relation: The radius r, vertical height h, and slant height l form a right-angled triangle: l² = r² + h²  =>  l = √(r² + h²).",
          "Curved Surface Area (CSA): CSA = πrl (uses slant height l, NOT vertical height h!).",
          "Total Surface Area of Closed Cone: CSA + Circular Base = πrl + πr² = πr(l + r).",
          "Volume of Cone: One-third the volume of a cylinder with same base and height: V = (1/3)πr²h (uses vertical height h!)."
        ],
        "keyTakeaway": "Use slant height l for curved surface area (πrl); use vertical height h for volume ((1/3)πr²h).",
        "realWorldExample": "Conical heap of harvested groundnuts or grain poured on a warehouse floor."
      },
      {
        "title": "4. Spheres, Hemispheres & Pyramids",
        "content": "Spheres are perfectly symmetrical round 3D objects, while pyramids have polygon bases tapering to an apex.",
        "bulletPoints": [
          "Sphere (Radius r): Surface Area = 4πr²; Volume = (4/3)πr³.",
          "Solid Hemisphere: Curved Surface Area = 2πr²; Flat Circular Base = πr²; Total Surface Area (solid) = 3πr²; Volume = (2/3)πr³.",
          "Right Pyramid: Base area A, vertical height h: Volume = (1/3) × Base Area × Height = (1/3)Ah.",
          "Square-Based Pyramid: If base side is s, Base Area = s²: Volume = (1/3)s²h."
        ],
        "keyTakeaway": "Solid hemisphere TSA is 3πr² (2πr² curved + πr² flat base); hollow hemisphere is 2πr².",
        "realWorldExample": "A hemispherical calabash bowl or football inflated for a sporting match."
      }
    ],
    "commonMistakes": [
      "Using vertical height h instead of slant height l in the cone curved surface area formula πrl.",
      "Omitting the two radii (2r) when calculating the perimeter of a circular sector.",
      "Using diameter instead of radius in volume and area formulas without dividing by 2."
    ],
    "beceExamTips": [
      "State the formula in symbols before substituting numerical values (e.g. V = πr²h) to earn the formula method mark (M1).",
      "Check unit consistency: convert all dimensions to centimeters or all to meters before multiplying.",
      "Check whether a cylinder or tin is open or closed, and remember to add 2r when calculating the perimeter of a circular sector."
    ],
    "summaryChecklist": [
      "I can calculate arc length and remember that sector perimeter is L + 2r.",
      "I know the difference between closed cylinder TSA (2πr(h+r)) and open cylinder TSA (2πrh + πr²).",
      "I know how to calculate slant height l = √(r² + h²) for a cone.",
      "I can calculate the volume and surface area of spheres, hemispheres, and pyramids."
    ]
  },
  "jhs3-math-t13-geometric-transformations": {
    "topicId": "jhs3-math-t13-geometric-transformations",
    "title": "Transformations: Reflection, Rotation, Translation & Enlargement",
    "overview": "Master Cartesian coordinate mappings: reflection in axes and diagonal lines, rotation about the origin (90°, 180°, 270°), vector translation, and scale factor enlargements.",
    "introduction": "Geometric transformations describe how shapes move, rotate, reflect, or scale in the coordinate plane while preserving or altering geometric properties. Isometric transformations (reflection, rotation, translation) preserve size and shape (congruence), while non-isometric transformations (enlargement) alter size while preserving shape (similarity).",
    "realWorldContext": "Computer graphics animators, textile designers creating kente fabric symmetrical patterns, and architectural CAD draftspersons use coordinate transformations continuously.",
    "objectives": [
      "State and apply coordinate mapping rules for reflection in x-axis, y-axis, and lines y = ±x.",
      "Apply coordinate rules for rotation about the origin (90°, 180°, 270° clockwise and anti-clockwise).",
      "Translate geometric figures in the Cartesian plane using column vectors [a, b].",
      "Perform enlargements from the origin by scale factor k and relate linear, area, and volume scale factors."
    ],
    "sections": [
      {
        "title": "1. Reflection in Coordinate Axes and Lines",
        "content": "A reflection flips an object across a mirror line called the axis of reflection, producing an inverted congruent image.",
        "bulletPoints": [
          "Reflection in the x-axis (line y = 0): The x-coordinate stays the same; the y-coordinate changes sign: (x, y) -> (x, -y).",
          "Reflection in the y-axis (line x = 0): The y-coordinate stays the same; the x-coordinate changes sign: (x, y) -> (-x, y).",
          "Reflection in the line y = x: Coordinates swap places directly: (x, y) -> (y, x). E.g. (3, -5) -> (-5, 3).",
          "Reflection in the line y = -x: Coordinates swap places and both negate: (x, y) -> (-y, -x). E.g. (4, 2) -> (-2, -4).",
          "Invariant Points: Any point lying directly on the mirror line remains unchanged under reflection."
        ],
        "keyTakeaway": "Mirror line y = x swaps coordinates (y, x); mirror line y = -x swaps and negates (-y, -x).",
        "realWorldExample": "Looking into a vertical plane mirror reflects coordinates across the vertical plane line."
      },
      {
        "title": "2. Rotation About the Origin (0, 0)",
        "content": "A rotation turns every point on a shape through a specified angle around a fixed center of rotation.",
        "bulletPoints": [
          "Convention: In mathematics and BECE, positive angles indicate ANTI-CLOCKWISE rotation. Negative angles indicate CLOCKWISE rotation.",
          "90° Anti-Clockwise (or 270° Clockwise): (x, y) -> (-y, x). E.g. (3, 4) -> (-4, 3).",
          "180° Rotation (Half Turn): (x, y) -> (-x, -y). (Both signs flip; same clockwise or anti-clockwise).",
          "270° Anti-Clockwise (or 90° Clockwise): (x, y) -> (y, -x). E.g. (3, 4) -> (4, -3).",
          "Center of Rotation: The origin (0, 0) is the only invariant point during rotation about the origin."
        ],
        "keyTakeaway": "90° anti-clockwise maps (x, y) to (-y, x); 180° rotation negates both coordinates (-x, -y).",
        "realWorldExample": "Wind turbine blades and automobile wheels rotate around a central axle hub."
      },
      {
        "title": "3. Translation by a Vector",
        "content": "Translation slides an entire object by a fixed horizontal and vertical distance without turning or flipping it.",
        "bulletPoints": [
          "Translation Rule: Image Point = Object Point + Translation Vector: (x, y) + [a, b] = (x + a, y + b).",
          "Component Roles: a is horizontal shift (+ve shifts right, -ve shifts left); b is vertical shift (+ve shifts up, -ve shifts down).",
          "Finding the Translation Vector: Vector v = Image Point - Object Point: [a, b] = [x' - x, y' - y].",
          "Properties: All line lengths, angles, and orientations are preserved; the object and image are strictly congruent and parallel."
        ],
        "keyTakeaway": "Translation slides shapes: Image = Object + Vector; Vector = Image - Object.",
        "realWorldExample": "Moving a chess piece across a board or shifting an icon across a smartphone screen."
      },
      {
        "title": "4. Enlargement and Scale Factors",
        "content": "Enlargement changes the size of a shape by multiplying distances from a center of enlargement by a constant scale factor k.",
        "bulletPoints": [
          "Enlargement with Center (0, 0): Coordinate rule is (x, y) -> (kx, ky).",
          "Scale Factor k Properties:",
          "  * k > 1: Shape expands (magnification).",
          "  * 0 < k < 1: Shape shrinks (reduction/diminution).",
          "  * k < 0: Shape is inverted on the opposite side of the center.",
          "Linear vs Area vs Volume Ratios:",
          "  * Length of Image = |k| × Length of Object.",
          "  * Area of Image = k² × Area of Object.",
          "  * Volume of Image = |k|³ × Volume of Object."
        ],
        "keyTakeaway": "Area scales by k²; volume scales by k³; if linear scale factor is 3, area increases by 3² = 9 times!",
        "realWorldExample": "Projecting a smartphone film onto a large classroom projector screen enlarges area by k²."
      }
    ],
    "commonMistakes": [
      "Confusing 90° clockwise with 90° anti-clockwise rotation rules.",
      "Multiplying area by k instead of k² when calculating the area of an enlarged figure.",
      "Switching x and y signs incorrectly when reflecting in the axes (e.g. reflecting in x-axis and changing x instead of y)."
    ],
    "beceExamTips": [
      "In BECE Section B, write out the transformation mapping rule explicitly in symbols: e.g. '(x, y) -> (-y, x)' before calculating image coordinates.",
      "Plot object and image points on graph paper with small crosses and label vertices clearly (A, B, C and A₁, B₁, C₁).",
      "State transformation vector coordinates as column vectors (top x, bottom y) when presenting final transformation answers."
    ],
    "summaryChecklist": [
      "I know the reflection rules for x-axis, y-axis, y = x, and y = -x.",
      "I know the rotation rules for 90°, 180°, and 270° about the origin.",
      "I can translate coordinates using a column vector [a, b].",
      "I know how scale factor k affects lengths (|k|), areas (k²), and volumes (k³)."
    ]
  },
  "jhs3-math-t14-data-handling-probability": {
    "topicId": "jhs3-math-t14-data-handling-probability",
    "title": "Handling Data: Grouped Frequency, Cumulative Frequency & Probability",
    "overview": "Master grouped frequency distributions, calculating the mean using class midpoints, constructing cumulative frequency curves (ogive), reading quartiles, and theoretical probability.",
    "introduction": "Data handling and probability provide the mathematical tools to collect, organize, analyze, and predict real-world trends. In JHS 3, students master grouped frequency tables, calculate statistical averages from continuous data, construct cumulative frequency curves (ogives) to determine medians and percentiles, and calculate probabilities of single and combined events.",
    "realWorldContext": "The Ghana Statistical Service (GSS) analyzes national census data, and the West African Examinations Council (WAEC) standardizes BECE scores using cumulative frequency curves.",
    "objectives": [
      "Construct grouped frequency tables with class intervals, class boundaries, class midpoints, and frequencies.",
      "Calculate the estimated mean of grouped data using the formula x̄ = Σ(fx) / Σf.",
      "Construct cumulative frequency tables and plot smooth S-shaped Ogive curves on graph paper.",
      "Read the Median (Q₂), Lower Quartile (Q₁), Upper Quartile (Q₃), and Interquartile Range from an Ogive.",
      "Calculate theoretical probabilities of simple and mutually exclusive events."
    ],
    "sections": [
      {
        "title": "1. Grouped Frequency Distributions & Terminology",
        "content": "When data sets are large, individual scores are grouped into class intervals to reveal patterns.",
        "bulletPoints": [
          "Class Interval: A range of values, e.g. 20 - 29. Lower class limit = 20; Upper class limit = 29.",
          "Class Boundaries: True mathematical boundaries that eliminate gaps between intervals: Lower boundary = 19.5; Upper boundary = 29.5.",
          "Class Width / Size (c): Difference between class boundaries: 29.5 - 19.5 = 10.",
          "Class Midpoint / Mark (x): The average of class limits representing all scores in the interval: x = (20 + 29) / 2 = 24.5.",
          "Modal Class: The class interval having the highest frequency."
        ],
        "keyTakeaway": "Class midpoint x = (Lower Limit + Upper Limit) / 2; use boundaries for plotting, midpoints for mean.",
        "realWorldExample": "BECE examination scores from 0 to 100 grouped into 10-mark grade bands (e.g. 70-79, 80-89, 90-100)."
      },
      {
        "title": "2. Calculating the Mean of Grouped Data",
        "content": "Because individual raw scores within a group are lost, the mean of grouped data is an estimate obtained by weighting class midpoints by class frequencies.",
        "bulletPoints": [
          "Mean Formula: Mean (x̄) = Σ(fx) / Σf.",
          "Step 1: Calculate the midpoint x for each class interval.",
          "Step 2: Multiply each midpoint x by its corresponding frequency f to obtain fx.",
          "Step 3: Sum the fx column to obtain Σ(fx).",
          "Step 4: Sum the frequency column to obtain total frequency Σf (or N).",
          "Step 5: Divide Σ(fx) by Σf to obtain the mean.",
          "Check: The mean must lie reasonably inside the data range; if your mean is outside the range, an arithmetic error was made."
        ],
        "keyTakeaway": "Mean of grouped data = Total of fx column divided by Total frequency: x̄ = Σ(fx) / Σf.",
        "realWorldExample": "A cocoa buying company calculating the average weight of 200 bags of cocoa beans grouped by kilogram intervals."
      },
      {
        "title": "3. Cumulative Frequency & The Ogive Curve",
        "content": "A cumulative frequency curve (or Ogive) is an S-shaped graph used to determine medians, quartiles, and percentiles.",
        "bulletPoints": [
          "Cumulative Frequency (cf): The progressive running sum of frequencies up to the upper boundary of each class.",
          "Plotting the Ogive:",
          "  * x-axis: Upper Class Boundaries.",
          "  * y-axis: Cumulative Frequency.",
          "  * Starting Point: The curve MUST start at zero on the LOWER boundary of the first class.",
          "  * Draw a smooth, continuous S-shaped curve freehand through all plotted points.",
          "Reading Measures from the Ogive:",
          "  * Median (Q₂): Located at cf = N / 2 (where N = Σf). Read horizontally to curve, then vertically down to x-axis.",
          "  * Lower Quartile (Q₁): Located at cf = N / 4 = 0.25N.",
          "  * Upper Quartile (Q₃): Located at cf = 3N / 4 = 0.75N.",
          "  * Interquartile Range (IQR): IQR = Q₃ - Q₁."
        ],
        "keyTakeaway": "Plot cumulative frequency against UPPER class boundaries; start at zero on the lowest boundary.",
        "realWorldExample": "WAEC determining the cutoff pass mark such that the top 10% of candidates receive Grade 1."
      },
      {
        "title": "4. Theoretical Probability",
        "content": "Probability measures the likelihood of an event occurring on a numerical scale from 0 to 1.",
        "bulletPoints": [
          "Probability Formula: P(Event E) = n(E) / n(S) = (Number of favorable outcomes) / (Total number of possible outcomes).",
          "The Probability Scale: 0 ≤ P(E) ≤ 1. If P(E) = 0, event is impossible; if P(E) = 1, event is certain.",
          "Complementary Rule: The probability of an event NOT happening is 1 minus the probability that it happens: P(not E) = 1 - P(E).",
          "Mutually Exclusive Events: Events that cannot occur at the same time: P(A or B) = P(A) + P(B).",
          "Sample Space (S): The set of all possible outcomes (e.g. rolling a die: S = {1, 2, 3, 4, 5, 6}, n(S) = 6)."
        ],
        "keyTakeaway": "Probabilities can never be negative and can never exceed 1; always simplify probability fractions.",
        "realWorldExample": "Meteorological weather forecasters predicting a 70% chance of rain in Kumasi tomorrow (P(Rain) = 0.70; P(No Rain) = 0.30)."
      }
    ],
    "commonMistakes": [
      "Plotting cumulative frequency against class midpoints instead of Upper Class Boundaries.",
      "Starting the Ogive curve in mid-air instead of anchoring it at zero on the lower boundary of the first class.",
      "Giving probability answers as numbers greater than 1 or negative values."
    ],
    "beceExamTips": [
      "Show dashed projection lines on your Ogive graph when reading the Median and Quartiles; examiners look for these lines to award method marks.",
      "In probability, always simplify the fraction to lowest terms (e.g. 4/10 must be simplified to 2/5).",
      "Probabilities must always be written as proper fractions, decimals between 0 and 1, or percentages, never as ratios like 1:4."
    ],
    "summaryChecklist": [
      "I can calculate class boundaries, class widths, and class midpoints.",
      "I can calculate the mean of grouped data using x̄ = Σ(fx) / Σf.",
      "I can construct an Ogive by plotting cumulative frequency against upper class boundaries.",
      "I can read the Median, Q₁, Q₃, and calculate theoretical probabilities."
    ]
  }
};
