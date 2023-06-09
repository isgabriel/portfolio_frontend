import { css, styled } from "styled-components";

const SectionTitle = css`
    font-size: ${(props) => props.theme.titles.title4};
    font-weight: ${(props) => props.theme.weights.bold};

    color: ${(props) => props.theme.colors.text};

    /* text-align: center; */
`;
const SectionTitleMedium = styled.h2`
    ${SectionTitle}
`;
const SectionTitleBig = styled.h2`
    ${SectionTitle}
    @media(min-width:769px) {
        font-size: ${(props) => props.theme.titles.title2};
    }
`;

export { SectionTitleMedium, SectionTitleBig };
