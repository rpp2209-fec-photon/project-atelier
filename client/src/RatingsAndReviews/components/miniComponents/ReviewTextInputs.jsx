import React from 'react';
import {useState} from 'react';

export default function ReviewTextInputs ({reviewSummary, setReviewSummary, reviewBody, setReviewBody}){

  var [usedChars, setUsedChars] = useState(0);

  return (
    <>
      <TextInput maxChar={60} placeHolder={'Example: Best purchase ever!'}  handleChange={(e)=>{setReviewSummary(e.target.value)}}/>
      <TextInput maxChar={1000} placeHolder={'Why did you like the product or not?'} handleChange={(e)=>{setUsedChars(e.target.value.length);setReviewBody(e.target.value)}}/>
      <ShowUsedChars usedChars={usedChars}/>
    </>
  );
};


var TextInput = ({maxChar, placeHolder, handleChange})=>{

  return (
    <textarea onChange={handleChange}className='TextInput' rows="10" cols="30" maxLength={maxChar} defaultValue={placeHolder}></textarea>
  );
};

var ShowUsedChars = ({usedChars})=>{
  if (usedChars >= 50) {
    return (<p>Minimum reached</p>)
  } else {
    return (
      <p>Minimum requires characters left: {50 - usedChars}.</p>
    );
  }
};