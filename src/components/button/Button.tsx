import { PropsWithChildren, FunctionComponent } from 'react';

export interface ButtonProps extends PropsWithChildren<any> {
  text?: string;
  function?: any;
  label?: string;
  bgColor?: string;
  border?: boolean;
  textColor?: string;
  id?: string;
  testId?: string;
}

export const Button: FunctionComponent<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      data-testid={props.testId}
      aria-label={props.label}
      className={`py-2 px-4 rounded text-${
        props.textColor !== ('white' || 'black')
          ? `${props.textColor}-400`
          : props.textColor
      } bg-${
        props.bgColor !== ('white' || 'black')
          ? `${props.bgColor}-400`
          : props.bgColor
      } ${props.border ? 'border-1 border-solid border-white' : ''}`}
      onClick={props.function}>
      {props.text}
    </button>
  );
};
