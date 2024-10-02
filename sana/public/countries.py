import pandas as pd
import json

# Load the CSV file
df = pd.read_csv('/Users/jasmineandresol/Desktop/SanaWeb/sana/public/dataset/Mexico/bc_data_national/bc_data_national.csv')

# Extract unique values from column 3
unique_values = df.iloc[:, 3].dropna().unique().tolist()  # Assuming column 4 is the fourth column (index 3)

# Save the unique values as a JSON file
with open('unique_countries.json', 'w') as json_file:
    json.dump(unique_values, json_file)
