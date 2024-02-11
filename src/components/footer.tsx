import Image from "next/image"

const Footer = () => {
       return (
              <div className="h-1/2 bg-white p-20 flex  text-gray-500 flex-col items-center justify-around">
                     <div className="flex items-center gap-20">
                            <Image src={"/Mogo-Studios-Logo_final-02-1024x1024.png"} alt={""} width={200} height={200}></Image>
                            <div className="text-center">
                                   <div className="font-bold text-lg">LOCATION</div>
                                   <div className="text-xs">DEUTSCHE HOUSE BULDING,</div>
                                   <div className="text-xs">320 T. B. JAYAH MAWATHA, COLOMBO 01000, SRI LANKA</div>

                            </div>
                            <div className="text-center">
                                   <div className="font-bold text-lg">OUR HOURS</div>
                                   <div className="text-xs">10:00 AM - 22.00 PM</div>
                                   <div className="text-xs">MONDAY - SUNDAY</div>
                            </div>
                            <div className="text-center">
                                   <div className="font-bold text-lg">CONTACT US</div>
                                   <div className="text-xs">PHONE: 0115300800</div>
                                   <div className="text-xs">EMAIL: REACH@MOGO.LK</div>
                            </div>
                     </div>
                     <div className="text-center text-[8px]">DEVELOPED BY AB</div>
              </div>
       )
}

export default Footer