import { PropsWithChildren, FunctionComponent } from 'react';

export interface InputfieldProps extends PropsWithChildren<any> {
  text: string;
}

export const Inputfield: FunctionComponent<InputfieldProps> = (
  props: InputfieldProps
) => {
  return (
    <div>
      <p>Inputfield</p>
    </div>
  );
};
