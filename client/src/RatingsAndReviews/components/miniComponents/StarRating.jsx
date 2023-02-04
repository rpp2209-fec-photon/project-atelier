import React from 'react';
import PrintStar from './PrintStar.jsx';

import {setStars} from '../../compHelpers.js';

export default function StarRating ({Rating}) {

  return (
    <div className="Rating">
      {setStars(Rating).map((element, i)=>{
        return (
          <PrintStar key={i} num={element}/>
        );
    })}
    </div>
  );
};