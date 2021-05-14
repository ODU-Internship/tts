/** @jsxImportSource @emotion/react */

import {
  Box, Table,
  Thead,
  Tbody,
  Tr as BaseTR,
  Th,
  Td,
  TableCaption,
  Badge,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useAsyncRetry } from 'react-use';
import { AiOutlineReload } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Spinner } from '../../../../../components';
import { updateRepMessagesDispatch } from '../../../../../store/triggers';
import Message from '../Message/Message';

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
  const dispatch = useDispatch();
  const messages = useSelector(({ repData }) => repData.messages);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedMessage, setSelectedMessage] = useState();
  const {
    loading, error, retry,
  } = useAsyncRetry(async () => updateRepMessagesDispatch()(dispatch), []);
  return (
    <Box overflow="auto">
      {!loading && <Button variant="outline" onClick={retry}><AiOutlineReload /></Button>}
      {loading ? <Spinner />
        : error
          ? error.message
          : (
            <Table variant="simple" mt="6" width="100%">
              <TableCaption>Recent data based on Sentimental Analysis</TableCaption>
              <Thead>
                <BaseTR>
                  <Th>Customer Name</Th>
                  <Th>Customer Detail</Th>
                  <Th>Type</Th>
                  <Th>Category</Th>
                  <Th>Message</Th>
                  <Th>Company</Th>
                </BaseTR>
              </Thead>
              <Tbody>
                {messages.map(({
                  type, category, message, company, _id, custName, custDetails,
                }) => (
                  <Tr
                    onClick={() => {
                      setSelectedMessage({
                        type, category, message, company, _id, custName, custDetails,
                      });
                      onOpen();
                    }}
                    key={_id}
                  >
                    <Td>{custName}</Td>
                    <Td>{custDetails}</Td>
                    <Td>{type}</Td>
                    <Td>
                      {category?.map((cat) => <Badge key={cat} colorScheme="green" mt="1" ms="1">{cat}</Badge>)}
                    </Td>
                    <Td>{message}</Td>
                    <Td>{company}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
      <Message isOpen={isOpen} onClose={onClose} message={selectedMessage} />
    </Box>
  );
};

export default Messages;
