import {
  PropsWithChildren,
  FunctionComponent,
  useState,
  ChangeEvent,
} from 'react';
import { v4 as uuidv4 } from 'uuid';

export interface CodefieldProps extends PropsWithChildren<any> {
  count: number;
  value: string;
  testid?: string;
  key?: string;
}

export const Codefield: FunctionComponent<CodefieldProps> = (
  props: CodefieldProps
) => {
  let arrayLength = [];
  for (let i = 0; i < props.count; i++) {
    arrayLength.push('');
  }
  const [state, setState] = useState<Array<string>>(arrayLength);

  const checkForValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      e.target.classList.add('--has-value');
    } else {
      e.target.classList.remove('--has-value');
    }
  };

  const handleFocus = (i: number) => {
    const inputList = document.querySelectorAll<HTMLElement>(
      'form.codefield input'
    );
    if (i < inputList.length && i !== -1) {
      inputList[i].focus();
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, i: number) => {
    let array = [...state];
    array[i] = e.target.value;
    if (array[i].length) {
      handleFocus(i + 1);
    } else {
      handleFocus(i - 1);
    }
    setState(array);
  };

  const renderFields = () => {
    const row = [];
    for (let i = 0; i < props.count; i++) {
      row.push(
        <input
          className='border'
          key={uuidv4()}
          value={state[i]}
          maxLength={1}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            handleChange(e, i);
            checkForValue(e);
          }}
        />
      );
    }
    return row;
  };

  return (
    <form
      key={uuidv4()}
      data-testid={props.testid}
      name={props.value}
      className='codefield'>
      {renderFields()}
    </form>
  );
};
