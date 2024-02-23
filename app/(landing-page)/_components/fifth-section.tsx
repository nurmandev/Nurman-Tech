import { Button } from "@/components/ui/button";
import Link from "next/link";

const FifthSection = () => {
  return (
    <div>
      <div
        className="md:w-5/6
         mx-auto
          bg-[#eff0ff]
           md:rounded-[80px]
            md:p-20 
            pt-10
             items-center
              justify-center"
      >
        <div
          className="text-[#2b1c50] 
                mx-auto
                 text-center
                  flex 
                  justify-center
                   items-center
                    text-3xl
                     md:text-6xl
                      py-10 
                      font-medium
                      "
        >
          Every Project, Idea, Individual Matters.
        </div>
        <div
          className="
                    text-xl
                     md:w-2/3
                     md:text-3xl
                      text-[#3d2e7c]
                       leading-relaxed 
                       font-light
                        justify-center
                        text-center
                        w-4/5
                        mx-auto
                        
                        "
        >
          At Nurman&apos;s, we boost your brand&apos;s visibility and
          recognition globally with our services. We tackle the challenge of
          reaching customers across time zones and geographical distances,
          guaranteeing conversions and ensuring your business&apos;s success.
          With us, your brand stands out everywhere.
        </div>

        <div className="items-center justify-center flex py-10">
          <Link href="/about-us">
            <Button
              className="
                        md:text-xl
                        py-6
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        md:p-8
                        bg-[#565add]
                        hover:scale-110
                        hover:shadow-indigo-500
                        transition-all
                        duration-300
                        shadow-md
                        "
            >
              Learn more
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
