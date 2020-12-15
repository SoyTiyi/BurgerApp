import styled from 'styled-components';

export const LogoStyle = styled.div`
    background-color: #e9c46a;
    height: ${props => props.height};
    box-sizing: border-box;
    border-radius: 5px;
    padding: 8px;
`;

export const LogoImg = styled.img`
    height: 80%;

    @media (max-width: 500px) {
        width: auto;
    }
`;