import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserData } from "../Redux/action";

export const ProfileEdit = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      id,
      fullName,
      email,
      password,
    };

    dispatch(updateUserData(payload));
  };

  return (
    <Box>
      <Button variant="solid" colorScheme="green" onClick={onOpen}>
        Edit Profile
      </Button>
      <Button ml={4} ref={finalRef}></Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update{id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  ref={initialRef}
                  placeholder="full name"
                  onChange={(e) => setFullName(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>email</FormLabel>
                <Input
                  type="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>email</FormLabel>
                <Input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              <Button mt="10px" type="submit" colorScheme="blue" mr={3}>
                Update
              </Button>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
