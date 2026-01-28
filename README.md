# COVID County Visualizer

## Overview
**COVID County Visualizer** is an interactive web mapping lab that visualizes county-level COVID-19 data in the United States. The project includes two main maps. A choropleth map showing COVID-19 rates per 1,000 residents and a centroid map displaying the number of cases per county. The maps showcase a spatial distribution of COVID-19 cases across the country.

## Maps and Screenshots
- **Choropleth Map (Rates per 1,000 Residents)**  
![Choropleth Map](img/mymap1.png)  
Link to live map: [[LINK](https://Kur0Vargas.github.io/GEOG458-COVID-County-Visualizer-Lab-3-/map1.html)]

- **Centroid Map (Absolute Case Counts)**  
![Centroid Map](img/mymap2.png)  
Link to live map: [[LINK](https://Kur0Vargas.github.io/GEOG458-COVID-County-Visualizer-Lab-3-/map2.html)]

## Primary Functions
- **Choropleth Map**
  - Highlights counties based on COVID-19 rate tiers
  - Displays a hover tooltip showing the county name, state, and rate per 1,000 residents
  - Color gradient from white to deep red for visual clarity

- **Centroid Map**
  - Circle markers at counties, size and color scale off cases
  - Clicking on a marker displays a popup with the total cases in that county
  - Complimentary to the first map

## Libraries and Tools
- [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
- JavaScript
- HTML5
- CSS

## Data Sources
- COVID-19 data from [The New York Times](https://github.com/nytimes/covid-19-data/blob/43d32dde2f87bd4dafbb7d23f5d9e878124018b8/live/us-counties.csv)
- 2018 ACS 5yr estimates [[US Census]](https://data.census.gov/table/ACSDP5Y2023.DP05?g=0100000US$050000&d=ACS+5-Year+Estimates+Data+Profiles)

## Acknowledgments
The data has been processed by Steven Bao with Steven's assistance in creating the lab data.
