import React from 'react';
import {useState} from 'react';

export default function ReviewTextInputs ({reviewSummary, setReviewSummary, reviewBody, setReviewBody}){

  var [usedChars, setUsedChars] = useState(0);

  return (
    <>
      <h3>Review Summary: </h3>
      <TextInput maxChar={60} rows={'1'} placeHolder={'Example: Best purchase ever!'}  handleChange={(e)=>{setReviewSummary(e.target.value)}}/>
      <h3>Review Body: </h3>
      <TextInput maxChar={1000} rows={'15'}placeHolder={'Why did you like the product or not?'} handleChange={(e)=>{setUsedChars(e.target.value.length);setReviewBody(e.target.value)}}/>
      <ShowUsedChars usedChars={usedChars}/>
    </>
  );
};


var TextInput = ({maxChar, placeHolder, handleChange, rows})=>{

  return (
    <textarea onChange={handleChange}className='TextInput' rows={rows} cols='60' maxLength={maxChar} defaultValue={placeHolder}></textarea>
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