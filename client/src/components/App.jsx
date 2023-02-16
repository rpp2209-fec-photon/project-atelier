import React, { useState, useEffect } from "react";
import RelatedProducts from "./relatedItems/RelatedProducts.jsx";
import YourOutfit from "./relatedItems/YourOutfit.jsx";
import Overview from "./overview/Overview.jsx";
import RatingsAndReviews from '../RatingsAndReviews/RatingsAndReviews.jsx';
import Helpers from '../../helpers/helpers.js';
import MyOutfits from './relatedItems/localStorage/index.js';
import useClickTracker from './useClickTracker.jsx';

const App = (props) => {

  useClickTracker();

  const [currentProductId, setCurrentProductId] = useState(0);
  // const [outFitList, settOutFitList] = useState([])
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
    <>
      <div style={{
        marginLeft: '177px',
        fontWeight: 'bolder',
        lineHeight: '20px',
        height: '20px'
      }}>Overview</div>
      <Overview currentProductId={currentProductId}

        setname={setname}
        setchar={setchar}
        handleAddOutfit={handleAddOutfit}
      />

      <div id='related-products'>
        <RelatedProducts
          currentProductId={currentProductId}
          setCurrentProductId={setCurrentProductId}
          productName={productname}
          productCharacteristics={characteristic}
        />

        <YourOutfit
          currentProductId={currentProductId}
          setCurrentProductId={setCurrentProductId}
          outfitIds={outfitIds}
          setOutfitIds={setOutfitIds}
          handleAddOutfit={handleAddOutfit}
        />
      </div>

      <RatingsAndReviews productID={currentProductId} productName={productname} />
    </>
  );
};

export default App;