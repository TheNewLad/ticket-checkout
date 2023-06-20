import { ShowType } from "@/data/shows";
import { useMediaQuery } from "@/utils/hooks/useMediaQuery";
import Image from "next/image";
import { formatCurrency, getPictureUrl } from "@/utils";

type ShowProps = ShowType & {
  selected: boolean;
  handleSelect: () => void;
};
export const Show = ({
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
      className={"my-6 rounded-md border shadow-md hover:cursor-pointer"}
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
        className={`flex flex-col items-center rounded-b-md py-4 ${
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
