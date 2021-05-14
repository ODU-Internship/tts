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
import styled from '@emotion/styled';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { useAsync } from 'react-use';
import { Spinner } from '../../../../../components';
import { getSupervisorMessages } from '../../../../../store/apis';

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
  const { loading, error, value } = useAsync(async () => {
    const { data } = await getSupervisorMessages();
    return data;
  }, []);
  return (
    <Box maxW="1200px" width="100%" mt="5">
      <Heading size="lg">Recent Tickets</Heading>
      <Box overflow="auto">
        <Table variant="simple" mt="6" width="100%">
          {loading ? <Spinner />
            : error
              ? error.message
              : (
                <>
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
                    {value.map(({
                      type, label, category, message, company, prediction, _id,
                    }) => (
                      <Tr onClick={() => history.push(`${path}/${_id}`)} key={_id}>
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
                </>
              )}
        </Table>
      </Box>

    </Box>
  );
};

export default Messages;
