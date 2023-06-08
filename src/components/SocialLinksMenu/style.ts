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
            height: 100%;
            width: 100%;
        }
    }
`;
const SocialLinksSectionMenu = styled.section`
    ${SocialLinksMenuCommon}
`;

const SocialLogoMenu = styled.img``;

export { SocialLinksMenuCommon, SocialLinksSectionMenu, SocialLogoMenu };
