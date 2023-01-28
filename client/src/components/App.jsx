import React from "react";
import RelatedProducts from "./relatedItems/RelatedProducts.jsx";
import YourOutfit from "./relatedItems/YourOutfit.jsx";
import Overview from "./overview/Overview.jsx";
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.jsx';

const App = (props) => {



  return (
    <div>
      <Overview />

      <RelatedProducts />

      <YourOutfit />

      <div>QUESTIONS & ANSWERS</div>

      <RatingsAndReviews/>
    </div>
  );
};

export default App;