import React from 'react';
import Route from 'react-router-dom/Route'

import './App.css';
import Home from './components/home/home'
import Episodes from './components/pages/episodes'
import Navbar from "./components/navbar/navbar"

import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/agregar" component={Episodes} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
