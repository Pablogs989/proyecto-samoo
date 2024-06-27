import React, { useEffect } from "react";
import {
  Box,
  Image,
  Card,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
  CardHeader,
  SimpleGrid,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { getAllPlaces } from "../../features/place/placeSlice";
import EventsHeader from "../../components/EventsHeader/EventsHeader";

const Halls = () => {
  const { places } = useSelector((state) => state.place);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlaces());
  }, [dispatch]);

  if (!places) {
    return "Cargando";
  }

  if (!Array.isArray(places)) {
    return "Error: Expected an array of places.";
  }

  return (
    <Box className="halls-container">
      <Box>
        <EventsHeader />
      </Box>
      <Box className="background-img">
        <Image src="src/assets/Img/Background-img.png" alt="hall-image" />
      </Box>
      <Box className="cards-container">
        <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(200px, 1fr))">
          {places.map((place) => (
            <Card key={place.id}>
              <CardHeader display="flex" justifyContent="center">
                <Box boxSize="200px" overflow="hidden">
                  <Image
                    src={place.image || "src/assets/Img/Background-img.png"} // Usa una imagen por defecto si no hay imagen en el lugar
                    alt={place.place_name}
                    objectFit="cover"
                    width="100%"
                    height="100%"
                    borderRadius="md"
                  />
                </Box>
              </CardHeader>
              <CardBody>
                <Heading size="md">{place.place_name}</Heading>
                <Text mt={1}>Capacidad para {place.capacity}</Text>
              </CardBody>
              <CardFooter>
                <Button variant="outline" colorScheme="teal" borderRadius="50px">
                  Añadir ponencia
                </Button>
              </CardFooter>
            </Card>
          ))}
                    <Card
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            boxShadow="md"
            p={4}
            maxW="300px"
          >
            <CardHeader display="flex" justifyContent="center">
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxSize="190px"
                bg="teal.100"
                borderRadius="md"
              >
                <AddIcon boxSize={8} color="teal.500" />
              </Box>
            </CardHeader>
            <CardBody textAlign="left">
              <Heading size="md">Añadir sala</Heading>
              <Text mt={1}>
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button variant="outline" colorScheme="teal" borderRadius="50px">
                Añadir Sala
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Halls;
