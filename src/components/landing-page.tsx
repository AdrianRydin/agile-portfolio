import * as React from 'react'
import '../util/css/reusable.css'
import '../index.css'

import { ChakraProvider } from '@chakra-ui/react'

function Landing() {
  return (
    <ChakraProvider>
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto min-w-full"> 
        <p className='color-main-green'>digital-agency</p>
        <p className='title-small text-white'>DBSTUDIO</p>
        <p className='title text-white'>WE CREATE NICE, CONVENIENT, 
        AND PROFTITABLE WEBSITES WITH REACT</p>
    </div>
    </ChakraProvider>

    
  );
}

export default Landing;