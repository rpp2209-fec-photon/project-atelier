import React from "react";
import RelatedProducts from "./RelatedProducts.jsx";
import YourOutfit from "./YourOutfit.jsx";

const App = (props) => {



  return (
    <div>
      <div>OVERVIEW</div>

      <RelatedProducts/>

      <YourOutfit/>

      <div>QUESTIONS & ANSWERS</div>

      <div>RATINGS & REVIEWS</div>
    </div>
  );
};

export default App;