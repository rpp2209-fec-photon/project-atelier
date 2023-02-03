import React from 'React';
const img = './resources/plus.png';

const PlusCard = () => {
  return (
    <div className='plus'>
      <img src={img} alt='plus-image'/>
      <h3> ADD OUTFIT </h3>
    </div>
  )
}

export default PlusCard;