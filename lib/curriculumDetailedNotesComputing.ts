// Detailed Study Notes for Ghanaian JHS 1 Computing
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum

import { DetailedNotes } from './types';

export const JHS1_COMPUTING_DETAILED_NOTES: Record<string, DetailedNotes> = {
  "jhs1-ict-t1-intro": {
    "topicId": "jhs1-ict-t1-intro",
    "realWorldContext": "Computers are the transformative engine of modern Ghanaian society. From mobile money transactions in bustling village markets and automated teller machines (ATMs) in regional capitals to the National Identification Authority (Ghana Card registration) and WAEC computerized school placement systems (CSSPS), computers process data into actionable intelligence every second.",
    "objectives": [
      "Define a computer and distinguish between raw data and meaningful information.",
      "Explain the four stages of the Information Processing Cycle: Input, Processing, Output, and Storage (IPOS).",
      "Analyze the fundamental characteristics of computers: Speed, Accuracy, Diligence, Versatility, and Storage.",
      "Understand the Garbage In, Garbage Out (GIGO) principle in data processing."
    ],
    "sections": [
      {
        "title": "1. What is a Computer? Data vs Information",
        "content": "A computer is an automatic, programmable electronic machine that accepts raw data through input devices, processes the data according to programmed logical instructions in its CPU, presents the resulting information via output devices, and saves the data in secondary storage for future use.\n\n• Data:\nRaw, unorganized, unprocessed facts, numbers, symbols, letters, or observations that lack context and convey no inherent meaning on their own.\nExamples: 'Kwame', '78', '45', 'B+'.\n\n• Information:\nData that has been collected, processed, organized, structured, and contextualized to make it meaningful, understandable, and valuable for human decision-making.\nExample: 'Kwame Mensah scored 78% in Computing, earning a Grade 1 and ranking 2nd in class.'",
        "keyTakeaway": "Data is raw, unorganized facts; Information is processed, meaningful data ready for decision-making.",
        "realWorldExample": "In an electoral polling station, a citizen's voter ID number is raw data; the printed voter register showing their registered polling station and photograph is information."
      },
      {
        "title": "2. The Information Processing Cycle (IPOS)",
        "content": "Every digital computer executes the universal four-stage Information Processing Cycle (IPOS):\n\n1. Input Stage:\nCapturing or entering raw data, numbers, text, or commands into the computer's memory using input hardware (e.g. typing on a keyboard, scanning a barcode, clicking a mouse).\n\n2. Processing Stage:\nThe central manipulation of data performed by the Central Processing Unit (CPU). Involves mathematical calculations (addition, subtraction), logical comparisons, sorting lists alphabetically, and converting binary pulses into human-readable results.\n\n3. Output Stage:\nThe dissemination and presentation of processed information to the human user in visual, physical, or auditory formats (e.g. displaying on an LED monitor, printing a paper receipt, playing sound through speakers).\n\n4. Storage Stage:\nThe permanent or temporary preservation of data, applications, and operating systems on storage media (e.g. SSD, hard disk, USB drive) so it can be retrieved weeks or years later.",
        "keyTakeaway": "The Information Processing Cycle follows a strict four-step loop: Input → Processing → Output → Storage.",
        "realWorldExample": "When checking BECE results on a smartphone: You input the voucher PIN (Input), the WAEC server validates the candidate index (Process), the terminal statement of results appears on screen (Output), and the PDF is downloaded to phone memory (Storage)."
      },
      {
        "title": "3. Core Characteristics of Digital Computers",
        "content": "Computers outperform humans in specific computational tasks due to five primary characteristics:\n\n1. Incredible Speed:\nComputers process billions of calculations per second, with speeds measured in Gigahertz (GHz). Operations that would take human mathematicians years are executed in fractions of a microsecond.\n\n2. High Accuracy & The GIGO Principle:\nComputers are extraordinarily precise and do not make calculation errors on their own. Errors occur due to incorrect human input or flawed software code—a phenomenon known as Garbage In, Garbage Out (GIGO). If faulty data is entered, faulty results are produced.\n\n3. Diligence:\nUnlike human workers who experience fatigue, eye strain, boredom, and loss of concentration after hours of repetitive tasks, a computer performs millions of identical calculations continuously without declining in accuracy.\n\n4. Versatility:\nThe ability of a single computer to execute completely different tasks seamlessly—playing educational science videos, running accounting spreadsheets, designing architectural blueprints, and sending emails.\n\n5. Vast Storage Capacity:\nComputers store massive encyclopedias of books, videos, and national databases in tiny memory chips.",
        "keyTakeaway": "Computers are characterized by high speed, precision (GIGO), tireless diligence, versatility, and vast memory storage.",
        "realWorldExample": "A bank computer processes thousands of ATM withdrawals simultaneously without getting fatigued or calculating wrong balances."
      },
      {
        "title": "4. Limitations of Computers",
        "content": "Despite their power, computers have significant limitations:\n\n1. Lack of Common Sense and Intuition:\nComputers cannot think, reason, or make moral judgments outside the exact instructions written in their programming.\n\n2. Dependence on Human Instructions:\nA computer cannot operate without human programs (software) and electrical energy.\n\n3. Vulnerability to Environmental Factors and Malware:\nElectronic circuitry can be destroyed by power surges, dust, moisture, and computer viruses.",
        "keyTakeaway": "Computers lack original human emotions, moral reasoning, and common sense; they depend completely on human programming.",
        "realWorldExample": "If an accountant mistakenly types GHS 1,000,000 instead of GHS 1,000, the computer calculates taxes on the million cedis without questioning the mistake (GIGO)."
      }
    ],
    "commonMistakes": [
      "Using the terms 'data' and 'information' interchangeably (data is raw; information is processed and meaningful).",
      "Thinking that computers make mathematical mistakes on their own (mistakes are almost always due to incorrect human input - GIGO).",
      "Confusing the stages of the IPOS cycle: e.g. placing output before processing.",
      "Assuming computers have feelings and can make independent moral decisions."
    ],
    "beceExamTips": [
      "In BECE Section A, questions frequently test the definition of GIGO: remember it stands for 'Garbage In, Garbage Out'.",
      "List the four stages of the IPOS cycle in exact sequential order: Input → Processing → Output → Storage.",
      "Give practical Ghanaian examples when asked to illustrate data vs information (e.g. raw marks vs terminal report card)."
    ],
    "summaryChecklist": [
      "Can define a computer and explain the difference between data and information.",
      "Know the 4 stages of the Information Processing Cycle (IPOS).",
      "Understand the characteristics: Speed, Accuracy (GIGO), Diligence, Versatility, Storage.",
      "Can explain the limitations of computers."
    ]
  },
  "jhs1-ict-t2-generations": {
    "topicId": "jhs1-ict-t2-generations",
    "realWorldContext": "Today's ultra-thin smartphones and laptops possess millions of times more computing power than the room-sized computers that guided Apollo astronauts to the Moon. Tracing the evolution of calculating tools—from the ancient bead abacus to Babbage's mechanical gears, vacuum tubes, silicon transistors, and artificial intelligence—reveals how human ingenuity revolutionized civilization.",
    "objectives": [
      "Identify early calculating devices and pioneers: Abacus, Pascaline, Charles Babbage, and Ada Lovelace.",
      "Classify the five computer generations based on their core electronic components.",
      "Analyze the progression of programming languages from machine code to high-level and AI languages.",
      "Evaluate the trend in computer development: diminishing physical size, decreasing cost, and increasing speed."
    ],
    "sections": [
      {
        "title": "1. Pioneers and Mechanical Calculating Devices",
        "content": "Before electronic circuits existed, calculations were performed using mechanical aids:\n\n• The Abacus (approx. 2500 BC):\nThe earliest known mechanical counting device, consisting of beads sliding on wooden rods within a frame, used for addition and subtraction.\n\n• The Pascaline (1642):\nInvented by French mathematician Blaise Pascal. A mechanical adding machine that used interlocking toothed gears, wheels, and dials to perform addition and subtraction.\n\n• Charles Babbage (1791–1871) - 'Father of the Computer':\nAn English mathematician who designed two landmark mechanical engines:\n1. The Difference Engine: Designed to calculate polynomial mathematical tables automatically.\n2. The Analytical Engine: A revolutionary general-purpose mechanical computer featuring: an Input mechanism (punched cards), the Mill (processing unit), the Store (internal memory), and a Printer (output). This architecture is the direct blueprint for all modern computers.\n\n• Ada Lovelace (Countess of Lovelace):\nA brilliant mathematician who collaborated with Charles Babbage. She wrote an algorithm for the Analytical Engine to calculate Bernoulli numbers, earning her historical recognition as the World's First Computer Programmer.",
        "keyTakeaway": "Charles Babbage is the Father of Computing; Ada Lovelace is the world's first programmer; the Analytical Engine established modern computer architecture.",
        "realWorldExample": "Primary school children in Ghana use bead frames (abacuses) to master place values and arithmetic addition."
      },
      {
        "title": "2. The First and Second Computer Generations",
        "content": "• First Generation Computers (1940–1956):\n- Core Electronic Technology: VACUUM TUBES (thermionic valves) for circuitry and magnetic drums for memory.\n- Features: Enormous physical size (occupying entire laboratory rooms), consumed massive electricity, generated intense heat requiring industrial air cooling, broke down frequently, and were prohibitively expensive.\n- Programming: Low-level Binary Machine Code (0s and 1s).\n- Examples: ENIAC (Electronic Numerical Integrator and Computer), UNIVAC I, EDVAC.\n\n• Second Generation Computers (1956–1963):\n- Core Electronic Technology: TRANSISTORS (invented at Bell Laboratories by Shockley, Bardeen, and Brattain in 1947).\n- Features: Transistors replaced bulky vacuum tubes. Computers became substantially smaller, faster, cheaper, more energy-efficient, and far more reliable.\n- Programming: Assembly language and early English-like high-level programming languages: FORTRAN (Formula Translation) and COBOL (Common Business-Oriented Language).\n- Examples: IBM 1401, IBM 7090, CDC 1604.",
        "keyTakeaway": "First Generation used Vacuum Tubes and machine code; Second Generation used Transistors and assembly/FORTRAN.",
        "realWorldExample": "The ENIAC computer weighed over 27 tons and contained 18,000 glowing vacuum tubes that burned out daily."
      },
      {
        "title": "3. The Third and Fourth Computer Generations",
        "content": "• Third Generation Computers (1964–1971):\n- Core Electronic Technology: INTEGRATED CIRCUITS (ICs / Silicon Microchips), pioneered by Jack Kilby and Robert Noyce.\n- Features: Placed hundreds of miniaturized transistors onto a single tiny silicon semiconductor chip. Computers became small enough to sit on office desks.\n- User Interface: Keyboards and visual display monitors replaced punched cards; introduced primitive operating systems capable of running multiple programs simultaneously.\n- Examples: IBM System/360, PDP-8.\n\n• Fourth Generation Computers (1971–Present):\n- Core Electronic Technology: VERY LARGE SCALE INTEGRATION (VLSI) and MICROPROCESSORS.\n- The Microprocessor (Intel 4004 in 1971): Concentrated the entire Central Processing Unit (ALU, control unit, registers) onto a single silicon microchip!\n- Revolutionary Impact: Sparked the personal computer (PC) revolution (Apple II, IBM PC). Introduced laptops, smartphones, Graphical User Interfaces (Windows, macOS), high-speed Internet, and local area networks.\n- Programming: Modern high-level languages: C, C++, Java, Python, JavaScript.",
        "keyTakeaway": "Third Generation introduced Integrated Circuits (ICs); Fourth Generation introduced the Microprocessor and personal computers.",
        "realWorldExample": "The Intel Core and Apple silicon chips powering school laptops contain billions of microscopic transistors on a chip smaller than a postage stamp."
      },
      {
        "title": "4. The Fifth Generation: Artificial Intelligence & The Future",
        "content": "• Fifth Generation Computers (Present and Beyond):\n- Core Electronic Technology: ULTRA LARGE SCALE INTEGRATION (ULSI), Parallel Processing, and ARTIFICIAL INTELLIGENCE (AI).\n- Core Features:\n  * Machine Learning and Neural Networks: Computers learning from large datasets to recognize human faces, diagnose medical X-rays, and drive autonomous electric vehicles.\n  * Natural Language Processing: Understanding spoken human dialects (voice assistants like Siri, Google Assistant, Alexa).\n  * Quantum Computing: Harnessing quantum mechanics to solve complex molecular, encryption, and climate problems in seconds.\n- The Universal Evolution Trend:\nAcross all five generations, computers have consistently become: SMALLER in size, CHEAPER in cost, LOWER in power consumption, and VASTLY FASTER in processing speed.",
        "keyTakeaway": "Fifth Generation is driven by Artificial Intelligence, neural networks, voice recognition, and quantum computing.",
        "realWorldExample": "A doctor in Accra using AI-assisted diagnostic software to detect malaria parasites in blood smear slides."
      }
    ],
    "commonMistakes": [
      "Confusing the core technologies: e.g. saying the 2nd generation used integrated circuits (2nd used transistors; 3rd used ICs).",
      "Thinking Charles Babbage built the first electronic laptop (his engines were 100% mechanical gears and levers).",
      "Believing Ada Lovelace was the inventor of the mouse (she was the first computer programmer).",
      "Assuming modern Fourth Generation computers are slower than First Generation computers."
    ],
    "beceExamTips": [
      "In BECE Section A, memorize the 5 core technologies in order: 1. Vacuum Tubes, 2. Transistors, 3. Integrated Circuits (ICs), 4. Microprocessors (VLSI), 5. Artificial Intelligence (ULSI).",
      "Know Charles Babbage as 'Father of the Computer' and Ada Lovelace as 'First Computer Programmer'.",
      "Remember that the trend of computing is: Decreasing size and cost, but Increasing speed, reliability, and storage."
    ],
    "summaryChecklist": [
      "Can explain the contributions of Abacus, Pascaline, Charles Babbage, and Ada Lovelace.",
      "Master the core hardware technology of all 5 generations.",
      "Understand the programming language shifts across generations (Machine code → Assembly → High-level → AI).",
      "Can summarize the universal technological trends in computing history."
    ]
  },
  "jhs1-ict-t3-inputdevices": {
    "topicId": "jhs1-ict-t3-inputdevices",
    "realWorldContext": "Every digital action begins with data input. When you scan a Ghana Card fingerprint at a telecommunication office, swipe a debit card at an automated teller machine (ATM), scan a textbook barcode at a supermarket, or take a photograph with a smartphone, specialized input devices convert physical signals from the real world into binary digital data.",
    "objectives": [
      "Define an input device and classify devices into manual and direct (automated) data capture.",
      "Explain the functions of manual input devices: QWERTY keyboard, optical mouse, touchpad, and microphone.",
      "Analyze direct data capture devices: Barcode scanners, QR code readers, OMR, OCR, and biometric sensors.",
      "Evaluate the advantages of direct data entry over manual data entry in institutional operations."
    ],
    "sections": [
      {
        "title": "1. What is an Input Device? Classification",
        "content": "An input device is any hardware peripheral component that captures raw data, user instructions, and commands from the outside physical world and converts them into machine-readable digital binary pulses (0s and 1s) for the CPU.\n\n• Two Broad Classifications:\n1. Manual Data Entry Devices: Require deliberate human manipulation to enter characters or direct cursor coordinates (keyboard, mouse, joystick, microphone).\n2. Direct (Automated) Data Capture Devices: Read data directly from source documents, labels, cards, or biological traits with minimal human intervention (barcode scanners, OMR, RFID readers, biometric fingerprint readers).",
        "keyTakeaway": "Input devices convert real-world data into digital binary signals; classified as manual or automated capture.",
        "realWorldExample": "Typing a password on a keyboard is manual input; scanning a passport chip at Kotoka International Airport is automated direct data capture."
      },
      {
        "title": "2. Primary Manual Input Devices",
        "content": "• 1. The Computer Keyboard:\n- The most common alphanumeric input device, utilizing the standard QWERTY layout.\n- Each key operates an electrical switch beneath that transmits an ASCII/Unicode binary code to the processor when depressed.\n\n• 2. Pointing Devices (The Mouse and Touchpad):\n- Optical Mouse: Uses a light-emitting diode (LED) and an optical sensor to detect microscopic movements across a mousepad, translating hand motion into smooth cursor movements on screen.\n- Mouse Actions: Pointing, Left-Click (selecting an object), Double-Click (opening a program/file), Right-Click (displaying context menus), and Drag-and-Drop.\n- Touchpad: Flat, touch-sensitive pad found on laptops, utilizing capacitive electrical conductance from human fingertips to move the cursor.\n\n• 3. Audio & Visual Input:\n- Microphone: Converts acoustic sound pressure waves into digital audio signals for recording or voice communication.\n- Webcam & Digital Camera: Captures live optical imagery and video streams for teleconferencing and video calls.",
        "keyTakeaway": "Keyboards input text; mice and touchpads control screen cursors; microphones capture sound.",
        "realWorldExample": "A JHS teacher uses a wireless optical mouse to navigate PowerPoint slides during an ICT lesson."
      },
      {
        "title": "3. Direct Data Capture Technologies",
        "content": "Automated data capture eliminates the delays and inaccuracies of human typing:\n\n• 1. Barcode Readers:\n- Use red laser beams or optical sensors to scan parallel black and white zebra stripes of varying widths.\n- The pattern represents Universal Product Codes (UPC), linking instantly to product prices and batch numbers in database software.\n\n• 2. Quick Response (QR) Code Readers:\n- 2D matrix barcodes holding substantially more data (URLs, bank account details, contact cards). Can be scanned rapidly in any orientation (360 degrees) using smartphone cameras.\n\n• 3. Optical Mark Recognition (OMR):\n- Technology that detects pencil or pen marks at specific predetermined grid coordinates on paper.\n- High-Speed Scoring: WAEC uses OMR readers to mark hundreds of thousands of BECE objective answer sheets in hours without human fatigue or bias.\n\n• 4. Optical Character Recognition (OCR):\n- Specialized software that scans physical printed or handwritten paper text, recognizes individual letter shapes, and converts them into editable Word or text documents.\n\n• 5. Biometric Scanners:\n- Capture unique physical biological traits: Fingerprint scanners, iris scanners, and facial recognition cameras (used by the Electoral Commission of Ghana to verify voters and NIA for the Ghana Card).",
        "keyTakeaway": "OMR scores shaded test cards; Barcodes identify commercial goods; Biometrics verify biological identity.",
        "realWorldExample": "During national elections in Ghana, biometric verification machines (BVDs) scan voters' fingerprints to confirm identity before voting."
      },
      {
        "title": "4. Manual vs Direct Data Capture: Comparative Merits",
        "content": "Why modern businesses invest in direct data capture systems:\n\n• Speed: An OMR or barcode reader scans records in milliseconds, whereas manual typing takes minutes per document.\n• Accuracy: Human typists make typographical errors (transposition errors, spelling slips). Direct readers achieve near 100% data fidelity.\n• Lower Labor Costs: Fewer cashiers and data entry clerks are required.\n• Real-Time Stock Updates: Supermarket inventories are decremented automatically with every scanned purchase.",
        "keyTakeaway": "Direct data capture is faster, virtually error-free, and reduces operational labor costs.",
        "realWorldExample": "A Melcom cashier scanning barcodes processes ten customer trolleys in the time a manual typist would take for one."
      }
    ],
    "commonMistakes": [
      "Confusing OMR (Optical Mark Recognition - reading shaded pencil marks) with OCR (Optical Character Recognition - converting printed text to editable words).",
      "Calling a monitor or printer an input device (they are output devices).",
      "Thinking that a barcode stores the price of an item directly (the barcode only stores the product code; the computer looks up the price in a database).",
      "Believing that biometrics can be easily forged like paper signatures."
    ],
    "beceExamTips": [
      "In BECE questions regarding WAEC exam marking, always name OMR (Optical Mark Reader).",
      "Distinguish between left-click (selects), double-click (opens), and right-click (opens context shortcut menu).",
      "Know 3 examples of biometric traits: Fingerprints, Iris/Retina patterns, and Facial geometry."
    ],
    "summaryChecklist": [
      "Can define an input device and classify manual vs automated capture.",
      "Understand the 5 primary mouse actions (point, click, double-click, right-click, drag).",
      "Know how Barcode Readers, OMR, and OCR function.",
      "Can explain the advantages of direct data entry in business."
    ]
  },
  "jhs1-ict-t4-outputdevices": {
    "topicId": "jhs1-ict-t4-outputdevices",
    "realWorldContext": "Computers process data into results, but without output devices, that processed information remains locked as invisible binary pulses inside silicon chips. Output hardware—whether a high-resolution smartphone display, a laser-printed BECE certificate, a municipal hospital public address speaker, or a billboard vinyl plotter—translates digital signals into human-readable text, graphics, and sound.",
    "objectives": [
      "Define output devices and distinguish between softcopy and hardcopy outputs.",
      "Analyze monitor display technologies: CRT, LCD, LED, and OLED.",
      "Differentiate between impact (dot matrix) and non-impact printers (inkjet, laser).",
      "Explain the specific uses of specialized output devices: Plotters, Multimedia Projectors, and Audio Speakers."
    ],
    "sections": [
      {
        "title": "1. Softcopy vs Hardcopy Output",
        "content": "An output device is any peripheral hardware that receives processed data from the CPU and presents it in human-understandable format.\n\n• 1. Softcopy Output:\n- Intangible, transient, electronic display or audio sound that can only be viewed on a screen or listened to through speakers.\n- Disappears immediately when electrical power is switched off or the application is closed.\n- Can be easily edited, updated, or emailed worldwide instantly.\n- Examples: Text displayed on an LCD monitor, music playing from headphones, slides projected onto a classroom wall.\n\n• 2. Hardcopy Output:\n- Tangible, permanent physical output printed onto solid paper, film, or plastic substrates.\n- Can be held, touched, filed in archives, and read without electricity or a computer device.\n- Examples: Printed terminal report card, paper cash receipt, printed national newspaper, architectural blueprint.",
        "keyTakeaway": "Softcopy is digital and temporary on screens; Hardcopy is permanent, printed physical output on paper.",
        "realWorldExample": "Reading this lesson on your phone is softcopy; printing it out on an A4 sheet produces hardcopy."
      },
      {
        "title": "2. Visual Display Units (Monitors and Screens)",
        "content": "Monitors are the primary visual softcopy output peripherals. Key technologies:\n\n• 1. CRT (Cathode Ray Tube) Monitors:\n- Bulky, deep, and heavy older displays using vacuum electron guns firing at a phosphor-coated glass screen.\n- Demerits: Consumed high electrical wattage, generated significant heat, flickered (causing eye fatigue), and occupied large desk space.\n\n• 2. LCD (Liquid Crystal Display) Monitors:\n- Flat-panel displays containing liquid crystals sandwiched between polarizing glass filters.\n- Backlit by Cold Cathode Fluorescent Lamps (CCFL). Lightweight, flicker-free, and energy-efficient.\n\n• 3. LED (Light Emitting Diode) Monitors:\n- Modern advanced LCDs that replace fluorescent tubes with arrays of energy-efficient light-emitting diodes.\n- Merits: Thinner profiles, brighter colors, deeper contrast ratios, instant-on capability, and 40% lower power consumption.\n\n• 4. OLED (Organic LED):\n- Each pixel produces its own light without any backlight, delivering true blacks and flexible curved displays on premium smartphones.",
        "keyTakeaway": "CRT is bulky and obsolete; LCD/LED flat screens are lightweight, bright, and energy-efficient.",
        "realWorldExample": "Schools replace old bulky CRT monitors with slim LED flat screens to save electricity and reduce lab heat."
      },
      {
        "title": "3. Printers: Impact vs Non-Impact Technologies",
        "content": "Printers produce permanent hardcopy output on paper:\n\n• 1. Impact Printers:\n- Form characters and graphics by physically striking an inked fabric ribbon against paper using mechanical pins, printheads, or hammers.\n- Dot Matrix Printers: Use a matrix of metal pins (9 or 24 pins). Noisy, slow, and produce low-resolution draft text.\n- Unique Advantage: Because they physically strike paper, they can print multipart carbon copies (e.g. utility bills, bank deposit carbon slips, invoice books).\n\n• 2. Non-Impact Printers:\n- Form text and images without mechanical striking, using ink droplets, laser beams, or heat. Silent and produce high resolution:\n  * Inkjet Printers: Spray microscopic droplets of liquid ink from cartridges through microscopic printhead nozzles. Excellent for vibrant family color photos, but liquid ink smudges if wet and replacement cartridges are expensive.\n  * Laser Printers: Use a laser beam, static electrical charges, and dry powdered ink (toner) melted into paper fibers using heated fuser rollers. Extremely fast (30–60 pages/minute), razor-sharp text, low cost-per-page for high-volume office and school printing.\n  * Thermal Printers: Use heat-sensitive paper that darkens when heated (used in POS mobile money receipts and supermarket registers).",
        "keyTakeaway": "Dot matrix (impact) strikes paper for carbon copies; Inkjet sprays liquid ink; Laser uses dry toner and heat for fast office printing.",
        "realWorldExample": "ECG electricity bill cashiers use dot matrix printers to produce instant carbon copy receipts for their archives."
      },
      {
        "title": "4. Specialized Output Hardware",
        "content": "• 1. Plotters:\nSpecialized large-scale computer printers that draw continuous, precise vector lines using colored pens or inkjet gantry carriages. Used by civil engineers, cartographers, and architects to print giant building blueprints, engineering diagrams, and roadside vinyl banners.\n\n• 2. Multimedia Projectors:\nOptical output devices that connect to computers and project large-scale video images onto classroom whiteboards or cinema screens, ideal for school lectures and church presentations.\n\n• 3. Audio Output (Speakers and Headphones):\nConvert digital audio signals from the computer's sound card into physical audible acoustic vibrations.",
        "keyTakeaway": "Plotters print giant architectural blueprints; Projectors enlarge computer screens for classroom audiences.",
        "realWorldExample": "An architectural firm in Accra uses a digital plotter to print construction blueprints for a new hospital."
      }
    ],
    "commonMistakes": [
      "Classifying a Touchscreen purely as an input device (it is a dual Input and Output peripheral).",
      "Confusing laser toner (dry powder) with inkjet cartridges (liquid ink).",
      "Thinking that a dot matrix printer is faster and quieter than a laser printer (dot matrix is noisy and slow).",
      "Stating that softcopy can be held physically in your hand."
    ],
    "beceExamTips": [
      "In BECE Section B, when asked to compare softcopy and hardcopy, use two clear parameters: 1. Tangibility (can be touched vs digital display), 2. Permanence (needs electricity vs permanent paper).",
      "Remember that Dot Matrix printers are chosen specifically when carbon duplicate copies are required.",
      "Name the print medium: Laser printers use 'Toner' (dry powder); Inkjet printers use 'Liquid ink'."
    ],
    "summaryChecklist": [
      "Can differentiate softcopy from hardcopy output.",
      "Understand CRT, LCD, and LED monitor technologies.",
      "Know the difference between impact (dot matrix) and non-impact (inkjet, laser) printers.",
      "Can explain the functions of plotters and multimedia projectors."
    ]
  },
  "jhs1-ict-t5-safetyhygiene": {
    "topicId": "jhs1-ict-t5-safetyhygiene",
    "realWorldContext": "A modern computer laboratory represents a significant financial investment for any school. Dust, electrical fluctuations, liquid spills, and poor user conduct can destroy delicate electronic circuitry. Simultaneously, students spending long hours hunched over keyboards risk permanent spinal curvature, eye damage, and wrist nerve compression. Practicing lab safety and ergonomics ensures equipment longevity and protects human physical health.",
    "objectives": [
      "Identify core safety rules, hygiene protocols, and hazards in a computer laboratory.",
      "Define Ergonomics and demonstrate correct healthy typing and sitting posture.",
      "Analyze repetitive strain injury (RSI), computer vision syndrome (eye strain), and preventive exercises (20-20-20 rule).",
      "Distinguish between cold booting and warm booting and explain proper operating system shutdown procedures."
    ],
    "sections": [
      {
        "title": "1. Computer Laboratory Safety and Hygiene Rules",
        "content": "To maintain electronic hardware and prevent laboratory accidents, strict codes of conduct must be observed:\n\n• General Laboratory Regulations:\n1. No Food or Drinks: Liquids spilled on keyboards cause electrical short-circuits that permanently fry motherboards; food crumbs attract ants and rodents that chew internal wiring.\n2. Dust and Moisture Protection: Keep windows closed during harmattan winds; cover system units with anti-dust covers when not in use.\n3. Electrical Safety: Never overload wall sockets with multiple extension boards; avoid touching bare or frayed electrical cables; report burning smells immediately.\n4. Cable Management: Tuck network and power cables neatly inside wall trunkings to prevent students from tripping.\n5. Stable Power Protection: Connect all computers to an Uninterruptible Power Supply (UPS) and voltage surge suppressors to guard against sudden blackouts and power surges.\n6. Ventilation: Ensure air conditioners or ceiling extractors run continuously to dissipate heat generated by processors.",
        "keyTakeaway": "Keep food and liquids away from computers, manage cables, and use a UPS for power protection.",
        "realWorldExample": "In Ghanaian schools, computer labs are fitted with window mesh and curtains to keep harmattan dust from choking cooling fans."
      },
      {
        "title": "2. Ergonomics: Designing the Workplace for Health",
        "content": "Ergonomics is the scientific study of designing equipment, furniture, and workspace environments to fit the human body's natural anatomical posture, minimizing physical discomfort and injury.\n\n• Ideal Ergonomic Sitting Posture:\n- Feet: Resting flat on the floor or supported by an ergonomic footrest (never dangling).\n- Knees: Bent at an open, comfortable 90-degree angle.\n- Back: Straight and fully supported by an adjustable chair with lumbar lower-back support.\n- Forearms and Wrists: Forearms kept parallel to the desk; wrists kept flat in a neutral, relaxed horizontal position while typing (avoid bending wrists upward or downward).\n- Eyes & Monitor Positioning: The top edge of the monitor screen should be level with or slightly below eye level. The monitor should be positioned directly in front of the user at approximately an arm's length (50 to 70 cm away) to prevent neck craning.",
        "keyTakeaway": "Ergonomics aligns chair, monitor, and keyboard to fit natural posture, preventing chronic strain.",
        "realWorldExample": "Typing with wrists resting on a gel pad keeps tendons aligned and prevents carpal tunnel syndrome."
      },
      {
        "title": "3. Common Health Hazards and Preventive Habits",
        "content": "Prolonged, improper computer use causes specific physiological conditions:\n\n• 1. Repetitive Strain Injury (RSI) / Carpal Tunnel Syndrome:\n- Pain, numbness, and tingling in fingers and wrists caused by repetitive keystrokes and awkward mouse gripping over long periods.\n- Prevention: Take short 5-minute typing breaks every hour; use ergonomic split keyboards and wrist rests; shake out fingers regularly.\n\n• 2. Computer Vision Syndrome (Digital Eye Strain):\n- Dry eyes, redness, burning sensations, headaches, and blurred vision caused by staring at illuminated screens without blinking.\n- Prevention: The 20-20-20 Rule! Every 20 minutes of screen work, look away at an object 20 feet away for at least 20 seconds. Use anti-glare screen filters and ensure balanced room lighting.\n\n• 3. Chronic Musculoskeletal Back and Neck Ache:\n- Caused by slouching forward or cradling a phone between ear and shoulder while typing.\n- Prevention: Sit upright, adjust chair height, and stretch shoulders periodically.",
        "keyTakeaway": "Prevent RSI with wrist breaks; prevent eye strain using the 20-20-20 rule; prevent backache with upright lumbar seating.",
        "realWorldExample": "A graphic designer sets a phone timer to observe the 20-20-20 rule to relieve burning eyes during logo design."
      },
      {
        "title": "4. Booting and Proper Shutdown Procedures",
        "content": "• What is Booting?\nBooting is the initial process of loading the operating system kernel from the secondary storage (hard disk/SSD) into main memory (RAM) when a computer is started.\n\n• Two Types of Booting:\n1. Cold Booting (Hard Boot):\nStarting a computer from a totally powered-off, cold state by pressing the physical Power button on the system unit.\n2. Warm Booting (Rebooting / Soft Boot):\nRestarting a computer while it is already running without turning off the main electrical power supply (via Start → Restart or pressing Ctrl + Alt + Delete). Used after software updates or when a program freezes.\n\n• Proper Shutdown Procedure:\nAlways click Start → Power → Shut Down. Allow the operating system to safely close background files, save registry states, and park hard disk read heads.\n- DANGER: Never turn off a desktop computer by switching off the wall socket or pulling the plug directly! Sudden power cuts cause operating system corruption, lost data, and physical disk head crashes.",
        "keyTakeaway": "Cold boot starts from off; warm boot restarts a running system; always shut down properly via the Start menu.",
        "realWorldExample": "When a school PC freezes during a typing test, the teacher executes a warm boot by pressing Ctrl + Alt + Delete."
      }
    ],
    "commonMistakes": [
      "Switching off the computer directly from the wall socket switch instead of using the Start menu shutdown procedure.",
      "Confusing Cold Booting (from completely off) with Warm Booting (restarting an already running machine).",
      "Thinking ergonomics is only about buying expensive chairs (it includes screen height, lighting, and posture habits).",
      "Ignoring the 20-20-20 rule and staring at monitors for 6 continuous hours."
    ],
    "beceExamTips": [
      "In BECE Section A, questions frequently contrast Cold Booting (pressing the hardware power button when off) and Warm Booting (restarting via software/Ctrl+Alt+Del).",
      "Be prepared to list at least 3 computer lab safety rules: No food/drinks, avoid loose wires, do not touch internal parts while plugged in.",
      "Explain the 20-20-20 rule: Every 20 minutes, look at an object 20 feet away for 20 seconds."
    ],
    "summaryChecklist": [
      "Can state 5 fundamental computer lab safety and hygiene rules.",
      "Understand the principles of ergonomic posture (chair, monitor, wrists).",
      "Know the causes and prevention of RSI and Computer Vision Syndrome (20-20-20 rule).",
      "Can explain Cold Booting, Warm Booting, and proper shutdown steps."
    ]
  },
  "jhs1-ict-t6-cpumemory": {
    "topicId": "jhs1-ict-t6-cpumemory",
    "realWorldContext": "Inside every smartphone, tablet, ATM, and desktop computer sits a microscopic silicon chip called the Central Processing Unit (CPU). It acts as the command center and primary brain of the machine. Working hand-in-hand with lightning-fast primary memory (RAM and ROM), the CPU executes billions of complex mathematical and logical instructions every single second.",
    "objectives": [
      "Identify the CPU as the central brain of the computer and examine its core internal components (ALU, CU, Registers).",
      "Explain the Machine Cycle: Fetch, Decode, Execute, and Store.",
      "Differentiate between primary memory (RAM vs ROM) in terms of volatility, speed, and function.",
      "Understand the role of high-speed Cache memory in optimizing CPU performance."
    ],
    "sections": [
      {
        "title": "1. The CPU: Architecture and Components",
        "content": "The Central Processing Unit (CPU), housed on the motherboard as a microprocessor, interprets and executes all software instructions, performs calculations, and coordinates all peripheral hardware components.\n\n• The Three Fundamental Internal Sub-Units of the CPU:\n\n1. The Arithmetic and Logic Unit (ALU):\n- The computational powerhouse of the processor.\n- Arithmetic Operations: Executes mathematical calculations: Addition (+), Subtraction (-), Multiplication (*), and Division (/),\n- Logic Operations: Evaluates logical conditions and comparisons: Equal to (=), Greater than (>), Less than (<), NOT EQUAL TO, AND, OR.\n\n2. The Control Unit (CU):\n- The master manager or supervisor of the entire computer system.\n- It extracts instructions from memory, decodes what actions are required, generates timing and control pulses, and directs the ALU, registers, and I/O devices.\n\n3. Registers:\n- Extremely high-speed, tiny internal temporary storage cells inside the CPU chip itself.\n- Hold active data, immediate operands, current instructions, and memory addresses during execution (e.g. Program Counter, Instruction Register, Accumulator).",
        "keyTakeaway": "The CPU contains the ALU (calculations and logic), Control Unit (supervises and directs), and Registers (high-speed temporary data holders).",
        "realWorldExample": "When a student calculates 45 × 12 on a computer calculator, the Control Unit fetches the numbers and directs the ALU to multiply them."
      },
      {
        "title": "2. The Machine Cycle (Instruction Cycle)",
        "content": "Every single instruction processed by the CPU is executed through a continuous four-step cycle known as the Machine Cycle:\n\n1. FETCH:\nThe Control Unit retrieves the next instruction from the system RAM and places it into an internal CPU register.\n\n2. DECODE:\nThe Control Unit translates the fetched instruction into binary electronic signals and determines what operations must be carried out.\n\n3. EXECUTE:\nThe Arithmetic and Logic Unit (ALU) performs the designated mathematical computation or logical comparison.\n\n4. STORE (Writeback):\nThe result generated by the execution step is written back to an internal register or system memory (RAM) for later display or storage.\n\n• CPU Clock Speed:\nThe speed of the machine cycle is regulated by an internal quartz crystal clock. Measured in Gigahertz (GHz)—a 3.2 GHz processor executes 3.2 billion machine cycles every second!",
        "keyTakeaway": "The machine cycle consists of 4 steps: Fetch → Decode → Execute → Store.",
        "realWorldExample": "Typing a letter 'A' on a keyboard causes the CPU to fetch the keycode, decode it to ASCII, execute the font mapping, and store it in RAM."
      },
      {
        "title": "3. Primary Memory: RAM vs ROM",
        "content": "Primary memory (main memory) communicates directly with the CPU via high-speed buses:\n\n• 1. RAM (Random Access Memory):\n- Volatile (Temporary): Its contents evaporate and are completely lost when electrical power is switched off.\n- Read and Write Memory: The CPU can both read data from RAM and write new data into RAM effortlessly.\n- Function: Acts as the immediate working desk for the computer, holding the active operating system kernel, open programs, and unsaved work.\n- Capacity: Measured in Gigabytes (e.g. 4 GB, 8 GB, 16 GB).\n\n• 2. ROM (Read-Only Memory):\n- Non-Volatile (Permanent): Retains its contents indefinitely even when the computer is completely unplugged.\n- Read Only: Data is permanently written during manufacturing and cannot be modified by ordinary users.\n- Function: Holds the computer's firmware—the BIOS (Basic Input/Output System) and the bootstrap loader instructions that wake up hardware when turned on.\n- Capacity: Typically small (a few Megabytes).",
        "keyTakeaway": "RAM is volatile read/write working memory; ROM is non-volatile permanent startup storage holding BIOS.",
        "realWorldExample": "If power cuts while typing an essay before saving, your work disappears because it was held in volatile RAM."
      },
      {
        "title": "4. Cache Memory and System Buses",
        "content": "• Cache Memory:\n- An ultra-fast buffer of static RAM (SRAM) built directly onto the CPU chip itself (L1, L2, L3 cache).\n- Operating Speed: Much faster than regular RAM.\n- Purpose: Stores frequently used instructions and data so the ultra-fast CPU does not have to wait for slower system RAM.\n\n• The System Bus:\nA collection of parallel high-speed copper traces connecting the CPU to memory and peripherals:\n- Data Bus: Carries the actual binary data between CPU and memory.\n- Address Bus: Carries the physical memory address where data is located.\n- Control Bus: Transmits synchronization, read, and write command signals.",
        "keyTakeaway": "Cache memory speeds up processing by holding frequently needed data right on the CPU chip.",
        "realWorldExample": "Cache memory works like keeping your favorite pen in your pocket rather than walking to your locker every time you need to write."
      }
    ],
    "commonMistakes": [
      "Confusing the roles of ALU and Control Unit (ALU calculates; CU directs and coordinates).",
      "Believing that RAM stores files permanently (RAM is volatile and loses everything on power cut).",
      "Thinking ROM can be upgraded by downloading more memory from the internet.",
      "Confusing primary memory (RAM) with secondary storage (Hard disk/SSD)."
    ],
    "beceExamTips": [
      "In BECE Section A, remember: ALU = Arithmetic and Logic Unit; CU = Control Unit; RAM = Random Access Memory; ROM = Read Only Memory.",
      "Clearly explain volatility: Volatile memory (RAM) loses contents when power is off; Non-volatile memory (ROM) keeps data permanently.",
      "List the four steps of the Machine Cycle in order: Fetch → Decode → Execute → Store."
    ],
    "summaryChecklist": [
      "Understand the roles of the ALU, Control Unit, and Registers.",
      "Can explain the 4 steps of the Machine Cycle (Fetch, Decode, Execute, Store).",
      "Can contrast RAM and ROM across volatility, read/write ability, and purpose.",
      "Know the role of Cache memory and system buses."
    ]
  },
  "jhs1-ict-t7-storagedevices": {
    "topicId": "jhs1-ict-t7-storagedevices",
    "realWorldContext": "While primary memory (RAM) loses all data the moment electricity is interrupted, modern society requires permanent digital storage. Digital photos of school cultural celebrations, hospital patient records, music albums, and video lessons must be preserved reliably for decades. Secondary storage technologies—magnetic hard drives, optical discs, solid-state drives, and cloud servers—provide this enduring memory.",
    "objectives": [
      "Define secondary storage and explain why it is essential in computer systems.",
      "Classify storage media into Magnetic, Optical, Solid-State (Flash), and Cloud storage.",
      "Compare the storage capacities, speeds, and durability of HDDs and SSDs.",
      "Master the hierarchy of digital storage measurement units: Bit, Byte, KB, MB, GB, and TB."
    ],
    "sections": [
      {
        "title": "1. What is Secondary Storage? Need and Characteristics",
        "content": "Secondary storage (auxiliary or external storage) refers to non-volatile physical hardware media designed to store digital programs, documents, operating systems, and multimedia permanently for future retrieval.\n\n• Why Secondary Storage is Indispensable:\n1. Non-Volatility: Retains stored data indefinitely without requiring continuous electrical power.\n2. Immense Storage Capacity: Can hold hundreds of Gigabytes or Terabytes of software and files at a fraction of the cost of RAM.\n3. Portability: Removable media (flash drives, memory cards, external drives) allow easy transport of data between different computers.",
        "keyTakeaway": "Secondary storage provides permanent, non-volatile, high-capacity, and portable data preservation.",
        "realWorldExample": "Saving a completed school project to a USB flash drive allows you to print it at a commercial internet café."
      },
      {
        "title": "2. Categories of Secondary Storage Media",
        "content": "• 1. Magnetic Storage Media:\n- Operates by magnetizing tiny iron oxide particles on spinning metallic platters to represent binary 1s and 0s.\n- Hard Disk Drive (HDD): Primary mass storage for desktop PCs. Contains spinning platters rotating at 5,400 to 7,200 RPM and mechanical read/write heads.\n- Magnetic Tape: Used by banks and archives for cheap, long-term sequential data backup.\n\n• 2. Optical Storage Media:\n- Polycarbonate plastic discs read and written using laser beams. A laser burns microscopic pits (indentations) and lands (flat areas) representing binary data:\n  * CD (Compact Disc): Storage capacity of approx. 700 MB.\n  * DVD (Digital Versatile Disc): Storage capacity of 4.7 GB (single-layer) to 8.5 GB (dual-layer).\n  * Blu-ray Disc (BD): Uses a shorter blue-violet laser to store 25 GB to 50 GB of high-definition video.\n\n• 3. Solid-State Storage Media (Flash Memory):\n- Uses non-volatile silicon flash microchips with ZERO moving mechanical parts:\n  * Solid-State Drive (SSD): Super-fast, silent storage replacing HDDs in modern laptops.\n  * USB Flash Drive (Pen Drive): Compact, pocket-sized storage connecting via USB ports.\n  * SD Memory Card: Tiny cards used in smartphones, digital cameras, and dashcams.\n\n• 4. Cloud Storage:\n- Storing files on remote enterprise server farms managed by providers (Google Drive, Microsoft OneDrive, Dropbox) accessible over the Internet from any connected device.",
        "keyTakeaway": "Magnetic uses platters (HDD); Optical uses lasers (CD/DVD); Solid-State uses electronic flash chips (SSD/flash drive).",
        "realWorldExample": "Modern smartphones have no mechanical spinning disks; they rely 100% on solid-state flash memory chips."
      },
      {
        "title": "3. Solid-State Drives (SSD) vs Hard Disk Drives (HDD)",
        "content": "The computing world is rapidly transitioning from mechanical HDDs to electronic SSDs:\n\n• Speed Comparison:\nSSDs read and write data electronically at speeds exceeding 500 to 3,500 MB/s, booting Windows in 10 seconds. HDDs are constrained by spinning platters and read heads (100 to 150 MB/s).\n\n• Physical Durability:\nHDDs are highly vulnerable to physical shock. Dropping a running laptop can cause a head crash, destroying the platters. SSDs have no moving parts and easily survive physical drops and vibrations.\n\n• Noise and Energy Consumption:\nSSDs are completely silent, produce minimal heat, and consume less battery power. HDDs emit humming noises and drain laptop batteries faster.",
        "keyTakeaway": "SSDs are vastly faster, completely silent, and shock-resistant compared to mechanical HDDs.",
        "realWorldExample": "Upgrading an old school laptop from an HDD to an SSD makes it boot five times faster."
      },
      {
        "title": "4. Units of Digital Storage Measurement",
        "content": "Digital computers represent all data using the binary number system (base 2):\n\n• Bit (Binary Digit): The absolute smallest unit of digital data, holding a single 0 or 1.\n• Nibble: A group of 4 bits (e.g. 1010).\n• Byte: A group of 8 bits. Represents a single alphanumeric character (e.g. typing 'G' uses 1 Byte = 8 bits).\n• Kilobyte (KB): 1,024 Bytes.\n• Megabyte (MB): 1,024 Kilobytes (approx. 1 million bytes; holds a typical MP3 song).\n• Gigabyte (GB): 1,024 Megabytes (approx. 1 billion bytes; holds an HD movie).\n• Terabyte (TB): 1,024 Gigabytes (approx. 1 trillion bytes; large external backup drive).\n\n• The 1,024 Factor:\nBecause computers operate on binary powers of 2 (2¹⁰ = 1,024), each unit is 1,024 times larger than the previous unit!",
        "keyTakeaway": "1 Byte = 8 bits; 1 KB = 1,024 Bytes; 1 MB = 1,024 KB; 1 GB = 1,024 MB; 1 TB = 1,024 GB.",
        "realWorldExample": "A 16 GB smartphone memory card can store roughly 4,000 MP3 audio songs or 5,000 high-resolution photos."
      }
    ],
    "commonMistakes": [
      "Thinking that a bit is larger than a byte (a byte consists of 8 bits).",
      "Using 1,000 instead of 1,024 when calculating binary storage conversions.",
      "Confusing CDs (700 MB) with DVDs (4.7 GB) in capacity questions.",
      "Assuming SSDs have spinning magnetic platters inside them (SSDs have zero moving parts)."
    ],
    "beceExamTips": [
      "In BECE Section A calculations: 1 Byte = 8 bits. If asked how many bits are in 5 bytes, multiply: 5 × 8 = 40 bits.",
      "Memorize optical storage capacities: CD = 700 MB; DVD = 4.7 GB; Blu-ray = 25 GB to 50 GB.",
      "List 2 advantages of SSD over HDD: 1. Faster data transfer speed, 2. Shock resistance (no moving parts)."
    ],
    "summaryChecklist": [
      "Understand why secondary storage is necessary.",
      "Can classify storage media: Magnetic (HDD), Optical (CD, DVD), Solid-State (SSD, Flash drive), Cloud.",
      "Know the differences between SSD and HDD.",
      "Can recite the storage hierarchy: Bit, Byte, KB, MB, GB, TB."
    ]
  },
  "jhs1-ict-t8-operatingsystems": {
    "topicId": "jhs1-ict-t8-operatingsystems",
    "realWorldContext": "When you turn on a computer, phone, or tablet, the screen does not display raw electronic circuit diagrams. Instead, you are welcomed by an intuitive operating system (such as Windows, Android, or macOS). The operating system acts as the master conductor of an orchestra, ensuring that memory, files, keyboard inputs, and screen displays work in complete harmony.",
    "objectives": [
      "Define an Operating System and explain why computer hardware cannot function without it.",
      "Analyze the core functions of an OS: Processor management, memory management, device control, and file management.",
      "Contrast Command Line Interfaces (CLI) with Graphical User Interfaces (GUI).",
      "Master the WIMP elements of a modern GUI: Windows, Icons, Menus, Pointers, Desktop, Taskbar, and Folders."
    ],
    "sections": [
      {
        "title": "1. What is an Operating System? Why is it Essential?",
        "content": "An Operating System (OS) is the master system software program that initializes hardware, manages computer resources, provides a platform for application software to run, and offers a user interface for human communication.\n\n• Why Hardware Cannot Function Without an OS:\nComputer hardware consists purely of electronic transistors, wires, and silicon circuits that only understand electrical voltages. The operating system provides the necessary software translation layer, managing hardware so users and programs can interact without needing to understand machine code.\n\n• Major Examples of Operating Systems:\n- Desktop & Laptop OS: Microsoft Windows (Windows 10, 11), Apple macOS, Linux (Ubuntu, Fedora), ChromeOS.\n- Mobile Smartphone & Tablet OS: Google Android, Apple iOS.",
        "keyTakeaway": "An Operating System is the master software that controls computer hardware and coordinates applications.",
        "realWorldExample": "Without Android or iOS, a smartphone would be an empty glass-and-aluminum brick incapable of making calls or opening apps."
      },
      {
        "title": "2. Core Functions of an Operating System",
        "content": "The operating system works silently in the background performing five major duties:\n\n1. Processor Management (Multitasking):\nAllocates CPU execution time slices to various running applications so multiple programs (e.g. typing a document while playing music) appear to execute simultaneously.\n\n2. Memory Management:\nAllocates specific blocks of RAM to active applications and prevents programs from encroaching upon or overwriting each other's memory space.\n\n3. File and Disk Management:\nOrganizes data into structured hierarchical folders and files, manages directory pathways, and handles file copying, moving, renaming, and deleting.\n\n4. Device (I/O) Management:\nCommunicates with hardware peripherals (printers, keyboards, webcams) via specialized software drivers.\n\n5. Security and Access Control:\nEnforces username and password authentication, file encryption, and protects against unauthorized intrusion.",
        "keyTakeaway": "The OS manages the CPU, coordinates RAM, organizes files, controls peripherals via drivers, and maintains security.",
        "realWorldExample": "When you plug a new USB flash drive into a PC, the operating system detects it, loads the driver, and displays its folder."
      },
      {
        "title": "3. User Interfaces: CLI vs GUI",
        "content": "A user interface is the visual or text-based environment through which a human communicates with the operating system:\n\n• 1. Command Line Interface (CLI):\n- Requires the user to type specific, rigid text commands on a black terminal screen (e.g. MS-DOS, Linux Terminal).\n- Merits: Consumes very little RAM, fast execution for expert network administrators.\n- Demerits: Intimidating for beginners; requires memorizing hundreds of cryptic command syntax rules (e.g. 'mkdir', 'rmdir', 'cd'). Typographical errors cause commands to fail.\n\n• 2. Graphical User Interface (GUI):\n- An intuitive visual interface based on graphics, pictures, and mouse clicks:\n- Built on the WIMP Concept:\n  * Windows: Rectangular screen areas displaying open programs.\n  * Icons: Small graphic pictures representing files, folders, or software.\n  * Menus: Drop-down lists of executable options.\n  * Pointers: An on-screen arrow manipulated by a mouse or touchpad.\n- Merits: Highly user-friendly, visual, and easy for beginners to master.",
        "keyTakeaway": "CLI requires typing text commands; GUI uses the WIMP environment (Windows, Icons, Menus, Pointers).",
        "realWorldExample": "Typing 'copy file.txt D:\\' in MS-DOS is CLI; dragging a file icon with a mouse into a folder is GUI."
      },
      {
        "title": "4. Navigating the Windows Desktop and File Organization",
        "content": "• The Desktop:\nThe primary on-screen workspace that appears immediately after Windows finishes booting.\n\n• The Taskbar:\nThe horizontal bar typically situated at the bottom of the screen:\n- Start Button: Launches the Start Menu, programs, and power shutdown options.\n- Quick Launch & Active Apps: Displays icons of currently open running applications.\n- System Tray / Notification Area: Located at the bottom right, displaying the clock, calendar, internet connection status, and volume slider.\n\n• Files and Folders:\n- File: A collection of related digital data stored under a single filename with an extension (e.g. 'history_notes.docx').\n- Folder (Directory): A digital storage container used to organize and group related files together systematically, preventing desktop clutter.",
        "keyTakeaway": "The Desktop is your workspace; the Taskbar houses the Start button and active apps; folders organize files.",
        "realWorldExample": "Creating a folder named 'BECE Revision' on your desktop to store separate Word files for Math, Science, and Social Studies."
      }
    ],
    "commonMistakes": [
      "Confusing system software (Operating System) with application software (Microsoft Word or games).",
      "Thinking that a computer can run applications without an operating system installed.",
      "Assuming that deleting a shortcut icon deletes the entire software program from the computer.",
      "Confusing a file (the actual document) with a folder (the container that holds files)."
    ],
    "beceExamTips": [
      "In BECE Section A, questions frequently test the acronym WIMP: Windows, Icons, Menus, Pointers.",
      "Name 3 examples of operating systems: Windows, macOS, Android, Linux.",
      "State 3 functions of an operating system: Memory management, Processor multitasking, File management."
    ],
    "summaryChecklist": [
      "Can define an Operating System and explain why it is essential.",
      "Understand the 5 primary functions of an OS.",
      "Can contrast Command Line Interfaces (CLI) with Graphical User Interfaces (GUI).",
      "Know the components of the desktop, taskbar, and file/folder structures."
    ]
  },
  "jhs1-ict-t9-keyboarding": {
    "topicId": "jhs1-ict-t9-keyboarding",
    "realWorldContext": "Keyboarding is the primary method of communicating textual data into computers. Whether writing essays, coding software, or chatting with friends, typing efficiently without staring down at the keys (touch typing) dramatically boosts speed, accuracy, and academic productivity. Mastering the home row keys and specialized shortcut commands is a cornerstone skill in JHS 1 Computing.",
    "objectives": [
      "Identify the functional sections of a standard QWERTY computer keyboard.",
      "Master the Home Row Keys (ASDF JKL;) and correct touch typing finger placement.",
      "Analyze the roles of special and modifier keys: Shift, Caps Lock, Ctrl, Alt, Enter, Backspace, and Delete.",
      "Demonstrate ergonomic typing posture to prevent wrist and muscle strain."
    ],
    "sections": [
      {
        "title": "1. The Keyboard Architecture: Five Main Key Clusters",
        "content": "A standard computer keyboard is divided into five functional key groupings:\n\n1. Alphanumeric Keys:\nThe central section containing the 26 letters of the alphabet (A–Z), number keys (0–9), and punctuation symbols (comma, period, semicolon, quotation marks).\n\n2. Function Keys (F1 to F12):\nThe top row of keys programmed to perform specific software shortcuts. E.g. F1 displays Help, F5 refreshes a browser page, F7 launches spelling and grammar check in Microsoft Word.\n\n3. Cursor / Navigation Keys:\nKeys used to move the text cursor across a document: Arrow Keys (Up, Down, Left, Right), Home (moves cursor to start of line), End (moves to end of line), Page Up, and Page Down.\n\n4. Numeric Keypad:\nA 17-key calculator-style cluster on the far right, activated by the Num Lock key for fast numerical data entry.\n\n5. Special Control & Modifier Keys:\nEnter, Shift, Caps Lock, Ctrl, Alt, Tab, Esc, Backspace, and Delete.",
        "keyTakeaway": "Keyboard sections: Alphanumeric, Function (F1–F12), Cursor navigation, Numeric keypad, and Modifier keys.",
        "realWorldExample": "An accountant uses the numeric keypad with their right hand to enter sales figures quickly."
      },
      {
        "title": "2. Touch Typing and the Home Row Keys",
        "content": "• What is Touch Typing?\nThe technique of typing rapidly and accurately relying on muscle memory without ever looking down at the keyboard keys.\n\n• The Home Row Keys:\nThe designated starting resting position for all eight fingers along the middle alphabetic row:\n- Left Hand:\n  * Little finger on 'A'\n  * Ring finger on 'S'\n  * Middle finger on 'D'\n  * Index finger on 'F'\n- Right Hand:\n  * Index finger on 'J'\n  * Middle finger on 'K'\n  * Ring finger on 'L'\n  * Little finger on ';'\n- Thumbs:\n  * Both thumbs rest gently over the Spacebar.\n\n• The Guide Keys ('F' and 'J'):\nThe 'F' and 'J' keys feature small raised physical ridges or tactile bumps. They allow typists to place their index fingers on the home row purely by touch without glancing down.",
        "keyTakeaway": "Home row keys: Left hand = A S D F; Right hand = J K L ;. 'F' and 'J' have tactile guide bumps.",
        "realWorldExample": "Professional court stenographers type over 100 words per minute using touch typing techniques."
      },
      {
        "title": "3. Special Function and Modifier Keys",
        "content": "Modifier keys are held down while pressing another key to trigger specific commands:\n\n• Shift Key:\n- Toggles capital letters for single characters (e.g. Shift + 'a' = 'A').\n- Accesses upper symbols printed on dual-character keys (e.g. Shift + '1' = '!'; Shift + '/' = '?').\n\n• Caps Lock Key:\nA toggle key. When pressed once, a light illuminates and ALL typed letters appear in UPPERCASE (CAPITALS) until pressed again to turn off.\n\n• Enter / Return Key:\n- Executes a selected command, confirms a dialog box choice, or starts a new paragraph in word processing.\n\n• Backspace vs Delete Keys (Crucial BECE Distinction!):\n- Backspace: Erases the character immediately to the LEFT of the insertion point cursor.\n- Delete: Erases the character immediately to the RIGHT of the insertion point cursor (or removes selected objects).\n\n• Ctrl (Control) & Alt (Alternate) Keys:\nUsed in combinations to trigger shortcuts: Ctrl + C (Copy), Ctrl + V (Paste), Ctrl + S (Save), Ctrl + Z (Undo).",
        "keyTakeaway": "Backspace deletes to the left; Delete deletes to the right; Shift accesses upper symbols; Caps Lock locks uppercase.",
        "realWorldExample": "If you misspell a word, Backspace deletes backwards, while Delete erases characters ahead of your cursor."
      },
      {
        "title": "4. Keyboarding Ergonomics and Speed Building",
        "content": "• Proper Typing Ergonomics:\n- Keep wrists straight and elevated slightly above the desk, not bent sharply against the table edge.\n- Keep fingers curved naturally like holding a tennis ball over the home row keys.\n- Tap keys with light, rhythmic fingertip taps rather than pounding the keyboard with brute force.\n\n• Building Typing Speed and Accuracy:\n- Prioritize Accuracy First: Speed naturally follows when you strike the correct keys with the correct fingers.\n- Use interactive typing tutor software (e.g. Mavis Beacon Teaches Typing, TypingClub) for 15 minutes daily.",
        "keyTakeaway": "Keep wrists neutral, curve fingers over the home row, and prioritize accuracy before typing speed.",
        "realWorldExample": "Students who practice with Mavis Beacon increase their typing speed from 10 to over 40 words per minute."
      }
    ],
    "commonMistakes": [
      "Confusing Backspace (deletes to the left) with Delete (deletes to the right).",
      "Typing with only two index fingers ('hunt-and-peck' method) while looking down at the keyboard.",
      "Leaving Caps Lock on permanently when wanting to capitalize only the first letter of a sentence (use Shift instead).",
      "Resting heavy wrists flat against the desk while typing, causing tendon strain."
    ],
    "beceExamTips": [
      "In BECE Section A, always remember: Backspace deletes characters to the LEFT of the cursor; Delete erases to the RIGHT.",
      "State the home row keys accurately: Left hand = A, S, D, F; Right hand = J, K, L, Semicolon (;).",
      "Explain the purpose of the tactile bumps on 'F' and 'J': 'To allow the typist to locate the home row position by touch without looking down.'"
    ],
    "summaryChecklist": [
      "Can identify the 5 functional clusters on a QWERTY keyboard.",
      "Know the home row keys (ASDF JKL;) and thumb placement on the Spacebar.",
      "Understand the difference between Backspace and Delete.",
      "Know how Shift, Caps Lock, Enter, and Ctrl modifier keys operate."
    ]
  },
  "jhs1-ict-t10-wordprocessing": {
    "topicId": "jhs1-ict-t10-wordprocessing",
    "realWorldContext": "Before computers, creating official letters, lesson notes, and examination questions required typewriters. A single typographical mistake meant starting the entire page from scratch! Today, word processing software like Microsoft Word and Google Docs allows students and professionals to type, edit, check spelling, format fonts, and print professional documents effortlessly.",
    "objectives": [
      "Define word processing and navigate the Microsoft Word user interface.",
      "Perform basic file operations: Creating, opening, saving, and printing documents.",
      "Execute text editing operations: Cut, Copy, Paste, Undo, and Redo.",
      "Apply character formatting (font family, font size, bold, italic, underline) and paragraph alignments."
    ],
    "sections": [
      {
        "title": "1. What is Word Processing? Interface Navigation",
        "content": "A Word Processor is an application software program designed specifically for creating, editing, formatting, proofreading, saving, and printing text-based documents.\n\n• Prominent Word Processors: Microsoft Word, Google Docs, LibreOffice Writer, WPS Writer.\n\n• The Microsoft Word Interface Elements:\n1. Title Bar: The top banner displaying the document name (e.g. 'Document1 - Word') and window control buttons (Minimize, Maximize/Restore, Close).\n2. Quick Access Toolbar: Customizable icons for one-click commands (Save, Undo, Redo).\n3. The Ribbon: The tabbed command center (Home, Insert, Page Layout, References, Review, View) organizing tools into functional groups.\n4. Insertion Point (Cursor): The blinking vertical line '|' indicating where typed characters will appear on the page.\n5. Document Area: The blank white canvas representing the virtual paper sheet.\n6. Status Bar: The bottom bar showing page count, total word count, proofing language, and the Zoom slider.",
        "keyTakeaway": "A word processor creates and edits text; the Ribbon groups tools into tabs; the cursor indicates text insertion.",
        "realWorldExample": "A JHS teacher uses Microsoft Word to type term examination questions, format tables, and check spelling."
      },
      {
        "title": "2. File Operations: Creating, Saving, and Printing",
        "content": "• Creating a New Document: Click File → New → Blank Document (Shortcut: Ctrl + N).\n\n• Saving Documents (Save vs Save As):\n- Save (Ctrl + S): Updates and saves changes to an already named, existing document file.\n- Save As (F12): Prompts the user to specify a new Filename, file format, and storage location (folder) when saving for the first time or creating a duplicate copy.\n- Standard File Extension: Microsoft Word saves documents with the '.docx' extension (e.g. 'science_notes.docx').\n\n• Opening an Existing Document: Click File → Open (Shortcut: Ctrl + O).\n\n• Printing a Document: Click File → Print (Shortcut: Ctrl + P), where you select printer destination, number of copies, and page ranges.",
        "keyTakeaway": "Ctrl + N creates new; Ctrl + S saves; Ctrl + O opens; Ctrl + P prints; .docx is Word's extension.",
        "realWorldExample": "When saving an essay for the first time, 'Save As' prompts you to name the file 'My_BECE_Essay.docx'."
      },
      {
        "title": "3. The Clipboard Operations: Cut, Copy, and Paste",
        "content": "The Clipboard is a temporary storage area in computer memory that holds cut or copied items until pasted elsewhere:\n\n• 1. COPY (Ctrl + C):\nDuplicates the selected text or graphic into the Clipboard while keeping the original text untouched in its current location.\n\n• 2. CUT (Ctrl + X):\nRemoves the highlighted text from its original position and moves it into the Clipboard.\n\n• 3. PASTE (Ctrl + V):\nInserts the contents of the Clipboard into the document at the current location of the blinking cursor.\n\n• 4. UNDO (Ctrl + Z):\nReverses the most recent action or deletion.\n\n• 5. REDO (Ctrl + Y):\nRepeats or restores the action that was undone.",
        "keyTakeaway": "Copy duplicates; Cut moves; Paste inserts from Clipboard; Ctrl + Z undoes; Ctrl + Y redoes.",
        "realWorldExample": "If you accidentally delete an entire paragraph, pressing Ctrl + Z instantly restores it."
      },
      {
        "title": "4. Character Formatting and Paragraph Alignment",
        "content": "• Character Formatting (Home Tab - Font Group):\n- Font Family (Typeface): The visual design of letters (e.g. Times New Roman, Calibri, Arial).\n- Font Size: The height of characters measured in points (pt) (e.g. 12 pt for body text, 16 pt for headings).\n- Font Attributes:\n  * Bold (Ctrl + B): Makes text heavier and darker for emphasis.\n  * Italic (Ctrl + I): Slants letters to the right, used for book titles and foreign words.\n  * Underline (Ctrl + U): Draws a line beneath text, used for headings.\n\n• Paragraph Alignment (Home Tab - Paragraph Group):\n- Align Left (Ctrl + L): Aligns text evenly against the left margin with a ragged right edge (standard for informal text).\n- Center (Ctrl + E): Centers text symmetrically between left and right margins (ideal for essay headings and titles).\n- Align Right (Ctrl + R): Aligns text flush against the right margin (used for sender addresses and dates in letters).\n- Justify (Ctrl + J): Distributes text evenly between BOTH left and right margins with crisp, straight borders (used in newspapers and textbooks).",
        "keyTakeaway": "Bold (Ctrl+B), Italic (Ctrl+I), Underline (Ctrl+U). Center for headings; Justify for professional textbook paragraphs.",
        "realWorldExample": "In an official letter, the date is aligned to the right (Ctrl+R), the subject heading is centered (Ctrl+E), and body text is justified (Ctrl+J)."
      }
    ],
    "commonMistakes": [
      "Confusing 'Save' with 'Save As' (Save updates the current file; Save As allows renaming or choosing a new folder).",
      "Using the Spacebar repeatedly to center a heading instead of clicking the Center Alignment button (Ctrl + E).",
      "Confusing Cut (moves text) with Copy (duplicates text).",
      "Forgetting to highlight/select text before attempting to format it."
    ],
    "beceExamTips": [
      "Memorize essential keyboard shortcuts: Ctrl+S (Save), Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+V (Paste), Ctrl+Z (Undo), Ctrl+B (Bold), Ctrl+E (Center).",
      "Remember that Microsoft Word document files end with the '.docx' extension.",
      "Explain Justification: 'Aligns text evenly along both the left and right margins by adjusting spaces between words.'"
    ],
    "summaryChecklist": [
      "Can navigate the Word interface (Title bar, Ribbon, Status bar, Cursor).",
      "Know file operations: New (Ctrl+N), Save (Ctrl+S), Save As (F12), Print (Ctrl+P).",
      "Master Clipboard commands: Cut (Ctrl+X), Copy (Ctrl+C), Paste (Ctrl+V), Undo (Ctrl+Z).",
      "Can apply character formatting and all 4 paragraph alignments (Left, Center, Right, Justify)."
    ]
  },
  "jhs1-ict-t11-documentformatting": {
    "topicId": "jhs1-ict-t11-documentformatting",
    "realWorldContext": "A plain block of unformatted text looks dull, cluttered, and difficult to comprehend. By incorporating bulleted lists, structured tables, headers and footers, colorful page borders, and embedded illustrations, word processing transforms ordinary text into engaging, professional reports, timetables, and examination papers.",
    "objectives": [
      "Create and customize bulleted and numbered lists for ordered and unordered data.",
      "Insert, modify, and format tables (rows, columns, cells, merging, and borders).",
      "Configure page layout settings: Margins (Top, Bottom, Left, Right) and Page Orientation (Portrait vs Landscape).",
      "Insert and format headers, footers, page numbers, and graphic images."
    ],
    "sections": [
      {
        "title": "1. Bulleted and Numbered Lists",
        "content": "Lists break down long blocks of information into digestible, visual points:\n\n• 1. Bulleted Lists (Unordered Lists):\n- Used when the items have no necessary chronological or priority sequence.\n- Items are preceded by visual geometric symbols: solid circles, squares, arrows, or checkmarks.\n- Example: A list of laboratory safety apparatus (Beakers, Bunsen burners, Test tubes).\n\n• 2. Numbered Lists (Ordered Lists):\n- Used when the sequence, chronological order, or ranking of items is critical.\n- Preceded by numbers (1, 2, 3), Roman numerals (i, ii, iii), or alphabetical letters (A, B, C).\n- Example: Step-by-step instructions for boiling an egg or executing a scientific experiment.",
        "keyTakeaway": "Use bullets for unordered items; use numbers when step-by-step sequence matters.",
        "realWorldExample": "A recipe uses numbered lists for cooking steps (Step 1, Step 2) and bulleted lists for raw ingredients."
      },
      {
        "title": "2. Working with Tables in Word Processing",
        "content": "A Table organizes information into a neat, grid-based matrix:\n\n• Anatomy of a Table:\n- Row: A horizontal arrangement of data running from left to right.\n- Column: A vertical arrangement of data running from top to bottom.\n- Cell: The individual rectangular box formed at the intersection of a row and a column where text or numbers are typed.\n\n• Essential Table Manipulation Commands:\n- Insert Table: Click Insert → Table → choose number of rows and columns.\n- Merging Cells: Combining two or more selected adjacent cells into a single larger cell. (Frequently used across the first row to create a unified table title).\n- Splitting Cells: Dividing an individual cell into two or more smaller sub-cells.\n- Inserting/Deleting: Right-clicking allows adding new rows above/below or columns left/right.\n- Cell Borders & Shading: Applying background colors to header rows and adjusting border line thickness.",
        "keyTakeaway": "Tables consist of Rows (horizontal) and Columns (vertical); their intersection forms a Cell. Merging unites adjacent cells.",
        "realWorldExample": "School weekly class timetables are created using tables where columns represent days (Monday–Friday) and rows represent class periods."
      },
      {
        "title": "3. Page Layout: Margins and Orientation",
        "content": "Page Setup controls how document content is laid out on physical paper:\n\n• 1. Page Margins:\n- The blank white border space surrounding the printable text area on all four sides: Top Margin, Bottom Margin, Left Margin, and Right Margin.\n- Standard default margin in Word is Normal: 1 inch (2.54 cm) on all sides.\n\n• 2. Page Orientation:\n- Portrait Orientation:\n  * The page is oriented vertically (height is greater than width: e.g. 21 cm wide × 29.7 cm high for A4).\n  * Standard format for formal letters, narrative essays, examination papers, and books.\n- Landscape Orientation:\n  * The page is oriented horizontally (width is greater than height: 29.7 cm wide × 21 cm high).\n  * Ideal for wide tables with multiple columns, financial spreadsheets, graduation certificates, and brochures.",
        "keyTakeaway": "Margins frame the page; Portrait is vertical (standard letters); Landscape is horizontal (wide tables and certificates).",
        "realWorldExample": "A headteacher prints school certificates in Landscape orientation so the school crest and student name fit across the wide page."
      },
      {
        "title": "4. Headers, Footers, and Graphics",
        "content": "• Headers and Footers:\n- Header: Text or graphics that automatically appear in the top margin of every page in a document (e.g. document title, school name).\n- Footer: Text that automatically appears in the bottom margin of every page (e.g. page numbering 'Page 1 of 5', date, author name).\n- Setting: Click Insert → Header or Footer.\n\n• Inserting Graphics and Clipart:\n- Click Insert → Pictures (to insert digital photos from disk) or Shapes (rectangles, arrows, stars).\n- Text Wrapping: Determines how paragraph text wraps around an inserted image (e.g. Square, Tight, In Line with Text, Behind Text).",
        "keyTakeaway": "Headers appear at top margins; Footers appear at bottom margins; Text Wrapping controls how words flow around pictures.",
        "realWorldExample": "Textbooks display the book title in the header and page numbers in the footer across all 300 pages automatically."
      }
    ],
    "commonMistakes": [
      "Confusing rows (horizontal) with columns (vertical) in table questions.",
      "Attempting to draw lines manually with a pencil instead of using the Insert Table tool.",
      "Confusing Portrait (taller than wide) with Landscape (wider than tall).",
      "Typing page numbers manually on every single page instead of using the automated Insert Page Number feature."
    ],
    "beceExamTips": [
      "In BECE Section B, calculate total table cells using the formula: Cells = Rows × Columns.",
      "Clearly distinguish between Portrait (vertical) and Landscape (horizontal) orientation with practical examples.",
      "Explain the purpose of merging cells: 'To combine two or more adjacent cells into a single larger cell for headings.'"
    ],
    "summaryChecklist": [
      "Can create bulleted (unordered) and numbered (ordered) lists.",
      "Understand table anatomy: Rows, Columns, Cells, Merging, and Splitting.",
      "Can contrast Portrait and Landscape page orientations.",
      "Know how to insert and configure Headers, Footers, Page Numbers, and Images."
    ]
  },
  "jhs1-ict-t12-internetbasics": {
    "topicId": "jhs1-ict-t12-internetbasics",
    "realWorldContext": "The Internet is the defining communication marvel of the 21st century. It links billions of computers, smartphones, and servers across continents via undersea fiber optic cables and satellite links. Whether doing homework research, checking exam results on the WAEC portal, or reading news on GhanaWeb, understanding web browsers, URLs, and search engines is fundamental for modern digital literacy.",
    "objectives": [
      "Define the Internet and distinguish it from the World Wide Web (WWW).",
      "Contrast Web Browsers with Search Engines.",
      "Deconstruct the architecture of a Uniform Resource Locator (URL).",
      "Identify common Top-Level Domain extensions (.com, .edu, .gov, .org) and country codes (.gh, .uk)."
    ],
    "sections": [
      {
        "title": "1. What is the Internet? Internet vs The World Wide Web",
        "content": "• The Internet (International Network):\n- A massive global decentralized network of millions of interconnected computer networks communicating through standardized protocol suites (TCP/IP - Transmission Control Protocol / Internet Protocol).\n- The physical infrastructure: fiber optic undersea cables, satellite links, cellular cell towers, and routers that connect the world.\n\n• The World Wide Web (WWW / Web):\n- An information-sharing service that runs on top of the physical Internet infrastructure.\n- Consists of billions of interlinked multimedia web pages, images, and audio files written in HTML (Hypertext Markup Language) and connected via hyperlinks.\n- Invented in 1989 by British computer scientist Sir Tim Berners-Lee at CERN.\n\n• Analogy:\nThe Internet is the physical network of paved highways and tracks; the World Wide Web is the cars, trucks, and cargo traveling upon those highways.",
        "keyTakeaway": "The Internet is the global physical network infrastructure; the World Wide Web (WWW) is the multimedia information service running on it.",
        "realWorldExample": "Undersea fiber optic cables landing at the beach in Osu connect Ghana's telecom networks to the global Internet."
      },
      {
        "title": "2. Web Browsers vs Search Engines",
        "content": "Students frequently confuse these two distinct internet software concepts:\n\n• 1. Web Browser (Client Application):\n- An application software installed on a computer or phone used to locate, retrieve, interpret, and visually display web pages from the Internet.\n- Translates HTML code into human-readable text, graphics, and video.\n- Examples: Google Chrome, Mozilla Firefox, Microsoft Edge, Apple Safari, Opera.\n\n• 2. Search Engine (Web-Based Information Database):\n- A website program accessed through a browser that searches an immense indexed database of web pages based on keywords entered by the user, returning a list of relevant hyperlinks.\n- Examples: Google Search, Microsoft Bing, Yahoo Search, DuckDuckGo.\n\n• Key Distinction:\nYou must first launch a WEB BROWSER (e.g. Chrome) before you can visit a SEARCH ENGINE (e.g. Google.com) to search for information!",
        "keyTakeaway": "A Web Browser is software used to view websites (Chrome, Edge); a Search Engine is an online tool used to find websites (Google, Bing).",
        "realWorldExample": "Opening Mozilla Firefox on a lab PC (Browser) and typing 'Ghana cocoa production' into Google (Search Engine)."
      },
      {
        "title": "3. The Anatomy of a Web Address (URL)",
        "content": "A Uniform Resource Locator (URL) is the complete, unique digital address assigned to a specific web page or file on the Internet.\n\n• Breakdown of a URL:\nExample: https://www.waecgh.org/results/bece.html\n\n1. Protocol ('https://'):\nHypertext Transfer Protocol Secure. Dictates how data is encrypted and transferred between browser and server.\n\n2. Subdomain & Host ('www'):\nIndicates World Wide Web server service.\n\n3. Domain Name ('waecgh.org'):\nThe registered unique identifier of the organization's web server.\n\n4. Directory / Folder Path ('/results/'):\nThe specific folder on the server where the file is stored.\n\n5. Resource Filename ('bece.html'):\nThe exact web page document being opened.",
        "keyTakeaway": "A URL consists of Protocol (https://) → Domain Name (waecgh.org) → Directory Path (/results/) → Filename (bece.html).",
        "realWorldExample": "In 'https://www.ucc.edu.gh', 'https' is the protocol, 'ucc.edu.gh' is the domain, and '.gh' is the country code."
      },
      {
        "title": "4. Domain Name Extensions and Hyperlinks",
        "content": "• Top-Level Domains (TLDs) indicate the organizational nature of a website:\n- .com: Commercial businesses and corporate enterprises (e.g. amazon.com).\n- .edu / .ac: Accredited educational institutions and universities (e.g. ug.edu.gh).\n- .gov: Government ministries, departments, and official agencies (e.g. ges.gov.gh).\n- .org: Non-profit organizations, charities, and NGOs (e.g. unicef.org).\n- .net: Network infrastructure providers.\n\n• Country-Code Top-Level Domains (ccTLDs):\nTwo-letter extensions designating geographic sovereign nations:\n- .gh = Ghana\n- .ng = Nigeria\n- .uk = United Kingdom\n- .za = South Africa\n- .ca = Canada\n\n• Hyperlinks:\nUnderlined text (usually blue) or images that, when clicked, immediately transport the web browser to another web page or download a file.",
        "keyTakeaway": ".com = commercial; .edu = educational; .gov = government; .org = non-profit; .gh = Ghana.",
        "realWorldExample": "The official website for the Ghana Education Service is 'ges.gov.gh' (.gov indicates a government agency, .gh indicates Ghana)."
      }
    ],
    "commonMistakes": [
      "Using the terms 'Internet' and 'World Wide Web' as exact synonyms (the Internet is the hardware network; the Web is the information service).",
      "Calling Google Chrome a search engine (Chrome is a browser; Google.com is the search engine).",
      "Believing that an email address and a URL are the same thing (email addresses have '@'; URLs start with 'http://' or 'www').",
      "Confusing domain extensions: e.g. thinking .gov is for private commercial shops."
    ],
    "beceExamTips": [
      "In BECE Section A, identify domain types: .gov (Government), .edu (Educational), .com (Commercial), .org (Non-profit).",
      "Name 3 web browsers: Google Chrome, Mozilla Firefox, Microsoft Edge.",
      "Deconstruct a sample URL: Protocol (http/https), Domain Name (host), and Filename."
    ],
    "summaryChecklist": [
      "Can define the Internet and contrast it with the World Wide Web (WWW).",
      "Know the difference between Web Browsers and Search Engines.",
      "Understand the structural components of a URL.",
      "Can identify common domain extensions (.com, .edu, .gov, .gh)."
    ]
  },
  "jhs1-ict-t13-email": {
    "topicId": "jhs1-ict-t13-email",
    "realWorldContext": "Sending a physical letter via postal mail (snail mail) from Accra to Tamale takes days, requires paper, envelopes, and postage stamps, and can easily get lost. In contrast, Electronic Mail (Email) delivers messages, photographs, spreadsheets, and PDF documents across the globe in milliseconds for virtually zero cost. Mastering email communication, data attachments, and Netiquette is an essential 21st-century skill.",
    "objectives": [
      "Define electronic mail (email) and compare its merits with traditional postal mail.",
      "Analyze the structure of a valid email address.",
      "Explain the key fields in an email composition window: To, CC, BCC, Subject, and Attachments.",
      "Demonstrate proper email etiquette (Netiquette) in digital communications."
    ],
    "sections": [
      {
        "title": "1. What is Email? Email vs Traditional Postal Mail",
        "content": "Electronic Mail (Email) is a digital telecommunication method of composing, sending, storing, and receiving messages over the Internet asynchronously.\n\n• Advantages of Email over Traditional Postal Mail ('Snail Mail'):\n1. Blazing Speed: Messages transmit across the globe in seconds, whereas physical post requires days or weeks.\n2. Low Cost: Sending emails incurs zero postage stamp fees, regardless of geographical distance.\n3. File Attachments: Users can transmit multimedia files (PDF certificates, high-resolution photos, spreadsheets) alongside the text.\n4. Mass Messaging: A single email can be transmitted to hundreds of recipients simultaneously with one click.\n5. Eco-Friendly: Saves paper, reducing deforestation and carbon footprint.\n6. Permanent Digital Archive: Sent and received messages are indexed and searchable for years.",
        "keyTakeaway": "Email is instantaneous, virtually free, supports multimedia attachments, and reaches global recipients in seconds.",
        "realWorldExample": "A student receives their SHS placement notification via digital email notification within seconds of release."
      },
      {
        "title": "2. Structure of an Email Address",
        "content": "Every email address must follow a strict, standardized syntax:\n\n• Example: kwame.mensah@ges.gov.gh\n\n1. Username ('kwame.mensah'):\nThe unique identifier chosen by the individual or assigned by the organization.\n\n2. The '@' Symbol ('At'):\nA mandatory separator symbol connecting the username to the mail server domain.\n\n3. Mail Server Domain ('ges.gov.gh'):\nThe registered domain name of the email service provider hosting the mailbox (e.g. gmail.com, yahoo.com, outlook.com, or enterprise domains like ges.gov.gh).\n\n• Cardinal Syntax Rule:\nAn email address can NEVER contain blank spaces! (e.g. 'kwame mensah@gmail.com' is invalid and will fail to deliver).",
        "keyTakeaway": "Structure: Username + @ + Domain Name. An email address must NEVER contain spaces.",
        "realWorldExample": "In 'adjoa2026@gmail.com', 'adjoa2026' is the username, '@' is the separator, and 'gmail.com' is the mail service provider."
      },
      {
        "title": "3. Anatomy of an Email Composition Window",
        "content": "When drafting an email, specific fields control message routing:\n\n• 'To' Field:\nThe primary email address(es) of the intended direct recipient(s).\n\n• 'CC' (Carbon Copy) Field:\nSecondary recipients who receive a duplicate copy for informational transparency. Every recipient in the 'To' and 'CC' fields can see each other's email addresses.\n\n• 'BCC' (Blind Carbon Copy) Field (Crucial BECE Distinction!):\nSecret recipients who receive a copy of the email WITHOUT their email addresses being visible to anyone in the 'To' or 'CC' fields. Protects recipient privacy when sending newsletters to hundreds of people.\n\n• 'Subject' Line:\nA short, concise summary stating the specific purpose of the email (e.g. 'Application for Admission' or 'BECE Mock Exam Timetable'). An email should never be sent with a blank subject line!\n\n• 'Attachment' (Paperclip Icon):\nA tool that allows uploading computer files (documents, images, audio) stored on your hard drive to accompany the email message.",
        "keyTakeaway": "To = main recipient; CC = visible copy; BCC = secret hidden copy for privacy; Attachment = uploaded files.",
        "realWorldExample": "A school sending newsletters to 500 parents uses BCC so parents' private email addresses are not exposed to strangers."
      },
      {
        "title": "4. Netiquette: Professional Digital Etiquette",
        "content": "Netiquette (Network Etiquette) is the code of polite, respectful, and professional conduct observed when communicating digitally:\n\n1. Never Type in All Capital Letters:\nTyping in all caps (e.g. 'SUBMIT YOUR PROJECT NOW!') is interpreted in digital culture as SHOUTING in anger. Use standard sentence capitalization.\n\n2. Clear Subject Line:\nAlways state a precise subject line so the recipient knows the message context before opening.\n\n3. Professional Salutation and Sign-Off:\nBegin with 'Dear Mr. Mensah,' or 'Hello Class,' and end courteously with 'Best regards,' followed by your full name.\n\n4. Avoid Forwarding Spam or Unverified Hoaxes:\nNever forward chain letters, fraudulent lottery claims, or unconfirmed political rumors.\n\n5. Proofread Before Sending:\nCheck grammar and tone, and ensure attachments are attached before clicking Send!",
        "keyTakeaway": "Netiquette prohibits typing in all caps (shouting), mandates clear subject lines, and demands respectful language.",
        "realWorldExample": "Writing 'Dear Sir, Please find attached my homework assignment. Respectfully, Ama' observes proper Netiquette."
      }
    ],
    "commonMistakes": [
      "Typing blank spaces inside an email address (email addresses cannot have spaces).",
      "Confusing CC (recipients see each other) with BCC (recipient addresses are hidden).",
      "Writing the entire body message inside the short Subject line.",
      "Typing emails entirely in capital letters (violates Netiquette by simulating shouting)."
    ],
    "beceExamTips": [
      "In BECE Section A, questions frequently ask for the meaning of CC ('Carbon Copy') and BCC ('Blind Carbon Copy').",
      "Identify the symbol separating username from domain: the '@' (At) symbol.",
      "State 2 advantages of email over postal mail: 1. Instantaneous speed, 2. No cost of postage stamps, 3. Supports digital attachments."
    ],
    "summaryChecklist": [
      "Can define email and state 4 advantages over traditional postal mail.",
      "Know the syntax of an email address (Username, @, Domain).",
      "Understand the difference between To, CC, BCC, and Attachments.",
      "Can explain core Netiquette rules (no all-caps shouting, clear subject lines)."
    ]
  },
  "jhs1-ict-t14-cybersecurity": {
    "topicId": "jhs1-ict-t14-cybersecurity",
    "realWorldContext": "As Ghana's economy becomes digitized through mobile money, online banking, social media, and digital school portals, cybercrime has emerged as a major national threat. Malicious software (malware), phishing scams, and identity theft cost individuals and businesses millions of cedis annually. Practicing cybersecurity, recognizing fraudulent scams, and safeguarding personal data protect our digital lives.",
    "objectives": [
      "Define cybersecurity and analyze major types of malware: Viruses, Worms, Trojan Horses, Spyware, and Ransomware.",
      "Identify social engineering and phishing tactics used by online scammers.",
      "Formulate robust data protection habits: Strong passwords, two-factor authentication, firewalls, and regular backups.",
      "Understand the legal and moral consequences of cyber fraud (sakawa) in Ghana."
    ],
    "sections": [
      {
        "title": "1. What is Cybersecurity? The Threat of Malware",
        "content": "Cybersecurity is the discipline and practice of defending computer networks, devices, software programs, and electronic data from unauthorized access, digital attacks, theft, or damage.\n\n• What is Malware? (Malicious Software):\nAny software intentionally designed to cause damage to a computer, server, client, or computer network:\n\n1. Computer Virus:\n- A malicious program that attaches itself to legitimate host files or executable software. It activates and replicates only when the infected host program is executed by the user, corrupting files and degrading system performance.\n\n2. Computer Worm:\n- A standalone self-replicating malware program that spreads automatically across local networks and the Internet without needing to attach to a host file. Consumes network bandwidth and crashes servers.\n\n3. Trojan Horse:\n- Malware disguised as a harmless, desirable software application (e.g. a free game, screensaver, or media player). Once downloaded and installed, it secretly opens backdoors allowing hackers to access the victim's computer.\n\n4. Spyware & Keyloggers:\n- Software that secretly installs itself to monitor user activities, track browsing history, and record keystrokes (keylogger) to steal passwords and credit card credentials.\n\n5. Ransomware:\n- Dangerous malware that encrypts all files on a computer, demanding an extortion payment (ransom) in cryptocurrency before providing a decryption key.",
        "keyTakeaway": "Viruses need a host file; Worms spread independently across networks; Trojans disguise as safe apps; Spyware steals passwords.",
        "realWorldExample": "Plugging an infected USB flash drive into a school lab PC can spread a shortcut virus that hides all documents."
      },
      {
        "title": "2. Social Engineering and Phishing Scams",
        "content": "Not all cyber threats rely on complex code; many manipulate human psychology:\n\n• What is Phishing?\nA fraudulent technique where cybercriminals send deceptive SMS messages, emails, or fake web links impersonating trusted institutions (banks, MTN MoMo, WAEC) to trick victims into revealing sensitive personal data (PINs, passwords, Ghana Card numbers).\n\n• Telltale Signs of a Phishing Attempt:\n1. False Urgency: Demands immediate action ('Account will be blocked in 1 hour!').\n2. Suspicious Web Links: Misspelled domain URLs (e.g. 'www.momo-gh-verify.com' instead of official telecom portals).\n3. Requests for Confidential Credentials: Legitimate banks NEVER ask customers for secret PINs via phone calls, SMS, or emails!\n4. Poor Grammar and Spelling: Scams often feature awkward English phrasing.",
        "keyTakeaway": "Phishing deceives victims into revealing secret PINs and passwords; legitimate banks never request PINs via SMS.",
        "realWorldExample": "Receiving a text: 'You have won GHS 50,000! Send your MoMo PIN to claim prize' is an obvious phishing scam."
      },
      {
        "title": "3. Building Strong Passwords and Defensive Security",
        "content": "Defending personal digital accounts requires proactive security hygiene:\n\n• 1. Strong Password Construction:\n- Length: At least 8 to 12 characters.\n- Complexity: A robust mixture of UPPERCASE letters, lowercase letters, numbers (0–9), and special symbols (@, #, $, %, !).\n- Unpredictability: Never use personal names, birth years ('kofi2008'), or sequential numbers ('123456').\n- Example of Strong Password: 'Tr0p!c@l#Accr@2026'.\n\n• 2. Two-Factor Authentication (2FA):\n- Requires two separate verification steps before logging in: 1. Password + 2. A temporary one-time SMS code (OTP) sent to your mobile phone.\n\n• 3. Antivirus Software & Firewalls:\n- Antivirus: Software that continuously scans hard drives, memory, and downloads to detect, quarantine, and eliminate malware (e.g. Windows Defender, Kaspersky).\n- Firewall: A security filter that monitors incoming and outgoing network traffic, blocking unauthorized hacking connections.\n\n• 4. Regular Data Backup:\n- Always maintain duplicate copies of essential files on an external hard drive or cloud storage (Google Drive). If ransomware attacks, files can be restored without paying a dime!",
        "keyTakeaway": "Use complex passwords with symbols, enable 2FA, keep antivirus updated, and maintain regular backups.",
        "realWorldExample": "Enabling two-factor authentication on a Google account blocks hackers even if they guess your password."
      },
      {
        "title": "4. Legal and Ethical Responsibilities (Cybercrime Laws)",
        "content": "Under Ghana's Cybersecurity Act (Act 1038) and the Electronic Transactions Act:\n- Engaging in cyber fraud (sakawa), hacking computer systems, stealing data, or circulating non-consensual private imagery is a severe felony carrying heavy prison sentences.\n- Good Digital Citizenship: Respecting others' intellectual property, avoiding pirated software, and protecting national cyber infrastructure.",
        "keyTakeaway": "Cybercrime carries severe prison sentences under Ghanaian law; practice ethical digital citizenship.",
        "realWorldExample": "The Cyber Security Authority (CSA) of Ghana monitors online threats and coordinates the arrest of cyber fraud syndicates."
      }
    ],
    "commonMistakes": [
      "Using the same simple password ('123456' or your name) across all social media and email accounts.",
      "Believing that an antivirus program never needs updating (it must be updated regularly to recognize new virus definitions).",
      "Sharing your secret MoMo or banking PIN with someone claiming to call from the telecom office.",
      "Assuming computer worms and viruses are identical (worms replicate across networks without host files; viruses require a host file)."
    ],
    "beceExamTips": [
      "In BECE Section A, contrast Virus (requires human action and host file) with Worm (replicates independently across networks).",
      "Name 3 types of malware: Virus, Worm, Trojan Horse, Spyware, Ransomware.",
      "List 3 components of a strong password: Uppercase letters, lowercase letters, numbers, and special symbols."
    ],
    "summaryChecklist": [
      "Can define cybersecurity and differentiate viruses, worms, and trojans.",
      "Understand phishing scams and recognize suspicious indicators.",
      "Know how to construct a strong password and explain Two-Factor Authentication (2FA).",
      "Can explain the importance of antivirus software, firewalls, and regular backups."
    ]
  },
  "jhs1-ict-t15-algorithms": {
    "topicId": "jhs1-ict-t15-algorithms",
    "realWorldContext": "Behind every video game, Google search, robot, and automated traffic light lies an algorithm. An algorithm is simply a clear, step-by-step recipe for solving a problem. In modern computing, developing computational thinking—breaking complex challenges into sequential, manageable steps and mapping them with flowcharts—is the foundational doorway into computer programming.",
    "objectives": [
      "Define an algorithm and analyze the characteristics of an effective algorithm.",
      "Represent algorithms using structured English Pseudocode.",
      "Identify and draw standard ANSI flowchart symbols: Terminal, Input/Output, Process, and Decision.",
      "Trace and construct flowcharts for fundamental mathematical and real-world problems."
    ],
    "sections": [
      {
        "title": "1. What is an Algorithm? Core Characteristics",
        "content": "An Algorithm is a finite, unambiguous, step-by-step sequence of logical instructions designed to solve a specific problem or perform a task.\n\n• Everyday Analogy:\nA cooking recipe for preparing Ghanaian Jollof rice is an algorithm: it lists the ingredients (inputs), specifies the exact chronological steps to follow (processing), and produces delicious jollof rice (output).\n\n• Essential Characteristics of a Good Algorithm:\n1. Finiteness: The algorithm must terminate after a definite, countable number of steps (it cannot loop infinitely).\n2. Definiteness (Unambiguous): Every single instruction must be crystal clear with only one possible logical interpretation.\n3. Input: Must accept zero or more clearly defined inputs.\n4. Output: Must produce at least one defined output or result.\n5. Effectiveness / Feasibility: Each step must be simple enough to be realistically executed using available resources.",
        "keyTakeaway": "An algorithm is a finite, clear, step-by-step set of instructions designed to solve a problem.",
        "realWorldExample": "The step-by-step instructions for withdrawing cash from an ATM machine represent a financial transaction algorithm."
      },
      {
        "title": "2. Representing Algorithms: Pseudocode",
        "content": "Pseudocode is an informal, high-level way of describing an algorithm using structured, plain English statements that resemble programming code without strict programming language syntax.\n\n• Common Keywords Used in Pseudocode:\n- START / BEGIN: Marks the initiation of the algorithm.\n- INPUT / READ: Accepts data from the user.\n- CALCULATE / COMPUTE: Performs mathematical operations.\n- DISPLAY / PRINT / OUTPUT: Presents results to the user.\n- IF...THEN...ELSE: Represents conditional decision-making.\n- STOP / END: Marks the termination of the algorithm.\n\n• Pseudocode Example 1: Sum of Two Numbers:\n  START\n  INPUT Number1, Number2\n  Sum = Number1 + Number2\n  OUTPUT Sum\n  STOP\n\n• Pseudocode Example 2: Determining Exam Pass or Fail:\n  START\n  INPUT Score\n  IF Score >= 50 THEN\n      OUTPUT \"Congratulations! You Passed\"\n  ELSE\n      OUTPUT \"You Failed. Please Retake\"\n  ENDIF\n  STOP",
        "keyTakeaway": "Pseudocode uses plain English keywords (START, INPUT, CALCULATE, OUTPUT, STOP) to outline program logic.",
        "realWorldExample": "Software engineers write pseudocode on whiteboards to plan out program logic before typing actual Python or Java code."
      },
      {
        "title": "3. Standard Flowchart Symbols (ANSI Standard)",
        "content": "A Flowchart is a visual graphic diagram representing an algorithm, where individual steps are illustrated using standardized geometric shapes connected by directional arrows (flowlines):\n\n1. OVAL (Terminal Symbol):\n- Represents the START or STOP / END of an algorithm.\n\n2. PARALLELOGRAM (Input / Output Symbol):\n- Represents entering data into the system (e.g. 'INPUT Base, Height') or outputting results (e.g. 'DISPLAY Result').\n\n3. RECTANGLE (Process Symbol):\n- Represents calculations, data assignments, or internal actions (e.g. 'Area = 0.5 * Base * Height').\n\n4. DIAMOND / Rhombus (Decision Symbol):\n- Represents a logical conditional question with two possible exit branches: 'Yes' or 'No' (or 'True' and 'False') (e.g. 'Is Age >= 18?').\n\n5. FLOWLINE (Arrows):\n- Connects the symbols and indicates the exact sequential direction of program execution (typically top-to-bottom or left-to-right).",
        "keyTakeaway": "Oval = Start/Stop; Parallelogram = Input/Output; Rectangle = Process/Calculate; Diamond = Decision.",
        "realWorldExample": "A traffic light control system uses a decision diamond: 'Has the timer reached 60 seconds? Yes → Switch to Amber; No → Remain Green'."
      },
      {
        "title": "4. Constructing Flowcharts for Practical Problems",
        "content": "• Example Problem: Flowchart to Calculate the Perimeter of a Rectangle:\n\nStep 1: Draw an OVAL containing 'START'.\nStep 2: Draw a downward arrow to a PARALLELOGRAM containing 'INPUT Length, Width'.\nStep 3: Draw a downward arrow to a RECTANGLE containing 'Perimeter = 2 * (Length + Width)'.\nStep 4: Draw a downward arrow to a PARALLELOGRAM containing 'OUTPUT Perimeter'.\nStep 5: Draw a downward arrow to an OVAL containing 'STOP'.\n\n• Rules for Drawing Flowcharts:\n- Use standard geometric symbols neatly.\n- Flowlines should not cross each other haphazardly.\n- Decision diamonds must always have two clearly labeled exit paths ('Yes' and 'No').\n- Every flowchart must have exactly ONE Start symbol and at least one Stop symbol.",
        "keyTakeaway": "Flowcharts visually map algorithms: connect symbols logically with directional arrows from Start to Stop.",
        "realWorldExample": "Flowcharts are used in medicine to guide emergency doctors through resuscitation protocols step by step."
      }
    ],
    "commonMistakes": [
      "Using a rectangle for Input/Output operations (Input and Output MUST use a Parallelogram).",
      "Forgetting to label the exit branches of a Decision Diamond with 'Yes' and 'No'.",
      "Creating an algorithm with no termination point (an infinite loop violates finiteness).",
      "Using an oval for calculations (ovals are strictly for Start and Stop)."
    ],
    "beceExamTips": [
      "In BECE Section A and B, match symbols precisely: Oval = Start/Stop; Parallelogram = Input/Output; Rectangle = Process/Calculation; Diamond = Decision.",
      "When writing pseudocode, always begin with 'START' and conclude with 'STOP'.",
      "Ensure decision diamonds have two exit lines pointing to different outcomes based on condition."
    ],
    "summaryChecklist": [
      "Can define an algorithm and state 3 characteristics (finite, unambiguous, feasible).",
      "Know how to write algorithms in structured Pseudocode.",
      "Can identify and draw the 5 standard flowchart symbols (Oval, Parallelogram, Rectangle, Diamond, Arrow).",
      "Can trace a simple algorithm to calculate mathematical formulas."
    ]
  }
};
