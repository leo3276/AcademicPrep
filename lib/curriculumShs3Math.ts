// Ghanaian SHS 3 Core Mathematics Curriculum
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// 17 Comprehensive Topics covering Terms 1, 2, and 3 with Videos, Worked Examples, and Quizzes

import { CurriculumTopic } from './types';
import { SHS3_MATH_QUIZZES } from './curriculumShs3MathQuizzes';

export const SHS3_MATH_TOPICS: CurriculumTopic[] = [
  {
    id: 'shs3-math-t1-sine-rule',
    subjectId: 'math',
    level: 'SHS 3',
    term: 1,
    orderIndex: 1,
    title: "Trigonometry II: The Sine Rule & Ambiguous Case",
    description: "Sine rule a/sin A = b/sin B = c/sin C = 2R, solving AAS and SSA triangles, circumradius, and handling the ambiguous case.",
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=bdge_wD8Y48',
    youtubeId: 'bdge_wD8Y48',
    keyNotes: `• The Sine Rule:
  - a / sin A = b / sin B = c / sin C = 2R (where R is circumradius).
• When to Use:
  - Two angles and any side (AAS or ASA).
  - Two sides and a non-included angle (SSA).
• The Ambiguous Case (SSA):
  - When given a, b, and acute angle A:
    * If a < b sin A: No triangle exists.
    * If a = b sin A: One right-angled triangle.
    * If b sin A < a < b: TWO possible triangles (acute B₁ and obtuse B₂ = 180° - B₁).
    * If a ≥ b: Exactly one triangle.`,
    detailedNotes: {
      "introduction": "The Sine Rule extends trigonometry to general non-right-angled oblique triangles by equating side-to-angle ratios.",
      "realWorldContext": "Coastal survey teams mapping the Gulf of Guinea shoreline at Ada Foah use the Sine Rule in triangulation networks to calculate distances to offshore sandbars.",
      "objectives": [
            "Apply the Sine Rule to calculate unknown sides in triangles given two angles and one side",
            "Determine unknown angles in oblique triangles",
            "Analyze SSA conditions to detect and solve ambiguous two-triangle cases",
            "Calculate the circumradius R of a triangle using a/sin A = 2R"
      ],
      "sections": [
            {
                  "title": "The Ambiguous Case Mechanics",
                  "content": "When given side b, side a opposite acute angle A, and a < b, the side a can swing in two directions, forming an acute triangle where B₁ = arcsin(b sin A / a) or an obtuse triangle where B₂ = 180° - B₁.",
                  "bulletPoints": [
                        "Find primary acute angle B₁ = arcsin(b sin A / a).",
                        "Compute secondary obtuse angle B₂ = 180° - B₁.",
                        "Check if A + B₂ < 180°; if yes, a second valid triangle exists.",
                        "Solve both triangles completely if requested."
                  ],
                  "keyTakeaway": "Always check if 180° - B₁ leaves room for a valid third angle."
            }
      ],
      "wassceExamTips": [
            "Always check that the largest side faces the largest angle as a sanity check on your calculations.",
            "Remember sin(180° - θ) = sin θ; calculators only output acute angles by default when using arcsin.",
            "Show the formula a/sin A = b/sin B before substituting values to secure method marks."
      ],
      "commonMistakes": [
            "Assuming a triangle must be right-angled to use trigonometric ratios.",
            "Forgetting the ambiguous obtuse case when given SSA.",
            "Setting calculator to Radians instead of Degrees."
      ],
      "summaryChecklist": [
            "Can I solve an AAS triangle using the Sine Rule?",
            "Can I detect whether an SSA problem has two solutions?",
            "Can I find the circumradius R from a/sin A = 2R?"
      ]
},
    examples: [
      {
            "id": "shs3-m1-ex1",
            "title": "WASSCE Sine Rule Application",
            "problem": "In triangle ABC, angle A = 42°, angle B = 68°, and side c = 15 cm. Calculate: (i) angle C; (ii) the length of side a correct to 2 decimal places.",
            "stepByStepSolution": [
                  "Step 1: Calculate angle C using angle sum of a triangle:\nangle C = 180° - (42° + 68°) = 180° - 110° = 70° [M1, A1]",
                  "Step 2: State the Sine Rule formula relating sides a and c:\na / sin A = c / sin C [B1]",
                  "Step 3: Make side a the subject:\na = (c × sin A) / sin C = (15 × sin 42°) / sin 70° [M1]",
                  "Step 4: Evaluate using trigonometric values:\nsin 42° ≈ 0.66913 ; sin 70° ≈ 0.93969\na = (15 × 0.66913) / 0.93969 = 10.037 / 0.93969 [M1]",
                  "Step 5: Compute final length:\na ≈ 10.681 => 10.68 cm (2 d.p.) [A1]"
            ],
            "keyTakeaway": "Always find the third angle first so you have a complete known side-angle pair."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t1-sine-rule']
  },

  {
    id: 'shs3-math-t1-cosine-rule-area',
    subjectId: 'math',
    level: 'SHS 3',
    term: 1,
    orderIndex: 2,
    title: "Trigonometry III: The Cosine Rule & Triangle Area Formulas",
    description: "Cosine rule a² = b² + c² - 2bc cos A, finding angles cos A = (b²+c²-a²)/(2bc), triangle area ½ab sin C, and Heron’s formula.",
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=ZUpz_r_a4Y4',
    youtubeId: 'ZUpz_r_a4Y4',
    keyNotes: `• The Cosine Rule:
  - For Sides: a² = b² + c² - 2bc cos A (SAS).
  - For Angles: cos A = (b² + c² - a²) / (2bc) (SSS).
  - Obtuse Angles: If A > 90°, cos A is negative, turning -2bc cos A into a positive addition.
• Triangle Area Formulas:
  - Area = ½ ab sin C = ½ bc sin A = ½ ac sin B.
  - Hero's Formula (Heron): Area = √[s(s - a)(s - b)(s - c)] where semi-perimeter s = (a + b + c)/2.`,
    detailedNotes: {
      "introduction": "The Cosine Rule is the generalized Pythagorean theorem for oblique triangles, linking all three sides to a single angle.",
      "realWorldContext": "Structural engineers designing the triangular steel space trusses of the Tamale International Stadium calculate member lengths and joint angles using the Cosine Rule.",
      "objectives": [
            "Calculate the third side of a triangle given two sides and the included angle (SAS)",
            "Calculate all angles of a triangle given three side lengths (SSS)",
            "Compute triangle areas using ½ab sin C and Hero’s formula",
            "Handle negative cosines correctly for obtuse angles"
      ],
      "sections": [
            {
                  "title": "Obtuse Angle Sign Management",
                  "content": "When finding an obtuse angle with the Cosine Rule, cos A will be negative. The calculator displays the correct obtuse angle directly via arccos. When calculating a side opposite an obtuse angle, remember -2bc(-|cos A|) becomes +2bc|cos A|.",
                  "bulletPoints": [
                        "cos A < 0 implies angle A is obtuse (between 90° and 180°).",
                        "In a² = b² + c² - 2bc cos A, a negative cos A INCREASES a².",
                        "The side opposite the obtuse angle must be the longest side in the triangle."
                  ],
                  "keyTakeaway": "A negative value for cos A directly indicates an obtuse angle."
            }
      ],
      "wassceExamTips": [
            "In cos A = (b² + c² - a²) / (2bc), the subtracted term in the numerator is ALWAYS the side opposite the angle you are finding.",
            "Use brackets around the numerator and denominator on your calculator to avoid order-of-operation errors.",
            "Give final angles to 1 decimal place unless otherwise instructed."
      ],
      "commonMistakes": [
            "Subtracting 2bc before multiplying by cos A (e.g. evaluating (b² + c² - 2bc) × cos A).",
            "Forgetting that the side being subtracted in the angle formula must be the opposite side.",
            "Omitting the square root at the final step when finding a."
      ],
      "summaryChecklist": [
            "Can I calculate side a given b = 6, c = 8, and A = 50°?",
            "Can I find the largest angle in a triangle with sides 5, 7, 10?",
            "Can I compute area using Hero's formula?"
      ]
},
    examples: [
      {
            "id": "shs3-m2-ex1",
            "title": "WASSCE Cosine Rule SSS Angle Calculation",
            "problem": "The three sides of triangle PQR are p = 7 cm, q = 8 cm, and r = 11 cm. Calculate: (i) the size of the largest angle correct to 1 decimal place; (ii) the area of the triangle correct to 2 decimal places.",
            "stepByStepSolution": [
                  "Step 1: Identify the largest angle:\nThe largest angle is opposite the longest side (r = 11 cm), so the largest angle is angle R. [B1]",
                  "Step 2: State the Cosine Rule for angle R:\ncos R = (p² + q² - r²) / (2pq) [B1]",
                  "Step 3: Substitute values:\ncos R = (7² + 8² - 11²) / (2 × 7 × 8) = (49 + 64 - 121) / 112 [M1]\ncos R = (113 - 121) / 112 = -8 / 112 = -1 / 14 ≈ -0.07143 [A1]",
                  "Step 4: Compute angle R:\nSince cos R is negative, R is obtuse:\nR = arccos(-0.07143) ≈ 94.1° [A1]",
                  "Step 5: Calculate Area of triangle PQR:\nArea = ½ pq sin R = ½ × 7 × 8 × sin 94.1° = 28 × 0.99744 = 27.93 cm² [M1, A1]"
            ],
            "keyTakeaway": "The largest angle is always opposite the longest side; its negative cosine indicates an obtuse angle (> 90°)."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t1-cosine-rule-area']
  },

  {
    id: 'shs3-math-t1-bearings-navigation',
    subjectId: 'math',
    level: 'SHS 3',
    term: 1,
    orderIndex: 3,
    title: "Bearings & Navigation (Three-Figure Bearings & Multi-Leg Trips)",
    description: "Three-figure bearings, back bearings, parallel North line theorems, and solving complex multi-leg journeys using Sine and Cosine rules.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Bearing Conventions:
  - Three-figure bearing: Measured CLOCKWISE from TRUE NORTH (000° to 360°). Always 3 digits (e.g. 035°).
  - Back Bearing: Bearing of A from B = (Bearing of B from A) ± 180°.
• Multi-Leg Trip Strategy:
  - Step 1: Draw a large, clear diagram with vertical NORTH lines at every single station.
  - Step 2: Use alternate and co-interior angles between parallel North lines to find interior angles of the triangle.
  - Step 3: Apply the Cosine Rule (SAS) to find direct displacement distance.
  - Step 4: Apply the Sine Rule to find the bearing angle.`,
    detailedNotes: {
      "introduction": "Bearings provide the geometric foundation for maritime, aviation, and land navigation using directional angles referenced to True North.",
      "realWorldContext": "Ghana Air Force transport flights between Burma Camp (Accra) and Tamale Air Base compute navigational flight headings and wind-drift correction angles using three-figure bearings.",
      "objectives": [
            "Represent navigation bearings accurately on scale and sketch diagrams",
            "Calculate back bearings using the ±180° rule",
            "Determine interior angles of navigation triangles using parallel North line geometric theorems",
            "Calculate distance and return bearing to starting points using Cosine and Sine rules"
      ],
      "sections": [
            {
                  "title": "The Parallel North Line Angle Extraction",
                  "content": "At every station (A, B, C), draw a vertical North arrow. Since all North arrows are parallel, a line segment AB acts as a transversal. The interior angle at B is deduced by comparing the back-bearing of AB with the forward-bearing of BC.",
                  "bulletPoints": [
                        "Draw North line at A with bearing θ₁ to B.",
                        "Draw North line at B. The angle from South to BA equals θ₁ (alternate angle).",
                        "Add or subtract the bearing θ₂ of C to find the interior angle ∠ABC.",
                        "Apply Cosine Rule on triangle ABC."
                  ],
                  "keyTakeaway": "Interior angles at turning points are deduced by comparing forward and back bearings."
            }
      ],
      "wassceExamTips": [
            "Draw your navigation sketch at least 10 cm wide; cramped diagrams lead to wrong angle deductions.",
            "Always state bearings with THREE digits (e.g. write 048°, never 48°).",
            "Double check whether the question asks for bearing of A from B or B from A."
      ],
      "commonMistakes": [
            "Measuring bearings anticlockwise or from the horizontal axis instead of North.",
            "Writing bearings with only two digits.",
            "Confusing \"bearing of X from Y\" with \"bearing of Y from X\"."
      ],
      "summaryChecklist": [
            "Can I calculate the back bearing of 125°?",
            "Can I calculate the interior angle at a turning station?",
            "Can I combine bearings with the Cosine Rule to find direct return distance?"
      ]
},
    examples: [
      {
            "id": "shs3-m3-ex1",
            "title": "WASSCE Multi-Leg Navigation Problem",
            "problem": "A patrol boat sails from harbor H on a bearing of 050° for 30 km to point P. From P, it changes course to a bearing of 140° and sails for 40 km to point Q. Calculate: (i) the distance HQ; (ii) the bearing of Q from H correct to the nearest degree.",
            "stepByStepSolution": [
                  "Step 1: Determine the interior angle ∠HPQ at point P:\nBack bearing of HP = 050° + 180° = 230°.\nBearing of PQ = 140°.\nInterior angle ∠HPQ = 230° - 140° = 90° [M1, A1]",
                  "Step 2: Since angle HPQ = 90°, triangle HPQ is right-angled at P!\nCalculate distance HQ using Pythagoras theorem:\nHQ² = HP² + PQ² = 30² + 40² = 900 + 1600 = 2500 [M1]\nHQ = √2500 = 50 km [A1]",
                  "Step 3: Calculate angle PHQ inside the triangle:\ntan(∠PHQ) = PQ / HP = 40 / 30 = 4/3 ≈ 1.3333 [M1]\nangle PHQ = arctan(1.3333) ≈ 53.13° [A1]",
                  "Step 4: Determine the bearing of Q from H:\nBearing of Q from H = (Bearing of P) + (angle PHQ)\nBearing = 050° + 53.13° = 103.13° => 103° (to nearest degree) [M1, A1]"
            ],
            "keyTakeaway": "Whenever the difference between back bearing and forward bearing is 90°, the navigation triangle is right-angled."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t1-bearings-navigation']
  },

  {
    id: 'shs3-math-t1-mensuration-prisms-cylinders',
    subjectId: 'math',
    level: 'SHS 3',
    term: 1,
    orderIndex: 4,
    title: "Mensuration II: Prisms, Cylinders & Water Storage Tanks",
    description: "Volume and total surface area of uniform prisms, closed, open, and hollow cylinders, pipes, and liquid capacity conversions.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Uniform Prisms:
  - Volume = Cross-Sectional Area × Length.
  - Total Surface Area = 2 × (Base Area) + (Base Perimeter × Length).
• Cylinders:
  - Volume V = πr²h.
  - Curved Surface Area (CSA) = 2πrh.
  - Closed Cylinder TSA = 2πrh + 2πr² = 2πr(h + r).
  - Open Cylinder (one end) TSA = 2πrh + πr².
  - Hollow Pipe (open both ends) Surface Area = 2πrh.
• Metric Conversions:
  - 1 m³ = 1,000 liters = 1,000,000 cm³.
  - 1 liter = 1,000 cm³.`,
    detailedNotes: {
      "introduction": "Prisms and cylinders represent uniform cross-sectional solids extensively utilized in storage tanks, plumbing pipes, and building construction.",
      "realWorldContext": "Ghana Water Company engineers calculating reservoir storage capacities for the Weija Dam treat main transmission pipelines as hollow cylinders.",
      "objectives": [
            "Calculate volumes and surface areas of triangular, trapezoidal, and rectangular prisms",
            "Compute curved and total surface areas for open and closed cylindrical tanks",
            "Convert cubic centimeters and cubic meters into liquid liter capacities",
            "Determine water levels and pumping times given constant discharge rates"
      ],
      "sections": [
            {
                  "title": "Distinguishing Cylinder End Boundary Types",
                  "content": "Candidates must carefully verify whether a cylinder is closed at both ends (+2πr²), open at the top (+πr²), or a hollow open-ended pipe (+0).",
                  "bulletPoints": [
                        "Closed solid cylinder: TSA = 2πrh + 2πr².",
                        "Open-topped tank: TSA = 2πrh + πr².",
                        "Hollow pipe open at both ends: Area = 2πrh.",
                        "Internal + external pipe: 2πR h + 2πr h + 2π(R² - r²)."
                  ],
                  "keyTakeaway": "Always check if the cylinder has 0, 1, or 2 circular end caps."
            }
      ],
      "wassceExamTips": [
            "Use the designated π value specified in the examination instructions (e.g. 22/7 or 3.142).",
            "Check whether the question gives diameter or radius—always divide diameter by 2 first!",
            "State capacities in liters by dividing cm³ by 1,000."
      ],
      "commonMistakes": [
            "Using diameter directly in the formula πr²h instead of radius.",
            "Adding two circular ends to an open-top storage tank.",
            "Confusing cm³ with liters (forgetting to divide by 1,000)."
      ],
      "summaryChecklist": [
            "Can I calculate volume of a cylinder V = πr²h?",
            "Can I calculate TSA for an open-top cylindrical drum?",
            "Can I convert 4.5 m³ into liters?"
      ]
},
    examples: [
      {
            "id": "shs3-m4-ex1",
            "title": "WASSCE Cylindrical Tank Capacity & Rate of Flow",
            "problem": "A cylindrical water storage tank of internal diameter 1.4 m and height 2.5 m is being filled with water by a tap at the rate of 22 liters per minute. Taking π = 22/7, calculate: (i) the capacity of the tank in liters; (ii) the time taken, in hours and minutes, to fill the empty tank completely.",
            "stepByStepSolution": [
                  "Step 1: Calculate radius r:\nRadius r = diameter / 2 = 1.4 m / 2 = 0.7 m = 70 cm [B1]\nHeight h = 2.5 m = 250 cm [B1]",
                  "Step 2: Calculate volume of the tank:\nV = πr²h = (22/7) × 70 × 70 × 250 [M1]\nV = 22 × 10 × 70 × 250 = 3,850,000 cm³ [A1]",
                  "Step 3: Convert volume into liters:\nCapacity = 3,850,000 / 1,000 = 3,850 liters [M1, A1]",
                  "Step 4: Calculate filling time in minutes:\nRate of flow = 22 liters/min.\nTime = Total Capacity / Rate = 3,850 / 22 = 175 minutes [M1, A1]",
                  "Step 5: Convert into hours and minutes:\n175 minutes = 2 hours 55 minutes [A1]"
            ],
            "keyTakeaway": "Always convert diameter to radius and ensure dimensions are in consistent units before calculating volume."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t1-mensuration-prisms-cylinders']
  },

  {
    id: 'shs3-math-t1-mensuration-cones-pyramids',
    subjectId: 'math',
    level: 'SHS 3',
    term: 1,
    orderIndex: 5,
    title: "Mensuration III: Cones, Pyramids & Slant Heights",
    description: "Volume V = ⅓Ah, slant heights using Pythagoras, curved surface area πrl of cones, pyramid face areas, and sector-to-cone conversions.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Cones:
  - Volume V = ⅓ πr²h.
  - Slant height l = √(r² + h²).
  - Curved Surface Area CSA = πrl.
  - Closed Cone TSA = πrl + πr² = πr(l + r).
  - Sector folded into cone: Sector radius R = cone slant height l; Sector arc length = 2πr => r = (θ/360°)R.
• Right Pyramids:
  - Volume V = ⅓ × Base Area × Vertical Height h.
  - Slant height of triangular face: l = √[h² + (base width / 2)²].
  - Total Surface Area = Base Area + Sum of Triangular Face Areas.`,
    detailedNotes: {
      "introduction": "Cones and pyramids converge to an apex vertex, exhibiting a constant one-third volume ratio relative to corresponding prisms.",
      "realWorldContext": "Grain silos and cocoa drying hoppers across the Ashanti Region utilize inverted pyramidal and conical funnels to dispense cocoa beans smoothly into transport bags.",
      "objectives": [
            "Calculate slant heights of cones and pyramids using Pythagoras theorem",
            "Compute volumes of cones and pyramids using the ⅓Ah formula",
            "Determine curved and total surface areas of cones and right pyramids",
            "Solve folding problems where a circular sector forms a cone"
      ],
      "sections": [
            {
                  "title": "Sector to Cone Unfolding Invariant Rules",
                  "content": "When a paper sector of radius R and angle θ is rolled to form a cone: (1) the sector radius R becomes the cone slant height l (l = R); (2) the sector arc length becomes the circumference of the cone circular base: (θ/360) × 2πR = 2πr.",
                  "bulletPoints": [
                        "Cone slant height l = Sector radius R.",
                        "Cone base radius r = (θ / 360°) × R.",
                        "Vertical height h = √(l² - r²).",
                        "Cone Volume = ⅓ πr²h."
                  ],
                  "keyTakeaway": "The sector radius becomes the cone slant height, NOT its vertical height."
            }
      ],
      "wassceExamTips": [
            "Do not confuse vertical height h with slant height l in the volume formula V = ⅓πr²h (use h, not l!).",
            "Use slant height l for surface area πrl.",
            "In pyramids, calculate the slant height of each triangular face using half the base edge length."
      ],
      "commonMistakes": [
            "Using slant height l instead of vertical height h in the volume formula.",
            "Using vertical height h instead of slant height l in the surface area formula.",
            "Forgetting the base area when asked for TOTAL surface area."
      ],
      "summaryChecklist": [
            "Can I calculate cone slant height l = √(r² + h²)?",
            "Can I find the base radius of a cone made from a 120° sector?",
            "Can I calculate the volume of a square-based pyramid?"
      ]
},
    examples: [
      {
            "id": "shs3-m5-ex1",
            "title": "WASSCE Sector Folded into Cone Problem",
            "problem": "A cardboard sector of a circle of radius 14 cm and central angle 216° is folded without overlap to form a right circular cone. Taking π = 22/7, calculate: (i) the base radius of the cone; (ii) the vertical height of the cone; (iii) the volume of the cone correct to the nearest whole number.",
            "stepByStepSolution": [
                  "Step 1: Identify invariant properties:\nSector radius R = 14 cm becomes cone slant height l = 14 cm [B1]\nArc length of sector = Circumference of cone base:\n(216° / 360°) × 2πR = 2πr [M1]",
                  "Step 2: Solve for cone base radius r:\nr = (216 / 360) × 14 = (3/5) × 14 = 42 / 5 = 8.4 cm [A1]",
                  "Step 3: Calculate vertical height h using Pythagoras theorem:\nh² = l² - r² = 14² - 8.4² = 196 - 70.56 = 125.44 [M1]\nh = √125.44 = 11.2 cm [A1]",
                  "Step 4: Calculate the volume of the cone:\nV = ⅓ πr²h = ⅓ × (22/7) × (8.4)² × 11.2 [M1]\nV = ⅓ × (22/7) × 70.56 × 11.2 = ⅓ × 22 × 10.08 × 11.2 [M1]\nV = ⅓ × 2483.712 = 827.904 cm³ => 828 cm³ [A1]"
            ],
            "keyTakeaway": "The sector radius R becomes slant height l; base radius r = (θ/360) × R."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t1-mensuration-cones-pyramids']
  },

  {
    id: 'shs3-math-t1-mensuration-spheres-frustums',
    subjectId: 'math',
    level: 'SHS 3',
    term: 1,
    orderIndex: 6,
    title: "Mensuration IV: Spheres, Hemispheres & Frustums",
    description: "Volume ⁴⁄₃πr³ and surface area 4πr² of spheres, solid hemispheres (TSA = 3πr²), and volume and surface area of frustums of cones and pyramids.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Spheres & Hemispheres:
  - Sphere Volume V = ⁴⁄₃ πr³.
  - Sphere Surface Area A = 4πr².
  - Hemisphere Volume V = ⅔ πr³.
  - Solid Hemisphere TSA = Curved Area + Flat Circle = 2πr² + πr² = 3πr².
• Frustums of Cones:
  - Formed by slicing off top portion with plane parallel to base.
  - Similar Triangles: h / (h + H) = r / R (where h is small cone height, H is frustum height).
  - Frustum Volume = Volume of Large Cone - Volume of Small Removed Cone = ⅓πR²(H + h) - ⅓πr²h.
  - Frustum CSA = π(R + r)l where l is slant height of frustum.`,
    detailedNotes: {
      "introduction": "Spheres and frustums represent advanced 3D solid geometry prominent in industrial vessels, metallurgical recasting, and commercial containers.",
      "realWorldContext": "Artisanal metal fabricators at Suame Magazine in Kumasi design metal watering cans and buckets shaped as cone frustums.",
      "objectives": [
            "Calculate volumes and surface areas of solid and hollow spheres and hemispheres",
            "Determine heights of removed top cones in frustums using similar triangles",
            "Compute volumes of conical and pyramidal frustums by subtraction",
            "Solve metal melting and recasting conservation of volume problems"
      ],
      "sections": [
            {
                  "title": "The Similar Triangles Frustum Technique",
                  "content": "To find the height h of the removed small cone: draw an axial cross-section. The small cone and large cone form similar right-angled triangles. Therefore: (height of small cone) / (height of large cone) = (top radius) / (bottom radius): h / (h + H) = r / R.",
                  "bulletPoints": [
                        "Set up: h / (h + H) = r / R.",
                        "Cross-multiply: Rh = r(h + H).",
                        "Isolate h to find small cone height.",
                        "Large cone height = H + h."
                  ],
                  "keyTakeaway": "Always use similar triangles to find the unknown top cone height."
            }
      ],
      "wassceExamTips": [
            "In solid hemisphere questions, remember Total Surface Area is 3πr², NOT 2πr².",
            "In melting and recasting problems, Volume remains constant: Volume_original = n × Volume_recast.",
            "Show the subtraction (V_large - V_small) explicitly for frustums to gain method marks."
      ],
      "commonMistakes": [
            "Using 2πr² for the total surface area of a SOLID hemisphere.",
            "Using frustum height directly in the cone volume formula instead of finding the full cone height.",
            "Forgetting that volume ratios scale as (scale factor)³."
      ],
      "summaryChecklist": [
            "Can I calculate sphere volume V = ⁴⁄₃πr³?",
            "Can I set up similar triangles to find the missing cone height in a frustum?",
            "Can I calculate the volume of a bucket shaped as a frustum?"
      ]
},
    examples: [
      {
            "id": "shs3-m6-ex1",
            "title": "WASSCE Frustum of a Cone Problem",
            "problem": "A bucket in the shape of a frustum of a cone has a bottom radius of 12 cm, a top radius of 20 cm, and a vertical depth of 16 cm. Taking π = 3.142, calculate: (i) the height of the cone from which the bucket was formed; (ii) the volume of water the bucket can hold in liters.",
            "stepByStepSolution": [
                  "Step 1: Set up similar triangles to find height h of the removed small cone:\nLet h be the height of the removed small cone.\nHeight of large cone = h + 16 cm.\nh / (h + 16) = r / R = 12 / 20 = 3 / 5 [M1]",
                  "Step 2: Cross-multiply and solve for h:\n5h = 3(h + 16)\n5h = 3h + 48\n2h = 48 => h = 24 cm [M1, A1]",
                  "Step 3: Total height of the full large cone:\nHeight H_large = 24 + 16 = 40 cm [B1]",
                  "Step 4: Calculate volumes of large and small cones:\nV_large = ⅓ π R² H_large = ⅓ × 3.142 × 20² × 40 = ⅓ × 3.142 × 400 × 40 = 16,757.33 cm³ [M1]\nV_small = ⅓ π r² h = ⅓ × 3.142 × 12² × 24 = ⅓ × 3.142 × 144 × 24 = 3,619.58 cm³ [M1]",
                  "Step 5: Subtract to find Frustum Volume:\nV_bucket = V_large - V_small = 16,757.33 - 3,619.58 = 13,137.75 cm³ [M1, A1]",
                  "Step 6: Convert to liters:\nCapacity = 13,137.75 / 1,000 = 13.14 liters [A1]"
            ],
            "keyTakeaway": "Always solve for the small cone height using similar triangles before computing large and small cone volumes."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t1-mensuration-spheres-frustums']
  },

  {
    id: 'shs3-math-t2-cumulative-frequency-ogives',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 7,
    title: "Statistics IV: Cumulative Frequency Tables & Drawing Ogives",
    description: "Constructing cumulative frequency tables, class boundaries, plotting ogives, anchor points, and smooth curve conventions.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hYqZ4wLqFk',
    youtubeId: '0hYqZ4wLqFk',
    keyNotes: `• Cumulative Frequency (cf):
  - Running total of frequencies up to each class boundary.
• Ogive Plotting Requirements:
  - Horizontal Axis: Upper class boundaries.
  - Vertical Axis: Cumulative frequency (cf).
  - Starting Point (Anchor): Lower boundary of first class where cf = 0.
  - Final Point: Upper boundary of last class where cf = total frequency N.
  - Curve Drawing: MUST be drawn as a single, smooth, continuous freehand curve. NEVER join with a ruler!`,
    detailedNotes: {
      "introduction": "Ogives (cumulative frequency curves) graphically summarize continuous data distributions to enable rapid estimation of medians, percentiles, and pass rates.",
      "realWorldContext": "WAEC uses cumulative frequency ogives to establish standardized percentile cut-offs for Grade A1 distinctions and pass thresholds across national examinations.",
      "objectives": [
            "Construct cumulative frequency tables with accurate upper class boundaries",
            "Plot points accurately on Cartesian graph paper using standard scales",
            "Anchor the ogive curve to the horizontal axis at the lower boundary of the lowest class",
            "Draw smooth continuous S-curves through plotted points"
      ],
      "sections": [
            {
                  "title": "The Starting Anchor Point Protocol",
                  "content": "The most common mark loss in WASSCE ogive questions is starting the curve at the first plotted upper boundary or at the origin (0, 0). The curve MUST start at the LOWER boundary of the first class on the horizontal axis where cumulative frequency is 0.",
                  "bulletPoints": [
                        "Identify lower boundary of first class interval.",
                        "Plot point (lower boundary, 0) on the horizontal axis.",
                        "Plot all (upper boundary, cf) points.",
                        "Join from the anchor point with a smooth freehand S-curve."
                  ],
                  "keyTakeaway": "Always start the curve on the horizontal axis at cf = 0."
            }
      ],
      "wassceExamTips": [
            "Do NOT use a ruler to connect plotted ogive points; WAEC marking rubrics deduct marks for jagged straight-line segments.",
            "Use the designated examination scale (e.g. 2 cm to 10 units on both axes).",
            "Label axes clearly with quantity names and units (e.g. \"Marks scored\", \"Cumulative Frequency\")."
      ],
      "commonMistakes": [
            "Using class midpoints or lower limits instead of upper class boundaries on the x-axis.",
            "Joining points with a ruler like a polygon instead of a smooth curve.",
            "Failing to anchor the curve at the lower boundary where cf = 0."
      ],
      "summaryChecklist": [
            "Can I construct a complete cumulative frequency table?",
            "Can I anchor the ogive at cf = 0?",
            "Can I draw a smooth freehand S-curve?"
      ]
},
    examples: [
      {
            "id": "shs3-m7-ex1",
            "title": "WASSCE Ogive Table Construction Protocol",
            "problem": "Given the frequency distribution of marks scored by 60 students:\nMarks: 20-29 (f=4), 30-39 (f=8), 40-49 (f=18), 50-59 (f=16), 60-69 (f=10), 70-79 (f=4).\nConstruct the complete cumulative frequency table needed to plot the ogive.",
            "stepByStepSolution": [
                  "Step 1: Calculate class boundaries for each interval:\nSubtract 0.5 from lower limit, add 0.5 to upper limit.\nFirst class boundary: 19.5 - 29.5 [M1]",
                  "Step 2: Calculate cumulative frequencies (running sum of f):\nClass    | Freq (f) | Upper Boundary | Cumulative Frequency (cf)\n(Anchor) | -        | 19.5           | 0\n20 - 29  | 4        | 29.5           | 4\n30 - 39  | 8        | 39.5           | 4 + 8 = 12\n40 - 49  | 18       | 49.5           | 12 + 18 = 30\n50 - 59  | 16       | 59.5           | 30 + 16 = 46\n60 - 69  | 10       | 69.5           | 46 + 10 = 56\n70 - 79  | 4        | 79.5           | 56 + 4 = 60 [M1 for boundaries, M1 for cf column, A1 for accuracy]",
                  "Step 3: Verify total:\nFinal cumulative frequency = 60 = total number of students. [B1]",
                  "Step 4: Identify points to plot on graph:\n(19.5, 0), (29.5, 4), (39.5, 12), (49.5, 30), (59.5, 46), (69.5, 56), (79.5, 60) [B1]"
            ],
            "keyTakeaway": "Always include the anchor point (19.5, 0) at the start of your plotting table."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-cumulative-frequency-ogives']
  },

  {
    id: 'shs3-math-t2-quartiles-percentiles-ogive',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 8,
    title: "Statistics V: Quartiles, Interquartile Range & Percentiles from Ogives",
    description: "Reading median Q₂, lower quartile Q₁, upper quartile Q₃, interquartile range (Q₃ - Q₁), percentiles, and pass/fail thresholds from ogives.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hYqZ4wLqFk',
    youtubeId: '0hYqZ4wLqFk',
    keyNotes: `• Positions on Cumulative Frequency (Vertical) Axis:
  - Median (Q₂): at cf = N / 2 (50% of N).
  - Lower Quartile (Q₁): at cf = N / 4 (25% of N).
  - Upper Quartile (Q₃): at cf = 3N / 4 (75% of N).
  - k-th Percentile (Pₖ): at cf = (k / 100) × N.
• Measures of Dispersion:
  - Interquartile Range (IQR) = Q₃ - Q₁.
  - Semi-Interquartile Range (Quartile Deviation) = ½(Q₃ - Q₁).
• Reading Thresholds:
  - Number of candidates scoring LESS than x: Read cf directly on vertical axis.
  - Number of candidates scoring MORE than x (passed): N - (reading from ogive).`,
    detailedNotes: {
      "introduction": "Quartiles and percentiles partition ordered datasets into four and one hundred equal parts, providing non-parametric measures of spread and relative ranking.",
      "realWorldContext": "The National Health Insurance Authority (NHIA) uses income quartiles to structure subsidized medical premium exemptions for vulnerable households.",
      "objectives": [
            "Determine the positions of median and quartiles on the cumulative frequency axis",
            "Read median, Q₁, and Q₃ accurately from an ogive using projection lines",
            "Calculate interquartile range and semi-interquartile range",
            "Determine pass/fail percentages and cutoff marks from ogives"
      ],
      "sections": [
            {
                  "title": "The Pass/Fail Threshold Direction Rule",
                  "content": "Because an ogive measures cumulative frequency from the bottom upwards, reading at a mark x gives the number of students who scored LESS THAN or EQUAL to x (those who failed). To find those who passed (> x), subtract that reading from total N.",
                  "bulletPoints": [
                        "Locate mark on horizontal axis.",
                        "Project upwards to curve, then across to vertical axis.",
                        "Number scoring ≤ mark = reading from graph.",
                        "Number scoring > mark = Total N - reading from graph."
                  ],
                  "keyTakeaway": "To find numbers scoring ABOVE a mark, subtract the ogive reading from total N."
            }
      ],
      "wassceExamTips": [
            "WAEC awards Method marks for showing dashed projection lines on the graph; never omit them!",
            "Read values to the nearest half-grid unit using your scale.",
            "State your final readings clearly: e.g. \"From graph, Median = 48 marks\"."
      ],
      "commonMistakes": [
            "Reading pass mark candidates directly instead of subtracting from N.",
            "Confusing IQR (Q₃ - Q₁) with Semi-IQR (½(Q₃ - Q₁)).",
            "Using (N + 1)/2 for ogives instead of N/2."
      ],
      "summaryChecklist": [
            "Can I locate Q₁, Q₂, Q₃ on the cf axis?",
            "Can I calculate the Interquartile Range Q₃ - Q₁?",
            "Can I calculate the number of candidates who passed an exam using the ogive?"
      ]
},
    examples: [
      {
            "id": "shs3-m8-ex1",
            "title": "WASSCE Ogive Interpretation and Quartiles",
            "problem": "An ogive was drawn for 80 candidates. From the curve, the following readings were obtained: at cf = 20, mark = 34; at cf = 40, mark = 48; at cf = 60, mark = 62; at mark = 50, cf = 44. Find: (i) the median mark; (ii) the semi-interquartile range; (iii) the percentage of candidates who scored more than 50 marks.",
            "stepByStepSolution": [
                  "Step 1: (i) Find the median mark:\nMedian position = N / 2 = 80 / 2 = 40th candidate.\nFrom the given reading at cf = 40:\nMedian = 48 marks [M1, A1]",
                  "Step 2: (ii) Find Lower Quartile Q₁ and Upper Quartile Q₃:\nQ₁ position = N / 4 = 80 / 4 = 20th candidate => Q₁ = 34 marks [B1]\nQ₃ position = 3N / 4 = 3(80) / 4 = 60th candidate => Q₃ = 62 marks [B1]",
                  "Step 3: Calculate Semi-Interquartile Range:\nSemi-IQR = ½(Q₃ - Q₁) = ½(62 - 34) = ½(28) = 14 marks [M1, A1]",
                  "Step 4: (iii) Percentage scoring more than 50 marks:\nAt mark = 50, cf = 44 (candidates scoring ≤ 50).\nNumber scoring > 50 = Total N - 44 = 80 - 44 = 36 candidates [M1, A1]",
                  "Step 5: Convert to percentage:\nPercentage = (36 / 80) × 100% = (9 / 20) × 100% = 45% [A1]"
            ],
            "keyTakeaway": "Always subtract from total N (80 - 44 = 36) when asked for candidates scoring MORE than a threshold."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-quartiles-percentiles-ogive']
  },

  {
    id: 'shs3-math-t2-mean-variance-std-dev',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 9,
    title: "Statistics VI: Variance & Standard Deviation for Grouped Data",
    description: "Variance s² = [∑f(x - x̄)²]/∑f and standard deviation s = √Variance, computational formula s² = [∑fx²/∑f] - (x̄)², and interpreting dispersion.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hYqZ4wLqFk',
    youtubeId: '0hYqZ4wLqFk',
    keyNotes: `• Definitions:
  - Mean: x̄ = (∑fx) / (∑f).
  - Variance (s²): The mean of squared deviations from the mean: s² = [∑f(x - x̄)²] / ∑f.
  - Standard Deviation (s or σ): s = √Variance.
• Computational Formula (Fastest for WASSCE):
  - s² = [∑fx² / ∑f] - (x̄)²  (where x̄ = ∑fx / ∑f).
  - Standard Deviation s = √[ (∑fx² / ∑f) - (x̄)² ].
• Critical Distinction:
  - fx² means f × (x²), which equals (fx) × x. It is NOT (fx)²!`,
    detailedNotes: {
      "introduction": "Variance and standard deviation measure how tightly data clusters around the mean or how widely it disperses.",
      "realWorldContext": "Gold mining assay laboratories at AngloGold Ashanti Obuasi monitor gold purity variance across ore samples using standard deviation to ensure export grade consistency.",
      "objectives": [
            "Construct statistical tables containing x, f, fx, and fx² columns",
            "Calculate the mean of grouped distributions accurately",
            "Calculate grouped variance using the computational formula",
            "Compute standard deviation and interpret relative data consistency"
      ],
      "sections": [
            {
                  "title": "The fx² Column Multiplication Shortcut",
                  "content": "To calculate the fx² column easily without squaring large numbers: multiply the already calculated fx column by the class midpoint x: fx² = (fx) × x. This saves significant computation time and prevents exponentiation mistakes.",
                  "bulletPoints": [
                        "Calculate fx = f × x.",
                        "Calculate fx² = (fx) × x.",
                        "Sum all fx to get ∑fx.",
                        "Sum all fx² to get ∑fx².",
                        "Apply s² = [∑fx² / ∑f] - (∑fx / ∑f)²."
                  ],
                  "keyTakeaway": "Multiply the fx column by x to obtain fx² quickly."
            }
      ],
      "wassceExamTips": [
            "Clearly show column totals at the foot of your table: ∑f, ∑fx, and ∑fx².",
            "Do NOT round intermediate values; keep at least 4 decimal places until the final answer.",
            "State the formula s = √[(∑fx²/∑f) - (x̄)²] before substituting numbers."
      ],
      "commonMistakes": [
            "Squaring the fx column instead of multiplying fx by x: (fx)² ≠ fx².",
            "Subtracting the mean instead of the square of the mean: subtracting x̄ instead of (x̄)².",
            "Dividing by N - 1 instead of ∑f (WASSCE Core Mathematics uses population formula dividing by ∑f)."
      ],
      "summaryChecklist": [
            "Can I construct a table with an fx² column?",
            "Can I calculate variance using s² = (∑fx²/∑f) - (x̄)²?",
            "Can I take the square root to find standard deviation?"
      ]
},
    examples: [
      {
            "id": "shs3-m9-ex1",
            "title": "WASSCE Grouped Standard Deviation Calculation",
            "problem": "The table below shows the distribution of marks scored by 50 candidates in a test:\nClass: 1-5 (f=5), 6-10 (f=15), 11-15 (f=20), 16-20 (f=10).\nCalculate correct to 2 decimal places: (i) the mean mark; (ii) the standard deviation.",
            "stepByStepSolution": [
                  "Step 1: Set up the statistical table with midpoint x, fx, and fx² columns:\nClass  | f  | x   | fx        | fx² = fx × x\n1-5    | 5  | 3   | 15        | 15 × 3 = 45\n6-10   | 15 | 8   | 120       | 120 × 8 = 960\n11-15  | 20 | 13  | 260       | 260 × 13 = 3,380\n16-20  | 10 | 18  | 180       | 180 × 18 = 3,240 [M1 for x column, M1 for fx, M1 for fx²]",
                  "Step 2: Sum the columns:\n∑f = 5 + 15 + 20 + 10 = 50 [B1]\n∑fx = 15 + 120 + 260 + 180 = 575 [B1]\n∑fx² = 45 + 960 + 3,380 + 3,240 = 7,625 [B1]",
                  "Step 3: (i) Calculate the Mean mark x̄:\nx̄ = ∑fx / ∑f = 575 / 50 = 11.50 marks [M1, A1]",
                  "Step 4: (ii) Calculate Variance s²:\ns² = [∑fx² / ∑f] - (x̄)² = [7,625 / 50] - (11.5)² [M1]\ns² = 152.5 - 132.25 = 20.25 [A1]",
                  "Step 5: Calculate Standard Deviation s:\ns = √20.25 = 4.50 marks [A1]"
            ],
            "keyTakeaway": "Notice how computing fx² as fx × x simplifies arithmetic and leads cleanly to variance 20.25 and standard deviation 4.5."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-mean-variance-std-dev']
  },

  {
    id: 'shs3-math-t2-probability-tree-diagrams',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 10,
    title: "Probability III: Tree Diagrams for Multi-Stage Experiments",
    description: "Constructing tree diagrams, branch probabilities summing to 1, multiplying along paths, adding mutually exclusive paths, and conditional probabilities.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0s_A1g4jKss',
    youtubeId: '0s_A1g4jKss',
    keyNotes: `• Tree Diagram Principles:
  - Each set of branches from a single node represents all possible outcomes for that stage; their probabilities MUST sum to 1.
  - Multiplication Rule along Branches: To find probability of a sequence of outcomes, MULTIPLY probabilities along that path.
  - Addition Rule across Paths: To find probability of an event satisfied by several distinct paths, ADD the probabilities of those paths.
  - Sampling with vs without replacement: Without replacement reduces branch probabilities on subsequent stages.`,
    detailedNotes: {
      "introduction": "Tree diagrams map out sequential multi-stage probability spaces systematically, preventing omission of compound combinations.",
      "realWorldContext": "Agricultural quality inspectors at Tema Port use decision tree probability models to evaluate shipping container quarantine inspection risks.",
      "objectives": [
            "Construct comprehensive probability tree diagrams for two- and three-stage experiments",
            "Verify branch probability sums equal 1 at every fork",
            "Calculate path probabilities using the multiplication rule along branches",
            "Combine alternative successful paths using the addition law"
      ],
      "sections": [
            {
                  "title": "The Branch Sum Verification Protocol",
                  "content": "At every decision node, pause and check that the probabilities written on all departing branches add up to exactly 1. If branches sum to anything other than 1, an arithmetic error has occurred.",
                  "bulletPoints": [
                        "Node 1 branches: p + (1 - p) = 1.",
                        "Node 2 branches: check each fork sums to 1.",
                        "Multiply along path to get end outcome probability.",
                        "Sum of all terminal probabilities at the far right must equal 1."
                  ],
                  "keyTakeaway": "Probabilities on branches radiating from any node must always sum to 1."
            }
      ],
      "wassceExamTips": [
            "Label all branches clearly with outcome names (e.g. H, T, R, B) and their exact fractional probabilities.",
            "List out all sample space combinations at the ends of the branches (e.g. HH, HT, TH, TT).",
            "Keep fractions unsimplified until final additions are completed to maintain common denominators."
      ],
      "commonMistakes": [
            "Adding along branches instead of multiplying.",
            "Multiplying across different branches instead of adding.",
            "Branch probabilities not summing to 1."
      ],
      "summaryChecklist": [
            "Can I draw a two-stage tree diagram with proper labels?",
            "Can I multiply along branches to find path probabilities?",
            "Can I sum distinct paths to find P(same colour)?"
      ]
},
    examples: [
      {
            "id": "shs3-m10-ex1",
            "title": "WASSCE Tree Diagram Application",
            "problem": "A box contains 5 red balls and 3 green balls. Two balls are drawn at random one after the other without replacement. (i) Draw a tree diagram showing all possible outcomes and their probabilities; (ii) Find the probability that the two balls are of the same colour; (iii) Find the probability that at least one green ball is drawn.",
            "stepByStepSolution": [
                  "Step 1: Construct the tree diagram:\nTotal balls = 8.\nFirst Draw: P(R₁) = 5/8 ; P(G₁) = 3/8 [B1]\nSecond Draw (7 balls remain):\nFrom R₁: P(R₂|R₁) = 4/7 ; P(G₂|R₁) = 3/7 [M1]\nFrom G₁: P(R₂|G₁) = 5/7 ; P(G₂|G₁) = 2/7 [M1]",
                  "Step 2: Calculate path probabilities:\nP(RR) = (5/8) × (4/7) = 20 / 56 [B1]\nP(RG) = (5/8) × (3/7) = 15 / 56 [B1]\nP(GR) = (3/8) × (5/7) = 15 / 56 [B1]\nP(GG) = (3/8) × (2/7) = 6 / 56 [B1]",
                  "Step 3: (ii) Probability of same colour:\nP(Same Colour) = P(RR) + P(GG) = 20/56 + 6/56 = 26/56 = 13 / 28 [M1, A1]",
                  "Step 4: (iii) Probability of at least one green ball:\nP(At least one G) = 1 - P(No G) = 1 - P(RR) = 1 - 20/56 = 36/56 = 9 / 14 [M1, A1]"
            ],
            "keyTakeaway": "The tree diagram makes both same-colour addition (RR + GG) and at-least-one complement (1 - RR) immediately straightforward."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-probability-tree-diagrams']
  },

  {
    id: 'shs3-math-t2-probability-selection-without-replacement',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 11,
    title: "Probability IV: Conditional Probability & Selection Without Replacement",
    description: "Dependent events, conditional probability P(B|A) = P(A ∩ B)/P(A), sampling without replacement, committee formation, and multi-stage dependent trials.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=0s_A1g4jKss',
    youtubeId: '0s_A1g4jKss',
    keyNotes: `• Selection Without Replacement:
  - First selection: n(E) / N.
  - Second selection: (n(E) - 1) / (N - 1) if same item, or n(other) / (N - 1) if different.
  - Denominators decrease by 1 at each successive draw.
• Conditional Probability:
  - P(B|A) = P(A ∩ B) / P(A)  (where P(A) > 0).
  - P(A ∩ B) = P(A) × P(B|A).
• Order of Selection:
  - "One of each" means order matters: P(AB) + P(BA).
  - Always multiply by 2 for two items of different types drawn in unspecified order.`,
    detailedNotes: {
      "introduction": "Sampling without replacement introduces conditional dependencies that alter outcome probabilities dynamically as items are consumed.",
      "realWorldContext": "Quality control batch testers at Unilever Ghana evaluate soap bar packaging integrity by sampling items from production cartons without replacement.",
      "objectives": [
            "Calculate probabilities for multi-stage dependent events without replacement",
            "Apply conditional probability formula P(B|A) = P(A ∩ B) / P(A)",
            "Solve committee and delegation selection problems",
            "Account for permutation orders when outcomes are drawn in unspecified order"
      ],
      "sections": [
            {
                  "title": "The Unspecified Order Multiplier",
                  "content": "When a problem asks for \"the probability of picking one red and one blue ball\" without specifying order, there are TWO mutually exclusive pathways: Red then Blue (RB), OR Blue then Red (BR). You must calculate both and add them together.",
                  "bulletPoints": [
                        "P(One of each) = P(RB) + P(BR).",
                        "P(RB) = (n_R / N) × (n_B / (N - 1)).",
                        "P(BR) = (n_B / N) × (n_R / (N - 1)).",
                        "Sum = 2 × (n_R × n_B) / [N(N - 1)]."
                  ],
                  "keyTakeaway": "Always account for both orders (AB and BA) when order of selection is not specified."
            }
      ],
      "wassceExamTips": [
            "Look out for the words \"without replacement\" and decrement both the numerator and denominator on subsequent draws.",
            "Multiply by 2 when picking two different categories in unspecified sequence.",
            "Express final answers as irreducible fractions."
      ],
      "commonMistakes": [
            "Failing to decrement the denominator on second pick.",
            "Calculating only one order (e.g. only Red-Blue) and forgetting Blue-Red.",
            "Dividing by total combinations instead of multiplying conditional probabilities."
      ],
      "summaryChecklist": [
            "Can I adjust denominators for sampling without replacement?",
            "Can I calculate P(B|A) from P(A ∩ B) and P(A)?",
            "Can I solve a committee selection problem with both genders?"
      ]
},
    examples: [
      {
            "id": "shs3-m11-ex1",
            "title": "WASSCE Committee Selection Problem",
            "problem": "A committee of 3 people is to be chosen at random from 5 men and 3 women. Find the probability that the committee contains: (i) all men; (ii) exactly 2 men and 1 woman; (iii) at least one woman.",
            "stepByStepSolution": [
                  "Step 1: Total individuals N = 5 + 3 = 8.\n(i) Probability that all 3 are men:\nP(M₁M₂M₃) = (5/8) × (4/7) × (3/6) [M1]\nP(All Men) = 60 / 336 = 5 / 28 [A1]",
                  "Step 2: (ii) Probability of exactly 2 men and 1 woman:\nThe woman can be chosen in 3 positions: MMW, MWM, or WMM (3 ways).\nP(MMW) = (5/8) × (4/7) × (3/6) = 60 / 336 [M1]\nP(MWM) = (5/8) × (3/7) × (4/6) = 60 / 336\nP(WMM) = (3/8) × (5/7) × (4/6) = 60 / 336\nTotal P(2 Men, 1 Woman) = 3 × (60 / 336) = 180 / 336 = 15 / 28 [M1, A1]",
                  "Step 3: (iii) Probability of at least one woman:\nP(At least 1 woman) = 1 - P(No women) = 1 - P(All Men) [M1]\nP = 1 - 5/28 = 23 / 28 [A1]"
            ],
            "keyTakeaway": "Use 1 - P(all men) for at least one woman; it takes one line instead of summing 1, 2, and 3 women cases."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-probability-selection-without-replacement']
  },

  {
    id: 'shs3-math-t2-arithmetic-progression',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 12,
    title: "Sequences & Series I: Arithmetic Progression (AP)",
    description: "First term a, common difference d, nth term Tₙ = a + (n - 1)d, sum of n terms Sₙ = (n/2)[2a + (n - 1)d], and simultaneous term problems.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Arithmetic Progression (AP):
  - Definition: Sequence with constant difference d = Tₙ - Tₙ₋₁.
  - nth Term Formula: Tₙ = a + (n - 1)d.
  - Sum of First n Terms: Sₙ = (n/2)[2a + (n - 1)d] or Sₙ = (n/2)(a + l) where l is last term.
  - Arithmetic Mean of x and y: (x + y) / 2.
  - Consecutive terms property: T₂ - T₁ = T₃ - T₂.`,
    detailedNotes: {
      "introduction": "Arithmetic progressions model linear growth and uniform financial accumulation over equal time intervals.",
      "realWorldContext": "Ghana Civil Service salary step ladders increment employee salaries annually by a fixed common difference d per grade level.",
      "objectives": [
            "Identify arithmetic sequences and determine their common differences",
            "Calculate any designated nth term using Tₙ = a + (n - 1)d",
            "Form and solve simultaneous equations to find a and d from two given terms",
            "Compute the sum of arithmetic series using both sum formulas"
      ],
      "sections": [
            {
                  "title": "Simultaneous Equations for AP Parameters",
                  "content": "When given two separate terms (e.g. 4th term is 14 and 9th term is 34): set up two linear equations: a + 3d = 14 and a + 8d = 34. Subtract equation 1 from equation 2 to eliminate a and solve for d directly.",
                  "bulletPoints": [
                        "Write: Tₚ = a + (p - 1)d.",
                        "Write: T_q = a + (q - 1)d.",
                        "Subtract to get (q - p)d = T_q - Tₚ.",
                        "Substitute d back to find first term a."
                  ],
                  "keyTakeaway": "Subtracting two AP equations instantly eliminates first term a."
            }
      ],
      "wassceExamTips": [
            "Remember the term formula uses (n - 1)d, NOT nd.",
            "Use Sₙ = (n/2)(a + l) when the first and last terms are already known—it is much faster.",
            "Check whether a word problem asks for the nth term (a single year) or the sum Sₙ (total accumulated over n years)."
      ],
      "commonMistakes": [
            "Writing Tₙ = a + nd instead of a + (n - 1)d.",
            "Confusing nth term Tₙ with sum of terms Sₙ.",
            "Arithmetic errors when d is a negative number."
      ],
      "summaryChecklist": [
            "Can I find the 25th term of an AP?",
            "Can I set up simultaneous equations to find a and d?",
            "Can I calculate the sum of the first 50 terms?"
      ]
},
    examples: [
      {
            "id": "shs3-m12-ex1",
            "title": "WASSCE AP Simultaneous Equations & Sum",
            "problem": "The 6th term of an Arithmetic Progression is 17 and the 13th term is 38. Find: (i) the first term a and the common difference d; (ii) the 20th term; (iii) the sum of the first 20 terms.",
            "stepByStepSolution": [
                  "Step 1: Set up equations for T₆ and T₁₃:\nT₆ = a + 5d = 17 ... (1) [M1]\nT₁₃ = a + 12d = 38 ... (2) [M1]",
                  "Step 2: Subtract equation (1) from equation (2):\n(a + 12d) - (a + 5d) = 38 - 17\n7d = 21 => d = 3 [A1]",
                  "Step 3: Substitute d = 3 into equation (1):\na + 5(3) = 17 => a + 15 = 17 => a = 2 [A1]",
                  "Step 4: (ii) Calculate the 20th term T₂₀:\nT₂₀ = a + 19d = 2 + 19(3) = 2 + 57 = 59 [M1, A1]",
                  "Step 5: (iii) Calculate the sum of the first 20 terms S₂₀:\nS₂₀ = (n / 2)(a + l) = (20 / 2)(2 + 59) = 10 × 61 = 610 [M1, A1]"
            ],
            "keyTakeaway": "Using Sₙ = (n/2)(a + l) with the found 20th term (59) calculates the sum in one step."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-arithmetic-progression']
  },

  {
    id: 'shs3-math-t2-geometric-progression',
    subjectId: 'math',
    level: 'SHS 3',
    term: 2,
    orderIndex: 13,
    title: "Sequences & Series II: Geometric Progression (GP) & Sum to Infinity",
    description: "First term a, common ratio r, nth term Tₙ = arⁿ⁻¹, sum of n terms Sₙ, convergence condition |r| < 1, and sum to infinity S_∞ = a/(1 - r).",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Geometric Progression (GP):
  - Common Ratio r = Tₙ / Tₙ₋₁.
  - nth Term Formula: Tₙ = a · rⁿ⁻¹.
  - Sum of First n Terms: Sₙ = a(1 - rⁿ) / (1 - r) for |r| < 1; or a(rⁿ - 1) / (r - 1) for |r| > 1.
  - Sum to Infinity (S_∞): Exists ONLY when |r| < 1 (-1 < r < 1). Formula: S_∞ = a / (1 - r).
  - Geometric Mean of x and y: √(xy).
  - Consecutive terms property: T₂ / T₁ = T₃ / T₂.`,
    detailedNotes: {
      "introduction": "Geometric progressions model exponential phenomena including compound interest growth, population expansion, and radioactive half-life decay.",
      "realWorldContext": "Epidemiologists at the Noguchi Memorial Institute for Medical Research model viral infection spread using geometric series with reproduction number R₀ as the common ratio.",
      "objectives": [
            "Determine common ratios and calculate designated terms using Tₙ = arⁿ⁻¹",
            "Solve simultaneous exponential equations to find a and r by division",
            "Compute finite geometric sums using sum formulas",
            "Determine convergence and calculate sums to infinity for infinite series"
      ],
      "sections": [
            {
                  "title": "Solving for GP Parameters by Division",
                  "content": "Unlike APs where equations are subtracted, GP equations are divided to eliminate the first term a. If T₃ = ar² = 18 and T₆ = ar⁵ = 486, divide T₆ / T₃: (ar⁵) / (ar²) = r³ = 486 / 18 = 27 => r = 3.",
                  "bulletPoints": [
                        "Express given terms: Tₚ = ar^(p-1) and T_q = ar^(q-1).",
                        "Divide higher term by lower term to cancel a.",
                        "Take roots to find common ratio r.",
                        "Substitute r back to find first term a."
                  ],
                  "keyTakeaway": "Always divide GP equations to eliminate the first term a."
            }
      ],
      "wassceExamTips": [
            "State the condition |r| < 1 before calculating the sum to infinity S_∞.",
            "Remember the exponent on r is (n - 1), NOT n.",
            "When converting recurring decimals to fractions, state first term a and common ratio r explicitly."
      ],
      "commonMistakes": [
            "Subtracting GP equations instead of dividing them.",
            "Attempting to calculate sum to infinity when |r| ≥ 1 (which diverges to infinity).",
            "Sign errors when common ratio r is negative."
      ],
      "summaryChecklist": [
            "Can I find the 8th term of a GP?",
            "Can I divide terms to find common ratio r?",
            "Can I calculate the sum to infinity S_∞ = a / (1 - r)?"
      ]
},
    examples: [
      {
            "id": "shs3-m13-ex1",
            "title": "WASSCE GP Parameter Division & Sum to Infinity",
            "problem": "The 2nd term of a Geometric Progression is 9 and the 4th term is 1. (i) Find the two possible values of the common ratio r and the corresponding first terms; (ii) Assuming r > 0, find the sum to infinity of the progression.",
            "stepByStepSolution": [
                  "Step 1: Set up equations for T₂ and T₄:\nT₂ = ar = 9 ... (1) [B1]\nT₄ = ar³ = 1 ... (2) [B1]",
                  "Step 2: Divide equation (2) by equation (1):\n(ar³) / (ar) = 1 / 9\nr² = 1 / 9 [M1]",
                  "Step 3: Solve for r:\nr = ±√(1/9) = ±1/3 [A1]",
                  "Step 4: Find corresponding first terms:\nIf r = 1/3: a(1/3) = 9 => a = 27 [A1]\nIf r = -1/3: a(-1/3) = 9 => a = -27 [A1]",
                  "Step 5: (ii) Calculate Sum to Infinity for r = 1/3, a = 27:\nSince |r| = 1/3 < 1, the sum to infinity exists: [B1]\nS_∞ = a / (1 - r) = 27 / (1 - 1/3) = 27 / (2/3) [M1]\nS_∞ = 27 × (3/2) = 81 / 2 = 40.5 [A1]"
            ],
            "keyTakeaway": "Always remember r² = 1/9 yields two possible values: r = ±1/3."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t2-geometric-progression']
  },

  {
    id: 'shs3-math-t3-matrices-operations',
    subjectId: 'math',
    level: 'SHS 3',
    term: 3,
    orderIndex: 14,
    title: "Matrices I: Matrix Notation, Order & Operations",
    description: "Matrix dimensions m × n, addition, subtraction, scalar multiplication, matrix multiplication condition, row-by-column multiplication, and transpose.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Matrix Order:
  - Rows (horizontal) × Columns (vertical): m × n.
• Addition & Subtraction:
  - Possible ONLY if matrices have the EXACT SAME order. Add/subtract corresponding elements.
• Scalar Multiplication:
  - k · A: Multiply every single entry in matrix A by scalar k.
• Matrix Multiplication (AB):
  - Condition: Columns of A MUST equal Rows of B: (m × k) × (k × n) = (m × n).
  - Row by Column multiplication: Multiply elements along row of A by corresponding elements down column of B and sum.
  - In general, AB ≠ BA (non-commutative!).
• Transpose Aᵀ:
  - Interchange rows and columns: entry (i, j) moves to (j, i).`,
    detailedNotes: {
      "introduction": "Matrices organize linear data into rectangular arrays, providing the mathematical engine for computer graphics, economics, and quantum mechanics.",
      "realWorldContext": "Transport logistics dispatchers in Tema Port track freight cargo quantities across multiple container ships and warehouses using matrix inventory tables.",
      "objectives": [
            "Identify matrix dimensions and determine addition/multiplication compatibility",
            "Perform matrix addition, subtraction, and scalar multiplication",
            "Execute row-by-column matrix multiplication accurately",
            "Determine matrix transposes and verify algebraic matrix properties"
      ],
      "sections": [
            {
                  "title": "The Row-by-Column Multiplication Algorithm",
                  "content": "To find the entry in row i, column j of the product AB: take row i from the first matrix A and column j from the second matrix B. Multiply matching pairs of elements and add the products together.",
                  "bulletPoints": [
                        "Trace finger along row of matrix A.",
                        "Trace finger down column of matrix B.",
                        "Multiply corresponding pairs: (a₁₁b₁₁ + a₁₂b₂₁).",
                        "Sum the products to fill the single cell."
                  ],
                  "keyTakeaway": "Always multiply ROW from first matrix by COLUMN from second matrix."
            }
      ],
      "wassceExamTips": [
            "Check compatibility BEFORE multiplying: columns of A must match rows of B.",
            "Keep entries arranged in clean rows and columns with round ( ) or square [ ] brackets.",
            "Remember that AB is generally NOT equal to BA."
      ],
      "commonMistakes": [
            "Multiplying corresponding elements when multiplying matrices instead of row-by-column.",
            "Attempting to add matrices of different dimensions.",
            "Swapping row and column orders when stating dimensions (writing n × m instead of m × n)."
      ],
      "summaryChecklist": [
            "Can I determine if two matrices can be multiplied?",
            "Can I multiply a 2×2 matrix by another 2×2 matrix?",
            "Can I find the transpose of a 2×3 matrix?"
      ]
},
    examples: [
      {
            "id": "shs3-m14-ex1",
            "title": "WASSCE 2x2 Matrix Multiplication",
            "problem": "Given matrices A = [[2, -1], [3, 4]] and B = [[1, 3], [-2, 0]], calculate: (i) 2A - 3B; (ii) the product AB.",
            "stepByStepSolution": [
                  "Step 1: (i) Compute scalar multiples 2A and 3B:\n2A = [[2(2), 2(-1)], [2(3), 2(4)]] = [[4, -2], [6, 8]] [M1]\n3B = [[3(1), 3(3)], [3(-2), 3(0)]] = [[3, 9], [-6, 0]] [M1]",
                  "Step 2: Subtract corresponding entries:\n2A - 3B = [[4 - 3, -2 - 9], [6 - (-6), 8 - 0]]\n2A - 3B = [[1, -11], [12, 8]] [A1]",
                  "Step 3: (ii) Compute product AB (Row by Column):\nEntry (1,1): 2(1) + (-1)(-2) = 2 + 2 = 4\nEntry (1,2): 2(3) + (-1)(0) = 6 + 0 = 6 [M1]\nEntry (2,1): 3(1) + 4(-2) = 3 - 8 = -5\nEntry (2,2): 3(3) + 4(0) = 9 + 0 = 9 [M1]",
                  "Step 4: Assemble product matrix:\nAB = [[4, 6], [-5, 9]] [A1]"
            ],
            "keyTakeaway": "Row-by-column: trace row from A across, column from B down, and sum matching products."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t3-matrices-operations']
  },

  {
    id: 'shs3-math-t3-matrices-determinants-inverses',
    subjectId: 'math',
    level: 'SHS 3',
    term: 3,
    orderIndex: 15,
    title: "Matrices II: Determinants, Singular Matrices & Inverses",
    description: "Determinant det(A) = ad - bc, condition for singular matrices (det = 0), adjoint matrix, multiplicative inverse A⁻¹ = (1/det) adj(A), and identity matrix I.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• For Matrix A = [[a, b], [c, d]]:
  - Determinant: det(A) = |A| = ad - bc.
  - Singular Matrix: det(A) = 0 (has NO inverse).
  - Non-singular Matrix: det(A) ≠ 0 (inverse exists).
• Multiplicative Inverse A⁻¹:
  - Adjoint: adj(A) = [[d, -b], [-c, a]]. (Swap leading diagonal, negate other diagonal).
  - Inverse Formula: A⁻¹ = (1 / det A) × adj(A) = [1 / (ad - bc)] [[d, -b], [-c, a]].
  - Fundamental Property: A · A⁻¹ = A⁻¹ · A = I = [[1, 0], [0, 1]].`,
    detailedNotes: {
      "introduction": "Determinants and inverses allow division-like operations in matrix algebra, enabling the solution of simultaneous equation systems.",
      "realWorldContext": "Robotics control systems in advanced manufacturing use 2×2 matrix inverses to compute coordinate transformations from joint sensor angles.",
      "objectives": [
            "Calculate determinants of 2×2 matrices with positive and negative entries",
            "Determine unknown variables that make matrices singular",
            "Construct adjoint matrices and compute multiplicative matrix inverses",
            "Verify inverse accuracy using A · A⁻¹ = I"
      ],
      "sections": [
            {
                  "title": "The 2×2 Inverse Construction Rule",
                  "content": "To invert [[a, b], [c, d]]: (1) Calculate det = ad - bc; (2) Swap the positions of a and d; (3) Change the signs of b and c (to -b and -c); (4) Multiply the new matrix by 1 / det.",
                  "bulletPoints": [
                        "det = ad - bc.",
                        "Swap main diagonal: a ↔ d.",
                        "Negate off-diagonal: b → -b, c → -c.",
                        "Divide every entry by det."
                  ],
                  "keyTakeaway": "Swap leading diagonal elements, negate the other two, and divide by det A."
            }
      ],
      "wassceExamTips": [
            "Calculate the determinant first. If det = 0, stop and state that the matrix is singular and has no inverse.",
            "Pay meticulous attention to signs when evaluating ad - bc where terms are already negative.",
            "Keep the 1/det scalar outside the matrix until final multiplications to avoid messy fractions."
      ],
      "commonMistakes": [
            "Sign errors in ad - bc: e.g. 3(4) - (-2)(5) = 12 - (-10) = 22, not 2.",
            "Swapping the wrong diagonal or negating the wrong elements.",
            "Attempting to invert a singular matrix."
      ],
      "summaryChecklist": [
            "Can I calculate det A = ad - bc?",
            "Can I find the value of k that makes a matrix singular?",
            "Can I compute the inverse A⁻¹ of a non-singular matrix?"
      ]
},
    examples: [
      {
            "id": "shs3-m15-ex1",
            "title": "WASSCE Matrix Inverse Computation",
            "problem": "Given matrix M = [[3, 5], [1, 2]], find: (i) the determinant of M; (ii) the inverse matrix M⁻¹; (iii) verify that M M⁻¹ = I.",
            "stepByStepSolution": [
                  "Step 1: (i) Calculate determinant det(M):\ndet(M) = (3 × 2) - (5 × 1) = 6 - 5 = 1 [M1, A1]",
                  "Step 2: (ii) Construct the adjoint matrix adj(M):\nSwap leading diagonal (3 and 2): 2 and 3.\nNegate off-diagonal: 5 becomes -5, 1 becomes -1.\nadj(M) = [[2, -5], [-1, 3]] [M1, A1]",
                  "Step 3: Compute inverse M⁻¹:\nM⁻¹ = (1 / det M) × adj(M) = (1 / 1) × [[2, -5], [-1, 3]] = [[2, -5], [-1, 3]] [A1]",
                  "Step 4: (iii) Verify M M⁻¹ = I:\n[[3, 5], [1, 2]] × [[2, -5], [-1, 3]]\nEntry (1,1): 3(2) + 5(-1) = 6 - 5 = 1\nEntry (1,2): 3(-5) + 5(3) = -15 + 15 = 0\nEntry (2,1): 1(2) + 2(-1) = 2 - 2 = 0\nEntry (2,2): 1(-5) + 2(3) = -5 + 6 = 1 [M1]\nProduct = [[1, 0], [0, 1]] = I (Verified!) [A1]"
            ],
            "keyTakeaway": "Verifying that M · M⁻¹ produces the identity matrix confirms your inverse is 100% correct."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t3-matrices-determinants-inverses']
  },

  {
    id: 'shs3-math-t3-matrices-linear-systems',
    subjectId: 'math',
    level: 'SHS 3',
    term: 3,
    orderIndex: 16,
    title: "Matrices III: Solving Simultaneous Equations Using Matrix Methods",
    description: "Matrix equation AX = B, solving via pre-multiplication X = A⁻¹B, Cramer’s rule x = D_x/D and y = D_y/D, and real-world word problems.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Matrix Method (Inverse Method):
  - System: a₁x + b₁y = c₁ and a₂x + b₂y = c₂.
  - Matrix Form: AX = B => [[a₁, b₁], [a₂, b₂]] [[x], [y]] = [[c₁], [c₂]].
  - Solution: Pre-multiply by A⁻¹: X = A⁻¹ B.
• Cramer's Rule (Determinant Method):
  - Coefficient determinant D = det([[a₁, b₁], [a₂, b₂]]).
  - D_x = det([[c₁, b₁], [c₂, b₂]]) (replace x column with constants).
  - D_y = det([[a₁, c₁], [a₂, c₂]]) (replace y column with constants).
  - Solutions: x = D_x / D  ;  y = D_y / D  (for D ≠ 0).`,
    detailedNotes: {
      "introduction": "Linear systems model simultaneous constraints in economics, electrical circuits, and network traffic flow.",
      "realWorldContext": "Power grid engineers at GRIDCo use matrix simultaneous solvers to balance voltage differentials across multiple high-voltage substations.",
      "objectives": [
            "Convert pairs of linear equations into the matrix form AX = B",
            "Solve simultaneous systems by pre-multiplying by the inverse matrix X = A⁻¹B",
            "Apply Cramer’s rule using 2×2 determinants D, D_x, and D_y",
            "Translate practical commerce word problems into matrix systems"
      ],
      "sections": [
            {
                  "title": "The Pre-Multiplication Requirement",
                  "content": "In matrix algebra, order matters! When solving AX = B, you must PRE-multiply both sides by A⁻¹: A⁻¹(AX) = A⁻¹B => IX = A⁻¹B => X = A⁻¹B. Writing B A⁻¹ is completely undefined because dimensions will not match.",
                  "bulletPoints": [
                        "AX = B => X = A⁻¹ B.",
                        "A⁻¹ is on the LEFT of B.",
                        "Matrix multiplication: (2×2) × (2×1) = (2×1).",
                        "Extract x = top entry, y = bottom entry."
                  ],
                  "keyTakeaway": "Always write X = A⁻¹ B, never B A⁻¹."
            }
      ],
      "wassceExamTips": [
            "State the matrix equation AX = B clearly first to earn the formulation (B1) mark.",
            "Show the determinant and adjoint matrix explicitly before multiplying.",
            "Verify your solutions by substituting back into both original equations."
      ],
      "commonMistakes": [
            "Post-multiplying by A⁻¹ instead of pre-multiplying.",
            "Swapping the constants when setting up D_x and D_y in Cramer's rule.",
            "Sign errors during matrix-vector multiplication."
      ],
      "summaryChecklist": [
            "Can I set up AX = B for a 2x2 system?",
            "Can I solve using X = A⁻¹ B?",
            "Can I solve the same system using Cramer's rule?"
      ]
},
    examples: [
      {
            "id": "shs3-m16-ex1",
            "title": "WASSCE Matrix Method Simultaneous Solution",
            "problem": "Use matrix inverse methods to solve the simultaneous linear equations:\n3x + 2y = 12\n5x - 3y = 1",
            "stepByStepSolution": [
                  "Step 1: Write the system in matrix form AX = B:\n[[3, 2], [5, -3]] [[x], [y]] = [[12], [1]] [B1]",
                  "Step 2: Find the determinant of coefficient matrix A:\ndet(A) = 3(-3) - 2(5) = -9 - 10 = -19 [M1, A1]",
                  "Step 3: Construct the inverse matrix A⁻¹:\nadj(A) = [[-3, -2], [-5, 3]]\nA⁻¹ = (1 / -19) × [[-3, -2], [-5, 3]] = (-1/19) [[-3, -2], [-5, 3]] [M1, A1]",
                  "Step 4: Solve for X = A⁻¹ B:\n[[x], [y]] = (-1/19) [[-3, -2], [-5, 3]] [[12], [1]] [M1]",
                  "Step 5: Perform matrix multiplication:\nTop entry: (-3)(12) + (-2)(1) = -36 - 2 = -38\nBottom entry: (-5)(12) + 3(1) = -60 + 3 = -57 [M1]\n[[x], [y]] = (-1/19) [[-38], [-57]] = [[-38 / -19], [-57 / -19]] = [[2], [3]] [A1]",
                  "Step 6: State final solution:\nx = 2, y = 3 [B1]"
            ],
            "keyTakeaway": "Dividing -38 and -57 by -19 cleanly yields integers x = 2 and y = 3."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t3-matrices-linear-systems']
  },

  {
    id: 'shs3-math-t3-logical-reasoning-truth-tables',
    subjectId: 'math',
    level: 'SHS 3',
    term: 3,
    orderIndex: 17,
    title: "Logical Reasoning, Truth Tables & Valid Arguments",
    description: "Propositions, truth tables for negation (~p), conjunction (p ∧ q), disjunction (p ∨ q), implication (p → q), equivalence (p ↔ q), and tautologies.",
    isFreeTrial: false,
    isVip: true,
    youtubeUrl: 'https://www.youtube.com/watch?v=F3zT-u58p3s',
    youtubeId: 'F3zT-u58p3s',
    keyNotes: `• Logical Connectives:
  - Negation (~p or ¬p): Opposite truth value.
  - Conjunction (p ∧ q): TRUE only when BOTH are True.
  - Disjunction (p ∨ q): FALSE only when BOTH are False.
  - Implication (p → q): FALSE only when T → F (True premise leads to False conclusion).
  - Biconditional (p ↔ q): TRUE when both have the SAME truth value.
• Derived Statements:
  - Conditional: p → q.
  - Converse: q → p.
  - Inverse: ~p → ~q.
  - Contrapositive: ~q → ~p (logically equivalent to p → q).
• Argument Validation:
  - Tautology: Column of all Ts.
  - Contradiction: Column of all Fs.`,
    detailedNotes: {
      "introduction": "Mathematical logic establishes unambiguous rules of deduction, enabling formal proofs and algorithm verification in computer science.",
      "realWorldContext": "Legal drafters in Ghana’s Parliament use propositional logic rules to ensure statute definitions and qualification criteria contain zero logical contradictions.",
      "objectives": [
            "Construct comprehensive truth tables for compound statements",
            "Evaluate truth values under negation, conjunction, disjunction, implication, and equivalence",
            "State converses, inverses, and contrapositives of conditional statements",
            "Identify tautologies and determine the logical validity of deductive arguments"
      ],
      "sections": [
            {
                  "title": "The Conditional (Implication) Truth Rule",
                  "content": "The implication p → q is only False in one single scenario: when the premise p is True but the conclusion q is False (T → F is F). In all other scenarios—including when p is False—the implication is considered vacuously True.",
                  "bulletPoints": [
                        "T → T is True.",
                        "T → F is FALSE (the only false case!).",
                        "F → T is True.",
                        "F → F is True."
                  ],
                  "keyTakeaway": "p → q is False ONLY when True implies False."
            }
      ],
      "wassceExamTips": [
            "Set up truth tables with 4 rows for 2 variables: (T,T), (T,F), (F,T), (F,F).",
            "Write intermediate columns step-by-step (e.g. column for ~p, then column for ~p ∨ q).",
            "Conclude with a clear statement: e.g. \"Since the final column contains only Ts, the statement is a tautology\"."
      ],
      "commonMistakes": [
            "Marking F → T as False (it is True!).",
            "Confusing the converse (q → p) with the contrapositive (~q → ~p).",
            "Omitting intermediate step columns in truth tables, losing method marks."
      ],
      "summaryChecklist": [
            "Can I construct a truth table for p → q?",
            "Can I write the contrapositive of a statement?",
            "Can I prove that a statement is a tautology?"
      ]
},
    examples: [
      {
            "id": "shs3-m17-ex1",
            "title": "WASSCE Truth Table Proof of a Tautology",
            "problem": "Construct a truth table for the compound proposition (p → q) ∨ p and state whether it is a tautology.",
            "stepByStepSolution": [
                  "Step 1: Set up the 4 fundamental input combinations for p and q:\np | q\nT | T\nT | F\nF | T\nF | F [B1]",
                  "Step 2: Construct column for implication p → q:\np → q is False only when T → F.\nT → T = T\nT → F = F\nF → T = T\nF → F = T [M1, A1]",
                  "Step 3: Construct final column for disjunction (p → q) ∨ p:\nDisjunction is True if at least one component is True.\nRow 1: T ∨ T = T\nRow 2: F ∨ T = T\nRow 3: T ∨ F = T\nRow 4: T ∨ F = T [M1, A1]",
                  "Step 4: Analyze final column and conclude:\nThe final column contains only True (T) values for all possible combinations. [B1]\nTherefore, the compound proposition (p → q) ∨ p is a TAUTOLOGY. [A1]"
            ],
            "keyTakeaway": "Showing every intermediate column secures all method marks before concluding with the definition of a tautology."
      }
],
    quiz: SHS3_MATH_QUIZZES['shs3-math-t3-logical-reasoning-truth-tables']
  }
];
