import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

const CountryDetails = ({ country }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button colorScheme="purple" m="10px 0px" onClick={onOpen}>
        More Details
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{country.name.common}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Native Name : {country.name.common}</Text>
            <Text>Sub Region : {country.subregion}</Text>
            <Text>Languages : </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CountryDetails;
