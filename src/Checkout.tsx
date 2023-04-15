import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React, { useState } from "react";
import { BillingAddressForm } from "./BillingAddressForm";
import { PaymentForm } from "./PaymentForm";
import { TicketFees } from "./TicketFees";
import { Container } from "@mui/material";

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
      <TicketFees />
      <BillingAddressForm
        onFormError={handleBillingAddressFormError}
        onFormErrorResolved={handleBillingAddressFormErrorResolved}
      />
    </Container>
  );
};
