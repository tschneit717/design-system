import { PropsWithChildren, FunctionComponent } from 'react';

export interface ProductProps extends PropsWithChildren<any> {
  text: string;
}

export const Product: FunctionComponent<ProductProps> = (
  props: ProductProps
) => {
  return (
    <div>
      <p>Product</p>
    </div>
  );
};
