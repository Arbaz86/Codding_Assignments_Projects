import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addJobData } from "../Redux/AppReducer/action";
import { ADD_JOB_DATA } from "../Redux/AppReducer/actionTypes";

const initialState = {
  company: "",
  postedAt: "",
  city: "",
  location: "",
  role: "",
  level: "",
  contract: "",
  position: "",
  language: "",
};

export function JobPosting() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const toast = useToast();

  const { company, city, location, role, level, contract, position, language } =
    formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addJobData(formData)).then((res) => {
      if (res.type === ADD_JOB_DATA) {
        toast({
          title: "Job Posted Successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        formData(initialState);
      }
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Job Posting
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="company" isRequired>
                    <FormLabel>Company Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="company"
                      onChange={handleChange}
                      value={company}
                      name="company"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="city" isRequired>
                    <FormLabel>City</FormLabel>
                    <Input
                      type="text"
                      placeholder="city"
                      onChange={handleChange}
                      value={city}
                      name="city"
                    />
                  </FormControl>
                </Box>
              </HStack>

              <HStack>
                <Box>
                  <FormControl id="contract" isRequired>
                    <FormLabel>Contract</FormLabel>
                    <Input
                      type="text"
                      placeholder="full time, part time"
                      onChange={handleChange}
                      value={contract}
                      name="contract"
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="postedAt" isRequired>
                    <FormLabel>Date</FormLabel>
                    <Input
                      type="date"
                      name="postedAt"
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </HStack>

              <FormControl id="location" isRequired>
                <FormLabel>Location</FormLabel>
                <Input
                  type="text"
                  placeholder="location"
                  onChange={handleChange}
                  value={location}
                  name="location"
                />
              </FormControl>

              <FormControl id="role" isRequired>
                <FormLabel>Role</FormLabel>
                <Input
                  type="text"
                  placeholder="Frontend, Backend, FullStack etc"
                  onChange={handleChange}
                  value={role}
                  name="role"
                />
              </FormControl>

              <FormControl id="level" isRequired>
                <FormLabel>Level</FormLabel>
                <Input
                  type="text"
                  placeholder="Junior, Senior etc.."
                  onChange={handleChange}
                  value={level}
                  name="level"
                />
              </FormControl>

              <FormControl id="position" isRequired>
                <FormLabel>Position</FormLabel>
                <Input
                  type="text"
                  placeholder="Backend Developer, Junior Frontend Developer etc.."
                  onChange={handleChange}
                  value={position}
                  name="position"
                />
              </FormControl>

              <FormControl id="language" isRequired>
                <FormLabel>Language </FormLabel>
                <Input
                  type="text"
                  placeholder="Javascript, Java, C, C++ etc...."
                  onChange={handleChange}
                  value={language}
                  name="language"
                />
              </FormControl>

              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
}
