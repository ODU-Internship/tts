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
  Button,
  Flex,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { AiOutlineReload } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useAsyncRetry } from 'react-use';
import { Spinner } from '../../../../../components';
import { supervisorMessagesDispatch } from '../../../../../store/triggers';

const Tr = styled(BaseTR)(({ theme }) => {
  const { colors } = theme;
  return {
    ':hover': {
      cursor: 'pointer',
      background: colors.gray[50],
    },
  };
});

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

const Messages = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { path } = useRouteMatch();
  const messages = useSelector(({ supervisorData }) => supervisorData.messages);

  const {
    loading,
    retry,
  } = useAsyncRetry(async () => supervisorMessagesDispatch()(dispatch), []);
  return (
    <Box maxW="1200px" width="100%" mt="5">
      <Flex justifyContent="space-between" mt="10" mb="5">
        <Heading size="lg">Recent Tickets</Heading>
        {!loading && <Button variant="outline" onClick={retry} float="right"><AiOutlineReload /></Button>}
      </Flex>
      <Box overflow="auto" position="relative">
        { loading
        && (
        <TableOverlay>
          <Spinner />
        </TableOverlay>
        )}

        <Table variant="simple" mt="6" width="100%">
          <TableCaption>Recent data based on Sentimental Analysis</TableCaption>
          <Thead>
            <BaseTR>
              <Th>Type</Th>
              <Th>Label</Th>
              <Th>Category</Th>
              <Th>Message</Th>
              <Th>Company</Th>
              <Th isNumeric>Prediction</Th>
            </BaseTR>
          </Thead>
          <Tbody>
            {Object.entries(messages).map(([id, {
              type, label, category, message, company, prediction,
            }]) => (
              <Tr onClick={() => history.push(`${path}/${id}`)} key={id}>
                <Td>{type}</Td>
                <Td>
                  <Stack direction="row">
                    {label?.map((lab) => <Badge key={lab} colorScheme={prediction < 0 ? 'red' : 'yellow'}>{lab}</Badge>)}
                  </Stack>
                </Td>
                <Td>
                  {category?.map((cat) => <Badge key={cat} colorScheme="green" mt="1" ms="1">{cat}</Badge>)}
                </Td>
                <Td>{message}</Td>
                <Td>{company}</Td>
                <Td isNumeric>{prediction}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>

    </Box>
  );
};

export default Messages;
