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
        <Box as={FaMusic} fontSize="60px" color={color} />
        <IconButton
          icon={isPlaying ? <FaPause /> : <FaPlay />}
          onClick={togglePlayPause}
          position="absolute"
          top="-15px"
          left="35px"
          zIndex="1001"
          borderRadius="50%"
          size="md"
          backgroundColor={bgcolor}
          color={iconcolor}
        />
      </Box>
    </Box>
  );
};

export default FloatingButton;
