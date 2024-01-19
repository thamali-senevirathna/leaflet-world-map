import React,{Component } from "react";
import { MapContainer } from "react-leaflet";
import countries from './../data/countries.json';
import './../../node_modules/leaflet/dist/leaflet.css';


class WorlMap extends Component{
 state={};
 componentDidMount(): void {
     console.log(countries);
     
 }
    render() {
        return(
            <div>
                <h1 style={{textAlign:"center",fontSize:"1.1rem",marginTop:"0%",paddingBottom:"1%"}}>The Map</h1>
                <MapContainer style={{height:"85vh", width:"90vw"}} ></MapContainer>
            </div>
        );
    }

}
export default WorlMap;