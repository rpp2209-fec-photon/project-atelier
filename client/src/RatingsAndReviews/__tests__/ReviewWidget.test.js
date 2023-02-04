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

var dummyData = {
    "product": "71697",
    "page": 0,
    "count": 5,
    "results": [
        {
            "review_id": 1278242,
            "rating": 5,
            "summary": "this item is the bestest",
            "recommend": false,
            "response": null,
            "body": "besstetetegweagwegaewgewgewgwe",
            "date": "2023-01-04T00:00:00.000Z",
            "reviewer_name": "test",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457035,
                    "url": "https://i.ibb.co/qyjLsQJ/9d84af8321dc1b02d8165e916e2a6d8f.jpg"
                },
                {
                    "id": 2457036,
                    "url": "https://i.ibb.co/dfB4B1w/9d84af8321dc1b02d8165e916e2a6d8f.jpg"
                }
            ]
        },
        {
            "review_id": 1278241,
            "rating": 5,
            "summary": "gweGewgewgewag",
            "recommend": false,
            "response": null,
            "body": "awegaewgawegaewgaew",
            "date": "2023-01-04T00:00:00.000Z",
            "reviewer_name": "gweagewagawe",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457034,
                    "url": "https://i.ibb.co/jVL5L8f/Screen-Shot-2023-01-03-at-8-56-44-PM.png"
                }
            ]
        },
        {
            "review_id": 1278233,
            "rating": 5,
            "summary": "fqwfqwfqwfqwf",
            "recommend": false,
            "response": null,
            "body": "fwqfqwfwqfqw",
            "date": "2023-01-04T00:00:00.000Z",
            "reviewer_name": "blahblah",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457030,
                    "url": "https://ibb.co/KzLRDLw"
                }
            ]
        },
        {
            "review_id": 1278231,
            "rating": 5,
            "summary": "",
            "recommend": false,
            "response": null,
            "body": "",
            "date": "2023-01-04T00:00:00.000Z",
            "reviewer_name": "testing",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2457026,
                    "url": "https://ibb.co/89pTK5J"
                }
            ]
        },
        {
            "review_id": 1278222,
            "rating": 5,
            "summary": "",
            "recommend": false,
            "response": null,
            "body": "",
            "date": "2023-01-03T00:00:00.000Z",
            "reviewer_name": "jesrjserjersjresjresjes",
            "helpfulness": 0,
            "photos": []
        }
    ]
  };

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


  render(<RatingsAndReviews productID={71697}/>);
  await waitFor(()=>{
    var sortElement = screen.getByText('this item is the bestest', {exact: false});
    expect(sortElement).toBeInTheDocument;
  });
});

import {setStars} from '../compHelpers.js';

test('setStars returns an array representing stars values', ()=>{
    expect(setStars(5)).toStrictEqual([1, 1, 1, 1, 1]);
});