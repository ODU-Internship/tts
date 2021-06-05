/** @jsxImportSource @emotion/react */

import { Button, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import MapLogo from '../../assets/map-logo.png';

const Home = () => (
  <Flex justifyContent="center" fontSize="2xl" alignItems="center" h="100vh" flexDir="column">
    <img src={MapLogo} alt="Map's primary logo from their website" />
    <Button as={Link} to="/rep" mt="10" width="100%" maxW="400px" variant="outline">
      Representative Login
    </Button>
    <Button as={Link} to="/supervisor" mt="5" width="100%" maxW="400px" variant="outline">
      Supervisor Login
    </Button>
    <Button as={Link} to="/admin" mt="5" width="100%" maxW="400px" variant="outline">
      Admin Login
    </Button>
  </Flex>
);

export default Home;
