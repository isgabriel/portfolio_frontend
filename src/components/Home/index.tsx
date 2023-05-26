import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext/MenuContext";
import { MenuPortfolio } from "../Menu";
import { Header } from "../Header";
import { HomeContainer, HomePageSection } from "./style";
import { HomeInfos } from "../HomeInfos";
import { AboutMeInfos } from "../AboutMeInfos";

const Home = () => {
    const { menu } = useContext(MenuContext);

    return (
        <HomeContainer>
            {menu ? (
                <MenuPortfolio />
            ) : (
                <HomePageSection data-aos="flip-left">
                    <Header />
                    <main>
                        <HomeInfos />
                        <AboutMeInfos />
                    </main>
                </HomePageSection>
            )}
        </HomeContainer>
    );
};

export { Home };
