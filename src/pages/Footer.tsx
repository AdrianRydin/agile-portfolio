function Footer() {
  return (
    <div className="wrapper">
      <div className="flex flex-col gap-8 md:gap-0 md:flex-row w-full justify-between">
        <div>
          <p className="title text-white text-center lg:text-left md:pl-10">DBSTUDIO AB</p>
        </div>
        <div>
          <p className="small-text text-white text-center">hello@dbs.se</p>
          <p className="small-text text-white text-center">+4670-000 00 00</p>
        </div>
        <p className="small-text text-white text-center">
          Anders Personsgatan 18 <br /> 416 64 Göteborg
        </p>
      </div>
    </div>
  );
}

export default Footer;
