import { VStack, Text, Image, Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

const SocialNetwork = ({ text, description, insta, tags, qr, img, url }) => {
  return (
    <VStack
      bg={"#e9e9e9"}
      width={"100%"}
      height={"100vh"}
      margin={"auto"}
      textAlign={"center"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box maxW={{ base: "80%", md: "40%" }}>
        <Fade>
          <Heading
            as={"h4"}
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            mt={3}
            color={"#975468"}
            textTransform={"uppercase"}
          >
            {text}
          </Heading>
          <Text
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            mt={3}
            color={"#44131b"}
          >
            {description}
          </Text>
        </Fade>
      </Box>
      <IoLogoInstagram fontSize={"50px"} color={"#975468"} />{" "}
      <Fade>
        <Text
          fontFamily={'"Josefin Sans", sans-serif'}
          fontWeight={400}
          size={"lg"}
          mt={3}
          color={"#44131b"}
        >
          {insta}
        </Text>
        <Text
          fontFamily={'"Josefin Sans", sans-serif'}
          fontWeight={400}
          size={"lg"}
          mt={3}
          color={"#44131b"}
        >
          {tags}
        </Text>
        <Box maxW={{ base: "80%", md: "40%" }} margin={"auto"}>
          <Text
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            mt={3}
            color={"#44131b"}
          >
            {qr}
          </Text>
        </Box>
      </Fade>
      <Image src={img} alt="codigo qr" width={"200px"} />
      <a href={url} target="_blank" rel="noreferrer">
        <Button colorScheme="green">Abrir álbum</Button>
      </a>
    </VStack>
  );
};

export default SocialNetwork;
