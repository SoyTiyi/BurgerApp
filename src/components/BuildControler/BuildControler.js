import React from 'react';
import { GridButtons, Price, TagPrice, ContainerTag, OrderButton } from '../../style/componentsStyle';
import BuildControle from './BuildControle';
import Aux from '../../hoc/Aux';

const BuildControler = props => {
    const controles = [
        { text: 'Salad', type: 'Salad', num: props.ingredients['Salad'] },
        { text: 'Bacon', type: 'Bacon', num: props.ingredients['Bacon'] },
        { text: 'Cheese', type: 'Cheese', num: props.ingredients['Cheese'] },
        { text: 'Meat', type: 'Meat', num: props.ingredients['Meat'] }
    ];

    return (
        <Aux>
            <ContainerTag>
                <TagPrice>
                    <Price>Cost: ${props.price}</Price>
                </TagPrice>
            </ContainerTag>
            <GridButtons>
                {controles.map(crtl => {
                    return <BuildControle key={crtl.text} text={crtl.text} add={() => props.add(crtl.type)} delete={() => props.delete(crtl.type)} activeButton={crtl.num > 0} />
                })}
            </GridButtons>
            <OrderButton onClick={() => props.showModal('open')} disabled={!props.active}>Order</OrderButton>
        </Aux>
    );
}

export default BuildControler;