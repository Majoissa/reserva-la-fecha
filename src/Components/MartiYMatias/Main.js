import React from "react";
import MainImage from "../Main/MainImage";
import MainTexts from "../Main/MainTexts";
import { Box } from "@chakra-ui/react";

const Main = () => {
  //test
  const fondo = require("./fondo.jpeg");
  return (
    <Box>
      <MainImage src={fondo} />
      <MainTexts
        title="Martina y Matías"
        subtitle="¡Nos casamos!"
        titleColor={"#af9c8e"}
        subColor={"#d1b8a1"}
        titleFont={'"Parisienne", cursive'}
        subFont={'"Josefin Sans", sans-serif'}
      />
    </Box>
  );
};

export default Main;
