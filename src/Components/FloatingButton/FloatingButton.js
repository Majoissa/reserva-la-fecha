import React, { useState, useRef } from "react";
import { IconButton, Box } from "@chakra-ui/react";
import { FaPlay, FaPause, FaMusic } from "react-icons/fa";

const FloatingButton = ({ audioSrc, color, bgcolor, iconcolor }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const hasInteracted = useRef(false);

  React.useEffect(() => {
    const newAudio = new Audio(audioSrc);
    newAudio.loop = true;
    setAudio(newAudio);

    const tryPlay = () => {
      if (!hasInteracted.current) {
        newAudio.play().then(() => {
          setIsPlaying(true);
          hasInteracted.current = true;
          removeListeners();
        }).catch(e => console.log("Autoplay blocked", e));
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
      newAudio.pause();
    };
  }, [audioSrc]);

  const togglePlayPause = () => {
    hasInteracted.current = true; 
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.log("Play failed", e));
      }
      setIsPlaying(!isPlaying);
    }
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
