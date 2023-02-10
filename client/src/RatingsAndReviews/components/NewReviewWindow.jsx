import React from 'react';
import {useState} from 'react';

import OverallRating from './miniComponents/OverallRating.jsx';
import Recommend from './miniComponents/Recommend.jsx';
import CharactersInput from './miniComponents/CharactersInput.jsx'
import ReviewTextInputs from './miniComponents/ReviewTextInputs.jsx'

export default function NewReviewWindow({Visibility, setVisibility, characteristics, productName}){

  var [Rating, setRating] = useState(0);
  var [recommend, setRecommend] = useState(true);
  var [characterInputs, setCharacterInputs] = useState({});
  //
  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >

        <div id='ReviewHeading'>
          <h1>Write Your Review</h1>
          <h3>About the {productName}. </h3>
          <div id="NickNameAndEmail">
            <label htmlFor="NicknameInput">Nickname: </label>
            <input id="NicknameInput"></input>
            <label htmlFor="EmailInput">Email: </label>
            <input type="email" id="EmailInput"></input>
          </div>
        </div>

        <div id="InputContainer">
          <div>
            <OverallRating Rating={Rating} setRating={setRating}/>
            <Recommend recommend={recommend} setRecommend={setRecommend}/>
            <CharactersInput characteristics={characteristics}/>
            <ReviewTextInputs/>
            <input type="file"></input>
          </div>
        </div>



        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};
