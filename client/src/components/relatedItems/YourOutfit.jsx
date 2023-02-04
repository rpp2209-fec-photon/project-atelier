import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import PlusCard from './subComponents/PlusCard.jsx';
import MyOutfits from './localStorage/index.js';

const YourOutfit = (props) => {

  const {currentProductId, setCurrentProductId} = props;

  const [outfitIds, setOutfitIds] = useState([]);

  const handlePlusCardClick = (e) => {
    let productId = String(currentProductId);
    if (outfitIds.indexOf(productId) === -1) {
      MyOutfits.add(productId);
      setOutfitIds(MyOutfits.items());
    } else {
      alert('Item is already added!');
    }
  };

  const distributeCards = (productId, index) => (
    <Card
      key={index}
      productId={productId}
      parent={'outfit'}
      setCurrentProductId={setCurrentProductId}
      setOutfitIds={setOutfitIds}
    />
  );

  useEffect(() => {
    setOutfitIds(MyOutfits.items());
  }, []);

  return (
    <>
      <h3>Your Outfit</h3 >
      <div className='outfit-list'>
        <PlusCard onClick={handlePlusCardClick}/>
        { outfitIds.map(distributeCards).reverse() }
      </div>
    </>
  );
};

export default YourOutfit;