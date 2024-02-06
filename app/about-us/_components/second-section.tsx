import {
  Book,
  Computer,
  Link,
  MessageCircle,
  PencilLine,
  Scissors,
  ScreenShare,
  Share,
  VideoIcon,
} from "lucide-react";

const SecondSection = () => {
  return (
    <div className="px-10">
      <div className="text-4xl md:text-6xl flex justify-center font-medium pt-16 md:pt-28 pb-20">
        Top features of Nurman&apos;s
      </div>

      <div className="justify-center space-y-6 md:space-y-0 md:flex md:space-x-20">
        <div className="flex flex-col space-y-6">
          <div className="flex gap-6 items-center">
            <div className="bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full">
              <Computer className="w-5 h-5 text-green-600 " />
            </div>
            <div className="md:text-xl text-[#224229] font-light">
              Tech Excellence
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full">
              <ScreenShare className="w-5 h-5 text-green-600 " />
            </div>
            <div className="md:text-xl text-[#224229] font-light">
              Entrepreneurial Wisdom
            </div>
          </div>
        </div>

        <div className="flex flex-col space-y-6">
          <div className="flex gap-6 items-center">
            <div className="bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full">
              <MessageCircle className="w-5 h-5 text-green-600 " />
            </div>
            <div className="md:text-xl text-[#224229] font-light">
              AI-Powered Creation
            </div>
          </div>

          <div className="flex gap-6 items-center">
            <div className="bg-[#e8f5e3] p-3 items-center justify-center flex rounded-full">
              <PencilLine className="w-5 h-5 text-green-600 " />
            </div>
            <div className="md:text-xl text-[#224229] font-light">
              Educational Hub
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
