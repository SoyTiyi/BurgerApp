import styled from 'styled-components';

export const NavigationItemsStyled = styled.div`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    align-items: center;
    height: 100%;

    @media (max-width:500px) {
        width: 100%;
        height: auto;
        flex-flow: column;
    }
`;

