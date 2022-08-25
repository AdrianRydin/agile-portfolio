import * as React from 'react'
import './util/css/reusable.css'
// import { ChakraProvider } from '@chakra-ui/react'
import TeamCard from './components/TeamCard';

function App() {
  return (
    // <ChakraProvider>
    <div className="bg-main-blue">
      <TeamCard firstName='Felix' lastName='Bakkum' role='Lead Developer' />
    </div>
    // </ChakraProvider>

    
  );
}

export default App;
