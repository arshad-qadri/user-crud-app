import { Box, Flex } from "@chakra-ui/layout";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Flex
        justifyContent="space-around"
        align="center"
        bg="tomato"
        w="100%"
        h="10vh"
      >
        <Box fontSize="1.3rem" fontWeight="bold" color="white">
          <NavLink to="/">Users</NavLink>
        </Box>
        <Box fontSize="1.3rem" fontWeight="bold" color="white">
          <NavLink to="/userlist">User List</NavLink>
        </Box>
      </Flex>
    </>
  );
};

export default Navbar;
