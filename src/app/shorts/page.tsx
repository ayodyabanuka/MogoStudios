"use client"
import Image from "next/image";
import { useState, useEffect } from "react";

const Shorts = () => {
       const [scrollPosition, setScrollPosition] = useState(0);

       useEffect(() => {
              const handleScroll = () => {
                     setScrollPosition(window.scrollY);
              };

              window.addEventListener('scroll', handleScroll);

              return () => window.removeEventListener('scroll', handleScroll);
       }, []);
       return (
              <div className="min-h-screen bg-white flex flex-col gap-10">
                     <section className="relative h-1/2 overflow-hidden">
                            <div
                                   className="absolute inset-0 z-0"
                                   style={{
                                          backgroundImage: `url('/Sub-Banner_03.jpg')`,
                                          backgroundPositionY: `${scrollPosition * 0.5}px`,
                                          backgroundSize: 'cover',

                                   }}
                            />
                            <div className="relative z-5 text-white flex items-center justify-center h-full">
                                   <div className="flex justify-center items-center text-center text-5xl py-56 font-extrabold">SHORTS</div>

                            </div>
                     </section>
                     <div className="max-w-screen-lg flex justify-around w-full py-20 mx-auto">
                            <div className="flex flex-col gap-3">
                                   <Image src={"/Answer-poster.png"} alt={"Answer-poster"} height={200} width={400}></Image>
                                   <div className="font-bold text-lg">Answer – Short</div>
                            </div>
                            <div className="flex flex-col gap-3">
                                   <Image src={"/Riley-poster.png"} alt={"Riley-poster"} height={200} width={400}></Image>
                                   <div className="font-bold text-lg">Riley and the Wooden Sword – Short</div>
                            </div>

                     </div>
              </div>
       )
}

export default Shorts