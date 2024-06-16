import { Box, SimpleGrid, HStack, Image, Text, Button } from "@chakra-ui/react";
import React from "react";
import { FaMapPin } from "react-icons/fa6";
import { MdOutlineChurch } from "react-icons/md";
import { FaRegCalendarAlt, FaRegClock } from "react-icons/fa";
import { FaChampagneGlasses } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";

const EventLocation = ({
  lugar,
  fecha,
  hora,
  foto1,
  foto2,
  fiesta,
  horafiesta,
  ubi1,
  ubi2,
  iconColor,
  textColor,
  font,
}) => {
  return (
    <Box
      bg={"#e9e9e9"}
      width={"100%"}
      height={"auto"}
      py={"8rem"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Fade cascade damping={0.5} direction="left">
            <Box
              bg={"white"}
              width={"18rem"}
              px={"2rem"}
              pt={"2rem"}
              pb={"1rem"}
              boxShadow={"1px 1px 10px 0 grey"}
              mb={"1rem"}
            >
              <Box ml={-7} mt={-9} mb={5}>
                <FaMapPin color={iconColor} fontSize={"25px"} />
              </Box>
              <Image mb={"1rem"} src={foto1} alt="Mar y Gonza" />
              <HStack>
                <MdOutlineChurch fontSize={"45px"} color={iconColor} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  mt={3}
                  color={textColor}
                >
                  {lugar}
                </Text>
              </HStack>
              <HStack>
                <FaRegCalendarAlt color={iconColor} fontSize={"25px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  mt={3}
                  color={textColor}
                >
                  {fecha}
                </Text>
              </HStack>
              <HStack>
                <FaRegClock color={iconColor} fontSize={"25px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  mt={3}
                  color={textColor}
                >
                  {hora}
                </Text>
              </HStack>
            </Box>
          </Fade>
          <a href={ubi1} target="_blank" rel="noreferrer">
            <Button fontFamily={font} bg={"#b4c092"} color={"white"}>
              Ver ubicación
            </Button>
          </a>
        </Box>
        <Box>
          <Fade cascade damping={0.5} direction="left">
            <Box
              bg={"white"}
              width={"18rem"}
              px={"2rem"}
              pt={"2rem"}
              pb={"1rem"}
              boxShadow={"1px 1px 10px 0 grey"}
              mb={"1rem"}
            >
              <Box ml={-7} mt={-9} mb={5}>
                <FaMapPin color={iconColor} fontSize={"25px"} />
              </Box>
              <Image mb={"1rem"} src={foto2} alt="Mar y Gonza" />
              <HStack>
                <FaChampagneGlasses fontSize={"28px"} color={iconColor} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  mt={3}
                  color={textColor}
                >
                  {fiesta}
                </Text>
              </HStack>
              <HStack>
                <FaRegCalendarAlt color={iconColor} fontSize={"25px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  mt={3}
                  color={textColor}
                >
                  {fecha}
                </Text>
              </HStack>
              <HStack>
                <FaRegClock color={iconColor} fontSize={"25px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  mt={3}
                  color={textColor}
                >
                  {horafiesta}
                </Text>
              </HStack>
            </Box>
          </Fade>
          <a href={ubi2} target="_blank" rel="noreferrer">
            <Button fontFamily={font} bg={"#b4c092"} color={"white"}>
              Ver ubicación
            </Button>
          </a>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default EventLocation;
