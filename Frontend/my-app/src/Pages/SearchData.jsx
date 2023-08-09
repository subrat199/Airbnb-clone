import { SimpleGrid } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import PropertyCard from './PropertyCard';

const SearchData = () => {
    const [properties, setProperties] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5050/property')
          .then(response => response.json())
          .then(data => setProperties(data))
          .catch(error => console.error('Error fetching data:', error));
      }, []);
      useEffect(() => {
        const results = properties.filter(property =>
          property.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
      }, [searchTerm, properties]);
  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={4}>
    {searchResults.map(property => (
      <PropertyCard key={property.id} property={property} />
    ))}
  </SimpleGrid>
  )
}

export default SearchData