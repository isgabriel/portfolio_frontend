import { styled } from "styled-components";
import { SocialLinksMenuCommon } from "../SocialLinksMenu/style";

const SocialLinksSection = styled.section`
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

export { SocialLinksSection };
