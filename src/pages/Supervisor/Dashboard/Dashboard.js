/** @jsxImportSource @emotion/react */
import {
  Box, Flex, Heading, Text, Stack, Badge, Textarea, Button, VStack, HStack,
} from '@chakra-ui/react';
import { FaPlay } from 'react-icons/fa';
import Analytics from './components/Analytics/Analytics';
import Messages from './components/Messages/Messages';

const Home = () => (
  <Box>
    <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
      <Heading size="lg" color="gray.600">MAP: Supervisor Dashboard</Heading>
    </Box>
    <Flex px="10" py="10" flexDirection="column" alignItems="center">
      <Heading size="lg" mt="7" width="100%" maxW="1200px">Analytics</Heading>
      <Analytics />
      <Messages />
      <Box width="100%" maxW={1200} mt="5">
        <Heading size="lg">Sandbox</Heading>
        <Text mt="1">Test your sentimental analysis algorithm</Text>
        <Heading size="md" mt="7">Prediction: -0.91</Heading>
        <Box>
          <Textarea mt="2" minH="300px" w="100%" maxW="600" display="block">
            fdjlskdfjsdlkjf kdfjsdlkfjdsklfj
            sdkfjlkdsfj lkdfljlkf sdfkljdslf dslkfjlsdkf sdlkfjlsdjf
          </Textarea>
          <Button mt="3" colorScheme="green" leftIcon={<FaPlay />}>Reanalyse</Button>

        </Box>
      </Box>
    </Flex>
  </Box>
);

export default Home;
