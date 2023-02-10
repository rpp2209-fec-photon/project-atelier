/**
* @jest-environment jsdom
*/

import React, {useState} from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {handlers} from './handlers.js';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../Card.jsx';

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Card component action button in Related Products list', async () => {
  const {container} = render(<Card productId={12345} parent={'related'} />);
  await waitFor(() => {
    const sgv = container.querySelector("[baseProfile='tiny']");
    expect(sgv).toBeDefined()
  });
});

test('Card component action button in Your Outfit list', async () => {
  const {container} = render(<Card productId={12345} parent={'outfit'} />);
  await waitFor(() => {
    const sgv = container.querySelector("[fill='none']");
    expect(sgv).toBeDefined()
  });
});

test('Card component preview image', async () => {
  const {container} = render(<Card productId={12345} />);
  await waitFor(() => {
    const img = container.querySelector("[class='preview']")
    expect(img).toHaveAttribute('alt', 'style name');
    expect(img).toHaveAttribute('src', 'img-url');
  });
});

test('Card component category and name', async () => {
  const {container} = render(<Card productId={12345} />);
  await waitFor(() => {
    expect(screen.getByText(/accessories/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Bright Future Sunglasses/i)[0]).toBeInTheDocument();
  });
});

test('Card component Price with sale_price', async () => {
  const {container} = render(<Card productId={12345} />);
  await waitFor(() => {
    expect(screen.getByText(/45.00/i)).toBeInTheDocument();
    expect(screen.getByText(/69.00/i)).toBeInTheDocument();
  });
});

test('Card component Price without sale_price', async () => {
  const {container} = render(<Card productId={54321} />);
  await waitFor(() => {
    expect(screen.getByText(/100.00/i)).toBeInTheDocument();
  });
});

test('Card component Rating', async () => {
  const {container} = render(<Card productId={54321} />);
  await waitFor(() => {
    const stars = screen.getAllByRole('img');
    expect(stars[1]).toHaveAttribute('src', '../../../resources/fullStar.png');
    expect(stars[2]).toHaveAttribute('src', '../../../resources/fullStar.png');
    expect(stars[3]).toHaveAttribute('src', '../../../resources/halfStar.png');
    expect(stars[4]).toHaveAttribute('src', '../../../resources/emptyStar.png');
    expect(stars[5]).toHaveAttribute('src', '../../../resources/emptyStar.png');
  });
});

test('When card is clicked, currentProductId should be updated', async () => {
  const App = () => {
    const [currentProductId, setCurrentProductId] = useState(54321);
    return (
      <>
        <div>{currentProductId}</div>
        <Card productId={12345} setCurrentProductId={setCurrentProductId} />
      </>
    )
  }
  const {container} = render(<App/>);
  await waitFor(() => {
    const card = container.querySelector("[class='card']");
    fireEvent.click(card);
    expect(screen.getByText(/12345/i)).toBeInTheDocument();
  })
});

test('Open and close comparison modal', async () => {
  const {container} = render(<Card productId={12345} parent={'related'} />);
  await waitFor(() => {
    const actionBtn = container.querySelector("[class='card-btn']");
    fireEvent.click(actionBtn);
    const modalShow = container.querySelector("[class='modal show'");
    expect(modalShow).toBeInTheDocument();
    fireEvent.click(modalShow)
    expect(container.querySelector("[class='modal hide'")).toBeInTheDocument();
  });
});


