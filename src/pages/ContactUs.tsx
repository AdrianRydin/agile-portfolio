import ContactForm from "../components/ContactForm";
import "../index.css";
import "../util/css/reusable.css";

function Contact() {
  return (
    <>
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto w-full wrapper lg:items-start">
      <p className="headline-font text-white text-center lg:text-left">CONTACT US</p>
      <p className="color-main-green small-text mb-10 text-center lg:text-left">
        Fill in the form and we'll reach out to you
      </p>
    </div>
    <ContactForm/>
    </>
  );
}

export default Contact;
