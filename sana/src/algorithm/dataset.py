import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
import geopandas as gpd
import matplotlib.pyplot as plt

emissions = pd.read_csv('../dataset/Mexico/emissions/emissions.csv')
water_sources = pd.read_csv('../dataset/Mexico/water_sources/water_sources.csv')
stationary_pollution = pd.read_csv('../dataset/Mexico/stationary_fuel_pollution_sources/stationary_fuel_pollution_sources.csv')
health_services = pd.read_csv('../dataset/Mexico/health_services/health_services.csv')
marginalization = pd.read_csv('../dataset/Mexico/marginalization/IMU_2020.csv')
bc_data = pd.read_csv('../dataset/Mexico/bc_data/BDmortalidadCAMAbase.csv')
bc_data_national = pd.read_csv('../dataset/Mexico/bc_data_national/bc_data_national.csv')

print("Datasets loaded.")

emissions['cve_ent'] = emissions['cve_ent'].astype(str).str.strip()
water_sources['cve_ent'] = water_sources['cve_ent'].astype(str).str.strip()
stationary_pollution['cve_ent'] = stationary_pollution['cve_ent'].astype(str).str.strip()
health_services['cve_ent'] = health_services['cve_ent'].astype(str).str.strip()
marginalization['cve_ent'] = marginalization['cve_ent'].astype(str).str.strip()
bc_data['cve_ent'] = bc_data['cve_ent'].astype(str).str.strip()
bc_data_national['cve_ent'] = bc_data_national['cve_ent'].astype(str).str.strip()

print("cve_ent standardized.")

merged_data = pd.merge(emissions, stationary_pollution, on='cve_mun', how='left')
merged_data = pd.merge(merged_data, health_services, on='cve_mun', how='left')
merged_data = pd.merge(merged_data, marginalization, on='cve_mun', how='left')
merged_data = pd.merge(merged_data, bc_data, on='cve_mun', how='left')
merged_data = pd.merge(merged_data, bc_data_national, on='cve_mun', how='left')
merged_data.dropna(inplace=True)
merged_data.dropna(inplace=True)

scaler = StandardScaler()
numerical_columns = ['emissions', 'water_quality', 'population', 'num_health_services'] 
merged_data[numerical_columns] = scaler.fit_transform(merged_data[numerical_columns])

merged_data['environmental_hazard_index'] = (merged_data['emissions'] + merged_data['water_quality'] + merged_data['stationary_pollution']) / 3
merged_data['healthcare_access_index'] = merged_data['num_health_services'] / merged_data['population']
merged_data['social_vulnerability_index'] = (merged_data['marginalization_index'] + merged_data['population']) / 2
merged_data['social_vulnerability_index'] = (merged_data['marginalization_index'] + merged_data['population']) / 2

features = ['environmental_hazard_index', 'healthcare_access_index', 'social_vulnerability_index']  
target = 'cancer_mortality_rate'

print("4")


X = merged_data[features]
y = merged_data[target]
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
model = RandomForestRegressor(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

print("5")


y_pred = model.predict(X_test)

merged_data['predicted_mortality'] = model.predict(X)
merged_data['composite_risk_score'] = (merged_data['predicted_mortality'] + merged_data['environmental_hazard_index'] + merged_data['healthcare_access_index'] + merged_data['social_vulnerability_index']) / 4
geo_data = gpd.read_file('path_to_shapefile.shp')

print("6")

geo_data = geo_data.merge(merged_data[['cve_ent', 'composite_risk_score']], on='cve_ent', how='left')

print("7")

fig, ax = plt.subplots(1, 1, figsize=(10, 6))
geo_data.plot(column='composite_risk_score', ax=ax, legend=True, cmap='OrRd')
plt.title('Breast Cancer Mortality Risk by Region')
plt.show()