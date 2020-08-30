import React, { useRef } from 'react';
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import './bird-details.css';

const BirdDetails = ({ bird }) => {

  const player = useRef();

  const abort = () => {
    player.current.audio.current.pause();
  }

  if (!bird) {
    return (
      <div className="col-md-6">
        <div className="bird-details card">
          <p className="instruction">
            <span>Послушайте плеер.</span>
            <br/>
            <span>Выберите птицу из списка</span>
          </p>
        </div>
      </div>
    )
  } else {
    return (
      <div className="col-md-6">
        <div className="bird-details card">
          <div className='card-body'>
            <img className="bird-image" src={bird.image} alt={bird.name} />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>{bird.name}</h4>
              </li>
              <li className="list-group-item">
                <span>{bird.species}</span>
              </li>
              <li className="list-group-item">
                <AudioPlayer
                  src={bird.audio}
                  onAbort={() => abort()}
                  showJumpControls={false}
                  layout='horizontal-reverse'
                  customProgressBarSection={
                    [
                      RHAP_UI.PROGRESS_BAR,
                    ]}
                  customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
                  customAdditionalControls={[]}
                  ref={player}
                />
              </li>
            </ul>
          </div>
          <span>{bird.description}</span>
        </div>
      </div>
    )
  }
};

export default BirdDetails;
