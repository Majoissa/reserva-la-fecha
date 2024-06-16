import { Box, Heading } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const MainTexts = ({
  title,
  subtitle,
  titleColor,
  subColor,
  titleFont,
  subFont,
}) => {
  return (
    <Box
      width={"100%"}
      height={"100vh"}
      margin={"auto"}
      textAlign={"center"}
      bg={"transparent"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      zIndex={3}
    >
      <Fade cascade direction="down" damping={0.5}>
        <Heading as="h1" fontFamily={titleFont} size={"3xl"} color={titleColor}>
          {title}
        </Heading>
        <Heading
          as={"h2"}
          fontFamily={subFont}
          fontWeight={400}
          textTransform={"uppercase"}
          size={"lg"}
          mt={3}
          color={subColor}
        >
          {subtitle}
        </Heading>
      </Fade>
    </Box>
  );
};

export default MainTexts;
