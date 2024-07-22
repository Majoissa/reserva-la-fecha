import React from "react";
import MainImage from "../Main/MainImage";
import MainTexts from "../Main/MainTexts";
import { Box } from "@chakra-ui/react";

const Main = () => {
  const background = require("./bg.png");
  return (
    <Box>
      <MainImage src="https://raw.githubusercontent.com/Majoissa/reserva-la-fecha/main/src/Components/MajoYtulio/bg.png" />
      <MainTexts
        title="Majo y Tulio"
        subtitle="¡Nos casamos!"
        titleColor={"#3b5c54"}
        subColor={"#3b5c54"}
        titleFont={'"Ms Madi", cursive;'}
        subFont={'"Montserrat", sans-serif;'}
      />
    </Box>
  );
};

export default Main;
