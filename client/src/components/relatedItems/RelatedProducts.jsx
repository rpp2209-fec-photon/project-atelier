import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card.jsx";
import Helpers from '../../../helpers/helpers.js';
import Carousel from './Carousel.jsx';

const RelatedProducts = ({productId}) => {

  // placeholder for product_id props that would come from Overview
  productId ? null : productId = 71700;

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
    getRelatedProductIds(productId);
  }, []);

  return (
    <div>
      <h3>Related Products</h3>
      <Carousel>
        {relatedProductIds.map((productId) => <Card key={productId} productId={productId} />)}
      </Carousel>
    </div>
  );
};

export default RelatedProducts;