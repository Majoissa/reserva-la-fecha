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
  bgColor,
  iconColor,
  titleColor,
  subColor,
  font,
  icon,
}) => {
  return (
    <VStack bg={bgColor} width={"100%"} height={"100vh"} px={"2rem"}>
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
        <Fade cascade direction="left">
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={titleColor}
          >
            {phrase}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            size={"lg"}
            color={subColor}
          >
            {confirm}
          </Heading>
        </Fade>
        <a href={url} target="_blank" rel="noreferrer">
          <Button bg={"#b4c092"} color={"white"} fontFamily={font} my={"1rem"}>
            Confirmar asistencia
          </Button>
        </a>
        <HStack mt={"2rem"} justifyContent={"center"} alignItems={"center"}>
          <GiAmpleDress color={iconColor} size={"50px"} />{" "}
          <MdBoy color={iconColor} size={"70px"} />
        </HStack>
        <Fade cascade direction="left">
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={titleColor}
          >
            {drescode}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            size={"lg"}
            color={subColor}
          >
            {text}
          </Heading>
        </Fade>
        <Fade cascade direction="left">
          <Heading
            mt={5}
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            textTransform={"uppercase"}
            size={"lg"}
            color={titleColor}
          >
            {mujeres}
          </Heading>
          <Heading
            as={"h3"}
            fontFamily={font}
            fontWeight={400}
            size={"lg"}
            color={subColor}
          >
            {prohibido}
          </Heading>
        </Fade>
      </Box>
    </VStack>
  );
};

export default EventAssistance;
