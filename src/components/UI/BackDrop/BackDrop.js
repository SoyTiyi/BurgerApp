import React from 'react';
import {BackDropStyle} from '../../../style/componentsStyle';

const BackDrop = props => (
    props.show ? <BackDropStyle onClick={props.clicked}></BackDropStyle> : null
);

export default BackDrop;