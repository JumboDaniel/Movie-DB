import React from "react";
import ThemeContext from "../context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitch = () => {
  const { currentTheme, changeCurrentTheme } = React.useContext(ThemeContext);
  const [isDarkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = (checked) => {
    changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      style={{ marginTop: '0.5rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={26}
    />
  );
};

export default ThemeSwitch;
