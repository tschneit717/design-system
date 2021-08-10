import { PropsWithChildren, FunctionComponent } from 'react';

export interface ProductProps extends PropsWithChildren<any> {
  text: string;
}

export const Product: FunctionComponent<ProductProps> = (
  props: ProductProps
) => {
  return (
    <div data-component-type='Product'>
      <p>Product</p>
    </div>
  );
};
