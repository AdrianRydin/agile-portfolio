import './util/css/reusable.css';
// import { ChakraProvider } from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react';
import TeamPage from './pages/TeamPage';

function App() {
  return (
    <ChakraProvider>
      <TeamPage />
    </ChakraProvider>

    
  );
}

export default App;
