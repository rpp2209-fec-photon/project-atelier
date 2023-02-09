import React, { useState } from 'react';
import { TiStar } from 'react-icons/ti';
import { RiCloseCircleFill } from 'react-icons/ri';
import MyOutfits from '../localStorage/index.js';

const CardButton = (props) => {

  const {parent, productId, onClick} = props;

  const handleStarClick = (e) => {
    e.stopPropagation();
    onClick(true);
  };

  const handleXClick = (e) => {
    e.stopPropagation();
    MyOutfits.remove(productId);
    onClick(MyOutfits.items());
  };

  if (parent === 'related') {
    return (
      <div className='card-btn' onClick={handleStarClick}>
        <TiStar />
      </div>
    )
  } else {
    return (
      <div className='card-btn' onClick={handleXClick}>
        <RiCloseCircleFill />
      </div>
    )
  }
}

export default CardButton;