/**
* @jest-environment jsdom
*/

import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../Card.jsx';

const server = setupServer(
  rest.get('http://localhost:3000/products/12345/styles/', (req, res, ctx) => {
    let styles = {
      product_id: 12345,
      results: [
        {
          'default?': true,
          photos: [
            {thumbnail_url: 'img-url'}
          ],
          name: 'style name'
        }
      ]
    }
    return res(ctx.json(styles))
  }),
  rest.get('http://localhost:3000/reviews/meta/', (req, res, ctx) => {
    return res(ctx.json({
      ratings: 5,
    }));
  }),
  rest.get('http://localhost:3000/products/12345/', (req, res, ctx) => {
    let info = {
      "name":"Bright Future Sunglasses",
      "category":"Accessories",
      "default_price":"69.00",
    }
    return res(ctx.json(info));
  })
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Card component', async () => {
  render(<Card productId={12345} />);
  await waitFor(() => {
    const button = screen.getByRole('button');
    const previewImg = screen.getByRole('img');
    const category = screen.getByText('Accessories');
    const name = screen.getByRole('heading');
    const price = screen.getByText(/69.00/i);
    const ratings = screen.getByText('5');

    expect(button).toBeInTheDocument();
    expect(previewImg).toHaveAttribute('src', 'img-url');
    expect(category).toBeInTheDocument();
    expect(name).toHaveTextContent('Bright Future Sunglasses');
    expect(price).toHaveTextContent('$69.00');
    expect(ratings).toBeInTheDocument('5');
  });

})