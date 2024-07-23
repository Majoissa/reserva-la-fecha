import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";
import { CiClock2 } from "react-icons/ci";

const CountdownTimer = ({ targetDate, color, font, titlefont }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Box
      textAlign="center"
      py={"150px"}
      px={6}
      bgColor={"white"}
      color={color}
      fontFamily={font}
    >
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight={"bold"} fontFamily={titlefont}>
          Faltan
        </Text>
        <CiClock2 fontSize={"70px"} color={color} />
        <HStack spacing={6}>
          <VStack>
            <Text fontSize="4xl">{timeLeft.days || "0"}</Text>
            <Text fontSize="xl">Días</Text>
          </VStack>
          <VStack>
            <Text fontSize="4xl">{timeLeft.hours || "0"}</Text>
            <Text fontSize="xl">Horas</Text>
          </VStack>
          <VStack>
            <Text fontSize="4xl">{timeLeft.minutes || "0"}</Text>
            <Text fontSize="xl">Minutos</Text>
          </VStack>
          <VStack>
            <Text fontSize="4xl">{timeLeft.seconds || "0"}</Text>
            <Text fontSize="xl">Segundos</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CountdownTimer;
