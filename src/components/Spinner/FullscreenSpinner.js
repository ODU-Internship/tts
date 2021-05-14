/** @jsxImportSource @emotion/react */

import { Flex } from '@chakra-ui/react';
import { RiTaskLine } from 'react-icons/ri';

const FullscreenSpinner = () => (
  <Flex justifyContent="center" alignItems="center" width="100vw" height="100vh">
    <RiTaskLine size="40" />
  </Flex>
);

export default FullscreenSpinner;
