import React, { useState } from "react";
import { ShowType, findAShow } from "./shows";
import { formatCurrency, getPictureUrl } from "./util";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Typography,
} from "@mui/material";

interface Props {
  showId: ShowType["id"];
}

export const PurchaseTickets = ({ showId }: Props) => {
  const photoWidth = 200;
  const show = findAShow(showId);

  if (!show) {
    console.error(`Show with id ${showId} not found`);
    return null;
  }

  const { title, date, price } = show;
  const [quantity, setQuantity] = useState<number>(1);
  const [error, setError] = useState(false);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(event.target.value);

    if (event.target.value === "") {
      setError(true);
      setQuantity(newQuantity);
      return;
    }

    if (newQuantity < 1) {
      setError(true);
      setQuantity(newQuantity);
      return;
    }

    setError(false);
    setQuantity(newQuantity);
  };

  return (
    <Container maxWidth="sm">
      <Typography
        variant="h6"
        sx={{ marginTop: 4, marginBottom: 1, fontWeight: "bold" }}
      >
        Purchase Tickets for {title} on {date}
      </Typography>
      <Card sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          sx={{ width: photoWidth }}
          image={getPictureUrl(showId, photoWidth)}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {date}
          </Typography>
          <Typography variant="h6" color="text.primary">
            {formatCurrency(price)} / ticket
          </Typography>
          <TextField
            required
            id="quantity-input"
            label="Ticket Quanity"
            type="number"
            defaultValue={1}
            inputProps={{ min: 1 }}
            value={quantity}
            onChange={handleQuantityChange}
            variant="outlined"
            margin="normal"
            error={error}
          />
          <Typography>
            Total**: {isNaN(quantity) ? "--" : formatCurrency(price * quantity)}
          </Typography>
          <Typography variant="subtitle2">
            ** This does not include any fees or taxes that may be added at the
            time of purchase.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};
