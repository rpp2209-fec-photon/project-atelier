import React, {useEffect, useState} from "react";
import Helpers from '/client/helpers/helpers';

const Card = (props) => {

  let {productId} = props;

  const [productInfo, setProductInfo] = useState({});
  const [productRatings, setProductRatings] = useState({});
  const [productStyle, setProductStyle] = useState({});

  const getDefaultStyle = (productId) => {
    Helpers.getProductStyles(productId)
    .then((res) => {
      console.log(res.data.results)
      let styles = res.data.results;
      for (var style of styles) {
        if (style['default?']) {
          setProductStyle(style);
        }
      }
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
      <img
        className='preview' src={productStyle.photos ? productStyle.photos[0].thumbnail_url : ''}
        alt={productStyle.name || ''}
        width='160px'
        height='160px'
      />
      <div> {productInfo.category} </div>
      <h4> {productInfo.name} </h4>
      <div> ${productInfo.default_price} </div>
      <div> {JSON.stringify(productRatings.ratings)} </div>
    </div>
  );
};

export default Card;