interface Show {
  id: number;
  title: string;
  date: string;
  price: number;
}

const shows: Show[] = [
  {
    id: 1,
    title: "Show 1",
    date: "2021-10-10",
    price: 20.75,
  },
  {
    id: 2,
    title: "Show 2",
    date: "2021-10-10",
    price: 11.5,
  },
  {
    id: 3,
    title: "Show 3",
    date: "2021-10-10",
    price: 14.6,
  },
  {
    id: 4,
    title: "Show 4",
    date: "2021-10-10",
    price: 37.2,
  },
];

const findAShow = (id: number) => {
  const show = shows.find((show) => show.id === id);
  if (!show) {
    throw new Error(`No show found with ID ${id}`);
  }
  return show;
};

export { shows, findAShow };
export type { Show as ShowType };
