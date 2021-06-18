import { PropsWithChildren, FunctionComponent } from "react";

export interface FooterProps extends PropsWithChildren<any> {
  text: string;
}

export const FooterEditConfig = {
  emptyLabel: "Footer Component",
  isEmpty: function (props: FooterProps): boolean {
    return !props || !props.text;
  },
};

export const Footer: FunctionComponent<FooterProps> = (props: FooterProps) => {
  return (
    <div>
      <p>Footer</p>
    </div>
  );
};
