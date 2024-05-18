import { VStack, Heading, Box } from "@chakra-ui/react";
import { GiLinkedRings } from "react-icons/gi";
import { Fade } from "react-awesome-reveal";
//#eee2d3
const Motivation = ({ title, phrase }) => {
  return (
    <VStack bg={"#eee2d3"} width={"100%"} height={"100vh"} px={"2rem"}>
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
          <GiLinkedRings color={"#406fa2"} size={"50px"} />
        </Box>
        <Fade cascade direction="down" damping={0.8}>
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={"#194279"}
          >
            {title}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            color={"#406fa2"}
          >
            {phrase}
          </Heading>
        </Fade>
      </Box>
    </VStack>
  );
};

export default Motivation;
