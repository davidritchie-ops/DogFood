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

function BatchTable({ recipe, losingWeight }) {
  return (
    <table className="results">
      <thead>
        <tr>
          <th scope="col">Component</th>
          <th scope="col" colSpan="2">Batch total</th>
        </tr>
      </thead>
      <tbody>
        <BatchRow label="Protein (cooked)" value={recipe.protein} />
        <BatchRow label="Carbohydrate (cooked)" value={recipe.carbs} />
        <BatchRow label="Mixed vegetables" value={recipe.vegetables} />
        <BatchRow
          label="Balance IT Canine supplement"
          value={recipe.supplement}
          badge="Required"
        />
        {losingWeight && (
          <BatchRow
            label="Vegetable oil"
            value={`${r(recipe.oilLow)}–${r(recipe.oilHigh)}g`}
            isString
            note="Only if losing weight"
          />
        )}
        <tr className="results__total">
          <th scope="row">Total</th>
          <td colSpan="2">{`${r(recipe.total)}g`}</td>
        </tr>
      </tbody>
    </table>
  );
}

function BatchRow({ label, value, badge, note, isString }) {
  return (
    <tr>
      <th scope="row">
        <span>{label}</span>
        {badge && <span className="badge badge--required">{badge}</span>}
        {note && <span className="row-note">{note}</span>}
      </th>
      <td colSpan="2">{isString ? value : `${r(value)}g`}</td>
    </tr>
  );
}

export default function Results({ dailyRecipe, batchRecipe, daysSupply, losingWeight }) {
  return (
    <>
      {batchRecipe && (
        <section className="card">
          <h2>Batch totals</h2>
          <BatchTable recipe={batchRecipe} losingWeight={losingWeight} />
          {daysSupply !== null && (
            <p className="hint">
              Lasts <strong>{daysSupply.toFixed(1)} days</strong> at Buddy's daily intake.
            </p>
          )}
        </section>
      )}

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
              daily={`${r(dailyRecipe.protein)}g`}
              perMealValue={`${r(perMeal(dailyRecipe.protein))}g`}
            />
            <Row
              label="Carbohydrate (cooked)"
              daily={`${r(dailyRecipe.carbs)}g`}
              perMealValue={`${r(perMeal(dailyRecipe.carbs))}g`}
            />
            <Row
              label="Mixed vegetables"
              daily={`${r(dailyRecipe.vegetables)}g`}
              perMealValue={`${r(perMeal(dailyRecipe.vegetables))}g`}
            />
            <Row
              label="Balance IT Canine supplement"
              daily={`${r(dailyRecipe.supplement)}g`}
              perMealValue={`${r(perMeal(dailyRecipe.supplement))}g`}
              badge="Required"
            />
            {losingWeight && (
              <Row
                label="Vegetable oil"
                daily={range(dailyRecipe.oilLow, dailyRecipe.oilHigh)}
                perMealValue={range(perMeal(dailyRecipe.oilLow), perMeal(dailyRecipe.oilHigh))}
                note="Only if losing weight"
              />
            )}
            <tr className="results__total">
              <th scope="row">Total</th>
              <td>{`${r(dailyRecipe.total)}g`}</td>
              <td>{`${r(perMeal(dailyRecipe.total))}g`}</td>
            </tr>
          </tbody>
        </table>
        <p className="hint">Mix all components together before serving.</p>
      </section>
    </>
  );
}
