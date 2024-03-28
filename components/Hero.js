import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="bg-black text-white flex flex-col items-center gap-6 py-8 sm:py-12">
        <div className="md:text-8xl sm:text-7xl text-4xl tracking-widest font-extrabold">
          <div className="text-center">WELCOME</div>
          <div className="flex  ">
            TO
            <span className="pt-2 bg-gradient-to-r from-[#FFFF00] to-[#00FFA7] text-transparent bg-clip-text">
              CHAINTECH
            </span>
          </div>
        </div>
        <div className="text-center text-xs font-medium sm:text-lg">
          From square one to engineering excellence! PixelPlex assists in
          full-cycle software
          <br />
          development, jumps in to take it over, or brings dedicated
          top-demanded skills.
        </div>
        <div className="">
          <button className=" flex items-center justify-between gap-4 rounded-full px-4 py-2 bg-white hover:bg-[#00FFA7]  text-black font-semibold ">
            <span className="font-semibold">Get Started</span>
              <Image
                src="/right_arrow.png"
                alt="right arrow icon"
                height="30"
                width="30"
                className="bg-black rounded-full p-2"
              />
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
