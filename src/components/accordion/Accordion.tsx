import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';

export interface AccordionProps extends PropsWithChildren<any> {
  title: string;
  body?: string;
  testid?: string;
}

export const Accordion: FunctionComponent<AccordionProps> = (
  props: AccordionProps
) => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <div
      data-component-type='Accordion'
      className='accordion'
      key={props.title}
      data-testid={props.testid}>
      <button
        onClick={() => (isOpen ? toggleIsOpen(false) : toggleIsOpen(true))}
        title={props.title}
        className='py-2 px-5 border'>
        <span className='accordion-title'>{props.title}</span>
      </button>
      <div
        className={`accordion-body overflow-hidden  ${
          isOpen ? 'h-auto' : 'h-0'
        }`}>
        {props.body || props.children}
      </div>
    </div>
  );
};
