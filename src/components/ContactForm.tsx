import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import "../util/css/reusable.css";

function ContactForm() {
  return (
    <div className="contactMainDiv flex justify-center items-center bg-main-blue">
      <div className="formDiv flex justify-center items-center p-3 border-white border rounded-xl text-white w-full lg:w-4/12 md:w-8/12">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input variant="flushed" type="text" className="mb-5"/>
          <FormLabel>E-mail</FormLabel>
          <Input variant="flushed" type="email" className="mb-5"/>
          <FormLabel>Team Member</FormLabel>
          <Input variant="flushed" type="text" className="mb-5 w-2"/>
          <Button className="mt-10" colorScheme="teal">
            Send
          </Button >
        </FormControl>
      </div>
    </div>
  );
}

export default ContactForm;
