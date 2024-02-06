import sun from "../../../assets/theme-icons/sun-theme-icon.svg";
import moon from "../../../assets/theme-icons/moon-theme-icon.svg";

import { useContext } from "react";

import { ThemeChangeContext } from "../../../contexts/ThemeContext/ThemeContext";

import { DivFiguresThemeSelector, SectionDivs } from "./style";
import { MenuContext } from "../../../contexts/MenuContext/MenuContext";

const MenuSelector: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeChangeContext);
    const { handleMenu } = useContext(MenuContext);

    const changeTheme = () => {
        toggleTheme();
        setTimeout(() => {
            handleMenu();
        }, 600);
    };
    return (
        <SectionDivs>
            <DivFiguresThemeSelector onClick={changeTheme}>
                <span>MUDAR TEMA</span>
                <figure>
                    <img src={theme.title === "light" ? sun : moon} alt="" />
                </figure>
            </DivFiguresThemeSelector>
        </SectionDivs>
    );
};

export { MenuSelector };
