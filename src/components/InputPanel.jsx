export default function InputPanel({ mode, value, onChange }) {
  const isWeight = mode === 'weight';
  return (
    <section className="card">
      <div className="mode-toggle" role="tablist" aria-label="Input mode">
        <button
          type="button"
          role="tab"
          aria-selected={isWeight}
          className={isWeight ? 'mode-toggle__btn mode-toggle__btn--active' : 'mode-toggle__btn'}
          onClick={() => onChange({ mode: 'weight', value: 55 })}
        >
          Dog weight
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={!isWeight}
          className={!isWeight ? 'mode-toggle__btn mode-toggle__btn--active' : 'mode-toggle__btn'}
          onClick={() => onChange({ mode: 'protein', value: 200 })}
        >
          Cooked protein
        </button>
      </div>

      <label className="field">
        <span className="field__label">
          {isWeight ? "Buddy's weight" : 'Cooked protein on hand'}
        </span>
        <div className="field__input-row">
          <input
            type="number"
            inputMode="decimal"
            min="0"
            step={isWeight ? '1' : '5'}
            value={value}
            onChange={(e) => onChange({ value: e.target.value })}
          />
          <span className="field__unit">{isWeight ? 'lbs' : 'g'}</span>
        </div>
      </label>
    </section>
  );
}
