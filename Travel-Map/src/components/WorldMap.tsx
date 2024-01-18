import React,{ Component } from "react";
import countries from "./../data/countries.json";

class WorldMap extends Component{
state ={};
    render(){
        return(
            <div>
                <h1 style={{position:"absolute",top:"0%",left:"45%",fontSize:"1.8rem"}}>The World</h1>
            </div>
        );
    }

}

export default WorldMap;