import Image from "next/image";

const SecondSection = () => {
  return (
    <div>
      <div className="items-center justify-center flex md:space-x-20">
        <div className="w-full bg-[#eff0ff]">
          <div className="md:py-40 py-16">
            <div className="md:flex px-10 md:px-20 md:gap-20 md:space-y-0 flex-row-reverse">
              <div className="text-2xl md:text-4xl items-center flex w-full md:w-1/2 order-2 md:order-1">
                <div className="flex">
                  <div className="space-y-10">
                    <div className="space-y-1 md:text-md">
                      <div className="text-[#2b1c50] font-medium md:leading-normal md:text-4xl">
                        Discover Comprehensive Tech Learning
                      </div>
                      <div
                        className="
                                        pt-4
                                         text-sm 
                                         md:text-md
                                          text-[#3d2e7c] 
                                          leading-6
                                           md:leading-10
                                           font-light
                                           md:w-4/5
                                           "
                      >
                        Embark on a transformative journey into the realm of
                        technology with our curated resources and multifaceted
                        approach to learning. we&apos;re dedicated to providing a
                        comprehensive platform that caters to diverse skill
                        levels and interests within the tech sphere.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                        Curated Content for Every Skill Level
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                        Explore a rich array of courses and learning paths
                        meticulously crafted for beginners stepping into the
                        world of tech, seasoned professionals aiming to upskill,
                        and everyone in between. Our content spans a wide
                        spectrum of tech domains, including programming
                        languages, web development, artificial intelligence,
                        cybersecurity, cloud computing, data science, and more.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                        Interactive and Engaging Learning Experience
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                        We believe in learning by doing. Our courses offer
                        interactive modules, hands-on projects, and real-world
                        applications that enable you to put theory into
                        practice. Dive deep into coding challenges, work on
                        industry-relevant projects, and gain the practical
                        skills needed to excel in the tech landscape.
                      </div>
                    </div>

                    <div className="space-y-1">
                      <div className="text-[#2b1c50] text-sm md:text-xl font-medium leading-normal">
                        Flexible Self-Paced Learning
                      </div>
                      <div className="text-sm md:text-md text-[#3d2e7c] pt-1 leading-6 md:leading-10 font-light md:w-4/5">
                        Learn at your own pace and convenience. Our platform
                        provides flexibility, allowing you to access resources
                        whenever and wherever you want. Whether you prefer a
                        structured course or bite-sized tutorials, our content
                        adapts to your schedule and learning preferences.
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 mb-10 md:mb-0 order-1 md:p-0 mt-10">
                <Image
                  src="/images/undraw-2.svg"
                  alt="image"
                  width={1920}
                  height={1080}
                  className="
                object-cover
                md:rounded-[60px]
                rounded-[40px]
                w-full
                p-10
                "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
