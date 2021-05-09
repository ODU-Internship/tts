/** @jsxImportSource @emotion/react */
import {
  Input, Button, Heading, Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { dispatchLoginAdminUser } from '../../redux/triggers';

const Login = () => {
  const [aid, setAid] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <Flex
      width="100vw"
      alignItems="center"
      justifyContent="center"
      mt="40"
    >
      <form css={{ maxWidth: 350 }}>
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
