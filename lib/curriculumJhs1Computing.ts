// Ghanaian JHS 1 (Basic 7) Computing Curriculum Topics
// Fully aligned with the official NaCCA / GES Common Core Programme (CCP) Curriculum
// Appropriate for Basic 7 learners (Ages 11-13)

import { CurriculumTopic } from './types';

export const JHS1_COMPUTING_TOPICS: CurriculumTopic[] = [
  // ==========================================
  // TERM 1: INTRODUCTION TO COMPUTING & HARDWARE
  // ==========================================
  {
    id: 'jhs1-ict-t1-intro',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 1,
    title: 'Introduction to Computing & The IPOS Cycle',
    description: 'Understand what a computer is, distinguish raw data from meaningful information, and learn the Input-Process-Output-Storage (IPOS) cycle.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=mCq8-xTH7jA',
    youtubeId: 'mCq8-xTH7jA',
    keyNotes: `• What is a Computer?
  - An electronic device that accepts raw data, processes it according to stored instructions, produces meaningful output, and stores the results for future use.
  - A computer system is made of two main parts: Hardware (physical parts you can touch) and Software (programs and instructions).

• Data vs. Information:
  - Data: Raw, unorganized facts, numbers, or symbols that have not been processed (e.g., 'Kofi, 85, 72, 90').
  - Information: Data that has been sorted, organized, and given meaning so that people can understand it (e.g., 'Kofi's school report card showing an average score of 82.3%').

• The Information Processing Cycle (IPOS):
  1. Input: Entering data into the computer using input devices like a keyboard or mouse.
  2. Processing: The CPU works on the data (calculating, comparing, or sorting).
  3. Output: Presenting the finished results on a screen or paper (monitor, printer).
  4. Storage: Saving the work so it is not lost when the computer is turned off (flash drive, hard disk).

• Why Computers are Helpful:
  - Speed: They perform calculations in seconds.
  - Accuracy: They do not make math mistakes unless the person typing enters the wrong data (Garbage In, Garbage Out - GIGO).
  - Storage: They can store thousands of school books and notes in a small drive.`,
    examples: [
      {
        id: 'ex-ict-intro-1',
        title: 'Understanding the IPOS Cycle with a Mobile Money Transaction',
        problem: 'Explain how sending Mobile Money (MoMo) on a phone follows the four steps of the IPOS cycle.',
        stepByStepSolution: [
          'Step 1 (Input): You dial *170#, type the recipient number, the amount, and enter your secret PIN.',
          'Step 2 (Processing): The phone network computer checks your balance and confirms your secret PIN.',
          'Step 3 (Output): You and the recipient receive an SMS message confirming the money has been sent.',
          'Step 4 (Storage): The transaction is saved in your phone history and the bank database.'
        ],
        keyTakeaway: 'Input (typing details) → Processing (checking PIN) → Output (SMS message) → Storage (saved history).'
      },
      {
        id: 'ex-ict-intro-2',
        title: 'Differentiating Data from Information',
        problem: 'Classify the following: (a) The numbers 12, 14, 11; (b) "The average age of JHS 1 students is 12 years".',
        stepByStepSolution: [
          'Step 1: The isolated numbers 12, 14, 11 are raw numbers without meaning. Therefore, they are DATA.',
          'Step 2: "The average age of JHS 1 students is 12 years" is organized and gives a clear fact. Therefore, it is INFORMATION.'
        ],
        keyTakeaway: 'Data is raw and unorganized; information is processed and meaningful.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t2-generations',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 2,
    title: 'Generations of Computers (Evolution of Technology)',
    description: 'Learn how computers developed from early room-sized machines to modern smartphones and laptops.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=AkFi90lZ3rk',
    youtubeId: 'AkFi90lZ3rk',
    keyNotes: `• Early Counting Tools:
  - Abacus: One of the earliest counting frames with beads, used for simple addition and subtraction.
  - Charles Babbage: Known as the "Father of the Computer" because he designed the first mechanical computer concepts (Difference Engine and Analytical Engine).

• The 5 Computer Generations:
  1. First Generation (1940s–1950s):
     - Main Technology: Vacuum Tubes (glass bulbs like old light bulbs).
     - Features: Very huge (filled an entire classroom), used a lot of electricity, produced great heat, and broke down easily (e.g., ENIAC).
  2. Second Generation (1950s–1960s):
     - Main Technology: Transistors.
     - Features: Smaller, faster, cheaper, and more reliable than vacuum tubes.
  3. Third Generation (1960s–1970s):
     - Main Technology: Integrated Circuits (ICs / Silicon Chips).
     - Features: Hundreds of transistors packed onto tiny silicon chips. Keyboards and screens were introduced.
  4. Fourth Generation (1970s–Present):
     - Main Technology: Microprocessors (VLSI).
     - Features: An entire CPU built on a single tiny chip. Made personal computers (PCs), laptops, and smartphones possible.
  5. Fifth Generation (Present & Future):
     - Main Technology: Artificial Intelligence (AI) and Smart Devices.
     - Features: Voice recognition (Siri, Google Assistant), robots, and smart self-driving cars.`,
    examples: [
      {
        id: 'ex-ict-gen-1',
        title: 'Comparing First and Second Generation Computers',
        problem: 'State two reasons why second generation computers were better than first generation computers.',
        stepByStepSolution: [
          'Reason 1: Second generation computers used transistors instead of fragile glass vacuum tubes.',
          'Reason 2: They were much smaller in size, consumed less electricity, and did not overheat quickly.'
        ],
        keyTakeaway: 'Transistors made computers smaller, faster, and cooler than vacuum tubes.'
      },
      {
        id: 'ex-ict-gen-2',
        title: 'Identifying Modern Computer Technology',
        problem: 'Which generation of computers do our modern laptops and smartphones belong to, and what chip powers them?',
        stepByStepSolution: [
          'Step 1: Modern laptops and smartphones belong to the Fourth Generation (with Fifth Generation AI capabilities).',
          'Step 2: They are powered by microprocessors (a single tiny silicon chip acting as the CPU).'
        ],
        keyTakeaway: 'The microprocessor is the foundation of 4th generation computers, including laptops and phones.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t3-inputdevices',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 3,
    title: 'Input Devices: Entering Data into Computers',
    description: 'Explore the keyboard, mouse, touchscreens, optical scanners, and microphones used to give instructions to computers.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=sKq_O7a8Wv8',
    youtubeId: 'sKq_O7a8Wv8',
    keyNotes: `• What is an Input Device?
  - Any hardware equipment used to enter raw data, text, sound, images, or commands into a computer system.

• Common Input Devices in Everyday Use:
  1. Keyboard: The main text-entry device containing letters, numbers, and command keys.
  2. Mouse: A pointing device used to click, double-click, drag, and point to items on the screen.
  3. Touchpad: The smooth touch-sensitive pad on laptops that does the work of a mouse.
  4. Touchscreen: Allows users to touch the screen directly with their fingers (e.g., smartphones, tablets, bank ATMs).
  5. Microphone: Captures voice and sound and sends it into the computer.
  6. Digital Camera / Webcam: Captures pictures and video for video calls and class lessons.
  7. Optical Scanner: Copies pictures or paper documents and turns them into digital copies on the computer.
  8. Barcode Reader: A handheld scanner that reads black-and-white striped product codes at supermarket checkouts.`,
    examples: [
      {
        id: 'ex-ict-inp-1',
        title: 'Choosing Input Devices for Specific Tasks',
        problem: 'Which input device should be used for: (a) Recording a teacher speaking in class; (b) Scanning a printed passport photo onto a computer?',
        stepByStepSolution: [
          '(a) Recording a voice lesson: Use a Microphone.',
          '(b) Copying a physical paper passport picture: Use an Optical Scanner.'
        ],
        keyTakeaway: 'Microphones input audio; scanners input physical photos and documents.'
      },
      {
        id: 'ex-ict-inp-2',
        title: 'Why Supermarkets Use Barcode Readers',
        problem: 'Why do Ghanaian supermarkets use barcode scanners instead of typing the price of each item by hand?',
        stepByStepSolution: [
          'Reason 1 (Speed): A barcode reader scans a product in less than a second, making checkout lines faster.',
          'Reason 2 (Accuracy): It prevents human typing mistakes and ensures the customer is charged the exact right price.'
        ],
        keyTakeaway: 'Barcode readers are faster and eliminate manual typing errors at shopping counters.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t4-outputdevices',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 4,
    title: 'Output Devices: Softcopy vs. Hardcopy',
    description: 'Learn how computers show results: computer screens (monitors), printers, speakers, and multimedia classroom projectors.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=2Tz8-6e9K2Y',
    youtubeId: '2Tz8-6e9K2Y',
    keyNotes: `• What is an Output Device?
  - Any hardware device that shows or presents processed information to the user in a way they can see, hear, or read.

• Softcopy vs. Hardcopy Output:
  - Softcopy: Output that is shown on a screen or heard through speakers. You cannot hold it in your hands, and it disappears when power goes off (e.g., video on a monitor, voice on a speaker).
  - Hardcopy: Output printed permanently on paper that you can physically touch and hold (e.g., printed terminal report card, printed BECE certificate).

• Common Output Devices:
  1. Monitor (Screen / Visual Display Unit):
     - Displays text, photos, and videos. Modern monitors use flat LCD or LED screens.
  2. Printer:
     - Inkjet Printer: Sprays tiny droplets of liquid ink. Great for color pictures and home use.
     - Laser Printer: Uses dry powdered ink (toner) and heat. Very fast, neat, and ideal for school exam printing.
  3. Speakers & Headphones:
     - Produce sound, audio notes, and music.
  4. Multimedia Projector:
     - Projects the computer screen onto a large wall or whiteboard so an entire classroom of students can watch together.`,
    examples: [
      {
        id: 'ex-ict-out-1',
        title: 'Identifying Softcopy and Hardcopy',
        problem: 'Classify each of the following as Softcopy or Hardcopy: (a) An SMS message displayed on a phone; (b) A printed school receipt; (c) A voice note playing from WhatsApp.',
        stepByStepSolution: [
          '(a) SMS message on screen: Softcopy (electronic display).',
          '(b) Printed school receipt: Hardcopy (printed on paper).',
          '(c) Voice note playing from a speaker: Softcopy (audio output).'
        ],
        keyTakeaway: 'Screen and audio outputs are softcopy; paper prints are hardcopy.'
      },
      {
        id: 'ex-ict-out-2',
        title: 'Choosing the Right Printer for a School',
        problem: 'A headteacher needs to print 2,000 copies of end-of-term exam papers quickly. Should the school use an Inkjet or a Laser printer?',
        stepByStepSolution: [
          'Step 1: The school should choose a Laser Printer.',
          'Step 2: Laser printers print much faster (up to 40 pages per minute) and cost less per page than liquid inkjet cartridges.'
        ],
        keyTakeaway: 'Laser printers are faster, cost less per page, and are best for large school exam printing.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t5-safetyhygiene',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 5,
    title: 'Health, Safety & Lab Hygiene (Ergonomics)',
    description: 'Learn good sitting posture, how to protect your eyes, computer lab rules, and proper ways to turn computers on and off.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=k5qP8uYQ2kY',
    youtubeId: 'k5qP8uYQ2kY',
    keyNotes: `• Computer Lab Safety Rules:
  - No food or drinks near computers: Spilled water or juice causes electrical shocks and damages keyboards.
  - Do not touch loose cables or open sockets: Prevents electric shock.
  - No running or playing in the lab: Prevents tripping over power cables.
  - Keep the computer room clean and dust-free: Dust blocks air vents and causes computers to overheat.

• Ergonomics (Healthy Sitting Posture):
  - Ergonomics is the science of arranging work equipment so that people can work safely and comfortably without hurting their bodies.
  - Correct Sitting Posture:
    * Sit up straight with your back supported by the chair.
    * Keep both feet flat on the floor.
    * Keep your arms and knees at about a 90-degree angle.
    * Keep the top of the computer monitor at or slightly below your eye level.

• Protecting Your Eyes (The 20-20-20 Rule):
  - Every 20 minutes of screen time, look away at an object 20 feet (about 6 meters) away for at least 20 seconds. This relaxes eye muscles and stops eye strain and headaches.

• Turning Computers On and Off Properly:
  - Cold Booting: Turning on a computer that is completely switched off by pressing the Power button.
  - Warm Booting (Restarting): Restarting a computer using software (Start → Restart) without turning off the wall socket.
  - Shut Down: Always click Start → Power → Shut Down. Never pull the plug out of the wall while the computer is running!`,
    examples: [
      {
        id: 'ex-ict-safe-1',
        title: 'Practicing the 20-20-20 Rule',
        problem: 'Ama has been studying on her laptop for 40 minutes and her eyes feel tired. What should she do according to the 20-20-20 rule?',
        stepByStepSolution: [
          'Step 1: Ama should stop looking at the screen.',
          'Step 2: She should look out the window at a tree or object at least 20 feet away for at least 20 seconds.',
          'Step 3: This gives her eye muscles a rest and prevents eye strain.'
        ],
        keyTakeaway: 'Every 20 minutes, look 20 feet away for 20 seconds to prevent screen eye strain.'
      },
      {
        id: 'ex-ict-safe-2',
        title: 'Proper Computer Shutdown',
        problem: 'Why is it wrong to switch off the computer directly from the wall socket without clicking Shut Down first?',
        stepByStepSolution: [
          'Reason 1: Unsaved school files can be permanently lost or damaged.',
          'Reason 2: The operating system files may become corrupted, preventing the computer from turning on next time.'
        ],
        keyTakeaway: 'Always use Start → Shut Down to let the computer close files safely before turning off power.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t6-cpumemory',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 1,
    orderIndex: 6,
    title: 'Technology in the Community & Everyday Life (NaCCA B7.1.2)',
    description: 'Explore how computers and technology tools transform Ghanaian communities in education, healthcare, banking, and agriculture.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=tyDN4pXkYCY',
    youtubeId: 'tyDN4pXkYCY',
    keyNotes: `• How Technology Helps Our Community:
  - Technology tools (computers, smartphones, tablets, biometric machines) are used every day across Ghana to make work faster, easier, and more reliable.

• Key Areas of Technology in Ghana:
  1. Education & Schools:
     - Online learning portals, digital textbooks, virtual classrooms, and computerized school selection (CSSPS) for BECE candidates entering SHS.
  2. Banking & Commerce:
     - Mobile Money (MoMo), ATMs, online banking, and electronic payment points in shops and fuel stations.
  3. Healthcare & Hospitals:
     - Digital patient records, ultrasound scans, computerized laboratory tests, and tracking medicines.
  4. Governance & Civic Life:
     - The Ghana Card (National Identification Authority biometric registration), computerized voter registration, and electronic passports.
  5. Agriculture & Farming:
     - Farmers checking weather forecasts on mobile phones, drone spraying of crops, and mobile apps to check market crop prices in Accra, Kumasi, and Tamale.

• Digital Tools Used in the Community:
  - Smart phones, POS (point-of-sale) machines, biometric fingerprint scanners, computerized hospital monitors, and solar-powered weather stations.`,
    examples: [
      {
        id: 'ex-ict-comm-1',
        title: 'How Technology Helps Farmers in Ghana',
        problem: 'Give two practical ways a maize farmer in the Bono Region can use mobile technology to improve their farming business.',
        stepByStepSolution: [
          '1. Weather Information: The farmer can receive SMS weather alerts to know the best week to plant seeds before heavy rains.',
          '2. Market Selling: The farmer can check grain prices in Techiman market by phone and receive customer payments directly via Mobile Money.'
        ],
        keyTakeaway: 'Mobile phones help farmers check market prices, receive payments, and monitor weather forecasts.'
      },
      {
        id: 'ex-ict-comm-2',
        title: 'Technology in Ghanaian Healthcare',
        problem: 'How do computer records help a hospital in Kumasi care for patients better than old paper cards?',
        stepByStepSolution: [
          'Benefit 1: Doctors can search and retrieve a patient medical history in seconds on a computer screen.',
          'Benefit 2: Computerized records cannot easily get lost, water-damaged, or eaten by insects like old paper files.'
        ],
        keyTakeaway: 'Electronic health records are fast, secure, and easily accessible across hospital departments.'
      }
    ]
  },

  // ==========================================
  // TERM 2: STORAGE, OS, KEYBOARDING & WORD PROCESSING
  // ==========================================
  {
    id: 'jhs1-ict-t7-storagedevices',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 2,
    orderIndex: 7,
    title: 'Storage Devices & Measuring Memory Capacity',
    description: 'Learn primary memory (RAM vs ROM), secondary storage (hard drives, flash drives, memory cards, cloud storage), and memory units (Byte, KB, MB, GB).',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=sKq_O7a8Wv8',
    youtubeId: 'sKq_O7a8Wv8',
    keyNotes: `• What is Storage?
  - The hardware parts where computers keep programs, pictures, videos, and files so they can be opened again later.

• Two Main Types of Computer Memory:
  1. Primary Memory (Inside the computer):
     - RAM (Random Access Memory): The temporary work space. Holds files you are currently using. When electricity goes off, unsaved work in RAM is lost (Volatile).
     - ROM (Read-Only Memory): Permanent memory built by the manufacturer. Holds the startup instructions that turn on the computer. Cannot be easily erased (Non-volatile).
  2. Secondary Storage (Permanent storage):
     - Hard Disk Drive (HDD) & Solid State Drive (SSD): The main storage inside laptops and desktops holding all apps and files.
     - USB Flash Drive (Pen Drive): Small, portable drive that plugs into USB ports to carry school work.
     - Memory Card (MicroSD): Tiny memory cards used in smartphones and digital cameras.
     - Cloud Storage: Saving files over the internet (e.g., Google Drive) so you can open them from any phone or computer.

• Measuring Memory Units:
  - Bit: The smallest unit (either a 0 or a 1).
  - Byte: 8 bits grouped together. 1 Byte stores one letter (like 'A').
  - Kilobyte (KB): About 1,000 Bytes (stores a short paragraph).
  - Megabyte (MB): About 1,000 KB (stores an MP3 song or photo).
  - Gigabyte (GB): About 1,000 MB (stores a whole video movie or game).
  - Terabyte (TB): About 1,000 GB (stores thousands of movies).`,
    examples: [
      {
        id: 'ex-ict-sto-1',
        title: 'Comparing RAM and ROM in Simple Terms',
        problem: 'State the main difference between RAM and ROM when electricity is switched off.',
        stepByStepSolution: [
          'Step 1: RAM is temporary (volatile) — whatever was not saved is erased when power cuts off.',
          'Step 2: ROM is permanent (non-volatile) — its startup instructions remain safely stored even without electricity.'
        ],
        keyTakeaway: 'RAM loses data when power goes off; ROM keeps its instructions permanently.'
      },
      {
        id: 'ex-ict-sto-2',
        title: 'Arranging Storage Units by Size',
        problem: 'Arrange the following storage units from smallest to largest: Gigabyte (GB), Byte, Kilobyte (KB), Megabyte (MB).',
        stepByStepSolution: [
          '1. Byte (smallest — stores 1 character)',
          '2. Kilobyte (KB)',
          '3. Megabyte (MB)',
          '4. Gigabyte (GB — largest)'
        ],
        keyTakeaway: 'Byte < KB < MB < GB < TB.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t8-operatingsystems',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 2,
    orderIndex: 8,
    title: 'Operating Systems & The Desktop Interface',
    description: 'Learn what Windows, Android, and macOS do, and explore the Desktop, icons, taskbar, files, and folders.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=4Ym5B5I2PqA',
    youtubeId: '4Ym5B5I2PqA',
    keyNotes: `• What is an Operating System (OS)?
  - The master software that controls the computer hardware and lets you run programs like games, word processors, and browsers.
  - Without an operating system, a computer or smartphone cannot start or work!

• Examples of Operating Systems:
  - For Computers/Laptops: Microsoft Windows, Apple macOS, Linux.
  - For Smartphones/Tablets: Google Android, Apple iOS.

• Parts of the Graphical User Interface (GUI):
  - Desktop: The main screen that appears after the computer boots up.
  - Icons: Small clickable pictures on the desktop representing programs, files, or folders (e.g., Recycle Bin, Chrome).
  - Taskbar: The long bar along the bottom of the screen showing open programs, the clock, and the Start button.
  - Start Button: The button at the bottom-left corner used to open all programs and turn off the computer.

• Files vs. Folders:
  - File: A single saved document, picture, or song with a name (e.g., 'english_essay.docx').
  - Folder (Directory): A yellow digital container used to group and organize related files neatly together.`,
    examples: [
      {
        id: 'ex-ict-os-1',
        title: 'Why Computers Need an Operating System',
        problem: 'Can a brand-new laptop open a typing program if it has no operating system installed? Explain why.',
        stepByStepSolution: [
          'Step 1: No, the computer cannot open any program.',
          'Step 2: The operating system is the foundation that manages the screen, keyboard, and memory. Without it, the computer cannot even display a menu.'
        ],
        keyTakeaway: 'The operating system is the essential master program that makes computer hardware work.'
      },
      {
        id: 'ex-ict-os-2',
        title: 'Folders Keep Files Organized',
        problem: 'A student has 30 homework files scattered across the desktop. How can folders solve this problem?',
        stepByStepSolution: [
          'Step 1: The student can create subject folders named "Science", "Maths", and "Computing".',
          'Step 2: Drag and drop the homework files into their matching folders to keep the desktop clean and easy to navigate.'
        ],
        keyTakeaway: 'Folders organize files into neat, categorized groups.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t9-keyboarding',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 2,
    orderIndex: 9,
    title: 'Keyboarding & Mouse Skills (Touch Typing)',
    description: 'Master the QWERTY keyboard layout, the home row keys (ASDF JKL;), special command keys, and mouse clicking techniques.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=0hV1h7p-y0Y',
    youtubeId: '0hV1h7p-y0Y',
    keyNotes: `• The Standard Keyboard (QWERTY):
  - The layout is named "QWERTY" after the first six letters on the top letter row.

• Special Keys and Their Uses:
  - Spacebar: The longest key on the keyboard; adds a space between words.
  - Enter Key: Moves the cursor to the next line or confirms a selection.
  - Backspace: Deletes characters to the LEFT of the cursor.
  - Delete Key: Deletes characters to the RIGHT of the cursor.
  - Caps Lock: When turned on, all letters typed become CAPITAL LETTERS.
  - Shift Key: Hold down with a letter key to make a single capital letter, or to type upper symbols (like Shift + 1 for '!').
  - Arrow Keys: Move the cursor Up, Down, Left, or Right on the screen.

• Touch Typing & The Home Row:
  - Touch typing means typing smoothly with all fingers without looking down at the keyboard.
  - The Home Row Keys (where fingers rest):
    * Left Hand Fingers: A, S, D, F
    * Right Hand Fingers: J, K, L, ; (semicolon)
    * Both Thumbs: Rest lightly on the Spacebar.
  - The 'F' and 'J' keys have small raised bumps so you can feel where to place your index fingers without looking down!

• Mouse Techniques:
  - Click (Left-click): Selects an item.
  - Double-click: Quickly clicks the left button twice to open a folder or program.
  - Right-click: Opens a shortcut menu of options (like Copy, Rename, Delete).
  - Drag and Drop: Hold the left button down while moving an item to a new spot, then let go.`,
    examples: [
      {
        id: 'ex-ict-key-1',
        title: 'Backspace vs. Delete Key',
        problem: 'Given the word "BO|OK" where "|" is the blinking cursor, what happens when you press: (a) Backspace; (b) Delete?',
        stepByStepSolution: [
          '(a) Pressing Backspace removes the letter to the left ("O"), leaving "B|OK".',
          '(b) Pressing Delete removes the letter to the right ("O"), leaving "BO|K".'
        ],
        keyTakeaway: 'Backspace deletes to the left; Delete removes characters to the right.'
      },
      {
        id: 'ex-ict-key-2',
        title: 'Finding the Home Row by Touch',
        problem: 'How can a student find the correct home row finger position on a keyboard without looking at the keys?',
        stepByStepSolution: [
          'Step 1: Feel for the raised bumps on the "F" key with the left index finger and the "J" key with the right index finger.',
          'Step 2: Rest the remaining fingers naturally along A-S-D on the left and K-L-; on the right.'
        ],
        keyTakeaway: 'The raised bumps on "F" and "J" guide index fingers to the home row.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t10-wordprocessing',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 2,
    orderIndex: 10,
    title: 'Introduction to Word Processing (NaCCA B7.2.1)',
    description: 'Learn to use Microsoft Word and Google Docs: typing, selecting text, copy, cut, paste, undo, and saving files.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=Fj0X7-wP9sI',
    youtubeId: 'Fj0X7-wP9sI',
    keyNotes: `• What is a Word Processor?
  - A computer application used to create, edit, format, check spelling, and print written text documents (e.g., Microsoft Word, Google Docs).

• Main Parts of the Word Window:
  - Title Bar: Shows the name of your document at the very top.
  - Ribbon: The wide strip at the top containing tool tabs (Home, Insert, Page Layout).
  - Blinking Cursor (Insertion Point): The vertical line '|' showing where the next letter you type will appear.
  - Status Bar: Shows page numbers and word count at the bottom.

• Basic Editing Commands:
  - Selecting Text: Click and drag your mouse over words to highlight them before making changes.
  - Copy (Ctrl + C): Makes a duplicate copy of selected text in the computer memory.
  - Cut (Ctrl + X): Removes selected text from its current spot so you can move it.
  - Paste (Ctrl + V): Places the copied or cut text into the new spot where your cursor is blinking.
  - Undo (Ctrl + Z): Cancels your last mistake and puts things back the way they were.
  - Redo (Ctrl + Y): Repeats the action you just canceled.

• Saving Your Work:
  - Save (Ctrl + S): Keeps your work safely on the disk so it is not lost. Always save regularly!`,
    examples: [
      {
        id: 'ex-ict-wp-1',
        title: 'Copy vs. Cut in Word Processing',
        problem: 'Kwame wrote a paragraph and wants to move the first sentence to the end of his essay. Should he use Copy or Cut?',
        stepByStepSolution: [
          'Step 1: Kwame should highlight the sentence and choose CUT (Ctrl + X). This removes it from the top.',
          'Step 2: He should click at the end of the essay and choose PASTE (Ctrl + V) to place it there.'
        ],
        keyTakeaway: 'Cut moves text to a new place; Copy makes a duplicate while leaving the original.'
      },
      {
        id: 'ex-ict-wp-2',
        title: 'The Magic of the Undo Command',
        problem: 'Akua accidentally deleted an entire paragraph she typed in MS Word. How can she recover it in one second?',
        stepByStepSolution: [
          'Step 1: Akua should press Ctrl + Z (or click the curved Undo arrow at the top left).',
          'Step 2: The deleted paragraph instantly reappears exactly as it was.'
        ],
        keyTakeaway: 'Ctrl + Z (Undo) reverses accidental mistakes immediately.'
      }
    ]
  },

  // ==========================================
  // TERM 3: FORMATTING, SPREADSHEETS, NETWORKS & ALGORITHMS
  // ==========================================
  {
    id: 'jhs1-ict-t11-documentformatting',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 3,
    orderIndex: 11,
    title: 'Document Formatting: Fonts, Paragraphs & Tables',
    description: 'Format documents with Bold, Italics, Underline, text alignments (left, center, right, justify), bullet lists, and simple tables.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=3uG7zC4p3rQ',
    youtubeId: '3uG7zC4p3rQ',
    keyNotes: `• What is Formatting?
  - Changing the appearance, color, size, and layout of text to make a document look neat, professional, and easy to read.

• Font Formatting Tools:
  - Font Size: Changes how big or small letters are (e.g., 12 pt for body text, 16 pt for headings).
  - Bold (Ctrl + B): Makes letters thicker and darker for emphasis.
  - Italics (Ctrl + I): Slants letters slightly to the right (used for book titles).
  - Underline (Ctrl + U): Puts a straight line under words.
  - Font Color: Changes the color of text.

• Paragraph Alignments:
  - Align Left (Ctrl + L): Aligns text straight against the left margin (normal for letters and paragraphs).
  - Center (Ctrl + E): Places text right in the middle between left and right margins (ideal for titles and headings).
  - Align Right (Ctrl + R): Pushes text straight against the right margin (used for dates and sign-offs).
  - Justify (Ctrl + J): Stretches text so both the left and right sides are straight and neat like in textbooks.

• Bulleted and Numbered Lists:
  - Bulleted List: Uses dots or symbols for items where order does not matter (shopping list).
  - Numbered List: Uses 1, 2, 3 for step-by-step instructions (cooking recipes, science steps).

• Simple Tables:
  - A grid made of horizontal Rows and vertical Columns.
  - Cell: The little box where a row meets a column.`,
    examples: [
      {
        id: 'ex-ict-fmt-1',
        title: 'Choosing Text Alignments',
        problem: 'Which text alignment is best for: (a) The title of a school composition; (b) A regular paragraph in an essay?',
        stepByStepSolution: [
          '(a) School composition title: CENTER alignment (Ctrl + E) so the heading sits neatly in the middle.',
          '(b) Regular paragraph: LEFT alignment (Ctrl + L) or JUSTIFIED alignment (Ctrl + J) for clean, readable edges.'
        ],
        keyTakeaway: 'Center is for headings; Left or Justified is for body paragraphs.'
      },
      {
        id: 'ex-ict-fmt-2',
        title: 'Counting Cells in a Table',
        problem: 'A teacher creates a table with 4 columns and 5 rows for class test marks. How many cells are in this table?',
        stepByStepSolution: [
          'Step 1: Total cells = Number of Columns × Number of Rows.',
          'Step 2: Total cells = 4 × 5 = 20 cells.'
        ],
        keyTakeaway: 'Number of cells in a table equals rows multiplied by columns.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t12-internetbasics',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 3,
    orderIndex: 12,
    title: 'Introduction to Electronic Spreadsheets (MS Excel) (NaCCA B7.2.3)',
    description: 'Learn what spreadsheets are, understand rows, columns, and cell addresses (like A1, B5), and see how numbers are organized in Excel.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=0kFj7f8v-7U',
    youtubeId: '0kFj7f8v-7U',
    keyNotes: `• What is an Electronic Spreadsheet?
  - A computer software application designed to organize, calculate, and analyze numbers and data in rows and columns (e.g., Microsoft Excel, Google Sheets).
  - Used by teachers to calculate exam grades, shopkeepers to calculate daily sales, and accountants in banks.

• Parts of a Spreadsheet Window:
  - Columns: Vertical sections identified by LETTERS (A, B, C, D...).
  - Rows: Horizontal lines identified by NUMBERS (1, 2, 3, 4...).
  - Cell: The intersection box where a column meets a row.
  - Cell Address / Reference: The unique name of a cell given by its column letter followed by its row number (e.g., cell B3 is in Column B, Row 3).
  - Active Cell: The currently selected cell outlined with a thick border.
  - Formula Bar: The area at the top where you can see the content or math formula of the selected cell.

• Types of Data in a Spreadsheet:
  - Labels: Text words like names or headings (e.g., "Student Name", "Total Score").
  - Values: Numbers used for calculations (e.g., 85, 92, 100).
  - Formulas: Math instructions that always begin with an EQUAL SIGN (=) (e.g., =A1 + B1).`,
    examples: [
      {
        id: 'ex-ict-ss-1',
        title: 'Finding a Cell Address in Excel',
        problem: 'What is the cell address of the box located in Column C and Row 8?',
        stepByStepSolution: [
          'Step 1: Always write the Column Letter first: C.',
          'Step 2: Follow with the Row Number: 8.',
          'Step 3: The cell address is C8.'
        ],
        keyTakeaway: 'A cell address combines the column letter and row number (e.g., C8, A1).'
      },
      {
        id: 'ex-ict-ss-2',
        title: 'How Formulas Begin in Spreadsheets',
        problem: 'A student wants Excel to add two numbers in cell A1 and cell B1. How must the formula begin?',
        stepByStepSolution: [
          'Step 1: Every spreadsheet formula must always begin with an equal sign (=).',
          'Step 2: The student should type: =A1 + B1.'
        ],
        keyTakeaway: 'All formulas in Microsoft Excel and Google Sheets must start with an equal sign (=).'
      }
    ]
  },
  {
    id: 'jhs1-ict-t13-email',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 3,
    orderIndex: 13,
    title: 'Computer Networks & Network Topologies (NaCCA B7.3.1)',
    description: 'Learn what a computer network is, the difference between LAN and WAN, and basic network shapes (Bus, Star, Ring).',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=2Tz8-6e9K2Y',
    youtubeId: '2Tz8-6e9K2Y',
    keyNotes: `• What is a Computer Network?
  - Two or more computers connected together so that they can share resources, files, and communicate with each other.

• Benefits of a Computer Network:
  - Sharing Hardware: All computers in a school lab can print using just ONE shared printer.
  - Sharing Files & Software: Students can open files from the teacher's central computer without needing flash drives.
  - Fast Communication: Send instant messages and emails between computers.

• Types of Networks by Size:
  - Local Area Network (LAN): Connects computers in a small area, like a single room, school lab, or office building.
  - Wide Area Network (WAN): Connects computers across whole towns, countries, or the entire world (the Internet is the biggest WAN in the world!).

• Network Topologies (How Computers are Connected):
  1. Star Topology:
     - All computers are connected individually to a central box called a Switch or Hub.
     - Advantage: If one computer cable breaks, all other computers keep working!
  2. Bus Topology:
     - All computers are connected along a single central cable (the backbone).
     - Simple and cheap, but if the main backbone cable breaks, the whole network stops.
  3. Ring Topology:
     - Each computer is connected to two neighbors, forming a closed circular loop.`,
    examples: [
      {
        id: 'ex-ict-net-1',
        title: 'LAN vs. WAN in Real Life',
        problem: 'Classify the following networks: (a) 20 computers connected inside your school ICT laboratory; (b) The worldwide Internet network.',
        stepByStepSolution: [
          '(a) Computers inside one school lab: Local Area Network (LAN).',
          '(b) The worldwide network across countries: Wide Area Network (WAN).'
        ],
        keyTakeaway: 'LAN covers a small building; WAN connects computers across cities or the world.'
      },
      {
        id: 'ex-ict-net-2',
        title: 'Why Star Topology is Most Popular in Schools',
        problem: 'Why do most modern school computer labs use a Star Topology instead of a Bus Topology?',
        stepByStepSolution: [
          'Reason: In a Star Topology, if one student computer cable is unplugged, all other computers continue working without interruption.',
          'In a Bus Topology, a break in the main line shuts down the entire classroom.'
        ],
        keyTakeaway: 'In a Star topology, one broken cable does not stop other computers from working.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t14-cybersecurity',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 3,
    orderIndex: 14,
    title: 'The Internet, Web Browsers & Safe Digital Living',
    description: 'Explore the World Wide Web, web browsers (Chrome, Edge), web addresses (URLs), creating strong passwords, and avoiding online scams.',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=k5qP8uYQ2kY',
    youtubeId: 'k5qP8uYQ2kY',
    keyNotes: `• What is the Internet?
  - A global network of millions of computers connected together worldwide.

• Web Browsers vs. Search Engines:
  - Web Browser: A program used to open and look at websites on your screen (e.g., Google Chrome, Microsoft Edge, Safari, Firefox).
  - Search Engine: A website inside the browser used to find information by typing keywords (e.g., Google.com, Bing).

• Web Addresses (URL):
  - The unique address of a website (e.g., https://www.ges.gov.gh).
  - Country code for Ghana: .gh
  - Educational site: .edu or .ac
  - Government agency: .gov

• Staying Safe Online (Cyber Hygiene):
  - Strong Passwords: Use at least 8 characters with a mix of capital letters, small letters, numbers, and symbols (e.g., "Gh@na#2026"). Never use your birthday or "123456"!
  - Beware of Phishing Scams: Fake messages or fake calls claiming your MoMo account is blocked and asking for your secret PIN. Real banks never ask for your PIN!
  - Netiquette: Be polite online; never type in ALL CAPITAL LETTERS because it looks like you are shouting in anger.`,
    examples: [
      {
        id: 'ex-ict-sec-1',
        title: 'Web Browser vs. Search Engine',
        problem: 'Explain why Google Chrome is a Web Browser while Google.com is a Search Engine.',
        stepByStepSolution: [
          'Step 1: Google Chrome is the application program you tap to open websites.',
          'Step 2: Google.com is a search website you visit inside the browser to look up homework answers.'
        ],
        keyTakeaway: 'You open a browser (Chrome) to visit a search engine (Google.com).'
      },
      {
        id: 'ex-ict-sec-2',
        title: 'Creating a Strong Password',
        problem: 'Is the password "kofi2012" safe? How can a student make it much stronger?',
        stepByStepSolution: [
          'Step 1: "kofi2012" is weak because it uses a simple name and year that anyone can guess.',
          'Step 2: Make it strong by mixing letters, numbers, and symbols: "K0f!#Accra26".'
        ],
        keyTakeaway: 'Strong passwords mix uppercase letters, lowercase letters, numbers, and symbols.'
      }
    ]
  },
  {
    id: 'jhs1-ict-t15-algorithms',
    subjectId: 'ict',
    level: 'JHS 1',
    term: 3,
    orderIndex: 15,
    title: 'Computational Thinking & Simple Algorithms (NaCCA B7.4.1)',
    description: 'Learn step-by-step problem solving, everyday algorithms, and basic flowchart symbols (Oval, Rectangle, Parallelogram, Diamond).',
    isFreeTrial: true,
    isVip: false,
    youtubeUrl: 'https://www.youtube.com/watch?v=AkFi90lZ3rk',
    youtubeId: 'AkFi90lZ3rk',
    keyNotes: `• What is an Algorithm?
  - A clear, step-by-step list of instructions to solve a problem or complete a task.
  - Everyday Example: A recipe for cooking jollof rice is an algorithm — it lists ingredients first, followed by steps to cook in order.

• Rules of a Good Algorithm:
  - Must have a clear START and a clear STOP.
  - Every step must be clear and easy to follow.
  - The steps must be in the correct logical order.

• Ways to Show an Algorithm:
  1. Pseudocode: An informal description of steps written in simple plain English (START, INPUT, CALCULATE, DISPLAY, STOP).
  2. Flowchart: A diagram that shows the steps using standard shapes connected with arrows.

• Basic Flowchart Shapes:
  - OVAL: Start or Stop (the beginning or end of the steps).
  - PARALLELOGRAM: Input or Output (getting data in or showing results out).
  - RECTANGLE: Process (a calculation or action step like adding two numbers).
  - DIAMOND: Decision (asking a Yes/No question, like "Is mark greater than 50?").
  - ARROWS: Show the direction to go next.`,
    examples: [
      {
        id: 'ex-ict-alg-1',
        title: 'Writing an Algorithm in Plain English',
        problem: 'Write a simple 5-step algorithm to add two numbers and display the total.',
        stepByStepSolution: [
          'Step 1: START',
          'Step 2: INPUT First Number and Second Number',
          'Step 3: CALCULATE Total = First Number + Second Number',
          'Step 4: DISPLAY Total',
          'Step 5: STOP'
        ],
        keyTakeaway: 'An algorithm follows: START → INPUT → CALCULATE → DISPLAY → STOP.'
      },
      {
        id: 'ex-ict-alg-2',
        title: 'Matching Flowchart Shapes',
        problem: 'Which flowchart shape represents: (a) START; (b) Adding two numbers; (c) Asking if Score >= 50?',
        stepByStepSolution: [
          '(a) START: OVAL (Terminal shape).',
          '(b) Adding two numbers: RECTANGLE (Process shape).',
          '(c) Asking if Score >= 50: DIAMOND (Decision shape with Yes/No paths).'
        ],
        keyTakeaway: 'Oval = Start/Stop; Rectangle = Process/Math; Diamond = Yes/No Decision.'
      }
    ]
  }
];
