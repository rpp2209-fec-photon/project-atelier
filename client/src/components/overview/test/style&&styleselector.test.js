/**
* @jest-environment jsdom
*/
import React from 'react';


import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Style from '../Style.jsx'
import Styleselector from '../Styleselector.jsx';


test('Style', async () => {
    render(<Style changestyle={''}  style={{photos:[{ thumbnail_url: 'efef', url: 'sdfee' }, { thumbnail_url: 'efef', url: 'sdfee' }]}}
/>);
    await waitFor(() => {
        const Style = screen.getByRole('img');
        expect(Style).toHaveAttribute('src', 'efef');
    });
  
  })
  test('Styleselector', async () => {
    render(<Styleselector currentstyle={''}  styles={[{photos:
    [{ thumbnail_url: 'efef', url: 'sdfee' ,style_id:'sfddsf'},
     { thumbnail_url: 'efef', url: 'sdfee',style_id:'ololo' }]}]}
/>);
    await waitFor(() => {
        const Style = screen.getByRole('img');
        expect(Style).toHaveAttribute('src', 'efef');
    });
  
  })