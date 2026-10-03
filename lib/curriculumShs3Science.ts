// Ghanaian SHS 3 Integrated Science Curriculum (WASSCE Candidates)
// Based on WAEC / WASSCE Ghana Senior High School Teaching Syllabus
// 16 Comprehensive Topics covering Terms 1, 2, and 3 with Videos, Worked Examples, and Quizzes

import { CurriculumTopic } from './types';
import { SHS3_SCIENCE_QUIZZES } from './curriculumShs3ScienceQuizzes';

export const SHS3_SCIENCE_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs3-sci-t1-excretion-kidney",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Excretion, Osmoregulation & The Human Kidney",
    "description": "Organs of excretion (kidneys, lungs, liver, skin), gross and microscopic structure of the kidney, nephron ultrafiltration, selective reabsorption, osmoregulation by ADH, kidney disorders, and hemodialysis.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=cc8SQUfqCCU",
    "youtubeId": "cc8SQUfqCCU",
    "keyNotes": "• Excretion vs Egestion:\n  - Excretion: Elimination of toxic metabolic waste products of cellular metabolism (urea, uric acid, CO₂).\n  - Egestion: Elimination of undigested, unabsorbed food material as feces through the anus.\n• Nephron Micro-Anatomy & Urine Formation:\n  1. Ultrafiltration: High hydrostatic pressure in the glomerulus forces water, glucose, mineral salts, amino acids, and urea through basement membrane podocytes into Bowman's capsule (forming glomerular filtrate). Blood cells and large plasma proteins are retained in capillaries.\n  2. Selective Reabsorption: In Proximal Convoluted Tubule (PCT), 100% of glucose and amino acids, plus ~80% of water and Na⁺, are actively reabsorbed back into peritubular capillaries.\n  3. Loop of Henle: Creates hypertonic medulla gradient for water conservation.\n  4. Distal Tubule & Collecting Duct: Fine-tunes water and electrolyte balance under hormonal control.\n• Osmoregulation & Antidiuretic Hormone (ADH):\n  - Secreted by posterior pituitary when hypothalamus detects low blood water potential (high osmotic pressure).\n  - ADH increases water permeability of collecting ducts, stimulating water reabsorption by osmosis and yielding small volumes of concentrated urine.\n• Renal Failure & Hemodialysis:\n  - Artificial kidney machine circulates blood past a counter-current dialyzing fluid across a cellophane semipermeable membrane, removing urea and excess electrolytes while retaining blood proteins.",
    "detailedNotes": {
      "introduction": "Excretion removes toxic nitrogenous wastes and maintains osmotic and acid-base homeostasis in internal body fluids.",
      "realWorldContext": "In Ghana, chronic kidney disease (CKD) is on the rise due to poorly managed hypertension, diabetes, and indiscriminate use of unstandardized herbal preparations and NSAID painkillers. The Renal Units at Korle-Bu and Komfo Anokye Teaching Hospitals provide life-saving hemodialysis treatments.",
      "objectives": [
        "Differentiate between excretion, secretion, and egestion with biological examples",
        "Diagram and label the gross internal structure of the kidney and the microscopic nephron",
        "Explain ultrafiltration, selective reabsorption, and the counter-current mechanism in urine formation",
        "Describe the osmoregulatory negative feedback mechanism mediated by ADH",
        "Explain the principles of hemodialysis and kidney transplantation for renal failure"
      ],
      "sections": [
        {
          "title": "Ultrafiltration & Selective Reabsorption Mechanisms",
          "content": "Urine formation begins with non-selective pressure filtration followed by highly selective active tubular recovery.",
          "bulletPoints": [
            "Hydrostatic Pressure: The afferent arteriole entering the glomerulus is wider in diameter than the exiting efferent arteriole, creating high hydrostatic pressure.",
            "Glomerular Filtrate: Contains water, glucose, salts, and urea at identical concentrations to blood plasma, but lacks red blood cells and large proteins (albumin).",
            "PCT Adaptations: Microvilli brush border to expand surface area, abundant mitochondria to supply ATP for active sodium-glucose co-transport."
          ],
          "keyTakeaway": "Ultrafiltration separates molecules by size; selective reabsorption recovers vital nutrients actively against concentration gradients.",
          "realWorldExample": "A person suffering from untreated diabetes mellitus exhibits glycosuria (glucose in urine) because filtered glucose exceeds the transport maximum of the PCT carrier proteins."
        }
      ],
      "wassceExamTips": [
        "Always specify that the afferent arteriole is wider than the efferent arteriole to explain the origin of high glomerular hydrostatic pressure.",
        "Distinguish clearly between excretion (cellular wastes) and egestion (undigested feces).",
        "When explaining ADH action: State that ADH increases permeability of the collecting duct to water, increasing water reabsorption."
      ],
      "commonMistakes": [
        "Listing feces as an excretory product (feces is egested, not a product of cellular metabolism).",
        "Stating that proteins are reabsorbed in the PCT (proteins never cross the glomerular basement membrane into the filtrate).",
        "Confusing diabetes mellitus (insulin deficiency) with diabetes insipidus (ADH deficiency causing watery polyuria)."
      ],
      "summaryChecklist": [
        "Can I trace the path of fluid from renal artery to urethra?",
        "Can I explain why glomerular filtrate contains glucose but normal urine contains none?",
        "Can I sketch a negative feedback loop showing how ADH restores blood water potential after dehydration?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-exc-1",
        "title": "Comparing Fluid Compositions Across the Nephron",
        "problem": "The table below shows concentrations (in g/100 cm³) of substances in Blood Plasma, Glomerular Filtrate, and Urine: Proteins (Plasma: 8.0, Filtrate: 0.0, Urine: 0.0); Glucose (Plasma: 0.10, Filtrate: 0.10, Urine: 0.0); Urea (Plasma: 0.03, Filtrate: 0.03, Urine: 2.0). Explain the physiological reasons for the changes in concentration of: (a) Proteins. (b) Glucose. (c) Urea.",
        "stepByStepSolution": [
          "Step 1: Proteins (8.0 → 0.0 → 0.0): Protein molecules (like albumin) are too large to pass through the fenestrations and basement membrane pores of the glomerulus during ultrafiltration. [A1]",
          "Step 2: Glucose (0.10 → 0.10 → 0.0): Glucose molecules are small and freely filtered into Bowman’s capsule; subsequently, 100% of glucose is actively reabsorbed by carrier proteins in the Proximal Convoluted Tubule back into blood capillaries. [M1, A1]",
          "Step 3: Urea (0.03 → 0.03 → 2.0): Urea is freely filtered; as water is reabsorbed throughout the loop of Henle and collecting duct, the remaining urea becomes highly concentrated in urine (~65-fold concentration increase). [M1, A1]"
        ],
        "keyTakeaway": "The nephron selectively retains vital proteins, reclaims all essential glucose, and concentrates toxic nitrogenous urea for excretion."
      },
      {
        "id": "ex-shs3-sci-exc-2",
        "title": "Hemodialysis Operating Principle",
        "problem": "Explain the working principles of an artificial kidney machine (hemodialysis), focusing on: (a) The semipermeable membrane. (b) The composition of the dialysate fluid. (c) The direction of fluid flow.",
        "stepByStepSolution": [
          "Step 1: Semipermeable membrane: Cellophane tubing allows small molecules (urea, uric acid, excess mineral ions) to diffuse through, while holding back large blood cells and plasma proteins. [A1]",
          "Step 2: Dialysate composition: Fresh dialyzing fluid contains optimal physiological concentrations of glucose and mineral salts, but contains zero urea. This sets up a steep concentration gradient for urea to diffuse out of blood into the dialysate. [M1, A1]",
          "Step 3: Counter-current flow: Blood and dialysate flow in opposite directions to maintain a continuous concentration gradient along the entire length of the dialyzer. [A1]"
        ],
        "keyTakeaway": "Dialysate fluid is formulated without urea to maximize waste extraction by passive diffusion while preventing loss of essential glucose and electrolytes."
      }
    ]
  },
  {
    "id": "shs3-sci-t1-nervous-coordination-brain",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Nervous System, Reflex Arcs, The Brain & Sense Organs",
    "description": "Central vs peripheral nervous systems, neuron histology, electrical action potentials, chemical synaptic transmission, spinal reflex arcs, gross anatomy of the brain, and the mammalian eye and ear.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=qPix_X-9t7E",
    "youtubeId": "qPix_X-9t7E",
    "keyNotes": "• Divisions of the Nervous System:\n  - Central Nervous System (CNS): Brain and spinal cord; integrating center.\n  - Peripheral Nervous System (PNS): Cranial and spinal nerves connecting CNS to receptors and effectors.\n• Neuron Structure & Types:\n  - Cell body (soma), dendrites (receive impulses), axon (transmits impulses away), myelin sheath (insulation), Nodes of Ranvier (saltatory conduction).\n  - Sensory neuron: Transmits impulses from sensory receptors to CNS.\n  - Relay neuron (Interneuron): Located in CNS; connects sensory to motor neurons.\n  - Motor neuron: Transmits impulses from CNS to effectors (muscles or glands).\n• The Synapse:\n  - Action potential arrives at axon terminal → calcium influx triggers synaptic vesicles to release neurotransmitter (acetylcholine) into synaptic cleft → binds to post-synaptic receptors → initiates new action potential.\n• Brain Functional Centers:\n  - Cerebrum: Conscious thought, intelligence, memory, voluntary motion, sensory perception.\n  - Cerebellum: Posture, balance, muscular coordination.\n  - Medulla Oblongata: Autonomic involuntary reflexes (cardiac heart rate, ventilation breathing rate, vasodilation, peristalsis, swallowing).\n  - Hypothalamus: Thermoregulation, osmoregulation, hunger, thirst, controls pituitary gland.",
    "detailedNotes": {
      "introduction": "The nervous system provides rapid, precise communication using electrical impulses and chemical neurotransmitters to coordinate behavioral and physiological responses.",
      "realWorldContext": "In Ghana, road traffic accidents causing traumatic brain injury (TBI) and spinal cord transection are managed at specialized neurosurgical units. Wearing motorcycle crash helmets prevents lethal damage to the cerebral cortex and brainstem.",
      "objectives": [
        "Diagram and label motor, sensory, and relay neurons",
        "Explain the mechanism of impulse transmission across a chemical synapse",
        "Trace the neurological pathway of a simple spinal reflex arc with a labeled cross-section",
        "Identify the structural regions of the human brain and assign physiological functions to each",
        "Explain the sensory physiology of the human eye (accommodation) and ear (balance and hearing)"
      ],
      "sections": [
        {
          "title": "The Reflex Arc & Spinal Cord Gray Matter",
          "content": "Reflexes provide automated survival mechanisms that protect the body against tissue damage.",
          "bulletPoints": [
            "Pathway: Stimulus → Receptor → Sensory neuron (entering via dorsal root ganglion) → Synapse with Relay neuron in spinal gray matter → Motor neuron (exiting via ventral root) → Effector muscle/gland → Response.",
            "Bypassing the conscious brain: The reflex completes entirely at the spinal cord level within milliseconds; impulses are simultaneously relayed up ascending tracts to the cerebrum, so pain is consciously registered only after withdrawal has occurred."
          ],
          "keyTakeaway": "The reflex arc provides rapid protective responses without requiring prior conscious brain processing.",
          "realWorldExample": "Accidentally stepping on a sharp sea-urchin spine at the beach causes instantaneous leg withdrawal before pain is consciously felt."
        }
      ],
      "wassceExamTips": [
        "In reflex arc diagrams, ensure the sensory neuron enters the DORSAL root and the motor neuron exits through the VENTRAL root.",
        "Distinguish clearly between the functions of the cerebrum (thinking/voluntary action) and cerebellum (balance/muscle coordination).",
        "State that synaptic transmission is strictly unidirectional because neurotransmitter vesicles exist only in the presynaptic bulb."
      ],
      "commonMistakes": [
        "Confusing motor neurons (carry impulses to effectors) with sensory neurons (carry impulses from receptors).",
        "Claiming that impulses jump across the synapse as electric sparks (they cross via chemical neurotransmitter diffusion).",
        "Confusing the myelin sheath with the axon itself."
      ],
      "summaryChecklist": [
        "Can I draw a motor neuron with dendrites, soma, axon, myelin sheath, and terminal knobs?",
        "Can I explain the 5 components of a reflex arc in chronological order?",
        "Can I list 3 distinct functions of the medulla oblongata?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-nerv-1",
        "title": "Chemical Synaptic Transmission Sequence",
        "problem": "Describe the sequence of events that enables a nerve impulse to cross from the axon terminal of a presynaptic neuron to the dendrite of a postsynaptic neuron.",
        "stepByStepSolution": [
          "Step 1: An electrical action potential arrives at the presynaptic axon terminal (synaptic knob). [B1]",
          "Step 2: Voltage-gated calcium channels open, causing an influx of calcium ions (Ca²⁺) into the presynaptic terminal. [M1]",
          "Step 3: Calcium causes synaptic vesicles to fuse with the presynaptic membrane, releasing neurotransmitter molecules (e.g. acetylcholine) into the synaptic cleft by exocytosis. [M1, A1]",
          "Step 4: Neurotransmitter diffuses across the narrow microscopic synaptic cleft. [B1]",
          "Step 5: Neurotransmitter binds to specific complementary protein receptors on the postsynaptic membrane, opening sodium ion channels. [M1]",
          "Step 6: Influx of sodium ions depolarizes the postsynaptic membrane, initiating a new action potential. [A1]",
          "Step 7: The enzyme acetylcholinesterase breaks down acetylcholine to prevent continuous unwanted stimulation. [A1]"
        ],
        "keyTakeaway": "Synaptic transmission is unidirectional because neurotransmitters are stored exclusively in the presynaptic terminal."
      },
      {
        "id": "ex-shs3-sci-nerv-2",
        "title": "Eye Accommodation for Near Vision",
        "problem": "Explain the physiological adjustments that occur in the human eye when a student shifts their gaze from the distant classroom chalkboard to read fine print in their textbook.",
        "stepByStepSolution": [
          "Step 1: Ciliary muscles in the ciliary body contract. [M1]",
          "Step 2: Contraction pulls the ciliary body forward and inward, releasing tension on the suspensory ligaments (ligaments become slack). [M1, A1]",
          "Step 3: Relieved of tension, the elastic crystalline lens bulges and becomes more spherical and convex. [A1]",
          "Step 4: The focal length of the lens decreases, increasing its refractive power. [M1]",
          "Step 5: Divergent light rays from the close textbook are refracted more sharply to focus precisely onto the fovea centralis of the retina. [A1]"
        ],
        "keyTakeaway": "For near vision: Ciliary muscles contract, suspensory ligaments slacken, lens becomes thicker and more convex."
      }
    ]
  },
  {
    "id": "shs3-sci-t1-endocrine-system-homeostasis",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Endocrine Glands, Hormonal Regulation & Homeostasis",
    "description": "Ductless endocrine glands and their hormones (pituitary, thyroid, pancreas, adrenals, gonads), mechanisms of hormonal control, blood glucose regulation by insulin and glucagon, thermoregulation, and negative feedback loops.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=eWHH9je2zG4",
    "youtubeId": "eWHH9je2zG4",
    "keyNotes": "• Endocrine System Characteristics:\n  - Ductless glands that secrete chemical messengers (hormones) directly into the bloodstream.\n  - Slower onset, longer duration of effect, and broader target tissue distribution compared to nervous coordination.\n• Major Hormones & Sources:\n  - Pituitary: TSH, ACTH, Growth Hormone, ADH, Oxytocin, FSH, LH.\n  - Thyroid: Thyroxine (regulates basal metabolic rate; contains iodine).\n  - Adrenal Medulla: Adrenaline (emergency \"fight or flight\"; elevates heart rate, blood glucose, dilates airways).\n  - Pancreas (Islets of Langerhans):\n    * Beta cells secrete Insulin: lowers blood glucose by converting glucose to glycogen (glycogenesis).\n    * Alpha cells secrete Glucagon: raises blood glucose by breaking glycogen down into glucose (glycogenolysis).\n• Homeostasis & Thermoregulation:\n  - Maintaining constant internal conditions (temperature ~37°C, pH ~7.4, glucose ~90 mg/100 cm³).\n  - Skin response to heat: Vasodilation of arterioles (increases heat radiation), profuse sweating (evaporative cooling), flattening of hair.\n  - Skin response to cold: Vasoconstriction (reduces radiation loss), shivering (metabolic heat production), piloerection (traps insulating air).",
    "detailedNotes": {
      "introduction": "Endocrine hormones regulate long-term metabolic growth, development, sexual reproduction, and minute-to-minute physiological homeostasis.",
      "realWorldContext": "Type 2 Diabetes Mellitus is a major chronic lifestyle condition in Ghana. Excessive consumption of sugar-sweetened drinks and sedentary lifestyles cause insulin resistance, requiring oral hypoglycemic medications and lifestyle interventions.",
      "objectives": [
        "Differentiate between endocrine (ductless) and exocrine glands with anatomical examples",
        "Identify principal endocrine glands, their hormones, and target organ physiological effects",
        "Explain blood glucose homeostasis using negative feedback regulation of insulin and glucagon",
        "Describe thermoregulatory mechanisms of the human skin in hot and cold environments"
      ],
      "sections": [
        {
          "title": "Negative Feedback Regulation of Blood Glucose",
          "content": "Blood glucose concentration is tightly regulated around 90 mg/100 cm³ by the antagonistic hormones insulin and glucagon.",
          "bulletPoints": [
            "Hyperglycemia (after meals): Beta cells secrete insulin → increases cellular uptake of glucose, stimulates glycogenesis in liver/muscle, promotes lipogenesis → blood glucose returns to normal.",
            "Hypoglycemia (during fasting/exercise): Alpha cells secrete glucagon → stimulates liver glycogenolysis and gluconeogenesis → glucose released into blood.",
            "Diabetes Mellitus: Inability to produce insulin (Type 1) or cellular resistance to insulin (Type 2), leading to persistent hyperglycemia, glycosuria, frequent urination (polyuria), and weight loss."
          ],
          "keyTakeaway": "Insulin lowers blood glucose; glucagon elevates it via antagonistic negative feedback.",
          "realWorldExample": "After eating a bowl of banku, the pancreas secretes a burst of insulin to convert surplus absorbed sugars into liver glycogen storage."
        }
      ],
      "wassceExamTips": [
        "When describing insulin action, specify that it stimulates the conversion of glucose into GLYCOGEN in the liver and muscle cells.",
        "Distinguish between vasoconstriction (narrowing of arterioles, reducing blood flow to skin surface) and vasodilation (widening of arterioles).",
        "State why the pancreas is both an endocrine and exocrine gland: it secretes digestive enzymes via ducts (exocrine) and hormones into blood (endocrine)."
      ],
      "commonMistakes": [
        "Confusing glucagon (the hormone) with glycogen (the insoluble carbohydrate storage molecule).",
        "Stating that capillaries constrict during cold weather (capillaries lack smooth muscle walls; it is the ARTERIOLES that constrict).",
        "Thinking adrenaline lowers blood sugar (adrenaline actually elevates blood sugar to supply muscles during emergencies)."
      ],
      "summaryChecklist": [
        "Can I diagram the blood glucose negative feedback cycle?",
        "Can I explain the physiological consequences of iodine deficiency in the diet?",
        "Can I explain why shivering generates internal heat?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-endo-1",
        "title": "Blood Glucose Negative Feedback Control",
        "problem": "A person eats a large plate of boiled yam. Trace the physiological events that restore their blood glucose concentration to its normal set-point.",
        "stepByStepSolution": [
          "Step 1: Digestion and absorption of starch in the yam cause blood glucose concentration to rise above normal (~90 mg/100 cm³). [B1]",
          "Step 2: The elevated glucose level is detected by chemoreceptors on the beta cells of the Islets of Langerhans in the pancreas. [M1]",
          "Step 3: Beta cells secrete the hormone insulin directly into the bloodstream. [A1]",
          "Step 4: Insulin binds to target cells (liver and skeletal muscle), increasing cell membrane permeability to glucose. [M1]",
          "Step 5: Insulin activates enzymes that convert excess glucose into insoluble glycogen for storage (glycogenesis). [A1]",
          "Step 6: Increased cellular respiration consumes additional glucose. [B1]",
          "Step 7: Blood glucose drops back to normal set-point, turning off further insulin release via negative feedback. [A1]"
        ],
        "keyTakeaway": "Insulin stimulates cellular glucose uptake and glycogen storage to restore normoglycemia."
      },
      {
        "id": "ex-shs3-sci-endo-2",
        "title": "Skin Thermoregulation in Cold Weather",
        "problem": "Explain how the human skin acts as an effector organ to prevent excessive heat loss during a cold Harmattan morning in Bolgatanga.",
        "stepByStepSolution": [
          "Step 1: Hypothalamic thermoreceptors detect a drop in core blood temperature and send sympathetic nerve impulses to the skin. [B1]",
          "Step 2: Vasoconstriction: Circular smooth muscles in the walls of dermal arterioles contract, narrowing their lumen. [M1]",
          "Step 3: Blood is diverted away from superficial skin capillaries toward deeper core vessels via arteriovenous shunt vessels, drastically reducing convective and radiant heat loss. [A1]",
          "Step 4: Sweat glands are inhibited, shutting down evaporative heat loss. [A1]",
          "Step 5: Piloerector muscles contract, causing body hairs to stand erect (goosebumps), trapping an insulating layer of still air next to the skin. [A1]"
        ],
        "keyTakeaway": "Vasoconstriction and suppression of sweating minimize heat loss to cold surroundings."
      }
    ]
  },
  {
    "id": "shs3-sci-t1-mammalian-reproduction-sti",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Mammalian Reproduction, Menstrual Cycle & STIs/HIV-AIDS",
    "description": "Male and female reproductive anatomy, spermatogenesis and oogenesis, the ovarian and uterine menstrual cycle, fertilization, embryonic development and placenta function, and sexually transmitted infections (STIs/HIV) prevention.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=_7rS_vcK5wM",
    "youtubeId": "_7rS_vcK5wM",
    "keyNotes": "• Male Reproductive Tract:\n  - Testes: Located in scrotum (2-3°C below core temperature); seminiferous tubules produce sperm; interstitial Leydig cells secrete testosterone.\n  - Epididymis: Stores and matures sperm.\n  - Vas deferens: Transports sperm to urethra during ejaculation.\n  - Accessory Glands (Seminal vesicles, Prostate gland, Cowper’s glands): Secrete alkaline seminal fluid rich in fructose, prostaglandins, and buffers that nourish and activate sperm.\n• Female Reproductive Tract & Menstrual Cycle:\n  - Ovaries: Produce ova and secrete estrogen and progesterone.\n  - Fallopian tubes (Oviducts): Ciliated tubes where fertilization occurs.\n  - Uterus: Thick muscular organ (myometrium) with vascular lining (endometrium) for embryo implantation.\n  - Hormonal Phases:\n    * Follicular phase (Days 1-13): Pituitary FSH stimulates follicle development; follicle secretes estrogen which repairs endometrium.\n    * Ovulation (Day 14): Surge in Luteinizing Hormone (LH) triggers release of mature egg.\n    * Luteal phase (Days 15-28): Ruptured follicle becomes Corpus Luteum, secreting Progesterone which maintains endometrium. If fertilization fails, corpus luteum degenerates, progesterone crashes, and menstruation begins.\n• Pregnancy & Placenta:\n  - Placenta: Exchanges O₂, glucose, amino acids, and antibodies from maternal blood to fetal blood; removes CO₂ and urea by diffusion without blood mixing. Produces hCG and progesterone.\n• STIs & HIV/AIDS:\n  - Syphilis (Treponema pallidum): Painless chancre sore, rashes, neurosyphilis.\n  - Gonorrhea (Neisseria gonorrhoeae): Pus discharge from urethra, burning urination, pelvic inflammatory disease (PID).\n  - HIV/AIDS: Retrovirus destroying CD4+ T-helper cells; transmitted by unprotected sex, infected blood, mother-to-child. Prevention: ABC strategy, latex condoms, Antiretroviral Therapy (ART).",
    "detailedNotes": {
      "introduction": "Reproduction guarantees the biological continuation of the species through sexual gametogenesis, internal fertilization, and intrauterine embryonic development.",
      "realWorldContext": "Adolescent reproductive health programs in Ghanaian Senior High Schools emphasize comprehensive sexuality education, delay of sexual debut, and barrier condom use to prevent teen pregnancies and curb HIV and syphilis transmission.",
      "objectives": [
        "Diagram and label the male and female reproductive systems and state organ functions",
        "Correlate pituitary hormones (FSH, LH) and ovarian hormones (estrogen, progesterone) with menstrual cycle events",
        "Describe the process of fertilization and the physiological roles of the placenta and amniotic fluid",
        "Identify the causal pathogens, symptoms, modes of transmission, and prevention of major STIs and HIV/AIDS"
      ],
      "sections": [
        {
          "title": "Hormonal Orchestration of the Menstrual Cycle",
          "content": "The 28-day menstrual cycle coordinates ovarian egg maturation with uterine endometrial readiness.",
          "bulletPoints": [
            "Days 1-5 (Menstruation): Low progesterone and estrogen cause shedding of the superficial endometrial layer.",
            "Days 6-13 (Proliferative phase): FSH matures a Graafian follicle; follicle secretes estrogen, rebuilding the endometrium.",
            "Day 14 (Ovulation): High estrogen triggers an LH surge, causing the mature follicle to rupture and release the secondary oocyte into the fallopian tube.",
            "Days 15-28 (Secretory phase): The corpus luteum secretes progesterone, making the endometrium glandular and vascular for implantation."
          ],
          "keyTakeaway": "The LH surge triggers ovulation on day 14; progesterone maintains the uterine lining for pregnancy.",
          "realWorldExample": "Modern fertility tracking mobile apps use basal body temperature shifts and cervical mucus changes to estimate the fertile window around day 14."
        }
      ],
      "wassceExamTips": [
        "Fertilization takes place in the Fallopian tube (oviduct), NOT in the uterus (the uterus is the site of implantation).",
        "State clearly that maternal and fetal blood do NOT mix directly in the placenta; exchange occurs across capillary membranes by diffusion.",
        "List two functions of amniotic fluid: protects fetus against mechanical shock and provides constant temperature."
      ],
      "commonMistakes": [
        "Stating that the fetus breathes in the womb (fetal lungs are non-functional; oxygen is obtained from maternal blood via the placenta).",
        "Confusing HIV (the viral pathogen) with AIDS (the clinical syndrome of advanced immune deficiency).",
        "Claiming that birth control pills prevent sexually transmitted infections (pills only prevent ovulation; only condoms prevent STIs)."
      ],
      "summaryChecklist": [
        "Can I sketch the female reproductive tract and label the site of fertilization versus implantation?",
        "Can I plot the fluctuating concentrations of estrogen, progesterone, LH, and FSH across a 28-day cycle?",
        "Can I list 4 distinct functions of the mammalian placenta?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-rep-1",
        "title": "Hormonal Feedback during Menstrual Cycle",
        "problem": "Explain what happens to: (a) The corpus luteum. (b) Progesterone levels. (c) The endometrium lining, if fertilization does NOT occur following ovulation.",
        "stepByStepSolution": [
          "Step 1: In the absence of fertilization, human chorionic gonadotropin (hCG) is not produced by an embryo. [B1]",
          "Step 2: Without hormonal support, the corpus luteum in the ovary degenerates into a fibrous scar called the corpus albicans. [M1, A1]",
          "Step 3: Degeneration of the corpus luteum causes a steep decline in circulating progesterone and estrogen levels. [A1]",
          "Step 4: Deprived of progesterone stimulation, spiral arterioles in the endometrium constrict, cutting off blood supply. [M1]",
          "Step 5: The functional layer of the endometrium breaks down and sloughs off with blood as menstrual flow (menstruation). [A1]"
        ],
        "keyTakeaway": "The drop in progesterone following corpus luteum regression triggers the onset of menstruation."
      },
      {
        "id": "ex-shs3-sci-rep-2",
        "title": "Placental Exchange Adaptations",
        "problem": "State four structural adaptations of the human placenta that facilitate efficient exchange of substances between maternal and fetal circulations.",
        "stepByStepSolution": [
          "1. Massive surface area: Thousands of branching chorionic villi project into maternal blood lacunae, providing a vast area for diffusion. [A1]",
          "2. Minimal diffusion distance: Maternal and fetal blood are separated only by a very thin placental membrane (one or two cell layers thick). [A1]",
          "3. Steep concentration gradient: Continuous maternal blood flow and fetal capillary circulation maintain high diffusion gradients for oxygen and nutrients. [A1]",
          "4. Counter-current flow: Maternal blood in intervillous spaces and fetal blood in villous capillaries flow in opposite directions to maximize diffusion exchange. [A1]"
        ],
        "keyTakeaway": "The placenta combines massive chorionic villi surface area with ultra-thin diffusion barriers for nutrient and gas exchange."
      }
    ]
  },
  {
    "id": "shs3-sci-t2-sound-waves-echoes",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 5,
    "title": "Sound Waves, Propagation, Speed of Sound, Echoes & Ultrasound",
    "description": "Production and transmission of longitudinal sound waves, speed of sound in solids, liquids, and gases, reflection of sound and echo calculations, reverberation control, pitch, loudness, timbre, and medical/industrial ultrasound.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=q9Wp8B0wN4A",
    "youtubeId": "q9Wp8B0wN4A",
    "keyNotes": "• Nature of Sound:\n  - Mechanical longitudinal waves consisting of alternating compressions (high pressure) and rarefactions (low pressure).\n  - Requires a material medium (cannot propagate in a vacuum).\n  - Speed of sound: Solids (~5,000 m/s in steel) > Liquids (~1,500 m/s in water) > Gases (~340 m/s in air).\n• Echoes & Sonar:\n  - An echo is the distinct reflection of sound from an obstacle.\n  - Echo distance formula: 2d = v × t → d = (v × t) / 2.\n  - Used in SONAR to map seabed depth, locate sunken ships, and detect fish shoals.\n• Characteristics of Musical Notes:\n  - Pitch: Governed by frequency (Hz). High frequency = high pitch.\n  - Loudness: Governed by amplitude and intensity. High amplitude = loud sound.\n  - Quality / Timbre: Governed by wave shape and number of blended overtones/harmonics.\n• Ultrasound (> 20,000 Hz):\n  - Frequencies above human audibility (20 Hz - 20 kHz).\n  - Used in prenatal obstetric imaging (safe non-ionizing scans), non-destructive metal flaw detection, cleaning delicate jewelry, and bat echolocation.",
    "detailedNotes": {
      "introduction": "Acoustics governs how vibrations propagate through matter as sound waves, with wide applications ranging from architectural auditorium acoustics to medical ultrasound scanning.",
      "realWorldContext": "In Ghanaian fishing communities along the Gulf of Guinea (Elmina, Tema), modern commercial fishing trawlers employ ultrasonic echo-sounders (SONAR) to locate pelagic schools of sardinella and tuna beneath the water.",
      "objectives": [
        "Explain the production and propagation of sound waves as compressions and rarefactions",
        "Compare the velocity of sound in solids, liquids, and gases and explain the physical basis for differences",
        "Calculate distances and depths using the echo formula (2d = vt)",
        "Distinguish between pitch, loudness, and quality of sound with experimental demonstrations",
        "Explain medical and industrial applications of ultrasound over X-rays"
      ],
      "sections": [
        {
          "title": "Echo Ranging & Sonar Principles",
          "content": "Sound waves reflect off rigid boundaries obeying the law of reflection.",
          "bulletPoints": [
            "Echo Persistence: The human ear cannot distinguish two sounds arriving less than 0.10 seconds apart. For an echo to be perceived distinctly in air (v = 340 m/s), the reflecting barrier must be at least d = (340 × 0.1)/2 = 17 meters away.",
            "Reverberation: Multiple rapid reflections in enclosed concrete auditoriums blur spoken words. Controlled by acoustic wall paneling, heavy drapes, and porous ceiling tiles."
          ],
          "keyTakeaway": "In all echo calculations, sound traverses the distance twice (out and back): total distance = 2d.",
          "realWorldExample": "Bats navigating inside dark limestone caves at Shai Hills emit ultrasonic clicks, calculating distance to obstacles from the time delay of returning echoes."
        }
      ],
      "wassceExamTips": [
        "Never forget to divide by 2 when calculating distance from an echo: d = (v × t) / 2.",
        "State clearly that sound cannot travel through a vacuum because it requires material particles to oscillate.",
        "Distinguish pitch (frequency) from loudness (amplitude)."
      ],
      "commonMistakes": [
        "Multiplying speed by time without dividing by 2 in echo problems.",
        "Claiming that sound travels faster in air than in steel (sound travels fastest in rigid solids).",
        "Confusing ultrasound (high-frequency sound) with ultraviolet light (high-frequency electromagnetic wave)."
      ],
      "summaryChecklist": [
        "Can I calculate the depth of the ocean bed using sonar transit time?",
        "Can I explain how acoustic paneling reduces reverberation in a church auditorium?",
        "Can I describe the bell-jar experiment proving that sound requires a material medium?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-snd-1",
        "title": "Echo Distance Calculation",
        "problem": "A hunter in a forest near Koforidua fires a gun and hears the echo reflected from a high vertical cliff face 1.6 seconds later. If the speed of sound in air is 340 m/s: (a) Calculate the distance of the hunter from the cliff. (b) Explain why a distinct echo is not heard if the hunter stands 5 meters from the cliff.",
        "stepByStepSolution": [
          "Step 1: Total distance covered by sound to cliff and back: Distance = Speed × Time = 340 m/s × 1.6 s = 544 meters. [M1]",
          "Step 2: Distance from hunter to cliff: d = 544 / 2 = 272 meters. [A1]",
          "Step 3: At 5 meters, the round-trip distance is 10 meters. Time for echo to return = 10 m / 340 m/s ≈ 0.029 seconds. [M1]",
          "Step 4: The human sensation of sound persists on the ear for ~0.10 s. Because 0.029 s < 0.10 s, the echo blends into the original gun sound and cannot be heard as a distinct separate sound. [A1]"
        ],
        "keyTakeaway": "A distinct echo requires the reflecting obstacle to be at least 17 meters away in air."
      },
      {
        "id": "ex-shs3-sci-snd-2",
        "title": "Wave Equation and Musical Pitch",
        "problem": "A tuning fork produces a musical note of frequency 512 Hz. (a) Calculate the wavelength of this note in air if speed of sound is 340 m/s. (b) If the same note is transmitted into water where speed of sound is 1,500 m/s, calculate its new wavelength and state what happens to its frequency.",
        "stepByStepSolution": [
          "Step 1: Use wave equation: v = f × λ → λ = v / f. [M1]",
          "Step 2: Wavelength in air: λ_air = 340 / 512 = 0.664 meters. [A1]",
          "Step 3: Frequency is determined by the source and remains constant (512 Hz) when transitioning between media. [B1]",
          "Step 4: Wavelength in water: λ_water = 1,500 / 512 = 2.930 meters. [M1, A1]"
        ],
        "keyTakeaway": "Wave frequency remains strictly invariant across medium boundaries; wavelength changes proportionally to velocity."
      }
    ]
  },
  {
    "id": "shs3-sci-t2-electromagnetic-spectrum",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Electromagnetic Spectrum, Properties & Telecommunication",
    "description": "Nature of electromagnetic waves, order of the EM spectrum (radio to gamma), wave equation (c = fλ), inverse square law, radio and microwave telecommunications, infrared and ultraviolet radiation, and medical X-ray and gamma applications.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=lwfJPc-rSXw",
    "youtubeId": "lwfJPc-rSXw",
    "keyNotes": "• Properties of All Electromagnetic Waves:\n  - Transverse waves consisting of oscillating coupled electric and magnetic fields perpendicular to wave propagation.\n  - Travel through a vacuum at the speed of light: c = 3.0 × 10⁸ m/s.\n  - Can undergo reflection, refraction, diffraction, interference, and polarization.\n  - Obey the wave equation: c = f × λ.\n  - Photon energy is directly proportional to frequency: E = h × f (Planck's relation).\n• Complete Order (Increasing Frequency / Decreasing Wavelength):\n  1. Radio waves (λ > 1 m): Long-distance radio, television broadcasting.\n  2. Microwaves (1 mm - 1 m): Satellite links, mobile cellular phones, microwave ovens, radar.\n  3. Infrared (700 nm - 1 mm): Thermal radiation, night vision, TV remote controls.\n  4. Visible Light (400 nm - 700 nm): ROYGBIV; human vision, optical photography.\n  5. Ultraviolet (10 nm - 400 nm): Fluorescent tubes, vitamin D synthesis, sterilization; hazards: skin cancer, cataracts.\n  6. X-rays (0.01 nm - 10 nm): Medical bone radiography, airport security luggage scanning.\n  7. Gamma rays (λ < 0.01 nm): Cancer radiotherapy, sterilizing medical instruments, food irradiation.",
    "detailedNotes": {
      "introduction": "Electromagnetic radiation spans from kilometers-long radio waves to sub-picometer gamma rays, providing the physical carrier waves for global telecommunications and modern medicine.",
      "realWorldContext": "Cellular network masts installed across Ghanaian cities by telecom operators (MTN, Telecel, AT) transmit data using microwave frequencies (~900 MHz to 2.6 GHz), enabling mobile money (MoMo) payments and high-speed smartphone internet.",
      "objectives": [
        "List the 7 regions of the electromagnetic spectrum in order of increasing frequency and decreasing wavelength",
        "State the common physical properties shared by all electromagnetic waves",
        "Solve frequency, wavelength, and wave speed problems using c = fλ",
        "Identify practical and medical applications of each EM wave band",
        "Evaluate the biological hazards associated with ionizing UV, X-ray, and gamma radiation"
      ],
      "sections": [
        {
          "title": "Microwave Telecommunications & Satellite Links",
          "content": "Microwaves have short wavelengths that penetrate Earth’s ionosphere without reflecting.",
          "bulletPoints": [
            "Ground-to-Satellite Links: Uplink signals travel from earth stations straight through the upper atmosphere to geostationary satellites orbiting at 36,000 km altitude, which amplify and retransmit signals to downlink receivers.",
            "Mobile Phone Networks: Cellular base stations communicate with mobile handsets via line-of-sight UHF microwaves divided into geographic hexagonal cells."
          ],
          "keyTakeaway": "Microwaves penetrate atmospheric layers without ionospheric reflection, making them ideal for satellite and space communication.",
          "realWorldExample": "Live international football broadcasts from the English Premier League are transmitted to Ghana via geostationary communications satellites using microwave frequency bands."
        }
      ],
      "wassceExamTips": [
        "Remember the mnemonic for increasing frequency: R-M-I-V-U-X-G (Radio, Micro, Infrared, Visible, Ultraviolet, X-rays, Gamma rays).",
        "State the universal speed of all EM waves in vacuum: 3.0 × 10⁸ m/s.",
        "Distinguish non-ionizing radiation (radio, microwave, visible) from dangerous ionizing radiation (UV, X-rays, gamma)."
      ],
      "commonMistakes": [
        "Thinking sound waves are part of the electromagnetic spectrum (sound is a mechanical wave that cannot travel in vacuum).",
        "Stating that radio waves travel slower than gamma rays (ALL EM waves travel at identical speed c = 3.0 × 10⁸ m/s in vacuum).",
        "Confusing wavelength with frequency (as frequency increases, wavelength decreases)."
      ],
      "summaryChecklist": [
        "Can I list the EM spectrum in correct order from memory?",
        "Can I calculate the wavelength of a 4G LTE signal operating at 1.8 GHz?",
        "Can I explain why gamma rays can kill cancerous tumors without major surgery?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-em-1",
        "title": "EM Wave Equation & Satellite Delay",
        "problem": "A communications satellite orbits at an altitude of 36,000 km directly above Accra. (a) Calculate the time taken for a microwave signal sent from a broadcasting station in Accra to reach the satellite. (b) If the microwave has a frequency of 6.0 GHz (6.0 × 10⁹ Hz), calculate its wavelength in centimeters. (c = 3.0 × 10⁸ m/s).",
        "stepByStepSolution": [
          "Step 1: Convert distance to meters: d = 36,000 km = 36,000,000 m = 3.6 × 10⁷ m. [B1]",
          "Step 2: Calculate transmission time: t = d / c = (3.6 × 10⁷ m) / (3.0 × 10⁸ m/s) = 0.12 seconds. [M1, A1]",
          "Step 3: Use wave formula: c = f × λ → λ = c / f. [M1]",
          "Step 4: λ = (3.0 × 10⁸ m/s) / (6.0 × 10⁹ Hz) = 0.05 meters. [M1]",
          "Step 5: Convert to centimeters: λ = 0.05 × 100 = 5.0 cm. [A1]"
        ],
        "keyTakeaway": "Microwave signals experience an unavoidable physical latency of ~0.12 s each way due to the finite speed of light."
      },
      {
        "id": "ex-shs3-sci-em-2",
        "title": "Radiation Hazard Comparison",
        "problem": "Explain why prolonged exposure to X-rays and gamma rays poses severe biological cancer hazards to human tissues, whereas ordinary radio waves and visible light do not.",
        "stepByStepSolution": [
          "Step 1: Photon energy is governed by Planck’s relation E = h × f. High-frequency waves have immense quantum energy per photon. [B1]",
          "Step 2: X-rays and gamma rays have very high frequencies and photon energies exceeding the ionization potential of biological atoms (~10-12 eV). [M1]",
          "Step 3: When ionizing photons hit living cells, they strip electrons from water and biomolecules, producing reactive free radicals that shatter DNA double helices and induce oncogenic mutations. [A1]",
          "Step 4: Radio waves and visible light have much lower frequencies and lack sufficient energy to ionize atoms, merely causing harmless vibrational heating. [A1]"
        ],
        "keyTakeaway": "Only high-frequency radiation with photon energy exceeding molecular ionization thresholds can break chemical DNA bonds."
      }
    ]
  },
  {
    "id": "shs3-sci-t2-hydrocarbons-petroleum",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "Hydrocarbons: Alkanes, Alkenes, Fractional Distillation & Cracking",
    "description": "Saturated vs unsaturated hydrocarbons, IUPAC nomenclature and isomerism, chemical reactions of alkanes (combustion, substitution) and alkenes (addition, test for unsaturation), fractional distillation of crude oil, and catalytic cracking.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=fX6n5kE1aZs",
    "youtubeId": "fX6n5kE1aZs",
    "keyNotes": "• Homologous Series of Hydrocarbons:\n  - Alkanes (Saturated): CₙH₂ₙ₊₂. Single C-C covalent bonds. Methane (CH₄), Ethane (C₂H₆), Propane (C₃H₈), Butane (C₄H₁₀). Undergo combustion and free-radical substitution with halogens in UV light.\n  - Alkenes (Unsaturated): CₙH₂ₙ. Contain at least one C=C double bond. Ethene (C₂H₄), Propene (C₃H₆). Undergo addition reactions: addition of Br₂ (decolorizes reddish-brown bromine water immediately), H₂ (hydrogenation), and H₂O (hydration to alcohols).\n• Petroleum Fractional Distillation:\n  - Separation based on boiling point differences in a fractionating column.\n  - Fractions: Refinery gas (< 20°C, LPG) → Petrol / Gasoline (40 - 100°C) → Kerosene / Paraffin (150 - 250°C, jet fuel) → Diesel oil (250 - 350°C) → Lubricating oils & Bitumen residue (> 400°C, road asphalt).\n• Catalytic Cracking:\n  - Thermal decomposition of long-chain heavy gas-oil fractions into smaller, high-demand petrol alkanes and alkenes: C₁₂H₂₆ → C₈H₁₈ + 2C₂H₄ (at 500°C with Zeolite catalyst).",
    "detailedNotes": {
      "introduction": "Hydrocarbons form the molecular backbone of organic chemistry, serving as global fossil fuels and petrochemical feedstocks for plastics, synthetic fibers, and pharmaceuticals.",
      "realWorldContext": "Ghana’s offshore petroleum fields (Jubilee, TEN, and Sankofa) pump thousands of barrels of sweet crude oil daily. The crude is transported by FPSO vessels for refining into transport fuels and thermal electricity generation.",
      "objectives": [
        "Name and draw structural isomers for alkanes and alkenes up to 6 carbon atoms using IUPAC rules",
        "Distinguish experimentally between saturated and unsaturated hydrocarbons using bromine water",
        "Outline the fractions of petroleum refining and explain their boiling points and domestic uses",
        "Explain the economic necessity and chemical mechanism of catalytic cracking in oil refineries"
      ],
      "sections": [
        {
          "title": "Petroleum Refining & Octane Number",
          "content": "Crude oil is a complex mixture of aliphatic and aromatic hydrocarbons separated by continuous fractional distillation.",
          "bulletPoints": [
            "Boiling Point Gradient: Shorter carbon chains have weaker London dispersion forces, evaporating readily and condensing at cooler temperatures near the tower top.",
            "Longer carbon chains have strong intermolecular attractions, boiling at high temperatures and condensing as viscous liquids near the bottom.",
            "Octane Number: A measure of petrol’s resistance to auto-ignition and engine knocking. Branched alkanes burn smoother than straight chains."
          ],
          "keyTakeaway": "Shorter chain hydrocarbons have lower boiling points, lower viscosity, and higher flammability.",
          "realWorldExample": "Liquefied Petroleum Gas (LPG) distributed in cylinders across Ghana consists of pressurized propane and butane used for clean household cooking."
        }
      ],
      "wassceExamTips": [
        "The definitive WASSCE laboratory test for unsaturation: \"Add reddish-brown bromine water; if unsaturated, it turns colorless immediately without light\".",
        "When naming organic molecules, always number the carbon chain from the end that gives substituents the lowest possible numbers.",
        "State the conditions for catalytic cracking: High temperature (~500°C) and a catalyst (zeolite or silica-alumina)."
      ],
      "commonMistakes": [
        "Giving carbon 5 bonds in structural formulas (carbon is strictly tetravalent and forms exactly 4 bonds).",
        "Confusing fractional distillation (physical separation by boiling points) with cracking (chemical breakdown of molecules).",
        "Writing that alkenes undergo substitution as their primary reaction (alkenes primarily undergo addition)."
      ],
      "summaryChecklist": [
        "Can I draw the two structural isomers of butane (n-butane and 2-methylpropane)?",
        "Can I write balanced equations for the complete combustion of octane?",
        "Can I list the six fractions of crude oil in order of increasing boiling point?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-hyd-1",
        "title": "Chemical Test for Unsaturation",
        "problem": "Describe a laboratory chemical test to distinguish between two unlabelled gas cylinders containing ethane (C₂H₆) and ethene (C₂H₄). Write the chemical equation for the reaction.",
        "stepByStepSolution": [
          "Step 1: Bubble equal volumes of each gas separately into test tubes containing bromine water (Br₂(aq), reddish-brown) in normal room light. [B1]",
          "Step 2: Observation with ethene (unsaturated alkene): The reddish-brown color of bromine water disappears rapidly and turns completely colorless. [A1]",
          "Step 3: Equation: C₂H₄(g) + Br₂(aq) → CH₂Br-CH₂Br(l) (1,2-dibromoethane). Electrophilic addition across the double bond. [M1, A1]",
          "Step 4: Observation with ethane (saturated alkane): The bromine water remains reddish-brown; no immediate reaction occurs without intense UV sunlight. [A1]"
        ],
        "keyTakeaway": "Decolorization of bromine water without sunlight proves the presence of a carbon-carbon double bond."
      },
      {
        "id": "ex-shs3-sci-hyd-2",
        "title": "Combustion Stoichiometry & Carbon Monoxide Danger",
        "problem": "Write balanced chemical equations for: (a) The complete combustion of butane (C₄H₁₀) in excess oxygen. (b) The incomplete combustion of butane in limited oxygen supply, producing poisonous carbon monoxide. (c) Explain the biochemical mechanism of carbon monoxide toxicity in humans.",
        "stepByStepSolution": [
          "Step 1: Complete combustion: 2C₄H₁₀(g) + 13O₂(g) → 8CO₂(g) + 10H₂O(l). [A1]",
          "Step 2: Incomplete combustion: 2C₄H₁₀(g) + 9O₂(g) → 8CO(g) + 10H₂O(l). [A1]",
          "Step 3: Biochemical toxicity: Carbon monoxide binds to hemoglobin with an affinity over 200 times greater than oxygen, forming stable carboxyhemoglobin. [M1]",
          "Step 4: This prevents hemoglobin from transporting oxygen to vital brain and heart tissues, causing rapid cellular hypoxia, unconsciousness, and death by suffocation. [A1]"
        ],
        "keyTakeaway": "Burning hydrocarbon fuels in confined, poorly ventilated rooms generates deadly carbon monoxide."
      }
    ]
  },
  {
    "id": "shs3-sci-t2-functional-groups-alcohols",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Functional Groups: Alcohols, Carboxylic Acids, Esters & Saponification",
    "description": "Functional groups in organic chemistry (-OH, -COOH, -COOR), preparation and oxidation of ethanol, ethanoic acid, esterification, fats and oils (triglycerides), industrial and traditional saponification (soap making), and detergents.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=uK8oA0X5J5s",
    "youtubeId": "uK8oA0X5J5s",
    "keyNotes": "• Functional Groups:\n  - Alkanols (Alcohols): -OH (Hydroxyl group). E.g. Ethanol (C₂H₅OH).\n  - Alkanoic Acids (Carboxylic Acids): -COOH (Carboxyl group). E.g. Ethanoic acid (CH₃COOH).\n  - Esters: -COOR (Ester linkage). Sweet-smelling compounds used in perfumes and artificial flavorings.\n• Production & Oxidation of Ethanol:\n  - Fermentation: Yeast zymase converts glucose into ethanol and CO₂ anaerobically at 30-37°C: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.\n  - Oxidation: Ethanol warmed with acidified K₂Cr₂O₇ oxidizes to ethanoic acid (color changes from orange Cr₂O₇²⁻ to green Cr³⁺).\n• Esterification:\n  - Carboxylic acid + Alcohol ⇌ Ester + Water (catalyzed by concentrated H₂SO₄).\n  - Ethanoic acid + Ethanol ⇌ Ethyl ethanoate + Water: CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O.\n• Saponification (Soap Making):\n  - Alkaline hydrolysis of natural vegetable oils (palm oil, shea butter) or animal fats with concentrated NaOH (hard bar soap) or KOH (soft soap).\n  - Triglyceride + 3NaOH → Glycerol + 3 Soap molecules (Sodium carboxylate).\n  - Salting out: Adding NaCl precipitates the solid soap curd from the glycerol mixture.",
    "detailedNotes": {
      "introduction": "Functional groups dictate the chemical reactivity and physical properties of organic molecules, governing the synthesis of pharmaceuticals, food flavorings, and cleaning agents.",
      "realWorldContext": "In Ghana, traditional soap making (Alata Samina) is a major cottage industry. Women’s cooperatives in the Ashanti and Bono Regions boil palm kernel oil with potash lye leached from burned cocoa pod husks, producing natural antibacterial black soap.",
      "objectives": [
        "Identify hydroxyl, carboxyl, and ester functional groups and name organic compounds up to 4 carbons",
        "Describe the laboratory and industrial fermentation of sugars to ethanol and its distillation",
        "Write balanced equations for the oxidation of ethanol to ethanoic acid and esterification reactions",
        "Explain the chemical mechanism of saponification and the cleansing action of soap in soft vs hard water"
      ],
      "sections": [
        {
          "title": "The Chemistry of Saponification & Cleansing Action",
          "content": "Fats and vegetable oils are triesters of glycerol and long-chain fatty acids (triglycerides).",
          "bulletPoints": [
            "Hydrolysis: Boiling fat with aqueous NaOH breaks ester bonds, releasing 1,2,3-propanetriol (glycerol) and sodium salts of fatty acids (soap).",
            "Soap Molecule Structure: A long non-polar hydrophobic hydrocarbon tail (e.g. C₁₇H₃₅-) and a polar hydrophilic carboxylate ionic head (-COO⁻Na⁺).",
            "Micelle Formation: Tails dissolve in oily grease while heads dissolve in water. Mechanical agitation lifts grease into an emulsion rinsed away by water."
          ],
          "keyTakeaway": "Soap cleans because its hydrophobic tail dissolves grease while its hydrophilic head interacts with water to form washable micelles.",
          "realWorldExample": "Washing oily soup stains from clothing with soap creates a milky emulsion of grease droplets stabilized in wash water."
        }
      ],
      "wassceExamTips": [
        "In esterification equations, write the reversible equilibrium arrow (⇌) and state the catalyst: Concentrated sulfuric acid (H₂SO₄).",
        "State the function of concentrated brine (NaCl) in soap making: \"To salt out / precipitate the soap from solution\".",
        "Explain why detergents work in hard water while soap forms scum: Calcium and magnesium salts of detergents are water-soluble."
      ],
      "commonMistakes": [
        "Writing irreversible single arrows (→) for esterification reactions.",
        "Stating that glycerol is a waste product of soap making (glycerol is a valuable byproduct used in cosmetics and moisturizers).",
        "Confusing ethanol (alcohol) with ethanoic acid (vinegar)."
      ],
      "summaryChecklist": [
        "Can I write the structural formula of ethyl ethanoate?",
        "Can I describe the color change when ethanol is oxidized by acidified potassium permanganate?",
        "Can I explain how hard water causes soap to form insoluble scum?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-fun-1",
        "title": "Esterification Synthesis of Ethyl Ethanoate",
        "problem": "Describe the laboratory preparation of ethyl ethanoate starting from ethanol and glacial ethanoic acid. Include: (a) The balanced chemical equation. (b) The catalyst used. (c) The characteristic physical property confirming ester formation.",
        "stepByStepSolution": [
          "Step 1: Mix equal volumes of absolute ethanol (C₂H₅OH) and glacial ethanoic acid (CH₃COOH) in a round-bottom boiling flask. [B1]",
          "Step 2: Add 1-2 cm³ of concentrated sulfuric acid (H₂SO₄) slowly as a dehydrating catalyst. [A1]",
          "Step 3: Heat the mixture under reflux in a water bath for 15-20 minutes. [B1]",
          "Step 4: Equation: CH₃COOH(l) + C₂H₅OH(l) ⇌ CH₃COOC₂H₅(l) + H₂O(l). [A1]",
          "Step 5: Pour the reaction mixture into cold sodium carbonate solution in a beaker to neutralize unreacted acid. [B1]",
          "Step 6: Confirmation: An oily layer forms on top of water possessing a distinct sweet, pleasant, fruity apple/pear fragrance. [A1]"
        ],
        "keyTakeaway": "Esterification requires concentrated H₂SO₄ catalyst and gentle refluxing, yielding pleasant fruity-smelling esters."
      },
      {
        "id": "ex-shs3-sci-fun-2",
        "title": "Saponification Calculation",
        "problem": "Write a balanced chemical word and molecular equation for the saponification of glyceryl tristearate (a fat) with sodium hydroxide to produce soap and glycerol.",
        "stepByStepSolution": [
          "Step 1: Word equation: Glyceryl tristearate + Sodium hydroxide → Glycerol + Sodium stearate (soap). [A1]",
          "Step 2: Identify chemical formula of glyceryl tristearate: (C₁₇H₃₅COO)₃C₃H₅. [M1]",
          "Step 3: Balanced equation: (C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → C₃H₅(OH)₃ + 3C₁₇H₃₅COONa. [A1]",
          "Step 4: Glycerol is C₃H₅(OH)₃ (propane-1,2,3-triol); soap is sodium stearate (C₁₇H₃₅COONa). [A1]"
        ],
        "keyTakeaway": "One molecule of triglyceride reacts with three molecules of strong base to yield one molecule of glycerol and three molecules of soap."
      }
    ]
  },
  {
    "id": "shs3-sci-t2-synthetic-polymers-plastics",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 9,
    "title": "Synthetic Polymers, Polymerization, Plastics & Recycling Management",
    "description": "Addition vs condensation polymerization, natural polymers (starch, cellulose, proteins, natural rubber), synthetic polymers (polyethene, PVC, nylon, terylene), thermoplastics vs thermosetting plastics, and the environmental crisis of plastic waste in Ghana.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=RhT_H3Nlq4A",
    "youtubeId": "RhT_H3Nlq4A",
    "keyNotes": "• Types of Polymerization:\n  - Addition Polymerization: Unsaturated monomers (C=C) link together without losing any atoms: n CH₂=CH₂ → -[CH₂-CH₂]-ₙ (Polyethene).\n  - Condensation Polymerization: Monomers with two different functional groups combine with the elimination of small byproduct molecules like H₂O or HCl (e.g. Nylon-6,6, Terylene polyester).\n• Thermoplastics vs Thermosets:\n  - Thermoplastics: Linear or branched chains held by weak intermolecular forces; soften and melt upon heating, easily remolded and recycled (e.g. Polyethene, PVC, Polystyrene, PET).\n  - Thermosetting Plastics: Heavily cross-linked 3D networks; decompose/char rather than melt on heating, cannot be remolded (e.g. Bakelite, Melamine, Epoxy resins).\n• Natural Polymers:\n  - Starch & Cellulose: Polymers of glucose.\n  - Proteins: Polymers of amino acids linked by peptide bonds (-CO-NH-).\n  - Natural Rubber: Polymer of isoprene (2-methylbuta-1,3-diene). Vulcanization by heating with sulfur introduces disulfide cross-links, improving elasticity and wear resistance.\n• Environmental Impact & Waste Management:\n  - Non-biodegradable plastics persist for centuries, choking urban drains in Accra/Kumasi and causing fatal flash floods.\n  - Burning plastics releases toxic dioxins and corrosive HCl gas.\n  - Mitigation: The 3Rs (Reduce, Reuse, Recycle), biodegradable bioplastics, ban on ultra-thin single-use carrier bags.",
    "detailedNotes": {
      "introduction": "Polymer materials dominate contemporary packaging, construction, textiles, and electronics, but their resistance to biological decomposition poses major environmental management challenges.",
      "realWorldContext": "In Accra, plastic waste clogging the Odaw channel and Korle Lagoon has historically triggered disastrous perennial flooding during the June-July rainy season. Recycling enterprises like Nelplast convert waste plastics into durable paving blocks for construction.",
      "objectives": [
        "Distinguish between addition and condensation polymerization with structural equations",
        "Compare the thermal behavior and molecular structures of thermoplastics and thermosetting plastics",
        "Describe the process and benefits of rubber vulcanization",
        "Evaluate the environmental hazards of plastic pollution in Ghana and formulate sustainable 3R recycling solutions"
      ],
      "sections": [
        {
          "title": "Addition vs Condensation Polymerization Chemistry",
          "content": "Polymerization mechanisms determine the physical and thermal properties of synthetic plastics.",
          "bulletPoints": [
            "Polyethene (Addition): Formed under high pressure (1,000 atm) and heat from ethene monomers. Used for sachet water bags, bowls, and buckets.",
            "PVC (Polyvinyl Chloride): Formed from chloroethene (vinyl chloride); tough, rigid, and used for water drainage pipes and electrical insulation.",
            "Nylon-6,6 (Condensation): Formed from 1,6-diaminohexane and hexanedioic acid, eliminating water. Forms strong, tear-resistant fibers for fishing nets and ropes."
          ],
          "keyTakeaway": "Addition polymers retain all original atoms; condensation polymers eliminate small byproduct molecules like water.",
          "realWorldExample": "Fishermen at Winneba use nylon monofilament fishing nets because nylon fibers resist rotting and water absorption in marine environments."
        }
      ],
      "wassceExamTips": [
        "When drawing the repeating unit of an addition polymer, remove the double bond, extend single bonds beyond brackets, and subscript with \"n\": -[CH₂-CH₂]-ₙ.",
        "State why thermosetting plastics cannot be recycled by melting: \"They possess permanent covalent cross-links that decompose upon heating\".",
        "State what vulcanization does to rubber: \"Forms sulfur cross-links between chains, making rubber harder, more elastic, and heat-resistant\"."
      ],
      "commonMistakes": [
        "Retaining the double bond inside the bracket of a polymer repeating unit.",
        "Confusing nylon (polyamide) with terylene (polyester).",
        "Suggesting open burning as a safe disposal method for plastics (burning PVC releases carcinogenic dioxins and HCl)."
      ],
      "summaryChecklist": [
        "Can I draw the monomer and repeating unit of polyethene and PVC?",
        "Can I explain the structural difference between thermoplastics and thermosets?",
        "Can I outline 3 practical industrial uses for recycled waste plastics in Ghana?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-pol-1",
        "title": "Addition Polymerization of Ethene",
        "problem": "Draw the chemical equation showing the formation of polyethene from its monomer ethene. Include the monomer structure, repeating unit, and specify the type of polymerization.",
        "stepByStepSolution": [
          "Step 1: Identify the monomer: Ethene has the structural formula CH₂=CH₂. [B1]",
          "Step 2: Under elevated temperature (200°C), high pressure (1,000 atm), and an initiator catalyst, the carbon-carbon pi (π) bond in each ethene monomer breaks. [M1]",
          "Step 3: Equation: n CH₂=CH₂ → -[CH₂-CH₂]-ₙ. [A1]",
          "Step 4: The repeating unit is -[CH₂-CH₂]- where the brackets enclose the repeating segment with open bonds extending through the brackets. [A1]",
          "Step 5: Polymerization type: Addition polymerization (no atoms are lost). [B1]"
        ],
        "keyTakeaway": "Addition polymerization breaks double bonds to form long saturated hydrocarbon chains without releasing byproducts."
      },
      {
        "id": "ex-shs3-sci-pol-2",
        "title": "Thermoplastics vs Thermosets Molecular Basis",
        "problem": "Explain in terms of molecular structure and bonding why a plastic bucket made of polyethene melts when placed near heat, whereas the handle of a frying pan made of Bakelite does not melt.",
        "stepByStepSolution": [
          "Step 1: Polyethene is a Thermoplastic. Its long polymer chains are held together only by weak intermolecular London dispersion forces. [A1]",
          "Step 2: Gentle heating provides sufficient thermal kinetic energy to overcome these weak intermolecular attractions, allowing chains to slide past one another and melt. [M1, A1]",
          "Step 3: Bakelite is a Thermosetting plastic. During its initial curing, extensive strong covalent cross-links form between adjacent polymer chains, locking them into a rigid 3D network. [A1]",
          "Step 4: Heat cannot break these strong covalent cross-links without chemically decomposing and charring the material; hence it does not melt. [A1]"
        ],
        "keyTakeaway": "Weak intermolecular forces allow thermoplastics to melt; permanent covalent cross-links prevent thermosets from melting."
      }
    ]
  },
  {
    "id": "shs3-sci-t2-nuclear-physics-radioactivity",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 10,
    "title": "Nuclear Physics: Radioactivity, Decay Equations, Half-Life & Nuclear Energy",
    "description": "Natural radioactivity, properties of alpha, beta, and gamma radiation, nuclear decay equations, half-life decay kinetics, radiocarbon dating, nuclear fission and fusion, nuclear power reactors, and radiation protection.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=KWAsz59F8gA",
    "youtubeId": "KWAsz59F8gA",
    "keyNotes": "• Types of Nuclear Radiations:\n  - Alpha (α) (⁴₂He): Helium nucleus (2p + 2n), charge +2, mass 4. Highest ionizing power, lowest penetrating power (stopped by sheet of paper or 5 cm air).\n  - Beta (β⁻) (⁰₋₁e): High-speed electron, charge -1, negligible mass (1/1840). Moderate ionizing power, moderate penetration (stopped by 5 mm aluminum).\n  - Gamma (γ): High-frequency electromagnetic photon, zero charge, zero mass. Weakest ionizing power, immense penetrating power (stopped only by thick lead or meters of concrete).\n• Nuclear Decay Equations:\n  - Alpha decay: ᴬ_Z X → ᴬ⁻⁴_{Z-2} Y + ⁴₂He. (Mass number decreases by 4, atomic number decreases by 2).\n  - Beta-minus decay: ᴬ_Z X → ᴬ_{Z+1} Y + ⁰₋₁e. (Mass number unchanged, atomic number increases by 1).\n• Half-Life (T₁⸝₂):\n  - Time taken for half of the radioactive parent nuclei in a sample to decay: N = N₀ × (1/2)ⁿ, where n = total time / T₁⸝₂.\n• Beneficial Uses & Nuclear Energy:\n  - Medicine: Cobalt-60 for cancer radiotherapy; Iodine-131 for thyroid treatment; Technetium-99m for organ imaging.\n  - Archaeology: Carbon-14 dating for organic artifacts up to 50,000 years old.\n  - Nuclear Fission: Heavy Uranium-235 absorbs a slow thermal neutron and splits into lighter nuclei, releasing immense heat energy: E = mc².\n  - Nuclear Fusion: Light hydrogen nuclei fuse into helium at millions of degrees in the core of the Sun.",
    "detailedNotes": {
      "introduction": "Nuclear physics examines reactions within atomic nuclei, releasing millions of times more energy per reaction than conventional chemical bonds.",
      "realWorldContext": "Ghana operates a research nuclear reactor at the Ghana Atomic Energy Commission (GAEC) in Kwabenya, utilizing neutron activation analysis and gamma radiation to sterilize medical supplies, preserve crops, and train engineers for Ghana’s planned commercial nuclear power plant.",
      "objectives": [
        "Compare alpha, beta, and gamma radiations by mass, charge, ionizing power, and penetrating ability",
        "Balance nuclear transmutation equations for alpha and beta decay",
        "Solve multi-step half-life decay calculation problems using formulas and step-tables",
        "Explain nuclear fission and fusion and evaluate nuclear energy opportunities and safety protocols in Ghana"
      ],
      "sections": [
        {
          "title": "Balancing Nuclear Decay Equations",
          "content": "In all nuclear transmutations, both total mass number (nucleons) and total atomic number (charge) must be conserved.",
          "bulletPoints": [
            "Alpha emission: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He (Radium decays to Radon gas).",
            "Beta emission: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e (Carbon-14 decays to Nitrogen-14).",
            "Gamma emission: An excited nucleus releases excess energy as a gamma photon without altering mass or atomic number."
          ],
          "keyTakeaway": "Sum of superscripts (mass numbers) on left must equal right; sum of subscripts (charges) on left must equal right.",
          "realWorldExample": "Household smoke detectors contain a tiny source of Americium-241 that emits alpha particles to ionize air molecules between electrodes."
        }
      ],
      "wassceExamTips": [
        "Always verify that mass numbers balance across the arrow: ∑A_left = ∑A_right.",
        "Remember that in beta decay, the atomic number INCREASES by 1: Z → Z + 1.",
        "When plotting a decay curve, show at least two successive half-lives on the time axis to verify that each interval is equal."
      ],
      "commonMistakes": [
        "Confusing mass number (top superscript) with atomic number (bottom subscript).",
        "Thinking a sample decays to absolute zero after two half-lives (it reduces to 25%, then 12.5%, etc.).",
        "Confusing nuclear fission (splitting heavy nuclei) with nuclear fusion (combining light nuclei)."
      ],
      "summaryChecklist": [
        "Can I write balanced equations for the decay of Uranium-238 through alpha and beta emissions?",
        "Can I calculate the mass of a 100 g radioisotope remaining after 5 half-lives?",
        "Can I explain the working principle of the Ghana Atomic Energy Commission research reactor?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-nuc-1",
        "title": "Balancing Successive Radioactive Decays",
        "problem": "A radioactive nucleus of Thorium-232 (²³²₉₀Th) decays by emitting an alpha particle to form an intermediate isotope X, which then decays by emitting a beta particle (β⁻) to form a daughter isotope Y. (a) Write balanced nuclear equations for both decays. (b) Identify the mass number and atomic number of isotope Y.",
        "stepByStepSolution": [
          "Step 1: First decay (Alpha emission): ²³²₉₀Th → ᴬ_Z X + ⁴₂He. [M1]",
          "Step 2: Balance numbers: Mass number A = 232 - 4 = 228; Atomic number Z = 90 - 2 = 88. Isotope X is ²²⁸₈₈Ra (Radium-228). [A1]",
          "Step 3: Second decay (Beta emission): ²²⁸₈₈Ra → ᴬ’_Z’ Y + ⁰₋₁e. [M1]",
          "Step 4: Balance numbers: Mass number A’ = 228 - 0 = 228; Atomic number Z’ = 88 - (-1) = 89. Isotope Y is ²²⁸₈₉Ac (Actinium-228). [A1]",
          "Step 5: Isotope Y has mass number = 228 and atomic number = 89. [B1]"
        ],
        "keyTakeaway": "Alpha decay reduces Z by 2; beta decay increases Z by 1."
      },
      {
        "id": "ex-shs3-sci-nuc-2",
        "title": "Half-Life & Radioactivity Calculation",
        "problem": "A radioactive isotope has an initial mass of 64.0 grams. After 24 days, only 2.0 grams of the isotope remains undecayed. Calculate: (a) The number of half-lives that have elapsed. (b) The half-life of the radioactive isotope in days.",
        "stepByStepSolution": [
          "Step 1: Track mass reduction by successive halving: 64.0 g → 32.0 g (1st) → 16.0 g (2nd) → 8.0 g (3rd) → 4.0 g (4th) → 2.0 g (5th). [M1]",
          "Step 2: Alternatively: N/N₀ = 2.0 / 64.0 = 1/32 = (1/2)ⁿ → (1/2)⁵ = (1/2)ⁿ → n = 5 half-lives. [A1]",
          "Step 3: Total elapsed time t = 24 days.",
          "Step 4: Half-life T₁⸝₂ = Total time / Number of half-lives = 24 days / 5 = 4.8 days. [M1, A1]"
        ],
        "keyTakeaway": "The half-life equals the total elapsed time divided by the number of halving cycles."
      }
    ]
  },
  {
    "id": "shs3-sci-t3-electronics-semiconductors",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Basic Electronics: Semiconductors, Diodes, Rectification & Logic Gates",
    "description": "Intrinsic semiconductors (silicon, germanium), doping, p-type and n-type semiconductors, p-n junction diode forward and reverse biasing, half-wave and full-wave bridge rectification, and fundamental digital logic gates (AND, OR, NOT, NAND, NOR).",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=7ukDKVHnac4",
    "youtubeId": "7ukDKVHnac4",
    "keyNotes": "• Semiconductors & Doping:\n  - Intrinsic semiconductors (pure Si, Ge): Moderate conductivity that increases with temperature.\n  - Doping: Adding trace impurity atoms to drastically increase free charge carriers.\n  - n-type: Doped with pentavalent atoms (Group V: Phosphorus, Arsenic); majority carriers are free electrons.\n  - p-type: Doped with trivalent atoms (Group III: Boron, Indium); majority carriers are positive holes.\n• p-n Junction Diode:\n  - Forward Bias: p-side connected to positive terminal; depletion layer narrows; large current flows.\n  - Reverse Bias: p-side connected to negative terminal; depletion layer widens; blocks current.\n  - Rectification: Converts AC to DC. Half-wave uses 1 diode; Full-wave uses 4 diodes in a bridge rectifier.\n• Digital Logic Gates & Truth Tables:\n  - NOT gate: Inverter; Q = NOT A (0 → 1, 1 → 0).\n  - AND gate: Q = A · B (Output 1 only when BOTH inputs are 1).\n  - OR gate: Q = A + B (Output 1 if AT LEAST ONE input is 1).\n  - NAND gate: AND followed by NOT; Q = NOT (A · B). Universal gate.\n  - NOR gate: OR followed by NOT; Q = NOT (A + B). Universal gate.",
    "detailedNotes": {
      "introduction": "Semiconductor electronics revolutionized modern computation, smartphones, solar photovoltaic systems, and automated control logic.",
      "realWorldContext": "Electronics repair technicians at Tip Toe Lane in Circle (Accra) troubleshoot smartphone power circuits, replacing damaged bridge rectifiers and capacitors in AC adapters to restore charging functions.",
      "objectives": [
        "Differentiate between intrinsic and extrinsic (n-type and p-type) semiconductors",
        "Explain the behavior of a p-n junction diode in forward and reverse bias",
        "Diagram and explain half-wave and full-wave bridge rectifier circuits with capacitor smoothing",
        "Draw standard circuit symbols, write Boolean expressions, and construct truth tables for basic logic gates"
      ],
      "sections": [
        {
          "title": "Full-Wave Bridge Rectification Circuit",
          "content": "A diode bridge rectifier converts alternating current into steady direct current.",
          "bulletPoints": [
            "During the positive half-cycle, two diagonal diodes conduct, steering current through the load in a fixed direction.",
            "During the negative half-cycle, the opposite pair of diodes conducts, steering current through the load in the SAME direction.",
            "A parallel smoothing capacitor charges at voltage peaks and discharges during troughs, converting ripple DC into smooth steady DC."
          ],
          "keyTakeaway": "A bridge rectifier uses 4 diodes to utilize both halves of an AC wave, producing unidirectional DC.",
          "realWorldExample": "Laptop and mobile phone chargers use diode bridge rectifiers to convert 240 V mains AC into smooth DC for battery charging."
        }
      ],
      "wassceExamTips": [
        "In diode diagrams, remember: Triangle points in direction of conventional forward current flow; the vertical line is the cathode (bar).",
        "State why NAND and NOR gates are called universal gates: \"Because any logic gate can be constructed using only combinations of them\".",
        "Remember that in forward bias, the positive terminal connects to the p-type material."
      ],
      "commonMistakes": [
        "Reversing p-type and n-type connections in forward bias.",
        "Confusing an AND gate symbol (straight back, rounded front) with an OR gate symbol (curved back, pointed front).",
        "Omitting the small inversion bubble on the output of NOT, NAND, and NOR gate symbols."
      ],
      "summaryChecklist": [
        "Can I construct the truth table for a 2-input NAND gate?",
        "Can I draw the 4-diode bridge rectifier circuit and sketch its output waveform?",
        "Can I explain the formation of the depletion region across an unbiased p-n junction?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-elec-1",
        "title": "Constructing a Logic Circuit Truth Table",
        "problem": "A logic circuit consists of two inputs A and B connected to an AND gate. The output of the AND gate is connected as the input to a NOT gate. (a) Draw the combined logic gate circuit. (b) Name the single equivalent logic gate. (c) Construct the complete truth table for all four input combinations.",
        "stepByStepSolution": [
          "Step 1: Circuit diagram: Inputs A and B enter an AND gate; the output feeds into a NOT gate. [B1]",
          "Step 2: The combination of an AND gate followed by a NOT gate is equivalent to a single NAND gate. [A1]",
          "Step 3: Construct the truth table: [M1]",
          "  - Row 1: A = 0, B = 0 → AND output = 0 → Inverter output Q = 1. [A1]",
          "  - Row 2: A = 0, B = 1 → AND output = 0 → Inverter output Q = 1.",
          "  - Row 3: A = 1, B = 0 → AND output = 0 → Inverter output Q = 1.",
          "  - Row 4: A = 1, B = 1 → AND output = 1 → Inverter output Q = 0. [A1]"
        ],
        "keyTakeaway": "A NAND gate produces an output of 0 only when all inputs are 1; otherwise its output is 1."
      },
      {
        "id": "ex-shs3-sci-elec-2",
        "title": "p-n Junction Biasing Mechanism",
        "problem": "Explain the microscopic behavior of electrons, holes, and the depletion layer when a p-n junction diode is: (a) Forward-biased. (b) Reverse-biased.",
        "stepByStepSolution": [
          "Step 1: Forward Bias: Positive terminal connected to p-side, negative to n-side. The external potential repels positive holes from p-side and free electrons from n-side toward the junction. [M1]",
          "Step 2: This overcomes the internal barrier potential, collapses the depletion layer, and allows continuous current to flow across the junction. [A1]",
          "Step 3: Reverse Bias: Positive terminal connected to n-side, negative to p-side. Majority electrons are attracted away from junction toward positive terminal, and holes away toward negative terminal. [M1]",
          "Step 4: This widens the non-conducting depletion layer, blocking majority carrier flow (only a tiny microampere leakage current of minority carriers flows). [A1]"
        ],
        "keyTakeaway": "Forward bias narrows the depletion layer allowing conduction; reverse bias widens it, blocking current."
      }
    ]
  },
  {
    "id": "shs3-sci-t3-soil-fertility-fertilizers",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Agricultural Science: Soil Fertility, NPK Fertilizers & Organic Manures",
    "description": "Plant nutrients (macro vs micronutrients), symptoms of nitrogen, phosphorus, and potassium deficiencies, synthetic mineral fertilizers (straight and compound NPK), organic manures (FYM, compost, green manure), soil liming, and soil conservation.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=kYI_G-oZcOE",
    "youtubeId": "kYI_G-oZcOE",
    "keyNotes": "• Essential Plant Nutrients:\n  - Primary Macronutrients (NPK): Nitrogen (leaf/vegetative growth), Phosphorus (root expansion, seed formation, ATP), Potassium (disease resistance, stomatal regulation, fruit quality).\n  - Secondary Macronutrients: Calcium, Magnesium (chlorophyll core), Sulfur.\n  - Micronutrients (Trace Elements): Iron, Zinc, Copper, Manganese, Boron, Molybdenum.\n• Deficiency Symptoms:\n  - Nitrogen deficiency: Stunted growth, chlorosis (general yellowing of older leaves).\n  - Phosphorus deficiency: Poor root development, purple/red coloration of leaves and stems.\n  - Potassium deficiency: Marginal leaf necrosis (\"scorched\" or burnt leaf tips and edges).\n• Mineral Fertilizers vs Organic Manures:\n  - Compound Fertilizers: Contain two or more nutrients (e.g. NPK 15-15-15, NPK 20-10-10). Rapid release, high concentration, risk of leaching and eutrophication.\n  - Organic Manures: Farmyard Manure (FYM), Compost, Green manure. Slow release, adds humus, improves soil crumb structure, water retention, and microbial biodiversity.\n• Soil Liming:\n  - Applying calcium carbonate (CaCO₃) or calcium hydroxide to neutralize acidic soils and raise soil pH to optimal 6.0 - 6.8 range.",
    "detailedNotes": {
      "introduction": "Soil fertility management balances inorganic chemical inputs with organic humus conservation to achieve sustained high crop yields without environmental degradation.",
      "realWorldContext": "The Planting for Food and Jobs (PFJ) initiative in Ghana subsidizes NPK 15-15-15 and Urea fertilizers for smallholder farmers, increasing cereal and legume yields across the northern grain basket.",
      "objectives": [
        "Classify essential plant nutrients into macro and micronutrients with physiological roles",
        "Diagnose specific N, P, and K deficiency symptoms on growing field crops",
        "Calculate nutrient masses from NPK fertilizer grade percentages",
        "Compare the benefits and environmental impacts of inorganic fertilizers versus organic manures"
      ],
      "sections": [
        {
          "title": "Fertilizer Calculations & Application Techniques",
          "content": "Fertilizer grades indicate the percentage by weight of elemental N, available phosphate (P₂O₅), and soluble potash (K₂O).",
          "bulletPoints": [
            "NPK 15-15-15: Contains 15% N, 15% P₂O₅, and 15% K₂O. In a 50 kg bag, there is 7.5 kg of each nutrient.",
            "Methods of Application: Broadcasting (scattering over entire surface), Band placement (in furrows along crop rows), Ring application (around tree trunks like cocoa and citrus), and Foliar application (spraying dissolved liquid fertilizer directly onto leaves)."
          ],
          "keyTakeaway": "Fertilizer ratios show the percentage of active nutrient mass contained within each bag.",
          "realWorldExample": "Cocoa farmers apply specialized Asaase Wura fertilizer (NPK 0-22-18 + 9CaO) formulated without nitrogen to encourage heavy flower and pod development rather than excessive foliage."
        }
      ],
      "wassceExamTips": [
        "Remember deficiency symptoms: Nitrogen = chlorosis/yellowing; Phosphorus = purpling; Potassium = marginal scorching.",
        "When calculating nutrient mass, multiply the percentage by the total weight of the fertilizer bag.",
        "List two advantages of organic manure: improves soil structure and enhances water-holding capacity."
      ],
      "commonMistakes": [
        "Confusing primary macronutrients (NPK) with secondary macronutrients (Ca, Mg, S).",
        "Applying nitrogen fertilizers during flowering (stimulates vegetative leaves instead of fruit/pod setting).",
        "Thinking synthetic fertilizers add organic matter or humus to soil (only organic manures add humus)."
      ],
      "summaryChecklist": [
        "Can I calculate the kilograms of Nitrogen in a 50 kg bag of NPK 20-10-10?",
        "Can I describe how to prepare a compost pit using farm waste?",
        "Can I explain the agricultural purpose of liming acidic soils?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-fert-1",
        "title": "Fertilizer Nutrient Mass Calculation",
        "problem": "A maize farmer in the Afram Plains purchases four 50 kg bags of compound fertilizer labeled NPK 15-15-15. Calculate: (a) The total mass of fertilizer purchased. (b) The total mass of pure nitrogen (N) contained in the four bags. (c) The mass of phosphate (P₂O₅) supplied.",
        "stepByStepSolution": [
          "Step 1: Total fertilizer mass = 4 bags × 50 kg = 200 kg of fertilizer. [A1]",
          "Step 2: NPK 15-15-15 contains 15% of Nitrogen by weight. [M1]",
          "Step 3: Mass of Nitrogen = 15% of 200 kg = (15 / 100) × 200 = 30.0 kg of Nitrogen. [A1]",
          "Step 4: Mass of Phosphate (P₂O₅) = 15% of 200 kg = (15 / 100) × 200 = 30.0 kg of P₂O₅. [A1]"
        ],
        "keyTakeaway": "The four bags supply 30 kg of elemental Nitrogen, 30 kg of Phosphate, and 30 kg of Potash."
      },
      {
        "id": "ex-shs3-sci-fert-2",
        "title": "Diagnosing Nutrient Deficiencies",
        "problem": "A farmer observes that older maize leaves in a field are pale yellow with dried tips, while young leaves remain light green. In another section, young tomato seedlings show dark purple coloration on the underside of leaves and poor root growth. Diagnose the specific nutrient deficiencies in both crops and prescribe remedies.",
        "stepByStepSolution": [
          "Step 1: Maize diagnosis: Nitrogen (N) deficiency. Chlorosis begins on older leaves because nitrogen is mobile and translocated to younger leaves. [A1]",
          "Step 2: Maize remedy: Top-dress with a nitrogenous fertilizer like Urea (46% N) or Ammonium Sulfate. [A1]",
          "Step 3: Tomato diagnosis: Phosphorus (P) deficiency. Purpling of leaves and stunted root branching are classic symptoms of inadequate phosphorus. [A1]",
          "Step 4: Tomato remedy: Apply Single Superphosphate (SSP) or Triple Superphosphate (TSP) as a basal band application near roots. [A1]"
        ],
        "keyTakeaway": "Nitrogen deficiency causes yellowing of older leaves; phosphorus deficiency causes purpling of leaves and poor root development."
      }
    ]
  },
  {
    "id": "shs3-sci-t3-biotechnology-fermentation",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 13,
    "title": "Industrial Biotechnology & Traditional Fermentation in Ghana",
    "description": "Traditional microbial fermentation (Ga kenkey, gari detoxification, pito, palm wine, cocoa sweating), industrial biotechnology, recombinant DNA technology, mass production of human insulin, transgenic Bt crops, plant tissue culture micropropagation, and biosafety ethics.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=J1Z5k9n0kY0",
    "youtubeId": "J1Z5k9n0kY0",
    "keyNotes": "• Traditional Fermentation in Ghana:\n  - Ga Kenkey: Soaked maize fermented by Lactic Acid Bacteria (Lactobacillus, Leuconostoc) and yeasts for 2-3 days; partial cooking (aflata) and steaming develop sour taste and preserve dough.\n  - Gari Processing: Grated cassava paste fermented in porous sacks under mechanical press; endogenous linamarase enzymes hydrolyze toxic cyanogenic glucosides (linamarin), releasing volatile HCN gas to detoxify cassava.\n  - Cocoa Fermentation: Wet cocoa beans piled on plantain leaves sweat for 6 days; microbial succession (yeasts → lactic bacteria → acetic acid bacteria) generates heat (~50°C), killing the embryo and forming chocolate flavor precursors.\n  - Palm Wine & Pito: Yeast fermentation of oil palm sap or malted sorghum into alcoholic beverages.\n• Modern Biotechnology & Genetic Engineering:\n  - Recombinant DNA: Isolating a target gene with restriction endonucleases and inserting it into a plasmid vector using DNA ligase. E.g. mass production of human insulin in E. coli bacteria.\n  - Transgenic Bt Crops: Bt cowpea engineered with Cry1Ab gene from Bacillus thuringiensis to resist the Maruca vitrata pod borer.\n  - Plant Tissue Culture: Micropropagation of virus-free clonal explants on sterile nutrient agar (used for rapid multiplication of disease-free cassava and yam seed tubers).",
    "detailedNotes": {
      "introduction": "Biotechnology harnesses living organisms, cellular enzymes, and genetic systems to produce fermented foods, pharmaceuticals, transgenic crops, and industrial enzymes.",
      "realWorldContext": "In Ghana, the Savanna Agricultural Research Institute (SARI) in Nyankpala developed genetically modified Bt cowpea, providing Ghanaian farmers with natural resistance against the destructive legume pod borer, reducing pesticide spray rounds from eight to two.",
      "objectives": [
        "Describe the biochemical and microbial processes involved in Ghanaian traditional food fermentations (kenkey, gari, cocoa)",
        "Explain how cassava fermentation eliminates toxic cyanogenic glucosides to prevent cyanide poisoning",
        "Outline the molecular steps of recombinant DNA technology in producing human insulin",
        "Explain the technique and agricultural benefits of plant tissue culture micropropagation"
      ],
      "sections": [
        {
          "title": "Cocoa Sweating & Flavor Precursor Biochemistry",
          "content": "Fermenting raw cocoa beans is an essential biochemical process for chocolate manufacturing.",
          "bulletPoints": [
            "Anaerobic Yeast Phase (Days 1-2): Yeasts ferment the sugary pulp into ethanol and CO₂.",
            "Lactic Acid Phase (Days 2-3): Lactic acid bacteria convert sugars to lactic acid.",
            "Acetic Acid Phase (Days 4-6): Turning the heap introduces oxygen; Acetobacter oxidizes ethanol into acetic acid (exothermic reaction raising temperature to 50°C).",
            "Embryo Death: Heat and acetic acid penetrate bean cotyledons, inactivating the seed germ and triggering enzymatic breakdown of storage proteins into flavor peptides."
          ],
          "keyTakeaway": "Cocoa fermentation kills the seed germ and develops the essential aromatic flavor precursors of chocolate.",
          "realWorldExample": "Ghanaian cocoa earns a premium price on the international commodity exchange in London because Ghanaian farmers complete full 6-day plantain leaf heap fermentations."
        }
      ],
      "wassceExamTips": [
        "State the microorganism responsible for alcohol fermentation: Saccharomyces cerevisiae (yeast).",
        "Explain how fermenting cassava detoxifies it: \"Enzymes break down cyanogenic glucosides, releasing hydrogen cyanide gas\".",
        "Define an explant in tissue culture: \"A small sterile piece of plant tissue cut from a parent plant to initiate in vitro growth\"."
      ],
      "commonMistakes": [
        "Calling bacteria fungi or calling yeast a bacterium (yeast is a single-celled fungus).",
        "Believing that genetic engineering is identical to traditional selective breeding.",
        "Thinking unfermented cocoa beans can produce quality chocolate."
      ],
      "summaryChecklist": [
        "Can I outline the steps of recombinant DNA insulin synthesis using plasmids?",
        "Can I explain the 3 microbial phases of cocoa bean fermentation?",
        "Can I list 3 advantages of plant tissue culture micropropagation over traditional stem cuttings?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-bio-1",
        "title": "Recombinant DNA Insulin Synthesis",
        "problem": "Outline the step-by-step procedure used in industrial genetic engineering to produce human insulin using recombinant Escherichia coli bacteria.",
        "stepByStepSolution": [
          "Step 1: Isolate the human insulin gene from beta cells of the human pancreas. [B1]",
          "Step 2: Cut the insulin gene out of human DNA using a specific restriction endonuclease enzyme, creating \"sticky ends\". [M1, A1]",
          "Step 3: Extract a circular plasmid from an E. coli bacterium and cut it with the SAME restriction endonuclease. [M1]",
          "Step 4: Splice the human insulin gene into the cut bacterial plasmid using the enzyme DNA ligase to form a recombinant plasmid. [M1, A1]",
          "Step 5: Re-insert the recombinant plasmid back into an E. coli bacterium (transformation). [A1]",
          "Step 6: Grow the transgenic bacteria in large industrial fermenters; the bacteria translate the human gene and secrete pure human insulin, which is harvested and purified. [A1]"
        ],
        "keyTakeaway": "Restriction enzymes cut DNA at specific sites; DNA ligase splices the target gene into the plasmid vector."
      },
      {
        "id": "ex-shs3-sci-bio-2",
        "title": "Detoxification of Cassava in Gari Production",
        "problem": "Cassava roots naturally contain cyanogenic glucosides (linamarin and lotaustralin) which are potentially lethal if consumed raw. Explain chemically how traditional grating, fermenting, and dewatering detoxifies the crop during gari manufacturing.",
        "stepByStepSolution": [
          "Step 1: Peeling and mechanically grating cassava ruptures cell membranes, bringing intracellular linamarin into contact with the cell-wall enzyme linamarase. [B1]",
          "Step 2: Linamarase hydrolyzes linamarin into glucose and acetone cyanohydrin. [M1]",
          "Step 3: During the 2 to 3 days of fermentation under heavy stone presses, acetone cyanohydrin breaks down into acetone and volatile hydrogen cyanide (HCN) gas. [M1, A1]",
          "Step 4: The toxic hydrogen cyanide dissolves in the expelled cassava juice or evaporates into the air as gas. [A1]",
          "Step 5: Final roasting (garifying) on hot stainless steel pans drives off all remaining traces of volatile HCN, leaving safe, non-toxic gari. [A1]"
        ],
        "keyTakeaway": "Mechanical grating and fermentation release volatile hydrogen cyanide, completely detoxifying cassava."
      }
    ]
  },
  {
    "id": "shs3-sci-t3-chemical-industries-ghana",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 14,
    "title": "Chemical Manufacturing Industries in Ghana",
    "description": "Overview of major chemical industries in Ghana: Portland cement production (Ghacem), soap and detergent manufacture, biogas technology, petroleum refining at TOR, industrial safety, environmental impact assessments, and FDA/GSA quality assurance standards.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=kKKM8Y-u7ds",
    "youtubeId": "kKKM8Y-u7ds",
    "keyNotes": "• Portland Cement Manufacture (Ghacem Plants):\n  - Raw Materials: Limestone (calcium carbonate, CaCO₃), clay/shale (aluminosilicates), and gypsum (CaSO₄·2H₂O).\n  - Process: Raw meal crushed, blended, and heated in rotary kilns at 1,450°C to form clinker (dicalcium and tricalcium silicates).\n  - Clinker ground with 3 - 5% gypsum (gypsum retards flash setting of concrete, allowing working time).\n• Biogas Generation:\n  - Anaerobic digestion of organic biomass (cattle dung, human waste, food scraps) inside an airtight digester.\n  - Microorganisms: Acidogenic bacteria convert organics to fatty acids; Methanogenic bacteria convert acids into biogas (~60% CH₄, ~40% CO₂).\n  - Effluent: High-grade bio-slurry fertilizer rich in nitrogen and organic matter.\n• Petroleum Refining at TOR:\n  - Atmospheric fractional distillation of crude oil into LPG, gasoline, kerosene, diesel, and fuel oil.\n• Quality Control & Regulatory Standards:\n  - Ghana Standards Authority (GSA): Sets chemical purity, physical tolerance, and certification marks.\n  - Food and Drugs Authority (FDA): Regulates food, cosmetic, and pharmaceutical manufacturing via GMP.",
    "detailedNotes": {
      "introduction": "Chemical manufacturing converts raw minerals and agricultural feedstocks into value-added products that drive national infrastructure, construction, and public hygiene.",
      "realWorldContext": "At the Ghacem cement factories in Tema and Takoradi, imported clinker and local limestone are pulverized with gypsum to produce millions of bags of Super Cool and Extra Fort cement used in residential housing and bridge construction across Ghana.",
      "objectives": [
        "Outline the chemical reactions and raw materials involved in manufacturing Portland cement",
        "Explain the role of gypsum in retarding the setting time of cement",
        "Describe the design, microbial stages, and products of a domestic biogas digester",
        "Evaluate industrial pollution controls and FDA/GSA quality standards for chemical products"
      ],
      "sections": [
        {
          "title": "Portland Cement Chemistry & Setting Reaction",
          "content": "Cement is a hydraulic binder that hardens through exothermic hydration reactions upon mixing with water.",
          "bulletPoints": [
            "Calcination: Limestone decomposes: CaCO₃(s) → CaO(s) + CO₂(g).",
            "Clinkering: Calcium oxide combines with silica and alumina at 1,450°C to form alite and belite clinker compounds.",
            "Hydration Setting: Tricalcium silicate reacts with water to form calcium silicate hydrate (C-S-H) gel, interlocking sand and stone into rigid concrete rock."
          ],
          "keyTakeaway": "Cement hardens by hydration of calcium silicates; adding gypsum prevents premature flash setting.",
          "realWorldExample": "Fresh concrete cast on construction sites must be continuously wetted with water (curing) for days to complete hydration and achieve peak compressive strength."
        }
      ],
      "wassceExamTips": [
        "Always specify why gypsum is added to cement clinker: \"To retard / delay the setting time of concrete\".",
        "State the two primary gases in biogas: Methane (~60%) and Carbon dioxide (~40%).",
        "Name the regulatory bodies in Ghana: FDA for food and pharmaceuticals, GSA for industrial goods standards, EPA for environmental protection."
      ],
      "commonMistakes": [
        "Thinking cement dries by evaporation (cement sets chemically by hydration with water; it actually requires moisture to cure).",
        "Confusing limestone (CaCO₃) with quicklime (CaO) or slaked lime (Ca(OH)₂).",
        "Believing biogas contains pure propane (biogas is predominantly methane)."
      ],
      "summaryChecklist": [
        "Can I outline the 4 stages of Portland cement manufacture?",
        "Can I diagram a fixed-dome biogas digester showing inlet, digester, gas pipe, and slurry outlet?",
        "Can I list 3 safety precautions required when handling concentrated caustic soda in soap factories?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-chem-1",
        "title": "Chemical Reactions in Cement Manufacture",
        "problem": "Write balanced chemical equations for: (a) The thermal decomposition of limestone inside a cement rotary kiln. (b) The reaction of quicklime with silica sand at 1,450°C to form dicalcium silicate. (c) Explain why gypsum is an indispensable component of commercial Portland cement.",
        "stepByStepSolution": [
          "Step 1: Thermal decomposition of limestone: CaCO₃(s) → CaO(s) + CO₂(g) (strongly endothermic calcination at ~900-1,000°C). [A1]",
          "Step 2: Clinker formation: 2CaO(s) + SiO₂(s) → Ca₂SiO₄(s) (dicalcium silicate). [A1]",
          "Step 3: Role of gypsum: Pure ground clinker sets instantaneously within minutes when mixed with water (\"flash set\"), making it impossible to mix, transport, and place concrete. [M1]",
          "Step 4: Grinding clinker with 3-5% gypsum (CaSO₄·2H₂O) slows down the hydration of tricalcium aluminate, providing workers 1 to 2 hours of workable setting time. [A1]"
        ],
        "keyTakeaway": "Gypsum delays concrete setting, providing essential workability time for construction workers."
      },
      {
        "id": "ex-shs3-sci-chem-2",
        "title": "Operation of a Domestic Biogas Plant",
        "problem": "A boarding school in the Central Region installs a 20 m³ anaerobic biogas digester to process kitchen food waste and cow dung. (a) Name the two main gases produced. (b) Explain how the gas is utilized in the school. (c) Describe how the remaining effluent slurry is utilized.",
        "stepByStepSolution": [
          "Step 1: The two main gases produced are Methane (CH₄, ~60-70%) and Carbon dioxide (CO₂, ~30-40%). [A1]",
          "Step 2: Biogas utilization: Piped directly into the school dining hall kitchen burners as clean, renewable cooking gas, drastically reducing expenditure on firewood and commercial LPG. [A1]",
          "Step 3: Effluent utilization: The spent slurry is rich in mineralized nitrogen, phosphorus, and potassium with zero weed seeds or pathogens. It is applied directly to the school vegetable farm as a high-grade organic bio-fertilizer. [A1]"
        ],
        "keyTakeaway": "Biogas plants provide clean cooking fuel while transforming raw organic refuse into pathogen-free organic fertilizer."
      }
    ]
  },
  {
    "id": "shs3-sci-t3-environmental-galamsey-mining",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 15,
    "title": "Environmental Degradation: Galamsey (Illegal Mining), Water Pollution & Land Reclamation",
    "description": "Alluvial and open-cast artisanal gold mining (galamsey), mercury amalgamation and atmospheric toxicity, heavy metal contamination (lead, arsenic, cadmium), destruction of river basins (Pra, Birim, Ankobra), impacts on cocoa farms and water treatment plants, and mine site reclamation.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=sKJoXdrb70Q",
    "youtubeId": "sKJoXdrb70Q",
    "keyNotes": "• Galamsey Mining Practices:\n  - Illegal, unregulated small-scale surface and alluvial mining (\"gather and sell\").\n  - Heavy excavators, bulldozers, and floating \"chamfi\" dredgers excavate riverbeds and divert stream channels.\n• Heavy Metal Pollution:\n  - Mercury (Hg): Used to amalgamate fine gold particles; roasting amalgams releases neurotoxic mercury vapor. In water, bacteria convert Hg to methylmercury (CH₃Hg⁺), which biomagnifies up the food chain to fish and humans, causing Minamata disease (neurological disorders, tremors, birth defects).\n  - Heavy Metals: Arsenic (As), Lead (Pb), Cadmium (Cd) leached from disturbed ores into drinking aquifers.\n• Ecological & Economic Consequences in Ghana:\n  - River destruction: Pra, Birim, Ankobra, and Offin rivers exhibit extreme turbidity (> 3,000 NTU). GWCL forced to shut down water treatment plants (e.g. Bunso, Kyebi).\n  - Destruction of cocoa farmlands: Productive cocoa trees uprooted for short-term gold mining; risk of international EU import bans on Ghanaian cocoa due to heavy metal residue.\n  - Open death pits: Abandoned excavation pits fill with water, breeding malaria mosquitoes and causing fatal drownings.\n• Land Reclamation & Sustainable Mining:\n  - Backfilling mining pits, leveling contours, replacing stockpiled topsoil, and replanting fast-growing leguminous trees (Acacia, vetiver grass).\n  - Mercury-free gold extraction: Gravimetric shaking tables, retorts, and closed-circuit flotation.",
    "detailedNotes": {
      "introduction": "Illegal artisanal gold mining (galamsey) represents the most urgent ecological crisis threatening Ghana’s water security, forest reserves, cocoa economy, and public health.",
      "realWorldContext": "In mining districts like Obuasi, Dunkwa-on-Offin, and Manso Nkwanta, the River Offin and River Pra have turned muddy yellow from millions of tons of dredged silt, forcing municipal water treatment plants to shut down and depriving thousands of clean tap water.",
      "objectives": [
        "Explain the chemistry of mercury amalgamation and the biomagnification of methylmercury in aquatic food webs",
        "Analyze the multi-dimensional impacts of galamsey on river hydrology, water treatment costs, and cocoa farming",
        "Describe the mechanism of Acid Mine Drainage (AMD) resulting from exposed sulfide ores",
        "Formulate comprehensive engineering and biological reclamation strategies for degraded mine sites"
      ],
      "sections": [
        {
          "title": "Mercury Amalgamation & Food Chain Biomagnification",
          "content": "Mercury is a bioaccumulative neurotoxin that threatens both miners and downstream communities.",
          "bulletPoints": [
            "Amalgam Formation: Mercury bonds with gold dust to form a pasty amalgam (Au-Hg).",
            "Open Roasting: Miners burn the amalgam with blowtorches in open air. Mercury vaporizes at 357°C into the atmosphere, leaving sponge gold behind while miners inhale toxic fumes.",
            "Biomagnification: Rains wash mercury into rivers. Sulfate-reducing anaerobic bacteria in river sediments methylate inorganic Hg into highly toxic methylmercury [CH₃Hg]⁺.",
            "Trophic Escalation: Microscopic algae absorb methylmercury; small fish eat algae; predator fish (mudfish, tilapia) accumulate higher concentrations; humans eating fish receive toxic doses."
          ],
          "keyTakeaway": "Methylmercury biomagnifies up trophic levels, causing irreversible brain damage, tremors, and congenital birth defects.",
          "realWorldExample": "Pregnant women in galamsey-polluted river basins are advised by the Ghana Health Service to avoid eating locally caught catfish due to elevated methylmercury risks to fetal brain development."
        }
      ],
      "wassceExamTips": [
        "Define biomagnification clearly: \"The progressive increase in concentration of a persistent chemical pollutant at successively higher trophic levels in a food chain\".",
        "Name the specific heavy metals linked to galamsey: Mercury, Lead, Arsenic, Cadmium.",
        "List 3 distinct steps of mine site reclamation: Backfilling pits, replacing topsoil, and revegetation with cover crops/trees."
      ],
      "commonMistakes": [
        "Confusing bioaccumulation (accumulation in a single organism over time) with biomagnification (increase across trophic levels of a food chain).",
        "Believing boiling polluted river water removes dissolved mercury and lead (heavy metals are elements and cannot be destroyed by boiling).",
        "Assuming galamsey only affects miners (airborne mercury vapors and polluted fish affect downstream non-miners hundreds of kilometers away)."
      ],
      "summaryChecklist": [
        "Can I explain how galamsey causes water treatment shutdowns at Ghana Water Company plants?",
        "Can I diagram the biomagnification of methylmercury from river sediment to humans?",
        "Can I describe the steps required to restore a destroyed open mining pit back into arable farmland?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-gal-1",
        "title": "Biomagnification of Methylmercury",
        "problem": "In a galamsey-polluted stretch of the Birim River, mercury concentrations are measured across trophic levels as follows: River water = 0.00005 ppm; Phytoplankton = 0.05 ppm; Zooplankton = 0.4 ppm; Small fish = 2.0 ppm; Osprey (fish eagle) = 50.0 ppm. (a) Calculate the concentration factor from river water to the fish eagle. (b) Explain why the concentration of mercury increases at each successive trophic level.",
        "stepByStepSolution": [
          "Step 1: Calculate magnification factor: Factor = Concentration in top predator / Concentration in water = 50.0 ppm / 0.00005 ppm = 1,000,000 times (one million-fold increase). [M1, A1]",
          "Step 2: Explanation: Methylmercury is lipophilic (fat-soluble) and binds tightly to cellular proteins, meaning organisms cannot easily excrete or metabolize it. [M1]",
          "Step 3: Organisms at each trophic level must consume many times their own body weight in prey over their lifetime, absorbing all the persistent mercury stored in that prey. [M1]",
          "Step 4: As a result, the chemical progressively concentrates at higher trophic levels (biomagnification). [A1]"
        ],
        "keyTakeaway": "Persistent fat-soluble toxins biomagnify exponentially up food chains, reaching lethal concentrations in apex predators and humans."
      },
      {
        "id": "ex-shs3-sci-gal-2",
        "title": "Mine Site Reclamation Plan",
        "problem": "Design a 4-stage scientific reclamation plan to rehabilitate an abandoned 5-hectare galamsey mining site littered with deep water-filled pits and bare subsoil in the Western Region.",
        "stepByStepSolution": [
          "Step 1: Pit Backfilling & Grading: Use heavy earth-moving equipment (excavators and bulldozers) to drain and backfill dangerous open pits with mining spoil and overburden rock, contouring the land to match natural drainage gradients. [A1]",
          "Step 2: Topsoil Replacement: Spread a minimum 30 cm layer of preserved fertile topsoil over the leveled site to re-establish organic matter and beneficial soil microflora. [A1]",
          "Step 3: Chemical Neutralization: Test soil pH; apply agricultural limestone (CaCO₃) to neutralize acidity generated by oxidized pyrite minerals. [A1]",
          "Step 4: Biological Revegetation: Plant nitrogen-fixing pioneer cover crops (Centrosema pubescens, Mucuna) to bind loose soil against erosion, followed by fast-growing indigenous trees (Acacia, mahogany, oil palm) to restore the tropical forest canopy. [A1]"
        ],
        "keyTakeaway": "Reclamation requires mechanical pit backfilling, topsoil re-application, chemical pH stabilization, and biological revegetation."
      }
    ]
  },
  {
    "id": "shs3-sci-t3-wassce-practical-mastery",
    "subjectId": "science",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 16,
    "title": "WASSCE Practical Mastery: Science Apparatus, Qualitative Reagents & Specimen Identification",
    "description": "Comprehensive preparation for WASSCE Science Practical Paper 3: Identification and use of laboratory apparatus, food nutrient tests (starch, reducing sugars, proteins, fats), qualitative inorganic analysis of cations and anions, biological drawings and magnification, and optical/electrical circuit setups.",
    "isFreeTrial": false,
    "isVip": true,
    "youtubeUrl": "https://www.youtube.com/watch?v=URUJD5NEXC8",
    "youtubeId": "URUJD5NEXC8",
    "keyNotes": "• Laboratory Food Nutrient Tests:\n  - Starch: Add iodine solution → Blue-black coloration.\n  - Reducing Sugars (Glucose): Add Benedict’s solution and boil → Green → Yellow → Brick-red precipitate.\n  - Non-Reducing Sugars (Sucrose): Boil with dilute HCl (hydrolyzes to glucose/fructose), neutralize with NaHCO₃, add Benedict's and boil → Brick-red precipitate.\n  - Proteins: Biuret test (dilute NaOH + 1% CuSO₄) → Violet / Purple coloration.\n  - Lipids / Fats: Emulsion test (dissolve in ethanol, pour into cold water) → Cloudy white emulsion; or grease-spot test on filter paper → Permanent translucent spot.\n• Qualitative Chemical Tests for Ions:\n  - Cations (with dilute NaOH and NH₃(aq)):\n    * Cu²⁺: Pale blue precipitate; insoluble in excess NaOH, dissolves in excess NH₃ to form deep royal blue solution.\n    * Fe²⁺: Dirty green precipitate; insoluble in excess.\n    * Fe³⁺: Reddish-brown precipitate; insoluble in excess.\n    * Al³⁺ / Zn²⁺ / Pb²⁺: White precipitate; soluble in excess NaOH (amphoteric).\n  - Anions:\n    * Chloride (Cl⁻): Dilute HNO₃ + AgNO₃ → Curdy white precipitate of AgCl, soluble in aqueous ammonia.\n    * Sulfate (SO₄²⁻): Dilute HCl + BaCl₂ → Dense white precipitate of BaSO₄.\n    * Carbonate (CO₃²⁻): Dilute acid → Effervescence of gas that turns limewater milky (CO₂).\n• WASSCE Biological Drawing Disciplines:\n  - Sharp HB pencil, unbroken single clear lines, NO SHADING. Straight horizontal ruler label lines without arrowheads. State magnification: Magnification = Size of drawing / Actual size of specimen.",
    "detailedNotes": {
      "introduction": "WASSCE Science Paper 3 (Practicals) carries significant weighting. Scoring high marks requires rigorous experimental discipline, correct data tabulation, accurate instrument reading, and precise qualitative observations.",
      "realWorldContext": "In commercial quality control laboratories in Ghana, food scientists at the Food and Drugs Authority (FDA) perform these exact biochemical and titrimetric tests daily to detect adulteration in imported canned foods and local dairy products.",
      "objectives": [
        "Perform standard qualitative biochemical tests for carbohydrates, proteins, and lipids with precise reporting",
        "Identify unknown inorganic cations and anions using sodium hydroxide, aqueous ammonia, silver nitrate, and barium chloride",
        "Execute biological drawing questions obeying all WAEC criteria (lines, labeling, magnification)",
        "Avoid common experimental errors in optics, mechanics, and electrical practical setups"
      ],
      "sections": [
        {
          "title": "Systematic Food Tests Reporting in WASSCE",
          "content": "WAEC requires food tests to be tabulated under: Test, Observation, and Deduction.",
          "bulletPoints": [
            "Test Column: State reagents and physical actions (e.g. \"To 2 cm³ of food solution X, add equal volume of Benedict’s solution and boil in a water bath\").",
            "Observation Column: State initial and final colors accurately (e.g. \"Solution changes from blue to green, then yellow, forming a brick-red precipitate\").",
            "Deduction Column: State whether the nutrient is present, confirmed, or absent (e.g. \"Reducing sugar present / confirmed\")."
          ],
          "keyTakeaway": "Always state the initial color, color transition, and final precipitate when reporting qualitative tests.",
          "realWorldExample": "Testing honey adulteration at the Ghana Standards Authority involves Benedict’s test to detect added synthetic glucose syrups."
        }
      ],
      "wassceExamTips": [
        "In qualitative analysis tables, never just write \"positive\"; write the exact color and state of matter (e.g. \"A brick-red precipitate is formed\").",
        "In physics graph plotting: Choose scales that occupy at least 50% of the grid, label axes with quantities and units, plot points with a sharp pencil dot circled (⊙) or cross (×), and draw a single thin line of best fit.",
        "Never shade biological drawings; shading results in automatic forfeiture of the \"Line Quality\" mark."
      ],
      "commonMistakes": [
        "Boiling ethanol over an open flame (always heat flammable alcohol in a hot water bath).",
        "Putting arrowheads on label lines in biological diagrams.",
        "Omitting units in physics and chemistry data tables."
      ],
      "summaryChecklist": [
        "Can I construct a 3-column food test table for starch, glucose, protein, and fat?",
        "Can I distinguish between Cu²⁺, Fe²⁺, and Fe³⁺ cations using bench reagents?",
        "Can I calculate drawing magnification and format label lines without arrowheads?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs3-sci-prac-1",
        "title": "Reporting Food Test for Protein (Biuret Test)",
        "problem": "A candidate is provided with an unlabelled cloudy liquid Specimen S. Describe the laboratory test to determine if Specimen S contains protein, and format your answer into a standard WAEC 3-column table.",
        "stepByStepSolution": [
          "Step 1: Test Column: To 2 cm³ of Specimen S in a clean test tube, add 2 cm³ of dilute sodium hydroxide solution (NaOH), followed by 2 to 3 drops of 1% copper(II) sulfate solution (CuSO₄). Shake gently. [M1, A1]",
          "Step 2: Observation Column: The pale blue solution turns into a clear violet / purple coloration. [A1]",
          "Step 3: Deduction Column: Protein present / confirmed. [A1]",
          "Step 4: Chemistry explanation: Alkaline copper(II) ions form a coordination complex with peptide bonds (-CO-NH-) in protein chains, yielding the characteristic purple Biuret complex. [B1]"
        ],
        "keyTakeaway": "The Biuret test detects peptide bonds; violet/purple confirms the presence of protein."
      },
      {
        "id": "ex-shs3-sci-prac-2",
        "title": "Qualitative Analysis of Unknown Salt Solution Q",
        "problem": "An unknown salt solution Q is tested with aqueous sodium hydroxide (NaOH) and aqueous ammonia (NH₃). With NaOH, a pale blue precipitate forms, which is insoluble in excess NaOH. With NH₃, a pale blue precipitate forms, which dissolves in excess NH₃ to produce a deep royal blue solution. Identify the cation in Q and write the chemical reactions.",
        "stepByStepSolution": [
          "Step 1: The cation in solution Q is Copper(II) ion (Cu²⁺). [A1]",
          "Step 2: Reaction with NaOH: Cu²⁺(aq) + 2OH⁻(aq) → Cu(OH)₂(s) (pale blue precipitate of copper(II) hydroxide, insoluble in excess NaOH). [M1, A1]",
          "Step 3: Reaction with aqueous ammonia: Initially forms Cu(OH)₂(s). In excess ammonia, the precipitate dissolves to form the tetraamminecopper(II) complex ion: Cu(OH)₂(s) + 4NH₃(aq) → [Cu(NH₃)₄]²⁺(aq) + 2OH⁻(aq) (deep royal blue solution). [M1, A1]"
        ],
        "keyTakeaway": "Dissolution of pale blue copper hydroxide into a deep royal blue solution in excess ammonia confirms Cu²⁺."
      }
    ]
  }
]
;

// Attach quizzes
SHS3_SCIENCE_TOPICS.forEach(topic => {
  topic.quiz = SHS3_SCIENCE_QUIZZES[topic.id];
});
