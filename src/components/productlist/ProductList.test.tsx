import { cleanup, render, screen } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom';
import { ProductList } from './ProductList';

const PRODUCT_LIST_TITLE = 'Porduct List text';
const PRODUCTS_LIST_ITEMS = [
  {
    title: 'Product 1',
    image: 'https://via.placeholder.com/150x150',
    price: 1099,
    slug: 'product-1',
  },
  {
    title: 'Product 2',
    image: 'https://via.placeholder.com/150x150',
    price: 4522,
    slug: 'product-2',
  },
  {
    title: 'Product 3',
    image: 'https://via.placeholder.com/150x150',
    price: 10122,
    slug: 'product-3',
  },
  {
    title: 'Product 4',
    image: 'https://via.placeholder.com/150x150',
    price: 2000,
    slug: 'product-4',
  },
];
describe('Product List ->', () => {
  beforeEach(() => {
    render(
      <StaticRouter>
        <ProductList
          products={PRODUCTS_LIST_ITEMS}
          title={PRODUCT_LIST_TITLE}></ProductList>
      </StaticRouter>
    );
  });
  afterEach(() => {
    cleanup();
  });
  test('renders on page', () => {
    expect(screen.getByRole('list')).toBeTruthy();
  });
  test('has the correct length of items', () => {
    expect(screen.getAllByRole('listitem').length).toBe(
      PRODUCTS_LIST_ITEMS.length
    );
  });
});
