// Ghanaian SHS Visual Arts — Ceramics
// WASSCE Visual Arts workroom syllabus across SHS 1, SHS 2 and SHS 3
// Textbook-grade notes, studio procedure with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS_CERAMICS_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-ce-t1-clay-types-properties-testing",
    "subjectId": "ceramics",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Clay: Kinds, Properties and Field Testing",
    "description": "Clay is a natural rock dust that turns plastic with water and permanent with fire. This lesson sorts the main clay families, explains plasticity, shrinkage and porosity as properties a potter can measure, and teaches field tests, local digging, levigation and wedging.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• Clay forms when feldspar-rich rock weathers slowly; chemically it is hydrous aluminium silicate, Al2Si2O5(OH)4, with plate-like particles that hold a thin film of water.\n• China clay (kaolin) is lean, short and white-firing; it matures only around 1300–1400 °C and is used for porcelain, not for school hand-building.\n• Ball clay is fine-grained, very plastic and usually grey-firing; potters blend 10–20 per cent into a lean body to improve strength and workability.\n• Earthenware clay is the red or buff low-fire clay of the Ghanaian tradition; it matures around 1000–1150 °C and stays slightly porous even after firing.\n• Stoneware clay is plastic and tough, matures around 1200–1300 °C and vitrifies into a near-waterproof body even without glaze.\n• Fireclay is highly refractory and resists over 1500 °C; it is used for kiln bricks, shelves and saggers rather than for ware.\n• Plasticity is the ability to be shaped under pressure and to hold that shape when the pressure is released; it depends on particle size, water content and mineral type.\n• Shrinkage comes in two parts: drying shrinkage of roughly 5–8 per cent and firing shrinkage of roughly 2–5 per cent; the total is measured on a marked test bar.\n• Porosity is the water a fired body absorbs; boiled and weighed test bars show earthenware around 8–15 per cent while stoneware stays under 3 per cent.\n• Grog is pre-fired, crushed clay added for tooth: it cuts shrinkage, speeds even drying and improves resistance to thermal shock, essential for fire-clay pots and kiln furniture.\n• A lean clay is sticky, short and slabby: it cracks when coiled and sags over a rim; grog or a ball-clay blend corrects it.\n• Field tests: a 6 mm coil wrapped around a 25 mm dowel without cracking shows good plasticity; a pinch slab that holds together shows cohesion; the ribbon test shows grog content.\n• Local digs sit 0.5–1 m below topsoil on riverbanks, for example near the Shai Hills; remove roots and stones, dry, crumble and levigate the clay through a 60–80 mesh sieve.\n• Wedging, by the ram's head or circle method for 3–5 minutes (about 30–40 firm pushes), evens moisture, aligns the particles and expels trapped air that would burst the pot in the kiln.",
    "detailedNotes": {
      "overview": "Clay is the ceramic artist's primary material: a weathered rock dust that becomes plastic with water and stone-permanent with heat. This topic names the five clay families a potter meets, explains plasticity, shrinkage and porosity as measurable properties, and shows how an SHS student tests a raw clay, digs and processes one locally, and wedges it ready for the studio. Every later ceramics lesson assumes the body in your hands has been chosen and prepared on purpose.",
      "introduction": "A pot fails for one of two reasons: the clay was wrong for the job, or the clay was right but untested. Builders who grab the first muddy hole they find produce cracked, lopsided ware, while the trained potter runs a coil test, a pinch slab and a shrink bar before committing a week of work to a body. This lesson replaces guesswork with four or five minutes of simple testing that predicts exactly how a clay will behave under the hands and in the fire.",
      "realWorldContext": "On the Accra–Tema road at Tetteh Quarshie and in the Shai country near Adome, potters still dig their own clay from shallow riverbank pits, carry it home in basins, build water pots coil on coil and fire them in open wood piles that peak around 900–1000 °C — a living earthenware tradition. A secondary school near Kumasi or Ho can dig a usable body from a borrow pit behind the compound; the difference between that mud and a real clay body is the testing and processing taught here.",
      "objectives": [
        "Name the five major clay types and state the firing range or studio use of each.",
        "Define plasticity, shrinkage and porosity and quote typical values for an earthenware clay.",
        "Carry out coil, pinch-slab and ribbon tests on a raw clay and report the result as fit or unfit for building.",
        "Describe the full sequence for digging, drying, crushing, levigating and wedging a local clay.",
        "Explain why grog is added to a clay body and what it does to shrinkage and thermal shock."
      ],
      "sections": [
        {
          "title": "The clay family: from kaolin to fireclay",
          "content": "Clays are sorted by the minerals they contain and by the temperature at which they mature. China clay, or kaolin, is the purest: its particles are comparatively coarse, so it feels lean and short, tears when pulled thin, and only bonds near 1300–1400 °C, which is why it is reserved for porcelain. Ball clay is its opposite — fine, highly plastic and strong when dry — and a 10–20 per cent addition transforms a weak local body. Earthenware clay, red or buff from its iron content, is the workhorse of the Ghanaian potter; it matures around 1000–1150 °C and stays slightly porous after firing, so water slowly sweats through a storage pot and cools it. Stoneware matures around 1200–1300 °C, vitrifies, and rings when tapped, while fireclay resists heat past 1500 °C and is reserved for kiln bricks, shelves and saggers. Knowing which family a clay belongs to settles the firing schedule and the use of the finished pot before a single coil is rolled.",
          "bulletPoints": [
            "Kaolin: lean, short, white-firing, matures only near 1300–1400 °C.",
            "Ball clay: fine and very plastic, blended 10–20 per cent into weak bodies.",
            "Earthenware: matures 1000–1150 °C, porous after firing, coloured by iron oxide.",
            "Stoneware: matures 1200–1300 °C, vitrifies, near-waterproof without glaze.",
            "Fireclay: refractory above 1500 °C, the clay of kiln furniture and saggers."
          ],
          "keyTakeaway": "A clay family is defined by the temperature at which it matures and the structure it leaves behind, not by the colour of the mud.",
          "realWorldExample": "The earthenware water pots sold at Tetteh Quarshie market keep drinking water cool precisely because fired earthenware stays slightly porous — a direct consequence of its low maturing range."
        },
        {
          "title": "Plasticity, shrinkage and porosity: the properties you can measure",
          "content": "Plasticity comes from the thin film of water held between the plate-like clay particles: press the clay and the plates slide over the film and lock in the new shape; dry it out and the body loses the ability entirely. It is measured by feel but judged by the coil test. Shrinkage has two stages. Drying shrinkage of roughly 5–8 per cent happens as water leaves and the particles pack closer together; firing shrinkage of a further 2–5 per cent occurs as the body tightens in the heat. Any matched set — a pot and its lid, a run of wall tiles — must be planned oversized by the total figure, or the pieces will not fit after the fire. Porosity is measured on a fired test bar: weigh it dry, boil it for half an hour, weigh it again, and the weight gain as a percentage is the porosity. Earthenware typically absorbs 8–15 per cent, stoneware under 3 per cent, and the number tells you at once whether a vessel may safely hold drinkable water.",
          "bulletPoints": [
            "Plasticity: shaped under pressure, shape retained; proven by the coil bend.",
            "Drying shrinkage of 5–8 per cent: measure a 100 mm scratched line on a wet bar.",
            "Firing shrinkage adds a further 2–5 per cent — plan matched sets oversized.",
            "Porosity by boil-and-weigh: earthenware 8–15 per cent, stoneware under 3 per cent.",
            "Lean clay tears when pulled thin; over-wet clay slumps and sticks to the hands."
          ],
          "keyTakeaway": "Every property that matters in ceramics — throwability, cracking, strength, water-holding — traces back to particle size and water.",
          "realWorldExample": "A student in Tamale making a matched set of lidded jars measures 6 per cent drying shrinkage on a test bar, so every lid is built about one-sixteenth oversized and still fits after firing."
        },
        {
          "title": "Testing a clay before you trust it",
          "content": "Four five-minute tests decide whether a clay deserves a project. The coil test: roll a rope of uniform 6 mm, wrap it around a 25 mm dowel; no visible cracking means the clay is plastic enough for coiling and pinch work. The pinch-slab test: press a small cake between thumb and forefinger to the edge of tearing; a body that hangs together in one piece has cohesion, while one that crumbles into dry islands is too short. The ribbon test: stretch a thin strip between the fingers; a long see-through ribbon means fine particle size, an early tear warns of grit. Finally the shrink bar: roll a straight 200 mm bar, scratch a 100 mm gauge line, let it dry slowly for three days and re-measure — the fall in the gauge line is the drying shrinkage you must design around. Record every result in the sketchbook beside the date and the digging place, because the same bank yields different clay in the wet season and the dry.",
          "bulletPoints": [
            "Coil test on a 25 mm dowel judges plasticity; cracking at a tight radius rejects the body.",
            "Pinch-slab test judges cohesion — the slab must stretch to tearing without powdering.",
            "Ribbon test exposes grit and coarse particle size before a blade or rib meets the ware.",
            "Shrink bar with a scratched 100 mm line gives the working drying-shrinkage figure.",
            "Test bars dry slowly under cloth; a bar cracked by fast drying proves nothing."
          ],
          "keyTakeaway": "A test is only worth doing if you record the number and use it to plan the next piece.",
          "realWorldExample": "Before a WASSCE project, a candidate at Ho tests three banks of clay and chooses the one whose coil survives a 25 mm wrap and whose bar shrinks least — the choice is written into the plan submitted for Paper 2."
        },
        {
          "title": "Digging, levigating and wedging local clay",
          "content": "Good clay sits below the topsoil, usually 0.5–1 m down on a riverbank or cutting, away from roots and leaf litter. Dig it out, dry it completely on boards, and crush it to crumbs no bigger than a bean. Levigation then purifies the body: slake the crumbs in water, stir to a soup, and strain it through a 60–80 mesh sieve to catch grit and organic matter; let the slipped water settle, pour off the clear top water, and dry the thick paste on canvas or a plaster slab until it leaves a clean thumbprint without sticking. The final step is wedging. On the ram's head method you slam the mass down, fold it over and rotate it, thirty to forty firm, rhythmic pushes; the circle method rolls the cone under the heel of one hand. Wedging evens the moisture, aligns the plate-like particles and — most importantly — expels trapped air pockets that would expand and burst the ware in the kiln. Store every wedge in a sealed plastic bag; clay that dries at its edges on the bench is ruined clay.",
          "bulletPoints": [
            "Dig below the topsoil, 0.5–1 m down, and reject any seam full of roots.",
            "Dry, crush to bean-sized crumbs, then slake and sieve through 60–80 mesh.",
            "Dry the paste on canvas or plaster to working consistency, never by forced heat.",
            "Wedge 30–40 pushes until the cut face shows no air holes.",
            "Bag every wedge between lessons; surface-dried clay cracks the next piece."
          ],
          "keyTakeaway": "Processing turns mud into a material: levigation buys purity, wedging buys uniformity, and both are cheaper than a ruined pot.",
          "realWorldExample": "A Visual Arts class near the Shai Hills digs a bucket-load from a roadside cutting, sieves it through old mosquito netting, and wedges it in forty-push batches — the same sequence the Ago-Youve potters run at their family dig sites."
        }
      ],
      "commonMistakes": [
        "Careless wedging: ten lazy presses leave air pockets and damp patches, and a trapped bubble expands in the fire and bursts the pot. Wedge 30–40 firm pushes until the cut face is hole-free.",
        "Judging a clay by colour alone: a bright red bank may hide lime particles that blow up in the fire. Always run the coil test and a fired test bar before committing a project to the body.",
        "Pouring water onto stiff bench clay to soften it: the outside becomes a slime over a hard core, the two dry at different rates, and the wall cracks along the invisible boundary. Crumble, mist and bag it overnight instead.",
        "Sieving a local clay but skipping wedging, so the paste carries pockets of dense and loose material; the finished pot breaks along the weakest layer at the first knock.",
        "Rolling the test coil by squeezing it like bread dough instead of drawing a uniform 6 mm rope — the result then shows the moisture of your hands, not the plasticity of the clay."
      ],
      "wassceExamTips": [
        "Paper 1 asks single-line facts: for \"State the temperature range at which earthenware matures\", write 1000–1150 °C exactly — a vague \"low temperature\" scores nothing.",
        "In Paper 2, when a brief calls for a water storage vessel fired locally, choose earthenware clay and justify it with the porosity and firing range; mark is awarded for material decisions tied to function.",
        "Paper 3 practical: markers watch how you handle material. Open your bag, wedge on the bench and test before building; students who build straight from a stiff lump lose the handling-of-materials mark.",
        "When asked to \"describe three tests of clay quality\", give the name, the procedure and the pass condition for each — coil, pinch-slab and ribbon — one mark each for a complete answer.",
        "Definitions score on exact words: plasticity is \"the ability of wet clay to be shaped under pressure and to retain that shape when the pressure is released\"."
      ],
      "summaryChecklist": [
        "Can I name five clay families and state the range at which each matures?",
        "Can I define plasticity, shrinkage and porosity with typical earthenware values?",
        "Can I run the coil, pinch-slab, ribbon and shrink-bar tests and report a verdict?",
        "Can I take a riverbank dig through drying, crushing, levigation to a wedged, usable body?",
        "Can I explain why grog cuts shrinkage and improves thermal-shock resistance?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-clay-1",
        "title": "Testing the plasticity and shrinkage of a local clay",
        "problem": "A student digs clay behind the school block at Kumasi and must decide whether it is plastic enough for coil building and exactly how much it shrinks on drying. Write out the test procedure and the result.",
        "stepByStepSolution": [
          "Step 1 (M1): Condition the clay in the hands for two minutes until the moisture is uniform, then roll a coil of even 6 mm thickness along the bench.",
          "Step 2 (M1): Wrap the coil around a 25 mm dowel and look closely at the outer face of the bend.",
          "Step 3 (A1): No visible cracking means the clay is plastic enough for hand-building; cracking at this small radius means blending in ball clay or grog and repeating the test.",
          "Step 4 (M1): Roll a straight bar 200 mm long, scratch a 100 mm gauge line along it, and record its wet measurement.",
          "Step 5 (M1): Dry the bar slowly under cloth for three days so the drying itself cannot crack the test.",
          "Step 6 (A1): Re-measure the gauge line: if it reads 94 mm, drying shrinkage is 6 divided by 100, which is 6 per cent — a normal figure — and all future work is planned 6 per cent oversized."
        ],
        "keyTakeaway": "Clay decisions come from measured tests, not from looks: one coil and one shrink bar answer both questions."
      },
      {
        "id": "ex-ce-clay-2",
        "title": "Levigating and wedging a riverbank clay",
        "problem": "The class has dug 15 kg of clay full of roots and grit from a bank near the Shai Hills. Show how to turn it into a clean, workable body.",
        "stepByStepSolution": [
          "Step 1 (M1): Dry the dug clay completely on boards, then crush it to crumbs no larger than 10 mm.",
          "Step 2 (M1): Slake the crumbs in a bucket of water, stir to a soup, and strain the slurry through a 60–80 mesh sieve into a clean vessel.",
          "Step 3 (M1): Let the sieved slip settle, pour off the clear water on top, and transfer the thick paste onto canvas or a plaster bat to draw out moisture.",
          "Step 4 (A1): Stop drying when the paste leaves a clean thumbprint without sticking to the fingers — working consistency, with no slime layer.",
          "Step 5 (M1): Wedge by the ram's head method, cutting the mass in half and restacking with every push, for 30–40 firm strokes.",
          "Step 6 (A1): The cut face then shows no air holes and one even colour: the body is conditioned, bagged, and fit for building."
        ],
        "keyTakeaway": "Levigation buys purity and wedging buys uniformity; a pot needs both before it is worth building."
      }
    ],
    "quiz": {
      "id": "quiz-clay-types-testing",
      "topicId": "shs1-ce-t1-clay-types-properties-testing",
      "title": "Clay Types and Testing Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-clay-1",
          "quizId": "quiz-clay-types-testing",
          "questionText": "A potter in the Volta Region will build large water-storage pots fired in an open wood pile that peaks near 1000–1100 °C. Which clay body suits this work?",
          "optionA": "China clay (kaolin)",
          "optionB": "Porcelain ball-clay blend",
          "optionC": "Earthenware clay",
          "optionD": "Fireclay",
          "correctOption": "C",
          "subConcept": "Clay types",
          "explanation": "Earthenware matures around 1000–1150 °C, exactly the open-pile range, and its slight porosity keeps stored water cool. Kaolin and porcelain bodies need roughly 1300 °C and above, so they would stay raw and crumbly at pile temperatures, while fireclay is made for kiln furniture rather than ware.",
          "remediationTip": "Sort the clay families by maturing temperature first, then decide what each is used for."
        },
        {
          "id": "q-ce-clay-2",
          "quizId": "quiz-clay-types-testing",
          "questionText": "Which statement correctly defines the plasticity of clay?",
          "optionA": "It is the ability to be shaped under pressure and to hold that shape when the pressure is released.",
          "optionB": "It is the ability of clay to change colour during firing.",
          "optionC": "It is the amount a pot shrinks while drying.",
          "optionD": "It is the hardness a pot reaches after firing.",
          "correctOption": "A",
          "subConcept": "Properties of clay",
          "explanation": "Plasticity describes the wet, workable state only; the water film between plate-like particles lets them slide and lock. Options B, C and D name firing colour, drying shrinkage and fired strength — real properties, but not plasticity.",
          "remediationTip": "Define each property in the state it belongs to: plasticity is about wet clay, porosity about fired clay."
        },
        {
          "id": "q-ce-clay-3",
          "quizId": "quiz-clay-types-testing",
          "questionText": "Levigation of clay is best described as which process?",
          "optionA": "Firing a small test bar to judge the colour of the body.",
          "optionB": "Kneading stiff clay on the bench until it softens.",
          "optionC": "Drying dug clay in full sun to speed preparation.",
          "optionD": "Soaking crumbled clay in water and straining it through a fine mesh to remove grit and roots.",
          "correctOption": "D",
          "subConcept": "Processing local clay",
          "explanation": "Levigation purifies by suspension: the clay is carried through a 60–80 mesh sieve in water while grit and vegetation stay behind. Wedging (option B) conditions clay but adds nothing to its purity, and drying choices in options A and C describe other steps entirely.",
          "remediationTip": "Link each preparation word to its job: levigation cleans, wedging conditions, testing judges."
        },
        {
          "id": "q-ce-clay-4",
          "quizId": "quiz-clay-types-testing",
          "questionText": "In the coil test, a clay is judged to be well plastic when a coil of even 6 mm thickness does which of the following?",
          "optionA": "Cracks at once when bent double by hand.",
          "optionB": "Wraps around a 25 mm dowel without visible cracking.",
          "optionC": "Melts when pressed with a warm finger.",
          "optionD": "Dries to a white colour overnight.",
          "correctOption": "B",
          "subConcept": "Field testing",
          "explanation": "The test is the bend: a body that stretches around a 25 mm dowel unmarked has the particle structure coiling needs. Immediate cracking rejects the clay, while drying colour says nothing about plasticity.",
          "remediationTip": "Remember the numbers of the coil test — a 6 mm coil, a 25 mm dowel, and a search for cracks."
        },
        {
          "id": "q-ce-clay-5",
          "quizId": "quiz-clay-types-testing",
          "questionText": "A 100 mm gauge line scratched on a wet test bar measures 94 mm after slow drying. What is the drying shrinkage of the clay?",
          "optionA": "1.5 per cent",
          "optionB": "4 per cent",
          "optionC": "6 per cent",
          "optionD": "94 per cent",
          "correctOption": "C",
          "subConcept": "Shrinkage measurement",
          "explanation": "The line moved 6 mm from a starting length of 100 mm, so shrinkage is 6 divided by 100, which equals 6 per cent. Option B takes the wrong end of the measurement, and option D mistakes the remaining length for the shrinkage.",
          "remediationTip": "Always divide the change in length by the original wet length, never by the dried reading."
        }
      ]
    }
  },
  {
    "id": "shs1-ce-t1-hand-building-pinch-coil-slab",
    "subjectId": "ceramics",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Hand-Building: Pinch, Coil and Slab",
    "description": "Pinch, coil and slab are the three ways of forming hollow ware without a wheel. This lesson teaches pinch-pot wall control, coil rolling and blending, score-and-slip joining, slab thickness guides and mould forming, and the making of rims, handles and leather-hard trimming.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• The pinch pot starts from a freshly wedged fist-sized ball; press the thumb into the centre leaving the floor about 8 mm thick, then thin the wall in even passes working upward and save the rim for the last pass.\n• Rotate the pot in one hand while the other pinches — the turning hand is the wheel; finish walls at 6–8 mm and keep the rim never thinner than the wall.\n• Pinching outward from the rim first stretches the weakest part and splits the edge; the crack always starts where the clay was thinned too early.\n• Coil vessels are built on a bat: a base slab about 10 mm thick, then coils rolled to uniform 8–10 mm from an even clay sausage.\n• Coils may be laid as separate rings or as one continuous spiral; every ring must be welded to the one below while both are still damp.\n• Scoring means cross-hatching both joining surfaces with a needle tool or serrated rib; slipping means painting on liquid clay so the joint fuses rather than merely sticking.\n• Blending runs inside-and-down and outside-and-up with a wooden rib: compression drives the slip into the wall and prevents the join-line crack.\n• Slabs are rolled between thickness guides — two parallel dowels or wood strips of the target gauge, usually 6–10 mm — so the whole sheet dries at one rate.\n• Roll slabs on canvas or ridgeboard, never on bare board: a stuck slab is stretched as it is lifted, and stretched clay cracks along the pull.\n• Hump moulds (solid formers) drape a slab into dishes; flat moulds of plaster or sealed plywood press floors and shallow bowls.\n• Slab boxes join at mitred 45-degree corners for a flat, strong seam, and walls are supported until the box stands on its own at leather-hard.\n• Handles are pulled on a bat to an even 15 mm near the shoulder, bent to shape while plastic, and attached at the leather-hard stage so handle and pot shrink together.\n• Rims are levelled at leather-hard with a damp sponge held inside and outside; leather-hard trimming with a loop tool gives a clean foot ring and an even wall.",
    "detailedNotes": {
      "overview": "Hand-building is the complete set of techniques that turn a wedged lump into hollow ware using only the hands, simple tools and moulds. This lesson covers the pinch method and its wall discipline, the coil method with scoring, slipping and blending, slab work with thickness guides and moulds, and the finishing skills of joining, rims, handles and leather-hard trimming. In the Ghanaian tradition almost every traditional pot was hand-built, and in the workroom the methods carry both everyday ware and sculptural forms.",
      "introduction": "A wheel cylinder is won or lost in the first minute; a hand-built pot is won or lost at every join. That is why hand-building rewards patience and punishes shortcuts: coils left unwelded, slabs lifted off boards, handles stuck on dry clay all produce pots that look finished and then split on the drying shelf. The three methods share one law — even thickness, fused joins, slow even drying — and each method is drilled here with the measurements that make the law practical.",
      "realWorldContext": "The great utilitarian pots of Ghana were never thrown: at Ago-Youve near Adome the female potters build water jars coil on coil, turning the growing pot on a flat stone, and paddle the outside walls to compress the joins — the same welding action taught in this lesson. Slab technique enters a school studio at Cape Coast through tiles and box-like forms, and pinch work is the first vocabulary every ceramics class meets, from the offering bowls of a church fête stall to the small pots sold near the Osu night market.",
      "objectives": [
        "Form a pinch pot with even 6–8 mm walls and an unsplit rim.",
        "Build a coil vessel at least 15 cm tall in which every join is welded and compressed.",
        "Demonstrate scoring and slipping correctly before joining two clay surfaces.",
        "Roll a slab of even gauge using thickness guides and form it over a hump mould.",
        "Attach a pulled handle at the right stage and trim a foot ring at leather-hard."
      ],
      "sections": [
        {
          "title": "The pinch method: wall control first",
          "content": "A pinch pot begins as a ball of freshly wedged clay the size of a fist; clay that has sat on the bench all week tears instead of stretching. Press the thumb into the centre and leave the floor about 8 mm thick, then thin the wall by pinching between thumb and fingers in even passes that travel upward around the pot, turning it in the free hand as it rises. The direction of the passes is the rule that saves the rim: work from the floor upward and give the rim only the last, lightest pass, because pinching outward from the rim stretches the weakest, thinnest part first and a split appears at the edge. The finished wall should measure 6–8 mm throughout, the floor slightly thicker, and the rim slightly thicker than the wall so it resists tearing. Roll the rim over a wetted finger at the end to close the surface; any lumpiness you can feel with closed eyes will be visible in the fired pot.",
          "bulletPoints": [
            "Freshly wedged fist-sized ball; bench-stale clay tears at the first pinch.",
            "Floor about 8 mm, walls 6–8 mm; check by holding the pot to window light.",
            "One hand turns, the other pinches — the turning hand is the wheel.",
            "Work from the floor upward; the rim gets the last, lightest pass.",
            "A damp finger, not a dry one, closes the surface without dragging it."
          ],
          "keyTakeaway": "Pinch skill is wall-thickness skill: an even wall dries evenly and survives the fire.",
          "realWorldExample": "An SHS 1 student at Cape Coast makes a set of small pinch bowls for the school harvest display and rejects every pot whose wall shows thumb-marks of different depth when held against the light."
        },
        {
          "title": "Coil building: rolling, welding and blending",
          "content": "Coil work is the royal road of African pottery, and the studio method follows the same discipline as the family workshop at Ago-Youve. Roll each coil from an even clay sausage with flat, centred pressure so the rope holds one thickness, usually 8–10 mm; a fat section dries slowly beside a thin one and the wall splits at the thin point. Lay the first ring on a scored and slipped base slab about 10 mm thick, then stack the wall either as separate rings or as one long spiral. Before a ring loses its dampness, weld it to the ring below: press the inside thumb against the coil while the outside fingers push up, squeezing the two bodies into a single wall while the pot turns on the bat. Then blend and compress with the wooden rib, strokes running inside-and-down and outside-and-up, so the slip is worked into the wall instead of painted on its surface as a cosmetic band. Build in stages no taller than the clay can carry; a soft wall three coils past its strength slumps and the whole vessel records the failure.",
          "bulletPoints": [
            "Even pressure from the centre of the sausage outward gives a uniform 8–10 mm coil.",
            "Score, slip, weld, blend: a ring skipped at the welding stage is a crack held in reserve.",
            "Compress inside and outside; a join you can still feel through the wall is not blended.",
            "Keep walls between 7 and 9 mm as the pot rises, checking with a needle gauged in mm.",
            "Stop building while the base can still carry the height; rest under loose cloth."
          ],
          "keyTakeaway": "Strength in a coil pot lives at the joins; welding and compressing while the clay is soft is where the marks are won.",
          "realWorldExample": "Potters around Adome paddle each coil ring with a shaped wooden board as they build a water jar, which is exactly the compression step — the paddled wall also records the comb pattern that identifies the family workshop."
        },
        {
          "title": "Slab work: guides, moulds and mitred corners",
          "content": "Slab building converts flat clay into tiles, dishes and box forms, and its one foundation is even thickness. Lay two dowels or wood strips of the target gauge parallel on the bench and roll the clay between them, a quarter turn after every pass, until the roller rides over the guides: the slab then tells you its own thickness and dries at one rate. Always roll on canvas or ridgeboard, because a slab lifted off a bare board is silently stretched, and stretched clay opens a crack along the pull as it dries. Cut with a very sharp knife against a template; a dull blade smears and glazes the edge, sealing a surface that nothing will bond to afterwards. Form slabs over hump moulds — solid formers of plaster, wood or clay — to make dishes, or press them into flat moulds for floors and shallow bowls, letting the clay stiffen against the form before lifting. Where two slab walls meet, cut both at 45 degrees so the corner closes as a flat, pressed seam; score, slip and pinch the mitre with a rib, then support the box until it stands at leather-hard.",
          "bulletPoints": [
            "Thickness guides: 6 mm for tiles, 8–10 mm for vessel walls; the roller rides the guides.",
            "Roll outward from the centre, quarter-turning the slab so it stays square.",
            "Canvas or ridgeboard under every slab; never lift a stuck slab, free it with wire.",
            "One sharp blade pass beats three dragging ones; keep the knife honed.",
            "Mitred 45-degree corners, scored, slipped and pressed flat with a rib."
          ],
          "keyTakeaway": "A slab carries its making into the fire: stretched, stuck or uneven slabs crack no matter how good the design is.",
          "realWorldExample": "The class tiles a school-feature wall at Ho: every slab is rolled between 6 mm dowel guides on canvas strips, cut with a honed blade, and the tiles lie flat on the drying shelf instead of cupping."
        },
        {
          "title": "Joining, rims, handles and leather-hard finishing",
          "content": "Every hand-built pot dies at a join or lives at one, so the score-and-slip ritual is repeated for bases, walls, handles and spouts: cross-hatch both faces until raw clay shows, coat both with slip, press them together and work the seam outward with a rib until the two pieces read as one. Handles are pulled from a slab kept plastic at about 15 mm at the shoulder, drawn along the edge of a bat to round and taper them, bent to their final curve against the pot and supported while they stiffen; attach them at the leather-hard stage, when pot and handle hold the same moisture and shrink together, and a join made there survives the boiling-water test a mug must later pass. Rims are levelled when the pot is leather-hard: a damp sponge pressed inside and outside while the pot turns leaves an edge that pours cleanly. At the same stage a loop tool trims a foot ring: the pot is centred upside down, the blade takes the high spots, and the trimmed foot lifts the ware from every surface it sits on and gives a line no marker forgets.",
          "bulletPoints": [
            "Score until fresh clay shows, slip both faces, press, then blend outward across the seam.",
            "Pull handles plastic, attach leather-hard, support them while they dry.",
            "Handle position is planned and marked before the first cut; a set of mugs handles line up.",
            "Level the rim with a damp sponge on the turning pot at leather-hard.",
            "Trim the foot ring at leather-hard with a loop tool; save the trimmings for slip."
          ],
          "keyTakeaway": "Matching stages — plastic to plastic, leather-hard to leather-hard — is what makes a join permanent.",
          "realWorldExample": "A student at Winneba makes six mugs for a hotel-ware project; the handles are pulled in one session, hung on the shelf to leather-hard, then attached in one marked position on each mug so a buyer sees six identical silhouettes."
        }
      ],
      "commonMistakes": [
        "Blending a coil seam on the outside only: the wall looks finished but carries an unwelded line inside, and the pot splits at that ring on the drying shelf. Blend inside-and-down and outside-and-up until no line is feelable.",
        "Attaching a bone-dry handle to a wet pot, or a wet handle to a bone-dry pot: the two shrink at different rates and the join tears open. Meet at leather-hard.",
        "Rolling a slab without guides: the wall is thick beside a rim, thin in the middle, and the thick zone stays damp overnight while the thin zone stiffens — cracking follows the boundary. Use dowel guides every time.",
        "Prying a stuck slab off a board: the lift stretches the clay invisibly and the hidden stretch cracks later along a line that looks unrelated to any joint. Roll on canvas and free the edge with a wire.",
        "Working with a dull trimming blade and dragging it through leather-hard clay, tearing the foot instead of shaving it; a dull loop tool also skids into the wall. Hone the blade and let the tool do the work."
      ],
      "wassceExamTips": [
        "Paper 1 names tools and terms: know score, slip, blend, compress, hump mould and slab, and the stage at which each is used — one-line definitions are one mark each.",
        "In Paper 2, choose the forming method to match the brief and defend it: a coil for a tall round jar, slabs for a box or a sheet-like form, pinch for a small round pot; the method-to-form argument carries the planning mark.",
        "Paper 3 practical examiners award handling-of-materials marks for visible welding: score, slip and compress each join while the marker can see it, and keep the work surface clean at every stage.",
        "Budget your practical hours: building must be complete with trimming, rim and handle work done at least a full drying day before the firing window the centre announces; late joins are the commonest cause of failed entries.",
        "Finish counts: a fired entry is judged for presentation — levelled rim, trimmed foot, clean foot underside and a piece that sits without rocking earn the finish marks."
      ],
      "summaryChecklist": [
        "Can I pinch a pot to even 6–8 mm walls without splitting the rim?",
        "Can I build a coil jar of welded, compressed joins at least 15 cm tall?",
        "Can I score and slip two surfaces so their join survives drying and firing?",
        "Can I roll a slab to one gauge between guides and form it over a hump mould?",
        "Can I pull, attach and support a handle at the leather-hard stage and trim a foot ring?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-hand-1",
        "title": "Building a coiled storage jar",
        "problem": "Make a coil jar about 18 cm tall and 12 cm wide that can hold water, with every join welded. Write the building procedure in order.",
        "stepByStepSolution": [
          "Step 1 (M1): Wedge the clay, roll a ball, pat it to a slab about 10 mm thick between guides, and cut a circular base slightly wider than the planned jar; set it on a bat.",
          "Step 2 (M1): Roll coils of even 8–10 mm thickness from an even sausage; score and slip the rim of the base and lay the first ring around the edge.",
          "Step 3 (M1): Weld every new ring to the one below before it dries: inside thumb against the coil, outside fingers pushing up, while the pot turns on the bat.",
          "Step 4 (A1): Blend and compress the wall inside-and-down and outside-and-up with a wooden rib until no join line can be felt through the wall.",
          "Step 5 (M1): Build the shoulder by laying each coil a shade inward from the ring below, keep the wall at 7–9 mm, and join on a scored, slipped lid seat while the clay is soft.",
          "Step 6 (A1): At leather-hard, level the rim with a damp sponge, trim a foot ring with a loop tool, and sign the underside with a needle tool; the wall tests even when tapped and no join line shows inside."
        ],
        "keyTakeaway": "A coiled pot is strong only where its coils were welded and compressed while soft — not where slip was painted over a hardened ring."
      },
      {
        "id": "ex-ce-hand-2",
        "title": "Pulling and attaching a slab handle to a mug",
        "problem": "A mug at leather-hard must receive a pulled slab handle strong enough to lift it when full. Show the making and fixing procedure.",
        "stepByStepSolution": [
          "Step 1 (M1): Roll a fresh slab of the same body to 15 mm between guides and cut a tapered strip about 30 mm wide at the shoulder.",
          "Step 2 (M1): Pull the strip along the edge of a bat, drawing it down evenly until it rounds to a comfortable grip that thickens toward the top.",
          "Step 3 (A1): Bend the pulled handle to its final curve and rest it against the mug so it dries into the exact shape it must hold.",
          "Step 4 (M1): Mark the two fixing points on the mug, score both points and the ends of the handle until fresh clay shows, and coat every face with slip.",
          "Step 5 (M1): Press the handle on and work the clay outward along both ends with a rib, blending each terminal into the wall.",
          "Step 6 (A1): After drying, the joint is fully fused with no gap and no pooled slip, and the handle carries the weight of a full mug without stretching."
        ],
        "keyTakeaway": "Handle, pot and wall must meet at the same stage of hardness — leather-hard is the joining stage."
      }
    ],
    "quiz": {
      "id": "quiz-hand-building-pinch-coil-slab",
      "topicId": "shs1-ce-t1-hand-building-pinch-coil-slab",
      "title": "Hand-Building Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-hand-1",
          "quizId": "quiz-hand-building-pinch-coil-slab",
          "questionText": "Why must the wall of a hand-built pot be kept to an even thickness?",
          "optionA": "It saves clay and lowers the cost of the piece.",
          "optionB": "It prevents one part drying and shrinking faster than another and cracking the pot.",
          "optionC": "It makes the pot heavier for better stability.",
          "optionD": "It lets more glaze sit on the surface.",
          "correctOption": "B",
          "subConcept": "Wall control",
          "explanation": "Thick zones stay damp while thin zones stiffen; the unequal shrinkage tears the wall along the boundary. Cost, weight and glaze volume are side effects, not the reason.",
          "remediationTip": "Trace the drying path in your head: find the thickest part of a wall and ask what it will pull on as it dries."
        },
        {
          "id": "q-ce-hand-2",
          "quizId": "quiz-hand-building-pinch-coil-slab",
          "questionText": "In ceramics, the phrase score and slip means which procedure?",
          "optionA": "Dust both surfaces with grog and squeeze them hard together.",
          "optionB": "Draw the design outline with a needle before joining.",
          "optionC": "Wet both surfaces with clean water only, then press them.",
          "optionD": "Cross-hatch both surfaces with a needle tool and coat them with liquid clay before joining.",
          "correctOption": "D",
          "subConcept": "Joining",
          "explanation": "Scoring opens the surfaces to fresh clay and slipping gives the joint clay-to-clay fusion, not just stickiness. Water alone (option C) leaves a slick that dries weak, and grog only abrades without bonding.",
          "remediationTip": "Always ask what the joint is made of: a strong join needs clay, not just water or glue."
        },
        {
          "id": "q-ce-hand-3",
          "quizId": "quiz-hand-building-pinch-coil-slab",
          "questionText": "What is the surest way to roll a slab of even 8 mm thickness?",
          "optionA": "Lay two 8 mm dowel guides parallel and roll the clay between them.",
          "optionB": "Count the roller passes and stop at eight.",
          "optionC": "Press the slab with the palms until it feels right.",
          "optionD": "Roll the slab thin, then fold the edges to double the middle.",
          "correctOption": "A",
          "subConcept": "Slab technique",
          "explanation": "The guides make the thickness physical: the roller rides over the dowels and cannot cut lower, so the whole sheet holds one gauge. Guesswork by feel or counting passes leaves thick and thin zones that crack on drying.",
          "remediationTip": "Remember: guides set the gauge, the roller only obeys the guides."
        },
        {
          "id": "q-ce-hand-4",
          "quizId": "quiz-hand-building-pinch-coil-slab",
          "questionText": "At which stage should a pulled slab handle be attached to a mug?",
          "optionA": "Slip stage.",
          "optionB": "Bone-dry stage.",
          "optionC": "Leather-hard stage.",
          "optionD": "After bisque firing.",
          "correctOption": "C",
          "subConcept": "Joining stages",
          "explanation": "At leather-hard the handle and the pot hold the same moisture and shrink together, fusing without strain. A bone-dry handle cannot be welded, and a slip-stage handle slumps; glazing later cannot repair an open join.",
          "remediationTip": "Match hardness before joining — if the two parts feel the same to the knuckle, they will dry the same."
        },
        {
          "id": "q-ce-hand-5",
          "quizId": "quiz-hand-building-pinch-coil-slab",
          "questionText": "A beginner's pinch pot most often splits at the rim because the student did which of the following?",
          "optionA": "Turned the pot too slowly while pinching.",
          "optionB": "Thinned the rim first by working outward from the edge, before the wall was even.",
          "optionC": "Left the floor thicker than the wall.",
          "optionD": "Started from a freshly wedged ball.",
          "correctOption": "B",
          "subConcept": "Pinch discipline",
          "explanation": "The rim is the weakest, most stretched zone, so pinching outward from it first tears the edge; the rim must receive only the last, lightest pass. A slightly thick floor protects the pot, and a fresh ball prevents tearing.",
          "remediationTip": "Say the rule aloud while practising: floor upward, rim last."
        }
      ]
    }
  },
  {
    "id": "shs1-ce-t2-surface-decoration",
    "subjectId": "ceramics",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 3,
    "title": "Ceramic Surface Decoration",
    "description": "Decoration turns a formed pot into a designed surface. This lesson covers incising and impressing at the right stage, coloured slips and slip trailing, sgraffito, burnishing and inlay, and the composition of a decorated pot drawing on Ghanaian potting motifs.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Decoration follows the clay stages: soft clay takes impressions, leather-hard clay takes clean cut lines, dry or bisque ware takes slips and underglazes — work with the stage, never against it.\n• Incising cuts design lines into leather-hard clay with a needle tool, knife or loop tool at about 1–2 mm depth so the line still reads after glazing.\n• Impressing presses pattern into damp clay: combs, cord, netting, carved wooden stamps and shells; dust the tool with grog or rub it with slip so it releases cleanly.\n• Applied relief fixes coils, pellets, pads or cut-slabs to the wall, always scored and slipped and pressed home so the decoration is structural, not stuck on.\n• Coloured slips are liquid clay tinted with metal oxides: 2–6 per cent red iron oxide for reds and browns, 0.5–1 per cent cobalt carbonate for blue, manganese dioxide for chocolate and black.\n• Slip should be the consistency of thin cream with a binder; slip laid on dusty, slick or greasy ware dries and flakes off in sheets.\n• Sgraffito cuts a design through a dried layer of contrasting slip down to the body, worked at the firm leather-hard to bone-dry stage with a sgraffito needle or loop tool.\n• Burnishing polishes a dense, fine clay at the leather-hard stage with a smooth hard tool — the back of a spoon, a polished stone — using a little soap and water; the shine comes from flattening the surface, not from adding anything to it.\n• Slip trailing draws liquid clay from a bulb or squeeze bottle into lines, dots and lattices; the trailed line should stand proud like a rope, not flood into a puddle.\n• Inlay cuts a pattern through the surface of leather-hard ware, presses a contrasting clay into the groove, then scrapes it flush and blends — the classic nacreous or mocha-inlay method.\n• Traditional Ghanaian pots carry pattern in bands: comb impressions, cord-rolling with a wrapped paddle, notched rims and incised lattice from Ago-Youve and the Navrongo potting traditions.\n• Decoration must never weaken the wall: deep cuts near the base or relief blobs inside a water vessel create failure points that open in use.\n• Test every new slip, oxide percentage or layering on a tile fired to the same temperature — colour moves in the fire and an untested recipe is a guess.",
    "detailedNotes": {
      "overview": "Surface decoration is the design layer of ceramics: cutting into clay, pressing pattern onto it, covering it with coloured slips, and revealing one layer through another. This lesson groups the techniques by clay stage, gives working recipes and consistencies for slips and oxides, and drills sgraffito, burnishing, trailing and inlay to clean, fire-fast results. The compositional eye is trained on Ghanaian sources — banded comb work, cord impressions and adinkra-inspired geometry — so decoration reads as design rather than filler.",
      "introduction": "A decorated pot answers three questions: was the technique right for the stage of the clay, is the design composed across the form, and will the surface survive glaze and firing. Most beginner failures are stage errors — impressing on bone-dry clay that powder at the pressure point, or incising wet clay that closes its own cut. The second family of failures is chemistry: colour added without testing, or laid on a dirty surface. This lesson treats both as craft knowledge with exact numbers and habits, not luck.",
      "realWorldContext": "Ghanaian potting traditions already teach the whole syllabus: at Ago-Youve near Adome the water pots carry combed bands and cord-rolled zones beaten into the damp wall as the pot rises, and the Kasselem-style surfaces recall the geometric restraint of Navrongo. Around Kumasi the carved calabash stamps and adinkra symbols — Gye Nyame, Dwennimmen, Nsoromma — give ceramics students a ready vocabulary of motifs with meaning attached, and market ware for hotels at Elmina sells best precisely because its banding is crisp and tested.",
      "objectives": [
        "Match each decoration technique to the correct clay stage and justify the choice.",
        "Mix a coloured slip to a working recipe with the right oxide percentage and consistency.",
        "Cut a clean sgraffito design through dried slip at the leather-hard stage.",
        "Burnish a dense clay to a real sheen and explain what the process does to the surface.",
        "Compose banded decoration on a pot using at least one Ghanaian motif source."
      ],
      "sections": [
        {
          "title": "Cutting and pressing: incising and impressing",
          "content": "Cut work and press work are opposites that share one requirement: the clay must be firm enough to hold an edge yet soft enough to part cleanly, which is the leather-hard window for incising and the damp stage for impressing. Incise with a needle tool, a potter's knife or a loop tool at 1–2 mm depth; a shallow cut vanishes under glaze, a deep cut is a scar that concentrates stress near the base. Keep the tool sharp and the stroke confident — a hesitant line jags, and a jagged line cannot be redrawn in clay. Impressing covers every technique that pushes pattern into the surface: a toothed comb dragged to give the classic band, cord wrapped around a paddle and beaten against the wall, netting, shells, carved stamps. Dust or slip the tool first so it releases, press at even pressure around the pot, and plan the band horizontally by marking a guide line with a thread dipped in slip. Both techniques gain power from rhythm: repeated units, even spacing, one dominant band and one supporting band rather than pattern smeared everywhere.",
          "bulletPoints": [
            "Incise at leather-hard, 1–2 mm deep; wet clay closes its own cuts, dry clay chips.",
            "Impress at the damp stage with a dusted or slipped tool so the pattern releases whole.",
            "Mark horizontal banding guides with a slip-dipped thread before cutting.",
            "Comb bands, cord-roller marks and notched rims are the classic Ghanaian vocabulary.",
            "Plan one dominant and one subordinate band; decoration all over is decoration nowhere."
          ],
          "keyTakeaway": "The stage decides the technique: press while damp, cut at leather-hard, and the clay will keep whatever design you commit to it.",
          "realWorldExample": "A class project echoing Ago-Youve ware bands a jar with a toothed comb at the damp-leather stage and beats a cord-wrapped paddle around the belly, leaving the join-line rhythm the traditional pots are known for."
        },
        {
          "title": "Working with slips: colouring, trailing and covering",
          "content": "Slip is clay in water, and it is the paint of the ceramic surface before glazes ever touch the pot. A dipping and trailing slip is thinned to the consistency of pouring cream and passed through a sieve; colour comes from metal oxides weighed into the bucket, not thrown in by eye — 2–6 per cent red iron oxide gives ochre through rust to brown depending on the body and the fire, 0.5–1 per cent cobalt carbonate gives blue (it is powerful: a heavy hand runs the whole tile dark), and manganese dioxide gives chocolate browns and near-blacks. Application methods each have their own discipline: dipping covers a whole form in seconds but must be a single confident dunk or a double-dip, painting needs two or three coats at right angles for fullness, trailing lifts lines of coloured slip off the bottle into ropes and dots that stand proud of the surface, and pouring or dripping lets bands run where gravity takes them. Because slip shrinks harder than bare clay, lay it on clean, scored or at least porous surfaces; on a slick or dusty wall it dries in a skin that flakes off at the first knock.",
          "bulletPoints": [
            "Weigh oxides: iron 2–6 per cent, cobalt 0.5–1 per cent, manganese for brown-black.",
            "Slip for dipping and trailing is pouring-cream thin and sieve-smooth.",
            "Dip decisively; paint in cross coats; trail with the bottle nearly touching the clay.",
            "Clean, damp or scored ware takes slip; slick or dusty ware sheds it as it dries.",
            "Trailing that floods is too thin; trailing that breaks is too stiff — adjust with slip, not hope."
          ],
          "keyTakeaway": "Slip colour is measured chemistry and slip application is body mechanics: weigh the oxide, thin the bucket, commit the hand.",
          "realWorldExample": "Students at a studio in Achimota mix a rust iron slip and a pale cobalt slip, dip test tiles side by side and label each with the oxide percentage before firing, so the class records which recipe survives the school kiln."
        },
        {
          "title": "Revealing the body: sgraffito, burnishing and inlay",
          "content": "The cut-away family of decoration works by hiding one layer and exposing another. For sgraffito, cover leather-hard ware with a layer of contrasting slip — often a white slip tinted with about 3 per cent iron oxide over a pale body — let it dry until it holds a fingernail mark, then engrave the design through the slip down to the body with a sgraffito needle or a loop tool, sweeping the cut waste away with a dry soft brush rather than smearing it back. Burnishing belongs to dense, fine clay at the hard leather stage: the surface is compressed with a smooth, hard tool — the back of a spoon, a polished pebble, hard plastic — with a whisper of soap and water to reduce drag, and repeated strokes raise a metallic sheen that is pure physics, flattened particles reflecting light, with nothing applied. Inlay cuts the opposite way: carve a pattern through the surface to about 2 mm, press a contrasting clay into the grooves, let both dry evenly, then scrape the face flush with a rib so colour appears only inside the lines — the principle behind nacreous and mocha-ware decoration. All three reward a hard, dry, clean stage and punish haste.",
          "bulletPoints": [
            "Sgraffito: cut through dried slip to the body at firm leather-hard; brush waste away dry.",
            "Keep the cut shallow, about 1 mm into the body; engraving deep is cutting the wall thin.",
            "Burnish dense clay at hard leather with a spoon or polished stone and a touch of soap.",
            "Inlay: cut the groove, pack contrasting clay in, scrape flush only when both are firm.",
            "Design first on paper; a sgraffito line cannot be erased, only absorbed."
          ],
          "keyTakeaway": "Layered decoration is about contrast and stage: dry slip over damp body, cut when firm, compress when hard.",
          "realWorldExample": "A candidate designing a WASSCE entry engraves an adinkra-inspired band of Sankofa forms through iron slip on a cream body, so the symbol reads in the clay colour itself before any glaze is applied."
        },
        {
          "title": "Composing decoration on the Ghanaian heritage of the pot",
          "content": "Decoration is design, and design needs a plan. Study the traditional pots of the potters' towns first: their pattern is organised in horizontal zones — a combed band at the neck, a cord-roller belt at the widest belly, a plain breathing space above the foot — so the eye climbs the form in stages instead of drowning in texture. Adopt the same logic: choose one dominant technique and one quiet support, repeat units at an even rhythm, and let the shape of the pot direct the layout, a tall jar asking for bands and a wide bowl for a central medallion. Motif sources from Ghana are rich and disciplined to use: the geometry of kente strips from Bonwire and Agotime, the symbol language of adinkra from Ntono, and the wall-painting triangles of Navrongo, all of which teach stylisation rather than copying. Where a symbol carries cultural meaning, use it with respect and knowledge, the way a weaver names a pattern. Finally, translate the plan onto the pot before cutting: sketch on paper, mark the guides with a slip thread, and keep a test tile of every surface treatment fired to the same temperature so the presentation board shows decisions, not accidents.",
          "bulletPoints": [
            "Zone the pot: neck band, belly belt, foot reserve — the traditional rhythm still works.",
            "One dominant technique plus one quiet support beats five competing treatments.",
            "Draw from kente geometry, adinkra symbols and Navrongo wall motifs with understanding, not copying.",
            "Mark guides on the ware before committing: thread lines, not freehand hope.",
            "Fire a test tile of every treatment and staple it to the project board."
          ],
          "keyTakeaway": "A decorated pot is a composed pot: zones, rhythm and restraint carry the design, and tested surfaces carry the fire.",
          "realWorldExample": "For a culture-day exhibition at a school in Kumasi, students develop jar surfaces from kente strip geometry — measured rectangles repeating in a single belted band — and each design ships with its fired test tile."
        }
      ],
      "commonMistakes": [
        "Laying slip or underglaze on a slick, dusty or greasy pot face: it dries into a skin that flakes off in sheets at the first knock. Wipe with a damp sponge, score if needed, and apply to clean, porous clay.",
        "Incising at the wrong stage: cutting wet clay lets the walls close the line back up; cutting bone-dry clay chips and powders at the edge. The leather-hard window is the only one that holds a crisp cut.",
        "Adding cobalt by eye instead of by weight: at 0.5–1 per cent it is blue, at three times that it runs dark and blooms through glaze. Weigh oxides on the studio scale and write the percentage on the bucket.",
        "Engraving a sgraffito design right through the body: deep cuts thin the wall and concentrate stress, and the pot fails at its own decoration. The cut should barely mark the body under the slip.",
        "Firing a decorated pot without a test tile: colour shifts, trailing floods, and a whole project can be lost to a surprise that a 10 cm tile would have warned about a week earlier."
      ],
      "wassceExamTips": [
        "Paper 1 asks for definitions and distinctions: incising cuts, impressing presses, sgraffito reveals the body through a coating — write the pairings in exactly those terms.",
        "In Paper 2, a decoration plan scores for organisation: show the pot zoned into bands, name one dominant and one supporting treatment, and attach a test tile to the board.",
        "Paper 3 markers award creativity marks for motifs developed from a stated source; note on the board that the banding derives from comb work at Ago-Youve or kente geometry rather than pattern sprinkled at random.",
        "Handling-of-materials marks are lost by smeared surfaces: keep trailing tips clean, brush sgraffito waste away dry, and never drag a cut line twice.",
        "State the stage with every technique in theory answers — sgraffito at leather-hard, burnishing at hard leather, impressing at the damp stage; the stage word usually carries the mark."
      ],
      "summaryChecklist": [
        "Can I match incising, impressing, sgraffito and burnishing to their correct clay stages?",
        "Can I mix and weigh a coloured slip with a working oxide percentage?",
        "Can I engrave a clean sgraffito band through dried slip without cutting the wall?",
        "Can I burnish a dense clay to a sheen and explain the compression behind it?",
        "Can I zone a pot's decoration using a Ghanaian motif source with one dominant band?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-surf-1",
        "title": "A sgraffito band on a leather-hard jar",
        "problem": "A jar must carry a crisp iron-slip band with an engraved geometric design that survives glaze firing. Write out the decoration procedure and the acceptance checks.",
        "stepByStepSolution": [
          "Step 1 (M1): Build the jar and let it stiffen until the wall is cool and firm and a fingernail leaves a mark without dragging — the leather-hard stage.",
          "Step 2 (M1): Mark a horizontal band with a slip-dipped thread, then coat the band evenly with coloured slip (white slip tinted about 3 per cent red iron oxide) and dry it in shade, not sun.",
          "Step 3 (M1): Draw the chosen geometric design on the dry slip, then cut through the slip to the body along the lines with a sgraffito needle at about 1 mm depth.",
          "Step 4 (A1): Brush the cut waste away with a dry soft brush without smearing, so the exposed body reads cleanly against the slip ground.",
          "Step 5 (M1): Keep all tools and hands off the cut band while the jar finishes drying, then bisque-fire it with a test tile of the same slip combination.",
          "Step 6 (A1): After firing the design is sharp, the slip ground is unbroken, the cut has not weakened the wall, and the tile confirms the colour matches the plan."
        ],
        "keyTakeaway": "Sgraffito succeeds on stage discipline: dry slip over firm clay, shallow decisive cuts, and a fired test tile behind every claim."
      },
      {
        "id": "ex-ce-surf-2",
        "title": "Burnishing and impressing a water pot",
        "problem": "A fine, dense earthenware jar is to be burnished to a sheen and given a traditional combed band. Show the working sequence and its quality checks.",
        "stepByStepSolution": [
          "Step 1 (M1): Build the jar from a fine, grog-free body and let it stiffen to the hard leather stage, when the surface holds pressure without shining wet.",
          "Step 2 (M1): Compress the wall first with a wooden rib, then polish it stroke over stroke with the back of a spoon or a polished stone, using a few drops of soap and water to stop drag.",
          "Step 3 (A1): The burnished face takes a metallic sheen in raking light and feels like soft stone; a surface that stays dull was too dry, open or lean to burnish.",
          "Step 4 (M1): While the zone below the sheen is still damp enough to receive pressure, drag a toothed comb around it in one continuous horizontal band, keeping the tool dusted so it releases.",
          "Step 5 (A1): The comb teeth leave an even, unbroken serration of equal depth all round the pot, the band sitting level with the thread line.",
          "Step 6 (M1): Dry the jar slowly under cloth, then bisque-fire it with a test tile of the same clay to check the burnish holds its shine through the fire.",
          "Step 7 (A1): After firing the sheen still reads in raking light and the serrated band is unbroken, proving the compression was done at the correct stage."
        ],
        "keyTakeaway": "Burnishing is stored compression: it must be worked while the clay is hard-leather and damp enough to flatten, never while it is dry."
      }
    ],
    "quiz": {
      "id": "quiz-surface-decoration",
      "topicId": "shs1-ce-t2-surface-decoration",
      "title": "Surface Decoration Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-surf-1",
          "quizId": "quiz-surface-decoration",
          "questionText": "At which stage is a sgraffito design best cut through dried slip?",
          "optionA": "While the clay is still soft and shiny.",
          "optionB": "Immediately after bisque firing.",
          "optionC": "When the pot is bone-dry and powders at the touch.",
          "optionD": "At the firm leather-hard stage, when slip and body are both stiff.",
          "correctOption": "D",
          "subConcept": "Sgraffito",
          "explanation": "Firm leather-hard clay cuts a crisp line without smearing (soft clay) or chipping (bone-dry), and the slip is then dry enough to lift away cleanly. Bisque is far too hard for the needle to mark at all.",
          "remediationTip": "Recite the stage windows: damp for pressing, leather-hard for cutting, dry for laying on colour."
        },
        {
          "id": "q-ce-surf-2",
          "quizId": "quiz-surface-decoration",
          "questionText": "Which oxide is added to slip to obtain a blue colour?",
          "optionA": "Red iron oxide.",
          "optionB": "Manganese dioxide.",
          "optionC": "Cobalt carbonate.",
          "optionD": "Silica flour.",
          "correctOption": "C",
          "subConcept": "Slip colouring",
          "explanation": "Cobalt carbonate gives blue at only 0.5–1 per cent; iron gives reds and browns, manganese chocolate to black, and silica is a glass former rather than a colourant.",
          "remediationTip": "Pair each oxide with its headline colour: iron red, cobalt blue, manganese brown-black."
        },
        {
          "id": "q-ce-surf-3",
          "quizId": "quiz-surface-decoration",
          "questionText": "Burnishing makes a pot shine by which action?",
          "optionA": "Painting a clear wax over the fired surface.",
          "optionB": "Compressing the damp, hard-leather clay with a smooth, hard tool.",
          "optionC": "Spraying the dry pot with water in full sun.",
          "optionD": "Cutting shallow lines across the dried wall.",
          "correctOption": "B",
          "subConcept": "Burnishing",
          "explanation": "The sheen is flattened, aligned surface particles reflecting light, produced by pressure at the hard leather stage on a dense, fine clay. Wax is added afterwards and cuts do not shine.",
          "remediationTip": "Remember: burnishing adds nothing — it presses something flat."
        },
        {
          "id": "q-ce-surf-4",
          "quizId": "quiz-surface-decoration",
          "questionText": "Incising is correctly described as which technique?",
          "optionA": "Cutting design lines into the clay surface with a sharp tool.",
          "optionB": "Pressing pattern into damp clay with a carved stamp.",
          "optionC": "Covering the pot with a layer of coloured slip.",
          "optionD": "Dipping the fired ware into glaze suspension.",
          "correctOption": "A",
          "subConcept": "Cut decoration",
          "explanation": "Incising cuts; option B describes impressing, option C describes slip coating, and option D is glazing. The WASSCE often tests exactly these pairings, so the verbs must stay separate.",
          "remediationTip": "Anchor each verb to a tool: incise with a blade, impress with a stamp."
        },
        {
          "id": "q-ce-surf-5",
          "quizId": "quiz-surface-decoration",
          "questionText": "Why must a new slip colour be fired on a test tile before decorating a finished pot?",
          "optionA": "To practise brush control on a cheap surface.",
          "optionB": "To measure the thickness of the pot wall.",
          "optionC": "To check that the kiln shelf is clean.",
          "optionD": "Because colour shifts in the fire and an untested mix may run, blur or flake off.",
          "correctOption": "D",
          "subConcept": "Testing decoration",
          "explanation": "Oxide colours respond to temperature, body and glaze: iron that read rust on the bucket can fire to a dull brown or run through an overlaying glaze. The tile records the truth the pot will show.",
          "remediationTip": "Adopt the studio habit: no new surface on real ware without its numbered, fired tile."
        }
      ]
    }
  },
  {
    "id": "shs1-ce-t3-drying-firing-safety",
    "subjectId": "ceramics",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 4,
    "title": "Drying, Bisque Firing and Kiln Safety",
    "description": "More pots are ruined between the bench and the kiln than in the building. This lesson traces the drying stages from wet to bone-dry, explains the real causes of cracking, sets out a bisque firing around 900–1000 °C, and lays down kiln-room rules for ventilation, hot surfaces and hygiene.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Clay loses water in a fixed order: the water of plasticity first, then the damp of leather-hard, then only heat can remove the molecular film — physical drying ends at the bone-dry stage.\n• Leather-hard is the working stage: the ware holds shape, is cool to the touch, hard enough to trim and join, and typically carries somewhere under 15 per cent moisture.\n• Bone-dry ware has lost all physical water, is about 5–8 per cent smaller than when wet, and is the most fragile state a pot will ever be in: handle it by the body, never force a warped rim.\n• Dry slowly and evenly: ware rests on a board, loosely tented with cloth or plastic for the first day, then moved to open air, small pots stood upside down so floor and wall dry together.\n• Cracking is differential drying: the surface stiffens while the core still shrinks, and the tear opens at joins, bases, handles and thick patches; uneven walls and sun or wind on damp clay are the usual culprits.\n• Trapped air and laminations from poor wedging expand in the fire and burst ware; clean wedging and compression are cheap insurance before any firing.\n• Bisque firing converts fragile clay into stable, slightly porous ceramic that can be handled, glazed and decorated; school earthenware ware matures in the band of roughly 900–1000 °C, about cones 010 to 06.\n• Steam discipline: begin the firing slowly, around 100 °C per hour up to 200 °C, to drive off residual water gently; packing bone-wet ware and racing the ramp is how kilns lose whole shelves.\n• Fire chemistry in order: residual water leaves by about 200 °C, chemically combined water comes out of the clay structure between roughly 450 and 600 °C while organics burn away, and quartz inverts sharply at 573 °C — so heat and cool slowly through that band.\n• Ventilation is non-negotiable: fuel-burning kilns consume oxygen and emit carbon monoxide and smoke; fire only in a ventilated kiln room or open-air pad with the flue drafting, never inside a closed classroom.\n• Hot-surface discipline: treat every element, shelf and kiln wall as live until the pyrometer reads below 100 °C; use kiln gloves when propping the lid, and keep a taped exclusion line around a firing kiln.\n• Raw-clay hygiene: dust from dry and crushed clay carries respirable silica; wear a mask when crushing and sieving, wash hands before eating, and keep food and drink out of the studio and kiln room.\n• Cooling and unloading: opening a hot kiln into cold air dunts and cracks pots and damages shelves; cool below 100 °C, prop the lid progressively, and inspect bisque ware for rings and hairlines before glazing.",
    "detailedNotes": {
      "overview": "Between the bench and the kiln, a pot passes through its most dangerous states: drying, when uneven shrinkage tears it, and firing, when steam, air pockets and wrong ramps destroy it. This lesson maps the drying stages with their practical tests, explains the causes of cracking and how slow even drying prevents them, sets out a bisque schedule in the 900–1000 °C earthenware band, and fixes the kiln-room rules for ventilation, hot surfaces and clay dust. The Ghanaian studio fires in everything from open wood piles to element kilns, and the same physics governs both.",
      "introduction": "Potters have an old saying that a month of building can be lost in an hour of careless drying, and ceramics proves it every term. Cracks almost never start in the fire; they start on the drying shelf when one part of a wall stiffens ahead of another, and the firing only announces them. Learning to read the stages by touch and temperature, to load and fire a kiln on a schedule, and to behave safely around a live kiln is the difference between a class that ships fired work and one that sweeps up shards.",
      "realWorldContext": "In the potters' towns around Adome and Shai-Ya-Ya, newly built ware stands overnight under shade, dries for days in the eaves away from direct sun, and is then stacked in an open wood pile that draws air and reaches roughly 900 °C — the same slow-dry, even-heat logic a school kiln room formalises. A SHS ceramics studio in Kumasi or Ho that has one element kiln must still solve the same problems with a tent, a shelf, a pyrometer and rules: which is exactly what the examiners watch for in the Paper 3 firing window.",
      "objectives": [
        "Name the drying stages in order and test a pot for each stage by touch and look.",
        "Explain differential drying and list four causes of cracking with their preventions.",
        "State the bisque range for school earthenware ware and the reason for a slow start to the firing.",
        "Describe a correct kiln-loading and firing sequence with cone and temperature checks.",
        "Apply the kiln-room safety rules on ventilation, hot surfaces and clay-dust hygiene without being told."
      ],
      "sections": [
        {
          "title": "The drying stages: wet, leather-hard, bone-dry",
          "content": "Water leaves clay in stages, and each stage has its own work and its own dangers. At the wet, plastic stage the clay takes any shape but holds none: walls creep, handles slide, and a pot left on a cold board sags on one side. As the evaporation front moves, the pot reaches leather-hard — it firms, loses the cold damp feel, takes a fingernail mark without dragging, and is now strong enough to trim, to receive handles and to be moved; moisture at this point has fallen to roughly the level where the clay stops shrinking as a whole body but the interior still holds damp. Bone-dry follows when all physical water has gone: the pot is at room temperature to the cheek, weight has stopped falling, and it is now about 5–8 per cent smaller than it was wet and heartbreakingly fragile — one forced rim and months of work are ash. Keep a written habit of testing: cheek for temperature, nail for hardness, knuckle tap for ring, and a marked scale card beside each piece so shrinkage is watched, not discovered.",
          "bulletPoints": [
            "Wet stage: shape moves by itself — nothing may be joined or trimmed now.",
            "Leather-hard: cool, firm, takes a nail mark — the stage for trimming, handles and cut decoration.",
            "Bone-dry: room temperature to the cheek, weight stable, most fragile state ever.",
            "Move drying ware onto the body, never by a rim or handle, which are the thinnest parts.",
            "Stood upside down on a rack, small pots dry floor and wall together and stay true."
          ],
          "keyTakeaway": "Read the clay, do not guess it: temperature to the cheek and a nail mark tell you the stage better than any calendar.",
          "realWorldExample": "A class shelf at Winneba carries a card beside each piece noting the day it was built and the day it went cheek-cold; the pieces dried under a cloth tent for two days before facing open air, and none cracked on the shelf."
        },
        {
          "title": "Why pots crack: causes and their preventions",
          "content": "Cracking is differential shrinkage: the outer layer has given up its water and hardened while the inner layer is still damp and shrinking, and the disagreement tears the wall at its weakest line. The five recurring culprits each have a named prevention. Uneven walls — a thick join against a thin rim — dry at two rates, so compression and gauging during building are drying precautions, not just building ones. Sun and draught: a pot set against a sunny wall or in front of a classroom doorway dries on one side first and splits opposite the shadow; dry under even shade instead. Fast drying on hollow handles and thick pads stresses the join, hence pulling handles solid and hollowing forms evenly. Grit and laminations from careless wedging become steam pockets in the fire; wedge properly and test. Finally the trapped-air explosion, the dramatic kiln loss, is almost always a bubble folded in during building and never punched out before drying. Record each crack on the shelf card with its cause: after a term, the class can predict its own failures, which is exactly the thinking a Paper 2 plan rewards.",
          "bulletPoints": [
            "Differential drying tears the wall where thick meets thin — gauge walls evenly from the start.",
            "Shade and still air: never sun, never a draught corner, never a cold concrete slab direct.",
            "Solid handles and thick relief pads crack their joins; hollow forms and keep thickness honest.",
            "Punch trapped air bubbles out with a needle before drying; wedged-clean clay keeps fire-safe.",
            "Log every crack and its suspected cause on the shelf card — patterns beat luck."
          ],
          "keyTakeaway": "A crack is a race the wall lost: slow the fast parts down and the pot dries as one body.",
          "realWorldExample": "In a study hall near Tamale, students dry tile samples on loose sheets of cardboard that flex with the clay; samples dried flat on concrete cupped and split along hidden tension lines, and the shelf cards proved the difference."
        },
        {
          "title": "The bisque firing: what heat does to the clay",
          "content": "Bisque firing is the first, transforming fire: it burns out everything the clay cannot keep and locks the body into a stable, slightly porous ceramic that can be handled, glazed and decorated without dissolving. For school earthenware ware the target band is roughly 900–1000 °C — about cones 010 to 06 — which matures the body without melting its detail. The schedule matters more than the top temperature. The firing begins gently, around 100 °C per hour up to 200 °C, while every last of residual water is driven out as steam; push faster with damp ware inside and the steam bursts the pots from within. Between roughly 450 and 600 °C the clay structure gives up its chemically combined water and organics burn away, so this zone must be reached and held long enough to clear the smoke; traditional open-pile potters know this as the long, low, smoky start before the flames draw. At 573 °C quartz inverts with a sharp volume change, so both heating and cooling move slowly through that band to avoid dunting. Load only bone-dry ware, spaced on clean shelves with nothing touching, witness cones at the front for reading, and shut down when the target cone bends fully with the one below it.",
          "bulletPoints": [
            "Target the 900–1000 °C earthenware band, read with cones 010 to 06 at the front of the kiln.",
            "Ramp about 100 °C per hour to 200 °C: steam made in a hurry destroys what water could not.",
            "Hold long enough through 450–600 °C to burn out carbon, or glaze later fires black patches.",
            "Quartz inverts at 573 °C — cross it slowly upward and downward alike.",
            "Load bone-dry only, spaced, nothing touching, on clean shelves with cone packers."
          ],
          "keyTakeaway": "The bisque schedule is a drying schedule continued: heat carries out the water and carbon the shelf could not, and only at the pace the clay can accept.",
          "realWorldExample": "The studio kiln at a Kumasi SHS runs its bisque on a posted card: two hours to 200 °C, a steady climb through the burnout band, cone 06 as the shut-down witness — and the shelf-loss notices on the wall explain why each line of the card exists."
        },
        {
          "title": "Kiln-room safety: ventilation, hot surfaces and habits",
          "content": "A kiln is a heater, an oxygen consumer and, on fuel, a producer of carbon monoxide and fumes, so the room rules come before any firing rule. Ventilate always: electric kilns run only in an airy room with the door open to a draught path, wood and gas firings happen outdoors or in a purpose-built kiln shed with the flue drawing, and no class ever fires in a closed, airless classroom where students share the oxygen. Establish hot-surface discipline: a taped line half a metre out around any kiln, elements and shelves treated as live until a pyrometer reads below 100 °C, lids propped with gloved hands and a tool, never a bare forearm, and the area clear of cartons, cloth, slip buckets and anything that can smoulder. Enforce the cool-down: opening a hot kiln into cool air dunts pots and cracks shelves, so the lid stays down until past 100 °C and is then opened in stages. Handle ware and dust cleanly: masks when crushing or sieving dry clay because the respirable silica is the studio's real long-term hazard, hands washed before eating, no food in the kiln room, a logged firing record, and a first-aid point and extinguisher named before any student lights anything.",
          "bulletPoints": [
            "Air moves always: draught path for electric kilns, open-air or flued shed for fuel firing.",
            "Taped exclusion line, gloves and a prop tool; nothing touched until under 100 °C.",
            "Cool down in stages — early opening dunts ware and damages shelves the same day.",
            "Mask on for dry clay work: silica dust, not fire, is ceramics' quiet danger.",
            "Firing log signed: kiln, load, schedule, cones, operator, time shut down."
          ],
          "keyTakeaway": "Kiln safety is a set of habits, not moods: line, draught, gloves, gauge, log — every firing, without exception.",
          "realWorldExample": "A school near Ho rebuilt its kiln corner after a smouldered carton: a painted line, a hooked list of rules by the door, extinguisher on the wall and the Form One induction that now opens every term with the kiln room, not the wheel."
        }
      ],
      "commonMistakes": [
        "Racing the drying: pots moved into strong sun or onto a warm wall to finish faster, then split opposite the shade line. Dry under even cover and let the whole body stiffen together.",
        "Loading ware that is not bone-dry — a cold centre against the cheek is a damp centre — and firing fast: the steam has nowhere to go and bursts the piece from inside at the first few hundred degrees.",
        "Opening the kiln to look as soon as the elements go quiet: the thermal slap dunts pots and crazes glazes later; unloading happens only after the gauge reads below 100 °C.",
        "Firing the electric kiln in the closed classroom to keep heat in: students share the room with carbon monoxide and burnt-fume air; ventilation is not optional, it is the first rule.",
        "Treating the kiln lid and shelves as safe once the power is off, then burning a forearm on a still-live element; hot-surface discipline lasts until the gauge, not the switch, says otherwise."
      ],
      "wassceExamTips": [
        "Paper 1 tests the stage words in order: wet, leather-hard, bone-dry, bisque — and what each stage permits; a one-line answer naming the sequence scores.",
        "Paper 2 planning marks reward a firing calendar: building date, drying days, bisque window and glaze window written against the exam timetable, because late ware cannot be fired by anyone.",
        "In Paper 3, examiners observe the kiln routine itself: PPE, the exclusion line, the prop-and-gauge habit and a signed firing log carry the safety marks even when a pot is lost.",
        "For any question on cracking, answer with cause and prevention in pairs — differential drying against slow tented drying, thick joins against compression — and the mark follows the pairing.",
        "State temperatures with units and ranges: bisque for school earthenware is 900–1000 °C, quartz inversion is at 573 °C; a bare number without the degree sign reads as guessed."
      ],
      "summaryChecklist": [
        "Can I test a pot for wet, leather-hard and bone-dry stages by cheek, nail and tap?",
        "Can I list four causes of drying cracks with the prevention for each?",
        "Can I set a bisque schedule with the slow steam start and the 900–1000 °C target?",
        "Can I explain what burns out between 450 and 600 °C and why 573 °C needs care?",
        "Can I run the kiln-room rules on ventilation, hot surfaces, dust and the firing log?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-fire-1",
        "title": "Loading and bisque-firing a shelf of dried pots",
        "problem": "A class has twelve dried coil jars ready for the studio kiln. Write the correct loading, firing and unloading procedure with its checks.",
        "stepByStepSolution": [
          "Step 1 (M1): Confirm every jar is bone-dry by the cheek test — no piece colder than the room air goes into the kiln.",
          "Step 2 (M1): Set the jars on clean shelves, one shelf-height apart with a finger gap between pieces, nothing touching, witness cones packed at the front.",
          "Step 3 (M1): Check elements, shelf props and the lid seal, open the room draught, then start the firing on the bisque schedule.",
          "Step 4 (M1): Ramp at about 100 °C per hour up to 200 °C to drive off residual water as gentle steam, then advance at the normal rate.",
          "Step 5 (M1): Cross the 450–600 °C burnout band steadily so carbon and the chemically combined water leave the body before the top zone.",
          "Step 6 (A1): Shut down when the cone 06 witness (about 999 °C) bends to its full with the cone below it, confirming the 900–1000 °C earthenware band is reached.",
          "Step 7 (M1): Cool with the kiln closed until the pyrometer reads below 100 °C, then prop the lid open progressively before unloading.",
          "Step 8 (A1): Unloaded ware rings under a light knuckle tap, is firm and slightly porous, takes a wet finger without dissolving, and shows no dunting crack — the bisque load passes."
        ],
        "keyTakeaway": "A bisque load is judged twice: once by the cones that read the fire and once by the ring of the tapped pot."
      },
      {
        "id": "ex-ce-fire-2",
        "title": "A safe drying and firing routine for the class shelf",
        "problem": "New SHS 1 students must take a term's work from bench to bisque without losses to drying cracks or kiln hazards. Set out the routine.",
        "stepByStepSolution": [
          "Step 1 (M1): Fresh work stands on boards under a loose cloth tent for a day, away from sun, doors and walls that draw.",
          "Step 2 (M1): Small pots are then turned upside down on open racks so floor and wall dry at the same rate; shelf cards log build day and cheek-cold day.",
          "Step 3 (A1): Work is certified bone-dry only when it is room-temperature to the cheek, its weight has stopped falling, and no nail-drag appears on the foot.",
          "Step 4 (M1): The kiln corner is prepared before any firing: taped exclusion line half a metre out, extinguisher and first-aid point named, gloves and prop tool hung ready.",
          "Step 5 (M1): Dust work — crushing, sieving, sweeping dry clay — is done wearing a mask, hands are washed before eating, and no food enters the room.",
          "Step 6 (M1): Every firing is signed in the log: kiln number, load, schedule used, cone reading, operator and shut-down time.",
          "Step 7 (A1): The term closes with no shelf losses to draught cracks and no unlogged firings — the routine, not luck, carried the work."
        ],
        "keyTakeaway": "Safety and slow drying are schedules written down; a routine on a card survives every busy week of the term."
      }
    ],
    "quiz": {
      "id": "quiz-drying-firing-safety",
      "topicId": "shs1-ce-t3-drying-firing-safety",
      "title": "Drying and Firing Safety Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-fire-1",
          "quizId": "quiz-drying-firing-safety",
          "questionText": "Pottery is bone-dry when which condition is true?",
          "optionA": "All physical water has left the clay and the piece feels the same temperature as the room air.",
          "optionB": "The surface looks dry but the base still feels cool.",
          "optionC": "The piece has been heated to cone 06 in the kiln.",
          "optionD": "The pot can still be bent slightly without breaking.",
          "correctOption": "A",
          "subConcept": "Drying stages",
          "explanation": "The cheek test for even temperature and the end of weight loss mark the bone-dry stage. A cool base (option B) is damp ware heading for a steam burst, option C describes bisque, and bone-dry clay is the least flexible it will ever be.",
          "remediationTip": "Test in pairs: cheek for temperature, then scale for settled weight; neither alone certifies dryness."
        },
        {
          "id": "q-ce-fire-2",
          "quizId": "quiz-drying-firing-safety",
          "questionText": "Which sequence puts the stages of a pot in the correct order?",
          "optionA": "Leather-hard, wet, bone-dry, bisque.",
          "optionB": "Wet, leather-hard, bone-dry, bisque.",
          "optionC": "Wet, bone-dry, leather-hard, bisque.",
          "optionD": "Bisque, wet, leather-hard, bone-dry.",
          "correctOption": "B",
          "subConcept": "Stage order",
          "explanation": "Water leaves the plastic body first, firming it to leather-hard, then fully to bone-dry, and only the fire creates bisque. Options A and C swap the drying stages; bone-dry clay never returns to leather-hard.",
          "remediationTip": "Say the water story: plenty of water, less water, no physical water, then fire."
        },
        {
          "id": "q-ce-fire-3",
          "quizId": "quiz-drying-firing-safety",
          "questionText": "The usual bisque target band for earthenware ware in the school studio is about which temperatures?",
          "optionA": "100–200 °C.",
          "optionB": "300–400 °C.",
          "optionC": "900–1000 °C.",
          "optionD": "1400–1500 °C.",
          "correctOption": "C",
          "subConcept": "Bisque firing",
          "explanation": "Around 900–1000 °C, the cone 010 to 06 band, stabilises the body with its chemically bound water gone while leaving the slight porosity that grips glaze. Options A and B describe steam and early burnout zones, and 1400 °C belongs to porcelain maturity, not bisque.",
          "remediationTip": "Anchor the figure to the local ware: open-pile firings peak near 900 °C — bisque sits just above that world."
        },
        {
          "id": "q-ce-fire-4",
          "quizId": "quiz-drying-firing-safety",
          "questionText": "Why must a kiln room be ventilated during firing?",
          "optionA": "To keep the kiln shelves from warping.",
          "optionB": "To bring fresh air onto the glaze surfaces.",
          "optionC": "To dry the ware faster inside the kiln.",
          "optionD": "To carry away carbon monoxide and combustion fumes and to replace the oxygen the kiln consumes.",
          "correctOption": "D",
          "subConcept": "Kiln safety",
          "explanation": "A firing kiln takes oxygen from the room and gives back carbon monoxide and burnt fumes — invisible, poisonous and cumulative — so a draught path is a life-safety rule, not comfort. Glaze, shelves and drying are not the reason.",
          "remediationTip": "Pair the hazard with its defence: fire consumes oxygen and makes carbon monoxide, therefore air must move."
        },
        {
          "id": "q-ce-fire-5",
          "quizId": "quiz-drying-firing-safety",
          "questionText": "The main reason pots are dried slowly and evenly under cover is to do what?",
          "optionA": "Prevent the surface shrinking faster than the still-damp core, which tears the ware.",
          "optionB": "Finish the work in less classroom time.",
          "optionC": "Keep the clay colour pale before firing.",
          "optionD": "Let handles and joins stay damp longer for shaping.",
          "correctOption": "A",
          "subConcept": "Crack prevention",
          "explanation": "Differential drying — hard skin over a shrinking core — is the root cause of shelf cracks; even, slow drying keeps the whole wall shrinking as one. Sun and draught do exactly the opposite, and damp joins are a hazard, not a convenience.",
          "remediationTip": "Trace the water on the wall: wherever a fast-dried zone meets a slow one, that is where the crack will start."
        }
      ]
    }
  },
  {
    "id": "shs2-ce-t1-wheel-throwing",
    "subjectId": "ceramics",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Wheel Throwing: Centring and Pulling Walls",
    "description": "Wheel Throwing: Centring and Pulling Walls - centring, opening, floor thickness, collar, pulling three rings, wall taper, rim finishing, shaping cylinder to bowl, trimming a foot ring, wheel maintenance. This topic trains the full thrown sequence on the kick and electric wheel, from a wedged ball of clay to a trimmed, leather-hard vessel with an even 6-8 mm wall.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Throwing begins with wedging, not with the wheel: about 600-700 g of stoneware clay cone-wedged for 30-40 seconds gives one 300 ml mug. Air pockets left in the clay expand and blow the wall up during firing.\n• Two wheels are used in Ghanaian workrooms: the kick wheel (flywheel, hand or foot powered, no electricity) and the electric wheel (about 500 W with a foot-pedal speed control). Centring needs a fast spin of roughly 90-130 rpm; pulling walls is done slower at 60-80 rpm.\n• Centring is the whole art. Test it honestly: hold a needle or a finger steady against the spinning clay; if the clay pulses against the point it is still off-centre. \"The clay must feel dead still under the hands.\"\n• The centring action is a cone, not a squeeze. Push with the heel of the lower hand while the upper hand resists on the top, forming a tall cone and then pressing it down into a dome; repeat three times and stop before the clay warms and turns sluggish.\n• Opening: press the thumbs into the centre of the flattened dome to leave a floor of about 8-10 mm, then use a ring tool or the ball of the thumb to mark the inside floor edge so the wall grows from a clean corner.\n• Collaring is squeezing the base of the wall between a wetted rib and the fingers to force clay upwards and to remove the wide flare left by opening. One collar before the first pull, one after the last.\n• Three pulls make a wall: first pull thick and slow to lift the clay, second pull to set the height, third pull thin to finish. \"More than three pulls and the clay loses body and slumps.\"\n• Wall taper: slightly thicker at the base (about 8 mm), thinnest at the rim (about 5 mm). A rim thicker than the base cracks as it dries because the heavy top drags the drying wall.\n• Rim finishing: keep a wet finger or a chamois on the rim while the wheel spins slowly, draw the clay over the edge to both sides, then stop the wheel and cut a clean circle with a needle laid across the rim.\n• Shaping a cylinder into a bowl: support the outside with a rib while the inside fingers press gently downward and outward at 45 degrees; change shape only while the wall is still moving, never on a still wheel.\n• Trimming is done leather hard, usually the next day. Sit the ware upside down, centre it again by eye and by the wobble test, then take the foot ring with a loop tool, channelling about 10 mm inward from the edge.\n• A foot ring gives three things: a clean line for glazing, a raised base that does not stick to the kiln shelf, and a comfortable place for the thumb when the pot is lifted.\n• Slip is your only lubricant. Too much water softens the wall and it collapses; too little and your hands grab, dragging ridges down the clay surface.\n• Wheel maintenance after every lesson: wash the splash pan and wheel head, dry the wheel head so it does not rust, clear clay from the pedal and motor vents, and check that the bat pins seat fully. A clay-clogged wheel head throws off-centre ware forever.",
    "detailedNotes": {
      "overview": "Wheel throwing is the one ceramic skill that cannot be faked: the clay records every hesitation in the hands. This topic covers the complete thrown sequence for SHS 2 workroom practice, from a wedged ball to a trimmed foot ring, and it is the core of the Paper 3 practical in Ceramics. Marks in the marking scheme are awarded for handling of materials, for evenness of wall, and for a controlled finished form, so the sequence must be learned as procedure rather than as theory.",
      "introduction": "Think of the wheel as a testing machine for discipline. The clay spins at the speed you choose and it rises only when your hands are braced, wet and steady. Every stage in this lesson has one job only: wedging removes air, centring removes wobble, opening sets the floor, collaring gathers the mass upward, three pulls build the wall, and trimming gives the foot. Students fail not because their hands are clumsy but because they rush one stage and then try to repair it in the next.",
      "realWorldContext": "Pottery in Ghana has always been a seated, hand-built industry: the women of Agojuve near Accra and of Shai-Ya-Ya in the Eastern Region build their water pots, the kongo, entirely with coils and a smooth potsherd as an anvil, turning the pot by hand rather than by machine, while the potters of Yakamo near Tamale do the same for the storage and cooking vessels of the north. The wheel entered Ghanaian art education through the teacher-training and SHS Visual Arts workrooms, where schools with unreliable power still run foot-powered kick wheels precisely because a kick wheel needs no socket at all. A thrown-and-trimmed jar is what a Kumasi or Accra hotel orders by the dozen when a school workroom takes a commission, and the buyer judges the set on one thing only: whether every wall is the same thickness.",
      "objectives": [
        "Wedge and weigh a clay ball correctly and state why wedging precedes centring",
        "Centre clay on a spinning wheel head and prove centring with a needle or finger test",
        "Open a floor of 8-10 mm and collar the base of the wall before the first pull",
        "Pull three rings with the correct wheel speed, pressure and wall taper of 8 mm at the base to 5 mm at the rim",
        "Shape a cylinder into a bowl and trim a foot ring on leather-hard ware, then state the wheel cleaning routine"
      ],
      "sections": [
        {
          "title": "Preparing the Clay and the Wheel",
          "content": "Everything after this point depends on the two minutes you spend before the clay touches the wheel head. Weigh the clay, roughly 600-700 g for a 300 ml mug and 1.2 kg for a 1.5 litre jar, because a ball that is too small forces you to over-thin the wall and a ball that is too large cannot be centred by a school-aged student. Wedge by cone method on a clean, slightly textured table: throw the mass forward and roll it back, keeping the pressure on your heels rather than your fingertips, thirty to forty rolls until the cut face shows no air layers. Then roughen the ball, slam it down hard on the wheel head and begin spinning. Fit a plaster or timber bat to the wheel head if the class is practising small ware, and check that the bat pins are seated; a loose bat transmits a wobble that no amount of squeezing can correct. Wet the splash pan and your hands, but never flood the wheel head, because slip wandering under the clay destroys adhesion and the ball walks off.",
          "bulletPoints": [
            "Weigh the clay for the intended vessel: 600-700 g for a mug, 1.2 kg for a 1.5 litre jar.",
            "Cone-wedge 30-40 rolls and cut the ball to inspect for trapped air before throwing.",
            "Slam the ball down hard, then start the wheel; a soft landing leaves the ball tilting on a hidden air pocket.",
            "Seat the bat pins fully and keep the wheel head clean and only lightly damp."
          ],
          "keyTakeaway": "Wedging and weighing are not warm-up steps; they decide whether the wall can ever be even.",
          "realWorldExample": "In a SHS Visual Arts ceramics workroom in Kumasi, the instructor keeps a small scale on the shelf and every student weighs a ball before mounting it, because a set of thirty mugs thrown from uneven masses cannot be fired as one matched batch."
        },
        {
          "title": "Centring: the Cone, the Dome and the Needle Test",
          "content": "Centring means forcing every particle of clay to rotate on a single vertical axis, so the mass becomes dead still under your hands. Work in cones. With the wheel at its fastest comfortable speed, push upward with the heel of your left hand from the base while your right hand resists the top, closing the clay into a tall cone; then press straight down into a low dome with both hands braced, elbows locked against your hips or the inside of your thighs. Two or three cone-and-dome cycles are enough. Over-working warms the clay, and warm clay turns sluggish and slumps the moment you stop squeezing. Prove the result rather than trusting the feel of it: hold a needle tool, a finger or a wet rib steady against the spinning wall and watch the contact point. If the clay taps the point twice per revolution, it is still off-centre. Centring is the stage that carries method marks in the practical examination, and examiners look for braced elbows and a slow, confident squeeze rather than a fast, nervous one.",
          "bulletPoints": [
            "Alternate cone up and dome down two or three times; never simply squeeze from the sides.",
            "Brace both elbows against the hips or thighs so the arms become part of your body frame.",
            "Fast spin for centring, about 90-130 rpm on an electric wheel.",
            "Verify with a needle held still against the wall; any regular tapping means off-centre clay.",
            "Stop while the clay is cool and firm; slugish warm clay cannot hold a pulled wall."
          ],
          "keyTakeaway": "A pot is only ever as centred as the clay was before the floor was opened.",
          "realWorldExample": "Kick-wheel throwers at a workshop in Accra teach beginners the needle test first, because on a flywheel the speed falls as you press, and the wobble a student feels in the hands is not always the wobble that is really there."
        },
        {
          "title": "Opening, Floor Thickness and Collaring",
          "content": "With the clay centred and domed, press both thumbs into the middle and work down to a floor of 8-10 mm, checking depth with a pin pushed through the clay or by leaving a finger below the wheel board to feel how near the floor is to your thumb. Too thin a floor cracks during drying and cannot survive trimming. Immediately mark the inside corner where floor meets wall using a ring tool or the ball of the thumb; a pot built from a soft, rounded corner has no structural footing and flares outward under the first pull. Now collar. Wet a rib or squeeze the wall between thumb and fingers at the base and press inward while lifting upward, so that clay displaced from the wide bottom travels into the height. Collaring is repeated once before the first pull and once after the third, and it is the habit that separates an even cylinder from a bell-shaped one. Keep the wall height at least twice its diameter if you want a cylinder; a wide shallow mass resists lifting and simply thickens the base instead.",
          "bulletPoints": [
            "Open to a floor of 8-10 mm and confirm with a pin or a finger beneath the bat.",
            "Cut a definite inside corner so the wall has a footing to grow from.",
            "Collar before the first pull and after the last to gather displaced clay upward.",
            "A cylinder needs height at least twice its diameter before the clay will lift willingly."
          ],
          "keyTakeaway": "Floor thickness and a sharp inside corner are bought once, at the opening stage, and never recovered later.",
          "realWorldExample": "A potter making the narrow-necked water jars sold along the Kumasi road will deliberately keep a thick floor, because the finished jar is lifted by the neck when full and a thin base tears away under the weight of the water."
        },
        {
          "title": "Pulling Three Rings, Wall Taper and the Rim",
          "content": "Slow the wheel to about 60-80 rpm. A first pull is a lifting pull: inside finger and outside rib meet at the base, and both hands rise together at a speed that matches the height you want, so thick clay travels upward rather than being thinned in place. The second pull sets the height and evens the pressure; the third pull thins and closes the surface. Beyond three pulls the clay body loses its packed structure, becomes glassy and slumps. Establish the taper as you pull, roughly 8 mm at the base graduating to 5 mm at the rim, because a rim left thick acts as a heavy lip that drags the drying wall and produces a crack running down from the top. Finish the rim last: with the wheel turning slowly, rest a wet finger on the edge and draw clay over the lip to the inside and then to the outside, so the rim is rounded and comfortable to drink from, then stop the wheel and cut a true circle with a needle laid across the opening. Compress the finished rim with the back of a spoon or a wooden rib; compression closes the surface and reduces rim crazing after glazing.",
          "bulletPoints": [
            "Pull one lifts, pull two evens, pull three thins and closes; never exceed three.",
            "Hands must rise at a steady rate and stay in contact, or the wall records a ring of pressure.",
            "Taper from about 8 mm at the base to 5 mm at the rim.",
            "Round the rim over both faces, cut it true with a needle, then compress it.",
            "Too much water on the wall softens it; use slip, not a wet sponge flood."
          ],
          "keyTakeaway": "Three controlled pulls with a taper beat six nervous ones, and a compressed rim survives drying.",
          "realWorldExample": "A student throwing a set of six cups for a school cafe commission keeps the third pull deliberately slow and dry so the cup walls read the same thickness when the set is turned in the light for examination."
        },
        {
          "title": "Reshaping, Trimming the Foot Ring and Wheel Care",
          "content": "Reshaping happens while the wall is still moving. To turn a cylinder into a bowl, place a rib in one hand on the outside and the fingers of the other inside, then press gently downward and outward at about 45 degrees while the wheel spins, letting the rib support rather than gouge. Never reshape on a stopped wheel; the clay is not uniform and it will fold. To make a shoulder or a neck, collar inward at the point you want and lift the remaining mass above it. Leave the pot on the wheel, cover it loosely with a cloth and let it reach leather hard, usually overnight in Ghanaian workroom conditions. Trimming follows: mount the ware upside down, spin slowly, correct any wobble with a light squeeze, then take a loop tool and cut a foot ring, channelling about 10 mm inward from the outer edge and lifting the centre of the base so the pot rests on a ring rather than a flat suction cup. Trim in two passes, one to remove mass and one to clean the line. Finish with wheel care: wash the splash pan and wheel head, wipe the head dry against rust, clear the pedal and motor vents, and store ribs and loop tools so their edges are not blunted.",
          "bulletPoints": [
            "Reshape only on a moving wheel, with a rib supporting the outer wall.",
            "Trim at leather hard, centred again and checked by the wobble test.",
            "A foot ring is channelled roughly 10 mm inside the edge, with the base centre lifted.",
            "Two trimming passes: bulk removal, then a clean line.",
            "End every lesson by washing and drying the wheel head and clearing the vents."
          ],
          "keyTakeaway": "The foot ring is what an examiner sees first when the pot is lifted, so it is trimmed, not left as thrown.",
          "realWorldExample": "Ceramics examiners in the WASSCE practical award the handling-of-materials marks partly on the state of the station at the close of the session, and a wheel left caked in drying clay costs the candidate that mark even when the pot itself is sound."
        }
      ],
      "commonMistakes": [
        "Squeezing from the sides only instead of building cone-and-dome cycles, so the clay looks centred but pulses against the needle and the finished wall varies by several millimetres.",
        "Opening the floor too thin, below about 5 mm, then discovering the crack when trimming or finding the base tear away while the pot is being lifted off the bat.",
        "Flooding the wall with water rather than slip, which softens the clay, makes the hands grab and drags vertical ridges down the surface of the pull.",
        "Pulling five or six times to chase thinness, which destroys the packed structure of the clay body and produces a glassy wall that slumps at the shoulder.",
        "Trimming wet, freshly thrown ware because the class is impatient; the soft wall folds under the loop tool and the foot ring is lost entirely.",
        "Leaving clay to dry on the wheel head and splash pan, so the next bat never seats flat and every pot after it throws off-centre."
      ],
      "wassceExamTips": [
        "Paper 3 (practical) is where this skill is assessed. Examiners move station to station and record method, so let them see the sequence: wedge, cone-and-dome centring, open, collar, three pulls, rim, foot ring. Skipping the collar is a visible omission.",
        "Handling of materials carries its own marks. Keep slip on the clay and water off it, hold tools rather than gouge with them, and leave the wheel clean at the end of the session; a dirty station is read as careless.",
        "In Paper 1 and Paper 2 you may be asked to define centring, collar, taper or foot ring in one line. Learn short dictionary answers, for example \"collaring is pressing inward at the base of a thrown wall to force clay upward\".",
        "If your pot collapses in the practical, do not waste remaining hours re-throwing the same mass. Re-wedge it, throw a smaller and simpler form, and present it trimmed and finished; a small sound pot scores better than a large failed one.",
        "Time plan across the practical window: throw in the first session, dry overnight in the covered rack, trim in the second session, and glaze later. Write the plan on your presentation board because planning itself is marked.",
        "Expect a short-answer item on wheel speed or wall thickness. Quote numbers, not impressions: about 90-130 rpm for centring, 60-80 rpm for pulling, 8 mm base tapering to 5 mm at the rim."
      ],
      "summaryChecklist": [
        "Can I wedge, weigh and mount a clay ball and explain why wedging comes before centring?",
        "Can I centre clay in cone-and-dome cycles and prove it with a steady needle test?",
        "Can I open a floor of 8-10 mm, mark the inside corner and collar the base before the first pull?",
        "Can I pull three rings with the correct taper and finish a rounded, compressed rim?",
        "Can I reshape a cylinder into a bowl on a moving wheel and trim a clean foot ring at leather hard?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-wheel-throwing-1",
        "title": "Throwing a 300 ml Drinking Mug from Ball to Rim",
        "problem": "On an electric wheel, throw a straight-sided drinking mug holding about 300 ml of water with an even wall and a comfortable rim. List the studio procedure in order and identify the points that earn method and accuracy marks.",
        "stepByStepSolution": [
          "Step 1 (M1): Weigh 600-700 g of stoneware clay and cone-wedge 30-40 rolls on a clean table, cutting the ball once to inspect the face for trapped air.",
          "Step 2 (M1): Slam the ball onto the wheel head, start the wheel fast at about 90-130 rpm and centre by building a cone and pressing it down into a dome, with both elbows braced, for two to three cycles.",
          "Step 3 (M1): Hold a needle steady against the spinning wall to confirm centring, then slow the wheel to 60-80 rpm before opening.",
          "Step 4 (M1): Press the thumbs into the dome to leave an 8-10 mm floor, mark the inside corner with a ring tool and collar the base of the wall inward and upward.",
          "Step 5 (M1): Pull three rings with inside finger and outside rib rising together, keeping about 8 mm of clay at the base and thinning to about 5 mm at the rim, then collar once more.",
          "Step 6 (A1): Round the rim over both faces with a wet finger, cut it a true circle with a needle across the opening and compress the edge so the wall reads evenly thick top to base.",
          "Step 7 (A1): The finished answer is a straight-sided mug, roughly 90 mm high and 75 mm across the rim, with a uniform wall and no ridge left by the pulls, standing centred on the bat."
        ],
        "keyTakeaway": "A mug earns its marks in the order of the procedure: wedged mass, proved centring, marked floor corner, three pulls with taper, and a compressed rim."
      },
      {
        "id": "ex-ce-wheel-throwing-2",
        "title": "Turning a Thrown Cylinder into a Trimmed Bowl",
        "problem": "A cylinder has been thrown 120 mm high and 110 mm across. Reshape it into an open bowl and finish it with a trimmed foot ring. Describe the procedure and the accuracy checks.",
        "stepByStepSolution": [
          "Step 1 (M1): With the wheel still turning at a slow speed, rest a rib on the outside of the cylinder and the fingers of the other hand inside, pressing gently downward and outward at about 45 degrees so the wall opens into a bowl curve.",
          "Step 2 (M1): Work the curve in two or three passes from the base upward, letting the rib support the clay rather than gouge into it, and never reshape on a stopped wheel.",
          "Step 3 (M1): Collar the top few millimetres inward to close and firm the rim, then round the edge over both faces with a wet finger.",
          "Step 4 (M1): Mark the inside floor with a ring tool so the bowl has a definite corner, and measure the wall with calipers at three heights.",
          "Step 5 (M1): Cover the bowl and leave it until leather hard, then invert it, centre it again by the wobble test and trim with a loop tool.",
          "Step 6 (A1): Channel the foot ring about 10 mm inward from the outer edge and lift the centre of the base so the bowl rests on the ring, leaving the wall about 7 mm at the base and 5 mm at the rim.",
          "Step 7 (A1): The finished answer is a symmetrical bowl of even wall, a closed unfluted rim and a clean foot ring, with no throwing ribbons left on the exterior."
        ],
        "keyTakeaway": "Reshaping is done on the move and trimming is done at leather hard, and each stage has its own accuracy check before the pot is set aside."
      }
    ],
    "quiz": {
      "id": "quiz-ce-wheel-throwing",
      "topicId": "shs2-ce-t1-wheel-throwing",
      "title": "Wheel Throwing Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-wheel-1",
          "quizId": "quiz-ce-wheel-throwing",
          "questionText": "Which test correctly proves that clay is centred on the wheel head?",
          "optionA": "Hold a needle steady against the spinning wall and observe that the clay does not tap the point.",
          "optionB": "Press both thumbs into the clay until the floor feels level to the touch.",
          "optionC": "Spin the wheel with no clay on it and watch that the wheel head runs true.",
          "optionD": "Pour water on the clay and watch that it spreads evenly over the dome.",
          "correctOption": "A",
          "subConcept": "Centring test",
          "explanation": "Centring means every particle rotates on one vertical axis, so a stationary point touching the mass records any wobble as a regular tap. Pressing thumbs tests floor thickness, not centring, and running the empty wheel head only proves the machine is true, not the clay.",
          "remediationTip": "Practise the needle test on every ball before opening, and repeat cone-and-dome cycles whenever the point is tapped."
        },
        {
          "id": "q-ce-wheel-2",
          "quizId": "quiz-ce-wheel-throwing",
          "questionText": "The main purpose of collaring a thrown wall is to",
          "optionA": "thin the rim so the pot dries evenly.",
          "optionB": "cut a sharp inside corner at the floor of the pot.",
          "optionC": "force clay displaced at the base upward into the height of the wall.",
          "optionD": "compress the surface so that glaze will not run.",
          "correctOption": "C",
          "subConcept": "Collaring",
          "explanation": "Collaring is an inward and upward squeeze at the base of the wall, gathering the flare left by opening so that mass travels into height. The rim is thinned by pulling, the inside corner is cut by a ring tool at the opening stage, and compression is a separate finishing action.",
          "remediationTip": "Say the sequence aloud before throwing: open, mark the corner, collar, pull, collar."
        },
        {
          "id": "q-ce-wheel-3",
          "quizId": "quiz-ce-wheel-throwing",
          "questionText": "A student throws a cylinder and leaves the rim noticeably thicker than the base. The most likely result is",
          "optionA": "the wall will trim more cleanly because the lip is strong.",
          "optionB": "the pot will dry faster than a tapered one.",
          "optionC": "the base will crack where it meets the wheel bat.",
          "optionD": "the heavy rim will drag the drying wall and start a crack below the lip.",
          "correctOption": "D",
          "subConcept": "Wall taper",
          "explanation": "Wall taper runs from roughly 8 mm at the base to 5 mm at the rim. A thick rim is a heavy lip: as the wall shrinks in drying the mass at the top pulls the thinner clay beneath it and a crack opens just below the lip. Trimming is not made easier and drying is not faster.",
          "remediationTip": "Check taper with calipers at three heights on every practice cylinder before you trim."
        },
        {
          "id": "q-ce-wheel-4",
          "quizId": "quiz-ce-wheel-throwing",
          "questionText": "Why is trimming carried out when the ware is leather hard rather than freshly thrown?",
          "optionA": "Because leather-hard clay is harder than any trimming tool can cut.",
          "optionB": "Because the wall has firmed enough to hold a foot ring without folding under the loop tool.",
          "optionC": "Because the pot must be fully dry before a loop tool touches it.",
          "optionD": "Because trimming at leather hard removes the need to compress the rim.",
          "correctOption": "B",
          "subConcept": "Leather-hard stage",
          "explanation": "Leather hard is the stage where clay is firm but still contains enough moisture to cut cleanly, so the wall resists the loop tool and the ring holds its shape. Bone-dry clay chips rather than cuts, and freshly thrown walls collapse under the same pressure.",
          "remediationTip": "Learn the three states, plastic, leather hard and bone dry, with what each stage is used for."
        },
        {
          "id": "q-ce-wheel-5",
          "quizId": "quiz-ce-wheel-throwing",
          "questionText": "Which action belongs to the closing routine of a wheel-throwing lesson?",
          "optionA": "Wash the splash pan and wheel head, then dry the head to prevent rust and clear the pedal and motor vents.",
          "optionB": "Leave thrown ware uncovered on the wheel so it dries quickly for the next class.",
          "optionC": "Raise the wheel speed to maximum to spin remaining water off the splash pan.",
          "optionD": "Pile the used ribs in the splash pan so they stay wet and clean.",
          "correctOption": "A",
          "subConcept": "Wheel maintenance",
          "explanation": "Clay build-up on the wheel head stops a bat from seating flat and rust pits the surface, so the head is washed and dried and the vents cleared. Covering ware with a cloth slows and evens drying; tools are stored clean and dry so cutting edges are not damaged.",
          "remediationTip": "Write the four-line closing routine in your sketchbook and tick it off at the end of every practical."
        }
      ]
    }
  },
  {
    "id": "shs2-ce-t1-modelling-sculptural-ceramics",
    "subjectId": "ceramics",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Modelling and Sculptural Ceramics",
    "description": "Modelling and Sculptural Ceramics - solid vs hollow building, armature, wall thickness rule, joining dissimilar forms, hallowing, hollow figures, figurative work in the Ghanaian tradition, firing solid pieces safely. This topic teaches the sculptor's decisions in clay: how much mass to leave, where to put an armature, how to hollow a form, and how to get a thick piece through the bisque firing intact.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Modelled clay works on one law: moisture must leave at an even rate. Where a thick member joins a thin one, the thin part dries and shrinks first and the join tears. Uniform thickness is therefore the first rule of ceramic sculpture.\n• Solid building is additive: pinch, coil, slab and press clay onto the growing form, blending every join with a modelling tool. It is honest for small work and for study pieces, but no solid section should exceed about 20 mm of clay.\n• Hollow building is shell construction: build walls 6-10 mm thick over a core or in slabs, leaving an opening through which the inside can be reached and through which air can escape in the kiln.\n• Hallowing (shelling out) is done at leather hard with a ribbon or hallowing tool: cut the interior back to an even wall, working from the base upward, and remove the core or sand packing in fragments rather than prying the whole form open.\n• A sealed hollow form is a firing hazard. Every enclosed cavity needs a vent hole of about 10-15 mm, usually hidden at the base or in a fold, so expanding air and steam escape during the bisque ramp.\n• Armatures inside clay must be clay. Use bisqued clay bars, the supports potters call dogs, or grogged clay ribs. Bare copper wire melts around 1085 °C and rusts before that; timber dowels burn out and leave a void that weakens the joint.\n• Grogged clay is the sculptor's body: 20-40 % grog reduces shrinkage, gives strength for overhanging arms, necks and tails, and lets a limb hold its own weight while still plastic.\n• Joining dissimilar forms: score both faces to a rough toothbrush texture, wet with slip, press together, then compress the join outward with a rib so the two bodies interlock. A scored join that is only stuck, never compressed, will separate in drying.\n• Match dryness when joining where you can: plastic to plastic, leather hard to leather hard. Paper clay, with cellulose fibre worked in, is the exception that bonds bone-dry to wet reliably.\n• Hollow figures save weight and clay: model the outward form solid, allow it to stiffen, then cut open, hollow to an even wall, and weld the panel back with score, slip and compression, or build two mirror halves and join them at a planned seam line.\n• Ghanaian figurative clay work is a real tradition: animal-form water vessels, commemorative portrait pots and shrine figures from the potting settlements of Agojuve, Shai-Ya-Ya and the Krobo area, and the small animal forms of the Ashanti gold-weight tradition, all modelled, coiled and burnished rather than thrown.\n• Surface on sculpture is built, not drawn: burnish with a smooth potsherd or spoon at leather hard, add relief with applied coils, or incise through a slip coating, as the Kassena wall builders at Navrongo do with raised and incised plaster relief.\n• Fire thick work gently. Only bone-dry ware enters the kiln; hold the early ramp slow through the 100-200 °C water-smoking band, soak for some time before pushing on, and bisque earthenware sculpture to roughly 1000-1150 °C, near cone 04 at about 1060 °C.\n• Support while it dries: bed the piece on sand, crumpled newspaper or a soft board so no thin limb carries the weight of the mass, and cover it loosely so drying is slow and even over the whole figure.",
    "detailedNotes": {
      "overview": "Sculptural ceramics asks a different question from thrown ware: not how evenly can a wall be pulled, but how much clay can be safely left in a form. This topic takes the SHS 2 student through solid and hollow construction, armatures, the wall thickness rule, the joining of dissimilar forms, hallowing out, and the firing of heavy work. It also locates the skill in a Ghanaian tradition of modelled and coiled figurative ware that long predates the wheel in this country.",
      "introduction": "A modelled piece is a slow argument with water. Clay holds water, and as that water leaves, the clay shrinks by roughly 10-15 %. Wherever the mass is unequal, shrinkage is unequal, and unequal shrinkage produces either a crack or a warp. So the sculptor's craft is mostly bookkeeping: keep thickness even, support overhangs, vent every cavity, and let the piece dry slowly. Get those four right and the fired sculpture is almost certain to survive.",
      "realWorldContext": "Ghana already owns a strong figurative clay tradition, and it is hand-built. The potters of Agojuve on the western edge of Accra and of Shai-Ya-Ya in the Eastern Region coil water pots, and their relatives model bird, animal and human forms for commemorative and shrine use; in the Krobo towns the same hand-building produces tall libation vessels with modelled lids. The Ashanti gold-weight tradition supplies small animal and human silhouettes that ceramic students copy in clay, and at Navrongo the Kassena wall painters build raised and incised relief on the exterior of the house, which is sculpture in a different material but the same additive logic. Students who take a modelled figure to the Accra Arts Centre or the Centre for National Culture in Tamale will find the market judges exactly what the kiln judges: a dry, sound, even-walled surface with no cracked join.",
      "objectives": [
        "Distinguish solid from hollow construction and state when each is appropriate",
        "Apply the wall thickness rule and keep every section of a modelled form within about 20 mm of solid clay",
        "Choose and place a clay armature, and explain why metal wire and timber are unsuitable",
        "Hallow a modelled form at leather hard and leave an adequate vent hole",
        "Join dissimilar forms with scoring, slip and compression, and plan a safe bisque firing for thick work"
      ],
      "sections": [
        {
          "title": "Solid Building and the Additive Principle",
          "content": "Solid modelling means the finished form is clay all the way through. You build by addition: pinch a core, press coils or slabs onto it, then blend every new lump into the old one until the join disappears under the modelling tool. The method is direct and strong for small study pieces, heads under 150 mm, animals, fruit, and maquettes that will later be enlarged. Its limit is mass. Once a section exceeds about 20 mm of solid clay, the outside skins over while the inside still holds water; the shell shrinks on schedule and the wet core does not, and the tension opens a crack, usually at the thinnest point of the piece. For that reason solid work is kept small, or deliberately planned as a thick member attached to a hollow body, and every solid piece is dried slowly under loose covering with the thickest part facing the warmest air.",
          "bulletPoints": [
            "Build by addition and blend every join until no seam is visible under raking light.",
            "Solid sections should stay under about 20 mm; larger masses must be hollowed or cored.",
            "Keep the modelling surface damp under a cloth so new clay bonds to old.",
            "Support overhanging parts on sand or a soft board while the clay is plastic."
          ],
          "keyTakeaway": "Solid modelling is honest only at small scale; mass is what cracks sculpture.",
          "realWorldExample": "A first-year SHS sculptural assignment to model a hand-sized animal in one clay body is deliberately solid, so the student learns blending and reads the crack pattern when a thick haunch dries faster than a thin neck."
        },
        {
          "title": "Armatures, Cores and Grogged Clay",
          "content": "An armature is the internal skeleton that lets clay hold a shape gravity would take away: a raised arm, a long neck, a bird's outstretched tail, a figure standing on one leg. In ceramics the armature must be clay, because everything inside the wall has to shrink and fire at the same rate as the wall around it. Potters use bisqued clay bars, often called dogs, pressed into the body, and grogged clay ribs extruded or hand-rolled into limbs. Grog, which is fired clay crushed and sieved into grades from dust to about 2 mm, is the sculptor's best material: 20-40 % grog cuts shrinkage, gives the body shortness so a rolled coil holds its shape, and lets a limb carry weight while still plastic. What must not go inside is bare copper wire, which melts around 1085 °C and conducts heat into the surrounding clay so that it cracks, timber dowels, which burn out and leave a void, and rusting iron nails, whose oxide expands and pushes the wall open from within.",
          "bulletPoints": [
            "Clay armatures only: bisqued clay bars, grogged ribs, extruded grogged limbs.",
            "Grog 20-40 % reduces shrinkage and gives a short body that holds an overhang.",
            "Never bury bare copper wire (melts near 1085 °C), timber or plain iron in the wall.",
            "Rough and slip the armature before embedding it, so the raw clay can grip it."
          ],
          "keyTakeaway": "Anything inside a clay wall must behave like clay in the kiln, or it destroys the piece.",
          "realWorldExample": "A student modelling a standing figure with one raised arm runs a bisqued clay bar from the torso into the sleeve, exactly as a Tamale potter embeds a fired shard to stiffen the neck of a tall libation vessel."
        },
        {
          "title": "The Wall Thickness Rule and Hollow Figures",
          "content": "The rule reads: make every part of the wall the same thickness, and never let one member dry ahead of another. In thrown ware that means 6-8 mm; in modelled work it means 10-15 mm of shell around a hollow interior, with no pocket of solid clay hiding inside a smooth surface. Hollow figures are therefore built as shells, either by slab construction, where panels are joined at planned seams like a papier-mache figure, or by modeling the form solid, letting it stiffen to leather hard, then hallowing it out. Hallowing, also called shelling out, is cut with a ribbon or hallowing tool through a planned opening, usually the underside or the base, working in even strokes until the interior wall mirrors the exterior. Where a core of sand, paper or soft clay was used to hold the shape, it is broken up and removed in handfuls rather than levered out in one piece, because prying distorts the soft wall. The hollow form must then be vented: a sealed cavity traps air which expands in the heat and turns the piece into a risk, so a hole of about 10-15 mm is left somewhere invisible.",
          "bulletPoints": [
            "Uniform shell of 10-15 mm; no buried solid mass inside a smooth surface.",
            "Hallow at leather hard through a planned opening, mirroring the exterior curve.",
            "Remove sand or paper cores in fragments; levering distorts the soft wall.",
            "Leave a vent hole of about 10-15 mm in every enclosed cavity."
          ],
          "keyTakeaway": "Even thickness plus a vent hole is what carries a hollow figure through the kiln.",
          "realWorldExample": "A hollow modelled drum for a school festival display is shelled out from the underside and vented where the strap would cover the hole, so the piece is light, sound and shows no opening from the front."
        },
        {
          "title": "Joining Dissimilar Forms",
          "content": "Sculpture is assembled from parts that differ in shape, size and often in dryness: a solid head onto a hollow neck, a grogged extruded arm onto a plastic torso, a thrown base under a modelled body. Every such joint is prepared, not merely stuck. Score both faces with a needle, fork or the serrated edge of a modelling tool until the clay is rough and open, then coat both with slip so the surfaces re-plasticise, press them together firmly, and finally compress the join outward from the seam with a rib and the rounded end of a modelling tool so the two clay bodies interlock rather than sit side by side. Compression is the step students skip, and it is the step that decides survival. Where dryness differs, the joint fails through differential shrinkage, so match states where possible, or use paper clay, a body with worked-in cellulose fibre, which bonds bone-dry to wet because the fibre bridges the seam and the paper clay shrinks very little. Thin attachments to a wet wall should be slightly thicker than the wall they meet, and heavy parts must be supported until the join has gained leather-hard strength.",
          "bulletPoints": [
            "Score to an open texture, slip both faces, press, then compress outward from the seam.",
            "Compression, not stickiness, is what earns the joint its strength.",
            "Match dryness where possible; use paper clay to join bone-dry to wet.",
            "Support heavy attachments on sand or a prop until the join stiffens."
          ],
          "keyTakeaway": "A scored, slipped and compressed joint becomes one mass; a pressed-on lump becomes a future crack.",
          "realWorldExample": "Attaching modelled ears to a nearly dry animal head, a student uses paper clay on both contact faces and props the head on crumpled newspaper, because plain slip on a bone-dry ear would lift off overnight."
        },
        {
          "title": "Figurative Work in the Ghanaian Tradition and Firing Solid Pieces Safely",
          "content": "The figurative vocabulary a Ghanaian student inherits is entirely hand-built. Animal-form water vessels and modelled lids from Agojuve, Shai-Ya-Ya and the Krobo towns, the compact animal and human silhouettes of the Ashanti gold-weight tradition, and the raised relief of Kassena wall work at Navrongo all teach additive modelling, burnishing with a smooth potsherd, applied relief and incision through a slip coating. Copying a gold weight in clay is a genuine exercise in the wall thickness rule, because the original is hollow-cast metal with even mass, and the copy must be even or it cracks. Firing heavy work safely is then a matter of patience and reading. The piece must be bone dry before it enters the kiln, which for a thick sculpture may mean a week or more of slow drying, never a warm cupboard that skins the surface. The kiln is then taken slowly through the water-smoking band between about 100 and 200 °C, held with a soak before the quartz inversion at 573 °C is approached, and fired to roughly 1000-1150 °C for earthenware, near cone 04 at about 1060 °C. Solid sections above about 25 mm are the ones that burst, so a piece planned as solid to that depth is either hollowed, cored with grogged clay, or divided into fired sections assembled afterwards.",
          "bulletPoints": [
            "Ghanaian sources: modelled Krobo and Shai-Ya-Ya ware, Ashanti gold-weight silhouettes, Navrongo wall relief.",
            "Burnish with a smooth potsherd or spoon at leather hard, as traditional potters do.",
            "Only bone-dry sculpture enters the kiln; go slow through 100-200 °C and soak before 573 °C.",
            "Bisque earthenware sculpture to about 1000-1150 °C, near cone 04 at about 1060 °C.",
            "Never leave a solid section above about 25 mm; hollow, core or divide it instead."
          ],
          "keyTakeaway": "Study the Ghanaian hand-built tradition for form, then obey the kiln: dry, slow and thin.",
          "realWorldExample": "A class copying an Ashanti gold-weight leopard in clay shells the body out at leather hard and vents the base, because firing the solid copy at the original's thickness would trap water in the haunch and split the piece."
        }
      ],
      "commonMistakes": [
        "Burying copper wire or a timber dowel as an armature, then losing the piece in the bisque: wire conducts heat and melts near 1085 °C, and timber burns out leaving a hollow that weakens the joint.",
        "Leaving a hollow form sealed with no vent hole, so expanding air and steam burst the belly of an otherwise well-modelled figure.",
        "Modeling a thick haunch onto a thin leg and expecting them to dry together; the thin member shrinks first and the join splits along the seam.",
        "Pressing an attachment onto a smooth, unscored surface and calling slip glue: without scoring and compression the added part drops off in the drying stage.",
        "Hallowing freshly plastic clay because the class is in a hurry, so the wall folds, stretches and leaves fingerprints no trimming can remove.",
        "Loading damp sculpture into the kiln to save a day; the steam has nowhere to go and the thick section cracks or bursts on the shelf."
      ],
      "wassceExamTips": [
        "Paper 3 awards marks for handling of materials, so show the examiner a scored, slipped and compressed join and a visible vent hole rather than a clever surface. These are physical evidence of method.",
        "In Paper 2 (design and planning) a sculptural question expects a written construction plan: state where the armature goes, what thickness the wall will be, and how long drying will take before the piece may be fired.",
        "Learn the numbers that carry objective marks on Paper 1: wall 10-15 mm for hollow modelled work, solid sections kept under about 20-25 mm, vent hole 10-15 mm, earthenware bisque range about 1000-1150 °C, cone 04 about 1060 °C.",
        "If a piece cracks in the practical, do not hide the fault. Mount it, label the cause in one line such as differential thickness between limb and body, and describe the remedy; examiners credit appraisal of one's own work.",
        "Quote Ghanaian precedent by name in a written answer. Naming Agojuve, Shai-Ya-Ya, Krobo modelled ware, Ashanti gold weights or Navrongo wall relief shows the examiner that the tradition is understood, not invented.",
        "Bring your own modelling tools with a working edge. A blunt ribbon tool tears leather-hard clay instead of shaving it, and the ruined surface costs the finish mark."
      ],
      "summaryChecklist": [
        "Can I explain why solid modelling is limited to sections of about 20 mm or less?",
        "Can I choose a clay armature and justify rejecting wire and timber?",
        "Can I hallow a modelled form at leather hard and place a vent hole correctly?",
        "Can I join two dissimilar forms with scoring, slip and compression in the right order?",
        "Can I plan a safe drying and bisque routine for a thick sculptural piece?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-sculptural-modelling-1",
        "title": "Building a Hollow Modelled Bird Vessel with an Armature",
        "problem": "Model a standing bird about 300 mm high with a closed body cavity, a raised neck and a tail that projects behind it. Plan the construction so the piece dries and fires without cracking.",
        "stepByStepSolution": [
          "Step 1 (M1): Make the body from grogged clay, 20-40 % grog, so the mass holds its shape while still plastic and shrinks less in drying.",
          "Step 2 (M1): Bed a bisqued clay bar armature into the body core and run it up into the neck and back into the tail, roughing and slipping the bar before it is buried.",
          "Step 3 (M1): Build the neck by additive coils around the armature and the tail as a separate grogged slab, scoring, slipping and then compressing each join outward with a rib.",
          "Step 4 (M1): Allow the form to stiffen to leather hard, then hallow the body through the underside with a ribbon tool, cutting an even 10-15 mm shell that mirrors the outside curve.",
          "Step 5 (M1): Cut a vent hole of about 10-15 mm in the hollowed base so expanding air and steam can leave during the bisque firing.",
          "Step 6 (A1): Blend every seam until none is visible under raking light, then burnish the surface with a smooth potsherd, as traditional Ghanaian potters do.",
          "Step 7 (A1): The finished answer is a 300 mm bird with an even-walled hollow body, a supported neck and tail, a hidden vent hole and a burnished surface, dried slowly and bone dry before kiln loading."
        ],
        "keyTakeaway": "Armature, even shell and vent hole are the three decisions that save a hollow modelled figure."
      },
      {
        "id": "ex-ce-sculptural-modelling-2",
        "title": "Assembling a Solid Head onto a Hollow Torso",
        "problem": "A modelled head has been built solid and is bone dry, while the hollow torso is still leather hard. Join the two so the neck survives drying and bisque firing.",
        "stepByStepSolution": [
          "Step 1 (A1): Check the neck joint for thickness; the wall where the parts meet must be about 10-15 mm on both sides, with no buried solid mass under the shoulder.",
          "Step 2 (M1): Score the seating face of the torso and the base of the head with a needle until both are rough and open rather than smooth.",
          "Step 3 (M1): Mix paper clay with worked-in cellulose fibre and use it as the joining material, because paper clay bonds bone-dry clay to wet clay with very little shrinkage of its own.",
          "Step 4 (M1): Pack paper clay onto both scored faces, press the head home firmly, then compress outward from the seam with a rounded modelling tool so the two bodies interlock.",
          "Step 5 (M1): Strip away the surplus clay squeezed out at the seam and support the head on a roll of soft clay or a sandbag until the join gains leather-hard strength.",
          "Step 6 (M1): Confirm the hollow torso still carries its vent hole before the piece is dried slowly under loose covering.",
          "Step 7 (A1): The finished answer is a head fused to a hollow torso with no visible seam, an even wall at the join and a vented body, ready for a slow bisque to about 1000-1150 °C."
        ],
        "keyTakeaway": "Where dryness differs, paper clay plus scoring plus compression is the only reliable join."
      }
    ],
    "quiz": {
      "id": "quiz-ce-sculptural-modelling",
      "topicId": "shs2-ce-t1-modelling-sculptural-ceramics",
      "title": "Sculptural Ceramics Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-sculpture-1",
          "quizId": "quiz-ce-sculptural-modelling",
          "questionText": "Why must every enclosed cavity in a hollow clay figure carry a vent hole?",
          "optionA": "So that glaze can be brushed on inside the cavity.",
          "optionB": "So that the figure will be lighter to carry to the kiln.",
          "optionC": "So that expanding air and steam can escape during firing instead of bursting the form.",
          "optionD": "So that the figure can dry evenly when left on the shelf.",
          "correctOption": "C",
          "subConcept": "Hollow forms and venting",
          "explanation": "A sealed cavity traps air and steam which expand as the kiln climbs, and the pressure splits the thinnest part of the wall. Venting is a firing safety measure, not a drying or glazing convenience, and lightness is a general advantage of hollowing rather than the reason for the hole.",
          "remediationTip": "Before covering any opening in a sculpture, ask what will happen to the air inside it at 1000 °C."
        },
        {
          "id": "q-ce-sculpture-2",
          "quizId": "quiz-ce-sculptural-modelling",
          "questionText": "Which armature material is suitable inside a clay sculpture that will be bisque fired?",
          "optionA": "Soft copper wire bound in several loops.",
          "optionB": "A bisqued clay bar bedded into the body.",
          "optionC": "A dry timber dowel pegged through the joint.",
          "optionD": "A galvanised iron nail driven along the limb.",
          "correctOption": "B",
          "subConcept": "Armatures",
          "explanation": "A bisqued clay bar shrinks and fires with the surrounding body, so it strengthens without destroying. Copper wire melts around 1085 °C and conducts heat into the clay, timber burns out leaving a void, and galvanised or iron fittings rust and their oxide expands, pushing the wall open.",
          "remediationTip": "Remember the rule that anything buried in clay must behave like clay in the kiln."
        },
        {
          "id": "q-ce-sculpture-3",
          "quizId": "quiz-ce-sculptural-modelling",
          "questionText": "The wall thickness rule in ceramic sculpture requires that",
          "optionA": "every part of the work is kept to a uniform thickness, with solid sections under about 20 mm.",
          "optionB": "limbs are left thicker than the trunk so they will not break off.",
          "optionC": "the whole figure is built solid to give it weight and strength.",
          "optionD": "the thickest clay is placed at the head where detail is needed.",
          "correctOption": "A",
          "subConcept": "Wall thickness rule",
          "explanation": "Unequal thickness means unequal drying and shrinkage rates, and the faster-drying member tears the join. Thick limbs or a thick head are the classic failure points; a figure built solid throughout is limited to small scale for the same reason.",
          "remediationTip": "Cut a test piece in half after drying and study where the crack started relative to thickness."
        },
        {
          "id": "q-ce-sculpture-4",
          "quizId": "quiz-ce-sculptural-modelling",
          "questionText": "Which sequence correctly joins an applied coil arm to a torso?",
          "optionA": "Dust both faces with dry grog, press together and paint the seam with slip.",
          "optionB": "Slip a smooth torso face, lay the coil on it and leave the join uncompressed.",
          "optionC": "Weld the two parts with a hot modelling tool, then score the surface.",
          "optionD": "Score both faces, wet with slip, press together, then compress outward from the seam with a rib.",
          "correctOption": "D",
          "subConcept": "Joining clay parts",
          "explanation": "Scoring opens the surface, slip re-plasticises it, pressure joins the bodies and compression interlocks them into one mass. A smooth face with slip only is a stuck joint, and clay cannot be welded by heat the way metal can.",
          "remediationTip": "Practise the four words in order on a scrap: score, slip, press, compress."
        },
        {
          "id": "q-ce-sculpture-5",
          "quizId": "quiz-ce-sculptural-modelling",
          "questionText": "A modelled figure has been fired and a thick haunch has burst while the thin neck is unharmed. The most likely cause is",
          "optionA": "the glaze was applied too thin over the haunch.",
          "optionB": "the neck was supported on a sandbag during drying.",
          "optionC": "the haunch was left as a solid mass beyond the safe thickness and the piece was not bone dry.",
          "optionD": "the kiln was fired to a temperature near cone 04.",
          "correctOption": "C",
          "subConcept": "Firing solid pieces safely",
          "explanation": "Thick solid clay holds water longest, and steam driven from within a damp mass bursts the piece while thin, fully dry clay survives. Cone 04 at about 1060 °C is a normal earthenware bisque temperature, and a supported neck is correct procedure rather than a fault.",
          "remediationTip": "Plan mass at the modelling stage: hollow or core anything that will read thicker than about 25 mm."
        }
      ]
    }
  },
  {
    "id": "shs2-ce-t2-slip-casting-plaster-moulds",
    "subjectId": "ceramics",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 3,
    "title": "Slip Casting and Plaster Piece Moulds",
    "description": "Slip Casting and Plaster Piece Moulds - casting slip recipe and sieving, mould making, mixing and pouring plaster, waxing, assembly, casting time, draining, deflashing, mould drying and reuse, handles and press moulds. This topic takes the student from a master form to a repeatable set of identical thin-walled castings, and covers the mould care that keeps a plaster piece working for fifty casts or more.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Slip casting is the production method of ceramics: one master form, one plaster mould, and as many identical thin-walled castings as the mould will yield. Wall thickness is even by nature, usually 5-8 mm, which is why mugs, jars and sanitary ware are cast rather than thrown.\n• Casting slip is a deflocculated clay suspension: about 100 parts by weight of dry casting clay to 30-35 parts water and roughly 0.3 part deflocculant such as sodium silicate or Darvan. Deflocculants make the particles repel each other, so far less water is needed and the cast firms quickly.\n• Test the slip with a hydrometer. Casting slip should read about 1.70-1.75 specific gravity against water at 1.00. Too thin and the cast is soft and sticks; too thick and it will not run into the detail of the mould.\n• Sieve every slip through a 60-80 mesh sieve before pouring, and sieve the returned slip back into the bucket as well, because plaster crumbs and lumps block the surface of the mould.\n• Plaster for moulds is calcined gypsum, sold as mould or casting plaster. Mix roughly 100 parts plaster to 60 parts water by weight: for 5 kg of plaster use 3 litres of water. More water gives an easier pour but a softer, shorter-lived mould.\n• Sprinkle the plaster into clean water, never pour water onto plaster. Let it slake for a minute or two, stir gently to break the lumps, then tap the container to release the air bubbles that would otherwise print craters on the mould face. Setting is warm work: the mould peaks around 40-50 °C and separates safely when it cools again, roughly 20-40 minutes after pouring.\n• Build the mould around the master on a flat board with a clay or timber dam. Set a parting line at the widest profile of the form and press clay keys or mould marks into the dam so the halves will always locate in exactly the same position.\n• A two- or three-piece piece mould is poured one face at a time: cast the first face, let it set, wax or soap the face, roll it over, rebuild the dam and cast the second face, then cut the gating and pouring spout into the plaster.\n• Wash the finished mould with two or three thin coats of soap or shellac wash coat, drying between coats, and wax every face before each casting run. Unwaxed plaster grips the clay skin of the cast and tears the piece when it is turned out.\n• Assemble the pieces so the keys seat fully, then bind the mould with rubber bands, string, plaster bandage or clamps before any slip is poured. A leaking joint throws a fat fin of clay across the casting and wastes the cast.\n• Casting time sets the wall. The cast grows inward at roughly 1 mm for every 2-3 minutes of dwell, so about 12-18 minutes gives a 6 mm wall. Pour the slip until the mould is full, hold it for the timed dwell, then drain the excess back through the sieve.\n• Draining is the moment of decision: tip the mould to pour out the still-liquid centre, leave it standing for another 15-30 minutes so the cast firms to leather hard, then strip the bindings and open the mould.\n• Deflash while the cast is leather hard: lay a sharp blade flat and trim the thin fin along every joint line, then blend the seam with a damp sponge. Bone-dry flash chips and takes the surface with it.\n• Handles are cast or slab-formed in an open-faced bar or oval press mould, then attached at both ends by scoring, slipping and compressing. A shallow press mould or hump mould takes a rolled slab and makes plates, medallions, badges and shallow dishes in seconds.\n• Dry the mould between casts at room temperature or in a cupboard at 40-50 °C. Above about 60 °C plaster loses its set water and crumbles, so a hot cupboard destroys an expensive mould. Keep records: a well-kept mould gives fifty to a hundred casts before the face blocks up.\n• Plaster never goes down a sink drain. It settles, re-sets and blocks the pipe; scrape dried plaster into the waste bin and wash tools in a separate bucket.",
    "detailedNotes": {
      "overview": "This lesson is the industrial half of the SHS 2 ceramics workroom. Casting turns one thrown or modelled master into a repeatable article, and it is the route by which a school workroom can answer an order for thirty identical mugs. The student must learn three separate skills: making a sound casting slip, making and caring for a plaster piece mould, and controlling the cast itself through dwell time, draining and deflashing.",
      "introduction": "Slip casting works because plaster is porous. When deflocculated slip touches a dry plaster face, the plaster draws water out of the slip by capillary suction and a skin of firm clay builds up against the mould. The longer the slip stays in contact, the thicker that skin becomes, so thickness is bought with time, not with pressure. Everything else in this topic follows from that single fact: why slip must be correctly mixed, why a mould must be dry and waxed, why the excess is drained away, and why the seam is cut while the clay is still leather hard.",
      "realWorldContext": "Casting is what turns clay into stock. A Kumasi studio filling a hotel order for identical cups and saucers cannot throw two hundred of them by hand in a week, so it casts them from piece moulds, adds slab-formed handles and fires the batch in one kiln load. School use is the same on a smaller scale: cast plaster is used to reproduce an adinkra relief or a school crest as a wall plaque, and shallow press moulds make the badges, tiles and memorial plaques bought at the Accra Arts Centre and at the craft villages around Cape Coast. Sanitary ware and filter shapes in Ghanaian building supply are slip cast, and potters at Agojuve and Shai-Ya-Ya who take a repeated order for a single water-pot shape will copy it into a plaster press mould so the second, tenth and fiftieth pot match.",
      "objectives": [
        "Mix casting slip to a stated deflocculation ratio and test it with a hydrometer for specific gravity 1.70-1.75",
        "Mix and pour plaster at roughly the 100 to 60 ratio using the sprinkle-into-water method, and state why air must be removed",
        "Build a two- or three-piece mould with a parting line, keys and gating around a master form",
        "Control cast wall thickness by dwell time, then drain, after-set and deflash the casting correctly",
        "Dry, wax and store a mould between casts and produce attached handles and press-moulded slabs"
      ],
      "sections": [
        {
          "title": "Casting Slip: Recipe, Deflocculation, Testing and Sieving",
          "content": "Casting slip is not throwing clay thinned with water. It is a deflocculated suspension in which an electrolyte, commonly sodium silicate or a commercial product such as Darvan, gives every clay particle the same electrical charge so the particles push one another apart. The result is a fluid that pours like thin cream while containing far less water, usually about 100 parts by weight of dry casting clay to 30-35 parts water with roughly 0.3 part deflocculant. Because there is little water, the plaster can draw it out fast and the cast firms cleanly. Measure the outcome rather than trusting the look of it: a hydrometer should read about 1.70-1.75, with water at 1.00. A reading below that means too much water, giving a soft, sticky cast that clings to the mould; a reading above it means a stiff slip that will not fill fine detail and leaves hollows at the corners. Cast clay itself is chosen for suspension, so a blend of ball clay and china clay with a little added silica is typical, and grog is never used. Finally sieve everything through 60-80 mesh, both the fresh slip and the slip you pour back, because a single plaster crumb will print a pit into every subsequent cast.",
          "bulletPoints": [
            "Standard ratio: 100 dry casting clay : 30-35 water : about 0.3 deflocculant by weight.",
            "Hydrometer reading 1.70-1.75 is the working test; water alone reads 1.00.",
            "Ball clay and china clay are used for suspension; grogged bodies are not cast.",
            "Sieve through 60-80 mesh before pouring and again when returning drained slip.",
            "Keep the slip bucket stirred, because settled slip thickens unevenly."
          ],
          "keyTakeaway": "Deflocculation gives a slip that is fluid but watery-poor, and the hydrometer is the only honest check.",
          "realWorldExample": "A workroom mixing 10 kg of dry casting clay at the standard ratio weighs out 3.2 litres of water and 30 g of deflocculant, then adjusts with water until the hydrometer settles at 1.72 before any mould is filled."
        },
        {
          "title": "Mixing Plaster and Making a Piece Mould",
          "content": "Mould plaster is calcined gypsum, and the mixing ratio is a trade between workability and strength. Around 100 parts plaster to 60 parts water by weight is the standard for a casting mould, so 5 kg of plaster goes into 3 litres of water; a wetter mix pours more easily and traps fewer bubbles but dries soft and wears out in a dozen casts. The method matters as much as the ratio: switch off the draught, sprinkle the plaster into clean water and let it slake for a minute or two until the powder sinks, then stir gently and deliberately to break the lumps. Violent stirring whips air in, and every bubble that reaches the mould face prints a crater, so tap the container or let the cream stand until the bubbles rise and pop. To make a piece mould, stand or bed the master form on a flat board, build a dam of clay or timber around it, mark a parting line at the widest profile of the shape and press clay keys into the dam so the halves can only go together one way. Pour plaster against the first face, let it set, then roll the work over, rebuild the dam, wax the plaster face and pour the second face. Setting is exothermic: the mould heats to roughly 40-50 °C and is ready to separate when it cools again, usually 20-40 minutes after pouring.",
          "bulletPoints": [
            "Mix about 100 plaster : 60 water by weight; 5 kg plaster to 3 litres of water.",
            "Sprinkle plaster into water, let it slake, stir gently, then tap out the air.",
            "Set a parting line at the widest profile and press locating keys into the dam.",
            "Pour piece moulds one face at a time, waxing the set face before the second pour.",
            "Do not separate too early: the plaster is set when the heat of setting has passed."
          ],
          "keyTakeaway": "Ratio, gentle mixing and a clean parting line decide whether the mould will release a sound casting.",
          "realWorldExample": "A class making a two-piece mould around a thrown cylindrical cup buries the cup halfway in clay on the board so the parting line runs exactly around the widest diameter, and cuts a spout into the top of the plaster for the pour."
        },
        {
          "title": "Waxing, Assembly and Gating",
          "content": "A new mould is finished, not poured. Its surface is first washed with two or three thin coats of soap or shellac wash coat, drying between coats, so that the very porous outer skin of the plaster is sealed and will not grab the clay. Before each casting run the faces are then dusted and waxed with a mould wax, worked in and buffed. A mould that is skipped at this stage will hold the casting, tear the clay skin as it is turned out and leave the piece thin in one place and heavy in another. Gating comes next: the pour opening, the runner and, on larger work, a vent, are cut as channels into the plaster so full slip reaches every part of the cavity and air can get out of it. Without a vent the trapped air compresses and the corner of the casting fills only partially, producing a hollow that only appears when the piece is drained. Assembly is the last discipline before the pour: seat every key fully, wipe the joint faces clean of clay dust, and bind the mould with rubber bands, string, plaster bandage or metal clamps, then stand it on a board where it will not be knocked. A joint that leaks during casting throws a wide fin of clay, wastes the batch and adds deflashing work that leaves a visible seam.",
          "bulletPoints": [
            "Seal a new mould with 2-3 thin wash coats, then wax every face before each run.",
            "Cut pour spout, runner and vent so slip fills the cavity and air escapes.",
            "Seat all keys and clean the joint faces before binding.",
            "Bind with bands, string, plaster bandage or clamps and set the mould on a stable board.",
            "A leaking joint costs the cast and leaves a permanent seam line."
          ],
          "keyTakeaway": "Wax, gate and bind: three quiet operations that decide whether the cast releases cleanly.",
          "realWorldExample": "A studio casting lidded jars wax the moulds at the start of every morning, because a mould that has been drying overnight grips hardest and the first cast of the day is the one most likely to tear."
        },
        {
          "title": "Casting Time, Draining and Deflashing",
          "content": "Pour the slip into the assembled mould until it is full, then start timing. The wall builds against the plaster at roughly 1 mm for every 2-3 minutes of dwell, so a 6 mm mug wall takes about 12-18 minutes and a thicker vessel proportionally longer; the level visibly falls as the plaster drinks, and that ring line at the mould neck is a good indicator of progress. When the time is up, drain: tip the mould and pour the still-liquid centre back into the bucket through the sieve, tapping the mould gently so the last of the slip runs out and the interior of the casting is left clean and hollow. The mould is then stood aside for a further 15-30 minutes of after-setting, during which the cast loses more water to the plaster and stiffens to leather hard, shrinking slightly away from the mould face so it can be released without force. Strip the bindings, prise the pieces apart with the hands rather than a lever, and ease the casting out. Deflashing follows immediately while the clay is still cuttable: lay a sharp blade flat against the surface and trim away the thin fin raised along every joint line, then blend the seam with a damp sponge or a soft rib. Attempt the same cut at bone dry and the fin chips, taking good clay with it and leaving a pale scar on the finished piece.",
          "bulletPoints": [
            "Wall thickness is bought with dwell time: roughly 1 mm per 2-3 minutes.",
            "Drain the excess slip back through the sieve and tap the mould clear.",
            "Allow 15-30 minutes of after-setting so the cast reaches leather hard inside the mould.",
            "Open the mould by hand; levering cracks a soft casting.",
            "Deflash flat-bladed while leather hard, then blend the seam with a damp sponge."
          ],
          "keyTakeaway": "Time in the mould sets the thickness, and the flash is cut soft or it is cut forever.",
          "realWorldExample": "A student casting a batch of twelve identical cups leaves the first mould for fourteen minutes as a timing trial, measures the drained wall with calipers, and adjusts the rest of the batch to hold a 6 mm specification."
        },
        {
          "title": "Handles, Press Moulds and Mould Drying and Reuse",
          "content": "Two forms of added ware complete the casting lesson. Handles are made in a simple open-faced bar or oval press mould: a rolled slab of clay is pressed into the plaster channel, the excess cut away, and the cast handle is lifted when stiff; both ends are then scored, slipped and compressed onto the vessel, and the join is blended with a damp tool so no seam remains. Because a handle carries the whole weight of a full cup, its clay must be the same thickness as the body, and the attach points must overlap the wall generously. A press mould, sometimes called a hump or flat mould, is a single shallow plaster form: press a slab or ball of clay into it and you have a plate, badge, medallion or shallow dish with the relief already in it, which is how school crests and adinkra plaques are repeated cheaply. Mould care then decides the economics. After a cast is drained, the plaster is full of the water it absorbed and must dry before it can work again: room temperature in a draught-free shelf is safest, or a drying cupboard held at 40-50 °C. Above roughly 60 °C the set plaster loses its combination water and turns to powder, so a hot cupboard destroys an expensive tool in one afternoon. Blocked faces are scrubbed with a dry stiff brush, never washed to sogginess, and every mould should be logged by cast count, since fifty to a hundred casts from one well-kept mould is the normal expectation.",
          "bulletPoints": [
            "Cast handles in an open bar or oval press mould, then score, slip and compress both attach points.",
            "Handle clay must match wall thickness; blend the join until no seam shows.",
            "A hump or flat press mould repeats plates, badges, crests and relief plaques from a slab.",
            "Dry moulds at room temperature or 40-50 °C; above about 60 °C plaster crumbles.",
            "Log cast numbers per mould and brush blocked faces dry rather than soaking them."
          ],
          "keyTakeaway": "Casting only pays when the mould is dried, waxed and counted between runs.",
          "realWorldExample": "A workroom casting a run of mugs for a school fete writes the cast number in pencil on the mould rim each time, and retires the mould at seventy casts when the interior face stops drawing water quickly."
        }
      ],
      "commonMistakes": [
        "Pouring water onto plaster instead of sprinkling plaster into water, which produces a lumpy cream no amount of stirring will clear.",
        "Casting with slip whose hydrometer reading is far below 1.70, so the wall stays soft, sticks to the unwaxed mould and tears on opening.",
        "Opening the mould before the after-set, when the cast is still plastic: the piece slumps, the sharp edge of a handle flattens and the detail is lost.",
        "Skipping the wax or wash coat on a new mould and then blaming the plaster for a casting that comes out patched and thin.",
        "Deflashing bone-dry clay with a knife held on edge, which chips the fin and leaves a pale scar along the seam line of the finished piece.",
        "Rinsing plaster tools or leftover slip down the basin; the gypsum settles in the trap, re-sets and blocks the drain for the whole workroom.",
        "Drying a mould beside a kiln or in a cupboard above 60 °C to save time, so the plaster loses its set and powders at the joint faces."
      ],
      "wassceExamTips": [
        "Paper 3 (practical) frequently offers slip casting as an alternative to throwing. Choose it when the question demands a set of matching articles, because a mould gives identical pieces and identical pieces score for accuracy of finish.",
        "Examiners look for the sequence and record it: waxed and bound mould, full pour, timed dwell, drained through a sieve, after-set, deflashed soft. A casting presented with its seam fin uncut loses the finish mark.",
        "On Paper 1 memorise the numbers that carry the objective marks: plaster at about 100 to 60 by weight, slip specific gravity 1.70-1.75, 60-80 mesh sieve, wall 5-8 mm, drying cupboard 40-50 °C.",
        "Paper 2 (design and planning) may ask for a production plan for a stated quantity. Write it as a table: mould made and dried, first cast trial, timing adjustment, batch casts, handle attaching, deflashing, drying, glazing and firing windows.",
        "Define terms in one clean line when asked: deflashing is the trimming of thin clay fins along the mould joint lines; gating is the cutting of the pour opening, runner and vents into the plaster.",
        "State one safety point wherever the question mentions plaster or kilns: keep plaster out of drains, and wear protection when sanding or mixing dry gypsum dust."
      ],
      "summaryChecklist": [
        "Can I mix casting slip to the deflocculated ratio and prove it with a hydrometer reading?",
        "Can I mix and pour plaster at about 100 to 60 without trapping air?",
        "Can I set a parting line, cutting keys and gating for a two-piece mould?",
        "Can I time a cast to a stated wall thickness, then drain and after-set it correctly?",
        "Can I deflash a leather-hard casting, attach a cast handle and dry a mould for reuse?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-slip-casting-1",
        "title": "Mixing Casting Slip and Casting a 6 mm Cup Wall",
        "problem": "A workroom must cast twelve cups of identical 6 mm wall thickness. Mix a casting slip from 10 kg of dry casting clay and state the dwell time and after-treatment needed to hold that specification.",
        "stepByStepSolution": [
          "Step 1 (M1): Weigh 10 kg of dry casting clay and add 3.2 litres of water at the standard 100 : 32 ratio, with 30 g of deflocculant, which is 0.3 % of the dry weight.",
          "Step 2 (M1): Stir to a smooth cream, leave it to stand, then sieve the whole quantity through a 60-80 mesh sieve into the working bucket.",
          "Step 3 (M1): Read the slip with a hydrometer and adjust with small amounts of water until it settles between 1.70 and 1.75 specific gravity.",
          "Step 4 (M1): Wax the assembled and bound mould, pour slip until the mould is full and start the clock.",
          "Step 5 (M1): Hold the slip in the mould for 12-18 minutes, the dwell that builds a wall of about 6 mm at roughly 1 mm per 2-3 minutes.",
          "Step 6 (M1): Drain the excess slip back through the sieve, tap the mould clear, leave it a further 15-30 minutes to after-set, then open it by hand and deflash every joint line with a flat blade while the cast is leather hard, blending the seams with a damp sponge.",
          "Step 7 (A1): The finished answer is twelve cups of even 6 mm wall measured with calipers at rim and base, free of seam fins, hollows and sponge scars, ready for drying and glazing."
        ],
        "keyTakeaway": "Wall thickness is a timing decision, and the hydrometer plus the clock are the two instruments that control it."
      },
      {
        "id": "ex-ce-slip-casting-2",
        "title": "Making a Two-Piece Plaster Mould for a Straight-Sided Cup",
        "problem": "Plan the making of a two-piece piece mould around a thrown straight-sided cup used as the master, and state the checks that prove the mould is ready to cast.",
        "stepByStepSolution": [
          "Step 1 (M1): Level the master by bedding the cup in clay on a flat board so it stands truly upright and cannot float when plaster is poured.",
          "Step 2 (M1): Build a clay dam close around the cup, mark a parting line at the widest profile and run it level around the form, then press two or three locating keys into the dam wall and record their positions so the halves can only close one way.",
          "Step 3 (M1): Mix 5 kg of mould plaster into 3 litres of water at the 100 : 60 ratio by sprinkling plaster into water, slaking, stirring gently and tapping out the air.",
          "Step 4 (M1): Pour against the first face, let the heat of setting peak near 40-50 °C and pass off, then roll the work over, rebuild the dam and pour the second face.",
          "Step 5 (M1): Demould, cut the pour spout, runner and a vent, trim the mould edges square, then wash the faces with 2-3 thin soap or shellac coats, drying between them.",
          "Step 6 (A1): Dry the mould to constant weight at room temperature or 40-50 °C and prove it is ready by test-casting one cup and measuring its wall with calipers.",
          "Step 7 (A1): The finished answer is a dry, waxed, keyed two-piece mould whose keys close fully, whose parting line sits at the widest profile and whose first cast releases undamaged with an even wall."
        ],
        "keyTakeaway": "A mould is judged by three things: a parting line at the widest profile, keys that close fully and a face dry enough to draw water."
      }
    ],
    "quiz": {
      "id": "quiz-ce-slip-casting",
      "topicId": "shs2-ce-t2-slip-casting-plaster-moulds",
      "title": "Slip Casting Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-slipcast-1",
          "quizId": "quiz-ce-slip-casting",
          "questionText": "Which is the correct method of mixing mould plaster?",
          "optionA": "Pour water onto the dry plaster in the bucket and stir hard.",
          "optionB": "Sprinkle the plaster into measured water, let it slake, then stir gently and tap out the air.",
          "optionC": "Add plaster and water together in one movement and leave the mix unstirred.",
          "optionD": "Use as much water as possible so the plaster pours like thin milk.",
          "correctOption": "B",
          "subConcept": "Plaster mixing",
          "explanation": "Sprinkling plaster into water lets each particle coat and slake, giving a lump-free cream, and gentle stirring plus tapping releases the air that would otherwise crater the mould face. Pouring water on plaster balls it up, and an excess of water leaves a soft, short-lived mould.",
          "remediationTip": "Rehearse the dust-free method with a small test bucket before mixing for a real mould."
        },
        {
          "id": "q-ce-slipcast-2",
          "quizId": "quiz-ce-slip-casting",
          "questionText": "A hydrometer reading suitable for casting slip used in plaster piece moulds is about",
          "optionA": "1.02.",
          "optionB": "1.15.",
          "optionC": "1.40.",
          "optionD": "1.72.",
          "correctOption": "D",
          "subConcept": "Specific gravity of casting slip",
          "explanation": "Deflocculated casting slip reads roughly 1.70-1.75, with pure water at 1.00. Readings near 1.02-1.40 mean far too much water, giving a slow, soft cast that sticks to the mould, which is why thin slurry is rejected rather than adjusted.",
          "remediationTip": "Test every fresh batch with the hydrometer before a mould is filled, and record the reading in the workroom log."
        },
        {
          "id": "q-ce-slipcast-3",
          "quizId": "quiz-ce-slip-casting",
          "questionText": "In slip casting, the thickness of the cast wall is controlled mainly by",
          "optionA": "how thick the slip is when it is poured in.",
          "optionB": "the temperature of the plaster mould face.",
          "optionC": "the length of time the slip is left in contact with the mould.",
          "optionD": "the number of wax coats applied to the mould.",
          "correctOption": "C",
          "subConcept": "Casting time",
          "explanation": "Plaster draws water from the slip continuously, so the firm skin grows inward at roughly 1 mm per 2-3 minutes; dwell time therefore sets thickness. Slip quantity, mould warmth and wax coats affect the pour and release, not the finished wall.",
          "remediationTip": "Time a trial cast, measure the drained wall with calipers and build a personal minutes-per-millimetre table."
        },
        {
          "id": "q-ce-slipcast-4",
          "quizId": "quiz-ce-slip-casting",
          "questionText": "Deflashing in slip casting refers to",
          "optionA": "trimming away the thin clay fins raised along the mould joint lines while the cast is leather hard.",
          "optionB": "draining the unused slip back into the storage bucket.",
          "optionC": "cutting the pour spout and vents into the freshly set plaster.",
          "optionD": "scraping the dried clay film from the mould face after each cast.",
          "correctOption": "A",
          "subConcept": "Deflashing",
          "explanation": "The seam of a piece mould leaves a fin of clay on the casting, and deflashing is the flat-blade trimming of those fins at leather hard, before the clay chips. Draining, gating and mould cleaning are three different operations with their own names.",
          "remediationTip": "Learn the casting vocabulary as matched pairs: gating, draining, after-setting, deflashing, waxing."
        },
        {
          "id": "q-ce-slipcast-5",
          "quizId": "quiz-ce-slip-casting",
          "questionText": "Why must a plaster mould be dried between casts, and at what temperature?",
          "optionA": "To harden the plaster surface, using a cupboard at about 90 °C.",
          "optionB": "To restore its ability to absorb water, keeping the drying temperature between 40 and 50 °C.",
          "optionC": "To sterilise the mould, by holding it at about 120 °C for an hour.",
          "optionD": "To lighten the mould, by drying it in full sun on the workroom roof.",
          "correctOption": "B",
          "subConcept": "Mould drying and reuse",
          "explanation": "A mould that has just been drained is saturated and can draw no more water from the next slip, so it must dry out. Gentle heat at 40-50 °C is enough; near 90-120 °C the set gypsum loses its combination water and the mould powders and fails.",
          "remediationTip": "Judge a mould by weight and coolness: a damp one feels heavy and cold and casts slowly."
        }
      ]
    }
  },
  {
    "id": "shs2-ce-t2-glazing-techniques",
    "subjectId": "ceramics",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 4,
    "title": "Glazing: Preparation and Application",
    "description": "How a glaze is built from silica, flux and alumina, why lead is banned on food ware, how to mix and measure a dipping glaze, and how to apply it by brush, dip, pour or spray so it fits the pot without crazing.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A glaze is a thin glass coating fused to the pot surface; it is made from three jobs: SILICA (the glass former, quartz/sand), FLUX (melts the silica at a lower temperature), ALUMINA (the stiffener that stops the molten glaze running off a vertical wall).\n• Common fluxes: feldspar, whiting (calcium carbonate), dolomite, talc, boron frits; alumina usually arrives inside the feldspar and the clay (kaolin/ball clay) in the recipe.\n• LEAD WARNING: lead carbonate and lead oxide are cheap, brilliant fluxes but they are POISONOUS and can leach from a surface into food and drink; never use a lead glaze on a bowl, cup or any functional ware, and never let learners handle raw lead glaze.\n• A mixed dipping glaze is checked with a hydrometer for SPECIFIC GRAVITY, about 1.4 to 1.5 on clean bisque ware; too thin gives a pale skin, too thick gives running and crawling.\n• Dipping times for a bucket glaze are roughly 2 to 4 seconds per surface; a fast double dip builds an even coat; add a pinch of Epsom salts (magnesium sulfate) to flocculate the slurry so solids stay suspended.\n• Four application methods: BRUSH (two or three coats, thin the first coat), DIP (immersion), POUR (over a large or fixed piece), SPRAY (fine atomised mist, best for even thick coats and gradients).\n• WAX RESIST is painted on the foot ring so the glaze will not fuse the pot to the kiln shelf; the bare clay foot must stay glaze-free.\n• GLAZE FIT means the glaze shrinks and expands with the body; a mismatch causes CRAZING (a fine crackle network) when glaze shrinkage is too great, or SHIVERING when the glaze is under too much compression.\n• Reduce crazing by adding more silica or swapping high-expansion alkali fluxes (soda, potash) for calcium or boron fluxes.\n• TEST TILES are made from the same body, fired to the same cone, showing the glaze thin, thick, and over an impressed mark; label every tile with recipe number and cone.\n• Earthenware glazes mature low (about cone 04, 1060 degrees C); mid-range stoneware glazes reach maturity near cone 6 (about 1222 degrees C); the range cone 04 to cone 6 is the school workroom range.",
    "detailedNotes": {
      "overview": "Glazing is the stage where a fired pot becomes finished ware: waterproof, easy to clean, and coloured or glossy to the eye. A glaze is not paint laid on cold clay but a glass recipe that must melt at the right temperature and then grip the body without cracking or flaking. This topic teaches how the recipe is assembled from silica, flux and alumina, how a bucket glaze is mixed, tested and measured, how it is laid on with brush, dip, pour or spray, and how the safety line on lead is drawn so no food surface is ever put at risk.",
      "introduction": "Think of a glaze as a three-legged stool. Silica is the glass that must be melted; the flux is the fuel that lets it melt at the temperature your kiln can actually reach; alumina is the brace that keeps the melt thick enough to hang on a wall instead of pooling on the shelf. Pull one leg and the coating fails: too little silica gives a dull soft skin, too little flux leaves it raw and matte, too little alumina lets it run onto the shelf. Every application choice that follows, from dipping time to coat count, is really a search for the balance of those three legs on a particular pot.",
      "realWorldContext": "In a Kumasi or Tamale ceramics workroom the school glaze bucket is a shared resource, so the same discipline a commercial potter uses applies: a sieved, hydrometer-checked slurry, a ladle and a sponge kept clean, wax brushed on each foot ring, and tiles fired with every load. Agojuve and Shai-Ya-Ya potteries coat water jars and bowls for sale; a learner who crazes a water jar in a shop loses the customer, which is why the fit of the glaze and the honesty about lead matter as much as the colour.",
      "objectives": [
        "Name the three functional parts of a glaze (silica, flux, alumina) and state the job of each",
        "Explain why lead fluxes must never be used on food or drink ware and how to handle raw glaze safely",
        "Mix, sieve and measure a dipping glaze to a working specific gravity of about 1.4 to 1.5",
        "Apply a glaze correctly by brush, dip, pour and spray, and use wax resist to keep the foot bare",
        "Diagnose crazing or shivering as a glaze-fit fault and adjust the recipe to fix it"
      ],
      "sections": [
        {
          "title": "What a Glaze Is Made Of: Silica, Flux and Alumina",
          "content": "A glaze is a glass coating, and glass is built from silica, but pure quartz will not melt below about 1700 degrees C, hotter than almost any school kiln. The flux solves this: materials such as feldspar, whiting (calcium carbonate), dolomite, talc and boron frits lower the melting point so the silica can vitrify at a cone the kiln can reach. Alumina, usually carried in by the feldspar and by a little kaolin or ball clay, is the stiffener: it raises the viscosity of the melt so the glaze thickens as it fires and stays on a vertical wall instead of running bare off the pot and welding it to the shelf. A beginner recipe therefore leans on a balance of these three, and the firing range is chosen by which flux dominates: lead and alkali fluxes melt low, calcium and boron run mid-range, and feldspathic stoneware recipes need cone 6 and above.",
          "bulletPoints": [
            "Silica (quartz, flint) is the glass former; without enough of it the surface is soft and scratches.",
            "The flux lowers the melting temperature so the kiln can actually melt the glass.",
            "Alumina stiffens the melt so it hangs on walls; too little and the glaze runs off.",
            "Boron frits and whiting are the safe modern fluxes; lead oxide is the old dangerous one.",
            "Colour comes from metal oxides: cobalt blue, iron green to amber, copper green, rutile cream."
          ],
          "keyTakeaway": "Silica makes the glass, the flux melts it at a reachable temperature, and alumina keeps it on the pot.",
          "realWorldExample": "A school bucket glaze for earthenware tiles uses a fritted boron base so a SHS 2 class can get a bright safe gloss at cone 04 in a modest electric kiln."
        },
        {
          "title": "The Lead Warning and Safe Glaze Handling",
          "content": "Lead carbonate and lead oxide give a hard, glossy, low-fire glaze with jewel colours, which is why they appear in old recipes, but lead is a cumulative poison and it can dissolve out of a poorly fired or acidic surface into food and drink. For this reason no lead glaze should ever touch a bowl, cup, water jar, or anything meant to hold food, and raw lead-containing powder must not be handled by learners at all. The safe replacements are fritted boron and calcium fluxes, where the lead or the soluble metal is locked inside a pre-melted glass frit so it cannot leach. Handling rules are simple: never eat or drink in the workroom, damp-sweep spills rather than dry-sweeping to keep silica and metal-oxide dust out of the air, wear a mask when mixing dry materials, wash hands after glazing, and keep all glaze in clearly labelled closed buckets away from younger students.",
          "bulletPoints": [
            "A lead or poorly fitted glaze can leach into acidic food such as tomato stew or shito.",
            "Fritted fluxes lock metals inside a pre-melted glass so they cannot dissolve out.",
            "Never dry-sweep glaze dust; wipe wet so silica does not become airborne.",
            "Label every bucket with the recipe number and the maturing cone range.",
            "Bare clay and fired ware that will hold food must be tested before sale."
          ],
          "keyTakeaway": "No lead glaze on food ware, and always mix and clean wet to keep dust out of the lungs.",
          "realWorldExample": "A market water jar from a school enterprise is rejected because the glossy low-fire glaze was never fit-tested; the fix is a boron-frit mid-range glaze fired to cone 6."
        },
        {
          "title": "Mixing, Sieving and Measuring a Bucket Glaze",
          "content": "Weigh each dry material, blend it in water, and pass the slurry through a 60 to 100 mesh sieve to break up lumps and remove grit; the sieve is the difference between a silky coat and a speckled one. After sieving, the glaze must be brought to a working thickness measured with a hydrometer, the float-type gauge that reads specific gravity. For most bucket-dipped ware the target is about 1.4 to 1.5: too thin (low reading) gives a pale translucent skin that under-renders the colour, too thick (high reading) gives running, crawling and a heavy lip. Stir the bucket before every session because solids settle; if the glaze stays in suspension poorly, a small pinch of Epsom salts (magnesium sulfate) flocculates the particles so they stay evenly spread, while too much salt causes hard packing and a rough surface. Keep a ladle and a clean sponge dedicated to the bucket.",
          "bulletPoints": [
            "Weigh dry, blend wet, then sieve at 60 to 100 mesh for a smooth coat.",
            "Read specific gravity with a hydrometer; aim near 1.4 to 1.5 on bisque ware.",
            "Thin with water if the reading is high, add glaze solids if it is low.",
            "A pinch of Epsom salts helps the solids hang in the bucket between dips.",
            "Stir before every use; settled solids give an uneven, patchy glaze."
          ],
          "keyTakeaway": "A glaze is mixed wet, sieved smooth, and measured to specific gravity near 1.4 to 1.5 before it ever touches a pot.",
          "realWorldExample": "The class glaze technician checks the bucket with the hydrometer each Monday and logs the reading so dipped mugs look the same all term."
        },
        {
          "title": "Applying the Glaze: Brush, Dip, Pour, Spray and Wax Resist",
          "content": "Four methods cover almost every school piece. BRUSHING needs two or three coats, with the first coat thinned so it bites rather than sits, and each coat laid in a different direction to avoid ridges; brush glaze suits large or fixed objects and detail colouring. DIPPING is the fastest even coat: the bisque piece is gripped with glaze tongs, plunged to full depth, held for about 2 to 4 seconds so the porous clay draws a film onto the wall, then lifted and the excess allowed to drain; a quick second dip builds a heavier gloss. POURING is used when a piece cannot be dipped, such as a tall fixed sculpture, with glaze ladled over and caught in a tray. SPRAYING with a low-pressure gun lays a soft even mist, best for thick uniform coats and gradients but demanding ventilation. Before any of these, WAX RESIST is brushed onto the foot ring so the glaze will not fuse the pot to the shelf; after glazing, the coated foot is wiped clean with a damp sponge.",
          "bulletPoints": [
            "Brush: 2 to 3 coats, thin the first, change direction each coat to kill ridges.",
            "Dip: hold 2 to 4 seconds; the thirsty bisque pulls an even film onto the wall.",
            "Pour: for fixed or oversized pieces; always catch the run-off in a tray.",
            "Spray: soft mist, great gradients, needs airflow and a mask.",
            "Wax the foot ring and wipe the coated foot before it goes into the kiln."
          ],
          "keyTakeaway": "Match the method to the piece, hold a dip for 2 to 4 seconds, and keep the waxed foot bare so the ware releases from the shelf.",
          "realWorldExample": "Thirty drinking mugs are dipped in twenty seconds each with the same two-second hold, so the whole school set glazes to an identical depth."
        },
        {
          "title": "Glaze Fit, Crazing and Test Tiles",
          "content": "Fit is how the glaze and the clay body move together as they heat and cool. If the body shrinks more than the glaze on cooling, the glaze is pulled apart and a fine crackle network called CRAZING spreads across the surface; if the glaze is under too much squeeze it can flake or SHIVER off sharp edges. Crazing is not only ugly, it lets water and bacteria into the crack lines, so a crazed food bowl is unsafe. The fix is a recipe change: raise the silica, or replace high-expansion alkali fluxes (soda and potash) with low-expansion calcium or boron fluxes so the glaze contracts less. The only honest way to test a glaze and its fit is to make TEST TILES from the same body, apply the glaze thin and thick, fire them to the intended cone beside the ware, and inspect after cooling. Every tile carries the recipe number, cone and date so failures can be traced.",
          "bulletPoints": [
            "Crazing is a crackle network from the body shrinking more than the glaze.",
            "Add silica or swap to calcium/boron fluxes to reduce glaze expansion.",
            "Shivering (glaze flaking off edges) is the opposite fit fault and is sharp.",
            "Make thin and thick tiles from the same body and fire to the same cone.",
            "Label each tile: recipe number, cone, date, over bare or over impressed clay."
          ],
          "keyTakeaway": "A glaze that does not fit its body crazes or shivers, and only fired test tiles reveal the truth before a whole load is ruined.",
          "realWorldExample": "A cobalt recipe crazes on the local red body; adding silica and a little whiting on the next test tile closes the crackle and passes."
        }
      ],
      "commonMistakes": [
        "Using a shiny low-fire lead glaze on a drinking cup or stew bowl because it looks bright, forgetting that lead leaches into food and is banned on ware.",
        "Dipping a piece and putting it straight on the kiln shelf with a glazed foot, so the ware welds itself to the shelf and both are lost; the waxed foot must stay bare.",
        "Glazing to too high a specific gravity, or over a slippery dusty bisque, so the coat crawls and peels off in the firing.",
        "Dry-sweeping spilled glaze powder, raising silica and metal-oxide dust into the air instead of wiping the spill wet.",
        "Firing a new glaze straight onto a full load with no test tile, so a crazing or running recipe ruins the whole kiln."
      ],
      "wassceExamTips": [
        "In Paper 1 the glaze-components question expects the three jobs named: silica forms the glass, flux lowers the melting point, alumina stiffens the melt; give all three to collect full marks.",
        "Paper 2 design questions reward a stated maturing cone and application method for each piece; write the cone (for example cone 04 or cone 6) and the technique (dip, brush, pour, spray).",
        "In the Paper 3 practical the marker scores handling of materials: a clean waxed foot, an even dipped coat with no drips, and a labelled test tile earn the finish marks.",
        "Always name a fit fault with its cause and its fix in one line, for example crazing caused by over-shrinking body, corrected by adding silica; examiners give method and accuracy marks for the pair.",
        "When asked about safety, state the lead ban on food ware and the wet-cleaning rule; a one-sentence toxicology note often carries a standalone mark."
      ],
      "summaryChecklist": [
        "Can I name silica, flux and alumina and the job each does in a glaze?",
        "Can I explain why lead glaze is banned on food ware and how to handle raw glaze safely?",
        "Can I mix, sieve and measure a dipping glaze to a specific gravity near 1.4 to 1.5?",
        "Can I apply glaze by brush, dip, pour and spray while waxing the foot bare?",
        "Can I diagnose crazing as a glaze-fit fault and correct it with silica or a flux change?"
      ]
    },
    "examples": [
      {
        "id": "ex-glazing-techniques-1",
        "title": "Dipping a bisque mug to an even glaze",
        "problem": "A class has bisque-fired twenty mugs to cone 04 and must glaze them with a mid-range bucket glaze so all twenty come out an even depth with no drips and a bare foot. Describe the full glazing procedure, and the check that confirms the bucket is ready.",
        "stepByStepSolution": [
          "Step 1 (M1): Stir the bucket thoroughly, then read the specific gravity with a hydrometer and adjust to about 1.4 to 1.5 with water or glaze solids.",
          "Step 2 (M1): Brush wax resist around the foot ring of each mug so the glaze will not fuse the foot to the kiln shelf.",
          "Step 3 (M1): Grip the mug with glaze tongs, plunge it fully into the bucket and hold for about 2 to 4 seconds so the bisque draws an even film.",
          "Step 4 (M1): Lift, let the excess drain, then wipe any glaze off the waxed foot with a damp sponge.",
          "Step 5 (A1): Inspect the coat against the light; the wall shows a smooth, drip-free even layer with a clean bare foot.",
          "Step 6 (A1): Set the mug in a washed and kiln-washed shelf, spaced clear of its neighbours, ready for the cone 6 glaze firing."
        ],
        "keyTakeaway": "A ready bucket reads near 1.4 to 1.5, a dipped wall holds 2 to 4 seconds, and a waxed bare foot releases cleanly from the shelf."
      },
      {
        "id": "ex-glazing-techniques-2",
        "title": "Correcting a crazed cobalt glaze with a test tile",
        "problem": "A cobalt glaze crazes badly on the school red earthenware body after firing. Explain how to prove the fault and change the recipe so the crackle disappears, using test tiles.",
        "stepByStepSolution": [
          "Step 1 (M1): Make three test tiles from the same red body and apply the current cobalt recipe thin, thick and over an impressed line.",
          "Step 2 (M1): Fire the tiles to the same cone as the crazed ware so the fault can be reproduced under known conditions.",
          "Step 3 (M1): Record that the crazing means the body shrank more than the glaze, so the glaze must contract less.",
          "Step 4 (M1): Adjust the recipe by adding silica and replacing part of the soda/potash (high-expansion) flux with whiting or a boron frit (low-expansion).",
          "Step 5 (M1): Make a fresh set of tiles from the adjusted recipe and refire to the same cone.",
          "Step 6 (A1): Compare: the adjusted tiles show a smooth, crackle-free surface, so the new recipe is adopted for ware."
        ],
        "keyTakeaway": "Crazing is a glaze-fit fault; prove it on a test tile, then fix it by raising silica and cutting high-expansion fluxes."
      }
    ],
    "quiz": {
      "id": "quiz-glazing-techniques",
      "topicId": "shs2-ce-t2-glazing-techniques",
      "title": "Glazing Technique Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-glazing-techniques-1",
          "quizId": "quiz-glazing-techniques",
          "questionText": "Which set correctly names the three functional parts of a glaze and the job of each?",
          "optionA": "Silica forms the glass, flux lowers the melting point, alumina stiffens the melt so it hangs on the wall.",
          "optionB": "Silica stiffens, flux forms the glass, alumina lowers the melting point.",
          "optionC": "Feldspar is the only ingredient; flux and alumina are colours added later.",
          "optionD": "Water forms the glass, silica gives colour, lead stiffens the coat.",
          "correctOption": "A",
          "subConcept": "Glaze components",
          "explanation": "A glaze is silica (glass former), a flux that melts it at a reachable temperature, and alumina that raises viscosity to hold it on vertical ware. Option B scrambles the jobs, C ignores the flux and alumina roles, and D wrongly makes water or lead the glass former.",
          "remediationTip": "Recall the three-legged stool: glass (silica), heat-lowerer (flux), stiffener (alumina); pull any leg and the coat fails."
        },
        {
          "id": "q-glazing-techniques-2",
          "quizId": "quiz-glazing-techniques",
          "questionText": "A dipped mug comes out of the kiln with a fine crackle network all over the surface. What is the cause and the correct fix?",
          "optionA": "The glaze was too thin; add more colour oxide.",
          "optionB": "The kiln was too cool; fire one cone hotter next time.",
          "optionC": "The body shrank more than the glaze on cooling; add silica and swap to a lower-expansion flux.",
          "optionD": "The foot was not waxed; the mug stuck to the shelf.",
          "correctOption": "C",
          "subConcept": "Glaze fit and crazing",
          "explanation": "The crackle is crazing, a glaze-fit fault from the body contracting more than the glaze; it is corrected by raising silica and reducing high-expansion alkali fluxes. A thin coat, an underfiring or a glazed foot produce different faults, not crazing.",
          "remediationTip": "Name the fault from its look: crackle equals crazing equals fit mismatch; the fix is a recipe change, never a thicker colour coat."
        },
        {
          "id": "q-glazing-techniques-3",
          "quizId": "quiz-glazing-techniques",
          "questionText": "Why must a lead-bearing glaze never be used on a drinking cup or food bowl?",
          "optionA": "Lead makes the glaze too matte and dull.",
          "optionB": "Lead can leach from the surface into food and drink and is a cumulative poison.",
          "optionC": "Lead glaze will not melt below cone 10.",
          "optionD": "Lead turns the clay body black in firing.",
          "correctOption": "B",
          "subConcept": "Lead toxicity",
          "explanation": "Lead is a cumulative toxin and can dissolve out of a lead glaze into food, especially acidic food, so it is banned on ware; fritted boron and calcium fluxes replace it. The other options describe false effects.",
          "remediationTip": "Tie the rule to safety, not looks: if the piece holds food or drink, use a leach-tested non-lead glaze."
        },
        {
          "id": "q-glazing-techniques-4",
          "quizId": "quiz-glazing-techniques",
          "questionText": "A dipping bucket reads at a specific gravity of 1.8 on the hydrometer. What is the likely result and the adjustment?",
          "optionA": "A pale thin coat; add more glaze solids.",
          "optionB": "A perfect coat; fire as is.",
          "optionC": "Running, crawling and a heavy lip; thin the bucket with water toward about 1.4 to 1.5.",
          "optionD": "The glaze will not stick at all; add Epsom salts only.",
          "correctOption": "C",
          "subConcept": "Specific gravity",
          "explanation": "A reading near 1.8 is over-thick, giving heavy coats that run, pool and crawl; the fix is to thin with water back to the working range of about 1.4 to 1.5. Adding solids would raise the reading further, not fix it.",
          "remediationTip": "High hydrometer reading equals thick equals run/crawl; low reading equals thin equals pale; adjust toward 1.4 to 1.5."
        },
        {
          "id": "q-glazing-techniques-5",
          "quizId": "quiz-glazing-techniques",
          "questionText": "What is the purpose of brushing wax resist on a pot foot before glazing?",
          "optionA": "To add a decorative pattern to the base.",
          "optionB": "To strengthen the thin clay of the foot.",
          "optionC": "To speed up the drying of the glaze.",
          "optionD": "To repel the glaze so the foot stays bare and the ware releases from the kiln shelf.",
          "correctOption": "D",
          "subConcept": "Wax resist application",
          "explanation": "Wax resist repels the water-based glaze so the foot ring stays bare and will not fuse the pot to the shelf. It is not decoration, a strengthener, or a dryer.",
          "remediationTip": "Remember: glazed foot plus shelf plus heat equals welded ware; wax keeps the contact line clean."
        }
      ]
    }
  },
  {
    "id": "shs2-ce-t3-alternative-firing-raku-pit",
    "subjectId": "ceramics",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 5,
    "title": "Pit, Saggar and Raku Firing",
    "description": "How to fire ware outside a kiln: building and stacking a wood-fired pit, loading a saggar with salt, sawdust and oxides for smoke and fume marks, and pulling glowing raku pots into reduction so metallic glazes flash and the body crackles.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Alternative firings use open flame, fuel and fumes instead of an electric kiln; they give smoky, metallic and flashing surfaces a kiln cannot, which is why they are treated as a class event.\n• PIT FIRING: dig or use a shallow pit about 30 to 45 cm deep, bed the ware on a layer of kindling and fuel, stack softwood (rice husk, coconut husk, dry grass, split branches) around and over it, and fire for 2 to 4 hours; salt thrown in at peak gives an orange-peel SALT FLASH on the clay.\n• A pit is best for BURNISHED terra-cotta: the polished slip areas resist smoke and stay pale and shiny while the exposed matte clay turns black, so the pattern is made by the burnishing, not by glaze.\n• SAGGAR FIRING: the pot is packed inside a fireclay container (saggar) with reactive materials, for example salt, sawdust, leaves, copper carbonate, ferric or citric acid; as these vaporise in the sealed saggar they draw smoke and colour marks onto the ware.\n• RAKU: a low-fire technique, glaze matures near cone 06 to 04 (about 950 to 1060 degrees C); glowing pots are lifted straight from the hot kiln with long raku tongs and dropped into a metal bin of sawdust or paper, then sealed for POST-FIRING REDUCTION.\n• Post-reduction starves the flame of oxygen, so the fire pulls oxygen out of the glaze surface: clear glaze CRACKLES from thermal shock, and copper or metallic raku glazes FLASH to bare copper reds, blues and lustrous blacks.\n• THERMAL SHOCK is the sudden move from about 1000 degrees C cold air; only a RAKU BODY with 25 to 50 percent grog (pre-fired crushed clay) or a paper clay survives the shock, a fine porcelain or smooth stoneware body will split.\n• The pot is out of the kiln within seconds, so pieces are small and lightly built; thick or heavy ware traps steam and can explode.\n• SAFETY with open flame: clear a hard non-flammable base, keep water and sand and a fire extinguisher to hand, wear leather gauntlets and a face shield, use long tongs, tie hair back, never use petrol or paraffin to light, and run the event in daylight with an adult in charge.\n• Reduction and oxidation: an oxygen-rich fire (oxidation) gives bright reds in iron clay; a starved, smoky fire (reduction) turns the same iron clay to charcoal grey and black.",
    "detailedNotes": {
      "overview": "Before kilns were reliable, all pottery was fired with wood, dung and open flame, and these old methods are still the most expressive ways to surface a pot. This topic covers three of them. Pit firing burns ware in a shallow hole packed with fuel, ideal for burnished earthenware where smoke draws the pattern. Saggar firing seals the pot inside a clay box with salt, sawdust and metal oxides so fumes paint the surface. Raku takes a glazed pot glowing from a small kiln, plunges it into combustible material, and lets post-firing reduction flash the metallic glaze and crackle the body. All three are open-flame studio events with real hazards, so safe handling is taught alongside the craft.",
      "introduction": "These firings share one idea: the fire, the smoke and the air around the pot are the decorators. You do not control the surface with a brush alone; you set up fuel, fumes and oxygen and let chemistry finish the work. That makes the process exciting and unpredictable, and it makes preparation everything. Build a body that can survive sudden heat, plan the fuel and the burn time, choose what smoke will touch, and put safety first because an open fire is unforgiving. The reward is a one-off surface no electric kiln can copy.",
      "realWorldContext": "In Ghana the burnished water pots of the north and the smoky household firing traditions are close cousins of pit work, and a school can stage a raku or pit firing as a whole-cohort outdoor event on a dry compound, with the fire circle agreed and watched. A class that fires a pit of burnished jars at a festival, or raku tiles for a school exhibition board, produces exactly the smoky, flashing surfaces that read well on a Paper 3 presentation and connect the workroom to living Ghanaian craft.",
      "objectives": [
        "Prepare and stack a wood-fired pit and describe the burn time and the role of salt flash",
        "Explain how a saggar and its reactive materials (salt, sawdust, oxides) draw marks onto ware",
        "Carry out a raku firing: hot pull with tongs, post-firing reduction, and the crackle and flash it causes",
        "Choose a groggy raku body that survives thermal shock and explain why a fine body would split",
        "Apply open-flame safety rules to run an outdoor firing as a supervised class event"
      ],
      "sections": [
        {
          "title": "Pit Firing: Building, Stacking and Salt Flash",
          "content": "A pit is a shallow hole, roughly 30 to 45 centimetres deep, lined so air can reach the fire from below. The ware is bedded on a first layer of light kindling such as dry grass, rice husk or coconut husk, and softwood fuel is stacked around and over it in a loose dome so flame and smoke can travel through the pile. A pit firing runs hot for two to four hours; the clay matures by the heat work of the long burn rather than a metered element. Because the fire is starved of oxygen in places, iron-bearing clay flashes from red to charcoal in smoky patches. At the peak of the burn, handfuls of salt thrown on the ware vaporise the sodium, which combines with silica in the clay to form a glossy orange-peel SALT FLASH, an unpredictable natural glaze. Burnished earthenware is the classic pit subject: a stone-polished slip resists the smoke and stays bright, while the matte surface blacks, so the burnishing itself becomes the pattern.",
          "bulletPoints": [
            "Dig a pit 30 to 45 cm deep; bed ware on kindling, stack softwood loosely over it.",
            "Fire for 2 to 4 hours; heat work, not a gauge, matures the ware.",
            "Salt thrown at peak creates a glossy orange-peel salt flash on the clay.",
            "Reduction smoke turns iron clay grey and black in drifting patches.",
            "Burnished slip areas stay pale and shiny; the matte clay takes the black."
          ],
          "keyTakeaway": "In a pit the fuel, the smoke and a throw of salt do the decorating, and burnishing decides which surfaces stay bright.",
          "realWorldExample": "A class beds burnished water jars in a dry-season pit, stacks rice husk and split branches, and finishes with a salt throw for flash, firing the load in about three hours."
        },
        {
          "title": "Saggar Firing: Painting with Smoke and Fume",
          "content": "Saggar firing seals the pot inside a fireclay box, the saggar, together with reactive materials, and it is the most controllable of the open methods because the decoration happens in a closed micro-atmosphere. Around and inside the saggar the packer places salt, dry or damp sawdust, pressed leaves, and metal compounds such as copper carbonate or iron (ferric chloride or citric acid). As the saggar heats and its lid is partly sealed with clay slip or taped, these materials vaporise and their fumes cannot escape; they are drawn across the clay and burn in as marks: leaves print their veins, salt and copper flash colour, iron etches rust tones, and the smoke shades everything else. Because the fume works on bare or slip-covered clay rather than glass, saggar ware is usually unglazed, often burnished or covered in a thin white slip to catch contrast. The result is soft, atmospheric, and different in every box.",
          "bulletPoints": [
            "A saggar is a lidded fireclay container that traps fumes around the pot.",
            "Pack salt, sawdust, leaves, copper carbonate or iron into the box.",
            "Seal the lid with slip or tape so the smoke and vapour are held inside.",
            "Fumes draw colour and leaf prints onto bare or slip-covered clay.",
            "Saggar ware is normally unglazed; the decoration is smoke, not glass."
          ],
          "keyTakeaway": "Saggar firing paints a pot with trapped smoke and metal fumes sealed inside a clay box.",
          "realWorldExample": "Two tiles packed with pressed dew-bush leaves and damp sawdust in a taped saggar come out carrying ghostly printed veins in smoke grey."
        },
        {
          "title": "Raku Firing: Hot Pull and Post-Firing Reduction",
          "content": "Raku is a fast, low-fire method built around removing the pot while it is still glowing. A small raku kiln is brought to roughly 950 to 1060 degrees C (about cone 06 to 04), and a glazed piece sits inside only long enough for the glaze to melt and go glossy. With long raku tongs the potter lifts the red-hot pot straight out and drops it into a metal bin packed with sawdust, dry grass or newspaper, then seals the lid. Starved of oxygen, the flames die and begin to pull oxygen out of everything available, including the surface of the glaze and body: this is POST-FIRING REDUCTION. The thermal shock of the sudden cooling crackles the clear glaze into a fine web, while metallic and copper raku glazes FLASH: the reduction strips oxygen from the copper oxide and reveals bare metallic copper reds, iridescent blues and lustrous smoke blacks. The pot is then quenched in water to stop the reaction and to pop the crackle.",
          "bulletPoints": [
            "Heat a raku kiln to about 950 to 1060 degrees C (cone 06 to 04).",
            "Lift the glowing pot with long tongs and drop it into a bin of sawdust or paper.",
            "Seal the bin; oxygen starvation drives post-firing reduction.",
            "Thermal shock crackles the clear glaze; copper glazes flash to metallic colour.",
            "Quench in water to halt the reaction and set the crackle."
          ],
          "keyTakeaway": "Raku is defined by the hot pull and the sealed reduction bin that crackles the glaze and flashes the metals.",
          "realWorldExample": "A school raku tile with copper-green glaze is pulled at a glow, binned in sawdust for fifteen minutes, and emerges with copper-red flash and a black crackle web."
        },
        {
          "title": "Thermal Shock and the Raku Clay Body",
          "content": "The single physical fact that makes raku possible is that the body must survive being yanked from about 1000 degrees C into cold air without splitting. This sudden contraction is THERMAL SHOCK, and it shatters dense, vitreous clay like porcelain or a smooth stoneware because they have no room to move. A RAKU BODY is deliberately open: it carries 25 to 50 percent grog (pre-fired, crushed clay) and often paper fibre, which create tiny air spaces and flexible seams that absorb the shock. The same openness is why raku pots fire fast and stay small and lightly built: a thick or heavy wall traps water as steam, and a low-fire body is porous rather than vitreous, so raku ware is decorative, not waterproof, and is not made for holding drinking water or food.",
          "bulletPoints": [
            "Thermal shock is the sudden crack from hot kiln to cold air.",
            "Dense porcelain and smooth stoneware split; a raku body must be open.",
            "A raku body carries 25 to 50 percent grog plus sometimes paper fibre.",
            "Keep raku pieces small, light and even-walled so steam can leave.",
            "Raku ware is porous and decorative, never a food or water vessel."
          ],
          "keyTakeaway": "Only a groggy raku body survives thermal shock, and that same porosity means raku ware is decorative, not functional.",
          "realWorldExample": "Two bowls thrown from the same clay, one fine porcelain and one grogged raku body, are pulled hot: the porcelain cracks along a wall while the raku bowl comes through unharmed."
        },
        {
          "title": "Open-Flame Safety and Running a Class Firing",
          "content": "All three methods use live fire, so safety is the first skill, not an afterthought. The firing circle is set on a cleared, level, non-flammable base away from fences, dry grass and leaves, with a windbreak ready. Water, a heap of dry sand and a fire extinguisher stand within reach, and only the people working the fire wear long leather gauntlets, closed shoes, tied-back hair and a face shield; onlookers keep a marked distance. The fire is lit with kindling only and NEVER with petrol or paraffin, which can flare back along the pour. For raku the pot is moved with long tongs in a planned one-at-a-time route from kiln to bin, glowing pots are set only on metal or sand, and the reduction bins are opened outdoors because the trapped gases are combustible. An adult or teacher is in charge throughout, the event runs in daylight, and a clean water bucket and first-aid kit close the site.",
          "bulletPoints": [
            "Clear a level non-flammable base; keep a windbreak and a marked spectator line.",
            "Water, dry sand and an extinguisher sit within armreach of the fire.",
            "Leather gauntlets, closed shoes, face shield and tied hair for anyone at the flame.",
            "Light with kindling only; petrol or paraffin can flare back and cause burns.",
            "Open reduction bins outdoors (trapped gases are flammable) and run the event in daylight under supervision."
          ],
          "keyTakeaway": "An outdoor firing is safe only when the base, the extinguisher, the protective gear and the supervised plan are all set before the first match.",
          "realWorldExample": "The school raku day starts with a briefed circle, sand and extinguisher staged, tongs and gauntlets counted out, and each glowing pot walked solo to its bin."
        }
      ],
      "commonMistakes": [
        "Pulling raku ware made from porcelain or a fine stoneware body, which splits on thermal shock; a grogged raku body with 25 to 50 percent grog is required.",
        "Lighting a pit or raku kiln with petrol or paraffin to speed it up, risking a flash-back along the pour; only kindling should start a fire.",
        "Opening a sealed reduction bin indoors or leaning over it, breathing the combustible gases; always open outdoors and stand back.",
        "Building raku pots too thick or too heavy, so trapped steam explodes the piece in the hot pull; keep ware small and even-walled.",
        "Putting a plain smooth clay pot in a saggar with no slip or burnish, so the smoke has nothing to contrast against and the marks read muddy."
      ],
      "wassceExamTips": [
        "Paper 1 asks you to name a firing and its key feature; answer with the pair the marker wants, for example raku equals post-firing reduction, saggar equals sealed reactive container, pit equals open wood fire and salt flash.",
        "In Paper 2 a design for an alternative-fired piece must state body, surface and firing together; write a grogged raku body, a metallic or crackle glaze, and cone 04, and note that raku ware is decorative not food-safe.",
        "Paper 3 practical marks creativity and handling of materials; a clean burnished pit jar or a well-flashed raku tile with a labelled firing note scores the finish and the concept together.",
        "When a question asks why a raku piece cracked, name thermal shock and the wrong body; when it asks why the glaze crazed on removal, credit the deliberate shock crackle of post-firing reduction.",
        "Safety is examinable: list the base, extinguisher and sand, the gauntlets and face shield, and the kindling-only rule; a one-line supervision note often carries a standalone mark."
      ],
      "summaryChecklist": [
        "Can I bed, stack and fire a pit and explain the effect of a salt throw at peak?",
        "Can I pack a saggar with salt, sawdust and oxides to draw smoke marks onto ware?",
        "Can I run a raku firing from hot pull to sealed reduction bin to quench?",
        "Can I choose a grogged raku body and explain why a fine body splits on thermal shock?",
        "Can I list the open-flame safety rules needed to run an outdoor firing as a class event?"
      ]
    },
    "examples": [
      {
        "id": "ex-alternative-firing-raku-pit-1",
        "title": "Raku firing a glazed tile end to end",
        "problem": "A student has a grogged, copper-glazed raku tile and must fire it safely and produce a metallic flash with a crackle web. Lay out the whole procedure, from kiln temperature to the finished cooling.",
        "stepByStepSolution": [
          "Step 1 (M1): Bring the raku kiln to about 950 to 1060 degrees C (near cone 04) and stage the bin, sawdust, tongs, gauntlets, face shield, water and sand before opening the kiln.",
          "Step 2 (M1): Set the grogged tile on a soft brick inside the kiln and heat until the glaze goes glossy and melted, only a few minutes.",
          "Step 3 (M1): Grip the glowing tile with long raku tongs and carry it, one piece at a time, to the bin.",
          "Step 4 (M1): Drop the tile into the sawdust, cover with more sawdust, and seal the lid for post-firing reduction.",
          "Step 5 (M1): Let it sit about 10 to 15 minutes while the starved fire pulls oxygen from the glaze and crackles the surface.",
          "Step 6 (A1): Open the bin outdoors, quench the tile in water to halt reduction, and inspect the copper-red flash over a fine black crackle."
        ],
        "keyTakeaway": "Raku reads as hot pull to sawdust bin to sealed reduction to quench, giving metallic flash and crackle only on a grogged body."
      },
      {
        "id": "ex-alternative-firing-raku-pit-2",
        "title": "Firing burnished jars in a pit with salt flash",
        "problem": "A class has burnished terra-cotta jars and wants smoky patterns with a glossy flash. Describe the pit set-up, the burn, and how the burnishing controls the pattern.",
        "stepByStepSolution": [
          "Step 1 (M1): Clear a level non-flammable circle and dig a pit about 30 to 45 cm deep, leaving air gaps under the load.",
          "Step 2 (M1): Bed the jars on a layer of dry grass and rice husk, then stack softwood loosely around and over them.",
          "Step 3 (M1): Light with kindling only and feed the fire for 2 to 4 hours, letting smoke and reduction blacken the exposed clay.",
          "Step 4 (M1): At peak heat, throw handfuls of salt on the ware to vaporise the sodium for a salt flash.",
          "Step 5 (A1): Let the pit cool fully, then dig out the jars: burnished slip areas read pale and shiny, matte clay charcoal black.",
          "Step 6 (A1): Damp-sweep ash and inspect each jar for even smoke pattern before display."
        ],
        "keyTakeaway": "In a pit the burnished surfaces resist the smoke and stay bright while matte clay blacks, and a salt throw at peak adds the flash."
      }
    ],
    "quiz": {
      "id": "quiz-alternative-firing-raku-pit",
      "topicId": "shs2-ce-t3-alternative-firing-raku-pit",
      "title": "Pit, Saggar and Raku Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-alternative-firing-raku-pit-1",
          "quizId": "quiz-alternative-firing-raku-pit",
          "questionText": "What happens to a metallic raku glaze during post-firing reduction?",
          "optionA": "It melts deeper and runs off the pot.",
          "optionB": "It turns uniformly matte grey.",
          "optionC": "The starved fire pulls oxygen from the glaze, flashing copper to metallic reds and blacks and crackling the surface.",
          "optionD": "It hardens instantly and cannot be changed.",
          "correctOption": "C",
          "subConcept": "Raku reduction",
          "explanation": "Sealing the pot in combustibles starves the flame of oxygen, so it strips oxygen from the glaze surface, flashing copper to metal and cracking the clear glaze. It does not simply run, go uniform matte, or harden unchanged.",
          "remediationTip": "Link the sealed bin to oxygen starvation, and oxygen starvation to metal flash plus crackle."
        },
        {
          "id": "q-alternative-firing-raku-pit-2",
          "quizId": "quiz-alternative-firing-raku-pit",
          "questionText": "Why must a raku pot be thrown from a grogged body rather than fine porcelain?",
          "optionA": "Grog makes the glaze melt at a lower temperature.",
          "optionB": "The open grogged body absorbs thermal shock when the pot moves from hot kiln to cold air, so it does not split.",
          "optionC": "Porcelain cannot take a shiny glaze.",
          "optionD": "Grog stops the pot flashing colour.",
          "correctOption": "B",
          "subConcept": "Thermal shock",
          "explanation": "The hot-to-cold move is thermal shock; a body with 25 to 50 percent grog has the open structure to survive it, while dense porcelain shatters. Grog is about shock survival, not glaze melting or colour.",
          "remediationTip": "Name the stress (thermal shock) then match it to the body that survives it (grogged, open), not the dense one."
        },
        {
          "id": "q-alternative-firing-raku-pit-3",
          "quizId": "quiz-alternative-firing-raku-pit",
          "questionText": "In saggar firing, what is packed inside the container with the pot to draw marks onto it?",
          "optionA": "Molten glass for a thick glaze coat.",
          "optionB": "Only clean water to steam the surface.",
          "optionC": "Extra clay to thicken the walls.",
          "optionD": "Reactive materials such as salt, sawdust, leaves and metal oxides whose fumes are trapped and drawn onto the clay.",
          "correctOption": "D",
          "subConcept": "Saggar materials",
          "explanation": "A saggar seals the pot with salt, sawdust, leaves and copper or iron compounds; as they vaporise, trapped fumes print colour and leaf marks on bare or slipped clay. Glass, water or added clay are not the saggar reaction.",
          "remediationTip": "Remember the saggar as a sealed smoke-and-fume box; its job is trapped vapour, not glaze."
        },
        {
          "id": "q-alternative-firing-raku-pit-4",
          "quizId": "quiz-alternative-firing-raku-pit",
          "questionText": "Why is it dangerous to light a pit or raku kiln with petrol or paraffin?",
          "optionA": "It makes the ware too sooty.",
          "optionB": "It lowers the firing temperature.",
          "optionC": "It ruins the raku glaze colour.",
          "optionD": "The flammable liquid can flare back along the pour and cause serious burns.",
          "correctOption": "D",
          "subConcept": "Open-flame safety",
          "explanation": "Liquid fuels vaporise and the flame can flash back up the stream toward the hand and face, causing burns; only kindling should start a fire. The risk is a flare-back, not soot, temperature or glaze colour.",
          "remediationTip": "The rule is simple: kindling lights a fire; petrol and paraffin flare back."
        },
        {
          "id": "q-alternative-firing-raku-pit-5",
          "quizId": "quiz-alternative-firing-raku-pit",
          "questionText": "In pit-fired burnished earthenware, why do some areas stay pale while others turn black?",
          "optionA": "The pale clay was fired shorter than the black clay.",
          "optionB": "The stone-polished burnished slip resists the smoke, while the matte exposed clay takes it and blacks.",
          "optionC": "Salt only sticks to matte clay.",
          "optionD": "Raku glaze was painted on the pale areas.",
          "correctOption": "B",
          "subConcept": "Pit smoke pattern",
          "explanation": "A hard burnished surface closes the clay so smoke cannot penetrate, leaving it bright, while porous matte clay traps carbon and goes black. The pattern comes from the burnishing, not from uneven firing, salt, or glaze.",
          "remediationTip": "In smoke firing, polish equals resist equals pale, and matte equals absorb equals black."
        }
      ]
    }
  },
  {
    "id": "shs3-ce-t1-kilns-clay-bodies-firing-schedules",
    "subjectId": "ceramics",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Kilns, Clay Bodies and Firing Schedules",
    "description": "How to read a firing like a potter: the maturing bands of earthenware, stoneware and porcelain, the cone 04 to cone 8 ladder, how to build a ramped bisque and glaze schedule, the kiln types that make them, and how pyrometric cones and healthy shelves keep the work safe.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A firing is a controlled climb in temperature held long enough for the clay and glaze to complete HEAT WORK, the combined effect of temperature and time, not the peak reading alone.\n• CLAY BODY RANGES: earthenware matures about 1000 to 1150 degrees C (cone 06 to 1) and stays porous; stoneware matures about 1200 to 1300 degrees C (cone 6 to 10) and vitrifies to a hard, near-waterproof body; porcelain matures about 1280 to 1400 degrees C (cone 10 to 12) and goes translucent.\n• CONE LADDER (Orton self-bending cones measure heat work): cone 04 about 1060 degrees C, cone 1 about 1154 degrees C, cone 6 about 1222 degrees C (mid-range), cone 8 about 1263 degrees C; the number counts up as the temperature rises, and the small 0-numbers (06, 04, 02) are the LOW ranges.\n• BISQUE vs GLAZE: the BISQUE (or first) firing converts fragile greenware to hard, porous, glaze-ready ware, typically to cone 04 (about 1000 to 1060 degrees C); the GLAZE firing is taken to the maturing range of the clay and glaze, for example cone 6.\n• A SCHEDULE is a ramp: candle/low soak at about 100 to 200 degrees C to drive off water, a controlled climb, a slow pass through the QUARTZ INVERSION at 573 degrees C where silica changes crystal form and expands, then a rise to peak, a SOAK to even out temperature and complete reactions, and a controlled COOL.\n• RAMP RATE matters: too fast a climb on wet or thick ware blows pieces; too fast a cool through 573 to 223 degrees C (cristobalite inversion) cracks them, so the top of the schedule and the fall are slowed.\n• KILN TYPES: ELECTRIC (elements, usually oxidation, easy to program and the school workroom default), GAS (flame, can run REDUCTION for flashing effects and larger loads), WOOD (long stoke, natural ash glaze, high fuel labour).\n• PYROMETRIC CONES are the honest witness: a cone bends when its tip reaches the maturing temperature for its number, and a three-cone stack (early, target, late) shows whether a firing ran slow, correct or over.\n• KILN SHELVES carry the ware; glaze drips and rough spots weld pots to the shelf, so shelves are coated with kiln wash and repaired with refractory patch or ground smooth before use.\n• Cone 6 mid-range firing is the modern Ghanaian workroom sweet spot: cheaper to reach than cone 10, stronger and safer for food ware than low-fire earthenware.",
    "detailedNotes": {
      "overview": "A kiln is only as good as the schedule poured into it, and a clay body is only finished when it has received the heat work its minerals need. This topic links three things a candidate must reason about together. First, clay bodies and their maturing bands, from porous earthenware through vitrified stoneware to translucent porcelain. Second, the schedule, a planned ramp that candles out water, eases through quartz inversion, soaks at peak and cools without cracking. Third, the plant: electric, gas and wood kilns, read with cones rather than guesswork, on shelves kept clean and patched. Mastering the cone ladder and the bisque-versus-glaze distinction turns firing from luck into method.",
      "introduction": "Firing is a recipe of heat and time. Every clay has a band where its particles melt enough to knit into a strong body but not so much they collapse; every glaze has a band where its glass flows and sets. The schedule is how you deliver the right heat work to both. Read the cone numbers as a ladder, know whether you are bisquing to cone 04 or glazing to cone 6, slow the ramp at the two danger points (rising water and falling cristobalite), and let a cone, not a dial, tell you the truth. The kiln type decides how you create the atmosphere, and healthy shelves decide whether the ware comes out whole.",
      "realWorldContext": "A SHS 3 ceramics workroom with one electric kiln has to fire mixed loads, so the technician groups ware by body and cone and writes the schedule on the kiln card: candle, climb, soak at cone 6, slow cool. That discipline protects school stock and matches how potteries near Kumasi and Tema plan production firings. The cone 04 to cone 6 range covers everything from the low-fire decorative raku tiles to mid-range functional stoneware mugs a class sells, so being able to set and read a schedule is a real employable craft skill, not just exam theory.",
      "objectives": [
        "State the maturing temperature and cone band for earthenware, stoneware and porcelain",
        "Place cones 04, 1, 6 and 8 in order with their approximate temperatures",
        "Distinguish a bisque schedule from a glaze schedule by aim and target cone",
        "Build a ramped firing schedule with candle, quartz-inversion care, soak and controlled cool",
        "Compare electric, gas and wood kilns and use pyrometric cones and sound shelves to control a firing"
      ],
      "sections": [
        {
          "title": "Clay Bodies and Their Maturing Bands",
          "content": "A clay is finished when it has been fired to its maturity, the point at which its particles soften and fuse into a dense, sound body. Earthenware matures low, about 1000 to 1150 degrees C, roughly cone 06 to cone 1; at this range it does not fully vitrify, so it stays porous, warm in colour, and needs a glaze to hold water. Stoneware matures at about 1200 to 1300 degrees C, cone 6 to cone 10, where the body vitrifies, becoming hard, tough, and close to waterproof even unglazed, which is why it is the workhorse for mugs, plates and garden ware. Porcelain matures hottest, about 1280 to 1400 degrees C, cone 10 to cone 12, becoming white, dense and faintly translucent. Choosing a body is therefore choosing a firing range, a strength and a use: low and porous for decorative ware, mid and vitrified for functional ware, high and white for fine ware.",
          "bulletPoints": [
            "Earthenware: about 1000 to 1150 degrees C, cone 06 to 1, porous, needs glaze to hold water.",
            "Stoneware: about 1200 to 1300 degrees C, cone 6 to 10, vitrified, tough, food-safe.",
            "Porcelain: about 1280 to 1400 degrees C, cone 10 to 12, white and translucent.",
            "Higher maturity means denser, stronger and less porous ware.",
            "Match the body to the job: decorative, functional or fine ware."
          ],
          "keyTakeaway": "Each clay has a maturing band, and that band sets the cone, the density and the use of the finished ware.",
          "realWorldExample": "A class choosing a mug body picks mid-range stoneware at cone 6 because it vitrifies food-safe without the cost of a cone 10 porcelain firing."
        },
        {
          "title": "The Cone Ladder and Heat Work",
          "content": "Temperature alone does not finish a pot; heat work, the combined effect of temperature AND time, does, and pyrometric cones are built to measure exactly that. A small self-bending cone of a known formula props up at an angle in the kiln and bends its tip down when it has absorbed enough heat work for its number. The ladder runs upward in temperature as the number rises, with the low fire carrying the small zero-numbers first: cone 06 is cooler than cone 04 (about 1060 degrees C), cone 1 is about 1154 degrees C, cone 6 about 1222 degrees C marks the mid-range, and cone 8 about 1263 degrees C. Because two kilns can hit the same peak but deliver different heat work, potters place a three-cone guard pack, an early cone, the target cone, and a late cone, so the bent and unbent tips tell whether a firing ran slow, correct or over. Read the cones, not only the dial.",
          "bulletPoints": [
            "Heat work equals temperature plus time; a cone measures both together.",
            "Cone 04 about 1060 degrees C, cone 1 about 1154, cone 6 about 1222, cone 8 about 1263.",
            "Zero-numbered cones (06, 04, 02) are the LOW end; higher whole numbers are hotter.",
            "A guard pack of early, target and late cones shows slow, correct or over firing.",
            "A kiln can show the right peak yet under-fire, so trust the bent cone tip."
          ],
          "keyTakeaway": "Cones measure heat work, not just temperature, so a guard pack of three tells the true story of a firing.",
          "realWorldExample": "The kiln reads cone 6 on the dial but the cone-6 witness is still upright and only the cone-7 has bent, so the load was actually one step cool."
        },
        {
          "title": "Bisque Firing Versus Glaze Firing",
          "content": "Most ware is fired twice. The BISQUE or first firing turns fragile dried greenware into hard, slightly porous, glaze-thirsty ware, and it is taken to about cone 04, roughly 1000 to 1060 degrees C. During it the chemically bonded water and any burn-out of carbon must complete without cracking the pieces, so the early part of the ramp is gentle. The GLAZE or second firing then melts the glaze onto that bisqued surface and matures the body, and it is run to the maturing range of the clay and glaze, for example cone 6 for a mid-range stoneware set. The two schedules differ in aim, in target cone and in how the ware behaves: bisque ware must stay porous enough to drink up a dipped glaze, so it is never taken high enough to vitrify, while glaze ware is fired to full maturity so body and glass fuse together and seal.",
          "bulletPoints": [
            "Bisque firing: greenware to cone 04, hard, porous and ready to absorb glaze.",
            "Glaze firing: melts the glaze and matures the body, run to the body cone, e.g. cone 6.",
            "Bisque must NOT vitrify or the dipped glaze will not stick to a thirsty surface.",
            "Glaze firing reaches full maturity so glass and body fuse and seal.",
            "Two firings let fragile ware be handled safely between them."
          ],
          "keyTakeaway": "Bisque to cone 04 makes glaze-thirsty ware; the glaze firing goes to the body cone and finishes the piece.",
          "realWorldExample": "Dipped mugs are bisqued to cone 04 first so the dipped mid-range glaze bites evenly, then glaze-fired to cone 6 to mature the set."
        },
        {
          "title": "Building a Ramped Firing Schedule",
          "content": "A good schedule is a shaped climb, not a switch thrown to full. It begins with a CANDLE or low soak around 100 to 200 degrees C to drive off physical and chemical water slowly, because trapped steam is the usual cause of blown pieces. It then climbs at a measured rate, easing through the QUARTZ INVERSION at 573 degrees C where silica flips crystal form and swells, so a hard push past that point cracks ware. Near the top it slows for a SOAK, holding the peak so the whole kiln equalises and the glaze and body complete their reactions, then it is allowed to drop under control. The fall matters too: passing back down through the cristobalite inversion at roughly 220 to 270 degrees C too fast will crack the ware, so the peak and the first part of the cool are slowed. The result is a schedule with deliberate fast and slow segments, matched to the body cone.",
          "bulletPoints": [
            "Candle and low soak near 100 to 200 degrees C to clear water before the climb.",
            "Ease through the quartz inversion at 573 degrees C to avoid cracking.",
            "Soak at the peak so the kiln equalises and the glaze matures fully.",
            "Cool the top slowly through the cristobalite inversion region to prevent dunting.",
            "Set fast and slow segments to match the maturing cone of the load."
          ],
          "keyTakeaway": "A schedule shapes heat: candle low water, ease through 573 degrees C, soak at peak, and cool slowly enough to avoid dunting.",
          "realWorldExample": "A technician sets a cone-6 schedule with a one-hour candle, a slow band over 573 degrees C, a fifteen-minute soak at peak and a reduced cooling rate at the top."
        },
        {
          "title": "Kiln Types, Cones and Kiln-Shelf Care",
          "content": "The kiln decides how heat and atmosphere are made. ELECTRIC kilns run elements from a controller, usually in oxidation, are easy to program to a schedule, and are the school default. GAS kilns burn a flame and can be wound into REDUCTION, cutting the air supply so the fire steals oxygen from the clay, which flashes iron bodies to grey and suits large loads and ash and salt effects. WOOD kilns are stoked by hand for many hours, are the least controllable, and lay down natural ash glaze where the flame and ash strike the ware. Whatever the fuel, the ware sits on KILN SHELVES, and one drop of glaze on a bare shelf welds the pot to the furniture and can tear the foot off when it is pried loose, ruining pot and shelf. So shelves are brushed with a slurry of kiln wash, ground smooth and patched with refractory cement where drips or roughness appear, and inspected before each firing, while cones are set in a guard pack to prove the load actually matured.",
          "bulletPoints": [
            "Electric: programmable, oxidation, the workroom standard.",
            "Gas: flame, can run reduction to flash bodies, good for large loads.",
            "Wood: hand-stoked over many hours, gives natural ash glaze.",
            "Kiln wash coats shelves; glaze drips are patched with refractory or ground smooth.",
            "A cone guard pack proves maturity; sound shelves prove the ware releases whole."
          ],
          "keyTakeaway": "Electric, gas and wood kilns each deliver heat differently, but every load depends on clean patched shelves and a cone pack to come out sound.",
          "realWorldExample": "A gas kiln wound into late reduction turns a buff stoneware to smoky grey; the same pot in the electric oxidation kiln stays warm tan."
        }
      ],
      "commonMistakes": [
        "Reading the peak dial temperature instead of a pyrometric cone, so a firing that climbed too fast looks successful while the ware is under-fired and soft.",
        "Rushing the climb on damp or thick ware with no candle, so trapped water flashes to steam and blows pieces apart in the kiln.",
        "Cooling straight from the peak through the cristobalite inversion, so dunting cracks ring the rims of otherwise fine ware.",
        "Firing the glaze load on a shelf with an old glaze drip, so the fresh pot welds to the shelf and loses its foot when pried loose.",
        "Treating cone 1 as hotter than cone 04 because it looks like a bigger step, or mixing up the low zero-numbered cones; on the ladder 04 is well below 6 and 8."
      ],
      "wassceExamTips": [
        "Paper 1 expects the body-to-cone pairs verbatim: earthenware cone 06 to 1, stoneware cone 6 to 10, porcelain cone 10 to 12; state the band and the property (porous, vitrified, translucent) together.",
        "In a Paper 2 planning question, write the schedule as segments (candle, climb, soak, cool) and name the 573 degrees C quartz inversion; marking rewards the reason for each slow segment.",
        "Paper 3 practical and presentation marks lean on fired quality: ware struck at its target cone with no dunting, underfiring or shelf welds scores the handling of materials and finish.",
        "When asked which kiln for which effect, pair the fuel with the atmosphere: electric equals oxidation control, gas equals reduction flashing, wood equals natural ash glaze.",
        "Explain a cone guard pack in one line (early, target, late cones) whenever maturity is discussed; naming the bent tip as the proof of heat work earns the accuracy mark."
      ],
      "summaryChecklist": [
        "Can I state the temperature and cone band for earthenware, stoneware and porcelain?",
        "Can I order cones 04, 1, 6 and 8 with their approximate temperatures?",
        "Can I tell a bisque schedule from a glaze schedule by aim and target cone?",
        "Can I build a schedule that candles water, eases through 573 degrees C, soaks and cools safely?",
        "Can I compare electric, gas and wood kilns and justify cone checks and clean kiln shelves?"
      ]
    },
    "examples": [
      {
        "id": "ex-kilns-clay-bodies-firing-schedules-1",
        "title": "Writing a cone 6 glaze schedule for stoneware mugs",
        "problem": "A class has dipped, bisqued mid-range stoneware mugs whose clay and glaze mature at cone 6 (about 1222 degrees C). Write a ramped glaze schedule that gets them there without blowing or dunting, and say how to prove the firing worked.",
        "stepByStepSolution": [
          "Step 1 (M1): Set a candle soak at about 150 degrees C for an hour to drive off any residual moisture before the climb.",
          "Step 2 (M1): Program a measured climb, easing the rate as it passes the quartz inversion at 573 degrees C so the silica swelling does not crack ware.",
          "Step 3 (M1): Continue the climb to cone 6 (about 1222 degrees C) and hold a soak near the peak for 10 to 15 minutes so the kiln equalises and the glaze melts fully.",
          "Step 4 (M1): Begin a controlled cool, slowing the fall through the cristobalite inversion region to prevent dunting cracks.",
          "Step 5 (M1): Place a cone guard pack (cone 5, cone 6, cone 7) among the mugs during loading to witness the heat work.",
          "Step 6 (A1): After cooling, read the pack: the cone-6 tip bent level confirms maturity, and the rims ring clear with no dunting lines, so the set is correctly fired."
        ],
        "keyTakeaway": "A cone 6 glaze schedule candles, eases through 573 degrees C, soaks at peak, cools through the cristobalite zone, and is proved by a bent cone-6 witness."
      },
      {
        "id": "ex-kilns-clay-bodies-firing-schedules-2",
        "title": "Diagnosing under-fired ware and correcting the schedule",
        "problem": "Low-fire earthenware tiles glazed for cone 04 come out with a dull, dry glaze and a soft body; the controller dial reached the set temperature. Diagnose the fault and rewrite the firing so the next load matures.",
        "stepByStepSolution": [
          "Step 1 (M1): Test the tiles: the glaze is matte and the body drinks water, so the load received too little heat work; it is under-fired.",
          "Step 2 (M1): Note that the dial peaked correctly, so the climb was too fast and the kiln never equalised at the top.",
          "Step 3 (M1): Check any witness cones; if the cone-04 tip was still upright while only a cone-05 bent, that confirms the under-firing.",
          "Step 4 (M1): Rewrite the schedule: slow the final climb and add a 15-minute soak at cone 04 so the whole chamber reaches maturity together.",
          "Step 5 (M1): Reload with a fresh cone-04 guard pack at three points in the stack, near the elements and in the cool centre.",
          "Step 6 (A1): Refire with the soak; the next batch shows a glossy fused glaze and every cone-04 witness bent level, proving the correction."
        ],
        "keyTakeaway": "A correct peak but a fast climb gives under-fired ware; the fix is a slower top and a soak, proved by bent cone-04 witnesses."
      }
    ],
    "quiz": {
      "id": "quiz-kilns-clay-bodies-firing-schedules",
      "topicId": "shs3-ce-t1-kilns-clay-bodies-firing-schedules",
      "title": "Kilns and Firing Schedules Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-kilns-clay-bodies-firing-schedules-1",
          "quizId": "quiz-kilns-clay-bodies-firing-schedules",
          "questionText": "Which clay body is correctly matched with its maturing range and property?",
          "optionA": "Porcelain, cone 04, stays porous and soft.",
          "optionB": "Stoneware, cone 6 to 10, vitrifies to a hard near-waterproof body.",
          "optionC": "Earthenware, cone 10, becomes translucent.",
          "optionD": "Stoneware, cone 06, melts and collapses.",
          "correctOption": "B",
          "subConcept": "Clay body ranges",
          "explanation": "Stoneware matures at cone 6 to 10 where it vitrifies hard and close to waterproof. Porcelain matures much hotter, earthenware is the low porous body, and a stoneware body at cone 06 would be under-fired, not collapsed.",
          "remediationTip": "Pair each body with one number: earthenware low, stoneware mid and vitrified, porcelain high and translucent."
        },
        {
          "id": "q-kilns-clay-bodies-firing-schedules-2",
          "quizId": "quiz-kilns-clay-bodies-firing-schedules",
          "questionText": "Why must a firing be eased through 573 degrees C on both the way up and the way down?",
          "optionA": "Because that is where the glaze first melts.",
          "optionB": "Because the kiln uses the most power there.",
          "optionC": "Because water leaves the clay at that temperature.",
          "optionD": "Because silica undergoes the quartz inversion at that point, swelling and contracting, so a fast change cracks the ware.",
          "correctOption": "D",
          "subConcept": "Quartz inversion",
          "explanation": "At 573 degrees C silica flips crystal form and expands, then contracts again on cooling, so rushing either direction cracks ware. Glaze melting, power draw and water loss happen elsewhere in the schedule.",
          "remediationTip": "Link 573 degrees C to the quartz inversion and the sudden size change it causes; that is the slow-segment reason."
        },
        {
          "id": "q-kilns-clay-bodies-firing-schedules-3",
          "quizId": "quiz-kilns-clay-bodies-firing-schedules",
          "questionText": "What is the aim of the bisque firing and its usual target?",
          "optionA": "To melt the glaze, run to cone 6.",
          "optionB": "To turn greenware into hard, porous glaze-ready ware, typically to cone 04.",
          "optionC": "To vitrify the body fully so it is waterproof before decoration.",
          "optionD": "To smoke the clay for a black surface.",
          "correctOption": "B",
          "subConcept": "Bisque versus glaze firing",
          "explanation": "Bisque converts fragile greenware into hard, still-porous ware that will absorb a dipped glaze, usually to cone 04. Melting glaze or full vitrification belongs to the glaze firing, not bisque.",
          "remediationTip": "Bisque makes the body thirsty (porous) so glaze can bite; it must not vitrify."
        },
        {
          "id": "q-kilns-clay-bodies-firing-schedules-4",
          "quizId": "quiz-kilns-clay-bodies-firing-schedules",
          "questionText": "A kiln dial shows the target peak, yet the ware is under-fired and soft. Which measure reveals the true result and why?",
          "optionA": "The clock, because the firing was too long.",
          "optionB": "The ammeter, because low current means low heat.",
          "optionC": "A pyrometric cone, because it measures heat work (temperature plus time), which a peak reading alone can hide.",
          "optionD": "The shelf height, because the ware sat too low.",
          "correctOption": "C",
          "subConcept": "Cones and heat work",
          "explanation": "A fast climb can reach the peak with too little heat work; only the bent tip of a cone proves maturity, since cones measure temperature and time together. The dial, clock and current do not reveal under-firing on their own.",
          "remediationTip": "Remember the dial shows a temperature, the cone shows heat work; when in doubt trust the cone."
        },
        {
          "id": "q-kilns-clay-bodies-firing-schedules-5",
          "quizId": "quiz-kilns-clay-bodies-firing-schedules",
          "questionText": "A glazed pot welded itself to the kiln shelf and lost its foot when removed. What shelf fault caused it and the prevention?",
          "optionA": "The shelf sat too high in the kiln; lower it next time.",
          "optionB": "The clay was too groggy; use a finer body.",
          "optionC": "The kiln ran reduction; switch to oxidation.",
          "optionD": "A glaze drip on an unwashed shelf; coat shelves with kiln wash and patch or grind drips before loading.",
          "correctOption": "D",
          "subConcept": "Kiln shelf care",
          "explanation": "Bare glaze on a shelf melts into a bond that welds the ware; kiln wash and patched, smooth shelves prevent it. Shelf height, grog content and atmosphere do not cause a foot weld.",
          "remediationTip": "Any shiny spot on a shelf is a future weld; wash and sand the furniture before every glaze load."
        }
      ]
    }
  },
  {
    "id": "shs3-ce-t2-functional-ceramics-tableware",
    "subjectId": "ceramics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 2,
    "title": "Functional Ceramics and Tableware Design",
    "description": "Designing and making mugs, bowls and jugs that feel right in the hand, hold their stated capacity, stay hygienic in use and can be produced at a calculated price.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Function comes first: a cup, bowl or jug is judged on pour, drink, hold, stack and clean; beauty never excuses a bad handle.\n• Handle rule of thumb: the gap between handle and body must clear two fingers (about 2.5–3 cm) and the thumb must rest dry on top of the handle.\n• Drinking rims 3–6 mm thick pour cleanly; a fat rounded rim sends liquid down the outside, and a poorly shaped jug lip drips down its own wall.\n• Capacity is measured to a comfortable fill line, not to the brim: a \"250 ml mug\" holds roughly 300 ml brimful and reads 250 ml about 1.5 cm below the rim.\n• Weight matters: an empty stoneware mug around 350–450 g feels purposeful; heavier ware tires the wrist and raises the firing cost of every piece.\n• Uniform wall thickness (typically 5–8 mm) gives even drying, even firing and even heating of contents; uneven walls crack and dunt.\n• Sets must stack and nest: bowls of one family share one curve so they sit in a crate without rattling; mismatched curves waste shelf space in a hotel cabinet.\n• Tableware clay body: stoneware maturing around cone 6 (about 1222–1240 °C) absorbs less than 1 per cent water, so it survives dishwashing and repeat use.\n• Earthenware fired only to 1000–1150 °C stays porous; lovely for plant pots and garden jars, but a poor choice inside a drinking vessel.\n• Food-safe glaze: glossy, matured and glaze-fitted to the body; crazing (a net of fine cracks) traps water and bacteria and disqualifies a surface for food.\n• Never put bright low-fire decoration (reds and oranges often carry lead or cadmium fluxes) on any surface that touches food or drink.\n• Test a finished mug: hold it filled with hot water for 10 minutes, hang a 2 kg weight on the handle for 30 seconds, pour water and watch for a drip.\n• Costed runs price clay, glaze, both firings, labour, overheads and a 10–15 per cent breakage allowance before profit is added.\n• Exam angle: Paper 2 wants a dimensioned working drawing with the capacity stated; Paper 3 marks function, handling of materials and finish on the fired piece.",
    "detailedNotes": {
      "overview": "This topic moves you from making single pots to designing ware that must work every day: mugs, bowls, plates and jugs. You will study ergonomics (handle, rim, weight), accurate capacity, uniform walls, food-safe glazing and the costing of a small matched production run. Every decision is tested against use, washing and sale.",
      "introduction": "A decorative vase is forgiven for small faults because it only has to stand still. A mug is not forgiven anything: it is lifted, filled, sipped, washed and stacked dozens of times a day, and every small fault becomes a complaint. In this topic you design as a maker serving a user. Each measurement you write on your working drawing is a promise you must keep in clay, and every glaze choice carries a hygiene responsibility as well as an aesthetic one.",
      "realWorldContext": "Hotels and guesthouses around Accra, Kumasi and the Akosombo lodge trade buy stoneware tableware by the crate, and many would prefer to order matched mugs and breakfast bowls from Ghanaian studios rather than import them. Potters at Agojuve, Shai-Ya-Ya, Dormonasu and Asante Manso have made water pots, cooking pots and kerosene lamps for generations; the same hands can add value by moving into matched sets sold at craft fairs and to catering businesses. A school studio in Tamale that sells a six-piece breakfast set at its founders day fair must know, before it prints a price card, that a GH¢20 mug is not profitable if the true costed figure is GH¢24.",
      "objectives": [
        "Explain how handle clearance, rim thickness and weight determine whether a mug or jug is comfortable and safe to use.",
        "Calculate internal dimensions needed for a stated capacity and verify the made piece against a measuring jug.",
        "Describe why uniform wall thickness matters during drying, firing and daily use of a vessel.",
        "Select a food-safe clay and glaze system for tableware and justify the choice against crazing and lead or cadmium risk.",
        "Prepare a costed production plan for a small matched run of tableware in cedis."
      ],
      "sections": [
        {
          "title": "The Ergonomics of Holding, Drinking and Pouring",
          "content": "Ergonomics is the study of how a thing fits the human body, and in tableware it decides success before beauty is even noticed. A mug handle must let two or three fingers pass fully through the gap, with about 2.5 to 3 cm of clearance, because fingers swell slightly and grip harder when the vessel is hot; a handle sized to a flattened strip of clay feels fine in the studio and fails at the table. The top of the handle should offer a flat thumb rest so the user can control the tilt of the fill without the fingers burning against the hot wall. Weight and balance come next: most of the mass should sit under the filled contents, not in a heavy sculptural handle that pulls the mug forward. For jugs, the pour is the test. The lip must be pinched or cut into a definite spout aligned with the handle, and the outside below the lip must curve cleanly inward so no drop travels around the wall. Shape the lip by testing with water at the leather-hard stage, before the clay is bone dry and unchangeable.",
          "bulletPoints": [
            "Handle gap: clear two fingers, about 2.5–3 cm from the body wall.",
            "Add a flat thumb rest so the filled mug can be tilted under control.",
            "Keep the mass centred under the contents; a heavy handle tips the mug forward.",
            "Cut or pinch a definite spout on jugs, aligned with the handle, and test with water."
          ],
          "keyTakeaway": "Design tableware for the hand and the hot drink first; the eye forgives, the hand never does.",
          "realWorldExample": "At a busy hotel breakfast service in Accra, a dining-hall server carries eight mugs, thumbs on top of the handles. Mugs whose handles only accept one finger force her to carry four at a time and slow the whole room; the studio that wins the reorder is the one whose handle clears two fingers."
        },
        {
          "title": "Capacity, Internal Dimensions and Matched Sets",
          "content": "A mug sold as 250 ml must actually hold it, and capacity is geometry long before it is a promise. Treat the inside as a cylinder: volume in millilitres equals pi times the internal radius squared times the internal depth in centimetres, because 1 ml is exactly 1 cubic centimetre. Work to the comfortable fill line, usually 1 to 1.5 cm below the brim, not to the brim itself. For a target of 250 ml at the fill line, design an internal depth of 9 cm with an internal diameter of about 6.5 cm, which gives roughly 299 ml brimful and about 249 ml at the fill line. Control those numbers while making: weigh the clay ball for every piece from the same batch, form over a ring or hump mould, and check the opening with callipers at the leather-hard stage. A matched set is nothing but repeated accuracy: six bowls from the same curve template nest in a crate, six freehand curves do not. In a hotel cabinet that accuracy converts directly into shelf space, and in the marking scheme it reads as handling of materials.",
          "bulletPoints": [
            "1 ml = 1 cm³; internal volume = pi × radius² × depth.",
            "Design to the comfortable fill line, 1–1.5 cm below the brim.",
            "Weigh every clay ball and use rings or moulds for consistency.",
            "Check internal diameter and depth with callipers at leather-hard.",
            "A family of bowls sharing one curve will stack and nest; mixed curves rattle."
          ],
          "keyTakeaway": "Capacity is a dimension before it is a claim; measure the inside, not the idea.",
          "realWorldExample": "A guesthouse on the Aburi road asks your studio for twenty mugs that each hold the 250 ml ladle of oatomo porridge the kitchen serves; the only way to fill the order without argument is to work from internal dimensions checked with a measuring jug on the first fired sample."
        },
        {
          "title": "Uniform Walls: Even Drying, Even Firing, Even Heating",
          "content": "Clay shrinks as it dries and shrinks again as it matures in the fire, and it does so in proportion to its thickness. A wall that is 5 mm on one side and 10 mm on the other dries unevenly, sets up internal stress and cracks at the rim or foot, or carries that stress quietly into the kiln where it returns as a dunt: a clean ring-sound crack that appears hours after cooling. Thick sections also hold water; any damp left in a heavy base flashes to steam near 100 °C and can burst the piece in the bisque firing. In service the same physics operates on your drink: a thick patch warms unevenly in a microwave and stresses the glaze above it, encouraging crazing exactly where a hot spoon rests. Keep walls between about 5 and 8 mm for mug and bowl sizes, pull them with steady repeated passes, measure with a needle tool through the trimmed foot at leather-hard, and dry the ware slowly and evenly under loose plastic before full exposure.",
          "bulletPoints": [
            "Uneven walls dry unevenly; the stress returns later as cracks or dunts.",
            "Damp thick bases can burst as steam near 100 °C in the bisque fire.",
            "Aim for 5–8 mm walls on mugs and bowls; check with a needle tool at trimming.",
            "Dry slowly and evenly: loose plastic first, then open air, before either fire."
          ],
          "keyTakeaway": "Even thickness is the cheapest insurance in ceramics: it protects the piece in the kiln and the user at the table.",
          "realWorldExample": "A hostel kitchen at KNUST reheats porridge in student-made stoneware bowls; the bowls with uneven walls are the first to ring with a hidden dunt after washing, and the matron stops ordering from that maker."
        },
        {
          "title": "Food-Safe Glazes and Glaze Fit",
          "content": "The inside of a food vessel must be an impervious, cleanable surface, and only a matured, well-fitted glaze provides it. On a stoneware body fired around cone 6 (about 1222 to 1240 °C) a glossy glaze that has truly melted forms a glass skin water cannot enter, so the surface wipes clean and dries hygienic. Compare that with burnished earthenware fired only to about 1000 to 1100 °C: it drinks the first liquid it holds and can never be fully sanitised, which is why ancestral water pots were replaced regularly and why the same surface is wrong for a modern mug. Glaze fit is the second duty: when glaze shrinks more than the body on cooling it craze-checks into a fine net, and those cracks harbour bacteria and stain with tea. Fit is corrected by adjusting the silica-to-flux balance of the recipe and proved by wrapping a fired test tile, soaking it in weak tea or ink and looking for bleed along the crack lines. The third duty is chemistry: bright reds, oranges and some greens rely on cadmium and lead compounds, and lead fluxes leach into acidic drinks such as sobolo and fruit juice, so decorative low-fire colours have no business on food surfaces; insist on the supplier safety data sheet.",
          "bulletPoints": [
            "Food interiors need a glossy, matured, non-porous glaze on a low-absorption body.",
            "Crazing traps bacteria and stains; prove fit with a tea or ink soak test on a tile.",
            "Keep cadmium and lead coloured decoration off every food and drink surface.",
            "Record cone numbers, dip times and specific gravity on each test tile."
          ],
          "keyTakeaway": "A glaze is a hygiene system, not just a colour; prove it with tiles, cones and safety data before you promise it to a buyer.",
          "realWorldExample": "A maker at the Accra Arts Centre sells coffee mugs glazed with a vivid imported low-fire red inside the cup; a science teacher buys one, reads about acid leaching, and the studio loses a regular customer it should have kept by glazing the interior with a tested cone 6 clear."
        },
        {
          "title": "Costing a Small Production Run",
          "content": "A production run is a batch of matched pieces made to one design, and its profit is decided on paper before the first mug is thrown. Add the material cost per piece: weighed clay at the local price per kilogram, glaze and wax per piece, and a fair share of both the bisque and gloss firings, kiln depreciation included. Charge your own labour at an honest hourly rate, because twenty-five minutes of throwing, trimming, handle fitting and glazing is real work and a price that ignores it is a wage you have paid yourself out of. Then add a breakage allowance of ten to fifteen per cent on material costs, since some percentage of every batch cracks, dunts or dips badly and its cost must be carried by the survivors. The total is your cost price; multiply it by one plus your profit percentage, typically thirty to fifty per cent for craft ware, to reach the selling price. Keep the arithmetic in a costing table so the numbers can be defended to a buyer, a teacher or an examiner.",
          "bulletPoints": [
            "Cost per piece = clay + glaze + firing share + labour + overheads.",
            "Add a 10–15 per cent breakage allowance to material costs.",
            "Selling price = cost price × (1 + profit percentage), typically 30–50 per cent.",
            "Record every figure in a costing table you can show an examiner or a hotel buyer."
          ],
          "keyTakeaway": "Price from the cost sheet, never from the neighbouring stall; the stall that guesses sells at a loss.",
          "realWorldExample": "A school studio in Cape Coast costs a batch of twelve mugs at GH¢11.68 each all-in and prices them at GH¢16.35 for the founders day fair, so a breakage of two mugs still leaves the run in profit; the stall beside them sells at GH¢10 and never replaces its cracked kiln shelf."
        }
      ],
      "commonMistakes": [
        "Pulling a handle to the width of a flattened strip of clay instead of pressing clay around two real fingers: the finished mug rejects the hand, and no filing after firing can open it. Always bridge a handle over a wet mug held at the drinking angle.",
        "Checking capacity brimful: a mug that reads 300 ml to the brim is not a 250 ml mug. Pour from a measuring jug to one and a half centimetres below the rim and state the fill line on the drawing.",
        "Selling crazed or unglazed porous ware as food-safe: a burnished earthenware cup or a cracked glaze inside a mug cannot be sanitised and fails the hygiene test the moment tea stains the crack net.",
        "Leaving uneven walls because the cylinder was pulled only once: the piece looks fine wet, cracks its rim on the drying shelf and dunts after the glaze fire. Pull at least three rings and measure with a needle tool at trimming.",
        "Pricing a set by copying the market stall next door without costing both firings, labour and breakage, then discovering the crate was sold below cost."
      ],
      "wassceExamTips": [
        "Paper 1 (objective and short answers) tests vocabulary and numbers: comfortable fill line, crazing, cone 6 stoneware maturity around 1222–1240 °C, and why earthenware is unsuitable for food interiors. Revise the figures, not just the words.",
        "On Paper 2 (design and planning) a tableware question expects two elevations with dimensions, the capacity stated in millilitres, handle clearance marked, and the clay body and glaze named with their cone numbers. Method marks are given for the working drawing even before anything is made.",
        "Paper 3 (practical/project) marks handling of materials, suitability for purpose and finish: a clean wiped foot ring, even walls, a handle that passes two fingers and a drip-free lip each earn their share. Leave the last hour for finish, not for making.",
        "Where you claim a glaze is food-safe, justify it in one line: matured at the stated cone, glossy and non-porous, crazing tested on a tile, no lead or cadmium colourants on food surfaces. An unsupported claim scores nothing.",
        "Attach a costing table to any project that mentions production or sale: materials, labour at a real rate, firing share, breakage allowance and profit. Examiners reward figures that add up."
      ],
      "summaryChecklist": [
        "Can I explain how handle clearance, rim thickness and weight decide whether a mug works in the hand?",
        "Can I calculate internal dimensions for a stated capacity and verify the made piece with a measuring jug?",
        "Can I keep walls uniform through forming, drying and firing, and state what uneven walls cost me?",
        "Can I choose a food-safe clay and glaze system and prove the glaze fit with test tiles?",
        "Can I cost a small matched run in cedis, including labour, firing shares and breakage allowance?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-tableware-1",
        "title": "Working out the inside of a 250 ml mug",
        "problem": "Design the internal dimensions of a straight-walled mug that holds 250 ml to a comfortable fill line 1.5 cm below the brim. Find suitable internal diameter and depth, then describe how the made piece is checked.",
        "stepByStepSolution": [
          "Set the comfortable fill volume at 250 ml and the brimful volume at 300 ml (1 ml = 1 cm³), leaving 1.5 cm of headroom (M1).",
          "Choose an internal height of 9.0 cm for a shapely mug, so the cylinder formula gives pi × r² × 9.0 = 300 (M1).",
          "Rearrange: r² = 300 ÷ (pi × 9.0) = 300 ÷ 28.27 = 10.6, hence r = 3.26 cm (M1).",
          "Round the internal diameter to 6.5 cm, which can be checked with a ring or callipers on the wet piece (A1).",
          "At the leather-hard stage measure inside: 6.5 cm diameter and 9.0 cm internal depth, wall about 6 mm all round (A1).",
          "After firing, pour 300 ml from a measuring jug: the brim reads full and the level stands about 1.5 cm below the rim, close to 250 ml at the fill line (A1)."
        ],
        "keyTakeaway": "Capacity is fixed by internal dimensions before firing; compute them, measure them wet, verify them with a jug."
      },
      {
        "id": "ex-ce-tableware-2",
        "title": "Costing a production run of twelve mugs",
        "problem": "A studio makes 12 mugs from one batch. Clay costs GH¢0.40 per kg and each mug uses 1.2 kg of wedged clay; glaze and consumables cost GH¢1.50 per mug; both firings together cost GH¢54.00 for the batch; labour is 25 minutes per mug charged at GH¢12.00 per hour; add a 10 per cent breakage allowance on material costs and a 40 per cent profit on total cost. Find the cost per mug and the selling price.",
        "stepByStepSolution": [
          "Clay per mug: 1.2 kg × GH¢0.40 = GH¢0.48; with glaze and consumables, material cost is GH¢0.48 + GH¢1.50 = GH¢1.98 per mug (M1).",
          "Breakage allowance: GH¢1.98 × 1.10 = GH¢2.18 per mug (M1).",
          "Firing share: GH¢54.00 ÷ 12 = GH¢4.50 per mug (M1).",
          "Labour: 25 ÷ 60 × GH¢12.00 = GH¢5.00 per mug (M1).",
          "Total cost per mug: GH¢2.18 + GH¢4.50 + GH¢5.00 = GH¢11.68 (M1).",
          "Selling price: GH¢11.68 × 1.40 = GH¢16.35 per mug, or about GH¢196 for the full run of twelve (A1)."
        ],
        "keyTakeaway": "Cost every element first, add breakage, then profit: the selling price falls out of the arithmetic instead of out of a guess."
      }
    ],
    "quiz": {
      "id": "quiz-functional-ceramics-tableware",
      "topicId": "shs3-ce-t2-functional-ceramics-tableware",
      "title": "Functional Ceramics Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-tableware-1",
          "quizId": "quiz-functional-ceramics-tableware",
          "questionText": "Which handle-to-body clearance allows a mug to be lifted comfortably through two fingers?",
          "optionA": "About 1.0 cm",
          "optionB": "About 1.5 cm",
          "optionC": "About 2.5–3 cm",
          "optionD": "About 6 cm",
          "correctOption": "C",
          "subConcept": "Handle ergonomics",
          "explanation": "Two stacked fingers need roughly 2.5 to 3 cm of clearance, with room for the thumb rest on top. A 6 cm gap (option D) looks generous but shifts the mug forward off balance, and the smaller gaps admit only one finger.",
          "remediationTip": "Press a wet handle strip around your own two fingers before you attach it; that gap is the specification."
        },
        {
          "id": "q-ce-tableware-2",
          "quizId": "quiz-functional-ceramics-tableware",
          "questionText": "A mug is sold as holding 250 ml. Which check of the fired piece is correct?",
          "optionA": "Pour in 250 ml from a measuring jug and confirm the water stands about 1.5 cm below the rim",
          "optionB": "Fill to the brim and pour out into the jug",
          "optionC": "Weigh the empty mug and the filled mug in grams",
          "optionD": "Compare it by eye with a bought cup",
          "correctOption": "A",
          "subConcept": "Capacity measurement",
          "explanation": "Capacity is quoted to the comfortable fill line, so 250 ml poured in should sit just below the rim. Filling brimful and pouring out (option B) overstates by the headroom and loses liquid to the rim.",
          "remediationTip": "Mark your design drawing with both figures: brimful volume and fill-line volume."
        },
        {
          "id": "q-ce-tableware-3",
          "quizId": "quiz-functional-ceramics-tableware",
          "questionText": "Which interior surface is safest and most hygienic for a drinking vessel?",
          "optionA": "A crazed clear glaze with a fine crackle network",
          "optionB": "Burnished earthenware fired to about 1050 °C",
          "optionC": "A bright red low-fire decorative glaze inside the cup",
          "optionD": "A glossy, matured stoneware glaze fired at cone 6",
          "correctOption": "D",
          "subConcept": "Food-safe glazing",
          "explanation": "A fully melted, fitted stoneware glaze on a low-absorption body is impervious and wipes clean. Crazing (option A) traps bacteria in its crack net, burnished earthenware (option B) drinks liquid, and red low-fire colours (option C) may leach lead or cadmium into acidic drinks.",
          "remediationTip": "Soak a fired tile in weak tea, rinse and look for staining along crack lines before trusting any surface with food."
        },
        {
          "id": "q-ce-tableware-4",
          "quizId": "quiz-functional-ceramics-tableware",
          "questionText": "Why must the wall of a functional pot be of even thickness?",
          "optionA": "Mainly so the piece uses less clay and weighs less",
          "optionB": "For even drying, even firing and even heating of the contents in use",
          "optionC": "So the glaze runs evenly over the surface",
          "optionD": "To make the rim wider for drinking",
          "correctOption": "B",
          "subConcept": "Wall thickness",
          "explanation": "Uneven walls dry and fire at different rates, storing stress that returns as cracks and dunts, and they heat contents unevenly in use. Lightness (option A) is a side benefit, not the reason.",
          "remediationTip": "Needle-tool through the trimmed foot at leather-hard and correct any thin or thick quarter before drying."
        },
        {
          "id": "q-ce-tableware-5",
          "quizId": "quiz-functional-ceramics-tableware",
          "questionText": "A run of 10 bowls costs GH¢120.00 in total. What price per bowl gives a 50 per cent profit?",
          "optionA": "GH¢18.00",
          "optionB": "GH¢12.00",
          "optionC": "GH¢15.00",
          "optionD": "GH¢24.00",
          "correctOption": "A",
          "subConcept": "Pricing a production run",
          "explanation": "Total cost with profit is GH¢120 × 1.50 = GH¢180; divided by 10 bowls, GH¢18.00 each. GH¢12.00 (option B) recovers cost only, and GH¢24.00 (option D) doubles the cost per bowl, a 100 per cent markup.",
          "remediationTip": "Write the formula on your costing sheet: selling price = cost price × (1 + profit percentage)."
        }
      ]
    }
  },
  {
    "id": "shs3-ce-t2-ceramics-portfolio-craft-business",
    "subjectId": "ceramics",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 3,
    "title": "Ceramics Portfolio and Craft Business",
    "description": "How a ceramicist documents finished work, photographs it truthfully, prices it honestly, reaches Ghanaian buyers through stalls, fairs and hotel orders, and packages fragile ware so it arrives intact.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A portfolio is an argument, not a heap: sequence 10–15 fired pieces or their photographs to show range, and end every entry with proof of use.\n• Each entry carries title, clay body, glaze, cone number, dimensions, capacity where relevant, hours spent and price.\n• Photograph ware in overcast daylight or under one lamp, on a neutral cloth backdrop, with a white card as fill to draw one clean highlight down the curve.\n• Shoot the set together (mugs with their saucers, bowls nested) and add close-ups of a handle join, the finished foot ring and the glaze interior.\n• Pricing formula: materials + labour at a real hourly rate + overhead share + breakage allowance, then 30–50 per cent profit on the total cost.\n• Overheads are real money: clay, water, wax, glaze, two firings, kiln shelf replacement, studio rent or family land contribution.\n• Never sell below full cost plus breakage share; the GH¢10 mug can quietly be a GH¢14 mug.\n• Market routes in Ghana: weekend stall at the Accra Arts Centre, school founders day fairs, Panafest and Detty December craft markets, church and mosque fundraisers.\n• Hotel and lodge orders run 20–100 matched pieces: supply an approved sample set, keep one identical reference piece, invoice in writing and crate to a delivery address.\n• Packaging fragile ware: wrap each piece in cloth or bubble, bed it in crumpled paper in a box carton cut locally, so the inner ware never touches a carton wall.\n• For posted or couriered parcels, double-box: inner box packed in an outer box with a paper cushion all six faces, and FRAGILE and THIS WAY UP written on every side.\n• The apprenticeship route of two to three years with a master potter at places like Asante Manso or Agojuve still supplies most working ceramicists; TVET certificates and GNCC craft registration formalise the trade.\n• Adapt tradition honestly: a copied rival form sells once and burns the maker; a kente or adinkra idea reworked in clay is a signature.\n• Keep a daybook of hours, costs and sale prices per piece; the numbers tell you which ware to make more of next term.",
    "detailedNotes": {
      "overview": "Skill at the wheel or the coil is only half of a ceramics career; the other half is making that skill visible and saleable. This topic covers sequencing and photographing a portfolio, costing and pricing ware honestly, reaching Ghanaian buyers through markets, fairs and hotel contracts, packaging fragile pieces for transport, and the apprenticeship and certification routes that structure the trade.",
      "introduction": "Buyers cannot fire your kiln or sit through your months of trimming, so they judge everything from what you show them and how you price it. A portfolio turns hours of invisible labour into evidence; a costing sheet turns a guess into a business; a packed carton decides whether the sale is a sale or a loss. Treat each of these as a craft skill in its own right, executed with the same discipline you bring to a pulled wall.",
      "realWorldContext": "At the Accra Arts Centre a tourist lifts a mug, turns it once and decides in three seconds; the maker beside him with better photographs and a tidy price card takes the sale. A lodge near the Tano lake or on the Aburi road may order forty matched breakfast bowls and expects an invoice, a sample set and crates that arrive uncracked. Potters at Asante Manso, Dormonasu and Agojuve inherit forms refined over generations, yet the studios that add value today are the ones that document their work, price from costing sheets and register their craft. A SHS leaver with a school portfolio and a GNCC-recognised apprenticeship can step straight into paid studio work in Kumasi or Accra.",
      "objectives": [
        "Sequence a ceramics portfolio of 10–15 entries so that range, process and finish are all evidenced.",
        "Photograph glazed ware so that shape, colour and surface are recorded truthfully.",
        "Calculate a selling price from materials, labour, overheads, breakage allowance and profit.",
        "Describe the routes to Ghanaian buyers, including stalls, craft fairs and hotel sample-then-order contracts.",
        "Pack fragile ware for market transport and courier delivery so that breakage is minimised."
      ],
      "sections": [
        {
          "title": "Sequencing the Portfolio",
          "content": "A portfolio is read in order, so the order is rhetoric. Open with your strongest finished piece because the first image sets the standard the marker or buyer then applies to everything after it. Move through the range deliberately: wheel-thrown ware, then hand-built slab and coil work, then press-moulded or slip-cast pieces, then surface decoration studies, so the sequence proves breadth of handling rather than one lucky trick. Give every entry the same line of facts: title, clay body, glaze with cone number, dimensions, capacity if it is tableware, hours spent and price. Behind the showpieces, tuck in the evidence pages: test tiles labelled with recipe and outcome, a thumbnail design sheet, the costing table for a production run, and one photograph of the piece in use, held or filled, because function photographed sells better than function claimed. Fifteen excellent entries beat fifty indifferent ones; cut anything you would not hand to a paying stranger.",
          "bulletPoints": [
            "Lead with the strongest piece; end with a use photograph that closes the argument.",
            "Label every entry: title, clay, glaze and cone, size, capacity, hours, price.",
            "Include evidence pages: test tiles, thumbnail studies, costing tables.",
            "Show range across forming methods, not fifteen variants of one cylinder."
          ],
          "keyTakeaway": "Sequence the portfolio like an exam answer: claim the mark first, then prove breadth, then close with evidence of use.",
          "realWorldExample": "A school leaver applying for a studio apprenticeship at Koforidua carried twelve labelled photographs plus her crazing test tiles; the master potter hired her on the spot because the tiles showed she could think, not only throw."
        },
        {
          "title": "Photographing Ware",
          "content": "A bad photograph discounts good ware, and a school camera is enough to fix it. Shoot in open shade or under overcast daylight, which wraps soft even light around curves the way a giant softbox does, or indoors use one lamp as a single source and place a white card opposite it so a clean vertical highlight runs down the glaze and records its gloss. Keep the backdrop neutral: grey or black cloth for pale glazes, avoiding any coloured wrapper that throws its cast onto the shoulder of the pot, which is exactly what bright wax-print cloth from the market does to a celadon. Set the camera on a stack of books so you can use a slower shutter without blur, frame horizontally at the height of the piece so the walls do not appear to lean, and include scale with a coin or hand in one shot. Photograph the set together, then close-ups: the handle join, a wiped foot ring, the interior glaze in raking light. Shoot more angles than you need and edit the portfolio down; the camera is where a buyer decides whether the piece is worth lifting.",
          "bulletPoints": [
            "Overcast daylight or one lamp plus a white fill card; never bare midday sun that burns highlights.",
            "Neutral backdrop; coloured cloth casts its hue onto pale glazes.",
            "Rest the camera on books, shoot level with the piece, blur-free slow shutter.",
            "Include scale (coin or hand), the set together, handle join, foot ring and interior."
          ],
          "keyTakeaway": "Photograph the glaze, not the idea of the glaze: one true highlight and a neutral backdrop are worth a discount at the stall.",
          "realWorldExample": "A maker posting mug photographs on WhatsApp for a Makola caterer switched from midday sun shots, which bleached her cobalt to grey, to evening open-shade frames, and the same mugs started selling at GH¢5 more each."
        },
        {
          "title": "Pricing Clay Ware for the Ghanaian Market",
          "content": "Honest pricing starts from a costing sheet, not from the neighbour on the aisle. Materials first: weighed clay at the local per-kilogram price, glaze and wax resist per piece, and a share of both firings that includes kiln wear and shelf replacement, because a bisque at roughly 900 to 1000 °C and a stoneware gloss at cone 6 are the most expensive minutes in the studio. Then labour at a real hourly rate: time the throwing, trimming, handle fitting, glazing and packing as one batch and divide. Add overheads such as transport, water, studio space and tools, and a breakage allowance of ten to fifteen per cent spread over material cost, since every batch loses pieces and the survivors must carry them. The total is the cost price. Apply a profit of thirty to fifty per cent for direct retail; wholesale to a shop or hotel pays less per piece but moves quantity, so quote a lower unit price against a higher order. Round the retail figure to a number the market can hand you: GH¢16.35 becomes GH¢16 or GH¢15 with a second mug discount, never a price you whisper and change every customer.",
          "bulletPoints": [
            "Cost price = materials + firing shares + labour at a real rate + overheads + breakage allowance.",
            "Retail price = cost price × (1 + 30–50 per cent profit); wholesale pays less per piece for volume.",
            "Cost both firings; the kiln is the silent partner in every price card.",
            "Round to hand-able cedis and keep the price stable."
          ],
          "keyTakeaway": "The costing sheet is a mark of professionalism as much as arithmetic: buyers can see a maker who knows her own numbers.",
          "realWorldExample": "A school studio at Tamale priced a six-bowl nesting set at GH¢140 from a costing sheet and a hotel buyer accepted it without haggling, because the sheet itemised clay from the local dig, the two firings and forty minutes of trimming per bowl."
        },
        {
          "title": "Markets, Hotel Orders and Commissions",
          "content": "Ghanaian ceramic ware moves through several distinct channels and each asks for something different. A market stall at the Arts Centre in Accra or a weekend fair sells one-off pieces on sight, so stock the pocket-money range, mugs, coasters and plant pots, and keep a photograph album of the larger commissioned ware you cannot carry. Craft fairs attached to festivals and to events like Panafest bring buyers who pay for story, so label every piece with the maker and the making. Institutional orders invert everything: a hotel at Ada or a restaurant ordering twenty to a hundred matched pieces wants a sample set first, an agreed reference piece kept back, written terms on price, delivery date and breakage in transit, and ware that stacks to the shelf depth of their cabinets. Commissions, such as a school crest in relief or a reception wall installation, should carry an advance covering material cost and a firm brief in writing. In every channel the repeat order is the real profit, and it is won by consistency: the second crate must match the first one.",
          "bulletPoints": [
            "Stalls sell one-offs on sight; carry the pocket-money range plus an album of larger work.",
            "Hotel and restaurant orders: approved sample set, kept reference piece, written terms, stacking geometry.",
            "Take an advance on commissions to cover materials and fix the brief in writing.",
            "Consistency wins the reorder; record the exact glaze batch and dip times that produced the sale."
          ],
          "keyTakeaway": "Sell where buyers already walk, but build the business on the second crate, not the first.",
          "realWorldExample": "A potter supplying a guesthouse at Ho with forty tumblers delivered a crazed second batch because she never recorded the glaze recipe batch; the fix, logging every dip and cone, cost nothing and saved the contract."
        },
        {
          "title": "Packaging, Transport and the Studio Career",
          "content": "Breakage in transit converts a sale into a refund plus a reputation, so pack as if the tro tro driver is your enemy, which he is. Wrap each piece in cloth, foam or bubble so no glaze touches another glaze, bed the wrapped ware in crumpled newspaper or dry grass packing inside a box cut from local carton, and stuff until nothing shifts when you close a lid and rock it gently; the ware must never touch a carton wall. For courier or posted parcels use a double box: an inner box carrying the ware floats inside an outer box on a cushion of crumpled paper on all six faces, and FRAGILE and THIS WAY UP go on every side with the recipient number on top, not under. Between towns, pad the crate with old sacks and keep glazed ware out of the sun-heated boot beside the engine where sudden heat on damp packing can release odours and loosen wraps. Career-wise the classic route remains a two-to-three-year apprenticeship with a master potter, as at Asante Manso or Agojuve, leading to GNCC craft registration, TVET certification for those who want paper alongside skill, and eventually a shared studio; keep the daybook all the way through, because the makers who survive are the ones who know their own cost per hour.",
          "bulletPoints": [
            "Wrap each piece, bed in crumpled paper, box so nothing moves when rocked.",
            "Double-box for courier: inner box floats on paper cushions, FRAGILE on all six faces.",
            "Never stack bare glazed ware rim to rim in a crate.",
            "Apprenticeship, GNCC registration and a daybook of costs form the career spine."
          ],
          "keyTakeaway": "The pack is part of the product: an arrival intact is the review that brings the next buyer.",
          "realWorldExample": "A studio shipping twenty mugs from Accra to a shop in Cape Coast lost three in transit and switched to double-boxing with cloth wraps; the next crate of sixty arrived whole and the shop raised its order."
        }
      ],
      "commonMistakes": [
        "Photographing ware in bare midday sun: the highlights burn out, the glaze colour shifts and the buyer who receives the mug in shadow on WhatsApp claims it looks different from the picture.",
        "Pricing from the stall beside you instead of a costing sheet, so that both stalls quietly sell below full cost and neither can replace a kiln shelf.",
        "Boxing ware with nothing between the pieces: rims knock into rims, and a crate that leaves the studio perfect arrives as a refund conversation.",
        "Promising a hotel a matched order without keeping an approved sample set and reference piece, so every crate is a new argument about colour.",
        "Recording nothing: no daybook of hours, no log of glaze batches, so a repeat order cannot be reproduced and the profit story cannot be told."
      ],
      "wassceExamTips": [
        "Paper 1 asks business vocabulary as objective items: cost price, overheads, breakage allowance, wholesale versus retail. Learn the terms with a number beside each.",
        "On Paper 2 a question may read \"plan a set of ware for sale\": give the design drawings, the costing table with figures, and a stated market channel, not a vague intention to sell at the market.",
        "Paper 3 presentation carries marks for how the work is shown: a labelled portfolio board, clean test tile pages and a piece boxed as if for dispatch all signal professional handling of materials.",
        "If an appraisal question asks you to justify a price, walk the examiner through cost price then profit percentage; an answer with only the final figure earns almost nothing.",
        "Keep one portfolio entry on the use of Ghanaian design sources, showing how a tradition such as adinkra or kente geometry was adapted, because examiners reward honest cultural reference and penalise direct copying."
      ],
      "summaryChecklist": [
        "Can I sequence a portfolio of labelled entries that proves range, process and finish?",
        "Can I photograph glazed ware with soft light, a neutral backdrop and one true highlight?",
        "Can I build a selling price from materials, labour, overheads, breakage and profit in cedis?",
        "Can I describe how stalls, fairs and hotel sample orders each work in Ghana?",
        "Can I pack fragile ware so that it survives a tro tro journey and a courier box?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-portfolio-1",
        "title": "Setting up a portfolio photograph of a mug set",
        "problem": "Using only a school camera, a lamp, cards and cloth, photograph a four-mug set so the portfolio shows form, glaze colour and joinery truthfully. Describe the procedure a marker would award.",
        "stepByStepSolution": [
          "Choose open shade or set one lamp to the side as a single light source, so the curves model softly instead of flattening under overhead light (M1).",
          "Hang a neutral grey or black cloth behind and below the set; keep any coloured wax-print cloth out of frame so it cannot cast hue onto pale glaze (M1).",
          "Stand a white card opposite the lamp to bounce one clean vertical highlight down each mug, proving gloss without a hot white burn (A1).",
          "Rest the camera on a stack of books at mug height and frame level, so the walls look truly vertical and a slower shutter cannot blur (A1).",
          "Shoot the set together, then close-ups: one handle join, one wiped foot ring, one interior in raking light, and one frame with a hand holding a filled mug for scale (M1).",
          "Check the camera screen for true colour against the pot in daylight, reshoot anything shifted, and file each image with the entry label: title, clay, glaze, cone, size, price (A1)."
        ],
        "keyTakeaway": "One light, one neutral backdrop, one fill card: the truth of a glaze is a setup, not luck."
      },
      {
        "id": "ex-ce-portfolio-2",
        "title": "Pricing a six-bowl nesting set",
        "problem": "A set of 6 nesting bowls uses 0.9 kg of clay per bowl at GH¢0.50 per kg; glaze and both firings for the set cost GH¢35.10; labour is 40 minutes per bowl at GH¢12.00 per hour; other overheads are GH¢1.20 per bowl. If the studio adds 50 per cent profit on total cost, find the cost and selling price per bowl and for the set.",
        "stepByStepSolution": [
          "Clay per bowl: 0.9 × GH¢0.50 = GH¢0.45 (M1).",
          "Glaze and firing share per bowl: GH¢35.10 ÷ 6 = GH¢5.85 (M1).",
          "Labour per bowl: 40 ÷ 60 × GH¢12.00 = GH¢8.00 (M1).",
          "Cost price per bowl: GH¢0.45 + GH¢5.85 + GH¢8.00 + GH¢1.20 = GH¢15.50; set cost = 6 × GH¢15.50 = GH¢93.00 (M1).",
          "Add 50 per cent profit: GH¢93.00 × 1.50 = GH¢139.50 for the set (M1).",
          "Selling price: about GH¢140 the set, i.e. GH¢139.50 ÷ 6 = GH¢23.25 per bowl, rounded on the price card to GH¢140 (A1)."
        ],
        "keyTakeaway": "Price the set from the per-bowl cost line; rounding happens last and only on the price card."
      }
    ],
    "quiz": {
      "id": "quiz-ceramics-portfolio-craft-business",
      "topicId": "shs3-ce-t2-ceramics-portfolio-craft-business",
      "title": "Ceramics Portfolio and Business Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-portfolio-1",
          "quizId": "quiz-ceramics-portfolio-craft-business",
          "questionText": "Which lighting gives the truest photographs of glazed ware in a school with no studio?",
          "optionA": "Bare midday sun to bring out the colour",
          "optionB": "Overcast daylight or one side lamp with a white fill card",
          "optionC": "The camera flash held close to the glaze",
          "optionD": "Photographs taken under trees on a sunny day",
          "correctOption": "B",
          "subConcept": "Photographing ware",
          "explanation": "Soft wrapping light models the curve and a fill card draws one honest highlight down the glaze. Direct sun (option A) burns highlights out and shifts colour, and a close flash throws a hard white blob across the gloss.",
          "remediationTip": "Take one frame in sun and one in open shade, then compare the glaze colour to the pot itself."
        },
        {
          "id": "q-ce-portfolio-2",
          "quizId": "quiz-ceramics-portfolio-craft-business",
          "questionText": "A mug costs GH¢11.68 all-in to produce. Which selling price is defensible business practice?",
          "optionA": "GH¢10.00, to beat the next stall",
          "optionB": "GH¢11.68, exactly at cost",
          "optionC": "GH¢11.70, a small token mark-up",
          "optionD": "GH¢16.00, a profit of about 37 per cent",
          "correctOption": "D",
          "subConcept": "Pricing ware",
          "explanation": "Craft ware needs roughly 30 to 50 per cent profit over full cost to cover kiln replacement, downtime and reinvestment; GH¢16.00 on a GH¢11.68 cost gives about 37 per cent. Selling below cost (option A) subsidises the buyer.",
          "remediationTip": "Multiply the cost price by 1.3 to 1.5 and see which answer lands in that band."
        },
        {
          "id": "q-ce-portfolio-3",
          "quizId": "quiz-ceramics-portfolio-craft-business",
          "questionText": "Before a hotel confirms an order of fifty matched bowls, the ceramicist should first",
          "optionA": "supply an approved sample set and keep back one identical reference piece",
          "optionB": "deliver one unboxed crate so the buyer can inspect",
          "optionC": "quote a price verbally at the front desk",
          "optionD": "begin firing immediately and hope the glaze runs the same",
          "correctOption": "A",
          "subConcept": "Hotel and institutional orders",
          "explanation": "A signed-off sample plus a kept reference fixes colour, size and stacking for every later crate; everything else is argument after delivery. A verbal quote (option C) leaves price and date undefined.",
          "remediationTip": "Photograph and date the reference piece and store it with the written terms."
        },
        {
          "id": "q-ce-portfolio-4",
          "quizId": "quiz-ceramics-portfolio-craft-business",
          "questionText": "Which packing method best protects two mugs sent by courier between Accra and Kumasi?",
          "optionA": "Bare mugs wrapped together in one piece of cloth",
          "optionB": "Newspaper wrapping alone in a single carton",
          "optionC": "Each mug wrapped and bedded in crumpled paper so nothing touches a carton wall, then double-boxed and labelled FRAGILE",
          "optionD": "Loose mugs standing in a strong carrier bag",
          "correctOption": "C",
          "subConcept": "Packaging fragile ware",
          "explanation": "Wrapping, cushioning and double-boxing stop shocks reaching the glaze and keep ware from touching box walls; that combination survives a courier journey. Newspaper alone (option B) still lets the inner box slam the outer wall.",
          "remediationTip": "Close the packed box and rock it gently: if you hear anything shift, it is not packed yet."
        },
        {
          "id": "q-ce-portfolio-5",
          "quizId": "quiz-ceramics-portfolio-craft-business",
          "questionText": "Why does a studio keep a daybook of hours, costs and sale prices per piece?",
          "optionA": "Because market women require it",
          "optionB": "So the numbers can show which ware to make more of and which to drop",
          "optionC": "It is the only document WASSCE examines",
          "optionD": "To calculate tax on imported clay only",
          "correctOption": "B",
          "subConcept": "Records and studio practice",
          "explanation": "The daybook reveals true hourly earning per ware type, guiding what the studio repeats; it is a decision tool, not a formality. Options A, C and D overstate external demands and understate its business value.",
          "remediationTip": "Sum one month of entries and divide profit by hours worked; that single number justifies the habit."
        }
      ]
    }
  },
  {
    "id": "shs3-ce-t3-wassce-ceramics-project",
    "subjectId": "ceramics",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 4,
    "title": "WASSCE Ceramics: Project from Brief to Fired Presentation",
    "description": "The full examination workflow: decoding the practical question, running trial tiles, justifying form and function, scheduling work across firing windows, mounting and labelling the presentation and appraising the fired ware against the marking criteria.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The ceramics examination is three papers: Paper 1 objective and short answers, Paper 2 design and planning, Paper 3 the project or practical with hours of work and a presentation board.\n• Decode the question first: circle the directive verbs (design, make, decorate, plan), the product type, the stated function and any size or capacity demanded; every circled word is a mark.\n• Write a brief in one paragraph before touching clay: who uses the object, in what setting, to what duty, at what price band.\n• Thumbnails: draw 6 to 8 quick solutions in elevation, reject on function, and keep the strongest two with notes on handle, lip, foot and decoration.\n• Justification is tested evidence: form follows the user, function is proven by a test, and each material choice names a cone or temperature.\n• Run trial tiles early: same clay, same glaze batches, same cone and soak as the project; label the back of every tile in pencil before firing.\n• Tea or ink soak on a fired tile exposes crazing; a filing test on a spare bar shows whether the ware stacks and nests.\n• Firing windows: bisque around 900 to 1000 °C, stoneware gloss to cone 6 (about 1222 to 1240 °C); plan overnight cooling and never schedule the board for the same day as a hot kiln.\n• Dry slowly and evenly between stages; a project cracked in drying cannot be repaired, only remade, so keep spare bodies against loss.\n• Time plan across the practical hours: forming and joins take the largest share, decoration and glazing the next, and the final hour is reserved for finish and mounting.\n• Presentation board: fired work fixed securely, studies and test tiles arranged in process order, labels with title, clay body, glaze, cone, dimensions, capacity and price.\n• Written justification and a costing table belong on the board, not in a drawer; examiners mark what is displayed.\n• Self-appraise against the published criteria: suitability for purpose, handling of materials, creativity, colour and finish; score yourself before the marker does.\n• Common project failures at WASSCE level are damp thick bases bursting, unglazed or crazed food surfaces and work mounted without any evidence of trials.",
    "detailedNotes": {
      "overview": "This final ceramics topic assembles the whole syllabus into the examination project a WASSCE candidate must actually deliver. It covers decoding the practical question, planning through thumbnails and trial tiles, scheduling forming, drying and two firings across the available hours, mounting and labelling the presentation, and writing a self-appraisal against the marking criteria used by moderators.",
      "introduction": "A project is not a lucky pot; it is a controlled sequence of decisions with evidence left behind at every step. Candidates who fail the ceramics practical rarely fail from lack of skill: they fail because they started before the question was understood, fired ware that was not dry, chose a glaze they never tested or presented work with no paperwork beside it. Work through this topic as a rehearsal for the real three-paper examination, and keep every tile, sheet and note the way the syllabus expects to see them.",
      "realWorldContext": "In a SHS3 studio in Kumasi the ceramics practical runs over several days while the kiln in the corner fires bisque at roughly 950 °C overnight and a cone 6 gloss load the following afternoon, and the candidate who has planned those windows eats, sleeps and trims to a written timetable. Schools exhibit project boards before moderators visit, the same way a potter at Asante Manso or Agojuve lays out ware for a buyer: pieces fixed, tiles beside them, prices on cards. The West African Examinations Council reward structure here is blunt and honest, handling of materials, creativity and finish, the same three words a hotel buyer at Ada uses when rejecting or accepting a crate.",
      "objectives": [
        "Decode a WASSCE ceramics project question into a written brief, a product type, a function and a list of deliverables.",
        "Produce thumbnail studies and justify the chosen design on grounds of form, function and decoration.",
        "Plan and record clay, glaze and firing trials on labelled test tiles and use the results in design decisions.",
        "Schedule making, drying, bisque and gloss firings and mounting across the hours and days allowed by the examination.",
        "Mount, label and self-appraise the fired project against the criteria of suitability, handling of materials, creativity, colour and finish."
      ],
      "sections": [
        {
          "title": "Decoding the Question and Writing the Brief",
          "content": "The first hour of any ceramics project belongs on paper. Read the question twice and underline every directive verb: design and make demands planning evidence plus a fired object, decorate asks for a tested surface, and words such as functional, matched or for a stated user each carry marks that can only be claimed if the finished work visibly answers them. Note the constants the question gives, a capacity, a size, a setting such as a dining hall or a nursery, and a number of pieces, because a one-litre jug measured at 700 ml has failed a specification however handsome it is. Then write your own brief back to the examiner in one paragraph: who uses the object, where it lives, what duty it performs daily, and at what cost band it must sell or be judged. Keep this paragraph at the top of the scheme of work; every later decision, clay, tool, join, glaze, is justified against it, and a marker can follow that chain of reasoning on the board.",
          "bulletPoints": [
            "Circle the directive verbs, the product type, the function, the size or capacity and the number of pieces.",
            "Restate the question as your own one-paragraph brief: user, setting, duty, cost band.",
            "List the deliverables: drawings, studies, test tiles, fired work, costing, written justification.",
            "Decide the marking you must satisfy: function, handling of materials, creativity, finish."
          ],
          "keyTakeaway": "Marks live inside the verbs and nouns of the question; find them on paper before a ball of clay is weighed.",
          "realWorldExample": "A candidate whose question asked for a water jug for a school dining hall wrote that the jug would be lifted with one wet hand, filled from a tap and washed with a long brush; all three sentences later shaped the handle, the lip and the wide enough opening."
        },
        {
          "title": "Studies, Trial Tiles and Justified Choices",
          "content": "Design thinking in ceramics is drawn and fired, not wished for. Fill a sheet with six to eight thumbnail elevations in ten minutes, then reject on function before beauty: a handle that only one finger can pass, a foot that traps water, a jug lip that will run. Develop the two survivors into dimensioned working drawings with the capacity computed from the internal cylinder, then gather evidence: press or throw a row of test bars in the chosen body, bisque them, and glaze each with a different candidate surface at the recorded dip time and specific gravity, all fired to the same cone as the project will be. On the back of every tile, scratch the recipe number, cone and date while the clay is soft. Run the tests that a buyer or marker would run: a tea soak for crazing, hot water in a spare bar before cold water to feel thermal shock, a stack test for a set, a handle pull with a weighed bag. The justification paragraph on the board then writes itself from this evidence, and every claim is checkable.",
          "bulletPoints": [
            "Six to eight thumbnails, rejected on function, then two developed dimensioned studies.",
            "Test tiles: same body, same glaze batches, same cone and soak as the project.",
            "Label tiles in pencil on the back while soft; record dip time and specific gravity.",
            "Prove the claims: tea soak for crazing, hot and cold water for shock, weights on handles."
          ],
          "keyTakeaway": "A project defended by test tiles and measurements is an argument; one defended by adjectives is an opinion.",
          "realWorldExample": "Choosing between a commercial cone 6 gloss and a local ash glaze, a candidate in Ho fired both on marked bars, saw the ash surface craze in the tea test and lined the jug interior with the commercial glaze, keeping the ash colour for the outside."
        },
        {
          "title": "Production and Firing Windows on a Timetable",
          "content": "Ceramics is the only school subject whose examination cannot be finished on the day: clay must dry between operations and the kiln owns the nights. Build the timetable backwards from the exhibition or submission date. The gloss firing needs its own day plus a full overnight cooling, so it sits the day before presentation, never the morning of it. The bisque firing needs the same respect: ware must be bone dry before it loads, and a thick base that feels cool to the cheek is not dry, however the clock reads, because water flashes to steam near 100 °C and bursts damp ware or damages the load around it. Work forward through the making days in the order the material demands: forming, then stiffening, then trimming and handle fitting, then slow even drying, then bisque, then waxing and glazing with the foot wiped clean, then the gloss fire. Put a spare body or two in every load as insurance against a cracked rim, and note the cone pack numbers used so the record can be defended.",
          "bulletPoints": [
            "Plan backwards from the presentation day; the gloss fire plus overnight cooling comes first in the schedule.",
            "Bone-dry before bisque: test with the cheek, not the clock; damp thick bases burst near 100 °C.",
            "Sequence: form, stiffen, trim and handle, dry slowly, bisque, wax and glaze, wipe feet, gloss fire.",
            "Make spare bodies; a cracked rim on day three must not end the project."
          ],
          "keyTakeaway": "Respect the drying and cooling times and the kiln becomes an ally; ignore them and it is the examiner who fails you.",
          "realWorldExample": "A school in Cape Coast fired two project sections on consecutive nights; the group that crammed damp ware into the last bisque load lost six pieces to cracking and had to rebuild during the glazing day of the other group."
        },
        {
          "title": "Mounting and Labelling the Presentation",
          "content": "The board is the shop window and the viva at once. Fix the fired work securely, in shallow trays, ledges or ties that a moderator can lift without a balancing act, and place the strongest piece at the centre of the sight line. Around it arrange the process in readable order: the question and brief, the thumbnail sheet, the developed working drawing with dimensions and capacity, then the row of labelled test tiles with the chosen surface picked out. Give every element a label in the same format, title, clay body, glaze and cone, dimensions, capacity and price, and add the costing table for the production run so the business marks are visible without a conversation. Write the justification in short paragraphs keyed to the criteria: why this form fits the hand, how function was tested, what the trials decided. Check labels against the work before carrying, transport the board flat and upright, and arrive early enough to wipe dust from the foot rings with a damp cloth.",
          "bulletPoints": [
            "Fix ware safely; centre the hero piece at the sight line of a standing marker.",
            "Order the board as a story: question, brief, studies, tiles, finished work, costing.",
            "Uniform label format: title, clay, glaze and cone, size, capacity, price.",
            "Carry flat, stand early, and wipe the foot rings before the first visitor passes."
          ],
          "keyTakeaway": "Mount the board like a shop window: one hero piece fixed at the centre, evidence around it, facts under it, price beside it.",
          "realWorldExample": "A candidate at a school in Winneba whose board carried the finished jug with its spout photographed mid-pour, the crazing tiles on one side and the costing sheet on the other, was asked by the visiting moderator how much the jug would cost a buyer."
        },
        {
          "title": "Self-Appraisal Against the Marking Criteria",
          "content": "Before the board is carried out, mark your own work as an examiner would, in writing, on the final page. Take the criteria one at a time. Suitability for purpose: does the vessel hold its stated capacity, pour without a drip, accept two fingers through the handle and sit level? Write the tests you ran and what they showed. Handling of materials: state wall thickness measured at three points, describe how joins were scored, slipped and blended, and confirm the foot was wiped clean; a buried join or a glazed foot tells its own story against you. Creativity and invention: identify the one decision in the project that was yours, a form, a surface or a firing choice, and say what alternative you rejected and why. Colour and finish: judge surface evenness, glaze coverage, run marks and any crazing honestly. Finally, write one remediation note, because an examiner reading a list of faults with causes gets proof of knowledge even where the piece fell short. Then set prices on the price card using your costing table.",
          "bulletPoints": [
            "Appraise in writing against each published criterion; a table with scores is ideal.",
            "Support every claim with a measurement: fill line volume, wall thickness, handle clearance.",
            "Admit faults with causes; a diagnosed crazing line shows more knowledge than a hidden one.",
            "Name your one creative decision and the alternative you rejected."
          ],
          "keyTakeaway": "Honest written self-appraisal converts near misses into demonstrated understanding.",
          "realWorldExample": "The project write-up of a candidate in Sunyani admitted that the handle was tested at 1.5 kg rather than the 2 kg she had planned, with a note on the weak blend line; the marker recorded the honesty and the understanding it proved."
        }
      ],
      "commonMistakes": [
        "Starting to build before the directive verbs are underlined and the brief is decoded, then producing a beautiful object that answers none of the question.",
        "Firing a project straight from a cold, crowded kiln after one afternoon of drying: ware still damp in the base cracks or bursts in the bisque fire near 100 °C and the whole plan dies there.",
        "Skipping the test tile because time is short, then discovering the crazing or the pinholing only when the once-in-a-lifetime project piece comes out of the gloss firing.",
        "Presenting with the foot still glazed or gritty: ware that drags across the board or reads as stuck to the kiln shelf marks down finish before it is lifted.",
        "Writing the justification after the work is finished as a list of opinions, instead of logging decisions, measurements and test results as they happen during making."
      ],
      "wassceExamTips": [
        "Paper 1 expects the factual frame of the project: cone bands and their temperatures (bisque roughly 900 to 1000 °C, cone 6 near 1222 °C), clay body behaviour and the names of glaze defects. These are the quick marks that fund the long project.",
        "Paper 2 sets the planning marks: under timed conditions submit a scheme of work that lists the material and tool plan, the trial tiles, the firing windows and the costing table, in that order.",
        "Paper 3 awards suitability for purpose, handling of materials, creativity, colour and finish; the board must carry measurements and test results beside the work, because unverified claims earn almost nothing.",
        "Budget the practical hours by risk: forming and joins need the largest share, the final hour is reserved for finish and mounting, and nothing on the plan may depend on a firing with no cooling slack.",
        "In the written appraisal use the exact criterion words, suitability for purpose and handling of materials, and answer each with a measurement or a test you actually ran."
      ],
      "summaryChecklist": [
        "Can I decode a project question into a written brief with product type, function, size, decoration and deliverables?",
        "Can I run labelled trial tiles and use their results to choose a tested clay, glaze and cone?",
        "Can I plan making, drying and two firings across the available hours with slack before the exhibition date?",
        "Can I mount and label a presentation board that shows studies, tests, the fired piece, a justification and a costing?",
        "Can I score my own project against suitability, handling of materials, creativity, colour and finish, with reasons?"
      ]
    },
    "examples": [
      {
        "id": "ex-ce-project-1",
        "title": "Planning a jug project across a three-day practical window",
        "problem": "A candidate may work three days of five hours and needs a stoneware jug of about one litre capacity with a handle and a spout, bisque fired and gloss fired before the board is mounted. Plan the schedule.",
        "stepByStepSolution": [
          "Decode the brief: one-litre jug, handle, spout, tested function, mounted board; list these as the marks to be won before any clay is touched (M1).",
          "Day 1: weigh and wedge the trial-tile-proven stoneware, throw or coil-build two jug bodies leaving one spare against cracking, and set the bases to stiffen slowly under loose plastic (M1).",
          "Day 2, early hours: trim foot rings, pull handles, cut or pinch the spout aligned with the handle, and attach handles at the drinking angle with score, slip and blended joins (M1).",
          "Day 2, remaining hours: stand the jugs for even drying, stack the bisque load with pieces well apart and fire to roughly 900 to 1000 °C with a short soak, letting the kiln cool overnight (M1).",
          "Day 3: unload cold bisque ware, wax the feet, dip the chosen cone 6 glaze at the recorded specific gravity and dip time, wipe every foot clean on a damp sponge and fire the gloss load to its cone (M1).",
          "Final hour: while the gloss kiln cools, mount the board, label each piece with clay, glaze and cone, fill the jug to test the pour and the one-litre line, and write the self-appraisal (A1).",
          "The plan survives because the spare bodies and the overnight cooling absorb the two faults most likely to wreck the window: a cracked jug and a hot kiln (A1)."
        ],
        "keyTakeaway": "Schedule backward from the mounting hour and keep slack where failure is expensive, which in ceramics means before every firing."
      },
      {
        "id": "ex-ce-project-2",
        "title": "Running and reporting a two-glaze trial tile",
        "problem": "A candidate must choose between a commercial cone 6 glossy transparent and a local wood-ash glaze for the interior of a drinking jug. Describe the trial and the decision recorded for the board.",
        "stepByStepSolution": [
          "Press or throw three identical test bars from the chosen stoneware body, number them 1 to 3 in pencil, and bisque fire them together with the project ware (M1).",
          "Leave bar 1 bare as the control; dip bar 2 in the commercial glaze and bar 3 in the sieved ash glaze, each at its recorded specific gravity and a five-second dip (M1).",
          "Wipe the feet, set all three bars on one shelf with a witness piece and fire to cone 6 with the same soak the project will receive (M1).",
          "After cooling, inspect in raking light: bar 2 shows a glossy continuous surface; bar 3 shows pinholing where gas escaped and a dry patch where it ran thin (M1).",
          "Soak bars 2 and 3 overnight in weak tea, then rinse and dry: tea lines bar 3 with faint crackle stains of crazing while bar 2 stays clean (M1).",
          "Record the decision on the back of the tiles and on the board label: the commercial cone 6 glaze lines the jug as the food surface; the ash glaze is kept for the cool exterior, its rougher melt and crazing kept off water and drink (A1).",
          "The justification cites the cone number, the dip times, the surface observations and the tea test result, so the marker can audit the choice without firing anything again (A1)."
        ],
        "keyTakeaway": "Let the trial tile, not preference, decide the food surface: one overnight tea soak settles an argument that adjectives cannot."
      }
    ],
    "quiz": {
      "id": "quiz-wassce-ceramics-project",
      "topicId": "shs3-ce-t3-wassce-ceramics-project",
      "title": "WASSCE Ceramics Project Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ce-project-1",
          "quizId": "quiz-wassce-ceramics-project",
          "questionText": "A project question reads \"design and make a functional water jug for a school dining hall\". What should the candidate do first?",
          "optionA": "Start throwing immediately to save the practical hours",
          "optionB": "Choose bright decorative glaze colours for the surface effect",
          "optionC": "Copy a finished jug from the shelf and adjust its size",
          "optionD": "Write a brief and thumbnail studies fixing capacity, handle, spout and testing plan",
          "correctOption": "D",
          "subConcept": "Decoding the question",
          "explanation": "The verbs design and make demand planning evidence before production: capacity, ergonomics and tests fixed in thumbnails and a scheme of work. Starting at the wheel (option A) forfeits the Paper 2 planning marks.",
          "remediationTip": "Underline every verb and noun in the question and let each circled word own one line of the brief."
        },
        {
          "id": "q-ce-project-2",
          "quizId": "quiz-wassce-ceramics-project",
          "questionText": "Which is the strongest proof that a chosen interior glaze is safe for a drinking vessel?",
          "optionA": "It looks glossy and smooth in the classroom light",
          "optionB": "A past candidate used the same glaze in this studio",
          "optionC": "A cone 6 fired test tile shows a fitted, non-crazed glassy surface, and the supplier safety data confirms no lead or cadmium on food surfaces",
          "optionD": "The market seller who mixed it says it is safe",
          "correctOption": "C",
          "subConcept": "Trials and testing",
          "explanation": "Safety is demonstrated at the working temperature: a matured, fitted surface proved on a tile plus supplier chemistry data. Gloss judged by eye (option A) cannot detect crazing or leaching.",
          "remediationTip": "Add a tea or ink soak to every tile routine; stained crackle lines expose a failed glaze fit."
        },
        {
          "id": "q-ce-project-3",
          "quizId": "quiz-wassce-ceramics-project",
          "questionText": "A thick-based jug still feels cool and damp on the morning of the bisque fire. The correct treatment is to",
          "optionA": "load it close to the elements so the moisture bakes out quickly",
          "optionB": "dry it slowly and completely first, because near 100 °C trapped water flashes to steam and can burst the base",
          "optionC": "fire it anyway, since bisque temperatures are low",
          "optionD": "dip it in glaze to seal in the moisture",
          "correctOption": "B",
          "subConcept": "Drying and firing windows",
          "explanation": "Water expands violently as steam at 100 °C; damp thick sections burst in the fire and can damage the load around them. Quick heat (option A) only steepens the drying gradient.",
          "remediationTip": "Judge dryness by the cheek test and by weight, and leave a drying day in every plan before any fire."
        },
        {
          "id": "q-ce-project-4",
          "quizId": "quiz-wassce-ceramics-project",
          "questionText": "How should the fired project work be presented on the board?",
          "optionA": "Fixed securely at the centre or in shallow trays, labelled with title, clay, glaze and cone, size and price, with studies, test tiles and the costing placed beside it",
          "optionB": "Left loose in a carrying box and shown only when the marker asks",
          "optionC": "As photographs only, keeping the fragile work safe at home",
          "optionD": "Stacked with the drawing sheets folded underneath to save space",
          "correctOption": "A",
          "subConcept": "Mounting and labelling",
          "explanation": "The actual fired ware must be safely fixed, fully labelled and displayed with its process evidence; presentation marks follow what the board shows at a glance. A photograph alone (option C) presents none of the work itself.",
          "remediationTip": "Photograph your finished board and read it from two metres; anything illegible there is not yet a label."
        },
        {
          "id": "q-ce-project-5",
          "quizId": "quiz-wassce-ceramics-project",
          "questionText": "Which entry belongs in the written self-appraisal of a ceramics project?",
          "optionA": "I liked the blue glaze the most and would choose it again",
          "optionB": "The project took three days exactly as everyone planned",
          "optionC": "My friend said the handle looked very nice",
          "optionD": "Walls measured 6 mm at three points, the tea test showed no crazing, but the spout dripped once, so the lip was pinched forward before the gloss fire",
          "correctOption": "D",
          "subConcept": "Self-appraisal against criteria",
          "explanation": "An appraisal must cite measurements, tests, a fault and its remedy against the criteria of function and handling of materials. Opinions (options A and C) and bare timing (option B) appraise nothing.",
          "remediationTip": "Draft the appraisal as a table of criterion, evidence, verdict; opinions cannot survive that format."
        }
      ]
    }
  }
];
