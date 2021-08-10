import { PropsWithChildren, FunctionComponent } from 'react';

export interface InputfieldProps extends PropsWithChildren<any> {
  text: string;
}

export const Inputfield: FunctionComponent<InputfieldProps> = (
  props: InputfieldProps
) => {
  return (
    <div data-component-type='Inputfield'>
      <p>Inputfield</p>
    </div>
  );
};
