/**
* @jest-environment jsdom
*/

import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import RelatedProducts from '../RelatedProducts.jsx';
import YourOutfit from '../YourOutfit.jsx';

const server = setupServer(
  rest.get('http://localhost:3000/products/', (req, res, ctx) => {
    return res(ctx.json([1, 2, 3, 4, 5]));
  }),
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('YourOutfit component', async () => {
  render(<YourOutfit />);
  expect(screen.getByRole('heading')).toHaveTextContent('Your Outfit');
  expect(screen.getByRole('img')).toHaveAttribute('alt', 'plus-image');
});