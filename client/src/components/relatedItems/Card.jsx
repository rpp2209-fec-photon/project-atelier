import React, {useEffect, useState} from "react";
import Helpers from '../../../helpers/helpers.js';
import Price from './subComponents/Price.jsx';
import Rating from './subComponents/Rating.jsx';
import CardButton from './subComponents/CardButton.jsx';

const Card = (props) => {

  let {productId} = props;

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

  useEffect(() => {
    getDefaultStyle(productId);
    getProductInfo(productId);
    getRatings(productId);
  }, []);

  return (
    <div className="card">
      <div className='card-btn'> <CardButton parent={props.parent}/> </div>
      <img
        className='preview'
        src={productStyle.photos ? productStyle.photos[0].thumbnail_url : ''}
        alt={productStyle.name || ''}
      />
      <p> {productInfo.category} </p>
      <h4> {productInfo.name} </h4>
      <Price productStyle={productStyle} />
      { productRatings.ratings ? <Rating ratings={productRatings.ratings} /> : null }
    </div>
  );
};

export default Card;