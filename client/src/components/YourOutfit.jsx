import React from "react";
import {useState} from "react";
import Card from "./Card.jsx";

const YourOutfit = (props) => {

  const [items, setItems] = useState(['placeHolder', 'placeHolder', 'placeHolder']);

  return (
    <div className="carousel">
      {items.map((item, index) => <Card key={index} item={item} /> )}
    </div>
  );
};

export default YourOutfit;