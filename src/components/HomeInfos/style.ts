import { styled } from "styled-components";

const FirstScreenSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;

    max-width: 1620px;

    .sectionCVButtons {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    @media (min-width: 769px) {
        gap: 80px;

        > div {
            gap: 60px;
        }
        h1 {
            margin-top: 50px;
            font-size: ${(props) => props.theme.titles.title1};
        }
        h2 {
            font-size: ${(props) => props.theme.subtitles.subTitle1};
        }
        p {
            font-size: ${(props) => props.theme.texts.text2};
        }
        .sectionCVButtons {
            flex-direction: row;

            width: 100%;

            .curriculumBtnDiv {
                height: 52px;
                margin-top: 30px;
                width: 350px;
                a {
                    font-size: ${(props) => props.theme.texts.text3};

                    img {
                        width: 20px;
                        height: 20px;
                    }
                }
            }
        }
    }
`;

const NameTitleHome = styled.h1`
    font-size: ${(props) => props.theme.titles.title4};
    font-weight: ${(props) => props.theme.weights.bold};

    color: ${(props) => props.theme.colors.text};
`;

const SectionBasicInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    color: ${(props) => props.theme.colors.text};
`;
const PositionSubtitleHome = styled.h2`
    font-size: ${(props) => props.theme.subtitles.subTitle3};
    font-weight: ${(props) => props.theme.weights.semiBold};
`;
const PresentationFirstScreen = styled.p`
    font-size: ${(props) => props.theme.texts.text6};
    font-weight: ${(props) => props.theme.weights.regular};
`;

const BigLineSeparation = styled.div`
    width: 100%;
    max-width: 1620px;
    height: 2px;
    background-color: ${(props) => props.theme.colors.primary};
`;

const CurriculumDiv = styled.div`
    cursor: pointer;

    background-color: ${(props) => props.theme.colors.primary};

    border-radius: ${(props) => props.theme.radius.btnCurriculum};

    padding: 11px 0;

    max-width: 342px;

    &:hover {
        background-color: ${(props) => props.theme.colors.terciary};
        transition: 0.6s;
    }

    a {
        width: 100%;
        height: 100%;

        color: ${(props) => props.theme.colors.greys.grey7};

        font-size: ${(props) => props.theme.texts.text7};
        font-weight: ${(props) => props.theme.weights.regular};

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 12px;
    }
`;

export {
    FirstScreenSection,
    NameTitleHome,
    SectionBasicInfos,
    PositionSubtitleHome,
    PresentationFirstScreen,
    BigLineSeparation,
    CurriculumDiv,
};
