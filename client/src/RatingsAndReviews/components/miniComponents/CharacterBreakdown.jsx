import React from 'react';

import CharacterBar from './CharacterBar.jsx';

import {getDescriptors} from '../../compHelpers.js';

export default function CharacterBreakdown ({character, id, value}){
  return (
    <div>
      <h3>{character}</h3>
       <CharacterBar value={value} low={getDescriptors(character)[0]} high={getDescriptors(character)[4]}/>

    </div>
  );
};