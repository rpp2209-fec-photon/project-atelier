/**
 * @jest-environment jsdom
 */

import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, waitFor, screen} from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import RatingsAndReviews from '../RatingsAndReviews.jsx';

import dummyData from '../dummyData.js';

const server = setupServer(
    rest.get('http://localhost:3000/reviews/', (req, res, ctx)=>{
        return res(ctx.json(dummyData))
    })
);

beforeAll(()=>server.listen());
afterEach(()=>server.resetHandlers())
afterAll(()=>server.close())

test('This is an example test', ()=>{
  expect(1+1).toBe(2);
});

test('Has rating breakdown section', async ()=>{


  render(<RatingsAndReviews productID={71697}/>);
  await waitFor( ()=>{
    var sortElement = document.getElementsByClassName('RatingBreakdown');
    expect(sortElement).toBeInTheDocument;
  });
});

test('Has character breakdown section', async ()=>{


  render(<RatingsAndReviews productID={71697}/>);
  await waitFor( ()=>{
    var sortElement = document.getElementsByClassName('CharacterBreakdown');
    expect(sortElement).toBeInTheDocument;
  });
});
