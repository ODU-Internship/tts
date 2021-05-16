/** @jsxImportSource @emotion/react */

import {
  Box, Button, Input, Radio, Select, RadioGroup, Stack, useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useAsyncFn } from 'react-use';
import { postAdminCustRep, postAdminSupervisor } from '../../../../store/apis';

const Eupload = () => {
  const [empName, setEmpName] = useState('');
  const [empID, setEmpID] = useState('');
  const [empPass, setEmpPass] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('');
  const [gender, setGender] = useState('');

  const toast = useToast();

  const [{ loading, error }, doFetch] = useAsyncFn(async () => {
    if (type === 'custRep') {
      await postAdminCustRep(
        empName, empID, empPass, mobile, email, gender,
      );
      toast({
        title: 'Customer Care Executive Added',
        description: error?.message,
        status: 'success',
        isClosable: true,
      });
    } else {
      await postAdminSupervisor(
        empName, empID, empPass, mobile, email, gender,
      );
      toast({
        title: 'Supervisor Added',
        description: error?.message,
        status: 'success',
        isClosable: true,
      });
    }
  }, [empName, empID, empPass, mobile, email, gender, type]);

  useEffect(() => {
    if (error) {
      toast({
        title: 'Operation Failed',
        description: error?.message,
        status: 'error',
        isClosable: true,
      });
    }
  }, [error]);

  return (
    <Box>
      <Stack direction={['column', 'row']} spacing="24px" py="20px">

        <Input
          placeholder="Employee Name"
          value={empName}
          onChange={(e) => {
            setEmpName(e.target.value);
          }}
        />
        <Input
          placeholder="Employee ID"
          mt="5"
          value={empID}
          onChange={(e) => {
            setEmpID(e.target.value);
          }}
        />
        <Input
          placeholder="Employee Password"
          mt="5"
          value={empPass}
          onChange={(e) => {
            setEmpPass(e.target.value);
          }}

        />
      </Stack>
      <Stack direction={['column', 'row']} spacing="24px" py="30px">
        <Input
          placeholder="Mobile"
          value={mobile}
          onChange={(e) => {
            setMobile(e.target.value);
          }}
        />
        <Input
          placeholder="Email"
          mt="5"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Select
          placeholder="Gender"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Select>
      </Stack>
      <RadioGroup
        defaultValue="1"
        mt="5"
        onChange={setType}
        value={type}
      >
        <Stack spacing={4} direction="row">
          <Radio value="custRep">Customer Care Executive</Radio>
          <Radio value="supervisor">Supervisor</Radio>

        </Stack>
      </RadioGroup>

      <Button
        colorScheme="green"
        leftIcon={<FaUpload />}
        mt="5"
        isLoading={loading}
        onClick={() => doFetch()}
      >
        Add Employee
      </Button>
    </Box>
  );
};
export default Eupload;
