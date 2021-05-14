/** @jsxImportSource @emotion/react */

import {
  Box, Button, Input, Radio, RadioGroup, Stack, Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import MultiSelect from 'react-multi-select-component';
import { useDispatch } from 'react-redux';
import { useAsyncFn } from 'react-use';
import { TICKET_CATEGORIES } from '../../../../../constants';
import { addRepMessageDispatch } from '../../../../../store/triggers/rep/trigger';

const Upload = () => {
  const dispatch = useDispatch();
  const [custName, setCustName] = useState('');
  const [custDetails, setCustDetails] = useState('');
  const [type, setType] = useState('Mobile');
  const [categories, setCategories] = useState([]);
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [{ loading }, doFetch] = useAsyncFn(async () => {
    await addRepMessageDispatch(
      custName, custDetails, categories.map(({ value }) => value), message, company, type,
    )(dispatch);
  });
  return (
    <Box>
      <Stack direction={['column', 'row']} spacing="24px">
        <Input
          placeholder="Customer Name"
          value={custName}
          onChange={(e) => {
            setCustName(e.target.value);
          }}
        />
        <Input
          placeholder="Company Name"
          mt="5"
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <MultiSelect
          css={{ marginTop: 20, width: '100%' }}
          options={TICKET_CATEGORIES}
          value={categories}
          onChange={setCategories}
          overrideStrings={{ selectSomeItems: 'Select Category' }}
          labelledBy="Select"
        />
      </Stack>

      <RadioGroup
        defaultValue="1"
        mt="5"
        onChange={setType}
        value={type}
      >
        <Stack spacing={4} direction="row">
          <Radio value="Mobile">Mobile</Radio>
          <Radio value="Email">Email</Radio>
        </Stack>
      </RadioGroup>
      <Input
        placeholder={`Customer ${type}`}
        mt="5"
        value={custDetails}
        onChange={(e) => {
          setCustDetails(e.target.value);
        }}
      />
      <Textarea
        mt="5"
        minH="250px"
        w="100%"
        display="block"
        placeholder="Enter new ticket data here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        colorScheme="green"
        leftIcon={<FaUpload />}
        mt="5"
        isLoading={loading}
        onClick={() => doFetch()}
      >
        Add Data
      </Button>
    </Box>
  );
};
export default Upload;
