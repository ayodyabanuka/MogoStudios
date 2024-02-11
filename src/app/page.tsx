"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div>
      <div className="bg-[url('/Main-Website-Banner.jpg')] bg-cover bg-no-repeat z-0 gap-4 overflow-hidden w-max-screen h-screen flex flex-col justify-center items-center">
        <div className="text-8xl font-extrabold text-white">MOGO STUDIOS</div>
        <div className="text-2xl font-normal text-white">Welcome to Mogo Studios - Where imagination comes to life</div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-lg mx-auto grid grid-cols-3 py-36">
          <div className="flex justify-center items-center text-center text-5xl font-extrabold">About Us</div>
          <div className="grid col-span-2">
            <div className="text-xl font-light">Welcome to a world where creativity knows no limits. We are Mogo Studios, a company dedicated to crafting captivating stories through the magic of animation. Mogo Studios is Sri Lanka’s most extensive and No. 1 award-winning animation studio. Our team of visionaries, artists, and animators come together to bring characters to life and dreams to reality. Mogo studio is Sri Lanka’s first real-time, base feature-producing animation company and we own the world’s number one motion capture system, Vicon. Furthermore, it is a fully-fledged animation studio backed by Sri Lanka&apos;s largest media powerhouse aiming to release its first movie in 2025.</div>
          </div>
        </div>
      </div>
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
          <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-6 py-36">
            <div className="flex justify-center items-center text-center text-5xl font-extrabold">Answer-Short</div>
            <div className="grid col-span-2">
              <div className="text-xl font-light"><span className="font-bold">”Answer Short”</span> Takes Home the 2021 DIGICON 6 Regional Next Generation Award!</div>
              <div>In a year filled with incredible talent and innovation in digital content creation, “Answer Short” emerged as the shining star, securing the prestigious 2021 DIGICON 6 Regional Next Generation Award. This accolade recognizes not only exceptional storytelling but also the promise of a bright future in the world of digital media.</div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Sub-Banner_02.jpg')`,
            backgroundPositionY: `${scrollPosition * 0.5}px`,
            backgroundSize: 'cover',

          }}
        />
        <div className="relative z-5 text-white flex items-center justify-center h-full">
          <div className="max-w-screen-lg mx-auto grid grid-cols-3 gap-6 py-52">

            <div className="grid col-span-2">
              <div className="text-xl font-light">“Riley and the Wooden Sword” is a heartwarming and inspiring tale that reminds us to embrace our creativity, believe in ourselves, and unlock the limitless possibilities that lie within our imagination. It celebrates the transformative power of friendship, self-belief, and the magic of animation. Brought to life by the amazing talent of four junior animators at Mogo Studios, has just been crowned with the DIGICON 6 Regional Gold Award in 2023.</div>
            </div>
            <div className="flex justify-center items-center text-center text-5xl font-extrabold">Riley and the: Wooden Sword - Short</div>
          </div>
        </div>
      </section>
      <section className="relative h-1/2 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Sub-Banner_01.jpg')`,
            backgroundPositionY: `${scrollPosition * 0.5}px`,
            backgroundSize: 'cover',

          }}
        />
        <div className="relative z-5 text-white flex items-center justify-center h-full">
          <div className="flex justify-center items-center text-center text-5xl py-56 font-extrabold">Journey into the World of Animation</div>

        </div>
      </section>
      <div>
        <div className="relative z-5 text-gray-500 flex items-center justify-center h-full">
          <div className="max-w-screen-lg mx-auto grid gap-10 py-36">
            <div className="flex justify-center items-center text-center text-5xl font-extrabold">AWARDS</div>
            <div className="text-lg font-light text-center">FRAMES OF FANTASY,MOMENTS OF MAGIC</div>
            <div className="flex justify-evenly gap-40 items-center">
              <Image src={"/DIGICON6_Regional-1024x529.png"} alt={""} width={200} height={100}></Image>
              <Image src={"/DIGICON6_Nextgen-1024x529.png"} alt={""} width={200} height={100}></Image>
            </div>
          </div>
        </div>
      </div>
      <section className="relative h-1/2 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('/Sub-Banner_04.jpg')`,
            backgroundPositionY: `${scrollPosition * 0.5}px`,
            backgroundSize: 'cover',

          }}
        />
        <div className="relative z-5 text-white flex items-center justify-center h-full">
          <div className="flex justify-center items-center text-center text-5xl py-32 font-extrabold">ANIMATING THE FUTURE</div>

        </div>
      </section>
    </div>
  );
}
