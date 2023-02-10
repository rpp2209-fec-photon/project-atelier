import React from 'react';
import {useState, useEffect} from 'react';

import CharacterBreakdown from './miniComponents/CharacterBreakdown.jsx';


export default function ProductBreakdown ({productID, characteristics}){




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