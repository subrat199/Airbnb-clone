// src/components/PropertyCard.js
import React from 'react';
import { Box, Image, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  const navigate=useNavigate()
    const handleClick=()=>{
    navigate("/booking")
  }
  return (
    <Box borderWidth="1px" borderRadius="md" p={1} boxShadow="md" textAlign={"start"} bg={"lightcoral"}>
      <Image src={property.image} alt={property.title} maxH="auto" objectFit="cover" width={"100%"} />
      <Heading as="h3" size="md" mt={2}>
        {property.title}
      </Heading>
      <Box>
      <Text>{property.location}</Text>
      <Text>{property.description}</Text>
      <Text mt={1}>Price: ${property.price}</Text>
      <Button style={{backgroundColor:"red"}} onClick={handleClick}>BookNow</Button>
      </Box>

    </Box>
  );
};

export default PropertyCard;
