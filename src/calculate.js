import {
  RATIOS,
  REFERENCE_PROTEIN_G,
  REFERENCE_WEIGHT_LBS,
  MEALS_PER_DAY,
} from './recipe.js';

export function proteinFromWeight(weightLbs) {
  return (weightLbs / REFERENCE_WEIGHT_LBS) * REFERENCE_PROTEIN_G;
}

export function scaleRecipe(proteinGrams) {
  const protein = Math.max(0, proteinGrams || 0);
  return {
    protein,
    carbs: protein * RATIOS.carbs,
    vegetables: protein * RATIOS.vegetables,
    supplement: protein * RATIOS.supplement,
    oilLow: protein * RATIOS.oilLow,
    oilHigh: protein * RATIOS.oilHigh,
    total: protein * (1 + RATIOS.carbs + RATIOS.vegetables + RATIOS.supplement),
  };
}

export function perMeal(grams) {
  return grams / MEALS_PER_DAY;
}
