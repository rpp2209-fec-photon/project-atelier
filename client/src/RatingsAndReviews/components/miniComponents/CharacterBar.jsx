import React from 'react';

export default function CharacterBar ({value, low, high}){
  return (
    <div className="CharacterBarHolder">

      <p className="CharacterIcon" style={{left: `${(value - 1) * 25 - 5}%`}}>^</p>

      <div className="BarSection">
        <div className="Character Bar"></div>
        <p>{low}</p>
      </div>

      <div className="BarSection">
        <div className="Character Bar"></div>

      </div>

      <div className="BarSection">
        <div className="Character Bar"></div>
        <p>{high}</p>
      </div>
    </div>
  );
};