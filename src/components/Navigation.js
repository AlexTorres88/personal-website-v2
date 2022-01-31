import React, { useState } from 'react';
import { Link, Text, Box, Stack, Flex, Button } from "@chakra-ui/react";
import MenuToggle from './MenuToggle'
import Logo from './Logo';
import '../assets/components/Navigation.css'

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false)
   
    const toggle = () => setIsOpen(!isOpen)

      
    return (
        <NavBarContainer {...props}>
            <Logo
                w="100px"
                color={["white", "white", "white", "white"]}
            />
            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavBarContainer>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link  className="link-text" href={to}>
            <Text display="block" fontWeight="bold" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const MenuLinks = ({ isOpen }) => {
    return (
        <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
        >
            <Stack
                spacing={8}
                align="center"
                justify={["center", "space-between", "flex-end", "flex-end"]}
                direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]}
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About </MenuItem>
                <MenuItem to="/contact" isLast>
                    <Button
                        size="sm"
                        rounded="md"
                        color={"black"}
                        bg={"white"}
                        _hover={{
                            bg: ["primary.100"],
                            color: "white"
                        }}
                    >
                        Contact
                </Button>
                </MenuItem>
            </Stack>
        </Box>
    );
};

const NavBarContainer = ({ children, ...props }) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={8}
            bg={["black", "black", "black", "black"]}
            color={["white", "white", "white", "white"]}
            {...props}
        >
            {children}
        </Flex>
    );
};
      

export default Navigation;