import { useState } from 'react';
import { PropsWithChildren, FunctionComponent } from 'react';

export interface AccordionProps extends PropsWithChildren<any> {
  title: string;
  body: string;
  testid?: string;
}

export const Accordion: FunctionComponent<AccordionProps> = (
  props: AccordionProps
) => {
  const [isOpen, toggleIsOpen] = useState(false);
  return (
    <div className='accordion' key={props.title} data-testid={props.testid}>
      <button
        onClick={() => (isOpen ? toggleIsOpen(false) : toggleIsOpen(true))}
        title={props.title}
        className={`accordion-body ${isOpen ? 'open' : ''}`}>
        <span className='accordion-title'>{props.title}</span>
        <div>{props.body}</div>
      </button>
    </div>
  );
};
