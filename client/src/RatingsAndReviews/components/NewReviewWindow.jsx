import React from 'react';
import {useState} from 'react';

import OverallRating from './miniComponents/OverallRating.jsx';
import Recommend from './miniComponents/Recommend.jsx';
import CharactersInput from './miniComponents/CharactersInput.jsx'

export default function NewReviewWindow({Visibility, setVisibility, characteristics}){

  var [Rating, setRating] = useState(0);
  var [recommend, setRecommend] = useState(true);
  var [characterInputs, setCharacterInputs] = useState({});
  //
  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >
        <h1>Write Your Review</h1>

        <div id="InputContainer">
          <div>
            <OverallRating Rating={Rating} setRating={setRating}/>
            <Recommend recommend={recommend} setRecommend={setRecommend}/>
            <CharactersInput characteristics={characteristics}/>
          </div>
        </div>



        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};
