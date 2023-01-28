import React from 'react';

import ReviewDate from './miniComponents/ReviewDate.jsx';
import ReviewImages from './miniComponents/ReviewImages.jsx';


export default function ReviewTile ({ Review }) {

  return (
    <>
    <div className="Review Corner">
      <ReviewDate Date={Review.date}/>
      <p className="Review Rating">{Review.rating}</p>
    </div>

    <p className="Review Summary">{Review.summary}</p>
    <p className="Review Name">{Review.reviewer_name}</p>
    <p className="Review Body"> {Review.body}</p>
    <p className="Review Helpfulness">Helpfulness: {Review.helpfulness}</p>
    <ReviewImages Images={Review.photos}/>
    </>
  );
};