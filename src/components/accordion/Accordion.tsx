import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';

export interface AccordionProps extends PropsWithChildren<any> {
  title: string;
  body: string;
  testid: string;
}

export const AccordionEditConfig = {
  emptyLabel: 'Accordion Component',
  isEmpty: function (props: AccordionProps): boolean {
    return !props || !props.accordionItems.length;
  },
};

export const Accordion: FunctionComponent<AccordionProps> = (
  props: AccordionProps
) => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <div className='accordion' data-testid={props.testid}>
      <button
        key={props.title}
        onClick={() => (isOpen ? toggleIsOpen(false) : toggleIsOpen(true))}
        title={props.title}
        className={`accordion-body ${isOpen ? 'open' : ''}`}>
        <span className='accordion-title'>{props.title}</span>
        <div>{props.body}</div>
      </button>
    </div>
  );
};
