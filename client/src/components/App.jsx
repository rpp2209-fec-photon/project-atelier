import React from "react";
import RelatedProducts from "./relatedItems/RelatedProducts.jsx";
import YourOutfit from "./relatedItems/YourOutfit.jsx";
import Overview from "./overview/Overview.jsx";

const App = (props) => {



  return (
    <div>
      <Overview />

      <RelatedProducts />

      <YourOutfit />

      <div>QUESTIONS & ANSWERS</div>

      <div>RATINGS & REVIEWS</div>
    </div>
  );
};

export default App;