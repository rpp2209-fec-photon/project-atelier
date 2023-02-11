import React from 'react';

import ReviewImages from './miniComponents/ReviewImages.jsx';
import StarRating from './miniComponents/StarRating.jsx';


export default function ReviewTile ({ Review }) {

  return (
    <>
    <div className="Review Corner">
      <ReviewDate Date={Review.date}/>
      <StarRating Rating={Review.rating}/>
    </div>

    <p className="Review Summary">{Review.summary}</p>
    <p className="Review Name">{Review.reviewer_name}</p>
    <p className="Review Body"> {Review.body}</p>
    <p className="Review Helpfulness">Helpfulness: {Review.helpfulness}</p>
    <ReviewImages Images={Review.photos}/>
    </>
  );
};



var ReviewDate = ({Date}) => {

  var monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var year = Date.substring(0, 4);
  var month = Date.substring(5, 7);
  var day = Date.substring(8, 10);
  return (
    <p className="Review Date">{monthsList[parseInt(month)-1] + ' ' + day + ', ' + year}</p>
  );
};