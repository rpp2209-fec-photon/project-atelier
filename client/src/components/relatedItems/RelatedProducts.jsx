import React from "react";
import {useState, useEffect} from "react";
import Card from "./Card.jsx";
import Helpers from '../../../helpers/helpers.js';
import Carousel from './Carousel.jsx';
import {getProductData} from './controllers/index.js';

const RelatedProducts = (props) => {

  const {currentProductId, setCurrentProductId, productName, productCharacteristics} = props;

  const [relatedProductIds, setRelatedProductIds] = useState([]);
  // const [currentProductInfo, setCurrentProductInfo] = useState({});
  // const [currentProductMetadata, setCurrentProductMetadata] = useState({});

  const getRelatedProductIds = (id) => {
    Helpers.getRelatedProducts(id)
    .then((res) => {
      setRelatedProductIds(Array.from(new Set(res.data))); // Convert to Set and back to Array to handle duplicate
    })
    .catch((err) => {
      console.error(err);
    })
  };

  const distributeCards = (productId, index) => (
    <Card
      key={index}
      productId={productId}
      parent={'related'}
      setCurrentProductId={setCurrentProductId}
      currentProductName={productName}
      currentProductCharacteristics={productCharacteristics}
      getProductData={getProductData}
    />
  );

  useEffect(() => {
    getRelatedProductIds(currentProductId);
    // getProductData(currentProductId)
    // .then((res) => {
    //   setCurrentProductInfo(res[1].data);
    //   setCurrentProductMetadata(res[2].data);
    // });
  }, [currentProductId]);

  return (
    <>
      <h3 className='related-heading'>Related Products</h3>
      <div className='related-list'>
        <Carousel>
          {relatedProductIds.map(distributeCards)}
        </Carousel>
      </div>
    </>
  );
};

export default RelatedProducts;