import SliderOne from "@/app/(landing-page)/_components/slider/_components/slider-one";

import { Download, PhoneCall } from "lucide-react";
import Link from "next/link";

const Slider = () => {
  return (
    <div className="pt-20 md:pt-40">
      <div className="text-[#2b1c50] md:w-3/5 mx-auto text-center flex justify-center items-center md:text-5xl text-2xl px-10 font-medium">
        Take your career to the next level with us
      </div>

      <div className="pt-10 mb-20 md:pb-0 items-center justify-center flex">
        <div
          className="
            text-white
             md:w-60
              justify-between
               text-md
                font-light
                 rounded-[40px]
                  border-4
                   border-indigo-400/90
                   md:py-6
                   py-4
                   bg-[#565add]
                     hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                   
                   "
        >
          <Link href="https://calendly.com/nurman_ng">
            <div className="flex items-center justify-between px-6 gap-4">
              <PhoneCall className="w-6 h-6" />
              <div className="text-lg">schedule your call</div>
            </div>
          </Link>
        </div>
      </div>

      <SliderOne />
    </div>
  );
};

export default Slider;
