import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../Card.jsx';
import RelatedProducts from '../RelatedProducts.jsx';
import YourOutfit from '../YourOutfit.jsx';

describe('Card', () => {
  it('should render the component', () => {
    let productId = 71700;
    render(<Card productId={productId}/>);
    screen.debug();
  });
});
