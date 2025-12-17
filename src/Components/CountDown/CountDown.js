import React, { useState, useEffect } from "react";
import { Box, Text, VStack, HStack } from "@chakra-ui/react";

const CountdownTimer = ({
  targetDate,
  color,
  font,
  titlefont,
  cardBg,
  cardColor,
  text,
  icon,
  bgColor,
}) => {
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
      bgColor={bgColor ? bgColor : "White"}
      color={color}
      fontFamily={font}
    >
      <VStack spacing={4}>
        <Text fontSize="4xl" fontWeight={"bold"} fontFamily={titlefont}>
          {text}
        </Text>
        {icon}
        <HStack spacing={2} pt={"15px"}>
          <VStack
            maxW={"75px"}
            width={"70px"}
            py={"10px"}
            boxShadow={"1px 1px 4px 1px grey"}
            borderRadius={"10px"}
            bgColor={cardBg}
            color={cardColor}
          >
            <Text fontSize="4xl">{timeLeft.days || "0"}</Text>
            <Text fontSize="lg">Días</Text>
          </VStack>
          <VStack
            maxW={"75px"}
            width={"70px"}
            py={"10px"}
            boxShadow={"1px 1px 4px 1px grey"}
            borderRadius={"10px"}
            bgColor={cardBg}
            color={cardColor}
          >
            <Text fontSize="4xl">{timeLeft.hours || "0"}</Text>
            <Text fontSize="lg">Horas</Text>
          </VStack>
          <VStack
            maxW={"75px"}
            width={"70px"}
            py={"10px"}
            boxShadow={"1px 1px 4px 1px grey"}
            borderRadius={"10px"}
            bgColor={cardBg}
            color={cardColor}
          >
            <Text fontSize="4xl">{timeLeft.minutes || "0"}</Text>
            <Text fontSize="lg">Min.</Text>
          </VStack>
          <VStack
            maxW={"75px"}
            width={"70px"}
            py={"10px"}
            boxShadow={"1px 1px 4px 1px grey"}
            borderRadius={"10px"}
            bgColor={cardBg}
            color={cardColor}
          >
            <Text fontSize="4xl">{timeLeft.seconds || "0"}</Text>
            <Text fontSize="lg">Seg.</Text>
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default CountdownTimer;
