import React from "react";
import CountryDetails from "./CountryDetails";
import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

export const CountriesCart = ({ country }) => {
  return (
    <Box>
      <Card maxW="sm">
        <CardBody>
          <Image
            src={country.flags.png}
            alt={country.name.common}
            h="213px"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{country.name.common}</Heading>
            <Text>Population : {country.population}</Text>
            <Text>Region : {country.region}</Text>
            <Text>Capital : {country.capital}</Text>
          </Stack>
          <CountryDetails country={country} />
        </CardBody>
      </Card>
    </Box>
  );
};
