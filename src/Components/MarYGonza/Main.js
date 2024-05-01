import React from "react";
import MainImage from "../Main/MainImage";
import MainTexts from "../Main/MainTexts";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const img = require("./background.png");
  return (
    <Box>
      <MainImage src={img} />
      <MainTexts title="Mar y Gonza" subtitle="¡Nos casamos!" />
    </Box>
  );
};

export default Main;
