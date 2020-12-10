import React from 'react';
import { PlusButton, MinusButton, RowControl, Label, RowButtons, GridButtons } from '../../style/componentsStyle';
import Aux from '../../hoc/Aux';

const BuildControler = props => {
    return (
        <Aux>
            <GridButtons>
                <RowControl>
                    <Label>Salad: </Label>
                    <RowButtons>
                        <PlusButton onClick={props.addSalad} />
                        <MinusButton onClick={props.deleteSalad} />
                    </RowButtons>
                </RowControl>
                <RowControl>
                    <Label>Cheese: </Label>
                    <RowButtons>
                        <PlusButton onClick={props.addCheese} />
                        <MinusButton onClick={props.deleteCheese} />
                    </RowButtons>
                </RowControl>
                <RowControl>
                    <Label>Bacon: </Label>
                    <RowButtons>
                        <PlusButton onClick={props.addBacon} />
                        <MinusButton onClick={props.deleteBacon} />
                    </RowButtons>
                </RowControl>
                <RowControl>
                    <Label>Meat: </Label>
                    <RowButtons>
                        <PlusButton onClick={props.addMeat} />
                        <MinusButton onClick={props.deleteMeat} />
                    </RowButtons>
                </RowControl>
            </GridButtons>
        </Aux>
    );
}

export default BuildControler;