import React, { Component } from "react";
import { MapContainer, GeoJSON, FeatureGroup, LayerGroup } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./Worldmap.css";

interface GeoJSONData {
  features: any[];
}
class WorldMap extends Component {
  componentDidMount() {
    console.log(mapData);
  }
  countryStyle = {
    fillColor: "green",
    fillOpacity: 0.8,
    color: "black",
    weight: 0.7,
    dashArray: 1,
  };

  onEachCountry = (country: any, layer: any) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);
   
    layer.on({
      click:(event)=>{
        console.log("Click");
        
      }
    });
  };

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1.1rem",
            marginTop: "0%",
            paddingBottom: "1%",
          }}
        >
          The Map
        </h1>
        <MapContainer
          style={{ height: "85vh", width: "90vw" }}
          zoom={2}
          center={[2, 100]}
        >
          <GeoJSON
            style={this.countryStyle}
            data={mapData as GeoJSONData}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
      </div>
    );
  }
}

export default WorldMap;
