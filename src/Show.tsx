import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
} from "@mui/material";
import React from "react";
import { ShowType } from "./shows";

interface Props extends ShowType {
  selected: boolean;
  handleSelect: (id: ShowType["id"]) => void;
}

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const Show = ({
  id,
  pictureUrl,
  title,
  date,
  price,
  selected,
  handleSelect,
}: Props) => {
  const cardStyles = {
    marginX: 2,
    backgroundColor: selected ? "#e0e0e0" : undefined,
  };

  return (
    <Card sx={cardStyles}>
      <CardActionArea onClick={() => handleSelect(id)}>
        <CardMedia
          sx={{ height: 400, width: 300 }}
          image={pictureUrl}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {date}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="p">
            {`${currencyFormatter.format(price)}`}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
