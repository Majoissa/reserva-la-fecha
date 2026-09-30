import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
  IconButton,
  Flex
} from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight, FaHeart } from "react-icons/fa";

const PhotoGrid = ({ fotos, bgColor, fontFamily, textColor }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    onOpen();
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? fotos.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev === fotos.length - 1 ? 0 : prev + 1));
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) handleNext();
    if (distance < -minSwipeDistance) handlePrev();
  };

  return (
    <Box bgColor={bgColor} textAlign="center" p={5} py={"50px"}>
      <Text
        fontSize="40px"
        fontWeight="bold"
        mb={2}
        color={textColor ? textColor : "#9ba07e"}
        fontFamily={fontFamily ? fontFamily : '"Ms Madi", cursive;'}
      >
        Nosotros
      </Text>
      <Box mb={10} display="flex" justifyContent="center">
        <FaHeart color={textColor || "#8C2155"} size="16px" opacity={0.6} />
      </Box>
      <Flex wrap="wrap" justify="center" p={{ base: 2, md: 10 }} pb={{ base: 10, md: 20 }}>

        {fotos.map((photo, index) => (
          <Box
            key={index}
            w={{ base: "30%", md: "25%" }}
            m={{ base: "-10px", md: ["-25px", "-15px", "-35px", "-20px"][index % 4] }}
            bg="white"
            p={{ base: "5px", md: "10px" }}
            pb={{ base: "20px", md: "35px" }}
            boxShadow="md"
            borderRadius="sm"
            transform={`rotate(${[-4, 7, -6, 8, -5, 4, -8, 6][index % 8]}deg)`}
            _hover={{ transform: "scale(1.1)", zIndex: 10, boxShadow: "xl" }}
            transition="all 0.3s ease"
            onClick={() => handleImageClick(index)}
            cursor="pointer"
            position="relative"
            zIndex={1}
          >
            <Image
              src={photo}
              alt={`Foto ${index + 1}`}
              objectFit={"cover"}
              width="100%"
              height="100%"
              aspectRatio={4/5}
              borderRadius="none"
            />
          </Box>
        ))}
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
        <ModalOverlay />
        <ModalContent maxW="90%" bg="transparent" boxShadow="none" position="relative">
          <ModalBody 
            p={0} 
            display="flex" 
            alignItems="center" 
            justifyContent="center"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {currentIndex !== null && (
              <Flex position="relative" alignItems="center" justifyContent="center">
                <IconButton
                  icon={<FaChevronLeft />}
                  position="absolute"
                  left="-4"
                  zIndex={2}
                  onClick={handlePrev}
                  borderRadius="full"
                  bg="whiteAlpha.800"
                  _hover={{ bg: "white" }}
                  aria-label="Previous image"
                />
                
                <Image 
                  src={fotos[currentIndex]} 
                  alt="Selected" 
                  borderRadius="md" 
                  maxH="80vh"
                  objectFit="contain"
                />
                
                <IconButton
                  icon={<FaChevronRight />}
                  position="absolute"
                  right="-4"
                  zIndex={2}
                  onClick={handleNext}
                  borderRadius="full"
                  bg="whiteAlpha.800"
                  _hover={{ bg: "white" }}
                  aria-label="Next image"
                />
              </Flex>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PhotoGrid;
