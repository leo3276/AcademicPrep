// Ghanaian JHS 2 French Language Curriculum Topics
// Based on NaCCA / GES Common Core Programme (CCP) Curriculum
// 12 Comprehensive Topics across Terms 1, 2, and 3

import { CurriculumTopic } from './types';

export const JHS2_FRENCH_TOPICS: CurriculumTopic[] = [
  {
    "id": "jhs2-fre-t1-saluer-se-presenter",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 1,
    "title": "Les Salutations et Présentations Approfondies",
    "description": "Saluer poliment selon le contexte formel et informel, se présenter en détail (nom, âge, nationalité, profession) et présenter une tierce personne.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=hd0_GZHHMrE",
    "youtubeId": "hd0_GZHHMrE",
    "keyNotes": "• Salutations Formelles et Informelles:\n  - Formel (adultes, professeurs, étrangers): \"Bonjour Monsieur/Madame\", \"Comment allez-vous ?\", \"Je vous présente...\".\n  - Informel (camarades, amis): \"Salut !\", \"Coucou !\", \"Ça va ?\", \"Comment vas-tu ?\".\n• Se Présenter en Détail:\n  - Identité: \"Je m'appelle Kwame Mensah\", \"Mon prénom est Kwame et mon nom de famille est Mensah.\"\n  - Âge: \"J'ai treize ans.\" (Attention: utiliser le verbe avoir, pas être !).\n  - Nationalité: \"Je suis ghanéen\" (masc.) / \"Je suis ghanéenne\" (fém.).\n  - Lieu de résidence: \"J'habite à Kumasi, au Ghana.\"\n• Présenter Quelqu'un d'Autre:\n  - \"Voici mon ami Koffi, il est togolais.\" / \"Je vous présente Mademoiselle Mansa.\"\n• Prise de Congé:\n  - \"Au revoir\", \"À tout à l'heure\", \"À demain\", \"Bonne journée\", \"Bonne nuit\".",
    "examples": [
      {
        "id": "ex-jhs2fre-t1-1",
        "title": "Dialogue Formel entre un Élève et le Directeur",
        "problem": "Compose a formal greeting between student Kofi and his Headmaster Monsieur Boateng in the morning.",
        "stepByStepSolution": [
          "Step 1: Greeting with honorific title: 'Bonjour, Monsieur le Directeur !'",
          "Step 2: Respectful inquiry: 'Comment allez-vous ce matin ?'",
          "Step 3: Response: 'Bonjour Kofi, je vais très bien, merci. Et toi ?'",
          "Step 4: Polite reply: 'Je vais bien aussi, merci Monsieur. Bonne journée !'"
        ],
        "keyTakeaway": "Always use 'vous' and formal titles when addressing elders or teachers in French."
      },
      {
        "id": "ex-jhs2fre-t1-2",
        "title": "Présenter une Camarade Ivoirienne",
        "problem": "Introduce a new female student from Côte d'Ivoire to your French class.",
        "stepByStepSolution": [
          "Step 1: Introduction: 'Chers camarades, je vous présente notre nouvelle amie.'",
          "Step 2: Name and age: 'Elle s'appelle Aminata et elle a quatorze ans.'",
          "Step 3: Nationality and origin: 'Elle est ivoirienne et elle vient d'Abidjan.'",
          "Step 4: Welcome: 'Soyez la bienvenue dans notre école !'"
        ],
        "keyTakeaway": "Use feminine forms ('ivoirienne', 'amie', 'la bienvenue') when referring to females."
      }
    ]
  },
  {
    "id": "jhs2-fre-t2-famille-relations",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 2,
    "title": "La Famille et les Liens de Parenté",
    "description": "Identifier et décrire les membres de la famille nucléaire et élargie, et maîtriser les adjectifs possessifs.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=kYJjZfW8uVo",
    "youtubeId": "kYJjZfW8uVo",
    "keyNotes": "• Les Membres de la Famille:\n  - La famille nucléaire: le père, la mère, les parents, le fils, la fille, le frère, la sœur.\n  - La famille élargie: les grands-parents (le grand-père, la grand-mère), l'oncle, la tante, le cousin, la cousine, le neveu, la nièce, les petits-enfants.\n• Les Adjectifs Possessifs:\n  - Pour 'je': mon (masc. sing.), ma (fém. sing. - devient 'mon' devant voyelle), mes (pluriel).\n  - Pour 'tu': ton, ta, tes.\n  - Pour 'il/elle': son, sa, ses.\n  - Pour 'nous': notre (sing.), nos (pluriel).\n  - Pour 'vous': votre (sing.), vos (pluriel).\n  - Pour 'ils/elles': leur (sing.), leurs (pluriel).\n• Décrire la Structure Familiale:\n  - \"Dans ma famille, nous sommes cinq personnes.\"\n  - \"Mon père est instituteur et ma mère est commerçante.\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t2-1",
        "title": "L'Accord de l'Adjectif Possessif devant Voyelle",
        "problem": "Translate into French: 'My friend (female) lives with her uncle.'",
        "stepByStepSolution": [
          "Step 1: 'Friend' feminine is 'amie'. Although it is feminine, it begins with a vowel, so 'ma amie' becomes 'mon amie'.",
          "Step 2: 'Lives' = 'habite'.",
          "Step 3: 'With her uncle' = 'avec son oncle' ('oncle' is masculine singular).",
          "Step 4: Complete sentence: 'Mon amie habite avec son oncle.'"
        ],
        "keyTakeaway": "Use 'mon, ton, son' before feminine nouns beginning with a vowel or silent 'h'."
      },
      {
        "id": "ex-jhs2fre-t2-2",
        "title": "Identifier les Liens de Parenté",
        "problem": "Complete in French: 'Le père de ma mère est mon... et la fille de ma tante est ma...'",
        "stepByStepSolution": [
          "Step 1: The father of my mother is my grandfather -> 'grand-père'.",
          "Step 2: The daughter of my aunt is my cousin (female) -> 'cousine'.",
          "Step 3: Solution: 'Le père de ma mère est mon grand-père et la fille de ma tante est ma cousine.'"
        ],
        "keyTakeaway": "Kinship terms accurately connect generational relationships in French."
      }
    ]
  },
  {
    "id": "jhs2-fre-t3-description-physique-morale",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 3,
    "title": "La Description Physique et Morale des Personnes",
    "description": "Décrire l'apparence physique (taille, teint, yeux, cheveux) et les traits de caractère/personnalité avec l'accord correct des adjectifs.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=Fj2sXv0u-0g",
    "youtubeId": "Fj2sXv0u-0g",
    "keyNotes": "• Description Physique (Physical Appearance):\n  - La taille: grand(e) (tall), petit(e) (short), de taille moyenne (average height).\n  - La corpulence: mince (slim), gros(se) (stout/fat), robuste (strong), svelte.\n  - Le teint: noir(e), brun(e), clair(e).\n  - Les cheveux: courts, longs, noirs, crépus, tressés. (\"Il a les cheveux courts et noirs\").\n  - Les yeux: noirs, marron, bleus. (\"Elle a les yeux marron\").\n• Description Morale (Personality & Character Traits):\n  - Qualités: travailleur/travailleuse (hardworking), gentil(le) (kind), poli(e) (polite), intelligent(e), généreux/généreuse, honnête.\n  - Défauts: paresseux/paresseuse (lazy), bavard(e) (talkative), méchant(e) (wicked/mean), timide (shy).\n• Règle d'Accord des Adjectifs Qualificatifs:\n  - L'adjectif s'accorde en genre (masculin/féminin) et en nombre (singulier/pluriel) avec le nom qu'il qualifie.\n  - Ex: Un garçon intelligent -> Une fille intelligente; Des garçons intelligents -> Des filles intelligentes.",
    "examples": [
      {
        "id": "ex-jhs2fre-t3-1",
        "title": "Décrire son Meilleur Ami",
        "problem": "Translate: 'My friend Kwame is tall, hardworking, and very kind.'",
        "stepByStepSolution": [
          "Step 1: 'My friend Kwame' = 'Mon ami Kwame'.",
          "Step 2: 'is tall' = 'est grand'.",
          "Step 3: 'hardworking' = 'travailleur'.",
          "Step 4: 'and very kind' = 'et très gentil'.",
          "Step 5: Full sentence: 'Mon ami Kwame est grand, travailleur et très gentil.'"
        ],
        "keyTakeaway": "Match adjectives in masculine singular when describing a male person."
      },
      {
        "id": "ex-jhs2fre-t3-2",
        "title": "L'Accord au Féminin d'Adjectifs Particuliers",
        "problem": "Change to feminine: 'Cet élève est beau, paresseux et gros.'",
        "stepByStepSolution": [
          "Step 1: 'Cet élève' -> 'Cette élève'.",
          "Step 2: 'beau' becomes 'belle' in feminine.",
          "Step 3: 'paresseux' becomes 'paresseuse' in feminine (-eux -> -euse).",
          "Step 4: 'gros' becomes 'grosse' in feminine (-os -> -osse).",
          "Step 5: Result: 'Cette élève est belle, paresseuse et grosse.'"
        ],
        "keyTakeaway": "Certain adjectives undergo irregular feminine changes: beau -> belle, gros -> grosse, paresseux -> paresseuse."
      }
    ]
  },
  {
    "id": "jhs2-fre-t4-activites-quotidiennes",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 1,
    "orderIndex": 4,
    "title": "La Routine Quotidienne et l'Heure",
    "description": "Exprimer ses activités de tous les jours avec les verbes pronominaux et donner l'heure avec précision.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=F0k9L39Tsd4",
    "youtubeId": "F0k9L39Tsd4",
    "keyNotes": "• Les Verbes Pronominaux de la Routine Quotidienne:\n  - se réveiller (to wake up) -> Je me réveille\n  - se lever (to get up) -> Je me lève\n  - se laver / prendre une douche (to wash/shower) -> Je me lave\n  - se brosser les dents (to brush teeth) -> Je me brosse les dents\n  - s'habiller (to get dressed) -> Je m'habille\n  - se coucher (to go to bed) -> Je me couche\n• Dire l'Heure (Telling the Time):\n  - \"Quelle heure est-il ?\" (What time is it?)\n  - \"Il est six heures pile.\" (It is exactly 6 o'clock).\n  - \"Il est sept heures et quart.\" (It is 7:15).\n  - \"Il est huit heures et demie.\" (It is 8:30).\n  - \"Il est neuf heures moins le quart.\" (It is 8:45).\n  - \"Il est midi\" (12:00 PM) / \"Il est minuit\" (12:00 AM).\n• Les Moments de la Journée:\n  - le matin (morning), à midi (at noon), l'après-midi (afternoon), le soir (evening), la nuit (night).",
    "examples": [
      {
        "id": "ex-jhs2fre-t4-1",
        "title": "Raconter sa Matinée d'École",
        "problem": "Write a 3-sentence sequence describing your morning routine in French before school.",
        "stepByStepSolution": [
          "Step 1: Waking up: 'Chaque matin, je me réveille à six heures pile.'",
          "Step 2: Hygiene: 'Je me brosse les dents et je prends une douche.'",
          "Step 3: Breakfast & departure: 'Ensuite, je prends mon petit déjeuner et je pars pour l'école à sept heures moins le quart.'"
        ],
        "keyTakeaway": "Use chronological connectors ('d'abord', 'ensuite', 'puis', 'enfin') to order daily routine."
      },
      {
        "id": "ex-jhs2fre-t4-2",
        "title": "Exprimer l'Heure avec Précision",
        "problem": "How do you say in French: (a) 7:30 AM, (b) 2:15 PM, (c) 9:45 PM?",
        "stepByStepSolution": [
          "Step 1: 7:30 = 'Il est sept heures et demie du matin.'",
          "Step 2: 2:15 = 'Il est deux heures et quart de l'après-midi.'",
          "Step 3: 9:45 = 'Il est dix heures moins le quart du soir.'"
        ],
        "keyTakeaway": "Remember: 'et quart' (+15 min), 'et demie' (+30 min), 'moins le quart' (-15 min to the next hour)."
      }
    ]
  },
  {
    "id": "jhs2-fre-t5-ecole-matieres",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 5,
    "title": "L'École, les Matières Scolaires et l'Emploi du Temps",
    "description": "Décrire son établissement scolaire, nommer les matières enseignées, parler de son emploi du temps et exprimer ses goûts.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=26QPDBe-NB8",
    "youtubeId": "26QPDBe-NB8",
    "keyNotes": "• Les Lieux et Bâtiments de l'École:\n  - la salle de classe (classroom), la bibliothèque (library), le laboratoire scientifique, la cour de récréation (playground), le bureau du directeur, le terrain de football, la cantine.\n• Les Matières Scolaires (School Subjects):\n  - le français, l'anglais, les mathématiques (les maths), les sciences intégrées, les études sociales, l'informatique, l'éducation religieuse et morale (ERM), la technologie professionnelle.\n• Exprimer ses Préférences Scolaires:\n  - aimer: \"J'aime les mathématiques.\"\n  - adorer: \"J'adore le français parce que c'est une langue internationale.\"\n  - préférer: \"Je préfère l'informatique aux études sociales.\"\n  - détester: \"Je déteste les devoirs difficiles.\"\n• Parler de son Emploi du Temps:\n  - \"Le lundi matin, nous avons deux heures de sciences.\"\n  - \"La récréation commence à dix heures et demie.\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t5-1",
        "title": "Justifier sa Matière Préférée",
        "problem": "Translate: 'My favorite subject is Computing because I like technology.'",
        "stepByStepSolution": [
          "Step 1: 'My favorite subject' = 'Ma matière préférée'.",
          "Step 2: 'is Computing' = 'est l'informatique'.",
          "Step 3: 'because I like technology' = 'parce que j'aime la technologie.'",
          "Step 4: Combined: 'Ma matière préférée est l'informatique parce que j'aime la technologie.'"
        ],
        "keyTakeaway": "Use 'parce que' followed by a complete clause to provide reasons for academic preferences."
      },
      {
        "id": "ex-jhs2fre-t5-2",
        "title": "Décrire son Collège",
        "problem": "Describe your junior high school campus in two complete French sentences.",
        "stepByStepSolution": [
          "Step 1: Name and location: 'Mon école s'appelle Accra Academy JHS et elle est très grande.'",
          "Step 2: Facilities: 'Il y a douze salles de classe, une belle bibliothèque et un grand terrain de sport.'"
        ],
        "keyTakeaway": "Use 'Il y a...' (There is / There are) to enumerate school facilities."
      }
    ]
  },
  {
    "id": "jhs2-fre-t6-aliments-repas",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 6,
    "title": "Les Aliments, les Boissons et les Repas",
    "description": "Nommer les aliments et plats ghanéens, exprimer la faim/soif, maîtriser les articles partitifs et commander au restaurant.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=FZGugFqDr60",
    "youtubeId": "FZGugFqDr60",
    "keyNotes": "• Les Trois Principaux Repas:\n  - Le petit déjeuner (breakfast - le matin): du pain, du beurre, des œufs, du thé, du café, du porridge (koko).\n  - Le déjeuner (lunch - à midi): du riz gras (jollof), du fufu avec de la soupe d'arachide, du poulet, du poisson.\n  - Le dîner (dinner - le soir): de l'igname bouillie, de la soupe légère, des fruits.\n• Les Articles Partitifs (Partitive Articles - 'Some'):\n  - du: devant nom masculin singulier (du pain, du riz, du lait).\n  - de la: devant nom féminin singulier (de la viande, de la salade).\n  - de l': devant nom commençant par voyelle ou h muet (de l'eau, de l'huile).\n  - des: devant nom pluriel (des bananes, des œufs, des carottes).\n  - À la forme négative: du, de la, des deviennent TOUJOURS 'de' ou 'd'': \"Je ne mange pas de viande.\"\n• Expressions Utiles:\n  - \"J'ai faim\" (I am hungry) / \"J'ai soif\" (I am thirsty).\n  - Commander au restaurant: \"S'il vous plaît, je voudrais une assiette de riz jollof et une bouteille d'eau minérale.\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t6-1",
        "title": "L'Usage de l'Article Partitif à la Forme Négative",
        "problem": "Transform into negative: 'Kofi boit du lait et mange des œufs le matin.'",
        "stepByStepSolution": [
          "Step 1: Negative verb 1: 'Kofi ne boit pas...'",
          "Step 2: In negative, 'du lait' becomes 'de lait': 'Kofi ne boit pas de lait...'",
          "Step 3: Negative verb 2: 'et il ne mange pas...'",
          "Step 4: In negative, 'des œufs' becomes 'd'œufs' (before vowel): 'd'œufs le matin.'",
          "Step 5: Result: 'Kofi ne boit pas de lait et ne mange pas d'œufs le matin.'"
        ],
        "keyTakeaway": "Partitive articles (du, de la, de l', des) change to 'de' or 'd'' in negative sentences."
      },
      {
        "id": "ex-jhs2fre-t6-2",
        "title": "Commander un Repas au Restaurant",
        "problem": "Formulate a polite request to a waiter for jollof rice and cold water.",
        "stepByStepSolution": [
          "Step 1: Polite opening: 'S'il vous plaît, Monsieur...'",
          "Step 2: Polite modal request: 'Je voudrais une assiette de riz jollof avec du poulet.'",
          "Step 3: Drink: 'Et apportez-moi une bouteille d'eau fraîche, s'il vous plaît.'"
        ],
        "keyTakeaway": "Always use 'Je voudrais...' (I would like) rather than 'Je veux' (I want) when ordering food."
      }
    ]
  },
  {
    "id": "jhs2-fre-t7-vetements-accessoires",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 7,
    "title": "Les Vêtements, les Couleurs et les Accessoires",
    "description": "Décrire les vêtements, uniformes scolaires, tissus traditionnels (Kente), les couleurs et utiliser les adjectifs démonstratifs.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=J_j2tL2_oQ4",
    "youtubeId": "J_j2tL2_oQ4",
    "keyNotes": "• Les Vêtements et Accessoires (Clothing & Accessories):\n  - Pour hommes/garçons: une chemise (shirt), un pantalon (trousers), un t-shirt, une cravate, un short, une ceinture.\n  - Pour femmes/filles: une robe (dress), une jupe (skirt), un chemisier (blouse), un foulard.\n  - Chaussures: des chaussures (fém. pl.), des sandales, des baskets (trainers).\n  - Tissus ghanéens: le pagne traditionnel, le tissu Kente, le batakari.\n• Les Adjectifs Démonstratifs (Demonstrative Adjectives):\n  - ce: devant nom masc. sing. commençant par consonne (ce pantalon, ce garçon).\n  - cet: devant nom masc. sing. commençant par voyelle ou h muet (cet uniforme, cet homme).\n  - cette: devant nom fém. sing. (cette robe, cette chemise, cette école).\n  - ces: devant nom pluriel masc. ou fém. (ces chaussures, ces élèves, ces pantalons).\n• L'Accord des Couleurs:\n  - Les adjectifs de couleur s'accordent: blanc/blanche, noir/noire, vert/verte, bleu/bleue.\n  - Attention aux invariables: orange et marron ne changent JAMAIS (des jupes orange, des chaussures marron).",
    "examples": [
      {
        "id": "ex-jhs2fre-t7-1",
        "title": "Choisir le Bon Adjectif Démonstratif",
        "problem": "Insert the correct demonstrative adjective: (a) ... uniforme est propre; (b) ... robe est rouge; (c) ... souliers sont neufs.",
        "stepByStepSolution": [
          "Step 1: 'uniforme' is masculine singular starting with a vowel -> 'cet uniforme'.",
          "Step 2: 'robe' is feminine singular -> 'cette robe'.",
          "Step 3: 'souliers' is plural -> 'ces souliers'."
        ],
        "keyTakeaway": "Use 'cet' before masculine singular nouns starting with a vowel to facilitate pronunciation."
      },
      {
        "id": "ex-jhs2fre-t7-2",
        "title": "L'Invariabilité de la Couleur Marron",
        "problem": "Translate: 'Akosua wears brown shoes and a white skirt.'",
        "stepByStepSolution": [
          "Step 1: 'Akosua wears' = 'Akosua porte'.",
          "Step 2: 'brown shoes' = 'des chaussures marron' ('marron' is invariable and takes NO 's').",
          "Step 3: 'and a white skirt' = 'et une jupe blanche' ('blanc' becomes 'blanche' in feminine singular).",
          "Step 4: Full sentence: 'Akosua porte des chaussures marron et une jupe blanche.'"
        ],
        "keyTakeaway": "'Marron' and 'orange' are invariable; they never take an 'e' or an 's'."
      }
    ]
  },
  {
    "id": "jhs2-fre-t8-maison-pieces",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 2,
    "orderIndex": 8,
    "title": "La Maison, les Pièces et les Tâches Ménagères",
    "description": "Nommer les différentes pièces du logement, les meubles, les prépositions de lieu et décrire les corvées ménagères.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=kYv9d5c8gQw",
    "youtubeId": "kYv9d5c8gQw",
    "keyNotes": "• Les Pièces de la Maison (Rooms in the House):\n  - le salon / la salle de séjour (living room), la chambre à coucher (bedroom), la cuisine (kitchen), la salle de bains (bathroom), les toilettes (restroom), la véranda / le balcon, le jardin, la cour.\n• Les Meubles et Appareils (Furniture & Appliances):\n  - le lit, la table, la chaise, l'armoire, le canapé / le fauteuil, le réfrigérateur (frigo), la cuisinière, le ventilateur, la télévision.\n• Les Prépositions de Lieu (Prepositions of Place):\n  - sur (on), sous (under), devant (in front of), derrière (behind), dans (in/inside), entre (between), à côté de (beside/next to), en face de (opposite).\n• Les Tâches Ménagères (Household Chores):\n  - balayer la chambre / la cour (to sweep), laver les assiettes / faire la vaisselle (to wash dishes), repasser les vêtements (to iron), faire le lit (to make the bed), jeter les ordures (to throw away trash).",
    "examples": [
      {
        "id": "ex-jhs2fre-t8-1",
        "title": "Situer un Objet dans la Chambre",
        "problem": "Translate: 'My French book is on the table, next to the lamp.'",
        "stepByStepSolution": [
          "Step 1: 'My French book' = 'Mon livre de français'.",
          "Step 2: 'is on the table' = 'est sur la table'.",
          "Step 3: 'next to the lamp' = 'à côté de la lampe.'",
          "Step 4: Synthesis: 'Mon livre de français est sur la table, à côté de la lampe.'"
        ],
        "keyTakeaway": "Use precise prepositions of location ('sur', 'à côté de') to describe spatial layout."
      },
      {
        "id": "ex-jhs2fre-t8-2",
        "title": "Décrire ses Tâches Ménagères du Samedi",
        "problem": "Write two sentences describing chores you perform at home on Saturdays.",
        "stepByStepSolution": [
          "Step 1: Cleaning: 'Le samedi matin, je balaie la cour et je lave les assiettes dans la cuisine.'",
          "Step 2: Ironing: 'L'après-midi, je repasse mon uniforme scolaire pour le lundi.'"
        ],
        "keyTakeaway": "Use simple present tense verbs ('je balaie', 'je lave', 'je repasse') for domestic chores."
      }
    ]
  },
  {
    "id": "jhs2-fre-t9-loisirs-sports",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 9,
    "title": "Les Loisirs, les Sports et les Vacances",
    "description": "Parler de ses passe-temps préférés, des disciplines sportives avec 'jouer à' et 'faire de', et exprimer des projets au futur proche.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=0eP2jN0sTqw",
    "youtubeId": "0eP2jN0sTqw",
    "keyNotes": "• Les Sports et Activités de Loisir:\n  - le football, le basketball, le volley-ball, la natation (swimming), l'athlétisme, la lecture, la musique, les jeux vidéo.\n• La Règle Grammaticale: 'Jouer à' vs 'Faire de':\n  1. Le verbe JOUER s'utilise avec la préposition 'À' pour les sports d'équipe et jeux:\n     - jouer au football (à + le = au), jouer au tennis, jouer aux dames (à + les = aux).\n     - (Note: 'jouer de' s'utilise pour les instruments de musique: jouer du piano, jouer de la guitare).\n  2. Le verbe FAIRE s'utilise avec la préposition 'DE' pour toutes les activités sportives générales:\n     - faire du vélo (de + le = du), faire de la natation, faire de l'athlétisme, faire des randonnées.\n• Le Futur Proche (Near Future Tense):\n  - Formation: Sujet + Verbe ALLER au présent + Verbe à l'Infinitif.\n  - Ex: \"Pendant les vacances prochaines, je vais visiter le parc national de Kakum à Cape Coast.\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t9-1",
        "title": "Distinguer 'Jouer à' et 'Faire de'",
        "problem": "Complete correctly with contracted articles: 'Kweku joue ... basketball et fait ... natation.'",
        "stepByStepSolution": [
          "Step 1: 'joue' takes 'à'. 'basketball' is masculine singular: à + le = 'au'. -> 'joue au basketball'.",
          "Step 2: 'fait' takes 'de'. 'natation' is feminine singular: de + la = 'de la'. -> 'fait de la natation'.",
          "Step 3: Solution: 'Kweku joue au basketball et fait de la natation.'"
        ],
        "keyTakeaway": "Remember: Jouer + AU/À LA/AUX (sports), Faire + DU/DE LA/DES (activities)."
      },
      {
        "id": "ex-jhs2fre-t9-2",
        "title": "Exprimer un Projet au Futur Proche",
        "problem": "Express in French: 'This Saturday, we are going to watch a football match at Kumasi stadium.'",
        "stepByStepSolution": [
          "Step 1: 'This Saturday' = 'Ce samedi'.",
          "Step 2: Subject + aller in present for 'we': 'nous allons'.",
          "Step 3: Infinitive verb 'to watch': 'regarder'.",
          "Step 4: Predicate: 'un match de football au stade de Kumasi.'",
          "Step 5: Combined: 'Ce samedi, nous allons regarder un match de football au stade de Kumasi.'"
        ],
        "keyTakeaway": "Futur proche expresses immediate or planned future using aller + infinitive."
      }
    ]
  },
  {
    "id": "jhs2-fre-t10-metiers-professions",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 10,
    "title": "Les Métiers, les Professions et l'Avenir",
    "description": "Nommer diverses professions, maîtriser le féminin des noms de métiers et exprimer ses ambitions professionnelles avec 'vouloir devenir'.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=teu7BCZTgDs",
    "youtubeId": "teu7BCZTgDs",
    "keyNotes": "• Vocabulaire des Métiers et Professions:\n  - Santé: le médecin / le docteur, l'infirmier / l'infirmière, le pharmacien / la pharmacienne.\n  - Éducation: le professeur (l'enseignant / l'enseignante), le directeur.\n  - Droit & Sécurité: l'avocat / l'avocate, le juge, le policier / la policière, le soldat.\n  - Artisanat & Technique: le mécanicien, le menuisier (carpenter), le maçon, le tailleur / la couturière, l'électricien, le chauffeur.\n  - Technologie: l'ingénieur, l'informaticien / l'informaticienne.\n• Formation du Féminin des Noms de Métiers:\n  - Règle générale (+e): avocat -> avocate, enseignant -> enseignante.\n  - Terminaison en -er -> -ère: infirmier -> infirmière, cuisinier -> cuisinière, boulanger -> boulangère.\n  - Terminaison en -ien -> -ienne: pharmacien -> pharmacienne, informaticien -> informaticienne.\n  - Terminaison en -eur -> -euse: chanteur -> chanteuse, danseur -> danseuse.\n  - Terminaison en -teur -> -trice: agriculteur -> agricultrice, directeur -> directrice.\n• Exprimer ses Ambitions d'Avenir:\n  - \"À l'avenir, je voudrais devenir médecin pour soigner les malades au Ghana.\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t10-1",
        "title": "Donner le Féminin des Métiers",
        "problem": "Give the feminine forms of: (a) un informaticien, (b) un infirmier, (c) un directeur.",
        "stepByStepSolution": [
          "Step 1: 'un informaticien' ending in -ien becomes 'une informaticienne'.",
          "Step 2: 'un infirmier' ending in -er becomes 'une infirmière'.",
          "Step 3: 'un directeur' ending in -teur becomes 'une directrice'."
        ],
        "keyTakeaway": "Master feminine endings: -ien -> -ienne, -er -> -ère, -teur -> -trice."
      },
      {
        "id": "ex-jhs2fre-t10-2",
        "title": "Exprimer son Ambition Professionnelle",
        "problem": "Translate: 'In the future, I want to become an engineer to build roads in Ghana.'",
        "stepByStepSolution": [
          "Step 1: 'In the future' = 'À l'avenir' or 'Dans le futur'.",
          "Step 2: 'I want to become' = 'je veux devenir' or 'je voudrais devenir'.",
          "Step 3: 'an engineer' = 'ingénieur' (omit 'un' after devenir/être).",
          "Step 4: 'to build roads in Ghana' = 'pour construire des routes au Ghana.'",
          "Step 5: Full sentence: 'À l'avenir, je voudrais devenir ingénieur pour construire des routes au Ghana.'"
        ],
        "keyTakeaway": "Do not use indefinite articles (un/une) when stating profession after 'être' or 'devenir' (e.g. 'Je suis médecin', not 'Je suis un médecin')."
      }
    ]
  },
  {
    "id": "jhs2-fre-t11-sante-maladies",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 11,
    "title": "Le Corps Humain, la Santé et les Maladies",
    "description": "Nommer les parties du corps humain, exprimer des douleurs avec 'avoir mal à...', décrire des symptômes et donner des conseils de santé.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=5xuZxGirWQI",
    "youtubeId": "5xuZxGirWQI",
    "keyNotes": "• Les Parties du Corps Humain (Parts of the Body):\n  - la tête (head), les yeux (eyes), le nez (nose), la bouche (mouth), les oreilles (ears), le cou (neck).\n  - le bras (arm), la main (hand), les doigts (fingers), la poitrine (chest), le ventre / l'estomac (belly/stomach).\n  - la jambe (leg), le genou (knee), le pied (foot), les orteils (toes).\n• Exprimer la Douleur: 'Avoir mal à...':\n  - au (+ masc. sing.): \"J'ai mal au ventre\", \"J'ai mal au dos\" (back), \"J'ai mal au pied\".\n  - à la (+ fém. sing.): \"J'ai mal à la tête\" (headache), \"J'ai mal à la gorge\" (sore throat).\n  - à l' (+ voyelle): \"J'ai mal à l'œil\" (eye), \"J'ai mal à l'oreille\" (ear).\n  - aux (+ pluriel): \"J'ai mal aux dents\" (toothache), \"J'ai mal aux yeux\".\n• Les Symptômes et Maladies Courantes:\n  - la fièvre (fever), le paludisme (malaria), le rhume (cold), la toux (cough), la diarrhée.\n  - \"J'ai de la fièvre et je tousse beaucoup.\"\n• Conseils du Médecin avec l'Impératif:\n  - \"Prenez vos comprimés trois fois par jour !\" (Take your pills 3 times daily).\n  - \"Buvez beaucoup d'eau propre et reposez-vous !\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t11-1",
        "title": "Exprimer des Douleurs Diverses",
        "problem": "Translate into French: (a) 'I have a headache', (b) 'He has stomach ache', (c) 'She has toothache'.",
        "stepByStepSolution": [
          "Step 1: 'headache' -> 'la tête' is feminine: 'J'ai mal à la tête.'",
          "Step 2: 'stomach ache' -> 'le ventre' is masculine: 'Il a mal au ventre.'",
          "Step 3: 'toothache' -> 'les dents' is plural: 'Elle a mal aux dents.'"
        ],
        "keyTakeaway": "Match 'avoir mal à' with contracted articles: au (masc.), à la (fém.), à l' (vowel), aux (plur.)."
      },
      {
        "id": "ex-jhs2fre-t11-2",
        "title": "Dialogue Chez le Médecin",
        "problem": "Compose a 2-line exchange between a doctor asking what is wrong and a patient with malaria symptoms.",
        "stepByStepSolution": [
          "Step 1: Doctor: 'Qu'est-ce qui ne va pas, mon garçon ?' (What is wrong, my boy?)",
          "Step 2: Patient: 'Docteur, j'ai une forte fièvre, des frissons et mal partout. Je crois que j'ai le paludisme.'"
        ],
        "keyTakeaway": "Use 'Qu'est-ce qui ne va pas ?' to ask about health troubles, and describe symptoms clearly."
      }
    ]
  },
  {
    "id": "jhs2-fre-t12-voyages-transports",
    "subjectId": "french",
    "level": "JHS 2",
    "term": 3,
    "orderIndex": 12,
    "title": "Les Moyens de Transport et les Directions",
    "description": "Identifier les différents modes de déplacement, utiliser les prépositions 'en' et 'à', et demander ou indiquer un itinéraire dans la ville.",
    "isFreeTrial": true,
    "isVip": false,
    "youtubeUrl": "https://www.youtube.com/watch?v=hd0_GZHHMrE",
    "youtubeId": "hd0_GZHHMrE",
    "keyNotes": "• Les Moyens de Transport (Modes of Transport):\n  - le bus / le car, le taxi, le trotro (minibus ghanéen), la voiture, le train, l'avion, le bateau / la pirogue, la moto, le vélo / la bicyclette.\n• Les Prépositions avec les Transports:\n  - Utiliser 'EN' pour les véhicules fermés où l'on entre à l'intérieur:\n    * en bus, en taxi, en train, en voiture, en avion, en bateau, en trotro.\n  - Utiliser 'À' pour les moyens où l'on monte sur l'engin ou à pied:\n    * à pied (on foot), à vélo (by bicycle), à moto (by motorbike), à cheval (on horseback).\n• Demander et Indiquer le Chemin (Asking & Giving Directions):\n  - Demander son chemin: \"Pardon Monsieur, où se trouve le marché central ?\" / \"Pour aller à la banque, s'il vous plaît ?\"\n  - Indiquer la direction:\n    * \"Allez tout droit !\" (Go straight ahead!)\n    * \"Tournez à droite !\" (Turn right!)\n    * \"Tournez à gauche !\" (Turn left!)\n    * \"Traversez le carrefour / le rond-point !\" (Cross the intersection/roundabout!)\n    * \"C'est en face de l'hôpital, à côté de la poste.\"",
    "examples": [
      {
        "id": "ex-jhs2fre-t12-1",
        "title": "Choisir entre 'En' et 'À' pour les Transports",
        "problem": "Fill in with 'en' or 'à': (a) Kwabena va à l'école ... pied; (b) Mon père voyage ... avion; (c) Nous allons au marché ... trotro.",
        "stepByStepSolution": [
          "Step 1: 'pied' uses 'à' -> 'à pied'.",
          "Step 2: 'avion' is an enclosed vehicle -> 'en avion'.",
          "Step 3: 'trotro' is an enclosed vehicle -> 'en trotro'."
        ],
        "keyTakeaway": "Use 'à' for foot, bicycle, motorcycle; use 'en' for cars, buses, airplanes, trains."
      },
      {
        "id": "ex-jhs2fre-t12-2",
        "title": "Guider un Touriste dans la Ville",
        "problem": "Give clear directions in French to a stranger asking for the central post office.",
        "stepByStepSolution": [
          "Step 1: 'Continuez tout droit jusqu'au carrefour.' (Continue straight to the intersection.)",
          "Step 2: 'Ensuite, tournez à gauche.' (Then, turn left.)",
          "Step 3: 'La poste se trouve juste à côté de la pharmacie, en face de la banque.'"
        ],
        "keyTakeaway": "Use the imperative ('allez', 'tournez', 'traversez') to give clear sequential directions."
      }
    ]
  }
];
