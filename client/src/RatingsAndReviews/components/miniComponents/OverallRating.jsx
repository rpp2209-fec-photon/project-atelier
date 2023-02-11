import React from 'react';

import StarRating from './StarRating.jsx';
import {starText} from '../../compHelpers.js';

export default function OverallRating ({Rating, setRating}){


  return (
    <div>
      <p className="inputTitle">*Overall Rating: </p>
      <StarRating Rating={Rating} onClick={setRating}/>
      <p>{starText(Rating)}</p>
    </div>

  );

};