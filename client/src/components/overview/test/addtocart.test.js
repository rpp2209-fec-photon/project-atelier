/**
* @jest-environment jsdom
*/
import React from 'react';


import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Addtocart from '../addtocart.jsx'


test('addtocart', async () => {
    render(<Addtocart skus={{
        "2580526": {
            "quantity": 8,
            "size": "XS"
        },
        "2580527": {
            "quantity": 16,
            "size": "S"
        }
    }} />);
    await waitFor(() => {
        const XS = screen.getByText('XS');
        const S = screen.getByText('S')
        expect(XS).toBeInTheDocument('XS');
        expect(S).toBeInTheDocument('S');
    });

})