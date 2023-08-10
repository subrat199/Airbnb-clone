import { Box, Image, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Profile = () => {
  const [signupData, setSignupData] = useState([]);
  const [recentUser, setRecentUser] = useState(null);
  useEffect(() => {
    const fetchSignupData = async () => {
      try {
        const response = await fetch(
          "https://airbnb-backend-an91.onrender.com/users/profile"
        );
        if (response.ok) {
          const data = await response.json();
          setRecentUser(data);
          setSignupData(data);
        } else {
          console.error("Error fetching signup data");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    const fetchRecentUserData = async () => {
      try {
        const response = await fetch('http://localhost:5050/recent-user');
        if (response.ok) {
          const data = await response.json();
          setRecentUser(data);
        } else {
          console.error('Error fetching recent user data');
        }
      } catch (error) {
        console.error('Error:', error);
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
          <Image
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=200"
            style={{ borderRadius: "50%" }}
          />
          <Text>Name: {user.name}</Text>
          <Text>Email: {user.email}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default Profile;
