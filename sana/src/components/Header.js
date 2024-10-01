import React from 'react';

const Header = ({ switchTab }) => {
    return (
        <header className="header">
            <h1>The Cancer Atlas</h1>
            <nav className="navbar">
                <ul>
                    <li><button onClick={() => switchTab('map')}>Map View</button></li>
                    <li><button onClick={() => switchTab('list')}>List View</button></li>
                    <li><button onClick={() => switchTab('compare')}>Compare Countries</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
