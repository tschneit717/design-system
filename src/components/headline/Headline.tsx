import { PropsWithChildren, FunctionComponent } from "react";

export interface HeadlineProps extends PropsWithChildren<any> {
  titleText: string;
  text: string;
  alignment: string;
  titleTag: string;
  fontSize: string;
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
  const HeadlineTitle = (headlineProps: HeadlineProps["titleTage"]): JSX.Element => {
    const { titleTag: HeadlineTag = "h2", children, className} = headlineProps;
    return <HeadlineTag className={className}>{children}</HeadlineTag>;
  };
  return (
    <div className={`text-${props.alignment}`}>
      <HeadlineTitle className={`text-${props.fontSize}`} titleTag={props.titleTag}>{props.titleText}</HeadlineTitle>
      <p>{props.text}</p>
    </div>
  );
};
