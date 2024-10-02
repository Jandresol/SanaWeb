import React, { useState, useEffect } from 'react';
import Controls from '../components/Controls'; 
import MapContainer from '../components/MapContainer'; 
import DataHeader from '../components/DataHeader'; 
import AlertForm from '../components/AlertForm.js';

const ExploreData = () => {
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
        <div className="ExploreData">
            <DataHeader switchTab={switchTab} />
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
            <AlertForm />
        </div>
    );
};

export default ExploreData;

