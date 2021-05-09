/** @jsxImportSource @emotion/react */
import {
  Input, Button, Heading, Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { supervisorLoginDispatch } from '../../../store/triggers';

const Login = () => {
  const [sid, setSid] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const supervisorUser = useSelector(({ supervisorData }) => supervisorData.user);
  if (supervisorUser) {
    return <Redirect to="/supervisor" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    supervisorLoginDispatch(sid, password)(dispatch);
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
        <Button type="submit" mt="10" w="100%">
          Login
        </Button>
      </form>
    </Flex>
  );
};

export default Login;
