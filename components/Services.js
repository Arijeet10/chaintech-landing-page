import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { cardData } from "@/constants/data";

const Services = () => {
  return (
    <>
      <section className="flex flex-col gap-4 md:px-36 px-2 py-10">
        <div className="sm:flex sm:justify-between sm:items-center">
          <div className="flex flex-col">
            <span className="text-5xl font-semibold">Services We Offer</span>
            
            <span className="font-medium text-lg">
              Discover the digital possibilities for your brand with our
              comprehensive suite of services.
            </span>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button className="hover:border-black hover:border hover:rounded-full hover:p-2 hover:bg-gradient-to-r from-[#FFFF00] to-[#00FFA7]">
                <Image 
                    src="/left_arrowblack.png"
                    alt="left arrow icon"
                    width="15"
                    height="15"
                />
            </button>
            <button className="border-black border rounded-full p-2 hover:bg-gradient-to-r from-[#FFFF00] to-[#00FFA7]">
                <Image 
                    src="/right_arrowblack.png"
                    alt="right arrow icon"
                    width="15"
                    height="15"
                    className=""
                />
            </button>
          </div>
        </div>
        <div className="md:grid md:grid-cols-4 sm:grid sm:grid-cols-2 md:overflow-hidden flex overflow-scroll gap-4">
          {cardData.map((card,i)=>{
            return <ServiceCard cardData={card} />
          })}
          {cardData.map((card,i)=>{
            return <ServiceCard cardData={card} />
          })}
        </div>
      </section>
    </>
  );
};

export default Services;
