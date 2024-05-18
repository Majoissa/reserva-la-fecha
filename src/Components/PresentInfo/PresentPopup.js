import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";

const PresentPopup = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        fontFamily={'"Josefin Sans", sans-serif'}
        bg={"#b4c092"}
        color={"white"}
      >
        Ver más
      </Button>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontFamily={'"Josefin Sans", sans-serif'}
            fontWeight={400}
            size={"lg"}
            color={"#194279"}
          >
            Datos Bancarios
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontFamily={'"Josefin Sans", sans-serif'}
              fontWeight={400}
              size={"lg"}
              color={"#406fa2"}
            >
              CTA: 4135920-7 089-3
            </Text>
            <Text
              fontFamily={'"Josefin Sans", sans-serif'}
              fontWeight={400}
              size={"lg"}
              color={"#406fa2"}
            >
              CBU: 0070089430004135920733
            </Text>
            <Text
              fontFamily={'"Josefin Sans", sans-serif'}
              fontWeight={400}
              size={"lg"}
              color={"#406fa2"}
            >
              Alias: MARYGON.2024
            </Text>
            <Text
              fontFamily={'"Josefin Sans", sans-serif'}
              fontWeight={400}
              size={"lg"}
              color={"#406fa2"}
            >
              Banco Galicia
            </Text>
            <Text
              fontFamily={'"Josefin Sans", sans-serif'}
              fontWeight={400}
              size={"lg"}
              color={"#406fa2"}
            >
              CUIL: 20366679384
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PresentPopup;
