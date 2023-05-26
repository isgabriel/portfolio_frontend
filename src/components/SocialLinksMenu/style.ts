import { css, styled } from "styled-components";

const SocialLinksMenuCommon = css`
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
    justify-content: center;
    a {
        height: 25px;
        width: 25px;
        img {
            height: 25px;
            width: 25px;
        }
    }
`;
const SocialLinksSectionMenu = styled.section`
    ${SocialLinksMenuCommon}
    @media (min-width: 1260px) {
        a {
            width: 40px;
            height: 40px;
            img {
                width: 40px;
                height: 40px;
            }
        }
    }
`;

const SocialLogoMenu = styled.img``;

export { SocialLinksMenuCommon, SocialLinksSectionMenu, SocialLogoMenu };
