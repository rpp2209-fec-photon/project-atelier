import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card.jsx";
import Helpers from '/client/helpers/helpers';

const RelatedProducts = (props) => {

  // placeholder for product_id props that would come from Overview
  const product_id = 71700;

  const [relatedProductIds, setRelatedProductIds] = useState([]);

  const getRelatedProductIds = (id) => {
    Helpers.getRelatedProducts(id)
    .then((res) => {
      setRelatedProductIds(res.data);
    })
    .catch((err) => {
      console.error(err);
    })
  };

  useEffect(() => {
    getRelatedProductIds(product_id);
  }, []);

  return (
    <div>
      {relatedProductIds.map((productId, index) => <Card key={index} productId={productId} />)}
    </div>
  );
};

export default RelatedProducts;