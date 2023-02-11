/**
* @jest-environment jsdom
*/

import React, {useState} from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {handlers} from './handlers.js';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Carousel from '../Carousel.jsx';

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('should render Carousel correctly', async () => {
  const dummyEl = <></>
  const {container} = render(<Carousel/>);
  expect(container.querySelector("[class='carousel-container']")).toBeInTheDocument();
  expect(screen.getAllByRole('button').length).toBe(2);
  expect(container.querySelector("[class='carousel-slides']"));
})