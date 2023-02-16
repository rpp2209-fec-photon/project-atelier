import React, { useState, useEffect } from "react";

const Carousel = ({ children, itemsToShow = 4, currentProductId }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const items = React.Children.toArray(children);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const handleNext = () => {
    setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, [currentProductId]);

  return (
    <div className='carousel-container'>
      <button className={`nav prev ${currentSlide <= 0 ? 'hidden' : ''}`}  onClick={handlePrevious}> &lt; </button>
      <div className='carousel-slides'>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: index >= currentSlide && index < currentSlide + itemsToShow ? "inline-block" : "none",
              padding: "0 10px"
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <button className={`nav next ${(currentSlide + itemsToShow) >= items.length ? 'hidden' : ''}`} onClick={handleNext}> &gt; </button>
    </div>
  );
};

export default Carousel;
