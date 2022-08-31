import { Button } from "@chakra-ui/react";
import ContactForm from "../components/ContactForm";
import "../index.css";
import "../util/css/reusable.css";
import {useRef} from 'react'


function Landing() {
    const ScrollDemo = () => {
    const myRef = useRef<null | HTMLDivElement>(null)
  
    const handleClick = () => {
      myRef.current?.scrollIntoView({behavior: 'smooth', block: 'end'})
    }
  }
  return (
    <div className="wrapper">
    <div className="bg-main-blue flex flex-col lg:flex-row pt-0 pb-6 lg:pt-32 lg:pb-20 lg:h-screen">
      <div className="flex flex-col md:pl-10 md:pr-10 lg:w-1/2 justify-center items-center lg:self-start lg:justify-start lg:items-start">
      <p className="color-main-green small-text">digital-agency</p>
      <p className="title-small text-white">DBSTUDIO</p>
      <p className="title text-white mt-10 text-center lg:text-left">
        WE CREATE NICE, CONVENIENT, AND PROFTITABLE WEBSITES WITH REACT
      </p>
      <Button transition={"800ms"} _hover={{background: "#6FCF97", boxShadow: "0px 0px 30px #6FCF97"}} px='100' boxShadow={"0px 0px 30px #4E2ECF"} rounded="3xl" className="my-6 lg:mb-0 w-36 text-white" bg={'#4E2ECF'} onClick={ScrollDemo}>CONTACT US</Button>
      </div>
      <div className="h-1/2 self-center">
      <img className="landingImage" src="./img/Logo.svg" alt="" />
      </div>
    </div>
    </div>
  );
}

export default Landing;
