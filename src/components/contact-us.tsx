import * as React from 'react'
import '../util/css/reusable.css'
import '../index.css'

import { ChakraProvider } from '@chakra-ui/react'

function Contact() {
  return (
    <ChakraProvider>
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto min-w-full"> 
        <p className='title text-white'>CONTACT US</p>
        <p className='color-main-green'>Fill in the form and we'll reach out to you</p>
    </div>
    </ChakraProvider>

    
  );
}

export default Contact;