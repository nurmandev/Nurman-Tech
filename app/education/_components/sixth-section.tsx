const SixthSection = () => {
  return (
    <div className="md:py-40 py-0 bg-[#e3f3ff]">
      <div className="md:text-center items-center justify-center flex flex-col px-10 py-20">
        <div className="text-4xl md:text-7xl flex md:justify-center font-medium pb-4 text-[#1b224b] md:w-2/3">
          Tapping into Possibilities with Design, Branding, and New Ideas
        </div>

        <p className="md:text-3xl font-light md:w-2/3 md:mx-auto text-[#1f357f] leading-loose text-xl">
          Our expertise lies in transforming raw ideas into refined masterpieces
          that not only captivate but also strategically position your business
          to attract and convert visitors into loyal paying customers.
        </p>

        <video
          className="
            mt-10
            md:hidden
                rounded-[20px]
                 xl:w-5/6
                  xl:mx-auto"
          autoPlay
          muted
          loop
        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div
        className="hidden
      md:flex
      items-center
        justify-center
        flex-col

      "
      >
        <div
          className="
        text-6xl
        font-medium
        text-center
        justify-center
        mt-60
        md:px-20
        leading-loose
        text-gradient
        bg-gradient-to-b
        from-blue-500
        to-blue-200
        bg-clip-text
        text-transparent
        "
        >
          our design solutions are crafted with precision and creativity. We
          believe in the power of visual storytelling—each design element
          meticulously tailored to convey your brand&apos;s essence and message.
        </div>

        <video
          className="
         rounded-[40px]
         md:w-2/3
         position
         absolute
         z-10
         "
          autoPlay
          muted
          loop
        >
          <source src="/videos/hero-1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default SixthSection;
