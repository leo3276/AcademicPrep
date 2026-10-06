// Ghanaian JHS 1 (Basic 7) Computing Practice Quizzes
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// Age-appropriate for Basic 7 learners (Ages 11-13)

import { TopicQuiz } from './types';

export const JHS1_COMPUTING_QUIZZES: Record<string, TopicQuiz> = {
  // Topic 1: Introduction to Computing & IPOS Cycle
  "jhs1-ict-t1-intro": {
    "id": "quiz-jhs1-ict-intro",
    "topicId": "jhs1-ict-t1-intro",
    "title": "Introduction to Computing & IPOS Cycle Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-intro-1",
        "quizId": "quiz-jhs1-ict-intro",
        "questionText": "Which of the following best defines a computer?",
        "optionA": "An electronic device that accepts data, processes it, and produces output",
        "optionB": "A typewriter with a screen that only writes letters",
        "optionC": "A machine used only for watching movies and playing music",
        "optionD": "An electrical appliance that only performs addition",
        "correctOption": "A",
        "subConcept": "Definition of Computer",
        "explanation": "A computer is an electronic machine that accepts input data, processes it according to instructions, produces output, and stores the results.",
        "remediationTip": "Remember the 4 core steps: Input, Processing, Output, and Storage."
      },
      {
        "id": "q-ict-intro-2",
        "quizId": "quiz-jhs1-ict-intro",
        "questionText": "What is the main difference between data and information?",
        "optionA": "Data is organized; information is raw",
        "optionB": "Data consists of raw, unorganized facts; information is processed and meaningful",
        "optionC": "Data can only be numbers; information can only be words",
        "optionD": "Data cannot be stored; information can only be on paper",
        "correctOption": "B",
        "subConcept": "Data vs Information",
        "explanation": "Data represents raw, unprocessed facts without context. When sorted and given meaning, it becomes useful information.",
        "remediationTip": "Think of data as raw ingredients and information as the finished, cooked meal."
      },
      {
        "id": "q-ict-intro-3",
        "quizId": "quiz-jhs1-ict-intro",
        "questionText": "What is the correct order of the Information Processing Cycle?",
        "optionA": "Output → Process → Storage → Input",
        "optionB": "Input → Storage → Output → Process",
        "optionC": "Input → Process → Output → Storage",
        "optionD": "Process → Input → Storage → Output",
        "correctOption": "C",
        "subConcept": "The IPOS Cycle",
        "explanation": "The information processing cycle follows the acronym IPOS: Input (data entry) → Processing (CPU works) → Output (results shown) → Storage (saved for later).",
        "remediationTip": "Remember IPOS: I (Input) → P (Process) → O (Output) → S (Storage)."
      },
      {
        "id": "q-ict-intro-4",
        "quizId": "quiz-jhs1-ict-intro",
        "questionText": "Entering a student's test score using a keyboard is an example of which stage?",
        "optionA": "Processing",
        "optionB": "Output",
        "optionC": "Input",
        "optionD": "Storage",
        "correctOption": "C",
        "subConcept": "Input Stage",
        "explanation": "Typing marks using a keyboard enters raw data into the computer, which is the Input stage.",
        "remediationTip": "Any action that enters data into a computer is an input."
      },
      {
        "id": "q-ict-intro-5",
        "quizId": "quiz-jhs1-ict-intro",
        "questionText": "The computer acronym 'GIGO' stands for:",
        "optionA": "Good Input, Good Order",
        "optionB": "Garbage In, Garbage Out",
        "optionC": "General Internet, Global Output",
        "optionD": "Get Information, Get Out",
        "correctOption": "B",
        "subConcept": "Garbage In, Garbage Out (GIGO)",
        "explanation": "GIGO means Garbage In, Garbage Out. If you enter incorrect data, the computer will produce incorrect results.",
        "remediationTip": "GIGO highlights that the computer is only as accurate as the data you enter."
      }
    ]
  },

  // Topic 2: Generations of Computers
  "jhs1-ict-t2-generations": {
    "id": "quiz-jhs1-ict-generations",
    "topicId": "jhs1-ict-t2-generations",
    "title": "Generations of Computers Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-gen-1",
        "quizId": "quiz-jhs1-ict-generations",
        "questionText": "Who is widely celebrated as the 'Father of the Computer'?",
        "optionA": "Blaise Pascal",
        "optionB": "Bill Gates",
        "optionC": "Charles Babbage",
        "optionD": "Steve Jobs",
        "correctOption": "C",
        "subConcept": "Pioneers of Computing",
        "explanation": "Charles Babbage designed the early mechanical Analytical Engine and is recognized as the Father of the Computer.",
        "remediationTip": "Remember Charles Babbage designed the first general computer concept."
      },
      {
        "id": "q-ict-gen-2",
        "quizId": "quiz-jhs1-ict-generations",
        "questionText": "Which electronic component was used in First Generation computers?",
        "optionA": "Microprocessors",
        "optionB": "Transistors",
        "optionC": "Vacuum Tubes",
        "optionD": "Integrated Circuits",
        "correctOption": "C",
        "subConcept": "First Generation Computers",
        "explanation": "First generation computers relied on bulky glass vacuum tubes that consumed large amounts of electricity and produced heavy heat.",
        "remediationTip": "First = Vacuum Tubes. Second = Transistors. Third = Integrated Circuits."
      },
      {
        "id": "q-ict-gen-3",
        "quizId": "quiz-jhs1-ict-generations",
        "questionText": "Second generation computers replaced vacuum tubes with:",
        "optionA": "Transistors",
        "optionB": "Microprocessors",
        "optionC": "Artificial Intelligence",
        "optionD": "Abacus beads",
        "correctOption": "A",
        "subConcept": "Second Generation Computers",
        "explanation": "Second generation computers used solid transistors, which were much smaller, faster, and cooler than vacuum tubes.",
        "remediationTip": "Transistors were the hallmark of the 2nd generation."
      },
      {
        "id": "q-ict-gen-4",
        "quizId": "quiz-jhs1-ict-generations",
        "questionText": "Modern personal computers, laptops, and smartphones belong primarily to which generation?",
        "optionA": "First Generation",
        "optionB": "Second Generation",
        "optionC": "Fourth Generation",
        "optionD": "Early Generation",
        "correctOption": "C",
        "subConcept": "Fourth Generation Computers",
        "explanation": "Fourth generation computers use microprocessors—a tiny silicon chip containing the entire CPU.",
        "remediationTip": "The microprocessor powered the 4th generation personal computer revolution."
      },
      {
        "id": "q-ict-gen-5",
        "quizId": "quiz-jhs1-ict-generations",
        "questionText": "Fifth generation computer technology focuses heavily on:",
        "optionA": "Vacuum tubes",
        "optionB": "Artificial Intelligence (AI) and voice recognition",
        "optionC": "Hand-cranked mechanical gears",
        "optionD": "Punched paper cards",
        "correctOption": "B",
        "subConcept": "Fifth Generation Computers",
        "explanation": "Fifth generation computers are designed around Artificial Intelligence (AI), robotics, natural voice recognition, and smart machines.",
        "remediationTip": "5th generation = Artificial Intelligence (AI)."
      }
    ]
  },

  // Topic 3: Input Devices
  "jhs1-ict-t3-inputdevices": {
    "id": "quiz-jhs1-ict-inputdevices",
    "topicId": "jhs1-ict-t3-inputdevices",
    "title": "Input Devices Mastery Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-inp-1",
        "quizId": "quiz-jhs1-ict-inputdevices",
        "questionText": "An input device is used to:",
        "optionA": "Display finished results on a screen",
        "optionB": "Enter data and commands into the computer",
        "optionC": "Print school examination papers on paper",
        "optionD": "Play music loudly through speakers",
        "correctOption": "B",
        "subConcept": "Definition of Input Device",
        "explanation": "Input devices allow human users to enter text, numbers, voice, images, or commands into a computer system.",
        "remediationTip": "Input = putting data IN to the computer."
      },
      {
        "id": "q-ict-inp-2",
        "quizId": "quiz-jhs1-ict-inputdevices",
        "questionText": "Which of the following is an input device?",
        "optionA": "Laser Printer",
        "optionB": "Optical Mouse",
        "optionC": "Multimedia Projector",
        "optionD": "Computer Monitor",
        "correctOption": "B",
        "subConcept": "Identifying Input Devices",
        "explanation": "An optical mouse is an input pointing device. Monitors, printers, and projectors are output devices.",
        "remediationTip": "A mouse sends clicking and pointing signals into the computer."
      },
      {
        "id": "q-ict-inp-3",
        "quizId": "quiz-jhs1-ict-inputdevices",
        "questionText": "Which device is used at a supermarket checkout to scan black-and-white zebra stripes on food items?",
        "optionA": "Microphone",
        "optionB": "Barcode Reader",
        "optionC": "Headphone",
        "optionD": "Inkjet Printer",
        "correctOption": "B",
        "subConcept": "Barcode Readers",
        "explanation": "A barcode reader uses light to read the printed lines and numbers on product packaging.",
        "remediationTip": "Barcodes on products are scanned with a barcode reader."
      },
      {
        "id": "q-ict-inp-4",
        "quizId": "quiz-jhs1-ict-inputdevices",
        "questionText": "To record your voice during an online lesson, you must use a:",
        "optionA": "Microphone",
        "optionB": "Speaker",
        "optionC": "Monitor",
        "optionD": "Plotter",
        "correctOption": "A",
        "subConcept": "Audio Input",
        "explanation": "A microphone captures sound and sends it into the computer as audio data.",
        "remediationTip": "Microphone = Sound IN; Speaker = Sound OUT."
      },
      {
        "id": "q-ict-inp-5",
        "quizId": "quiz-jhs1-ict-inputdevices",
        "questionText": "Which device can act as both an input and an output device on modern smartphones?",
        "optionA": "Keyboard",
        "optionB": "Touchscreen",
        "optionC": "Mouse pad",
        "optionD": "Scanner",
        "correctOption": "B",
        "subConcept": "Touchscreens",
        "explanation": "A touchscreen is both input (you touch it with your finger to give commands) and output (it shows you images and text).",
        "remediationTip": "Touchscreens display output while receiving finger touches as input."
      }
    ]
  },

  // Topic 4: Output Devices
  "jhs1-ict-t4-outputdevices": {
    "id": "quiz-jhs1-ict-outputdevices",
    "topicId": "jhs1-ict-t4-outputdevices",
    "title": "Output Devices: Softcopy vs Hardcopy Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-out-1",
        "quizId": "quiz-jhs1-ict-outputdevices",
        "questionText": "Which of the following is an example of hardcopy output?",
        "optionA": "A video clip playing on YouTube",
        "optionB": "A printed BECE result slip on paper",
        "optionC": "A WhatsApp voice note playing from your phone",
        "optionD": "A picture displayed on a computer screen",
        "correctOption": "B",
        "subConcept": "Hardcopy Output",
        "explanation": "Hardcopy is physical, tangible output printed permanently on paper.",
        "remediationTip": "If you can hold it in your hands on paper, it is hardcopy."
      },
      {
        "id": "q-ict-out-2",
        "quizId": "quiz-jhs1-ict-outputdevices",
        "questionText": "Output that is displayed temporarily on a monitor screen or heard through speakers is called:",
        "optionA": "Hardcopy",
        "optionB": "Softcopy",
        "optionC": "Paper copy",
        "optionD": "Barcode",
        "correctOption": "B",
        "subConcept": "Softcopy Output",
        "explanation": "Softcopy is digital electronic output displayed on screens or heard as audio. It disappears when the device is turned off.",
        "remediationTip": "Screens and speakers produce softcopy."
      },
      {
        "id": "q-ict-out-3",
        "quizId": "quiz-jhs1-ict-outputdevices",
        "questionText": "Which type of printer is best suited for printing thousands of exam papers quickly in a school office?",
        "optionA": "Inkjet Printer",
        "optionB": "Dot Matrix Printer",
        "optionC": "Laser Printer",
        "optionD": "Plotter",
        "correctOption": "C",
        "subConcept": "Laser Printers",
        "explanation": "Laser printers use toner powder and heat to print dozens of crisp pages per minute with low cost per page.",
        "remediationTip": "Laser printers are fast, neat, and cost-effective for large school exams."
      },
      {
        "id": "q-ict-out-4",
        "quizId": "quiz-jhs1-ict-outputdevices",
        "questionText": "A teacher wants the entire classroom of 40 students to see a science diagram from his laptop. He should connect to a:",
        "optionA": "Multimedia Projector",
        "optionB": "Scanner",
        "optionC": "Headphone",
        "optionD": "Webcam",
        "correctOption": "A",
        "subConcept": "Multimedia Projectors",
        "explanation": "A multimedia projector enlarges the computer display onto a wall or screen so all students can see clearly.",
        "remediationTip": "Projectors enlarge screen images for classroom viewing."
      },
      {
        "id": "q-ict-out-5",
        "quizId": "quiz-jhs1-ict-outputdevices",
        "questionText": "Which of the following is an audio output device?",
        "optionA": "Microphone",
        "optionB": "Speaker",
        "optionC": "Mouse",
        "optionD": "Scanner",
        "correctOption": "B",
        "subConcept": "Audio Output",
        "explanation": "Speakers and headphones output sound waves for users to hear.",
        "remediationTip": "Speakers output audio sound."
      }
    ]
  },

  // Topic 5: Health & Safety in ICT
  "jhs1-ict-t5-safetyhygiene": {
    "id": "quiz-jhs1-ict-safetyhygiene",
    "topicId": "jhs1-ict-t5-safetyhygiene",
    "title": "Health, Safety & Ergonomics Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-safe-1",
        "quizId": "quiz-jhs1-ict-safetyhygiene",
        "questionText": "The science of arranging computers and furniture to prevent body aches and injuries is called:",
        "optionA": "Economics",
        "optionB": "Ergonomics",
        "optionC": "Electronics",
        "optionD": "Biology",
        "correctOption": "B",
        "subConcept": "Ergonomics",
        "explanation": "Ergonomics is the design of tools and workstations to fit the human body comfortably and safely.",
        "remediationTip": "Ergonomics = Healthy posture and comfortable workstation setup."
      },
      {
        "id": "q-ict-safe-2",
        "quizId": "quiz-jhs1-ict-safetyhygiene",
        "questionText": "According to the '20-20-20 rule', what should a student do every 20 minutes of screen study?",
        "optionA": "Take a 20-minute nap",
        "optionB": "Look at an object 20 feet away for 20 seconds",
        "optionC": "Drink 20 glasses of water",
        "optionD": "Type 20 capital letters",
        "correctOption": "B",
        "subConcept": "The 20-20-20 Rule",
        "explanation": "Looking at an object 20 feet away for 20 seconds relaxes the eye muscles and stops digital eye strain.",
        "remediationTip": "Every 20 minutes → Look 20 feet away → For 20 seconds."
      },
      {
        "id": "q-ict-safe-3",
        "quizId": "quiz-jhs1-ict-safetyhygiene",
        "questionText": "Why are food and water strictly forbidden inside a computer laboratory?",
        "optionA": "Food attracts dust",
        "optionB": "Liquids can spill and cause short circuits or destroy keyboards",
        "optionC": "Food slows down the computer processor",
        "optionD": "Computers cannot operate while people eat",
        "correctOption": "B",
        "subConcept": "Lab Safety Rules",
        "explanation": "Spilling liquids can cause electrical shocks, short-circuit motherboards, and ruin keyboards.",
        "remediationTip": "Keep all drinks and food away from electronic devices."
      },
      {
        "id": "q-ict-safe-4",
        "quizId": "quiz-jhs1-ict-safetyhygiene",
        "questionText": "Which sitting posture is recommended when working on a desktop computer?",
        "optionA": "Slouching forward with feet hanging in the air",
        "optionB": "Back straight, feet flat on the floor, and monitor at eye level",
        "optionC": "Lying completely flat on the floor",
        "optionD": "Resting the monitor on your lap with your neck bent down",
        "correctOption": "B",
        "subConcept": "Healthy Seating Posture",
        "explanation": "Sitting straight with back support, feet flat, and screen at eye level prevents back and neck strain.",
        "remediationTip": "Feet flat, back supported, screen at eye level."
      },
      {
        "id": "q-ict-safe-5",
        "quizId": "quiz-jhs1-ict-safetyhygiene",
        "questionText": "What is the proper way to turn off a desktop computer?",
        "optionA": "Pull the power plug directly out of the wall socket",
        "optionB": "Click Start → Power → Shut Down",
        "optionC": "Switch off the room electricity meter",
        "optionD": "Cover the monitor with a piece of cloth",
        "correctOption": "B",
        "subConcept": "Proper Shutdown",
        "explanation": "Using Start → Shut Down lets the operating system save settings and close files safely without corruption.",
        "remediationTip": "Always shut down through the operating system menu."
      }
    ]
  },

  // Topic 6: Technology in the Community
  "jhs1-ict-t6-cpumemory": {
    "id": "quiz-jhs1-ict-cpumemory",
    "topicId": "jhs1-ict-t6-cpumemory",
    "title": "Technology in the Community Quiz (NaCCA B7.1.2)",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-comm-1",
        "quizId": "quiz-jhs1-ict-cpumemory",
        "questionText": "Which technology service allows Ghanaians to transfer money and pay school fees instantly from their mobile phones?",
        "optionA": "Mobile Money (MoMo)",
        "optionB": "Compact Disc (CD)",
        "optionC": "FM Radio",
        "optionD": "Postal stamp",
        "correctOption": "A",
        "subConcept": "Mobile Money (MoMo)",
        "explanation": "Mobile Money allows individuals to send, receive, and store money digitally using mobile telecommunication networks.",
        "remediationTip": "MoMo is the premier digital financial technology in Ghana."
      },
      {
        "id": "q-ict-comm-2",
        "quizId": "quiz-jhs1-ict-cpumemory",
        "questionText": "How does technology help a hospital in Ghana care for patients efficiently?",
        "optionA": "By replacing all human doctors with robot nurses",
        "optionB": "By storing patient medical histories digitally for quick retrieval",
        "optionC": "By dispensing medicine without prescriptions",
        "optionD": "By broadcasting patients' private records on social media",
        "correctOption": "B",
        "subConcept": "Healthcare Technology",
        "explanation": "Electronic medical records allow doctors to check allergies, past illnesses, and lab tests in seconds.",
        "remediationTip": "Computers in hospitals organize and retrieve patient health history quickly."
      },
      {
        "id": "q-ict-comm-3",
        "quizId": "quiz-jhs1-ict-cpumemory",
        "questionText": "The computerized system used by the Ghana Ministry of Education to place BECE graduates into Senior High Schools is called:",
        "optionA": "CSSPS (Computerized School Selection and Placement System)",
        "optionB": "GPS Tracking System",
        "optionC": "Ghana Post App",
        "optionD": "Automated Teller Machine",
        "correctOption": "A",
        "subConcept": "CSSPS in Education",
        "explanation": "CSSPS matches candidate BECE grades and school choices to Senior High Schools fairly using automated computer systems.",
        "remediationTip": "CSSPS = Computerized School Selection and Placement System."
      },
      {
        "id": "q-ict-comm-4",
        "quizId": "quiz-jhs1-ict-cpumemory",
        "questionText": "Which digital tool can a farmer use to find out upcoming rain patterns before planting crops?",
        "optionA": "A mobile weather application or SMS weather alert",
        "optionB": "A photocopier",
        "optionC": "An optical scanner",
        "optionD": "A laser printer",
        "correctOption": "A",
        "subConcept": "Agriculture Technology",
        "explanation": "Mobile weather alerts help farmers know when rains are coming so they can plant their crops at the ideal time.",
        "remediationTip": "Weather apps on phones guide farmers on planting seasons."
      },
      {
        "id": "q-ict-comm-5",
        "quizId": "quiz-jhs1-ict-cpumemory",
        "questionText": "What technology is used on the Ghana Card to prove a citizen's unique identity?",
        "optionA": "Barcodes only",
        "optionB": "Biometric fingerprint and facial recognition",
        "optionC": "Paper stamp signatures",
        "optionD": "Postal address codes",
        "correctOption": "B",
        "subConcept": "Biometric Identification",
        "explanation": "Biometrics capture physical human traits like fingerprints and iris patterns that are unique to each person.",
        "remediationTip": "The Ghana Card uses biometric data like fingerprints."
      }
    ]
  },

  // Topic 7: Storage Devices & Media
  "jhs1-ict-t7-storagedevices": {
    "id": "quiz-jhs1-ict-storagedevices",
    "topicId": "jhs1-ict-t7-storagedevices",
    "title": "Storage Devices & Memory Capacity Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-sto-1",
        "quizId": "quiz-jhs1-ict-storagedevices",
        "questionText": "What happens to unsaved documents in RAM when the power goes off?",
        "optionA": "They are automatically printed on paper",
        "optionB": "They are lost because RAM is temporary (volatile) memory",
        "optionC": "They are permanently saved onto ROM",
        "optionD": "They are emailed to the teacher",
        "correctOption": "B",
        "subConcept": "RAM Volatility",
        "explanation": "RAM is volatile memory; whatever is not saved to a hard drive or flash drive disappears when electricity is cut.",
        "remediationTip": "Save work often because RAM loses data when power goes out."
      },
      {
        "id": "q-ict-sto-2",
        "quizId": "quiz-jhs1-ict-storagedevices",
        "questionText": "Which type of memory holds the permanent startup instructions installed by the computer manufacturer?",
        "optionA": "RAM",
        "optionB": "ROM",
        "optionC": "USB Pen Drive",
        "optionD": "Mouse",
        "correctOption": "B",
        "subConcept": "ROM (Read-Only Memory)",
        "explanation": "ROM (Read-Only Memory) holds permanent instructions (the BIOS) that start the computer hardware.",
        "remediationTip": "ROM is non-volatile permanent startup memory."
      },
      {
        "id": "q-ict-sto-3",
        "quizId": "quiz-jhs1-ict-storagedevices",
        "questionText": "How many bits make up one Byte?",
        "optionA": "2 bits",
        "optionB": "4 bits",
        "optionC": "8 bits",
        "optionD": "100 bits",
        "correctOption": "C",
        "subConcept": "Units of Memory",
        "explanation": "1 Byte equals 8 bits. A single Byte can store one character of text (such as the letter 'A').",
        "remediationTip": "Remember: 8 bits = 1 Byte."
      },
      {
        "id": "q-ict-sto-4",
        "quizId": "quiz-jhs1-ict-storagedevices",
        "questionText": "Which of the following is a portable secondary storage device?",
        "optionA": "USB Flash Drive",
        "optionB": "CPU Chip",
        "optionC": "Motherboard",
        "optionD": "Power Supply Unit",
        "correctOption": "A",
        "subConcept": "Secondary Storage Devices",
        "explanation": "A USB flash drive is small, light, and portable, allowing students to carry school files anywhere.",
        "remediationTip": "Flash drives and memory cards are portable secondary storage."
      },
      {
        "id": "q-ict-sto-5",
        "quizId": "quiz-jhs1-ict-storagedevices",
        "questionText": "Arrange these storage units from smallest to largest:",
        "optionA": "Gigabyte → Megabyte → Kilobyte",
        "optionB": "Kilobyte → Megabyte → Gigabyte",
        "optionC": "Gigabyte → Kilobyte → Megabyte",
        "optionD": "Megabyte → Gigabyte → Kilobyte",
        "correctOption": "B",
        "subConcept": "Storage Hierarchy",
        "explanation": "Kilobyte (KB) is smallest (~1,000 bytes), Megabyte (MB) is next (~1,000 KB), and Gigabyte (GB) is largest (~1,000 MB).",
        "remediationTip": "KB < MB < GB < TB."
      }
    ]
  },

  // Topic 8: Operating Systems & GUI
  "jhs1-ict-t8-operatingsystems": {
    "id": "quiz-jhs1-ict-operatingsystems",
    "topicId": "jhs1-ict-t8-operatingsystems",
    "title": "Operating Systems & Desktop Interface Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-os-1",
        "quizId": "quiz-jhs1-ict-operatingsystems",
        "questionText": "An Operating System is responsible for:",
        "optionA": "Cleaning the physical dust off the keyboard",
        "optionB": "Managing computer hardware, memory, and running applications",
        "optionC": "Charging the laptop battery without electricity",
        "optionD": "Printing documents without using paper",
        "correctOption": "B",
        "subConcept": "Role of an Operating System",
        "explanation": "The OS is the master software that controls hardware and provides an environment for apps to run.",
        "remediationTip": "The OS manages hardware and programs."
      },
      {
        "id": "q-ict-os-2",
        "quizId": "quiz-jhs1-ict-operatingsystems",
        "questionText": "Which of the following is an operating system used on smartphones?",
        "optionA": "Microsoft Word",
        "optionB": "Google Android",
        "optionC": "Google Chrome",
        "optionD": "VLC Media Player",
        "correctOption": "B",
        "subConcept": "Mobile Operating Systems",
        "explanation": "Google Android is the popular mobile operating system used on millions of smartphones worldwide.",
        "remediationTip": "Android and iOS are mobile operating systems."
      },
      {
        "id": "q-ict-os-3",
        "quizId": "quiz-jhs1-ict-operatingsystems",
        "questionText": "The small clickable pictures displayed on the computer desktop are called:",
        "optionA": "Buttons",
        "optionB": "Icons",
        "optionC": "Pixels",
        "optionD": "Cables",
        "correctOption": "B",
        "subConcept": "Desktop Icons",
        "explanation": "Icons are graphic pictures on the desktop representing programs, folders, and files.",
        "remediationTip": "Desktop icons represent files, folders, and programs."
      },
      {
        "id": "q-ict-os-4",
        "quizId": "quiz-jhs1-ict-operatingsystems",
        "questionText": "What is the primary purpose of creating folders on a computer?",
        "optionA": "To change the screen brightness",
        "optionB": "To group and organize related files neatly",
        "optionC": "To format the hard drive",
        "optionD": "To install computer games automatically",
        "correctOption": "B",
        "subConcept": "Folders and File Management",
        "explanation": "Folders are electronic containers used to organize documents, photos, and assignments in order.",
        "remediationTip": "Folders organize files like folders in a filing cabinet."
      },
      {
        "id": "q-ict-os-5",
        "quizId": "quiz-jhs1-ict-operatingsystems",
        "questionText": "The long bar located at the bottom of the Windows desktop screen is called the:",
        "optionA": "Menu Bar",
        "optionB": "Taskbar",
        "optionC": "Scroll Bar",
        "optionD": "Title Bar",
        "correctOption": "B",
        "subConcept": "The Taskbar",
        "explanation": "The Taskbar sits at the bottom of the screen, holding the Start button, open program icons, and the clock.",
        "remediationTip": "The bar along the bottom of the screen is the Taskbar."
      }
    ]
  },

  // Topic 9: Keyboarding & Mouse Skills
  "jhs1-ict-t9-keyboarding": {
    "id": "quiz-jhs1-ict-keyboarding",
    "topicId": "jhs1-ict-t9-keyboarding",
    "title": "Keyboarding & Mouse Skills Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-key-1",
        "quizId": "quiz-jhs1-ict-keyboarding",
        "questionText": "The standard layout of letters on a computer keyboard is known as:",
        "optionA": "ABCDEF",
        "optionB": "QWERTY",
        "optionC": "PASCAL",
        "optionD": "AZERTY",
        "correctOption": "B",
        "subConcept": "QWERTY Keyboard Layout",
        "explanation": "QWERTY is named after the first six letters along the top row of the keyboard.",
        "remediationTip": "Check the first six letter keys: Q-W-E-R-T-Y."
      },
      {
        "id": "q-ict-key-2",
        "quizId": "quiz-jhs1-ict-keyboarding",
        "questionText": "Which keys make up the Home Row for the left hand in touch typing?",
        "optionA": "Q, W, E, R",
        "optionB": "A, S, D, F",
        "optionC": "Z, X, C, V",
        "optionD": "1, 2, 3, 4",
        "correctOption": "B",
        "subConcept": "Home Row Keys",
        "explanation": "In touch typing, the left-hand fingers rest on A, S, D, and F.",
        "remediationTip": "Left hand Home Row = A, S, D, F."
      },
      {
        "id": "q-ict-key-3",
        "quizId": "quiz-jhs1-ict-keyboarding",
        "questionText": "Why are there small raised bumps on the 'F' and 'J' keys?",
        "optionA": "To make the keyboard look attractive",
        "optionB": "To help typists locate the Home Row by touch without looking down",
        "optionC": "They are manufacturing defects",
        "optionD": "To show where to click the mouse",
        "correctOption": "B",
        "subConcept": "Home Row Tactile Bumps",
        "explanation": "The bumps on F (left index finger) and J (right index finger) provide physical cues for finger placement.",
        "remediationTip": "Bumps on F and J guide index fingers to the home row."
      },
      {
        "id": "q-ict-key-4",
        "quizId": "quiz-jhs1-ict-keyboarding",
        "questionText": "Which key deletes letters to the LEFT of the blinking cursor?",
        "optionA": "Delete Key",
        "optionB": "Backspace Key",
        "optionC": "Enter Key",
        "optionD": "Shift Key",
        "correctOption": "B",
        "subConcept": "Backspace Key",
        "explanation": "Backspace removes characters to the left of the cursor; Delete removes characters to the right.",
        "remediationTip": "Backspace deletes backward (left); Delete deletes forward (right)."
      },
      {
        "id": "q-ict-key-5",
        "quizId": "quiz-jhs1-ict-keyboarding",
        "questionText": "To open a program or folder on the desktop with a mouse, you should:",
        "optionA": "Single right-click",
        "optionB": "Double left-click quickly",
        "optionC": "Press the spacebar twice",
        "optionD": "Drag the mouse across the pad without clicking",
        "correctOption": "B",
        "subConcept": "Mouse Double-Click",
        "explanation": "Double-clicking the left mouse button quickly opens an application or folder.",
        "remediationTip": "Double-click to open folders and apps."
      }
    ]
  },

  // Topic 10: Word Processing Basics
  "jhs1-ict-t10-wordprocessing": {
    "id": "quiz-jhs1-ict-wordprocessing",
    "topicId": "jhs1-ict-t10-wordprocessing",
    "title": "Word Processing Basics Quiz (NaCCA B7.2.1)",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-wp-1",
        "quizId": "quiz-jhs1-ict-wordprocessing",
        "questionText": "Which of the following is a word processing application?",
        "optionA": "Microsoft Word",
        "optionB": "Microsoft Excel",
        "optionC": "Windows Media Player",
        "optionD": "Calculator",
        "correctOption": "A",
        "subConcept": "Word Processing Software",
        "explanation": "Microsoft Word is designed specifically for creating, editing, and printing text documents.",
        "remediationTip": "Microsoft Word and Google Docs are word processors."
      },
      {
        "id": "q-ict-wp-2",
        "quizId": "quiz-jhs1-ict-wordprocessing",
        "questionText": "What does the keyboard shortcut 'Ctrl + C' do?",
        "optionA": "Cuts the text",
        "optionB": "Copies selected text to memory",
        "optionC": "Closes the computer",
        "optionD": "Cancels the document",
        "correctOption": "B",
        "subConcept": "Copy Command",
        "explanation": "Ctrl + C copies the highlighted text to the clipboard while leaving the original in place.",
        "remediationTip": "Ctrl + C = Copy."
      },
      {
        "id": "q-ict-wp-3",
        "quizId": "quiz-jhs1-ict-wordprocessing",
        "questionText": "Which command inserts copied or cut text into a new location?",
        "optionA": "Cut",
        "optionB": "Paste (Ctrl + V)",
        "optionC": "Undo",
        "optionD": "Select All",
        "correctOption": "B",
        "subConcept": "Paste Command",
        "explanation": "Ctrl + V (Paste) inserts whatever was copied or cut into the spot where the cursor is blinking.",
        "remediationTip": "Copy or Cut first, then Paste (Ctrl + V)."
      },
      {
        "id": "q-ict-wp-4",
        "quizId": "quiz-jhs1-ict-wordprocessing",
        "questionText": "If you make a typing mistake or delete something by accident, which command undoes the action?",
        "optionA": "Ctrl + Z (Undo)",
        "optionB": "Ctrl + P",
        "optionC": "Ctrl + S",
        "optionD": "Ctrl + O",
        "correctOption": "A",
        "subConcept": "Undo Command",
        "explanation": "Ctrl + Z (Undo) cancels your most recent action, restoring the document to how it was.",
        "remediationTip": "Ctrl + Z = Undo your last mistake."
      },
      {
        "id": "q-ict-wp-5",
        "quizId": "quiz-jhs1-ict-wordprocessing",
        "questionText": "Before changing the size or color of a word in MS Word, what must you do first?",
        "optionA": "Shut down the computer",
        "optionB": "Highlight or select the word",
        "optionC": "Print the document",
        "optionD": "Turn off the monitor",
        "correctOption": "B",
        "subConcept": "Selecting Text",
        "explanation": "You must select or highlight text first so the computer knows which words to change.",
        "remediationTip": "Always select the text first before formatting."
      }
    ]
  },

  // Topic 11: Document Formatting
  "jhs1-ict-t11-documentformatting": {
    "id": "quiz-jhs1-ict-documentformatting",
    "topicId": "jhs1-ict-t11-documentformatting",
    "title": "Document Formatting Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-fmt-1",
        "quizId": "quiz-jhs1-ict-documentformatting",
        "questionText": "Which formatting feature makes typed letters thicker and darker for emphasis?",
        "optionA": "Italics",
        "optionB": "Bold (Ctrl + B)",
        "optionC": "Underline",
        "optionD": "Subscript",
        "correctOption": "B",
        "subConcept": "Bold Formatting",
        "explanation": "Bold (Ctrl + B) darkens and thickens text to highlight key points.",
        "remediationTip": "Ctrl + B = Bold text."
      },
      {
        "id": "q-ict-fmt-2",
        "quizId": "quiz-jhs1-ict-documentformatting",
        "questionText": "Which text alignment should you use to position the title of an essay right in the middle of the page?",
        "optionA": "Align Left",
        "optionB": "Center Alignment (Ctrl + E)",
        "optionC": "Align Right",
        "optionD": "Justify",
        "correctOption": "B",
        "subConcept": "Center Alignment",
        "explanation": "Center alignment positions text evenly between the left and right margins, perfect for headings.",
        "remediationTip": "Center alignment (Ctrl + E) is best for titles and headings."
      },
      {
        "id": "q-ict-fmt-3",
        "quizId": "quiz-jhs1-ict-documentformatting",
        "questionText": "Which type of list is best for writing a step-by-step science experiment where order matters?",
        "optionA": "Bulleted list",
        "optionB": "Numbered list (1, 2, 3...)",
        "optionC": "Random list",
        "optionD": "Table of figures",
        "correctOption": "B",
        "subConcept": "Numbered Lists",
        "explanation": "Numbered lists (1, 2, 3) are used when sequence and step-by-step order are important.",
        "remediationTip": "Numbered lists indicate order; bulleted lists are for unordered items."
      },
      {
        "id": "q-ict-fmt-4",
        "quizId": "quiz-jhs1-ict-documentformatting",
        "questionText": "In a table, what is the little box where a horizontal row meets a vertical column called?",
        "optionA": "Frame",
        "optionB": "Cell",
        "optionC": "Folder",
        "optionD": "Icon",
        "correctOption": "B",
        "subConcept": "Table Cells",
        "explanation": "The intersection of a row and a column forms a Cell.",
        "remediationTip": "Each box in a table is called a Cell."
      },
      {
        "id": "q-ict-fmt-5",
        "quizId": "quiz-jhs1-ict-documentformatting",
        "questionText": "How many total cells are there in a table with 3 columns and 4 rows?",
        "optionA": "7 cells",
        "optionB": "12 cells",
        "optionC": "1 cell",
        "optionD": "14 cells",
        "correctOption": "B",
        "subConcept": "Calculating Table Cells",
        "explanation": "Total cells = Columns × Rows = 3 × 4 = 12 cells.",
        "remediationTip": "Multiply columns by rows to find total cells."
      }
    ]
  },

  // Topic 12: Electronic Spreadsheets
  "jhs1-ict-t12-internetbasics": {
    "id": "quiz-jhs1-ict-spreadsheets",
    "topicId": "jhs1-ict-t12-internetbasics",
    "title": "Electronic Spreadsheets (Excel) Quiz (NaCCA B7.2.3)",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-ss-1",
        "quizId": "quiz-jhs1-ict-spreadsheets",
        "questionText": "Which software application is used to organize numbers and calculate math in rows and columns?",
        "optionA": "Microsoft Word",
        "optionB": "Microsoft Excel (Spreadsheet)",
        "optionC": "Paint",
        "optionD": "Media Player",
        "correctOption": "B",
        "subConcept": "Spreadsheet Software",
        "explanation": "Microsoft Excel is an electronic spreadsheet application designed for calculations and data tables.",
        "remediationTip": "Excel = Spreadsheets and numerical calculations."
      },
      {
        "id": "q-ict-ss-2",
        "quizId": "quiz-jhs1-ict-spreadsheets",
        "questionText": "In a spreadsheet, columns are identified by:",
        "optionA": "Numbers (1, 2, 3...)",
        "optionB": "Letters (A, B, C...)",
        "optionC": "Symbols (*, #, $...)",
        "optionD": "Colors",
        "correctOption": "B",
        "subConcept": "Spreadsheet Columns",
        "explanation": "Columns run vertically and are identified by letters (A, B, C, etc.).",
        "remediationTip": "Columns = Letters (A, B, C); Rows = Numbers (1, 2, 3)."
      },
      {
        "id": "q-ict-ss-3",
        "quizId": "quiz-jhs1-ict-spreadsheets",
        "questionText": "What is the cell address of the box located in Column B and Row 4?",
        "optionA": "4B",
        "optionB": "B4",
        "optionC": "Row B",
        "optionD": "Col 4",
        "correctOption": "B",
        "subConcept": "Cell References",
        "explanation": "Cell addresses always write the column letter first followed by the row number: B4.",
        "remediationTip": "Column Letter + Row Number = B4."
      },
      {
        "id": "q-ict-ss-4",
        "quizId": "quiz-jhs1-ict-spreadsheets",
        "questionText": "Every formula in Microsoft Excel must begin with which symbol?",
        "optionA": "A plus sign (+)",
        "optionB": "An equal sign (=)",
        "optionC": "A hashtag (#)",
        "optionD": "A question mark (?)",
        "correctOption": "B",
        "subConcept": "Spreadsheet Formulas",
        "explanation": "Excel recognizes a calculation formula only when it begins with an equal sign (=).",
        "remediationTip": "Formulas always start with '='."
      },
      {
        "id": "q-ict-ss-5",
        "quizId": "quiz-jhs1-ict-spreadsheets",
        "questionText": "The cell that is currently selected and outlined with a bold border in Excel is called the:",
        "optionA": "Active Cell",
        "optionB": "Closed Cell",
        "optionC": "Hidden Cell",
        "optionD": "Deleted Cell",
        "correctOption": "A",
        "subConcept": "Active Cell",
        "explanation": "The active cell is the highlighted box ready for you to type data into.",
        "remediationTip": "The currently selected cell is the Active Cell."
      }
    ]
  },

  // Topic 13: Computer Networks
  "jhs1-ict-t13-email": {
    "id": "quiz-jhs1-ict-networks",
    "topicId": "jhs1-ict-t13-email",
    "title": "Computer Networks Quiz (NaCCA B7.3.1)",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-net-1",
        "quizId": "quiz-jhs1-ict-networks",
        "questionText": "A computer network is defined as:",
        "optionA": "A single laptop with no internet",
        "optionB": "Two or more computers connected together to share resources and communicate",
        "optionC": "A monitor connected to a keyboard",
        "optionD": "A printer unplugged from power",
        "correctOption": "B",
        "subConcept": "Definition of Computer Network",
        "explanation": "Connecting multiple computers allows sharing files, sharing printers, and communicating.",
        "remediationTip": "Two or more computers linked together form a network."
      },
      {
        "id": "q-ict-net-2",
        "quizId": "quiz-jhs1-ict-networks",
        "questionText": "What does the abbreviation 'LAN' stand for?",
        "optionA": "Large Area Network",
        "optionB": "Local Area Network",
        "optionC": "Line Access Node",
        "optionD": "Long Aerial Network",
        "correctOption": "B",
        "subConcept": "Local Area Network (LAN)",
        "explanation": "LAN stands for Local Area Network, which connects computers in a small room, home, or school lab.",
        "remediationTip": "LAN = Local Area Network (single room or school building)."
      },
      {
        "id": "q-ict-net-3",
        "quizId": "quiz-jhs1-ict-networks",
        "questionText": "The largest Wide Area Network (WAN) in the world that connects countries is the:",
        "optionA": "School LAN",
        "optionB": "The Internet",
        "optionC": "Bluetooth",
        "optionD": "Hard drive",
        "correctOption": "B",
        "subConcept": "Wide Area Network (WAN)",
        "explanation": "The Internet is the global network connecting millions of computers worldwide.",
        "remediationTip": "The Internet is the world's largest WAN."
      },
      {
        "id": "q-ict-net-4",
        "quizId": "quiz-jhs1-ict-networks",
        "questionText": "Which network topology connects all computers to a single central device (a switch or hub)?",
        "optionA": "Bus Topology",
        "optionB": "Star Topology",
        "optionC": "Ring Topology",
        "optionD": "Mesh Topology",
        "correctOption": "B",
        "subConcept": "Star Topology",
        "explanation": "In a Star topology, all devices link to a central hub. If one computer cable fails, the rest stay online.",
        "remediationTip": "Star topology connects everyone to a central switch/hub."
      },
      {
        "id": "q-ict-net-5",
        "quizId": "quiz-jhs1-ict-networks",
        "questionText": "What is a major benefit of networking computers in a school laboratory?",
        "optionA": "Computers do not need electricity",
        "optionB": "All 30 computers can share a single printer",
        "optionC": "Keyboards become unnecessary",
        "optionD": "Monitors turn into tablets",
        "correctOption": "B",
        "subConcept": "Benefits of Networking",
        "explanation": "Networking saves money by sharing hardware resources like printers and internet connections.",
        "remediationTip": "Networks let multiple computers share one printer."
      }
    ]
  },

  // Topic 14: Internet & Cyber Safety
  "jhs1-ict-t14-cybersecurity": {
    "id": "quiz-jhs1-ict-internetandsecurity",
    "topicId": "jhs1-ict-t14-cybersecurity",
    "title": "Internet & Safe Digital Living Quiz",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-sec-1",
        "quizId": "quiz-jhs1-ict-internetandsecurity",
        "questionText": "Which of the following is a Web Browser used to visit websites?",
        "optionA": "Google Chrome",
        "optionB": "Microsoft Word",
        "optionC": "Calculator",
        "optionD": "Excel",
        "correctOption": "A",
        "subConcept": "Web Browsers",
        "explanation": "Google Chrome, Microsoft Edge, and Safari are web browsers used to view pages on the World Wide Web.",
        "remediationTip": "Chrome and Edge are web browsers."
      },
      {
        "id": "q-ict-sec-2",
        "quizId": "quiz-jhs1-ict-internetandsecurity",
        "questionText": "Which of the following makes the STRONGEST password?",
        "optionA": "123456",
        "optionB": "password",
        "optionC": "kofi2012",
        "optionD": "Gh@na#2026!",
        "correctOption": "D",
        "subConcept": "Strong Passwords",
        "explanation": "A strong password contains at least 8 characters and mixes uppercase, lowercase, numbers, and special symbols.",
        "remediationTip": "Mix capital letters, small letters, numbers, and symbols."
      },
      {
        "id": "q-ict-sec-3",
        "quizId": "quiz-jhs1-ict-internetandsecurity",
        "questionText": "If someone sends you a message claiming your MoMo account is blocked and asking for your secret PIN, what should you do?",
        "optionA": "Reply immediately with your secret PIN",
        "optionB": "Ignore the message and never share your PIN, because it is a phishing scam",
        "optionC": "Forward it to all your classmates",
        "optionD": "Post your PIN on WhatsApp",
        "correctOption": "B",
        "subConcept": "Phishing Scams",
        "explanation": "Phishing scams trick people into giving away private passwords and PINs. Real banks never ask for secret PINs.",
        "remediationTip": "Never share your secret PIN with anyone."
      },
      {
        "id": "q-ict-sec-4",
        "quizId": "quiz-jhs1-ict-internetandsecurity",
        "questionText": "In internet etiquette (Netiquette), typing messages in ALL CAPITAL LETTERS is considered rude because:",
        "optionA": "It uses too much internet data",
        "optionB": "It looks like you are screaming or shouting in anger",
        "optionC": "The computer will shut down",
        "optionD": "It changes your screen color",
        "correctOption": "B",
        "subConcept": "Netiquette",
        "explanation": "Typing in all caps is seen as online shouting and is bad manners.",
        "remediationTip": "All caps = Shouting online."
      },
      {
        "id": "q-ict-sec-5",
        "quizId": "quiz-jhs1-ict-internetandsecurity",
        "questionText": "What country code domain extension belongs to websites registered in Ghana?",
        "optionA": ".us",
        "optionB": ".gh",
        "optionC": ".uk",
        "optionD": ".ng",
        "correctOption": "B",
        "subConcept": "Country Domain Codes",
        "explanation": ".gh is the official country domain code for Ghana (e.g., ges.gov.gh).",
        "remediationTip": "Ghana websites end with .gh."
      }
    ]
  },

  // Topic 15: Algorithms & Flowcharts
  "jhs1-ict-t15-algorithms": {
    "id": "quiz-jhs1-ict-algorithms",
    "topicId": "jhs1-ict-t15-algorithms",
    "title": "Computational Thinking & Algorithms Quiz (NaCCA B7.4.1)",
    "timeLimitMinutes": 10,
    "passScorePercentage": 60,
    "questions": [
      {
        "id": "q-ict-alg-1",
        "quizId": "quiz-jhs1-ict-algorithms",
        "questionText": "An algorithm is best defined as:",
        "optionA": "A broken computer cable",
        "optionB": "A clear, step-by-step set of instructions to solve a problem",
        "optionC": "A type of printer toner",
        "optionD": "A keyboard shortcut",
        "correctOption": "B",
        "subConcept": "Definition of Algorithm",
        "explanation": "An algorithm is a step-by-step recipe or procedure for solving a problem.",
        "remediationTip": "Think of an algorithm as a step-by-step recipe."
      },
      {
        "id": "q-ict-alg-2",
        "quizId": "quiz-jhs1-ict-algorithms",
        "questionText": "Which shape represents the START or STOP of a flowchart?",
        "optionA": "Rectangle",
        "optionB": "Oval",
        "optionC": "Diamond",
        "optionD": "Parallelogram",
        "correctOption": "B",
        "subConcept": "Terminal Symbol",
        "explanation": "An Oval is the terminal symbol used for Start and Stop.",
        "remediationTip": "Oval = Start and Stop."
      },
      {
        "id": "q-ict-alg-3",
        "quizId": "quiz-jhs1-ict-algorithms",
        "questionText": "Which flowchart shape is used for math calculations or process steps (like 'Total = A + B')?",
        "optionA": "Rectangle",
        "optionB": "Oval",
        "optionC": "Diamond",
        "optionD": "Circle",
        "correctOption": "A",
        "subConcept": "Process Symbol",
        "explanation": "A Rectangle represents a process, action, or calculation.",
        "remediationTip": "Rectangle = Process and calculations."
      },
      {
        "id": "q-ict-alg-4",
        "quizId": "quiz-jhs1-ict-algorithms",
        "questionText": "Which flowchart shape is used to ask a Yes/No question (a Decision)?",
        "optionA": "Rectangle",
        "optionB": "Diamond",
        "optionC": "Parallelogram",
        "optionD": "Arrow",
        "correctOption": "B",
        "subConcept": "Decision Symbol",
        "explanation": "A Diamond represents a decision with two branch paths (Yes or No).",
        "remediationTip": "Diamond = Decision with Yes/No paths."
      },
      {
        "id": "q-ict-alg-5",
        "quizId": "quiz-jhs1-ict-algorithms",
        "questionText": "Which flowchart shape represents Input (e.g. entering a student's mark) or Output (e.g. showing the grade)?",
        "optionA": "Oval",
        "optionB": "Parallelogram",
        "optionC": "Square",
        "optionD": "Circle",
        "correctOption": "B",
        "subConcept": "Input/Output Symbol",
        "explanation": "A Parallelogram represents Input and Output operations in a flowchart.",
        "remediationTip": "Parallelogram = Input and Output."
      }
    ]
  }
};
