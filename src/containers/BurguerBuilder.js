import React , {useState} from 'react';
import Aux from '../hoc/Aux';
import Burger from '../components/Burguer/Burger';
import BuildControler from '../components/BuildControler/BuildControler';

const BurguerBuilder = props => {
    const [burgerState, setBurgerState] = useState({
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
    });

    const addSalad = () => {
        const newIngredients = {...burgerState.ingredients};
        newIngredients.salad++;
        setBurgerState({
            ingredients: newIngredients
        });
    };

    const addBacon = () => {
        const newIngredients = {...burgerState.ingredients};
        newIngredients.bacon++;
        setBurgerState({
            ingredients: newIngredients
        });
    };

    const addCheese = () => {
        const newIngredients = {...burgerState.ingredients};
        newIngredients.cheese++;
        setBurgerState({
            ingredients: newIngredients
        });
    };

    const addMeat = () => {
        const newIngredients = {...burgerState.ingredients};
        newIngredients.meat++;
        setBurgerState({
            ingredients: newIngredients
        });
    };

    const deleteSalad = () => {
        const newIngredients = {...burgerState.ingredients};
        if(newIngredients.salad>0){
            newIngredients.salad--;
            setBurgerState({
                ingredients: newIngredients
            });
        }
    }

    const deleteBacon = () => {
        const newIngredients = {...burgerState.ingredients};
        if(newIngredients.bacon>0){
            newIngredients.bacon--;
            setBurgerState({
                ingredients: newIngredients
            });
        }
    }

    const deleteCheese = () => {
        const newIngredients = {...burgerState.ingredients};
        if(newIngredients.cheese>0){
            newIngredients.cheese--;
            setBurgerState({
                ingredients: newIngredients
            });
        }
    }

    const deleteMeat = () => {
        const newIngredients = {...burgerState.ingredients};
        if(newIngredients.meat>0){
            newIngredients.meat--;
            setBurgerState({
                ingredients: newIngredients
            });
        }
    }

    return (
        <Aux>
            <Burger ingredients={burgerState.ingredients} />
            <BuildControler addSalad={addSalad} deleteSalad={deleteSalad} addBacon={addBacon} deleteBacon={deleteBacon} addCheese={addCheese} deleteCheese={deleteCheese} addMeat={addMeat} deleteMeat={deleteMeat}/>
        </Aux>
    );
}

export default BurguerBuilder;