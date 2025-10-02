import React from 'react';
import { ChakraProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from "./routes";
import { theme } from "./theme";
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Router>
          <AuthProvider>
            <AppRoutes />
          </AuthProvider>
        </Router>
      </ColorModeProvider>
    </ChakraProvider>
  );
}

export default App;
