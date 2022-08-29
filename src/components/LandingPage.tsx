import { Button } from "@chakra-ui/react";
import "../index.css";
import "../util/css/reusable.css";

function Landing() {
  return (
    <div className="wrapper">
    <div className="bg-main-blue flex flex-col lg:flex-row pt-32 pb-20 landingPage">
      <div className="flex flex-col w-1/2 justify-start items-start self-start">
      <p className="color-main-green small-text">digital-agency</p>
      <p className="title-small text-white">DBSTUDIO</p>
      <p className="title text-white mt-10 text-center lg:text-left">
        WE CREATE NICE, CONVENIENT, AND PROFTITABLE WEBSITES WITH REACT
      </p>
      <Button _hover={{background: "#6FCF97", boxShadow: "0px 0px 30px #6FCF97"}} px='100' boxShadow={"0px 0px 30px #4E2ECF"} rounded="3xl" className="my-6 lg:mb-0 w-36 text-white" bg={'#4E2ECF'}>CONTACT US</Button>
      </div>
      <div className="h-1/2 self-center">
      <img className="landingImage" src="./img/Logo.svg" alt="" />
      </div>
    </div>
    </div>
  );
}

export default Landing;
