import { useDarkMode } from '../hooks/useDarkMode';

export default function ToggleDark() {
  const [ theme, setTheme ] =useDarkMode()
  return (
    <div >
      <button onClick={() => setTheme("light")} >
        <span role='button'>🌕</span>
      </button>
      <button onClick={() => setTheme("dark")}>
      <span role='button'>🌛</span>
      </button>
    </div>
  );
}
