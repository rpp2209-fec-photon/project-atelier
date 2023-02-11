import React from 'react';


import PercBar from './PercBar.jsx';


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