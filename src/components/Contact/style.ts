import { styled } from "styled-components";

const FifthScreenSection = styled.footer`
    margin: 100px 0 0 0;
    padding: 40px 20px;

    width: 100%;

    background-color: ${(props) => props.theme.colors.greys.grey0};

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;

        width: 100%;

        max-width: 1620px;
    }

    h2,
    p {
        color: ${(props) => props.theme.colors.greys.grey7};
    }
    p {
        font-weight: ${(props) => props.theme.weights.regular};
    }

    @media (min-width: 769px) {
        padding: 40px 65px;
        > div {
            flex-direction: row;
            justify-content: space-between;

            > section {
                gap: 40px;
                a {
                    width: 40px;
                    height: 40px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
`;

const DivContactDescAndSocials = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    /* max-width: 480px; */
`;

const ButtonOpenModal = styled.button`
    background-color: transparent;
    color: ${(props) => props.theme.colors.greys.grey5};

    text-decoration: underline;
    font-weight: ${(props) => props.theme.weights.bold};

    &:hover {
        color: ${(props) => props.theme.colors.terciary};
        transition: 0.6s;
    }
`;

export { FifthScreenSection, DivContactDescAndSocials, ButtonOpenModal };
