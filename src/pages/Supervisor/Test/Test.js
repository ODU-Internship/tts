/** @importJsxSource @emotion/react */

import {
  Box, Heading, Text, Textarea, HStack, Button,
} from '@chakra-ui/react';
import { useState } from 'react';
import { FaUpload, FaPlay } from 'react-icons/fa';
import { useAsyncFn } from 'react-use';

const Test = () => {
  const [text, setText] = useState('');
  const bruh = 10;
  const [{ loading, value }, predict] = useAsyncFn(async () => {

  }, [text]);
  return (
    <Box width="100%" maxW={1200} mt="5">
      <Heading size="lg">Mantain your Model</Heading>
      <Text mt="1">Test your sentimental analysis model</Text>
      <Box>
        <Textarea mt="2" minH="300px" w="100%" display="block" placeholder="Enter text to analyse" />
        <HStack mt="3" w="100%">
          <Button colorScheme="green" leftIcon={<FaPlay />}>Reanalyse</Button>
          <Text>or</Text>
          <Button leftIcon={<FaUpload />}>Upload CSV</Button>
        </HStack>
      </Box>
    </Box>
  );
};

export default Test;
