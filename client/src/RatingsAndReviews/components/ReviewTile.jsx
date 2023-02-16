import React from 'react';
import {useState} from 'react';
//import ReviewImages from './miniComponents/ReviewImages.jsx';
import StarRating from './miniComponents/StarRating.jsx';


export default function ReviewTile ({ Review , productID, setImageURL, setImageZoomVisibility }) {


  var [voted, setVoted] = useState(false);
  var [helpfulness, setHelpfulness] = useState(Review.helpfulness);

  return (
    <>
    <div className="TileHeader">
      <div className="Review Corner">
        <ReviewDate Date={Review.date}/>
        <StarRating Rating={Review.rating}/>
        <Recommend recommended={Review.recommend}/>
      </div>

      <p className="Review Summary">{Review.summary}</p>
      <p className="Review Name">{Review.reviewer_name}</p>
    </div>

    <ReviewBody body={Review.body}/>
    <ReviewImages Images={Review.photos} setImageURL={setImageURL} setImageZoomVisibility={setImageZoomVisibility}/>
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

var ReviewBody = ({body})=>{

  var [showMore, setShowMore] = useState(false);

  if (!showMore && body.length > 250) {
    return (
      <>
      <p className="Review Body">{body.slice(0, 251)}</p>
      <div className="ReviewButton ShowMore" onClick={()=>{setShowMore(true)}}><span>SHOW MORE</span></div>
      </>

    );
  } else {
    return (
      <p className="Review Body">{body}</p>
    )
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

var ReviewImages = ({Images, setImageURL, setImageZoomVisibility}) => {
  if (Images.length > 0) {
    return (
      <div className="Review ImagesList">
        <h3>Images: </h3>
        {
          Images.map((photoInfo, index)=>{
            return (
              <img className="Review Image" src={`${photoInfo.url}`} key={index} onClick={()=>{ setImageURL(photoInfo.url); setImageZoomVisibility('show')}}></img>
            );
          })
        }
      </div>
    );
  }
};