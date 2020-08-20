import React, {useEffect, useState} from "react";

import './app.css'

import Header from "../header";
import Question from "../question";
import Answers from "../answers";
import BirdDetails from "../bird-details";
import BirdService from "../../services/bird-servive";


const App = () => {

  const birdService = new BirdService();


  // const getNextBtnClass = () => {
  //   if (isAnswerRight) {
  //     return 'btn btn-next'
  //   }
  //   return 'btn'
  // }

  const [isAnswerRight, setIsAnswerRight] = useState(false);
  const [round, setRound] = useState(0);
  const [score, setScore] = useState(0);
  const [bird, setBird] = useState(birdService.getBirdForRound(0));
  const [answers, setAnswers] = useState(birdService.getAnswersForRound(0));
  const [answer, setAnswer] = useState(null);

  useEffect(() => {
    if (answer && bird && !isAnswerRight) {
      if (answer.species === bird.species) {
        setIsAnswerRight(true);
      }
    }
  }, [answer, bird, isAnswerRight]);

  useEffect(() => {
    if (isAnswerRight) {
      setBird(birdService.getBirdForRound(round));
      setAnswers(birdService.getAnswersForRound(round));
      setIsAnswerRight(false);
    }
  },[round]);

  const onNext = () => {
    if (isAnswerRight) {
      setRound((round) => round + 1);
    }

  }

  return (
    <div className="container">
      <Header score={score} round={round}/>
      <Question bird={bird}/>
      <div className="row mb2">
        <Answers
          wrightAnswer={bird}
          answers={answers}
          score={score}
          setScore={setScore}
          setAnswer={setAnswer}
          isAnswerRight={isAnswerRight} />
        <BirdDetails bird={answer}/>
      </div>
      <button className={isAnswerRight ? 'btn btn-next' : 'btn'} onClick={() => onNext()}>Next level</button>
    </div>
  )
}

export default App;
