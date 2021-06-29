import { useCallback, useState } from 'react';
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

const useToggle = (initialValue = false): (boolean | (() => void))[] => {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);
  return [value, toggle];
};

export const Accordion: FunctionComponent<AccordionProps> = (
  props: AccordionProps
) => {
  const [isOn, toggleIsOn] = useToggle();
  return (
    <div data-testid={props.testid}>
      {props.accordionItems.map((item) => (
        <button
          key={item.title}
          onClick={toggleIsOn as any}
          title={item.title}
          className={`accordion-body ${isOn ? 'open' : ''}`}>
          <span className='accordion-title'>{item.title}</span>
          <div>{item.body}</div>
        </button>
      ))}
    </div>
  );
};
