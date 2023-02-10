import React from 'react';

export default function ReviewTextInputs (){
  return (
    <>
      <TextInput maxChar={60} placeHolder={'Example: Best purchase ever!'}/>
      <TextInput maxChar={1000} placeHolder={'Why did you like the product or not?'}/>
    </>
  );
};


var TextInput = ({maxChar, placeHolder})=>{

  return (
    <textarea className='TextInput' rows="10" cols="30" maxLength={maxChar}>{placeHolder}</textarea>
  );
};