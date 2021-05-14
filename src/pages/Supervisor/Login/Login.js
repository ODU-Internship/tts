/** @jsxImportSource @emotion/react */
import {
  Input, Button, Heading, Flex, useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { supervisorLoginDispatch } from '../../../store/triggers';
import { SUPERVISOR_ACCESS_TOKEN } from '../../../constants';

const Login = () => {
  const [sid, setSid] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [, setToken] = useLocalStorage(SUPERVISOR_ACCESS_TOKEN);
  const supervisorUser = useSelector(({ supervisorData }) => supervisorData.user);

  const dispatch = useDispatch();
  const toast = useToast();

  if (supervisorUser) {
    return <Redirect to="/supervisor" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { tokens } = await supervisorLoginDispatch(sid, password)(dispatch);
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
      <form css={{ maxWidth: 350 }} onSubmit={handleSubmit}>
        <Heading>Supervisor login</Heading>
        <Input
          placeholder="sid"
          value={sid}
          mt="10"
          onChange={(e) => {
            setSid(e.target.value);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          mt="5"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button type="submit" mt="10" w="100%" isLoading={isLoading}>
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
