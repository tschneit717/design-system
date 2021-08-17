import { useState } from 'react';
import { PropsWithChildren, FunctionComponent, FormEvent } from 'react';
import useForm from '../../utils/useForm';
import { InputField, InputFieldProps } from '../inputfield/InputField';

export interface FormProps extends PropsWithChildren<any> {
  inputFields: InputFieldProps[];
  testId?: string;
  postURL?: string;
}

export const Form: FunctionComponent<FormProps> = ({
  inputFields,
  testId,
  postURL,
}: FormProps) => {
  const defaultState = Object.fromEntries(
    Object.entries(inputFields).map(([key, value]) => {
      return [value.name.toLowerCase(), ''];
    })
  );
  const { clearForm, inputs, handleChange } = useForm(defaultState);

  const [responseText, setResponseText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (postURL) {
      try {
        fetch(postURL, {
          method: 'POST',
          body: JSON.stringify(inputs),
        });
        setResponseText('Success');
      } catch (error) {
        setResponseText(`Error: ${error.message}`);
      }
    }
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      data-testid={testId}
      data-component-type='Form'>
      {responseText && <div>{responseText}</div>}
      <div>
        {inputFields.map((item) => (
          <InputField
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
