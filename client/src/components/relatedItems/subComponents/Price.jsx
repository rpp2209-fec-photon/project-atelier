import React from 'react';

const Price = (props) => {
  const {productStyle} = props;

  if (productStyle.sale_price) {
    return (
      <div className='price'>
        <span className='sale'> ${productStyle.sale_price} </span>
        <span className='strike'> ${productStyle.original_price} </span>
      </div>
    )
  }
  return (
    <div className='price'>
      ${productStyle.original_price}
    </div>
  )
}

export default Price;