import React from 'react';
import { TiTick } from 'react-icons/ti';

const TableBody = (props) => {

  const {cardMetadata, productCharacteristics} = props;

  const cardChars = cardMetadata ? cardMetadata.characteristics ? cardMetadata.characteristics : {} : {};
  const productChars = productCharacteristics || {};

  const characteristics = new Set([...Object.keys(cardChars), ...Object.keys(productChars)]);

  return (
  <tbody>

    {
      Array.from(characteristics).map((char, index) => {
        return <tr key={index}>
          <td className='left'> {cardChars[char] ? <TiTick/> : null} </td>
          <td className='middle'> {char} </td>
          <td className='right'> {productChars[char] ? <TiTick/> : null} </td>
        </tr>
      })
    }

  </tbody>
  )
};

export default TableBody;