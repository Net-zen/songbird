import React, { useState } from 'react';

import './answers-list-item.css';

const AnswersListItem = ({ answer, wrightAnswer, onItemSelected }) => {

  const [isClicked, setIsClicked] = useState(false);
  const [isInProgress, setIsInProgress] = useState(false);

  const onItemClick = () => {
    if (!isClicked) {
      onItemSelected(answer, isClicked);
      setIsClicked(true);
    } else {
      onItemSelected(answer, isClicked);
    }
  }

  const getClass = () => {
    if (isClicked){
      if (answer.species === wrightAnswer.species){
        return 'li-btn success'
      } else {
        return 'li-btn error'
      }
    }
    return 'li-btn'
  }

  return (
    <li className="list-group-item"
        key={answer.species}
        onClick={() => onItemClick(answer)}>
      <span className={getClass()} />
      {answer.name}
    </li>
  )
}

export default AnswersListItem;
