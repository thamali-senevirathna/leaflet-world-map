import React, { Component } from "react";
import { MapContainer, GeoJSON, FeatureGroup, LayerGroup } from "react-leaflet";
import mapData from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
import "./Worldmap.css";

interface GeoJSONData {
  features: any[];
}
class WorldMap extends Component {
  state = { color:"#ffff00"};

  color = ["#be2edd","#badc58","#3498db","#ffbe76","#6D214F"];


  [x: string]: any;
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
   onClickedCountryMassage = (event: any) => {
    console.log( "Clicked..");
   }

   onCountryChangeColor = (event:any) =>{
    event.target.setStyle({
      color:"#FC427B",
      fillColor:this.state.color,
      fillOpacity:1,
     })
   }
  onEachCountry = (country: any, layer: any) => {
    const countryName = country.properties.ADMIN;
    console.log(countryName);
    layer.bindPopup(countryName);

   layer.options.fillOpacity = Math.random();
//   const colorIndex = Math.floor(Math.random() * this.color.length);
// layer.options.fillColor = this.color[colorIndex];

    layer.on({
    click: this.onCountryChangeColor,
    });
  };

colorChange = (event:any) =>{
this.setState({color: event.target.value})
}

  render() {
    return (
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "1rem",
            position:"absolute",
marginTop:"-21%"
          }}
        >
          The Map
        </h1>
        <MapContainer
          style={{ height: "85vh", width: "85vw",right:"8%",position:"absolute",bottom:"6%" }}
          zoom={2}
          center={[2, 100]}
        >
          <GeoJSON
            style={this.countryStyle}
            data={mapData as GeoJSONData}
            onEachFeature={this.onEachCountry}
          />
        </MapContainer>
        <input type="color" value={this.state.color} onChange={this.colorChange} style={{position:"absolute",bottom:"3%",left:"0.99%"}}/>
      </div>
    );
  }
}

export default WorldMap;
