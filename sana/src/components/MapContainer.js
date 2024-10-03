import React from 'react';

const MapContainer = () => {
  return (
    <div>
      <h1>San Luis Map</h1>
      <iframe
        title="San Luis Map"
        src="/san_luis_heatmap.html" 
        style={{ width: '100%', height: '500px', border: 'none'}}
      />
    </div>
  );
};

export default MapContainer;
