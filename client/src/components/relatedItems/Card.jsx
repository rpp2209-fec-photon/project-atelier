import React, {useEffect, useState} from "react";
import Helpers from '../../../helpers/helpers.js';
import Price from './subComponents/Price.jsx';
import Rating from './subComponents/Rating.jsx';
import CardButton from './subComponents/CardButton.jsx';
import Preview from './subComponents/Preview.jsx';
import ComparisonModal from './ComparisonModal.jsx';
import {getProductData} from './controllers/index.js';

const Card = (props) => {

  const {parent, productId, setCurrentProductId, currentProductInfo, currentProductMetadata, setOutfitIds} = props;

  const [productInfo, setProductInfo] = useState({});
  const [productMetadata, setProductMetadata] = useState({});
  const [productStyle, setProductStyle] = useState({});
  const [modalIsOpen, setModalStatus] = useState(false);

  const openModal = () => {
    setModalStatus(true);
  };

  const closeModal = () => {
    setModalStatus(false);
  };

  const handleClick = (e) => {
    setCurrentProductId(productId);
  }

  useEffect(() => {
    getProductData(productId)
    .then((res) => {
      let styles = res[0].data.results;
      let defaultStyle = styles[0];
      for (var style of styles) {
        if (style['default?']) {
          defaultStyle = style;
          break;
        }
      }
      setProductStyle(defaultStyle);
      setProductInfo(res[1].data);
      setProductMetadata(res[2].data);
    })
    .catch((err) => {
      console.error(error);
    })
  }, [productId]);

  return (
    <>
      <div className="card" onClick={handleClick}>
        <>
          <CardButton
            parent={parent}
            onClick={parent === 'related' ? openModal : setOutfitIds}
            productId={productId}
          />
        </>
        <Preview style={productStyle} />
        <p> {productInfo.category} </p>
        <h4> {productInfo.name} </h4>
        <Price productStyle={productStyle} />
        { productMetadata.ratings ? <Rating ratings={productMetadata.ratings} /> : null }
      </div>

      <ComparisonModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        cardMetadata={productMetadata}
        cardName={productInfo.name}
        currentProductInfo={currentProductInfo}
        currentProductMetadata={currentProductMetadata}
      />
    </>
  );
};

export default Card;