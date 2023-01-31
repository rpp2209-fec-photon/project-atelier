import React from 'react';
import {useState} from 'react';
import ReviewTile from './components/ReviewTile.jsx';
import SortReviews from './components/SortReviews.jsx';
import NewReviewWindow from './components/NewReviewWindow.jsx'

import helpers from '../../helpers/helpers.js';

 var dummyData = {
    "product": "71700",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 1276435,
            "rating": 4,
            "summary": "some summary is bad",
            "recommend": true,
            "response": null,
            "body": "erfectly",
            "date": "2022-09-06T00:00:00.000Z",
            "reviewer_name": "haha",
            "helpfulness": 6,
            "photos": []
        },
        {
            "review_id": 1276432,
            "rating": 4,
            "summary": "some",
            "recommend": true,
            "response": null,
            "body": "erfectly",
            "date": "2022-09-06T00:00:00.000Z",
            "reviewer_name": "haha",
            "helpfulness": 6,
            "photos": []
        },
        {
            "review_id": 1276445,
            "rating": 5,
            "summary": "some sum is bad",
            "recommend": true,
            "response": null,
            "body": "erfectly",
            "date": "2022-09-06T00:00:00.000Z",
            "reviewer_name": "hihihih",
            "helpfulness": 3,
            "photos": []
        },
        {
            "review_id": 1276451,
            "rating": 5,
            "summary": "test2test2test2test2test2test2test2",
            "recommend": true,
            "response": null,
            "body": "test2test2test2test2test2",
            "date": "2022-09-06T00:00:00.000Z",
            "reviewer_name": "test2",
            "helpfulness": 2,
            "photos": [
                {
                    "id": 2456029,
                    "url": "https://i.ibb.co/Syy5cfy/Image-created-with-a-mobile-phone.png"
                }
            ]
        },
        {
            "review_id": 1276440,
            "rating": 5,
            "summary": "some sum is bad",
            "recommend": true,
            "response": null,
            "body": "erfectly",
            "date": "2022-09-06T00:00:00.000Z",
            "reviewer_name": "haha",
            "helpfulness": 1,
            "photos": []
        }
    ]
};


export default function RatingsAndReviews () {

  var showMoreReviews = ()=>{
    setReviewsShown(reviewsShown + 2);
  };

  var [reviewsShown, setReviewsShown] = useState(2);
  var [newReviewVisibility, setNewReviewVisibility] = useState('hidden');
  return (

    <div className="RatingsAndReviews">
      <SortReviews/>

    <div className="ReviewList">

      {
        dummyData.results.map((review, index)=>{

          if (index < reviewsShown) {
            return (
              <div className="ReviewTile" key={index}>
              <ReviewTile Review={review} key={index}/>
              </div>
              );
          }
        })
      }
    </div>
      <button onClick={showMoreReviews}>More Reviews</button>
      <button onClick={()=>{setNewReviewVisibility('show')}}>Create Review</button>
    <NewReviewWindow Visibility={newReviewVisibility} setVisibility={setNewReviewVisibility}/>

    </div>
  );
};