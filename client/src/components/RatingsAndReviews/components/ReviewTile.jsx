import React from 'react';

import ReviewDate from './miniComponents/ReviewDate.jsx';

export default function ReviewTile ({ Review }) {

  return (
    <>
    <div class="Review Corner">
      <ReviewDate Date={Review.date}/>
      <p class="Review Rating">{Review.rating}</p>
    </div>

    <p class="Review Summary">{Review.summary}</p>
    <p class="Review Name">{Review.reviewer_name}</p>
    <p class="Review Body"> {Review.body}</p>
    <p class="Review Helpfulness">Helpfulness: {Review.helpfulness}</p>
    </>
  );
};