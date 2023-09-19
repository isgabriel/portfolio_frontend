import downloadImage from "../../assets/general-icons/download-btn/download-btn-mobile-white.svg";
import { homeInfosData } from "../../data/homeInfosData";

import cv from "../../assets/CV/CVGabrielFragosoMontenegro.pdf";

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
                    <a href={cv} download>
                        <span>Baixar currículo</span>
                        <img src={downloadImage} alt="download icon" />
                    </a>
                </CurriculumDiv>
            </SectionBasicInfos>
        </FirstScreenSection>
    );
};

export { HomeInfos };
