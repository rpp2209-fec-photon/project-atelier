import React from 'react';

export default function ReviewImages ({Images}){
  return (
    <div class="Review ImagesList">
      <h3>Images: </h3>
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