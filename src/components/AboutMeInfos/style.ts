import { styled } from "styled-components";

const SecondScreenSection = styled.section`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 30px;

    max-width: 1200px;

    margin-top: 40px;

    .dev {
        overflow: hidden;

        position: relative;

        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;

        > div {
            position: absolute;
            bottom: -45%;
        }
    }

    .dev > figure {
        background: linear-gradient(
            90deg,
            #102347 0%,
            rgba(30, 47, 148, 0.8) 50%,
            #102347 100%
        );

        width: 250px;
        height: 250px;

        border-radius: 60% 40% 51% 49% / 44% 50% 50% 56%;

        animation: spinningPic 5s linear infinite;

        display: flex;
        align-items: center;
        justify-content: center;

        overflow: hidden;

        transition: 0.3s ease;

        img {
            opacity: 0.8;

            pointer-events: none;
            object-fit: cover;
            width: 110%;
            height: 110%;

            transform: rotate(0deg !important);

            animation: notSpinningPic 5s linear infinite;

            transition: 0.3s ease;
        }
    }

    figure:hover {
        border-radius: 51% 49% 41% 59% / 48% 42% 58% 52%;

        background: none;

        img {
            filter: contrast(1.3);
        }
    }

    @media (min-width: 1100px) {
        > div {
            flex-direction: row;
            justify-content: space-between;
        }
        .dev {
            /* width: 50%; */
            max-width: 320px;
            display: flex;
            justify-content: flex-start;
            figure {
                width: 300px;
                height: 300px;
            }
            > div {
                right: -20%;
                top: 25%;
            }
        }
    }

    @keyframes spinningPic {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @keyframes notSpinningPic {
        from {
            transform: rotate(360deg);
        }
        to {
            transform: rotate(0deg);
        }
    }
`;
const ContainerAboutMe = styled.div`
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    h2 {
        text-align: start;
    }
`;

const AboutMeTextsDiv = styled.div`
    color: ${(props) => props.theme.colors.text};

    display: flex;
    flex-direction: column;
    gap: 25px;

    p {
        font-size: ${(props) => props.theme.texts.text6};
        font-weight: ${(props) => props.theme.weights.regular};

        a {
            color: ${(props) => props.theme.colors.secondary};
            font-weight: ${(props) => props.theme.weights.semiBold};
            text-decoration: underline;
        }
        a:hover {
            color: ${(props) => props.theme.colors.terciary};

            transition: 0.8s;
        }
    }

    @media (min-width: 769px) {
        p {
            font-size: ${(props) => props.theme.texts.text4};
            font-weight: ${(props) => props.theme.weights.medium};

            a {
                font-weight: ${(props) => props.theme.weights.bold};
            }
        }
    }
`;

export { SecondScreenSection, ContainerAboutMe, AboutMeTextsDiv };
