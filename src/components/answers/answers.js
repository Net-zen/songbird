import React, {useState} from 'react';

import AnswersListItem from "../answers-list-item";

import './answers.css';

const Answers = ({wrightAnswer, answers, setScore, setAnswer}) => {

  const [attempt, setAttempt] = useState(0);


  const onItemSelected = (answer) => {
    setAttempt((attempt) => attempt + 1);
    setAnswer(answer);
    if (answer.species === wrightAnswer.species) {
      setScore((score) => score + 5 - attempt);
    }
  }


  const listItems = answers.map(answer => {
    return (
      <AnswersListItem
        key={answer.species}
        answer={answer}
        wrightAnswer={wrightAnswer}
        onItemSelected={onItemSelected}/>
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
