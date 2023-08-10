import { Box, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
    fetch(`https://airbnb-backend-an91.onrender.com/users/login`)
    .then((res)=>res.json())
    .then(((data)=>{
      console.log(data)
      setData(data)}))
  })
  return (
    
      data.map((da)=>{
        <Box p={4} borderWidth="1px" borderRadius="md">
        <VStack align="start" spacing={2}>
          <Text fontWeight="bold">{da.name}</Text>
          <Text>{da.email}</Text>
        </VStack>
      </Box>
      })
    

  )
}

export default Profile