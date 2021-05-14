/** @jsxImportSource @emotion/react */
import {
  Box,
  Flex,
  Heading,
  Table,
  Button,
  Thead,
  Tbody,
  Text,
  Tr as BaseTR,
  Th,
  Td,
  TableCaption,
  Stack,
  Badge,
  useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Messages from './components/Messages/Messages';

const Tr = styled(BaseTR)(({ theme }) => {
  const { colors } = theme;
  return {
    ':hover': {
      cursor: 'pointer',
      background: colors.gray[50],
    },
  };
});

const Dashboard = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
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
        <Flex flexDirection="column">
          <Button type="button" px="25" py="10">
            Select a file
          </Button>
          <input type="file" style={{ display: 'none' }} />
          <Box width="100%" maxW={1200} py="5">
            <Heading size="xs">Upload Customer Data for Analysis</Heading>
          </Box>
        </Flex>
        <Box width="100%" maxW="1200px">
          <Heading size="lg">Messages</Heading>
          <Messages />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
