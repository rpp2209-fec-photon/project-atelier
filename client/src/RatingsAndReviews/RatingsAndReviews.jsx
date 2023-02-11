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

  var [productReviews, setProductReviews] = useState({results:[]});
  var [reviewsShown, setReviewsShown] = useState(2);
  var [newReviewVisibility, setNewReviewVisibility] = useState('hidden');
  var [characteristics, setCharacteristics] = useState({});

  var page = useRef(1);

  useEffect(()=>{
    console.log(productID);
    helpers.getReviews(page.current, 6, sort, productID)
    .then((reviews)=>{
      setProductReviews({...reviews.data});
    }).then(()=>{
      helpers.getMetaReviews(productID)
      .then((data)=>{
        setCharacteristics(data.data.characteristics);
      });
    });
  }, [productID, sort]);

  var showMoreReviews = ()=>{
    if (reviewsShown % 6 !== 0) {
      setReviewsShown(reviewsShown + 2);
    } else if (reviewsShown % 6 === 0) {
      page.current ++;
      helpers.getReviews(page.current, 6, sort, productID)
      .then((reviews)=>{
        setProductReviews({...productReviews, results: productReviews.results.concat(reviews.data.results)});
        setReviewsShown(reviewsShown + 2);
      });
    }
  };


  return (

    <div id="RatingsAndReviews">
      <div>
        <RatingBreakdown productID={productID}/>
        <ProductBreakdown productID={productID} characteristics={characteristics}/>
      </div>
      <SortReviews setSort={setSort}/>
    <div className="ReviewList">

      {
        productReviews.results.map((review, index)=>{

          if (index < reviewsShown) {
            console.log(review);
            return (
              <div className="ReviewTile" key={index}>
                <ReviewTile Review={review} key={index} productID={productID}/>
              </div>
              );
          }
        })
      }
      <button onClick={showMoreReviews}>More Reviews</button>
      <button onClick={()=>{setNewReviewVisibility('show')}}>Create Review</button>
    </div>
    <NewReviewWindow Visibility={newReviewVisibility} setVisibility={setNewReviewVisibility} characteristics={characteristics} productName={productName}/>

    </div>
  );
};