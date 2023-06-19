"use client";
import { shows, ShowType } from "@/data/shows";
import { useState } from "react";
import { getPictureUrl } from "@/utils";
import Image from "next/image";
import { useWindowDimensions } from "@/utils/hooks/useWindowDimensions()";

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
  const { width } = useWindowDimensions();
  const isMediumScreen = width > 768;
  const photoWidth = isMediumScreen ? 300 : 200;
  const photoHeight = isMediumScreen ? 400 : 200;
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
