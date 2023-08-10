import React, { useContext } from "react";
import { MdSettings } from "react-icons/md";

import { Link as ReactLink } from "react-router-dom";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { SearchBar } from "../Pages/SearchBar";
function Example() {
  return <Icon as={MdSettings} />;
}
export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("black", "gray.800")}
        color={useColorModeValue("white", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <ReactLink to="/">
            <img
              src="https://www.pngkey.com/png/detail/61-615809_logo-logo-logo-restaurant-and-hotel-logo.png"
              alt=""
              width={"100px"}
              height={"100px"}
              border={"black"}
            />
          </ReactLink>
        </Flex>
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-start"}
          direction={"row"}
          spacing={6}
        >
          
            <SearchBar />
         
          <ReactLink to="/profile">
            <Text
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Profile
            </Text>
          </ReactLink>
          <ReactLink to="/property">
            <Text
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Property
            </Text>
          </ReactLink>
          <ReactLink to="/booking">
            <Text
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Booking
            </Text>
          </ReactLink>
          <ReactLink to="/login">
            <Text
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Login
            </Text>
          </ReactLink>
          <ReactLink to="/signup">
            <Text
              as={"a"}
              fontSize={"sm"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
            >
              Signup
            </Text>
          </ReactLink>
        </Stack>
      </Flex>
      <Collapse in={isOpen} animateOpacity></Collapse>
    </Box>
  );
}
const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");
  return (
    <Stack direction={"row"} spacing={4}>
      <Box>
        <Popover trigger={"hover"} placement={"bottom-start"}>
          <PopoverTrigger>
            <Link
              p={2}
              fontSize={"sm"}
              fontWeight={500}
              color={linkColor}
              _hover={{
                textDecoration: "none",
                color: linkHoverColor,
              }}
            ></Link>
          </PopoverTrigger>
          <PopoverContent
            border={0}
            boxShadow={"xl"}
            bg={popoverContentBgColor}
            p={4}
            rounded={"xl"}
            minW={"sm"}
          >
            <Stack></Stack>
          </PopoverContent>
        </Popover>
      </Box>
    </Stack>
  );
};
