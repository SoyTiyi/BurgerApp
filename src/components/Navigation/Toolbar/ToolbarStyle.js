import React from 'react';
import styled from 'styled-components';

export const ToolbarStyle = styled.header`
    width: 100%;
    height: 56px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #f94144;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;

export const NavStyle = styled.nav`
    @media (max-width: 500px) {
        display: none;
    }
`;

