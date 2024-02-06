import { MessageCircle } from "lucide-react";
import Link from "next/link";
import GroupIconComponent from "./group-icons";

const FirstSection = () => {
  return (
    <div className="md:py-20 py-10 bg-[#111019] px-10">
      <div
        className="
        md:text-center
        md:justify-center
        items-center
        flex
        flex-col

        "
      >
        <div
          className="
            text-5xl
            md:text-7xl
            md:justify-center
            flex
            font-medium
            pt-16
            pb-1
            text-[#f1f0f3]
            "
        >
          Welcome to the Nurman Innovative
        </div>

        <p
          className="
            text-xl
            md:text-3xl
            font-light
            md:w-1/2
            md:mx-auto
            text-[#bbb6c6]
            leading-normal
            "
        >
          We&apos; are Turning Ideas into Masterpieces with Design, Branding,
          and Innovation that position your business to attract and convert
          visitors to loyal paying customers.
        </p>

        <GroupIconComponent />

        <div className="pt-28">
          <video
            className="
                rounded-[40px]
                 shadow-indigo-400 
                 shadow-2xl 
                 xl:w-5/6
                  xl:mx-auto"
            autoPlay
            muted
            loop
          >
            <source src="/videos/careers.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
