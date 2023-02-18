/**
* @jest-environment node
*/

const axios = require('axios');
const Helpers = require('../helpers.js');

jest.mock('axios');

describe('Products', function() {

  beforeEach(() => {
    jest.resetAllMocks ();
  });

  test('calling getProducts should return a response with 5 products by default', function(done) {

    const res = {
      data: [
        {name: 'p1'}, {name: 'p2'}, {name: 'p3'}, {name: 'p4'}, {name: 'p5'}
      ]
    };

    axios.get.mockResolvedValueOnce(res);

    Helpers.getProducts()
    .then((response) => {
      let data = response.data;
      expect(data).toBe(res.data);
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

  test('calling getProducts should return a response with correct number of products', function(done) {
    const res = {
      data: [
        {name: 'p1'}, {name: 'p2'}, {name: 'p3'}
      ]
    };
    axios.get.mockResolvedValueOnce(res);
    Helpers.getProducts(4, 3)
    .then((response) => {
      let data = response.data;
      expect(data.length).toBe(3);
      expect(data[0].name).toBe('p1');
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

  test('calling getProductInfo with product ID should return a response with the correct product info', function(done) {
    const res = {
      data: {
        name: 'Infinity Stone'
      }
    };
    axios.get.mockResolvedValueOnce(res);
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
    const error = new Error('no product id entered');
    axios.get.mockRejectedValueOnce(error);

    Helpers.getProductInfo()
    .catch((err) => {
      expect(err).toBe('no product id entered');
      done();
    });
  });


  test('calling getProductStyles with a product ID should return a response with correct styles', function(done) {
    const res = {
      data: {
        product_id: '71706',
        results: [
          { name: 'Reality' },
          { name: 'Mind' },
          { name: 'Power' },
          { name: 'Soul' },
          { name: 'Time' },
          { name: 'Space' },
        ]
      }
    };
    axios.get.mockResolvedValueOnce(res);

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
      });
  });


  test('calling getRelatedProducts with a product ID should return a response with a list of product_id', function(done) {
    const res = {data: [ 71697, 71698, 71700, 71701, 71704 ]};
    axios.get.mockResolvedValueOnce(res);

    Helpers.getRelatedProducts(71700)
    .then((res) => {
      let data = res.data;
      expect(data).toEqual([ 71697, 71698, 71700, 71701, 71704 ]);
      done();
    })
    .catch((err) => {
      console.error(err);
    });
  });
});

describe('Reviews', function() {

  beforeEach(() => {
    jest.resetAllMocks ();
  });

  test('calling getReviews with product ID should return a response with 5 reviews of the product', function(done) {
    const data = {
      product: '71706',
      count: 5,
      results: [
        {
          review_id: 289441,
          rating: 5,
          summary: 'Best purchase ever!',
          recommend: true,
          response: null,
          body: 'I really love this product. It is the best purchase I have ever made!',
          date: '2022-02-17T00:00:00.000Z',
          reviewer_name: 'happyshopper',
          helpfulness: 3,
          photos: [],
        },
      ]
    };
    axios.get.mockResolvedValue({ data });

    Helpers.getReviews(1, 5, 'newest', 71706)
    .then((response) => {
      expect(response.data).toEqual(data);
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });


  test('calling getReviews without product ID should return a response with error', function(done) {
    const error = new Error('no product id entered');
    axios.get.mockRejectedValueOnce(error);

    Helpers.getReviews(1, 5, 'newest')
    .catch((err) => {
      expect(err).toBe('no product id entered');
      done();
    });
  });

  test('calling getMetaReview with product ID should return a response with metadata review of the product', function(done) {
    const metadata = {
      product_id: '71706',
      ratings: { '1': '1', '2': '4', '4': '2', '5': '3' },
      recommended: { false: '3', true: '7' },
      characteristics: { Quality: { id: 240615, value: '3.3000000000000000' } }
    };
    axios.get.mockResolvedValue({ data: metadata });

    Helpers.getMetaReviews(71706)
    .then((response) => {
      expect(response.data).toEqual(metadata);
      done();
    })
    .catch( err => {
      console.error(err);
    });
  });

});

describe('Q&A', function() {

  beforeEach(() => {
    jest.resetAllMocks ();
  });

  test('calling getQuestions with product ID should return a response with questions about the product', function(done) {
    const res = {
      data: {
        product_id: '71706',
        results: [{}, {}, {}, {}, {}]
      }
    };
    axios.get.mockResolvedValueOnce(res);

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

    const error = 'no product_id provided';
    axios.get.mockResolvedValueOnce(error);

    Helpers.getQuestions()
    .catch( err => {
      expect(err).toBe('no product_id provided');
      done();
    });
  });

  test('calling getAnswers with question ID should return a response with questions about the product', function(done) {
    const res = {
      data: {
        question: '631421',
        results: ['answer1', 'answer2', 'answer3']
      }
    };
    axios.get.mockResolvedValueOnce(res);

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