import React, { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, TextField, Box } from "@mui/material";

interface Props {
  onFormError: () => void;
  onFormErrorResolved: () => void;
}

export const BillingAddressForm = ({
  onFormError,
  onFormErrorResolved,
}: Props) => {
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [address1Error, setAddress1Error] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [zipError, setZipError] = useState(false);
  const [countryError, setCountryError] = useState(false);


  const hasErrors =
    firstNameError ||
    lastNameError ||
    address1Error ||
    cityError ||
    zipError ||
    countryError;

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const isEmpty = event.target.value === "";
    setFirstNameError(event.target.value === "");

    if (isEmpty) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = event.target.value === "";
    setLastNameError(isEmpty);

    if (isEmpty) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const handleAddress1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = event.target.value === "";
    setAddress1Error(isEmpty);

    if (isEmpty) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = event.target.value === "";
    setCityError(isEmpty);

    if (isEmpty) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = event.target.value === "";
    setZipError(isEmpty);

    if (isEmpty) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isEmpty = event.target.value === "";
    setCountryError(isEmpty);

    if (isEmpty) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h6" gutterBottom>
        Billing Address
      </Typography>
      <Grid container spacing={3}>
        <Grid xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            error={firstNameError}
            onChange={handleFirstNameChange}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            error={lastNameError}
            onChange={handleLastNameChange}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            error={address1Error}
            onChange={handleAddress1Change}
          />
        </Grid>
        <Grid xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            error={cityError}
            onChange={handleCityChange}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            error={zipError}
            onChange={handleZipChange}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            error={countryError}
            onChange={handleCountryChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
