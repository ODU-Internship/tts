/* eslint-disable jsx-a11y/anchor-is-valid */
/** @jsxImportSource @emotion/react */
import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Box, Flex, Heading, Text,
} from '@chakra-ui/react';
import Test from './components/Test/Test';
import Analytics from './components/Analytics/Analytics';
import Messages from './components/Messages/Messages';
import Training from './components/Training/Training';

const Home = () => {
  const name = useSelector(({ supervisorData }) => supervisorData.user.name);
  const sid = useSelector(({ supervisorData }) => supervisorData.user.sid);
  return (
    <Box>
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">
          <Breadcrumb>
            <BreadcrumbItem>
              <BreadcrumbLink as={RouterLink} to="/" replace>MAP</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Supervisor Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Heading>
      </Box>
      <Flex px="10" pt="10" pb="20" flexDirection="column" alignItems="center">
        <Box mt="7" width="100%" maxW="1200px" mb="7">
          <Heading size="lg">{`Welcome ${name},`}</Heading>
          <Text>{`Supervisor ID: ${sid}, ${new Date().toLocaleDateString()}`}</Text>
        </Box>
        <Analytics />
        <Messages />
        <Test />
        <Training />
      </Flex>
    </Box>
  );
};

export default Home;
