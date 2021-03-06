import { PropsWithChildren, FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';
export interface HeadlineProps extends PropsWithChildren<any> {
  titleText: string;
  text: string;
  alignment: string;
  titleTag: string;
  fontSize: string;
  testid?: string;
}

export const Headline: FunctionComponent<HeadlineProps> = (
  props: HeadlineProps
) => {
  const HeadlineTitle = (
    headlineProps: HeadlineProps['titleTage']
  ): JSX.Element => {
    const { titleTag: HeadlineTag, children, className } = headlineProps;
    return <HeadlineTag className={className}>{children}</HeadlineTag>;
  };
  return (
    <div
      data-component-type='Headline'
      className={`text-${props.alignment}`}
      key={uuidv4()}>
      <HeadlineTitle
        className={`text-${props.fontSize}`}
        titleTag={props.titleTag}>
        {props.titleText}
      </HeadlineTitle>
      <p>{props.text}</p>
    </div>
  );
};
