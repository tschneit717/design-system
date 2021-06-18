import { PropsWithChildren, FunctionComponent } from "react";

export interface FormProps extends PropsWithChildren<any> {
  text: string;
}

export const FormEditConfig = {
  emptyLabel: "Form Component",
  isEmpty: function (props: FormProps): boolean {
    return !props || !props.text;
  },
};

export const Form: FunctionComponent<FormProps> = (props: FormProps) => {
  return (
    <div>
      <p>Form</p>
    </div>
  );
};
