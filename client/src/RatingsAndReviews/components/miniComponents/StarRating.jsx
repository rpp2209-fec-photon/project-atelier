import React from 'react';
import PrintStar from './PrintStar.jsx';

export default function StarRating ({Rating}) {

  var setStars = ()=>{
    var stars = [0, 0, 0, 0, 0];

    for (var x = 0; x < Math.floor(Rating); x++) {
      stars[x] = 1;
    }

    if (Rating % 1 !== 0) {
      if (Rating % 1 < .25) {
        stars[stars.indexOf(0)] = 0.25;
      } else if (Rating % 1 < .50) {
        stars[stars.indexOf(0)] = 0.50;
      } else if (Rating % 1 < .75) {
        stars[stars.indexOf(0)] = 0.75;
      }
    }

    return stars;
  };


  return (
    <div className="Rating">
      {setStars().map((element, i)=>{
        return (
          <PrintStar key={i} num={element}/>
        );
    })}
    </div>
  );
};