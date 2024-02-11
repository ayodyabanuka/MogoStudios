"use client"
import { useState, useEffect } from "react";

const Service = () => {
       const [scrollPosition, setScrollPosition] = useState(0);

       useEffect(() => {
              const handleScroll = () => {
                     setScrollPosition(window.scrollY);
              };

              window.addEventListener('scroll', handleScroll);

              return () => window.removeEventListener('scroll', handleScroll);
       }, []);
       return (
              <div className="min-h-screen bg-white">
                     <section className="relative h-1/2 overflow-hidden">
                            <div
                                   className="absolute inset-0 z-0"
                                   style={{
                                          backgroundImage: `url('/motion-capture_banner-1.jpg')`,
                                          backgroundPositionY: `${scrollPosition * 0.5}px`,
                                          backgroundSize: 'cover',

                                   }}
                            />
                            <div className="relative z-5 text-white flex items-center justify-center h-full">
                                   <div className="flex justify-center items-center text-center text-5xl py-56 font-extrabold">SERVICES</div>

                            </div>
                     </section>
                     <div className="flex flex-col mx-auto max-w-screen-lg py-20 gap-10 text-gray-500">
                            <div className="text-3xl font-bold text-center">VICON MOTION CAPTURE SERVICE</div>
                            <div>
                                   <div>Introducing Sri Lanka&apos;s Pinnacle of Animation Innovation: The World&apos;s No. 1 Vicon Motion Capture System at Mogo Studios. At Mogo Studios, we are proud to be the first and only motion capture service in Sri Lanka, equipped with the world-renowned Vicon Motion Capture System. We have brought cutting-edge technology to the heart of the island, revolutionizing the animation and entertainment industry like never before.</div>
                                   <div>Our journey is fueled by a passion for creativity, an unwavering commitment to excellence, and a desire to push the boundaries of what&apos;s possible in animation. With the Vicon Motion Capture System, we can now offer a level of precision and realism that was previously unimaginable.</div>
                                   <div>What makes the Vicon Motion Capture System the world&apos;s best? It&apos;s all about capturing movement with incredible accuracy. Whether it&apos;s for video games, film, television, or any other creative project, our system can replicate human and creature movements with unparalleled precision. This means that the characters and animations we create are not just lifelike; they are truly alive.</div>
                            </div>
                            <div>Here&apos;s what sets us apart:</div>
                            <div className="list-disc list-inside flex flex-col gap-3">

                                   <li><span className="font-bold">Unmatched Realism:</span> Our Vicon system captures every nuance of movement, delivering animations that look and feel lifelike.</li>
                                   <li><span className="font-bold">Speed and Efficiency:</span> With our state-of-the-art equipment, we can capture motion data quickly and efficiently, saving you time and money.</li>
                                   <li><span className="font-bold">Customization:</span> We tailor our services to suit your specific needs, whether it&apos;s for gaming, filmmaking, advertising, or research.</li>
                                   <li><span className="font-bold">Experienced Team:</span> Our team of animation experts and technicians are skilled in harnessing the full potential of the Vicon system, ensuring the best possible results.</li>
                                   <li><span className="font-bold">Endless Possibilities:</span> From creating fantastical creatures to recreating historical movements, the Vicon system opens up endless possibilities for your projects.</li>

                            </div>
                            <div className="flex flex-col gap-3">
                                   <div>We invite you to explore the limitless potential of animation with us at Mogo Studios. Whether you are a filmmaker, game developer, researcher, or anyone with a creative vision, we are here to turn your dreams into reality.</div>
                                   <div>Join us on this incredible journey as we redefine animation in Sri Lanka and beyond. Welcome to a world where imagination meets precision – welcome to Mogo Studios.</div>
                            </div>

                     </div>
              </div>
       )
}

export default Service