import React from 'react';
import {useState, useEffect} from 'react';

import {getAverage, getTotalReviews} from '../compHelpers.js';
import {getMetaReviews} from '../../../helpers/helpers.js';

import AveRating from './miniComponents/AveRating.jsx';
import Breakdown from './miniComponents/Breakdown.jsx';
/*
show the average rating as number and with stars


*/
export default function RatingBreakdown ({productID, ratingFilter, setRatingFilter}){

  var [ratings, setRatings] = useState({});
  var [averageRating, setAverageRating] = useState(0);
  var [numOfRatings, setNumOfRatings] = useState(0);

  useEffect(()=>{
    getMetaReviews(productID).then((data)=>{
      setAverageRating(getAverage(data.data.ratings));
      setNumOfRatings(getTotalReviews(data.data.ratings));
      setRatings(data.data.ratings);
    });
  }, [productID]);

  return (
    <div className="RatingBreakdown">
      <h3>Product Breakdown</h3>
      <AveRating averageRating={averageRating} numOfRatings={numOfRatings}/>
      <Breakdown ratings={ratings} numOfRatings={numOfRatings} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}/>
    </div>
  );
};