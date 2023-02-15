
/**
 * @jest-environment jsdom
*/

import React from 'react';

import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, waitFor, screen} from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

import ReviewTile from '../components/ReviewTile.jsx';

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


test('Has the review summary in the review tile', async ()=>{
  render(<ReviewTile Review={dummyData.results[0]} productID={71697} setImageURL={()=>{}} setImageZoomVisibility={()=>{}}/>);
  await waitFor(()=>{
    var sortElement = screen.getByText('this item is the bestest', {exact: false});
    expect(sortElement).toBeInTheDocument;
  });
});

test('Has the reviewer name in the tile', async ()=>{
  render(<ReviewTile Review={dummyData.results[0]} productID={71697} setImageURL={()=>{}} setImageZoomVisibility={()=>{}}/>);
  await waitFor(()=>{
    var sortElement = screen.getByText('test', {exact: true});
    expect(sortElement).toBeInTheDocument;
  });
});

test('Has the reviewer name in the tile', async ()=>{
  render(<ReviewTile Review={dummyData.results[0]} productID={71697} setImageURL={()=>{}} setImageZoomVisibility={()=>{}}/>);
  await waitFor(()=>{
    var container = document.getElementsByClassName('Review ImagesList');
    var sortElement = container.getAllByRole('img', {exact: false});
    expect(sortElement.length).toBe(2);
  });
});
