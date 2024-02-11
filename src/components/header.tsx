"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {

       const pathname = usePathname();

       const menu = [
              {
                     name: "HOME",
                     href: "/"
              },
              {
                     name: "FEATURE",
                     href: "/feature"
              },
              {
                     name: "SERVICE",
                     href: "/service"
              },
              {
                     name: "SHORTS",
                     href: "/shorts"
              },
       ]

       const [scrolled, setScrolled] = useState(false);

       useEffect(() => {
              const handleScroll = () => {
                     const isScrolled = window.scrollY > 0;
                     setScrolled(isScrolled);
              };

              window.addEventListener('scroll', handleScroll);
              return () => window.removeEventListener('scroll', handleScroll);
       }, []);


       return (
              <div className={` w-full flex z-10 transition duration-500 ease-in-out ${scrolled ? "bg-white fixed" : "bg-white/50 absolute"} justify-between items-center px-20`}>
                     <Image src={"/Mogo-Studios-Logo_final-03.png"} width={80} height={80} alt={"logo"}></Image>
                     <div className="flex gap-4">
                            {menu.map((item) => (
                                   <div key={item.name} className="flex group w-28 h-full flex-col justify-between items-center">
                                          <div></div>
                                          <Link className="my-7 text-gray-900 font-bold text-xs transition duration-500 ease-in-out group-hover:text-red-700" href={item.href}>{item.name}</Link>
                                          <div className={`w-full h-1 rounded-tl-full rounded-tr-full  transition duration-500 ease-in-out group-hover:bg-red-700 ${pathname === item.href ? scrolled ? "bg-red-700" : "bg-white" : "bg-transparent"}`}></div>
                                   </div>
                            ))}
                     </div>


              </div>
       )
}
export default Header;