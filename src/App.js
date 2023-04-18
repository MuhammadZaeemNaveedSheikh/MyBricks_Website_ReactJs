import Navigation from "./navigation/Navigation";
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function App() {
  const breakpoints = {
    xs: '350px',
    sm: '500px',
    md: '768px',
    lg: '1050px',
    xl: '1240px',
    '2xl': '1700px',
  }
  const config = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }
  
  const theme = extendTheme({ breakpoints, config })
  return (
    <ChakraProvider theme={theme}>
      <Navigation />
    </ChakraProvider>
  );
}

export default App;
