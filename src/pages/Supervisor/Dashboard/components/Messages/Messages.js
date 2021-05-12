/** @jsxImportSource @emotion/react */

import {
  Box, Heading, Table,
  Thead,
  Tbody,
  Tr as BaseTR,
  Th,
  Td,
  TableCaption,
  Stack,
  Badge,
} from '@chakra-ui/react';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

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
  const { colors } = useTheme();
  return (
    <Box maxW="1200px" width="100%" mt="5">
      <Heading size="lg">Recent Tickets</Heading>
      <Box overflow="auto">
        <Table variant="simple" mt="6" width="100%">
          <TableCaption>Recent data based on Sentimental Analysis</TableCaption>
          <Thead>
            <BaseTR>
              <Th>Category</Th>
              <Th>Message</Th>
              <Th>Result</Th>
              <Th isNumeric>Prediction</Th>
            </BaseTR>
          </Thead>
          <Tbody>
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
  );
};

export default Messages;
