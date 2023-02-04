import React, { useState, useEffect } from "react";
import RelatedProducts from "./relatedItems/RelatedProducts.jsx";
import YourOutfit from "./relatedItems/YourOutfit.jsx";
import Overview from "./overview/Overview.jsx";
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Helpers from '../../helpers/helpers.js';

const App = (props) => {

  const [currentProductId, setCurrentProductId] = useState(0);

  const getProducts = (page, count) => {
    Helpers.getProducts(page, count)
    .then((res) => {
      let data = res.data;
      setCurrentProductId(data[0].id);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Overview />

      <RelatedProducts />

      <YourOutfit />

      <div>QUESTIONS & ANSWERS</div>

      <RatingsAndReviews productID={71700}/>
    </div>
  );
};

export default App;