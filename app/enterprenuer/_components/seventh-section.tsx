import { Check } from "lucide-react";

const SeventhSection = () => {
  return (
    <div className="px-10">
      <div
        className="
        text-[#2b1c50]
         w-full
          text-center
           flex 
           justify-center
            items-center
             text-4xl
              md:text-6xl
               font-medium
                pb-20"
      >
        Entrepreneurial Mastery for Tomorrow&apos;s Success
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="md:flex">
          <div className="space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Trend Analysis</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Risk Management</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Customer-Centric Approach</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">
              Global Awareness
              </span>
            </div>
          </div>

          <div className="pt-10 md:pt-0 space-y-10 md:ml-40">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Strategic Planning</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Leadership Skills</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Ecosystem Understanding</span>
            </div>

            <div className="flex items-center gap-4">
              <div className="h-10 w-10 bg-[#eff0ff] items-center justify-center flex rounded-full">
                <Check className="text-3xl text-indigo-500" />
              </div>
              <span className="text-xl">Continuous Improvement</span>
            </div>
          </div>
        </div>

        <div className="underline pt-20 font-medium">See all features</div>
      </div>
    </div>
  );
};

export default SeventhSection;
