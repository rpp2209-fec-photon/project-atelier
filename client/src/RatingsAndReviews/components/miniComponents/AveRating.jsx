import React from 'react';
import StarRating from './StarRating.jsx';

export default function AveRating ({averageRating, numOfRatings}){




  return (
    <div>
      <StarRating Rating={averageRating}/>
      <p>{numOfRatings} Reviews</p>
    </div>
  );
};