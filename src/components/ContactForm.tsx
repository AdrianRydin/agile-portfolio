import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";

function ContactForm() {
  return (
    <div className="contactMainDiv flex items-center">
      <div className="formDiv flex w-2/5 p-3">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input type="text" />
          <FormLabel>E-mail</FormLabel>
          <Input type="email" />
          <FormLabel>Team Member</FormLabel>
          <Input type="text" />
        </FormControl>
      </div>
      <Button colorScheme="blue">Send</Button>
    </div>
  );
}

export default ContactForm;
