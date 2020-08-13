import React from "react";

import './app.css'

import Header from "../header";
import Question from "../question";
import Answers from "../answers";
import BirdDetails from "../bird-details";
import BirdService from "../../services/bird-servive,js";


const App = () => {

  const birdService = new BirdService();

  return (
    <div className="container">
      <Header />
      <Question bird={birdService.getRandomBird()}/>
      <div className="row mb2">
        <Answers />
        <BirdDetails />
      </div>
      <button className="btn btn-next">Next level</button>
    </div>
  )
}

export default App;
