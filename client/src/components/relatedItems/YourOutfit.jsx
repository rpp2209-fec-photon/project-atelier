import React from "react";
import {useState} from "react";
import Card from "./Card.jsx";
const img = './resources/plus.png';

const YourOutfit = (props) => {

  const [items, setItems] = useState([]);

  // need Overview to implement

  return (
    <div>
      <h3>Your Outfit</h3>
      <div id='outfit-list'>
        <img className='plus' src={img} alt='plus-image' width='180px' height='279px'/>
        {items.map((item, index) => <Card key={index} item={item} /> )}
      </div>
    </div>
  );
};

export default YourOutfit;