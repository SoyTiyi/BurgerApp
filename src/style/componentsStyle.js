import styled from 'styled-components';

export const Container =
    styled.div`
    text-align: center;
    
`;

export const Content = styled.div`
    margin-top: 72px;
`;

export const BreadBottom = styled.div`
    height: 13%;
    width: 80%;
    background: linear-gradient(#F08E4A, #e27b36);
    border-radius: 0 0 30px 30px;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
`;

export const BreadTop = styled.div`
    height: 20%;
    width: 80%;
    background: linear-gradient(#bc581e, #e27b36);
    border-radius: 50% 50% 0 0;
    box-shadow: inset -15px 0 #c15711;
    margin: 2% auto;
    position: relative;
`;

export const SeedOne = styled.div`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 30%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(-20deg);
    box-shadow: inset -2px -3px #c9c9c9;

    &:after {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: -170%;
        top: -260%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px 2px #c9c9c9;
    }

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 180%;
        top: -50%;
        border-radius: 40%;
        transform: rotate(60deg);
        box-shadow: inset -1px -3px #c9c9c9;
    }
`;

export const SeedTwo = styled.div`
    width: 10%;
    height: 15%;
    position: absolute;
    background-color: white;
    left: 64%;
    top: 50%;
    border-radius: 40%;
    transform: rotate(10deg);
    box-shadow: inset -3px 0 #c9c9c9;

    &:before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background-color: white;
        left: 150%;
        top: -130%;
        border-radius: 40%;
        transform: rotate(90deg);
        box-shadow: inset 1px 3px #c9c9c9;
    }
`;

export const Meat = styled.div`
    width: 80%;
    height: 8%;
    background: linear-gradient(#7f3608, #702e05);
    margin: 2% auto;
    border-radius: 15px;
`;

export const Cheese = styled.div`
    width: 90%;
    height: 4.5%;
    margin: 2% auto;
    background: linear-gradient(#f4d004, #d6bb22);
    border-radius: 20px;
`;

export const Salad = styled.div`
    width: 85%;
    height: 7%;
    margin: 2% auto;
    background: linear-gradient(#228c1d, #91ce50);
    border-radius: 20px;
`;

export const Bacon = styled.div`
    width: 80%;
    height: 3%;
    background: linear-gradient(#bf3813, #c45e38);
    margin: 2% auto;
`;

export const BurgerContainer = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    @media (min-width: 500px) and (min-height: 400px) {
        width: 350px;
        height: 300px;
    }

    @media (min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }

    @media (min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }



`;

export const PlusButton = styled.button`
    border: 2px solid #8ac926;
    background-color: #fff;
    font-size: 16px;
    height: 2.5em;
    width: 2.5em;
    border-radius: 999px;
    position: relative;

    &:after,
    &:before {
        content: "";
        display: block;
        background-color: #8ac926;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:before {
        height: 1em;
        width: 0.2em;
    }

    &:after {
        height: 0.2em;
        width: 1em;
    }
`;

export const MinusButton = styled.button`
    border: 2px solid #e71d36;
    background-color: #fff;
    font-size: 16px;
    height: 2.5em;
    width: 2.5em;
    border-radius: 999px;
    position: relative;
    display: inline-block;


    &:after,
    &:before {
        content: "";
        display: block;
        background-color: ${props => props.alt === 'true' ? '#e71d36' : '#a5a58d'};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:before {
        width: 0.2em;
    }

    &:after {
        height: 0.2em;
        width: 1em;
    }

    &:disabled {
        background-color: #c4bbaf;
        border-color: #a5a58d;
        color: #a5a58d;
    }
`;

export const RowControl = styled.div`
    padding: 10px 10px;
    text-align: center;
    display: flex;
    flex-direction: row;
    background-color: #e9c46a;
    margin: 5px;
    border: 1px solid #e9c46a;
    border-radius: 10px;

    @media (max-width:650px) {
        justify-content: center;
    }
`;

export const Label = styled.p`
    display: inline-block;
    margin: 10px 10px;
`;

export const RowButtons = styled.div`
    width: auto;
    height: auto;
    text-align: center;
`;

export const GridButtons = styled.div`  
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    border: 1px solid #e76f51;
    background-color: #e76f51;
    border-radius: 10px;
    margin: 10px;

    @media (max-width:650px) {
        flex-direction: column;
        width: auto;
    }
`;

export const Price = styled.h2`
    font-weight: bold;
    color: #264653;
`;

export const TagPrice = styled.div`
    width: auto;
    border: 3px #f1faee solid;
    border-radius: 10px;
    margin: 10px;
    padding: 0 20px;
`;

export const ContainerTag = styled.div`
    margin: 0 auto;
    justify-content: center;
    item-align: center;
    display: flex;
`;

export const OrderButton = styled.button`
    padding: 15px 20px;
    border: 3px solid #e63946;
    border-radius: 10px;
    background-color: #e63946;
    font-size: 16px;
    color: #f1faee;

    &:hover , &:active {
        background-color: #8ac926;
        border-color: #8ac926;
    }

    &:disabled {
        background-color: #c4bbaf;
        border-color: #c4bbaf;
        color: #a5978b;
    }
`;

export const ModalStyle = styled.div`
    position: fixed;
    z-index: 500;
    background-color: #f3722c;
    width: 70%;
    border: 1px solid #f3722c;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    border-radius: 10px;
    color: #eaf4f4;
    text-align: center;

    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`;

export const CloseButton = styled.button`
    padding: 10px 15px;
    border: 1px solid #e01e37;
    background-color: #e01e37;
    color: #ffffff;
    border-radius: 10px;
    margin: 0 10px;

    &:hover {
        background-color: #ef233c;
        border-color: #ef233c;
    }
`;

export const ContinueButton = styled.button`
    padding: 10px 15px;
    border: 1px solid #8ac926;
    background-color: #8ac926;
    color: #ffffff;
    border-radius: 10px;
    margin: 0 10px;

    &:hover {
        background-color: #9ef01a;
        border-color: #9ef01a;
    }
`;

export const LiStyle = styled.li`
    display:inline-block;
    color:white;
    margin-right:10px;
`;

export const BackDropStyle = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 100;
    left: 0;
    top: 0;
    background-color: rgba(0,0,0,0.5);
`;