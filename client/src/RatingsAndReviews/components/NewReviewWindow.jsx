import React from 'react';
import {useState} from 'react';

import OverallRating from './miniComponents/OverallRating.jsx';
import Recommend from './miniComponents/Recommend.jsx';
import CharactersInput from './miniComponents/CharactersInput.jsx'
import ReviewTextInputs from './miniComponents/ReviewTextInputs.jsx'
import ImageInput from './miniComponents/ImageInput.jsx';

import {addReview, uploadPictures} from '../../../helpers/helpers.js';

export default function NewReviewWindow({Visibility, setVisibility, characteristics, productName, productID}){

  var [Rating, setRating] = useState(0);
  var [recommend, setRecommend] = useState(null);
  var [characterInputs, setCharacterInputs] = useState({});
  var [reviewSummary, setReviewSummary] = useState('');
  var [reviewBody, setReviewBody] = useState('');
  var [nickname, setNickname] = useState('');
  var [email, setEmail] = useState('');
  var [photoURLs, setPhotoURLs] = useState([]);

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
    } else {
      sumbitReview();
    }
  };

  var sumbitReview = ()=>{

    var completeReview = {
      product_id: productID,
      rating: Rating,
      summary: reviewSummary,
      body: reviewBody,
      recommend: recommend,
      name: nickname,
      email: email,
      photos: [],
      characteristics: characterInputs
    };

    var uploadAllPictures = (x, callback)=>{
      console.log(photoURLs[x]);
      uploadPictures(photoURLs[x])
        .then((res)=>{
          completeReview.photos.push(res.data.url);
          if (photoURLs[x + 1] !== undefined) {
            console.log('running again');
            uploadAllPictures(x + 1, callback);
          } else {
            callback();
          }
        });
    };



    if (photoURLs.length > 0) {
      uploadAllPictures(0, ()=>{
        console.log(completeReview);
        addReview(completeReview).then(()=>{
        console.log('New review submitted');
      });});
    } else {
      console.log(completeReview);

      addReview(completeReview).then(()=>{
        console.log('New review submitted');
      });
    }




  };

  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >

        <div id='NewReviewHeading'>
          <h1>Write Your Review</h1>
          <h3>About the {productName}. </h3>

        </div>

        <p>{errorMessage}</p>

        <div id="InputContainer">
          <div id="NickNameAndEmail">
            <label htmlFor="NicknameInput">Nickname: </label>
            <input id="NicknameInput" onChange={(e)=>{setNickname(e.target.value)}}></input>
            <label htmlFor="EmailInput" >Email: </label>
            <input type="email" id="EmailInput" onChange={(e)=>{setEmail(e.target.value)}}></input>
          </div>
          <div>
            <OverallRating Rating={Rating} setRating={setRating}/>
            <Recommend recommend={recommend} setRecommend={setRecommend}/>
            <CharactersInput characteristics={characteristics} characterInputs={characterInputs} setCharacterInputs={setCharacterInputs}/>
            <ReviewTextInputs reviewSummary={reviewSummary} setReviewSummary={setReviewSummary} reviewBody={setReviewBody} setReviewBody={setReviewBody}/>
            <ImageInput photoURLs={photoURLs} setPhotoURLs={setPhotoURLs}/>

          </div>
          <div className="ReviewFooter">
            <div className="ReviewButton" onClick={()=>{showInputs(); handleSubmit();}}> Submit</div>
            <div className="ReviewButton" onClick={()=>{setVisibility('hidden')}}>Close</div>
          </div>

        </div>




      </div>
    );
  }


};
