/** @jsxImportSource @emotion/react */

import {
  Box, Table,
  Thead,
  Tbody,
  Tr as BaseTR,
  Th,
  Td,
  TableCaption,
  Stack,
  Badge,
  Button,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useAsyncRetry } from 'react-use';
import { AiOutlineReload } from 'react-icons/ai';
import { Spinner } from '../../../../../components';
import { getRepMessages } from '../../../../../store/apis';

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
  const {
    loading, error, value, retry,
  } = useAsyncRetry(async () => {
    const { data } = await getRepMessages();
    return data;
  }, []);
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
                  <Th>Type</Th>
                  <Th>Category</Th>
                  <Th>Message</Th>
                  <Th>Company</Th>
                </BaseTR>
              </Thead>
              <Tbody>
                {value.map(({
                  type, category, message, company, _id,
                }) => (
                  <Tr onClick={() => history.push(`${path}/${_id}`)} key={_id}>
                    <Td>{type}</Td>
                    <Td>
                      <Stack direction="row">
                        {category?.map((cat) => <Badge key={cat} colorScheme="green">{cat}</Badge>)}
                      </Stack>
                    </Td>
                    <Td>{message}</Td>
                    <Td>{company}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          )}
    </Box>
  );
};

export default Messages;
