import "../index.css";
import "../util/css/reusable.css";
import Footer from "./Footer";

function FindUs() {
  return (
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto w-full wrapper lg:items-start">
      <p className="lg:text-left title text-white pt-8 text-center md:pl-10">
        FIND US
      </p>
      <p className="lg:text-left color-main-green small-text text-center md:pl-10">
        Share your ideas over a cup of coffee!
      </p>
      <p className="lg:text-left color-main-green small-text pb-8 text-center md:pl-10">
        We're open 8-17 every weekday.
      </p>
      <div className="flex justify-center w-full">
        <iframe
          className="w-full lg:w-10/12 md:w-10/12"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4262.727331712691!2d11.990951740359652!3d57.710280171066145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1661500532752!5m2!1ssv!2sse"
          height="350"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}

export default FindUs;
