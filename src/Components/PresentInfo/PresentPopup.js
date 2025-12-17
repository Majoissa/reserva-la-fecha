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

const PresentPopup = ({
  titleColor,
  textColor,
  cuenta,
  cbu,
  alias,
  banco,
  cuil,
  font,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        fontFamily={font}
        bg={titleColor}
        color={"white"}
      >
        Ver más
      </Button>

      <Modal size={"sm"} isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            fontFamily={font}
            fontWeight={400}
            size={"lg"}
            color={titleColor}
          >
            Datos Bancarios
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text
              fontFamily={font}
              fontWeight={400}
              size={"lg"}
              color={textColor}
            >
              {cuenta}
            </Text>
            <Text
              fontFamily={font}
              fontWeight={400}
              size={"lg"}
              color={textColor}
            >
              {cbu}
            </Text>
            <Text
              fontFamily={font}
              fontWeight={400}
              size={"lg"}
              color={textColor}
            >
              {alias}
            </Text>
            <Text
              fontFamily={font}
              fontWeight={400}
              size={"lg"}
              color={textColor}
            >
              {banco}
            </Text>
            <Text
              fontFamily={font}
              fontWeight={400}
              size={"lg"}
              color={textColor}
            >
              {cuil}
            </Text>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PresentPopup;
