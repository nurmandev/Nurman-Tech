import { Check, Download, ExternalLink } from "lucide-react";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="md:py-20">
      <div className="md:text-center space-y-4 px-10">
        <div className="text-5xl md:text-7xl flex md:justify-center font-medium md:py-2">
          We are Fueling the Future of Exceptional Teams
        </div>

        <div className="flex gap-4 md:justify-center pt-10">
          <div className="flex">
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
                    py-4
                    md:py-6
                    bg-[#565add]
                    hover:scale-110
                    transition-all
                    duration-300
                    shadow-md
                    hover:shadow-indigo-300


                    "
            >
              <Link href="#job">
                <div className="flex items-center justify-center gap-4 md:justify-between px-6">
                  <ExternalLink className="text-sm text-white" />
                  <div className="md:text-lg text-sm">see open position</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-10 md:pt-20">
          <video
            className="
                rounded-[20px]
                md:rounded-[80px]
                shadow-indigo-400
                shadow-xl
                md:w-2/3
                mx-auto
                  
                  "
            autoPlay
            muted
            loop
          >
            <source src="/videos/careers.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="text-4xl md:text-7xl flex md:justify-center font-medium pt-20 md:pt-28 pb-10 md:pb-20">
          We are dedicated to reshaping the landscape of collaboration
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
