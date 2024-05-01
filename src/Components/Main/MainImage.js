import { Image, Box } from "@chakra-ui/react";
import React from "react";

const MainImage = ({ src }) => {
  return (
    <Box w={"100vw"}>
      <Image
        src={src}
        alt="Background image"
        objectFit="cover"
        width={"100%"}
        height={"100vh"}
        zIndex={-5}
        position={"fixed"}
      />
    </Box>
  );
};

export default MainImage;
