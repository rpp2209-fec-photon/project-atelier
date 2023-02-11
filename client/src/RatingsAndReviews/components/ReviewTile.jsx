import React from 'react';
import {useState} from 'react';
import ReviewImages from './miniComponents/ReviewImages.jsx';
import StarRating from './miniComponents/StarRating.jsx';


export default function ReviewTile ({ Review , productID}) {

  console.log(Review);

  var [voted, setVoted] = useState(false);
  var [helpfulness, setHelpfulness] = useState(Review.helpfulness);

  return (
    <>
    <div className="Review Corner">
      <ReviewDate Date={Review.date}/>
      <StarRating Rating={Review.rating}/>
    </div>

    <p className="Review Summary">{Review.summary}</p>
    <p className="Review Name">{Review.reviewer_name}</p>
    <Recommend recommended={Review.recommend}/>
    <p className="Review Body"> {Review.body}</p>
    <ReviewImages Images={Review.photos}/>
    <Helpful helpfulness={helpfulness} setHelpfulness={setHelpfulness} reviewID={Review.review_id} voted={voted} setVoted={setVoted}/>

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

var Recommend = ({recommended}) => {
  if (recommended) {
    return (
      <p>I recommend this product</p>
    );
  }
};

import {markAsHelpful} from '../../../helpers/helpers.js';

var Helpful = ({helpfulness, setHelpfulness, reviewID, voted, setVoted})=>{
  return (
    <>
    <p>Helpful?</p>
    <p onClick={()=>{if (!voted) {markAsHelpful(reviewID); setVoted(true); setHelpfulness(helpfulness + 1)}}}>Yes {`(${helpfulness})`}</p>
    </>
  );
};