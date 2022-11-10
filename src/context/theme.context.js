import { createContext, useState } from "react";

const initialTheme = {
    isDark: false,
    toggleTheme: () => {},
}

export const ThemeContext = createContext(initialTheme);


export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    } 
    
    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
};