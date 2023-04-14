export const getPictureUrl = (
  showId: number,
  width: number,
  height: number = width
) => `https://picsum.photos/seed/${showId}/${width}/${height}`;
