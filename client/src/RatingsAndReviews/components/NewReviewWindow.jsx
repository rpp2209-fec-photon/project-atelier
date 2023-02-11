import React from 'react';
import {useState} from 'react';

import OverallRating from './miniComponents/OverallRating.jsx';
import Recommend from './miniComponents/Recommend.jsx';
import CharactersInput from './miniComponents/CharactersInput.jsx'
import ReviewTextInputs from './miniComponents/ReviewTextInputs.jsx'

export default function NewReviewWindow({Visibility, setVisibility, characteristics, productName}){

  var [Rating, setRating] = useState(0);
  var [recommend, setRecommend] = useState(null);
  var [characterInputs, setCharacterInputs] = useState({});
  var [reviewSummary, setReviewSummary] = useState('');
  var [reviewBody, setReviewBody] = useState('');
  var [nickname, setNickname] = useState('');
  var [email, setEmail] = useState('');
  var [photoURL, setPhotoURL] = useState([]);

  var [errorMessage, setErrorMessage] = useState('');

  var showInputs = ()=>{
    console.log('Rating', Rating);
    console.log('Recommend', recommend);
    console.log('characterInputs', characterInputs);
    console.log('reviewsSummary', reviewSummary);
    console.log('reviewBody', reviewBody);
  };

  var handleSubmit = ()=>{
    setErrorMessage('');
    if (Rating === 0) {
      setErrorMessage('please select a rating');
    } else if (recommend === null) {
      setErrorMessage('please select a recommendation option');
    } else if (Object.keys(characterInputs).length !== Object.keys(characteristics).length) {
      setErrorMessage('please select an option for the characteristics');
    } else if (nickname === '') {
      setErrorMessage('please enter your nickname');
    } else if (email === '') {
      setErrorMessage('please enter your email');
    } else if (reviewBody.length < 50) {
      setErrorMessage('please elaborate on your review body');
    }
  };

  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >

        <div id='ReviewHeading'>
          <h1>Write Your Review</h1>
          <h3>About the {productName}. </h3>
          <div id="NickNameAndEmail">
            <label htmlFor="NicknameInput">Nickname: </label>
            <input id="NicknameInput" onChange={(e)=>{setNickname(e.target.value)}}></input>
            <label htmlFor="EmailInput" >Email: </label>
            <input type="email" id="EmailInput" onChange={(e)=>{setEmail(e.target.value)}}></input>
          </div>
        </div>

        <p>{errorMessage}</p>

        <div id="InputContainer">
          <div>
            <OverallRating Rating={Rating} setRating={setRating}/>
            <Recommend recommend={recommend} setRecommend={setRecommend}/>
            <CharactersInput characteristics={characteristics} characterInputs={characterInputs} setCharacterInputs={setCharacterInputs}/>
            <ReviewTextInputs reviewSummary={reviewSummary} setReviewSummary={setReviewSummary} reviewBody={setReviewBody} setReviewBody={setReviewBody}/>
            <input type="file" onChange={(e)=>{console.log(e.target.value)}}></input>
          </div>

          <button onClick={()=>{showInputs(); handleSubmit();}}> Submit</button>
        </div>



        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }


};
