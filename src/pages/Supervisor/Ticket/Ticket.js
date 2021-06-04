/** @jsxImportSource @emotion/react */
import {
  Box,
  Flex,
  Heading,
  Textarea,
  Text,
  Stack,
  Badge,
  Button,
  IconButton,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAsyncFn, useAsyncRetry } from 'react-use';
import { BsPlus } from 'react-icons/bs';
import { GrRefresh } from 'react-icons/gr';
import { FullscreenSpinner, InlineInput } from '../../../components';
import {
  supervisorMessageDispatch,
  supervisorUpdateMessageDispatch,
} from '../../../store/triggers';

const Ticket = () => {
  const [custName, setCustName] = useState('');
  const [company, setCompany] = useState('');
  const [custDetails, setCustDetails] = useState('');
  const [labels, setLabels] = useState([]);
  const [categories, setCategories] = useState([]);
  const [prediction, setPrediction] = useState('');
  const [text, setText] = useState('');

  const dispatch = useDispatch();
  const { messageID } = useParams();

  const message = useSelector(
    ({ supervisorData }) => supervisorData.messages[messageID],
  );
  const {
    loading, retry,
  } = useAsyncRetry(async () => {
    await supervisorMessageDispatch(messageID)(dispatch);
  }, []);
  const [{ loading: loadingUpdate }, doFetch] = useAsyncFn(async () => {
    await supervisorUpdateMessageDispatch(messageID, {
      label: labels,
      category: categories,
      message: text,
    })(dispatch);
  }, [custName, company, custDetails, labels, categories, text]);

  const handleSetLabels = (e, index) => {
    labels[index] = e.target.innerText;
    setLabels(labels);
  };
  const handleAddLabel = () => {
    setLabels(labels.concat(''));
  };
  const handleSetCategories = (e, index) => {
    categories[index] = e.target.innerText;
    setCategories(categories);
  };
  const handleAddCategory = () => {
    setCategories(categories.concat(''));
  };

  useEffect(() => {
    if (message) {
      setCustName(message.custName);
      setCompany(message.company);
      setCustDetails(message.custDetails);
      setLabels(message.label);
      setCategories(message.category);
      setPrediction(message.prediction);
      setText(message.message);
    }
  }, [message]);

  return loading ? (
    <FullscreenSpinner />
  ) : (
    <>
      {' '}
      <Box px="9" py="5" borderBottomColor="gray.300" borderBottomWidth="1px">
        <Heading size="lg" color="gray.600">
          MAP: Supervisor Dashboard
          {' > '}
          {custName}
        </Heading>
      </Box>
      <Flex px="10" py="10" flexDirection="column" alignItems="center">
        <Box width="100%" maxW="1200px">
          <Heading size="lg">{`Ticket: #${messageID}`}</Heading>
          <Text mt="1">{`Company: ${company}  / Customer Details: ${custDetails}`}</Text>
          <Heading size="md" mt="5">
            Labels:
          </Heading>
          <Stack direction="row" mt="5" w="100%">
            {labels.map((label, index) => (
              <Badge
                colorScheme="yellow"
                key={`${label}-${Math.random() * 100}`}
              >
                <InlineInput
                  value={label}
                  onChange={(e) => handleSetLabels(e, index)}
                />
              </Badge>
            ))}
            <IconButton
              variant="outline"
              minW="7"
              h="auto"
              onClick={handleAddLabel}
            >
              <BsPlus size="20" />
            </IconButton>
          </Stack>
          <Heading size="md" mt="5">
            Categories:
          </Heading>
          <Stack direction="row" mt="5" w="100%">
            {categories.map((category, index) => (
              <Badge
                colorScheme="green"
                key={`${category}-${Math.random() * 100}`}
              >
                <InlineInput
                  value={category}
                  onChange={(e) => handleSetCategories(e, index)}
                />
              </Badge>
            ))}
            <IconButton
              variant="outline"
              minW="7"
              h="auto"
              onClick={handleAddCategory}
            >
              <BsPlus size="20" />
            </IconButton>
          </Stack>
          <Heading size="md" mt="7">{`Prediction: ${prediction}`}</Heading>
          <Heading size="md" mt="7">
            Text:
          </Heading>
          <Textarea
            mt="2"
            minH="300px"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Flex mt="3" alignItems="center">
            <Button
              colorScheme="green"
              leftIcon={<FaPlay />}
              isLoading={loadingUpdate}
              onClick={doFetch}
            >
              Save and Update Prediciton Model
            </Button>
            <Button
              variant="outline"
              leftIcon={<GrRefresh />}
              marginLeft="5"
              isLoading={loading}
              onClick={retry}
            >
              Refresh
            </Button>
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Ticket;
