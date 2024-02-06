import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EighthSection = () => {
  return (
    <div className="py-32 items-center justify-center flex">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#2b1c50] items-center justify-center flex">
        <div className="md:py-40 pt-10">
          <div className="md:flex md:px-20 md:space-x-20 md:space-y-0">
            <div className="text-white flex space-y-10">
              <div className="space-y-10 flex-col items-center justify-center flex">
                <div className="text-md">FROM OUR BLOG</div>
                <div className="md:text-7xl text-4xl w-3/4 text-center">
                  How to improve
                </div>

                <div
                  className="
                                md:flex 
                                md:space-x-10
                                 space-y-10
                                  md:space-y-0 
                                  items-center
                                   justify-center
                                    px-10
                                    md:px-20
                                    "
                >
                  <div
                    className="
                                        md:w-1/2
                                         bg-[#9f92ec]
                                          rounded-[60px]
                                           p-10
                                           md:p-20
                                           space-y-10
                                           items-center 
                                           justify-center
                                           flex
                                           flex-col

                                           
                                           "
                  >
                    <div className="text-3xl">
                      The Entrepreneurial Mindset Imperative{" "}
                    </div>
                    <p className="leading-10 items-center flex justify-center">
                      The World Has Changed in Ways That Now Require Everyone to
                      Think Like an Entrepreneur.
                    </p>

                    <div className="flex space-x-10">
                      <span>Read the article</span>
                      <ArrowRight className="text-3xl" />
                    </div>
                  </div>

                  <div
                    className="
                md:w-1/2 
                bg-[#9f92ec]
                 rounded-[60px]
                  p-10 
                  md:p-20
                   space-y-10
                    items-center
                    justify-center
                    flex
                    flex-col
                    
                    "
                  >
                    <div className="text-3xl">
                      Professional Development Keynotes & Workshops
                    </div>

                    <p className="leading-10 md:h-40 items-center flex justify-center">
                    Cultivate an entrepreneurial mindset in your organization.

                    </p>

                    <div className="flex space-x-10">
                      <span>Read the article</span>
                      <ArrowRight className="text-3xl" />
                    </div>
                  </div>
                </div>

                <div className="pb-20">
                  <Button
                    className="
                    text-md
                    font-light
                    w-40
                    rounded-[40px]
                    border-4
                    borderindigo-400/90
                    p-8
                    bg-[#565add]
                    hover:scale-110
                    hover:shadow-indigo-500
                    transition-all
                    duration-300
                    shadow-md

                    "
                  >
                    Explore our blog
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthSection;
