import { createContext, useState, useEffect } from "react";

export const SkinContext = createContext();

export function SkinProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <SkinContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </SkinContext.Provider>
  );
}
