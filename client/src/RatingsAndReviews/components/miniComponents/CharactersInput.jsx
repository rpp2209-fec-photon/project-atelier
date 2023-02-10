import React from 'react';

import {getDescriptors} from '../../compHelpers.js';

export default function CharactersInput ({characteristics}) {
  return (
    <div>
      {Object.keys(characteristics).map((key)=>{
        return (
          <div key={key} className="InputArray">
            <h3 style={{margin: '0px', 'marginRight': '5px'}}>{key}</h3> <Input character={key}/>
          </div>
        )
      })}
    </div>
  );
};


var Input = ({character})=>{

  var descriptors = getDescriptors(character);

  return (
    <>
    <div className="Input">
      <label for={`${character}1`}>{descriptors[0]}</label>
      <input type="radio" id={`${character}1`} name={character} value="1"></input>
    </div>

    <div className="Input">
      <label for={`${character}2`}>{descriptors[1]}</label>
      <input type="radio" id={`${character}2`} name={character} value="2"></input>
    </div>

    <div className="Input">
      <label for={`${character}3`}>{descriptors[2]}</label>
      <input type="radio" id={`${character}3`} name={character} value="3"></input>
    </div>

    <div className="Input">
      <label for={`${character}4`}>{descriptors[3]}</label>
      <input type="radio" id={`${character}4`} name={character} value="4"></input>
    </div>

    <div className="Input">
      <label for={`${character}5`}>{descriptors[4]}</label>
      <input type="radio" id={`${character}5`} name={character} value="5"></input>
    </div>
    </>
  );
};