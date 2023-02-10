import React from 'react';

export default function CharactersInput ({characteristics}) {
  return (
    <div>
      {Object.keys(characteristics).map((key)=>{
        return (
          <div key={key} className="Input">
            <h3 style={{margin: '0px'}}>{key}</h3> <Input character={key}/>
          </div>
        )
      })}
    </div>
  );
};


var Input = ({character})=>{
  return (
    <div>
      <input type="radio" name={character} value="1"></input>
      <input type="radio" name={character} value="2"></input>
      <input type="radio" name={character} value="3"></input>
      <input type="radio" name={character} value="4"></input>
      <input type="radio" name={character} value="5"></input>
    </div>
  );
};