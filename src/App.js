import React from 'react';
import './App.css';
import Home from './components/home/home'
import Episodes from './components/pages/episodes'
import Navbar from "./components/navbar/navbar"

import { BrowserRouter } from 'react-router-dom'

const Route = require("react-router-dom").Route

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/episodes" component={Episodes} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
