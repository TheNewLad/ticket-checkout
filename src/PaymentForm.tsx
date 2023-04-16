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
    if (cardNameError || cardNumberError || expDateError || cvvError) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
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
            onChange={(event) => setCardName(event.target.value)}
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
            onChange={(event) => setCardNumber(event.target.value)}
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
            onChange={(event) => setExpDate(event.target.value)}
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
            onChange={(event) => setCvv(event.target.value)}
            value={cvv}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
