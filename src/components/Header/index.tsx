import closeBtn from "../../assets/general-icons/close-btn/close-btn-mobile.svg";
import moon from "../../assets/theme-icons/moon-theme-icon.svg";
import { FiSun } from "react-icons/fi";

import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext/MenuContext";
import { SocialLinksMenu } from "../SocialLinksMenu";
import { SocialLinksGeneral } from "../SocialLinksGeneral";
import { MenuHamburguer } from "../Menu/MenuHamburguer";

import {
    DivButtonsHeader,
    HeaderStyled,
    MenuButton,
    NavBar,
    TitleHeaderMenu,
    TitlePageHeader,
} from "./style";

import { ThemeChangeContext } from "../../contexts/ThemeContext/ThemeContext";

const iconeProps = {
    size: 40,
};
const Header: React.FC = () => {
    const { menu, handleMenu } = useContext(MenuContext);
    const { theme, toggleTheme } = useContext(ThemeChangeContext);

    return (
        <HeaderStyled>
            {menu ? (
                <NavBar>
                    <TitleHeaderMenu
                        className="titleHeaderHomePage"
                        onClick={() => window.location.reload()}
                    >
                        Gabriel Montenegro
                    </TitleHeaderMenu>
                    <DivButtonsHeader className="divButtonsHeader">
                        <SocialLinksMenu
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        />
                        <MenuButton onClick={handleMenu}>
                            <img src={closeBtn} alt="" />
                        </MenuButton>
                    </DivButtonsHeader>
                </NavBar>
            ) : (
                <NavBar>
                    <TitlePageHeader
                        className="titleHeaderHomePage"
                        onClick={() => window.location.reload()}
                    >
                        Gabriel Montenegro
                    </TitlePageHeader>
                    <div className="navHeader">
                        <a href="#home">Home</a>
                        <a href="#about">Sobre mim</a>
                        <a href="#techs">Tecnologias</a>
                        <a href="#projects">Projetos</a>
                        <a href="#contact">Contato</a>
                        <figure onClick={toggleTheme}>
                            {theme.title === "light" ? (
                                <FiSun {...iconeProps} />
                            ) : (
                                <img src={moon} />
                            )}
                        </figure>
                    </div>
                    <DivButtonsHeader className="divButtonsHeader">
                        <SocialLinksGeneral />
                        <MenuButton onClick={handleMenu}>
                            <MenuHamburguer />
                        </MenuButton>
                    </DivButtonsHeader>
                </NavBar>
            )}
        </HeaderStyled>
    );
};
export { Header };
