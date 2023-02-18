/**
* @jest-environment jsdom
*/
import React from 'react';


import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Imagegallery from '../Imagegallery.jsx'


test('Imagegallery', async () => {
    const { container } = render(<Imagegallery photolist={[{ thumbnail_url: 'efef', url: 'sdfee' }, { thumbnail_url: 'efef', url: 'sdfee' }]} />);
    await waitFor(() => {

        const ddefault = container.querySelector('.imagegallery');
        const thumbnail_urlul = container.querySelector('.thumbnail_urlul')
        const list = thumbnail_urlul.querySelector('li:first-child')
        const svg = container.querySelector('[fill="currentColor"]')
        //fireEvent.click(list)
        fireEvent.click(ddefault)
        expect(thumbnail_urlul).toBeDefined()
        expect(list).toBeDefined()
        expect(svg).toBeDefined()

    });

})

