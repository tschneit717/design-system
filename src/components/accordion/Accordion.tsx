import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';

export interface AccordionProps extends PropsWithChildren<any> {
  accordionItems: Array<{
    title: string;
    body: string;
  }>;
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
    <div data-testid={props.testid}>
      {props.accordionItems.map((item) => (
        <button
          key={item.title}
          onClick={() => (isOpen ? toggleIsOpen(false) : toggleIsOpen(true))}
          title={item.title}
          className={`accordion-body ${isOpen ? 'open' : ''}`}>
          <span className='accordion-title'>{item.title}</span>
          <div>{item.body}</div>
        </button>
      ))}
    </div>
  );
};
