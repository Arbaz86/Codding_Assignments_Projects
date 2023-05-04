import {
  Box,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navbar } from "../Components/Navbar";

export const Reports = () => {
  const { users } = useSelector((store) => store.AppReducer);

  const [guestCount, setGuestCount] = useState(0);
  const [profCount, setProfCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);

  useEffect(() => {
    for (let i = 0; i < users.length; i++) {
      if (+users.age <= 17 && +users.age >= 13) {
      }
    }
  }, []);

  return (
    <Box>
      <Navbar />
      <Heading m="20px" textAlign="center">
        Reports
      </Heading>
      <Box>
        <TableContainer w="70%" m=" 30px auto" textAlign="center">
          <Table variant="simple">
            <TableCaption>Users Reports</TableCaption>
            <Thead>
              <Tr>
                <Th>Age 13-18</Th>
                <Th>Age 18-25</Th>
                <Th>Age 25+</Th>
                <Th>Guests Count</Th>
                <Th>Professionals Count</Th>
                <Th>Students Count</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
