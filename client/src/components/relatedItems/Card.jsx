import React, {useEffect, useState} from "react";
import Helpers from '../../../helpers/helpers.js';
import Price from './subComponents/Price.jsx';
import Rating from './subComponents/Rating.jsx';
import CardButton from './subComponents/CardButton.jsx';
import Preview from './subComponents/Preview.jsx';

const Card = (props) => {

  const {parent, productId, setCurrentProductId, setOutfitIds} = props;

  const [productInfo, setProductInfo] = useState({});
  const [productRatings, setProductRatings] = useState({});
  const [productStyle, setProductStyle] = useState({});


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
      setProductRatings(res.data);
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
    <div className="card" onClick={handleClick}>
      <div className='card-btn'> <CardButton parent={parent} setOutfitIds={setOutfitIds} productId={productId}/> </div>
      <Preview style={productStyle} />
      <p> {productInfo.category} </p>
      <h4> {productInfo.name} </h4>
      <Price productStyle={productStyle} />
      { productRatings.ratings ? <Rating ratings={productRatings.ratings} /> : null }
    </div>
  );
};

export default Card;