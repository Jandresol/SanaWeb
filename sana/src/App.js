import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Controls from './components/Controls';
import MapContainer from './components/MapContainer';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState('map');
    const [countries, setCountries] = useState([]);

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        // Load the JSON file with unique country names
        fetch('/unique_countries.json')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((error) => {
                console.error('Error loading JSON:', error);
            });
    }, []);

    return (
        <div className="App">
            <Header switchTab={switchTab} />
            <div className="content">
                {activeTab === 'map' && (
                    <>
                        <Controls countries={countries} />
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
