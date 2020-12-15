import React from 'react';
import { ModalStyle } from '../../../style/componentsStyle';
import Aux from '../../../hoc/Aux';
import BackDrop from '../BackDrop/BackDrop';
const Modal = props => (
    <Aux>
        <BackDrop show/>
        <ModalStyle>
            {props.children}
        </ModalStyle>
    </Aux>
);

export default Modal;