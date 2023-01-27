import React from 'react';

export default function ReviewImages ({Images}){
  return (
    <div class="ReviewImagesList">
      {
        Images.map((photoInfo)=>{
          return (
            <img class="Review Image" src={`${photoInfo.url}`}></img>
          );
        })
      }
    </div>
  );
};