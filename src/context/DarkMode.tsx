import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

export const DarkModeContext = createContext<{
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  darkMode: false,
  setDarkMode: () => {},
});

export const DarkModeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ? true : false
  );

  useEffect(() => {
    document.getElementsByTagName("html")[0].className = darkMode ? "dark" : "";

    // Whenever the user explicitly chooses light mode
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  useEffect(() => {
    // console.log(localStorage.getItem("theme"));
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
