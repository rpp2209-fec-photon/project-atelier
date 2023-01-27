import React from 'react';
import {useState} from 'react';
import ReviewTile from './components/ReviewTile.jsx';


var dummyData = {
  "product": "71697",
  "page": 0,
  "count": 5,
  "results": [
      {
          "review_id": 1278242,
          "rating": 5,
          "summary": "this item is the bestest",
          "recommend": false,
          "response": null,
          "body": "besstetetegweagwegaewgewgewgwe",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "test",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2457035,
                  "url": "https://i.ibb.co/qyjLsQJ/9d84af8321dc1b02d8165e916e2a6d8f.jpg"
              },
              {
                  "id": 2457036,
                  "url": "https://i.ibb.co/dfB4B1w/9d84af8321dc1b02d8165e916e2a6d8f.jpg"
              }
          ]
      },
      {
          "review_id": 1278241,
          "rating": 5,
          "summary": "gweGewgewgewag",
          "recommend": false,
          "response": null,
          "body": "awegaewgawegaewgaew",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "gweagewagawe",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2457034,
                  "url": "https://i.ibb.co/jVL5L8f/Screen-Shot-2023-01-03-at-8-56-44-PM.png"
              }
          ]
      },
      {
          "review_id": 1278233,
          "rating": 5,
          "summary": "fqwfqwfqwfqwf",
          "recommend": false,
          "response": null,
          "body": "fwqfqwfwqfqw",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "blahblah",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2457030,
                  "url": "https://ibb.co/KzLRDLw"
              }
          ]
      },
      {
          "review_id": 1278231,
          "rating": 5,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "",
          "date": "2023-01-04T00:00:00.000Z",
          "reviewer_name": "testing",
          "helpfulness": 0,
          "photos": [
              {
                  "id": 2457026,
                  "url": "https://ibb.co/89pTK5J"
              }
          ]
      },
      {
          "review_id": 1278222,
          "rating": 5,
          "summary": "",
          "recommend": false,
          "response": null,
          "body": "",
          "date": "2023-01-03T00:00:00.000Z",
          "reviewer_name": "jesrjserjersjresjresjes",
          "helpfulness": 0,
          "photos": []
      }
  ]
};



export default function RatingsAndReviews () {

  var showMoreReviews = ()=>{
    setReviewsShown(reviewsShown + 2);
  };

  var [reviewsShown, setReviewsShown] = useState(2);

  return (
    <div class="ReviewList">

      <label for='Sort'>Sort by: </label>
      <select id='Sort' name='Sort'>
        <option>Helpful</option>
        <option>Newest</option>
        <option>Relevant</option>
      </select>
      {
        dummyData.results.map((review, index)=>{

          if (index < reviewsShown) {
            return (
              <div class="ReviewTile">
              <ReviewTile Review={review}/>
              </div>
              );
          }
        })
      }

      <button onClick={showMoreReviews}>More Reviews</button>

      <button>Create Review</button>
    </div>
  );
};