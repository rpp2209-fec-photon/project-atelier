/**
* @jest-environment jsdom
*/
import React from 'react';


import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductInfo from '../ProductInfo.jsx'


test('productInfo', async () => {
    const {container} = render(<ProductInfo original_price={'100'}
      sale_price={'26'} ratings={5}/>);
    await waitFor(() => {
      const original_price = screen.getByText('$100');
      const sale_price = screen.getByText('$26');
      const Category = screen.getByText('Category');
      const jumpto = container.querySelector('.jumpto')
      fireEvent.click(jumpto)
      expect(original_price).toHaveTextContent('100');
      expect(sale_price).toHaveTextContent('26');
      expect(Category).toHaveTextContent('Category');
    });
  
  })