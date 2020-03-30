import React from 'react';
import './Header.css';
import logo from '../../logo.svg';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <h2>React Recruit App</h2>
        </div>
    );
};

export default Header;