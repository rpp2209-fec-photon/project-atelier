import React from 'react';
import { TiTick } from 'react-icons/ti';

const TableBody = (props) => {

  const {cardInfo, productCharacteristics} = props;

  const cardFeatures = cardInfo ? cardInfo.features ? cardInfo.features : [] : [];
  const productChars = productCharacteristics || [];

  const makeFeatures = (cards, card) => {
    cards[card.feature] = card.value;
    return cards;
  };

  let cards = cardFeatures.reduce(makeFeatures, {});
  let products = productChars.reduce(makeFeatures, {});

  const features = new Set(Object.keys(products).concat(Object.keys(cards)));

  return (
  <tbody>
    {
      Array.from(features).map((feat, index) => {
        return <tr key={index}>
          <td className='left'> {cards[feat] ? cards[feat] === true ? <TiTick/> : cards[feat] : null} </td>
          <td className='middle'> {feat} </td>
          <td className='right'> {products[feat] ? products[feat] === true ? <TiTick/> : products[feat] : null} </td>
        </tr>
      })
    }

  </tbody>
  )
};

export default TableBody;