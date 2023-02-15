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
});

test('starText returns what each star rating means', ()=>{
    expect(helpers.starText(1)).toStrictEqual('Poor');
    expect(helpers.starText(2)).toStrictEqual('Fair');
    expect(helpers.starText(3)).toStrictEqual('Average');
    expect(helpers.starText(4)).toStrictEqual('Good');
    expect(helpers.starText(5)).toStrictEqual('Great');
});