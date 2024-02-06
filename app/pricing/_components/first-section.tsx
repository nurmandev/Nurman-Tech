import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";

const FirstSection = () => {
  return (
    <div className="px-10">
      <div className="space-y-6 flex flex-col sm:text-center pt-6 md:pt-32 pb-14 md:px-0">
        <div className="text-4xl md:text-7xl font-medium">
          Choose the plan that fits your needs.
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-1/3 w-full">
          <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-[#eff0ff]">
            <div className="text-3xl md:text-5xl font-medium">Starter</div>
            <div className="text-xl pt-4 pb-8">For Individuals</div>
            <div className="text-2xl md:text-3xl font-semibold">$100</div>

            <Button
              className="
                        my-8
                        text-sm
                        md:text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        p-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Sign Up, It&apos;s Free
            </Button>

            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
            <div className="flex space-y-4 flex-col text-sm">
              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Basic AI-powered website creation tools
                </div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Limited customization options
                </div>
              </div>

              <hr className="border-indigo-300" />

              <div className="font-medium text-md">Key Features</div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Basic AI Suggestions</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Access to curated tech resources
                </div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Essential Customization</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Responsive Design</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Starter Support</div>
              </div>
            </div>

            <div className="pt-6 pb-20">See all features</div>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <div
            className="
          p-10 
          pt-16 
          md:p-20 
          rounded-[40px] 
          bg-[#fff]
          my-[-20px]
          md:my-0
          md:-mx-10
          border
          z-20
          shadow-xl
          
          "
          >
            <div className="text-3xl md:text-5xl font-medium">Business</div>
            <div className="text-xl pt-4 pb-8">For teams</div>
            <div className="flex gap-4 items-center">
              <div className="text-2xl md:text-3xl font-semibold">$250</div>
              <div className="text-xs font-light">USD/Creator/mo(annually)</div>
            </div>

            <Button
              className="
                        my-8
                        text-sm
                        md:text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        p-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Sign Up, It&apos;s Free
            </Button>

            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
            <div className="flex space-y-4 flex-col text-sm">
              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Explore an improved and more user-friendly interface for an
                  efficient website creation experience.
                </div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Access a broader range of templates catering to diverse
                  learning styles and subject matters.
                </div>
              </div>

              <hr className="border-indigo-300" />

              <div className="font-medium text-md">Key Features</div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">Advanced AI Assistance</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Extended Customization</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Enhanced Responsiveness</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">Expanded Template Library</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Priority Support</div>
              </div>
            </div>

            <div className="pt-6 pb-20">See all features</div>
          </div>
        </div>

        <div className="md:w-1/3 w-full">
          <div className="p-10 pt-16 md:p-20 rounded-[40px] bg-[#eff0ff]">
            <div className="text-3xl md:text-5xl font-medium">Contact Us</div>
            <div className="text-xl pt-4 pb-8">For Individuals/Teams</div>
            <div className="text-2xl md:text-3xl font-semibold">
              Let&apos;s chat
            </div>

            <Button
              className="
                        my-8
                        text-sm
                        md:text-md
                        font-light
                        rounded-[40px]
                        border-4
                        border-indigo-400/90
                        p-6
                        bg-[#565add]
                        hover:scale-110
                        transition-all
                        duration-300
                        shadow-md
                        hover:shadow-indigo-300

                        "
            >
              Book a Call, It&apos;s Free
            </Button>

            <div className="font-medium text-md md:text-lg pb-4">Includes:</div>
            <div className="flex space-y-4 flex-col text-sm">
              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Experience an advanced and highly intuitive interface for
                  effortless website creation.
                </div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">
                  Enjoy full access to an extensive template library covering a
                  wide range of topics and designs.
                </div>
              </div>

              <hr className="border-indigo-300" />

              <div className="font-medium text-md">Key Features</div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">Comprehensive AI Assistance</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Complete Customization</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500">Optimized Responsiveness</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Full Template Access</div>
              </div>

              <div className="flex space-x-6">
                <div>
                  <Check className="w-6 h-6" />
                </div>
                <div className="text-gray-500"> Dedicated Support</div>
              </div>
            </div>

            <div className="pt-6 pb-20">See all features</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
