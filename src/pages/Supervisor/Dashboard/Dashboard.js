/** @jsxImportSource @emotion/react */
import { Box, Flex, Heading } from '@chakra-ui/react';
import Analytics from './components/Analytics/Analytics';
import Messages from './components/Messages/Messages';

const Home = () => (
  <Box>
    <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
      <Heading size="lg" color="gray.600">MAP: Supervisor Dashboard</Heading>
    </Box>
    <Flex px="10" py="10" flexDirection="column" alignItems="center">
      <Box width="100%" maxW={1200}>
        <Heading size="lg">Sandbox</Heading>
      </Box>
      <Analytics />
      <Messages />
    </Flex>
  </Box>
);

export default Home;
