import Image from "next/image";
import Feature1 from "../assets/business-people-meeting.jpg";
import Feature2 from "../assets/businesswoman-using-tablet.jpg";
import Feature3 from "../assets/bulb-with-speech-bubbles-room.jpg";
import Check from "../assets/check.svg";
import greenButton from "../assets/green-button.svg";
import pinkButton from "../assets/pink-button.svg";
import Link from "next/link";

export function Features() {
  return (
    <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">
      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature1}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">
            Our Product Strategies
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Market Analysis
          </h1>
          <Image
            src={Feature1}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            We will conducting comprehensive market analysis to identify trends,
            opportunities, and potential challenges, informing a strategy that
            aligns your product with current and future demands.
          </p>

          <ul className="flex flex-col gap-y-3 lg:text-[18px]">
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Product Design
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Design strategy
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Web Design
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              User Experience
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              User Unterface
            </li>
            <li className="flex items-center gap-x-2 text-[#36485C]">
              <span>
                <Image src={Check} alt="Checkmark" />
              </span>
              Design Optimazation
            </li>
          </ul>

          <Link href="/contact">
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
              Contact us
              <span>
                <Image src={greenButton} alt="Learn more" />
              </span>
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row">
        <Image
          src={Feature2}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
          <h3 className="font-medium text-[#00A424] lg:text-[18px] ">
            Our Strategies
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Agile Adaptability
          </h1>
          <Image
            src={Feature2}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Our strategies are flexible and adaptive. We adjust to evolving
            market dynamics, enabling swift responses to changing customer needs
            and industry trends.
          </p>

          <Link href="/contact">
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
              Contact us
              <span>
                <Image src={greenButton} alt="Learn more" />
              </span>
            </p>
          </Link>
        </div>
      </div>

      <div className="flex flex-col gap-x-6 sm:flex-row-reverse">
        <Image
          src={Feature3}
          alt="Feature 1 image"
          className="hidden w-1/2 sm:block"
        />
        <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
          <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">
            HOW WE GET RESULTS
          </h3>
          <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
            Simple and Innovative process
          </h1>
          <Image
            src={Feature3}
            alt="feature 1 image"
            className="pt-[24px] sm:hidden"
          />
          <p className="py-[24px] text-[#36485C] lg:text-[18px]">
            Our Design methodology offers an iterative end-to-end approach to
            designing and brainstorming effective solutions with the highest
            quality and speed. Our approach works for every stage of your
            journey, whether you are creating a new experience or optimizing an
            existing one.
          </p>

          <div className="flex w-full gap-x-[24px] ">
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">100+</h3>
              <p className="text-[#36485C] ">
                Brand visibility and brand recognition.
              </p>
            </div>
            <div className="w-1/2 flex flex-col gap-y-3">
              <h3 className="text-[20px] font-medium text-[#172026]">800+</h3>
              <p className="text-[#36485C]">
                Solve the problem of time and distance.
              </p>
            </div>
          </div>

          <Link href="/contact">
            <p className="flex items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
              Contact us
              <span>
                <Image src={pinkButton} alt="Learn more" />
              </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
