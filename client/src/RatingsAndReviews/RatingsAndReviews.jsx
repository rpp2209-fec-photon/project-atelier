import React from 'react';
import {useState, useEffect, useRef} from 'react';

import ReviewList from './components/ReviewList.jsx';
import SortReviews from './components/SortReviews.jsx';
import NewReviewWindow from './components/NewReviewWindow.jsx';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';
import ImageZoom from './components/miniComponents/ImageZoom.jsx';


import helpers from '../../helpers/helpers.js';


export default function RatingsAndReviews ({productID, productName}) {

  var [sort, setSort] = useState('relevant');
  var [ratingFilter, setRatingFilter] = useState([]);

  var [productReviews, setProductReviews] = useState({results:[]});
  var [newReviewVisibility, setNewReviewVisibility] = useState('hidden');
  var [ImageZoomVisibility, setImageZoomVisibility] = useState('hidden');
  var [imageURL, setImageURL] = useState('');
  var [characteristics, setCharacteristics] = useState({});
  var page = useRef(1);
  var [reviewsShown, setReviewsShown] = useState(2);

  useEffect(()=>{
    //get the first 6 reviews
    helpers.getReviews(1, 6, sort, productID)
    .then((reviews)=>{
      setProductReviews({...reviews.data});
      setReviewsShown(2);
    }).then(()=>{
      //get meta data of reviews
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
        <RatingBreakdown productID={productID} ratingFilter={ratingFilter} setRatingFilter={setRatingFilter} ratingFilter={ratingFilter}/>
        <ProductBreakdown productID={productID} characteristics={characteristics}/>
      </div>

      <div id='RightSection'>
        <SortReviews setSort={setSort}/>
        <ReviewList productReviews={productReviews} productID={productID} setImageURL={setImageURL} setImageZoomVisibility={setImageZoomVisibility} reviewsShown={reviewsShown} ratingFilter={ratingFilter}/>
      <button onClick={()=>{showMoreReviews(2)}}>More Reviews</button>
      <button onClick={()=>{setNewReviewVisibility('show')}}>Create Review</button>
      </div>

    <NewReviewWindow Visibility={newReviewVisibility} setVisibility={setNewReviewVisibility} characteristics={characteristics} productName={productName}/>
    <ImageZoom Visibility={ImageZoomVisibility} setVisibility={setImageZoomVisibility} imageURL={imageURL}/>
    </div>
  );
};