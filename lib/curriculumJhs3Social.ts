// Ghanaian JHS 3 Social Studies Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) BECE Candidate Syllabus
// 14 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS3_SOCIAL_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs3-soc-t1-mapping-ghana-environment",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 1,
    "title": "Environment & Cartography: Maps, Grid Systems & Ghana's Physical Relief",
    "description": "Master cartographic skills: map scales (statement, representative fraction, linear), 4-figure and 6-figure grid references, conventional topographical symbols, latitudes and longitudes, time calculations, and Ghana's major relief systems (plains, plateaus, mountain ranges).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Cartography & Map Reading:\n  - Map: A scaled representation of a portion of the earth's surface on a flat sheet of paper.\n  - Marginal Information: Title, Scale, Key/Legend, North Arrow, Border.\n  - Scales:\n    1. Statement Scale: 1 cm to 1 km.\n    2. Representative Fraction (R.F.): 1:50,000 (unitless ratio where 1 cm on map = 50,000 cm on ground = 0.5 km).\n    3. Linear / Graphic Scale: A divided bar line showing ground distances directly.\n  - Grid References:\n    * Eastings: Vertical grid lines numbered from West to East (read first!).\n    * Northings: Horizontal grid lines numbered from South to North (read second!).\n    * Rule: Read 'Along the corridor (Eastings) before climbing the stairs (Northings)'.\n    * 4-Figure Grid Reference: Identifies a 1 km² grid square (e.g. 2436).\n    * 6-Figure Grid Reference: Pinpoints a specific building or junction to within 100 meters (e.g. 245368).\n• Latitudes, Longitudes & Time Calculations:\n  - Equator (0° Latitude): Divides earth into Northern and Southern Hemispheres.\n  - Prime Meridian / Greenwich Meridian (0° Longitude): Passes through Tema, Ghana.\n  - Earth rotates 360° in 24 hours => 15° longitude = 1 hour (4 minutes per 1° longitude).\n  - Locations EAST of Greenwich are ahead in time (+); locations WEST are behind in time (-).\n• Ghana's Major Physical Relief Features:\n  - Coastal Plains (Accra Plains, Keta Basin).\n  - Forest Dissected Plateau (Ashanti-Kwahu uplands, mineral-rich greenstone belts).\n  - Mountain Ranges: Akwapim-Togo Range (contains Mount Afadjato, Ghana's highest peak at 885 m).\n  - Northern Gambaga Scarp and Volta Basin.\n• Chief Examiner BECE Warning:\n  - When calculating time: Always add time for places to the East; subtract time for places to the West.\n  - Always quote Eastings FIRST before Northings in grid reference questions.",
    "examples": [
      {
        "id": "ex-jhs3soc-t1-1",
        "title": "Calculating Longitude Time Differences (BECE Section B)",
        "problem": "When the local time in Greenwich (Tema, Ghana, Longitude 0°) is 12:00 noon on Tuesday, calculate the local time in: (a) Town X situated at Longitude 45°E, (b) Town Y situated at Longitude 60°W.",
        "stepByStepSolution": [
          "Step 1 (Part a - Town X): Longitude difference = 45° - 0° = 45° [B1 mark].",
          "Step 2: Convert degrees to time: Since 15° = 1 hour, 45° / 15° = 3 hours [M1 mark].",
          "Step 3: Since Town X is EAST of Greenwich, it is ahead in time: 12:00 noon + 3 hours = 3:00 p.m. (15:00 GMT) on Tuesday [A1 mark].",
          "Step 4 (Part b - Town Y): Longitude difference = 60° - 0° = 60°. Convert to time: 60° / 15° = 4 hours [M1 mark].",
          "Step 5: Since Town Y is WEST of Greenwich, it is behind in time: 12:00 noon - 4 hours = 8:00 a.m. on Tuesday [A1 mark]."
        ],
        "keyTakeaway": "East = Ahead in time (add); West = Behind in time (subtract). Rate: 15° = 1 hour."
      },
      {
        "id": "ex-jhs3soc-t1-2",
        "title": "Converting Map Scale from Statement to R.F.",
        "problem": "Convert the statement scale '2 cm to 1 km' into a Representative Fraction (R.F.).",
        "stepByStepSolution": [
          "Step 1: Convert ground distance (1 km) into centimeters to achieve identical units: 1 km = 1,000 meters; 1 meter = 100 cm. Therefore 1 km = 1,000 × 100 = 100,000 cm [M1 mark].",
          "Step 2: Write as a ratio: 2 cm : 100,000 cm [M1 mark].",
          "Step 3: Simplify by dividing both sides by 2: 1 : 50,000 (or 1/50,000) [A1 mark]."
        ],
        "keyTakeaway": "Both sides of an R.F. must share the same units (centimeters) and the numerator must reduce to 1."
      }
    ]
  },
  {
    "id": "jhs3-soc-t2-weather-climate-vegetation",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 2,
    "title": "Weather, Climate, Climatic Zones & Natural Vegetation in Ghana",
    "description": "Distinguish weather from climate, instruments for measuring weather elements, air masses influencing West Africa (South-West Monsoons and North-East Trades / Harmattan), ITCZ, climatic zones of Ghana, and vegetation belts (Rainforest, Moist Deciduous, Guinea Savannah, Coastal Savannah).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Weather vs Climate:\n  - Weather: Atmospheric conditions of a specific locality over a short period (hours, days).\n  - Climate: The average atmospheric conditions of a large region observed and recorded over a prolonged period (typically 30 to 35 years).\n• Weather Elements & Meteorological Instruments:\n  - Temperature: Thermometer / Six's Maximum and Minimum Thermometer (°C). Kept in Stevenson Screen.\n  - Rainfall: Rain Gauge (millimeters, mm). Placed 30 cm above ground in an open area.\n  - Atmospheric Pressure: Barometer (millibars, mb).\n  - Wind Direction: Wind Vane; Wind Speed: Anemometer (km/h or knots).\n  - Humidity: Hygrometer (Wet and Dry Bulb Thermometer).\n  - Sunshine Duration: Campbell-Stokes Sunshine Recorder.\n• Air Masses Influencing Ghana:\n  1. South-West Monsoon Winds (Tropical Maritime): Blows from South Atlantic Ocean; warm, moisture-laden, brings torrential rains (May to October).\n  2. North-East Trade Winds (Tropical Continental / Harmattan): Blows from Sahara Desert; dry, dusty, hazy, cold nights, dry skin (November to February).\n  3. Inter-Tropical Convergence Zone (ITCZ): Low-pressure belt where the two opposing air masses converge, shifting north and south with the sun.\n• Ghana's Natural Vegetation Belts:\n  - Tropical Rain Forest (Wet Evergreen): High rainfall (>1750 mm), multi-layered canopy, buttress roots, lianas, epiphytes (e.g. Ankasa reserve).\n  - Moist Semi-Deciduous Forest: Moderate rainfall (1250-1750 mm), economically vital timber trees (Mahogany, Odum, Wawa, Sapele) shedding leaves in dry season.\n  - Guinea Savannah: Northern Ghana; grassland with scattered fire-resistant trees (Shea tree, Baobab, Dawadawa).\n  - Coastal Savannah: Narrow strip along Accra-Cape Coast plains; short grasses, prickly shrubs, neem trees.\n• Chief Examiner Warning:\n  - Do NOT confuse the rain gauge with the measuring cylinder. The rain gauge collects rainwater; the graduated measuring cylinder reads the depth in millimeters.",
    "examples": [
      {
        "id": "ex-jhs3soc-t2-1",
        "title": "Comparing the Two Prevailing Air Masses in Ghana (BECE Section B)",
        "problem": "(a) Name the two prevailing air masses that influence Ghana's weather. (b) Tabulate three differences between them regarding origin, moisture content, and seasonal effects.",
        "stepByStepSolution": [
          "Step 1 (Part a): (1) South-West Monsoon Winds (Tropical Maritime air mass); (2) North-East Trade Winds (Tropical Continental air mass / Harmattan) [B2 marks].",
          "Step 2 (Differences - Origin): South-West Monsoon originates over the Atlantic Ocean; North-East Trades originate over the arid Sahara Desert [B1 mark].",
          "Step 3 (Moisture & Temperature): South-West Monsoon is warm and heavily moisture-laden; North-East Trades are dry, cold at night, and dust-laden [B1 mark].",
          "Step 4 (Seasonal Effects): South-West Monsoon brings the major wet/rainy season across southern Ghana; North-East Trades bring the dry, dusty Harmattan haze from November to February [B1 mark]."
        ],
        "keyTakeaway": "South-West Monsoon brings rain from the Atlantic; North-East Trades bring dusty Harmattan dry weather from the Sahara."
      },
      {
        "id": "ex-jhs3soc-t2-2",
        "title": "Plant Adaptations in the Guinea Savannah",
        "problem": "Explain three morphological adaptations that enable trees in the Guinea Savannah zone (such as the Baobab and Shea tree) to survive prolonged seasonal droughts.",
        "stepByStepSolution": [
          "Step 1 (Thick Bark): Trees possess thick, corky bark that insulates living cambium tissues against annual dry-season bushfires [B1 mark].",
          "Step 2 (Deep Taproots): Trees develop extensive, deep-penetrating taproot systems that reach deep subterranean water tables during drought [B1 mark].",
          "Step 3 (Water Storage & Leaf Shedding): Baobabs have massive, swollen spongy trunks to store thousands of liters of water, and shed their leaves (deciduous habit) during the dry season to minimize water loss through transpiration [B1 mark]."
        ],
        "keyTakeaway": "Savannah tree adaptations focus on water conservation (leaf drop, swollen trunks) and fire resistance (thick corky bark)."
      }
    ]
  },
  {
    "id": "jhs3-soc-t3-environmental-degradation-management",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 3,
    "title": "Environmental Degradation: Deforestation, Desertification, Pollution & Conservation",
    "description": "Examine environmental degradation: types and causes of land, water, and air pollution, deforestation, bush burning, desertification, the role of the Environmental Protection Agency (EPA), and community conservation strategies.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Forms of Environmental Degradation:\n  - Deforestation: Indiscriminate clearing of forest cover without replanting, driven by logging, illegal chainsaw operations, firewood/charcoal burning, and agricultural expansion.\n  - Desertification: The progressive degradation of arid, semi-arid, and sub-humid land into barren desert landscapes, primarily affecting northern Ghana (Upper East, Upper West, Northern regions).\n  - Water Pollution: Contamination of rivers, lagoons, and groundwater by domestic sewage, industrial effluents, plastic waste, and toxic mining chemicals (mercury, cyanide from galamsey).\n  - Air Pollution: Emission of noxious gases (CO, SO₂, NO₂), particulate smoke from vehicular exhausts, open burning of refuse, and dust.\n  - Land Degradation: Soil erosion, loss of organic humus, creation of dangerous abandoned mining craters, and improper disposal of electronic waste (e.g. Agbogbloshie e-waste site).\n• Consequences of Environmental Degradation:\n  - Destruction of wildlife habitats and loss of biodiversity.\n  - Severe reduction in agricultural soil fertility and declining food security.\n  - Destruction of major water bodies (Pra, Birim, Ankobra) leading to exorbitant water treatment costs.\n  - Increased respiratory ailments (asthma, bronchitis) and water-borne epidemics (cholera).\n• Environmental Management & Protection Agencies:\n  - Environmental Protection Agency (EPA): Mandated by law to regulate, monitor, and issue environmental permits, ensuring sustainable resource use.\n  - Forestry Commission: Protects national forest reserves and wildlife sanctuaries.\n  - Water Resources Commission: Regulates and manages freshwater catchment basins.\n• Community Environmental Conservation Practices:\n  - Afforestation and Reforestation (e.g. national Green Ghana Day).\n  - Strict enforcement of traditional taboos (sacred groves, prohibition of fishing on specific days).\n  - Community-based recycling of plastic wastes and ban on single-use non-biodegradable plastics.\n  - Constructing shelterbelts in the northern savannah to halt desert encroachment.",
    "examples": [
      {
        "id": "ex-jhs3soc-t3-1",
        "title": "Analyzing the Causes and Remedies for Deforestation in Ghana (BECE Section B)",
        "problem": "(a) State four human activities that cause deforestation in Ghana. (b) Propose four practical measures to curb the menace of forest destruction.",
        "stepByStepSolution": [
          "Step 1 (Part a - Causes): (1) Uncontrolled commercial logging and illegal chainsaw lumber operations; (2) Slash-and-burn farming and shifting cultivation; (3) Indiscriminate annual bush burning by hunters and farmers; (4) Surface gold mining (galamsey) clearing forest canopies [B4 marks].",
          "Step 2 (Part b - Remedies): (1) Reforestation and aggressive tree planting campaigns like Green Ghana Day; (2) Strict enforcement of forestry laws and prosecution of illegal chainsaw operators; (3) Promoting alternative rural domestic fuels (LPG gas, biogas) to reduce demand for firewood and charcoal; (4) Creating and empowering community forest protection committees [B4 marks]."
        ],
        "keyTakeaway": "Deforestation is driven by human economic activities; effective solutions require legal enforcement alongside viable alternative livelihoods."
      },
      {
        "id": "ex-jhs3soc-t3-2",
        "title": "Role of Traditional Taboos in Environmental Conservation",
        "problem": "Explain two traditional Ghanaian customary practices that served as effective environmental protection mechanisms in pre-colonial and contemporary times.",
        "stepByStepSolution": [
          "Step 1 (Sacred Groves / Nananom Mpow): Traditional communities designated certain forest patches as sacred abodes of ancestral spirits and deities, where farming, hunting, and felling trees were strictly prohibited, preserving pristine biodiversity reserves [B2 marks].",
          "Step 2 (Taboo Days for Water Bodies): Traditional councils declared specific days (e.g. Tuesdays for sea fishing, Thursdays for river bodies) where fetching water or fishing was forbidden, giving aquatic ecosystems periodic rest to regenerate [B2 marks]."
        ],
        "keyTakeaway": "Indigenous cultural taboos functioned as ancient conservation laws protecting forests and freshwater sources."
      }
    ]
  },
  {
    "id": "jhs3-soc-t4-culture-social-change-national-identity",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 1,
    "orderIndex": 4,
    "title": "Ghanaian Culture, Social Change, Cultural Practices & National Identity",
    "description": "Explore the components of Ghanaian culture (material and non-material), agents of social change (education, technology, urbanization, globalization), harmful traditional practices vs beneficial heritage, and promoting national unity in diversity.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Culture: Definition & Components:\n  - Culture: The entire way of life of a group of people, encompassing beliefs, customs, language, arts, laws, values, and institutions.\n  - Material Culture: Tangible physical objects created by people (e.g. Kente cloth, fufu, talking drums, traditional architecture, terracotta figurines).\n  - Non-Material Culture: Intangible spiritual and intellectual creations (e.g. language, folktales, proverbs, religious beliefs, moral values, hospitality).\n• Agents of Social Change in Ghana:\n  1. Formal Education: Introduced Western literacy, science, critical inquiry, and egalitarian democratic values.\n  2. Modern Technology & Internet: Mass media, smartphones, and social media exposing youth to global cultural influences.\n  3. Urbanization: Migration from rural areas into multi-ethnic cities (Accra, Kumasi, Takoradi) eroding traditional tribal boundaries.\n  4. Christianity and Islam: Reshaping marriage, naming, funeral rites, and traditional religious practices.\n• Evaluating Cultural Practices:\n  - Beneficial Traditional Practices:\n    * Extended family solidarity and social security.\n    * Traditional festivals celebrating historic heritage and fostering development fundraising.\n    * Chieftaincy institution as custodian of peace, land, and culture.\n    * Communal labor fostering cooperative self-help projects.\n  - Harmful Traditional Practices (violating 1992 Constitution):\n    * Female Genital Mutilation (FGM).\n    * Trokosi system (vestal ritual servitude of virgin girls for ancestral sins).\n    * Witch camps (banishment of elderly women accused of witchcraft).\n    * Forced or child early marriages.\n• National Identity & Unity in Diversity:\n  - National Symbols: The National Flag (Red, Gold, Green with Black Star), National Anthem, National Pledge, Coat of Arms.\n  - Promotion of National Unity: Inter-ethnic marriages, national sports competitions, National Youth Service, posting teachers and public servants across all 16 regions of Ghana.",
    "examples": [
      {
        "id": "ex-jhs3soc-t4-1",
        "title": "Differentiating Material and Non-Material Culture (BECE Section B)",
        "problem": "(a) Define culture. (b) Distinguish between material culture and non-material culture with two Ghanaian examples for each.",
        "stepByStepSolution": [
          "Step 1 (Part a): Culture is the total way of life evolved by a society, including their knowledge, beliefs, art, morals, laws, customs, and technologies [B1 mark].",
          "Step 2 (Part b): Material culture refers to tangible, concrete, man-made physical artifacts of a society. Examples: Smock (Fugu), Kente cloth, Akan talking drums (Atumpan), traditional clay pots [B2 marks].",
          "Step 3: Non-material culture refers to the abstract, intangible, non-physical ideas, values, norms, language, and beliefs of a people. Examples: Akan proverbs, Ghanaian hospitality, funeral ceremonies, belief in ancestral spirits [B2 marks]."
        ],
        "keyTakeaway": "Material culture can be physically touched (clothing, instruments); non-material culture consists of beliefs, values, and language."
      },
      {
        "id": "ex-jhs3soc-t4-2",
        "title": "Harmful Cultural Practices and Constitutional Human Rights",
        "problem": "Identify two harmful traditional practices in Ghana and explain why they violate the Fundamental Human Rights guaranteed under the 1992 Constitution.",
        "stepByStepSolution": [
          "Step 1 (Practice 1 - Trokosi System): Young virgin girls are surrendered to traditional shrines to atone for crimes allegedly committed by their relatives. This constitutes forced ritual servitude and denial of personal liberty and education, violating Article 16 (Prohibition of Slavery and Forced Labor) [B2 marks].",
          "Step 2 (Practice 2 - Female Genital Mutilation / FGM): Partial or total excision of external female genitalia causes severe physical trauma, hemorrhage, childbirth complications, and infection, violating Article 15 (Protection of Human Dignity and Freedom from Inhuman Treatment) [B2 marks]."
        ],
        "keyTakeaway": "Any traditional cultural practice that inflicts bodily harm or strips citizens of fundamental dignity is outlawed by the 1992 Constitution."
      }
    ]
  },
  {
    "id": "jhs3-soc-t5-adolescence-reproductive-health",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 5,
    "title": "Adolescent Reproductive Health, Teenage Pregnancy & Self-Esteem",
    "description": "Understand adolescent physical, emotional, and social changes, puberty, menstrual hygiene, dangers and prevention of teenage pregnancy, sexually transmitted infections (STIs/HIV), asserting refusal skills against negative peer pressure, and building healthy self-esteem.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Adolescence & Puberty:\n  - Adolescence: The transitional developmental phase between childhood and adulthood (roughly ages 10 to 19).\n  - Puberty: The biological period of rapid sexual and physical maturation when an adolescent becomes capable of reproduction, triggered by endocrine hormones (Testosterone in boys; Estrogen/Progesterone in girls).\n  - Physical Changes in Boys: Deepening of voice, broadening of shoulders, growth of facial, underarm, and pubic hair, enlargement of testes and penis, wet dreams (nocturnal emissions).\n  - Physical Changes in Girls: Enlargement of breasts, widening of hips, growth of underarm and pubic hair, onset of menstruation (menarche).\n• Teenage Pregnancy: Causes & Devastating Consequences:\n  - Root Causes: Poverty and lack of financial support, peer pressure, lack of comprehensive adolescent sexual education, curiosity, broken homes, and predatory adults.\n  - Consequences on the Teenage Mother: School dropout, truncated educational aspirations, stigma, severe medical complications (obstetric fistula, prolonged obstructed labor, maternal mortality).\n  - Consequences on the Child: High risk of low birth weight, malnutrition, neglect, poverty, and repeating the cycle of deprivation.\n  - Consequences on Family & Society: Increased financial dependency, burden on public healthcare, loss of skilled female human capital.\n• Assertiveness & Managing Peer Pressure:\n  - Assertiveness: The confident, calm ability to state one's personal boundaries, values, and decisions clearly without being aggressive or passive.\n  - Refusal Skills: Looking straight into the eye, speaking firmly ('No, I have decided to focus on my BECE studies'), suggesting positive alternative activities, and walking away from risky compromising situations.\n• Building Self-Esteem:\n  - Self-Esteem: A person's overall subjective evaluation of their own worth and capabilities.\n  - Positive self-esteem empowers youth to resist negative peer pressure, set ambitious academic targets, and respect their bodies.",
    "examples": [
      {
        "id": "ex-jhs3soc-t5-1",
        "title": "Tackling the Menace of Teenage Pregnancy in Ghanaian Communities (BECE Section B)",
        "problem": "(a) State four social and economic factors that contribute to high rates of teenage pregnancy in rural Ghana. (b) Suggest four practical remedies that the school, parents, and community can implement to protect adolescent girls.",
        "stepByStepSolution": [
          "Step 1 (Part a - Causes): (1) Extreme household poverty forcing girls to accept gifts from men for basic sanitary needs; (2) Inadequate parental guidance and communication regarding sex education; (3) Negative peer influence and exposure to unrated pornography; (4) Lack of youth-friendly reproductive counseling services in rural clinics [B4 marks].",
          "Step 2 (Part b - Remedies): (1) Free distribution of sanitary pads in schools to keep girls in class; (2) Open parent-child communication about puberty and sex education; (3) Strict legal enforcement and prosecution of adult men who defile teenage girls; (4) Mentorship and re-admission programs that support teenage mothers to complete school [B4 marks]."
        ],
        "keyTakeaway": "Combating teenage pregnancy requires tackling household poverty, providing sanitary supplies, and empowering girls with assertive refusal skills."
      },
      {
        "id": "ex-jhs3soc-t5-2",
        "title": "Demonstrating Assertive Refusal Skills",
        "problem": "Explain three distinct steps an adolescent student should take when faced with intense peer pressure to consume illicit drugs or engage in pre-marital sexual activity.",
        "stepByStepSolution": [
          "Step 1 (Direct Verbal Refusal): Say 'NO' clearly, calmly, and firmly with confident body language without smiling or making ambiguous excuses [B1 mark].",
          "Step 2 (State the Reason): State your boundary briefly: 'No, I have sworn to protect my health and focus on my education' [B1 mark].",
          "Step 3 (Suggest Alternative / Remove Yourself): Propose an alternative wholesome activity ('Let us go play table tennis instead') or walk away immediately from the compromising environment [B1 mark]."
        ],
        "keyTakeaway": "Assertiveness protects personal integrity through clear verbal refusal and physical detachment from danger."
      }
    ]
  },
  {
    "id": "jhs3-soc-t6-citizenship-rights-responsibilities",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 6,
    "title": "Citizenship, Fundamental Human Rights & Civic Responsibilities",
    "description": "Explore legal methods of acquiring Ghanaian citizenship (birth, adoption, registration, naturalization), fundamental human rights enshrined in Chapter 5 of the 1992 Constitution, civic duties and responsibilities, and the Commission on Human Rights and Administrative Justice (CHRAJ).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Citizenship: Definition & Modes of Acquisition:\n  - Citizen: A recognized legal member of a sovereign state who owes allegiance to the nation and enjoys full constitutional protection, civil rights, and political privileges.\n  - Ways of Becoming a Citizen of Ghana (under the 1992 Constitution):\n    1. By Birth: Born in or outside Ghana where at least one parent or grandparent was a citizen of Ghana at birth.\n    2. By Adoption: A child of not more than 16 years adopted by a Ghanaian citizen.\n    3. By Registration: A foreign person married to a Ghanaian citizen who applies and satisfies legal conditions.\n    4. By Naturalization: An alien resident who has lived lawfully in Ghana for a prescribed number of years, speaks a Ghanaian language, and demonstrates good character.\n• Fundamental Human Rights & Freedoms (Chapter 5, 1992 Constitution):\n  - Inherent, inalienable entitlements of all human beings:\n    * Right to Life (Article 13).\n    * Right to Personal Liberty (Article 14).\n    * Respect for Human Dignity and Freedom from Torture (Article 15).\n    * Freedom from Slavery and Forced Labor (Article 16).\n    * Fundamental Freedoms: Freedom of speech, expression, thought, conscience, religion, assembly, association, and movement (Article 21).\n• Civic Responsibilities of Citizens (Article 41):\n  - Rights must always be balanced with corresponding duties:\n    * Defend the Constitution and the law.\n    * Pay all lawful taxes and rates promptly.\n    * Protect and preserve public property and combat corruption.\n    * Participate actively in democratic governance and voting.\n    * Respect the rights, freedoms, and legitimate interests of fellow citizens.\n    * Defend Ghana and render national service when called upon.\n• Protecting Human Rights: CHRAJ:\n  - Commission on Human Rights and Administrative Justice (CHRAJ): Independent constitutional body established under Chapter 18 to investigate human rights abuses, administrative injustice, and corruption by public officials.",
    "examples": [
      {
        "id": "ex-jhs3soc-t6-1",
        "title": "Balancing Human Rights with Civic Responsibilities (BECE Section B)",
        "problem": "(a) Explain four ways a person can become a citizen of Ghana. (b) State four civic responsibilities expected of every patriotic Ghanaian citizen under the 1992 Constitution.",
        "stepByStepSolution": [
          "Step 1 (Part a - Acquisition of Citizenship): (1) Citizenship by Birth (parent/grandparent Ghanaian); (2) Citizenship by Adoption (under 16 adopted by Ghanaian); (3) Citizenship by Registration (marriage to a Ghanaian); (4) Citizenship by Naturalization (long lawful residence, good character, fluency in Ghanaian language) [B4 marks].",
          "Step 2 (Part b - Responsibilities): (1) Faithful payment of all legitimate taxes to GRA; (2) Obeying the laws of Ghana and defending the Constitution; (3) Protecting public infrastructure from vandalism and theft; (4) Participating in civic duties such as voting in general and local elections [B4 marks]."
        ],
        "keyTakeaway": "Citizenship confers constitutional rights that must be matched with civic duties like paying taxes and obeying laws."
      },
      {
        "id": "ex-jhs3soc-t6-2",
        "title": "The Mandate of CHRAJ in Safeguarding Human Rights",
        "problem": "State three core constitutional mandates performed by the Commission on Human Rights and Administrative Justice (CHRAJ) in Ghana.",
        "stepByStepSolution": [
          "Step 1: Investigating complaints of violations of fundamental human rights and freedoms (e.g. unlawful detention, police brutality) [B1 mark].",
          "Step 2: Investigating administrative injustice, abuse of office, and unfair treatment of public servants by government agencies [B1 mark].",
          "Step 3: Investigating allegations of corruption, conflict of interest, and misappropriation of public funds under the Code of Conduct for Public Officers [B1 mark]."
        ],
        "keyTakeaway": "CHRAJ acts as Ghana's human rights ombudsman, fighting rights abuses, administrative injustice, and public corruption."
      }
    ]
  },
  {
    "id": "jhs3-soc-t7-our-constitution-democracy",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 7,
    "title": "The 1992 Constitution, Democratic Governance & Separation of Powers",
    "description": "Examine the supreme law of Ghana (1992 Constitution), democratic principles, the doctrine of Separation of Powers and Checks and Balances across Executive, Legislature, and Judiciary, the role of Parliament, and the Electoral Commission (EC).",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• The 1992 Fourth Republican Constitution:\n  - Constitution: The supreme legal and institutional framework according to which a state is governed.\n  - Supremacy of the Constitution (Article 1): Any law or presidential decree inconsistent with the Constitution is void to the extent of the inconsistency.\n  - Key Features of the 1992 Constitution: Written, supreme, entrenched clauses, multiparty democracy, executive presidency, independent judiciary, free press.\n• The Three Organs of Government (Separation of Powers):\n  - The Doctrine: Formulated by Baron de Montesquieu to prevent tyranny by dividing governmental power into three distinct arms:\n  1. The Executive:\n     * Composition: President (Head of State, Head of Government, Commander-in-Chief of Armed Forces), Vice President, Cabinet Ministers.\n     * Function: Enforce laws, maintain internal security, initiate development policies, formulate national budget.\n  2. The Legislature (Parliament):\n     * Composition: Speaker of Parliament, Members of Parliament (MPs) representing 275 single-member constituencies.\n     * Function: Make and amend laws (legislation), approve the annual national budget and taxation, scrutinize and vet executive ministerial appointments.\n  3. The Judiciary:\n     * Composition: Chief Justice, Supreme Court, Court of Appeal, High Court, Circuit/District Courts.\n     * Function: Interpret the Constitution, adjudicate civil and criminal disputes, judicial review of executive and legislative actions.\n• Checks and Balances:\n  - Mechanisms ensuring no single organ abuses power:\n    * President appoints judges with approval of Parliament.\n    * Supreme Court can declare Acts of Parliament or Executive actions unconstitutional (Judicial Review).\n    * Parliament can impeach the President for gross misconduct.\n• The Electoral Commission (EC):\n  - Independent body mandated to organize, conduct, and supervise all public elections and referenda, compile the national voters register, and demarcate electoral boundaries.",
    "examples": [
      {
        "id": "ex-jhs3soc-t7-1",
        "title": "The Three Arms of Government and Checks and Balances (BECE Section B)",
        "problem": "(a) Name the three arms of government in Ghana and state the primary function of each. (b) Explain how the Judiciary checks the powers of the Executive and Legislature.",
        "stepByStepSolution": [
          "Step 1 (Part a): (1) The Executive - Enforces laws and executes national policies; (2) The Legislature (Parliament) - Makes laws and approves national expenditure; (3) The Judiciary - Interprets the laws and administers justice [B3 marks].",
          "Step 2 (Part b - Judicial Checks): The Judiciary exercises the power of Judicial Review through the Supreme Court [B1 mark].",
          "Step 3: If Parliament passes a law or the President issues an executive order that violates the 1992 Constitution, the Supreme Court can declare that law or action NULL AND VOID and of no legal effect [B2 marks]."
        ],
        "keyTakeaway": "Separation of powers divides functions; checks and balances ensure no single arm becomes tyrannical."
      },
      {
        "id": "ex-jhs3soc-t7-2",
        "title": "Functions of the Electoral Commission of Ghana",
        "problem": "State three constitutional functions of the Electoral Commission (EC) in promoting democratic stability in Ghana.",
        "stepByStepSolution": [
          "Step 1: Compiling, updating, and maintaining the national biometric voters register [B1 mark].",
          "Step 2: Demarcating constituency and electoral boundaries for parliamentary and local government elections [B1 mark].",
          "Step 3: Organizing, conducting, and declaring official results of Presidential, Parliamentary, and District Assembly elections and national referenda [B1 mark]."
        ],
        "keyTakeaway": "The EC guarantees free, fair, and transparent democratic elections, the bedrock of peace in the Fourth Republic."
      }
    ]
  },
  {
    "id": "jhs3-soc-t8-peace-building-conflict-resolution",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 2,
    "orderIndex": 8,
    "title": "Peace Building, Conflict Management & National Integration",
    "description": "Understand the causes of conflict (chieftaincy disputes, land litigations, ethnic rivalries, political intolerance), peaceful conflict resolution mechanisms (negotiation, mediation, arbitration), the National Peace Council, and national cohesion.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Nature & Causes of Conflict in Ghana:\n  - Conflict: A state of disagreement, friction, or overt hostility between two or more parties holding opposing interests, beliefs, or territorial claims.\n  - Major Causes of Conflict in Ghana:\n    1. Chieftaincy Disputes: Contested succession to stools/skins, improper enstoolment/enskinment procedures, and boundary disputes (e.g. historic Dagbon, Bawku disputes).\n    2. Land Litigations: Indiscriminate double-selling of lands by unscrupulous chiefs/landguards, absence of computerized land titles.\n    3. Ethnic Rivalries: Historical grievances and disputes over grazing lands between local farmers and nomadic Fulani herdsmen.\n    4. Political Intolerance: Partisan hostility, inflammatory speech, and deployment of political vigilante thugs during elections.\n• Consequences of Violent Conflict:\n  - Loss of precious human lives and displacement of innocent women and children into refugee camps.\n  - Destruction of social infrastructure (schools, clinics, telecommunication masts).\n  - Imposition of curfews disrupting farming, commercial markets, and school schedules.\n  - Diverting scarce national funds into military and police peacekeeping instead of development projects.\n• Peaceful Conflict Resolution Mechanisms:\n  1. Negotiation: Direct dialogue between disputing parties to reach a mutually satisfactory compromise without third-party intervention.\n  2. Mediation: An impartial third party (mediator) assists disputants in finding common ground, but does not impose a binding decision (e.g. traditional council, clergy).\n  3. Arbitration / Litigation: Submitting the dispute to an authorized legal body (court of law or formal tribunal) whose final ruling is legally binding on all parties.\n• The National Peace Council (NPC):\n  - Non-partisan state institution established to facilitate conflict prevention, mediation, and sustainable peace-building through dialogue across Ghana.",
    "examples": [
      {
        "id": "ex-jhs3soc-t8-1",
        "title": "Causes and Consequences of Chieftaincy Conflicts (BECE Section B)",
        "problem": "(a) Identify three common root causes of chieftaincy and ethnic disputes in Ghanaian communities. (b) Explain three socio-economic effects of these conflicts on national development.",
        "stepByStepSolution": [
          "Step 1 (Part a - Causes): (1) Unclear or contested royal lineage claims and multiple factions claiming the right to enstool/enskin; (2) Disregard for established customary procedures and corruption among kingmakers; (3) Greed over royalties from mineral-rich lands or timber concessions [B3 marks].",
          "Step 2 (Part b - Effects): (1) Loss of innocent human lives and severe destruction of schools, markets, and hospitals; (2) Imposition of curfews that paralyze farming, businesses, and economic livelihood; (3) Massive government expenditure on deploying security taskforces (police and military) that diverts funds away from health and roads [B3 marks]."
        ],
        "keyTakeaway": "Conflicts destroy lives and squander public development resources; peace is a prerequisite for economic growth."
      },
      {
        "id": "ex-jhs3soc-t8-2",
        "title": "Mediation vs Arbitration in Conflict Resolution",
        "problem": "Distinguish clearly between mediation and arbitration as methods of conflict management.",
        "stepByStepSolution": [
          "Step 1: Mediation involves an independent, neutral third party who facilitates respectful dialogue to help disputants reach a voluntary, agreeable solution, without imposing a verdict [B1 mark].",
          "Step 2: Arbitration involves presenting the case before an official legal arbitrator or judicial panel who examines evidence and issues a formal, legally BINDING judgment that both parties are compelled by law to obey [B2 marks]."
        ],
        "keyTakeaway": "Mediation facilitates voluntary agreement; arbitration delivers a legally binding verdict."
      }
    ]
  },
  {
    "id": "jhs3-soc-t9-population-growth-development",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 9,
    "title": "Population Growth, Census, Migration & Socio-Economic Development",
    "description": "Analyze population dynamics: birth rates, death rates, national census exercises conducted by the Ghana Statistical Service (GSS), population pyramids, rural-urban migration, and impacts on social infrastructure and national planning.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Population Concepts & Demography:\n  - Population: The total number of people residing in a geographically demarcated area at a specific point in time.\n  - Determinants of Population Growth:\n    1. Birth Rate (Fertility): Number of live births per 1,000 people annually.\n    2. Death Rate (Mortality): Number of deaths per 1,000 people annually.\n    3. Migration: Influx (Immigration) and departure (Emigration) of people.\n    * Natural Increase = Birth Rate - Death Rate.\n• National Population and Housing Census:\n  - Complete official counting of all persons and residential structures in a country at regular intervals (typically every 10 years).\n  - Conducted in Ghana by the Ghana Statistical Service (GSS). (Most recent census: 2021 recorded ~30.8 million citizens).\n  - Importance of Census:\n    * Enables accurate government planning for schools, hospitals, water, electricity, and roads.\n    * Informs fair demarcation of parliamentary constituencies.\n    * Guides equitable budget allocation to District Assemblies.\n• Ghana's Population Structure (Youthful Population):\n  - Ghana has a broad-based population pyramid: over 35% of the population is below 15 years old.\n  - High Dependency Ratio: A small working labor force must support a very large population of dependent children and the aged.\n  - Pressures: High demand for public spending on education (Free SHS), pediatric healthcare, and youth job creation.\n• Rural-Urban Migration:\n  - Movement of people (especially youth) from villages to major cities (Accra, Kumasi, Sekondi-Takoradi).\n  - Push Factors: Rural poverty, lack of electricity/potable water, seasonal agricultural unemployment, poor schools.\n  - Pull Factors: Perceived white-collar jobs, bright city lights, modern amenities, tertiary universities.\n  - Urban Challenges Created: Overcrowded slums (e.g. Old Fadama / Sodom and Gomorrah), street children, traffic congestion, pressure on drainage, rising crime.",
    "examples": [
      {
        "id": "ex-jhs3soc-t9-1",
        "title": "Importance of the National Population and Housing Census (BECE Section B)",
        "problem": "Explain four reasons why the Government of Ghana through the Ghana Statistical Service conducts a national population census every ten years.",
        "stepByStepSolution": [
          "Step 1 (Infrastructural Planning): Accurately forecasting future national needs for classroom blocks, hospitals, potable water systems, and roads based on demographic shifts [B1 mark].",
          "Step 2 (Economic Budgeting): Enabling the Ministry of Finance to distribute the District Assemblies Common Fund (DACF) equitably according to population density [B1 mark].",
          "Step 3 (Electoral Representation): Providing baseline data for the Electoral Commission to demarcate new constituencies and polling stations fairly [B1 mark].",
          "Step 4 (Employment Planning): Identifying the size and skill distribution of the labor force to design youth employment programs [B1 mark]."
        ],
        "keyTakeaway": "Census data is the scientific bedrock of all national economic, educational, and political planning."
      },
      {
        "id": "ex-jhs3soc-t9-2",
        "title": "Curtailing Rural-Urban Migration in Ghana",
        "problem": "Propose three pragmatic measures the Ghanaian government can implement to curb the rapid influx of rural youth into Accra and Kumasi.",
        "stepByStepSolution": [
          "Step 1 (Rural Industrialization): Establishing agro-processing factories in rural districts (e.g. One District One Factory / 1D1F) to create steady local manufacturing jobs [B1 mark].",
          "Step 2 (Provision of Social Amenities): Electrifying rural communities and installing clean pipe-borne water, modern health centers, and vocational training institutes [B1 mark].",
          "Step 3 (Agricultural Subsidies & Modernization): Providing subsidized tractor mechanization, hybrid seeds, and irrigation dams (One Village One Dam) to make farming lucrative and attractive to youth [B1 mark]."
        ],
        "keyTakeaway": "Rural industrialization and basic infrastructure eliminate the push factors driving youth migration to urban slums."
      }
    ]
  },
  {
    "id": "jhs3-soc-t10-sustainable-economic-growth",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 10,
    "title": "Ghana's Economy: Primary, Secondary & Tertiary Sectors and Sustainable Growth",
    "description": "Explore the structure of the Ghanaian economy: Primary sector (agriculture, mining), Secondary sector (manufacturing, construction), Tertiary sector (banking, ICT, tourism), challenges facing domestic industry, and pathways to sustainable industrial transformation.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• The Three Economic Sectors of Ghana:\n  1. Primary Sector (Extraction of Raw Materials):\n     * Agriculture, forestry, fishing, cocoa cultivation, gold, bauxite, and crude oil extraction.\n     * Characteristics: Employs over 38% of the labor force; historically constitutes the bulk of Ghana's foreign exchange earnings.\n     * Weakness: Highly vulnerable to global commodity price crashes and erratic seasonal rainfall.\n  2. Secondary Sector (Processing & Manufacturing):\n     * Converting primary commodities into finished goods: food processing, oil refining, cement production, textiles, aluminium smelting (Valco).\n     * Challenge: High cost of electricity, high import taxes on machinery, stiff competition from cheap imported Asian products.\n  3. Tertiary Sector (Services):\n     * Banking and financial services, telecommunications, insurance, transportation, hospitality, healthcare, and education.\n     * Current status: Fastest-growing sector, contributing over 45% of Ghana's Gross Domestic Product (GDP).\n• Challenges Hampering Ghanaian Industrialization:\n  - Heavy reliance on the export of raw, unprocessed primary commodities (cocoa beans, raw gold, unrefined crude oil) rather than high-value finished products.\n  - Inadequate capital and exorbitant bank lending interest rates for local entrepreneurs.\n  - Erratic electricity and power fluctuations ('dumsor') increasing manufacturing costs.\n  - Preference among Ghanaian consumers for foreign imported goods over domestic products.\n• Strategies for Sustainable Economic Growth:\n  - Value Addition: Agro-processing raw cocoa into finished chocolate, bauxite into refined aluminium, and crude oil into petrochemicals.\n  - Promoting 'Buy Ghana, Made in Ghana' campaigns to stimulate domestic demand.\n  - Investing in TVET and STEM education to equip youth with industrial engineering competencies.\n  - Developing reliable renewable energy to power factory production.",
    "examples": [
      {
        "id": "ex-jhs3soc-t10-1",
        "title": "Value Addition as an Engine for Economic Transformation (BECE Section B)",
        "problem": "(a) What is meant by 'Value Addition' in economic production? (b) Explain three economic benefits Ghana stands to gain by processing all raw cocoa beans into chocolate and cocoa butter domestically rather than exporting raw beans.",
        "stepByStepSolution": [
          "Step 1 (Part a): Value Addition refers to the industrial processing and manufacturing of raw primary commodities into refined, higher-value finished or semi-finished products before sale [B1 mark].",
          "Step 2 (Higher Foreign Exchange): Processed chocolate and cocoa cosmetics command prices up to ten times higher on global retail markets than unprocessed raw beans, multiplying national export revenues [B1 mark].",
          "Step 3 (Massive Employment Creation): Establishing domestic processing factories, packaging plants, and logistics firms creates thousands of technical, managerial, and marketing jobs for Ghanaian youth [B1 mark].",
          "Step 4 (Industrial Linkages): Local factories stimulate domestic dairy, sugar, and packaging industries, building an integrated manufacturing economy [B1 mark]."
        ],
        "keyTakeaway": "Exporting raw materials exports jobs and wealth; domestic industrial value addition retains wealth and builds employment."
      },
      {
        "id": "ex-jhs3soc-t10-2",
        "title": "Comparing the Primary and Secondary Sectors",
        "problem": "Give two differences between the primary economic sector and the secondary economic sector in Ghana.",
        "stepByStepSolution": [
          "Step 1 (Nature of Activity): The primary sector involves the direct harvesting and extraction of natural resources from the earth (e.g. cocoa farming, gold mining), whereas the secondary sector transforms those raw materials into manufactured finished goods (e.g. cocoa processing, auto-assembly) [B2 marks].",
          "Step 2 (Technology & Capital): The primary sector in Ghana is predominantly labor-intensive with simple tools, whereas the secondary sector requires advanced machinery, high capital investment, and specialized technical expertise [B2 marks]."
        ],
        "keyTakeaway": "Primary extracts raw materials; secondary manufactures finished products."
      }
    ]
  },
  {
    "id": "jhs3-soc-t11-financial-security-pension",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 11,
    "title": "Financial Literacy, Resource Mobilization, Savings & Future Security (SSNIT)",
    "description": "Build financial literacy: budgeting, distinguishing needs from wants, commercial banking products, treasury bills, investing, insurance policies, and the Social Security and National Insurance Trust (SSNIT) 3-tier pension scheme.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Fundamentals of Financial Literacy:\n  - Financial Literacy: The possession of skills and knowledge that enable an individual to make informed, effective financial management decisions.\n  - Needs vs Wants:\n    * Needs: Essentials indispensable for survival (food, clean water, shelter, basic clothing, healthcare, education).\n    * Wants: Non-essential desires that improve comfort but can be lived without (luxury designer clothes, expensive smartphones, entertainment).\n  - Personal Budgeting: A structured financial plan comparing estimated income against planned expenditure over a specified period. Rule: Spend less than you earn; save before spending.\n• Avenues for Savings & Investment in Ghana:\n  - Commercial Banks: Savings accounts, current accounts, fixed deposit accounts.\n  - Government Treasury Bills (T-Bills): Safe, government-backed short-term debt instruments yielding guaranteed interest (91-day, 182-day, 364-day bills).\n  - Mutual Funds & Stocks: Investing in shares of listed companies on the Ghana Stock Exchange (GSE).\n  - Insurance: Transferring the risk of catastrophic loss (fire, health, auto accidents, life assurance) to an insurance company in exchange for monthly premium payments.\n• Social Security & Pensions: SSNIT:\n  - Social Security and National Insurance Trust (SSNIT): Statutory body established to administer Ghana's National Basic Pension Scheme.\n  - The 3-Tier Pension Scheme:\n    * Tier 1: Mandatory basic national social security scheme managed by SSNIT (pays monthly pensions to retired workers).\n    * Tier 2: Mandatory occupational pension scheme managed by private fund trustees (pays a lump-sum upon retirement).\n    * Tier 3: Voluntary personal provident fund providing supplementary tax-exempt retirement income.\n  - Importance of SSNIT: Protects workers from destitution and poverty during old age, permanent disability, or provides survivor benefits to families upon death of the breadwinner.",
    "examples": [
      {
        "id": "ex-jhs3soc-t11-1",
        "title": "The Importance of SSNIT and Pension Planning (BECE Section B)",
        "problem": "(a) What is SSNIT? (b) Explain three reasons why every formal and informal sector worker in Ghana should contribute regularly to the SSNIT pension scheme.",
        "stepByStepSolution": [
          "Step 1 (Part a): SSNIT stands for the Social Security and National Insurance Trust, the statutory institution established to manage Ghana's national social security and pension scheme [B1 mark].",
          "Step 2 (Part b - Guaranteed Retirement Income): SSNIT guarantees a reliable, inflation-adjusted monthly pension salary to workers after retiring at age 60, preventing old-age poverty [B1 mark].",
          "Step 3 (Disability Coverage): If a contributing worker suffers permanent physical or mental disability rendering them incapable of working before age 60, SSNIT provides a disability pension [B1 mark].",
          "Step 4 (Survivor's Benefit): In the unfortunate event of a worker's death, SSNIT pays a lump-sum financial package to their nominated dependants and surviving children [B1 mark]."
        ],
        "keyTakeaway": "SSNIT safeguards workers and their families against poverty during retirement, disability, and death."
      },
      {
        "id": "ex-jhs3soc-t11-2",
        "title": "Distinguishing Needs from Wants in Budgeting",
        "problem": "Explain why differentiating between needs and wants is the golden rule of prudent financial management for Ghanaian families.",
        "stepByStepSolution": [
          "Step 1: Needs are absolute biological and social survival essentials (balanced food, medicine, rent, school fees), whereas wants are personal preferences that can be delayed [B1 mark].",
          "Step 2: Failing to prioritize needs leads families to exhaust income on impulse buying and luxury goods, forcing them to borrow at exorbitant interest rates from loan sharks for basic necessities [B1 mark].",
          "Step 3: Allocating income to essential needs first allows families to set aside an emergency savings buffer (at least 10–20% of earnings) for future investments [B1 mark]."
        ],
        "keyTakeaway": "Satisfy basic needs first; save consistently; indulge in discretionary wants only with disposable surplus."
      }
    ]
  },
  {
    "id": "jhs3-soc-t12-entrepreneurship-national-development",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 12,
    "title": "Entrepreneurship, Work Ethics & Small-Medium Enterprise (SME) Development",
    "description": "Explore entrepreneurship as a catalyst for economic growth: characteristics of successful entrepreneurs, business opportunity identification, business planning, work ethics, and the role of SMEs in reducing youth unemployment.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Entrepreneurship: Concepts & Characteristics:\n  - Entrepreneur: An individual who identifies a business opportunity, takes calculated financial risks, mobilizes capital, labor, and land, and manages an enterprise to produce goods or services for profit.\n  - Core Attributes of Successful Entrepreneurs:\n    1. Innovation and Creativity: Developing new products or finding superior ways of delivering existing services.\n    2. Calculated Risk-Taking: Investing personal savings into unproven ventures after careful feasibility study.\n    3. Resilience & Persistence: Viewing commercial setbacks and failures as learning opportunities rather than reasons to quit.\n    4. Vision & Goal Orientation: Clear long-term strategy for market growth.\n    5. Integrity & Discipline: Maintaining transparent financial accounting and punctuality.\n• Steps in Establishing a Small Enterprise:\n  1. Identifying a Market Need / Opportunity.\n  2. Conducting a Market Feasibility Survey.\n  3. Drafting a Comprehensive Business Plan (Marketing, Financial, Operational plans).\n  4. Mobilizing Startup Capital (personal savings, family loans, microfinance, venture grants).\n  5. Business Registration with the Registrar-General's Department (now Office of the Registrar of Companies).\n• Role of Small and Medium Enterprises (SMEs) in Ghana:\n  - Account for over 70% of Ghana's Gross Domestic Product (GDP) and represent roughly 85% of total manufacturing employment.\n  - Foster decentralized regional development outside Accra.\n  - Utilize local raw materials and provide vocational apprentice training for youth.\n• Essential Positive Work Ethics:\n  - Punctuality and reliable attendance.\n  - Honesty, transparency, and accountability in financial transactions.\n  - Dedication, diligence, and pride in excellent craftsmanship.\n  - Respect for customer feedback and healthy teamwork.",
    "examples": [
      {
        "id": "ex-jhs3soc-t12-1",
        "title": "The Role of SMEs in Alleviating Youth Unemployment (BECE Section B)",
        "problem": "(a) What is an entrepreneur? (b) Explain four ways small and medium-scale enterprises (SMEs) contribute to national development in Ghana.",
        "stepByStepSolution": [
          "Step 1 (Part a): An entrepreneur is a person who identifies a viable commercial opportunity, organizes resources (land, labor, capital), takes financial risks, and establishes an enterprise to earn profit [B1 mark].",
          "Step 2 (Employment Generation): SMEs provide jobs to millions of school leavers, artisanal tradesmen (tailors, carpenters, hairdressers), and university graduates [B1 mark].",
          "Step 3 (Utilization of Local Raw Materials): Small businesses process indigenous crops (cassava into gari, tomatoes into purée), reducing agricultural waste and import dependency [B1 mark].",
          "Step 4 (Revenue Mobilization for State): SMEs pay corporate taxes, market tolls, and operating permits to District Assemblies and GRA, financing public schools and clinics [B1 mark]."
        ],
        "keyTakeaway": "SMEs form the backbone of Ghana's economy by creating mass employment and transforming indigenous resources."
      },
      {
        "id": "ex-jhs3soc-t12-2",
        "title": "Overcoming Major Barriers to Entrepreneurship in Ghana",
        "problem": "Identify two major challenges confronting young entrepreneurs in Ghana and explain how the government can help overcome them.",
        "stepByStepSolution": [
          "Step 1 (Challenge 1 - Lack of Startup Capital): Young innovators cannot access bank credit due to impossible collateral requirements and high interest rates (>30%). Government remedy: Expanding low-interest startup grant schemes like the National Entrepreneurship and Innovation Programme (NEIP) [B2 marks].",
          "Step 2 (Challenge 2 - High Regulatory & Utility Costs): Costly business permits and expensive electricity strangle nascent firms. Government remedy: Introducing tax holidays for startups during their first three years and establishing dedicated SME industrial parks with subsidized power [B2 marks]."
        ],
        "keyTakeaway": "Accessible startup capital and supportive tax policies are essential to unleash youth entrepreneurial potential."
      }
    ]
  },
  {
    "id": "jhs3-soc-t13-ghana-foreign-policy-international",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 13,
    "title": "Ghana's Foreign Policy & International Cooperation",
    "description": "Explore Ghana's foreign policy principles, pan-Africanism, non-alignment, multilateral cooperation, and contributions to international bodies: United Nations (UN), African Union (AU), Economic Community of West African States (ECOWAS), and the Commonwealth.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Principles of Ghana's Foreign Policy:\n  - Foreign Policy: A government's diplomatic strategy in dealing with other sovereign nations and international institutions to safeguard national interests.\n  - Guiding Principles under the 1992 Constitution (Article 40):\n    1. Promotion of Pan-African unity and total political/economic liberation of the African continent.\n    2. Respect for the sovereignty and territorial integrity of all nations.\n    3. Non-interference in the internal affairs of other sovereign states.\n    4. Peaceful settlement of international disputes through negotiation and diplomacy.\n    5. Adherence to the principles of the United Nations Charter and Non-Aligned Movement.\n• Major International Organizations Ghana Belongs To:\n  1. Economic Community of West African States (ECOWAS):\n     * Formed in 1975 in Lagos; headquarters in Abuja.\n     * Objective: Foster economic integration, free movement of persons, goods, and services across West Africa, and regional security (ECOMOG).\n     * Ghana's Role: Founding member; host of historic regional peace accords (e.g. Liberian and Ivorian peace talks).\n  2. The African Union (AU) (formerly OAU):\n     * Founded in 1963 in Addis Ababa, Ethiopia, under visionary leadership of Osagyefo Dr. Kwame Nkrumah; transformed into AU in 2002.\n     * Objective: Accelerate continental unity, eradicate poverty, defend African sovereignty, and promote African Continental Free Trade Area (AfCFTA - Secretariat hosted in Accra, Ghana!).\n  3. The United Nations (UN):\n     * Global body formed in 1945 to maintain international peace and security.\n     * Ghana's Outstanding Contribution: Leading contributor of military and police personnel to UN Peacekeeping Missions worldwide (Congo, Lebanon, Liberia, Rwanda, South Sudan).\n     * Illustrious Ghanaian Leadership: Busumuru Kofi Annan served as the 7th Secretary-General of the United Nations (1997–2006) and won the Nobel Peace Prize.\n  4. The Commonwealth:\n     * Voluntary association of sovereign nations formerly part of the British Empire, promoting democratic governance, human rights, and educational exchanges.",
    "examples": [
      {
        "id": "ex-jhs3soc-t13-1",
        "title": "Ghana's Global Peacekeeping Legacy in the United Nations (BECE Section B)",
        "problem": "Explain three distinct ways Ghana has contributed to the promotion of global peace and security as a member of the United Nations (UN).",
        "stepByStepSolution": [
          "Step 1 (Troop Contributions to Peacekeeping): Ghana is consistently among the top global contributors of military and police personnel to UN peacekeeping operations in conflict zones (e.g. UNIFIL in Lebanon, UNMISS in South Sudan) [B1 mark].",
          "Step 2 (Diplomatic Leadership): Illustrious Ghanaian diplomat Busumuru Kofi Annan served two terms as UN Secretary-General, championing the Millennium Development Goals and international humanitarian interventions [B1 mark].",
          "Step 3 (Host of Regional Peace Accords): Ghana has repeatedly hosted and mediated ceasefires and peace accords that ended brutal civil conflicts in Liberia, Sierra Leone, and Côte d'Ivoire [B1 mark]."
        ],
        "keyTakeaway": "Ghana enjoys stellar international prestige as a peaceful democratic mediator and premier UN troop-contributing nation."
      },
      {
        "id": "ex-jhs3soc-t13-2",
        "title": "Benefits of Ghana's Membership in ECOWAS",
        "problem": "State three tangible economic benefits Ghana derives from being an active member of ECOWAS.",
        "stepByStepSolution": [
          "Step 1 (Free Movement of Citizens): The ECOWAS Trade Liberalization Scheme and Protocol on Free Movement allows Ghanaian traders and professionals to travel, reside, and establish businesses across 15 West African nations without visa restrictions [B1 mark].",
          "Step 2 (Expanded Export Market): Ghanaian manufacturing companies gain tariff-free access to a massive regional market of over 400 million consumers [B1 mark].",
          "Step 3 (Regional Security Protection): Collective regional security operations through ECOWAS prevent terrorist incursions from the Sahel and deter military coups in neighboring states [B1 mark]."
        ],
        "keyTakeaway": "ECOWAS gives Ghana access to a 400-million regional consumer market and shared security defense."
      }
    ]
  },
  {
    "id": "jhs3-soc-t14-science-technology-modernization",
    "subjectId": "social",
    "level": "JHS 3",
    "term": 3,
    "orderIndex": 14,
    "title": "Science, Technology & Digital Modernization in Ghana's Transformation",
    "description": "Analyze the transformative role of science, technology, and digitalization in modernizing Ghana: e-governance (Ghana Card, Digital Address System, Mobile Money Interoperability), healthcare telemedicine, mechanized agriculture, and combating cyber-crime.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Jm3Vw6sE2fI",
    "youtubeId": "Jm3Vw6sE2fI",
    "keyNotes": "• Science & Technology: Modernization Catalysts:\n  - Science: The systematic study of the physical and natural world through observation, experimentation, and evidence.\n  - Technology: The practical application of scientific knowledge to solve human problems, automate labor, and improve quality of life.\n• Key Digital Transformation Milestones in Ghana:\n  1. Mobile Money Interoperability (MMI): Financial technology breakthrough allowing seamless instant money transfers between different telecommunication networks (MTN, Telecel, AT) and traditional commercial bank accounts. Boosted national financial inclusion from under 30% to over 80%.\n  2. Ghana Card (National Identification Authority - NIA): Unique biometric identification database linking tax identification (TIN), passports, driver's licenses, SIM cards, and social security.\n  3. Digital Property Addressing System (GhanaPost GPS): Digital division of Ghana's landmass into 5m x 5m squares with unique digital addresses, facilitating emergency response, postal delivery, and commerce.\n  4. Medical Drone Delivery Services (Zipline): Autonomous drone technology delivering urgent blood supplies, antivenoms, and life-saving vaccines to remote, hard-to-reach rural health clinics within 30 minutes.\n• Science & Technology in Key Sectors:\n  - Agriculture: Drone crop spraying, GPS soil mapping, mechanized harvesters, solar-powered irrigation pumps, and drought-resistant hybrid seeds developed by the Council for Scientific and Industrial Research (CSIR).\n  - Education: Virtual online learning platforms (e.g. AcademicPrep), smart classrooms, and digitized WAEC BECE/WASSCE registration and result checking.\n  - Healthcare: Telemedicine, electronic health records, CT scanners, and MRI diagnostic imaging.\n• Technological Hazards & Mitigations:\n  - Cybercrime ('Sakawa' fraud, mobile money phishing, identity theft).\n  - Electronic waste accumulation (e.g. burning computers releasing toxic lead and dioxins).\n  - Social isolation and internet addiction among students.\n  - Cybersecurity Act of 2020 and the Cyber Security Authority (CSA) established to police digital fraud and protect national cyber infrastructure.",
    "examples": [
      {
        "id": "ex-jhs3soc-t14-1",
        "title": "Digital Modernization and Financial Inclusion in Ghana (BECE Section B)",
        "problem": "(a) What is Mobile Money Interoperability? (b) Explain three socio-economic benefits Ghana has achieved through the implementation of digital modernization policies.",
        "stepByStepSolution": [
          "Step 1 (Part a): Mobile Money Interoperability is a financial technology system that enables seamless, direct electronic fund transfers across different mobile network operators and traditional commercial banks [B1 mark].",
          "Step 2 (Part b - Financial Inclusion): Millions of previously unbanked rural farmers, traders, and small artisans can now save, borrow, and transact money securely without traveling to urban bank branches [B1 mark].",
          "Step 3 (Emergency Healthcare Delivery): Zipline medical drones deliver blood products and emergency vaccines to rural clinics in minutes, saving thousands of lives during snakebites and complicated childbirths [B1 mark].",
          "Step 4 (Government Revenue & Elimination of Corruption): Digitized payment platforms (e.g. Ghana.gov) allow citizens to pay passport, port, and hospital fees online, eliminating fraudulent middlemen and boosting state revenue [B1 mark]."
        ],
        "keyTakeaway": "Digital technologies eliminate bureaucratic corruption, expand financial access, and save lives in emergency healthcare."
      },
      {
        "id": "ex-jhs3soc-t14-2",
        "title": "Tackling Cybercrime and Protecting Digital Infrastructure",
        "problem": "State two negative impacts of cybercrime on Ghana's international image and explain two measures to combat it.",
        "stepByStepSolution": [
          "Step 1 (Negative Impacts): (1) International credit card companies and e-commerce platforms blacklist Ghanaian IP addresses, hindering legitimate online businesses; (2) Loss of millions of Ghana Cedis by innocent citizens through mobile money phishing scams [B2 marks].",
          "Step 2 (Remedies): (1) Aggressive public digital literacy education teaching citizens never to share their mobile money PIN or One-Time Passwords (OTP); (2) Empowering the Cyber Security Authority (CSA) and Police CID Cyber Unit to track and prosecute cyber fraudsters [B2 marks]."
        ],
        "keyTakeaway": "Combating cybercrime requires personal vigilance (protecting PINs) combined with stringent law enforcement."
      }
    ]
  }
];
