/** @jsxImportSource @emotion/react */

import { Flex } from '@chakra-ui/react';
import { RiTaskLine } from 'react-icons/ri';

const Spinner = () => (
  <Flex justifyContent="center" alignItems="center" width="100%" height="100%">
    <RiTaskLine size="40" />
  </Flex>
);

export default Spinner;
