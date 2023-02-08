import React from 'react';
import {useState} from 'react';

import OverallRating from './miniComponents/OverallRating.jsx';
import Recommend from './miniComponents/Recommend.jsx';

export default function NewReviewWindow({Visibility, setVisibility}){

  var [Rating, setRating] = useState(0);
  var [recommend, setRecommend] = useState(true);

  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >
        <h1>Write Your Review</h1>

        <OverallRating Rating={Rating} setRating={setRating}/>
        <Recommend recommend={recommend} setRecommend={setRecommend}/>

        <textarea className="ReviewInput"> About the product here.</textarea>

        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};