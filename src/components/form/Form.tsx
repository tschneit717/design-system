import { PropsWithChildren, FunctionComponent } from 'react';

export interface FormProps extends PropsWithChildren<any> {
  text: string;
}

export const Form: FunctionComponent<FormProps> = (props: FormProps) => {
  return (
    <div data-component-type='Form'>
      <p>Form</p>
    </div>
  );
};
