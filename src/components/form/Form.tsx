import { PropsWithChildren, FunctionComponent, FormEvent } from 'react';
import useForm from '../../utils/useForm';
import { InputField, InputFieldProps } from '../inputfield/InputField';

export interface FormProps extends PropsWithChildren<any> {
  inputFields: InputFieldProps[];
  testId?: string;
}

export const Form: FunctionComponent<FormProps> = ({
  inputFields,
  testId,
}: FormProps) => {
  const defaultState = Object.fromEntries(
    Object.entries(inputFields).map(([key, value]) => {
      return [value.name.toLowerCase(), ''];
    })
  );
  const { clearForm, inputs, handleChange } = useForm(defaultState);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      data-testid={testId}
      data-component-type='Form'>
      {inputFields.map((item) => (
        <InputField
          key={item.name.toLowerCase()}
          label={item.label}
          name={item.name.toLowerCase()}
          value={inputs[item.name.toLowerCase()]}
          handleChange={handleChange}
          type={item.type}></InputField>
      ))}
      <button
        type='button'
        className='border rounded border-100 inline-block mr-2 mb-2 py-2 px-4'
        onClick={clearForm}>
        Clear Form
      </button>
      <button
        type='submit'
        className='border rounded border-100 inline-block mr-2 mb-2 py-2 px-4'>
        Submit
      </button>
    </form>
  );
};
