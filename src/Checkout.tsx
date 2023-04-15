import React, { useEffect, useState } from "react";
import { BillingAddressForm } from "./BillingAddressForm";
import { PaymentForm } from "./PaymentForm";
import { TicketFees } from "./TicketFees";
import { Box, Container } from "@mui/material";
import { ShowType } from "./shows";
import { ConfirmationDialog } from "./ConfirmationDialog";

interface Props {
  showId: ShowType["id"];
  quantity: number;
  onStepError: (step: number) => void;
  onStepErrorResolved: () => void;
  confirmationDialogOpen: boolean;
  onConfirmationDialogOpen: () => void;
  onConfirmationDialogClose: () => void;
}

export const Checkout = ({
  showId,
  quantity,
  onStepError,
  onStepErrorResolved,
  confirmationDialogOpen,
  onConfirmationDialogOpen,
  onConfirmationDialogClose,
}: Props) => {
  const [billingAddressFormError, setBillingAddressFormError] = useState(true);
  const [paymentFormError, setPaymentFormError] = useState(true);
  const step = 2;

  useEffect(() => {
    handleFormChange();
  }, [billingAddressFormError, paymentFormError]);

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
        <TicketFees showId={showId} quantity={quantity} />
        <BillingAddressForm
          onFormError={handleBillingAddressFormError}
          onFormErrorResolved={handleBillingAddressFormErrorResolved}
        />
        <PaymentForm
          onFormError={handlePaymentFormError}
          onFormErrorResolved={handlePaymentFormErrorResolved}
        />
      </Box>
      <ConfirmationDialog
        open={confirmationDialogOpen}
        onClose={onConfirmationDialogClose}
      />
    </Container>
  );
};
