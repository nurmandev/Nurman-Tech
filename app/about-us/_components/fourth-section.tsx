import { Zap, Link, PlayCircle } from "lucide-react";

const FourthSection = () => {
  return (
    <div className="items-center justify-center flex md:py-16">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#2b1c50] py-20 px-10">
        <div className="flex flex-col text-center">
          <div>
            <div className="pt-16 pb-8 text-4xl md:text-7xl text-[#eff0ff]">
              Our Mission that make us better than Others
            </div>
            <div className="text-xl font-light mt-4 leading-8 md:text-3xl text-[#d1d1f7] md:text-center mx-auto md:w-3/4">
              Our mission is to empower individuals and businesses by providing
              innovative learning solutions that transcend boundaries. We are
              dedicated to facilitating skill enhancement, fostering creativity,
              and promoting entrepreneurship through accessible, personalized,
              and cutting-edge educational platforms.
            </div>
          </div>

          <video
            className="
            mt-20
            md:w-2/3
            rounded-[40px]
            mx-auto
            shadow-indigo-400
            shadow-2xl

         
         
         
            "
            autoPlay
            muted
            loop
          >
            <source src="/videos/hero-1.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="md:flex items-center justify-center text-white md:space-x-20 pt-20 space-y-6">
          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Holistic” Empowerment
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              Our mission focuses not only on business success but also on
              personal growth. We prioritize empowering individuals to optimize
              their resources, fostering success in both professional endeavors
              and personal fulfillment.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Global” Accessibility
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              Our mission aims to reach and assist working individuals
              worldwide. We strive to make our resources and support accessible
              to anyone ready to learn and grow, regardless of their location or
              background.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Tailored” Learning
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We stand out by offering personalized learning solutions. Our
              commitment is to provide resources that are customizable and
              adaptable to individual needs, ensuring that our support resonates
              with each user&apos;s unique circumstances and goals.
            </div>
          </div>
        </div>

        <div className="md:flex items-center justify-center text-white md:space-x-20 pt-10 space-y-6">
          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Practicality” & Tangibility
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We emphasize practicality in our approach. Our mission isn&apos;t
              just aspirational but provides tangible tools and strategies that
              individuals can immediately implement to enhance productivity,
              achieve success, and enjoy a better life.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Resource” Optimization
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              we prioritize resource optimization. We believe that efficiency
              and productivity come not only from hard work but also from smart
              resource allocation and utilization.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Improvement” Culture
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              Our mission isn&apos;t static; it&apos;s dynamic and evolves to
              meet the changing needs of our users. We embrace a culture of
              continuous improvement, consistently enhancing our offerings to
              ensure they remain relevant and impactful for our audience.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
