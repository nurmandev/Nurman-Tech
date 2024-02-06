import { Button } from "@/components/ui/button";
import { Download, PhoneCall } from "lucide-react";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="md:py-40 py-10 bg-[#f1f1f1] px-10">
      <div className="md:text-center">
        <div
          className="
        text-5xl
        md:text-7xl
        flex
        justify-left
        pb-10
        
        "
        >
          About Us
        </div>

        <div
          className="
        text-5xl
        md:text-7xl
        flex
        justify-center
        font-medium
        pb-10
        text-[#681b58]
        "
        >
          meets expertise to shape the future of technology.
        </div>
        <p
          className="
        text-xl
        md:text-3xl
        font-light
        md:w-4/5
        md:mx-auto
        text-[#681b58]
        leading-normal
        "
        >
          We&apos; are driven by a shared passion for solving challenges and
          pushing boundaries. Together, we form a dynamic force committed to
          creating impactful solutions that address both immediate needs and
          future opportunities.
        </p>

        <div className="flex gap-4 md:justify-center items-center pt-10">
          <Link href={"https://calendly.com/nurman_ng"}>
            <Button
              className="
            text-xl
            font-light
            gap-6
            hidden
            md:flex
            rounded-[60px]
            border-8
            border-indigo-400/90
            py-8
            bg-[#565add]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            hover:shadow-indigo-300
            "
            >
              <PhoneCall className="w-6 h-6" />
              Request a demo
            </Button>
          </Link>

          <Link href={"/app"}>
            <Button
              className="
            md:text-xl
            text-[#565add]
            font-medium
            md:gap-6
            gap-4
            rounded-[60px]
            border-indigo-400/90
            md:py-8
            md:px-6
            bg-[#eff0ff]
            hover:scale-110
            transition-all
            duration-300
            shadow-md
            hover:shadow-indigo-300

            "
            >
              <Download className="md:w-6 md:h-6 h-4 w-4" />
              Download Our app
            </Button>
          </Link>
        </div>

        <div className="pt-20 md:pt-28">
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
            <source src="/videos/hero-1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
