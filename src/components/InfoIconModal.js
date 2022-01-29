import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    ModalFooter,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import '../assets/WorkExperience/WorkExperience.css'

import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

function InfoIconModal(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <InfoOutlinedIcon className="info" onClick={onOpen}/>
        <Modal isOpen={isOpen} onClose={onClose} size={'xs'}>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader>{props.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <img src={props.img} style={{height: props.height, width: props.width}}/>
                <p>{props.body}</p>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onClose}>Close</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}
export default InfoIconModal;