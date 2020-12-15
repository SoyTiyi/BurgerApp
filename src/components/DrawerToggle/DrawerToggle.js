import React from 'react';
import { DrawerToggleStyle, LineToggle } from './DrawerToggleStyle';
const DrawerToggle = props => (
    <DrawerToggleStyle onClick={props.open}>
        <LineToggle/>
        <LineToggle/>
        <LineToggle/>
    </DrawerToggleStyle>
);

export default DrawerToggle;