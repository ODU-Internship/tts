/** @jsxImportSource @emotion/react */

import {
  Badge,
  Button,
  Heading,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Box,
  Text,
  VStack,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Message = ({
  isOpen, onClose, message: {
    type, category, message, company, custName, custDetails,
  },
}) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>{`${custName}`}</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Heading size="sm">{`Customer Detail: ${custDetails}`}</Heading>
        <Box mt="3">
          <Heading size="sm">Categories:</Heading>
          {category?.map((cat) => <Badge key={cat} colorScheme="green" mt="1" me="1">{cat}</Badge>)}
        </Box>
        <Heading size="sm" mt="3">{`Company: ${company}`}</Heading>
        <Heading size="sm" mt="3">{`Service Type: ${type}`}</Heading>
        <Heading size="sm" mt="2">Message:</Heading>
        <Text>{message}</Text>

      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
        <Button variant="ghost">Request Supervisor Enquiry</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

Message.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    category: PropTypes.arrayOf(PropTypes.string).isRequired,
    message: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    custName: PropTypes.string.isRequired,
    custDetails: PropTypes.string.isRequired,
  }),
};

Message.defaultProps = {
  message: {
    type: '',
    category: [],
    message: '',
    company: '',
    _id: '',
    custName: '',
    custDetails: '',

  },
};

export default Message;
