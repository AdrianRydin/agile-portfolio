import { Button, FormControl, Input, Select } from "@chakra-ui/react";
import "../util/css/reusable.css";

function ContactForm() {
  return (
    <div className="contactMainDiv flex justify-center items-center bg-main-blue">
      <div className="formDiv flex justify-center items-center p-3 border-white border rounded-xl text-white w-full lg:w-4/12 md:w-8/12">
        <FormControl className="!px-5 !py-2 flex flex-col">
          <Input
            variant="flushed"
            type="text"
            className="mb-5"
            placeholder="YOUR NAME"
          />
          <Input
            variant="flushed"
            type="email"
            className="mb-5"
            placeholder="E-MAIL"
          />
          <div className="flex items-center justify-center">
            <Select variant="flushed" className="w-1 test" placeholder="TEAM MEMBER" >
              <option value="option1">FELIX</option>
              <option value="option2">EMIL</option>
              <option value="option3">EDWIN</option>
              <option value="option4">CHRISTIAN</option>
              <option value="option5">ADRIAN</option>
            </Select>
            <Button _hover={{background: "#6FCF97"}} rounded="3xl" className="w-1/2 mx-6" bg={'#4E2ECF'}>SEND</Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default ContactForm;
