import React from 'react';
import {useState, useEffect} from 'react';

import CharacterBreakdown from './miniComponents/CharacterBreakdown.jsx';

import {getMetaReviews} from '../../../helpers/helpers.js';

export default function ProductBreakdown ({productID}){

  var [characteristics, setCharacteristics] = useState({});


  useEffect(()=>{
    getMetaReviews(productID)
    .then((data)=>{
      setCharacteristics(data.data.characteristics);
    });
  }, [productID]);

  return (
    <div className="CharacterBreakdown">
      {Object.keys(characteristics).map((key)=>{
        return (
          <CharacterBreakdown character={key} id={characteristics[key].id} value={characteristics[key].value} key={key}/>
        );
      })}
    </div>
  );
};