import React from "react";
import "./App.css"
import TShirts from "./components/details";
import Navbar from "./components/navbar";


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <TShirts />
    </React.Fragment>
  );
};

export default App;
