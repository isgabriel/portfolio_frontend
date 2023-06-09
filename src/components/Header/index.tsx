import closeBtn from "../../assets/general-icons/close-btn/close-btn-mobile.svg";

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

const Header: React.FC = () => {
    const { menu, handleMenu } = useContext(MenuContext);
    return (
        <HeaderStyled>
            {menu ? (
                <NavBar>
                    <TitleHeaderMenu
                        className="titleHeaderHomePage"
                        href="home"
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
                        href="home"
                    >
                        Gabriel Montenegro
                    </TitlePageHeader>
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
