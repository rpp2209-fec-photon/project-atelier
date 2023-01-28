<<<<<<< HEAD
import React, {useState} from 'react';

const Carousel = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const {children} = props;

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const next = () => {
    if (currentIndex < children.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className='carousel-container'>
      { currentIndex > 0 &&
        <button className='prev' onClick={prev}>
          Prev
        </button>
      }
      <div className='carousel-slides'>
        {[children[currentIndex], children[currentIndex + 1], children[currentIndex + 2]]}
      </div>
      { currentIndex < children.length - 1 &&
        <button className='next' onClick={next}>
          Next
        </button>
      }
    </div>

=======
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
>>>>>>> related-products
  )
}

export default Carousel;