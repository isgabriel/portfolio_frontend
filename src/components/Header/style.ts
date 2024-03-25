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

        > li {
            position: relative;

            display: flex;
            align-items: center;
            justify-content: center;

            > a {
                /* position: relative; */
                transition: 0.3s ease;
                padding: 10px;
            }
            a::after {
                content: "";
                height: 4px;
                position: absolute;
                bottom: -2px;
                left: 0;
                width: 0px;

                transition: 0.3s ease;

                background-color: ${(props) => props.theme.colors.primary};
                box-shadow: 0 0 10px 0 ${(props) => props.theme.colors.primary};
            }
            > span {
                position: absolute;
                /* left: 0; */
                top: 58px;

                pointer-events: none;

                opacity: 0;
                transform: translateY(100px);
                /* transition: 0.3s ease; */

                background-color: ${(props) =>
                    props.theme.colors.backgroundHeader};
                color: ${(props) => props.theme.colors.text};

                padding: 10px;

                font-size: ${(props) => props.theme.titles.title5};
                font-weight: ${(props) => props.theme.weights.semiBold};

                text-align: center;
            }

            &:hover {
                > a {
                    color: ${(props) => props.theme.colors.text};
                }
                a::after {
                    width: 100%;
                }
                > span {
                    transition: 0.3s ease;

                    opacity: 1;
                    transform: translateY(0);
                }
            }
        }
        > figure {
            cursor: pointer;
            > img {
                pointer-events: none;

                transition: 1s ease;
            }
        }
        figure:hover img {
            filter: brightness(1.2);
            transform: rotate(360deg);
        }
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

            > li {
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

const TitleHeaderMenu = styled.a`
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

const TitlePageHeader = styled.a`
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
