// Ghanaian SHS Visual Arts Elective Curriculum Index
// WASSCE Visual Arts workrooms: Graphic Drawing, Picture Crafting, Textiles, Ceramics, Photography

import { CurriculumTopic } from './types';
import { SHS_GRAPHIC_DRAWING_TOPICS } from './curriculumShsVaGraphicDrawing';
import { SHS_PICTURE_CRAFTING_TOPICS } from './curriculumShsVaPictureCrafting';
import { SHS_TEXTILES_TOPICS } from './curriculumShsVaTextiles';
import { SHS_CERAMICS_TOPICS } from './curriculumShsVaCeramics';
import { SHS_PHOTOGRAPHY_TOPICS } from './curriculumShsVaPhotography';

export { SHS_GRAPHIC_DRAWING_TOPICS } from './curriculumShsVaGraphicDrawing';
export { SHS_PICTURE_CRAFTING_TOPICS } from './curriculumShsVaPictureCrafting';
export { SHS_TEXTILES_TOPICS } from './curriculumShsVaTextiles';
export { SHS_CERAMICS_TOPICS } from './curriculumShsVaCeramics';
export { SHS_PHOTOGRAPHY_TOPICS } from './curriculumShsVaPhotography';

export const SHS_VISUAL_ARTS_TOPICS: CurriculumTopic[] = [
  ...SHS_GRAPHIC_DRAWING_TOPICS,
  ...SHS_PICTURE_CRAFTING_TOPICS,
  ...SHS_TEXTILES_TOPICS,
  ...SHS_CERAMICS_TOPICS,
  ...SHS_PHOTOGRAPHY_TOPICS,
];
