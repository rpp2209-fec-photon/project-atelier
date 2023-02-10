import React from 'react';

import {useState} from 'react';

export default function PercBar ({ratingCount, numOfRatings}){


  return (
    <div className="PercBar">
      <div className="Green Bar" style={{width: `${ratingCount}%`}}></div>
      <div className="Gray Bar" style={{width: `${ numOfRatings - ratingCount}%`}}></div>
    </div>
  );
};