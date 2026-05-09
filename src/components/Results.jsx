import { perMeal } from '../calculate.js';

const r = (n) => Math.round(n);
const range = (lo, hi) => `${r(lo)}–${r(hi)}g`;

function Row({ label, daily, perMealValue, badge, note }) {
  return (
    <tr>
      <th scope="row">
        <span>{label}</span>
        {badge && <span className="badge badge--required">{badge}</span>}
        {note && <span className="row-note">{note}</span>}
      </th>
      <td>{daily}</td>
      <td>{perMealValue}</td>
    </tr>
  );
}

export default function Results({ recipe, losingWeight }) {
  return (
    <section className="card">
      <h2>Daily amounts</h2>
      <table className="results">
        <thead>
          <tr>
            <th scope="col">Component</th>
            <th scope="col">Daily</th>
            <th scope="col">Per meal</th>
          </tr>
        </thead>
        <tbody>
          <Row
            label="Protein (cooked)"
            daily={`${r(recipe.protein)}g`}
            perMealValue={`${r(perMeal(recipe.protein))}g`}
          />
          <Row
            label="Carbohydrate (cooked)"
            daily={`${r(recipe.carbs)}g`}
            perMealValue={`${r(perMeal(recipe.carbs))}g`}
          />
          <Row
            label="Mixed vegetables"
            daily={`${r(recipe.vegetables)}g`}
            perMealValue={`${r(perMeal(recipe.vegetables))}g`}
          />
          <Row
            label="Balance IT Canine supplement"
            daily={`${r(recipe.supplement)}g`}
            perMealValue={`${r(perMeal(recipe.supplement))}g`}
            badge="Required"
          />
          {losingWeight && (
            <Row
              label="Vegetable oil"
              daily={range(recipe.oilLow, recipe.oilHigh)}
              perMealValue={range(perMeal(recipe.oilLow), perMeal(recipe.oilHigh))}
              note="Only if losing weight"
            />
          )}
          <tr className="results__total">
            <th scope="row">Total</th>
            <td>{`${r(recipe.total)}g`}</td>
            <td>{`${r(perMeal(recipe.total))}g`}</td>
          </tr>
        </tbody>
      </table>
      <p className="hint">Mix all components together before serving.</p>
    </section>
  );
}
