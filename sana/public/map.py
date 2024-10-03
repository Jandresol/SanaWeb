
import folium
import geopandas as gpd
from folium.plugins import HeatMap
import random

# Load the shapefile data (as done previously)
gdf_san_luis = gpd.read_file('./dataset/San Luis Potosi/geometry/2023_1_24_MUN/2023_1_24_MUN.shp')

m = folium.Map(location=[22.1565, -100.9855], zoom_start=7)

# Prepare heatmap data with random values
heat_data = [
    [point.xy[1][0], point.xy[0][0], random.uniform(0, 1)]  # Random value between 0 and 1
    for point in gdf_san_luis.geometry.centroid
]

# Add the heatmap to the map
HeatMap(heat_data).add_to(m)

# Save the map to an HTML file
m.save('san_luis_heatmap.html')