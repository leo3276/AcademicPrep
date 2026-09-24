// Ghanaian JHS 1 Computing Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum

import { CurriculumTopic } from './types';

export const JHS1_COMPUTING_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs1-ict-t1-intro",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "Introduction to Computing & Information Processing Cycle",
    "description": "Understand what a computer is, distinguish data from information, and master the Input-Process-Output-Storage (IPOS) cycle.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=mCq8-xTH7jA",
    "youtubeId": "mCq8-xTH7jA",
    "keyNotes": "• A Computer is an electronic device that operates under the control of instructions stored in its own memory. It accepts raw data as input, processes it according to specified rules, produces results as output, and stores the results for future use.\n• Data vs Information:\n  - Data: Raw, unorganized, unprocessed facts, figures, symbols, or observations that lack context (e.g. \"Kofi, 85, 72, 90\").\n  - Information: Processed, organized, meaningful, and structured data that is useful for decision-making (e.g. \"Kofi's terminal report card showing an average score of 82.3% and ranking 1st in class\").\n• The Information Processing Cycle (IPOS):\n  1. Input: Capturing or entering raw data into the computer using input devices (keyboard, mouse, barcode reader).\n  2. Processing: Manipulating, calculating, sorting, and transforming data into meaningful form using the CPU (Central Processing Unit).\n  3. Output: Presenting processed results to the user in a comprehensible format using output devices (monitors, printers, speakers).\n  4. Storage: Retaining data, instructions, and information permanently or temporarily for future retrieval (hard disk, SSD, flash drive).\n• Characteristics of Computers: High speed, accuracy (GIGO - Garbage In, Garbage Out), diligence (never gets tired or bored), versatility, and vast storage capacity.",
    "examples": [
      {
        "id": "ex-ict-intro-1",
        "title": "Applying the IPOS Cycle to Mobile Money Transactions",
        "problem": "Explain how a Mobile Money (MoMo) cash withdrawal in Ghana follows the four stages of the Information Processing Cycle.",
        "stepByStepSolution": [
          "Step 1 (Input): The customer dials *170# on their mobile phone keypad, enters the merchant ID, amount, and their secret 4-digit PIN.",
          "Step 2 (Processing): The telecommunication network server (CPU) verifies the account balance, validates the secret PIN against the database, and deducts the cash amount plus transaction levy.",
          "Step 3 (Output): Both customer and vendor receive an instant confirmation SMS receipt displaying the new account balance and transaction ID.",
          "Step 4 (Storage): The complete transaction log is permanently archived in the bank's secure cloud database for auditing."
        ],
        "keyTakeaway": "Every digital transaction follows the IPOS cycle: Input → Process → Output → Storage."
      },
      {
        "id": "ex-ict-intro-2",
        "title": "Differentiating Data from Information",
        "problem": "Given the items: 'Akosua, 14, JHS 1, 98%', identify which is data and formulate an example of information.",
        "stepByStepSolution": [
          "Step 1: The isolated values 'Akosua', '14', 'JHS 1', and '98%' represent raw, uninterpreted DATA.",
          "Step 2: Processing and adding context creates INFORMATION: \"Akosua, a 14-year-old JHS 1 student, scored 98% in the Computing mock examination, earning the highest mark in the school.\""
        ],
        "keyTakeaway": "Data becomes information when organized, contextualized, and given meaning."
      }
    ]
  },
  {
    "id": "jhs1-ict-t2-generations",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "History and Generations of Computers",
    "description": "Trace early calculating devices (Abacus, Pascaline, Analytical Engine) through the First to Fifth computer generations.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=AkFi90lZ3rk",
    "youtubeId": "AkFi90lZ3rk",
    "keyNotes": "• Pioneers of Computing:\n  - Abacus: Earliest mechanical counting tool invented in Asia for addition and subtraction.\n  - Blaise Pascal (1642): Invented the Pascaline, the first mechanical adding machine using gears and wheels.\n  - Charles Babbage (1791–1871): The \"Father of the Computer\", who conceptualized the Difference Engine and the Analytical Engine (which featured an input, store/mill, and output mechanism).\n  - Ada Lovelace: Regarded as the world's first computer programmer for writing algorithms for Babbage's Analytical Engine.\n• The Five Computer Generations:\n  1. First Generation (1940–1956): Used VACUUM TUBES as the core electronic circuitry and magnetic drums for memory. Massive size (took up entire rooms), generated enormous heat, broke down constantly, and used machine code (e.g. ENIAC, UNIVAC).\n  2. Second Generation (1956–1963): Used TRANSISTORS (invented at Bell Labs). Smaller, faster, cheaper, more energy-efficient, and introduced assembly and early high-level languages (FORTRAN, COBOL).\n  3. Third Generation (1964–1971): Used INTEGRATED CIRCUITS (ICs / silicon chips), placing thousands of transistors on a single quartz crystal. Introduced keyboards, monitors, and primitive operating systems (e.g. IBM 360).\n  4. Fourth Generation (1971–Present): Used VERY LARGE SCALE INTEGRATION (VLSI) and MICROPROCESSORS (Intel 4004), placing an entire CPU on a single tiny microchip. Introduced personal computers (PCs), laptops, the Internet, and GUIs.\n  5. Fifth Generation (Present and Beyond): Based on ULTRA LARGE SCALE INTEGRATION (ULSI), ARTIFICIAL INTELLIGENCE (AI), parallel processing, neural networks, voice recognition, and quantum computing.",
    "examples": [
      {
        "id": "ex-ict-gen-1",
        "title": "Comparing First and Second Generation Computers",
        "problem": "State two distinct technological differences between First Generation and Second Generation computers.",
        "stepByStepSolution": [
          "1. Core Electronic Component: First Generation computers used delicate, bulky VACUUM TUBES that generated excessive heat; Second Generation computers replaced them with reliable, compact solid-state TRANSISTORS.",
          "2. Programming Language: First Generation computers relied on binary machine code (0s and 1s); Second Generation computers utilized assembly language and early high-level languages like FORTRAN and COBOL."
        ],
        "keyTakeaway": "Vacuum tubes defined Generation 1; Transistors defined Generation 2."
      },
      {
        "id": "ex-ict-gen-2",
        "title": "Why Charles Babbage is the Father of Computing",
        "problem": "Explain why Charles Babbage is celebrated worldwide as the 'Father of the Computer'.",
        "stepByStepSolution": [
          "Step 1: In the 1830s, Charles Babbage designed the Analytical Engine, a mechanical calculating machine.",
          "Step 2: Although never completed during his lifetime, his design incorporated the exact architectural components of modern digital computers: an Input device (punched cards), a Processing unit (the Mill), a Memory storage unit (the Store), and an Output mechanism (printed plates)."
        ],
        "keyTakeaway": "Babbage originated the fundamental architectural design (input, store, processor, output) used in all modern computers."
      }
    ]
  },
  {
    "id": "jhs1-ict-t3-inputdevices",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 3,
    "title": "Input Devices & Data Capture",
    "description": "Explore manual and automated input devices: keyboards, optical mouse, scanners, barcode readers, RFID, and biometric sensors.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=sKq_O7a8Wv8",
    "youtubeId": "sKq_O7a8Wv8",
    "keyNotes": "• An Input Device is any hardware peripheral component that allows a user to enter raw data, commands, and instructions into a computer system.\n• Classification of Input Devices:\n  1. Manual Input Devices (require direct human manipulation):\n     - Keyboard: Primary text input device; uses standard QWERTY layout.\n     - Pointing Devices: Mouse (optical/laser), touchpad (on laptops), trackball, and joystick (used in gaming).\n     - Touchscreen: Dual input/output device that detects finger touches (smartphones, tablets, ATMs).\n     - Microphone: Captures analog sound waves and converts them into digital audio signals.\n     - Graphic Tablet & Stylus: Used by digital artists and architects to draw freehand sketches.\n  2. Direct Data Capture (Automated / Optical Input Devices):\n     - Optical Scanner: Converts physical paper documents and photographs into digital image formats.\n     - Barcode Reader: Uses laser light to scan printed parallel zebra lines encoding product prices and batch numbers in supermarkets.\n     - Quick Response (QR) Code Scanner: Decodes two-dimensional matrix barcodes using smartphone cameras for mobile payments and web links.\n     - Optical Mark Recognition (OMR): Scans shaded pencil marks on standardized test answer sheets (used by WAEC to mark BECE objective answer sheets!).\n     - Optical Character Recognition (OCR): Software that converts scanned physical text images into editable digital word documents.\n     - Biometric Scanners: Fingerprint scanners, facial recognition cameras, and iris scanners (used by the Electoral Commission of Ghana and the National Identification Authority for the Ghana Card).",
    "examples": [
      {
        "id": "ex-ict-inp-1",
        "title": "How WAEC Marks BECE Answer Sheets Using OMR",
        "problem": "Explain how an Optical Mark Reader (OMR) is used by the West African Examinations Council (WAEC) during BECE grading.",
        "stepByStepSolution": [
          "Step 1: Candidates shade candidate index numbers and answers (A, B, C, D) using 2B graphite pencils on standardized scannable cards.",
          "Step 2: The high-speed OMR machine passes an infrared beam of light across the card. Graphite pencil marks reflect less light than blank areas.",
          "Step 3: The OMR instantly detects the coordinates of shaded marks, matches them against the computerized answer scoring key, and records scores for thousands of candidates per hour without human marking errors."
        ],
        "keyTakeaway": "OMR technology reads shaded pencil marks, enabling fast, objective examination grading."
      },
      {
        "id": "ex-ict-inp-2",
        "title": "Barcode Readers in Supermarket Checkout",
        "problem": "Why do supermarkets in Accra and Kumasi prefer barcode scanners over manual typing of prices?",
        "stepByStepSolution": [
          "1. Speed and Efficiency: A barcode laser reads universal product codes in less than a second, dramatically reducing customer queue times.",
          "2. Accuracy: Eliminates human cashier typographical errors and prevents wrong price entries.",
          "3. Automatic Inventory Updates: Each scanned item automatically deducts stock levels from the central inventory database."
        ],
        "keyTakeaway": "Automated data capture eliminates typographical errors and speeds up checkout processing."
      }
    ]
  },
  {
    "id": "jhs1-ict-t4-outputdevices",
    "subjectId": "social",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 4,
    "title": "Output Devices: Softcopy vs Hardcopy",
    "description": "Master monitors (CRT, LCD, LED, OLED), printers (impact vs non-impact: inkjet, laser), plotters, speakers, and multimedia projectors.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=2Tz8-6e9K2Y",
    "youtubeId": "2Tz8-6e9K2Y",
    "keyNotes": "• An Output Device is any hardware peripheral that conveys information and processed results from the computer to one or more human users.\n• Softcopy vs Hardcopy Output:\n  - Softcopy Output: Intangible, transient, electronic display or audio sound that can only be viewed on a screen or heard via speakers. Disappears when power is switched off (e.g. video on a monitor, spoken speech from headphones).\n  - Hardcopy Output: Tangible, permanent physical output printed on paper or solid materials that can be held and read without electricity (e.g. printed BECE certificate, paper receipt, architectural blueprint).\n• Visual Display Units (Monitors / Screens):\n  - CRT (Cathode Ray Tube): Bulky, heavy, power-hungry, emits high heat, uses electron guns.\n  - LCD (Liquid Crystal Display): Flat-screen, uses liquid crystals illuminated by fluorescent cold cathode backlighting.\n  - LED (Light Emitting Diode): Thinner, brighter colors, uses tiny light-emitting diodes, highly energy-efficient.\n• Printers (Impact vs Non-Impact):\n  - Impact Printers: Form characters by physically striking an inked ribbon against paper with pins or hammers (e.g. Dot Matrix printers used for utility bills and carbon-copy receipts; noisy, slow, but produce duplicates).\n  - Non-Impact Printers: Form characters without physical striking, using heat, laser beams, or liquid ink droplets:\n    * Inkjet Printers: Sprays microscopic droplets of liquid ink onto paper; affordable for home color photo printing.\n    * Laser Printers: Uses a laser beam, static electricity, and dry powdered ink (toner) fused onto paper with hot rollers; extremely fast, high resolution, quiet, ideal for school and office printing.\n• Other Output Devices: Multimedia Projectors (enlarging computer screens on large whiteboards), Plotters (vector graphics printers for large architectural blueprints and road maps), and Audio Speakers/Headphones.",
    "examples": [
      {
        "id": "ex-ict-out-1",
        "title": "Choosing Between Inkjet and Laser Printers for a School Lab",
        "problem": "A school administrator wants to print 5,000 copies of terminal examination papers. Recommend between an Inkjet and a Laser printer with two justifications.",
        "stepByStepSolution": [
          "Recommendation: The administrator should choose a LASER PRINTER.",
          "Justification 1 (Speed): Laser printers print between 30 to 60 pages per minute, whereas inkjet printers print slowly (10 to 15 ppm).",
          "Justification 2 (Cost per Page & Durability): Laser toner cartridges print thousands of crisp black-and-white pages at a far lower cost per page than liquid ink, and laser toner does not smudge if exam papers get damp."
        ],
        "keyTakeaway": "Laser printers excel in high-speed, high-volume, smudge-free document printing."
      },
      {
        "id": "ex-ict-out-2",
        "title": "Softcopy vs Hardcopy Comparison",
        "problem": "Classify the following outputs as Softcopy or Hardcopy: (a) A WhatsApp voice note, (b) A printed birth certificate, (c) A PDF displayed on a tablet, (d) An architectural plan on a sheet of paper.",
        "stepByStepSolution": [
          "(a) WhatsApp voice note: Softcopy (transient audio output).",
          "(b) Printed birth certificate: Hardcopy (permanent tangible paper output).",
          "(c) PDF displayed on a tablet: Softcopy (electronic visual display).",
          "(d) Architectural plan on paper: Hardcopy (printed physical document)."
        ],
        "keyTakeaway": "Softcopy is digital/electronic; hardcopy is physically printed on paper."
      }
    ]
  },
  {
    "id": "jhs1-ict-t5-safetyhygiene",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 1,
    "orderIndex": 5,
    "title": "Health, Safety & Ergonomics in the Computer Laboratory",
    "description": "Learn computer lab safety regulations, ergonomic seating, avoiding repetitive strain injuries (RSI), and proper booting and shutdown procedures.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=k5qP8uYQ2kY",
    "youtubeId": "k5qP8uYQ2kY",
    "keyNotes": "• Computer Laboratory Safety Rules:\n  - No food, drinks, or liquid beverages allowed near computers (spills cause short-circuits and destroy sensitive keyboards and motherboards).\n  - Do not overload electrical sockets or touch loose, exposed power cables.\n  - Never open the casing of a system unit or monitor while plugged into mains electricity.\n  - Avoid running or horseplay in the lab to prevent tripping over trailing network cables.\n  - Always use an Uninterruptible Power Supply (UPS) and voltage surge protector to protect hardware from abrupt electrical blackouts and spikes.\n• Ergonomics (Workplace Posture and Human Health):\n  - Ergonomics is the science of designing equipment and workplaces to fit the user's natural body posture comfortably, maximizing productivity while reducing physical injury.\n  - Ideal Ergonomic Posture:\n    * Feet flat on the floor or supported by a footrest.\n    * Knees bent at a comfortable 90-degree angle.\n    * Back straight, fully supported by an adjustable lumbar office chair.\n    * Forearms horizontal, wrists in a neutral straight position while typing.\n    * Monitor positioned at arm's length (50–70 cm), with the top of the screen at or slightly below eye level.\n• Common Health Hazards and Mitigations:\n  - Repetitive Strain Injury (RSI) / Carpal Tunnel Syndrome: Caused by continuous, repetitive typing and mouse clicking. Remedy: Take regular 5-minute wrist breaks and use ergonomic wrist rests.\n  - Computer Vision Syndrome (Eye Strain): Caused by staring at glare screens for hours. Remedy: Observe the 20-20-20 Rule (every 20 minutes, look at an object 20 feet away for at least 20 seconds); use anti-glare screen filters.\n  - Chronic Back and Neck Pain: Caused by slouching over unadjusted chairs.\n• Proper Computer Startup (Booting) and Shutdown Procedures:\n  - Cold Booting: Starting a computer from a completely powered-off state by pressing the hardware Power button.\n  - Warm Booting (Rebooting): Restarting a running computer without switching off the main electricity (via Start → Restart or pressing Ctrl + Alt + Delete).\n  - Proper Shutdown: Click Start → Power → Shut Down. Never pull the plug directly from the wall socket (causes operating system file corruption and disk head crashes!).",
    "examples": [
      {
        "id": "ex-ict-safe-1",
        "title": "Cold Booting vs Warm Booting",
        "problem": "Distinguish between cold booting and warm booting with practical examples of when each is used.",
        "stepByStepSolution": [
          "Step 1: Cold Booting occurs when the computer is completely turned off and power is switched on via the physical Power button on the system unit. (Example: Powering on the school lab computer first thing in the morning).",
          "Step 2: Warm Booting (Restarting) occurs when the computer is already on and is restarted through software commands (Start → Restart) without cutting main power. (Example: Restarting the computer after installing new antivirus software or when a program freezes)."
        ],
        "keyTakeaway": "Cold boot starts from off; warm boot restarts an already running machine."
      },
      {
        "id": "ex-ict-safe-2",
        "title": "Applying the 20-20-20 Rule to Prevent Eye Strain",
        "problem": "Explain the ergonomic '20-20-20 rule' and how it protects students during prolonged computer laboratory work.",
        "stepByStepSolution": [
          "Step 1: The Rule: Every 20 minutes of continuous screen time, shift your eyes to gaze at an object at least 20 feet (about 6 meters) away for at least 20 seconds.",
          "Step 2: Benefit: Looking into the distance relaxes the ciliary muscles of the eyes, stimulates natural blinking to re-lubricate the corneas, and prevents digital eye strain, blurry vision, and tension headaches."
        ],
        "keyTakeaway": "The 20-20-20 rule relaxes eye muscles and prevents computer vision syndrome."
      }
    ]
  },
  {
    "id": "jhs1-ict-t6-cpumemory",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 6,
    "title": "The Central Processing Unit (CPU) & Primary Memory",
    "description": "Examine the architecture of the CPU (ALU, Control Unit, Registers), system buses, RAM vs ROM, and cache memory hierarchy.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=AkFi90lZ3rk",
    "youtubeId": "AkFi90lZ3rk",
    "keyNotes": "• The Central Processing Unit (CPU) / Microprocessor:\n  - Regarded as the \"brain\" of the computer system. It interprets, coordinates, and executes all software instructions and controls data flow between all peripheral components.\n• Internal Architecture of the CPU:\n  1. Arithmetic and Logic Unit (ALU):\n     - Arithmetic Operations: Performs fundamental mathematical computations (addition, subtraction, multiplication, division).\n     - Logic Operations: Evaluates logical conditions and comparisons (AND, OR, NOT, greater than '>', less than '<', equal to '=').\n  2. Control Unit (CU):\n     - The supervisor of the CPU. It directs and coordinates all operations within the computer. It executes the Machine Cycle (Fetch, Decode, Execute, Store).\n  3. Registers:\n     - High-speed, tiny internal storage cells located directly inside the CPU that hold data, instructions, and memory addresses temporarily during execution (e.g. Program Counter, Accumulator).\n  4. System Bus:\n     - High-speed electrical pathways connecting the CPU to memory and peripherals: Data Bus (carries actual data), Address Bus (carries memory locations), Control Bus (carries synchronization signals).\n• Primary Memory (Main Memory):\n  - RAM (Random Access Memory):\n    * Volatile (temporary): Its contents are completely wiped out when power is turned off.\n    * Read and Write: The CPU can read from and write new data to RAM.\n    * Function: Holds currently running operating system files, open applications, and unsaved documents.\n  - ROM (Read-Only Memory):\n    * Non-Volatile (permanent): Retains its contents even when electrical power is switched off.\n    * Read Only: Data is permanently written by manufacturers and cannot be easily modified.\n    * Function: Contains the BIOS (Basic Input/Output System) and firmware startup instructions (bootstrap loader) needed to initialize hardware when the computer is turned on.\n• Cache Memory: Extremely high-speed static RAM (SRAM) located on or near the CPU that stores frequently used instructions to prevent CPU idle time.",
    "examples": [
      {
        "id": "ex-ict-cpu-1",
        "title": "Comparing RAM and ROM",
        "problem": "State three fundamental differences between Random Access Memory (RAM) and Read Only Memory (ROM).",
        "stepByStepSolution": [
          "1. Volatility: RAM is volatile (loses its contents when power is turned off); ROM is non-volatile (retains data permanently without electricity).",
          "2. Modifiability: RAM allows both reading and writing operations (read/write); ROM can only be read by the CPU and cannot be easily altered.",
          "3. Purpose: RAM stores currently running programs and unsaved user files; ROM stores the BIOS firmware and bootstrap startup instructions."
        ],
        "keyTakeaway": "RAM is volatile read/write workspace; ROM is non-volatile permanent startup storage."
      },
      {
        "id": "ex-ict-cpu-2",
        "title": "The Machine Cycle of the CPU",
        "problem": "Describe the four sequential steps executed by the CPU during a single Machine Cycle.",
        "stepByStepSolution": [
          "Step 1 (Fetch): The Control Unit retrieves an instruction from the system RAM.",
          "Step 2 (Decode): The Control Unit translates the instruction into binary machine signals.",
          "Step 3 (Execute): The ALU performs the mathematical calculation or logical comparison.",
          "Step 4 (Store): The result is written back to registers or RAM for subsequent use."
        ],
        "keyTakeaway": "The CPU executes the machine cycle repeatedly: Fetch → Decode → Execute → Store."
      }
    ]
  },
  {
    "id": "jhs1-ict-t7-storagedevices",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 7,
    "title": "Secondary Storage Devices & Media",
    "description": "Explore magnetic, optical, and solid-state storage technologies, cloud storage, and units of digital storage capacity (Bit, Byte, KB, MB, GB, TB).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=sKq_O7a8Wv8",
    "youtubeId": "sKq_O7a8Wv8",
    "keyNotes": "• Secondary Storage (Auxiliary Storage):\n  - Non-volatile, permanent storage media used to preserve programs, documents, audio, videos, and operating systems indefinitely when electrical power is switched off.\n• Categories of Secondary Storage Media:\n  1. Magnetic Storage Media:\n     - Uses magnetic read/write heads to magnetize tiny iron oxide particles on spinning platters (representing 1s and 0s).\n     - Examples: Hard Disk Drive (HDD - primary internal storage for desktops), Magnetic Tape (used for long-term archiving).\n  2. Optical Storage Media:\n     - Uses a laser beam to burn microscopic pits (depressions) and lands (flat surfaces) on reflective polycarbonate plastic discs:\n     - CD (Compact Disc): Holds approximately 700 MB of data.\n     - DVD (Digital Versatile Disc): Holds approximately 4.7 GB (single layer) to 8.5 GB.\n     - Blu-ray Disc (BD): Uses a precise blue-violet laser, holding 25 GB to 50 GB of high-definition video.\n  3. Solid-State Storage Media (Flash Memory):\n     - Uses electronic flash microchips with zero moving parts. Fast, shock-resistant, silent, and highly portable:\n     - Solid-State Drive (SSD): Replaces mechanical HDDs in modern laptops; boots Windows in seconds.\n     - USB Flash Drive (Pen Drive): Highly portable plug-and-play storage.\n     - SD Memory Card: Used in smartphones, digital cameras, and tablets.\n  4. Cloud Storage:\n     - Storing data on remote server farms accessible over the Internet (e.g. Google Drive, Microsoft OneDrive, Dropbox).\n• Hierarchy of Digital Storage Measurement Units:\n  - Bit (Binary Digit): Smallest unit of digital data, holding either a 0 or a 1.\n  - Nibble: A group of 4 bits.\n  - Byte: A group of 8 bits. Represents a single character (e.g. the letter 'A').\n  - Kilobyte (KB): 1,024 Bytes.\n  - Megabyte (MB): 1,024 Kilobytes.\n  - Gigabyte (GB): 1,024 Megabytes.\n  - Terabyte (TB): 1,024 Gigabytes.",
    "examples": [
      {
        "id": "ex-ict-sto-1",
        "title": "Comparing Solid-State Drives (SSD) with Hard Disk Drives (HDD)",
        "problem": "Give two reasons why modern computers prefer Solid-State Drives (SSDs) over mechanical Hard Disk Drives (HDDs).",
        "stepByStepSolution": [
          "1. Read/Write Speed: SSDs have zero moving mechanical parts and read/write data electronically, making them up to 5 to 10 times faster than HDDs. Booting operating systems and launching applications takes only a few seconds.",
          "2. Physical Durability & Shock Resistance: Because HDDs rely on fragile spinning magnetic platters and mechanical read heads, dropping an HDD often causes a fatal head crash. SSDs use durable silicon chips that resist physical vibration and drops."
        ],
        "keyTakeaway": "SSDs are dramatically faster, silent, and more shock-resistant than mechanical HDDs."
      },
      {
        "id": "ex-ict-sto-2",
        "title": "Calculating Storage Capacities in Bytes",
        "problem": "How many bits are contained in a 4-byte text word?",
        "stepByStepSolution": [
          "Step 1: 1 Byte = 8 bits.",
          "Step 2: 4 Bytes = 4 × 8 bits = 32 bits.",
          "Conclusion: A 4-byte text word contains 32 binary bits."
        ],
        "keyTakeaway": "1 Byte = 8 bits; multiply bytes by 8 to determine total bits."
      }
    ]
  },
  {
    "id": "jhs1-ict-t8-operatingsystems",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 8,
    "title": "Operating Systems & The Graphical User Interface",
    "description": "Explore the functions of operating systems (Windows, macOS, Linux, Android) and master GUI elements: Desktop, Icons, Taskbar, Files & Folders.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=4Ym5B5I2PqA",
    "youtubeId": "4Ym5B5I2PqA",
    "keyNotes": "• What is an Operating System (OS)?\n  - An Operating System is the master system software that manages computer hardware components, allocates memory, provides a platform for application software, and offers a user interface for human communication.\n  - Without an operating system, computer hardware is entirely unusable!\n• Examples of Operating Systems:\n  - Desktop / Laptop OS: Microsoft Windows (Windows 10, 11), Apple macOS, Linux (Ubuntu, Fedora), ChromeOS.\n  - Mobile OS: Google Android, Apple iOS.\n• Core Functions of an Operating System:\n  1. Processor Management: Allocates CPU time to competing programs (multitasking).\n  2. Memory Management: Coordinates RAM allocation to active applications and prevents programs from overwriting each other.\n  3. File & Disk Management: Organizes files in hierarchical directories (folders), handles copying, renaming, and deleting files.\n  4. Device (I/O) Management: Communicates with peripherals via device drivers (printers, keyboards, webcams).\n  5. Security & Access Control: Enforces passwords, user permissions, and safeguards against unauthorized access.\n• User Interfaces (CLI vs GUI):\n  - Command Line Interface (CLI): Requires users to type cryptic text commands on a black terminal screen (e.g. MS-DOS).\n  - Graphical User Interface (GUI): Uses visual elements based on the WIMP metaphor (Windows, Icons, Menus, Pointers):\n    * Desktop: The primary on-screen workspace displayed after booting.\n    * Icons: Small pictorial graphic symbols representing programs, files, or folders (e.g. Recycle Bin, This PC).\n    * Taskbar: The horizontal strip at the bottom of the screen containing the Start button, active program icons, and the system tray (clock, network status).\n    * Files & Folders: A file is a collection of related data stored under a unique name with an extension (e.g. 'notes.docx'); a folder is a digital container used to organize and group files.",
    "examples": [
      {
        "id": "ex-ict-os-1",
        "title": "CLI vs GUI Interfaces",
        "problem": "State two distinct advantages of a Graphical User Interface (GUI) over a Command Line Interface (CLI) for beginners.",
        "stepByStepSolution": [
          "1. User-Friendliness: A GUI allows users to simply point and click on visual icons and menus using a mouse, whereas a CLI requires memorizing and typing complex text syntax without typographical errors.",
          "2. Multitasking Visualization: A GUI displays multiple running applications in overlapping movable windows on the desktop, making it easy to switch between programs visually."
        ],
        "keyTakeaway": "GUIs use visual icons and mouse clicks; CLIs require typing text commands from memory."
      },
      {
        "id": "ex-ict-os-2",
        "title": "Managing Files and Folders",
        "problem": "Explain the purpose of a file extension and identify the file types for: (a) 'exam.docx', (b) 'song.mp3', (c) 'photo.jpg'.",
        "stepByStepSolution": [
          "Step 1: A file extension is a 3 or 4 letter suffix separated by a period at the end of a filename that informs the operating system which software program created and can open the file.",
          "Step 2: (a) 'exam.docx' = Microsoft Word text document; (b) 'song.mp3' = Digital audio file; (c) 'photo.jpg' = Digital photograph / image file."
        ],
        "keyTakeaway": "File extensions (e.g. .docx, .mp3, .jpg) identify the format and associated software for a file."
      }
    ]
  },
  {
    "id": "jhs1-ict-t9-keyboarding",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 9,
    "title": "Keyboarding & Typing Skills",
    "description": "Master the QWERTY keyboard layout, home row positioning (ASDF JKL;), specialized command keys, and touch typing techniques.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0hV1h7p-y0Y",
    "youtubeId": "0hV1h7p-y0Y",
    "keyNotes": "• The Standard Keyboard Layout (QWERTY):\n  - Named after the first six letters on the top alphabetic row. Designed originally for mechanical typewriters to prevent jammed levers.\n• Key Sections on a Computer Keyboard:\n  1. Alphanumeric Keys: Alphabet letters (A–Z), number digits (0–9), and punctuation marks.\n  2. Function Keys (F1–F12): Located along the very top row; perform dedicated shortcuts (e.g. F1 displays Help, F5 refreshes a webpage, F7 runs spellcheck in Word).\n  3. Cursor / Navigation Keys: Arrow keys (Up, Down, Left, Right), Home, End, Page Up, Page Down.\n  4. Numeric Keypad: Clustered on the far right like a calculator, used for rapid numerical data entry (activated by the Num Lock key).\n  5. Special & Modifier Keys:\n     - Shift: Toggles uppercase letters and accesses upper symbols (e.g. Shift + 1 produces '!').\n     - Caps Lock: Locks all alphabetic letters into CAPITAL LETTERS when toggled on.\n     - Ctrl (Control) & Alt (Alternate): Modifier keys used in combinations to execute shortcuts (Ctrl + C = Copy, Ctrl + V = Paste, Ctrl + S = Save).\n     - Enter / Return: Executes commands, confirms selections, or moves the cursor to the beginning of a new line in word processing.\n     - Backspace vs Delete: Backspace deletes characters to the LEFT of the cursor; Delete removes characters to the RIGHT of the cursor.\n     - Spacebar: Inserts a single blank space between words.\n• Touch Typing & The Home Row Keys:\n  - Touch typing is typing without looking down at the keyboard keys.\n  - The Home Row Keys: The resting position for eight fingers:\n    * Left Hand: A (little finger), S (ring), D (middle), F (index).\n    * Right Hand: J (index), K (middle), L (ring), ; (little).\n    * Both Thumbs: Rest lightly on the Spacebar.\n    * Raised Ridges: The letters 'F' and 'J' have tactile raised bumps to help typists orient their index fingers without glancing down!",
    "examples": [
      {
        "id": "ex-ict-key-1",
        "title": "Backspace vs Delete Keys",
        "problem": "Given the word 'SCHO|OL' where '|' represents the blinking text cursor, state what happens when you press: (a) Backspace, (b) Delete.",
        "stepByStepSolution": [
          "(a) Pressing Backspace deletes the character immediately to the LEFT of the cursor, removing the letter 'O' to leave 'SCH|OL'.",
          "(b) Pressing Delete deletes the character immediately to the RIGHT of the cursor, removing the second letter 'O' to leave 'SCHO|L'."
        ],
        "keyTakeaway": "Backspace deletes to the left; Delete deletes to the right."
      },
      {
        "id": "ex-ict-key-2",
        "title": "The Home Row Tactile Bumps on 'F' and 'J'",
        "problem": "Why do standard computer keyboards feature small raised tactile bumps or ridges on the 'F' and 'J' keys?",
        "stepByStepSolution": [
          "Step 1: In touch typing, the typist must position both index fingers on the home row without looking down at the keys.",
          "Step 2: The physical ridges on 'F' (left index finger) and 'J' (right index finger) provide tactile feedback, allowing the typist to locate the home row position purely by touch."
        ],
        "keyTakeaway": "The tactile bumps on 'F' and 'J' guide home-row finger placement for touch typing."
      }
    ]
  },
  {
    "id": "jhs1-ict-t10-wordprocessing",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 2,
    "orderIndex": 10,
    "title": "Word Processing Basics (Microsoft Word)",
    "description": "Navigate the Microsoft Word interface, create, save, and edit documents, and apply font formatting, text alignment, and clipboard operations.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Fj0X7-wP9sI",
    "youtubeId": "Fj0X7-wP9sI",
    "keyNotes": "• What is a Word Processor?\n  - An application software package specifically designed for creating, editing, formatting, checking spelling, and printing text-based documents (e.g. Microsoft Word, Google Docs, LibreOffice Writer).\n• The Microsoft Word Interface Elements:\n  - Title Bar: Displays document name (e.g. 'Document1 - Word') and window control buttons (Minimize, Maximize/Restore, Close).\n  - Quick Access Toolbar: Customizable icons for frequent commands (Save, Undo, Redo).\n  - The Ribbon: Tabbed banner grouping tools into logical tabs (Home, Insert, Page Layout, References).\n  - Insertion Point (Cursor): The blinking vertical line '|' indicating where typed text will appear.\n  - Status Bar: Displays page number, word count, proofing language, and zoom slider at the bottom.\n• Essential Text Editing & Clipboard Operations:\n  - Copy (Ctrl + C): Duplicates selected text into the computer's temporary memory (the Clipboard) while leaving the original intact.\n  - Cut (Ctrl + X): Removes selected text from its current position and places it in the Clipboard.\n  - Paste (Ctrl + V): Inserts text from the Clipboard into the current cursor location.\n  - Undo (Ctrl + Z): Reverses the most recent action.\n  - Redo (Ctrl + Y): Repeats the action that was undone.\n• Basic Character Formatting:\n  - Font Style (typeface: Times New Roman, Calibri, Arial) and Font Size (measured in points, e.g. 12 pt).\n  - Font Attributes: Bold (Ctrl + B - heavy lettering), Italics (Ctrl + I - slanted lettering), Underline (Ctrl + U - line beneath text).\n• Paragraph Alignment:\n  - Align Left (Ctrl + L): Flushes text against left margin (standard for letters).\n  - Center (Ctrl + E): Centers text between margins (used for document headings and titles).\n  - Align Right (Ctrl + R): Flushes text against right margin (used for dates and sender addresses).\n  - Justify (Ctrl + J): Aligns text evenly along BOTH left and right margins, adding subtle spaces between words (used in textbooks and newspapers).",
    "examples": [
      {
        "id": "ex-ict-wp-1",
        "title": "Cut vs Copy in Document Editing",
        "problem": "Explain the difference between 'Cutting' text and 'Copying' text in Microsoft Word.",
        "stepByStepSolution": [
          "Step 1: 'Copying' (Ctrl + C) creates an exact duplicate of the highlighted text in the Clipboard while keeping the original text in its starting position.",
          "Step 2: 'Cutting' (Ctrl + X) removes the highlighted text from its original position and stores it in the Clipboard so it can be moved to a new destination via 'Paste'."
        ],
        "keyTakeaway": "Copy duplicates text; Cut moves text from one location to another."
      },
      {
        "id": "ex-ict-wp-2",
        "title": "Choosing Paragraph Alignments for Official Documents",
        "problem": "Which text alignments should be applied to: (a) An essay title, (b) A formal letter date, (c) A textbook paragraph?",
        "stepByStepSolution": [
          "(a) Essay title: CENTER Alignment (Ctrl + E) to position the heading symmetrically in the middle.",
          "(b) Formal letter date: RIGHT Alignment (Ctrl + R) to flush the date against the right-hand margin.",
          "(c) Textbook paragraph: JUSTIFIED Alignment (Ctrl + J) to produce clean, professional straight edges on both left and right margins."
        ],
        "keyTakeaway": "Center for titles, Right for dates/addresses, Justified for formal book paragraphs."
      }
    ]
  },
  {
    "id": "jhs1-ict-t11-documentformatting",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 11,
    "title": "Word Processing Formatting: Lists, Tables & Graphics",
    "description": "Format documents with bulleted/numbered lists, insert and format tables, add headers, footers, page borders, and insert images.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=3uG7zC4p3rQ",
    "youtubeId": "3uG7zC4p3rQ",
    "keyNotes": "• Bulleted and Numbered Lists:\n  - Bulleted Lists: Used for unordered items where sequence does not matter (e.g. shopping list, ingredients). Displayed with geometric dots, checkmarks, or squares.\n  - Numbered Lists: Used for ordered items where chronological or priority sequence is vital (e.g. step-by-step science experiments, cooking recipes, rankings).\n• Inserting and Formatting Tables:\n  - A Table is a structured grid of horizontal ROWS and vertical COLUMNS.\n  - Cell: The individual intersection of a row and a column where text or numbers are typed.\n  - Merging Cells: Combining two or more adjacent cells into a single larger cell (frequently used for table headings).\n  - Splitting Cells: Dividing a single cell into multiple sub-cells.\n• Page Layout & Margins:\n  - Margins: The blank white border space separating the edge of the physical paper from document text (Top, Bottom, Left, Right). Standard margin is 1 inch (2.54 cm).\n  - Page Orientation:\n    * Portrait: Vertical page orientation where height is greater than width (standard for letters and essays).\n    * Landscape: Horizontal page orientation where width is greater than height (used for wide financial tables, certificates, and brochures).\n• Headers and Footers:\n  - Header: Repetitive text or graphics that automatically appear in the top margin of every page (e.g. document title, chapter name).\n  - Footer: Repetitive text that appears in the bottom margin of every page (e.g. page numbers, author name).\n• Inserting Graphics and Clipart:\n  - Illustrations tab allows inserting digital pictures, shapes (rectangles, arrows), and SmartArt diagrams.\n  - Text Wrapping: Controls how body text flows around an inserted picture (e.g. In Line with Text, Square, Tight, Behind Text).",
    "examples": [
      {
        "id": "ex-ict-fmt-1",
        "title": "Portrait vs Landscape Page Orientation",
        "problem": "A student is designing: (a) A formal application letter, (b) An inter-schools football tournament fixture table with 12 columns. Recommend the appropriate page orientation for each.",
        "stepByStepSolution": [
          "(a) Formal application letter: PORTRAIT orientation (vertical layout is standard for letters and essays).",
          "(b) 12-column football fixture table: LANDSCAPE orientation (horizontal wider layout accommodates numerous columns across the page without squashing text)."
        ],
        "keyTakeaway": "Portrait is taller than wide (standard letters); Landscape is wider than tall (wide tables)."
      },
      {
        "id": "ex-ict-fmt-2",
        "title": "Table Terminology: Rows, Columns, and Cells",
        "problem": "If a teacher creates a table with 5 columns and 8 rows, calculate: (a) The total number of cells in the table, (b) Explain what happens when two cells are merged.",
        "stepByStepSolution": [
          "(a) Total cells = Number of Columns × Number of Rows = 5 × 8 = 40 cells.",
          "(b) Merging cells combines the selected adjacent cells into one continuous single cell, commonly used across the top row to hold a centered table title."
        ],
        "keyTakeaway": "Cells = Rows × Columns. Merging combines adjacent cells into one."
      }
    ]
  },
  {
    "id": "jhs1-ict-t12-internetbasics",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 12,
    "title": "Introduction to the Internet, World Wide Web & Web Browsers",
    "description": "Understand the Internet vs World Wide Web, web browsers, search engines, URLs, hyperlinks, and country/domain extensions (.gh, .edu, .gov).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0kFj7f8v-7U",
    "youtubeId": "0kFj7f8v-7U",
    "keyNotes": "• What is the Internet?\n  - The Internet (International Network) is the vast, global decentralized network of millions of interconnected computer networks communicating through standardized protocol suites (TCP/IP).\n• Internet vs World Wide Web (WWW):\n  - The Internet is the physical networking infrastructure (fiber optic cables, satellites, routers).\n  - The World Wide Web (WWW) is an information service operating on the Internet consisting of interconnected multimedia web pages linked by hyperlinks (invented by Sir Tim Berners-Lee in 1989).\n• Web Browsers vs Search Engines:\n  - Web Browser: An application software used to locate, retrieve, and render web pages from web servers (e.g. Google Chrome, Microsoft Edge, Mozilla Firefox, Apple Safari, Opera).\n  - Search Engine: An internet-based database program that searches web pages for specified keywords and returns a list of matching websites (e.g. Google Search, Bing, Yahoo).\n• Structure of a Uniform Resource Locator (URL):\n  - A URL is the global unique web address of a specific document on the Internet.\n  - Example: https://www.ges.gov.gh/curriculum/jhs1.html\n    * https:// → Protocol (Hypertext Transfer Protocol Secure).\n    * www.ges.gov.gh → Domain Name / Web Server address.\n    * /curriculum/ → Directory folder path.\n    * jhs1.html → Specific web page filename.\n• Common Top-Level Domains (TLDs) and Country Codes:\n  - .com: Commercial businesses.\n  - .edu or .ac: Educational institutions (schools, universities).\n  - .gov: Government ministries, departments, and state agencies.\n  - .org: Non-profit organizations and NGOs.\n  - Country-code TLDs: .gh (Ghana), .ng (Nigeria), .uk (United Kingdom), .za (South Africa).\n• Hyperlink: An underlined word, phrase, or graphic on a web page that, when clicked, immediately transports the user to another linked web document.",
    "examples": [
      {
        "id": "ex-ict-net-1",
        "title": "Web Browser vs Search Engine",
        "problem": "Explain why Google Chrome is classified as a Web Browser while Google.com is classified as a Search Engine.",
        "stepByStepSolution": [
          "Step 1: Google Chrome is an application program installed on your device whose duty is to open, interpret HTML code, and visually display web pages.",
          "Step 2: Google.com is an online website and database engine accessed inside a browser that indexes billions of websites and returns search results based on user queries."
        ],
        "keyTakeaway": "You use a Web Browser (Chrome) to open and visit a Search Engine (Google.com)."
      },
      {
        "id": "ex-ict-net-2",
        "title": "Deconstructing a Web Address (URL)",
        "problem": "Deconstruct the URL 'https://www.ucc.edu.gh' into its protocol, institution type, and country code.",
        "stepByStepSolution": [
          "1. Protocol: 'https' (Hypertext Transfer Protocol Secure, indicating encrypted communication).",
          "2. Subdomain & Domain Name: 'www.ucc' (World Wide Web, University of Cape Coast).",
          "3. Domain Extension: '.edu' (Educational institution).",
          "4. Country Code: '.gh' (Ghana)."
        ],
        "keyTakeaway": ".edu denotes an educational body; .gh denotes the country domain for Ghana."
      }
    ]
  },
  {
    "id": "jhs1-ict-t13-email",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 13,
    "title": "Electronic Mail (Email) & Digital Communication",
    "description": "Master the structure of email addresses, composing, CC vs BCC, file attachments, email etiquette (Netiquette), and benefits over postal mail.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=2Tz8-6e9K2Y",
    "youtubeId": "2Tz8-6e9K2Y",
    "keyNotes": "• What is Electronic Mail (Email)?\n  - A digital transmission system that allows individuals to compose, send, store, and receive text messages, images, and documents over the Internet asynchronously.\n• Structure of an Email Address:\n  - Example: kwame.mensah@ges.gov.gh\n    * kwame.mensah → Username (unique identity chosen by the user).\n    * @ → The \"At\" symbol separating username from domain.\n    * ges.gov.gh → Domain name of the email service provider / organization.\n  - Important Rule: An email address must contain NO spaces!\n• Key Components of an Email Message:\n  - To: Primary recipient(s) for whom the message is intended.\n  - CC (Carbon Copy): Secondary recipients who receive a copy for informational purposes. All recipients can see who else was CC'd.\n  - BCC (Blind Carbon Copy): Secret recipients who receive a copy without their email address being visible to anyone in the 'To' or 'CC' fields.\n  - Subject: A concise summary describing the purpose of the email.\n  - Body: The actual text message.\n  - Attachment (Paperclip icon): Uploading external files (PDFs, pictures, Word documents, spreadsheets) to accompany the email.\n• Advantages of Email over Traditional Postal Mail (Snail Mail):\n  1. Incredible Speed: Arrives across continents within seconds, compared to days or weeks for physical post.\n  2. Cost-Effective: Virtually free beyond basic internet connectivity.\n  3. Multimedia Attachments: Can transmit documents, pictures, audio, and videos simultaneously.\n  4. Global Convenience: Accessible from any smartphone, laptop, or cybercafé worldwide.\n• Netiquette (Internet & Email Etiquette):\n  - Never write an entire email in CAPITAL LETTERS (typing in all caps is interpreted as rude shouting!).\n  - Always include a polite salutation, concise subject line, and formal sign-off.\n  - Never forward unverified rumors or chain spam messages.",
    "examples": [
      {
        "id": "ex-ict-em-1",
        "title": "CC vs BCC in Official Email Sending",
        "problem": "A headmaster wants to send an exam reminder to 50 parents simultaneously without revealing parents' private email addresses to one another. Should he use CC or BCC?",
        "stepByStepSolution": [
          "Recommendation: The headmaster must use BCC (Blind Carbon Copy).",
          "Explanation: If CC (Carbon Copy) is used, all 50 parents will see everyone else's email address on their screens, violating personal data privacy. In BCC, each parent receives the email privately without seeing any other recipient's contact details."
        ],
        "keyTakeaway": "BCC hides recipient addresses; CC reveals recipient addresses to all."
      },
      {
        "id": "ex-ict-em-2",
        "title": "Netiquette: The Capital Letters Rule",
        "problem": "Why is sending an email written entirely in CAPITAL LETTERS considered poor Netiquette?",
        "stepByStepSolution": [
          "Step 1: In digital communications, words typed entirely in uppercase (e.g. 'SUBMIT YOUR ASSIGNMENT TODAY!') represent shouting or screaming in anger.",
          "Step 2: Proper Netiquette requires standard sentence capitalization to maintain a respectful, professional, and courteous tone."
        ],
        "keyTakeaway": "Typing in all capital letters is interpreted as shouting and violates Netiquette."
      }
    ]
  },
  {
    "id": "jhs1-ict-t14-cybersecurity",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 14,
    "title": "Cybersecurity, Malware & Data Protection",
    "description": "Understand malware types (viruses, worms, trojans, spyware, ransomware), phishing scams, strong password construction, and data backup.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=k5qP8uYQ2kY",
    "youtubeId": "k5qP8uYQ2kY",
    "keyNotes": "• What is Cybersecurity?\n  - The practice of protecting computer networks, servers, mobile devices, and sensitive personal data from malicious digital attacks, unauthorized access, theft, or damage.\n• Types of Malicious Software (Malware):\n  1. Computer Virus: A malicious program that attaches itself to legitimate files or programs and replicates when the infected program is run, corrupting files and slowing performance.\n  2. Computer Worm: A standalone program that replicates independently across networks without needing a host file, consuming bandwidth and crashing systems.\n  3. Trojan Horse: Malware disguised as an innocent or attractive software program (e.g. a free game) that secretly creates backdoors for hackers once installed.\n  4. Spyware: Software that secretly monitors a user's browsing activity and logs keystrokes (keylogger) to steal credit card numbers and passwords.\n  5. Ransomware: Encrypts a victim's files, locking them until a monetary ransom is paid to the cybercriminals.\n• Phishing:\n  - Deceptive fraudulent emails, SMS messages, or fake websites pretending to be legitimate institutions (e.g. a bank or MTN MoMo) to trick victims into revealing PINs, passwords, and banking credentials.\n• Preventative Cybersecurity Measures:\n  1. Antivirus Software: Installing and updating reputable security programs (Windows Defender, Kaspersky, Norton) to scan and quarantine malware.\n  2. Strong Passwords: At least 8–12 characters combining uppercase letters, lowercase letters, numbers, and special symbols (e.g. 'Gh@na#2026!'). Avoid names or birth years.\n  3. Firewalls: A hardware or software barrier that monitors incoming and outgoing network traffic, blocking unauthorized connections.\n  4. Regular Data Backup: Copying critical files onto external hard drives or secure cloud storage (Google Drive).\n  5. Safe Surfing Habits: Never clicking on suspicious email links or downloading software from unverified websites.",
    "examples": [
      {
        "id": "ex-ict-sec-1",
        "title": "Recognizing a Phishing Scam",
        "problem": "A student receives an SMS: \"Urgent! Your MoMo account has been blocked. Click http://bit.ly/momo-fix to enter your 4-digit PIN immediately.\" Identify two indicators that this is a phishing scam.",
        "stepByStepSolution": [
          "Indicator 1: Creating false urgency and panic ('Urgent! Account blocked') to prompt hasty action without thinking.",
          "Indicator 2: Requesting private security credentials (PIN). Legitimate financial institutions and telecommunication providers NEVER ask customers to provide secret PINs via web links."
        ],
        "keyTakeaway": "Never share secret PINs or passwords through SMS or unsolicited web links."
      },
      {
        "id": "ex-ict-sec-2",
        "title": "Designing a Strong Password",
        "problem": "Evaluate the password 'kofi123' and explain how to transform it into a highly secure password.",
        "stepByStepSolution": [
          "Step 1 (Evaluation): 'kofi123' is extremely weak because it uses a common first name, predictable sequential numbers, and lacks uppercase letters or symbols.",
          "Step 2 (Transformation): Apply complexity rules: combine uppercase, lowercase, numbers, and symbols: 'K0f!#Accr@2026'. This resists brute-force dictionary attacks."
        ],
        "keyTakeaway": "Strong passwords combine uppercase, lowercase, numbers, and symbols without predictable names."
      }
    ]
  },
  {
    "id": "jhs1-ict-t15-algorithms",
    "subjectId": "ict",
    "level": "JHS 1",
    "term": 3,
    "orderIndex": 15,
    "title": "Computational Thinking, Algorithms & Flowcharts",
    "description": "Learn algorithm step-by-step problem solving, pseudocode, and standard flowchart symbols (terminal oval, input/output parallelogram, process rectangle, decision diamond).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=AkFi90lZ3rk",
    "youtubeId": "AkFi90lZ3rk",
    "keyNotes": "• What is an Algorithm?\n  - A finite, unambiguous, step-by-step set of well-defined logical instructions designed to solve a specific problem or complete a task.\n• Characteristics of a Good Algorithm:\n  - Finite: Must terminate after a specific number of steps.\n  - Unambiguous: Each instruction must be crystal clear with only one possible interpretation.\n  - Feasible: Each step must be realistically executable.\n  - Has defined inputs and produces at least one clear output.\n• Methods of Representing Algorithms:\n  1. Pseudocode: An informal, high-level description of an algorithm written in plain English mimicking program code without strict programming syntax (using keywords like START, INPUT, IF, THEN, ELSE, OUTPUT, STOP).\n  2. Flowchart: A visual, graphic diagram representing an algorithm using standardized geometric symbols connected by directional flowlines.\n• Standard Flowchart Symbols (ANSI Standard):\n  - Oval (Terminal): Indicates the START or STOP / END of an algorithm.\n  - Parallelogram: Represents an INPUT operation (e.g. \"Input length and breadth\") or an OUTPUT operation (e.g. \"Display Area\").\n  - Rectangle: Represents a PROCESS or calculation operation (e.g. \"Area = length × breadth\").\n  - Diamond (Rhombus): Represents a DECISION or conditional test (e.g. \"Is Score >= 50?\"), with two exit paths labeled 'Yes' and 'No' (or 'True' and 'False').\n  - Flowlines (Arrows): Shows the sequential direction of process execution.",
    "examples": [
      {
        "id": "ex-ict-alg-1",
        "title": "Writing an Algorithm to Calculate the Area of a Rectangle",
        "problem": "Write a step-by-step algorithm in pseudocode to calculate and display the area of a rectangle given its length and breadth.",
        "stepByStepSolution": [
          "Step 1: START",
          "Step 2: INPUT length (L) and breadth (B)",
          "Step 3: CALCULATE Area = L * B",
          "Step 4: OUTPUT Area",
          "Step 5: STOP"
        ],
        "keyTakeaway": "Algorithms follow a logical sequence: Start → Input → Calculate → Output → Stop."
      },
      {
        "id": "ex-ict-alg-2",
        "title": "Selecting Flowchart Symbols for Problem Solving",
        "problem": "Which flowchart symbols should be used to represent: (a) Starting a program, (b) Checking if Age is greater than 18, (c) Calculating Total = Price + Tax?",
        "stepByStepSolution": [
          "(a) Starting a program: OVAL (Terminal symbol).",
          "(b) Checking if Age is greater than 18: DIAMOND (Decision symbol with Yes/No exit paths).",
          "(c) Calculating Total = Price + Tax: RECTANGLE (Process/Calculation symbol)."
        ],
        "keyTakeaway": "Oval = Start/End; Diamond = Decision; Rectangle = Process/Calculation."
      }
    ]
  }
];
