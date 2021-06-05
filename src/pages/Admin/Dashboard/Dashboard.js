/** @jsxImportSource @emotion/react */
import { Box, Flex, Heading } from '@chakra-ui/react';
import EData from './components/EData/EData';
import Eupload from './components/Eupload/Eupload';

const Dashboard = () => (
  <Flex direction="column">
    <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
      <Heading size="lg" color="gray.600">
        MAP: Admin Dashboard
      </Heading>
    </Box>
    <Flex px="10" py="10" flexDirection="column" alignItems="center">
      <Box mt="7" width="100%" maxW="1200px" mb="7">
        <Heading size="lg">Welcome</Heading>
      </Box>
      <Box width="100%" maxW="1200px">
        <Heading size="md" mb="5">
          Add a New Employee
        </Heading>
        <Eupload />
      </Box>
      <Box width="100%" maxW="1200px" py={10}>
        <Heading size="md" mb="5">
          Employee details
        </Heading>
        <EData />
      </Box>
    </Flex>
  </Flex>
);

export default Dashboard;
