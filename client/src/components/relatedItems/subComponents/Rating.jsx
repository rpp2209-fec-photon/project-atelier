import React from 'react';
import { FaStar } from 'react-icons/fa';

const Rating = (props) => {

  let totalRatings = 0;
  let numOfRatings = 0;
  for (let rating in props.ratings) {
    totalRatings += (parseInt(rating) * parseInt(props.ratings[rating]));
    numOfRatings += parseInt(props.ratings[rating]);
  }

  const average = totalRatings / numOfRatings;
  const filledStars = Math.floor(average);
  const fractionalPart = average - filledStars;
  const fractionalMapping = {
    0.25: 'quarter',
    0.5: 'half',
    0.75: 'three-quarter'
  }
  let fractionalStar;

  if (fractionalPart >= 0.125 && fractionalPart < 0.375) {
    fractionalStar = 0.25;
  } else if (fractionalPart >= 0.375 && fractionalPart < 0.625) {
    fractionalStar = 0.5;
  } else if (fractionalPart >= 0.625 && fractionalPart < 0.875) {
    fractionalStar = 0.75;
  } else {
    fractionalStar = 0;
  }

  let hasFraction = fractionalStar !== 0;


  return (
    <div className='rating'>
      {console.log(props.ratings)}
      {Array(filledStars).fill(null).map((_, index) => (
        <FaStar key={index} className='star filled'/>
      ))}
      {fractionalStar !== 0 && (
        <FaStar className={`star fraction ${fractionalMapping[fractionalStar]}`} />
      )}
      {Array(5 - filledStars - (hasFraction ? 1 : 0)).fill(null).map((_, index) => (
        <FaStar key={index + filledStars + (hasFraction ? 1 : 0)} className='star' />
      ))}
    </div>
  );
};

export default Rating;