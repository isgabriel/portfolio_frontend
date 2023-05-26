import sun from "../../../assets/theme-icons/sun-theme-icon.svg";
import moon from "../../../assets/theme-icons/moon-theme-icon.svg";

import { useContext } from "react";

import { ThemeChangeContext } from "../../../contexts/ThemeContext/ThemeContext";

import { DivFiguresThemeSelector, SectionDivs } from "./style";

const MenuSelector: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeChangeContext);

    return (
        <SectionDivs>
            <DivFiguresThemeSelector onClick={toggleTheme}>
                <span>MUDAR TEMA</span>
                <figure>
                    <img src={theme.title === "light" ? sun : moon} alt="" />
                </figure>
            </DivFiguresThemeSelector>
        </SectionDivs>
    );
};

export { MenuSelector };
