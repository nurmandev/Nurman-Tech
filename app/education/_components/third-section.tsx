import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="md:py-40 bg-[#111019]">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#2b1c50] md:mx-auto">
        <div className="py-20 md:py-40 px-10">
          <div className="md:flex md:px-20 md:space-x-20 md:space-y-0 items-center justify-center">
            <div className="flex md:w-1/2">
              <div className="flex flex-col text-center">
                <div className="md:text-7xl text-4xl text-[#eff0ff]">
                  We Innovate. Release. Connect. Iterate
                </div>
                <div className="text-xl md:text-3xl text-[#d1d1f7] py-6">
                  Our passion fuels the creation of exceptional applications,
                  reshaping user experiences and propelling business expansion.
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              <Image
                src="/images/undraw-2.svg"
                alt="image"
                width={1920}
                height={1080}
                className="object-cover
                            rounded-md
                            w-full
                            p-10
                            
                            "
              />
            </div>
          </div>

          <div className="md:flex items-center md:pt-20 justify-center md:justify-evenly space-y-10 md:space-y-0">
            <div>
              <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                Experiences
              </div>
              <div className="w-150 text-[#d1d1f7] text-sm leading-6">
                We specialize in crafting applications that redefine how users
                interact with technology. Through intuitive designs and
                innovative features, we elevate user experiences, fostering
                engagement and satisfaction.
              </div>
            </div>

            <div>
              <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                Organization
              </div>
              <div className="w-150 text-[#d1d1f7] text-sm leading-6">
                Our solutions, such as our comprehensive school management
                system and streamlined management applications, optimize
                operations. By automating processes and centralizing
                information, we empower businesses to operate more efficiently
                and effectively.
              </div>
            </div>

            <div>
              <div className="md:text-3xl pb-4 text-lg text-[#eff0ff] font-medium">
                Growth
              </div>
              <div className="w-150 text-[#d1d1f7] text-sm leading-6">
                With our digital book store and tailored applications, we enable
                businesses to tap into new markets and opportunities. By
                leveraging our solutions, businesses can drive growth, expand
                their reach, and stay ahead in today&apos;s competitive landscape.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
