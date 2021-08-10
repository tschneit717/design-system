import { PropsWithChildren, FunctionComponent } from 'react';

export interface ProductListProps extends PropsWithChildren<any> {
  text: string;
}

export const ProductList: FunctionComponent<ProductListProps> = (
  props: ProductListProps
) => {
  return (
    <div data-component-type='ProductList'>
      <p>ProductList</p>
    </div>
  );
};
