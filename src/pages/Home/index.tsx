import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext/MenuContext";
import { MenuPortfolio } from "../../components/Menu";
import { Header } from "../../components/Header";
import { HomeContainer, HomePageSection } from "./style";
import { HomeInfos } from "../../components/HomeInfos";
import { AboutMeInfos } from "../../components/AboutMeInfos";
import { Technologies } from "../../components/Technologies";
import { Projects } from "../../components/Projects";
import { Contact } from "../../components/Contact";
import { ModalContact } from "../../components/ModalContact";
import { ModalContext } from "../../contexts/ModalContext";

const Home = () => {
    const { isOpen } = useContext(ModalContext);
    const { menu } = useContext(MenuContext);

    return (
        <HomeContainer>
            {menu ? (
                <MenuPortfolio />
            ) : (
                <>
                    {isOpen && <ModalContact />}
                    <HomePageSection className="aaaeee" data-aos="flip-left">
                        <Header />
                        <main>
                            <HomeInfos />
                            <AboutMeInfos />
                            <Technologies />
                            <Projects />
                        </main>

                        <Contact />
                    </HomePageSection>
                </>
            )}
        </HomeContainer>
    );
};

export { Home };
