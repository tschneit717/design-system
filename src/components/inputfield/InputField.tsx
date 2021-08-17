import { PropsWithChildren, FunctionComponent } from 'react';

export interface InputFieldProps extends PropsWithChildren<any> {
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  testId?: string;
  handleChange?: any;
  value?: any;
}
export const InputField: FunctionComponent<InputFieldProps> = ({
  name,
  label,
  type,
  placeholder,
  testId,
  handleChange,
  value,
}: InputFieldProps) => {
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
        value={value}
        placeholder={placeholder}
        onChange={handleChange ? (e) => handleChange(e) : () => null}
      />
    </label>
  );
};
