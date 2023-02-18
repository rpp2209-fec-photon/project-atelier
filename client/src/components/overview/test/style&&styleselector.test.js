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
    const {container} = render(<Styleselector currentstyle={''}  styles={[{photos:
    [{ thumbnail_url: 'efef', url: 'sdfee' ,style_id:'sfddsf'},
     { thumbnail_url: 'efef', url: 'sdfee',style_id:'ololo' }]}]}
     changestyle={()=>{}}
/>);
    await waitFor(() => {
        const Style = screen.getByRole('img');
        const styleselector=container.querySelector("[id='styleselector']")
        const li =styleselector.querySelector("#styleselector>li")
        expect(Style).toHaveAttribute('src', 'efef');
        expect(styleselector).toBeDefined()
        fireEvent.click(li)
        
    });
  
  })