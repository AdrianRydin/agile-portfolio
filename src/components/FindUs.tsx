import '../index.css';
import '../util/css/reusable.css';


function FindUs() {
  return (
    <div className="bg-main-blue flex flex-col justify-start items-center h-auto min-w-full"> 
        <p className='title text-white pt-8'>FIND US</p>
        <p className='color-main-green small-text pb-8'>Anders Personsgatan 18, 416 64 Göteborg</p>
        <iframe className='w-full lg:w-6/12 md:w-10/12' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4262.727331712691!2d11.990951740359652!3d57.710280171066145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ff30de9cbee3d%3A0xbb3f902b63916df6!2sMedieinstitutet!5e0!3m2!1ssv!2sse!4v1661500532752!5m2!1ssv!2sse" width="100%" height="350" loading="lazy"></iframe>
        <div className='footerdiv p-10'>
        <p className="color-main-green small-text">digital-agency</p>
      <p className="title-small text-white">DBSTUDIO</p>
        </div>
    </div>

    
  );
}

export default FindUs;