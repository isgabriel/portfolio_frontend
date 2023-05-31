import { useContext } from "react";

import { MenuContext } from "../../contexts/MenuContext/MenuContext";
import { MenuPortfolio } from "../../components/Menu";
import { Header } from "../../components/Header";
import { HomeContainer, HomePageSection } from "./style";
import { HomeInfos } from "../../components/HomeInfos";
import { AboutMeInfos } from "../../components/AboutMeInfos";

const Home = () => {
    const { menu } = useContext(MenuContext);

    return (
        <HomeContainer>
            {menu ? (
                <MenuPortfolio />
            ) : (
                <HomePageSection className="aaaeee" data-aos="flip-left">
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
