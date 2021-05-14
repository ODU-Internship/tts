/** @jsxImportSource @emotion/react */
import {
  Box,
  Flex,
  Heading,
  Table,
  Button,
  Thead,
  Tbody,
  Tr as BaseTR,
  Th,
  Td,
  TableCaption,
  Stack,
  Badge,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useHistory, useRouteMatch } from 'react-router-dom';

const Tr = styled(BaseTR)(({ theme }) => {
  const { colors } = theme;
  return {
    ':hover': {
      cursor: 'pointer',
      background: colors.gray[50],
    },
  };
});

const Messages = () => {
  const history = useHistory();
  const { path } = useRouteMatch();
  return (
    <Flex direction="column">
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">
          MAP: Customer Care Executive Dashboard
        </Heading>
      </Box>
      <Flex px="10" py="10" flexDirection="column" alignItems="center">
        <Flex flexDirection="column">
          <Button type="button" px="25" py="10">
            Select a file
          </Button>
          <input type="file" style={{ display: 'none' }} />
          <Box width="100%" maxW={1200} py="5">
            <Heading size="xs">Upload Customer Data for Analysis</Heading>
          </Box>
        </Flex>

        <Box maxW="1200px" width="100%" mt="5" px="10" justifyContent="center">
          <Heading size="lg">Uploaded Data</Heading>
          <Box overflow="auto">
            <Table variant="simple" mt="6" width="100%">
              <TableCaption>Recent uploaded data</TableCaption>
              <Thead>
                <BaseTR>
                  <Th>Category</Th>
                  <Th>Message</Th>
                  <Th>Result</Th>
                  <Th isNumeric>Prediction</Th>
                </BaseTR>
              </Thead>
              <Tbody>
                <Tr onClick={() => history.push(`${path}/djlskf`)}>
                  <Td>Email</Td>
                  <Td>Welcome to map communication.....</Td>
                  <Td>
                    <Stack direction="row">
                      <Badge>communication</Badge>
                      <Badge colorScheme="green">Email</Badge>
                      <Badge colorScheme="red">Sad</Badge>
                      <Badge colorScheme="yellow">Happy</Badge>
                    </Stack>
                  </Td>
                  <Td isNumeric>+0.91</Td>
                </Tr>
                <Tr onClick={() => history.push(`${path}/djlskf`)}>
                  <Td>Email</Td>
                  <Td>Welcome to map communication.....</Td>
                  <Td>
                    <Stack direction="row">
                      <Badge>communication</Badge>
                      <Badge colorScheme="green">Email</Badge>
                      <Badge colorScheme="red">Sad</Badge>
                      <Badge colorScheme="yellow">Happy</Badge>
                    </Stack>
                  </Td>
                  <Td isNumeric>+0.91</Td>
                </Tr>
                <Tr>
                  <Td>Email</Td>
                  <Td>Welcome to map communication.....</Td>
                  <Td>
                    <Stack direction="row">
                      <Badge>communication</Badge>
                      <Badge colorScheme="green">Success</Badge>
                      <Badge colorScheme="red">Removed</Badge>
                      <Badge colorScheme="purple">New</Badge>
                    </Stack>
                  </Td>
                  <Td isNumeric>+0.91</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Messages;
