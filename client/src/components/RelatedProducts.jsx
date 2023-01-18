import React from "react";
import {useState} from "react";
import Card from "./Card.jsx";

const RelatedProducts = (props) => {

  const [products, setProducts] = useState(['placeHolder', 'placeHolder', 'placeHolder']);

  return (
    <div className="carousel">
      {products.map((product, index) => <Card key={index} product={product} />)}
    </div>
  );
};

export default RelatedProducts;