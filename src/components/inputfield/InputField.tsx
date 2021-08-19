import { useState } from 'react';
import {
  PropsWithChildren,
  FunctionComponent,
  ChangeEvent,
  FormEvent,
} from 'react';
import useForm from '../../utils/useForm';
export interface InputFieldProps extends PropsWithChildren<any> {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  testId?: string;
  handleChange?: any;
  value?: any;
  isRequired: boolean;
}
export const InputField: FunctionComponent<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  testId,
  value,
  handleChange,
  isRequired = false,
}: InputFieldProps) => {
  const [fieldValue, setFieldValue] = useState<string>('');

  const manageUpdate = (e: FormEvent<HTMLInputElement>) => {
    if (handleChange) {
      handleChange(e);
    } else {
      setFieldValue(e.currentTarget.value);
    }
  };
  return (
    <label
      data-testid={testId}
      className='block mb-2'
      data-component-type='InputField'>
      {label}
      <input
        className='block border rounded border-gray-100'
        name={name.toLowerCase()}
        type={type}
        required={isRequired}
        onChange={(e) => manageUpdate(e)}
        value={handleChange && value ? value : fieldValue}
        data-testid={`input-for-${name}`}
        placeholder={placeholder}
      />
    </label>
  );
};
