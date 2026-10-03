// Ghanaian SHS General Science elective — Physics
// WASSCE Elective Physics syllabus across SHS 1, SHS 2 and SHS 3
// Textbook-grade notes, worked WAEC solutions with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS_PHYSICS_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-phy-t1-measurement-units-errors",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Measurement, SI Units and Experimental Error",
    "description": "The seven SI base quantities and the derived units built from them, dimensional checking of formulae, vernier calliper and micrometer screw gauge readings including zero error, the split between systematic and random error, accuracy against precision, and the significant-figure discipline that Paper 3 supervisors apply to every recorded reading.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Physics is the science of measurement: a quantity is a number multiplied by a unit, so \"5.0 m s⁻¹\" earns the mark while \"5.0\" alone does not.\n• The seven SI base quantities are length (metre, m), mass (kilogram, kg), time (second, s), electric current (ampere, A), thermodynamic temperature (kelvin, K), amount of substance (mole, mol) and luminous intensity (candela, cd).\n• Derived units come from base units: \"speed = m s⁻¹\", \"acceleration = m s⁻²\", \"force = kg m s⁻² = newton (N)\", \"energy = N m = joule (J)\", \"power = J s⁻¹ = watt (W)\", \"pressure = kg m⁻¹ s⁻² = pascal (Pa)\".\n• SI prefixes are fixed multiples and never guessed: mega 10⁶, kilo 10³, centi 10⁻², milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹; so \"3.6 km h⁻¹ = 1 m s⁻¹\" and \"72 km h⁻¹ = 20 m s⁻¹\".\n• Dimensions drop the unit names: force is [M L T⁻²], energy and moment are [M L² T⁻²], pressure is [M L⁻¹ T⁻²], density is [M L⁻³]; a true formula must have the same dimensions on both sides.\n• Dimensional check of \"v² = u² + 2as\": left side is [L² T⁻²] and 2as gives [L T⁻²] x [L] = [L² T⁻²], so the formula is dimensionally sound.\n• A metre rule is marked in 1 mm, so read between the marks to 0.1 cm and hold the eye square over the scale to avoid parallax.\n• Vernier calliper: when 10 vernier divisions span 9 main-scale divisions of 1 mm, least count = 1 mm - 0.9 mm = 0.1 mm; reading = main scale + coinciding vernier division x 0.1 mm, so \"34 mm + 7(0.1 mm) = 34.7 mm\".\n• Micrometer screw gauge: pitch 0.5 mm with 50 head divisions gives least count 0.5/50 = 0.01 mm, so \"4.5 mm + 28(0.01 mm) = 4.78 mm\".\n• Zero error is subtracted when positive and added when negative: 34.7 mm with a +0.2 mm error is really 34.5 mm, while 4.78 mm with a -0.04 mm error is really 4.82 mm.\n• Measure what is thinner than your instrument by the cumulative method: a stack of 50 sheets measuring 4.75 mm gives 4.75/50 = 0.095 mm for one sheet.\n• Systematic error pushes every reading the same way, from an uncalibrated instrument, a worn zero or a personal habit; calibration and correction remove it, repetition does not.\n• Random error scatters readings about the mean, so take at least five and quote mean with mean absolute deviation: from 2.14, 2.18, 2.16, 2.17 and 2.15 mm the mean is 2.16 mm and the deviation 0.012 mm, written \"2.16 mm ± 0.01 mm\".\n• Accuracy is closeness to the true value; precision is closeness of repeated readings to one another, so a tight cluster of shots far from the bullseye is precise but not accurate.\n• Significant figures: \"0.00450 m\" carries 3, \"20.02 g\" carries 4, \"1.5 x 10⁸ m\" carries 2; leading zeros never count but captive and trailing zeros after a decimal point always do.\n• Percentage error = (uncertainty/measurement) x 100: a 25.0 cm rod read to ±0.05 cm carries 0.2 per cent, and a plate 12.0 cm x 5.00 cm read to ±0.1 cm each carries (0.1/12.0 + 0.1/5.00) x 100 = 2.8 per cent, which is ±1.7 cm² on an area of 60 cm².\n• In the school laboratory the vernier calliper resolves 0.1 mm, the micrometer 0.01 mm, the beam balance 0.01 g and a stop watch 0.1 s; never claim more precision than the instrument can give.",
    "detailedNotes": {
      "overview": "Measurement is the first physics skill a SHS 1 student is examined on and the one that quietly decides marks in every later practical. This topic fixes the SI vocabulary, the seven base quantities and the derived units built from them, then teaches dimensional working as a test of whether a formula can even be true. It moves into the two instruments that define school measurement, the vernier calliper and the micrometer screw gauge, with their least counts and zero errors, and finishes on the language of error: systematic against random, accuracy against precision, and the significant-figure rule that tells you how many digits an answer may honestly carry.",
      "introduction": "Work with the real instruments in the science laboratory rather than with pictures of them. Pass a calliper and a gauge round the class, close each on an exercise book cover, read the scale aloud and write the reading on the board with its unit and least count. Then deliberately introduce a zero error, close the jaws on nothing, and let the class see that the instrument itself can be a liar. Every quantity you record this term should carry three things: the number, the unit, and the uncertainty you are prepared to defend.",
      "realWorldContext": "Measurement is paid for and argued over all round Ghana. A block moulder at Tarkwa counts cement by the 50 kg bag and sand by the wheelbarrow, so a scale that reads 2 kg heavy costs real money. A gold buyer at Obuasi weighs dust on a balance whose zero must be checked each morning, because 0.01 g is worth cedis. The ECG technician reading the volt drop on a line near Akosombo, the sachet-water plant officer at Arawalo checking turbidity and fill volume, and the GSSE examiner checking the length of a school field all depend on an instrument being correct at zero and a reading being taken square to the scale. Your school laboratory vernier calliper and micrometer are the same tools in miniature.",
      "objectives": [
        "Name the seven SI base quantities with their units and symbols, and express derived units in terms of base units",
        "Use dimensional analysis to check whether a given physical formula is possible",
        "Read a vernier calliper and a micrometer screw gauge to their least counts and correct a stated zero error",
        "Distinguish systematic from random error and choose the correct treatment for each",
        "State a measurement with the proper number of significant figures and a stated uncertainty or percentage error"
      ],
      "sections": [
        {
          "title": "The SI System: Base Quantities, Derived Units and Prefixes",
          "content": "A physical quantity is written as a number times a unit, and the number is meaningless until the unit is fixed. The International System of Units rests on seven base quantities, defined independently of one another: length in metres, mass in kilograms, time in seconds, current in amperes, temperature in kelvins, amount of substance in moles and luminous intensity in candelas. Everything else in the physics syllabus is derived from these by multiplication or division, and the derived quantity then gets a special name as a courtesy: the newton for kg m s⁻², the joule for kg m² s⁻², the watt for kg m² s⁻³ and the pascal for kg m⁻¹ s⁻². Note what those names hide: a newton is not a new kind of thing, it is a kilogram, a metre and two inverse seconds assembled in a fixed pattern. Prefixes are exact decimal multipliers and must never be treated as decoration. Writing 5 cm means 0.05 m; writing 5 mm means 0.005 m; and a student who converts 72 km h⁻¹ into 200 m s⁻¹ has simply mis-stated the factor of 3.6. The habit to build in SHS 1 is to convert every quantity into base SI units before substituting into any formula, then only bring a prefix back at the end for presentation.",
          "bulletPoints": [
            "Seven base quantities: length (m), mass (kg), time (s), current (A), temperature (K), amount of substance (mol), luminous intensity (cd).",
            "Derived units: \"force = kg m s⁻² (N)\", \"energy = kg m² s⁻² (J)\", \"power = kg m² s⁻³ (W)\", \"pressure = kg m⁻¹ s⁻² (Pa)\".",
            "Prefixes are exact: mega 10⁶, kilo 10³, centi 10⁻², milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹.",
            "Speed conversions used constantly in WAEC: \"3.6 km h⁻¹ = 1 m s⁻¹\", \"72 km h⁻¹ = 20 m s⁻¹\", \"15 m s⁻¹ = 54 km h⁻¹\".",
            "Convert to base SI units before substituting, especially grams to kilograms and minutes to seconds."
          ],
          "keyTakeaway": "A derived unit is only a shorthand for a product of base units, so converting everything to base SI first removes most of the arithmetic errors candidates make.",
          "realWorldExample": "A trotro driver charged with speeding at Kwada junction is timed over a marked 400 m distance; the police sheet gives 20 m s⁻¹, which the magistrate reads correctly as 72 km h⁻¹, because 20 x 3.6 = 72."
        },
        {
          "title": "Dimensions: Testing Whether a Formula Can Be True",
          "content": "Dimensional analysis replaces units with the symbols M, L and T for mass, length and time and then checks the algebra of a formula. The rule is simple and absolute: quantities may be added or subtracted only when they share the same dimensions, and both sides of a valid equation must reduce to the identical dimension. Test the equation v² = u² + 2as. Velocity squared is [L T⁻¹] squared, that is [L² T⁻²]; the product 2as is [L T⁻²] multiplied by [L], which is also [L² T⁻²], so every term agrees and the equation survives the check. Now test a candidate wrongly written as v = u + at². The term at² is [L T⁻²] x [T²] = [L], a length, and length cannot be added to velocity, so the formula is impossible. Dimensional work cannot prove a formula right, because it is blind to pure numbers such as the factor one half in kinetic energy, but it destroys wrong formulas quickly, which is exactly what a candidate needs in a Paper 1 objective item. It also lets you recover a formula you have half forgotten: if you know the period of a pendulum depends on length and on gravitational field strength, the only combination with dimension of time is the square root of length divided by g, and that is the reason the answer must contain a square root.",
          "bulletPoints": [
            "Fundamental dimensions: [M] mass, [L] length, [T] time; charge and temperature are added when needed.",
            "Common dimensions: velocity [L T⁻¹], acceleration [L T⁻²], force [M L T⁻²], energy and moment [M L² T⁻²], density [M L⁻³].",
            "Principle of homogeneity: every term on one side of a physical equation must have the same dimensions.",
            "Worked check: \"v² = u² + 2as\" gives [L² T⁻²] in every term, so it is dimensionally consistent.",
            "Dimensional analysis cannot fix numerical constants such as the 1/2 in \"KE = 1/2 m v²\"."
          ],
          "keyTakeaway": "Before submitting any answer, check the dimensions of each term; a mismatched term is proof that the formula has been copied or transposed wrongly.",
          "realWorldExample": "A build-up of silt at the Kpong barrage is estimated from a discharge formula; the works engineer first checks that the units on the right reduce to m³ s⁻¹, because a formula that fails the dimension test will mis-state the volume of water ECG can release."
        },
        {
          "title": "The Vernier Calliper and the Micrometer Screw Gauge",
          "content": "A metre rule resolves 1 mm and nothing finer, so internal diameters, wire thicknesses and sheet thicknesses need two mechanical magnifiers. The vernier calliper adds a sliding scale. On the common school pattern, 10 vernier divisions span 9 main-scale divisions of 1 mm, so one vernier division is 0.9 mm and the least count, the difference between one main-scale and one vernier division, is 0.1 mm. Read the main scale at the edge of the jaw, then find the single vernier line that lines up exactly with a main-scale line, multiply its number by 0.1 mm and add: main scale 34 mm with the 7th vernier division coinciding gives 34.7 mm. The instrument measures external diameter with the lower jaws, internal diameter with the upper jaws and depth with the stem at the back. The micrometer screw gauge goes finer still. Its spindle advances one pitch, usually 0.5 mm, for one full turn of the head, and the head is divided into 50 parts, so least count = 0.5 mm divided by 50 = 0.01 mm. A sleeve reading of 4.5 mm with the 28th head line on the datum gives 4.5 + 0.28 = 4.78 mm. Both instruments can carry a zero error. Close the calliper jaws on nothing: if the vernier zero sits beyond the main-scale zero the error is positive and must be subtracted from every reading; if it sits short, the error is negative and must be added. The ratchet on the gauge exists to stop the student crushing the object and bending the frame, and both instruments must be held square to the object, never at an angle.",
          "bulletPoints": [
            "Vernier least count = 1 main-scale division - 1 vernier division = 1 mm - 0.9 mm = 0.1 mm.",
            "Vernier reading: \"34 mm + 7(0.1 mm) = 34.7 mm\", recorded with one decimal place in millimetres.",
            "Micrometer least count = pitch/number of head divisions = 0.5/50 = 0.01 mm.",
            "Micrometer reading: \"4.5 mm + 28(0.01 mm) = 4.78 mm\", recorded to two decimal places in millimetres.",
            "Positive zero error is subtracted, negative zero error is added; check zero before and after each set of readings.",
            "Cumulative method for very small lengths: 50 sheets at 4.75 mm means one sheet is 0.095 mm."
          ],
          "keyTakeaway": "Quote a calliper reading to 0.1 mm and a gauge reading to 0.01 mm, and always state the zero error you found and the correction you applied.",
          "realWorldExample": "In a technical workshop at Tema the fitter checks a machined pin with a micrometer before it goes into an engine, because a pin 0.04 mm oversize will not enter the bush, and the shop record shows the gauge reading, the zero error and the corrected size in that order."
        },
        {
          "title": "Errors, Accuracy, Precision and Honest Numbers",
          "content": "Every measurement carries error, and the examinee’s task is to name the type and treat it properly. Systematic error is a one-sided fault: an instrument that does not read zero when it should, a scale that is worn, a stopwatch that runs slow, or the habit of always reading a meniscus from below. It shifts every single value in the same direction, so repeating the experiment a hundred times does not help; calibration, a correction term, or a different instrument does. Random error is the unpredictable jitter in each reading, caused by reaction time, vibration, temperature drift or an unsteady hand. It is met by repetition: take at least five readings, discard a genuine outlier with a stated reason, then report the mean together with the mean absolute deviation. For the wire diameters 2.14, 2.18, 2.16, 2.17 and 2.15 mm the sum is 10.80 mm, the mean is 2.16 mm, the deviations are 0.02, 0.02, 0.00, 0.01 and 0.01 mm with a mean of 0.012 mm, and the honest statement is 2.16 mm ± 0.01 mm. Accuracy and precision are different words with different meanings. A balance that always reads 2.00 g heavy may give readings agreeing to 0.01 g: precise but inaccurate. Percentage error scales the uncertainty against the size of the reading, and it falls as the quantity measured grows, which is why measuring fifty sheets beats measuring one. Finally, significant figures keep you honest: the mean can never carry more digits than the readings it came from, and a calculated area from 12.0 cm and 5.00 cm is 60.0 cm², not 60.0232 cm².",
          "bulletPoints": [
            "Systematic error: same shift in every reading, cured by calibration, zero correction or a better instrument.",
            "Random error: scatter about the mean, reduced by repeating and averaging at least five readings.",
            "Mean absolute deviation for 2.14, 2.18, 2.16, 2.17, 2.15 mm is 0.012 mm, giving 2.16 mm ± 0.01 mm.",
            "Accuracy is closeness to the true value; precision is agreement among repeats; they are independent qualities.",
            "Percentage error = uncertainty/reading x 100, so a longer rod gives a smaller percentage error than a short one.",
            "Parallax, the eye reading a scale at an angle, is a systematic error and is prevented by viewing square-on."
          ],
          "keyTakeaway": "Name the error type, treat it the right way, and then quote a mean whose digits and uncertainty match what the instrument can really deliver.",
          "realWorldExample": "A student at Achimota measures five periods of a 1 m pendulum with the school stopwatch, gets 20.1, 20.4, 19.9, 20.2 and 20.4 s, and reports the mean 20.2 s for ten oscillations rather than the impossible 2.0200 s per oscillation."
        }
      ],
      "commonMistakes": [
        "Writing the numerical answer without its unit, for example \"the diameter is 34.7\", which WAEC refuses to award because 34.7 mm and 34.7 cm are different objects.",
        "Adding a positive zero error instead of subtracting it: a calliper with +0.2 mm zero error reading 34.7 mm gives 34.5 mm, not 34.9 mm, and the same sign confusion ruins the micrometer correction.",
        "Recording a micrometer reading as 4.8 mm when the head shows 28 divisions, that is 4.78 mm; the least count 0.01 mm means two decimal places in millimetres are compulsory.",
        "Reporting a mean of five readings to four or five significant figures, such as 2.1633 mm, when the instrument itself only resolves 0.01 mm.",
        "Trying to remove a systematic error by repeating the measurement, when repetition only reduces random error and a wrong zero stays wrong in every repeat.",
        "Converting 72 km h⁻¹ to 200 m s⁻¹, or 15 m s⁻¹ to 150 km h⁻¹, through careless use of the factor 3.6 instead of the clean chain 72 x 1000/3600."
      ],
      "wassceExamTips": [
        "Paper 1 asks objective items on units and dimensions, for example which of four quantities shares the dimension of energy. Reduce each option to M, L and T on the margin instead of guessing.",
        "In Paper 2 structured questions, a unit error costs the answer mark even when the arithmetic is perfect, so write the unit at every substitution line and carry it through.",
        "Paper 3, the alternative to practical, awards method marks for recording readings to the resolution of the named instrument: one decimal place in mm for a calliper, two for a micrometer, and a table whose heading reads \"quantity / unit\" so the body stays pure numbers.",
        "Always state the zero error you observed, whether it is zero, and the correction you applied; supervisors give a mark simply for the line \"zero error = +0.2 mm, corrected reading = 34.5 mm\".",
        "When asked for the mean of a set, show the sum divided by the count, then the deviation table; a mean quoted without its spread loses the precision mark.",
        "If a question asks whether a formula is dimensionally correct, test term by term and finish with the words \"therefore the equation is dimensionally consistent\"; the conclusion itself is marked."
      ],
      "summaryChecklist": [
        "Can I name the seven SI base quantities and give the symbol of each unit?",
        "Can I express the newton, joule, watt and pascal in base SI units?",
        "Can I use dimensional analysis to prove a stated formula is impossible?",
        "Can I read a vernier calliper to 0.1 mm and a micrometer to 0.01 mm and correct a zero error of either sign?",
        "Can I classify a stated error as systematic or random and choose the treatment that reduces it?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-measure-1",
        "title": "Vernier Calliper Reading with a Positive Zero Error",
        "problem": "A student uses a vernier calliper whose 10 vernier divisions span 9 main-scale divisions of 1 mm. With the jaws closed on nothing the vernier zero lies 2 divisions past the main-scale zero. On the outside of a plastic water conduit the main scale reads 34 mm and the 7th vernier division coincides with a main-scale line. Find the least count, the observed reading and the true external diameter.",
        "stepByStepSolution": [
          "Step 1 (M1): Least count = one main-scale division - one vernier division = 1 mm - (9/10)(1 mm) = 1 mm - 0.9 mm.",
          "Step 2 (A1): Least count = 0.1 mm, so every reading must be quoted to one decimal place in millimetres.",
          "Step 3 (M1): Observed reading = main-scale reading + (coinciding vernier division x least count) = 34 mm + 7(0.1 mm).",
          "Step 4 (A1): Observed reading = 34 mm + 0.7 mm = 34.7 mm.",
          "Step 5 (M1): The zero error is positive because the vernier zero sits past the main-scale zero with the jaws shut, and its size is 2 x 0.1 mm = +0.2 mm, so it is subtracted.",
          "Step 6 (A1): True diameter = 34.7 mm - 0.2 mm = 34.5 mm.",
          "Step 7 (M1): Record the result as \"external diameter = 34.5 mm, zero error +0.2 mm corrected\", and repeat at three positions along the conduit to check it is truly circular."
        ],
        "keyTakeaway": "Least count 0.1 mm, observed reading 34.7 mm and true diameter 34.5 mm: a positive zero error is always subtracted, and the correction line earns its own method mark."
      },
      {
        "id": "ex-phy-measure-2",
        "title": "Micrometer Screw Gauge, Thickness of Paper and Percentage Error",
        "problem": "A micrometer screw gauge has a pitch of 0.5 mm and 50 divisions on the head. With the spindle closed on nothing the head reads 4 divisions below the datum line. A stack of 50 identical sheets of exercise-book paper gives a sleeve reading of 4.5 mm with the 28th head division on the datum line. Find the least count, the corrected stack thickness, the thickness of one sheet, and the percentage error if the stack reading is uncertain by ±0.01 mm.",
        "stepByStepSolution": [
          "Step 1 (M1): Least count = pitch divided by number of head divisions = 0.5 mm / 50.",
          "Step 2 (A1): Least count = 0.01 mm, so readings are quoted to two decimal places in millimetres.",
          "Step 3 (M1): Observed stack reading = sleeve reading + head division x least count = 4.5 mm + 28(0.01 mm) = 4.78 mm.",
          "Step 4 (M1): The zero reading 4 divisions short of the datum is a negative zero error of -0.04 mm, and a negative zero error is added back.",
          "Step 5 (A1): Corrected stack thickness = 4.78 mm + 0.04 mm = 4.82 mm.",
          "Step 6 (M1): One sheet = corrected stack thickness / number of sheets = 4.82 mm / 50, the cumulative method used because one sheet is thinner than any school rule can resolve.",
          "Step 7 (A1): One sheet = 0.0964 mm, quoted as 0.096 mm; percentage error in the stack = (0.01 mm / 4.82 mm) x 100 = 0.21 per cent."
        ],
        "keyTakeaway": "The gauge resolves 0.01 mm, a negative zero error is added, and fifty sheets measured together give 0.096 mm each with a stack uncertainty of only 0.21 per cent."
      }
    ],
    "quiz": {
      "id": "quiz-phy-measurement-units",
      "topicId": "shs1-phy-t1-measurement-units-errors",
      "title": "Measurement, Units and Error Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-measure-1",
          "quizId": "quiz-phy-measurement-units",
          "questionText": "A vernier calliper has 10 vernier divisions that span 9 main-scale divisions, each main-scale division being 1 mm. What is the least count of the instrument?",
          "optionA": "0.01 mm",
          "optionB": "0.1 mm",
          "optionC": "1.0 mm",
          "optionD": "9.0 mm",
          "correctOption": "B",
          "subConcept": "Vernier least count",
          "explanation": "Least count is one main-scale division minus one vernier division, that is 1 mm - 0.9 mm = 0.1 mm. Option A is the least count of a micrometer screw gauge, C is the resolution of the metre rule printed on the main scale, and D misuses the 9 divisions as a length.",
          "remediationTip": "Write LC = 1 MSD - 1 VSD on the corner of your answer card and use it on every calliper question until it is automatic."
        },
        {
          "id": "q-phy-measure-2",
          "quizId": "quiz-phy-measurement-units",
          "questionText": "A vernier calliper has a positive zero error of 0.2 mm. When its jaws close on a pipe the reading is 34.7 mm. What is the true external diameter of the pipe?",
          "optionA": "34.9 mm",
          "optionB": "34.7 mm",
          "optionC": "0.2 mm",
          "optionD": "34.5 mm",
          "correctOption": "D",
          "subConcept": "Zero error correction",
          "explanation": "A positive zero error means the instrument already reads high with the jaws shut, so the error is subtracted: 34.7 mm - 0.2 mm = 34.5 mm. Option A is the common sign slip of adding the error, B ignores the correction altogether, and C states the error instead of the measurement.",
          "remediationTip": "Practise closing a calliper on nothing, note which side of zero the vernier sits, and say aloud whether the correction is plus or minus."
        },
        {
          "id": "q-phy-measure-3",
          "quizId": "quiz-phy-measurement-units",
          "questionText": "Which of the following is an SI base quantity?",
          "optionA": "Electric current",
          "optionB": "Force",
          "optionC": "Energy",
          "optionD": "Pressure",
          "correctOption": "A",
          "subConcept": "Base and derived quantities",
          "explanation": "Electric current, measured in amperes, is one of the seven base quantities. Force, energy and pressure are all built from mass, length and time, so their units are derived: kg m s⁻², kg m² s⁻² and kg m⁻¹ s⁻² respectively.",
          "remediationTip": "Memorise the seven base quantities as a single list of seven and test each option by asking whether its unit contains another unit."
        },
        {
          "id": "q-phy-measure-4",
          "quizId": "quiz-phy-measurement-units",
          "questionText": "Pressure is measured in pascals. Which expression gives the pascal in SI base units?",
          "optionA": "kg m s⁻²",
          "optionB": "kg m² s⁻²",
          "optionC": "kg m⁻¹ s⁻²",
          "optionD": "kg m⁻³",
          "correctOption": "C",
          "subConcept": "Derived units in base form",
          "explanation": "Pressure is force divided by area, so Pa = (kg m s⁻²) / m² = kg m⁻¹ s⁻². Option A is the newton, the unit of force before division by area, B is the joule, and D is the unit of density.",
          "remediationTip": "Derive each unit from its defining formula on the margin: pressure = force/area, so subtract two from the power of the metre."
        },
        {
          "id": "q-phy-measure-5",
          "quizId": "quiz-phy-measurement-units",
          "questionText": "A student times ten oscillations of a pendulum five times and takes the mean. Which type of error does averaging reduce?",
          "optionA": "Random error",
          "optionB": "Systematic error from a stopwatch that runs slow",
          "optionC": "The least count of the stopwatch",
          "optionD": "The choice of the metre as unit of length",
          "correctOption": "A",
          "subConcept": "Systematic and random error",
          "explanation": "Random error scatters readings above and below the true value, so averaging cancels much of that scatter. A stopwatch that runs slow shifts all five readings the same way, so the mean carries the same shift; averaging cannot cure a systematic fault.",
          "remediationTip": "Sort every error you meet into \"shifts everything one way\" or \"scatters about the mean\", then pick repetition for the second type only."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t1-scalar-vector-motion-graphs",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Scalars, Vectors and Motion Graphs",
    "description": "Distance against displacement, speed against velocity and acceleration, the triangle and parallelogram laws of vector addition, resolution of a force into perpendicular components, and the reading of displacement-time and velocity-time graphs where the gradient gives velocity and the area gives displacement.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A scalar has magnitude only; a vector has magnitude and direction and must be quoted with both, so \"12 m s⁻¹ due north\" is a velocity while \"12 m s⁻¹\" is only a speed.\n• Scalar pairs in this topic: distance, speed, time, mass, energy, work. Vector pairs: displacement, velocity, acceleration, force, momentum.\n• Distance is the length of the path actually travelled; displacement is the straight-line change of position from start to finish, and displacement can be zero even when distance is large, as on a round trip to Makola and back.\n• Average speed = total distance/total time; average velocity = total displacement/total time, and the two numbers are never the same on a bent route.\n• Acceleration is the change of velocity per second, \"a = (v - u)/t\", measured in m s⁻²; negative acceleration along the chosen positive direction is retardation.\n• Vector addition is geometric: put the vectors head to tail and the closing line from first tail to last head is the resultant (triangle law); with both tails together, complete the parallelogram and the diagonal from the common tail is the resultant.\n• Perpendicular forces add by Pythagoras: 6 N at right angles to 8 N gives \"R = √(6² + 8²) = 10 N\" acting at tan⁻¹(8/6) = 53.1° to the 6 N force.\n• Forces at any angle add by the cosine rule form \"R² = F₁² + F₂² + 2F₁F₂ cos θ\": for 5 N and 7 N at 60°, R² = 25 + 49 + 70(0.5) = 109, so R = 10.44 N.\n• The resultant of two vectors lies between their sum and their difference, so 5 N and 7 N can give anything from 2 N to 12 N depending on the angle between them.\n• Resolution writes one vector as two perpendicular components: a force F at angle θ to the horizontal has \"F cos θ\" horizontal and \"F sin θ\" vertical, so 12 N at 30° gives 10.4 N across and 6.0 N up.\n• Choose the axes to suit the problem, take components along each axis, add them, and only then recombine; sign discipline is where most candidates lose the answer mark.\n• The scalar (dot) product multiplies a vector by the component of another along it: \"W = F s cos θ\", so 8 N acting along 5 m at 60° gives 8 x 5 x 0.5 = 20 J.\n• On a displacement-time graph the gradient is the velocity: a straight line from 30 m at 4 s to 120 m at 10 s is \"90 m/6 s = 15 m s⁻¹\", a horizontal line means the body is at rest, and a downward gradient means return.\n• On a velocity-time graph the gradient is the acceleration and the area under the graph is the displacement: velocity falling from 25 m s⁻¹ to 5 m s⁻¹ in 4 s gives \"(5 - 25)/4 = -5 m s⁻²\".\n• Standard shape: accelerate from rest to 20 m s⁻¹ in 10 s, cruise 30 s, brake to rest in 10 s gives \"distance = 100 + 600 + 100 = 800 m\" in 50 s, so average velocity is 800/50 = 16 m s⁻¹.\n• Equations of uniformly accelerated motion, all valid only for constant acceleration: \"v = u + at\", \"s = ut + 1/2 at²\", \"v² = u² + 2as\", with g taken as 10 m s⁻² for free fall unless the question says otherwise.",
    "detailedNotes": {
      "overview": "This topic separates the quantities that merely have size from the quantities that also have a direction, and then shows that direction cannot be handled by ordinary arithmetic. You will build distance, displacement, speed, velocity and acceleration on top of that distinction, learn the triangle and parallelogram laws for combining vectors, resolve a single force into two perpendicular components, and read the two motion graphs that appear in almost every WAEC paper. The graph work is where candidates most often lose marks they should never have lost, because the gradient and the area of a velocity-time graph are different physical quantities and both are examinable in the same question.",
      "introduction": "Draw the journey from the school gate to the market on the board, then measure it with a piece of thread and again with a straight ruler, and let the two numbers differ by name: one is distance, one is displacement. After that, work the graphs in pairs, one student producing the graph while the other dictates the gradient, the area and the story of the motion in words. Keep a formula card with the three equations of motion and the two graph rules written in it, and use it in every exercise this term until no substitution is done from memory.",
      "realWorldContext": "A driver at Kaneshie ferry gate follows the GPS to a destination 9 km away along a route of 14 km: the odometer records the distance, the displacement arrow records 9 km, and the two figures describe different things. A fisherman at Elmina pulls a net with a rope inclined to the deck, so only part of his pull moves the net forward and the rest presses it into the water, exactly the resolution of forces you do on paper. A courier on a trotro from Kumasi to Cape Coast travels 250 km in about 4 hours, giving an average speed near 62 km h⁻¹, while a motorcycle that rides out 400 m east along the Tamale road and 300 m north to a warehouse has covered 700 m of road but is only 500 m from the depot. Every one of these is a scalar against a vector.",
      "objectives": [
        "Distinguish scalar from vector quantities and classify a given list correctly",
        "Calculate distance, displacement, average speed and average velocity for a stated journey",
        "Find the magnitude and direction of the resultant of two or more coplanar vectors",
        "Resolve a force into perpendicular components and use the components in a calculation",
        "Interpret displacement-time and velocity-time graphs, obtaining velocity from gradient and displacement from area"
      ],
      "sections": [
        {
          "title": "Scalars and Vectors: Distance, Displacement, Speed and Velocity",
          "content": "A scalar is fully described by a number and a unit. Mass, time, distance, speed, energy and work are scalars, and they obey ordinary arithmetic: 3 kg plus 4 kg is 7 kg always. A vector needs a direction as well as a size, and it does not obey that arithmetic. Walk 400 m east and then 300 m north and you have travelled 700 m of ground, but you are not 700 m from where you started; you are 500 m away in a straight line, because the two legs are at right angles and the direct route is the hypotenuse. That single example carries the whole distinction. Distance is the length of the real path and can never decrease as you move. Displacement is a one-way arrow from start position to finish position, and it can shrink, stay fixed or become zero; a trotro that leaves Circle, delivers passengers round a circuit and returns to Circle has covered many kilometres of distance with zero displacement. Speed is distance over time and velocity is displacement over time, so the average speed of that trotro is a real number while its average velocity for the round trip is zero. Acceleration, the rate of change of velocity, is a vector too, and its sign only means anything after you have chosen a positive direction. State that choice in your working every single time, because a candidate who writes minus 5 m s⁻² without saying which way is positive has left the marker to guess.",
          "bulletPoints": [
            "Scalars: distance, speed, time, mass, energy, work, temperature; they add arithmetically.",
            "Vectors: displacement, velocity, acceleration, force, momentum; they add by direction as well as size.",
            "Worked journey: 400 m east then 300 m north gives distance 700 m and displacement 500 m at 36.9° north of east, a bearing of 053°.",
            "Average speed = 700 m/100 s = 7.0 m s⁻¹ while average velocity = 500 m/100 s = 5.0 m s⁻¹ in the same journey.",
            "Acceleration a = (v - u)/t in m s⁻², and its sign is meaningless until a positive direction is declared."
          ],
          "keyTakeaway": "Quote a vector with its direction and a scalar with none, and never report a displacement by adding the legs of the path.",
          "realWorldExample": "An okada rider carrying a passenger from Madina to the Accra central business district may travel 11 km of road while the displacement shown on the passenger’s phone is only 8 km; the fare is calculated on the road, the delivery time estimate on the straight line."
        },
        {
          "title": "Adding Vectors: Triangle, Parallelogram and Perpendicular Cases",
          "content": "Vectors are combined geometrically before they are combined arithmetically. The triangle law says: draw the first vector to scale, then draw the second starting from the head of the first, and the closing line from the tail of the first to the head of the second is the resultant. The parallelogram law is the same rule for two vectors drawn from a common point: complete the parallelogram and the diagonal from that common point is the resultant. Both laws explain why two forces of 5 N and 7 N can produce any resultant between 2 N, when they oppose, and 12 N, when they agree, and nothing outside that range. When the angle is neither 0° nor 180°, use the cosine-rule form of the resultant, R² = F₁² + F₂² + 2F₁F₂ cos θ. For 5 N and 7 N at 60° this gives R² = 25 + 49 + 2(5)(7)(0.5) = 109, so R = 10.44 N. The direction follows from the components: tan α = (7 sin 60°)/(5 + 7 cos 60°) = 6.06/8.50, giving 35.5° from the 5 N force. The perpendicular case is the one WAEC prefers because Pythagoras does the work: 6 N at right angles to 8 N gives a 10 N resultant inclined at tan⁻¹(8/6) = 53.1° to the 6 N force. Three or more vectors are handled by resolving each on two axes, summing each axis, and recombining at the end; do not try to draw a five-sided polygon to scale when arithmetic is quicker and more exact.",
          "bulletPoints": [
            "Triangle law: head to tail, and the closing line from first tail to last head is the resultant.",
            "Parallelogram law: common tails, complete the figure, and the diagonal from the common tail is the resultant.",
            "General formula: \"R² = F₁² + F₂² + 2F₁F₂ cos θ\", so 5 N and 7 N at 60° give R = √109 = 10.44 N.",
            "Perpendicular case: \"R = √(6² + 8²) = 10 N\" at tan⁻¹(8/6) = 53.1° to the 6 N force.",
            "Range of possible resultants: between |F₁ - F₂| and F₁ + F₂, so 5 N and 7 N give 2 N to 12 N.",
            "For three or more vectors, resolve on two axes, add each axis separately, then recombine with Pythagoras."
          ],
          "keyTakeaway": "The resultant of two vectors is found by the cosine-rule expression and a direction, never by adding the two numbers unless the vectors point the same way.",
          "realWorldExample": "Two women hauling a loaded canoe up the beach at Ada use ropes that each make about 30° with the line of the keel; the forward pull that actually moves the canoe is the resultant of their two pulls and is smaller than the sum of their efforts, which is why a third hauler in front is better than a fourth on the side."
        },
        {
          "title": "Resolving a Force into Perpendicular Components",
          "content": "Resolution is the reverse of addition. A single force F acting at an angle θ to the horizontal is equivalent to two forces at right angles: F cos θ along the horizontal and F sin θ along the vertical. The rule for which trig function goes where is worth memorising once: the component that lies along the axis from which the angle was measured takes the cosine, because cos θ equals one when θ is zero and the whole force lies on that axis. Take 12 N inclined at 30° to the horizontal. The horizontal component is 12 cos 30° = 10.39 N, quoted as 10.4 N, and the vertical component is 12 sin 30° = 6.0 N. If you reverse the two you have implicitly used 60°, which is the complementary angle and a perfectly ordinary mistake to make twice in an examination if the diagram is not drawn. Resolution matters because motion is decided by components, not by the full force. A ploughman pulling a harrow with a rope at 35° to the ground is only partly moving it forward; the vertical part of his pull lifts the harrow and reduces the friction holding it. On an inclined plane the weight resolves into mg sin θ down the slope and mg cos θ normally into the surface, and that pair explains the whole mechanics of the slope. The practical discipline is to redraw the problem with the axes chosen to suit it, write the two component equations, and then put numbers in.",
          "bulletPoints": [
            "Horizontal component \"F cos θ\", vertical component \"F sin θ\" when θ is measured from the horizontal.",
            "Worked case: 12 N at 30° to the horizontal gives 10.4 N across and 6.0 N up.",
            "Components are independent: motion along one axis is unaffected by the component along the other.",
            "On a slope the weight resolves to \"mg sin θ\" down the plane and \"mg cos θ\" pressing into it.",
            "Draw the original force as the diagonal of a rectangle whose sides are the components, and label θ on the diagram.",
            "Check the reasonableness: the larger component must lie closer to the direction of the original force."
          ],
          "keyTakeaway": "Replace a slanted force by its two perpendicular components before writing any equation of motion, and take the cosine for the component nearest the force.",
          "realWorldExample": "A labourer at a building site in Kasoa drags a tray of mortar with a rope inclined at about 60° to the ground; most of his effort goes into lifting the tray rather than moving it along, which is why the site foreman keeps a short chain and pulls almost horizontally."
        },
        {
          "title": "Displacement-Time and Velocity-Time Graphs",
          "content": "Graphs record a motion and also encode its arithmetic. On a displacement-time graph the gradient is the velocity. A straight rising line is uniform velocity, a horizontal line is rest, a curved line is changing velocity, and a falling line is return motion past the origin into negative displacement. Read a gradient with two points well apart on the line, not with the eye: from 30 m at 4 s to 120 m at 10 s, the velocity is (120 - 30)/(10 - 4) = 90/6 = 15 m s⁻¹. On a velocity-time graph two facts must be kept apart and both are examinable: the gradient is the acceleration and the area under the graph is the displacement. Velocity dropping from 25 m s⁻¹ to 5 m s⁻¹ in 4 s gives (5 - 25)/4 = -5 m s⁻², a retardation of 5 m s⁻² along the chosen positive direction. Compound shapes are handled by cutting the area into triangles and rectangles. Consider a trotro leaving a station: it accelerates uniformly from rest to 20 m s⁻¹ in 10 s, runs at that speed for 30 s, then brakes to rest in a further 10 s. The areas are 1/2 x 10 x 20 = 100 m, then 30 x 20 = 600 m, then 1/2 x 10 x 20 = 100 m, so the total displacement is 800 m in 50 s and the average velocity is 800/50 = 16 m s⁻¹. Never divide the top speed by two to find an average unless the acceleration pattern is symmetric; a graph read honestly beats a memorised shortcut.",
          "bulletPoints": [
            "Displacement-time graph: gradient = velocity; horizontal section = body at rest.",
            "Worked gradient: from 30 m at 4 s to 120 m at 10 s gives 90/6 = 15 m s⁻¹.",
            "Velocity-time graph: gradient = acceleration, area = displacement, and both may be asked in one question.",
            "Worked gradient: 25 m s⁻¹ falling to 5 m s⁻¹ in 4 s gives -5 m s⁻², a retardation of 5 m s⁻².",
            "Worked area: 100 + 600 + 100 = 800 m over 50 s, so average velocity = 16 m s⁻¹.",
            "Use the equations v = u + at, s = ut + 1/2 at² and v² = u² + 2as only when the graph shows a straight line, that is uniform acceleration."
          ],
          "keyTakeaway": "Gradient gives the rate, area gives the total; on a velocity-time graph that means acceleration from the slope and displacement from the area.",
          "realWorldExample": "A Ghana High School project team logged a school bus on the Accra–Cape Coast road with a phone application, plotted the speed against time, and read from the area under the curve that the 45-minute stretch had covered about 38 km, matching the distance boards at the toll plaza."
        }
      ],
      "commonMistakes": [
        "Adding 5 N and 7 N to report a 12 N resultant when the two forces are not in the same line; the sum only applies when the angle between them is zero.",
        "Confusing distance with displacement, then reporting a 400 m east and 300 m north journey as a displacement of 700 m instead of 500 m.",
        "Quoting a velocity as \"20 m s⁻¹\" with no direction, which WAEC treats as an incomplete vector answer and marks down.",
        "Reading the gradient of a velocity-time graph as the displacement, or the area as the average velocity, and losing both marks in one line of working.",
        "Using the equations of uniformly accelerated motion on a graph section whose acceleration is changing, so the straight-line formula gives an answer inconsistent with the plotted curve.",
        "Mixing units inside one calculation, for instance a velocity in km h⁻¹, an acceleration in m s⁻² and a time in minutes, without converting every quantity first."
      ],
      "wassceExamTips": [
        "Paper 1 loves the pair \"which of the following is a vector quantity\". Test each option by asking whether the sentence is complete without a direction; if it needs one, it is a vector.",
        "In Paper 2 a vector question awards method marks for drawing the diagram and marking the angle, so sketch the triangle or parallelogram even when you can do the cosine rule in your head.",
        "For graph questions in Paper 2 or Paper 3, state which quantity is on each axis and what the gradient represents before computing, since the identification itself carries an M1 mark.",
        "When a question asks for both distance and displacement, give both and label them, because an unlabelled number can only be credited once.",
        "Take g as 10 m s⁻² in free-fall parts unless the paper says 9.8 m s⁻², and write the value you used on the script so the marker can follow your arithmetic.",
        "A Paper 3 alternative-practical question may hand you a table of time and displacement and ask for the graph; plot with a sharp pencil, use a smooth line of best fit, and take the gradient from a triangle drawn on the line, not from the raw data points."
      ],
      "summaryChecklist": [
        "Can I classify each quantity in this topic as scalar or vector without hesitation?",
        "Can I compute distance, displacement, average speed and average velocity for a bent journey?",
        "Can I find the magnitude and direction of the resultant of two forces at any angle?",
        "Can I resolve a slanted force into horizontal and vertical components and say which takes the cosine?",
        "Can I read velocity from the gradient of a displacement-time graph and displacement from the area of a velocity-time graph?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-vectors-1",
        "title": "Distance, Displacement and Average Velocity of a Courier",
        "problem": "A courier leaves the school gate, walks 400 m due east to the market, then turns and walks 300 m due north to the staff common room. The whole walk takes 100 s. Find the distance travelled, the displacement with its direction as a bearing, the average speed and the average velocity.",
        "stepByStepSolution": [
          "Step 1 (M1): Distance is the length of the actual path, so add the two legs as scalars: 400 m + 300 m.",
          "Step 2 (A1): Distance travelled = 700 m.",
          "Step 3 (M1): Displacement is the straight line from start to finish; the east and north legs are perpendicular, so apply Pythagoras: s = √(400² + 300²).",
          "Step 4 (A1): s = √(160000 + 90000) = √250000 = 500 m.",
          "Step 5 (M1): Direction from the east line: tan θ = north component/east component = 300/400 = 0.75.",
          "Step 6 (A1): θ = 36.9° north of east, which as a bearing from north is 090° - 36.9° = 053°.",
          "Step 7 (A1): Average speed = 700 m/100 s = 7.0 m s⁻¹, while average velocity = 500 m/100 s = 5.0 m s⁻¹ on a bearing of 053°."
        ],
        "keyTakeaway": "The same walk gives 700 m of road, 500 m of displacement on a bearing of 053°, an average speed of 7.0 m s⁻¹ and an average velocity of 5.0 m s⁻¹."
      },
      {
        "id": "ex-phy-vectors-2",
        "title": "Resultant of Two Forces Acting at 60 Degrees",
        "problem": "Two forces of magnitudes 5 N and 7 N act on a small ring at a point, the angle between their lines of action being 60°. Determine the magnitude of the resultant and its angle to the 5 N force. State the range of resultants these two forces could produce.",
        "stepByStepSolution": [
          "Step 1 (M1): Draw both vectors from the common point and complete the parallelogram; the diagonal from that point is the resultant R.",
          "Step 2 (M1): Use the parallelogram expression R² = F₁² + F₂² + 2 F₁ F₂ cos θ with θ = 60°.",
          "Step 3 (M1): Substitute: R² = 5² + 7² + 2(5)(7) cos 60° = 25 + 49 + 70(0.5).",
          "Step 4 (A1): R² = 109, so R = √109 = 10.44 N, that is 10.4 N to three significant figures.",
          "Step 5 (M1): For the direction, resolve along and perpendicular to the 5 N force: perpendicular component 7 sin 60° = 6.06 N, along component 5 + 7 cos 60° = 5 + 3.50 = 8.50 N.",
          "Step 6 (M1): tan α = 6.06/8.50.",
          "Step 7 (A1): α = 35.5°, so the resultant is 10.4 N at 35.5° to the 5 N force; the two forces alone could give any resultant from 2 N to 12 N, and 10.4 N lies inside that range, which confirms the working."
        ],
        "keyTakeaway": "Two forces of 5 N and 7 N at 60° produce a 10.4 N resultant at 35.5° to the smaller force, less than their arithmetic sum of 12 N."
      }
    ],
    "quiz": {
      "id": "quiz-phy-scalars-vectors-graphs",
      "topicId": "shs1-phy-t1-scalar-vector-motion-graphs",
      "title": "Scalars, Vectors and Motion Graphs Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-vectors-1",
          "quizId": "quiz-phy-scalars-vectors-graphs",
          "questionText": "Which pair contains two vector quantities?",
          "optionA": "Distance and speed",
          "optionB": "Time and mass",
          "optionC": "Displacement and velocity",
          "optionD": "Energy and acceleration",
          "correctOption": "C",
          "subConcept": "Scalar and vector classification",
          "explanation": "Displacement and velocity both require a direction to be fully stated, so they are a vector pair. Distance and speed, time and mass, and energy are scalars; acceleration is a vector, but it is paired with the scalar energy in option D, which makes that pair invalid.",
          "remediationTip": "Complete each quantity with a direction and see whether the sentence changes meaning; if it must have one, it is a vector."
        },
        {
          "id": "q-phy-vectors-2",
          "quizId": "quiz-phy-scalars-vectors-graphs",
          "questionText": "Two forces of 6 N and 8 N act at a point at right angles to each other. What is the magnitude of their resultant?",
          "optionA": "10 N",
          "optionB": "14 N",
          "optionC": "48 N",
          "optionD": "2 N",
          "correctOption": "A",
          "subConcept": "Perpendicular vector addition",
          "explanation": "For perpendicular forces the resultant is the hypotenuse: R = √(6² + 8²) = √100 = 10 N. Option B is the arithmetic sum, valid only when the forces share one line, C multiplies the two magnitudes, and D is their difference.",
          "remediationTip": "Sketch the two forces and the closing line, then apply Pythagoras before substituting into any formula."
        },
        {
          "id": "q-phy-vectors-3",
          "quizId": "quiz-phy-scalars-vectors-graphs",
          "questionText": "A force of 12 N acts at 30° to the horizontal. What is the magnitude of its horizontal component?",
          "optionA": "6.0 N",
          "optionB": "6.9 N",
          "optionC": "12.0 N",
          "optionD": "10.4 N",
          "correctOption": "D",
          "subConcept": "Resolution of forces",
          "explanation": "The component along the axis from which the angle is measured uses the cosine: 12 cos 30° = 10.39 N, that is 10.4 N. Option A is the vertical component 12 sin 30°, B comes from using the tangent, and C ignores the angle altogether.",
          "remediationTip": "Draw the rectangle with the force as diagonal and label the angle at the horizontal side, then read off the cosine side."
        },
        {
          "id": "q-phy-vectors-4",
          "quizId": "quiz-phy-scalars-vectors-graphs",
          "questionText": "On a displacement-time graph for a moving student, what does the gradient of the line represent?",
          "optionA": "The acceleration of the student",
          "optionB": "The velocity of the student",
          "optionC": "The total distance walked",
          "optionD": "The resultant force on the student",
          "correctOption": "B",
          "subConcept": "Displacement-time graphs",
          "explanation": "Gradient is change of displacement divided by change of time, which is velocity. A horizontal line therefore means rest. Acceleration is the gradient of a velocity-time graph, and distance is found from areas rather than from gradients.",
          "remediationTip": "Write the axes on every graph you meet, then say to yourself what one unit of rise over one unit of run means."
        },
        {
          "id": "q-phy-vectors-5",
          "quizId": "quiz-phy-scalars-vectors-graphs",
          "questionText": "A trotro starts from rest, accelerates uniformly to 20 m s⁻¹ in 10 s, keeps that speed for 30 s and then brakes to rest in a further 10 s. How far does it travel in the whole 50 s?",
          "optionA": "400 m",
          "optionB": "700 m",
          "optionC": "800 m",
          "optionD": "1000 m",
          "correctOption": "C",
          "subConcept": "Area under a velocity-time graph",
          "explanation": "The graph is a trapezium built from two triangles and a rectangle: 1/2 x 10 x 20 = 100 m, then 30 x 20 = 600 m, then 1/2 x 10 x 20 = 100 m, giving 800 m. Option D ignores the two triangular ends, while A and B come from taking only part of the area.",
          "remediationTip": "Cut every velocity-time shape into triangles and rectangles, find each area, and add; then check that the total is less than maximum speed multiplied by total time."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t1-kinetic-theory-states-of-matter",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 7,
    "title": "Kinetic Theory, States of Matter and Intermolecular Forces",
    "description": "The particle model applied to solids, liquids and gases, how intermolecular forces and thermal motion combine to fix each state, the evidence for real particle motion from diffusion and Brownian motion, why evaporation differs from boiling, how gas pressure arises from billions of collisions, and what melting, boiling and expansion on heating mean at the particle level.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Matter is made of tiny particles that are always moving; the state of a substance is a balance between the kinetic energy of the particles and the intermolecular forces trying to hold them together.\n• In a solid the particles are packed in a regular pattern and only vibrate about fixed positions, so a solid keeps its shape and volume and is hard to compress.\n• In a liquid the particles are close but disordered and can slide over one another, so a liquid takes the shape of its container while keeping a fixed volume.\n• In a gas the particles are far apart and move fast in straight lines between collisions, so a gas fills any container and is easily compressed.\n• Diffusion is the net mixing of particles from high to low concentration; it is faster in gases than liquids and faster at higher temperature.\n• Brownian motion, the jittery path of smoke or pollen grains seen under a microscope, is direct visible proof that the surrounding fluid particles are moving and hitting it.\n• Gas pressure is the average force per unit area from many molecular collisions with the wall; heating a fixed volume raises the speed, the collision rate and so the pressure.\n• Evaporation happens only at the surface, at any temperature, and cools the liquid because the fastest escaping particles take energy with them; boiling happens throughout the liquid at one fixed temperature where the vapour pressure equals the outside pressure.\n• During a change of state the supplied energy breaks intermolecular bonds instead of raising temperature, so the temperature stays constant while melting or boiling continues.\n• Heating usually makes a substance expand because the particles vibrate further apart; water between 0 C and 4 C is the well known exception.",
    "detailedNotes": {
      "overview": "This topic builds the particle picture that every later branch of physics leans on. Students move from the visible world of solids, liquids and gases down to an invisible model of moving particles held together by intermolecular forces, and they learn to explain real observations, a smell crossing a room, a drop of ink spreading, pressure rising in a sealed can, the cooling of sweat, the fixed boiling temperature of water, using that single model. The emphasis is on evidence and on the difference between temperature, which measures the average kinetic energy of the particles, and internal energy, which includes the particle potential energy that changes during a state change.",
      "introduction": "Start with what the class can see. Place a beaker of water on a stand and drop one crystal of potassium manganate into it, leave it undisturbed and watch the purple spread without any stirring, then ask what pushed it. Pass round a sealed empty plastic bottle that has been taken from a fridge and let students feel it crumple as the trapped air warms and cools. Sketch the three particle arrangements on the board side by side and have students act them out, standing shoulder to shoulder and only shaking for a solid, drifting past each other for a liquid, and moving across the whole yard for a gas. Keep returning to the one question: are these arrangements a model, or is there real evidence, and how do we know.",
      "realWorldContext": "The particle model runs through daily Ghanaian life. The aroma of roasting yam or groundnut at a Circle lorry station diffuses through the crowd; a cook knows that covering a pot of light soup raises the pressure and the boiling point so the food softens faster; sweat cooling the body on a humid afternoon in Takoradi is evaporation slowed because the air already holds much water vapour. A trotro mechanic who pours hot water into a cold radiator knows expansion and stress, and a sachet-water plant at Awaso watches a sealed bag of pure water bulge in the midday heat as the vapour pressure climbs. Even the GSSE laboratory store dries glassware because evaporation carries heat away.",
      "objectives": [
        "Describe the arrangement, motion and spacing of particles in solids, liquids and gases and link these to shape, volume and compressibility",
        "Use diffusion and Brownian motion as evidence that particles are in constant random motion and explain how temperature changes the rate",
        "Distinguish evaporation from boiling and explain why temperature stays constant during melting or boiling",
        "Explain gas pressure in terms of molecular collisions and describe why most substances expand on heating"
      ],
      "sections": [
        {
          "title": "The Particle Model and the Three States of Matter",
          "content": "Everything you call a solid, a liquid or a gas is the same kind of stuff built from particles, and the only real difference is how much freedom those particles have. In a solid the intermolecular forces are strong enough to lock each particle into a fixed position, usually in a neat repeating pattern called a lattice, so the particle can only vibrate about that spot. This is why a solid keeps its own shape, keeps its own volume, resists being squashed, and needs a good push to change its form. In a liquid the particles still attract one another strongly enough to stay in contact, so a liquid is almost incompressible and keeps a fixed volume, but the forces no longer pin each particle in place, so they roll and slide over one another and the liquid flows to fill the bottom of any vessel. In a gas the particles move so fast that the attraction between them is negligible except during a collision; they fly in straight lines and spread out until they fill the whole container, which is why a gas has no fixed shape or volume and is easy to compress into a smaller space. The single idea that orders all three is competition between thermal energy, which tries to pull particles apart and keep them moving, and intermolecular force, which tries to bind them together and slow them down.",
          "bulletPoints": [
            "Solid: particles in a regular pattern, only vibrating, strong forces; fixed shape and volume, not compressible.",
            "Liquid: particles close but disordered, able to slide past one another; fixed volume, takes the shape of the container.",
            "Gas: particles far apart moving fast in straight lines; no fixed shape or volume, easily compressed.",
            "The state depends on the contest between particle kinetic energy and the strength of the intermolecular forces.",
            "Temperature measures the average kinetic energy of the particles, not the total energy of the sample."
          ],
          "keyTakeaway": "A substance is solid, liquid or gas according to whether intermolecular forces or thermal motion is winning, and that one idea explains shape, volume and compressibility together.",
          "realWorldExample": "A block of ice from the Makola cold store holds the shape of its mould because the water molecules are locked in a lattice, but the moment it melts the same molecules slide freely and take the shape of the bowl they are dropped into."
        },
        {
          "title": "Evidence from Diffusion and Brownian Motion",
          "content": "The particle model would be only a story if we could not see its effects, and two observations give that evidence. Diffusion is the slow spreading and mixing of one substance into another caused by the random motion of the particles, moving from where they are crowded to where they are few until they are evenly spread. A drop of ink in still water colours the whole beaker over time with no stirring, the smell of cooking crosses a house, and these happen because both the ink and the water particles are moving and bumping into each other. Diffusion is quickest in gases, where particles travel far between collisions, slower in liquids, and almost absent in solids; it also speeds up when temperature rises, because hotter particles move faster. Brownian motion makes the invisible visible. Under a microscope, tiny smoke particles suspended in air, or pollen grains on water, do not sit still but jerk about in a broken zig-zag. Nothing is touching them that we can see; the jerks are the unbalanced hits of millions of faster, unseen air or water molecules striking the visible grain from all sides. Because the grain is so small, the bombardment is uneven moment to moment and it lurches. Robert Brown first noted it and Einstein later showed the size of the lurch reveals the size of the atoms, which is why Brownian motion is the classroom demonstration that particles really exist and really move.",
          "bulletPoints": [
            "Diffusion is net movement of particles from a region of high concentration to low concentration due to random motion.",
            "Diffusion is fastest in gases, slower in liquids, and very slow in solids; heat makes it faster.",
            "Brownian motion is the irregular zig-zag of a visible particle caused by uneven hits from unseen fluid molecules.",
            "Brownian motion is the key direct evidence that matter is made of moving particles.",
            "Perfume or cooking smell crossing a room is diffusion of gas particles through still air."
          ],
          "keyTakeaway": "Diffusion shows mixing without stirring and Brownian motion shows visible grains being shoved by invisible molecules; together they are the experimental proof of the kinetic model.",
          "realWorldExample": "A student sitting far from the food stall at a Cape Coast school still catches the smell of boiling egg long before the vendor calls, because hot vapour particles diffuse rapidly through the air toward the class."
        },
        {
          "title": "Evaporation, Boiling, Change of State and Gas Pressure",
          "content": "Particles in a liquid do not all move at the same speed; there is a spread from slow to fast. At the surface, a few of the fastest can overcome the attractive pull of their neighbours and escape into the air as vapour, and this surface-only loss is evaporation. It happens at any temperature, and it cools what is left, because the particles that escape are the high-energy ones, so the average energy, and therefore the temperature, of the remaining liquid falls. That is why sweat cools the skin and why water in an open clay pot stays cool. Boiling is different: when the liquid is heated until its vapour pressure equals the pressure pushing on the surface, bubbles of vapour can form inside the body of the liquid and rise, so boiling happens throughout, not only at the top, and it happens at one fixed temperature for a given outside pressure, 100 C for water at normal atmospheric pressure. During both melting and boiling the temperature stops rising even though heating continues, because the incoming energy is now spent loosening or breaking intermolecular bonds rather than increasing kinetic energy; this hidden energy is the latent heat. The same particle picture explains gas pressure. Countless molecules strike the walls of a container and each collision gives a tiny push; the combined effect over the wall area is the pressure. Warm the sealed gas and the molecules move faster and hit harder and more often, so the pressure rises; squeeze it into a smaller volume and the collisions per second increase, so the pressure also rises, which is the story taken up formally in the next topic on Boyle law.",
          "bulletPoints": [
            "Evaporation is surface loss of the fastest particles, occurs at any temperature, and cools the liquid left behind.",
            "Boiling forms vapour bubbles inside the liquid and happens at one fixed temperature where vapour pressure equals outside pressure.",
            "Temperature stays constant during melting and boiling because energy breaks intermolecular bonds (latent heat).",
            "Gas pressure is the force per unit area from many molecular collisions with the container wall.",
            "Heating or compressing a trapped gas raises its pressure by increasing collision speed or collision rate.",
            "Water expands between 0 C and 4 C instead of contracting, the anomalous behaviour that bursts some pipes and floats ice."
          ],
          "keyTakeaway": "Evaporation cools because fast particles leave, boiling needs bubbles to survive against the outside pressure, and gas pressure is nothing mysterious but the summed push of molecular collisions.",
          "realWorldExample": "A woman selling cold water in Tamale wraps her bottle in a wet guinea cloth; water evaporating from the damp cloth carries heat away and keeps the drink cool long after the fridge power has failed."
        }
      ],
      "commonMistakes": [
        "Saying that the particles themselves expand when a substance is heated; it is the spacing between particles that grows, the particles keep their own size.",
        "Claiming that temperature rises during boiling; during a change of state the thermometer reading is steady while the added heat goes into latent energy.",
        "Confusing evaporation with boiling by describing evaporation as happening throughout the liquid; evaporation is a surface process that works at any temperature.",
        "Explaining Brownian motion as the movement of the molecules rather than the visible grain being struck by molecules, which reverses what is observed."
      ],
      "wassceExamTips": [
        "In Paper 1 objective items on states of matter, eliminate by checking one property at a time: fixed shape, fixed volume, compressible; a gas fails fixed shape and fixed volume, so the two-fail rule settles it fast.",
        "In Paper 2 a question on why evaporation cools a liquid wants the particle-energy argument, that escaping particles are the fastest, so the average kinetic energy of what remains falls; write that chain of reasoning, not just the words cooling happens.",
        "When asked to draw particle arrangements, show solid as a regular packed grid, liquid as disordered but touching, and gas as few particles with large gaps and motion arrows; marks are given for spacing and order, not for artistic skill.",
        "In Paper 3 alternative practical, if a passage heats a liquid and records temperature against time, expect to identify the flat plateau as the boiling point and to state that a higher plateau means a higher outside pressure."
      ],
      "summaryChecklist": [
        "Can I draw and describe the particle arrangement and motion in a solid, a liquid and a gas?",
        "Can I explain diffusion and Brownian motion and say what each proves about particles?",
        "Can I state two differences between evaporation and boiling and say why evaporation cools a liquid?",
        "Can I explain why the temperature is constant during melting or boiling?",
        "Can I relate gas pressure to molecular collisions and predict the effect of heating or compressing a trapped gas?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-kinetic-theory-1",
        "title": "Absolute Temperature and the Average Kinetic Energy of a Gas",
        "problem": "A fixed mass of gas in a sealed rigid flask is warmed from 27 C to 127 C. Using T in kelvin where T = theta in C plus 273, express each temperature in kelvin and find the factor by which the average kinetic energy of the molecules increases, given that average kinetic energy is directly proportional to absolute temperature.",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the initial temperature to kelvin, T1 = 27 + 273 = 300 K.",
          "Step 2 (M1): Convert the final temperature to kelvin, T2 = 127 + 273 = 400 K.",
          "Step 3 (M1): Average kinetic energy is proportional to absolute temperature, so the factor of increase is T2 / T1 = 400 / 300.",
          "Step 4 (A1): The average kinetic energy increases by a factor of 4/3, that is about 1.33.",
          "Step 5 (M1): Note that using the Celsius values would wrongly suggest a factor of 127/27, so all kinetic-theory ratios must be taken in kelvin."
        ],
        "keyTakeaway": "Doubling Celsius degrees does not double the energy; only the kelvin scale shows that 300 K to 400 K raises the average kinetic energy by a factor of about 1.33."
      },
      {
        "id": "ex-phy-kinetic-theory-2",
        "title": "Expansion on Heating a Metal Pipe",
        "problem": "A copper water pipe 20 m long lies in the sun and warms from 20 C to 70 C. The linear expansivity of copper is given as 1.7 x 10 to the power of -5 per C. Find the change in length of the pipe and state whether the particles of the copper have grown in size.",
        "stepByStepSolution": [
          "Step 1 (M1): Change in length is given by dL = alpha x L x dTheta, where alpha = 1.7 x 10^-5 per C, L = 20 m and dTheta = 70 - 20 = 50 C.",
          "Step 2 (A1): dL = 1.7 x 10^-5 x 20 x 50 = 0.017 m, that is 1.7 cm.",
          "Step 3 (M1): Interpret the result: the pipe lengthens by 1.7 cm because heating makes the copper particles vibrate with larger amplitude and push slightly further apart.",
          "Step 4 (A1): The copper particles themselves do NOT grow in size; only the average spacing between them increases."
        ],
        "keyTakeaway": "A 20 m copper pipe warmed by 50 C lengthens by 1.7 cm through greater particle spacing, not by any particle getting bigger."
      }
    ],
    "quiz": {
      "id": "quiz-phy-kinetic-theory-states-of-matter",
      "topicId": "shs1-phy-t1-kinetic-theory-states-of-matter",
      "title": "Kinetic Theory and States of Matter Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-kinetic-theory-states-of-matter-1",
          "quizId": "quiz-phy-kinetic-theory-states-of-matter",
          "questionText": "Which statement correctly describes the arrangement and motion of particles in a gas?",
          "optionA": "They are packed in a regular pattern and only vibrate in place.",
          "optionB": "They are close together but slide slowly over one another.",
          "optionC": "They are far apart and move fast in straight lines between collisions.",
          "optionD": "They are locked in fixed positions and cannot be compressed.",
          "correctOption": "C",
          "subConcept": "Particle model of states",
          "explanation": "In a gas the intermolecular forces are negligible between collisions, so the particles are widely separated and travel rapidly in straight lines until they hit another particle or the wall. Option A describes a solid, B describes a liquid, and D combines a solid feature with the wrong compressibility claim.",
          "remediationTip": "Match each option to a single property: does it have fixed shape, fixed volume, or free spacing; a gas fails both fixed properties."
        },
        {
          "id": "q-phy-kinetic-theory-states-of-matter-2",
          "quizId": "quiz-phy-kinetic-theory-states-of-matter",
          "questionText": "A perfume bottle is opened at one end of a cool room and the smell is soon detected at the other end. Which process and factor best explain this?",
          "optionA": "Brownian motion of the liquid perfume droplets falling to the floor.",
          "optionB": "Diffusion of perfume vapour particles through the air, which is faster at higher temperature.",
          "optionC": "Convection only, because diffusion cannot happen in a still room.",
          "optionD": "Evaporation of the glass of the bottle into the air.",
          "correctOption": "B",
          "subConcept": "Diffusion evidence",
          "explanation": "The smell travels because high-speed perfume vapour particles move randomly and spread from where they are crowded to where they are few, which is diffusion, and it is quicker when warmer. Brownian motion refers to visible grains being jerked by molecules, not the travel of the smell itself, and evaporation is a cooling surface process of the liquid.",
          "remediationTip": "Remember diffusion equals mixing without stirring; if nothing stirred the fluid and the colour or smell still spread, call it diffusion."
        },
        {
          "id": "q-phy-kinetic-theory-states-of-matter-3",
          "quizId": "quiz-phy-kinetic-theory-states-of-matter",
          "questionText": "Why does evaporation lower the temperature of the liquid that is left behind?",
          "optionA": "The liquid gains heat from the surroundings as it dries.",
          "optionB": "The slowest particles sink and cool the bottom of the container.",
          "optionC": "The fastest particles escape as vapour, so the average kinetic energy of the remaining liquid falls.",
          "optionD": "Evaporation always happens at the boiling point of the liquid.",
          "correctOption": "C",
          "subConcept": "Evaporation cooling",
          "explanation": "The particles energetic enough to break free are the fastest ones; once they leave, the average kinetic energy of those still in the liquid is lower, and lower average kinetic energy means a lower temperature. Evaporation works at any temperature, not only at the boiling point, and it removes rather than gains energy.",
          "remediationTip": "Link the words directly: fastest escape, average drops, temperature falls; recite that three-step chain on every cooling question."
        },
        {
          "id": "q-phy-kinetic-theory-states-of-matter-4",
          "quizId": "quiz-phy-kinetic-theory-states-of-matter",
          "questionText": "During the boiling of pure water at constant pressure, the thermometer reading remains steady even though heating continues. The energy supplied is being used to",
          "optionA": "increase the average speed of the molecules.",
          "optionB": "raise the temperature of the container only.",
          "optionC": "compress the water vapour above the surface.",
          "optionD": "break intermolecular bonds, increasing latent energy rather than kinetic energy.",
          "correctOption": "D",
          "subConcept": "Change of state and latent heat",
          "explanation": "At boiling the added heat goes into separating molecules against the attractive forces, which raises internal potential energy (latent heat) while temperature and average kinetic energy stay constant. Only after all the liquid has vaporised will further heating raise the temperature again.",
          "remediationTip": "On any state-change question decide first if the temperature is rising (kinetic energy up) or flat (latent energy up); a flat reading always means bond loosening."
        },
        {
          "id": "q-phy-kinetic-theory-states-of-matter-5",
          "quizId": "quiz-phy-kinetic-theory-states-of-matter",
          "questionText": "Gas pressure in a sealed rigid container increases when the gas is warmed. The kinetic-theory reason is that the molecules",
          "optionA": "expand in size and press harder on the wall.",
          "optionB": "move faster, so they collide with the wall more often and with greater force.",
          "optionC": "are pushed closer together into fewer collisions.",
          "optionD": "change into a liquid that squeezes the container.",
          "correctOption": "B",
          "subConcept": "Origin of gas pressure",
          "explanation": "Pressure is the summed force per unit area of molecular collisions with the wall. Warming raises the average speed, so molecules strike the wall both more frequently and more forcefully, and since the volume is fixed the pressure climbs. Molecules do not expand in size, and a fixed rigid container does not reduce their number.",
          "remediationTip": "When asked for a reason for higher pressure, name both collision effects: harder hits and more hits per second."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t1-density-relative-density-archimedes",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 8,
    "title": "Density, Relative Density and Archimedes in Practice",
    "description": "Density as mass per unit volume with its common units, how to find the volume and hence the density of an irregular solid by water displacement, relative density as a pure ratio and the hydrometer that reads it directly, the law of floating and the load lines that keep ships safe, and the real Ghanaian uses of density from grading cocoa and rice to testing palm oil and battery acid.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Density is mass per unit volume, p = m / V; the SI unit is kg/m3, but g/cm3 is easier in the school laboratory.\n• The conversion to memorise is 1 g/cm3 = 1000 kg/m3, because 1 cm3 of water is 1 g and 1 m3 of water is 1000 kg.\n• Water has a density of about 1000 kg/m3 (1.0 g/cm3), which is why relative density is numerically almost the same as density in g/cm3.\n• The volume of an irregular solid is found by displacement: note the initial water level in a measuring cylinder, submerge the object, and the rise equals its volume.\n• Relative density (specific gravity) is the ratio density of substance / density of water; it has no unit because equal units cancel.\n• A hydrometer is a weighted tube that floats deeper in a light liquid and higher in a dense liquid, so the stem reading is the relative density.\n• Archimedes principle: a body wholly or partly immersed in a fluid is buoyed up by a force equal to the weight of the fluid it displaces.\n• Upthrust = weight in air minus weight in the fluid, so a body seems to lose weight in water by exactly the weight of the water pushed aside.\n• Law of floating: a floating body displaces its own weight of fluid, so relative density = submerged volume / total volume for a floating object.\n• Ships carry load lines (Plimsoll marks) because a dense seawater gives more upthrust than light river water, so the safe waterline moves.\n• Density is used to grade produce: good cocoa beans and milled rice sink in a brine or water of set density while hollow or broken ones float off.",
    "detailedNotes": {
      "overview": "Density turns the vague words heavy and light into a measurable number that identifies a material no matter how big the sample is. This topic sets up the definition p = m / V and its units, then teaches the two laboratory routes to a density: direct measurement for a regular solid and water displacement for an irregular one. From there it moves to relative density, the unit-free ratio against water that makes comparison easy and that a hydrometer reads straight off a floating stem. The middle of the topic is Archimedes principle, the upthrust a fluid gives to anything in it, which explains why ships float, why objects seem lighter in water, and how load lines keep loaded vessels safe. The final movement applies density and floating to Ghanaian practice, from grading cocoa and rice to testing the strength of palm oil and a car battery.",
      "introduction": "Give each group a measuring cylinder, some water, a beam balance and an unknown stone or metal piece. Have them weigh it, note the water level, lower the object on a thread, and read the rise to get the volume, then divide to get a density and match the metal to a printed list. Next float a hydrometer in water, then in strong salt solution from the kitchen, and let students read the falling and rising stem. Finish with the classic upthrust demonstration: hang the stone from a spring balance in air, then submerge it and watch the reading drop by the weight of the displaced water. The whole lesson is one idea, that fluids push up and materials sort by density.",
      "realWorldContext": "Density decides money and safety across Ghana. At a cocoa purchasing centre in Sunyani the buyer pours beans into water and skims off the floaters, weevil-damaged or hollow beans, because sound beans are denser and sink; a rice mill in Aveyim uses the same trick on brine of set relative density to grade grains. The driver of a trotro topping up a dead battery reads the charge with a hydrometer in each cell, since a weak battery holds watery acid of low density. On the coast at Tema and Takoradi the harbour master checks the Plimsoll mark on a laden vessel, knowing fresh river water near the Volta mouth gives less upthrust than open seawater and so changes how deep the ship sits. Sachet-water plants test fill volume against mass to confirm the density of their product.",
      "objectives": [
        "Define density, state the formula p = m / V, and convert answers between kg/m3 and g/cm3",
        "Determine the density of an irregular solid by measuring its mass and its volume by water displacement",
        "Define relative density as a unit-free ratio and explain how a hydrometer uses the law of floating to read it",
        "State Archimedes principle and use upthrust and the law of floating to solve simple problems"
      ],
      "sections": [
        {
          "title": "Density and How to Measure It",
          "content": "Density tells how much mass is packed into each unit of volume, and it is written as rho, p, equals mass divided by volume, p = m / V. Mass is usually in kilograms or grams and volume in cubic metres or cubic centimetres, so density is quoted in kg/m3 or in g/cm3, and the two are tied by the single fact that 1 cm3 of water weighs 1 g while 1 m3 of water weighs 1000 kg, giving 1 g/cm3 = 1000 kg/m3. A student who forgets that factor of a thousand will report the density of a metal as 2.7 instead of 2700 kg/m3, so always state the unit with the number. For a regular object the volume comes from its dimensions, length times width times height for a block or the radius of a sphere. For an irregular solid, the shape gives no formula, and here water displacement shines. Fill a measuring cylinder partly with water and read the level, then tie the object to a thin thread and lower it fully beneath the surface without splashing; the new level minus the old level is the volume of the object, because the submerged object has pushed aside exactly its own volume of water. With the mass from the balance and this displaced volume, p = m / V gives the density directly. The object must sink and must not dissolve, and the thread must be thin, or the reading is wrong by the trapped air or the added thread volume.",
          "bulletPoints": [
            "Density p = m / V; SI unit kg/m3, laboratory unit g/cm3; conversion 1 g/cm3 = 1000 kg/m3.",
            "Water has density 1000 kg/m3 (1.0 g/cm3), the reference for relative density.",
            "Regular solid: get volume from its measured dimensions.",
            "Irregular solid: volume = final water level minus initial water level in a measuring cylinder (displacement).",
            "The object must sink fully, not dissolve, and must carry no trapped air bubbles, for the displacement volume to be correct."
          ],
          "keyTakeaway": "Density identifies a substance from its mass and volume alone, and displacement turns an awkward shape into a readable volume so that p = m / V can be applied to anything that sinks.",
          "realWorldExample": "A student at a Kumasi laboratory finds a stone of mass 156 g raises the water level in a cylinder from 40 cm3 to 65 cm3, so its volume is 25 cm3 and its density is 156 / 25 = 6.24 g/cm3, close to a common iron-bearing rock."
        },
        {
          "title": "Relative Density and the Hydrometer",
          "content": "Comparing a substance with water is often more useful than quoting a density with units, and that comparison is relative density, defined as the density of the substance divided by the density of water. Because it is a ratio of two densities in the same units, the units cancel and relative density is a pure number with no unit. The practical definition uses equal volumes: relative density is the mass of a certain volume of the substance divided by the mass of an equal volume of water. Numerically it is almost the same as the density expressed in g/cm3, since water is 1.0 g/cm3, so a liquid of density 0.8 g/cm3 has relative density 0.8. A hydrometer reads relative density without any balance at all. It is a glass tube with a weighted bulb at the bottom so it floats upright, and a long narrow marked stem. When it is placed in a liquid it sinks until the weight of the liquid it displaces equals its own fixed weight, the law of floating. In a dense liquid a small displaced volume already balances its weight, so it rides high and the reading near the bottom of the stem shows a high relative density; in a light liquid it must push aside more liquid, so it sinks deeper and reads lower. The scale is therefore higher at the bottom and lower at the top, a point that trips many candidates. Hydrometers test battery acid, the strength of syrup or palm oil, and the alcohol or water content of many products.",
          "bulletPoints": [
            "Relative density = density of substance / density of water; it is a ratio and has NO unit.",
            "Equal-volume form: relative density = mass of a volume of substance / mass of the same volume of water.",
            "Relative density is numerically about the same as density expressed in g/cm3, since water is 1.0 g/cm3.",
            "A hydrometer floats by the law of floating; it rides high in a dense liquid and low in a light liquid.",
            "The hydrometer scale increases downward, so a deeper float means a smaller relative density."
          ],
          "keyTakeaway": "Relative density is a unit-free comparison with water, and a hydrometer converts it into a direct reading by floating deeper in lighter liquids and shallower in denser ones.",
          "realWorldExample": "A mechanic at Suame Magazine checks a car battery with a hydrometer; the acid reading near 1.27 tells him the cell is fully charged, while a reading near 1.10 shows the acid has become watery and the battery is flat."
        },
        {
          "title": "Archimedes, Upthrust and the Law of Floating",
          "content": "Archimedes principle states that a body wholly or partly immersed in a fluid experiences an upward force, the upthrust, equal to the weight of the fluid it displaces. This is why an object feels lighter under water. Hang a stone from a spring balance and read its weight in air, then dip it into water; the balance now reads less, and the loss, weight in air minus the apparent weight in water, is exactly the upthrust, which equals the weight of the water pushed aside. That relation gives a neat route to relative density: relative density of the solid = weight in air / loss of weight in water, because both refer to the same volume of material and of water. Whether a body rises or sinks is settled by comparing densities, or equivalently by comparing the upthrust with the weight. If the material is denser than the fluid the weight wins and it sinks; if less dense it rises. A floating body is in perfect balance, so it displaces a weight of fluid equal to its own weight; this is the law of floating. For such a body the fraction of its volume under water equals its relative density, so a block of relative density 0.6 floats with 60 percent submerged. Ships exploit this: a hull loaded with cargo must push aside much more water to balance the greater weight, so it sits deeper. Because seawater is denser than fresh river water, the same ship floats higher in the sea and lower in a river, and so a load line, the Plimsoll mark, is painted on the hull with separate marks for summer, winter and tropical seawater and for fresh water, telling the captain how deep he may safely load in each.",
          "bulletPoints": [
            "Archimedes principle: upthrust equals the weight of the fluid displaced by the body.",
            "Upthrust = weight in air minus apparent weight in the fluid.",
            "Relative density of a solid = weight in air / loss of weight in water.",
            "Law of floating: a floating body displaces its own weight of fluid.",
            "Fraction submerged for a floating body equals its relative density; seawater is denser so a ship floats higher there.",
            "Load lines give different safe waterlines for seawater and fresh water because the upthrust differs."
          ],
          "keyTakeaway": "Fluids push up by the weight they are made to move out of the way, objects float when that push equals their weight, and the different density of sea and river water is why ships carry graded load lines.",
          "realWorldExample": "A barge carrying sand down the Volta near the Adomi bridge sits lower in the fresh river than the same barge would in the salty sea off Tema, so the master respects the freshwater mark to avoid loading the hull too deep."
        }
      ],
      "commonMistakes": [
        "Giving density without a unit, or mixing g/cm3 and kg/m3 without the factor of 1000, so a metal is reported as 2.7 kg/m3 when it should be 2700 kg/m3.",
        "Putting a unit on relative density; it is a ratio of two equal-unit densities and cancels, so any newton or kilogram left on it is wrong.",
        "Measuring displacement volume but leaving air bubbles on the submerged object or using a thick thread, which makes the volume and therefore the density too large.",
        "Forgetting to subtract and reporting the apparent weight in water as the upthrust; upthrust is weight in air minus weight in the fluid, the loss of weight, not either reading taken alone."
      ],
      "wassceExamTips": [
        "In Paper 1, when asked to sort kg/m3 and g/cm3 options, remember water at 1000 kg/m3 = 1 g/cm3 and use that single anchor to convert any option rather than memorising many values.",
        "In Paper 2 an irregular-solid density question is marked on method: show the two cylinder readings, the subtraction for volume, then p = m / V with the unit; a bare answer with no displacement step loses the method mark.",
        "For upthrust questions write the relation loss of weight = upthrust = weight of displaced fluid explicitly, then substitute, because examiners award a method mark for stating Archimedes principle correctly.",
        "In Paper 3 alternative practical, a hydrometer or a floating test may appear; know that the scale rises downward and that a deeper float means a less dense liquid."
      ],
      "summaryChecklist": [
        "Can I state density p = m / V and convert between g/cm3 and kg/m3 using the factor 1000?",
        "Can I find the volume and density of an irregular solid by water displacement?",
        "Can I define relative density and explain why it has no unit and how a hydrometer reads it?",
        "Can I state Archimedes principle and compute upthrust from weights in air and in water?",
        "Can I apply the law of floating to explain why a ship sits deeper in fresh water than in seawater?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-density-relative-archimedes-1",
        "title": "Density of an Irregular Stone by Displacement",
        "problem": "A small stone that will not fit a ruler is balanced and found to have a mass of 156 g. A measuring cylinder partly filled with water reads 40 cm3 before the stone is lowered in on a thin thread and 65 cm3 after it is fully submerged with no trapped air. Find the volume of the stone, its density in g/cm3, and the same density in kg/m3.",
        "stepByStepSolution": [
          "Step 1 (M1): Volume by displacement = final level - initial level = 65 cm3 - 40 cm3.",
          "Step 2 (A1): Volume of the stone = 25 cm3.",
          "Step 3 (M1): Density p = mass / volume = 156 g / 25 cm3.",
          "Step 4 (A1): Density = 6.24 g/cm3.",
          "Step 5 (M1): Convert to SI using 1 g/cm3 = 1000 kg/m3, so p = 6.24 x 1000.",
          "Step 6 (A1): Density = 6240 kg/m3."
        ],
        "keyTakeaway": "Displacement turns an odd shape into a volume of 25 cm3, giving a density of 6.24 g/cm3 or 6240 kg/m3 once the factor of 1000 is applied."
      },
      {
        "id": "ex-phy-density-relative-archimedes-2",
        "title": "Relative Density and Upthrust from Weighing in Water",
        "problem": "A stone hung from a spring balance reads 0.50 N in air and 0.30 N when fully immersed in water. Taking g = 10 N/kg, find the upthrust on the stone, its relative density, and the density of the stone in g/cm3.",
        "stepByStepSolution": [
          "Step 1 (M1): Upthrust = weight in air - apparent weight in water = 0.50 N - 0.30 N.",
          "Step 2 (A1): Upthrust = 0.20 N, which equals the weight of the water displaced.",
          "Step 3 (M1): Relative density of the solid = weight in air / loss of weight in water = 0.50 / 0.20.",
          "Step 4 (A1): Relative density = 2.5, and this is a pure number with no unit.",
          "Step 5 (M1): The displaced water has weight 0.20 N, so its mass = 0.20 / 10 = 0.020 kg = 20 g, and since water is 1 g/cm3 the stone volume = 20 cm3.",
          "Step 6 (M1): The stone mass = weight in air / g = 0.50 / 10 = 0.050 kg = 50 g.",
          "Step 7 (A1): Density of stone = mass / volume = 50 g / 20 cm3 = 2.5 g/cm3, matching the relative density of 2.5."
        ],
        "keyTakeaway": "The stone loses 0.20 N in water, so its relative density is 2.5 and its density is 2.5 g/cm3; the loss of weight, not the water reading, is the upthrust."
      }
    ],
    "quiz": {
      "id": "quiz-phy-density-relative-density-archimedes",
      "topicId": "shs1-phy-t1-density-relative-density-archimedes",
      "title": "Density, Relative Density and Archimedes Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-density-relative-density-archimedes-1",
          "quizId": "quiz-phy-density-relative-density-archimedes",
          "questionText": "A liquid has a density of 800 kg/m3. What is its density in g/cm3?",
          "optionA": "0.8 g/cm3",
          "optionB": "8.0 g/cm3",
          "optionC": "80 g/cm3",
          "optionD": "800 g/cm3",
          "correctOption": "A",
          "subConcept": "Density unit conversion",
          "explanation": "Since 1 g/cm3 = 1000 kg/m3, converting 800 kg/m3 to g/cm3 means dividing by 1000, giving 0.8 g/cm3. The other options use the wrong direction or wrong power of ten.",
          "remediationTip": "Anchor on water: 1000 kg/m3 = 1 g/cm3; anything less than water in kg/m3 is a decimal in g/cm3."
        },
        {
          "id": "q-phy-density-relative-density-archimedes-2",
          "quizId": "quiz-phy-density-relative-density-archimedes",
          "questionText": "Relative density (specific gravity) is correctly described as",
          "optionA": "the mass of a substance divided by its volume.",
          "optionB": "the weight of a substance measured in newtons.",
          "optionC": "the density of water divided by the density of the substance, in kg/m3.",
          "optionD": "the ratio of the density of a substance to the density of water, with no unit.",
          "correctOption": "D",
          "subConcept": "Relative density definition",
          "explanation": "Relative density compares a substance with water by dividing one density by the other; because both are in the same units the units cancel, leaving a pure number. Option A is plain density, and options that attach kg/m3 mistake it for density.",
          "remediationTip": "If an answer to a relative-density question carries a unit, cross it out; a ratio of like units is always unit-free."
        },
        {
          "id": "q-phy-density-relative-density-archimedes-3",
          "quizId": "quiz-phy-density-relative-density-archimedes",
          "questionText": "A hydrometer floats deeper in liquid X than in liquid Y. Which liquid is denser?",
          "optionA": "Liquid X, because a deeper float means a denser liquid.",
          "optionB": "Liquid Y, because a shallower float means the liquid is denser.",
          "optionC": "Both are the same; depth of float does not relate to density.",
          "optionD": "Neither, since a hydrometer measures mass and not density.",
          "correctOption": "B",
          "subConcept": "Hydrometer and law of floating",
          "explanation": "A hydrometer always displaces its own fixed weight of liquid, so in a dense liquid a small displaced volume already balances its weight and it rides high; in a light liquid it must sink further. Since it floats deeper in X, X is the lighter liquid and Y is denser.",
          "remediationTip": "Say the rule out loud: denser liquid lifts the hydrometer higher; then read depth as the inverse of density."
        },
        {
          "id": "q-phy-density-relative-density-archimedes-4",
          "quizId": "quiz-phy-density-relative-density-archimedes",
          "questionText": "A metal block weighs 3.0 N in air and 2.4 N when fully immersed in water. What is the upthrust of the water on the block?",
          "optionA": "3.0 N",
          "optionB": "2.4 N",
          "optionC": "5.4 N",
          "optionD": "0.6 N",
          "correctOption": "D",
          "subConcept": "Upthrust from Archimedes",
          "explanation": "Upthrust equals the loss of weight in the fluid, 3.0 N - 2.4 N = 0.6 N, which is the weight of the water the block displaces. The air weight is not the upthrust, the water reading is the apparent weight, and adding them is a sign error.",
          "remediationTip": "Write Upthrust = W_air - W_water as a fixed template before substituting any numbers."
        },
        {
          "id": "q-phy-density-relative-density-archimedes-5",
          "quizId": "quiz-phy-density-relative-density-archimedes",
          "questionText": "Why does a fully laden ship sit lower in fresh river water than in salty seawater?",
          "optionA": "River water is denser, so the ship must sink more to displace its weight.",
          "optionB": "Seawater is less dense, so the ship floats higher there.",
          "optionC": "Fresh water is less dense, so the ship must displace a larger volume of it to equal its weight.",
          "optionD": "The weight of the ship increases when it enters a river.",
          "correctOption": "C",
          "subConcept": "Law of floating and load lines",
          "explanation": "A floating ship displaces its own weight of water. Since fresh water is less dense than seawater, a greater volume of it is needed to match the same weight, so the hull sinks deeper in the river. This is exactly why separate freshwater and seawater load lines are painted on the hull.",
          "remediationTip": "Link density to volume through the law of floating: lighter fluid means more fluid must be pushed aside, so a deeper draft."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t2-forces-newtons-laws",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 3,
    "title": "Forces, Newton's Laws and Equilibrium",
    "description": "Inertia and Newton's first law, F = ma and the definition of the newton, action and reaction, momentum and impulse, mass against weight, friction and limiting equilibrium, moments and the centre of gravity, with the concurrent-force and parallel-force cases of equilibrium.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Newton’s first law: a body continues in its state of rest or of uniform motion in a straight line unless an external resultant force acts upon it, and the reluctance to change that state is inertia.\n• Mass measures inertia, so a 20 000 kg loaded tipper at the Takoradi port is far harder to start and to stop than a 200 kg okada, and that difficulty is inertia rather than weight.\n• Mass is the quantity of matter in kilograms and is unchanged by position; weight is the gravitational force on it, \"W = mg\" in newtons, so 2.5 kg weighs 25 N where g = 10 N kg⁻¹ but 4.0 N on the Moon where g = 1.6 N kg⁻¹.\n• Newton’s second law: the rate of change of momentum is proportional to the resultant force and occurs along its line; for constant mass this is the familiar \"F = ma\".\n• One newton is defined as the force that gives a mass of 1 kg an acceleration of 1 m s⁻², so the newton is the derived unit kg m s⁻².\n• Worked application: an 800 kg trotro gains speed from rest to 20 m s⁻¹ in 10 s, giving \"a = 20/10 = 2 m s⁻²\" and resultant force \"F = 800 x 2 = 1600 N\"; with 400 N of rolling resistance the engine must supply 2000 N.\n• Newton’s third law: action and reaction are equal, opposite and simultaneous, and because they act on two different bodies they never cancel on one free-body diagram.\n• Momentum is the vector \"p = mv\" in kg m s⁻¹, so a 0.50 kg ball travelling at 20 m s⁻¹ carries 10 kg m s⁻¹ of momentum.\n• Impulse is the product of force and the time of action and equals the change of momentum; stopping that ball in 0.02 s demands \"10/0.02 = 500 N\", while rebounding it at 15 m s⁻¹ reverses 17.5 kg m s⁻¹ and needs 875 N.\n• Catching a ball with a moving hand, or a crash crumpling over metres instead of centimetres, lengthens the time and so lowers the force for the same change of momentum.\n• Conservation of linear momentum in an isolated system: total momentum before an interaction equals total momentum after, which is the tool for collisions and recoil.\n• Worked recoil: a 4.0 kg gun fires a 20 g bullet, that is 0.020 kg, at 200 m s⁻¹, so the gun recoils at \"(0.020 x 200)/4.0 = 1.0 m s⁻¹\".\n• Friction acts parallel to the surfaces, opposes relative motion or its tendency, is independent of apparent area of contact, and follows \"F = μR\" with the normal reaction R; μ is a ratio of two forces and has no unit.\n• Static friction self-adjusts to match the applied pull until the limit is reached, so a 40 N block staying still under an 8 N pull has 8 N of friction, while one that just starts moving under 12 N has μ = 12/40 = 0.30.\n• Equilibrium requires zero resultant force and zero resultant moment; three forces in equilibrium close into a triangle, and two 10 N forces inclined at 120° require a 10 N equilibrant.\n• The moment of a force is \"force x perpendicular distance from the pivot\" in newton metres, and the principle of moments gives \"30 N x 0.40 m = 20 N x 0.60 m\" for a balanced beam.\n• The centre of gravity is the single point through which the whole weight appears to act; a body stands while the vertical line through it falls inside its base, which is why a loaded trotro leans and a lorry with a high load rolls on a cambered road.\n• Lift tensions for a 5.0 kg load with g = 10 m s⁻²: accelerating upward at 2 m s⁻² gives \"T = m(g + a) = 60 N\", steady speed gives 50 N, and slowing during ascent gives 40 N.",
    "detailedNotes": {
      "overview": "Forces are the causes of changes in motion, and this topic makes the causal rules exact. You will state and apply Newton’s three laws, use F = ma to compute a resultant force or an acceleration, keep mass and weight apart, and then handle the two great conservation ideas of SHS 1 mechanics: momentum in collisions and recoil, and equilibrium under parallel and concurrent forces. The final part of the topic is the friction and moment work that Paper 3 supervisors test with a block on a plane and a metre rule on a pivot.",
      "introduction": "Start every problem with a free-body diagram: the body isolated, every force as an arrow with its name and its direction, and a chosen positive line. Then write the second law along that line and only after that put numbers in. Practise the two experiments the syllabus expects, the friction of a block on a bench with added loads, and the balance of a metre rule with hanging weights, and record them as a table of force and distance so the principle of moments becomes obvious instead of asserted.",
      "realWorldContext": "The laws are on every Ghanaian road. A passenger in a trotro that brakes hard at a junction is thrown forward because his body keeps the speed the vehicle had, which is the first law and the reason seat belts and careful driving matter. A motorcycle rider who rolls off a bike on the Achimota—Kasoa road survives better than one who stops dead against a kerb because the longer stopping time reduces the force for the same momentum change. At the Obuasi and Tarkwa mines, conveyors and haulage ropes are rated by tension rather than by the load alone, because an accelerating load demands more than its weight. Builders at a Tamale site move a 5.0 kg bag of cement up in a bucket on a rope, and the rope must carry 60 N while the bucket speeds up and only 50 N once it is steady.",
      "objectives": [
        "State Newton’s three laws of motion and give one observable example of each",
        "Distinguish mass from weight and convert between them using W = mg",
        "Apply F = ma and the principle of moments to solve numerical problems with correct units",
        "Use conservation of momentum and the impulse equation to analyse collisions, rebound and recoil",
        "Define limiting friction and the coefficient of friction, and state the conditions for equilibrium of forces and moments"
      ],
      "sections": [
        {
          "title": "Inertia and Newton's First Law",
          "content": "The first law is a statement about what does not need a cause. Motion at constant velocity requires no force; a change of velocity does. A book lying on a bench stays there because the resultant force on it is zero, the downward weight being matched by the upward reaction of the bench, and a hockey puck-like disc sliding on a very smooth surface keeps going because nothing along its line is unbalancing it. The property that resists any change of velocity is inertia, and its measure is mass, not weight, which is why a 20 000 kg loaded tipper standing at the Takoradi port needs a long run of engine work to reach walking speed and a long distance to be brought back to rest, while a 200 kg okada responds almost at once. The everyday consequences are all road-traffic ones: the passenger in a trotro that suddenly brakes pitches forward because nothing has yet acted on him to reduce his speed; a crate on the bed of a lorry slides towards the cab during hard braking for the same reason, and that is why loads are strapped. The law also destroys the ancient but wrong idea that a continuous force is needed to keep a body moving. Friction, not the nature of motion, is what makes a pushed box on a concrete floor slow down.",
          "bulletPoints": [
            "Resultant force zero means rest or uniform straight-line motion continues unchanged.",
            "Inertia is the reluctance to change velocity, and mass is its measure.",
            "A passenger lurching forward when a trotro brakes is the first law in action.",
            "A box on a floor stops because friction provides the unbalanced force, not because motion naturally dies.",
            "Balanced forces on a body at rest: weight down, normal reaction up, resultant zero."
          ],
          "keyTakeaway": "Forces change motion rather than produce it, and the bigger the mass the more force is needed to change that motion at a given rate.",
          "realWorldExample": "Drivers on the Kumasi—Techiman highway know that a loaded tipper takes far more distance to stop than an empty one, because the extra mass means the same brakes must remove much more momentum."
        },
        {
          "title": "Newton's Second Law: F = ma and the Definition of the Newton",
          "content": "The second law turns the first law into arithmetic. The resultant force on a body equals its mass multiplied by the acceleration it acquires, F = ma, and the acceleration points along the resultant force. This is where the newton itself is defined: one newton is the force that gives a mass of one kilogram an acceleration of one metre per second squared, so 1 N is 1 kg m s⁻² and force has dimensions [M L T⁻²]. Use it as a two-way tool. A trotro of mass 800 kg that reaches 20 m s⁻¹ from rest in 10 s has an acceleration of 20 divided by 10, which is 2 m s⁻², so the resultant force on it is 800 times 2, that is 1600 N; if rolling resistance and air drag together account for 400 N of that, the engine must actually be providing 2000 N at the wheels. The discipline that wins marks is unit control: 20 g of mass must enter the equation as 0.020 kg, and a weight in newtons must not be substituted where a mass in kilograms is required. Weight itself is simply the second law applied to gravity, W = mg, and taking g as 10 m s⁻² means a 2.5 kg body carries 25 N of force downward. Keep that distinction visible in your writing, because mass in kilograms never changes with place while weight changes with the local value of g.",
          "bulletPoints": [
            "Statement: resultant force = mass x acceleration, \"F = ma\", with a in m s⁻² and F in N.",
            "Definition of the newton: \"1 N = 1 kg m s⁻²\", so force has dimensions [M L T⁻²].",
            "Worked case: 800 kg from rest to 20 m s⁻¹ in 10 s gives a = 2 m s⁻² and resultant F = 1600 N.",
            "With 400 N of resistance the engine force is 1600 + 400 = 2000 N.",
            "Weight is the gravitational force \"W = mg\": 2.5 kg weighs 25 N where g = 10 N kg⁻¹ and 4.0 N where g = 1.6 N kg⁻¹.",
            "Always draw the free-body diagram first, choose a positive direction, then write F = ma along it."
          ],
          "keyTakeaway": "F = ma is applied to the resultant force only, so every force on the body must be found and summed before any acceleration is computed.",
          "realWorldExample": "A builder at a Kasoa site raises a 5.0 kg bag of cement on a rope; while the bag accelerates upward at 2 m s⁻² the rope tension is 5.0(10 + 2) = 60 N, which is why ropes and pulleys are rated above the mere weight of the load."
        },
        {
          "title": "The Third Law, Momentum and Impulse",
          "content": "The third law says that forces always come in pairs: if body A pushes body B, body B pushes body A with an equal force in the opposite direction at the same instant. The two forces do not cancel because they act on different bodies, and confusing this with the balanced forces on one body is a classic examination slip. A walker pushes the ground backward and the ground pushes him forward, which is the only reason a person or a car can accelerate along a road; a rocket or a squidding fish moves by throwing mass one way and going the other. Pair the third law with momentum, p = mv, and the useful conservation rule appears. In an isolated system the total momentum before an interaction equals the total momentum after, so when a 4.0 kg gun fires a 20 g bullet at 200 m s⁻¹, the bullet takes 0.020 times 200, that is 4.0 kg m s⁻¹ forward, and the gun must take 4.0 kg m s⁻¹ backward, giving a recoil speed of 1.0 m s⁻¹. The impulse rule connects force and time to that same change: impulse F t equals change of momentum. Bringing a 0.50 kg ball at 20 m s⁻¹ to rest in 0.02 s removes 10 kg m s⁻¹ and therefore demands an average force of 500 N, but reversing the ball to 15 m s⁻¹ in the same interval reverses 17.5 kg m s⁻¹ and demands 875 N. Lengthening the time is the safety principle behind a cricket glove, a padded armrest and a car bumper.",
          "bulletPoints": [
            "Action and reaction are equal, opposite and simultaneous but act on different bodies.",
            "Momentum is \"p = mv\", a vector in kg m s⁻¹; 0.50 kg at 20 m s⁻¹ gives 10 kg m s⁻¹.",
            "Conservation of momentum: total before equals total after for an isolated system.",
            "Worked recoil: gun 4.0 kg, bullet 0.020 kg at 200 m s⁻¹, so recoil speed = (0.020 x 200)/4.0 = 1.0 m s⁻¹.",
            "Impulse \"F t = change in momentum\"; stopping the ball in 0.02 s gives 10/0.02 = 500 N, rebound gives 17.5/0.02 = 875 N.",
            "Increasing the contact time reduces the force for the same momentum change, the principle behind padding and crumple zones."
          ],
          "keyTakeaway": "Momentum is conserved in every interaction, while the force felt during one depends on how quickly the momentum is exchanged.",
          "realWorldExample": "Footballers at a school inter-house match at Accra Sports Stadium learn to catch a hard ball with the arms yielding, because drawing the hands back over an extra tenth of a second can halve the force on the fingers."
        },
        {
          "title": "Friction, Limiting Equilibrium, Moments and Centre of Gravity",
          "content": "Friction is the force that surfaces exert along themselves to resist sliding. It is proportional to the normal reaction and not to the apparent area of contact, so a brick on its broad face and on its narrow edge starts sliding at the same pull, and it obeys F = μR where μ, the coefficient of friction, is a pure number because it is one force divided by another. Static friction is self-adjusting: push a 40 N block with 8 N and it stays still with 8 N of friction; push with 12 N and it is on the point of moving, so 12 N is the limiting friction and μ = 12/40 = 0.30. Once the block slides, friction drops slightly below the limiting value. Equilibrium has two demands: the resultant force must vanish and the resultant moment must vanish. For concurrent forces the triangle or the perpendicular-components method does the work, and a 20 N lamp hung from two strings each making 30° with the vertical is supported by tensions of 20/(2 cos 30°) = 11.6 N in each string. For parallel forces the principle of moments rules: the moment of a force is force times the perpendicular distance from the pivot, so a 30 N load 0.40 m from a pivot is balanced by 20 N applied 0.60 m on the other side, since 30 x 0.40 = 12 N m equals 20 x 0.60 = 12 N m. The centre of gravity is the point through which the weight appears to act; for an irregular lamina it is found by hanging the shape from two pins and drawing plumb lines, and a body remains steady while the vertical line through that point falls inside its support base.",
          "bulletPoints": [
            "Friction acts along the surfaces, opposes motion or its tendency, and is independent of apparent area.",
            "The law \"F = μR\" holds at the limit, with μ dimensionless because it is force over force.",
            "Static friction matches the pull up to a maximum; a 40 N block that moves at 12 N has μ = 0.30.",
            "Two conditions of equilibrium: zero resultant force and zero resultant moment.",
            "Principle of moments: \"30 N x 0.40 m = 20 N x 0.60 m = 12 N m\" for a balanced beam.",
            "A 20 N lamp on two strings at 30° to the vertical gives 11.6 N tension in each string.",
            "Stability depends on the weight line falling inside the base, so a low centre of gravity is a safe one."
          ],
          "keyTakeaway": "At limiting equilibrium friction has its maximum value μR, and a body in complete equilibrium has neither a resultant force nor a resultant turning effect.",
          "realWorldExample": "A mason at Sunyani stands a freshly built block wall and checks it with a plumb line, because once the weight line of the wall leaves its foundation the structure tips; the same reasoning makes a water carrier place a heavy kaie low on the head rather than high."
        }
      ],
      "commonMistakes": [
        "Treating mass and weight as one quantity, for example writing that a 2.5 kg body has a mass of 25 N; mass is 2.5 kg everywhere, weight is 25 N only where g = 10 N kg⁻¹.",
        "Cancelling an action against its reaction on a free-body diagram; the two forces act on different bodies, so the equation F = ma must be written for one body at a time.",
        "Substituting grams straight into F = ma, so 20 g is entered as 20 instead of 0.020 kg, and the answer is a thousand times wrong.",
        "Adding 5 N and 7 N to state a 12 N resultant when the forces are not collinear, and then failing to find the acceleration the unbalanced force should produce.",
        "Using F = μR with an applied pull that is below the limit, when the actual static friction only equals the pull and the block is not moving.",
        "Taking moments with the distance measured along the force instead of perpendicular to it from the pivot, and mixing centimetres with newton-metres."
      ],
      "wassceExamTips": [
        "Paper 1 tests the laws as definitions and as short calculations: know that the newton is kg m s⁻¹ squared and that momentum and impulse share the unit kg m s⁻¹ with the newton second.",
        "In Paper 2, a numerical answer written without units does not earn the A1 mark even when the arithmetic is perfect, so end every line with its unit.",
        "For any lift, rope or tension question draw the free-body diagram on the script and label the arrows; that diagram is what the M1 mark is paid for.",
        "When a question says the body is just on the point of moving, recognise limiting friction and set F = μR; when it says moving with constant velocity, set the resultant force to zero first.",
        "Paper 3 alternatives to practical ask for the friction of a block on a plane or the balance of a metre rule: record the pull or the hanging masses in a table, repeat three times, average, and state the conclusion in words.",
        "Take g = 10 m s⁻² unless the instruction says otherwise, and write that choice at the top of the part so the marker can follow every substitution."
      ],
      "summaryChecklist": [
        "Can I state each of Newton’s three laws and give one Ghanaian road or workshop example of it?",
        "Can I convert between mass and weight using W = mg and keep the two quantities separate?",
        "Can I solve F = ma problems where the resultant force must first be found from several applied forces?",
        "Can I apply conservation of momentum to a collision or a recoil and use impulse to find an average force?",
        "Can I state the two conditions for equilibrium and use the principle of moments in a numerical problem?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-newton-1",
        "title": "Tension in a Rope Raising a Bag of Cement",
        "problem": "On a building site a rope raises a 5.0 kg bag of cement vertically. Taking g = 10 m s⁻², find the tension in the rope while the bag accelerates upward at 2.0 m s⁻², while it rises with steady speed, and while it is slowing down at 2.0 m s⁻² during the ascent. State which case governs the safe working load of the rope.",
        "stepByStepSolution": [
          "Step 1 (M1): Draw the free-body diagram for the bag with the weight mg acting downward and the tension T acting upward, and take upward as the positive direction.",
          "Step 2 (M1): Compute the weight: W = mg = 5.0 kg x 10 m s⁻² = 50 N.",
          "Step 3 (M1): Apply the second law along the line of motion: resultant force = T - mg = ma.",
          "Step 4 (A1): Accelerating upward: T = m(g + a) = 5.0(10 + 2.0) = 60 N.",
          "Step 5 (M1): With steady speed the acceleration is zero, so T - mg = 0 and the tension equals the weight.",
          "Step 6 (A1): Steady ascent: T = 50 N; slowing during ascent with a = -2.0 m s⁻² gives T = m(g - a) = 5.0(10 - 2.0) = 40 N.",
          "Step 7 (A1): The greatest tension occurs at the start of the lift, so the rope and its fittings must be rated above 60 N with a further safety factor, never merely above 50 N."
        ],
        "keyTakeaway": "Rope tensions for the 5.0 kg bag are 60 N while speeding up, 50 N while steady and 40 N while slowing, and it is the starting jerk of 60 N that sets the safe working load."
      },
      {
        "id": "ex-phy-newton-2",
        "title": "Recoil Speed of a Gun and the Impulse on the Bullet",
        "problem": "A gun of mass 4.0 kg fires a bullet of mass 20 g horizontally at 200 m s⁻¹. The bullet takes 0.005 s to travel the barrel. Find the momentum given to the bullet, the recoil speed of the gun and the average force acting on the bullet.",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the bullet mass to SI base units: 20 g = 0.020 kg, then write the system as gun plus bullet, initially at rest.",
          "Step 2 (M1): Apply conservation of linear momentum: total momentum before firing is zero, so the total after firing must also be zero.",
          "Step 3 (M1): Momentum of the bullet = mv = 0.020 kg x 200 m s⁻¹.",
          "Step 4 (A1): Bullet momentum = 4.0 kg m s⁻¹ forward, so the gun carries 4.0 kg m s⁻¹ backward.",
          "Step 5 (M1): Recoil speed of the gun = momentum/mass = 4.0 kg m s⁻¹ / 4.0 kg.",
          "Step 6 (A1): Recoil speed = 1.0 m s⁻¹, directed backward along the barrel line.",
          "Step 7 (A1): Impulse on the bullet equals its change of momentum, 4.0 N s, so average force = impulse/time = 4.0/0.005 = 800 N, and by the third law the bullet pushes the gun back with the same 800 N for the same interval."
        ],
        "keyTakeaway": "A 4.0 kg gun giving a 0.020 kg bullet 200 m s⁻¹ recoils at 1.0 m s⁻¹, and the 4.0 N s impulse delivered in 0.005 s means an average force of 800 N."
      }
    ],
    "quiz": {
      "id": "quiz-phy-forces-newtons",
      "topicId": "shs1-phy-t2-forces-newtons-laws",
      "title": "Forces and Newton's Laws Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-newton-1",
          "quizId": "quiz-phy-forces-newtons",
          "questionText": "A resultant force of 10 N acts on a block of mass 4.0 kg resting on a frictionless surface. What acceleration does the block acquire?",
          "optionA": "2.5 m s⁻²",
          "optionB": "0.40 m s⁻²",
          "optionC": "14 m s⁻²",
          "optionD": "40 m s⁻²",
          "correctOption": "A",
          "subConcept": "Newton's second law",
          "explanation": "From F = ma the acceleration is a = F/m = 10/4.0 = 2.5 m s⁻². Option B inverts the ratio and gives the mass per newton, C adds the two quantities, and D multiplies them, none of which has the dimension of acceleration.",
          "remediationTip": "Rearrange F = ma on the margin before substituting, then check that the units of the answer are m s⁻²."
        },
        {
          "id": "q-phy-newton-2",
          "quizId": "quiz-phy-forces-newtons",
          "questionText": "The mass of a packet of maize flour is 2.5 kg. Taking g = 10 N kg⁻¹ on Earth and g = 1.6 N kg⁻¹ on the Moon, which pair gives its weight on Earth and its mass on the Moon?",
          "optionA": "25 N on Earth and 0.40 kg on the Moon",
          "optionB": "4.0 N on Earth and 2.5 kg on the Moon",
          "optionC": "25 N on Earth and 2.5 kg on the Moon",
          "optionD": "40 N on Earth and 4.0 kg on the Moon",
          "correctOption": "C",
          "subConcept": "Mass against weight",
          "explanation": "Weight on Earth is W = mg = 2.5 x 10 = 25 N, and mass is the quantity of matter, so it remains 2.5 kg wherever the packet is taken. Its weight on the Moon would be 4.0 N, which is the value the distractors wrongly attach to Earth or to mass.",
          "remediationTip": "Write the two columns mass in kg and weight in N, and note that only the weight column changes with g."
        },
        {
          "id": "q-phy-newton-3",
          "quizId": "quiz-phy-forces-newtons",
          "questionText": "A ball of mass 0.50 kg travelling at 20 m s⁻¹ is brought to rest in 0.02 s by a wicket-keeper’s glove. What is the average force on the glove?",
          "optionA": "10 N",
          "optionB": "500 N",
          "optionC": "0.01 N",
          "optionD": "400 N",
          "correctOption": "B",
          "subConcept": "Impulse and momentum",
          "explanation": "Change of momentum is 0.50 x 20 = 10 kg m s⁻¹, and average force is that change divided by the time, 10/0.02 = 500 N. Option A is the momentum itself with no division by time, D comes from using 0.025 s, and C divides the wrong way round.",
          "remediationTip": "State F t = change in momentum, insert the time, and only then rearrange for the force."
        },
        {
          "id": "q-phy-newton-4",
          "quizId": "quiz-phy-forces-newtons",
          "questionText": "A block of weight 40 N rests on a rough horizontal bench. A horizontal pull of 8 N does not move it, and the smallest pull that just starts motion is 12 N. What is the coefficient of limiting friction?",
          "optionA": "0.20",
          "optionB": "0.67",
          "optionC": "3.33",
          "optionD": "0.30",
          "correctOption": "D",
          "subConcept": "Limiting friction",
          "explanation": "At the point of motion the limiting friction is 12 N and the normal reaction is 40 N, so μ = F/R = 12/40 = 0.30. Option A wrongly uses the 8 N pull that did not move the block, B divides 8 by 12, and C inverts the correct ratio.",
          "remediationTip": "Ask first whether the body is moving or just about to move; only then is F = μR allowed."
        },
        {
          "id": "q-phy-newton-5",
          "quizId": "quiz-phy-forces-newtons",
          "questionText": "A beam is supported on a pivot. A 30 N load hangs 0.40 m to one side of the pivot. What vertical force applied 0.60 m on the other side keeps the beam horizontal?",
          "optionA": "20 N",
          "optionB": "45 N",
          "optionC": "30 N",
          "optionD": "12 N",
          "correctOption": "A",
          "subConcept": "Principle of moments",
          "explanation": "Balanced moments require 30 x 0.40 = F x 0.60, so 12 N m = 0.60 F and F = 20 N. Option B results from placing the distances the wrong way round, and D states the moment itself instead of the force.",
          "remediationTip": "Draw the pivot, mark both perpendicular distances, and write clockwise moments equals anticlockwise moments before substituting."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t2-energy-sources-generation-household-wiring",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 5,
    "title": "Energy Sources, Electricity Generation and Household Wiring",
    "description": "Renewable and non-renewable sources, how the Akosombo and Kpong stations generate, why voltage is stepped up for transmission and down for the house, ring and radial circuits, earth, fuse and circuit breaker, the danger of overloading, and the cost of a unit of electricity.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Energy sources divide into renewable ones, hydro, solar, wind, biomass and micro-hydro, which are replaced within a human lifetime, and non-renewable ones, coal, crude oil, natural gas and nuclear fuel, which are used up once mined or pumped.\n• Ghana draws most of its bulk power from the Volta River: Akosombo has eight turbine-generator units of about 114 MW each, giving roughly 912 MW, and Kpong downstream adds about 160 MW, so the two VRA stations together carry roughly 1072 MW of installed capacity.\n• In every generator the primary mover, falling water in this case, turns a coil inside a magnetic field; the changing flux induces an electromotive force, and the electrical energy comes ultimately from the gravitational potential energy of the stored water.\n• Loss in a transmission line is I^2 R, so the current, not the power, decides the waste: 33 kW sent at 11 kV needs 3 A and wastes 180 W in a 20 ohm line, while the same 33 kW at 132 kV needs only 0.25 A and wastes 1.25 W, one hundred and forty-four times less.\n• A step-up transformer obeys Vs/Vp = Ns/Np: taking 11 kV to 132 kV needs a turns ratio of 12 to 1, so a 200-turn primary pairs with a 2400-turn secondary; substations near the towns then step back down to the 240 V used in the house.\n• House wiring runs from the meter as separate final circuits: a lighting circuit on 1.5 mm^2 cable, ring or radial socket circuits on 2.5 mm^2 cable, and a dedicated circuit for a cooker or water heater, each protected by its own fuse or breaker.\n• A radial circuit runs out from the consumer unit to the outlets in one chain; a ring main joins its two ends back to the same unit, so current reaches any socket by two paths, which allows thinner cable for the same load and is the usual Ghanaian choice for sockets.\n• Three wires enter every socket: live carries the supply at about 240 V, neutral completes the circuit and stays near earth potential, and the green earth wire is bonded to metal casings but carries no current in normal use.\n• Fuse rating is set by the working current: I = P/V, so a 3 kW iron draws 3000/240 = 12.5 A and needs a 13 A plug fuse; a 5 A fuse would blow on every use and a 30 A fuse would let the cable overheat before it blew.\n• Overloading is drawing more current than the circuit is rated for; joining too many appliances to one adapter or a damaged cable insulation lets current escape, both heat the cable, melt the covering and start fires in thatch, curtains or roof timber.\n• A circuit breaker is an electromagnetic or thermal switch that trips and can be reset, while a fuse is a single-use wire that melts; a residual-current or earth-leakage device compares live and neutral currents and trips when about 30 mA leaks away through a person or to earth.\n• One kilowatt hour is the energy of a 1 kW appliance running for one hour, and it is the unit the meter records and the tariff charges for: five 60 W lamps burning five hours daily use 1.5 kWh a day, 45 kWh in thirty days, and at GH¢1.20 a unit that is GH¢54.00.\n• The same lighting in 9 W LED lamps uses 6.75 kWh in the month, GH¢8.10, a saving of GH¢45.90, which is why lamp replacement is the fastest way a household cuts its bill.\n• A 1000 W iron used one hour daily for thirty days consumes 30 kWh, GH¢36.00 at the same price, so high-heat appliances, irons, water heaters, electric kettles and fridges dominate the bill rather than lamps.\n• Safety habits that carry marks in the practical: switch off at the consumer unit before opening a junction box, never fit a bigger fuse than the cable rating, never use water on an electrical fire, and treat a dangling or burnt socket as an immediate report to the estate caretaker or ECG.",
    "detailedNotes": {
      "overview": "This topic traces electrical energy from the river to the socket. You will classify energy sources as renewable or non-renewable, explain how the Akosombo and Kpong stations convert the potential energy of stored water into electrical energy, and justify the very high voltages used on the transmission lines with the loss formula P = I^2 R. You then learn how a Ghanaian house is actually wired: the meter, the consumer unit, lighting and socket circuits, ring and radial layouts, and the three wires live, neutral and earth. Finally you will size a fuse from I = P/V, explain why overloading starts fires, and read a bill in units of kilowatt hours so that you can calculate what a lamp, an iron or a fridge costs per month.",
      "introduction": "Begin outside the classroom with a list of everything in the house that uses electricity and its power in watts, then rank the list by how long each one runs. That ranking tells you where the money goes, and it also gives every calculation in this lesson a real object to stand on. In the laboratory, use a low-voltage supply, two transformer coils and a lamp to show step-up and step-down, and always ask what current flows before you ask what voltage appears. Draw the wiring of your own room on squared paper and label the three wires and the protective device on each circuit.",
      "realWorldContext": "The Volta River Authority supplies the bulk of southern Ghana from Akosombo, where eight units of about 114 MW give roughly 912 MW, and from Kpong below the falls, which adds about 160 MW, so the pair is rated near 1072 MW; the water stored behind the dam is itself a battery of gravitational potential energy that ECG draws from through the national grid. High-tension lines run from Akosombo through 132 kV and 33 kV substations into Kumasi, Tamale, Ho and Accra, where distribution transformers on poles drop the supply to the 240 V single-phase service at the house. In a compound at Madina or Kasoa, a prepaid card meter records units, and a typical lower-block price of about GH¢1.20 per kWh is enough for every calculation in this lesson; check the current tariff before quoting it as fact. Estate wiring follows the same pattern everywhere: a consumer unit with a main switch and breakers, a lighting circuit on 1.5 mm^2 cable, ring or radial socket circuits on 2.5 mm^2 cable, and a separate circuit for a water heater or cooker, with the metal casings bonded to earth.",
      "objectives": [
        "Classify named energy sources as renewable or non-renewable and state one advantage and one disadvantage of each",
        "Explain the energy conversion in a hydro station from stored water to the grid supply, naming the parts of the plant",
        "Use Vs/Vp = Ns/Np to find transformer turns and justify high-voltage transmission with the I^2 R loss formula",
        "Draw and label a household wiring system showing circuits, live, neutral and earth, fuse and circuit breaker",
        "Calculate the current drawn by an appliance from I = P/V, choose a suitable fuse, and work out the cost of units used"
      ],
      "sections": [
        {
          "title": "Energy Sources: Renewable and Non-renewable",
          "content": "An energy source is renewable when nature replaces it at about the rate it is consumed, and non-renewable when the stock is fixed and shrinks with every use. Hydro, solar, wind, biomass and wave are renewable; coal, crude oil, natural gas and uranium are not, because the deposits took geological ages to form. The division is not the same as the division between clean and dirty: hydro is renewable yet a large dam floods land, changes a river regime and displaces communities, while biomass charcoal is renewable only if the woodland regrows as fast as it is cut, which in Ghana it often does not. Diesel and heavy fuel oil run generating plants at Tema and Takoradi and are reserved for peak demand and for times when the Volta level is low, so their cost per unit is far higher than hydro cost per unit. The practical judgement a WAEC answer expects is a balanced one: state the reliability, running cost, start-up time, environmental effect and local availability of the source, then recommend it for the stated duty.",
          "bulletPoints": [
            "Renewable: hydro from the Volta, solar in the northern savanna, wind, biomass, small micro-hydro schemes.",
            "Non-renewable: coal, crude oil, diesel, natural gas and nuclear fuel, each a fixed stock that is used up.",
            "Bioenergy is renewable only where regrowth matches cutting, so charcoal from unsupervised coppicing is not really renewable.",
            "Thermal plants at Tema and Takoradi run on light crude or diesel and carry a much higher cost per unit than hydro.",
            "Judge a source on reliability, running cost, start-up time, environmental effect and local availability, not on fashion."
          ],
          "keyTakeaway": "Renewable means replaced within a human lifetime; the label says nothing about cost or environmental damage, so state both separately.",
          "realWorldExample": "A solar panel on the roof of a health centre at Bawku keeps vaccines cold through long outages, because sunlight is available for most of the year in the north, while the same panel in the forest zone of the south earns much less in the June rains."
        },
        {
          "title": "How Akosombo and Kpong Generate Electricity",
          "content": "Rain on the forest regions of the middle Volta fills Lake Volta behind the Akosombo dam, and the stored water stands at a height above the tailrace, so it holds gravitational potential energy. Gates admit water into penstocks, the pressure head drives the water through a turbine, and the spinning turbine shaft turns a rotor inside the generator stator. As the magnetic field sweeps past the stator coils the magnetic flux linking them changes continuously, an electromotive force is induced, and the machine delivers three-phase alternating current at generating voltage. Eight units of about 114 MW each give roughly 912 MW at Akosombo; Kpong, built lower downstream so that the water that has already passed Akosombo drives a second set of turbines, adds about 160 MW, and the two stations total near 1072 MW. Control of lake level matters: in a dry year the VRA restricts generation to save the head, which is why demand management and rationing appear when the lake falls. Keta Lagoon, the small Bui dam and the thermal plants add capacity, but the lake remains the country main store of electrical energy.",
          "bulletPoints": [
            "Energy chain: potential energy of lake water, kinetic energy in the penstock, turbine rotation, generator output.",
            "The generator works on electromagnetic induction: changing flux linkage in the stator coils induces an electromotive force.",
            "Eight units near 114 MW give Akosombo about 912 MW; Kpong adds about 160 MW, a combined 1072 MW.",
            "Kpong is a downstream reuse of the same water, which is why a second station can be built cheaply on the same river.",
            "Falling lake level reduces the head and the available power, so a dry year brings rationing."
          ],
          "keyTakeaway": "A hydro station is a converter, not a creator: it turns the height of stored water into electrical energy through a turbine and an inducing magnetic field.",
          "realWorldExample": "When the Lake Volta level drops in a long dry season the VRA reduces the gate openings at Akosombo, the national supply falls, and ECG load-sheds by rotating districts through scheduled outages."
        },
        {
          "title": "Stepping Up for Transmission and Down for the House",
          "content": "The transformer carries the power from the generating station to the village without carrying the current that would waste it. A transformer obeys Vs/Vp = Ns/Np for an ideal core, so a primary of 200 turns fed at 11 kV with a secondary of 2400 turns delivers 132 kV, because the turns ratio is 12 to 1 and 11 kV multiplied by 12 is 132 kV. The reason for raising the voltage is the loss in the cable: power sent equals voltage times current, so 33 kW at 11 kV needs 3 A, while 33 kW at 132 kV needs only 0.25 A. Heating loss in a line of resistance 20 ohm is I^2 R, which gives 3 A squared times 20 = 180 W wasted at the lower voltage but only 0.25 A squared times 20 = 1.25 W at 132 kV, a reduction by a factor of 144. That is why the pylons carry such high voltages, and why a substation in the town then uses step-down transformers to bring the supply to 11 kV for distribution and finally to about 240 V single phase at the compound. Real transformers are not ideal: core eddy currents and hysteresis and the heating of the windings account for the losses, and the oil in a distribution can is both an insulator and a coolant for exactly that reason.",
          "bulletPoints": [
            "Ideal transformer relation: Vs/Vp = Ns/Np, so 200 turns to 2400 turns steps 11 kV up to 132 kV.",
            "Power transmitted = V x I, so raising V lowers I for the same power.",
            "Line loss = I^2 R: 3 A in 20 ohm wastes 180 W, while 0.25 A in the same line wastes 1.25 W.",
            "Step-down at the substation and on the pole brings the supply to about 240 V for the household.",
            "Transformer losses come from winding heating, hysteresis and eddy currents in a laminated core; oil cools and insulates."
          ],
          "keyTakeaway": "Transmit at high voltage and low current, because the wasted power grows with the square of the current, not with the voltage.",
          "realWorldExample": "The pylon lines that cross the road from Nsawam towards Akosombo carry 132 kV; the transformer can on the pole outside a house at Soshikuck or Kasoa is the last step-down before the 240 V that reaches the socket."
        },
        {
          "title": "Wiring a House: Circuits, Ring and Radial, Earth, Fuse and Breaker",
          "content": "From the meter the supply enters a consumer unit carrying a main switch and then branches into final circuits. Lighting is usually run on 1.5 mm^2 cable as a radial chain, because lamps draw little current; socket outlets are run on 2.5 mm^2 cable either as radial circuits or as a ring main, in which the cable leaves the unit, visits the outlets and returns to the same unit, so every socket is fed from two directions and can be served by lighter cable than a radial of the same capacity. Each socket carries a three-pin plug: the live pin on the right supplies current at about 240 V, the neutral on the left returns it, and the longer earth pin at the top makes contact first and bonds the metal case of the appliance to earth. If insulation crumbles and live touches the case, the earth gives the current a low-resistance path, so a large current flows and the fuse melts or the breaker trips within a fraction of a second instead of depending on a person to complete the path through the floor. A fuse is a thin wire that melts once and must be replaced with one of exactly the rated current; a circuit breaker is an electromagnetic or thermal switch that trips and is reset by hand, and an earth-leakage or residual-current device compares live and neutral currents and trips when roughly 30 mA leaks away, which is about the level that can endanger a heart. A certificated electrician does this work; a student inspects, draws and reports.",
          "bulletPoints": [
            "Live, neutral and earth: about 240 V on live, neutral near earth potential, earth bonded to metal casings only.",
            "Radial circuit: one chain from the consumer unit; ring main: the cable returns to the unit so each socket has two paths.",
            "Lighting on 1.5 mm^2 cable, socket circuits on 2.5 mm^2 cable, a separate circuit for a water heater or cooker.",
            "Fuse melts once and is replaced with the correct rating; breaker trips and resets; residual-current device detects leakage.",
            "Overloading and damaged insulation heat the cable; the earth path and the protective device are what stop the fire and the shock."
          ],
          "keyTakeaway": "The earth wire normally carries nothing; it exists so that a fault current has an easy path and the protective device operates before a person touches the case.",
          "realWorldExample": "In a self-built house at Ashaiman the owner joined a 30 A fuse to a socket circuit wired in thin cable after buying a second-hand freezer; the cable insulation softened within a month, which is the classic overload and wrong-protection combination examiners describe."
        },
        {
          "title": "Paying for Electricity: the Kilowatt Hour and the Bill",
          "content": "A unit of electricity is one kilowatt hour, the energy taken by a 1 kW appliance running for one hour, equal to 1000 W times 3600 s = 3.6 MJ. Energy used equals power in kilowatts multiplied by time in hours, and cost equals energy multiplied by the tariff price per unit. Five lamps of 60 W burning five hours every day use 5 x 60 x 5 = 1500 Wh, which is 1.5 kWh a day and 45 kWh in a thirty-day month; at an illustrative lower-block price of GH¢1.20 per unit that lighting costs GH¢54.00. Replacing each with a 9 W LED gives 5 x 9 x 5 = 225 Wh a day, 6.75 kWh in the month, GH¢8.10, so the household saves GH¢45.90 on lighting alone. Heat appliances dominate: a 1000 W iron run one hour daily consumes 30 kWh, GH¢36.00, and a 1500 W kettle used for two hours a day would take 90 kWh, GH¢108.00 in the month. Prepaid card meters show the units directly, so the arithmetic can be checked in the shop: top up by GH¢60.00 at GH¢1.20 a unit and the meter credits 50 kWh, which the iron above would exhaust in fifty days of one-hour use. Bills rise steeply at the higher blocks, which is why a large compound with several fridges and an iron faces a much higher average price per unit than a single-room quarters.",
          "bulletPoints": [
            "One unit is one kWh = 3.6 MJ; energy = power in kW x time in hours; cost = units x price per unit.",
            "Five 60 W lamps at 5 hours daily: 45 kWh in thirty days, GH¢54.00 at GH¢1.20 per unit.",
            "The same lamps as 9 W LEDs: 6.75 kWh, GH¢8.10, a saving of GH¢45.90 per month.",
            "A 1000 W iron one hour daily: 30 kWh, GH¢36.00; heat appliances, not lamps, drive the bill.",
            "A GH¢60.00 top-up at GH¢1.20 per unit credits 50 kWh on the prepaid meter."
          ],
          "keyTakeaway": "Convert watts to kilowatts, multiply by hours, then by the tariff; that one chain answers nearly every electricity cost question in the paper.",
          "realWorldExample": "A provision shop owner at Suame who burns six 60 W bulbs from 6 pm to 11 pm uses 1.8 kWh a night, about GH¢2.16 a night at GH¢1.20 a unit, so switching to 9 W LEDs for the same hours costs under GH¢0.33 a night and keeps the light running longer on the same top-up."
        }
      ],
      "commonMistakes": [
        "Quoting a generator output in kilowatts when the station is rated in megawatts, and forgetting that a 114 MW unit is 114 000 kW; state the unit or the figure is meaningless.",
        "Saying high voltage is used because it is cheaper to build pylons; the marking point is the reduction of current and therefore of the I^2 R heating loss in the line.",
        "Confusing power with energy and charging a bill with watts: cost needs kilowatt hours, so 60 W used for 5 hours is 0.3 kWh, not 0.3 units per watt.",
        "Selecting a fuse far above the appliance current, for example a 30 A fuse on a 12.5 A iron, and calling it safe because it will never blow; the fuse must be the smallest rating above the working current.",
        "Naming the neutral as the earth wire, or drawing the earth wire carrying the working current; in sound wiring earth carries nothing at all and only conducts during a fault.",
        "Leaving out the formula line in a cost question and giving only the cedis figure; WAEC awards the method mark for energy = power x time before the money is calculated."
      ],
      "wassceExamTips": [
        "Paper 1 likes a transformer ratio question with one missing value. Write Vs/Vp = Ns/Np, substitute with units, and check that a step-up has more secondary turns; typically two marks are available for substitution and answer.",
        "In Paper 2 a house-wiring diagram is scored for labelled parts, not artistic quality: meter, consumer unit, main switch, one lighting circuit, one ring main, and the three wires with the earth bonded to the metal case.",
        "When a question asks why a fuse must be replaced with one of the same rating, answer in causal form: a thicker fuse wire melts at a higher current, so the cable overheats first and the insulation catches fire.",
        "For the alternative practical in Paper 3, practise reading a prepaid meter, identifying a plug wiring fault, and testing a circuit with a bulb tester; report what is observed, and state the safety action before touching anything.",
        "Cost questions lose marks on time conversion: quote minutes as a fraction of an hour, so 30 minutes is 0.5 h, and the unit becomes kWh cleanly before the tariff is multiplied in."
      ],
      "summaryChecklist": [
        "Can I sort eight named energy sources into renewable and non-renewable and defend one that is arguable?",
        "Can I trace the energy conversions at Akosombo from the lake surface to the national grid?",
        "Can I use Vs/Vp = Ns/Np and I^2 R to show why 132 kV beats 11 kV for the same power?",
        "Can I draw a labelled household wiring diagram with circuits, the three wires and two protective devices?",
        "Can I compute the units and cost for a set of appliances and recommend one saving worth making?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-energy-1",
        "title": "Costing a Month of Household Lighting in Units",
        "problem": "A house has five lamps of 60 W each, and they burn for 5 hours every day. Taking one unit of electricity to cost GH¢1.20, find the energy used in a thirty-day month in kilowatt hours and its cost. Then find the cost if every lamp is replaced by a 9 W LED lamp working the same hours.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the relation energy used = power x time, and note that one unit is one kilowatt hour, so power must be changed from watts to kilowatts first.",
          "Step 2 (M1): Total power of the lighting = 5 x 60 W = 300 W = 300/1000 = 0.3 kW.",
          "Step 3 (M1): Energy per day = 0.3 kW x 5 h = 1.5 kWh, so energy in 30 days = 1.5 x 30 = 45 kWh, that is 45 units.",
          "Step 4 (A1): Cost of the incandescent lighting = 45 units x GH¢1.20 = GH¢54.00 for the month.",
          "Step 5 (M1): With LED lamps the total power is 5 x 9 W = 45 W = 0.045 kW, so energy per day = 0.045 x 5 = 0.225 kWh and for 30 days = 6.75 kWh, that is 6.75 units.",
          "Step 6 (A1): Cost of the LED lighting = 6.75 x GH¢1.20 = GH¢8.10 for the month.",
          "Step 7 (A1): Saving = GH¢54.00 - GH¢8.10 = GH¢45.90 per month, so the lamps pay for themselves quickly; the final answers are 45 kWh costing GH¢54.00, and 6.75 kWh costing GH¢8.10."
        ],
        "keyTakeaway": "Always pass through kilowatts and hours, because the unit on the bill is the kilowatt hour, and a cost question with the wrong unit chain cannot earn the answer mark."
      },
      {
        "id": "ex-phy-energy-2",
        "title": "Step-Up Transformer Turns and the Saving on the Line",
        "problem": "A station must send 33 kW of power over a line whose resistance is 20 ohm. The step-up transformer has a 200-turn primary coil and raises the voltage from 11 kV to 132 kV. Find the number of secondary turns, the current in the line at each voltage, and the power wasted as heat in the line in the two cases.",
        "stepByStepSolution": [
          "Step 1 (M1): State the ideal transformer relation Vs/Vp = Ns/Np, so Ns = Np x Vs/Vp.",
          "Step 2 (M1): Turns ratio = 132/11 = 12, which shows the transformer is a step-up because the secondary has more turns.",
          "Step 3 (A1): Secondary turns = 200 x 12 = 2400 turns.",
          "Step 4 (M1): Current follows from power = voltage x current, so I = P/V with P = 33 kW = 33 000 W.",
          "Step 5 (M1): At 11 kV the current is 33 000/11 000 = 3 A; at 132 kV it is 33 000/132 000 = 0.25 A.",
          "Step 6 (M1): Wasted power in the line = I^2 R, so at 3 A it is 3 x 3 x 20 = 180 W, and at 0.25 A it is 0.25 x 0.25 x 20 = 1.25 W.",
          "Step 7 (A1): The ratio of the losses is 180/1.25 = 144, that is 12 squared, the square of the turns ratio; final answers 2400 turns, 3 A and 180 W at 11 kV, 0.25 A and 1.25 W at 132 kV."
        ],
        "keyTakeaway": "Stepping the voltage by 12 cuts the current by 12 and the line loss by 12 squared, which is the whole reason national grids transmit at over a hundred kilovolts."
      }
    ],
    "quiz": {
      "id": "quiz-phy-energy-sources-wiring",
      "topicId": "shs1-phy-t2-energy-sources-generation-household-wiring",
      "title": "Energy Sources and Household Wiring Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-energy-1",
          "quizId": "quiz-phy-energy-sources-wiring",
          "questionText": "Which of the following groups contains only renewable energy sources?",
          "optionA": "Hydro, solar, wind and biomass",
          "optionB": "Coal, solar, wind and diesel",
          "optionC": "Crude oil, natural gas, hydro and nuclear fuel",
          "optionD": "Biomass, nuclear fuel, coal and wave",
          "correctOption": "A",
          "subConcept": "Classification of energy sources",
          "explanation": "Hydro, solar, wind and biomass are all replaced by natural processes within a human lifetime. Every other list hides at least one fixed stock: coal, diesel, crude oil, natural gas and nuclear fuel are non-renewable.",
          "remediationTip": "Make two columns of source names on a card and sort each one by asking whether nature replaces it on the timescale of a lifetime."
        },
        {
          "id": "q-phy-energy-2",
          "quizId": "quiz-phy-energy-sources-wiring",
          "questionText": "A 3 kW electric iron is connected to the 240 V household supply. What is the most suitable plug fuse rating?",
          "optionA": "3 A",
          "optionB": "30 A",
          "optionC": "5 A",
          "optionD": "13 A",
          "correctOption": "D",
          "subConcept": "Fuse rating from I = P/V",
          "explanation": "Working current I = P/V = 3000/240 = 12.5 A, so the smallest standard rating above it is a 13 A fuse. A 3 A or 5 A fuse melts during normal use, and a 30 A fuse lets the cable overheat before operating.",
          "remediationTip": "Practise I = P/V for four common appliances, an iron, a kettle, a fridge and a lamp, and write the fuse you would fit beside each current."
        },
        {
          "id": "q-phy-energy-3",
          "quizId": "quiz-phy-energy-sources-wiring",
          "questionText": "Why is electrical power transmitted at very high voltage instead of at generating voltage?",
          "optionA": "Because high voltage is safer for people near the lines",
          "optionB": "Because it reduces the current, so the I^2 R heating loss in the line is much smaller",
          "optionC": "Because transformers work only above 100 kV",
          "optionD": "Because it makes the electricity arrive faster",
          "correctOption": "B",
          "subConcept": "High-voltage transmission",
          "explanation": "For a fixed power, current is inversely proportional to voltage, and the wasted power is I^2 R, so raising the voltage lowers the loss sharply; 33 kW needs 3 A at 11 kV but only 0.25 A at 132 kV. High voltage is in fact far more dangerous, transformers work at many voltages, and signal speed is not the issue.",
          "remediationTip": "Recompute the two currents and the two I^2 R losses on one sheet of paper and keep it as a reference card."
        },
        {
          "id": "q-phy-energy-4",
          "quizId": "quiz-phy-energy-sources-wiring",
          "questionText": "In a properly wired three-pin socket, what is the function of the earth wire?",
          "optionA": "It carries the working current back to the supply",
          "optionB": "It raises the voltage available at the socket",
          "optionC": "It is bonded to the metal case so a fault current flows and the fuse or breaker operates",
          "optionD": "It saves energy by completing a second circuit",
          "correctOption": "C",
          "subConcept": "Earthing and safety",
          "explanation": "Sound wiring sends no working current through earth; the earth path exists only so that if live touches the case a large fault current flows and the protective device operates at once. Option A describes the neutral, and the earth changes neither voltage nor consumption.",
          "remediationTip": "Trace the fault path with a coloured pencil on a wiring diagram: live to case, case through earth wire, fuse melting."
        },
        {
          "id": "q-phy-energy-5",
          "quizId": "quiz-phy-energy-sources-wiring",
          "questionText": "A prepaid meter charges GH¢1.20 per unit. How many units are used by a 1000 W iron run for 2 hours every day for 30 days?",
          "optionA": "6 kWh",
          "optionB": "60 kWh",
          "optionC": "120 kWh",
          "optionD": "600 kWh",
          "correctOption": "B",
          "subConcept": "The kilowatt hour",
          "explanation": "Energy = power in kW x time in hours = 1 kW x 2 h x 30 days = 60 kWh, that is 60 units costing GH¢72.00. Treating 1000 W as 1000 kW or forgetting to multiply by the days gives the other options.",
          "remediationTip": "Write the two conversions, watts to kilowatts and total minutes to hours, before multiplying anything."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t2-gas-pressure-boyles-law",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Pressure of Trapped Gases and Boyle's Law",
    "description": "Pressure defined for liquids and gases, why the air above us presses down and how a simple barometer reads that, how a manometer compares a trapped gas with the atmosphere, the syringe experiment that fixes the product P times V as constant for a given mass of gas at steady temperature, reading P-V tables and curves, and the practical meaning for a bicycle tyre or a trotro tube on a hot road.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Pressure is force spread over an area, P = F / A, measured in newtons per square metre, the pascal (Pa).\n• Pressure in a liquid at rest grows with depth, P = rho x g x h, and acts equally in all directions at a point.\n• Atmospheric pressure is the weight of the column of air above us, about 1.0 x 10^5 Pa at sea level.\n• A simple mercury barometer balances the air on a column of mercury about 760 mm high; lower air pressure makes the column drop.\n• A U-tube manometer compares a gas pressure with the atmosphere: the gas pressure equals atmospheric pressure plus rho x g x (height difference of the two limbs).\n• Boyle's law: for a fixed mass of gas at constant temperature, pressure is inversely proportional to volume, so P x V stays constant.\n• The working form of Boyle's law is P1 x V1 = P2 x V2; use it whenever temperature and amount of gas are unchanged.\n• A graph of pressure against volume is a curve (hyperbola), but pressure against 1/volume is a straight line through the origin.\n• Squeezing trapped air in a syringe halves its volume and doubles its pressure because the same molecules hit a smaller wall area more often.\n• In a tyre the air mass and volume are almost fixed, so a rise in temperature raises the pressure, which is why a hot tar road can burst an over-inflated tube.",
    "detailedNotes": {
      "overview": "This topic takes pressure from a definition to a working tool. It begins with pressure in fluids at rest, the way liquid pressure rises with depth and the way the whole atmosphere presses on everything at about one hundred thousand pascals. From there it introduces the two instruments that read pressure in the laboratory, the mercury barometer for atmospheric pressure and the manometer for comparing a trapped gas with the air outside. The centre of the topic is Boyle's law, the fixed product of pressure and volume for a given mass of gas held at a steady temperature, learned through a syringe experiment, shown in a table of readings, drawn as a curve, and used in calculation. It closes on the everyday consequences for tyres and tubes, where a change in temperature or volume moves the pressure exactly as the law predicts.",
      "introduction": "Fill a tall transparent bottle with water and make three holes at different heights on one side; the lowest jet shoots furthest, and that one demonstration fixes the depth rule for liquid pressure. Then set up the syringe: trap a column of air with the nozzle closed, push the plunger to halve the visible length, and have students feel how much harder the trapped air pushes back, connecting the squeeze to a rising pressure. Take a full set of readings by adding weights to the plunger and recording the length, converting length to volume, and checking that P times V is roughly constant. Finish the lesson by reading the classroom barometer and linking a low column to the dull rainy weather outside.",
      "realWorldContext": "Pressure of trapped gases is part of Ghanaian work and weather. A mechanic at Suame Magazine pumps a trotro tube to a set reading and knows the tube will swell on the hot tar of the Accra-Cape Coast road, so he leaves a little margin against a burst. A cyclist climbing the hills around Aburi feels the tyre pressure climb as the air warms. In the weather station a barometer dropping below its usual height warns of the rainy season front, and fishermen on the Volta read the falling column before setting out. A pressure cooker, common in homes from Kumasi to Ho, cooks beans faster because the sealed lid lets the steam pressure rise above one atmosphere and lifts the boiling point of the water.",
      "objectives": [
        "Define pressure as force per unit area and state the depth rule P = rho x g x h for a liquid at rest",
        "Explain how a simple barometer reads atmospheric pressure and how a manometer compares a trapped gas with the atmosphere",
        "State Boyle's law and verify from a table of readings that the product P x V is constant at fixed temperature",
        "Use P1 x V1 = P2 x V2 to solve problems and explain the effect of a temperature change on a sealed gas"
      ],
      "sections": [
        {
          "title": "Pressure in Liquids and the Atmosphere",
          "content": "Pressure answers the question of how hard a force presses on each unit of area, and it is written P = F / A, force in newtons over area in square metres, giving the unit newton per square metre, which is called the pascal. The same force gives a higher pressure when it acts on a smaller area, which is why a sharp knife cuts and a nail pierces where a blunt push would not. Inside a liquid at rest the pressure at a point comes from the weight of the liquid above it, so it grows steadily with depth as P = rho x g x h, where rho is the density, g is the gravitational field taken as 10 N/kg in this syllabus, and h is the depth below the surface. A striking feature is that at a given depth the pressure is the same in every direction, sideways as well as downward, so water squirts out horizontally from a hole punched in the side of a tank. Above all of this lies the atmosphere, a deep ocean of air whose weight presses on the ground at about 1.0 x 10^5 Pa at sea level, and because air is a fluid this pressure also acts in all directions and falls as you climb a hill. We do not feel crushed because the pressure inside our bodies and in a sealed container matches the outside air pressure.",
          "bulletPoints": [
            "Pressure P = F / A; unit newton per square metre = pascal (Pa).",
            "Same force, smaller area, higher pressure; that is how a knife or nail works.",
            "Liquid pressure grows with depth: P = rho x g x h, using g = 10 N/kg.",
            "At a fixed depth liquid pressure acts equally in all directions, so a side hole squirts out sideways.",
            "Atmospheric pressure at sea level is about 1.0 x 10^5 Pa and decreases with altitude."
          ],
          "keyTakeaway": "Pressure is force per unit area, liquid pressure rises with depth as rho g h and acts in every direction, and the weight of the air gives a steady background pressure of about 10^5 Pa.",
          "realWorldExample": "A diver working on the bed of a small reservoir near Weija feels greater pressure the deeper he goes, matching rho g h for water, which is why the ear and chest squeeze grow with depth."
        },
        {
          "title": "The Barometer and the Manometer",
          "content": "Two simple instruments make pressure measurable. The barometer reads the atmosphere itself. A long glass tube, closed at one end, is filled with mercury and inverted into a dish of mercury; the column in the tube falls until its weight is balanced by the air pressing on the surface of the mercury in the dish, leaving a vacuum at the top. At sea level the air supports a column about 760 mm tall, and since the pressure of that column is rho g h with mercury density about 13600 kg/m^3, a reading of 760 mm corresponds to roughly 1.0 x 10^5 Pa. When weather changes, the air pressure changes and the column rises or falls, which is why a falling barometer signals unsettled rainy weather. The manometer measures the pressure of a trapped gas relative to the air. It is a U-tube partly filled with liquid, usually water or mercury. One end connects to the gas supply and the other opens to the atmosphere. The gas pushes one limb down and the atmosphere pushes the other, so the two levels differ by a height. The pressure of the gas equals the atmospheric pressure plus the extra pressure from that height difference, gas P = atmospheric P + rho g (difference in limb levels). If the open limb stands higher, the gas is stronger than the atmosphere; reading the height difference and adding rho g h gives the absolute gas pressure. Both instruments rely on the same balance between an unknown pressure and a known column of liquid.",
          "bulletPoints": [
            "A mercury barometer balances air pressure on a column about 760 mm high at sea level.",
            "760 mm of mercury corresponds to about 1.0 x 10^5 Pa of atmospheric pressure.",
            "A falling barometer column signals lower air pressure and often rainy weather.",
            "A manometer has two limbs; the difference in liquid levels shows how the gas pressure differs from atmospheric pressure.",
            "Gas pressure = atmospheric pressure + rho x g x (height difference of the limbs)."
          ],
          "keyTakeaway": "A barometer converts air pressure into a mercury height and a manometer converts a gas pressure into a difference of liquid levels, both using the balance against a known liquid column.",
          "realWorldExample": "The school weather shield keeps a mercury barometer whose daily reading the class records; a steady fall from 762 mm to 748 mm over a week matches the arrival of the wet season over the coast."
        },
        {
          "title": "Boyle's Law: the Constant Product of Pressure and Volume",
          "content": "Robert Boyle found that a fixed mass of gas, kept at the same temperature, obeys a clean rule: pressure and volume are inversely proportional, so when one doubles the other halves, and their product P x V never changes. The name for this statement is Boyle's law, written P proportional to 1/V at constant temperature, or as the equation P1 x V1 = P2 x V2 for the same gas in two states. The classroom proof uses a syringe with the nozzle sealed so air is trapped; the plunger length gives the volume, and pressing with measured weights raises the pressure while the trapped volume shrinks. Each pair of readings multiplies to the same product within experimental error, confirming the constant. On a graph, pressure plotted against volume gives a smooth curve bending toward both axes, a hyperbola, so a candidate must know that this curve is not a straight line; rearranging to plot pressure against 1/V produces a straight line through the origin, which is the sure sign of the inverse relation. The molecular picture is simple: at fixed temperature the molecules keep the same average speed, so squeezing them into half the room doubles how often they strike a given area of wall and therefore doubles the pressure. This is why a bicycle pump forces more air, at higher pressure, into a tyre, and why a sealed tube left on a hot road rises in pressure as the gas warms.",
          "bulletPoints": [
            "Boyle's law: for a fixed mass of gas at constant temperature, P x V is constant.",
            "Working equation for two states: P1 x V1 = P2 x V2.",
            "P vs V is a curve (hyperbola); P vs 1/V is a straight line through the origin.",
            "Syringe experiment: halve the volume and the pressure doubles if temperature is fixed.",
            "Molecular reason: at constant temperature, smaller volume means more collisions per second on the wall."
          ],
          "keyTakeaway": "Boyle's law fixes the product of pressure and volume for a given mass of gas at steady temperature, so the syringe, the pump and the bursting tube all obey P1 V1 = P2 V2.",
          "realWorldExample": "A pump at a filling station forces air into a trotro tyre; as the same air is driven into the smaller fixed space of the tube its pressure climbs in line with Boyle law until the tube is firm."
        }
      ],
      "commonMistakes": [
        "Applying P1 V1 = P2 V2 when the temperature has changed; Boyle law holds only at constant temperature, so a warmed sealed gas is not a simple pressure-volume case.",
        "Using a pressure in kPa in one state and Pa in the other without converting, or mixing cm^3 and m^3, which throws the ratio out even though the equation is set up correctly.",
        "Drawing pressure against volume as a straight line; the correct P-V graph is a curve, and the straight line only appears when pressure is plotted against 1/volume.",
        "Reading a manometer as the gas pressure being just the height difference; that difference must be added to the atmospheric pressure to give the absolute gas pressure."
      ],
      "wassceExamTips": [
        "In Paper 1, if a question says the temperature is constant and the volume is halved, answer that the pressure doubles without calculating, because Boyle law makes the product constant.",
        "In Paper 2, when asked to verify Boyle law from readings, complete the third column P x V and state that the values are equal within experimental error; that completed table earns the method marks.",
        "Choose units that cancel: keep volume in cm^3 on both sides and pressure in the same unit, so P1 V1 = P2 V2 gives P2 directly; a unit mismatch is a common cause of an otherwise correct method losing the answer mark.",
        "In Paper 3 alternative practical a manometer or barometer may be described; know that absolute gas pressure equals atmospheric pressure plus rho g h for the limb difference, and state h as the difference of the two readings."
      ],
      "summaryChecklist": [
        "Can I define pressure as force per unit area and compute liquid pressure with P = rho g h?",
        "Can I explain how a barometer measures atmospheric pressure and how a manometer measures a gas pressure?",
        "Can I state Boyle's law and say which graph is a straight line and which is a curve?",
        "Can I use P1 V1 = P2 V2 with consistent units to find an unknown pressure or volume?",
        "Can I explain, in molecular terms, why squeezing a gas raises its pressure and why heating a sealed tyre raises it?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-gas-pressure-boyles-law-1",
        "title": "Boyle's Law with a Trapped Air Column in a Syringe",
        "problem": "Air is trapped in a syringe with the nozzle closed. At room temperature the trapped volume is 60 cm3 and its pressure equals the atmospheric pressure, 1.0 x 10^5 Pa. The plunger is pushed in slowly until the volume is 40 cm3 while the temperature stays constant. Find the new pressure of the trapped air and show that the product P x V is unchanged.",
        "stepByStepSolution": [
          "Step 1 (M1): Apply Boyle law for the two states, P1 x V1 = P2 x V2, valid because temperature and mass of gas are constant.",
          "Step 2 (M1): Rearrange for the unknown pressure, P2 = P1 x V1 / V2 = (1.0 x 10^5 Pa x 60 cm3) / 40 cm3.",
          "Step 3 (A1): P2 = 1.0 x 10^5 x 60 / 40 = 1.5 x 10^5 Pa.",
          "Step 4 (M1): Check the constant product: initial P1 x V1 = 1.0 x 10^5 x 60 = 6.0 x 10^6 (Pa cm3).",
          "Step 5 (A1): Final P2 x V2 = 1.5 x 10^5 x 40 = 6.0 x 10^6 (Pa cm3), equal to the initial product, confirming Boyle law.",
          "Step 6 (M1): Note the volume units cm3 cancel in the ratio, so they need not be changed to m3 as long as both states use cm3."
        ],
        "keyTakeaway": "Compressing the trapped air from 60 cm3 to 40 cm3 raises its pressure to 1.5 x 10^5 Pa, and the product stays 6.0 x 10^6, proving P x V is constant."
      },
      {
        "id": "ex-phy-gas-pressure-boyles-law-2",
        "title": "Absolute Gas Pressure from a Water Manometer",
        "problem": "An open U-tube manometer filled with water is connected to a gas cylinder. The water in the open limb stands 34 cm higher than the water in the limb joined to the gas. The atmospheric pressure is 1.0 x 10^5 Pa, the density of water is 1000 kg/m3 and g = 10 N/kg. Find the extra pressure from the water column and the absolute pressure of the gas.",
        "stepByStepSolution": [
          "Step 1 (M1): Extra pressure from the water column is rho x g x h = 1000 x 10 x 0.34, with h converted from 34 cm to 0.34 m.",
          "Step 2 (A1): Extra pressure = 3400 Pa.",
          "Step 3 (M1): The gas supports the atmosphere plus the water column, so gas P = atmospheric P + rho g h = 1.0 x 10^5 + 3400.",
          "Step 4 (A1): Gas pressure = 1.034 x 10^5 Pa.",
          "Step 5 (M1): Since the open limb is higher, the gas is above atmospheric pressure; had the open limb been lower the gas pressure would be atmospheric minus rho g h."
        ],
        "keyTakeaway": "A 34 cm water column adds 3400 Pa, so the gas pressure is 1.034 x 10^5 Pa; always read which limb is higher before adding or subtracting rho g h."
      }
    ],
    "quiz": {
      "id": "quiz-phy-gas-pressure-boyles-law",
      "topicId": "shs1-phy-t2-gas-pressure-boyles-law",
      "title": "Gas Pressure and Boyle's Law Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-gas-pressure-boyles-law-1",
          "quizId": "quiz-phy-gas-pressure-boyles-law",
          "questionText": "Which statement is Boyle's law for a fixed mass of gas?",
          "optionA": "Pressure is directly proportional to temperature at constant volume.",
          "optionB": "Volume is directly proportional to pressure at constant temperature.",
          "optionC": "Pressure times temperature is constant for a fixed mass of gas.",
          "optionD": "Pressure times volume is constant for a fixed mass of gas at constant temperature.",
          "correctOption": "D",
          "subConcept": "Statement of Boyle's law",
          "explanation": "Boyle's law says that for a given mass of gas at unchanged temperature the product P x V is constant, so pressure and volume vary inversely. Option A describes the pressure-temperature law, B reverses the relation, and C pairs pressure with the wrong quantity.",
          "remediationTip": "Keep each gas law tied to the quantity it holds fixed; Boyle keeps temperature fixed and links only pressure and volume."
        },
        {
          "id": "q-phy-gas-pressure-boyles-law-2",
          "quizId": "quiz-phy-gas-pressure-boyles-law",
          "questionText": "A fixed mass of gas at constant temperature has its volume reduced to one half. What happens to its pressure?",
          "optionA": "It doubles.",
          "optionB": "It halves.",
          "optionC": "It stays the same.",
          "optionD": "It becomes four times larger.",
          "correctOption": "A",
          "subConcept": "Pressure-volume ratio",
          "explanation": "Because P x V is constant, halving the volume forces the pressure to double so the product is unchanged. On a molecular view the same molecules now strike a smaller wall area twice as often.",
          "remediationTip": "Say it as a trade: whatever happens to the volume, the pressure does the opposite by the same factor."
        },
        {
          "id": "q-phy-gas-pressure-boyles-law-3",
          "quizId": "quiz-phy-gas-pressure-boyles-law",
          "questionText": "For a fixed mass of gas at constant temperature, which graph is a straight line through the origin?",
          "optionA": "Pressure against volume.",
          "optionB": "Volume against pressure.",
          "optionC": "Pressure against one over volume.",
          "optionD": "Temperature against volume.",
          "correctOption": "C",
          "subConcept": "Gas graphs",
          "explanation": "Since P is proportional to 1/V, plotting P against 1/V gives a straight line through the origin. The graph of P against V is a hyperbola, a curve, not a straight line, and temperature is held constant so it is not on the axis.",
          "remediationTip": "When two quantities multiply to a constant, the straight line comes from plotting one against the reciprocal of the other."
        },
        {
          "id": "q-phy-gas-pressure-boyles-law-4",
          "quizId": "quiz-phy-gas-pressure-boyles-law",
          "questionText": "A sealed tube of air is left on a hot road and the pressure inside rises. The best explanation is that warming the gas",
          "optionA": "creates more molecules inside the tube.",
          "optionB": "makes the molecules move faster and strike the walls harder and more often.",
          "optionC": "lowers the volume of the metal tube to nothing.",
          "optionD": "turns the air into a liquid that presses outward.",
          "correctOption": "B",
          "subConcept": "Effect of temperature on a sealed gas",
          "explanation": "In a rigid sealed tube the volume and mass of gas are fixed, but heating raises the average molecular speed, so collisions with the wall are more forceful and frequent and the pressure climbs. No new molecules are made and the air does not condense.",
          "remediationTip": "Separate the two changes: squeezing raises pressure by volume, heating raises it by molecular speed; name which one the question uses."
        },
        {
          "id": "q-phy-gas-pressure-boyles-law-5",
          "quizId": "quiz-phy-gas-pressure-boyles-law",
          "questionText": "A simple mercury barometer reads 760 mm at sea level. What is the approximate atmospheric pressure it represents?",
          "optionA": "1.0 x 10^5 Pa",
          "optionB": "7.6 x 10^4 Pa",
          "optionC": "1.0 x 10^3 Pa",
          "optionD": "1.36 x 10^5 Pa",
          "correctOption": "A",
          "subConcept": "Barometer reading",
          "explanation": "A column of mercury about 760 mm high balances the weight of the air, which is roughly 1.0 x 10^5 Pa at sea level. Using rho g h with mercury density 13600 kg/m3 and h = 0.76 m and g = 10 gives about 1.03 x 10^5 Pa, close to the standard value; option D is the density, not the pressure.",
          "remediationTip": "Fix the pair in memory: 760 mm of mercury equals about 1 atmosphere equals about 1.0 x 10^5 Pa."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t2-hydraulics-pascal-law-machines",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Hydraulics and Pascal's Law in Ghanaian Machines",
    "description": "How a confined liquid carries pressure unchanged from one piston to another as Pascal's law, why a small effort on a small piston lifts a great load on a large piston in the ratio of their areas, the conservation of energy that trades a long effort stroke for a short load lift, and the real machines this runs in Ghanaian life, from car and lorry brakes and workshop jacks to excavator arms, with the leaks and air locks that spoil them.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Pascal's law: a change of pressure applied to a confined liquid is passed on undiminished to every part of the liquid and the walls of its container.\n• A liquid is used because it is almost incompressible, so pressure applied at one point appears at another point almost at once.\n• Pressure is force per area, so a small force on a small piston creates the same pressure as a large force on a large piston.\n• Force multiplication: F1 / A1 = F2 / A2, so F2 = F1 x (A2 / A1); the load force is the effort force times the ratio of the piston areas.\n• Mechanical advantage of a hydraulic machine equals the ratio of the areas, A2 / A1.\n• A long stroke on the small piston gives a short lift on the large piston; the work input equals the work output only for an ideal, leak-free machine.\n• Work conservation: F1 x d1 = F2 x d2, so the distance moved is inversely proportional to the force.\n• Hydraulic brakes, jacks and excavator arms all use the same idea: a modest effort becomes a powerful, controlled force.\n• Air is compressible, so an air lock in a brake line makes the pedal spongy and the machine weak; bleeding removes the trapped air.\n• Leaks past seals and worn pumps lose the pressure, so maintenance on site and in the workshop keeps hydraulics safe and strong.",
    "detailedNotes": {
      "overview": "This topic shows how liquids let a person command a force far beyond muscle. It opens with Pascal's law, the rule that a pressure change made in a confined liquid travels through it untouched, which is what makes hydraulic transmission possible at all. From that law it develops the two-piston machine, where a small effort on a small-area piston lifts a big load on a big-area piston, with the multiplication equal to the ratio of the areas. It then stresses the honest price: energy is not created, so the small piston must travel a long way while the large piston rises a short way, and the distances trade against the forces. The topic lands on the machines a Ghanaian student meets, the brakes of a car and a lorry, the jack that lifts a trotro to change a wheel, the arm of an excavator at a building site, and on the faults that defeat them, air locks and leaks, which maintenance must correct.",
      "introduction": "Take two medical syringes of different size, join their nozzles with a short tube filled with water, and have one student press the small plunger while another feels the large plunger rise strongly; the water carries the pressure across and the big piston delivers a bigger force. Ask the class to weigh the effort they felt against the lift obtained and to compare it with the ratio of the plunger diameters squared. Then show a photograph of a brake master cylinder and wheel cylinder and explain why a foot on the pedal stops a whole vehicle. Close by bleeding a demonstration brake line to show what trapped air does, connecting the lesson to the spongy pedal a driver complains of.",
      "realWorldContext": "Hydraulics move much of Ghanaian work. At a building site in East Legon an excavator uses hydraulic rams in its arm to scoop soil, each ram extending as pressurised oil is driven into it. A fitter at Suame Magazine raises a loaded trotro on a hydraulic jack with one hand because the oil multiplies his small effort a hundredfold. Heavy lorries on the Accra-Tema motorway depend on hydraulic braking, and a driver who lets air into the line knows the pedal sinks and the load surges forward. Even the roadside vulcaniser uses a hydraulic press to mount a tyre. On every one of these the site rule is the same: keep the seals tight, keep the oil clean and keep the air out, or the machine that lifts a tonne stops lifting at all.",
      "objectives": [
        "State Pascal's law and explain why a confined, nearly incompressible liquid is used to transmit pressure",
        "Derive and apply the force relation F2 = F1 x (A2 / A1) for a two-piston hydraulic machine",
        "Explain how energy is conserved by the trade between the effort distance and the load distance, F1 d1 = F2 d2",
        "Describe the working of hydraulic brakes and jacks and the effect of air locks and leaks on their performance"
      ],
      "sections": [
        {
          "title": "Pascal's Law and the Transmission of Pressure",
          "content": "Pascal's law states that when the pressure at one point of a confined liquid is changed, that change is carried through the whole liquid without loss and reaches every part of the container equally. Solids do not behave this way; a push along a rod stays a push along that rod. A liquid is different because it flows and cannot be squeezed into a smaller space to any noticeable degree, being almost incompressible, so a force applied to a piston pressed on the liquid creates a pressure that appears everywhere inside at once, including on a second piston at another point. This is the trick that lets a machine transmit force around corners and through tubes, since the liquid simply follows the pipework. To make the pressure meaningful we recall that pressure is force divided by area, P = F / A. If a piston of area A1 is pushed with a force F1, it produces a pressure F1 / A1 in the liquid. Pascal's law says this same pressure acts on any other piston in contact with the liquid. So a second piston of area A2 feels a pressure F1 / A1 and therefore a total force equal to that pressure multiplied by its own area. Because the pressure is shared but the areas differ, the forces differ, and that is the entire secret of a hydraulic machine, a force emerging where and when you need it.",
          "bulletPoints": [
            "Pascal's law: a pressure change in a confined liquid is transmitted undiminished throughout the liquid.",
            "Liquids are used because they are almost incompressible and follow pipes, so they carry pressure around corners.",
            "Pressure created by the effort piston is P = F1 / A1.",
            "The same pressure acts on the load piston, so it produces a force on that piston equal to pressure times its area.",
            "A modest effort becomes a large force because the force depends on the area the shared pressure acts over."
          ],
          "keyTakeaway": "Pascal's law means a liquid passes pressure unchanged, so a small force on a small piston produces a proportionally larger force on a larger piston.",
          "realWorldExample": "At a filling station the attendant presses a small hydraulic ram and the oil carries that pressure to a wide piston that lifts the nose of a loaded van, letting one person raise a weight no person could lift by hand."
        },
        {
          "title": "Force Multiplication and the Price in Distance",
          "content": "The strength of a hydraulic machine comes straight from the ratio of the two piston areas. Equal pressure acts on both pistons, so F1 / A1 equals F2 / A2, and rearranging gives the load force as F2 = F1 x (A2 / A1). The factor A2 / A1 is the mechanical advantage, the number of times the machine multiplies the effort. If the large piston has an area one hundred times the small piston, a 50 N effort lifts a 5000 N load, enough for a sack of cement or the corner of a car. Students must then meet the crucial limit: this is not free energy. No machine can give out more work than is put in, and work equals force times distance. The small piston must be pushed through a long stroke while the large piston rises only a short way, and the trade is fixed by F1 x d1 = F2 x d2 for an ideal leak-free machine. In the 50 N lifting 5000 N example, if the effort piston moves down 40 cm, the load piston rises only 40 / 100 = 0.4 cm. A big force over a tiny distance is bought with a small force over a long distance, which is exactly the same bargain a lever or a block and tackle strikes. Recognising this distance trade protects a candidate from ever claiming that hydraulics create energy.",
          "bulletPoints": [
            "Equal pressure on both pistons gives F1 / A1 = F2 / A2, so F2 = F1 x (A2 / A1).",
            "Mechanical advantage of the hydraulic machine = A2 / A1, the ratio of the piston areas.",
            "Energy is not created; work input equals work output for an ideal machine.",
            "The distance trade is F1 x d1 = F2 x d2, so the large force moves through the small distance.",
            "A greater mechanical advantage means the effort must travel even farther for the same lift."
          ],
          "keyTakeaway": "The machine multiplies force by the area ratio but pays for it with distance, since F1 d1 = F2 d2 keeps the work in equal to the work out.",
          "realWorldExample": "A workshop jack with a piston area ratio of 100 lets a mechanic raise a trotro axle, but the handle must be pumped many short strokes to lift the heavy axle by only a centimetre or two."
        },
        {
          "title": "Hydraulic Machines, Faults and Maintenance",
          "content": "These two principles run the machines around us. In a hydraulic brake, the driver presses a pedal that pushes a small master-cylinder piston; the brake fluid carries that pressure through steel lines to larger pistons, the wheel cylinders or a caliper, which force the brake pads onto a disc or drum and stop the wheel. Because the same pressure reaches every wheel at once, all four brakes bite together and gently, which is what makes braking safe and smooth on the motorway. A hydraulic jack works in the same way to lift a load for a repair, and the arms of an excavator extend and retract by oil-driven rams, giving the slow, immense pushing force a digger needs to break ground. Every hydraulic system depends on the liquid staying incompressible and the pressure staying full, so two faults matter greatly. First, air locks: because air squashes easily, any bubble trapped in a brake line soaks up the effort, the pedal travels down without building pressure, and the driver feels a soft, spongy pedal that may fail to stop the vehicle; the cure is bleeding, opening a valve to expel air and refill with fluid. Second, leaks: worn seals and a cracked hose let fluid escape, pressure drops and the machine loses its strength or, in a brake, loses its ability to stop at all. Preventive maintenance on site and in the workshop, keeping fluid clean, checking seals and bleeding the lines, is what keeps these powerful machines dependable.",
          "bulletPoints": [
            "A hydraulic brake uses a small master piston and larger wheel pistons so a light foot press stops a heavy vehicle.",
            "A hydraulic jack and an excavator arm are both driven by pressurised liquid acting on a piston.",
            "Air locks make the system soft because air is compressible; bleeding removes the trapped air.",
            "Leaks from worn seals or hoses lower the pressure and weaken or defeat the machine.",
            "Regular maintenance, clean fluid, tight seals and bleeding are essential for safe hydraulic work."
          ],
          "keyTakeaway": "Brakes, jacks and diggers all use one pressure-carrying liquid, and their safety rests on keeping that liquid sealed and free of compressible air.",
          "realWorldExample": "A lorry driver at the Suame transport yard complains of a sinking brake pedal, and the mechanic finds an air lock in the line; after bleeding the system the pedal firms up and the brakes hold the laden lorry on a slope."
        }
      ],
      "commonMistakes": [
        "Claiming a hydraulic machine produces more energy than it takes in; the larger output force is paid for by a proportionally shorter travel distance.",
        "Using the ratio of piston diameters instead of the ratio of areas; since area is proportional to the diameter squared, a doubling of diameter gives a fourfold force, not a twofold one.",
        "Forgetting to convert cm^2 to m^2 consistently, or mixing force units, so the pressure F / A comes out wrong; keeping both areas in the same unit cancels the need for conversion.",
        "Saying the pedal sinks in a brake because the fluid is heavy; the true cause is a compressible air lock absorbing the effort, not the weight of the liquid."
      ],
      "wassceExamTips": [
        "In Paper 1, when a question gives piston diameters, first square them to get the area ratio; examiners set a distractor that uses the diameters directly to catch this slip.",
        "In Paper 2, quote the relation F1 / A1 = F2 / A2 or F2 = F1 x (A2 / A1) before substituting, because the stated law earns the method mark even if arithmetic then fails.",
        "For a distance part, write the energy statement F1 x d1 = F2 x d2 and solve for the load distance; a big force over a small distance is the correct trade and the marking scheme expects it.",
        "In Paper 3 alternative practical, if a hydraulic or syringe setup is described, be ready to explain why air must be excluded, since trapped air makes the measured movement much smaller than theory."
      ],
      "summaryChecklist": [
        "Can I state Pascal's law and give the reason a liquid is chosen to transmit pressure?",
        "Can I derive and use F2 = F1 x (A2 / A1) to find the load force and the mechanical advantage?",
        "Can I apply F1 d1 = F2 d2 to find how far each piston moves?",
        "Can I explain how a hydraulic brake and a hydraulic jack work?",
        "Can I describe the harm done by air locks and leaks and the maintenance that prevents them?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-hydraulics-pascal-law-machines-1",
        "title": "Force Multiplication in a Hydraulic Jack",
        "problem": "A hydraulic jack has a small effort piston of area 5 cm2 and a large load piston of area 500 cm2. A mechanic pushes down on the small piston with a force of 50 N. Find the pressure transmitted by the liquid, the mechanical advantage of the jack, and the load that the large piston can lift.",
        "stepByStepSolution": [
          "Step 1 (M1): The pressure created in the liquid is P = F1 / A1 = 50 N / 5 cm2.",
          "Step 2 (A1): P = 10 N per cm2, and by Pascal law this same pressure acts on the load piston.",
          "Step 3 (M1): The load force equals the pressure times the area of the large piston, F2 = P x A2 = 10 N/cm2 x 500 cm2.",
          "Step 4 (A1): F2 = 5000 N.",
          "Step 5 (M1): Mechanical advantage = A2 / A1 = 500 cm2 / 5 cm2 = load / effort = 5000 / 50.",
          "Step 6 (A1): Mechanical advantage = 100, so the jack multiplies the effort a hundredfold."
        ],
        "keyTakeaway": "With an area ratio of 100, a 50 N effort creates a pressure of 10 N per cm2 and lifts a 5000 N load, giving a mechanical advantage of 100."
      },
      {
        "id": "ex-phy-hydraulics-pascal-law-machines-2",
        "title": "The Distance Trade and Conservation of Energy",
        "problem": "For the same jack, the mechanic pushes the effort piston down through 40 cm. Assuming an ideal machine with no leak and no friction, find how far the load piston rises, using the principle that the work done by the effort equals the work done on the load.",
        "stepByStepSolution": [
          "Step 1 (M1): For an ideal hydraulic machine, work in equals work out, so F1 x d1 = F2 x d2.",
          "Step 2 (M1): Rearrange for the load distance, d2 = F1 x d1 / F2 = (50 N x 40 cm) / 5000 N.",
          "Step 3 (A1): d2 = 2000 / 5000 = 0.4 cm.",
          "Step 4 (M1): Convert to metres for checking: d2 = 0.004 m, and d1 = 0.40 m.",
          "Step 5 (A1): The large force of 5000 N rises only 0.4 cm while the small force of 50 N travels 40 cm, so energy is traded, not created."
        ],
        "keyTakeaway": "The 5000 N load rises just 0.4 cm for every 40 cm stroke of the 50 N effort, which is the energy price of a hundredfold force multiplication."
      }
    ],
    "quiz": {
      "id": "quiz-phy-hydraulics-pascal-law-machines",
      "topicId": "shs1-phy-t2-hydraulics-pascal-law-machines",
      "title": "Hydraulics and Pascal's Law Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-hydraulics-pascal-law-machines-1",
          "quizId": "quiz-phy-hydraulics-pascal-law-machines",
          "questionText": "Which statement gives Pascal's law correctly?",
          "optionA": "A pressure applied to a confined liquid is transmitted undiminished throughout the liquid.",
          "optionB": "A pressure applied to a gas is always increased by the container.",
          "optionC": "A force on a liquid makes the liquid heavier.",
          "optionD": "Pressure in a liquid acts only downward and never sideways.",
          "correctOption": "A",
          "subConcept": "Statement of Pascal's law",
          "explanation": "Pascal's law holds that a pressure change made anywhere in a confined liquid passes through the whole liquid without loss, which is why a small piston can drive a large one. Options about the liquid gaining weight or acting only downward misread the law.",
          "remediationTip": "Pair the two words pressure and undiminished whenever the law is named; a confined liquid copies the pressure everywhere."
        },
        {
          "id": "q-phy-hydraulics-pascal-law-machines-2",
          "quizId": "quiz-phy-hydraulics-pascal-law-machines",
          "questionText": "In a hydraulic machine the small piston has area 4 cm2 and the large piston has area 400 cm2. What is the mechanical advantage?",
          "optionA": "4",
          "optionB": "40",
          "optionC": "100",
          "optionD": "1600",
          "correctOption": "B",
          "subConcept": "Mechanical advantage from areas",
          "explanation": "Mechanical advantage equals the area ratio A2 / A1 = 400 / 4 = 40, so the load force is forty times the effort. Squaring or multiplying the areas wrongly gives the other answers; the ratio of the given areas is the answer.",
          "remediationTip": "For hydraulic advantage, divide the big area by the small area; do not square unless the question gives diameters."
        },
        {
          "id": "q-phy-hydraulics-pascal-law-machines-3",
          "quizId": "quiz-phy-hydraulics-pascal-law-machines",
          "questionText": "A hydraulic brake pedal feels soft and sinks toward the floor. The most likely cause is",
          "optionA": "the brake fluid being too dense.",
          "optionB": "the large piston being too big.",
          "optionC": "air trapped in the brake line absorbing the effort.",
          "optionD": "the master cylinder area being too small.",
          "correctOption": "C",
          "subConcept": "Air locks in brakes",
          "explanation": "Air is compressible, so a bubble in the line takes up the pedal stroke without building pressure, giving a spongy sinking pedal; bleeding expels the air and restores firm braking. The density or size of parts is not the fault here.",
          "remediationTip": "Whenever a hydraulic control feels soft or sinks, name trapped air as the cause and bleeding as the fix."
        },
        {
          "id": "q-phy-hydraulics-pascal-law-machines-4",
          "quizId": "quiz-phy-hydraulics-pascal-law-machines",
          "questionText": "For an ideal hydraulic machine, if the effort force is 60 N with a mechanical advantage of 50, and the effort piston moves 50 cm, how far does the load rise?",
          "optionA": "25 cm",
          "optionB": "10 cm",
          "optionC": "2.5 cm",
          "optionD": "1 cm",
          "correctOption": "D",
          "subConcept": "Distance trade",
          "explanation": "The distance moved is inversely proportional to the force, so load distance = effort distance / mechanical advantage = 50 cm / 50 = 1 cm. This follows from F1 d1 = F2 d2; a fiftyfold force means a fiftyfold reduction in travel.",
          "remediationTip": "A large force over a short distance is bought by a small force over a long distance; divide the travel by the same factor you multiplied the force."
        },
        {
          "id": "q-phy-hydraulics-pascal-law-machines-5",
          "quizId": "quiz-phy-hydraulics-pascal-law-machines",
          "questionText": "Why is a liquid, rather than a gas, used to transmit force in a hydraulic system?",
          "optionA": "Liquids are almost incompressible, so applied pressure is passed on at once.",
          "optionB": "Liquids are easier to see than gases.",
          "optionC": "Liquids expand greatly when heated.",
          "optionD": "Liquids carry no pressure at all in a closed tube.",
          "correctOption": "A",
          "subConcept": "Choice of working fluid",
          "explanation": "A nearly incompressible liquid converts the effort almost fully into pressure that travels instantly to the other piston, whereas a gas would squander part of the stroke simply compressing itself. Visibility and expansion are not the reason.",
          "remediationTip": "Link the choice of fluid to one property, incompressibility; if the fluid squashes, the machine loses its strength."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t2-relative-velocity-frames-of-reference",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 11,
    "title": "Relative Velocity and Frames of Reference",
    "description": "How the velocity of one body depends on the observer who measures it, how to find the velocity of an object as seen from another moving object by vector subtraction, the classic boat crossing a river with a current, upstream and downstream timing, rain falling on a moving trotro, and why choosing an origin and a frame of reference is the first step in any motion problem.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A frame of reference is a chosen origin with axes, fixed to an observer; all measurements of position and velocity are made from that frame.\n• Velocity is relative: the same body has different velocities when measured from different frames, so you must always say relative to what.\n• The velocity of A relative to B is found by vector subtraction: v(A for B) = v(A) - v(B).\n• Adding velocities that point the same way uses their sum; velocities at right angles combine by vector addition and the Pythagorean theorem.\n• A boat pointed straight across a river has its crossing time set only by its own speed across the current, so a stronger current does not slow the crossing.\n• The current adds a downstream component, so the boat drifts downstream by current speed times crossing time while the true path is diagonal.\n• The boat speed over the ground is the vector sum of its still-water speed and the river speed.\n• Upstream the effective speed is boat speed minus current speed; downstream it is boat speed plus current speed.\n• A passenger in a moving trotro sees rain that falls straight down to the ground slant toward the back, because the rain has a relative horizontal velocity.\n• Choosing a fixed point on the bank as the frame gives the ground speed; choosing the moving boat or vehicle gives the relative speed seen inside it.",
    "detailedNotes": {
      "overview": "This topic removes the hidden assumption that a speed is just a number. Motion is always measured from somewhere, and the place and state of motion of the observer, the frame of reference, decide what velocity is recorded. The lesson develops relative velocity as a vector subtraction, showing that the speed of one body seen from another is their velocity difference taken as vectors. It then works the standard river problems: a boat crossing a flowing river, where the crossing time comes from the component straight across while the current adds a downstream drift, and a boat travelling upstream and downstream, where the current either helps or opposes. It closes on a scene a student knows, rain that seems to slant inside a moving trotro, and uses it to fix the habit of naming the frame before computing anything.",
      "introduction": "Draw the river on the board with bank lines and arrows showing the current. Place a dot for a boat aimed straight across and ask how long to reach the far bank if the water were still; then add the current and ask what changes and what does not, guiding the class to see the crossing time stay fixed while the landing point shifts downstream. Act out the trotro rain scene with two students, one walking steadily while another throws paper scraps straight down, so the walker sees them sweep backward. Throughout, insist that every answer begins by stating the frame, the bank, the boat or the vehicle, before any number is written.",
      "realWorldContext": "Relative velocity is at work across Ghanaian travel and trade. A fisherman punting a canoe on Lake Volta near Kete-Krachi must aim upstream of his landing point to hold a straight line over the ground against the current. A trotro driver racing the onset of a storm watches the rain appear to fall diagonally across the windscreen even when it drops vertically outside, because the moving vehicle and the rain share a relative velocity. On the Bui waterway near Tarkwa an operator crossing the flood calculates the time straight across from the boat speed, knowing the current only adds a drift. At the Tema harbour a pilot matching the speed of a moving gangway to a drifting vessel is thinking entirely in relative velocity.",
      "objectives": [
        "Define a frame of reference and explain why the velocity of a body depends on the frame from which it is measured",
        "Use vector subtraction to find the velocity of one moving body as observed from another",
        "Analyse a boat crossing a flowing river and compute the crossing time, the drift and the speed over the ground",
        "Compute the effective speeds of a boat travelling upstream and downstream and the total time of a round trip"
      ],
      "sections": [
        {
          "title": "Frames of Reference and Relative Velocity",
          "content": "Before any motion can be measured there must be a place to measure it from, and that place is a frame of reference, a chosen origin with set axes, imagined fixed to a particular observer. A person standing on the roadside uses the ground frame, a passenger uses the vehicle frame, and each assigns different velocities to the very same object. This is not confusion but physics, because velocity is relative: a book resting on the seat of a trotro moving at 15 m/s has a velocity of zero in the trotro frame but 15 m/s in the ground frame, and both answers are right for their observer. To find the velocity of one body as seen from another, the velocities are treated as vectors and subtracted. If a car moves at velocity v A and a van at velocity v B, both measured on the ground, then the car as seen by the van driver has velocity v A minus v B. When the two travel the same way at 20 m/s and 15 m/s, the driver of the faster vehicle sees the slower one creeping backward at 5 m/s; when they travel toward each other, the relative speed is the sum. The single skill that carries the whole topic is drawing the velocity arrows to scale and combining them with the rules for vectors, never simply adding numbers as if every arrow pointed the same way.",
          "bulletPoints": [
            "A frame of reference is a chosen origin and set of axes fixed to an observer.",
            "Velocity is relative, so the same body has different velocities in different frames.",
            "Velocity of A seen from B is the vector difference v(A for B) = v(A) - v(B).",
            "Same direction, subtract speeds; opposite direction, add speeds.",
            "Always name the frame before stating a velocity, otherwise the number has no meaning."
          ],
          "keyTakeaway": "Every velocity is measured from a frame, and the velocity seen from a moving frame is found by subtracting the observer velocity from the object velocity as vectors.",
          "realWorldExample": "A student asleep on a trotro to Kumasi is at rest relative to the seat beside her but is moving at the full road speed relative to a trader standing outside the station."
        },
        {
          "title": "A Boat Crossing a Flowing River",
          "content": "The river crossing is the cleanest way to see perpendicular velocity components working alone. Suppose a boat can travel at 4 m/s in still water and is pointed straight toward the opposite bank, while the river flows sideways at 3 m/s. The two motions are at right angles, so the boats actual velocity over the ground is the vector sum of them, found by Pythagoras, the square root of 4 squared plus 3 squared, which is 5 m/s, and its direction slants downstream. The key insight concerns time. The boat reaches the far bank as fast as its straight-across component, 4 m/s, allows, because that component alone carries it toward the bank; the sideways current adds a horizontal push but takes nothing away from the crossing speed. So if the river is 60 m wide, the crossing time is 60 divided by 4, that is 15 s, and a stronger current would not lengthen this time. What the current does change is where the boat lands: during the 15 s of crossing it is carried downstream by the current at 3 m/s, a drift of 3 x 15 = 45 m. To land directly opposite the start, the boat must aim upstream at an angle so that the upstream part of its own velocity exactly cancels the current, leaving only straight-across motion. Mastering this one figure, that crossing time depends on the perpendicular component and the drift depends on the current, unlocks almost every river question on an exam.",
          "bulletPoints": [
            "The ground speed of the boat is the vector sum of its still-water velocity and the river current.",
            "For perpendicular velocities the magnitude is the square root of the sum of the squares.",
            "Crossing time uses only the straight-across component: time = width divided by the across velocity.",
            "A stronger current does not slow the crossing; it only increases the downstream drift.",
            "Drift downstream = current speed x crossing time.",
            "To land opposite the start, aim upstream so the forward component cancels the current."
          ],
          "keyTakeaway": "Crossing a river, the straight-across speed fixes the time while the current is free to add a drift, so the two perpendicular velocities must be handled separately.",
          "realWorldExample": "A canoe on the Volta aimed square across from Adomi will be swept a long way downstream before reaching the far bank, so the paddler heads partly upstream to arrive at the landing stage opposite."
        },
        {
          "title": "Upstream, Downstream and Rain on a Moving Vehicle",
          "content": "When the boat travels along the river rather than across it, the current and the boat act in a straight line and their effects simply add or subtract. Going downstream, with the current behind it, the boat speed over the ground is its still-water speed plus the current speed; going upstream, fighting the flow, the effective speed is the still-water speed minus the current speed. This asymmetry means a trip of a given distance takes longer upstream than downstream even though the distance is the same, because the speed is smaller. For a boat at 5 m/s in still water on a river flowing at 2 m/s, downstream gives 7 m/s and upstream gives 3 m/s, so over a stretch of 420 m the downstream leg takes 420 / 7 = 60 s while the upstream leg takes 420 / 3 = 140 s, a total of 200 s for the two directions. A round trip therefore takes longer than the same distance on still water, a fact that trips up candidates who average the two speeds naively. The same vector thinking explains a familiar sight: rain that falls vertically to someone on the ground appears to slant toward the rear window of a moving trotro, because to the vehicle the raindrops carry a horizontal velocity equal and opposite to the vehicle speed. The faster the trotro runs, the more the rain seems to sweep sideways, and the driver must point the wipers at the resultant apparent direction, not the true vertical.",
          "bulletPoints": [
            "Downstream speed over ground = still-water speed + current speed.",
            "Upstream speed over ground = still-water speed - current speed.",
            "The same distance takes longer upstream than downstream because the effective speed is smaller.",
            "Total round-trip time = distance / downstream speed + distance / upstream speed.",
            "Rain falling vertically on the ground seems to slant in a moving vehicle because of the relative horizontal velocity."
          ],
          "keyTakeaway": "Along a river the current adds downstream and subtracts upstream, and in a moving vehicle the vertical rain gains a relative horizontal slant, both pure consequences of vector addition.",
          "realWorldExample": "A passenger in a trotro speeding toward Cape Coast sees the rain streak diagonally across the glass even though a bystander at the roadside sees it drop straight down."
        }
      ],
      "commonMistakes": [
        "Adding perpendicular velocities as ordinary numbers, giving 4 + 3 = 7 m/s for a river crossing, when they are at right angles and combine by Pythagoras to 5 m/s.",
        "Believing a stronger current slows a boat crossing straight to the opposite bank; the crossing time comes from the perpendicular component and is unchanged by the current.",
        "Using the downstream speed for both legs of a journey, so the upstream time is wrong; the current must be subtracted for the upstream speed.",
        "Forgetting to state the frame of reference and reporting a relative speed as though it were the ground speed, which changes the meaning of the number."
      ],
      "wassceExamTips": [
        "In Paper 1, if a boat heads straight across a river, answer the crossing-time question using only the boat speed across, never the resultant 5 m/s; the current is not part of that division.",
        "In Paper 2, draw a labelled velocity triangle for every river problem, marking the boat velocity, the current and the resultant, and the vector method marks follow from a correct diagram.",
        "When a round-trip time is required, compute upstream and downstream times separately and add them; examiners award a mark for each leg and refuse a single averaged-speed answer.",
        "In Paper 3 alternative practical, motion relative to a chosen frame may be tested with a trolley and a marker; state clearly which frame the measurement belongs to, ground or trolley."
      ],
      "summaryChecklist": [
        "Can I define a frame of reference and explain why velocity is relative to the observer?",
        "Can I find the velocity of one body seen from another by vector subtraction?",
        "Can I work out the crossing time, the downstream drift and the ground speed of a boat crossing a river?",
        "Can I compute the upstream and downstream effective speeds and the total time of a round trip?",
        "Can I explain why rain appears to slant inside a moving vehicle using relative velocity?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-relative-velocity-frames-of-reference-1",
        "title": "Boat Crossing a River with a Current",
        "problem": "A canoe can travel at 4 m/s in still water and is pointed straight across a river that flows at 3 m/s. The river is 60 m wide. Find the canoe speed over the ground, the time to reach the far bank, and how far downstream the canoe drifts during the crossing.",
        "stepByStepSolution": [
          "Step 1 (M1): The two velocities are at right angles, so the ground speed is found by Pythagoras, sqrt of (4^2 + 3^2).",
          "Step 2 (A1): Ground speed = sqrt of (16 + 9) = sqrt of 25 = 5 m/s.",
          "Step 3 (M1): The crossing time uses only the straight-across component of 4 m/s, so time = width / across speed = 60 / 4.",
          "Step 4 (A1): Crossing time = 15 s, and the current does not change this time.",
          "Step 5 (M1): Downstream drift = current speed x crossing time = 3 m/s x 15 s.",
          "Step 6 (A1): Downstream drift = 45 m."
        ],
        "keyTakeaway": "Pointing straight across, the canoe moves at 5 m/s over the ground, crosses in 15 s, and is swept 45 m downstream, since the crossing time depends only on the 4 m/s across component."
      },
      {
        "id": "ex-phy-relative-velocity-frames-of-reference-2",
        "title": "Upstream and Downstream Round-Trip Time",
        "problem": "A boat travels at 5 m/s in still water on a river flowing at 2 m/s. It covers 420 m downstream and then 420 m back upstream. Find the downstream speed, the upstream speed, the time for each leg, and the total time for the round trip.",
        "stepByStepSolution": [
          "Step 1 (M1): Downstream speed = still-water speed + current = 5 + 2.",
          "Step 2 (A1): Downstream speed = 7 m/s.",
          "Step 3 (M1): Upstream speed = still-water speed - current = 5 - 2.",
          "Step 4 (A1): Upstream speed = 3 m/s.",
          "Step 5 (M1): Time = distance / speed, so downstream time = 420 / 7 and upstream time = 420 / 3.",
          "Step 6 (A1): Downstream time = 60 s and upstream time = 140 s.",
          "Step 7 (M1): Total time = downstream time + upstream time = 60 + 140.",
          "Step 8 (A1): Total time for the round trip = 200 s."
        ],
        "keyTakeaway": "The current raises the downstream speed to 7 m/s and lowers the upstream speed to 3 m/s, so the same 420 m takes 60 s downstream but 140 s upstream, 200 s in all."
      }
    ],
    "quiz": {
      "id": "quiz-phy-relative-velocity-frames-of-reference",
      "topicId": "shs1-phy-t2-relative-velocity-frames-of-reference",
      "title": "Relative Velocity and Frames of Reference Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-relative-velocity-frames-of-reference-1",
          "quizId": "quiz-phy-relative-velocity-frames-of-reference",
          "questionText": "A passenger sits on a bus moving at 12 m/s. What is the velocity of the passenger relative to a person standing at the bus stop?",
          "optionA": "Zero.",
          "optionB": "12 m/s.",
          "optionC": "6 m/s.",
          "optionD": "24 m/s.",
          "correctOption": "B",
          "subConcept": "Frames of reference",
          "explanation": "Relative to the standing observer on the ground, the passenger shares the full speed of the bus, 12 m/s. The passenger is only at rest in the bus frame, so the answer depends entirely on the chosen frame of reference.",
          "remediationTip": "Ask first, whose frame am I measuring from; the ground frame gives the bus speed, the bus frame gives zero."
        },
        {
          "id": "q-phy-relative-velocity-frames-of-reference-2",
          "quizId": "quiz-phy-relative-velocity-frames-of-reference",
          "questionText": "Two cars travel the same road in the same direction at 25 m/s and 20 m/s. What is the velocity of the faster car as seen by the driver of the slower car?",
          "optionA": "45 m/s ahead.",
          "optionB": "25 m/s ahead.",
          "optionC": "5 m/s ahead.",
          "optionD": "5 m/s behind.",
          "correctOption": "C",
          "subConcept": "Relative velocity by subtraction",
          "explanation": "Velocities in the same direction combine by subtraction, so the faster car is seen pulling ahead at 25 - 20 = 5 m/s. The sum of 45 m/s would apply only if the cars were moving toward each other.",
          "remediationTip": "Same direction, subtract; opposite direction, add; decide the directions before touching the numbers."
        },
        {
          "id": "q-phy-relative-velocity-frames-of-reference-3",
          "quizId": "quiz-phy-relative-velocity-frames-of-reference",
          "questionText": "A boat is pointed straight across a river while the current flows sideways. If the current becomes stronger, the time to reach the far bank",
          "optionA": "increases, because the boat is pushed harder.",
          "optionB": "decreases, because the boat gains speed.",
          "optionC": "depends on the width of the boat, not the current.",
          "optionD": "stays the same, because the crossing time depends only on the straight-across component.",
          "correctOption": "D",
          "subConcept": "Independent perpendicular components",
          "explanation": "The motion across and the motion downstream are perpendicular and act independently. The current adds a drift but does not change the speed aimed at the far bank, so the crossing time is fixed by the across component alone.",
          "remediationTip": "Treat a river crossing as two separate problems: the across leg fixes the time, the current leg only moves the landing point."
        },
        {
          "id": "q-phy-relative-velocity-frames-of-reference-4",
          "quizId": "quiz-phy-relative-velocity-frames-of-reference",
          "questionText": "A boat that moves at 5 m/s straight across a 60 m wide river is swept by a current of 3 m/s. How far downstream does it drift by the time it reaches the far bank?",
          "optionA": "36 m",
          "optionB": "45 m",
          "optionC": "20 m",
          "optionD": "60 m",
          "correctOption": "A",
          "subConcept": "Downstream drift",
          "explanation": "The crossing time is the width divided by the straight-across speed, 60 / 5 = 12 s, and during that time the current carries the boat 3 x 12 = 36 m downstream. The value 45 m would come only from an across speed of 4 m/s, so recompute the time from the given 5 m/s before multiplying by the current.",
          "remediationTip": "First find the crossing time from the across speed, then multiply that time by the current; drift always uses the current speed, never the boat speed."
        },
        {
          "id": "q-phy-relative-velocity-frames-of-reference-5",
          "quizId": "quiz-phy-relative-velocity-frames-of-reference",
          "questionText": "Rain falls vertically to a person on the ground. To the driver of a van moving forward at speed, the rain appears to",
          "optionA": "fall straight down as before.",
          "optionB": "slant from behind toward the windshield.",
          "optionC": "rise upward off the road.",
          "optionD": "stand still in the air.",
          "correctOption": "B",
          "subConcept": "Rain on a moving vehicle",
          "explanation": "In the van frame the vertical rain also carries a horizontal velocity opposite the van motion, so it looks as though the drops come at the windshield from the front-top, slanting toward the rear. The faster the van, the steeper the apparent slant.",
          "remediationTip": "Picture dropping a coin inside a moving trotro; to you it falls straight but to someone outside it follows a slant, the same relative-velocity idea."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t3-work-energy-power-machines",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 4,
    "title": "Work, Energy, Power and Simple Machines",
    "description": "Work as energy transfer with W = Fs cos θ, kinetic and gravitational potential energy and their interchange under conservation of energy, power as the rate of working, and the mechanical advantage, velocity ratio and efficiency of the pulley block, the inclined plane and the wheel and axle.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Work is done only when a force moves its own point of application, \"W = F s cos θ\", and the joule is one newton metre, so work and energy share the unit kg m² s⁻².\n• The angle is not decoration: a 60 N pull on a rope inclined at 60° to the ground moves a tray 8.0 m and does \"60 x 8.0 x cos 60° = 60 x 8.0 x 0.5 = 240 J\", because only the component along the motion works.\n• Two standard zero-work cases are carrying a load level at constant speed, where the lifting force is at right angles to the displacement, and holding a load motionless, where s = 0.\n• Uniform speed means unchanged kinetic energy, so the energy supplied must be leaving by friction; for the tray above, friction = 240 J/8.0 m = 30 N.\n• Kinetic energy is \"KE = 1/2 mv²\": a 2.0 kg stone running at 6.0 m s⁻¹ carries 1/2 x 2.0 x 36 = 36 J.\n• Gravitational potential energy is \"PE = mgh\": a 5.0 kg bag on a shelf 3.0 m above the floor holds 5.0 x 10 x 3.0 = 150 J.\n• Conservation of energy says energy is neither created nor destroyed, only transformed, so a real machine always returns less useful energy than it is given.\n• Free fall shows the interchange: 5.0 kg dropped from 20 m loses 1000 J of PE and gains 1000 J of KE, giving \"v = √(2gh) = √(2 x 10 x 20) = 20 m s⁻¹\" whatever the mass.\n• Power is the rate of working, \"P = W/t\" in watts with 1 W = 1 J s⁻¹; a 40 N pull that moves a crate 6.0 m in 12 s gives 240 J of work and 20 W of power.\n• A student of weight 500 N who climbs 6.0 m in 10 s does 3000 J of work and develops 300 W, which is roughly the output of a strong human being for a short burst.\n• Pumping is power in disguise: 200 kg of water lifted every minute through 12 m needs \"P = mgh/t = 200 x 10 x 12/60 = 400 W\" of mechanical power, more after motor losses.\n• Mechanical advantage is \"MA = load/effort\", velocity ratio is \"VR = distance moved by effort/distance moved by load\", and for a frictionless machine MA = VR.\n• Efficiency is \"η = (work output/work input) x 100 = (MA/VR) x 100\" and is always below 100 per cent because of friction and the weight of the moving parts.\n• A pulley block with VR 4 that raises a 200 N load with 60 N has MA = 200/60 = 3.33 and η = (3.33/4) x 100 = 83.3 per cent; work in 60 x 4 = 240 J, work out 200 x 1 = 200 J, wasted 40 J.\n• An inclined plane 5.0 m long resting on a 1.0 m platform has VR = 5.0/1.0 = 5 and an ideal effort of 300/5 = 60 N for a 300 N drum; a real pull of 80 N gives MA = 3.75 and η = 75 per cent, with 400 J in, 300 J out and 100 J lost.\n• A wheel and axle of radii 0.40 m and 0.10 m has VR = 0.40/0.10 = 4, and 50 N of effort raising a 160 N load gives MA = 3.2 and η = 80 per cent.\n• No machine saves work; each trades a long movement of a small force for a short movement of a large force, and that trade is exactly what the velocity ratio states.",
    "detailedNotes": {
      "overview": "This topic converts forces and distances into energy accounting. You will define mechanical work by W = Fs cos θ and learn why a force at right angles to a displacement does nothing, then quantify kinetic energy and gravitational potential energy and follow one into the other under conservation of energy. Power is then introduced as the rate at which the accounting is done, which separates a strong worker from a fast one. The last part is the arithmetic of simple machines: mechanical advantage, velocity ratio and efficiency, applied to the pulley block, the inclined plane and the wheel and axle, the three machines a WAEC paper can put in front of you with numbers attached.",
      "introduction": "Do the algebra with your hands first. Lift a book to a shelf and say its mgh aloud, then drag a loaded tray with a spring balance at an angle and notice that the pull you feel and the work you do are not simply force times distance. Set up the pulley block on the laboratory stand, measure the distance the effort string pays out against the height the load gains, and only then compute the velocity ratio from your own numbers. Every formula in this topic is short, so the marks are won by unit care and by stating which distance belongs to the effort and which to the load.",
      "realWorldContext": "Ghana runs on these conversions. The water stored behind the Akosombo and Kpong dams holds gravitational potential energy because of its height, and ECG engineers count on that head of water: as it falls through the penstock the potential energy becomes kinetic energy, the runner and turbine turn it into electrical energy, and any energy not converted appears as heat and noise in the machine house. On a building site at East Legon a hoist with a pulley block lets one worker raise bags of cement that four could not lift by hand, and the plank up which a drum is rolled to a lorry bed is the inclined plane doing the same job more slowly. A school borehole pump in Tamale that delivers 200 kg of water every minute through 12 m is quietly asking for 400 W of mechanical power, and the motor selected for it must exceed that figure.",
      "objectives": [
        "Calculate the work done by a force inclined to a displacement using W = Fs cos θ",
        "Compute kinetic and gravitational potential energy and describe their interchange in a falling body",
        "State the principle of conservation of energy and apply it to simple machines",
        "Calculate power as the rate of doing work in joules per second",
        "Determine mechanical advantage, velocity ratio and efficiency for a pulley block, an inclined plane and a wheel and axle"
      ],
      "sections": [
        {
          "title": "Work as the Transfer of Energy",
          "content": "In physics, work has a narrow and exact meaning. A force does work when, and only when, its point of application moves along the line of the force, and the amount is the product of the force, the displacement and the cosine of the angle between them. That cosine is the whole difference between the everyday word and the scientific one. A labourer who drags a tray of mortar with a rope inclined at 60° to the ground pulls with 60 N over 8.0 m, and the work he delivers to the tray is 60 times 8.0 times cos 60°, that is 240 J, because the horizontal component 60 cos 60° = 30 N is the part acting along the motion. The vertical component, 60 sin 60° = 52 N, does no work at all, since the tray does not rise; it merely reduces the normal reaction and therefore the friction. Two zero-work cases recur in examination papers. A student who carries a bag of rice level at constant speed exerts an upward force while the displacement is horizontal, so the two are perpendicular and cos 90° = 0. A student who stands still holding a 5.0 kg bag at arm’s length exerts 50 N but moves nothing, so s = 0 and the work on the bag is zero, however tired the arm becomes. Muscles do consume chemical energy in that pose, but none of it is delivered to the bag as mechanical work, and the syllabus asks about the bag.",
          "bulletPoints": [
            "Definition: \"W = F s cos θ\", measured in joules, with 1 J = 1 N m.",
            "Worked case: 60 N at 60° over 8.0 m gives 60 x 8.0 x 0.5 = 240 J.",
            "The perpendicular component does no work because there is no displacement in its direction.",
            "Carrying a load horizontally involves a vertical force and zero work on the load.",
            "Holding a load motionless gives zero work because s = 0, even though the force is real.",
            "Work done against friction appears as heat, which is why a rope and a plank warm during a long drag."
          ],
          "keyTakeaway": "Only the component of force along the displacement does work, so an inclined pull counts partly and a stationary hold counts not at all.",
          "realWorldExample": "A mule driver or a tricycle operator at a Kasoa building site keeps the tow rope as horizontal as he can, because a rope pulled steeply wastes a large part of the effort in lifting the load instead of moving it along the ground."
        },
        {
          "title": "Kinetic Energy, Potential Energy and Conservation",
          "content": "Energy is the capacity to do work, and a body may store it in two ways relevant here. A moving body carries kinetic energy equal to one half the mass times the square of the speed, so a 2.0 kg stone running at 6.0 m s⁻¹ holds 1/2 x 2.0 x 6.0² = 36 J. Note that the speed is squared: doubling the speed quadruples the energy, which is why the stopping distance of a vehicle rises so steeply with speed and why a lorry at 60 km h⁻¹ is far more dangerous than one at 30. A body raised in a gravitational field carries potential energy mgh, so a 5.0 kg bag on a shelf 3.0 m up holds 5.0 x 10 x 3.0 = 150 J relative to the floor. The two forms interchange without loss in an ideal case. Drop a 5.0 kg object from a height of 20 m and its initial potential energy is 5.0 x 10 x 20 = 1000 J; as it falls, that 1000 J becomes kinetic energy, and just before impact 1/2 x 5.0 x v² = 1000, so v² = 400 and v = 20 m s⁻¹. The same answer comes from v² = u² + 2as, and the mass cancels, which is the reason heavy and light objects fall at the same rate in the absence of air resistance. The conservation principle is what you invoke when you say that the energy a machine puts out must be less than the energy put in, with the balance appearing as heat in bearings and ropes, as sound, and as the small amount of energy stored in lifting the moving parts of the machine itself.",
          "bulletPoints": [
            "Kinetic energy \"KE = 1/2 mv²\": 2.0 kg at 6.0 m s⁻¹ gives 36 J.",
            "Speed is squared, so doubling the speed makes the kinetic energy four times as large.",
            "Potential energy \"PE = mgh\": 5.0 kg at 3.0 m gives 150 J, and 5.0 kg at 20 m gives 1000 J.",
            "A 5.0 kg body falling 20 m converts 1000 J of PE into 1000 J of KE and reaches \"v = √(2gh) = 20 m s⁻¹\".",
            "The fall speed from a given height is independent of mass, because mass cancels from the energy equation.",
            "Energy is transformed rather than destroyed, so output energy is always below input energy in a real machine."
          ],
          "keyTakeaway": "Height stores energy as mgh and motion stores it as one half mv squared, and in a frictionless fall the two simply exchange places.",
          "realWorldExample": "The head of water at the Akosombo reservoir is the store of potential energy that ECG counts on; the greater the height through which the water is allowed to fall, the more kinetic energy reaches the turbine blades."
        },
        {
          "title": "Power: the Rate at Which Work Is Done",
          "content": "Two workers may do exactly the same job and deserve different ratings. Both raise a 3000 J load to the same shelf, but one takes thirty seconds and the other takes five minutes; the physics quantity that separates them is power, the work done per unit time, measured in watts where one watt is one joule per second. A 40 N pull that moves a crate 6.0 m along a level floor in 12 s delivers 40 times 6.0 = 240 J of work and therefore works at 240/12 = 20 W. A student whose weight is 500 N and who runs up a flight of stairs gaining 6.0 m of height in 10 s has done 500 x 6.0 = 3000 J against gravity, so his average power is 300 W, which is a hard but honest human effort sustained for a few seconds only. Machines are rated the same way, and the calculation for lifting fluids is a standing favourite in structured papers: a pump that delivers 200 kg of water every minute through a vertical height of 12 m must supply gravitational energy at the rate 200 x 10 x 12 joules per 60 s, that is 400 W of mechanical output, so the electrical motor driving it must be rated above 400 W once belt and winding losses are added. Power also explains why a trotro climbing a steep gradient selects a low gear: the engine can supply a limited power, and reducing the speed is the only way to raise the tractive force available at the wheels.",
          "bulletPoints": [
            "Power is \"P = W/t = energy transferred/time\", measured in watts with 1 W = 1 J s⁻¹.",
            "Worked case: 40 N over 6.0 m in 12 s gives 240 J of work and 20 W of power.",
            "A 500 N student climbing 6.0 m in 10 s develops 3000 J and 300 W.",
            "Pumping 200 kg of water each minute through 12 m needs 400 W of mechanical power.",
            "For a fixed power, force and speed trade against each other, which is what low gears exploit on a hill.",
            "Convert minutes to seconds before dividing: 1 minute is 60 s, not 100 s."
          ],
          "keyTakeaway": "Work tells you how much energy moved; power tells you how fast it moved, and machines and muscles are rated by the second quantity.",
          "realWorldExample": "The maintenance officer of a school borehole in Tamale checks the nameplate of the pump motor against the duty of lifting water some 12 m, because an under-rated motor will trip or will deliver water far more slowly than the tank schedule assumes."
        },
        {
          "title": "Mechanical Advantage, Velocity Ratio and Efficiency of Machines",
          "content": "A simple machine multiplies force without ever multiplying work. Mechanical advantage is the ratio of load to effort: a pulley block that raises a 200 N load with an effort of 60 N has MA = 200/60 = 3.33. Velocity ratio is the geometric ratio of distances: the same block pays out 4.0 m of rope for every 1.0 m the load rises, so VR = 4, and it can be predicted from the number of pulleys, the radii of a wheel and axle, or the length and height of an inclined plane without any force being measured at all. In a frictionless machine the two ratios would be equal and the efficiency 100 per cent, but real machines must waste energy overcoming friction in the blocks and lifting their own moving parts, so MA is always below VR. Efficiency is the product of that comparison: for the pulley block, eta = (MA/VR) x 100 = (3.33/4) x 100 = 83.3 per cent, and the same figure appears from energy, since the input is 60 x 4.0 = 240 J, the useful output is 200 x 1.0 = 200 J, and the 40 J balance becomes heat and noise. Take the inclined plane used on a lorry bed: a plank 5.0 m long resting on a platform 1.0 m high has VR = 5, so a 300 N drum ideally needs 60 N of pull; when the actual pull is measured at 80 N, MA = 300/80 = 3.75 and efficiency is 3.75/5, that is 75 per cent, with 400 J supplied, 300 J useful and 100 J lost to friction. A wheel and axle with radii 0.40 m and 0.10 m gives VR = 4, and 50 N of effort raising 160 N gives MA = 3.2 and eta = 80 per cent.",
          "bulletPoints": [
            "Mechanical advantage \"MA = load/effort\"; for the pulley block MA = 200/60 = 3.33.",
            "Velocity ratio \"VR = distance moved by effort/distance moved by load\"; here VR = 4.0/1.0 = 4.",
            "Efficiency \"η = (MA/VR) x 100 = (work output/work input) x 100\", always under 100 per cent.",
            "Pulley block check: input 60 x 4 = 240 J, output 200 x 1 = 200 J, wasted 40 J, giving 83.3 per cent.",
            "Inclined plane: length 5.0 m over height 1.0 m gives VR = 5 and MA = 3.75, so η = 75 per cent and 100 J is lost.",
            "Wheel and axle of radii 0.40 m and 0.10 m: VR = 4, MA = 160/50 = 3.2 and η = 80 per cent.",
            "A machine multiplies force by demanding a proportionally longer movement; it never multiplies energy."
          ],
          "keyTakeaway": "Velocity ratio is fixed by the geometry of the machine, mechanical advantage is what friction allows you to get, and efficiency is simply the second as a fraction of the first.",
          "realWorldExample": "At a hoisting point on a building at Achimota the foreman uses a four-part pulley block rather than four men on a rope, accepting that only about 83 per cent of the work his men put in reaches the load, because the rest disappears in the friction of the sheaves."
        }
      ],
      "commonMistakes": [
        "Reporting work done for a force inclined to the motion as F times s with no cosine, so a 60 N pull at 60° over 8.0 m is entered as 480 J instead of the correct 240 J.",
        "Claiming that a student carrying a bag level along a corridor does work on the bag, when the supporting force is vertical, the displacement horizontal, and the work on the bag is zero.",
        "Writing kinetic energy as mv² instead of one half mv², which doubles every answer, or squaring the speed wrongly by first doubling it.",
        "Confusing mechanical advantage with velocity ratio, then reporting an efficiency above 100 per cent and not noticing that such a machine cannot exist.",
        "Dividing work by a time left in minutes, so 240 J in 12 s is quoted as 20 J per minute, or forgetting that one minute is 60 s in a pump question.",
        "Using the length of an inclined plane as the distance the load rises, so the height of 1.0 m is replaced by 5.0 m and the potential energy of the drum is overstated five times over."
      ],
      "wassceExamTips": [
        "Paper 1 asks one-line machine questions, for example the velocity ratio of a plane 6 m long and 1.5 m high; answer with the ratio of distances, 4, and do not be tempted by any force figure printed beside it.",
        "In Paper 2 show the formula, the substitution with units, and the answer with units on separate lines; a correct numerical answer reached without the formula line usually loses the method mark.",
        "When a machine question gives both an effort distance and a load distance, compute VR from those distances before touching the forces, then find MA and only then efficiency, as examiners expect the three labels stated distinctly.",
        "For conservation and fall questions, write PE at the top equals KE at the bottom, cancel the mass explicitly, and quote g = 10 m s⁻² so that v = 20 m s⁻¹ from 20 m can be checked at a glance.",
        "Paper 3 alternative to practical gives you a pulley block or an inclined plane with a spring balance, a metre rule and a load; tabulate effort, effort distance, load and load distance, repeat for three loads, and plot or compute the efficiency for each, because a single reading cannot show the trend the question is looking for.",
        "State the sources of energy loss in words, friction and the weight of moving parts, since that qualitative part is separately marked and is often the only part weak candidates omit."
      ],
      "summaryChecklist": [
        "Can I compute the work done by a force inclined to a displacement and explain the role of cos θ?",
        "Can I identify the two situations in which a force does no work on a body?",
        "Can I calculate kinetic and potential energy and follow one changing into the other in a fall?",
        "Can I find power from work and time, including a pumping duty given per minute?",
        "Can I state MA, VR and efficiency for a pulley block, an inclined plane and a wheel and axle?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-work-1",
        "title": "Dragging a Mortar Tray with an Inclined Rope",
        "problem": "A labourer drags a tray of mortar 8.0 m along level ground at steady speed. He pulls on a rope inclined at 60° to the horizontal with a force of 60 N. Find the work he does on the tray, the work done against friction, the frictional force, and the vertical component of his pull.",
        "stepByStepSolution": [
          "Step 1 (M1): List the forces on the tray: the 60 N pull at 60° to the horizontal, the weight downward, the normal reaction upward, and friction acting backward along the ground; the displacement is 8.0 m horizontally.",
          "Step 2 (M1): Only the force component along the displacement does work, so write \"W = F s cos θ\" with θ = 60°.",
          "Step 3 (M1): Substitute: W = 60 N x 8.0 m x cos 60° = 60 x 8.0 x 0.5.",
          "Step 4 (A1): Work done by the pull = 240 J.",
          "Step 5 (M1): Steady speed means the kinetic energy is unchanged, so the energy supplied must all be taken away by friction; work against friction equals the work input.",
          "Step 6 (A1): Work done against friction = 240 J, hence friction = 240 J/8.0 m = 30 N.",
          "Step 7 (A1): The vertical component is 60 sin 60° = 52 N upward; it does no work because the tray does not rise, but it reduces the normal reaction and is the reason a low, level pull feels heavier."
        ],
        "keyTakeaway": "The inclined pull delivers 240 J over 8.0 m, so friction is 30 N, while its 52 N vertical component does no work at all and merely lightens the tray on the ground."
      },
      {
        "id": "ex-phy-work-2",
        "title": "An Inclined Plane Used to Roll a Drum onto a Platform",
        "problem": "A 300 N drum of water is rolled up a plank 5.0 m long that rests on a platform 1.0 m high. The pull measured along the plank is 80 N. Find the velocity ratio, the mechanical advantage, the efficiency of the plane, and the energy wasted on the way up.",
        "stepByStepSolution": [
          "Step 1 (M1): For an inclined plane the effort moves along the length while the load rises through the height, so VR = length/height = 5.0 m/1.0 m.",
          "Step 2 (A1): Velocity ratio = 5.",
          "Step 3 (M1): Mechanical advantage is the ratio of load to effort, MA = 300 N/80 N.",
          "Step 4 (A1): MA = 3.75, which is less than the velocity ratio exactly as a real machine must be.",
          "Step 5 (M1): Efficiency follows from \"η = (MA/VR) x 100\" = (3.75/5) x 100.",
          "Step 6 (A1): Efficiency = 75 per cent.",
          "Step 7 (A1): Energy check: work input = 80 x 5.0 = 400 J, useful work output = 300 x 1.0 = 300 J, wasted energy = 400 - 300 = 100 J, and 300/400 x 100 = 75 per cent confirms the earlier figure."
        ],
        "keyTakeaway": "The plank gives a velocity ratio of 5 and a mechanical advantage of 3.75, so it works at 75 per cent efficiency and 100 J of the 400 J supplied is lost to friction."
      }
    ],
    "quiz": {
      "id": "quiz-phy-work-energy-power",
      "topicId": "shs1-phy-t3-work-energy-power-machines",
      "title": "Work, Energy, Power and Machines Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-work-1",
          "quizId": "quiz-phy-work-energy-power",
          "questionText": "A constant horizontal force of 40 N pushes a crate 6.0 m along a floor in 12 s. What is the power developed?",
          "optionA": "20 J",
          "optionB": "2.0 W",
          "optionC": "240 W",
          "optionD": "20 W",
          "correctOption": "D",
          "subConcept": "Power as rate of working",
          "explanation": "Work done is 40 x 6.0 = 240 J and power is work over time, 240/12 = 20 W. Option A quotes the work with the wrong unit name, B divides by 120 instead of 12, and C forgets to divide by the time at all.",
          "remediationTip": "Compute the work on one line, then the power on the next, and keep the unit name J or W straight."
        },
        {
          "id": "q-phy-work-2",
          "quizId": "quiz-phy-work-energy-power",
          "questionText": "A student holds a 5.0 kg bag of rice steady at arm’s length for three minutes while standing still. How much work does she do on the bag in that time?",
          "optionA": "150 J",
          "optionB": "0 J",
          "optionC": "50 J",
          "optionD": "450 J",
          "correctOption": "B",
          "subConcept": "Zero work conditions",
          "explanation": "Work needs a displacement along the force. The bag does not move, so s = 0 and the work on it is zero, however tired the arm becomes; the chemical energy spent in the muscle is not delivered to the bag. Option C is the weight 5.0 x 10 = 50 N misread as energy, and A and D invent a height the bag never rose through.",
          "remediationTip": "Ask two questions in order: is there a force, and does its point of application move along that force?"
        },
        {
          "id": "q-phy-work-3",
          "quizId": "quiz-phy-work-energy-power",
          "questionText": "Find the kinetic energy of a 2.0 kg stone moving at 6.0 m s⁻¹.",
          "optionA": "12 J",
          "optionB": "24 J",
          "optionC": "36 J",
          "optionD": "72 J",
          "correctOption": "C",
          "subConcept": "Kinetic energy",
          "explanation": "KE = 1/2 mv² = 1/2 x 2.0 x 6.0² = 36 J. Option D comes from omitting the one half and writing mv², A from failing to square the speed, and B from halving the correct result twice.",
          "remediationTip": "Square the speed first, then multiply by the mass, then take the half; three small steps beat one long line."
        },
        {
          "id": "q-phy-work-4",
          "quizId": "quiz-phy-work-energy-power",
          "questionText": "A pulley block has a velocity ratio of 4 and raises a load of 200 N with an effort of 60 N. What is its efficiency?",
          "optionA": "83 per cent",
          "optionB": "75 per cent",
          "optionC": "100 per cent",
          "optionD": "30 per cent",
          "correctOption": "A",
          "subConcept": "Efficiency of machines",
          "explanation": "MA = 200/60 = 3.33, so efficiency = (MA/VR) x 100 = (3.33/4) x 100 = 83.3 per cent, confirmed by output 200 x 1 = 200 J against input 60 x 4 = 240 J. Option B is the efficiency of the 5 m to 1 m inclined plane, C assumes a frictionless machine, and D inverts the ratio.",
          "remediationTip": "Write MA, then VR, then the ratio of the two; efficiency above 100 per cent always means the two have been swapped."
        },
        {
          "id": "q-phy-work-5",
          "quizId": "quiz-phy-work-energy-power",
          "questionText": "An inclined plane is 5.0 m long and rests on a platform 1.0 m high. What is its velocity ratio?",
          "optionA": "4",
          "optionB": "5",
          "optionC": "6",
          "optionD": "0.20",
          "correctOption": "B",
          "subConcept": "Velocity ratio of an inclined plane",
          "explanation": "VR = distance moved by effort divided by distance moved by load = length of plane/height = 5.0/1.0 = 5. Option D inverts the ratio, and A and C come from adding or subtracting the two measurements instead of dividing them.",
          "remediationTip": "For a plane always divide length by height, never height by length, because the effort travels the longer distance."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t3-heat-transfer-conduction-convection-radiation",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 6,
    "title": "Heat Transfer: Conduction, Convection and Radiation",
    "description": "Conduction through solids and the rate of heat flow, convection currents in fluids with land and sea breezes and room ventilation, radiation with black and shiny surfaces, the vacuum flask, and the roofing, insulation and cooling choices that follow in the Ghanaian climate.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Heat moves in three ways only: conduction through a solid or a still fluid, convection by the bulk motion of a fluid, and radiation by electromagnetic waves that need no material at all.\n• Conduction passes from particle to particle by vibration, and in metals also by free electrons that travel quickly through the lattice, which is why copper and aluminium conduct far better than brick, wood or air.\n• The rate of heat flow through a slab is proportional to area and temperature difference and inversely proportional to thickness: Q/t = k A (theta2 - theta1) / d, with k the thermal conductivity of the material.\n• A 0.20 m brick wall of area 10 m^2 with 42 °C outside and 30 °C inside, k = 0.7 W per m per °C, carries 0.7 x 10 x 12 / 0.2 = 420 W, and doubling the thickness halves that flow while doubling the area doubles it.\n• Good conductors are used where heat must move fast, a cooking pot base, a radiator, a heat sink; insulators are used where it must not, a plastic handle, a cork mat, a thatched roof, sawdust packing.\n• Convection starts when a fluid is heated, expands, becomes less dense and rises while cooler denser fluid sinks to take its place, so the current carries energy with the moving matter.\n• Warm air rises, therefore a ventilator or louvre is placed high in a room and cold air is admitted low; a fume hood, a kitchen chimney and a classroom with open transom windows all run on that single fact.\n• Boiling water in a pot is a convection demonstration: heat enters at the base, the hot water rises in the middle and the cooler water descends at the walls, which is why the base is heated and never the top.\n• Land and sea breezes are convection on a coast scale: by day the sand warms faster, air over it rises and cooler air flows in from the sea as the sea breeze; by night the sand cools faster and the flow reverses as the land breeze.\n• Radiation travels at the speed of light, 3.0 x 10^8 m per s, crosses a vacuum, and is mainly the infra-red part of the spectrum, so the warmth felt from a fire or a hot roof sheet is not carried by the air.\n• Dull black surfaces are the best absorbers and the best emitters of radiation, while bright polished surfaces are the worst of both and act as reflectors; a body at twice the absolute temperature radiates about sixteen times faster, since emission goes with the fourth power of temperature.\n• The vacuum flask cuts all three transfers: double walls with the air pumped out stop conduction and convection, the silvered inner surfaces reflect radiation, cork or plastic supports and a thin stopper limit conduction, and the narrow neck reduces convection currents.\n• In the Ghanaian climate a hot tin roof absorbs most of the noon sun, so reflective paint, a ventilated air space, a false ceiling or thatch keeps the room below cooler than solid concrete or uninsulated aluminium sheeting.\n• Evaporation cools because the fastest molecules escape and take energy with them: the latent heat of vaporisation of water is 2.26 x 10^6 J per kg, so 0.1 kg of sweat evaporating removes 226 000 J, enough to raise 3.6 kg of water by 15 °C.\n• Cooling by a wet cloth, a porous calabash of water sweating on a shelf, and a water cooler with a wick all use evaporation, which works better in the dry harmattan than in the humid coast.",
    "detailedNotes": {
      "overview": "This topic organises everything about heat movement into three mechanisms and then applies them to buildings, flasks, breezes and cooling in Ghana. You will describe conduction as particle-to-particle transfer, helped in metals by free electrons, and use Q/t = k A delta theta / d to compare walls and lagging. You will explain convection currents in air and water, apply them to room ventilation, to boiling and to the daily reversal of the land and sea breeze, and then treat radiation as an electromagnetic wave that crosses empty space, absorbed best by dull black surfaces and reflected best by bright polished ones. The vacuum flask, the roof-space air gap and evaporative cooling tie the three mechanisms together, and every example is one you can test with your hand.",
      "introduction": "Work from contact and observation: place one end of a copper rod and a wooden dowel in hot water and compare the other ends, then watch the motion of sawdust in a beaker of water heated at the centre of the base. For radiation use two tin cans, one blackened with candle smoke and one polished, each with a thermometer, and expose them to the noon sun for twenty minutes; record readings every two minutes and plot the two curves on the same axes. Keep a table of the three mechanisms with the medium each needs, the direction of travel and one Ghanaian application, because the exam asks for the classification as much as the explanation.",
      "realWorldContext": "A room with a corrugated aluminium roof in Tamale can be several degrees hotter than the ground outside by three in the afternoon, because the bright sheet still absorbs a large share of the noon sun and then conducts and re-radiates that heat inward, while a thatched or false-ceilinged room with a ventilated air gap stays noticeably cooler. Coastal towns such as Elmina and Anloga feel the daily convection reversal directly: the sea breeze cools the afternoon, and by the small hours the wind off the cooler land sends the fishing boats out with the tide. Market water sellers cool drinking water in a porous calabash or a clay pot wrapped in a wet sack because escaping vapour carries energy away, and that evaporation works far better in the dry harmattan air than in the humid coast. The Ghanaian solar water heater, the photovoltaic solar water heater popularised in Takoradi, is a radiation and conduction lesson in one object: a black absorber plate, a copper pipe bonded to it, and lagging that keeps the heat inside.",
      "objectives": [
        "Describe conduction, convection and radiation and state the medium and direction of transfer for each",
        "Use Q/t = k A delta theta / d to compare heat flow through slabs of different area, thickness and material",
        "Explain convection currents and apply them to room ventilation, boiling water and the land and sea breeze",
        "Relate surface colour and polish to absorption and emission of radiation and design a simple experiment to prove it",
        "Explain the construction of a vacuum flask and the roofing and cooling choices made for the Ghanaian climate"
      ],
      "sections": [
        {
          "title": "Conduction: Transfer Through a Solid",
          "content": "Conduction is the passage of vibrational energy from particle to particle without any overall movement of the material. In a non-metal the hot end makes its particles vibrate harder and they pass the disturbance along to their neighbours, which is a slow process, so wood, brick, glass, plastic and still air are good insulators. Metals behave differently because they contain free electrons that are not bound to any one atom; when one end is heated these electrons gain energy quickly and travel through the lattice, carrying energy to the cold end far faster than the atomic vibration alone would. That single difference explains the whole list of practical choices: a cooking pot is aluminium so the heat spreads evenly under the flame, its handle is plastic so the hand is not burned, and a thermos cup has an air gap because trapped still air is one of the best available insulators. The rate at which energy crosses a slab is given by Q/t = k A (theta2 - theta1) / d, where k is the thermal conductivity in watts per metre per Celsius degree. For a 0.20 m brick wall of area 10 m^2 with outside air at 42 °C and the room at 30 °C and k about 0.7, the flow is 0.7 x 10 x 12 / 0.2 = 420 W, so one hour of that loss or gain is 420 x 3600 = 1 512 000 J, enough to heat about 36 kg of water by 10 °C. Halving the wall thickness to 0.10 m doubles the flow to 840 W, and doubling the area doubles it too; this proportionality is what examiners test.",
          "bulletPoints": [
            "Non-metals conduct by particle vibration only; metals also conduct by fast free electrons.",
            "Rate of flow Q/t = k A (theta2 - theta1) / d, so more area or bigger difference means more flow, more thickness means less.",
            "The 0.20 m brick wall example gives 420 W for 10 m^2 at 12 °C difference; half the thickness doubles the flow.",
            "Copper and aluminium are chosen for pans, radiators and heat sinks; plastic, wood, cork, air gaps and thatch for lagging.",
            "Trapped air is the working part of most insulations, which is why a wet or compressed lagging loses its effect."
          ],
          "keyTakeaway": "Conduction needs no flowing material, only a temperature difference and a path; make the path thin, long and full of trapped air and the flow collapses.",
          "realWorldExample": "A block-laying site at Kasoa packs the finished concrete slabs under wet hessian and shade rather than leaving them in the sun, because rapid heat loss and gain set up temperature differences that crack the curing slab."
        },
        {
          "title": "Convection: Heat Carried by Moving Fluid",
          "content": "Convection is transfer by the actual movement of a fluid, liquid or gas, and it can only happen where the material is free to flow. Heating a region of fluid makes it expand, so its density falls; the lighter fluid is pushed up by the denser, cooler fluid around it, and a current is established that carries internal energy with the matter itself. This is why a pot of water is heated at the base and never at the top, why a room heater is put on the floor, why an electric iron stand and a fridge compressor room need clearance above them, and why smoke rises up a chimney. In the laboratory, drop a crystal of potassium manganate(VII) into a beaker of cold water and warm the centre of the base gently: the coloured plume rises in the middle and descends at the walls, mapping the convection loop exactly. Ventilation in a Ghanaian classroom follows the same rule: hot, stale air escapes through a high louvre or open transom, and cooler fresh air is drawn in near the floor, which is why a room with only a door and no high opening stays stuffy even when the door is ajar. Convection also drives weather on a scale a pupil can feel. Sand and water have very different rates of heating, so by day the coastal sand becomes hotter, the air above it rises, and cooler air moves inland from the sea as the sea breeze; at night the sand loses its heat faster, the air over the water is now relatively warmer and rises, and the flow reverses as the land breeze. The fishermen at Elmina have worked those two winds for generations, sailing out with the night wind and homing with the morning one.",
          "bulletPoints": [
            "Heated fluid expands, density falls, it rises and cooler fluid sinks to replace it, forming a convection current.",
            "Convection explains heating from below, high ventilators with low air inlets, and rising smoke in a chimney.",
            "A potassium manganate(VII) crystal in a gently warmed beaker shows the loop of rising and returning fluid.",
            "By day the land is hotter and the sea breeze blows inland; by night the land cools faster and the land breeze blows seaward.",
            "Fridge condensers, iron stands and lamp housings need clearance so the convection path is not blocked."
          ],
          "keyTakeaway": "Convection carries energy with matter, so the design rule is simple: give the warm fluid an upward path and the cool fluid an entry below it.",
          "realWorldExample": "A chop bar at Nungua leaves the charcoal pot low and the roof space open above it, because the rising hot air draws fresh oxygen up through the coals and carries the smoke away; a lid placed too close chokes the fire."
        },
        {
          "title": "Radiation: Transfer Across Empty Space",
          "content": "Radiation needs no material medium at all. Energy travels from the Sun to the Earth across the vacuum of space as electromagnetic waves, chiefly the infra-red part of the spectrum for ordinary hot bodies, moving at 3.0 x 10^8 m per s, so the warmth you feel on your face from a hot roof sheet or a charcoal fire is not being carried by the air between you and it, since that air is a poor conductor and the current in it is directed upwards away from the source. Every body both emits and absorbs radiation continuously; the net effect depends on temperature and on the surface. Dull black surfaces are the best absorbers and the best emitters, while bright polished surfaces absorb little, emit little and reflect the rest, which is why a polished flask wall sends the heat radiation back towards the hot liquid and why a whitewashed or reflective roof returns much of the sun. The quantity emitted rises extremely fast with temperature: emission is proportional to the fourth power of the absolute temperature, so a body at 600 K radiates about sixteen times as fast as the same body at 300 K, because doubling the temperature multiplies the rate by 2 to the fourth power, which is 16. A simple proof of the surface law uses two identical cans with thermometers, one blackened with candle smoke and one polished bright: filled with equal volumes of hot water and left in the same place, the blackened can loses heat faster, showing it is also the better emitter, and the same pair in sunshine warms the blackened one faster, showing the better absorber.",
          "bulletPoints": [
            "Radiation needs no medium, travels at 3.0 x 10^8 m per s and is mainly infra-red for ordinary temperatures.",
            "Dull black: best absorber and best emitter. Bright polished: worst absorber, worst emitter, good reflector.",
            "Emission grows with the fourth power of absolute temperature, so doubling the Kelvin temperature multiplies it by 16.",
            "Two cans, one blackened and one polished, with thermometers prove both the absorption and the emission halves.",
            "The warmth from a fire or a hot sheet reaches you sideways, against the convection current, so it must be radiation."
          ],
          "keyTakeaway": "Judge a surface by what it does to radiation: black and dull takes it in and gives it out, bright and smooth throws it back.",
          "realWorldExample": "A water storage tank painted white on a flat roof at Kumasi keeps its contents cooler than an identical blackened tank, because the white coat reflects much of the incoming solar radiation instead of absorbing it."
        },
        {
          "title": "The Vacuum Flask and Household Insulation",
          "content": "A vacuum flask is the standard examination object because every part of it defeats one named mechanism. The vessel has double walls between which the air has been pumped out, and since conduction through a gas needs particles to collide and convection needs a fluid that can flow, the near vacuum removes both. The inner surfaces of those walls are silvered, so heat radiation trying to cross the gap is reflected back towards the side it came from, keeping hot drink hot by returning its own radiation and keeping cold drink cold by refusing to admit outside radiation. The two walls are held apart at the neck by cork or plastic, materials of low conductivity, and the stopper is also cork or plastic, which both conducts poorly and limits the escape of vapour and the entry of air. The base carries a padded support for the same reason, and the outer case protects the silvered glass from impact, since a cracked flask loses its vacuum and fails immediately. Test the flask by pouring in hot water, measuring the temperature after one hour, and comparing the fall with that of an identical beaker of water left in the same place; the flask loses far less. Household insulation follows the same three-target logic. In a hot humid climate the aim is to stop heat entering, so a roof space with a ventilated air gap and a reflective foil under the sheets throws radiation back and lets convection carry what remains out through the ridge or louvre, a thatch roof traps still air in its thick layer, and a false ceiling of board adds a further insulating blanket over the room. Solid concrete or uninsulated aluminium sheeting does the opposite: it has a large area, a modest thickness and a direct conduction path, so the room beneath it tracks the afternoon sun.",
          "bulletPoints": [
            "Vacuum between double walls stops conduction and convection because there are almost no particles left to carry energy.",
            "Silvered surfaces reflect radiation back, defeating the third route.",
            "Cork or plastic supports and stopper limit conduction and cut evaporation losses.",
            "A ventilated roof cavity with reflective foil, thatch or a false ceiling keeps a Ghanaian room cooler than bare sheeting or slab.",
            "Compare a flask with an open beaker of the same hot water over one hour to measure how well the insulation works."
          ],
          "keyTakeaway": "Good insulation is a checklist of attacks: starve conduction, block convection, reflect radiation, and seal the escapes.",
          "realWorldExample": "A trader at Kejetia who carries cooked rice in a wrapped foam box lined with foil is applying flask design in practice: foam for conduction, the foil lining for radiation, and the tight wrapping to keep the air still."
        },
        {
          "title": "Evaporation, Cooling and Measuring Heat Flow",
          "content": "The fourth everyday route by which a body loses energy is evaporation, and it belongs with this topic because it is the reason sweating, calabash coolers and wet hessian work. In a liquid the molecular speeds are spread widely; the fastest molecules near the surface can break free, and since they carry more than average energy away, the remaining liquid is left cooler. Turning 1 kg of water at boiling point into steam needs 2.26 x 10^6 J, the specific latent heat of vaporisation, so when only 0.1 kg of sweat evaporates from skin it draws away 0.1 x 2.26 x 10^6 = 226 000 J, an amount that would raise the temperature of 3.6 kg of water by 15 °C, since 226 000 divided by 4200 x 15 gives 3.6. Evaporation is fastest when the air is dry and moving, which is why a wet cloth over a bottle cools well in the harmattan and poorly in the humid coast, and why a fan over a sweating body relieves heat. Melting ice gives the sister example, with a specific latent heat of fusion of 3.36 x 10^5 J per kg, absorbed at constant temperature, which is why a drink with ice stays cool long after the ice has gone. To measure heat flow in the laboratory you need a steady state and a way of quantifying it: the Leslie cube with its four faces, blackened, white, dull and polished, held near a thermopile or felt with the hand, ranks the emitting power of surfaces, while rods of copper, aluminium, brass and glass coated with a thin layer of wax and heated at one end show the wax melting back in order of conductivity, copper first and glass last. Record the times, tabulate, name the mechanism each test probes, and state the safety points: eye protection near hot apparatus, tongs for heated rods, acids and water never confused, and a clear bench for the flask so its thin neck is not knocked.",
          "bulletPoints": [
            "Fast molecules escape, so the remaining liquid cools; evaporation needs the latent heat of vaporisation 2.26 x 10^6 J per kg.",
            "0.1 kg of sweat evaporating removes 226 000 J, enough to heat 3.6 kg of water by 15 °C.",
            "Dry moving air speeds evaporation, so cooling works better in the harmattan than on the humid coast.",
            "Leslie cube ranks surface emission; wax-coated rods of copper, aluminium, brass and glass rank conduction.",
            "Safety: eye protection, tongs, clear bench, no draught across the balance, and report cracked glass apparatus."
          ],
          "keyTakeaway": "Evaporation steals energy from the liquid itself, so cooling by sweat, calabash or a wick is a latent heat process, not a conduction one.",
          "realWorldExample": "A shea butter processing yard in the north spreads the paste in shallow trays under shade rather than in the sun, because a slow steady loss of water by evaporation avoids scorching, while direct radiation would darken and spoil the butter."
        }
      ],
      "commonMistakes": [
        "Saying that a woolen jersey or a foam cup keeps a drink hot because it supplies heat; insulation slows the transfer of heat already present and cannot create any.",
        "Naming convection as the mechanism in a solid rod, or claiming radiation needs air; convection needs a fluid that can flow and radiation needs nothing at all.",
        "Writing heat flowing from a hot body to a cold body as a matter transfer rather than energy transfer, and confusing temperature with heat in the same sentence.",
        "Forgetting that a dull black surface is the best emitter as well as the best absorber, and so answering that a polished flask keeps a drink hot mainly by reflecting light.",
        "Losing the mark on Q/t = k A delta theta / d by changing centimetres to metres wrongly: 0.20 m is 20 cm, and using 20 in the denominator divides by the wrong factor of 100.",
        "Calling the land breeze the daytime wind; the sea breeze blows inland by day and the land breeze blows seaward at night."
      ],
      "wassceExamTips": [
        "In Paper 1, when a question asks for a named mechanism, answer with exactly one of conduction, convection or radiation and then the reason; naming two of them scores nothing.",
        "Paper 2 expects the density argument for convection in full: heated fluid expands, density decreases, upthrust from the surrounding denser fluid makes it rise; write all four links.",
        "For vacuum flask questions, structure the answer by mechanism, one line each for the vacuum, the silvering and the cork, because markers award a mark per route blocked.",
        "In the Paper 3 alternative practical, a Leslie cube or wax-on-rods question gives marks for the observation, the ranking and the conclusion, so tabulate before concluding and keep units of time.",
        "When a calculation gives thickness, area and temperature difference, write the proportionality statement first, then substitute with units, then state the answer in watts; method marks are awarded for the substitution line even if the arithmetic fails."
      ],
      "summaryChecklist": [
        "Can I state the three mechanisms and name the medium each one requires, including the case of none?",
        "Can I compute the rate of heat flow through a slab when area, thickness, difference and k are given?",
        "Can I explain a convection current, a room ventilator and a land or sea breeze from the same density argument?",
        "Can I design a fair test comparing a blackened and a polished surface for absorption and for emission?",
        "Can I account for every part of a vacuum flask and for two roofing choices suited to the Ghanaian climate?"
      ]
    },
    "examples": [
      {
        "id": "ex-heat-transfer-1",
        "title": "Rate of Heat Flow Through a Block Wall",
        "problem": "The outer wall of a classroom is 0.20 m thick and has an area of 10 m^2. On a hot afternoon the outside air is 42 °C and the room inside is kept at 30 °C. Taking the thermal conductivity of the wall as 0.7 W per m per °C, find the rate at which heat flows into the room, and the energy that enters in one hour. State the mass of water that energy could raise by 10 °C.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the conduction relation Q/t = k A (theta2 - theta1) / d and identify each quantity: k = 0.7, A = 10 m^2, d = 0.20 m.",
          "Step 2 (M1): Temperature difference theta2 - theta1 = 42 - 30 = 12 °C.",
          "Step 3 (M1): Substitute: rate = 0.7 x 10 x 12 / 0.20.",
          "Step 4 (A1): Rate of heat flow = 84 / 0.20 = 420 W, that is 420 J each second entering the room.",
          "Step 5 (M1): Energy in one hour = power x time = 420 W x 3600 s, with the hour changed to seconds.",
          "Step 6 (A1): Energy = 1 512 000 J, about 1.51 MJ.",
          "Step 7 (A1): Using Q = m c delta theta with c = 4200 J per kg per °C, m = 1 512 000 / (4200 x 10) = 36 kg of water, so the wall leaks enough heat in one hour to warm 36 kg of water by 10 °C; halving the wall thickness would double the 420 W flow."
        ],
        "keyTakeaway": "Heat flow scales with area and temperature difference and is inversely proportional to thickness, so thicker and shaded walls and smaller window area all cut the afternoon heat gain."
      },
      {
        "id": "ex-heat-transfer-2",
        "title": "A Solar Water Heater on a Roof at Tamale",
        "problem": "A flat-plate solar water heater has an absorber plate of area 2 m^2 painted dull black, and it receives 900 W per m^2 of solar radiation at noon, absorbing 0.9 of it. Find the power absorbed, the energy collected in one hour, and the temperature rise of the 200 kg of water in the tank if no heat were lost. Explain why the real rise is smaller.",
        "stepByStepSolution": [
          "Step 1 (M1): Power absorbed = incident intensity x area x absorbing fraction = 900 x 2 x 0.9.",
          "Step 2 (A1): Power absorbed = 1620 W, which is why a black dull plate is used rather than a polished one.",
          "Step 3 (M1): Energy in one hour = power x time = 1620 x 3600 s.",
          "Step 4 (A1): Energy = 5 832 000 J, about 5.83 MJ.",
          "Step 5 (M1): Apply Q = m c delta theta, so delta theta = Q / (m c) = 5 832 000 / (200 x 4200).",
          "Step 6 (A1): The denominator is 200 x 4200 = 840 000, so delta theta = 5 832 000 / 840 000 = 6.94, about 6.9 °C rise in the ideal case.",
          "Step 7 (A1): In practice the rise is lower, nearer 4 °C, because the lagging conducts some heat out, the pipe and tank emit radiation, wind drives convection from the glazing and part of the energy is stored in the metal itself; final answer 1620 W collected, 5.83 MJ in one hour, ideal rise about 6.9 °C."
        ],
        "keyTakeaway": "Radiation collection is a multiplication chain, intensity into area into absorbing power, and the loss of a real heater is a subtraction chain through all three transfer mechanisms."
      }
    ],
    "quiz": {
      "id": "quiz-phy-heat-transfer",
      "topicId": "shs1-phy-t3-heat-transfer-conduction-convection-radiation",
      "title": "Heat Transfer Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-heatxfer-1",
          "quizId": "quiz-phy-heat-transfer",
          "questionText": "Which statement correctly describes the rate of heat flow by conduction through a slab?",
          "optionA": "It is proportional to the thickness of the slab",
          "optionB": "It is independent of the area of the slab",
          "optionC": "It is inversely proportional to the thickness and directly proportional to the area and the temperature difference",
          "optionD": "It depends only on the temperature of the hotter face",
          "correctOption": "C",
          "subConcept": "Conduction and the rate of flow",
          "explanation": "Q/t = k A (theta2 - theta1) / d, so doubling the area or the difference doubles the flow and doubling the thickness halves it. A says the opposite of the thickness effect, and B and D ignore terms that appear in the formula.",
          "remediationTip": "Recheck with the wall example: 0.20 m gives 420 W, 0.10 m gives 840 W; say the two results aloud with the reason."
        },
        {
          "id": "q-phy-heatxfer-2",
          "quizId": "quiz-phy-heat-transfer",
          "questionText": "Water in a beaker is warmed at the centre of the base and a little potassium manganate(VII) crystal is dropped in. The colour rises in the middle and descends at the walls. This current is caused mainly by",
          "optionA": "radiation from the burner reaching the surface",
          "optionB": "conduction along the glass only",
          "optionC": "evaporation of water from the centre",
          "optionD": "the heated water expanding, becoming less dense and rising while cooler water sinks",
          "correctOption": "D",
          "subConcept": "Convection currents",
          "explanation": "The loop is convection: heating lowers the density of the central water, so it is displaced upward by the cooler denser water, which then cools at the top and sinks at the walls. Radiation, conduction along the glass and evaporation do not produce a circulating current.",
          "remediationTip": "Sketch the loop with four arrows and write the density change beside each arrow until the chain is automatic."
        },
        {
          "id": "q-phy-heatxfer-3",
          "quizId": "quiz-phy-heat-transfer",
          "questionText": "Which pair of surfaces are the best absorber and the best emitter of heat radiation respectively?",
          "optionA": "Dull black for both absorption and emission",
          "optionB": "Bright polished for both absorption and emission",
          "optionC": "Dull black for absorption and bright polished for emission",
          "optionD": "White glossy for absorption and dull black for emission",
          "correctOption": "A",
          "subConcept": "Absorption and emission of radiation",
          "explanation": "A dull black surface is both the best absorber and, by the same property, the best emitter; a bright polished surface is the worst of both and reflects. Splitting the two roles across surfaces is the common slip.",
          "remediationTip": "Repeat the two-can experiment in thought: blackened can cools faster, so black is also the better emitter."
        },
        {
          "id": "q-phy-heatxfer-4",
          "quizId": "quiz-phy-heat-transfer",
          "questionText": "In a vacuum flask, how does the silvered coating between the double walls reduce heat loss?",
          "optionA": "It conducts heat away from the liquid quickly",
          "optionB": "It allows air to circulate and equalise the temperature",
          "optionC": "It reflects the heat radiation back towards the liquid",
          "optionD": "It dissolves the vapour so no evaporation occurs",
          "correctOption": "C",
          "subConcept": "The vacuum flask",
          "explanation": "The silvered surface acts on radiation, returning it to the side it came from; the vacuum between the walls separately blocks conduction and convection. Circulation of air would increase loss, and a coating cannot dissolve vapour.",
          "remediationTip": "Table the flask: which part stops conduction, which stops convection, which stops radiation."
        },
        {
          "id": "q-phy-heatxfer-5",
          "quizId": "quiz-phy-heat-transfer",
          "questionText": "How much energy is removed from the skin when 0.1 kg of sweat evaporates completely? The specific latent heat of vaporisation of water is 2.26 x 10^6 J per kg.",
          "optionA": "2260 J",
          "optionB": "22 600 J",
          "optionC": "226 000 J",
          "optionD": "2.26 x 10^6 J",
          "correctOption": "C",
          "subConcept": "Evaporative cooling and latent heat",
          "explanation": "Energy = mass x specific latent heat = 0.1 x 2.26 x 10^6 = 226 000 J, about 226 kJ, absorbed at constant temperature from the skin. Option A and B come from wrong powers of ten and D ignores the mass.",
          "remediationTip": "Write Q = m l with units under each term, then check that the answer carries joules, not joules per kilogram."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t3-gears-wheel-axle-inclined-plane",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Machines II: Gears, Wheel and Axle, Inclined Plane",
    "description": "A second look at simple machines: gear teeth ratio and the reversal of direction, the wheel and axle, bicycle gearing, cranks and pedals, the mechanical advantage of the inclined plane, ramps and loading planks, the screw as a wrapped inclined plane, and the block and tackle.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A machine makes work easier by multiplying force, changing its direction or multiplying speed; it can never multiply work or energy.\n• Mechanical advantage MA = load / effort; velocity ratio VR = distance moved by effort / distance moved by load; both are pure numbers with no unit.\n• Efficiency = MA / VR x 100 percent; friction always makes MA less than VR, so every real machine works below 100 percent efficiency.\n• For an ideal (frictionless) machine MA = VR; a calculation that returns an efficiency above 100 percent means a ratio was inverted.\n• Gears: the driven wheel turns at the driver speed multiplied by driver teeth divided by driven teeth, so more teeth on the driven wheel means slower turning and greater turning effort.\n• Two gears in mesh rotate in opposite directions; adding an idle wheel (idler) restores the direction of the driver without changing the speed ratio.\n• Wheel and axle: VR = radius of wheel / radius of axle; a well windlass, a steering wheel and a pedal crank are all wheel-and-axle devices.\n• Bicycle gearing: revolutions of the rear wheel per pedal turn = chainring teeth / rear sprocket teeth; low gearing for climbing with a load, high gearing for speed on the flat.\n• Inclined plane: VR = length of plank / vertical height; on a frictionless plank, effort x length = load x height.\n• A ramp or loading plank lets a drum be rolled up onto a lorry with far less force than lifting it straight up, but the force acts over a longer distance.\n• The screw is an inclined plane wrapped around a rod; the pitch is the forward distance per complete turn, and VR = circumference traced by the handle / pitch.\n• Block and tackle: VR equals the number of rope segments supporting the movable block; four supporting ropes give an ideal VR of 4.",
    "detailedNotes": {
      "overview": "This topic completes the study of simple machines begun in Machines I with levers and pulleys. You will calculate mechanical advantage, velocity ratio and efficiency for four arrangements: gear trains, the wheel and axle, the inclined plane and the block and tackle. You will explain how the number of teeth on meshing gears fixes the speed ratio and reverses the direction of turning, and how a bicycle uses cranks, a chainring and a sprocket to trade force against speed. The unifying principle in every case is conservation of energy: what a machine gains in force it gives back in distance, so the useful work can never exceed the work put in.",
      "introduction": "Begin with the machines you can see in the workshop: turn the pedal crank of an old bicycle frame and count how many times the rear wheel spins for one full pedal revolution, then compare the chainring and sprocket tooth counts with your answer. Next roll a toy car or a loaded tin up a smooth plank resting on a book and pull it with a spring balance; the reading is far below the weight you would have to lift straight up. Finally place two toothed gear wheels on the bench, mesh them, mark one tooth with chalk and count turns. Record every reading in a table with its unit, because these are the three setups Paper 3 examiners use most.",
      "realWorldContext": "A driver on the Aburi or Kwahu escarpment drops a trotro into low gear so the engine's turning effect on the wheels rises and the vehicle can climb the zig-zag ramp without straining; that is the gear ratio at work. Roadside mechanics at Suame Magazine in Kumasi use screw jacks and block-and-tackle hoists to lift engines out of saloon cars. On building sites at East Legon, masons haul blocks to the scaffold with a rope-and-pulley tackle, counting the supporting ropes exactly as the theory says. Villagers north of Tamale draw water from hand-dug wells with a windlass: a long handle is the wheel and the drum is the axle, so one person can lift a full bucket. Cocoa-bag loaders at the Takoradi port use loading planks to wheel barrows of beans up into the lorry rather than lifting over the side.",
      "objectives": [
        "Calculate mechanical advantage, velocity ratio and efficiency for gears, wheel and axle, inclined plane and block and tackle",
        "Explain how the numbers of teeth on meshing gears fix the speed ratio and reverse the direction of rotation",
        "Describe bicycle gearing, cranks and pedals as applications of the wheel and axle and of gear ratio",
        "Use the work relation effort x distance = load x height to show why a ramp, plank or screw multiplies force"
      ],
      "sections": [
        {
          "title": "Gear Trains, Tooth Ratio and Direction of Turning",
          "content": "A gear is a toothed wheel that meshes with another toothed wheel so that turning motion passes from one shaft to the other without slipping. Because the teeth interlock, the same number of teeth must pass the point of contact each second on both wheels, so a wheel with many teeth turns slowly while one with few teeth turns quickly. If the driver has D teeth and turns at nD revolutions per minute and the driven wheel has d teeth, then the driven wheel turns at nD x D/d revolutions per minute. A driver with 25 teeth meshing directly with a driven wheel of 75 teeth gives 120 x 25/75 = 40 rpm, one third of the speed, and if friction is ignored the turning effort on the slow shaft is three times the effort on the fast one. This is what a low gear does in a trotro gearbox on a hill. One important detail examiners test: two gears in mesh turn in opposite directions, so a train of two meshings returns the final wheel to the original direction, and an extra wheel called an idler is used only to keep the direction as well as to bridge a gap; an idler changes neither the speed ratio nor the mechanical advantage.",
          "bulletPoints": [
            "Speeds of meshing gears are inversely proportional to their numbers of teeth.",
            "Driven speed = driver speed x driver teeth / driven teeth.",
            "Two gears in mesh rotate in opposite directions.",
            "An idler wheel preserves the driver direction and does not change the ratio.",
            "A reduction in speed raises the turning effort delivered to the driven shaft."
          ],
          "keyTakeaway": "Count the teeth, form the fraction driver over driven, and decide the direction by counting meshings: odd means reversed, even means the same way as the driver.",
          "realWorldExample": "The three-speed hub on a bicycle and the gearbox of a trotro climbing the Kwahu escarpment both work by selecting a larger driven gear so the wheels turn slower but with greater turning effort."
        },
        {
          "title": "Wheel and Axle, Bicycle Gearing, Crank and Pedal",
          "content": "The wheel and axle is two cylinders of different radius fixed to the same shaft so they turn together. The effort rope is wound on the larger cylinder (the wheel) and the load rope on the smaller one (the axle). In one complete turn the effort moves through the circumference 2 pi R while the load rises only 2 pi r, so VR = R/r, the radius of the wheel over the radius of the axle. A windlass over a village well, with a handle of radius 40 cm turning a drum of radius 8 cm, has VR = 5, so an ideal effort is only a fifth of the bucket weight. The pedal crank of a bicycle is a wheel and axle in disguise: the crank arm of about 17 cm sweeps a circle around the bottom bracket and turns the chainring at its centre. The chain then links the chainring to the rear sprocket like two gears joined by a chain, and the rear sprocket is fixed to the rear wheel. One pedal turn therefore spins the rear wheel chainring teeth divided by sprocket teeth times. With 48 teeth on the chainring and 16 on the sprocket the wheel turns three times per pedal revolution, covering three times the wheel circumference of road. Pressing the pedal through the crank circle gives the first multiplication and the chainring-to-sprocket ratio gives the second; together they are why a cyclist can cover large distances with modest effort, while a loaded tricycle uses a small chainring against a large sprocket for climbing.",
          "bulletPoints": [
            "Wheel and axle: VR = radius of wheel / radius of axle, both measured from the common axis.",
            "The effort travels the big circumference while the load travels the small one in the same turn.",
            "Bicycle: rear-wheel turns per pedal turn = chainring teeth / sprocket teeth.",
            "Pedal crank length multiplies the turning effort applied to the chainring.",
            "Low gearing for heavy loads and hills, high gearing for speed on level ground."
          ],
          "keyTakeaway": "Every turning machine multiplies force the same way: the effort moves through a bigger circle than the load, and the ratio of the circles is the velocity ratio.",
          "realWorldExample": "A woman at a hand-dug well near Navrongo turns a long windlass handle to raise a bucket, feeling the advantage that comes from the handle circle being five times the drum circle."
        },
        {
          "title": "Inclined Plane, Ramp, Loading Plank and Screw",
          "content": "An inclined plane is a sloping surface, such as a plank laid from the ground onto a lorry body, that raises a load by rolling or sliding it up instead of lifting it straight up. Lifting a load of weight W through height h requires work W x h no matter how it is done. On a smooth plank of length l the effort E moves the full length, so E x l = W x h and the ideal effort is E = W x h/l. The velocity ratio is the distance the effort moves over the distance the load is raised, which is l/h, and in the frictionless case the mechanical advantage equals l/h as well. A plank 4 m long reaching a bed 1 m high therefore has VR = 4 and needs only about a quarter of the lifting force, with the price of pushing over four times the distance. Real planks have friction, so the measured advantage is smaller and the efficiency is below 100 percent. Ramps, staircases and the zig-zag road up the Aburi escarpment are all inclined planes spread out to ease the climb. A screw is an inclined plane wrapped around a cylinder: the thread is the slope and the pitch p, the forward distance in one complete turn, corresponds to the height of the slope. Turning a handle of arm L once moves the effort through 2 pi L while the screw advances only p, so VR = 2 pi L / p, which is why a small force on a car jack handle lifts a vehicle.",
          "bulletPoints": [
            "Inclined plane: VR = length of plane / vertical rise, and ideal MA = the same ratio.",
            "Work is conserved: effort x length = load x height on a frictionless plank.",
            "Ramps, loading planks and zig-zag hill roads are inclined planes in use.",
            "Screw: pitch is the rise per turn; VR = 2 pi x handle arm / pitch.",
            "Friction on the plank lowers MA below VR, so efficiency is under 100 percent."
          ],
          "keyTakeaway": "The longer and shallower the slope, the smaller the force needed, because the same work is spread over a greater distance.",
          "realWorldExample": "Loaders at the Takoradi ferry terminal roll drums of palm oil up a long plank into a lorry instead of lifting them vertically, trading distance for force exactly as the theory predicts."
        }
      ],
      "commonMistakes": [
        "Quoting efficiency above 100 percent because MA and VR were swapped in the formula; for a force-multiplying machine VR is always greater than MA, so check which number is bigger before dividing.",
        "Writing VR for an inclined plane as height divided by length; that fraction is below 1, while the velocity ratio of a machine that multiplies force must be greater than 1. Use length over height.",
        "Attaching units to mechanical advantage or velocity ratio; both are ratios of like quantities and carry no unit, unlike the load and effort themselves which are in newtons and metres.",
        "Mixing up driver and driven when forming the gear fraction, so a 25-tooth driver with a 75-tooth driven wheel is wrongly said to turn the driven at 360 rpm instead of 40 rpm."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): gear-ratio questions are solved in seconds by writing driven speed = driver speed x driver teeth / driven teeth; keep the teeth numbers straight and watch for the answer that inverted the fraction.",
        "Paper 2 (theory): method marks (M1) are given for stating MA = load/effort, VR = distance effort/distance load and efficiency = MA/VR x 100 before substituting, and the answer mark (A1) needs the unitless number stated correctly; write all three formulae even if one cancels.",
        "Paper 3 (practical or alternative practical): for the inclined-plane task, pull the spring balance steadily and parallel to the plank, read it with the eye directly in front of the scale, keep the load and effort readings in a table with newton units in the heading, and repeat with different loads.",
        "When a question asks for the ideal mechanical advantage of a screw or jack, use VR = 2 pi L / pitch and state clearly that this equals the MA only when friction is neglected; examiners award the method mark for that qualifying phrase."
      ],
      "summaryChecklist": [
        "Can I compute MA, VR and efficiency for any machine and explain why efficiency is always below 100 percent?",
        "Can I find the speed and direction of a driven gear from the tooth counts of the driver and driven wheels?",
        "Can I explain bicycle gearing, the pedal crank and the chainring-sprocket ratio as wheel-and-axle and gear applications?",
        "Can I use VR = length/height for an inclined plane and relate it to a loading plank or ramp?",
        "Can I treat the screw as a wrapped inclined plane and state the velocity ratio of a block and tackle from its supporting ropes?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-gears-wheel-axle-inclined-plane-1",
        "title": "Loading Plank: MA, VR and Efficiency",
        "problem": "A drum of palm oil weighing 500 N is rolled up a plank 4.0 m long onto a lorry bed 1.0 m above the ground. A steady pushing force of 150 N parallel to the plank moves it at constant speed. Find (a) the velocity ratio, (b) the actual effort that a frictionless plank would have needed, and (c) the mechanical advantage and efficiency of the real plank.",
        "stepByStepSolution": [
          "Step 1 (M1): VR = distance moved by effort / distance moved by load vertically = length of plank / height = 4.0 / 1.0.",
          "Step 2 (A1): VR = 4 (a pure number, no unit).",
          "Step 3 (M1): on a frictionless plank effort x length = load x height, so ideal effort = 500 x 1.0 / 4.0.",
          "Step 4 (A1): ideal effort = 125 N.",
          "Step 5 (M1): actual MA = load / effort = 500 / 150.",
          "Step 6 (A1): MA = 3.33 (to three figures).",
          "Step 7 (M1): efficiency = MA / VR x 100 = 3.33 / 4 x 100.",
          "Step 8 (A1): efficiency = 83.3 percent."
        ],
        "keyTakeaway": "The plank cuts the needed force from 500 N to about 125 N in the ideal case; friction then raises the real effort to 150 N and the efficiency to about 83 percent."
      },
      {
        "id": "ex-phy-gears-wheel-axle-inclined-plane-2",
        "title": "Windlass: Wheel and Axle with a Given Efficiency",
        "problem": "A well windlass has a handle circle of radius 40 cm turning an axle drum of radius 8 cm. It lifts a loaded bucket of mass 60 kg. Take g = 10 m per second squared and let the efficiency be 80 percent. Find the force the person must apply to the handle.",
        "stepByStepSolution": [
          "Step 1 (M1): load weight = m x g = 60 x 10 = 600 N.",
          "Step 2 (M1): VR = radius of wheel / radius of axle = 40 / 8.",
          "Step 3 (A1): VR = 5.",
          "Step 4 (M1): efficiency = MA / VR, so MA = 0.80 x 5.",
          "Step 5 (A1): MA = 4.",
          "Step 6 (M1): MA = load / effort, so effort = load / MA = 600 / 4.",
          "Step 7 (A1): effort = 150 N."
        ],
        "keyTakeaway": "Work from VR to MA with the efficiency, then from MA to the effort; each ratio is unitless, but the load and effort are in newtons."
      }
    ],
    "quiz": {
      "id": "quiz-phy-gears-wheel-axle-inclined-plane",
      "topicId": "shs1-phy-t3-gears-wheel-axle-inclined-plane",
      "title": "Machines II Quiz: Gears, Wheel and Axle, Inclined Plane",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-gears-wheel-axle-inclined-plane-1",
          "quizId": "quiz-phy-gears-wheel-axle-inclined-plane",
          "questionText": "A driver gear with 25 teeth meshes directly with a driven gear of 75 teeth. If the driver turns at 120 rpm, how does the driven gear turn?",
          "optionA": "360 rpm in the same direction",
          "optionB": "40 rpm in the opposite direction",
          "optionC": "120 rpm in the opposite direction",
          "optionD": "40 rpm in the same direction",
          "correctOption": "B",
          "subConcept": "Gear ratio",
          "explanation": "Driven speed = 120 x 25/75 = 40 rpm, and two gears in mesh always reverse the direction of turning. Choosing 360 rpm means the tooth fraction was inverted.",
          "remediationTip": "Form the fraction driver teeth over driven teeth for the speed, then count one meshing as one reversal of direction."
        },
        {
          "id": "q-phy-gears-wheel-axle-inclined-plane-2",
          "quizId": "quiz-phy-gears-wheel-axle-inclined-plane",
          "questionText": "A frictionless plank 5.0 m long leads up to a platform 1.0 m high. What is its velocity ratio?",
          "optionA": "0.2",
          "optionB": "4.0",
          "optionC": "6.0",
          "optionD": "5.0",
          "correctOption": "D",
          "subConcept": "Inclined plane",
          "explanation": "VR = length of plane / vertical height = 5.0 / 1.0 = 5. The value 0.2 comes from inverting the ratio, which no force-multiplying machine can give.",
          "remediationTip": "For an inclined plane, always put the longer distance, the length of the slope, on top."
        },
        {
          "id": "q-phy-gears-wheel-axle-inclined-plane-3",
          "quizId": "quiz-phy-gears-wheel-axle-inclined-plane",
          "questionText": "In a block and tackle, four rope segments support the movable block. What is the ideal velocity ratio?",
          "optionA": "4",
          "optionB": "2",
          "optionC": "8",
          "optionD": "1",
          "correctOption": "A",
          "subConcept": "Block and tackle",
          "explanation": "VR equals the number of rope segments carrying the movable block, which is 4 here. With friction the mechanical advantage would be less than 4.",
          "remediationTip": "Count only the ropes attached to the moving block, then set VR equal to that count."
        },
        {
          "id": "q-phy-gears-wheel-axle-inclined-plane-4",
          "quizId": "quiz-phy-gears-wheel-axle-inclined-plane",
          "questionText": "Why is a screw described as a wrapped inclined plane?",
          "optionA": "Because its threads sharpen the surface it bites into.",
          "optionB": "Because it turns a horizontal force into a vertical lift.",
          "optionC": "Because its thread is a slope wound around a cylinder, with the pitch acting like the height of the slope.",
          "optionD": "Because it multiplies force by four times the handle length.",
          "correctOption": "C",
          "subConcept": "Screw",
          "explanation": "Unwinding one turn of thread gives a right triangle whose long side is the circumference and whose height is the pitch, exactly the geometry of an inclined plane. The other options describe effects, not the underlying shape.",
          "remediationTip": "Picture the paper triangle wrapped around a pencil: slope length is the circumference, height is the pitch."
        },
        {
          "id": "q-phy-gears-wheel-axle-inclined-plane-5",
          "quizId": "quiz-phy-gears-wheel-axle-inclined-plane",
          "questionText": "A bicycle chainring has 48 teeth and the rear sprocket has 16 teeth. How many turns does the rear wheel make for one complete pedal revolution?",
          "optionA": "0.33 turns",
          "optionB": "3 turns",
          "optionC": "1 turn",
          "optionD": "6 turns",
          "correctOption": "B",
          "subConcept": "Bicycle gearing",
          "explanation": "The chain carries one chainring revolution worth of links per pedal turn, so the sprocket and fixed rear wheel turn 48/16 = 3 times. Answer A inverts the fraction.",
          "remediationTip": "Divide chainring teeth by sprocket teeth; the bigger driving wheel in front means the rear spins faster."
        }
      ]
    }
  },
  {
    "id": "shs1-phy-t3-experimental-physics-paper-3-skills",
    "subjectId": "physics",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Experimental Physics Skills for WASSCE Paper 3",
    "description": "The practical craft of physics: reading scales and least count of the metre rule, vernier calliper and micrometer screw gauge, zero and parallax error, tabulating readings with units, plotting graphs with a line of best fit, the meaning of slope and intercept, repeating and averaging readings, precautions and viva questions, and the common apparatus of the Ghanaian school laboratory and its limits.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Least count is the smallest division an instrument can read directly: metre rule 1 mm, vernier calliper 0.1 mm (0.01 cm), micrometer screw gauge 0.01 mm, school stop-watch typically 0.1 s.\n• Record readings to the least count, estimating half a division when the pointer falls between marks, and keep every entry in a table to the same number of decimal places.\n• Zero error means the instrument does not read zero when it should; subtract a positive zero error and add back a negative zero error to every reading.\n• Parallax error comes from viewing the scale at an angle; place the eye directly opposite the pointer or the meniscus, in line with the reading.\n• Systematic error repeats for every reading (zero error, a worn balance arm); random error scatters readings, and repeating then averaging reduces it.\n• Table headings carry the quantity and unit, such as l / cm, and the entries are then plain numbers with no units written again.\n• On a graph, choose scales that use more than half the sheet, label each axis with quantity and unit, plot sharp points encircled, and draw one smooth line of best fit.\n• Slope = change in vertical divided by change in horizontal between two well-separated points on the drawn line, never between two raw readings; state the unit of the slope.\n• The intercept where the line meets a vertical axis often carries physics meaning, such as an initial length or a correction; state it with its unit.\n• For a simple pendulum, T squared plotted against l gives a slope of 4 pi squared / g; a slope of 4.0 s squared per metre returns g about 9.9 m per second squared.\n• Never alter a raw reading to fit the expected answer; an anomalous trial is repeated and the repeat reported.\n• Viva questions test whether you understand the apparatus: name it, state its least count, give one source of error and one precaution, and explain the setup you actually used.",
    "detailedNotes": {
      "overview": "Paper 3 rewards craft more than memory: the same pendulum experiment can fetch full marks or half marks depending on how readings are taken, recorded and plotted. This topic trains the whole chain of habits, reading an instrument to its least count, hunting down zero and parallax error, tabulating with clean decimal consistency, choosing graph scales that fill the sheet, drawing a genuine line of best fit, and extracting slope and intercept with correct units. You will also learn what the common apparatus of a Ghanaian senior high school laboratory can and cannot do, and how to answer viva questions about it confidently.",
      "introduction": "Set up the standard bench items and practise on them before worrying about theory: measure the diameter of a piece of copper wire three times at different positions with a micrometer and average, then measure the same wire with a vernier calliper and compare precision. Swing a pendulum of length 80 cm and time 20 oscillations three times with the stop-watch, recording each value to 0.1 s in a table. Plot one graph from old spring-extension readings on full A4 squared paper, draw the best line, and compute its slope with a large triangle. These three routines cover most of what Paper 3 will ask of you.",
      "realWorldContext": "The GES laboratory schedule equips senior high physics benches with metre rules, thread, stop-watches, retort stands, spring balances, beakers and a shared set of vernier callipers and micrometer screw gauges, so candidates must know their limits as well as their use. A technologist at Sunyani measuring copper wire drawn for local workshops needs the micrometer because the rule cannot resolve a 0.5 mm wire diameter. At a sachet-water plant in Tema a quality attendant reads a pressure gauge with the eye square to the dial to dodge parallax, exactly the laboratory discipline. Building-materials testers in Kumasi repeat their three-point diameter readings and average them before quoting a figure in a report, and regional science fair judges in Cape Coast ask candidates viva-style questions about which reading was anomalous and why.",
      "objectives": [
        "Read a metre rule, vernier calliper, micrometer screw gauge, spring balance and stop-watch to the correct precision and state each least count",
        "Identify zero error and parallax error in a measurement and apply the correct correction",
        "Record readings in a table with units and plot a graph whose slope and intercept are found and interpreted",
        "Justify repeating and averaging readings and state the appropriate precautions and safety points for common Paper 3 experiments"
      ],
      "sections": [
        {
          "title": "Instruments, Least Count and Reading Error",
          "content": "Every instrument has a least count, the smallest change it can show: 1 mm on a school metre rule, 0.1 mm (that is 0.01 cm) on the vernier calliper, 0.01 mm on the micrometer screw gauge, about 0.1 s on a digital stop-watch, and 1 degree Celsius on the typical laboratory thermometer. To read a vernier calliper, take the main-scale value just before the zero of the vernier scale and add the vernier division that lines up exactly with a main-scale line, multiplied by 0.01 cm. On the micrometer you add the sleeve reading to the thimble reading times 0.01 mm, and you always turn the ratchet, not the thimble, to close on the wire so you do not crush it or vary the pressure. Close the jaws or anvil empty first: if the instrument reads above zero you have a positive zero error to subtract from every reading, and if it reads below zero you have a negative zero error to add back. Two careless habits cost marks in almost every script: parallax, where the eye is to one side of the pointer or meniscus so the reading shifts, and sloppy decimal places. A spring balance must be held with the scale vertical and read eye to eye, and its pointer checked at zero before loading. The stop-watch adds human reaction of roughly 0.2 s no matter how careful you are, which is why short intervals are multiplied: time twenty oscillations and divide by twenty rather than timing one swing.",
          "bulletPoints": [
            "Least counts: rule 1 mm, vernier 0.1 mm, micrometer 0.01 mm, stop-watch about 0.1 s.",
            "Vernier reading = main scale before zero plus (coinciding vernier division x 0.01 cm).",
            "Positive zero error is subtracted; negative zero error is added back.",
            "Use the ratchet on the micrometer to get a standard closing pressure.",
            "Time many oscillations and divide, because reaction of about 0.2 s dominates a single swing."
          ],
          "keyTakeaway": "Know the least count of every instrument before you use it, correct the zero error on every reading, and place your eye in line with the pointer to kill parallax.",
          "realWorldExample": "A workshop technologist in Sunyani measures the diameter of tinned copper wire for a school rewinding job with a micrometer, because a metre rule would misjudge a 0.5 mm wire by ten percent or more."
        },
        {
          "title": "Tables, Graphs, Slope and Intercept",
          "content": "Raw readings belong in a table, not in sentences. Each column heading shows the quantity and its unit, for example l / cm or T / s, so the entries themselves are pure numbers written with consistent decimal places, every length to two decimals if the least count is 0.1 cm. Include further columns for any quantity you compute, such as T squared, and show the formula used beneath the table. Take at least five or six pairs of readings spread across the full range. For the graph, choose scales so that plotted points cover more than half the sheet in both directions, keeping one centimetre or one major square equal to a friendly number such as 1, 2 or 4, never 7. Label both axes with quantity and unit, plot each point as a small sharp cross encircled, and draw a single smooth line of best fit that balances the scattered points above and below it; do not jog the line through every kink. The slope is found by marking two points well separated on the drawn line, reading their coordinates, and dividing the vertical change by the horizontal change; state the slope unit, which for T squared against l is seconds squared per metre. The vertical intercept, where the line cuts the axis at zero horizontal value, exposes hidden corrections such as the radius added when measuring a bob's swing from the support. If the theory says the line must pass through the origin and yours does not, name a likely cause, usually zero error, instead of redrawing the graph to please the examiner.",
          "bulletPoints": [
            "Head columns as quantity / unit and enter plain numbers with consistent decimal places.",
            "Plot at least five spread-out points and draw one smooth line of best fit.",
            "Choose scales so the plot fills more than half the graph paper.",
            "Slope uses two widely separated points ON the line, with its unit stated.",
            "A non-zero vertical intercept signals a correction or a systematic error."
          ],
          "keyTakeaway": "The table and the graph are where Paper 3 marks are actually earned, and the slope must be read from the best-fit line, not from raw data.",
          "realWorldExample": "In a school laboratory at Ho, a class extends a spring by 100 g increments, plots force against extension, and reads the spring constant straight from the gradient as taught on this page."
        },
        {
          "title": "Repeats, Averages, Precautions, Safety and the Viva",
          "content": "Random error scatters repeated readings, so the honest routine is to repeat each measurement three times, record all three values in the table, and quote the average. If one trial differs wildly, mark it anomalous, repeat that particular setting, and report the repeat rather than quietly deleting the bad number. Never falsify a reading to match the expected answer: examiners deliberately award marks for the mean of three believable values and penalise a suspicious set that agrees too perfectly. Systematic error is handled differently: it shifts every reading the same way, and you remove it by correcting the zero, recalibrating against a known standard, or quoting a comparison. Precautions must be specific to the experiment: for the pendulum, keep the swing in one vertical plane, release from a small amplitude of about ten degrees, measure length to the bob centre and shield the bob from draughts; for elasticity work, do not load past the elastic limit and read a pointer scale square on. Safety in the physics laboratory is lighter than in chemistry but real: clamp the retort stand firmly so falling masses do not land on feet, keep fingers clear when a rubber band or spring snaps back, carry hot water for boiling-tube work with tongs, and sweep up broken glass with a brush and dustpan, never bare hands. The viva at a practical station, or the alternative-practical written equivalent, asks you to name the apparatus and its least count, sketch the setup, quote one source of error and the precaution against it, and say what you would do differently with more time. Answer with the actual instrument described, not with a general speech.",
          "bulletPoints": [
            "Repeat three times, average, and record all values including the rejected outlier.",
            "Random error shrinks with averaging; systematic error needs correction or recalibration.",
            "State precautions that match the named experiment, not a memorised general list.",
            "Safety: clamp stands well, mind snapping bands, use tongs for hot water, brush up glass.",
            "Viva: name apparatus and least count, show the setup, give one error and its precaution."
          ],
          "keyTakeaway": "Averaging protects you from random error, specific precautions protect your marks, and the viva rewards the candidate who handled the real apparatus.",
          "realWorldExample": "Before a regional practical test in Takoradi, a candidate rehearses the pendulum station three full runs, timing twenty oscillations each time, and can state that the stop-watch least count is 0.1 s and that reaction time is the main residual error."
        }
      ],
      "commonMistakes": [
        "Mixing decimal consistency, for example writing lengths as 24 cm, 24.5 cm and 24.05 cm in one column; every entry must be to the same number of decimal places as the instrument allows.",
        "Leaving units out of table headings or repeating them inside every entry; the convention is quantity / unit in the heading and bare numbers below.",
        "Taking the slope between the first and last plotted raw points, or between two points only a square apart, instead of two well-separated points on the drawn line of best fit.",
        "Adding a positive zero error instead of subtracting it, so a corrected reading moves the wrong way and every later calculation inherits the shift."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): unit conversions of instrument readings are a favourite trap; 0.05 mm equals 0.005 cm equals 5 x 10 to the -5 m, so convert step by step and check the order of magnitude.",
        "Paper 2 (theory): when asked to describe a procedure or state an error and its precaution, write the specific instrument and the specific action; a method mark (M1) is given for naming the correct apparatus, the answer mark (A1) for a correct precaution.",
        "Paper 3 (practical): read every scale square on, record all three trial values in the table even if one looks wrong, and on the graph choose friendly scales that fill more than half the sheet, draw one best-fit line, and quote slope and intercept with their units.",
        "Paper 3 alternative practical: for the planning-chart question, name the manipulated variable, the responding variable and two fixed variables in their own columns, and sketch the setup with labelled apparatus before touching the graph paper."
      ],
      "summaryChecklist": [
        "Can I state the least count of the rule, vernier, micrometer, spring balance and stop-watch and read each correctly?",
        "Can I detect a zero error, say whether it is positive or negative, and apply the right correction?",
        "Can I build a table with quantity and unit headings and consistent decimal places?",
        "Can I choose graph scales, draw a line of best fit and find slope and intercept with units?",
        "Can I justify repeating and averaging readings and state two specific precautions and one safety point for the pendulum and spring experiments?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-experimental-physics-paper-3-skills-1",
        "title": "Vernier Calliper Reading with a Negative Zero Error",
        "problem": "A vernier calliper whose least count is 0.01 cm has its vernier zero two divisions to the left of the main-scale zero when the jaws are closed. When measuring the length of a metal block, the main scale reads just past 2.4 cm and the fifth vernier division coincides with a main-scale line. Find the true length of the block.",
        "stepByStepSolution": [
          "Step 1 (M1): zero error = 2 vernier divisions x 0.01 cm, and the vernier zero sits below the main zero, so zero error = -0.02 cm.",
          "Step 2 (M1): observed reading = main scale reading plus (coinciding vernier division x least count) = 2.4 cm + 5 x 0.01 cm.",
          "Step 3 (A1): observed reading = 2.45 cm.",
          "Step 4 (M1): true length = observed reading minus zero error = 2.45 cm - (-0.02 cm).",
          "Step 5 (A1): true length = 2.47 cm."
        ],
        "keyTakeaway": "Subtract the zero error with its sign: a negative zero error is added back, so the true length is larger than the raw reading."
      },
      {
        "id": "ex-phy-experimental-physics-paper-3-skills-2",
        "title": "Period from Repeated Timing and Length from the Pendulum Law",
        "problem": "A student times 20 complete oscillations of a simple pendulum three times and obtains 40.4 s, 40.6 s and 40.2 s. Taking g = 9.8 m per second squared and pi squared = 9.87, find the mean period and the length of the pendulum.",
        "stepByStepSolution": [
          "Step 1 (M1): mean time for 20 oscillations = (40.4 + 40.6 + 40.2) / 3 = 121.2 / 3.",
          "Step 2 (A1): mean total time = 40.4 s.",
          "Step 3 (M1): period T = mean total time / number of oscillations = 40.4 / 20.",
          "Step 4 (A1): T = 2.02 s.",
          "Step 5 (M1): from T = 2 pi square root of (l/g), l = g T squared / (4 pi squared) = 9.8 x 2.02 x 2.02 / (4 x 9.87).",
          "Step 6 (A1): T squared = 4.08 s squared, so l = 39.99 / 39.48 = 1.01 m."
        ],
        "keyTakeaway": "Timing many oscillations divides the reaction error by the count, and the pendulum law then converts the period into a length."
      }
    ],
    "quiz": {
      "id": "quiz-phy-experimental-physics-paper-3-skills",
      "topicId": "shs1-phy-t3-experimental-physics-paper-3-skills",
      "title": "Experimental Skills Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-experimental-physics-paper-3-skills-1",
          "quizId": "quiz-phy-experimental-physics-paper-3-skills",
          "questionText": "What is the least count of a standard micrometer screw gauge?",
          "optionA": "1 mm",
          "optionB": "0.1 mm",
          "optionC": "0.01 mm",
          "optionD": "1 cm",
          "correctOption": "C",
          "subConcept": "Least count",
          "explanation": "The micrometer reads to 0.01 mm through its thimble divisions; 0.1 mm belongs to the vernier calliper and 1 mm to the metre rule.",
          "remediationTip": "Rank the three length instruments: rule 1 mm, vernier 0.1 mm, micrometer 0.01 mm."
        },
        {
          "id": "q-phy-experimental-physics-paper-3-skills-2",
          "quizId": "quiz-phy-experimental-physics-paper-3-skills",
          "questionText": "How is parallax error avoided when reading a scale?",
          "optionA": "By placing the eye directly opposite the pointer, in line perpendicular to the scale.",
          "optionB": "By taking the mean of five readings in a notebook.",
          "optionC": "By tapping the instrument before each reading.",
          "optionD": "By subtracting the zero error afterwards.",
          "correctOption": "A",
          "subConcept": "Parallax",
          "explanation": "Parallax is a viewing-angle error, so the eye must be square on to the pointer; averaging reduces random error and zero correction removes systematic error, but neither removes parallax at the moment of reading.",
          "remediationTip": "Match each error to its remedy: parallax to eye position, zero error to correction, random scatter to repeats."
        },
        {
          "id": "q-phy-experimental-physics-paper-3-skills-3",
          "quizId": "quiz-phy-experimental-physics-paper-3-skills",
          "questionText": "Which column heading follows the accepted table convention?",
          "optionA": "length only, units written beside each entry",
          "optionB": "cm only",
          "optionC": "l = cm",
          "optionD": "l / cm",
          "correctOption": "D",
          "subConcept": "Recording readings",
          "explanation": "The heading quantity / unit, here l / cm, lets the entries be plain numbers; heading the column with no unit or repeating units inside every entry both cost presentation marks.",
          "remediationTip": "Write quantity over unit in the heading, then bare consistently rounded numbers beneath."
        },
        {
          "id": "q-phy-experimental-physics-paper-3-skills-4",
          "quizId": "quiz-phy-experimental-physics-paper-3-skills",
          "questionText": "A straight line of best fit has been drawn through scattered points. How is its slope correctly obtained?",
          "optionA": "Divide the highest y reading by the lowest x reading in the table.",
          "optionB": "Choose two well-separated points on the drawn line and divide the vertical change by the horizontal change.",
          "optionC": "Average all the y values and all the x values.",
          "optionD": "Join the first and last plotted points and measure that segment.",
          "correctOption": "B",
          "subConcept": "Slope",
          "explanation": "The slope of the best-fit line comes from two widely separated points on the line itself, which smooths out the scatter; joining raw first and last points throws away the benefit of the fit.",
          "remediationTip": "Mark a large triangle on the line, at least half the plotted length, then read its two corner points."
        },
        {
          "id": "q-phy-experimental-physics-paper-3-skills-5",
          "quizId": "quiz-phy-experimental-physics-paper-3-skills",
          "questionText": "Why are readings repeated three times and averaged in Paper 3 work?",
          "optionA": "To reduce the effect of random error on the quoted value.",
          "optionB": "To remove the least count of the instrument completely.",
          "optionC": "To correct a positive zero error automatically.",
          "optionD": "To make the experiment finish faster.",
          "correctOption": "A",
          "subConcept": "Repeats and averages",
          "explanation": "Repeats scatter by chance, and the mean cancels much of that scatter. Zero error is systematic and must be corrected once; least count still limits precision no matter how many repeats are taken.",
          "remediationTip": "Random error yields to averaging, systematic error yields only to correction or calibration."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t1-elasticity-hooke-pressure",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Elasticity, Hooke's Law and Pressure of Fluids",
    "description": "Elasticity and Hooke's law (F = k e), the limit of proportionality and the plastic range, spring constant and strain energy, the Young modulus idea, then the pressure of fluids at rest: liquid pressure P = rho g h, the manometer, upthrust and Archimedes principle, floatation, and atmospheric pressure read by a barometer.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Elasticity is the property by which a body regains its original size and shape after the deforming force is removed; a spring, a rubber band and a steel wire are all elastic to different degrees.\n• Hooke's law: \"load is proportional to extension, provided the elastic limit is not exceeded\", written F = k e, where k is the spring constant in N per m.\n• The gradient of a force against extension graph is the spring constant; a steeper line means a stiffer spring.\n• The limit of proportionality is the point up to which F = k e holds; beyond it the graph curves.\n• The elastic limit is the greatest load from which the body still returns fully; past it the body is permanently stretched, the plastic range.\n• Strain energy stored = area under the graph = 1/2 F e = 1/2 k e squared, measured in joules.\n• Young modulus idea: stress = F/A and strain = e/L; within the elastic limit stress is proportional to strain, and the constant ratio E = stress over strain is the Young modulus.\n• A wire, not only a spring, stretches; steel wire is used in school labs with a vernier calliper or spherometer to read tiny extensions.\n• Pressure is force per unit area, P = F/A, in pascals, where 1 Pa = 1 N per m squared.\n• Pressure in a liquid at rest depends only on depth, density and g: P = rho g h; it acts equally in all directions and is independent of the container shape.\n• A manometer uses a column of liquid; a U-tube reads a pressure difference from the height difference, delta-P = rho g delta-h.\n• Upthrust is the upward force a fluid exerts on a body; by Archimedes principle the upthrust equals the weight of fluid displaced.\n• A body floats when its weight equals the upthrust; a cube of density 600 kg per m cubed in water sits with 60 percent submerged.\n• Atmospheric pressure is the weight of the air column above us, about 1.0 x 10 to the 5 Pa at sea level; a barometer reads it as a column of mercury about 76 cm high.\n• A drinking straw and a suction cup work because atmospheric pressure pushes the liquid or object up when the pressure above is reduced.",
    "detailedNotes": {
      "overview": "This lesson links two branches of mechanics that WASSCE loves to combine: the stretching of solids and the pressure exerted by fluids at rest. You will state Hooke's law with its condition, read a force against extension graph to find the spring constant and the energy stored, and separate the limit of proportionality from the elastic limit. You will then move to fluids, using P = F/A and P = rho g h to solve pressure problems, explain how a manometer and a barometer work, and apply Archimedes principle to upthrust, floatation and relative density. Every quantity carries an SI unit, and every worked answer must show it.",
      "introduction": "Work through the elasticity part with an actual spring and a set of slotted masses in the school laboratory: measure the unstretched length, add 100 g at a time, record each extension and plot force against extension on graph paper. The straight-line part of that graph is where Hooke's law holds, and its gradient is the spring constant you will quote. Then punch three holes down the side of a tin can, stand it in the sink and watch the jets; the lowest jet travels furthest, and that one observation carries the whole of liquid pressure. Keep the units disciplined from the first line, because a correct method still loses marks when the unit is missing.",
      "realWorldContext": "Engineers at the Akosombo and Koforidua power stations rate every pipe and vessel by the pressure it must hold, which is P = rho g h applied to a column of water. A block moulder in Kumasi knows a heavily loaded trotro suspension sags and that a spring overloaded past its elastic limit stays down and has lost its elasticity, the same plastic deformation you model on the graph. Fisher-folk hauling nets off Elmina feel the pressure climb with depth, adding about one extra atmosphere for every ten metres of water. A bottled-water plant at Tema uses a manometer to check the pressure in its filling line, and a simple barometer on a laboratory window sill at Cape Coast reads the falling air pressure that warns of rainy-season storms.",
      "objectives": [
        "State Hooke's law with its condition and define spring constant, limit of proportionality and elastic limit",
        "Determine the spring constant and the strain energy stored from a force against extension graph",
        "Explain the Young modulus as the ratio of stress to strain within the elastic limit",
        "Calculate pressure in a liquid using P = rho g h and describe the action of a manometer",
        "Apply Archimedes principle to upthrust and floatation, and explain atmospheric pressure and the barometer"
      ],
      "sections": [
        {
          "title": "Elasticity and Hooke's Law",
          "content": "A material is elastic if it recovers its original dimensions once the stretching or compressing force is taken away. Robert Hooke found that, for many materials and small deformations, the extension produced is directly proportional to the force applied, provided a limit called the elastic limit is never crossed. We write this as F = k e, where F is the applied force in newtons, e is the extension measured from the unstretched length in metres, and k is the spring constant, or stiffness, in N per m. The spring constant is numerically the force needed to stretch the spring by one metre, so a large k means a stiff spring and a small k means a slack one. When springs are joined end to end in series the same force acts on each and the extensions add, so the combination is softer than any one spring; when springs are placed side by side in parallel they share the load, so the combination is stiffer. A standard laboratory task is to hang a spring vertically, add slotted masses of known weight, tabulate force against extension and plot the values; the result is a straight line through the origin whose gradient is k.",
          "bulletPoints": [
            "Hooke's law holds only up to the limit of proportionality; always state that condition.",
            "F = k e, with k in N per m; k is the force that gives unit extension.",
            "Extension is the change in length, e = stretched length minus original length, not the total length.",
            "Series springs are softer because extensions add; parallel springs are stiffer because they share the force.",
            "The gradient of a force against extension graph equals the spring constant."
          ],
          "keyTakeaway": "Within the elastic limit, extension is proportional to load, and the constant of proportionality is the spring constant read from the gradient.",
          "realWorldExample": "The seat springs and suspension of a trotro on the Accra-Kumasi road obey Hooke's law over their normal travel, which is why a lightly loaded vehicle rides higher than one packed with passengers and goods."
        },
        {
          "title": "Elastic Limit, Plastic Range and Strain Energy",
          "content": "Loading a spring beyond its limit of proportionality does not at once break it. On the graph the line ceases to be straight, and if you stretch far enough the body enters the plastic range, where a permanent set remains after the force is removed. The elastic limit is the greatest extension from which the body still returns completely to its original length, and the small gap between the limit of proportionality and the elastic limit is where the material is still elastic but no longer obeys Hooke's law linearly. Work done in stretching the spring is not lost; it is stored as elastic strain energy and is given back when the spring contracts. That stored energy equals the area under the force against extension line, so for a spring obeying Hooke's law the energy is E = 1/2 F e = 1/2 k e squared. To define the Young modulus, a measure of a material's stiffness that does not depend on the size of the particular sample, we take stress as force per cross-sectional area, F/A, and strain as extension per original length, e/L. Within the elastic limit stress is proportional to strain, and the constant ratio E = stress over strain is the Young modulus, with the same unit as stress, the pascal.",
          "bulletPoints": [
            "The limit of proportionality marks where the straight-line graph begins to curve.",
            "The elastic limit is the point up to which no permanent stretch remains.",
            "Beyond the elastic limit is the plastic range: a permanent set appears.",
            "Strain energy = area under the graph = 1/2 F e = 1/2 k e squared.",
            "Young modulus = stress over strain = (F/A) divided by (e/L), valid only within the elastic region."
          ],
          "keyTakeaway": "A body can stay elastic without strictly obeying Hooke's law between the two limits, but once the elastic limit is passed the deformation becomes permanent.",
          "realWorldExample": "A builder straightening a bent steel door frame knows a small bend springs back but a hard bend keeps its new shape; that second bend passed the elastic limit of the metal."
        },
        {
          "title": "Pressure in Liquids and the Manometer",
          "content": "Pressure is thrust per unit area, P = F/A, and its SI unit is the pascal, equal to one newton per square metre. A solid presses only on the surface that supports it, but a liquid at rest presses on every surface it touches, and at a point the pressure acts equally in all directions. The pressure due to a column of liquid at depth h is P = rho g h, where rho is the density in kg per cubic metre and g is taken as 10 m per second squared in most WAEC workings; the important result is that this pressure depends only on depth, density and g, never on the shape or width of the container. This is why jets from three holes drilled down the side of a can get stronger with depth: the deeper hole has a taller column of water above it. The total pressure at a surface open to air is the atmospheric pressure plus the liquid pressure, called the absolute pressure. A manometer turns a pressure difference into a readable height difference; in its simple U-tube form one limb connects to the gas supply and the other is open to the air, and the vertical height difference delta-h of the liquid column gives delta-P = rho g delta-h. For small accurate pressures a water or spirit manometer is preferred because a low-density liquid gives a taller and more readable column.",
          "bulletPoints": [
            "P = F/A defines pressure; the unit is the pascal, N per m squared.",
            "Liquid pressure P = rho g h depends only on depth, density and g.",
            "At a point in a liquid the pressure acts equally in all directions.",
            "Absolute pressure = atmospheric pressure plus liquid (gauge) pressure.",
            "A U-tube manometer reads delta-P as rho g delta-h."
          ],
          "keyTakeaway": "Deeper and denser mean more pressure, and the shape of the vessel never changes the pressure at a given depth.",
          "realWorldExample": "Stand-pipes that feed water to houses on the hills around Akwapim rely on depth: the pressure at a stand-pipe rises with the height of the reservoir above it, exactly as P = rho g h predicts."
        },
        {
          "title": "Upthrust, Archimedes and Floatation",
          "content": "When a body is placed in a fluid it seems lighter, because the fluid pushes up on it with a force called upthrust. Archimedes principle states that the upthrust on a body wholly or partly immersed in a fluid equals the weight of the fluid the body displaces. The upthrust exists because pressure increases with depth, so the downward-facing force on the lower face of the body is greater than the force on its upper face, and that difference is the net upward push. We measure it directly as the apparent loss in weight: upthrust = weight in air minus weight in the fluid. A body floats when its own weight equals the upthrust available from the fluid it can displace; it sinks if it weighs more than the weight of the fluid it displaces even when fully under. This gives a clean test using densities: a solid of uniform density floats in a liquid if its density is less than the liquid's density, and the fraction of its volume that is submerged equals the ratio of the solid's density to the liquid's density. Relative density, the ratio of the density of a substance to the density of water, is measured on these principles with a hydrometer, a weighted sealed tube that sinks deeper in a lighter liquid and rides higher in a denser one.",
          "bulletPoints": [
            "Upthrust equals the weight of fluid displaced (Archimedes principle).",
            "Upthrust = weight in air minus apparent weight in the fluid.",
            "A body floats when its weight equals the upthrust.",
            "Fraction submerged = density of solid divided by density of liquid.",
            "A hydrometer measures relative density from how deeply it sinks."
          ],
          "keyTakeaway": "Whether a thing floats is decided by densities: a cube of density 600 kg per cubic metre sits with 60 percent of its volume under water.",
          "realWorldExample": "A canoe hollowed from a single tree floats on the Volta near Kpong because its average density, including the trapped air, is less than water, while a steel fishing weight of the same size sinks because its density is far greater."
        },
        {
          "title": "Atmospheric Pressure and the Barometer",
          "content": "Air has weight, so every surface on Earth carries the pressure of the column of atmosphere above it. At sea level this atmospheric pressure is about 1.0 x 10 to the 5 Pa, enough to press a force of roughly 1.5 x 10 to the 5 newtons on the top of a desk of area 1.5 square metres; we do not notice it because the pressure inside our bodies balances it. Torricelli measured this pressure with a barometer: a long glass tube, filled with mercury and inverted into a dish of mercury, drains until the mercury column stands about 76 cm above the surface of the dish at sea level, and that height is the reading of atmospheric pressure. Using P = rho g h with the density of mercury 13600 kg per cubic metre and g = 10 m per second squared, the column balances a pressure of 13600 x 10 x 0.76 = 103360 Pa, which we round to about 1.0 x 10 to the 5 Pa, one standard atmosphere. A simpler school instrument, the aneroid barometer, uses a partially evacuated metal box that flexes as the outside pressure changes. Suction is a common source of confusion: a straw does not pull liquid up; removing air from the straw lets the outside atmospheric pressure push the liquid up into the low-pressure space.",
          "bulletPoints": [
            "Atmospheric pressure at sea level is about 1.0 x 10 to the 5 Pa.",
            "A mercury barometer stands about 76 cm tall at sea level.",
            "13600 x 10 x 0.76 = 103360 Pa, rounded to one atmosphere.",
            "Pressure falls with altitude, so a barometer can act as an altimeter.",
            "Suction works because atmospheric pressure pushes when a low-pressure region is made."
          ],
          "keyTakeaway": "A barometer is a manometer reading the weight of the air, and about 76 cm of mercury balances one atmosphere.",
          "realWorldExample": "Bottled-water filling lines on the Tema industrial belt use reduced pressure so that atmospheric pressure pushes water into the pack, and the plant log records a barometer reading that shifts noticeably between the harmattan and the rainy season."
        }
      ],
      "commonMistakes": [
        "Writing Hooke's law as load proportional to total length instead of extension; use e = stretched length minus original length, not the whole stretched length.",
        "Quoting a spring constant with no unit, or in N per cm when N per m is asked; 100 N per m equals 1 N per cm, and a factor of 100 mismatch loses the answer mark.",
        "Confusing the limit of proportionality with the elastic limit; the first is where linearity ends and the second is where elasticity ends, and they are not the same point.",
        "Claiming liquid pressure depends on the volume of water or the width of the vessel; P = rho g h uses depth only, so a thin tall column can press harder than a wide shallow tank.",
        "Forgetting to convert centimetres to metres in P = rho g h and in the manometer; a 20 cm head is 0.2 m, and leaving it as 20 multiplies the pressure by 100."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): when a force against extension table is given, the spring constant is the gradient, so take two points on the straight part and divide the change in force by the change in extension; beware a graph that curves, where Hooke's law no longer applies.",
        "Paper 2 (theory or structured): a method mark (M1) is awarded for writing the correct formula, for example P = rho g h, before substituting; the answer mark (A1) then needs the number with its unit, so never leave off the pascal or the N per m.",
        "In multi-part fluid questions carry-through error is usually forgiven: if your arithmetic slips after a correct substitution, later parts marked from your wrong value can still earn method marks, so always show every substitution line.",
        "Paper 3 (practical or alternative practical): know how to find the spring constant and elastic limit from a spring-and-masses experiment and state the precautions, read the scale at eye level to avoid parallax, load gently, and do not exceed the elastic limit.",
        "Give units in every table entry; when measuring the diameter of a wire for a Young modulus question, take several readings along the wire and average them, and expect the examiner to look for that averaging and for the vernier or micrometer reading to 0.1 mm or 0.01 mm."
      ],
      "summaryChecklist": [
        "Can I state Hooke's law with its condition and find the spring constant from a force against extension graph?",
        "Can I distinguish the limit of proportionality from the elastic limit and describe the plastic range?",
        "Can I compute the strain energy stored in a stretched spring as half the product of force and extension?",
        "Can I calculate liquid pressure with P = rho g h and explain how a manometer reads a pressure difference?",
        "Can I apply Archimedes principle to upthrust and floatation and explain how a barometer measures atmospheric pressure?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-elasticity-1",
        "title": "Spring Constant, Extension and Stored Energy",
        "problem": "A spiral spring has an unstretched length of 12.0 cm. When a load of 4.0 N hangs from it, its length becomes 16.0 cm. Assuming the elastic limit is not exceeded, find (a) the spring constant, (b) the length of the spring under a 10.0 N load, and (c) the strain energy stored in the 4.0 N stretched state.",
        "stepByStepSolution": [
          "Step 1 (M1): extension e = stretched length minus original length = 16.0 - 12.0 = 4.0 cm = 0.04 m.",
          "Step 2 (M1): apply Hooke's law F = k e, so k = F / e = 4.0 / 0.04.",
          "Step 3 (A1): k = 100 N per m.",
          "Step 4 (M1): for the 10.0 N load, e = F / k = 10.0 / 100 = 0.10 m = 10 cm.",
          "Step 5 (A1): length = original plus extension = 12.0 + 10.0 = 22.0 cm.",
          "Step 6 (M1): strain energy = 1/2 F e = 1/2 x 4.0 x 0.04.",
          "Step 7 (A1): energy stored = 0.08 J."
        ],
        "keyTakeaway": "Convert the extension to metres before using F = k e, and read the answer as the change in length, not the stretched length."
      },
      {
        "id": "ex-phy-pressure-1",
        "title": "Upthrust and Floatation of a Floating Cube",
        "problem": "A solid cube of side 10 cm floats in water of density 1000 kg per cubic metre with 60 percent of its volume below the surface. Take g = 10 m per second squared. Find (a) the volume of water displaced, (b) the upthrust on the cube, and (c) the density of the material of the cube.",
        "stepByStepSolution": [
          "Step 1 (M1): volume of cube = 10 x 10 x 10 = 1000 cm cubed = 1.0 x 10 to the -3 m cubed.",
          "Step 2 (M1): volume of water displaced = 0.60 x 1.0 x 10 to the -3 = 6.0 x 10 to the -4 m cubed.",
          "Step 3 (M1): by Archimedes principle upthrust = weight of water displaced = (density x volume) x g = (1000 x 6.0 x 10 to the -4) x 10.",
          "Step 4 (A1): mass of water displaced = 0.60 kg, so upthrust = 6.0 N.",
          "Step 5 (M1): for floatation the weight of the cube equals the upthrust, so weight = 6.0 N and mass = 6.0 / 10 = 0.60 kg.",
          "Step 6 (M1): density of cube = mass / volume = 0.60 / (1.0 x 10 to the -3).",
          "Step 7 (A1): density of the cube = 600 kg per cubic metre."
        ],
        "keyTakeaway": "A floating body displaces its own weight of fluid, and the fraction submerged equals the ratio of its density to the fluid density."
      }
    ],
    "quiz": {
      "id": "quiz-phy-elasticity-pressure",
      "topicId": "shs2-phy-t1-elasticity-hooke-pressure",
      "title": "Elasticity and Fluid Pressure Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-elasticity-1",
          "quizId": "quiz-phy-elasticity-pressure",
          "questionText": "A spring of constant 100 N per m is stretched by 5.0 cm from its natural length. What load is applied?",
          "optionA": "5.0 N",
          "optionB": "500 N",
          "optionC": "0.5 N",
          "optionD": "20 N",
          "correctOption": "A",
          "subConcept": "Hooke's law",
          "explanation": "F = k e = 100 x 0.05 = 5.0 N. The value 500 N is the classic slip of using 5 cm as though it were 5 m, and 20 N comes from dividing instead of multiplying.",
          "remediationTip": "Convert centimetres to metres before multiplying by k, then check the order of magnitude."
        },
        {
          "id": "q-phy-elasticity-2",
          "quizId": "quiz-phy-elasticity-pressure",
          "questionText": "Which statement gives Hooke's law correctly?",
          "optionA": "Extension is inversely proportional to load.",
          "optionB": "Load is proportional to extension provided the elastic limit is not exceeded.",
          "optionC": "Force is proportional to the square of extension.",
          "optionD": "Extension is proportional to load for every load with no upper limit.",
          "correctOption": "B",
          "subConcept": "Hooke's law condition",
          "explanation": "Hooke's law is F = k e only up to the elastic limit, so the condition must be stated. Option D drops the condition and option A reverses the relationship.",
          "remediationTip": "Always attach the phrase provided the elastic limit is not exceeded to Hooke's law."
        },
        {
          "id": "q-phy-elasticity-3",
          "quizId": "quiz-phy-elasticity-pressure",
          "questionText": "A U-tube manometer contains water of density 1000 kg per cubic metre and the height difference between the limbs is 20 cm. What pressure difference does it indicate? (g = 10 m per second squared)",
          "optionA": "200 Pa",
          "optionB": "20 000 Pa",
          "optionC": "200 000 Pa",
          "optionD": "2000 Pa",
          "correctOption": "D",
          "subConcept": "Manometer",
          "explanation": "delta-P = rho g delta-h = 1000 x 10 x 0.2 = 2000 Pa. The options 20 000 Pa and 200 000 Pa come from leaving delta-h as 2 or 20 instead of 0.2 m.",
          "remediationTip": "Change the manometer height to metres first; 20 cm is 0.2 m."
        },
        {
          "id": "q-phy-elasticity-4",
          "quizId": "quiz-phy-elasticity-pressure",
          "questionText": "A swimmer is 5 m below the surface of fresh water of density 1000 kg per cubic metre. What is the gauge pressure due to the water alone? (g = 10 m per second squared)",
          "optionA": "50 000 Pa",
          "optionB": "5000 Pa",
          "optionC": "500 Pa",
          "optionD": "500 000 Pa",
          "correctOption": "A",
          "subConcept": "Liquid pressure",
          "explanation": "P = rho g h = 1000 x 10 x 5 = 50 000 Pa. Gauge pressure excludes the atmosphere; the absolute pressure would add about 100 000 Pa more.",
          "remediationTip": "Separate gauge pressure (rho g h only) from absolute pressure (rho g h plus atmosphere)."
        },
        {
          "id": "q-phy-elasticity-5",
          "quizId": "quiz-phy-elasticity-pressure",
          "questionText": "A uniform solid cube floats in water with half of its volume submerged. What is the density of the cube? (water = 1000 kg per cubic metre)",
          "optionA": "250 kg per cubic metre",
          "optionB": "1000 kg per cubic metre",
          "optionC": "500 kg per cubic metre",
          "optionD": "2000 kg per cubic metre",
          "correctOption": "C",
          "subConcept": "Floatation",
          "explanation": "Fraction submerged = density of solid / density of liquid, so 0.5 = density / 1000 and density = 500 kg per cubic metre. Option B would mean it is just submerged and neutral.",
          "remediationTip": "Use fraction submerged equals density ratio and check it is always less than one for a floater."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t1-temperature-thermal-expansion",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Temperature, Thermometers and Thermal Expansion",
    "description": "Temperature and its measurement, the construction and calibration of a liquid-in-glass thermometer and the fixed points, the Celsius, Fahrenheit and Kelvin scales, and thermal expansion in solids and liquids: linear, area and volume expansivity, the bimetal strip, and the anomalous expansion of water with its consequences in Ghanaian laboratories and climate.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Temperature measures hotness or coldness and, at particle level, the average kinetic energy of the particles; heat is energy transferred because of a temperature difference, not the same thing as temperature.\n• The degree Celsius is fixed by two fixed points at standard pressure: the lower fixed point (ice point, 0 degrees C) and the upper fixed point (steam point, 100 degrees C).\n• To calibrate a liquid-in-glass thermometer, mark the ice point, mark the steam point, divide the interval into 100 equal parts, then extend the scale.\n• A good thermometric liquid expands uniformly, does not wet the glass, is visible, and stays liquid over the range, so mercury or coloured alcohol is used.\n• Mercury is shiny and reads fast but is toxic and freezes near minus 39 degrees C; alcohol is safer and suits low temperatures but wets a dirty bore.\n• Scales: K = C + 273, and F = (9/5) C + 32 so that C = (5/9)(F minus 32); a rise of 1 degree C equals a rise of 1 kelvin but only 9/5 degree F.\n• Normal body temperature is about 37 degrees C, that is 98.6 degrees F or 310 K; a patient at 102.2 degrees F has a temperature of 39.0 degrees C.\n• Linear expansivity alpha is the increase in length per unit length per degree rise, so delta-L = L x alpha x delta-theta, in units of per degree C.\n• Area expansivity is about 2 alpha and volume (cubic) expansivity about 3 alpha for a solid, because expansion happens in every direction.\n• Typical values per degree C: iron about 12 x 10 to the -6, brass and copper about 19 x 10 to the -6, aluminium about 26 x 10 to the -6; a bimetal strip of brass and iron bends because brass expands more.\n• Liquids expand more than the solids holding them, so a liquid in a heated flask first dips then rises; apparent expansivity = real expansivity minus the glass expansivity.\n• Water is anomalous: cooled from 4 degrees C towards 0 degrees C it expands, reaching maximum density at 4 degrees C, so ice floats and pipes can burst.\n• Uses and hazards of expansion: expansion gaps in bridges and rails, bimetal thermostats and fire alarms, sagging overhead lines in heat, and a corked bottle of water left in the sun cracking.\n• A thermometer is read with the eye level with the meniscus to avoid parallax, with the bulb immersed but not touching the vessel base or wall.",
    "detailedNotes": {
      "overview": "This topic first fixes what temperature really is and how it is measured, then builds the whole of thermal expansion on that idea. You will describe the construction and calibration of a liquid-in-glass thermometer from the two fixed points, convert confidently between the Celsius, Fahrenheit and Kelvin scales, and use the expansivity equation delta-L = L alpha delta-theta with its area and volume partners. You will explain the bimetal strip and the exam-favourite case of the anomalous expansion of water. The practical thread runs through every part: Ghana's hot climate and its school laboratories make expansion a real problem, not an abstraction.",
      "introduction": "Start by reading three thermometers in the laboratory: one in melting ice to confirm the ice point, one in steam above boiling water to confirm the steam point, and one measuring your own body temperature. Then take a long brass or iron rod fitted with a pointer, heat it, and watch the pointer travel along a scale; that motion is linear expansion made visible. Record your temperature conversions in a table until the formulae are automatic, because WASSCE expects them without hesitation and marks the working line by line.",
      "realWorldContext": "On the Takoradi railway sidings the gaps left between lengths of rail are calculated for the heat of a March afternoon; a rail laid tight in the cool harmattan will buckle along its length when the sun brings it past fifty degrees. Overhead ECG distribution lines in Tamale sag visibly lower in dry-season heat because the metal expands and lengthens. In a school laboratory at Ho a glass bottle of water, corked tight and left on a sunny sill, pushes its cork out or cracks because water expands as it warms and again, more forcefully, if it freezes. A domestic thermostat and the alarm in a refrigerated sachet-water plant both ride on the bimetal strip, which bends as one of its two metals expands faster than the other. A clinical thermometer reading 102.2 degrees F at a health post tells the nurse the patient is at 39.0 degrees C.",
      "objectives": [
        "Define temperature, heat and the fixed points, and describe the calibration of a liquid-in-glass thermometer",
        "Convert between the Celsius, Fahrenheit and Kelvin scales without error",
        "Define linear, area and volume expansivity and solve problems using delta-L = L alpha delta-theta",
        "Explain the construction and working of a bimetal strip and its use in everyday devices",
        "Describe the anomalous expansion of water and its effects on ice, pipes and aquatic life"
      ],
      "sections": [
        {
          "title": "Temperature and the Fixed Points",
          "content": "Temperature is a measure of how hot a body is and, on the particle theory, a measure of the average kinetic energy of its particles; it is not the same as heat, which is the energy actually transferred from one body to another because of a temperature difference. A thermometric property is any measurable property that changes with temperature, so a liquid-in-glass thermometer uses the expansion of a liquid, while other thermometers use electrical resistance, gas pressure or the emf of a thermocouple. The Celsius scale is built on two fixed points taken at standard atmospheric pressure: the lower fixed point, or ice point, the temperature of pure melting ice, marked 0 degrees C, and the upper fixed point, or steam point, the temperature of steam above pure boiling water, marked 100 degrees C. To calibrate a thermometer, expose its bulb first to melting ice and mark the level of the liquid, then to steam and mark that level, divide the distance between the two marks into one hundred equal parts, and continue the marks beyond the two points. A thermometer reads the temperature of whatever it touches once the two reach thermal equilibrium, so a reading is trustworthy only when the liquid has stopped moving.",
          "bulletPoints": [
            "Temperature is average kinetic energy; heat is transferred energy.",
            "Lower fixed point (ice point) is 0 degrees C; upper fixed point (steam point) is 100 degrees C.",
            "Calibrate by marking the ice level and the steam level, then dividing the gap into 100 parts.",
            "Read at eye level at the meniscus to avoid parallax, and do not let the bulb touch the vessel.",
            "A reading is valid only at thermal equilibrium, when the liquid column has stopped moving."
          ],
          "keyTakeaway": "The two fixed points define the scale, and calibration is simply dividing the gap between them into one hundred equal degrees.",
          "realWorldExample": "A science teacher at Cape Coast checks a suspect laboratory thermometer by placing it in crushed pure ice; a reading other than 0 degrees C warns the class that the instrument is out and must be corrected or replaced."
        },
        {
          "title": "The Thermometric Liquid and Scale Conversions",
          "content": "A good thermometric liquid must expand steadily and uniformly with temperature, must not stick to or wet the glass, must be easily seen, must stay liquid across the range of interest, and must respond quickly. Mercury satisfies most of these: it is opaque and shiny, conducts heat well and does not wet clean glass, but it freezes at about minus 39 degrees C and is dangerously toxic if the tube breaks. Coloured alcohol is safer and stays liquid to much lower temperatures, which is why it is used in cold-region thermometers, but it wets the bore if the glass is dirty and can leave a false reading. The relationship between the common scales and the Kelvin scale is what WASSCE tests most often: F = (9/5) C + 32, rearranged as C = (5/9)(F minus 32), and K = C + 273. Take care with a change of temperature: a change of one degree Celsius equals a change of one kelvin, because the scales share the same degree size, but equals a change of only 9/5 degree Fahrenheit. A reading of 25 degrees C is 298 K and 77 degrees F, and normal body temperature of 37 degrees C is 310 K and 98.6 degrees F.",
          "bulletPoints": [
            "Requirements: uniform expansion, no wetting, visible, liquid over the range, quick response.",
            "Mercury: fast and clear but toxic, and freezes near minus 39 degrees C.",
            "Alcohol: safer and works at low temperatures but wets a dirty bore.",
            "F = (9/5) C + 32, so C = (5/9)(F minus 32).",
            "K = C + 273; a change of 1 degree C equals 1 kelvin but 9/5 degree F."
          ],
          "keyTakeaway": "Conversions use F = (9/5)C + 32 and K = C + 273; the common error is applying the reading formula to a temperature change.",
          "realWorldExample": "A nurse at a health centre near Sunyani reads a patient's temperature as 102.2 degrees F on an imported thermometer and reports it as C = (5/9)(102.2 minus 32) = 39.0 degrees C, a high fever."
        },
        {
          "title": "Linear Expansivity of Solids",
          "content": "When a solid is heated its particles vibrate more strongly and push one another slightly further apart, so every dimension grows. Linear expansivity, the coefficient alpha, is defined as the increase in length per unit original length per degree rise in temperature, and its unit is per degree C, or per kelvin. The working equation is delta-L = L alpha delta-theta, where L is the original length, alpha the linear expansivity and delta-theta the temperature rise; the new length is simply L plus delta-L. Because materials have different alpha values, a brass rod lengthens more than an iron rod of the same length under the same heating. Typical school values are about 12 x 10 to the -6 per degree C for iron or steel, 19 x 10 to the -6 for brass and copper, and 26 x 10 to the -6 for aluminium. On long structures the effect is large enough to matter: a 30 m steel rail whose temperature rises by 30 degrees C lengthens by 30 x 12 x 10 to the -6 x 30 = 0.0108 m, about 1.1 cm, which is why expansion gaps and roller bearings are built into railways and bridges.",
          "bulletPoints": [
            "alpha is the increase in length per unit length per degree, in units per degree C.",
            "delta-L = L alpha delta-theta; new length = L plus delta-L.",
            "A hole in a plate expands as though the hole were filled with the same metal.",
            "Iron about 12, brass and copper about 19, aluminium about 26 (all x 10 to the -6 per degree C).",
            "Long spans need expansion gaps; a 30 m rail rising 30 degrees C grows about 1.1 cm."
          ],
          "keyTakeaway": "Length change is proportional to original length, the material's alpha and the temperature change, and a gap or a hole grows, not shrinks, when heated.",
          "realWorldExample": "The joints of a concrete bridge deck over a river near Afram are fitted with metal expansion pieces so the deck can stretch in midday heat and shrink at night without cracking."
        },
        {
          "title": "Area and Volume Expansivity, and the Bimetal Strip",
          "content": "A solid expands in every direction, so a flat plate grows both longer and wider, and a three-dimensional body grows in length, width and height. The area, or superficial, expansivity is approximately twice the linear expansivity, beta = 2 alpha, because area depends on two lengths; the volume, or cubic, expansivity is approximately three times the linear expansivity, gamma = 3 alpha, because volume depends on three lengths. These hold while alpha is small, which it always is for solids. A liquid, having no fixed shape of its own, is described only by its cubic expansivity, and it expands noticeably more than the glass vessel holding it, which is why the level of a liquid in a heated flask first dips, as the glass enlarges the container, and then rises as the liquid catches up. The practical device built on unequal expansion is the bimetal strip: two thin strips, usually of brass and of iron, riveted or welded together. On heating, the brass side, having the larger alpha, lengthens more, so the strip curves with brass on the outside of the bend; on cooling it curves the other way. Wound into a coil with a pointer, its bending drives a thermostat switch or the needle of a dial thermometer.",
          "bulletPoints": [
            "Area expansivity beta is about 2 alpha; volume expansivity gamma is about 3 alpha.",
            "A liquid has only cubic expansivity and expands more than its glass container.",
            "The bimetal strip bends with the higher-expansivity metal on the outer side when heated.",
            "A brass-and-iron coil is used in thermostats, dial thermometers and fire alarms.",
            "Because alpha is tiny, the doubling and tripling are very close to exact."
          ],
          "keyTakeaway": "Area doubles and volume triples the linear expansivity, and a bimetal strip turns the difference between two expansivities into useful motion.",
          "realWorldExample": "An old dial thermostat in a school store-room at Techiman works because a brass-and-iron bimetal strip bends enough as the room warms to open or close a contact."
        },
        {
          "title": "The Anomalous Expansion of Water",
          "content": "Almost every substance contracts steadily as it cools, but water behaves unusually between 4 degrees C and 0 degrees C. On cooling from about 20 degrees C, water contracts as expected until it reaches 4 degrees C, where it has its greatest density and smallest volume; cooled further towards 0 degrees C it expands instead of contracting, and when it freezes into ice it expands by roughly one-tenth of its volume. Because ice is less dense than the water beneath it, ice floats, and a lake freezes from the top downward, leaving denser 4 degrees C water at the bottom so fish can survive the coldest weather. This anomaly is also why a sealed bottle of water left in a freezing compartment bursts and why water pipes that fill completely and then freeze can split. It has a laboratory consequence in Ghana's warm climate too: if a density bottle is calibrated with water at one temperature and then used at another, the small change in water's density between those readings is real, and careful work corrects for it. The take-home fact is that water reaches maximum density at 4 degrees C, not at its freezing point.",
          "bulletPoints": [
            "Water is densest at 4 degrees C; cooled further it expands.",
            "Ice is less dense than water, so ice floats and lakes freeze from the top down.",
            "Freezing water expands about one-tenth in volume, bursting sealed bottles and pipes.",
            "Anomalous expansion allows aquatic life to survive under cold surface ice.",
            "Density-bottle work must allow for the small change of water density with temperature."
          ],
          "keyTakeaway": "Water's maximum density at 4 degrees C is the anomaly behind floating ice, burst pipes and life under frozen lakes.",
          "realWorldExample": "In a cold highland snap a shallow metal rooftop water tank at Aburi, left full and corked overnight, cracks along a seam because the ice that formed inside it expanded; a tank drained half-full escapes the same damage."
        }
      ],
      "commonMistakes": [
        "Using delta-L = L alpha delta-theta with L in centimetres while alpha is given per metre; keep L in metres so delta-L comes out in metres, and convert once at the end.",
        "Treating a temperature change and a temperature reading alike: a change of 40 degrees C is a change of 72 degrees F, not the plus 32 formula, which applies only to a reading.",
        "Calling the upper fixed point the boiling point of any liquid; it is specifically the steam point of pure water at standard pressure, so impurities or altitude shift the mark.",
        "Believing a hole in a metal plate shrinks when the plate is heated; the hole expands exactly as if it were filled with the same metal.",
        "Confusing heat and temperature in definitions, or writing the Kelvin conversion backwards as C = K + 273 instead of K = C + 273, which sends every low temperature the wrong way."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): a scale-conversion item is very likely; memorise F = (9/5)C + 32 and K = C + 273, and sanity-check a body-temperature answer against about 37 degrees C or 310 K.",
        "Paper 2 (theory or structured): a method mark (M1) is given for writing the correct formula with substitution, and the answer mark (A1) needs the number and unit, so quote delta-L in metres or millimetres, never a bare figure.",
        "On a bimetal-strip question, describe what happens on heating and on cooling and state which metal expands more; the examiner looks for brass and iron named with the reason for the direction of bending.",
        "A 'why does ice float' or 'why do water pipes burst' item earns a mark for stating water's maximum density at 4 degrees C and its expansion on freezing; do not lose it on a vague answer.",
        "Paper 3 (practical): to calibrate or read a thermometer, list the expected precautions, pure ice for the lower point, steam for the upper point, eye level at the meniscus, and the bulb not touching the beaker base or side."
      ],
      "summaryChecklist": [
        "Can I define temperature and heat, name the two fixed points and describe how to calibrate a thermometer?",
        "Can I convert between Celsius, Fahrenheit and Kelvin and explain how a temperature change differs from a reading?",
        "Can I use delta-L = L alpha delta-theta and state the area and volume expansivity in terms of alpha?",
        "Can I explain the bimetal strip and why a liquid in a flask first falls then rises when heated?",
        "Can I describe the anomalous expansion of water and its effects on ice, pipes and aquatic life?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-temperature-1",
        "title": "Reading an Uncalibrated Liquid-in-Glass Thermometer",
        "problem": "On a certain liquid-in-glass thermometer the distance between the ice point and the steam point is 20.0 cm. On a hot day the top of the liquid column stands 13.0 cm above the ice-point mark. Find the temperature in degrees Celsius and then in kelvin.",
        "stepByStepSolution": [
          "Step 1 (M1): the whole interval between the fixed points stands for 100 degrees C and measures 20.0 cm, so each centimetre stands for 100 / 20.0 degrees C.",
          "Step 2 (M1): temperature C = (distance above ice point / total interval) x 100 = (13.0 / 20.0) x 100.",
          "Step 3 (A1): C = 65.0 degrees C.",
          "Step 4 (M1): convert to kelvin using K = C + 273.",
          "Step 5 (A1): K = 65 + 273 = 338 K."
        ],
        "keyTakeaway": "The fraction of the scale above the ice point equals the same fraction of 100 degrees, and kelvin is just the Celsius value shifted by 273."
      },
      {
        "id": "ex-phy-expansion-1",
        "title": "Expansion of a Brass Rod on Heating",
        "problem": "A uniform brass rod is 1.500 m long at 20 degrees C and is heated to 70 degrees C. Taking the linear expansivity of brass as 19 x 10 to the -6 per degree C, find (a) the increase in length and (b) the new length.",
        "stepByStepSolution": [
          "Step 1 (M1): temperature change delta-theta = 70 - 20 = 50 degrees C.",
          "Step 2 (M1): write delta-L = L x alpha x delta-theta = 1.500 x (19 x 10 to the -6) x 50.",
          "Step 3 (A1): delta-L = 0.001425 m, which is 1.425 mm.",
          "Step 4 (M1): new length = original plus delta-L = 1.500 + 0.001425.",
          "Step 5 (A1): new length = 1.5014 m (to four decimal places)."
        ],
        "keyTakeaway": "Length change is small for a short rod but real for a long span, so compute delta-L first and then add it to the original length."
      }
    ],
    "quiz": {
      "id": "quiz-phy-temperature-expansion",
      "topicId": "shs2-phy-t1-temperature-thermal-expansion",
      "title": "Temperature and Thermal Expansion Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-temperature-1",
          "quizId": "quiz-phy-temperature-expansion",
          "questionText": "Which pair of fixed points is used to calibrate a liquid-in-glass thermometer at standard pressure?",
          "optionA": "Pure melting ice and steam above boiling pure water",
          "optionB": "Boiling salt water and a running tap",
          "optionC": "Ice in salt and boiling oil",
          "optionD": "Room temperature and normal body temperature",
          "correctOption": "A",
          "subConcept": "Fixed points",
          "explanation": "The lower fixed point is pure melting ice (0 degrees C) and the upper fixed point is steam above pure boiling water (100 degrees C), both at standard pressure. Salt, oil and body temperature do not define the scale.",
          "remediationTip": "Learn the fixed points as pure ice and pure steam at standard pressure, nothing else."
        },
        {
          "id": "q-phy-temperature-2",
          "quizId": "quiz-phy-temperature-expansion",
          "questionText": "A temperature of 40 degrees C corresponds to which Fahrenheit reading?",
          "optionA": "72 degrees F",
          "optionB": "104 degrees F",
          "optionC": "122 degrees F",
          "optionD": "88 degrees F",
          "correctOption": "B",
          "subConcept": "Celsius-Fahrenheit conversion",
          "explanation": "F = (9/5) x 40 + 32 = 72 + 32 = 104 degrees F. The option 72 degrees F is the slip of forgetting to add the 32 after the multiply.",
          "remediationTip": "Do the multiply by 9/5 first, then remember to add 32."
        },
        {
          "id": "q-phy-expansion-3",
          "quizId": "quiz-phy-temperature-expansion",
          "questionText": "A metal has linear expansivity 12 x 10 to the -6 per degree C. What is its approximate volume (cubic) expansivity?",
          "optionA": "12 x 10 to the -6 per degree C",
          "optionB": "24 x 10 to the -6 per degree C",
          "optionC": "36 x 10 to the -6 per degree C",
          "optionD": "6 x 10 to the -6 per degree C",
          "correctOption": "C",
          "subConcept": "Volume expansivity",
          "explanation": "Cubic expansivity is about three times the linear expansivity, so 3 x 12 = 36 x 10 to the -6 per degree C. Option B (24) is the area expansivity, twice alpha.",
          "remediationTip": "Recall area is 2 alpha and volume is 3 alpha; count the dimensions."
        },
        {
          "id": "q-phy-expansion-4",
          "quizId": "quiz-phy-temperature-expansion",
          "questionText": "Water reaches its greatest density at which temperature?",
          "optionA": "0 degrees C",
          "optionB": "100 degrees C",
          "optionC": "37 degrees C",
          "optionD": "4 degrees C",
          "correctOption": "D",
          "subConcept": "Anomalous expansion of water",
          "explanation": "Because of anomalous expansion water is densest at 4 degrees C; cooled towards 0 degrees C it expands again. 0 degrees C is the freezing point, not the point of maximum density.",
          "remediationTip": "Link maximum density to 4 degrees C and the fact that ice floats."
        },
        {
          "id": "q-phy-temperature-5",
          "quizId": "quiz-phy-temperature-expansion",
          "questionText": "A bimetal strip made of brass and iron is heated. What happens?",
          "optionA": "It bends with the brass on the outside of the curve, because brass expands more.",
          "optionB": "It bends with the iron on the outside of the curve, because iron expands more.",
          "optionC": "It does not bend, because both metals expand by the same amount.",
          "optionD": "It straightens out, because metals contract when heated.",
          "correctOption": "A",
          "subConcept": "Bimetal strip",
          "explanation": "Brass has the greater linear expansivity, so on heating it lengthens more and the strip curves with brass on the outer side of the bend. Option B has the metals reversed and option C ignores the difference in alpha.",
          "remediationTip": "Remember brass above iron in expansivity, so the strip always curves away from the brass side on heating."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t1-fluids-in-motion-viscosity-bernoulli",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 7,
    "title": "Fluids in Motion: Viscosity, Terminal Velocity and Flow",
    "description": "Fluids that move: streamlines and the types of flow, laminar against turbulent; viscosity as internal friction and its measurement by the falling-sphere method; terminal velocity from the balance of weight, upthrust and drag; the Stokes idea for drag on a small sphere; the Bernoulli effect in atomisers and sprays, in river flow and settling tanks, and in the filtration of palm oil.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A streamline is the path of a fluid particle; streamlines never cross, and crowded streamlines mark a faster flow.\n• Steady (laminar) flow slides past in smooth layers with a constant velocity at any fixed point; a dye thread stays a single thread.\n• Above a critical speed flow becomes transitional and then turbulent (chaotic): eddies and swirls appear, the dye spreads and resistance rises sharply.\n• Viscosity is internal friction between layers of fluid sliding past each other; its SI unit is the newton-second per square metre (Pa s), and honey is far more viscous than water.\n• In liquids viscosity falls as temperature rises, which is why warm palm oil runs and filters faster; in gases viscosity rises with temperature.\n• A sphere falling through a viscous liquid experiences a backward viscous drag that grows with speed; when weight = upthrust + drag the net force is zero and the sphere descends at a constant terminal velocity.\n• The Stokes idea: drag on a tiny sphere moving slowly is proportional to its radius, its speed and the viscosity, F = 6 pi eta r v.\n• Terminal velocity increases with sphere size and density and decreases with fluid viscosity; fine silt stays suspended in river water long after coarse sand has dropped.\n• Bernoulli's principle: in a steady flow, where speed increases the pressure falls; fast air rushing over the mouth of a tube lifts the liquid in the tube and shatters it into a spray.\n• Atomisers, perfume and insecticide sprayers, chimney draught and the lift on an aeroplane wing all rely on the low pressure of a fast stream.\n• Water-treatment settling tanks slow the flow so suspended solids sink out, and a wide slow stretch of river drops its silt for the same reason.\n• Raindrops fall at typical terminal speeds of about 2 m per s for drizzle and up to about 9 m per s for large drops, which is why rainfall is gentle on the head and not a lethal hail of unimpeded spheres.",
    "detailedNotes": {
      "overview": "Earlier fluid lessons treated liquids and gases standing still; this one sets them moving. You will sort flows into steady (laminar) and turbulent (chaotic) by watching streamlines and a dye thread, define viscosity with its unit and measure it by timing a sphere that falls to terminal velocity through castor oil, and build the terminal-velocity idea from a balance of weight, upthrust and drag. You will then use the Bernoulli effect, the drop in pressure where a stream speeds up, to explain sprayers, draughts in chimneys, the sorting behaviour of rivers and the filtration of palm oil. Expect WASSCE to combine this with Archimedes, so keep the upthrust term in every force balance.",
      "introduction": "Work at three bench stations. First, drop a crystal of potassium permanganate into a beaker of still water and stir gently: watch the thread of colour run smoothly, then churn the water and see the turbulent swirls. Second, time a small steel ball between two marks taped on a tall jar of castor oil, at least five readings, and plot distance against time to see the constant slope that proves terminal velocity has been reached. Third, blow hard across the mouth of a horizontal tube whose vertical end dips into water; the water climbs and breaks into spray. Record every timing to 0.1 s and state units in each heading.",
      "realWorldContext": "The Ghana Water Company intake above the Kpong barrage feeds settling tanks where the flow is deliberately slowed so river silt drops to the bottom before filtration; the same sedimentation idea keeps the small stream behind a dam turbid or clear. Palm-oil processors in the Western Region warm the pressed oil before straining it through cloth because heated oil has a much lower viscosity and passes quickly, while cold oil clogs the weave. A farmer spraying weeds with a knapsack sprayer depends on the atomiser effect: air or pressure drives the chemical through a fine nozzle where the fast stream tears it into droplets. Mechanic-folk at Suame Magazine grade engine oil for Ghana's heat knowing viscosity thins as the sump warms, and drizzle over the Akwapim hills falls at roughly 2 m per s, slow enough that leaves catch it before it runs.",
      "objectives": [
        "Distinguish steady (laminar) from turbulent (chaotic) flow using streamlines and the behaviour of a dye thread",
        "Define viscosity with its SI unit and describe the falling-sphere method of measuring terminal velocity",
        "Explain the origin of terminal velocity from the balance of weight, upthrust and viscous drag",
        "State the Bernoulli effect and apply it to atomisers, sprays, chimney draught and the settling of silt in slow flow"
      ],
      "sections": [
        {
          "title": "Streamlines and the Types of Flow",
          "content": "A streamline is the path followed by a fluid particle as it moves, and we draw a crowd of them to picture a flow. Streamlines never cross, because a particle cannot be going two ways at one instant, and they crowd together where the flow speeds up, such as in the narrow part of a pipe. When a fluid moves slowly and smoothly, each layer sliding past its neighbour in an orderly fashion, the flow is called steady or laminar; at any fixed point the velocity stays constant with time, and a dye released into the stream travels as one thin thread. Increase the speed past a value called the critical speed and the flow first becomes transitional, with wavering bands, then turbulent (chaotic): eddies and whirls form, the dye spreads and churns, and energy is wasted in the swirling, so the resistance to motion rises sharply. The same water that carries a dye thread through a thin tube breaks into turmoil behind a fast trotro, where the turbulent wake drags dust and spray; smoke climbs a chimney smoothly for a short height before the stream destabilises into visible eddies. In a river the bed and banks hold back the layers touching them by friction, so the fastest water is near the surface at the middle of the channel while the flow creeps along the bottom; that velocity difference over depth is exactly the shearing of layers, the same geometry that produces viscous drag in the falling-sphere experiment.",
          "bulletPoints": [
            "Streamlines show the path of flow, never cross, and crowd where speed rises.",
            "Laminar flow: smooth layers, constant velocity at a point, dye stays a thread.",
            "Turbulent flow: eddies and swirls, dye spreads, resistance rises sharply.",
            "In a river the water is fastest near the surface at the middle, slowest at bed and banks.",
            "Whether a flow turns turbulent depends on speed, size of the channel, density and viscosity."
          ],
          "keyTakeaway": "Orderly layered motion at low speed is laminar; push past the critical speed and the flow breaks into eddies and becomes turbulent.",
          "realWorldExample": "Dust and leaves whirl in the turbulent wake behind a lorry on the Accra-Cape Coast road, while the air reaching the cab front still moves in smooth streamlines."
        },
        {
          "title": "Viscosity, the Falling Sphere and Terminal Velocity",
          "content": "Viscosity is internal friction in a moving fluid: when one layer slides over the next, molecular attraction between the layers drags on the motion, and a thick fluid like honey or palm oil resists far more than water. Its SI unit is the newton-second per square metre, the pascal-second. In liquids, heating gives the molecules enough kinetic energy to weaken the cohesive pull, so viscosity falls as temperature rises, which is why warm engine oil circulates easily in a Ghanaian afternoon and why heated palm oil strains through cloth quickly; in gases the opposite happens and viscosity rises with temperature. The school measurement uses a falling sphere: drop a small steel ball into a tall cylinder of castor oil or glycerine, start timing only after it has passed an upper mark well below the surface, and record the time to a lower mark a measured distance away; the speed from distance over time is the terminal velocity, and five such drops averaged keeps the random error small. At the instant of release the ball's weight wins and it accelerates, but as speed grows the upward viscous drag grows with it. Eventually the forces balance, weight = upthrust + drag, the net force is zero and the ball falls at constant speed, its terminal velocity. The Stokes idea expresses the drag on a very small sphere moving slowly as F = 6 pi eta r v, proportional to the viscosity, the radius and the speed together. So a bigger or denser sphere needs a greater speed to balance its weight and falls faster, while a thicker fluid slows every sphere: this is why fine clay silt drifts down a river for kilometres while coarse sand drops within metres, and why raindrops, small and light, reach gentle terminal speeds of a few metres per second instead of accelerating unchecked.",
          "bulletPoints": [
            "Viscosity is internal friction between moving layers; the unit is N s per m squared.",
            "Liquid viscosity falls with temperature; gas viscosity rises with temperature.",
            "Falling-sphere method: time the sphere between two marks after steady speed is reached.",
            "Terminal velocity condition: weight = upthrust + viscous drag, net force zero.",
            "Stokes idea: drag = 6 pi eta r v, so drag is proportional to radius and speed."
          ],
          "keyTakeaway": "A falling body in a viscous fluid stops accelerating when drag plus upthrust equals its weight; that constant speed is the terminal velocity.",
          "realWorldExample": "A palm-oil processor in the Western Region gently warms the pressed oil so its viscosity falls and the liquid runs through the filtering cloth in minutes rather than hours."
        },
        {
          "title": "The Bernoulli Effect: Sprays, Draughts and Settling Tanks",
          "content": "For a fluid flowing steadily, there is a trade between speed and pressure: where the same quantity of fluid is forced through a constriction it must move faster, and in that faster stretch its sideways pressure falls below the pressure in the slow stretch. This is the Bernoulli effect, and the counting rule behind it is continuity, A x v constant along the pipe, so a throat of one quarter the area carries four times the speed. Blow across the top of a vertical tube whose lower end stands in water and the water climbs the tube: the fast air stream over the mouth lowers the pressure there, and the greater atmospheric pressure on the water surface pushes the liquid up, where the stream tears it into a fine spray. That is the whole working of a perfume atomiser, an insecticide sprayer and a paint spray gun. The same low pressure of wind over a roof or the top of a chimney pulls warm air out of a room, which school blocks in the savanna towns use for ventilation, and it contributes to the lift on an aeroplane wing. The slower-flow consequence matters in water works: when a river widens or enters a settling tank its speed falls, the water can no longer hold its load, and suspended silt settles out; treatment plants such as those drawing from the Volta design the basin size so the flow is slow enough for nearly all the mud to drop before filtration. Filtration of palm oil and river-flow sorting are therefore one physics, a speed-pressure-settling chain rather than a chemistry.",
          "bulletPoints": [
            "Bernoulli: higher flow speed means lower sideways pressure in the fast stretch.",
            "Continuity: area times speed is constant, so a quarter area gives four times the speed.",
            "Atomiser: fast air over a tube lowers pressure; atmospheric pressure pushes liquid up and sprays it.",
            "Wind over a chimney or roof creates low pressure that draws air out of the building.",
            "Slowing a river or tank flow lets suspended silt settle, the working of a settling tank."
          ],
          "keyTakeaway": "Fast streams have low pressure: that single sentence explains sprays, draughts, wing lift and why slow water drops its mud.",
          "realWorldExample": "At a water-treatment works on the Volta, the flow is slowed in a long settling tank so clay and silt sink before the water reaches the filter beds and the clear outlet."
        }
      ],
      "commonMistakes": [
        "Confusing viscosity with density: a thick oil resists flow because it is viscous, while density is mass per volume; a dense but thin liquid can still pour quickly.",
        "Claiming that no forces act on a body falling at terminal velocity; the forces are balanced, weight equals upthrust plus drag, and the net force is zero.",
        "Drawing streamlines crossing each other, or letting one spiral into another in the turbulent region on a diagram.",
        "Saying pressure rises where a fluid speeds up; the Bernoulli result is the opposite, and the trap answer appears in almost every objective test on this topic."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): the unit of viscosity is N s per m squared; derive it if in doubt from F = 6 pi eta r v, where N = eta x m x (m per s), and reject options that give N per m (surface tension) or N per m squared (pressure).",
        "Paper 2 (theory): for a terminal-velocity part, draw the sphere, mark weight down and upthrust plus drag up, and write the balance equation; the method mark (M1) is for the force statement and the answer mark (A1) for the correct drag value with its unit.",
        "Paper 3 (practical or alternative practical): in the falling-sphere task time the ball between two fixed marks, repeat five drops, average to 0.1 s, and state two precautions, keeping the cylinder vertical and reading the upper mark at eye level.",
        "Distinguish the flow types in words examiners accept: laminar means layers slide smoothly and a dye thread stays intact; turbulent means the dye spreads into eddies; always credit the upthrust term when comparing falling bodies in fluids with the empty-air case."
      ],
      "summaryChecklist": [
        "Can I sketch laminar, transitional and turbulent flow and describe what a dye thread does in each?",
        "Can I define viscosity with its unit and explain how heating affects liquids and gases differently?",
        "Can I state the terminal-velocity force balance and use it to find the drag on a falling sphere?",
        "Can I describe the falling-sphere procedure and why the timing marks sit below the surface?",
        "Can I apply the Bernoulli effect to an atomiser, a chimney draught and a river settling tank?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-fluids-in-motion-viscosity-bernoulli-1",
        "title": "Terminal Velocity and Drag on a Falling Sphere",
        "problem": "A small steel ball is released in a tall cylinder of castor oil. Between two marks 60.0 cm apart, well below the surface, it covers the distance in 4.0 s at steady speed. The ball's weight is 0.050 N and the upthrust of the oil on it is 0.010 N. Find the terminal velocity and the viscous drag on the ball at that speed.",
        "stepByStepSolution": [
          "Step 1 (M1): convert the marked distance, 60.0 cm = 0.600 m.",
          "Step 2 (M1): terminal velocity = distance / time = 0.600 / 4.0.",
          "Step 3 (A1): terminal velocity = 0.15 m per s.",
          "Step 4 (M1): at terminal velocity the forces balance: weight = upthrust + drag, so drag = weight - upthrust = 0.050 - 0.010.",
          "Step 5 (A1): viscous drag = 0.040 N."
        ],
        "keyTakeaway": "Steady speed means zero net force, so the drag is simply the weight minus the upthrust, not the weight alone."
      },
      {
        "id": "ex-phy-fluids-in-motion-viscosity-bernoulli-2",
        "title": "Speed and Pressure in a Constricting Pipe",
        "problem": "Water flows through a horizontal pipe of cross-sectional area 4.0 cm squared at 0.50 m per s. The pipe narrows to a throat of area 1.0 cm squared. Find the speed of flow in the throat and state what happens to the pressure there compared with the wide section.",
        "stepByStepSolution": [
          "Step 1 (M1): apply continuity, A1 v1 = A2 v2, so v2 = A1 v1 / A2 = 4.0 x 0.50 / 1.0.",
          "Step 2 (A1): speed in the throat = 2.0 m per s.",
          "Step 3 (M1): invoke Bernoulli: the faster stretch has the lower pressure.",
          "Step 4 (A1): the pressure in the throat is lower than in the wide section."
        ],
        "keyTakeaway": "Area quarters, speed quadruples, and the pressure falls in the fast throat; this is exactly how an atomiser lifts and sprays liquid."
      }
    ],
    "quiz": {
      "id": "quiz-phy-fluids-in-motion-viscosity-bernoulli",
      "topicId": "shs2-phy-t1-fluids-in-motion-viscosity-bernoulli",
      "title": "Fluids in Motion Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-fluids-in-motion-viscosity-bernoulli-1",
          "quizId": "quiz-phy-fluids-in-motion-viscosity-bernoulli",
          "questionText": "Which is the SI unit of viscosity?",
          "optionA": "newton per metre",
          "optionB": "newton metre",
          "optionC": "newton per square metre",
          "optionD": "newton-second per square metre",
          "correctOption": "D",
          "subConcept": "Viscosity",
          "explanation": "From F = 6 pi eta r v, eta = F / (r v), with unit N divided by (m x m per s), the N s per m squared. N per m is surface tension and N per m squared is pressure.",
          "remediationTip": "Derive units from the formula instead of memorising lists; write the symbols and cancel."
        },
        {
          "id": "q-phy-fluids-in-motion-viscosity-bernoulli-2",
          "quizId": "quiz-phy-fluids-in-motion-viscosity-bernoulli",
          "questionText": "A sphere falls through oil at its terminal velocity. Which statement is true?",
          "optionA": "The viscous drag has become zero.",
          "optionB": "Its weight equals the sum of the upthrust and the viscous drag.",
          "optionC": "The drag is greater than its weight.",
          "optionD": "It still accelerates steadily downward.",
          "correctOption": "B",
          "subConcept": "Terminal velocity",
          "explanation": "Terminal velocity means zero acceleration, hence zero net force: weight down balances upthrust plus drag up. Option A ignores that the drag is exactly what stops the acceleration.",
          "remediationTip": "Always include the upthrust in the balance; drag alone equals only the apparent weight in the fluid."
        },
        {
          "id": "q-phy-fluids-in-motion-viscosity-bernoulli-3",
          "quizId": "quiz-phy-fluids-in-motion-viscosity-bernoulli",
          "questionText": "What happens to the viscosity of a liquid when it is heated?",
          "optionA": "It decreases.",
          "optionB": "It increases.",
          "optionC": "It is unchanged.",
          "optionD": "It first increases then falls to zero.",
          "correctOption": "A",
          "subConcept": "Viscosity and temperature",
          "explanation": "Added kinetic energy weakens the molecular attraction between layers, so the liquid flows more easily; gases behave the opposite way. Warm palm oil filtering fast through cloth is the standard example.",
          "remediationTip": "Separate the liquid rule from the gas rule; examiners offer both in the options."
        },
        {
          "id": "q-phy-fluids-in-motion-viscosity-bernoulli-4",
          "quizId": "quiz-phy-fluids-in-motion-viscosity-bernoulli",
          "questionText": "The Bernoulli effect states that in a steady flow, where the speed of the fluid increases,",
          "optionA": "the sideways pressure also increases.",
          "optionB": "the density suddenly changes.",
          "optionC": "the sideways pressure falls.",
          "optionD": "the flow must turn laminar.",
          "correctOption": "C",
          "subConcept": "Bernoulli effect",
          "explanation": "Faster stretches of a stream press less sideways; that low pressure is what lifts liquid up the atomiser tube and draws air out over a chimney top. Option A is the classic inverted answer.",
          "remediationTip": "Link the principle to one device you know, a perfume spray, and rebuild the reasoning from it."
        },
        {
          "id": "q-phy-fluids-in-motion-viscosity-bernoulli-5",
          "quizId": "quiz-phy-fluids-in-motion-viscosity-bernoulli",
          "questionText": "In a straight stretch of river, where is the water flowing fastest?",
          "optionA": "Against the bank at water level",
          "optionB": "On the river bed",
          "optionC": "Just above the bed in mid-channel",
          "optionD": "Near the surface at the middle of the channel",
          "correctOption": "D",
          "subConcept": "Flow profile",
          "explanation": "Friction with the bed and banks slows the layers touching them, so velocity is least at the bed and sides and greatest near the surface in mid-channel, where the water is deepest and undisturbed.",
          "remediationTip": "Picture river flow as sheared layers like the falling-sphere layers, with drag at the boundaries."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t1-surface-tension-capillarity",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 8,
    "title": "Surface Tension, Wetting and Capillarity",
    "description": "Cohesive and adhesive forces between molecules, the stretched-skin behaviour of a water surface and the definition of surface tension, the shapes of drops and bubbles and the excess pressure inside them, capillary rise and its formula, the wick of a kerosene lamp, blotting paper and cloth, the effects of detergent and temperature, and why raindrops are spherical.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Cohesion is the attraction between molecules of the same kind, adhesion between molecules of different kinds; the contest between them decides whether a liquid wets a surface.\n• A surface molecule is pulled sideways and inward by its neighbours and never outward, so the surface acts like a stretched elastic skin: that is surface tension.\n• Surface tension T = force acting on a surface / length of the line the force acts across, at right angles; the unit is N per m; water at laboratory temperatures is about 0.073 N per m.\n• The surface shrinks to the least area it can, and the least area for a given volume is a sphere, so free drops and small raindrops are round.\n• A needle or paper clip laid gently on water rests on the stretched surface; the support is surface tension, not upthrust.\n• Soap and detergents greatly lower the surface tension of water and give the film the strength to hold a bubble; pure water will not blow a bubble.\n• Excess pressure inside a small gas bubble in a liquid is 2T / r; inside a soap bubble in air it is 4T / r because the film has two surfaces.\n• The smaller the bubble the greater its internal pressure, so two connected bubbles trade air until the smaller shrinks into the larger.\n• Wetting: water spreads on freshly cleaned glass because adhesion beats cohesion, beads on a waxy leaf or mercury on glass because cohesion wins.\n• Capillary rise h = 2T cos theta / (rho g r): the narrower the tube the higher the rise; water rises in a glass tube while mercury is depressed below the outside level.\n• The wick of a kerosene lamp lifts fuel through the fine gaps between its fibres to the flame; blotting paper soaks ink and a towel soaks water the same way.\n• In soil, fine capillary channels carry buried moisture to the surface to evaporate; mulching breaks those channels and conserves moisture in the dry season.\n• Surface tension falls as temperature rises, one reason hot water washes better; detergent lowers it further and improves wetting between cloth fibres.",
    "detailedNotes": {
      "overview": "This topic takes the molecular attraction ideas of cohesion and adhesion and builds the whole physics of surfaces on them. You will define surface tension as force per unit length with its unit, explain why a surface behaves like a stretched skin, why drops and raindrops are spherical, and why small bubbles carry high internal pressure with the factors 2T/r and 4T/r. You will then derive capillary rise from surface tension and the contact angle and identify wicks, blotting paper and soil moisture as capillary machines. Detergent and temperature enter as the practical controllers of surface tension, which is exactly how WAEC frames the structured questions.",
      "introduction": "Run four five-minute demonstrations before touching any formula. Float a sewing needle on water in a beaker, dried flat on a fork, and confirm it rests on the surface rather than swimming. Fill a glass with water to a brimming dome and slide paper clips in one by one to watch the surface bulge above the rim without spilling. Drop a fragment of camphor or a matchstick needle onto a milk surface touched with detergent at the back and watch the surface scramble, the classic Marangoni effect. Finally stand three glass tubes of different bores, coarse salt brine or water with coloured ink, in a dish and measure the different rise heights with a metre rule; record the bore to 0.1 mm on the micrometer if one is available.",
      "realWorldContext": "In every household that keeps a kerosene lamp for evening power cuts, the flame survives because capillary action drags fuel up the woven cotton wick faster than the flame consumes it, drawing from the reservoir below the burner level. Blotting paper on a school desk in Cape Coast lifts wet ink by the same inter-fibre capillaries. At building sites in Kasoa, mud-block walls without a damp-proof course draw groundwater up through the pores of the block and plaster by capillarity, which is why walls are laid with a bitumen or plastic damp course at plinth level. Market women washing cloth in soapy water rely on detergent lowering the surface tension of water so it wets the fibres and lifts oil from the weave, and they use warm water for the same double reason. A farmer in the Ejura dry season spreads a mulch over the soil to cut the capillary channels that would otherwise pump buried moisture up to evaporate under the sun.",
      "objectives": [
        "Define surface tension as force per unit length with its unit and explain its molecular origin in cohesion",
        "Explain the spherical shape of drops and raindrops and calculate excess pressure in bubbles using 2T/r and 4T/r",
        "Describe wetting and non-wetting in terms of the balance of adhesion and cohesion, with meniscus shapes",
        "Derive and use the capillary-rise relation and identify wicks, blotting paper and damp courses as capillary effects"
      ],
      "sections": [
        {
          "title": "Cohesion, Adhesion and the Stretched Surface",
          "content": "Molecules of a liquid attract one another; this mutual attraction between like molecules is cohesion. Attraction between the molecules of the liquid and those of a solid it touches, such as water and clean glass, is adhesion. A molecule deep inside the liquid is pulled equally in all directions by its neighbours and feels no resultant force, but a molecule at the surface has no liquid molecules above it, so it is pulled sideways and downward. The surface therefore resists having any more molecules brought into it, and it behaves exactly like a stretched elastic membrane trying to contract; this contracted skin is what we call surface tension, and it acts all over the surface at right angles to any line drawn on it. Quantitatively, surface tension T is the force on a surface divided by the length of the line across which it acts, T = F/L, in newtons per metre; water's value of about 0.073 N per m at ordinary laboratory temperature is unusually high because its molecules attract strongly, higher than most common liquids. Evidence sits in plain view: a needle laid gently on water rests on the skin without sinking even though steel is far denser than water, a pond skater walks on the film, and a beaker can be filled above its rim so the water crowns without spilling. The contest between cohesion and adhesion decides wetting: water spreads flat on a freshly cleaned glass plate because adhesion to glass beats cohesion within the water, beads up on a waxy taro leaf or a car windscreen because there cohesion wins, and mercury on glass contracts to bright balls with a convex meniscus because its cohesion is enormous.",
          "bulletPoints": [
            "Cohesion: like molecules attract; adhesion: unlike molecules attract.",
            "Surface molecules feel a net inward pull, so the surface acts like a stretched skin.",
            "T = F / L, unit N per m; water about 0.073 N per m at room temperature.",
            "A floating needle is held by surface tension, not by buoyancy.",
            "Wetting happens where adhesion beats cohesion; beading where cohesion wins."
          ],
          "keyTakeaway": "Surface tension is the stretched-skin effect of the inward molecular pull on surface molecules, measured as force per length.",
          "realWorldExample": "Rain beads into round drops on a waxy cassava-leaf or a polished car bonnet because water's cohesion beats its adhesion to the waxy coat."
        },
        {
          "title": "Drops, Bubbles and Excess Pressure",
          "content": "Because the surface contracts, a free mass of liquid settles into the shape with the least surface area for its volume, and that shape is the sphere; this is why small drops, spray droplets and raindrops are spherical. A drop forms at the end of a tube when the weight of the hanging drop finally beats the surface force holding it to the rim, and the drop-weight method uses exactly that balance. Larger raindrops are slightly flattened underneath by air resistance as they fall at their few-metres-per-second terminal speeds, but small ones stay textbook spheres. Gas within a liquid must push the surface outward, so the pressure inside a bubble exceeds the outside pressure; for a bubble in a liquid with one surface, the excess is 2T/r, while a soap bubble in air is a thin film with two surfaces, inner and outer, and carries twice that excess, 4T/r. Since the excess varies inversely with radius, a small bubble is the more pressurised one, and two bubbles joined by a tube trade air from the smaller into the larger until the smaller shrinks away, a demonstration that surprises most classes. Ordinary water will not hold a bubble because its tension makes any film thin out and snap; soap solution lowers the tension of the water and gives a flexible film that stretches, which is why children at break time in a Kumasi school can blow long trains of bubbles with detergent water and a straw. Foam is simply many bubbles packed together with thin liquid walls between them.",
          "bulletPoints": [
            "Least area for a given volume is a sphere, hence round drops and raindrops.",
            "A drop detaches when its weight beats the surface force at the tube rim.",
            "Excess pressure: 2T / r for a bubble in liquid, 4T / r for a soap bubble in air.",
            "Smaller bubble, greater internal pressure; linked bubbles merge toward the larger.",
            "Soap lowers water's surface tension and stabilises the two-surface film."
          ],
          "keyTakeaway": "Curved surfaces carry extra pressure, and doubling the surfaces of a soap film doubles the factor from 2T/r to 4T/r.",
          "realWorldExample": "A boy outside a school gate in Kumasi blows a chain of bubbles with soapy water and a straw, each small bubble more pressurised than the next."
        },
        {
          "title": "Capillarity: Wick, Blotting Paper and Soil Moisture",
          "content": "Stand a very narrow glass tube, a capillary, with its lower end in water, and the liquid climbs the tube to a height well above the outside level. The cause is the wetting force: because adhesion to glass beats cohesion, the water surface at the wall is pulled up into a concave meniscus, and the tension in that curved surface drags the whole column upward until the weight of the raised liquid balances the lift. The balance gives the capillary-rise relation h = 2T cos theta / (rho g r), where theta is the contact angle, r the tube radius and rho the liquid density; the narrower the bore, the higher the rise, and a perfectly non-wetting liquid such as mercury in glass is depressed instead of lifted. Put numbers in: with T = 0.073 N per m and a bore radius of 0.20 mm, h comes to about 7.3 cm of water, an easily measurable column and a useful standard substitution exercise. The same interstices make everyday machines work: the woven cotton wick of a kerosene lamp is a bundle of fine channels that lift fuel from the reservoir to the burner faster than the flame consumes it, blotting paper and filter paper soak ink and water between their fibres, and a brick wall draws groundwater upward through its pores, which is why building codes place a damp-proof course, a layer of bitumen or plastic at plinth level, to cut the channels, a rule visible in every properly built house at Kasoa. In an open field the fine pores of the soil act as capillary tubes carrying buried moisture to the surface to evaporate under the sun; a farmer who spreads mulch breaks those channels and conserves the moisture, one of the most practical applications in the whole syllabus. Add detergent to water and both the tension and the contact angle change, wetting cloth far better; raise the temperature and tension falls further, which is the physics behind hot soapy washing.",
          "bulletPoints": [
            "Capillary rise h = 2T cos theta / (rho g r); narrower bore means higher rise.",
            "Wetting liquids rise with a concave meniscus; mercury is depressed with a convex one.",
            "Lamp wicks, blotting paper, filter paper and towels are bundles of capillary channels.",
            "Damp-proof courses cut capillary rise in brick walls; mulch breaks soil capillaries.",
            "Detergent lowers tension and contact angle; heat lowers tension, so hot soapy water cleans best."
          ],
          "keyTakeaway": "Capillarity is surface tension doing useful lifting in narrow channels, from a lamp wick to a metre of water in a 0.2 mm tube.",
          "realWorldExample": "A household kerosene lamp keeps burning through an evening power cut because the wick's fine fibre channels lift fuel steadily from the reservoir below the burner."
        }
      ],
      "commonMistakes": [
        "Explaining the floating needle as buoyancy: a steel needle displaces far too little water for upthrust to hold it; the support is the stretched surface skin, and it sinks the moment detergent destroys the tension.",
        "Applying the soap-bubble formula 4T/r to a gas bubble inside a liquid; the single-surface bubble takes 2T/r because it has one interface, and the factor of two is exactly what the examiner is testing.",
        "Stating that capillary rise is the same in tubes of every bore; the rise is inversely proportional to the tube radius, so the narrower tube lifts the liquid higher.",
        "Claiming that soap or detergent raises the surface tension of water to make washing stronger; it lowers the tension and the contact angle so the water wets fibres and lifts oil."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): the unit of surface tension is N per m; eliminate N per m squared (pressure) and N m (work) at speed, and remember water's value is near 0.073 N per m at room temperature.",
        "Paper 2 (theory): for a bubble or drop question, write the excess-pressure formula with the correct factor, 2T/r for one surface, 4T/r for a soap film, substitute with r in metres, and carry the pascal unit into the answer for the answer mark (A1) after the method mark (M1).",
        "Paper 3 (practical or alternative practical): in the capillary-tube task keep the tubes vertical, measure to the bottom of the concave meniscus at eye level, and measure bore with the micrometer on the outside plus wall thickness if the inside is not reachable; state those as your precautions.",
        "Structured answers on washing and wetting earn full marks only when you name the mechanism, lowering of surface tension and change of contact angle, and then name the effect, better wetting of fibres; two clauses, one mark each."
      ],
      "summaryChecklist": [
        "Can I define surface tension as force per unit length, give its unit and water's approximate value?",
        "Can I explain why drops are spherical and when to use 2T/r against 4T/r?",
        "Can I describe wetting and non-wetting meniscuses using adhesion against cohesion?",
        "Can I use h = 2T cos theta / (rho g r) and state how the rise changes with tube radius?",
        "Can I explain the lamp wick, blotting paper, damp courses and mulch, and the roles of detergent and heat?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-surface-tension-capillarity-1",
        "title": "Capillary Rise of Water in a Narrow Tube",
        "problem": "A glass capillary tube of internal radius 0.20 mm is stood vertically in water. Take the surface tension of water as 0.073 N per m, its density as 1000 kg per cubic metre, g = 10 m per second squared and the contact angle on clean glass as about zero so that cos theta = 1. Find the height to which the water rises.",
        "stepByStepSolution": [
          "Step 1 (M1): write the capillary-rise relation h = 2T cos theta / (rho g r).",
          "Step 2 (M1): convert the radius, 0.20 mm = 2.0 x 10 to the -4 m.",
          "Step 3 (M1): substitute: h = (2 x 0.073 x 1) / (1000 x 10 x 2.0 x 10 to the -4) = 0.146 / 2.0.",
          "Step 4 (A1): h = 0.073 m = 7.3 cm of water."
        ],
        "keyTakeaway": "Halve the bore and double the rise; the height varies inversely with the tube radius, so a 0.2 mm tube lifts water more than a hand span."
      },
      {
        "id": "ex-phy-surface-tension-capillarity-2",
        "title": "Excess Pressure Inside a Soap Bubble",
        "problem": "A soap bubble of radius 5.0 cm is blown in air. The surface tension of the soap solution film is 0.025 N per m. Find the excess pressure inside the bubble, and state the excess pressure a gas bubble of the same radius would have if it were inside the liquid instead.",
        "stepByStepSolution": [
          "Step 1 (M1): a soap bubble has two surfaces, so use excess pressure = 4T / r.",
          "Step 2 (M1): convert the radius, 5.0 cm = 0.050 m, and substitute: 4 x 0.025 / 0.050.",
          "Step 3 (A1): excess pressure = 0.10 / 0.050 = 2.0 Pa.",
          "Step 4 (M1): a bubble in the liquid has one surface: excess pressure = 2T / r = 2 x 0.025 / 0.050.",
          "Step 5 (A1): excess pressure in the liquid bubble = 1.0 Pa, half the soap-bubble value."
        ],
        "keyTakeaway": "Count the surfaces before choosing the factor: one interface gives 2T/r, a free soap film gives 4T/r."
      }
    ],
    "quiz": {
      "id": "quiz-phy-surface-tension-capillarity",
      "topicId": "shs2-phy-t1-surface-tension-capillarity",
      "title": "Surface Tension and Capillarity Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-surface-tension-capillarity-1",
          "quizId": "quiz-phy-surface-tension-capillarity",
          "questionText": "What is the molecular cause of surface tension in water?",
          "optionA": "Surface molecules are pulled inward and sideways by cohesion with no molecules above them.",
          "optionB": "Air molecules press down evenly on the surface.",
          "optionC": "The glass container attracts every molecule upward.",
          "optionD": "Water molecules repel their nearest neighbours.",
          "correctOption": "A",
          "subConcept": "Origin of surface tension",
          "explanation": "A surface molecule lacks liquid neighbours above, so the resultant cohesive pull is inward, and the surface behaves like a stretched skin. The other options blame the cause on air, glass or repulsion.",
          "remediationTip": "Draw one molecule at the surface and one deep inside and compare the arrows."
        },
        {
          "id": "q-phy-surface-tension-capillarity-2",
          "quizId": "quiz-phy-surface-tension-capillarity",
          "questionText": "Which is the correct SI unit of surface tension?",
          "optionA": "newton per square metre",
          "optionB": "newton metre",
          "optionC": "newton per metre",
          "optionD": "joule per cubic metre",
          "correctOption": "C",
          "subConcept": "Surface tension unit",
          "explanation": "Surface tension is force per unit length, T = F/L, so the unit is N per m; N per m squared is pressure and N m is work.",
          "remediationTip": "Recover the unit from the defining equation each time rather than matching shapes."
        },
        {
          "id": "q-phy-surface-tension-capillarity-3",
          "quizId": "quiz-phy-surface-tension-capillarity",
          "questionText": "Two clean glass capillary tubes, one of radius 0.10 mm and the other of 0.40 mm, stand in the same water. What is observed?",
          "optionA": "Neither tube shows a rise because glass blocks water.",
          "optionB": "Water rises higher in the narrower tube.",
          "optionC": "Water rises equally in both tubes.",
          "optionD": "Water rises higher in the wider tube.",
          "correctOption": "B",
          "subConcept": "Capillary rise",
          "explanation": "From h = 2T cos theta / (rho g r), the height varies inversely with radius, so the 0.10 mm tube lifts water four times as high as the 0.40 mm tube.",
          "remediationTip": "Read the formula as one-over-r and check the ratio against the observation."
        },
        {
          "id": "q-phy-surface-tension-capillarity-4",
          "quizId": "quiz-phy-surface-tension-capillarity",
          "questionText": "How does detergent help washing water clean oily cloth?",
          "optionA": "It raises the surface tension so the surface pulls harder.",
          "optionB": "It cools the water so viscosity rises.",
          "optionC": "It removes cohesion between all water molecules completely.",
          "optionD": "It lowers the surface tension and changes the contact angle so the water wets the fibres.",
          "correctOption": "D",
          "subConcept": "Detergent effect",
          "explanation": "Detergent lowers the surface tension and the contact angle of water on cloth, so the solution spreads into the fine fibre channels and lifts the oil. Option A states the opposite of the truth.",
          "remediationTip": "Remember the pair: lower tension plus better wetting, and name both in the answer."
        },
        {
          "id": "q-phy-surface-tension-capillarity-5",
          "quizId": "quiz-phy-surface-tension-capillarity",
          "questionText": "Why is a small free-falling raindrop spherical?",
          "optionA": "Because gravity stretches it into that shape.",
          "optionB": "Because air resistance compresses it evenly.",
          "optionC": "Because the contracting surface takes the least area for its volume, and the sphere wins.",
          "optionD": "Because water vapour crystallises in that form.",
          "correctOption": "C",
          "subConcept": "Shape of drops",
          "explanation": "Surface tension shrinks the surface to its minimum area, and for a fixed volume the sphere has the least area. Big drops flatten slightly underneath, but small ones are near-perfect spheres.",
          "remediationTip": "Link the shape to the minimum-area property, not to gravity or air."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t2-quantity-of-heat-changes-of-state",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 3,
    "title": "Quantity of Heat, Specific Heat Capacity and Latent Heat",
    "description": "Quantity of heat and the equation Q = m c delta-theta, specific heat capacity and its unit J per kg per degree C, the method of mixtures, the latent heats of fusion and vaporisation and their heating graph, the units J per kg and J per kg per degree C, the mechanical and electrical methods of measurement, and the everyday uses of the high specific heat capacity of water.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The quantity of heat Q is energy transferred to or from a body because of a temperature difference, measured in joules (J).\n• The heat that changes a temperature is Q = m c delta-theta, with m the mass in kg, c the specific heat capacity and delta-theta the temperature change.\n• Specific heat capacity c is the heat needed to raise 1 kg of a substance by 1 degree C (or 1 kelvin); its unit is J per kg per degree C.\n• Water has a very high specific heat capacity, 4200 J per kg per degree C, larger than almost any common substance, which is why it is used in car radiators and hot-water bottles.\n• Latent heat is the heat absorbed or released at constant temperature during a change of state, measured in J per kg.\n• The specific latent heat of fusion of ice is 3.36 x 10 to the 5 J per kg, the heat to turn 1 kg of ice at 0 degrees C into water at 0 degrees C.\n• The specific latent heat of vaporisation of water is 2.26 x 10 to the 6 J per kg, the heat to turn 1 kg of water at 100 degrees C into steam at 100 degrees C.\n• A heating graph from ice to steam has two rising ramps (temperature changes, use Q = m c delta-theta) and two flat plateaus (state changes, use Q = m L, temperature constant).\n• The heat taken in during melting or boiling is not wasted; it loosens or breaks the bonds between molecules instead of raising the temperature.\n• The method of mixtures rests on conservation of energy: in a lagged calorimeter, heat lost by the hot body equals heat gained by the cold body and the calorimeter.\n• The electrical method measures c with an immersion heater: energy V I t = m c delta-theta, so c = V I t divided by (m delta-theta).\n• The mechanical method (Joule) turns work into heat; a falling weight or paddles stirring water raise its temperature, giving the mechanical equivalent of heat.\n• Evaporation causes cooling because the fastest molecules escape and take energy with them; sweating cools the body and a wet jute bag cools a pot of water.\n• Because the c of water is large, coastal places such as Sekondi have a smaller daily temperature range than inland places such as Tamale.",
    "detailedNotes": {
      "overview": "This topic turns heat into something you can calculate. You will define the quantity of heat, specific heat capacity and specific latent heat with their SI units, and use Q = m c delta-theta for every temperature change and Q = m L for every change of state. You will read a heating curve that rises, flattens, rises again and flattens again, and explain what happens to the energy on each part. You will then apply the method of mixtures and the electrical method, and see why the high specific heat capacity and high latent heat of water matter so much in Ghanaian homes, markets and engines.",
      "introduction": "Begin with a measured, weighable task in the school laboratory: heat a known mass of water with an immersion heater, record the voltmeter and ammeter readings and the time, and use the electrical method to find the specific heat capacity. Plot a temperature against time graph as you heat crushed ice and watch the two flat regions appear at 0 degrees C and at 100 degrees C; those plateaus are latent heat made visible. Learn the two formulae as a matched pair, Q = m c delta-theta for a temperature change and Q = m L for a state change, and you will never be unsure which to write.",
      "realWorldContext": "Every sachet-water plant boils water before treatment, and the manager who knows Q = m c delta-theta can say how long a 1800 W heater needs to bring a fixed mass to the boil. In the markets of Tamale a trader keeps tomatoes fresh in a pot-in-pot cooler, a clay pot inside a larger one packed with damp sand, because the water evaporating from the sand carries heat away and drops the temperature. A motorbike rider heading for Ho relies on the water in his radiator because water can carry a great deal of heat for only a small rise in temperature. A nurse puts a damp cloth on a child with fever, and sweat cooling the skin is the same evaporation principle. ECG standby generators at a clinic in Kumasi are water-cooled for exactly this reason.",
      "objectives": [
        "Define quantity of heat, specific heat capacity and specific latent heat and give their SI units",
        "Use Q = m c delta-theta to calculate the heat transferred in a temperature change",
        "Use Q = m L to calculate the heat transferred during a change of state and interpret a heating curve",
        "Apply the method of mixtures and the electrical method V I t = m c delta-theta to find an unknown specific heat capacity",
        "Explain the everyday effects of the high specific heat capacity and high latent heat of water"
      ],
      "sections": [
        {
          "title": "Quantity of Heat and Specific Heat Capacity",
          "content": "Heat is energy in transit from a hotter to a colder body, and the quantity of heat is simply that energy measured in joules. When a body is heated without changing state, its temperature rises, and the heat needed is proportional to its mass and to the temperature rise: Q = m c delta-theta. The constant c is the specific heat capacity, the heat needed to raise the temperature of one kilogram of the substance by one degree Celsius, and its unit is J per kg per degree C. Different substances need different amounts of heat for the same rise, which is why c is a property of the material: sand and water of equal mass heated by the same flame warm at different rates. Water has an unusually high specific heat capacity of 4200 J per kg per degree C, so heating 2 kg of water through 30 degrees C requires 2 x 4200 x 30 = 252000 J. That large number is precisely what makes water a good coolant and a good store of heat in a hot-water bottle, and it is why a kettle of water takes far longer to boil than an empty pan of the same mass.",
          "bulletPoints": [
            "Heat is energy transferred because of a temperature difference; the quantity Q is in joules.",
            "Q = m c delta-theta relates heat, mass, specific heat capacity and temperature change.",
            "Specific heat capacity c has unit J per kg per degree C.",
            "Water's c is 4200 J per kg per degree C, very high for a common substance.",
            "Heating 2 kg of water by 30 degrees C needs 252000 J."
          ],
          "keyTakeaway": "For any temperature change use Q = m c delta-theta, and remember that a large specific heat capacity means a substance resists a change in temperature.",
          "realWorldExample": "Bringing 1.5 kg of water from 25 degrees C to the boil at 100 degrees C needs 1.5 x 4200 x 75 = 472500 J; a 1800 W kettle supplies that in 472500 / 1800 = 262.5 s, a little over four minutes, in a home or a chop-bar kitchen."
        },
        {
          "title": "Changes of State and Latent Heat",
          "content": "A change of state happens at a fixed temperature, and although heat is being supplied the temperature does not rise, because the energy is being used to separate the molecules rather than to make them move faster. The heat needed to change the state of one kilogram of a substance without changing its temperature is the specific latent heat L, measured in J per kg, and the heat for any mass is Q = m L. The specific latent heat of fusion of ice is 3.36 x 10 to the 5 J per kg, the energy to melt ice at 0 degrees C into water at 0 degrees C, while the specific latent heat of vaporisation of water is 2.26 x 10 to the 6 J per kg, the far larger energy to boil water at 100 degrees C into steam at 100 degrees C. On a heating graph, melting and boiling show as flat plateaus between the two rising ramps. Because steam carries this great store of latent heat, a burn from steam at 100 degrees C is worse than a burn from the same mass of water at 100 degrees C: the steam releases 2.26 x 10 to the 6 J per kg as it condenses on the skin before it even begins to cool. Evaporation is boiling at any temperature, and it cools because the quickest molecules escape.",
          "bulletPoints": [
            "A change of state happens at constant temperature; the energy is latent, hidden.",
            "Q = m L with L in J per kg.",
            "Latent heat of fusion of ice = 3.36 x 10 to the 5 J per kg.",
            "Latent heat of vaporisation of water = 2.26 x 10 to the 6 J per kg.",
            "Steam burns worse than water because it gives out its latent heat on condensing."
          ],
          "keyTakeaway": "Use Q = m L for a state change at fixed temperature and Q = m c delta-theta for any temperature change, and treat them as separate stages on the graph.",
          "realWorldExample": "A fishmonger at Takoradi packs her catch in ice because as the ice melts it draws 3.36 x 10 to the 5 J from the fish and the meltwater for every kilogram melted, holding the temperature near 0 degrees C all morning."
        },
        {
          "title": "The Method of Mixtures",
          "content": "The method of mixtures is the classic way to find the specific heat capacity of a solid or a liquid, and it is a direct application of conservation of energy. A hot sample is transferred into a known mass of cooler water held in a lagged calorimeter, and the two are stirred until they reach one steady final temperature. Provided nothing is gained from or lost to the surroundings, the heat lost by the hot body equals the heat gained by the cold body together with the calorimeter: m_hot c_hot delta-theta_hot = m_cold c_cold delta-theta_cold plus the calorimeter term. The unknown specific heat capacity then falls out of the equation. In school the calorimeter heat capacity is often neglected, and then the arithmetic is simply heat lost equals heat gained. Accuracy depends on real laboratory habits: transfer the hot sample quickly with as little water from the boiling bath as possible, stir to equalise the temperature, and read the thermometer at eye level. The larger the temperature difference between sample and water, the greater the heat loss to the room, so careful experimenters start only a little above room temperature to minimise the systematic error.",
          "bulletPoints": [
            "The method rests on heat lost by the hot body = heat gained by the cold body and calorimeter.",
            "Both sides use Q = m c delta-theta, with each delta-theta taken as a positive change.",
            "The calorimeter and its stirrer absorb some heat unless explicitly neglected.",
            "Transfer the hot sample fast and stir well to reach a true single final temperature.",
            "Lag the calorimeter and start only a little above room temperature to cut heat loss to the surroundings."
          ],
          "keyTakeaway": "Set heat lost equal to heat gained, keep every temperature change positive, and the unknown specific heat capacity comes straight out.",
          "realWorldExample": "A student in a GES laboratory drops a heated metal block into water in a lagged copper calorimeter and, from the steady rise of the water, works out the block's specific heat capacity exactly as this section describes."
        },
        {
          "title": "Electrical and Mechanical Methods of Measurement",
          "content": "The electrical method replaces an unknown quantity of heat with an electrical energy that can be measured precisely. An immersion heater of known potential difference V and current I is switched on in a mass m of the liquid for a time t; the electrical energy supplied is V I t joules, and if none is lost this equals m c delta-theta, so c = V I t divided by (m delta-theta). A stirring rod keeps the temperature uniform, a lid and lagging reduce loss, and because some heat always escapes, a bare electrical method tends to give a value a little too high; a cooling correction or the method of mixtures refines it. For water this gives the familiar 4200 J per kg per degree C. The older mechanical method, associated with Joule, shows that work done against friction becomes heat: paddles turned in water, or a weight falling through a height, raise the temperature of the water by an amount that matches the work m g h done on it, establishing the mechanical equivalent of heat. Both methods confirm the same deep idea that heat is a form of energy measured in joules.",
          "bulletPoints": [
            "Electrical method: energy in = V I t, so c = V I t divided by (m delta-theta).",
            "Use a lid, lagging and a stirrer to spread the heat and cut loss.",
            "Ignoring losses makes the measured c too high, so apply a cooling correction.",
            "Mechanical method: work m g h or paddle stirring appears as heat in the water.",
            "Both methods show heat is energy and is measured in joules."
          ],
          "keyTakeaway": "In the electrical method V I t equals m c delta-theta, and an immersion heater run of 12 V, 2 A for 700 s into 0.5 kg of water gives a rise of 8 degrees C when losses are ignored.",
          "realWorldExample": "A physics class at Ho measures the specific heat capacity of water with an immersion heater on a 12 V supply and an ammeter reading 2 A, timing the run for 700 s into 0.5 kg of water and finding an 8 degree C rise."
        },
        {
          "title": "Everyday Uses of the High Specific Heat Capacity of Water",
          "content": "Because water can absorb or release a great deal of heat for only a small change in temperature, it is everywhere in the role of heat carrier and temperature buffer. It is the fluid inside vehicle and generator radiators, the medium in a hot-water bottle, and the water a cook uses to boil, steam or blanch food. Large bodies of water moderate climate: the sea warms and cools slowly, so coastal towns such as Sekondi and Cape Coast enjoy a small daily temperature range, while inland Tamale, far from any large water body, swings from a cool harmattan morning to a very hot afternoon. Water's large latent heat of vaporisation makes evaporation a powerful coolant, which is the whole principle of the pot-in-pot refrigerator used by vegetable sellers in the north, of a wet jute sack laid over a can of drinking water, and of sweating in our own bodies. The same property makes steam dangerous, and makes a steam burn worse than a scald, because the steam must give up all its latent heat before it can even start to cool on the skin.",
          "bulletPoints": [
            "Water is used as a coolant in vehicle and generator radiators because its c is large.",
            "Coastal areas have a smaller temperature range than inland areas for the same reason.",
            "Hot-water bottles store much heat in a small temperature drop.",
            "Evaporative cooling (pot-in-pot, wet sack, sweating) relies on the large latent heat of vaporisation.",
            "Steam gives out its latent heat on condensing, so a steam burn is worse than a water scald."
          ],
          "keyTakeaway": "Water resists temperature change when hot and gives up huge energy when it evaporates or condenses, which is why it cools engines, buffers climate and chokes a market cooler.",
          "realWorldExample": "Vegetable sellers at Agbogbloshie and in the northern markets pack tomatoes between two clay pots with damp sand between them; the evaporating sand draws heat and keeps the produce cool through a hot day."
        }
      ],
      "commonMistakes": [
        "Using Q = m c delta-theta for a change of state and getting a rise in temperature during melting or boiling; a state change uses Q = m L and the temperature stays fixed.",
        "Reporting specific heat capacity in J per kg, which is the unit of latent heat; c is in J per kg per degree C and L is in J per kg, and mixing the two loses the unit mark.",
        "Forgetting to convert the mass from grams to kilograms in Q = m c delta-theta, so a 250 g sample is entered as 250 instead of 0.25 and the answer is off by a factor of 1000.",
        "Taking delta-theta as an absolute temperature or mixing a negative change into the method of mixtures; use the positive difference between the two temperatures on each side.",
        "In the electrical method, using only the current or only the voltage; the energy supplied is V I t, so forgetting to multiply by both V and t (or by the time in seconds) gives the wrong c."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): identify the formula by the wording; if a temperature changes, expect Q = m c delta-theta, and if only the state changes at fixed temperature, expect Q = m L.",
        "Paper 2 (theory or structured): a method mark (M1) rewards writing the correct equation with substitution, and the answer mark (A1) needs the number and its unit, so end every heat answer in J, and every specific heat capacity in J per kg per degree C.",
        "On a heating curve, expect to describe each region: rising ramp means temperature change (m c delta-theta), flat plateau means change of state (m L) at constant temperature, and the longer plateau is vaporisation because water's latent heat of vaporisation is large.",
        "A method-of-mixtures question is graded on the balance line heat lost = heat gained; write it before substituting, and carry the same unit of temperature through, since a change in degrees C equals a change in kelvins.",
        "Paper 3 (practical): for the electrical method state the precautions the examiner looks for, stir the liquid, lag and cover the calorimeter, read the thermometer at eye level, and apply a cooling correction so the measured c is not too high."
      ],
      "summaryChecklist": [
        "Can I define quantity of heat, specific heat capacity and specific latent heat and give the SI unit of each?",
        "Can I choose between Q = m c delta-theta and Q = m L for a given situation and use it correctly?",
        "Can I read a heating curve and say where temperature changes and where a change of state occurs?",
        "Can I solve a method-of-mixtures problem and the electrical method V I t = m c delta-theta?",
        "Can I explain why the high specific heat capacity and high latent heat of water matter in cooling and in climate?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-heat-1",
        "title": "Method of Mixtures: Finding a Specific Heat Capacity",
        "problem": "A 0.50 kg metal specimen is heated to 100 degrees C and transferred into 1.0 kg of water at 20 degrees C in a well-lagged beaker whose own heat capacity is neglected. The final steady temperature is 25 degrees C. Find the specific heat capacity of the metal. Take the specific heat capacity of water as 4200 J per kg per degree C.",
        "stepByStepSolution": [
          "Step 1 (M1): temperature fall of the metal = 100 - 25 = 75 degrees C; temperature rise of the water = 25 - 20 = 5 degrees C.",
          "Step 2 (M1): heat gained by the water = m c delta-theta = 1.0 x 4200 x 5.",
          "Step 3 (A1): heat gained by water = 21000 J.",
          "Step 4 (M1): by the method of mixtures, heat lost by metal = heat gained by water, so 0.50 x c x 75 = 21000.",
          "Step 5 (A1): c = 21000 / (0.50 x 75) = 21000 / 37.5 = 560 J per kg per degree C."
        ],
        "keyTakeaway": "Balance heat lost against heat gained, keep each temperature change positive, and the unknown specific heat capacity comes straight out."
      },
      {
        "id": "ex-phy-heat-2",
        "title": "Latent Heat and a Temperature Change Together",
        "problem": "Find the total heat energy needed to change 0.3 kg of ice at 0 degrees C into water at 20 degrees C. Take the specific latent heat of fusion of ice as 3.36 x 10 to the 5 J per kg and the specific heat capacity of water as 4200 J per kg per degree C.",
        "stepByStepSolution": [
          "Step 1 (M1): split the process into melting the ice at 0 degrees C, then warming the water to 20 degrees C.",
          "Step 2 (M1): heat to melt = m Lf = 0.3 x 3.36 x 10 to the 5.",
          "Step 3 (A1): heat to melt = 100800 J.",
          "Step 4 (M1): heat to warm the water = m c delta-theta = 0.3 x 4200 x (20 - 0).",
          "Step 5 (A1): heat to warm = 25200 J.",
          "Step 6 (A1): total heat = 100800 + 25200 = 126000 J, that is 1.26 x 10 to the 5 J."
        ],
        "keyTakeaway": "A change of state at fixed temperature uses Q = m L and any temperature change uses Q = m c delta-theta; treat them as stages and add the results."
      }
    ],
    "quiz": {
      "id": "quiz-phy-heat",
      "topicId": "shs2-phy-t2-quantity-of-heat-changes-of-state",
      "title": "Quantity of Heat and Latent Heat Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-heat-1",
          "quizId": "quiz-phy-heat",
          "questionText": "What is the SI unit of specific heat capacity?",
          "optionA": "J per kg per degree C",
          "optionB": "J per kg",
          "optionC": "J per degree C",
          "optionD": "kg per J per degree C",
          "correctOption": "A",
          "subConcept": "Specific heat capacity unit",
          "explanation": "c is the heat to raise 1 kg by 1 degree C, so its unit is J per kg per degree C. J per kg is the unit of latent heat, not of specific heat capacity.",
          "remediationTip": "Keep a card: c has kg and degree C in the denominator, L has only kg."
        },
        {
          "id": "q-phy-heat-2",
          "quizId": "quiz-phy-heat",
          "questionText": "How much heat is needed to raise the temperature of 2 kg of water by 30 degrees C? (c = 4200 J per kg per degree C)",
          "optionA": "126 000 J",
          "optionB": "84 000 J",
          "optionC": "252 000 J",
          "optionD": "2520 J",
          "correctOption": "C",
          "subConcept": "Heat for a temperature change",
          "explanation": "Q = m c delta-theta = 2 x 4200 x 30 = 252000 J. 126000 J comes from halving the temperature change and 84000 J from a wrong delta-theta of 10.",
          "remediationTip": "Multiply mass, c and the temperature change in that order and check the size of the answer."
        },
        {
          "id": "q-phy-heat-3",
          "quizId": "quiz-phy-heat",
          "questionText": "While ice is melting at 0 degrees C, the temperature of the ice-and-water mixture does what as heat is added?",
          "optionA": "Rises steadily",
          "optionB": "Falls as heat is added",
          "optionC": "Rises then falls",
          "optionD": "Stays constant until all the ice has melted",
          "correctOption": "D",
          "subConcept": "Latent heat of fusion",
          "explanation": "During melting the added heat is used to break the molecular bonds as latent heat of fusion, so the temperature stays at 0 degrees C until all the ice has melted; only then does it rise.",
          "remediationTip": "Remember a change of state is a flat line on the heating graph."
        },
        {
          "id": "q-phy-heat-4",
          "quizId": "quiz-phy-heat",
          "questionText": "The specific latent heat of a substance is measured in which unit?",
          "optionA": "J per kg per degree C",
          "optionB": "J per kg",
          "optionC": "J",
          "optionD": "kg per J",
          "correctOption": "B",
          "subConcept": "Latent heat unit",
          "explanation": "Specific latent heat is the heat to change the state of 1 kg, so its unit is J per kg. J per kg per degree C is the unit of specific heat capacity.",
          "remediationTip": "Latent heat involves no temperature change, so there is no per degree C in its unit."
        },
        {
          "id": "q-phy-heat-5",
          "quizId": "quiz-phy-heat",
          "questionText": "An immersion heater carrying 2 A at 12 V is used for 700 s on 0.5 kg of water. Ignoring losses, what temperature rise results? (c = 4200 J per kg per degree C)",
          "optionA": "8 degrees C",
          "optionB": "4 degrees C",
          "optionC": "16 degrees C",
          "optionD": "40 degrees C",
          "correctOption": "A",
          "subConcept": "Electrical method",
          "explanation": "Energy = V I t = 12 x 2 x 700 = 16800 J, so delta-theta = 16800 / (0.5 x 4200) = 8 degrees C. Option C comes from forgetting the 0.5 kg mass in the denominator.",
          "remediationTip": "Equate V I t to m c delta-theta and solve for delta-theta, keeping the mass in place."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t2-wave-motion-sound",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 4,
    "title": "Wave Motion, Sound and the Ripple Tank",
    "description": "Wave motion as energy transfer without transfer of matter: transverse and longitudinal waves, wavelength, frequency, period, amplitude and speed with v = f lambda, reflection and refraction of waves, echoes, resonance in strings and pipes, beats, ultrasonics, and the use of the ripple tank to model wave behaviour.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A wave transfers energy from place to place without transferring matter; the particles of the medium only vibrate about fixed positions.\n• In a transverse wave the particles vibrate perpendicular to the direction of travel; examples are waves on a string, water-surface ripples and light.\n• In a longitudinal wave the particles vibrate along the direction of travel, forming compressions and rarefactions; sound in air is longitudinal.\n• Wavelength lambda is the distance between two successive identical points, such as crest to crest, measured in metres.\n• Frequency f is the number of complete waves passing a point each second, in hertz (Hz); the period T, the time for one wave, is T = 1 / f.\n• Amplitude is the maximum displacement from the rest position; for sound it fixes loudness and for light it fixes brightness.\n• The wave equation is v = f lambda: speed in m per s equals frequency in Hz times wavelength in metres.\n• Sound travels at about 330 to 340 m per s in air, faster in liquids and fastest in solids; the human ear hears roughly 20 Hz to 20 000 Hz.\n• An echo is a reflected sound; to hear a distinct echo the reflecting surface must be at least about 17 m away, since the ear needs about 0.1 s between the original sound and its reflection.\n• Waves reflect at an angle equal to the angle of incidence, and they refract, changing speed and direction, when they pass between media or between deep and shallow water.\n• In a ripple tank waves travel faster in deep water and slower in shallow water, so a wave bends towards the normal as it enters the shallow region.\n• Resonance is the large vibration set up when a driving frequency equals the natural frequency of a body; an air column rings loudest at resonance.\n• A closed pipe resonates at lengths of one quarter, three quarters and five quarters of a wavelength; an open pipe resonates at half wavelengths.\n• Beats are the regular rise and fall in loudness from two sound waves of slightly different frequencies meeting; beat frequency = difference of the two frequencies.\n• Ultrasound, sound above 20 000 Hz, is used in SONAR and echo-sounding to find depth and in medical scanning, and the ripple tank models these wave effects visibly.",
    "detailedNotes": {
      "overview": "This topic builds the language of waves and then applies it to sound and to the ripple tank. You will tell transverse from longitudinal waves, define wavelength, frequency, period, amplitude and speed, and use the wave equation v = f lambda in calculations. You will explain reflection and refraction, the conditions for a clear echo, resonance in stretched strings and in open and closed pipes, and the beats heard when two close frequencies interfere. You will finish with ultrasonics and echo-sounding, and show how the ripple tank makes all these invisible effects visible for a school laboratory.",
      "introduction": "Work from what you can see and hear. Fill the school ripple tank, set the dipper vibrating and project the waves onto paper under the tank, then measure wavelength from the shadows and count waves over a timed interval to find frequency; the product is the wave speed. Strike two tuning forks of near-equal frequency together and listen for the slow rise and fall of beats. Then hold a vibrating fork over a tube of water and lower the water level until the sound suddenly swells, which is resonance of a closed air column. Anchoring each term in a real sight or sound will make the calculations and the Paper 3 practical far easier.",
      "realWorldContext": "A drummer on a fontomom or a talking drum at a ceremony in Kumasi hears the skin and the enclosed air resonate, so the drum is a lesson in natural frequency and loudness. Fishing boats working out of Tema use an echo-sounder that sends ultrasound down and times the returning echo to find depth and to spot the shoal, the same principle as SONAR. An empty classroom or a large church hall gives back echoes that make speech hard to follow, and the answer, soft curtains and padded boards, is a wave-absorption problem. A nurse at a district hospital arranges an ultrasound scan, and a technician uses ultrasonic flaws to test welds on a water tank. Even the pitch change of a passing trotro is wave behaviour, and the ripple tank in a Ghana Education Service laboratory ties all of this into one visible model.",
      "objectives": [
        "Distinguish transverse from longitudinal waves and give a clear example of each",
        "Define wavelength, frequency, period, amplitude and wave speed, and use v = f lambda",
        "Describe reflection and refraction of waves and state the condition for a distinct echo",
        "Explain resonance and the vibrations set up in stretched strings and in open and closed pipes",
        "Describe beats and ultrasonics and explain the use of the ripple tank and of echo-sounding"
      ],
      "sections": [
        {
          "title": "Wave Types and the Wave Equation",
          "content": "A wave is a disturbance that carries energy from one place to another without carrying matter with it; in water waves a floating leaf bobs up and down on the spot rather than travelling with the crests, which proves that only energy moves. Waves come in two families. In a transverse wave the vibrations are at right angles to the direction of travel, as in waves on a stretched string, ripples on a water surface and light. In a longitudinal wave the vibrations are along the direction of travel, producing alternate compressions and rarefactions in the medium; sound in air is longitudinal. Five quantities describe any wave. The wavelength lambda is the distance between two successive identical points, measured in metres. The amplitude is the maximum displacement from the rest position, and it governs how loud a sound or how bright a light seems. The frequency f is the number of complete waves passing a point each second, in hertz, and the period T, the time for one complete wave, is T = 1 / f. These are tied together by the wave equation v = f lambda, so a wave of frequency 20 Hz and wavelength 1.5 m travels at 20 x 1.5 = 30 m per s.",
          "bulletPoints": [
            "A wave carries energy, not matter; a floating cork only bobs on the spot.",
            "Transverse: vibrations perpendicular to travel (string, water surface, light).",
            "Longitudinal: vibrations along travel, compressions and rarefactions (sound in air).",
            "Frequency f in hertz; period T = 1 / f; wavelength lambda in metres.",
            "Wave equation v = f lambda; 20 Hz at 1.5 m gives 30 m per s."
          ],
          "keyTakeaway": "Know the two wave families and keep v = f lambda and T = 1 / f ready; almost every numerical wave question is one substitution into them.",
          "realWorldExample": "A radio technician explaining why a long-wave and a short-wave signal travel at the same speed but have different pitches is really using v = f lambda: same v, different lambda means different f."
        },
        {
          "title": "Reflection, Refraction and Echoes",
          "content": "Waves reflect when they meet a barrier they cannot pass, and the law of reflection holds: the angle at which the wavefront meets the barrier equals the angle at which it leaves, both measured to the normal. Sound reflects in the same way, and a reflected sound heard separately from the original is an echo. Because the human ear cannot separate two sounds that arrive less than about 0.1 s apart, a distinct echo needs the reflecting surface to be far enough that the extra journey takes at least 0.1 s; with sound at about 340 m per s the round trip in 0.1 s is 34 m, so the wall must be at least about 17 m away. Waves refract when they pass from one medium into another where their speed is different, and they change direction at the boundary. Water waves slow down as they move into shallower water and speed up in deeper water, so a straight wavefront approaching shallow water at an angle bends towards the normal, exactly as light bends entering a denser medium. In every refraction the frequency stays fixed; it is the wavelength and speed that change together.",
          "bulletPoints": [
            "Reflection: angle of incidence equals angle of reflection, measured to the normal.",
            "An echo is a reflected sound heard apart from the original.",
            "A distinct echo needs a reflector about 17 m or more away (0.1 s, sound at 340 m per s).",
            "Refraction is a change of direction caused by a change of speed between media.",
            "On refraction frequency stays constant; speed and wavelength change together."
          ],
          "keyTakeaway": "Reflection gives echoes and needs about 17 m of distance; refraction bends a wave whenever its speed changes, and the frequency never changes.",
          "realWorldExample": "In a bare-walled assembly hall at a school in Cape Coast a speaker's words come back as an confusing echo; hanging curtains and fixing padded boards absorb the reflected sound and clear the speech."
        },
        {
          "title": "The Ripple Tank as a Wave Model",
          "content": "The ripple tank is the standard school instrument for making the abstract visible. A shallow glass-bottomed tank of water is lit from above, and a motor-driven dipper, either a straight bar for plane waves or a single point for circular waves, touches the surface and sends out regular waves that are projected as bright and dark bands onto paper placed below. A flat barrier set in the tank shows reflection, with the wavefronts obeying the angle law. A thick sheet of glass laid under the water to make a shallow region shows refraction, because the waves slow and bend on entering the shallow part. Narrow gaps between two barriers demonstrate diffraction, the spreading of waves through an opening, and the spreading is greatest when the gap is about the same size as the wavelength. By changing the dipper frequency and measuring the wavelength of the shadow bands, a class can compute the wave speed directly with v = f lambda. The main safety and technique points are to keep the water level shallow enough to see, to clean the glass so the image is crisp, and to read the scale at eye level.",
          "bulletPoints": [
            "A bar dipper gives plane waves; a point dipper gives circular waves.",
            "A flat barrier in the tank demonstrates reflection at equal angles.",
            "A glass plate making a shallow region demonstrates refraction and slowing of waves.",
            "A narrow gap demonstrates diffraction, greatest when gap is near one wavelength.",
            "Wavelength is measured from the projected bands and combined with f to find v."
          ],
          "keyTakeaway": "The ripple tank lets a class see reflection, refraction and diffraction at once and measure a wave speed by counting waves and ruling wavelengths.",
          "realWorldExample": "A physics class at a senior high school in Kumasi sets up the ripple tank with a glass plate to make one shallow end, then traces how the straight wavefronts bend towards the normal exactly where the water becomes shallower."
        },
        {
          "title": "Sound, Resonance, and Vibrating Strings and Pipes",
          "content": "Sound is a longitudinal wave produced by a vibrating body and needing a material medium, so it cannot travel through a vacuum. Its speed in air is about 330 to 340 m per s, greater in liquids and greatest in solids, because the particles there are closer together and pass the vibration on faster. The pitch of a sound is set by its frequency, and the healthy human ear detects roughly 20 Hz to 20 000 Hz. A stretched string sounds a note at its natural frequency, which rises when the string is shorter, tighter or thinner, the principle behind tuning a guitar or the strings of an African harp. A column of air resonates, sounding much louder, when its length matches a natural standing-wave pattern: a pipe closed at one end resonates when its length equals one quarter, then three quarters, then five quarters of a wavelength, while an open pipe resonates at half wavelengths. Resonance is the general name for the large vibration that occurs whenever a driving frequency equals a natural frequency, and it is why one tuning fork can set a second of the same frequency humming across a table.",
          "bulletPoints": [
            "Sound is longitudinal, needs a medium, and travels about 340 m per s in air.",
            "Pitch is set by frequency; the hearing range is roughly 20 Hz to 20 000 Hz.",
            "A string's frequency rises when it is shorter, tighter or lighter.",
            "Closed pipe resonates at odd quarter wavelengths; open pipe at half wavelengths.",
            "Resonance is a large vibration when driving frequency equals natural frequency."
          ],
          "keyTakeaway": "Loud, clear notes come from resonance, and knowing whether a pipe is open or closed tells you whether to use half or quarter wavelengths.",
          "realWorldExample": "A pupil blowing across the top of a bottle hears a resonant note from the air column above the water; adding water shortens the column and raises the pitch, exactly as a closed pipe."
        },
        {
          "title": "Beats and Ultrasonics",
          "content": "When two sound waves of slightly different frequencies arrive together at the ear, they interfere alternately constructively and destructively, producing a steady rise and fall in loudness called beats. The beat frequency is simply the difference between the two frequencies, so a 256 Hz tuning fork sounded with a 260 Hz fork gives 4 beats each second. A musician tunes by ear by bringing two tones together and adjusting until the beats slow down and vanish, which means the frequencies have matched. Sound above the range of human hearing, above about 20 000 Hz, is called ultrasound, and although we cannot hear it, it reflects well from boundaries and so is extremely useful. Bats navigate by ultrasonic echoes, and medical scanners form images of an unborn baby from reflected ultrasound. SONAR and the echo-sounder on a fishing boat send an ultrasonic pulse down and time its return; since the pulse covers the depth twice, the depth is speed times total time divided by two. In sea water sound travels at about 1500 m per s, so a pulse returning after 0.8 s indicates a depth of 600 m.",
          "bulletPoints": [
            "Beats are periodic loudness changes from two close frequencies interfering.",
            "Beat frequency = the difference between the two frequencies (260 minus 256 = 4 Hz).",
            "Tuning by ear means adjusting until the beats disappear.",
            "Ultrasound is above about 20 000 Hz and reflects well from boundaries.",
            "Echo-sounding depth = (speed x total time) / 2; 1500 x 0.8 / 2 = 600 m."
          ],
          "keyTakeaway": "Beats reveal tiny frequency differences and ultrasound turns reflection into measurement, which is how SONAR reads the depth of the sea.",
          "realWorldExample": "A fisherman off Elmina reads his echo-sounder: an ultrasonic pulse that returns after 0.8 s from a seabed where sound travels at 1500 m per s tells him the water is 600 m deep and the shoal sits above it."
        }
      ],
      "commonMistakes": [
        "Confusing the wave types: saying sound is transverse; sound in air is longitudinal, with compressions and rarefactions, while only waves on a string, water ripples and light are transverse.",
        "Forgetting that an echo covers the distance twice, so depth or distance = speed x time / 2; using speed x time as the one-way distance doubles the true answer.",
        "Mixing period and frequency, or writing f = 1 / T with T in minutes; the period must be in seconds and the frequency then comes out in hertz.",
        "Leaving the wavelength in centimetres in v = f lambda; 2.5 cm must be 0.025 m, and using 2.5 multiplies the wave speed by 100.",
        "Claiming the frequency changes on refraction; when a wave slows entering shallow water its speed and wavelength change but the frequency stays fixed."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): identify the transverse or longitudinal example instantly; light and string waves are transverse, sound in air is longitudinal, and these are the two most-tested classifications.",
        "Paper 2 (theory or structured): a method mark (M1) is given for writing v = f lambda with the substitution and the answer mark (A1) for the number and unit, so always convert the wavelength to metres first and end the speed in m per s.",
        "On echo and SONAR questions, remember the factor of two; show a line dividing the total time by 2 (or the total distance by 2), which is itself worth a method mark even before the arithmetic.",
        "For an open- or closed-pipe question, state the resonance condition before calculating, closed pipe uses odd quarter wavelengths, open pipe uses half wavelengths, then substitute the given length.",
        "Paper 3 (practical): in the ripple tank know how to obtain a sharp projected image, how to measure wavelength from the bands, and how to time many waves to get frequency; state that measuring several wavelengths and averaging reduces the reading error."
      ],
      "summaryChecklist": [
        "Can I tell a transverse wave from a longitudinal wave and give an example of each?",
        "Can I define wavelength, frequency, period and amplitude and use v = f lambda and T = 1 / f?",
        "Can I explain reflection, refraction and echo, and state why a reflector must be about 17 m away?",
        "Can I describe resonance in a string and in an open or a closed pipe?",
        "Can I explain beats and ultrasound and use echo-sounding to find the depth of water?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-wave-1",
        "title": "Echo-Sounding to Find the Depth of the Sea",
        "problem": "A fishing vessel off Tema sends a short ultrasonic pulse straight down to the seabed and receives the echo 0.8 s later. If sound travels at 1500 m per s in sea water, find the depth of the sea at that point.",
        "stepByStepSolution": [
          "Step 1 (M1): the pulse travels down and back, so the one-way time is 0.8 / 2 = 0.4 s.",
          "Step 2 (M1): depth = speed x one-way time = 1500 x 0.4.",
          "Step 3 (A1): depth = 600 m."
        ],
        "keyTakeaway": "In echo work the sound covers the distance twice, so halve the time (or the total distance) before giving the depth."
      },
      {
        "id": "ex-phy-wave-2",
        "title": "Wave Speed from a Ripple Tank",
        "problem": "In a ripple tank a wooden bar dipper makes 40 complete vibrations in 5.0 s, and the distance between successive wave crests projected on the screen is measured as 2.5 cm. Find the frequency, the wavelength in metres and the speed of the waves.",
        "stepByStepSolution": [
          "Step 1 (M1): frequency f = number of vibrations / time = 40 / 5.0.",
          "Step 2 (A1): f = 8 Hz.",
          "Step 3 (M1): wavelength lambda = 2.5 cm = 0.025 m.",
          "Step 4 (M1): apply the wave equation v = f lambda = 8 x 0.025.",
          "Step 5 (A1): wave speed v = 0.2 m per s."
        ],
        "keyTakeaway": "Count many waves and divide by the total time to get frequency, convert the wavelength to metres, then use v = f lambda."
      }
    ],
    "quiz": {
      "id": "quiz-phy-wave",
      "topicId": "shs2-phy-t2-wave-motion-sound",
      "title": "Wave Motion and Sound Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-wave-1",
          "quizId": "quiz-phy-wave",
          "questionText": "Which of the following is a longitudinal wave?",
          "optionA": "A wave travelling along a stretched string",
          "optionB": "A sound wave travelling in air",
          "optionC": "A ripple on the surface of water",
          "optionD": "A beam of light travelling through glass",
          "correctOption": "B",
          "subConcept": "Transverse and longitudinal waves",
          "explanation": "Sound in air is longitudinal, made of compressions and rarefactions along the direction of travel. String waves, water ripples and light are transverse.",
          "remediationTip": "Link sound to compressions and the string and light waves to perpendicular vibration."
        },
        {
          "id": "q-phy-wave-2",
          "quizId": "quiz-phy-wave",
          "questionText": "A wave has frequency 20 Hz and wavelength 1.5 m. What is its speed?",
          "optionA": "30 m per s",
          "optionB": "13.5 m per s",
          "optionC": "0.075 m per s",
          "optionD": "300 m per s",
          "correctOption": "A",
          "subConcept": "Wave equation",
          "explanation": "v = f lambda = 20 x 1.5 = 30 m per s. Option C comes from dividing lambda by f and option D from a decimal slip.",
          "remediationTip": "Recall v = f lambda always as a product, then check the answer is sensible for a wave."
        },
        {
          "id": "q-phy-wave-3",
          "quizId": "quiz-phy-wave",
          "questionText": "Taking sound at 340 m per s and the ear needing about 0.1 s to separate two sounds, what is the shortest distance to a wall for a distinct echo?",
          "optionA": "170 m",
          "optionB": "340 m",
          "optionC": "3.4 m",
          "optionD": "17 m",
          "correctOption": "D",
          "subConcept": "Echo",
          "explanation": "In 0.1 s sound travels 340 x 0.1 = 34 m, but this is the round trip to the wall and back, so the wall is 34 / 2 = 17 m away. Option A (170 m) comes from a wrong time.",
          "remediationTip": "Always halve the round-trip distance for an echo."
        },
        {
          "id": "q-phy-wave-4",
          "quizId": "quiz-phy-wave",
          "questionText": "Two tuning forks of 256 Hz and 260 Hz are sounded together. What is the beat frequency?",
          "optionA": "516 Hz",
          "optionB": "258 Hz",
          "optionC": "4 Hz",
          "optionD": "2 Hz",
          "correctOption": "C",
          "subConcept": "Beats",
          "explanation": "Beat frequency equals the difference of the two frequencies: 260 minus 256 = 4 Hz. Option B (258 Hz) is the average frequency, not the beat.",
          "remediationTip": "For beats, subtract the two frequencies; the average is not the beat rate."
        },
        {
          "id": "q-phy-wave-5",
          "quizId": "quiz-phy-wave",
          "questionText": "In a ripple tank waves travel faster in deep water than in shallow water. What happens to plane waves that enter a shallow region at an angle?",
          "optionA": "They speed up and bend away from the normal",
          "optionB": "They slow down and bend towards the normal",
          "optionC": "They keep the same speed and direction",
          "optionD": "They are totally reflected at once",
          "correctOption": "B",
          "subConcept": "Refraction of water waves",
          "explanation": "Entering shallower water the waves slow down, and a decrease in speed bends the wave towards the normal while the frequency stays fixed. Option A reverses both the speed change and the bending.",
          "remediationTip": "Remember slow equals shallow for water waves, and slow means bending towards the normal."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t2-thermodynamics-gas-laws-engines",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 9,
    "title": "Thermodynamics: Internal Energy, Gas Laws and Heat Engines",
    "description": "Energy of the molecules: internal energy and temperature, heat supplied shared between raising internal energy and work done by the gas, expansion and compression, where real gases depart from ideal behaviour, Charles' law and the general gas equation PV/T, the four-stroke petrol and diesel cycles in simple terms, the indicator-diagram idea, and why engine efficiency is always below a hundred percent.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Internal energy is the total kinetic plus potential energy of the molecules of a body; it depends on temperature, state and quantity of material.\n• Temperature measures the average kinetic energy of the molecules; heat is energy transferred because of a temperature difference, and work is energy transferred by a force through a distance; the three are not the same thing.\n• First-law idea: heat supplied to a gas = increase in its internal energy + external work done by the gas, written Q = delta-U + W.\n• Work done by a gas expanding against constant pressure: W = P times delta-V, with delta-V in cubic metres, so that W comes out in joules.\n• Compressing a gas does work on it and raises its internal energy, so its temperature climbs; that is the bicycle-pump warmth and the diesel ignition.\n• Convert to kelvin before every gas-law calculation: add 273, so 27 degrees C is 300 K and 127 degrees C is 400 K.\n• Boyle's law: P x V constant at fixed temperature; Charles' law: V proportional to T at fixed pressure; general gas equation for a fixed mass: P1 V1 / T1 = P2 V2 / T2.\n• An ideal gas is assumed to have point molecules with no attractions and perfectly elastic collisions; real gases depart from this at high pressure and low temperature.\n• Under enough pressure and cold, a real gas liquefies, which no ideal gas can do; LPG in a cylinder is butane held as liquid by pressure, boiling back to gas when the valve opens.\n• The four strokes of a petrol engine are intake of an air-petrol mixture, compression, power from a spark-ignited expansion, and exhaust.\n• A diesel engine compresses only air to a much higher ratio, then sprays in fuel that ignites from the heat of compression; it has no spark plug and is the more efficient engine.\n• The indicator diagram plots pressure against volume around a full cycle; the area enclosed by the loop is the net work done per cycle.\n• Efficiency = useful work output / energy supplied by the fuel x 100 percent; typical petrol engines reach about 25 to 30 percent and diesels about 35 to 40 percent, and no engine can reach 100 percent because hot exhaust and cooling must carry away energy.",
    "detailedNotes": {
      "overview": "This topic joins the molecular picture of energy to the machines that use it. You will separate temperature, heat and internal energy cleanly, state the first-law share-out in which supplied heat becomes increased internal energy plus external work, and calculate expansion work as P times the change in volume. You will then run the gas laws forward, using the general equation P1V1/T1 = P2V2/T2 with absolute temperatures, and examine where real gases, such as the butane in an LPG cylinder, break the ideal assumptions. Finally you will trace the four strokes of petrol and diesel engines, meet the indicator diagram whose enclosed loop measures the work of a cycle, and explain with confidence why efficiency stays below a hundred percent.",
      "introduction": "Begin with the pump: close the outlet of a bicycle hand pump and push the handle down briskly several times; the barrel warms because you are doing work on the trapped air, converting mechanical energy into internal energy. Next take a gas syringe, trap a fixed mass of air and move the plunger while you watch the pressure gauge, revisiting Boyle's law with absolute temperature held fixed by handling the barrel as little as possible. Then study a cut-away petrol engine model in the workshop or a labelled diagram, naming the four strokes in order and pointing at each part: inlet valve, spark plug, piston, exhaust valve. Every calculation on this page uses kelvin; write the conversion on the first line of your working.",
      "realWorldContext": "A trotro driver on the Accra-Tema motorway knows the temperature gauge is reading the internal energy of the coolant, and that the engine's own petrol cycle converts only about a quarter of the fuel energy into motion, the rest leaving as hot exhaust and radiator heat. Chop-bar kitchens in Tamale run on LPG cylinders in which butane is held as liquid by pressure and boils back into gas as the burner valve opens, the cylinder skin cooling as it gives up the latent heat of vaporisation, a daily demonstration of real-gas behaviour. Diesel generators with their higher compression ratios power banks and clinics through outages, roughly a third more of the diesel's energy becoming electricity than a petrol generator of the same size would manage. At the Takoradi thermal station, steam expanding against turbine blades does work P delta-V on a colossal scale, and ECG engineers read indicator-style pressure-volume charts of the generating sets during maintenance. Mechanics at Suame Magazine judge a tired engine by its blow-by and poor compression, the same loss of useful work the theory predicts.",
      "objectives": [
        "Distinguish internal energy, temperature and heat and state the first-law relation Q = delta-U + W",
        "Calculate work done by a gas expanding at constant pressure using W = P delta-V",
        "Apply Charles' law and the general gas equation P1V1/T1 = P2V2/T2 with absolute temperatures",
        "Describe the four-stroke petrol and diesel cycles, the indicator-diagram idea, and the reasons engine efficiency stays below 100 percent"
      ],
      "sections": [
        {
          "title": "Internal Energy, Heat and Work: the First Law Idea",
          "content": "Molecules are never still; they translate, rotate and jostle, and they attract each other at a distance. The internal energy of a body is the total of the kinetic energies of all its molecules plus the potential energies of their separations, so it depends on how much material there is, on the temperature and on the state; a bucket of warm water holds far more internal energy than a red-hot nail, even though the nail's molecules have the greater average kinetic energy, because temperature measures only that average. Heat, by contrast, is energy in transfer from the hotter body to the colder one, and work is energy transferred by a force acting through a distance. When you supply heat Q to a gas in a rigid sealed container, none of it escapes as work because the walls cannot move, so all of it raises the internal energy and the temperature. Heat the same gas in a cylinder fitted with a loose piston and it expands, pushing the piston out; the gas does external work, at constant pressure W = P times delta-V, and the supplied heat is shared between the increase in internal energy and that work. The share-out, heat supplied equals increase in internal energy plus work done by the gas, is the first law of thermodynamics, and it is just conservation of energy with the molecules counted in. Run it backward by compressing a gas: you do work on it, the work lands in the internal energy and the temperature rises. The barrel of a bicycle pump grows warm in the hand for this reason alone, and it is the same compression heating that lights the fuel in a diesel cylinder without any spark.",
          "bulletPoints": [
            "Internal energy = total molecular kinetic plus potential energy; it grows with mass, temperature and state.",
            "Temperature measures only the average molecular kinetic energy.",
            "Rigid container: all supplied heat becomes internal energy, W = 0.",
            "Moving piston: Q = delta-U + W, with expansion work W = P delta-V.",
            "Compression puts work into internal energy and raises temperature."
          ],
          "keyTakeaway": "Supplied heat is never lost: it appears as raised internal energy, as external work, or as a share of each.",
          "realWorldExample": "The barrel of a bicycle pump warms after a few hard strokes because the work done on the trapped air is stored as internal energy in it."
        },
        {
          "title": "Gas Laws, PV/T and Real Gas Behaviour",
          "content": "For a fixed mass of gas the three old laws combine into one. Boyle's law holds P V constant at a fixed temperature, Charles' law holds V over T constant at a fixed pressure, and joining them gives the general gas equation P1 V1 / T1 = P2 V2 / T2. Every temperature in that equation must be absolute, taken in kelvin, found by adding 273 to the Celsius value; 27 degrees C becomes 300 K and 127 degrees C becomes 400 K, and a calculation that keeps the Celsius numbers silently inflates every ratio, which is the error examiners hunt for. The laws describe an ideal gas, whose molecules are imagined as point masses with no intermolecular attraction and whose collisions waste no energy. Real gases obey the pattern only approximately. At ordinary pressures the molecules of air are so far apart that the ideal picture is excellent; squeeze a gas to high pressure and two corrections bite at once, the molecules' own volume occupies a share of the container that the ideal model treats as empty, and their mutual attractions, strong when molecules are close, pull the measured pressure below the ideal value. Cool a gas enough as well and those attractions make it condense into a liquid, something an ideal gas can never do. The clearest Ghanaian example sits in every kitchen: LPG contains butane and propane, held as a liquid by its own pressure at room temperature, with the gas above the liquid at a steady pressure; open the burner valve and gas escapes, the liquid boils to replace it, and the cylinder cools as latent heat is drawn in. In the school laboratory the traps in a gas-syringe Boyle experiment are the same two enemies: leakage past the barrel seal and the warmth of hands changing the temperature of the trapped air.",
          "bulletPoints": [
            "General gas equation: P1 V1 / T1 = P2 V2 / T2 for a fixed mass.",
            "Always convert to kelvin first: K = degrees C + 273.",
            "Ideal gas: point molecules, no attractions, no energy wasted in collisions.",
            "Real gases deviate at high pressure and low temperature because molecules have volume and attract.",
            "LPG shows condensation: butane stored as liquid under its own vapour pressure."
          ],
          "keyTakeaway": "The gas laws are an idealisation; pressure too high or temperature too low and the real molecule volume and attractions betray themselves, ending in liquefaction.",
          "realWorldExample": "An LPG cylinder in a Tamale chop-bar kitchen stays partly liquid, and its skin chills while cooking as the butane boils away to keep the gas pressure steady."
        },
        {
          "title": "Heat Engines: Petrol and Diesel Cycles, Indicator Diagram and Efficiency",
          "content": "A heat engine is any device that turns heat into mechanical work by making a gas expand in a repeating cycle. The four-stroke petrol engine completes its cycle in two revolutions of the crank. First the piston descends on the intake stroke and draws in a fine mixture of petrol vapour and air; then it rises on the compression stroke, squeezing the mixture; near the top of that stroke the spark plug fires and the mixture burns, and the hot high-pressure gas drives the piston down on the power stroke, the only stroke delivering work to the crank; finally the piston rises again pushing the spent gases out through the exhaust valve. The diesel engine differs in two decisive ways. It compresses only plain air, and to a much higher compression ratio; the compressed air becomes so hot from the work put into it that when the injector sprays fine diesel into it the fuel ignites by itself, so there is no spark plug anywhere in a diesel. Because the diesel runs hotter and expands its gases further, it converts a larger fraction of the fuel energy into work, which is why the trailers and generating sets around Ghana are diesels. Engineers picture the whole cycle as an indicator diagram, a graph of pressure against volume traced around the four strokes; the area enclosed by the loop is the net work delivered per cycle, and a fatter loop means more work, so a mechanic testing a tired engine is really asking why the loop has shrunk. Yet even the best loop closes below the input: no engine reaches 100 percent efficiency, because a portion of every burn must leave as the heat of the hot exhaust gases and as heat carried away by the cooling system, and friction in the bearings and rings takes the remainder; petrol engines manage roughly 25 to 30 percent useful work and diesels about 35 to 40 percent. The unspoken rule, the one the syllabus states plainly, is that some heat must always be rejected to a colder surroundings; an engine that swallowed all its heat and returned only work would violate the first-law share-out and has never been built.",
          "bulletPoints": [
            "Four petrol strokes in order: intake of mixture, compression, spark-ignited power, exhaust.",
            "Diesel compresses air only, then injects fuel that ignites from compression heat.",
            "Higher compression and hotter expansion make the diesel the more efficient engine.",
            "Indicator diagram: enclosed loop area on the pressure against volume graph equals net work per cycle.",
            "Efficiency stays below 100 percent because exhaust heat, cooling and friction take the rest."
          ],
          "keyTakeaway": "An engine is a controlled sequence of compression-heating, expansion-work and heat rejection; the loop area on the P-V graph is exactly the work it sells you.",
          "realWorldExample": "A diesel generator set behind a clinic in Ho turns over more of each litre of diesel into useful work than a petrol generator of the same size, near 35 to 40 percent against 25 to 30."
        }
      ],
      "commonMistakes": [
        "Using Celsius values in the general gas equation, substituting the ratio 127/27 instead of 400/300; every gas-law temperature must be converted to kelvin on the first line.",
        "Equating temperature with internal energy: the red-hot nail has a higher temperature but far less internal energy than the bucket of warm water, because energy also depends on quantity of molecules.",
        "Attributing a spark plug to the diesel engine or saying a diesel draws in a fuel-air mixture; the diesel compresses air alone and ignites injected fuel by heat of compression.",
        "Believing friction removal could make an engine 100 percent efficient; even ideally, hot exhaust and the cold surroundings must receive part of every burn's heat."
      ],
      "wassceExamTips": [
        "Paper 1 (objective): if Celsius temperatures appear in a gas-law question, check whether the wrong options were built from Celsius ratios before choosing; convert to kelvin first and the intended answer usually separates itself.",
        "Paper 2 (theory): write P1 V1 / T1 = P2 V2 / T2, rearrange to V2 = P1 V1 T2 / (T1 P2), then substitute with units shown; the method mark (M1) is for the correct rearrangement and the answer mark (A1) for the numerical value with its unit.",
        "Paper 3 (practical or alternative practical): the trapped-air Boyle experiment demands a fixed mass of dry air, no leak past the syringe seal, readings taken with the barrel not gripped in the hand so temperature stays constant, and volume read square on to the scale.",
        "Engine structure answers want order and reason: name the four strokes in sequence, contrast petrol and diesel on what is taken in and how ignition happens, then give one accepted reason for the sub-100-percent efficiency, hot exhaust or cooling loss; one mark per clause."
      ],
      "summaryChecklist": [
        "Can I separate internal energy, temperature and heat with examples of each?",
        "Can I state Q = delta-U + W and compute expansion work as P delta-V with delta-V in cubic metres?",
        "Can I solve problems with P1V1/T1 = P2V2/T2 using absolute temperatures?",
        "Can I explain why real gases deviate at high pressure and low temperature and how LPG liquefaction proves it?",
        "Can I trace the four petrol and diesel strokes, read an indicator loop as work, and account for efficiency below 100 percent?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-thermodynamics-gas-laws-engines-1",
        "title": "General Gas Equation with a Temperature and Pressure Change",
        "problem": "A fixed mass of gas occupies 600 cm cubed at 27 degrees C and a pressure of 1.0 x 10 to the 5 Pa. Find its volume when the temperature is raised to 127 degrees C and the pressure becomes 2.0 x 10 to the 5 Pa.",
        "stepByStepSolution": [
          "Step 1 (M1): convert both temperatures to kelvin: T1 = 27 + 273 = 300 K, T2 = 127 + 273 = 400 K.",
          "Step 2 (M1): write the general gas equation P1 V1 / T1 = P2 V2 / T2 and rearrange to V2 = P1 V1 T2 / (T1 P2).",
          "Step 3 (M1): substitute: V2 = (1.0 x 10 to the 5 x 600 x 400) / (300 x 2.0 x 10 to the 5).",
          "Step 4 (A1): V2 = (600 x 400) / (300 x 2) = 240 000 / 600 = 400 cm cubed."
        ],
        "keyTakeaway": "Doubling the absolute temperature alone would inflate the volume; doubling the pressure together with it wins, and the net volume falls to 400 cm cubed."
      },
      {
        "id": "ex-phy-thermodynamics-gas-laws-engines-2",
        "title": "Expansion Work and the First Law Share-Out",
        "problem": "A gas in a cylinder pushes its piston out at a constant pressure of 2.0 x 10 to the 5 Pa, increasing its volume by 50 cm cubed. During the expansion 40 J of heat is supplied to the gas. Find the work done by the gas and the increase in its internal energy.",
        "stepByStepSolution": [
          "Step 1 (M1): convert the volume change: 50 cm cubed = 50 x 10 to the -6 m cubed = 5.0 x 10 to the -5 m cubed.",
          "Step 2 (M1): work done by the gas W = P times delta-V = 2.0 x 10 to the 5 x 5.0 x 10 to the -5.",
          "Step 3 (A1): W = 10 J.",
          "Step 4 (M1): first-law idea: Q = delta-U + W, so delta-U = Q - W = 40 - 10.",
          "Step 5 (A1): increase in internal energy = 30 J."
        ],
        "keyTakeaway": "Of the 40 J supplied, 10 J leave as external work and 30 J stay inside the gas, raising its internal energy and temperature."
      }
    ],
    "quiz": {
      "id": "quiz-phy-thermodynamics-gas-laws-engines",
      "topicId": "shs2-phy-t2-thermodynamics-gas-laws-engines",
      "title": "Thermodynamics and Heat Engines Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-thermodynamics-gas-laws-engines-1",
          "quizId": "quiz-phy-thermodynamics-gas-laws-engines",
          "questionText": "A gas sample is at 27 degrees C. What absolute temperature must be used in a gas-law calculation?",
          "optionA": "27 K",
          "optionB": "300 K",
          "optionC": "246 K",
          "optionD": "373 K",
          "correctOption": "B",
          "subConcept": "Absolute temperature",
          "explanation": "Kelvin equals Celsius plus 273, so 27 degrees C is 300 K. Option C subtracts instead of adds and D is the boiling point of water.",
          "remediationTip": "Make the conversion the very first line of any gas-law working."
        },
        {
          "id": "q-phy-thermodynamics-gas-laws-engines-2",
          "quizId": "quiz-phy-thermodynamics-gas-laws-engines",
          "questionText": "In a four-stroke engine, the stroke in which the working gas does work on the piston is the",
          "optionA": "intake stroke.",
          "optionB": "compression stroke.",
          "optionC": "exhaust stroke.",
          "optionD": "power (expansion) stroke.",
          "correctOption": "D",
          "subConcept": "Engine strokes",
          "explanation": "Only the expansion after ignition drives the piston down and delivers work to the crank; on the compression stroke work is done on the gas, and intake and exhaust mainly move charges in and out.",
          "remediationTip": "Check the direction of energy each stroke: gas pushes piston, or piston pushes gas."
        },
        {
          "id": "q-phy-thermodynamics-gas-laws-engines-3",
          "quizId": "quiz-phy-thermodynamics-gas-laws-engines",
          "questionText": "How does a diesel engine ignite its fuel?",
          "optionA": "A spark plug fires just after the intake stroke.",
          "optionB": "Glowing exhaust gases re-ignite the mixture.",
          "optionC": "Air compressed to a high ratio becomes hot enough to set off the sprayed-in fuel.",
          "optionD": "Fuel is pre-heated in the inlet manifold.",
          "correctOption": "C",
          "subConcept": "Diesel ignition",
          "explanation": "The diesel compresses only air to a high ratio, and the compression work raises the air temperature past the kindling point of the injected fuel; there is no spark plug in a diesel.",
          "remediationTip": "Pair the words: petrol uses a spark, diesel uses compression heat."
        },
        {
          "id": "q-phy-thermodynamics-gas-laws-engines-4",
          "quizId": "quiz-phy-thermodynamics-gas-laws-engines",
          "questionText": "On an indicator diagram of an engine cycle, the area enclosed by the loop represents",
          "optionA": "the net work done per cycle.",
          "optionB": "the heat of combustion per cycle.",
          "optionC": "the fuel consumed per cycle.",
          "optionD": "the peak temperature of the gas.",
          "correctOption": "A",
          "subConcept": "Indicator diagram",
          "explanation": "The diagram plots pressure against volume; area under an expansion path is work, and the enclosed loop is the work out minus the work in, the net work per cycle.",
          "remediationTip": "Remember units: Pa times cubic metres equals joules, so the loop must be work."
        },
        {
          "id": "q-phy-thermodynamics-gas-laws-engines-5",
          "quizId": "quiz-phy-thermodynamics-gas-laws-engines",
          "questionText": "Why can no heat engine reach 100 percent efficiency even in principle?",
          "optionA": "Because piston rings always leak.",
          "optionB": "Because part of the heat from each burn must be rejected to colder surroundings with the exhaust and cooling.",
          "optionC": "Because fuel never burns completely.",
          "optionD": "Because friction in the bearings converts work to sound.",
          "correctOption": "B",
          "subConcept": "Efficiency limits",
          "explanation": "Leakage, incomplete burning and friction are real losses, but even removing all of them the engine must dump heat to a cold sink to complete its cycle; that is the rule the first-law share-out protects.",
          "remediationTip": "Answer efficiency questions with the thermodynamic reason, not only the mechanical wear list."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t2-standing-waves-resonance-acoustics",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 10,
    "title": "Standing Waves, Resonance and Musical Acoustics",
    "description": "Nodes and antinodes on a stretched string, the harmonic series found on a sonometer, fundamental and overtones of closed and open pipes, resonance boxes and tuning-fork experiments, beats as a tuning tool, pitch and loudness of Ghanaian drums, and the range of human hearing.",
    "isFreeTrial": false,
    "keyNotes": "• A standing wave comes from two identical waves travelling in opposite directions and superposing; the points that never move are nodes and the points of maximum vibration are antinodes, and energy is stored in each loop instead of being carried along the string.\n• A string fixed at both ends must contain a whole number of half wavelengths, so L = n lambda/2, lambda = 2L/n, and the permitted frequencies are f, 2f, 3f; the lowest is the fundamental or first harmonic.\n• The fundamental of a stretched string is f = (1/2L) x square root of (T/mu): a shorter, lighter and tighter string always sounds higher, which is every tuning rule a guitarist or an atumpan player follows.\n• Sonometer numbers that must be checkable: a wire of mass per length 2.0 x 10^-3 kg/m under 80 N gives v = square root of (80/0.002) = 200 m/s, and a 50 cm speaking length gives f = 200/(2 x 0.50) = 200 Hz, with harmonics at 400 Hz and 600 Hz.\n• Doubling the tension raises the frequency only by the factor square root of 2, so 200 Hz becomes about 283 Hz; to raise an octave the tension must be multiplied by four.\n• A closed pipe has a node at the closed end and an antinode at the open end, so L = lambda/4 and only odd harmonics exist: with L = 0.85 m and sound at 340 m/s the fundamental is 100 Hz and the first overtone 300 Hz.\n• An open pipe has antinodes at both ends, so L = lambda/2 and the same 0.85 m length sounds 200 Hz with harmonics at 400 Hz and 600 Hz, exactly one octave above the closed pipe.\n• Resonance is the large response of a body driven at its natural frequency; the hollow box under a sonometer wire and the body of a fontomfrom drum exist to couple a small-area vibrator to a large volume of air.\n• Two forks of 256 Hz and 260 Hz sounded together pulse 4 times per second, because beat frequency equals the difference; tuning is complete when the beats slow down and stop.\n• Pitch is the ear's response to frequency and is counted in hertz, while loudness is the response to amplitude and intensity and is counted in decibels; striking a drum harder changes the loudness, tightening its skin changes the pitch.\n• Normal hearing spans roughly 20 Hz to 20 000 Hz with best sensitivity near 4000 Hz, and the upper limit falls with age and with loud noise, so prolonged drumming or a market loudspeaker can cause permanent loss.\n• Paper 3 expects the sonometer and resonance-tube practicals: move the bridges until the paper rider at the midpoint flies off, keep the tension constant, add an end correction near 0.3 times the tube diameter, and tabulate length against 1/frequency so that the slope gives lambda relationships.",
    "detailedNotes": {
      "overview": "A standing wave is not a wave that travels but a pattern that stays in place, produced when two identical waves moving in opposite directions superpose. From that one idea comes the whole of musical acoustics examined at WASSCE standard: the harmonic series of a stretched string tested on a sonometer, the fundamental and overtones of closed and open pipes, the resonance box that makes a sound loud enough to hear, tuning by beats, and the careful separation of pitch from loudness. The arithmetic is small and completely checkable because it uses only the wave equation v = f lambda together with lambda = 2L for a string, lambda = 4L for a closed pipe and lambda = 2L for an open pipe, so a student who practises these three length rules can take full objective marks in Paper 1 and most of the structured marks in Paper 2.",
      "introduction": "Work first on the sonometer, because the standing wave becomes real when you can see the paper rider jump. Stretch one steel wire over the bridges, hang a steady tension from the pan, and press a 200 Hz tuning fork against the box until the wire answers; slide the bridges until the response is strongest and the rider placed at the midpoint is thrown off, then measure that vibrating length with a meter rule. Handle the masses over a soft pad so that a slipping pan does not fall on a foot, and keep the wire free of kinks. Move then to the air column: hold the same fork over a resonance tube partly filled with water and lower the water until the sound swells, which marks a length near one quarter of the wavelength, then find the second swell half a wavelength further. Record the lengths for several forks, plot length against 1/frequency, and the slope should lead to a speed near 340 m/s for sound in the room.",
      "realWorldContext": "Ghanaian instruments are textbook examples. An atumpan or talking drum is tuned by hammering the rawhide shell that tightens the laces and so raises the skin tension and the pitch, and the player bends the note by pressing the shell under one arm, the same physics as shortening the speaking length of a sonometer wire. Fontomfrom drums sit over hollow bodies that act as resonance boxes, and the bamboo horns and flutes used at durbars are open pipes whose length fixes the note. In the GES school laboratory the standard kit is a sonometer box, tuning forks from 128 Hz to 512 Hz, a resonance tube with a water reservoir, a rubber hammer and meter rules; the room itself matters, since a tiled hall with hard walls returns long echoes that blur beats, while a curtain or a mat screen soaks up the high frequencies. Ask students to measure how far from a loudspeaker at a church programme they can still follow the beat pattern.",
      "objectives": [
        "Describe the formation of a standing wave and identify its nodes and antinodes on a vibrating string and in an air column",
        "Use f = (1/2L) x square root of (T/mu) to calculate the fundamental and harmonic frequencies of a stretched string and the length that gives a required note",
        "Calculate the fundamental and overtone frequencies of closed and open pipes of given length and explain why a closed pipe gives only odd harmonics",
        "Explain resonance and resonance boxes, use beats to tune an instrument, and distinguish pitch from loudness with the range of human hearing"
      ],
      "sections": [
        {
          "title": "Nodes, Antinodes and the Harmonics of a Stretched String",
          "content": "Two waves of equal frequency and amplitude travelling in opposite directions along the same string superpose to give a pattern that no longer moves: nodes where the two displacements always cancel and antinodes halfway between where they always add. Energy is not carried along the string but exchanged between kinetic and elastic form inside each loop, which is why the wave is called standing or stationary. Because both ends are fixed, the string must contain a whole number of half wavelengths, so L = n lambda/2 and the allowed frequencies are f = n v/2L. The case n = 1 is the fundamental and the rest are harmonics at exact multiples of it, which is what makes a string note sound musical instead of noisy. The speed on the wire is fixed by the tension and the mass per unit length through v = square root of (T/mu), so the complete result is f = (1/2L) x square root of (T/mu): halving the vibrating length doubles the frequency, quadrupling the tension doubles it, and a heavier wire lowers the pitch.",
          "bulletPoints": [
            "Nodes are points of no motion, antinodes the points of largest amplitude, and successive nodes are lambda/2 apart.",
            "For a string fixed at both ends L = n lambda/2, so the fundamental has lambda = 2L.",
            "The harmonics are whole multiples of the fundamental, each one adding a further loop.",
            "Wave speed is v = square root of (T/mu), so tension raises pitch and mass per length lowers it.",
            "A paper rider at the midpoint flies off at resonance, marking an antinode and a complete loop."
          ],
          "keyTakeaway": "Count loops rather than waves: n loops on a string of length L means L = n lambda/2, and the frequency then follows from v = f lambda.",
          "realWorldExample": "The guitar strings in a school band and the long wire strings of a kpanlogo bass are tuned by the same rule: the player turns a peg to raise the tension and presses the string against a fret to shorten the vibrating length, jumping to a higher note or a harmonic."
        },
        {
          "title": "Closed and Open Pipes and the Notes They Sound",
          "content": "An air column obeys the same loop logic with boundaries of a different kind. At an open end the air is free to move, so that end must be an antinode; at a closed end the air cannot move along the tube, so it is a node. A pipe closed at one end therefore first resonates when its length equals a quarter wavelength, L = lambda/4, and only odd harmonics fit inside it: the frequencies are v/4L, 3v/4L and 5v/4L. A pipe open at both ends requires antinodes at each end, so L = lambda/2, every harmonic is present, and the fundamental v/2L is an octave above the fundamental of a closed pipe of the same length. That doubling is why equal lengths of bamboo give notes an octave apart depending on whether the far end is stopped. In the laboratory a resonance tube gives its first loud swell near lambda/4 and a second near three quarters, and a correction of roughly 0.3 times the tube diameter is added to each measured length before the speed is calculated, because the antinode sits a little outside the mouth.",
          "bulletPoints": [
            "Closed pipe: node at the closed end, antinode at the open end, fundamental wavelength 4L and only odd harmonics.",
            "Open pipe: antinodes at both ends, fundamental wavelength 2L and all harmonics present.",
            "With sound at 340 m/s an 85 cm closed pipe sounds 100 Hz while the same length open sounds 200 Hz.",
            "Add an end correction near 0.3 diameter to the air column length before using it.",
            "Blowing harder across a tube can jump the column to the next odd harmonic, changing pitch rather than only loudness."
          ],
          "keyTakeaway": "Locate the node and the antinode in a sketch first; the wavelength follows from the picture and the frequency is then simply v divided by lambda.",
          "realWorldExample": "Bamboo flutes sold around the Kejetia craft stalls and the horn bands at northern durbars are open pipes, and the note changes when a finger hole uncovers a shorter effective column, which is the wind version of sliding the bridges on a sonometer."
        },
        {
          "title": "Resonance, Beats, Pitch and Loudness",
          "content": "Every body that can vibrate has a natural frequency, and a repeated drive at exactly that frequency keeps adding energy until the amplitude becomes large; this is resonance. It is welcome in instruments, because a wire or a reed alone moves too little air to be heard, so the sonometer wire is stretched over a hollow box and a drum head drives the air inside the body. It is unwelcome in structures, since a bridge girder, a vehicle chassis or a roof truss driven at its natural frequency can shake itself loose. Two tones of nearly equal frequency sounded together produce beats, a regular swelling and fading whose rate equals the difference of the frequencies, and this is the practical tuning tool: an instrument is matched to a fork by adjusting it until the beats slow and stop. Pitch is the ear's response to frequency and is counted in hertz; loudness is the response to amplitude and intensity and is counted in decibels, so a drum struck harder is louder while a drum with a tighter skin is higher. Ordinary hearing covers about 20 Hz to 20 000 Hz, with the ear most sensitive between 2000 and 5000 Hz, and loud noise permanently removes part of that range.",
          "bulletPoints": [
            "Resonance occurs when the driving frequency equals the natural frequency of the driven body.",
            "A resonance box couples a small vibrating area to a large volume of air, so much more sound energy reaches the ear.",
            "Beat frequency is the difference of the two frequencies: 260 Hz with 256 Hz gives 4 beats per second.",
            "Pitch depends on frequency, loudness on amplitude and intensity, and the two must never be confused in an answer.",
            "The audible range is about 20 Hz to 20 000 Hz, and noise exposure shortens it permanently.",
            "Resonance in a body of water, a swing or a machine is the same physics that makes an instrument speak."
          ],
          "keyTakeaway": "Tune by reducing the beats to silence, and never describe a louder note as a higher one.",
          "realWorldExample": "A pair of atumpan drums at an Ashanti gathering is tuned by heating the rawhide shell, which shrinks the laces, raises the tension and lifts the pitch, and the two drums are matched by ear until the pulsation between their tones disappears."
        }
      ],
      "commonMistakes": [
        "Describing a standing wave as a wave that travels along the string and then stops; the pattern is stationary, the string merely vibrates in place, and no net energy moves from end to end.",
        "Using lambda = 2L for a pipe closed at one end, which doubles the wavelength and halves the frequency; a stopped pipe gives lambda = 4L in its fundamental, and the answer must be checked against the node at the closed end.",
        "Writing that a closed pipe gives the second, third and fourth harmonics, when only the odd harmonics exist; state clearly that the first overtone of a stopped pipe is three times the fundamental.",
        "Confusing beat frequency with either tone, and answering 258 Hz for forks of 256 Hz and 260 Hz instead of the difference, 4 beats per second.",
        "Equating loudness with pitch, or claiming that striking a drum harder raises its pitch, when extra force increases amplitude and therefore loudness while the frequency stays fixed."
      ],
      "wassceExamTips": [
        "Paper 1 asks for the ratio of harmonic frequencies and the effect of changing length, tension or mass per length; learn the three proportionalities f proportional to 1/L, f proportional to square root of T and f proportional to 1/square root of mu, and ratios fall out without any arithmetic.",
        "In Paper 2 always state whether a pipe is open or closed before writing a wavelength, then show the substitution in f = v/lambda; a correct number with no stated boundary condition loses the method mark.",
        "Quote the speed of sound in air as 330 to 340 m/s unless the question gives a value, and never use 3.0 x 10^8 m/s, which belongs to light and produces an absurd musical note.",
        "For Paper 3 alternative-practical on a sonometer, expect to tabulate vibrating length against the reciprocal of fork frequency, to keep the tension constant by the same slotted masses, and to state that the reading is taken when the paper rider at the midpoint just flies off and that the wire must be free of kinks and of stretch beyond the elastic limit.",
        "When asked to distinguish pitch from loudness, give the physical quantity behind each (frequency and amplitude or intensity), the unit (hertz and decibel) and one example of changing it, because the mark scheme pays all three separately."
      ],
      "summaryChecklist": [
        "Can I explain how two travelling waves make a standing wave and mark the nodes and antinodes on a diagram?",
        "Can I use f = (1/2L) x square root of (T/mu) to find the fundamental and harmonics of a string and the length for a required note?",
        "Can I find the fundamental and first overtone of a closed pipe and of an open pipe of the same length, and say why the harmonics differ?",
        "Can I calculate a beat frequency and describe how beats are used to tune an instrument to a tuning fork?",
        "Can I separate pitch from loudness and state the frequency range of normal human hearing with one cause of its loss?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-standing-waves-1",
        "title": "Harmonics of a Sonometer Wire",
        "problem": "A steel wire of mass per unit length 2.0 x 10^-3 kg/m is stretched over the bridges of a sonometer under a tension of 80 N, and the vibrating length between the bridges is 50 cm. Find the speed of waves on the wire, the fundamental frequency, and the frequencies of the second and third harmonics. State the vibrating length that would give a fundamental of 400 Hz at the same tension.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the wave-speed relation for a stretched string, v = square root of (T/mu), with T = 80 N and mu = 2.0 x 10^-3 kg/m.",
          "Step 2 (M1): Substitute and simplify the fraction first: v = square root of (80/0.002) = square root of 40000.",
          "Step 3 (A1): v = 200 m/s.",
          "Step 4 (M1): For a string fixed at both ends the fundamental has lambda = 2L = 2 x 0.50 m = 1.00 m, so f = v/lambda = 200/1.00.",
          "Step 5 (A1): f1 = 200 Hz, the frequency of the tuning fork that drives this length into resonance.",
          "Step 6 (M1): The harmonics of a string are whole multiples of the fundamental, f = n f1.",
          "Step 7 (A1): Second harmonic 400 Hz and third harmonic 600 Hz, from 2 x 200 and 3 x 200.",
          "Step 8 (M1): Since f is inversely proportional to L at constant tension and mu, doubling the frequency needs the length halved.",
          "Step 9 (A1): The new vibrating length is 25 cm, because at 400 Hz the wavelength on this wire is 200/400 = 0.50 m and the fundamental length is half of that."
        ],
        "keyTakeaway": "Find the speed from tension and mass per length once, then let the length set the wavelength; harmonics are exact multiples and a doubled pitch needs a halved length."
      },
      {
        "id": "ex-phy-standing-waves-2",
        "title": "Closed and Open Air Columns and Tuning by Beats",
        "problem": "Sound travels at 340 m/s in the laboratory. A vertical tube 85 cm long is closed at the bottom by water and sounded by a vibrating fork held at the open end. Find the wavelength and frequency of the fundamental note, and the frequency of its first overtone. Then find the fundamental of the same 85 cm length open at both ends, and the beat frequency heard when a 256 Hz fork and a 260 Hz fork are sounded together.",
        "stepByStepSolution": [
          "Step 1 (M1): A stopped pipe first resonates when its length is a quarter wavelength, so lambda = 4L = 4 x 0.85 m.",
          "Step 2 (A1): lambda = 3.4 m.",
          "Step 3 (M1): Apply the wave equation f = v/lambda = 340/3.4.",
          "Step 4 (A1): f = 100 Hz is the fundamental of the closed pipe.",
          "Step 5 (M1): Only odd harmonics fit a closed pipe, so the first overtone is the third harmonic, 3 x 100.",
          "Step 6 (A1): First overtone = 300 Hz.",
          "Step 7 (M1): For a pipe open at both ends, L = lambda/2, so lambda = 2L = 1.70 m and f = 340/1.70.",
          "Step 8 (A1): f = 200 Hz, one octave above the closed pipe of the same length.",
          "Step 9 (M1): The beat frequency equals the difference of the two fork frequencies, 260 - 256.",
          "Step 10 (A1): 4 beats per second, and the drum or string is in tune when the beats slow down and disappear."
        ],
        "keyTakeaway": "Three rules carry the whole numerical part of pipes: lambda = 4L for a stopped pipe, lambda = 2L for an open pipe, and beats equal the difference of frequencies."
      }
    ],
    "quiz": {
      "id": "quiz-phy-standing-waves",
      "topicId": "shs2-phy-t2-standing-waves-resonance-acoustics",
      "title": "Standing Waves and Resonance Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-standing-waves-1",
          "quizId": "quiz-phy-standing-waves",
          "questionText": "Two waves of the same frequency and amplitude travel in opposite directions along the same stretched string. The result is",
          "optionA": "a progressive wave moving at twice the original speed",
          "optionB": "a standing wave with fixed nodes and swelling antinodes",
          "optionC": "a series of beats heard along the string",
          "optionD": "complete cancellation, so the string appears still",
          "correctOption": "B",
          "subConcept": "Formation of standing waves",
          "explanation": "Opposite-travelling waves of matched frequency and amplitude superpose into a stationary pattern: displacement cancels permanently at nodes and doubles at antinodes. Option D would need two identical waves in the same direction with opposite phase, which is not the situation described.",
          "remediationTip": "Sketch the two travelling waves at one instant and again a quarter period later, then add the displacements point by point to see the loops appear."
        },
        {
          "id": "q-phy-standing-waves-2",
          "quizId": "quiz-phy-standing-waves",
          "questionText": "A string 0.50 m long, fixed at both ends, vibrates in its fundamental mode. The wavelength of the waves on the string is",
          "optionA": "0.25 m",
          "optionB": "0.50 m",
          "optionC": "1.00 m",
          "optionD": "2.00 m",
          "correctOption": "C",
          "subConcept": "Fundamental wavelength on a string",
          "explanation": "The fundamental is one loop, so the length equals half a wavelength: L = lambda/2 and lambda = 2L = 1.00 m. Choosing 0.50 m treats the loop as a full wave, which is the commonest slip in this question.",
          "remediationTip": "Draw one loop between two walls, mark the two nodes at the ends, and write L = lambda/2 beside the picture before any calculation."
        },
        {
          "id": "q-phy-standing-waves-3",
          "quizId": "quiz-phy-standing-waves",
          "questionText": "The fundamental frequency of a closed pipe is f. Its first overtone is",
          "optionA": "3f",
          "optionB": "2f",
          "optionC": "1.5f",
          "optionD": "4f",
          "correctOption": "A",
          "subConcept": "Harmonics of a stopped pipe",
          "explanation": "A pipe closed at one end supports only odd harmonics, so after the fundamental comes the third at 3f; the even harmonic 2f belongs to an open pipe.",
          "remediationTip": "List the harmonics for each pipe and memorise them as a pair: closed 1, 3, 5 and open 1, 2, 3, 4."
        },
        {
          "id": "q-phy-standing-waves-4",
          "quizId": "quiz-phy-standing-waves",
          "questionText": "Which change raises the pitch of a sonometer wire the most?",
          "optionA": "Lengthening the vibrating portion of the wire",
          "optionB": "Replacing the wire with one of greater mass per unit length",
          "optionC": "Reducing the tension in the wire",
          "optionD": "Shortening the vibrating portion to half its length",
          "correctOption": "D",
          "subConcept": "Factors affecting string frequency",
          "explanation": "Frequency is inversely proportional to length, so halving the length doubles the pitch. Options A, B and C all lower the frequency, since f falls with heavier wire and with slack.",
          "remediationTip": "Rewrite f = (1/2L) x square root of (T/mu) as three separate proportionalities and test each option against them one at a time."
        },
        {
          "id": "q-phy-standing-waves-5",
          "quizId": "quiz-phy-standing-waves",
          "questionText": "Tuning forks of 256 Hz and 260 Hz are sounded together. What is heard?",
          "optionA": "516 beats in one second",
          "optionB": "A steady tone of 258 Hz with no pulsation",
          "optionC": "Silence, because the two waves cancel",
          "optionD": "A pulsation of 4 beats in one second",
          "correctOption": "D",
          "subConcept": "Beats and tuning",
          "explanation": "The beat frequency is the difference, 260 - 256 = 4 per second, so the loudness swells and fades four times each second at an average pitch near 258 Hz. Summing the frequencies gives the meaningless 516 in option A.",
          "remediationTip": "Always subtract for beats and add only to find the average pitch, and say which of the two you are reporting."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t3-equations-of-motion-free-fall-projectiles",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 5,
    "title": "Equations of Motion, Free Fall and Projectiles",
    "description": "The four equations of uniformly accelerated motion with g taken as 10 m per s squared, velocity-time graph work for acceleration and distance, vertical throw and free fall, horizontal projection with time of flight and range, and the braking distance and safety of a trotro or okada.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The four equations apply only when acceleration is constant: v = u + at, s = ut + one half a t squared, v squared = u squared + 2as, and s = one half (u + v) t; choose the one that leaves out the quantity you do not know.\n• Take g = 10 m per s squared unless a question says 9.8; a freely falling body gains 10 m per s of speed every second and falls 5 t squared metres from rest.\n• Fix a sign convention at the top of every solution and keep to it, for example upward positive, so a downward acceleration of 10 m per s squared is entered as a = -10 and the answer tells you the direction.\n• Speeds given in km per h must be converted before any substitution: divide by 3.6, so 72 km per h = 20 m per s and 54 km per h = 15 m per s.\n• On a velocity-time graph the gradient is the acceleration and the area under the graph is the distance travelled; a straight rising line is uniform acceleration and a straight falling line is uniform deceleration.\n• A trotro braking from 20 m per s to rest over 40 m gives a = (0 - 400) / (2 x 40) = -5 m per s squared and takes t = 20 / 5 = 4 s, and the same vehicle at 15 m per s needs 15 x 15 / 10 = 22.5 m to stop.\n• Stopping distance is thinking distance plus braking distance; at 15 m per s a driver with 0.6 s reaction covers 9 m before touching the pedal, so the total is 9 + 22.5 = 31.5 m.\n• Braking distance grows with the square of the speed, so doubling the speed multiplies the skid distance by four, which is the physics behind every speed limit near a school.\n• A body dropped from 80 m falls for t = square root of (2 x 80 / 10) = 4 s and lands at v = 10 x 4 = 40 m per s, whatever its mass, because in free fall all bodies accelerate at g.\n• A ball thrown vertically upward at 25 m per s takes 2.5 s to reach the top, rises to 25 squared / 20 = 31.25 m, and returns to the thrower after 5 s with the same speed it left with.\n• At the highest point of a vertical throw the velocity is zero but the acceleration is still 10 m per s squared downward, so the body is not in equilibrium for even one instant.\n• In horizontal projection the two components are independent: the horizontal motion stays uniform at the launch speed while the vertical motion is free fall from rest, so both take the same time to reach the ground as a dropped stone.\n• A stone projected horizontally at 15 m per s from an 80 m high cliff is in the air 4 s and lands 15 x 4 = 60 m from the foot of the cliff; its vertical speed then is 40 m per s and its impact speed is square root of (15 squared + 40 squared) = 42.7 m per s.\n• The range of a horizontal projection depends on the launch speed and on the height only, through t = square root of (2h / g); a heavier stone launched at the same speed from the same height lands on the same mark.\n• Safety consequences follow directly from the equations: wet tyres lower the friction that provides the deceleration, a load shifts the braking, and an okada rider without a helmet takes the impact of 15 m per s on the head rather than on a crush zone.",
    "detailedNotes": {
      "overview": "Uniformly accelerated motion is the biggest single scorer in the WAEC mechanics section, and this lesson builds it in one connected chain. You will state the four equations, choose between them by spotting the unknown, and hold a sign convention through a whole solution. You will then read velocity-time graphs for gradient and area, use them for the stopping distance of a trotro, and treat vertical throw and free fall as the same acceleration applied upward or downward. The last part is projectiles: horizontal motion and vertical fall running independently at the same time, giving a time of flight from the height alone and a range from speed multiplied by that time. Every numerical example here is worked with g = 10 m per s squared.",
      "introduction": "Solve at least one problem from each of the four families before you read any further: a car speeding up, a car braking, a stone dropped, a stone thrown sideways. On each sheet write the given quantities with units, the unknown, the equation that excludes the quantity you do not have, then the substitution, then the answer with its unit. Keep a list of the quantities you refused to convert, because almost every mark lost in this topic is lost on km per h, on minutes, or on a missing minus sign for a deceleration.",
      "realWorldContext": "A trotro climbing the Aburi road at 20 m per s, which is 72 km per h, needs about 40 m of dry road and four seconds to stop when a log appears, and the driver spends part of that distance simply reacting. On the Kasoa interchange, where traffic slows and restarts constantly, the same vehicle at 15 m per s still needs 22.5 m of braking plus roughly 9 m travelled during the half second of reaction, so a stopping distance of about 31.5 m is the honest number to teach a learner rider. Okada riders in Tamale and Ho feel the square-law of braking distance every rainy afternoon, since wet tar gives less friction, so the deceleration falls and the same speed carries the machine further. Vertical throw appears in the school compound every break time with a thrown ball, and free fall appears every time a masonry block is dropped from a scaffold at a building site, which is why the site rules require the ground below to be cleared.",
      "objectives": [
        "State the four equations of uniformly accelerated motion and select the appropriate one when a quantity is unknown",
        "Convert speeds in km per h to m per s and use a consistent sign convention with g taken as 10 m per s squared",
        "Find acceleration and displacement from the gradient and area of a velocity-time graph",
        "Analyse a vertical throw for time to the top, maximum height and total time of flight",
        "Calculate the time of flight and range of a horizontal projection and explain the independence of components"
      ],
      "sections": [
        {
          "title": "The Four Equations and How to Choose One",
          "content": "These equations apply only when the acceleration is constant, so the first duty in any question is to confirm that the motion is uniformly accelerated, either from the wording or from a straight line on a graph. The set is v = u + at, s = ut + one half a t squared, v squared = u squared + 2as, and s = one half (u + v) t. Each one omits exactly one of the five quantities u, v, a, s and t, and the correct method is to list what is given, name what is required, then pick the equation that does not contain the quantity you neither have nor need. For example, a trotro slows from 20 m per s to rest over 40 m and the question asks for the deceleration: time is absent, so v squared = u squared + 2as is the equation, giving 0 = 400 + 2 x a x 40, so a = -400 / 80 = -5 m per s squared. The negative sign is the answer telling you the acceleration opposes the motion, and the correct statement is a deceleration of 5 m per s squared. Take g = 10 m per s squared unless the paper says otherwise, and if a question gives 9.8 use 9.8, because a marker can see which value the paper intended. Convert first, always: divide km per h by 3.6, so 54 km per h becomes 15 m per s and 72 km per h becomes 20 m per s.",
          "bulletPoints": [
            "v = u + at omits s; s = ut + one half a t squared omits v; v squared = u squared + 2as omits t; s = one half (u + v) t omits a.",
            "List given, required and missing, then pick the equation that leaves the missing quantity out.",
            "g = 10 m per s squared is the default; use 9.8 only when the paper states it.",
            "km per h to m per s: divide by 3.6; a negative acceleration means the body is slowing in the chosen positive direction.",
            "Check every answer against the graph: a stopping car cannot end with a negative distance."
          ],
          "keyTakeaway": "The equation is chosen by the quantity you do not have, and the sign of the acceleration is decided by the convention you declared before substituting.",
          "realWorldExample": "A driver leaving Accra for Kumasi who reads 90 km per h on the speedometer is travelling at 25 m per s, and that conversion, not the reading, is what decides whether the vehicle can stop in the 45 m of clear road ahead."
        },
        {
          "title": "Velocity-Time Graphs, Gradient and Area",
          "content": "A velocity-time graph carries the whole story of a straight-line motion, and WAEC asks for it in both directions, first to read numbers from a plot and then to sketch a plot from a description. The gradient of the line is the acceleration, so a line rising from 4 m per s to 19 m per s in five seconds has a gradient of (19 - 4) / 5 = 3 m per s squared, and a line falling from 20 m per s to zero in four seconds has a gradient of -5 m per s squared. The area under the line is the displacement, and for a uniform acceleration this area is a trapezium, which is exactly where s = one half (u + v) t comes from: the trotro braking from 20 m per s to rest in 4 s covers one half x (20 + 0) x 4 = 40 m, the same distance found from the equation. Split a journey of accelerate, steady and brake into three straight segments, find the area of each and add them for the total distance, then add the times for the average speed, which is total distance over total time and never a mean of the three speeds. A common graph question gives a car that starts from rest, accelerates at 3 m per s squared for 5 s, runs at the speed it has reached for a further 10 s and then brakes to rest in 5 s: the speed after the first stage is 15 m per s, so the three areas are 37.5 m, 150 m and 37.5 m, a total of 225 m in 20 s and an average speed of 225 / 20 = 11.25 m per s.",
          "bulletPoints": [
            "Gradient = acceleration; a horizontal segment means zero acceleration and uniform velocity.",
            "Area under the graph = displacement; split compound shapes into triangles, rectangles and trapezia.",
            "Braking from 20 m per s to rest in 4 s gives area = one half x 20 x 4 = 40 m.",
            "Average speed = total distance divided by total time, not the mean of the listed speeds.",
            "The three-part journey above gives 37.5 m + 150 m + 37.5 m = 225 m over 20 s, so the average speed is 11.25 m per s."
          ],
          "keyTakeaway": "Read gradient for acceleration and area for distance, and the two check each other against the algebra.",
          "realWorldExample": "A final-year student plotting the motion of a trotro from a bus stop at Circle to a lorry station sees the flat top of the trapezoid while the driver holds a steady gear, and the falling edge when the conductor calls for braking."
        },
        {
          "title": "Free Fall and the Vertical Throw",
          "content": "Free fall is motion under gravity alone, with air resistance ignored, and its defining fact is that the acceleration is the same for every body, whether a stone or a masonry block, so a heavy and a light object released together from the same height reach the ground together. Taking downward as positive and g = 10 m per s squared, an object dropped from rest after 3 s has a velocity of v = 0 + 10 x 3 = 30 m per s and has fallen s = one half x 10 x 9 = 45 m. Reversing the problem, a body dropped from 80 m takes t = square root of (2 x 80 / 10) = 4 s and lands at 40 m per s, a speed that destroys an unhelmeted skull, which is why a building site clears the ground below a scaffold. A vertical throw is the same acceleration acting against the initial velocity: with upward positive, a ball launched at 25 m per s has a = -10, so the time to the top is found from 0 = 25 - 10t, giving t = 2.5 s, and the height follows from v squared = u squared + 2as as 0 = 625 - 20 s, so s = 31.25 m. The descent is the mirror image, so the total time of flight is 5 s and the ball returns to the thrower at 25 m per s downward. The single most misunderstood point in the topic is the top of the path: the velocity there is zero for an instant, yet the acceleration is still 10 m per s squared downward, because gravity never stops acting; if acceleration were also zero the ball would hang there forever.",
          "bulletPoints": [
            "In free fall every body accelerates at g, so mass never enters the time or the speed.",
            "Dropped from rest for 3 s: v = 30 m per s and s = 45 m.",
            "Fall from 80 m: t = 4 s and landing speed 40 m per s.",
            "Throw upward at 25 m per s: 2.5 s to the top, height 31.25 m, total flight 5 s, return speed 25 m per s.",
            "At the highest point velocity is zero but acceleration is still 10 m per s squared downward."
          ],
          "keyTakeaway": "Gravity gives one constant acceleration for all bodies, so write it with the sign your convention demands and let the algebra handle the direction.",
          "realWorldExample": "A mason at a building site in Kumasi drops a lump of mortar from a scaffold 5 m above the ground; it arrives in about 1 s at 10 m per s, and the site rule that nobody stands under loaded scaffolding exists because of that number."
        },
        {
          "title": "Horizontal Projection and the Independence of Components",
          "content": "A projectile is any body given an initial velocity and then left to move under gravity alone, and the governing idea is that its horizontal and vertical motions are independent of each other and happen in the same time. Neglecting air resistance there is no horizontal force, so the horizontal component of velocity is constant and the horizontal distance is simply speed times time; vertically the acceleration is g downward, so the vertical displacement is one half g t squared exactly as if the body had been dropped. That gives the standard recipe: find the time from the height with t = square root of (2h / g), then multiply by the horizontal launch speed to get the range. A stone projected horizontally at 15 m per s from an 80 m cliff therefore takes 4 s to fall, since 2 x 80 / 10 = 16 and its square root is 4, and lands 15 x 4 = 60 m from the foot of the cliff. At impact the vertical component is 10 x 4 = 40 m per s while the horizontal component is still 15 m per s, so the true speed is the Pythagorean sum, square root of (15 squared + 40 squared) = square root of 1825 = 42.7 m per s, and the direction makes an angle whose tangent is 40 / 15 with the horizontal. Two predictions from this model are worth demonstrating: a horizontally fired bullet and a bullet dropped from the same height reach the ground together, and doubling the launch speed doubles the range while leaving the time of flight untouched. If the projection is angled rather than horizontal, resolve first, u cos angle along the ground and u sin angle vertically, and treat the vertical part as a small vertical throw.",
          "bulletPoints": [
            "No horizontal force means constant horizontal velocity; gravity acts only on the vertical component.",
            "Time of flight from a horizontal projection comes from the height alone: t = square root of (2h / g).",
            "Range = launch speed x time, so 15 m per s for 4 s gives 60 m.",
            "Impact speed combines the components: square root of (15 squared + 40 squared) = 42.7 m per s.",
            "Mass cancels, so a heavy and a light stone thrown at the same speed from the same cliff land together."
          ],
          "keyTakeaway": "Solve the vertical drop for the time, then spend that time horizontally; that two-step answers every horizontal projection.",
          "realWorldExample": "A child at Boateng Pedu launching a pebble sideways off a bridge into the Volta finds the splash 20 m downstream rather than below, because the pebble keeps its horizontal speed all the way down while gravity only adds a vertical one."
        },
        {
          "title": "Braking Distance, Reaction Time and Road Safety",
          "content": "Road safety arguments in a WAEC paper are physics arguments, and the equations give them their force. Stopping distance is the sum of thinking distance, covered at the original speed during the reaction time, and braking distance, covered while the tyres slow the vehicle. At 15 m per s, which is 54 km per h, a driver with a reaction time of 0.6 s covers 15 x 0.6 = 9 m before the foot reaches the pedal. If the tyres can provide a deceleration of 5 m per s squared, as in the trotro example, the braking distance is v squared minus u squared over 2a, giving 225 / 10 = 22.5 m, so the total is 31.5 m of road, roughly seven bus lengths of a queue forming behind a lorry at a market. Because braking distance contains the square of the speed, a driver who doubles speed quadruples the distance: from 22.5 m at the modest speed above to 90 m at 30 m per s with the same deceleration, and the penalty is worst exactly where pedestrians are, near schools, stations and lorry parks. The deceleration itself is not a property of the vehicle alone but of the friction between tyre and road, so wet tar, worn treads, a heavily loaded trotro and a down-gradient all reduce it; the physics reason an overloaded vehicle cannot stop is that the maximum friction force is nearly fixed while the mass to be slowed is larger, so a = F / m falls. Correct answers therefore name both factors, speed and available friction, when a question asks why an accident happened on a rainy afternoon.",
          "bulletPoints": [
            "Stopping distance = thinking distance + braking distance; at 15 m per s the two are 9 m and 22.5 m.",
            "Thinking distance = speed x reaction time, so a tired or distracted driver with 1.2 s doubles it to 18 m.",
            "Braking distance grows with the square of speed: 22.5 m at 15 m per s, 90 m at 30 m per s for the same deceleration.",
            "Deceleration comes from friction, so wet road, worn tyres, overload and a downhill grade all lengthen the stop.",
            "Speed limits near schools are a direct application of the square-law of braking distance."
          ],
          "keyTakeaway": "The driver cannot shorten the physics, only the speed, because speed enters the braking distance squared and the reaction distance directly.",
          "realWorldExample": "A trotro driver at the Suame magu circle junction who claims he braked but could not avoid a crossing okada is describing 9 m of reaction plus 22.5 m of braking on a wet afternoon, which is why the passenger association now tells drivers to leave two clear car lengths per 10 km per h."
        }
      ],
      "commonMistakes": [
        "Substituting 72 straight into v = u + at when the speed is 72 km per h; the equation needs 20 m per s, and the whole answer is wrong by a factor of 3.6.",
        "Reporting the acceleration as 5 m per s squared for a braking vehicle after writing a = -5, then losing the direction mark; either state a deceleration of 5 m per s squared or keep the minus sign consistently.",
        "Claiming that at the highest point of a vertical throw the acceleration is zero because the velocity is zero; gravity still gives 10 m per s squared downward at that instant.",
        "Using the total time of flight when computing the maximum height of a vertical throw, or halving the height instead of the time; the ascent alone is 2.5 s for a 25 m per s throw.",
        "Saying a heavier stone falls faster, or that a horizontally projected stone stays in the air longer than a dropped one; both errors ignore that time comes from the vertical motion only.",
        "Writing s = 10 x 3 for a body falling 3 s instead of s = one half x 10 x 3 squared, which gives 45 m not 30 m, and leaving the answer without units."
      ],
      "wassceExamTips": [
        "Paper 1 short-answer motion questions are usually one-equation problems; identify the missing quantity first, and you will pick v squared = u squared + 2as instead of wasting a step.",
        "In Paper 2 always open the solution with the given values and units, then the formula, then substitution, then the answer with its unit; method marks are awarded on the formula and substitution lines even when the arithmetic fails.",
        "When the paper says take g = 10 m per s squared, write that line; an examiner checking a vertical throw looks for it before accepting 31.25 m.",
        "For graph questions state the principle you are using, gradient gives acceleration and area gives displacement, then show the triangle or the trapezium numerically, since the working of the area earns the mark.",
        "In the Paper 3 practical, a ticker-tape or trolley run gives marks for measuring five dots per interval, converting to seconds using the timer frequency, and quoting acceleration in m per s squared, not in dot spacing.",
        "A safety question earns more for a numerical reason than for an appeal: state that braking distance goes with the square of speed and give the 22.5 m against 90 m comparison."
      ],
      "summaryChecklist": [
        "Can I choose among the four equations by naming the quantity that is absent?",
        "Can I convert km per h to m per s and keep one sign convention through a full solution?",
        "Can I take both acceleration and displacement from a velocity-time graph of a three-stage journey?",
        "Can I find the time to the top, the maximum height and the total flight time of a vertical throw?",
        "Can I compute the time of flight, the range and the impact speed of a horizontal projection?"
      ]
    },
    "examples": [
      {
        "id": "ex-motion-1",
        "title": "A Trotro Braking to Rest",
        "problem": "A trotro travelling at 72 km per h sees a log fall across the road and brakes hard, coming to rest in 40 m. Taking the deceleration as uniform, find the speed in metres per second, the deceleration and the time taken to stop.",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the initial speed: u = 72 / 3.6 = 20 m per s, and note v = 0 and s = 40 m with t unknown.",
          "Step 2 (M1): Since time is neither given nor required, choose v squared = u squared + 2as.",
          "Step 3 (M1): Substitute: 0 squared = 20 squared + 2 x a x 40, so 0 = 400 + 80a.",
          "Step 4 (A1): a = -400 / 80 = -5 m per s squared, that is a uniform deceleration of 5 m per s squared.",
          "Step 5 (M1): For the time use v = u + at, so 0 = 20 + (-5) x t.",
          "Step 6 (A1): t = 20 / 5 = 4 s to come to rest.",
          "Step 7 (A1): Check with the area equation: s = one half (u + v) t = one half x 20 x 4 = 40 m, which agrees; final answers 20 m per s, deceleration 5 m per s squared, time 4 s."
        ],
        "keyTakeaway": "Pick the equation that omits the unknown quantity, then verify the distance with the area equation, because the two forms must agree."
      },
      {
        "id": "ex-motion-2",
        "title": "A Stone Projected Horizontally from a Cliff",
        "problem": "A stone is thrown horizontally at 15 m per s from the top of a vertical cliff 80 m above a beach. Taking g = 10 m per s squared and ignoring air resistance, find how long the stone is in the air, how far from the foot of the cliff it lands, and the magnitude of its velocity on impact.",
        "stepByStepSolution": [
          "Step 1 (M1): Separate the motion: horizontal velocity is constant at 15 m per s, while the vertical motion starts from rest with a = 10 m per s squared downward.",
          "Step 2 (M1): The time comes from the vertical drop, s = one half g t squared, so 80 = one half x 10 x t squared = 5 t squared.",
          "Step 3 (M1): Rearrange: t squared = 80 / 5 = 16.",
          "Step 4 (A1): t = square root of 16 = 4 s in the air.",
          "Step 5 (M1): Range = horizontal velocity x time = 15 x 4.",
          "Step 6 (A1): Range = 60 m from the foot of the cliff.",
          "Step 7 (A1): Vertical speed at impact = 10 x 4 = 40 m per s, so impact speed = square root of (15 squared + 40 squared) = square root of 1825 = 42.7 m per s; final answers 4 s, 60 m and 42.7 m per s."
        ],
        "keyTakeaway": "The height fixes the time, the time and the launch speed fix the range, and the two components combine by Pythagoras at impact."
      }
    ],
    "quiz": {
      "id": "quiz-phy-equations-motion-projectiles",
      "topicId": "shs2-phy-t3-equations-of-motion-free-fall-projectiles",
      "title": "Equations of Motion and Projectiles Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-motion-1",
          "quizId": "quiz-phy-equations-motion-projectiles",
          "questionText": "A bus travels at 54 km per h. Express this speed in metres per second.",
          "optionA": "5.4 m per s",
          "optionB": "18.0 m per s",
          "optionC": "15.0 m per s",
          "optionD": "54.0 m per s",
          "correctOption": "C",
          "subConcept": "Unit conversion of speed",
          "explanation": "54 km per h = 54 x 1000 m / 3600 s = 15 m per s, the same as dividing by 3.6. Option B comes from dividing by 3 instead of 3.6, and A and D leave the figure unconverted.",
          "remediationTip": "Remember the two standard conversions, 54 km per h = 15 m per s and 72 km per h = 20 m per s, and derive any other from them."
        },
        {
          "id": "q-phy-motion-2",
          "quizId": "quiz-phy-equations-motion-projectiles",
          "questionText": "A stone is dropped from rest from a bridge and takes 3 s to reach the water. Taking g = 10 m per s squared, how high is the bridge?",
          "optionA": "30 m",
          "optionB": "45 m",
          "optionC": "60 m",
          "optionD": "90 m",
          "correctOption": "B",
          "subConcept": "Free fall distance",
          "explanation": "s = ut + one half g t squared = 0 + one half x 10 x 9 = 45 m. Option A uses s = gt, which is a velocity not a distance, and D forgets the one half.",
          "remediationTip": "Recheck the one half in s = one half a t squared on three quick cases, t = 1, 2 and 3 s, and say the distances 5 m, 20 m, 45 m."
        },
        {
          "id": "q-phy-motion-3",
          "quizId": "quiz-phy-equations-motion-projectiles",
          "questionText": "A ball is thrown vertically upward at 25 m per s. Taking g = 10 m per s squared, how long does it take to reach the highest point?",
          "optionA": "1.25 s",
          "optionB": "5.0 s",
          "optionC": "0.4 s",
          "optionD": "2.5 s",
          "correctOption": "D",
          "subConcept": "Vertical throw",
          "explanation": "At the top v = 0, so from v = u + at with upward positive, 0 = 25 - 10t and t = 2.5 s. Option B is the whole time of flight, A is the time to half the launch speed, and C inverts the ratio.",
          "remediationTip": "Draw the velocity-time line from +25 to 0 crossing the axis at 2.5 s, then continuing to -25 m per s at 5 s."
        },
        {
          "id": "q-phy-motion-4",
          "quizId": "quiz-phy-equations-motion-projectiles",
          "questionText": "For a stone projected horizontally from a cliff, ignoring air resistance, which quantity remains constant throughout the flight?",
          "optionA": "The horizontal component of the velocity",
          "optionB": "The vertical component of the velocity",
          "optionC": "The magnitude of the resultant velocity",
          "optionD": "The distance of the stone from the point of projection",
          "correctOption": "A",
          "subConcept": "Independence of components",
          "explanation": "With no horizontal force acting, the horizontal velocity keeps its launch value for the whole flight. The vertical component grows by 10 m per s every second, so the resultant speed in option C rises steadily, and the distance from the projection point in option D increases as the stone moves away and falls.",
          "remediationTip": "Tabulate horizontal velocity, vertical velocity and resultant speed at 0, 1, 2 and 3 s for a 15 m per s launch and read the columns."
        },
        {
          "id": "q-phy-motion-5",
          "quizId": "quiz-phy-equations-motion-projectiles",
          "questionText": "A trotro starts from rest and accelerates uniformly at 3 m per s squared for 5 s. How far does it travel in that time?",
          "optionA": "7.5 m",
          "optionB": "37.5 m",
          "optionC": "15 m",
          "optionD": "75 m",
          "correctOption": "B",
          "subConcept": "Displacement from rest",
          "explanation": "s = ut + one half a t squared = 0 + one half x 3 x 25 = 37.5 m, and the area under the velocity-time triangle gives the same value since the final speed is 15 m per s. Option A omits the square on the time and C is the final velocity, not the distance.",
          "remediationTip": "For motion from rest compute the final velocity first, then take the average of 0 and that velocity multiplied by the time."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t3-simple-harmonic-motion-circular-motion",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 6,
    "title": "Simple Harmonic Motion, Pendulums and Circular Motion",
    "description": "Periodic time, frequency and amplitude, the defining condition of simple harmonic motion, the seconds pendulum and T = 2 pi sqrt(l/g), then centripetal acceleration and force, the banking of roads, the conical pendulum and the use of circular motion in machines and clocks.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• An oscillation is one complete to-and-fro movement; the periodic time T is the time for one oscillation in seconds, the frequency f = 1 / T is the number per second in hertz, and the amplitude is the greatest displacement from the rest position.\n• If a body travels 8 cm from one extreme to the other, its amplitude is 4 cm, not 8 cm, because amplitude is measured from the centre position to one extreme only.\n• One hundred and twenty complete oscillations in 60 s give T = 60 / 120 = 0.5 s and f = 120 / 60 = 2 Hz; take the total time over the number of cycles, never the reverse.\n• Simple harmonic motion is motion in which the acceleration is directed towards a fixed point and is proportional to the displacement from it, so a = -k x and the further the body is pulled, the harder it is pulled back.\n• On a velocity-time plot for a pendulum bob the speed is greatest at the centre and zero at each extreme, while the acceleration is greatest at the extremes and zero at the centre, so the two quantities are out of step.\n• For the simple pendulum, small swings of about ten degrees or less are approximately simple harmonic, and the period is T = 2 pi sqrt(l / g) with l the length to the centre of mass of the bob.\n• The period depends on length and on g only: it does not depend on the mass of the bob or on the amplitude, so a heavy bob and a light bob of the same length keep the same time.\n• Quadrupling the length doubles the period, because T is proportional to the square root of l: 1 m gives 1.99 s with g = 10, while 4 m gives 3.97 s, and 0.25 m gives 0.99 s.\n• The seconds pendulum, which takes one second for each half swing and so has a period of 2 s, must be 1.01 m long, since l = g T squared / (4 pi squared) = 10 x 4 / 39.48, and pi squared is 9.87, very close to g.\n• A pendulum experiment to measure g uses the slope of a plot of T squared against l, whose gradient is 4 pi squared / g, and it is timed over twenty oscillations to cut the reaction error.\n• In uniform circular motion the speed may be constant but the velocity is not, because the direction keeps changing, so a force and an acceleration must act towards the centre.\n• Centripetal acceleration is a = v squared / r and centripetal force is F = m v squared / r: a stone of mass 0.5 kg whirled at 4 m per s on a 2 m string needs 0.5 x 16 / 2 = 4 N of tension and accelerates at 8 m per s squared.\n• For a car the centripetal force is friction: a car of 800 kg rounding a 50 m curve at 10 m per s needs 800 x 100 / 50 = 1600 N, and if the tyres can supply only 2400 N the greatest safe speed is square root of (2400 x 50 / 800) = 12.2 m per s, about 44 km per h.\n• Banking a road supplies the force without relying on friction, and the design angle obeys tan theta = v squared / (r g), so 20 m per s on a 100 m curve needs tan theta = 400 / 1000 = 0.4, a banking angle of 21.8 degrees.\n• The conical pendulum of length 1 m inclined at 30 degrees to the vertical has a period T = 2 pi sqrt(l cos theta / g) = 1.85 s, and circular motion in machines appears in spin dryers, centrifugal clutches and the whirled bucket, which needs at least square root of (g r) at the top of the loop.",
    "detailedNotes": {
      "overview": "This lesson links two exam families that share one mathematical idea, a steady change of direction. First you define the language of oscillation, amplitude, periodic time, frequency and cycle, and compute them from a counted run of oscillations, then you state the defining condition of simple harmonic motion, an acceleration towards a fixed point proportional to the displacement. You will derive and use the pendulum relation T = 2 pi sqrt(l / g), explain the seconds pendulum, and design the laboratory plot of T squared against l that measures g. The second half is uniform circular motion: velocity changes even when speed does not, so a centripetal force m v squared / r is needed, which friction supplies on a flat curve, which banking supplies on a designed road angle, and which tension supplies in a conical pendulum.",
      "introduction": "Set up a pendulum on a retort stand with a small metal bob and measure the length to its centre. Time twenty complete oscillations, divide by twenty, and repeat for three lengths, tabulating l, time for twenty, T and T squared. Plot T squared against l, find the gradient and compute g from it, since the gradient equals 4 pi squared divided by g. Then whirl a rubber bung on a string through the glass tube with hanging slotted masses and feel how the stretch of the spring changes when you spin faster; that is centripetal force made visible. Keep every answer to two significant figures and never quote a period without its unit.",
      "realWorldContext": "A wall clock with a swinging pendulum in a household at Cape Coast, a metronome used by the school choir at Tamale, and the seismograph that records ground motion for the Geological Survey all rely on the fact that a pendulum of given length keeps a given time regardless of the bob mass. On the Kumasi-Tamale highway the long curves near the top of a rise are banked or signed for a reduced speed, and the physics behind the sign is tan theta = v squared / (r g), because at 20 m per s on a 100 m radius curve the design banking is about 21.8 degrees. Spin dryers in a laundry at Tema use circular motion to press water out of clothes, since the drum supplies the inward force but the water keeps going straight through the holes. Market traders whirl a bucket of water to show children why it does not fall at the top of the loop, and a drilling rig rod spinning in a borehole site must be balanced because an unbalanced rotating part supplies a force that hammers the bearings once per turn.",
      "objectives": [
        "Define amplitude, periodic time, frequency and cycle and calculate T and f from a counted number of oscillations",
        "State the two conditions that define simple harmonic motion and identify them in a pendulum bob",
        "Use T = 2 pi sqrt(l / g) to find the period or length of a pendulum and explain the seconds pendulum",
        "Plan the T squared against l plot that measures g and state why length and amplitude are controlled",
        "Calculate centripetal acceleration and force and apply them to a car on a flat curve, a banked road and a conical pendulum"
      ],
      "sections": [
        {
          "title": "The Language of Oscillation",
          "content": "A vibration or oscillation is one complete to-and-fro movement from an extreme position back to that same extreme through the other. The amplitude is the maximum displacement from the rest or mean position, so a bob that travels 8 cm from one end of its arc to the other has an amplitude of 4 cm, and misreading that distance as the amplitude is the most common error in the first question of this family. The periodic time T is the time for one complete oscillation, and the frequency f is the number of complete oscillations per second, so f = 1 / T and both are linked by that single relation: a body oscillating at 4 Hz has a period of 0.25 s. When a class counts 120 oscillations in 60 s, the period is total time divided by number of cycles, 60 / 120 = 0.5 s, and the frequency is 120 / 60 = 2 Hz; students who invert the division get 2 s and 0.5 Hz, which is caught at once by checking that a slow swing has a large period. Energy swaps between kinetic and potential forms during the swing: at the extremes the bob is momentarily at rest with maximum gravitational potential energy, and at the lowest point it is fastest with maximum kinetic energy. Simple harmonic motion is the special case in which the restoring acceleration points to a fixed point and is proportional to how far the body is from it, written a = -k x, where the minus sign records that the acceleration always opposes the displacement. A pendulum at small angles, a loaded spring, the vibration of a tuning fork and the column of air in a resonance tube all satisfy that condition, which is why the same equations keep reappearing.",
          "bulletPoints": [
            "Amplitude is measured from the mean position to one extreme, so half the extreme-to-extreme travel.",
            "T = total time / number of oscillations and f = 1 / T; 120 oscillations in 60 s give T = 0.5 s and f = 2 Hz.",
            "For f = 4 Hz the period is 0.25 s, and the angular rate is 2 pi f = 25.1 rad per s.",
            "Simple harmonic motion needs acceleration towards a fixed point proportional to displacement, a = -k x.",
            "Speed is maximum at the centre, acceleration maximum at the extremes and zero at the centre."
          ],
          "keyTakeaway": "Amplitude comes from the centre, period comes from dividing total time by cycles, and simple harmonic motion is recognised by the acceleration rule, not by the shape of the object.",
          "realWorldExample": "A choir master at Tamale sets a metronome to 120 beats in a minute, which is 2 Hz, and the pendulum weight must be slid until the marked period reads 0.5 s for the tune to hold its pace."
        },
        {
          "title": "The Simple Pendulum and the Seconds Pendulum",
          "content": "For a simple pendulum swinging through a small angle, the restoring component of the weight is proportional to the displacement along the arc, and the resulting period works out to T = 2 pi sqrt(l / g), where l is the distance from the point of suspension to the centre of mass of the bob. Three consequences follow directly and all three are examined. The period grows with the square root of the length, so doubling the length multiplies the period by 1.41, quadrupling it doubles the period, and a pendulum of 0.25 m takes 2 pi sqrt(0.25 / 10) = 0.99 s while one of 1 m takes 2 pi sqrt(1 / 10) = 1.99 s and one of 4 m takes 3.97 s. The period is independent of the bob mass, so a lead bob and an aluminium bob on the same string beat together. The period is also independent of amplitude for small swings, which is called isochronism and is what makes a pendulum usable as a clock; the independence fails at large angles, so a laboratory pendulum is released at about ten degrees or less. A pendulum with a period of 2 s, one second per swing, is the seconds pendulum, and its length follows from rearranging the formula: l = g T squared / (4 pi squared) = 10 x 4 / 39.48 = 1.01 m. The number is not a coincidence, because pi squared itself is 9.87, almost exactly g, so a metre-long pendulum is very nearly a seconds pendulum on the Earth. In the school laboratory the practical use runs the other way: measure T for several lengths, plot T squared against l, obtain a straight gradient equal to 4 pi squared / g, and so find g from the slope rather than from a single reading.",
          "bulletPoints": [
            "T = 2 pi sqrt(l / g), with l measured to the centre of the bob.",
            "Length controls the period through a square root: 0.25 m gives 0.99 s, 1 m gives 1.99 s, 4 m gives 3.97 s.",
            "Mass does not affect the period, and neither does amplitude while the swing stays small.",
            "Seconds pendulum: T = 2 s needs l = g T squared / (4 pi squared) = 1.01 m, and pi squared = 9.87 is close to g.",
            "The plot of T squared against l has gradient 4 pi squared / g, which is how g is measured in the GES laboratory."
          ],
          "keyTakeaway": "A pendulum is a length measuring device dressed as a clock, because its period depends on length and on g and on nothing else.",
          "realWorldExample": "A carpenter in Ho who hangs a plumb line on a long string to check a door frame knows instinctively that the wide swing and the narrow swing of the same bob take the same time to return, which is the isochronism of small oscillations."
        },
        {
          "title": "Centripetal Acceleration and Centripetal Force",
          "content": "Uniform circular motion troubles the intuition because the speed is constant while the velocity is not; velocity has direction, and a body travelling round a circle changes direction continuously, so it is accelerating all the time. The acceleration points to the centre of the circle, is perpendicular to the velocity at every instant, and has magnitude a = v squared / r. A stone whirled at 4 m per s on a 2 m string therefore accelerates at 16 / 2 = 8 m per s squared, and if its mass is 0.5 kg the force required is F = m v squared / r = 0.5 x 16 / 2 = 4 N, supplied by the tension in the string. The important discipline is to name the source of the force in each situation rather than to invent a new force: tension for a whirled stone, friction between tyre and road for a car on a flat bend, the normal reaction component for a banked road, gravity for the Moon in orbit, and the wall of the drum for clothes in a spin dryer. If the supply fails, the body does not fly outward along the radius but leaves along the tangent to its last position, which is why mud flies off a rotating tyre in a straight line and why a stone released from a string travels tangentially. The force grows with the square of the speed, so doubling the speed on the same curve requires four times the inward force, and that single relation explains most loss-of-control accidents on a bend.",
          "bulletPoints": [
            "Speed constant but velocity changing, so a centripetal acceleration v squared / r acts towards the centre.",
            "F = m v squared / r: 0.5 kg at 4 m per s on a 2 m string needs 4 N of tension.",
            "The inward force must be named from real sources: tension, friction, reaction, gravity, normal contact.",
            "When the force ceases the body moves off along the tangent, not radially outward.",
            "Doubling the speed quadruples the required force, because the speed enters squared."
          ],
          "keyTakeaway": "Circular motion needs an inward force, and the whole skill is naming which real force plays that role.",
          "realWorldExample": "A trotro driver entering the sharp bend at the top of the Aburi hills at 15 m per s instead of 8 m per s demands nearly four times the friction his worn tyres can give, so the rear slides outward and the vehicle follows the tangent it wanted all along."
        },
        {
          "title": "Banking of Roads, the Conical Pendulum and Vertical Circles",
          "content": "Engineering removes the dependence on friction by tilting the road. On a correctly banked curve the normal reaction from the surface has a horizontal component pointing to the centre, and resolving the two components of the reaction against the weight gives tan theta = v squared / (r g). At 20 m per s on a curve of radius 100 m with g = 10, that is 400 / 1000 = 0.4, so theta = 21.8 degrees; the same curve taken faster than the design speed needs extra friction inwards to stop the vehicle climbing, and taken slower it needs friction outwards to stop it sliding down, which is why a banked bend can still be dangerous on a wet afternoon. The conical pendulum is the same geometry with the string replacing the road: a bob whirling in a horizontal circle on a string of length l inclined at angle theta to the vertical has T = 2 pi sqrt(l cos theta / g), so a 1 m string at 30 degrees, whose cosine is 0.866, gives T = 2 pi sqrt(0.0866) = 1.85 s, a shorter period than the same length swinging as a flat pendulum. Vertical circles add gravity to the tally. At the top of the loop both the weight and the tension act downwards, so they together provide the centripetal force, and at the bottom they oppose, the tension having to carry the weight as well as the centripetal requirement, which is why a bucket whirled in a vertical circle feels heaviest at the bottom of the swing. The limiting condition at the top is that the speed must at least satisfy v squared / r equal to g, so v = square root of (g r): for a 1 m radius the bucket must be whirled at no less than square root of 10 = 3.16 m per s or the water falls out.",
          "bulletPoints": [
            "Banked curve design relation: tan theta = v squared / (r g).",
            "20 m per s on a 100 m radius needs tan theta = 0.4, a banking angle of 21.8 degrees.",
            "Above design speed the vehicle tends outward, below it inward, so friction still matters on a banked bend.",
            "Conical pendulum: T = 2 pi sqrt(l cos theta / g) = 1.85 s for 1 m at 30 degrees.",
            "Vertical circle minimum speed at the top is square root of (g r) = 3.16 m per s for r = 1 m; tension is greatest at the bottom."
          ],
          "keyTakeaway": "Banking turns the road reaction into the centripetal force, and the design angle is fixed by the speed the road is meant to carry.",
          "realWorldExample": "The curved flyover ramps on the Tema motorway are tilted so that a vehicle at the posted speed is pressed into the road rather than into the tyre friction, and a driver who takes the ramp much faster than that has to rely on the tyres again."
        },
        {
          "title": "Uses in Machines, Clocks and Measurement",
          "content": "Both families of motion are put to work. Pendulums regulate clocks and metronomes because their period is fixed by a length that can be set precisely, and a pendulum of about 1 m beats seconds, which is why long-case clocks are tall; a shorter pendulum beats faster, so regulation is done by sliding the bob up and down, changing l and therefore changing T. Seismographs use a heavy bob with a long period so that the ground moves under an inert mass that tends to stay put, and the relative motion is recorded. Surveying instruments and mine hoists at Tarkwa and Obuasi are checked for timing errors in the same way, by counting oscillations over a measured interval. Circular motion is even more common in machinery: a centrifugal clutch on a small generator or a water pump engages as speed rises because the shoes swing outward against the drum, spin dryers and washing machines press water out of fabric through drum holes because the drum, not the water, is forced into the circle, cream and oil separators in shea and dairy processing spin to drive the denser fraction outward, and concrete mixers rely on a balanced rotating drum whose bearings would be hammered by an unbalanced load. All these applications share one design warning, that the required force m v squared / r rises with mass and with the square of speed, so a machine that doubles its speed must carry four times the load on its bearings and its bolts. Measurement uses of oscillation include the determination of g with a pendulum, of frequency with a resonance tube, and of the mass of an object with an oscillating spring in conditions where a balance cannot be used.",
          "bulletPoints": [
            "Pendulum clocks and metronomes regulate time by length: about 1 m beats seconds, shorter beats faster.",
            "A seismograph uses a long-period mass that stays still while the ground moves beneath it.",
            "Centrifugal clutches, spin dryers, separators and balanced mixer drums all exploit m v squared / r.",
            "Doubling rotational speed quadruples bearing and bolt loads, which is the safety rule behind machine speed limits.",
            "Oscillation is also a measuring tool for g, for frequency and for mass by spring oscillation."
          ],
          "keyTakeaway": "A pendulum gives a repeatable time and a rotating machine gives a controllable force, and engineering uses the two facts exactly that way.",
          "realWorldExample": "A tailor in Kumasi running a small generator with a centrifugal clutch on the fan belt finds the fan begins to turn only as the engine speed rises, because the clutch shoes need the speed to generate the outward force that presses them against the drum."
        }
      ],
      "commonMistakes": [
        "Taking the amplitude as the whole travel from one extreme to the other, so reporting 8 cm instead of 4 cm for a bob that moves 8 cm across.",
        "Dividing the number of oscillations by the time to get the period, which returns 2 instead of 0.5 s for 120 oscillations in 60 s; the period is a time, so seconds must sit on top.",
        "Claiming the period of a pendulum changes with the mass of the bob, or with amplitude at a school swing, when T = 2 pi sqrt(l / g) contains neither quantity.",
        "Calling centripetal force a new kind of force instead of naming tension, friction, reaction or gravity as its source in the given situation.",
        "Saying a released whirling stone flies off radially outward; it leaves along the tangent to the circle at the point of release.",
        "Quoting banking from tan theta = r g / v squared, inverting the relation, and then obtaining an implausible 68 degrees instead of 21.8 degrees for the same data."
      ],
      "wassceExamTips": [
        "Paper 1 asks for period and frequency from a counted run; write the division explicitly, T = 60 s / 120 = 0.5 s, and the answer carries its own unit check.",
        "In Paper 2 a pendulum question expects the formula line T = 2 pi sqrt(l / g) before substitution, and squaring both sides first is the faster route when T squared is tabulated.",
        "When asked how the period changes if the length is quadrupled, answer with the square-root argument and the factor 2, since proportional reasoning earns the mark without any arithmetic.",
        "For circular motion, draw the free-body diagram with the inward force named and labelled m v squared / r; markers award the method mark for naming the source of the force.",
        "In the Paper 3 practical, time twenty oscillations not one, start the count at the centre where the bob is fastest, keep the swing below ten degrees, and state that the graph gradient gives 4 pi squared / g.",
        "A banking question gives the angle relation without a proof at SHS 2; quote tan theta = v squared / (r g), substitute in SI units, and finish with the angle in degrees to one decimal place."
      ],
      "summaryChecklist": [
        "Can I find amplitude, period and frequency from a description of a counted oscillation?",
        "Can I state the two conditions that make an oscillation simple harmonic?",
        "Can I compute the length of a seconds pendulum and explain why pi squared makes it near one metre?",
        "Can I calculate centripetal acceleration and force for a whirled mass and name the force supplying them?",
        "Can I find the banking angle of a curve and the minimum speed for a bucket whirled in a vertical circle?"
      ]
    },
    "examples": [
      {
        "id": "ex-shm-1",
        "title": "Finding the Length of a Seconds Pendulum",
        "problem": "A clockmaker wants a pendulum whose period is exactly 2 s, one second for each swing, so that the clock ticks seconds. Taking g = 10 m per s squared, find the required length, check the period of a 1.0 m pendulum, and state the period if the length is quadrupled.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the pendulum relation T = 2 pi sqrt(l / g) and square both sides to make l the subject: T squared = 4 pi squared l / g.",
          "Step 2 (M1): Rearrange: l = g T squared / (4 pi squared), and take pi squared = 9.87, so 4 pi squared = 39.48.",
          "Step 3 (M1): Substitute with T = 2 s: l = 10 x 4 / 39.48 = 40 / 39.48.",
          "Step 4 (A1): l = 1.013 m, about 1.0 m, which is why a seconds pendulum is roughly one metre long and pi squared is so close to g.",
          "Step 5 (M1): Check the reverse case with l = 1.0 m: T = 2 pi sqrt(1.0 / 10) = 2 x 3.142 x 0.3162.",
          "Step 6 (A1): T = 1.99 s for a 1 m pendulum, consistent with the length just found.",
          "Step 7 (A1): Quadrupling the length to 4.0 m gives T = 2 pi sqrt(4.0 / 10) = 3.97 s, double the period, because T varies with the square root of l; final answers 1.01 m, check 1.99 s, and 3.97 s when quadrupled."
        ],
        "keyTakeaway": "Square the formula before making the length the subject, and remember that a fourfold length change is only a doubling of the period."
      },
      {
        "id": "ex-shm-2",
        "title": "A Car Rounding an Unbanked Curve",
        "problem": "A car of mass 800 kg travels at 10 m per s around a flat curve of radius 50 m. Find the centripetal acceleration, the force needed to produce it, and the greatest speed at which the same curve can be taken if the tyres can supply a maximum friction force of 2400 N. Give that speed in km per h.",
        "stepByStepSolution": [
          "Step 1 (M1): State that on a flat curve the friction between tyres and road provides the centripetal force, and write a = v squared / r.",
          "Step 2 (M1): Substitute: a = 10 x 10 / 50 = 100 / 50.",
          "Step 3 (A1): a = 2 m per s squared, directed towards the centre of the curve.",
          "Step 4 (M1): Use F = m v squared / r = m a = 800 x 2.",
          "Step 5 (A1): F = 1600 N of friction is required at 10 m per s.",
          "Step 6 (M1): For the greatest speed put F = 2400 N and solve v squared = F r / m = 2400 x 50 / 800 = 150, so v = square root of 150.",
          "Step 7 (A1): v = 12.2 m per s, which is 12.2 x 3.6 = 44 km per h; final answers 2 m per s squared, 1600 N and 12.2 m per s, about 44 km per h."
        ],
        "keyTakeaway": "Friction is the centripetal force on a flat bend, so the safe speed is fixed by the maximum friction and grows only as the square root of it."
      }
    ],
    "quiz": {
      "id": "quiz-phy-shm-circular-motion",
      "topicId": "shs2-phy-t3-simple-harmonic-motion-circular-motion",
      "title": "Simple Harmonic and Circular Motion Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-shm-1",
          "quizId": "quiz-phy-shm-circular-motion",
          "questionText": "A pendulum bob moves 8 cm from one extreme position to the other. What is its amplitude?",
          "optionA": "8 cm",
          "optionB": "4 cm",
          "optionC": "2 cm",
          "optionD": "16 cm",
          "correctOption": "B",
          "subConcept": "Amplitude of oscillation",
          "explanation": "Amplitude is the displacement from the mean position to one extreme, which is half the extreme-to-extreme travel, so 8 / 2 = 4 cm. Option A is the common error of reading the whole swing as the amplitude.",
          "remediationTip": "Mark the centre of the swing on the bench with chalk, then measure from that mark to one end only."
        },
        {
          "id": "q-phy-shm-2",
          "quizId": "quiz-phy-shm-circular-motion",
          "questionText": "The length of a simple pendulum is quadrupled. By what factor does its period change?",
          "optionA": "It stays the same",
          "optionB": "It quadruples",
          "optionC": "It halves",
          "optionD": "It doubles",
          "correctOption": "D",
          "subConcept": "Period and length of a pendulum",
          "explanation": "T = 2 pi sqrt(l / g), so T varies with the square root of l, and the square root of 4 is 2, giving a doubled period; 1 m at 1.99 s becomes 4 m at 3.97 s. Amplitude and mass do not appear, so option A describes those changes instead.",
          "remediationTip": "Compute T for l = 0.25 m, 1 m and 4 m on one sheet and read the factor pattern off your own table."
        },
        {
          "id": "q-phy-shm-3",
          "quizId": "quiz-phy-shm-circular-motion",
          "questionText": "A stone of mass 0.5 kg is whirled in a horizontal circle of radius 2 m at 4 m per s. What tension must the string supply?",
          "optionA": "4 N",
          "optionB": "8 N",
          "optionC": "32 N",
          "optionD": "2 N",
          "correctOption": "A",
          "subConcept": "Centripetal force",
          "explanation": "F = m v squared / r = 0.5 x 16 / 2 = 4 N. Option B is the centripetal acceleration 8 m per s squared without the mass, and C forgets to divide by the radius.",
          "remediationTip": "Find v squared / r first, then multiply by m, and write the units of each stage on the sheet."
        },
        {
          "id": "q-phy-shm-4",
          "quizId": "quiz-phy-shm-circular-motion",
          "questionText": "Which pair of quantities does the period of a simple pendulum depend on?",
          "optionA": "The mass of the bob and the length of the string",
          "optionB": "The amplitude of swing at large angles and the mass of the bob",
          "optionC": "The length of the string and the value of g",
          "optionD": "The tension in the string and the speed of the bob at the centre",
          "correctOption": "C",
          "subConcept": "Factors controlling the period",
          "explanation": "T = 2 pi sqrt(l / g) contains only the length and the gravitational field strength, with mass absent and small-amplitude swings having no effect. Options A and B keep the mass, which the formula excludes.",
          "remediationTip": "Recite the formula as a sentence, period is two pi times the square root of length over g, then list the two letters it holds."
        },
        {
          "id": "q-phy-shm-5",
          "quizId": "quiz-phy-shm-circular-motion",
          "questionText": "A road is banked so that vehicles may round a curve of radius 100 m at 20 m per s without friction. What is the banking angle? Take g = 10 m per s squared.",
          "optionA": "0.4 degrees",
          "optionB": "26.6 degrees",
          "optionC": "68.2 degrees",
          "optionD": "21.8 degrees",
          "correctOption": "D",
          "subConcept": "Banking of roads",
          "explanation": "tan theta = v squared / (r g) = 400 / 1000 = 0.4, and the angle whose tangent is 0.4 is 21.8 degrees. Option A mistakes the tangent for the angle, and C comes from inverting the ratio to 2.5.",
          "remediationTip": "Sketch the reaction resolved into vertical and horizontal parts, then rebuild tan theta = v squared / (r g) from the picture each time."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t3-newtons-laws-connected-bodies-lifts",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Applying Newton's Laws: Connected Bodies, Lifts and Slopes",
    "description": "Tension in light inextensible strings, two masses working over a pulley, the floor reaction in a lift and apparent weight, friction on a rough inclined plane, braking distance of a trotro, load sharing on a scaffold plank and the discipline of the free-body diagram.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Draw one free-body diagram per body and put on it only the forces acting on that body: weight, tension, reaction and friction. Never draw a force of the motion or the force the body exerts on something else.\n• A light inextensible string over a smooth pulley carries the same tension throughout and forces both bodies to share one acceleration.\n• For masses of 3 kg and 2 kg over a pulley with g = 10 m/s per second: 30 - T = 3a and T - 20 = 2a, which add to 10 = 5a, giving a = 2 m/s per second and T = 24 N from either equation.\n• Tension is not automatically equal to a weight. A descending body satisfies mg - T = ma, so T is less than its weight, and an ascending body satisfies T - mg = ma, so T is greater.\n• A spring balance reads the reaction force pressing on it, the apparent weight, and not the mass: R - mg = ma.\n• For a 50 kg student in a lift with g = 10 m/s per second: rising with 2 m/s per second gives R = 600 N, descending with 2 m/s per second gives R = 400 N, and any steady speed gives R = 500 N, the true weight.\n• If a lift cable snaps the cabin falls with a = g, so R = 0 and the passenger is weightless relative to the lift.\n• On a plane tilted at angle theta the weight resolves to mg sin theta down the slope and mg cos theta into it, so the normal reaction is mg cos theta and limiting friction is mu mg cos theta.\n• A smooth plane at 30 degrees gives a = g sin 30 = 5 m/s per second; with mu = 0.2 the acceleration is 10 x (0.5 - 0.2 x 0.866) = about 3.3 m/s per second, and a body sliding steadily gives mu = tan 30 = 0.58.\n• Braking uses v squared = u squared + 2as with v = 0, so s = u squared/2a: a trotro stopping in 10 m at 10 m/s needs 40 m at 20 m/s, four times the distance for twice the speed.\n• A plank supported at both ends shares a load by moments: a 900 N load 1.0 m from the left end of a 3.0 m plank gives reactions of 600 N at the nearer support and 300 N at the farther one.\n• Convert first every time: km/h to m/s is divide by 3.6, grams to kilograms is divide by 1000, and both slips appear in almost every script marked.",
    "detailedNotes": {
      "overview": "Newton's three laws are worth very little on their own; the skill examined in Paper 2 is the translation of a physical situation into free-body diagrams and simultaneous equations. This topic covers the four standard situations that carry the marks: bodies connected by a light inextensible string over a pulley, a person standing in an accelerating lift, a body moving on a rough inclined plane, and a load shared between two supports. Each is treated with the same discipline: isolate the body, resolve the forces, write F = ma in the direction of motion, and solve. The lift case introduces apparent weight and explains why a scale measures force, the slope case introduces resolution together with friction, and the braking case links mechanics to the equations of motion already met, showing that stopping distance grows with the square of speed.",
      "introduction": "Begin with an Atwood machine on a smooth brass pulley, two slotted mass carriers of 3 kg and 2 kg, and a light string, releasing the system from rest above a soft pad so that the falling mass is stopped by foam and not by the floor. Time the descent with a stopwatch over a measured height, obtain the acceleration from s = ut + at squared/2, and compare it with the 2 m/s per second predicted from the equations; a ticker-tape timer and tape give the same check when friction is low. Then take a spring balance into a goods lift and record readings at start, steady travel and stop, which turns the abstract reaction force into something every student has felt. Finish with a wooden runway tilted to find the angle at which a block slides steadily, from which mu = tan theta follows without any stopwatch.",
      "realWorldContext": "Everyday Ghanaian mechanics supply the examples. A trotro on the Accra-Nsawam road whose brakes fade on a descent is a stopping-distance question, and the factor of four between 10 m/s and 20 m/s is why the National Road Safety Authority warns against speed near a market. Scaffold planks laid across two stacks of blocks at a building site in East Legon share a load exactly as the moments rule predicts, and foremen insist that workers walk close to a support rather than the middle. In a market compound a rope over a pulley lifting a bucket of water from a well is an Atwood machine, with a counterweight making the lift easier. The passenger lifts of offices along the Airport Residential stretch of Accra give the reaction-force lesson, and a loaded goods lift that jerks at start is felt in the legs as a change in apparent weight rather than a change in mass.",
      "objectives": [
        "Draw free-body diagrams for connected bodies and solve for the common acceleration and the tension using F = ma for each body",
        "Explain apparent weight and calculate the floor reaction in a lift accelerating upward, accelerating downward and moving at steady speed",
        "Resolve weight on a rough inclined plane, find the normal reaction and friction, and calculate the resulting acceleration or the coefficient of limiting friction",
        "Apply the equations of motion to braking distance and use moments to find how a load is shared between two supports"
      ],
      "sections": [
        {
          "title": "Tension and the Free-Body Diagram of Connected Bodies",
          "content": "A light inextensible string has the same tension throughout its length when it passes over a smooth pulley, and because it cannot stretch the connected bodies must share one acceleration. The method never changes: draw a separate free-body diagram for each body showing only the forces acting on it, choose the direction of motion as positive for each, write Newton's second law, and solve the simultaneous equations. Adding the two equations cancels the tension and gives the acceleration straight away, and the tension then follows by substituting back into either equation. The central idea that examiners look for is that the tension is not automatically equal to a weight. A descending body satisfies mg - T = ma, so the pull of the string is less than its weight, while an ascending body satisfies T - mg = ma, so the pull is greater than its weight. Only in equilibrium or at steady speed does the tension equal the weight it carries, and a script that writes T = mg for an accelerating system forfeits the method marks even when the final number happens to be right.",
          "bulletPoints": [
            "One free-body diagram per body, with only weight, tension, reaction and friction drawn on it.",
            "Same light string plus smooth pulley means one tension and one acceleration for the whole system.",
            "Descending body: mg - T = ma, so the tension is below its weight.",
            "Ascending body: T - mg = ma, so the tension is above its weight.",
            "Add the equations to eliminate T, then substitute back; check the tension from both bodies.",
            "For a mass on a table pulled by a string over the edge, the table mass gives T = ma only if friction is neglected."
          ],
          "keyTakeaway": "Write F = ma for each body separately, then add; the tension comes out of the algebra instead of a guess that it equals a weight.",
          "realWorldExample": "A rope over a pulley lifting a bucket from a well on a farm at Nsawam, with a counterweight basket on the other side, behaves exactly like this: the heavier side accelerates down and the rope pull on the rising bucket is measurably less than the weight of the bucket plus counterweight while the system is moving."
        },
        {
          "title": "Lifts, Apparent Weight and the Floor Reaction",
          "content": "A spring balance does not read weight directly; it reads the force pressing on its platform, which is the reaction R of the floor on the person standing there. Taking the upward direction as positive, Newton's second law gives R - mg = ma, so R = m(g + a) when the lift accelerates upward and the passenger feels heavier, and R = m(g - a) when the acceleration is downward and the passenger feels lighter. At any steady speed, in either direction, the acceleration is zero and R = mg, the true weight, which is the fact most often missed. If the cable breaks the cabin falls with a = g downward, so R becomes zero and everything inside is weightless relative to the lift, precisely the condition experienced in an orbiting spacecraft. For a 50 kg student with g = 10 m/s per second the readings are 600 N at the start of an upward journey accelerating at 2 m/s per second, 400 N during a downward acceleration of the same size, and 500 N on every steady run. Weighing yourself in a lift is therefore the classic demonstration that mass and weight are different quantities and that a scale measures a force in newtons.",
          "bulletPoints": [
            "A scale reads the reaction force, called the apparent weight, never the mass itself.",
            "R = m(g + a) for upward acceleration and R = m(g - a) for downward acceleration.",
            "At constant velocity a = 0, so R = mg whatever the direction of travel.",
            "Free fall gives a = g downward, R = 0 and the sensation of weightlessness.",
            "For 50 kg with g = 10 the three readings are 600 N, 400 N and 500 N.",
            "A lift accelerating downward faster than g would push the ceiling, and no real lift does that."
          ],
          "keyTakeaway": "Acceleration changes the reading; steady motion of any speed does not.",
          "realWorldExample": "The jerk felt in the knees when a goods lift at a Tema warehouse starts upward is the extra reaction force, and the light feeling as it stops at the top is the reduced reaction, both predicted by R = m(g plus or minus a) with the same mass throughout."
        },
        {
          "title": "Rough Inclined Planes, Braking Distance and Load Sharing",
          "content": "On a plane tilted at angle theta the weight resolves into two perpendicular components: mg sin theta acting down the slope and mg cos theta pressing into the surface, so the normal reaction equals mg cos theta and the limiting friction equals mu mg cos theta. Down the slope the equation of motion is mg sin theta minus mu mg cos theta equals ma, giving a = g(sin theta - mu cos theta). A smooth plane at 30 degrees gives 5 m/s per second with g = 10, the same plane with mu = 0.2 gives about 3.3 m/s per second, and a body that slides steadily has a = 0, which yields mu = tan theta, the angle of repose used to test sand and laterite on site. Braking on the level is a different case but the same law: a constant deceleration with v = 0 in v squared = u squared + 2as gives s = u squared/2a, so a trotro that stops in 10 m at 10 m/s needs 40 m at 20 m/s, four times the distance for twice the speed, because the kinetic energy to be destroyed goes as the square of the speed. Load sharing on a plank is settled by moments rather than F = ma, since the plank is in equilibrium: a 900 N load placed 1.0 m from the left support of a simply supported 3.0 m plank gives a right reaction of 900 x 1.0/3.0 = 300 N and a left reaction of 600 N.",
          "bulletPoints": [
            "Resolve weight as mg sin theta along the plane and mg cos theta perpendicular to it.",
            "Normal reaction on a slope is mg cos theta, so friction mu mg cos theta is smaller on a steep plane.",
            "Steady sliding gives mu = tan theta, the angle of repose, with no need for timing.",
            "Stopping distance s = u squared/2a, so doubling the speed quadruples the distance.",
            "A plank supported at both ends puts the larger reaction under the support nearer the load.",
            "Convert km/h to m/s by dividing by 3.6 before using either equation."
          ],
          "keyTakeaway": "Name the case before writing anything: slope problems resolve weight, braking problems use the equations of motion, and a loaded plank is an equilibrium of moments.",
          "realWorldExample": "A foreman at a building site in Adenta lays one scaffold plank across two stacks of blocks and warns labourers not to carry materials along the middle, because a load at one third of the span puts two thirds of its weight on the nearer stack and can split an ordinary block."
        }
      ],
      "commonMistakes": [
        "Writing the tension as equal to the weight of a suspended mass while that mass is accelerating, which contradicts Newton's second law and destroys both the method and the answer marks.",
        "Drawing a single diagram for the whole system with the internal string tension shown as an external force, or adding a force of the motion in the direction of travel; there is no such force on a free-body diagram.",
        "Mixing up the two components of weight on a slope, using mg cos theta down the plane and mg sin theta into it, which gives a friction force and an acceleration that are both wrong.",
        "Leaving the mass in grams or the speed in km/h, so that a 1500 kg trotro at 72 km/h is entered as 72 m/s; state the converted values 1500 kg and 20 m/s on the first line of the working.",
        "Answering a lift question with the weight mg when the question asks for the reading of the balance, and forgetting that a reading in newtons converted to a scale number in kilograms divides by g."
      ],
      "wassceExamTips": [
        "Paper 1 likes numerical pulley and lift questions with small masses, so memorise the two results a = (m1 - m2)g/(m1 + m2) and R = m(g plus or minus a) and use them only to check the working you also write.",
        "In Paper 2 the marks are split between the diagram and the algebra: sketch each body, label the forces with their symbols, then write the two equations in words before substituting numbers, and finish every answer with the unit and the direction of motion.",
        "Take g = 10 m/s per second unless the question states 9.8, and say at the top of the page which value you are using so that a later arithmetic slip still earns method marks.",
        "For friction questions read carefully whether the body is limiting, sliding down or being pulled up; the friction term changes sign but never becomes mg sin theta, and the normal reaction stays mg cos theta.",
        "Paper 3 alternative-practical on an inclined runway or a lift may ask you to obtain g or mu from a graph: plot velocity against time for the runner, take the slope as the acceleration, and remember that frictional resistance makes the measured acceleration smaller than g sin theta.",
        "When a stopping-distance question appears with a reaction time, add the distance travelled before the brakes bite, uniform motion at u times the reaction time, to the braking distance; examiners award a separate mark for that first stage."
      ],
      "summaryChecklist": [
        "Can I draw a correct free-body diagram for each body in a connected system and label only the forces acting on it?",
        "Can I set up and solve the two equations for a pulley system to find the common acceleration and the tension?",
        "Can I explain apparent weight and calculate the scale reading in a lift accelerating up, accelerating down and moving steadily?",
        "Can I resolve weight on a rough incline, find the normal reaction, the friction and the acceleration, and obtain mu from the angle of repose?",
        "Can I compute a braking distance from s = u squared/2a and find how a load on a plank is shared between two supports by moments?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-connected-bodies-1",
        "title": "Two Masses Over a Smooth Pulley",
        "problem": "A light inextensible string passes over a smooth fixed pulley and carries bodies of mass 3 kg and 2 kg at its ends. Taking g = 10 m/s per second, find the acceleration of the system and the tension in the string, and check the tension from both bodies.",
        "stepByStepSolution": [
          "Step 1 (M1): Draw the free-body diagram of each mass: the 3 kg body has its weight 3 x 10 = 30 N downward and the tension T upward, and the 2 kg body has 20 N downward and the same T upward because the string is light and the pulley smooth.",
          "Step 2 (M1): Write Newton's second law along the direction each body moves, taking the string as giving both the same acceleration a: 30 - T = 3a for the descending body and T - 20 = 2a for the ascending body.",
          "Step 3 (M1): Add the equations to eliminate the tension: 30 - 20 = 3a + 2a, so 10 = 5a.",
          "Step 4 (A1): a = 2 m/s per second, with the 3 kg body descending and the 2 kg body rising.",
          "Step 5 (M1): Substitute a = 2 into the equation for the ascending body: T = 20 + 2a = 20 + 2 x 2.",
          "Step 6 (A1): T = 24 N.",
          "Step 7 (M1): Check with the other equation: 30 - T = 3a gives T = 30 - 3 x 2.",
          "Step 8 (A1): T = 24 N again, so the working is consistent; the pull on the descending body is below its 30 N weight and the pull on the ascending body is above its 20 N weight, exactly as Newton's second law demands."
        ],
        "keyTakeaway": "Add the two equations to cancel the tension, find the acceleration, then substitute back into either body and check that both give one tension."
      },
      {
        "id": "ex-phy-connected-bodies-2",
        "title": "Apparent Weight of a Student in a Lift",
        "problem": "A student of mass 50 kg stands on a spring balance inside a lift. Taking g = 10 m/s per second, find the reading when the lift starts upward with an acceleration of 2 m/s per second, when it accelerates downward at 2 m/s per second, when it travels upward at a steady speed, and if the cable breaks. Explain the last result.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify what the balance reads: the reaction R of the floor on the student, not the weight, so draw R upward and mg = 50 x 10 = 500 N downward.",
          "Step 2 (M1): Take upward as positive and write Newton's second law: R - 500 = 50a.",
          "Step 3 (M1): For the start of the upward journey a = +2 m/s per second, so R = 500 + 50 x 2.",
          "Step 4 (A1): R = 600 N, which the balance shows as an apparent mass of about 60 kg.",
          "Step 5 (M1): For a downward acceleration of the same size a = -2 m/s per second, so R = 500 - 50 x 2.",
          "Step 6 (A1): R = 400 N, an apparent mass of about 40 kg.",
          "Step 7 (M1): At a steady speed a = 0, so R = 500 N, the true weight; the direction of travel does not matter, only the acceleration.",
          "Step 8 (M1): If the cable breaks the lift falls freely with a = g downward, so R = 500 - 50 x 10.",
          "Step 9 (A1): R = 0 N, so the student and the balance are weightless relative to the lift and the reading falls to zero, which is why a scale reading is called apparent weight."
        ],
        "keyTakeaway": "One equation, R = m(g plus or minus a), answers every lift question, and free fall makes the reading zero rather than negative."
      }
    ],
    "quiz": {
      "id": "quiz-phy-newton-connected",
      "topicId": "shs2-phy-t3-newtons-laws-connected-bodies-lifts",
      "title": "Connected Bodies, Lifts and Slopes Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-newton-connected-1",
          "quizId": "quiz-phy-newton-connected",
          "questionText": "A light inextensible string over a smooth pulley connects masses of 4 kg and 1 kg. Taking g = 10 m/s per second, the acceleration of the system is",
          "optionA": "1.0 m/s per second",
          "optionB": "2.4 m/s per second",
          "optionC": "6.0 m/s per second",
          "optionD": "30 m/s per second",
          "correctOption": "C",
          "subConcept": "Atwood machine acceleration",
          "explanation": "a = (m1 - m2)g/(m1 + m2) = (4 - 1) x 10/(4 + 1) = 30/5 = 6 m/s per second. The tension follows as T = 1 x (10 + 6) = 16 N, which is less than the 40 N weight of the descending mass. Option D divides the net force by only one mass.",
          "remediationTip": "Always divide the net unbalanced weight by the total mass that must be accelerated, and write the total mass on the diagram before substituting."
        },
        {
          "id": "q-phy-newton-connected-2",
          "quizId": "quiz-phy-newton-connected",
          "questionText": "A boy of mass 40 kg stands on a scale in a lift descending with an acceleration of 2.5 m/s per second. With g = 10 m/s per second the scale reads",
          "optionA": "300 N",
          "optionB": "400 N",
          "optionC": "500 N",
          "optionD": "0 N",
          "correctOption": "A",
          "subConcept": "Apparent weight in a lift",
          "explanation": "The acceleration is downward, so R = m(g - a) = 40 x (10 - 2.5) = 40 x 7.5 = 300 N. The reading 400 N would be his weight at rest or at steady speed, and zero only in free fall.",
          "remediationTip": "Decide the direction of the acceleration first, then choose the plus or the minus sign; descending and speeding up uses the minus."
        },
        {
          "id": "q-phy-newton-connected-3",
          "quizId": "quiz-phy-newton-connected",
          "questionText": "A body slides down a rough plane inclined at angle theta with constant speed. The coefficient of limiting friction between them is",
          "optionA": "sin theta",
          "optionB": "cos theta",
          "optionC": "1/tan theta",
          "optionD": "tan theta",
          "correctOption": "D",
          "subConcept": "Friction on an inclined plane",
          "explanation": "Steady sliding means ma = 0, so mg sin theta = mu mg cos theta and mu = tan theta, the tangent of the angle of repose. Option C is the reciprocal, a frequent slip when the components are written the wrong way round.",
          "remediationTip": "Set the two forces equal on the diagram, cancel mg, and rearrange slowly: sin over cos is tan, never the other way."
        },
        {
          "id": "q-phy-newton-connected-4",
          "quizId": "quiz-phy-newton-connected",
          "questionText": "A trotro braking hard on a level road stops from 10 m/s in 10 m. Assuming the same braking force, the stopping distance from 20 m/s is",
          "optionA": "20 m",
          "optionB": "40 m",
          "optionC": "10 m",
          "optionD": "80 m",
          "correctOption": "B",
          "subConcept": "Braking distance and speed",
          "explanation": "The same braking force gives the same deceleration, here a = u squared/2s = 100/20 = 5 m/s per second, so from 20 m/s the distance is 400/10 = 40 m. Distance is proportional to the square of the speed, so double speed means four times the distance.",
          "remediationTip": "Compute the deceleration from the first run and then reuse it; squaring 20 rather than doubling 10 is the whole of this question."
        },
        {
          "id": "q-phy-newton-connected-5",
          "quizId": "quiz-phy-newton-connected",
          "questionText": "A 6.0 m scaffold plank of negligible weight is supported at both ends and carries a 1200 N load placed 2.0 m from the left end. The reaction at the right support is",
          "optionA": "1200 N",
          "optionB": "600 N",
          "optionC": "400 N",
          "optionD": "800 N",
          "correctOption": "C",
          "subConcept": "Load sharing by moments",
          "explanation": "Taking moments about the left support: R x 6.0 = 1200 x 2.0, so R = 400 N, and the left support then carries 1200 - 400 = 800 N. The nearer support carries the larger share, which is why loads are kept close to a support.",
          "remediationTip": "Choose the other support as the pivot so that its reaction never appears in the moment equation, and check that the two reactions add to the load."
        }
      ]
    }
  },
  {
    "id": "shs2-phy-t3-power-efficiency-engines-pumps",
    "subjectId": "physics",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Power and Efficiency of Engines, Pumps and Vehicles",
    "description": "Power as the rate of doing work, energy supplied against useful output, the efficiency of a petrol engine, fuel economy and cost per kilometre, pump head and flow rate for a borehole pump, motor nameplate ratings and measuring work with a stopwatch.",
    "isFreeTrial": false,
    "keyNotes": "• Power is the rate of doing work, P = W/t = Fv, measured in watts, where 1 W = 1 J/s and 1 kW = 1000 W; the same machine doing the same work slowly has smaller power, not smaller work.\n• Efficiency = useful output energy/total input energy x 100 percent, and it is always below 100 percent because friction, sound and waste heat carry energy away.\n• Borehole pump numbers: 600 kg of water, that is 600 litres, each minute through a head of 12 m needs work mgh = 600 x 10 x 12 = 72 000 J per minute, an output of 72 000/60 = 1200 W, so on a 1.5 kW motor the efficiency is 1200/1500 = 80 percent.\n• Pump head is the vertical lift plus the friction loss in the pipe and any delivery pressure head; the useful energy to raise one cubic metre, 1000 kg, through 12 m is 1000 x 10 x 12 = 1.2 x 10^5 J.\n• Electricity is sold in kilowatt-hours and 1 kWh = 3.6 x 10^6 J, so the pump above running five hours draws 1.5 x 5 = 7.5 kWh, which at GH¢1.50 per unit costs GH¢11.25 while delivering only 1.2 x 5 = 6 kWh to the water.\n• A petrol engine changes only about 25 to 30 percent of the chemical energy of the fuel into crankshaft work; the rest leaves as heat in the radiator and in the exhaust.\n• Fuel economy: a trotro covering 96 km on 12 L gives 8 km per litre, and at GH¢8.00 per litre that is GH¢1.00 for every kilometre, or 12.5 L for each 100 km.\n• Useful work at the wheels = resistive force x distance, so 400 N over 96 000 m is 3.84 x 10^7 J, while 12 L at about 3.2 x 10^7 J per litre supplies 3.84 x 10^8 J, an overall efficiency of 10 percent for that model journey.\n• Power at a steady speed is P = Fv: 400 N of resistance at 72 km/h, which is 20 m/s, needs 8000 W, that is 8 kW, at the wheels.\n• A motor nameplate gives input power, voltage and current; 1.5 kW on a 230 V ECG supply draws about 6.5 A, and the shaft output is the rating times the efficiency, never the rating itself.\n• In the laboratory power is measured with a stopwatch and a meter rule by lifting a known mass, P = mgh/t; a student climbing a staircase develops a few hundred watts for a short burst, while the body sustains only about 50 to 100 W.\n• The unit slip that ruins these answers is time: 1 minute is 60 s, so work per minute divided by 1 instead of 60 makes a pump look sixty times more powerful.",
    "detailedNotes": {
      "overview": "Work tells how much energy has been transferred; power tells how fast, and efficiency tells how much of what was paid for actually appears as useful work. This topic assembles the three ideas around machines that Ghanaian students meet: a borehole pump watering a vegetable garden, a petrol engine driving a trotro, an electric motor on a nameplate, and a body climbing a staircase with a stopwatch in hand. Every calculation is a careful choice between input and output, a conversion of minutes into seconds and of kilometres per hour into metres per second, followed by one of three formulae, P = W/t, P = Fv and efficiency = output/input x 100. Because the arithmetic is short and checkable, full marks are a matter of tidiness: state the quantities, show the substitution, give the unit, and end with a sentence that names whether the number found is an input or an output.",
      "introduction": "Start by measuring your own power. Take a stopwatch, a meter rule and a mass of known weight, lift it through a measured height, record the time, and compute P = mgh/t; then run up a staircase of known height, record the time, and compare the two results. The class discovers that a heavier student is not necessarily more powerful, because power also divides by the time. Next use a hand pump at the school well to raise a measured volume of water a measured height, and let students find the work and argue about how quickly the same work could be done by a motor. Finish with a nameplate: read the kilowatt, volt and ampere figures of a submersible pump, calculate the current it draws, and then ask why the shaft cannot deliver the full rating, which introduces efficiency as a loss rather than as an abstract fraction.",
      "realWorldContext": "Power and efficiency are daily facts of the Ghanaian economy. A farmer at Bawku or Akuse sizes a borehole pump by the head from the water table to the tank and by the flow needed for beds of tomato and pepper, and knows that a pump rated too small will run for hours and still leave the tank low. ECG bills by the kilowatt-hour, so a household that runs a 1.5 kW pump for five hours pays for 7.5 kWh, and the same arithmetic governs a mobile-money agent kiosk running a small generator to charge phones. On the road, drivers quote kilometres per litre and passengers argue about fares per stop, which is the cost-per-kilometre calculation of this topic; fuel near GH¢8.00 a litre makes the figures real. Mechanics at Suame Magazine know that an engine losing compression, or a radiator choked with dust, turns fuel into heat instead of motion, a direct demonstration of falling efficiency, and a trotro carrying timber beyond the legal load needs more power and more fuel for the same speed.",
      "objectives": [
        "Define power as the rate of doing work and calculate it from P = W/t and P = Fv with correct SI units",
        "Distinguish energy input from useful energy output and compute the efficiency of an engine, pump or motor as a percentage",
        "Relate pump head and flow rate to useful power and size a borehole pump for a farm or a compound water system",
        "Convert fuel consumption into cost per kilometre and energy into kilowatt-hours to compare the running cost of machines"
      ],
      "sections": [
        {
          "title": "Power as the Rate of Doing Work and How to Measure It",
          "content": "Work is a force multiplied by the distance moved in its direction, and power is the rate at which that work is done, P = W/t, measured in watts so that one watt is one joule per second. When a force moves a body at a steady speed the same quantity appears as P = Fv, the form that shows why a vehicle climbing the Akwapim ridge needs far more power at 80 km/h than at 40 km/h on the same gradient. In the laboratory the stopwatch method is standard: lift a known mass through a measured height, record the time, and compute P = mgh/t, changing minutes into seconds before dividing. A student who runs up a flight of stairs produces his own mechanical power, commonly a few hundred watts for a short burst, while the human body sustains only about 50 to 100 W, which is why a hand pump tires a worker long before it tires a machine. Electric motors are labelled with input power, voltage and current, so a 1.5 kW pump motor on a 230 V ECG supply draws roughly 6.5 A, and its shaft output is that rating multiplied by the efficiency, never the rating itself.",
          "bulletPoints": [
            "P = W/t in watts, where 1 W = 1 J/s and 1 kW = 1000 W.",
            "P = Fv applies at constant speed and explains why high speed up a hill demands high power.",
            "Stopwatch method: P = mgh/t, with height in metres and time in seconds.",
            "A short burst of human effort can reach several hundred watts, but sustained output is roughly 50 to 100 W.",
            "Nameplate kilowatts are electrical input; shaft output equals input times efficiency.",
            "Two machines can do identical work with different power, because power also divides by the time taken."
          ],
          "keyTakeaway": "Say which quantity you have found, work or power, and check that the time has been changed into seconds before dividing.",
          "realWorldExample": "Two youths at a filling station in Takoradi use a hand pump to move water into a storage tank: one takes six minutes and the other four for the same volume and the same height, so both do identical work but the faster youth delivers one and a half times the power."
        },
        {
          "title": "Engine Efficiency, Fuel Economy and Cost per Kilometre",
          "content": "Efficiency is the fraction of the energy supplied that appears as useful output, written as a percentage by dividing useful output by total input and multiplying by 100. The first step in every calculation is to name the input and the output, because a reversed ratio produces a machine more efficient than perfection. No real engine reaches 100 percent: friction in the bearings, sound, and above all the heat that leaves with the hot exhaust and through the radiator carry energy away, so a petrol engine converts only about 25 to 30 percent of the energy of its fuel into crankshaft work, and the remainder explains why an engine bay becomes hot. One litre of petrol holds roughly 3.2 x 10^7 J, so a trotro that covers 96 km on 12 L has been supplied with 3.84 x 10^8 J. If the average resistive force is 400 N, the useful work at the wheels is 400 x 96 000 = 3.84 x 10^7 J, giving 10 percent overall once the transmission, the tyres and idling in Accra traffic are counted. Economy is quoted in kilometres per litre, and the cost per kilometre follows at once: 8 km on a litre costing GH¢8.00 is GH¢1.00 for every kilometre travelled.",
          "bulletPoints": [
            "Efficiency = useful output energy/total input energy x 100 percent, always below 100.",
            "A petrol engine is roughly 25 to 30 percent efficient at the crankshaft and less at the wheels.",
            "One litre of petrol supplies about 3.2 x 10^7 J of chemical energy.",
            "Useful work for a vehicle = resistive force x distance, with the distance in metres.",
            "Economy in km per litre and price per litre give the cost per kilometre immediately.",
            "Power at steady speed is force times speed, so 400 N at 20 m/s is 8 kW."
          ],
          "keyTakeaway": "Label the input and the output before dividing, and remember that a hot radiator is the visible evidence of lost efficiency.",
          "realWorldExample": "A driver plied between Kasoa and Accra keeps a log showing 96 km on 12 L; at GH¢8.00 a litre the fuel costs GH¢1.00 a kilometre, and the same log tells him that a blocked air filter and a soft tyre push that figure above GH¢1.20."
        },
        {
          "title": "Pump Head, Flow Rate and the Borehole Pump on a Farm",
          "content": "A pump does work against gravity, so the useful energy per kilogram is g multiplied by the head, where the head is the vertical lift from the water table to the delivery point plus the friction loss in the pipes and any pressure head needed at a tap or a sprinkler. Flow rate says how much water passes in a given time, and the product gives the useful power: P = mass flow rate x g x head. For a borehole pump delivering 600 kg, which is 600 litres, every minute through a total head of 12 m, the work each minute is 600 x 10 x 12 = 72 000 J and the output is 72 000/60 = 1200 W. Raising one cubic metre, 1000 kg, through the same head needs 1000 x 10 x 12 = 1.2 x 10^5 J. Because electricity and diesel are bought in units of energy rather than joules, the same work is priced in kilowatt-hours, where 1 kWh = 3.6 x 10^6 J: running this pump for five hours on a 1.5 kW motor draws 7.5 kWh, which at a tariff of GH¢1.50 per unit costs GH¢11.25 while delivering only 6 kWh of useful energy to the water. Sizing an irrigation pump therefore means fixing the head and the flow first, converting them to a power, and then dividing by the efficiency to select the motor.",
          "bulletPoints": [
            "Head is the vertical lift plus pipe friction and any delivery pressure head, counted in metres.",
            "Useful pump power = mass flow rate x g x head, in watts when the flow is in kg/s.",
            "Delivering 600 kg per minute through 12 m gives 72 000 J per minute and an output of 1200 W.",
            "Raising 1 m3 of water, 1000 kg, through 12 m needs 1.2 x 10^5 J.",
            "1 kWh = 3.6 x 10^6 J, so five hours on a 1.5 kW motor is 7.5 kWh.",
            "At GH¢1.50 per unit those five hours cost GH¢11.25 and deliver 6 kWh, so 1.5 kWh, one fifth of the money, is lost."
          ],
          "keyTakeaway": "Choose the head and the flow rate first, convert them to power, then let the efficiency decide the motor size and the running cost.",
          "realWorldExample": "A vegetable farmer near Tonoiri preparing a dry-season garden works out that moving 600 litres a minute through the 12 m head to his elevated tank needs a 1.5 kW set, and he compares that running cost with a petrol-driven pump whose engine efficiency is nearer 20 percent for the same duty."
        }
      ],
      "commonMistakes": [
        "Dividing work by the number of minutes instead of the number of seconds, so that 72 000 J in one minute is reported as 72 000 W instead of 1200 W; write the converted time on the line above the substitution.",
        "Reversing the efficiency ratio and quoting a figure above 100 percent; check that the smaller quantity is on top and state the answer as a percentage.",
        "Calling the nameplate rating of a motor its useful output, when the plate gives electrical input and the shaft delivers less by the efficiency, so a 1.5 kW motor at 80 percent yields 1.2 kW of work.",
        "Confusing work with power in a sentence and claiming that a machine which lifts a load slowly does less work; the work is the same and only the power is smaller.",
        "Using litres of water as a mass without stating that 1 litre of water has a mass of 1 kg, and then mixing decimetres cubed with the head in metres."
      ],
      "wassceExamTips": [
        "Paper 1 tests power with small clean numbers, such as 6000 J in 20 s giving 300 W, so practise the division and the watt-to-kilowatt conversion until they are instant.",
        "In Paper 2 an efficiency question pays the ratio line separately: write efficiency = useful output/total input x 100 in words, then substitute with units, then state the percentage, and an arithmetic slip still earns the method mark.",
        "Quote the energy conversion exactly when needed: 1 kWh = 3.6 x 10^6 J, and a kilowatt-hour is a unit of energy and never a unit of power; examiners award a mark for that single statement.",
        "For a vehicle question decide whether the force given is the driving force or the resistive force; at steady speed the two are equal in magnitude and P = Fv uses that force, while any acceleration demands resultant force = ma.",
        "Paper 3 alternative-practical on measuring power by lifting a load expects the apparatus list of slotted masses, a meter rule, a stopwatch and a secure support, at least three repeated timings averaged, and the precautions that the height is measured from the starting position of the load and that the watch is started with the lift.",
        "When a cost is asked for, end with the currency and the period, for example GH¢11.25 for five hours, because a bare number without the unit of money loses the answer mark."
      ],
      "summaryChecklist": [
        "Can I state the definition and SI unit of power and switch between P = W/t and P = Fv?",
        "Can I calculate the efficiency of a machine as a percentage and identify its input and output energies correctly?",
        "Can I find the useful power of a pump from its flow rate and head, and the energy to raise a given volume of water?",
        "Can I convert between joules and kilowatt-hours and work out a running cost in Ghana cedis?",
        "Can I turn a fuel consumption into kilometres per litre and a cost per kilometre for a vehicle?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-power-efficiency-1",
        "title": "Output Power and Efficiency of a Borehole Pump",
        "problem": "A borehole pump lifts 600 kg of water every minute through a total head of 12 m. It is driven by an electric motor rated 1.5 kW at 230 V. Taking g = 10 m/s per second, find the work done each minute, the useful output power, the efficiency of the pump set, and the cost of running it for five hours at GH¢1.50 per kWh.",
        "stepByStepSolution": [
          "Step 1 (M1): The useful work is the gain in gravitational potential energy, W = mgh = 600 x 10 x 12.",
          "Step 2 (A1): W = 72 000 J every minute.",
          "Step 3 (M1): Power is work divided by time, and one minute must be changed to 60 s, so P = 72 000/60.",
          "Step 4 (A1): Useful output = 1200 W, that is 1.2 kW.",
          "Step 5 (M1): The nameplate gives the electrical input as 1.5 kW = 1500 W, so efficiency = output/input x 100 = 1200/1500 x 100.",
          "Step 6 (A1): Efficiency = 80 percent, and the 300 W difference appears as heat in the motor, the cable and the pipe friction.",
          "Step 7 (M1): Energy drawn in five hours = input power x time = 1.5 kW x 5 h, remembering that 1 kWh = 3.6 x 10^6 J.",
          "Step 8 (A1): 7.5 kWh, which costs 7.5 x 1.50 = GH¢11.25.",
          "Step 9 (M1): Energy delivered to the water = 1.2 kW x 5 h = 6 kWh, so the loss is 7.5 - 6 = 1.5 kWh.",
          "Step 10 (A1): One fifth of the energy bought is wasted, which agrees with the 20 percent loss already found."
        ],
        "keyTakeaway": "A pump problem is potential energy divided by a time in seconds; the money then follows from kilowatt-hours, where 1 kWh = 3.6 x 10^6 J."
      },
      {
        "id": "ex-phy-power-efficiency-2",
        "title": "Fuel Economy, Cost per Kilometre and Overall Efficiency of a Trotro",
        "problem": "A trotro uses 12 L of petrol to travel 96 km at a steady speed on a level road. Assume that one litre of petrol supplies 3.2 x 10^7 J and that the average resistive force on the vehicle is 400 N. Find the fuel economy, the cost per kilometre at GH¢8.00 per litre, the useful work done, the energy supplied by the fuel, the overall efficiency and the useful power at 72 km/h.",
        "stepByStepSolution": [
          "Step 1 (M1): Economy = distance travelled/fuel used = 96/12.",
          "Step 2 (A1): 8 km per litre.",
          "Step 3 (M1): Cost per kilometre = price per litre/economy = 8.00/8.",
          "Step 4 (A1): GH¢1.00 for every kilometre, which is 12.5 L for each 100 km.",
          "Step 5 (M1): Useful work = resistive force x distance, with the distance changed to metres: W = 400 x 96 000.",
          "Step 6 (A1): W = 3.84 x 10^7 J.",
          "Step 7 (M1): Energy supplied by the fuel = volume x energy per litre = 12 x 3.2 x 10^7.",
          "Step 8 (A1): Input = 3.84 x 10^8 J.",
          "Step 9 (M1): Efficiency = useful output/input x 100 = (3.84 x 10^7)/(3.84 x 10^8) x 100.",
          "Step 10 (A1): 10 percent, the rest leaving as heat in the exhaust and the radiator and as friction in the drivetrain and tyres.",
          "Step 11 (M1): At 72 km/h the speed is 72/3.6 = 20 m/s, and steady speed means the driving force equals the resistance, so P = Fv = 400 x 20.",
          "Step 12 (A1): Useful power = 8000 W, that is 8 kW at the wheels."
        ],
        "keyTakeaway": "Economy and cost per kilometre are two ratios of the same pair of quantities, and the efficiency compares force times distance with the chemical energy bought at the pump."
      }
    ],
    "quiz": {
      "id": "quiz-phy-power-efficiency",
      "topicId": "shs2-phy-t3-power-efficiency-engines-pumps",
      "title": "Power and Efficiency Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-power-efficiency-1",
          "quizId": "quiz-phy-power-efficiency",
          "questionText": "A motor does 6000 J of work in 20 s. Its power output is",
          "optionA": "300 W",
          "optionB": "120 W",
          "optionC": "12 000 W",
          "optionD": "30 W",
          "correctOption": "A",
          "subConcept": "Power as the rate of doing work",
          "explanation": "P = W/t = 6000/20 = 300 W. Option C multiplies the two numbers instead of dividing them, and option B comes from dividing the work by 50 rather than by 20.",
          "remediationTip": "Write the formula with its units first, P = W/t in joules over seconds giving watts, then substitute."
        },
        {
          "id": "q-phy-power-efficiency-2",
          "quizId": "quiz-phy-power-efficiency",
          "questionText": "A pump lifts a mass m of water through a head h in a time t. Which expression gives its useful output power?",
          "optionA": "m x g x h x t",
          "optionB": "m x g x t/h",
          "optionC": "h/(m x g x t)",
          "optionD": "m x g x h/t",
          "correctOption": "D",
          "subConcept": "Power of a pump",
          "explanation": "The useful work is the gain in potential energy mgh, and power is work divided by time, giving mgh/t. Option A multiplies by the time, which would make a slower pump more powerful, an absurdity worth testing in any answer.",
          "remediationTip": "Check every formula in words: energy gained divided by the time taken, so the time belongs beneath the line."
        },
        {
          "id": "q-phy-power-efficiency-3",
          "quizId": "quiz-phy-power-efficiency",
          "questionText": "A machine that is 60 percent efficient does 300 J of useful work. The energy supplied to it is",
          "optionA": "180 J",
          "optionB": "500 J",
          "optionC": "720 J",
          "optionD": "1800 J",
          "correctOption": "B",
          "subConcept": "Efficiency as a ratio",
          "explanation": "Efficiency = output/input, so input = output/efficiency = 300/0.60 = 500 J. The trap is 180 J, which comes from multiplying 300 by 0.60 and so finding an input smaller than the useful output.",
          "remediationTip": "The input must always exceed the output; if your answer is smaller than the useful work, you have multiplied where you should have divided."
        },
        {
          "id": "q-phy-power-efficiency-4",
          "quizId": "quiz-phy-power-efficiency",
          "questionText": "One kilowatt-hour of electrical energy equals",
          "optionA": "3600 J",
          "optionB": "1000 J",
          "optionC": "3.6 x 10^6 J",
          "optionD": "3.6 x 10^9 J",
          "correctOption": "C",
          "subConcept": "Kilowatt-hour as a unit of energy",
          "explanation": "One kilowatt sustained for one hour is 1000 W x 3600 s = 3.6 x 10^6 J. Option A converts the hours only and forgets the kilo, and the point of the question is that a kilowatt-hour measures energy while the watt measures power.",
          "remediationTip": "Rebuild the conversion each time as 1000 J/s multiplied by 3600 s, rather than trying to recall a bare number."
        },
        {
          "id": "q-phy-power-efficiency-5",
          "quizId": "quiz-phy-power-efficiency",
          "questionText": "A van travels at a steady 20 m/s against a resistive force of 500 N. The useful power developed by its engine is",
          "optionA": "10 kW",
          "optionB": "25 kW",
          "optionC": "1 kW",
          "optionD": "100 kW",
          "correctOption": "A",
          "subConcept": "Power at constant speed, P = Fv",
          "explanation": "At steady speed the driving force equals the resistance, so P = Fv = 500 x 20 = 10 000 W = 10 kW. Option C would follow from 500 N at 2 m/s, and option B divides where it should multiply.",
          "remediationTip": "State first that steady speed means driving force equals resistive force, then apply P = Fv and convert watts to kilowatts at the end."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t1-light-optics-instruments",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Light, Reflection, Refraction and Optical Instruments",
    "description": "Rectilinear propagation, the two laws of reflection, plane and curved mirrors, refraction and Snell's law, refractive index, total internal reflection and the critical angle, prisms and dispersion, lenses, the human eye, the magnifying glass and the compound microscope.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Light travels in a straight line in a transparent medium; rectilinear propagation explains shadows, eclipses and the pinhole camera, whose image is real, inverted and sharper as the hole is reduced.\n• The two laws of reflection: the incident ray, the reflected ray and the normal all lie in one plane, and the angle of incidence equals the angle of reflection, both measured to the normal and never to the mirror surface.\n• A ray striking a plane mirror at 30 degrees to the surface meets it at 60 degrees to the normal, so the angle of reflection is 60 degrees, not 30; this single slip loses more Paper 1 marks than any other optics error.\n• A plane mirror gives an image that is virtual, upright, the same size as the object, laterally inverted, and as far behind the mirror as the object is in front; the shortest mirror that shows a full figure is half the figure height.\n• Diffuse reflection from a wall, a chalkboard or kente cloth lets every seat in the class see it; regular reflection from a polished surface gives a mirror image but only from one chosen direction.\n• A concave (converging) mirror gives a real, inverted image when the object is beyond F and a virtual, magnified, upright image when the object is inside F; a convex (diverging) mirror always gives a virtual, upright, diminished image, which is why trotro and shop wing mirrors are convex.\n• Torch reflectors, car headlamps and satellite dishes use the concave mirror: rays from the focus leave parallel to the axis, and parallel rays are brought to the focus; the radius of curvature is C = 2f.\n• Mirror formula 1/f = 1/u + 1/v with magnification m = v/u; f is positive for a concave mirror and negative for a convex mirror, and a positive v marks a real image formed in front.\n• Refraction is the bending at a boundary caused by change of speed: light passing from air into water or glass slows and bends towards the normal, and bends away from the normal on emerging.\n• Refractive index n = c/v = sin i / sin r, written generally as n1 sin i = n2 sin r (Snell's law); typical values are air 1.00, water 1.33, crown glass 1.50, diamond 2.42.\n• A ray entering glass at 45 degrees from air is bent to about 28 degrees for n = 1.50, since sin r = 0.707/1.50 = 0.471; a pencil in a cup of water looks broken because the emerging rays leave the denser medium bent away from the normal.\n• Apparent depth: real depth / apparent depth = n, so a pool of real depth 2.0 m looks 1.5 m deep under water with n = 4/3, and a driver judging a flooded road at Ashaiman is always deceived in the same direction.\n• The critical angle c obeys sin c = 1/n for a boundary with air: glass 41.8 degrees, water 48.6 degrees, diamond 24.4 degrees; total internal reflection demands both that the light starts in the denser medium and that the incidence angle exceeds c.\n• Applications of total internal reflection: the 45-degree reflecting prism in periscopes and binoculars, light pipes and optical fibres carrying Ghana's internet and telecom traffic, and the sparkle of a cut diamond, whose small critical angle traps light until it returns through the facets. Light in diamond travels at 3.0 x 10^8 / 2.42 = 1.24 x 10^8 m/s.\n• A glass prism splits white light because n is greater for violet than for red, so violet is deviated most: the spectrum order is red, orange, yellow, green, blue, indigo, violet, and a second inverted prism recombines it to white.\n• Convex lenses converge: 1/f = 1/u + 1/v, object beyond 2F gives a real diminished image, object between F and 2F a real magnified image, object inside F a virtual magnified image; concave lenses always give a virtual, upright, diminished image.\n• The eye is a converging lens of fixed focal length focused by the ciliary muscles on a fixed screen, the retina; the image there is real, inverted and diminished. Defects and their corrections are short sight (myopia) by a diverging lens, long sight (hypermetropia) by a converging lens, and astigmatism by a cylindrical lens.\n• Magnifying glass: virtual, upright, magnified image with the final image at the near point D = 25 cm gives M = 1 + D/f, so f = 5 cm yields M = 1 + 25/5 = 6.\n• Compound microscope: the short-focus objective forms a real magnified image inside the focal point of the eyepiece, which then acts as a magnifier; total magnification = (v_o/u_o) x (D/f_e), so an objective giving x10 with an eyepiece of f = 2.5 cm (D/f_e = 10) gives x100 overall.",
    "detailedNotes": {
      "overview": "This topic builds the whole of geometrical optics that WASSCE tests: light travelling in straight lines, reflection at plane and curved surfaces, refraction at a boundary with its refractive index and Snell's law, total internal reflection with the critical angle, dispersion by a prism, image formation by lenses, and finally the eye and the instruments that extend it. Every image question is answered by the same three habits: draw the rays to scale, measure angles to the normal, and state the three properties of the image (real or virtual, upright or inverted, magnified or diminished) in words. The numerical core is small and completely checkable, so a student who practises the mirror and lens formulae and the critical-angle relation can take full marks in Paper 1 and most of the structured marks in Paper 2.",
      "introduction": "Begin on the laboratory optical bench with the ray box, because the diagrams later must be drawn from what you have actually seen. Set up a plane mirror and trace the incident and reflected rays on paper, then measure both angles to the normal and prove they are equal. Move to the concave mirror and locate its focus by bringing parallel rays from the ray box to a point on a card, which is also how you find the focal length of a lens by focusing the window image on a screen. Finish the practical work with the semi-circular glass block and the critical angle: rotate the block until the refracted ray just disappears along the surface, measure that angle, and compare it with the value 41.8 degrees calculated from sin c = 1/n. Keep one rule for the term: never write an angle without naming the line it is measured from.",
      "realWorldContext": "Ghanaian roads give daily optics lessons. The wing mirror fitted to a trotro on the Accra-Kumasi road is convex, so it shows a wide, upright, diminished view and carries the warning that objects are closer than they look; that warning is a statement about magnification less than one. The security man's torch at a site in Tema and the headlamp of a bus both use a concave reflector with the lamp at the focus so the rays leave parallel. In the GES school laboratory the periscope is made from two plane mirrors set at 45 degrees, while the fibre-optic cables now laid for internet and mobile-money data in Accra carry light by total internal reflection with almost no loss. Cut glass sold in the markets at Kejetia sparkles for the same reason a diamond does, and the rainbow over a cocoa farm after a shower is dispersion by water droplets. Ask each student to describe one mirror or lens at home, since the kitchen spoon is a working example of both concave and convex reflection.",
      "objectives": [
        "State the two laws of reflection and use them to find the angle of reflection from an angle given to the mirror surface",
        "Construct and describe images formed by plane, concave and convex mirrors, and apply 1/f = 1/u + 1/v with m = v/u",
        "Define refractive index as n = c/v = sin i / sin r and use Snell's law to find an angle of refraction",
        "Calculate the critical angle from sin c = 1/n and state the two conditions for total internal reflection with two real applications",
        "Explain image formation in the human eye, the magnifying glass and the compound microscope, and name the defects of vision with their correcting lenses"
      ],
      "sections": [
        {
          "title": "Rectilinear Propagation and the Laws of Reflection",
          "content": "Light travels in straight lines through a transparent medium of uniform density, and that single fact accounts for shadows, eclipses and the image in a pinhole camera. The pinhole image is real because it can be caught on a screen, inverted because rays cross at the hole, and its size grows as the screen is pushed further back; a smaller hole gives a sharper but dimmer image, while a large hole gives a bright blurred circle. Reflection obeys two laws that must be quoted exactly: the incident ray, the reflected ray and the normal at the point of incidence all lie in one plane, and the angle of incidence equals the angle of reflection. Both angles are always measured from the normal, the line drawn at ninety degrees to the surface, so a ray hitting a mirror at 30 degrees to the surface is at 60 degrees to the normal and reflects at 60 degrees. Rough surfaces such as a painted wall or a piece of smock fabric reflect diffusely, scattering light in all directions so that the object is visible from any seat in the classroom, while a polished surface reflects regularly and can only show its image from one direction. A plane mirror produces an image that is virtual, upright, the same size as the object, laterally inverted, and as far behind the mirror as the object is in front, with the line joining object and image perpendicular to the mirror.",
          "bulletPoints": [
            "Angles of incidence and reflection are measured to the normal, never to the mirror surface.",
            "A ray at 30 degrees to the surface lies at 60 degrees to the normal and reflects at 60 degrees.",
            "Plane mirror image: virtual, upright, same size, laterally inverted, image distance equals object distance.",
            "Diffuse reflection makes ordinary objects visible from every direction; regular reflection gives an image only from one.",
            "The shortest plane mirror for a full-length view of a person is half that person's height, independent of distance."
          ],
          "keyTakeaway": "Say the two laws word for word, measure every angle from the normal, and give all four properties of a plane mirror image.",
          "realWorldExample": "A tailor in Kumasi who fits a customer uses a tall plane mirror and a second small mirror angled at 45 degrees to show the back of a kente smock, because the image in the small mirror is upright relative to the ray path and laterally inverted only across the mirror line."
        },
        {
          "title": "Curved Mirrors and the Mirror Formula",
          "content": "A concave mirror converges parallel rays to a real focus in front of it, and a convex mirror diverges them so that the focus appears to lie behind the surface. The distance from the pole to the centre of curvature C is twice the focal length, so a mirror of focal length 15 cm has its centre of curvature at 30 cm, and where the object sits relative to F and C decides the whole character of the image. With the object beyond C the concave mirror gives a real, inverted, diminished image between F and C; between C and F the image is real, inverted, magnified and beyond C; at C the image is the same size; and inside F the image jumps to virtual, upright and magnified behind the mirror, which is the shaving and dentist's mirror case. A convex mirror can never form a real image, and that is exactly why it is chosen for vehicle wing mirrors and for the corners of shop aisles: it always yields an upright, diminished image with a much wider field of view than a flat mirror of the same size. Quantitatively the three quantities are tied by 1/f = 1/u + 1/v with magnification m = v/u, and signs matter: take f positive for concave, negative for convex, and a positive v tells you the image is real and in front of the mirror. Rearrange for 1/v rather than for v, use the lowest common denominator, and only then invert, because inverting each term separately is the classic slip.",
          "bulletPoints": [
            "C = 2f, so a mirror of focal length 15 cm has its centre of curvature at 30 cm.",
            "Concave mirror: object beyond F gives a real inverted image; object inside F gives a virtual upright magnified image.",
            "Convex mirror: always virtual, upright and diminished, but with a wide field of view.",
            "Use 1/f = 1/u + 1/v, work with reciprocals, and invert only at the last line.",
            "Magnification m = v/u: greater than 1 means enlarged, less than 1 means diminished, and a real image is inverted."
          ],
          "keyTakeaway": "Locate the object relative to F and C first, then let the formula confirm what the ray diagram already showed.",
          "realWorldExample": "The parabolic reflector behind a torch bulb sold at Makola places the filament at the focus so the emerging rays are parallel and the beam carries across the compound; the same shaping is used in solar cookers at Navrongo, where parallel sun rays are concentrated to one hot point."
        },
        {
          "title": "Refraction, Refractive Index and Snell's Law",
          "content": "Refraction is the change of direction a ray undergoes when it crosses into a medium where its speed is different. Light leaving air for water or glass slows and bends towards the normal; light emerging from glass into air speeds up and bends away from the normal, which is why a pencil in a cup of water appears broken at the surface and why a fish seen from the bank is not where it seems. The refractive index of a medium is defined in two equivalent ways, n = speed of light in vacuum / speed in the medium = c/v, and n = sin i / sin r for the particular air-to-medium boundary. With n equal to 1.50 for crown glass, a ray entering at 45 degrees gives sin r = sin 45 / 1.50 = 0.707/1.50 = 0.471, so r is about 28 degrees; light travels in that glass at 3.0 x 10^8 / 1.50 = 2.0 x 10^8 m/s. Snell's law in its general form, n1 sin i = n2 sin r, handles any pair of media and is the version to quote when the question specifies both indices. A closely related result is apparent depth: real depth divided by apparent depth equals n, so a swimming pool of real depth 2.0 m appears only 1.5 m deep when n = 4/3, and the mud at the bottom of a clear stream looks lifted towards the surface. State units for nothing here, since both indices and the ratios of sines are pure numbers with no dimension.",
          "bulletPoints": [
            "n = c/v and n = sin i / sin r; air 1.00, water 1.33, crown glass 1.50, diamond 2.42.",
            "Into a denser medium the ray bends towards the normal and slows; into a rarer medium it bends away and speeds up.",
            "Glass n = 1.50 with i = 45 degrees gives r = 28 degrees, since sin r = 0.707/1.50 = 0.471.",
            "Speed in glass = 3.0 x 10^8 / 1.50 = 2.0 x 10^8 m/s; in diamond 1.24 x 10^8 m/s.",
            "Real depth / apparent depth = n, so 2.0 m of water at n = 4/3 looks 1.5 m deep."
          ],
          "keyTakeaway": "Decide first whether the ray is entering or leaving the denser medium; the direction of bending follows at once.",
          "realWorldExample": "Sachet-water filling plants in the Eastern Region check tank levels by sight, and a quality supervisor learning optics discovers that the water line of a transparent tank seen obliquely lies above its true level because of refraction at the plastic, water and air boundaries."
        },
        {
          "title": "Total Internal Reflection, the Critical Angle and the Prism",
          "content": "When light travels inside a denser medium and meets the boundary with a rarer one, it bends away from the normal and the refracted ray grows closer to the surface as the incidence angle increases. At one particular incidence the refracted ray runs exactly along the boundary; that is the critical angle c, and it satisfies sin c = 1/n when the second medium is air. For crown glass n = 1.50, so sin c = 0.667 and c = 41.8 degrees; for water n = 4/3 gives sin c = 0.75 and c = 48.6 degrees; and for diamond n = 2.42 gives c = 24.4 degrees. Increase the incidence angle beyond c and refraction stops entirely: all the light is reflected back into the denser medium, and this total internal reflection is as efficient as a good silvered mirror but with no absorption loss at a second surface. Both conditions must be stated to earn the marks, namely that the light must be travelling in the optically denser medium and that the angle of incidence must be greater than the critical angle. The technology follows directly. A glass prism with angles of 45, 45 and 90 degrees turns a ray through 90 degrees or 180 degrees by two total internal reflections because 45 degrees exceeds the glass critical angle of 41.8 degrees, which is how periscopes, binoculars and prism surveying instruments work. An optical fibre is a fine strand of pure glass, or in cheap demonstrations a jet of water from a tap, in which light entering one end is trapped by repeated total internal reflection and carried for kilometres with little loss; these fibres now link Ghana's telecom and banking networks. A cut diamond sparkles because its small critical angle lets light entering the top facets be reflected repeatedly and return through the crown instead of leaking out the bottom. White light is dispersed by a prism because the refractive index is slightly larger for violet than for red, so violet is deviated most and the emerging beam fans out into red, orange, yellow, green, blue, indigo and violet; a second prism inverted relative to the first recombines the colours to white, which is Newton's classic proof that the colours are in the light and not made by the glass.",
          "bulletPoints": [
            "sin c = 1/n for a boundary with air: glass 41.8 degrees, water 48.6 degrees, diamond 24.4 degrees.",
            "Two conditions for total internal reflection: light in the denser medium, and incidence angle greater than c.",
            "A 45-degree reflecting prism works because 45 exceeds the glass critical angle of 41.8 degrees.",
            "Optical fibres carry many signals as light with very little loss and are immune to electrical pickup.",
            "Dispersion occurs because n is greater for violet than for red, so violet bends most in the prism."
          ],
          "keyTakeaway": "Total internal reflection needs the denser starting medium plus an angle of incidence past the critical angle; without both, there is none.",
          "realWorldExample": "The fibre runs installed under roads in Accra for data and mobile-money traffic use the same principle demonstrated in class with water from a bottle: a laser jet guided by total internal reflection bends with the stream of water as it falls."
        },
        {
          "title": "Lenses, the Eye and Optical Instruments",
          "content": "A convex lens converges and can form a real image on a screen; a concave lens diverges and only ever forms a virtual, upright, diminished image. The same reciprocal formula applies, 1/f = 1/u + 1/v with m = v/u, and the standard cases are worth memorising as a table: object beyond 2F gives a real, inverted, diminished image between F and 2F on the far side, the camera and the eye case; object between F and 2F gives a real, inverted, magnified image beyond 2F, the projector case; object inside F gives a virtual, upright, magnified image on the same side as the object, the magnifying-glass case. Powers add when lenses are placed in contact, and the power in reciprocal metres is 1/f, so a lens of focal length 20 cm has power 5 dioptres. The human eye is a converging lens of adjustable focal length: the ciliary muscles alter the curvature of the crystalline lens to focus on near and distant objects, the retina is the fixed screen, and the image on it is real, inverted and diminished, with the brain interpreting it upright. The near point of a normal young eye is taken as 25 cm, which is the distance D used in every magnifying-power calculation. Short sight (myopia) puts the image of a distant object in front of the retina and is corrected by a diverging lens; long sight (hypermetropia) focuses near images behind the retina and is corrected by a converging lens; astigmatism needs a cylindrical lens. A simple magnifying glass used with the final image at the near point gives M = 1 + D/f, so a lens of focal length 5 cm gives 1 + 25/5 = 6. A compound microscope adds a second stage: the short-focus objective produces a real magnified image just inside the focal point of the eyepiece, and the eyepiece then magnifies that image as a simple glass would, so total magnification equals (v_o/u_o) multiplied by (D/f_e). With the objective giving 10 and an eyepiece of focal length 2.5 cm, D/f_e = 25/2.5 = 10, the instrument gives 100 overall, and that multiplication of two stages is why a microscope can reach magnifications a single lens never could.",
          "bulletPoints": [
            "Lens formula 1/f = 1/u + 1/v with m = v/u; convex lenses can give real images, concave lenses cannot.",
            "Object inside F of a convex lens: virtual, upright, magnified image, the magnifying-glass case.",
            "Power P = 1/f in metres, so f = 20 cm gives 5 dioptres.",
            "The eye forms a real, inverted, diminished image on the retina; myopia needs a diverging lens, hypermetropia a converging lens.",
            "Magnifying glass M = 1 + D/f = 6 for f = 5 cm; microscope total magnification = (v_o/u_o) x (D/f_e) = 10 x 10 = 100."
          ],
          "keyTakeaway": "Both instruments multiply stages: the microscope's overall magnification is the objective magnification times the eyepiece magnification.",
          "realWorldExample": "A science teacher at a school in Ho runs the microscope practical with prepared slides of mosquito larvae from a nearby stream, and the class records that the x10 objective with the x10 eyepiece gives 100, so a larva 2 mm long appears as if it were 200 mm across the field."
        }
      ],
      "commonMistakes": [
        "Quoting the angle of incidence as the angle between the ray and the mirror surface; a ray at 30 degrees to the surface is at 60 degrees to the normal, so writing i = 30 degrees and r = 30 degrees reverses the whole diagram.",
        "Inverting each term of 1/f = 1/u + 1/v separately, so 1/v = 1/15 - 1/20 becomes v = 15 - 20; the fix is to combine the fractions to 1/60 first and only then invert to v = 60 cm.",
        "Signing a convex mirror as positive, which produces a nonsense real image behind the mirror; state at the top of the working that f is negative for a convex mirror and positive for a concave one.",
        "Claiming total internal reflection whenever light meets a boundary, and leaving out one of the two conditions; the ray must start in the denser medium and its angle of incidence must exceed the critical angle.",
        "Confusing the critical angle with the angle of refraction, and so writing sin c = n instead of sin c = 1/n, which gives a sine greater than one for glass and an impossible answer.",
        "Describing the image without giving all three properties; a real image must also be called inverted, and a virtual image upright, or the method marks for the description are forfeited."
      ],
      "wassceExamTips": [
        "Paper 1 objective questions are dominated by ray diagrams you must read rather than draw, so practise the sign convention until you can tell a concave from a convex mirror in one glance from the shape of the curve.",
        "In Paper 2 structured questions the mark scheme pays the method: write the formula 1/f = 1/u + 1/v with values substituted, then one line of reciprocals, then the answer; a correct number with no formula line usually scores (M1) nowhere.",
        "When asked for the critical angle, quote sin c = 1/n, substitute, leave the sine as a decimal to three significant figures, and state the angle in degrees; forgetting the degree unit costs the answer mark even when the arithmetic is right.",
        "For a ray diagram, use a ruler, arrowheads on every ray, and label the object, image, focus and centre of curvature, since the diagram carries its own marks for the correct position of the image, not for neatness alone.",
        "Learn the fixed values that save time: speed of light 3.0 x 10^8 m/s, near point 25 cm, glass n = 1.5 with c = 41.8 degrees, water n = 4/3 with c = 48.6 degrees; a quarter of Paper 1 optics is recalled from these.",
        "Paper 3 alternative-practical asks you to plan or interpret an optics practical: expect to determine the focal length of a convex lens by the distant-object method, to tabulate u and v readings, and to state that images are measured from the lens centre and parallax is removed before each reading."
      ],
      "summaryChecklist": [
        "Can I state both laws of reflection and find the angle of reflection when the angle to the surface is given?",
        "Can I draw and describe images from plane, concave and convex mirrors for objects placed at several positions?",
        "Can I use 1/f = 1/u + 1/v and m = v/u to find image position, nature and size for mirrors and lenses?",
        "Can I calculate the critical angle for glass, water and diamond and state the two conditions for total internal reflection?",
        "Can I explain how the eye focuses, name three defects of vision with their correcting lenses, and compute the magnifying power of a simple glass and a compound microscope?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-c-optics-1",
        "title": "Image Formed by a Concave Mirror",
        "problem": "A concave mirror has focal length 15 cm. An object 4 cm tall stands 20 cm from the mirror along the principal axis. Find the position, nature and size of the image, and verify the answer by the position of the object relative to F and C.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the mirror formula with the correct sign, 1/f = 1/u + 1/v, taking f = +15 cm because the mirror is concave, and u = 20 cm.",
          "Step 2 (M1): Rearrange for the reciprocal of the image distance: 1/v = 1/f - 1/u = 1/15 - 1/20.",
          "Step 3 (M1): Use the lowest common denominator of 60: 1/v = 4/60 - 3/60 = 1/60.",
          "Step 4 (A1): Invert once to get v = +60 cm, the positive sign placing the image 60 cm in front of the mirror, so it is real and can be caught on a screen.",
          "Step 5 (M1): Apply the magnification relation m = v/u = 60/20 = 3.",
          "Step 6 (A1): Image height = m x object height = 3 x 4 cm = 12 cm, and the image is real, inverted and magnified three times.",
          "Step 7 (M1): Check with the standard case: C = 2f = 30 cm, so the object at 20 cm lies between F (15 cm) and C (30 cm), which must give a real, inverted, magnified image beyond C, and 60 cm is indeed beyond 30 cm."
        ],
        "keyTakeaway": "Combine the reciprocals before inverting, then let the object's position between F and C confirm that the image is real, inverted and magnified."
      },
      {
        "id": "ex-phy-c-optics-2",
        "title": "Refractive Index, Critical Angle and Apparent Depth",
        "problem": "For crown glass of refractive index 1.50, find the speed of light in the glass and the critical angle for the glass-to-air boundary. Then find the apparent depth of a pool of real depth 2.0 m filled with water of refractive index 4/3, and state the speed of light in diamond of refractive index 2.42.",
        "stepByStepSolution": [
          "Step 1 (M1): State the definition n = c/v and rearrange it to v = c/n with c = 3.0 x 10^8 m/s.",
          "Step 2 (A1): v = 3.0 x 10^8 / 1.50 = 2.0 x 10^8 m/s for the glass, so light travels two thirds as fast in glass as in air.",
          "Step 3 (M1): For the critical angle write sin c = 1/n, which applies because the second medium is air.",
          "Step 4 (A1): sin c = 1/1.50 = 0.667, hence c = 41.8 degrees, about 42 degrees.",
          "Step 5 (M1): Interpret the result: a ray inside the glass striking the surface at more than 41.8 degrees to the normal is totally reflected and none of it escapes by refraction.",
          "Step 6 (M1): For apparent depth use real depth / apparent depth = n, so apparent depth = 2.0 / (4/3).",
          "Step 7 (A1): Apparent depth = 2.0 x 3/4 = 1.5 m, meaning the pool looks 0.5 m shallower than it truly is; light in diamond travels at 3.0 x 10^8 / 2.42 = 1.24 x 10^8 m/s, the slowest of the three media and the reason its critical angle of 24.4 degrees is so small."
        ],
        "keyTakeaway": "Three formulae carry most of the numerical optics marks: n = c/v, sin c = 1/n, and real depth over apparent depth equals n."
      }
    ],
    "quiz": {
      "id": "quiz-phy-c-light-optics",
      "topicId": "shs3-phy-t1-light-optics-instruments",
      "title": "Light and Optical Instruments Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-c-optics-1",
          "quizId": "quiz-phy-c-light-optics",
          "questionText": "A ray of light strikes a plane mirror and makes an angle of 30 degrees with the mirror surface. What is the angle of reflection?",
          "optionA": "30 degrees",
          "optionB": "60 degrees",
          "optionC": "0 degrees",
          "optionD": "120 degrees",
          "correctOption": "B",
          "subConcept": "Laws of reflection",
          "explanation": "Angles are measured to the normal, so the angle of incidence is 90 - 30 = 60 degrees and the angle of reflection equals it, 60 degrees. Choosing 30 degrees is the slip of measuring from the surface, and 0 degrees would mean the ray came back on itself along the normal.",
          "remediationTip": "Draw the normal as a dashed line first at every reflection question, then mark the angle between the ray and that line, not the mirror."
        },
        {
          "id": "q-phy-c-optics-2",
          "quizId": "quiz-phy-c-light-optics",
          "questionText": "The refractive index of crown glass is 1.50. What is the critical angle for light passing from the glass into air?",
          "optionA": "24.4 degrees",
          "optionB": "30.0 degrees",
          "optionC": "41.8 degrees",
          "optionD": "48.6 degrees",
          "correctOption": "C",
          "subConcept": "Critical angle and total internal reflection",
          "explanation": "sin c = 1/n = 1/1.50 = 0.667, which gives c = 41.8 degrees. The option 24.4 degrees is the diamond value and 48.6 degrees is the water value, so both are correct formulae applied to the wrong material.",
          "remediationTip": "Keep a three-line table of n and critical angle for glass, water and diamond and learn it as one block."
        },
        {
          "id": "q-phy-c-optics-3",
          "quizId": "quiz-phy-c-light-optics",
          "questionText": "An object is placed 20 cm from a concave mirror of focal length 15 cm. The image formed is",
          "optionA": "virtual, upright and diminished",
          "optionB": "virtual, upright and magnified",
          "optionC": "real, inverted and diminished",
          "optionD": "real, inverted and magnified",
          "correctOption": "D",
          "subConcept": "Concave mirror image cases",
          "explanation": "Here C = 2f = 30 cm, so the object at 20 cm lies between F and C, the case that gives a real, inverted, magnified image beyond C; calculation places it at 60 cm with magnification 3. An object inside F at, say, 10 cm would instead give the virtual, upright, magnified image of option B.",
          "remediationTip": "Sketch the principal axis with F and C marked, drop the object dot at the given distance, and read off the case before touching the formula."
        },
        {
          "id": "q-phy-c-optics-4",
          "quizId": "quiz-phy-c-light-optics",
          "questionText": "A swimming pool is 2.0 m deep. Viewed straight down through the water surface of refractive index 4/3, its bottom appears to be at a depth of",
          "optionA": "1.5 m",
          "optionB": "3.0 m",
          "optionC": "2.0 m",
          "optionD": "0.75 m",
          "correctOption": "A",
          "subConcept": "Refraction and apparent depth",
          "explanation": "Real depth divided by apparent depth equals n, so apparent depth = 2.0 / (4/3) = 2.0 x 3/4 = 1.5 m; the pool looks shallower, which is the danger at flooded crossings. The answer 3.0 m comes from multiplying by 4/3 instead of dividing.",
          "remediationTip": "Write the ratio real over apparent equals n before substituting, then check that the appearance is shallower, never deeper."
        },
        {
          "id": "q-phy-c-optics-5",
          "quizId": "quiz-phy-c-light-optics",
          "questionText": "A magnifying glass of focal length 5 cm is used with the final image at the near point, 25 cm. Its magnifying power is",
          "optionA": "5",
          "optionB": "125",
          "optionC": "6",
          "optionD": "4",
          "correctOption": "C",
          "subConcept": "Simple magnifier",
          "explanation": "With the image at the near point, M = 1 + D/f = 1 + 25/5 = 6. The value 5 is D/f, which applies only when the final image is at infinity for a relaxed eye, and 125 comes from multiplying 25 by 5 with no formula at all.",
          "remediationTip": "Decide where the final image is before choosing the formula: at the near point use 1 + D/f, at infinity use D/f."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t1-wave-optics-interference-diffraction",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 6,
    "title": "Wave Optics: Interference, Diffraction and Polarisation",
    "description": "Coherent sources and Young's double slit with fringe spacing, diffraction at slits and edges, the grating and the spectrum it produces, polarisation by reflection and by filter, glare on Ghanaian roads and water, and the resolution limit of optical instruments.",
    "isFreeTrial": false,
    "keyNotes": "• Interference demands coherent sources: the same frequency and a phase difference that stays constant; two separate lamps are never coherent, which is why Young fed two slits from one.\n• Bright bands fall where the path difference is a whole number of wavelengths, n lambda, and dark bands where it is an odd number of half wavelengths, (2n + 1) lambda/2.\n• Fringe spacing is x = lambda D/d for slit separation d and screen distance D, so the fringes spread out with a longer wavelength, a screen pushed further back, or slits brought closer together.\n• Worked numbers to check: lambda = 6.0 x 10^-7 m, D = 1.2 m and d = 0.6 mm give x = (6.0 x 10^-7 x 1.2)/(6.0 x 10^-4) = 1.2 mm, so the fourth bright band is 4.8 mm from the centre and eight bands span 9.6 mm.\n• Red light near 700 nm gives wider fringes than violet near 400 nm, so white light produces a white central band with coloured fringes on either side.\n• Diffraction is the spreading of waves through an aperture or round an edge, strong only when the opening is comparable with the wavelength: a note near 340 Hz has a wavelength of about 1 m and bends round a wall, while light of a few hundred nanometres casts an almost sharp shadow.\n• For a single slit the first minimum is at sin theta = lambda/a, and that spreading is the reason no lens forms a perfectly sharp point image.\n• A grating with 500 lines per mm has spacing d = 1 x 10^-3/500 = 2.0 x 10^-6 m, and maxima obey d sin theta = n lambda.\n• For lambda = 6.0 x 10^-7 m the maxima are at 17.5 degrees, 36.9 degrees and 64.2 degrees; a fourth order would need sin theta = 1.2 and so does not exist.\n• Colour separation by a grating is wide: violet at 11.5 degrees and red at 20.5 degrees in the first order, an angular spread near 9 degrees, which is why spectrometers use gratings rather than prisms.\n• Polarisation proves that light is transverse: a filter passes one plane of vibration and halves the intensity of unpolarised light, two crossed filters extinguish the beam, and sound, being longitudinal, can never be polarised.\n• Glare from water, glass, a polished vehicle roof and a wet tarred road is partly polarised horizontally, so sunglasses with a vertical transmission axis cut it; resolution improves with a larger aperture and a shorter wavelength, which is the advantage of an electron microscope.",
    "detailedNotes": {
      "overview": "Geometrical optics treats light as rays; wave optics asks what happens when two rays meet, when a ray is forced through a gap, and when its vibration is restricted to one plane. Interference, diffraction and polarisation are the three experiments that prove light is a transverse wave of extremely short wavelength, and each has a small quantitative core. Young's double slit gives bands whose spacing follows x = lambda D/d, a single slit or an edge spreads the image and so limits resolution, and a grating turns wavelength into an angle through d sin theta = n lambda. Polarisation supplies the qualitative argument that examiners ask for in words. The practical work is realistic for a Ghanaian laboratory: a laser pointer or a ray box with a coloured filter, a slit plate, a double slit, a meter rule and a wall as the screen, since fringes of a fraction of a millimetre are measurable with school apparatus if the screen is far enough away.",
      "introduction": "Demonstrate interference before any formula. Pass a laser through a single narrow slit and then through a pair of slits 0.6 mm apart, and let the class see the banded pattern on a wall several metres away, counting the bright bands and measuring the distance across eight of them with a millimetre scale. Divide that span by eight to get the spacing, then predict what happens when the screen is moved back or when a red filter replaces a green one, and test the prediction. Follow with diffraction: the same laser through one slit of adjustable width shows the central image widening as the slit closes, which makes the point that the narrower the opening the broader the pattern. End with two polarising filters and a lamp: rotate one and the field goes dark, then look through them at a polished bench top, at water in a beaker and at a window, and the change with angle is the observation that earns marks in Paper 3. Never look at the laser beam directly and never let it cross eye height.",
      "realWorldContext": "Wave optics is at work in Ghanaian traffic and trade. Glare off the wet tar of the Accra-Tema motorway just after a downpour, off the glass fronts of shops along the Oxford Street strip and off the surface of the Volta near a fishing landing stage is partly polarised, and polarised sunglasses with a vertical transmission axis cut it, which is why anglers and long-distance drivers value them. The coloured sheen on a petrol film floating in a drainage channel, the rainbow pattern seen through a thin sheet of cellophane used to wrap gifts, and the shimmer along a kente thread under a strong lamp are all interference. Gratings are the dispersing element in the spectrometers used by minerals laboratories and by water-testing teams checking treated supplies, where an unknown lamp is identified by the angles of its lines. A compact disc and the security strip on a banknote carry spacings near a micrometre and flash coloured for the same reason, and a microscope in a hospital laboratory at Cape Coast resolves better with a wide aperture and a short wavelength of immersion oil.",
      "objectives": [
        "State the conditions for observable interference and explain why two independent lamps cannot give a steady fringe pattern",
        "Use x = lambda D/d to calculate fringe spacing and the position of the nth bright or dark band in Young's experiment",
        "Describe diffraction at slits and edges, apply d sin theta = n lambda to a grating, and explain how a grating produces a spectrum",
        "Explain polarisation as evidence for the transverse nature of light, describe glare and its removal, and relate aperture and wavelength to resolution"
      ],
      "sections": [
        {
          "title": "Coherence and Young's Double Slit Interference",
          "content": "Interference can be seen only when the two sources are coherent, meaning that they emit the same frequency with a phase difference that stays constant in time. Two separate lamps or two candle flames never satisfy that condition, because the atoms of each emit in short independent bursts, and that is precisely why Young let one slit illuminate two, so that both wavefronts came from the same original disturbance. Where the path difference between the waves arriving at a point is a whole number of wavelengths they arrive in step and reinforce, giving a bright band; where it is an odd number of half wavelengths they cancel and the band is dark. For a screen a distance D away and a slit separation d small beside it, the spacing between adjacent bright bands is x = lambda D/d, a relation that shows at once how to spread the pattern: use a longer wavelength, push the screen back, or bring the slits closer. With light of 6.0 x 10^-7 m, D = 1.2 m and d = 0.6 mm the spacing is 1.2 mm, so the fourth band lies 4.8 mm from the centre and eight bands cover 9.6 mm, a distance a student can measure directly with a millimetre scale. White light gives a white central band fringed with colour because red at about 700 nm spreads wider than violet at about 400 nm.",
          "bulletPoints": [
            "Coherent sources have the same frequency and a constant phase difference; one slit feeding two achieves this.",
            "Bright bands: path difference = n lambda. Dark bands: path difference = (2n + 1) lambda/2.",
            "Fringe spacing x = lambda D/d, uniform on either side of the central bright band.",
            "For 6.0 x 10^-7 m with D = 1.2 m and d = 0.6 mm the spacing is 1.2 mm.",
            "Doubling d halves the spacing and halving d doubles it, so close slits give measurable fringes.",
            "Sound shows interference at a doorway because its wavelength is metre-scale; light needs micron-scale slits."
          ],
          "keyTakeaway": "Secure coherence first, then apply the path-difference rule; the spacing formula is only that rule written for a narrow double slit and a distant screen.",
          "realWorldExample": "A thin film of petrol on water in a drainage channel shows coloured bands because light reflected from the top of the film and light reflected from its lower surface have travelled two slightly different paths, the same two-source idea that the double slit demonstrates on a screen."
        },
        {
          "title": "Diffraction, the Grating and the Spectrum",
          "content": "Diffraction is the spreading of a wave as it passes through an aperture or grazes an edge. It is always happening and becomes obvious only when the opening is comparable with the wavelength: a note near 340 Hz has a wavelength of about a metre and bends round the wall of a compound so that a speaker at a durbar is heard behind it, while light of a few hundred nanometres crosses a doorway with almost no spreading and leaves a sharp shadow. Narrow the gap and the central image broadens, because the first minimum for a slit of width a lies at sin theta = lambda/a, and that spreading is the deep reason no lens can form a perfectly sharp point image. A grating, a plate on which several hundred parallel lines are ruled to the millimetre, turns diffraction into a measuring instrument, since principal maxima occur where d sin theta = n lambda with d the spacing of adjacent lines. A grating with 500 lines per mm has d = 1 x 10^-3/500 = 2.0 x 10^-6 m, and light of 6.0 x 10^-7 m produces maxima at 17.5 degrees, 36.9 degrees and 64.2 degrees for the first three orders, while a fourth order would require sin theta = 1.2 and therefore does not exist. Because the deviation depends on wavelength, violet at 11.5 degrees separates cleanly from red at 20.5 degrees, an angular spread near 9 degrees, wider than a prism of comparable size delivers, which is why gratings serve in spectrometers.",
          "bulletPoints": [
            "Diffraction is strongest when the aperture size is near the wavelength of the wave.",
            "The first minimum of a single slit is at sin theta = lambda/a, so a narrower slit gives a broader image.",
            "Grating equation d sin theta = n lambda, with d the distance between adjacent line centres.",
            "500 lines per mm gives d = 2.0 x 10^-6 m; for 6.0 x 10^-7 m the orders are 17.5, 36.9 and 64.2 degrees.",
            "No order exists once n lambda exceeds d, because a sine cannot pass 1.",
            "The central image is white for white light and every order beyond it is a spectrum, the higher orders overlapping."
          ],
          "keyTakeaway": "Diffraction limits an image, the grating exploits it, and the highest useful order is settled by asking whether the sine of the angle stays below one.",
          "realWorldExample": "The rainbow flash on a compact disc or on the security strip of a banknote is a reflection grating: the track spacing is of the order of a micrometre, so white light is split into orders and the colour seen depends on the angle of the eye."
        },
        {
          "title": "Polarisation, Glare and the Resolution of Instruments",
          "content": "Polarisation is the decisive evidence that light is a transverse wave. A polarising filter transmits vibrations in one plane only and absorbs the rest, so unpolarised light emerging from it carries about half its intensity, and a second filter rotated until its axis crosses the first extinguishes the beam entirely. A longitudinal wave cannot be polarised because its vibrations lie along the direction of travel and offer no preferred plane, which is why sound is never polarised while light is, and why this single observation settles the older argument about the type of wave. Reflection polarises partially: light glancing off water, glass, a polished vehicle roof or a wet tarred road returns largely polarised in the horizontal plane, and that component is glare. Sunglasses with a vertical transmission axis block it, so an angler on the Volta sees into the water instead of at the shimmer on it, and a driver on the motorway sees the road surface rather than its reflection. The same transverse behaviour bounds instruments, because a circular aperture forms a diffraction image with a bright centre ringed in dark and light. Two point sources are just resolved when the centre of one image falls on the first dark ring of the other, so resolution improves as the aperture widens and as the wavelength shortens, which explains why an oil-immersion objective outperforms a dry one and why an electron microscope with a wavelength near 10^-12 m reveals detail a light microscope never can.",
          "bulletPoints": [
            "A polarising filter passes one plane of vibration and halves the intensity of unpolarised light.",
            "Crossed filters extinguish the beam and rotation to parallel axes restores it; no longitudinal wave behaves this way.",
            "Reflection from water, glass and wet tar polarises light largely in the horizontal plane, producing glare.",
            "Vertical-axis sunglasses cut that horizontal glare, which is why anglers and drivers use them.",
            "Two sources are just resolved when the centre of one image falls on the first minimum of the other.",
            "Resolution improves with a larger aperture and a shorter wavelength, the reason electron microscopes go far beyond light microscopes."
          ],
          "keyTakeaway": "Polarisation answers what kind of wave light is, and diffraction answers how finely any instrument can show it.",
          "realWorldExample": "A technician in a water-testing laboratory in Tema identifies a lamp by setting a grating and reading the angles of the coloured orders, converting each angle to a wavelength; on a microscope in the same building, opening the iris diaphragm resolves two close lines more clearly."
        }
      ],
      "commonMistakes": [
        "Claiming that any two lamps or two torches will show interference fringes, when they are not coherent; the answer must state equal frequency and a constant phase difference, and name a single source split into two as the way to secure them.",
        "Using x = lambda D/d with the slit separation in millimetres and the screen distance in metres, so the spacing comes out a thousand times wrong; convert both to metres, substitute, then return to millimetres.",
        "Interchanging the double slit and single slit results: the fringe spacing of the double slit is x = lambda D/d, while the first minimum of a single slit comes from sin theta = lambda/a, and the two must never be quoted as one formula.",
        "For a grating, dividing the millimetre by the number of lines and then leaving the spacing in millimetres, which turns 2.0 x 10^-6 m into 2.0 x 10^-3 m and makes every sine exceed one.",
        "Explaining polarisation by saying that the filter dims or colours the light, without stating that it selects a plane of vibration and without drawing the conclusion that only a transverse wave can be polarised.",
        "Reporting a fourth-order grating maximum without checking that n lambda is smaller than d, which produces an impossible angle."
      ],
      "wassceExamTips": [
        "Paper 1 asks conceptual questions on coherence and polarisation far more often than calculations, so learn the condition as a fixed pair of phrases, same frequency with a constant phase difference, and the single line proving transverseness.",
        "In Paper 2 structured questions on the double slit, write x = lambda D/d, list the three quantities with their converted values, and give the spacing in millimetres; a lone answer of 1.2 mm with no formula line scores little.",
        "When asked what happens to the fringes if the screen moves back or the slit separation changes, answer with the proportionality and one reason, for example the spacing rises because x is inversely proportional to d, since the mark scheme pays the reason separately.",
        "For grating questions compute the sine of the angle and check that it stays below 1 before quoting an angle; state that the highest order is the greatest whole number for which n lambda is less than d.",
        "Paper 3 alternative-practical on interference expects the arrangement of source, single slit, double slit, screen and metre rule, the method of measuring the span of several fringes and dividing by the number counted to reduce error, and the precautions that the slits are parallel to the source slit and that the room is darkened.",
        "Define resolution in the language of the diffraction image, naming the centre of one image and the first minimum of the other, because that exact phrasing is what gains the mark."
      ],
      "summaryChecklist": [
        "Can I state the conditions for interference and explain why two independent lamps fail to show fringes?",
        "Can I locate bright and dark bands using the path-difference rule with lambda?",
        "Can I calculate fringe spacing with x = lambda D/d and predict the effect of changing wavelength, screen distance or slit separation?",
        "Can I use d sin theta = n lambda to find grating angles, the highest available order and the spread of a spectrum?",
        "Can I explain polarisation as proof that light is transverse, describe glare and its removal, and state what limits the resolution of an optical instrument?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-wave-optics-1",
        "title": "Fringe Spacing in Young's Double Slit Experiment",
        "problem": "In a double slit experiment the slits are 0.6 mm apart and the screen is 1.2 m from the slits. Light of wavelength 6.0 x 10^-7 m is used. Find the fringe spacing, the distance of the fourth bright band from the central band, and the spacing if the slit separation is halved.",
        "stepByStepSolution": [
          "Step 1 (M1): State the fringe-spacing relation x = lambda D/d and convert each quantity to metres: lambda = 6.0 x 10^-7 m, D = 1.2 m, d = 0.6 mm = 6.0 x 10^-4 m.",
          "Step 2 (M1): Substitute: x = (6.0 x 10^-7 x 1.2)/(6.0 x 10^-4).",
          "Step 3 (M1): Simplify the numerator first, 6.0 x 10^-7 x 1.2 = 7.2 x 10^-7, then divide by 6.0 x 10^-4.",
          "Step 4 (A1): x = 1.2 x 10^-3 m, that is 1.2 mm between adjacent bright bands.",
          "Step 5 (M1): The nth bright band lies at a distance n x from the central band, so the fourth is 4 x 1.2 mm.",
          "Step 6 (A1): 4.8 mm from the centre, and eight successive bands span 9.6 mm, the distance actually measured in the practical.",
          "Step 7 (M1): Halving the slit separation doubles the spacing because x is inversely proportional to d: x = (6.0 x 10^-7 x 1.2)/(3.0 x 10^-4).",
          "Step 8 (A1): x = 2.4 mm, so slits made closer together give fringes wide enough to measure with a school millimetre scale."
        ],
        "keyTakeaway": "Convert millimetres to metres before substituting, then remember that the nth band is n spacings from the centre and that close slits mean wide fringes."
      },
      {
        "id": "ex-phy-wave-optics-2",
        "title": "Orders Given by a Diffraction Grating",
        "problem": "A plane transmission grating has 500 lines in every millimetre and is used at normal incidence. The first-order maximum of a monochromatic lamp is observed at 17.5 degrees to the normal. Find the grating spacing, the wavelength of the lamp, and the angles of the second and third maxima. State whether a fourth maximum exists.",
        "stepByStepSolution": [
          "Step 1 (M1): The grating spacing is the width of one line interval, d = 1 x 10^-3 m/500.",
          "Step 2 (A1): d = 2.0 x 10^-6 m.",
          "Step 3 (M1): Use the grating equation d sin theta = n lambda with n = 1, so lambda = d sin 17.5 = 2.0 x 10^-6 x 0.30.",
          "Step 4 (A1): lambda = 6.0 x 10^-7 m, which is 600 nm, orange light.",
          "Step 5 (M1): For the second order sin theta = 2 lambda/d = (2 x 6.0 x 10^-7)/(2.0 x 10^-6) = 0.60.",
          "Step 6 (A1): theta = 36.9 degrees.",
          "Step 7 (M1): For the third order sin theta = 3 x 6.0 x 10^-7/(2.0 x 10^-6) = 0.90.",
          "Step 8 (A1): theta = 64.2 degrees.",
          "Step 9 (M1): A fourth order would demand sin theta = 4 x 6.0 x 10^-7/(2.0 x 10^-6) = 1.20.",
          "Step 10 (A1): Impossible, since no sine exceeds 1, so three orders appear on each side of the central image and there is no fourth."
        ],
        "keyTakeaway": "Find d from the number of lines per millimetre, then test each order by computing its sine; an order exists only while n lambda stays below d."
      }
    ],
    "quiz": {
      "id": "quiz-phy-wave-optics",
      "topicId": "shs3-phy-t1-wave-optics-interference-diffraction",
      "title": "Wave Optics Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-wave-optics-1",
          "quizId": "quiz-phy-wave-optics",
          "questionText": "Two sources will show a steady interference pattern only if they",
          "optionA": "have equal amplitudes but different frequencies",
          "optionB": "are made of the same material",
          "optionC": "travel along the same straight line",
          "optionD": "have the same frequency and a constant phase difference",
          "correctOption": "D",
          "subConcept": "Coherence",
          "explanation": "Coherence means equal frequency and a phase difference that does not drift, which is why one wavefront is split into two rather than using two separate lamps. Equal amplitudes only make the dark bands completely dark.",
          "remediationTip": "Recite the two conditions for coherence as a fixed pair, and add that a single source divided into two guarantees them."
        },
        {
          "id": "q-phy-wave-optics-2",
          "quizId": "quiz-phy-wave-optics",
          "questionText": "Light of wavelength 6.0 x 10^-7 m gives fringes 1.2 mm apart in a double slit arrangement. If the light is changed to 7.0 x 10^-7 m and the slit separation is doubled, the new fringe spacing is",
          "optionA": "0.35 mm",
          "optionB": "0.70 mm",
          "optionC": "1.4 mm",
          "optionD": "2.4 mm",
          "correctOption": "B",
          "subConcept": "Fringe spacing proportionality",
          "explanation": "Spacing is proportional to wavelength and inversely proportional to slit separation, so x = 1.2 x (7.0/6.0)/2 = 1.4/2 = 0.70 mm. Option C applies the wavelength change but forgets to halve for the doubled separation.",
          "remediationTip": "Handle one change at a time on the formula x = lambda D/d, write the intermediate value, then apply the second change."
        },
        {
          "id": "q-phy-wave-optics-3",
          "quizId": "quiz-phy-wave-optics",
          "questionText": "Diffraction spreading of light passing through a narrow gap is most noticeable when the gap is",
          "optionA": "very much wider than the wavelength of the light",
          "optionB": "about the width of a doorway",
          "optionC": "comparable in size with the wavelength of the light",
          "optionD": "coated with a polarising layer",
          "correctOption": "C",
          "subConcept": "Conditions for diffraction",
          "explanation": "Wave spreading becomes strong when the aperture is of the order of the wavelength; for visible light that means gaps near a micrometre, not doorways, which is why sound bends round a wall but light casts a sharp shadow.",
          "remediationTip": "Compare the two familiar cases in one sentence: metre-scale sound through a doorway spreads, micron-scale light through a narrow slit spreads."
        },
        {
          "id": "q-phy-wave-optics-4",
          "quizId": "quiz-phy-wave-optics",
          "questionText": "Unpolarised light passes through two polarising filters whose transmission axes are at right angles, so the field looks dark. Rotating one filter through 90 degrees makes the field",
          "optionA": "bright again, because the two axes are now parallel",
          "optionB": "darker still, because the axes are crossed twice over",
          "optionC": "unchanged, since rotation cannot affect intensity",
          "optionD": "coloured, because the filter now disperses the light",
          "correctOption": "A",
          "subConcept": "Polarisation by filters",
          "explanation": "Transmission depends on the angle between the axes: crossed axes extinguish and parallel axes transmit, so a 90 degree rotation restores the bright field. A filter selects a plane of vibration, it does not split light into colours.",
          "remediationTip": "Sketch two arrows for the axes at 90 degrees and then at 0 degrees, and link each picture to dark or bright."
        },
        {
          "id": "q-phy-wave-optics-5",
          "quizId": "quiz-phy-wave-optics",
          "questionText": "A grating with 500 lines per millimetre is used with light of wavelength 6.0 x 10^-7 m. The highest-order maximum that can be observed is the",
          "optionA": "second",
          "optionB": "fourth",
          "optionC": "fifth",
          "optionD": "third",
          "correctOption": "D",
          "subConcept": "Maximum grating order",
          "explanation": "The spacing is 2.0 x 10^-6 m, so sin theta = n lambda/d gives 0.30, 0.60 and 0.90 for n = 1, 2 and 3, but 1.20 for n = 4, which is impossible. The third order is therefore the last observable one.",
          "remediationTip": "Divide d by lambda and keep only the whole part; a ratio of 3.33 means the highest order is the third."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t1-mechanics-of-materials-stress-strain",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 7,
    "title": "Mechanics of Materials: Stress, Strain and Structural Failure",
    "description": "Stress and strain definitions, Young modulus from the wire experiment, elastic and plastic behaviour with their limits, the safety factor and working loads, compression of columns and bending of beams, reinforcement in concrete blocks, and the creep, fatigue and scaffold failures seen on Ghanaian building sites.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Stress is force per unit area, F/A, in pascals; strain is the extension divided by the original length and has no unit, because a length is divided by a length.\n• Young modulus E = stress/strain, measured in pascals, belongs to the material: changing the length, the thickness or the load of a steel wire does not change E.\n• Wire experiment numbers: a 50 N load on a wire of area 0.50 mm squared, that is 0.50 x 10^-6 m squared, with 2.0 m unsupported gives a stress of 1.0 x 10^8 Pa, and a 1.0 mm extension gives a strain of 5.0 x 10^-4, so E = 2.0 x 10^11 Pa, the value for steel.\n• Since extension = FL/(AE), doubling the load within the elastic limit doubles the extension and doubling the area halves it.\n• The straight part of the load-extension graph ends at the limit of proportionality; recovery is complete up to the elastic limit and permanent beyond it, and the area under the graph is the strain energy stored.\n• Ductile materials such as mild steel yield and neck with warning; brittle materials such as glass, cast iron and a dry concrete block snap with almost no plastic stage; rubber is highly elastic but wastes energy in a hysteresis loop.\n• Safety factor = strength/working stress. Mild steel of yield stress 2.5 x 10^8 Pa with a factor of 5 works at 5.0 x 10^7 Pa, so a tie rod of area 1.0 x 10^-4 m squared may carry 5000 N, about 500 kg at g = 10 m/s per second.\n• A block pillar of section 0.20 m by 0.20 m has an area of 0.04 m squared; concrete of crushing strength 3.0 x 10^6 Pa with a safety factor of 3 gives a working stress of 1.0 x 10^6 Pa and a load of 4.0 x 10^4 N, about 4000 kg, while its own 3.0 m height weighs only 2880 N, roughly 7 percent of that load.\n• Bending puts one face of a beam in tension and the other in compression with a neutral surface between, and the central sag varies with the cube of the span and inversely with the cube of the depth, so doubling the depth cuts the sag by eight while doubling the span multiplies it by eight.\n• Concrete resists compression well and tension barely at all, so steel bars go where tension falls: near the soffit of a simply supported beam or lintel, and near the top of a cantilever.\n• Creep is the slow growth of strain under a steady load, visible in nylon rope, a tarpaulin line and timber that sags over years; fatigue is failure below the static strength after repeated loading, as in an axle, a chain link or a dented scaffold tube.\n• On a site a dropped block, a dented scaffold tube or heavily rusted rebar has a smaller sound area, and stress must be computed on the area that remains intact, not on the nominal one.",
    "detailedNotes": {
      "overview": "This topic moves from the particle mechanics of SHS 2 to real bodies that stretch, sag and break. Stress measures how hard a force pulls on each square metre of a material, strain records the fractional stretch that results, and the Young modulus links the two for a material behaving elastically. From those three quantities follow the practical rules that keep a building standing: the elastic limit beyond which deformation is permanent, the safety factor that keeps working stresses far below the strength, and the different failure modes of a column in compression, a beam in bending, a rope in creep and an axle in fatigue. The numerical work is short and entirely checkable, since it uses stress = F/A, strain = extension/original length and E = stress/strain, but the qualitative marks matter just as much, because examiners ask for the definitions with their units, the shape of the load-extension graph, and the reason reinforcement is placed where it is.",
      "introduction": "Open with the wire experiment on a tall wall or a bench: clamp one end of a two-metre wire, hang a slotted mass holder from the other, and read the small extension against a millimetre scale using a travelling microscope, with a second scale fixed behind the marker. Add loads in equal steps, tabulate load and extension, plot them and note the straight line through the origin; then unload and show that the readings return, which demonstrates elasticity. Compute stress and strain for one step and hence E, converting square millimetres to square metres carefully. Compare materials side by side, a copper wire, a steel wire and a rubber band under the same load, and let students sketch the three different graphs. Finish with samples that fail: a chalk stick or a dry concrete block loaded to fracture in bending, a scaffold tube with a dent inspected on site, and a strip of rusted rebar whose measured area is smaller than its nominal one. Wear eye protection and keep a foot rest under the hanger, because a wire that snaps recoils.",
      "realWorldContext": "Ghanaian building work supplies the cases. A block-moulding crew at Kasoa or Ashaiman presses sand-cement blocks whose crushing strength decides how many storeys a pillar may carry, and a block dropped during turning hides a crack that reduces its sound area. Roof carpenters at Suame Magazine choose spans and depths of timber members by eye, which is the bending rule applied informally: a shallow purlin over a long span sags and the sheeting ponds water. Scaffolds of bamboo or steel tube on a site in East Legon fail where a tube has been struck and dented or a clamp carries twice the intended load, and the working load of a plank is settled by moments. Nylon rope on fishing boats at Tema holds a steady load for weeks and stretches slowly, the evidence of creep, while an axle at a garaging yard in Kumasi breaks at a stress below its static strength because of fatigue from repeated loading. The professional bodies that regulate engineering design require a stated factor of safety in every calculation, and a foreman who asks why a rod thicker than obviously needed is specified is being given this topic in one sentence.",
      "objectives": [
        "Define stress, strain and the Young modulus with their units and calculate all three from wire experiment readings",
        "Describe elastic and plastic behaviour with the limit of proportionality, the elastic limit and hysteresis, and interpret a load-extension graph",
        "Apply a safety factor to a strength to find the working stress, the greatest safe load and the equivalent mass",
        "Explain how columns fail by crushing, how beams fail by bending, why concrete is reinforced where tension falls, and how creep and fatigue cause failure"
      ],
      "sections": [
        {
          "title": "Stress, Strain and the Young Modulus from the Wire Experiment",
          "content": "A force spread over an area is a stress, defined as F/A and measured in pascals, one pascal being one newton per square metre, while the fractional change of length is the strain, extension divided by original length, a pure number with no unit because a length is divided by a length. Within the limit of proportionality stress is directly proportional to strain, and the constant of proportionality is the Young modulus, E = stress/strain, which carries the unit of stress and belongs to the material rather than to the specimen, so a long thin wire and a short thick rod of the same steel give the same value. The school method fixes one end of a long wire, loads the other in equal steps and reads the small extension with a travelling microscope or an optical lever; eye protection matters and a soft rest below the hanger matters, because a snapping wire recoils violently. Take a 50 N load on a wire of cross-sectional area 0.50 mm squared, that is 0.50 x 10^-6 m squared, with 2.0 m unsupported: the stress is 1.0 x 10^8 Pa, an extension of 1.0 mm gives a strain of 5.0 x 10^-4, and E follows as 2.0 x 10^11 Pa, the accepted figure for steel. Since extension = FL/(AE), doubling the area halves the extension and doubling the load doubles it, and the area under the load-extension graph is the strain energy stored in the stretched wire.",
          "bulletPoints": [
            "Stress = F/A in pascals; strain = extension/original length and has no unit.",
            "E = stress/strain = FL/(A x extension), and it is a property of the material alone.",
            "50 N on 0.50 x 10^-6 m squared gives 1.0 x 10^8 Pa; a 1.0 mm extension of 2.0 m gives 5.0 x 10^-4.",
            "For that wire E = 2.0 x 10^11 Pa, the standard value for steel.",
            "Convert square millimetres to square metres by multiplying by 10^-6 before dividing.",
            "The area under the load-extension graph is the work done on the wire, stored as strain energy."
          ],
          "keyTakeaway": "Compute stress and strain separately and then divide; an answer for steel that does not land near 2 x 10^11 Pa means a conversion has been missed.",
          "realWorldExample": "A fitter at Suame Magazine lifts a 50 kg engine block on a sling of small steel section and worries about stretching; the arithmetic above shows that a wire of that area at 1.0 x 10^8 Pa is safely elastic, lengthening only a millimetre over two metres."
        },
        {
          "title": "Elastic and Plastic Behaviour, the Safety Factor and Working Loads",
          "content": "Elastic behaviour means that a body returns to its original dimensions when the load is removed, and this holds right up to the elastic limit, with the proportional part of the graph ending earlier at the limit of proportionality. Past the elastic limit the material flows plastically and the deformation is permanent; mild steel shows a clear yield point at which extension grows with almost no additional load, then work-hardens and finally necks before breaking, a ductile sequence that warns the user. Brittle substances such as glass, cast iron and a dry sand-cement block break just after the elastic stage with no neck and little notice, while rubber stretches enormously but returns along a different path, the area between the loading and unloading curves being energy wasted as heat. Because a structure must never approach the stress at which it fails, a safety factor divides the relevant strength to give the working stress, and the working load is that stress multiplied by the area. Mild steel with a yield stress of 2.5 x 10^8 Pa and a safety factor of 5 works at 5.0 x 10^7 Pa, so a tie rod of cross-sectional area 1.0 x 10^-4 m squared may carry 5.0 x 10^7 x 1.0 x 10^-4 = 5000 N, a mass of about 500 kg when g is taken as 10 m/s per second. Any rod specified for a heavier duty must be thicker, because the working stress is fixed by the material and the chosen factor.",
          "bulletPoints": [
            "The limit of proportionality ends the straight line; the elastic limit ends full recovery, and the two differ.",
            "Plastic flow, yielding and necking are the ductile sequence and they warn before failure.",
            "Brittle fracture in glass, cast iron or a dry block arrives with almost no warning.",
            "Rubber is elastic over a great stretch but wastes energy in the hysteresis loop between loading and unloading.",
            "Working stress = strength/safety factor, and working load = working stress x area.",
            "A rod of area 1.0 x 10^-4 m squared at a safe stress of 5.0 x 10^7 Pa carries 5000 N, about 500 kg."
          ],
          "keyTakeaway": "The safety factor is a deliberate sacrifice of strength bought for certainty, so the working stress is always the strength divided by a number greater than one.",
          "realWorldExample": "A site supplier in Kumasi quotes both the breaking load and the safe working load of chain links and lifting hooks, and the ratio between the two, often near five, is the safety factor applied to the yield stress of the steel."
        },
        {
          "title": "Columns, Beams, Reinforcement and Real Structural Failure",
          "content": "A short member loaded along its axis fails by crushing, a slender one by buckling, and a member loaded across it by bending; each is handled differently. Crushing is a plain stress calculation: a block pillar of section 0.20 m by 0.20 m has an area of 0.04 m squared, and concrete with a crushing strength of 3.0 x 10^6 Pa used with a safety factor of 3 gives a working stress of 1.0 x 10^6 Pa, so the pillar may carry 4.0 x 10^4 N, roughly 4000 kg, while its own three metres of height weigh only 2880 N, about 7 percent of that load. Bending is subtler, because the load puts the convex face in tension and the concave face in compression with a neutral surface between where the stress is zero, and the central sag of a beam grows with the cube of the span and falls with the cube of the depth, so doubling the depth of a lintel cuts the deflection by eight while doubling the span multiplies it by eight. Since concrete resists compression well and tension hardly at all, steel bars are placed where tension appears, near the soffit of a simply supported beam and near the top of a cantilever, and a lintel cast without bars cracks across its middle under a floor load. Two slow mechanisms complete the picture: creep is the gradual increase of strain under a steady load, obvious in nylon rope, a tarpaulin line and timber that sags over years, and fatigue is failure at stresses far below the static strength after many repeated loadings, as in a vehicle axle, a chain link or a scaffold tube that has been struck and dented.",
          "bulletPoints": [
            "Crushing load = working compressive stress x area; a slender column may buckle at a smaller load.",
            "A 0.20 m by 0.20 m pillar of concrete at 1.0 x 10^6 Pa working stress carries 4.0 x 10^4 N.",
            "Bending puts one face in tension and the other in compression, with a neutral surface between them.",
            "Sag goes with the cube of the span and the cube of the depth, so depth is the most efficient remedy.",
            "Reinforcement goes where tension falls: the soffit of a supported beam, the top of a cantilever.",
            "Creep grows under steady load and fatigue under repeated load, and both can fail below the static strength.",
            "Rust, dents and dropped blocks reduce the sound area, so the real stress is higher than the nominal one."
          ],
          "keyTakeaway": "Identify the failure mode first, crushing for a pillar, bending for a lintel, creep for a rope under load and fatigue for an axle, then apply the matching calculation.",
          "realWorldExample": "A single-storey building at Sunyani shows a crack running down the middle of a window lintel and another at the top of a cantilevered balcony slab, both exactly where the tension lies because the steel was set on the wrong face when the blocks were cast."
        }
      ],
      "commonMistakes": [
        "Reporting strain with a unit such as metres or millimetres, when strain is a ratio of two lengths and is dimensionless; write it as a pure number, commonly in the form 5.0 x 10^-4.",
        "Failing to convert square millimetres to square metres, so an area of 0.50 mm squared is entered as 0.50 x 10^-3 m squared and the stress comes out a thousand times too small.",
        "Believing that a thicker or longer wire has a different Young modulus, when E belongs to the material; only the extension changes with dimensions, according to extension = FL/(AE).",
        "Calling the elastic limit the same point as the limit of proportionality, when the first marks the end of full recovery and the second the end of the straight line, and the two are distinct on the graph.",
        "Using the ultimate or breaking strength as the working stress, which ignores the safety factor entirely and designs a member that may fail without warning under normal load.",
        "Placing reinforcement near the top of a simply supported lintel, where the concrete is in compression, instead of near the soffit where the tension opens the crack."
      ],
      "wassceExamTips": [
        "Paper 1 tests the definitions with units, so know that stress is in pascals, strain has no unit and E is in pascals; a question that asks for a unitless quantity is nearly always strain.",
        "In Paper 2 write the two definitions before the arithmetic, stress = F/A and strain = extension/original length, then substitute with converted values, since the formula lines carry the method marks even when the final figure slips.",
        "Check the order of magnitude of any Young modulus you calculate: steel near 2 x 10^11 Pa, brass and aluminium nearer 1 x 10^11 Pa, and an answer of 10^8 Pa points to an area left in square millimetres.",
        "For a safety-factor question, work from strength down to working stress and only then to load, and state in words that the working load uses the sound area of the member, not the nominal area, if rust or a dent is mentioned.",
        "Paper 3 alternative-practical on a wire expects the apparatus list of a long wire, clamps, slotted masses, a metre rule and a travelling microscope or optical lever, the reason for loading and unloading to prove elasticity, and the precaution that the load is added gently and the scale read with the eye perpendicular to avoid parallax.",
        "When asked why a beam is made deeper rather than wider, answer with the cubic dependence of sag on depth and give the numerical factor of eight, because that comparison is marked separately."
      ],
      "summaryChecklist": [
        "Can I define stress, strain and the Young modulus and state the unit of each, including the unitless one?",
        "Can I process wire experiment readings into stress, strain and E, converting square millimetres correctly?",
        "Can I describe the load-extension graph for a ductile metal, for rubber and for a brittle material, naming both limits and the stored energy?",
        "Can I apply a safety factor to find the working stress, the greatest safe load and the equivalent mass for a rod or a pillar?",
        "Can I explain crushing in a column, tension and compression in a bent beam, the position of reinforcement, and the difference between creep and fatigue?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-stress-strain-1",
        "title": "Young Modulus of a Steel Wire from Experiment Readings",
        "problem": "A wire of unsupported length 2.0 m and cross-sectional area 0.50 mm squared extends by 1.0 mm when a load of 5 kg hangs from it. Taking g = 10 m/s per second, find the stress, the strain and the Young modulus of the material, and state the extension when the load is raised to 100 N while the wire is still elastic.",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the area to square metres: 0.50 mm squared = 0.50 x 10^-6 m squared.",
          "Step 2 (M1): Find the force from the mass, F = mg = 5 x 10 = 50 N.",
          "Step 3 (M1): Apply the definition of stress, stress = F/A = 50/(0.50 x 10^-6).",
          "Step 4 (A1): Stress = 1.0 x 10^8 Pa.",
          "Step 5 (M1): Apply the definition of strain, strain = extension/original length = (1.0 x 10^-3)/2.0, both lengths in metres.",
          "Step 6 (A1): Strain = 5.0 x 10^-4, a pure number with no unit.",
          "Step 7 (M1): Write E = stress/strain = (1.0 x 10^8)/(5.0 x 10^-4).",
          "Step 8 (A1): E = 2.0 x 10^11 Pa, the accepted value for steel.",
          "Step 9 (M1): Within the elastic limit extension is proportional to load, so doubling the force from 50 N to 100 N doubles the extension.",
          "Step 10 (A1): Extension = 2.0 mm, and E is unchanged because it depends on the material and not on the load, the length or the area."
        ],
        "keyTakeaway": "Convert the area first, find stress and strain separately, divide to get E, and check that the answer sits near 2 x 10^11 Pa for steel."
      },
      {
        "id": "ex-phy-stress-strain-2",
        "title": "Working Loads from a Safety Factor for a Rod and a Block Pillar",
        "problem": "A mild steel tie rod of cross-sectional area 1.0 x 10^-4 m squared has a yield stress of 2.5 x 10^8 Pa and is used with a safety factor of 5. Find the greatest stress it may carry, the greatest load, and the equivalent mass. A building-block pillar of section 0.20 m by 0.20 m and height 3.0 m is made of concrete of crushing strength 3.0 x 10^6 Pa with a safety factor of 3; find its working load and compare it with the weight of the pillar itself, taking the density of concrete as 2400 kg per cubic metre and g = 10 m/s per second.",
        "stepByStepSolution": [
          "Step 1 (M1): Working stress = yield stress/safety factor = (2.5 x 10^8)/5.",
          "Step 2 (A1): 5.0 x 10^7 Pa.",
          "Step 3 (M1): Working load = working stress x area = 5.0 x 10^7 x 1.0 x 10^-4.",
          "Step 4 (A1): 5000 N, equivalent to a mass of 5000/10 = 500 kg.",
          "Step 5 (M1): For the pillar, area = 0.20 x 0.20 = 0.04 m squared and working stress = (3.0 x 10^6)/3 = 1.0 x 10^6 Pa.",
          "Step 6 (A1): Working load = 1.0 x 10^6 x 0.04 = 4.0 x 10^4 N, about 4000 kg.",
          "Step 7 (M1): The mass of the pillar itself = volume x density = 0.04 x 3.0 x 2400 = 288 kg, so its weight is 288 x 10 = 2880 N.",
          "Step 8 (A1): The self weight is 2880/(4.0 x 10^4) x 100 = about 7 percent of the working load, so a short column is limited by the load it carries rather than by its own mass, provided the load is centred and the block is sound."
        ],
        "keyTakeaway": "Reduce the strength by the safety factor, multiply by the sound area to get the load, and compare a column's self weight with that figure before declaring it safe."
      }
    ],
    "quiz": {
      "id": "quiz-phy-stress-strain",
      "topicId": "shs3-phy-t1-mechanics-of-materials-stress-strain",
      "title": "Stress, Strain and Structural Failure Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-stress-strain-1",
          "quizId": "quiz-phy-stress-strain",
          "questionText": "Strain is defined as",
          "optionA": "the force applied per unit area",
          "optionB": "the extension divided by the original length",
          "optionC": "the original length divided by the extension",
          "optionD": "the energy stored per unit volume",
          "correctOption": "B",
          "subConcept": "Definition of strain",
          "explanation": "Strain is the fractional change of dimension, extension over original length, and is therefore a pure number. Option A defines stress, and option D is the strain energy per volume, the area under a stress-strain graph.",
          "remediationTip": "Keep the pair together in memory: stress is force over area, strain is extension over length."
        },
        {
          "id": "q-phy-stress-strain-2",
          "quizId": "quiz-phy-stress-strain",
          "questionText": "A wire extends by 0.4 mm under a load of 20 N. Within the elastic limit, the extension under a 40 N load on the same wire is",
          "optionA": "0.2 mm",
          "optionB": "0.4 mm",
          "optionC": "0.8 mm",
          "optionD": "1.6 mm",
          "correctOption": "C",
          "subConcept": "Proportionality of load and extension",
          "explanation": "Below the limit of proportionality extension is directly proportional to load, so doubling the force from 20 N to 40 N doubles the extension from 0.4 mm to 0.8 mm. Option D squares the factor, which belongs to energy rather than extension.",
          "remediationTip": "Sketch the straight part of the load-extension graph through the origin and read the doubled load off it before answering."
        },
        {
          "id": "q-phy-stress-strain-3",
          "quizId": "quiz-phy-stress-strain",
          "questionText": "The Young modulus of a wire depends on",
          "optionA": "the nature of the material and its temperature",
          "optionB": "the length of the wire",
          "optionC": "the load applied to it",
          "optionD": "the cross-sectional area of the wire",
          "correctOption": "A",
          "subConcept": "Nature of the Young modulus",
          "explanation": "E is a material constant, so length, area and load change the extension according to extension = FL/(AE) but leave E untouched. Temperature does affect it, which is why a wire measured in a hot afternoon workshop reads slightly low.",
          "remediationTip": "Rearrange to extension = FL/(AE) and see that length and area sit with the extension, not with E."
        },
        {
          "id": "q-phy-stress-strain-4",
          "quizId": "quiz-phy-stress-strain",
          "questionText": "In a simply supported concrete lintel carrying a floor load, the steel reinforcement is placed",
          "optionA": "near the top face, because concrete resists tension well",
          "optionB": "exactly at the mid-depth of the section",
          "optionC": "along the two ends only, where the bearings are",
          "optionD": "near the bottom face, where bending puts the material in tension",
          "correctOption": "D",
          "subConcept": "Reinforcement and bending tension",
          "explanation": "A supported beam sags, so its lower face is stretched and its upper face is compressed; concrete is weak in tension and must be helped by steel near the soffit. In a cantilever the situation reverses and the bars go near the top.",
          "remediationTip": "Draw the sagging beam, mark the longer bottom fibre in red, and place the bars there every time."
        },
        {
          "id": "q-phy-stress-strain-5",
          "quizId": "quiz-phy-stress-strain",
          "questionText": "A rod 2.0 m long and of cross-sectional area 5.0 x 10^-5 m squared has a Young modulus of 1.0 x 10^11 Pa. Its extension under a 5000 N pull is",
          "optionA": "0.2 mm",
          "optionB": "2.0 mm",
          "optionC": "20 mm",
          "optionD": "200 mm",
          "correctOption": "B",
          "subConcept": "Extension from the Young modulus",
          "explanation": "Extension = FL/(AE) = (5000 x 2.0)/(5.0 x 10^-5 x 1.0 x 10^11) = 10 000/(5.0 x 10^6) = 2.0 x 10^-3 m, that is 2.0 mm. Option C follows from placing the decimal point wrongly in the product AE.",
          "remediationTip": "Work the denominator separately as a power of ten, then divide, and finally convert metres to millimetres."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t2-electrostatics-current-electricity",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 2,
    "title": "Electrostatics and Current Electricity",
    "description": "Charging by friction, contact and induction, the gold-leaf electroscope, Coulomb's law and electric field lines, capacitance with capacitors in series and parallel, current, e.m.f., potential difference and resistance, Ohm's law, resistor networks, electrical power and the household cost of energy in kilowatt-hours.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• There are two kinds of charge, positive and negative; like charges repel and unlike charges attract, and charge is conserved, so rubbing never creates charge but only transfers electrons from one body to the other.\n• Charging by friction: an ebonite or polythene rod rubbed with a dry cloth gains electrons and becomes negative, while a zinc or glass rod rubbed with silk loses electrons and becomes positive.\n• Charging by conduction touches a charged rod to a neutral conductor and shares the charge, leaving the same sign as the rod; charging by induction needs no contact: bring the rod near, earth the far side, remove the earth, then remove the rod, and the body is left with the opposite sign.\n• The gold-leaf electroscope detects charge, shows its magnitude by the divergence of the leaf, and with a previously known charge shows its sign; charging the cap by induction leaves the leaves diverged with the charge of the inducing rod.\n• Electric field lines run from positive to negative, never cross one another, leave a conductor surface at right angles, and crowd near sharp points, which is why a lightning conductor is a pointed rod above the roof.\n• Coulomb's law: F = k Q1 Q2 / d^2 with k = 9 x 10^9 N m^2 C^2, so the force is along the line of centres and is repulsive for like charges; doubling the separation divides the force by four.\n• Worked: two point charges of 2 microcoulomb and 3 microcoulomb 0.30 m apart in air give F = 9 x 10^9 x 2 x 10^-6 x 3 x 10^-6 / (0.30)^2 = 0.054/0.09 = 0.60 N.\n• Capacitance is charge per volt, C = Q/V, measured in farads; 1 microfarad is 10^-6 farad, and a capacitor stores energy in the field between its plates.\n• Capacitors in parallel simply add, C = C1 + C2, so 4 microfarad with 6 microfarad gives 10 microfarad; in series they combine as 1/C = 1/C1 + 1/C2, giving 2.4 microfarad for the same pair.\n• In a series capacitor chain every capacitor holds the same charge, while in parallel each carries the full voltage, the exact opposite of the resistor rules and a favourite Paper 1 trap.\n• Current is the rate of flow of charge, I = Q/t in amperes: 0.50 A flowing for 2 minutes, that is 120 s, carries Q = 0.50 x 120 = 60 C, which is 60 / (1.6 x 10^-19) = 3.75 x 10^20 electrons.\n• Conventional current is taken from the positive terminal to the negative through the external circuit, while the electrons in the metal drift the opposite way from negative to positive; an ammeter is always in series and a voltmeter always in parallel.\n• E.m.f. of a cell is the energy per charge delivered round the whole circuit, potential difference is the energy per charge used between two points; both are measured in volts where 1 V = 1 J/C, and e.m.f. exceeds the terminal p.d. whenever current is drawn because of the internal resistance.\n• Ohm's law states that the current through a conductor is proportional to the p.d. across it at constant temperature, V = IR; a metal wire at low current gives a straight line through the origin on an I-V graph, while a filament lamp curves because its resistance rises as it heats.\n• Resistance depends on the material and the shape, R = rho L / A: doubling the length doubles the resistance, doubling the diameter multiplies the cross-sectional area by four and cuts the resistance to a quarter, and heating a metal raises its resistance.\n• Resistors in series add, R = R1 + R2 + R3, so 3, 4 and 5 ohm give 12 ohm; in parallel 1/R = 1/R1 + 1/R2, so 6 ohm with 12 ohm gives 4 ohm, always less than the smallest branch.\n• A worked network: a 5 ohm resistor in series with parallel branches of 20, 30 and 60 ohm across a 15 V cell gives 10 ohm for the parallel group, 15 ohm in total, 1.0 A from the cell, 10 V across the group, and branch currents 0.50 A, 0.33 A and 0.17 A that add back to 1.0 A.\n• Electrical power is P = VI = I^2 R = V^2/R in watts, energy is E = Pt, and the commercial unit is the kilowatt-hour, the energy taken by a 1 kW device in one hour, so 1 kWh = 1000 x 3600 = 3.6 x 10^6 J.\n• ECG bills in units of energy: a 1.5 kW pressing iron used 2 h a day for 30 days takes 90 kWh and a 100 W lamp lit 10 h a night takes 30 kWh, so 120 kWh at GH¢0.50 per unit costs GH¢60.00 for the month.\n• Saving on lighting: that same lamp replaced by a 20 W LED uses 0.020 x 10 x 30 = 6 kWh, a cut of 24 kWh, which at GH¢0.50 per kWh keeps GH¢12.00 a month in the pocket.",
    "detailedNotes": {
      "overview": "This topic joins the static electricity of charges at rest to the flowing electricity that runs through every Ghanaian compound. You will charge bodies by friction, contact and induction and prove the charge with a gold-leaf electroscope; state Coulomb's law and use it to find a force in newtons; define capacitance and combine capacitors in series and parallel; and then move to current electricity with the vocabulary of charge, current, e.m.f., potential difference and resistance. The practical core is Ohm's law, V = IR, and the two combination rules for resistors, followed by power, P = VI, and the kilowatt-hour costing that appears in every WAEC structured question about a household bill. Almost every number here can be checked by a single multiplication, so careless unit conversion rather than weak theory is what loses marks.",
      "introduction": "Work in two laboratories and one ledger. In the first, use the ebonite rod, the silk, the gold-leaf electroscope and a few strips of tape to charge bodies by all three methods, recording the leaf divergence each time and explaining it by electron transfer. In the second, build the circuit on a breadboard with two cells, a rheostat, an ammeter in series and a voltmeter in parallel, take six pairs of readings for current and p.d. across a constantan wire, plot them, and measure the slope to find resistance; then repeat for a torch bulb and watch the line bend. In the ledger, take the tariff from an ECG or prepaid card statement, list the appliances in your own home with their wattages and hours, and compute the monthly units and cedis. Only when the three agree does the topic belong to you.",
      "realWorldContext": "Every student already handles this topic. A phone charged through a mobile-money agent's kiosk in Tamale stores energy measured in the same kilowatt-hours that appear on the ECG bill, and a prepaid card is simply a meter that counts kWh in advance. On the Volta and Akosombo dams, generated energy is sold in units, and the 200 W, 12 V solar panel on a roof in the Northern Region fills a battery that later runs a fan and a television; the arithmetic of hours times watts decides whether the battery survives the night. Pressing cloth for market at a shop in Kumasi means running a 1.2 kW iron for twenty minutes many times a day, and an owner who understands kWh knows the true cost of that pressing. In the senior school laboratory the ebonite rod, the electroscope and the leakage of charge through damp air are daily facts, because in the rainy season at Cape Coast static experiments often fail and must be repeated with a heated rod and dry cloth, a limit of school equipment every examiner expects you to name.",
      "objectives": [
        "Describe charging by friction, conduction and induction and interpret the divergence of a gold-leaf electroscope in terms of electron transfer",
        "State Coulomb's law, draw electric field lines for two charges, and calculate the force between two point charges",
        "Define capacitance as C = Q/V and find the total capacitance of combinations of capacitors in series and in parallel",
        "Define current, e.m.f., potential difference and resistance, and verify Ohm's law from a table of readings",
        "Reduce series and parallel resistor networks and calculate power, energy in kilowatt-hours and the cost of that energy at a given tariff"
      ],
      "sections": [
        {
          "title": "Charging Methods and the Gold-Leaf Electroscope",
          "content": "Charge comes in two kinds and is never created or destroyed, only moved. Friction separates electrons: rub an ebonite or polythene rod with a dry cloth and the rod grabs electrons from the cloth, becoming negative while the cloth is left positive; rub a glass or zinc rod with silk and the rod gives up electrons and becomes positive. Conduction is charging by contact: a negative rod touched to a neutral metal disc pushes electrons into it, so the body leaves with the same sign as the rod and the charge is shared between them. Induction is charging without touching, and the order of the four steps is examinable: bring the negative rod near the cap of a clean insulated conductor, connect the far side to earth with a finger so electrons repelled by the rod escape to ground, remove the earth connection while the rod is still in place, and only then withdraw the rod; the conductor is left positive, the opposite sign to the inducing rod, because the charge that leaves cannot return. The gold-leaf electroscope makes all this visible. A charged body touching the cap sends charge onto the leaf and the plate; since both carry the same sign they repel and the leaf rises, and the greater the charge the wider the divergence. To find the sign of an unknown charge, first charge the electroscope with a rod of known sign, then bring the unknown body near the cap: if divergence increases the body carries the same sign, if it falls the sign is opposite. Damp air, salty sea air at Cape Coast and greasy fingers all leak charge away quickly, so a school electroscope must be dried and its ebonite comb wiped before any demonstration works.",
          "bulletPoints": [
            "Friction moves electrons: polythene with a cloth becomes negative, glass with silk becomes positive.",
            "Conduction gives the body the same sign as the rod; induction gives the opposite sign.",
            "Induction order: rod near, earth applied, earth removed, rod withdrawn; reversing the last two steps loses the charge.",
            "The electroscope leaf diverges because leaf and plate carry like charge and repel.",
            "Damp air leaks charge to earth, which is why static experiments fail during the rains unless the rod is dried."
          ],
          "keyTakeaway": "Charge is only ever transferred, and in induction the earth must be removed before the rod, not after.",
          "realWorldExample": "A woman weaving baskets in Bolgatanga who lifts a sheet of thin polythene packaging in the dry harmattan sees it cling to her hand and crackle; that is charge by friction followed by attraction by induction in the neutral sheet, and in the rainy season the same trick fails because the moisture conducts the charge away."
        },
        {
          "title": "The Electric Field and Coulomb's Law",
          "content": "A charge alters the space around it, and that region of influence is the electric field, defined as the force per unit charge placed at a point. Field lines are drawn as the path a positive test charge would take, so they leave positive charges and enter negative ones; they never cross, because a crossing would mean the test charge felt two forces at one point; they meet a conducting surface at right angles; and they crowd near sharp points where the field is strongest. That crowding explains the lightning conductor: a pointed copper rod bonded to earth above a building offers the field a place to discharge quietly instead of letting it build until a stepped leader tears through the air. The quantitative law is Coulomb's, F = k Q1 Q2 / d^2, with k = 9 x 10^9 N m^2 C^-2 for media like air. The force acts along the line of centres, is repulsive for like charges and attractive for unlike ones, and it follows an inverse square: doubling the distance divides the force by four, tripling divides it by nine. Worked through, two small charges of 2 microcoulomb and 3 microcoulomb placed 0.30 m apart in air give F = 9 x 10^9 x 2 x 10^-6 x 3 x 10^-6 / (0.30)^2 = 0.054/0.09 = 0.60 N, and the same pair at 0.60 m would give 0.15 N. Because the charges in the formula are in coulombs, every microcoulomb in a question must be multiplied by 10^-6 before it is squared into the working, and this single conversion carries more lost marks than the law itself.",
          "bulletPoints": [
            "Field direction is the force on a positive test charge, so lines run from positive to negative.",
            "Field lines never cross, meet conductors normally, and crowd near sharp points.",
            "Coulomb's law F = k Q1 Q2 / d^2 with k = 9 x 10^9 N m^2 C^-2 in air.",
            "Inverse square: double the distance and the force becomes one quarter of its value.",
            "Convert microcoulomb to coulomb by multiplying by 10^-6 before substituting."
          ],
          "keyTakeaway": "Square the distance, convert the microcoulombs, and the force comes out in newtons every time.",
          "realWorldExample": "A pointed copper lightning conductor on the roof of a block of classrooms in Takoradi is bonded straight to an earth rod, so the strong field at the point bleeds charge away harmlessly instead of letting it build up until a storm discharge travels through the wiring of the ICT room."
        },
        {
          "title": "Capacitance and Capacitors in Series and Parallel",
          "content": "A capacitor is two conductors separated by an insulator, and it stores charge and energy in the field between them. Capacitance is the charge stored per volt applied, C = Q/V, measured in farads; a farad is enormous, so school capacitors are labelled in microfarads, where 1 microfarad is 10^-6 farad. If 10 microfarad sits on a 12 V supply it holds Q = CV = 10 x 10^-6 x 12 = 1.2 x 10^-4 C. Combining capacitors follows rules that are the deliberate opposite of the resistor rules, and examiners rely on the confusion. In parallel the effective plate area grows, so capacitances add: 4 microfarad with 6 microfarad gives 10 microfarad, and each one feels the full supply voltage. In series the same charge must sit on every capacitor while the voltage divides, so the reciprocal rule applies, 1/C = 1/C1 + 1/C2, and the same pair gives C = (4 x 6)/(4 + 6) = 2.4 microfarad, less than the smallest, exactly as a parallel resistor network does. For three identical 6 microfarad capacitors in series, 1/C = 3/6, giving 2 microfarad. A practical use students meet in Paper 3 is the capacitor in a smoothing circuit inside a power supply, which fills when the voltage rises and empties when it falls, ironing out ripple; another is the flash of a camera, where a few hundred microfarads charged to several volts dump their energy in milliseconds. Safety note for the laboratory: a large electrolytic capacitor can hold a lethal charge long after the supply is removed, so it must be discharged through a resistor before the board is touched, and its polarity must be correct or it vents.",
          "bulletPoints": [
            "C = Q/V in farads; 1 microfarad = 10^-6 farad.",
            "Parallel capacitors add, and each carries the full voltage: 4 plus 6 microfarad gives 10 microfarad.",
            "Series capacitors combine by reciprocals and hold the same charge: (4 x 6)/10 = 2.4 microfarad.",
            "Three 6 microfarad capacitors in series give 2 microfarad.",
            "Discharge any large electrolytic capacitor through a resistor before handling, and observe its polarity marking."
          ],
          "keyTakeaway": "Capacitors in parallel add like resistors in series, and capacitors in series take reciprocals like resistors in parallel; memorise the contrast as one sentence.",
          "realWorldExample": "The battery-powered torch sold at Kaneshie market uses a small capacitor and a coil to step the flash lamp's voltage up for an instant, and a repair person in Accra who swaps a blown capacitor must match both the microfarad rating and the working voltage, never the size of the can alone."
        },
        {
          "title": "Current, E.M.F., Potential Difference and Resistance",
          "content": "Current is the rate at which charge flows, I = Q/t, measured in amperes, and it is the same at every point of a series circuit because charge cannot pile up anywhere. Since one electron carries 1.6 x 10^-19 C, a steady 0.50 A flowing for 2 minutes, that is 120 s, transports Q = 0.50 x 120 = 60 C, equivalent to 60 / (1.6 x 10^-19) = 3.75 x 10^20 electrons through the wire. Conventional current is drawn from the positive terminal towards the negative in the external circuit, while electrons physically drift the other way, and a question that asks for the electron flow direction wants the answer opposite to the arrow. Energy per charge is what the volt measures: 1 V = 1 J/C. The e.m.f. of a cell is the energy per coulomb the cell supplies to drive it round the entire circuit, while a p.d. is the energy per coulomb actually used between two chosen points; they are measured with the same unit and differ in meaning. When current is drawn the terminal p.d. is smaller than the e.m.f. because some volts are spent inside the cell against its internal resistance, which is why a torch cell that reads 1.5 V on an open voltmeter may show barely 1.1 V while the lamp is lit and flat. Resistance is the opposition a component offers to current, R = V/I, and it depends on geometry and material as R = rho L / A: lengthen a wire and resistance grows in proportion, thicken it and resistance falls, doubling the diameter multiplies area by four and cuts resistance to a quarter. This is why long extension leads for a welding machine at a building site must be thick, and why a thin wire in the same circuit heats and may melt. An ammeter of very low resistance is always connected in series; a voltmeter of very high resistance is always connected in parallel across the component being tested.",
          "bulletPoints": [
            "I = Q/t; 0.50 A for 120 s gives 60 C, which is 3.75 x 10^20 electrons.",
            "Conventional current flows positive to negative outside the cell; electrons drift the opposite way.",
            "1 volt = 1 joule per coulomb; e.m.f. is energy per charge supplied, p.d. energy per charge used.",
            "Terminal p.d. is less than e.m.f. when current flows, because of internal resistance.",
            "R = rho L / A: resistance is proportional to length and inversely proportional to cross-sectional area.",
            "Ammeter in series with low resistance, voltmeter in parallel with high resistance."
          ],
          "keyTakeaway": "Volts are joules per coulomb, and any time current flows the terminal p.d. falls below the e.m.f. by the amount lost inside the cell.",
          "realWorldExample": "A mason at a building site in Kasoa runs a 2 kW mixer on a thin 20 m extension lead; the lead is long and therefore resistive, so it heats, steals volts, and the motor turns slowly, which is why the site electrician insists on a thick, short cable instead."
        },
        {
          "title": "Ohm's Law, Resistor Networks, Power and the Cost of Energy",
          "content": "Ohm's law states that the current through a metallic conductor is directly proportional to the potential difference across it provided temperature and physical conditions stay constant, and its equation V = IR is the workhorse of every circuit question. To verify it in the laboratory, set the rheostat to give six different currents through a constantan wire, read the p.d. across it with the voltmeter, plot V against I and take the slope as the resistance; a straight line through the origin proves the law. A filament lamp does not obey it over its full range because as the wire heats its resistance rises, so the graph curves and flattens, and a diode conducts easily in one direction only and barely at all in the other. Resistors combine simply: in series the same current passes through each and the p.d.s add, so R = R1 + R2 + R3, meaning 3, 4 and 5 ohm give 12 ohm; in parallel the branches share the same p.d. and the currents add, so 1/R = 1/R1 + 1/R2 and a 6 ohm with a 12 ohm gives 4 ohm, always below the smallest branch, because opening extra paths is like widening a road. Power dissipated is P = VI, and using Ohm's law it becomes P = I^2 R, best when current is known, or P = V^2/R, best when voltage is known; energy is that power multiplied by time. Commercially energy is sold in kilowatt-hours, the work done by a 1 kW device in one hour, so 1 kWh = 1000 W x 3600 s = 3.6 x 10^6 J. A household bill is then straightforward arithmetic: multiply each rating in kilowatts by the hours used to get units, add them and multiply by the tariff. A 1.5 kW iron run 2 h a day for thirty days takes 90 kWh; a 100 W lamp lit 10 h a night takes 30 kWh; the pair costs 120 kWh, which at GH¢0.50 per unit is GH¢60.00. Swapping the lamp for a 20 W LED cuts that lighting to 6 kWh, saving 24 kWh or GH¢12.00 a month, and this style of costing, with watts converted to kilowatts and days converted to hours, is what Paper 2 asks.",
          "bulletPoints": [
            "Ohm's law V = IR holds at constant temperature; verify it by plotting V against I and taking the slope as R.",
            "A filament lamp curves on an I-V graph and a diode conducts one way, so neither is an ohmic conductor.",
            "Series resistors add: 3 plus 4 plus 5 ohm equals 12 ohm; parallel ones give reciprocals: (6 x 12)/18 = 4 ohm.",
            "P = VI = I^2 R = V^2/R, energy E = Pt, and 1 kWh = 3.6 x 10^6 J.",
            "Units cost = power in kilowatts x hours x tariff, so 120 kWh at GH¢0.50 per kWh is GH¢60.00.",
            "Fuse ratings and kW ratings must be read from the appliance, never guessed, and a wet hand lowers body resistance dangerously."
          ],
          "keyTakeaway": "Convert watts to kilowatts before multiplying by hours; the unit on the bill is the kilowatt-hour, not the watt.",
          "realWorldExample": "A student in a Legon hostel reads the label of a pressed-water dispenser and a 1.5 kW iron, records that the iron runs about 2 h a day, and shows the hall warden that 90 kWh a month at the prepaid rate is the single largest item on the room's energy debt."
        }
      ],
      "commonMistakes": [
        "Leaving charges in microcoulomb when substituting into Coulomb's law, so 2 microcoulomb is entered as 2 instead of 2 x 10^-6 and the force comes out a million million times too large; write the powers of ten in the first line of the working.",
        "Forgetting to square the distance, or squaring 0.30 m as 0.30 rather than 0.09, which turns a 0.60 N answer into 0.18 N or 60 N.",
        "Applying the resistor rules to capacitors, so 4 microfarad and 6 microfarad in parallel are reported as 2.4 microfarad; parallel capacitors add and series capacitors take reciprocals.",
        "Using a single reciprocal inversion such as R = R1 + R2 for a parallel pair instead of 1/R = 1/R1 + 1/R2, and then reporting a combined resistance larger than either branch, which the examiner knows is impossible.",
        "Computing energy cost from watts and hours, so a 100 W lamp lit 10 h for 30 days is billed at 30000 units; the fix is to divide the wattage by 1000 first, giving 30 kWh.",
        "Calling the voltmeter connection series and the ammeter parallel, or ignoring the internal resistance and claiming the terminal p.d. equals the e.m.f. while current is being drawn."
      ],
      "wassceExamTips": [
        "Paper 1 rewards the unit more than the arithmetic; a force answer without newtons, or a cost answer without cedis, is usually marked down even when the digits are right.",
        "In Paper 2 the marking pays method lines: state the formula, substitute with powers of ten visible, then give the answer; carry-through error is forgiven in later parts, so never abandon a question because part (a) went wrong.",
        "When a circuit diagram is given, redraw it as a simple loop before combining resistors, label each node, and reduce one pair per line; examiners award method marks for each correct reduction, so a network worth five marks can be scored in stages.",
        "For the Ohm's law practical and the alternative-practical Paper 3, know the words: ammeter in series, voltmeter in parallel, open the key between readings to keep the wire cool, take at least six readings, plot V against I, and state that resistance equals the slope.",
        "Learn the fixed values and the conversions: 1 kWh = 3.6 x 10^6 J, e = 1.6 x 10^-19 C, 1 microfarad = 10^-6 farad, 1 microcoulomb = 10^-6 coulomb; and remember that 2 minutes is 120 s, since minutes left unconverted is the most reported slip in the chief examiner's account.",
        "In an energy-costing question, put the appliances in a table of rating in kW, daily hours, days and units before multiplying anything, then quote the tariff given in the question rather than a rate you remember from home."
      ],
      "summaryChecklist": [
        "Can I charge a body by friction, conduction and induction and explain the electroscope leaf in each case?",
        "Can I state Coulomb's law and calculate the force between two charges given in microcoulombs and separated in metres?",
        "Can I find the total capacitance of any combination of capacitors in series and in parallel and say which pairing keeps the same charge?",
        "Can I define current, e.m.f., potential difference and resistance, and describe the Ohm's law circuit, graph and conclusion?",
        "Can I reduce a mixed series and parallel resistor network, then compute power, kilowatt-hours and the cedi cost at a stated tariff?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-c-electricity-1",
        "title": "Reducing a Mixed Resistor Network and Finding the Branch Currents",
        "problem": "A 5 ohm resistor is connected in series with a parallel group of three resistors of 20, 30 and 60 ohm. The combination is fed from a 15 V cell of negligible internal resistance. Find the total resistance, the current drawn from the cell, the potential difference across the parallel group, and the current in each branch.",
        "stepByStepSolution": [
          "Step 1 (M1): Reduce the parallel group by reciprocals: 1/R = 1/20 + 1/30 + 1/60.",
          "Step 2 (M1): Write all three over the lowest common denominator 60: 1/R = 3/60 + 2/60 + 1/60 = 6/60.",
          "Step 3 (A1): Invert once to get R_group = 60/6 = 10 ohm, which is correctly less than the smallest branch of 20 ohm.",
          "Step 4 (M1): Add the series resistor: R_total = 10 + 5 = 15 ohm.",
          "Step 5 (M1): Apply Ohm's law to the whole circuit: I = V/R_total = 15/15.",
          "Step 6 (A1): I = 1.0 A leaves the cell, and the p.d. across the 5 ohm resistor is 1.0 x 5 = 5 V, so the group carries 15 - 5 = 10 V.",
          "Step 7 (M1): Divide that same 10 V across each branch, since parallel branches share a p.d.: I = V/R for each.",
          "Step 8 (A1): Branch currents are 10/20 = 0.50 A, 10/30 = 0.33 A and 10/60 = 0.17 A, and they add to 1.00 A, which agrees with the cell current and confirms the answer."
        ],
        "keyTakeaway": "Reduce the parallel group first, then add the series resistor, then work backwards with the same current and shared p.d. to split the branches."
      },
      {
        "id": "ex-phy-c-electricity-2",
        "title": "Costing a Month of Electrical Energy in Kilowatt-Hours",
        "problem": "A hostel room uses a 1.5 kW pressing iron for 2 hours each day and a 100 W lamp for 10 hours every night. If the tariff is GH¢0.50 per kilowatt-hour, find the energy used in thirty days and its cost, then find the monthly saving if the lamp is replaced by a 20 W LED of the same light output.",
        "stepByStepSolution": [
          "Step 1 (M1): Put every rating in kilowatts: the iron is already 1.5 kW, and the lamp is 100/1000 = 0.10 kW.",
          "Step 2 (M1): Energy for the iron in thirty days is power multiplied by total hours: E = 1.5 x 2 x 30.",
          "Step 3 (A1): E_iron = 90 kWh.",
          "Step 4 (M1): Energy for the lamp is E = 0.10 x 10 x 30, giving E_lamp = 30 kWh.",
          "Step 5 (A1): Total energy for the month is 90 + 30 = 120 kWh, that is 120 units on the bill.",
          "Step 6 (M1): Cost is units multiplied by the tariff: 120 x GH¢0.50.",
          "Step 7 (A1): The room costs GH¢60.00 for the thirty days.",
          "Step 8 (M1): For the LED, 0.020 x 10 x 30 = 6 kWh, so the saving is 30 - 6 = 24 kWh, which at GH¢0.50 per kWh is 24 x 0.50 = GH¢12.00 a month, and the same 120 kWh would be 4.32 x 10^8 J since 1 kWh = 3.6 x 10^6 J."
        ],
        "keyTakeaway": "Kilowatts times hours gives units, units times tariff gives cedis, and a lower wattage buys the same light at a fraction of the units."
      }
    ],
    "quiz": {
      "id": "quiz-phy-c-electrostatics-current",
      "topicId": "shs3-phy-t2-electrostatics-current-electricity",
      "title": "Electrostatics and Current Electricity Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-c-current-1",
          "quizId": "quiz-phy-c-electrostatics-current",
          "questionText": "Two small point charges of 2 microcoulomb and 3 microcoulomb are placed 0.30 m apart in air. Taking k = 9 x 10^9 N m^2 C^-2, the force between them is",
          "optionA": "0.15 N",
          "optionB": "6.0 N",
          "optionC": "0.60 N",
          "optionD": "0.06 N",
          "correctOption": "C",
          "subConcept": "Coulomb's law",
          "explanation": "F = 9 x 10^9 x 2 x 10^-6 x 3 x 10^-6 / (0.30)^2 = 0.054/0.09 = 0.60 N, and it is repulsive because both charges are positive. The 6.0 N option comes from using 0.30 instead of 0.09 in the denominator, and 0.06 N from converting only one of the microcoulombs.",
          "remediationTip": "Substitute in three lines: numerator with powers of ten, then the squared distance, then the division, and never square a distance in your head."
        },
        {
          "id": "q-phy-c-current-2",
          "quizId": "quiz-phy-c-electrostatics-current",
          "questionText": "A resistor has a potential difference of 12 V across it and a current of 3 A in it. Its resistance and the power it dissipates are",
          "optionA": "4 ohm and 36 W",
          "optionB": "4 ohm and 15 W",
          "optionC": "0.25 ohm and 36 W",
          "optionD": "36 ohm and 4 W",
          "correctOption": "A",
          "subConcept": "Ohm's law and power",
          "explanation": "R = V/I = 12/3 = 4 ohm, and P = VI = 12 x 3 = 36 W, which agrees with I^2 R = 9 x 4 = 36 W. The 15 W answer adds V and I instead of multiplying, and 0.25 ohm inverts the ratio.",
          "remediationTip": "Write the three power forms P = VI, P = I^2 R, P = V^2/R and check your answer with two of them."
        },
        {
          "id": "q-phy-c-current-3",
          "quizId": "quiz-phy-c-electrostatics-current",
          "questionText": "Capacitors of 4 microfarad and 6 microfarad are connected in parallel across a supply. Their combined capacitance is",
          "optionA": "2.4 microfarad",
          "optionB": "1.2 microfarad",
          "optionC": "24 microfarad",
          "optionD": "10 microfarad",
          "correctOption": "D",
          "subConcept": "Capacitors in series and parallel",
          "explanation": "In parallel the plate area adds, so C = 4 + 6 = 10 microfarad and each capacitor carries the full supply voltage. The 2.4 microfarad value is the series combination, which is the trap set for students who mix the capacitor rules with the resistor rules.",
          "remediationTip": "Recite the contrast: parallel capacitors add, parallel resistors take reciprocals."
        },
        {
          "id": "q-phy-c-current-4",
          "quizId": "quiz-phy-c-electrostatics-current",
          "questionText": "A 6 ohm resistor and a 12 ohm resistor are joined in parallel. Their effective resistance is",
          "optionA": "18 ohm",
          "optionB": "9 ohm",
          "optionC": "4 ohm",
          "optionD": "2 ohm",
          "correctOption": "C",
          "subConcept": "Resistors in parallel",
          "explanation": "1/R = 1/6 + 1/12 = 2/12 + 1/12 = 3/12, so R = 4 ohm, or product over sum (6 x 12)/18 = 4 ohm. The answer must be less than the smallest branch, which rejects 18 ohm and 9 ohm at once.",
          "remediationTip": "After any parallel calculation, test the result against the smallest resistor; if it is larger, the rule was misapplied."
        },
        {
          "id": "q-phy-c-current-5",
          "quizId": "quiz-phy-c-electrostatics-current",
          "questionText": "An electric iron rated 800 W is used for 3 hours a day. What is the cost of running it for 30 days at GH¢0.50 per kilowatt-hour?",
          "optionA": "GH¢36.00",
          "optionB": "GH¢72.00",
          "optionC": "GH¢12.00",
          "optionD": "GH¢144.00",
          "correctOption": "A",
          "subConcept": "Power, energy units and cost",
          "explanation": "Energy = 0.8 kW x 3 h x 30 = 72 kWh, and 72 x GH¢0.50 = GH¢36.00. The 72.00 option is the number of units mistaken for cedis, and GH¢144.00 uses 800 without converting watts to kilowatts.",
          "remediationTip": "Always convert W to kW first, then write the units found on one line and the cost on the next."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t2-magnetism-electromagnetism",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 3,
    "title": "Magnetism, Electromagnetism and the Motor Effect",
    "description": "Magnetic materials and domain theory, field lines, Oersted's discovery, the solenoid and the electromagnet, the force on a current in a magnetic field with Fleming's left hand rule, the d.c. motor, electromagnetic induction with Fleming's right hand rule, and the transformer and its role in transmitting power on the national grid.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Only iron, steel, cobalt, nickel and a few alloys are strongly magnetic; a bar magnet has a north and a south pole, the poles come in pairs and cannot be isolated, and like poles repel while unlike poles attract.\n• A freely suspended magnet sets itself along the magnetic meridian, pointing approximately north and south, because the Earth itself behaves as a huge bar magnet with its magnetic poles displaced from the geographic poles.\n• Field lines leave the north pole and enter the south pole outside the magnet, never cross, crowd at the poles where the field is strongest, and form closed loops through the body of the magnet.\n• Domain theory: each atom in iron is a tiny magnet grouped into regions called domains; in an unmagnetised piece the domains point randomly, and magnetising them aligns them, which is why hammering, heating above the Curie point or a strong alternating current destroys magnetism.\n• Soft iron is easily magnetised and easily loses it, so it is used for electromagnet cores, transformer cores and armatures; hard steel is difficult to magnetise but retains it, so it is used for permanent magnets.\n• Making a permanent magnet: stroke a steel bar in one direction with one pole of a strong magnet, or place it inside a solenoid carrying direct current, or use the earth's field by dropping the aligned bar north-south.\n• Oersted showed that a current through a wire deflects a nearby compass needle, so an electric current always produces a magnetic field; the field round a straight wire is a set of concentric circles found by the right-hand grip rule, thumb along the conventional current, fingers giving the field direction.\n• A solenoid concentrates that field: the inside is strong and almost uniform, the outside pattern is identical to a bar magnet, and the polarity is given by the clock rule, looking at an end, anticlockwise currents make a north pole and clockwise currents make a south pole.\n• An electromagnet is a solenoid wound on a soft-iron core; its strength grows with more turns, more current and a softer, thicker core, and it can be switched off at will, which is exactly what a permanent magnet cannot do.\n• Electromagnets in Ghanaian use: the electric bell at the school compound, the relay that switches a lamp from a sensor, crane magnets lifting scrap steel at the Takoradi yards, and the magnetic separator that removes iron filings from cocoa and grain.\n• A current-carrying conductor standing in a magnetic field experiences a force, the motor effect, because its own field fights the external field and strengthens it on one side; the force is maximum when the conductor is at right angles to the field and zero when it is parallel.\n• The force magnitude is F = BIl for a straight conductor at right angles to a field of flux density B in tesla carrying current I over a length l in metres; with B = 0.2 T, I = 5 A and l = 0.10 m the force is 0.2 x 5 x 0.10 = 0.10 N, and doubling the current doubles the force to 0.20 N.\n• Fleming's left hand rule gives the direction of that force: the first finger points along the field from north to south, the second finger along the conventional current, and the thumb shows the motion or force; the mnemonic is Motor = Left.\n• The d.c. motor uses a rectangular coil on an axle between magnet poles, with a split-ring commutator reversing the connections every half turn so the coil keeps turning one way; the forces on the two sides act in opposite directions and form a couple, and speed rises with current and with field strength.\n• Fleming's right hand rule gives the direction of an induced current: thumb for motion of the conductor, first finger for field, second finger for induced current; Generator = Right.\n• Electromagnetic induction needs cutting of field lines: moving a wire through a field, or moving a magnet into a coil, induces an e.m.f.; the induced current is larger with faster motion, more turns and a stronger magnet, and Lenz's law states that its direction always opposes the change producing it, which is the conservation of energy at work.\n• A generator or dynamo turns mechanical energy into electrical energy by rotation of a coil in a field; an a.c. generator uses slip rings, a d.c. generator uses a split-ring commutator; bicycle dynamos, the small hydro sets on streams and the automobile alternator all work this way.\n• A transformer works only on alternating current: the alternating primary current makes a changing flux in the iron core, which induces an e.m.f. in the secondary, and the voltages follow the turns ratio, Vp/Vs = Np/Ns.\n• Worked transformer figures: a 240 V mains supply with a 600-turn primary and a 30-turn secondary gives a turns ratio of 20 to 1 and Vs = 240 x 30/600 = 12 V; with a 5 A load on the secondary the primary draws 5 x 30/600 = 0.25 A, and the power is 12 x 5 = 240 x 0.25 = 60 W on both sides for an ideal transformer.\n• For an ideal transformer Vp Ip = Vs Is; a real one is 80 to 99 per cent efficient, so an 80 per cent transformer delivering 240 W draws 240/0.8 = 300 W from the mains and wastes 60 W as heat in the core and windings.\n• Step-up transformers raise the voltage for transmission because at 100 kW a 400 V line carries 250 A and loses 250^2 x 0.5 = 31,250 W in a 0.5 ohm line, while the same power at 10,000 V carries only 10 A and loses 10^2 x 0.5 = 50 W, a 625 times smaller waste; Ghana's grid runs mainly at 132 kV and 220 kV for this reason.\n• Instruments that depend on the motor effect: the moving-coil meter, where a radial field keeps the couple proportional to current and the hairspring restores the pointer; the loudspeaker, where an alternating current in a coil fixed to a paper cone makes it vibrate; and the relay, where a small current in an electromagnet switches a much larger one.",
    "detailedNotes": {
      "overview": "This topic links magnetism to electricity in both directions: current creating a field, and a changing field creating current. You will describe magnetic materials and field lines, explain Oersted's discovery and the solenoid, build and control an electromagnet, use F = BIl for the force on a conductor, apply Fleming's left hand rule to the motor and Fleming's right hand rule to the generator, and finish with the transformer, whose turns ratio and power balance explain why a nation transmits electricity at hundreds of thousands of volts. The examinable arithmetic is small and precise: turns ratio, primary and secondary current, force in newtons, and transmission loss in watts. The examinable words are equally important, because Paper 2 marks the naming of the commutator, the slip ring, the soft-iron core and Lenz's law by name.",
      "introduction": "Start by handling the magnets themselves: two bar magnets, iron filings on card, a compass, and a steel sewing needle you will turn into a magnet by single-stroking. Then move to electromagnetism with the same current you used in the previous topic: a wire over a compass needle proves Oersted, a coil wound on a nail and fed from cells lifts a paper clip after paper clip, and a switch in the circuit shows instantly why an electromagnet beats a permanent one. For the motor effect, use the small loudspeaker taken from a broken radio and run a magnet along its coil to feel the forces, then build the class simplest electric motor from a coil, a safety-pin frame and a battery. Finish with the transformer demonstration using the low-voltage a.c. output of the laboratory power supply, never the mains socket, and record volts against turns until the ratio 20 to 1 is obvious on the board.",
      "realWorldContext": "The Volta dam at Akosombo and the thermal plant at Takoradi generate power that has to travel hundreds of kilometres to Kumasi and Tamale, and every one of those stations steps its voltage up before the line and steps it down again at the substations, so the transformer is the machine that carries Ghana's electricity. Distribution transformers on poles in Accra reduce the line voltage to the 240 V that reaches a house, and the small adapter charging a phone is the same principle in miniature, giving about 5 V from 240 V. Electric bells at school compounds, relays in solar charge controllers on roofs in the Northern Region, crane magnets lifting scrap at the Takoradi yards, and the alternator under the bonnet of a trotro all rest on the motor effect and induction. A welder at a fabrication shop in Suame uses a transformer-arc welder that needs a large current at a low voltage, exactly the reverse of a transmission line. Safety in all of this is non-negotiable: laboratory work uses the low-voltage a.c. terminals of a teacher-controlled supply, and no student ever opens a mains adapter or a prepaid meter.",
      "objectives": [
        "Describe magnetic materials, the properties of field lines and domain theory, and explain the difference between soft iron and steel",
        "State Oersted's finding, draw the field of a solenoid, determine its poles, and list three ways to strengthen an electromagnet",
        "Calculate the force on a current-carrying conductor from F = BIl and find its direction using Fleming's left hand rule",
        "Explain electromagnetic induction, apply Fleming's right hand rule and Lenz's law, and distinguish an a.c. generator from a d.c. one",
        "Use Vp/Vs = Np/Ns and Vp Ip = Vs Is on transformer problems and explain why electrical power is transmitted at high voltage"
      ],
      "sections": [
        {
          "title": "Magnetic Materials, Poles, Field Lines and Domains",
          "content": "Magnetism shows itself strongly in only a few materials: iron, steel, cobalt, nickel and alloys such as alnico. A magnet has two poles, north and south, and the poles always come in pairs; breaking a magnet does not separate them but produces two smaller complete magnets, each with its own north and south. Like poles repel and unlike poles attract, and a freely suspended bar magnet turns until it lies along the magnetic meridian, pointing approximately towards north and south, because the Earth behaves as though a giant bar magnet lay inside it with its magnetic poles some way from the geographic ones. Field lines map the region of influence: they are drawn from the north pole to the south pole outside the magnet, they never cross since a crossing would give a test pole two directions at one point, they crowd near the poles where the field is strongest, and they are closed loops that continue through the magnet. Magnetising and demagnetising are explained by domain theory. In iron each atom is a minute magnet and groups of them align into domains; an unmagnetised specimen has its domains pointing every which way so their effects cancel, and magnetising is simply the growth of the domains already aligned with the field at the expense of the rest. Heat above the Curie point, mechanical hammering, or a large alternating current slowly reduced to zero randomises the domains again, which is how a magnet is ruined. Soft iron magnetises and demagnetises almost instantly, so it is the material of electromagnet and transformer cores; hard steel resists both magnetising and demagnetising, so it holds the magnetism needed for a permanent magnet, and a steel needle is magnetised by single stroking with one pole of a strong magnet always drawn in the same direction and lifted at the end.",
          "bulletPoints": [
            "Poles occur in pairs only; a broken magnet gives two complete magnets, never an isolated north pole.",
            "Field lines run north to south outside the magnet, never cross, and crowd where the field is strongest.",
            "Domain alignment explains magnetisation; random domains explain an unmagnetised specimen.",
            "Heating past the Curie point, hammering, or a slowly reduced alternating current demagnetises a body.",
            "Soft iron for cores that must switch on and off; hard steel for permanent magnets."
          ],
          "keyTakeaway": "Say which material you need before choosing it: switching means soft iron, permanence means steel.",
          "realWorldExample": "A fitter at Suame magazine in Kumasi keeps screwdriver blades in a tray of small permanent magnets so steel screws stay on the tip, and recharges a weakened blade by stroking it a dozen times in one direction with a bar magnet rather than by heating it, which would destroy both magnetism and temper."
        },
        {
          "title": "Oersted, the Solenoid and the Electromagnet",
          "content": "In 1820 Oersted noticed that a compass needle jumped when a current was switched on in a wire lying near it, proving that an electric current produces a magnetic field. The field round a straight current-carrying wire is a set of concentric circles in planes perpendicular to the wire; its direction is found by the right-hand grip rule, the thumb along the conventional current and the curled fingers showing the field. Reversing the current reverses the field, and the field weakens with distance from the wire. Winding the wire into a coil, and then into a long coil called a solenoid, concentrates the effect: inside the solenoid the field is strong and nearly uniform, and outside the pattern matches a bar magnet exactly, with a definite north and south end. The clock rule decides those ends: look at an end of the solenoid, and if the current there appears to run anticlockwise that end is north, while a clockwise current makes it south. Insert a soft-iron core and the assembly becomes an electromagnet, many times stronger than the coil alone because the domains in the iron align and add their field to the coil's. Three factors set its strength: the number of turns, the current, and the nature and size of the core, so a laboratory electromagnet is wound heavily, fed through a rheostat, and built on laminated soft iron. Its decisive advantage is control: the magnetism exists only while the current flows and can be reversed at will. That is why the electric bell at the school gate rings only while a visitor presses the push button, why a relay lets a sensor's few milliamps switch a lamp of several amperes, and why a scrap-yard crane can pick up a load of steel offcuts and drop them by simply opening the circuit. In food processing, electromagnetic separators pull iron grit out of cocoa powder and milled grain, and in each case the machine is switched off at the end of the day, which no permanent magnet could manage.",
          "bulletPoints": [
            "Oersted: a current in a wire deflects a compass, so current always produces a magnetic field.",
            "Right-hand grip rule gives the circular field round a straight wire; reverse the current and the field reverses.",
            "A solenoid's field matches a bar magnet, and the clock rule names its poles from the current direction.",
            "Electromagnet strength rises with more turns, more current, and a soft-iron core.",
            "Advantages over a permanent magnet: switchable, reversible, and far stronger for its size."
          ],
          "keyTakeaway": "An electromagnet is a solenoid plus a soft-iron core, and its whole value is that it can be turned on and off.",
          "realWorldExample": "The electric bell on the gate of a school in Cape Coast works through a soft-iron electromagnet that attracts an armature, breaks its own contact, releases, and strikes again many times a second, so the bell hums only while the push button is held down."
        },
        {
          "title": "The Motor Effect and Fleming's Left Hand Rule",
          "content": "When a conductor carrying current sits inside an external magnetic field, the conductor's own field fights the field around it. On one side the two fields add and become denser, on the other they cancel and become sparse, and the pressure from the dense side pushes the conductor towards the sparse side. That push is the force of the motor effect, and its size is F = BIl when the conductor is perpendicular to a field of flux density B in tesla, carrying current I in amperes over a length l in metres. So a 0.10 m length of wire carrying 5 A across a 0.2 T field feels 0.2 x 5 x 0.10 = 0.10 N; doubling the current to 10 A doubles the force to 0.20 N, and lengthening or strengthening the field raises it in the same proportion. Turn the wire parallel to the field and it stops cutting any field lines at all, so the force falls to zero, which is why meters and motors arrange their coils so that the sides are always at right angles to the field. The direction is given by Fleming's left hand rule: stretch the thumb, first finger and second finger at right angles to one another, point the first finger along the field from north to south, the second finger along the conventional current, and the thumb then indicates the force or motion. The d.c. motor applies all of this: a rectangular coil on a soft-iron armature is mounted between magnet poles so that the two active sides carry current in opposite directions and the forces on them form a couple that turns the coil. Once the coil passes the vertical, however, those forces would drive it back, so a split-ring commutator reverses the connections every half turn and the coil continues in one direction. Speed increases with current and with field strength, and reversing either reverses the rotation. The moving-coil meter is the same physics turned to measurement: a radial magnetic field keeps the couple proportional to current, the hairspring provides a restoring torque, and the pointer deflection is therefore a linear reading of the current. A loudspeaker is the effect made to vibrate, with an alternating audio current in a coil glued to a paper cone inside a permanent magnet's radial field.",
          "bulletPoints": [
            "F = BIl for a conductor at right angles to the field; force is zero when the conductor is parallel to it.",
            "Worked: B = 0.2 T, I = 5 A, l = 0.10 m gives F = 0.10 N; at 10 A the force is 0.20 N.",
            "Fleming's left hand rule: first finger field, second finger current, thumb force or motion, the hand used for a Motor.",
            "The d.c. motor keeps turning because the split-ring commutator reverses the coil current every half turn.",
            "Moving-coil meters use a radial field so that the couple stays proportional to the current being measured."
          ],
          "keyTakeaway": "Force exists only because the conductor cuts field lines, so state the angle first, then use F = BIl, then name the direction by the left hand rule.",
          "realWorldExample": "The paper cone of a broken radio loudspeaker taken apart in class shows the motor effect directly: an audio alternating current in the coil makes the cone move in and out, reversing force every half cycle, and the vibrating cone is what the class hears as a note."
        },
        {
          "title": "Electromagnetic Induction, the Generator and Fleming's Right Hand Rule",
          "content": "Faraday's discovery runs the argument backwards: moving a conductor so that it cuts magnetic field lines, or moving a magnet into or out of a coil so that the flux through the coil changes, induces an e.m.f. across the conductor, and if the circuit is closed a current flows. The induced e.m.f. grows when the motion is faster, when the field is stronger, when more turns are wound, and when an iron core is passed through the coil; if the conductor is held still in a steady field nothing is induced at all, because no flux is being cut. The direction of the induced current comes from Fleming's right hand rule, with the thumb now along the motion of the conductor, the first finger along the field and the second finger giving the induced current; the hand used is the right because the machine is a Generator. Lenz's law states the deeper rule, that the induced current always flows in the direction that opposes the change producing it: pushing a north pole into a coil makes the near face north as well, so the coil fights the push, and the extra work done against that opposition is exactly the energy that appears as electrical energy. Without the opposition a current would be created for nothing, so Lenz's law is the conservation of energy written for induction. A generator converts mechanical energy into electrical energy by rotating a coil in a field, which keeps cutting the flux continuously. If the ends of the coil are taken out through two complete slip rings the current alternates and the machine is an a.c. generator, the pattern used by the large alternators at Akosombo and Takoradi; if a split-ring commutator is fitted instead, the output is pulsing but always one-way d.c., as in a bicycle dynamo or an automobile generator. Induction also appears without any moving part at all, whenever the current in a neighbouring coil changes, and it is that transformer action which carries the whole load of the national grid.",
          "bulletPoints": [
            "Induction needs cutting of flux: relative motion between conductor and field, or a changing current nearby.",
            "Faster motion, more turns, stronger field and an iron core all increase the induced e.m.f.",
            "Fleming's right hand rule: thumb motion, first finger field, second finger induced current.",
            "Lenz's law: the induced current opposes the change causing it, which is conservation of energy in the machine.",
            "Slip rings give alternating current; a split-ring commutator gives direct current."
          ],
          "keyTakeaway": "No flux cutting means no induced e.m.f.; and the induced current always pushes back against whatever is driving it.",
          "realWorldExample": "The hub dynamo fitted to a delivery rider's push-bike in Tamale lights a small lamp because the spinning coil inside permanent magnets cuts flux continuously; the faster the rider pedals, the brighter the lamp, which is the induced e.m.f. rising with speed."
        },
        {
          "title": "The Transformer and the Transmission of Power",
          "content": "A transformer is two coils wound on a laminated soft-iron core. An alternating current in the primary builds a constantly changing flux in the core, that flux links every turn of the secondary, and an e.m.f. is induced there by mutual induction; the laminations and the soft iron exist to cut the eddy currents and hysteresis losses that would otherwise make the core hot. Because the same flux passes through both coils, the voltage induced in each turn is the same in both, so the voltages are directly proportional to the turns: Vp/Vs = Np/Ns. A secondary with more turns than the primary is a step-up transformer, one with fewer is step-down, and a transformer does nothing at all on direct current because a steady primary current produces a steady flux and a steady flux induces nothing. Take a practical case: a 240 V mains primary of 600 turns with a 30-turn secondary has a turns ratio of 20 to 1, so Vs = 240 x 30/600 = 12 V, the voltage of a low-voltage laboratory supply. Ideal transformers also conserve power, so Vp Ip = Vs Is; if that 12 V secondary feeds a lamp taking 5 A, the power delivered is 12 x 5 = 60 W and the primary draws 60/240 = 0.25 A, and the same current ratio follows from Is/Ip = Np/Ns. Real machines fall short of this: an 80 per cent efficient transformer giving 240 W out must draw 240/0.8 = 300 W, with 60 W lost as heat in the windings and core, while modern grid transformers reach better than 98 per cent. This arithmetic explains the shape of the national grid. Losing power in a line is I^2 R, so the cure is to shrink the current, and the current shrinks only if the voltage rises. Transmit 100 kW at 400 V and the line carries 100,000/400 = 250 A, which in a line of 0.5 ohm resistance wastes 250^2 x 0.5 = 31,250 W, nearly a third of the power. Step the same 100 kW up to 10,000 V and the current drops to 10 A, so the loss becomes 10^2 x 0.5 = 50 W, six hundred and twenty-five times smaller, and the ratio of the losses equals the square of the ratio of the voltages. That is why power leaves the Volta and Akosombo stations and the Takoradi plants at 132 kV or 220 kV, why it is reduced at regional substations, and why a pole-mounted transformer outside a house in Ejisu makes the final step down to 240 V.",
          "bulletPoints": [
            "A transformer works only on alternating current, by mutual induction through a laminated soft-iron core.",
            "Vp/Vs = Np/Ns; step-up has more secondary turns, step-down has fewer.",
            "Ideal power balance Vp Ip = Vs Is, so 12 V at 5 A from 240 V needs only 0.25 A in the primary.",
            "Efficiency 80 per cent with 240 W out means 300 W in and 60 W lost as heat.",
            "Transmission loss is I^2 R: 100 kW at 400 V wastes 31,250 W in 0.5 ohm, at 10,000 V only 50 W.",
            "Safety: school transformers are fed from the low-voltage a.c. terminals of the supply, never from a wall socket."
          ],
          "keyTakeaway": "Transformers trade voltage for current, and because losses go with the square of the current, high-voltage transmission is the cheapest way to move power.",
          "realWorldExample": "The humming can-shaped transformer on a pole near a market in Ejisu takes the distribution line down to the 240 V used by the stalls, and its label gives the two voltages and the kVA rating that an electrician reads before connecting anything."
        }
      ],
      "commonMistakes": [
        "Using Fleming's right hand rule for the motor and the left hand rule for the generator; the fix is the mnemonic Motor = Left, Generator = Right, and to say which quantity is given before choosing the hand.",
        "Writing the length of the conductor as 10 instead of 0.10 m in F = BIl, which turns a 0.10 N answer into 1.0 N, or omitting the requirement that the conductor be at right angles to the field.",
        "Claiming a transformer works on direct current, or forgetting that a steady flux induces nothing, so a d.c. primary gives zero secondary voltage however many turns the secondary has.",
        "Inverting the turns ratio and reporting the secondary voltage of a 600-turn primary with a 30-turn secondary as 4800 V instead of 12 V; check at once that a step-down has fewer secondary turns than primary turns.",
        "Saying an electromagnet is strong because it uses a steel core; the core must be soft iron, and the strength comes from the number of turns, the current and the soft core that magnetises and demagnetises easily.",
        "Stating Lenz's law as merely the direction of an induced current and leaving out the opposition to the change, which forfeits the mark that rewards the conservation-of-energy reasoning."
      ],
      "wassceExamTips": [
        "Paper 1 asks short rule questions: which pole of a solenoid faces a given magnet, which way the compass needle moves, which hand of Fleming applies; answer with the rule named, not with a vague description of the field.",
        "In Paper 2 structured work on transformers, write Vp/Vs = Np/Ns, substitute with the turns labelled Np and Ns, then write the power line Vp Ip = Vs Is separately; each line is a method mark and students who merge them lose one.",
        "When asked why power is transmitted at high voltage, the full answer is a chain: higher voltage means smaller current for the same power, and since the loss is I^2 R the heat wasted in the line falls as the square of the current; three clauses, three marks.",
        "Draw the motor and generator diagrams with the parts labelled, coil, poles, commutator or slip rings, brushes and load; the question usually awards a mark for the commutator and another for the correct direction convention.",
        "For Paper 3 or the alternative-practical, know the induction demonstration: a coil connected to a sensitive galvanometer, a bar magnet pushed in and pulled out, the observation that the needle kicks one way going in and the other way coming out, and the conclusion that faster motion or more turns gives a larger deflection.",
        "Quote exact values when a question hands them out: force in newtons from F = BIl, current in amperes, length in metres; a force written as 0.1 with no unit is commonly marked as incomplete even when the arithmetic was right."
      ],
      "summaryChecklist": [
        "Can I draw the field lines of a bar magnet and of a solenoid, and name the poles of a solenoid from the current direction?",
        "Can I explain domain theory and choose between soft iron and steel for a stated purpose?",
        "Can I calculate the force on a current-carrying conductor from F = BIl and state its direction with Fleming's left hand rule?",
        "Can I describe how a d.c. motor and an a.c. generator work, naming the commutator, slip rings, and Lenz's law?",
        "Can I solve transformer problems with Vp/Vs = Np/Ns and Vp Ip = Vs Is, and justify high-voltage transmission by a numerical loss comparison?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-c-magnetism-1",
        "title": "Designing a Step-Down Transformer for the Laboratory",
        "problem": "A school transformer has a primary of 600 turns connected to the 240 V mains, and a secondary of 30 turns feeding a lamp that draws 5 A. Find the turns ratio, the secondary voltage, the primary current assuming an ideal transformer, and the power taken by the lamp.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the transformer relation Vp/Vs = Np/Ns and identify the quantities, with Np = 600 turns and Ns = 30 turns.",
          "Step 2 (M1): Compute the turns ratio: Np/Ns = 600/30 = 20, so the transformer is 20 to 1 and is a step-down because the secondary has fewer turns.",
          "Step 3 (M1): Rearrange for the secondary voltage: Vs = Vp x Ns/Np = 240 x 30/600.",
          "Step 4 (A1): Vs = 12 V, the low-voltage a.c. supplied to the lamp.",
          "Step 5 (M1): Power taken by the lamp is P = Vs Is = 12 x 5.",
          "Step 6 (A1): P = 60 W, and for an ideal transformer the primary also takes 60 W.",
          "Step 7 (M1): Apply the power balance Vp Ip = Vs Is, so Ip = 60/240, equivalently Is x Ns/Np.",
          "Step 8 (A1): Ip = 0.25 A, confirming that the primary carries a much smaller current than the secondary because it works at the higher voltage."
        ],
        "keyTakeaway": "Fewer secondary turns means lower voltage but higher current, and the two products Vp Ip and Vs Is stay equal for an ideal transformer."
      },
      {
        "id": "ex-phy-c-magnetism-2",
        "title": "Force on a Conductor in a Magnetic Field",
        "problem": "A straight wire of length 10 cm carries a current of 5 A and is placed at right angles to a uniform magnetic field of flux density 0.2 T. Find the force on the wire, state how its direction is determined, and give the new force when the current is doubled and when the wire is turned parallel to the field.",
        "stepByStepSolution": [
          "Step 1 (M1): State the relation for the motor effect, F = BIl, which applies when the conductor is perpendicular to the field.",
          "Step 2 (M1): Convert the length into metres, l = 10/100 = 0.10 m, and substitute B = 0.2 T, I = 5 A.",
          "Step 3 (A1): F = 0.2 x 5 x 0.10 = 0.10 N.",
          "Step 4 (M1): Find the direction with Fleming's left hand rule: the first finger along the field from north to south, the second finger along the conventional current, and the thumb then gives the direction of the force.",
          "Step 5 (M1): Doubling the current to 10 A with the same field and the same length gives F = 0.2 x 10 x 0.10.",
          "Step 6 (A1): F = 0.20 N, so the force is directly proportional to the current, which is why a moving-coil meter scale is linear.",
          "Step 7 (A1): Turning the wire parallel to the field makes it cut no field lines at all, so the force becomes zero and no motor effect appears.",
          "Step 8 (M1): Note the engineering consequence: a motor or loudspeaker therefore arranges its coil in a radial field so that the active sides stay at right angles to the field and keep the full force F = BIl."
        ],
        "keyTakeaway": "Force is greatest at right angles to the field, zero when parallel, and proportional to both current and field strength."
      }
    ],
    "quiz": {
      "id": "quiz-phy-c-magnetism-electromagnetism",
      "topicId": "shs3-phy-t2-magnetism-electromagnetism",
      "title": "Magnetism and Electromagnetism Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-c-magnetism-1",
          "quizId": "quiz-phy-c-magnetism-electromagnetism",
          "questionText": "A transformer has 600 turns on its primary and 30 turns on its secondary. The primary is connected to a 240 V a.c. supply. The secondary voltage is",
          "optionA": "4800 V",
          "optionB": "12 V",
          "optionC": "30 V",
          "optionD": "0.03 V",
          "correctOption": "B",
          "subConcept": "Transformer turns ratio",
          "explanation": "Vs = Vp x Ns/Np = 240 x 30/600 = 12 V; the secondary has far fewer turns, so this must be a step-down. The 4800 V answer comes from inverting the ratio and using Np/Ns instead, which no step-down transformer can give.",
          "remediationTip": "Before calculating, say aloud whether the secondary turns are fewer or more, then insist that the voltage move the same way."
        },
        {
          "id": "q-phy-c-magnetism-2",
          "quizId": "quiz-phy-c-magnetism-electromagnetism",
          "questionText": "Which rule gives the direction of the force on a current-carrying conductor placed in a magnetic field?",
          "optionA": "The right-hand grip rule",
          "optionB": "Faraday's law",
          "optionC": "Fleming's left hand rule",
          "optionD": "The clock rule",
          "correctOption": "C",
          "subConcept": "Motor effect direction",
          "explanation": "Fleming's left hand rule relates first finger field, second finger current and thumb force, and it is the rule for a motor. The right-hand grip rule gives the direction of the field round a wire, the clock rule names the poles of a solenoid, and Faraday's law concerns induced e.m.f., not force.",
          "remediationTip": "Write Motor equals Left and Generator equals Right at the top of every electromagnetism answer and keep them there."
        },
        {
          "id": "q-phy-c-magnetism-3",
          "quizId": "quiz-phy-c-magnetism-electromagnetism",
          "questionText": "A wire 0.10 m long carries 5 A at right angles to a field of flux density 0.2 T. The force acting on the wire is",
          "optionA": "0.10 N",
          "optionB": "1.0 N",
          "optionC": "0.50 N",
          "optionD": "10 N",
          "correctOption": "A",
          "subConcept": "Force on a conductor, F = BIl",
          "explanation": "F = BIl = 0.2 x 5 x 0.10 = 0.10 N. The value 1.0 N appears when 0.10 m is written as 10 cm without converting, and 0.50 N when the length is left out of the product altogether.",
          "remediationTip": "Circle every centimetre in a question and convert it to metres on the same line as the substitution."
        },
        {
          "id": "q-phy-c-magnetism-4",
          "quizId": "quiz-phy-c-magnetism-electromagnetism",
          "questionText": "Electrical power is stepped up to a very high voltage before transmission mainly because",
          "optionA": "the higher voltage increases the total power generated",
          "optionB": "transformers cannot work at low voltages",
          "optionC": "high voltage is safer for people near the lines",
          "optionD": "the current is reduced, so the I^2 R heat loss in the lines falls sharply",
          "correctOption": "D",
          "subConcept": "High-voltage transmission",
          "explanation": "For a fixed power, raising the voltage lowers the current, and since the line wastes I^2 R, a smaller current wastes far less: 100 kW at 400 V loses 31,250 W in a 0.5 ohm line but at 10,000 V only 50 W. High voltage is in fact more dangerous, and transformers work at any a.c. voltage.",
          "remediationTip": "Answer this type by writing the chain in three steps: same power, higher voltage, smaller current, therefore smaller I^2 R loss."
        },
        {
          "id": "q-phy-c-magnetism-5",
          "quizId": "quiz-phy-c-magnetism-electromagnetism",
          "questionText": "Soft iron rather than steel is used for the core of an electromagnet because soft iron",
          "optionA": "magnetises and demagnetises almost at once when the current is switched",
          "optionB": "is a natural permanent magnet",
          "optionC": "does not conduct electricity and so stays cool",
          "optionD": "is heavier and therefore more powerful",
          "correctOption": "A",
          "subConcept": "Electromagnet core material",
          "explanation": "An electromagnet must lose its magnetism the moment the circuit opens, which soft iron does because its domains randomise easily; steel retains magnetism and would turn the device into a permanent magnet. Weight and electrical conductivity are irrelevant to that switching property.",
          "remediationTip": "Make a two-column card, soft iron jobs and steel jobs, and give a reason for each entry."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t2-dc-circuits-emf-internal-resistance",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "D.C. Circuits in Practice: EMF, Internal Resistance and Kirchhoff",
    "description": "Cell emf versus terminal voltage, internal resistance found from a V-I graph, series and parallel resistance rules, Kirchhoff laws applied to two-loop circuits, potential dividers, the potentiometer and meter bridge as null methods, fuse selection and ratings, and the safe handling of a charged battery.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The emf E of a cell is the energy it gives per coulomb, measured with no current flowing; the terminal voltage V is what remains at the terminals once the cell is driving a current, and V = E - Ir where r is the internal resistance.\n• For a cell of emf 6 V and internal resistance 0.5 ohm sending 2 A, the internal drop is 2 x 0.5 = 1 V, so the terminals supply 5 V, exactly the same answer as IR for the external resistor carrying 2 A.\n• Plotting terminal voltage V against current I gives a straight line whose intercept on the voltage axis is the emf and whose slope magnitude is the internal resistance; two readings solved as simultaneous equations give the same pair of numbers.\n• Series rule: R total = R1 + R2. Parallel rule: 1/R total = 1/R1 + 1/R2, so 6 ohm and 3 ohm in parallel give 2 ohm, a value smaller than either resistor alone.\n• Kirchhoff first law: current entering a junction equals current leaving it, a statement of conservation of charge. Kirchhoff second law: around any closed loop the sum of the emfs equals the sum of the potential drops, a statement of conservation of energy.\n• In a two-loop circuit with a 12 V battery (negligible internal resistance), a 2 ohm resistor in the main line feeding a parallel pair of 6 ohm and 3 ohm, the combined resistance is 4 ohm, the main current is 3 A, the parallel section takes 6 V, and the branches carry 1 A and 2 A which rejoin as 3 A.\n• A potential divider takes an output across one of two series resistances: Vout = Vin x R2/(R1 + R2), so across a 2 ohm resistor in series with 4 ohm from 12 V the output is 4 V.\n• The potentiometer and the meter bridge are null methods: at the balance point no current flows through the galvanometer, so the unknown cell or resistor is not disturbed by the measuring instrument and no internal-resistance error appears.\n• Meter bridge balance: X = R x l/(100 - l) for a uniform one-metre wire, so a balance at 40 cm with 6 ohm in the right gap gives X = 6 x 40/60 = 4 ohm.\n• A fuse is a thin wire in series that melts when current exceeds its rating; the rating must be the smallest standard value above the working current I = P/V, and a larger fuse is dangerous because the cable overheats first.\n• A charged lead-acid battery is dangerous: its terminals can drive hundreds of amps through a metal spanner, charging gives off hydrogen that a spark can ignite, and the electrolyte is dilute sulphuric acid, so remove jewellery, keep flames away and top up only with distilled water in a ventilated space.",
    "detailedNotes": {
      "overview": "This topic explains why a cell under load gives less voltage than its label, and turns that idea into working circuit skill. You define emf as energy per coulomb and use V = E - Ir with the internal resistance r, then extract E and r from a graph of terminal voltage against current. You consolidate the series and parallel resistance rules and apply both Kirchhoff laws to two-loop networks, finding main-line and branch currents. You then use the potential divider, and see why the potentiometer and meter bridge are called null methods: at balance no current is drawn from the quantity being measured, so internal resistance cannot spoil the reading. Finally you choose fuse ratings from I = P/V and state the safety rules for a charged lead-acid battery, which every Ghanaian workshop and solar installation must follow.",
      "introduction": "Start with a torch that has stood in a drawer for a year: the lamp is dim, yet a voltmeter across the cells still reads close to their labelled emf. Switch on the load and the reading falls, and that gap is the whole subject of internal resistance. Build the two-loop circuit on a board from the GES laboratory kit, measure the three currents with one ammeter moved in turn, and check that they obey the junction rule within reading error. Then set up the meter bridge and record five balance lengths, keeping the key open between readings so the wire never warms.",
      "realWorldContext": "Ghanaian students meet these circuits three times a week: the torch cells in the hostel, the 12 V lead-acid battery behind a solar home system or a mobile-money kiosk inverter, and the WASSCE Physics 3 board with its battery pack, key, ammeter, metre-rule wire and galvanometer. A motorcycle battery rated 12 V can measure 12.6 V on no load and collapse below 9 V while the starter motor cranks, which is internal resistance in action. In off-grid installations the deep-cycle batteries are heavy precisely because low internal resistance is what keeps the terminal voltage up under a 20 A load. Fuse wire, plug tops and the small glass fuse inside a multimeter protect exactly the paths discussed here, and a spanner left across a battery terminal in a Suame workshop is the classic short-circuit accident the safety rules exist to prevent.",
      "objectives": [
        "Distinguish emf from terminal voltage and compute the terminal voltage of a cell carrying current using V = E - Ir",
        "Determine the emf and internal resistance of a cell from a graph of V against I or from two paired readings",
        "Reduce series and parallel networks and apply both Kirchhoff laws to find unknown currents in a two-loop circuit",
        "Explain the null method of the potentiometer and meter bridge, size a fuse from the working current, and state the safety rules for a charged battery"
      ],
      "sections": [
        {
          "title": "EMF, Terminal Voltage and Internal Resistance",
          "content": "The emf of a cell is the energy each coulomb receives inside the cell, measured in volts with the circuit open and no current flowing. Once current flows, that same coulomb must push through the cell paste and plates themselves, which resist it; this opposition is the internal resistance r, and the energy lost per coulomb there is Ir. The terminal voltage that reaches the outside circuit is therefore V = E - Ir. A 6 V cell with 0.5 ohm internal resistance delivering 2 A loses 2 x 0.5 = 1 V internally and presents 5 V at its terminals. The same 5 V appears across the external resistor, since V = IR there, so the two routes to the answer must agree and students should use one as a check on the other. Plot V against I and the line cuts the voltage axis at E, because at zero current nothing is lost internally; its slope has magnitude r. This is why an exhausted cell still shows nearly its rated voltage on a high-resistance voltmeter but dies the instant a torch lamp is connected: the internal resistance has grown so large that the loaded terminal voltage collapses.",
          "bulletPoints": [
            "Emf E is energy per coulomb supplied inside the cell; terminal voltage V is what the outside circuit actually receives.",
            "The governing equation is V = E - Ir, with r the internal resistance in ohms and I the current in amperes.",
            "On a V-I graph the vertical intercept is the emf and the magnitude of the slope is the internal resistance.",
            "An old cell reads near its rated emf on open circuit but collapses under load because r has become large.",
            "Check every answer twice: once from V = E - Ir and once from V = IR for the external resistor."
          ],
          "keyTakeaway": "A cell is a voltage E in series with its own small resistance r; the load only ever sees what survives that internal loss.",
          "realWorldExample": "A hostel student finds her torch lamp dim though a multimeter reads 5.9 V across the two aging cells; when the torch is switched on the same meter falls to 4.2 V, and the drop is the internal resistance of tired cells sharing the current."
        },
        {
          "title": "Series and Parallel Rules, and Kirchhoff Two-Loop Circuits",
          "content": "Resistors in series simply add, because the same coulomb passes through each in turn: R total = R1 + R2 + R3. Resistors in parallel combine by reciprocals, 1/R total = 1/R1 + 1/R2, because each branch gives the charge an extra independent route, and the combined resistance is always smaller than the smallest branch: 6 ohm with 3 ohm in parallel gives 2 ohm. Kirchhoff first law says the current entering a junction equals the current leaving it, which is conservation of electric charge stated for circuits. Kirchhoff second law says that around any closed loop the sum of the emfs equals the sum of the potential drops, which is conservation of energy: a coulomb that gains 12 J from a 12 V battery must spend exactly 12 J climbing the loop back. Take a 12 V battery of negligible internal resistance driving a 2 ohm resistor in the main line, then a junction splitting into a 6 ohm branch and a 3 ohm branch that rejoin. The parallel group is 2 ohm, the whole circuit is 4 ohm, the main current is 12/4 = 3 A, the parallel section carries 3 x 2 = 6 V, so the branches take 6/6 = 1 A and 6/3 = 2 A, and 1 + 2 returns as 3 A at the junction. Walk each loop with the second law and the sums agree.",
          "bulletPoints": [
            "Series: R total = R1 + R2. Parallel: 1/R total = 1/R1 + 1/R2, and the result is less than the smallest resistor.",
            "Junction rule (Kirchhoff first law): current in = current out, because charge is conserved.",
            "Loop rule (Kirchhoff second law): sum of emfs = sum of potential drops, because energy is conserved.",
            "Worked two-loop case: 12 V with 2 ohm in series with (6 parallel 3) gives 3 A main, 1 A and 2 A branches.",
            "The smaller branch resistance carries the larger current: the 3 ohm branch takes twice the current of the 6 ohm branch."
          ],
          "keyTakeaway": "Reduce parallel groups to one resistance first, find the main current, then split it at the junction in inverse proportion to the branch resistances.",
          "realWorldExample": "A kiosk owner at Madina Zongo connects a 12 V fan and a strip of LED lights to the same battery through separate fused leads: two parallel branches, one drawing 2 A and one 1 A, and the lead leaving the battery must carry the full 3 A, which is what decides its fuse."
        },
        {
          "title": "Potential Dividers, Null Methods, Fuses and Battery Safety",
          "content": "Two resistors in series across a supply form a potential divider: the output taken across the lower resistor is Vout = Vin x R2/(R1 + R2), so 2 ohm in series with 4 ohm across 12 V returns 12 x 2/6 = 4 V. The potentiometer and the meter bridge measure by the null method: the unknown voltage or resistance is balanced against a known one on a uniform wire, and at the balance point the galvanometer shows zero current. Because nothing is drawn from the cell or resistor under test at that instant, its own internal resistance causes no error at all, which is why a potentiometer can compare two cell emfs more faithfully than a voltmeter can. In the meter bridge the unknown resistor X in one gap balances the known resistor R at length l of the one-metre wire, giving X = R x l/(100 - l): a balance at 40 cm with 6 ohm gives X = 4 ohm. Protection is part of circuit design. A fuse is a calibrated thin wire in series that melts when its current is exceeded; the correct rating is the smallest standard value above the working current, never above it, because a fatter fuse lets the cable burn first. A charged lead-acid battery demands respect: a dropped spanner across the terminals can carry hundreds of amperes and weld itself there, charging gives off hydrogen that a cigarette or a spark can ignite, and the electrolyte is dilute sulphuric acid, so work with removed jewellery and rings, ventilate the room, and top up only with distilled water.",
          "bulletPoints": [
            "Potential divider: Vout = Vin x R2/(R1 + R2), the basis of dimmer switches and sensor bias networks.",
            "Null methods draw no current from the quantity measured at balance, so internal resistance cannot corrupt the reading.",
            "Meter bridge: X = R x l/(100 - l) for a uniform wire; balance at 40 cm with 6 ohm gives X = 4 ohm.",
            "Fuse rating = smallest standard value above the working current I = P/V; oversized fuse protection is no protection.",
            "Charged battery hazards: short-circuit by metal tools, explosive hydrogen during charging, acid electrolyte; ventilate and remove jewellery."
          ],
          "keyTakeaway": "Measure delicate quantities by balancing them to zero current, and size protective devices by the current you want to survive, not the current you fear.",
          "realWorldExample": "The GES laboratory meter bridge box, with its one-metre nichrome wire, rocking key and travelling clip, is exactly the apparatus used in Physics 3; a school at Cape Coast keeps its spare 12 V battery for the sound system fused at 10 A because the amplifier draws 8 A at full volume."
        }
      ],
      "commonMistakes": [
        "Writing the emf as the terminal voltage whenever current flows, and answering 6 V where V = E - Ir gives 5 V; the two are equal only on open circuit.",
        "Finding the current with I = E/R and forgetting the internal resistance; the correct total resistance is R + r, so I = E/(R + r).",
        "Reading the slope of the V-I graph as the emf; the emf is the intercept on the voltage axis, the slope magnitude is r.",
        "Choosing a bigger fuse because it will not keep blowing; a fuse rated above the working current lets the cable insulation burn before the fuse acts."
      ],
      "wassceExamTips": [
        "Paper 2 awards the method mark for writing V = E - Ir or stating Kirchhoff law in words before any substitution; a correct number with no stated law loses the M mark.",
        "In Paper 3 meter-bridge practicals, open the key between readings and say you did so to prevent the wire heating and its resistance drifting; examiners allot a mark for that precaution.",
        "When two V and I pairs are given, set up E = V1 + I1r and E = V2 + I2r, subtract to get r, then substitute back for E; quote r in ohms and E in volts to earn both A marks.",
        "Paper 1 parallel-resistance shortcuts: for two resistors use product over sum, (6 x 3)/(6 + 3) = 2 ohm; this answers the objective in seconds and avoids reciprocal slips."
      ],
      "summaryChecklist": [
        "Can I state emf and terminal voltage in words and connect them with V = E - Ir?",
        "Can I extract emf and internal resistance from a V-I graph or from two paired readings?",
        "Can I reduce a two-loop network and find every branch current with the junction and loop rules?",
        "Can I explain why the meter bridge is accurate only because it balances with zero current?",
        "Can I choose a fuse rating for an appliance and list the three hazards of a charged lead-acid battery?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-dc-circuits-emf-internal-resistance-1",
        "title": "Terminal Voltage, Current and Load Power for a Real Cell",
        "problem": "A cell of emf 6 V and internal resistance 0.5 ohm is connected to an external resistor of 2.5 ohm. Find the current in the circuit, the terminal voltage, the power delivered to the resistor, and the efficiency of the cell.",
        "stepByStepSolution": [
          "Step 1 (M1): Model the cell as its emf E in series with its internal resistance r, so the total resistance round the loop is R + r and I = E/(R + r).",
          "Step 2 (M1): Substitute: I = 6/(2.5 + 0.5) = 6/3 = 2 A.",
          "Step 3 (M1): Terminal voltage: V = E - Ir = 6 - 2 x 0.5.",
          "Step 4 (A1): V = 5 V, checked by V = IR = 2 x 2.5 = 5 V across the external resistor.",
          "Step 5 (M1): Power delivered to the load: P = I^2 R = 2^2 x 2.5.",
          "Step 6 (A1): P = 10 W.",
          "Step 7 (M1): Efficiency = useful output power over total power = terminal voltage over emf = 5/6.",
          "Step 8 (A1): Efficiency is 83 percent; final answers: current 2 A, terminal voltage 5 V, load power 10 W, efficiency about 83 percent."
        ],
        "keyTakeaway": "The lost volts Ir are the difference between what the cell is labelled and what the circuit receives, and the efficiency of the cell is simply V/E."
      },
      {
        "id": "ex-phy-dc-circuits-emf-internal-resistance-2",
        "title": "Kirchhoff Laws on a Two-Loop Circuit",
        "problem": "A 12 V battery of negligible internal resistance drives a circuit in which a 2 ohm resistor in the main line is followed by two parallel branches of 6 ohm and 3 ohm that rejoin before returning to the battery. Find the main current, the voltage across the parallel group, and each branch current.",
        "stepByStepSolution": [
          "Step 1 (M1): Combine the parallel branches by product over sum: R = (6 x 3)/(6 + 3) = 18/9 = 2 ohm.",
          "Step 2 (M1): Total circuit resistance is 2 + 2 = 4 ohm, so the main current is I = V/R = 12/4.",
          "Step 3 (A1): Main-line current = 3 A.",
          "Step 4 (M1): Voltage across the parallel section: V = I x R parallel = 3 x 2; equivalently the loop rule gives 12 - 3 x 2 = 6 V.",
          "Step 5 (A1): The parallel group carries 6 V.",
          "Step 6 (M1): Branch currents from Ohm law in each branch: I1 = 6/6 = 1 A and I2 = 6/3 = 2 A.",
          "Step 7 (A1): Kirchhoff first law check: 1 + 2 = 3 A, exactly the main current returning; final answers 3 A main, 6 V across the group, 1 A in the 6 ohm branch and 2 A in the 3 ohm branch."
        ],
        "keyTakeaway": "Reduce the parallel block first, take one main current, then split it at the junction in inverse proportion to the branch resistances, and always close with the junction-rule check."
      }
    ],
    "quiz": {
      "id": "quiz-phy-dc-circuits-emf-internal-resistance",
      "topicId": "shs3-phy-t2-dc-circuits-emf-internal-resistance",
      "title": "D.C. Circuits, EMF and Kirchhoff Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-dc-circuits-emf-internal-resistance-1",
          "quizId": "quiz-phy-dc-circuits-emf-internal-resistance",
          "questionText": "A cell of emf 6 V and internal resistance 0.5 ohm supplies a current of 2 A. What is the potential difference across its terminals?",
          "optionA": "5 V",
          "optionB": "6 V",
          "optionC": "7 V",
          "optionD": "4 V",
          "correctOption": "A",
          "subConcept": "Terminal voltage under load",
          "explanation": "V = E - Ir = 6 - 2 x 0.5 = 5 V. The 6 V answer ignores internal loss, 7 V adds the drop instead of subtracting it, and 4 V comes from doubling the drop.",
          "remediationTip": "Draw the cell as a 6 V source with a 0.5 ohm resistor in series and mark the one volt that appears across that internal resistor."
        },
        {
          "id": "q-phy-dc-circuits-emf-internal-resistance-2",
          "quizId": "quiz-phy-dc-circuits-emf-internal-resistance",
          "questionText": "Kirchhoff junction rule, that the current entering a junction equals the current leaving it, is a direct statement of which principle?",
          "optionA": "Conservation of energy",
          "optionB": "Ohm law",
          "optionC": "Conservation of electric charge",
          "optionD": "Conservation of momentum",
          "correctOption": "C",
          "subConcept": "Kirchhoff laws and their basis",
          "explanation": "Charge cannot pile up at a junction in a steady circuit, so whatever arrives must leave: that is conservation of charge. Conservation of energy underlies the loop rule instead, and Ohm law is a separate material relation.",
          "remediationTip": "Link each law to its conservation idea on one card: junction rule to charge, loop rule to energy."
        },
        {
          "id": "q-phy-dc-circuits-emf-internal-resistance-3",
          "quizId": "quiz-phy-dc-circuits-emf-internal-resistance",
          "questionText": "A 6 ohm resistor is connected in parallel with a 3 ohm resistor. What is the combined resistance?",
          "optionA": "9 ohm",
          "optionB": "2 ohm",
          "optionC": "4.5 ohm",
          "optionD": "18 ohm",
          "correctOption": "B",
          "subConcept": "Parallel resistance",
          "explanation": "Product over sum: (6 x 3)/(6 + 3) = 18/9 = 2 ohm, which is smaller than either branch as it must be. Adding gives the series value 9 ohm, averaging gives 4.5 ohm, and multiplying gives 18 ohm, none of which is a parallel combination.",
          "remediationTip": "After any parallel calculation ask whether the answer is smaller than the smallest resistor; if not, the method went wrong."
        },
        {
          "id": "q-phy-dc-circuits-emf-internal-resistance-4",
          "quizId": "quiz-phy-dc-circuits-emf-internal-resistance",
          "questionText": "In a meter bridge the unknown resistor X sits in the left gap and a 6 ohm standard in the right gap. The balance point falls 40 cm from the left end. What is X?",
          "optionA": "1.5 ohm",
          "optionB": "6 ohm",
          "optionC": "9 ohm",
          "optionD": "4 ohm",
          "correctOption": "D",
          "subConcept": "The meter bridge",
          "explanation": "At balance no current flows through the galvanometer, and X = R x l/(100 - l) = 6 x 40/60 = 4 ohm. Using 6 x 60/40 = 9 ohm inverts the ratio, and 1.5 ohm divides instead.",
          "remediationTip": "Sketch the wire, mark the 40 cm and 60 cm lengths, and remember that the gap over the shorter length holds the smaller resistance."
        },
        {
          "id": "q-phy-dc-circuits-emf-internal-resistance-5",
          "quizId": "quiz-phy-dc-circuits-emf-internal-resistance",
          "questionText": "Which practice is correct when handling a charged lead-acid battery during topping-up and testing?",
          "optionA": "Test for life by touching a metal spanner briefly across the terminals",
          "optionB": "Remove rings and tools, keep sparks and flames away, and work in a ventilated space",
          "optionC": "Seal the vent caps tightly and top up while the charger is running",
          "optionD": "Store the battery beside a working paraffin lamp to keep it warm",
          "correctOption": "B",
          "subConcept": "Battery safety",
          "explanation": "Charging a lead-acid battery gives off hydrogen, which a spark can ignite, and a spanner across the terminals carries a destructive short-circuit current; ventilation and removing metal objects are the standard protections. Sealing vents traps gas, and an open flame near the battery is exactly the ignition source to avoid.",
          "remediationTip": "Write the three hazards (short circuit, hydrogen and acid) with one control measure each and revise them before any Paper 3 session."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t2-alternating-current-national-grid",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Alternating Current, Transformers and the National Grid",
    "description": "The a.c. waveform with peak and rms values at 50 Hz, the transformer turns ratio and power relation, step-up and step-down stations, the journey from Akosombo and Kpong to the consumer, line loss I2R as the reason for high voltage, ECG tariffs and the kWh meter, and the roles of live, neutral and protective earth.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• An alternating current reverses direction periodically; in Ghana the supply completes 50 cycles each second, so the frequency is 50 Hz and the period is 1/50 = 0.02 s.\n• The rms (root-mean-square) value of a sine voltage is peak divided by the square root of 2, or peak x 0.707: a peak of 340 V gives an rms of about 240 V, which is the value printed on appliances and quoted by ECG; the peak-to-peak swing is 680 V.\n• The rms value is the heating-equivalent value: a 240 V rms supply drives the same power through a resistor as a 240 V d.c. supply would.\n• A transformer works only on alternating current: the changing flux in the laminated iron core induces a voltage in the secondary proportional to its turns, Vs/Vp = Ns/Np.\n• For an ideal transformer power in equals power out, Vp x Ip = Vs x Is, so a step-up in voltage is a step-down in current: raising 11 kV to 132 kV with a turns ratio of 12 divides the current by 12.\n• A step-down transformer taking 132 kV to 11 kV with a 200-turn secondary needs a 2400-turn primary; check direction of change against the ratio before committing to an answer.\n• Line loss is I^2 R: sending 10 kW over a 10 ohm line at 500 V needs 20 A and wastes 4000 W, while the same power at 10 kV needs 1 A and wastes only 10 W, four hundred times less.\n• Akosombo and Kpong generate at about 11 kV, the station switchyard steps up to 132 kV for the transmission ring, regional substations step down through 33 kV and then 11 kV, and pole-can transformers finish at 240 V single phase for the compound.\n• One unit of electricity is one kilowatt hour: a 2 kW heater run 3 hours daily for 30 days uses 180 kWh, and at GH¢1.20 a unit the cost is GH¢216.00, which is what the ECG prepaid meter debits.\n• Transformer losses that keep real units below ideal are winding heating, hysteresis and eddy currents in the core; lamination and oil cooling exist to suppress them.\n• Three conductors serve the house: live carries the 240 V supply, neutral returns the working current and is connected to earth at the substation, and the protective earth carries nothing until a fault makes it save a life by tripping the fuse or breaker.\n• Never let neutral and earth be interchanged at a socket: earth normally carries zero current, and wiring it to carry load current puts every earthed metal case at a dangerous potential.",
    "detailedNotes": {
      "overview": "This topic carries the student from the d.c. board to the a.c. nation. You read the sine waveform of the 50 Hz supply and convert between peak and rms values with Vrms = Vpeak/1.414, then master the transformer relation Vs/Vp = Ns/Np with the ideal power relation VpIp = VsIs. With those tools you trace power from the Akosombo and Kpong generators through 132 kV transmission and successively lower distribution voltages to the household socket, and you prove with P = I^2 R why the grid must transmit at high voltage. You finish by computing units and cost on the ECG prepaid meter and by separating the roles of live, neutral and protective earth, the three-wire pattern that every Paper 3 safety question tests.",
      "introduction": "Begin by sketching one cycle of a sine wave and labelling peak, peak-to-peak and period; then take a nameplate from a kettle or iron and identify the 240 V as an rms value. Use the low-voltage a.c. terminals of the laboratory power supply with two coils and an iron core to light a small bulb through a step-up and again through a step-down, listening for the 50 Hz hum that proves the core is being driven alternately. Finally read the prepaid meter before and after one hour of a known appliance and check the units debited against power x time.",
      "realWorldContext": "Every Ghanaian classroom is lit by this system: the two VRA stations on the Volta, Akosombo with its eight units and Kpong below it, feed a 132 kV transmission ring that runs through 132 kV substations at Afienya, Tema and Kumasi towards Tamale, Ho and the western regions, after which distribution lines and the familiar pole transformers bring the supply to 240 V in the compound. ECG and the utilities serving each region meter the result with prepaid card meters whose rate is commonly near GH¢1.20 a unit at the lower block; the price per unit must be confirmed on the current tariff, but the arithmetic of units is fixed. The hum from the transformer can on a street pole, the five-cycle flicker of a fluorescent tube filmed on a phone, and the 1.8 A drawn by a 440 W appliance at 240 V are all observable facts of this grid. House wiring follows the live-neutral-earth pattern, the earth pin of the three-pin plug being longer so it connects first and breaks last.",
      "objectives": [
        "Describe the a.c. sine waveform and convert between peak and rms values of voltage and current at 50 Hz",
        "Apply Vs/Vp = Ns/Np and the ideal power relation to step-up and step-down transformer problems",
        "Justify high-voltage transmission with the line-loss formula P = I^2 R and trace the grid from Akosombo to the household",
        "Compute energy units in kilowatt hours and the corresponding ECG cost, and state the separate roles of live, neutral and earth"
      ],
      "sections": [
        {
          "title": "The Alternating Waveform: Peak, RMS and 50 Hz",
          "content": "A coil rotating in a magnetic field generates a voltage that rises, falls, reverses and repeats: the sine wave. In Ghana the cycle repeats 50 times every second, so the frequency is 50 Hz and one period lasts 1/50 = 0.02 s, a fact that appears in nearly every Paper 1 set. The highest excursion of the wave is the peak value V0; the useful comparison with d.c. is the root-mean-square value Vrms = V0/1.414, defined so that the a.c. supply heats a resistor exactly as fast as an equal d.c. voltage would. The mains labelled 240 V therefore has a peak of 240 x 1.414, about 340 V, and swings 680 V peak-to-peak, which is why a shock from the socket is far nastier than the number suggests. Moving-coil meters read zero on a.c. because the average of a full cycle is nothing; moving-iron meters and hot-wire types follow the rms value, and a cathode-ray oscilloscope shows the waveform directly, one full cycle spanning four divisions at 5 ms per division. When an appliance nameplate reads 240 V, 2 kW, every figure on it is an rms or average-power value, and the peak current inside the cable is 1.414 times the rms current you compute.",
          "bulletPoints": [
            "Frequency 50 Hz means 50 complete cycles per second; the period is 0.02 s.",
            "Vrms = Vpeak/1.414; a peak of 340 V corresponds to the quoted 240 V rms mains.",
            "The rms value is the heating equivalent of a direct voltage of the same number.",
            "Peak-to-peak mains voltage is twice the peak, about 680 V, the reason the socket is so dangerous.",
            "A moving-coil meter reads zero on a.c.; the CRO or a moving-iron meter reveals the waveform and rms value."
          ],
          "keyTakeaway": "Quote rms for power work, convert with the factor 1.414 whenever a peak or peak-to-peak value is demanded, and keep 50 Hz and 0.02 s paired in memory.",
          "realWorldExample": "A physics club at a school in Takoradi sets the CRO to 5 ms per division and measures exactly four divisions for one mains cycle, confirming the period of 0.02 s and the frequency of 50 Hz directly from the wall socket through the correct probe."
        },
        {
          "title": "Transformers: Turns Ratio and the Power Relation",
          "content": "The transformer is two coils linked by a shared iron core, with no electrical contact between them. Alternating current in the primary produces a changing magnetic flux, the core channels it through the secondary, and Faraday law gives each turn the same induced voltage, so the secondary voltage stands to the primary voltage exactly as their turns do: Vs/Vp = Ns/Np. A 200-turn secondary on a 2400-turn primary halves nothing but divides by twelve: 132 kV over 12 is 11 kV, and multiplying the primary by the voltage ratio instead of dividing gives the classic wrong answer. For an ideal transformer no power is created or destroyed, so Vp x Ip = Vs x Is: voltage is stepped up only at the price of stepping the current down by the same factor. Real units fall short of ideal because the winding resistance heats, the reversing magnetisation wastes energy as hysteresis, and circulating currents in the core add eddy losses; laminating the core and bathing it in oil addresses these, which is why a distribution transformer can is full of oil. In the laboratory the small transformers for bell circuits and power supplies obey the same rules at low voltage, and lighting a lamp on the secondary simply makes the primary draw more current from the supply, exactly as the power relation demands.",
          "bulletPoints": [
            "Transformer action needs changing flux: it works on a.c., never on steady d.c.",
            "Voltage ratio equals turns ratio: Vs/Vp = Ns/Np.",
            "Ideal power equality VpIp = VsIs means a step-up in voltage is a step-down in current.",
            "132 kV to 11 kV is a ratio of 12 to 1; a 200-turn secondary pairs with a 2400-turn primary.",
            "Losses come from winding heating, hysteresis and eddy currents; a laminated, oil-cooled core limits them."
          ],
          "keyTakeaway": "The turns ratio decides voltage, the power relation decides current, and the two together explain every transformer question worth asking.",
          "realWorldExample": "The pole-mounted transformer outside a house at East Legon is a step-down unit: the 11 kV distribution line enters it, thousands of turns of fine wire give way to a few heavy turns, and 240 V single phase leaves for the compound riser."
        },
        {
          "title": "The National Grid, Line Loss, the Meter and Household Safety",
          "content": "Power leaves Akosombo and Kpong at generating voltage near 11 kV, is stepped up in the station switchyard to 132 kV for the transmission ring, dropped at regional substations through 33 kV and 11 kV, and finally stepped down on the pole to 240 V for the house. Each step exists because of one formula: the heat wasted in a line is P = I^2 R. Sending 10 kW over a line of 10 ohm at 500 V needs 20 A and wastes 4000 W, forty percent of the power; sending the same 10 kW at 10 kV needs 1 A and wastes 10 W, four hundred times less, because the current fell twenty-fold and the loss goes with its square. That is the whole defence of high-voltage transmission, and examiners award the mark for the words reduces the current, never for safer at high voltage, which is false. At the consumer the meter records energy, not power: one unit is one kilowatt hour, 3.6 MJ, so the 2 kW heater run three hours daily for thirty days spends 180 kWh, and at an illustrative GH¢1.20 a unit that is GH¢216.00, the number the prepaid card drains. Inside the house, live carries the supply, neutral returns the working current and is itself connected to earth at the substation, and the green earth wire bonds metal cases so any fault drives a large current that blows the fuse or trips the breaker; interchanging neutral and earth leaves cases live, the fault electricians hunt hardest.",
          "bulletPoints": [
            "Grid chain: generate near 11 kV, step to 132 kV, transmit, drop through 33 kV and 11 kV, end at 240 V.",
            "Line loss P = I^2 R: 20 A wastes 4000 W in 10 ohm while 1 A wastes only 10 W.",
            "High voltage is chosen to cut the current for a fixed power, which cuts the loss by the square of the ratio.",
            "One unit = 1 kWh = 3.6 MJ; 2 kW for 3 hours daily over 30 days is 180 kWh, GH¢216.00 at GH¢1.20 per unit.",
            "Live supplies, neutral returns, earth protects; earth normally carries no current at all."
          ],
          "keyTakeaway": "The grid is an argument for the relation loss = I^2 R built in steel and oil; every voltage step buys a smaller current and a much smaller loss.",
          "realWorldExample": "When a feeder transformer serving a line at Spintex fails, ECG re-routes the 132 kV ring to feed the area from another substation, and the affected streets rely on generators precisely because that voltage cannot simply be tapped at the pole without the step-down chain."
        }
      ],
      "commonMistakes": [
        "Calling the 240 V mains a peak value; 240 V is the rms figure, and the peak is 340 V, a slip that ruins every energy or insulation question built on it.",
        "Inverting the transformer ratio and writing Ns = Np x Vp/Vs for a step-up; check first whether the secondary voltage should be larger and let the turns follow.",
        "Forgetting to square the current in I^2 R, so a 20 A line is charged 20 x 10 = 200 W instead of 4000 W.",
        "Confusing the neutral with the earth wire, or letting the earth carry working current; in sound installation earth carries nothing until a fault."
      ],
      "wassceExamTips": [
        "Paper 1 converts peak to rms almost every year: divide by 1.414, and eliminate options built by multiplying or halving the peak.",
        "Paper 2 line-loss answers earn method marks in sequence: state P = VI to get the current, then P = I^2 R for the loss, then one sentence linking the result to the choice of 132 kV.",
        "In cost questions, power in kilowatts times hours gives units directly; keep minutes as fractions of an hour so 90 minutes enters as 1.5 h before multiplying.",
        "Paper 3 safety vivas ask the three-wire question word for word: live at about 240 V, neutral at earth potential returning the current, earth bonded to cases carrying none in use; learn the sentence and give both function and fault role."
      ],
      "summaryChecklist": [
        "Can I sketch one mains cycle, mark peak and period, and convert 340 V peak to 240 V rms?",
        "Can I find secondary turns with Vs/Vp = Ns/Np and check the direction against the power relation?",
        "Can I compute the I^2 R loss for a line at two voltages and state the saving as a ratio?",
        "Can I trace the grid chain from Akosombo to the compound socket in the right voltage order?",
        "Can I convert appliance hours into units and cedis, and distinguish live, neutral and earth?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-alternating-current-national-grid-1",
        "title": "Rms and Peak Values for a Mains Heater, with Monthly Cost",
        "problem": "The peak voltage of the mains supply is 340 V at 50 Hz. An electric heater rated 2 kW is operated from it for 3 hours every day. Find the rms voltage, the rms current in the heater, the peak current, and the cost of the energy used in a thirty-day month at GH¢1.20 per unit.",
        "stepByStepSolution": [
          "Step 1 (M1): Relate rms to peak for a sine wave: Vrms = Vpeak/sqrt(2) = Vpeak/1.414.",
          "Step 2 (A1): Vrms = 340/1.414, which is about 240 V, the standard quoted mains voltage.",
          "Step 3 (M1): Heater current from power = voltage x current with rms values: I = P/V = 2000/240.",
          "Step 4 (A1): I(rms) = 8.3 A.",
          "Step 5 (M1): Peak current = rms current x 1.414 = 8.33 x 1.414.",
          "Step 6 (A1): Peak current is about 11.8 A.",
          "Step 7 (M1): Energy for the month = power in kW x daily hours x days = 2 x 3 x 30.",
          "Step 8 (A1): Energy = 180 kWh, that is 180 units; cost = 180 x GH¢1.20 = GH¢216.00."
        ],
        "keyTakeaway": "All power arithmetic uses rms values; multiply by 1.414 only when a question asks for the peak, and let units equal kilowatts times hours before any tariff touches the answer."
      },
      {
        "id": "ex-phy-alternating-current-national-grid-2",
        "title": "Line Loss Transmitted Directly versus at High Voltage",
        "problem": "A small generating station must deliver 10 kW down a line whose total resistance is 10 ohm. Compare the power wasted as heat when the supply is sent directly at 500 V with the waste when a step-up transformer raises it to 10 kV. If the step-up transformer has a 100-turn primary, how many turns must its secondary have?",
        "stepByStepSolution": [
          "Step 1 (M1): Current follows from power = voltage x current: I = P/V = 10 000/500 = 20 A for direct transmission.",
          "Step 2 (M1): Line loss = I^2 R = 20^2 x 10.",
          "Step 3 (A1): Direct loss = 4000 W, forty percent of the power sent.",
          "Step 4 (M1): At 10 kV the current is 10 000/10 000 = 1 A, so the loss is 1^2 x 10 = 10 W.",
          "Step 5 (A1): The loss at 10 kV is 10 W, a reduction by a factor of 4000/10 = 400.",
          "Step 6 (M1): Turns ratio = output voltage over input voltage = 10 000/500 = 20, so Ns = Np x 20.",
          "Step 7 (A1): Secondary turns = 100 x 20 = 2000 turns; final answers 4000 W versus 10 W, ratio 400, and 2000 turns."
        ],
        "keyTakeaway": "Raising the transmission voltage by twenty cuts the current to one-twentieth and the heating loss by twenty squared, four hundred times; that squared factor is the reason grids exist at 132 kV."
      }
    ],
    "quiz": {
      "id": "quiz-phy-alternating-current-national-grid",
      "topicId": "shs3-phy-t2-alternating-current-national-grid",
      "title": "Alternating Current, Transformers and the Grid Quiz",
      "timeLimitMinutes": 12,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-alternating-current-national-grid-1",
          "quizId": "quiz-phy-alternating-current-national-grid",
          "questionText": "The peak voltage of a mains supply is 340 V. Which value is closest to its rms voltage?",
          "optionA": "170 V",
          "optionB": "480 V",
          "optionC": "240 V",
          "optionD": "680 V",
          "correctOption": "C",
          "subConcept": "Peak and rms values",
          "explanation": "Vrms = Vpeak/1.414 = 340/1.414, about 240 V. Half the peak gives 170 V, doubling it gives 680 V which is the peak-to-peak swing, and 480 V has no standard relation to the peak.",
          "remediationTip": "Write the pair 240 V rms and 340 V peak on your formula card so the two mains numbers always travel together."
        },
        {
          "id": "q-phy-alternating-current-national-grid-2",
          "quizId": "quiz-phy-alternating-current-national-grid",
          "questionText": "The mains frequency in Ghana is 50 Hz. How long does one complete cycle take?",
          "optionA": "0.02 s",
          "optionB": "0.05 s",
          "optionC": "20 s",
          "optionD": "50 s",
          "correctOption": "A",
          "subConcept": "Frequency and period",
          "explanation": "Period = 1/frequency = 1/50 = 0.02 s. The options 20 s and 50 s come from reading the relation upside down, and 0.05 s is a slip from 1/20.",
          "remediationTip": "Drill the pairing: 50 Hz with 0.02 s, 5 Hz with 0.2 s, 0.5 Hz with 2 s, until period is simply one over frequency."
        },
        {
          "id": "q-phy-alternating-current-national-grid-3",
          "quizId": "quiz-phy-alternating-current-national-grid",
          "questionText": "A station transformer steps 11 kV up to 132 kV. Its primary coil has 200 turns. How many turns does the secondary have?",
          "optionA": "17 turns",
          "optionB": "200 turns",
          "optionC": "1200 turns",
          "optionD": "2400 turns",
          "correctOption": "D",
          "subConcept": "Transformer turns ratio",
          "explanation": "The voltage ratio is 132/11 = 12, so the secondary needs 200 x 12 = 2400 turns; a step-up must have more secondary turns than primary. Dividing by 12 gives the 17-turn trap, which would step the supply down.",
          "remediationTip": "Before computing, decide which side should have more turns; then multiply so the answer obeys that judgement."
        },
        {
          "id": "q-phy-alternating-current-national-grid-4",
          "quizId": "quiz-phy-alternating-current-national-grid",
          "questionText": "For a fixed transmitted power, the voltage on a line is raised twenty-fold. What happens to the heating loss in the line?",
          "optionA": "It becomes twenty times larger because the voltage is larger",
          "optionB": "The current falls to one-twentieth and the loss falls to one four-hundredth",
          "optionC": "It is unchanged because the power transmitted is fixed",
          "optionD": "The current falls to one-twentieth and the loss also falls to one-twentieth",
          "correctOption": "B",
          "subConcept": "Line loss and transmission voltage",
          "explanation": "Current is P/V, so twenty times the voltage means one-twentieth the current; loss is I^2 R, so it drops by 20 squared, four hundred times. Ignoring the square produces option D, and ignoring the current relation produces A or C.",
          "remediationTip": "Recompute the 10 kW over 10 ohm example at 500 V and 10 kV until the 4000 W and 10 W figures feel obvious."
        },
        {
          "id": "q-phy-alternating-current-national-grid-5",
          "quizId": "quiz-phy-alternating-current-national-grid",
          "questionText": "A 2 kW heater runs 3 hours every day for 30 days. At GH¢1.20 per unit, what does that heating cost for the month?",
          "optionA": "GH¢216.00",
          "optionB": "GH¢7.20",
          "optionC": "GH¢180.00",
          "optionD": "GH¢240.00",
          "correctOption": "A",
          "subConcept": "Units and cost of electrical energy",
          "explanation": "Energy = 2 kW x 3 h x 30 = 180 kWh, and cost = 180 x GH¢1.20 = GH¢216.00. GH¢180.00 forgets the tariff, GH¢7.20 prices only one day, and GH¢240.00 mis-divides the energy.",
          "remediationTip": "Keep the chain written as power in kW, then hours, then units, then cedis, and never skip the days multiplier."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t2-solar-power-energy-storage",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 10,
    "title": "Solar Power and Energy Storage: Physics of PV Systems in Ghana",
    "description": "Solar irradiance and peak sun hours in Ghana, panel watt ratings and series or parallel wiring, the charge controller, battery amp-hour capacity and depth of discharge, inverter efficiency, sizing a system for a shop or clinic, solar lanterns and phone charging, and the effects of dust and heat on output.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The sun delivers roughly 1000 W per square metre at ground level in full noon light; Ghana averages about 5 to 6 peak sun hours a day, meaning the daily energy equals what that 1000 W/m^2 flux would give in 5 to 6 hours, with the northern savanna richer than the wet forest zone of the south.\n• Peak sun hours are not day length: a twelve-hour daylight day with thin morning and evening light may still average only about 5 peak sun hours, because weak light contributes proportionally little energy.\n• A panel rated 100 W delivers that power only under standard test conditions of 1000 W/m^2 irradiance and 25 degree Celsius cell temperature; real roof output is commonly 70 to 90 percent of the label.\n• Series wiring adds voltages while the current stays at the panel value; parallel wiring adds currents while the voltage stays the same; installers mix both to reach the controller input range.\n• The charge controller sits between panels and battery: it limits the charging current, stops overcharging at the full-set voltage, and disconnects the load before the battery is drained below its safe floor.\n• Battery capacity in amp-hours converts to energy only with voltage: energy = V x Ah, so a 12 V, 100 Ah battery stores 1200 Wh nominally.\n• Lead-acid batteries should not be discharged beyond about 50 percent depth of discharge if they are to live long, so only 600 Wh of that 1200 Wh is dependable, repeatable supply.\n• The inverter changes battery direct current to the 230 to 240 V alternating current of appliances at roughly 90 percent efficiency, so a 420 Wh day of alternating-current load needs 420/0.9, about 467 Wh from the battery.\n• Sizing chain: list appliances, multiply watts by hours to get Wh per day, divide by inverter efficiency, divide the battery requirement by depth of discharge, and divide the daily energy by peak sun hours to get the panel rating in watts.\n• A shop using 420 Wh a day with 90 percent inverter and 5 peak sun hours needs about 467/5 = 93 W of panel, so a 100 W panel and a 12 V, 100 Ah battery are the practical parts.\n• Heat is the silent thief: crystalline cells lose about 0.4 percent output per degree Celsius above 25 degrees, so cells at 55 degrees on a still Kumasi roof give 12 percent less, and panels need an air gap beneath them.\n• Harmattan dust and soot from nearby cooks can film the glass and cut output by 5 to 10 percent; wiping panels cool and dry each morning is the cheapest maintenance in off-grid Ghana.",
    "detailedNotes": {
      "overview": "This topic applies energy, current and efficiency ideas to the photovoltaic systems now common across Ghana. You begin with the solar resource: irradiance near 1000 W/m^2 and the peak-sun-hour bookkeeping that turns sun charts into panel sizes. You then learn what a panel wattage really promises, how series and parallel wiring change voltage and current, and why a charge controller protects the battery from both overcharge and deep discharge. You convert battery amp-hours into watt-hours, apply a 50 percent depth of discharge for lead-acid, and account for inverter losses of about 90 percent. Finally you size a complete system for a shop or clinic, and explain why heat and Harmattan dust make a clean, ventilated panel worth noticeably more than a dirty, baked one.",
      "introduction": "Start by inventorying the appliances a room actually needs and how long each runs; that watt-hour list is the design brief of every PV system. If the school has a small demonstration panel, measure its open-circuit voltage in shade and in full sun with a multimeter, and note how the current with a small lamp load changes between the two. Compare a solar lantern left dusty on the shelf with one wiped clean, and time how long each lights the dormitory: the loss is not mysterious, it is irradiance area x transmission through the dirt.",
      "realWorldContext": "Photovoltaics now light homes beyond the reach of the grid, from lanterns in Navrongo dormitories to shop frontages in Tamale charging mobile phones for a fee, from vaccine fridges at a health post near Wa to a 100 Ah battery and small inverter behind a mobile-money kiosk at Bawku that must survive daytime outages. The same physics governs all of them: the daily watt-hour budget, the panel that refills the battery during the abundant northern sunshine, the controller that saves the battery from the deep discharge a family would otherwise cause, and the midday heat on a tin roof that quietly trims panel output by around ten percent. Installers who skip the air gap and the cleaning routine end up buying panels twice, and households that oversize the inverter then deep-cycle the battery kill a system in one rainy season; exam answers that connect these habits to the numbers carry the most weight.",
      "objectives": [
        "Explain irradiance and peak sun hours and quote typical Ghanaian values for the daily solar resource",
        "Describe what a panel watt rating measures and predict the effect of series and parallel wiring on voltage and current",
        "Convert battery amp-hours to watt-hours and apply depth of discharge and inverter efficiency to a load list",
        "Size a small PV system for a stated shop or clinic load and justify cleaning and ventilation maintenance"
      ],
      "sections": [
        {
          "title": "The Solar Resource: Irradiance and Peak Sun Hours",
          "content": "Above the atmosphere the sun carries about 1360 W per square metre; on a clear Ghanaian noon the ground receives near 1000 W per square metre, the figure used to rate panels. Because light is weaker after dawn, before dusk and under cloud, engineers compress the whole day into peak sun hours: the number of hours at a full 1000 W/m^2 that would deliver the same energy as the real varying day. A day with twelve hours of daylight may average only five or six peak sun hours, since early and late light contributes proportionally little; across Ghana the annual average lies roughly between 4.5 and 6 kWh per square metre per day, the north near the higher figure and the humid forest zone a little lower, dropping further in the June rains. This single number drives every design: a 100 W panel exposed to 5 peak sun hours receives 100 x 5 = 500 Wh of generation that day before losses. Students should learn the distinction between the instantaneous quantity, irradiance in W/m^2, the energy quantity, kWh/m^2 per day, and the panel rating in watts, because confusing power with energy collapses the sizing chain at its first step.",
          "bulletPoints": [
            "Full noon light at the ground is about 1000 W/m^2, the irradiance at which panels are rated.",
            "Peak sun hours restate the whole day as hours of that full 1000 W/m^2 light.",
            "Peak sun hours are not day length: weak light counts weakly.",
            "Ghana averages roughly 4.5 to 6 kWh/m^2 a day, higher in the savanna north, lower in the wet south.",
            "Daily generation = panel watts x peak sun hours; a 100 W panel at 5 peak sun hours yields 500 Wh."
          ],
          "keyTakeaway": "Treat the sun as an energy banker: peak sun hours convert the daylight account into the watt-hours a panel can actually withdraw.",
          "realWorldExample": "A lantern seller at Gbonja in Tamale tests panels in December, when clear skies give nearly six peak sun hours, and warns customers that the same lantern dims through August because the rains cut the daily deposit well below that."
        },
        {
          "title": "Panels, Controllers and the Battery: Watts, Volts and Amp-Hours",
          "content": "A panel label such as 100 W is a promise made under standard test conditions: 1000 W/m^2 of light falling on cells held at 25 degrees Celsius. Real rooftops deliver less, and the panel voltage also shifts with temperature and load, which is why installers quote the open-circuit voltage and the working current separately. Wiring changes what the array presents: two identical 12 V panels in series give about 24 V at the same current, while in parallel they give 12 V at twice the current; series suits long cable runs because higher voltage loses less I^2 R on the wire, parallel tolerates partial shading of one panel better. Between array and battery sits the charge controller, a small gatekeeper that steers charging current into the battery, lifts the float when the battery reaches its full-set voltage, and cuts the load off before a lead-acid battery sinks below roughly 11.5 to 12 V, because driving a lead-acid cell to empty sulfates its plates and shortens its life dramatically. The battery itself is rated in amp-hours at a stated voltage: a 12 V, 100 Ah battery nominally holds 12 x 100 = 1200 Wh, but with a 50 percent depth-of-discharge habit only about 600 Wh is dependable night after night. Mixing amp-hours with watt-hours without the voltage is the most common arithmetic fault in student answers.",
          "bulletPoints": [
            "Panel watts are measured at 1000 W/m^2 and 25 degree Celsius cell temperature; field output is lower.",
            "Series wiring adds voltages at unchanged current; parallel wiring adds currents at unchanged voltage.",
            "Series arrays suit long cable runs; parallel arrays tolerate partial shading.",
            "The charge controller prevents overcharge and cuts the load before deep discharge damages the battery.",
            "Battery energy = V x Ah; 12 V with 100 Ah stores 1200 Wh, of which 50 percent depth of discharge leaves 600 Wh usable."
          ],
          "keyTakeaway": "A PV system is three guardians in a row: the panel meters the sun, the controller protects the battery, and the depth of discharge decides how much of the battery is really yours.",
          "realWorldExample": "A kiosk operator at Walewale lost two batteries in one year because his refrigerator ran the battery flat nightly; a technician fitted a low-voltage disconnect and the third battery served four rainy seasons."
        },
        {
          "title": "Inverters, Sizing and Real Losses: A Worked Shop Design",
          "content": "Most household appliances are alternating current machines, so the battery direct current must pass through an inverter that typically wastes about ten percent: 420 Wh drawn by lamps and a small television becomes 420/0.9, roughly 467 Wh drawn from the battery. Sizing now follows one disciplined chain. Take the load list: six 10 W LED lamps burning five hours use 300 Wh, a 30 W television for four hours uses 120 Wh, total 420 Wh per day. Divide by inverter efficiency to get 467 Wh from the battery. Let the battery hold two nights of that and accept a 50 percent depth of discharge, and the nominal energy should be near 934 Wh, that is about 934/12 = 78 Ah, so a 12 V, 100 Ah battery is the sensible purchase. For the array, the panels must refill 467 Wh each day within five peak sun hours, needing 467/5 = 93 W, so a single 100 W panel does the work with margin. Then the enemies appear: cells at 55 degrees Celsius, thirty above standard, lose about 0.4 percent each degree, twelve percent of output, which is why panels are bolted with a ventilating gap above a tin roof; and a Harmattan dust film can steal another five to ten percent, which is why weekly wiping at dawn is the cheapest energy on the market. Pure direct-current lanterns and phone chargers skip the inverter entirely, which is why solar lanterns light a room for a fraction of the battery a alternating-current lamp consumes.",
          "bulletPoints": [
            "Inverter efficiency near 90 percent: battery energy = alternating-current load energy / 0.9.",
            "Sizing chain: watt-hour load list, efficiency, depth of discharge, then panel watts over peak sun hours.",
            "Shop case: 420 Wh daily, 467 Wh from battery, 100 Ah battery, and a 100 W panel at five peak sun hours.",
            "Heat derating of about 0.4 percent per degree Celsius above 25 degrees cuts roughly 12 percent at 55 degrees.",
            "D.C. appliances and phone chargers avoid the inverter loss altogether."
          ],
          "keyTakeaway": "Size the load first, the losses second and the sun third; every credible quotation for a system is just that chain written in order.",
          "realWorldExample": "A provision shop at Techiman that lights six small lamps and a radio from a 100 W panel and 100 Ah battery trades until ten each night through the dry season, but the owner wipes the panel every Harmattan morning because a dusty film cost him an hour of light the previous January."
        }
      ],
      "commonMistakes": [
        "Confusing peak sun hours with the length of daylight, and assuming twelve hours of daylight supplies twelve hours of full panel output.",
        "Treating the panel wattage as a guaranteed output at every moment; the rating belongs to standard test conditions, not a hazy or hot afternoon.",
        "Quoting the whole battery amp-hour figure as available energy, ignoring both the voltage multiplication to watt-hours and the 50 percent depth-of-discharge limit.",
        "Forgetting the inverter loss, so the panel and battery are sized for the appliance watts alone and the system dies an hour before dusk."
      ],
      "wassceExamTips": [
        "In Paper 2 sizing answers, show the chain as separate lines with units: Wh per appliance per day, then total Wh, then divide by efficiency, then divide by peak sun hours; the method marks sit in those lines, not in the final figure.",
        "Convert between amp-hours and watt-hours by writing energy = V x Ah explicitly; an answer of 1200 Wh for a 12 V, 100 Ah battery earns the substitution mark even before the depth-of-discharge step.",
        "Paper 1 enjoys the two-panel wiring question; decide first whether the target is more volts or more amps, since series gives volts, parallel gives amps.",
        "In Paper 3 alternative-practical items on a demonstration panel, record irradiance or lamp distance, voltage and current for the loaded panel, and state the precautions: same lamp height for repeat readings, and allow for the panel warming between sets."
      ],
      "summaryChecklist": [
        "Can I define irradiance and peak sun hours and give a realistic figure for Ghana?",
        "Can I state the standard test conditions behind a panel watt rating?",
        "Can I predict array voltage and current for series and parallel wiring of identical panels?",
        "Can I convert a battery plate of 12 V, 100 Ah into stored and usable watt-hours?",
        "Can I size panel, controller, battery and inverter for a stated daily watt-hour load list?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-solar-power-energy-storage-1",
        "title": "Sizing a Panel and Battery for a Shop Lighting Set",
        "problem": "A shop runs six 10 W LED lamps for 5 hours each night and a 30 W radio for 4 hours each night. The system uses an inverter of 90 percent efficiency, a 12 V battery discharged no deeper than 50 percent each night, and a location with 5 peak sun hours per day. Find the daily energy needed from the battery, the minimum nominal battery capacity in amp-hours, and the panel rating needed.",
        "stepByStepSolution": [
          "Step 1 (M1): Energy of the lamps = 6 x 10 W x 5 h = 300 Wh; energy of the radio = 30 x 4 = 120 Wh; load total = 420 Wh per day.",
          "Step 2 (M1): Allow for the inverter: battery energy = load/efficiency = 420/0.9.",
          "Step 3 (A1): The battery must supply about 467 Wh each day.",
          "Step 4 (M1): With a 50 percent depth of discharge the nominal stored energy must be 467/0.5 = 934 Wh.",
          "Step 5 (M1): Amp-hours follow from energy = V x Ah: Ah = 934/12.",
          "Step 6 (A1): Ah = 77.8, so the practical choice is a 12 V, 100 Ah battery.",
          "Step 7 (M1): Panel rating = daily battery energy over peak sun hours = 467/5.",
          "Step 8 (A1): The panel must be rated about 93 W, so a 100 W panel is specified; final answers 467 Wh per day, 100 Ah at 12 V, 100 W panel."
        ],
        "keyTakeaway": "Load list, efficiency, depth of discharge, peak sun hours: the four divisions in that order are the whole of system sizing."
      },
      {
        "id": "ex-phy-solar-power-energy-storage-2",
        "title": "How Long Will a Battery Run a 60 W Fan?",
        "problem": "A 12 V, 100 Ah lead-acid battery runs a 60 W direct-current fan through nights without sun. If the battery is never discharged beyond 50 percent, for how many hours can the fan run, and what energy in joules does the usable portion represent?",
        "stepByStepSolution": [
          "Step 1 (M1): Nominal energy stored = V x Ah = 12 x 100.",
          "Step 2 (A1): Stored energy = 1200 Wh.",
          "Step 3 (M1): Usable energy at 50 percent depth of discharge = 1200 x 0.5.",
          "Step 4 (A1): Usable energy = 600 Wh.",
          "Step 5 (M1): Run time = usable energy over load power = 600/60.",
          "Step 6 (A1): The fan runs 10 hours.",
          "Step 7 (M1): Convert to joules: 600 Wh = 600 x 3600 J.",
          "Step 8 (A1): Usable energy = 2.16 x 10^6 J; final answers 1200 Wh stored, 600 Wh usable, 10 hours of fan-light at 60 W."
        ],
        "keyTakeaway": "Amp-hours become comparable with appliance watts only after multiplying by the battery voltage; the 50 percent habit is what keeps that energy repeatable for years."
      }
    ],
    "quiz": {
      "id": "quiz-phy-solar-power-energy-storage",
      "topicId": "shs3-phy-t2-solar-power-energy-storage",
      "title": "Solar Power and Energy Storage Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-solar-power-energy-storage-1",
          "quizId": "quiz-phy-solar-power-energy-storage",
          "questionText": "What is the function of the charge controller in a solar home system?",
          "optionA": "It converts battery direct current into alternating current for appliances",
          "optionB": "It limits charging current, prevents overcharging and disconnects the load before deep discharge",
          "optionC": "It increases the irradiance reaching the panels on cloudy days",
          "optionD": "It stores surplus energy for use after sunset",
          "correctOption": "B",
          "subConcept": "Charge controller role",
          "explanation": "The controller regulates the flow between panel and battery, stopping overcharge at the full-set voltage and cutting the load before the lead-acid battery is damaged by deep discharge. Conversion to a.c. is the inverter, and storage is the battery itself; no device can increase irradiance.",
          "remediationTip": "Draw the four-block system, panel, controller, battery, inverter, and write one protecting function under each box."
        },
        {
          "id": "q-phy-solar-power-energy-storage-2",
          "quizId": "quiz-phy-solar-power-energy-storage",
          "questionText": "A panel is marked 100 W. What does that rating mean?",
          "optionA": "It supplies 100 W whenever daylight touches it",
          "optionB": "It supplies 100 W only at noon in direct sunlight",
          "optionC": "It can store 100 W of energy overnight",
          "optionD": "It delivers at most 100 W under standard test conditions of 1000 W/m^2 and 25 degrees Celsius",
          "correctOption": "D",
          "subConcept": "Panel watt rating",
          "explanation": "The wattage is the manufacturer figure measured at 1000 W/m^2 irradiance with cells at 25 degrees Celsius; field output varies with light, angle, cloud and heat. Panels supply power, they do not store it.",
          "remediationTip": "Recite the two standard test condition numbers aloud with the rating whenever you read a panel nameplate."
        },
        {
          "id": "q-phy-solar-power-energy-storage-3",
          "quizId": "quiz-phy-solar-power-energy-storage",
          "questionText": "Two identical 12 V, 5 A panels are wired in series. What does the combination present to the controller?",
          "optionA": "About 24 V at 5 A",
          "optionB": "About 12 V at 10 A",
          "optionC": "About 24 V at 10 A",
          "optionD": "About 12 V at 5 A",
          "correctOption": "A",
          "subConcept": "Series and parallel arrays",
          "explanation": "Series adds the voltages while the same current flows through both panels, giving 24 V at 5 A. Adding currents at 12 V describes the parallel arrangement instead.",
          "remediationTip": "Remember one line: series stacks volts, parallel stacks amps; test it on batteries, which behave the same way."
        },
        {
          "id": "q-phy-solar-power-energy-storage-4",
          "quizId": "quiz-phy-solar-power-energy-storage",
          "questionText": "A 12 V, 200 Ah battery is used with a 50 percent depth of discharge. What is its dependable stored energy?",
          "optionA": "2400 Wh",
          "optionB": "100 Wh",
          "optionC": "1200 Wh",
          "optionD": "600 Wh",
          "correctOption": "C",
          "subConcept": "Battery energy and depth of discharge",
          "explanation": "Nominal energy = V x Ah = 12 x 200 = 2400 Wh; half of it, 1200 Wh, is the dependable portion at 50 percent depth of discharge. Answering 2400 Wh ignores the discharge limit, and 600 Wh halves twice.",
          "remediationTip": "Always compute watt-hours first, then apply the depth-of-discharge fraction in a separate step."
        },
        {
          "id": "q-phy-solar-power-energy-storage-5",
          "quizId": "quiz-phy-solar-power-energy-storage",
          "questionText": "Why does a dusty, uninsulated panel on a still tin roof in the dry season give far less than its rated output?",
          "optionA": "Dust converts alternating current to direct current inside the panel",
          "optionB": "The panel voltage rises with heat, wasting the surplus",
          "optionC": "A hot roof melts the solder joints between cells",
          "optionD": "Dust blocks part of the light and heat above 25 degrees Celsius derates the cells, each cutting output by percent",
          "correctOption": "D",
          "subConcept": "Dust and thermal derating",
          "explanation": "Soiling reduces the light reaching the cells, and crystalline cells lose roughly 0.4 percent of output for each degree Celsius above 25 degrees, so a baked, dirty panel can shed close to twenty percent. Panels produce direct current regardless of dust, and modest heat does not melt properly made joints.",
          "remediationTip": "Estimate the derate numerically: 30 degrees above standard times 0.4 percent equals 12 percent lost; that calculation answers most heat questions."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t3-modern-physics-electronics-atomic",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 4,
    "title": "Atomic, Nuclear Physics and Electronics",
    "description": "Cathode rays and the electron, X-rays, the three radiations and their properties, decay equations, half-life and background correction, fission, fusion and E = mc^2, semiconductors, the diode and rectification, the transistor as switch and amplifier, logic gates, and nuclear and electronic applications in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Cathode rays are streams of fast electrons produced at the cathode of a discharge tube at low pressure; they travel in straight lines from cathode to anode, throw a shadow, make zinc sulphide fluoresce, are deflected by both electric and magnetic fields, and are attracted to a positive plate, so they must be negatively charged particles.\n• Crookes radiometer and Maltese cross tube demonstrate the rectilinear propagation and the momentum of cathode rays, and J.J. Thomson measured the charge-to-mass ratio in 1897, showing the electron is a constituent of all matter with mass about 1/1836 of the proton mass.\n• The electron carries charge e = 1.6 x 10^-19 C and has mass 9.1 x 10^-31 kg; a charge of 1 coulomb therefore holds 1/(1.6 x 10^-19) = 6.25 x 10^18 electrons.\n• X-rays are produced when fast electrons are suddenly stopped by a metal target of high melting point such as tungsten; they travel in straight lines at the speed of light, penetrate soft tissue, ionise gases, affect photographic film and fluoresce certain salts, and they are dangerous, so radiographers use lead aprons and short exposures.\n• Radioactivity is the spontaneous, random disintegration of unstable nuclei with emission of alpha, beta or gamma radiation; it is unaffected by temperature, chemical combination or the presence of a field, since it is a nuclear and not a molecular process.\n• The alpha particle is a helium nucleus, 4He with 2 protons and 2 neutrons, mass number 4 and charge +2; it is the most ionising and least penetrating, stopped by paper or a few centimetres of air, and only slightly deflected by a field.\n• The beta particle is a fast electron of charge -1 and mass 1/1836 u, ejected when a neutron in the nucleus changes into a proton; it penetrates further than alpha, is stopped by a few millimetres of aluminium, and is strongly deflected.\n• Gamma radiation is electromagnetic radiation of very short wavelength travelling at 3.0 x 10^8 m/s, with no mass and no charge; it is the least ionising and most penetrating, reduced only by thick lead or concrete, and it is not deflected by any field.\n• Detection is by the Geiger-Muller tube and counter, by photographic film, by a zinc sulphide screen and by the cloud chamber; a Geiger counter also measures the background count rate, which must be subtracted from every reading.\n• Decay equations balance both the mass number and the atomic number: uranium-238 losing an alpha particle becomes thorium-234, since 238 = 234 + 4 and 92 = 90 + 2; carbon-14 emitting a beta particle becomes nitrogen-14, since 14 = 14 + 0 and 6 = 7 + (-1).\n• Half-life is the time taken for half the unstable nuclei in a sample to decay, equivalently the time for the activity or count rate to fall to half its value; after n half-lives the fraction remaining is (1/2)^n, so 1, 2, 3 and 5 half-lives leave 1/2, 1/4, 1/8 and 1/32 of the original.\n• Worked half-life: a source of half-life 4 days reads 2440 counts per minute with a background of 40 counts per minute, so the true initial rate is 2400; when the reading falls to 640, the true rate is 600, which is one quarter of 2400, that is 2 half-lives or 8 days; one further half-life would leave 300 counts per minute.\n• Worked mass decay: 80 g of a radioisotope of half-life 5 days kept for 15 days has passed through 15/5 = 3 half-lives, so the undecayed mass is 80 x (1/2)^3 = 80/8 = 10 g and 70 g has decayed.\n• Carbon-14 dating works because living matter keeps a steady carbon-14 content while it lives and loses it after death at the known half-life of about 5730 years, so a sample showing one quarter of the modern activity is 2 x 5730 = 11,460 years old; the isotope is made in the atmosphere when cosmic-ray neutrons strike nitrogen-14.\n• Fission is the splitting of a heavy nucleus such as uranium-235 after it absorbs a slow neutron: U-235 + n gives Ba-141 + Kr-92 + 3n, and both the mass numbers, 235 + 1 = 141 + 92 + 3 = 236, and the charges, 92 = 56 + 36, balance; the three new neutrons continue a chain reaction, control rods of cadmium or boron absorb neutrons to slow it, and a moderator of graphite or water slows the neutrons so they can cause further fission.\n• Fusion is the joining of light nuclei, for example deuterium with tritium to give helium plus a neutron and energy, and it needs temperatures of the order of ten million kelvin; it powers the Sun and the stars, it is the hydrogen bomb, and no country yet generates electricity from it commercially.\n• Mass-energy equivalence is E = mc^2 with c = 3.0 x 10^8 m/s, so converting 1 g, that is 1 x 10^-3 kg, yields 9.0 x 10^13 J, and 0.1 g gives 9.0 x 10^12 J; the missing mass in a fission reactor appears as this energy, which is why nuclear fuels release vastly more energy per kilogram than burnt coal.\n• Worked energy equivalence: 9.0 x 10^12 J is 9.0 x 10^12/(3.6 x 10^6) = 2.5 x 10^6 kWh, and at GH¢0.50 per unit that energy would be worth GH¢1,250,000, all of it from a mass of one tenth of a gram.\n• Semiconductors are elements such as silicon and germanium with four outer electrons; doping with a pentavalent impurity such as phosphorus gives an n-type material carrying extra electrons, while doping with a trivalent impurity such as boron or aluminium gives a p-type material full of holes.\n• A p-n junction is a diode: in forward bias it conducts once the applied voltage passes about 0.6 to 0.7 V for silicon, in reverse bias it conducts almost not at all, and that one-way action is used for rectification, a half-wave circuit taking one diode and a full-wave circuit taking two with a centre-tapped secondary or four in a bridge, with a smoothing capacitor across the output.\n• A transistor is two p-n junctions back to back, npn or pnp, with emitter, base and collector leads; a small base current controls a much larger collector current, so it works as a switch, driving a relay or a lamp from a sensor, or as an amplifier with current gain beta = Ic/Ib.\n• Worked transistor gain: with beta = 100 and a base current of 50 microampere, the collector current is 100 x 50 x 10^-6 = 5 x 10^-3 A, that is 5 mA, which is why a sensor that supplies only microamperes can switch a load of milliamperes.\n• Logic gates combine binary inputs: AND outputs 1 only when both inputs are 1, OR outputs 1 when at least one input is 1, NOT inverts a single input, and NAND and NOR are universal gates from which all the others can be built; they sit inside phone keypads, digital counters, inverters and solar charge controllers.",
    "detailedNotes": {
      "overview": "This closing topic takes the student from the inside of the atom to the electronics in every pocket. It opens with cathode rays and the discovery of the electron, moves through X-rays and the three kinds of nuclear radiation with the equations that balance their decays, and then treats half-life quantitatively, including the background count subtraction that examiners insist upon. Fission, fusion and E = mc^2 explain nuclear energy and its arithmetic, while the second half of the topic builds electronics from the doped semiconductor to the diode, the rectifier, the transistor as switch and amplifier, and the logic gates. Ghanaian applications run through the whole topic: radiotherapy at Korle-Bu, isotope tracer work by the Ghana Atomic Energy Commission at Kwabenya, food irradiation that keeps yams and onions in store, fruit-fly suppression in the Volta Region, and the solar panels, inverters and phone masts that depend on semiconductor devices.",
      "introduction": "Handle the ideas in the order evidence came. Use the discharge tube and note the green glow at the glass, the shadow thrown by the Maltese cross and the way the beam bends with a magnet held near the tube, then state what each observation proves about cathode rays. Draw a small table for alpha, beta and gamma with seven rows: composition, mass, charge, speed, penetration, ionising power and deflection, and fill it from the notes rather than from memory, because Paper 1 tests exactly those rows. For half-life, run the coin-toss or dice simulation of random decay with the whole class and plot the falling numbers, then do the arithmetic of (1/2)^n on paper. Finish with the breadboard: test a diode both ways with a milliammeter, build a half-wave rectifier and view its output on the cathode-ray oscilloscope, and drive a small relay from a transistor so the class sees amplification as a click.",
      "realWorldContext": "Ghana uses nuclear radiation without a power reactor. The Ghana Atomic Energy Commission at Kwabenya near Accra operates a small research reactor used for training and for producing radioisotopes, and its scientists apply phosphorus-32 as a tracer to study how cocoa and maize take up fertiliser, which is a Paper 2 style answer to the question of where radioisotopes are used in Ghana. The same commission runs irradiation work that delays sprouting in stored yams, onions and potatoes and that treats fruit fly populations in the Volta Region, where irradiated males are released so that fewer insects damage the mango and pepper crop. In hospitals, radiotherapy machines at Korle-Bu in Accra and at the treatment centre serving Tamale aim gamma rays at tumours, and radiographers wear lead aprons because they know the ionising danger. In the home, a smoke detector contains a tiny sealed alpha source that cannot be touched, solar panels on Northern Region roofs are large diodes that turn light into current, and every mobile-money handset is a package of transistors and logic gates. Laboratory safety mirrors that reality: sources are handled with long tongs, kept in lead-lined boxes, never pointed at a person, and the Geiger counter is read with the background taken first.",
      "objectives": [
        "Describe the production and properties of cathode rays and X-rays and state the charge and mass of the electron",
        "Compare alpha, beta and gamma radiation by composition, charge, mass, penetration, ionising power and behaviour in a field",
        "Complete and balance nuclear decay equations for alpha and beta emission",
        "Define half-life and calculate remaining mass, count rate and elapsed time, correcting a measured count rate for background radiation",
        "Explain fission, fusion, chain reaction and E = mc^2 with numerical work, and describe the diode, rectifier, transistor and the AND, OR and NOT gates with applications"
      ],
      "sections": [
        {
          "title": "Cathode Rays, the Electron and X-rays",
          "content": "A discharge tube is a glass tube carrying two metal electrodes and evacuated to a low pressure. When a high voltage is applied, a stream of particles leaves the cathode and travels in a straight line to the anode, and where it strikes the glass the tube glows; that stream is the cathode ray. Four observations carry four conclusions, and Paper 2 asks for them in that form. The ray throws a sharp shadow of a cross placed in its path, so it travels in straight lines. It makes zinc sulphide fluoresce, so its energy appears as light. It is bent by a magnet and driven towards a positive plate while repelled from a negative one, so it carries negative charge. It turns a light wheel placed in its path, so it has momentum and therefore mass. J.J. Thomson measured how much a known field deflected the beam and found the charge-to-mass ratio, proving the particle is about 1/1836 as massive as a proton and is present in every material: the electron, with charge 1.6 x 10^-19 C and mass 9.1 x 10^-31 kg. Since charge is quantised, one coulomb corresponds to 1/(1.6 x 10^-19) = 6.25 x 10^18 electrons. X-rays are a different product of the same fast electrons: when they are stopped abruptly by a metal target of high melting point, commonly tungsten, most of their energy becomes heat and a small part appears as X-rays, electromagnetic radiation of very short wavelength. X-rays travel in straight lines at 3.0 x 10^8 m/s, pass through flesh but are absorbed by bone and metal, ionise gases, blacken photographic film and make certain salts fluoresce. That bundle of properties gives the uses: radiography in hospitals, CT and dental work, security screening of baggage at Kotoka International Airport, and the detection of cracks and blowholes in welded joints on pipelines and machine frames at Takoradi. The hazards demand the precautions: lead aprons and gloves, the shortest useful exposure, collimation of the beam to the part being examined, distance wherever possible, and never repeating a film without cause.",
          "bulletPoints": [
            "Cathode rays are electrons travelling cathode to anode in straight lines; they fluoresce glass, throw shadows and are deflected by fields.",
            "Electron charge 1.6 x 10^-19 C, mass 9.1 x 10^-31 kg, about 1/1836 of the proton mass.",
            "X-rays arise when fast electrons are stopped by a tungsten target.",
            "X-rays ionise gases, blacken film and penetrate soft tissue but not bone or lead.",
            "Uses include radiography, baggage screening and weld flaw detection; precautions include lead aprons and short exposure."
          ],
          "keyTakeaway": "Each cathode-ray observation is evidence for one property, and each property of X-rays is matched by a use and by a hazard.",
          "realWorldExample": "A radiographer at a hospital in Kumasi collimates the X-ray beam to the wrist being examined, stands behind a lead screen and keeps the exposure short, because the same penetration that shows the fracture also ionises living cells."
        },
        {
          "title": "Alpha, Beta and Gamma Radiation",
          "content": "Radioactivity is the spontaneous and random break-up of unstable nuclei, accompanied by emissions that were named alpha, beta and gamma from their behaviour in a magnetic field. The alpha particle is a helium nucleus, two protons and two neutrons bound together, written as a helium-4 nucleus with mass number 4 and charge +2; because it is heavy and doubly charged it rips electrons off the atoms it passes, making it the most strongly ionising radiation, and for the same reason it is quickly spent, travelling only a few centimetres in air and stopped by paper or thin foil. The beta particle is an electron of charge -1 and mass about 1/1836 u, created inside the nucleus when a neutron changes into a proton and ejects the electron; it penetrates further, is stopped by a few millimetres of aluminium, ionises far less than alpha, and is deflected strongly by electric and magnetic fields because of its small mass. Gamma radiation is electromagnetic, of even shorter wavelength than X-rays, moving at 3.0 x 10^8 m/s with no mass and no charge; it ionises least, passes through paper and aluminium as if they were barely there, is merely reduced by several centimetres of lead or a metre of concrete, and is not deflected at all by a field. The three are told apart in the laboratory by absorption tests behind aluminium sheets of increasing thickness, by their photographic effect, and by their traces in a field, and they are detected by the Geiger-Muller tube and counter, by photographic film, by a zinc sulphide screen and by a cloud chamber. One comparison must be quoted exactly: ionising power falls from alpha to beta to gamma while penetrating power rises in the same order. The danger depends on the route of exposure. An alpha source outside the body is almost harmless because dead skin stops it, yet if it is inhaled or swallowed it dumps all its ionising energy into living tissue, which is why sealed sources are never opened and why dust from an old luminous dial is a genuine hazard. Safety practice for the school laboratory follows the same three words: time, distance, shielding. Handle a source with long tongs to keep distance, take readings quickly to limit time, keep the source in its lead-lined box between demonstrations, point it away from people at all times, record the background count first, and log the reading on the class radiation register.",
          "bulletPoints": [
            "Alpha is a helium-4 nucleus, charge +2, most ionising, stopped by paper, slightly deflected.",
            "Beta is an electron, charge -1, stopped by a few millimetres of aluminium, strongly deflected.",
            "Gamma is electromagnetic, no mass and no charge, most penetrating, reduced by thick lead, undeflected.",
            "Geiger-Muller counter, photographic film, zinc sulphide screen and cloud chamber are the detectors.",
            "Safety by time, distance and shielding: tongs, short exposure, lead-lined box, source never pointed at a person."
          ],
          "keyTakeaway": "Ionising power and penetrating power run in opposite orders, and alpha is worst inside the body though weakest outside it.",
          "realWorldExample": "A technician checking the fill level of bottles on a drinks line in Tema fixes a beta source above the conveyor and a detector below it, because the liquid absorbs a predictable fraction of the beta particles and the drop in count rate tells the machine when the bottle is full."
        },
        {
          "title": "Decay Equations, Half-Life and Background Radiation",
          "content": "Nuclear equations are balanced on two counts at once, and no other rule is needed. Emitting an alpha particle removes 4 from the mass number and 2 from the atomic number, so uranium-238 becomes thorium-234: the mass line reads 238 = 234 + 4 and the charge line reads 92 = 90 + 2, and the element has changed because its proton count changed. Emitting a beta particle leaves the mass number untouched and raises the atomic number by one, because a neutron has become a proton, so carbon-14 becomes nitrogen-14 with 14 = 14 + 0 and 6 = 7 plus minus 1. Gamma emission changes neither number, since the nucleus merely sheds excitation energy. Decay is random for any one nucleus but statistically steady for a large sample, and the measure of that steadiness is the half-life: the time taken for half the unstable nuclei in a sample to decay, or equivalently the time for the activity or count rate to halve. After n half-lives the fraction remaining is (1/2)^n, so one half-life leaves one half, two leave one quarter, three leave one eighth, and five leave one thirty-second. A radioisotope of half-life 5 days reduces an 80 g sample to 80/(2^3) = 10 g in 15 days, with 70 g already transformed into its daughter element. Count-rate problems require one extra step that students routinely skip: subtract the background count first. A source read at 2440 counts per minute against a background of 40 counts per minute has a true rate of 2400; if the meter later reads 640, the true rate is 600, exactly one quarter of 2400, so two half-lives have passed and with a half-life of 4 days the elapsed time is 8 days. Half-life also fixes the choice of a medical tracer: technetium-99m, used in imaging, has a half-life of about 6 hours, short enough that the patient's dose falls rapidly yet long enough to complete the scan. Carbon-14 dating uses the same law on a much longer scale. Living tissue keeps exchanging carbon with the atmosphere, and the carbon-14 it holds, produced when cosmic-ray neutrons strike nitrogen-14 high in the air, is therefore in equilibrium while the organism lives. After death the exchange stops and the carbon-14 decays with a half-life of about 5730 years, so charcoal from an excavated furnace at a Ghanaian archaeology site that shows one quarter of the modern activity has lost three quarters and is 2 x 5730 = 11,460 years old. The method reaches its limit after about ten half-lives, when too little carbon-14 remains to measure, which is why older stone artefacts are dated by other isotopes.",
          "bulletPoints": [
            "Alpha decay: mass number falls by 4 and atomic number by 2, so uranium-238 gives thorium-234.",
            "Beta decay: mass number unchanged, atomic number rises by 1, so carbon-14 gives nitrogen-14.",
            "Gamma decay changes neither number; only the energy state of the nucleus falls.",
            "Fraction remaining after n half-lives is (1/2)^n, so 15 days at 5 days half-life leaves 10 g from 80 g.",
            "Subtract background before any half-life calculation: 2440 minus 40 is 2400, 640 minus 40 is 600, a ratio of one quarter, so two half-lives.",
            "Carbon-14 with a half-life of about 5730 years dates organic remains, one quarter activity meaning about 11,460 years."
          ],
          "keyTakeaway": "Balance the mass line and the charge line, then halve step by step, and never use a raw meter reading without subtracting the background.",
          "realWorldExample": "A student at a school laboratory in Achimota measures the background at 40 counts per minute, then a class source at 2440 counts per minute, and reports the corrected 2400 counts per minute as the activity of the source, which is the wording the examiner expects."
        },
        {
          "title": "Fission, Fusion and Mass-Energy Equivalence",
          "content": "Fission is the splitting of a heavy nucleus. When uranium-235 absorbs a slow neutron it becomes unstable and breaks into two medium nuclei, commonly barium-141 and krypton-92, together with three fast neutrons and a large release of energy. Both balances hold: the mass numbers give 235 + 1 = 141 + 92 + 3 = 236 and the charges give 92 = 56 + 36. The three released neutrons can be absorbed by three more uranium nuclei, each of which splits and releases more neutrons, so the reaction sustains itself as a chain reaction. If too many neutrons escape or are absorbed by impurities the chain dies; if every generation continues it grows, and an uncontrolled growth in a supercritical mass of fissile material is the bomb, while a controlled one is the reactor. In a reactor the fast neutrons are slowed by a moderator, graphite or heavy water or ordinary water, because slow neutrons cause fission in uranium-235 far more readily; control rods of cadmium or boron are pushed in to absorb neutrons and slow the reaction down, pulled out to speed it up; and a coolant carries the heat away to make steam for the turbines. Fusion is the reverse strategy: very light nuclei, isotopes of hydrogen such as deuterium and tritium, are forced close enough together that the nuclear attraction binds them into helium, ejecting a neutron and releasing energy. Because positive nuclei repel fiercely, fusion needs temperatures of the order of ten million kelvin to give them enough speed, which is why it powers the Sun and the stars and why the hydrogen bomb releases its energy explosively. Controlled fusion for electricity generation remains experimental, since no container holds material at that temperature; magnetic confinement is the line of research. Einstein's relation E = mc^2 accounts for the energy. Mass and energy are two measures of the same thing, and the conversion factor is the square of the speed of light, so with c = 3.0 x 10^8 m/s, c^2 = 9.0 x 10^16 J per kilogram. Converting 1 g, that is 1 x 10^-3 kg, yields 1 x 10^-3 x 9.0 x 10^16 = 9.0 x 10^13 J, and 0.1 g gives 9.0 x 10^12 J. In a reactor the products weigh very slightly less than the original nucleus plus neutron, and that missing mass appears exactly as this energy. The scale explains everything: 9.0 x 10^12 J equals 9.0 x 10^12 divided by 3.6 x 10^6, that is 2.5 x 10^6 kWh, two and a half million units, from a mass one tenth of a gram. At a tariff of GH¢0.50 per unit that energy would be worth GH¢1,250,000, whereas burning a kilogram of coal produces only tens of megajoules and a few cedis of energy. The same relation accounts for the Sun, which radiates by fusion and steadily loses mass as it shines.",
          "bulletPoints": [
            "Uranium-235 plus a slow neutron gives barium-141 plus krypton-92 plus three neutrons plus energy, with 236 = 236 and 92 = 56 + 36.",
            "A chain reaction needs enough neutrons captured: moderator slows neutrons, cadmium or boron control rods absorb them.",
            "Fusion of hydrogen isotopes to helium requires about ten million kelvin and powers the Sun.",
            "E = mc^2 with c^2 = 9.0 x 10^16 J per kilogram, so 1 g gives 9.0 x 10^13 J.",
            "9.0 x 10^12 J is 2.5 x 10^6 kWh, two and a half million units from 0.1 g of mass.",
            "A fission reactor is the controlled version, a bomb the uncontrolled version, of the same chain reaction."
          ],
          "keyTakeaway": "Mass defects pay for nuclear energy, and one tenth of a gram of mass out-produces a coal yard.",
          "realWorldExample": "The research reactor at Kwabenya runs at a small power rating for training and isotope production rather than for generating electricity, since Ghana's grid power still comes from the Volta and Akosombo hydro stations and from thermal plants at Takoradi."
        },
        {
          "title": "Semiconductors, the Diode, the Transistor and Logic Gates",
          "content": "Semiconductors sit between conductors and insulators in their ability to carry current, and their useful property is that the ability can be dialled. Pure silicon, with four outer electrons forming covalent bonds, conducts poorly, and a small current in it is due to thermally generated electron-hole pairs. Adding a pentavalent impurity such as phosphorus, which has five outer electrons, leaves one electron loose in the lattice and produces n-type material, negative carriers being the majority. Adding a trivalent impurity such as boron or aluminium creates a missing bond, a hole, and gives p-type material in which holes carry the majority current. Join p-type to n-type and the junction behaves asymmetrically: push the p side positive and holes and electrons are driven towards the junction so current flows readily, which is forward bias and for silicon it needs about 0.6 to 0.7 V before the current grows quickly; make the p side negative and carriers are pulled away from the junction so almost nothing flows, which is reverse bias. That one-way action is rectification. A half-wave rectifier uses one diode and passes only the positive half cycles of the alternating input, so its output is a series of pulses with a long gap. A full-wave rectifier either uses two diodes with a centre-tapped secondary or four diodes in a bridge, and it inverts the negative half cycles instead of discarding them, giving pulses at twice the input frequency and a higher average output. A capacitor placed across the output charges at each peak and discharges into the load between peaks, smoothing the ripple, and this is exactly what the small board inside a phone charger does with the mains waveform. The transistor is two junctions in one crystal, either npn or pnp, with an emitter that supplies carriers, a very thin lightly doped base, and a collector that gathers them. A small change in base current produces a large change in collector current, with current gain beta equal to Ic divided by Ib, so a transistor with beta = 100 and a base current of 50 microamperes delivers 100 x 50 x 10^-6 = 5 x 10^-3 A, that is 5 mA in the collector circuit. Used as a switch the transistor is either cut off, carrying no collector current, or saturated, carrying all it can, so a sensor that supplies only microamperes can command a relay, a motor or a lamp; used as an amplifier the weak signal at the base appears as a faithful but larger copy at the collector, which is how a microphone drives a loudspeaker. The smallest electronic decision is a logic gate. An AND gate gives an output of 1 only when both inputs are 1; an OR gate gives 1 when at least one input is 1; a NOT gate inverts a single input, so 1 becomes 0; NAND and NOR combine those functions and are universal, since any logic circuit can be built from them alone. Truth tables are how WASSCE examines them, and their physical examples are everywhere: a street light that turns on when it is dark and a car is detected, a burglar alarm that sounds only when the door switch closes and the motion sensor fires, the keypad of a mobile phone used for mobile money, the cut-off control in a solar charge controller on a roof at Navrongo, and the digital counters used for half-life experiments in the physics laboratory.",
          "bulletPoints": [
            "Silicon doped with phosphorus gives n-type; doped with boron gives p-type.",
            "A p-n junction is a diode: forward bias conducts past about 0.6 to 0.7 V for silicon, reverse bias blocks.",
            "Half-wave rectification uses one diode; full-wave uses two with a centre-tapped secondary or four in a bridge, and a capacitor smooths the output.",
            "Transistor current gain beta = Ic/Ib, so beta = 100 with 50 microampere base current gives 5 mA collector current.",
            "AND needs both inputs at 1; OR needs one; NOT inverts; NAND and NOR are universal gates.",
            "Safety: never probe a mains-powered board in class, and use only the low-voltage d.c. supplies for rectifier and transistor experiments."
          ],
          "keyTakeaway": "Doping makes a semiconductor, a junction makes a diode, two junctions make a transistor, and combinations of gates make decisions.",
          "realWorldExample": "The charge controller of a solar installation on a roof in Tamale uses transistors switching on the excess and logic that compares battery voltage with the panel voltage, so the battery is charged but never boiled, and the night lamps run on the stored energy."
        }
      ],
      "commonMistakes": [
        "Balancing only the mass numbers in a decay equation and ignoring the atomic numbers, so the answer names the wrong element; write both lines, for uranium-238 that means 238 = 234 + 4 and 92 = 90 + 2.",
        "Calling an alpha particle a helium atom: it is a helium nucleus with no electrons and a charge of +2, and a wrong description of the particle loses the description mark even when the mass number is right.",
        "Using the raw meter reading in a half-life calculation without subtracting the background count, so 640 counts per minute is treated as the source activity instead of the true 600.",
        "Reporting the mass that has decayed when the question asks for the mass remaining, or the reverse: for the 80 g sample over 15 days the remaining mass is 10 g and the decayed mass is 70 g, so state which is which in words.",
        "Converting mass wrongly in E = mc^2, using grams directly, so 0.1 g is entered as 0.1 instead of 1 x 10^-4 kg and the energy comes out as 9.0 x 10^15 J instead of 9.0 x 10^12 J.",
        "Confusing a half-wave rectifier with a full-wave one, or forgetting the smoothing capacitor and then claiming the output is steady direct current when the oscilloscope trace plainly shows ripple.",
        "Writing the OR gate truth table as though only one input may be high, and so giving zero for the case where both inputs are 1."
      ],
      "wassceExamTips": [
        "Paper 1 leans on the alpha, beta, gamma comparison and on decay equations; learn the seven-row table and practise completing a nucleus symbol quickly, because a single wrong atomic number makes the whole line wrong.",
        "In Paper 2 the half-life part almost always gives a background count; the method mark is awarded for the subtraction line, so write true rate = measured rate minus background before halving anything.",
        "When a question asks for the energy from a mass defect, convert grams to kilograms and write c = 3.0 x 10^8 m/s explicitly; the answer mark is given for a correct value with a unit, and 9.0 x 10^12 without joules is commonly recorded as incomplete.",
        "For electronics, draw the circuit symbol of the diode with its arrow pointing in the direction of conventional forward current, and label forward and reverse bias on the battery connections; a diagram with correct polarity earns the method mark.",
        "State a truth table as a table, not in prose, and for a transistor give both roles separately, switch and amplifier, with the gain relation beta = Ic/Ib shown.",
        "In the practical or alternative-practical Paper 3, expect a diode characteristic: read current at rising voltage in one direction and note that almost nothing flows in the other, quote the threshold near 0.6 to 0.7 V for silicon, and remember the eye-protection rule and that a source is handled with tongs and returned to its lead box.",
        "Questions on uses of radioactivity in Ghana want a named isotope with its job and its safety point, for example cobalt-60 gamma rays in radiotherapy with lead shielding, or phosphorus-32 as a fertiliser tracer, and answers that only say it is used in medicine score low."
      ],
      "summaryChecklist": [
        "Can I list the properties of cathode rays and name the charge and mass of the electron?",
        "Can I compare alpha, beta and gamma radiation in ionising power, penetrating power and behaviour in an electric field?",
        "Can I complete and balance a nuclear decay equation for both mass number and atomic number?",
        "Can I define half-life and use (1/2)^n on masses and count rates after subtracting the background reading?",
        "Can I explain fission, fusion, chain control and E = mc^2 numerically, and describe a diode rectifier, a transistor amplifier and the AND, OR and NOT gates?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-c-modern-1",
        "title": "Half-Life from Corrected Count Rates",
        "problem": "A Geiger-Muller counter records 40 counts per minute with no source present. A radioactive source placed at a fixed distance gives 2440 counts per minute at the start of an experiment and 640 counts per minute later. If the half-life of the source is 4 days, find how many days elapsed, and state the corrected count rate after a further 4 days.",
        "stepByStepSolution": [
          "Step 1 (M1): Remove the background from each reading, since the counter records radiation from the surroundings as well as from the source.",
          "Step 2 (M1): Initial true rate = 2440 - 40 and final true rate = 640 - 40.",
          "Step 3 (A1): These give 2400 counts per minute initially and 600 counts per minute finally.",
          "Step 4 (M1): Form the fraction remaining, 600/2400 = 1/4, and use the decay law N = N0 (1/2)^n.",
          "Step 5 (M1): Recognise 1/4 = (1/2)^2, so n = 2 half-lives have elapsed.",
          "Step 6 (A1): Elapsed time = 2 x 4 days = 8 days.",
          "Step 7 (M1): Check by halving step by step: 2400 to 1200 after 4 days, and 1200 to 600 after 8 days, which matches the second reading exactly.",
          "Step 8 (A1): After a further 4 days, a third half-life, the corrected rate would be 600/2 = 300 counts per minute, and the meter itself would then read 300 + 40 = 340 counts per minute."
        ],
        "keyTakeaway": "Subtract the background before comparing rates, then count the halvings; the meter reading and the true count rate are different numbers."
      },
      {
        "id": "ex-phy-c-modern-2",
        "title": "Energy from a Mass Defect and its Value in Units",
        "problem": "In a fission reactor the total mass of the products is less than the mass of the original uranium plus neutron. If 0.1 g of mass is converted into energy, calculate the energy released in joules using E = mc^2, express it in kilowatt-hours, and find its money value at GH¢0.50 per unit. Take c = 3.0 x 10^8 m/s.",
        "stepByStepSolution": [
          "Step 1 (M1): Convert the mass to kilograms, the SI unit required by the equation: 0.1 g = 0.1/1000 = 1 x 10^-4 kg.",
          "Step 2 (M1): Write the relation E = mc^2 and substitute, with c = 3.0 x 10^8 m/s so that c^2 = 9.0 x 10^16 m^2/s^2.",
          "Step 3 (M1): E = 1 x 10^-4 x 9.0 x 10^16.",
          "Step 4 (A1): E = 9.0 x 10^12 J, which is the energy released by the mass defect.",
          "Step 5 (M1): Convert to commercial units with 1 kWh = 3.6 x 10^6 J, so E = 9.0 x 10^12 / 3.6 x 10^6.",
          "Step 6 (A1): E = 2.5 x 10^6 kWh, that is 2,500,000 units of electrical energy from one tenth of a gram.",
          "Step 7 (M1): Value = units x tariff = 2.5 x 10^6 x GH¢0.50.",
          "Step 8 (A1): GH¢1,250,000, and for comparison 1 g converted completely would give 1 x 10^-3 x 9.0 x 10^16 = 9.0 x 10^13 J.",
          "Step 9 (M1): Confirm the nuclear account balances on the way: for the fission of uranium-235 into barium-141 and krypton-92 the mass numbers give 235 + 1 = 141 + 92 + 3 = 236 and the charges give 92 = 56 + 36, so the equation is valid and the small missing mass is what appears as this energy."
        ],
        "keyTakeaway": "Kilograms in, joules out, then divide by 3.6 x 10^6 for units; the enormous money value is the reason nuclear fuels matter."
      }
    ],
    "quiz": {
      "id": "quiz-phy-c-modern-physics-electronics",
      "topicId": "shs3-phy-t3-modern-physics-electronics-atomic",
      "title": "Atomic, Nuclear Physics and Electronics Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-c-modern-1",
          "quizId": "quiz-phy-c-modern-physics-electronics",
          "questionText": "Which type of nuclear radiation is the most strongly ionising but the least penetrating?",
          "optionA": "Gamma rays",
          "optionB": "Alpha particles",
          "optionC": "Beta particles",
          "optionD": "X-rays",
          "correctOption": "B",
          "subConcept": "Properties of the three radiations",
          "explanation": "The alpha particle is a heavy helium nucleus with charge +2, so it strips electrons from every atom it meets and is stopped by paper or a few centimetres of air. Gamma rays are the opposite case, least ionising and most penetrating, and beta particles lie between them.",
          "remediationTip": "Draw one arrow labelled ionising power falling and another labelled penetrating power rising, with alpha, beta, gamma between them."
        },
        {
          "id": "q-phy-c-modern-2",
          "quizId": "quiz-phy-c-modern-physics-electronics",
          "questionText": "A nucleus of uranium-238 emits an alpha particle. The daughter nucleus formed is",
          "optionA": "thorium-234",
          "optionB": "thorium-238",
          "optionC": "uranium-234",
          "optionD": "protactinium-238",
          "correctOption": "A",
          "subConcept": "Alpha decay equation",
          "explanation": "An alpha particle carries away 4 in mass number and 2 in atomic number, so 238 - 4 = 234 and 92 - 2 = 90; element 90 is thorium, giving thorium-234. The answer thorium-238 forgets the loss of nucleons, and uranium-234 keeps the wrong atomic number, since the element must change.",
          "remediationTip": "Balance two separate lines in every nuclear equation, the mass line and the charge line, then look up the element by its atomic number."
        },
        {
          "id": "q-phy-c-modern-3",
          "quizId": "quiz-phy-c-modern-physics-electronics",
          "questionText": "A sample of 1000 g of a radioisotope of half-life 3 days is stored for 15 days. The mass that has not decayed is",
          "optionA": "125 g",
          "optionB": "62.5 g",
          "optionC": "31.25 g",
          "optionD": "200 g",
          "correctOption": "C",
          "subConcept": "Half-life calculations",
          "explanation": "Fifteen days is 15/3 = 5 half-lives, so the fraction remaining is (1/2)^5 = 1/32 and the undecayed mass is 1000/32 = 31.25 g. The value 125 g corresponds to only three half-lives, and 200 g comes from dividing the mass by 5 instead of halving it five times.",
          "remediationTip": "Build the halving chain as a table, day 0, 3, 6, 9, 12, 15, and read the answer off the last row."
        },
        {
          "id": "q-phy-c-modern-4",
          "quizId": "quiz-phy-c-modern-physics-electronics",
          "questionText": "A logic gate gives an output of 1 only when both of its inputs are 1. The gate is",
          "optionA": "an OR gate",
          "optionB": "a NOT gate",
          "optionC": "a NAND gate",
          "optionD": "an AND gate",
          "correctOption": "D",
          "subConcept": "Logic gates and truth tables",
          "explanation": "The AND gate outputs 1 for the single case in which both inputs are 1, and 0 otherwise. An OR gate outputs 1 for any high input, and a NAND gate is the exact inverse of AND, giving 0 only when both inputs are 1.",
          "remediationTip": "Write the four-line truth table for AND, OR and NAND side by side and compare the last row of each."
        },
        {
          "id": "q-phy-c-modern-5",
          "quizId": "quiz-phy-c-modern-physics-electronics",
          "questionText": "The energy released if 1 g of mass were converted completely into energy is (take c = 3.0 x 10^8 m/s)",
          "optionA": "9.0 x 10^13 J",
          "optionB": "3.0 x 10^11 J",
          "optionC": "9.0 x 10^16 J",
          "optionD": "3.0 x 10^8 J",
          "correctOption": "A",
          "subConcept": "Mass-energy equivalence",
          "explanation": "With m = 1 x 10^-3 kg, E = mc^2 = 1 x 10^-3 x (3.0 x 10^8)^2 = 1 x 10^-3 x 9.0 x 10^16 = 9.0 x 10^13 J. The value 9.0 x 10^16 J is the energy of one kilogram, so it comes from skipping the gram to kilogram conversion.",
          "remediationTip": "Always convert grams to kilograms before substituting, and write c^2 = 9.0 x 10^16 as a separate line."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t3-radiation-detection-medical-imaging-safety",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 5,
    "title": "Radiation Detection, Medical Imaging and Nuclear Safety",
    "description": "The GM tube and the scintillation counter, background correction and the inverse square law, radioisotope tracers for pipe leaks and thickness gauging, uses in Ghanaian hospitals and industry, X-ray and ultrasound production, half-life and dosage, and protection and waste handling.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Alpha, beta and gamma differ in what stops them: a sheet of paper stops alpha, a few millimetres of aluminium stops beta, and gamma needs centimetres of lead or thick concrete, so the choice of detector and of shield follows the radiation type.\n• All three ionise the gas or tissue they pass through, which is why they are dangerous internally and why every detection method counts ionisation events rather than seeing the particles.\n• A Geiger-Muller tube is a gas-filled cylinder with a thin mica window for alpha and beta; an ionising event triggers a discharge, the electronics count the pulse, and the instrument reads counts per second or counts per minute.\n• A GM tube cannot tell alpha from beta from gamma without absorbers, and it goes dead after each pulse, so it under-reads at high activity; it is robust, cheap and the standard school instrument.\n• A scintillation counter uses a zinc sulphide screen that flashes when radiation strikes it, and a photomultiplier turns each flash into an electrical pulse, so it is far more efficient and can sort pulses by energy, but it is fragile and costly.\n• A photographic film badge worn by radiography staff darkens with exposure and is developed monthly to record the cumulative dose, which is how a hospital keeps its legal dose record for each worker.\n• Always subtract the background count: a reading of 480 counts per minute with a background of 60 counts per minute gives a true source count of 420 counts per minute, and marks are lost for quoting the raw figure.\n• Intensity falls with the square of the distance, so a corrected 400 counts per second at 10 cm becomes 100 at 20 cm and 25 at 40 cm, since the ratio is (40 / 10) squared = 16.\n• Half-life is the time for the activity to fall to half its value, equivalently for half the unstable nuclei in a sample to decay; iodine-131 has 8 days, technetium-99m about 6 hours and cobalt-60 about 5.3 years.\n• Twenty-four days of iodine-131 is three half-lives, so the fraction remaining is one half cubed = 0.125, that is 12.5 percent, and a 200 kBq sample falls to 25 kBq.\n• Half-lives never finish a sample: after five half-lives 800 counts per second has fallen to 25 counts per second, which took 5 x 20 = 100 minutes for a 20 minute isotope, and each half-life halves whatever activity remains at that moment, not a fixed amount taken from the original.\n• A tracer is a radioisotope introduced into a system and followed by its radiation; gamma is used for internal tracers because it escapes the body or the pipe, while beta and alpha are absorbed and only serve on the surface.\n• Pipe leaks under a concrete floor are found by adding a gamma tracer upstream and sweeping a detector over the surface, the count peaking where contaminated water has seeped up; a blocked or leaking line in a factory is traced the same way.\n• Thickness gauging is a non-contact control: a beta source above and a detector below a moving sheet of paper or plastic, with the gauge reading falling as the sheet thickens, so the rollers are adjusted automatically; gamma sources serve for metal plate.\n• Medical diagnosis uses iodine-131 for thyroid function and treatment, cobalt-60 gamma beams for radiotherapy, and technetium-99m for organ scans, while sterilisation of medical equipment, irradiation of food to delay sprouting and gauging of asphalt are industrial uses.\n• X-rays are produced when fast electrons from a heated cathode are accelerated through a high potential difference and strike a tungsten anode, about one percent becoming X-rays and the rest heat, and they shadow an image on a film or a detector because bone absorbs more than soft tissue.\n• Ultrasound is sound above 20 kHz, used at 2 to 18 MHz in medical scanning, travelling through tissue at about 1540 m per s; a 5 MHz beam has a wavelength of 1540 / 5 x 10 to the sixth = 3.1 x 10 to the minus fourth m, about 0.31 mm, and the image is built from reflected pulses at boundaries.\n• Dosage is measured in millisieverts; natural background in Ghana is of the order of 3 mSv per year, a chest X-ray about 0.02 mSv, roughly two days of background, so the rule is justification, keeping the dose as low as reasonably achievable, and limiting exposure of the public and of staff.\n• Protection follows three rules, distance, time and shielding, with tongs and a long holder for sources, and one half-value layer of lead roughly halves the transmitted gamma, so four layers reduce a beam to one sixteenth, about 6.25 percent.\n• Waste handling separates short-lived liquid clinical waste held in storage until it decays, sealed lead pots for sources, licensed collection of disused sources, and solid labelled drums kept behind shielding, with a Geiger survey before any release.",
    "detailedNotes": {
      "overview": "This topic turns radioactivity from an abstract decay series into instruments, medicine and safety practice. You will explain how a Geiger-Muller tube and a scintillation counter detect ionising radiation, correct a count for background, and use the inverse square law to predict how a reading falls with distance. You will then follow radioisotopes into industry as tracers for pipe leaks and as non-contact thickness gauges, and into hospitals in Accra and Kumasi for thyroid work, organ scans and cobalt-60 radiotherapy. The imaging comparison between X-rays and ultrasound is worked out from how each is produced and what each does to tissue, and the lesson closes on half-life arithmetic, dosage in millisieverts, the three protection rules and the handling of radioactive waste.",
      "introduction": "Start from a detector and a source in the school laboratory: take a background reading for one minute with no source present, then bring a beta source to 10 cm, 20 cm and 40 cm and record counts for the same interval at each, subtracting background before plotting count rate against distance and against count rate against one over distance squared. Repeat the sequence with absorbers of paper, aluminium and lead to identify the radiation. For every calculation state the half-life you are using and count the half-lives on your fingers before writing the fraction, because a decay question is nearly always a counting question in disguise.",
      "realWorldContext": "The radiotherapy unit with its cobalt-60 source at the Korle Bu Teaching Hospital in Accra and the nuclear medicine work that serves the greater Accra region treat and diagnose with the same isotopes described in this lesson, and the iodine-131 given for thyroid uptake has a half-life of 8 days, so a patient is reviewed a week or more later while the activity falls to one eighth. Scanning with technetium-99m suits a hospital that cannot store activity, because its 6 hour half-life means a generator delivered in the morning is used the same day and the patient is clear of significant activity within about two days. Industrial use is closer to home than most pupils think: a beta thickness gauge on a plastic film line in the Tema industrial area, a gamma tracer run to find a leaking pipeline under a concrete yard, and the irradiation of stored food to delay sprouting all apply the same absorption rules taught with paper, aluminium and lead. Radiographers in Ghana wear film badges and work behind lead-lined screens, and disused sealed sources go back to the supplier or to the national radiation protection authority rather than to a scrap yard.",
      "objectives": [
        "Describe the construction and operation of a Geiger-Muller tube and a scintillation counter and state the advantage of each",
        "Correct a measured count for background and apply the inverse square law to predicted count rates",
        "Explain the use of gamma and beta tracers in leak detection, thickness gauging and medical diagnosis",
        "Compare X-ray production and ultrasonic scanning, stating how each image is formed and which is safer for a foetus",
        "Carry out half-life calculations, quote typical doses in millisieverts, and set out protection and waste-handling procedures"
      ],
      "sections": [
        {
          "title": "How Radiation Is Detected",
          "content": "Radiation cannot be seen, so every detector works on one of the effects it produces: ionisation in a gas, a flash of light in a phosphor, or a chemical change in a photographic emulsion. A Geiger-Muller tube is a sealed metal cylinder containing a low-pressure gas with a wire anode along its axis and a thin mica window at one end so that alpha and beta particles can enter. When one ionising event occurs in the gas the strong field between the wire and the cylinder wall accelerates the electrons until they ionise more atoms, producing an avalanche that arrives as a single large electrical pulse; the scaler counts the pulses and the meter reads counts per second or counts per minute. The instrument tells you that something ionising arrived, but not what it was, so a student identifies the type by interposing paper, aluminium and lead and watching which layers kill the count. Because the discharge must be quenched before the tube can respond again, a GM tube misses events at very high activity and therefore under-reads, a limit worth naming in any practical report. A scintillation counter replaces the gas with a zinc sulphide or sodium iodide screen that emits a brief flash of light for each absorbed particle; a photomultiplier converts the flash into a pulse and amplifies it through a chain of dynodes. The result is a much higher efficiency, the ability to count gamma well, and pulses whose size reflects the energy, so the machine can sort alpha from beta from gamma. Its cost and fragility keep it out of most school laboratories, where the GM tube with its long-handled source holder remains the working instrument.",
          "bulletPoints": [
            "GM tube: gas-filled, mica window, avalanche pulse, robust and cheap, blind to the radiation type and slow at high count rates.",
            "Scintillation counter: zinc sulphide screen plus photomultiplier, high efficiency, energy sorting, fragile and costly.",
            "Film badges darken with exposure and are developed monthly to give a cumulative dose record for staff.",
            "Identification of radiation by absorption: paper stops alpha, a few mm of aluminium stops beta, lead or concrete is needed for gamma.",
            "Every detector counts effects of ionisation, which is also the reason ionising radiation damages living tissue."
          ],
          "keyTakeaway": "A GM tube answers how many, a scintillation counter can also answer what kind, and a film badge answers how much dose the worker received.",
          "realWorldExample": "A radiography technician at a clinic in Kumasi wears a film badge at the collar, and the monthly development record is what the hospital keeps as proof that staff doses stayed within the limits set for radiation workers."
        },
        {
          "title": "Background, Distance and Count Correction",
          "content": "No measurement of a source is honest until the background is removed. Radioactivity is present everywhere, in radon from the ground, in cosmic rays, in the concrete of the laboratory itself, and a one-minute reading taken with nothing on the bench might give 60 counts per minute. If the same tube then reads 480 counts per minute with a source placed at the detector, the count due to the source alone is 480 minus 60 = 420 counts per minute, and it is that corrected value that must be used in every further calculation; examiners award the mark for the subtraction and take it off when the raw reading is carried forward. Distance is handled by the inverse square law, since the radiation from a small source spreads over a sphere whose area grows as the square of the radius. A corrected 400 counts per second measured at 10 cm therefore falls to 400 divided by the square of 20 over 10, which is 400 / 4 = 100 counts per second at 20 cm, and to 400 divided by the square of 40 over 10, which is 400 / 16 = 25 counts per second at 40 cm. This law is the physical basis of the most important protection rule, to use a long holder and keep the source as far from the body as the experiment allows, since doubling the distance quarters the dose rate. Counting statistics belong here too: radiation is random, so a short count is uncertain, and the practical response is to count for a longer fixed interval and, where a graph is required, to repeat each reading and average it.",
          "bulletPoints": [
            "Background count must be measured with no source and subtracted from every reading before use.",
            "480 counts per minute observed with 60 counts per minute of background gives a source count of 420 counts per minute.",
            "Inverse square law: 400 counts per second at 10 cm gives 100 at 20 cm and 25 at 40 cm.",
            "Doubling the distance quarters the count rate, which is why tongs and a long holder are standard.",
            "Random emission means short counts are unreliable; count for a longer fixed interval and average repeats."
          ],
          "keyTakeaway": "Subtract the background first and square the distance ratio, and most detection questions collapse into two lines of arithmetic.",
          "realWorldExample": "A student at a laboratory in Cape Coast who leaves the school concrete block on the bench during a counting run will find the background reading higher than the textbook value, which is exactly why background is always measured locally rather than assumed."
        },
        {
          "title": "Tracers in Pipes, Gauges and the Body",
          "content": "A tracer is a radioactive isotope introduced into a system and then located from outside by the radiation that escapes, so the equipment itself can be inspected without being opened. For a pipeline carrying water or oil under a concrete yard, a gamma emitter is added upstream and a detector swept across the surface; where a joint has failed, the liquid seeps up through the crack and the count rate shows a peak over that spot, so the excavation is directed to a metre or two instead of the whole run. Gamma is chosen for buried work because alpha and beta would be absorbed by the pipe wall and the concrete before reaching the detector, while a surface leak of a thin film can be followed with a beta tracer that does not penetrate far and so delivers a lower dose. The same physics runs in reverse as a thickness gauge. A beta source sits above a moving sheet of paper, plastic film or aluminium foil and a detector below it; as the sheet thickens more beta is absorbed and the count falls, so the electronics drive the rollers to reduce the gap and the gauge holds the thickness automatically without touching the product. A beta gauge suits materials of a few millimetres, while steel plate and dense asphalt require a gamma source with its greater penetration, and this is why road-construction plants calibrate a gamma gauge against cut cores. In the body, iodine-131 is taken by mouth and concentrates in the thyroid, so a detector over the neck measures uptake and, in treatment, the beta component destroys the overactive tissue from inside; technetium-99m attaches to compounds that migrate to bone, kidney or heart and its gamma escapes for a scanner to map the organ.",
          "bulletPoints": [
            "A gamma tracer added upstream is followed by a detector; a count peak marks the leak under a concrete yard.",
            "Beta tracers serve surface work because they are absorbed quickly and deliver a smaller dose.",
            "A beta gauge reads fewer counts as a sheet thickens and drives the rollers to correct it, with no contact.",
            "Gamma gauges are needed for steel plate and dense asphalt because beta cannot penetrate them.",
            "Iodine-131 for thyroid uptake and treatment; technetium-99m for organ scans, chosen for its 6 hour half-life."
          ],
          "keyTakeaway": "Tracers locate what you cannot see, and the radiation type is chosen by how far it must travel to reach the detector.",
          "realWorldExample": "A plastic film producer in the Tema industrial area running a beta thickness gauge will schedule a source change and a calibration against weighed samples each quarter, since the gauge is only as good as its last calibration."
        },
        {
          "title": "X-rays and Ultrasound Compared",
          "content": "X-rays and ultrasound both produce images, but one is ionising electromagnetic radiation and the other is mechanical sound, and that single difference governs the whole safety discussion. In an X-ray tube a heated cathode boils electrons from a filament, a potential difference of tens of kilovolts accelerates them towards a tungsten target, and on sudden stopping their energy becomes mostly heat, roughly ninety-nine percent, with about one percent emerging as a continuous beam of X-rays; a spinning anode and oil cooling exist because of that heat. The beam passing through a patient is attenuated unequally, bone absorbing far more than muscle and air cavities absorbing least, so the pattern that reaches the film or a digital detector is a shadow map of internal structure. Because X-rays ionise, dose must be justified, collimated to the region of interest, and shielded with lead aprons for staff, and a foetus is particularly sensitive to that ionisation. Ultrasound scanning is different in kind. Piezoelectric crystals in a probe vibrate at two to eighteen megahertz, sending pulses into the body at about 1540 m per s in soft tissue; where the acoustic impedance changes, at the boundary between fluid and muscle or between tissue and bone, part of the pulse is reflected, and the machine converts the echo delays into a picture. At 5 megahertz the wavelength in tissue is 1540 divided by 5 million, that is 3.1 x 10 to the minus fourth m or about 0.31 mm, which sets the resolution and explains why higher frequency gives finer detail but shallower penetration. Ultrasound carries no ionisation and no known stochastic damage, so it is the default for obstetric scanning, while it cannot see through bone or air, which is why a skull or a lung is better studied by other means.",
          "bulletPoints": [
            "X-rays: fast electrons stopped at a tungsten anode; about one percent of the energy becomes X-rays, the rest heat.",
            "Image is a shadow map, bone absorbing more than soft tissue, produced by unequal attenuation.",
            "X-rays ionise, so justification, collimation and lead aprons are required, and a foetus is especially sensitive.",
            "Ultrasound: piezoelectric probe at 2 to 18 MHz, pulses at about 1540 m per s, image built from echoes at boundaries.",
            "A 5 MHz beam has a wavelength near 0.31 mm in tissue; higher frequency gives better resolution and less penetration."
          ],
          "keyTakeaway": "Ask what the wave is, ionising radiation or sound, and the choice between an X-ray department and an ultrasound clinic answers itself.",
          "realWorldExample": "An antenatal clinic in Wa uses an ultrasound machine for routine checks because a scan carries no ionising dose to the baby, while a chest complaint at the same clinic is sent for an X-ray because sound cannot pass through the air-filled lungs or the rib cage."
        },
        {
          "title": "Half-Life, Dosage and Waste Handling",
          "content": "Half-life is the time in which the activity of a sample falls to half its previous value, which is the same statement as saying that half the remaining unstable nuclei have decayed. Iodine-131 has a half-life of 8 days, technetium-99m about 6 hours and cobalt-60 about 5.3 years, and those numbers decide clinical and storage practice. Twenty-four days after a dose of iodine-131, three half-lives have passed, so the fraction left is one half cubed = 0.125, that is 12.5 percent, and an activity of 200 kBq has fallen to 25 kBq. A 400 MBq sample of technetium-99m measured at eight in the morning is down to 100 MBq by eight in the evening, since twelve hours is two half-lives of six hours, which is why the isotope must be prepared near the patient rather than stocked. A count rate of 800 counts per second falling to 25 counts per second has passed through five half-lives, because 800 halves to 400, 200, 100, 50 and 25, so for a 20 minute isotope the elapsed time was 5 x 20 = 100 minutes. Half-life arithmetic also warns that waste is never rendered harmless by storing it briefly, since the fraction always halves again rather than reaching zero, so short-lived clinical liquid waste is held in shielded storage until it is measurably near background, while long-lived sealed sources such as cobalt-60 go to licensed disposal. Dose is recorded in millisieverts. Natural background radiation in Ghana is of the order of 3 mSv per year, about 0.008 mSv per day, so a chest X-ray at roughly 0.02 mSv is equivalent to about two days of ordinary background, while a CT scan may be a few mSv. Three rules control every exposure: increase distance, reduce time in the beam, and interpose shielding, remembering that each half-value layer of lead halves what passes, so four layers leave one sixteenth, about 6.25 percent, of the original intensity.",
          "bulletPoints": [
            "Half-life is the time for activity to halve; 24 days of iodine-131 is 3 half-lives, leaving 12.5 percent.",
            "200 kBq of iodine-131 becomes 25 kBq after 24 days; 400 MBq of technetium-99m becomes 100 MBq after 12 hours.",
            "800 counts per second to 25 counts per second is 5 half-lives, so 100 minutes for a 20 minute isotope.",
            "Background is about 3 mSv per year and a chest X-ray about 0.02 mSv, roughly two days of background.",
            "Protection is distance, time and shielding; four half-value layers of lead leave 6.25 percent of the beam.",
            "Waste is segregated by half-life, held for decay, surveyed with a detector and released only near background; sealed sources go to licensed disposal."
          ],
          "keyTakeaway": "Count the half-lives before writing the fraction, and handle waste by its half-life, because activity decays by halves and never to nothing.",
          "realWorldExample": "A nuclear medicine unit ordering a technetium generator at six in the morning plans the scan list before midday, since a 6 hour half-life means the activity available to each patient is falling throughout the clinic session."
        }
      ],
      "commonMistakes": [
        "Reporting the raw meter reading as the count from the source and forgetting to subtract the background count measured on the same instrument.",
        "Saying an alpha particle is best for tracing a pipe under a concrete floor, when alpha is stopped by paper and would never reach the detector outside.",
        "Claiming that after two half-lives no activity remains, instead of one quarter; halving twice from 800 leaves 200, and the sample never reaches zero in a whole number of half-lives.",
        "Calling X-rays electrons or sound waves; they are electromagnetic radiation produced when fast electrons are stopped at a metal target.",
        "Confusing activity measured in becquerel with dose measured in sievert, so answering that a source with high activity must give a high dose regardless of distance and shielding.",
        "Stating that ultrasound is dangerous because it is a radiation, and so missing the point that it is non-ionising sound, which is why it is preferred for scanning an unborn baby."
      ],
      "wassceExamTips": [
        "Paper 1 detection questions are answered by the effect used: ionisation for a GM tube, fluorescence for a scintillation counter, chemical change for a film badge, so learn the three pairings rather than the machinery.",
        "In Paper 2 a decay question gives marks for counting half-lives explicitly, 24 / 8 = 3, then for the fraction (one half) cubed = 0.125 and finally the activity 200 x 0.125 = 25 kBq; write all three lines.",
        "When asked to compare X-rays with ultrasound, structure the answer as production, interaction with tissue, image formation and hazard, since a marker allocates one score per heading.",
        "For the tracer question name the radiation, justify it by penetration, then state what the detector movement shows, a peak over the leak or a falling count as thickness rises.",
        "In the Paper 3 alternative practical, quote the background count and the corrected count, keep the source in a holder with tongs, never point a tube at anyone, and record readings to the same counting interval.",
        "A safety question earns more for the three named rules, distance, time and shielding, each with a worked example, than for a general statement that radiation is dangerous."
      ],
      "summaryChecklist": [
        "Can I explain how a GM tube and a scintillation counter each turn an ionising event into a reading, and name a limit of each?",
        "Can I subtract a background count and predict a corrected count rate at a new distance using the inverse square law?",
        "Can I justify the choice of gamma or beta for a leak tracer and for a thickness gauge on paper or on steel plate?",
        "Can I describe X-ray production and ultrasonic echo imaging and say which is safer for a foetus and why?",
        "Can I work out the fraction and activity remaining after a number of half-lives and set out waste-handling steps?"
      ]
    },
    "examples": [
      {
        "id": "ex-radiation-1",
        "title": "Half-Life of an Iodine-131 Patient Dose",
        "problem": "A patient swallows a dose of iodine-131 whose initial activity is 200 kBq. The half-life of iodine-131 is 8 days. Find the number of half-lives in 24 days, the fraction of activity remaining, the activity after 24 days, and state why the ward can safely receive visitors after about three half-lives.",
        "stepByStepSolution": [
          "Step 1 (M1): Count the half-lives: number = elapsed time / half-life = 24 / 8 = 3.",
          "Step 2 (M1): Write the decay fraction as one half raised to the number of half-lives, that is (one half) cubed.",
          "Step 3 (A1): Fraction remaining = 0.5 x 0.5 x 0.5 = 0.125, which is 12.5 percent of the original activity.",
          "Step 4 (M1): Multiply the fraction by the initial activity: remaining activity = 0.125 x 200 kBq.",
          "Step 5 (A1): Remaining activity = 25 kBq, so 175 kBq has decayed away.",
          "Step 6 (M1): Check the stepwise halving: 200 to 100 after 8 days, 50 after 16 days, 25 after 24 days, agreeing with the fraction method.",
          "Step 7 (A1): After three half-lives the body carries only one eighth of the original activity, and the iodine is also being cleared biologically, so the dose to a visitor at ordinary distance falls to a low level; final answers 3 half-lives, fraction 0.125, activity 25 kBq."
        ],
        "keyTakeaway": "Divide the elapsed time by the half-life, raise one half to that number, then multiply by the original activity, and check by halving step by step."
      },
      {
        "id": "ex-radiation-2",
        "title": "Background Correction and the Inverse Square Law with a GM Tube",
        "problem": "A Geiger-Muller tube records 60 counts per minute with no source present. A radioactive source placed at the window gives 480 counts per minute, of which the corrected source count at 10 cm is taken as 420 counts per minute. Find the count rate that the source alone will give at 20 cm and at 40 cm, and the total meter reading expected at 20 cm.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify the background as 60 counts per minute and note that the reading with the source is 480 counts per minute, so the corrected source count is 480 - 60 = 420 counts per minute.",
          "Step 2 (M1): State the inverse square law, count rate is proportional to one over distance squared, so the ratio of counts is the square of the inverse ratio of distances.",
          "Step 3 (M1): At 20 cm the distance ratio is 20 / 10 = 2, and the factor applied to the count is 1 / (2 squared) = 1 / 4.",
          "Step 4 (A1): Source count at 20 cm = 420 / 4 = 105 counts per minute.",
          "Step 5 (M1): At 40 cm the ratio is 40 / 10 = 4, so the factor is 1 / (4 squared) = 1 / 16, giving 420 / 16.",
          "Step 6 (A1): Source count at 40 cm = 26.25, about 26 counts per minute.",
          "Step 7 (A1): The meter reading at 20 cm must add the background back, 105 + 60 = 165 counts per minute; final answers 105 counts per minute due to the source at 20 cm, about 26 counts per minute at 40 cm, and an observed 165 counts per minute at 20 cm."
        ],
        "keyTakeaway": "Subtract background before applying the square of the distance ratio, and add it back when the question asks what the meter will show."
      }
    ],
    "quiz": {
      "id": "quiz-phy-radiation-detection-imaging-safety",
      "topicId": "shs3-phy-t3-radiation-detection-medical-imaging-safety",
      "title": "Radiation Detection and Imaging Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-radiation-1",
          "quizId": "quiz-phy-radiation-detection-imaging-safety",
          "questionText": "Which detector produces a flash of light in a zinc sulphide screen and amplifies it with a photomultiplier?",
          "optionA": "A photographic film badge",
          "optionB": "An ionisation chamber used only for alpha",
          "optionC": "A Geiger-Muller tube",
          "optionD": "A scintillation counter",
          "correctOption": "D",
          "subConcept": "Detection instruments",
          "explanation": "The scintillation counter converts each absorbed particle into a light flash on a phosphor screen and then into an amplified electrical pulse, which also lets it sort pulses by energy. A GM tube counts gas ionisation avalanches, a film badge records cumulative darkening, and option B wrongly limits ionisation detection to alpha.",
          "remediationTip": "Make a three-column card of instrument, physical effect and what it measures, then cover the middle column and rebuild it."
        },
        {
          "id": "q-phy-radiation-2",
          "quizId": "quiz-phy-radiation-detection-imaging-safety",
          "questionText": "A GM tube reads 480 counts per minute with a source near it, and the background is 60 counts per minute. What is the count due to the source alone?",
          "optionA": "420 counts per minute",
          "optionB": "540 counts per minute",
          "optionC": "8 counts per minute",
          "optionD": "480 counts per minute",
          "correctOption": "A",
          "subConcept": "Background correction",
          "explanation": "Corrected source count = observed count - background = 480 - 60 = 420 counts per minute. Adding instead of subtracting gives B, dividing gives C, and leaving the raw reading gives D.",
          "remediationTip": "Always record a background count at the start of a counting session and write it on the table header so it cannot be forgotten."
        },
        {
          "id": "q-phy-radiation-3",
          "quizId": "quiz-phy-radiation-detection-imaging-safety",
          "questionText": "Iodine-131 has a half-life of 8 days. What fraction of an initial activity remains after 24 days?",
          "optionA": "One quarter",
          "optionB": "One fourth of the original count, that is 25 percent",
          "optionC": "One eighth, that is 12.5 percent",
          "optionD": "None, the activity has gone to zero",
          "correctOption": "C",
          "subConcept": "Half-life calculation",
          "explanation": "24 / 8 = 3 half-lives, so the fraction is (one half) cubed = 1 / 8 = 0.125, that is 12.5 percent. Two half-lives would leave one quarter, which is what options A and B state, and D ignores that decay never completes in a whole number of half-lives.",
          "remediationTip": "Draw a halving ladder, 1 to one half to one quarter to one eighth, and label each step with 8 days, 16 days, 24 days."
        },
        {
          "id": "q-phy-radiation-4",
          "quizId": "quiz-phy-radiation-detection-imaging-safety",
          "questionText": "Why is ultrasound, not the X-ray beam, preferred for routine scanning of an unborn baby?",
          "optionA": "Because ultrasound penetrates bone better than X-rays",
          "optionB": "Because ultrasound is non-ionising sound, so it does not deliver an ionising dose to the foetus",
          "optionC": "Because ultrasound has a much higher frequency than X-rays",
          "optionD": "Because X-rays cannot be produced outside a hospital",
          "correctOption": "B",
          "subConcept": "Imaging safety compared",
          "explanation": "Ultrasound is mechanical sound at megahertz frequencies and is non-ionising, so it avoids the stochastic risk that ionising X-rays carry for dividing foetal tissue. In fact ultrasound is poor at passing through bone and air, option A is false, and X-rays have lower frequencies than the option C comparison suggests because they are electromagnetic radiation of very high frequency.",
          "remediationTip": "Table the two methods under production, penetration, image formation and hazard, and keep the hazard row for revision."
        },
        {
          "id": "q-phy-radiation-5",
          "quizId": "quiz-phy-radiation-detection-imaging-safety",
          "questionText": "A factory needs a non-contact gauge for the thickness of steel plate about 20 mm thick. Which radiation and source arrangement is suitable?",
          "optionA": "An alpha source with a detector on the same face of the plate",
          "optionB": "A beta source above and a detector below the plate",
          "optionC": "A beam of ultraviolet light reflected from the plate surface",
          "optionD": "A gamma source above and a detector below the plate",
          "correctOption": "D",
          "subConcept": "Thickness gauging",
          "explanation": "Only gamma penetrates 20 mm of steel and still reaches a detector beneath, so its transmitted count varies measurably with thickness. Alpha is stopped by paper, beta by a few millimetres of metal and would be fully absorbed, and ultraviolet reflection tells nothing about the thickness of an opaque plate.",
          "remediationTip": "Rank alpha, beta and gamma by the absorber that stops each, then match absorber power to the material being measured."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t3-photoelectric-effect-line-spectra",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Photoelectric Effect, Line Spectra and the Quantum Idea",
    "description": "Photon energy hf, work function and threshold frequency, stopping voltage and maximum kinetic energy of photoelectrons, emission and absorption line spectra, Bohr energy levels and the hydrogen series, the properties and uses of lasers, and photocells including automatic street lights.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Light arrives as packets called photons, each of energy E = hf, where f is the frequency and h is Planck constant, 6.63 x 10^-34 J s.\n• The work function is the least energy needed to free an electron from a given metal surface; emission is possible only when hf is at least equal to it, which defines the threshold frequency f0 by hf0 = work function.\n• Below the threshold frequency no photoelectrons are emitted, however bright the light; above it emission is immediate, however dim, and it is exactly these two observations that destroyed the classical wave picture.\n• Einstein relation: maximum kinetic energy of the emitted electron is KEmax = hf - work function; extra photon energy appears as electron speed, not as delay or as heat.\n• The stopping voltage Vs just halts the fastest electrons: eVs = KEmax, so Vs rises in straight proportion to frequency above the threshold, and a graph of Vs against f has slope h/e.\n• Doubling the intensity of above-threshold light doubles the number of photoelectrons per second but leaves their maximum kinetic energy unchanged.\n• Energies in atomic work are conveniently quoted in electronvolts: 1 eV = 1.6 x 10^-19 J, the energy one electron gains through one volt.\n• Excited atoms emit light only at the frequencies matching their level differences, giving bright emission lines on a dark ground; the same atoms absorb exactly those frequencies from white light, leaving dark absorption lines.\n• Bohr levels are quantised: an electron dropping from level 3 to level 2 in hydrogen emits the red line of 656 nm, whose photon energy hc/lambda is 3.03 x 10^-19 J, that is 1.89 eV.\n• Because every element has its own level structure, its spectrum is a fingerprint; flame colours and spectroscope lines identify elements in a sample.\n• Laser light is monochromatic, coherent and highly directional: it reads barcodes, aligns building lines on sites, marks cuttings in industry and carries signals in optical fibre.\n• Photocells convert light to an electrical signal: the dusk switch of a Ghanaian street light, the sensor of a solar lantern and the counter of a bottling line are all photoelectric devices; a street-light photocell raises its resistance in darkness and lets the lamp circuit close.",
    "detailedNotes": {
      "overview": "This topic builds the quantum picture from two experiments. First the photoelectric effect: light frees electrons from a metal only when its frequency exceeds a threshold, emission is immediate, and the electron energy grows with frequency, not intensity; the photon idea E = hf with the work function and Einstein relation KEmax = hf - phi explains all of it, and the stopping voltage turns kinetic energy into a measurable number. Second line spectra: excited gases emit sharp coloured lines, and cool gases cut the same dark lines from white light, evidence that atomic energy levels are quantised, with the Bohr model and the hydrogen red line at 656 nm as the worked case. You then meet the devices born of this physics, lasers and photocells, in Ghanaian settings from street lights that switch themselves at dusk to alignment lasers on building sites.",
      "introduction": "Open with the demonstration that surprises everyone: a deep-blue lamp on a clean zinc plate discharges a charged electroscope while a blazing orange lamp of far greater brightness cannot, because blue light carries photons above zinc threshold and orange light does not. Sketch a spectrum tube and a diffraction grating so students see hydrogen lines with their own eyes before any formula appears. Then set the electroscope and lamp as a class investigation, varying colour and recording whether the leaves fall, and let the threshold emerge from the data rather than the textbook.",
      "realWorldContext": "Ghanaian daily life runs on this physics without naming it. The street lights at junctions around Accra and the solar lanterns of the north switch themselves through photocells whose resistance climbs as dusk fades the light, closing the lamp circuit exactly when the town needs it. Phone camera sensors are arrays of photoelectric detectors, and the barcode scanner at a shop in Kumasi reads prices with a red laser or LED line. On building sites, laser lines level foundation formwork and align blockwork at layouts near Tema, and laboratories such as those serving the mining industry assay ore with flame and absorption spectroscopy, reading the fingerprints of sodium, copper and iron the same way a student reads spectrum tubes. The GES school laboratory spectrum tube with its diffraction grating shows hydrogen red, blue-green and violet lines, the very Balmer set computed in these notes, and the same red line at 656 nm appears in astronomy photographs of nebulae.",
      "objectives": [
        "State E = hf and the photon explanation of threshold frequency and immediate emission",
        "Use KEmax = hf - work function and eVs = KEmax to compute photoelectron energies and stopping voltages",
        "Explain emission and absorption line spectra with Bohr quantised levels and calculate photon energies for hydrogen",
        "Describe the properties of laser light and the working of photocells with named uses in Ghana"
      ],
      "sections": [
        {
          "title": "Photons, Work Function and the Threshold Frequency",
          "content": "Classical wave theory predicted that any bright enough light, at any colour, would eventually shake electrons loose from a metal, and that dim light would need time to accumulate energy. Experiment refused both predictions: below a certain frequency, no emission whatever occurs, and above it electrons appear within nanoseconds even from a feeble beam. Einstein answered in packets: a photon of frequency f carries E = hf, one photon meets one electron, and if hf falls short of the work function, the surface binding energy, the electron simply cannot escape; the threshold frequency is f0 where hf0 equals the work function. Any surplus becomes motion, so KEmax = hf - phi, a straight-line relation between electron energy and light frequency. Brighter light means more photons, hence more photoelectrons each second, but the same maximum energy per electron, which is the distinction Paper 1 tests most mercilessly. The stopping voltage makes the energy measurable: a reverse potential Vs just large enough to prevent the fastest electrons reaching the collector satisfies eVs = KEmax, so plotting Vs against frequency gives a line of slope h/e with the threshold frequency as its intercept on the frequency axis. With h = 6.63 x 10^-34 J s, the 500 nm green light of frequency 6.0 x 10^14 Hz carries 3.98 x 10^-19 J per photon, enough to free electrons from surfaces bound at or below that energy.",
          "bulletPoints": [
            "Photon energy is E = hf; h = 6.63 x 10^-34 J s.",
            "Threshold frequency f0 satisfies hf0 = work function; below it there is no emission at any intensity.",
            "KEmax = hf - phi; raising frequency raises electron energy, raising intensity raises electron count.",
            "Emission is immediate above threshold, which a wave-accumulation picture cannot explain.",
            "The stopping voltage obeys eVs = KEmax, and the Vs against f graph has slope h/e."
          ],
          "keyTakeaway": "Photoelectricity is one-photon-meets-one-electron arithmetic: the colour decides whether and how fast, the brightness only how many.",
          "realWorldExample": "A science club discharges a negatively charged electroscope with a mercury lamp behind coloured filters: the blue filter passes light that drops the leaves at once, the orange filter blocks it however long the lamp shines, mirroring the zinc-plate demonstration in the syllabus."
        },
        {
          "title": "Line Spectra and the Bohr Energy Levels",
          "content": "Pass the light from a excited gas through a slit and a diffraction grating and you do not see a rainbow: you see a handful of separate coloured lines on a dark field, an emission spectrum unique to that element. Cool the same gas in front of a white source and black lines bite out of the rainbow at exactly the same positions, an absorption spectrum. Both facts follow from Bohr postulate that electrons occupy fixed levels and can jump between them, absorbing or emitting one photon whose energy equals the level difference, hf = E upper minus E lower. Because the levels are discrete, the frequencies are discrete, and the pattern of lines is the fingerprint by which spectroscopists identify elements; hydrogen series group under names such as Balmer, whose visible red line arises from the drop from level 3 to level 2. Compute it: at 656 nm the frequency is c/lambda = 3.0 x 10^8 / 656 x 10^-9, about 4.57 x 10^14 Hz, so the photon energy is hc/lambda = 3.03 x 10^-19 J, that is 1.89 eV, the exact step between those two hydrogen levels. Higher series lie in the ultraviolet and infrared, invisible to the school spectroscope but real in astronomy and plasma work. Students should be able to state why atoms have sharp lines while hot solids glow in continuous spectra: in a solid the levels blur into broad bands, while an isolated atom keeps its ladders distinct.",
          "bulletPoints": [
            "Emission lines come from drops to lower levels; absorption lines from lifts to higher ones; positions coincide.",
            "Photon frequency obeys hf = E2 - E1, so discrete levels give discrete lines.",
            "Hydrogen red line at 656 nm carries 3.03 x 10^-19 J, about 1.89 eV, the level 3 to level 2 gap.",
            "Each element has its own spectrum, a fingerprint used in flame tests and ore assay.",
            "Hot solids glow with continuous spectra because closely packed atoms smear the levels into bands."
          ],
          "keyTakeaway": "A line spectrum is the ladder of atomic energy levels read sideways; measure the lines and you have measured the steps.",
          "realWorldExample": "An ore-testing laboratory near Tarkwa confirms sodium and copper in a solution by the colours its flame adds to the spectroscope, sodium the fierce yellow pair, copper a green-blue, exactly the fingerprint method described here."
        },
        {
          "title": "Lasers, Photocells and Quantum Devices at Work",
          "content": "Light amplification by stimulated emission of radiation, the laser, extends the quantum idea into engineering: photons released by stimulated drops are identical in frequency and phase, so laser light is monochromatic, coherent and collimated into a narrow beam that stays thin over long distances. Those three properties explain the uses: a barcode scanner at a shop counter reads by sweeping a single colour, optical surgeons cut with focusable energy, surveyors run level lines across building sites, and fibre-optic cables carry communication as pulses of one colour. The photocell works the effect in the opposite direction, turning incoming photons into circuit current; silicon light sensors generate a small voltage or change their resistance with illumination, and a comparator makes that signal useful. A street light photocell at a junction in Tema senses the fading of dusk, and when illumination drops below the trip level the relay closes and the lamp burns until morning; the controller inside a solar lantern is the same idea with a threshold set so the lamp starts at true darkness and stops at dawn, saving the battery. Smoke detectors that sense particles by scattered light, counters that sort bottles on a beverage line, and the light meter in a phone camera all descend from the one photon relation. For examinations, be ready to name the energy change in each device, light to electrical signal in the photocell, electrical to coherent light in the laser diode, and to cite one maintenance fact, that a dusty lens or panel-like sensor degrades performance exactly as it does in photovoltaics.",
          "bulletPoints": [
            "Laser light is monochromatic, coherent and directional, because stimulated emission copies photon for photon.",
            "Uses follow the properties: barcode scanning, surgery, survey lines on building sites, fibre communication.",
            "A photocell converts light into an electrical signal; the street-light dusk sensor is a photocell with a relay.",
            "Solar lantern controllers trip on the same light-sensing principle, protecting the battery through the night.",
            "Energy changes must be named in answers: light to electrical in the cell, electrical to light in the laser."
          ],
          "keyTakeaway": "The quantum relation hf runs through every one of these machines: sensors read photons as current, and lasers write them as order.",
          "realWorldExample": "The automatic street light outside a house at East Legon stays dark all day because its photocell holds the control circuit open while light exceeds the trip level, and ignites at dusk when the sensor output falls below it."
        }
      ],
      "commonMistakes": [
        "Claiming that very intense low-frequency light can eject electrons if given time; below the threshold frequency no number of weak photons substitutes for one photon of sufficient energy.",
        "Saying intensity raises the maximum kinetic energy; intensity raises the photoelectron count, frequency raises the energy.",
        "Leaving energies in electronvolts while substituting into eVs = KEmax with SI units; 1 eV must be converted with 1.6 x 10^-19 J.",
        "Drawing line spectra as continuous bands, or placing absorption and emission lines at different wavelengths for the same gas."
      ],
      "wassceExamTips": [
        "Paper 2 photoelectric calculations earn method marks for the formula line: write f = c/lambda, then E = hf, then KEmax = hf - phi, each on its own line before any number appears.",
        "In Paper 1, expect the graph question on stopping voltage against frequency: intercept on the frequency axis is the threshold, gradient is h/e; describe both in one sentence each.",
        "When asked why wave theory fails, answer with the two facts it cannot explain, instantaneous emission and the existence of a threshold frequency, not with general remarks about light being a wave.",
        "For spectrum questions, name the transition direction: emission is downward between levels giving a bright line, absorption is upward giving a dark line at the same wavelength; the same-wavelength phrase carries the mark."
      ],
      "summaryChecklist": [
        "Can I state E = hf, the work function and the threshold condition in one coherent paragraph?",
        "Can I compute KEmax and the corresponding stopping voltage for given light frequency and surface?",
        "Can I explain why emission is immediate and why intensity changes counts but not energies?",
        "Can I connect Bohr level differences to emission and absorption lines and quote the hydrogen 656 nm energy?",
        "Can I name three laser uses and two photocell uses, each tied to the right energy change?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-photoelectric-effect-line-spectra-1",
        "title": "Photon Energy, Maximum Kinetic Energy and Stopping Voltage",
        "problem": "Green light of wavelength 500 nm falls on a metal surface whose work function is 3.0 x 10^-19 J. Taking c = 3.0 x 10^8 m/s and h = 6.63 x 10^-34 J s, find the photon energy, the maximum kinetic energy of the emitted photoelectrons, and the stopping voltage. Use e = 1.6 x 10^-19 C.",
        "stepByStepSolution": [
          "Step 1 (M1): Frequency from wave relation: f = c/lambda = 3.0 x 10^8 / 500 x 10^-9.",
          "Step 2 (A1): f = 6.0 x 10^14 Hz.",
          "Step 3 (M1): Photon energy: E = hf = 6.63 x 10^-34 x 6.0 x 10^14.",
          "Step 4 (A1): E = 3.98 x 10^-19 J.",
          "Step 5 (M1): Einstein relation: KEmax = hf - phi = 3.98 x 10^-19 - 3.0 x 10^-19.",
          "Step 6 (A1): KEmax = 9.8 x 10^-20 J.",
          "Step 7 (M1): Stopping voltage from eVs = KEmax: Vs = 9.8 x 10^-20 / 1.6 x 10^-19.",
          "Step 8 (A1): Vs is about 0.61 V; final answers photon energy 3.98 x 10^-19 J, KEmax 9.8 x 10^-20 J, stopping voltage 0.61 V."
        ],
        "keyTakeaway": "Three lines of physics, f = c/lambda, E = hf and KEmax = hf - phi, generate every number the question asks for."
      },
      {
        "id": "ex-phy-photoelectric-effect-line-spectra-2",
        "title": "The Energy Gap Behind a Hydrogen Spectral Line",
        "problem": "The red line of the hydrogen emission spectrum has a wavelength of 656 nm. Calculate the energy of one photon of this light in joules and in electronvolts, and state what the calculation tells us about the hydrogen atom. Use h = 6.63 x 10^-34 J s, c = 3.0 x 10^8 m/s and e = 1.6 x 10^-19 C.",
        "stepByStepSolution": [
          "Step 1 (M1): Photon energy of a line: E = hc/lambda = (6.63 x 10^-34 x 3.0 x 10^8)/(656 x 10^-9).",
          "Step 2 (M1): The numerator is 1.989 x 10^-25 J m, so E = 1.989 x 10^-25 / 6.56 x 10^-7.",
          "Step 3 (A1): E = 3.03 x 10^-19 J.",
          "Step 4 (M1): Convert to electronvolts by dividing by 1.6 x 10^-19 J per eV.",
          "Step 5 (A1): E = 1.89 eV.",
          "Step 6 (M1): Interpret with Bohr: a downward jump between two levels emits exactly this photon, so the level difference is 1.89 eV; the line corresponds to the drop from level 3 to level 2.",
          "Step 7 (A1): Final answers 3.03 x 10^-19 J and 1.89 eV; the sharp line proves the atom energy levels are discrete, since only a fixed gap can radiate one fixed colour."
        ],
        "keyTakeaway": "Every spectral line is a measured energy gap; hc/lambda converts the colour seen in the grating into the step the electron fell."
      }
    ],
    "quiz": {
      "id": "quiz-phy-photoelectric-effect-line-spectra",
      "topicId": "shs3-phy-t3-photoelectric-effect-line-spectra",
      "title": "Photoelectric Effect and Line Spectra Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-photoelectric-effect-line-spectra-1",
          "quizId": "quiz-phy-photoelectric-effect-line-spectra",
          "questionText": "Why does the existence of a threshold frequency support the photon model rather than the classical wave model?",
          "optionA": "Because metals reflect light of low frequency",
          "optionB": "Because electrons need time to store energy from a wave",
          "optionC": "Because light intensity always falls with distance",
          "optionD": "Because each electron takes energy from one photon of energy hf, which must at least equal the work function",
          "correctOption": "D",
          "subConcept": "Evidence for photons",
          "explanation": "A single photon meeting a single electron explains both the threshold and the immediacy of emission. The wave model, in which energy is shared continuously, would allow dim low-frequency light to work given time, contrary to observation.",
          "remediationTip": "Restate the two failed wave predictions, delay and no-threshold, beside the photon explanation until the pairing is memorised."
        },
        {
          "id": "q-phy-photoelectric-effect-line-spectra-2",
          "quizId": "quiz-phy-photoelectric-effect-line-spectra",
          "questionText": "Light of frequency f ejects photoelectrons from a surface of work function phi. The maximum kinetic energy of the electrons is given by:",
          "optionA": "hf + phi",
          "optionB": "hf - phi",
          "optionC": "phi - hf",
          "optionD": "hf divided by phi",
          "correctOption": "B",
          "subConcept": "Einstein photoelectric relation",
          "explanation": "KEmax = hf - phi: the photon pays the escape bill first and the remainder becomes electron motion. Option A adds the cost to the energy, and C reverses the subtraction, staying negative for real emission.",
          "remediationTip": "Say the sentence: photon energy in, work function out, remainder is speed; then write the equation from the sentence."
        },
        {
          "id": "q-phy-photoelectric-effect-line-spectra-3",
          "quizId": "quiz-phy-photoelectric-effect-line-spectra",
          "questionText": "Ultraviolet light above the threshold frequency falls on a zinc plate. If only the intensity of the light is increased, what changes?",
          "optionA": "The maximum kinetic energy of each photoelectron",
          "optionB": "The work function of the zinc",
          "optionC": "The number of photoelectrons emitted each second",
          "optionD": "The threshold frequency of the zinc",
          "correctOption": "C",
          "subConcept": "Intensity versus frequency effects",
          "explanation": "More intensity means more photons per second, so more electrons per second, each with the same KEmax = hf - phi. The work function and threshold are properties of the metal, unchanged by brightness.",
          "remediationTip": "Sketch two beams, dim and bright, hitting one surface; count arrows per second and label each arrow energy hf."
        },
        {
          "id": "q-phy-photoelectric-effect-line-spectra-4",
          "quizId": "quiz-phy-photoelectric-effect-line-spectra",
          "questionText": "How is a bright emission line produced by an atom?",
          "optionA": "An electron falls from a higher to a lower level and emits one photon whose energy equals the gap",
          "optionB": "The nucleus releases surplus heat as visible light",
          "optionC": "Many electrons absorb a broad band of frequencies and glow",
          "optionD": "Colliding atoms merge their levels into one continuous line",
          "correctOption": "A",
          "subConcept": "Origin of spectral lines",
          "explanation": "hf = E upper - E lower fixes one frequency per jump, giving a sharp line. Absorption builds dark lines in a continuous spectrum instead, and nuclear processes lie far above visible photon energies.",
          "remediationTip": "Draw the two-level picture with the photon arrow leaving the atom and label the energy difference as hf."
        },
        {
          "id": "q-phy-photoelectric-effect-line-spectra-5",
          "quizId": "quiz-phy-photoelectric-effect-line-spectra",
          "questionText": "What is the energy of a photon of frequency 6.0 x 10^14 Hz? Take h = 6.63 x 10^-34 J s.",
          "optionA": "3.98 x 10^-20 J",
          "optionB": "3.98 x 10^-19 J",
          "optionC": "6.63 x 10^-19 J",
          "optionD": "2.0 x 10^-19 J",
          "correctOption": "B",
          "subConcept": "Photon energy calculation",
          "explanation": "E = hf = 6.63 x 10^-34 x 6.0 x 10^14 = 3.98 x 10^-19 J. The 10^-20 option slips one power of ten, C copies the constant, and D looks vaguely plausible but multiplies nothing.",
          "remediationTip": "Multiply the coefficients once, handle the powers of ten once, and combine: 6.63 x 6.0 is near 40, so 40 x 10^-20 is 3.98 x 10^-19."
        }
      ]
    }
  },
  {
    "id": "shs3-phy-t3-nuclear-energetics-decay-fission-fusion",
    "subjectId": "physics",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Nuclear Energetics: Decay Calculations, Fission, Fusion and E = mc2",
    "description": "Alpha, beta and gamma emissions with their penetration and ionising power, balancing nucleon and proton numbers in decay equations, half-life calculations and decay graphs, activity and background count-rate corrections, binding energy per nucleon, fission of uranium-235, fusion in the sun, mass-energy conversion and radiation dose and safety.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• An alpha particle is a helium nucleus, two protons and two neutrons; it is the most ionising and least penetrating emission, stopped by paper or dead skin, and dangerous chiefly when inhaled or swallowed.\n• A beta particle is an electron created when a neutron inside the nucleus changes into a proton; it penetrates some millimetres of aluminium and, since charge and nucleon number are conserved, the daughter proton number rises by one while its nucleon number is unchanged.\n• Gamma radiation is a high-energy electromagnetic photon from an excited nucleus; it changes neither nucleon nor proton number, is weakly ionising and the most penetrating, needing thick lead or concrete to attenuate it.\n• Balance every decay equation on two counts at once: nucleon numbers equal and proton numbers equal on both sides, for example uranium-238 becoming thorium-234 plus helium-4, with 238 = 234 + 4 and 92 = 90 + 2.\n• The half-life is the time for the activity, or the number of undecayed nuclei, to fall to half its value; after n half-lives the fraction remaining is (1/2)^n.\n• Worked case: with a half-life of 6 hours, a 16 g sample after 30 hours, that is five half-lives, holds 16/(2^5) = 0.5 g.\n• Activity is measured in becquerels, one decay per second; a counter reading includes background, so the true source count equals observed minus background, for example 360 counts per minute observed with 60 counts per minute background gives 300 true.\n• After two half-lives of that source the true rate is 300/4 = 75 counts per minute, and the counter will still display 75 + 60 = 135, because background never decays.\n• Mass defect: the nucleus of a given nucleon number weighs less than its parts; the missing mass times c^2 is the binding energy that holds the nucleus, and 1 u of mass corresponds to about 931 MeV.\n• The binding-energy-per-nucleon curve peaks near iron, so middle-mass nuclei are the most stable; heavy nuclei release energy by fissioning toward the peak and light nuclei by fusing upward toward it.\n• Fission of uranium-235 after neutron capture splits the nucleus, yields about 200 MeV and two or three new neutrons that can sustain a chain reaction controlled by moderator and control rods; a mass defect of 3.6 x 10^-28 kg per event gives E = mc^2 = 3.24 x 10^-11 J, which is 202 MeV.\n• One kilowatt hour of 3.6 x 10^6 J therefore needs about 1.1 x 10^17 such fissions.\n• Fusion powers the sun, hydrogen nuclei combining into helium at enormous temperature; the sunlight on Ghanaian panels is the outward account of that fusion ledger, and no Ghanaian power station yet runs on fission, though the Ghana Atomic Energy Commission research reactor at KNUST and the radiation institute produce isotopes for medicine, agriculture and food irradiation.\n• Dose safety follows three words, time, distance, shielding: limit exposure duration, use tongs for inverse-square gain, shield by type, paper for alpha, aluminium for beta, lead for gamma, store sources in lead-lined boxes and never point a source at a person.",
    "detailedNotes": {
      "overview": "This topic makes the nucleus a place of arithmetic and energy. You classify alpha, beta and gamma radiation by composition, ionising power and penetration, and you balance decay equations on both the nucleon and proton counts. You then master half-life bookkeeping, including the background correction that turns a counter reading into a true activity, and you read and sketch the exponential decay curve. The energetic half of the topic rests on mass defect and E = mc^2: the binding-energy-per-nucleon curve explains why uranium fissions and hydrogen fuses, and you carry one fission through from mass defect to joules, to MeV and to the number of fissions that fill a kilowatt hour. You close with dose and safety practice as the Nuclear Radiology and Radiation Sciences authority and the laboratory rules require them.",
      "introduction": "Anchor the invisible with the measurable: plot a class set of counter readings against time for a long-lived source, add the constant background level and watch the curve bend. Use the half-life card game, one flip halves the pennies, to build intuition that a 6 hour half-life means five halvings in 30 hours, not a fifth of the time. Bring every radiation-safety poster from the school laboratory into the lesson and have students match paper, aluminium and lead to alpha, beta and gamma, then defend each match with the ionising-and-penetrating language of the marking scheme.",
      "realWorldContext": "Ghana uses nuclear science daily without a single fission power plant. The Ghana Atomic Energy Commission at Kwabenya operates the 100 kW GHARR-1 research reactor at the KNUST campus, producing radioisotopes such as fluorine-18 and iodine-131 for the Nuclear Medicine Centre at Ridge, where hospitals in Accra and Kumasi order them in for thyroid and imaging work. The commission Radiation Technology Institute applies gamma irradiation to delay sprouting in stored onions and potatoes and to sterilise medical supplies. In agriculture, the technique of sterile-insect releases for tsetse control descends from the same decay physics. Every equation in this lesson is therefore also a safety instruction: sealed sources behind lead castles, distance held with long tongs, and personnel badges recording dose, the routine observed at the commission facilities that visits by science clubs from around Accra see first-hand.",
      "objectives": [
        "Compare alpha, beta and gamma radiation by composition, ionising power, penetration and behaviour in fields",
        "Balance nuclear equations using conservation of nucleon and proton numbers",
        "Calculate remaining mass or activity after a given number of half-lives and correct count rates for background",
        "Explain binding energy, fission and fusion with E = mc^2 and state the principles of radiation protection"
      ],
      "sections": [
        {
          "title": "The Three Emissions and How to Balance Their Equations",
          "content": "An alpha particle is a helium nucleus, two protons clasped with two neutrons; ejected heavy and slow, it rips electrons from molecules along a few centimetres of air, so it is the most ionising radiation, yet a sheet of paper or the dead layer of skin stops it, making it dangerous mainly inside the body through inhalation or food. A beta particle is an electron made at the instant a neutron transforms into a proton inside the nucleus; it is lighter and faster, penetrates some millimetres of aluminium, and ionises less densely than alpha. Because charge and nucleon number are conserved, beta emission lifts the proton number by one while the nucleon number stays put: carbon-14 becomes nitrogen-14 plus an electron, 14 = 14 + 0 and 6 = 7 - 1. Gamma rays are electromagnetic photons from a nucleus shedding excess excitation; they carry no charge, change neither number, ionise weakly and penetrate furthest, attenuated only by thick lead or concrete. The examination discipline is the two-count audit: for uranium-238 decaying to thorium-234 plus helium-4, check 238 = 234 + 4 on nucleons and 92 = 90 + 2 on protons, every symbol balanced on both counts before the answer is trusted. Deflection in electric fields follows charge: alpha bends one way heavily for its charge, beta bends the other way more sharply for its small mass, gamma goes straight through.",
          "bulletPoints": [
            "Alpha: helium nucleus, most ionising, stopped by paper, hazardous internally.",
            "Beta: nucleus-born electron, neutron to proton, proton number +1, nucleon number unchanged.",
            "Gamma: photon from an excited nucleus, no change in either number, most penetrating.",
            "Balance on two counts: total nucleon number and total proton number agree on both sides.",
            "In a field, alpha and beta curve opposite ways and gamma runs straight."
          ],
          "keyTakeaway": "Read a nuclear equation like an accountant: the nucleon column and the proton column must each total the same on both sides.",
          "realWorldExample": "Smoke detectors that sense smoke by the current an americium alpha source sustains in an ionisation chamber rely on alpha being easily stopped: smoke particles absorb the ionised air path and the circuit sounds, a device found in laboratories at the commission facilities."
        },
        {
          "title": "Half-Life, Activity and the Background Count",
          "content": "Radioactive decay is spontaneous and random: no nucleus can be persuaded to decay on schedule, but a large sample obeys exact statistics. The half-life is the time in which half the remaining undecayed nuclei decay, so the activity, measured in becquerels as decays per second, halves with each half-life, and after n half-lives the fraction left is (1/2)^n. With a half-life of 6 hours, thirty hours is five half-lives and a 16 g sample shrinks to 16/32 = 0.5 g, a calculation examiners prefer to see written as the power of one-half rather than a long chain of divisions. Sketch activity against time and you get a falling exponential that never quite reaches zero; sketch count rate against time on a school counter and the curve flattens at the background rate instead, because the detector still hears cosmic rays, radon in the air and the stones under the floor. That background must be subtracted before any decay arithmetic: a source reading of 360 counts per minute against a background of 60 gives 300 true; after two half-lives the true rate is 75 counts per minute, but the counter displays 75 + 60 = 135, and students who forget to add background back lose the last mark. Repeat countings, average them, and quote the count-rate corrections as a matter of laboratory habit.",
          "bulletPoints": [
            "Half-life halves what remains: fraction left after n half-lives is (1/2)^n.",
            "Six-hour half-life over thirty hours is five halvings, so 16 g becomes 0.5 g.",
            "Activity is decays per second, the becquerel; count rate is what the detector registers.",
            "True count rate = observed minus background; the display returns to background, never below.",
            "The decay curve is exponential: sketch it through (0, A), (one half-life, A/2), (two, A/4)."
          ],
          "keyTakeaway": "Half-life statements are about ensembles, not single atoms; and any count-rate answer must be built on background-subtracted numbers.",
          "realWorldExample": "A school near Tema records 20 counts per minute on an idle Geiger counter; that floor is local background, and any classroom experiment subtracting it before quoting a source rate is doing proper Physics 3 practice."
        },
        {
          "title": "Mass Defect, Fission, Fusion and Protection from Radiation",
          "content": "Weigh a nucleus and you find it lighter than the sum of its loose protons and neutrons. That missing mass, the mass defect, appears as the binding energy released when the nucleus assembled, related by E = mc^2; 1 atomic mass unit carries about 931 MeV of binding, a number that makes nuclear energies instantly readable next to the few eV of chemistry. Plot binding energy per nucleon against nucleon number and a broad hill emerges, peaking near iron: nuclei at the top are the most tightly bound, so heavy nuclei can release energy by splitting downhill toward the peak, and light nuclei by combining uphill toward it. Fission of uranium-235 after capturing a slow neutron splits it into two middle fragments and two or three neutrons, and where the mass defect is about 3.6 x 10^-28 kg the release is E = 3.6 x 10^-28 x (3.0 x 10^8)^2 = 3.24 x 10^-11 J, that is 202 MeV, usually quoted as some 200 MeV per fission; those escaping neutrons, slowed in a moderator and trimmed by control rods, sustain or damp the chain reaction. The same kilowatt hour an ECG meter counts as 3.6 x 10^6 J equals roughly 1.1 x 10^17 such fissions. Fusion, which lights the sun and every Ghanaian morning, demands immense temperature to drive nuclei past their mutual repulsion, and no fusion reactor yet supplies power anywhere on earth, though the sun supplies it in trust. Protection reduces to three variables: shorten time near a source, increase distance where the inverse-square law rewards a centimetre with a centimetre squared, and choose shielding by radiation type, paper or skin for alpha, aluminium for beta, lead or concrete for gamma, with sealed sources handled by tongs, dose tracked by badges, and waste locked for decay rather than burnt.",
          "bulletPoints": [
            "Mass defect times c^2 is binding energy; 1 u corresponds to about 931 MeV.",
            "The binding-energy-per-nucleon curve peaks near iron, explaining both fission and fusion as downhill moves.",
            "Uranium-235 fission: about 3.24 x 10^-11 J, roughly 200 MeV, plus two or three neutrons to chain.",
            "A kilowatt hour of 3.6 x 10^6 J needs about 1.1 x 10^17 fissions of that size.",
            "Control by time, distance and shielding, matched to radiation type, with tongs, badges and sealed-source stores."
          ],
          "keyTakeaway": "Nuclear energy is mass in disguise, and the curve of binding energy per nucleon is the map that tells which rearrangements pay.",
          "realWorldExample": "The food-irradiation facility of the commission Gamma Institute treats stored onions and potatoes with cobalt-60 gamma rays, exploiting the deep penetration that makes gamma the shielding problem and, handled correctly, the useful servant."
        }
      ],
      "commonMistakes": [
        "Balancing the nucleon numbers of a decay equation and ignoring the proton column, leaving an answer with the wrong daughter element.",
        "Believing a sample is wholly decayed after two half-lives; each half-life halves what remains, and the fraction left after n is (1/2)^n.",
        "Quoting the raw counter reading as the source activity, forgetting the background subtraction, or subtracting background and forgetting to add it back for the displayed rate.",
        "Choosing paper as shielding for gamma, or claiming alpha is the most penetrating; the shielding must match the type, lead for gamma, and alpha stops at paper."
      ],
      "wassceExamTips": [
        "Paper 2 decay equations award marks for each balanced column: write the nucleon total and the proton total as two separate checks, and name the daughter element from its proton number.",
        "For half-life numericals, express the number of half-lives first, n = total time/half-life, then apply (1/2)^n; stating the fraction before the mass earns the method mark.",
        "In Paper 3 count-rate practicals, record background separately, subtract it in a shown column, repeat each count and average; examiners give marks for the table that displays this.",
        "When E = mc^2 appears, keep mass in kilograms and c in metres per second to get joules, then convert with 1 MeV = 1.6 x 10^-13 J; mixing atomic-mass shorthand with SI units is the classic lost A mark."
      ],
      "summaryChecklist": [
        "Can I describe alpha, beta and gamma by composition, ionisation, penetration and field behaviour?",
        "Can I balance a decay equation on both nucleon and proton counts and identify the daughter nuclide?",
        "Can I compute remaining mass after n half-lives and correct a count rate for background?",
        "Can I link mass defect, binding energy per nucleon, fission and fusion in one energy argument?",
        "Can I state time, distance and shielding rules matched to each radiation type?"
      ]
    },
    "examples": [
      {
        "id": "ex-phy-nuclear-energetics-decay-fission-fusion-1",
        "title": "Half-Life Decay with a Background Count",
        "problem": "A radioactive source has a half-life of 6 hours. A detector measures 360 counts per minute from the source at the start of an experiment, while the background count is 60 counts per minute. Find the fraction and mass remaining from an initial 16 g sample after 30 hours, and the count rate the detector will display at that time.",
        "stepByStepSolution": [
          "Step 1 (M1): Number of half-lives n = total time/half-life = 30/6.",
          "Step 2 (A1): n = 5 half-lives.",
          "Step 3 (M1): Fraction remaining = (1/2)^5 = 1/32.",
          "Step 4 (M1): Mass remaining = 16 g x 1/32.",
          "Step 5 (A1): Mass remaining = 0.5 g.",
          "Step 6 (M1): True initial count of the source = observed minus background = 360 - 60 = 300 counts per minute.",
          "Step 7 (M1): True rate after five half-lives = 300 x 1/32, computed as 300/32.",
          "Step 8 (A1): True rate = 9.4 counts per minute, so the displayed reading is 9.4 + 60 = 69.4 counts per minute, a little above background; final answers 0.5 g, one thirty-second remaining, and a displayed count near 69 counts per minute."
        ],
        "keyTakeaway": "Subtract background before halving anything, add it back before quoting what the counter shows; the source decays, the background does not."
      },
      {
        "id": "ex-phy-nuclear-energetics-decay-fission-fusion-2",
        "title": "Energy of One Fission and Fissions per Kilowatt Hour",
        "problem": "In a typical fission of uranium-235 the total mass of the fragments and neutrons is less than the original nucleus by 3.6 x 10^-28 kg. Taking c = 3.0 x 10^8 m/s, find the energy released in joules and in MeV, and hence the number of such fissions needed to deliver one kilowatt hour of 3.6 x 10^6 J.",
        "stepByStepSolution": [
          "Step 1 (M1): Apply the mass-energy relation: E = delta-m x c^2 = 3.6 x 10^-28 x (3.0 x 10^8)^2.",
          "Step 2 (M1): The square is 9.0 x 10^16, so E = 3.6 x 10^-28 x 9.0 x 10^16.",
          "Step 3 (A1): E = 3.24 x 10^-11 J.",
          "Step 4 (M1): Convert to mega-electronvolts with 1 MeV = 1.6 x 10^-13 J: E = 3.24 x 10^-11 / 1.6 x 10^-13.",
          "Step 5 (A1): E = 202.5 MeV, the familiar roughly 200 MeV per fission.",
          "Step 6 (M1): Number of fissions = energy wanted over energy per event = 3.6 x 10^6 / 3.24 x 10^-11.",
          "Step 7 (A1): About 1.1 x 10^17 fissions supply one unit of electricity, the quiet reason a pellet of uranium the size of a seed rivals a coal yard."
        ],
        "keyTakeaway": "E = mc^2 converts vanishing mass into enormous energy because c^2, 9 x 10^16, is an enormous number."
      }
    ],
    "quiz": {
      "id": "quiz-phy-nuclear-energetics-decay-fission-fusion",
      "topicId": "shs3-phy-t3-nuclear-energetics-decay-fission-fusion",
      "title": "Nuclear Energetics Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-phy-nuclear-energetics-decay-fission-fusion-1",
          "quizId": "quiz-phy-nuclear-energetics-decay-fission-fusion",
          "questionText": "Which emission is the most strongly ionising and the least penetrating?",
          "optionA": "The alpha particle",
          "optionB": "The beta particle",
          "optionC": "The gamma ray",
          "optionD": "The neutron released in fission",
          "correctOption": "A",
          "subConcept": "Radiation types",
          "explanation": "The heavy double-charged helium nucleus drags electrons off everything within a few centimetres of air and is stopped by paper, the definition of high ionisation with low penetration. Beta is middle, gamma weakly ionising but deeply penetrating, and free neutrons are famously penetrating.",
          "remediationTip": "Rank the three by one sentence each: alpha all ionisation no reach, gamma reach but little ionisation, beta in between."
        },
        {
          "id": "q-phy-nuclear-energetics-decay-fission-fusion-2",
          "quizId": "quiz-phy-nuclear-energetics-decay-fission-fusion",
          "questionText": "A nucleus emits a beta particle (an electron). What happens to its nucleon number and proton number?",
          "optionA": "Nucleon number falls by 4, proton number falls by 2",
          "optionB": "Both stay the same because only energy left",
          "optionC": "Proton number falls by one, nucleon number rises by one",
          "optionD": "Nucleon number is unchanged, proton number rises by one",
          "correctOption": "D",
          "subConcept": "Beta decay bookkeeping",
          "explanation": "A neutron becomes a proton plus the emitted electron, so the total nucleon count is unchanged while the proton count gains one; carbon-14 becomes nitrogen-14. Option A is alpha decay, and B describes gamma.",
          "remediationTip": "Balance one beta equation three times, checking both columns each time, until the +1 proton shift is reflex."
        },
        {
          "id": "q-phy-nuclear-energetics-decay-fission-fusion-3",
          "quizId": "quiz-phy-nuclear-energetics-decay-fission-fusion",
          "questionText": "A sample has a half-life of 6 hours. Starting from 16 g, how much remains undecayed after 30 hours?",
          "optionA": "0.25 g",
          "optionB": "0.5 g",
          "optionC": "1 g",
          "optionD": "8 g",
          "correctOption": "B",
          "subConcept": "Half-life calculation",
          "explanation": "Thirty hours is five half-lives, so the fraction left is (1/2)^5 = 1/32 and 16/32 = 0.5 g. One division short gives 1 g, and halving once gives 8 g.",
          "remediationTip": "Tick the halvings as you count them: 16, 8, 4, 2, 1, 0.5, five ticks for thirty hours."
        },
        {
          "id": "q-phy-nuclear-energetics-decay-fission-fusion-4",
          "quizId": "quiz-phy-nuclear-energetics-decay-fission-fusion",
          "questionText": "A counter reads 360 counts per minute near a source, and the background alone is 60 counts per minute. What count rate belongs to the source?",
          "optionA": "420 counts per minute",
          "optionB": "240 counts per minute",
          "optionC": "300 counts per minute",
          "optionD": "360 counts per minute",
          "correctOption": "C",
          "subConcept": "Background correction",
          "explanation": "True source rate = observed minus background = 360 - 60 = 300 counts per minute. Adding instead gives 420, doubling the subtraction gives 240, and quoting the raw reading leaves background counted as source.",
          "remediationTip": "Write the correction as a formula line, true = observed - background, before touching any number."
        },
        {
          "id": "q-phy-nuclear-energetics-decay-fission-fusion-5",
          "quizId": "quiz-phy-nuclear-energetics-decay-fission-fusion",
          "questionText": "The energy released when one uranium-235 nucleus fissions is closest to:",
          "optionA": "2 MeV",
          "optionB": "20 MeV",
          "optionC": "200 MeV",
          "optionD": "2000 MeV",
          "correctOption": "C",
          "subConcept": "Fission energy scale",
          "explanation": "The mass defect of about 3.6 x 10^-28 kg converts through E = mc^2 into roughly 200 MeV per fission, a hundred million times a chemical burn. The other options misplace the decimal of the same fact.",
          "remediationTip": "Redo the conversion once by hand, 3.24 x 10^-11 J divided by 1.6 x 10^-13 J per MeV, and anchor the answer near 200."
        }
      ]
    }
  }
];
