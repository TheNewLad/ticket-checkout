import React, { useEffect, useState } from "react";
import {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

interface Props {
  onFormError: () => void;
  onFormErrorResolved: () => void;
}

export const PaymentForm = ({ onFormError, onFormErrorResolved }: Props) => {
  const [cardNameError, setCardNameError] = useState(false);
  const [cardNumberError, setCardNumberError] = useState(false);
  const [expDateError, setExpDateError] = useState(false);
  const [cvvError, setCvvError] = useState(false);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expDate, setExpDate] = useState("");
  const [cvv, setCvv] = useState("");

  useEffect(() => {
    checkFormErrors();

    return () => {
      onFormErrorResolved();
    };
  }, []);

  useEffect(() => {
    checkFormErrors();
  }, [cardName, cardNumber, expDate, cvv]);

  const checkFormErrors = () => {
    if (hasEmptyRequiredFields() || hasErrors) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const hasErrors =
    cardNameError || cardNumberError || expDateError || cvvError;

  const hasEmptyRequiredFields = () => {
    const isEmpty = (value: string) => value === "";
    return (
      isEmpty(cardName) ||
      isEmpty(cardNumber) ||
      isEmpty(expDate) ||
      isEmpty(cvv)
    );
  };

  const handleCardNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setCardNameError(isEmpty);
    setCardName(value);
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isNotSixteenDigits = !/^\d{16}$/.test(value);
    setCardNumberError(isNotSixteenDigits || value === "");
    setCardNumber(value);
  };

  const handleExpDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setExpDateError(isEmpty);
    setExpDate(value);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isNotThreeDigits = !/^\d{3}$/.test(value);
    setCvvError(isNotThreeDigits || value === "");
    setCvv(value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            error={cardNameError}
            onChange={handleCardNameChange}
            value={cardName}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            error={cardNumberError}
            onChange={handleCardNumberChange}
            value={cardNumber}
            helperText={cardNumberError ? "Card Number is 16 digits" : ""}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            error={expDateError}
            onChange={handleExpDateChange}
            value={expDate}
          />
        </Grid>
        <Grid xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="CVV"
            helperText="Last three digits on signature strip"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            error={cvvError}
            onChange={handleCvvChange}
            value={cvv}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
