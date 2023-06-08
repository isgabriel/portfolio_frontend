import deployIcon from "../../assets/general-icons/deploy-btn/Framedeploy-icon.svg";
import githubIcon from "../../assets/social-icons-black/23x23/github-23x23-black.svg";

import { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";

import { projectsData } from "../../data/projetsData";
import { SectionTitleBig } from "../../styles/sections";
import { AnchorWithRedirectStyled } from "../AboutMeInfos/style";
import { ModalContact } from "../ModalContact";
import {
    FourthScreenSection,
    ListOfProjects,
    ProjectDivInfos,
    ProjectInfosContainer,
    ProjectItem,
    ProjectPhotoFigure,
    ProjectTechsAndButtonsDiv,
    ProjectTechsDiv,
    ProjectsButtonsDiv,
} from "./style";

const Projects = () => {
    // const { isOpen } = useContext(ModalContext);
    const toggleReverse = (num: number) => {
        if (num % 2 !== 0) {
            return "reverse-align";
        }
    };

    return (
        <FourthScreenSection>
            <SectionTitleBig>PROJETOS</SectionTitleBig>
            <p>
                Aqui estão listados alguns dos meus projetos favoritos. Se
                desejar, pode{" "}
                <AnchorWithRedirectStyled
                    href="https://github.com/isgabriel"
                    target="_blank"
                >
                    acessar aqui
                </AnchorWithRedirectStyled>{" "}
                para visualizar todos os meus projetos no Github.
            </p>
            <ListOfProjects>
                {projectsData.map((project, index) => {
                    return (
                        <ProjectItem
                            key={index}
                            className={toggleReverse(index)}
                        >
                            <ProjectPhotoFigure>
                                <img src={project.img} alt="" />
                            </ProjectPhotoFigure>
                            <ProjectInfosContainer>
                                <div>
                                    <ProjectDivInfos>
                                        <h4>{project.name}</h4>
                                        <p>{project.description}</p>
                                    </ProjectDivInfos>
                                    <ProjectTechsAndButtonsDiv>
                                        <ProjectTechsDiv>
                                            <img
                                                src={project.techs.tech1}
                                                alt=""
                                            />
                                            <img
                                                src={project.techs.tech2}
                                                alt=""
                                            />
                                            <img
                                                src={project.techs.tech3}
                                                alt=""
                                            />
                                        </ProjectTechsDiv>
                                        <ProjectsButtonsDiv>
                                            <a
                                                href={project.deploy}
                                                target="_blank"
                                            >
                                                <img
                                                    src={deployIcon}
                                                    alt="Visit the project"
                                                />
                                            </a>
                                            <a
                                                href={project.repository}
                                                target="_blank"
                                            >
                                                <img src={githubIcon} alt="" />
                                            </a>
                                        </ProjectsButtonsDiv>
                                    </ProjectTechsAndButtonsDiv>
                                </div>
                            </ProjectInfosContainer>
                        </ProjectItem>
                    );
                })}
            </ListOfProjects>
        </FourthScreenSection>
    );
};

export { Projects };
