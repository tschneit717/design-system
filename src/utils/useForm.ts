import { useState } from 'react';

export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState<any>(initial);
  function handleChange(e: {
    currentTarget: { files?: any; value?: any; name?: any; type?: any };
  }) {
    let { value, name, type } = e.currentTarget;
    if (type === 'number') {
      value = +value;
    }
    if (type === 'file') {
      value[0] = e.currentTarget.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ''])
    );
    setInputs(blankState);
  }

  return { inputs, handleChange, clearForm };
}
