import React, { useState } from 'react';

import './answers-list-item.css';

const AnswersListItem = ({ answer,  rightAnswer, isAnswerRight, onItemSelected }) => {

  const [isClicked, setIsClicked] = useState(false);
  const [btnClass, setBtnClass]  = useState('li-btn');

  const onItemClick = () => {
    if (!isClicked) {
      onItemSelected(answer, isClicked);
      setIsClicked(true);
    } else {
      onItemSelected(answer, isClicked);
    }

    if (!isAnswerRight) {
      if (answer.species !== rightAnswer.species) {
        setBtnClass('li-btn error');
      } else if (answer.species === rightAnswer.species) {
        setBtnClass('li-btn success');
      }
    }
  }

  return (
    <li className="list-group-item"
        key={answer.species}
        onClick={() => onItemClick(answer)}>
      <span className={btnClass} />
      {answer.name}
    </li>
  )
}

export default AnswersListItem;
