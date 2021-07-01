import { PropsWithChildren, FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface TextProps extends PropsWithChildren<any> {
  text: string;
  textTag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

export const Text: FunctionComponent<TextProps> = (props: TextProps) => {
  const TextWrapper = (textProps: TextProps): JSX.Element => {
    const { textTag: TextType = 'p', text: Text } = textProps;
    return <TextType key={uuidv4()}>{Text}</TextType>;
  };
  return <TextWrapper textTag={props.type} text={props.text}></TextWrapper>;
};
