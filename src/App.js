import React from 'react';
import {Routes, Route} from "react-router-dom"
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';
import Home from './components/Home';
import Beer from './components/Beer';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path = "/" element={<Home/>}> </Route>
        <Route exact path = "/beers" element={<Beers/>}> </Route>
        <Route exact path = "/random-beer" element={<RandomBeer/>}> </Route>
        <Route exact path = "/new-beer" element={<NewBeer/>}> </Route>
        <Route exact path = "/beers/:id_" element={<Beer/>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
