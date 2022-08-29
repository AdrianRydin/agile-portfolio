import * as React from 'react'
import '../util/css/reusable.css'
import '../index.css'

import { ChakraProvider } from '@chakra-ui/react'

function Landing() {
  return (
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto lg:w-4/12 lg:p-8 lg:items-start"> 
        <p className='color-main-green small-text'>digital-agency</p>
        <p className='title-small text-white'>DBSTUDIO</p>
        <p className='title text-white'>WE CREATE NICE, CONVENIENT, 
        AND PROFTITABLE WEBSITES WITH REACT</p>
    </div>

    
  );
}

export default Landing;