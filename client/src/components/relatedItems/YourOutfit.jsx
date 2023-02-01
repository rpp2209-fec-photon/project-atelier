import React from "react";
import {useState} from "react";
import Card from "./Card.jsx";
import PlusCard from './subComponents/PlusCard.jsx';
const img = './resources/plus.png';

const YourOutfit = (props) => {

  const [items, setItems] = useState([]);

  // need Overview to implement

  return (
    <>
      <h3>Your Outfit</h3>
      <div id='outfit-list'>
        <PlusCard />
        {items.map((item, index) => <Card key={index} item={item} /> )}
      </div>
    </>
  );
};

export default YourOutfit;