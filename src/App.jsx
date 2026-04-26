import { useEffect, useMemo, useState } from 'react';
import InputPanel from './components/InputPanel.jsx';
import Results from './components/Results.jsx';
import OilToggle from './components/OilToggle.jsx';
import Warnings from './components/Warnings.jsx';
import Swaps from './components/Swaps.jsx';
import { proteinFromWeight, scaleRecipe } from './calculate.js';

const STORAGE_KEY = 'dogchow:input';
const DEFAULT_STATE = { mode: 'weight', value: 55, losingWeight: false };

function loadInitial() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

export default function App() {
  const [state, setState] = useState(loadInitial);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const proteinGrams = useMemo(() => {
    const value = Number(state.value) || 0;
    return state.mode === 'weight' ? proteinFromWeight(value) : value;
  }, [state.mode, state.value]);

  const recipe = useMemo(() => scaleRecipe(proteinGrams), [proteinGrams]);

  return (
    <main className="app">
      <header className="app__header">
        <h1>DogChow</h1>
        <p className="app__subtitle">Buddy's recipe calculator</p>
      </header>

      <InputPanel
        mode={state.mode}
        value={state.value}
        onChange={(patch) => setState((s) => ({ ...s, ...patch }))}
      />

      <Results recipe={recipe} losingWeight={state.losingWeight} />

      <OilToggle
        losingWeight={state.losingWeight}
        onChange={(losingWeight) => setState((s) => ({ ...s, losingWeight }))}
      />

      <Warnings />
      <Swaps />

      <footer className="app__footer">
        <p>
          Recipe by Dr. Rebecca L. Remillard, MSPCA-Angell. For precise nutrition,
          see <a href="https://balance.it/recipes" target="_blank" rel="noreferrer">balance.it/recipes</a>.
        </p>
      </footer>
    </main>
  );
}
