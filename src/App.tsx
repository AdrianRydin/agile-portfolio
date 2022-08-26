import * as React from "react";
import "./util/css/reusable.css";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import TeamCard from "./components/TeamCard";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <ChakraProvider>
      <div className="bg-main-blue">
        <TeamCard firstName="Felix" lastName="Bakkum" role="Lead Developer" />
      </div>
      <div>
        <ContactForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
