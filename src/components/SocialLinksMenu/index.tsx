import githubLogoWhite from "../../assets/social-icons-white/23x23/github-23x23-white.svg";
import instagramLogo from "../../assets/social-icons-white/23x23/instagram-23x23-white.svg";
import whatsappLogo from "../../assets/social-icons-white/23x23/whatsapp-23x23-white.svg";
import linkedinLogo from "../../assets/social-icons-white/23x23/linkedin-23x23-white.svg";

import { SocialLinksSectionMenu, SocialLogoMenu } from "./style";

const SocialLinksMenu: React.FC = () => {
    return (
        <SocialLinksSectionMenu data-aos="fade-right" data-aos-duration="1500">
            <a href="https://github.com/isgabriel" target="_blank">
                <SocialLogoMenu src={githubLogoWhite} alt="github-btn" />
            </a>
            <a href="https://www.instagram.com/itsgabrieldev/" target="_blank">
                <SocialLogoMenu src={instagramLogo} alt="instagram-btn" />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=5581999193383&text=Ol%C3%A1!%20Vi%20seu%20portf%C3%B3lio%20na%20internet%20e%20gostaria%20de%20conhecer%20mais%20dos%20seus%20servi%C3%A7os."
                target="_blank"
            >
                <SocialLogoMenu src={whatsappLogo} alt="whatsapp-btn" />
            </a>
            <a
                href="https://www.linkedin.com/in/gabriel-montenegro-dev/"
                target="_blank"
            >
                <SocialLogoMenu src={linkedinLogo} alt="linkedin-btn" />
            </a>
        </SocialLinksSectionMenu>
    );
};
export { SocialLinksMenu };
