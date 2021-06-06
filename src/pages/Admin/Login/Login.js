/** @jsxImportSource @emotion/react */
import {
  Input, Button, Heading, Flex, useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import { ADMIN_ACCESS_TOKEN } from '../../../constants';
import { adminLoginDispatch } from '../../../store/triggers';

const Login = () => {
  const [aid, setAid] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);

  const [, setToken] = useLocalStorage(ADMIN_ACCESS_TOKEN);
  const adminUser = useSelector(({ adminData }) => adminData.user);

  const dispatch = useDispatch();
  const toast = useToast();
  if (adminUser) {
    return <Redirect to="/admin" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { tokens } = await adminLoginDispatch(aid, password)(dispatch);
      setToken(tokens?.[0]?.accessToken);
      toast({
        title: 'Logged in successfully',
        description: 'Welcome to your dashboard',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Login failed',
        description: error.response.data.message,
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
        <Heading>Admin login</Heading>
        <Input
          placeholder="aid"
          value={aid}
          mt="10"
          onChange={(e) => {
            setAid(e.target.value);
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
