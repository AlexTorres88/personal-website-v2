import React from "react"
import { Box, Text } from "@chakra-ui/react"
import { HashLink as Link } from "react-router-hash-link";
 
export default function Logo({to = "/"}, props) {
  return (
    <Box {...props}>
      <Link  className="link-text" to={to}>
        <Text fontSize="xl" fontWeight="bold">
          Alex Torres
        </Text>
      </Link>
      
    </Box>
  );
};