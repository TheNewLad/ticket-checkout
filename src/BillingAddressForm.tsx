import React, { useEffect, useState } from "react";
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
  const [stateError, setStateError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");

  useEffect(() => {
    checkFormErrors();

    return () => {
      onFormErrorResolved();
    };
  }, []);

  useEffect(() => {
    checkFormErrors();
  }, [firstName, lastName, address1, city, zip, country, state]);

  const hasErrors =
    firstNameError ||
    lastNameError ||
    address1Error ||
    cityError ||
    zipError ||
    countryError ||
    stateError;

  const hasEmptyRequiredFields = () => {
    const isEmpty = (value: string) => value === "";
    return (
      isEmpty(firstName) ||
      isEmpty(lastName) ||
      isEmpty(address1) ||
      isEmpty(city) ||
      isEmpty(zip) ||
      isEmpty(country) ||
      isEmpty(state)
    );
  };

  const checkFormErrors = () => {
    if (hasEmptyRequiredFields() || hasErrors) {
      onFormError();
    } else {
      onFormErrorResolved();
    }
  };

  const handleFirstNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setFirstNameError(isEmpty);
    setFirstName(value);
  };

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setLastNameError(isEmpty);
    setLastName(value);
  };

  const handleAddress1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setAddress1Error(isEmpty);
    setAddress1(value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setCityError(isEmpty);
    setCity(value);
  };

  const handleAddress2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAddress2(value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setStateError(isEmpty);
    setState(value);
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isNotFiveDigits = !/^\d{5}$/.test(value);
    setZipError(isNotFiveDigits || value === "");
    setZip(value);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const isEmpty = value === "";
    setCountryError(isEmpty);
    setCountry(value);
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
            onChange={handleLastNameChange}
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
            onChange={handleAddress1Change}
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
            onChange={handleAddress2Change}
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
            onChange={handleCityChange}
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
            onChange={handleStateChange}
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
            onChange={handleZipChange}
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
            onChange={handleCountryChange}
            value={country}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
