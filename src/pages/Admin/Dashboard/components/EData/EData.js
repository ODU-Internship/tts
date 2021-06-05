/** @jsxImportSource @emotion/react */

import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  Button,
  useToast,
} from '@chakra-ui/react';
import { AiOutlineDelete, AiOutlineReload } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useAsyncRetry } from 'react-use';
import { Spinner } from '../../../../../components';
import {
  adminDeleteRepDispatch,
  adminDeleteSupervisorDispatch,
  adminRepsDispatch,
  adminSupervisorsDispatch,
} from '../../../../../store/triggers';

const Messages = () => {
  const dispatch = useDispatch();
  const toast = useToast();

  const reps = useSelector(({ adminData }) => adminData.reps);
  const supervisors = useSelector(({ adminData }) => adminData.supervisors);

  const { loading, error, retry } = useAsyncRetry(async () => {
    adminRepsDispatch()(dispatch);
    return adminSupervisorsDispatch()(dispatch);
  }, []);

  const handleDelete = (type, id) => {
    try {
      if (type === 'custRep') {
        adminDeleteRepDispatch(id)(dispatch);
      } else {
        adminDeleteSupervisorDispatch(id)(dispatch);
      }
    } catch (err) {
      toast({
        title: ' Delete failed',
        description: err.message,
        variant: 'error',
      });
    }
  };
  return (
    <Box maxW="1200px" width="100%" mt="5">
      {!loading && (
        <Button variant="outline" onClick={retry}>
          <AiOutlineReload />
        </Button>
      )}
      <Box overflow="auto">
        <Table variant="simple" mt="6" width="100%">
          {loading ? (
            <Spinner />
          ) : error ? (
            error.message
          ) : (
            <>
              <TableCaption>Recent data based on Sentimental Analysis</TableCaption>
              <Thead>
                <Tr>
                  <Th>Employee ID</Th>
                  <Th>Employee Type</Th>
                  <Th>Name</Th>
                  <Th>Email</Th>
                  <Th>phone</Th>
                  <Th>gender</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {Object.entries(supervisors).map(([sid, {
                  name, email, phone, gender,
                }]) => (
                  <Tr>
                    <td>{sid}</td>
                    <td>Supervisor</td>
                    <Td>{name}</Td>
                    <Td>{email}</Td>
                    <Td>{phone}</Td>
                    <Td>{gender}</Td>
                    <Td>
                      <Button variant="outline" onClick={() => handleDelete('supervisor', sid)}>
                        <AiOutlineDelete />
                      </Button>
                    </Td>
                  </Tr>
                ))}
                {Object.entries(reps).map(([cid, {
                  name, email, phone, gender,
                }]) => (
                  <Tr>
                    <td>{cid}</td>
                    <td>Representative</td>
                    <Td>{name}</Td>
                    <Td>{email}</Td>
                    <Td>{phone}</Td>
                    <Td>{gender}</Td>
                    <Td>
                      <Button variant="outline" onClick={() => handleDelete('custRep', cid)}>
                        <AiOutlineDelete />
                      </Button>
                    </Td>
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
