import React, {useEffect, useState} from 'react';

const Carousel = ({children}) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const length = 3;

  const style = {transform: `translateX(-${currentIndex * (100)}%)`};

  const next = () => {
    if (currentIndex < length - 1) {
      setCurrentIndex((prevState) => {
        return prevState + 1;
      });
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => {
        return prevState - 1;
      });
    }
  };

  return (
    <div className='carousel-container'>
      <div className='carousel-wrapper'>
        {
          currentIndex > 0 &&
          <button className='left-arrow' onClick={prev}>
            &lt;
          </button>
        }
        <div className='carousel-content-wrapper'>
          <div className='carousel-content' style={style}>
            {children.map((child) => child)}
          </div>
        </div>
        {
          currentIndex < length - 1 &&
          <button className='right-arrow' onClick={next}>
            &gt;
          </button>
        }
      </div>
    </div>
  )
}

export default Carousel;