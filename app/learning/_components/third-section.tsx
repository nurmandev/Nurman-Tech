import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="bg-[#e3f2ff] mx-auto">
      <div className="py-10 md:p-40">
        <div className="md:flex px-10 md:space-y-0 md:space-x-20 items-center">
          <div className="flex space-x-10">
            <div className="space-y-10">
              <div className="space-y-1 text-md">
                <div className="text-[#1c2850] font-medium leading-normal text-3xl md:text-4xl pb-4">
                  Community Engagement
                </div>
                <div className="text-xl text-[#1f3575] leading-8 font-light">
                  Engage in hackathons, peer-led learning groups, and networking
                  events, fostering a vibrant ecosystem where collaboration and
                  knowledge-sharing thrive.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Sustainable and Ethical Tech Education
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Our future initiatives will focus on responsible tech
                  practices, environmental consciousness, and ethical
                  considerations, nurturing a generation of socially responsible
                  tech leaders.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Expertly Curated Resources
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Benefit from our expert educators and industry professionals
                  who curate and design our content. Their wealth of experience
                  ensures that our materials are up-to-date, relevant, and
                  aligned with the latest industry trends and practices.
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xl text-[#1f3575] font-medium leading-normal">
                  Emphasis on Soft Skills and Mindset
                </div>
                <div className="text-sm md:text-md text-[#1f3575] leading-6 md:leading-10 font-light">
                  Beyond just business tactics, there&apos;ll be a focus on
                  emotional intelligence, resilience, and well-being.
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 pt-10 md:pt-0">
            <Image
              src={"/images/undraw-2.svg"}
              alt="image"
              width={700}
              height={700}
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
    </div>
  );
};

export default ThirdSection;
