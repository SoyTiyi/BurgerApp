import React from 'react';
import Ingredient from './Ingredient/Ingredient';
import { BurgerContainer } from '../../style/componentsStyle';

const Burger = props => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <Ingredient key={igKey+i} type={igKey}/>
            });
        }).reduce((arr,el) => {
            return arr.concat(el)
        }, []);
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Pls add Ingredients</p>
    }
    return (
        <BurgerContainer>
            <Ingredient type='bread-top' />
            {transformedIngredients}
            <Ingredient type='bread-botton' />
        </BurgerContainer>
    );
}

export default Burger;