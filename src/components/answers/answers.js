import React, {useState, useEffect} from 'react';

import AnswersListItem from "../answers-list-item";

import './answers.css';

const Answers = ({rightAnswer, answers, setScore, setAnswer, isAnswerRight}) => {

  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    setAttempt(0);
  }, [isAnswerRight]);



  const onItemSelected = (answer, isClicked) => {
    if (!isClicked) {
      setAttempt((attempt) => attempt + 1);
      setAnswer(answer);
    } else {
      setAnswer(answer)
    }
    if (answer.species === rightAnswer.species && !isClicked) {
      setScore((score) => score + 5 - attempt);
    }
  }


  const listItems = answers.map(answer => {
    return (
      <AnswersListItem
        key={answer.species}
        answer={answer}
        wrightAnswer={rightAnswer}
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
