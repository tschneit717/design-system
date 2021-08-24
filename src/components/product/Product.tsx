import { ChangeEvent, useState } from 'react';
import { PropsWithChildren, FunctionComponent, FormEvent } from 'react';
import { formatMoney } from '../../utils/formatMoney';

export interface ProductProps extends PropsWithChildren<any> {
  productTitle: string;
  productDescription: string;
  imageLink: string;
  price: number;
  amountLimit?: number;
  testId?: string;
  addToCartFunction: Function;
  optionsTitle: string;
  options?: {
    text: string;
    value: string;
    image?: string;
  }[];
}

export const Product: FunctionComponent<ProductProps> = ({
  productTitle,
  productDescription,
  imageLink,
  price,
  amountLimit = 99,
  testId,
  addToCartFunction,
  optionsTitle,
  options,
}: ProductProps) => {
  const [amount, setAmount] = useState<string>('1');
  const handleAmount = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setAmount(e.target.value);
  };

  const renderSelectOptions = () => {
    const optionsList = [];
    for (let i = 1; i <= amountLimit; i++) {
      optionsList.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return optionsList;
  };

  return (
    <div
      data-testid={testId}
      data-component-type='Product'
      className='flex row gap-8'>
      <img className='' src={imageLink} alt={productTitle} />
      <div>
        <h2 className='text-2xl mb-2'>{productTitle}</h2>
        <p>{productDescription}</p>
        <div className='my-8 flex gap-4'>
          <select
            title={`Number of ${productTitle}`}
            className='border rounded w-16'
            value={amount}
            onChange={(e) => handleAmount(e)}>
            {renderSelectOptions()}
          </select>
          <p title={'Total Price'}>{formatMoney(price * +amount)}</p>
        </div>
        <p className='mb-2'>{optionsTitle}</p>
        {options && (
          <ul className='flex gap-4'>
            {options.map((option) => (
              <li key={option.value}>
                <button
                  style={{ backgroundImage: `url(${option.image})` }}
                  className='rounded-full h-12 w-12 flex items-center justify-center'>
                  {option.text}
                </button>
              </li>
            ))}
          </ul>
        )}
        <button
          title='Add to Cart Button'
          className='rounded my-2 py-2 px-4 border'
          onClick={(e) => {
            addToCartFunction(e);
          }}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
