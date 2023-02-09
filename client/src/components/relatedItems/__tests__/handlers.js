import {rest} from 'msw';

export const handlers = [
  rest.get('http://localhost:3000/products/12345/styles/', (req, res, ctx) => {
    let styles = {
      product_id: 12345,
      results: [
        {
          'default?': true,
          photos: [
            {thumbnail_url: 'img-url'}
          ],
          name: 'style name',
          original_price: '69.00',
          sale_price: '45:00'
        }
      ]
    }
    return res(ctx.json(styles))
  }),
  rest.get('http://localhost:3000/products/54321/styles/', (req, res, ctx) => {
    let styles = {
      product_id: 54321,
      results: [
        {
          'default?': true,
          photos: [
            {url: 'img-url'}
          ],
          name: 'style name',
          original_price: '100.00',
          sale_price: null
        }
      ]
    }
    return res(ctx.json(styles))
  }),
  rest.get('http://localhost:3000/reviews/meta/?product_id=12345', (req, res, ctx) => {
    return res(ctx.json({
      ratings: {1: 22, 2: 1, 3: 8, 4: 17, 5: 0},
    }));
  }),
  rest.get('http://localhost:3000/products/12345/', (req, res, ctx) => {
    let info = {
      "name":"Bright Future Sunglasses",
      "category":"Accessories",
    }
    return res(ctx.json(info));
  }),
  rest.get('http://localhost:3000/products/54321/', (req, res, ctx) => {
    let info = {
      "name":"Power Stone",
      "category":"Cosmic",
    }
    return res(ctx.json(info));
  }),
];