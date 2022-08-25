import * as React from 'react'
import '../util/css/reusable.css'
import '../index.css'

import { ChakraProvider } from '@chakra-ui/react'

function Team() {
  return (
    <ChakraProvider>
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto min-w-full"> 
        <p className='title text-white'>THE TEAM</p>
        <p className='color-main-green small-text'>Click to interact</p>
    </div>
    </ChakraProvider>

    
  );
}

export default Team;