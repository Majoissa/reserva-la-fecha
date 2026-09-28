import { Box, SimpleGrid, Flex, Image, Text, Button } from "@chakra-ui/react";
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
  titleFont,
  bg,
  title1,
  title2
}) => {
  return (
    <Box
      bg={bg ? bg : "white"}
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
              boxShadow="xl"
              borderRadius="2xl"
              mb={"1rem"}
            >
              <Box ml={-7} mt={-9} mb={5}>
                <FaMapPin color={iconColor} fontSize={"20px"} opacity={0.8} />
              </Box>
              {title1 && <Text fontFamily={titleFont || font} fontSize="2xl" fontWeight="bold" color={textColor} mb={4} textAlign="left" textTransform="uppercase">{title1}</Text>}
              {foto1 && <Image mb={"1rem"} src={foto1} alt="Boda" />}
              <Flex alignItems="flex-start" gap={3} mb={3}>
                <MdOutlineChurch fontSize={"40px"} color={iconColor} opacity={0.8} mt={"2px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  color={textColor}
                  textAlign="left"
                  lineHeight="1.2"
                >
                  {lugar}
                </Text>
              </Flex>
              <Flex alignItems="flex-start" gap={3} mb={3}>
                <FaRegCalendarAlt color={iconColor} fontSize={"20px"} opacity={0.8} mt={"2px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  color={textColor}
                  textAlign="left"
                  lineHeight="1.2"
                >
                  {fecha}
                </Text>
              </Flex>
              <Flex alignItems="flex-start" gap={3} mb={4}>
                <FaRegClock color={iconColor} fontSize={"20px"} opacity={0.8} mt={"2px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  color={textColor}
                  textAlign="left"
                  lineHeight="1.2"
                >
                  {hora}
                </Text>
              </Flex>
            </Box>
          </Fade>
          <a href={ubi1} target="_blank" rel="noreferrer">
            <Button fontFamily={font} bg={iconColor} color={"white"} borderRadius="full" px={8}>
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
              boxShadow="xl"
              borderRadius="2xl"
              mb={"1rem"}
            >
              <Box ml={-7} mt={-9} mb={5}>
                <FaMapPin color={iconColor} fontSize={"20px"} opacity={0.8} />
              </Box>
              {title2 && <Text fontFamily={titleFont || font} fontSize="2xl" fontWeight="bold" color={textColor} mb={4} textAlign="left" textTransform="uppercase">{title2}</Text>}
              {foto2 && <Image mb={"1rem"} src={foto2} alt="Boda" />}
              <Flex alignItems="flex-start" gap={3} mb={3}>
                <FaChampagneGlasses fontSize={"24px"} color={iconColor} opacity={0.8} mt={"2px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  color={textColor}
                  textAlign="left"
                  lineHeight="1.2"
                >
                  {fiesta}
                </Text>
              </Flex>
              <Flex alignItems="flex-start" gap={3} mb={3}>
                <FaRegCalendarAlt color={iconColor} fontSize={"20px"} opacity={0.8} mt={"2px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  color={textColor}
                  textAlign="left"
                  lineHeight="1.2"
                >
                  {fecha}
                </Text>
              </Flex>
              <Flex alignItems="flex-start" gap={3} mb={4}>
                <FaRegClock color={iconColor} fontSize={"20px"} opacity={0.8} mt={"2px"} />
                <Text
                  fontFamily={font}
                  fontWeight={400}
                  size={"lg"}
                  color={textColor}
                  textAlign="left"
                  lineHeight="1.2"
                >
                  {horafiesta}
                </Text>
              </Flex>
            </Box>
          </Fade>
          <a href={ubi2} target="_blank" rel="noreferrer">
            <Button fontFamily={font} bg={iconColor} color={"white"} borderRadius="full" px={8}>
              Ver ubicación
            </Button>
          </a>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default EventLocation;
