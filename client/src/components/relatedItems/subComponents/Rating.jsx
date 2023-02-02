import React from 'react';
import StarRating from '/client/src/RatingsAndReviews/components/miniComponents/StarRating.jsx';

const Rating = (props) => {

  let totalRatings = 0;
  let numOfRatings = 0;
  for (let rating in props.ratings) {
    totalRatings += (parseInt(rating) * parseInt(props.ratings[rating]));
    numOfRatings += parseInt(props.ratings[rating]);
  }

  const average = totalRatings / numOfRatings;

  return <StarRating Rating={average} />
};

export default Rating;