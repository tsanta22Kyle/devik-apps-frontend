import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsMailbox, BsTwitter } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-center fixed top-0 z-2  left-0 p-5 w-full backdrop-blur-xl bg-transparent">
      <div className="flex items-center justify-around m-auto border rounded-2xl w-[40vw] p-1 border-[#ffffff2e] backdrop-blur-xl">
       <span className="flex items-center justify-center gap-5">

      <Image
        src={"/assets/2.png"}
        alt="Devik'Apps Logo"
        width={0}
        height={0}
        unoptimized
        className="w-25"
        ></Image>
      <h1 className="text-3xl font-bold"> <span className="text-[#0af395]">Devik'</span> <span className="">Apps</span> </h1>
        </span>
      <ul className=" flex gap-5 items-center justify-center">
        <li className="text-[#b1b1b1] hover:text-white transition-all">
            <Link href={""} >
            <BsTwitter size={25} ></BsTwitter>
            </Link>
        </li>
        <li className="text-[#b1b1b1] hover:text-white transition-all">
            <Link href={"https://www.facebook.com/profile.php?id=61583449233444&sk=about"} >
            <BsFacebook size={25}></BsFacebook>
            </Link>
        </li>
        <li className="text-[#b1b1b1] hover:text-white transition-all">
            <Link href={""} >
            <IoMdMail size={25} ></IoMdMail>
            </Link>
        </li>
      </ul>
        </div>
    </nav>
  );
}
