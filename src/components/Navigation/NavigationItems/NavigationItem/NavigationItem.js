import React from 'react';
import {NavigationItemStyle, LinkStyle} from './NavigationItemStyle';

const NavigationItem = props => (
    <NavigationItemStyle><LinkStyle href={props.link} active={props.active}>{props.children}</LinkStyle></NavigationItemStyle>
);

export default NavigationItem;  