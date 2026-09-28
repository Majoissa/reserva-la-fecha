import React, { useState, useRef } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

const FloatingButton = ({ audioSrc, color, bgcolor, iconcolor }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audioSrc));
  const hasInteracted = useRef(false);

  React.useEffect(() => {
    const audio = audioRef.current;
    audio.loop = true;

    const tryPlay = () => {
      if (!hasInteracted.current) {
        audio.play().then(() => {
          setIsPlaying(true);
          hasInteracted.current = true;
          removeListeners();
        }).catch(e => console.log("Autoplay blocked, waiting for interaction"));
      }
    };

    const handleInteraction = () => {
      tryPlay();
    };

    const removeListeners = () => {
      document.removeEventListener('click', handleInteraction);
      document.removeEventListener('scroll', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };

    document.addEventListener('click', handleInteraction, { once: true });
    document.addEventListener('scroll', handleInteraction, { once: true });
    document.addEventListener('touchstart', handleInteraction, { once: true });

    tryPlay();

    return () => {
      removeListeners();
      audio.pause();
    };
  }, []);

  const togglePlayPause = () => {
    hasInteracted.current = true; // Manual control overrides auto
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
