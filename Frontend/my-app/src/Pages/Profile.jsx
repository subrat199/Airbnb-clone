import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [signupData, setSignupData] = useState([]);
  useEffect(() => {
    const fetchSignupData = async () => {
      try {
        const response = await fetch(
          "https://airbnb-backend-an91.onrender.com/users/register"
        );
        if (response.ok) {
          const data = await response.json();
          setSignupData(data);
        } else {
          console.error("Error fetching signup data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchSignupData();
  });
  return (
    <VStack align="start" spacing={4}>
      <Text fontSize="lg" fontWeight="bold">
        Signup Data:
      </Text>
      {signupData.map((user, index) => (
        <Box key={index} borderWidth="1px" borderRadius="md" p={4}>
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
          {/* Add more fields as needed */}
        </Box>
      ))}
    </VStack>
  );
};

export default Profile;
