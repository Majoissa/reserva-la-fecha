import React from "react";
import MainImage from "../Main/MainImage";
import MainTexts from "../Main/MainTexts";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const background = require("./fondo.png");
  return (
    <Box>
      <MainImage src={background} />
      <MainTexts
        title="Cele y Fer"
        subtitle="¡Nos casamos!"
        titleColor={"#1B3B5F"}
        subColor={"#1B3B5F"}
        titleFont={'"Ms Madi", cursive;'}
        subFont={'"Montserrat", sans-serif;'}
      />
    </Box>
  );
};

export default Main;
