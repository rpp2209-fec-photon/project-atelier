import React, { useState } from 'react';
import { TiStarOutline } from 'react-icons/ti';
import { CgCloseO } from 'react-icons/cg';
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
      <TiStarOutline onClick={handleStarClick}/>
    )
  } else {
    return (
      <CgCloseO onClick={handleXClick}/>
    )
  }
}

export default CardButton;