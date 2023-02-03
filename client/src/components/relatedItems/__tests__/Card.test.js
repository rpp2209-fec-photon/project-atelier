/**
* @jest-environment jsdom
*/

import React from 'react';
import {rest} from 'msw';
import {setupServer} from 'msw/node';

import {render, fireEvent, waitFor, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

import Card from '../Card.jsx';

const server = setupServer(
  rest.get('http://localhost:3000/products/12345/styles/', (req, res, ctx) => {
    let styles = {
      product_id: 12345,
      results: [
        {
          'default?': true,
          photos: [
            {url: 'img-url'}
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
);

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('Card component action button in Related Products list', async () => {
  const {container} = render(<Card productId={12345} parent={'related'} />);
  await waitFor(() => {
    const sgv = container.querySelector("[baseProfile='tiny']");
    expect(sgv).toBeDefined()
  });
});

test('Card component action button in Your Outfit list', async () => {
  const {container} = render(<Card productId={12345} parent={'outfit'} />);
  await waitFor(() => {
    const sgv = container.querySelector("[fill='none']");
    expect(sgv).toBeDefined()
  });
});

test('Card component preview image', async () => {
  const {container} = render(<Card productId={12345} />);
  await waitFor(() => {
    const img = container.querySelector("[class='preview']")
    expect(img).toHaveAttribute('alt', 'style name');
    expect(img).toHaveAttribute('src', 'img-url');
  });
});

test('Card component category and name', async () => {
  const {container} = render(<Card productId={12345} />);
  await waitFor(() => {
    expect(screen.getByText(/accessories/i)).toBeInTheDocument();
    expect(screen.getByText(/Bright Future Sunglasses/i)).toBeInTheDocument();
  });
});

test('Card component Price with sale_price', async () => {
  const {container} = render(<Card productId={12345} />);
  await waitFor(() => {
    expect(screen.getByText(/45.00/i)).toBeInTheDocument();
    expect(screen.getByText(/69.00/i)).toBeInTheDocument();
  });
});

test('Card component Price without sale_price', async () => {
  const {container} = render(<Card productId={54321} />);
  await waitFor(() => {
    expect(screen.getByText(/100.00/i)).toBeInTheDocument();
  });
});

test('Card component Rating', async () => {
  const {container} = render(<Card productId={54321} />);
  await waitFor(() => {
    const stars = screen.getAllByRole('img');
    expect(stars[1]).toHaveAttribute('src', '../../../resources/fullStar.png');
    expect(stars[2]).toHaveAttribute('src', '../../../resources/fullStar.png');
    expect(stars[3]).toHaveAttribute('src', '../../../resources/halfStar.png');
    expect(stars[4]).toHaveAttribute('src', '../../../resources/emptyStar.png');
    expect(stars[5]).toHaveAttribute('src', '../../../resources/emptyStar.png');
  });
});

