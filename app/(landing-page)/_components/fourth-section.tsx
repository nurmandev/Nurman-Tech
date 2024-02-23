import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Link2, MousePointerSquareDashed } from "lucide-react";
import Link from "next/link";

const FourthSection = () => {
  return (
    <div className="md:pt-10 pb-32 px-10">
      <div
        className="
        text-[#111019]
        md:text-center
        flex
        justify-center
        items-center
        md:text-6xl 
        text-4xl
        font-medium
        pb-10
        md:pb-20
        "
      >
        we bring a wealth of expertise to every project.
      </div>

      <div className="md:flex items-center justify-center">
        <div className="md:w-2/5 bg-[#b2b3f1] rounded-[60px] md:p-20">
          <Image
            src="/images/focused-woman.png"
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
          />
        </div>
        <div className="pt-10 md:ml-20 md:w-1/3">
          <div className="flex gap-6">
            <div className="hidden bg-[#d1d1f7] w-14 h-14 rounded-full md:flex items-center justify-center">
              <MousePointerSquareDashed className="text-6xl text-[#2b1c50]" />
            </div>

            <div className="w-full md:w-96">
              <div className="text-[#111019] font-medium leading-normal md:text-4xl text-2xl">
                I.T Consultancy
              </div>
              <div className="md:text-xl text-[#6c6684] leading-8 md:leading-10 font-light pt-6">
                Take advantage of our expertise in business development, growth
                hacking, product development, and startups by using our
                consultancy services.
              </div>
              {/* <Link href="/contact">
                <Button
                  className="
                md:text-lg
                mt-6
                rounded-[40px]
                text-[#4b42ad]
                font-medium
                md:py-6
                bg-[#eff0ff]
                hover:scale-110
                hover:shadow-indigo-500
                transition-all
                duration-300
                shadow-md"
                >
                  Get Stated
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-5/6 md:pl-10 md:mx-auto">
        <div className="flex flex-col-reverse md:flex-row md:mx-auto md:space-x-40 items-center justify-center">
          <div>
            <div className="flex gap-6">
              <div className="bg-[#d1d1f7] w-14 h-14 rounded-full hidden md:flex items-center justify-center">
                <CheckCircle2 className="text-6xl text-[#2b1c50]" />
              </div>
              <div className="md:w-96">
                <div className="text-[#111019] font-medium leading-normal text-xl md:text-4xl">
                  Mobile App Development
                </div>
                <div className="md:text-xl text-[#6c6684] leading-8 md:leading-10 font-light pt-6">
                  Create mobile apps with excellent usability and unique
                  features, whether they are native or hybrid (cross-platform).
                </div>

                {/* <Link href="/product">
                  <Button
                    className="
                            md:text-lg
                            mt-6
                            rounded-[40px]
                            text-[#4b42ad]
                            font-medium
                            md:py-6
                            bg-[#eff0ff]
                            hover:scale-110
                            hover:shadow-indigo-500
                            transition-all
                            duration-300
                            shadow-md                            "
                  >
                    Get Stated
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>

          <div
            className="mb-10
           md:mb-0 
           order-1
            mt-10 
            p-10
             md:items-center
              bg-[#eff0ff]
               rounded-[60px]"
          >
            <Image
              src="/images/mobile.png"
              alt="image"
              width={1920}
              height={1080}
              className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
            />
          </div>
        </div>
      </div>

      <div className="pt-10 md:flex items-center justify-center">
        <div className="md:w-2/5 bg-[#b2b3f1] rounded-[60px] md:p-20">
          <Image
            src="/images/guarantee.png"
            alt="image"
            width={1920}
            height={1080}
            className="
                object-cover
                rounded-md
                w-full
                p-10      
                "
          />
        </div>

        <div className="pt-20 md:ml-20 md:w-1/3">
          <div className="flex gap-6">
            <div
              className="hidden
                     bg-[#d1d1f7]
                      w-14
                       h-14 
                       rounded-full
                        md:flex
                         items-center 
                         justify-center"
            >
              <MousePointerSquareDashed className="text-6xl text-[#2b1c50]" />
            </div>
            <div className="w-full md:w-96">
              <div className="text-[#111019] font-medium leading-normal md:text-4xl text-2xl">
                Guarantee Conversion
              </div>
              <div className="md:text-xl text-[#6c6684] leading-8 md:leading-10 font-light pt-6">
                Our solutions are all about turning potential customers into
                paying ones. We promise to help you attract more customers and
                make more sales.
              </div>
              {/* <Link href="/product">
                <Button
                  className="
                            md:text-lg
                            mt-6
                            rounded-[40px]
                            text-[#4b42ad]
                            font-medium
                            md:py-6
                            bg-[#eff0ff]
                            hover:scale-110
                            hover:shadow-indigo-500
                            transition-all
                            duration-300
                            shadow-md
                            "
                >
                  Let&apos;s Start
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
