import React,{Component } from "react";
import { MapContainer } from "react-leaflet";
import './../../node_modules/leaflet/dist/leaflet.css'

class WorlMap extends Component{
 state={};
    render() {
        return(
            <div>
                <h1 >The Map</h1>
                <MapContainer style={{height:"80vh", width:"100vw"}}></MapContainer>
            </div>
        );
    }

}
export default WorlMap;