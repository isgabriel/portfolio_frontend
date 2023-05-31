import { styled } from "styled-components";

const HomeContainer = styled.div`
    min-width: 100%;
    max-width: 1200px;
`;
const HomePageSection = styled.section`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    background-color: ${(props) => props.theme.colors.background};

    min-height: 100vh;
    max-width: 100%;

    padding: 18px 20px;
    main {
        /* margin-top: 60px; */
        display: flex;
        flex-direction: column;
        gap: 60px;
    }
`;

export { HomeContainer, HomePageSection };
