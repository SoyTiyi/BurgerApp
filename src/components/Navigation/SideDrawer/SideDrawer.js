import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/BackDrop/BackDrop';
import { SideDrawerStyle, OpenOrClose } from './SideDrawerStyle'
import Aux from '../../../hoc/Aux';

const SideDrawer = props => (
    props.close ?
        <Aux>
            <BackDrop show={props.showOpen} clicked={props.close} />
            <SideDrawerStyle open={props.showOpen}>
                <Logo height='11%' />
                <NavigationsItems />
            </SideDrawerStyle>
        </Aux>
        : null
);

export default SideDrawer;