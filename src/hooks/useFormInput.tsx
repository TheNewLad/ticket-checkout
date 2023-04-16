import React, { useState } from "react";

export const useFormInput = (
  required = false,
  initialValue = "",
  validatorRegex: RegExp | null = null
): [string, (value: string) => void, boolean] => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    if (required) {
      setError(newValue === "");
    }
    if (validatorRegex) {
      setError(!validatorRegex.test(newValue));
    }
  };

  return [value, handleValueChange, error];
};
