import Navbar from "./components/Navbar/Navbar"

import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
//import {Nav, Navbar} from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header"> Concatenate App </header>
      <footer></footer>
    </div>
  );
}

export default App;
