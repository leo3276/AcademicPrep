// Ghanaian SHS Visual Arts — Photography
// WASSCE Visual Arts workroom syllabus across SHS 1, SHS 2 and SHS 3
// Textbook-grade notes, studio procedure with method marks, and WASSCE-standard quizzes

import { CurriculumTopic } from './types';

export const SHS_PHOTOGRAPHY_TOPICS: CurriculumTopic[] = [
  {
    "id": "shs1-ph-t1-camera-types-parts-care",
    "subjectId": "photography",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 1,
    "title": "The Camera: Types, Parts and Care",
    "description": "A grounded tour of the cameras a Ghanaian SHS pupil meets, from the pinhole and compact through DSLR and mirrorless to medium format, with every part named and explained, then the cleaning, humidity and handling discipline that keeps school equipment alive through the rainy season.",
    "isFreeTrial": true,
    "isVip": false,
    "keyNotes": "• A camera is a light-tight box with one small hole, a lens to focus the light, a shutter to time it and a surface, film or sensor, to record it; every type is a different arrangement of the same four ideas.\n• The pinhole camera has no lens at all: a tiny hole, about 0.3 mm, gives infinite depth of field but needs seconds of exposure, so it teaches the camera obscura rather than fast work.\n• A compact camera has a fixed lens and built-in flash, is pocketable, and is the honest choice for a first documentary shoot because it is quiet and unobtrusive.\n• An SLR or DSLR has a mirror that throws the lens image up into an optical viewfinder; press the shutter, the mirror flips up, and you briefly lose the view.\n• A mirrorless camera drops the mirror and shows a live electronic view; it is lighter, shows exposure in the finder, and drains battery faster than a DSLR.\n• Medium format, such as 120 roll-film backs or a digital medium-format body, carries a larger image area than 35 mm, giving finer grain or higher resolution for big prints.\n• The body holds the film plane or sensor square and flat behind the lens mount; any tilt of that plane spoils focus across the frame.\n• The lens is judged by focal length in mm (angle of view) and maximum aperture; a 50 mm on 35 mm is called normal because its angle of view matches the eye.\n• The aperture is an iris of blades that sets how much light passes and how deep the sharp zone is; the shutter is a curtain or leaf that sets how long light passes.\n• Focus may be manual, a ring you turn, or autofocus, single-shot for stills and continuous for movement; half-press starts it on most bodies.\n• The viewfinder, optical or electronic, frames the picture; a waist-level hood on medium format shows an image that is laterally reversed.\n• The hot shoe on top takes an external flash, and the sync socket or contacts fire it; a PC socket is the older cable connection.\n• Cleaning: blower first, then a soft brush, then a slightly damp lens cloth in a spiral from the centre; never a shirt corner and never solvent on coated glass unless told to.\n• Storage in Ghana means fighting humidity: keep bodies and lenses in a dry cabinet or a sealed box with silica gel beads, never in a padded case left in a humid store room, and take the batteries out for long storage.\n• Handling discipline: strap over the neck or wrist, cap on and off only when needed, lens changes with the body facing down, and the camera is never set down lens-first on sand or dust.",
    "detailedNotes": {
      "overview": "This first photography lesson puts a name on every part of the camera you will use all through the course and explains why the many types, pinhole, compact, SLR, DSLR, mirrorless and medium format, are really the same box dressed differently. You will learn the lens, shutter, aperture, focus, viewfinder, image plane and hot shoe as working parts rather than labels on a diagram, and then the less glamorous half of the subject: cleaning, humidity control with silica gel, storage and careful handling. In a school with a shared kit and a long wet season, care is not politeness but survival, and WASSCE Paper 3 records how you handle equipment.",
      "introduction": "Start by handling the real things. Pass the class camera collection round and say each part aloud, mount, viewfinder, shutter dial, hot shoe, so the vocabulary sticks to a physical object and not to a textbook picture. Take one pinhole or a simple lens camera and expose a roll through it so the box, the hole and the timed light make sense in your hands. Then build one habit that lasts the term: never put a camera down without thinking where the lens will point and what the sensor will gather.",
      "realWorldContext": "In Accra and Kumasi the cameras a pupil will actually meet range from the cheap compact sold in the Makola and Kejetia electronics stalls, through a borrowed DSLR in a school photography club, to the medium-format and studio cameras hired by portrait shops along Spintex Road for wedding and passport work. Harmattan dust in December and heavy humidity in the rainy months are the two real enemies of a Ghanaian kit, which is why shops keep a dry cabinet or a box of blue silica gel beads beside every body, and why a photographer who leaves a lens in a padded case over the wet season comes back to fungus in the coating that no cloth will lift.",
      "objectives": [
        "Name the main camera types and state one advantage and one limitation of each",
        "Identify the body, lens mount, shutter, aperture, focus control, viewfinder, image plane and hot shoe on any camera",
        "Explain how focal length and maximum aperture describe a lens and what normal, wide and tele mean",
        "Carry out correct cleaning of a lens and sensor-facing parts without damaging coatings",
        "Set out a humidity-safe storage routine using silica gel and describe the handling habits that protect the kit"
      ],
      "sections": [
        {
          "title": "The Family of Camera Types",
          "content": "Every camera is a light-tight box with a hole, a lens to gather the light through that hole, a shutter to time how long the light is admitted, and a recording surface to catch it. A pinhole camera removes the lens entirely and lets light through a hole some three tenths of a millimetre; the image is soft-edged, everything from foreground to horizon is equally sharp, and exposure runs to seconds, so the pinhole is a teaching tool for the camera obscura rather than a working camera. The compact adds a small fixed lens and a built-in flash, fits a pocket and is quiet, which makes it the natural first documentary camera. The SLR or DSLR places a mirror behind the lens that bounces the image up into an optical viewfinder, so what you frame is exactly what the lens sees; when you press the shutter the mirror swings up and the view blanks for an instant. Mirrorless removes the mirror and shows a live electronic view, so it weighs less and previews your exposure in the finder, at the cost of battery. Medium format uses a bigger film or sensor than 35 mm, giving finer grain and cleaner enlargement when the picture must be printed large.",
          "bulletPoints": [
            "Pinhole: no lens, tiny 0.3 mm hole, infinite depth of field, exposures of seconds; teaches the camera obscura.",
            "Compact: fixed lens and built-in flash, quiet and pocketable, best for unobtrusive first reportage.",
            "SLR/DSLR: mirror to an optical viewfinder through the taking lens; view blanks as the mirror flips up.",
            "Mirrorless: no mirror, live electronic view, lighter and shows exposure in the finder but eats battery.",
            "Medium format: larger image area than 35 mm, finer grain and higher resolution for big exhibition prints."
          ],
          "keyTakeaway": "The types differ in mirror, sensor size and lens changeability, but all four jobs, gather, focus, time and record, are done by the same parts.",
          "realWorldExample": "A portrait studio in Kumasi keeps a 35 mm DSLR for fast event work yet rents a medium-format camera for wedding portraits and passport panels because the larger negative holds the skin tone and hair detail when the print is blown up past A3."
        },
        {
          "title": "Parts of the Body and the Lens",
          "content": "Hold any interchangeable-lens camera and find the mount, the ring of metal and contacts where the lens clicks on; behind it sits the film plane or sensor, a flat rectangle that must be square to the lens or focus will fall off across the frame. The lens itself is described by two numbers: focal length in millimetres, which sets the angle of view, and maximum aperture, which sets how much light it can pass. On a 35 mm body a 50 mm lens is called normal because it frames about what the eye attends to; shorter lengths, say 24 to 35 mm, are wide-angle and take in more of the scene, while longer lengths, 85 to 200 mm and up, are telephoto and bring distant subjects close. At the rear of the lens an iris of blades opens and closes to set the aperture. On top of the body the shutter dial or mode sets how long light is admitted, the focus switch selects manual or autofocus, and above the pentaprism the hot shoe carries an add-on flash, with an older sync socket for a cable.",
          "bulletPoints": [
            "Lens mount: metal ring and contacts; the sensor or film plane behind it must stay flat and square.",
            "Focal length in mm sets angle of view; 50 mm on 35 mm is normal, below is wide, above is telephoto.",
            "Aperture is an iris of blades in the lens that controls light and the depth of the sharp zone.",
            "Focus control may be a ring you turn or autofocus, single-shot for stills and continuous for movement.",
            "Hot shoe on top fires an external flash; a PC socket is the traditional cable sync connection."
          ],
          "keyTakeaway": "Learn the mount, plane, lens numbers, shutter, focus and hot shoe as physical landmarks so any camera brief becomes readable.",
          "realWorldExample": "A school club in Cape Coast is handed an old film SLR with no manual; the pupils map it by touch and name, finding the hot shoe, the film-speed dial and the aperture ring before shooting their first roll for the founder's day magazine."
        },
        {
          "title": "How the Image Is Recorded",
          "content": "The recording surface is the heart of the camera and it comes in two kinds. On a film body the image plane is a gate where a sheet or a length of coated film sits, held dead flat by a pressure plate, and a winding mechanism advances a fresh frame after each shot. On a digital body the plane is a sensor, usually CMOS, that turns light into charge read off as a picture file; a mirrorless or a point-and-shoot shows a live view straight from this sensor, while a DSLR bounces the light to the eye with a mirror that lifts just before exposure. Because the sensor on a cheaper digital camera is smaller than the 35 mm frame, a lens of the same focal length gives a narrower view, a difference described as the crop factor; knowing it stops a pupil blaming the lens when the picture looks too tight. Whichever plane is used, dust or fungus on it prints a dark spot on every frame, which is why the cleaning and storage habits in the next section matter to the image and not merely to the equipment.",
          "bulletPoints": [
            "Film bodies hold a sheet or roll in a gate pressed flat by a pressure plate and advanced one frame per shot.",
            "Digital bodies use a CMOS sensor that converts light to charge; the file is read from that plane.",
            "A DSLR routes light to the eye with a mirror; a mirrorless or compact reads the sensor live.",
            "A smaller sensor narrows the view of the same lens, the crop factor, so judge angle of view not the mm number alone.",
            "Any mark on the plane, dust or fungus, appears in the same spot on every single picture."
          ],
          "keyTakeaway": "The image plane, film gate or sensor, must be clean, flat and protected, because every fault on it repeats in every frame.",
          "realWorldExample": "An Accra wedding photographer switching from a full-frame body to a smaller-sensor camera finds the 50 mm lens suddenly frames like a short telephoto, the crop factor, and learns to carry a wider lens for cramped church interiors."
        },
        {
          "title": "Cleaning, Humidity and Handling Discipline",
          "content": "Ghana's climate, Harmattan dust in the dry season and driving humidity in the rains, attacks a camera from both ends, so the routine is fixed. Clean a lens by blowing off grit with a rubber blower, brushing the loose dust with a soft brush, then wiping with a microfibre cloth in a gentle spiral from the centre outwards; never use a shirt corner, which scratches, and never pour solvent on coated glass unless the cloth is barely damp and the coating is known safe. Never touch the sensor yourself unless trained; send the body for a professional clean or use a blower only. Storage is a war against moisture: keep bodies and lenses in a dry cabinet held near fifty per cent relative humidity, or, cheaply, in a sealed box with a generous quantity of colour-indicating silica gel beads that you regenerate in a low oven; a padded case forgotten in a humid store room grows lens fungus within a wet season. Take batteries out for long storage, store lenses front-element-down, keep the strap over a wrist or neck, change lenses with the body facing down so dust falls away from the open mount, and set the camera down never lens-first on sand or grit.",
          "bulletPoints": [
            "Blower, then soft brush, then a centre-out spiral with microfibre; never a shirt corner or running solvent.",
            "Do not touch the sensor unless trained; use a blower or book a professional clean.",
            "Store with silica gel or a dry cabinet near fifty per cent humidity to stop lens fungus in the rains.",
            "Remove batteries for long storage and rest lenses front-element-down on a clean surface.",
            "Strap on, change lenses body-down, and never set the camera lens-first onto sand or dust."
          ],
          "keyTakeaway": "Careful cleaning and dry storage are part of the photograph, because a scratched or fungus-clouded lens cannot be recovered by technique.",
          "realWorldExample": "A photography technician at a senior high school in Tamale keeps a tray of blue silica gel beads by the kit cupboard and bakes them each Friday, so the shared DSLRs come through the rainy season with clear glass and working contacts."
        }
      ],
      "commonMistakes": [
        "Wiping a dry, gritty lens with a cloth straight away, dragging the dust across the coating and cutting fine scratches; always blow and brush loose grit before the cloth touches glass.",
        "Storing a camera in a padded case in a humid Ghanaian store room for the wet season, returning to white fungus branching inside the lens that no surface clean will reach.",
        "Holding the camera by the popping-up lens barrel or setting it down lens-first on sandy ground, which scrapes the front element and stresses the focus mechanism.",
        "Touching the sensor with a finger or a tissue during a lens change, leaving an oil mark that prints as a smudge on every frame until a costly clean.",
        "Changing lenses in the open with the mount facing up, letting Harmattan dust fall straight into the body onto the mirror and plane.",
        "Blowing dust off with the mouth, spitting moisture and salts onto coated glass that dry into permanent spots."
      ],
      "wassceExamTips": [
        "Paper 1 objective items ask you to name parts from a diagram of a camera, so practise labelling mount, plane, shutter, aperture, focus, viewfinder and hot shoe until the terms are automatic.",
        "In Paper 2 a planning question may ask which camera type suits a brief; justify from angle of view, portability and low-light need, not from personal preference.",
        "Paper 3 practical records handling of materials: a marker notes whether the strap is used, the lens cap replaced, and the kit left clean and stored, so build the habit before the exam.",
        "When a question mentions storage, write both the hazard, humidity and fungus, and the control, dry cabinet or silica gel, to earn the method as well as the answer mark.",
        "Define normal lens exactly as about 50 mm on a 35 mm format, since the examiner looks for the format you are quoting and not the number alone."
      ],
      "summaryChecklist": [
        "Can I name six camera types and state one strength and one limitation of each?",
        "Can I point to the body, mount, image plane, shutter, aperture, focus, viewfinder and hot shoe on a real camera?",
        "Can I explain focal length and maximum aperture and say what normal, wide and telephoto mean on 35 mm?",
        "Can I demonstrate a lens-clean in the correct order without scratching the coating?",
        "Can I set out a humidity-safe storage routine for the Ghanaian wet season and justify each step?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-camera-types-1",
        "title": "Mapping the Parts of a Borrowed DSLR Before a First Shoot",
        "problem": "A school club is lent a film DSLR with no manual. Before wasting a roll, show how the pupils identify every working part and set it up for a daylight portrait of a teacher standing in the shade of a tree.",
        "stepByStepSolution": [
          "Step 1 (M1): Lay the camera on a clean table, strap clear, and with a blower remove dust from the mount, viewfinder and hot shoe before handling begins.",
          "Step 2 (M1): Locate and name the lens mount, then fit the 50 mm lens squarely until it clicks, keeping the body facing down so grit falls away from the open mount.",
          "Step 3 (M1): Find the image plane behind the mount and confirm nothing is loose in the gate; then trace the path of light to the mirror and up through the viewfinder.",
          "Step 4 (A1): Set the shutter and aperture to a sensible daylight starting point, checking the focus switch is on manual so the ring can be turned by hand.",
          "Step 5 (M1): Frame the teacher through the viewfinder, confirm the hot shoe is clear in case a flash is needed, and attach the strap to the neck for the exposure.",
          "Step 6 (A1): Focus on the eyes by turning the ring until they are crisp, then press the shutter smoothly and steadily to avoid knocking the framing.",
          "Step 7 (M1): Cap the lens, wind on, and after the shoot return the camera to the dry cabinet with the silica gel and the battery left in place."
        ],
        "keyTakeaway": "Naming the parts before exposing a film turns a mystery box into a tool and prevents the first roll from being lost to a wrong setting."
      },
      {
        "id": "ex-ph-camera-types-2",
        "title": "Rescuing a Lens from Humidity and Dust",
        "problem": "After one rainy season a club 35 mm lens is left in a closed padded case and now shows haze, with grit on the front element. Show a safe clean and a correct re-storage so the lens is usable again and will stay clear.",
        "stepByStepSolution": [
          "Step 1 (M1): Take the lens to a bright window and inspect through it, confirming that the haze sits on the coating rather than deep inside the barrel.",
          "Step 2 (M1): Use the rubber blower first to lift loose Harmattan grit, then a soft brush, so no particle is dragged by the cloth.",
          "Step 3 (A1): Wipe the front element with a clean microfibre cloth in a slow spiral from the centre to the rim, using light pressure and never a soaking wet cloth.",
          "Step 4 (M1): Inspect again at the window; surface haze should lift, but if the cloud is internal, mark the lens for a professional service rather than forcing it.",
          "Step 5 (M1): Blow dust from the mount and rear element, keeping the body of the camera pointed downward throughout the work.",
          "Step 6 (A1): Place the lens front-element-down in a sealed box with fresh colour-indicating silica gel, regenerating the beads by gentle warmth before use.",
          "Step 7 (M1): Log the date and the storage check so the kit is inspected again after every wet season instead of being abandoned in the case."
        ],
        "keyTakeaway": "Blow before you wipe, clean from the centre out, and store dry with silica gel, and a lens survives the Ghanaian rains without coating damage."
      }
    ],
    "quiz": {
      "id": "quiz-ph-camera-types",
      "topicId": "shs1-ph-t1-camera-types-parts-care",
      "title": "Camera Types, Parts and Care Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-camera-1",
          "quizId": "quiz-ph-camera-types",
          "questionText": "Which camera type uses a mirror behind the lens to throw the image up into an optical viewfinder?",
          "optionA": "A single-lens reflex (SLR or DSLR)",
          "optionB": "A pinhole camera",
          "optionC": "A simple compact camera",
          "optionD": "A medium-format waist-level camera",
          "correctOption": "A",
          "subConcept": "Camera types",
          "explanation": "The reflex camera is defined by the mirror that reflects the lens image to the eye-level finder and flips up at exposure. A pinhole has no lens or mirror, a compact reads its fixed lens directly, and a waist-level medium format shows the image on a ground-glass hood, not through a mirror to the eye.",
          "remediationTip": "Sketch a ray diagram of light in an SLR and in a mirrorless body and label where the mirror sits in only one of them."
        },
        {
          "id": "q-ph-camera-2",
          "quizId": "quiz-ph-camera-types",
          "questionText": "On a 35 mm camera, which focal length is normally described as a normal lens?",
          "optionA": "24 mm",
          "optionB": "50 mm",
          "optionC": "135 mm",
          "optionD": "300 mm",
          "correctOption": "B",
          "subConcept": "Lens description",
          "explanation": "About 50 mm on the 35 mm format gives an angle of view close to what the eye attends to, so it is called normal. 24 mm is a wide-angle and 135 mm or 300 mm are telephoto lengths, framing far narrower than the eye.",
          "remediationTip": "Line up a wide, normal and telephoto lens and note how the frame tightens as the millimetre number rises."
        },
        {
          "id": "q-ph-camera-3",
          "quizId": "quiz-ph-camera-types",
          "questionText": "What is the correct first step in cleaning a dusty lens before any cloth is used?",
          "optionA": "Rub the glass firmly with a shirt corner",
          "optionB": "Pour solvent directly onto the front element",
          "optionC": "Blow off the loose grit with a rubber blower",
          "optionD": "Wipe the lens with a dry paper tissue",
          "correctOption": "C",
          "subConcept": "Cleaning routine",
          "explanation": "Loose grit must be lifted by blower and brush before a cloth touches the coating, otherwise the particles are dragged into scratches. A shirt corner and paper tissue both scratch, and pouring solvent risks the coating and the barrel seals.",
          "remediationTip": "Practise the order blower, brush, then spiral wipe until it runs without thinking."
        },
        {
          "id": "q-ph-camera-4",
          "quizId": "quiz-ph-camera-types",
          "questionText": "Why must a camera kept through the Ghanaian rainy season be stored with silica gel?",
          "optionA": "To keep the battery permanently charged",
          "optionB": "To absorb moisture and prevent lens fungus",
          "optionC": "To make the body lighter to carry",
          "optionD": "To correct the white balance of the sensor",
          "correctOption": "B",
          "subConcept": "Storage and humidity",
          "explanation": "Silica gel draws moisture from a sealed box so the relative humidity falls below the level where fungus grows on lens coatings. It has no effect on battery charge, weight or white balance.",
          "remediationTip": "Explain the two-part answer, the hazard of humidity and the control of silica gel, whenever storage is asked."
        },
        {
          "id": "q-ph-camera-5",
          "quizId": "quiz-ph-camera-types",
          "questionText": "Which part on top of the body carries an external flash unit?",
          "optionA": "The lens mount",
          "optionB": "The pressure plate",
          "optionC": "The film gate",
          "optionD": "The hot shoe",
          "correctOption": "D",
          "subConcept": "Camera parts",
          "explanation": "The hot shoe is the bracket and electrical contacts on top of the body that holds and fires an add-on flash. The mount joins the lens, while the pressure plate and gate belong to the film plane behind the lens.",
          "remediationTip": "Point out the hot shoe and a lens mount on three different bodies until the locations are clear."
        }
      ]
    }
  },
  {
    "id": "shs1-ph-t1-composition-camera-handling",
    "subjectId": "photography",
    "level": "SHS 1",
    "term": 1,
    "orderIndex": 2,
    "title": "Composition and Camera Handling",
    "description": "How to hold and release a camera so the picture is sharp, then the core composition controls a beginner can apply at once: rule of thirds, headroom and looking room, leading lines, framing, viewpoint height, background control and a level horizon.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A sharp picture starts with a stable camera: brace both elbows against the body, grip under the lens, and press the shutter smoothly rather than jabbing it.\n• The stance is feet shoulder-width apart, one foot slightly forward, weight even; the classic cause of a soft picture at slow shutter speeds is a loose arm and a hard stab.\n• Breathe out gently as you press; holding a full breath rocks the upper body, and exhaling relaxes the shoulders for a steadier frame.\n• Use a faster shutter when hand-holding a long lens, roughly one over the focal length, so a 200 mm wants at least 1/200 s.\n• Composition is the deliberate arrangement of what is inside the frame; before you press, ask what the subject is and what can be left outside.\n• The rule of thirds divides the frame with two horizontal and two vertical lines; place the main subject or the horizon on a line, or on a crossing point, not dead centre.\n• Headroom is the space above a head; leave a little, never so much the subject sinks nor so little the crown is cut. Looking room is the wider space left in the direction the subject faces or moves.\n• Leading lines, a road, a fence, a row of maize beds, carry the eye into the picture towards the subject; place their start at a lower corner for the strongest pull.\n• Natural framing puts an arch, a window, palm fronds or a doorway round the subject to hold attention inside and add depth.\n• Viewpoint height changes meaning: eye level is neutral, a low angle makes a subject tall and powerful, a high angle looks down and can diminish or show a pattern.\n• A tilted horizon in a landscape reads as a mistake unless the lean is deliberate; sight along the frame edge and level it before releasing.\n• Background control means checking what sits behind the subject, a dustbin, a pole, a bright poster, and moving a step so nothing grows out of the head.\n• Get closer with your feet before reaching for zoom; crowding the frame removes clutter and makes the subject fill the picture.\n• A straight vertical in a building shot matters; keep the sensor plane upright so walls rise parallel instead of toppling backwards like a falling tower.\n• Cropping can rescue a weak frame in editing but cannot replace thinking in the viewfinder; compose on the spot for Paper 3.",
    "detailedNotes": {
      "overview": "Good photographs fail at two points: the hand and the eye. This lesson fixes the hand first, the grip, stance, breathing and smooth shutter release that keep an image sharp, then trains the eye with a small toolkit of composition rules a SHS 1 pupil can apply immediately, the rule of thirds, headroom and looking room, leading lines, framing, viewpoint height, background control and a level horizon. None of these is decoration; each one decides where the viewer looks first and how long the picture holds them. The handling habits are also marked in the practical, so they belong to technique and not to taste.",
      "introduction": "Practise the two halves separately. For handling, shoot the same static object at your slowest comfortable shutter speed and study the result for shake, then at a faster speed, and compare. For composition, work a single scene such as a market stall in six frames, moving for each rule, centred, on a third, low angle, high angle, with a leading line, with the background cleaned up. Review the six side by side and defend the best one to a partner; the argument is where the eye learns.",
      "realWorldContext": "These controls are visible in the work around you. A trotro photograph of passengers gains from looking room left in the direction the bus faces; a shot of the Independence Arch in Accra is most dignified from a low viewpoint that lets the columns rise straight rather than lean. Street photographers at Makola market keep one step moving so a bright plastic banner does not appear to sprout from a trader head, and they level the horizon along the stall roofs. A school sports picture of a runner on a Kumasi field works best when the athlete runs into the open space ahead of them, not into the cropped edge of the frame.",
      "objectives": [
        "Hold and release a camera with a stable grip, stance and breathing to avoid camera shake",
        "Apply the rule of thirds to place a subject and a horizon off the centre of the frame",
        "Control headroom and looking room in a portrait or moving-subject shot",
        "Use leading lines, framing and viewpoint height to direct the eye and set meaning",
        "Level the horizon, control the background and keep building verticals straight"
      ],
      "sections": [
        {
          "title": "Handling: Grip, Stance and Release",
          "content": "A blurred picture is usually a handling problem before it is a camera problem. Grip with the right hand on the body and the left underneath the lens, cradling its weight, then press both elbows into the ribs so the camera becomes part of your frame rather than a weight balanced on the end of an arm. Stand with feet shoulder-width apart and one foot slightly forward so the body is a steady tripod; a locked, one-foot lean is how pupils photograph from a vehicle and then blame the lens. The shutter should be squeezed, not stabbed, because a hard jab rocks the camera at the exact moment the mirror moves. Control the breath: a full inhalation tightens the shoulders and sways the torso, so let the air out gently as you press. Finally respect the hand-holding limit; as a rule of thumb use a shutter no slower than one over the focal length, so a 200 mm telephoto wants at least 1/200 s, and brace the lens against a wall or rest the camera on a surface when the light forces you slower.",
          "bulletPoints": [
            "Right hand on the body, left hand under the lens, both elbows braced into the ribs.",
            "Feet apart, one foot slightly forward, weight even; never balance a reach on one leg.",
            "Squeeze the shutter smoothly on the gentle out-breath; a jab transfers shake at the moment of exposure.",
            "Shutter speed at least one over the focal length when hand-holding; a 200 mm needs 1/200 s.",
            "When light forces a slow shutter, rest the camera on a wall, rail or knee for support."
          ],
          "keyTakeaway": "Sharpness is built from grip, stance, breath and a smooth press long before the aperture is chosen.",
          "realWorldExample": "A pupil shooting the school assembly in a dim hall in Ho braces the DSLR against the pew in front and exhales as the speaker pauses, so a 1/30 s frame stays sharp where a hand-held stab would have smeared it."
        },
        {
          "title": "The Rule of Thirds, Headroom and Looking Room",
          "content": "Composition begins by placing the subject away from the exact centre. Imagine the frame divided into nine by two horizontal and two vertical lines, the rule of thirds; the four crossings are the natural points of emphasis, so a face, a lone tree or a distant fisherman sits best on a line or a crossing rather than dead centre. On a landscape, lay the horizon on an upper or lower third instead of slicing the picture in half, giving weight to the more interesting band of land or sky. In a portrait, headroom is the gap above the hair, and it must be judged: too much pushes the subject down and leaves a void, too little clips the crown and looks accidental. When a subject faces sideways or moves, leave more space in the direction they look or travel, the looking room, so the eye has somewhere to go; a face pushed against the near edge feels cramped and about to leave the frame.",
          "bulletPoints": [
            "Divide the frame in nine; place the subject on a third line or at a crossing, not the exact centre.",
            "Put the horizon on an upper or lower third, never the middle split of the picture.",
            "Headroom is the space above the head; a little, and never enough to sink the subject or clip the crown.",
            "Looking room leaves the wider space in the direction a face turns or a subject moves.",
            "A subject moved into the near edge looks cramped, so shift them back along the third line."
          ],
          "keyTakeaway": "Off-centre placement plus the right headroom and looking room turns a snapshot into a composed picture.",
          "realWorldExample": "A market portrait at Kejetia places the trader's eyes on the upper-left third and leaves open room on the right where she looks, so the frame feels balanced instead of crowded against the edge."
        },
        {
          "title": "Leading Lines, Framing and Viewpoint Height",
          "content": "Lines inside a picture act as paths for the eye. A road, a fence, a drainage channel or a row of maize beds leads the viewer from the edge of the frame towards the subject, and the pull is strongest when the line starts at a lower corner and runs inward. Natural framing puts something around the subject, an arch, a window, a gap in palm fronds or a doorway, which holds attention inside the frame and adds a sense of depth between foreground and subject. Viewpoint height changes the meaning more than any lens: shooting at eye level is neutral and human, a low camera makes a person, a building or a tree loom tall and powerful, and a high camera looking down can diminish a subject or reveal a ground pattern that is invisible from standing height. A school photographer circling a subject and varying the height by even half a metre will return several different statements from the same scene.",
          "bulletPoints": [
            "Leading lines run from a frame edge inward and carry the eye toward the subject.",
            "Start a strong line at a lower corner for the deepest pull into the picture.",
            "Natural framing uses arches, windows, doors or foliage to hold attention and add depth.",
            "A low viewpoint enlarges and dignifies; a high viewpoint reduces or shows pattern.",
            "Eye level reads neutral and personal; change height deliberately, not by habit."
          ],
          "keyTakeaway": "Move your feet, find a line and pick a height, and the same subject gives you several distinct pictures.",
          "realWorldExample": "For a founder's day programme, a student crouches low at the end of a school corridor so the tiled floor and lockers form leading lines that run straight to the headmaster standing at the far end."
        },
        {
          "title": "Background, Horizon and Verticals",
          "content": "What sits behind the subject can ruin a careful frame. Before releasing, study the background through the viewfinder and shift your feet a step left or right so a pole, dustbin or bright poster does not appear to grow out of a head; a clean, slightly darker background makes the subject stand forward. In open scenes keep the horizon level, sighted along the top or bottom edge of the frame, because a casually tilted sea line reads as an error rather than a choice unless the lean is deliberate and small. In architecture and interiors, keep the camera sensor plane upright so walls rise as parallel verticals; tilting the body up makes them converge and the building looks as though it is falling backwards, an effect no beginner intends. Finally, crowd the frame: move in with your feet rather than trusting the zoom, cutting the clutter and letting the subject fill the picture, and treat cropping later only as a rescue of a frame you thought about properly on the spot.",
          "bulletPoints": [
            "Check the background before each shot and sidestep so nothing sprouts from the subject.",
            "Level the horizon by sighting along a frame edge; tilt only when it is a deliberate choice.",
            "Keep the body upright for buildings so verticals stay parallel and walls do not topple.",
            "Move closer on foot to crowd the frame and remove clutter before using the zoom.",
            "Crop as a last-minute rescue, not as a substitute for composing in the finder."
          ],
          "keyTakeaway": "A tidy background, a level horizon and honest verticals separate a considered photograph from a casual one.",
          "realWorldExample": "A photograph of the Kakum canopy walkway is composed with the far trees kept darker than the subject and the walkway line level, so visitors read it as calm depth rather than a tilted jumble of green."
        }
      ],
      "commonMistakes": [
        "Stabbing the shutter with a stiff arm and a full breath, giving a soft image at slow speeds; brace, exhale and squeeze instead.",
        "Placing every subject dead centre, which makes a flat, snapshot look; use the third lines and the crossings.",
        "Leaving too much headroom above a portrait, so the subject appears to sink under a blank strip of ceiling or sky.",
        "Facing a subject into the near edge of the frame with no looking room, so the picture feels cramped and about to be exited.",
        "Letting a cluttered or brightly coloured background sit directly behind the subject, so a pole or poster seems to grow from the head.",
        "Tilting the camera up at a building so all the verticals converge and the structure looks like it is falling over."
      ],
      "wassceExamTips": [
        "Paper 1 may show a frame and ask which composition rule is broken, so learn to name thirds, headroom, looking room, leading lines and a level horizon on sight.",
        "In Paper 2 planning, write the handling and framing you will use for the brief; naming a low viewpoint or a leading line earns method credit before the shoot.",
        "Paper 3 marks the finished frame: an examiner rewards a level horizon, a clean background and deliberate placement, so check all three in the finder before releasing.",
        "When you justify a picture, use the vocabulary, not it looks nice, but the eyes sit on the upper third and the road leads inward to the subject.",
        "Do not over-crop to hide a careless frame; compose at the scene because a cropped and enlarged picture loses quality on the presentation board."
      ],
      "summaryChecklist": [
        "Can I hold and release the camera with a braced grip, steady stance and smooth out-breath press?",
        "Can I place a subject and a horizon on the rule-of-thirds lines instead of the centre?",
        "Can I set correct headroom and looking room for a portrait and a moving subject?",
        "Can I find a leading line, a natural frame and a viewpoint height that suit a scene?",
        "Can I level the horizon, keep building verticals straight and clear the background before shooting?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-composition-1",
        "title": "A Sharp, Well-Placed Portrait at a Slow Shutter",
        "problem": "Inside a dim classroom in Cape Coast you must photograph a teacher at eye level using a borrowed lens on a body that cannot go faster than 1/30 s hand-held. Plan the handling and the composition so the picture is sharp and the subject is placed off centre.",
        "stepByStepSolution": [
          "Step 1 (M1): Grip with the right hand on the body and the left under the lens, drawing both elbows into the ribs to make the arms part of the frame.",
          "Step 2 (M1): Set the feet shoulder-width apart with one foot forward and rest the camera, or your braced elbow, against a solid desk to steady the slow 1/30 s exposure.",
          "Step 3 (M1): Frame so the teacher eyes fall on the upper third line rather than the centre, leaving a little headroom and more looking room in the direction she faces.",
          "Step 4 (A1): Study the background in the finder and shift a step so no window frame or bright poster appears to grow from her head.",
          "Step 5 (M1): Confirm focus on the nearest eye by half-pressing, then let the breath out gently and squeeze the shutter instead of stabbing it.",
          "Step 6 (A1): Check the playback for shake and for a level frame, and if the eyes are soft re-brace on the desk and repeat the release."
        ],
        "keyTakeaway": "A slow shutter is beaten by bracing and a smooth squeeze, while the eye of the teacher on a third line keeps the portrait composed."
      },
      {
        "id": "ex-ph-composition-2",
        "title": "Using a Leading Line and a Low Viewpoint for a School Building",
        "problem": "You must photograph the new block of classrooms so it looks tall and dignified, with the eye led into the frame and no falling-tower distortion. Plan the shot from stance to release.",
        "stepByStepSolution": [
          "Step 1 (M1): Walk to one end of the corridor or drive so the paving line starts at a lower corner of the frame and runs toward the building.",
          "Step 2 (M1): Crouch to a low viewpoint so the block looms and the columns rise, keeping the camera back level with the wall to hold the verticals parallel.",
          "Step 3 (A1): Place the main entrance on a lower third crossing and keep the roofline below the top edge so the building does not look cut.",
          "Step 4 (M1): Move the eye from the near line to the entrance by making sure nothing bright sits at the edge to pull attention away first.",
          "Step 5 (M1): Brace, exhale and press at a shutter fast enough to hold the wide frame steady, using the level line of the paving to check tilt.",
          "Step 6 (A1): Review the frame: verticals should stand straight and the horizon or roof line should read level across the picture."
        ],
        "keyTakeaway": "A corner leading line plus a low but upright camera gives a tall, stable building shot without converging verticals."
      }
    ],
    "quiz": {
      "id": "quiz-ph-composition",
      "topicId": "shs1-ph-t1-composition-camera-handling",
      "title": "Composition and Camera Handling Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-composition-1",
          "quizId": "quiz-ph-composition",
          "questionText": "Which action most reduces camera shake when hand-holding at a slow shutter speed?",
          "optionA": "Bracing the elbows into the body and squeezing the shutter on a gentle out-breath",
          "optionB": "Holding a full breath and stabbing the shutter quickly",
          "optionC": "Extending both arms straight out in front of the chest",
          "optionD": "Resting the camera only on two fingertips",
          "correctOption": "A",
          "subConcept": "Camera handling",
          "explanation": "Tucked elbows, a steady stance and a smooth release on the out-breath give the firmest hand-hold. A jab with a full breath rocks the camera, arms extended are unstable, and two fingertips cannot support the weight.",
          "remediationTip": "Shoot the same still object at your slowest speed holding a breath and then exhaling, and compare the sharpness."
        },
        {
          "id": "q-ph-composition-2",
          "quizId": "quiz-ph-composition",
          "questionText": "Using the rule of thirds, where is a main subject most strongly placed?",
          "optionA": "Exactly in the centre of the frame",
          "optionB": "Cut off at the nearest edge",
          "optionC": "On a diagonal from the top-right to bottom-left only",
          "optionD": "On one of the third lines or at a crossing point",
          "correctOption": "D",
          "subConcept": "Rule of thirds",
          "explanation": "The rule places emphasis at the third lines and their intersections, off the dead centre. A central subject reads as a flat snapshot, an edge-cut subject feels cramped, and the diagonal is a different idea from the thirds grid.",
          "remediationTip": "Overlay a nine-square grid on three saved portraits and note where the eyes and horizons fall."
        },
        {
          "id": "q-ph-composition-3",
          "quizId": "quiz-ph-composition",
          "questionText": "A player is running across a school field. Which composition gives the most comfortable movement?",
          "optionA": "More empty space left in the direction the player runs",
          "optionB": "The player pushed against the edge they run toward",
          "optionC": "A tilted horizon behind the player",
          "optionD": "The camera placed directly overhead looking straight down",
          "correctOption": "A",
          "subConcept": "Looking room",
          "explanation": "This is looking room: leaving open space ahead of the run lets the eye travel and reads as motion. Facing the subject into the near edge looks cramped, a tilt is a separate fault, and a straight-down view destroys the sense of forward travel.",
          "remediationTip": "Photograph a trotro moving along a road, shooting so it heads into the wider part of the frame."
        },
        {
          "id": "q-ph-composition-4",
          "quizId": "quiz-ph-composition",
          "questionText": "Which viewpoint makes a building or person appear tall and powerful?",
          "optionA": "A high angle looking down on the subject",
          "optionB": "A straight-on eye-level angle",
          "optionC": "A low angle looking up from near the base",
          "optionD": "Any angle once the zoom is used",
          "correctOption": "C",
          "subConcept": "Viewpoint height",
          "explanation": "A low viewpoint exaggerates height and dignity. A high angle looks down and diminishes or shows pattern, eye level is neutral, and the zoom changes size not the emotional reading of height.",
          "remediationTip": "Shoot the same post from a crouched low camera and a raised high camera and compare the statements."
        },
        {
          "id": "q-ph-composition-5",
          "quizId": "quiz-ph-composition",
          "questionText": "In a photograph of a classroom block, the walls seem to lean backwards as if falling. What caused it?",
          "optionA": "The horizon was levelled along a frame edge",
          "optionB": "The subject sits on a third line",
          "optionC": "A leading line runs from a lower corner",
          "optionD": "The camera was tilted up, so the verticals converge",
          "correctOption": "D",
          "subConcept": "Verticals and camera tilt",
          "explanation": "Tilting the body upward points the sensor plane off vertical, so parallel walls converge and look like a falling tower. Levelling the horizon, third placement and a leading line are unrelated to converging verticals.",
          "remediationTip": "Photograph a doorway keeping the back of the camera plumb and note the verticals stay parallel."
        }
      ]
    }
  },
  {
    "id": "shs1-ph-t2-film-formats-loading",
    "subjectId": "photography",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 3,
    "title": "Film Types, Formats and Loading",
    "description": "How photographic film is described and chosen, covering ISO and ASA speed, exposure latitude, colour negative against slide and black-and-white stock, the 35 mm, 120 medium and sheet formats, and the correct daylight or dark loading, storage and handling of each.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Film records an image on a strip coated with silver-halide crystals in gelatin; more light turns more crystals developable, which is why exposure and development work as a pair.\n• Speed is the ISO or ASA number: 100 is slow, 400 medium, 800 to 3200 fast; each doubling of the number means the film needs half the light for the same exposure.\n• Fast film is more sensitive but coarser grained, so a 3200 stock shows visible grain while a 100 sheet is silky smooth when enlarged.\n• Exposure latitude is the range of over- and under-exposure a film still tolerates; colour negative has wide latitude, black-and-white is generous, and slide film is narrow and unforgiving.\n• Colour negative, the C-41 stock sold in every shop, gives an orange-masked negative meant to be printed; it tolerates exposure error and cross-processed looks.\n• Slide or reversal film, E-6, gives a positive transparency for projection; it must be exposed exactly and has the narrowest latitude of the three.\n• Black-and-white film, developed in its own chemistry, is the classic teaching stock because grain, tone and dodging are all taught from a negative you print yourself.\n• 35 mm, also called 135, is a perforated strip pre-loaded in a daylight cassette, giving frames 24 by 36 mm and commonly 36 exposures.\n• 120 roll film is wound on a spool with a paper backing and gives 6 by 4.5, 6 by 6 or 6 by 7 cm frames depending on the camera, sixteen or twelve per roll.\n• Sheet film comes as single cut sheets, often 4 by 5 inches, loaded into holders in total darkness and used on view and field cameras for slow, deliberate work.\n• A 35 mm cassette and a 120 roll with backing paper are loaded in daylight; only bulk loading bare film onto a spool or filling sheet holders needs a darkroom or changing bag.\n• Loading 35 mm: pull the leader across, seat the sprockets, close the back and advance until the frame counter passes the first number, so the whole backing strip takes up slack.\n• Loading 120: align the leader with the take-up spool, tape it, and wind until the backing paper with printed frame numbers spans the path, closing the door with the roll and spool seated.\n• Film fog comes from stray light, X-ray machines and old stock; store unexposed film cool and dry, in a fridge with a moisture-proof jar for long keeping, and return it to room temperature before loading.\n• Always shoot a test frame or two on unfamiliar film and note the ISO dial set on the camera or meter, because an undeclared speed is the commonest reason a roll comes back wrong.",
    "detailedNotes": {
      "overview": "Before a digital file there was film, and film is still the syllabus foundation for understanding exposure, grain and latitude. This lesson teaches how a strip of coated plastic is described by speed, type and format, and how to load and store each one without fogging it. You will read the ISO or ASA number as a doubling scale, tell colour negative from slide and black-and-white stock, and match the frame size of 35 mm, 120 medium and sheet film to the camera that holds it. Loading habits, which rolls go on in daylight and which need darkness, and cold storage against the Ghanaian heat, are practical skills that save whole rolls from waste and are examined in the objective and planning papers.",
      "introduction": "Handle real stock. Pass round an empty 35 mm cassette, a spent 120 roll with its backing paper, and if the school holds them, a loaded and an empty sheet-film holder. Read the ISO and frame count off several packets and sort them into slow, medium and fast, then negative, slide and black-and-white. Practise loading a 35 mm camera until the leader seats and the counter advances without tearing, and rehearse the daylight rules: cassette and backed roll in the open, bare film and sheet holders only in a bag or the dark.",
      "realWorldContext": "Film still lives in Ghanaian schools and studios even as digital spreads. Shops around Accra and Kumasi stock 35 mm colour negative for passport and event work, and a portrait studio that owns a 6 by 7 medium-format camera buys 120 roll for the couple portraits a wedding client frames large. The school darkroom in a senior high like the one at a technical institute in Takoradi teaches exposure on cheap black-and-white 120 because a pupil can print and dodge from it directly. Heat is the real enemy: a roll left on a dashboard in the Accra sun or kept in a humid store loses contrast, so serious photographers hold spare film in a cooled, sealed jar and let it warm before opening, exactly the storage habit this topic teaches.",
      "objectives": [
        "Explain film speed as an ISO or ASA doubling scale and relate speed to grain and light need",
        "Distinguish colour negative, slide and black-and-white film and state a use for each",
        "Identify 35 mm, 120 medium-format and sheet film and the frame size each produces",
        "Load a 35 mm cassette and a 120 roll correctly and state which film must be loaded in darkness",
        "Describe fog causes and the cold, dry storage routine that protects film in a hot climate"
      ],
      "sections": [
        {
          "title": "Speed, Grain and Latitude",
          "content": "Film is coated with grains of silver halide in gelatin, and light turns those grains developable during processing. Speed is written as an ISO or ASA number and works in doublings: 100, 200, 400, 800, 1600, 3200. Each step up means the film needs half the light to record the same scene, so a 400 roll reaches a usable exposure in half the light a 100 roll needs. The price of that sensitivity is grain: a fast 3200 stock has larger, more visible crystals that break up into a coarse texture when the print is enlarged, while a slow 100 sheet stays smooth. Latitude is the third idea and it decides how forgiving the film is. Colour negative and most black-and-white stocks tolerate a stop over or under and still print well, but slide film must be exposed almost exactly because it has narrow latitude. Reading these three numbers, speed, grain and latitude, together is what lets you choose the right film for a subject rather than guessing.",
          "bulletPoints": [
            "ISO or ASA works in doublings; 100 to 200 to 400 each halves the light the film needs.",
            "Higher speed gives finer light need but coarser visible grain on enlargement.",
            "Slow 100 film is smooth and best where a large clean print is wanted.",
            "Latitude is the exposure error a film tolerates; negative and black-and-white are wide, slide is narrow.",
            "Match the ISO dial on the camera or meter to the film speed or the whole roll is mis-set."
          ],
          "keyTakeaway": "Read speed, grain and latitude as a set, and the choice between a 100, 400 and 3200 film becomes a decision instead of a guess.",
          "realWorldExample": "A Kumasi studio shooting a wedding indoors with only bounce flash reaches for 400 or 800 colour negative rather than 100, because the faster stock holds a shutter speed that stops the dancing without a harsh direct flash."
        },
        {
          "title": "The Three Kinds of Film",
          "content": "Film splits into three families by what it produces. Colour negative, the everyday C-41 stock sold in packets, records an orange-masked reversed image intended to be printed onto paper; it is robust, tolerant of exposure error and is what a shop lab develops by the roll. Slide, or reversal, film processed as E-6 gives a direct positive transparency you mount and project or light through, and because it has the narrowest latitude of the three it rewards careful metering and punishes a guess; a photographer who wants true colour on a lightbox or a magazine transparency uses slide. Black-and-white film carries no colour dyes at all, records only tone, and is developed in its own straightforward chemistry, which is why it remains the teaching standard in a school darkroom: a pupil exposes a negative, then learns to print it, to dodge a highlight and burn in a shadow, seeing the whole image chain in one lesson. Each kind asks to be processed differently, so never mix a slide roll into the negative chemistry.",
          "bulletPoints": [
            "Colour negative, C-41, gives an orange-masked negative for printing and has wide exposure latitude.",
            "Slide or reversal, E-6, gives a positive transparency for projection and needs exact exposure.",
            "Black-and-white records tone only and is the classic darkroom teaching stock for printing and dodging.",
            "Different chemistries process the three families, so they must never be mixed on the line.",
            "Choose negative for general and event work, slide for true projected colour, black-and-white for craft study."
          ],
          "keyTakeaway": "Know which family a roll belongs to before you expose it, because the film, the processing and the final print are locked together.",
          "realWorldExample": "A Takoradi school darkroom class works only in black-and-white 120 because the negative can be developed, contact-printed and enlarged by the pupils themselves, teaching the whole exposure-to-print chain with cheap chemistry."
        },
        {
          "title": "Formats: 35 mm, 120 and Sheet",
          "content": "A format is the size and shape of the piece of film that records one frame. The 35 mm cartridge, also called 135, holds a perforated strip 35 mm wide that yields frames measuring 24 by 36 mm and a standard roll of thirty-six exposures; it is the smallest and most portable and is loaded as a sealed cassette. The 120 roll, the medium format, is a wider film wound on a spool behind a paper backing, and depending on the camera it gives square 6 by 6 frames or rectangular 6 by 4.5 and 6 by 7, running twelve or sixteen exposures per roll, and enlarging to a bigger, smoother print because the image area is larger than 35 mm. Above both sits sheet film, individual flat cut sheets, commonly 4 by 5 inches, each loaded into a light-tight holder in total darkness and exposed one frame at a time on a view or field camera. The larger the format, the bigger the negative, the finer the grain at a given print size, and the slower and more deliberate the working.",
          "bulletPoints": [
            "35 mm cartridge, or 135, is a perforated daylight cassette giving 24 by 36 mm frames, about 36 exposures.",
            "120 roll is medium format, 6 by 6, 6 by 4.5 or 6 by 7 cm, twelve or sixteen frames, larger and smoother prints.",
            "Sheet film, often 4 by 5 inches, is single cut sheets in holders, exposed one frame per picture.",
            "Bigger negative means finer grain at a given enlargement but slower, more deliberate work.",
            "The backing paper on 120 and the sealed 35 mm cassette let both load in daylight."
          ],
          "keyTakeaway": "Format decides frame size, exposure count and print quality, so name the format before you commit to the camera and the job.",
          "realWorldExample": "A fashion photographer in Accra chooses a 6 by 7 medium-format back on 120 for a lookbook because the negative enlarges to a full-page poster with far finer grain than a 35 mm frame of the same model could."
        },
        {
          "title": "Loading, Fog and Cold Storage",
          "content": "Loading follows one rule: film sealed in its daylight packaging can be handled in the open, while bare film must never see light. A 35 mm cassette is loaded in daylight by pulling the leader across the gate, seating the sprocket teeth in the perforations, closing the back and advancing the wind knob until the counter passes the first number and the slack backing is taken up on the spool. A 120 roll with its backing paper also loads in daylight, aligning the leader to the take-up spool, taping it and winding until the numbered backing spans the path. Bulk-loading bare 35 mm onto empty spools, and filling sheet-film holders, need a changing bag or a darkroom because that film has no protective backing. Fog, the general grey haze that ruins contrast, comes from stray light, from baggage X-ray machines and from age. Heat and humidity are the same enemy in storage, so keep unexposed film cool and dry, refrigerate long-term stock in a moisture-proof sealed jar, and let a cold roll return to room temperature before opening so condensation never forms on the emulsion.",
          "bulletPoints": [
            "Load 35 mm in daylight: seat the leader on the sprockets, close the back, wind past the first frame.",
            "Load 120 in daylight: tape the backing-paper leader to the take-up spool and wind until it spans the path.",
            "Bulk-loaded bare film and sheet holders must be handled only in a changing bag or a darkroom.",
            "Fog from stray light, X-ray and age shows as a grey veil that kills contrast on the negative.",
            "Store film cool and dry, refrigerate in a sealed moisture-proof jar, and warm it before opening."
          ],
          "keyTakeaway": "Respect the daylight rule for each package, keep film cool and dry, and a roll survives from the shop shelf to the developing tank.",
          "realWorldExample": "A photographer flying into Kumasi keeps spare 120 rolls in a padded cooler with silica gel and asks for hand inspection at security rather than passing film through the baggage X-ray belt that would fog the emulsion."
        }
      ],
      "commonMistakes": [
        "Setting the camera ISO dial to 100 when a 400 roll is loaded, so the meter and every exposure are built on the wrong speed and the roll comes back under-exposed.",
        "Loading bare 35 mm film or a sheet holder on an open bench in daylight, fogging the whole batch because only backed and cassetted film may see the light.",
        "Opening a cold fridge-stored roll straight away, letting condensation bead on the emulsion and sticking it to the pressure plate.",
        "Pushing a slide film through the colour-negative chemistry, or vice versa, because the families need their own developers and the roll returns wrong or undevloped.",
        "Leaving film on a car dashboard or in a humid store for months, so heat and damp fog it before a single frame is exposed.",
        "Advancing a fresh 35 mm roll only to the first number and shooting there, so the still-slack leader gives a half-exposed blank frame."
      ],
      "wassceExamTips": [
        "Paper 1 objective items ask you to match a film task to a speed or format, for example which film suits a large print, so learn the doubling scale and the frame sizes as facts.",
        "In Paper 2 a planning question may name a low-light event; justify a faster film and wider-latitude negative stock and you earn the method mark for the reasoning.",
        "Paper 3 practical observes handling of materials: seating the sprockets, winding past the first frame and storing film cool are the physical habits a marker rewards.",
        "When a question covers storage, name both the hazard, heat, humidity, X-ray, and the control, sealed cool jar and hand inspection, exactly as marks are split between them.",
        "Define slide film by its narrow latitude and exact exposure need; examiners look for the contrast with forgiving colour negative."
      ],
      "summaryChecklist": [
        "Can I read an ISO or ASA number as a doubling scale and link speed to grain and light need?",
        "Can I tell colour negative, slide and black-and-white film apart and give a use for each?",
        "Can I name the frame sizes and exposure counts of 35 mm, 120 and sheet film?",
        "Can I load a 35 mm cassette and a 120 roll correctly and say which film needs darkness?",
        "Can I list the causes of fog and the cold, dry storage routine that protects film in Ghana?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-film-1",
        "title": "Loading a 35 mm Colour Negative Roll in Daylight",
        "problem": "A pupil has a fresh 36-exposure 35 mm cassette of 400 colour negative and a manual film camera. Show the correct daylight load, the speed setting and the first-frame check so no exposure is wasted.",
        "stepByStepSolution": [
          "Step 1 (M1): Confirm the roll is 35 mm sealed in a daylight cassette, so the load may be done in the open rather than in a bag or darkroom.",
          "Step 2 (M1): Open the back, pull the leader across the film gate and seat the sprocket teeth squarely into the perforations on both edges.",
          "Step 3 (M1): Insert the cassette, close the back until it clicks, then advance the wind knob until the frame counter passes the first number and the slack leader is fully taken up.",
          "Step 4 (A1): Set the camera ISO dial, or the meter, to 400 to match the speed printed on the cassette so every reading is built on the true film speed.",
          "Step 5 (M1): Press the shutter release without winding on and take one test frame of a bright even subject, then advance and shoot a second test to confirm the transport.",
          "Step 6 (A1): Keep the camera shutter-cocked between shots, never open the back mid-roll, and after the thirty-sixth exposure rewind the leader fully into the cassette before opening.",
          "Step 7 (M1): Label the used cassette with the film name, speed and the number of frames exposed, and store it cool and dry until it reaches the lab."
        ],
        "keyTakeaway": "Seat the sprockets, wind past the slack first frame and set the ISO to the roll speed, and a daylight load gives you all thirty-six exposures intact."
      },
      {
        "id": "ex-ph-film-2",
        "title": "Choosing a Format and Handling Storage in a Hot Climate",
        "problem": "For a client who wants a portrait enlarged to A2 with smooth tone, and for a stock of spare rolls kept at a school in the Accra heat, choose the film type and format and set out a safe storage routine.",
        "stepByStepSolution": [
          "Step 1 (M1): State the enlargement need, an A2 print with fine grain, and reason that a larger format keeps grain smaller at that size than 35 mm.",
          "Step 2 (A1): Select 120 black-and-white or colour-negative roll in a 6 by 7 medium-format camera, giving a large negative and a smooth A2 enlargement.",
          "Step 3 (M1): Choose a slow 100 speed because the studio portrait is lit and steady, trading the low light need for the finest grain the film offers.",
          "Step 4 (M1): For the school stock, reject a shelf in a humid store room and use a cool, dry place; for long keeping seal rolls in a moisture-proof jar in a fridge.",
          "Step 5 (A1): Record the expiry and the storage date on the jar and keep the rolls away from any X-ray source, requesting hand inspection when film must travel.",
          "Step 6 (M1): Before loading a chilled roll, let it reach room temperature sealed so no condensation forms on the emulsion or the backing paper.",
          "Step 7 (M1): Note the format, speed and storage plan on the job sheet so whoever loads the camera uses the correct daylight rule and the right ISO setting."
        ],
        "keyTakeaway": "Match the format to the enlargement, the speed to the light, and protect every spare roll from heat, damp and X-ray with cool sealed storage."
      }
    ],
    "quiz": {
      "id": "quiz-ph-film-formats",
      "topicId": "shs1-ph-t2-film-formats-loading",
      "title": "Film Types, Formats and Loading Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-film-1",
          "quizId": "quiz-ph-film-formats",
          "questionText": "Moving a film from ISO 100 to ISO 400 means the film needs how much light for the same exposure?",
          "optionA": "One quarter of the light",
          "optionB": "The same light",
          "optionC": "Double the light",
          "optionD": "Four times the light",
          "correctOption": "A",
          "subConcept": "Film speed",
          "explanation": "Each doubling of ISO halves the light needed, so 100 to 200 to 400 is two doublings and one quarter of the light. Options suggesting the same or more light ignore the doubling scale, and four times would describe slowing to a lower number.",
          "remediationTip": "Write the ISO ladder 100, 200, 400, 800 and note that each step halves the light need."
        },
        {
          "id": "q-ph-film-2",
          "quizId": "quiz-ph-film-formats",
          "questionText": "Which film type has the narrowest exposure latitude and must be metered almost exactly?",
          "optionA": "Colour negative C-41 stock",
          "optionB": "Black-and-white film",
          "optionC": "Any modern film since all are forgiving",
          "optionD": "Slide or reversal film",
          "correctOption": "D",
          "subConcept": "Latitude",
          "explanation": "Slide film has the narrowest latitude and punishes a wrong exposure, while colour negative and black-and-white tolerate a stop of error. Claiming all films are forgiving is false and would waste a transparency roll.",
          "remediationTip": "Line up the three families and rank them from widest to narrowest latitude until the order is fixed."
        },
        {
          "id": "q-ph-film-3",
          "quizId": "quiz-ph-film-formats",
          "questionText": "Which of these films may be loaded safely in ordinary daylight?",
          "optionA": "A 35 mm film sealed in its cassette",
          "optionB": "Bare 35 mm film being bulk-loaded onto a spool",
          "optionC": "Sheet film being placed into an open holder",
          "optionD": "Unprotected film cut from a reloadable roll",
          "correctOption": "A",
          "subConcept": "Loading rules",
          "explanation": "A sealed 35 mm cassette, and a 120 roll with its backing paper, are protected and load in daylight. Bulk loading bare film and filling sheet holders expose unbacked emulsion and need a changing bag or darkroom.",
          "remediationTip": "Sort each film package into a daylight or darkness column; only backed and cassetted stock belongs in daylight."
        },
        {
          "id": "q-ph-film-4",
          "quizId": "quiz-ph-film-formats",
          "questionText": "A 6 by 7 frame from a 120 roll belongs to which format?",
          "optionA": "35 mm miniature",
          "optionB": "Large-format sheet film",
          "optionC": "Pinhole format",
          "optionD": "Medium format",
          "correctOption": "D",
          "subConcept": "Formats",
          "explanation": "The 6 by 7 cm frame from 120 roll film is medium format, larger than the 24 by 36 mm of 35 mm and smaller than a 4 by 5 inch sheet. Pinhole names the lens design, not a frame size.",
          "remediationTip": "Learn the three frame sizes as facts: 35 mm 24 by 36, medium 6 by 7, sheet 4 by 5 inches."
        },
        {
          "id": "q-ph-film-5",
          "quizId": "quiz-ph-film-formats",
          "questionText": "What is the correct way to keep spare unexposed film in a hot, humid climate?",
          "optionA": "On a shelf beside a bright workroom window",
          "optionB": "Sealed in a moisture-proof container in a cool place or fridge, warmed before opening",
          "optionC": "Loose in a plastic bag inside a car glove compartment",
          "optionD": "Frozen with other food and opened straight from the freezer",
          "correctOption": "B",
          "subConcept": "Storage",
          "explanation": "Cool, dry, sealed storage slows fog and heat damage, and a chilled roll must warm to room temperature sealed so condensation never wets the emulsion. A sunny shelf and a hot car fog it, and opening a frozen roll at once beads water on the film.",
          "remediationTip": "State the two parts, the cool sealed storage and the warm-before-opening rule, whenever film keeping is asked."
        }
      ]
    }
  },
  {
    "id": "shs1-ph-t2-exposure-aperture-shutter-iso",
    "subjectId": "photography",
    "level": "SHS 1",
    "term": 2,
    "orderIndex": 4,
    "title": "The Exposure Triangle: Aperture, Shutter Speed and ISO",
    "description": "The three controls that together decide how bright a photograph is, taught as a working scale: the f-number stops from 1.4 to 22, shutter times from 1/1000 to 1 second, and ISO sensitivity, then reciprocity between them, incident against reflected metering, exposure compensation and the Sunny 16 rule.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Exposure is the total light reaching the film or sensor, and three dials control it: the aperture sets how wide the opening is, the shutter sets how long it stays open, and ISO sets how sensitive the surface is to what arrives.\n• The aperture is written as an f-number, the focal length divided by the working diameter, so a smaller f-number is a physically wider hole admitting more light.\n• Full stops run 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22; each step to a lower number doubles the light, each step to a higher number halves it.\n• Moving from f/8 to f/5.6 is one stop brighter, and moving from f/8 to f/11 is one stop darker, because the light is doubled or halved once.\n• Shutter times in full stops run 1 s, 1/2, 1/4, 1/8, 1/15, 1/30, 1/60, 1/125, 1/250, 1/500, 1/1000; each step up the list halves the time and so halves the light.\n• Longer shutter means more light but also more risk of blur from movement, while a fast shutter freezes action at the cost of light.\n• ISO values double like the others, 100, 200, 400, 800, 1600, 3200; each doubling makes the surface one stop more sensitive so it needs half the light.\n• Higher ISO is not free: it adds grain on film and luminance noise on a digital sensor, so it is raised only when aperture and shutter cannot reach a usable exposure.\n• Aperture also governs depth of field, a wide f/2.8 blurs the background, a narrow f/16 keeps foreground and far distance sharp; shutter governs motion; ISO governs sensitivity.\n• Reciprocity is the balance: to keep the same exposure, every stop you open the aperture you must shorten the shutter, and every stop you raise the ISO you shorten the shutter by the same amount.\n• A stop up at ISO 100 to 200 lets you go from f/11 at 1/60 to f/11 at 1/125, or two stops lets you reach 1/250, holding the picture equally bright.\n• A reflected meter, the one built in the camera, measures light bouncing off the scene and is fooled by very dark or very bright subjects, rendering snow grey and black cloth muddy.\n• An incident meter measures the light falling on the subject from in front of it and ignores the subject tone, giving a truer reading for portraits and hard contrast.\n• Exposure compensation, plus or minus EV, tells the camera to override its reflected reading: add about one and a half stops for a bright snow or sky scene, subtract for a dark moody subject.\n• The Sunny 16 rule needs no meter: on bright sunshine set f/16 and a shutter of one over the ISO, so ISO 100 gives f/16 at 1/100 s, ISO 200 gives f/16 at 1/200 s.\n• The Sunny 16 family steps with the sky: slightly overcast f/11, fully overcast f/8, open shade or sunset f/5.6, each paired with the same one-over-ISO shutter.",
    "detailedNotes": {
      "overview": "This is the arithmetic heart of photography. Three controls, aperture, shutter speed and ISO, trade against one another to fix the brightness of a picture, and each is cut into stops that double or halve the light in a set step. You will learn the f-number scale from 1.4 to 22 and the shutter scale from 1/1000 of a second to one full second as true one-stop ladders, then the reciprocity rule that keeps exposure constant when you move between them. The lesson finishes with metering, the difference between a reflected and an incident reading, how exposure compensation corrects a misled meter, and the Sunny 16 rule that lets you expose a bright day with no meter at all. Every number here is verifiable, so practise the doublings until they are second nature.",
      "introduction": "Work on the numbers with a pencil before touching a camera. Write the f-number ladder and the shutter ladder and mark each one-stop step; then drill reciprocity by holding one brightness constant while you move aperture, shutter and ISO around it. Set the camera to full manual on a fixed bright subject and photograph the same exposure three ways, wide aperture with a fast shutter, mid aperture with mid shutter, narrow aperture with a slow shutter, and check all three come out equally bright. Learn Sunny 16 exactly: f/16 and a shutter of one over the ISO on a sunny day.",
      "realWorldContext": "The rule saves shots when there is no power and no meter. A pupil photographing a founder's day parade under the Accra sun can set f/16 with ISO 100 film and a 1/100 shutter from memory and get a sound exposure before the borrowed battery dies. A market shooter at Makola moving from the blazing street into open shade drops from f/16 to about f/5.6 to keep the same shutter, exactly the Sunny 16 family. A portraitist metering a trader in bright black cloth against white wrappers trusts an incident reading taken at the face rather than the reflected light off the cloth, and adds or subtracts exposure compensation so skin neither blows out nor turns muddy on the print.",
      "objectives": [
        "State the full-stop f-number scale and the full-stop shutter scale and explain the doubling rule behind each",
        "Describe what aperture, shutter speed and ISO each control in brightness and in the picture look",
        "Apply reciprocity to change one control while holding total exposure constant",
        "Distinguish a reflected meter reading from an incident one and choose compensation to correct a misled meter",
        "Apply the Sunny 16 rule to set a correct exposure on a bright day without a meter"
      ],
      "sections": [
        {
          "title": "Aperture and the f-Number Scale",
          "content": "The aperture is an adjustable iris inside the lens, and it is described by the f-number, which is the focal length of the lens divided by the working diameter of the opening. Because the number is a division, a small f-number means a wide opening and a large f-number means a narrow one, the reverse of what beginners expect. The standard full-stop scale runs 1.4, 2, 2.8, 4, 5.6, 8, 11, 16 and 22. Each step to the left, from f/8 to f/5.6 for instance, doubles the area of the opening and so doubles the light, which is one stop brighter; each step to the right, from f/8 to f/11, halves the light, one stop darker. The scale is a doubling ladder in disguise, since the square of the f-number is what controls light, and 5.6 is roughly 8 divided by 1.4 because 1.4 is the square root of two. Aperture does a second job beyond brightness: it sets depth of field, so a wide f/2.8 throws the background into soft blur while a stopped-down f/16 keeps both a near subject and a distant horizon acceptably sharp.",
          "bulletPoints": [
            "f-number equals focal length divided by the aperture diameter, so a lower number is a wider hole.",
            "Full-stop scale: 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22; each leftward step doubles light, each rightward halves it.",
            "f/8 to f/5.6 is one stop brighter; f/8 to f/11 is one stop darker.",
            "The ratio between neighbouring stops is about 1.4 because light follows the square of the number.",
            "Aperture also sets depth of field: wide numbers blur the background, narrow numbers hold front to back sharp."
          ],
          "keyTakeaway": "Read the f-scale as a doubling ladder where one step either doubles or halves the light, and remember the smaller number is the bigger hole.",
          "realWorldExample": "A Kumasi studio portrait at f/2.8 keeps the bride sharp and melts the busy wrapper display behind her, while a class photograph of forty pupils at f/11 holds every row in focus because the wider depth of field needs the stopped-down aperture."
        },
        {
          "title": "Shutter Speed as a Doubling Ladder",
          "content": "The shutter is a curtain or leaf that opens for a set time, and its full-stop scale is another doubling ladder, this time of duration. The marked values run 1 second, 1/2, 1/4, 1/8, 1/15, 1/30, 1/60, 1/125, 1/250, 1/500 and 1/1000 of a second. Each step toward the second end doubles the time the light is admitted and so doubles the exposure; each step toward the thousandth end halves it. The odd-looking 1/15 and 1/125 stand for 1/16 and 1/128, rounded to familiar numbers, which is why the scale looks uneven but is really exact doublings. Shutter speed does its own second job beyond brightness, controlling how motion is rendered: a fast 1/500 freezes a running athlete or a trotro in motion, while a slow one second deliberately smears movement into streaks and demands the camera be held dead still or braced on a support. A pupil who understands that 1/125 is one stop less light than 1/60 can trade shutter against aperture without changing brightness.",
          "bulletPoints": [
            "Full-stop shutter ladder: 1 s, 1/2, 1/4, 1/8, 1/15, 1/30, 1/60, 1/125, 1/250, 1/500, 1/1000.",
            "Each step toward longer time doubles the light admitted; each step toward shorter halves it.",
            "1/15 and 1/125 are rounded forms of 1/16 and 1/128, so the ladder is still true doublings.",
            "Fast shutter freezes action, slow shutter blurs motion deliberately and needs support.",
            "1/125 passes one stop less light than 1/60, the same halving seen on the f-scale."
          ],
          "keyTakeaway": "Treat the shutter scale as exact doublings of time, and a stop of shutter becomes as countable as a stop of aperture.",
          "realWorldExample": "Shooting the durbar festival stools carried through the Accra streets, a photographer keeps at least 1/250 to freeze the swinging palanquin, and opens the aperture or raises ISO to pay for the light the fast shutter takes away."
        },
        {
          "title": "ISO Sensitivity and the Grain Price",
          "content": "The third control does not change how much light arrives but how strongly the surface reacts to it. On film, ISO or ASA ratings double in a step, 100, 200, 400, 800, 1600, 3200, and each doubling means the emulsion needs half the light to reach the same density, exactly one stop more sensitive. Digital sensors copy the same scale, doubling the amplification of the signal at each step. That is why raising ISO lets you shoot in dim light where aperture and shutter have run out of room, but it is never free: fast film shows coarse silver grain when enlarged, and a high digital ISO adds luminance noise, the coloured speckle that softens detail. The disciplined order is therefore to set aperture for the depth you want and shutter for the motion you want, and to lift ISO only as far as needed to reach a clean exposure. Two stops of ISO, from 100 to 400, buys back the whole of a two-stop light shortage and can move a shutter from 1/60 to 1/250 to stop a shake or a moving subject while keeping brightness identical.",
          "bulletPoints": [
            "ISO doubles per stop: 100, 200, 400, 800, 1600, 3200; each step makes the surface one stop more sensitive.",
            "Higher ISO needs half the light of the step below it, letting you shoot in dimmer scenes.",
            "Fast film adds grain and high digital ISO adds luminance noise, so ISO is a tool of last resort.",
            "Two stops, 100 to 400, doubles the sensitivity twice and buys two stops of shutter or aperture.",
            "Set aperture for depth and shutter for motion first, then raise ISO only to reach a clean exposure."
          ],
          "keyTakeaway": "ISO trades sensitivity for cleanliness, so reach for it after aperture and shutter, and count its doublings the same way as the other two scales.",
          "realWorldExample": "Under the low rafters of a Kumasi church at a wedding, a photographer keeps the shutter at 1/125 to stop the walking aisle and lifts ISO from 400 to 1600, accepting a little noise to hold a sharp, correctly bright frame."
        },
        {
          "title": "Reciprocity, Metering and Sunny 16",
          "content": "The three controls are one balance, and reciprocity names it: total exposure stays the same whenever a stop gained on one dial is paid back on another. Opening the aperture one stop from f/11 to f/8 doubles the light, so to keep the picture equally bright the shutter must halve, moving 1/60 to 1/125; raise ISO one stop and the same one-stop cut in shutter holds. Getting that balance is the job of a meter. A reflected meter, the one inside every camera, measures light bouncing off the subject, and because it aims for a mid-grey it turns dazzling snow flat grey and renders a black cloth as a muddy mid-tone, an error you correct with exposure compensation, adding roughly one and a half stops for bright scenes and subtracting for dark ones. An incident meter, held at the subject pointed back at the camera, measures the light falling on it and ignores the subject tone, giving a truer figure for portraits and strong contrast. Where no meter works, the Sunny 16 rule sets a bright-day exposure from memory: aperture f/16 with a shutter of one over the ISO, so ISO 100 gives 1/100 and ISO 200 gives 1/200, then soften the aperture as cloud gathers to f/11, f/8 and f/5.6.",
          "bulletPoints": [
            "Reciprocity: keep exposure by paying each stop gained on one dial back on another.",
            "f/11 at 1/60 equals f/8 at 1/125; the doubled aperture is cancelled by the halved time.",
            "A reflected meter measures bounced light and misreads snow as grey and black cloth as mud.",
            "Correct a reflected meter with exposure compensation, about plus one and a half stops for bright scenes.",
            "An incident meter measures falling light and ignores subject tone; Sunny 16 gives f/16 at one over the ISO."
          ],
          "keyTakeaway": "Count stops in all three directions, trust an incident reading over a fooled reflected meter, and use Sunny 16 when there is no meter at all.",
          "realWorldExample": "On a blazing beach day at Kokrobite with a dead camera battery, a pupil sets f/16 at 1/100 for ISO 100 film by Sunny 16, then opens to f/8 when the haze thickens, halving the shutter to 1/30 to hold the same exposure."
        }
      ],
      "commonMistakes": [
        "Reading the f-scale backwards and thinking f/22 is wider than f/2.8; the larger number is the smaller hole and lets in far less light.",
        "Calling 1/15 or 1/125 a half stop because the numbers look odd, when they are the marked rounding of the true doublings 1/16 and 1/128.",
        "Changing the aperture without adjusting shutter or ISO, then blaming the camera for a photo that went bright or dark; every stop must be paid for.",
        "Trusting a reflected meter on snow or on a dark portrait and getting a grey or muddy result instead of adding or subtracting exposure compensation.",
        "Raising ISO to 3200 in good light out of habit and covering a clean picture in noise when a wider aperture or slower shutter would have held it at 400.",
        "Quoting Sunny 16 as f/16 at a fixed 1/125 regardless of film speed, when the shutter must be one over the ISO, 1/100 for ISO 100 and 1/200 for ISO 200."
      ],
      "wassceExamTips": [
        "Paper 1 sets counting questions, for example how many stops between f/4 and f/16, so learn both scales by heart and count the doublings exactly.",
        "In Paper 2 a planning question gives a light and a subject; state the aperture for depth, the shutter for motion and the ISO to reach exposure, and mark is taken for that reasoning.",
        "Paper 3 practical watches you set a manual exposure; meter, then justify any compensation you dialled, because an examiner rewards a corrected bright or dark scene.",
        "When asked to shift a settings combination, show the reciprocity as an equation of stops and confirm the finished brightness is unchanged, the accuracy mark.",
        "Never write that a bigger f-number is a bigger opening; that single reversal loses the method and the answer mark together on nearly every exposure question."
      ],
      "summaryChecklist": [
        "Can I recite the full-stop f-number scale and the full-stop shutter scale and count the stops between any two values?",
        "Can I say what aperture, shutter and ISO each control in brightness and in the look of the picture?",
        "Can I keep an exposure constant while trading stops between aperture, shutter and ISO using reciprocity?",
        "Can I tell a reflected from an incident reading and set exposure compensation to correct a fooled meter?",
        "Can I apply Sunny 16 to give the right aperture and shutter for a bright day at a given ISO with no meter?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-exposure-1",
        "title": "Working a Sunny 16 Reading and Shifting It by Reciprocity",
        "problem": "On a bright cloudless day at Kokrobite you are using ISO 100 film with a manual camera and no meter. Find the Sunny 16 exposure, then rewrite it two other ways that give exactly the same brightness, one for a background you want blurred and one for a faster shutter to freeze children running.",
        "stepByStepSolution": [
          "Step 1 (M1): Apply Sunny 16 for bright sun, set aperture f/16 and a shutter of one over the ISO, so with ISO 100 the base exposure is f/16 at 1/100 s, the marked stop nearest that value being 1/125.",
          "Step 2 (A1): Record f/16 at 1/100 s as the reference total light that every later change must preserve, and note the doubling shutter values 1/100, 1/200, 1/400, 1/800 stand for the marked 1/125, 1/250, 1/500, 1/1000.",
          "Step 3 (M1): For a background you want blurred, open the aperture three full stops from f/16 to f/11, to f/8, to f/5.6, which multiplies the light entering by eight.",
          "Step 4 (M1): Pay that back by shortening the shutter three stops from 1/100 to 1/200, to 1/400, to 1/800, so f/5.6 at 1/800 s passes exactly the same light as the base.",
          "Step 5 (M1): To freeze children running while keeping a workable aperture, open two stops to f/8 and shorten two stops to 1/400, giving f/8 at 1/400 s.",
          "Step 6 (A1): State the three equal exposures, f/16 at 1/100 s, f/5.6 at 1/800 s for shallow depth and f/8 at 1/400 s for action, each passing the same total light at ISO 100.",
          "Step 7 (M1): Recheck that every stop opened on the aperture is matched by the same number of stops cut from the shutter, so the brightness never shifts between the three frames."
        ],
        "keyTakeaway": "Sunny 16 fixes a base, and every stop you open the lens you cancel by shortening the shutter the same number of stops, so the exposure never changes."
      },
      {
        "id": "ex-ph-exposure-2",
        "title": "Metering a Dark Portrait and Correcting with Compensation",
        "problem": "A trader in deep black cloth sits against pale wrappers in strong sun. The camera reflected meter reads f/16 at 1/125 for ISO 100. Explain what the reflected reading will do to the black cloth and set a corrected exposure using compensation and reciprocity.",
        "stepByStepSolution": [
          "Step 1 (M1): Take the reflected reading, f/16 at 1/125 at ISO 100, and note the meter averages the bright wrappers and the black cloth toward one mid-grey tone.",
          "Step 2 (A1): Predict the fault, the true black cloth will be lifted to muddy grey because the meter tries to turn everything it reads into a mid-tone.",
          "Step 3 (M1): Protect the cloth by dialling exposure compensation of minus two stops, which corrects the base to f/16 at 1/500 s, two shutter steps from 1/125 to 1/250 to 1/500, passing one quarter of the light.",
          "Step 4 (M1): To soften the busy background without changing the corrected brightness, open the aperture one stop from f/16 to f/11.",
          "Step 5 (M1): Pay for that one stop by shortening the shutter one stop from 1/500 to 1/1000, so f/11 at 1/1000 s is the matched alternative setting.",
          "Step 6 (A1): Confirm the reciprocity, f/16 at 1/500 s and f/11 at 1/1000 s pass equal light, so the cloth stays genuinely black and the background separates.",
          "Step 7 (M1): Check that the pale wrappers are not blown out and the cloth reads dark, nudging half a stop by eye before exposing the whole roll."
        ],
        "keyTakeaway": "A reflected meter lifts dark subjects toward grey, so subtract compensation to hold the black and use reciprocity to change look without changing brightness."
      }
    ],
    "quiz": {
      "id": "quiz-ph-exposure",
      "topicId": "shs1-ph-t2-exposure-aperture-shutter-iso",
      "title": "The Exposure Triangle Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-exposure-1",
          "quizId": "quiz-ph-exposure",
          "questionText": "On the full-stop f-number scale, which aperture comes immediately after f/8?",
          "optionA": "f/9.5",
          "optionB": "f/11",
          "optionC": "f/13",
          "optionD": "f/14",
          "correctOption": "B",
          "subConcept": "Aperture scale",
          "explanation": "The full-stop ladder is 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22, so the stop after f/8 is f/11. The other values are not standard stops and would not halve the light exactly.",
          "remediationTip": "Write the whole f-scale and mark that each neighbour is about 1.4 times the last."
        },
        {
          "id": "q-ph-exposure-2",
          "quizId": "quiz-ph-exposure",
          "questionText": "Which aperture admits one stop MORE light than f/16, keeping the shutter the same?",
          "optionA": "f/22",
          "optionB": "f/8",
          "optionC": "f/11",
          "optionD": "f/32",
          "correctOption": "C",
          "subConcept": "Aperture stops",
          "explanation": "One stop brighter than f/16 is the next smaller number up the doubling ladder, f/11, which doubles the light. f/22 makes it darker and f/8 is two stops brighter, not one.",
          "remediationTip": "Move one step toward the small numbers to add a stop of light; f/16 to f/11 is that single step."
        },
        {
          "id": "q-ph-exposure-3",
          "quizId": "quiz-ph-exposure",
          "questionText": "Using the Sunny 16 rule with ISO 100 film in bright sunshine, which pair is correct?",
          "optionA": "f/16 at 1/100 s",
          "optionB": "f/16 at 1/15 s",
          "optionC": "f/5.6 at 1/100 s",
          "optionD": "f/8 at 1 s",
          "correctOption": "A",
          "subConcept": "Sunny 16 rule",
          "explanation": "Sunny 16 sets f/16 with a shutter of one over the ISO, so ISO 100 gives 1/100 s. The other rows mix a shade-aperture or a wrong shutter and would be several stops over-exposed.",
          "remediationTip": "Remember the two parts together, f/16 and a shutter of one over the ISO, and only drop the aperture when cloud thickens."
        },
        {
          "id": "q-ph-exposure-4",
          "quizId": "quiz-ph-exposure",
          "questionText": "A metered exposure is f/11 at 1/60 s. If you open the aperture to f/8 for one stop more light, which shutter keeps the exposure equal?",
          "optionA": "1/30 s",
          "optionB": "1/125 s",
          "optionC": "1/60 s",
          "optionD": "1/15 s",
          "correctOption": "B",
          "subConcept": "Reciprocity",
          "explanation": "f/8 admits one stop more than f/11, so by reciprocity the shutter must halve by one stop, taking 1/60 to 1/125. Halving the wrong way to 1/30 or staying at 1/60 would over-expose the frame.",
          "remediationTip": "Count the aperture stop then move the shutter one stop toward the faster, shorter-time end by the same amount."
        },
        {
          "id": "q-ph-exposure-5",
          "quizId": "quiz-ph-exposure",
          "questionText": "At a fixed f/8 the meter wants 1/60 s with ISO 100 film. Switching to ISO 400, which shutter gives the same brightness?",
          "optionA": "1/30 s",
          "optionB": "1/60 s",
          "optionC": "1/15 s",
          "optionD": "1/250 s",
          "correctOption": "D",
          "subConcept": "ISO and reciprocity",
          "explanation": "ISO 100 to 400 is two doublings, two stops more sensitivity, so the shutter must give up two stops of time: 1/60 to 1/125 to 1/250. The slower options would over-expose once the film is that much faster.",
          "remediationTip": "Track the ISO doublings, 100 to 200 to 400, and shorten the shutter once per doubling to hold the exposure."
        }
      ]
    }
  },
  {
    "id": "shs1-ph-t3-lighting-natural-modifiers",
    "subjectId": "photography",
    "level": "SHS 1",
    "term": 3,
    "orderIndex": 5,
    "title": "Light: Quality, Direction and Modifiers",
    "description": "How light decides a photograph: hard versus soft sources judged by apparent size, the four working directions, rim light and silhouette, reflectors, diffusers and flags, shaded window light indoors, and reading colour temperature by eye in Ghanaian daylight.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Light QUALITY means the hardness or softness of the shadow edge, and it is fixed by the size of the source relative to the subject, never by the wattage or the ISO.\n  - A bare bulb and the sun are hard sources; an overcast sky, a big shaded window and a 1 m softbox are soft sources.\n• The rule to memorise: bigger or nearer source = softer; smaller or farther source = harder.\n• Hard light gives crisp shadow edges, bright specular highlights, deep blocked shadows and high contrast; it suits texture, muscle, metal and drama.\n• Soft light gives gradients that wrap round the face, gentle highlight roll-off and forgiving skin; it suits portraits of babies, elders and graduation subjects.\n• Ghanaian midday: near Tamale at about 12:30 the sun is high, shadows fall short and straight down, the brows print darkness over the eyes and the forehead shines.\n• Golden hour near Accra (latitude about 5.6 degrees north) lasts roughly 24 minutes after sunrise and 24 minutes before sunset, because the sun climbs about 15 degrees per hour; the whole warm window is about 48 minutes.\n• Overcast is a giant softbox: no cast shadows at all, richer colour saturation on kente, paint and fabric, and about four stops less light than full sun.\n• Direction: FRONT light flattens and hides texture; SIDE light at 45 to 90 degrees rakes and models; BACK light separates the subject from the ground.\n• Rim light needs the source behind and a little above the head, with the direct beam shaded from the lens by your hand, a hat brim or a flag.\n• Silhouette is made by exposing for the BRIGHT background, not for the subject: meter the sky, then let the person print black.\n• Reflectors: white returns about half to one stop and stays neutral; silver returns about one to two stops and is hard-edged; gold warms skin; black does not add light at all, it subtracts.\n• Diffusers remove light: a 2-stop panel means four times the exposure time, so 1/125 s becomes about 1/30 s at the same aperture.\n• Window light indoors: put the subject 1 to 2 m from a NORTH-facing or shaded window, never in the sun beam itself; distance from the window is your contrast control.\n• White balance by eye: open shade about 7000 K, blue sky about 10000 K, direct daylight about 5500 K, overcast about 6500 K, tungsten about 3200 K, candle about 1900 K.\n• The mixed-light trap: tungsten lamp plus shaded window in one frame cannot be balanced for both; choose the dominant source and let the other cast a colour.",
    "detailedNotes": {
      "overview": "SHS 1 term 1 taught the camera and term 2 taught the exposure triangle; this topic supplies the light that the triangle only measures. A meter can tell you how MUCH light arrives but nothing about whether the shadows are hard or soft, whether the sun is behind the subject or on the lens, or whether the colour will read orange. WASSCE photography papers reward candidates who describe light precisely with the correct vocabulary, and the practical examination is won or lost on the quality of the light the student chose to work in. This topic builds the eye before it builds the toolkit.",
      "introduction": "Think of light as a physical material with four measurable properties: quality (hard or soft), direction (front, side, back, top), quantity (which the meter reads) and colour (which the white balance must match). Two photographs taken with identical settings can look completely different because one was shot at 08:30 with the sun to the side and the other at 12:30 with the sun overhead. Your task in every frame is to answer three questions before lifting the camera: where is the light coming from, how big is the source compared with my subject, and what colour is it.",
      "realWorldContext": "A market photograph at Makola at 13:00 has short black shadows under every nose and basket rim, and the tarpaulin roof throws a hard patchy light across the cloth sellers. Move the same trader to the shaded wall of a shop at 07:30 and her skin tones go smooth, her kente colours deepen, and the background stays readable. Radio and TV studios in Accra solve the same problem with big diffusion frames; school photo days in Kumasi fail because the shooter plants the class in open sun at 11:00 and then complains about squinting eyes. The light is the difference between an accurate record and a handsome picture.",
      "objectives": [
        "Predict whether a source will give hard or soft shadows from its size and distance relative to the subject",
        "Place the sun, a window or a lamp to obtain front, side, back, rim or silhouette treatment",
        "Choose and position a reflector, diffuser or flag and state the stop change it produces",
        "Adjust exposure when a modifier removes or returns light to the subject",
        "Set or correct white balance by judging the colour temperature of the source in the scene"
      ],
      "sections": [
        {
          "title": "Hard Light and Soft Light: Apparent Size Is the Whole Story",
          "content": "A shadow has three zones: the fully lit side, the fully dark side and the penumbra, the transition between them. A source that covers a wide angle as seen from the subject wraps light around the form, so many slightly different shadow directions overlap and the penumbra is broad; we call that soft. A source that covers a narrow angle paints one clean edge, so the penumbra is thin and the shadow looks cut with a knife; we call that hard. Nothing about the bulb or the cloud changes except apparent size, which is why moving a softbox closer to the face makes the light softer even though it also makes it brighter.",
          "bulletPoints": [
            "The sun is a small source: about half a degree wide, so its shadows are hard no matter how large the star really is.",
            "An overcast sky is a huge source: the whole cloud layer becomes the lamp, so shadows have almost no edge at all.",
            "Move a diffused source closer and it becomes larger in the subject's view, so light softens while quantity rises.",
            "Specular highlights shrink and burn on shiny skin under hard light; under soft light they stretch into a gentle gradient.",
            "Hard light is not a fault: use it for texture, sport, muscle, metal, architecture and dramatic mood."
          ],
          "keyTakeaway": "Judge softness from the angle the source subtends at the subject: big or close gives soft, small or far gives hard.",
          "realWorldExample": "A Krobo bead seller at the Krobo Ntroso workshop: in direct sun each glass bead throws a tiny hard-edged shadow and the surface glares; shot under the shade of a mango tree the same beads glow with soft rolling highlights and the colour separation is readable."
        },
        {
          "title": "Direction: Front, Side, Back, Rim and the Silhouette",
          "content": "Direction decides whether the picture explains or dramatises. Front light, coming near the lens axis, removes visible shadow so skin looks flat, wrinkles vanish and texture dies; it is honest for records and dull for art. Side light between 45 and 90 degrees to the axis builds a visible shadow on the far plane, so form, weave, carving and wear all read; this is the light a picture of a smock or a Kasena wall needs. Back light comes from behind the subject and does two jobs at once: it lights hair and shoulder edges, and it lifts the subject off the background. To keep back light from fogging the lens you must block the beam with your hand, a lens hood, a hat brim or a black board just out of frame.",
          "bulletPoints": [
            "Front light: shadow falls behind the subject, invisible to the lens, so faces flatten and colour is pure.",
            "Side light at about 45 degrees gives modelling with one triangle of light on the far cheek, the classic portrait pattern.",
            "Rim light needs the source behind and slightly above; the rim must be brighter than the background it separates from.",
            "Silhouette: expose for the bright sky, keep the subject clean-edged and remove every stray lit area.",
            "Low sun through dust, sea spray or forest mist at Kakum gives visible beams because the air itself becomes lit."
          ],
          "keyTakeaway": "Set direction deliberately: front records, side models, back separates, and blocking the beam protects your contrast.",
          "realWorldExample": "A fisherman mending nets at Elmina: shot at 12:30 with the sun behind you he is a flat catalogue figure; at 07:00 with the sun raking from the left, every rope strand, scar on the boat and line on his face becomes visible, and the sea glitters behind his shoulder as a rim."
        },
        {
          "title": "Modifiers: Reflectors, Diffusers, Scrims and Flags",
          "content": "A reflector is the cheapest studio a Ghanaian student can own. White foam board or a white cloth returns a soft, neutral lift of roughly half to one stop and is safe on skin. A silver surface returns about one to two stops but keeps hard shadows unless it is brought close, and close is where students overdo it and kill the modelling. Black board or a black cloth does not add light: used as a flag it subtracts, deepening the shadow side and giving a thin figure more shape. A diffuser, whether a purpose-made 2-stop panel, a mosquito net or a white bed sheet taped over a window, sits BETWEEN the source and the subject, enlarging the apparent source and stealing exposure in the process. A scrim is the same idea scaled up for the sun over a group.",
          "bulletPoints": [
            "Angle of incidence equals angle of reflection: to bounce sun back into a shadow, sight the board from the shadow and tilt it until the sun fills the board.",
            "Two stops of diffusion turns 1/125 s into about 1/30 s at the same aperture, so brace the camera or open up.",
            "A 2-stop diffuser plus a white reflector returning about one stop gives a net loss of only one stop.",
            "Keep the reflector just out of frame and check the edges of the picture for the board or its shadow.",
            "Gold reflectors warm the shadow side, useful at sunset but wrong under tungsten where it doubles the orange."
          ],
          "keyTakeaway": "Reflectors add, diffusers subtract, flags subtract sideways: always re-read the exposure after placing any modifier.",
          "realWorldExample": "In a form-four studio lesson at a school in Cape Coast, a shaded window becomes the key light, a white cardboard sheet leaned on a chair lift fills the shadow side, and a dark blazer hung on a third chair flags the wall behind the head so the silhouette prints clean."
        },
        {
          "title": "Reading the Ghanaian Day and Judging Colour by Eye",
          "content": "The tropics give you a compressed lighting day. Near Accra the sun rises about 06:00 and sets about 18:00 all year, so the useful low-light periods are short: about twenty-five minutes of warm directional light after sunrise, roughly the same again before sunset, then a bright flat midday that lasts hours, and a brief blue period with soft colour after the sun has gone. Overcast afternoons in the rainy season turn the whole sky into a softbox and cost you about four stops, which is why hand-held black-and-white film at ISO 400 is the sensible choice. Colour is a separate judgement: tungsten bulbs in a shop are around 3200 K and print orange unless balanced; open shade and blue sky push toward 7000 to 10000 K and print blue. Auto white balance chases the mixture and produces a grey compromise, so decide which source is the story and set the camera to match it.",
          "bulletPoints": [
            "Sun near Accra climbs about 15 degrees per hour, so 6 degrees of altitude takes about 24 minutes: the golden window is brief but reliable.",
            "Overcast costs roughly four stops compared with bright sun at the same clock time.",
            "Direct daylight about 5500 K, overcast about 6500 K, open shade about 7000 K, tungsten about 3200 K, candle about 1900 K.",
            "Under mixed light, balance for the source that lights the face and let the other one read as colour.",
            "A white cloth in the actual light, filled to the edge of the frame, gives a custom balance you can repeat all day."
          ],
          "keyTakeaway": "Plan the clock before the camera: brief warm angles, long flat noon, and colour decided by the dominant source.",
          "realWorldExample": "A graduation portrait outside the Great Hall at Legon: at 08:15 the gowns catch warm side light with the shaded Quad behind; by 11:00 the same spot gives black pits under the brows and squinting eyes, and the photographer who booked the early slot never fights the noon sun."
        }
      ],
      "commonMistakes": [
        "Assuming a stronger bulb or a bigger sun gives softer light: softness follows apparent size, so a 500 W bare bulb is harder than a 100 W lamp behind a one metre diffusion panel.",
        "Holding the shutter too slow after adding diffusion: a 2-stop panel takes 1/125 s down to about 1/30 s, and at a 50 mm setting hand-held that records visible camera shake; open the aperture or brace the camera instead.",
        "Bringing a silver reflector too close and too strong until it becomes a second key light, which prints a second shadow of the nose on the wall and destroys the modelling you came for.",
        "Metering the face when the picture is meant to be a silhouette; the subject then turns mid-grey with muddy edges instead of a clean black shape.",
        "Leaving white balance on auto in a shop lit by tungsten tubes with a bright doorway: the frame comes out neither warm nor neutral, and skin drifts green."
      ],
      "wassceExamTips": [
        "Paper 1 objective items ask you to name the property, not the feeling: write hard, soft, direction, colour temperature, ratio, never \"beautiful light\".",
        "Paper 2 design questions expect a lighting plan: draw the subject, the sun or window arrow, the reflector position and the camera position, and label the stop change each modifier causes.",
        "In Paper 3 the practical, examiners mark handling of materials and finish; a candidate who shoots the school assignment in shaded window light instead of open midday sun gets credit for judgement as well as for a better print.",
        "Keep a technical log of every frame you submit: source, direction, modifier, aperture, shutter and white balance; the log is where the method marks are visible.",
        "When a question asks for two ways to soften a shadow, give two DIFFERENT mechanisms, for example enlarge the source with diffusion and add a white reflector; two versions of the same idea score once."
      ],
      "summaryChecklist": [
        "Can I predict hard or soft shadows from the size of the source relative to the subject?",
        "Can I position front, side, back and rim light deliberately and state what each one does to texture?",
        "Can I make a clean silhouette by exposing for the bright background?",
        "Can I calculate the exposure change caused by a 2-stop diffuser or a one-stop reflector?",
        "Can I choose a white balance for mixed tungsten and daylight and defend the choice?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs1-ph-t3-lighting-1",
        "title": "Cloud Cover Over Makola: Four Stops Away",
        "problem": "At 09:00 in bright sun at Makola your meter reads 1/125 s at f/16 for ISO 100 film. A thick squall line covers the sun and the light falls by about four stops. Find the new shutter time if you keep f/16, the new aperture if you keep 1/125 s, and the ISO fix if you must keep both.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the four-stop ladder below 1/125 s: one stop 1/60, two stops 1/30, three stops 1/15, four stops 1/8.",
          "Step 2 (M1): Check the maths on time, not on the marked scale: four stops means multiplying the exposure time by 2 x 2 x 2 x 2 = 16, so (1/125) x 16 = 0.128 s.",
          "Step 3 (A1): The nearest camera setting to 0.128 s is the 1/8 s detent, which is far too slow to hold at any focal length, so this answer needs a tripod or a wall brace.",
          "Step 4 (M1): Alternative route, keep 1/125 s and open up four stops on the f-number scale: f/16, f/11, f/8, f/5.6, f/4.",
          "Step 5 (A1): f/4 is one defensible answer, but it throws the market background soft, so say what the change does to the picture as well as to the exposure.",
          "Step 6 (M1): Third route, hold 1/125 s and f/16 and raise sensitivity four stops: ISO 100 x 16 = ISO 1600.",
          "Step 7 (A1): Final answer: about 1/8 s at f/16, or 1/125 s at f/4, or 1/125 s at f/16 on ISO 1600 film; the exposure is the same in all three, the picture is not."
        ],
        "keyTakeaway": "A four-stop light loss is 16 times the exposure time, four aperture stops or four ISO steps - choose the route that keeps the shutter fast enough and the depth of field you want."
      },
      {
        "id": "ex-shs1-ph-t3-lighting-2",
        "title": "Diffuser and Reflector at a Cape Coast Window",
        "problem": "A shaded window gives a seated subject 1/125 s at f/4, ISO 100. You tape a 2-stop diffusion panel over the window and hold a white reflector about 1 m on the shadow side, returning roughly one stop. What is the new exposure, and what happened to the contrast?",
        "stepByStepSolution": [
          "Step 1 (M1): Treat each modifier as a signed stop change: the 2-stop diffuser is -2 stops at the subject, the white reflector is +1 stop in the shadow only.",
          "Step 2 (M1): Add the whole-frame effect: -2 + 1 = -1 stop, so total exposure needs one stop more.",
          "Step 3 (A1): One stop slower than 1/125 s is the marked 1/60 s setting, since (1/125) x 2 = 0.016 s which sits on the 1/60 detent.",
          "Step 4 (M1): Or hold the shutter and open one stop: f/4 to f/2.8, which is the answer if motion matters more than depth of field.",
          "Step 5 (M1): Note the contrast change separately from the exposure change: the diffuser widens the penumbra and the reflector raises the shadow floor, so the lit-to-shadow ratio falls by roughly one stop.",
          "Step 6 (A1): Final answer: 1/60 s at f/4 or 1/125 s at f/2.8, with noticeably softer shadow edges and an open shadow side."
        ],
        "keyTakeaway": "Modifiers change quantity and quality at the same time: total the stop changes for exposure, then judge the shadow edge separately."
      }
    ],
    "quiz": {
      "id": "quiz-shs1-ph-t3-lighting",
      "topicId": "shs1-ph-t3-lighting-natural-modifiers",
      "title": "Light Quality and Direction Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-shs1-ph-t3-lighting-1",
          "quizId": "quiz-shs1-ph-t3-lighting",
          "questionText": "Which change turns a hard source into a soft source?",
          "optionA": "Make the source larger relative to the subject, or move it closer to the subject",
          "optionB": "Move the source farther away while keeping its size the same",
          "optionC": "Replace the diffused lamp with a bare tungsten bulb",
          "optionD": "Raise the lamp so that the cast shadow falls shorter",
          "correctOption": "A",
          "subConcept": "Apparent source size and shadow edge",
          "explanation": "Softness is set by the angle the source subtends at the subject, so enlarging it or bringing it closer widens the penumbra and softens the edge. Moving the source away (option B) shrinks that angle and hardens the shadow, which is the most common wrong answer.",
          "remediationTip": "Hold your hand a palm away from a table lamp and then far from it: the shadow edge is crisp when the lamp is small in your view, soft when something big fills it."
        },
        {
          "id": "q-shs1-ph-t3-lighting-2",
          "quizId": "quiz-shs1-ph-t3-lighting",
          "questionText": "At about 12:30 under a clear sky near Tamale a face shows black eye sockets and a shining forehead. The cause is that",
          "optionA": "the sun is very low on the horizon behind the subject",
          "optionB": "an overcast layer is acting as a giant softbox",
          "optionC": "the sun is nearly overhead, giving short hard top-down shadows",
          "optionD": "a reflector is returning too much light into the shadow side",
          "correctOption": "C",
          "subConcept": "Midday tropical sun angle",
          "explanation": "With the sun high, the brows and nose cast shadows straight down into the eye sockets and the forehead takes the full beam. Option B describes the opposite condition: overcast light has almost no cast shadow at all.",
          "remediationTip": "Sketch the sun ray for morning, noon and evening on a head; where the brow casts into the eye you have drawn noon."
        },
        {
          "id": "q-shs1-ph-t3-lighting-3",
          "quizId": "quiz-shs1-ph-t3-lighting",
          "questionText": "A clean silhouette is exposed correctly when the meter reading is taken from",
          "optionA": "the shadow side of the subject",
          "optionB": "the brightest part of the background sky",
          "optionC": "a mid-tone ground between subject and sky",
          "optionD": "the lens hood held in the hand",
          "correctOption": "B",
          "subConcept": "Silhouette exposure",
          "explanation": "The background must print bright and the subject must print black, so the exposure is set for the sky; the unlit subject then falls several stops below that and goes dark. Metering the subject (option A) lifts it to mid-grey and destroys the shape.",
          "remediationTip": "Point at the sky, lock that reading with the exposure hold, recompose on the person and fire once."
        },
        {
          "id": "q-shs1-ph-t3-lighting-4",
          "quizId": "quiz-shs1-ph-t3-lighting",
          "questionText": "For a study of a weathered wooden fishing boat at Elmina that must show every grain and rope strand, the best light is",
          "optionA": "front light with the sun directly behind the camera",
          "optionB": "high noon sun shining straight down on the deck",
          "optionC": "a silver reflector bounced into the hull",
          "optionD": "low-angle side light raking across the surface",
          "correctOption": "D",
          "subConcept": "Raking light and texture",
          "explanation": "Light arriving at a shallow angle makes every ridge throw a long shadow, so texture is amplified; that is side or raking light. Front light (option A) fills the grain with light and flattens exactly what the question asks to show.",
          "remediationTip": "Shine a torch low across a carved adinkra board and then straight down the wall; the low beam shows the cut, the vertical beam hides it."
        },
        {
          "id": "q-shs1-ph-t3-lighting-5",
          "quizId": "quiz-shs1-ph-t3-lighting",
          "questionText": "A 2-stop diffusion panel is placed between the source and the subject. If the exposure was 1/125 s at f/4, the corrected shutter at f/4 is about",
          "optionA": "1/30 s",
          "optionB": "1/500 s",
          "optionC": "1/1000 s",
          "optionD": "1/250 s",
          "correctOption": "A",
          "subConcept": "Stop loss from diffusion",
          "explanation": "Two stops means four times the exposure time: (1/125) x 4 = 0.032 s, which lands on the marked 1/30 s setting. The distractor 1/500 s is the opposite error, treating the panel as if it added light.",
          "remediationTip": "Remember the panel only subtracts: two stops is four times the time, never a shorter time."
        }
      ]
    }
  },
  {
    "id": "shs2-ph-t1-lens-focal-length-depth-of-field",
    "subjectId": "photography",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Lenses, Focal Length and Depth of Field",
    "description": "Angle of view and 35 mm equivalence, perspective as a distance effect, the four controls of depth of field, the hyperfocal working that keeps a group and its background sharp, and the lens choice for portraits, groups, reportage and landscape.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Focal length is printed in millimetres and it fixes the ANGLE OF VIEW: about 24 mm wide, about 50 mm normal, about 135 mm and above telephoto on a full-frame camera.\n  - On 35 mm film a 50 mm lens is called normal because its focal length is close to the diagonal of the 36 x 24 mm frame.\n• Crop factor converts format to the 35 mm scale: APS-C about 1.5 times, four-thirds about 2.0 times. A 50 mm lens on APS-C sees like 75 mm; a 25 mm lens on four-thirds sees like 50 mm.\n• Longer focal length = narrower view = the subject is bigger AND the background looks magnified and pressed toward it; this is telephoto compression.\n• Wider focal length = broader view and exaggerated near-to-far distance; a face shot at 24 mm from 30 cm gives a large nose and small receding ears.\n• PERSPECTIVE is governed only by camera-to-subject DISTANCE. Two lenses show the same perspective for the same camera position; they only crop differently.\n• To hold the same head size with 85 mm and 35 mm the distances must be in the ratio 85 to 35 = 2.43 to 1, so a 3 m working distance becomes 7.3 m.\n• Depth of field, the sharp zone front to back, has FOUR controls: aperture, focal length, focusing distance, and format with its circle of confusion.\n• Aperture: f/2.8 gives a thin sharp slice, f/8 a wider one, f/16 a deep one; a smaller f number means a larger opening.\n• Focal length: at the same relative aperture and the same framing, a longer lens gives shallower depth of field and about 85/35 = 2.4 times the background blur of a 35 mm.\n• Focusing distance: focus farther and the zone grows; it always extends about twice as far behind the focus point as in front of it at moderate distances.\n• Hyperfocal formula: H = (f x f) / (N x c) + f, taking c = 0.03 mm for full frame. For 50 mm at f/11 this is 2500 / 0.33 + 50 = 7626 mm, about 7.6 m.\n• Focused at H, everything from about H/2, here 3.8 m, out to infinity is acceptably sharp: the landscape and group answer.\n• For 35 mm at f/11, H is about 3.75 m with a near limit about 1.9 m; at f/5.6 H falls to about 7.3 m with near limit 3.7 m, too tight for a group at 4 m.\n• Portrait glass: 85 mm at f/2.8 flatters the features and separates the background; 50 mm wide open at close range enlarges the nose; keep both eyes on one plane or stop to f/5.6.\n• Camera shake scales with focal length: hand-hold a 200 mm at 1/250 s or faster, brace the elbow, and exhale before the release.",
    "detailedNotes": {
      "overview": "This is the topic that turns a camera into a set of choices. SHS 1 measured how much light arrives; SHS 2 asks what the lens does with it, how much of the scene is sharp, and what the picture says about distance. WASSCE Paper 1 asks equivalence and depth-of-field relationships as objective items, Paper 2 expects a stated lens and aperture decision inside a design, and Paper 3 rewards a candidate whose submitted prints show deliberate control of separation or overall sharpness rather than whatever the camera gave by default.",
      "introduction": "Two numbers on your lens decide almost everything about the picture: the focal length in millimetres, which sets how much of the world is in the frame, and the f number, which sets how wide the light cone is and therefore how thin the sharp zone is. Everything else, compression, distortion, background blur, front-to-back sharpness in a group photograph, follows from where you stand and what you choose for those two numbers. Learn the relationships as rules and then test them with twenty frames of your own.",
      "realWorldContext": "A school photo day in Kumasi needs the back row of a thirty-student group sharp, which is a wide-angle plus f/8 plus the hyperfocal decision, not a portrait lens. A wedding shooter at a church service in Tema Community 1 wants the couple isolated from the pews, which is an 85 mm at f/2.8 from three metres. A trader portrait in an Adabraka provisions shop can be made with a 35 mm from two metres to keep the shelves readable behind the head. Same camera, same light, three different lenses, three different meanings.",
      "objectives": [
        "State the angle of view category of a lens from its focal length and convert for crop factor",
        "Explain why perspective is a camera-distance effect rather than a focal-length effect",
        "List and apply the four controls of depth of field in a chosen shooting situation",
        "Calculate hyperfocal distance and state the resulting sharp zone",
        "Select a focal length and aperture with reasons for a portrait, a group and a landscape brief"
      ],
      "sections": [
        {
          "title": "Angle of View, Focal Length and 35 mm Equivalence",
          "content": "Focal length is the distance from the optical centre of a lens focused at infinity to the plane where the image is sharp, and it is printed in millimetres. The number matters because it fixes the angle the lens can see: about 84 degrees across for 24 mm, about 47 degrees for 50 mm, about 18 degrees for 135 mm and about 8 degrees for a 300 mm. Because a smaller sensor samples the middle of the image circle, cameras with APS-C or four-thirds sensors need a conversion to talk about angle of view on the familiar 35 mm scale, and manufacturers print the guide number in the manual as the crop factor.",
          "bulletPoints": [
            "Wide about 35 mm and shorter, normal about 50 mm on full frame, telephoto 85 mm and longer.",
            "Equivalent focal length = actual focal length x crop factor: 50 mm x 1.5 = 75 mm on APS-C, 25 mm x 2.0 = 50 mm on four-thirds.",
            "Equivalence changes angle of view only; the physical focal length still governs depth of field and flare behaviour.",
            "A 24 mm zoom and a 70 mm prime can share a filter thread size and still be completely different tools.",
            "Maximum aperture travels with the lens, so a slow zoom at f/5.6 at the long end forces higher ISO indoors."
          ],
          "keyTakeaway": "Focal length sets how much of the world fits; multiply by the crop factor only when comparing angle of view between formats.",
          "realWorldExample": "A student with a four-thirds bridge camera and a 25 mm lens is really carrying a 50 mm normal view, so a whole class block only fits by walking back several metres instead of by changing the lens."
        },
        {
          "title": "Perspective, Distortion and Telephoto Compression",
          "content": "Perspective is the change in relative size between near and far objects, and it depends on where the camera stands, never on the glass in it. Move in close and the nose grows faster than the ears because it is nearer; stand back and features settle into proportion. Focal length only decides how much of the scene you keep, so if you take an 85 mm portrait from three metres and a 35 mm portrait from 7.3 metres, the head size matches and so does the perspective, but the 35 mm frame also contains the room. Standing at three metres with a 35 mm instead forces you to crop the head out of a wide frame, and the printed result looks distorted only because you moved closer.",
          "bulletPoints": [
            "Same camera position, different lenses: identical perspective, different coverage.",
            "Same subject size, different lenses: different camera distance, therefore different perspective.",
            "Distance ratio for equal framing equals focal-length ratio: 85 mm over 35 mm is 2.43, so 3 m becomes 7.3 m.",
            "Telephoto compression is a distance effect: standing far back while using 300 mm makes the background crowd up behind the subject.",
            "Converging verticals in building shots are fixed by raising the camera to the height of the façade or by shifting the lens, not by going wider."
          ],
          "keyTakeaway": "Change the position to change the shape of the face; change the lens only to change how much surrounds it.",
          "realWorldExample": "A chief photographed at a durbar near Manhyia Palace with a 200 mm from eight metres shows the crowd of dancers pressed close behind him; from two metres with the same lens only his shoulder and ear fit the frame and the durbar disappears."
        },
        {
          "title": "The Four Controls of Depth of Field and the Hyperfocal Working",
          "content": "Acceptable sharpness is a zone, not a plane, and four variables set its thickness. The aperture narrows the light cone as the f number rises, so depth grows. Focal length widens the cone at the same relative aperture, so longer lenses go thinner. Focusing distance matters most of all in practice: at one metre a 50 mm at f/4 may give only a few centimetres of zone, while at infinity it gives metres. Format enters through the circle of confusion, the blur size still judged sharp at printing distance, conventionally 0.03 mm on full frame and about 0.02 mm on APS-C. The hyperfocal distance H is the shortest focus that still reaches infinity; focusing there puts the near limit at roughly half of H and gives maximum depth for the frame.",
          "bulletPoints": [
            "H = (f x f) / (N x c) + f, with focal length f, f number N and circle of confusion c in millimetres.",
            "For 50 mm at f/11 with c = 0.03 mm: 2500 / 0.33 = 7576 mm, plus 50 mm gives about 7.6 m, near limit about 3.8 m.",
            "For 35 mm at f/11: 1225 / 0.33 = 3712 mm, plus 35 mm gives about 3.75 m, near limit about 1.9 m.",
            "Depth extends roughly twice as far behind the focus point as in front, so focus about one third into the scene.",
            "Diffraction softens the whole image below about f/16 on small sensors, so f/11 is usually the deepest useful setting."
          ],
          "keyTakeaway": "To keep a group and its background sharp, focus at the hyperfocal distance and stop down to about f/8 or f/11.",
          "realWorldExample": "A form-two class photograph on the school lawn is shot at 35 mm, f/11, focused at 3.75 m: the front row kneeling at 4 m and the palm line at 20 m both print sharp."
        },
        {
          "title": "Choosing Glass for the Job: Portrait, Group, Reportage, Landscape",
          "content": "A portrait lens must flatter, so 85 mm at f/2.8 from about three metres gives natural proportions, a soft background and room to talk to the sitter; a 50 mm used wide open at close distance enlarges the nose and forces the photographer into the personal space of an elder, which is culturally wrong in many Ghanaian settings. A group lens must be wide enough to include everybody from a distance you can actually stand at, and stopped down so the back row is sharp. Reportage needs a 35 mm at about f/8 set to a fixed focus so you shoot without hunting. Landscape wants f/11, a tripod, the hyperfocal calculation and the sun low.",
          "bulletPoints": [
            "Head-and-shoulders portrait: 85 mm, f/2.8 to f/4, working distance 2.5 to 3.5 m, focus on the near eye.",
            "Group of twenty: 35 mm, f/8 to f/11, focus one third into the crowd, check the far edge of the frame for cut-off shoulders.",
            "Reportage and event: 35 mm or 50 mm at f/5.6, ISO 400 to 800, shutter 1/125 s or faster.",
            "Landscape at Kakum or the Ada lagoon: 24 mm, f/11, hyperfocal, level horizon and a foreground anchor.",
            "School photo day: never shoot a group wide open; a single face in focus with blurred neighbours scores badly on finish."
          ],
          "keyTakeaway": "Match the lens to the message: separation for a person, inclusion for a crowd, depth for a place.",
          "realWorldExample": "A market documentary frame at Kejetia: 35 mm at f/8 and 1/125 s keeps the trader sharp while her stacked tin tomatoes and the passing truck behind her stay legible, which is exactly what a reportage frame has to do."
        }
      ],
      "commonMistakes": [
        "Confusing equivalence with optics: a 50 mm lens on an APS-C body is still a 50 mm lens for depth-of-field and flare purposes; only the angle of view behaves like 75 mm.",
        "Blaming the lens for a distorted face and buying a longer one, when the fault is a working distance of 40 cm; the fix is to step back and refill the frame.",
        "Shooting a twenty-student group at f/2.8 with an 85 mm, which puts the back row outside the depth of field; the honest fix is 35 mm at f/8 with the focus set one third into the crowd.",
        "Focusing on the nearest thing in the frame; because depth extends about twice as far behind the focus point as in front, this wastes half the zone.",
        "Stopping down to f/22 on a small sensor to force everything sharp, losing overall crispness to diffraction, and blaming the lens for a soft print."
      ],
      "wassceExamTips": [
        "Paper 1 likes the equivalence calculation: read crop factor times focal length and choose the answer; state it as an angle of view, not as a physical length.",
        "Paper 2 short-answer depth questions want all four controls named: aperture, focal length, focusing distance and format or circle of confusion, with the direction of each effect.",
        "When a design question asks for a portrait treatment, write the working distance and the f number, not only the focal length; the mark is on the reasoning, and it shows you understand depth of field.",
        "In Paper 3 the practical, keep the hyperfocal figure in the technical log beside each frame; an examiner can then see the depth decision rather than guessing it.",
        "Do not write that a wide-angle lens gives a large depth of field because it is wide; it is the short focal length plus small aperture plus long distance that do the work, and sloppy wording loses the accuracy mark."
      ],
      "summaryChecklist": [
        "Can I classify a lens as wide, normal or telephoto and convert its angle of view for a crop sensor?",
        "Can I prove that perspective depends on camera distance using two focal lengths at equal framing?",
        "Can I name the four controls of depth of field and predict the effect of each?",
        "Can I calculate hyperfocal distance for a 50 mm and a 35 mm lens and state the sharp zone?",
        "Can I justify a focal length and aperture choice for a portrait, a group and a landscape brief?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-ph-t1-lens-dof-1",
        "title": "Hyperfocal Setting for a Group on the Legon Lawn",
        "problem": "A full-frame camera with a 35 mm lens must keep a group at 4 m sharp together with a line of palms at 20 m. Take the circle of confusion as 0.03 mm. Find the hyperfocal distance at f/11, state the sharp zone, and check whether the group at 4 m is inside it.",
        "stepByStepSolution": [
          "Step 1 (M1): Write the formula with symbols defined: H = (f x f) / (N x c) + f, where f = 35 mm, N = 11 and c = 0.03 mm.",
          "Step 2 (M1): Compute the two products: 35 x 35 = 1225, and 11 x 0.03 = 0.33.",
          "Step 3 (A1): Divide and add the focal length: 1225 / 0.33 = 3712 mm, plus 35 mm gives H = 3747 mm, so focus at about 3.75 m.",
          "Step 4 (M1): Apply the hyperfocal result: with the lens focused at H the far limit is infinity and the near limit is about H / 2 = 1.87 m.",
          "Step 5 (A1): Compare with the brief: the group stands at 4 m, which is beyond 1.87 m, and the palms at 20 m are also inside the zone, so everything required is sharp.",
          "Step 6 (M1): Test the alternative aperture: at f/5.6, H = 1225 / 0.168 + 35 = 7327 mm, about 7.3 m, and the near limit is only about 3.7 m, leaving no margin in front of the group.",
          "Step 7 (A1): Final answer: f/11 focused at 3.75 m gives a sharp zone from about 1.9 m to infinity, which covers the group and the palms with room to spare."
        ],
        "keyTakeaway": "Compute H, focus at H rather than at the subject, and the zone runs from half of H to infinity."
      },
      {
        "id": "ex-shs2-ph-t1-lens-dof-2",
        "title": "Two Lenses, One Face: 35 mm against 85 mm",
        "problem": "A client portrait at a studio in Adabraka must show the head at the same size in two frames: one made with an 85 mm lens from 3 m on full frame, the other with a 35 mm lens. Find the working distance for the 35 mm and say which frame separates the background more.",
        "stepByStepSolution": [
          "Step 1 (M1): Set the equal-framing relation: working distance is proportional to focal length, so d(35) = (85 / 35) x 3 m.",
          "Step 2 (A1): Evaluate the ratio: 85 / 35 = 2.43, so the 35 mm lens must work from 2.43 x 3 = 7.3 m.",
          "Step 3 (M1): Compare background blur at equal framing and equal f number: the blur disc is proportional to focal length, so 85 mm gives about 2.4 times the softness of 35 mm.",
          "Step 4 (M1): Compare perspective: both frames are shot at their own distance, and the ratio 2.43 keeps the head size identical, so the features are rendered the same in both.",
          "Step 5 (A1): Note what the long lens cannot do: at 7.3 m the 35 mm keeps the workshop, the kente backdrop and the assistant in the frame, while the 85 mm removes them.",
          "Step 6 (A1): Final answer: 7.3 m for the 35 mm; the 85 mm frame gives about 2.4 times the background separation and is the choice for a clean client head, the 35 mm for an environmental portrait."
        ],
        "keyTakeaway": "At equal framing a longer lens buys background separation, not flattering features; flattering features come from standing farther off."
      }
    ],
    "quiz": {
      "id": "quiz-shs2-ph-t1-lens-dof",
      "topicId": "shs2-ph-t1-lens-focal-length-depth-of-field",
      "title": "Lenses and Depth of Field Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-shs2-ph-t1-lens-dof-1",
          "quizId": "quiz-shs2-ph-t1-lens-dof",
          "questionText": "A 50 mm lens on an APS-C camera with a crop factor of 1.5 gives an angle of view equivalent to",
          "optionA": "33 mm on the 35 mm scale",
          "optionB": "75 mm on the 35 mm scale",
          "optionC": "50 mm on the 35 mm scale",
          "optionD": "100 mm on the 35 mm scale",
          "correctOption": "B",
          "subConcept": "35 mm equivalence",
          "explanation": "Equivalent focal length is the actual focal length multiplied by the crop factor, and 50 x 1.5 = 75 mm. Option A divides instead of multiplying, the standard slip in this item.",
          "remediationTip": "A smaller sensor sees a smaller part of the image, so the number must get bigger, never smaller."
        },
        {
          "id": "q-shs2-ph-t1-lens-dof-2",
          "quizId": "quiz-shs2-ph-t1-lens-dof",
          "questionText": "Which set of changes increases depth of field?",
          "optionA": "Wider aperture, longer focal length, nearer focusing distance",
          "optionB": "Wider aperture, shorter focal length, nearer focusing distance",
          "optionC": "Narrower aperture, longer focal length, nearer focusing distance",
          "optionD": "Narrower aperture, shorter focal length, farther focusing distance",
          "correctOption": "D",
          "subConcept": "Depth of field controls",
          "explanation": "Depth grows when the light cone is narrowed, when the angle of view is shorter and when the focus is placed farther away. Option C gets one control right but the longer lens and its thinner zone ruin the combination.",
          "remediationTip": "Recite the three levers in one line: stop down, go wide, focus far."
        },
        {
          "id": "q-shs2-ph-t1-lens-dof-3",
          "quizId": "quiz-shs2-ph-t1-lens-dof",
          "questionText": "The perspective relationships in a portrait, such as the size of the nose compared with the ears, are controlled mainly by",
          "optionA": "the distance between camera and subject",
          "optionB": "the focal length of the lens alone",
          "optionC": "the aperture chosen for the frame",
          "optionD": "the position of the light source",
          "correctOption": "A",
          "subConcept": "Perspective and camera distance",
          "explanation": "Relative sizes of near and far parts of the face depend only on how close the camera is. Focal length (option B) changes how much of the scene is included, and only appears to change the shape because it changes the distance you stand at.",
          "remediationTip": "Photograph one face twice from the same chair, once at 35 mm and once at 85 mm, then crop to match; the features agree."
        },
        {
          "id": "q-shs2-ph-t1-lens-dof-4",
          "quizId": "quiz-shs2-ph-t1-lens-dof",
          "questionText": "A 50 mm lens on full frame is focused at its hyperfocal distance of about 7.6 m. The zone of acceptable sharpness runs from",
          "optionA": "7.6 m to infinity only",
          "optionB": "about 1 m to 7.6 m",
          "optionC": "about 3.8 m to infinity",
          "optionD": "infinity back to 15 m",
          "correctOption": "C",
          "subConcept": "Hyperfocal zone",
          "explanation": "Focused at H the far limit is infinity and the near limit is roughly half of H, so 7.6 / 2 gives about 3.8 m. Option A forgets that the zone extends in front of the focus point as well.",
          "remediationTip": "Write H over 2 beside every hyperfocal answer; that single fraction carries the accuracy mark."
        },
        {
          "id": "q-shs2-ph-t1-lens-dof-5",
          "quizId": "quiz-shs2-ph-t1-lens-dof",
          "questionText": "A 200 mm lens hand-held for dancers at a Homowo festival demands roughly 1/250 s or faster because",
          "optionA": "telephoto lenses transmit less light than wide-angle lenses",
          "optionB": "the narrow angle of view magnifies the movement of the hand, so shake shows up",
          "optionC": "the shutter must be fast to freeze the dancers' legs",
          "optionD": "a long lens cannot focus closer than 2 m",
          "correctOption": "B",
          "subConcept": "Camera shake and focal length",
          "explanation": "Any small rotation of the camera is stretched more by a lens with a narrow angle of view, so the blur from hand movement is magnified. Option C confuses subject motion with camera motion; freezing dancers is a separate shutter decision.",
          "remediationTip": "Apply the old hand-holding guide of about 1 over the focal length in millimetres and check your shutter against it before you shoot."
        }
      ]
    }
  },
  {
    "id": "shs2-ph-t1-darkroom-black-white-printing",
    "subjectId": "photography",
    "level": "SHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "The Black-and-White Darkroom",
    "description": "Developer, stop bath and fixer and what each one does; dilution and temperature discipline at about 20 degrees Celsius; safelight testing, contact sheets, enlarger alignment, test strips, dodging and burning, washing, drying and safe chemical disposal in a school darkroom.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Three baths in this fixed order: DEVELOPER, then STOP BATH, then FIXER, then washing; the sequence is the mark scheme, not a preference.\n  - Developer turns the exposed silver halide grains into black metallic silver, so the latent image becomes visible.\n  - Stop bath, an acetic acid solution, halts development instantly and protects the fixer from alkaline developer carry-over.\n  - Fixer dissolves the UNexposed and undeveloped silver halide out of the emulsion, making the image permanent and no longer light-sensitive.\n• Standard film and paper developers work at about 20 degrees Celsius; a few degrees warm makes print development very fast and over-developed negatives muddy.\n• Dilution arithmetic you must show: a 1+3 working solution of 1000 mL is 250 mL stock plus 750 mL water; 1+4 for 1000 mL is 200 mL stock plus 800 mL water; 1+9 for 600 mL is 60 mL stock plus 540 mL water.\n• Agitation for tank development: tap the tank 30 seconds at the start, then about 10 seconds at the end of each following minute; inconsistent agitation gives uneven density between negatives.\n• Film in the tank is handled in total darkness; printing is done under a safelight, and a safelight must be tested before the first print, never after a ruined batch.\n• Safelight test: lay a sheet of printing-out paper face up, cover part of it with a coin, expose for two minutes under the safelight, develop, and look for any tone under the coin or on the exposed half.\n• A contact sheet puts every exposed negative in a strip against fresh paper under the enlarger glass, so you choose frames and read development in one session.\n• Enlarger alignment: the negative stage, the lens and the baseboard must be square to each other, otherwise one corner of the print is sharp and the opposite corner soft.\n• Focus with an annulus or grain loupe on the emulsion side of the negative at full aperture, then stop down to the printing aperture before the exposure.\n• Test strip: cut the paper into four or five strips and give each a different time, for example 5, 10, 20 and 40 seconds at the chosen aperture, so the correct exposure is measured rather than guessed.\n• Exposure falls with the square of the enlarger height: raising the head from 60 cm to 90 cm multiplies the required time by 1.5 squared, that is 2.25, so 10 seconds becomes about 22 seconds.\n• One stop on the lens aperture halves or doubles the time: 12 seconds at f/8 becomes 24 seconds at f/11 and 6 seconds at f/5.6.\n• Dodging holds light BACK from an area during the exposure; burning ADDS light to an area, usually with a wire-and-cotton dab held moving so no edge shows.\n• A fibre print develops in about 60 to 90 seconds, is stopped for 30 seconds, fixed about twice as long as it clears, then washed; residual thiosulphate in a print causes yellow stains within a few years.\n• Print toner, selenium or archival wash water aside, the working habit that matters is order and timing, with each bath covered, labelled and mixed to a written dilution.",
    "detailedNotes": {
      "overview": "This topic is the second half of the black-and-white process: SHS 1 term 2 loaded the film and term 3 exposed it, now SHS 2 makes the print. WASSCE examiners treat the darkroom as a method subject, so the marks fall on correct sequence, correct terminology, measured timings and clean handling rather than on luck. Students who can describe why a stop bath exists and why a print is washed outscore those who only ever produced one accidental good print.",
      "introduction": "A darkroom is a production line of four wet stages and one light stage. Chemical action is time and temperature, so every print is decided before it is made: the negative you select, the grade of paper, the aperture, the measured base exposure and the order you lay out the trays. Learn the line first, then learn to bend it with dodging and burning. Work in centimetres, seconds, millilitres and degrees, and never in guesses.",
      "realWorldContext": "A school darkroom in Ho runs on a single enlarger, three plastic trays in a black-out tent and a red safelight that the technician tests each term. Form-two students print a contact sheet of their Kintampo Falls and Cape Coast castle frames, and the frames chosen from that sheet become the Paper 3 submission. In commercial work, wedding and ID studios in Kumasi and Accra still print a test strip when a new batch of paper arrives, and the school habit is exactly the shop habit.",
      "objectives": [
        "Name the three processing baths in order and state the chemical job of each",
        "Prepare a stated dilution of working solution and show the arithmetic of stock and water volumes",
        "Carry out a safelight test and interpret the result",
        "Align and focus an enlarger and produce a graded test strip to find the base exposure",
        "Dodge and burn a print and describe the washing and drying routine that makes it last"
      ],
      "sections": [
        {
          "title": "The Three Solutions: Developer, Stop Bath, Fixer",
          "content": "Exposed silver halide grains in an emulsion carry a latent image, a handful of silver atoms that no eye can see. The developer is an alkaline reducing agent that attacks those exposed grains far faster than the unexposed ones, converting them to opaque metallic silver; this is why development is the control over contrast and density. Development does not stop by itself, so the print or film is moved into a dilute acetic acid stop bath, which neutralises the alkaline developer inside the emulsion in a few seconds and prevents it from contaminating the fixer. The fixer, usually ammonium or sodium thiosulphate with a hardener and an acid buffer, dissolves the still-sensitive unexposed halides out of the gelatin and leaves the silver image behind. Skipping the stop bath exhausts fixer early and brings dichroic fog; skipping the fixer leaves the image light-sensitive and it will blacken on the wall.",
          "bulletPoints": [
            "Developer makes the image visible; fixer makes it permanent; the stop bath protects both jobs.",
            "Developer is alkaline, stop bath and fixer are acidic, so they must never be mixed in one vessel.",
            "Exhausted fixer shows as scum that will not clear, or by a test with a drop of fixer on fresh emulsion.",
            "Two short fixer baths clear a print faster and more safely than one long bath left unattended.",
            "Write the make-up date, dilution and capacity, in sheets of paper or rolls of film, on every bottle."
          ],
          "keyTakeaway": "Sequence is chemistry: develop, stop, fix, wash, and each bath exists to protect the next one.",
          "realWorldExample": "A student in the school darkroom pulls a print straight from developer into fixer; the fixer turns milky after six prints and the last three show pale yellow stain, a loss traced back to the missing stop bath rather than to bad paper."
        },
        {
          "title": "Dilution, Temperature and Agitation Discipline",
          "content": "Concentrate ratios are read as parts of stock to parts of water, so 1+3 means one measure of stock plus three measures of water, four measures in total. To mix 1000 mL of a 1+3 working solution you divide 1000 by 4 to get 250 mL of stock, then add 750 mL of water. For 600 mL of paper developer at 1+9 you take 600 divided by 10, which is 60 mL stock and 540 mL water. Temperature drives reaction speed: film developers are held at 20 degrees Celsius, and if the tank is warm the film over-develops and prints flat and muddy, if cold it under-develops and prints thin with blocked shadows. There is no safe rule of thumb for warm rooms; the honest method is a water bath and a thermometer, or the manufacturer time and temperature chart. Agitation keeps fresh developer at the emulsion and used developer off it: 30 seconds of tapping at the start, then about 10 seconds at the end of each minute.",
          "bulletPoints": [
            "Dilution total parts = stock parts plus water parts, so 1+3 is 4 parts and 1+9 is 10 parts.",
            "A 1+19 stop bath of 2000 mL is 100 mL of stock with 1900 mL of water.",
            "Hold film developer at about 20 degrees Celsius and check it with a lab thermometer, not by hand feel.",
            "Uneven agitation between negatives gives density differences that look like exposure errors on the contact sheet.",
            "Used print developer oxidises; keep the tray covered and remake it on capacity, not on colour alone."
          ],
          "keyTakeaway": "Mix by dividing the total volume by the total number of parts, and control chemistry with temperature and agitation, not with guesswork.",
          "realWorldExample": "On printing day the technician prepares 1000 mL of 1+3 developer in a graduated cylinder, so all six students in the shift work on identical strength and their test strips become comparable."
        },
        {
          "title": "Safelight Testing and the Contact Sheet",
          "content": "A safelight passes only filtered light that printing-out paper is barely sensitive to, but it still fogs paper given time, and a bulb of the wrong wattage or a filter with a crack turns the room into an exposure source. The test costs ten minutes and saves a box of paper: lay a sheet face up on the bench, rest a coin on it, leave it two minutes under the working safelight, then develop, stop, fix and wash that sheet. Paper with no tone and a crisp coin edge passes; a grey veil or a visible coin shadow after that short time means the bulb is wrong, too bright, too close, or the room has a light leak. A contact sheet is the next habit: film strips laid emulsion down on a fresh sheet under the enlarger glass with the lens closed gives every frame at once at negative size, showing density, dust and development consistency, so you choose the print and diagnose the roll together.",
          "bulletPoints": [
            "Test the safelight with fresh paper at the distance and time you actually work, at least once per session.",
            "Check for light leaks around the door, the enlarger lamp housing and any window with the room lights off.",
            "On a contact sheet, place the emulsion sides of film and paper in contact or the image is soft.",
            "Give the contact sheet a short measured exposure from the base reading found on the test strip.",
            "Read the contact sheet under raking light to see dust on the negative, which is cleaned before printing, not printed."
          ],
          "keyTakeaway": "Prove the safelight before you trust a print, and let a contact sheet pick the frames instead of luck.",
          "realWorldExample": "A form-three candidate in Cape Coast finds three frames fogged on the contact sheet and one over-dense; the safelight test that morning had failed, and remaking the sheet after changing the bulb salvaged the whole assignment."
        },
        {
          "title": "Enlarger Alignment, Focus and the Test Strip",
          "content": "Set up order matters: with the lamp off, place a cleaned negative emulsion-down in the carrier, drop the head to a height that fills the needed print size, and look at the projected rectangle on the baseboard. If the far edge of the frame is sharp while the near edge is soft at the same focus, the lens axis is not square to the board; correct it with the stage or head adjustment before you waste paper. Focus at full aperture for the finest image, then stop down to the printing aperture, typically f/8, since depth of the grain is at its best one or two stops short of wide open. Now measure rather than guess: lay strips of paper across the board in a ladder with a card sliding the light off each in turn, giving 5, 10, 20 and 40 seconds in one exposure, then process all four together and read the base time plus a touch for highlight detail. When you enlarge, the light must be repaid for the extra area: doubling the linear size needs four times the exposure.",
          "bulletPoints": [
            "Raising the head from 60 cm to 90 cm makes the image 1.5 times larger and needs 1.5 squared, about 2.25 times, the exposure time.",
            "One stop on the aperture halves or doubles the exposure: 12 seconds at f/8 is 24 seconds at f/11.",
            "Use a grade 2 paper as the school default and reserve grades 3 and 4 for flat negatives.",
            "Time the test strip with a timer or a count, never with a conversation in the room.",
            "Record base exposure, aperture, height and grade beside the negative number for reprinting later."
          ],
          "keyTakeaway": "Square the enlarger, focus wide and print stopped down, then find the base exposure from a measured ladder of strips.",
          "realWorldExample": "A 20 cm wide print from a 35 mm negative at 60 cm enlarger height becomes 30 cm wide at 90 cm, and the 10-second base time must rise to about 22 seconds or the larger print prints thin."
        },
        {
          "title": "Dodging, Burning, Washing, Drying and Chemical Safety",
          "content": "Once the base time is known, the print is sculpted. Dodging blocks part of the beam during the exposure with a wire-mounted card or looped hands kept constantly moving, so bright areas print darker than they would; this is done before the main exposure, so it shortens the time on that region rather than lengthening the total. Burning adds exposure to an area by shading the rest of the beam with a dab of cotton on a coat hanger, and because the extra light is added to an exposure that already exists, one additional stop on a 10-second base needs about 10 seconds more through the opening. Then finish properly: develop a fibre print 60 to 90 seconds, stop 30 seconds, fix twice the clearing time, wash at least ten minutes in running water, or five minutes after a two-minute hypo clearing bath, and dry between blotters or on a mesh screen. Safety is not decoration: gloves for fixer, no acid poured into developer, trays covered, the room ventilated while mixing, and spent fixer collected in a labelled container for the laboratory technician because silver-loaded thiosulphate must not run into the school drain or the gutter.",
          "bulletPoints": [
            "Dodge to hold back, burn to add; keep every tool moving or it prints an edge.",
            "A print that shows a bright halo around a burned area was burned too long or the dab was too close.",
            "Washing removes hypo and silver complexes; under-washed prints yellow in a year or two.",
            "Never mix bleach or acid with fixer, and never store two solutions in unlabelled bottles.",
            "Collect spent fixer and stop bath in marked containers; alkaline developer is diluted and disposed only per the school laboratory rule."
          ],
          "keyTakeaway": "A good print is measured exposure, moving hands while dodging and burning, and a full wash, with the chemistry handled as laboratory material.",
          "realWorldExample": "For a WASSCE submission frame of the Osu night market, the candidate dodges the neon sign for a third of the exposure and burns the wet road in front for ten extra seconds, then washes the print in the running tray for a full ten minutes before drying it on mesh."
        }
      ],
      "commonMistakes": [
        "Pouring alkaline developer into the same tray as acidic stop bath or fixer, which neutralises both and releases sulphur dioxide from the fixer; each bath gets its own tray, tongs and funnel.",
        "Skipping the stop bath and pulling prints straight from developer into fixer, so the fixer exhausts early and the prints later show yellow stain.",
        "Leaving the enlarger lamp on while composing with the paper in position, which fogs the sheet before the timer is even started.",
        "Trusting the safelight without testing it, then losing a whole box of paper to a faint grey veil that only shows up in the last print.",
        "Under-washing a fibre print because the queue for the washing tray is long; residual hypo yellows the image on the wall within a year or two and it cannot be undone."
      ],
      "wassceExamTips": [
        "Paper 1 objective items on the darkroom ask the ORDER of the baths and the job of each; write developer, stop bath, fixer, wash, and never swap stop and fix.",
        "Paper 2 process questions carry method marks for showing dilution arithmetic: state total parts, divide, then give stock and water volumes; an answer of 250 mL plus 750 mL earns the accuracy mark.",
        "Paper 3 practicals mark handling of materials: a candidate whose tray layout, tongs, covered bottles and labelled chemical container are orderly gains the discipline marks even when one print fails.",
        "When asked why a print is thin, answer in the correct chain: negative density, then exposure, then development, then paper grade; examiners award points along that sequence.",
        "Keep a darkroom log of times, temperatures, dilutions and grades beside each print; the log itself is evidence for the method marks and it lets you reprint a frame exactly."
      ],
      "summaryChecklist": [
        "Can I state the four wet stages in order and the chemical job of developer, stop bath and fixer?",
        "Can I prepare 1000 mL of a 1+3 solution and 600 mL of a 1+9 solution with the arithmetic shown?",
        "Can I perform and interpret a safelight test on printing-out paper?",
        "Can I square and focus an enlarger and find a base exposure with a graded test strip?",
        "Can I dodge and burn a print and describe the washing, drying and chemical disposal routine?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-ph-t1-darkroom-1",
        "title": "Mixing Paper Developer and Timing a Print Schedule",
        "problem": "The darkroom has only stock paper developer concentrate. Prepare 600 mL of working solution at 1+9 and then plan the full tray schedule for one resin-coated print: development 1 minute, stop bath 30 seconds, fixing 2 minutes and washing 10 minutes. Find the volume of stock and water, the total schedule time, and the new total if a 2-minute hypo clearing bath lets the wash drop to 5 minutes.",
        "stepByStepSolution": [
          "Step 1 (M1): Read the dilution as parts: 1+9 means 1 part stock plus 9 parts water, so the working solution has 10 parts in total.",
          "Step 2 (M1): Divide the required volume by the total parts: 600 / 10 = 60 mL of stock.",
          "Step 3 (A1): Subtract to find the water: 600 - 60 = 540 mL of water, so measure 60 mL stock and make up with 540 mL.",
          "Step 4 (M1): Convert the schedule to minutes: development 1.0, stop 0.5, fixing 2.0, washing 10.0.",
          "Step 5 (A1): Add them: 1 + 0.5 + 2 + 10 = 13.5 minutes for the straightforward schedule.",
          "Step 6 (M1): Insert the hypo clearing bath of 2 minutes and the shortened wash of 5 minutes: 1 + 0.5 + 2 + 2 + 5.",
          "Step 7 (A1): Final answer: 60 mL stock with 540 mL water; 13.5 minutes without hypo clearing, 10.5 minutes with it, saving 3 minutes per print while still clearing the fixer."
        ],
        "keyTakeaway": "Dilution is total volume over total parts, and the print schedule is a written addition, not a memory test."
      },
      {
        "id": "ex-shs2-ph-t1-darkroom-2",
        "title": "Enlarger Height Change and the Exposure Bill",
        "problem": "A base exposure of 10 seconds at f/8 from an enlarger height of 60 cm gives a print 20 cm wide. The teacher asks for a 30 cm wide print from the same negative. Find the new enlarger height, the new exposure time, and the alternative time if the aperture is opened one stop to f/5.6.",
        "stepByStepSolution": [
          "Step 1 (M1): Compare the required image sizes: 30 / 20 = 1.5, so every linear dimension of the projected image must grow 1.5 times.",
          "Step 2 (M1): Image size is proportional to the projection distance for a fixed negative and lens, so raise the head to 60 x 1.5 = 90 cm.",
          "Step 3 (M1): Light spreads over an area, and area grows as the square of the linear factor, so the exposure multiplier is 1.5 squared.",
          "Step 4 (A1): Evaluate: 1.5 x 1.5 = 2.25, therefore 10 x 2.25 = 22.5 seconds, set as about 22 seconds at f/8.",
          "Step 5 (M1): Alternative route on the lens: one stop wider passes twice the light, so halve the time: 22.5 / 2 = 11.25 seconds.",
          "Step 6 (A1): Final answer: 90 cm head height with 22 seconds at f/8, or about 11 seconds at f/5.6, refocusing at full aperture and stopping down before exposing.",
          "Step 7 (M1): Check the cost of the f/5.6 route: the depth of field in the image shrinks, so any tilt in the negative stage shows as a soft corner that was invisible at f/8."
        ],
        "keyTakeaway": "Bigger prints are paid for in exposure: multiply the time by the square of the height ratio, or buy it back with the aperture and lose some sharpness."
      }
    ],
    "quiz": {
      "id": "quiz-shs2-ph-t1-darkroom",
      "topicId": "shs2-ph-t1-darkroom-black-white-printing",
      "title": "Darkroom Processing Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-shs2-ph-t1-darkroom-1",
          "quizId": "quiz-shs2-ph-t1-darkroom",
          "questionText": "In film processing, the developer works by",
          "optionA": "dissolving the unexposed silver halide out of the emulsion",
          "optionB": "hardening the gelatin so the base cannot scratch",
          "optionC": "converting the exposed silver halide grains into metallic silver",
          "optionD": "neutralising the alkaline bath before fixing",
          "correctOption": "C",
          "subConcept": "Action of the developer",
          "explanation": "The developer is a reducing agent that turns exposed grains into opaque metallic silver, making the latent image visible. Option D is the stop bath and dissolving unexposed halide, option A, is the job of the fixer.",
          "remediationTip": "Write the three baths with one verb each: developer CONVERTS, stop bath HALTS, fixer DISSOLVES."
        },
        {
          "id": "q-shs2-ph-t1-darkroom-2",
          "quizId": "quiz-shs2-ph-t1-darkroom",
          "questionText": "The working temperature normally aimed at for standard film development is about",
          "optionA": "20 degrees Celsius",
          "optionB": "35 degrees Celsius",
          "optionC": "5 degrees Celsius",
          "optionD": "60 degrees Celsius",
          "correctOption": "A",
          "subConcept": "Temperature control",
          "explanation": "Standard developers are calibrated around 20 degrees Celsius; warmer solutions over-develop and cooler ones under-develop. The distractor 35 degrees Celsius would push the reaction far too fast and print muddy.",
          "remediationTip": "Keep a lab thermometer in the water bath and read it before the tank is filled, never judge warmth with your hand."
        },
        {
          "id": "q-shs2-ph-t1-darkroom-3",
          "quizId": "quiz-shs2-ph-t1-darkroom",
          "questionText": "A print taken from the fixer straight to the drying screen, without washing, will",
          "optionA": "dry with a brilliant white base that lasts for decades",
          "optionB": "lose its image entirely because the silver washes out later",
          "optionC": "develop further while it dries in the dark",
          "optionD": "retain hypo that later oxidises into a yellow stain",
          "correctOption": "D",
          "subConcept": "Washing and archival keeping",
          "explanation": "Washing removes thiosulphate and silver complexes from the paper base and emulsion; left behind, they oxidise into yellow-brown stain over months or years. Option C is wrong because development already stopped in the stop bath.",
          "remediationTip": "Remember the chain: stop, fix, WASH, dry; a missing wash is a future stain."
        },
        {
          "id": "q-shs2-ph-t1-darkroom-4",
          "quizId": "quiz-shs2-ph-t1-darkroom",
          "questionText": "A correct safelight test on printing-out paper is judged from",
          "optionA": "a strip of negative held against the bulb for one second",
          "optionB": "a sheet partly covered for two minutes, then processed and compared",
          "optionC": "the colour of the bulb glass when switched on",
          "optionD": "how bright the enlarger lamp looks through the filter",
          "correctOption": "B",
          "subConcept": "Safelight testing",
          "explanation": "The paper itself is the only reliable detector: an uncovered area fogged after two minutes while the covered part stays clean proves the safelight is unsafe. Judging the bulb by eye, options A, C and D, tells you nothing about paper sensitivity.",
          "remediationTip": "Run the coin-on-paper test at the height you actually work, at the start of every new paper batch."
        },
        {
          "id": "q-shs2-ph-t1-darkroom-5",
          "quizId": "quiz-shs2-ph-t1-darkroom",
          "questionText": "An enlarger head is raised from 60 cm to 90 cm. A base exposure of 10 seconds at f/8 must become approximately",
          "optionA": "7 seconds",
          "optionB": "15 seconds",
          "optionC": "22 seconds",
          "optionD": "45 seconds",
          "correctOption": "C",
          "subConcept": "Exposure and projection distance",
          "explanation": "The height ratio is 90 / 60 = 1.5, and the light is spread over 1.5 squared, that is 2.25 times the area, so 10 x 2.25 = 22.5 seconds, set near 22 seconds. Option B, 15 seconds, is the common slip of multiplying by the linear ratio only.",
          "remediationTip": "Square the height ratio before you touch the timer; a bigger print always pays with more than proportional time."
        }
      ]
    }
  },
  {
    "id": "shs2-ph-t2-studio-flash-lighting",
    "subjectId": "photography",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 3,
    "title": "Studio and Flash Photography",
    "description": "Guide number arithmetic with GN equal to aperture times distance, sync speed and what the shutter really controls, TTL against manual power, ISO and inverse-square behaviour, umbrellas, softboxes, grids, gels and background separation, and key, fill and rim ratios in a single-light studio portrait.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• The guide number links power, aperture and reach: GN = aperture x distance, so aperture = GN / distance and distance = GN / aperture.\n  - A GN 32 head at ISO 100 in metres lights a subject 4 m away at f/8, because 32 / 4 = 8, and a subject at 2 m at f/16, because 32 / 2 = 16.\n  - Metric guide numbers convert to feet by multiplying by about 3.28, so GN 32 m is roughly GN 105 ft.\n• Guide numbers are quoted at a stated ISO: raising ISO 100 to 400 is four times the sensitivity, so the GN doubles to 64, because GN grows with the square root of the sensitivity ratio.\n• Halving the flash power costs one stop of reach: half power on a GN 32 head is 32 / 1.414, about 22.6 m; quarter power is exactly half the GN, 16 m.\n• Distance obeys the inverse-square law, and the aperture formula already carries it: twice the distance needs two stops more aperture, two stops more power, or four times the sensitivity gain.\n• Sync speed is the fastest shutter at which the whole frame stands open when the flash fires, commonly about 1/200 s or 1/250 s on a focal-plane shutter body.\n• Firing a standard head above the sync speed without high-speed or FP mode prints a black curtain band across part of the frame.\n• Within the sync range the shutter does not change the flash exposure of the subject; it changes only the ambient, so the aperture is for the face and the shutter is for the room behind it.\n• TTL meters the flash through the lens and fires until it decides it is right; manual holds a fixed fraction of power, which is what a studio and a WASSCE technical log need because manual is repeatable.\n• Key-to-fill ratio is read in stops of light: 1 stop difference is 2 to 1, 2 stops is 4 to 1, 3 stops is 8 to 1; portrait modelling usually sits between 2 to 1 and 4 to 1.\n• Fill flash outdoors is set one stop BELOW the ambient reading: with a daylight ambient of f/16 at ISO 100, a GN 32 head at 3 m delivers about f/11, since 32 / 3 = 10.7, which is one stop of fill.\n• A flash matched exactly to that daylight at 3 m would need GN 33, because 11 x 3 = 33; going beyond it flattens the face and prints a second shadow.\n• Modifiers trade reach for softness: a shoot-through umbrella absorbs about one stop, so GN 32 falls to about 22.6 m and at f/8 reaches only about 2.8 m; a bounce umbrella and a softbox cost as much or more.\n• Grids, snoots and a black flag keep the beam on the subject and off the wall, which is how a plain painted school wall gives background separation without a second head.\n• Colour gels correct or decorate: CTO orange over the head balances flash to tungsten shop light, a pale blue CTB matches it to daylight, and key against backdrop in crossed colours splits the palette.\n• One head on a stand at 45 degrees above and to one side of the face, with a white board opposite and a logged setting, is a complete Ghanaian school studio kit.",
    "detailedNotes": {
      "overview": "Artificial light is where a photography candidate gains real control, because a flash gives the same output at 06:00 and at 22:00 and it can be calculated rather than negotiated with the weather. This topic carries the guide number formula, the sync-speed limit, the difference between TTL and manual, the inverse-square behaviour of power and distance, the light-shaping accessories, and the ratio language used when studio work is marked. Paper 1 sets direct GN calculations, Paper 2 asks for a lighting plan with stated settings, and Paper 3 marks the handling of the equipment and the finish of the portrait.",
      "introduction": "A flash head is a small sun you can switch off. Its output is quoted as a guide number, which folds power and reach into one figure, so every studio decision answers three questions: what aperture does the depth of field require, how far will that throw light, and what is the ambient doing behind the subject. Learn the division first, then learn what changes it: ISO, power fraction, distance, the modifier fitted to the head, and the shutter that governs only the background.",
      "realWorldContext": "A portrait studio on the Lapaz road in Accra runs one or two mains heads under umbrellas, a roll of brown paper and a CTO gel for the warm shop look clients expect. A school in Tamale works on battery speedlights because the arts block has one socket and no room for heavy stands, so the arithmetic matters more, not less. Graduation commissions photographed at the Great Hall at Legon or in front of the Koforidua assembly halls are booked into studios exactly because flash output does not depend on a cloudy afternoon, and in every one of those rooms the working figure is guide number divided by distance.",
      "objectives": [
        "Calculate working aperture, subject distance or required guide number from GN = aperture x distance",
        "State the maximum sync speed and explain what a faster shutter does to a flash frame",
        "Adjust a guide number for a change of ISO or of power fraction",
        "Choose and place an umbrella, softbox, grid or gel to obtain the intended quality and colour",
        "Set a key to fill ratio and document a single-light studio portrait session"
      ],
      "sections": [
        {
          "title": "Guide Number Arithmetic and the Working Aperture",
          "content": "A guide number is the product of working aperture and subject distance that gives a correct exposure at a stated ISO, normally ISO 100, so GN = aperture x distance. Rearranged twice, aperture = GN / distance and distance = GN / aperture, which turns the head into a measuring instrument. Take a common school speedlight rated GN 32 in metres: a sitter at 4 m needs f/8, since 32 / 4 = 8; the same head at 2 m needs f/16, since 32 / 2 = 16. Ask it to cover 8 m and the aperture falls to f/4, which no portrait brief wants for depth, so in practice you move the head or add power rather than open the lens wide. Two units of guide number exist, metres and feet, and the feet figure is larger by the conversion factor 3.28, so GN 32 m is about GN 105 ft; reading a feet table as metres leaves the subject several stops dark.",
          "bulletPoints": [
            "GN = aperture x distance, so aperture = GN / distance and distance = GN / aperture.",
            "GN 32 at f/8 reaches 4 m; at f/16 it reaches 2 m; at f/4 it reaches 8 m.",
            "Multiply a metric guide number by about 3.28 to read the figure in feet.",
            "Check the ISO stamped beside the guide number before trusting any published figure.",
            "Write the calculated aperture into the technical log next to the frame; that line is where the method mark is visible."
          ],
          "keyTakeaway": "Divide the guide number by the distance and you have the working aperture; every studio decision starts from that quotient.",
          "realWorldExample": "In a school studio in Ho a student sets a GN 32 head 4 m from a classmate for a full-length uniform portrait, calculates f/8, and keeps the shoulder badges and the tie knot sharp in the same frame."
        },
        {
          "title": "Sync Speed, FP Mode and What the Shutter Actually Controls",
          "content": "A focal-plane shutter exposes the frame through a travelling slit, and as the speed rises the slit becomes narrower than the frame, so a very short flash burst would print only on the strip already open. The body therefore states a maximum sync speed, commonly about 1/200 s or 1/250 s, and firing an ordinary head faster than that leaves a solid dark band from the unexposed side of the travel. High-speed or FP modes pulse the head across the travel, at a heavy cost in effective output. Within the sync range something counter-intuitive happens: because the burst may last only a fraction of a millisecond, the flash-lit subject is recorded almost entirely by the flash, so moving from 1/60 s to 1/200 s darkens the ambient background while the face stays unchanged. That is the studio lever worth teaching: aperture for the subject, shutter for the room, and never a shutter setting beyond the stated sync unless the head supports it.",
          "bulletPoints": [
            "Maximum sync is typically about 1/200 s to 1/250 s on focal-plane bodies.",
            "Above sync without FP mode, a curtain band prints black across part of the frame.",
            "Flash duration, roughly 1/1000 s at full power and far shorter at low power, is what freezes movement.",
            "Slowing from 1/125 s to 1/30 s lifts the ambient by two stops and leaves the flash exposure where it was.",
            "Rear-curtain sync places any ambient streak behind the subject, which reads as natural motion."
          ],
          "keyTakeaway": "Set the shutter to control the background and the aperture to control the flash-lit subject, staying inside the sync limit.",
          "realWorldExample": "A studio portrait of a night trader in Osu at 1/15 s with f/8 flash keeps the bulbs and the painted stall glowing behind her while her face stays sharp from the burst alone."
        },
        {
          "title": "ISO, Power Fraction, Distance and the Inverse-Square Law",
          "content": "Guide number moves with sensitivity as a square root, so four times the sensitivity gives twice the reach: ISO 100 to ISO 400 turns GN 32 into GN 64, and f/8 now covers 8 m rather than 4 m. Output behaves the same in reverse, since halving the power is one stop off and costs 1.414 times the reach, taking 32 to about 22.6 m, while quarter power, two stops off, halves it to 16 m. Modifiers are simply prepaid losses: a shoot-through umbrella absorbs roughly a stop, so the working figure drops to about 22.6 m and at f/8 reaches only about 2.8 m, which is why studio heads always sit closer than the bare-head calculation suggests. The inverse-square law also governs evenness across a group. A head 1 m from the nearest sitter gains two stops over a head at 2 m, but the falloff toward the back rows becomes steep, so small close heads give contrasty uneven light across a crowd and large distant heads give flat even coverage.",
          "bulletPoints": [
            "Sensitivity gain converts as a square root: ISO 400 makes GN 32 into GN 64.",
            "Half power is one stop off: 32 / 1.414 is about 22.6 m; quarter power is 16 m.",
            "A shoot-through umbrella costs about one stop, so recompute reach after fitting any modifier.",
            "Halving head-to-subject distance gains two stops and steepens the falloff across the group.",
            "Confirm the arithmetic with a handheld meter or the histogram on a test frame, then lock the settings."
          ],
          "keyTakeaway": "Reach is bought with ISO, power and distance, and square-root and square relationships decide exactly how much you can afford.",
          "realWorldExample": "A form-three studio lesson shoots six head shots with one GN 32 head on quarter power at about 1 m; the falloff is so steep that the last frame loses the background entirely and reads as a different setup."
        },
        {
          "title": "Shaping the Beam: Umbrellas, Softboxes, Grids, Gels and Backdrops",
          "content": "The bare head is the hardest source a student owns, a small bright disc throwing clean-edged shadows and hot specular points on skin. A shoot-through umbrella enlarges the apparent source and softens the shadow edge while losing about a stop; a bounce umbrella loses more and keeps a slightly directional wrap; a softbox gives the softest, most controlled spread of the three and demands the shortest working throw. Direction control comes next: a grid or a snoot confines the beam to head and shoulders so the wall behind stays dark, and a black board flagged just out of frame deepens the shadow side without adding a second light. Backdrop separation depends on keeping the head away from the paper and, when the brief calls for clean mid-grey or blue, giving the backdrop its own small source. Colour is set with gels, and in Ghana the most useful is CTO, an orange gel that converts daylight-balanced flash to tungsten so the warm tube-lit shop behind the sitter and the skin tone agree, with pale blue CTB doing the reverse for a shaded window.",
          "bulletPoints": [
            "Apparent source size sets softness: softbox softest, bounce umbrella next, bare head hardest.",
            "Every diffusion or bounce costs stops of guide number, so the head must come closer after fitting.",
            "Grids, snoots and flags hold light off the backdrop and buy separation without a second head.",
            "CTO over the head matches flash to tungsten; CTB matches it to daylight; split colours between key and backdrop.",
            "Inspect the frame edges for umbrella rim flare, stand legs, sandbags and the photographer's own shadow."
          ],
          "keyTakeaway": "Pick the modifier for the shadow edge you want, then pay for it in guide number and shorten the throw.",
          "realWorldExample": "An official portrait of a chief in a Kumasi studio uses a 1 m softbox at 45 degrees above the left shoulder with a black board on the right, so the kente keeps its weave and the brown paper behind holds a clean dark tone."
        },
        {
          "title": "Ratios, Fill Flash and a Disciplined Single-Light Workflow",
          "content": "Ratio language states how much brighter the lit side of a face is than the shadow side, and it converts to stops exactly: one stop is 2 to 1, two stops is 4 to 1, three stops is 8 to 1. One head at f/8 with a white board opposite returning about one stop sits near 2 to 1 for an open commercial portrait; silver instead of white pushes toward 4 to 1; removing the board altogether can reach 8 to 1 with a deep modelling shadow. Outdoors the same arithmetic runs in the opposite direction and is called fill: read the ambient, then set the flash one stop below it, so with a sunny reading of f/16 at ISO 100 a GN 32 head at 3 m delivering about f/11 opens the eye sockets and the shadow under the nose while the scenery keeps its sunny tone. Pushing the flash to full equality, which would take GN 33 at that distance, prints a flat face with a hard second shadow behind the sitter. Then run the session as a routine: calculate or meter once, fire a test frame, read the histogram and the highlight warning, write down distance, power fraction, modifier, ISO, aperture and shutter, and change nothing until the last sitter has stepped down.",
          "bulletPoints": [
            "Stops to ratio: 1 stop is 2 to 1, 2 stops is 4 to 1, 3 stops is 8 to 1.",
            "A reflector returning one stop against a key at f/8 gives roughly 2 to 1 across the face.",
            "One stop of fill sits below the ambient aperture: about f/11 where the daylight reading is f/16.",
            "Equalising flash with daylight at 3 m would need GN 33, since 11 x 3 = 33.",
            "Log the settings and keep them locked; drifting TTL output cannot be reprinted or defended in the practical."
          ],
          "keyTakeaway": "Ratios are stops in different clothing, and a single-light session is arithmetic first, then a written log.",
          "realWorldExample": "A school photo day in Sunyani: one GN 32 speedlight in a small softbox on a stand outside the classroom block, set at f/11 and 1/125 s against bright sun for one stop of fill, carries two hundred faces on identical settings."
        }
      ],
      "commonMistakes": [
        "Mixing a metric guide number with a feet table, then finding the subject several stops dark; check the unit and the ISO stamped beside the figure before dividing.",
        "Firing at 1/500 s on a body whose sync speed is 1/200 s and blaming the head for misfiring, when the shutter curtain simply covered most of the frame.",
        "Setting the flash to overpower daylight at f/16 while leaving the shutter at 1/60 s, so the ambient records a ghosted double image of every moving sitter.",
        "Placing the head flat on the lens axis at eye level, which gives the flat deer-in-headlights look with a hard shadow pasted directly behind the ears; raise it and swing it 45 degrees.",
        "Letting TTL ride through a session of thirty sitters so each frame varies in output; the studio and the examination both need one manual setting held and logged."
      ],
      "wassceExamTips": [
        "Paper 1 gives a guide number, a distance and an ISO and asks for the aperture: show the division, apply the square root for any ISO change first, then state the answer as f/8.",
        "Paper 2 lighting questions award method marks along the plan: head position, angle, modifier, reflector side, backdrop distance and the stated ratio, each carrying its own point.",
        "When a Paper 2 question asks why the backdrop prints dark, answer with beam control and distance, naming a grid, snoot or flag, not with the shutter speed alone.",
        "In Paper 3 the practical, marks for handling of materials include coiling the flash cable, sandbagging the stand and firing one logged test frame before the sitters arrive; a messy rig loses those points before the image is judged.",
        "Carry an index card with the working formulae: aperture = GN / distance, half power is one stop off, ISO 400 doubles the guide number; accuracy marks follow the correct conversion, not the memory of it."
      ],
      "summaryChecklist": [
        "Can I find the working aperture, the reach or the required guide number from GN = aperture x distance?",
        "Can I state the maximum sync speed and describe what a faster shutter prints?",
        "Can I convert a guide number for a change of ISO or of power fraction?",
        "Can I choose between umbrella, softbox, grid and gel and state the stop cost of each?",
        "Can I set a key to fill ratio and document a single-light portrait session?"
      ]
    },
    "examples": [
      {
        "id": "ex-shs2-ph-t2-studio-flash-1",
        "title": "Manual Flash Portrait on a GN 32 Head",
        "problem": "A school studio has one flash head rated GN 32 metres at ISO 100, with the camera at ISO 100 and 1/125 s, inside the sync limit. Find the working aperture for a sitter at 2 m and at 4 m; then find the aperture that covers 8 m after raising ISO to 400; and finally state the reach at f/8 when the head is set to half power.",
        "stepByStepSolution": [
          "Step 1 (M1): State the relation and rearrange it for the unknown: GN = aperture x distance, so aperture = GN / distance.",
          "Step 2 (A1): At 2 m on ISO 100: 32 / 2 = 16, so the working aperture is f/16.",
          "Step 3 (A1): At 4 m on ISO 100: 32 / 4 = 8, so the working aperture is f/8; the two-stop loss over twice the distance is already inside the division.",
          "Step 4 (M1): Convert the sensitivity change into guide number: ISO 100 to 400 is a factor of 4, its square root is 2, so the GN becomes 32 x 2 = 64 m.",
          "Step 5 (A1): At 8 m on ISO 400: 64 / 8 = 8, so f/8 still works and the shutter stays at 1/125 s because it does not govern flash exposure.",
          "Step 6 (M1): Reduce output instead of moving the head: half power is one stop off, so the effective GN is 32 / 1.414, about 22.6 m.",
          "Step 7 (A1): At f/8 on half power the reach is 22.6 / 8, about 2.8 m, so the head must stand roughly 2.8 m from the sitter.",
          "Step 8 (M1): Fire one test frame at each setting, read the histogram, then record distance, power fraction, ISO, aperture and shutter in the log before the next sitter."
        ],
        "keyTakeaway": "One division gives the aperture, the square root of the ISO ratio converts the guide number, and each stop of power costs the same reach as any other."
      },
      {
        "id": "ex-shs2-ph-t2-studio-flash-2",
        "title": "One Stop of Fill Flash in Daylight at Aburi",
        "problem": "Outside at Aburi the ambient meter reading for a subject in bright sun is 1/125 s at f/16, ISO 100. A GN 32 speedlight is held 3 m from the face. Find the aperture the flash delivers, compare it with the ambient requirement, and state what the fill does to the frame.",
        "stepByStepSolution": [
          "Step 1 (M1): Find what the flash offers at the working distance: 32 / 3 = 10.67, so about f/11.",
          "Step 2 (M1): Place both figures on the full-stop aperture scale: f/11 then f/16, one stop apart.",
          "Step 3 (A1): Because f/11 is one stop below the f/16 daylight requirement, the flash is one stop weaker than the sun at the subject, which is exactly deliberate fill.",
          "Step 4 (M1): Test the alternative of full equality: matching f/16 at 3 m would need GN 48, since 16 x 3 = 48, and one stop of fill needs GN 33, since 11 x 3 = 33.",
          "Step 5 (A1): Keep 1/125 s at f/16 for the background, let the flash land at about f/11, and the scenery holds its sunny tone while the eye sockets and the shadow under the nose open.",
          "Step 6 (M1): If the face still reads dark, do not open the aperture, which would wash the background out; move the head nearer or raise the power setting one step.",
          "Step 7 (A1): Final answer: GN 32 at 3 m gives about f/11, one stop of fill against an f/16 daylight reading; move the head closer only when more fill is wanted."
        ],
        "keyTakeaway": "Fill flash is set one stop below the ambient reading: the aperture carries the flash, the shutter carries the daylight behind the subject."
      }
    ],
    "quiz": {
      "id": "quiz-shs2-ph-t2-studio-flash",
      "topicId": "shs2-ph-t2-studio-flash-lighting",
      "title": "Studio and Flash Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-shs2-ph-t2-studio-flash-1",
          "quizId": "quiz-shs2-ph-t2-studio-flash",
          "questionText": "A flash head rated GN 32 metres at ISO 100 is used on a sitter 4 m away at ISO 100. The working aperture is",
          "optionA": "f/4",
          "optionB": "f/5.6",
          "optionC": "f/16",
          "optionD": "f/8",
          "correctOption": "D",
          "subConcept": "Guide number division",
          "explanation": "Aperture equals guide number divided by distance, and 32 / 4 = 8, giving f/8. Option C multiplies the distance into the figure instead of dividing, the standard slip on this item.",
          "remediationTip": "Say the formula aloud before calculating: GN equals aperture times distance, so the unknown aperture is the quotient."
        },
        {
          "id": "q-shs2-ph-t2-studio-flash-2",
          "quizId": "quiz-shs2-ph-t2-studio-flash",
          "questionText": "Raising camera sensitivity from ISO 100 to ISO 400 changes a GN 32 head to an effective guide number of about",
          "optionA": "32 metres",
          "optionB": "64 metres",
          "optionC": "128 metres",
          "optionD": "45 metres",
          "correctOption": "B",
          "subConcept": "Guide number and ISO",
          "explanation": "Sensitivity is four times greater and guide number rises with the square root of that factor, so 32 x 2 = 64 m. Option C treats the factor as linear and forgets the square root.",
          "remediationTip": "Two stops more sensitivity buys one stop more reach; count the stops on the ISO scale and halve the number."
        },
        {
          "id": "q-shs2-ph-t2-studio-flash-3",
          "quizId": "quiz-shs2-ph-t2-studio-flash",
          "questionText": "Inside the sync range, moving the shutter from 1/60 s to 1/200 s in a flash-lit studio frame",
          "optionA": "brightens the flash-lit subject and darkens nothing",
          "optionB": "halves the output of the flash head",
          "optionC": "darkens the ambient background while the flash-lit subject stays the same",
          "optionD": "reduces the depth of field on the face",
          "correctOption": "C",
          "subConcept": "Shutter controls ambient only",
          "explanation": "The subject is recorded almost wholly by the very short burst, so the shutter setting governs only the ambient light collected during the open time. Option B is wrong because a shutter change does not alter head output.",
          "remediationTip": "Repeat the studio rule until it is automatic: aperture for the flash, shutter for the room."
        },
        {
          "id": "q-shs2-ph-t2-studio-flash-4",
          "quizId": "quiz-shs2-ph-t2-studio-flash",
          "questionText": "Firing an ordinary speedlight at 1/500 s on a body whose maximum sync speed is 1/200 s, with no high-speed sync available, produces",
          "optionA": "a dark band across part of the frame from the shutter curtain",
          "optionB": "a correctly exposed frame with extra image noise",
          "optionC": "a double image of the entire subject",
          "optionD": "an over-exposed background and nothing else",
          "correctOption": "A",
          "subConcept": "Focal-plane sync limit",
          "explanation": "Faster than sync the curtain slit is narrower than the frame, so the burst exposes only the strip already open and the remainder prints black. Option C belongs to a slow shutter mixing ambient with flash, not to a shutter that is too fast.",
          "remediationTip": "Read the sync figure in the camera manual and set a custom limit so the dial cannot pass it during a shoot."
        },
        {
          "id": "q-shs2-ph-t2-studio-flash-5",
          "quizId": "quiz-shs2-ph-t2-studio-flash",
          "questionText": "A GN 32 head is fitted with a shoot-through umbrella that absorbs about one stop. Used at f/8, its practical reach becomes approximately",
          "optionA": "8 m",
          "optionB": "4 m",
          "optionC": "1 m",
          "optionD": "2.8 m",
          "correctOption": "D",
          "subConcept": "Stop cost of modifiers",
          "explanation": "One stop off reduces the effective guide number to 32 / 1.414, about 22.6 m, and 22.6 / 8 is about 2.8 m. Option B keeps the unreduced guide number, the usual error when a modifier is fitted and the arithmetic is not redone.",
          "remediationTip": "Recompute the reach every time you fit a modifier; diffusion is never free."
        }
      ]
    }
  },
  {
    "id": "shs2-ph-t2-portrait-photography",
    "subjectId": "photography",
    "level": "SHS 2",
    "term": 2,
    "orderIndex": 4,
    "title": "Portrait Photography",
    "description": "Posing the head and shoulders, placing eye light and catchlight, choosing lens and aperture that flatter face shape, running school graduation and chief sittings, and securing consent before the first frame.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• A portrait is a deliberate presentation of a person: character first, likeness second; the usual frames are head-and-shoulders (head shot) or half length (waist up).\n• Posing order: feet planted, hips settled, shoulders turned 20 to 40 degrees away from the lens, then the head rotates back toward the camera; the twist slims the body and adds shape.\n• The chin-and-neck correction: ask the subject to push the head slightly forward like a turtle and drop the chin about a centimetre; this stretches the jaw line and prevents the softness a flat backward pose produces.\n• Eye light and catchlight: keep the main light above the eye line so a small highlight sits in the top of the iris; the catchlight makes the eye look alive, and its absence makes it look dull.\n• Both eyes must be sharp: with the head turned at f/1.8 the depth of field is only millimetres deep, so place focus on the eye nearer to the camera.\n• Lens choice: 85 to 135 mm on full frame, or 50 to 85 mm on an APS-C body whose crop factor of 1.5 turns a 50 mm lens into a 75 mm equivalent, compresses features and keeps a comfortable 1.5 to 3 m working distance.\n• Wide-angle faces: a 35 mm lens at arm length enlarges the nose and pushes the ears back; that is caricature, not portraiture, unless distortion is the stated aim.\n• Aperture discipline: f/1.8 to f/2.8 dissolves a distracting background; stop down to f/5.6 or f/8 when two people share one plane or a group sits together.\n• Background control: move the subject 1 to 2 m away from the wall, choose a darker simpler backdrop, and let separation make the face glow.\n• Framing: eyes on the upper third line, a small margin of headroom above the crown, and looking room in front of the gaze when the head is turned.\n• Environmental portrait: show the person at their post — the kente weaver at Bonwire with warp threads filling the background — with props that explain a life without cluttering the frame.\n• School protocol: chief portraits and graduation sets need one fixed light position, a plain backdrop, a tidy uniform, the registrar name list, and files saved under each student name as the sitting moves.\n• Consent first: introduce yourself, state the intended use, and ask; a student who declines must be thanked and released, and consent may be withdrawn later.",
    "detailedNotes": {
      "overview": "This topic carries the camera-handling and exposure work of SHS 1 into the most examined human subject: the portrait. You learn to pose a face, light it so the eyes live, choose glass that flatters rather than distorts, and then run the two settings WASSCE practicals and real Ghanaian studios demand — the school sitting and the environmental portrait. Marking rewards consistency across a set, not one lucky frame, so every habit here is procedural.",
      "introduction": "Treat a portrait as a construction sequence: pose from the feet upward, light from above eye level, lens distance matched to face shape, then exposure locked so frame forty matches frame one. When the sequence is internalised, the sitters relax because you never look surprised, and the examiner sees control in every mounted print.",
      "realWorldContext": "A school in Cape Coast hires you to photograph the chief portrait and the Form 3 graduation set in one morning. You work under a veranda where the open doorway gives window light, hang a plain blue cloth as a backdrop, call names from the registrar list, fix one exposure on a trial sitter, and hand over files named exactly as the school records spell them. The same discipline governs studio portrait work at Makola and an ITB portrait at a Kumasi event hall.",
      "objectives": [
        "Pose head and shoulders in the correct order from feet to chin and explain why the twist slims the subject",
        "Place a light source so the catchlight appears high in the iris and fill the shadow side without flattening the face",
        "Select focal length, aperture and focus plane for a single turned head, a couple in one plane, and a five-person row",
        "Run a school portrait sitting with matched exposure, a name list, blink insurance and tidy file naming",
        "Obtain and document consent before photographing students and other identifiable subjects"
      ],
      "sections": [
        {
          "title": "Posing the Head and Shoulders",
          "content": "A good pose is built from the ground up, not from the face. Plant the feet squarely, settle the hips, then turn the shoulders twenty to forty degrees away from the lens so the head rotates back toward the camera; the resulting twist reads slim, relaxed and three-dimensional instead of flat and defensive. Ask the subject to lengthen the neck by pushing the forehead slightly forward, the way a turtle extends its head, and to drop the chin about a centimetre; this stretches the jaw line and prevents the soft double-chin look that a backward-set pose produces. Give the hands a purposeful anchor — a book, a chair back, a folded arm — because idle hands crease clothing and betray nervousness. Change one variable at a time and release a frame after every adjustment so the sitter sees steady progress rather than endless correction.",
          "bulletPoints": [
            "Shoulders angled away with the face turned back is the universal slimming and shaping move.",
            "The forward-and-down chin correction is worth more than any retouching later.",
            "Hands need somewhere useful to rest, or the whole body reads uneasy.",
            "One adjustment, one frame: the sitter trusts a photographer who works in small confirmed steps."
          ],
          "keyTakeaway": "Build the pose upward from the feet, then correct the chin; the face itself needs very little instruction once the body is placed.",
          "realWorldExample": "A Form 3 girl sitting for her chief portrait at a Cape Coast school: shoulders turn away from the doorway light, neck extends, chin drops slightly, and the school tie hangs straight at the centre of the collar."
        },
        {
          "title": "Eye Light, Catchlight and Shadow Pattern",
          "content": "Face light is judged from the eyes. Keep the main light above the subject eye line so a small bright reflection, the catchlight, appears in the upper part of the iris; without it the eye looks flat and lifeless, with it the portrait breathes. The height and side of that one source set the whole shadow pattern: light near the lens axis flattens skin texture, light placed at about forty-five degrees and above carves the classic triangle of lit cheek beneath the far eye, and light dropped straight down the centre burrows dark sockets no examiner praises. On a school veranda, place the subject so the doorway light falls on the face turned toward it, then bounce fill from a white board or polystyrene sheet on the shadow side to hold uniform detail. Before the session moves on, check the catchlight by looking at the subject eyes directly, not only at the camera screen.",
          "bulletPoints": [
            "Catchlight position tells the marker where your light was: keep it high in the iris.",
            "Raccoon eyes under an overhead ceiling fitting are the standard darkroom of mistakes; move the sitter or add a small flag.",
            "Fill light restores about two stops at most so the main light keeps its shape.",
            "A reflector can be free: a whitewashed wall, a car bonnet, a large sheet of stiff paper."
          ],
          "keyTakeaway": "One well-placed source above eye level does most of the work; fill only what the shadow side needs.",
          "realWorldExample": "A studio portrait at Teshie where a single window, raised by having the sitter stand rather than sit, puts the catchlight near the twelve o clock position of both irises."
        },
        {
          "title": "Lens, Aperture and Working Distance",
          "content": "Facial shape is a geometry problem. A lens in the normal to short-telephoto range — 85 to 135 mm on full frame, or 50 to 85 mm on an APS-C body whose crop factor of 1.5 makes a 50 mm lens cover like a 75 mm — renders features close to the proportions people actually remember, and it lets you stand one and a half to three metres away so the sitter relaxes. Press in close with a wide-angle instead and the geometry turns cruel: a 35 mm lens at arm length enlarges the nose, makes the ears recede and stretches the face outline. Aperture controls separation rather than sharpness alone: f/1.8 to f/2.8 melts a noisy background into plain colour, but with a turned head the focus plane must land on the nearer eye. For a row of sitters in one plane, stop down to f/5.6 or f/8, focus two thirds of the way into the group, and keep the backdrop at least two metres behind the shoulders so blur still has something to dissolve.",
          "bulletPoints": [
            "Crop factor multiplies the 35 mm-equivalent view: 50 mm times 1.5 equals 75 mm equivalent.",
            "Short telephoto flatters; wide-angle close up caricatures.",
            "Wide apertures isolate one face; groups need narrower stops.",
            "Background distance is a free depth-of-field tool even at the same aperture."
          ],
          "keyTakeaway": "Choose focal length for face geometry, aperture for group depth, and enough working distance for both to pay off.",
          "realWorldExample": "A three-person prize-giving row at a Kumasi school shot at 85 mm equivalent and f/8: every face sharp, the tired banner behind them softened past reading."
        },
        {
          "title": "School Sittings, Environmental Portraits and Consent",
          "content": "School work is industrial portraiture: hundreds of faces in a morning. Fix one light position, one backdrop and one height, meter and lock exposure on a trial student, and keep the camera on a tripod so every chief portrait matches its neighbour; a matched set earns more presentation credit than three brilliant singles and forty disasters. Call names from the registrar list, file each frame under the official spelling as you go, shoot two frames as blink insurance, and reshoot crooked ties or closed eyes before the next student steps up. The environmental portrait shifts meaning onto the surroundings — the kente weaver at Bonwire with the loom behind the shoulder, the canteen cook at Sunyani with steam rising behind her — so pose and light can be simpler, but every prop must earn its place in the story. Above all, ask before you shoot: state your name, the purpose and where the picture will hang; a student or teacher who declines is thanked and released, and consent can be withdrawn afterwards.",
          "bulletPoints": [
            "One locked lighting position is what makes a school set look professional.",
            "File under registrar names during the sitting, not from memory in the evening.",
            "Environmental props must explain the subject, not decorate the frame.",
            "Consent is recorded by introduction and clear purpose; refusal is honoured without argument."
          ],
          "keyTakeaway": "A school sitting succeeds through repetition and records; an environmental portrait succeeds through honest context; both succeed only with consent.",
          "realWorldExample": "A SHS graduation album in Tamale where all four hundred portraits share the same light and background because the photographer locked the setup at nine in the morning and did not touch it until one."
        }
      ],
      "commonMistakes": [
        "Focusing on the nose tip or the far ear at f/1.8 with a turned head; the nearer eye must carry the focus or the whole portrait reads soft.",
        "Placing the main light below the eye line to banish every shadow; the catchlight drops, shadows run upward and the sitter looks unnatural — bring the light above eye level.",
        "Shooting head-and-shoulders on a 24 mm lens at thirty centimetres and then blaming the subject for a bulbous nose; swap to the short telephoto end instead.",
        "Releasing a whole set over a smudged front element left by dozens of students touching the lens; wipe with a blower and microfibre cloth at the start of each sitting, not at the end of the day.",
        "Adjusting pose, expression and lighting all at once so the sitter never knows what improved; change one variable, shoot one frame, confirm, then move on."
      ],
      "wassceExamTips": [
        "Paper 1 objective items on portraiture ask for the setting that isolates a face: the answer is the wide-aperture short-telephoto pair, never the option with the deepest depth of field.",
        "Paper 2 design answers earn marks when the lighting diagram shows the main source above eye level, the fill position and the backdrop distance, each with one sentence of reasoning beside it.",
        "Paper 3 practical marking rewards handling of materials, creativity and finish: a consistent portrait series outscores three lucky frames and ten failures on the same board.",
        "State lens, aperture, shutter speed and ISO for every printed frame in the caption strip; markers give explicit credit for a technical log that matches the visible result.",
        "Plan the practical hours in thirds: studies of one or two frames first, the full sitting second, reshoots and mounting time third; a board mounted in a hurry loses presentation marks."
      ],
      "summaryChecklist": [
        "Can I build a head-and-shoulders pose in order from feet, hips, shoulders to chin?",
        "Can I place a light so the catchlight sits high in the iris and fill the shadow side without flattening it?",
        "Can I explain why a 35 mm lens close up distorts a face and which focal range flatters it, including the crop factor maths?",
        "Can I choose aperture and focus plane correctly for one turned head and for a five-person row?",
        "Can I run a school portrait sitting with consent, name list, blink insurance and matched exposure?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-portrait-1",
        "title": "Chief Portrait in Veranda Window Light",
        "problem": "On a school office veranda at Cape Coast you must photograph the chief portrait of a student using one open doorway as the only light, no flash, and a plain blue cloth backdrop. Plan the frame from pose to filing.",
        "stepByStepSolution": [
          "Turn the student so the doorway light falls on the side of the face angled toward it, with the shoulders about thirty degrees from the lens (M1).",
          "Ask for the neck-forward and chin-down correction, then confirm the jaw line in the viewfinder before anything else (M1).",
          "Zoom to a moderate telephoto, about a 75 mm equivalent on an APS-C body with crop factor 1.5, and open to f/2.8 so the cloth weave dissolves into flat colour (M1).",
          "Set the shutter no slower than 1/125 s with ISO 400 for veranda shade, and check the meter does not clip the white of the uniform (M1).",
          "Focus on the eye nearer the camera and verify a catchlight sits in the upper iris of both eyes before releasing (A1).",
          "Take two frames as blink insurance, review them at one hundred percent, and file under the registrar spelling of the student name (A1)."
        ],
        "keyTakeaway": "A school chief portrait is a repeatable procedure — pose, light, lens, exposure, focus, filing — not a lucky frame."
      },
      {
        "id": "ex-ph-portrait-2",
        "title": "Five Winners on the Prize-Giving Podium",
        "problem": "Five prize winners stand shoulder to shoulder on a podium, faces roughly in one plane. Which aperture do you work at, where do you place focus, and why must the backdrop stay well behind them?",
        "stepByStepSolution": [
          "Judge the width to cover: five heads across roughly sixty centimetres of frontage (M1).",
          "Stop down to f/8 so near and far faces fall inside one sharp band; f/2.8 would isolate only a single head (M1).",
          "Focus two thirds of the way into the group, on the middle heads, using the depth-behind-the-focus-point principle (M1).",
          "Frame with a small even margin so no cropped shoulder or shoe survives onto the print, heads level to the rule of thirds (A1).",
          "Confirm the banner sits about two metres back so its creases cannot compete with the faces for attention (A1).",
          "Release at 1/125 s or faster on the hand, review once, and reshoot any closed eyes before the students step down (A1)."
        ],
        "keyTakeaway": "Group portraiture is depth-of-field management: narrow aperture, focus placed into the group, background distance."
      }
    ],
    "quiz": {
      "id": "quiz-ph-portrait",
      "topicId": "shs2-ph-t2-portrait-photography",
      "title": "Portrait Photography Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-portrait-1",
          "quizId": "quiz-ph-portrait",
          "questionText": "Which lens choice renders a head-and-shoulders portrait most flatteringly on a full-frame camera?",
          "optionA": "An 85 mm to 135 mm short telephoto worked from about two metres",
          "optionB": "A 16 mm wide-angle held at arm length",
          "optionC": "A 10 mm fisheye from one metre",
          "optionD": "A 24 mm lens at thirty centimetres from the face",
          "correctOption": "A",
          "subConcept": "Lens choice and face geometry",
          "explanation": "Short telephoto focal lengths from normal viewing distance keep facial proportion as people remember it. Options B and D force the camera so close that the nose enlarges and the ears recede; a fisheye bends straight lines outright.",
          "remediationTip": "Photograph the same face twice, once wide-angle close and once short telephoto from distance, and describe the difference in your own words."
        },
        {
          "id": "q-ph-portrait-2",
          "quizId": "quiz-ph-portrait",
          "questionText": "The small bright reflection that makes a portrait eye look alive is called the?",
          "optionA": "core shadow",
          "optionB": "hot shoe",
          "optionC": "catchlight",
          "optionD": "histogram peak",
          "correctOption": "C",
          "subConcept": "Eye light",
          "explanation": "The catchlight is the reflected image of the light source in the curved surface of the eye, and it appears when the light sits above the subject eye line. Core shadow is a tone term, the hot shoe mounts a flash, and the histogram reports exposure data.",
          "remediationTip": "Move one lamp from below to above eye level and watch the reflection climb into the upper iris."
        },
        {
          "id": "q-ph-portrait-3",
          "quizId": "quiz-ph-portrait",
          "questionText": "With the head turned away and the lens wide open at f/1.8, where must focus be placed?",
          "optionA": "On the tip of the nose",
          "optionB": "On the eye nearer to the camera",
          "optionC": "On the far ear",
          "optionD": "On the backdrop behind the shoulder",
          "correctOption": "B",
          "subConcept": "Focus plane at wide aperture",
          "explanation": "Depth of field at f/1.8 in close portraiture is only millimetres deep, so the nearer eye is the plane that matters; the eye is what the viewer checks first. Nose-tip focus softens both eyes, ear focus loses the face, and backdrop focus is simply the wrong subject.",
          "remediationTip": "Shoot one turned-head frame focused on the ear and one on the near eye at f/1.8, then compare which portrait survives print."
        },
        {
          "id": "q-ph-portrait-4",
          "quizId": "quiz-ph-portrait",
          "questionText": "Five graduation sitters share one row, faces in roughly the same plane. Which aperture is the sensible working choice?",
          "optionA": "f/1.8",
          "optionB": "f/2.8",
          "optionC": "f/4",
          "optionD": "f/8",
          "correctOption": "D",
          "subConcept": "Group depth of field",
          "explanation": "A group spread across about sixty centimetres needs the narrower stop; f/8 holds every face sharp while f/1.8 or f/2.8 would isolate only one head. Examiners test exactly this contrast between single-subject and group apertures.",
          "remediationTip": "Photograph three classmates in a row at f/2.8 and again at f/8 and count how many faces are sharp in each."
        },
        {
          "id": "q-ph-portrait-5",
          "quizId": "quiz-ph-portrait",
          "questionText": "Before photographing a student for a school portfolio, the first professional action is to?",
          "optionA": "Introduce yourself, state the intended use and obtain consent through the school authority",
          "optionB": "Fire the flash to test the catchlight on the face",
          "optionC": "Take candid frames quickly before the student notices",
          "optionD": "Set the white balance to the tungsten preset",
          "correctOption": "A",
          "subConcept": "Consent and school protocol",
          "explanation": "Consent comes before the camera is raised: names, purpose and placement should be explained, and permission taken through the school authority or the student directly. Shooting secretly at a school sitting breaks trust and WASSCE ethics questions mark it wrong however good the frame is.",
          "remediationTip": "Write the twenty-second introduction you would give a Form 2 class before a portrait session and rehearse it."
        }
      ]
    }
  },
  {
    "id": "shs2-ph-t3-documentary-event-photography",
    "subjectId": "photography",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 5,
    "title": "Documentary and Event Photography",
    "description": "Shot lists and timelines, anticipation and burst discipline, covering speeches without flash damage, wide-mid-close storytelling sequences, factual captions and the ethics of photographing other people ceremonies at weddings, funerals and graduations.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Event photography is planned memory: build a written shot list with the host family, the wedding committee or the events officer a week before the day, then treat it as a minimum, not a ceiling.\n• Typical Ghanaian event spine: venue preparation, arrival of the principal parties, the central rite (vows, libation, certificate handing), speeches, gift or kola presentation, reception and eating, farewell.\n• Indoor base settings: shutter never below 1/125 s under hand, the widest practical aperture, and auto-ISO capped around 3200 so noise does not eat the print.\n• Anticipation beats speed: read the movement and begin pressing just before the expected peak; the decisive frame is often the second release, not the first.\n• Burst is for moments, not for the whole day: three to five frames per key event, then stop so the buffer drains and the card stays manageable.\n• Speeches without flash damage: switch the flash off (it blinds the speaker and bounces off lectern glass), raise ISO, open the lens, and work from the flank of the aisle.\n• Never cross the sight line of the speaker or the congregation; crouch along the aisle edge and change position between sentences, not during them.\n• Reaction frames explain the story: the grandmother hands at a funeral, children laughing at the reception, a classmate gripping the graduate arm — intercut them with the official frames.\n• Sequence thinking for every stage: a wide that says where we are, a mid that says who is doing what, a close that carries the emotion.\n• Facts go on the card or in the notebook before you forget them: full names with verified spelling, roles, venue, date, and the faith or custom observed.\n• Caption formula for delivery: who did what, when and where, in one or two sentences, with family and couple names checked against the programme.\n• Ethics: private grief is not content; at a funeral ask the family spokesperson or the MC which rites may be photographed, and honour every refusal immediately.\n• Deliver on time: cull to the agreed count, export JPEG alongside the RAW archive, and name files event_stage_number so nothing is lost in the handover.",
    "detailedNotes": {
      "overview": "Documentary and event work is where technical control meets social intelligence. You must expose reliably in ugly indoor light, catch unrepeatable moments a second before they vanish, and do all of it inside someone else's ceremony without disturbing it. This topic covers the plan (shot list), the craft (anticipation, burst, flash discipline), the story (wide-mid-close sequences and captions) and the contract (ethics and consent) that together separate a professional event file from a bag of snapshots.",
      "introduction": "Approach an event like a reporter and a planner at once. Weeks out, write the day in stages and mark the unrepeatable frames. On the day, lock indoor exposure before the action starts, hold the camera to your eye during peaks, and keep a notebook running for names. In the edit, cut to the sequence that tells the truth of the day and caption it so a stranger understands every frame.",
      "realWorldContext": "A wedding at a church in Adenta moves into a reception at a community hall in Madina; a funeral at Koforidua begins with morning rites the family may bar from the lens and ends with a lunch the MC announces; a SHS graduation in Kumasi runs to a strict programme of speeches and certificate lines. Any of these could appear as a Paper 2 planning question, and school event work is the usual training ground before WASSCE candidates cover a real function.",
      "objectives": [
        "Write a staged shot list for a wedding, funeral or graduation and mark the unrepeatable must-have frames",
        "Set indoor shutter speed, aperture and ISO ceilings that keep frames sharp without using flash",
        "Cover speeches from the aisle flank without blocking sight lines or disturbing the speaker",
        "Build a wide-mid-close documentary sequence for each stage of an event",
        "Write factual captions with verified names and apply consent rules at sensitive rites"
      ],
      "sections": [
        {
          "title": "The Shot List: Planning the Day on Paper",
          "content": "An event assignment is sold on reliability, so the planning happens weeks before the first shutter. Sit with the host family, the wedding committee or the school events officer and write the day in stages: venue dressing, arrival of the principal parties, the central rite, speeches, gift or kola presentation, reception, and farewells. Under each stage list the required frames and mark three to five unrepeatable moments — the vows, the certificate in the hand, the face of the bereaved mother — as must-haves, because a missed frame at a funeral can never be recovered later. Agree which positions you may use, who will announce you, and which passages are barred from the lens entirely. Print the list and keep it in the bag rather than trusting a phone, because a dead battery should not take your plan with it.",
          "bulletPoints": [
            "The shot list is a floor for delivery, not a ceiling for coverage.",
            "Mark unrepeatable moments on the list so the eyes stay in the viewfinder when they approach.",
            "Agreeing barred passages before the day prevents a public confrontation on the day.",
            "A printed list survives a dead phone; the plan must outlive any single device."
          ],
          "keyTakeaway": "Write the day in stages, mark the frames that cannot be repeated, and the event stops being a scramble.",
          "realWorldExample": "A photographer covering a Kumasi wedding builds the list with the committee chair: sixteen frames at the church, twelve at the reception, four barred passages agreed in writing before the morning of the event."
        },
        {
          "title": "Settings, Anticipation and Burst Discipline",
          "content": "Indoor Ghanaian venues — church halls at Cape Coast, community rooms in Madina, school assembly halls — are far darker than an adjusted eye believes, so lock the exposure triangle before the action begins: a shutter never below 1/125 s to stop hand blur, the widest aperture the lens allows without losing the group, and an auto-ISO ceiling near 3200 that keeps noise printable. Shoot RAW so the mixture of tungsten and daylight can be separated later. At the unrepeatable moment, start pressing slightly before the expected peak and take a burst of three to five frames; the buffer of an entry-level body fills within a couple of seconds of continuous shooting, and the frame rate then collapses while it drains, so a held-down burst can swallow the reaction that follows the peak. Between scheduled moments, switch back to single release and compose deliberately instead of spray-shooting.",
          "bulletPoints": [
            "1/125 s is the indoor floor; anything slower and the hands write blur into the file.",
            "Anticipation is reading protocol: you know the ring comes before the vow ends.",
            "Short bursts catch the peak; long bursts eat the buffer and the moment after it.",
            "Auto-ISO with a ceiling beats fixed ISO because light changes from hall to veranda."
          ],
          "keyTakeaway": "Lock exposure early, press just before the peak, and burst in short controlled salvos.",
          "realWorldExample": "At a Sunyani funeral the photographer sees the eldest son rising to speak, begins pressing at 1/125 s and ISO 1600 one breath before he stands, and secures the frame of the bowed head that the family later asks for."
        },
        {
          "title": "Speeches, Mixed Light and Flash Discipline",
          "content": "The speech block is where beginners cost themselves the job. Direct flash at a speaker thirty metres away renders a hard white disc on one face, leaves the hall black, distracts everyone at the lectern, and reflects off polished lectern glass straight into the lens. The professional answer is to switch the flash off, raise ISO to 1600 or 3200, open the lens, and hold 1/125 s at the widest aperture the speaker plane allows; the mixed ceiling fluorescent and window daylight gives a truer record of the occasion than any on-camera blast. Work from the flank of the aisle so your body never crosses a guest sight line, and shift position between sentences rather than mid-sentence. When flash is genuinely needed at a reception, bounce it off a low white ceiling at about forty-five degrees behind you and pull exposure compensation up a stop or two to keep the faces human; direct flash is a last resort, never a habit.",
          "bulletPoints": [
            "Kill the flash during addresses: metered ambient plus higher ISO is the standard exam answer.",
            "A working guide-number check: a flash rated at guide number 40, ISO 100 means f/2.8 covers about 14 m, so reach is rarely the problem during a speech — distraction is.",
            "Bounce flash needs a ceiling within about six metres and painted white, not brown timber.",
            "Shoot the speaker and the audience in alternating frames; a speech covered from one angle is only half a speech."
          ],
          "keyTakeaway": "Cover speeches on ambient light at high ISO from the aisle flank, and reserve bounce flash for the reception.",
          "realWorldExample": "At a Ho graduation durbar the guest speaker stands behind glass-lettered lecterns; the photographer shoots at ISO 3200, f/2.8 and 1/125 s with the flash off, and the family never notices a blink from the hot shoe."
        },
        {
          "title": "Sequences, Captions and the Ethics of Borrowed Moments",
          "content": "A story is told by sequence, not by one hero frame. For each stage of the day deliver a wide that places everyone, a mid that shows the action, and a close that carries the emotion — hands folding a donation envelope, the school badge buttoned on the chest of a bereaved son, confetti suspended at the church steps. Captions protect the frames: within an hour of the event record full names with verified spelling, roles, venue, date and the faith or custom observed, then write each delivered caption in one or two sentences answering who did what, when and where. Ethics sit above the craft. Consent at a wedding is broad; consent at a funeral is narrow and specific, given through the family spokesperson or the MC, and it can be withdrawn at any rite. A documentary frame is never staged by moving people; you photograph what happens, and you leave untouched what is barred.",
          "bulletPoints": [
            "Wide, mid, close for every stage is the delivery skeleton examiners recognise.",
            "Names written during the event beat names reconstructed from gossip a week later.",
            "Funeral protocol is negotiated with the spokesperson, not with the loudest guest.",
            "Staging destroys the documentary claim on the frame; direction belongs to portraiture."
          ],
          "keyTakeaway": "Deliver sequences with facts attached, and let consent decide what the lens may see.",
          "realWorldExample": "A Tamale funeral reportage for the family album: thirty-one frames, six captions naming the speakers correctly, and a clear note that the burial rite itself was photographed nowhere at the family's request."
        }
      ],
      "commonMistakes": [
        "Firing direct flash through a eulogy; the light disturbs the ceremony, the glass on the lectern throws it back into the lens, and the photographer is asked to leave — raise ISO and keep the flash off.",
        "Holding the burst for twenty seconds; the buffer fills, the frame rate collapses, and the following reaction is lost inside frozen frames — burst in threes and fives.",
        "Reviewing the screen during a must-have moment; the eyes must stay in the viewfinder and checks belong in the gaps between stages.",
        "Filing frames under nicknames with no facts attached; when the album is ordered two weeks later nobody can match files to relatives — write names during the event.",
        "Staging groups for a better picture at a funeral or church rite; a directed frame is portraiture, and the client will call it false inside a documentary file."
      ],
      "wassceExamTips": [
        "Paper 2 planning questions on a named event award marks for a staged shot list with must-have frames identified, not for a page of vague intentions.",
        "In Paper 1 the correct indoor speech option is always the flash-off, high-ISO, 1/125 s minimum shutter combination; eliminate anything with a slower shutter first.",
        "Paper 3 presentation boards score highest when one complete wide-mid-close sequence from a single event is mounted together and labelled with the settings used.",
        "Use the caption vocabulary the markers expect: who, what, when, where; a misspelled name costs the accuracy mark even on an excellent frame.",
        "Divide the practical hours into thirds: shooting first, culling and captioning second, printing and mounting third; boards assembled in the last minutes cost presentation marks every year."
      ],
      "summaryChecklist": [
        "Can I write a staged shot list for a funeral or graduation and mark the unrepeatable frames?",
        "Can I set shutter, aperture and ISO limits that keep indoor frames sharp without flash?",
        "Can I cover a speech from the aisle flank without blocking sight lines or disturbing the speaker?",
        "Can I build a wide-mid-close sequence that tells one stage of an event?",
        "Can I write a two-sentence caption with verified names, place and date, and state the consent rule for barred rites?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-event-1",
        "title": "Covering the Speech Without a Flash",
        "problem": "In a church hall the guest of honour is speaking. The metered ambient brightness is EV 8, you must hold 1/125 s, and the lens opens to f/2.8. Find the ISO that makes the exposure correct and state why the flash stays off.",
        "stepByStepSolution": [
          "Read the scene: metered ambient EV 8 at the subject plane, and added light is forbidden during the address (M1).",
          "Commit to the sharpness floor of 1/125 s and plan a short burst at each applause point (M1).",
          "Raise sensitivity to ISO 400; relative to the ISO 100 reference this is a gain of two stops, so the effective requirement becomes EV 10 (M1).",
          "Compute the aperture: f-stop squared equals 2 to the power of 10 times the shutter time, so N squared is 1024/125 which is about 8.19, giving N about 2.86 (M1).",
          "Dial the nearest working stop, f/2.8 at 1/125 s and ISO 400, and confirm the histogram stops short of the right edge (A1).",
          "Shoot from the aisle flank between sentences and attach the speaker name, office, venue and date as the caption on delivery (A1)."
        ],
        "keyTakeaway": "Raising ISO and opening the lens beats firing into a live ceremony; the maths shows f/2.8 at ISO 400 covers EV 8 hall light at 1/125 s."
      },
      {
        "id": "ex-ph-event-2",
        "title": "A Graduation Story in Six Frames",
        "problem": "The school will accept only six frames to document one graduation day. Choose and shoot a sequence that carries the whole event.",
        "stepByStepSolution": [
          "Study the programme and mark the unrepeatable points: the name called, the certificate touched, the family photograph (M1).",
          "Frame 1: a wide of the decorated hall with the banner readable, taken from the rear flank before guests fill the aisles (M1).",
          "Frame 2: a mid of the graduate crossing, and frame 3: a close of the handshake with the principal (M1).",
          "Frame 4: the reaction of parents standing, and frame 5: the certificate held up in open daylight so the lettering reads (M1).",
          "Frame 6: the family group posed after protocol, checked for blinks and tied to the same exposure as the set (A1).",
          "Caption all six with names, date, school and programme, and file them as graduation_stage_number (A1)."
        ],
        "keyTakeaway": "Six sequenced frames — wide, mid, close, reaction, detail, family — tell a complete event; thirty similar frames do not."
      }
    ],
    "quiz": {
      "id": "quiz-ph-event",
      "topicId": "shs2-ph-t3-documentary-event-photography",
      "title": "Event Photography Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-event-1",
          "quizId": "quiz-ph-event",
          "questionText": "Which shutter speed is the practical indoor floor for keeping handheld event frames sharp?",
          "optionA": "1/15 s",
          "optionB": "1/125 s",
          "optionC": "1/4 s",
          "optionD": "1/8 s",
          "correctOption": "B",
          "subConcept": "Indoor exposure floors",
          "explanation": "Below 1/125 s, hand tremor and small subject movements smear frames at typical event focal lengths; the slower options belong on a tripod with a stationary subject.",
          "remediationTip": "Run a drill: ten handheld indoor frames at 1/125 s with auto-ISO capped at 3200, then inspect every file at one hundred percent."
        },
        {
          "id": "q-ph-event-2",
          "quizId": "quiz-ph-event",
          "questionText": "What is the written shot list used for?",
          "optionA": "It replaces the need to agree a fee with the client",
          "optionB": "It selects the memory card file format",
          "optionC": "It locks the white balance for the day",
          "optionD": "It lists the key pictures the event must include so unrepeatable moments are not missed",
          "correctOption": "D",
          "subConcept": "Event planning",
          "explanation": "The shot list is the coverage contract: stages of the day with must-have frames marked, agreed with the host before the event. Fees, formats and white balance are separate decisions.",
          "remediationTip": "Draft a one-page shot list for your schools speech and prize day and have a classmate check whether every stage has a wide, mid and close."
        },
        {
          "id": "q-ph-event-3",
          "quizId": "quiz-ph-event",
          "questionText": "A delivered event caption must carry which facts?",
          "optionA": "Lens, aperture, shutter speed and ISO",
          "optionB": "Price, client address, venue and date",
          "optionC": "Who did what, when and where",
          "optionD": "Colour mode, file size, card slot and folder name",
          "correctOption": "C",
          "subConcept": "Captioning",
          "explanation": "The caption answers the human questions: names with verified spelling, the action, the place and the date. Camera settings belong in a separate technical log, and commercial details never appear on a delivered caption.",
          "remediationTip": "Write captions for five frames of one school event from memory, then check every name against the programme and count your spelling errors."
        },
        {
          "id": "q-ph-event-4",
          "quizId": "quiz-ph-event",
          "questionText": "At a funeral the family spokesperson states that one rite may not be photographed. The correct action is to?",
          "optionA": "Lower the camera, step back and cover only the permitted passages",
          "optionB": "Continue quietly because the frame has high value to the album",
          "optionC": "Ask individual guests whether the restriction really applies",
          "optionD": "Switch to the silent shutter so the release is not heard",
          "correctOption": "A",
          "subConcept": "Ethics and consent",
          "explanation": "Consent at a funeral is specific and can be withdrawn at any rite; the restriction from the spokesperson is final. Silent shooting of a barred passage is still a breach of the agreement and of trust.",
          "remediationTip": "Before your next school event coverage, identify who the decision-maker is and agree the barred passages at the planning meeting."
        },
        {
          "id": "q-ph-event-5",
          "quizId": "quiz-ph-event",
          "questionText": "Why does a camera slow sharply after a long held-down burst?",
          "optionA": "Because the memory card has been formatted",
          "optionB": "Because the internal buffer is saturated and must drain to the card",
          "optionC": "Because the battery falls by one volt",
          "optionD": "Because the lens aperture overheats",
          "correctOption": "B",
          "subConcept": "Burst and buffer",
          "explanation": "Burst frames queue in the buffer before being written to the card; once it fills, the frame rate collapses until space frees. A formatted card is unrelated, and aperture temperature is not a real mechanism.",
          "remediationTip": "Take one thirty-second held burst on your camera and one series of five-frame salvos, and compare how many peaks each method actually captures."
        }
      ]
    }
  },
  {
    "id": "shs2-ph-t3-nature-cultural-photography",
    "subjectId": "photography",
    "level": "SHS 2",
    "term": 3,
    "orderIndex": 6,
    "title": "Nature, Travel and Cultural Photography in Ghana",
    "description": "Long-lens bird and wildlife work in Mole and Kakum, festival coverage at Homowo, Aboakyir and Odwira, market storytelling at Makola and Kejetia, etiquette at sacred sites, and the travel-light and field-note habits that hold every frame together.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Long-lens arithmetic: the crop factor multiplies the angle of view, so a 300 mm lens on an APS-C body with crop factor 1.5 gives a 450 mm equivalent reach that a full-frame body would need a heavier 450 mm optic to match.\n• Handheld reciprocal rule: shutter at least the reciprocal of the equivalent focal length, so 1/500 s is the safe floor for 300 mm on a 1.5-crop body; image stabilisation buys two to three stops for standing subjects, not for a running animal.\n• Focus on the eye of the bird; a sharp eye with a soft wing reads as a keeper, while a sharp wing with a soft eye reads as a failure.\n• Mole National Park: shoot from the vehicle at early morning and late afternoon when the light is low and golden, keep ISO free to rise under tree shade, and never drag the shutter below the reciprocal floor.\n• Kakum forest eats light: about 1/500 s at f/4 with ISO raised to 800 or 1600 is a realistic recipe for birds along the river line beneath the canopy.\n• Festival grammar: one wide for crowd and setting, one mid for the chief or dancer group, one close for the drum, the cloth or the poured libation; pattern beats pile-ups.\n• Homowo is the Ga harvest celebration, its name meaning hooting at hunger, with kpokpoi eaten and sprinkled in the family compound in the season before the new harvest; Aboakyir at Winneba pits two rival youths wrestling a live deer through the town on the first Saturday of May; Odwira at Akropong is the Akwapim harvest thanksgiving centred on the palace durbar.\n• Markets: Makola in Accra and the Kejetia side of Kumasi Central Market reward patience — settle at one stall front, pause until colour crosses the frame, and buy from the traders whose goods you photograph.\n• Ask before raising the camera at a person's face; a friendly purchase plus permission outperforms a stolen frame, and refusal is an answer, not a challenge.\n• Sacred sites: some shrines, royal stools and rites are barred to the lens; ask the guide or family spokesperson first and lower the camera immediately when told no.\n• Travel light discipline: the hour after sunrise and the hour before sunset give warm low side light; harsh noon sun flattens colour cloth, so plan markets for the morning and festivals around the ceremony time.\n• Field notes on every outing: species or item, location, date, names with spellings, light direction and the settings used — the notes become the captions and the technical log.\n• Carry insurance in the bag: a charged spare battery, a formatted spare card, a blower brush for dust, and a small torch for dawn moves in the park.",
    "detailedNotes": {
      "overview": "This topic joins two disciplines that share one problem: working politely and technically in places that are not yours. Nature work asks for reach, speed and patience in Mole and Kakum; cultural work asks for rhythm, consent and light control at Homowo, Aboakyir and Odwira, and in the market corridors of Makola and Kejetia. Every frame in both halves depends on lens arithmetic, reciprocal-rule shutter floors and honest field notes, which is exactly what WASSCE practical marking rewards.",
      "introduction": "Treat every outing as a small expedition with rules. Fix the technical spine first — equivalent focal length, minimum shutter, ISO ceiling — then work the etiquette: permission from traders, guidance from the family spokesperson at rites, silence near the hides. Write notes as you shoot; a photograph without a name, place and date is a rumour, and captions written from real notes collect the accuracy marks.",
      "realWorldContext": "A school trip to Mole photographs baboons at the rest area and antelope from the vehicle at dawn; a weekend class assignment covers kpokpoi preparation in a Ga family compound during Homowo season; another frames the dyer at the batik pits in Ahwiaa or cloth folded at Makola. On each of these the same rules apply: buy before you shoot, ask before the face, and never point the lens at a stool room a guide has closed.",
      "objectives": [
        "Convert lens focal length to 35 mm equivalent using the crop factor and choose a matching handheld shutter",
        "Set focus, aperture and exposure for birds and wildlife from a hide or vehicle in weak light",
        "Plan a festival coverage sequence for Homowo, Aboakyir or Odwira using wide-mid-close framing",
        "Work a market scene such as Makola or Kejetia with consent, purchases and patient framing",
        "Keep field notes that convert directly into captions and a technical log"
      ],
      "sections": [
        {
          "title": "Reach: Long Lenses for Birds and Wildlife",
          "content": "Wildlife photography is arithmetic before it is art. A 300 mm lens on an APS-C sensor with a crop factor of 1.5 covers like a 450 mm lens on full frame, which is why crop bodies are the standard choice for birding around the Shai-Hills or a Mole morning drive. Convert that number into your shutter floor through the reciprocal rule: hand tremor at a 450 mm-equivalent view is hidden only at about 1/500 s or faster, so at dawn you lift ISO to 800 or 1600 and open to f/4 or f/5.6 rather than slowing the shutter. Focus lands on the eye, the one point whose sharpness sells the whole frame; use a single focus point placed on the near eye and continuous drive for anything with legs. Kakum teaches the opposite lesson: the forest understorey swallows light, so a bird at the river line may meter near EV 10 even at mid-morning, and the honest answer is more ISO, not a slower shutter.",
          "bulletPoints": [
            "Equivalent focal length equals true focal length multiplied by the crop factor.",
            "Reciprocal floor: about 1/500 s for a 450 mm-equivalent view, 1/1000 s for active flight.",
            "Raise ISO before you slow the shutter; a clean sharp frame beats a noise-free blur.",
            "Stabilisation helps static subjects only; it cannot freeze a running antelope."
          ],
          "keyTakeaway": "Do the crop-factor maths, convert it into a shutter floor, and pay for the floor with ISO instead of blur.",
          "realWorldExample": "A kingfisher above the Kakum river line at 300 mm, ISO 800, f/4 and 1/500 s meters close to scene brightness EV 10 in the understorey shade, and the eye of the bird arrives sharp on the board."
        },
        {
          "title": "Festival Coverage: Homowo, Aboakyir and Odwira",
          "content": "A festival is a story told in choreography, so photograph the grammar rather than the crowd. Ga Homowo, whose name means hooting at hunger, runs in the season before the new harvest and centres on kpokpoi being prepared, eaten and sprinkled in the family compound; Aboakyir at Winneba each first Saturday of May brings two rival youths wrestling a live deer through the town; Odwira at Akropong gathers the Akwapim people around the palace durbar in a harvest thanksgiving. In each case the sequence is the same: a wide that places the ceremony in its streets or courtyard, a mid that follows the principal actors, and a close for the drum skin, the stamped cloth, the steam rising from the pot. Arrive early, find the spokesperson or the chief interpreter, and learn which passages are barred; royal stools and certain shrines are never photographed, and knowing that before you raise the camera is the mark of a cultural photographer rather than a tourist.",
          "bulletPoints": [
            "Shoot the grammar — wide, mid, close — not a hundred similar crowd frames.",
            "Position yourself before the action begins; at a durbar the good flank closes early.",
            "The drum, the cloth pattern and the hands carry as much culture as the faces do.",
            "Barred passages are agreed in advance with the spokesperson or the guide."
          ],
          "keyTakeaway": "Cover a festival in sequences with the permission of the elders, and let the barred passages stay dark.",
          "realWorldExample": "An Aboakyir assignment at Winneba: wide of the crowd lining the route, mid of the two wrestlers closing on the deer, close of the traditional musicians, all metered at midday with Sunny 16 as the starting point."
        },
        {
          "title": "Markets and Street Life: Makola and Kejetia",
          "content": "The market is the most honest classroom in Ghanaian photography. Makola in Accra and the Kejetia side of Kumasi Central Market give colour, geometry and human texture in one corridor: pyramids of tomatoes, columns of gari, traders in matching cloth, porters balancing baskets on their heads. The technique is patience at one composed position — find a stall front with a clean background, frame with the rule of thirds left open for a person to walk into your picture, and release when the colour crosses the lane. The etiquette matters more: faces are someone's livelihood, so ask, and where asking is impractical photograph hands, wares and silhouettes instead; a small purchase from a trader you intend to photograph repeatedly is standard professional courtesy, and a refusal is an answer to accept with a smile. Shoot in the morning when goods are stacked fresh and light enters the sheds from the sides; keep the camera on a strap at your chest and one modest zoom on the body so nothing draws attention.",
          "bulletPoints": [
            "Compose a frame and let the subject walk into it — patience beats roaming.",
            "Ask before faces; buy from traders you photograph; accept refusals without argument.",
            "Morning side light under market sheds keeps cloth colours rich.",
            "Keep kit modest and strapped: a crowded market is not the place for an open bag of lenses."
          ],
          "keyTakeaway": "A market picture is earned by a composed position, a polite question and often a small purchase.",
          "realWorldExample": "A class assignment at Makola: one student photographs hands counting change at a dried-fish stall after asking the trader, who then calls two friends to pose for a proper group frame."
        },
        {
          "title": "Travel Light, Sacred Sites and the Field Note",
          "content": "Travel frames succeed on timing. The hour after sunrise and the hour before sunset give low, warm, directional light that shapes hills, market roofs and dancers; the flat glare around noon drains colour from kente cloth and forces you to meter off mid-tones or accept a one-stop correction. Plan the day around the light you need for the subject you have promised. Around sacred sites the rules tighten: shrines, fetish groves and the stool room of a palace are closed to the lens unless the caretaker explicitly opens them, and at Mole or Kakum you stay inside the vehicle and keep voices low because the animals hear your noise long before they see your lens. The field note binds everything: for every outing write location, date, species or item names with spellings, the direction of the light and the settings used for your best frames. Those notes become the captions and the technical log your WASSCE board needs, and a photograph whose caption is guesswork loses marks it earned in the field.",
          "bulletPoints": [
            "Golden hour is a plan, not luck: schedule subjects around the light.",
            "Sacred sites: ask the caretaker, and a closed place stays closed.",
            "At national parks, silence and the vehicle are your blind.",
            "The field note turns a picture into evidence: who, what, where, when, how."
          ],
          "keyTakeaway": "Good travel photography keeps three clocks: the light clock, the courtesy clock and the notebook.",
          "realWorldExample": "A dawn drive out of the Mole rest house: low east light across the valley, shutter 1/500 s at ISO 400 through the windscreen, and a note that records kob antelope, 06:40, east-facing slope."
        }
      ],
      "commonMistakes": [
        "Hand-holding a 300 mm lens at 1/125 s because the meter asked politely; the reciprocal floor on the crop body is 1/500 s, and rising ISO is the price of sharpness.",
        "Focusing on the nearest leaf of a bush-coated bird instead of the eye; the single focus point must sit on the eye before every release.",
        "Photographing a barred rite or a sacred grove after being told no; no frame is worth that breach of trust, and the community remembers.",
        "Shooting market faces secretly and calling it documentary; stolen frames end assignments, and the fix is a question plus a small purchase.",
        "Field habit: returning from an outing with two hundred frames and no notes; captions written from memory name nobody and spell nothing correctly, and the presentation board pays for it."
      ],
      "wassceExamTips": [
        "Paper 1 likes crop-factor conversions: multiply the focal length by the factor, then pick the shutter that matches the equivalent view; answer options with slower shutters are traps.",
        "Paper 2 planning answers for a named festival earn marks for a wide-mid-close sequence plus one honest paragraph on consent and barred passages.",
        "Paper 3 practical boards are marked on handling of materials, creativity and finish: three market frames with consistent treatment outperform twelve random ones.",
        "Attach the field-note facts to every print caption on the board: place, date, subject name and the settings used; the technical log is an examinable list.",
        "Time the field component around light: shoot the planned series in the first hour of the session when the sun is workable, and reserve the last hour for mounting."
      ],
      "summaryChecklist": [
        "Can I convert a focal length to its 35 mm equivalent with the crop factor and state the matching handheld shutter?",
        "Can I set focus point, aperture and ISO for a bird in weak forest light?",
        "Can I plan a wide-mid-close festival sequence and name the consent rules for each rite?",
        "Can I work a market scene with permission, purchases and patient composition?",
        "Can I keep a field note that supplies every caption and setting I will need at mounting time?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-culture-1",
        "title": "A Kingfisher Above the Kakum River Line",
        "problem": "Under the Kakum canopy a perch-holding kingfisher fills the frame at 300 mm on a body with crop factor 1.5. The shade-metered scene is near EV 10. Choose a handheld-safe exposure and explain each decision.",
        "stepByStepSolution": [
          "Compute the equivalent reach: 300 times 1.5 equals 450 mm, so the reciprocal rule asks for 1/450 s or faster (M1).",
          "Set the shutter floor first at the nearest standard stop, 1/500 s, and let ISO and aperture pay for it (M1).",
          "Choose the widest working aperture, f/4, to gather light while keeping the eye crisp (M1).",
          "Solve for sensitivity: N squared divided by t must equal 2 to the power of the scene EV plus the ISO gain, and with f/4 at 1/500 s, 16 times 500 is 8000, so scene EV plus gain equals log2(8000), about 12.97; against the metered EV 10 the gain is about 2.97, essentially three stops, so ISO 800 is the exact working answer (M1).",
          "Place the single focus point on the eye of the bird and release a short three-frame burst at the head-turn (M1).",
          "Write the note: kingfisher, Kakum river line, 09:20, canopy shade, 300 mm at f/4, 1/500 s, ISO 800 (A1)."
        ],
        "keyTakeaway": "In weak light, set the reciprocal shutter floor, pay with ISO, and let the eye of the bird carry the focus."
      },
      {
        "id": "ex-ph-culture-2",
        "title": "Midday Dancing at Aboakyir with Sunny Sixteen",
        "problem": "At the Aboakyir durbar in Winneba the sun is high over light sand. You want 1/1000 s to freeze the dancers at ISO 200. Find the aperture and state why the meter agrees with the rule.",
        "stepByStepSolution": [
          "Apply Sunny 16: full sun meters at scene value EV 15, the rule pairing f/16 with the reference shutter at ISO 100 (M1).",
          "Set the base: at ISO 100 and 1/125 s, f/16 is the rule answer, and log2 of 256 times 125 is about 14.97, confirming EV 15 (M1).",
          "Rack the shutter to 1/1000 s, three stops faster, and raise ISO to 200, one stop more sensitive (M1).",
          "Balance the three faster shutter stops by opening the aperture from f/16 to f/5.6, then give back one stop for the ISO 200 gain, closing to f/8 as the working stop (M1).",
          "Verify by formula: N squared equals 2 to the power of 16 (EV 15 plus one ISO stop) times 1/1000, about 65.5, so N is about 8.1, the f/8 stop (A1).",
          "Shoot the wide, the mid and the close of the dancing at this setting and log it in the field note (A1)."
        ],
        "keyTakeaway": "Sunny 16 gives the honest midday starting point; every change of shutter or ISO is paid for in aperture stops, and the formula confirms it."
      }
    ],
    "quiz": {
      "id": "quiz-ph-culture",
      "topicId": "shs2-ph-t3-nature-cultural-photography",
      "title": "Nature and Cultural Photography Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-culture-1",
          "quizId": "quiz-ph-culture",
          "questionText": "A 300 mm lens is mounted on a body with a crop factor of 1.5. What is its 35 mm-equivalent focal length?",
          "optionA": "150 mm",
          "optionB": "300 mm",
          "optionC": "450 mm",
          "optionD": "600 mm",
          "correctOption": "C",
          "subConcept": "Crop factor",
          "explanation": "The equivalent focal length is the true focal length multiplied by the crop factor: 300 times 1.5 equals 450 mm. Option A divides instead of multiplying, and option D applies the micro four thirds factor of 2.",
          "remediationTip": "Recalculate three lenses against two crop factors in a small table until the multiplication becomes automatic."
        },
        {
          "id": "q-ph-culture-2",
          "quizId": "quiz-ph-culture",
          "questionText": "Using the reciprocal rule, which shutter is the safe handheld minimum for that 450 mm-equivalent view?",
          "optionA": "About 1/500 s",
          "optionB": "About 1/60 s",
          "optionC": "About 1/30 s",
          "optionD": "About 1/125 s",
          "correctOption": "A",
          "subConcept": "Reciprocal rule",
          "explanation": "The reciprocal of a 450 mm-equivalent view is 1/450 s, and the nearest standard stop at or above it is 1/500 s. The slower options guarantee hand blur at that reach however steady the hands believe they are.",
          "remediationTip": "Hand-hold the longest lens you own at its equivalent floor and at half that floor, then compare the frames at one hundred percent."
        },
        {
          "id": "q-ph-culture-3",
          "quizId": "quiz-ph-culture",
          "questionText": "Which festival of the Effutu people at Winneba centres on two youths wrestling a live deer through the town?",
          "optionA": "Homowo",
          "optionB": "Odwira",
          "optionC": "The Ga harvest thanksgiving at Accra",
          "optionD": "Aboakyir",
          "correctOption": "D",
          "subConcept": "Ghanaian festivals",
          "explanation": "Aboakyir, held each first Saturday of May at Winneba, is the deer-catching contest between two rival groups. Homowo belongs to the Ga people and centres on kpokpoi, while Odwira is the Akwapim harvest thanksgiving at Akropong.",
          "remediationTip": "Make a three-column table of Homowo, Aboakyir and Odwira with people, place, season and central act, then recite it once from memory."
        },
        {
          "id": "q-ph-culture-4",
          "quizId": "quiz-ph-culture",
          "questionText": "At Makola market you want a portrait of a trader behind a stall of peppers. The best working method is to?",
          "optionA": "Shoot quickly from the hip so nobody notices",
          "optionB": "Ask permission, buy something from the stall, and photograph openly",
          "optionC": "Use a long lens hidden under a cloth",
          "optionD": "Return after closing when the trader is alone",
          "correctOption": "B",
          "subConcept": "Street and market etiquette",
          "explanation": "Faces are someone's living; an honest question plus a small purchase earns open, relaxed frames and a second sitting. Secret or ambush shooting is an ethics failure in WASSCE terms and an assignment-ender in the field.",
          "remediationTip": "Practise a two-sentence introduction you can give in the local language or pidgin before lifting the camera at any market."
        },
        {
          "id": "q-ph-culture-5",
          "quizId": "quiz-ph-culture",
          "questionText": "What is the purpose of the field note kept during a nature or cultural outing?",
          "optionA": "It replaces the need for a camera bag",
          "optionB": "It records the meter serial number for calibration",
          "optionC": "It logs the exact battery voltage before every frame",
          "optionD": "It records subjects, place, date, names and settings so captions and the technical log can be written truthfully",
          "correctOption": "D",
          "subConcept": "Field notes and captions",
          "explanation": "The note turns pictures into evidence: species and item names, spellings, light, place, time and settings. Options B and C are equipment administration, and option A confuses the note with luggage.",
          "remediationTip": "On one outing, write a note line for every twenty frames and watch how fast the captioning evening shrinks."
        }
      ]
    }
  },
  {
    "id": "shs3-ph-t1-digital-capture-file-formats",
    "subjectId": "photography",
    "level": "SHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Digital Capture: Sensors, Formats and Workflow",
    "description": "Sensor sizes and crop factors, RAW against JPEG and bit depth, reading a histogram and exposing to the right, white balance in Kelvin, and the card, folder and backup discipline that keeps a school portfolio alive.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Sensor formats from largest to smallest in the school kit: full frame at 36 by 24 mm, APS-C near 23.6 by 15.6 mm with crop factor 1.5 (Canon APS-C uses 1.6), micro four thirds at 17.3 by 13 mm with factor 2, and one-inch compact sensors near 2.7.\n• Crop factor maths: 35 mm-equivalent focal length equals the true focal length times the crop factor, so 50 mm becomes 75 mm on a 1.5 body, 80 mm on a 1.6 body, and 25 mm becomes 50 mm on micro four thirds.\n• A full-frame sensor of 864 square millimetres holds about 2.3 times the area of a 23.6 by 15.6 mm APS-C sensor, which is where the better high-ISO behaviour comes from.\n• Resolution: a 24-megapixel sensor is about 6000 by 4000 pixels, which prints 10 by 8 inches at 300 pixels per inch with no upscaling.\n• Bit depth: an 8-bit JPEG channel stores 256 tones (2 to the power of 8); a 14-bit RAW channel stores 16384 tones (2 to the power of 14), so recoverable highlights and shadows live in the RAW file.\n• In linear RAW data half of the 16384 codes record the brightest stop alone, about 8192 codes, which is the technical reason for exposing to the right.\n• RAW is not a finished picture: it is sensor data needing development; JPEG is developed in camera, baked at 8 bits, and every later edit degrades it.\n• File sizes at 24 megapixels: uncompressed 14-bit RAW is about 42 MB (6000 times 4000 times 14 bits divided by 8), lossy compressed RAW lands near 25 MB, a fine JPEG near 6 to 8 MB.\n• Card maths: a 32 GB card treated as 32000 MB holds about 1280 compressed RAW files at 25 MB each, or about 760 uncompressed 42 MB files.\n• Histogram: a graph from 0 to 255 across the frame; a pile against the right edge means clipped highlights that no recovery can fix, a left-edge pile means blocked shadows.\n• Expose to the right means pushing brightness toward, never onto, the right wall, then lowering exposure in development; one stop right can drop shadow noise by around four times on a 14-bit file.\n• White balance is a Kelvin dial: tungsten about 3200 K, fluorescent about 4000 K, daylight about 5500 K, open shade near 7000 K; in RAW the choice is non-destructive, in JPEG it is baked at capture.\n• Workflow: format cards in the camera, do not fill them to the last frame, copy both card and camera folders the same evening, name files event_date_subject, and keep the 3-2-1 backup rule: three copies, two media, one off-site.",
    "detailedNotes": {
      "overview": "SHS 3 digital work asks you to control what happens between the sensor and the archive. This topic explains why the same lens sees differently on different sensor sizes, why a RAW file is bigger and tougher than a JPEG, how the histogram turns a guess into a measurement, and how Kelvin presets keep skin honest under Ghanaian mixed lighting. The workflow half — cards, folders, names, backups — is the difference between a portfolio that survives to WASSCE and one lost to a borrowed memory card.",
      "introduction": "Think of capture as a chain: sensor size sets the angle of view and the noise floor, bit depth sets how much latitude the file holds, the histogram tells you whether you used it, white balance sets the colour truth, and the workflow decides whether any of it still exists next term. Every link has a number attached, and the numbers below are examinable.",
      "realWorldContext": "A student in a Kumasi studio borrows two bodies for one portrait assignment: a full-frame with an 85 mm lens and an APS-C crop 1.5 with the same lens, and the class measures the framing difference. Cards are shuffled between four students covering a school durbar at Accra; a folder scheme agreed in advance — durbar_date_name — lets the class merge two hundred files the same evening instead of arguing over them.",
      "objectives": [
        "Compute 35 mm-equivalent focal lengths and sensor-area ratios from crop factors",
        "Explain bit depth and convert megapixels and bit depth into approximate uncompressed file sizes",
        "Read a histogram and apply expose-to-the-right without clipping highlights",
        "Set white balance from Kelvin references and explain why RAW balance is non-destructive",
        "Run a card, folder, naming and 3-2-1 backup workflow that protects a school portfolio"
      ],
      "sections": [
        {
          "title": "Sensor Sizes and the Crop Factor",
          "content": "The sensor is the film gate, and its size decides what a given lens sees. Full frame measures about 36 by 24 mm, the same gate as 35 mm motion picture film; APS-C is smaller at roughly 23.6 by 15.6 mm, so it uses only the central slice of the image circle and everything appears more magnified. That magnification is the crop factor: 1.5 on most APS-C bodies, 1.6 on Canon APS-C, 2 on micro four thirds, about 2.7 on one-inch compacts. Multiply the marked focal length by the factor to get the 35 mm-equivalent view: a 50 mm lens becomes 75 mm on a 1.5 body and 80 mm on a 1.6 body; a kit zoom at 18 to 55 mm covers about 27 to 82.5 mm equivalent. Area matters as much as angle: full frame at 864 square millimetres is about 2.3 times the APS-C gate, so it gathers proportionally more light and its files stay cleaner at high ISO, which is the real reason professionals defend full frame at night events.",
          "bulletPoints": [
            "Equivalent focal length equals marked focal length times crop factor.",
            "Crop 1.5: 50 mm becomes 75 mm; crop 1.6: 50 mm becomes 80 mm; crop 2: 25 mm becomes 50 mm.",
            "Angle of view narrows on smaller sensors; the lens itself does not change.",
            "Full-frame area of 864 square millimetres is roughly 2.3 times the 23.6 by 15.6 mm APS-C area."
          ],
          "keyTakeaway": "The crop factor is a multiplication you must be able to do in your head: focal length times factor gives the equivalent view, and sensor area gives the noise behaviour.",
          "realWorldExample": "The same 50 mm lens on a borrowed APS-C body at a Tamale graduation frames the principal like a 75 mm lens would on full frame, which is why the back-row photographer keeps stepping closer than the full-frame colleague."
        },
        {
          "title": "RAW against JPEG and What Bit Depth Buys",
          "content": "The sensor records light in RAW data; the picture you see is that data developed. A JPEG is developed in camera by an engineer you cannot argue with: demosaiced, sharpened, compressed and baked down to 8 bits per channel, which stores 256 tones of each colour. A RAW file keeps the full measurement — on many bodies 14 bits per channel, which is 16384 tones — and asks for a developer such as the free camera software or an editor at your desk. The size follows the maths: a 24-megapixel frame is about 6000 by 4000 pixels, and at 14 bits that is 6000 times 4000 times 14 divided by 8, roughly 42 MB uncompressed; lossy compression pulls the typical file to about 25 MB, while the fine JPEG lands between 6 and 8 MB. That is not bloat, it is latitude: a sunset burnt into a JPEG cannot be relit, the same frame in RAW can lose three stops and stay clean. The cost is honest: RAW needs developing before submission, and an examiner expects the development choices to be logged.",
          "bulletPoints": [
            "24 megapixels equals about 6000 by 4000 pixels.",
            "Uncompressed 14-bit RAW at 24 MP is about 42 MB; typical compressed RAW about 25 MB; fine JPEG 6 to 8 MB.",
            "8-bit JPEG: 256 tones per channel; 14-bit RAW: 16384 tones per channel.",
            "A 16-bit TIFF after deep editing at 24 MP reaches about 144 MB, the price of a flattened master file."
          ],
          "keyTakeaway": "RAW buys tones — 16384 per channel against 256 — and the bigger file is storage for editing headroom, not wasted space.",
          "realWorldExample": "A student at Winneba shoots a Aboakyir sunrise in JPEG and loses the sky; the same shoot in RAW lets the class pull the sky back on the school computer lab during the editing lesson the following week."
        },
        {
          "title": "The Histogram and Exposing to the Right",
          "content": "The histogram is the truth about exposure: a bar chart of all 256 brightness positions from blocked shadow at the left wall to clipped highlight at the right wall, drawn for the current frame. A slope touching the left edge means mud without detail; a spike plastered against the right edge means white holes where a face used to be. Digital sensors record brightness in steps, and in a linear 14-bit file half of the 16384 codes carry the brightest single stop, about 8192 codes, while each successive darker stop owns half as many codes as the one before it. Shadows therefore hold almost no data, and lifting a dark JPEG area smears it into coloured noise. Exposing to the right means pushing the graph toward the right wall without climbing it, usually a fraction under, then pulling the frame down in development to the true brightness; the shadows ride up with usable data instead of being dragged out of nothing. On the practical board, examiners expect the histogram to match the print: bright scenes with the graph high but unclipped.",
          "bulletPoints": [
            "Histogram: 0 to 255; left wall blocks shadows, right wall clips highlights irreversibly.",
            "In 14-bit linear data the brightest stop alone holds about 8192 of 16384 codes.",
            "Expose right by about two thirds of a stop, never onto the wall, then correct down in development.",
            "A one-stop-right exposure lowers visible shadow noise on a dark scene by about four times."
          ],
          "keyTakeaway": "Read the graph, not the glowing screen: protect the right wall, fill the file with data, and shade it back afterwards.",
          "realWorldExample": "A chief portrait in a bright Kumasi veranda: the meter begs for a darker frame, the student adds two thirds of a stop until the uniform white sits near but not on the right wall, and the shadow side opens cleanly in development."
        },
        {
          "title": "White Balance, Kelvin and Colour Truth",
          "content": "White light is not one white. A candle flame and a tungsten bulb sit near 3200 K and burn orange; fluorescent tubes around 4000 K add green; open daylight sits near 5500 K; shade and heavy cloud run cool toward 7000 K. The Kelvin dial on the camera does not warm or cool the picture by magic: you tell the camera what kind of light you believe you are standing in, and it neutralises that cast away. Under the mixed fluorescent and window daylight of a Ghanaian assembly hall the presets rarely lie, so the professional move is a grey-card custom balance at the start of the session, then the same setting held across the whole shoot. In RAW, white balance is only a starting tag and can be changed later without loss, which is why school portfolios should be archived in RAW; in JPEG the balance is baked, and a white-shirt frame shot on the tungsten preset stays stubbornly orange through every later edit.",
          "bulletPoints": [
            "Kelvin references: tungsten about 3200 K, fluorescent about 4000 K, daylight about 5500 K, open shade near 7000 K.",
            "The camera setting names the light present, not the correction wanted.",
            "Grey-card custom balance at the venue beats guessing a preset under mixed hall light.",
            "RAW balance is a changeable tag; JPEG balance is permanent at capture."
          ],
          "keyTakeaway": "Set balance to the light you measure, log it, and keep the RAW file so colour can still be argued with later.",
          "realWorldExample": "A durbar covered under cream-facade shade at Ho reads blue on the daylight preset; the card set to shade near 7000 K puts the white cloth back to white on the screen in the evening review."
        },
        {
          "title": "Cards, Folders, Names and the 3-2-1 Backup",
          "content": "More school portfolios have died from workflow than from bad glass. Format every card in the camera that will use it, because formatting builds the file system that body expects and clears leftovers from other photographers. Never shoot an assignment onto one card to its last frame: a 32 GB card treated as 32000 MB holds about 1280 compressed RAW frames at 25 MB, but a card riding on empty writes slower and fails younger, so swap at roughly four fifths and carry a formatted spare. Offload the same evening: copy card and camera-generated folder to the working drive, name files as event_date_subject_sequence so a merged set sorts itself, and keep the RAW archive, selected files and exported JPEGs in three folders. Then the 3-2-1 rule: three copies of everything, on two different media, with one copy off-site — a family desktop, a cloud drive, or the school server in another building. A portfolio that exists only on one memory card is a portfolio already lost.",
          "bulletPoints": [
            "Format in camera, swap before empty, and always carry a formatted spare card.",
            "32000 MB divided by 25 MB per RAW is about 1280 frames of capacity.",
            "File name pattern: event_date_subject_sequence; folders: RAW, SELECTED, EXPORT.",
            "3-2-1: three copies, two media types, one copy off-site."
          ],
          "keyTakeaway": "The archive is part of the photograph: format, offload, name and back up the same day the shutter falls.",
          "realWorldExample": "Four students at one school event share two cards and merge one folder scheme the same night; by Friday the class set is on the lab drive and a parent desktop, and the lost card in a Form 2 pocket cost nobody their coursework."
        }
      ],
      "commonMistakes": [
        "Treating the glowing rear screen as the meter: the screen lies in shop daylight; the histogram is the only honest exposure judge on the spot.",
        "Shooting a school archive only in JPEG and then begging the editor to rescue a burnt sky; the tones were discarded at capture and no slider can return them.",
        "Applying a correction of the wrong sign on white balance: under warm tungsten light the camera needs the tungsten preset, not daylight, or every face emerges orange.",
        "Reusing a card straight from another photographer without formatting in your own camera, then losing frames to a mismatched file system mid-ceremony.",
        "Studio habit: ending an assignment with one copy of the work on a single memory card; one wash cycle in a uniform pocket and the whole term portfolio is gone — offload and back up the same evening."
      ],
      "wassceExamTips": [
        "Paper 1 objective items on digital capture are mostly conversions: crop-factor multiplication, tones from bit depth, and frames from card capacity; practise the arithmetic until it is instant.",
        "A histogram question asks you to state the fault and the fix together: clipped right edge means reduce exposure or shade back, and writing only the diagnosis scores half.",
        "In Paper 2 planning answers, specify format, ISO ceiling and a white-balance method for the named venue; markers credit the grey-card custom answer under mixed hall light.",
        "Paper 3 boards are marked on handling of materials and finish: state the RAW development steps used for each print on the technical log, and keep the sequence consistent across the series.",
        "Quote file-size numbers cautiously and round sensibly: 42 MB uncompressed against 25 MB compressed RAW at 24 MP shows command of the topic; a wrong exponent shows the opposite."
      ],
      "summaryChecklist": [
        "Can I compute 35 mm-equivalent focal lengths for crop factors 1.5, 1.6, 2 and 2.7?",
        "Can I convert 24 megapixels and 14-bit depth into approximate RAW, JPEG and TIFF file sizes?",
        "Can I read a histogram, name the fault at each wall, and apply expose-to-the-right safely?",
        "Can I set white balance from Kelvin references and explain the difference between RAW and JPEG balance?",
        "Can I run the card, folder, naming and 3-2-1 backup workflow for a whole school assignment?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-digital-1",
        "title": "Crop Factor and Frame Coverage on Two Bodies",
        "problem": "A portrait lens marked 50 mm is fitted to a full-frame body and then to an APS-C body with crop factor 1.5. What is the equivalent view on the crop body, and what must the photographer change to keep the same head-and-shoulders framing?",
        "stepByStepSolution": [
          "State the rule: 35 mm-equivalent focal length equals marked focal length times the crop factor (M1).",
          "Substitute: 50 times 1.5 equals 75, so the crop body sees what a 75 mm lens gives on full frame (M1).",
          "Compare the angle of view: the crop frame throws away the outer slice, so the head fills more of the picture at the same distance (M1).",
          "Step back by the same ratio, about 1.5 times the original distance, or fit a shorter lens, to match the full-frame framing (M1).",
          "Check exposure consequences: the lens aperture is unchanged, so metered exposure stays identical between bodies (A1).",
          "Log both bodies, distances and settings so the two matched portraits can be repeated in the exam session (A1)."
        ],
        "keyTakeaway": "Crop factor is a simple multiplication with a physical meaning: narrower view, so move back by the factor to match the full-frame frame."
      },
      {
        "id": "ex-ph-digital-2",
        "title": "Counting One Day of Work onto Cards",
        "problem": "A school event generates 600 frames of 24-megapixel RAW shot with lossy compression averaging 25 MB per file, plus JPEG reference copies at 7 MB each. How much data is that, and how many 32 GB cards are wise for the day?",
        "stepByStepSolution": [
          "Convert the pixel grid: 6000 times 4000 equals 24000000 pixels, confirming the 24-megapixel rating (M1).",
          "Cross-check the RAW size theory: 24000000 pixels times 14 bits divided by 8 equals 42000000 bytes, about 42 MB uncompressed, before compression pulls it to roughly 25 MB (M1).",
          "Sum the real files: 600 times 25 MB equals 15000 MB RAW, and 600 times 7 MB equals 4200 MB JPEG, a total near 19200 MB (M1).",
          "Compare with capacity: one 32 GB card treated as 32000 MB holds the day with room, since 19200 MB is below 32000 MB, and 32000 divided by 25 equals 1280 RAW frames as the ceiling (M1).",
          "Apply the working rule anyway: swap cards at about four fifths full, so carry two formatted 32 GB cards rather than one brave one (A1).",
          "Offload both cards to the working drive the same evening and back up to a second medium off-site (A1)."
        ],
        "keyTakeaway": "Multiply frames by per-file size, compare against honest card capacity, and still carry a spare — arithmetic plus habit keeps the day."
      }
    ],
    "quiz": {
      "id": "quiz-ph-digital",
      "topicId": "shs3-ph-t1-digital-capture-file-formats",
      "title": "Digital Capture Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-digital-1",
          "quizId": "quiz-ph-digital",
          "questionText": "A 50 mm lens is used on a Canon APS-C body with crop factor 1.6. Find the 35 mm-equivalent focal length.",
          "optionA": "31 mm",
          "optionB": "65 mm",
          "optionC": "75 mm",
          "optionD": "80 mm",
          "correctOption": "D",
          "subConcept": "Crop factor",
          "explanation": "Equivalent focal length equals true focal length times crop factor: 50 times 1.6 equals 80 mm. Option C uses the 1.5 factor, option B is a common half-stop mis-multiplication, and option A divides instead of multiplying.",
          "remediationTip": "Drill the factors 1.5 and 1.6 against 35, 50 and 85 mm until each answer comes in under five seconds."
        },
        {
          "id": "q-ph-digital-2",
          "quizId": "quiz-ph-digital",
          "questionText": "How many distinct brightness tones can one colour channel of a 14-bit RAW file record?",
          "optionA": "256",
          "optionB": "16384",
          "optionC": "4096",
          "optionD": "65536",
          "correctOption": "B",
          "subConcept": "Bit depth",
          "explanation": "Tones equal 2 to the power of the bit depth: 2 to the 14th is 16384. Option A is the 8-bit JPEG figure, option C is 12-bit and option D is 16-bit.",
          "remediationTip": "Write the powers of two for 8, 12, 14 and 16 bits once, from memory, and keep the card in the camera bag."
        },
        {
          "id": "q-ph-digital-3",
          "quizId": "quiz-ph-digital",
          "questionText": "Which statement about RAW files is correct?",
          "optionA": "A RAW file keeps more tonal data and its white balance can still be changed without loss in development",
          "optionB": "A RAW file is a finished print that needs no development",
          "optionC": "A RAW file is always smaller than the finest JPEG",
          "optionD": "A RAW file locks colour and tone the moment it is written",
          "correctOption": "A",
          "subConcept": "RAW against JPEG",
          "explanation": "RAW preserves the full sensor measurement, typically 14 bits per channel, and white balance remains a changeable tag. Options B and D describe a baked JPEG behaviour, and option C reverses the size fact.",
          "remediationTip": "Develop one RAW frame twice with two different white balances and compare with a JPEG of the same moment forced to the tungsten preset."
        },
        {
          "id": "q-ph-digital-4",
          "quizId": "quiz-ph-digital",
          "questionText": "A histogram shows data plastered against the right edge with a gap before the left wall. The correct reading is?",
          "optionA": "Shadows are blocked and the frame needs more exposure",
          "optionB": "Exposure is perfect because the graph reaches an edge",
          "optionC": "Highlights are clipped and exposure must come down or be shaded back in development",
          "optionD": "The white balance is one preset too warm",
          "correctOption": "C",
          "subConcept": "Histogram reading",
          "explanation": "The right wall is maximum brightness; data climbing it means detail destroyed in whites, so reduce exposure or shade back. Option A describes the left wall, option B mistakes a spike for correctness, and the histogram reports tone, not colour balance.",
          "remediationTip": "Photograph a white uniform at three exposures and trace each histogram to see the right-wall spike appear and vanish."
        },
        {
          "id": "q-ph-digital-5",
          "quizId": "quiz-ph-digital",
          "questionText": "The 3-2-1 backup rule for a school portfolio means?",
          "optionA": "Three cards, two bodies, one photographer",
          "optionB": "Three folders, two file names, one password",
          "optionC": "Three events per term, two prints each, one board",
          "optionD": "Three copies of every file, on two kinds of media, with one copy stored off-site",
          "correctOption": "D",
          "subConcept": "Archive workflow",
          "explanation": "The rule counts copies, media and locations: three copies, two media types, one off-site. The other options mix in shooting kit or presentation plans, which are not backup layers.",
          "remediationTip": "Draw the three copies of one assignment as a diagram: working drive, second medium, off-site location, and name each today."
        }
      ]
    }
  },
  {
    "id": "shs3-ph-t2-image-editing-retouching",
    "subjectId": "photography",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 2,
    "title": "Image Editing and Retouching",
    "description": "Crop and straighten, correct tone with levels and curves, dodge and burn, clean up with clone and healing tools, sharpen for the intended output size, and keep every edit non-destructive on layers.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• Editing completes the photograph; it is not a repair shop. Fix capture problems in capture: straighten in camera, expose for the highlight, and the edit list shrinks.\n• Work non-destructively: keep the original file untouched, edit on copies, adjustment layers and layer masks so any decision can be undone the next morning.\n• Standard order of operations: crop and straighten, tone (levels then curves), colour (white balance and skin), clean-up (dust, spots, blemishes), local light (dodge and burn), sharpen last and only for the output size.\n• Crop to settle the composition: trim centimetres, not half the frame; a 24-megapixel original of 6000 by 4000 pixels still prints 30 by 20 cm at 300 ppi after a generous crop.\n• Straighten crooked horizons against a fixed reference in the scene (door frame, wall edge), never against the guessed level of the sea.\n• Levels set the black point, white point and midtone slider against the histogram; curves shape contrast with a gentle S, dragging the shadow point down a hair and the highlight up a hair.\n• Dodge and burn sculpt light locally: brighten the catchlight and cheekbone, darken the edge of the frame; work at low opacity, 10 to 20 percent, building in passes.\n• Clone Stamp copies pixels exactly; the Healing Brush blends the patch with surrounding texture, so use healing for skin and spots, clone for hard edges and patterns.\n• Spot removal discipline: zoom to 100 percent and sweep the frame in bands, dust on the sensor shows as the same soft dot in the same place in every frame.\n• Skin retouching stays honest: remove temporary blemishes, keep permanent features; a graduation portrait where the student is unrecognisable is a failed edit, not a finished one.\n• Colour-correcting skin: match the white of the eye and the shirt before touching the face; a cast that reads orange on screen often reads yellow in print under daylight bulbs.\n• Sharpening has two lives: capture or input sharpening for RAW softness, then output sharpening sized for the exact print dimension; unsharp mask radius 0.5 to 1.0 pixels for A4 glossy.\n• Over-editing traps: plastic skin from heavy noise reduction, halos from over-sharpening, clipped skies from a brutal curve, HDR grunge on a portrait.\n• Save layered masters (TIFF or the native project file), then export flattened JPEG or TIFF per job; a 6000 by 4000 pixel 16-bit TIFF is about 137 MiB, its 8-bit version about 69 MiB, a fine-quality JPEG near one tenth of that.",
    "detailedNotes": {
      "overview": "This topic turns the captured frame into the finished photograph using a controlled, repeatable desktop procedure. You learn the order of operations — crop and straighten, tone with levels and curves, clean with clone and healing, shape light with dodge and burn, then sharpen for the stated output — and you learn to keep every step non-destructive so a WASSCE board or a client can be served from the same master file. The Ghanaian studio reality is that editing is where school portraits, wedding sets and product images for Jiji listings actually earn their money.",
      "introduction": "Approach the edit as a checklist executed in fixed order, judged at one hundred percent zoom but decided at print size. The skill examined is restraint: the marker should be able to say the photograph was improved, never manufactured. Set your screen once, calibrate your expectations for Ghanaian humidity and indoor light, and the same routine will serve a chief portrait, a kente product shot and an exhibition print.",
      "realWorldContext": "A photo shop near Makola in Accra receives a graduation set of two hundred frames shot on a borrowed body with a dusty sensor and a tilting horizon on every frame. The assistant opens each RAW file, fixes white balance against the white shirt collar, straightens against the veranda pillar line, clones the sensor dust that appears in the identical spot in all two hundred frames, exports at 300 ppi for six-by-four-inch prints, and prices the job per edited image. The same workflow runs in a Kumasi wedding studio delivering album spreads over WhatsApp and in the school darkroom converting film scans for the WASSCE presentation board.",
      "objectives": [
        "Execute the standard edit order — crop, tone, colour, clean, dodge and burn, sharpen — and justify why sharpening comes last",
        "Read a histogram and correct tone using levels and a gentle curves S without clipping highlights or shadows",
        "Choose correctly between Clone Stamp and Healing Brush for skin spots, hard edges and repeating patterns",
        "Retouch a portrait skin and colour honestly, removing temporary blemishes while preserving the subject likeness",
        "Manage files non-destructively and state the export size and format needed for a named print dimension"
      ],
      "sections": [
        {
          "title": "Non-Destructive Workflow and File Discipline",
          "content": "Every professional edit begins with a promise: the original file will never be destroyed. That means working from a copy of the capture, keeping tone and colour moves on adjustment layers, and painting concealment into layer masks instead of rubbing pixels away with the eraser. In practice the master file stays layered — a flattened TIFF or the native project document — while each delivery is exported fresh at the size the job demands, so the same graduation portrait can serve a six-by-four-inch print today and an A3 exhibition mount next term without re-photoping the face. Naming and folder discipline belong here too: shoot date, client or class, frame number, and a version marker only when a real revision exists. Storage figures should be familiar; a 6000 by 4000 pixel frame at 24 megapixels saves as a 16-bit TIFF of roughly 137 MiB, an 8-bit TIFF of about 69 MiB, and a fine-quality JPEG near one tenth of that, which is why shops keep JPEG deliveries and RAW masters but only layered TIFFs for jobs that will be revisited.",
          "bulletPoints": [
            "Adjustment layers and masks let any decision be reversed; the eraser and direct pixel painting do not.",
            "One layered master per image, many flattened exports sized per job.",
            "File names carry date, client and frame number, not words like final, final2, final-real.",
            "A 24-megapixel frame at 16-bit is about 137 MiB; plan storage and transfer around it.",
            "Back up before the edit session, not after the crash."
          ],
          "keyTakeaway": "Non-destructive editing is a filing habit before it is a software habit: protect the capture, layer the changes, export per purpose.",
          "realWorldExample": "A Takoradi studio re-exports last year's whole funeral set at 300 ppi when the family orders a memorial board, because every frame kept its layered master and nobody had to shoot again."
        },
        {
          "title": "Crop, Straighten and Tone: Levels and Curves",
          "content": "The first two moves settle the frame and the light. Cropping tightens composition — removing the finger edge at the corner, moving the eyes onto the upper third — but it also destroys pixels, so check that a 30 by 20 cm print at 300 ppi still needs 3543 by 2362 pixels before you slice a 6000-wide original down to four thousand. Straightening works against a real vertical in the scene, a doorpost or a wall corner, never against a guess. Only then does tone begin: levels sets the black point by holding the left slider while watching the histogram meet the data, sets the white point the same way at the right, and then lifts or drops the midtone slider for overall exposure. Curves then adds shape rather than amount: a gentle S with one control point pulled slightly down in the shadows and one pushed slightly up in the highlights restores the depth a flat meter reading erased. Throughout, the histogram is the examiner: data pinned hard against the right wall means the sky detail is gone forever, and no later tool returns it.",
          "bulletPoints": [
            "Crop after checking the print target: 30 by 20 cm at 300 ppi needs 3543 by 2362 pixels.",
            "Straighten against a built vertical in the frame, not against the sea horizon.",
            "Levels first for endpoints and midtone, curves second for contrast shape.",
            "Watch the histogram edges; clipped highlights in a white shirt are unrecoverable.",
            "A gentle S suits portraits; extremes of curve belong to graphic work, not faces."
          ],
          "keyTakeaway": "Frame and tone are settled with measured moves against the histogram before any creative adjustment is attempted.",
          "realWorldExample": "A school picture day at Sunyani produces forty frames with the veranda roofline cutting across them; one crop preset matched to the 3:2 print ratio and a pillar-based straighten corrects the whole set in minutes."
        },
        {
          "title": "Cleaning Up: Clone, Healing and Spot Removal",
          "content": "Sensor dust, stray hairs, poster pins and temporary blemishes are removed with two tools that must not be confused. The Clone Stamp copies pixels from a source point exactly, which makes it right for repeating patterns, kente geometry and hard edges where the surrounding texture must be reproduced without blending. The Healing Brush copies texture but blends the colour and luminance of the patch into its new home, which is why it disappears skin spots without the plastic patch marks that clone leaves. Good cleanup is a survey, not a scribble: zoom to one hundred percent, sweep the frame in horizontal bands from top to bottom, and fix at low opacity with a soft brush edge so no boundary survives at print size. Dust that sits in the same position in every frame of a set came off the sensor, not the scene; clean one frame, then batch the same spot pass or block the shot outdoors. On portraits the ethic is documentary — remove the pimple that arrived that week, keep the scar the subject has lived with, and keep both eyebrows recognisably owned by the person in the photograph.",
          "bulletPoints": [
            "Clone for pattern and edge, heal for skin and tonal spots.",
            "Survey at one hundred percent in bands; random zoom-poking leaves missed dust at the corners.",
            "Identical dots in every frame mean a dirty sensor; clean the camera before the file.",
            "Remove temporary marks, keep permanent features; likeness outranks smoothness.",
            "A hard-edged patch at ten centimetres becomes a poster-sized confession at print."
          ],
          "keyTakeaway": "Cleanup is invisible labour: the marker of skill is that no edit can be found, only a cleaner photograph.",
          "realWorldExample": "A Kumasi wedding album page where the bride's dress shows chair lint and a wall crack; thirty healing passes at fifteen percent opacity read as silk, while a cloned block would have read as plaster."
        },
        {
          "title": "Dodge and Burn, Skin Colour and Output Sharpening",
          "content": "Local light shaping is the step that separates a flat corrected frame from a modeled one. Dodging lifts the catchlight, the bridge of the nose and the centre of interest; burning lowers frame edges, dense backgrounds and anything that competes for the eye; both are done on a low-opacity pass or on a neutral-grey layer set to overlay mode so the histogram of the face is never wrecked. Skin colour is corrected by reference, not taste: make the white of the eye neutral, check the shirt, and the face cast usually resolves itself; tropical shade light leans blue while a kerosene lamp or bulb-lit shop leans orange, and a white balance fixed by eye under those bulbs will mislead you later. Sharpening is finally matched to output: one gentle input sharpen for the softened RAW, then output sharpening computed for the exact print size and paper — an unsharp mask radius near 0.5 to 1.0 pixels at modest amounts for an A4 glossy sheet read at thirty centimetres. Over-editing is what the examiner hunts: halos ringing the hair, plastic skin from blanket noise reduction, and skies crushed so dark the birds leave black holes.",
          "bulletPoints": [
            "Dodge the centre of interest, burn the competition; build in passes at 10 to 20 percent opacity.",
            "Neutralise the eye white and the shirt and the skin cast follows.",
            "Sharpen for the output named: A4 glossy, six-by-four matte, or screen for WhatsApp delivery.",
            "Halos, plastic skin and clipped skies are the three visible signatures of over-editing.",
            "Compare before and after at print size and viewing distance, not at four hundred percent."
          ],
          "keyTakeaway": "The last third of the edit is restraint: model light gently, match colour to neutrals, and sharpen for the real audience distance.",
          "realWorldExample": "A chief portrait printed for the school magazine at Tamale where burning the busy notice-board behind the shoulder and dodging the jaw line makes the boy, not the room, the picture."
        }
      ],
      "commonMistakes": [
        "Sharpening first and cropping last, so the halos get chopped unevenly and the crop re-softens the edge; sharpening is always the final move for the exact output size.",
        "Retouching skin with heavy noise reduction at one hundred fifty percent zoom until the face looks like a mannequin; judge at print distance and keep pores as evidence of a real person.",
        "Ignoring sensor dust: the same soft dot sits in the corner of every frame of the set because the cleaning cloth stayed in the bag on picture day; blow the front element and take a test frame of clear sky before the shoot.",
        "Using the Clone Stamp on a cheek and leaving a colour-mismatched patch; the Healing Brush blends tone, the clone does not.",
        "Editing on a bright dim shop monitor and shipping files that turn orange in daylight; check against one known good print and trust the histogram over the screen."
      ],
      "wassceExamTips": [
        "Paper 1 objectives on editing ask for tool choice and order; the safe answers are the standard sequence (crop, tone, colour, clean, sharpen last) and healing-for-skin, clone-for-pattern.",
        "Paper 2 planning answers gain marks when the candidate names the output size and derives the pixel requirement, for example 30 by 20 cm at 300 ppi equals 3543 by 2362 pixels.",
        "Paper 3 presentation boards are marked on finish and handling of materials; a frame shown before and after with one sentence on what was corrected and why shows control better than a heavily worked single print.",
        "Write the technical log beside each print: the exposure at capture and the three main edit moves; markers give credit where the log matches the visible result.",
        "Expect an ethics question on retouching realism, especially for portraits; the defensible answer protects likeness and consent over flattering distortion."
      ],
      "summaryChecklist": [
        "Can I state and follow the standard edit order and explain why sharpening is last?",
        "Can I correct tone with levels and curves while reading the histogram for clipping?",
        "Can I choose between Clone Stamp and Healing Brush for a skin spot, a kente edge and a sensor dust dot?",
        "Can I dodge and burn a portrait subtly at low opacity without leaving visible passes?",
        "Can I export a layered master and a sized delivery file and name each correctly?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-image-editing-1",
        "title": "Rescuing a Graduation Portrait for a 30 by 20 cm Print",
        "problem": "A chief portrait shot at a Cape Coast school is slightly tilted, flat, has a sensor-dust dot at the left of the forehead, and must print 30 by 20 cm at 300 ppi from a 6000 by 4000 pixel file. Plan the edit in order and confirm the pixels survive.",
        "stepByStepSolution": [
          "Duplicate the RAW-derived master and open the copy on adjustment layers so the original stays untouched (M1).",
          "Straighten against the veranda pillar vertical by about one degree, then crop to the 3:2 ratio the print needs, leaving comfortably more than 3543 by 2362 pixels from the 6000 by 4000 original (M1).",
          "Set levels: place the black point where the histogram data begins, the white point just at the shirt highlight, then lift the midtone slider slightly for face exposure (M1).",
          "Add a gentle curves S, one point a hair down in the shadows and one a hair up in the highlights, checking no data pins against the right wall (M1).",
          "Remove the dust dot with the Healing Brush sampled nearby at fifteen percent opacity, keeping forehead texture, and neutralise the eye white to clear the blue shade cast on the skin (A1).",
          "Dodge the catchlight and jaw line, burn the notice-board corner, both at low opacity in passes (A1).",
          "Apply output sharpening sized for A4 glossy, export a flattened 300 ppi TIFF, and confirm at print distance that the likeness survives every move (A1)."
        ],
        "keyTakeaway": "A print-rescuing edit is an ordered checklist on layers: frame, tone, colour, clean, model, sharpen last, and the pixel maths checked before the crop."
      },
      {
        "id": "ex-ph-image-editing-2",
        "title": "Batch-Cleaning Sensor Dust Across a Two-Hundred-Frame Set",
        "problem": "A Makola shop delivers two hundred funeral frames from one camera; the same soft black dot sits in the identical corner of every frame. Explain the diagnosis and the fastest honest fix, and state why one frame is checked before the batch runs.",
        "stepByStepSolution": [
          "Open two frames from different scenes and confirm the dot is in exactly the same pixels in both, which locates the fault on the sensor, not in the room (M1).",
          "Note the position as a percentage of frame height and width so the spot can be found blind at any zoom (M1).",
          "Correct one representative frame fully with the Healing Brush sampled from adjacent clean sky or wall, at low opacity with a soft edge (M1).",
          "Print or display that corrected frame at full size and inspect it at arm length before touching the other one hundred ninety-nine, so the method is approved once (A1).",
          "Run the same spot pass across the set, re-checking every twentieth frame for alignment drift after any crop differences (A1).",
          "Log the fix and schedule a blower-bulb and swab clean of the front element and sensor before the next picture day (A1)."
        ],
        "keyTakeaway": "Repeating identical specks are camera dirt, not subject dirt: fix one frame, verify it honestly, then batch, and clean the tool that caused it."
      }
    ],
    "quiz": {
      "id": "quiz-ph-image-editing",
      "topicId": "shs3-ph-t2-image-editing-retouching",
      "title": "Image Editing and Retouching Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-image-editing-1",
          "quizId": "quiz-ph-image-editing",
          "questionText": "In the standard editing order, which move should come last?",
          "optionA": "Sharpening matched to the final print size",
          "optionB": "Cropping and straightening",
          "optionC": "Tone correction with levels",
          "optionD": "Spot removal with the healing brush",
          "correctOption": "A",
          "subConcept": "Order of operations",
          "explanation": "Sharpening is computed for the exact output dimension and must follow every geometry change; cropping after sharpening re-softens the edges. Cropping, levels and spot work all precede it in the fixed order.",
          "remediationTip": "Write the five-step order on a card and tick each step while editing one school portrait."
        },
        {
          "id": "q-ph-image-editing-2",
          "quizId": "quiz-ph-image-editing",
          "questionText": "Which tool is the correct first choice for softening a blemish on portrait skin?",
          "optionA": "Clone Stamp with a hard brush edge",
          "optionB": "Eraser on a small brush",
          "optionC": "Healing Brush sampled from nearby skin at low opacity",
          "optionD": "Curves pulled down over the spot",
          "correctOption": "C",
          "subConcept": "Clone versus healing",
          "explanation": "The Healing Brush blends the patch tone and luminance into its surroundings, which is what skin needs. Clone copies pixels exactly and leaves a colour-mismatched patch; the eraser destroys the image, and curves darkens the whole tonal range.",
          "remediationTip": "Put one spot right with clone and once with healing on the same face and compare at print size."
        },
        {
          "id": "q-ph-image-editing-3",
          "quizId": "quiz-ph-image-editing",
          "questionText": "A histogram shows data pinned hard against the right edge over a subject white shirt. What does this warn about?",
          "optionA": "The shadows are too deep",
          "optionB": "Highlight detail in the shirt is clipped and unrecoverable",
          "optionC": "The image is oversaturated",
          "optionD": "The file is a JPEG, not a RAW",
          "correctOption": "B",
          "subConcept": "Reading the histogram",
          "explanation": "Contact with the right wall means pixels are at maximum value with no recorded texture, so no later tool restores fold or seam detail in the shirt. Left-edge contact would be the shadow warning; saturation and format are read elsewhere.",
          "remediationTip": "Shoot a white cloth twice, once metered normally and once a stop darker, and compare both histograms."
        },
        {
          "id": "q-ph-image-editing-4",
          "quizId": "quiz-ph-image-editing",
          "questionText": "What is the main purpose of dodge and burn in a portrait edit?",
          "optionA": "To remove dust spots from the sky area",
          "optionB": "To change the camera white balance after capture",
          "optionC": "To convert the file from 16-bit to 8-bit",
          "optionD": "To lighten and darken chosen areas gently, modelling local light",
          "correctOption": "D",
          "subConcept": "Dodge and burn",
          "explanation": "Dodging lifts selected tones such as the catchlight and jaw line while burning lowers competing tones like busy backgrounds; the pair sculpts attention. Dust tools, white balance and bit depth are separate operations.",
          "remediationTip": "Burn one portrait edge at fifteen percent opacity in three passes and watch the face take the lead."
        },
        {
          "id": "q-ph-image-editing-5",
          "quizId": "quiz-ph-image-editing",
          "questionText": "Why should a retouched school portrait keep the subject recognisable?",
          "optionA": "Because JPEG format forbids skin editing",
          "optionB": "Because likeness and honesty outrank smoothing in portrait ethics and marking",
          "optionC": "Because the Healing Brush works only on students",
          "optionD": "Because sharpening hides heavy retouching",
          "correctOption": "B",
          "subConcept": "Retouching ethics",
          "explanation": "A portrait documents a person; examiners and schools both mark the edit as failed when permanent features are erased for fashion. Format, tool choice and sharpening have no bearing on the ethics of likeness.",
          "remediationTip": "Edit one frame twice, gently and heavily, and ask two classmates which one the subject would acknowledge."
        }
      ]
    }
  },
  {
    "id": "shs3-ph-t2-printing-mounting-presentation",
    "subjectId": "photography",
    "level": "SHS 3",
    "term": 2,
    "orderIndex": 3,
    "title": "Printing, Mounting and Presentation",
    "description": "Test resolution against print size at 300 ppi, choose glossy or matte paper, profile the printer, cut and mount prints on board, sequence a framed series and label it for exhibition and the WASSCE portfolio board.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• A print is a design decision, not a dump: choose the frame, size it for its final viewing distance, and prepare the file for the exact paper you will load.\n• The 300 ppi test: pixels required equals print inches multiplied by 300. A 30 by 20 cm print (11.81 by 7.87 inches) needs 3543 by 2362 pixels, about 8.4 megapixels; a 24-megapixel 6000 by 4000 file covers it with room to crop.\n• From the same 6000 by 4000 file, the largest true-300-ppi print is 50.8 by 33.9 cm; a 40 by 60 cm poster at 150 ppi needs 2362 by 3543 pixels, which the file also supplies.\n• Viewing distance is the silent permission: wall posters read from two metres tolerate 100 to 150 ppi; a hand-held six-by-four-inch print read at thirty centimetres needs the full 300 ppi.\n• Paper choice changes the picture: glossy gives depth of colour and punchy blacks but shows every fingerprint; matte and pearl hide glare and fingerprints in humid rooms but lose a stop of perceived contrast.\n• Print at the native or matching aspect ratio: an 8.4-megapixel file for 30 by 20 cm keeps its 3:2 shape; forcing 8R (20 by 25 cm) crops the frame edges.\n• Profile the printer: run the manufacturer paper preset, print a neutral test strip, and correct the screen-to-print shift with one curve saved as the output profile; humidity in Ghana swells paper, so store sheets flat in a sealed bag with silica gel.\n• Inkjet workflow: borderless or trimmed to size, dried for a full day in air, never stacked hot; laser prints leave toner smell and cannot take a wet mount.\n• Cut with a steel rule, cutting mat and a fresh blade; a dull blade tears the fibre edge and every ragged border is a presentation mark lost.\n• Mount on 2 to 3 mm mount board or foam board with even adhesive; the window mount cuts a reveal that floats the print, and double-mounting adds a colour line between print and board.\n• The finished mount is checked square by diagonal measurement, kept flat under weight, and never fingered again; hold mounts by the edges with clean cotton gloves.\n• Framed series need one rhythm: identical mount width, identical print height from the floor, images sequenced for story not chronology, strongest frame last or centre per the brief.\n• Exhibition labels carry title, medium, size, year and a one-sentence note, hung with the series title strip at eye level; the WASSCE portfolio board follows the same rule in print: clean, square, labelled, and every print matched in tone.\n• File-size sense for delivery: that 30 by 20 cm 300 ppi print is about 25 million pixels worth of RGB data, near 24 MiB uncompressed, so a lab accepts the flattened TIFF or highest-quality JPEG rather than a phone thumbnail.",
    "detailedNotes": {
      "overview": "This topic moves the edited file into physical objects that survive inspection at arm length: correctly sized prints on chosen paper, cut square, mounted flat, framed in sequence and labelled with professional facts. You will compute pixel requirements against print dimensions at 300 ppi, manage Ghanaian humidity in paper storage, and build the presentation board on which WASSCE photography is actually marked. Print selection, mount cutting and label writing are studio habits examined directly in Paper 3.",
      "introduction": "Treat every print as the photograph the viewer will actually meet; the screen file is only the negative. Size it with arithmetic, choose paper for the room it will hang in, let the ink cure, cut and mount with fresh blades and even adhesive, then sequence and label the set so a stranger can read your intention without asking you.",
      "realWorldContext": "A student at Assinuman shows her WASSCE series on market women at Makola: three 30 by 20 cm prints required at 3543 by 2362 pixels from a 24-megapixel camera, printed on pearl paper at a Circle print shop because glossy would glare under the hall bulbs. She trims with a new blade, double-mounts on grey board, sequences the frames from empty stall to closing shutters, writes labels with medium and size, and carries the flat board under weight between Kumasi and the school. A commercial version of the same job hangs at the Centre for National Culture in Kumasi, where framed series sell only when mount lines match and captions are printed, not handwritten.",
      "objectives": [
        "Calculate the pixel requirement for any print size at a stated resolution and test a file against it",
        "Choose between glossy, pearl and matte papers for a named hanging condition and justify the choice",
        "Prepare and profile a printer, store paper against humidity, and allow inkjet drying time",
        "Cut, mount and double-mount a print square with even adhesive and a window reveal",
        "Sequence a framed series and write exhibition labels to the standard expected on a WASSCE board"
      ],
      "sections": [
        {
          "title": "Resolution Arithmetic for Print Sizes",
          "content": "Print quality is measured in dots or pixels landing per inch of paper, and the working test is 300 pixels per inch for anything held in the hand. Convert centimetres to inches by dividing by 2.54, then multiply by the target resolution: a 30 by 20 cm print is 11.81 by 7.87 inches, so at 300 ppi it requires 3543 by 2362 pixels, roughly 8.4 megapixels — comfortably supplied by a 24-megapixel 6000 by 4000 file, which itself prints true 300 ppi up to 50.8 by 33.9 cm. Larger work leans on viewing distance: a 40 by 60 cm poster hung for reading at two metres needs only about 150 ppi, which is the same 2362 by 3543 pixels turned landscape, so the file is adequate even though the object is four times the area. The failure mode is up-sizing a cropped social-media thumbnail to A3 and shipping it to a lab; the print arrives with soft blocky edges and no amount of sharpening returns the detail that was never captured, which is why the pixel test is run before the crop, not after.",
          "bulletPoints": [
            "Inches equal centimetres divided by 2.54; pixels equal inches multiplied by the target ppi.",
            "30 by 20 cm at 300 ppi needs 3543 by 2362 pixels, about 8.4 megapixels.",
            "A 6000 by 4000 file covers 50.8 by 33.9 cm at 300 ppi, or 40 by 60 cm at 150 ppi.",
            "Hand-held prints demand full 300 ppi; distant wall work tolerates 100 to 150 ppi.",
            "Run the test before cropping so the crop cannot silently break the requirement."
          ],
          "keyTakeaway": "Every print size is a division and a multiplication before it is an artistic choice; the arithmetic decides whether the object can exist.",
          "realWorldExample": "A school yearbook editor at Ho rejects a 1200-pixel-wide phone export for the double-page sports spread because the 40 by 30 cm placement needs near 4700 pixels across at print resolution."
        },
        {
          "title": "Paper, Printer Setup and Humidity Control",
          "content": "Paper is the second lens of the camera. Glossy sheets hold the deepest blacks and most saturated colour because the coated layer reflects light specularly, but under hall bulbs and in humid hands they show glare, fingerprints and every uneven mount adhesive. Matte papers swallow reflections and read well in bright rooms at the cost of perceived contrast; pearl or semi-gloss sits between and is the default choice for school exhibition work in Ghana. The printer must be aligned with the paper: load the matching manufacturer preset, print a neutral test strip across the range of skin, sky and shadow, and carry the screen-to-print shift as one saved output curve rather than editing each image twice. Ghanaian humidity is a material fact, not an inconvenience: store sheets flat in sealed bags with silica gel, print and dry prints in air for a full day before any cutting or mounting, keep inkjet prints from touching while curing, and never laminate a damp print because the trapped moisture wrinkles the fibre in a week.",
          "bulletPoints": [
            "Glossy for punch and depth, matte for glare-free bright rooms, pearl as the exhibition default.",
            "Match the paper preset to the sheet loaded; wrong presets smear ink or mute colour.",
            "One printed test strip per paper type saves twenty spoiled prints.",
            "Sealed bags with silica gel keep paper flat and prints crisper in the rainy season.",
            "Full-day drying before trim and mount; fresh ink marks under a thumb."
          ],
          "keyTakeaway": "Paper choice and honest printer profiling decide the print; humidity discipline protects what they produced.",
          "realWorldExample": "A Sunyani print shop in April where sheets kept loose in the tray curl and feed crooked; the attendant stores cut stock in a sealed carton with silica gel and the banding stops."
        },
        {
          "title": "Cutting, Mounting and Double-Mounting",
          "content": "The mount is the print first impression. Trim with a steel rule, a self-healing mat and a fresh blade in one confident pull; a dull blade tears the paper edge, and a ragged border or a sliver of unprinted white on one side is instantly visible under exhibition lights. Cut the mount board — usually 2 to 3 mm thick — with the aperture at ninety degrees so the reveal window shows the board core as a crisp shadow line, or lay the print on the board face for a flush mount when the brief demands it. Adhesive must be even: spray mount in passes on both surfaces outdoors and let them flash off before joining, or use dry mount tissue with an iron on low through a protective sheet; too much glue cockles the print and too little lets a corner lift. Join by diagonals: measure corner to corner, adjust until the figures agree, and press the assembly flat under a weighted board overnight. Double-mounting inserts a thin colour line between print and outer board, adding formality cheaply. Hold finished mounts by the edges, ideally with clean cotton hands, because skin oil on a matte mount reads as a dark ghost of the thumb for the whole exhibition.",
          "bulletPoints": [
            "Fresh blade, steel rule, one pull: the border edge is a marked quality.",
            "Mount aperture cut square at ninety degrees so the reveal line falls evenly.",
            "Even adhesive, join by matching diagonal measurements, press flat overnight under weight.",
            "Double-mounting frames the print with a colour line and hides small trim faults.",
            "Handle finished mounts by the edges; thumb oil on matte board does not wash out."
          ],
          "keyTakeaway": "Square, flat and clean beats clever every time; the mount is judged as an object before the image is read.",
          "realWorldExample": "A WASSCE candidate at Kpong loses presentation marks when one mount corner lifts on the journey to the school because glue was laid only around the print edges."
        },
        {
          "title": "Sequencing a Series and Writing the Label",
          "content": "A series speaks as one sentence. Select prints that repeat something — tone, subject edge, a vertical rhythm — and vary the rest; six frames of identical size and mount width hung level at their print centres, about one and a half metres from the floor, read as intended even when individual frames differ in strength. Sequence for story: establish the place, develop the detail, end on the frame that re-answers the first; chronology is a weak alternative to narrative. On the WASSCE board the same logic compresses: the strongest and most technically sound prints carry the centre of the layout, the scheme of work sits at the head, and every mounted print carries a caption strip. Labels state the facts a buyer or marker needs — title in italics or quotation, medium as inkjet print on pearl paper, dimensions, year, and a single plain sentence of note — hung at the series title strip at eye level, printed not handwritten. Portfolio file discipline closes the loop: keep the 300 ppi masters, their layered edit files, and a contact-sheet index so any print can be remade identically after the exhibition.",
          "bulletPoints": [
            "Uniform print and mount dimensions make an uneven set look deliberate.",
            "Sequence establish, develop, resolve; the last frame should answer the first.",
            "Centre the strongest frames on the board where the marker eye lands first.",
            "Labels carry title, medium, size, year and one honest sentence, printed neatly.",
            "Archive the print-resolution masters and a contact sheet index for exact remakes."
          ],
          "keyTakeaway": "Presentation is authorship in public: selection, sequence, spacing and caption together tell the examiner what you meant.",
          "realWorldExample": "A framed series of fishing nets at Elmina shown at the school speech day, hung so all six print centres sit on one level line and the closing frame of the mended net answers the opening frame of the empty beach."
        }
      ],
      "commonMistakes": [
        "Shipping a screen-sized file to the lab: a 1500-pixel edge sent for a 30 by 20 cm print gives about 127 ppi and a soft blocky result; the 300 ppi test is run before ordering.",
        "Cutting mounts with a blade left from last term's craft table; the torn fibre edge and white slivers along one border cost presentation marks no tone correction can recover.",
        "Mounting a freshly printed inkjet while the ink is still curing, or trapping a damp print under glass; the sheet wrinkles within the week — dry a full day and keep humidity sealed.",
        "Pressing a glossy print flat against a hot car boot lid or stacking wet prints face to face; marks transfer and the set is lost; carry boards flat under weight instead.",
        "Handwriting labels in marker at the last minute before judging; printed caption strips fixed square with the series title read as professional, crooked handwriting reads as rush."
      ],
      "wassceExamTips": [
        "Paper 2 planning questions expect the resolution test stated as working: show centimetres to inches, multiply by 300 ppi, and compare with the file pixel count for method marks.",
        "Paper 3 marks handling of materials directly: clean square mounts, matched prints and undamaged corners are scored as observable items, so pack the board to travel flat.",
        "Presentation boards are read centre-outward; place your strongest three frames on the middle band and the studies toward the edges.",
        "Every mounted print needs a caption strip with the technical log of camera settings; the schedule gives explicit credit where the log matches the visible print.",
        "Bring proof of selection: a contact sheet with circled choices beside the final prints shows the marker your judgment process, which separate marks reward."
      ],
      "summaryChecklist": [
        "Can I compute the pixels needed for any print size at 300 ppi and check a file against it?",
        "Can I choose glossy, pearl or matte paper for a named hanging room and defend the choice?",
        "Can I cut and double-mount a print square, flat and clean with a fresh blade and even adhesive?",
        "Can I sequence six frames into a story and hang them on one level line?",
        "Can I write and fix a printed label with title, medium, size, year and a one-sentence note?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-printing-1",
        "title": "The 300 ppi Test for a 30 by 20 cm Exhibition Print",
        "problem": "A student wants a 30 by 20 cm print of a market scene shot on a 24-megapixel camera producing 6000 by 4000 pixel files. Test whether the file supports the print at 300 ppi and state the largest true-300-ppi print the file can cover.",
        "stepByStepSolution": [
          "Convert the print size to inches: 30 divided by 2.54 equals 11.81 inches, and 20 divided by 2.54 equals 7.87 inches (M1).",
          "Multiply each dimension by 300 ppi: 11.81 times 300 equals 3543 pixels across, and 7.87 times 300 equals 2362 pixels down (M1).",
          "Compare with the file: the required 3543 by 2362 is about 8.4 megapixels against the file 6000 by 4000, so the print is comfortably supported even after a crop (A1).",
          "Divide the file edges by 300 to find the ceiling: 6000 divided by 300 equals 20 inches, 4000 divided by 300 equals 13.33 inches (M1).",
          "Convert back to centimetres: 20 inches equals 50.8 cm and 13.33 inches equals 33.9 cm, the largest true-300-ppi print from this file (A1).",
          "Record the figures on the print order so the lab cannot substitute a down-sized master file (A1)."
        ],
        "keyTakeaway": "Print ambition is measured in arithmetic: inches times 300 ppi, tested against the file, with the ceiling stated in centimetres."
      },
      {
        "id": "ex-ph-printing-2",
        "title": "Mounting Three Pearl Prints for the School Board",
        "problem": "Three 30 by 20 cm pearl prints must be double-mounted on grey board with a 5 cm reveal and joined square for travel to the WASSCE venue. Plan the bench procedure from drying to packing.",
        "stepByStepSolution": [
          "Let the prints cure a full day flat in a dry sealed carton with silica gel before any blade touches them (M1).",
          "Trim each print square on the mat with a steel rule and a fresh blade in one pull, discarding the first trial cut on scrap (M1).",
          "Cut mount apertures 5 cm wide with the knife at ninety degrees so the reveal line falls evenly on all four sides (M1).",
          "Spray-mount print backs and board faces outdoors in even passes, allow to flash off, then position the print and press from the centre outward (M1).",
          "Check squareness by measuring both diagonals and nudging the print until the two figures agree; press the assembly flat under a weighted board overnight (A1).",
          "Fix printed caption strips at the foot of each mount, keep the board flat between two stiff sheets for the journey, and carry it without leaning it against a trotro seat back (A1)."
        ],
        "keyTakeaway": "A marked mount is dried, cut with a fresh blade, joined by diagonals, weighted flat and transported under protection."
      }
    ],
    "quiz": {
      "id": "quiz-ph-printing",
      "topicId": "shs3-ph-t2-printing-mounting-presentation",
      "title": "Printing and Presentation Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-printing-1",
          "quizId": "quiz-ph-printing",
          "questionText": "How many pixels across does a 30 cm print require at 300 ppi?",
          "optionA": "1181 pixels",
          "optionB": "3000 pixels",
          "optionC": "about 3543 pixels",
          "optionD": "6000 pixels",
          "correctOption": "C",
          "subConcept": "Print resolution maths",
          "explanation": "30 cm divided by 2.54 equals 11.81 inches, and 11.81 times 300 ppi equals 3543 pixels. Option A misreads the inch conversion as the pixel count, and 6000 pixels is the camera file edge, not the requirement.",
          "remediationTip": "Re-run the two-step conversion on a 20 cm edge and compare with the topic figures."
        },
        {
          "id": "q-ph-printing-2",
          "quizId": "quiz-ph-printing",
          "questionText": "Which paper suits a photography exhibition hung in a brightly lit school hall?",
          "optionA": "Matte paper, because it swallows reflections and hides fingerprints",
          "optionB": "Glossy paper, because its mirror shine adds sharpness",
          "optionC": "Plain photocopy paper, because it is cheap",
          "optionD": "Adhesive sticker vinyl, because it needs no mount",
          "correctOption": "A",
          "subConcept": "Paper choice by hanging condition",
          "explanation": "Under strong hall lighting glossy sheets glare and show every thumb mark, while matte holds a calm readable surface; pearl is the compromise. Photocopy paper cannot hold ink density and vinyl suits signage, not exhibition mounts.",
          "remediationTip": "Hang one glossy and one matte print side by side under the hall lights at thirty centimetres viewing distance."
        },
        {
          "id": "q-ph-printing-3",
          "quizId": "quiz-ph-printing",
          "questionText": "A mount is checked for squareness before pressing by measuring what?",
          "optionA": "The reveal width at the top and bottom only",
          "optionB": "The print weight against the board weight",
          "optionC": "The drying time of the adhesive",
          "optionD": "Both corner-to-corner diagonals until the two figures agree",
          "correctOption": "D",
          "subConcept": "Mounting accuracy",
          "explanation": "Equal diagonals prove the rectangle is square, so the print sits parallel to the board edges. Top-and-bottom reveal alone cannot detect a leaning print, and weight and drying time are different checks.",
          "remediationTip": "Measure the diagonals of one finished mount; if they differ by more than a millimetre, remount it."
        },
        {
          "id": "q-ph-printing-4",
          "quizId": "quiz-ph-printing",
          "questionText": "Why is a 40 by 60 cm wall poster acceptable from fewer pixels than a hand-held print of the same scene?",
          "optionA": "Posters print at 300 ppi regardless of size",
          "optionB": "Viewers stand about two metres away, so 100 to 150 ppi reads clean",
          "optionC": "Large paper hides soft edges automatically",
          "optionD": "The printer adds megapixels while printing",
          "correctOption": "B",
          "subConcept": "Viewing distance and resolution",
          "explanation": "Dot visibility falls with distance, so work read from two metres tolerates 100 to 150 ppi while a six-by-four-inch print at arm length needs 300. Paper does not create detail and printers cannot invent megapixels.",
          "remediationTip": "Stand a printed poster at two metres and a six-by-four at thirty centimetres and compare what the eye resolves."
        },
        {
          "id": "q-ph-printing-5",
          "quizId": "quiz-ph-printing",
          "questionText": "What information belongs on a standard exhibition label?",
          "optionA": "Title, medium, dimensions, year and a short note",
          "optionB": "The camera serial number and memory card size",
          "optionC": "The photographer's classmate names",
          "optionD": "Only the price in cedis",
          "correctOption": "A",
          "subConcept": "Exhibition labels",
          "explanation": "Labels state the work identity and facts a viewer or buyer needs: title, medium such as inkjet print on pearl paper, size, year and one honest sentence. Equipment numbers and third-party names are not exhibition facts, and price alone is a sales sticker, not a label.",
          "remediationTip": "Write labels for two of your own prints in the five-field order and have a classmate read them cold."
        }
      ]
    }
  },
  {
    "id": "shs3-ph-t3-commercial-photography-business",
    "subjectId": "photography",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 4,
    "title": "Commercial Photography and Photo Business",
    "description": "Run product and real-estate shoots to a brief, agree usage rights before delivery, price the job with day rates, per-image fees and edit charges, write a simple contract, and market the work as a Ghanaian photo business.",
    "isFreeTrial": false,
    "isVip": false,
    "keyNotes": "• Commercial photography is a service bought against a brief: the client hires you to solve a picture problem, so every job starts with the brief restated in writing.\n• The brief must fix six facts: subject list, image count, delivery size and format, usage (packaging, social, press, billboard), deadline, and payment terms; anything unstated becomes an argument later.\n• A shot list converts the brief into work: numbered frames, location, props, time slot; for a Kantamanto clothing seller it may read twenty product shots on white plus four lifestyle shots on a model.\n• Product shoots need controlled light: one source with a reflector, a plain seamless backdrop of white card or cloth, a small tabletop tripod, and camera set to f/8 to f/11 for edge-to-edge sharpness on a 50 mm lens.\n• Real-estate shoots: wide-angle verticals kept straight, all lights on and blinds open, blue-hour exterior, Declutter surfaces first, bracket two or three frames for a clean high-dynamic-range interior blend; agents in East Legon buy bright straight walls, not moody art.\n• Usage rights are licensed, not sold: state where the image may appear, for how long, and whether the client may crop or recolour; a fee for a Jiji listing and a fee for a three-year billboard are different fees.\n• Ghana Copyright Act 2005 (Act 690) vests authorship in the photographer; a client who commissions a portrait does not automatically own the right to publish it, so the contract must say what is transferred.\n• Pricing components: day rate for shooting time, per-image licence fee, edit charge per retouched frame, plus transport and studio costs; a school event day might quote GH¢600 day rate plus GH¢35 per licensed image.\n• Worked quote: day rate GH¢600, twelve images licensed at GH¢35 (GH¢420), transport GH¢80 gives a GH¢1,100 invoice; if editing costs GH¢15 per frame (GH¢180), gross margin on the job is GH¢920.\n• Product package example: twenty catalogue items at GH¢25 each plus GH¢150 studio half-day totals GH¢650; print-and-frame sales at a market stall: cost GH¢55 a piece, price GH¢90, five sold give GH¢175 profit.\n• A contract can be one page: parties, scope from the brief, licence terms, delivery date and size, fee and deposit (commonly fifty percent before work begins), kill fee, and credit line; signed by both sides before the camera leaves the bag.\n• Deliver against the contract: agreed count at agreed resolution, a small lower-resolution web set, delivery over WhatsApp, email link or external drive, and archive the masters for reorder requests.\n• Marketing a Ghanaian photo business: a tight portfolio of twenty strongest frames, an Instagram and WhatsApp status presence with prices on request, referrals from two repeat clients, punctual delivery as the loudest advertisement.\n• Professional habits that win rebooking: arrive early, shoot the boring safety frames first, keep MoMo payment records, invoice within twenty-four hours, and never delete cards before delivery is confirmed and paid.",
    "detailedNotes": {
      "overview": "This topic prepares you to earn from the camera: taking a brief, planning product and real-estate shoots, licensing usage instead of giving images away, pricing a job from day rate and per-image fees to a signed one-page contract, and running the small business habits that keep clients returning in Ghana. The mathematics of the quote is examinable; so is the ethic of credit, consent and payment records. You are learning a trade desk as much as a tripod.",
      "introduction": "Approve the brief on paper before touching the camera, price from components rather than guesswork, and deliver exactly what the contract promised on the day it promised it. Clients rebook certainty, not genius; the photographer who answers the phone with a shot list and a fee schedule wins the job from the one who answers with only a low price.",
      "realWorldContext": "A Kantamanto second-hand clothing seller hiring you for Jiji and Instagram listings wants twenty shirts shot clean on white with prices readable: a package of twenty frames at GH¢25 plus a GH¢150 studio half-day totals GH¢650, delivered within two days over WhatsApp. A rival job: an East Legon estate agent needs twelve interior photos and one exterior at dusk for a rental page, licensed for their listings for one year, quoted as a GH¢600 day rate plus twelve images at GH¢35 plus GH¢80 transport, a GH¢1,100 invoice settled by MoMo with a signed one-page agreement. Both are ordinary Accra and Kumasi photo businesses, and both are the kind of brief WASSCE Paper 2 asks you to plan.",
      "objectives": [
        "Restate a client brief in writing covering subject, count, delivery, usage, deadline and payment",
        "Plan and execute a tabletop product shoot and an interior real-estate shoot to that brief",
        "Explain licensing versus selling and cite the position under Ghana Copyright Act 2005 (Act 690)",
        "Price a job from day rate, per-image licence, edit charges and expenses into a written quote",
        "Draft a one-page contract and the delivery, invoicing and archive habits of a photo business"
      ],
      "sections": [
        {
          "title": "The Brief and the Shot List",
          "content": "Commercial work begins as paperwork. The brief is a restatement the client signs off in writing or on WhatsApp: exactly which products or rooms, how many images, the delivery size and format, where the images will be used, the deadline, and the payment schedule. Every clause prevents a known dispute; unstated image count becomes never enough, unstated usage becomes a billboard you were paid a web price for. The shot list then converts the brief into a day plan: numbered frames with subject, location, props and time slot, arranged so one setup yields several frames before anything is moved. For the Kantamanto shirt shoot the list reads plain white background, front view, back view, detail of the label, then four shots worn on a model near the shop front where daylight is even. Working from the list means the last frame is predictable, the client can approve progress during the shoot, and a safety buffer exists before the deadline because the list shows what can be cut if rain arrives.",
          "bulletPoints": [
            "Six brief facts: subjects, count, delivery specs, usage, deadline, payment terms.",
            "The shot list orders the day so each setup earns several approved frames.",
            "Shoot the mandatory frames before the creative ones; a client rejects a missed brief first.",
            "Confirm the brief in writing, a WhatsApp reply of yes is already evidence.",
            "Build a cut-list of nice-to-have frames for the bad-light contingency."
          ],
          "keyTakeaway": "A job is won and delivered on paper before and after the shutter; the camera is the middle third of the work.",
          "realWorldExample": "A wedding client at Kumasi who asked for candids of the grandmother arriving: on the shot list at item four, shot at the gate at 09:40, approved on the screen before the couple left for the airport."
        },
        {
          "title": "Product and Real-Estate Shoot Mechanics",
          "content": "Product photography is small-scale studio control. One lamp or one window, a white foamboard reflector opposite it, a seamless background of white card, the camera on a tripod at product height, and settings around f/8 to f/11 with a 50 mm lens so labels and edges stay sharp corner to corner; for a Kantamanto catalogue the twenty shirts all sit in identical light so the buyer sees colour fairly, and a grey card frame at the start of each batch makes white balance a five-second task. Real-estate work is wide-angle discipline: choose one-point perspective with the camera dead level so verticals do not fall backward, open every blind and switch on every fitting, remove clutter and personal items first, and bracket two or three exposures for the window view so the bright Accra sky does not burn white. Exteriors shoot at blue hour with the interior lights warm against dusk, the signature agent image. Deliver interiors bright, straight and spacious; agents buy rooms that look larger honestly, not stretched by a fisheye, and one crooked frame can cost the rebooking.",
          "bulletPoints": [
            "Tabletop kit: one light, reflector, seamless white, tripod, f/8 to f/11, grey card for batch balance.",
            "Identical light across a catalogue batch lets colours be compared fairly.",
            "Interiors: camera level, one-point view, all lights on, clutter gone before the frame.",
            "Bracket for window views; a single exposure cannot hold bright outdoors and dim indoors.",
            "Blue-hour exteriors with warm interior light read as the premium listing photograph."
          ],
          "keyTakeaway": "Commercial competence is boring consistency: the same light across twenty products and dead-straight verticals across twelve rooms.",
          "realWorldExample": "A Kasoa furniture seller whose chair listing gained showroom calls after the seat fabric shots were re-shot at f/11 beside a window instead of under a bare bulb."
        },
        {
          "title": "Usage Rights, Licensing and Copyright",
          "content": "The image file is not the product; the permission to use it is. Under Ghana Copyright Act 2005 (Act 690), literary and artistic works, photographs included, vest authorship in the creator, and a commission to photograph does not by itself transfer the right to publish, alter or resell the pictures unless the contract says so. Therefore the professional sells a licence with terms: the medium such as social media or print, the territory, the duration, whether cropping or recolouring is allowed, and whether the client may pass the image to a partner brand. A one-year web licence for a Jiji listing and a three-year billboard licence on the Spintex road are different fees, and the difference should be visible in the quote so the client understands they are buying reach, not megapixels. Moral credit survives most transfers: the contract can require the client to tag or name the photographer where the platform allows it, and school or event clients can be told plainly which images they may print for free for personal use and which they must order again for resale.",
          "bulletPoints": [
            "Authorship stays with the photographer under Act 690 unless a contract transfers rights.",
            "Licence terms name medium, duration, territory, alteration rights and onward sharing.",
            "Price the reach: billboard licence far exceeds a marketplace listing fee.",
            "Credit clauses cost nothing and build the portfolio one client at a time.",
            "Personal-use permission for a school set is stated, never assumed."
          ],
          "keyTakeaway": "Quote the permission, not the pixels; an unsigned usage question is money that leaks.",
          "realWorldExample": "A drinks brand in Accra reusing a graduation set shot for a campus campaign without a word: the fee settlement was written on the invoice terms before the campaign, because the original licence covered school use only."
        },
        {
          "title": "Pricing, Contracts and Business Habits",
          "content": "Build a quote from visible components so both sides can argue with the arithmetic rather than the person: day rate for shooting time, a per-image licence fee for the count, an edit charge per retouched frame, plus transport, studio and assistant costs. A school event priced at a GH¢600 day rate with twelve licensed images at GH¢35 is GH¢1,020, and GH¢80 transport makes the invoice GH¢1,100; when editing costs GH¢15 per frame (GH¢180), the gross margin left is GH¢920, which pays the equipment, the software, the rainy Sundays and the tax. A product package priced at twenty frames at GH¢25 plus a GH¢150 studio half-day totals GH¢650; even print sales at a market stall follow the rule, costing GH¢55 a mounted piece, selling at GH¢90, so five prints profit GH¢175. Around the money sits the one-page contract: parties, scope from the brief, licence terms, delivery specification and date, fee with a deposit commonly fifty percent before work, a kill fee for cancellations after the day is reserved, and the credit line. Then the habits that compound: invoice within a day, keep MoMo records, deliver exactly what was counted, archive masters for reorders, and let twenty strongest frames, an active WhatsApp status and punctuality do the marketing.",
          "bulletPoints": [
            "Quote in components: day rate, per-image licence, edit charge, expenses.",
            "Deposit before booking protects the day you turned other jobs down for.",
            "One page of terms beats a verbal promise every disputed job proves.",
            "Track cost against price per job; margin, not revenue, keeps the studio open.",
            "Portfolio, prompt delivery and referrals market a photo business better than discounts."
          ],
          "keyTakeaway": "Price transparently, paper the deal, deliver on count and on time; the arithmetic and the habit together are the business.",
          "realWorldExample": "A Cape Coast graduate shooting funerals who raised her day rate by quoting GH¢600 plus GH¢35 per image in writing; regular clients stayed, and the bargain hunters who argued every invoice left on their own."
        }
      ],
      "commonMistakes": [
        "Working from a verbal brief with no written count: the client expects sixty images because the day felt long, and the photographer expected twenty; fix by restating the six brief facts before leaving the call.",
        "Selling the day instead of the usage: one flat fee let a GH¢300 event set reappear as a nationwide poster; price medium, duration and territory into the licence from the first quote.",
        "Shooting product batches under a bare bulb one day and window light the next, then paying double in editing to match colours; lock one lighting setup and a grey card frame per batch.",
        "Leaning on discounts won by late quotes: an unsigned client then doubles the scope; issue the quote and contract the same day the brief arrives, deposit included.",
        "Deleting the card to free space before delivery is paid and confirmed; a lost unrepeated event shoot is the one unrecoverable stock a photo business has."
      ],
      "wassceExamTips": [
        "Paper 2 asks candidates to plan a commercial shoot; marks follow the six brief facts and a numbered shot list with times, not paragraphs of intention.",
        "A pricing question gives away method marks when components are listed and summed: day rate plus per-image licence plus expenses, with the arithmetic correct on one line.",
        "Paper 1 objectives test copyright basics: authorship under Act 690 rests with the photographer unless rights are transferred in writing.",
        "In practical portfolios, a documented client brief beside the delivered series shows real-world handling and gains presentation credit.",
        "Carry a model one-page contract into the exam hall knowledge; being able to name its clauses (scope, licence, delivery, fee, deposit, kill fee, credit) answers short questions directly."
      ],
      "summaryChecklist": [
        "Can I restate a client brief covering subjects, count, delivery, usage, deadline and payment?",
        "Can I run a tabletop product batch in identical light and a level interior with bracketed windows?",
        "Can I explain the difference between selling files and licensing usage under Act 690?",
        "Can I build a quote from day rate, per-image fee, edit charge and expenses to a correct total?",
        "Can I draft a one-page contract with deposit, delivery specification and credit line?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-commercial-1",
        "title": "Quoting a School Event Day",
        "problem": "A school wants a speech-day coverage: one shooting day, twelve images licensed for the school website for one year, delivered edited. Build the quote from a GH¢600 day rate, GH¢35 per licensed image, GH¢80 transport and GH¢15 per frame editing cost, and state the invoice and gross margin.",
        "stepByStepSolution": [
          "Fix the components before arithmetic: day rate GH¢600, licence 12 images at GH¢35, transport GH¢80 (M1).",
          "Multiply the licence line: 12 times GH¢35 equals GH¢420 (M1).",
          "Sum the invoice: GH¢600 plus GH¢420 plus GH¢80 equals GH¢1,100 (A1).",
          "Work the cost side: editing 12 frames at GH¢15 equals GH¢180 (M1).",
          "Subtract to find gross margin: GH¢1,100 minus GH¢180 equals GH¢920 before equipment and time (A1).",
          "Write the terms beside the figures: one-year web licence, fifty percent deposit, delivery in forty-eight hours at 300 ppi masters (A1)."
        ],
        "keyTakeaway": "A quote is transparent components summed once; the client argues with numbers, not with the person holding the camera."
      },
      {
        "id": "ex-ph-commercial-2",
        "title": "A Kantamanto Product Package on White",
        "problem": "A clothing seller needs twenty shirts shot for online listings. Price the package at GH¢25 per finished frame plus a GH¢150 studio half-day, plan the shoot for identical light, and state the delivery against the brief.",
        "stepByStepSolution": [
          "Price it in components: 20 frames at GH¢25 equals GH¢500, plus GH¢150 studio half-day gives a GH¢650 package (M1).",
          "Set one lighting position, one window or one lamp with a foamboard reflector and seamless white, and leave it untouched for all twenty (M1).",
          "Shoot a grey card frame at the start of the batch so white balance is matched in seconds, camera at f/8 to f/11 on a tripod for sharp labels (M1).",
          "Work the list front, back, detail: shirt one completes all three views before shirt two enters the frame, so nothing shifts (M1).",
          "Deliver twenty listings at web size with filenames carrying shirt codes, and keep the 300 ppi masters archived for reorders (A1).",
          "Invoice the same day with the GH¢650 package total and the deposit already received logged against it (A1)."
        ],
        "keyTakeaway": "A catalogue job is sold as a package, shot in one locked setup and delivered against a numbered list; consistency is what the client is paying for."
      }
    ],
    "quiz": {
      "id": "quiz-ph-commercial",
      "topicId": "shs3-ph-t3-commercial-photography-business",
      "title": "Photo Business Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-commercial-1",
          "quizId": "quiz-ph-commercial",
          "questionText": "Under Ghana Copyright Act 2005 (Act 690), who holds authorship of a commissioned portrait unless a contract transfers it?",
          "optionA": "The client who paid for the sitting",
          "optionB": "The photographer",
          "optionC": "The school that arranged the sitting",
          "optionD": "Nobody; commissioned photos have no copyright",
          "correctOption": "B",
          "subConcept": "Copyright and commission",
          "explanation": "Authorship of an artistic work vests in the creator; payment for a sitting is not a transfer of rights unless the contract says so. The client receives whatever usage the agreement grants, and photographs are protected works, not ownerless ones.",
          "remediationTip": "Write the two-sentence licence line you would add to a portrait invoice so the client may print the photo for personal use."
        },
        {
          "id": "q-ph-commercial-2",
          "quizId": "quiz-ph-commercial",
          "questionText": "A day rate of GH¢600 plus twelve images licensed at GH¢35 each plus GH¢80 transport gives which invoice total?",
          "optionA": "GH¢1,020",
          "optionB": "GH¢680",
          "optionC": "GH¢715",
          "optionD": "GH¢1,100",
          "correctOption": "D",
          "subConcept": "Quote arithmetic",
          "explanation": "Twelve times GH¢35 is GH¢420; GH¢600 plus GH¢420 plus GH¢80 totals GH¢1,100. Option A forgets the transport line, a common leak when quotes are built from memory.",
          "remediationTip": "Rebuild the quote as a three-line table and add it twice before trusting the total."
        },
        {
          "id": "q-ph-commercial-3",
          "quizId": "quiz-ph-commercial",
          "questionText": "Which camera and light setup suits a tabletop product batch on white?",
          "optionA": "One fixed light, a reflector, seamless background, tripod, f/8 to f/11",
          "optionB": "Hand-held at f/1.8 with a bare bulb moved for each item",
          "optionC": "Built-in flash only, auto everything, shot between takes outdoors",
          "optionD": "A fisheye lens at arm length for every frame",
          "correctOption": "A",
          "subConcept": "Product shoot mechanics",
          "explanation": "Identical locked light and a narrow aperture give sharp matched catalogue frames; a grey card then balances the batch. Moving light or aperture per item creates mismatched colours the client sees immediately, and a fisheye distorts product edges.",
          "remediationTip": "Shoot two mugs twice, once under a locked window setup and once under a wandering bulb, and compare the pairs."
        },
        {
          "id": "q-ph-commercial-4",
          "quizId": "quiz-ph-commercial",
          "questionText": "What is the safest payment habit before shooting a booked event day?",
          "optionA": "Promise the client the invoice after the pictures are loved",
          "optionB": "Wait for mobile money on the day of the event",
          "optionC": "Take an agreed deposit, commonly half the fee, against the signed terms",
          "optionD": "Increase the day rate on the spot if the venue looks large",
          "correctOption": "C",
          "subConcept": "Contract and deposit",
          "explanation": "A deposit before work secures the fee and compensates the reserved day, and it is collected against written terms. Collecting after the fact leaves the photographer holding the only asset, the images, with no leverage; repricing mid-book destroys trust.",
          "remediationTip": "Add one clause, deposit and timing, to a sample one-page contract and read it aloud."
        },
        {
          "id": "q-ph-commercial-5",
          "quizId": "quiz-ph-commercial",
          "questionText": "Why do a web-listing licence and a three-year billboard licence carry different fees?",
          "optionA": "Billboard files use a smaller pixel count",
          "optionB": "Both cost the same because the shutter press is identical",
          "optionC": "Web images print cheaper at the lab",
          "optionD": "The licence sells reach, duration and exposure, which differ enormously between the two uses",
          "correctOption": "D",
          "subConcept": "Licensing usage terms",
          "explanation": "Fees follow the value of the use: a billboard seen by thousands daily for three years grants far more exposure than a listing page, so the licence is priced on medium, territory and duration. The capture cost is the same file; option B confuses selling pixels with selling permission.",
          "remediationTip": "Price one image twice on paper, a one-year web licence and a three-year billboard licence, and write the reason for each figure."
        }
      ]
    }
  },
  {
    "id": "shs3-ph-t3-wassce-photography-portfolio",
    "subjectId": "photography",
    "level": "SHS 3",
    "term": 3,
    "orderIndex": 5,
    "title": "WASSCE Photography: Portfolio and Practical Examination",
    "description": "Decode the practical question, develop a theme across frames, log every setting used, select and edit prints, lay out the presentation board against the clock, and appraise the work against the marking criteria.",
    "isFreeTrial": false,
    "isVip": true,
    "keyNotes": "• WASSCE Visual Arts photography is assessed across three papers: Paper 1 objective and short answers on camera, light and process; Paper 2 design and planning of a shoot; Paper 3 the practical, hours of working time ending in a presented portfolio and board.\n• Paper 3 marking looks for identifiable strands: handling of materials and equipment, creativity and interpretation of the question, technical control of exposure and focus, quality of finish, and the presentation and labelling of the board.\n• Decode the question the way examiners write it: circle the subject noun (market, water carrier, festival), the demand verb (show, record, interpret) and any qualifier (early morning, in action, at rest); your whole portfolio must answer all three.\n• Develop a theme across frames, not six accidents of one scene: an establishing wide, two or three developed medium frames, a detail close, and a closing frame that re-answers the opener; five to eight printed images is a working board range.\n• The technical log is examinable: for every printed frame record camera, lens, focal length, aperture, shutter speed, ISO, white balance and light condition in a caption strip; markers give explicit credit when the log matches the visible result.\n• Keep a working schedule inside the practical hours; a four-hour block of 240 minutes divides as 30 minutes plan and thumbnails, 90 shooting, 40 selection and edit, 60 print and mount, 20 labels and final square-up.\n• Shooting budget: 90 minutes across six frames is fifteen minutes a frame, enough for two setups and a reshoot, never enough for wandering; fix your order in the planning quarter-hour.\n• Selection is editing with a knife: project all candidate frames small, pull the ones that are soft, badly cut or duplicated in idea, and keep only frames that add a new statement to the theme; weak frames dilute strong neighbours on one board.\n• Print to the board size agreed with the supervisor and to the 300 ppi test: a 30 by 20 cm print needs 3543 by 2362 pixels; carry a labeled USB or rely on the school lab stock, and never bet the board on an untested home printer.\n• Board layout reads centre-outward: strongest three frames across the middle band, studies and contact sheet toward the edges, the scheme of work pinned at the head, title strip top-left, candidate number on every corner leaf.\n• Handling of materials is marked as behaviour: clean hands on mounts, even adhesive, square corners, no thumb shadows on glossy surfaces, board carried flat between stiff sheets.\n• Photograph conservatively for the exam: bracket the important frame twice, keep the horizon level in camera, and shoot the safety version first, the ambition second; a marked board rewards control over risk.\n• Self-appraise before submission against the criteria in writing: does each print answer the question, is each exposure controlled, is each caption true, would I hang this frame alone; cut anything failing two of four.\n• Revision plan for the last six weeks: one timed mini-portfolio a week under three hours, re-mark it against the criteria with a tutor, drill Paper 1 content (exposure maths, film speeds, f-stops, darkroom sequence) and rebuild the theme bank from Ghanaian subjects — trotro station, fishing harbour, kente loom, market at dawn.",
    "detailedNotes": {
      "overview": "This topic assembles the whole photography course into the examination it exists for: reading the Paper 3 question precisely, developing one theme across a coherent printed set, logging the settings that prove your control, selecting and editing with discipline, and laying out a mounted, labelled board inside the practical hours. It also carries the Paper 1 and Paper 2 revision habits — objective content and shoot planning — and the six-week run-in that turns scattered skill into a markable portfolio.",
      "introduction": "Approach the practical as a production schedule rather than a hope: the first quarter-hour plans, the middle ninety executes to a numbered order, the last hour selects, prints, mounts and labels without improvising. Everything the marker can see must have been decided twice — once in the viewfinder and once in selection — and written down in the caption strip.",
      "realWorldContext": "The question reads photograph a working scene at dawn. A candidate at Winneba chooses the fishing beach at the harbour mouth: thumbnails in the planning slot fix seven frames in order, the technical log is written on a card clipped to the camera strap, the establishing wide shows boats and sky, mediums show net-mending and the buyer bargaining, the close shows rope texture, and the closing frame echoes the opener with the boats leaving. The same discipline serves the school picture business after WASSCE; the board is a client pitch with the client replaced by a marker who has ninety seconds for your work.",
      "objectives": [
        "Decode a Paper 3 question into subject, demand verb and qualifier and state how the portfolio answers each",
        "Develop one theme across five to eight frames with establishing, developed, detail and closing statements",
        "Maintain a complete technical log for every printed frame and match it to the visible result",
        "Select, edit and print to a presentation board inside the practical hours on a written time plan",
        "Appraise a finished board against the published marking criteria and cut work that fails the audit"
      ],
      "sections": [
        {
          "title": "Reading the Question and Planning the Answer",
          "content": "WAEC questions are written in three parts and candidates lose direction by answering only the first. The subject noun names what to photograph, a market, a craftsperson, water; the demand verb says what to do with it, to show, record, interpret or communicate; the qualifier narrows condition, at work, at rest, in motion, early morning. Underline all three and the portfolio plan writes itself: each frame must sit inside the subject, obey the condition, and advance the verb, so an interpretation question wants mood and selection while a record question wants facts and coverage. Paper 2 asks for this as written planning: a scheme of work listing the frames in order with the location, light expectation, lens and settings for each, plus a contingency frame set for rain or a flat crowd. Use the first thirty minutes of the practical exactly this way, thumbnails sketched small, the shooting order numbered one to eight, and the print sizes noted, so that when the ninety shooting minutes start there is nothing left to decide except which of two similar frames is the better one.",
          "bulletPoints": [
            "Subject noun, demand verb, qualifier: the three parts of every practical question.",
            "Record wants coverage; interpret wants selection and mood; the board differs accordingly.",
            "Number the shooting order before the camera is raised.",
            "A contingency set of two frames survives a washed-out plan.",
            "The scheme of work is itself marked; write it as the plan you actually followed."
          ],
          "keyTakeaway": "Answer the whole sentence the examiner wrote, and plan the answer on paper before spending a minute of working time.",
          "realWorldExample": "A candidate at Keta given show water at the lagoon side opens on the wide ferry, moves to the paddler mid-stroke and closes on the jerry-can on a head: coverage, action and condition all present in three statements."
        },
        {
          "title": "Theme Development Across the Set",
          "content": "A portfolio is one argument in several pictures. Start with the establishing frame that states place and scale, the harbour with boats and horizon; move to the developed mediums that carry the human content, menders, buyers, the loader bent under the basket; insert one detail close that only photography could give, the rope fibre worn white or salt drying on skin; end with a closing frame that re-answers the opener so the set feels circular rather than trailing off. Build the set on repeated visual grammar: the same side light running across all frames, a shared horizontal line rhythm, one colour note returning twice, so variety lives inside unity instead of beside it. Five to eight printed frames is the working range for the board; below five the theme is asserted, above eight the weak tail dilutes the strong head. Creativity marks come from the choice of angle, moment and pairings, not from distortion for its own sake: a low camera at the fish market beats a filter, and the frame of the child holding the same basket as her mother is interpretation the marker can read.",
          "bulletPoints": [
            "Establish, develop, detail, close: the four moves of any theme set.",
            "One light quality and one visual rhythm across all frames buys unity.",
            "Five to eight prints; add a frame only when it says something new.",
            "The closing frame should rhyme with the opening one.",
            "Creativity is judged on choice of viewpoint and moment, not on gimmicks."
          ],
          "keyTakeaway": "The board argues a theme; each print is a sentence, and sentences must follow one another to be read.",
          "realWorldExample": "A Bonwire kente series: warp threads stretched across the establishing wide, the weaver's shuttle caught mid-pass in the medium, a close on the pattern block, and the finished cloth folded into the closing frame that mirrors the first."
        },
        {
          "title": "Technical Control and the Log That Proves It",
          "content": "Examiners trust paper evidence. For every printed frame write the camera and lens, focal length, aperture, shutter speed, ISO, white balance and the light condition in a caption strip on the board; the log must explain the photograph, so a blurred wheel spoke is paired with 1/30 s and a note of the pan, and a deep-focus market aisle with f/11 and the distance. Build the habit during the shoot by reading the meter, committing to an exposure, and noting it on a card clipped to the strap before moving on; a smartphone note app is a legal lab book if the school permits it. Technical faults are visible to markers at print size: a crooked horizon reads in the frame and in the caption honesty, soft focus at f/2.8 on a crowd explains itself only if the candidate says the aperture was wide, and clipped skies should be met with an exposure note rather than a curve that blackens the cloud. Bracketing the two or three frames that carry the theme gives the selection hour real choices instead of apologies, and every reshoot decision is another handling-of-materials mark earned.",
          "bulletPoints": [
            "Caption strip fields: camera, lens, focal length, aperture, shutter, ISO, white balance, light.",
            "Log at capture on a strap card, not from memory in the mounting hour.",
            "A pan blur or shallow crowd focus is acceptable when the log names the cause.",
            "Bracket the theme-carrying frames; selection needs living candidates.",
            "The log must match the print; a claimed f/16 landscape that shows creamy blur is marked as dishonesty or confusion."
          ],
          "keyTakeaway": "Technical control is the story the log tells about the print; write the story while shooting, not after.",
          "realWorldExample": "A Makola frame at 1/60 s, f/4, ISO 800 under a shed roof, with the caption naming the shaded light; the marker sees the deliberate compromise instead of a mysterious soft edge."
        },
        {
          "title": "Selection, Board Layout and the Practical Clock",
          "content": "The print hour is a schedule, not a mood. Across a four-hour practical of 240 working minutes, hold the plan: thirty minutes to read the question, thumbnail and number the order; ninety minutes to shoot; forty minutes to project all candidates small, pull the soft, crooked and duplicated frames, and edit only the survivors; sixty minutes to print to the agreed size at the 300 ppi test — a 30 by 20 cm print needs 3543 by 2362 pixels — trim square with a fresh blade and mount with even adhesive; twenty minutes for labels, caption strips, the title strip top-left and the final diagonal check. Fifteen minutes per planned frame inside the shooting block is the honest budget; order the shots so the light-dependent frame comes first. Lay the board for the eye it will meet: strongest three prints across the middle band where the marker settles, studies and the circled contact sheet toward the edges, scheme of work pinned at the head, candidate number on every corner leaf so an upside-down board still identifies you. Finish with the written self-appraisal against the criteria — answered the question, exposure and focus controlled, caption true, would this frame hang alone — and cut anything failing two of the four. In the six weeks before, one timed mini-portfolio a week, re-marked with a tutor, plus Paper 1 drilling on exposure maths, film speeds, f-stops and the darkroom sequence, converts nervousness into routine.",
          "bulletPoints": [
            "240 minutes split 30 plan, 90 shoot, 40 select and edit, 60 print and mount, 20 label and square up.",
            "Project small, pull hard: duplicated ideas are cut before weak luck.",
            "Mount the strongest three on the middle reading band; studies to the edges.",
            "Self-appraise against the four-point audit and cut frames failing two.",
            "Weekly timed mini-portfolios in revision build the clock into the hand."
          ],
          "keyTakeaway": "A marked board is a finished schedule: planned, shot to budget, edited without mercy, mounted square, labelled true.",
          "realWorldExample": "A candidate at Tamale whose four-hour board shows a circled contact sheet of eighteen with the eight printed frames ticked and reasoned; the selection itself reads as competence."
        }
      ],
      "commonMistakes": [
        "Answering only the subject noun: a show-a-craftsperson question met with eight pretty tool still lifes and no person at work; underline the verb and the qualifier and every frame must carry them.",
        "Deciding the print order inside the mounting hour; with sixty minutes for printing and mounting there is no room left for choosing, so the numbered shooting order is fixed in the planning half-hour.",
        "Writing the technical log from memory after mounting; half the captions then contradict the prints, and a claimed f/11 landscape showing creamy background blur reads as confusion to the marker.",
        "Leaving the soft duplicated frame on the board because it was the first good morning light; weak frames dilute strong neighbours, and the four-point audit exists to break attachments.",
        "Traveling with the board rolled inside a mat or leaning in a trotro; the creased mount and cracked print cost finish marks that took the whole sixty-minute block to earn: carry flat between stiff sheets."
      ],
      "wassceExamTips": [
        "Paper 1 rewards recall of exact pairs: f-stop sequence, shutter doubling and halving, ISO grain behaviour, developer, stop bath and fixer order; revise in lists, not paragraphs.",
        "Paper 2 planning answers gain method marks for the scheme of work format: numbered frames, location, expected light, settings and contingency, written before any picture talk.",
        "Paper 3 handling of materials is scored as behaviour: clean mounts, square joins, even adhesive and undamaged corners are observable items on the rubric.",
        "Presentation is marked centre-outward: pin the strongest prints on the middle band, the scheme of work at the head, and the candidate number on every corner leaf.",
        "A written technical log beside each print draws explicit credit when it matches the visible result, so spend two minutes per caption rather than two extra prints."
      ],
      "summaryChecklist": [
        "Can I split a practical question into subject, demand verb and qualifier and map the portfolio to all three?",
        "Can I build a five to eight frame theme with establishing, developed, detail and closing statements?",
        "Can I keep a strap-card technical log at capture and write it truthfully on every caption strip?",
        "Can I hold a 240-minute plan of 30, 90, 40, 60 and 20 and finish the board inside it?",
        "Can I audit a finished board against the marking criteria and cut any frame failing two of four checks?"
      ]
    },
    "examples": [
      {
        "id": "ex-ph-portfolio-1",
        "title": "Budgeting a Four-Hour Practical Board",
        "problem": "The Paper 3 practical gives 240 working minutes and the question reads photograph a market at work. Divide the time across planning, shooting, selection and editing, printing and mounting, and labelling, then state the shooting budget per planned frame for an eight-frame order.",
        "stepByStepSolution": [
          "Split the block: 30 minutes planning, 90 shooting, 40 selection and edit, 60 printing and mounting, 20 labelling and square-up (M1).",
          "Check the arithmetic: 30 plus 90 plus 40 plus 60 plus 20 equals 240 minutes, so the plan spends the clock exactly (A1).",
          "In the planning half-hour, underline subject, verb and qualifier, thumbnail and number eight frames, and note print sizes (M1).",
          "Divide the shooting block by the order: 90 minutes across eight frames is about 11 minutes a frame, so lock the two light-critical frames first (M1).",
          "In the selection hour, project all candidates small, cut soft, crooked and duplicated ideas, keeping the six to eight that each say something new (A1).",
          "Print at 300 ppi, trim with a fresh blade, mount by diagonals, fill caption strips from the strap card, and leave the last twenty minutes for labels and the flat packing (A1)."
        ],
        "keyTakeaway": "The board that finishes is the one budgeted before the first shutter; minutes are planned like pixels."
      },
      {
        "id": "ex-ph-portfolio-2",
        "title": "Auditing a Theme Set Against the Question",
        "problem": "A candidate printed seven frames for show a festival in motion: two crowd scenes, one close of a drum, one blurred dancer, two identical wide processions and one portrait of an elder seated at rest. Audit the set against the question and decide what stays.",
        "stepByStepSolution": [
          "Re-read the question parts: subject festival, verb show, qualifier in motion, and write the three words at the head of the audit card (M1).",
          "Test each frame against the qualifier: the seated elder at rest answers motion as a contrast but must be justified as deliberate stillness, so it stays only as the closing counter-beat (M1).",
          "Cut one of the two identical procession wides; duplication weakens rather than repeats the argument (A1).",
          "Keep the blurred dancer as the motion statement, and pair its caption honestly: 1/30 s with a pan, logged at capture, so the marker reads intent (A1).",
          "Reorder the survivors into establish, develop, detail, close: wide procession, crowd and drum mediums, drum close, the elder or the dancers exiting as the counter-beat ending (A1)."
        ],
        "keyTakeaway": "Selection is done against the words of the question: qualifier first, duplication cut, captions written from the log."
      }
    ],
    "quiz": {
      "id": "quiz-ph-portfolio",
      "topicId": "shs3-ph-t3-wassce-photography-portfolio",
      "title": "WASSCE Photography Portfolio Quiz",
      "timeLimitMinutes": 10,
      "passScorePercentage": 70,
      "questions": [
        {
          "id": "q-ph-portfolio-1",
          "quizId": "quiz-ph-portfolio",
          "questionText": "Which split of a 240-minute Paper 3 block matches the disciplined schedule taught in this topic?",
          "optionA": "60 plan, 60 shoot, 60 edit, 60 mount",
          "optionB": "120 shoot, 60 print, 60 rest",
          "optionC": "30 plan, 120 shoot, 60 print, 30 leave early",
          "optionD": "30 plan, 90 shoot, 40 select and edit, 60 print and mount, 20 label",
          "correctOption": "D",
          "subConcept": "Practical time planning",
          "explanation": "The parts sum to 240 minutes and reserve a full labelling and square-up quarter-hour that other splits drop; a board without captions loses presentation credit.",
          "remediationTip": "Re-add the five parts on paper and plan one timed mini-board at school with the same split."
        },
        {
          "id": "q-ph-portfolio-2",
          "quizId": "quiz-ph-portfolio",
          "questionText": "A question reads record the fishmarket at work. Which three parts must the candidate underline?",
          "optionA": "The subject noun, the demand verb and the qualifier of condition",
          "optionB": "The year, the centre name and the supervisor signature",
          "optionC": "The print size, the paper finish and the mount colour",
          "optionD": "The camera model, the lens and the ISO",
          "correctOption": "A",
          "subConcept": "Decoding the question",
          "explanation": "Subject, verb and qualifier define what the portfolio must answer; record wants coverage, and at work is the condition every frame must obey. Equipment and print facts come later in planning.",
          "remediationTip": "Take three past questions and colour-code noun, verb and qualifier on each before planning anything."
        },
        {
          "id": "q-ph-portfolio-3",
          "quizId": "quiz-ph-portfolio",
          "questionText": "Why must the technical log beside each print match the visible photograph?",
          "optionA": "To fill space on the board where the images are thin",
          "optionB": "Because the marker checks the claim against the print, and a mismatch reads as confusion or dishonesty costing credit",
          "optionC": "Because the camera prints the captions automatically",
          "optionD": "Because longer logs take more of the sixty-minute block",
          "correctOption": "B",
          "subConcept": "Caption honesty",
          "explanation": "Explicit credit is given when settings explain the visible result, so a claimed narrow-aperture deep-focus frame that shows creamy blur damages the technical marks instead of earning them.",
          "remediationTip": "Write caption strips from your strap card for three prints and check each claim against the frame before pinning."
        },
        {
          "id": "q-ph-portfolio-4",
          "quizId": "quiz-ph-portfolio",
          "questionText": "Where are the strongest frames placed on a marked presentation board?",
          "optionA": "Across the middle band where the marker eye settles, with studies toward the edges",
          "optionB": "All six in one straight bottom row",
          "optionC": "Randomly, since markers read the whole board equally",
          "optionD": "Only the corner leaf positions",
          "correctOption": "A",
          "subConcept": "Board layout",
          "explanation": "Boards are read centre-outward; the middle band carries the strongest prints while studies and the contact sheet support them at the edges. A bottom row or scattered placement buries the best work.",
          "remediationTip": "Dry-lay seven prints on a table, step back two metres and see where your eye lands first; copy that order onto the board."
        },
        {
          "id": "q-ph-portfolio-5",
          "quizId": "quiz-ph-portfolio",
          "questionText": "A theme set holds two near-identical wide procession frames. What is the correct selection decision?",
          "optionA": "Mount both so the marker sees the effort",
          "optionB": "Replace both with a portrait so the set varies",
          "optionC": "Cut one; duplicated statements weaken the argument, and keep the better-exposed frame",
          "optionD": "Crop the second tighter and claim it as a different idea",
          "correctOption": "C",
          "subConcept": "Editing the set",
          "explanation": "Each print must add a new statement; near-identical frames dilute the set, so the audit cuts one and keeps the technically stronger survivor. Effort is not marked, selection is.",
          "remediationTip": "Lay your last five best frames in a row and remove any two that say the same sentence."
        }
      ]
    }
  }
];
