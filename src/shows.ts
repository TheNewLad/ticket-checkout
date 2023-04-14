interface Show {
    id: number;
    pictureUrl: string;
    title: string;
    date: string;
    price: number;
}

const shows: Show[] = [
    {
      id: 1,
      pictureUrl: "https://picsum.photos/seed/1/300/400",
      title: "Show 1",
      date: "2021-10-10",
      price: 20.75,
    },
    {
      id: 2,
      pictureUrl: "https://picsum.photos/seed/2/300/400",
      title: "Show 2",
      date: "2021-10-10",
      price: 11.5,
    },
    {
      id: 3,
      pictureUrl: "https://picsum.photos/seed/3/300/400",
      title: "Show 3",
      date: "2021-10-10",
      price: 14.6,
    },
    {
      id: 4,
      pictureUrl: "https://picsum.photos/seed/4/300/400",
      title: "Show 4",
      date: "2021-10-10",
      price: 37.2,
    },
  ];

export { shows };
export type { Show as ShowType};
