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
              Our mission is to develop technology that not only solves problems
              but also anticipates and shapes the future.
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
                “Excellence”
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We strive for excellence in all aspects of our work, delivering
              high-quality solutions that exceed expectations.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Innovation”
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We embrace innovation as a catalyst for change, constantly seeking
              new ideas and approaches to drive progress.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Integrity”
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We conduct ourselves with integrity and honesty, building trust
              with our clients, partners, and colleagues.
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
                “Collaboration”
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We foster a culture of collaboration, recognizing that our
              collective strength is greater than the sum of our parts.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">“Impact”</div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              We are driven by the desire to make a positive impact, both in the
              short term and for generations to come.
            </div>
          </div>

          <div className="py-4">
            <div className="flex items-center pb-4 gap-4">
              <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                <Link className="text-4xl text-[#1b224b]" />
              </div>
              <div className="md:text-4xl text-md text-[#eff0ff]">
                “Our Vision”
              </div>
            </div>
            <div className="text-[#d1d1f7] text-sm font-light leading-6">
              Our vision is to be at the forefront of technological innovation,
              shaping the future of industries and society as a whole. Through
              our dedication, expertise, and relentless pursuit of excellence,
              we aim to leave a lasting legacy that inspires and empowers future
              generations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
