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
} from "@chakra-ui/react";

const PhotoGrid = ({ fotos, bgColor }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = (photo) => {
    setSelectedImage(photo);
    onOpen();
  };

  return (
    <Box bgColor={bgColor} textAlign="center" p={5} py={"50px"}>
      <Text
        fontSize="40px"
        fontWeight="bold"
        mb={5}
        color={"#9ba07e"}
        fontFamily={'"Ms Madi", cursive;'}
      >
        Nosotros
      </Text>
      <SimpleGrid columns={3} spacing={5}>
        {fotos.map((photo, index) => (
          <Box
            key={index}
            border="2px solid white"
            borderRadius="md"
            overflow="hidden"
            onClick={() => handleImageClick(photo)}
            cursor="pointer"
          >
            <Image
              src={photo}
              alt={`Foto ${index + 1}`}
              objectFit={"cover"}
              width="100%"
              height="100%"
            />
          </Box>
        ))}
      </SimpleGrid>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent maxW="80%" bg="transparent" boxShadow="none">
          <ModalBody p={0}>
            <Image src={selectedImage} alt="Selected" borderRadius="md" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PhotoGrid;
