import Image from "next/image";
import Check from "../assets/check.svg";

export function Pricing() {
  return (
    <div className="py-[48px] lg:py-[60px]">
      <h1 className="text-[#172026] text-center font-medium  text-2xl lg:text-[42px]">
        PRODUCT STRATEGIES
      </h1>
      <p className="pt-[16px] pb-[40px] text-center text-[#36485C] lg:text-[18px]">
        We recognize the uniqueness of each project. With your team and
        requirements being dynamic, we adopt a modular approach to UX
        procedures, ensuring flexibility and customization to meet the specific
        needs of your project.
      </p>

      <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row">
        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Design thinking
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              Design thinking is a problem-solving methodology that places a
              strong emphasis on creativity and innovation. UX/UI designers
              leverage the design thinking approach to pinpoint challenges and
              develop inventive solutions. By meticulously examining user
              objectives, feedback, and end tasks, designers employ this
              approach to ensure a holistic and user-centric solution.
            </p>
          </div>
          {/* <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Start Trial
          </button> */}
        </div>

        <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
          <div>
            <h3 className="font-medium text-white text-[18px] lg:text-xl">
              Design Sprint
            </h3>
            <p className="pt-[12px] text-[#F4F8FA] lg:text-[18px]">
              A design sprint is a method derived from design thinking,
              involving collaborative creation, rapid prototyping, and
              qualitative user testing. This approach is employed to tackle
              complex issues efficiently and effectively.
            </p>
          </div>
          {/* <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Get Started
          </button> */}
        </div>

        <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
          <div>
            <h3 className="font-medium text-[#4328EB] text-[18px] lg:text-xl">
              Agile Methodology
            </h3>
            <p className="pt-[12px] text-[#36485C] lg:text-[18px]">
              The Agile design methodology involves designers collaborating
              closely with other team members, including developers and
              marketing experts. This collaborative approach not only enhances
              trust among team members but also fosters a sense of active
              participation in the project.
            </p>
          </div>
          {/* <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium">
            Contact Us
          </button> */}
        </div>
      </div>
    </div>
  );
}
