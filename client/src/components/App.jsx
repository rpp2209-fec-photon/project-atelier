import React, { useState, useEffect } from "react";
import RelatedProducts from "./relatedItems/RelatedProducts.jsx";
import YourOutfit from "./relatedItems/YourOutfit.jsx";
import Overview from "./overview/Overview.jsx";
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Helpers from '../../helpers/helpers.js';
import MyOutfits from './relatedItems/localStorage/index.js';

const App = (props) => {

  const [currentProductId, setCurrentProductId] = useState(0);
  const [outFitList, settOutFitList] = useState([71698, 71699])
  const [productname, setproductname] = useState('')
  const [characteristic, setcharacteristic] = useState({})
  const [outfitIds, setOutfitIds] = useState([]);

  const setname = (name) => {
    setproductname(name)
  }
  const setchar = (char) => {
    setcharacteristic(char)
  }
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

  const handleAddOutfit = (e) => {
    let productId = String(currentProductId);
    if (outfitIds.indexOf(productId) === -1) {
      MyOutfits.add(productId);
      setOutfitIds(MyOutfits.items());
    } else {
      alert('Item is already added!');
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Overview currentProductId={currentProductId}
        outFitList={outFitList}
        setname={setname}
        setchar={setchar}
        handleAddOutfit={handleAddOutfit}
      />

      <RelatedProducts
        currentProductId={currentProductId}
        setCurrentProductId={setCurrentProductId}
      />

      <YourOutfit
        currentProductId={currentProductId}
        setCurrentProductId={setCurrentProductId}
        outfitIds={outfitIds}
        setOutfitIds={setOutfitIds}
        handleAddOutfit={handleAddOutfit}
      />

      <div>QUESTIONS & ANSWERS</div>

      <RatingsAndReviews productID={currentProductId} productName={productname} />
    </div>
  );
};

export default App;