import React from "react";
import { ShowType, findAShow } from "./shows";
import { Box, Paper, Typography } from "@mui/material";
import { formatCurrency } from "./util";

interface Props {
  showId: ShowType["id"];
  quantity: number;
}

export const TicketFees = ({ showId, quantity }: Props) => {
  const { title, date, price } = findAShow(showId);
  const ticketSubTotal = price * quantity;
  const serviceFeePercentage = 0.18;
  const serviceFee = price * serviceFeePercentage;
  const serviceFeeTotal = serviceFee * quantity;
  const processingFee = 2.95;
  const total = ticketSubTotal + serviceFeeTotal + processingFee;
  return (
    <Paper elevation={1}>
      <Box
        sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5">Total:</Typography>
          <Typography variant="h5">{formatCurrency(total)}</Typography>
        </Box>
        <Typography variant="h6">Tickets</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">
            {title} Tickets on {date}: {formatCurrency(price)} x {quantity}
          </Typography>
          <Typography variant="subtitle1">
            {formatCurrency(ticketSubTotal)}
          </Typography>
        </Box>
        <Typography variant="h6">Fees</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">
            Service Fee: {formatCurrency(serviceFee)} x {quantity}
          </Typography>
          <Typography variant="subtitle1">
            {formatCurrency(serviceFeeTotal)}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="subtitle1">Processing Fee:</Typography>
          <Typography variant="subtitle1">
            {formatCurrency(processingFee)}
          </Typography>
        </Box>
        <Typography variant="subtitle2" sx={{ marginTop: 3 }}>
          All Sales Final - No Refunds
        </Typography>
      </Box>
    </Paper>
  );
};
