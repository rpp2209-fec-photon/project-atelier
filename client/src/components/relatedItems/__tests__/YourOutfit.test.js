/**
* @jest-environment jsdom
*/

import React, {useState} from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {handlers} from './handlers.js';
import MyOutfits from '../controllers/index.js';

import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';

import YourOutfit from '../YourOutfit.jsx';

const server = setupServer(...handlers);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers(), cleanup)
afterAll(() => server.close())

test('YourOutfit component should have a heading, a list, and an add card', async () => {
  const App = () => {
    const [outfitIds, setOutfitIds] = useState([]);
    return (
      <>
        <YourOutfit outfitIds={outfitIds} setOutfitIds={setOutfitIds}/>
      </>
    )
  }
  const {container} = render(<App/>);
  await waitFor(() => {
    expect(screen.getByText(/your outfit/i)).toBeInTheDocument();
    expect(container.querySelector("[class='outfit-list']")).toBeInTheDocument();
    expect(container.querySelector("[class='plus']")).toBeInTheDocument();
  });
});

test('Clicking the plus card should add a card to YourOutfit list', async () => {
  const App = () => {
    const [outfitIds, setOutfitIds] = useState([]);

    const handleAddOutfit = (e) => {
      setOutfitIds([12345, 54321]);
    };

    return (
      <>
        <div>{outfitIds}</div>
        <YourOutfit outfitIds={outfitIds} setOutfitIds={setOutfitIds} handleAddOutfit={handleAddOutfit}/>
      </>
    )
  }
  const {container} = render(<App/>);
  const plus = container.querySelector("[class='plus']")
  fireEvent.click(plus);
  await waitFor(() => {
    expect(container.querySelector("[class='card']")).toBeInTheDocument();
    expect(screen.getByText(/Accessories/i)).toBeInTheDocument();
  });
});


