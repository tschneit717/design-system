import { PropsWithChildren, FunctionComponent } from "react";

export interface ProductListProps extends PropsWithChildren<any> {
  text: string;
}

export const ProductListEditConfig = {
  emptyLabel: "ProductList Component",
  isEmpty: function (props: ProductListProps): boolean {
    return !props || !props.text;
  },
};

export const ProductList: FunctionComponent<ProductListProps> = (
  props: ProductListProps
) => {
  return (
    <div>
      <p>ProductList</p>
    </div>
  );
};
