import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import { LogoStyle, LogoImg } from './LogoStyle';
const Logo = props => (
    <LogoStyle>
        <LogoImg src={burgerLogo} alt='BurgerLogo'/>
    </LogoStyle>
);

export default Logo;