"use client";
import { shows, ShowType } from "@/data/shows";
import { useState } from "react";
import { getPictureUrl } from "@/utils";
import Image from "next/image";
import { useMediaQuery } from "@/utils/hooks/useMediaQuery";

export default function ShowSelector() {
  const [selectedShow, setSelectedShow] = useState<number | null>(null);
  return (
    <div>
      {shows.map(({ id, title, date, price }) => (
        <Show key={id} date={date} id={id} price={price} title={title} />
      ))}
    </div>
  );
}

const Show = ({ id, title, date, price }: ShowType) => {
  const isMediumScreen = useMediaQuery("(min-width: 768px)");
  const photoWidth = 300;
  const photoHeight = isMediumScreen ? 400 : 300;
  return (
    <div>
      <Image
        src={getPictureUrl(id, photoWidth, photoHeight)}
        width={photoWidth}
        height={photoHeight}
        alt={title}
      />
    </div>
  );
};
