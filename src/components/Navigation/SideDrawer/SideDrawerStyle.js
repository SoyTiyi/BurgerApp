import styled from 'styled-components';


export const SideDrawerStyle = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    lef: 0;
    top: 0;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform 0.3s ease-out;

    @media (min-width: 500px){
        display: none; 
    }
`;

export const Open = styled.div`
    transform: translateX(0);
`;

export const Close = styled.div`
    transform: translateX(-100%);
`;