import sun from "../../../assets/theme-icons/sun-theme-icon.svg";
import moon from "../../../assets/theme-icons/moon-theme-icon.svg";

import { useContext } from "react";

import { ThemeChangeContext } from "../../../contexts/ThemeContext/ThemeContext";
import { ThemeContext } from "styled-components";
import Switch from "react-switch";

import { DivFiguresThemeSelector, SectionDivs } from "./style";

const MenuSelector: React.FC = () => {
    const { toggleTheme } = useContext(ThemeChangeContext);
    const { colors, title } = useContext(ThemeContext);
    return (
        <SectionDivs>
            <Switch
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={52}
                width={140}
                handleDiameter={55}
                offColor={colors.backgroundToggleTheme}
                onColor={colors.backgroundToggleTheme}
                className="SwitchDiv"
            />
            <DivFiguresThemeSelector className="changeButtonDiv">
                <figure>
                    <img src={sun} alt="" />
                </figure>
                <figure>
                    <img src={moon} alt="" />
                </figure>
            </DivFiguresThemeSelector>
        </SectionDivs>
    );
};

export { MenuSelector };
