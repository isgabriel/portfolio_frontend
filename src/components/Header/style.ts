import { styled } from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colors.backgroundHeader};

    width: 100%;
    max-width: 1620px;

    position: sticky;
    top: 0;
    z-index: 1000;
`;
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    max-width: 1620px;
    .navHeader {
        display: none;
    }

    @media (min-width: 769px) {
        .titleHeaderHomePage {
            font-size: ${(props) => props.theme.titles.title4};
        }
        .navHeader {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            align-items: center;
            gap: 2%;

            min-width: 50%;

            > a {
                font-family: "Jost", sans-serif;
                font-weight: 700;
                font-size: 24px;
                text-transform: uppercase;

                color: ${(props) => props.theme.colors.text};
            }
            > figure {
                cursor: pointer;
            }
        }

        .divButtonsHeader {
            position: relative;
            display: none;
            justify-content: space-between;
            align-items: center;

            width: 260px;
            height: 43px;

            section {
                display: flex;
                flex-direction: row;
            }

            button {
                /* position: absolute; */
                right: 0;
                bottom: 0;
            }

            button > img {
                width: 20px;
            }
        }
    }
    @media (min-width: 1200px) {
        padding: 0;
    }
`;

const TitleHeaderMenu = styled.button`
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.greys.grey7};
`;

const DivButtonsHeader = styled.div`
    section {
        display: none;
    }
`;

const MenuButton = styled.button`
    background-color: transparent;

    border: none;

    display: flex;
`;

const TitlePageHeader = styled.button`
    background-color: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.text};
`;

export {
    HeaderStyled,
    NavBar,
    DivButtonsHeader,
    TitleHeaderMenu,
    MenuButton,
    TitlePageHeader,
};
