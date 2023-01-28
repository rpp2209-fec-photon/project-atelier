import React, {useState} from 'react';

const Carousel = (props) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(4);
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
        <button className='nav prev' onClick={prev}>
          &lt;
        </button>
      }
      <div className='carousel-slides'>
        {children.map((child, index) => {
          if (index >= currentIndex && index < currentIndex + slides) {
            return child;
          }
        })}
      </div>
      { currentIndex < children.length - slides &&
        <button className='nav next' onClick={next}>
          &gt;
        </button>
      }
    </div>

  )
}

export default Carousel;