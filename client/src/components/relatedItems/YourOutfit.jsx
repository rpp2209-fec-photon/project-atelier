import React from "react";
import {useState} from "react";
import Card from "./Card.jsx";

const YourOutfit = (props) => {

  const [items, setItems] = useState([]);

  // need Overview to implement
  const img = './resources/plus.png';

  return (
    <div>
      <img className='plus' src={img} alt='plus-image' width='180px' height='279px'/>
      {items.map((item, index) => <Card key={index} item={item} /> )}
    </div>
  );
};

export default YourOutfit;