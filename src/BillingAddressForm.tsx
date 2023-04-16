import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Typography, TextField, Box } from "@mui/material";
import { useFormInput } from "./hooks/useFormInput";

interface Props {
  onFormError: () => void;
  onFormErrorResolved: () => void;
}

export const BillingAddressForm = ({
  onFormError,
  onFormErrorResolved,
}: Props) => {
  const fiveDigitZipRegex = /^\d{5}$/;
  const [firstName, setFirstName, firstNameError] = useFormInput(true);
  const [lastName, setLastName, lastNameError] = useFormInput(true);
  const [address1, setAddress1, address1Error] = useFormInput(true);
  const [address2, setAddress2] = useFormInput();
  const [city, setCity, cityError] = useFormInput(true);
  const [zip, setZip, zipError] = useFormInput(true, "", fiveDigitZipRegex);
  const [country, setCountry, countryError] = useFormInput(true);
  const [state, setState, stateError] = useFormInput(true);

  useEffect(() => {
    checkFormErrors();
  }, [firstName, lastName, address1, city, zip, country, state]);

  const checkFormErrors = () => {
    if (
      firstNameError ||
      lastNameError ||
      address1Error ||
      cityError ||
      zipError ||
      countryError ||
      stateError
    ) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom>
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
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
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
            onChange={(event) => setLastName(event.target.value)}
            value={lastName}
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
            onChange={(event) => setAddress1(event.target.value)}
            value={address1}
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
            onChange={(event) => setAddress2(event.target.value)}
            value={address2}
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
            onChange={(event) => setCity(event.target.value)}
            value={city}
          />
        </Grid>
        <Grid xs={12} sm={6}>
          <TextField
            required
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            error={stateError}
            onChange={(event) => setState(event.target.value)}
            value={state}
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
            onChange={(event) => setZip(event.target.value)}
            value={zip}
            helperText={zipError ? "Zip code must be 5 digits" : ""}
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
            onChange={(event) => setCountry(event.target.value)}
            value={country}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
