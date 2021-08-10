import { PropsWithChildren, FunctionComponent } from 'react';

export interface ModalProps extends PropsWithChildren<any> {
  text: string;
}

export const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  return (
    <div data-component-type='Modal'>
      <p>Modal</p>
    </div>
  );
};
