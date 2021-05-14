/** @jsxImportSource @emotion/react */
import {
  Box, Flex, Heading, Text, Textarea, Button, HStack,
} from '@chakra-ui/react';
import { FaUpload, FaPlay } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Analytics from './components/Analytics/Analytics';
import Messages from './components/Messages/Messages';

const Home = () => {
  const name = useSelector(({ supervisorData }) => supervisorData.user.name);
  const sid = useSelector(({ supervisorData }) => supervisorData.user.sid);
  return (
    <Box>
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">MAP: Supervisor Dashboard</Heading>
      </Box>
      <Flex px="10" py="10" flexDirection="column" alignItems="center">
        <Box mt="7" width="100%" maxW="1200px" mb="7">
          <Heading size="lg">{`Welcome ${name},`}</Heading>
          <Text>{`Supervisor ID: ${sid}, ${new Date().toLocaleDateString()}`}</Text>
        </Box>

        <Analytics />
        <Messages />
        <Box width="100%" maxW={1200} mt="5">
          <Heading size="lg">Sandbox</Heading>
          <Text mt="1">Test your sentimental analysis algorithm</Text>
          <Heading size="md" mt="7">Prediction: -0.91</Heading>
          <Box>
            <Textarea mt="2" minH="300px" w="100%" display="block" placeholder="Enter text to analyse" />
            <HStack mt="3" w="100%">
              <Button colorScheme="green" leftIcon={<FaPlay />}>Reanalyse</Button>
              <Text>or</Text>
              <Button leftIcon={<FaUpload />}>Upload CSV</Button>
            </HStack>
          </Box>
          <Box />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
