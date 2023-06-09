import { styled } from "styled-components";

const MenuParent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 6px;

    @media (min-width: 769px) {
        gap: 8px;

        .bigLine {
            width: 22px;
        }

        .smallLine {
            width: 11px;
        }
    }
`;

const BigLine = styled.div`
    width: 20px;
    height: 2px;

    background-color: ${(props) => props.theme.colors.text};
`;

const SmallLine = styled.div`
    width: 10px;
    height: 2px;

    background-color: ${(props) => props.theme.colors.text};
`;

export { MenuParent, BigLine, SmallLine };
