import { ExternalLink } from "lucide-react";
import Link from "next/link";

const BottomCardBlue = () => {
  return (
    <div className="pb-40 px-10 bg-[#e3f3ff]">
      <div className="bg-[#fff] border p-10 items-center justify-center md:flex md:w-2/3 mx-auto md:p-20 rounded-[60px] md:rounded-[80px] md:justify-between">
        <div className="text-2xl md:text-5xl items-center font-medium flex text-center px-6">
          Free 10-Minute Demo Call
        </div>
        <div className="flex">
          <div
            className="mt-6
                text-white
                mx-auto
                w-60
                justify-between
                py-6
                font-light
                rounded-[40px]
                border-4
                border-indigo-400/90
                md:py-6
                bg-[#565add]
                hover:scale-110
                transition-all
                duration-300
                shadow-md
                hover:shadow-indigo-300

                "
          >
            <Link href="https://calendly.com/nurman_ng">
              <div className="flex items-center justify-center gap-4 md:justify-between px-6">
                <ExternalLink className="md:w-6 md:h-6 h-4 w-4" />
                <div className="md:text-lg text-sm">Book a demo Call</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomCardBlue;
