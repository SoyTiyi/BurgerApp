import React from 'react'
import { ToolbarStyle, NavStyle } from './ToolbarStyle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = props => (
    <ToolbarStyle>
        <div>Menu</div>
        <Logo/>
        <NavStyle><NavigationItems/></NavStyle>
    </ToolbarStyle>
);

export default Toolbar;