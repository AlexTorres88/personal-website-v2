import React from "react"
import { Box } from "@chakra-ui/react"
import Close from '@material-ui/icons/Close';
import Menu from '@material-ui/icons/Menu';
 
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <Close /> : <Menu />}
    </Box>
  )
}

export default MenuToggle;