// Assuming this is your index.js file

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
// import ChatProvider from''; // Adjust this path
import ChatProvider  from './context/chatProvider';

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ChatProvider>
          <App />
        </ChatProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
