import { styled } from "styled-components";

const ThirdScreenSection = styled.section`
    min-height: 85vh;
    max-width: 1620px;

    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;

    h2 {
        width: 100%;
    }

    p {
        margin-top: 60px;
        height: 40px;

        transform: translateY(-20px);
        transition: 0.3s ease;

        color: ${(props) => props.theme.colors.text};
        font-size: ${(props) => props.theme.texts.text5};
        line-height: 150%;

        animation: displayDescription 1s ease;
    }

    @keyframes displayDescription {
        from {
            opacity: 0;
            transform: translateY(3px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (min-width: 769px) {
        ul {
            gap: 20px;

            li {
                flex-direction: row;

                figure {
                    width: 70px;
                    height: 70px;
                }
                h4 {
                    font-size: ${(props) => props.theme.texts.text2};
                    /* display: inline; */
                }
            }
        }
        p {
            font-size: ${(props) => props.theme.texts.text3};
        }
    }
`;
const ListTechnologies = styled.ul`
    min-width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;

        width: 30%;
        height: 100px;

        opacity: 0.8;

        position: relative;

        figure {
            min-width: 50px;
            width: 50px;
            min-height: 50px;
            height: 50px;

            filter: grayscale(1);
            opacity: 0.5;

            overflow: hidden;
            transition: 0.3s ease;

            img {
                min-width: 100%;
                width: 100%;
                min-height: 100%;
                height: 100%;
                object-fit: contain;
            }
        }
        h4 {
            font-size: ${(props) => props.theme.texts.text4};
            font-weight: ${(props) => props.theme.weights.medium};

            color: ${(props) => props.theme.colors.greys.grey2};

            cursor: default;
        }
    }
    li:hover {
        figure {
            filter: grayscale(0);
            opacity: 1;
        }

        h4 {
            color: ${(props) => props.theme.colors.secondary};
        }
    }
`;
export { ThirdScreenSection, ListTechnologies };
