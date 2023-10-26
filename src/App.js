import logo from './logo.svg';
import './App.css';
import FetchData from './components/FetchData';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import CharacterDetails from './components/CharacterDetails';



function App() {
  return (


    <div className="App">

      <Header />
      <Routes>

        <Route exact path='/' Component={FetchData} />
        <Route exact path='/character/:id' Component={CharacterDetails} />
      </Routes>
      <Footer />
    </div >

  );
}

export default App;
