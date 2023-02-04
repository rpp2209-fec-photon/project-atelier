import React from 'react';

export default function PrintStar ({Key, num, onClick}){

  if (num === 1) {
    return (
      <img className="Star" src="../../../resources/fullStar.png" onClick={()=>{if (onClick) {onClick(Key)}}}></img>
    )
  } else if (num === 0.75) {
    return (
      <img className="Star" src="../../../resources/threeQuarterStar.png"></img>
    )
  } else if (num === 0.5) {
    return (
      <img className="Star" src="../../../resources/halfStar.png"></img>
    )
  } else if (num === 0.25) {
    return (
      <img className="Star" src="../../../resources/quarterStar.png"></img>
    )
  } else if (num === 0) {
    return (
      <img className="Star" src="../../../resources/emptyStar.png" onClick={()=>{if (onClick) {onClick(Key)}}}></img>
    )
  }

};