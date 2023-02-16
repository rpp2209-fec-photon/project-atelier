import React from 'react';
import {useState, useEffect, useRef} from 'react';

import ReviewList from './components/ReviewList.jsx';
import SortReviews from './components/SortReviews.jsx';
import NewReviewWindow from './components/NewReviewWindow.jsx';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import ImageZoom from './components/miniComponents/ImageZoom.jsx';


import helpers from '../../helpers/helpers.js';
import {getTotalReviews} from './compHelpers.js';


export default function RatingsAndReviews ({productID, productName}) {

  var [sort, setSort] = useState('relevant');
  var [ratingFilter, setRatingFilter] = useState([]);

  var [productReviews, setProductReviews] = useState({results:[]});
  var totalReviews = useRef(0);
  var [newReviewVisibility, setNewReviewVisibility] = useState('hidden');
  var [ImageZoomVisibility, setImageZoomVisibility] = useState('hidden');
  var [imageURL, setImageURL] = useState('');
  var [characteristics, setCharacteristics] = useState({});
  var [reviewsShown, setReviewsShown] = useState(2);

  useEffect(()=>{
    //get meta data of reviews
    helpers.getMetaReviews(productID)
    .then((data)=>{
      setCharacteristics(data.data.characteristics);

      totalReviews.current = getTotalReviews(data.data.ratings);

      //get all the reviews
      helpers.getReviews(1, totalReviews.current, sort, productID)
      .then((reviews)=>{
        if (ratingFilter.length > 0) {
          setProductReviews({...reviews.data, results: filterReviews(reviews.data)});
        } else {
          setProductReviews({...reviews.data});

        }

        setReviewsShown(2);
      });
    })

  }, [productID, sort, ratingFilter]);

  var filterReviews = (reviews)=>{

    var filteredReviews = [];

    console.log(ratingFilter);

    //loop through the reviews
    for (var x = 0; x < reviews.results.length; x++) {
      //check if the review passes through the filter
      for (var i = 0; i < ratingFilter.length; i++) {
        if (reviews.results[x].rating === ratingFilter[i]) {
          //push the review to the filteredReviews array
          filteredReviews.push(reviews.results[x]);
        }
      }
    }
    return filteredReviews;
  };


  var showMoreReviews = (increment)=>{

    setReviewsShown(reviewsShown+increment);

  };








  return (

    <div id="RatingsAndReviews">
      <h1>Ratings and Reviews</h1>
      <div id="RatingsAndReviewsContent">
      <div id="LeftMenu">
        <h3>Product Breakdown</h3>
        <RatingBreakdown productID={productID} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} ratingFilter={ratingFilter}/>
        <ProductBreakdown productID={productID} characteristics={characteristics}/>
      </div>

      <div id='RightSection'>
        <SortReviews setSort={setSort}/>
        <ReviewList productReviews={productReviews} productID={productID} setImageURL={setImageURL} setImageZoomVisibility={setImageZoomVisibility} reviewsShown={reviewsShown} ratingFilter={ratingFilter}/>
        <div className='ReviewFooter'>
          <div className="ReviewButton" onClick={()=>{showMoreReviews(2)}}><span>MORE REVIEWS</span></div>
          <div className="ReviewButton" onClick={()=>{setNewReviewVisibility('show')}}><span>CREATE REVIEW</span></div>
        </div>

      </div>

    <NewReviewWindow Visibility={newReviewVisibility} setVisibility={setNewReviewVisibility} characteristics={characteristics} productName={productName}/>
    <ImageZoom Visibility={ImageZoomVisibility} setVisibility={setImageZoomVisibility} imageURL={imageURL}/>
    </div>
    </div>
  );
};