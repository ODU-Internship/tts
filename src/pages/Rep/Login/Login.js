/** @jsxImportSource @emotion/react */
import {
  Input, Button, Heading, Flex, useToast, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { repLoginDispatch } from '../../../store/triggers';
import { REP_ACCESS_TOKEN } from '../../../constants';

const Login = () => {
  const [cid, setCid] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [, setToken] = useLocalStorage(REP_ACCESS_TOKEN);
  const repUser = useSelector(({ repData }) => repData.user);

  const dispatch = useDispatch();
  const toast = useToast();

  if (repUser) {
    return <Redirect to="/rep" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { tokens } = await repLoginDispatch(cid, password)(dispatch);
      setToken(tokens[0].accessToken);
      toast({
        title: 'Logged in succesfully',
        description: 'Welcome to your dashboard',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  return (
    <Flex width="100vw" alignItems="center" justifyContent="center" mt="40">

      <VStack as="form" onSubmit={handleSubmit}>
        <Heading pb="10">CustomerCare Representative login</Heading>
        <Input
          maxW="350px"
          placeholder="sid"
          value={cid}
          onChange={(e) => {
            setCid(e.target.value);
          }}
        />
        <Input
          maxW="350px"
          placeholder="Password"
          type="password"
          mt="5"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          type="submit"
          mt="10"
          w="100%"
          isLoading={isLoading}
          maxW="350px"
        >
          Login
        </Button>
      </VStack>
    </Flex>
  );
};

export default Login;
