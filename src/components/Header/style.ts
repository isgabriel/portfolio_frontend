import { styled } from "styled-components";

const HeaderStyled = styled.header`
    width: 100%;
    max-width: 1620px;

    position: sticky;
    top: 18px;
    z-index: 1000;
`;
const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: 100%;

    @media (min-width: 769px) {
        a {
            font-size: ${(props) => props.theme.titles.title4};
        }

        .divButtonsHeader {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;

            width: 260px;
            height: 43px;

            section {
                display: flex;
                flex-direction: row;
                height: 100%;
            }

            button {
                position: absolute;
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

const TitleHeaderMenu = styled.a`
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

const TitlePageHeader = styled.a`
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
