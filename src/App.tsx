import * as React from 'react'
import './util/css/reusable.css'
// import { ChakraProvider } from '@chakra-ui/react'
import TeamCard from './components/TeamCard';
import { teamMember } from './util/member';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
    <div className="bg-main-blue">
      <TeamCard props={teamMember.bakkum} />
      <TeamCard props={teamMember.meiner} />
      {/* {Object.values(teamMember).map((member, index) => {
        return(
          <TeamCard props={member} />
        )
      })} LÄGG TILL DETTA FÖR ATT LOOPA UT ALLA MEMBERS*/}
    </div>
     </ChakraProvider>

    
  );
}

export default App;
