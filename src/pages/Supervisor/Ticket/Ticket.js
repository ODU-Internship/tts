/** @jsxImportSource @emotion/react */
import {
  Box, Flex, Heading, Textarea, Text, Stack, Badge, Button,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

const Ticket = () => {
  const { messageID } = useParams();
  return (
    <>
      {' '}
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">
          MAP: Supervisor Dashboard
          {' > '}
          {messageID}
        </Heading>
      </Box>
      <Flex px="10" py="10" flexDirection="column" alignItems="center">
        <Box width="100%" maxW="1200px">
          <Heading size="lg">Sentimental Analysis</Heading>
          <Text mt="1">Verify & update your sentimental analysis here.</Text>
          <Heading size="md" mt="50">Categories:</Heading>
          <Stack direction="row" mt="5">
            <Badge>communication</Badge>
            <Badge colorScheme="green">Success</Badge>
            <Badge colorScheme="red">Removed</Badge>
            <Badge colorScheme="purple">New</Badge>
          </Stack>
          <Heading size="md" mt="7">Prediction: -0.91</Heading>
          <Heading size="md" mt="7">Text:</Heading>
          <Textarea mt="2" minH="300px" />
          <Button mt="3" colorScheme="green" leftIcon={<FaPlay />}>Reanalyse</Button>
        </Box>
      </Flex>
    </>
  );
};

export default Ticket;
