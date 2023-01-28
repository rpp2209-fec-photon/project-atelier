/**
* @jest-environment node
*/

const axios = require('axios');
const Helpers = require('../helpers.js');

describe('Products', function() {
  test('calling getProducts should return a response with 5 products by default', function(done) {
    Helpers.getProducts()
    .then((response) => {
      let data = response.data;
      expect(data.length).toBe(5);
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

  test('calling getProducts should return a response with correct number of products', function(done) {
    Helpers.getProducts(4, 3)
    .then((response) => {
      let data = response.data;
      expect(data.length).toBe(3);
      expect(data[0].name).toBe('Infinity Stone');
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

  test('calling getProductInfo with product ID should return a response with the correct product info', function(done) {
    Helpers.getProductInfo(71706)
    .then((res) => {
      let data = res.data;
      expect(data.name).toBe('Infinity Stone');
      done();
    })
    .catch((err) => {
      console.error(err);
    });
  });

  test('calling getProductInfo with no ID should return a response with an error', function(done) {
    Helpers.getProductInfo()
    .catch((err) => {
      expect(err).toBe('no product id entered');
      done(0);
    });
  });

  test('calling getProductStyles with a product ID should return a response with correct styles', function(done) {
    Helpers.getProductStyles(71706)
    .then((res) => {
      let data = res.data;
      expect(data.product_id).toBe('71706');
      expect(data.results.length).toBe(6);
      expect(data.results[0].name).toBe('Reality');
      done();
    })
    .catch((err) => {
      console.error(err);
    })
  });

  test('calling getRelatedProducts with a product ID should return a response with a list of product_id', function(done) {
    Helpers.getRelatedProducts(71700)
    .then((res) => {
      let data = res.data;
      expect(data).toEqual([ 71697, 71698, 71700, 71701, 71704 ]);
      done();
    })
    .catch((err) => {
      console.error(err);
    })
  });
});

describe('Reviews', function() {
  test('calling getReviews with product ID should return a response with 5 reviews of the product', function(done) {
    Helpers.getReviews(1, 5, 'newest', 71706)
    .then((response) => {
      let data = response.data;
      expect(data.product).toBe('71706');
      expect(data.count).toBe(5);
      expect(data.results).toBeDefined();
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

  test('calling getReviews without product ID should return a response with error', function(done) {
    Helpers.getReviews(1, 5, 'newest')
    .catch( err => {
      expect(err).toBe('no product id entered');
      done();
    });
  });

  test('calling getMetaReview with product ID should return a response with metadata review of the product', function(done) {

    let metadata = {
      product_id: '71706',
      ratings: { '1': '1', '2': '4', '4': '2', '5': '3' },
      recommended: { false: '3', true: '7' },
      characteristics: { Quality: { id: 240615, value: '3.3000000000000000' } }
    }

    Helpers.getMetaReviews(71706)
    .then((response) => {
      let data = response.data;
      expect(data).toEqual(metadata);
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });
});

describe('Q&A', function() {
  test('calling getQuestions with product ID should return a response with questions about the product', function(done) {
    Helpers.getQuestions(71706, 1, 5)
    .then((response) => {
      let data = response.data;
      expect(data.product_id).toBe('71706');
      expect(data.results).toBeDefined();
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

  test('calling getQuestions without product ID should return a response with error', function(done) {
    Helpers.getQuestions()
    .catch( err => {
      expect(err).toBe('no product_id provided');
      done();
    });
  });

  test('calling getAnswers with question ID should return a response with questions about the product', function(done) {
    Helpers.getAnswers(631421)
    .then((response) => {
      let data = response.data;
      expect(data.question).toBe('631421');
      expect(data.results).toBeDefined();
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });
});