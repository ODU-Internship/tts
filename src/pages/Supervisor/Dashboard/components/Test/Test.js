/** @jsxImportSource @emotion/react */

import {
  Box,
  Heading,
  Text,
  Textarea,
  HStack,
  Button,
  Stack,
  Badge,
  useToast,
  Link,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';
import { FaUpload, FaPlay } from 'react-icons/fa';
import { useAsyncFn } from 'react-use';
import { BiLinkExternal } from 'react-icons/bi';
import { testModel, trainModel } from '../../../../../store/apis';
import { csvToJSON } from '../../../../../util';

const Test = () => {
  const [text, setText] = useState('');
  const [{ loading, value }, predict] = useAsyncFn(() => testModel(text), [text]);
  const csvRef = useRef();
  const toast = useToast();

  const handleFileUpload = async (e) => {
    if (!e.target.files) {
      return;
    }
    try {
      const messages = csvToJSON(await e.target.files[0].text()).map(({ message, label }) => ({
        message,
        label: [label],
      }));
      messages.pop();

      await trainModel(messages);
      toast({
        title: 'Model applied for training',
        description: 'Model is trained for the provided dataset.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Modal training failed',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };
  return (
    <Box width="100%" maxW={1200} mt="5">
      <Heading size="lg">Maintain your Model</Heading>
      <Text mt="1">Test your sentimental analysis model</Text>
      <Box>
        <Textarea
          mt="2"
          minH="300px"
          w="100%"
          display="block"
          placeholder="Enter text to analyse"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        {value && (
          <Box mt="10">
            <Heading size="md">#1 Model Result: </Heading>
            <Stack direction="row" mt="3">
              <Heading size="sm">Labels: </Heading>
              <Stack>
                {value.label.map((label) => (
                  <Badge key={label} colorScheme="green">
                    {label}
                  </Badge>
                ))}
              </Stack>
              <Heading size="sm"> Prediction: </Heading>
              <Text>{value.prediction}</Text>
            </Stack>
            <Heading size="md" mt="2">
              #2 Model Result:
              {' '}
            </Heading>
            <Stack direction="row" mt="3">
              <Heading size="sm">Negative: </Heading>
              <Text>{JSON.stringify(value.vader.neg)}</Text>
              <Heading size="sm">Neutral: </Heading>
              <Text>{JSON.stringify(value.vader.neu)}</Text>
              <Heading size="sm">Positive: </Heading>
              <Text>{JSON.stringify(value.vader.pos)}</Text>
              <Heading size="sm">Prediction: </Heading>
              <Text>{JSON.stringify(value.vader.compound)}</Text>
            </Stack>
          </Box>
        )}
        <HStack mt="3" w="100%">
          <Button colorScheme="green" leftIcon={<FaPlay />} onClick={predict} isLoading={loading}>
            Analyse
          </Button>
        </HStack>
        <Heading mt="10" size="lg">
          Upload CSV and Train Model
        </Heading>
        <Text mt="1">
          Train your model from scratch by uploading a dataset.
          Upload a CSV file to create your dataset for training.
          (
          <Link
            isExternal
            color="gray.600"
            href="https://storage.googleapis.com/tasktracker-odu.appspot.com/example.csv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sample CSV
            <BiLinkExternal css={{ display: 'inline', marginLeft: 2 }} />
          </Link>
          )
        </Text>

        <Button
          leftIcon={<FaUpload />}
          width="100%"
          height="50"
          mt="10"
          onClick={() => csvRef.current.click()}
        >
          Upload CSV
        </Button>
        <input
          type="file"
          ref={csvRef}
          onChange={handleFileUpload}
          accept=".csv"
          css={{ display: 'none' }}
        />
      </Box>
    </Box>
  );
};

export default Test;
