import React from 'react';
import {NavigationItemsStyled} from './NavigationItemsStyle';
import NavigationItem from './NavigationItem/NavigationItem';
const NavigationItems = props => (
    <NavigationItemsStyled>
        <NavigationItem link='/' active='true'>BurgerBuilder</NavigationItem>
        <NavigationItem link='/'>CheckOut</NavigationItem>
    </NavigationItemsStyled>
);

export default NavigationItems;