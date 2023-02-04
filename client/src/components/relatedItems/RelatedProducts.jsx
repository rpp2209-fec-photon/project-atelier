import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card.jsx";
import Helpers from '../../../helpers/helpers.js';
import Carousel from './Carousel.jsx';

const RelatedProducts = (props) => {

  const {currentProductId, setCurrentProductId} = props;

  const [relatedProductIds, setRelatedProductIds] = useState([]);

  const getRelatedProductIds = (id) => {
    console.log(id, 'id ')
    Helpers.getRelatedProducts(id)
    .then((res) => {
      setRelatedProductIds(Array.from(new Set(res.data))); // Convert to Set and back to Array to handle duplicate
    })
    .catch((err) => {
      console.error(err);
    })
  };

  useEffect(() => {
    getRelatedProductIds(currentProductId);
  }, [currentProductId]);

  return (
    <>
      <h3>Related Products</h3>
      <div className='related-list'>
        {relatedProductIds.map((productId, index) => <Card key={index} productId={productId} parent={'related'} setCurrentProductId={setCurrentProductId} />)}
      </div>
    </>
  );
};

export default RelatedProducts;