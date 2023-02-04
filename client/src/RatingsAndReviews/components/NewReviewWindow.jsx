import React from 'react';
import {useState} from 'react';
import StarRating from './miniComponents/StarRating.jsx';
export default function NewReviewWindow({Visibility, setVisibility}){

  var [Rating, setRating] = useState(0);

  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >
        <h1>Write Your Review</h1>

        <StarRating Rating={Rating} onClick={setRating}/>

        <textarea className="ReviewInput"> About the product here.</textarea>

        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};