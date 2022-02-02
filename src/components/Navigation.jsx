import React, { useState, useEffect } from 'react';
import { Text, Box, Stack, Flex, Button } from "@chakra-ui/react";
import { HashLink } from 'react-router-hash-link';
import useHideOnScroll from '../hooks/useHideOnScroll'
import MenuToggle from './MenuToggle'
import Logo from './Logo';
import '../assets/components/Navigation.css'


const Navigation = (props) => {
    const isHidden = useHideOnScroll();
    const [isOpen, setIsOpen] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const changeBackground = () => {
        if (window.scrollY >= 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeBackground()
        window.addEventListener("scroll", changeBackground)
        return () => {
            window.removeEventListener("scroll", changeBackground);
        };
    })

      
    return (
        isHidden ? <div></div> :
        <nav className={navbar ? "navbar" : "navbar-active"}>
            {navbar ? <div className="nav-line"></div> : <div></div>}
            <NavBarContainer {...props}>
                <Logo
                    w="100px"
                    color={["white", "white", "white", "white"]}
                />
                <MenuToggle toggle={toggle} isOpen={isOpen} />
                <MenuLinks isOpen={isOpen} />
            </NavBarContainer>
        </nav>
    );
};

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <HashLink smooth  className="link-text" to={to}>
            <Text fontSize={18} display="block" fontWeight="bold" {...rest}>
                {children}
            </Text>
        </HashLink>
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
                <MenuItem to="#">Home</MenuItem>
                <MenuItem to="#about">About </MenuItem>
                <MenuItem to="#projects">Projects </MenuItem>
                <MenuItem to="#contact" isLast>
                    <Button
                        size="md"
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
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            p={6}
            {...props}
        >
            {children}
        </Flex>
    );
};
      

export default Navigation;