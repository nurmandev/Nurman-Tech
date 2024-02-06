import Image from "next/image";

import { Button } from "@/components/ui/button";

const SixthSection = () => {
  return (
    <div className="py-20 px-10">
      <div
        className="
        text-[#2b1c50]
         text-center
          justify-center
           items-center
            text-4xl
             md:text-6xl
             font-medium
             md:pb-20
             mb-10
             "
      >
        Industry-Specific Skills
      </div>

      <div className="md:flex items-center justify-center md:space-x-20 space-y-10 md:space-y-0">
        <div className="bg-[#e8f5e3] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
          <Image
            src={"/images/sales.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
                rounded-xl
                h-40
                w-80
                "
          />

          <div className="text-2xl items-center justify-center flex pt-10 text-[#224229]">
            Customer Service
          </div>
          <div className="text-[#315b39] text-center leading-8 pt-4 h-24">
            Providing exceptional service to build a loyal customer base.
          </div>
        </div>

        <div className="bg-[#f8edfb] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
          <Image
            src={"/images/sales.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
                rounded-xl
                h-40
                w-80
                "
          />

          <div className="text-2xl items-center justify-center flex pt-10 text-[#450f3a]">
            UX Design
          </div>
          <div className="text-[#681b58] text-center leading-8 pt-4 h-24">
            Creating intuitive and engaging interfaces.
          </div>
        </div>

        <div className="bg-[#e3f3ff] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
          <Image
            src={"/images/sales.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
                rounded-xl
                h-40
                w-80
                "
          />

          <div className="text-2xl items-center justify-center flex pt-10 text-[#1b224b]">
            Data Analytics
          </div>
          <div className="text-[#1f357f] text-center leading-8 pt-4 h-24">
            Analyzing customer behavior and sales data to make informed business
            decisions.
          </div>
        </div>

        <div className="bg-[#eff0ff] rounded-[40px] md:w-80 p-10 hover:scale-105 hover:shadow-xl">
          <Image
            src={"/images/sales.svg"}
            alt="image"
            width={1920}
            height={1080}
            className="
                rounded-xl
                h-40
                w-80
                "
          />

          <div className="text-2xl items-center justify-center flex pt-10 text-[#2b1c50]">
            Market Analysis/Research
          </div>
          <div className="text-[#2b1c50] text-center leading-8 pt-4 h-24">
            Understanding market trends and identifying profitable investment
            opportunities.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center pt-20">
        <Button
          className="
            text-lg
            mt-6
            rounded-[40px]
            text-[#4b42ad]
            font-medium
            p-6
            bg-[#eff0ff]
            hover:scale-110
            hover:shadow-indigo-500
            transition-all
            duration-300
            shadow-md"
        >
          See all
        </Button>
      </div>
    </div>
  );
};

export default SixthSection;
