import React from 'react';
import PropTypes from 'prop-types';
import { BreadBottom, BreadTop, SeedOne, SeedTwo, Meat, Cheese, Salad, Bacon } from '../../../style/componentsStyle';

const Ingredient = props => {
    let ingredient = null;

    /* This swith eval the type that is provide in the props, with this we return the component styled that the burger requiered */
    switch (props.type) {
        case ('bread-botton'):
            ingredient = <BreadBottom />;
            break;
        case ('bread-top'):
            ingredient = (
                <BreadTop>
                    <SeedOne />
                    <SeedTwo />
                </BreadTop>
            );
            break;
        case ('Meat'):
            ingredient = <Meat />;
            break;
        case ('Cheese'):
            ingredient = <Cheese />;
            break;
        case ('Salad'):
            ingredient = <Salad />;
            break;
        case ('Bacon'):
            ingredient = <Bacon />;
            break;
        default: 
            ingredient = null;
            break;
    }
    return ingredient;
};

/* Here we said that the type of props.type should be string */
Ingredient.prototype = {
    type: PropTypes.string.isRequired
};

export default Ingredient;