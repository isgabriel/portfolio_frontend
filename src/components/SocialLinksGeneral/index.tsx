import githubLogoWhite from "../../assets/social-icons-white/23x23/github-23x23-white.svg";
import instagramLogoWhite from "../../assets/social-icons-white/23x23/instagram-23x23-white.svg";
import whatsappLogoWhite from "../../assets/social-icons-white/23x23/whatsapp-23x23-white.svg";
import linkedinLogoWhite from "../../assets/social-icons-white/23x23/linkedin-23x23-white.svg";

import githubLogoBlack from "../../assets/social-icons-black/23x23/github-23x23-black.svg";
import instagramLogoBlack from "../../assets/social-icons-black/23x23/instagram-23x23-black.svg";
import whatsappLogoBlack from "../../assets/social-icons-black/23x23/whatsapp-23x23-black.svg";
import linkedinLogoBlack from "../../assets/social-icons-black/23x23/linkedin-23x23-black.svg";

import { useContext } from "react";

import { ThemeChangeContext } from "../../contexts/ThemeContext/ThemeContext";

import { SocialLinksSection } from "./style";
import { SocialLogoMenu } from "../SocialLinksMenu/style";

const SocialLinksGeneral: React.FC = () => {
    const { theme } = useContext(ThemeChangeContext);
    return (
        <SocialLinksSection>
            <a href="https://github.com/isgabriel" target="_blank">
                <SocialLogoMenu
                    src={
                        theme.title === "light"
                            ? githubLogoBlack
                            : githubLogoWhite
                    }
                    alt="github-btn"
                />
            </a>
            <a href="https://www.instagram.com/itsgabrieldev/" target="_blank">
                <SocialLogoMenu
                    src={
                        theme.title === "light"
                            ? instagramLogoBlack
                            : instagramLogoWhite
                    }
                    alt="instagram-btn"
                />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=5581999193383&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20na%20internet%20e%20gostaria%20de%20conhecer%20mais%20dos%20seus%20servi%C3%A7os."
                target="_blank"
            >
                <SocialLogoMenu
                    src={
                        theme.title === "light"
                            ? whatsappLogoBlack
                            : whatsappLogoWhite
                    }
                    alt="whatsapp-btn"
                />
            </a>
            <a
                href="https://www.linkedin.com/in/gabriel-montenegro-dev/"
                target="_blank"
            >
                <SocialLogoMenu
                    src={
                        theme.title === "light"
                            ? linkedinLogoBlack
                            : linkedinLogoWhite
                    }
                    alt="linkedin-btn"
                />
            </a>
        </SocialLinksSection>
    );
};
export { SocialLinksGeneral };
