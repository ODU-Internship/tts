/** @jsxImportSource @emotion/react */

import {
  Box, Button, Input, Radio, RadioGroup, Stack, Textarea,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import MultiSelect from 'react-multi-select-component';
import { TICKET_CATEGORIES } from '../../../../../constants';

const Upload = () => {
  const [custName, setCustName] = useState('');
  const [type, setType] = useState('Chat');
  const [categories, setCategories] = useState([]);
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
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
        <Stack spacing={4} direction="row" onSe>
          <Radio value="Chat">Chat</Radio>
          <Radio value="Email">Email</Radio>
        </Stack>
      </RadioGroup>
      <Textarea
        mt="5"
        minH="250px"
        w="100%"
        display="block"
        placeholder="Enter new ticket data here"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button colorScheme="green" leftIcon={<FaUpload />} mt="5">Add Data</Button>
    </Box>
  );
};
export default Upload;
