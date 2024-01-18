import React,{ Component } from "react";
import countries from "./../data/countries.json";
import "leaflet/dist/leaflet.css";
class WorldMap extends Component{
state ={};

// This is often used for performing actions after the component has been mounted, such as fetching data.
// මෙම අවස්ථාවේදී, එය කොන්සෝලයට විචල්‍ය වන රටවල අන්තර්ගතය ලොග් කරයි.
componentDidMount() { 
    console.log(countries);
 }

    render(){
        return(
            <div>
                <h1 style={{position:"absolute",top:"0%",left:"45%",fontSize:"1.8rem"}}>The World</h1>
                
            </div>
        );
    }

}

export default WorldMap;