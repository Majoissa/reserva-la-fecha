import { VStack, Heading } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import PresentPopup from "./PresentPopup";

const PresentInfo = ({
  text, 
  text2,
  text3,
  color,
  titleColor,
  textColor,
  cuenta,
  cbu,
  alias,
  banco,
  cuil,
  font,
}) => {
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
          fontFamily={font}
          fontWeight={400}
          size={"md"}
          color={color}
        >
          {text}
        </Heading>
        <ul>
          <li>
          <Heading
          as={"h3"}
          fontFamily={font}
          fontWeight={400}
          size={"sm"}
          color={color}
        >
          {text2}
        </Heading>
        </li>
          <li>
          <Heading
          as={"h3"}
          fontFamily={font}
          fontWeight={400}
          size={"sm"}
          color={color}
        >
          {text3}
        </Heading>
        </li>
        </ul>
        
      </Fade>
      <PresentPopup
        titleColor={titleColor}
        textColor={textColor}
        cuenta={cuenta}
        cbu={cbu}
        alias={alias}
        banco={banco}
        cuil={cuil}
        font={font}
      />
    </VStack>
  );
};

export default PresentInfo;
