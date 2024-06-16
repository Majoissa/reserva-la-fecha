import { VStack, Heading, Box } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
//#eee2d3
const Motivation = ({
  title,
  phrase,
  bgcolor,
  titleColor,
  praseColor,
  font,
  icon,
}) => {
  return (
    <VStack bg={bgcolor} width={"100%"} height={"100vh"} px={"2rem"}>
      <Box
        textAlign={"center"}
        maxW={{ base: "100%", sm: "70%", md: "40%" }}
        margin={"auto"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"2rem"}
        >
          {icon}
        </Box>
        <Fade cascade direction="down" damping={0.8}>
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={titleColor}
          >
            {title}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            size={"lg"}
            color={praseColor}
          >
            {phrase}
          </Heading>
        </Fade>
      </Box>
    </VStack>
  );
};

export default Motivation;
