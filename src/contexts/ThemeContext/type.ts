import { DefaultTheme } from "styled-components/dist/types";

interface iThemeContext {
    theme: DefaultTheme;
    setTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>;
    toggleTheme: () => void;
}

export type { iThemeContext };
