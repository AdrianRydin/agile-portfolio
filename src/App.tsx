import * as React from "react";
import "./util/css/reusable.css";
import {
  ChakraProvider,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <ChakraProvider>
      <div>
        <ContactForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
