import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightAddon,
} from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { context } from "../context/SearchContext";
export const SearchBar = () => {
  const { search, setSearch } = useContext(context);

  return (
    <>
      <InputGroup borderRadius={5} size="sm">
        <InputLeftElement
          pointerEvents="none"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          type="text"
          placeholder="Search..."
          border="1px solid #949494"
          w={"300px"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightAddon p={0} border="yellow">
          <Button
            size="sm"
            borderLeftRadius={0}
            borderRightRadius={3.3}
            border="1px solid #949494"
          >
            Search
          </Button>
        </InputRightAddon>
      </InputGroup>
    </>
  );
};
