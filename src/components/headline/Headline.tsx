import { PropsWithChildren, FunctionComponent } from "react";

export interface HeadlineProps extends PropsWithChildren<any> {
  text: string;
}

export const HeadlineEditConfig = {
  emptyLabel: "Headline Component",
  isEmpty: function (props: HeadlineProps): boolean {
    return !props || !props.text;
  },
};

export const Headline: FunctionComponent<HeadlineProps> = (
  props: HeadlineProps
) => {
  return (
    <div>
      <p>Headline</p>
    </div>
  );
};
