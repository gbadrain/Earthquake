# Earthquake
HTML and Javascript
Earthquake Visualization Dashboard

Overview

The Earthquake Visualization Dashboard is an interactive web application designed to help users explore and understand global seismic activity. Developed in collaboration with the United States Geological Survey (USGS), this project transforms complex earthquake data into an intuitive, visually engaging platform.

Background

The USGS collects extensive global earthquake data daily, but lacks an effective method to visualize this information. This dashboard bridges that gap by providing an interactive tool to explore seismic events, their magnitudes, depths, and geographic distributions.

Implementation Details

Earthquake Data Loading

Data Retrieval

Technology: D3.js
Source: USGS GeoJSON Feed
Functionality: Real-time earthquake data fetching
Dynamic Visualization

Markers dynamically adjust:
Size reflects earthquake magnitude
Color indicates depth
Continuous data updates
Visualization Creation

Earthquake_Visualization Satellite_View Outdoors screencapture-127-0-0-1-5500-Leaflet-Part-2-index2-html-2025-03-25-21_37_02

Marker Representation

Magnitude: Marker size
Depth: Marker color
Interaction: Clickable popups with detailed information
Legend

Comprehensive depth-based color coding explanation
Helps users interpret marker characteristics
Tectonic Plates Integration

Boundary overlay from GitHub Tectonic Plates Repository
Toggle-able visibility
Provides context for seismic activity
Features

Interactive Elements

Layer Control

Toggle between multiple basemap styles:
Standard Map
Grayscale Map
Satellite View
Outdoors/Terrain Map
Switch overlays for earthquakes and tectonic plates
Popups

Detailed earthquake information display
Includes location, magnitude, and depth details
Legend

Depth-based color coding explanation for earthquake markers
Visualizations

Earthquake Data

Markers with dynamic characteristics:
Size reflects earthquake magnitude
Color indicates depth
Informative popups with comprehensive event details
Tectonic Plates

Overlay displaying global tectonic plate boundaries
Tech Stack

Frontend:
HTML5
CSS3
JavaScript
Mapping Libraries:
Leaflet.js (Map visualization)
D3.js (Data manipulation)
Design Framework:
Bootstrap (Responsive layout)
Data Sources

Earthquake Data:
Source: USGS GeoJSON Feed
Real-time global seismic event information
Tectonic Plates:
Source: GitHub Tectonic Plates Repository
Comprehensive boundary data
Live Demo

Explore the interactive dashboard live

Repository Structure

LEAFLET-CHALLENGE
├── .vscode/                     
├── Images/                      
│   ├── Earthquake_Visualization.png  
│   ├── Outdoors.png             
│   └── Satellite_View.png       
├── Leaflet-Part-1/              
│   ├── static/                  
│   │   ├── css/                 
│   │   └── js/                  
│   └── index.html               
├── Leaflet-Part-2/              
    ├── GeoJSON/                 
    ├── static/                  
    │   ├── css/                 
    │   └── js/                  
    │       └── logic2.js        
    └── index2.html              

Usage

Select desired basemap style
Explore earthquake markers
Click on markers for detailed information
Toggle tectonic plate overlay
Credits

Data Sources

Earthquake data: USGS GeoJSON Feed
Tectonic plate data: GitHub Tectonic Plates Repository
Acknowledgments

United States Geological Survey (USGS)
Leaflet.js Documentation
D3.js Community
Plotly Resources emailed by Camille Bolos, Sr Student Success Advisor, University of Oregon Continuing and Professional Education Data Analytics Boot Camp
Microsoft Copilot for problem-solving
