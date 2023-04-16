import React, { useState } from "react";

export const useFormInput = (
  required = false,
  initialValue = ""
): [string, (value: string) => void, boolean] => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState(false);

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
    if (required) {
      setError(newValue === "");
    }
  };

  return [value, handleValueChange, error];
};
