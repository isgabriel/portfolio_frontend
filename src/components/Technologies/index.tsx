import { useState } from "react";
import { technologiesData } from "../../data/technologiesData";
import { ListTechnologies, ThirdScreenSection } from "./style";
import { SectionTitleBig } from "../../styles/sections";

const Technologies = () => {
    const [techDescription, setTechDescription] = useState("");

    return (
        <ThirdScreenSection id="techs">
            <SectionTitleBig>TECNOLOGIAS</SectionTitleBig>
            <ListTechnologies>
                {technologiesData.map((tech, index) => {
                    return (
                        <li
                            data-aos="fade-right"
                            data-aos-delay={`${index * 75}`}
                            onMouseLeave={() => setTechDescription("")}
                            onMouseEnter={() =>
                                setTechDescription(tech.description)
                            }
                            key={index}
                        >
                            <figure>
                                <img src={tech.img} alt={tech.name} />
                            </figure>
                            <h4>{tech.name}</h4>
                        </li>
                    );
                })}
            </ListTechnologies>
            <p>{techDescription}</p>
        </ThirdScreenSection>
    );
};

export { Technologies };
