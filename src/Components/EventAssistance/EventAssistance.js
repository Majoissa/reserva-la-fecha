import { VStack, Heading, Box, Button, HStack } from "@chakra-ui/react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";
import { GiAmpleDress } from "react-icons/gi";
import { MdBoy } from "react-icons/md";

const EventAssistance = ({
  phrase,
  confirm,
  url,
  drescode,
  text,
  mujeres,
  prohibido,
}) => {
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
          <FaRegCalendarAlt color={"#406fa2"} size={"50px"} />
        </Box>
        <Fade cascade direction="left">
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={"#194279"}
          >
            {phrase}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            color={"#406fa2"}
          >
            {confirm}
          </Heading>
        </Fade>
        <a href={url} target="_blank" rel="noreferrer">
          <Button
            bg={"#b4c092"}
            color={"white"}
            fontFamily={'"Josefin Sans", sans-serif'}
            my={"1rem"}
          >
            Confirmar asistencia
          </Button>
        </a>
        <HStack mt={"2rem"} justifyContent={"center"} alignItems={"center"}>
          <GiAmpleDress color={"#406fa2"} size={"50px"} />{" "}
          <MdBoy color={"#406fa2"} size={"70px"} />
        </HStack>
        <Fade cascade direction="left">
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={"#194279"}
          >
            {drescode}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            color={"#406fa2"}
          >
            {text}
          </Heading>
        </Fade>
        <Fade cascade direction="left">
          <Heading
            mt={5}
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={"#194279"}
          >
            {mujeres}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            color={"#406fa2"}
          >
            {prohibido}
          </Heading>
        </Fade>
      </Box>
    </VStack>
  );
};

export default EventAssistance;
