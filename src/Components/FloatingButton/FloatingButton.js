import React, { useState, useRef } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

const FloatingButton = ({ audioSrc, color, bgcolor, iconcolor }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioSrc));

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <Box position="fixed" bottom="40px" right="40px" zIndex="1000">
      <Box position="relative">
        <Box
          as={FaMusic}
          fontSize={{ base: "40px", md: "60px" }}
          color={color}
        />
        <IconButton
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={togglePlayPause}
          position="absolute"
          top="-15px"
          left={{ base: "25px", md: "35px" }}
          zIndex="1001"
          borderRadius="100%"
          fontSize={{ base: "sm", md: "md" }}
          backgroundColor={bgcolor}
          color={iconcolor}
        />
      </Box>
    </Box>
  );
};

export default FloatingButton;
