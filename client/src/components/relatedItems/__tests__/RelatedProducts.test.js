/**
* @jest-environment jsdom
*/

import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import RelatedProducts from '../RelatedProducts.jsx';
import Card from '../Card.jsx';

const server = setupServer(
  rest.get('http://localhost:3000/products/12345/related/', (req, res, ctx) => {
    return res(ctx.json([1, 2, 3, 4, 5]));
  }),
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Card component', async () => {
  render(<RelatedProducts productId={12345} />);
  expect(screen.getByRole('heading')).toHaveTextContent('Related Products');
});