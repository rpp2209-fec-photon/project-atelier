import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, waitFor, screen} from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';
import helpers from '../compHelpers.js';


test('setStars returns an array representing stars values', ()=>{
    expect(helpers.setStars(5)).toStrictEqual([1, 1, 1, 1, 1]);
    expect(helpers.setStars(4)).toStrictEqual([1, 1, 1, 1, 0]);
    expect(helpers.setStars(3.5)).toStrictEqual([1, 1, 1, 0.5, 0]);
    expect(helpers.setStars(3.25)).toStrictEqual([1, 1, 1, 0.25, 0]);
    expect(helpers.setStars(1.75)).toStrictEqual([1, 0.75, 0, 0, 0]);
});

test('starText returns what each star rating means', ()=>{
    expect(helpers.starText(1)).toStrictEqual('Poor');
    expect(helpers.starText(2)).toStrictEqual('Fair');
    expect(helpers.starText(3)).toStrictEqual('Average');
    expect(helpers.starText(4)).toStrictEqual('Good');
    expect(helpers.starText(5)).toStrictEqual('Great');
});

test('descriptors should be accurate', ()=>{
    expect(helpers.getDescriptors('Size')).toStrictEqual(['A size too small', '1/2 a size too small', 'Perfect', '1/2 a size too big', 'A size too wide']);
});

test('getAverage should return the average star rating', ()=>{
    expect(helpers.getAverage({
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1
    })).toBe(3);
    expect(helpers.getAverage({
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 1
    })).toBe(5);
});

test('getTotalReviews should give us the total amount of reviews using the amount of star ratings', ()=>{
    expect(helpers.getTotalReviews({
        1: 56,
        2: 68,
        3: 95,
        4: 104,
        5: 68
    })).toBe(391);
});

