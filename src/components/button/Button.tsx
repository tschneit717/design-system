import { PropsWithChildren, FunctionComponent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface ButtonProps extends PropsWithChildren<any> {
  text?: string;
  buttonFunction?: Function;
  label?: string;
  bgColor?: string;
  border?: boolean;
  textColor?: string;
  id?: string;
  testId?: string;
}

const manageColor = (color: string, type: string) => {
  return color !== 'white' && color !== 'black'
    ? `${type}-${color}-400`
    : `${type}-${color}`;
};

export const Button: FunctionComponent<ButtonProps> = ({
  textColor = 'black',
  bgColor = 'white',
  testId,
  label,
  border,
  text,
  buttonFunction,
}: ButtonProps) => {
  return (
    <button
      data-component-type='Button'
      key={uuidv4()}
      data-testid={testId}
      aria-label={label}
      className={`py-2 px-4 rounded ${
        textColor && manageColor(textColor, 'text')
      }  ${bgColor && manageColor(bgColor, 'bg')} ${
        border ? 'border-1 border-solid border-white' : ''
      }`}
      onClick={buttonFunction ? (e) => buttonFunction(e) : () => true}>
      {text}
    </button>
  );
};
