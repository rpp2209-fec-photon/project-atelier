import React from 'react';
import PrintStar from './PrintStar.jsx';

import {setStars} from '../../compHelpers.js';

export default function StarRating ({Rating, onClick}) {

  return (
    <div className="Rating">
      {setStars(Rating).map((element, i)=>{
        return (
          <PrintStar Key={i + 1} num={element} onClick={onClick} key={i}/>
        );
    })}
    </div>
  );
};