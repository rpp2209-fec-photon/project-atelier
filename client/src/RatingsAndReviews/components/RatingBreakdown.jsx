import React from 'react';
import AveRating from './miniComponents/AveRating.jsx';
/*
show the average rating as number and with stars


*/
export default function RatingBreakdown ({productID}){
  return (
    <div className="RatingBreakdown">
      <h3>Product Breakdown</h3>
      <AveRating productID={productID}/>
    </div>
  );
};