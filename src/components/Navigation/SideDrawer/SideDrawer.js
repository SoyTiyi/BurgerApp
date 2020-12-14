import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';
import { SideDrawerStyle } from './SideDrawerStyle'

const SideDrawer = props => {

    return (
        <SideDrawerStyle>
            <Logo />
            <NavigationsItems />
        </SideDrawerStyle>
    );
}

export default SideDrawer;