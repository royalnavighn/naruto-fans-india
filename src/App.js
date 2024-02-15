import React, { createContext, useContext, useEffect, useState } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/css/card.css";
import "./assets/css/home.css";
import ContainerComponents from "./components/ContainerComponents";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import HeaderComponen from "./components/HeaderComponen";
import CharacterDetails from "./components/CharacterDetails";
import JoinOurTeam from "./components/JoinOurTeam";
import { urlOfDb } from "./helper/constants";
import axios from "axios";

const entireDataContext = createContext();
function App() {
  const [entireData, setEntireData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      setEntireData(await axios.get(`${urlOfDb}/character?page=1&limit=1431`));
    };
    fetchData();
  }, [urlOfDb]);

  return (
    <div className="App">
      <entireDataContext.Provider value={entireData}>
        <HeaderComponen />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<ContainerComponents />} />
          <Route path="/characters/details" element={<CharacterDetails />} />
          <Route path="/characters/filter" element={<ContainerComponents />} />
          <Route
            path="/characters/filter/details"
            element={<CharacterDetails />}
          />
          <Route path="/joinourteam" element={<JoinOurTeam />} />
        </Routes>
      </entireDataContext.Provider>
    </div>
  );
}

export default App;


export function useEntireData() {
  return useContext(entireDataContext);
}