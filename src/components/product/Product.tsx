import { PropsWithChildren, FunctionComponent } from "react";

export interface ProductProps extends PropsWithChildren<any> {
  text: string;
}

export const ProductEditConfig = {
  emptyLabel: "Product Component",
  isEmpty: function (props: ProductProps): boolean {
    return !props || !props.text;
  },
};

export const Product: FunctionComponent<ProductProps> = (
  props: ProductProps
) => {
  return (
    <div>
      <p>Product</p>
    </div>
  );
};
