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

  )
}

export default Carousel;