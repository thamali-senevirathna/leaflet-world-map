import React, { Component } from "react";
import { MapContainer, GeoJSON } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./Worldmap.css";

interface GeoJSONData {
  features: any[];
}

class WorldMap extends Component {
  state = { color: "#ffff00" };

  onCountryMouseOver = (event: any) => {
    event.target.setStyle({
      color: "#FC427B",
      fillColor: this.state.color,
      fillOpacity: 1,
    });
  };

  onCountryMouseOut = (event: any) => {
    event.target.setStyle({
      color: "black",
      fillColor: "green",
      fillOpacity: 0.8,
    });
  };

  onCountryClick = (event: any) => {
    const countryName = event.target.feature.properties.ADMIN;
    if (countryName === "Sri Lanka") {
      const map = this.mapRef.current;
      const layer = event.target;
      map.fitBounds(layer.getBounds());
    }
  };

  onEachCountry = (country: any, layer: any) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);
    layer.options.fillOpacity = Math.random();

    layer.on({
      mouseover: this.onCountryMouseOver,
      mouseout: this.onCountryMouseOut,
      click: this.onCountryClick,
    });
  };

  colorChange = (event: any) => {
    this.setState({ color: event.target.value });
  };

  mapRef = React.createRef();

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1rem",
            position: "absolute",
            marginTop: "-21%",
          }}
        >
          The Map
        </h1>

        <MapContainer
          ref={this.mapRef}
          style={{
            height: "85vh",
            width: "85vw",
            right: "8%",
            position: "absolute",
            bottom: "6%",
          }}
          zoom={2}
          center={[2, 100]}
        >
          <GeoJSON
            style={{
              fillColor: "green",
              fillOpacity: 0.8,
              color: "black",
              weight: 0.7,
              dashArray: 1,
            }}
            data={mapData as GeoJSONData}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>

        <input
          type="color"
          value={this.state.color}
          onChange={this.colorChange}
          style={{ position: "absolute", bottom: "3%", left: "0.99%" }}
        />
      </div>
    );
  }
}

export default WorldMap;
