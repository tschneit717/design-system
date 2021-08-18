import { useState } from 'react';
import { PropsWithChildren, FunctionComponent, FormEvent } from 'react';
import useForm from '../../utils/useForm';
import { InputField, InputFieldProps } from '../inputfield/InputField';

export interface FormProps extends PropsWithChildren<any> {
  inputFields: InputFieldProps[];
  testId?: string;
  submitForm: Function;
}

export const Form: FunctionComponent<FormProps> = ({
  inputFields,
  testId,
  submitForm,
}: FormProps) => {
  const defaultState = Object.fromEntries(
    Object.entries(inputFields).map(([key, value]) => {
      return [value.name.toLowerCase(), ''];
    })
  );
  const { clearForm, inputs, handleChange } = useForm(defaultState);

  const [responseText, setResponseText] = useState('');
  const [errorStatus, setErrorStatus] = useState('');
  const requiredFields: Array<string> = [];
  Object.entries(inputFields).map(([key, item]) => {
    if (item.isRequired === true) {
      requiredFields.push(item.name.toLowerCase());
    }
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    let errorMessage = '';
    Object.entries(inputs).forEach(([key, value]) => {
      if (requiredFields.includes(key.toLowerCase()) && value === '') {
        errorMessage = `${key} is missing a value`;
        return;
      }
      if (errorMessage) {
        setErrorStatus(errorMessage);
        return;
      } else {
        submitForm(inputs);
        setResponseText('Success');
      }
    });
  };
  return (
    <form
      onSubmit={(e: FormEvent) => handleSubmit(e)}
      data-testid={testId}
      data-component-type='Form'>
      {responseText && !errorStatus && <div>{responseText}</div>}
      {errorStatus && <div className='text-red-400'>Error: {errorStatus}</div>}
      <div>
        {inputFields.map((item) => (
          <InputField
            isRequired={item.isRequired}
            key={item.name.toLowerCase()}
            label={item.label}
            name={item.name.toLowerCase()}
            value={inputs[item.name.toLowerCase()]}
            handleChange={handleChange}
            type={item.type}></InputField>
        ))}
      </div>
      <button
        data-testid='clear-form'
        type='button'
        className='border rounded border-100 inline-block mr-2 mb-2 py-2 px-4'
        onClick={clearForm}>
        Clear Form
      </button>
      <button
        data-testid='submit-form'
        type='submit'
        className='border rounded border-100 inline-block mr-2 mb-2 py-2 px-4'>
        Submit
      </button>
    </form>
  );
};
