/** @jsxImportSource @emotion/react */
import {
  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import EData from './components/EData/EData';
import Eupload from './components/Eupload/Eupload';

const Dashboard = () => (
  <Flex direction="column">
    <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
      <Heading size="lg" color="gray.600">
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to="/" replace>MAP</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink>Admin Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
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
