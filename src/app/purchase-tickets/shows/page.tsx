"use client";
import { shows } from "@/data/shows";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Show } from "@/components/Show";

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
      <div className={"my-10 flex flex-col items-center"}>
        <Link href={`/purchase-tickets/show/${selectedShow}`}>
          <Button
            disabled={!selectedShow}
            className={`${
              !!selectedShow
                ? "bg-blue-500 text-white shadow-md transition duration-200"
                : "cursor-not-allowed bg-transparent opacity-20"
            }`}
          >
            Next
          </Button>
        </Link>
      </div>
    </div>
  );
}
