/**
* @jest-environment jsdom
*/

import React, {useState} from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {handlers} from './handlers.js';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import RelatedProducts from '../RelatedProducts.jsx';

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('RelatedProducts component', async () => {
  const {container} = render(<RelatedProducts currentProductId={54321} />);
  await waitFor(() => {
    expect(screen.getByText(/related products/i)).toBeInTheDocument();
    expect(container.querySelector)
    expect(screen.getByText(/accessories/i)).toBeInTheDocument();
  })
});
