import Image from "next/image";
import Arrow from "../assets/arrow.png";
import Link from "next/link";

export function Cta() {
  return (
    <div
      className="w-full rounded-[16px] bg-gradient-to-br from-pink-500 via-red-500 
    to-yellow-500 py-[56px] px-[32px] text-center lg:my-[60px] lg:px-[324px] lg:py-[89px]"
    >
      <h1 className="text-white text-[32px] font-medium lg:text-[56px] leading-[64px] ">
        Free 10 Minute Demo Call
      </h1>
      <p className="text-white pt-6 lg:pt-[48px] lg:text-[18px]">
        At the conclusion of this audit call, you&apos;ll gain a comprehensive
        insight into the actionable next steps for your business to establish a
        steady and dependable online presence through branding, web solutions,
        and paid advertising. To schedule your call and embark on this journey,
        kindly fill out the discovery form today. We eagerly anticipate our
        conversation with you! For any other inquiries, including general
        questions or collaboration opportunities, please feel free to reach us
        via email at.
      </p>

      <div className="mt-[40px] flex flex-col w-full items-center lg:mt-[56px] lg:flex-row lg:justify-center gap-x-[40px]">
        <Link href="https://calendly.com/nurman_ng">
          <button className="py-[16px] px-[32px] bg-white rounded-[4px] text-pink-500 w-fit font-medium">
            Book a call
          </button>
        </Link>
      </div>
    </div>
  );
}
