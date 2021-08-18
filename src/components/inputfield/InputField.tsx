import { PropsWithChildren, FunctionComponent } from 'react';

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
  handleChange,
  value,
  isRequired = false,
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
        required={isRequired}
        value={value}
        data-testid={`input-for-${name}`}
        placeholder={placeholder}
        onChange={handleChange ? (e) => handleChange(e) : () => null}
      />
    </label>
  );
};
