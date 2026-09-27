import React from "react";
import MainImage from "../Main/MainImage";
import { Box, Heading } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import fondo from "./fondo sofia.jpeg";

const Main = () => {
  const titleColor = "#4A0F61"; // Deep Purple
  const subColor = "#4A0F61"; // Deep Purple
  const titleFont = '"Parisienne", cursive';
  const subFont = '"Raleway", sans-serif';

  return (
    <Box>
      <MainImage src={fondo} scrollable={true} />
      <Box
        width={"100%"}
        height={"100vh"}
        margin={"auto"}
        textAlign={"center"}
        bg={"transparent"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        zIndex={3}
        position="relative"
      >
        <Fade cascade direction="down" damping={0.5}>
          <Heading as="h1" fontFamily={titleFont} size={"3xl"} color={titleColor} mb={6}>
            Sofia & <br /> Benjamin
          </Heading>

          <Heading
            as={"h2"}
            fontFamily={subFont}
            fontWeight={400}
            size={"lg"}
            color={subColor}
          >
            Nos casamos
          </Heading>
        </Fade>
      </Box>
    </Box>
  );
};

export default Main;
