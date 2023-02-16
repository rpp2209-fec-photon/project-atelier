import React from 'react';
import {useState} from 'react';


export default function ({ratings, numOfRatings, ratingFilter, setRatingFilter}){


  var toggleFilter = (rating)=>{


    if (ratingFilter.includes(rating)) {
      var copy = [...ratingFilter];
      copy.splice(copy.indexOf(rating), 1);
      setRatingFilter(copy);
    } else {
      setRatingFilter([...ratingFilter, rating]);
    }
  };

  return (
    <div className="Breakdown">
      <h3>Rating Breakdown: </h3>
      {[5, 4, 3, 2, 1].map((num)=>{


        return (
          <div key={num} className="StarBreakdown" onClick={()=>{toggleFilter(num)}}>
            <h3>{num}</h3>
            <PercBar ratingCount={ratings[num]} numOfRatings={numOfRatings}/>
            <p>{ratings[num]}</p>
          </div>
        );
      })}
    </div>
  );
};

var PercBar = ({ratingCount, numOfRatings}) => {


  return (
    <div className="PercBar">
      <div className="Green Bar" style={{width: `${(ratingCount/numOfRatings)*100}%`}}></div>
      <div className="Gray Bar" style={{width: `${ ((numOfRatings - ratingCount)/numOfRatings)*100}%`}}></div>
    </div>
  );
};