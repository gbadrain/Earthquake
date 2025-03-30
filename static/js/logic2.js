// =============================
// 1. Define Basemap Tile Layers
// =============================
const basemap = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
});

const grayscale = L.tileLayer("https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png", {
  attribution: "© OpenStreetMap contributors"
});

const satellite = L.tileLayer("https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
  attribution: "© Google",
  subdomains: ["mt0", "mt1", "mt2", "mt3"]
});

const outdoors = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
  attribution: "Map data: © OpenStreetMap contributors, SRTM | Rendering: © OpenTopoMap"
});

// ===========================
// 2. Initialize the Map Object
// ===========================
const map = L.map("map", {
  center: [20, 0], // Global view
  zoom: 2, // Zoom level for worldwide visualization
  layers: [basemap] // Default base layer
});

// ==============================
// 3. Define Overlays and Base Maps
// ==============================
const earthquakes = new L.LayerGroup();
const tectonicPlates = new L.LayerGroup();

const baseMaps = {
  "Basemap": basemap,
  "Grayscale": grayscale,
  "Satellite View": satellite,
  "Outdoors": outdoors
};

const overlays = {
  "Earthquakes": earthquakes,
  "Tectonic Plates": tectonicPlates
};

// Add layer control to the map
L.control.layers(baseMaps, overlays, { collapsed: false }).addTo(map);

// =============================================================
// 4. Fetch and Add Earthquake Data to the Map
// =============================================================
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  function styleInfo(feature) {
      return {
          opacity: 1,
          fillOpacity: 1,
          fillColor: getColor(feature.geometry.coordinates[2]),
          color: "#000000",
          radius: getRadius(feature.properties.mag),
          stroke: true,
          weight: 0.5
      };
  }

  function getColor(depth) {
      if (depth > 90) return "red";
      if (depth > 70) return "orange";
      if (depth > 50) return "yellow";
      if (depth > 30) return "lightgreen";
      if (depth > 10) return "green";
      return "#98ee00";
  }

  function getRadius(magnitude) {
      return magnitude ? magnitude * 4 : 1;
  }

  L.geoJson(data, {
      pointToLayer: function(feature, latlng) {
          return L.circleMarker(latlng);
      },
      style: styleInfo,
      onEachFeature: function(feature, layer) {
          layer.bindPopup(`<h3>${feature.properties.place}</h3>
                           <p>Magnitude: ${feature.properties.mag}<br>
                           Depth: ${feature.geometry.coordinates[2]} km</p>`);
      }
  }).addTo(earthquakes);

  earthquakes.addTo(map);
});

// =============================================================
// 5. Fetch and Add Tectonic Plates Data to the Map
// =============================================================
d3.json("https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json").then(function(data) {
  L.geoJson(data, {
      style: {
          color: "orange",
          weight: 2
      }
  }).addTo(tectonicPlates);

  tectonicPlates.addTo(map);
});

// =============================
// 6. Add Legend to the Map
// =============================
let legend = L.control({ position: "bottomright" });

legend.onAdd = function() {
  let div = L.DomUtil.create("div", "info legend");
  const depthIntervals = [-10, 10, 30, 50, 70, 90];
  const colors = ["#98ee00", "green", "lightgreen", "yellow", "orange", "red"];

  for (let i = 0; i < depthIntervals.length; i++) {
      div.innerHTML += `<i style="background: ${colors[i]}"></i> 
                        ${depthIntervals[i]}${depthIntervals[i + 1] ? "&ndash;" + depthIntervals[i + 1] + " km<br>" : "+ km"}`;
  }
  return div;
};

legend.addTo(map);

// =============================
// 7. Add Title to the Map (Top Center)
// =============================
let title = L.control({ position: "topright" }); // Add title control

title.onAdd = function () {
    let div = L.DomUtil.create("div", "map-title");
    div.innerHTML = "<h1 style='font-size: 25px; margin: 0; padding: 5px;  color: black;'>LIVE EARTHQUAKES</h1>";
    div.style.position = "absolute"; // Absolute positioning
    div.style.top = "-5px"; // Set distance from the top
    div.style.left = "-175%"; // Center horizontally
    div.style.transform = "translateX(-245%)"; // Ensure proper alignment
    div.style.textAlign = "center"; // Center the text within the element
    div.style.zIndex = "1000"; // Bring title to the front
    return div;
};

// Add title control to the map
title.addTo(map);

