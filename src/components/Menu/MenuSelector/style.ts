import { styled } from "styled-components";

const SectionDivs = styled.section`
    cursor: pointer;

    @media (min-width: 769px) {
        button {
            margin: 50px 0;
            gap: 35px;

            font-size: ${(props) => props.theme.titles.title3};

            figure {
                width: 50px;
                height: 50px;
            }
        }
    }
`;

const DivFiguresThemeSelector = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.colors.greys.grey7};

    max-width: 100%;
    margin: 25px 0 10px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 10px;

    figure {
        width: 40px;
        height: 40px;

        img {
            width: 100%;
            height: 100%;
        }
    }
`;

export { SectionDivs, DivFiguresThemeSelector };
