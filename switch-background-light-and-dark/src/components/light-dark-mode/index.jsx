import useLocalStorage from "./useLocalStorage";
import "./theme.css";
const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <h1>Hello</h1>
        <button onClick={handleToggleTheme}>change theme</button>
      </div>
    </div>
  );
};

export default LightDarkMode;
