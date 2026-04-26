// Source: MSPCA-Angell, Dr. Rebecca L. Remillard. Reference dog: 55 lb, 200g protein/day.
export const RATIOS = {
  carbs: 2.425,
  vegetables: 0.205,
  supplement: 0.0775,
  oilLow: 0.070,
  oilHigh: 0.115,
};

export const REFERENCE_WEIGHT_LBS = 55;
export const REFERENCE_PROTEIN_G = 200;
export const MEALS_PER_DAY = 2;

export const SWAPS = {
  proteins: [
    'Chicken dark meat',
    'Ground turkey (90/10)',
    'Lean ground beef',
    'Eggs (~4 large = 200g cooked)',
    'Pork',
    'Lamb',
  ],
  carbs: ['White rice', 'Brown rice', 'Sweet potato', 'Pasta', 'Oatmeal', 'Barley'],
  vegetables: ['Carrots', 'Green beans', 'Broccoli', 'Or a mix'],
};

export const DANGEROUS = [
  'Onions',
  'Garlic',
  'Chocolate',
  'Grapes',
  'Raisins',
  'Xylitol',
  'Cooked bones',
];
