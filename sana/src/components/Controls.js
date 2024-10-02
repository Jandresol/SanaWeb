import React from 'react';

const Controls = ({ countries }) => {
    return (
        <div className="controls">
            <select id="metric-select">
                <option value="alcohol">Cancer deaths attributable to alcohol</option>
                <option value="tobacco">Cancer deaths attributable to tobacco</option>
                {/* Add more options here */}
            </select>
            <select id="country-select">
                <option value="">Find a Country</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
            <button onClick={() => alert('Downloading data file...')}>Download Data File</button>
            <button onClick={() => alert('Downloading map image...')}>Download Map Image</button>
        </div>
    );
};

export default Controls;
