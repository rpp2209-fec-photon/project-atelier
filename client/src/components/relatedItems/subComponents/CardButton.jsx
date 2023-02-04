import React from 'react';
import { TiStarOutline } from 'react-icons/ti';
import { CgCloseO } from 'react-icons/cg';
import MyOutfits from '../localStorage/index.js';

const CardButton = (props) => {

  const {parent, productId, setOutfitIds} = props;

  const handleStarClick = (e) => {
    e.stopPropagation();
    alert('Star was clicked!');
  };

  const handleXClick = (e) => {
    e.stopPropagation();
    MyOutfits.remove(productId);
    setOutfitIds(MyOutfits.items());
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