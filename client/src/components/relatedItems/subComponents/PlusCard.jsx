import React from 'react';
const img = './resources/plus.png';

const PlusCard = (props) => {
  return (
    <div className='plus' onClick={props.onClick}>
      <img src={img} alt='plus-image'/>
      <h3> ADD OUTFIT </h3>
    </div>
  )
}

export default PlusCard;