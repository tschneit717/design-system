import { PropsWithChildren, FunctionComponent } from 'react';

export interface InputfieldProps extends PropsWithChildren<any> {
  text: string;
}

export const InputfieldEditConfig = {
  emptyLabel: 'Inputfield Component',
  isEmpty: function (props: InputfieldProps): boolean {
    return !props || !props.text;
  },
};

export const Inputfield: FunctionComponent<InputfieldProps> = (
  props: InputfieldProps
) => {
  return (
    <div>
      <p>Inputfield</p>
    </div>
  );
};
