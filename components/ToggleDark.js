import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function ToggleDark() {
  const [theme, setTheme] = useDarkMode();
  const [toggled, setToggled] = React.useState(false);

  const handleLightMode = () => {
    setToggled((p) => !p);
    setTheme("light");
  };
  const handleDarkMode = () => {
    setToggled((p) => !p);
    setTheme("dark");
  };

  return (
    <div>
      <button onClick={toggled ? handleLightMode : handleDarkMode}>
        <span role="button">
          {toggled ? (
            <span role="button">🌕</span>
          ) : (
            <span role="button">🌛</span>
          )}
        </span>
      </button>
    </div>
  );
}
