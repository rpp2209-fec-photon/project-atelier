import React from 'react';

export default function NewReviewWindow({Visibility, setVisibility}){

  if (Visibility === 'show') {

    return (
      <div className="NewReviewWindow" >
        <h1>Write Your Review</h1>

        <textarea className="ReviewInput"> About the product here.</textarea>

        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};