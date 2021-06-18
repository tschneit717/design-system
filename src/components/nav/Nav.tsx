import { PropsWithChildren, FunctionComponent } from "react";

export interface NavProps extends PropsWithChildren<any> {
  text: string;
}

export const NavEditConfig = {
  emptyLabel: "Nav Component",
  isEmpty: function (props: NavProps): boolean {
    return !props || !props.text;
  },
};

export const Nav: FunctionComponent<NavProps> = (props: NavProps) => {
  return (
    <div>
      <p>Nav</p>
    </div>
  );
};
