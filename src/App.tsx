// App.tsx
import React from "react";
import WorldMap from "./components/WorldMap";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SriLankanMap from "./components/SriLankanMap";
// import WorldMap from "./components/WorldMap";

const App: React.FC = () => {
  return (
    <WorldMap/>
    // <Router>
    //   <Switch>
    //     <Route path="/sri-lanka-map" Component={SriLankanMap} />
    //     <Route path="/world-map" Component={WorldMap} />
    //     {/* Add more routes as needed */}
    //     <Route path="/" Component={WorldMap} /> {/* Default route */}
    //   </Switch>
    // </Router>
  );
};

export default App;
