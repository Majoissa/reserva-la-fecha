import { VStack, Heading, Box, Button, HStack } from "@chakra-ui/react";

const Footer = ({ text }) => {
  return (
    <VStack
      bg={"#eee2d3"}
      width={"100%"}
      height={"auto"}
      px={"2rem"}
      textAlign={"center"}
      py={"4rem"}
    >
      <Heading
        as={"h3"}
        fontFamily={'"Josefin Sans", sans-serif'}
        fontWeight={400}
        size={"md"}
        color={"#194279"}
        maxW={"80%"}
        margin={"auto"}
      >
        {text}
      </Heading>
    </VStack>
  );
};

export default Footer;
