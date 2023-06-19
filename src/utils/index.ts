export const getPictureUrl = (showId: number, width: number, height?: number) =>
  `https://picsum.photos/seed/${showId}/${width}/${!!height ? height : width}`;
