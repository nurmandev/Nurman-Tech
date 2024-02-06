"use client";

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1.67,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    pauseOnFocus: true,
    className: "w-full",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  return (
    <div className="md:pb-20 flex flex-col items-center justify-center pb-32">
      <div className="pt-40 text-3xl px-10 pb-20 font-medium space-y-10">
        <div className="md:text-center md:text-7xl">
          Discover What Users Are Saying
        </div>
        <div
          className="
            text-xl
             md:text-3xl
              md:w-3/4
               md:mx-auto
                md:text-center
                 text-[#575454] 
                 leading-10
                 font-light
                 
                 "
        >
          Consider including a mix of testimonials from various user types
          . Educators, Students, Professionals, to showcase the platform&apos;s
          versatility and benefits across different audiences.
        </div>
      </div>
      <Slider {...settings} className="w-full">
        <>
          <div className=" bg-[#e3f3ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Using Nurman AI has revolutionized the way I curate learning
              materials for my students. The AI-generated websites are spot-on
              and immensely beneficial.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">John Smith</div>
                <div className="text-sm">Educational Consultant</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className=" bg-[#e7e0ff] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;I&apos;m amazed at the ease of managing my learning content.
              The encryption feature adds an extra layer of security I greatly
              appreciate.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Sarah Johnson</div>
                <div className="text-sm">Lifelong Learner</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className=" bg-[#e3ffef] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;Integrating our materials into the platform was seamless.
              Our clients now enjoy tailored learning experiences thanks to
              Nurman AI&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">ProficientNG Company</div>
                <div className="text-sm">Learning Solutions Provider</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className=" bg-[#ffede3] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;The flexibility to customize content is a game-changer for
              my students. Nurman AI has made learning more engaging and
              personalized.&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>
              <div className="text-[#1f357f]">
                <div className="font-medium">Michael Rodriguez</div>
                <div className="text-sm">High School Teacher</div>
              </div>
            </div>
          </div>
        </>

        <>
          <div className=" bg-[#fffce3] rounded-[60px] md:rounded-[80px] p-10 md:p-20  flex flex-col md:items-center space-y-10  mb-10 mx-6">
            <div>
              <Image
                src="/logos/logoipsum-222.svg"
                alt="logo"
                width={500}
                height={500}
                className="
                 w-40
                    "
              />
            </div>
            <div className="text-lg font-medium md:text-3xl text-[#1b224b] md:text-center md:w-3/5">
              &quot;The ability to create and share learning websites
              effortlessly has expanded my reach as an educator. Highly
              recommended!&quot;
            </div>

            <div className="flex items-center md:justify-center space-x-4 md:space-x-0">
              <div className="h-10 w-12 md:w-20 md:h-10">
                <Image
                  src="/images/undraw-3.svg"
                  alt="image"
                  width={500}
                  height={500}
                  className="rounded-full
                        object-cover
                        h-full
                        md:h-12
                        md:w-12
                        "
                />
              </div>

              <div className="text-[#1f357f]">
                <div className="font-medium">Emily Davis</div>
                <div className="text-sm">Online Course Creator</div>
              </div>
            </div>
          </div>
        </>
      </Slider>
    </div>
  );
};

export default Testimonials;
