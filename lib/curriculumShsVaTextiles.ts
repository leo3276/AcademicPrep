// Ghanaian SHS Visual Arts — Textiles
// WASSCE Visual Arts workroom syllabus across SHS 1, SHS 2 and SHS 3
// Textbook-grade notes, studio procedure with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS_TEXTILES_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-tx-t1-fibres-identification",
    "subjectId": "textiles",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Textile Fibres: Sources, Properties and Identification",
    "description": "Where textile fibres come from, how cotton, linen, rayon, silk, wool, nylon, polyester and acrylic behave, and how the burn, solubility and microscope tests identify an unknown cloth in the workroom.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• A fibre is the single hair-like unit from which all yarns and fabrics are built; knowing the fibre tells you how to wash, dye, press and store any cloth.\n• Cellulose fibres come from plants or plant pulp: cotton from the seed hair, linen (flax) from the stem bast, jute from the stem, and rayon/viscose regenerated from wood pulp forced through a spinneret.\n• Cotton: soft, flat handle, absorbs 7-8% of its own weight in moisture, burns fast with the smell of burning paper and leaves light grey ash that glows after the flame is removed.\n• Cotton is stronger when wet than when dry — the reason laundry survives heavy washing while silk does not.\n• Linen: long fine fibres, cool crisp handle, higher lustre than cotton, creases sharply, burns like cotton but the ash holds the fibre shape.\n• Rayon/viscose: silk-like lustre and very good absorbency, but it loses much of its strength when wet and may shrink; it burns quickly with a paper smell.\n• Protein fibres: silk is one continuous filament drawn from the cocoon of the silkworm; wool is a crimped staple shorn from the sheep fleece.\n• Wool absorbs up to 30% of its weight in moisture without feeling wet, resists creasing, feels warm and is destroyed by moths and strong alkalis.\n• Silk: fine, strong for its size, beautiful lustre, sensitive to perspiration rings, strong sunlight and alkali soaps; handle with clean dry hands.\n• Both wool and silk burn with the smell of burning hair and leave a brittle dark bead that crushes to powder between the fingers.\n• Manufactured synthetics from petroleum: nylon (a polyamide), polyester and acrylic; all three are thermoplastic, meaning heat softens and melts them.\n• Nylon: very strong and elastic, loses about 10-15% strength when wet, melts rather than burning and gives a sweet celery-like odour with a hard grey bead.\n• Polyester: absorbency only about 0.4%, so it dries fast, holds pleats and creases least, and melts with sputtering and black smoke.\n• Acrylic: bulked to feel wool-like, light and warm, but it pills and melts with a fishy odour and a hard, dark, irregular bead.\n• Burn test discipline: pull three short yarn ends from the cut edge with tweezers, hold each near (not in) a taper flame over a white tile, then record flame behaviour, odour and residue.\n• Microscope idea: cotton looks like a twisted flat ribbon, wool shows overlapping scales, silk is a smooth clear prism, and manufactured fibres are smooth and uniform.\n• In Ghana the cotton grown in the north around Tamale, Savelugu and Yendi is spun and woven into bataka strip cloth and the northern smock, while most printed cloth bought at Makola is cotton or a cotton-polyester blend.",
    "detailedNotes": {
      "overview": "Every textile decision in the workroom begins with the fibre. A student who can name the fibre can predict how the cloth will take dye, survive the iron and last in storage, and WASSCE Paper 1 tests exactly this classification knowledge. This topic builds the reference library in your head: three families of fibre (cellulose, protein, manufactured) and the properties that separate them. It then teaches the bench skills of identification — the burn test, the solubility test and the microscope idea — so that an unlabelled remnant from the stores can be named with evidence rather than guesswork.",
      "introduction": "Approach fibres the way a tailor approaches a bolt of cloth: first look, then feel, then test. Handle each sample with the four senses textiles use — sight for lustre, touch for handle, smell for the burn test, and patience for recording results. Keep a fibre record card for every sample you test all year; it becomes evidence in your Paper 3 portfolio and revision material for Paper 1.",
      "realWorldContext": "At Tamale Central Market, buyers of northern cotton smock cloth are really buying a cellulose fibre that was grown in the Volta and Northern Regions, ginned, spun and woven on narrow looms nearby. In the same market, cheap shiny fabric for school shirts is often polyester or a poly-cotton blend, and the difference shows the day the batik class boils a sample in wax water: cotton survives, polyester shrinks from the heat. The weavers at Bonwire and the batik workshops at Teshie all sort their cloth by fibre before they spend a cedi on dye.",
      "objectives": [
        "Classify a given fibre as cellulose, protein or manufactured and state its source",
        "Describe the handle, lustre, absorbency and heat behaviour of cotton, linen, rayon, silk, wool, nylon, polyester and acrylic",
        "Carry out a burn test safely and interpret flame behaviour, odour and residue",
        "Explain how solubility tests and the microscope idea confirm a burn-test conclusion",
        "Select the correct fibre family for a stated Ghanaian use such as smock cloth, batik base cloth or school uniform"
      ],
      "sections": [
        {
          "title": "Three Families: Where Fibres Come From",
          "content": "Fibres are sorted by source into three families, and the source explains almost everything about behaviour. Cellulose fibres come from plants: cotton grows as hair around the seed boll, linen and jute are bast fibres stripped from the flax and jute stems, and rayon is regenerated cellulose in which wood pulp is dissolved and forced through a metal spinneret to form a continuous filament. Protein fibres come from animals: silk is the cocoon filament of the mulberry silkworm, and wool is the crimped fleece shorn from sheep. Manufactured synthetic fibres — nylon, polyester and acrylic — are made from petroleum chemicals squeezed through spinnerets and drawn out into long, strong filaments. The rule of thumb is simple: plant fibres tolerate heat and washing, animal fibres tolerate heat poorly but feel warm and resilient, and synthetics are strong and wash-fast but are defeated by high ironing heat.",
          "bulletPoints": [
            "Seed fibre: cotton. Stem (bast) fibre: linen, jute. Leaf fibre: sisal. Fruit fibre: coir.",
            "Rayon is made from natural cellulose (wood pulp) but is manufactured, so it borrows habits from both worlds.",
            "Silk is the only natural filament fibre — one unbroken thread 300-900 m long from a single cocoon.",
            "Wool crimp — the natural wave in the fibre — gives bulk and resilience that cotton and most synthetics lack.",
            "Thermoplastic means the fibre softens and melts with heat; it applies to nylon, polyester and acrylic but never to cotton or wool."
          ],
          "keyTakeaway": "Name the source family first — cellulose, protein or manufactured — and the washing, dyeing and pressing rules follow automatically.",
          "realWorldExample": "The loom sheds at Bonwire hold cotton warp for most kente, while a modern imitations weaver in Agotime may add rayon or lurex weft for shine; the named cloth on the counter should declare the fibre mix because the two families take dye very differently."
        },
        {
          "title": "Cellulose Fibres at Work: Cotton, Linen and Rayon",
          "content": "Cotton is the workhorse of the Ghanaian textiles room. Its staple length is short (roughly 2.5-3.5 cm), it is soft with a dull flat handle, and it absorbs 7-8% moisture, which is why cotton garments stay cool against the skin in our climate and why cotton holland is the preferred base cloth for batik. Uniquely among common fibres, cotton is stronger when wet, so it endures hard laundering; it can be ironed hot, up to about 200 °C, and it takes all dye classes. Linen, from the flax stem, has longer smoother fibres, a crisp cool handle and brilliant lustre, but it creases along sharp fold lines because the fibre is stiff and brittle. Rayon reproduces the lustre and drape of silk at low cost and absorbs even better than cotton, but wet rayon may lose up to half its strength and cheap viscose shrinks badly unless the cloth is pre-shrunk before cutting.",
          "bulletPoints": [
            "Mercerised cotton gains lustre and dye uptake when the yarn is treated under tension with sodium hydroxide.",
            "Cotton withstands a hot iron near 200 °C; use steam for crease removal on linen.",
            "Always pre-wash viscose rayon before cutting a garment, or the finished piece shrinks out of fit.",
            "Wet-strength check: pull a dry cotton thread till it snaps, then repeat while soaked; wet cotton holds equal or greater force.",
            "Bast fibres such as linen have nodes visible under a low-power microscope, unlike the twisted-ribbon look of cotton."
          ],
          "keyTakeaway": "Cellulose fibres love water and heat; plan dyeing, washing and ironing around that strength.",
          "realWorldExample": "A Teshie batik workshop stretches scoured cotton lawn on bamboo frames because the cloth must drink the wax and give up the dye evenly; the same class refuses viscose rayon for boiling-out work because it collapses in hot water."
        },
        {
          "title": "Protein and Manufactured Fibres Compared",
          "content": "Silk and wool are protein fibres, chemically close to hair, and that fact decides their care. Wool absorbs up to 30% of its weight in vapour without feeling wet, resists creasing thanks to its crimp, and is warm because the matted fibres trap air; it is attacked by strong alkali, by moths, and it felts when hot, wet and rubbed together. Silk is finer and stronger than wool, with a prism-like lustre, but sunlight yellows it and perspiration leaves permanent rings. The manufactured fibres behave in the opposite way: nylon is the strongest common fibre and very elastic but weakens slightly when wet; polyester barely absorbs at all (about 0.4%), so colours can look flat unless dispersed dyes are used, yet it dries quickly and keeps a crease; acrylic mimics wool bulk without the cost but pills and builds static. Both families can be told apart in seconds by flame: protein fibres singe with a burning-hair smell, synthetics shrink, melt and drip with chemical odours.",
          "bulletPoints": [
            "Silk filament strength is comparable to steel wire of the same diameter — before sunlight and sweat damage it.",
            "Wool scales (the outer cuticle) are what make wool felt and what moths digest.",
            "Nylon softens around 180-210 °C; a hot iron can glaze or melt nylon trims.",
            "Polyester holds permanent pleats set by heat because it is thermoplastic.",
            "Acrylic is often blended with wool; the burn test shows wool-smoke plus plastic drip in one sample."
          ],
          "keyTakeaway": "Protein fibres burn like hair and fear alkali; manufactured fibres melt and drip and fear the hot iron.",
          "realWorldExample": "The hand-woven smock of the north is all cotton, but fashion shops in Kumasi sell machine-knit acrylic pullovers; in the market both look like warm cloth, and only the burn test separates burning hair-feather from sweet plastic drip."
        },
        {
          "title": "Identifying an Unknown Fibre: Burn, Solubility and Microscope",
          "content": "Identification is a sequence of tests, each recorded before the next begins. First the burn test: with tweezers, pull three yarn ends from the cut edge of the sample, hold each near the flame of a taper rather than in it, and watch four things — does it approach the flame, how does it burn, what does it smell of, and what residue remains. Cellulose ignites readily, burns after the flame is withdrawn, smells of paper and leaves soft grey ash; protein curls away, self-extinguishes, smells of burning hair and leaves a crushable black bead; synthetics shrink, melt and drip, smell sweet, chemical or fishy, and cool into a hard bead. Second the solubility test: a 1 cm square of yarn is placed in a labelled test of a specific solvent — for example a commercial rayon solvent dissolves viscose while cotton is untouched. Third the microscope idea: a single fibre mounted on a slide shows cotton as a twisted ribbon, wool as a scaled cylinder, silk as a smooth transparent prism, and manufactured fibres as uniform rods with regular cross-sections. One test suggests; two tests confirm.",
          "bulletPoints": [
            "Never test fabric straight from a dusty shelf; fresh ends from the cut edge give honest odour and residue.",
            "Test warp and weft separately — blends often place cotton in the warp and polyester in the weft.",
            "Keep long hair tied back and work over a white tile; the burn test is small-scale fire work.",
            "Record the result on the sample card in the examiner order: flame, odour, residue, conclusion.",
            "A blend such as poly-cotton shows both behaviours; note partial ash plus melting drip rather than forcing one answer."
          ],
          "keyTakeaway": "Run the tests in order — burn, solubility, microscope — and name the fibre only when two of the three agree.",
          "realWorldExample": "A WASSCE candidate in the Textiles practical at a Kumasi school is handed an unlabelled remnant and expected to prove its fibre by the burn test in front of the supervisor, exactly as quality staff do at a textile finishing unit before a dye batch is booked."
        }
      ],
      "commonMistakes": [
        "Calling any shiny cloth silk: rayon and trilobal polyester have high lustre too, so name the fibre only after a burn test.",
        "Holding the yarn sample inside the flame until it chars black; the correct method is to bring it near the flame and read the reaction, or every fibre appears to burn the same.",
        "Assuming a fabric is a single fibre: many school shirts are 65% polyester 35% cotton, and the label or a two-stage burn must be consulted before dye or iron temperature is chosen.",
        "Confusing rayon with polyester in the burn record: rayon burns fast with paper smell and ash, polyester melts and drips; writing one for the other loses both marks.",
        "Testing a dirty, sized or starched remnant without pulling fresh ends, then reporting a wrong result because sizing changed the flame behaviour."
      ],
      "wassceExamTips": [
        "Paper 1 objective questions love fibre sources: memorise that cotton is seed, linen is stem, silk is a filament and wool is a staple, and you answer those in under twenty seconds.",
        "In Paper 2 planning questions, justify a fabric choice by fibre property — write \"cotton was chosen because its high absorbency takes the dye evenly\" and the property-to-decision mark is collected.",
        "Paper 3 practical examiners observe handling of materials: when you burn a sample, show the safe method (tweezers, taper, white tile) and they award the handling mark even before reading the answer.",
        "A sample board should state fibre content for every cloth used; an unlabelled board loses presentation marks that cost nothing to earn.",
        "For short-answer questions use the examiner words: flame behaviour, odour, residue, conclusion. A one-word answer such as \"it melted\" without odour or conclusion fetches no mark."
      ],
      "summaryChecklist": [
        "Can I sort any named fibre into cellulose, protein or manufactured and state its source?",
        "Can I describe the handle, absorbency and heat behaviour of cotton, linen, rayon, silk, wool, nylon, polyester and acrylic?",
        "Can I perform a burn test safely and report flame, odour and residue in that order?",
        "Can I explain how a solubility test or microscope reading confirms my burn-test conclusion?",
        "Can I justify a Ghanaian fabric choice such as batik base cloth or smock fabric by fibre property?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-fibres-1",
        "title": "Identifying Three Unlabelled Yarns by Burn Test",
        "problem": "The workroom stores keeper has three unlabelled cones of yarn, marked only A, B and C. Using the burn test and one confirming test, identify each and record the results for the stores register.",
        "stepByStepSolution": [
          "Step 1 (M1): Pull three 5 mm yarn ends from each cone with tweezers and lay them on separate white tiles away from the cone, so no loose fibre drifts near the flame.",
          "Step 2 (M1): Light a taper and hold yarn A near (not in) the flame; it ignites at once, keeps burning after removal, smells of burning paper and leaves light grey, feathery ash.",
          "Step 3 (A1): Record A as a cellulose fibre — cotton — on the strength of paper odour plus glowing ash; confirm with the microscope, which shows the twisted flat ribbon of cotton.",
          "Step 4 (M1): Repeat for yarn B: it curls from the flame, chars, self-extinguishes, smells of burnt hair and leaves a dark brittle bead that powders when pressed.",
          "Step 5 (A1): Record B as protein — wool or silk; because the yarn is a lofty crimped staple rather than a fine smooth filament, conclude wool.",
          "Step 6 (M1): Repeat for yarn C: it shrinks back from the flame, melts and drips with a sweet chemical smell, and cools into a hard black bead that will not crush.",
          "Step 7 (A1): Record C as manufactured polyester; the confirming solubility check (untouched by water, softens in hot soda solution) is noted, and the register entry reads: A cotton, B wool, C polyester."
        ],
        "keyTakeaway": "Flame, odour, residue in that order — then one confirming test — turns an unknown yarn into a named fibre that can be safely dyed, ironed and stored."
      },
      {
        "id": "ex-tx-fibres-2",
        "title": "Choosing Base Cloth for a Batik Project",
        "problem": "A student must buy cloth for a first batik panel that will be waxed, dipped in cold-water dye and boiled in soda water to remove wax. Three bolts are available at the market stall: cotton holland, polyester dress lining and viscose rayon. Choose and justify.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the working conditions the cloth must survive: molten wax near 80 °C, a dye bath, and boiling water with soda ash for wax removal.",
          "Step 2 (M1): Burn-test one yarn from each bolt edge: the holland gives paper odour and grey ash (cotton), the lining melts and drips (polyester), the rayon burns fast like paper but the wet-pull test shows it lost strength when soaked.",
          "Step 3 (M1): Compare absorbency: cotton absorbs 7-8% and takes the dye readily; polyester sheds water, so the dye sits on the surface; rayon absorbs well but weakens in wet handling.",
          "Step 4 (M1): Rule out polyester because boiling wax water approaches its heat-setting range and it will not hold the dye, and rule out rayon because the boil-out and repeated wringing would stretch and tear the wet cloth.",
          "Step 5 (A1): Conclude: cotton holland is chosen because it is strong when wet, tolerates hot wax and boil-out, and its absorbency gives even colour; the justification is written in the project log.",
          "Step 6 (A1): State the price-to-performance note for the board: the holland costs more per yard than the lining but saves the whole panel, and a marked swatch of the tested yarn is pinned to the log as proof."
        ],
        "keyTakeaway": "Fibre knowledge is money: the burn and wet-strength tests done at the market stall prevent a ruined panel and wasted dye later."
      }
    ],
    "quiz": {
      "id": "quiz-shs1-tx-t1-fibres",
      "topicId": "shs1-tx-t1-fibres-identification",
      "title": "Textile Fibres Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-fibres-1",
          "quizId": "quiz-shs1-tx-t1-fibres",
          "questionText": "Which of the following textile fibres is obtained from the stem of a plant?",
          "optionA": "Linen",
          "optionB": "Cotton",
          "optionC": "Silk",
          "optionD": "Wool",
          "correctOption": "A",
          "subConcept": "Fibre Sources",
          "explanation": "Linen is a bast fibre stripped from the stem of the flax plant. Cotton is the seed hair of the boll, silk is the cocoon filament of the silkworm and wool is the fleece of the sheep, so none of the three comes from a stem.",
          "remediationTip": "Learn the plant part with the fibre: seed (cotton), stem (linen, jute), leaf (sisal), fruit (coir)."
        },
        {
          "id": "q-tx-fibres-2",
          "quizId": "quiz-shs1-tx-t1-fibres",
          "questionText": "A yarn sample burns with the smell of burning hair and leaves a brittle black bead that crushes to powder. The sample belongs to which fibre group?",
          "optionA": "Cellulose fibres such as cotton",
          "optionB": "Manufactured fibres such as nylon",
          "optionC": "Protein fibres such as silk or wool",
          "optionD": "Regenerated fibres such as viscose rayon",
          "correctOption": "C",
          "subConcept": "Burn Test Reading",
          "explanation": "Burning hair is the signature of protein fibres, and the crushable bead confirms it. Cotton and rayon give a paper smell with soft grey ash, while nylon melts and drips into a bead that cannot be crushed.",
          "remediationTip": "Pair each family with one word: cellulose = paper, protein = hair, synthetic = plastic."
        },
        {
          "id": "q-tx-fibres-3",
          "quizId": "quiz-shs1-tx-t1-fibres",
          "questionText": "How does polyester yarn usually behave in a burn test?",
          "optionA": "It burns quickly and continues to glow after the flame is removed",
          "optionB": "It shrinks from the flame, melts and drips, then cools to a hard bead",
          "optionC": "It does not react to the flame at all",
          "optionD": "It smoulders and leaves feathery grey ash",
          "correctOption": "B",
          "subConcept": "Thermoplastic Behaviour",
          "explanation": "Polyester is thermoplastic: heat melts it, so it pulls away from the flame, drips and hardens into a bead that cannot be crushed. Continuing to burn with ash (options A and D) is cellulose behaviour, and no common fabric is flame-proof by fibre alone.",
          "remediationTip": "Remember: synthetics melt, naturals burn. Approach, drip, hard bead equals manufactured fibre."
        },
        {
          "id": "q-tx-fibres-4",
          "quizId": "quiz-shs1-tx-t1-fibres",
          "questionText": "Which statement about cotton is correct?",
          "optionA": "It loses most of its strength when wet",
          "optionB": "It melts at normal ironing temperatures",
          "optionC": "It is a protein fibre",
          "optionD": "It is stronger when wet than when dry",
          "correctOption": "D",
          "subConcept": "Cotton Properties",
          "explanation": "Water swells the cotton fibre and increases its tenacity, which is why cotton linen survives hard laundering. Rayon loses strength when wet, cotton does not melt under a hot iron, and cotton is cellulose, not protein.",
          "remediationTip": "Contrast the two soak-and-pull results: cotton holds or gains, rayon gives way — that test alone separates them."
        },
        {
          "id": "q-tx-fibres-5",
          "quizId": "quiz-shs1-tx-t1-fibres",
          "questionText": "The bataka strip cloth woven on narrow looms in northern Ghana around Tamale is traditionally made from which fibre?",
          "optionA": "Cotton",
          "optionB": "Acrylic",
          "optionC": "Silk",
          "optionD": "Linen",
          "correctOption": "A",
          "subConcept": "Ghanaian Fibre Use",
          "explanation": "The smock cloth of the north is woven from cotton grown, ginned and spun in Ghana. Acrylic is an imported manufactured fibre, silk is not produced commercially in the region, and linen comes from flax, a cool-climate crop.",
          "remediationTip": "Link each Ghanaian cloth to its fibre: smock and bataka = cotton, batik base = cotton lawn or holland, kente = cotton with occasional rayon weft."
        }
      ]
    }
  },
  {
    "id": "shs1-tx-t1-yarn-fabric-construction",
    "subjectId": "textiles",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "From Fibre to Fabric: Yarn Making and Construction",
    "description": "How staple fibres are spun into yarn, what twist direction and yarn count do to cloth, how plain, twill and satin weaves differ, and how knitted and non-woven fabrics are built.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Spinning converts short staple fibres into continuous yarn by drafting (pulling the mass out thinner) and twisting so the fibres lock onto each other.\n• Hand methods: the drop spindle and takli spin and wind together; the wheel with flyer and bobbin drafts, twists and winds in one motion; industry uses ring frames.\n• Twist per inch controls the yarn: more twist (to a limit) gives a stronger, thinner, harder yarn; over-twisted yarn kinks and stored twist makes cloth skew.\n• Twist direction is read from the surface diagonals: Z twist runs like the middle stroke of the letter Z (bottom left to top right), S twist the other way.\n• A fabric woven with all singles twisted the same way leans diagonally when washed; balanced cloths alternate S and Z singles, or use balanced two-ply yarn.\n• Plying doubles or trebles singles yarns with twist in the opposite direction, balancing the yarn and adding strength and evenness.\n• Yarn numbering: in the English cotton count system the number is the count of 840-yard hanks that weigh one pound, so 40s is finer than 20s; in denier and tex a higher number means a coarser yarn.\n• Weaving interlaces two thread sets on a loom: the warp runs lengthwise, is stronger and least stretchy, and the weft (filling) is carried across by the shuttle.\n• Loom motions in order: shedding (heddles lift warp shafts), picking (shuttle passes weft), beating-up (reed presses the pick home).\n• Plain weave: one over one under, the maximum number of interlacings, so it is the strongest, coolest and most durable weave — muslin, organdie, bataka.\n• Twill weave: at least two over one under, producing a diagonal wale line; it packs more yarn per inch, drapes better and hides soil in the groove — denim, drill, gabardine.\n• Satin weave: four or more over one with interlacings scattered, giving long floats, maximum lustre and a soft handle but a snag-prone surface — charmeuse, dress satins.\n• Weft knitting (hand knitting and most machine knits) builds fabric from one lengthwise yarn: a horizontal row of loops is a course, a vertical column is a wale; knits stretch and may ladder.\n• Warp knitting (tricot, raschel) feeds many yarns lengthwise at once; the fabric is stable, resists laddering and is used for linings and interliners.\n• Non-woven fabrics skip yarn altogether: wool felt is matted from fibres by heat, moisture and friction, and bonded interfacing holds fibre webs with glue or heat.\n• Fabric edges: the selvage is the loom-finished lengthwise edge; the crosswise grain stretches more than the lengthwise grain, and true bias at 45 degrees stretches most of all.\n• Kente is built from narrow strips roughly 8-10 cm woven on a narrow loom at Bonwire and Agotime, then sewn edge to edge into a full cloth.",
    "detailedNotes": {
      "overview": "A fabric is a structure, and this topic shows how it is assembled from the fibre upward: drafted and twisted into yarn, then interlaced, interlooped or matted into cloth. Students meet the vocabulary the examiner expects — warp, weft, wale, course, float, Z twist, cotton count — and learn to read a cloth backwards from its edge. The construction method decides what a fabric is fit for: a plain-woven cotton for batik, a twill for school trousers, a knit for a T-shirt, felt for a craft base. Practical work this term includes spindle spinning a cotton wisp and testing the twisted yarn against an unbalanced one.",
      "introduction": "Think in three stages every time you inspect a fabric: fibre (what is it made of), yarn (how was it spun and numbered), construction (how was it built into cloth). Carry a 5 cm square of each fabric you handle this term and write these three answers on the back. By the end of the term the pile of squares becomes your own construction library, and Paper 1 questions on wales, courses and weave structures will be reading, not guessing.",
      "realWorldContext": "Watch a smock weaver at Savelugu dress his warp: hundreds of hand-spun cotton ends, each carrying stored Z twist from the takli, are threaded through heddles so the shed opens cleanly on the narrow loom. At Bonwire the same logic produces kente strips 8-10 cm wide that must be joined edge to edge, and any weft that is over-twisted pulls the strip out of square. In your own bag, school trousers are a cotton twill, the shirt may be a plain-weave poplin, and the track jersey is a weft knit — three different construction methods sitting on one body.",
      "objectives": [
        "Describe the drafting and twisting actions of hand and machine spinning",
        "Read twist direction as S or Z and explain its effect on fabric skew and balance",
        "Interpret cotton count and denier numbers and state which yarn is finer",
        "Distinguish plain, twill and satin weaves by interlacing, float and properties",
        "Explain the difference between warp and weft knitting, wale and course, and identify non-woven fabrics"
      ],
      "sections": [
        {
          "title": "Spinning: Drafting and Twisting Staple Fibres",
          "content": "Short fibres become a usable thread through spinning, and spinning is simply drafting plus twist plus winding. The spinner holds a soft mass of combed cotton or wool, draws (drafts) a ribbon of fibres thin enough to become yarn, then twists it so each fibre lies along the helix and grips its neighbours. On the takli or drop spindle, the whorl keeps the twist spinning while the hand drafts and the spindle winds the yarn; on the great wheel and later the flyer-and-bobbin wheel, rotation, drafting and winding happen together, which is why wheel yarn is more even. Twist is what gives yarn strength: an untwisted puff of fibre falls apart, and the first mark in the practical is won by showing how twist per inch changes what the yarn can carry. After spinning, the yarn is wound off, inspected for thick and thin places, and stored hankled until weaving or knitting uses it.",
          "bulletPoints": [
            "Combing aligns fibres parallel before drafting; carding tangles them for a woolen-spun, lofty yarn.",
            "Drafting thins the fibre ribbon; twist locks it; winding stores the finished yarn.",
            "A simple test: ply two equal yarn lengths and compare with a single — the two-ply is stronger and rounder.",
            "Too little twist sheds fibres in wear; too much twist stores energy that later twists the fabric out of shape.",
            "Spindle, takli, flyer wheel and ring frame are the four classic spinning stages students should be able to name in order."
          ],
          "keyTakeaway": "Spinning is drafting, twisting and winding; the amount of twist decides the strength, thickness and temper of every metre of cloth that follows.",
          "realWorldExample": "The women of a cooperative near Tamale spin northern cotton on the takli while sitting, and the slightly irregular, lively singles they produce are exactly what the smock weavers prefer, because a hand-spun warp gives the smock its soft broken stripe."
        },
        {
          "title": "Twist Direction, Plying and Yarn Numbering",
          "content": "Hold a twisted yarn vertically and read the surface diagonals: if they climb from bottom left to top right the yarn is Z twist; the opposite is S twist. Twist is stored torque, so a fabric woven from singles all twisted the same way leans, and the skew grows each time it is washed — this is why balanced cloths alternate S and Z singles in the yarn feed, or use two-ply yarn in which two singles are twisted together in the opposite direction, cancelling most of the stored torque and producing a rounder, stronger, more even thread. Yarn thickness then has to be named, and there are two competing habits: the cotton count system quotes the number of 840-yard hanks that weigh one pound, so the larger the count the finer the yarn — 40s thread is finer than 20s; the weight systems (denier and tex) quote weight for a fixed length, so the larger the number the coarser the yarn. Exam questions turn entirely on knowing which system reverses. Sewing threads in the workroom cupboard follow cotton count, while rayon machine embroidery threads are commonly numbered on the reverse weight logic, so a 60-weight embroidery thread is finer than a 40-weight.",
          "bulletPoints": [
            "Read Z by imagining the middle stroke of the letter Z climbing to the right; S runs the other way.",
            "Plying always reverses the single direction: two Z singles plied together form an S two-ply.",
            "Cotton count: 840 yd makes one thread count number; one pound is 7 hanks for a 1-count yarn.",
            "Denier: grams per 9,000 metres of filament; higher number means heavier, coarser yarn.",
            "S-twist weft in Z-twist warp (or balanced plies everywhere) is the recipe for a fabric that stays square in the wash."
          ],
          "keyTakeaway": "Direction balances the fabric and the numbering system tells you thickness — say which system you are quoting before you compare two yarns.",
          "realWorldExample": "When a Bonwire weaver buys factory cotton warp at the Kumasi market, he asks for the count and twists the strand to read the direction; a well-balanced 2-ply warp keeps the finished kente strip flat, while cheap twisted singles pull the cloth crooked before it is even joined."
        },
        {
          "title": "Woven Structures: Plain, Twill and Satin",
          "content": "Weaving crosses warp and weft at right angles, and the way the warp threads are lifted decides the structure. In plain weave each weft passes over one warp and under the next, alternating every pick, so the cloth carries the maximum number of interlacings: it is the strongest, hardest-wearing and most open to air for its thread size, and its surface is dull because every thread is busy bending. Twill weave lifts the pattern so each weft passes over two or more warps and steps one place to the side each pick, throwing a visible diagonal wale across the cloth; the fewer interlacings let more yarn crowd into the inch, giving weight, drape and a surface that hides soil in its groove — cotton drill and denim for school trousers, gabardine for suits. Satin weave uses four or more over one with the interlacings scattered so no diagonal appears, leaving long floats lying on the surface; those floats reflect light continuously, which is the famous satin lustre, but they snag on every rough nail and button, so satin is a dress cloth, not a work cloth. The three structures can be pulled from any old garment edge and taught in ten minutes, which is exactly how long the question takes in Paper 1.",
          "bulletPoints": [
            "Count the float to name the structure: over 1 (plain), over 2 or 3 with a step (twill), over 4 or more scattered (satin).",
            "Plain weave fabrics include muslin, organdie, poplin and the bataka of the northern smock.",
            "Twill examples: denim, drill, gabardine; the diagonal line runs from lower left to upper right on the face.",
            "Satin examples: charmeuse and dress satins; long floats give lustre but weak, snag-prone surfaces.",
            "More interlacings mean a firmer cooler cloth; more float means a shinier softer-draping but more delicate cloth."
          ],
          "keyTakeaway": "Interlacing pattern is destiny: plain wears hardest, twill drapes and hides dirt, satin shines and snags.",
          "realWorldExample": "A Form 1 class cutting its batik panel at the school pulls one weft thread from the selvage: if the exposed warp line shows over-under-over-under in a checker, the cloth is plain-woven cotton holland, exactly what the wax-and-dye lesson needs."
        },
        {
          "title": "Knitted and Non-Woven Fabrics",
          "content": "Weaving interlaces; knitting interloops, and the difference explains why your jersey T-shirt stretches and your drill trousers do not. In weft knitting — hand knitting and most garment knits — one yarn runs across the width, laying a horizontal row of loops called a course, and the vertical columns of loops are wales; because every loop can slide open, the fabric stretches readily across and down and can ladder if a loop is broken. Warp knitting feeds many yarns lengthwise, each looping to several neighbours, so tricot and raschel fabrics resist laddering, are stable and thin — the reason linings, interliners and net fabrics are warp knits. Non-woven fabrics abandon yarn entirely: traditional felt mats wool fibres together with heat, moisture and vigorous rolling until the scales lock permanently, while modern bonded interfacings glue or heat-set a web of fibres; the result has no grain at all, which is why it cuts without fraying and stiffens collars and cuffs. A candidate who can sort any workroom fabric into woven, knitted or non-woven, then name warp, weft, wale, course and float on it, has covered most of the construction marks on the Paper 3 handling sheet.",
          "bulletPoints": [
            "Course = horizontal row of knit loops; wale = vertical column — the memory hook is that wales run like warp.",
            "Weft knits stretch and ladder; warp knits are stable and run-resistant.",
            "Felt is the classic non-woven: matted fibre, no yarn, no grain, cut edges that never fray.",
            "Bonded interfacing is a non-woven used to stiffen collars, cuffs and facings in garment work.",
            "Check grain before cutting: woven cloth must be squared by pulling a weft thread; knits are squared from the wale line parallel to the selvage."
          ],
          "keyTakeaway": "Interlaced, interlooped or matted — the construction method sets stretch, drape, fray and fitness for use.",
          "realWorldExample": "At the Suame Magazine repair bays, machine filters are made from bonded non-woven web that cuts without fraying, while in the same town tailors sell tricot-lined jackets; both are non-woven or warp-knit examples the class can photograph for the construction board."
        }
      ],
      "commonMistakes": [
        "Writing \"higher number always means coarser yarn\": true for denier and tex but false for cotton count, where 40s is finer than 20s — always name the system.",
        "Confusing wale and course: wales are the vertical columns of loops, courses the horizontal rows; the wrong labels cost both marks on a knit-fabric diagram.",
        "Cutting a garment on a crooked fabric: an unbalanced hand-spun weave skews diagonally, so a skirt cut straight from the roll twists at the hem after the first wash.",
        "Calling any fabric with a shiny surface satin: plain-weave filament rayon and glazed cotton also shine; the float pattern, not the gloss, names the weave.",
        "Using a dull cutting blade on a knit: the edge drags loops and runs the fabric instead of cutting, so sharp shears and a single confident stroke are the studio habit to build."
      ],
      "wassceExamTips": [
        "Paper 1 asks for definitions with a number attached: learn \"plain weave is one up one down\", \"twill shows a diagonal wale\", \"satin has long floats\", and answer in that exact construction.",
        "In Paper 2 design questions your fabric choice must cite construction: write \"plain weave selected because its maximum interlacings resist the boil-out process\" rather than a bare fabric name.",
        "Paper 3 supervisors give handling marks for squaring fabric before cutting — always pull a weft thread from the end and trim square to it before marking chalk lines.",
        "Diagram questions on the loom require the three motions in order (shedding, picking, beating-up); practise a labelled sketch until it takes under three minutes.",
        "When a question gives two yarn numbers without a system, state the assumed system in your answer line — examiners award the method mark for the reasoning even if the candidate expected cotton count."
      ],
      "summaryChecklist": [
        "Can I describe drafting, twisting and winding in hand and machine spinning?",
        "Can I read S or Z twist on a yarn and explain how unbalanced twist skews fabric?",
        "Can I say which is finer between two numbered yarns and name the numbering system?",
        "Can I identify plain, twill and satin weave from float pattern and state one property of each?",
        "Can I label warp, weft, wale, course and float on fabric samples and sort any cloth into woven, knitted or non-woven?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-yarn-1",
        "title": "Balancing a Crooked Hand-Woven Strip",
        "problem": "A student has woven a small cotton strip on the frame loom using singles yarns all twisted Z. After washing, the strip leans like a parallelogram. Diagnose the cause and plan a corrected weaving.",
        "stepByStepSolution": [
          "Step 1 (M1): Lay the washed strip on the table with the selvages free and observe that the weft lines lean to one side while both selvage edges are straight — the classic sign of unbalanced stored twist.",
          "Step 2 (M1): Pull one warp and one weft end and roll each between thumb and finger on the table: both springs open toward the Z direction, confirming all-Z singles were used in both directions.",
          "Step 3 (A1): Record the diagnosis: warp and weft carry twist in the same direction, so their torques add and pull the cloth diagonally out of square.",
          "Step 4 (M1): Plan the correction: either ply the singles into balanced two-ply yarn before weaving, or use S-twist singles for the weft while keeping Z for the warp.",
          "Step 5 (M1): Weave a 10 cm trial strip with the corrected yarn and wash it with the same action used the first time.",
          "Step 6 (A1): Measure the trial: the weft line now sits square to the selvage within the tolerance, so the balanced plan is adopted for the final project strips and written up on the sample card."
        ],
        "keyTakeaway": "A fabric that leans after washing is a twist-balance problem: opposite or plied twist in the two thread sets returns the cloth to square."
      },
      {
        "id": "ex-tx-yarn-2",
        "title": "Reading the Construction of an Unknown Fabric",
        "problem": "Given an unlabelled fabric remnant from the market, work out its warp and weft direction, weave structure and likely fibre handling notes, and present the reading on a sample card.",
        "stepByStepSolution": [
          "Step 1 (M1): Trim one end parallel to the firm loom-made selvage; the threads running that way are warp, and the crosswise threads released from the cut edge are weft.",
          "Step 2 (M1): Using a tweezers and a 10x lens (or the strong class magnifier), trace one weft over the warp: it passes over two warp threads and steps one place along each pick, and a diagonal line is visible across the surface.",
          "Step 3 (A1): Name the structure: the stepped diagonal makes it a twill weave, not a plain weave or satin.",
          "Step 4 (M1): Pull one warp and one weft end to dry, then test stretch: warp stretches least, weft a little more, and a 45-degree pull stretches most, confirming the lengthwise grain is the strongest.",
          "Step 5 (M1): Run the burn test on one yarn end to note fibre, and check the count by comparing yarn thickness against known 20s and 40s threads on the reference board.",
          "Step 6 (A1): Fill the card: twill structure, warp direction marked, strong drapey cloth suited to trousers or work skirts, cut on the squared grain — the card is signed and pinned to the fabric."
        ],
        "keyTakeaway": "Read any cloth by working backwards from the selvage: grain first, then float pattern, then fibre and count — the order cannot be rushed."
      }
    ],
    "quiz": {
      "id": "quiz-shs1-tx-t1-yarn-fabric",
      "topicId": "shs1-tx-t1-yarn-fabric-construction",
      "title": "Yarn and Fabric Construction Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-yarn-1",
          "quizId": "quiz-shs1-tx-t1-yarn-fabric",
          "questionText": "A yarn held vertically shows surface diagonals running from bottom left to top right. The yarn is twisted in which direction?",
          "optionA": "S twist",
          "optionB": "Z twist",
          "optionC": "Balanced twist",
          "optionD": "Double twist",
          "correctOption": "B",
          "subConcept": "Twist Direction",
          "explanation": "The climb from bottom left to top right matches the middle stroke of the letter Z, so the yarn is Z twist. S twist runs the opposite way, and balanced or double describe plying, not the single direction.",
          "remediationTip": "Draw a large Z and S and place a twisted strand beside each letter until the match is automatic."
        },
        {
          "id": "q-tx-yarn-2",
          "quizId": "quiz-shs1-tx-t1-yarn-fabric",
          "questionText": "In the English cotton count system, a yarn numbered 40s compared with one numbered 20s is:",
          "optionA": "Finer than the 20s yarn",
          "optionB": "Coarser than the 20s yarn",
          "optionC": "Twice as heavy per metre",
          "optionD": "Always stronger than the 20s yarn",
          "correctOption": "A",
          "subConcept": "Yarn Numbering",
          "explanation": "Cotton count is the number of 840-yard hanks that make one pound, so the higher the count the more length per weight and the finer the yarn. In weight-based systems such as denier the logic reverses, and that reversal is what the question tests.",
          "remediationTip": "Chant the rule: count system — higher is finer; weight system — higher is coarser."
        },
        {
          "id": "q-tx-yarn-3",
          "quizId": "quiz-shs1-tx-t1-yarn-fabric",
          "questionText": "Which woven structure shows a distinct diagonal line across the fabric surface?",
          "optionA": "Plain weave",
          "optionB": "Satin weave",
          "optionC": "Basket weave",
          "optionD": "Twill weave",
          "correctOption": "D",
          "subConcept": "Weave Structures",
          "explanation": "Twill steps its interlacement one thread each pick, throwing a diagonal wale across the face; denim and drill are everyday examples. Plain weave checks evenly with no line, satin scatters its floats to avoid any line, and basket is a plain-weave variant.",
          "remediationTip": "Look for the line first: diagonal means twill, checkerboard means plain, smooth shine with long floats means satin."
        },
        {
          "id": "q-tx-yarn-4",
          "quizId": "quiz-shs1-tx-t1-yarn-fabric",
          "questionText": "In knitted fabric, a horizontal row of loops is called the:",
          "optionA": "Wale",
          "optionB": "Float",
          "optionC": "Course",
          "optionD": "Selvage",
          "correctOption": "C",
          "subConcept": "Knitting Terminology",
          "explanation": "Courses run crosswise as rows of loops, while wales are the vertical columns; a float belongs to woven structures and the selvage is the loom-made edge of woven cloth.",
          "remediationTip": "Memory hook: courses are like the courses of a river crossing the bank; wales stand up like the Welsh mountains."
        },
        {
          "id": "q-tx-yarn-5",
          "quizId": "quiz-shs1-tx-t1-yarn-fabric",
          "questionText": "Felt is classified as a non-woven fabric because:",
          "optionA": "Its yarns are twisted in opposite directions",
          "optionB": "It is made directly from matted fibres without spinning yarn or interlacing",
          "optionC": "It is knitted on a special machine",
          "optionD": "Its warp and weft are fused by heat",
          "correctOption": "B",
          "subConcept": "Non-Woven Construction",
          "explanation": "Traditional felt builds cloth straight from the fibre web: heat, moisture and rolling lock the wool scales together, so there is no yarn and no grain, and cut edges do not fray. The other options still pretend a yarn exists, which felts and bonded interfacings do not have.",
          "remediationTip": "Sort any fabric by the first stage it passed through: yarn then interlace (woven), yarn then loops (knitted), or no yarn at all (non-woven)."
        }
      ]
    }
  },
  {
    "id": "shs1-tx-t2-hand-sewing-garment-basics",
    "subjectId": "textiles",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 3,
    "title": "Hand Sewing Stitches and Garment Basics",
    "description": "Matching needle, thread and fabric; working running, backstitch, hemming, overcasting, slip and catch stitches; the common seam types; and the pressing, easing and mending that keep a school uniform serviceable.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Hand needles are named by use and size: sharps (general purpose, sizes 3-10, the higher the number the finer and shorter), betweens (short stout tailoring needles), milliners or straws (long eye for tacking trim).\n• Choose the needle to pierce the fabric cleanly: a fine sharps size 9-10 for lawn and lining, size 5-7 for cotton holland and poplin, a between size 3-5 for heavy drill and denim.\n• Thread must match the fibre family: cotton thread on cotton cloth, so the thread wears out before it cuts the fabric; all-purpose polyester number 50 for general sewing, number 30 for topstitching; silk for fine basting on sheer cloth.\n• Workroom kit: thimble on the middle finger, beeswax to strengthen and smooth thread, emery bag to clean a gummed needle, stiletto for turning points, small sharp shears reserved for fabric only.\n• Even running (tacking) stitches of 6-8 mm hold layers for fitting; uneven basting with long face stitches and short bites speed up gathers; remove basting before the final press.\n• Backstitch is the strongest permanent hand stitch: each new stitch begins where the previous one began, so the line reads as an unbroken cord on the underside — use it for crotch and armhole seams that carry strain.\n• Overcast along a raw edge at a slant, taking 3 mm bites 6 mm apart, prevents fraying on seams that will not be French-felled; it is also the blanket-edge finish on flannel.\n• Hemming stitch (plain hemming) takes one or two warp threads from the face and passes through the fold of the turning — worked right to left for a nearly invisible hem on a uniform blouse.\n• Slip stitch hides the thread entirely between folded edges: used to close linings, finish hems on skirts and join two folded selvages.\n• Catch stitch (fox stitch or flannel stitch) crosses itself in little X shapes on the wrong side; its give makes it right for blanket edges, flannel linings and stretch hems on drill trousers.\n• Seam types in order of difficulty: the plain open seam pressed flat, the French seam that encloses raw edges inside itself for sheer and soft cloth, the run-and-fell (flat fell) seam double-stitched flat for denim and uniform trousers, and the lapped seam for leatherette and thick cloth.\n• Seam allowances follow the pattern: commonly 1.5 cm on side seams, 1 cm on shoulders, 3-4 cm on a long hem; measure with the finger or a ruler, never by eye, and keep one width from start to finish.\n• Easing controls a small fullness: a slightly larger piece (a sleeve cap) is drawn up on a gathering stitch to fit a smaller one without pleats; the eased seam is then stitched and the gathering thread removed.\n• Press as you sew: use a hot iron on cotton with a dry cambric pressing cloth, lift and place the iron rather than sliding it, pound curved seams over a tailor's ham, and let the seam cool before moving it or the shape sets relaxed.\n• Mending is exam-relevant studio work: darn a sock with rows of running warp then weft over darning needles, patch a torn blouse pocket with an under-patch of matched cotton, and reinforce a pocket corner with small cross stitches before it tears.\n• Needle discipline: the needle lives in a pincushion or pushed into a cork, never between the lips; thread the needle, then set the scissors down, and every session ends with the kit wiped and counted.",
    "detailedNotes": {
      "overview": "Hand sewing is the first garment skill of the Textiles workroom and the quiet foundation of every mark in the practical: examiners award for neat, even, retained stitches and for pressing done as you sew. This topic moves from tool choice (the right needle, thread and shears for the cloth) through the stitch family every syllabus lists — running, backstitch, hemming, overcast, slip, catch — to the seams that join garment parts and the mending that extends a school uniform's life. By the end of the term each student should hold a stitched sampler on calico, labelled on the reverse, plus a documented repair on an actual garment.",
      "introduction": "Build the skill in the order a tailor learns it: hold the needle correctly (thrust from the top down, guided by the thimble on the middle finger, never pushed by the thumb of the holding hand), keep an even length of thread below so the stitch size never wanders, and finish every run of stitches with two small back stitches rather than one big knot. Speed comes last; evenness and tension come first, because a sampler with 4 mm stitches that lie flat will outscore a fast, slanted one.",
      "realWorldContext": "The school uniform is the honest client: a split trouser seam at the crotch, a blouse button pulled loose, a hem dragged by a bicycle chain. In Ghanaian homes these repairs are daily work, and in markets from Makola to Kejetia dressmakers charge for exactly the hand skills this topic builds — finishing a hem by hand on a machine-stitched skirt, or slip-stitching a lining so no thread shows. A pupil who can mend her own white blouse before the Monday assembly has passed the real test of the topic.",
      "objectives": [
        "Select the correct needle type, size and matching thread for a given fabric",
        "Work even temporary stitches (running, uneven basting) and remove them without marking the cloth",
        "Produce permanent stitches — backstitch, hemming, overcast, slip and catch — of even size and tension",
        "Construct plain, French and run-and-fell seams and state the use of each",
        "Press, ease and mend a school garment and record the repair steps"
      ],
      "sections": [
        {
          "title": "Needles, Threads and the Workroom Kit",
          "content": "The needle is a wedge with an eye, and its job is to carry thread through cloth without cutting the fibres or leaving a hole larger than the thread. Sharps come in sizes 3 to 10: the higher the number the finer and shorter the needle, so a size 9 pierces lining where a size 5 suits holland. Betweens are short and stout for heavy cloth because the thick cloth would bend a long thin needle. Thread must belong to the same fibre family as the cloth: cotton with cotton is the rule, because a hard polyester thread saws through cotton warp threads in the wash over time, while a slightly weaker cotton thread gives way first and saves the garment. Number 50 all-purpose serves general sewing, number 30 topstitching shows the stitch line, and silk is soft enough to baste fine sheer cloth without leaving needle holes. The kit closes the loop: a steel thimble on the middle finger of the sewing hand, beeswax to smooth and strengthen thread, an emery bag to wipe off sizing and gum, a stiletto for turning points and a pair of shears used on fabric only — cutting paper with them dulls the blade within a week and dull blades drag stitches.",
          "bulletPoints": [
            "Sharps 3-10 (higher is finer), betweens for tailoring, milliners or straws with long eyes for tacking.",
            "Cotton thread on cotton cloth: let the cheaper thread fail before the dearer fabric.",
            "Waxed thread runs smoother and tangles less; rewax when it starts to fuzz.",
            "A sharp shears cuts a double layer of holland in one stroke; if it chews the edge, it needs sharpening or replacing.",
            "Store needles pushed into a cork or stuck upright in the pincushion, and count them out and in at the end of every lesson."
          ],
          "keyTakeaway": "Match needle size, thread fibre and a sharp blade to the cloth before the first stitch — tool choice is half of finish quality.",
          "realWorldExample": "A dressmaker on Adum's Upper Lane keeps betweens in her wrist pincushion for hand-pressing men's shirt collars; her rule for apprentices is the same every term: borrow nothing, dull nothing, and return the shears sharper than they came."
        },
        {
          "title": "Temporary and Permanent Hand Stitches",
          "content": "Temporary stitches hold work until the seam is final: even running stitches of 6-8 mm tack a seam for fitting, uneven basting with long face stitches and short underside bites takes up gathers quickly, and a fine thread in a contrast colour makes removal easy — basting comes out before the final press, never after, or the crease irons the thread into the cloth. The permanent family does the real load-carrying. Backstitch gets its name because the needle goes back to the start of the previous stitch before advancing a full stitch forward, so on the underside the line reads as one unbroken cord of thread — the strongest hand stitch, used where strain gathers at crotch points and armholes. Overcasting slants across a raw edge, taking 3 mm of cloth every 6 mm, binding the fibres so the edge cannot ravel; it finishes seams that will show and edges of flannel that will not be felled. Hemming picks up one or two warp threads on the face and passes through the fold of the turning so the thread is almost invisible, worked right to left for most students; the slip stitch travels inside two folded edges and hides completely, closing linings and skirts, while the catch stitch crosses itself into small released X shapes that stretch with the cloth — the correct finish for a drill trouser hem that must move.",
          "bulletPoints": [
            "Running and uneven basting are temporary: remove them before the final press, never after.",
            "Backstitch returns to the start of the previous stitch before advancing one full stitch, closing the line into a cord.",
            "Overcast works slanting 3 mm bites about 6 mm apart to bind the raw edge against fraying.",
            "Hemming takes only one or two warp threads on the face; slip stitch hides wholly between folded edges.",
            "Catch stitch crosses into released X shapes that stretch, suited to flannel linings and heavy hems."
          ],
          "keyTakeaway": "Temporary stitches hold, permanent stitches carry: name each stitch by the load it must survive and keep its size even from the first stitch.",
          "realWorldExample": "On a finishing bench at Bonwire the cloth joiner works a fine slip stitch between the folded selvages of two kente strips so the join all but vanishes on the face — the same hidden stitch the class practises on calico."
        },
        {
          "title": "Seams That Carry the Garment",
          "content": "A seam is the joint of the building, and the syllabus expects three built by hand. The plain open seam stitches right sides together at the pattern allowance, overcasts or pinks each raw edge separately and presses the seam open; it is the default for cotton dresses and blouses. The French seam is built twice: stitch wrong sides together at about 6 mm, trim the raw edges close, turn the cloth so the seam rolls to the outside, press, then stitch again at 7-8 mm so the first seam and all raw edges are swallowed inside a narrow self-casing; nothing frays and nothing shows, which is why it is the seam for sheer organdie and soft linings. The run-and-fell or flat-fell seam is the strongest commercial joint: sew the seam, press both allowances open, fold each raw edge inward and flat so the allowances meet like folded paper, then fell the folded edges down with stitches that show on the face as one fine line of topstitching — this is why denim shorts and school trousers survive years of wear at the inner leg. Whatever the seam, the allowance must stay one width from start to finish: measure it with a finger or ruler against the needle point, and cut the pattern allowance generously because a seam can be taken in but never let out.",
          "bulletPoints": [
            "Plain open seam: stitch, finish edges separately, press open — the everyday blouse seam.",
            "French seam: two rows, edges enclosed inside the seam itself, for sheer and soft fabrics.",
            "Run-and-fell seam: folded and fell-stitched flat, one topstitch line showing — denim and uniform trousers.",
            "Lapped seam: one allowance folded over another, used for leatherette and thick coated cloth.",
            "Consistent seam allowance is worth more marks than speed; check it every few stitches against a cardboard gauge."
          ],
          "keyTakeaway": "Choose the seam by what the joint must survive: fraying, seeing, or strain — plain for neatness, French for sheers, flat-fell for punishment.",
          "realWorldExample": "The second-hand clothing traders in the Kantamanto section of Accra mend split trouser seams by cutting out the damaged line and re-stitching a run-and-fell seam by hand, because that fell seam outlasts anything a small machine can do on thick denim."
        },
        {
          "title": "Pressing, Easing and Mending a School Garment",
          "content": "Good pressing is half of good sewing, and its studio rules are strict: press with a lifting motion, never slide the iron along a seam or the fabric distorts; use a dry cambric pressing cloth on cotton, a steam pass for stubborn creases, and let the seam cool and dry before the garment moves, because shape sets as it cools. Curved seams are pounded over a tailor's ham so the round shape holds rather than printing a flat crest-line. Easing is the quiet partner of pressing: when a sleeve cap is a little fuller than the armhole it must enter, run one gathering stitch through the cap and draw it until the ease is spread evenly along the curve, stitch the seam over the eased fullness with the fuller part uppermost, then press the cap over the ham and remove the gathering thread. Mending turns these skills to use on the family uniform: a sock is darned over a rounded darning egg with warp rows then weft rows woven back and forth until the patch is flexible; a torn pocket gets an under-patch of matched scoured cotton, fell-stitched around with tiny slip stitches; a loose button is shanked with a toothpick so the thread stem stands proud of the fabric and survives buttoning. Record every repair with a photograph on the project card — Paper 3 rewards the evidence.",
          "bulletPoints": [
            "Lift and place the iron; sliding drags the warp and can shine the face of dark cloth.",
            "Cool-and-dry rule: move a seam while steaming-wet and the crease relaxes away.",
            "Ease means controlled fullness without pleats; the fuller layer always feeds under the needle.",
            "Darning must stay flexible — a tight darn splits again at its edge.",
            "A darning egg, a cork or an orange can serve as the curved form under a darn."
          ],
          "keyTakeaway": "Press as you sew, ease before you stitch, and mend with the same stitches you learned on the sampler.",
          "realWorldExample": "Before Speech and Prize-giving Day, the Home Economics bench at a Kumasi SHS runs a repair queue: hem a dragged blouse, fell a split trouser seam, re-shank two buttons — every item returning to the line as exactly the skills list of this topic."
        }
      ],
      "commonMistakes": [
        "Using a hard polyester thread on fine cotton so the thread cuts the warp at every stitch line and the blouse splits along the seam in the wash — match cotton thread to cotton cloth.",
        "Knotting the thread and pulling it tight through the face of the fabric; the lump shows on the right side and puckers the line — finish instead with two small back stitches.",
        "Sliding the iron along a seam like an ironing-board showroom habit; it distorts the piece and shines dark cloth — press by lifting and placing with a cambric cloth.",
        "Leaving basting thread in the seam through the final press; the crease irons the thread into the cloth and it cannot be pulled out without a mark.",
        "Cutting uniform fabric with the paper shears from the classroom: the dulled blade chews the edge and drags every running stitch after it — fabric shears never touch paper."
      ],
      "wassceExamTips": [
        "Paper 1 asks for stitch definitions with use attached: learn the pair format — \"backstitch: strongest permanent stitch, used on strain-bearing seams\" — and the mark is automatic.",
        "Paper 2 planning questions require a construction order: state seam type, finish and pressing sequence for the chosen garment; a plan that never mentions seam finishes loses the accuracy mark even when neat.",
        "In Paper 3 the supervisor marks the sampler directly: even stitch size, even spacing, straight lines of stitches, correct pressing and a clean reverse side earn most of the handling marks before the garment is even begun.",
        "When asked to distinguish French from run-and-fell seams, describe the construction steps in order, not just the use — the method line carries the mark, the use line carries the second.",
        "Label work on the reverse in pencil with garment, stitch name and date; an unlabelled sample is read as incomplete and presentation marks are dropped."
      ],
      "summaryChecklist": [
        "Can I choose the needle type, size and matching thread for any cloth given to me?",
        "Can I work running, backstitch, overcast, hemming, slip and catch stitches evenly and name the use of each?",
        "Can I construct plain, French and run-and-fell seams in correct sequence with even allowance?",
        "Can I press, ease and set a curved seam so the shape holds after cooling?",
        "Can I mend a uniform garment — darn, patch and re-shank a button — and record the repair for my portfolio?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-sewing-1",
        "title": "Felling a Split Trouser Seam",
        "problem": "The inner-leg seam of a school trouser has split along the old stitch line. Show the hand-repair from opening the seam to the finished fell, as the practical examiner expects it.",
        "stepByStepSolution": [
          "Step 1 (M1): Turn the trouser inside out, snip only the broken stitch line with pointed scissors and press the old seam open flat with a hot iron on cotton so the allowance memory is removed.",
          "Step 2 (M1): Examine the fabric along the split; where threads are worn through rather than merely unstitched, mark a repair patch 2 cm beyond the damage in every direction.",
          "Step 3 (M1): Re-stitch the seam line on the original needle holes with backstitch of 3-4 mm, knot-free, starting and ending 2 cm beyond the split so the new line overlaps the old.",
          "Step 4 (M1): Trim one allowance narrower, fold the raw edges of both allowances inward and flat, pin the folded edges together along the seam line.",
          "Step 5 (M1): Fell the folded edges down with slip or catch stitches that do not show on the face, keeping the stitches slanted and small.",
          "Step 6 (A1): Press the felled seam flat over a wooden board so the fell lies smooth; stretch the seam sideways to prove no puckering or skipped face stitch.",
          "Step 7 (A1): Record the repair on the project card: split length, patch decision, backstitch plus fell, pressing note — and sign the dated entry."
        ],
        "keyTakeaway": "A split seam is repaired by rebuilding the original seam order — open, restitch on the line, fold, fell, press — never by pinching the two face edges together."
      },
      {
        "id": "ex-tx-sewing-2",
        "title": "Working a Hand Hem on a Blouse Turning",
        "problem": "A cotton holland blouse must be hemmed by hand so no stitch shows on the face. Plan the turning and work the hem, with the marks a WASSCE sampler awards.",
        "stepByStepSolution": [
          "Step 1 (M1): Trim the raw edge even, turn up the measured hem allowance (about 3 cm), press the edge, then turn again 1.5 cm and press the fold so the raw edge is buried.",
          "Step 2 (M1): Thread a fine sharps with matching cotton number 50 and make a single knot small enough to slip under the fold.",
          "Step 3 (M1): Starting at a side seam inside the fold, pick up one warp thread on the face and pass the needle through the hem fold, repeating right to left with 4 mm spacing.",
          "Step 4 (A1): The stitch catches almost nothing on the face; after three repeats the hem line is checked by holding the cloth up to light — no shadow line means the depth is even.",
          "Step 5 (M1): Ease a slightly long hem fullness into a corner by small gathers hidden inside the fold before continuing the hemming stitch.",
          "Step 6 (M1): Finish behind the starting point with two back stitches into the fold, remove the knot bump and press from the wrong side over a cambric cloth.",
          "Step 7 (A1): Face shows no thread, the hem hangs level at the measured depth, the fold lies flat with no ridge visible — the sampler note marks it a passed hem."
        ],
        "keyTakeaway": "A good hand hem is invisible on the face because the needle takes one or two warp threads at most — evenness is planned by pressing before stitching."
      }
    ],
    "quiz": {
      "id": "quiz-shs1-tx-t2-sewing",
      "topicId": "shs1-tx-t2-hand-sewing-garment-basics",
      "title": "Hand Sewing Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-sewing-1",
          "quizId": "quiz-shs1-tx-t2-sewing",
          "questionText": "Which hand stitch is the strongest permanent stitch and is therefore used on strain-bearing seams?",
          "optionA": "Running stitch",
          "optionB": "Overcast stitch",
          "optionC": "Backstitch",
          "optionD": "Hemming stitch",
          "correctOption": "C",
          "subConcept": "Permanent Stitches",
          "explanation": "Backstitch advances one full stitch and returns to the start of the previous one, producing an unbroken cord of thread on the underside, so it carries the most strain. Running stitch is temporary, overcast finishes edges, and hemming attaches turnings.",
          "remediationTip": "Draw the three-stitch sequence on paper once: forward, back to start, forward again — the closed chain explains the strength."
        },
        {
          "id": "q-tx-sewing-2",
          "quizId": "quiz-shs1-tx-t2-sewing",
          "questionText": "Compared with a hand needle numbered 5, a needle numbered 10 is:",
          "optionA": "Longer and thicker",
          "optionB": "Shorter and thicker",
          "optionC": "Longer and finer",
          "optionD": "Finer and shorter",
          "correctOption": "D",
          "subConcept": "Needle Sizing",
          "explanation": "In the sharps scale the higher the number the finer and shorter the needle, so size 10 is finer and shorter than size 5. The sizing logic is the same as cotton count: higher means finer.",
          "remediationTip": "Hold two needles and read the eyes: the number on the thinner eye is the larger number."
        },
        {
          "id": "q-tx-sewing-3",
          "quizId": "quiz-shs1-tx-t2-sewing",
          "questionText": "The French seam is the correct choice for sheer organza because it:",
          "optionA": "Encloses the raw edges inside the seam itself so nothing frays or shows",
          "optionB": "Leaves allowances pressed open for flatness",
          "optionC": "Produces a topstitch line that matches the sheer fabric",
          "optionD": "Is the fastest hand seam to work",
          "correctOption": "A",
          "subConcept": "Seam Types",
          "explanation": "The French seam is stitched twice, wrong sides first, so the trimmed raw edges roll inside a narrow self-casing: nothing frays and nothing shows through sheer cloth. Open seams show their finishes; topstitching is a flat-fell trait, not a French one.",
          "remediationTip": "Say the pair aloud: sheers mean French, punishment seams mean fell."
        },
        {
          "id": "q-tx-sewing-4",
          "quizId": "quiz-shs1-tx-t2-sewing",
          "questionText": "A crossed, stretching X-shaped hand stitch used on flannel linings and trouser hems is the:",
          "optionA": "Slip stitch",
          "optionB": "Catch stitch",
          "optionC": "Chain stitch",
          "optionD": "Couching stitch",
          "correctOption": "B",
          "subConcept": "Hemming and Finishing Stitches",
          "explanation": "The catch stitch (also called flannel or fox stitch) crosses itself into released X shapes that move with the cloth, ideal for thick linings and hems under strain. Slip stitch hides between folds without crossing, chain and couching are ornament stitches.",
          "remediationTip": "Sketch the X on scrap paper before sewing; the crossed shape is the whole memory of the stitch."
        },
        {
          "id": "q-tx-sewing-5",
          "quizId": "quiz-shs1-tx-t2-sewing",
          "questionText": "Which is the correct pressing habit for a hand-stitched cotton seam?",
          "optionA": "Slide the hot iron quickly along the seam length",
          "optionB": "Steam the seam and leave it to air dry unfolded",
          "optionC": "Lift and place the iron over a cambric pressing cloth, then let the seam cool before moving it",
          "optionD": "Press on the right side with a dry iron and no cloth",
          "correctOption": "C",
          "subConcept": "Pressing Discipline",
          "explanation": "Pressing sets shape as the cloth cools and dries, so the iron lifts and places through a cambric cloth and the seam rests undisturbed until cool. Sliding drags the fabric, and dry pressing the face can shine or scorch it.",
          "remediationTip": "Chant the studio line: lift, place, count to cool, then move."
        }
      ]
    }
  },
  {
    "id": "shs1-tx-t2-batik-wax-resist-dyeing",
    "subjectId": "textiles",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 4,
    "title": "Batik and Wax-Resist Dyeing",
    "description": "The resist principle behind batik: mixing and holding beeswax and paraffin at working heat, drawing with the tjanting and filling with the brush, dyeing with cold-water, reactive and indigo vats, then heat-setting, crackling and boiling the wax out for a fast, clean cloth.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Resist dyeing means physically stopping dye from reaching parts of the cloth; in batik the stopper is wax, and every waxed area keeps whatever colour it already holds.\n• The working wax is roughly one part beeswax to one part paraffin melted together: beeswax sticks to the fibre and seals hard, paraffin makes the film brittle so it cracks.\n• Beeswax alone gives the tightest seal but crackles least; paraffin alone crackles handsomely but a cold, badly bonded coat can flake off in the dye bath.\n• Melt wax at about 70-90 °C, just past pouring consistency; wax that is too cool sits on the surface and rubs off in the dye, wax that is smoking-hot flashes into flame.\n• Keep the pot on a thermostatic hot plate or a double boiler, never on an open flame, and place a lid, a pan of sand and a full water bucket within one step of the bench.\n• The tjanting is a small copper bowl on a bamboo handle with a pinhole nozzle; it holds about a teaspoon of wax and draws fine lines, curves and dots.\n• Fill broad areas with a stiff hog-hair or squirrel brush, either with hot wax from the pot or cold wax by rubbing solid wax through the cloth over the pattern.\n• Stretch the scoured, slightly damp cloth on a wood or bamboo frame with tacks so the wax is supported and the surface stays flat for the tjanting.\n• Scour cotton holland or lawn by boiling with a little soda ash to strip size, starch and dressing, then rinse and dry; wax will not bond through factory starch.\n• Dye in order from pale to dark: cold-water dyes for classroom speed, fibre-reactive dyes such as Procion type with soda ash for washing-fast colour, and fermented indigo vats for deep blues.\n• A Ghanaian indigo vat is built by fermenting paste from the indigo plant with lime, wood-ash lye and a reducer; the dipped cloth leaves the vat yellow-green and turns blue as air oxidises it.\n• Multiple dips darken the cloth: one dip is a pale sky, three or four dips a deep navy, and the blue always develops on the frame, not in the liquid.\n• Heat-set reactive-dyed cloth by ironing on the reverse or steaming wrapped in damp newspaper so the dye fixes permanently into the fibre.\n• To remove wax, boil the cloth in water with soda ash, let the melted wax float, lift the cloth out before the water cools, and repeat with fresh water until no grease film shows.\n• Crackle by folding or creasing the waxed cloth firmly while the wax is cold and brittle, or scrape it with a card; dye then veins into the cracks and every fold leaves its own line pattern.\n• An uncontrolled third method: leave the dyed cloth in the sun so the wax softens, fuses and cracks in wide irregular maps.\n• Dry finished batik in shade and press between plain paper; Ghanaian workshops at Teshie near Accra and at Afieka in Ashanti sell crackled cotton cloth by the yard.",
    "detailedNotes": {
      "overview": "Batik is the dyeing of cloth through a physical mask, and the whole craft is a sequence of temperature decisions: wax hot enough to penetrate, dye cool enough to control, boil-out water hot enough to carry the wax away. This topic covers the materials and their proportions, the tjanting and brush methods, the three dye routes a Ghanaian workroom actually uses — cold-water, fibre-reactive and fermented indigo — and the finishing work of heat-setting, crackling and wax removal. Students finish the term with one crackled panel produced entirely by hand, mounted with the dye and wax recipe written on the reverse.",
      "introduction": "Treat the process exactly as a workshop apprentice learns it: prepare the cloth, draw the design in pencil, mix and test the wax on scrap, wax the areas you want to keep pale, dye pale to dark, crackle at the agreed moment, boil out, dry in shade. Every stage has a test you can run on a 10 cm strip before committing the panel; batik is cheap to trial and expensive to redo, so the disciplined student samples first and produces second.",
      "realWorldContext": "In the batik workshops along the main road at Teshie, Ga artists stretch cotton on long bamboo frames, draw with the tjanting over kerosene-heated wax pots, and dip into indigo vats fermented from local indigo, producing the deep-blue crackled panels sold across Accra; Afieka in the Ashanti Region runs the same craft with bold figural designs for tourism and for matching family cloth at ceremonies. Your school panel follows exactly their order of work — only the pot is electric and the dye is weighed, not guessed.",
      "objectives": [
        "Explain the resist principle and state why waxed areas keep their earlier colour",
        "Mix beeswax and paraffin in correct proportion and hold wax at safe working heat",
        "Draw controlled lines with the tjanting and fill flat areas with brush wax",
        "Dye a waxed cloth pale to dark using cold-water, reactive or indigo routes and heat-set the colour",
        "Produce controlled crackle, boil out all wax and present a finished fast panel"
      ],
      "sections": [
        {
          "title": "The Resist Principle and the Wax Recipe",
          "content": "Dye colour only reaches fibre that liquid can touch, so a hydrophobic barrier printed or drawn onto the cloth holds that area at its current shade — this single sentence is the whole of resist dyeing. In batik the barrier is wax, and the craft is unusual in Ghana because it is subtractive: the pattern you draw early decides the pale ground you keep late, so planning runs backwards from the finished cloth. The workshop recipe is about one part beeswax to one part paraffin melted together. Beeswax, collected from hive comb and strained, adheres strongly to cotton fibre and sets into a tough seal; pure beeswax batik is crisp and clean but shows almost no crackle. Paraffin crystallises brittle, so as the cloth folds, the wax film fractures and dye seeps into the fractures — the veined crackle that defines fine batik. Workrooms adjust the blend toward wax for detailed pictorial work and toward paraffin for heavy crackle; keep a test strip of every new mix and write the ratio on it, because the recipe card is what makes the craft reproducible.",
          "bulletPoints": [
            "Resist = barrier: wax blocks dye liquid from reaching fibre, so the waxed area keeps its previous colour.",
            "Beeswax sticks and seals; paraffin adds brittleness for crackle; roughly 1:1 is the classroom blend.",
            "Melt at 70-90 °C: test by drawing a line on scrap — it should soak through to the reverse without beading.",
            "Never heat wax over an open flame; use a hot plate or double boiler and keep lid, sand pan and water bucket ready.",
            "Scour the cloth first: factory size and starch sit between fibre and wax and defeat the seal."
          ],
          "keyTakeaway": "Plan a batik backwards from its pale colour, mix wax to a recorded ratio, and hold it just hot enough to soak through the cloth.",
          "realWorldExample": "At Afieka the master dyer tests every new wax mix by painting a coin-sized patch on calico, cooling it and bending it over a stick; the crack pattern of that scrap decides how the panel of the day is waxed."
        },
        {
          "title": "Applying Wax: tjanting Lines, Brush Grounds and Texture",
          "content": "Two tools carry the design. The tjanting — a copper cup no bigger than a thumbnail on a bent bamboo handle, with a pinhole at its tip — holds a teaspoon of molten wax and draws it in a continuous thread: rest the handle on your fingers, keep the cup just below the surface of the cloth so its own heat keeps the wax liquid, and move steadily; the line is opened by a gentle tilt and closed by lifting, which is how dots and tapering curves are made. Broader shapes are flooded with a stiff hog-hair or squirrel brush loaded from the pot, worked along and across so wax soaks through to the reverse — a surface-only patch looks finished and leaks dye later. A cold method also serves: rub solid wax through the stretched cloth over a carved board or crumpled foil to print a texture ground before drawing. All of it happens on cloth stretched flat and supported on a wood or bamboo frame, tacked square to the grain; a slack corner lets the tjanting catch and spit wax. Keep hands clean and cool, hold tacked edges with fingertips not palms, and never fold unstitched waxed cloth.",
          "bulletPoints": [
            "Tjanting line control comes from steady speed plus cup heat, not from squeezing the bowl.",
            "Brush wax along then across an area until a held-up-to-light check shows even soak-through.",
            "Cold-rubbed solid wax over textured boards makes grounds no brush could lay.",
            "Frame the cloth square to grain and slightly damp — damp cloth holds a crisper wax edge.",
            "Pencil the design first on the scoured cloth; wax is drawn over pencil and the pencil washes out later."
          ],
          "keyTakeaway": "Fine lines come from the tjanting, broad grounds from the brush, texture from rubbing solid wax — and all of them need wax soaked through to the reverse.",
          "realWorldExample": "A Teshie artist drawing a maple-style design moves the tjanting in one long breath-held stroke along the Adinkra-inspired curve; an apprentice beside him floods the background between motifs with a wide brush dipped from the same pot."
        },
        {
          "title": "Dyeing: Cold-Water, Reactive and Indigo Routes",
          "content": "Batik dyeing runs pale to dark because each colour layer must be sealed under the next: a student who dips navy first has lost every pale area the drawing promised. The classroom route is cold-water dye — powder stirred into warm water with salt, cloth immersed ten to twenty minutes, shades soft but fast enough if rinsed to clear water. The serious route is fibre-reactive dye: the same Procion-type powders used with soda ash, either in a bath or printed thickened with a starch paste for sharp multicolour panels; reactive dyes bond chemically to cellulose and, after proper rinsing and heat-setting, survive years of washing at the indigo of a formal cloth. The traditional route is the fermented indigo vat built across the forest belt: indigo paste from the plant, lime, wood-ash lye and a reducing agent such as cassava waste; the vat rests and ripens, and cloth dipped into the yellow-green liquid comes out pale and turns blue only as air attacks the dye on the fibre. One dip sky-blue, three or four dips deep navy; between dips the cloth must air fully, and every dip after the first needs the waxed areas sound or the pale ground stains.",
          "bulletPoints": [
            "Pale to dark is the fixed order; darking a pale is possible, clearing a dark is not.",
            "Cold-water dyes are quick classroom work; reactive dyes with soda ash give the fast, formal colour.",
            "Indigo develops by oxidation in air: the dip is green-yellow, the blue appears on the frame.",
            "Rinse every dyed panel in cool water until it runs clear before heat-setting.",
            "One dye bath serves many pale shades by varying the cloth's time in the liquid."
          ],
          "keyTakeaway": "The dye route may change, but the law never does: work light to dark, seal each layer with wax, and let indigo build by oxidation dip after dip.",
          "realWorldExample": "The Densu river basin dyers and village vats around Kente-adjacent towns still ferment indigo with lime and ash water; a school visit sees cloth lifted green from the vat and watched as it blues in front of the class within a minute."
        },
        {
          "title": "Heat-Setting, Crackle and Boiling Out the Wax",
          "content": "Colour that is not fixed will bleed, so after every dye step the damp cloth is heat-set: ironed on the reverse, or wrapped in damp newspaper and steamed, which drives reactive dye into permanent bond with the cellulose. Crackle is then timed with the wax, not left to chance — fold and crease the cloth firmly while the wax is cold and brittle, press creases with the fingernail, or scrape the surface with a card, and the paraffin-rich film fractures into a map; the next dye dip, or the very next indigo dip in classic work, sends thin blue veins along every crack, and the pattern of veins is the artist's signature quality. A third school never plans: cloth drying in strong sun softens the wax and lets it fuse and crack in wide irregular islands. Finishing strips the wax out: boil the panel in water with a handful of soda ash, let the melted wax float, lift the cloth out before the water cools or the wax re-settles on the fibre, and repeat with fresh boiling water until the surface shows no grease film; a drop test on cooled cloth — water beads nowhere — proves it clean. Dry in shade, press between plain paper, mount with the recorded wax ratio and dye order on the reverse; that card is half the mark in a practical assessment.",
          "bulletPoints": [
            "Heat-set before the boil-out: unfixed reactive dye will run the moment hot water touches it.",
            "Crackle on cold, hard wax with firm folds and a card scrape; veining happens in the following dip.",
            "Lift cloth from the wax-boil before the water cools, or floating wax re-deposits as a film.",
            "Repeat the soda-ash boil until water wetting is even and no grease shadow shows.",
            "Record wax ratio, dye names, dip count and times on the mount reverse for the examiner and for your own repeat."
          ],
          "keyTakeaway": "Fix, crackle, boil out in that order — and always remove the cloth from the wax water while it is still hot.",
          "realWorldExample": "A Teshie workshop hangs finished panels on the fence in the evening breeze after a third boil; by morning the buyer can see through the cloth's clean sheen that all wax is gone, which is exactly how the trade judges quality."
        }
      ],
      "commonMistakes": [
        "Applying cool, stiff wax that sits on the surface: it sheds in the dye bath and the pale area stains; the fix is a tested 70-90 °C wax that soaks through to the reverse.",
        "Dyeing the dark shade first and then attempting the pale ground — irreversible; plan the design backwards and work light to dark.",
        "Leaving the cloth in the boil-out water as it cools: wax melts, then re-deposits as a grey film; lift the panel while the water is boiling.",
        "Skipping the scour and assuming new cotton holland is clean — factory size blocks the wax bond, so boil with soda ash before the first line is drawn.",
        "Working over dirty hands or dragging palms across waxed ground, which lifts half-set wax and leaves thumbprints the next dip fills with colour."
      ],
      "wassceExamTips": [
        "Paper 1 asks the resist vocabulary directly: know that batik resists with wax, tie-dye resists by binding, and adinkra stamps with a dye paste, and the comparison question is full marks.",
        "In Paper 2 planning, write the full order of work — scour, design, wax, dye pale to dark, fix, crackle dip, boil out — as numbered steps; a plan without the scour line loses a mark before colour choice is even read.",
        "Paper 3 practical marks handling of materials: the supervisor notes the wax pot kept at working heat, hands clean, cloth supported on the frame, and wax actually soaked through on the first sample strip.",
        "The presentation mark rewards the record card: state dye used, dip count, wax ratio and crackle method on the reverse of the mounted panel.",
        "When a theory question asks why indigo turns blue outside the vat, answer with the exact word: oxidation by air after reduction in the vat."
      ],
      "summaryChecklist": [
        "Can I explain the resist principle and state why each waxed area keeps its earlier colour?",
        "Can I mix beeswax and paraffin to a recorded ratio and hold the wax at safe working heat?",
        "Can I draw even tjanting lines and flood brush grounds that soak through to the reverse?",
        "Can I dye a waxed panel light to dark and set the colour with heat, or build indigo by oxidised dips?",
        "Can I produce controlled crackle, boil out every trace of wax and present the panel with its recipe card?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-batik-1",
        "title": "Planning a Two-Colour Batik Panel",
        "problem": "A student must produce a 40 cm by 40 cm cotton panel with a pale yellow ground and a navy geometric design, using cold-water dyes and one crackle pass. Write the order of work and justify the critical steps.",
        "stepByStepSolution": [
          "Step 1 (M1): Scour the cotton square by boiling with a little soda ash, rinse and stretch it slightly damp on the frame; justification: wax cannot bond through factory size, so this step protects every later stage.",
          "Step 2 (M1): Pencil the geometric design, then decide the colour map backwards: the ground must end pale yellow, so the paper-white cloth must be dyed yellow first, then waxed again, then dipped navy.",
          "Step 3 (M1): Immerse the whole panel in the yellow cold-water bath for ten minutes, rinse to clear water, dry in shade, and iron the reverse to set the yellow.",
          "Step 4 (M1): Mix one part beeswax to one part paraffin, heat to working temperature, and wax the entire area that must stay yellow — solid brush floods for the bars, tjanting for the dot chains — checking soak-through on the reverse.",
          "Step 5 (M1): While the wax is warm and soft, fold sharp creases across the panel and press them with the fingernail; the brittle film cracks into a planned vein map.",
          "Step 6 (M1): Dip the whole panel in the navy bath for twenty minutes, air it, rinse, then boil out in soda-ash water lifted before cooling; two repeat boils until no grease film remains.",
          "Step 7 (A1): Expected result and record: navy design areas sound, yellow ground crackled with fine navy veins, mounted with the ratio, times and dip order on the reverse — the plan is complete because every pale area was sealed before the dark dip."
        ],
        "keyTakeaway": "Two-colour batik is a backwards plan: dye the ground first, wax everything that must stay pale, then dark, then crackle — with the record card as proof."
      },
      {
        "id": "ex-tx-batik-2",
        "title": "Building an Indigo Blue by Dips",
        "problem": "Using a ripened indigo vat, produce a cotton band showing three depths of blue in the same cloth. Outline the dipping sequence and what each dip adds.",
        "stepByStepSolution": [
          "Step 1 (M1): Test the vat on a scrap: the liquid should show a coppery surface flower and the scrap should blue in air within a minute; if it stays dull green, the vat needs rest and a little more reduction.",
          "Step 2 (M1): Wax-resist the stripes that must stay pale and immerse the band for three minutes, moving it slowly so no air pocket clings under the cloth.",
          "Step 3 (M1): Lift, press surface liquid lightly and air the band until the yellow-green turns fully blue — first dip gives sky.",
          "Step 4 (M1): Dip again for the same time and air again; second dip reaches medium blue; third dip on the sections reserved for deep navy reaches indigo blue.",
          "Step 5 (M1): Rinse in cool water until clear, and while the final blue is still unfixed, crackle by folding selected dark areas and re-exposing them to a short fourth dip for veined depth.",
          "Step 6 (M1): Heat-set with steam or iron on the reverse, then boil out the wax in fresh soda-ash water, lifting before cooling.",
          "Step 7 (A1): The band shows three graded blues plus a crackle zone in one dip sequence; note the dip count and air times on the sample card so the result can be repeated exactly."
        ],
        "keyTakeaway": "Indigo depth is arithmetic: one dip one shade, air between every dip, and colour develops on the cloth, never inside the vat."
      }
    ],
    "quiz": {
      "id": "quiz-shs1-tx-t2-batik",
      "topicId": "shs1-tx-t2-batik-wax-resist-dyeing",
      "title": "Batik and Wax Resist Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-batik-1",
          "quizId": "quiz-shs1-tx-t2-batik",
          "questionText": "Why is the cloth dipped in the pale dye before the dark one in a batik panel?",
          "optionA": "Pale dye solutions are cheaper when used warm",
          "optionB": "The pale dye dries the cloth faster for waxing",
          "optionC": "Wax melts pale dye and would lift it off",
          "optionD": "Every area that must stay pale has to be dyed and sealed before the dark dip reaches it",
          "correctOption": "D",
          "subConcept": "Pale-to-Dark Order",
          "explanation": "Batik plans backwards: the final pale ground is dyed first, sealed with wax, and only then is the whole panel given the dark dip. Options A and B are irrelevant, and option C is false — fixed dye does not wash off with wax.",
          "remediationTip": "Say the law of resist colouring aloud: light first, wax the light, dark last."
        },
        {
          "id": "q-tx-batik-2",
          "quizId": "quiz-shs1-tx-t2-batik",
          "questionText": "In the tjanting method of applying wax, the tool is best described as:",
          "optionA": "A stiff hog-hair brush loaded from the wax pot",
          "optionB": "A small copper bowl on a handle with a pinhole nozzle",
          "optionC": "A carved wooden stamp padded with wax",
          "optionD": "A comb drawn across cooled wax",
          "correctOption": "B",
          "subConcept": "Wax Application Tools",
          "explanation": "The tjanting holds about a teaspoon of molten wax in a copper cup whose pinhole tip releases a fine controlled line. The brush floods broad grounds, the carved stamp belongs to other resist work, and the comb only textures cooled wax.",
          "remediationTip": "Pair each tool with its mark: tjanting draws hairlines, brush floods fields, rubbing prints texture."
        },
        {
          "id": "q-tx-batik-3",
          "quizId": "quiz-shs1-tx-t2-batik",
          "questionText": "Cloth lifted from an indigo vat looks yellow-green and turns blue on the frame because:",
          "optionA": "The dye is heat-fixed by the sun on the hanging cloth",
          "optionB": "Wax in the cloth reacts with the vat liquid",
          "optionC": "Air oxidises the reduced dye held on the fibre",
          "optionD": "The vat liquid itself only blues once it cools",
          "correctOption": "C",
          "subConcept": "Indigo Chemistry",
          "explanation": "In the vat the indigo is chemically reduced to a soluble green form that soaks into fibre; once in air, oxidation turns it back to insoluble blue pigment inside the cloth. Heat, wax and vat cooling play no part in the colour change.",
          "remediationTip": "Learn the vat pair: reduced and colourless in the pot, oxidised and blue in the air."
        },
        {
          "id": "q-tx-batik-4",
          "quizId": "quiz-shs1-tx-t2-batik",
          "questionText": "The correct method of removing wax from a finished batik cloth is to:",
          "optionA": "Boil the cloth in water with soda ash and lift it out before the water cools, repeating with fresh water",
          "optionB": "Scrape all surfaces with a card and rinse in cold water",
          "optionC": "Iron the face of the cloth once on a cotton setting",
          "optionD": "Soak overnight in detergent solution and wring dry",
          "correctOption": "A",
          "subConcept": "Wax Removal",
          "explanation": "Melted wax floats off in boiling soda-ash water; if the cloth stays in as the bath cools, the wax re-deposits as a film, so the panel must come out hot and the boil be repeated until no grease remains. Scraping and ironing only shift wax around.",
          "remediationTip": "Picture the boil-out as dishwater with grease on top: lift the cloth while the water is hot, or the grease settles back on it."
        },
        {
          "id": "q-tx-batik-5",
          "quizId": "quiz-shs1-tx-t2-batik",
          "questionText": "The veined crackle effect in batik is produced by:",
          "optionA": "Adding extra paraffin after the boil-out",
          "optionB": "Dyeing the cloth before scouring it",
          "optionC": "Holding the tjanting too cool during line work",
          "optionD": "Folding and creasing the waxed cloth while the wax is cold and brittle, then dipping again",
          "correctOption": "D",
          "subConcept": "Crackle Technique",
          "explanation": "Cold brittle wax fractures along controlled folds; the next dip bleeds into those fractures and every crease prints a vein of dye. The other choices are faults or impossible timing, not the crackle method.",
          "remediationTip": "Remember the crackle sequence: hard cold wax, firm fold, new dip — veining is dye entering breaks."
        }
      ]
    }
  },
  {
    "id": "shs1-tx-t3-tie-dye-resist-methods",
    "subjectId": "textiles",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 5,
    "title": "Tie-and-Dye and Other Resist Methods",
    "description": "Binding, clamping, folding grids and stitched gathers as physical resists; layering colours light to dark, then rinsing, opening out and drying with discipline.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A RESIST is anything that stops dye reaching part of the cloth. Tie-and-dye resists by pressure: thread, twill tape, rubber bands, clothespins, wooden dowels, marble or bean cores and gathering stitches.\n• Four core actions: BIND (wind thread hard around a rolled or pleated section), CLAMP (sandwich folded cloth between carved boards and squeeze), GATHER AND STITCH (run a thread, pull tight, knot), and FOLD into a grid before binding.\n• Order rule: the FIRST bind reserves the FIRST colour you want to keep. Work light to dark, re-binding between dips, because dye films are transparent and every later dip darkens what is already there.\n• Folding grids make geometry. Accordion folds at 4 cm plus cross folds give a grid of rings; a diagonal fold gives diamonds; a spiral roll from one corner gives concentric rings and a bullseye at the centre.\n• Bandhani-style dot resist: pinch up tiny points of cloth, wind thread twice around each neck and knot; a dense field of bound points leaves pale stars on a dark ground.\n• Stitched gathered resist (kanoko): sew along a drawn line, pull the thread to gather the cloth into a ridge, bind the ridge, dye, then cut the threads to release a soft drawn line.\n• Clamping (itajime): fold the cloth flat, place carved wood or plastic sheets on both faces, clamp at four corners. Dye cannot enter compressed cloth, so edges come out hard and crisp.\n• IKAT is a YARN resist, not a cloth resist: hanks of warp are tied and dyed before weaving, so the pattern is built into the warp itself. Ewe weavers around Agotime and Kpando work this way, and the slight blur at the motif edge is the proof of hand ikat.\n• Dye help: about one dessert spoon of common salt per litre assists exhaustion on cotton; soda ash fixes cold-water reactive dye; dip 3 to 5 minutes per colour rather than one long soak.\n• Indigo deepens by repetition: dip, squeeze, expose to air for 3 to 5 minutes until the yellow-green leuco turns blue, then dip again. More dips give darker blue; a stronger vat alone does not.\n• Marble or bean resist: place the core in the cloth, gather and bind hard; the bulge resists and leaves a ring around a pale centre.\n• Rinse in cold water until the water is almost clear BEFORE untying, then open the knots and rinse once more. Untying early drags thick dye into the pale reserved shapes.\n• Dry flat in shade, never in strong sun; sunlight fades indigo and azo shades and bakes mud marks. Do not force a stiff damp cloth open; let the knots loosen as the cloth dries.\n• Press with a protective cloth between iron and work; a hot iron on dye paste that is still damp or crusted dulls the colour permanently.\n• Golden sentence: every bind you make before a dip protects the colour you already like, so plan backwards from the last and darkest dip.",
    "detailedNotes": {
      "overview": "Tie-and-dye is the fastest and most forgiving of the resist family because it needs no wax, no heat and no expensive equipment: only thread, pressure and dye. This lesson builds the four physical resist actions (binding, clamping, folding grids and stitching), then adds the two ideas that separate a good result from a muddled one, namely the order of colour layering and the discipline of rinsing and drying. You will also place ikat correctly in the resist family as a yarn resist rather than a cloth resist, which matters for Paper 1 definitions and for understanding Ewe cloth.",
      "introduction": "Picture a bundle of cloth coming out of a dye bucket black except for a field of small white stars. Nothing was painted and nothing was printed; the colour was simply blocked out by knots of thread. That is the whole logic of resist dyeing: you decide what must stay pale, you shut the dye out of it physically, and you let the open cloth take the colour. Because the resists are physical, they fail in physical ways, so a loose wrap, a snapped band or a cloth that was dry when it was tied will show on the finished piece as clearly as a wrong answer on an exercise book.",
      "realWorldContext": "In Teshie and Afieka the resist yards work in plastic buckets on the forecourt, tying panels of cotton into bundles, dipping them in cold-water dye and hanging the wet lengths along the fence to drip and dry in shade before they are opened and carried to Makola and Kaneshie for sale. A student who has bought a tie-dye scarf at the Osu weekend market has held a piece of this trade. Near Kpando and Agotime in the Volta Region the same resist idea appears at the yarn stage, where hanks of warp are tied and dyed before they ever reach the loom, producing the ikat-edged cloth that Ewe weavers are known for.",
      "objectives": [
        "Name and demonstrate the four physical resist actions used in tie-and-dye",
        "Explain why colour is layered from light to dark and why re-binding happens between dips",
        "Prepare and tie a folding grid that produces a recognisable ring, diamond or star pattern",
        "Distinguish cloth resist from yarn resist and describe ikat construction correctly",
        "Rinse, open, dry and press a dyed length without damaging the reserved shapes"
      ],
      "sections": [
        {
          "title": "Choosing Cloth and Making the First Bind",
          "content": "Start with material that dye can actually enter. Cotton, linen, rayon and silk take cold-water dye well, while polyester fights it, so a blended scarf emerges patchy and pale and is a common cause of a failed practical. Wash the cloth to remove sizing, soak it in clean water and squeeze it out, because evenly damp fibre spreads colour and reduces fuzzy bleeding. The bind itself is a wrapping action: wind waxed cotton thread or strong twill tape around the rolled or pleated section, pull hard while winding, then knot and press the knot flat against the cloth so it does not print an extra mark. Rubber bands are quicker than thread, but they age, snap in hot dye and leak colour into the reserved shape, so double them or finish every band with a thread wrap. Clothespins, dowels, marbles, beans and beads of string all act as resist cores, and the core you choose determines the shape you get.",
          "bulletPoints": [
            "Damp the cloth before tying so dye travels evenly.",
            "Wind thread under real tension and knot it flat, never loose.",
            "Rubber bands snap and leak; wrap thread over them for safety.",
            "Marble, bean and dowel cores create rings around a pale centre.",
            "Polyester blends resist cold-water dye and give weak colour."
          ],
          "keyTakeaway": "Material choice and binding tension decide whether the reserved shape has a hard edge or a blurred ghost.",
          "realWorldExample": "In a Teshie workroom a binder tests one knot of thread with two fingers; if the wrap moves, the panel is retied before it ever reaches the dye bucket, because one loose wrap can spoil a length that will be sold at Kaneshie."
        },
        {
          "title": "Folding Grids, Clamped Boards and Stitched Gather",
          "content": "Geometry comes from the fold, not from the dye. Accordion-pleat the cloth at about 4 cm, then pleat the other direction to get a grid whose intersections bind into rings, and diamonds appear when the same grid is folded diagonally first. Rolling from one corner towards the centre produces concentric rings with a bullseye at the middle, which is the most requested pattern for school banners. Clamping, called itajime in Japan, needs the cloth folded flat with two carved wood or plastic sheets on the faces and strong pressure at the four corners; the compressed area cannot absorb dye, so the printed shape has hard straight edges, and the carved grooves in the sheet become lines of colour inside the shape. Stitched gathered resist is slower and finer: run a row of stitches along the drawn design, pull the thread until the cloth gathers into a ridge, bind that ridge, then dye and cut the threads away. Bandhani-style dot binding pushes this further: pinch up hundreds of tiny points, wind thread twice around each neck and knot, giving a dense star field on a dark ground.",
          "bulletPoints": [
            "Fold first, bind second: the fold sets the pattern symmetry.",
            "Clamps must squeeze at all four corners or dye sneaks under the sheet.",
            "Carved grooves in a clamp sheet print lines of colour inside the shape.",
            "Gathered stitched ridges release soft, drawn lines when cut open.",
            "Dot binding is slow work; plan the density before you start pinching."
          ],
          "keyTakeaway": "Folds, clamps and gathers are pattern generators; dye only reveals what the cloth shape already decided.",
          "realWorldExample": "A Form 3 class at Achimota printing a drama-cloth panel folds a 4 cm grid, clamps the bundle between two wooden blocks cut from an old bench, and gets an architectural lattice that later reads clearly on a stage flat."
        },
        {
          "title": "Colour Layering and the Chemistry of the Dip",
          "content": "Work from light to dark and re-bind between dips. The first bundle goes into the palest colour and reserves it; after that dip, wring the cloth, add fresh binds over the areas you now want to protect from the darker colour, and dip again. Because dye films are transparent, a later dip sits on top of an earlier one and darkens it, while bound areas stay at whatever depth they had when they were shut away. Reversing the order, dark first, is the classic disaster, since nothing can lighten dyed cloth except bleach. For cotton use a cold-water reactive dye with a dissolving agent and common salt at roughly one dessert spoon per litre to help exhaustion, then fix with soda ash in the bucket for eight to twenty-four hours, or steam according to the dye instructions. Indigo works differently: the vat contains the reduced, colourless leuco form, the cloth comes out yellow-green, and air oxidises it to blue within three to five minutes, so depth is built by repeated dips rather than a stronger bath. Wear gloves, keep one stick per colour and cover buckets when not in use.",
          "bulletPoints": [
            "Light first, dark last; every re-bind protects the colour already taken.",
            "Salt assists exhaustion on cotton; soda ash fixes reactive dye.",
            "Indigo depth comes from repeated dips plus air oxidation, not more dye powder.",
            "Change gloves and stirring sticks between colours to avoid cross-contamination.",
            "Record dip times and dye strengths in a log for the Paper 2 planning sheet."
          ],
          "keyTakeaway": "A tie-dye sequence is a plan written in binding order: the earliest bind holds the palest colour.",
          "realWorldExample": "A Koforidua dye yard batches a royal-blue and ochre panel by dipping the ochre-bound bundle first in weak yellow, re-binding the sunburst, then sinking it in a strong blue for four minutes and leaving it overnight under soda ash."
        },
        {
          "title": "Rinsing, Opening Out, Drying and Judging the Result",
          "content": "The last third of the work is where careless students lose the marks. Rinse the bundle in cold water, squeezing gently, until the water is almost clear, and only then cut or untie the bindings; opening early drags concentrated dye into the pale reserved shapes and turns stars into grey smudges. After opening, rinse once more with a little detergent, squeeze without wringing and dry flat in shade, because direct sun fades indigo and azo shades and bakes any mud mark into the fibre. Never force a stiff, damp cloth open at the knot; let it dry a little so the thread releases itself, otherwise you tear the reserved ring. Press when bone dry with a protective cloth over the work, and check the piece against your plan: are the reserved shapes clean, is the colour sequence light to dark as intended, are the folds symmetrical, and is the cloth fast when rubbed with a white cloth. Fault names belong in your log, since Paper 3 asks you to appraise your own handling of materials.",
          "bulletPoints": [
            "Rinse before untying; untie only when loose dye has gone.",
            "Shade-dry, never sun-dry, and do not wring the cloth hard.",
            "Stiff knots loosen as the cloth dries; forcing them tears the pattern.",
            "Press through a protective cloth with a moderate iron.",
            "Test fastness by rubbing a white cloth over the dried dyed area."
          ],
          "keyTakeaway": "Clean reserved shapes come from patient rinsing, shade drying and opening out only at the right moment.",
          "realWorldExample": "A Ho school shop sells opened panels at an open day; the ones rinsed until clear and shade-dried hold their star field for a full season, while hastily rinsed stock bleeds into grey patches and returns from buyers."
        }
      ],
      "commonMistakes": [
        "Dyeing dark to light. Once a bundle has taken a deep shade nothing but bleach will lift it, so a reversed sequence destroys the pale reserved shapes; plan the dip order backwards from the final dark colour before the first knot is tied.",
        "Binding with loose wraps or expired rubber bands. A snapped band or slack thread leaks dye into the reserved area, so the finished star field reads grey; test every knot with two fingers and double-band weak areas.",
        "Untying the cloth while it is still full of loose dye. Concentrated colour is then dragged across the pale shapes as the folds open, and the pattern loses all contrast; rinse cold until the water is nearly clear first.",
        "Dry cloth tied and dipped without pre-wetting. Sizing and dry fibre take colour unevenly, giving blotchy grounds; wash the cloth, soak it and squeeze it to even dampness before any resist work.",
        "Working with dull scissors when cutting the gathered threads, which nicks the cloth and leaves pulled yarns along the released line; use sharp embroidery scissors and cut away from the reserved shape.",
        "Drying in strong midday sun to save time; ultraviolet fades indigo and azo shades and sets mud, so dry flat in shade and press afterwards."
      ],
      "wassceExamTips": [
        "Paper 1 asks definitional items such as the difference between cloth resist and yarn resist. Answer ikat as a yarn resist applied to the warp before weaving and tie-and-dye as a cloth resist applied to finished fabric; that single distinction is usually the whole mark.",
        "In Paper 2 (design and planning) your sequence drawing must show the order of binds and dips with arrows and colour notes, plus quantities of dye, salt and soda ash and the time for each dip. Marks are for a workable plan, not for a pretty sketch.",
        "Paper 3 practical hours reward handling of materials: damp cloth before tying, knots under tension, light to dark dip order, rinsing before opening, shade drying. Keep the log so the examiner can see the method behind the result.",
        "When a sample is judged on quality of finish, contrast between reserved and dyed areas carries the marks. A muddy sample with good idea usually scores below a simple pattern with hard, clean reserved edges.",
        "Creativity marks come from combining methods: clamp plus bind plus stitch on one panel, or an ikat-inspired warp stripe with a tied cloth pattern. State the combination on the label so it is noticed."
      ],
      "summaryChecklist": [
        "Can I name the four physical resist actions and demonstrate each on a scrap of cotton?",
        "Can I explain why colour must be layered light to dark and re-bound between dips?",
        "Can I fold a grid that gives rings, diamonds or a bullseye before any dye touches the cloth?",
        "Can I distinguish ikat yarn resist from tie-and-dye cloth resist with named Ghanaian examples?",
        "Can I rinse, open, shade-dry and press a dyed length without damaging the reserved shapes?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-tie-dye-1",
        "title": "Two-Colour Sunburst Panel with Re-Binding",
        "problem": "Plan and execute a 60 cm by 60 cm cotton panel with a pale ochre sunburst at the centre over a deep indigo ground, using spiral rolling, binding and the correct dip order.",
        "stepByStepSolution": [
          "Step 1 (M1): Wash the cotton to strip sizing, soak it and squeeze to even dampness, then roll from one corner towards the centre so the layers stay flat and the spiral turns evenly.",
          "Step 2 (M1): Bind the rolled bundle with waxed thread at 3 cm spacing, pulling hard and knotting flat; this first bind reserves the ochre that will be applied first.",
          "Step 3 (M1): Dip the bound bundle in weak ochre cold-water dye for 4 minutes, squeeze gently in the bundle and keep every first wrap closed.",
          "Step 4 (M1): Add a second set of binds over the ochre rings while the cloth is still damp, then move the bundle to the indigo vat, so the ochre is now double protected.",
          "Step 5 (M1): Dip and aerate three times in indigo, allowing 3 to 5 minutes of air exposure between dips until the yellow-green turns blue and the depth is dark.",
          "Step 6 (A1): Rinse cold until the water runs nearly clear, only then cut the bindings and give a second rinse, so the ochre rings stay sharp against the indigo.",
          "Step 7 (A1): Dry flat in shade, press through a protective cloth and compare the opened panel with the planned spiral: rings concentric, ground even, no grey bleed."
        ],
        "keyTakeaway": "The ochre survives only because it was bound first, dyed first and then re-bound before the darkest dip."
      },
      {
        "id": "ex-tx-tie-dye-2",
        "title": "Clamped Grid Runner with Stitched Lines",
        "problem": "Produce a 120 cm runner with a hard-edged lattice and soft drawn lines inside it, combining itajime clamping with stitched gathered resist in one cold-water dyed length.",
        "stepByStepSolution": [
          "Step 1 (M1): Accordion-fold the runner at 4 cm, then fold the band into a stack so the lattice squares of the design fall on the fold intersections.",
          "Step 2 (M1): Cut two sheets of thin ply or hardboard to the folded block size, place one on each face and clamp firmly at all four corners so no dye can enter the compressed area.",
          "Step 3 (M1): Stitch along the two soft-line positions with running stitch, pull the thread until the cloth gathers into a ridge and bind the ridge twice to close it.",
          "Step 4 (M1): Apply a teal cold-water dye with a sponge to the exposed surfaces only, keeping the clamp edges wet, then salt the pad and leave it to exhaust for 30 minutes.",
          "Step 5 (M1): Rinse the folded bundle in cold water, release the clamps, cut the gathers and finally unroll the cloth to reveal the grid and the drawn lines.",
          "Step 6 (A1): Shade-dry, press and appraise: the lattice lines are hard and straight because the clamps held, while the stitched ridges read as soft blurred lines, giving the runner two distinct line qualities."
        ],
        "keyTakeaway": "Clamps give hard geometry, gathers give soft lines; combining them in one dip shows command of resist variety."
      }
    ],
    "quiz": {
      "id": "quiz-tx-tie-dye",
      "topicId": "shs1-tx-t3-tie-dye-resist-methods",
      "title": "Tie-and-Dye Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-tie-dye-1",
          "quizId": "quiz-tx-tie-dye",
          "questionText": "In a tie-and-dye sequence, the very first binding made on the cloth reserves which colour?",
          "optionA": "The final and darkest shade applied last",
          "optionB": "The first and lightest colour applied",
          "optionC": "Nothing, because a bind only holds the shape of the bundle",
          "optionD": "Only the undyed white of the raw cloth",
          "correctOption": "B",
          "subConcept": "Order of colour layering",
          "explanation": "Dye films are transparent and each later dip darkens what is already there, so the earliest bind protects the earliest, palest colour. Option A reverses the logic and is the usual mistake, since a dark shade cannot be lightened afterwards.",
          "remediationTip": "Sketch the dip sequence backwards before tying: write the planned colour under each bind and check that the palest sits under the earliest wrap."
        },
        {
          "id": "q-tx-tie-dye-2",
          "quizId": "quiz-tx-tie-dye",
          "questionText": "A student pinches up tiny points of cloth, winds thread twice around each neck and knots them, producing a dense field of pale stars on a dark ground. Which resist method is being used?",
          "optionA": "Itajime clamping between carved boards",
          "optionB": "Wax-resist batik with a tjanting tool",
          "optionC": "Discharge printing over a dyed ground",
          "optionD": "Bandhani-style dot binding",
          "correctOption": "D",
          "subConcept": "Resist method families",
          "explanation": "Pinched, thread-bound points are the dot resist known as bandhani. Clamping needs folded cloth under pressure between sheets, batik uses wax as the resist and discharge removes colour chemically, so none of those describes a bundle of tied dots.",
          "remediationTip": "Sort resist methods into two columns, pressure methods and coating methods, and place one example cloth under each heading."
        },
        {
          "id": "q-tx-tie-dye-3",
          "quizId": "quiz-tx-tie-dye",
          "questionText": "Why must a dyed bundle be rinsed in cold water until almost clear before the bindings are removed?",
          "optionA": "So loose dye is washed away and cannot be dragged into the pale reserved shapes when the cloth opens",
          "optionB": "So the salt in the rinse fixes the colour chemically",
          "optionC": "So the knots loosen and the bundle can be untied faster",
          "optionD": "So the ground shade is bleached slightly lighter",
          "correctOption": "A",
          "subConcept": "Rinsing discipline",
          "explanation": "Unrinsed bundles carry concentrated loose dye that smears across reserved areas as the folds open, destroying contrast. Cold rinsing removes that loose dye first; salt and soda ash act during dyeing, not during this rinse, and no rinsing bleaches colour away.",
          "remediationTip": "Practise the sequence on a scrap: rinse with the bundle closed, then open, and observe whether the water is clear before the knots are cut."
        },
        {
          "id": "q-tx-tie-dye-4",
          "quizId": "quiz-tx-tie-dye",
          "questionText": "In indigo dyeing, what happens between successive dips to build a deeper blue?",
          "optionA": "The cloth is ironed to press the colour in",
          "optionB": "Vinegar is added to the vat each time",
          "optionC": "The wet cloth is exposed to air until the yellow-green leuco form oxidises to blue",
          "optionD": "The vat is boiled to concentrate the dye",
          "correctOption": "C",
          "subConcept": "Indigo oxidation",
          "explanation": "The reduced vat holds colourless leuco indigo, which turns blue only when oxygen of the air acts on it, so depth grows with dip and aeration cycles. Adding more dye powder alone will not deepen the shade if oxidation is skipped, and heat or vinegar upset the vat chemistry.",
          "remediationTip": "Draw the indigo cycle as a flow diagram: dip, squeeze, air, repeat, and note the colour change at each stage."
        },
        {
          "id": "q-tx-tie-dye-5",
          "quizId": "quiz-tx-tie-dye",
          "questionText": "Which statement correctly distinguishes ikat from ordinary tie-and-dye?",
          "optionA": "Ikat uses wax while tie-and-dye uses thread",
          "optionB": "In ikat the resist is tied and dyed on the yarn before weaving, while tie-and-dye works on finished cloth",
          "optionC": "Ikat is produced with a squeegee through a mesh screen",
          "optionD": "Ikat needs no dye because the pattern is woven in white",
          "correctOption": "B",
          "subConcept": "Yarn resist versus cloth resist",
          "explanation": "Ikat reserves colour on warp or weft yarns that are later woven, which is why its motif edges blur slightly; that is why Ewe cloth around Agotime and Kpando reads as ikat. Wax belongs to batik, a squeegee belongs to screen printing, and ikat is definitely dyed.",
          "remediationTip": "Place samples in order of production stage: yarn dyed, then woven, versus cloth woven, then dyed, and label each resist type."
        }
      ]
    }
  },
  {
    "id": "shs2-tx-t1-adinkra-stamping-symbolism",
    "subjectId": "textiles",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Adinkra: Stamping, Symbols and Meaning",
    "description": "Badie-bark ink, calabash stamps, padding and impression technique, the ruled grid, reading major symbols and dressing for mourning or celebration, plus modern adinkra print.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• ADINKRA cloth is made by STAMPING a carved symbol in dark ink onto cotton, not by weaving and not by screen printing; the raised relief face of the stamp carries the colour.\n• Origin and ownership: the craft is Ashanti, associated with Ntono near Kumasi for carved stamps and with the Adum and Kejetia cloth sellers; royal and elder wear at Akwasidae and funerals keeps the trade alive.\n• Ink source: bark of the badie tree is chipped, boiled for three to five hours and reduced to a thick glossy brown-black syrup; the reduced liquid is the stamping dye and is kept warm and fluid in a shallow bowl.\n• Darkening: iron filings or rust water added during reduction push the ink from warm brown towards near black; too much makes it brittle and it cracks after washing.\n• Stamps: carved from the hard shell of a dried calabash gourd and fixed to a wooden handle; faces run about 3 to 6 cm across, cut in relief so the design stands proud by 2 to 3 mm.\n• Carving order: draw the symbol on the shell, cut away the background with a small knife or chisel, test-print on paper first, then sand the face flat so every part touches.\n• Grid discipline: the cloth is ruled into squares of about 5 to 6 cm with a stick, charcoal line or taut string, leaving border bands along the edges; symbols sit centred in the squares.\n• Padding: work over a firm padded board, a rolled mat or layered cloth under the fabric, so the cloth is pressed back into the stamp face and the whole impression transfers at one pressure.\n• Stamping action: charge the stamp on an ink pad or brush the face, do not flood it, place it square to the grid, press with the wrist locked and the weight straight down, then lift straight up without sliding.\n• Recharging: after about ten to fifteen impressions the film thins and prints pale; re-charge evenly, otherwise half the cloth is dark and half is weak.\n• Symbol readings: GYE NYAME, except God, the supremacy of the divine; ADINKRAHENE, chief of adinkra, three concentric rings for leadership, greatness and charisma.\n• SANKOFA, return and fetch it, the bird with the head turned back or a heart-form, meaning learn from the past and correct course; NSOROMMA, child of the heavens, a star for guardianship and love.\n• DWENNIMMEN, the ram horns, strength paired with humility; also useful: EBAN the fence for safety, NYAME DUA the altar of God, FAWOHODIE independence and resourcefulness, NKYINKYIM twisting for adaptability.\n• Occasion colour code: red and dark brown to black adinkra cloth belongs to mourning and serious rites; lighter grounds and brighter modern prints are worn for celebration, graduation and festive church.\n• Modern adinkra: the same symbols are now industrially printed on wax and fancy cloth, used on logos, school badges and tourism goods; use them accurately and credit the culture rather than inventing false meanings.\n• Finish check: crisp edges, no bleeding halo, even darkness, squares in register, borders straight and the cloth pressed on the reverse after full drying.",
    "detailedNotes": {
      "overview": "Adinkra is one of the most examinable textile topics in the Ghanaian curriculum because a single cloth carries craft technique, chemistry, semiotics and social rules. This lesson builds the process end to end, from reducing badie bark to a stamping syrup, through carving and charging a calabash stamp, ruling the grid and lifting a clean impression, then reads the main symbols and the colour code for mourning and celebration. It closes with how adinkra has moved into industrial print and branding, and what responsible use means.",
      "introduction": "An adinkra cloth is a text. Each square holds a symbol, and a wearer selects a message before leaving the house: a chief arriving at a durbar may wear Gye Nyame to declare that no power equals God, while a family at a funeral reads sorrow in dark red and black. Knowing the marks as decoration only is half the subject; knowing what they say and how they were stamped is what examiners look for, and what makes your own stamped panel honest work.",
      "realWorldContext": "Visit Ntono in the Ashanti Region and you will find carvers cutting new stamp faces from calabash shell with pocket knives, testing each symbol on newspaper before it is ever sold. In Kumasi the Adum and Kejetia stalls stack stamped cotton lengths for funeral announcements and for Akwasidae durbar, while the same ink and stamps work in school textile rooms from Assin Manso to Assahuman. Industrially, adinkra motifs appear on machine-printed fancy cloth sold at Makola and on school ties, badges and tourism wear, which means a student can be asked to distinguish handmade stamped adinkra from printed adinkra in Paper 1.",
      "objectives": [
        "Describe the preparation of badie bark ink and the effect of adding iron to the reduction",
        "Carve, mount, charge and test a calabash stamp so the impression is complete",
        "Rule a cloth grid and stamp a panel with symbols centred, upright and in register",
        "Explain the meanings of Gye Nyame, Sankofa, Adinkrahene, Dwennimmen and Nsoromma",
        "Match adinkra cloth colour to the occasion and comment on modern printed adinkra use"
      ],
      "sections": [
        {
          "title": "The Ink: Boiling Badie Bark Down to a Stampable Syrup",
          "content": "Traditional adinkra colour is not a commercial dye. Bark of the badie tree is stripped, chipped or pounded, then boiled in water for three to five hours until the liquid reduces to a thick, glossy, brown-black syrup that clings to the stamp face without running. The maker tests consistency by drawing a line with the finger across the surface: it should hold a moment before closing. Kept in a shallow bowl over low heat it stays fluid; left cold it becomes tacky and pulls the cloth fibres. Warm brown is the natural result, and the near-black mourning shade is reached by adding iron filings or rust water during the long reduction, which chemically darkens the tannin. Overdone, this makes the dried film brittle, so a heavily ironized cloth cracks and sheds after a few washes. Strain the ink through a fine cloth before use, because bark grit prints specks and blocks the relief details of a small symbol.",
          "bulletPoints": [
            "Badie bark is boiled three to five hours and reduced to a thick glossy syrup.",
            "A shallow bowl and low heat keep the ink fluid during a working session.",
            "Iron filings or rust water darken brown towards mourning black.",
            "Excess iron makes the dried film brittle and it cracks after washing.",
            "Strain the ink; grit in the relief spoils fine symbol detail."
          ],
          "keyTakeaway": "Consistency and purity of the ink decide whether the stamp lifts a crisp symbol or a running blob.",
          "realWorldExample": "A Ntono maker tests a fresh batch by stamping twenty Adinkrahene rings on newspaper; if the outer ring prints pale while the centre is heavy, the ink is too thin or the stamp face is uneven, and the batch is reduced further."
        },
        {
          "title": "Carving the Stamp and Charging It Correctly",
          "content": "Stamp faces are cut from the hard shell of a dried calabash gourd, sawn into a blank, smoothed and fixed to a turned wooden handle that gives the worker a firm grip and a vertical axis. The symbol is drawn on the shell, then the background is carefully cut away with a small knife or narrow chisel so the design stands in relief by two or three millimetres; anything left low touches the cloth and prints unwanted ink. A test impression on paper before the first cloth pass reveals broken strokes, and light sanding on a flat board restores even contact. Charging is the second skill: brush or pad a thin, even film onto the face and blot it on scrap, because a flooded stamp fills the interior of concentric rings and turns Adinkrahene into a disc. After ten to fifteen impressions the film thins and prints pale, so re-charge evenly instead of pressing the stamp back into the bowl, which loads one side heavily.",
          "bulletPoints": [
            "Calabash shell in relief, mounted on a wooden handle for a vertical press.",
            "Cut background away fully; low islands print grey smudges inside the symbol.",
            "Always test on paper before touching the cloth grid.",
            "Charge thin and blot; a flooded face fills rings and dots.",
            "Re-charge every ten to fifteen impressions to hold colour depth even."
          ],
          "keyTakeaway": "Even relief plus thin ink is the technical secret of a crisp adinkra impression.",
          "realWorldExample": "A Weija SHS textiles class carves a class symbol into a calabash blank, tests it forty times on newsprint and discards the two designs that fill in, before stamping the final cloth for Speech and Prize-Giving Day."
        },
        {
          "title": "Ruling the Grid, Padding the Board and Lifting the Impression",
          "content": "Layout comes before ink. The damp-dry cloth is stretched on a firm padded board, made from rolled matting or layered cloth under a smooth cover, and ruled into squares of about five to six centimetres using a taut string, a stick or a faint charcoal line; border bands are left plain along the edges because they carry the finishing strips when the length is sewn. The padding matters physically: it presses the cloth back into the stamp face so every relief line transfers in one strike, while a hard table prints only the high points. To stamp, hold the charged stamp square to the grid, place it, then drive straight down with the wrist locked and the weight of the body, not a push from the elbow; lift straight up without any slide, because a slide smears the symbol and leaves a ghost edge. Working in rows keeps register, and a helper watching the alignment of the second row catches drift early. After drying, press the reverse with a warm iron through a cloth.",
          "bulletPoints": [
            "Rule the grid first; five to six centimetre squares with plain border bands.",
            "Padding under the cloth makes the whole relief touch in a single strike.",
            "Straight down, straight up; sliding produces a ghost edge on the symbol.",
            "Stamp in rows and check alignment against the string line every few squares.",
            "Let the ink dry fully, then press from the reverse through a protective cloth."
          ],
          "keyTakeaway": "Grid, padding and vertical pressure are the three mechanical causes of a professional adinkra surface.",
          "realWorldExample": "At an Ejura funeral the family cloth is judged by its rows: symbols sitting dead centre with upright rims read as the work of an experienced stamping yard, while drifting rings announce a hurried hand."
        },
        {
          "title": "Reading the Symbols and Choosing Cloth for the Occasion",
          "content": "Adinkra is a system of meaning, so each stamp must be explained before it is copied. Gye Nyame, the most widely used symbol, states that the power of God stands above all things and appears on regalia, cloth and building fronts. Adinkrahene, three concentric rings, is named chief of adinkra and communicates leadership, greatness and charisma, which is why elders and performers choose it. Sankofa, drawn as a bird turning its head back to fetch the egg or as a stylised heart-form, says return and fetch it: learn from the past and correct the course, and it now appears on Ghana Airways history, national logos and university crests as well as cloth. Nsoromma, a star, names the child of the heavens and speaks of guardianship, love and the belief that a person is watched over. Dwennimmen, ram horns, pairs strength with humility, since a fighting ram bows its head. Add Eban, the fence, for safety, Nyame Dua, the altar of God, Fawohodie for independence and resourcefulness, and Nkyinkyim for adaptability. Colour completes the message: dark red and deep brown to black cloth belongs to mourning and solemn rites, while lighter grounds and bright modern printed adinkra are chosen for celebration, graduation and festive worship.",
          "bulletPoints": [
            "Gye Nyame: supremacy of God; Adinkrahene: leadership and greatness.",
            "Sankofa: fetch from the past and correct course; Nsoromma: guardian star.",
            "Dwennimmen: strength joined to humility; Eban: protection and security.",
            "Red and near-black cloth signal mourning; light or bright grounds signal celebration.",
            "Industrial adinkra print is acceptable, but invented meanings misrepresent the culture."
          ],
          "keyTakeaway": "Every stamp carries a saying, and the cloth colour tells the audience which occasion the saying is for.",
          "realWorldExample": "A Sunyani graduand selecting cloth for the ceremony chooses a light-ground Sankofa print to speak of gratitude to the past, and leaves the deep red-and-black adinkra for the family mourning cloth used the same season."
        }
      ],
      "commonMistakes": [
        "Flooding the stamp face with ink. Concentric rings and dots fill in, Adinkrahene prints as a disc and Nsoromma loses its points; charge thin, blot on scrap, then test-print before touching the cloth.",
        "Stamping on a hard, unpadded surface, so only the tallest relief lines transfer and the symbol prints broken at the corners; always work over a firm padded board.",
        "Sliding or rocking the stamp when lifting, which drags a ghost edge beside the design; press straight down and pull straight up.",
        "Letting the ruled grid drift because rows were not checked against the string, producing a cloth whose symbols sit at angles towards the selvedge; re-check register every second row.",
        "Applying a mourning colour code to a festive commission, or inventing a meaning for a symbol; wrong colour and wrong reading both cost real marks in appraisal questions.",
        "Using a blunt carving knife on calabash shell, which slips and tears the relief, ruining the stamp face and risking a hand injury; keep a sharp blade and cut away from the fingers."
      ],
      "wassceExamTips": [
        "Paper 1 likes the ink question: name the source of adinkra colour as boiled and reduced bark of the badie tree, and add that iron darkens it, rather than writing indigo or wax, which belong to other textile processes.",
        "In Paper 2 planning, show the grid measurement, the number of symbols per row, the border band width and the stamping order on a scaled diagram; a plan with measurable figures earns method marks even if the drawing is simple.",
        "Paper 3 assesses handling of materials: padded board, thin charge, vertical lift and clean rows are the observable habits. Leave one stamped test strip pinned to the board so the examiner can see your edge quality.",
        "For symbol-meaning questions, answer in the pattern form plus meaning, for instance three concentric rings, Adinkrahene, leadership and greatness. A bare name without meaning scores nothing.",
        "When appraisal asks creativity, propose a legitimate new symbol for a contemporary theme such as road safety or clean water, then state clearly that it is a new design and not a traditional proverb."
      ],
      "summaryChecklist": [
        "Can I prepare or describe badie bark ink and explain the effect of iron on its shade?",
        "Can I carve, mount, charge and test a calabash stamp so the impression is complete?",
        "Can I rule a five to six centimetre grid and stamp rows that stay in register?",
        "Can I give the form and the meaning of Gye Nyame, Sankofa, Adinkrahene, Dwennimmen and Nsoromma?",
        "Can I choose correct adinkra cloth colours for mourning and for celebration and comment on printed adinkra?"
      ]
    },
    "examples": [
      {
        "id": "ex-adinkra-stamping-1",
        "title": "Stamping a Two-Metre Mourning Cloth",
        "problem": "A family orders a two-metre cotton cloth stamped in dark adinkra for a funeral, with a plain border and rows of Dwennimmen alternating with Nsoromma. Plan and carry out the work.",
        "stepByStepSolution": [
          "Step 1 (M1): Reduce the badie bark syrup with a little rust water until the shade is near black for mourning, strain it through fine cloth and keep the bowl warm over low heat.",
          "Step 2 (M1): Test both stamps on newspaper, re-charge thin, and discard any stamp whose star points fill in, before any cloth is touched.",
          "Step 3 (M1): Rule the cloth on a padded board into 5.5 cm squares with a taut string, leaving 10 cm plain border bands at each end.",
          "Step 4 (M1): Stamp row by row, alternating Dwennimmen and Nsoromma, pressing straight down with locked wrists and lifting straight up without sliding.",
          "Step 5 (M1): Re-charge the faces evenly every twelve impressions so no section of the length prints pale.",
          "Step 6 (A1): Dry fully in shade, then press from the reverse through a protective cloth; check that symbols are centred, edges crisp with no ghost line and rings unbroken.",
          "Step 7 (A1): Confirm the colour code by holding the length against a white cloth: a deep near-black ground with red striping marks it correctly as mourning rather than festive cloth."
        ],
        "keyTakeaway": "Correct occasion colour plus unbroken, centred impressions are what a stamped adinkra length is judged on."
      },
      {
        "id": "ex-adinkra-stamping-2",
        "title": "Carving a New Adinkrahene Stamp from Calabash Shell",
        "problem": "Cut a serviceable Adinkrahene stamp, three concentric rings 4.5 cm across, from a dried calabash blank, mount it and prove that it prints a clean impression.",
        "stepByStepSolution": [
          "Step 1 (M1): Saw a flat 6 cm disc from the hard calabash shell and sand both faces on a flat board so the blank sits without rocking.",
          "Step 2 (M1): Draw three concentric rings 4.5 cm across with a compass, marking the ring width at 3 mm each.",
          "Step 3 (M1): With a sharp narrow chisel, cut away all background between and outside the rings so the design stands in relief by 2 to 3 mm; keep the blade moving away from the fingers.",
          "Step 4 (M1): Glue and pin a turned wooden handle to the back on the exact centre so pressure stays vertical during stamping.",
          "Step 5 (M1): Charge the face thinly on an ink pad, blot it, and take a test impression on paper, sanding lightly on any ring that prints broken.",
          "Step 6 (A1): Stamp ten test squares on cotton: all three rings continuous, no ink bridging between them, and no grey background patch.",
          "Step 7 (A1): Label the stamp with the symbol name and meaning, Adinkrahene, chief of adinkra, leadership and greatness, and store it flat in a cloth pouch."
        ],
        "keyTakeaway": "A usable stamp is a flat relief face on a centred handle, proved by test prints before cloth work begins."
      }
    ],
    "quiz": {
      "id": "quiz-adinkra-stamping",
      "topicId": "shs2-tx-t1-adinkra-stamping-symbolism",
      "title": "Adinkra Stamping Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-adinkra-stamping-1",
          "quizId": "quiz-adinkra-stamping",
          "questionText": "The traditional dye used for stamping adinkra cloth is obtained from",
          "optionA": "indigo leaves fermented in a vat",
          "optionB": "the sap tapped from the oil palm",
          "optionC": "camwood bark soaked in cold water",
          "optionD": "the boiled and reduced bark of the badie tree",
          "correctOption": "D",
          "subConcept": "Adinkra ink preparation",
          "explanation": "Badie bark is chipped and boiled for several hours until it reduces to a thick brown-black syrup, and iron may be added to darken it. Indigo belongs to blue vat dyeing and camwood to red cosmetic pigment, so neither is the adinkra stamping colour.",
          "remediationTip": "Write a two-column list of Ghanaian textile colour sources and the process each one serves, adinkra, indigo and batik."
        },
        {
          "id": "q-adinkra-stamping-2",
          "quizId": "quiz-adinkra-stamping",
          "questionText": "Which adinkra symbol consists of three concentric rings and is described as the chief of adinkra symbols?",
          "optionA": "Adinkrahene",
          "optionB": "Nsoromma",
          "optionC": "Dwennimmen",
          "optionD": "Eban",
          "correctOption": "A",
          "subConcept": "Symbol form and name",
          "explanation": "Adinkrahene is three concentric rings and names itself the chief of the symbols, communicating leadership and greatness. Nsoromma is a star, Dwennimmen the ram horns and Eban the fence, none of which is a ring design.",
          "remediationTip": "Draw each symbol freehand and write its name and meaning underneath, then cover the labels and test yourself from the drawings."
        },
        {
          "id": "q-adinkra-stamping-3",
          "quizId": "quiz-adinkra-stamping",
          "questionText": "In the traditional colour code, adinkra cloth for mourning is normally",
          "optionA": "white with yellow stripes",
          "optionB": "bright pink and green fancy print",
          "optionC": "red, or deep brown to near black",
          "optionD": "indigo blue with white ikat bands",
          "correctOption": "C",
          "subConcept": "Occasion colour rules",
          "explanation": "Dark red and heavily ironized near-black adinkra mark mourning and solemn rites, while light grounds express celebration. Indigo and ikat cloth belong to other weaving and dyeing traditions, and white with yellow is not the mourning code.",
          "remediationTip": "Sort sample swatches into two piles, mourning and festive, and state the colour feature that placed each swatch."
        },
        {
          "id": "q-adinkra-stamping-4",
          "quizId": "quiz-adinkra-stamping",
          "questionText": "Why is the cloth stretched over a firm padded board while adinkra stamps are applied?",
          "optionA": "So the padding heat dries the ink faster",
          "optionB": "So the cloth is pressed back into the relief and the whole impression transfers in one strike",
          "optionC": "So the board chemically fixes the badie tannin",
          "optionD": "So the padded surface stops the ink from being charged too thickly",
          "correctOption": "B",
          "subConcept": "Impression technique",
          "explanation": "Padding gives cushion so low parts of the symbol still reach the cloth; on a hard table only the tallest relief touches and the design prints broken. The board neither heats, fixes nor controls the ink charge.",
          "remediationTip": "Stamp the same symbol once on a hard table and once on padding, then compare the two prints and note which lines went missing."
        },
        {
          "id": "q-adinkra-stamping-5",
          "quizId": "quiz-adinkra-stamping",
          "questionText": "Which explanation of Sankofa is correct?",
          "optionA": "the fence that gives security and protection",
          "optionB": "strength shown by the ram bowing its head",
          "optionC": "the child of the heavens watched over by a star",
          "optionD": "return and fetch it: learn from the past and correct the course",
          "correctOption": "D",
          "subConcept": "Proverb meanings",
          "explanation": "Sankofa is drawn as a bird turning its head backwards, or as a stylised heart-form, and means fetch from the past. Option A is Eban, option B is Dwennimmen and option C is Nsoromma, so those readings belong to other symbols.",
          "remediationTip": "Match each symbol card to its proverb card, then say aloud one modern situation in which each proverb would apply."
        }
      ]
    }
  },
  {
    "id": "shs2-tx-t1-kente-narrow-loom-weaving",
    "subjectId": "textiles",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "Kente and Narrow-Loom Weaving",
    "description": "Dressing the strip loom, heddles and shed work, plain and twill blocks, joining 8 to 10 cm strips, and the named cloths of Bonwire, Adanwomase, Agotime and Daboya.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• KENTE is woven on a NARROW horizontal strip loom as a band roughly 8 to 10 cm wide and 2.5 to 4 m long; the finished cloth is made by sewing several strips edge to edge.\n• Loom parts to know: warp beam behind the weaver, cloth beam in front, heddle pulleys and heddle levers worked by the feet, a warp comb or reed, a sword-shaped beater, a boat shuttle holding pirns of weft, and a shed roller that keeps the two sheds open.\n• The weaving cycle is four actions in one rhythm: OPEN the shed by raising one heddle pulley, PASS the shuttle (one PICK), BEAT the weft home squarely with the beater, CHANGE the shed and repeat; a pick beaten twice reads as a rib.\n• Shed, pick, wale and sett are examinable words: shed is the triangular gap between warp layers, a pick is one weft thread, a wale is the vertical rib in cloth, and sett is the number of warp ends packed per unit width.\n• Warp preparation: measure the warp by winding it around posts or a warping frame to the strip length, then size it. Cotton warps are starched with rice water or cassava starch, rubbed smooth and dried so the ends glide instead of fuzzing and snapping.\n• Threading: each end is passed through a heddle eye and then through a tooth of the warp comb; a typical strip carries roughly 200 to 300 ends depending on yarn thickness, and ends are counted in pairs so symmetry can be checked.\n• Ashanti looms commonly run two heddle pulleys for the plain-weave ground plus extra pattern heddles for floated motif wefts; twill blocks need four heddle positions so the weft can pass over two and under two ends.\n• Plain weave 1 over 1 gives a flat, strong ground; 2/2 twill gives a diagonal rib that carries heavy supplementary weft and reads as a chevron band along the strip.\n• Pattern blocks are repeated units of motif weft running across the warp; a strip may alternate narrow motif blocks with long plain lengths, and a high block count is the mark of a master weaver.\n• ADWENEASA, my skill is exhausted, names the dense all-block cloth where almost the whole strip is covered with floated patterns wrapped around the ground warp.\n• Weft materials: cotton for strength, rayon and silk for shine, and metallic or gold-toned thread for prestige cloths; the pattern weft is often thicker and softer than the ground weft.\n• Joining: trim both selvedges to about 5 mm, lay strips back to back or face to face on a flat board, and sew them with a matching overcast or looping stitch so the blocks of neighbouring strips line up into rows and columns.\n• A wrapper of six to eight strips serves as a woman cloth while a full man cloth of about twelve to sixteen strips can reach 1.6 to 1.8 m in width; length is set by the strip length.\n• Centres: Bonwire near Kumasi holds the royal Ashanti tradition, Adanwomase is a working kente village, Agotime and Kpando in the Volta Region represent Ewe kente with finer blocks and ikat-dyed warp stripes, while Daboya and Tamale strip-weave indigo smocks, the fugu or batakari.\n• Named cloths carry messages: Sika futuro, gold dust, speaks of wealth and prestige; Oyokoman recalls the founding clan of the Asante state; Emaa da a wonka nyi, it is not yet time, praises innovation; Gye Nyame cloth declares faith.\n• Common colour readings: gold and yellow for wealth and royalty, red for passion and political struggle, green for growth and herbs, blue for peace and harmony, black for maturity, ancestors and healing.",
    "detailedNotes": {
      "overview": "This lesson treats kente as a weaving technology first and a cultural text second, because both are examined. You will learn the parts of the narrow strip loom and the four-action weaving cycle, dress and thread a warp, separate the plain-weave ground from twill and float blocks, and understand why strips are joined on a board. The last section reads named cloths and their messages, and locates the Ashanti and Ewe traditions at Bonwire, Adanwomase, Agotime, Kpando, Daboya and Tamale.",
      "introduction": "A kente cloth looks like one wide woven fabric, but it is a construction project: many narrow bands, each woven separately on a loom barely wider than your hand, then stitched together with the discipline of an engineer laying tiles. That single fact explains three things examiners ask about. It explains the strip width of 8 to 10 cm, because the loom is built to the reach of one weaver working a small shed. It explains the joining stitch, because alignment of blocks across seams is what makes a cloth look costly. And it explains the block system, because patterns are measured along a narrow warp and repeated in units rather than drawn freely.",
      "realWorldContext": "Bonwire, on the Kumasi to Ejisu road, remains the best known kente settlement, where looms stand in open courtyards and royal commissions are woven for Asantehene durbars; Adanwomase near Etensuaku runs weaving demonstrations for visitors. In the Volta Region, weavers at Agotime and around Kpando work Ewe kente, often with ikat-reserved warp stripes and very fine block counts, and their cloths are traded at the Kpando and Ho markets. In the north, Daboya strip-weaves cotton bands that are dyed deep indigo in village pits and sewn into smocks sold in Tamale, which shows the same narrow-loom technology producing a completely different garment.",
      "objectives": [
        "Identify the parts of a narrow strip loom and state the function of heddles, reed and beater",
        "Describe warp measuring, sizing and threading for an 8 to 10 cm strip",
        "Perform the weaving cycle of shed, pick, beat and change with even tension",
        "Distinguish plain-weave ground cloth from twill and supplementary-weft float blocks",
        "Join strips so blocks align and explain the messages of named kente cloths"
      ],
      "sections": [
        {
          "title": "The Narrow Strip Loom and What Each Part Does",
          "content": "The kente loom is a frame of a few wooden members with nothing wasted on it. The warp beam behind the weaver releases thread as work advances; the cloth beam in front rolls up finished cloth and holds tension, often helped by a weight or a tied strap. Heddle pulleys carry the heddle cords or wires; each cord has an eye through which alternate warp ends pass, so lifting a pulley raises one layer of ends and produces the shed, the triangular gap the shuttle must fly through. Two heddle pulleys worked in alternation give plain weave. The warp comb or reed spaces the ends to a fixed width and packs each fresh pick against the last, while the sword-shaped beater is swung on the weft to beat it home squarely. The boat shuttle holds several pirns of pattern weft so the weaver can change colour without stopping. Knowing which part is responsible for which fault is examinable: an uneven strip width points to the reed and the beat, a broken shed points to heddle cords, and a wavy selvedge points to the weaver hand position.",
          "bulletPoints": [
            "Heddle pulleys and levers create the shed by lifting alternate warp layers.",
            "The reed or warp comb sets strip width and packs the picks.",
            "The beater is swung square to the warp, never tilted.",
            "The boat shuttle carries several pirns for quick colour changes.",
            "Cloth-beam tension and the shed roller keep the weave steady and open."
          ],
          "keyTakeaway": "Every part of the strip loom answers a fault question: shed from heddles, width from the reed, density from the beat.",
          "realWorldExample": "A Bonwire apprentice is given a loom with two heddle pulleys and asked to name the part responsible when the strip narrows towards the middle; the answer, the reed and the beat, is what decides whether he is allowed to weave cloth unsupervised."
        },
        {
          "title": "Measuring, Sizing and Threading the Warp",
          "content": "Warp work begins away from the loom. Ends are wound around paired posts or a warping frame to build a length of 2.5 to 4 metres, keeping the loops at the turn smooth so no end is choked. Cotton warp is then sized, traditionally with rice water or cassava starch, worked in and dried in the shade; sizing glazes the fibre so ends slide past each other at the heddles instead of fuzzing and breaking, and a dry, hard-sized warp is rewetted slightly before threading. Each end is drawn through a heddle eye and then through one tooth of the warp comb, counted in pairs so that the two halves of the strip mirror one another; a strip commonly carries roughly 200 to 300 ends depending on yarn thickness. Before weaving begins, the ends are checked for crossings, because one warp thread through the wrong heddle will produce a constant float and a hole in the pattern. Threading errors are the single most expensive fault in kente, since they are only visible after metres of cloth exist.",
          "bulletPoints": [
            "Warp length runs about 2.5 to 4 m, wound around posts or a warping frame.",
            "Size with rice water or cassava starch, then shade-dry and slightly rewet.",
            "Thread every end through a heddle eye and one reed tooth, counted in pairs.",
            "Check for crossed ends before the first pick; a crossed end makes a float.",
            "Keep the warp centred so both selvedges carry equal tension."
          ],
          "keyTakeaway": "Sized, untangled, correctly counted warp ends are the real foundation of an even kente strip.",
          "realWorldExample": "At Agotime a weaver threads a warp of fine rayon on an 8 cm reed, and the family divides the work so one helper holds heddles while another passes the threading hook, because a single crossed end ruins a strip that takes two days to weave."
        },
        {
          "title": "The Weaving Cycle and the Structure of Blocks",
          "content": "Weaving is four actions performed as one rhythm: raise a heddle pulley to open the shed, pass the shuttle so one weft pick crosses the strip, swing the beater square to drive that pick home against the cloth fell, then change the shed and repeat. Tension in the hands and a consistent beat determine whether the strip is dense or loose; a pick beaten twice shows on the finished cloth as a rib, and a weak beat makes the strip stretch out of shape when joined. Structure follows from heddle handling. Plain weave, over one and under one, is the flat strong ground that carries supplementary pattern wefts, which are floated across the warp face and wrapped round at the back to draw the motif. Twill blocks, worked over two and under two in a shifting sequence, need four heddle positions and give a diagonal rib that hides the ground entirely and holds heavy pattern weft well. Blocks repeat along the strip in units: a motif band, a plain length, another motif band. Cloth in which nearly the whole surface is blocked with floats is the adweneasa class, the high-count work that declares the skill of the weaver.",
          "bulletPoints": [
            "Shed, pick, beat, change: the cycle that decides cloth density.",
            "Beat square once per pick; double beating prints a rib along the strip.",
            "Plain weave 1 over 1 forms the ground that carries floated pattern weft.",
            "Twill 2 over 2 needs four heddle positions and gives a diagonal rib.",
            "Blocks repeat along the warp direction and are counted to plan a cloth."
          ],
          "keyTakeaway": "Density comes from a steady beat and structure from heddle order; both are visible in the finished strip.",
          "realWorldExample": "A Kumasi technical institute student times herself on a training loom and finds she places about 40 to 50 picks in ten minutes on plain ground, a figure she writes into her Paper 3 time plan before attempting a block section."
        },
        {
          "title": "Joining Strips, Named Cloths and the Messages They Carry",
          "content": "A kente cloth is assembled on a board. Both selvedges are trimmed to about 5 mm with sharp shears, the strips are laid in order, and each seam is sewn with matching thread in an overcast or looping stitch that closes the edge without a ridge. The weaver aligns blocks so that motif bands of neighbouring strips meet into continuous rows and columns; when this is done well the eye reads one wide fabric, and when it fails the cloth looks like a fence of loose ribbons. A woman wrapper may use six to eight strips, while a full man cloth of about twelve to sixteen strips reaches roughly 1.6 to 1.8 m in width. Meaning travels with the design name. Sika futuro, gold dust, announces wealth and prestige; Oyokoman recalls the founding clan of the Asante state and is worn on state occasions; Emaa da a wonka nyi, it is not yet time, praises restless innovation; Gye Nyame cloth declares the supremacy of God; and adweneasa names a cloth so densely blocked that the weaver says his skill is exhausted. Colour reinforces the message, with gold for royalty and wealth, red for passion and political strength, green for growth, blue for peace and black for maturity and the ancestors.",
          "bulletPoints": [
            "Trim selvedges to about 5 mm and join with a matching overcast or looping stitch.",
            "Align motif blocks across seams so the cloth reads as one wide fabric.",
            "Strip count decides cloth size: six to eight for a wrapper, twelve to sixteen for a full man cloth.",
            "Design names are proverbs: Sika futuro, Oyokoman, Emaa da, Adweneasa, Gye Nyame.",
            "Colour symbolism is part of the message, gold, red, green, blue and black each saying something."
          ],
          "keyTakeaway": "Joining is a design decision, and the block alignment plus the design name together state what the cloth means.",
          "realWorldExample": "A Ejisu family commissioning a cloth for a child naming ceremony asks Bonwire for a yellow-ground Sika futuro with six strips, then inspects the seams for block alignment before paying, because a mis-joined length goes back to the loom."
        }
      ],
      "commonMistakes": [
        "Beating with the sword tilted instead of square, which wedges the strip narrower in the middle and leaves a cloth that will not join flat; keep the beater face parallel to the fell and swing with even pressure.",
        "Weaving an unsized, fuzzy cotton warp, so ends chafe at the heddles and snap repeatedly; size with rice water or cassava starch and dry in shade before threading.",
        "Failing to check for crossed ends after threading; one crossed warp thread produces a permanent float and a visible hole that appears only after metres of cloth are woven.",
        "Joining strips with thick, mismatched thread and a bulky overcast, giving a raised ridge that shows through the cloth when it is worn; use fine matching thread and sew on a hard flat board.",
        "Cutting selvedges with blunt shears, which notches the edge and pulls yarns out of the strip, so the seam opens later; sharpen or replace the shears before trimming.",
        "Claiming a design name without its meaning, for example calling any gold cloth Sika futuro; examiners and weavers expect the structure, the block count and the proverb to be stated together."
      ],
      "wassceExamTips": [
        "Paper 1 tests the vocabulary directly. Define shed as the gap between raised and lowered warp layers, pick as one passage of weft across the warp, wale as a vertical rib, and sett as warp ends per unit width; a single clean sentence each secures the mark.",
        "In Paper 2 the kente question is a planning question: draw the strip to scale, mark the block sequence along it, state strip width as 8 to 10 cm, give the number of strips, the joining method and the colour list with meanings.",
        "Paper 3 marks handling of materials at the loom: steady beat, unbroken warp ends, clean selvedge, and joined seams whose blocks line up. Ask permission to show the examiner your threading, since neat heddling is evidence of method.",
        "Distinguish Ashanti and Ewe kente in one sentence each rather than long description: Bonwire and Adanwomase for the Ashanti tradition, Agotime and Kpando for Ewe cloth with fine blocks and ikat-reserved warp stripes; also mention Daboya and Tamale for indigo smock strips.",
        "If asked to appraise creativity, justify your own block sequence: what it repeats, why the seam alignment works and what message the naming carries, since loose decoration without structure scores poorly."
      ],
      "summaryChecklist": [
        "Can I name the parts of a narrow strip loom and state what each one controls?",
        "Can I describe warp measuring, sizing and threading for an 8 to 10 cm strip?",
        "Can I perform shed, pick, beat and change with even density along a practice warp?",
        "Can I tell plain-weave ground, twill block and floated pattern weft apart on a sample?",
        "Can I join strips with aligned blocks and explain the message of two named cloths?"
      ]
    },
    "examples": [
      {
        "id": "ex-kente-weaving-1",
        "title": "Dressing a Narrow Loom for an 8 cm Strip",
        "problem": "A student must measure, size, thread and tension a cotton warp for a strip 8 cm wide and 3 m long, then prove the dressing is correct before weaving. Plan the procedure.",
        "stepByStepSolution": [
          "Step 1 (M1): Wind 240 ends around two warping posts to build a 3 m warp, keeping the turn loops loose and checking that no end crosses another.",
          "Step 2 (M1): Work rice-water starch into the warp, comb it straight and dry it in shade, then damp it slightly so the ends are glazed but not brittle.",
          "Step 3 (M1): Thread the ends in pairs, alternate ends through the two heddle cords and every end through one tooth of the 8 cm reed, keeping the warp centred.",
          "Step 4 (M1): Tie on to the cloth beam in groups, raise each heddle pulley in turn and inspect the two sheds for the same pattern of lifted ends.",
          "Step 5 (M1): Weave a 10 cm heading in plain weave, beat square once per pick, and read the fell to confirm even density.",
          "Step 6 (A1): Verify the dressing: selvedge ends hold without breaking, strip width stays 8 cm along the heading, and no float or crossed end is visible.",
          "Step 7 (A1): Record warp count, sett, starch recipe and heading measurement in the log book for the Paper 3 planning file."
        ],
        "keyTakeaway": "A correctly dressed loom is proved by two matching sheds and a heading whose width and density never wander."
      },
      {
        "id": "ex-kente-weaving-2",
        "title": "Weaving and Joining a Six-Strip Wrapper",
        "problem": "Produce a woman wrapper of six strips, each 9 cm by 3 m, with a motif block every 40 cm and joined seams whose blocks line up into continuous rows.",
        "stepByStepSolution": [
          "Step 1 (M1): Plan one strip on graph paper as a sequence of blocks: 20 cm plain ground, 40 cm motif, 20 cm plain, then repeat, so six strips share identical measurements.",
          "Step 2 (M1): Weave the plain ground over one and under one, then introduce the pattern weft as floats across the warp, wrapping each float round the last ground pick at the back.",
          "Step 3 (M1): Beat once per pick with the beater square, and count picks in each block so all six strips carry the same density.",
          "Step 4 (M1): Finish each strip, trim both selvedges to about 5 mm with sharp shears and lay the six strips in the planned order on a flat board.",
          "Step 5 (M1): Sew each seam with fine matching thread in an overcast or looping stitch, checking block against block every 20 cm as the needle advances.",
          "Step 6 (A1): Press the joined cloth with a warm iron through a damp cloth and inspect the seams for ridges, gaps or stepped blocks.",
          "Step 7 (A1): Present the finished wrapper with the block rows reading straight across all six strips, the cloth measuring about 54 cm by 3 m and the name and meaning of the design written on the label."
        ],
        "keyTakeaway": "Identical block measurements plus careful seam alignment are what turn six narrow strips into one costly-looking cloth."
      }
    ],
    "quiz": {
      "id": "quiz-kente-weaving",
      "topicId": "shs2-tx-t1-kente-narrow-loom-weaving",
      "title": "Kente Weaving Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-kente-weaving-1",
          "quizId": "quiz-kente-weaving",
          "questionText": "In weaving, the triangular opening formed between raised and lowered warp threads, through which the shuttle passes, is called the",
          "optionA": "shed",
          "optionB": "selvedge",
          "optionC": "wale",
          "optionD": "bias",
          "correctOption": "A",
          "subConcept": "Loom and weaving vocabulary",
          "explanation": "The heddles lift alternate warp layers and the gap between them is the shed. Selvedge is the finished edge of the cloth, a wale is a vertical rib and bias runs diagonally across the grain, so none of those is the shuttle opening.",
          "remediationTip": "Label a diagram of a loom with warp, weft, heddle, shed and beater, then test yourself by covering the labels."
        },
        {
          "id": "q-kente-weaving-2",
          "quizId": "quiz-kente-weaving",
          "questionText": "Which range gives the usual width of a hand-woven kente strip before joining?",
          "optionA": "1 to 2 cm",
          "optionB": "20 to 25 cm",
          "optionC": "8 to 10 cm",
          "optionD": "40 to 45 cm",
          "correctOption": "C",
          "subConcept": "Strip dimensions and joining",
          "explanation": "The narrow loom works a small shed sized to the reach of one weaver, producing bands about 8 to 10 cm wide which are then sewn together. One to two centimetres would be tape, and widths of 20 cm or more belong to wide cloth looms, not the kente strip loom.",
          "remediationTip": "Measure a real strip edge with a ruler, then sketch a joined six-strip cloth and mark the strip width on the drawing."
        },
        {
          "id": "q-kente-weaving-3",
          "quizId": "quiz-kente-weaving",
          "questionText": "A twill block in a kente strip is recognised chiefly by",
          "optionA": "a flat surface with no visible direction",
          "optionB": "loops pulled up through the ground with a needle",
          "optionC": "dyed stripes reserved on the warp before weaving",
          "optionD": "a diagonal rib formed when the weft passes over two and under two ends",
          "correctOption": "D",
          "subConcept": "Weave structures",
          "explanation": "Twill is produced by a shifting over-two, under-two interlacement that needs four heddle positions and shows as a diagonal wale. A flat surface is plain weave, looped surfaces refer to knitted or looped work, and reserved warp stripes describe ikat dyeing, not a weave structure.",
          "remediationTip": "Hold a twill sample under raking light and trace the diagonal with a pencil; then find the diagonal on a kente block."
        },
        {
          "id": "q-kente-weaving-4",
          "quizId": "quiz-kente-weaving",
          "questionText": "Why are kente strips sewn edge to edge on a flat board instead of being joined loosely in the hand?",
          "optionA": "So the motif blocks of neighbouring strips can be aligned into continuous rows and columns",
          "optionB": "So the seams can be hidden completely under a starch coating",
          "optionC": "So the cloth becomes waterproof once joined",
          "optionD": "So the strip length can be shortened to save warp thread",
          "correctOption": "A",
          "subConcept": "Joining technique",
          "explanation": "The board holds the strips flat, so the weaver can match block to block as the needle travels; that alignment is what makes six narrow bands read as one wide cloth. Starch, waterproofing and length reduction have nothing to do with the purpose of joining on a board.",
          "remediationTip": "Practice a 30 cm test seam on two practice strips with a marked block line, and check the line for straightness as you sew."
        },
        {
          "id": "q-kente-weaving-5",
          "quizId": "quiz-kente-weaving",
          "questionText": "Which pair of settlements is associated with the Ewe kente tradition in the Volta Region?",
          "optionA": "Navrongo and Bawku",
          "optionB": "Agotime and Kpando",
          "optionC": "Daboya and Tamale",
          "optionD": "Bonwire and Kumasi",
          "correctOption": "B",
          "subConcept": "Weaving centres of Ghana",
          "explanation": "Agotime and the Kpando area are Ewe kente centres, known for fine blocks and ikat-reserved warp stripes. Daboya and Tamale are smock-weaving towns in the north, Bonwire is the Ashanti royal kente centre, and Navrongo is noted for wall painting rather than cloth.",
          "remediationTip": "Draw a map of Ghana and place one label each for Ashanti kente, Ewe kente and northern smock weaving."
        }
      ]
    }
  },
  {
    "id": "shs2-tx-t2-fabric-printing-repeat-design",
    "subjectId": "textiles",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 3,
    "title": "Fabric Printing and Repeat Design",
    "description": "Direct, resist and discharge printing, hand block work, screen printing with mesh, emulsion and squeegee, plus straight and half-drop repeats, colour separation, registration and roller printing.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• PRINTING is applying colour in a controlled design to already-made cloth, so it differs from dyeing the whole surface and from weaving the pattern into the yarn.\n• Three working families: DIRECT printing puts thickened dye or pigment straight on a light ground; RESIST printing lays a wax or chemical paste that blocks a later dye bath, which is the logic of the Dutch wax print trade; DISCHARGE printing prints a reducing paste that destroys the existing ground colour and leaves a pale or coloured motif.\n• Thickening is essential: a thin liquid runs, so paste is built with starch or a pigment binder so the colour stands on the cloth with hard edges.\n• BLOCK PRINTING uses a carved wooden block, face 12 to 20 cm square with the design in relief by 2 to 3 mm, pressed onto a felt-padded colour table and struck on the cloth, sometimes with a light mallet for an even impression.\n• Block repeat mechanics: pin the cloth flat on a padded table, print a row using a guide line or T-square, place the block against the previous impression, and use guide nails or register marks on the block edge so the drop stays constant.\n• Hand-block cloth shows small variations in colour depth and placement; that evidence of the hand is a selling point for craft cloth and is not a fault unless edges bleed.\n• SCREEN PRINTING needs a stretched mesh on a frame. Mesh numbers are threads per centimetre: 43T or 55T open mesh lays thick pigment and heavy paste, 120T fine mesh holds thin lines and small dots.\n• Making the stencil: coat the dried mesh evenly with light-sensitive emulsion using a scoop coater, dry face down in a dark, dust-free place, tape the artwork face to face with the emulsion side to the art, expose to strong light, then wash out the unexposed emulsion with a fine spray and dry.\n• Touch up pinholes with blockout tape, because a pinhole prints a stray dot on every repeat and destroys the run.\n• Printing stroke: lay the screen about 5 mm above the cloth, flood the mesh with a light no-pressure pass, then print with one firm pass of the squeegee held at 45 to 75 degrees; one colour per screen and flash or air dry before the next colour, and wash screen and squeegee the moment the run ends because paste dried in the mesh blocks it and the screen is ruined for fine work.\n• Squeegee choice matters: a rubber blade of medium hardness, roughly 60 to 70 Shore A, and a cutting edge about 5 to 10 cm wider than the design; too much pressure forces dye through and blurs the motif.\n• Colour SEPARATION means one screen or one block per colour, with a key line screen that carries the outline; the order runs from the largest pale areas to the small dark details so overprints stay legible.\n• REGISTRATION is placing colours in exact relation; print or draw crosshair marks near the selvedge, pin the cloth to the table and align every screen to the same marks.\n• REPEAT types: a STRAIGHT or block repeat stacks motifs in exact columns and rows, showing a grid; a HALF-DROP repeat shifts the adjacent vertical column by half the vertical repeat, breaking the grid the way brickwork does; quarter-drop is a further shift.\n• Repeat size is called the report of the design, measured across and down; a typical industrial print unit is roughly 64 cm across the width with a 30 to 40 cm drop, it must join itself at all four edges, and the test is to tile nine copies and slide the unit across and down, completing any shape cut at one edge on the opposite edge.\n• Industry scale: ROTARY or ROLLER printing engraves each colour on a polished copper roller, one roller per colour, up to about twenty colours feeding from a common blanket cylinder at high speed, followed by steaming, washing off and finishing; GTP Ghana and Akosombo Textiles Limited at Tema print wax and fancy cloth this way.",
    "detailedNotes": {
      "overview": "Printing is where a textile design becomes reproducible, so this lesson links drawing skill to shop discipline. You will separate the three print families, direct, resist and discharge, then build the two studio methods examined in Ghana, hand block printing and screen printing, with real figures for mesh counts, squeegee angles and emulsion handling. The final section is repeat logic: straight and half-drop units, colour separation, registration and the engraved-roller industry that supplies the market cloth most students already wear.",
      "introduction": "A printed cloth is a negotiation between a design and a machine, and the negotiation is called the repeat. You must invent a motif small enough to fit a screen or a block, yet arranged so that when the unit is stamped again and again in every direction no seam or break appears. Everything else follows from that discipline: the paste has to be thick enough not to run, the colours have to be separated so each one can be laid separately, and the registration marks exist so the fifth colour still lands where the first colour expects it. When your own panel prints cleanly, you have solved a problem a factory solves at speed on copper rollers.",
      "realWorldContext": "The cloth most Ghanaians wear on Fridays is printed cloth: wax prints and fancy prints produced by roller machines at Tema by GTP Ghana and Akosombo Textiles Limited, then named on the market, sold by the piece of about six yards and priced by design reputation at Makola, Kantamati and Kejetia. Hand printing still thrives as a craft trade: block-printed cotton panels are made in workrooms in Accra and Tamale for curtains, banners and school uniforms, and screen-printed cloth for festival T-shirts, church wraps and graduation stoles is a common student enterprise. A design that registers badly will not survive a single market week, which is why registration is treated as a quality issue rather than a technical detail.",
      "objectives": [
        "Distinguish direct, resist and discharge printing and give a use for each",
        "Carve, paste and strike a block to produce a clean straight repeat on cotton",
        "Coat, expose, wash out and print from a screen using correct mesh and squeegee choices",
        "Separate a design into colour units and register successive colours accurately",
        "Construct straight and half-drop repeats that join without a visible seam"
      ],
      "sections": [
        {
          "title": "Three Ways to Put Colour Down: Direct, Resist and Discharge",
          "content": "Direct printing is the plainest method: a thickened dye or pigment paste carrying the design is laid on white or pale cloth, dried, steamed and rinsed, and the printed area is the coloured area. Resist printing reverses the picture. A resist paste, wax, starch or a chemical blocker, is printed first, then the whole cloth goes into a dye bath; the ground takes colour and the printed design stays pale because the paste shut the dye out, which is exactly how wax print cloth gains its crackle veins when the printed wax breaks. Discharge printing works on already-dyed ground cloth. A paste containing a reducing agent destroys the ground dye along the printed lines, and pigment may be added to the same paste so the discharged motif prints in a second colour rather than plain white; the handle stays soft because the paste replaces colour instead of sitting on the cloth. Choosing the method is a design decision: direct gives the fullest colour range, resist gives the crispest pale motif on a dark ground, and discharge gives the softest hand on a dark cotton.",
          "bulletPoints": [
            "Direct printing: thickened colour applied where the motif should show.",
            "Resist printing: paste blocks a later dye bath, so the motif stays pale.",
            "Discharge printing: a reducing paste destroys ground colour in the motif lines.",
            "Thickener such as starch or a binder stops colour running sideways.",
            "Wax breaking in resist printing produces the valued crackle effect."
          ],
          "keyTakeaway": "Decide whether the motif will be colour added, colour blocked or colour removed; that choice names the print method.",
          "realWorldExample": "A Tema factory wax print of a dark indigo ground with pale flowers is resist printing in origin, while a Tamale workshop banner with deep blue letters on bleached cotton is direct printing with pigment and binder."
        },
        {
          "title": "Hand Block Printing: Carving, Pasting and Striking",
          "content": "A printing block is cut from hard, close-grained timber, face commonly 12 to 20 cm square, with the design left in relief standing 2 to 3 mm proud so only the drawn lines touch the cloth. Cutting is done with a fine knife and a thin saw for the isolated dots, and the surface is planed dead flat; a high spot prints heavy while low lines print faint. The colour table is a tray covered with felt or layered cloth over which the paste is rolled out to an even film, the way a printer inks a plate. Working method is a rhythm: pin the damp-dry cotton flat on a padded table with a guide line along the top, lay the block on the table with the design down and rock it so all lines take paste, then place it on the cloth, press evenly with the heel of the hand or tap with a light mallet and lift straight up without any slide. Rows advance against a T-square or ruled line, and small guide nails driven into the block edge register the next impression against the last. Paste is charged again after a handful of strikes, and the length is dried, then steamed or ironed to fix, washed and pressed before appraisal.",
          "bulletPoints": [
            "Relief face cut 2 to 3 mm proud, planed flat so all lines print together.",
            "Paste is rolled out on a felt-covered colour table and charged thinly.",
            "Pin the cloth flat on padding; a wrinkle prints as a blank band.",
            "Strike squarely and lift vertically; sliding smears every line.",
            "Guide nails or ruled lines keep the drop constant from row to row."
          ],
          "keyTakeaway": "Flat relief, thin charge and a vertical lift are what make a hand-block repeat look machine-clean.",
          "realWorldExample": "An Accra craft studio printing cushion panels strikes a 15 cm floral block in twelve rows, recharging on the colour table each third row, then dries the panels on racks before the binder is heat-set with an iron."
        },
        {
          "title": "Screen Printing: Mesh, Emulsion and Squeegee Control",
          "content": "Screen printing puts a photographic stencil on a stretched mesh, so every choice begins with the mesh count, expressed in threads per centimetre. Open mesh such as 43T or 55T lays heavy pigment, glue and thick blocks of colour; fine mesh such as 120T holds thin rules, small dots and halftone detail but will not push thick paste. In a room shaded from strong light, emulsion is coated with a scoop coater in one long pull on each face and dried face down so any dust settles on the outside rather than into the stencil. The artwork, printed solid black on tracing paper, is taped face to face with the emulsion side towards the art, exposed to strong light for the recommended time, then washed with a fine spray, and the unexposed emulsion under the black areas rinses away leaving open mesh where colour must pass. Pinholes are blocked out with tape, the screen is dried and mounted on the printing table. Cloth is pinned flat, the screen is held about 5 mm above it, a light flood pass fills the mesh, and one firm print pass with a squeegee of roughly 60 to 70 Shore A held at 45 to 75 degrees pushes paste through. One colour means one screen and one drying stage, so a three-colour run is three prints plus flashes.",
          "bulletPoints": [
            "Mesh count is threads per centimetre: open mesh for heavy paste, fine mesh for detail.",
            "Coat with a scoop coater, dry face down in shade and keep dust off the stencil.",
            "Expose with the emulsion side touching solid-black artwork, then wash out.",
            "Block every pinhole; it repeats a stray dot on the whole run.",
            "Flood pass then one print pass at 45 to 75 degrees; hard pressure blurs the motif."
          ],
          "keyTakeaway": "Screen printing is a sequence of controlled stages: mesh choice, clean stencil, flood stroke, one measured print stroke.",
          "realWorldExample": "A Kumasi student enterprise printing graduation stoles uses a 43T screen for the broad school crest, a 120T screen for the thin gold dates, and a fan to flash-dry between the three colours so the run does not smear."
        },
        {
          "title": "Repeats, Colour Separation, Registration and Roller Printing",
          "content": "A repeat is built from a unit, and the unit is called the report of the design, measured across and down; a typical print unit is about 64 cm across the width with a drop of 30 to 40 cm. Anything cut at the left edge must be completed at the right edge, and anything cut at the top must reappear at the bottom, otherwise the join announces itself in the length. In a straight or block repeat the units stack exactly, so motifs line up in visible columns and rows, a bold arrangement that suits geometric motifs but can look like a grid and shows every placement error. In a half-drop repeat the adjacent vertical column shifts down by half the vertical repeat, in the manner of brickwork, which disguises the join, gives a softer surface and is the common structure of market print cloth; a quarter-drop shifts by a quarter. Before printing, the finished drawing is separated so each colour becomes its own unit, one screen or one block per colour, with a key line unit carrying the outline; the print order runs from large pale masses to small dark details so overprinting stays readable. Registration marks, crosshairs or pins at the selvedge, are laid with the first colour and every later screen is aligned to them, because two colours out of register is the fault a buyer sees instantly. On an industrial scale, roller printing engraves each colour on a polished copper roller, one roller per colour, sometimes about twenty rollers in sequence pressing against a common blanket cylinder, then the cloth is steamed, washed off and finished, which is how factories at Tema turn a paper design into thousands of metres of named wax print.",
          "bulletPoints": [
            "Report or repeat unit must join at all four edges with no visible break.",
            "Straight repeat stacks exact columns; half-drop shifts by half the vertical repeat.",
            "Colour separation gives one screen or block per colour plus a key line unit.",
            "Register with crosshairs or pins and check every colour against them.",
            "Roller printing engraves one colour per copper roller for high-speed production."
          ],
          "keyTakeaway": "A design only prints well when the unit joins seamlessly and every colour is separated and registered to the same marks.",
          "realWorldExample": "A designer submitting a motif to a Tema printer delivers a 64 cm half-drop unit drawn to join at all edges, with four separated colour layers and crosshair register marks, because an unjoined unit is sent straight back."
        }
      ],
      "commonMistakes": [
        "Printing with paste that is too thin, so colour creeps under the stencil edges and fine lines close up; thicken with starch or a proper binder and test on scrap before the run.",
        "Leaving a loaded screen or block standing while paste dries, which blocks the mesh or cakes the relief face and ruins the tool for fine work; wash the screen, squeegee and colour table as soon as the run ends.",
        "Skipping pinhole repair on a fresh stencil; a single pinhole throws a stray dot on every repeat of a long run and cannot be corrected after fixing.",
        "Drawing a repeat unit whose edge shapes do not complete on the opposite edge, so the printed length shows a vertical line of broken motifs; check by tiling nine copies of the unit before printing.",
        "Pressing hard on the squeegee to force colour, which blurs the design, tilts the cloth and wears the blade edge; use one firm measured pass and print the screen twice if depth is weak.",
        "Using blunt carving tools or a dull blade when cutting block relief, which tears the timber and leaves ragged lines that print as fuzz; keep knives sharp and cut away from the holding hand."
      ],
      "wassceExamTips": [
        "Paper 1 asks you to name methods. Write direct, resist and discharge with one clause each on what happens to the colour, and be ready to define report, drop, registration and half-drop as printing terms.",
        "Paper 2 is the planning paper: submit the repeat unit drawn to scale with its measurements, the separated colour layers on separate sheets, the register marks shown, plus the mesh number and the print order you intend to use.",
        "Paper 3 practical marks handling of materials and finish, so keep a test strip of each colour pinned to the board showing clean edges and correct register; examiners give quality marks for evidence, not claims.",
        "Time management across practical hours: cut or block the largest pale colour first, let it flash-dry, then print the smaller dark details; a run of four colours with drying stages takes far longer than one, so write the drying minutes into your plan.",
        "In appraisal, name faults precisely, bleeding under the stencil, out-of-register colour, unjoined repeat, pinhole dots, and give the cause and the remedy; vague words like it looks untidy earn little."
      ],
      "summaryChecklist": [
        "Can I explain direct, resist and discharge printing and choose a method for a given design?",
        "Can I carve, charge and strike a block to give a straight repeat with hard edges?",
        "Can I coat, expose, wash out and print a screen using the right mesh and squeegee angle?",
        "Can I separate a design into colour units and register them to crosshair marks?",
        "Can I draw a straight and a half-drop repeat unit that joins without a visible seam?"
      ]
    },
    "examples": [
      {
        "id": "ex-fabric-printing-1",
        "title": "Three-Colour Half-Drop Screen Print on Cotton",
        "problem": "Print a two-metre cotton length in a half-drop repeat with a yellow ground shape, a red motif and a black key line, using screens and paste. Plan the stages and the order.",
        "stepByStepSolution": [
          "Step 1 (M1): Draw the repeat unit to the chosen report, completing every shape cut at the left and top edges on the right and bottom edges, then trace nine tiled copies to prove the unit joins.",
          "Step 2 (M1): Separate the drawing into three units, yellow shape, red motif and black key line, and trace each onto solid-black film for exposure.",
          "Step 3 (M1): Coat a 55T screen thinly with emulsion using a scoop coater, dry it face down in shade, expose each artwork with the emulsion side touching the film, wash out the open mesh and block all pinholes.",
          "Step 4 (M1): Pin the cloth flat on the table and print the yellow unit first with a flood pass and one squeegee pass at about 60 degrees, laying crosshair register marks at both selvedges.",
          "Step 5 (M1): Air or flash-dry the yellow, then print the red unit on the half-drop shift by aligning its register marks to the printed crosses, dry again and print the black key line last.",
          "Step 6 (M1): Dry the length fully, fix with steam or a hot iron through a cloth according to the paste instructions, then wash off and shade-dry.",
          "Step 7 (A1): Wash the screens and squeegee immediately, then appraise the length: black key line sitting inside the red motif throughout, no bleeding at stencil edges, repeat unit joining invisibly along two metres."
        ],
        "keyTakeaway": "Order of printing, dried stages between colours and register marks checked against crosses are what keep a three-colour half-drop clean."
      },
      {
        "id": "ex-fabric-printing-2",
        "title": "Block-Printing a Straight-Repeat Runner",
        "problem": "A student must print a 15 cm by 150 cm cotton runner with a carved 15 cm floral block in one indigo pigment, using a straight repeat and no guide machine.",
        "stepByStepSolution": [
          "Step 1 (M1): Check the block face is dead flat by inking and striking it on paper; sand high spots that print dark until every line reads evenly.",
          "Step 2 (M1): Roll thickened indigo pigment to an even film on the felt-covered colour table and charge the block by rocking it face down on the film.",
          "Step 3 (M1): Pin the runner flat on a padded table and rule a straight guide line along the top edge, marking the first placement point.",
          "Step 4 (M1): Place the block against the guide line, press evenly with the heel of the hand and tap lightly with a mallet, then lift straight up without sliding.",
          "Step 5 (M1): Advance using the guide nails on the block edge against the previous impression, recharging the block every three strikes, and keep the drop measured at 15 cm throughout.",
          "Step 6 (M1): Dry the runner, fix the pigment according to the binder instructions, then wash and press once fully dry.",
          "Step 7 (A1): Appraise with a ruler: motif rows square to the selvedge, constant spacing, crisp edges with no bleeding, and even colour depth from end to end, re-charging being the reason."
        ],
        "keyTakeaway": "A guide line plus guide nails plus an even charge turn a single block into a disciplined straight repeat."
      }
    ],
    "quiz": {
      "id": "quiz-fabric-printing",
      "topicId": "shs2-tx-t2-fabric-printing-repeat-design",
      "title": "Fabric Printing Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-fabric-printing-1",
          "quizId": "quiz-fabric-printing",
          "questionText": "A photographic stencil on a printing screen is produced by",
          "optionA": "painting the design onto the mesh with a brush and letting it harden",
          "optionB": "stretching the mesh tighter so the open areas close up",
          "optionC": "coating the mesh with light-sensitive emulsion, exposing the artwork to light and washing out the unexposed area",
          "optionD": "ironing transfer paper onto the mesh before printing",
          "correctOption": "C",
          "subConcept": "Screen stencil making",
          "explanation": "Emulsion hardens wherever light reaches it, and the shaded area under solid black artwork stays soluble and washes out, leaving open mesh only where colour must pass. Brushed paint, mesh tension and ironed transfer paper do not create a durable wash-out stencil.",
          "remediationTip": "Re-draw the stencil sequence as a flow diagram: coat, dry face down, expose, wash out, block pinholes, dry, print."
        },
        {
          "id": "q-fabric-printing-2",
          "quizId": "quiz-fabric-printing",
          "questionText": "A half-drop repeat is chosen mainly because it",
          "optionA": "reduces the number of screens needed for the design",
          "optionB": "shifts the adjacent vertical column by half the vertical repeat and so breaks the visible grid of columns",
          "optionC": "allows discharge paste to work more deeply",
          "optionD": "makes the cloth faster to print on a roller machine",
          "correctOption": "B",
          "subConcept": "Repeat construction",
          "explanation": "Like brickwork, the half-drop offset hides the join and softens the surface that a straight repeat shows as rigid columns. It does not change the number of screens, deepen discharge paste or increase machine speed.",
          "remediationTip": "Sketch two nine-tile grids of the same motif, one straight and one half-drop, and circle the column effect in each."
        },
        {
          "id": "q-fabric-printing-3",
          "quizId": "quiz-fabric-printing",
          "questionText": "In discharge printing, the pale motif is produced by",
          "optionA": "a paste containing a reducing agent that destroys the ground dye in the printed areas",
          "optionB": "wax printed first and then a dye bath applied over it",
          "optionC": "thickened dye printed directly onto bleached white cloth",
          "optionD": "bleaching the whole cloth and reprinting the ground afterwards",
          "correctOption": "A",
          "subConcept": "Discharge versus resist and direct",
          "explanation": "Discharge printing removes colour already present in dyed ground cloth, optionally leaving pigment behind so the motif carries a second colour. Option B describes resist printing, option C describes direct printing, and whole-cloth bleaching is not a printing method.",
          "remediationTip": "Make a table of what happens to the colour in direct, resist and discharge printing, adding one cloth example per row."
        },
        {
          "id": "q-fabric-printing-4",
          "quizId": "quiz-fabric-printing",
          "questionText": "On a printed length the blue outline sits consistently 3 mm to the right of the yellow it should enclose. The fault is named",
          "optionA": "bad thickening of the paste",
          "optionB": "pinholing of the stencil",
          "optionC": "creeping of the block relief",
          "optionD": "faulty registration of the colours",
          "correctOption": "D",
          "subConcept": "Registration faults",
          "explanation": "A steady sideways displacement of one colour against another is a registration error, caused by the screen not being aligned to the marks or the cloth moving on the table. Thin paste gives bleeding, pinholes give stray dots, and relief creep is a block fault, none of which places a whole colour off by an even distance.",
          "remediationTip": "Print a two-colour test patch with crosshair marks and move only the cloth, then only the screen, to see how register error is created."
        },
        {
          "id": "q-fabric-printing-5",
          "quizId": "quiz-fabric-printing",
          "questionText": "Which statement about mesh count in screen printing is correct?",
          "optionA": "Count is the number of colours the mesh can hold at once",
          "optionB": "A fine mesh such as 120T is best for thick glue and heavy blocks of colour",
          "optionC": "Count is threads per centimetre, so an open mesh such as 43T or 55T lays heavy paste while a fine 120T mesh holds thin lines",
          "optionD": "Mesh count only affects the price of the screen, not the print",
          "correctOption": "C",
          "subConcept": "Mesh selection",
          "explanation": "The T figure is threads per centimetre; open mesh lets thick paste through, fine mesh restricts it but prints delicate line work. Reversing the pairing, which option B does, blocks the screen, and mesh count certainly governs the print, not merely the cost.",
          "remediationTip": "Print the same artwork on 43T and 120T screens and compare the thinnest line each one reproduces cleanly."
        }
      ]
    }
  },
  {
    "id": "shs2-tx-t2-garment-construction-pattern-drafting",
    "subjectId": "textiles",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 4,
    "title": "Pattern Drafting and Garment Construction",
    "description": "Taking accurate body measurements, drafting a close-fitting bodice and skirt block (sloper), placing darts and ease, adding seam and hem allowances, cutting truly on the grain, assembling in order, correcting the fit and finishing with fastenings.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Measure over a thin layer of clothing, tie a cord at the natural waist and keep the tape snug but never tight; record every figure in centimetres and check each one twice before writing it on the order sheet.\n• The core set for a female block is bust, under-bust, natural waist, hip (about 20 to 23 cm below the waist), back-waist length, across-back, shoulder length, armhole depth and front waist-to-floor for a skirt.\n• A block (also called a sloper or basic pattern) is a plain, close-fitting paper pattern with only the minimum wearing ease added, about 4 cm at the bust and 2 cm at the waist; it is the parent from which all styles are modified.\n• Wearing ease is the comfortable room built into a block; style ease is the extra fullness a designer adds for a loose or fitted look; negative ease means the pattern is cut smaller than the body and relies on stretch.\n• A dart folds flat fabric over a curved body: the bust dart points toward the apex but stops 2.5 to 4 cm short of it so no sharp nipple-like peak shows through the garment.\n• Standard allowances: 1.5 cm for plain seams and underarms, 1 cm at the neck and zip, a 3 to 4 cm turn-up for a skirt hem, and never cut a hem thinner than twice its finished depth.\n• The lengthwise (warp) grain runs parallel to the selvedge; the crossgrain runs at right angles; a garment cut truly on the grain hangs straight, while cloth cut off the grain twists at the side seam after the first wash.\n• Pattern layout: place the longest pieces against the selvedge first, keep every grainline arrow parallel to the selvedge, and for napped cloth (velvet, fleece, pile and printed kente strips) lay all pieces pointing the same direction.\n• Assembly order that prevents re-opening work: press and stitch the darts, join the shoulder seams, close the side and underarm seams, set in the sleeves, finish the neck and fastening, then lay and stitch the hem last.\n• Raw edges are finished to stop fraying by overcasting, machine zigzag, pinking with shears, or wrapping in bias binding; an unfinished seam is a fault in a practical mark.\n• Fastenings chosen to suit the fabric: invisible or lapped zip on fine cloth, centred zip on casual cotton, hooks and eyes at the neck, flat or shank buttons, press studs on children and school uniforms.\n• Reading a fit: a horizontal drag line means the garment is too tight across that area, a soft vertical fold means it is too full, a shoulder seam slipping toward the back signals a rounded back, and a pulling front hem signals a high bust.\n• Transfer every pattern marking to the cloth: notches, drill holes at the dart legs and balance points, the grainline and the fold line, because unmarked pieces cannot be matched at the sewing machine.\n• Always make a toile (a trial garment in cheap calico or old sheeting) and fit it on the client before cutting the real fabric; a toile correction is nearly free while a fabric correction is expensive.\n• Drafting tools: pattern paper, a 1:4 scale ruler or a metre rule, a French curve for armholes and necklines, sharp pencil, eraser, tracing wheel and pattern carbon, and a metric tape.",
    "detailedNotes": {
      "overview": "Pattern drafting turns the three-dimensional body into flat paper shapes that can be cut from cloth and sewn back into something that fits and moves. In the Ghanaian Textiles workroom this topic carries the heaviest practical marks because it links measurement, geometry and hand or machine skill in one product. A candidate who drafts a true block, cuts it on the grain and assembles it in the right order can build any style, from a school blouse to a kente-trimmed boubou, and can defend every mark on the presentation board.",
      "introduction": "Think of a block as a map of the body drawn flat. The body has curves and hollows; the cloth is flat. Drafting solves this by dividing the total measurement into quarters, adding a controlled amount of ease, and removing the surplus with darts. Every garment in the syllabus is a modified block, so time spent mastering the bodice and skirt block repays itself many times over in later topics and in the Paper 3 project.",
      "realWorldContext": "A dressmaker on Spintex Road in Accra is handed a six-yard bolt of printed cotton and GH¢ 480 to make a two-piece outfit for a naming ceremony. Before touching a single pin she ties a string at the natural waist of the client, keeps her standing tall and looks straight ahead, and records bust, waist, hip and back-waist length in the order book, because one careless figure wastes the whole length of cloth. In a Kumasi cutting room, apprentices learn to lay aso oke and kente with the warp grain running lengthwise so that the finished boubou hangs straight and the woven pattern never twists at the side seam.",
      "objectives": [
        "Take and record a full set of body measurements accurately and in the correct order",
        "Draft a close-fitting bodice and skirt block to a 1:4 scale from given body measurements",
        "Explain and place darts, wearing ease and style ease so that flat cloth fits a curved body",
        "Add correct seam and hem allowances and cut pattern pieces truly on the lengthwise grain",
        "Assemble a garment in the right order, fit it, and state the correction for a visible fault"
      ],
      "sections": [
        {
          "title": "Body Measurement: the Foundation of Every Good Fit",
          "content": "Almost every fitting complaint traced in a Ghanaian workroom begins with a bad measurement, not with bad sewing. The client should stand naturally, weight on both feet, wearing only a thin blouse, because a tape pulled over a thick sweater adds centimetres that will vanish when the finished dress is worn. A cord tied around the waist fixes the exact waistline so the waist-to-hip and front-waist-to-floor drops are measured from the same spot each time. Measure the fullest part of the bust with the tape level, then the under-bust, the natural waist, and the hip roughly twenty to twenty-three centimetres below the waist. For the length pieces, use the back-waist length from the prominent neck bone to the cord, across-back between the armholes, shoulder length from neck to shoulder point, and armhole depth measured with a straight ruler held under the arm. Write each figure twice and read it back; a figure noted as one hundred when it is ninety will show up later as a garment the client cannot button.",
          "bulletPoints": [
            "Keep the tape snug, not tight; it should lie flat without digging into the body.",
            "Always tie a waist cord so length measurements share one fixed starting line.",
            "Record bust, under-bust, waist and hip at the fullest part, not the narrow part.",
            "Measure back-waist length from the seventh cervical vertebra down to the cord.",
            "Read every figure back to the client and check it a second time before drafting."
          ],
          "keyTakeaway": "A garment can only ever fit as well as the measurements it was drafted from, so take them slowly and verify each one.",
          "realWorldExample": "A fashion student at a private design school in Tema drafts a fitted bodice for a classmate whose bust is 88 cm; she measures 88 cm twice, ties her waist cord at 68 cm, and the toile fits on the first attempt while a neighbour who guessed the hip length has to let down the whole skirt."
        },
        {
          "title": "Drafting the Bodice and Skirt Block",
          "content": "Drafting is arithmetic done with a ruler. Reduce the body measurement to a quarter front and a quarter back, add the wearing ease, and divide that total into the balance taken by the back panel and the front panel, allowing the front slightly more for the bust. Draw the guiding rectangle of the bodice using back-waist length for the depth and a quarter of the bust-plus-ease for the width; square up for the shoulder line, set the neckline and armhole points, then locate the bust apex about half the shoulder length from the centre front. The armhole is shaped with a French curve so it clears the shoulder without a sharp corner, and the shoulder seam is given a small fall to sit over the rounded shoulder. A skirt block is a simple rectangle dropped from the waist cord to the desired length, divided into front and back with a waist dart on each panel to absorb the difference between waist and hip. Keep every construction line faint and label each piece, front or back, fold or cut two, before any dart is added.",
          "bulletPoints": [
            "Use a 1:4 scale so an 88 cm bust becomes a 22 cm flat pattern width.",
            "Divide bust-plus-ease between back and front panels, giving the front a little more.",
            "Shape the armhole and neckline with a French curve, never a straight ruler.",
            "Give the shoulder seam a small fall (about 0.5 cm) to cover the rounded shoulder.",
            "Label every piece with name, quantity, fold line and grainline as you draft."
          ],
          "keyTakeaway": "A block is built from a rectangle measured by arithmetic, then shaped by curves and darts, and every line is drawn lightly and labelled.",
          "realWorldExample": "On a WASSCE Paper 2 design task a candidate is given bust 84 cm, waist 66 cm and back-waist length 40 cm; she quarters the figures, adds 4 cm bust ease, and lays out a bodice block on manila paper that the examiner can follow line by line for method marks."
        },
        {
          "title": "Ease, Darts and Cutting Truly on the Grain",
          "content": "Flat cloth only becomes a shaped garment through two devices: ease and darts. Wearing ease is the small extra allowance that lets the wearer breathe, sit and raise an arm; without it a block that equals the body measurement would be unwearable. Style ease is added deliberately when a design is meant to look loose or fitted, and knitwear for a body-hugging look uses negative ease so the stretch takes up the difference. A dart is the wedge of fullness sewn out to let the fabric lie over the bust, shoulder blade or waist hollow, and the stitched dart should run to a point but stop a few centimetres short of the apex so the shape is diffused, not peaked. When it is time to cut, the grainline is non-negotiable: the lengthwise warp runs parallel to the selvedge and gives the fabric its strength and its hang. Lay the cloth square on the table, place the longest pieces near the selvedge, and pin each pattern so its grainline arrow points exactly at the selvedge. Napped cloth such as velvet, fleece and pile, together with one-way printed and woven kente strips, must have all pieces oriented head to the same direction or the shading and the pattern will read light on one panel and dark on the next.",
          "bulletPoints": [
            "Wearing ease is functional room; style ease is design fullness; negative ease relies on stretch.",
            "A dart must end short of the bust apex so no sharp point shows on the right side.",
            "The grainline arrow must sit parallel to the selvedge before you cut.",
            "Cut with long smooth strokes and a sharp pair of dressmaker shears, never jagged snips.",
            "On napped or one-way cloth all pieces face the same direction to keep the colour even."
          ],
          "keyTakeaway": "Ease and darts turn flat cloth into a curved shape, and cutting on the true grain keeps that shape hanging straight.",
          "realWorldExample": "A seamstress in Ashaiman cuts an Ankara print whose motifs run one way; because she lays every front, back and sleeve pointing up the cloth, the flowers all face the same way on the finished dress instead of one panel looking upside down."
        },
        {
          "title": "Assembly, Fitting Corrections and Fastenings",
          "content": "Garments are assembled from the inside and the largest structures outward, so that each stage supports the next. Stitch and press the darts first, tapering to a point and tying the thread ends, then join the shoulder seams so the bodice holds its width, close the side and underarm seams, and only then set in the sleeves so the armhole is already shaped. Transfer markings matter here: notches and drill holes let the sleeve crown ease be distributed evenly rather than gathered into one lump. Try the garment on before finishing the neck and fixing the fastening, and read the fit like an examiner. A horizontal drag line across the back means the piece is too tight and needs a let-out; a soft vertical fold at the side means it is too full and needs a take-in; a shoulder seam sliding toward the back points to a rounded back needing a longer back and a shortened front shoulder; a front hem lifting off the body signals a high bust that wants a deeper dart. Finally finish raw edges by overcasting, machine zigzag or bias binding, insert the chosen zip so it lies flat, sew buttons or hooks, lay a even hem, and press each seam as it is made because a well-pressed garment reads as professionally made on the presentation board.",
          "bulletPoints": [
            "Assemble in order: darts, shoulders, side seams, sleeves, neck and fastening, hem last.",
            "Match notches and drill holes when setting in a sleeve to spread the crown ease evenly.",
            "Horizontal drag lines mean too tight; vertical folds mean too full.",
            "A slipping shoulder seam points to a rounded back needing a longer back shoulder.",
            "Finish raw edges and press every seam as you go for a professional appearance."
          ],
          "keyTakeaway": "Correct assembly order, honest reading of fit lines, and tidy finishing are what move a project from pass to distinction marks.",
          "realWorldExample": "A candidate doing her WASSCE Textiles practical makes a toile of a school blouse; the armhole cuts into the armpit, so she drops the armhole by 1.5 cm, moves the sleeve notch to match, and the final garment in real cotton fits on first try and scores full handling marks."
        }
      ],
      "commonMistakes": [
        "Cutting the pattern pieces off the grain because the selvedge was ignored; the garment then twists to one side at the seam after the first wash.",
        "Stitching a bust dart right to the apex, which throws a sharp nipple-like point onto the front of the bodice instead of a smooth curve.",
        "Sewing the hem before fitting the garment, so the side seams are corrected too late and the hem has to be unpicked and re-laid.",
        "Leaving raw seam edges unfinished on a cotton that frays, so the stitching line disintegrates along the selvedge within a few wears.",
        "Drafting with the exact body measurement and forgetting wearing ease, producing a bodice the client cannot button or raise an arm in."
      ],
      "wassceExamTips": [
        "In Paper 1 the objective and short-answer items test vocabulary: define block, ease, dart, grainline and nap in one clean sentence each; a correct one-line definition earns the mark with no drawing needed.",
        "Paper 2 (design and planning) awards method marks for a labelled flat sketch, a cutting layout showing grainline arrows, and a stated order of assembly; write the process as numbered lines so the examiner can tick each stage.",
        "Paper 3 (practical) is marked heavily on handling of materials, accuracy of the fit, and finish; keep every seam pressed open and finish raw edges, because presentation and neatness carry their own marks over hours of work.",
        "When a fitting question shows a fault line, name the fault, then give the correction in the exam wording, for example \"horizontal drag across the back: let the side seams out by 2 cm\".",
        "Show your measurement table and your toile on the board; examiners credit documented measuring and a corrected toile as evidence of method, not just a tidy final garment."
      ],
      "summaryChecklist": [
        "Can I take and verify a full set of body measurements in the correct order?",
        "Can I draft a bodice and skirt block to a 1:4 scale from given body measurements?",
        "Can I explain wearing ease, style ease and negative ease, and place darts correctly?",
        "Can I add seam and hem allowances and lay out pieces truly on the lengthwise grain?",
        "Can I assemble a garment in order, read a fit line, and state the matching correction?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-garment-block-1",
        "title": "Drafting a Bodice Block from Given Measurements",
        "problem": "Using bust 84 cm, waist 66 cm, back-waist length 40 cm and shoulder length 12 cm, draft a close-fitting front bodice block to a 1:4 scale and place a waist-level bust dart.",
        "stepByStepSolution": [
          "Step 1 (M1): Convert to the scale by dividing each measurement by 4, so bust 84 becomes 21 cm, waist 66 becomes 16.5 cm, back-waist length 40 becomes 10 cm and shoulder 12 becomes 3 cm.",
          "Step 2 (M1): Add wearing ease before quartering, 4 cm to the bust giving 88 cm, whose quarter is 22 cm at the scale, and draw the construction rectangle of width 22 divided between a smaller back panel and a fuller front panel.",
          "Step 3 (M1): Square up the top line, set the neckline point and the armhole depth, then mark the bust apex about half the scaled shoulder length in from the centre front and level with the armhole.",
          "Step 4 (M1): Draw the waist dart from the waistline up toward the apex, ending it 3 cm (scaled) short of the apex so the shape is diffused rather than peaked.",
          "Step 5 (A1): Add the seam allowances, 1.5 cm at side and armhole and 1 cm at the neck, and label the piece FRONT BODICE, CUT 1 ON FOLD, with a grainline arrow parallel to the centre front.",
          "Step 6 (A1): Check accuracy: the sum of the front and back waist darts equals the difference between scaled waist-plus-ease and the flat side widths, and every construction line is faint while only the cutting line is dark."
        ],
        "keyTakeaway": "Scale down, add ease, quarter the total, shape the dart short of the apex, then label with grainline before cutting."
      },
      {
        "id": "ex-tx-garment-fit-2",
        "title": "Diagnosing and Correcting a Skirt Fitting Fault",
        "problem": "A straight skirt toile shows a diagonal drag line running from the hip up toward the left side seam, and the hem swings out at that side. State the fault, the cause, and the correction before cutting the real fabric.",
        "stepByStepSolution": [
          "Step 1 (M1): Identify the visible fault: a diagonal pull from hip to side seam with a swinging hem is a cross-grain distortion, not a simple width problem.",
          "Step 2 (M1): Trace the cause: the front panel was cut off the lengthwise grain, so the warp no longer hangs vertical and the cloth drags diagonally to the weaker bias.",
          "Step 3 (M1): Verify the diagnosis by re-laying the flat pattern on the selvedge and checking that the grainline arrow is now truly parallel to the selvedge.",
          "Step 4 (A1): State the correction: re-cut the offending panel on the correct grain; if the hip is also tight, let the side seam out by up to 1.5 cm and re-hang the skirt to level the hem.",
          "Step 5 (A1): Confirm the accuracy of the finished result: with the panel on-grain the drag line disappears, the side seam hangs vertical, and the hem sits level all around on the body."
        ],
        "keyTakeaway": "A diagonal drag with a swinging hem is usually an off-grain cut; re-cut on the true warp, then re-hang and level."
      }
    ],
    "quiz": {
      "id": "quiz-shs2-tx-t2-garment-construction",
      "topicId": "shs2-tx-t2-garment-construction-pattern-drafting",
      "title": "Pattern Drafting and Construction Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-garment-1",
          "quizId": "quiz-shs2-tx-t2-garment-construction",
          "questionText": "Which grain of the fabric runs parallel to the selvedge and gives a garment its straight hang?",
          "optionA": "The bias, running at forty-five degrees",
          "optionB": "The lengthwise or warp grain",
          "optionC": "The crossgrain, running at right angles to the selvedge",
          "optionD": "The nap direction of the pile",
          "correctOption": "B",
          "subConcept": "Grain and Cutting",
          "explanation": "The warp (lengthwise) grain runs parallel to the selvedge and is the strongest, most stable direction, so a garment cut on it hangs straight. The crossgrain is perpendicular and the bias is at forty-five degrees; a piece cut off the true warp twists at the seam.",
          "remediationTip": "Remember one line: selvedge to selvedge along the length is the warp grain; keep the grainline arrow pointing that way before cutting."
        },
        {
          "id": "q-tx-garment-2",
          "quizId": "quiz-shs2-tx-t2-garment-construction",
          "questionText": "A bust dart should be stitched so that its point ends where?",
          "optionA": "Exactly on the bust apex",
          "optionB": "Barely past the apex, on the far side",
          "optionC": "At the armhole, not the waist",
          "optionD": "Short of the apex by about 2.5 to 4 cm",
          "correctOption": "D",
          "subConcept": "Dart Shaping",
          "explanation": "Ending the dart short of the apex diffuses the shaping into a smooth curve. A dart stitched to the apex throws a sharp nipple-like point onto the right side, which is the common error option A describes.",
          "remediationTip": "Draw the apex on the block, then stop the dart legs a couple of centimetres before it; the fullness should ease out, not peak."
        },
        {
          "id": "q-tx-garment-3",
          "quizId": "quiz-shs2-tx-t2-garment-construction",
          "questionText": "What is the correct assembly order for a simple bodice?",
          "optionA": "Darts, then shoulder seams, then side and underarm seams, then sleeves",
          "optionB": "Hem, then sleeves, then darts, then side seams",
          "optionC": "Sleeves, then hem, then shoulders, then darts",
          "optionD": "Side seams, then hem, then darts, then shoulders",
          "correctOption": "A",
          "subConcept": "Assembly Order",
          "explanation": "Structure is built inside-out and largest-first: shape the body with darts, join shoulders to fix the width, close sides and underarms, then set sleeves into the formed armhole, and lay the hem last. The other options sew the hem before the fit is settled.",
          "remediationTip": "Recite the chain: darts to shoulders to sides to sleeves to neck and zip to hem."
        },
        {
          "id": "q-tx-garment-4",
          "quizId": "quiz-shs2-tx-t2-garment-construction",
          "questionText": "On a fit check, a soft vertical fold falling at the side seam usually means the garment is what?",
          "optionA": "Too tight across the hip",
          "optionB": "Cut off the grain",
          "optionC": "Too full, with surplus width that must be taken in",
          "optionD": "Missing its shoulder fall",
          "correctOption": "C",
          "subConcept": "Reading Fit Lines",
          "explanation": "A vertical fall of extra cloth shows there is more width than the body fills, so a tuck is taken in at the seam. A horizontal drag (option A) means too tight, while an off-grain cut gives a diagonal pull, not a straight vertical fold.",
          "remediationTip": "Horizontal lines are too tight; vertical folds are too loose; diagonal lines usually mean grain or balance."
        },
        {
          "id": "q-tx-garment-5",
          "quizId": "quiz-shs2-tx-t2-garment-construction",
          "questionText": "Why is a toile made before the real fabric is cut?",
          "optionA": "To test the colour of the dye on the skin",
          "optionB": "To check the fit and correct the pattern at little cost",
          "optionC": "Because examiners forbid cutting the final cloth first",
          "optionD": "To press the selvedge flat before laying out",
          "correctOption": "B",
          "subConcept": "Fitting and Toile",
          "explanation": "A toile in cheap calico lets the maker find and fix fitting faults while correction is almost free. Option A confuses this with a fabric dye test; a toile is about shape and size, not colour.",
          "remediationTip": "Treat the toile as a trial: correct the pattern on the cheap version so the expensive cloth is cut right once."
        }
      ]
    }
  },
  {
    "id": "shs2-tx-t3-beadwork-accessories",
    "subjectId": "textiles",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 5,
    "title": "Beadwork and Textile Accessories",
    "description": "Sorting and stringing Krobo recycled-glass beads, threading and knotting, building flat even-count and loom beadwork, adding fringe and toggles, and combining applique and sequins into wearable accessories and costume jewellery for the market.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Krobo beads are made at Krobo Ntroso and nearby towns in the Eastern Region from recycled glass, bottles and jars, so no two hand-made beads are perfectly identical and the tiny variations are part of their value.\n• Powder-glass beads are ground glass mixed with a flux such as caustic soda and borax, packed into hand-carved clay moulds, fired in a furnace, then cooled slowly in warm ash (annealing) so the glass does not crack.\n• Wound or piped beads are gathered on a clay or metal rod from a molten gather in the pot and shaped over a marver; a hole is made while the glass is hot.\n• Sort finished beads into compartments by size and by colour before stringing so a necklace gradates evenly and no wrong bead breaks the run.\n• String on strong nylon or bonded polyester thread, or waxed linen for heavier beads; use a beading needle about size 10 to 12 that just passes through the hole.\n• Knotting between beads, or using small spacer knots, stops beads rubbing glass on glass and keeps a break from scattering the whole strand across the floor.\n• Flat beadwork is built in even-count or odd-count peyote, where beads pick up the pattern one row at a time; count each pick-up carefully because an off-by-one error runs diagonally through the whole band.\n• Loom beadwork sets a warp of thread on a small bead loom, passes the weft needle under the warp and over each bead in turn, then beats each row up to keep the surface tight and flat.\n• Fringe is a row of hanging beaded strands added to the lower edge of a bag or collar for movement; each strand is a looped or knotted thread strung with graduated beads.\n• A toggle is a fastening of a bar or ring passing through a loop; beaded toggles and hook-and-eye closures turn a flat band into a bracelet that can be put on and taken off.\n• Applique sews cut fabric or bead-worked shapes onto a ground fabric to build a motif; sequins are small shiny discs, usually with a central or two-hole eyelet, caught down with a single stitch.\n• Combine beadwork with plain cloth to make accessories a market stall can sell: cuffs, collars, bags, belts, headbands, anklets and costume jewellery sets.\n• Finish a piece by weaving the thread back through several rows before trimming so no knot sits exposed; an accessorised piece with loose ends loses presentation marks.\n• Safety and hygiene: a bead needle is sharp and should be tracked, loose small beads are a choking risk for toddlers, and molten glass and the furnace are handled only by trained Krobo artisans.\n• Realistic market numbers keep costing honest: count the beads used, note the thread and toggle cost, and price by materials plus time plus skill rather than guessing.",
    "detailedNotes": {
      "overview": "Beadwork links a living Ghanaian craft industry to the commercial skills a Textiles candidate must show on a presentation board. Krobo recycled-glass beads carry cultural and economic weight, so this topic is not decorative filler: it teaches material handling, accurate counting, secure stringing and the making of saleable accessories. In the workroom a neat, tightly strung band that closes with a proper toggle demonstrates exactly the control that Paper 3 rewards.",
      "introduction": "Beadwork is arithmetic dressed as ornament. Every flat band and every loom panel is a grid where each bead sits in a counted row, so the maker sorts, counts and tests before committing thread to pattern. Once the counting habit is reliable, the same hands can build a graduated necklace, a peyote cuff or a beaded bag flap, and can attach a fringe or a toggle so the piece actually functions as something worn.",
      "realWorldContext": "At Krobo Ntroso in the Eastern Region, artisans recycle broken bottles and jugs into powder-glass and wound beads that reach markets from Makola in Accra to Kumasi Kejetia, where traders sell them by the strand and the string. A SHS Textiles student buys a bag of assorted Krobo beads at the roadside stall, sorts them into colour and size groups, and turns them into a matched bracelet, collar and bag set that a boutique in Osu will stock as costume jewellery, pricing each piece by the count of beads, the thread and toggle cost and the hours of hand work.",
      "objectives": [
        "Describe how Krobo powder-glass and wound beads are made from recycled glass and annealed",
        "Sort beads by size and colour and select the correct needle and thread for stringing",
        "Build flat even-count peyote and a simple loom beadwork band to a counted pattern",
        "Attach fringe, toggles and other fastenings so a beaded accessory functions when worn",
        "Combine beadwork with applique and sequins to produce saleable accessories and costume jewellery"
      ],
      "sections": [
        {
          "title": "Krobo Beads: From Broken Glass to Finished Strand",
          "content": "Understanding the bead you work with shapes how you handle it. Krobo artisans collect bottles, jars and other coloured glass, break it into pieces and grind it to a powder, then mix the powder with a small amount of flux, historically caustic soda from washing soda and now often borax, so the particles fuse at furnace temperature. The damp mixture is pressed into hand-carved clay moulds, each mould a pair of halves with a channel for the hole, and the packed moulds are stacked and fired. The other family is the wound or pipe bead, where a gather of molten glass is drawn from the pot on the end of a clay rod and shaped, the hole held open until the bead is cool enough to handle. Because glass shrinks as it cools, both kinds are buried in a pit of warm ash to anneal, cooling slowly so internal strain does not crack them. This origin explains two studio facts: the beads are slightly irregular in bore and size, so they must be sorted, and the hole is delicate, so a bead is never forced onto too thick a needle.",
          "bulletPoints": [
            "Powder glass is mixed with a flux, moulded in clay and fired; wound glass is shaped hot on a rod.",
            "Slow cooling in warm ash (annealing) prevents cracking from thermal strain.",
            "Holes are irregular and fragile, so choose a needle that slides through without forcing.",
            "Colour comes from the original glass and added oxides, giving a wide but uneven palette.",
            "Slight size variation is normal and is a mark of the hand-made bead, not a fault."
          ],
          "keyTakeaway": "Krobo beads are recycled, fired and annealed glass with delicate irregular holes, so sort them and choose a fine needle before stringing.",
          "realWorldExample": "A class visits a Krobo workshop and watches a mould of green powder-glass beads leave the furnace and go into the ash pit; on returning to the workroom each student sorts a strand of those beads by diameter before planning a graduated bracelet."
        },
        {
          "title": "Sorting, Threading and Knotting",
          "content": "Serious beadwork begins at the sorting tray, not at the needle. Tip the mixed beads into a compartmented box and separate them first by size, so a run gradates smoothly from large centre to small ends, then by colour, so a warm or cool scheme stays intentional rather than accidental. Weigh out a working length of strong nylon or bonded polyester thread, which resists abrasion against the glass edges, or waxed linen when a heavier matte hand is wanted; a thread only slightly thinner than the bead bore pulls through cleanly and knots firmly. Condition the thread with a little beeswax to stop tangling, thread a beading needle in the range of size 10 to 12, and pick up beads from the sorted tray in counted groups. For anything worn at the neck or wrist, a knot tied in the thread between each bead keeps the strand from collapsing if the thread later snaps, and prevents the beads clinking glass on glass, which both dulls the shine and risks chipping the bore. Finish by passing the needle back through several beads before a snug knot, then trim, so no raw end or bare knot shows on the presentation board.",
          "bulletPoints": [
            "Sort by size first for gradation, then by colour for an intentional scheme.",
            "Nylon or bonded polyester resists the abrasive cut edges of glass beads.",
            "A knot between beads stops scattering if the thread breaks and reduces clinking.",
            "Back through several beads and trim so no knot or raw end is exposed.",
            "Count pick-ups against the pattern to keep the run of a graduated strand even."
          ],
          "keyTakeaway": "Sort carefully, use strong thread knotted between beads, and finish invisibly so the strand is secure and neat.",
          "realWorldExample": "A market trader in Ho asks for a matched set of six graduated bracelets; the student pre-sorts all the beads into size and colour trays once, then stringing the set becomes fast and every bracelet reads the same."
        },
        {
          "title": "Flat Peyote and Loom Beadwork",
          "content": "Two counted structures produce most flat bead bands. Even-count peyote (also called tubular or flat stitch) starts from a straight picked-up row and, from the second row on, each new bead is sewn between two beads of the previous row, so the surface climbs like offset brickwork and locks tight; odd-count peyote turns a corner differently and is used when the band must be worked in the round or shaped. Accuracy is a counting discipline: pick up one fewer or one more bead and the error marches diagonally through the whole panel. Loom beadwork is faster for a long straight band of width. A warp of strong thread is stretched on a small bead loom, the bead needle passes under the warp and down through the hollow of each bead placed in a row, a second pass over the warp locks the beads, and the shed is beaten up so the weft sits tight against the last row. Both techniques demand a graphed pattern read square by square and even tension, because a loose row shows gaps while an over-tight row buckles the band and can crack a bead.",
          "bulletPoints": [
            "Even-count peyote sews each new bead between two of the row before, like offset bricks.",
            "A single mis-picked bead travels diagonally through the whole panel.",
            "On the loom, pass under the warp, through the bead, over the warp, then beat up.",
            "Graph the pattern and count one square per bead to keep the motif aligned.",
            "Even tension prevents gaps (too loose) and buckling or cracked beads (too tight)."
          ],
          "keyTakeaway": "Flat beadwork is counted geometry; peyote and loom both succeed on exact pick-ups and steady tension.",
          "realWorldExample": "For a cuff design a student graphs a geometric band recalling kente strips, then works it in even-count peyote with alternating rows of red and black Krobo beads so the finished cuff echoes the warp stripes of a hand-woven cloth."
        },
        {
          "title": "Fringe, Fastenings and Mixed Surface Ornament",
          "content": "An accessory must close and move, and that is where fringe and toggles earn their place. Fringe is a line of hanging strands worked along a lower edge, each strand a looped or knotted thread carrying graduated beads that catch the light as the wearer moves, softening a stiff beaded flap on a bag or a collar. To make the band wearable, attach a toggle fastening, a bar or ring that slips through a beaded loop, or a hidden hook and eye, so the piece can be opened and closed without straining the beadwork. Plain beadwork is often combined with cloth ornament: applique cuts worked shapes from fabric or a bead-embroidered motif and sews them onto a ground fabric with a neat buttonhole or slip-stitch edge, while sequins, small reflective discs with a central or two-hole eyelet, are caught down singly to add sparkle across a collar or bag panel. The Ghanaian designer mixes these freely with printed cotton, so a Krobo-beaded border on an Ankara puff bag becomes a marketable accessory. Cost each piece honestly by counting beads and clocking hours, then price materials plus time plus skill so a market stall can actually sell it.",
          "bulletPoints": [
            "Fringe strands hang from a lower edge and add movement and light to a stiff piece.",
            "A toggle or hook-and-eye lets the band open and close without pulling the beadwork.",
            "Applique sews a prepared motif onto a ground fabric with a clean finished edge.",
            "Sequins are caught down singly for sparkle without weighing the fabric.",
            "Price by counted beads plus thread and toggle plus working hours, not by guesswork."
          ],
          "keyTakeaway": "Fringe, toggles, applique and sequins turn a counted bead panel into a wearable, saleable accessory.",
          "realWorldExample": "A student makes a puff bag in Ankara cotton, edges the flap with a row of single sequins, sews a Krobo-beaded applique panel to the front, and closes it with a beaded toggle loop, then writes a cost sheet that supports a selling price of GH¢ 60."
        }
      ],
      "commonMistakes": [
        "Stringing beads straight from the mixed bag without sorting, so a graduation jumps and a colour scheme clashes instead of running evenly.",
        "Forcing a thick needle through a delicate Krobo bead bore, cracking the hole and losing beads mid-strand.",
        "Leaving out the knot between beads, so one worn thread snaps and the whole necklace scatters across the floor.",
        "Working a loom or peyote band with uneven tension, giving gaps where it is slack and a buckle or cracked bead where it is pulled too tight.",
        "Finishing with a bare knot and long tail on the reverse, which shows through, snags on clothing and costs presentation marks."
      ],
      "wassceExamTips": [
        "Paper 1 short answers ask you to name bead types and the making steps, so memorise the sequence crushing, mixing with flux, moulding or winding, firing, then annealing in warm ash.",
        "Paper 2 planning rewards a graphed bead pattern with one square per bead, a colour key and a stated technique (peyote or loom), each of which the examiner can tick for method.",
        "Paper 3 practical marks handling and finish: show a pre-sorted bead tray, knotted stringing and an invisible reverse finish, because tidy beadwork is judged on the back as much as the front.",
        "For an accessory question, name the fastening you used, a toggle, hook and eye or beaded loop, and demonstrate that the piece opens and closes without straining the beadwork.",
        "Attach your cost sheet to the board, counting beads used, thread, toggle and working hours, since a defensible price supports the craft-business component of the mark."
      ],
      "summaryChecklist": [
        "Can I explain how Krobo powder-glass and wound beads are made and why they are annealed?",
        "Can I sort beads by size and colour and choose the correct needle and thread for stringing?",
        "Can I build a counted flat peyote band and a simple loom beadwork strip to a graphed pattern?",
        "Can I add fringe and a working toggle or hook fastening to a beaded accessory?",
        "Can I combine beadwork with applique and sequins and price the finished piece?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-beadwork-1",
        "title": "Stringing a Graduated Krobo Bead Necklace",
        "problem": "From a mixed bag of Krobo glass beads, produce a graduated necklace with a centre pair of 14 mm beads tapering to 6 mm beads at the clasp, knotted between each bead and closed with a toggle.",
        "stepByStepSolution": [
          "Step 1 (M1): Empty the mixed beads into a compartmented tray and sort into piles by diameter (14, 12, 10, 8 and 6 mm) and then by colour, keeping one intentional scheme.",
          "Step 2 (M1): Cut a working length of bonded nylon thread, condition it lightly with beeswax, and thread a size 12 beading needle that passes the 6 mm beads without forcing.",
          "Step 3 (M1): Pick up the centre 14 mm pair, then work symmetrically outward, 12 mm, 10 mm, 8 mm and 6 mm on each side, tying a surgeon knot in the thread between every bead.",
          "Step 4 (M1): Leave about 4 cm of thread free at each end, then build a beaded toggle loop on one side and secure the bar on the other over a final knot.",
          "Step 5 (A1): Weave the needle back through three or four beads on the reverse before trimming, so the knot is buried and no raw thread shows.",
          "Step 6 (A1): Check the finished strand lies flat, the gradation matches left to right, the beads do not clink glass on glass, and the toggle opens and closes without pulling."
        ],
        "keyTakeaway": "Sort, choose a fine needle, knot between every bead, and finish invisibly so a graduated strand is secure and balanced."
      },
      {
        "id": "ex-tx-beadwork-2",
        "title": "Working a Counted Loom Beadwork Cuff",
        "problem": "Using a graphed two-colour geometric motif, set up a bead loom and work a straight cuff band about 20 rows deep, finishing it with a beaded toggle.",
        "stepByStepSolution": [
          "Step 1 (M1): Read the graph as one square per bead, mark the warp count from the widest row, and stretch an even warp of strong thread on the loom with tension screws wound to hold.",
          "Step 2 (M1): Thread the needle with weft and lay the first row of beads in pattern order on top of the warp, needle passing under the warp and then down through each bead hollow.",
          "Step 3 (M1): Make the locking second pass back over the warp and through the beads in reverse, then beat each row up against the last before starting the next.",
          "Step 4 (M1): Continue row by row, re-reading the graph each turn, until the band reaches 20 rows and the motif steps correctly across the width.",
          "Step 5 (A1): Remove the band from the loom, keep the warp tails, and work a beaded toggle bar and loop from the spare threads so the cuff fastens.",
          "Step 6 (A1): Assess accuracy: the surface is flat with no gaps from slack weft, no bead cracked from over-tension, and the colour blocks match the graphed pattern edge to edge."
        ],
        "keyTakeaway": "Loom beadwork is counted weft under-and-over the warp, beaten tight each row, with the toggle worked from the warp tails."
      }
    ],
    "quiz": {
      "id": "quiz-shs2-tx-t3-beadwork-accessories",
      "topicId": "shs2-tx-t3-beadwork-accessories",
      "title": "Beadwork and Accessories Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-bead-1",
          "quizId": "quiz-shs2-tx-t3-beadwork-accessories",
          "questionText": "Why are freshly fired Krobo glass beads buried in a pit of warm ash to cool?",
          "optionA": "To paint the surface colour onto the hot glass",
          "optionB": "To soften them so they can be re-moulded",
          "optionC": "To anneal them, cooling slowly so internal strain does not crack the glass",
          "optionD": "To burn off the clay from the mould",
          "correctOption": "C",
          "subConcept": "Krobo Bead Making",
          "explanation": "Slow cooling in warm ash is annealing, which releases internal stress as the glass sets and prevents cracking. It is not a decoration or re-moulding step; the colour is already in the ground glass and flux mixture.",
          "remediationTip": "Link cooling rate to glass: fast cooling traps strain and cracks the bead, so artisans cool them slowly in ash."
        },
        {
          "id": "q-tx-bead-2",
          "quizId": "quiz-shs2-tx-t3-beadwork-accessories",
          "questionText": "What is the main reason for tying a small knot in the thread between each bead on a necklace?",
          "optionA": "It keeps beads apart so they do not clink and stops the whole strand scattering if the thread breaks",
          "optionB": "It makes the necklace heavier so it hangs better",
          "optionC": "It hides the colour of the thread",
          "optionD": "It tightens each bead hole so the needle will not fit",
          "correctOption": "A",
          "subConcept": "Threading and Knotting",
          "explanation": "A knot between beads spaces them so glass does not grind on glass and acts as a safety stop, holding the rest if the thread snaps. Knots do not change weight or hide thread colour, and they must not be forced through the bore.",
          "remediationTip": "Think of the knot as both a spacer and a back-up stop; that is why fine strands and graduation both use them."
        },
        {
          "id": "q-tx-bead-3",
          "quizId": "quiz-shs2-tx-t3-beadwork-accessories",
          "questionText": "In even-count flat peyote, each new bead in a working row is sewn where?",
          "optionA": "Beside a bead in the same row",
          "optionB": "Under the loom warp",
          "optionC": "Through the centre of the bead below it",
          "optionD": "Between two beads of the previous row",
          "correctOption": "D",
          "subConcept": "Flat Peyote Structure",
          "explanation": "Even-count peyote nests each new bead between two beads of the last row, giving an offset brick lock. Sewing beside a bead or through the one below would not build the interlocked band; passing under the warp describes loom work, not hand peyote.",
          "remediationTip": "Picture offset bricks: row two beads sit in the gaps of row one, so count pick-ups to keep the offset exact."
        },
        {
          "id": "q-tx-bead-4",
          "quizId": "quiz-shs2-tx-t3-beadwork-accessories",
          "questionText": "A student forces a thick beading needle through a Krobo bead. What is the most likely result?",
          "optionA": "The bead hole enlarges neatly for future stringing",
          "optionB": "The delicate fired bore cracks and the bead is lost",
          "optionC": "The bead colour brightens",
          "optionD": "The thread becomes waxed automatically",
          "correctOption": "B",
          "subConcept": "Material Handling",
          "explanation": "Krobo bores are irregular and fragile, so forcing an oversized needle chips or cracks the bead. A neat enlargement, brighter colour and self-waxing thread are not real effects of forcing a needle.",
          "remediationTip": "Always match the needle to the smallest bead hole; if it will not slide freely, change the needle, not the bead."
        },
        {
          "id": "q-tx-bead-5",
          "quizId": "quiz-shs2-tx-t3-beadwork-accessories",
          "questionText": "Which fastening turns a flat beaded band into a bracelet that can be opened and closed?",
          "optionA": "A drawn-thread hem",
          "optionB": "A row of couching stitches",
          "optionC": "A satin-stitch border",
          "optionD": "A toggle bar passing through a beaded loop",
          "correctOption": "D",
          "subConcept": "Fastenings",
          "explanation": "A toggle is a bar or ring that slips through a loop, letting the wearer open and close the bracelet without straining the beadwork. The other options are ornament or seam techniques that do not function as a removable closure.",
          "remediationTip": "Separate ornament from closure: fringe, applique and sequins decorate, while a toggle or hook-and-eye actually fastens."
        }
      ]
    }
  },
  {
    "id": "shs3-tx-t1-embroidery-stitches",
    "subjectId": "textiles",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Embroidery: Stitches and Surface Ornament",
    "description": "Transferring a design, holding correct hoop tension, choosing thread and fabric, and working outline, stem, chain, satin, fly, French knot and couching, plus drawn-thread, cutwork and blackwork for surface ornament.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Transfer the design by one of four reliable methods: tracing with a water-soluble pen or hard pencil, a tracing wheel and pattern carbon, prick-and-pounce with a powder-filled bag, or an iron-on transfer; the line must be faint enough to be stitched over, not so dark it shows through.\n• Hoop tension is the hidden skill: the fabric is clamped drum-tight in an embroidery hoop and the screw tightened until a tap sounds like a table top, because slack cloth puckers the stitches and over-tight cloth distorts the weave.\n• Work with the design right way up and, where possible, with the pattern line under the needle so the shape is being created rather than traced back over.\n• Thread choice matters: stranded cotton (mouline) separates into six fine strands so the worker takes one to six for the coverage wanted; pearl cotton, crewel wool, silk and metallic threads each give a different surface.\n• Needles must suit the thread: a sharp embroidery needle with a long eye in sizes 5 to 10 carries stranded cotton; a blunt tapestry needle is used for counted work on even-weave aida and linen.\n• Outline stitch is worked left to right with the thread kept below the pointing needle, giving a smooth rope; stem stitch is worked right to left with the thread above the needle, giving a thicker twisted cord.\n• Chain stitch loops each stitch through the previous one to build an open linked line, useful for borders and for filling with a detached chain (lazy daisy) leaf.\n• Satin stitch is a series of parallel straight stitches packed close so the ground is fully covered with a glossy sheen; a long satin stitch sags, so keep the covered width to about 1.5 cm or split it.\n• Fly stitch forms a detached Y or V, worked over a guide thread and anchored with a slip stitch, ideal for leaves, grass and the twigs of a Ghanaian tree motif.\n• A French knot is made by bringing the needle up, wrapping the thread once or twice around it, then re-entering close to the exit point with the thread held taut; loose tension gives a knot that unravels into a straight stitch.\n• Couching lays a heavier or metallic decorative thread on the surface and fastens it down with small stitches of a fine thread, so a thread too thick to pass through the cloth can still decorate it.\n• Drawn-thread work extracts a set number of warp and weft threads from an even weave and bundles the remaining threads into needlewheels or a lattice, framing a panel with openwork.\n• Cutwork removes shapes of ground fabric and works a buttonhole stitch around the raw edges to keep the aperture from raveling, building an inserted openwork pattern.\n• Blackwork is counted double running (reversed Holbein) stitch in black thread on white linen, showing the same even stitch on both faces so no floats hang on the back.\n• Finish by removing the hoop, pressing face down on a towel so the stitches keep their relief, squaring the fabric back on the grain, and mounting or washing off any transfer marks.",
    "detailedNotes": {
      "overview": "Embroidery is the controlled decoration of cloth with needle and thread, and in the SHS 3 workroom it moves from learning stitches to composing an ornament that carries meaning and finish. The topic rewards planning: a clean transferred design, true hoop tension, matched thread and needle, and a deliberate mix of line, filling and openwork stitches. On the WASSCE board a piece that reads as one composition rather than a random sampler, with even tension and a neat reverse, collects the creativity and handling marks that separate a distinction from a pass.",
      "introduction": "Every embroidery stitch is a small decision repeated: where the needle goes in, where it comes out, and whether the working thread lies above or below the pointing needle. Learn that grammar and the stitches follow. Outline, stem, chain, satin, fly and the French knot cover line and filling; couching lets an un-sewable thread decorate; drawn-thread, cutwork and blackwork turn the fabric itself into the pattern. Set each into a transferred design on hooped cloth and ornament becomes structure.",
      "realWorldContext": "Embroidery in Ghana runs from the fine cross-stitch and blackwork panels of a church albe sewn in a Kumasi workroom to the ornamental borders drawn on smocks woven at Tamale, where a stylised fly-stitch vine and French-knot flower mark the maker. A SHS 3 student preparing the Paper 3 project transfers an adinkra-inspired motif with a tracing wheel and carbon onto hooped calico, works the border in stem stitch, fills petals with satin stitch, and dots the centre with French knots, then mounts the panel on a presentation board beside a fabric sample so the examiner can read both the design intent and the tension of every row.",
      "objectives": [
        "Transfer an embroidery design accurately by tracing, pounce or iron-on methods",
        "Set up an embroidery hoop with correct drum-tight tension and read the faults of slack or over-tight cloth",
        "Select suitable thread and needle for a chosen stitch and fabric",
        "Work outline, stem, chain, satin, fly, French knot and couching to an even, controlled standard",
        "Produce drawn-thread, cutwork and blackwork ornament and appraise a finished panel"
      ],
      "sections": [
        {
          "title": "Transfer, Hoop Tension and Materials",
          "content": "A good panel begins before the first stitch, with a faithful transfer and a correctly tensioned hoop. Tracing with a water-soluble pen or a hard pencil copies the design through the lines; a tracing wheel over pattern carbon prints a dotted line best suited to sturdy cloth; prick-and-pounce, where the outline is pierced with a needle and powdered chalk rubbed through a small bag, suits fine or dark grounds that a wheel would damage, and iron-on transfers give a crisp line that must be stitched before it lifts. The transferred line should sit just dark enough to follow and light enough to vanish beneath the stitches or wash away. The hoop then does the real work: cloth is laid over the inner ring, the outer ring driven down, and the screw tightened until the surface is drum-tight so a flick rings rather than thuds. Slack cloth lets stitches pucker and pull the fabric into hollows; over-tightened cloth stretches the weave so stitches spring loose when the hoop is removed and the design no longer squares. Match materials to the effect: stranded cotton split to one to six strands on a sharp size 5 to 10 needle for surface stitchery, and a blunt tapestry needle on even-weave aida or linen for counted work so the point slides between threads instead of piercing them.",
          "bulletPoints": [
            "Choose the transfer method by the ground: wheel and carbon for sturdy cloth, pounce for fine or dark fabric.",
            "Keep the transferred line faint so it disappears under stitching or washes out.",
            "Tighten the hoop until the cloth is drum-tight; a tap should ring, not thud.",
            "Slack cloth puckers stitches; over-tight cloth distorts the weave as the hoop comes off.",
            "Split stranded cotton to suit the coverage and match a long-eyed needle to the thread."
          ],
          "keyTakeaway": "A faint true transfer and drum-tight hoop on well-matched thread and needle decide the quality of every stitch that follows.",
          "realWorldExample": "A student stitching a border on dark navy cotton abandons the tracing wheel, which was scratching the surface, and switches to prick-and-pounce with talc, leaving a light dotted guideline she can stitch over cleanly on the hoop."
        },
        {
          "title": "Line Stitches: Outline, Stem, Chain and Fly",
          "content": "Line stitches define the drawing, and their difference is the position of the working thread relative to the pointing needle. Outline stitch is worked left to right with the thread held below the needle as it points down, producing a smooth, rounded rope that reads like a drawn line, while stem stitch reverses the direction, working right to left with the thread above the needle, so the overlapping loops make a thicker twisted cord that stands proud and is excellent for stems, borders and lettering. Chain stitch drops the needle back into its own loop each time, building a linked open line; the same loop worked outward from a point becomes the detached chain or lazy daisy, the basis of a petal or a leaf. Fly stitch is a detached Y: the needle picks up two ground threads a set width apart, comes up between them inside a looped thread, and is held by a small slip stitch, giving a branching mark used for grass, twigs and vines. On all four, even stitch length and constant thread position are what make the line look drawn rather than sewn, and the tension should sit the thread on the cloth, not cinch it so the ground dimples.",
          "bulletPoints": [
            "Outline: thread below the pointing needle, worked left to right for a smooth rope.",
            "Stem: thread above the needle, worked right to left for a raised twisted cord.",
            "Chain loops through itself; the detached chain builds a petal or leaf.",
            "Fly stitch is a Y anchored by a slip stitch, used for grass and twigs.",
            "Hold constant thread position and even length so the line reads as drawn."
          ],
          "keyTakeaway": "Whether the thread lies above or below the needle, and the direction of working, turns outline into stem and chain into leaf.",
          "realWorldExample": "For the border of a school banner a girl writes the word GHANA in stem stitch so the letters stand up as raised cords, then adds a chain-stitch vine and fly-stitch leaves along the frame."
        },
        {
          "title": "Filling and Knotted Stitches: Satin and French Knot",
          "content": "Filling stitches carry colour and light across an area. Satin stitch is a set of parallel straight stitches laid close together so no ground shows, worked from the outline inward with the thread held flat; the stitches must be short enough to lie taut, because a satin stitch longer than about 1.5 cm sags and catches, so a wide shape is split into two blocks or supported by an underlay of a few longer lines that raise the surface and give it body. Keeping the edge true, where each stitch lands exactly on the outline, is what turns a block of satin into a crisp shape. The French knot adds texture and shine: bring the needle up at the point, wrap the thread once or twice around it close to the fabric, hold the working thread taut, and re-enter the needle immediately beside the exit hole and pull the whole through until the knot rests on the surface. If the thread is not held taut, or the needle re-enters far from the exit, the knot loosens into a straight stitch or sinks below the cloth. A field of French knots makes dotted centres, berry clusters and the grain of a Ghanaian pod, and each knot must be the same size, which comes from wrapping the same number of times on every stitch.",
          "bulletPoints": [
            "Satin stitch lies in close parallel lines with no ground showing between.",
            "Keep satin stitches short (about 1.5 cm or less) or split wide shapes to stop sagging.",
            "An underlay raises a long satin stitch and gives the filled shape body.",
            "A French knot needs the thread held taut and the needle to re-enter beside its exit.",
            "Wrap each knot the same number of times so the field of knots is even."
          ],
          "keyTakeaway": "Satin fills with flat, even, short lines and the French knot only holds when tension is kept as the needle goes back in.",
          "realWorldExample": "A candidate filling the petals of a hibiscus motif works each petal in glossy satin blocks split at the widest point, then dots the flower centre with tight two-wrap French knots in gold thread."
        },
        {
          "title": "Couching, Drawn-Thread, Cutwork and Blackwork",
          "content": "Some ornament is built by attaching or by working the fabric itself. Couching lays a decorative thread, often metallic or a thick wool too large to pull through the cloth, onto the surface and stitches it down at intervals with a fine matching thread using small slanted tacking or buttonhole stitches, so the shine of the laid thread decorates without ever passing through the ground; pattern darning over a laid thread produces geometric bands popular on collars. Drawn-thread work is counted openwork: a stated number of warp and weft threads are carefully extracted from an even weave, the remaining threads are grouped into bundles and woven into needlewheels, a lattice or a series of bars, framing an insert that lets light through and shows exact counting. Cutwork goes further by cutting away shapes of ground fabric and enclosing each raw opening with close buttonhole stitch so the edges cannot ravel, assembling a pierced pattern like a lace panel. Blackwork is a counted surface done in black silk on white linen with double running, or reversed Holbein, stitch, where the needle picks up single ground threads so that the identical even line shows on both faces and no loose floats hang on the reverse; the resulting geometric fills recall both Tudor coifs and the crisp monochrome of a Ghanaian adinkra border.",
          "bulletPoints": [
            "Couching fastens a laid decorative thread down with small stitches of a finer thread.",
            "Drawn-thread work counts and extracts ground threads, bundling the rest into wheels or lattice.",
            "Cutwork cuts away fabric and defends each edge with buttonhole stitch against raveling.",
            "Blackwork uses double running so the same clean line shows on front and back.",
            "All four reward exact counting and consistent stitch spacing."
          ],
          "keyTakeaway": "Couching decorates by attachment, while drawn-thread, cutwork and blackwork make the fabric itself into openwork or counted pattern.",
          "realWorldExample": "On a graduation cushion a student works a drawn-thread border with needlewheel inserts along each hem, cushions the name panel in metallic-thread couching, and fills the corners with a blackwork geometric block echoing an adinkra motif."
        }
      ],
      "commonMistakes": [
        "Working on a slack hoop so every satin and stem stitch cinches the cloth into puckers that remain after the hoop is removed.",
        "Letting the working thread fall to the wrong side of the pointing needle, so outline becomes stem and the raised cord is lost.",
        "Making a French knot with the thread loose or re-entering far from the exit hole, so the knot unravels into a straight stitch.",
        "Running a single satin stitch across a wide shape without an underlay, causing it to sag, catch on the fingers and shade unevenly.",
        "Cutting a cutwork opening without buttonholing the raw edge, so the aperture ravels wider with every handling."
      ],
      "wassceExamTips": [
        "Paper 1 asks you to name and describe stitches, so learn the two-part answer for each: the movement of the needle and the position of the thread, for example stem stitch worked right to left with the thread above the needle.",
        "Paper 2 design marks a planned ornament, so show the transferred motif, a stitch key naming which stitch fills each area, and the thread and fabric you have matched together.",
        "Paper 3 practical is judged on handling and finish: keep hoop tension drum-tight, make stitches even, and press the finished piece face down on a towel so relief and sheen are preserved on the board.",
        "For counted drawn-thread or blackwork, state the count you extracted and keep spacing uniform, since examiners award accuracy marks for regularity on both the front and the reverse.",
        "Show your reverse: blackwork with no floats and a knotted, buried ending demonstrate control, which supports the marks for creativity and finish over the practical hours."
      ],
      "summaryChecklist": [
        "Can I transfer a design by tracing, wheel-and-carbon, pounce or iron-on and keep the line faint?",
        "Can I set an embroidery hoop to correct drum-tight tension and name its two faults?",
        "Can I choose the right thread and needle and work outline, stem, chain, fly, satin and French knot evenly?",
        "Can I explain couching and work a drawn-thread, cutwork or blackwork border with correct counting?",
        "Can I finish a panel by pressing it face down on a towel and appraise the front and reverse?"
      ]
    },
    "examples": [
      {
        "id": "ex-tx-embroidery-1",
        "title": "Composing a Transferred Floral Panel",
        "problem": "Transfer a hibiscus motif onto calico, hoop it, then outline the border in stem stitch, fill the petals in satin stitch and dot the centre with French knots, finishing with an even front and a neat reverse.",
        "stepByStepSolution": [
          "Step 1 (M1): Place the traced motif on the cloth and copy the outline faintly with a water-soluble pen, checking the design squares with the lengthwise grain before hooping.",
          "Step 2 (M1): Mount the cloth in the hoop, tighten the screw until the surface is drum-tight, and thread a sharp size 7 needle with two strands of stranded cotton for the stem-stitch border.",
          "Step 3 (M1): Work the border in stem stitch right to left with the thread held above the pointing needle, keeping stitch length even so the cord stands up and the line reads as drawn.",
          "Step 4 (M1): Fill each petal in satin stitch landing on the outline, splitting the widest petal into two blocks over a light underlay so the long stitches cannot sag.",
          "Step 5 (M1): For the centre, bring the needle up, wrap the thread twice, hold it taut, and re-enter beside the exit hole to form tight French knots of equal size.",
          "Step 6 (A1): Remove the hoop, press the panel face down on a towel to keep the relief, wash out any transfer line, and check on the reverse that no loose floats or bare knots show."
        ],
        "keyTakeaway": "True transfer, drum-tight hoop, correct thread position and short satin blocks, with knots held taut, give a clean front and reverse."
      },
      {
        "id": "ex-tx-embroidery-2",
        "title": "Working a Drawn-Thread and Couching Border",
        "problem": "On an even-weave linen hem, extract a drawn-thread border, bundle the remaining threads into needlewheels, and lay a metallic band down by couching beside it.",
        "stepByStepSolution": [
          "Step 1 (M1): Count and mark a fold line on the hem, then cut and carefully pull out a stated number of warp and weft threads to open a clear gap along the border.",
          "Step 2 (M1): With a blunt tapestry needle and matching cotton, group the surviving threads in bundles of the same count and work them into evenly spaced needlewheels down the gap.",
          "Step 3 (M1): Lay the metallic thread flat along the line beside the openwork, pinning it lightly so it follows the border without twisting.",
          "Step 4 (M1): Couch the metallic thread down with small slanted stitches of a fine matching thread at equal intervals, keeping the laid thread from being pierced.",
          "Step 5 (A1): Check accuracy: each needlewheel uses the same thread count, the wheels are evenly spaced, and the couching stitches hold the metallic thread with even gaps.",
          "Step 6 (A1): Finish the reverse neatly, square the hem back on the grain and press face down so the openwork and the raised metallic band both survive handling."
        ],
        "keyTakeaway": "Drawn-thread needs counted, uniform bundles; couching attaches the decorative thread without piercing it, and both are judged on even spacing."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-tx-t1-embroidery-stitches",
      "topicId": "shs3-tx-t1-embroidery-stitches",
      "title": "Embroidery Stitches and Ornament Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-emb-1",
          "quizId": "quiz-shs3-tx-t1-embroidery-stitches",
          "questionText": "Which feature separates stem stitch from outline stitch?",
          "optionA": "In stem stitch the thread is held above the pointing needle and worked right to left",
          "optionB": "Stem stitch uses a blunt tapestry needle while outline uses a sharp one",
          "optionC": "Outline stitch is worked with a knot between every stitch",
          "optionD": "Stem stitch is a filling stitch while outline is an openwork stitch",
          "correctOption": "A",
          "subConcept": "Line Stitches",
          "explanation": "Stem stitch is worked right to left with the thread above the needle, giving a raised twisted cord; outline is worked left to right with the thread below. Needle type, knots and the filling/openwork ideas describe other stitches, not the line between stem and outline.",
          "remediationTip": "Remember the two dials: thread position (above or below) and direction (left-to-right or right-to-left) together name the stitch."
        },
        {
          "id": "q-tx-emb-2",
          "quizId": "quiz-shs3-tx-t1-embroidery-stitches",
          "questionText": "A French knot unravels into a straight stitch most often because the worker did what?",
          "optionA": "Used too few strands of stranded cotton",
          "optionB": "Worked the knot at the wrong end of the hoop",
          "optionC": "Did not hold the thread taut as the needle re-entered beside the exit hole",
          "optionD": "Pressed the finished piece face down",
          "correctOption": "C",
          "subConcept": "Knotted Stitches",
          "explanation": "If the working thread is slack, or the needle re-enters far from its exit, the wrap slips off and the stitch becomes a straight line. Strand count, hoop orientation and pressing do not cause the knot to come undone.",
          "remediationTip": "Keep the thread tight and put the needle back in right beside the hole it rose from; that traps the wrap on the surface."
        },
        {
          "id": "q-tx-emb-3",
          "quizId": "quiz-shs3-tx-t1-embroidery-stitches",
          "questionText": "What happens to stitches worked on a slack, loosely hooped fabric?",
          "optionA": "They slide deeper into the weave and disappear",
          "optionB": "They pucker the cloth into hollows that stay after the hoop is removed",
          "optionC": "They turn the fabric into even-weave aida",
          "optionD": "They become counted blackwork automatically",
          "correctOption": "B",
          "subConcept": "Hoop Tension",
          "explanation": "A slack hoop lets each stitch cinch the ground, leaving permanent puckers; tension should be drum-tight so a tap rings. Slackness does not change the fabric type or convert stitches into another technique.",
          "remediationTip": "Tighten the hoop until the cloth feels like a drum skin before starting, and re-tension if it slackens as you work."
        },
        {
          "id": "q-tx-emb-4",
          "quizId": "quiz-shs3-tx-t1-embroidery-stitches",
          "questionText": "Why is blackwork said to look the same on both faces of the cloth?",
          "optionA": "Because it is worked on transparent tissue",
          "optionB": "Because the metallic thread reflects equally on both sides",
          "optionC": "Because it uses a knotted stitch that shows on the back",
          "optionD": "Because double running stitch picks up single threads so no floats hang on the reverse",
          "correctOption": "D",
          "subConcept": "Counted Surface Work",
          "explanation": "Blackwork is double running (reversed Holbein), where the needle takes the same single ground threads on the way out and back, so the even line appears front and back with no loose floats. Transparency, metallic couching and knotted stitches are unrelated to this effect.",
          "remediationTip": "Picture the path: the needle steps forward over single threads and retraces in the gaps, leaving the same line on both sides."
        },
        {
          "id": "q-tx-emb-5",
          "quizId": "quiz-shs3-tx-t1-embroidery-stitches",
          "questionText": "A decorative metallic thread is too thick to pass through the cloth. Which technique decorates with it anyway?",
          "optionA": "Couching, laying it on the surface and fastening it with small stitches of a finer thread",
          "optionB": "Drawn-thread work, extracting a set count of ground threads",
          "optionC": "Cutwork, cutting away shapes and buttonholing the edges",
          "optionD": "Satin stitch, packing short parallel lines across the area",
          "correctOption": "A",
          "subConcept": "Couching",
          "explanation": "Couching attaches a laid decorative thread to the surface with fine tacking or buttonhole stitches, so the thick or metallic thread never has to pass through the ground. Drawn-thread, cutwork and satin are counted or filling stitches that do not attach a laid thread.",
          "remediationTip": "If the thread cannot go through the cloth, sew it down on top of it; that is the whole idea of couching."
        }
      ]
    }
  },
  {
    "id": "shs3-tx-t2-fabric-manipulation-fashion-illustration",
    "subjectId": "textiles",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 2,
    "title": "Fabric Manipulation and Fashion Illustration",
    "description": "Controlled smocking, shirring, pleating, gathering, quilting and bias work that build texture into cloth, drawn up and presented through the croquis, garment flats and a fabric board for a mini collection.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Fabric manipulation turns a flat length of cloth into textured relief by controlled gathering, folding or stitching; it is the decorative engine behind smocked bodices, pleated skirts and quilted panels on Ghanaian ready-to-wear.\n• Smocking is worked on a grid of marked dots: the fabric is first stitched into gathers and then embroidered on the surface; a lawn gathered for smocking shrinks to roughly one-third of its starting width.\n• English smocking lays a honeycomb background stitch row by row over rolled gathers; surface, knotted and bullion stitches sit evenly in the valleys between the gathers.\n• Shirring is functional smocking: two or three rows of fine elastic thread sewn with a zig-zag draw the cloth into controlled, stretchable fullness for cuffs, waistbands and bodices.\n• Pleating folds cloth at measured intervals then presses or topstitches the folds flat; knife pleats all run one way, box pleats open in pairs, and accordion or sunray pleats radiate from a point.\n• Gathering distributes fullness along a seam using one or two rows of long tacking stitches pulled evenly along the working thread; the ease is spread so no hard puckers form.\n• Quilted relief pads a fabric sandwich (face, wadding, backing) with rows of stitching so the surface rises between them; channel, corded and trapunto quilting give different depths.\n• Bias work exploits the 45-degree diagonal grain: the cut edge stretches and drapes softly, so bias binding, bias strips and French seams finish curved edges and knit seams.\n• A croquis is the simplified nine-head fashion figure, the body divided into nine equal head-heights from crown to sole with the pubic point at the midline, so garments sit on believable proportion.\n• Fashion flats are technical front-and-back drawings to scale showing seam lines, darts, topstitching and closures with no shading and no perspective; they are the pattern-maker's blueprint.\n• A fabric board presents a mini collection: manipulation samples mounted in order under a title block naming each technique, fibre, dye and stitch used.\n• Mark the smocking grid with a water-soluble or heat-erasable pen; on a humid Ghanaian workroom table never let the marker dry out before stitching or the dots fade.\n• Keep the gathering thread the same colour as the fabric so it can stay in after pressing; a contrasting thread left in shows through thin cotton lawn.",
    "detailedNotes": {
      "overview": "This topic teaches the hands-on craft of giving cloth three-dimensional texture and then recording that cloth on the fashion figure. Fabric manipulation covers smocking, shirring, pleating, gathering, quilting and bias work, each of which controls how much fullness a flat length holds and how it catches light. The illustration half gives the croquis, garment flats and the fabric board, so a manipulated cloth becomes a sellable design. Together they form the bridge between textile studio work and the design presentation expected on WASSCE Paper 2 and Paper 3.",
      "introduction": "Work in a fixed order: draw or mark the manipulation grid before you cut, gather or fold; press and measure the take-up so the finished panel is the size the garment needs; then translate that sample onto a croquis to scale so the texture reads believably. A manipulated panel that shrinks unpredictably cannot be plotted onto a flat, and a flat without believable texture loses marks for finish. Always handle shears, needles and a hot iron to studio rules so a dull blade or a scorched lawn does not undo hours of stitching.",
      "realWorldContext": "A dressmaker near Makola Market in Accra takes orders for smocked children's tunics and shirred bodices for the December rush; she marks a grid on cotton lawn, gathers it to one-third, and embroiders the honeycomb so the panels stretch over a child's shoulders without a zip. In Kumasi a fashion student mounts a fabric board for a mini collection sold at the Kejetia craft fair, pairing kente-strip pleats with bias-bound necklines, while a tailor in Tamale uses fine shirring on the cuffs of batakari smocks so they hold their shape through the harmattan. These are the exact manipulations and presentations the workroom must teach.",
      "objectives": [
        "Set out a smocking grid, gather fabric to the correct reduction and work honeycomb background stitch with surface decoration",
        "Produce shirring, knife, box and accordion pleats and a smooth gathered cap, and state the take-up each requires",
        "Build quilted relief and cut and apply bias binding to a curved edge",
        "Draw a nine-head croquis and place a manipulated fabric onto believable garment proportions",
        "Produce front and back fashion flats and mount a labelled fabric board for a mini collection"
      ],
      "sections": [
        {
          "title": "Smocking and Shirring: Controlled Fullness",
          "content": "Smocking is the disciplined marriage of gathering and embroidery. The fabric is marked on the wrong side with a grid of dots at even spacing, gathered with fine tacking stitches pulled to a thread, and then the gathers are rolled and locked with a honeycomb background stitch worked row by row. Once the ground is set, surface stitch, knotted stitch and bullion fill the panels between the gathers. Shirring does the same job by force rather than by hand: rows of fine elastic thread are sewn to the inside of the fabric with a zig-zag, and as the elastic contracts the cloth draws up into even, stretchable fullness. The practical difference is that true smocking is permanent and decorative, while shirring is elastic and functional, so shirring suits cuffs and waistbands that must give.",
          "bulletPoints": [
            "Mark the grid on the wrong side with a water-soluble pen at even dot spacing.",
            "Gather to roughly one-third of the starting width before any decoration.",
            "Lock gathers with honeycomb background stitch, then embroider between the rows.",
            "Shirring uses rows of elastic thread on a zig-zag for stretchy, functional fullness.",
            "Measure take-up so the set panel matches the size the pattern needs."
          ],
          "keyTakeaway": "Smocking gathers then decorates and is permanent; shirring gathers with elastic and is functional.",
          "realWorldExample": "At a Makola workroom a dressmaker marks a smocking grid on cotton lawn, rolls the gathers and embroiders the honeycomb so a child's tunic stretches over the shoulders with no zip, then shirrs the cuffs with fine elastic so they grip without binding."
        },
        {
          "title": "Pleating and Gathering: Folded and Eased Cloth",
          "content": "A pleat is a measured fold pressed or stitched flat, and the craft lies in keeping every fold the same depth so the fall of the cloth is regular. Knife pleats are all turned to run in one direction; box pleats are paired knife pleats that meet back to back and open outward; accordion pleats are fine, sharply pressed knife pleats worked all round a skirt. Gathering is softer: one or two rows of long machine stitches are pulled along the working thread to ease a longer edge into a shorter one, and the fullness is redistributed so no hard puckers break the line. On a curved seam such as a puffed-sleeve cap, the gather must be eased smoothly around the armhole so the sleeve reads as a clean dome rather than a bag of lumps.",
          "bulletPoints": [
            "Knife pleats run one way; box pleats open in pairs; accordion pleats are fine all-round knife pleats.",
            "Keep every fold depth identical with a card gauge or marked fold line.",
            "Gather with long tacking stitches and pull the bobbin thread to ease the edge.",
            "Redistribute fullness evenly so no hard pucker forms along the seam.",
            "Ease a gathered sleeve cap smoothly around the curved armhole."
          ],
          "keyTakeaway": "A pleat is a measured fold; a gather is eased fullness; both fail if the spacing is uneven.",
          "realWorldExample": "A tailor in Takoradi marks each box pleat on a school skirt with the same fold gauge, presses the folds flat with a hot iron over a damp cloth, and the pleats break evenly when the wearer walks to assembly."
        },
        {
          "title": "Quilted Relief and Bias Work",
          "content": "Quilting builds relief by stitching a sandwich of face fabric, wadding and backing so the surface puffs between the lines of stitching. Channel quilting lays parallel raised ridges; corded quilting threads a cord into a channel for a harder line; trapunto pads selected areas from the back so a motif stands proud. Bias work is a different skill: fabric cut across the 45-degree grain stretches and drapes, so bias strips wrap curved necklines and armholes smoothly, bias binding gives a soft edge finish, and a French seam on a bias edge prevents fraying. The practical caution is that bias cloth grows when handled, so a bias-hemmed garment must be hung for a day before the final hem depth is marked, or the hem dips after the first wash.",
          "bulletPoints": [
            "Quilt a face-wadding-backing sandwich; relief rises between the stitching lines.",
            "Channel, corded and trapunto quilting give different depths and hardness of line.",
            "Bias is the 45-degree grain; it stretches and drapes over curved edges.",
            "Hang a bias hem for a day to let it grow before marking the final depth.",
            "Use a French seam or bias binding to stop a bias edge fraying."
          ],
          "keyTakeaway": "Quilting pads relief from behind; bias work stretches a cut edge to sit on a curve.",
          "realWorldExample": "A Koforidua student trapunto-quilts an adinkra-inspired motif, padding selected shapes from the reverse so the symbol stands proud on a mounted panel, then binds the square with a kente-strip bias edge."
        },
        {
          "title": "The Croquis, Fashion Flats and the Fabric Board",
          "content": "A croquis is the template figure a designer draws garments onto, and the professional canon divides the body into nine equal head-heights from crown to sole, placing the pubic point at the exact midline and the nipple line at the third head down. The face and hands stay simple because they carry no marks; the value lies in believable proportion so the cloth sits correctly. Fashion flats strip the fashion out and keep the information: front and back views to scale, no perspective, with every seam line, dart, topstitch and closure drawn so a pattern-maker can read them like a map. A fabric board then collects the manipulation samples a class has stitched, mounts them in sequence, and adds a title block naming the technique, the fibre, the dye and the stitch for each, turning loose test pieces into a presentable mini collection.",
          "bulletPoints": [
            "The nine-head croquis places the pubic point at the midline and nipples at head three.",
            "Keep face and hands simple; the cloth carries the marks.",
            "Fashion flats are front-and-back to scale, no shading, all seams and closures shown.",
            "A fabric board mounts samples in order with a technique, fibre, dye and stitch key.",
            "Caption each manipulation so an examiner can match sample to method."
          ],
          "keyTakeaway": "The croquis gives believable proportion; the flat gives construction data; the board proves the technique.",
          "realWorldExample": "An Accra design student drawing a mini collection for a Kumasi craft fair sketches each look on a nine-head croquis, adds front and back flats for the smocked bodice, then pins the real lawn samples onto a labelled fabric board."
        }
      ],
      "commonMistakes": [
        "Gathering fabric to an unmeasured reduction so the smocked panel ends the wrong size for the pattern; always compute the take-up and mark the grid to match it.",
        "Leaving a contrasting gathering thread in after pressing, which shows through thin lawn; use matching thread or remove it.",
        "Cutting bias binding on the straight grain, which refuses to ease around a neckline and buckles; true bias is the 45-degree diagonal.",
        "Marking a bias hem immediately after stitching and then it dips after the first wash; hang the piece for a day to grow before marking the depth.",
        "Drawing fashion flats in perspective or with shading so the pattern-maker cannot read them; flats are flat front and back views only.",
        "Running a hot iron over shirring elastic or a synthetic lawn without testing, melting the thread; check the iron temperature on the fibre first."
      ],
      "wassceExamTips": [
        "On Paper 2 a design question may ask you to choose a manipulation for a given garment; state the technique and justify the take-up so the method line earns the mark.",
        "Paper 3 practical awards marks for handling of materials: an even smocking grid and a smooth gathered cap score higher than a busy but irregular sample.",
        "Label every sample on your presentation board with technique, fibre and stitch; an examiner cannot credit a manipulation they cannot identify.",
        "On Paper 1 objectives know the vocabulary: knife versus box versus accordion pleat, the nine-head croquis midline, and the 45-degree bias grain.",
        "Time the practical: a manipulated panel plus a croquis and two flats usually fills the morning session, so set out the grid first and decorate after the structure is safe."
      ],
      "summaryChecklist": [
        "Can I mark a smocking grid, gather cloth to the correct reduction and work a honeycomb background with surface decoration?",
        "Can I produce shirring, knife, box and accordion pleats and ease a smooth gathered sleeve cap?",
        "Can I build quilted relief and cut and apply bias binding to a curved edge?",
        "Can I draw a nine-head croquis and place a manipulated fabric onto believable garment proportions?",
        "Can I produce front and back fashion flats and mount a labelled fabric board for a mini collection?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-tx-fabmanip-1",
        "title": "Gathering and Smocking a Bodice Panel",
        "problem": "A bodice front must be smocked from a strip of cotton lawn 30 cm wide. Plan the grid, the gather and the decoration so the finished smocked panel is the 10 cm the pattern requires.",
        "stepByStepSolution": [
          "(M1) Note that lawn gathered for smocking reduces to about one-third of its width, so a 30 cm strip becomes roughly 10 cm, matching the pattern.",
          "(M1) Mark the grid on the wrong side with a water-soluble pen at even dot spacing, working in vertical columns along the planned gathers.",
          "(M1) Run long tacking stitches through the marked dots and pull the bobbin thread to roll each column of gathers evenly.",
          "(A1) Lock the rolled gathers with honeycomb background stitch worked row by row so no gather slips and the panel holds its 10 cm width.",
          "(M1) Embroider surface stitch and bullion decoration in the valleys between the set gathers, spacing motifs evenly across the panel.",
          "(A1) Press the finished panel lightly on the wrong side; the reduction is even, the decoration is regular and the 10 cm measurement is met."
        ],
        "keyTakeaway": "Compute the take-up first, mark the grid to match it, then gather, lock and decorate in that order."
      },
      {
        "id": "ex-shs3-tx-fabmanip-2",
        "title": "Presenting a Manipulated Fabric as a Fashion Flat and Board",
        "problem": "A class has stitched a box-pleated kente-strip panel. Show how to translate it onto a croquis and prepare it for the presentation board.",
        "stepByStepSolution": [
          "(M1) Draw a nine-head croquis with the pubic point at the midline so the garment sits on believable proportion.",
          "(M1) Sketch the box-pleated panel as a skirt on the croquis, indicating the pleat openings and their fall of light.",
          "(M1) Add front and back fashion flats to scale, drawing every pleat fold line, the waistband and the side closure with no shading or perspective.",
          "(A1) Read the flats like a construction map: seam lines, pleat depth and fastening all legible to a pattern-maker.",
          "(M1) Pin the real kente-strip pleated sample onto the board in sequence with the croquis and the two flats.",
          "(A1) Write a title-block caption naming the technique (box pleat), the fibre (cotton-silk kente strip) and the stitching so the examiner can identify it."
        ],
        "keyTakeaway": "The croquis sells the look, the flat gives the construction data, and the board caption proves the technique."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-tx-fabmanip-fashion",
      "topicId": "shs3-tx-t2-fabric-manipulation-fashion-illustration",
      "title": "Fabric Manipulation and Fashion Illustration Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-fabmanip-1",
          "quizId": "quiz-shs3-tx-fabmanip-fashion",
          "questionText": "A strip of cotton lawn 30 cm wide is gathered for English smocking. Approximately what width will the set smocked panel be?",
          "optionA": "20 cm",
          "optionB": "15 cm",
          "optionC": "10 cm",
          "optionD": "25 cm",
          "correctOption": "C",
          "subConcept": "Smocking take-up",
          "explanation": "Lawn gathered for smocking reduces to about one-third of its starting width, so 30 cm becomes roughly 10 cm. The other options assume a shallower reduction that would leave the panel too wide for the pattern.",
          "remediationTip": "Remember the one-third rule: divide the flat width by three to estimate the smocked panel size before you mark the grid."
        },
        {
          "id": "q-tx-fabmanip-2",
          "quizId": "quiz-shs3-tx-fabmanip-fashion",
          "questionText": "Which manipulation uses rows of fine elastic thread sewn with a zig-zag to draw cloth into stretchable fullness?",
          "optionA": "Shirring",
          "optionB": "Trapunto quilting",
          "optionC": "Knife pleating",
          "optionD": "Bias binding",
          "correctOption": "A",
          "subConcept": "Functional gathering",
          "explanation": "Shirring is functional smocking built from elastic-thread rows on a zig-zag, giving stretch for cuffs and waistbands. Trapunto pads relief, pleating folds, and bias binding edges a curve; none of these gather by elastic.",
          "remediationTip": "Link shirring to the word stretch: only elastic thread gives controlled fullness that grips and releases."
        },
        {
          "id": "q-tx-fabmanip-3",
          "quizId": "quiz-shs3-tx-fabmanip-fashion",
          "questionText": "In a nine-head croquis, where is the pubic point placed?",
          "optionA": "At the third head down",
          "optionB": "At the exact midline of the figure",
          "optionC": "At the fifth head down",
          "optionD": "Just below the knee line",
          "correctOption": "B",
          "subConcept": "Fashion figure proportion",
          "explanation": "The professional canon puts the pubic point at the half-way midline of the nine-head figure, with the nipple line at head three. Placing it higher or lower makes the legs too long or too short and the garment sits wrong.",
          "remediationTip": "Mark the midline first on any croquis; it fixes the leg length and keeps the garment believable."
        },
        {
          "id": "q-tx-fabmanip-4",
          "quizId": "quiz-shs3-tx-fabmanip-fashion",
          "questionText": "Why must a bias-cut hem be hung for a day before its final depth is marked?",
          "optionA": "To let the dye set after washing",
          "optionB": "To shrink the wadding inside the fold",
          "optionC": "To let the bias edge grow, or it will dip later",
          "optionD": "To soften the starch before pressing",
          "correctOption": "C",
          "subConcept": "Bias behaviour",
          "explanation": "Cloth on the 45-degree grain stretches and grows under its own weight, so an instantly marked hem dips after hanging or a first wash. Dye setting, wadding and starch are unrelated to bias growth.",
          "remediationTip": "Pair bias with grow in your mind: hang first, mark the even hem second."
        },
        {
          "id": "q-tx-fabmanip-5",
          "quizId": "quiz-shs3-tx-fabmanip-fashion",
          "questionText": "Which piece of presentation work is drawn front and back to scale with no shading or perspective?",
          "optionA": "The croquis",
          "optionB": "The mood board",
          "optionC": "The realisation sketch",
          "optionD": "The fashion flat",
          "correctOption": "D",
          "subConcept": "Technical drawing",
          "explanation": "Fashion flats are the construction blueprints, drawn flat front and back to scale with every seam and closure shown. The croquis and realisation sketch carry pose and shading; a mood board carries images, not measurements.",
          "remediationTip": "A flat is a map for the pattern-maker: information only, never perspective."
        }
      ]
    }
  },
  {
    "id": "shs3-tx-t2-textile-care-conservation",
    "subjectId": "textiles",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 3,
    "title": "Textile Care, Storage and Conservation",
    "description": "Washing by fibre type, colour-fastness testing, correct ironing temperatures, starch and sizing, pest control and storage, and the respectful mending and restoration of old kente and adinkra cloth.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Fibre type sets the wash method: cotton and linen take hot water and strong agitation, wool and silk need cool water, mild detergent and no wringing, and synthetics dislike heat that sets a crease permanently.\n• Wool fibres carry overlapping scales; heat plus agitation locks the scales together and the cloth felts, so wool is washed cool, pressed gently and dried flat, never hung to stretch.\n• A colour-fastness test rubs a hidden seam or hem with a damp white cloth, or steams a swatch wrapped in a damp cloth; colour that transfers means the piece must be washed alone and cool.\n• Ironing temperature follows the fibre: synthetics and nylon about 110 degrees, wool and silk about 120 to 150 degrees, cotton about 180 degrees and linen up to 210 degrees; always iron at the lowest setting that works and test on a scrap.\n• Iron synthetics and silk on the wrong side or through a press cloth; a bare hot sole plate glazes silk and shiny-marks dark polyester in seconds.\n• Starch gives a crisp hand to cotton and linen for collars and cuffs; sizing is a heavier filler used in finishing. Too much starch embrittles fibre and attracts silverfish, so it is not for long-term storage.\n• Storage cloth must be clean, dry and acid-free: washed fabric deters pests, and acid from newspaper, cardboard or plastic bags yellows and weakens the fibre, so wrap in cotton muslin or unbuffered tissue.\n• Pests do the worst damage: silverfish eat starch and size, clothes moths gnaw protein fibres such as wool and silk, and carpet beetles take animal fibre; keep dried neem leaf or cedar in the store and never leave food crumbs near cloth.\n• Damp Ghanaian store rooms breed mildew that stains and rots cloth; ventilate, keep fabric off the floor and never pack a piece that is even slightly damp.\n• Mending for longevity matches the fibre, weight and colour of the patch, works with the grain, and uses stitches that can be removed later without cutting the original cloth.\n• Restoring old kente and adinkra cloth is done respectfully: clean gently, support weak areas rather than cutting them out, document every step, and keep repairs reversible so a future conservator can undo them.\n• Light fades dye, so display and store heritage cloth away from direct sun; a kente panel lit daily by a window will lose its indigo and red within a few years.",
    "detailedNotes": {
      "overview": "This topic is the afterlife of every textile: how cloth is washed, pressed, stiffened, stored and mended so it lasts, and how old and culturally valuable cloth is conserved without damage. Care begins with fibre identification because cotton, wool, silk and synthetics each demand their own water temperature, detergent and iron heat. Conservation adds discipline, because an antique kente strip or a stamped adinkra cloth is history you cannot replace, so cleaning and repair must be gentle, documented and reversible. These are practical, examinable skills that run straight through the WASSCE workroom and into domestic and museum practice in Ghana.",
      "introduction": "Approach any piece with a fixed routine: identify the fibre, test colour fastness on a hidden edge, choose the wash method and iron temperature the fibre allows, then dry and store it clean and dry against light and pests. Only after these safe steps do you consider starch or a repair. For heritage cloth, photograph and note the condition before touching it, work from the least invasive method upward, and use stitches and adhesives a future conservator can reverse. Care is a sequence, not a guess.",
      "realWorldContext": "In Kumasi a family keeps a woven kente cloth for a chief's funeral; before storage it is checked for colour fastness, wrapped in clean cotton muslin with dried neem leaf against silverfish, and kept away from the window sun that would fade the indigo. In Accra a market trader at Makola tests whether a cheap cotton print runs by rubbing a hidden hem with a damp white cloth before it stains a customer's bag. A school cook and a tailor in Tamale both learn that ironing a polyester smock on a linen setting melts and shiny-marks it, so the iron is set low and the garment pressed on the wrong side.",
      "objectives": [
        "Select a washing method, water temperature and detergent appropriate to cotton, wool, silk and synthetic fibres",
        "Carry out a colour-fastness test and act on the result",
        "Set correct ironing temperatures per fibre and protect heat-sensitive cloth with a press cloth",
        "Apply starch and sizing for a crisp finish while explaining why they are avoided in storage",
        "Plan pest control, safe storage and a reversible mending or conservation repair for heritage kente and adinkra cloth"
      ],
      "sections": [
        {
          "title": "Washing by Fibre Type",
          "content": "Every wash decision starts from the fibre. Cellulose fibres such as cotton and linen are strong wet, tolerate hot water and firm agitation, and release soil easily, so they take the hardest wash. Protein fibres behave oppositely: wool is covered in scales that lock together under heat and rubbing so the cloth felts, and silk weakens when wet and is spoiled by alkaline soap, so both are washed cool with a mild neutral detergent, handled gently, never wrung, and wool dried flat so its weight does not stretch it. Synthetic fibres such as polyester and nylon melt or set a hard crease under high heat and hold body oils, so they are washed warm with detergent and dried cool. The workroom rule is to read the fibre before the water temperature, because the wrong pair destroys the cloth in one wash.",
          "bulletPoints": [
            "Cotton and linen: strong wet, hot water and firm agitation are safe.",
            "Wool: cool water, mild detergent, no wringing, dry flat to stop felting and stretching.",
            "Silk: weakens wet, hates alkali; wash cool and press through a cloth.",
            "Synthetics: warm wash, cool dry; high heat melts or sets a hard crease.",
            "Match water temperature and detergent to the fibre, never guess."
          ],
          "keyTakeaway": "Identify the fibre first: cellulose takes heat and agitation, protein and synthetic take cool, gentle handling.",
          "realWorldExample": "A Tamale tailors' class washes a wool batakari smock cool with mild soap and lays it flat to dry, while cotton school shirts take a hot wash, because heat and rubbing would felt the wool they use gently."
        },
        {
          "title": "Colour Fastness and Ironing Temperatures",
          "content": "Before washing a coloured piece you test whether the dye runs: rub a hidden seam or hem firmly with a damp white cloth, or steam a swatch wrapped in a damp cloth and check for transferred colour. If dye moves, the item is washed alone, in cool water, quickly, and never soaked. Ironing then follows the fibre's heat tolerance. Synthetics and nylon need the lowest setting, around 110 degrees, or the sole plate will melt and glaze them. Silk and wool suit about 120 to 150 degrees, often with a press cloth and the iron on the wrong side to avoid a shiny mark on dark cloth. Cotton takes about 180 degrees and linen up to 210 degrees with steam. The discipline is to begin low, test on an offcut or turned-up hem, and raise the heat only as far as the fibre needs, because an iron hotter than the fibre requires does irreversible damage in a single pass.",
          "bulletPoints": [
            "Damp-cloth rub or steam test on a hidden edge shows whether dye runs.",
            "Running colour: wash alone, cool, fast, never soak.",
            "Synthetics about 110 degrees; silk and wool about 120 to 150 degrees.",
            "Cotton about 180 degrees; linen up to 210 degrees, often with steam.",
            "Iron heat-sensitive cloth on the wrong side or through a press cloth."
          ],
          "keyTakeaway": "Test the dye, then start the iron low and raise it only to what the fibre needs.",
          "realWorldExample": "A Makola cloth trader rubs a hidden hem of a bright cotton print with a damp white cloth; colour lifts, so she warns the buyer to wash it alone in cool water before it stains other clothes."
        },
        {
          "title": "Starch, Sizing and Safe Storage",
          "content": "Starch and sizing change the hand of a fabric. Starch is a surface stiffener brushed or dipped onto damp cotton and linen so collars, cuffs and dish towels press crisp; sizing is a heavier filler used in mill finishing to give body and weight. Both attract moisture and pests, and a heavily starched cloth left packed becomes brittle as the starch crystals work into the fibre, so for long-term storage a garment is cleaned but left unstarched. Storage cloth must be clean, dry and wrapped in acid-free material. Newspaper ink, cardboard acid and the plasticisers in polythene bags all yellow and weaken fabric, so pieces are folded in cotton muslin or unbuffered tissue paper, kept off the floor, and stored away from light because ultraviolet fades dye. Damp Ghanaian store rooms breed mildew, so ventilation and a fully dry cloth are essential before anything is packed.",
          "bulletPoints": [
            "Starch stiffens cotton and linen for collars and cuffs; sizing adds body in finishing.",
            "Heavily starched cloth stored long becomes brittle and draws silverfish.",
            "Wrap storage cloth in cotton muslin or unbuffered tissue, not newspaper or plastic.",
            "Keep cloth clean, fully dry, off the floor and away from light to stop mildew and fading.",
            "Never pack a piece that is even slightly damp."
          ],
          "keyTakeaway": "Starch for wear, skip starch for storage; wrap clean, dry cloth in acid-free cotton away from light.",
          "realWorldExample": "A school in Ho presses cotton uniforms with light starch for the day, but the heritage kente stored in the assembly hall is left unstarched, wrapped in muslin and kept off the damp floor."
        },
        {
          "title": "Pests, Mending and Respectful Conservation",
          "content": "Pests are the slow enemy in the tropics. Silverfish feed on the starch and size in fabric, clothes-moth larvae gnaw protein fibres such as wool and silk, and carpet beetles attack animal fibre and feather, so a store is kept clean of crumbs, ventilated, and scented with dried neem leaf or cedar that deters insects without wetting the cloth. Mending for longevity matches the patch to the original in fibre, weight and colour, works with the grain, and uses stitches that can be pulled out later without cutting sound cloth. Conservation of heritage cloth, such as a faded kente strip or a stamped adinkra piece, is more restrained still: the cloth is examined and photographed first, cleaned as gently as possible, weak areas supported from behind rather than cut away, and every repair kept reversible so a future conservator can undo it. Respect means doing the least that stabilises the piece, and documenting what was done.",
          "bulletPoints": [
            "Silverfish eat starch and size; clothes moths and carpet beetles eat protein fibre.",
            "Dried neem leaf or cedar deter pests without wetting the cloth.",
            "Match a mend to fibre, weight, colour and grain; use reversible stitches.",
            "Conservation supports weak cloth from behind rather than cutting it out.",
            "Photograph, document and keep every heritage repair reversible."
          ],
          "keyTakeaway": "Fight pests with dryness and neem; mend to match; conserve by supporting, documenting and staying reversible.",
          "realWorldExample": "A Kumasi museum assistant restores an old kente panel by photographing it, surface-cleaning gently, and couching weak strips onto a backing net with removable stitches, never cutting out the frayed warp."
        }
      ],
      "commonMistakes": [
        "Washing wool in hot water and wringing it, which felts the scales and shrinks the garment; wool is washed cool and dried flat.",
        "Ironing polyester or silk on a cotton or linen setting, melting or glazing the cloth; start low and test on an offcut.",
        "Skipping the colour-fastness test and soaking a running dye, which stains every other item in the wash.",
        "Storing cloth in a plastic bag or wrapped in newspaper, whose acid and plasticisers yellow and weaken the fibre; use cotton muslin.",
        "Packing a slightly damp Ghanaian-store cloth, which mildews and rots; ensure the piece is fully dry and the room ventilated.",
        "Cutting out weak areas of a heritage kente cloth instead of supporting them from behind, destroying irreversible original fibre."
      ],
      "wassceExamTips": [
        "Paper 1 objectives test the numbers: know that synthetics iron near 110 degrees and linen up to 210 degrees, and that wool felts under heat and agitation.",
        "On Paper 2 a care question asks you to plan washing and storage for a named fibre; state the temperature, the detergent type and the wrap, and give the reason.",
        "Paper 3 practical can ask for a colour-fastness test or a mended sample; the method line and a neat reversible stitch carry the marks.",
        "For conservation, examiners credit the words reversible, documented and support rather than cut, so use that vocabulary.",
        "Use an examiner's eye: a shiny iron mark, a felted wool or a yellowed plastic-stored cloth is an automatic loss of the handling-material mark."
      ],
      "summaryChecklist": [
        "Can I choose a washing method, water temperature and detergent for cotton, wool, silk and synthetic fibres?",
        "Can I carry out a colour-fastness test and explain what to do when dye transfers?",
        "Can I set the correct ironing temperature per fibre and protect heat-sensitive cloth?",
        "Can I use starch and sizing for a crisp finish and explain why they are avoided in long-term storage?",
        "Can I plan pest control, safe storage and a reversible mending or conservation repair for heritage cloth?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-tx-texcare-1",
        "title": "Washing and Pressing a Mixed-Fibre Wardrobe",
        "problem": "A school store holds cotton uniforms, a wool smock and a polyester shirt. Plan a safe wash, colour test and pressing routine for all three.",
        "stepByStepSolution": [
          "(M1) Identify each fibre first: cotton is cellulose, wool is protein, polyester is synthetic, and each sets its own wash rule.",
          "(M1) Do a colour-fastness test on a hidden hem of each coloured piece by rubbing with a damp white cloth; any dye that lifts is washed alone and cool.",
          "(M1) Wash cotton warm to hot with firm agitation, wool cool with mild detergent and no wringing, polyester warm with detergent then cool dry.",
          "(A1) Dry the wool smock flat so its weight does not stretch it, and hang cotton and polyester to dry away from strong sun.",
          "(M1) Press with heat matched to fibre: polyester about 110 degrees on the wrong side, wool about 130 degrees through a press cloth, cotton about 180 degrees.",
          "(A1) Test each iron setting on an offcut or turned-up hem before touching the garment face, and the fibres press clean with no glaze or shine."
        ],
        "keyTakeaway": "Fibre decides everything: test the dye, match the wash, and raise the iron only to the heat the cloth can take."
      },
      {
        "id": "ex-shs3-tx-texcare-2",
        "title": "Conserving a Faded Kente Panel",
        "problem": "An old kente panel in a school collection has frayed warp ends and a weak strip. Show a respectful conservation routine.",
        "stepByStepSolution": [
          "(M1) Photograph and write a condition note for the panel before touching it, recording every frayed end and weak area.",
          "(M1) Surface-clean gently with a low-suction vacuum through a screen or a soft brush, never wet-washing an unknown dye.",
          "(M1) Support the weak strip from behind on a colour-matched backing cloth rather than cutting it out.",
          "(M1) Couch the frayed warp ends down with fine, removable stitches worked through the backing so nothing original is trimmed.",
          "(A1) Keep the repair fully reversible: every stitch can be lifted by a future conservator without cutting sound cloth.",
          "(A1) Re-wrap the panel in clean cotton muslin with dried neem leaf and store it flat, dry and away from window light."
        ],
        "keyTakeaway": "Document, clean gently, support from behind, stitch reversibly, then store dark, dry and pest-guarded."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-tx-textile-care",
      "topicId": "shs3-tx-t2-textile-care-conservation",
      "title": "Textile Care and Conservation Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-texcare-1",
          "quizId": "quiz-shs3-tx-textile-care",
          "questionText": "Why is wool washed in cool water without wringing?",
          "optionA": "Hot water dissolves the keratin completely",
          "optionB": "Heat and rubbing lock the fibre scales and felt the cloth",
          "optionC": "Wool dye only sets in cold water",
          "optionD": "Wringing removes the natural sizing permanently",
          "correctOption": "B",
          "subConcept": "Protein-fibre washing",
          "explanation": "Wool fibres carry overlapping scales that interlock under heat and agitation, so the cloth felts and shrinks; cool, gentle handling prevents this. Wool dye is not the reason, and keratin does not dissolve in a wash.",
          "remediationTip": "Picture wool as scales: heat plus rubbing zips them shut, which is felting."
        },
        {
          "id": "q-tx-texcare-2",
          "quizId": "quiz-shs3-tx-textile-care",
          "questionText": "Which ironing temperature is correct for linen?",
          "optionA": "About 110 degrees",
          "optionB": "About 130 degrees",
          "optionC": "About 150 degrees",
          "optionD": "Up to about 210 degrees",
          "correctOption": "D",
          "subConcept": "Ironing temperatures by fibre",
          "explanation": "Linen is a strong cellulose fibre that needs high heat, up to roughly 210 degrees, often with steam. 110 degrees suits synthetics and 130 to 150 suits wool and silk, so those settings would not press linen.",
          "remediationTip": "Rank the fibres by heat: synthetic lowest, then silk and wool, then cotton, then linen highest."
        },
        {
          "id": "q-tx-texcare-3",
          "quizId": "quiz-shs3-tx-textile-care",
          "questionText": "What does a colour-fastness test check?",
          "optionA": "Whether the dye runs onto another cloth when damp or steamed",
          "optionB": "Whether the fabric will shrink in hot water",
          "optionC": "Whether the fibre will melt under an iron",
          "optionD": "Whether the cloth is acid-free for storage",
          "correctOption": "A",
          "subConcept": "Dye stability",
          "explanation": "The colour-fastness test rubs or steams a hidden edge with a white cloth to see if dye transfers; if it moves the piece must be washed alone and cool. Shrinkage, melting and acidity are separate tests.",
          "remediationTip": "Colour-fastness is about running dye; the damp white cloth is the giveaway."
        },
        {
          "id": "q-tx-texcare-4",
          "quizId": "quiz-shs3-tx-textile-care",
          "questionText": "Which pest primarily feeds on the starch and size in stored fabric?",
          "optionA": "Clothes moth",
          "optionB": "Carpet beetle",
          "optionC": "Silverfish",
          "optionD": "Wool-bear",
          "correctOption": "C",
          "subConcept": "Storage pests",
          "explanation": "Silverfish eat the starch and size in fabric. Clothes moths and carpet beetles attack protein fibres such as wool and silk, so they are not the starch feeders.",
          "remediationTip": "Link silverfish to starch; if it is the stiffener being eaten, it is silverfish."
        },
        {
          "id": "q-tx-texcare-5",
          "quizId": "quiz-shs3-tx-textile-care",
          "questionText": "What is the correct way to treat a weak strip in an old kente panel during conservation?",
          "optionA": "Cut it out and sew in a bright new replacement",
          "optionB": "Machine-stitch over it tightly to hold it",
          "optionC": "Soak the panel in hot detergent to clean it",
          "optionD": "Support it from behind with reversible stitches",
          "correctOption": "D",
          "subConcept": "Reversible conservation",
          "explanation": "Conservation supports weak original cloth from behind with removable stitches, keeping the repair reversible and the historic fibre intact. Cutting, hard machine stitching or hot soaking all destroy or distort original material.",
          "remediationTip": "The conservation rule is reversible and supportive; never remove sound old cloth."
        }
      ]
    }
  },
  {
    "id": "shs3-tx-t3-wassce-textiles-project",
    "subjectId": "textiles",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 4,
    "title": "WASSCE Textiles: Project Planning and Portfolio",
    "description": "Reading the practical brief, testing samples and building a cost sheet, producing a finished garment or fabric, mounting the presentation, planning the practical hours and appraising the work against the WAEC marking criteria.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Every WASSCE textiles project starts with the brief: underline the required wearer, use, occasion, fabric family and finish, and write a one-sentence design statement before cutting anything.\n• Research the target wearer, the Ghanaian market context, and the technique bank, and record the sources honestly in the portfolio; a copied picture with no citation weakens the design argument.\n• Thumbnail studies are quick small sketches of many ideas; three or four are developed to larger roughs, and one is chosen for the final with a written reason tied to the brief.\n• Sample making proves the plan works: cut small test pieces of the fabric and technique (smocking, dye, seam, fastening) and evaluate them before committing to the full length.\n• A fabric swatch card carries the chosen cloth, the thread, trims and fastenings, and the finished manipulated sample, all pinned to one board with labels.\n• A cost sheet lists every material by quantity and current Ghana market price in GH cedis, adds an allowance for thread, trims and packaging, then sums to a total; a labour line is separate and must not be double-counted.\n• A time plan across the practical hours works backwards from the presentation slot: cutting, construction, decoration, mounting, clean-up, leaving a buffer for drying and pressing.\n• Construction follows the correct order: press the fabric, cut on grain, stay and mark, build the structure, do the decoration last, press as you go, and finish edges so the wrong side is as neat as the right.\n• Mounting for presentation is on acid-free card with linen tape or corners so the piece lies flat, is not sticky-glued, and is captioned with the technique, fibre, cost, and design statement.\n• Self-appraisal uses the WAEC rubric words: handling of materials, creativity and originality, appropriateness to the brief, finish and presentation, and time management.\n• A portfolio of textile work sequenced for the exhibition or apprenticeship application opens with the strongest piece, groups by technique, and closes with the finished presented project.\n• Common project failures are unplanned dye drying time, a seam allowance that was too small and unravelled, and a mount that buckles because glue was painted directly onto cloth.",
    "detailedNotes": {
      "overview": "This topic turns all the SHS 3 textiles skills into the shape of the WASSCE practical project. The candidate decodes a brief, plans a design argument, makes and tests samples, builds a costed time plan, produces a finished garment or fabric, mounts the presentation and appraises the result against the WAEC criteria. It is deliberately the last topic in the textiles strand because it uses smocking, printing, beading, pattern drafting and care work as tools inside a single assessed piece. Success is not raw talent but a disciplined sequence of planning, testing, making and presenting that an examiner can follow on the board and in the file.",
      "introduction": "Approach the project in a fixed order. First, read the brief twice and mark every requirement in words; second, research and produce thumbnail studies and choose one with a written reason; third, make samples and test them for size, colour and hand; fourth, cost the work in current GH cedis and set out a time plan working backwards from the practical hours; fifth, construct with correct sequence and pressing discipline; sixth, mount, caption and self-appraise against the WAEC rubric. Skipping the sample test or the time plan is where most candidates lose marks.",
      "realWorldContext": "A SHS 3 candidate at a senior high school in Kumasi receives the WASSCE textiles brief early in the practical hours: to design and make a child's smocked day-tunic for a market stall in Koforidua, in cotton, using one manipulation technique. She sketches four thumbnails, picks one for the Koforidua wearer and price band, tests her smocking reduction on a 30 cm lawn strip before cutting, writes a cost sheet at Makola and Kejetia prices in GH cedis, and lays out a three-hour plan backwards from the presentation slot so she can press and mount on time. A parallel candidate in Tamale designs a shirred batakari cuff set; both present their boards with the same rubric labels and self-appraise honestly.",
      "objectives": [
        "Decode a WASSCE textiles brief into a one-sentence design statement that names the wearer, use, fabric and technique",
        "Produce thumbnail studies, develop one, and justify the choice against the brief",
        "Make and test manipulation, dye and seam samples before committing to the full length",
        "Build an honest cost sheet in GH cedis and a backwards time plan across the practical hours",
        "Construct, mount, caption and self-appraise a finished garment or fabric against the WAEC marking criteria"
      ],
      "sections": [
        {
          "title": "Reading the Brief and Building the Design Argument",
          "content": "The brief is a contract, and the first job is to read it like one. Underline every named requirement: who will wear or use the piece, the occasion or setting, the fabric family the paper expects, the technique or combination of techniques required, and any finish such as fastening or surface decoration. Convert the underlines into a one-sentence design statement that could not fit any other candidate's work, for example a smocked cotton day-tunic for a child of five to seven, made for the Koforidua market, priced for a GH cedi band a trading mother can pay. Research follows the statement: sketch the wearer and setting, look at real Ghana examples such as Bonwire kente strips, Afieka batik, or Tailored smocks from Tamale, and note sources honestly. Only then do thumbnails start. Roughly eight to twelve small quick sketches explore variations; three are developed into larger roughs showing the manipulation and the fastening clearly; and one is chosen with a written reason tied back to the underlined words in the brief.",
          "bulletPoints": [
            "Underline the wearer, use, occasion, fabric family, technique and required finish.",
            "Write a one-sentence design statement specific enough that no other project fits it.",
            "Research real Ghana sources: Bonwire kente, Afieka batik, Tamale smocks, Makola traders.",
            "Draw eight to twelve thumbnails, develop three roughs, choose one with a written reason.",
            "Cite references honestly; a copied picture with no source weakens the argument."
          ],
          "keyTakeaway": "Decode the brief, write a tight design statement, then let thumbnails prove one route is the best fit.",
          "realWorldExample": "A Kumasi candidate underlines child, day-tunic, cotton and one manipulation on the WASSCE brief, then writes a design statement naming a five-year-old Koforidua market wearer so her smocking choice and price band are decided from the start."
        },
        {
          "title": "Sampling, Testing and Costing",
          "content": "Sampling is what separates a safe project from a guess. Small test pieces of fabric answer three questions: does the manipulation reduce to the size the pattern needs, does the colour or dye fastness hold after washing, and does the hand suit the wearer. A smocking sample is measured before and after gathering to confirm the take-up matches the plan; a dye sample is wrapped in a damp white cloth and steamed to check for running; a seam sample confirms that the seam allowance you wrote down actually fits the machine and does not fray through. Alongside the samples a swatch card collects the chosen cloth, matching thread, trims, fastenings and the manipulated finished sample, all pinned under a label. The cost sheet is written next and must be honest: each material in quantity, priced at the current Ghana market rate in GH cedis, with a line for thread, trims, packaging and a separate allowance for tool wear. Labour is listed separately and never folded into the material total. A realistic cost sheet in GH cedis tells an examiner the piece could actually be produced for sale.",
          "bulletPoints": [
            "Sample to answer three questions: reduction, colour fastness, hand against wearer.",
            "Measure a smocking sample before and after to confirm the take-up matches the plan.",
            "Steam-test a dye swatch in a damp cloth to see if colour runs before cutting.",
            "Mount the swatch card: cloth, thread, trims, fastenings, manipulated sample, all labelled.",
            "Cost at real Makola or Kejetia prices in GH cedis, keep labour separate from materials."
          ],
          "keyTakeaway": "Samples test the plan; the swatch card proves it; the cost sheet makes it sellable.",
          "realWorldExample": "A Tamale candidate shirringsamples her cuff elastic before cutting, steam-tests the indigo on a scrap of the lawn, and prices every metre of cotton at current Kejetia rates in GH cedis on her cost sheet."
        },
        {
          "title": "Time Planning Across the Practical Hours",
          "content": "The WASSCE textiles practical runs a long block of hours, and candidates lose marks because they planned production but not presentation. Work backwards: fix the moment the board must be mounted and captioned, then subtract clean-up, then pressing and finishing, then decoration, then construction, then cutting and marking. Dye and paste resist need drying time that overlaps with other steps, so plan them early in the block and use their waiting time for samples or the swatch card. Build a buffer, ideally twenty to thirty minutes, before the presentation slot, because a project pressed at the last minute buckles and a mount glued in a hurry creases. Keep a simple written schedule in the portfolio: start time, task, end time, and a short note of what actually happened. Examiners reading the file can see the sequence of decisions, and honest time notes turn a slipped schedule into evidence of self-management rather than an unexplained gap.",
          "bulletPoints": [
            "Work backwards from the presentation slot, not forwards from the brief.",
            "Plan dye and paste drying time early and overlap it with sampling.",
            "Leave a twenty to thirty minute buffer for pressing and clean-up.",
            "Record a written schedule with start, task, end and a note of what actually happened.",
            "Do not fold decoration in after mounting; mount after decoration is finished."
          ],
          "keyTakeaway": "Backwards from presentation, dye early, buffer built in, and every line written down.",
          "realWorldExample": "A Ho candidate starts batik waxing in the first hour while the indigo dip dries, uses the drying window to shirr her swatch card, and reserves the last thirty minutes for pressing and mounting the board before the presentation bell."
        },
        {
          "title": "Construction, Mounting and Self-Appraisal",
          "content": "Construction follows a fixed order for a reason. Press the fabric before cutting to remove creases that throw off measurement, cut on the true grain so the piece hangs straight, stay-stitch curved edges, mark with a water-soluble pen, build the structure first (darts, seams, fastening), do decoration last so it is not caught in seams, and press at every stage. A finished garment is judged on the inside as much as the outside, so overcast or bind the seam allowances and check that the wrong side is as tidy as the face. Mounting for the presentation is on acid-free card with linen tape or cloth corners; cloth is never glued directly, because the adhesive bleeds through and buckles the fabric. Caption every element on the board and on the portfolio spine with the technique, the fibre, the cost and the design statement. Self-appraisal at the end reads the WAEC criteria by name: handling of materials, creativity and originality, appropriateness to the brief, quality of finish, presentation of the board, and time management. Honest notes, including what would change next time, are credited as evidence of design judgement, not as failure.",
          "bulletPoints": [
            "Press, cut on grain, stay and mark, build structure, decorate last, press as you go.",
            "Finish seams so the wrong side is as neat as the right.",
            "Mount on acid-free card with linen tape; never glue cloth directly.",
            "Caption the technique, fibre, cost and design statement on every element.",
            "Appraise against the WAEC rubric words and note what would change next time."
          ],
          "keyTakeaway": "Build in sequence, mount with tape not glue, caption every piece, and appraise by rubric word.",
          "realWorldExample": "A Cape Coast candidate presses her cotton lawn before cutting, overcasts the lining seams, mounts the finished tunic on acid-free card with linen tape corners, and writes an honest appraisal noting that next time she would allow a longer smocking drying window."
        }
      ],
      "commonMistakes": [
        "Cutting into the full length of fabric before testing the smocking or dye sample, then discovering the take-up or fastness was wrong; sample first, cut second.",
        "Folding labour into the material cost so the price looks doubled; a real cost sheet lists labour separately at current Ghana market rates.",
        "Painting glue straight onto the cloth when mounting, which bleeds through and buckles the fabric; use linen tape or cloth corners instead.",
        "Leaving the presentation and mounting to the last five minutes, so the board is crooked and unlabelled; work the time plan backwards from the presentation slot.",
        "Using a dull rotary blade or blunt shears to cut, which drags and frays the grain and spoils the finished piece; always cut with a sharp edge.",
        "Missing the seam allowance on a curved neckline so it unravels at the fitting; check every allowance against the pattern before stitching."
      ],
      "wassceExamTips": [
        "Paper 2 (design and planning) marks the brief decoded, the thumbnails, the sample card, the cost sheet and the time plan as separate items; show each on a labelled sheet so the examiner can award each line.",
        "Paper 3 practical awards marks for handling of materials, creativity, appropriateness to the brief and finish; a technically safe piece that matches the brief beats a flashy piece that misses it.",
        "The board must speak without you: technique, fibre, cost and design statement captions carry the marks before the examiner reads the file.",
        "Keep every sample, offcut and rejected thumbnail in the portfolio; wasted experiments credited for method show judgement.",
        "Time-check against the plan on the wall of the workroom: an examiner notes when a candidate hits each milestone honestly, and slipped timing is only penalised when unacknowledged."
      ],
      "summaryChecklist": [
        "Can I decode the brief into a one-sentence design statement that names the wearer, use, fabric and technique?",
        "Can I produce thumbnails, three developed roughs and one chosen design with a written reason tied to the brief?",
        "Can I test manipulation, dye fastness and seam samples before cutting the full length and mount them on a swatch card?",
        "Can I write an honest cost sheet in GH cedis and a backwards time plan across the practical hours?",
        "Can I construct, mount, caption and self-appraise the finished project against the WAEC marking criteria?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-tx-wassceproj-1",
        "title": "Decoding a Brief into a Planned Project",
        "problem": "The WASSCE brief asks for a smocked cotton day-tunic for a child aged five to seven, made for sale at the Koforidua market, priced in GH cedis. Plan the project up to the point of cutting.",
        "stepByStepSolution": [
          "(M1) Underline on the brief: wearer (child 5 to 7), garment (day-tunic), fibre (cotton), technique (smocking), use (market sale).",
          "(M1) Write a design statement naming the wearer, technique and market price band so the choice is constrained from the start.",
          "(M1) Research real Ghana examples: photographs of Koforidua children's tunics, a Bonwire kente trim idea, and a Makola fabric price check.",
          "(M1) Draw eight thumbnails, develop three roughs showing the smocked yoke and neck fastening, and select one with a written reason tied to the underlined words.",
          "(M1) Cut a 30 cm cotton lawn strip, gather it and measure the reduced width to confirm the smocking take-up matches the pattern.",
          "(M1) Steam-test the dye swatch in a damp white cloth; no colour lifts, so the plan is safe to proceed.",
          "(A1) Build the cost sheet at current Kejetia and Koforidua prices in GH cedis and set the backwards time plan; only then cut the full length."
        ],
        "keyTakeaway": "Decode, state, research, sample, cost and time-plan in that order; cut only when every line is proven."
      },
      {
        "id": "ex-shs3-tx-wassceproj-2",
        "title": "Constructing, Mounting and Appraising the Board",
        "problem": "The finished tunic must be constructed, mounted on the presentation board and appraised against the WAEC criteria before the practical session ends. Plan the closing sequence.",
        "stepByStepSolution": [
          "(M1) Press the cotton lawn flat before cutting, then cut on the true grain with sharp shears so the edges do not drag.",
          "(M1) Build structure first: darts, side seams, neck fastening; press at each stage.",
          "(M1) Do the smocking decoration last so it is not caught in a seam, and overcast seam allowances so the inside is as tidy as the face.",
          "(M1) Mount the finished tunic on acid-free card with linen tape at the shoulders, never glue, so it lies flat and is reversible.",
          "(M1) Caption the board with the technique (English smocking), the fibre (cotton lawn), the cost in GH cedis, and the design statement.",
          "(A1) Present with the swatch card, samples, cost sheet and time plan filed behind the board in labelled order.",
          "(A1) Self-appraise against the rubric words (handling of materials, creativity, appropriateness, finish, presentation, time management) and note what would change next time."
        ],
        "keyTakeaway": "Construction, mount with tape, caption every piece, and appraise by rubric word in front of the examiner."
      }
    ],
    "quiz": {
      "id": "quiz-shs3-tx-wassce-project",
      "topicId": "shs3-tx-t3-wassce-textiles-project",
      "title": "WASSCE Textiles Project Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-tx-wassceproj-1",
          "quizId": "quiz-shs3-tx-wassce-project",
          "questionText": "What is the first action on receiving a WASSCE textiles brief?",
          "optionA": "Underline every requirement and write a one-sentence design statement",
          "optionB": "Cut a metre of cotton and start the smocking grid",
          "optionC": "Draw the presentation board frame",
          "optionD": "Price the project at Makola rates in GH cedis",
          "correctOption": "A",
          "subConcept": "Brief decoding",
          "explanation": "Reading the brief and turning it into a tight design statement comes before any making. Cutting fabric, drawing the board or pricing before decoding risks a finished piece that misses the question.",
          "remediationTip": "Read twice, underline once, write the statement, then move."
        },
        {
          "id": "q-tx-wassceproj-2",
          "quizId": "quiz-shs3-tx-wassce-project",
          "questionText": "Why is a 30 cm lawn smocking sample measured before and after gathering?",
          "optionA": "To check the colour fastness of the dye",
          "optionB": "To confirm the take-up matches the pattern size",
          "optionC": "To test the iron temperature needed",
          "optionD": "To decide which thread colour to use",
          "correctOption": "B",
          "subConcept": "Sample testing",
          "explanation": "Measuring before and after the gather proves the reduction, so the smocked panel actually fits the pattern piece. Fastness, iron heat and thread colour are tested separately and by different means.",
          "remediationTip": "A sample is a plan rehearsed at one-tenth the cost; measure the size you are relying on."
        },
        {
          "id": "q-tx-wassceproj-3",
          "quizId": "quiz-shs3-tx-wassce-project",
          "questionText": "A WASSCE time plan across the practical hours should be built by:",
          "optionA": "Starting from the brief and adding tasks forward",
          "optionB": "Copying the schedule used by a friend",
          "optionC": "Estimating freely and adjusting on the day",
          "optionD": "Working backwards from the presentation slot with a buffer built in",
          "correctOption": "D",
          "subConcept": "Time planning",
          "explanation": "A backwards plan from the moment the board must be mounted ensures every earlier task ends in time and leaves a buffer for pressing and clean-up. Forward plans always overrun the presentation, and copying or guessing removes the examiner evidence.",
          "remediationTip": "Fix the last minute first, then subtract each task in order; keep a twenty to thirty minute buffer."
        },
        {
          "id": "q-tx-wassceproj-4",
          "quizId": "quiz-shs3-tx-wassce-project",
          "questionText": "Which is the correct way to attach a finished cloth to a presentation board?",
          "optionA": "Paint white glue across the reverse of the fabric",
          "optionB": "Use linen tape or cloth corners on acid-free card",
          "optionC": "Sew the cloth directly onto the card face",
          "optionD": "Staple through the visible face of the piece",
          "correctOption": "B",
          "subConcept": "Mounting discipline",
          "explanation": "Linen tape or cloth corners on acid-free card hold the piece flat, let air circulate, and stay reversible. Glue bleeds through, sewing puckers the face, and stapling destroys the work.",
          "remediationTip": "A museum-grade mount is taped and reversible; anything you cannot undo is wrong."
        },
        {
          "id": "q-tx-wassceproj-5",
          "quizId": "quiz-shs3-tx-wassce-project",
          "questionText": "Which set of words matches the WAEC practical rubric used for self-appraisal?",
          "optionA": "Colour, mood, contrast, scale, texture",
          "optionB": "Speed, accuracy, tidiness, patience, effort",
          "optionC": "Handling of materials, creativity, appropriateness, finish, presentation, time management",
          "optionD": "Sketch, sample, plan, make, sell",
          "correctOption": "C",
          "subConcept": "Marking criteria",
          "explanation": "The WAEC textiles practical rubric names handling of materials, creativity and originality, appropriateness to the brief, finish, presentation and time management. The other lists are art vocabulary, workroom virtues or project stages, not the marking rubric.",
          "remediationTip": "Memorise the rubric words verbatim; an appraisal that quotes them shows the examiner the criteria were understood."
        }
      ]
    }
  }
];
