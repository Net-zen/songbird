import React from 'react';

import './question.css';
import birdImage from './bird.jpg'

const Question = () => {
  return (
    <div className="question jumbotron rounded">
      <img src={birdImage} alt="bird" className="bird-image" />
      <div className="question-data">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><h3>Название птицы</h3></li>
          <li className="list-group-item">Здесь будет плеер</li>
        </ul>
      </div>
    </div>
  )
}

export default Question;
