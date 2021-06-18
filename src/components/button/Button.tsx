import { PropsWithChildren, FunctionComponent } from "react";

export interface ButtonProps extends PropsWithChildren<any> {
  text: string;
}

export const ButtonEditConfig = {
  emptyLabel: "Button Component",
  isEmpty: function (props: ButtonProps): boolean {
    return !props || !props.text;
  },
};

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <div>
      <p>Button</p>
    </div>
  );
};
