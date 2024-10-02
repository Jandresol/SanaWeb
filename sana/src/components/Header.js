// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <h1>SANA</h1>
            <nav className="navbar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/risk-factors">Risk Factors</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/explore-data">Explore Data</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
