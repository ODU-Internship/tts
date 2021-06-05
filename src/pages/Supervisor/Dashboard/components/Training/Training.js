/** @jsxImportSource @emotion/react */

import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { AiOutlineReload } from 'react-icons/ai';
import { useAsyncRetry } from 'react-use';
import { Text } from 'recharts';
import styled from '@emotion/styled';
import { Spinner } from '../../../../../components';
import { getRetrainData } from '../../../../../store/apis';

const TableOverlay = styled.div(({ theme }) => {
  const { colors } = theme;
  return {
    position: 'absolute',
    width: '100%',
    height: '100%',
    background: colors.gray[50],
    backgroundColor: 'rgba(255,255,255,0.5)',
    left: 0,
    top: 0,
  };
});

const Training = () => {
  const { loading, value, retry } = useAsyncRetry(() => getRetrainData());
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return (
    <Box width="100%" maxW={1200} mt="5">
      <Flex justifyContent="space-between" mt="10" mb="5">
        <Heading size="lg">Retraining data</Heading>
        {!loading && (
          <Button variant="outline" onClick={retry} float="right">
            <AiOutlineReload />
          </Button>
        )}
      </Flex>
      <Text>{`Retrains scheduled for  ${tomorrow.toDateString()}.`}</Text>
      <Box overflow="auto" position="relative">
        {loading && (
          <TableOverlay>
            <Spinner />
          </TableOverlay>
        )}

        <Table variant="simple" mt="6" width="100%">
          <Thead>
            <Tr>
              <Th>Label</Th>
              <Th>Message</Th>
            </Tr>
          </Thead>
          <Tbody>
            {value
              && value.data.map(({ label, message, _id }) => (
                <Tr key={_id}>
                  <Td>
                    <Stack direction="row">
                      {label?.map((lab) => (
                        <Badge key={lab} colorScheme="yellow">
                          {lab}
                        </Badge>
                      ))}
                    </Stack>
                  </Td>
                  <Td>{message}</Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </Box>
    </Box>
  );
};

export default Training;
