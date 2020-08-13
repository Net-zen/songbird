import React from 'react';

import './bird-details.css';

const BirdDetails = () => {
  return (
    <div className="col-md-6">
      <div className="bird-details card">
        <p className="instruction">
          <span>Послушайте плеер.</span>
          <span>Выберите птицу из списка</span>
        </p>
      </div>
    </div>
  )
};

export default BirdDetails;
