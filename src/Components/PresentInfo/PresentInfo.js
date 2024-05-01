import { VStack, Heading } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import PresentPopup from "./PresentPopup";

const PresentInfo = ({ text }) => {
  return (
    <VStack
      width={{ base: "70%", md: "35%" }}
      height={"100vh"}
      margin={"auto"}
      textAlign={"center"}
      bg={"transparent"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={4}
    >
      <Fade cascade direction="down" damping={0.5}>
        <Heading
          as={"h2"}
          fontFamily={'"Josefin Sans", sans-serif'}
          fontWeight={400}
          size={"lg"}
          color={"#44131b"}
        >
          {text}
        </Heading>
      </Fade>
      <PresentPopup />
    </VStack>
  );
};

export default PresentInfo;
