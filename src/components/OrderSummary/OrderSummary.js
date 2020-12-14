import React from 'react';
import Aux from '../../hoc/Aux';
import { CloseButton, ContinueButton, LiStyle } from '../../style/componentsStyle';
const OrderSummary = props => {
    const ingredientsSummary = Object.keys(props.ingredients).map(
        igKey => {
            return <LiStyle key={igKey}><span>{igKey}</span>: {props.ingredients[igKey]}</LiStyle>
        }
    );

    return (
        <Aux>
            <h3>Your Order:</h3>
            <p>The ingredients was:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Price: ${props.price}</p>
            <ContinueButton>Continue</ContinueButton>
            <CloseButton onClick={() => props.showModal('close')}>Close</CloseButton>
        </Aux>
    );
}

export default OrderSummary;