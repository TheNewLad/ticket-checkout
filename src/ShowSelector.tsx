import React from "react";
import { Show } from "./Show";
import { Box } from "@mui/material";
import { shows } from "./shows";

interface Props {
  selectedShow: number;
  onShowSelect: (id: number) => void;
}

export const ShowSelector = ({ selectedShow, onShowSelect }: Props) => {
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
          handleSelect={onShowSelect}
          key={show.id}
          {...show}
        />
      ))}
    </Box>
  );
};
