import { styled } from "styled-components";

const MenuSection = styled.section`
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};

    min-height: 100vh;
    max-width: 100%;

    padding: 18px 20px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 769px) {
        div > section {
            display: none;
        }
    }
`;

const ListMenu = styled.ul`
    margin: 30px 0;

    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 50px;
    @media (min-width: 769px) {
        gap: 100px;

        li {
            a {
                font-size: ${(props) => props.theme.titles.title1};
            }
        }
    }
`;

const ListThemeChanger = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListMenuOptions = styled.li`
    text-align: center;
`;

const MenuAnchors = styled.a`
    text-decoration: none;

    color: ${(props) => props.theme.colors.greys.grey7};

    font-size: ${(props) => props.theme.titles.title3};
    font-weight: ${(props) => props.theme.weights.medium};
`;

export {
    MenuSection,
    ListMenu,
    ListThemeChanger,
    ListMenuOptions,
    MenuAnchors,
};
