import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./Worldmap.css";

interface GeoJSONData{
  features: any[];
}
class WorldMap extends Component {
  componentDidMount() {
    console.log(mapData);
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center", fontSize: "1.1rem", marginTop: "0%", paddingBottom: "1%" }}>The Map</h1>
        <MapContainer style={{ height: "85vh", width: "90vw" }} zoom={2} center={[2, 100]}>
          <GeoJSON data={mapData as GeoJSONData} />
        </MapContainer>
      </div>
    );
  }
}

export default WorldMap;
