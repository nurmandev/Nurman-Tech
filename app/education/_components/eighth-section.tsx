import { Link, PlayCircle, Zap } from "lucide-react";

const EighthSection = () => {
  return (
    <div className="py-40 bg-[#e3f3ff]">
      <div className="md:w-5/6 md:rounded-[80px] bg-[#1b224b] mx-auto">
        <div className="py-16 px-10 pb-32">
          <div className="md:flex md:px-20 md:space-x-20 md:space-y-0 items-center justify-center">
            <div className="text-[#e3f3ff] flex space-y-10">
              <div className="space-y-10 flex flex-col items-center justify-center">
                <div className="text-4xl md:text-7xl md:text-center md:w-2/3 pt-20">
                  Let&apos;s collaborate to position your brand as a leader.
                </div>
              </div>
            </div>
          </div>

          <div className="md:flex items-center justify-center text-white md:space-x-20 md:pt-20">
            <div className="py-4">
              <div className="flex items-center pb-4 gap-4">
                <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                  <Link className="text-4xl text-[#1b224b]" />
                </div>
                <div className="md:text-4xl text-md text-[#eff0ff]">
                  Get in Touch
                </div>
              </div>
              <div className="text-[#d1d1f7] text-lg font-light leading-10 w-5/6">
                Have a query about our services, want to explore collaboration
                opportunities, or simply seeking guidance? Drop us a message,
                and our team will get back to you promptly.
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-center pb-4 gap-4">
                <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                  <PlayCircle className="text-4xl text-[#1b224b]" />
                </div>
                <div className="md:text-4xl text-md text-[#eff0ff]">
                  Support
                </div>
              </div>
              <div className="text-[#d1d1f7] text-lg font-light leading-10 w-5/6">
                For immediate assistance or technical support, reach out to our
                dedicated customer support team. We&apos;re available to address
                your concerns and provide guidance.
              </div>
            </div>

            <div className="py-4">
              <div className="flex items-center pb-4 gap-4">
                <div className="bg-[#f1f0f3] h-12 w-12 items-center justify-center hidden md:flex rounded-full">
                  <Zap className="text-4xl text-[#1b224b]" />
                </div>
                <div className="md:text-4xl text-md text-[#eff0ff]">
                  Let&apos;s Talk
                </div>
              </div>
              <div className="text-[#d1d1f7] text-lg font-light leading-10 w-5/6">
                Ready to take your business to the next level? Let&apos;s
                discuss your goals and how our services can make a difference.
                Schedule a consultation, and let&apos;s start building together.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthSection;
