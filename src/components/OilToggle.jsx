export default function OilToggle({ losingWeight, onChange }) {
  return (
    <section className="card card--inline">
      <label className="switch">
        <input
          type="checkbox"
          checked={losingWeight}
          onChange={(e) => onChange(e.target.checked)}
        />
        <span>Buddy is losing weight (add vegetable oil)</span>
      </label>
    </section>
  );
}
