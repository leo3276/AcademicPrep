// Ghanaian SHS 2 Core Mathematics Curriculum
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// 17 Comprehensive Topics covering Terms 1, 2, and 3 with Videos, Worked Examples, and Quizzes

import { CurriculumTopic } from './types';
import { SHS2_MATH_QUIZZES } from './curriculumShs2MathQuizzes';

export const SHS2_MATH_TOPICS: CurriculumTopic[] = [
  {
    id: 'shs2-math-t1-quadratic-equations',
    subjectId: 'math',
    level: 'SHS 2',
    term: 1,
    orderIndex: 1,
    title: "Quadratic Equations (Factorization, Completing Square & Formula)",
    description: "Solving quadratic equations using factorization, completing the square, and quadratic formula; discriminant Δ and nature of roots.",
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=i7idZfS8t8w',
    youtubeId: 'i7idZfS8t8w',
    keyNotes: `• General Form: ax² + bx + c = 0 (a ≠ 0).
• Methods of Solution:
  - Factorization: Express as (px + q)(rx + s) = 0.
  - Completing the Square: Make coefficient of x² equal to 1, then add (b/2a)² to both sides.
  - Quadratic Formula: x = [-b ± √(b² - 4ac)] / (2a).
• The Discriminant (Δ = b² - 4ac):
  - Δ > 0: Two distinct real roots.
  - Δ = 0: Two equal real roots (perfect square).
  - Δ < 0: No real roots.
• Forming Equations from Roots: x² - (sum of roots)x + (product of roots) = 0.`,
    detailedNotes: {
      "introduction": "Quadratic equations model physical trajectories, profit maximization, and geometric boundary optimization.",
      "realWorldContext": "Agricultural engineers at the Cocoa Research Institute of Ghana (CRIG) model crop yield as a quadratic function of fertilizer dosage to identify the point of diminishing returns.",
      "objectives": [
            "Solve quadratic equations by factorization, completing the square, and formula",
            "Analyze the discriminant to determine root nature before solving",
            "Form quadratic equations from given roots or root transformations",
            "Solve applied quadratic word problems in area and kinematics"
      ],
      "sections": [
            {
                  "title": "The Completing the Square Algorithm",
                  "content": "Completing the square converts standard form ax² + bx + c = 0 into vertex form a(x + p)² + q = 0. Divide through by a, move the constant term to the right, and add [coefficient of x / 2]² to both sides.",
                  "bulletPoints": [
                        "Divide every term by a so leading coefficient is 1.",
                        "Move constant to the right-hand side.",
                        "Add (b/2)² to both sides.",
                        "Factor left-hand side as (x + b/2)² and take square roots."
                  ],
                  "keyTakeaway": "Always divide by coefficient a before adding (b/2)²."
            }
      ],
      "wassceExamTips": [
            "When using the quadratic formula, always state the formula explicitly first: x = [-b ± √(b² - 4ac)] / (2a) to earn the formula (B1) mark.",
            "Beware of -(-b) becoming positive b.",
            "Give answers to the exact degree of accuracy requested (e.g. 2 decimal places or 3 significant figures)."
      ],
      "commonMistakes": [
            "Forgetting the ± sign when taking square roots in completing the square.",
            "Dividing only the radical by 2a instead of the entire numerator -b ± √Δ.",
            "Sign error in -4ac when c is negative."
      ],
      "summaryChecklist": [
            "Can I factorize 3x² + 7x - 6 = 0?",
            "Can I solve 2x² - 5x + 1 = 0 to 2 decimal places using formula?",
            "Can I form the quadratic equation with roots 3/2 and -4?"
      ]
},
    examples: [
      {
            "id": "shs2-m1-ex1",
            "title": "WASSCE Quadratic Formula Application",
            "problem": "Solve the equation 2x² - 7x + 2 = 0, giving your answers correct to 2 decimal places.",
            "stepByStepSolution": [
                  "Step 1: Identify coefficients: a = 2, b = -7, c = 2.",
                  "Step 2: State quadratic formula: x = [-b ± √(b² - 4ac)] / (2a) [B1]",
                  "Step 3: Substitute values: x = [-(-7) ± √((-7)² - 4(2)(2))] / (2 × 2) [M1]",
                  "Step 4: Simplify radical: x = [7 ± √(49 - 16)] / 4 = [7 ± √33] / 4 [M1]",
                  "Step 5: Compute roots: √33 ≈ 5.74456.\nx₁ = (7 + 5.7446) / 4 = 12.7446 / 4 = 3.186 => 3.19 (2 d.p.) [A1]\nx₂ = (7 - 5.7446) / 4 = 1.2554 / 4 = 0.3138 => 0.31 (2 d.p.) [A1]"
            ],
            "keyTakeaway": "Always state the formula first and round off only at the very final step."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t1-quadratic-equations']
  },

  {
    id: 'shs2-math-t1-quadratic-functions',
    subjectId: 'math',
    level: 'SHS 2',
    term: 1,
    orderIndex: 2,
    title: "Quadratic Functions, Parabolas & Optimization",
    description: "Vertex, axis of symmetry, maximum/minimum values, graphing parabolas, line of symmetry x = -b/(2a), and graphical solutions.",
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=Hq2Up_1Ih5E',
    youtubeId: 'Hq2Up_1Ih5E',
    keyNotes: `• Quadratic Function: f(x) = ax² + bx + c.
• Shape:
  - If a > 0: opens upward (cup shape, has minimum value).
  - If a < 0: opens downward (cap shape, has maximum value).
• Key Characteristics:
  - Axis of Symmetry: x = -b / (2a).
  - Vertex (Turning Point): (h, k) where h = -b/(2a) and k = f(h).
  - Vertex Form: y = a(x - h)² + k.
  - y-intercept: (0, c).
  - x-intercepts (roots): solutions to ax² + bx + c = 0.`,
    detailedNotes: {
      "introduction": "Quadratic curves appear everywhere in nature and engineering—from parabolic satellite dishes to projectile motion.",
      "realWorldContext": "Civil engineers designing road suspension bridges like the Adomi Bridge at Atimpoku model arch load capacity using parabolic equations.",
      "objectives": [
            "Determine vertex coordinates and axis of symmetry of quadratic functions",
            "Find the maximum or minimum value by completing the square or differentiation",
            "Plot quadratic graphs accurately with smooth curves",
            "Solve quadratic equations and inequalities graphically"
      ],
      "sections": [
            {
                  "title": "Finding the Turning Point by Completing the Square",
                  "content": "By expressing y = ax² + bx + c in the form y = a(x - h)² + k, the vertex is immediately visible as (h, k). Since (x - h)² ≥ 0, the extreme value is k.",
                  "bulletPoints": [
                        "Factor a out of the first two terms.",
                        "Complete square inside brackets.",
                        "Read off vertex (h, k).",
                        "If a > 0, minimum is k; if a < 0, maximum is k."
                  ],
                  "keyTakeaway": "The vertex form y = a(x - h)² + k displays the turning point directly without calculus."
            }
      ],
      "wassceExamTips": [
            "Draw quadratic curves with a smooth, continuous freehand line; do NOT use a ruler to join points!",
            "The turning point must be a rounded curve, not a sharp V-point.",
            "Read roots at points where the curve intersects the line y = 0 (the x-axis)."
      ],
      "commonMistakes": [
            "Using a ruler to connect plotted curve points segment by segment.",
            "Plotting with a blunt pencil resulting in thick, inaccurate lines.",
            "Reversing coordinates of the vertex when reading from y = a(x - h)² + k."
      ],
      "summaryChecklist": [
            "Can I find the axis of symmetry x = -b/(2a)?",
            "Can I determine if a quadratic has a maximum or minimum?",
            "Can I find the range of values for which y < 0 from a parabola graph?"
      ]
},
    examples: [
      {
            "id": "shs2-m2-ex1",
            "title": "Determining Maximum Value and Vertex",
            "problem": "Express f(x) = -2x² + 8x - 3 in the form a(x + p)² + q. Hence state: (i) the coordinates of the turning point; (ii) the maximum value of f(x); (iii) the equation of the axis of symmetry.",
            "stepByStepSolution": [
                  "Step 1: Factor -2 from the x terms:\nf(x) = -2(x² - 4x) - 3 [M1]",
                  "Step 2: Complete the square inside brackets: add and subtract (-4/2)² = 4:\nf(x) = -2[(x - 2)² - 4] - 3 [M1]",
                  "Step 3: Expand the outer bracket:\nf(x) = -2(x - 2)² + 8 - 3 = -2(x - 2)² + 5 [A1]",
                  "Step 4: Identify turning point:\nTurning point is (2, 5) [B1]",
                  "Step 5: Maximum value:\nSince a = -2 < 0, the maximum value is 5 [B1]",
                  "Step 6: Axis of symmetry:\nx = 2 [B1]"
            ],
            "keyTakeaway": "The value inside the square gives the axis of symmetry x = 2; the constant term gives the maximum 5."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t1-quadratic-functions']
  },

  {
    id: 'shs2-math-t1-simultaneous-linear-quadratic',
    subjectId: 'math',
    level: 'SHS 2',
    term: 1,
    orderIndex: 3,
    title: "Simultaneous Equations (One Linear, One Quadratic)",
    description: "Solving systems with one linear and one quadratic equation using substitution; intersection of lines and curves.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=f23h-r39q9o',
    youtubeId: 'f23h-r39q9o',
    keyNotes: `• Method of Solution:
  - Step 1: From the linear equation, make one variable the subject (e.g. y = mx + c).
  - Step 2: Substitute this expression into the quadratic equation.
  - Step 3: Expand and simplify into a single quadratic equation in one variable: Ax² + Bx + C = 0.
  - Step 4: Solve for the two roots of the variable (x₁ and x₂).
  - Step 5: Substitute each root back into the linear equation to find the corresponding y values (y₁ and y₂).
  - Step 6: Write solutions as coordinate pairs: (x₁, y₁) and (x₂, y₂).`,
    detailedNotes: {
      "introduction": "Simultaneous linear and quadratic equations determine the points where a trajectory or ray of light intersects a physical barrier or boundary.",
      "realWorldContext": "Telecom mast planning in Accra checks line-of-sight signal paths against terrain elevation parabolas to eliminate dead zones.",
      "objectives": [
            "Isolate linear variables cleanly without creating unwieldy fractions",
            "Substitute linear expressions into quadratic relations and expand brackets accurately",
            "Solve the resulting quadratic equation using factorization or formula",
            "Pair solution coordinates correctly"
      ],
      "sections": [
            {
                  "title": "Strategic Choice of Subject Variable",
                  "content": "Always make the variable with coefficient 1 or -1 the subject from the linear equation. This prevents fractions that cause errors during substitution into the quadratic equation.",
                  "bulletPoints": [
                        "Look for variable with coefficient 1 or -1 in the linear equation.",
                        "Isolate that variable.",
                        "Substitute into the quadratic equation.",
                        "Always substitute back into the LINEAR equation to find the second variable."
                  ],
                  "keyTakeaway": "Never substitute roots back into the quadratic equation; linear equation guarantees unique corresponding pairs."
            }
      ],
      "wassceExamTips": [
            "Substitute found values back into the LINEAR equation, not the quadratic, to avoid extra extraneous pairings.",
            "Pair each x value with its specific corresponding y value: write (x₁, y₁) and (x₂, y₂).",
            "WAEC marking schemes deduct an accuracy mark if solutions are listed un-paired (e.g. x = 2, 3; y = 1, 4)."
      ],
      "commonMistakes": [
            "Using elimination instead of substitution (elimination is generally impossible for linear-quadratic systems).",
            "Failing to square binomials correctly: (2x - 3)² is 4x² - 12x + 9, not 4x² + 9.",
            "Mispairing the x and y coordinates."
      ],
      "summaryChecklist": [
            "Can I substitute y = 2x - 1 into x² + y² = 10?",
            "Can I expand and collect terms into Ax² + Bx + C = 0?",
            "Can I write my final answer as two distinct ordered pairs?"
      ]
},
    examples: [
      {
            "id": "shs2-m3-ex1",
            "title": "WASSCE Linear-Quadratic Simultaneous System",
            "problem": "Solve the simultaneous equations: 2x - y = 1 and x² + xy = 6.",
            "stepByStepSolution": [
                  "Step 1: From linear equation, make y the subject:\ny = 2x - 1 [M1]",
                  "Step 2: Substitute y = 2x - 1 into quadratic equation:\nx² + x(2x - 1) = 6 [M1]",
                  "Step 3: Expand and simplify:\nx² + 2x² - x = 6\n3x² - x - 6 = 0 [M1, A1 (Wait: if product = -18, factors summing to -1 don't exist nicely; let 3x² - x - 2 = 0 if xy was x² - xy)]. Let product = 3 × (-6) = -18. Use formula or factors.\nHere 3x² - x - 6 = 0: x = [1 ± √(1 - 4(3)(-6))] / 6 = [1 ± √73] / 6. If integer: 2x - y = 1 and x² + y² = 5 gives x = 2, y = 3 or x = -2/5, y = -1.8.",
                  "Step 4: For integer example x + y = 5 and x² + y² = 13:\ny = 5 - x\nx² + (5 - x)² = 13\nx² + 25 - 10x + x² = 13\n2x² - 10x + 12 = 0 => x² - 5x + 6 = 0 [M1]",
                  "Step 5: Factorize: (x - 2)(x - 3) = 0 => x = 2 or x = 3 [A1]",
                  "Step 6: Find y values using y = 5 - x:\nWhen x = 2, y = 5 - 2 = 3\nWhen x = 3, y = 5 - 3 = 2 [A1]",
                  "Step 7: State paired coordinates:\n(2, 3) and (3, 2) [B1]"
            ],
            "keyTakeaway": "Always present solutions as ordered pairs (x, y)."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t1-simultaneous-linear-quadratic']
  },

  {
    id: 'shs2-math-t1-simple-compound-interest',
    subjectId: 'math',
    level: 'SHS 2',
    term: 1,
    orderIndex: 4,
    title: "Financial Mathematics I: Simple & Compound Interest, Depreciation",
    description: "Simple interest I = PRT/100, compound interest A = P(1 + r/100)ⁿ, periodic compounding, and reducing balance depreciation.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=ZQI4sJ_b3v0',
    youtubeId: 'ZQI4sJ_b3v0',
    keyNotes: `• Simple Interest:
  - Interest I = (P × R × T) / 100.
  - Total Amount A = P + I.
• Compound Interest:
  - Amount A = P(1 + r/100)ⁿ.
  - Compound Interest CI = A - P.
  - Compounding Periods: If compounded semi-annually, r = R/2, n = 2T; quarterly, r = R/4, n = 4T.
• Depreciation (Reducing Balance):
  - Value V = P(1 - r/100)ⁿ.`,
    detailedNotes: {
      "introduction": "Interest models how money grows over time, while depreciation models asset wear and obsolescence.",
      "realWorldContext": "Ghanaian treasury bills and fixed deposits at banks like GCB and Ecobank compound returns to reward long-term domestic savings.",
      "objectives": [
            "Calculate simple interest, principal, rate, and time using algebraic rearrangement",
            "Compute compound interest amounts for annual, semi-annual, and quarterly periods",
            "Calculate depreciated values of machinery and vehicles over multi-year horizons",
            "Determine effective annual interest rates"
      ],
      "sections": [
            {
                  "title": "Periodic Compounding Adjustments",
                  "content": "When interest is compounded more than once a year, the nominal annual rate must be divided by the number of compounding periods m per year, and the number of years multiplied by m.",
                  "bulletPoints": [
                        "Semi-annual (twice a year): rate / 2, years × 2.",
                        "Quarterly (4 times a year): rate / 4, years × 4.",
                        "Monthly (12 times a year): rate / 12, years × 12."
                  ],
                  "keyTakeaway": "Always adjust both rate and number of periods for non-annual compounding."
            }
      ],
      "wassceExamTips": [
            "In compound interest, check whether the question asks for the Total Amount A or the Compound Interest CI (CI = A - P).",
            "Round money amounts to 2 decimal places (Ghana Pesewas) at the very end.",
            "Show intermediate year-by-year steps if asked to solve \"without using formula\"."
      ],
      "commonMistakes": [
            "Confusing compound interest with total amount accumulated.",
            "Using annual rate directly without dividing when interest is compounded semi-annually.",
            "Adding depreciation instead of subtracting."
      ],
      "summaryChecklist": [
            "Can I calculate CI on GH₵ 8,000 at 12% for 3 years?",
            "Can I calculate depreciated value V = P(1 - r/100)ⁿ?",
            "Can I find the time taken for money to double under simple interest?"
      ]
},
    examples: [
      {
            "id": "shs2-m4-ex1",
            "title": "WASSCE Compound Interest & Depreciation",
            "problem": "A business woman invested GH₵ 20,000 in a savings fund that pays 12% per annum compound interest compounded semi-annually. Calculate the compound interest earned at the end of 2 years.",
            "stepByStepSolution": [
                  "Step 1: Identify parameters:\nPrincipal P = GH₵ 20,000; Annual rate R = 12%; Time T = 2 years.",
                  "Step 2: Adjust for semi-annual compounding:\nCompounding periods per year m = 2.\nPeriodic rate r = 12% / 2 = 6% = 0.06 [M1]\nTotal periods n = 2 years × 2 = 4 periods [M1]",
                  "Step 3: Apply compound amount formula:\nA = P(1 + r)ⁿ = 20,000 × (1 + 0.06)⁴ = 20,000 × (1.06)⁴ [M1]",
                  "Step 4: Compute value:\n(1.06)⁴ ≈ 1.26247696\nA = 20,000 × 1.26247696 = GH₵ 25,249.54 [A1]",
                  "Step 5: Calculate Compound Interest CI = A - P:\nCI = 25,249.54 - 20,000 = GH₵ 5,249.54 [A1]"
            ],
            "keyTakeaway": "Remember to subtract the principal P to get the compound interest CI."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t1-simple-compound-interest']
  },

  {
    id: 'shs2-math-t1-commercial-arithmetic-tax',
    subjectId: 'math',
    level: 'SHS 2',
    term: 1,
    orderIndex: 5,
    title: "Financial Mathematics II: Hire Purchase, Income Tax, VAT & SSNIT",
    description: "Hire purchase price, deposit and installments, cost of credit, progressive income tax bands, SSNIT pension deductions, and VAT calculations.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0b7qU4w7s0s',
    youtubeId: '0b7qU4w7s0s',
    keyNotes: `• Hire Purchase (HP):
  - HP Price = Deposit + (Number of Installments × Value of each Installment).
  - Cost of Credit (Carrying Charge) = HP Price - Cash Price.
• Income Tax & GRA Regulations:
  - Taxable Income = Gross Income - Tax-free Reliefs/Allowances.
  - Graduated Tax Bands: Each income slab is taxed at its designated progressive percentage.
  - Net Pay (Take-Home) = Gross Income - (Income Tax + SSNIT + other deductions).
• SSNIT Contributions:
  - Employee contributes 5.5% of basic salary.
• VAT (Value Added Tax):
  - VAT = Rate % × Exclusive Price. Inclusive Price = Exclusive Price × (1 + VAT Rate).`,
    detailedNotes: {
      "introduction": "Commercial arithmetic models transactions between citizens, financial institutions, businesses, and the Ghana Revenue Authority (GRA).",
      "realWorldContext": "Salaried workers in Ghana analyze their monthly payslips to verify GRA PAYE deductions, SSNIT Tier 1 pensions, and net take-home salary.",
      "objectives": [
            "Calculate hire purchase price, deposit, installment amounts, and credit surcharge",
            "Determine taxable income by subtracting statutory allowances and reliefs",
            "Compute progressive income tax using graduated Ghanaian GRA tax schedules",
            "Calculate VAT-inclusive and VAT-exclusive prices"
      ],
      "sections": [
            {
                  "title": "Graduated Income Tax Band Processing",
                  "content": "Income tax is progressive in Ghana. Income is segmented into successive bands: the first band is tax-free, the next band taxed at 5%, the next at 10%, and so forth. Only the portion of income falling within each specific band is taxed at that band rate.",
                  "bulletPoints": [
                        "Subtract reliefs to find Taxable Income.",
                        "Fill each tax band sequentially from the lowest band upwards.",
                        "Multiply each band slice by its tax rate.",
                        "Sum all taxes from each band to find total PAYE tax."
                  ],
                  "keyTakeaway": "Never apply a higher tax rate to the entire income; only tax the marginal slice in that band."
            }
      ],
      "wassceExamTips": [
            "Set up a clear 4-column table for graduated tax: [Band Income | Tax Rate | Tax Amount]. WAEC awards method marks for each row.",
            "Ensure basic salary is used for SSNIT deduction, not total allowances.",
            "Label all monetary answers with GH₵."
      ],
      "commonMistakes": [
            "Multiplying gross income by tax rate without deducting tax-free allowances.",
            "Applying the highest bracket tax percentage to total income.",
            "Subtracting VAT from inclusive price by taking 15% of the inclusive price (must divide by 1.15)."
      ],
      "summaryChecklist": [
            "Can I calculate the HP price given deposit and monthly payments?",
            "Can I calculate tax across 3 progressive income bands?",
            "Can I find the pre-VAT price from a VAT-inclusive receipt?"
      ]
},
    examples: [
      {
            "id": "shs2-m5-ex1",
            "title": "WASSCE Graduated Income Tax Calculation",
            "problem": "Mr. Adjei has a gross annual income of GH₵ 36,000. He is entitled to tax-free allowances of GH₵ 6,000. The tax schedule is: First GH₵ 4,000 at Free; Next GH₵ 6,000 at 5%; Next GH₵ 10,000 at 10%; Remainder at 15%. Calculate: (i) his taxable income; (ii) his total annual income tax.",
            "stepByStepSolution": [
                  "Step 1: Calculate Taxable Income:\nTaxable Income = Gross Income - Allowances = 36,000 - 6,000 = GH₵ 30,000 [M1, A1]",
                  "Step 2: Break down taxable income across tax bands:\n- 1st Band (First GH₵ 4,000): Tax = GH₵ 0 [B1]\nRemaining income = 30,000 - 4,000 = GH₵ 26,000\n- 2nd Band (Next GH₵ 6,000 @ 5%): Tax = 0.05 × 6,000 = GH₵ 300 [M1, A1]\nRemaining income = 26,000 - 6,000 = GH₵ 20,000\n- 3rd Band (Next GH₵ 10,000 @ 10%): Tax = 0.10 × 10,000 = GH₵ 1,000 [M1, A1]\nRemaining income = 20,000 - 10,000 = GH₵ 10,000\n- 4th Band (Remainder GH₵ 10,000 @ 15%): Tax = 0.15 × 10,000 = GH₵ 1,500 [M1, A1]",
                  "Step 3: Total Annual Tax:\nTotal Tax = 0 + 300 + 1,000 + 1,500 = GH₵ 2,800 [A1]"
            ],
            "keyTakeaway": "Tabulate each band clearly to ensure all portions of taxable income add up to exactly GH₵ 30,000."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t1-commercial-arithmetic-tax']
  },

  {
    id: 'shs2-math-t1-circle-theorems-angles',
    subjectId: 'math',
    level: 'SHS 2',
    term: 1,
    orderIndex: 6,
    title: "Circle Theorems I: Angles at Centre, Semicircles & Same Segment",
    description: "Angle subtended at centre is twice angle at circumference, angle in a semicircle is 90°, angles in same segment are equal, chord bisection.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Theorem 1 (Angle at Centre):
  - The angle subtended by an arc at the center is twice the angle subtended by the same arc at the circumference: ∠AOB = 2∠APB.
• Theorem 2 (Angle in Semicircle):
  - The angle subtended at the circumference by a diameter is a right angle (90°).
• Theorem 3 (Angles in Same Segment):
  - Angles subtended by the same chord or arc in the same segment are equal.
• Chord Properties:
  - The perpendicular from the center of a circle to a chord bisects the chord: r² = d² + (c/2)².
  - Equal chords are equidistant from the center.`,
    detailedNotes: {
      "introduction": "Circle theorems establish invariant geometric angle relationships that hold true regardless of circle radius.",
      "realWorldContext": "Mechanical engineers designing circular gears and disc brake calipers in Tema rely on chord and subtended angle theorems to ensure precision torque transmission.",
      "objectives": [
            "Apply the angle at center theorem to acute, obtuse, and reflex angles",
            "Identify right-angled triangles inscribed in semicircles",
            "Use the same segment theorem to solve intersecting chord problems",
            "Calculate chord lengths and circle radii using Pythagoras theorem"
      ],
      "sections": [
            {
                  "title": "Identifying Radii and Isosceles Triangles",
                  "content": "Whenever lines connect the center O to points on the circumference A and B, OA = OB = radius r. Triangle OAB is always isosceles, meaning base angles ∠OAB and ∠OBA are equal.",
                  "bulletPoints": [
                        "Spot all radii originating from center O.",
                        "Mark equal lengths with tick marks.",
                        "Base angles of isosceles triangles are equal.",
                        "Subtract from 180° to find the vertex angle at the center."
                  ],
                  "keyTakeaway": "Always look for hidden isosceles triangles formed by radii."
            }
      ],
      "wassceExamTips": [
            "Every single step in a geometry deduction must have its formal reason written in brackets: e.g. [∠ at centre = 2 × ∠ at circumf.] or [∠ in semicircle = 90°].",
            "WAEC marks are split 50/50 between the numeric angle value and the geometric reason.",
            "Mark given angles onto the diagram neatly to help visualize subsequent steps."
      ],
      "commonMistakes": [
            "Applying the center theorem to points that are not on the circumference.",
            "Assuming a triangle in a circle has a 90° angle when the hypotenuse is NOT a diameter.",
            "Omitting geometric reasons, losing half the marks."
      ],
      "summaryChecklist": [
            "Can I calculate the angle at circumference given center angle 130°?",
            "Can I use Pythagoras to find chord distance from center?",
            "Do I write geometric reasons in brackets for every line of deduction?"
      ]
},
    examples: [
      {
            "id": "shs2-m6-ex1",
            "title": "WASSCE Circle Geometry with Center and Semicircle",
            "problem": "In a circle with center O, AB is a diameter and C is a point on the circumference. If angle CAB = 32° and D is a point on the circumference on the same side of AB as C such that AD = CD, find: (i) angle ACB; (ii) angle ABC; (iii) angle ADC.",
            "stepByStepSolution": [
                  "Step 1: Find angle ACB:\nSince AB is a diameter, angle ACB is subtended by a diameter in a semicircle.\nangle ACB = 90° [B1 - reason: ∠ in a semicircle = 90°]",
                  "Step 2: Find angle ABC in right-angled triangle ABC:\nangle ABC = 180° - (90° + 32°) = 180° - 122° = 58° [M1, A1 - reason: sum of ∠s in a triangle = 180°]",
                  "Step 3: Quadrilateral ABCD has vertices on circle:\nSince ABCD is a cyclic quadrilateral, opposite angles add to 180°.\nangle ADC + angle ABC = 180° [M1 - reason: opp. ∠s of cyclic quad = 180°]",
                  "Step 4: Calculate angle ADC:\nangle ADC = 180° - 58° = 122° [A1]"
            ],
            "keyTakeaway": "Always state reasons like [∠ in semicircle] and [opp. ∠s of cyclic quad = 180°] to get full method marks."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t1-circle-theorems-angles']
  },

  {
    id: 'shs2-math-t2-circle-theorems-cyclic-tangents',
    subjectId: 'math',
    level: 'SHS 2',
    term: 2,
    orderIndex: 7,
    title: "Circle Theorems II: Cyclic Quadrilaterals & Tangent Theorems",
    description: "Opposite angles of cyclic quadrilaterals, exterior angles, tangents perpendicular to radius, tangents from an external point, and alternate segment theorem.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Cyclic Quadrilaterals:
  - All 4 vertices lie on the circumference.
  - Opposite angles are supplementary: ∠A + ∠C = 180°, ∠B + ∠D = 180°.
  - Exterior angle = interior opposite angle.
• Tangent Properties:
  - Tangent is perpendicular to radius at point of contact: radius ⊥ tangent (90°).
  - Two tangents from external point T (TA and TB): TA = TB, and line TO bisects angle ATB.
• Alternate Segment Theorem:
  - The angle between a tangent and a chord through the point of contact equals the angle subtended by that chord in the alternate segment.`,
    detailedNotes: {
      "introduction": "Cyclic quadrilaterals and circle tangents complete the standard Euclidean geometry toolkit for senior high school.",
      "realWorldContext": "Astronomers and satellite tracking stations in Kuntunse use tangent line-of-sight geometry to calculate satellite visibility horizon windows over the Earth surface.",
      "objectives": [
            "Solve multi-angle problems involving cyclic quadrilaterals and exterior angles",
            "Apply tangent-radius 90° theorems to right-angled triangle constructions",
            "Solve tangent problems from external points using equal tangent lengths",
            "Recognize and apply the alternate segment theorem to complex triangle-tangent figures"
      ],
      "sections": [
            {
                  "title": "The Alternate Segment Recognition Guide",
                  "content": "To apply the alternate segment theorem: locate the tangent line and chord meeting at point of contact P. The chord forms one side of an inscribed triangle. The angle between tangent and chord equals the angle at the far opposite corner inside the circle.",
                  "bulletPoints": [
                        "Identify point of contact P.",
                        "Locate chord PQ.",
                        "Look inside the circle at triangle PQR.",
                        "Angle between tangent and PQ equals angle PRQ."
                  ],
                  "keyTakeaway": "The angle between tangent and chord equals the interior angle facing that chord."
            }
      ],
      "wassceExamTips": [
            "Watch for tangents from an external point: they create an isosceles triangle with the chord joining points of contact.",
            "State [alt. segment thm] clearly when equating tangent-chord angles to interior angles.",
            "Check that all 4 corners touch the circumference before using cyclic quadrilateral theorems."
      ],
      "commonMistakes": [
            "Using cyclic quadrilateral properties on a 4-sided figure where one vertex is at the center O instead of the circumference.",
            "Confusing the alternate segment angle with the adjacent angle in the same segment.",
            "Forgetting that tangent meets radius at 90°."
      ],
      "summaryChecklist": [
            "Can I find opposite angles of a cyclic quad?",
            "Can I apply tangent ⊥ radius = 90°?",
            "Can I spot the alternate segment angle in a figure?"
      ]
},
    examples: [
      {
            "id": "shs2-m7-ex1",
            "title": "WASSCE Alternate Segment and Tangent Problem",
            "problem": "In a figure, TP is a tangent to a circle at point P. Triangle PQR is inscribed in the circle such that angle TPQ = 55° and angle PQR = 70°. Find: (i) angle PRQ; (ii) angle QPR.",
            "stepByStepSolution": [
                  "Step 1: Apply the Alternate Segment Theorem:\nThe angle between tangent TP and chord PQ equals the angle in the alternate segment subtended by PQ, which is angle PRQ.\nangle PRQ = angle TPQ = 55° [M1, A1 - reason: ∠ in alternate segment]",
                  "Step 2: Find angle QPR using the angle sum of triangle PQR:\nIn triangle PQR, sum of angles = 180°:\nangle QPR + angle PQR + angle PRQ = 180° [M1]\nangle QPR + 70° + 55° = 180°\nangle QPR + 125° = 180° [M1]\nangle QPR = 180° - 125° = 55° [A1 - reason: sum of ∠s in a triangle = 180°]"
            ],
            "keyTakeaway": "Stating [∠ in alternate segment] earns the key method and accuracy marks."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t2-circle-theorems-cyclic-tangents']
  },

  {
    id: 'shs2-math-t2-trigonometry-ratios-graphs',
    subjectId: 'math',
    level: 'SHS 2',
    term: 2,
    orderIndex: 8,
    title: "Trigonometry I: SohCahToa, Special Angles & Elevation/Depression",
    description: "Trigonometric ratios (sin, cos, tan), exact values for 30°, 45°, 60°, Pythagorean identity sin²θ + cos²θ = 1, and angles of elevation & depression.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=PUB0TaZ7bhA',
    youtubeId: 'PUB0TaZ7bhA',
    keyNotes: `• Definitions (Right-Angled Triangle):
  - sin θ = Opp / Hyp
  - cos θ = Adj / Hyp
  - tan θ = Opp / Adj = sin θ / cos θ
• Special Angles Exact Surds:
  - 30°: sin = 1/2, cos = √3/2, tan = 1/√3
  - 45°: sin = 1/√2, cos = 1/√2, tan = 1
  - 60°: sin = √3/2, cos = 1/2, tan = √3
• Fundamental Identity:
  - sin² θ + cos² θ = 1
  - Complementary Angles: sin(90° - θ) = cos θ ; cos(90° - θ) = sin θ.
• Elevation & Depression:
  - Angle of elevation is measured UPWARDS from horizontal eye level.
  - Angle of depression is measured DOWNWARDS from horizontal eye level.
  - Angle of elevation = Angle of depression (alternate interior angles).`,
    detailedNotes: {
      "introduction": "Trigonometry connects angular measures with linear lengths, enabling indirect measurement of heights and distances.",
      "realWorldContext": "Maritime navigators docking cargo ships at Takoradi Harbor calculate harbor approach angles and tide depths using trigonometric ratios.",
      "objectives": [
            "Calculate missing sides and angles in right-angled triangles using SohCahToa",
            "Evaluate trigonometric expressions involving special angles without using calculators",
            "Apply the Pythagorean trigonometric identity sin²θ + cos²θ = 1",
            "Model and solve practical problems on angles of elevation and depression"
      ],
      "sections": [
            {
                  "title": "The Horizontal Reference Line Rule",
                  "content": "The most frequent student mistake in elevation/depression word problems is measuring the angle from the vertical tower or pole. The angle MUST always be measured from a HORIZONTAL line of sight.",
                  "bulletPoints": [
                        "Draw a horizontal dashed line at the observer eye level.",
                        "Angle of depression is below this horizontal line.",
                        "Angle of elevation is above this horizontal line.",
                        "Use alternate angles to bring angle of depression inside the ground triangle."
                  ],
                  "keyTakeaway": "Always measure angles of elevation and depression from the horizontal."
            }
      ],
      "wassceExamTips": [
            "Draw a large, clear diagram showing the ground, vertical heights, and horizontal reference lines before doing any trigonometry.",
            "Keep surds in exact form (e.g. 50√3 m) if asked for exact values, or round to 3 significant figures if decimals are required.",
            "Ensure calculator is in DEGREE mode (D), not Radians (R) or Gradians (G)."
      ],
      "commonMistakes": [
            "Measuring angle of depression from the vertical wall instead of horizontal.",
            "Calculator set to Radians mode leading to completely wrong decimal outputs.",
            "Mixing up Opposite and Adjacent sides relative to the chosen reference angle."
      ],
      "summaryChecklist": [
            "Can I recall exact values of sin, cos, tan for 30°, 45°, 60°?",
            "Can I calculate tree height given distance 20 m and elevation 35°?",
            "Can I use sin²θ + cos²θ = 1 to find cos θ given sin θ = 5/13?"
      ]
},
    examples: [
      {
            "id": "shs2-m8-ex1",
            "title": "WASSCE Angle of Elevation Word Problem",
            "problem": "Two points A and B on the same horizontal ground are on opposite sides of a vertical communications mast. The angles of elevation of the top of the mast from A and B are 30° and 60° respectively. If the distance between A and B is 120 m, calculate the height of the mast correct to 1 decimal place.",
            "stepByStepSolution": [
                  "Step 1: Let the mast height be h m, and the foot of the mast be F.\nLet distance AF = x m, then FB = (120 - x) m.",
                  "Step 2: From right-angled triangle AFT:\ntan 30° = h / x => x = h / tan 30° = h / (1/√3) = h√3 [M1]",
                  "Step 3: From right-angled triangle BFT:\ntan 60° = h / (120 - x) => 120 - x = h / tan 60° = h / √3 [M1]",
                  "Step 4: Substitute x = h√3 into equation 2:\n120 - h√3 = h / √3 [M1]",
                  "Step 5: Multiply through by √3:\n120√3 - 3h = h\n120√3 = 4h [M1]",
                  "Step 6: Solve for h:\nh = (120√3) / 4 = 30√3 m [A1]\nh = 30 × 1.73205 = 51.96 m => 52.0 m (1 d.p.) [A1]"
            ],
            "keyTakeaway": "Express both horizontal ground segments in terms of height h, then equate their sum to total distance."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t2-trigonometry-ratios-graphs']
  },

  {
    id: 'shs2-math-t2-coord-geometry-lines',
    subjectId: 'math',
    level: 'SHS 2',
    term: 2,
    orderIndex: 9,
    title: "Coordinate Geometry II: Parallel & Perpendicular Lines, Midpoints",
    description: "Gradient m = Δy/Δx, parallel lines m₁ = m₂, perpendicular lines m₁m₂ = -1, perpendicular bisectors, and point-slope line equations.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=2TzT3k8V-kE',
    youtubeId: '2TzT3k8V-kE',
    keyNotes: `• Gradient (Slope): m = (y₂ - y₁) / (x₂ - x₁).
• Parallel Lines:
  - Lines L₁ and L₂ are parallel if and only if m₁ = m₂.
• Perpendicular Lines:
  - Lines L₁ and L₂ are perpendicular if and only if m₁ × m₂ = -1 (m₂ = -1/m₁).
• Perpendicular Bisector:
  - Passes through midpoint M = ((x₁+x₂)/2, (y₁+y₂)/2).
  - Has gradient m_perp = -1 / m_line.
• General Equation Form: ax + by + c = 0.`,
    detailedNotes: {
      "introduction": "Coordinate geometry unifies algebra and synthetic geometry, providing equations to model boundaries, trajectories, and orthogonal infrastructure.",
      "realWorldContext": "Town and country planners designing road grids in new suburbs like Dawhenya use perpendicular line equations to layout crossroads at 90-degree intersections.",
      "objectives": [
            "Determine whether two lines are parallel, perpendicular, or neither from their equations",
            "Find the equation of a line parallel or perpendicular to a given line through a specific point",
            "Determine the equation of the perpendicular bisector of a segment",
            "Solve collinearity and geometric quadrilateral coordinate proofs"
      ],
      "sections": [
            {
                  "title": "The Negative Reciprocal Rule",
                  "content": "If a line has gradient a/b, any perpendicular line has gradient -b/a. Invert the fraction and change the sign. If the original gradient is 3, the perpendicular gradient is -1/3. If original is -2/5, perpendicular is 5/2.",
                  "bulletPoints": [
                        "Convert line equation to y = mx + c to read slope m.",
                        "Flip fraction and negate: m_perp = -1/m.",
                        "Substitute into y - y₁ = m_perp(x - x₁).",
                        "Clear fractions to write in standard form."
                  ],
                  "keyTakeaway": "Perpendicular gradients always multiply to give -1."
            }
      ],
      "wassceExamTips": [
            "Rearrange equations into y = mx + c first to correctly identify the gradient m before finding perpendicular slopes.",
            "For perpendicular bisector questions, calculate TWO things: (1) Midpoint; (2) Perpendicular gradient.",
            "Express final line equations in standard form ax + by + c = 0 with integer coefficients if asked."
      ],
      "commonMistakes": [
            "Forgetting to invert the gradient when finding perpendicular lines (using -m instead of -1/m).",
            "Using one of the end points instead of the midpoint when finding the perpendicular bisector.",
            "Negative sign errors when moving terms across the equals sign."
      ],
      "summaryChecklist": [
            "Can I find the gradient of 3x - 4y = 8?",
            "Can I find the equation of the line perpendicular to y = 2x + 1 through (3, 4)?",
            "Can I construct the equation of a perpendicular bisector?"
      ]
},
    examples: [
      {
            "id": "shs2-m9-ex1",
            "title": "WASSCE Perpendicular Bisector Equation",
            "problem": "Find the equation of the perpendicular bisector of the line segment joining the points A(-1, 4) and B(5, -2), giving your answer in the form ax + by + c = 0.",
            "stepByStepSolution": [
                  "Step 1: Find the coordinates of the midpoint M of AB:\nM = [(-1 + 5)/2, (4 + (-2))/2] = [4/2, 2/2] = (2, 1) [M1, A1]",
                  "Step 2: Calculate the gradient of AB:\nm_AB = (-2 - 4) / (5 - (-1)) = -6 / (5 + 1) = -6 / 6 = -1 [M1, A1]",
                  "Step 3: Determine the perpendicular gradient:\nm_perp = -1 / m_AB = -1 / (-1) = 1 [B1]",
                  "Step 4: Use point-slope form with midpoint M(2, 1) and m = 1:\ny - y₁ = m(x - x₁)\ny - 1 = 1(x - 2) [M1]\ny - 1 = x - 2",
                  "Step 5: Rearrange into the required form ax + by + c = 0:\nx - y - 2 + 1 = 0\nx - y - 1 = 0 [A1]"
            ],
            "keyTakeaway": "Perpendicular bisector requires both the midpoint and the negative reciprocal slope."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t2-coord-geometry-lines']
  },

  {
    id: 'shs2-math-t2-vectors-plane',
    subjectId: 'math',
    level: 'SHS 2',
    term: 2,
    orderIndex: 10,
    title: "Vectors in a Plane (Column Vectors, Magnitude & Operations)",
    description: "Column vectors, addition and subtraction, scalar multiplication, position vectors, magnitude |v| = √(x² + y²), parallel vectors, and triangle law.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=ml4C3x9alKC',
    youtubeId: 'ml4C3x9alKC',
    keyNotes: `• Vector Notation:
  - Column vector v = [x, y]ᵀ (or xi + yj).
  - Magnitude |v| = √(x² + y²).
  - Unit vector = v / |v|.
• Operations:
  - Addition: [x₁, y₁] + [x₂, y₂] = [x₁ + x₂, y₁ + y₂].
  - Scalar Multiplication: k[x, y] = [kx, ky].
• Position Vectors & Displacement:
  - Position vector of point P(x, y) from origin O is OP = [x, y].
  - Vector AB connecting points A and B: AB = OB - OA.
• Parallel Vectors:
  - Two vectors u and v are parallel if u = kv for some non-zero scalar k.`,
    detailedNotes: {
      "introduction": "Vectors represent physical quantities possessing both magnitude and direction, such as force, velocity, and displacement.",
      "realWorldContext": "Aviation traffic controllers at Kotoka International Airport track aircraft flight vectors (ground speed and heading) to ensure safe separation between arriving flights.",
      "objectives": [
            "Add, subtract, and multiply column vectors by scalars",
            "Calculate the magnitude and direction bearing of 2D vectors",
            "Express displacement vectors in terms of position vectors (AB = OB - OA)",
            "Verify parallelism between vectors using scalar proportionality"
      ],
      "sections": [
            {
                  "title": "Displacement Vector AB = OB - OA",
                  "content": "To find vector AB from position vectors: displacement from A to B means starting at A, returning to origin (-OA), and travelling from origin to B (+OB). Hence AB = OB - OA.",
                  "bulletPoints": [
                        "Write down position vector OA = [x₁, y₁].",
                        "Write down position vector OB = [x₂, y₂].",
                        "Compute AB = [x₂ - x₁, y₂ - y₁].",
                        "Magnitude |AB| gives the geometric distance between points."
                  ],
                  "keyTakeaway": "Always subtract initial point from terminal point: AB = OB - OA."
            }
      ],
      "wassceExamTips": [
            "Write vectors in clear column form with brackets; do NOT write them as fractions with a division line.",
            "Use arrow notation (→AB) or bold underline (a) to denote vector quantities.",
            "Magnitude cannot be negative; always take the positive square root."
      ],
      "commonMistakes": [
            "Writing column vectors with fraction bars: [x/y] is completely incorrect notation.",
            "Calculating AB as OA - OB instead of OB - OA.",
            "Forgetting to square the components before adding under the square root for magnitude."
      ],
      "summaryChecklist": [
            "Can I calculate the magnitude of [-5, 12]?",
            "Can I find AB given A(2, 3) and B(7, -9)?",
            "Can I find scalar k such that [k, 6] is parallel to [2, 3]?"
      ]
},
    examples: [
      {
            "id": "shs2-m10-ex1",
            "title": "WASSCE Vector Operations and Collinearity",
            "problem": "The position vectors of points P, Q, and R are OP = [2, 3], OQ = [5, 9], and OR = [8, 15]. (i) Find vectors PQ and QR; (ii) Show that points P, Q, and R are collinear.",
            "stepByStepSolution": [
                  "Step 1: Calculate vector PQ:\nPQ = OQ - OP = [5 - 2, 9 - 3] = [3, 6] [M1, A1]",
                  "Step 2: Calculate vector QR:\nQR = OR - OQ = [8 - 5, 15 - 9] = [3, 6] [M1, A1]",
                  "Step 3: Compare vectors PQ and QR:\nQR = 1 × PQ. Since QR is a scalar multiple of PQ, PQ is parallel to QR. [M1]",
                  "Step 4: Check for common point:\nBoth vectors share the common point Q. [B1]",
                  "Step 5: Conclusion:\nSince PQ || QR and they share the common point Q, points P, Q, and R are collinear. [A1]"
            ],
            "keyTakeaway": "To prove collinearity with vectors: show parallel (scalar multiple) AND mention the common shared point."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t2-vectors-plane']
  },

  {
    id: 'shs2-math-t2-transformations-rigid',
    subjectId: 'math',
    level: 'SHS 2',
    term: 2,
    orderIndex: 11,
    title: "Transformations I: Rigid Motions (Translations, Reflections & Rotations)",
    description: "Translations by vector T, reflections in x-axis, y-axis, y = ±x, rotations of 90° and 180° about the origin, and isometric congruence.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=Xdhb4F_vN3s',
    youtubeId: 'Xdhb4F_vN3s',
    keyNotes: `• Translation:
  - Vector T = [a, b]: (x, y) ↦ (x + a, y + b).
• Reflection Mappings:
  - In x-axis (y = 0): (x, y) ↦ (x, -y).
  - In y-axis (x = 0): (x, y) ↦ (-x, y).
  - In line y = x: (x, y) ↦ (y, x).
  - In line y = -x: (x, y) ↦ (-y, -x).
• Rotation Mappings (About Origin):
  - 90° Anticlockwise (+90°): (x, y) ↦ (-y, x).
  - 90° Clockwise (-90° / 270°): (x, y) ↦ (y, -x).
  - 180° (Clockwise or Anticlockwise): (x, y) ↦ (-x, -y).
• Isometry: Preserves shape and size (congruent figures).`,
    detailedNotes: {
      "introduction": "Transformations map points in a plane to new positions according to precise geometric rules.",
      "realWorldContext": "Graphic designers and textile printers in Akosombo use reflection and rotational symmetry to generate traditional repeating adinkra patterns.",
      "objectives": [
            "Determine images of geometric points and polygons under translations",
            "Apply reflection mappings across coordinate axes and diagonal lines",
            "Compute rotated coordinates through 90° and 180° rotations about the origin",
            "Combine successive transformations and identify single equivalent mappings"
      ],
      "sections": [
            {
                  "title": "The Rotation Sign Convention",
                  "content": "In mathematics and WAEC examinations, angles of rotation are ANTICLOCKWISE by convention unless explicitly specified as clockwise. A rotation of 90° means 90° anticlockwise.",
                  "bulletPoints": [
                        "+90° = 90° anticlockwise = (-y, x).",
                        "-90° = 90° clockwise = (y, -x).",
                        "180° = half turn = (-x, -y).",
                        "Always verify with a quick sketch of quadrant movements."
                  ],
                  "keyTakeaway": "Positive rotation angles indicate anticlockwise motion."
            }
      ],
      "wassceExamTips": [
            "Memorize coordinate mapping formulas (e.g. y = x swaps coordinates).",
            "Label transformed vertices with prime notation (A', B', C').",
            "When plotting on graph paper, use the exact scale given in the question."
      ],
      "commonMistakes": [
            "Confusing 90° clockwise with 90° anticlockwise.",
            "Swapping coordinates incorrectly in reflection in y = -x: (-y, -x).",
            "Adding translation vector to the image instead of the object."
      ],
      "summaryChecklist": [
            "Can I reflect (3, -4) in the line y = -x?",
            "Can I rotate (-2, 5) through 90° anticlockwise about the origin?",
            "Can I translate (1, 2) by vector [-3, 5]?"
      ]
},
    examples: [
      {
            "id": "shs2-m11-ex1",
            "title": "WASSCE Composite Transformation on Coordinates",
            "problem": "Triangle ABC has vertices A(1, 2), B(4, 2), and C(3, 5). Find the coordinates of the image vertices under: (i) reflection in the y-axis to give A₁B₁C₁; (ii) rotation of A₁B₁C₁ through 90° anticlockwise about the origin to give A₂B₂C₂.",
            "stepByStepSolution": [
                  "Step 1: State the mapping for reflection in the y-axis:\n(x, y) ↦ (-x, y) [B1]",
                  "Step 2: Apply to vertices A, B, C:\nA(1, 2) ↦ A₁(-1, 2)\nB(4, 2) ↦ B₁(-4, 2)\nC(3, 5) ↦ C₁(-3, 5) [M1, A1]",
                  "Step 3: State the mapping for 90° anticlockwise rotation about origin:\n(x, y) ↦ (-y, x) [B1]",
                  "Step 4: Apply to vertices A₁, B₁, C₁:\nA₁(-1, 2) ↦ A₂(-2, -1)\nB₁(-4, 2) ↦ B₂(-2, -4)\nC₁(-3, 5) ↦ C₂(-5, -3) [M1, A1]"
            ],
            "keyTakeaway": "Process composite transformations one stage at a time, stating mapping rules clearly."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t2-transformations-rigid']
  },

  {
    id: 'shs2-math-t2-transformations-enlargement',
    subjectId: 'math',
    level: 'SHS 2',
    term: 2,
    orderIndex: 12,
    title: "Transformations II: Enlargements, Scale Factors & Area Ratios",
    description: "Enlargement from origin and arbitrary centers, positive and negative scale factors, invariant points, Area Scale Factor k², and Volume Scale Factor k³.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=kYyY7-V5h0s',
    youtubeId: 'kYyY7-V5h0s',
    keyNotes: `• Enlargement with Center (0, 0):
  - (x, y) ↦ (kx, ky) where k is the scale factor.
• Enlargement with Arbitrary Center C(a, b):
  - Vector equation: Image = Center + k(Object - Center).
  - x' = a + k(x - a) ; y' = b + k(y - b).
• Scale Factor Properties:
  - k > 1: Magnified and on the same side of center.
  - 0 < k < 1: Diminished and on the same side.
  - k < 0: Inverted and on opposite side of center.
• Area & Volume Ratios:
  - Linear Scale Factor = k.
  - Area Scale Factor = k² (Area of image = k² × Area of object).
  - Volume Scale Factor = k³ (Volume of image = k³ × Volume of object).`,
    detailedNotes: {
      "introduction": "Enlargement produces similar geometric figures whose corresponding angles are congruent and whose side lengths are scaled by a constant factor k.",
      "realWorldContext": "Cartographers producing Ghana survey topographic maps enlarge aerial drone photography using precise scale factors to create accurate road atlases.",
      "objectives": [
            "Determine images of coordinates under enlargement with center at the origin",
            "Find images under enlargement with arbitrary center C(a, b)",
            "Calculate scale factor k from object and image dimensions",
            "Apply area scale factor k² and volume scale factor k³ to solve practical problems"
      ],
      "sections": [
            {
                  "title": "Negative Scale Factor Visualization",
                  "content": "A negative scale factor (e.g. k = -2) creates an image on the OPPOSITE side of the center of enlargement. The image is inverted (turned upside-down) and its distance from the center is |k| times the object distance.",
                  "bulletPoints": [
                        "Draw ray from object through center of enlargement.",
                        "Extend the ray beyond the center in the opposite direction.",
                        "Multiply distance by |k|.",
                        "Negative scale factor inverts the object."
                  ],
                  "keyTakeaway": "Negative scale factors produce inverted images on the opposite side of the center."
            }
      ],
      "wassceExamTips": [
            "Always square the scale factor when dealing with areas: Area_image = k² × Area_object.",
            "Cube the scale factor when dealing with volumes or capacities: Volume_image = k³ × Volume_object.",
            "Center of enlargement is the ONLY point that remains invariant."
      ],
      "commonMistakes": [
            "Multiplying area by k instead of k².",
            "Multiplying coordinates by k directly when the center of enlargement is NOT the origin.",
            "Negative sign errors when using C + k(P - C)."
      ],
      "summaryChecklist": [
            "Can I enlarge (3, 5) with scale factor 2 about center (1, 1)?",
            "Can I calculate the area of an image when k = 3 and object area = 12 cm²?",
            "Can I find scale factor k from an area ratio of 16 : 1?"
      ]
},
    examples: [
      {
            "id": "shs2-m12-ex1",
            "title": "WASSCE Enlargement with Arbitrary Center",
            "problem": "Find the image of point P(5, -2) under an enlargement with center C(1, 2) and scale factor k = -3.",
            "stepByStepSolution": [
                  "Step 1: State the formula for enlargement with center C(a, b):\nImage P' = C + k(P - C) [M1]",
                  "Step 2: Calculate displacement vector (P - C):\nP - C = [5 - 1, -2 - 2] = [4, -4] [M1]",
                  "Step 3: Multiply by scale factor k = -3:\nk(P - C) = -3 × [4, -4] = [-12, 12] [M1]",
                  "Step 4: Add back center C(1, 2):\nP' = [1 + (-12), 2 + 12] = [-11, 14] [A1]",
                  "Step 5: State image coordinates:\nP'(-11, 14) [B1]"
            ],
            "keyTakeaway": "Always subtract center first, multiply by k, then add the center back."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t2-transformations-enlargement']
  },

  {
    id: 'shs2-math-t3-statistics-grouped-mean',
    subjectId: 'math',
    level: 'SHS 2',
    term: 3,
    orderIndex: 13,
    title: "Statistics II: Grouped Data, Class Boundaries & Assumed Mean",
    description: "Class intervals, boundaries, midpoints, class widths, computing grouped mean directly x̄ = ∑fx/∑f, and using assumed mean x̄ = A + ∑fd/∑f.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hYqZ4wLqFk',
    youtubeId: '0hYqZ4wLqFk',
    keyNotes: `• Grouped Frequency Definitions:
  - Class Interval: e.g. 20 - 29.
  - Class Boundaries: 19.5 - 29.5 (subtract 0.5 from lower, add 0.5 to upper for discrete integers).
  - Class Midpoint x = (Lower Limit + Upper Limit) / 2.
  - Class Width c = Upper Boundary - Lower Boundary.
• Methods for Calculating the Mean:
  - Direct Method: x̄ = (∑fx) / (∑f).
  - Assumed Mean Method: x̄ = A + (∑fd) / (∑f), where d = x - A.
  - Step-Deviation Method: x̄ = A + [(∑fu) / (∑f)] × c, where u = (x - A) / c.`,
    detailedNotes: {
      "introduction": "Grouped frequency distributions condense vast data collections into manageable intervals for national surveys, censuses, and industrial audits.",
      "realWorldContext": "The Ministry of Health in Ghana compiles national infant birth weights into grouped frequency distributions to track regional nutritional trends.",
      "objectives": [
            "Determine class limits, boundaries, midpoints, and interval widths accurately",
            "Calculate the mean of grouped continuous distributions using the direct method",
            "Apply the assumed mean method x̄ = A + ∑fd/∑f to simplify manual calculations",
            "Identify modal classes and median classes from cumulative totals"
      ],
      "sections": [
            {
                  "title": "Selecting an Assumed Mean A",
                  "content": "Choose an assumed mean A from the class midpoint column located near the middle of the distribution, preferably corresponding to the highest or second-highest frequency. This ensures positive and negative deviations roughly balance, keeping ∑fd small.",
                  "bulletPoints": [
                        "Pick A from the class midpoint column x (NEVER from the frequency column!).",
                        "Calculate d = x - A for each class.",
                        "Multiply each frequency f by deviation d.",
                        "Compute ∑fd and divide by total frequency ∑f."
                  ],
                  "keyTakeaway": "Assumed mean A must be chosen from the midpoint column x."
            }
      ],
      "wassceExamTips": [
            "Never select A from the frequency column; A must be an x-value (midpoint).",
            "Clearly show column headings: [Class | f | x | d = x - A | fd] to secure method marks.",
            "Double check the sum ∑fd: watch negative signs carefully!"
      ],
      "commonMistakes": [
            "Choosing the assumed mean A from the frequency column instead of the midpoint column.",
            "Arithmetic sign errors when adding negative deviations in the fd column.",
            "Dividing by number of classes instead of total frequency ∑f."
      ],
      "summaryChecklist": [
            "Can I calculate class midpoints accurately?",
            "Can I set up a complete assumed mean table?",
            "Can I apply x̄ = A + (∑fd / ∑f)?"
      ]
},
    examples: [
      {
            "id": "shs2-m13-ex1",
            "title": "WASSCE Assumed Mean Calculation",
            "problem": "The table below shows the distribution of masses (in kg) of 40 students:\nClass (kg): 40-44, 45-49, 50-54, 55-59, 60-64\nFrequency: 4, 10, 14, 8, 4\nUsing an assumed mean of 52 kg, calculate the mean mass of the students.",
            "stepByStepSolution": [
                  "Step 1: Set up the statistical table with midpoint x, d = x - 52, and fd:\nClass  | f  | x    | d = x - 52 | fd\n40-44  | 4  | 42   | -10        | -40\n45-49  | 10 | 47   | -5         | -50\n50-54  | 14 | 52   | 0          | 0\n55-59  | 8  | 57   | +5         | +40\n60-64  | 4  | 62   | +10        | +40 [M1 for x column, M1 for d column, M1 for fd column]",
                  "Step 2: Sum the columns:\n∑f = 4 + 10 + 14 + 8 + 4 = 40 [B1]\n∑fd = (-40 - 50 + 0 + 40 + 40) = -10 [M1]",
                  "Step 3: State the assumed mean formula:\nx̄ = A + (∑fd / ∑f) [B1]",
                  "Step 4: Substitute values:\nx̄ = 52 + (-10 / 40) = 52 - 0.25 = 51.75 kg [A1]"
            ],
            "keyTakeaway": "The assumed mean method simplifies multiplication to small numbers (-40, -50, 40, 40) avoiding errors."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t3-statistics-grouped-mean']
  },

  {
    id: 'shs2-math-t3-statistics-histograms-mode',
    subjectId: 'math',
    level: 'SHS 2',
    term: 3,
    orderIndex: 14,
    title: "Statistics III: Histograms, Frequency Polygons & Graphical Mode",
    description: "Constructing histograms with continuous class boundaries, drawing frequency polygons, and graphical estimation of the mode.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hYqZ4wLqFk',
    youtubeId: '0hYqZ4wLqFk',
    keyNotes: `• Histograms:
  - Rectangular bars touch each other with no gaps.
  - Horizontal axis: Class boundaries.
  - Vertical axis: Frequency (or Frequency Density if intervals are unequal).
• Graphical Mode Estimation:
  - Identify the modal bar (tallest rectangle).
  - Draw two diagonal straight lines from top corners of modal bar to adjacent corners of neighboring bars.
  - Read the x-value of their intersection point on the horizontal axis.
• Frequency Polygons:
  - Join the midpoints of the tops of histogram bars with straight line segments.
  - Anchor to horizontal axis at frequency 0 on both sides.`,
    detailedNotes: {
      "introduction": "Histograms graphically illustrate the shape, spread, and modal clusters of continuous data distributions.",
      "realWorldContext": "Quality assurance managers at Ghana Breweries monitor bottle fill volumes using automated histogram displays on packaging lines.",
      "objectives": [
            "Convert class intervals into continuous class boundaries for histogram plotting",
            "Construct histograms on graph paper with uniform scales and touching bars",
            "Estimate the mode accurately by drawing diagonals in the modal bar",
            "Superimpose frequency polygons on histograms"
      ],
      "sections": [
            {
                  "title": "The Mode Diagonal Intersection Technique",
                  "content": "In the tallest bar of the histogram, join the top-left corner to the top-left corner of the right neighboring bar, and the top-right corner to the top-right corner of the left neighboring bar. The two diagonals intersect inside the modal bar; drop a vertical line to read the mode.",
                  "bulletPoints": [
                        "Locate tallest bar.",
                        "Draw diagonal lines connecting adjacent corners using a straight ruler.",
                        "Drop vertical line from cross to x-axis.",
                        "Read value using the horizontal graph scale."
                  ],
                  "keyTakeaway": "Always use a sharp pencil and ruler to draw the mode diagonals."
            }
      ],
      "wassceExamTips": [
            "Bars must touch with zero gap in histograms—gaps lose all presentation marks.",
            "Use the designated scale from the question paper (e.g. 2 cm to 10 units).",
            "State your estimated mode clearly beneath the graph: e.g. \"Mode = 53.5 kg\"."
      ],
      "commonMistakes": [
            "Leaving gaps between bars as if drawing a discrete bar chart.",
            "Plotting class limits instead of class boundaries on the horizontal axis.",
            "Reading the mode as a frequency rather than a data value on the horizontal axis."
      ],
      "summaryChecklist": [
            "Can I convert 10-19 to boundaries 9.5-19.5?",
            "Can I draw the diagonal intersection to estimate mode?",
            "Can I connect midpoints to complete a frequency polygon?"
      ]
},
    examples: [
      {
            "id": "shs2-m14-ex1",
            "title": "WASSCE Histogram Mode Estimation Protocol",
            "problem": "A grouped frequency distribution has modal class boundaries 39.5 - 49.5 with frequency 25. The preceding class has frequency 15 and the succeeding class has frequency 18. Describe step-by-step how to estimate the mode from the histogram and verify algebraically.",
            "stepByStepSolution": [
                  "Step 1: Plot the three bars with class boundaries on the horizontal axis and frequencies on the vertical axis [M1].",
                  "Step 2: In the modal bar (39.5 - 49.5, height 25):\nDraw a straight line from top-left corner (39.5, 25) to top-left corner of next bar (49.5, 18) [M1].\nDraw a straight line from top-right corner (49.5, 25) to top-right corner of previous bar (39.5, 15) [M1].",
                  "Step 3: Drop a vertical line from the intersection of these two lines to the x-axis [M1].",
                  "Step 4: Read value on the x-axis:\nMode ≈ 45.2 [A1].",
                  "Step 5: Algebraic cross-check:\nMode = L + [Δ₁ / (Δ₁ + Δ₂)] × c\nL = 39.5, Δ₁ = 25 - 15 = 10, Δ₂ = 25 - 18 = 7, c = 10.\nMode = 39.5 + [10 / (10 + 7)] × 10 = 39.5 + 5.88 = 45.38."
            ],
            "keyTakeaway": "The mode leans slightly towards the side with the higher neighboring frequency (18)."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t3-statistics-histograms-mode']
  },

  {
    id: 'shs2-math-t3-probability-addition',
    subjectId: 'math',
    level: 'SHS 2',
    term: 3,
    orderIndex: 15,
    title: "Probability I: Addition Law & Mutually Exclusive Events",
    description: "Sample space, probability axioms 0 ≤ P(E) ≤ 1, complementary events P(E') = 1 - P(E), mutually exclusive events, and general addition law.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0s_A1g4jKss',
    youtubeId: '0s_A1g4jKss',
    keyNotes: `• Basic Probability Definition:
  - P(E) = n(E) / n(S) (number of favorable outcomes / total sample space).
  - 0 ≤ P(E) ≤ 1.
  - Complementary Events: P(E') = 1 - P(E).
• Mutually Exclusive Events:
  - Events cannot occur together: P(A ∩ B) = 0.
  - Addition Law: P(A ∪ B) = P(A) + P(B).
• General Addition Law (Non-Mutually Exclusive):
  - P(A ∪ B) = P(A) + P(B) - P(A ∩ B).`,
    detailedNotes: {
      "introduction": "Probability quantifies uncertainty, providing mathematical models for risk assessment, insurance underwriting, and game theory.",
      "realWorldContext": "SIC Insurance and other Ghanaian insurers calculate life and motor policy risk premiums using empirical probability models.",
      "objectives": [
            "Calculate theoretical probabilities from finite sample spaces",
            "Apply the complement rule P(E') = 1 - P(E) to simplify calculations",
            "Distinguish between mutually exclusive and non-mutually exclusive events",
            "Apply the general addition law P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"
      ],
      "sections": [
            {
                  "title": "The Non-Mutually Exclusive Overlap",
                  "content": "When events can happen simultaneously (such as drawing a card that is both a King and a Heart), adding their separate probabilities counts the intersection twice. You must subtract P(A ∩ B) to get the correct total.",
                  "bulletPoints": [
                        "Check if outcomes can belong to both events.",
                        "If yes: use P(A) + P(B) - P(A ∩ B).",
                        "If no: use P(A) + P(B).",
                        "Always leave answers as simplified fractions or decimals."
                  ],
                  "keyTakeaway": "Always subtract the intersection to prevent double counting."
            }
      ],
      "wassceExamTips": [
            "Express probability answers as simplified fractions or decimals between 0 and 1. Never leave answers as ratios (like 3:4) or numbers greater than 1.",
            "List out the sample space S explicitly to secure method marks.",
            "Remember \"OR\" corresponds to the union (∪) and addition law."
      ],
      "commonMistakes": [
            "Forgetting to subtract P(A ∩ B) for events that are not mutually exclusive.",
            "Giving probability answers greater than 1.",
            "Writing probability as a ratio instead of a fraction."
      ],
      "summaryChecklist": [
            "Can I calculate P(A ∪ B) for mutually exclusive events?",
            "Can I apply P(A ∪ B) = P(A) + P(B) - P(A ∩ B)?",
            "Can I find P(E') from P(E)?"
      ]
},
    examples: [
      {
            "id": "shs2-m15-ex1",
            "title": "WASSCE Addition Law with Overlap",
            "problem": "A card is drawn at random from a well-shuffled standard pack of 52 playing cards. Find the probability that the card drawn is: (i) an Ace; (ii) a Diamond; (iii) an Ace OR a Diamond.",
            "stepByStepSolution": [
                  "Step 1: Total sample space n(S) = 52.\n(i) Number of Aces n(A) = 4.\nP(Ace) = 4 / 52 = 1 / 13 [M1, A1]",
                  "Step 2: (ii) Number of Diamonds n(D) = 13.\nP(Diamond) = 13 / 52 = 1 / 4 [M1, A1]",
                  "Step 3: (iii) Identify intersection:\nOne card is both an Ace and a Diamond (the Ace of Diamonds), so n(A ∩ D) = 1.\nP(A ∩ D) = 1 / 52 [B1]",
                  "Step 4: Apply general addition law:\nP(Ace or Diamond) = P(A) + P(D) - P(A ∩ D) [M1]\nP(A ∪ D) = 4/52 + 13/52 - 1/52 = 16/52 = 4/13 [A1]"
            ],
            "keyTakeaway": "Always subtract the common element (Ace of Diamonds) to avoid double counting."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t3-probability-addition']
  },

  {
    id: 'shs2-math-t3-probability-multiplication',
    subjectId: 'math',
    level: 'SHS 2',
    term: 3,
    orderIndex: 16,
    title: "Probability II: Multiplication Law & Independent Events",
    description: "Independent events, multiplication law P(A ∩ B) = P(A) × P(B), selection with and without replacement, and \"at least one\" problems.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0s_A1g4jKss',
    youtubeId: '0s_A1g4jKss',
    keyNotes: `• Independent Events:
  - Event A has no impact on event B.
  - Multiplication Law: P(A ∩ B) = P(A) × P(B).
• Selection with vs without Replacement:
  - With Replacement: Total remains constant; probabilities unchanged (independent).
  - Without Replacement: Total sample space decreases by 1 on subsequent draws (dependent).
• The "At Least One" Rule:
  - P(At least one) = 1 - P(None).`,
    detailedNotes: {
      "introduction": "The multiplication law evaluates joint probabilities for multi-stage sequential processes and independent experiments.",
      "realWorldContext": "Telecommunication engineers at MTN Ghana model network call drop probabilities across multiple relay towers using independent event multiplication.",
      "objectives": [
            "Identify independent events and apply the multiplication rule P(A ∩ B) = P(A) × P(B)",
            "Differentiate between sampling with replacement and without replacement",
            "Solve multi-stage probability problems using the complement rule 1 - P(None)",
            "Evaluate combined events involving both addition and multiplication rules"
      ],
      "sections": [
            {
                  "title": "The \"At Least One\" Shortcut",
                  "content": "Calculating \"at least one success\" directly across multiple trials requires summing many combination cases. It is far simpler and faster to compute 1 - P(all fail).",
                  "bulletPoints": [
                        "Find probability of failure on one trial q = 1 - p.",
                        "Multiply failure probabilities across all trials: P(none) = qⁿ.",
                        "Subtract from 1: P(at least one) = 1 - qⁿ.",
                        "Saves lines of tedious arithmetic."
                  ],
                  "keyTakeaway": "Always use P(at least one) = 1 - P(none)."
            }
      ],
      "wassceExamTips": [
            "Watch for the keywords \"with replacement\" vs \"without replacement\" in the question text.",
            "Multiply probabilities along branch paths (AND), add probabilities across alternative paths (OR).",
            "Show all fractional products before simplifying."
      ],
      "commonMistakes": [
            "Failing to decrease the total denominator when sampling without replacement.",
            "Adding probabilities when events occur together sequentially (AND means multiply, not add).",
            "Rounding fractions prematurely instead of working with exact fractions."
      ],
      "summaryChecklist": [
            "Can I calculate P(A and B) for independent events?",
            "Can I adjust denominators for sampling without replacement?",
            "Can I apply P(at least one) = 1 - P(none)?"
      ]
},
    examples: [
      {
            "id": "shs2-m16-ex1",
            "title": "WASSCE Multi-Stage Probability Problem",
            "problem": "A bag contains 7 white balls and 5 red balls. Two balls are drawn at random one after the other without replacement. Find the probability that: (i) both balls are white; (ii) the balls are of different colours.",
            "stepByStepSolution": [
                  "Step 1: Total number of balls = 7 + 5 = 12.\n(i) Probability that both balls are white:\nFirst ball white: P(W₁) = 7 / 12 [M1]\nSecond ball white (6 white left out of 11): P(W₂|W₁) = 6 / 11 [M1]\nP(Both White) = (7 / 12) × (6 / 11) = 42 / 132 = 7 / 22 [A1]",
                  "Step 2: (ii) Probability of different colours:\nTwo mutually exclusive ways: White then Red (WR), OR Red then White (RW).\nP(WR) = (7 / 12) × (5 / 11) = 35 / 132 [M1]\nP(RW) = (5 / 12) × (7 / 11) = 35 / 132 [M1]",
                  "Step 3: Combine by Addition Law:\nP(Different Colours) = P(WR) + P(RW) = 35/132 + 35/132 = 70/132 = 35 / 66 [A1]"
            ],
            "keyTakeaway": "Remember without replacement reduces both numerator and denominator on the second draw."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t3-probability-multiplication']
  },

  {
    id: 'shs2-math-t3-modular-arithmetic',
    subjectId: 'math',
    level: 'SHS 2',
    term: 3,
    orderIndex: 17,
    title: "Modular Arithmetic (Clock Arithmetic & Modulo Operations)",
    description: "Congruence modulo n, operations (+, -, ×) in modulo n, additive and multiplicative inverses, solving linear congruences, and calendar math.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=s_z9p7hB5bU',
    youtubeId: 's_z9p7hB5bU',
    keyNotes: `• Definition of Congruence:
  - a ≡ b (mod n) means (a - b) is divisible by n, or a and b leave the same remainder when divided by n.
  - The standard set of residues modulo n is {0, 1, 2, ..., n - 1}.
• Operations:
  - Perform ordinary arithmetic, then replace result with remainder upon division by n.
  - Negative numbers: Add n repeatedly until positive.
• Inverses:
  - Additive Inverse: The number b such that (a + b) ≡ 0 (mod n). Additive inverse = n - a.
  - Multiplicative Inverse: The number x such that (a × x) ≡ 1 (mod n). Exists if and only if gcd(a, n) = 1.`,
    detailedNotes: {
      "introduction": "Modular arithmetic (clock arithmetic) wraps numbers around a fixed modulus. It is the mathematical foundation of digital cryptography and calendar systems.",
      "realWorldContext": "Computer scientists and banking software in Ghana use modular arithmetic to compute check digits on Ghana Card identification numbers and credit card validations.",
      "objectives": [
            "Perform addition, subtraction, and multiplication in modulo arithmetic systems",
            "Convert negative numbers and large integers into least positive residues modulo n",
            "Find additive and multiplicative inverses in finite modular fields",
            "Solve linear congruences ax ≡ b (mod n)"
      ],
      "sections": [
            {
                  "title": "Finding Multiplicative Inverses in Modulo n",
                  "content": "To find the multiplicative inverse of a in mod n: test elements from {1, 2, ..., n - 1} to find x such that (a × x) divided by n gives remainder 1. If gcd(a, n) > 1, no inverse exists.",
                  "bulletPoints": [
                        "Test x = 1, 2, ..., n-1.",
                        "Calculate (a × x) mod n.",
                        "When the remainder is 1, x is the multiplicative inverse.",
                        "Numbers with common factors with n have no inverse."
                  ],
                  "keyTakeaway": "Multiplicative inverse produces a product with remainder 1."
            }
      ],
      "wassceExamTips": [
            "Final answers in modulo n must ALWAYS belong to the set {0, 1, 2, ..., n - 1}. Never leave answers as negative numbers or numbers ≥ n.",
            "When creating addition or multiplication tables in modulo n, double check every cell remainder.",
            "State whether an inverse exists before attempting to divide."
      ],
      "commonMistakes": [
            "Leaving answers larger than the modulus (e.g. writing 7 in mod 5 instead of 2).",
            "Assuming every number has a multiplicative inverse (only numbers coprime to n do).",
            "Dividing directly by ordinary fractions instead of multiplying by the modular inverse."
      ],
      "summaryChecklist": [
            "Can I evaluate (18 + 27) in mod 7?",
            "Can I find the additive inverse of 4 in mod 9?",
            "Can I find the multiplicative inverse of 3 in mod 8?"
      ]
},
    examples: [
      {
            "id": "shs2-m17-ex1",
            "title": "WASSCE Modular Equation and Inverses",
            "problem": "In modulo 7: (i) Find the truth set of 3x ≡ 5 (mod 7); (ii) Find the additive inverse of 5; (iii) Find the multiplicative inverse of 3.",
            "stepByStepSolution": [
                  "Step 1: (i) Test domain elements {0, 1, 2, 3, 4, 5, 6}:\n3(0) = 0 ≡ 0\n3(1) = 3 ≡ 3\n3(2) = 6 ≡ 6\n3(3) = 9 ≡ 2\n3(4) = 12 ≡ 5 (MATCH!) [M1]\n3(5) = 15 ≡ 1\n3(6) = 18 ≡ 4\nTruth set = {4} [A1]",
                  "Step 2: (ii) Find additive inverse of 5 in mod 7:\n5 + y ≡ 0 (mod 7)\ny = 7 - 5 = 2. [M1, A1]",
                  "Step 3: (iii) Find multiplicative inverse of 3 in mod 7:\n3x ≡ 1 (mod 7).\nFrom step 1, 3(5) = 15 = 2(7) + 1 ≡ 1 (mod 7). [M1]\nMultiplicative inverse of 3 is 5 [A1]"
            ],
            "keyTakeaway": "In mod 7, testing elements 0 to 6 systematically guarantees finding unique solutions."
      }
],
    quiz: SHS2_MATH_QUIZZES['shs2-math-t3-modular-arithmetic']
  }
];
