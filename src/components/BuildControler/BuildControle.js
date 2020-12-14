import React from 'react';
import {RowControl, Label, RowButtons, PlusButton, MinusButton} from '../../style/componentsStyle';

const BuildControle = props => {
    return(
        <RowControl>
            <Label>{props.text}</Label>
            <RowButtons>
                <PlusButton onClick={props.add}/>
                <MinusButton alt={props.activeButton.toString()} disabled={!props.activeButton} onClick={props.delete}/>
            </RowButtons>
        </RowControl>
    );
}

export default BuildControle;