import React, { useRef, useEffect } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import useSound from "use-sound";

import './question.css';
import hiddenBirdImage from './bird.jpg'
import errorSound from './error.mp3';
import successSound from './success.mp3';

const Question = ({ bird, answer, isAnswerRight }) => {

    const player = useRef();

    const [error, errorData] = useSound(errorSound);
    const [success, successData] = useSound(successSound);



    useEffect(() => {
      if (isAnswerRight) {
        player.current.audio.current.pause();
        success();
      }
      return () => successData.stop();
    }, [isAnswerRight]);

    useEffect(() => {
      if (bird && answer) {
        if (answer.species !== bird.species && !isAnswerRight) {
          error();
        }
      }
      return () => errorData.stop();
    }, [bird, answer]);

  const abort = () => {
    player.current.audio.current.pause();
  };

  return (
    <div className="question jumbotron rounded">
      <img src={isAnswerRight ? bird.image : hiddenBirdImage} alt="bird" className="bird-image" />
      <div className="question-data">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><h3>{isAnswerRight ? bird.name : '*****'}</h3></li>
          <li className="list-group-item">
            <AudioPlayer
              src={bird.audio}
              onAbort={() => abort()}
              showJumpControls={false}
              layout='horizontal-reverse'
              customProgressBarSection={
                [
                  RHAP_UI.CURRENT_TIME,
                  RHAP_UI.PROGRESS_BAR,
                  RHAP_UI.DURATION,
                  RHAP_UI.VOLUME
                ]}
              customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
              customAdditionalControls={[]}
              ref={player}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Question;
