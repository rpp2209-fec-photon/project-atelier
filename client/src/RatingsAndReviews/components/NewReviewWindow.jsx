import React from 'react';

export default function NewReviewWindow({Visibility, setVisibility}){

  if (Visibility === 'show') {

    return (
      <div class="NewReviewWindow" >
        <h1>hello</h1>

        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
      </div>
    );
  }
};