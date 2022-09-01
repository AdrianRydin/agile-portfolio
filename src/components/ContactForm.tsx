import { Button, FormControl, Input, Select, useToast } from "@chakra-ui/react";
import "../util/css/reusable.css";

function ContactForm() {
  const toast = useToast();
  return (
    <div className="flex justify-center items-center bg-main-blue">
      <div className="flex justify-center items-center border-white border rounded-xl text-white w-full lg:w-4/12 md:w-10/12">
        <FormControl
          isRequired
          className="!px-5 !py-2 flex flex-col items-center"
        >
          <Input
            variant="flushed"
            type="text"
            className="mb-5"
            placeholder="YOUR NAME"
            required
          />
          <Input
            variant="flushed"
            type="email"
            className="mb-5"
            placeholder="E-MAIL"
            required
          />
          <div className="flex items-center justify-center w-fit">
            <Select
              variant="flushed"
              placeholder="TEAM MEMBER"
              required
            >
              <option value="option1">FELIX</option>
              <option value="option2">EMIL</option>
              <option value="option3">EDWIN</option>
              <option value="option4">CHRISTIAN</option>
              <option value="option5">ADRIAN</option>
            </Select>
            <Button
              type="submit"
              transition={"500ms"}
              _hover={{ background: "#6FCF97" }}
              rounded="3xl"
              className="w-1/3 !px-12"
              bg={"#4E2ECF"}
            >
              SEND
            </Button>
          </div>
        </FormControl>
      </div>
    </div>
  );
}

export default ContactForm;
