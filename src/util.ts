export const getPictureUrl = (
  showId: number,
  width: number,
  height: number = width
) => `https://picsum.photos/seed/${showId}/${width}/${height}`;

export const formatCurrency = (price: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
