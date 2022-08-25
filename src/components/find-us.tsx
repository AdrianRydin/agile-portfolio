import * as React from 'react'
import '../util/css/reusable.css'
import '../index.css'

import { ChakraProvider } from '@chakra-ui/react'

function FindUs() {
  return (
    <ChakraProvider>
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto min-w-full"> 
        <p className='title text-white'>FIND US</p>
        <p className='color-main-green'>Anders Personsgatan 18, 416 64 Göteborg</p>
    </div>
    </ChakraProvider>

    
  );
}

export default FindUs;