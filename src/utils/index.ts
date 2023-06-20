export const getPictureUrl = (showId: number, width: number, height?: number) =>
  `https://picsum.photos/seed/${showId}/${width}/${!!height ? height : width}`;

export const formatCurrency = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
