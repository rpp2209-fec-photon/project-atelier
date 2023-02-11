import React from 'react';

export default function ReviewImages ({Images}){
  if (Images.length > 0) {
    return (
      <div className="Review ImagesList">
        <h3>Images: </h3>
        {
          Images.map((photoInfo, index)=>{
            return (
              <img className="Review Image" src={`${photoInfo.url}`} key={index}></img>
            );
          })
        }
      </div>
    );
  }
};