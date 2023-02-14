import React from 'react';
import {useState, useEffect, useRef} from 'react';
import ReviewTile from './components/ReviewTile.jsx';
import SortReviews from './components/SortReviews.jsx';
import NewReviewWindow from './components/NewReviewWindow.jsx';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';

import helpers from '../../helpers/helpers.js';


export default function RatingsAndReviews ({productID, productName}) {

  var [sort, setSort] = useState('newest');
  var [ratingFilter, setRatingFilter] = useState([]);

  var [productReviews, setProductReviews] = useState({results:[]});
  var [newReviewVisibility, setNewReviewVisibility] = useState('hidden');
  var [characteristics, setCharacteristics] = useState({});
  var page = useRef(1);
  var [reviewsShown, setReviewsShown] = useState(2);

  useEffect(()=>{
    console.log(productID);
    helpers.getReviews(1, 6, sort, productID)
    .then((reviews)=>{
      console.log(reviews.data);
      setProductReviews({...reviews.data});
      setReviewsShown(2);
    }).then(()=>{
      helpers.getMetaReviews(productID)
      .then((data)=>{
        setCharacteristics(data.data.characteristics);
      });
    });
  }, [productID, sort]);

  var showMoreReviews = (increment)=>{

    setReviewsShown(reviewsShown+increment);

    if (reviewsShown % 6 === 0 ) {
      console.log('running');
      helpers.getReviews(1, productReviews.results.length + increment, sort, productID)
      .then((reviews)=>{
        setProductReviews({...reviews.data});
      });
    }
  };


  return (

    <div id="RatingsAndReviews">
      <div id="LeftMenu">
        <RatingBreakdown productID={productID} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}/>
        <ProductBreakdown productID={productID} characteristics={characteristics}/>
      </div>

    <div className="ReviewList">
      <SortReviews setSort={setSort}/>
      {
        productReviews.results.map((review, index)=>{

          if (index < reviewsShown) {
            //if we have filters
            if (ratingFilter.length > 0) {
              var show = false;
              for (var x = 0; x < ratingFilter.length; x++) {
                if (review.rating === ratingFilter[x]) {
                  show = true;
                }
              }

              if (show) {
                return (
                  <div className="ReviewTile" key={index}>
                    <ReviewTile Review={review} key={index} productID={productID}/>
                  </div>
                  );
              } else {
                //showMoreReviews(1);
              }
            }
            //when we don't have filters
            else {
              return (
                <div className="ReviewTile" key={index}>
                  <ReviewTile Review={review} key={index} productID={productID}/>
                </div>
                );
            }
          }

        })
      }
      <button onClick={()=>{showMoreReviews(2)}}>More Reviews</button>
      <button onClick={()=>{setNewReviewVisibility('show')}}>Create Review</button>
    </div>
    <NewReviewWindow Visibility={newReviewVisibility} setVisibility={setNewReviewVisibility} characteristics={characteristics} productName={productName}/>

    </div>
  );
};