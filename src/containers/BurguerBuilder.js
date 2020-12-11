import React, { useState } from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burger/Burger';
import BuildControler from '../components/BuildControler/BuildControler';

const BASE_PRICE = {
    Salad: 0.5,
    Bacon: 1,
    Cheese: 0.7,
    Meat: 2
};

const BurguerBuilder = props => {
    const [burgerState, setBurgerState] = useState({
        ingredients: {
            Salad: 0,
            Bacon: 0,
            Cheese: 0,
            Meat: 0
        },
        price: 4
    });

    const [orderButtonState, setOrderButtonState] = useState(false);

    const updateActiveState = ingredients => {
        const numIngredients = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        setOrderButtonState(numIngredients > 0);
    }

    const addIngredient = type => {
        const oldCount = burgerState.ingredients[type];
        const newCount = oldCount + 1;
        const newIngredients = { ...burgerState.ingredients }
        newIngredients[type] = newCount;
        const addPrice = BASE_PRICE[type];
        const newPrice = Math.round((burgerState.price + addPrice) * 100) / 100;
        setBurgerState({
            ingredients: newIngredients,
            price: newPrice
        });
        updateActiveState(newIngredients);
    }

    const deleteIngredient = type => {
        const oldCount = burgerState.ingredients[type];
        if (oldCount > 0) {
            const newCount = oldCount - 1;
            const newIngredients = { ...burgerState.ingredients }
            newIngredients[type] = newCount;
            const substracPrice = BASE_PRICE[type];
            const newPrice = Math.round((burgerState.price - substracPrice) * 100) / 100;
            setBurgerState({
                ingredients: newIngredients,
                price: newPrice
            });
            updateActiveState(newIngredients);
        }
    }

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients} />
            <BuildControler ingredients={burgerState.ingredients} active={orderButtonState} price={burgerState.price} add={addIngredient} delete={deleteIngredient} />
        </Aux>
    );
}

export default BurguerBuilder;