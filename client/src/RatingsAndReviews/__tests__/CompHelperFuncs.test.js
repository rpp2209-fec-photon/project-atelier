import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {render, waitFor, screen} from '@testing-library/react';
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom';

import {setStars} from '../compHelpers.js';

test('setStars returns an array representing stars values', ()=>{
    expect(setStars(5)).toStrictEqual([1, 1, 1, 1, 1]);
});