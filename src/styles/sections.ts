import { styled } from "styled-components";

const SectionTitle = styled.h2`
    font-size: ${(props) => props.theme.titles.title4};
    font-weight: ${(props) => props.theme.weights.bold};

    color: ${(props) => props.theme.colors.text};

    text-align: center;
`;

export { SectionTitle };
