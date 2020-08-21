import React from 'react'

import './greetings.css'

import Victory from "../victory";


const Greetings = ({ score, restart}) => {

  if (score === 30){
    return(
        <div className="jumbotron game-over">
          <Victory />
        </div>
    )
  } else {
    return (
      <div className="jumbotron game-over">
        <h1 className="display-3 text-center">Поздравляем!</h1>
        <p className="lead text-center">Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
        <button className="btn btn-next btn-game-over" onClick={() => restart()}>Попробовать еще раз!</button>
      </div>
    )
  }



};

export default Greetings;
