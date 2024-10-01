import React from 'react';

const Controls = () => {
    return (
        <div className="controls">
            <select id="metric-select">
                <option value="alcohol">Cancer deaths attributable to alcohol</option>
                <option value="tobacco">Cancer deaths attributable to tobacco</option>
                {/* Add more options here */}
            </select>
            <select id="country-select">
                <option value="">Find a Country</option>
                <option value="USA">United States</option>
                <option value="CAN">Canada</option>
                {/* Add more countries as needed */}
            </select>
            <button onClick={() => alert('Downloading data file...')}>Download Data File</button>
            <button onClick={() => alert('Downloading map image...')}>Download Map Image</button>
        </div>
    );
};

export default Controls;
