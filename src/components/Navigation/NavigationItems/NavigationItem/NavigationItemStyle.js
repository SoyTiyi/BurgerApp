import styled from 'styled-components';

export const NavigationItemStyle = styled.li`
    margin: 0;
    box-sizing: border-box;
    display: flex;
    height: 100%;
    align-items: center; 

    @media (max-width: 500px) {
        width: 100%;
        height: auto;
        margin: 10px 0;
        display: block;
        align-items: none;
    }
`;

export const LinkStyle = styled.a`
    color: white;
    text-decoration: none; 
    padding: 16px 10px;
    border-botton: 4px solid ${props => props.active ? 'red' : 'transparent'};
    background-color: ${props => props.active ? '#bc4749' : '#e63946'};
    border-radius: ${props => props.active ? '10px' : ''};
    box-sizing: border-box;
    display: block;
    border-radius: 10px;

    &:hover , &:active{
         background-color: #bc4749;
         border-botton: 4px solid red;
         color: white;
         border-radius: 10px;
    }

    @media (max-width: 500px) {
        width: 100%;
        display: block;
        padding: none;
        border-bottom: none;
    }
`;