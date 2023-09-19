import { styled } from "styled-components";

const StyledModalBox = styled.div`
    padding: 18px 20px;
    position: fixed;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100vh;

    background: rgba(0, 0, 0, 0.5);
    z-index: 1001;
`;
const SectionModal = styled.dialog`
    border-radius: ${(props) => props.theme.radius.modalContact};

    padding: 25px 20px;

    width: 100%;
    max-width: 450px;

    background-color: ${(props) => props.theme.colors.primary};

    > div {
        padding: 10px;
        > div {
            position: relative;
            > button {
                position: absolute;
                right: 0;
                top: 10px;

                background-color: transparent;
            }
        }
    }

    h2 {
        cursor: default;
        font-size: ${(props) => props.theme.subtitles.subTitle2};
        font-weight: ${(props) => props.theme.weights.bold};

        color: ${(props) => props.theme.colors.greys.grey7};

        max-width: 260px;
    }

    @media (min-width: 769px) {
        > div {
            > div {
                > button {
                    img {
                        width: 16px;
                        height: 16px;
                    }
                }
            }
        }
        h2 {
            font-size: ${(props) => props.theme.subtitles.subTitle1};
        }
    }
`;
const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 25px;

    > div {
        border-bottom: 2px solid ${(props) => props.theme.colors.greys.grey6};
        padding: 7px 0;
    }

    input,
    textarea {
        background-color: transparent;
        color: ${(props) => props.theme.colors.greys.grey7};

        padding: 7px;

        min-width: 100%;
        max-width: 100%;
        max-height: 250px;
        outline: 0;
    }
    textarea {
        resize: none;
    }

    section {
        button {
            padding: 7px;

            background-color: transparent;
            color: ${(props) => props.theme.colors.greys.grey6};

            width: 100%;

            border: 1px solid ${(props) => props.theme.colors.greys.grey6};

            &:hover {
                transition: 0.6s;
                transform: scale(1.05);
            }
        }
    }
`;

export { StyledModalBox, SectionModal, StyledForm };
