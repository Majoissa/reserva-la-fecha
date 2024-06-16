import { VStack, Text, Image, Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";

const SocialNetwork = ({
  text,
  description,
  insta,
  tags,
  qr,
  img,
  url,
  bgColor,
  titleFont,
  fontColor,
  iconColor,
}) => {
  return (
    <VStack
      bg={bgColor}
      width={"100%"}
      height={"auto"}
      py="8rem"
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
            fontFamily={titleFont}
            fontWeight={400}
            size={"lg"}
            mt={3}
            color={fontColor}
            textTransform={"uppercase"}
          >
            {text}
          </Heading>
          <Text
            fontFamily={titleFont}
            fontWeight={400}
            size={"lg"}
            mt={3}
            color={fontColor}
          >
            {description}
          </Text>
        </Fade>
      </Box>
      <IoLogoInstagram fontSize={"50px"} color={iconColor} />{" "}
      <Fade>
        <Text
          fontFamily={titleFont}
          fontWeight={400}
          size={"lg"}
          mt={3}
          color={fontColor}
        >
          {insta}
        </Text>
        <Text
          fontFamily={titleFont}
          fontWeight={400}
          size={"lg"}
          mt={3}
          color={fontColor}
        >
          {tags}
        </Text>
        <Box maxW={{ base: "80%", md: "40%" }} margin={"auto"}>
          <Text
            fontFamily={titleFont}
            fontWeight={400}
            size={"lg"}
            mt={3}
            color={fontColor}
          >
            {qr}
          </Text>
        </Box>
      </Fade>
      <Image src={img} alt="codigo qr" width={"200px"} />
      <a href={url} target="_blank" rel="noreferrer">
        <Button bg={"#b4c092"} color={"white"}>
          Abrir álbum
        </Button>
      </a>
    </VStack>
  );
};

export default SocialNetwork;
