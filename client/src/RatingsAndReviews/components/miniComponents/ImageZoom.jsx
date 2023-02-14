import React from 'react';

export default function ImageZoom ({Visibility, setVisibility, imageURL}) {

  if (Visibility === 'show') {
    return (
      <div id='ZoomedImageWindow'>
        <button onClick={()=>{setVisibility('hidden')}}>Close</button>
        <img className="ZoomedImage" src={`${imageURL}`} ></img>
      </div>
    );
  }
};