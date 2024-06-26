import Image from "next/image";

const ServiceCard = ({cardData}) => {
    return ( 
        <>
            <div className={`w-80 sm:w-auto md:overflow-hidden flex flex-col border-2 border-black rounded-lg ${cardData.color=="green" && "bg-green-100"} ${cardData.color=="cyan" && "bg-cyan-100"} ${cardData.color=="pink" && "bg-pink-100"} ${cardData.color=="purple" && "bg-purple-100"}`}>
                <div className="h-[15%] flex items-center justify-start gap-2 p-2 ">
                    <div className="bg-black flex items-center justify-center rounded-full p-2">
                        <Image 
                            src="/C.png"
                            alt="C vector"
                            width="8"
                            height="8"
                        />
                        <Image 
                            src="/H.png"
                            alt="H vector"
                            width="5"
                            height="5"
                        />
                    </div>
                    <div className="font-semibold text-base">
                        Join Development
                    </div>
                </div>
                <div className="h-[70%] border-y border-black flex flex-col gap-4  items-center justify-end">
                    <div className="font-bold text-2xl text-center px-6 sm:px-0">
                        {cardData.name}
                    </div>
                    <div>
                        <Image 
                            src={cardData.imgUrl}
                            alt="blockchain image"
                            width="200"
                            height="200"
                            
                        />
                    </div>
                </div>
                <div className="h-[15%] flex items-center justify-end px-2 py-6">
                    <button className="flex items-center justify-between gap-2 border border-black rounded-full px-2 py-1 bg-white hover:bg-black hover:text-white">
                        <span className="font-bold">Explore</span>
                        <Image 
                            src="/right_arrowblack.png"
                            alt="right arrow icon"
                            width="30"
                            height="30"
                            className="p-2 rounded-full bg-gradient-to-r from-[#FFFF00] to-[#00FFA7] border border-black"
                        />
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default ServiceCard;