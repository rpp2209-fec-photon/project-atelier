/**
* @jest-environment jsdom
*/
import React from 'react';


import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Addtocart from '../addtocart.jsx'
import AddtoCart from '../addtocart.jsx';


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

test('addtocart1', async () => {
    const { container } = render(<AddtoCart inoutfit={false} skus={{
        "2580526": {
            "quantity": 8,
            "size": "XS"
        },
        "2580527": {
            "quantity": 16,
            "size": "S"
        }
    }} />)
    await waitFor(() => {
        const selectSize = container.querySelector("[class='selectSize']")
        const selectSizelistitem = container.querySelector("[class='selectSizelistitem']")
        const sgv = container.querySelector("[fill='currentColor']")
        expect(selectSize).toBeDefined()
        expect(selectSizelistitem).toBeDefined()
        expect(sgv).toBeDefined()
    })
})
test('clickselectsize', async () => {
    const { container } = render(<AddtoCart inoutfit={false} skus={{
        "2580526": {
            "quantity": 8,
            "size": "XS"
        },
        "2580527": {
            "quantity": 16,
            "size": "S"
        }
    }} checkoutfitList={() => {}} />)
    await waitFor(() => {
        const actionBtn = container.querySelector("[class='selectSize']")
        const selectSizelist = container.querySelector("[class='selectSizelist']")
        const addtocart = container.querySelector("[class='addtobag']")
        const quantity =container.querySelector("[class='quantity']")
        const outfit = container.querySelector("[class='outfit']")
        const numberlist = container.querySelector("[class='numberlist']")
        const numbers = container.querySelector("[class='numbers']")
        const linumbers = numbers.querySelector(".numbers>li")
        const handlenumberdisplay = container.querySelector("[class='handlenumberdisplay']")
        fireEvent.click(actionBtn)
        fireEvent.click(addtocart)
        fireEvent.click(outfit)
        fireEvent.click(quantity)
        fireEvent.click(handlenumberdisplay)
        expect(selectSizelist).toHaveAttribute('style', 'display: block;')
        expect(numberlist).toBeDefined()
        expect(linumbers).toBeDefined()
        
         

    })

})