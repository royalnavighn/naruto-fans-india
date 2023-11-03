import React, { Suspense } from 'react';

import './App.css';
import FetchData from './components/FetchData';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';
import Home from './components/Home';
import ClanCharacterList from './components/datasList/clan/ClanCharacterList';
import VillageCharactersList from './components/datasList/village/VillageCharactersList';
import KekkeiGenkaiCharacterList from './components/datasList/kekkei-genkai/KekkeiGenkaiCharacterList'
import TeamCharacterList from './components/datasList/teams/TeamCharacterList';
import SearchBox from './components/SearchBox';


const LoadingIndicator = () => <div>Loading...</div>;

function App() {
  return (


    <div className="App">

      <Header />
      <Home />
      <Routes>
        <React.Fragment>
          <Route exact path='/' />
          <Route exact path='/:selected' Component={FetchData} />
          <Route exact path='/character/:id/:characterName' Component={CharacterDetails} />
          <Route exact path='/tailed-beast/:id/:selectName/' Component={CharacterDetails} />
          <Route exact path='/akatsuki/:id/:selectName/' Component={CharacterDetails} />
          <Route exact path='/kara/:id/:selectName/' Component={CharacterDetails} />
          <Route exact path='/:select/:selectid/:selectName/characters/:id/:postname' Component={CharacterDetails} />
          <Route exact path='/clan/:id/:selectName/characters/' Component={ClanCharacterList} />
          <Route exact path='/village/:id/:selectName/characters/' Component={VillageCharactersList} />
          <Route exact path='/kekkei-genkai/:id/:selectName/characters/' Component={KekkeiGenkaiCharacterList} />
          <Route exact path='/team/:id/:selectName/characters/' Component={TeamCharacterList} />
        </React.Fragment>
      </Routes>
      <Footer />
    </div >

  );
}

export default App;
