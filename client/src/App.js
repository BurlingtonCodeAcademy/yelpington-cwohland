import { Route, Switch, Redirect } from "react-router-dom"
import './App.css';
import background from "./tan-background.jpg"

import { useState } from 'react'

import Restaurants from './components/Home.js'
import Map from './components/Map.js'

function App (){
  
  return(
    <div> 
      <img id="background" src={background}/>
      <b> Yelpington!</b>
      <ul>
        <li> A Single Pebble </li>
        <li> American Flatbread </li>
        <li> Gaku Ramen </li>
        <li> Hen Of The Wood </li>
        <li> Honey Road </li>
        <li> Leunigs </li>
        <li> Pho-Hung </li>
        <li> Pizzeria Verita </li>
        <li> Splash </li>
        <li> Sweet Waters </li>
      </ul> 

<Map/>
    </div>
  )
}
export default App;
