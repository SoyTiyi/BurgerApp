import React, { useState } from 'react';
import Aux from '../../hoc/Aux';
import { Content } from '../../style/componentsStyle';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const Layout = props => {

    const [showSideDrawer, setShowSideDrawer] = useState(false);

    const sideDrawerCloseHandler = () => {
        setShowSideDrawer(false);
    }

    const sideDrawerOpenHandler = () => {
        setShowSideDrawer(true);
    }

    return (
        <Aux>
            <Toolbar open={sideDrawerOpenHandler}/>
            <SideDrawer showOpen={showSideDrawer} close={sideDrawerCloseHandler}/>
            <Content>
                {props.children}
            </Content>
        </Aux>
    );
};

export default Layout;