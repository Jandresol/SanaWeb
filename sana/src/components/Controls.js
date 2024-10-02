import React from 'react';

const Controls = ({ countries }) => {
    return (
        <div className="controls">
            <select id="metric-select" className="dropdown">
                <option value="">Select Metrics</option>
                <option value="Air Quality">Air Quality</option>
                <option value="Water Quality">Water Quality</option>
                <option value="UV Index">UV Index</option>
                {/* Add more options here */}
            </select>
            <select id="country-select" className="dropdown">
                <option value="">Explore a County</option>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </select>
        </div>
    );
};

export default Controls;
