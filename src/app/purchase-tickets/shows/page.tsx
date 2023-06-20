"use client";
import { shows, ShowType } from "@/data/shows";
import { useState } from "react";
import { formatCurrency, getPictureUrl } from "@/utils";
import Image from "next/image";
import { useMediaQuery } from "@/utils/hooks/useMediaQuery";

export default function ShowSelector() {
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  return (
    <div>
      {shows.map(({ id, title, date, price }) => (
        <Show
          key={id}
          date={date}
          id={id}
          price={price}
          title={title}
          selected={selectedShow === id}
          handleSelect={() => setSelectedShow(id)}
        />
      ))}
    </div>
  );
}

type ShowProps = ShowType & {
  selected: boolean;
  handleSelect: () => void;
};
const Show = ({
  id,
  title,
  date,
  price,
  selected,
  handleSelect,
}: ShowProps) => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const photoWidth = 300;
  const photoHeight = isMediumScreen ? 400 : 300;
  return (
    <div
      className={"my-6 drop-shadow-sm hover:cursor-pointer"}
      onClick={handleSelect}
    >
      <Image
        src={getPictureUrl(id, photoWidth, photoHeight)}
        width={photoWidth}
        height={photoHeight}
        alt={title}
        className={"rounded-t-md"}
      />
      <div
        className={`flex flex-col items-center rounded-b-md border py-4 ${
          selected ? "bg-blue-500 text-white" : ""
        }`}
      >
        <h2 className={"text-2xl"}>{title}</h2>
        <p>{date}</p>
        <p className={"font-bold"}>{formatCurrency(price)}</p>
      </div>
    </div>
  );
};
