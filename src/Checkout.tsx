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
  const [paymentFormError, setPaymentFormError] = useState(true);
  const step = 2;

  const handleBillingAddressFormError = () => {
    handleFormChange();
    setBillingAddressFormError(true);
  };
  const handleBillingAddressFormErrorResolved = () => {
    handleFormChange();
    setBillingAddressFormError(false);
  };

  const handlePaymentFormError = () => {
    handleFormChange();
    setPaymentFormError(true);
  };
  const handlePaymentFormErrorResolved = () => {
    handleFormChange();
    setPaymentFormError(false);
  };

  const handleFormChange = () => {
    if (billingAddressFormError || paymentFormError) {
      handleError();
    } else {
      handleErrorResolved();
    }
  };

  const handleError = () => {
    onStepError(step);
  };

  const handleErrorResolved = () => {
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
