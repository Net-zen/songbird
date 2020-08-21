import React from "react";

import './victory.css';


const Victory = () => {
  return(
    <div className="victory">

      <div>
        <h1>Поздравляем!</h1>
        <h2>Вы набрали максимальное количество баллов!</h2>
      </div>

      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three" />
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four" />
      </div>

    </div>
  );
};

export default Victory;
