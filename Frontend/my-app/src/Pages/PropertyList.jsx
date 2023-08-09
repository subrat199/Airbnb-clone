// src/components/PropertyList.js
import React, { useState, useEffect, useContext } from "react";
import { SimpleGrid } from "@chakra-ui/react";
import PropertyCard from "./PropertyCard";
import { context } from "../context/SearchContext";

const PropertyList = () => {
  const [properties, setProperties] = useState([]);
  const { search } = useContext(context);
  console.log(search)
  useEffect(() => {
    fetch("http://localhost:5050/property")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  useEffect(() => {
    const results = properties.filter(property =>
      property.title.toLowerCase().includes(search.toLowerCase())
    );
    setProperties(results);
  }, [search]);

  return (
    <>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default PropertyList;
