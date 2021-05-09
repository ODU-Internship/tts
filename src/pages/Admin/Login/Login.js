/** @jsxImportSource @emotion/react */
import {
  Input, Button, Heading, Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { adminLoginDispatch } from '../../../store/triggers';

const Login = () => {
  const [aid, setAid] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const adminUser = useSelector(({ adminData }) => adminData.user);
  if (adminUser) {
    return <Redirect to="/admin" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    adminLoginDispatch(aid, password)(dispatch);
  };

  return (
    <Flex
      width="100vw"
      alignItems="center"
      justifyContent="center"
      mt="40"
    >
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
        <Button type="submit" mt="10" w="100%">
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
