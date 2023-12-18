import React from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/card.css";
import "./assets/css/home.css";
import ContainerComponents from "./components/ContainerComponents";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

import HeaderComponen from "./components/HeaderComponen";
import CharacterDetails from "./components/CharacterDetails";

function App() {
  return (
    <div className="App">
      <HeaderComponen />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<ContainerComponents />} />
        <Route path="/characters/details" element={<CharacterDetails />} />
        <Route path="/characters/filter" element={<ContainerComponents />} />
        <Route path="/characters/filter/details" element={<CharacterDetails />} />
      </Routes>
    </div>
  );
}

export default App;
