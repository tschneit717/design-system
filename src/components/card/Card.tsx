import { PropsWithChildren, FunctionComponent } from "react";

export interface CardProps extends PropsWithChildren<any> {
  text: string;
}

export const CardEditConfig = {
  emptyLabel: "Card Component",
  isEmpty: function (props: CardProps): boolean {
    return !props || !props.text;
  },
};

export const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  return (
    <div>
      <p>Card</p>
    </div>
  );
};
