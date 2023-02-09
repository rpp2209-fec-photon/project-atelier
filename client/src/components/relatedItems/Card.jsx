import React, {useEffect, useState} from "react";
import Helpers from '../../../helpers/helpers.js';
import Price from './subComponents/Price.jsx';
import Rating from './subComponents/Rating.jsx';
import CardButton from './subComponents/CardButton.jsx';
import Preview from './subComponents/Preview.jsx';
import ComparisonModal from './ComparisonModal.jsx';

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

  const getDefaultStyle = (productId) => {
    Helpers.getProductStyles(productId)
    .then((res) => {
      let styles = res.data.results;
      for (var style of styles) {
        if (style['default?']) {
          setProductStyle(style);
          return;
        }
      }
      setProductStyle(styles[0]);
    })
    .catch((err) => {
      console.error(err);
    })
  };

  const getProductInfo = (id) => {
    Helpers.getProductInfo(id)
    .then((res) => {
      setProductInfo(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const getRatings = (id) => {
    Helpers.getMetaReviews(id)
    .then((res) => {
      setProductMetadata(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
  };

  const handleClick = (e) => {
    setCurrentProductId(productId);
  }

  useEffect(() => {
    getDefaultStyle(productId);
    getProductInfo(productId);
    getRatings(productId);
  }, [productId]);

  return (
    <>
      <div className="card" onClick={handleClick}>
        <div className='card-btn'> <CardButton parent={parent} onClick={parent === 'related' ? openModal : setOutfitIds} productId={productId}/></div>
        <Preview style={productStyle} />
        <p> {productInfo.category} </p>
        <h4> {productInfo.name} </h4>
        <Price productStyle={productStyle} />
        {productMetadata.ratings ? <Rating ratings={productMetadata.ratings} /> : null }
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