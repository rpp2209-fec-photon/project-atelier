import React from 'react';
import {useState, useEffect} from 'react';
import ReviewTile from './components/ReviewTile.jsx';
import SortReviews from './components/SortReviews.jsx';
import NewReviewWindow from './components/NewReviewWindow.jsx';
import RatingBreakdown from './components/RatingBreakdown.jsx';
import ProductBreakdown from './components/ProductBreakdown.jsx';

import helpers from '../../helpers/helpers.js';


export default function RatingsAndReviews ({productID}) {


  var [productReviews, setProductReviews] = useState({results:[]});
  var [reviewsShown, setReviewsShown] = useState(2);
  var [newReviewVisibility, setNewReviewVisibility] = useState('hidden');
  var [characteristics, setCharacteristics] = useState({});

  useEffect(()=>{
    helpers.getReviews(1, 6, 'newest', productID)
    .then((reviews)=>{
      setProductReviews({...reviews.data});
    }).then(()=>{
      helpers.getMetaReviews(productID)
      .then((data)=>{
        setCharacteristics(data.data.characteristics);
      });
    });
  }, []);

  var showMoreReviews = ()=>{
    setReviewsShown(reviewsShown + 2);
  };


  return (

    <div id="RatingsAndReviews">
      <div>
        <RatingBreakdown productID={productID}/>
        <ProductBreakdown productID={productID} characteristics={characteristics}/>
      </div>
    <div className="ReviewList">

      {
        productReviews.results.map((review, index)=>{

          if (index < reviewsShown) {
            return (
              <div className="ReviewTile" key={index}>
              <ReviewTile Review={review} key={index}/>
              </div>
              );
          }
        })
      }
      <button onClick={showMoreReviews}>More Reviews</button>
      <button onClick={()=>{setNewReviewVisibility('show')}}>Create Review</button>
    </div>
    <NewReviewWindow Visibility={newReviewVisibility} setVisibility={setNewReviewVisibility} characteristics={characteristics}/>

    </div>
  );
};