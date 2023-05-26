import photoOfMe from "../../assets/photoOfMe/gabriel-photo.svg";

import { aboutMeData } from "../../data/aboutMeData";
import { FigurePhotoMe, SecondScreenSection } from "./style";
import { SectionTitle } from "../../styles/sections";

const AboutMeInfos = () => {
    return (
        <SecondScreenSection>
            <SectionTitle>{aboutMeData.sectionName}</SectionTitle>
            <FigurePhotoMe>
                <img src={photoOfMe} alt="" />
            </FigurePhotoMe>
            <p></p>
            <p></p>
            <div>
                <p></p>
                <span></span>
            </div>
        </SecondScreenSection>
    );
};

export { AboutMeInfos };
