import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col items-center sm:gap-6 bg-black text-white p-8 sm:px-44 sm:pt-20 sm:pb-10">
        <div className="">
          <Image src="/logo.png" alt="website logo" width="100" height="100" />
        </div>
        <div className="w-full">
          <hr className="bg-[#98A6AC]" />
        </div>
        <div className="text-xs font-medium text-[#98A6AC]">
          © 2024 All Rights Reserved - Chaintech Network
        </div>
      </footer>
    </>
  );
};

export default Footer;
