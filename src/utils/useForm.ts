import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState<any>(initial);
  function handleChange(e: {
    target: { files?: any; value?: any; name?: any; type?: any };
  }) {
    let { value, name, type } = e.target;
    if (type === 'number') {
      value = +value;
    }
    if (type === 'file') {
      value[0] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return { inputs, handleChange, resetForm, clearForm };
}
