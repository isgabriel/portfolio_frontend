import downloadImage from "../../assets/general-icons/download-btn/download-btn-mobile-white.svg";
import { homeInfosData } from "../../data/homeInfosData";

import {
    BigLineSeparation,
    FirstScreenSection,
    NameTitleHome,
    PositionSubtitleHome,
    PresentationFirstScreen,
    SectionBasicInfos,
    CurriculumDiv,
} from "./style";

const HomeInfos = () => {
    return (
        <FirstScreenSection id="home">
            <NameTitleHome>GABRIEL MONTENEGRO</NameTitleHome>

            <SectionBasicInfos>
                <BigLineSeparation />

                <PositionSubtitleHome>
                    {homeInfosData.position}
                </PositionSubtitleHome>
                <PresentationFirstScreen>
                    {homeInfosData.description}
                </PresentationFirstScreen>
                <BigLineSeparation />

                <CurriculumDiv className="curriculumBtnDiv">
                    <a
                        href="https://drive.google.com/file/d/1THcDPiUTXUQ-r-S5PBKrNSQHi4XcTeo9/view?usp=sharing"
                        target="_blank"
                    >
                        <span>Visualizar Curriculum</span>
                        <img src={downloadImage} alt="" />
                    </a>
                </CurriculumDiv>
            </SectionBasicInfos>
        </FirstScreenSection>
    );
};

export { HomeInfos };
