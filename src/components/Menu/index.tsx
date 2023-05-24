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
        <MenuSection>
            <Header />
            <div>
                <ListMenu>
                    <ListThemeChanger>
                        <MenuSelector />
                    </ListThemeChanger>
                    <ListMenuOptions>
                        <MenuAnchors href="#home" onClick={handleMenu}>
                            HOME
                        </MenuAnchors>
                    </ListMenuOptions>
                    <ListMenuOptions>
                        <MenuAnchors href="#about" onClick={handleMenu}>
                            SOBRE MIM
                        </MenuAnchors>
                    </ListMenuOptions>
                    <ListMenuOptions>
                        <MenuAnchors href="#projects" onClick={handleMenu}>
                            PROJETOS
                        </MenuAnchors>
                    </ListMenuOptions>
                    <ListMenuOptions>
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
