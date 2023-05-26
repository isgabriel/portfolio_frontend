import { useContext, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import { ThemeChangeContext } from "./contexts/ThemeContext/ThemeContext";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles/globalStyles";
import { Home } from "./components/Home";

function App() {
    const { theme } = useContext(ThemeChangeContext);

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Home />
        </ThemeProvider>
    );
}

export default App;
