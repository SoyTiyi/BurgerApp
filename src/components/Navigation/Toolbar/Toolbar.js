import React from 'react'
import { ToolbarStyle, NavStyle } from './ToolbarStyle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../../DrawerToggle/DrawerToggle';

const Toolbar = props => (
    <ToolbarStyle>
        <DrawerToggle open={props.open}/>
        <Logo height="80%"/>
        <NavStyle><NavigationItems/></NavStyle>
    </ToolbarStyle>
);

export default Toolbar;