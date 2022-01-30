import React from "react"
import { Box, Text, Link } from "@chakra-ui/react"
 
export default function Logo({to = "/"}, props) {
  return (
    <Box {...props}>
      <Link  className="link-text" href={to}>
        <Text fontSize="xl" fontWeight="bold">
          Alex Torres
        </Text>
      </Link>
      
    </Box>
  );
};