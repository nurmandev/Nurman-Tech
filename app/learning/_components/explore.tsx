import Image from "next/image";
import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <div>
      <div>
        <div
          className="
    text-[#252434]
     md:text-center 
     flex
      px-10
      md:justify-center
      items-center
        text-4xl
        md:text-6xl
        font-medium
        pb-20      
      "
        >
          Why choose us
        </div>

        <div
          className="
        
        md:flex
        items-center
        justify-center
        px-10
        space-y-10
        md:space-y-0
        md:space-x-10
        "
        >
          <div
            className="
        bg-[#eff0ff]
        rounded-[20px]
        md:rounded-[80px]
        md:w-1/4
        p-10 
        md:p-20
        hover:scale-105
        hover:shadow-xl
        "
          >
            <Image
              src={"/images/undraw-1.svg"}
              alt="image"
              width={1920}
              height={1080}
              className="
           h-40
                "
            />

            <div
              className="
                text-3xl
                 items-center
                  flex
                   justify-center
                   pt-10
                   text-[#2b1c50]

                   
                   "
            >
              Flexible Learning Times
            </div>

            <div className="text-[#2b1c50] text-center leading-8 pt-4">
              Our platform offers flexibility, allowing you to study at times
              that suit your schedule best. Whether it&apos;s early mornings, late
              nights, or weekends, our resources are available whenever you&apos;re
              ready to learn.
            </div>
          </div>

          <div
            className="
        bg-[#eff0ff]
        rounded-[20px]
        md:rounded-[80px]
        md:w-1/4
        p-10 
        md:p-20
        hover:scale-105
        hover:shadow-xl
        "
          >
            <Image
              src={"/images/undraw-1.svg"}
              alt="image"
              width={1920}
              height={1080}
              className="
           h-40
                "
            />

            <div
              className="
                text-3xl
                 items-center
                  flex
                   justify-center
                   pt-10
                   text-[#2b1c50]
                   "
            >
              Access Anywhere
            </div>

            <div className="text-[#2b1c50] text-center leading-8 pt-4">
              Access our comprehensive tech courses and resources from
              anywhere—be it from the comfort of your home, during your commute,
              or while traveling. Our platform ensures uninterrupted learning,
              no matter where you are.
            </div>
          </div>

          <div
            className="
        bg-[#eff0ff]
        rounded-[20px]
        md:rounded-[80px]
        md:w-1/4
        p-10 
        md:p-20
        hover:scale-105
        hover:shadow-xl
        "
          >
            <Image
              src={"/images/undraw-1.svg"}
              alt="image"
              width={1920}
              height={1080}
              className="
           h-40
                "
            />

            <div
              className="
                text-3xl
                 items-center
                  flex
                   justify-center
                   pt-10
                   text-[#2b1c50]

                   
                   "
            >
              Certified Education
            </div>

            <div className="text-[#2b1c50] text-center leading-8 pt-4">
              Our courses are curated and certified by industry experts,
              ensuring that you receive high-quality education and recognized
              certifications upon completion, validating your tech skills in the
              industry.
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
    shadow-md

        "
          >
            See more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Explore;
