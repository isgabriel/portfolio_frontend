import { createContext } from "react";

import { iThemeContext } from "./type";

import { usePersistedState } from "../../hooks/usePersistedState";
import { DefaultTheme } from "styled-components";

import light from "../../styles/themes/lightTheme";
import dark from "../../styles/themes/darkTheme";

export const ThemeChangeContext = createContext({} as iThemeContext);

const ThemeChangeProvider = ({ children }: { children: JSX.Element }) => {
    const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeChangeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeChangeContext.Provider>
    );
};

export { ThemeChangeProvider };
