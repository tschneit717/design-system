import { PropsWithChildren, FunctionComponent } from "react";

export interface ModalProps extends PropsWithChildren<any> {
  text: string;
}

export const ModalEditConfig = {
  emptyLabel: "Modal Component",
  isEmpty: function (props: ModalProps): boolean {
    return !props || !props.text;
  },
};

export const Modal: FunctionComponent<ModalProps> = (props: ModalProps) => {
  return (
    <div>
      <p>Modal</p>
    </div>
  );
};
