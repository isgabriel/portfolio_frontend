import photoOfMe from "../../assets/photoOfMe/gabriel-photo-2.jpg";

import { SectionTitle } from "../../styles/sections";
import { aboutMeData } from "../../data/aboutMeData";

import {
    AboutMeTextsDiv,
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
                    <SectionTitle>{aboutMeData.sectionName}</SectionTitle>
                    <p>{aboutMeData.paragraph1}</p>
                    <p>{aboutMeData.paragraph2}</p>
                    <p>
                        {aboutMeData.paragraph3}
                        <a href="#contact">{aboutMeData.workTogether}</a>
                    </p>
                </AboutMeTextsDiv>
            </ContainerAboutMe>
        </SecondScreenSection>
    );
};

export { AboutMeInfos };
