import React, { Suspense } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/card.css'
import ContainerComponents from './components/ContainerComponents';
const LoadingIndicator = () => <div>Loading...</div>;

function App() {

  return (


    <div className="App">





      <ContainerComponents />



    </div >

  );
}

export default App;

