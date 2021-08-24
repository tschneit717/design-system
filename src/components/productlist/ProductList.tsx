import { PropsWithChildren, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { formatMoney } from '../../utils/formatMoney';

export interface ProductListProps extends PropsWithChildren<any> {
  title: string;
  products: {
    title: string;
    price: number;
    image: string;
    slug: string;
  }[];
}

export const ProductList: FunctionComponent<ProductListProps> = ({
  title,
  products,
}: ProductListProps) => {
  return (
    <div data-component-type='ProductList'>
      <h2>{title}</h2>
      <ul className='grid gap-8 grid-cols-2'>
        {products.map((product) => (
          <li key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img alt={product.title} src={product.image} />
              <div>
                <p>{product.title}</p>
                <p>{formatMoney(product.price)}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      {/* TODO: FILTERS */}
      {/* TODO: PAGINATION */}
    </div>
  );
};
