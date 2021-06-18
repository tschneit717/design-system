import { PropsWithChildren, FunctionComponent } from "react";

export interface AccordionProps extends PropsWithChildren<any> {
  text: string;
}

export const AccordionEditConfig = {
  emptyLabel: "Accordion Component",
  isEmpty: function (props: AccordionProps): boolean {
    return !props || !props.text;
  },
};

export const Accordion: FunctionComponent<AccordionProps> = (
  props: AccordionProps
) => {
  return (
    <div>
      <p>Accordion</p>
    </div>
  );
};
