import Link from "next/link";

import Image from "next/image";
import BlurArrow from "../assets/blue-button.svg";
import Gradient from "../assets/Gradient.svg";
import HeroImage from "../assets/Image.svg";

export function Hero() {
  return (
    <div className="pt-4 lg:pt-10">
      <div className="px-[20px] lg:px-[280px]">
        <h1 className="text-center text-[32px] leading-[40px] font-medium text-[#172026] lg:text-[64px] lg:leading-[72px]">
          INNOVATIVE TECHNOLOGY SOLUTIONS
        </h1>
        <p className="text-center pt-6 text-[#36485C] lg:text-[18px] lg:leading-7">
          Team of exceptionally talented professionals working together to build
          the technology that solves immediate problems and those of the future.
        </p>

        <div className="flex w-full pt-8 justify-center gap-x-6 ">
          <div className="lg:w-fit w-1/2">
            <Link href="https://calendly.com/nurman_ng">
              <button className="bg-[#4328EB]  py-4 px-8 text-white rounded-[4px]">
                Book a call
              </button>
            </Link>
          </div>
          <Link href="/contact" className="flex items-center justify-center">
            <button className="text-[#4328EB] flex items-center justify-center gap-x-2 lg:w-fit">
              Let&apos;s Talk
              <span>
                <Image src={BlurArrow} alt="Learn more" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
