import downloadImage from "../../assets/general-icons/download-btn/download-btn-mobile-white.svg";
import { RiShareBoxFill } from "react-icons/ri";
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

                <section className="sectionCVButtons">
                    <CurriculumDiv className="curriculumBtnDiv">
                        <a href={cv} download>
                            <span>Baixar currículo</span>
                            <img src={downloadImage} alt="download icon" />
                        </a>
                    </CurriculumDiv>
                    <CurriculumDiv className="curriculumBtnDiv">
                        <a href={cv} target="_blank">
                            <span>Visualizar currículo</span>
                            <RiShareBoxFill />
                        </a>
                    </CurriculumDiv>
                </section>
            </SectionBasicInfos>
        </FirstScreenSection>
    );
};

export { HomeInfos };
