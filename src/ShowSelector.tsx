import React from "react";
import { Show } from "./Show";
import { Box } from "@mui/material";
import { shows } from "./shows";

interface Props {
  selectedShow: number;
  setSelectedShow: (id: number) => void;
}

export const ShowSelector = ({ selectedShow, setSelectedShow }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        height: "100%",
        width: "100%",
      }}
    >
      {shows.map((show) => (
        <Show
          selected={selectedShow === show.id}
          handleSelect={setSelectedShow}
          key={show.id}
          {...show}
        />
      ))}
    </Box>
  );
};
