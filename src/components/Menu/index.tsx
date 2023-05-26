import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext/MenuContext";
import { Header } from "../Header";
import { MenuSelector } from "./MenuSelector";
import { SocialLinksMenu } from "../SocialLinksMenu";

import {
    ListMenu,
    ListMenuOptions,
    ListThemeChanger,
    MenuAnchors,
    MenuSection,
} from "./style";

const MenuPortfolio: React.FC = () => {
    const { handleMenu } = useContext(MenuContext);

    return (
        <MenuSection data-aos="flip-right" data-aos-duration="1000">
            <Header />
            <div>
                <ListMenu>
                    <ListThemeChanger
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <MenuSelector />
                    </ListThemeChanger>
                    <ListMenuOptions
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <MenuAnchors href="#home" onClick={handleMenu}>
                            HOME
                        </MenuAnchors>
                    </ListMenuOptions>
                    <ListMenuOptions
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <MenuAnchors href="#about" onClick={handleMenu}>
                            SOBRE MIM
                        </MenuAnchors>
                    </ListMenuOptions>
                    <ListMenuOptions
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <MenuAnchors href="#projects" onClick={handleMenu}>
                            PROJETOS
                        </MenuAnchors>
                    </ListMenuOptions>
                    <ListMenuOptions
                        data-aos="fade-right"
                        data-aos-duration="1500"
                    >
                        <MenuAnchors href="#contact" onClick={handleMenu}>
                            CONTATO
                        </MenuAnchors>
                    </ListMenuOptions>
                </ListMenu>
                <SocialLinksMenu />
            </div>
        </MenuSection>
    );
};

export { MenuPortfolio };
