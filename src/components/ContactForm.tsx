import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import '../util/css/reusable.css'

function ContactForm() {
  return (
    <div className="contactMainDiv flex justify-center items-center bg-main-blue">
      <div className="formDiv flex justify-center items-center p-3 border-white border rounded-xl text-white w-full lg:w-4/12 md:w-8/12">
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input variant='flushed' type="text" />
          <FormLabel>E-mail</FormLabel>
          <Input variant='flushed' type="email" />
          <FormLabel>Team Member</FormLabel>
          <Input variant='flushed' type="text" />
          <Button className="mt-10" colorScheme="messenger">Send</Button>
        </FormControl>
      </div>
    </div>
  );
}

export default ContactForm;
