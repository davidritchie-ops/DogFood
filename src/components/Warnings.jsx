import { DANGEROUS } from '../recipe.js';

export default function Warnings() {
  return (
    <section className="card card--warn">
      <h2>Important</h2>
      <ul className="warn-list">
        <li>
          <strong>Balance IT Canine supplement is required.</strong> Skipping it
          causes nutritional deficiencies over time.
        </li>
        <li>Weights are <strong>cooked</strong> amounts, not raw.</li>
        <li>Split daily total into 2 meals; mix everything together before serving.</li>
      </ul>
      <h3>Never feed</h3>
      <ul className="danger-chips">
        {DANGEROUS.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
    </section>
  );
}
