import React from 'react';

export default function NewReviewWindow({Visibility, setVisibility}){

  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >
        <h1>hello</h1>

        <textarea className="ReviewInput"> Enter your review here.</textarea>

        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};