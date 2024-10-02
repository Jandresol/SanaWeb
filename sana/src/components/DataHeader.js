import React from 'react';

const DataHeader = ({ switchTab }) => {
    return (
        <header className="dataheader">
            <nav className="data-navbar">
                <ul>
                    <li><button onClick={() => switchTab('map')}>Map View</button></li>
                    <li><button onClick={() => switchTab('list')}>List View</button></li>
                    <li><button onClick={() => switchTab('compare')}>Compare Counties</button></li>
                </ul>
            </nav>
        </header>
    );
};

export default DataHeader;
