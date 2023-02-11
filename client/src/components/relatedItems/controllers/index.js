const Helpers = require('../../../../helpers/helpers.js');

const getProductData = (id) => {
  let promises = [];
  promises.push(Helpers.getProductStyles(id));
  promises.push(Helpers.getProductInfo(id));
  promises.push(Helpers.getMetaReviews(id));
  return Promise.all(promises);
};

module.exports = {getProductData}