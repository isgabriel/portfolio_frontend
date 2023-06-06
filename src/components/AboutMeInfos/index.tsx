import photoOfMe from "../../assets/photoOfMe/gabriel-photo-2.jpg";

import { SectionTitleMedium } from "../../styles/sections";
import { aboutMeData } from "../../data/aboutMeData";

import {
    AboutMeTextsDiv,
    AnchorWithRedirectStyled,
    ContainerAboutMe,
    SecondScreenSection,
} from "./style";

const AboutMeInfos = () => {
    return (
        <SecondScreenSection id="about">
            <ContainerAboutMe>
                <div className="dev">
                    <figure>
                        <img src={photoOfMe} alt="Gabriel Montenegro" />
                    </figure>
                </div>
                <AboutMeTextsDiv>
                    <SectionTitleMedium>
                        {aboutMeData.sectionName}
                    </SectionTitleMedium>
                    <p>{aboutMeData.paragraph1}</p>
                    <p>{aboutMeData.paragraph2}</p>
                    <p>
                        {aboutMeData.paragraph3}
                        <AnchorWithRedirectStyled href="#contact">
                            {aboutMeData.workTogether}
                        </AnchorWithRedirectStyled>
                    </p>
                </AboutMeTextsDiv>
            </ContainerAboutMe>
        </SecondScreenSection>
    );
};

export { AboutMeInfos };
