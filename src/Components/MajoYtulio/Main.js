import React from "react";
import MainImage from "../Main/MainImage";
import MainTexts from "../Main/MainTexts";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const background = require("./elemento-diseno-textura-fondo-blanco-blanco_53876-121632.jpg");
  return (
    <Box>
      <MainImage src={background} />
      <MainTexts
        title="Majo y Tulio"
        subtitle="¡Nos casamos!"
        titleColor={"#9ba07e"}
        subColor={"#6b7655"}
        titleFont={'"Ms Madi", cursive;'}
        subFont={'"Montserrat", sans-serif;'}
      />
    </Box>
  );
};

export default Main;
