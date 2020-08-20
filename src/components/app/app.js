import React, {useState} from "react";

import './app.css'

import Header from "../header";
import Question from "../question";
import Answers from "../answers";
import BirdDetails from "../bird-details";
import BirdService from "../../services/bird-servive";


const App = () => {

  const birdService = new BirdService();

  const getAnswers = () => {
    const wrightAnswerIndex = birdService.getRandomNumber(0, 5);
    const answers = [];
    while (answers.length < 6) {
      if (answers.length === wrightAnswerIndex) {
        answers.push(bird)
      } else {
        const randomBird = birdService.getRandomBird();
        if ((answers.findIndex(answer => answer.species === randomBird.species) === -1)
          && (randomBird.species !== bird.species))  {
          answers.push(randomBird)
        }
      }
    }
    return answers;
  }

  const [score, setScore] = useState(0);
  const [bird, setBird] = useState(birdService.getRandomBird());
  const [answers, setAnswers] = useState(getAnswers());
  const [answer, setAnswer] = useState(null);


  return (
    <div className="container">
      <Header score={score}/>
      <Question bird={bird}/>
      <div className="row mb2">
        <Answers wrightAnswer={bird} answers={answers} score={score} setScore={setScore} setAnswer={setAnswer} />
        <BirdDetails bird={answer} />
      </div>
      <button className="btn btn-next">Next level</button>
    </div>
  )
}

export default App;
