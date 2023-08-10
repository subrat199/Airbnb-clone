// src/components/PropertyList.js
import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Container,
  Image,
  Input,
  Select,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { context } from "../context/SearchContext";
import Booking from "./Booking";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const { search } = useContext(context);
  const [filteredData, setFilteredData] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const getData = () => {
    fetch("https://airbnb-backend-an91.onrender.com/property")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error));
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    if (search === "") {
      getData();
      return;
    }
    const results = properties.filter((property) =>
      property.title.toLowerCase().includes(search.toLowerCase())
    );
    setProperties(results);
  }, [search]);
  const handleFilter = () => {
    let filteredResults = properties;

    if (locationFilter) {
      filteredResults = filteredResults.filter(
        (property) => property.location === locationFilter
      );
    }

    if (priceFilter) {
      const priceThreshold = parseInt(priceFilter, 10);
      filteredResults = filteredResults.filter(
        (property) => property.price <= priceThreshold
      );
    }

    setFilteredData(filteredResults);
  };
  return (
    <>
      <Container maxW="md" py={8}>
        <VStack spacing={4}>
          <Box borderWidth="1px" borderRadius="md" p={4}>
            <Select
              placeholder="Select location"
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
            >
              <option value="">All Locations</option>
              {/* Assuming locations are unique in your data */}
              {properties.map((property) => (
                <option key={property.id} value={property.location}>
                  {property.location}
                </option>
              ))}
            </Select>
            <Input
              type="number"
              placeholder="Max Price"
              value={priceFilter}
              onChange={(e) => setPriceFilter(e.target.value)}
            />
            <button onClick={handleFilter}>Apply Filters</button>
          </Box>

          { filteredData.map((property) => (
            <Box key={property.id} borderWidth="1px" borderRadius="md" p={4}>
              <Image src={property.image} />
              <Text fontSize="lg" fontWeight="bold">
                {property.title}
              </Text>
              <Text>Location: {property.location}</Text>
              <Text>Price: {property.price}</Text>
              {/* Add more property details as needed */}
            </Box>
          ))}
        </VStack>
      </Container>

      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
        {properties.map((property) => (
          <>
          
          <PropertyCard key={property.id} property={property} />
         
          </>
        
        ))}
      </SimpleGrid>
    </>
  );
};

export default PropertyList;
