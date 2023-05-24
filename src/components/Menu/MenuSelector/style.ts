import { styled } from "styled-components";

const SectionDivs = styled.section`
    position: relative;
    width: 100%;
    max-width: 118px;

    .changeButtonDiv {
        position: absolute;
        top: 5px;
        left: 5px;
        z-index: 10;
        /* width: 100%; */
    }
    .SwitchDiv {
        z-index: 100;
    }
`;

const DivFiguresThemeSelector = styled.div`
    border: 1px solid ${(props) => props.theme.colors.greys.grey5};
    border-radius: 30px;

    width: 100%;
    padding: 2px 4px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    figure {
        width: 40px;
        height: 40px;
    }
`;

const DivButtonChangeTheme = styled.div`
    button {
        background-color: transparent;
        border: none;
    }
    position: absolute;
    top: 5px;
    left: 5px;
`;

export { SectionDivs, DivFiguresThemeSelector, DivButtonChangeTheme };
