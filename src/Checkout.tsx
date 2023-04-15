import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { BillingAddressForm } from "./BillingAddressForm";
import { PaymentForm } from "./PaymentForm";
import { TicketFees } from "./TicketFees";
import { Box, Container } from "@mui/material";

interface Props {
  onStepError: (step: number) => void;
  onStepErrorResolved: () => void;
}

export const Checkout = ({ onStepError, onStepErrorResolved }: Props) => {
  const [billingAddressFormError, setBillingAddressFormError] = useState(true);
  const [paymentFormError, setPaymentFormError] = useState(false);
  const [error, setError] = useState(false);
  const step = 2;

  const handleBillingAddressFormError = () => {
    handleError();
    setBillingAddressFormError(true);
  };
  const handleBillingAddressFormErrorResolved = () => {
    handleErrorResolved();
    setBillingAddressFormError(false);
  };

  const handlePaymentFormError = () => {
    handleError();
    setPaymentFormError(true);
  };
  const handlePaymentFormErrorResolved = () => {
    handleErrorResolved();
    setPaymentFormError(false);
  };

  const handleError = () => {
    setError(true);
    onStepError(step);
  };

  const handleErrorResolved = () => {
    setError(false);
    onStepErrorResolved();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <TicketFees />
        <BillingAddressForm
          onFormError={handleBillingAddressFormError}
          onFormErrorResolved={handleBillingAddressFormErrorResolved}
        />
        <PaymentForm
          onFormError={handlePaymentFormError}
          onFormErrorResolved={handlePaymentFormErrorResolved}
        />
      </Box>
    </Container>
  );
};
