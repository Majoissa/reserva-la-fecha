import { VStack, Heading, Box, Button, HStack } from "@chakra-ui/react";

const Footer = ({ text, bgColor, font, colorFont }) => {
  return (
    <VStack
      bg={bgColor}
      width={"100%"}
      height={"auto"}
      px={"2rem"}
      textAlign={"center"}
      py={"6rem"}
    >
      <Heading
        as={"h3"}
        fontFamily={font}
        fontWeight={400}
        size={"md"}
        color={colorFont}
        maxW={"80%"}
        margin={"auto"}
      >
        {text}
      </Heading>
    </VStack>
  );
};

export default Footer;
