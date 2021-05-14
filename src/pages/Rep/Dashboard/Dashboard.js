/** @jsxImportSource @emotion/react */
import {
  Box,
  Flex,
  Heading,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import Messages from './components/Messages/Messages';
import Upload from './components/Upload/Upload';

const Dashboard = () => {
  const name = useSelector(({ repData }) => repData.user.name);
  const cid = useSelector(({ repData }) => repData.user.cid);
  return (
    <Flex direction="column">
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">
          MAP: Customer Care Executive Dashboard
        </Heading>
      </Box>
      <Flex px="10" py="10" flexDirection="column" alignItems="center">
        <Box mt="7" width="100%" maxW="1200px" mb="7">
          <Heading size="lg">{`Welcome ${name},`}</Heading>
          <Text>{`CustomerCare Exectutive ID: ${cid}, ${new Date().toLocaleDateString()}`}</Text>
        </Box>
        <Box width="100%" maxW="1200px">
          <Heading size="md" mb="5">Add a New Ticket</Heading>
          <Upload />
        </Box>
        <Stack width="100%" maxW="1200px" mt="10">
          <Heading size="md">Upload a CSV File</Heading>
          <Flex flexDirection="column" width="100%" alignItems="center" p="5">
            <Button type="button" px="25" py="10">
              Select a file
            </Button>
            <Heading size="xs" mt="3">Upload Customer Data for Analysis</Heading>
          </Flex>
        </Stack>
        <Box width="100%" maxW="1200px" mt="10">
          <Heading size="md">Messages</Heading>
          <Messages />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
