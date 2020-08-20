import React from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './question.css';
// import birdImage from './bird.jpg'

const Question = ({ bird }) => {
  return (
    <div className="question jumbotron rounded">
      <img src={bird.image} alt="bird" className="bird-image" />
      <div className="question-data">
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><h3>{bird.name}</h3></li>
          <li className="list-group-item">
            <AudioPlayer
              src={bird.audio}
              autoPlayAfterSrcChange={false}
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
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Question;
