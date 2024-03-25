import closeBtn from "../../assets/general-icons/close-btn/close-btn-mobile.svg";
import moon from "../../assets/theme-icons/moon-theme-icon.svg";
import sun from "../../assets/theme-icons/sun-black-icon.svg";

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

const Header: React.FC = () => {
    const { menu, handleMenu } = useContext(MenuContext);
    const { theme, toggleTheme } = useContext(ThemeChangeContext);

    return (
        <HeaderStyled>
            {menu ? (
                <NavBar>
                    <TitleHeaderMenu
                        className="titleHeaderHomePage"
                        href="#home"
                        onClick={handleMenu}
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
                        href="#home"
                    >
                        Gabriel Montenegro
                    </TitlePageHeader>
                    <ul className="navHeader">
                        <li data-aos="fade-left" data-aos-delay="100">
                            <a href="#home">01</a>
                            <span>Home</span>
                        </li>
                        <li data-aos="fade-left" data-aos-delay="200">
                            <a href="#about">02</a>
                            <span>Sobre</span>
                        </li>
                        <li data-aos="fade-left" data-aos-delay="300">
                            <a href="#techs">03</a>
                            <span>Tecnologias</span>
                        </li>
                        <li data-aos="fade-left" data-aos-delay="400">
                            <a href="#projects">04</a>
                            <span>Projetos</span>
                        </li>
                        <li data-aos="fade-left" data-aos-delay="500">
                            <a href="#contact">05</a>
                            <span>Contato</span>
                        </li>
                        <figure onClick={toggleTheme}>
                            {theme.title === "light" ? (
                                <img src={sun} />
                            ) : (
                                <img src={moon} />
                            )}
                        </figure>
                    </ul>
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
