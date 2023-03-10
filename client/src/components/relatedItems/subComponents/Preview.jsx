import React from 'react';

const Preview = (props) => {

  const {style} = props;
  let src = '../../../resources/noImage.png';

  if (style.photos) {
    style.photos[0].url !== null ? src = style.photos[0].thumbnail_url : src;
  }

  return <img
    className='preview'
    src={src}
    alt={style.name || ''}
  />
}

export default Preview;