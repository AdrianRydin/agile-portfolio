import "../index.css";
import "../util/css/reusable.css";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <>
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto min-w-full lg:p-8 lg:items-start">
      <p className="title text-white">CONTACT US</p>
      <p className="color-main-green small-text mb-10">
        Fill in the form and we'll reach out to you
      </p>
    </div>
    <ContactForm/>
    </>
  );
}

export default Contact;
