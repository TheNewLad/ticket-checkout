import Grid from "@mui/material/Unstable_Grid2/Grid2";
import React from "react";
import { BillingAddressForm } from "./BillingAddressForm";
import { PaymentForm } from "./PaymentForm";
import { TicketFees } from "./TicketFees";

export const Checkout = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6}>
        <BillingAddressForm />
        <PaymentForm />
      </Grid>
      <Grid xs={12} sm={6}>
        <TicketFees />
      </Grid>
    </Grid>
  );
};
