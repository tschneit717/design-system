import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Product } from './Product';

const PRODUCT_TEST_ID = 'ProductTestId';
const PRODUCT_TEST_TITLE = 'Product Title';
const PRODUCT_TEST_DESCRIPTION = 'Product Description';
const PRODUCT_TEST_IMAGE_LINK = 'https://via.placeholder.com/400x500';
const PRODUCT_TEST_PRICE = 9999;
const PRODUCT_AMOUNT_LIMIT = 5;
const PRODUCT_OPTIONS_TITLE = 'Color';
const PRODUCT_OPTIONS_LIST = [
  {
    text: 'Red',
    value: 'Red',
    image: 'https://via.placeholder.com/150x150',
  },
  {
    text: 'Blue',
    value: 'Blue',
    image: 'https://via.placeholder.com/150x150',
  },
];

const PRODUCT_TEST_CART = jest.fn();

let PRODUCT_ELEMENT: HTMLElement;

describe('Product Element ->', () => {
  beforeEach(() => {
    render(
      <Product
        productTitle={PRODUCT_TEST_TITLE}
        productDescription={PRODUCT_TEST_DESCRIPTION}
        imageLink={PRODUCT_TEST_IMAGE_LINK}
        price={PRODUCT_TEST_PRICE}
        amountLimit={PRODUCT_AMOUNT_LIMIT}
        optionsTitle={PRODUCT_OPTIONS_TITLE}
        testId={PRODUCT_TEST_ID}
        addToCartFunction={PRODUCT_TEST_CART}
        options={PRODUCT_OPTIONS_LIST}></Product>
    );
    PRODUCT_ELEMENT = screen.getByTestId(PRODUCT_TEST_ID);
  });

  afterEach(() => {
    cleanup();
  });

  test('renders when elements are passed to it', () => {
    expect(PRODUCT_ELEMENT).toBeTruthy();
  });

  test('price changes when the amount is changed', () => {
    const price = Number(
      screen.getByTitle('Total Price').textContent?.replace(/[^0-9\.]+/g, '')
    );
    const amount = screen.getByTitle(
      'Number of Product Title'
    ) as HTMLSelectElement;

    userEvent.click(amount);
    userEvent.selectOptions(screen.getByRole('combobox'), ['3']);
    const valueAmountThree = screen.getByRole('option', {
      name: '3',
    }) as HTMLOptionElement;
    expect(valueAmountThree.selected).toBe(true);
    const newPrice = Number(
      screen.getByTitle('Total Price').textContent?.replace(/[^0-9\.]+/g, '')
    );
    const priceCalc = (price * Number(amount.value)).toFixed(2);
    expect(newPrice).toBe(+priceCalc);
  });

  test('clicking a button fires off a function to add the item to a cart', () => {
    userEvent.click(screen.getByTitle('Add to Cart Button'));
    expect(PRODUCT_TEST_CART).toHaveBeenCalled();
  });
});
test('Product Element -> If no limit is passed to the item, render out 99 options', () => {
  render(
    <Product
      productTitle={PRODUCT_TEST_TITLE}
      productDescription={PRODUCT_TEST_DESCRIPTION}
      imageLink={PRODUCT_TEST_IMAGE_LINK}
      price={PRODUCT_TEST_PRICE}
      optionsTitle={PRODUCT_OPTIONS_TITLE}
      testId={PRODUCT_TEST_ID}
      addToCartFunction={PRODUCT_TEST_CART}
      options={PRODUCT_OPTIONS_LIST}></Product>
  );
  PRODUCT_ELEMENT = screen.getByTestId(PRODUCT_TEST_ID);

  const optionList = screen.getAllByRole('option');
  expect(optionList.length).toBe(99);
});
