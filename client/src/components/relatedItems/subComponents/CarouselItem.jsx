import React from 'react';

const CarouselItem = (props) => {
  const {children} = props;

  return <div style={{display: 'inline-block', padding: '0 10px'}}>
    {children}
  </div>
};

export default CarouselItem;