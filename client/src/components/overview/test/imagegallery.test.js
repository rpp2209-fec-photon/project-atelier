/**
* @jest-environment jsdom
*/
import React from 'react';


import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Imagegallery from '../Imagegallery.jsx'


test('Imagegallery', async () => {
    render(<Imagegallery photolist={[{ thumbnail_url: 'efef', url: 'sdfee' }, { thumbnail_url: 'efef', url: 'sdfee' }]} />);
    await waitFor(() => {

        const Imagegallery = screen.getByRole('img');
        

        expect(Imagegallery).toHaveAttribute('id', 'imagegallery');
        

    });

})