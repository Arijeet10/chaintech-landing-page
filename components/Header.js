import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <nav className="sm:flex sm:items-center md:justify-between  bg-black py-6 sm:px-36">
        <Link href="/" className="bg-black flex items-center justify-center ">
            <Image 
                src="/logo.png"
                alt="website logo"
                height="100"
                width="100"
            />
        </Link>
        <div className="flex items-center justify-center gap-4  bg-black text-white font-semibold">
          <Link href="/company" className="hover:text-[#00FFA7]">Company</Link>
          <Link href="#" className="hover:text-[#00FFA7]">Services</Link>
          <Link href="#" className="hover:text-[#00FFA7]">Business Models</Link>
          <Link href="#" className="hover:text-[#00FFA7]">Blogs</Link>
          <Link href="#" className="hover:text-[#00FFA7]">Contact Us</Link>
        </div>
      </nav>
      <div className="divide-y divide-[#1F1F1F]" />
    </>
  );
};

export default Header;
