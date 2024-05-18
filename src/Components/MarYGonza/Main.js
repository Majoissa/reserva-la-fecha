import React from "react";
import MainImage from "../Main/MainImage";
import MainTexts from "../Main/MainTexts";
import { Box } from "@chakra-ui/react";

const Main = () => {
  //test
  const img = require("./background.png");
  return (
    <Box>
      <MainImage
        src={
          "https://raw.githubusercontent.com/Majoissa/reserva-la-fecha/main/src/Components/MarYGonza/background2.png"
        }
      />
      <MainTexts title="Mar y Gonza" subtitle="¡Nos casamos!" />
    </Box>
  );
};

export default Main;
