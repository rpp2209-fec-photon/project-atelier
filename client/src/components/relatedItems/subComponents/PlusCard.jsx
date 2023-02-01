import React from 'React';
const img = './resources/plus.png';

const PlusCard = () => {
  return (
    <div className='plus'>
      <img src={img} alt='plus-image'/>
      <h5> ADD OUTFIT </h5>
    </div>
  )
}

export default PlusCard;