import React from 'react';
import {useState, useEffect} from 'react';

//import CharacterBreakdown from './miniComponents/CharacterBreakdown.jsx';
import {getDescriptors} from '../compHelpers.js';


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


var CharacterBreakdown = ({character, id, value})=>{
  return (
    <div>
      <h3>{character}</h3>
       <CharacterBar value={value} low={getDescriptors(character)[0]} high={getDescriptors(character)[4]}/>

    </div>
  );
};

var CharacterBar = ({value, low, high}) => {
  return (
    <div className="CharacterBarHolder">

      <p className="CharacterIcon" style={{left: `${(value - 1) * 25 - 5}%`}}>^</p>

      <div className="BarSection">
        <div className="Character Bar"></div>
        <p>{low}</p>
      </div>

      <div className="BarSection">
        <div className="Character Bar"></div>

      </div>

      <div className="BarSection">
        <div className="Character Bar"></div>
        <p>{high}</p>
      </div>
    </div>
  );
};