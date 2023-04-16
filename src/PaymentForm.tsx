import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useFormInput } from "./hooks/useFormInput";

interface Props {
  onFormError: () => void;
  onFormErrorResolved: () => void;
}

export const PaymentForm = ({ onFormError, onFormErrorResolved }: Props) => {
  const sixteenDigitRegex = /^\d{16}$/;
  const threeDigitRegex = /^\d{3}$/;
  const [cardName, setCardName, cardNameError] = useFormInput(true);
  const [cardNumber, setCardNumber, cardNumberError] = useFormInput(
    true,
    "",
    sixteenDigitRegex
  );
  const [expDate, setExpDate, expDateError] = useFormInput(true);
  const [cvv, setCvv, cvvError] = useFormInput(true, "", threeDigitRegex);

  useEffect(() => {
    checkFormErrors();
  }, [cardName, cardNumber, expDate, cvv]);

  const checkFormErrors = () => {
    const hasErrorFields =
      cardNameError || cardNumberError || expDateError || cvvError;
    const hasMissingFields = !cardName || !cardNumber || !expDate || !cvv;
    if (hasErrorFields || hasMissingFields) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const fields = [
    {
      id: "cardName",
      label: "Name on card",
      autoComplete: "cc-name",
      error: cardNameError,
      onChange: setCardName,
      value: cardName,
    },
    {
      id: "cardNumber",
      label: "Card number",
      autoComplete: "cc-number",
      error: cardNumberError,
      onChange: setCardNumber,
      value: cardNumber,
      helperText: cardNumberError ? "Card Number is 16 digits" : "",
    },
    {
      id: "expDate",
      label: "Expiry date",
      autoComplete: "cc-exp",
      error: expDateError,
      onChange: setExpDate,
      value: expDate,
    },
    {
      id: "cvv",
      label: "CVV",
      autoComplete: "cc-csc",
      helperText: "Last three digits on signature strip",
      error: cvvError,
      onChange: setCvv,
      value: cvv,
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        {fields.map(
          ({ id, label, error, onChange, value, helperText, autoComplete }) => (
            <Grid xs={12} md={6}>
              <TextField
                required
                fullWidth
                variant="standard"
                id={id}
                label={label}
                error={error}
                autoComplete={autoComplete}
                onChange={(event) => onChange(event.target.value)}
                value={value}
                helperText={helperText}
              />
            </Grid>
          )
        )}
      </Grid>
    </Box>
  );
};
