import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [webTheme, setWebTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ setWebTheme, webTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;