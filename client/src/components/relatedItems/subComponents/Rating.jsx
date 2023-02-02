import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarOutline } from '@fortawesome/free-regular-svg-icons';


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
    0.75: 'three-quarters'
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
      {Array(filledStars).fill(null).map((_, index) => (
        <FontAwesomeIcon key={index} icon={faStar} className='star filled'/>
      ))}
      {fractionalStar !== 0 && (
        <FontAwesomeIcon
          icon={faStar}
          className={`star fraction ${fractionalMapping[fractionalStar]}`}
          style={{
            position: 'relative',
            overflow: 'hidden',
            width: '1.5em'
          }}
        >
          <FontAwesomeIcon
            icon={faStar}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              color: '#ccc',
              width: '1.5em'
            }}
          />
        </FontAwesomeIcon>
      )}
      {Array(5 - filledStars - (hasFraction ? 1 : 0)).fill(null).map((_, index) => (
        <FontAwesomeIcon key={index + filledStars + (hasFraction ? 1 : 0)} icon={faStar} className='star' />
      ))}
    </div>
  );
};

export default Rating;