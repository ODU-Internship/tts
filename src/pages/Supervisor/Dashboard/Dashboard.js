/** @jsxImportSource @emotion/react */
import {
  Box, Flex, Heading, Text, Textarea, Button, HStack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Test from '../Test/Test';
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
        <Test />
      </Flex>
    </Box>
  );
};

export default Home;
