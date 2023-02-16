import React from 'react';
//import PrintStar from './PrintStar.jsx';

import {setStars} from '../../compHelpers.js';

export default function StarRating ({Rating, onClick}) {

  return (
    <div className="Rating">
      {setStars(Rating).map((element, i)=>{
        return (
          <PrintStar Key={i + 1} num={element} onClick={onClick} key={i}/>
        );
    })}
    </div>
  );
};

var PrintStar = ({Key, num, onClick})=>{

  if (num === 1) {
    return (
      <img className="Star" name ='fullStar' src="../../../resources/fullStar.png" onClick={()=>{if (onClick) {onClick(Key)}}}></img>
    )
  } else if (num === 0.75) {
    return (
      <img className="Star" name ='threeQuarterStar' src="../../../resources/threeQuarterStar.png"></img>
    )
  } else if (num === 0.5) {
    return (
      <img className="Star" name ='halfStar' src="../../../resources/halfStar.png"></img>
    )
  } else if (num === 0.25) {
    return (
      <img className="Star" name ='quarterStar' src="../../../resources/quarterStar.png"></img>
    )
  } else if (num === 0) {
    return (
      <img className="Star" name ='emptyStar' src="../../../resources/emptyStar.png" onClick={()=>{if (onClick) {onClick(Key)}}}></img>
    )
  }

};