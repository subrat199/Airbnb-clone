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

    fetchSignupData();
  });
  return (
    recentUser && (
      <VStack align="center" spacing={4}>
        <Text fontSize="lg" fontWeight="bold">
          User Profile:
        </Text>
        <Box key={recentUser._id} borderWidth="1px" borderRadius="md" p={4}>
          <Image
            src="https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=200"
            style={{ borderRadius: "50%" }}
          />
          <Text>Name: {recentUser.name}</Text>
          <Text>Email: {recentUser.email}</Text>
        </Box>
        )
      </VStack>
    )
  );
};

export default Profile;
