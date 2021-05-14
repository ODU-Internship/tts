import { extendTheme } from '@chakra-ui/react';

export default extendTheme({
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    gray: {
      50: '#f7fafc',
      900: '#171923',
    },
    blue: {
      500: '#3C8AFF',
      600: '#1473FF',
      800: '#091E42',
    },
  },
  styles: {
    global: {
      body: {
        fontFamily: "'DM Sans', sans-serif",
      },
    },
  },
  fonts: {
    heading: "'DM Sans', sans-serif",
  },
});
