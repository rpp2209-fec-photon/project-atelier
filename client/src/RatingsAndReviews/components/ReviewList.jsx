import React from 'react';

import ReviewTile from './ReviewTile.jsx';


export default function ReviewList ({productReviews, productID, setImageURL, setImageZoomVisibility, reviewsShown, ratingFilter}){
  return (
    <div className="ReviewList">
        {
          productReviews.results.map((review, index)=>{
            if (index < reviewsShown) {
              return (
                <div className="ReviewTile" key={index}>
                  <ReviewTile Review={review} key={index} productID={productID} setImageURL={setImageURL} setImageZoomVisibility={setImageZoomVisibility}/>
                </div>
                );
            }
          })
        }
    </div>
  );
};