/** @jsxImportSource @emotion/react */
import {
  Box, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex, Heading, Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Messages from './components/Messages/Messages';
import Upload from './components/Upload/Upload';

const Dashboard = () => {
  const name = useSelector(({ repData }) => repData.user.name);
  const cid = useSelector(({ repData }) => repData.user.cid);
  return (
    <Flex direction="column">
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={Link} to="/" replace>MAP</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Representative Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Heading>
      </Box>
      <Flex px="10" py="10" flexDirection="column" alignItems="center">
        <Box mt="7" width="100%" maxW="1200px" mb="7">
          <Heading size="lg">{`Welcome ${name},`}</Heading>
          <Text>{`CustomerCare Executive ID: ${cid}, ${new Date().toLocaleDateString()}`}</Text>
        </Box>
        <Box width="100%" maxW="1200px">
          <Heading size="md" mb="5">
            Add a New Ticket
          </Heading>
          <Upload />
        </Box>
        <Box width="100%" maxW="1200px" mt="10">
          <Heading size="lg">Messages</Heading>
          <Messages />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
