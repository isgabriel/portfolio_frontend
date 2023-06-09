import { styled } from "styled-components";

const FourthScreenSection = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;

    width: 100%;

    > p {
        width: 100%;
        font-size: ${(props) => props.theme.texts.text5};
        font-weight: ${(props) => props.theme.weights.regular};
        color: ${(props) => props.theme.colors.text};

        a {
            color: ${(props) => props.theme.colors.secondary};
            font-weight: ${(props) => props.theme.weights.semiBold};
            text-decoration: underline;
        }
    }

    @media (min-width: 769px) {
        gap: 40px;

        > p {
            font-size: ${(props) => props.theme.texts.text2};
        }
    }
`;
const ListOfProjects = styled.ul`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;

    gap: 100px;

    @media (min-width: 900px) {
        gap: 160px;
        li {
            width: 50%;
            max-width: 500px;

            h4 {
                font-size: ${(props) => props.theme.titles.title4};
            }
            p {
                font-size: ${(props) => props.theme.texts.text6};
            }

            > div {
                right: -40%;
            }
        }

        .reverse-align {
            figure {
                transform: translateX(222px);
            }

            > div {
                bottom: -20%;
                left: 0;
            }
        }
    }
`;
const ProjectItem = styled.li`
    display: flex;
    flex-direction: column;

    width: 100%;

    position: relative;

    cursor: default;

    color: ${(props) => props.theme.colors.greys.grey0};
`;

const ProjectPhotoFigure = styled.figure`
    width: 100%;
    max-width: 500px;
    height: 300px;

    opacity: 0.65;
    overflow: hidden;
    transition: all 0.5s ease 0s;

    border-radius: ${(props) => props.theme.radius.default};

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 100%;
        height: 100%;

        object-fit: cover;
    }
    &:hover {
        transition: 0.6s;
        opacity: 1;
    }
`;

const ProjectInfosContainer = styled.div`
    background-color: rgba(250, 250, 250, 0.25);
    box-shadow: rgba(0, 0, 0, 0.3) -3px 5px 10px 0px;

    backdrop-filter: blur(32px);
    transition: all 0.3s ease 0s;

    border-radius: ${(props) => props.theme.radius.default};
    border: 2px solid ${(props) => props.theme.colors.primary};

    max-width: 400px;
    width: 100%;

    position: absolute;
    bottom: -80px;

    > div {
        padding: 10px 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        /* width: 100%; */
    }

    &:hover {
        transform: translateY(1px) translateX(-1px);
        transition: 0.2s ease;
        box-shadow: none;
    }
`;
const ProjectDivInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
        font-size: ${(props) => props.theme.titles.title5};
        font-weight: ${(props) => props.theme.weights.bold};
    }

    p {
        font-size: ${(props) => props.theme.texts.text7};
        font-weight: ${(props) => props.theme.weights.regular};
    }
`;
const ProjectTechsAndButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;

    width: 100%;
    @media (min-width: 769px) {
        div {
            gap: 12px;

            img,
            a > img {
                width: 22px;
                height: 22px;
            }
        }
    }
`;

const ProjectTechsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

    img {
        width: 18px;
        height: 18px;
    }
`;

const ProjectsButtonsDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;

    a {
        width: 18px;
        height: 18px;
    }
    a img {
        width: 18px;
        height: 18px;
    }
`;

export {
    FourthScreenSection,
    ListOfProjects,
    ProjectItem,
    ProjectPhotoFigure,
    ProjectInfosContainer,
    ProjectDivInfos,
    ProjectTechsAndButtonsDiv,
    ProjectTechsDiv,
    ProjectsButtonsDiv,
};
