import React from "react";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";
import PlusCard from './subComponents/PlusCard.jsx';
import MyOutfits from './localStorage/index.js';

const YourOutfit = (props) => {

  const {currentProductId, setCurrentProductId, setOutfitIds, handleAddOutfit, outfitIds} = props;

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
      <h3 className='outfit-heading'>Your Outfit</h3 >
      <div className='outfit-list'>
        <PlusCard onClick={handleAddOutfit}/>
        { outfitIds.map(distributeCards).reverse() }
      </div>
    </>
  );
};

export default YourOutfit;