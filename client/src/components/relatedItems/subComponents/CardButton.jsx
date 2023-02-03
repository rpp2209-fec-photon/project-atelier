import React from 'react';
import { TiStarOutline } from 'react-icons/ti';
import { CgCloseO } from 'react-icons/cg';

const CardButton = (props) => {

  const {parent = 'related'} = props;

  const handleStarClick = (e) => {
    alert('Star was clicked!');
  }

  const handleXClick = (e) => {
    alert('X was clicked!');
  }

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