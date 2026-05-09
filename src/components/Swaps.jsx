import { SWAPS } from '../recipe.js';

function Group({ title, items }) {
  return (
    <div className="swap-group">
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Swaps() {
  return (
    <details className="card card--collapsible">
      <summary>Approved ingredient swaps (same gram amounts)</summary>
      <div className="swap-grid">
        <Group title="Proteins" items={SWAPS.proteins} />
        <Group title="Carbohydrates" items={SWAPS.carbs} />
        <Group title="Vegetables" items={SWAPS.vegetables} />
      </div>
    </details>
  );
}
