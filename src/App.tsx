import { useContext } from "react";

import { ThemeChangeContext } from "./contexts/ThemeContext/ThemeContext";
import { ThemeProvider } from "styled-components";

import { MenuPortfolio } from "./components/Menu";

import GlobalStyle from "./styles/globalStyles";

function App() {
    const { theme } = useContext(ThemeChangeContext);
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MenuPortfolio />
        </ThemeProvider>
    );
}

export default App;
