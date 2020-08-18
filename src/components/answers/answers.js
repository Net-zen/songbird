import React, {useState} from 'react';

import AnswersListItem from "../answers-list-item";

import './answers.css';

const Answers = ({ wrightAnswer, answers, setScore }) => {


  const [answerCost, setAnswerCost] = useState(6);
  const [attempt, setAttempt] = useState(0);


  const onItemSelected = (answer) => {
    setAttempt((attempt) => attempt + 1);
    if (answer.species === wrightAnswer.species) {
      // setScore((score) => score + answerCost)
    }
  }

  const getClass = (answer) => {
    if (attempt > 0 && answer.species === wrightAnswer.species){
      return 'li-btn success'
    } else if (attempt > 0 && answer.species !== wrightAnswer.species){
      return 'li-btn error'
    } else if (attempt === 0) {
      return 'li-btn'
    }
  }

  const listItems = answers.map(answer => {
    return (
      <AnswersListItem
        key={answer.species}
        answer={answer}
        wrightAnswer={wrightAnswer}
        onItemSelected={onItemSelected} />
    )
  })

  return (
    <div className="col-md-6">
      <ul className="item-list list-group">
        {listItems}
      </ul>
    </div>
  )
};

export default Answers;
