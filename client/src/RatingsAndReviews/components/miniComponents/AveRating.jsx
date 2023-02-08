import React from 'react';
import {useState, useEffect} from 'react';
import {getAverage} from '../../compHelpers.js';
import {getMetaReviews} from '../../../../helpers/helpers.js';
import StarRating from './StarRating.jsx';

export default function AveRating ({productID}){


  var [averageRating, setAverageRating] = useState(0);

  useEffect(()=>{
    getMetaReviews(productID).then((data)=>{
      setAverageRating(getAverage(data.data.ratings));
    });
  }, []);

  return (
    <div>
      <p>Average Rating: {averageRating}</p>
      <StarRating Rating={averageRating}/>
    </div>
  );
};