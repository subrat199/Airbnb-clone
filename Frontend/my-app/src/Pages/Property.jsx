// src/components/Property.js
import React, { useState } from 'react';
import { Box, Button, Input, Select, VStack } from '@chakra-ui/react';

const Property = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const cities = ['New York', 'Los Angeles', 'London', 'Paris', 'Tokyo'];

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handleProperty = async () => {
    try {
      const response = await fetch('https://airbnb-backend-an91.onrender.com/property/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          description,
          price,
          location,
          image,
        }),
      });

      if (response.ok) {
        console.log('Data posted successfully');
      } else {
        console.error('Error posting data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <VStack align="start" spacing={4}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={handleTitleChange}
      />
      <Input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <Input
        type="number"
        placeholder="Price"
        value={price}
        onChange={handlePriceChange}
      />
      <Select
        placeholder="Select location"
        value={location}
        onChange={handleLocationChange}
      >
        {cities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </Select>
      <Input
        type="url"
        placeholder="Image URL"
        value={image}
        onChange={handleImageChange}
      />
      <Button colorScheme="blue" onClick={handleProperty}>Post Data</Button>
    </VStack>
  );
};

export default Property;
