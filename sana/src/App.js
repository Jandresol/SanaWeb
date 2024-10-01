import React, { useState } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import MapContainer from './components/MapContainer';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('map');

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="App">
            <Header switchTab={switchTab} />
            <div className="content">
                {activeTab === 'map' && (
                    <>
                        <Controls />
                        <MapContainer />
                    </>
                )}
                {activeTab === 'list' && <div>List View (Coming Soon)</div>}
                {activeTab === 'compare' && <div>Compare Countries (Coming Soon)</div>}
            </div>
        </div>
    );
}

export default App;
