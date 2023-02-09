import React from 'react';


import PercBar from './PercBar.jsx';


export default function ({ratings, numOfRatings}){

  return (
    <div className="Breakdown">
      <h3>Rating Breakdown: </h3>
      {[5, 4, 3, 2, 1].map((num)=>{


        return (
          <div key={num} className="StarBreakdown">
            <h3>{num}</h3>
            <PercBar ratingCount={ratings[num]} numOfRatings={numOfRatings}/>
          </div>
        );
      })}
    </div>
  );
};