import { Button, FormControl, Input, Select, Textarea } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../util/css/reusable.css";

function ContactForm() {

  const navigate = useNavigate()
  return (
    <div className="contactMainDiv flex justify-center items-center bg-main-blue">
      <div className="formDiv flex justify-center items-center p-3 border-white border rounded-xl text-white w-full lg:w-4/12 md:w-10/12">
        <form
          onSubmit={(e) => navigate('/sent')}
        >
          <FormControl
            isRequired={true}
            className="!px-5 !py-2 flex flex-col items-center"
          >
            <Input
              variant="flushed"
              type="text"
              className="mb-5"
              placeholder="NAME"
              required
            />
            <Input
              variant="flushed"
              type="email"
              className="mb-5"
              placeholder="E-MAIL"
              required
            />
            <Textarea
              variant="flushed"
              className="mb-5"
              placeholder="MESSAGE"
              required
              resize={'none'}
            />
            <div className="flex flex-col gap-5 md:flex-row items-center justify-center w-fit">
              <Select id="selectMenu" variant="flushed" placeholder="TEAM MEMBER" required>
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
                className="w-2/5 mx-6"
                bg={"#4E2ECF"}
              >
                SEND
              </Button>
            </div>
          </FormControl>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
