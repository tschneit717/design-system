import { PropsWithChildren, FunctionComponent } from "react";

export interface HeaderProps extends PropsWithChildren<any> {
  text: string;
}

export const HeaderEditConfig = {
  emptyLabel: "Header Component",
  isEmpty: function (props: HeaderProps): boolean {
    return !props || !props.text;
  },
};

export const Header: FunctionComponent<HeaderProps> = (props: HeaderProps) => {
  return (
    <div>
      <p>Header</p>
    </div>
  );
};
